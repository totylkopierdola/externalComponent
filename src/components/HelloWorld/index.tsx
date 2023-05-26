//@ts-nocheck

import ReactDOM from 'react-dom';
import { useEffect, useState } from 'react';
import prettier from 'prettier';
import parserGraphQL from 'prettier/parser-graphql';
import 'bootstrap/dist/css/bootstrap.min.css';
import './SchemaExplorer.css';

class CheckboxObjBuilder {
  constructor(initialState = {}) {
    this.checkboxObj = initialState;
  }

  checkboxObj = {};

  currentRelation = null;

  setCurrentRelation(relation) {
    this.currentRelation = relation;
  }
  toggleProperty(relation, property, nestedRelations = []) {
    let currentObj = this.checkboxObj;

    for (const relationName of nestedRelations) {
      if (!currentObj[relationName] || typeof currentObj[relationName] !== 'object') {
        currentObj[relationName] = {};
      }
      currentObj = currentObj[relationName];
    }

    if (currentObj[property]) {
      delete currentObj[property];
    } else {
      currentObj[property] = true;
    }
  }

  isSelected(relation, property) {
    if (this.checkboxObj[relation]?.[property] === true) {
      return true;
    }
  }

  getCheckboxObj() {
    return this.checkboxObj;
  }
}

function App() {
  const baseUrl = '../public/data';

  const [generatedGraphQLQuery2, setGeneratedGraphQLQuery2] = useState('');

  const [entityDefinitions, setEntityDefinitions] = useState(null);
  const [chosenRelationData, setChosenRelationData] = useState(null);
  const [chosenRelationName, setChosenRelationName] = useState(null);
  const [chosenRelationNameFromUrl, setChosenRelationNameFromUrl] = useState(null);

  const [chosenSchema, setChosenSchema] = useState('');
  const [schema, setSchema] = useState(null);
  const [generatedQuery, setGeneratedQuery] = useState('');
  const [selectedMembers, setSelectedMembers] = useState({});

  const [tabNumber, setTabNumber] = useState(0);

  const [checkboxObjBuilder, setCheckboxObjBuilder] = useState(new CheckboxObjBuilder());

  const [relationPath, setRelationPath] = useState([]);

  const [isBacked, setIsBacked] = useState(false);

  const [chosenRelationNamesArr, setChosenRelationNamesArr] = useState([]);

  const [allAddedParents, setAllAddedParents] = useState([]);

  useEffect(() => {
    async function fetchEntityDefinitions() {
      try {
        const baseUrl = 'https://dam4-training.sitecoresandbox.cloud/api/entitydefinitions';
        let url = `${baseUrl}?viewMode=Extended&loadPermissions=False&includeConditionalMembers=False`;
        let allData = [];

        while (url) {
          const response = await fetch(url);
          const { items, next } = await response.json();

          allData = [...allData, ...items];
          url = next?.href ?? null;
        }

        setEntityDefinitions(allData);
        setSchema(allData?.map((item) => item.name));
      } catch (error) {
        console.error(error);
      }
    }

    async function fetchChosenRelationData() {
      try {
        if (chosenRelationNameFromUrl) {
          // const response = await fetch(`https://dam4-training.sitecoresandbox.cloud/api/entitydefinitions/${chosenRelationNameFromUrl}`);
          const response = await fetch(
            `https://dam4-training.sitecoresandbox.cloud/api/entitydefinitions/${chosenRelationNameFromUrl}`,
          );
          // console.log(`https://dam4-training.sitecoresandbox.cloud/api/entitydefinitions/${chosenRelationNameFromUrl}`)
          const data = await response.json();
          setChosenRelationData(data);
        }
      } catch (error) {
        console.error(error);
      }
    }

    fetchChosenRelationData();
    fetchEntityDefinitions();
  }, [chosenRelationNameFromUrl]);

  useEffect(() => {
    // generateGraphQLQuery();
    generateGraphQLQuery2();
  }, [chosenSchema, checkboxObjBuilder, tabNumber]);

  const handleSchemaChange = (event) => {
    const selectedSchema = event.target.value;
    setChosenSchema(selectedSchema);
  };

  const handleMemberSelection = (member) => {
    const newCheckboxObjBuilder = new CheckboxObjBuilder(checkboxObjBuilder.getCheckboxObj());
    const relation = tabNumber === 0 ? chosenSchema : chosenRelationName;
    newCheckboxObjBuilder.toggleProperty(relation, member, relationPath);
    setCheckboxObjBuilder(newCheckboxObjBuilder);
  };

  function generateGraphQLQuery2() {
    let isCardinalityManyToMany = false;

    const checkIsCardinalityManyToMany = () => {
      chosenRelationData.member_groups.map((memberGroup) => {
        memberGroup.members.map((member) => {
          if (member.name === chosenRelationName && member.cardinality === 'ManyToMany') {
            isCardinalityManyToMany = true;
          }
          if (member.name === chosenRelationName && member.cardinality === 'OneToMany') {
            isCardinalityManyToMany = false;
          }
        });
      });
    };

    const checkboxObj = checkboxObjBuilder.getCheckboxObj();

    const generateQuery = () => {
      const formatQuery = (query) => {
        query.replace(/\./g, '_');
        try {
          const formattedQuery = prettier.format(query, {
            parser: 'graphql',
            plugins: [parserGraphQL],
          });
          return formattedQuery;
        } catch (error) {
          console.error('Failed to format query:', error);
          return query;
        }
      };

      const fields = Object.keys(checkboxObj).map((key) => {
        // let allParents = [];
        console.clear();
        console.log('Object.keys(checkboxObj)', Object.keys(checkboxObj));

        if (typeof checkboxObj[key] === 'boolean') {
          // assign all new parens to the variable
          let parentsArr = [];
          Object.keys(checkboxObj).map((key) => {
            if (typeof checkboxObj[key] === 'boolean') {
              // parentsArr = [...parentsArr, key];

              // add key to allAddedParents every time a new key is added
              setAllAddedParents([...allAddedParents, key]);
            }
          });

          return key;
        } else {
          setAllAddedParents([...allAddedParents, key]);
          // console.clear()
          // console.log('allAddedParents', allAddedParents)

          const subFields = Object.keys(checkboxObj[key]);
          const subFieldQueries = subFields.map((subField) => `${subField}`);
          const subFieldQuery = subFieldQueries.join('\n');

          // checkIsCardinalityManyToMany();

          // const newestKey = subFields[subFields.length - 1]

          console.log('key', key);

          // checkIsCardinalityManyToMany();

          checkIsCardinalityManyToMany() 
            // console.log('weszlo ManyToMany');

            if(isCardinalityManyToMany === true) {

              return `${key} {
                results {
                  ${subFieldQuery}
                }
              }`;
            } else {
              isCardinalityManyToMany = false;
              return subFieldQuery
              ? `${key} {
              ${subFieldQuery}
            }`
              : `${key}`;
            }
            
        }
      });

      // console.log('allAddedParents', allAddedParents)

      const query = `
        query allRIC_Article {
          results {
            ${fields.join('\n').replace(/\./g, '_')}
          }
        }`;

      const prettierQuery = formatQuery(query);

      setGeneratedGraphQLQuery2(prettierQuery);
    };

    generateQuery();
  }

  function prettifyQuery() {
    const formatQuery = (query) => {
      try {
        const formattedQuery = prettier.format(query, {
          parser: 'graphql', // Use the 'babel' parser for JavaScript code
          plugins: [parserGraphQL], // Add any required prettier plugins
        });
        return formattedQuery;
      } catch (error) {
        console.error('Failed to format query:', error);
        return query;
      }
    };
    const prettierQuery = formatQuery(generatedQuery);
    setGeneratedQuery(prettierQuery);
    console.log('Generated query', formatQuery(generatedQuery));
  }

  const handleCheckboxChange = (event) => {
    const { name } = event.target;
    const newCheckboxObjBuilder = new CheckboxObjBuilder(checkboxObjBuilder.getCheckboxObj());
    const relation = tabNumber === 0 ? chosenSchema : chosenRelationName;
    newCheckboxObjBuilder.toggleProperty(relation, name, relationPath);
    setCheckboxObjBuilder(newCheckboxObjBuilder);
  };


  const schemaDefinition = entityDefinitions?.find((item) => item.name === chosenSchema);



  return (
    <>
      {/* <button
      onClick={() => {
        console.log('chosenRelationName', chosenRelationName);
      }}
    >
      chosenRelationName
    </button> */}

      <header>
        {chosenSchema ? <h1>Schema: {chosenSchema}</h1> : <h1>Choose Schema:</h1>}
        <select onChange={handleSchemaChange}>
          <option>Select a schema</option>
          {entityDefinitions?.map((item) => (
            <option key={`option-${item.name}`} value={item.name}>
              {item?.name}
            </option>
          ))}
        </select>
        <div className="buttons-section">
          <button
            onClick={() => {
              generateGraphQLQuery2();
              prettifyQuery();
            }}
          >
            Generate Query
          </button>
          <button onClick={() => prettifyQuery()}>Prettier</button>
          <button>Validate mapping</button>
          <button>Validate query</button>
        </div>
      </header>
      {/* <h4>Tab {tabNumber}</h4>
        <h4>{tabNumber === 0 ? 'Properties' : 'Relations'}</h4> */}

      <div
        className="div"
        key="div"
        style={{
          border: '1px solid #0d6efd',
          borderRadius: 5,
          display: 'flex',
          marginTop: 20,
          marginBottom: 20,
          padding: 0,
          width: '100%',
          height: '100%',
          minHeight: 400,
        }}
      >
        <div
          className=""
          style={{
            height: '100%',
            width: '100%',
            overflow: chosenSchema ? 'auto' : 'hidden',
            display: 'flex',
            flexDirection: 'row',
            paddingTop: 10,
            paddingBottom: 10,
          }}
        >
          {!chosenSchema && (
            <h4
              style={{
                textAlign: 'center',
                fontSize: 20,
                opacity: 0.2,
                position: 'absolute',

                top: '42%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
              }}
            >
              {' '}
              Choose Schema First
            </h4>
          )}
          {/* PROPERTIES SECTION */}
          <div
            style={{
              maxHeight: 400,
              opacity: tabNumber === 0 ? 1 : 0.4,
              pointerEvents: tabNumber === 0 ? 'all' : 'none',
            }}
          >
            {
            schemaDefinition?.member_groups.map((memberGroup, groupIndex) => (
              <div key={`group-${groupIndex}`}>
                {memberGroup.members.map((member, memberIndex) => (
                  <ul key={`member-${member.name}-${memberIndex}`}>
                    <li className="triple-col" key={`member-${member.name}-${memberIndex}`}>
                      <span style={{ display: 'flex', gap: 5 }}>
                        <input
                          key={`input-${member.name}-${memberIndex}`}
                          type="checkbox"
                          name={member.name}
                          checked={checkboxObjBuilder.isSelected(chosenSchema, member.name)}
                          onChange={handleCheckboxChange}
                        />
                        {member.name}
                      </span>
                      <span>{memberGroup.name}</span>
                      <span
                        onClick={() => {
                          if (member.type === 'Relation') {
                            setTabNumber(1);
                            setChosenRelationName(member.name);
                            setChosenRelationNameFromUrl(
                              member.associated_entitydefinition.href.split('/').pop(),
                            );
                            setRelationPath([...relationPath, member.name]);
                            checkboxObjBuilder.setCurrentRelation(member.name);
                          }
                        }}
                        style={
                          member.type === 'Relation'
                            ? { cursor: 'pointer', fontWeight: 'bold' }
                            : {}
                        }
                      >
                        {member.type}
                      </span>
                      {/* cardinality type: {member.cardinality} */}
                    </li>
                  </ul>
                ))}
              </div>
            ))
            }
          </div>
        </div>

        {/* RELATIONS SECTION */}
        {chosenSchema && (
          <button
            onClick={() => {
              setTabNumber(0);
              setRelationPath(relationPath.slice(0, -1));
              setIsBacked(true);
            }}
            disabled={tabNumber === 0}
          >
            Back
          </button>
        )}
        <div style={{ width: '50%', paddingTop: 10, paddingBottom: 10 }}>
          {!chosenRelationData && (
            <span
              style={{ marginLeft: 10, display: chosenSchema ? 'block' : 'none', opacity: 0.4 }}
            >
              Click on property relation
            </span>
          )}
          {chosenRelationData && tabNumber === 1 && (
            <ul
              style={{
                display: 'flex',
                flexDirection: 'column',
                padding: 0,
              }}
            >
              {chosenRelationData.member_groups.map((memberGroup, groupIndex) => (
                <div key={`group-${groupIndex}`}>
                  {memberGroup.members.map((member, memberIndex) => (
                    <ul key={`member-${member.name}-${memberIndex}`}>
                      {member.type !== 'Relation' && (
                        <li key={`member-${member.name}-${memberIndex}`}>
                          <span>
                            <input
                              key={`input-${member.name}-${memberIndex}`}
                              type="checkbox"
                              checked={checkboxObjBuilder.isSelected(chosenRelationName, member.name)}
                              onChange={() => handleMemberSelection(member.name)}
                            />
                            {member.name}
                            </span> 
                            <span>{memberGroup.name}</span>
                          <span
                            onClick={() => {
                              if (member.type === 'Relation') {
                                setTabNumber(1);
                                setChosenRelationName(member.name);
                                setChosenRelationNameFromUrl(
                                  member.associated_entitydefinition.href.split('/').pop(),
                                );
                                setRelationPath([...relationPath, member.name]);
                                checkboxObjBuilder.setCurrentRelation(member.name);
                              }
                            }}
                          >
                            {member.type}
                          </span>
                        </li>
                      )}
                    </ul>
                  ))}
                </div>
              ))}
            </ul>
          )}
        </div>
      </div>

      <div
        style={{
          position: 'relative',
        }}
      >
        <textarea
          className="form-control"
          value={generatedGraphQLQuery2}
          onChange={() => generateGraphQLQuery2()}
          spellCheck="false"
        >
        </textarea>
        <button
          style={{
            position: 'absolute',
            right: 30,
            bottom: 30,
            fontSize: 12,
          }}
          onClick={() => {
            navigator.clipboard.writeText(generatedGraphQLQuery2);
          }}
        >
          Copy Query
        </button>
      </div>
    </>
  );
}

export default function createExternalRoot(rootElement: HTMLElement) {
  ReactDOM.render(<App />, rootElement);

  return {
    unmount() {
      ReactDOM.unmountComponentAtNode(rootElement);
    },
  };
}
