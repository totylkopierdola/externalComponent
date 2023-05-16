//@ts-nocheck

import ReactDOM from 'react-dom';
import './SchemaExplorer.css';
import { useEffect, useState } from 'react';

function App() {
  const [entityDefinitions, setEntityDefinitions] = useState(null);
  const [chosenSchema, setChosenSchema] = useState(null);

  const [schemaData, setSchemaData] = useState(null);
  const [selectedMemberGroup, setSelectedMemberGroup] = useState(null);

  const [expandedProperty, setExpandedProperty] = useState(null);
  const [queryResult, setQueryResult] = useState(null);

  const baseUrl = 'https://dam4-training.sitecoresandbox.cloud';

  useEffect(() => {
    async function fetchEntityDefinitions(url) {
      try {
        const response = await fetch(url || `${baseUrl}/api/entitydefinitions`);
        const data = await response.json();
  
        setEntityDefinitions((prevData) => {
          const newData = {
            items: (prevData?.items || []).concat(data.items),
            next: data.next
          };
          return newData;
        });
  
        if (data.next) {
          // If paginated, recursively fetch the next page
          await fetchEntityDefinitions(data.next);
        } else {
          console.log('All items fetched:', entityDefinitions?.items);
        }
      } catch (error) {
        console.error(error);
      }
      !chosenSchema && setChosenSchema(entityDefinitions?.items?.[0]?.name);
    }
  
    async function fetchData() {
      if (chosenSchema) {
        try {
          const response = await fetch(`${baseUrl}/api/entitydefinitions/${chosenSchema}`);
          const data = await response.json();
          setSchemaData(data);
          setSelectedMemberGroup(data?.member_groups[0]?.name);
        } catch (error) {
          console.error(error);
        }
      }
    }
    fetchEntityDefinitions();
    fetchData();
  }, [chosenSchema]);

  function handleMemberGroupClick(name) {
    setSelectedMemberGroup(name);
  }

  function handleIconClick(property) {
    if (expandedProperty === property) {
      setExpandedProperty(null);
    } else {
      setExpandedProperty(property);
    }
  }

  function generateQuery() {
    if (!schemaData || !selectedMemberGroup) return '';

    const memberGroup = schemaData.member_groups.find(
      (group) => group.name === selectedMemberGroup,
    );
    if (!memberGroup) return '';

    const selectedProperties = memberGroup.members.filter((member) => member.selected);

    if (selectedProperties.length === 0) return ''; // No properties selected

    const query = `    {  
      ${memberGroup.name} {
        ${selectedProperties.map((property) => property.name).join('\n        ')}
      }
    }`;

    console.log(query);
    return query;
  }

  async function executeQuery() {
    const query = generateQuery();
    if (!query) return;

    try {
      const response = await fetch('<YOUR_GRAPHQL_ENDPOINT>', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });
      const result = await response.json();
      setQueryResult(result.data);
    } catch (error) {
      console.error(error);
    }
  }

  function handleCheckboxChange(member, checked) {
    const updatedSchemaData = { ...schemaData };
    const memberGroup = updatedSchemaData.member_groups.find(
      (group) => group.name === selectedMemberGroup,
    );
    const selectedMember = memberGroup.members.find((m) => m.name === member.name);
    selectedMember.selected = checked;
    setSchemaData(updatedSchemaData);
  }

  function handleSchemaChange(event) {
    const selectedSchema = event.target.value;
    setChosenSchema(selectedSchema);
  }

  return (
    <>
      <div>
        {chosenSchema ? <h1>Schema: {chosenSchema}</h1> : <h1>Choose Schema:</h1>}
        <select onChange={handleSchemaChange}>
          {entityDefinitions?.items?.map((item) => (
            <option key={`option-${item.name}`} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
      </div>

      <div className="container" key="container">
        <div className="left-side">
          {schemaData?.member_groups.map((item) => (
            <div
              className="member-groups-container"
              key={`member-groups-${item.name}`}
              onClick={() => handleMemberGroupClick(item.name)}
            >
              <ul className="member-groups-data-container">
                <li key={`member-groups-li-${item.name}`}>{item.name}</li>
              </ul>
            </div>
          ))}
        </div>

        {selectedMemberGroup && (
          <div className="right-side">
            <h2>{selectedMemberGroup}: </h2>
            {schemaData?.member_groups
              .filter((item) => item.name === selectedMemberGroup)
              .map((item) =>
                item.members.map((member) => (
                  <div
                    className="properties-data-container"
                    key={`properties-data-container-${member.name}`}
                  >
                    <ul key={`data-container-ul-${member.name}`}>
                      <li>
                        <span>
                          {member.name}{' '}
                          <input
                            type="checkbox"
                            checked={member.selected || false}
                            onChange={(e) => handleCheckboxChange(member, e.target.checked)}
                          />
                          <div className="i-icon" onClick={() => handleIconClick(member)}>
                            <span>ⓘ</span>
                          </div>
                          {expandedProperty === member && (
                            <div className="additional-data">
                              <ul>
                                {Object.entries(member).map(([key, value]) => (
                                  <li key={`property-${key}`}>
                                    {key}:{' '}
                                    {typeof value === 'object'
                                      ? JSON.stringify(value)
                                      : value.toString()}
                                  </li>
                                ))}
                                <div
                                  className="close-icon"
                                  onClick={() => setExpandedProperty(null)}
                                >
                                  &#10006;
                                </div>
                              </ul>
                            </div>
                          )}
                        </span>
                        <span>{member.type}</span>
                        <span>{`is_conditional: ${member.is_conditional}`}</span>
                      </li>
                    </ul>
                  </div>
                )),
              )}

            {queryResult && (
              <div className="query-result">
                <h3>Query Result:</h3>
                <pre>{JSON.stringify(queryResult, null, 2)}</pre>
              </div>
            )}

            {schemaData?.member_groups
              .filter((item) => item.name === selectedMemberGroup && item.members.length === 0)
              .map((item) => (
                <li className="properties-empty" key={`properties-empty-${item.name}`}>
                  No properties found
                </li>
              ))}
          </div>
        )}
      </div>

      <div className="graphql-query-container">
        <textarea className="graphql-query" value={generateQuery()} readOnly />
        <button onClick={executeQuery}>Execute Query</button>
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
