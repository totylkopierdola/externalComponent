var Lp = Object.defineProperty;
var Op = (Kt, wn, pe) => wn in Kt ? Lp(Kt, wn, { enumerable: !0, configurable: !0, writable: !0, value: pe }) : Kt[wn] = pe;
var Mc = (Kt, wn, pe) => (Op(Kt, typeof wn != "symbol" ? wn + "" : wn, pe), pe);
var ip = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Kc(Kt) {
  return Kt && Kt.__esModule && Object.prototype.hasOwnProperty.call(Kt, "default") ? Kt.default : Kt;
}
var mp = { exports: {} }, Ns = {}, Dp = { exports: {} }, Bn = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var op;
function Mp() {
  if (op)
    return Bn;
  op = 1;
  var Kt = Symbol.for("react.element"), wn = Symbol.for("react.portal"), pe = Symbol.for("react.fragment"), Mn = Symbol.for("react.strict_mode"), Cn = Symbol.for("react.profiler"), _n = Symbol.for("react.provider"), Yn = Symbol.for("react.context"), zn = Symbol.for("react.forward_ref"), Xt = Symbol.for("react.suspense"), cn = Symbol.for("react.memo"), Fn = Symbol.for("react.lazy"), Rn = Symbol.iterator;
  function Un(de) {
    return de === null || typeof de != "object" ? null : (de = Rn && de[Rn] || de["@@iterator"], typeof de == "function" ? de : null);
  }
  var Cr = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Fr = Object.assign, On = {};
  function xn(de, Qe, $t) {
    this.props = de, this.context = Qe, this.refs = On, this.updater = $t || Cr;
  }
  xn.prototype.isReactComponent = {}, xn.prototype.setState = function(de, Qe) {
    if (typeof de != "object" && typeof de != "function" && de != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, de, Qe, "setState");
  }, xn.prototype.forceUpdate = function(de) {
    this.updater.enqueueForceUpdate(this, de, "forceUpdate");
  };
  function Wn() {
  }
  Wn.prototype = xn.prototype;
  function Gn(de, Qe, $t) {
    this.props = de, this.context = Qe, this.refs = On, this.updater = $t || Cr;
  }
  var cr = Gn.prototype = new Wn();
  cr.constructor = Gn, Fr(cr, xn.prototype), cr.isPureReactComponent = !0;
  var Hn = Array.isArray, wr = Object.prototype.hasOwnProperty, mr = { current: null }, Dr = { key: !0, ref: !0, __self: !0, __source: !0 };
  function gr(de, Qe, $t) {
    var Dn, Ht = {}, kn = null, Nn = null;
    if (Qe != null)
      for (Dn in Qe.ref !== void 0 && (Nn = Qe.ref), Qe.key !== void 0 && (kn = "" + Qe.key), Qe)
        wr.call(Qe, Dn) && !Dr.hasOwnProperty(Dn) && (Ht[Dn] = Qe[Dn]);
    var Pn = arguments.length - 2;
    if (Pn === 1)
      Ht.children = $t;
    else if (1 < Pn) {
      for (var Le = Array(Pn), it = 0; it < Pn; it++)
        Le[it] = arguments[it + 2];
      Ht.children = Le;
    }
    if (de && de.defaultProps)
      for (Dn in Pn = de.defaultProps, Pn)
        Ht[Dn] === void 0 && (Ht[Dn] = Pn[Dn]);
    return { $$typeof: Kt, type: de, key: kn, ref: Nn, props: Ht, _owner: mr.current };
  }
  function Or(de, Qe) {
    return { $$typeof: Kt, type: de.type, key: Qe, ref: de.ref, props: de.props, _owner: de._owner };
  }
  function Pr(de) {
    return typeof de == "object" && de !== null && de.$$typeof === Kt;
  }
  function Jr(de) {
    var Qe = { "=": "=0", ":": "=2" };
    return "$" + de.replace(/[=:]/g, function($t) {
      return Qe[$t];
    });
  }
  var xr = /\/+/g;
  function Ar(de, Qe) {
    return typeof de == "object" && de !== null && de.key != null ? Jr("" + de.key) : Qe.toString(36);
  }
  function Mr(de, Qe, $t, Dn, Ht) {
    var kn = typeof de;
    (kn === "undefined" || kn === "boolean") && (de = null);
    var Nn = !1;
    if (de === null)
      Nn = !0;
    else
      switch (kn) {
        case "string":
        case "number":
          Nn = !0;
          break;
        case "object":
          switch (de.$$typeof) {
            case Kt:
            case wn:
              Nn = !0;
          }
      }
    if (Nn)
      return Nn = de, Ht = Ht(Nn), de = Dn === "" ? "." + Ar(Nn, 0) : Dn, Hn(Ht) ? ($t = "", de != null && ($t = de.replace(xr, "$&/") + "/"), Mr(Ht, Qe, $t, "", function(it) {
        return it;
      })) : Ht != null && (Pr(Ht) && (Ht = Or(Ht, $t + (!Ht.key || Nn && Nn.key === Ht.key ? "" : ("" + Ht.key).replace(xr, "$&/") + "/") + de)), Qe.push(Ht)), 1;
    if (Nn = 0, Dn = Dn === "" ? "." : Dn + ":", Hn(de))
      for (var Pn = 0; Pn < de.length; Pn++) {
        kn = de[Pn];
        var Le = Dn + Ar(kn, Pn);
        Nn += Mr(kn, Qe, $t, Le, Ht);
      }
    else if (Le = Un(de), typeof Le == "function")
      for (de = Le.call(de), Pn = 0; !(kn = de.next()).done; )
        kn = kn.value, Le = Dn + Ar(kn, Pn++), Nn += Mr(kn, Qe, $t, Le, Ht);
    else if (kn === "object")
      throw Qe = String(de), Error("Objects are not valid as a React child (found: " + (Qe === "[object Object]" ? "object with keys {" + Object.keys(de).join(", ") + "}" : Qe) + "). If you meant to render a collection of children, use an array instead.");
    return Nn;
  }
  function Sr(de, Qe, $t) {
    if (de == null)
      return de;
    var Dn = [], Ht = 0;
    return Mr(de, Dn, "", "", function(kn) {
      return Qe.call($t, kn, Ht++);
    }), Dn;
  }
  function sn(de) {
    if (de._status === -1) {
      var Qe = de._result;
      Qe = Qe(), Qe.then(function($t) {
        (de._status === 0 || de._status === -1) && (de._status = 1, de._result = $t);
      }, function($t) {
        (de._status === 0 || de._status === -1) && (de._status = 2, de._result = $t);
      }), de._status === -1 && (de._status = 0, de._result = Qe);
    }
    if (de._status === 1)
      return de._result.default;
    throw de._result;
  }
  var En = { current: null }, Je = { transition: null }, At = { ReactCurrentDispatcher: En, ReactCurrentBatchConfig: Je, ReactCurrentOwner: mr };
  return Bn.Children = { map: Sr, forEach: function(de, Qe, $t) {
    Sr(de, function() {
      Qe.apply(this, arguments);
    }, $t);
  }, count: function(de) {
    var Qe = 0;
    return Sr(de, function() {
      Qe++;
    }), Qe;
  }, toArray: function(de) {
    return Sr(de, function(Qe) {
      return Qe;
    }) || [];
  }, only: function(de) {
    if (!Pr(de))
      throw Error("React.Children.only expected to receive a single React element child.");
    return de;
  } }, Bn.Component = xn, Bn.Fragment = pe, Bn.Profiler = Cn, Bn.PureComponent = Gn, Bn.StrictMode = Mn, Bn.Suspense = Xt, Bn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = At, Bn.cloneElement = function(de, Qe, $t) {
    if (de == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + de + ".");
    var Dn = Fr({}, de.props), Ht = de.key, kn = de.ref, Nn = de._owner;
    if (Qe != null) {
      if (Qe.ref !== void 0 && (kn = Qe.ref, Nn = mr.current), Qe.key !== void 0 && (Ht = "" + Qe.key), de.type && de.type.defaultProps)
        var Pn = de.type.defaultProps;
      for (Le in Qe)
        wr.call(Qe, Le) && !Dr.hasOwnProperty(Le) && (Dn[Le] = Qe[Le] === void 0 && Pn !== void 0 ? Pn[Le] : Qe[Le]);
    }
    var Le = arguments.length - 2;
    if (Le === 1)
      Dn.children = $t;
    else if (1 < Le) {
      Pn = Array(Le);
      for (var it = 0; it < Le; it++)
        Pn[it] = arguments[it + 2];
      Dn.children = Pn;
    }
    return { $$typeof: Kt, type: de.type, key: Ht, ref: kn, props: Dn, _owner: Nn };
  }, Bn.createContext = function(de) {
    return de = { $$typeof: Yn, _currentValue: de, _currentValue2: de, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, de.Provider = { $$typeof: _n, _context: de }, de.Consumer = de;
  }, Bn.createElement = gr, Bn.createFactory = function(de) {
    var Qe = gr.bind(null, de);
    return Qe.type = de, Qe;
  }, Bn.createRef = function() {
    return { current: null };
  }, Bn.forwardRef = function(de) {
    return { $$typeof: zn, render: de };
  }, Bn.isValidElement = Pr, Bn.lazy = function(de) {
    return { $$typeof: Fn, _payload: { _status: -1, _result: de }, _init: sn };
  }, Bn.memo = function(de, Qe) {
    return { $$typeof: cn, type: de, compare: Qe === void 0 ? null : Qe };
  }, Bn.startTransition = function(de) {
    var Qe = Je.transition;
    Je.transition = {};
    try {
      de();
    } finally {
      Je.transition = Qe;
    }
  }, Bn.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, Bn.useCallback = function(de, Qe) {
    return En.current.useCallback(de, Qe);
  }, Bn.useContext = function(de) {
    return En.current.useContext(de);
  }, Bn.useDebugValue = function() {
  }, Bn.useDeferredValue = function(de) {
    return En.current.useDeferredValue(de);
  }, Bn.useEffect = function(de, Qe) {
    return En.current.useEffect(de, Qe);
  }, Bn.useId = function() {
    return En.current.useId();
  }, Bn.useImperativeHandle = function(de, Qe, $t) {
    return En.current.useImperativeHandle(de, Qe, $t);
  }, Bn.useInsertionEffect = function(de, Qe) {
    return En.current.useInsertionEffect(de, Qe);
  }, Bn.useLayoutEffect = function(de, Qe) {
    return En.current.useLayoutEffect(de, Qe);
  }, Bn.useMemo = function(de, Qe) {
    return En.current.useMemo(de, Qe);
  }, Bn.useReducer = function(de, Qe, $t) {
    return En.current.useReducer(de, Qe, $t);
  }, Bn.useRef = function(de) {
    return En.current.useRef(de);
  }, Bn.useState = function(de) {
    return En.current.useState(de);
  }, Bn.useSyncExternalStore = function(de, Qe, $t) {
    return En.current.useSyncExternalStore(de, Qe, $t);
  }, Bn.useTransition = function() {
    return En.current.useTransition();
  }, Bn.version = "18.2.0", Bn;
}
Dp.exports = Mp();
var _r = Dp.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ap;
function Rp() {
  if (ap)
    return Ns;
  ap = 1;
  var Kt = _r, wn = Symbol.for("react.element"), pe = Symbol.for("react.fragment"), Mn = Object.prototype.hasOwnProperty, Cn = Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _n = { key: !0, ref: !0, __self: !0, __source: !0 };
  function Yn(zn, Xt, cn) {
    var Fn, Rn = {}, Un = null, Cr = null;
    cn !== void 0 && (Un = "" + cn), Xt.key !== void 0 && (Un = "" + Xt.key), Xt.ref !== void 0 && (Cr = Xt.ref);
    for (Fn in Xt)
      Mn.call(Xt, Fn) && !_n.hasOwnProperty(Fn) && (Rn[Fn] = Xt[Fn]);
    if (zn && zn.defaultProps)
      for (Fn in Xt = zn.defaultProps, Xt)
        Rn[Fn] === void 0 && (Rn[Fn] = Xt[Fn]);
    return { $$typeof: wn, type: zn, key: Un, ref: Cr, props: Rn, _owner: Cn.current };
  }
  return Ns.Fragment = pe, Ns.jsx = Yn, Ns.jsxs = Yn, Ns;
}
mp.exports = Rp();
var zc = mp.exports;
const $p = zc.Fragment, lr = zc.jsx, Eu = zc.jsxs;
var gp = { exports: {} }, cu = {}, Rc = { exports: {} }, $c = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sp;
function Vp() {
  return sp || (sp = 1, function(Kt) {
    function wn(Je, At) {
      var de = Je.length;
      Je.push(At);
      e:
        for (; 0 < de; ) {
          var Qe = de - 1 >>> 1, $t = Je[Qe];
          if (0 < Cn($t, At))
            Je[Qe] = At, Je[de] = $t, de = Qe;
          else
            break e;
        }
    }
    function pe(Je) {
      return Je.length === 0 ? null : Je[0];
    }
    function Mn(Je) {
      if (Je.length === 0)
        return null;
      var At = Je[0], de = Je.pop();
      if (de !== At) {
        Je[0] = de;
        e:
          for (var Qe = 0, $t = Je.length, Dn = $t >>> 1; Qe < Dn; ) {
            var Ht = 2 * (Qe + 1) - 1, kn = Je[Ht], Nn = Ht + 1, Pn = Je[Nn];
            if (0 > Cn(kn, de))
              Nn < $t && 0 > Cn(Pn, kn) ? (Je[Qe] = Pn, Je[Nn] = de, Qe = Nn) : (Je[Qe] = kn, Je[Ht] = de, Qe = Ht);
            else if (Nn < $t && 0 > Cn(Pn, de))
              Je[Qe] = Pn, Je[Nn] = de, Qe = Nn;
            else
              break e;
          }
      }
      return At;
    }
    function Cn(Je, At) {
      var de = Je.sortIndex - At.sortIndex;
      return de !== 0 ? de : Je.id - At.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _n = performance;
      Kt.unstable_now = function() {
        return _n.now();
      };
    } else {
      var Yn = Date, zn = Yn.now();
      Kt.unstable_now = function() {
        return Yn.now() - zn;
      };
    }
    var Xt = [], cn = [], Fn = 1, Rn = null, Un = 3, Cr = !1, Fr = !1, On = !1, xn = typeof setTimeout == "function" ? setTimeout : null, Wn = typeof clearTimeout == "function" ? clearTimeout : null, Gn = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function cr(Je) {
      for (var At = pe(cn); At !== null; ) {
        if (At.callback === null)
          Mn(cn);
        else if (At.startTime <= Je)
          Mn(cn), At.sortIndex = At.expirationTime, wn(Xt, At);
        else
          break;
        At = pe(cn);
      }
    }
    function Hn(Je) {
      if (On = !1, cr(Je), !Fr)
        if (pe(Xt) !== null)
          Fr = !0, sn(wr);
        else {
          var At = pe(cn);
          At !== null && En(Hn, At.startTime - Je);
        }
    }
    function wr(Je, At) {
      Fr = !1, On && (On = !1, Wn(gr), gr = -1), Cr = !0;
      var de = Un;
      try {
        for (cr(At), Rn = pe(Xt); Rn !== null && (!(Rn.expirationTime > At) || Je && !Jr()); ) {
          var Qe = Rn.callback;
          if (typeof Qe == "function") {
            Rn.callback = null, Un = Rn.priorityLevel;
            var $t = Qe(Rn.expirationTime <= At);
            At = Kt.unstable_now(), typeof $t == "function" ? Rn.callback = $t : Rn === pe(Xt) && Mn(Xt), cr(At);
          } else
            Mn(Xt);
          Rn = pe(Xt);
        }
        if (Rn !== null)
          var Dn = !0;
        else {
          var Ht = pe(cn);
          Ht !== null && En(Hn, Ht.startTime - At), Dn = !1;
        }
        return Dn;
      } finally {
        Rn = null, Un = de, Cr = !1;
      }
    }
    var mr = !1, Dr = null, gr = -1, Or = 5, Pr = -1;
    function Jr() {
      return !(Kt.unstable_now() - Pr < Or);
    }
    function xr() {
      if (Dr !== null) {
        var Je = Kt.unstable_now();
        Pr = Je;
        var At = !0;
        try {
          At = Dr(!0, Je);
        } finally {
          At ? Ar() : (mr = !1, Dr = null);
        }
      } else
        mr = !1;
    }
    var Ar;
    if (typeof Gn == "function")
      Ar = function() {
        Gn(xr);
      };
    else if (typeof MessageChannel < "u") {
      var Mr = new MessageChannel(), Sr = Mr.port2;
      Mr.port1.onmessage = xr, Ar = function() {
        Sr.postMessage(null);
      };
    } else
      Ar = function() {
        xn(xr, 0);
      };
    function sn(Je) {
      Dr = Je, mr || (mr = !0, Ar());
    }
    function En(Je, At) {
      gr = xn(function() {
        Je(Kt.unstable_now());
      }, At);
    }
    Kt.unstable_IdlePriority = 5, Kt.unstable_ImmediatePriority = 1, Kt.unstable_LowPriority = 4, Kt.unstable_NormalPriority = 3, Kt.unstable_Profiling = null, Kt.unstable_UserBlockingPriority = 2, Kt.unstable_cancelCallback = function(Je) {
      Je.callback = null;
    }, Kt.unstable_continueExecution = function() {
      Fr || Cr || (Fr = !0, sn(wr));
    }, Kt.unstable_forceFrameRate = function(Je) {
      0 > Je || 125 < Je ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Or = 0 < Je ? Math.floor(1e3 / Je) : 5;
    }, Kt.unstable_getCurrentPriorityLevel = function() {
      return Un;
    }, Kt.unstable_getFirstCallbackNode = function() {
      return pe(Xt);
    }, Kt.unstable_next = function(Je) {
      switch (Un) {
        case 1:
        case 2:
        case 3:
          var At = 3;
          break;
        default:
          At = Un;
      }
      var de = Un;
      Un = At;
      try {
        return Je();
      } finally {
        Un = de;
      }
    }, Kt.unstable_pauseExecution = function() {
    }, Kt.unstable_requestPaint = function() {
    }, Kt.unstable_runWithPriority = function(Je, At) {
      switch (Je) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          Je = 3;
      }
      var de = Un;
      Un = Je;
      try {
        return At();
      } finally {
        Un = de;
      }
    }, Kt.unstable_scheduleCallback = function(Je, At, de) {
      var Qe = Kt.unstable_now();
      switch (typeof de == "object" && de !== null ? (de = de.delay, de = typeof de == "number" && 0 < de ? Qe + de : Qe) : de = Qe, Je) {
        case 1:
          var $t = -1;
          break;
        case 2:
          $t = 250;
          break;
        case 5:
          $t = 1073741823;
          break;
        case 4:
          $t = 1e4;
          break;
        default:
          $t = 5e3;
      }
      return $t = de + $t, Je = { id: Fn++, callback: At, priorityLevel: Je, startTime: de, expirationTime: $t, sortIndex: -1 }, de > Qe ? (Je.sortIndex = de, wn(cn, Je), pe(Xt) === null && Je === pe(cn) && (On ? (Wn(gr), gr = -1) : On = !0, En(Hn, de - Qe))) : (Je.sortIndex = $t, wn(Xt, Je), Fr || Cr || (Fr = !0, sn(wr))), Je;
    }, Kt.unstable_shouldYield = Jr, Kt.unstable_wrapCallback = function(Je) {
      var At = Un;
      return function() {
        var de = Un;
        Un = At;
        try {
          return Je.apply(this, arguments);
        } finally {
          Un = de;
        }
      };
    };
  }($c)), $c;
}
var lp;
function Kp() {
  return lp || (lp = 1, Rc.exports = Vp()), Rc.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var cp;
function zp() {
  if (cp)
    return cu;
  cp = 1;
  var Kt = _r, wn = Kp();
  function pe(e) {
    for (var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1; n < arguments.length; n++)
      t += "&args[]=" + encodeURIComponent(arguments[n]);
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Mn = /* @__PURE__ */ new Set(), Cn = {};
  function _n(e, t) {
    Yn(e, t), Yn(e + "Capture", t);
  }
  function Yn(e, t) {
    for (Cn[e] = t, e = 0; e < t.length; e++)
      Mn.add(t[e]);
  }
  var zn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Xt = Object.prototype.hasOwnProperty, cn = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Fn = {}, Rn = {};
  function Un(e) {
    return Xt.call(Rn, e) ? !0 : Xt.call(Fn, e) ? !1 : cn.test(e) ? Rn[e] = !0 : (Fn[e] = !0, !1);
  }
  function Cr(e, t, n, r) {
    if (n !== null && n.type === 0)
      return !1;
    switch (typeof t) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : n !== null ? !n.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Fr(e, t, n, r) {
    if (t === null || typeof t > "u" || Cr(e, t, n, r))
      return !0;
    if (r)
      return !1;
    if (n !== null)
      switch (n.type) {
        case 3:
          return !t;
        case 4:
          return t === !1;
        case 5:
          return isNaN(t);
        case 6:
          return isNaN(t) || 1 > t;
      }
    return !1;
  }
  function On(e, t, n, r, s, h, V) {
    this.acceptsBooleans = t === 2 || t === 3 || t === 4, this.attributeName = r, this.attributeNamespace = s, this.mustUseProperty = n, this.propertyName = e, this.type = t, this.sanitizeURL = h, this.removeEmptyString = V;
  }
  var xn = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    xn[e] = new On(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var t = e[0];
    xn[t] = new On(t, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    xn[e] = new On(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    xn[e] = new On(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    xn[e] = new On(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    xn[e] = new On(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    xn[e] = new On(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    xn[e] = new On(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    xn[e] = new On(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var Wn = /[\-:]([a-z])/g;
  function Gn(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var t = e.replace(
      Wn,
      Gn
    );
    xn[t] = new On(t, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var t = e.replace(Wn, Gn);
    xn[t] = new On(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var t = e.replace(Wn, Gn);
    xn[t] = new On(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    xn[e] = new On(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), xn.xlinkHref = new On("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    xn[e] = new On(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function cr(e, t, n, r) {
    var s = xn.hasOwnProperty(t) ? xn[t] : null;
    (s !== null ? s.type !== 0 : r || !(2 < t.length) || t[0] !== "o" && t[0] !== "O" || t[1] !== "n" && t[1] !== "N") && (Fr(t, n, s, r) && (n = null), r || s === null ? Un(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : s.mustUseProperty ? e[s.propertyName] = n === null ? s.type === 3 ? !1 : "" : n : (t = s.attributeName, r = s.attributeNamespace, n === null ? e.removeAttribute(t) : (s = s.type, n = s === 3 || s === 4 && n === !0 ? "" : "" + n, r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
  }
  var Hn = Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, wr = Symbol.for("react.element"), mr = Symbol.for("react.portal"), Dr = Symbol.for("react.fragment"), gr = Symbol.for("react.strict_mode"), Or = Symbol.for("react.profiler"), Pr = Symbol.for("react.provider"), Jr = Symbol.for("react.context"), xr = Symbol.for("react.forward_ref"), Ar = Symbol.for("react.suspense"), Mr = Symbol.for("react.suspense_list"), Sr = Symbol.for("react.memo"), sn = Symbol.for("react.lazy"), En = Symbol.for("react.offscreen"), Je = Symbol.iterator;
  function At(e) {
    return e === null || typeof e != "object" ? null : (e = Je && e[Je] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var de = Object.assign, Qe;
  function $t(e) {
    if (Qe === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Qe = t && t[1] || "";
      }
    return `
` + Qe + e;
  }
  var Dn = !1;
  function Ht(e, t) {
    if (!e || Dn)
      return "";
    Dn = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (t)
        if (t = function() {
          throw Error();
        }, Object.defineProperty(t.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(t, []);
          } catch ($e) {
            var r = $e;
          }
          Reflect.construct(e, [], t);
        } else {
          try {
            t.call();
          } catch ($e) {
            r = $e;
          }
          e.call(t.prototype);
        }
      else {
        try {
          throw Error();
        } catch ($e) {
          r = $e;
        }
        e();
      }
    } catch ($e) {
      if ($e && r && typeof $e.stack == "string") {
        for (var s = $e.stack.split(`
`), h = r.stack.split(`
`), V = s.length - 1, ae = h.length - 1; 1 <= V && 0 <= ae && s[V] !== h[ae]; )
          ae--;
        for (; 1 <= V && 0 <= ae; V--, ae--)
          if (s[V] !== h[ae]) {
            if (V !== 1 || ae !== 1)
              do
                if (V--, ae--, 0 > ae || s[V] !== h[ae]) {
                  var fe = `
` + s[V].replace(" at new ", " at ");
                  return e.displayName && fe.includes("<anonymous>") && (fe = fe.replace("<anonymous>", e.displayName)), fe;
                }
              while (1 <= V && 0 <= ae);
            break;
          }
      }
    } finally {
      Dn = !1, Error.prepareStackTrace = n;
    }
    return (e = e ? e.displayName || e.name : "") ? $t(e) : "";
  }
  function kn(e) {
    switch (e.tag) {
      case 5:
        return $t(e.type);
      case 16:
        return $t("Lazy");
      case 13:
        return $t("Suspense");
      case 19:
        return $t("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = Ht(e.type, !1), e;
      case 11:
        return e = Ht(e.type.render, !1), e;
      case 1:
        return e = Ht(e.type, !0), e;
      default:
        return "";
    }
  }
  function Nn(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case Dr:
        return "Fragment";
      case mr:
        return "Portal";
      case Or:
        return "Profiler";
      case gr:
        return "StrictMode";
      case Ar:
        return "Suspense";
      case Mr:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Jr:
          return (e.displayName || "Context") + ".Consumer";
        case Pr:
          return (e._context.displayName || "Context") + ".Provider";
        case xr:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case Sr:
          return t = e.displayName || null, t !== null ? t : Nn(e.type) || "Memo";
        case sn:
          t = e._payload, e = e._init;
          try {
            return Nn(e(t));
          } catch {
          }
      }
    return null;
  }
  function Pn(e) {
    var t = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (t.displayName || "Context") + ".Consumer";
      case 10:
        return (t._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = t.render, e = e.displayName || e.name || "", t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return t;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Nn(t);
      case 8:
        return t === gr ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof t == "function")
          return t.displayName || t.name || null;
        if (typeof t == "string")
          return t;
    }
    return null;
  }
  function Le(e) {
    switch (typeof e) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function it(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function We(e) {
    var t = it(e) ? "checked" : "value", n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t), r = "" + e[t];
    if (!e.hasOwnProperty(t) && typeof n < "u" && typeof n.get == "function" && typeof n.set == "function") {
      var s = n.get, h = n.set;
      return Object.defineProperty(e, t, { configurable: !0, get: function() {
        return s.call(this);
      }, set: function(V) {
        r = "" + V, h.call(this, V);
      } }), Object.defineProperty(e, t, { enumerable: n.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(V) {
        r = "" + V;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[t];
      } };
    }
  }
  function Ye(e) {
    e._valueTracker || (e._valueTracker = We(e));
  }
  function Ve(e) {
    if (!e)
      return !1;
    var t = e._valueTracker;
    if (!t)
      return !0;
    var n = t.getValue(), r = "";
    return e && (r = it(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Lt(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Ot(e, t) {
    var n = t.checked;
    return de({}, t, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: n ?? e._wrapperState.initialChecked });
  }
  function Wt(e, t) {
    var n = t.defaultValue == null ? "" : t.defaultValue, r = t.checked != null ? t.checked : t.defaultChecked;
    n = Le(t.value != null ? t.value : n), e._wrapperState = { initialChecked: r, initialValue: n, controlled: t.type === "checkbox" || t.type === "radio" ? t.checked != null : t.value != null };
  }
  function gn(e, t) {
    t = t.checked, t != null && cr(e, "checked", t, !1);
  }
  function An(e, t) {
    gn(e, t);
    var n = Le(t.value), r = t.type;
    if (n != null)
      r === "number" ? (n === 0 && e.value === "" || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    t.hasOwnProperty("value") ? hn(e, t.type, n) : t.hasOwnProperty("defaultValue") && hn(e, t.type, Le(t.defaultValue)), t.checked == null && t.defaultChecked != null && (e.defaultChecked = !!t.defaultChecked);
  }
  function rn(e, t, n) {
    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
      var r = t.type;
      if (!(r !== "submit" && r !== "reset" || t.value !== void 0 && t.value !== null))
        return;
      t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t;
    }
    n = e.name, n !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, n !== "" && (e.name = n);
  }
  function hn(e, t, n) {
    (t !== "number" || Lt(e.ownerDocument) !== e) && (n == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
  }
  var Sn = Array.isArray;
  function Ft(e, t, n, r) {
    if (e = e.options, t) {
      t = {};
      for (var s = 0; s < n.length; s++)
        t["$" + n[s]] = !0;
      for (n = 0; n < e.length; n++)
        s = t.hasOwnProperty("$" + e[n].value), e[n].selected !== s && (e[n].selected = s), s && r && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Le(n), t = null, s = 0; s < e.length; s++) {
        if (e[s].value === n) {
          e[s].selected = !0, r && (e[s].defaultSelected = !0);
          return;
        }
        t !== null || e[s].disabled || (t = e[s]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function tn(e, t) {
    if (t.dangerouslySetInnerHTML != null)
      throw Error(pe(91));
    return de({}, t, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function et(e, t) {
    var n = t.value;
    if (n == null) {
      if (n = t.children, t = t.defaultValue, n != null) {
        if (t != null)
          throw Error(pe(92));
        if (Sn(n)) {
          if (1 < n.length)
            throw Error(pe(93));
          n = n[0];
        }
        t = n;
      }
      t == null && (t = ""), n = t;
    }
    e._wrapperState = { initialValue: Le(n) };
  }
  function be(e, t) {
    var n = Le(t.value), r = Le(t.defaultValue);
    n != null && (n = "" + n, n !== e.value && (e.value = n), t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)), r != null && (e.defaultValue = "" + r);
  }
  function Me(e) {
    var t = e.textContent;
    t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
  }
  function Dt(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Re(e, t) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Dt(t) : e === "http://www.w3.org/2000/svg" && t === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var xt, Zt = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, n, r, s) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(t, n, r, s);
      });
    } : e;
  }(function(e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (xt = xt || document.createElement("div"), xt.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>", t = xt.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; t.firstChild; )
        e.appendChild(t.firstChild);
    }
  });
  function yt(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Bt = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, Xe = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Bt).forEach(function(e) {
    Xe.forEach(function(t) {
      t = t + e.charAt(0).toUpperCase() + e.substring(1), Bt[t] = Bt[e];
    });
  });
  function Et(e, t, n) {
    return t == null || typeof t == "boolean" || t === "" ? "" : n || typeof t != "number" || t === 0 || Bt.hasOwnProperty(e) && Bt[e] ? ("" + t).trim() : t + "px";
  }
  function lt(e, t) {
    e = e.style;
    for (var n in t)
      if (t.hasOwnProperty(n)) {
        var r = n.indexOf("--") === 0, s = Et(n, t[n], r);
        n === "float" && (n = "cssFloat"), r ? e.setProperty(n, s) : e[n] = s;
      }
  }
  var wt = de({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function pn(e, t) {
    if (t) {
      if (wt[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
        throw Error(pe(137, e));
      if (t.dangerouslySetInnerHTML != null) {
        if (t.children != null)
          throw Error(pe(60));
        if (typeof t.dangerouslySetInnerHTML != "object" || !("__html" in t.dangerouslySetInnerHTML))
          throw Error(pe(61));
      }
      if (t.style != null && typeof t.style != "object")
        throw Error(pe(62));
    }
  }
  function ar(e, t) {
    if (e.indexOf("-") === -1)
      return typeof t.is == "string";
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Rr = null;
  function Ti(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ai = null, vu = null, pu = null;
  function wi(e) {
    if (e = Hu(e)) {
      if (typeof ai != "function")
        throw Error(pe(280));
      var t = e.stateNode;
      t && (t = ei(t), ai(e.stateNode, e.type, t));
    }
  }
  function du(e) {
    vu ? pu ? pu.push(e) : pu = [e] : vu = e;
  }
  function fu() {
    if (vu) {
      var e = vu, t = pu;
      if (pu = vu = null, wi(e), t)
        for (e = 0; e < t.length; e++)
          wi(t[e]);
    }
  }
  function si(e, t) {
    return e(t);
  }
  function ki() {
  }
  var Cu = !1;
  function li(e, t, n) {
    if (Cu)
      return e(t, n);
    Cu = !0;
    try {
      return si(e, t, n);
    } finally {
      Cu = !1, (vu !== null || pu !== null) && (ki(), fu());
    }
  }
  function Fu(e, t) {
    var n = e.stateNode;
    if (n === null)
      return null;
    var r = ei(n);
    if (r === null)
      return null;
    n = r[t];
    e:
      switch (t) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (r = !r.disabled) || (e = e.type, r = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !r;
          break e;
        default:
          e = !1;
      }
    if (e)
      return null;
    if (n && typeof n != "function")
      throw Error(pe(231, t, typeof n));
    return n;
  }
  var Ni = !1;
  if (zn)
    try {
      var Xr = {};
      Object.defineProperty(Xr, "passive", { get: function() {
        Ni = !0;
      } }), window.addEventListener("test", Xr, Xr), window.removeEventListener("test", Xr, Xr);
    } catch {
      Ni = !1;
    }
  function Uu(e, t, n, r, s, h, V, ae, fe) {
    var $e = Array.prototype.slice.call(arguments, 3);
    try {
      t.apply(n, $e);
    } catch (st) {
      this.onError(st);
    }
  }
  var po = !1, Oo = null, Mo = !1, ka = null, Vl = { onError: function(e) {
    po = !0, Oo = e;
  } };
  function ot(e, t, n, r, s, h, V, ae, fe) {
    po = !1, Oo = null, Uu.apply(Vl, arguments);
  }
  function Ae(e, t, n, r, s, h, V, ae, fe) {
    if (ot.apply(this, arguments), po) {
      if (po) {
        var $e = Oo;
        po = !1, Oo = null;
      } else
        throw Error(pe(198));
      Mo || (Mo = !0, ka = $e);
    }
  }
  function me(e) {
    var t = e, n = e;
    if (e.alternate)
      for (; t.return; )
        t = t.return;
    else {
      e = t;
      do
        t = e, t.flags & 4098 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function Se(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null)
        return t.dehydrated;
    }
    return null;
  }
  function Ce(e) {
    if (me(e) !== e)
      throw Error(pe(188));
  }
  function je(e) {
    var t = e.alternate;
    if (!t) {
      if (t = me(e), t === null)
        throw Error(pe(188));
      return t !== e ? null : e;
    }
    for (var n = e, r = t; ; ) {
      var s = n.return;
      if (s === null)
        break;
      var h = s.alternate;
      if (h === null) {
        if (r = s.return, r !== null) {
          n = r;
          continue;
        }
        break;
      }
      if (s.child === h.child) {
        for (h = s.child; h; ) {
          if (h === n)
            return Ce(s), e;
          if (h === r)
            return Ce(s), t;
          h = h.sibling;
        }
        throw Error(pe(188));
      }
      if (n.return !== r.return)
        n = s, r = h;
      else {
        for (var V = !1, ae = s.child; ae; ) {
          if (ae === n) {
            V = !0, n = s, r = h;
            break;
          }
          if (ae === r) {
            V = !0, r = s, n = h;
            break;
          }
          ae = ae.sibling;
        }
        if (!V) {
          for (ae = h.child; ae; ) {
            if (ae === n) {
              V = !0, n = h, r = s;
              break;
            }
            if (ae === r) {
              V = !0, r = h, n = s;
              break;
            }
            ae = ae.sibling;
          }
          if (!V)
            throw Error(pe(189));
        }
      }
      if (n.alternate !== r)
        throw Error(pe(190));
    }
    if (n.tag !== 3)
      throw Error(pe(188));
    return n.stateNode.current === n ? e : t;
  }
  function Ge(e) {
    return e = je(e), e !== null ? rt(e) : null;
  }
  function rt(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var t = rt(e);
      if (t !== null)
        return t;
      e = e.sibling;
    }
    return null;
  }
  var He = wn.unstable_scheduleCallback, ut = wn.unstable_cancelCallback, kt = wn.unstable_shouldYield, Pt = wn.unstable_requestPaint, vt = wn.unstable_now, bt = wn.unstable_getCurrentPriorityLevel, ee = wn.unstable_ImmediatePriority, zt = wn.unstable_UserBlockingPriority, un = wn.unstable_NormalPriority, Tn = wn.unstable_LowPriority, vn = wn.unstable_IdlePriority, Jn = null, ne = null;
  function $r(e) {
    if (ne && typeof ne.onCommitFiberRoot == "function")
      try {
        ne.onCommitFiberRoot(Jn, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var kr = Math.clz32 ? Math.clz32 : Gu, bi = Math.log, nu = Math.LN2;
  function Gu(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (bi(e) / nu | 0) | 0;
  }
  var sr = 64, ci = 4194304;
  function Vr(e) {
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return e & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return e;
    }
  }
  function pi(e, t) {
    var n = e.pendingLanes;
    if (n === 0)
      return 0;
    var r = 0, s = e.suspendedLanes, h = e.pingedLanes, V = n & 268435455;
    if (V !== 0) {
      var ae = V & ~s;
      ae !== 0 ? r = Vr(ae) : (h &= V, h !== 0 && (r = Vr(h)));
    } else
      V = n & ~s, V !== 0 ? r = Vr(V) : h !== 0 && (r = Vr(h));
    if (r === 0)
      return 0;
    if (t !== 0 && t !== r && !(t & s) && (s = r & -r, h = t & -t, s >= h || s === 16 && (h & 4194240) !== 0))
      return t;
    if (r & 4 && (r |= n & 16), t = e.entangledLanes, t !== 0)
      for (e = e.entanglements, t &= r; 0 < t; )
        n = 31 - kr(t), s = 1 << n, r |= e[n], t &= ~s;
    return r;
  }
  function Ro(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return t + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function $o(e, t) {
    for (var n = e.suspendedLanes, r = e.pingedLanes, s = e.expirationTimes, h = e.pendingLanes; 0 < h; ) {
      var V = 31 - kr(h), ae = 1 << V, fe = s[V];
      fe === -1 ? (!(ae & n) || ae & r) && (s[V] = Ro(ae, t)) : fe <= t && (e.expiredLanes |= ae), h &= ~ae;
    }
  }
  function Bi(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Kr() {
    var e = sr;
    return sr <<= 1, !(sr & 4194240) && (sr = 64), e;
  }
  function Vo(e) {
    for (var t = [], n = 0; 31 > n; n++)
      t.push(e);
    return t;
  }
  function fo(e, t, n) {
    e.pendingLanes |= t, t !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, t = 31 - kr(t), e[t] = n;
  }
  function bs(e, t) {
    var n = e.pendingLanes & ~t;
    e.pendingLanes = t, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t, t = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < n; ) {
      var s = 31 - kr(n), h = 1 << s;
      t[s] = 0, r[s] = -1, e[s] = -1, n &= ~h;
    }
  }
  function Na(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var r = 31 - kr(n), s = 1 << r;
      s & t | e[r] & t && (e[r] |= t), n &= ~s;
    }
  }
  var $n = 0;
  function _i(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var Bs, ba, Ut, Ba, _s, _a = !1, mo = [], Bu = null, Ju = null, qu = null, Do = /* @__PURE__ */ new Map(), go = /* @__PURE__ */ new Map(), xu = [], Kl = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function Ps(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Bu = null;
        break;
      case "dragenter":
      case "dragleave":
        Ju = null;
        break;
      case "mouseover":
      case "mouseout":
        qu = null;
        break;
      case "pointerover":
      case "pointerout":
        Do.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        go.delete(t.pointerId);
    }
  }
  function ho(e, t, n, r, s, h) {
    return e === null || e.nativeEvent !== h ? (e = { blockedOn: t, domEventName: n, eventSystemFlags: r, nativeEvent: h, targetContainers: [s] }, t !== null && (t = Hu(t), t !== null && ba(t)), e) : (e.eventSystemFlags |= r, t = e.targetContainers, s !== null && t.indexOf(s) === -1 && t.push(s), e);
  }
  function zl(e, t, n, r, s) {
    switch (t) {
      case "focusin":
        return Bu = ho(Bu, e, t, n, r, s), !0;
      case "dragenter":
        return Ju = ho(Ju, e, t, n, r, s), !0;
      case "mouseover":
        return qu = ho(qu, e, t, n, r, s), !0;
      case "pointerover":
        var h = s.pointerId;
        return Do.set(h, ho(Do.get(h) || null, e, t, n, r, s)), !0;
      case "gotpointercapture":
        return h = s.pointerId, go.set(h, ho(go.get(h) || null, e, t, n, r, s)), !0;
    }
    return !1;
  }
  function Is(e) {
    var t = Du(e.target);
    if (t !== null) {
      var n = me(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = Se(n), t !== null) {
            e.blockedOn = t, _s(e.priority, function() {
              Ut(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Pi(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = yo(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var r = new n.constructor(n.type, n);
        Rr = r, n.target.dispatchEvent(r), Rr = null;
      } else
        return t = Hu(n), t !== null && ba(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Ko(e, t, n) {
    Pi(e) && n.delete(t);
  }
  function zo() {
    _a = !1, Bu !== null && Pi(Bu) && (Bu = null), Ju !== null && Pi(Ju) && (Ju = null), qu !== null && Pi(qu) && (qu = null), Do.forEach(Ko), go.forEach(Ko);
  }
  function Ii(e, t) {
    e.blockedOn === t && (e.blockedOn = null, _a || (_a = !0, wn.unstable_scheduleCallback(wn.unstable_NormalPriority, zo)));
  }
  function ji(e) {
    function t(s) {
      return Ii(s, e);
    }
    if (0 < mo.length) {
      Ii(mo[0], e);
      for (var n = 1; n < mo.length; n++) {
        var r = mo[n];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Bu !== null && Ii(Bu, e), Ju !== null && Ii(Ju, e), qu !== null && Ii(qu, e), Do.forEach(t), go.forEach(t), n = 0; n < xu.length; n++)
      r = xu[n], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < xu.length && (n = xu[0], n.blockedOn === null); )
      Is(n), n.blockedOn === null && xu.shift();
  }
  var di = Hn.ReactCurrentBatchConfig, Uo = !0;
  function yn(e, t, n, r) {
    var s = $n, h = di.transition;
    di.transition = null;
    try {
      $n = 1, Go(e, t, n, r);
    } finally {
      $n = s, di.transition = h;
    }
  }
  function js(e, t, n, r) {
    var s = $n, h = di.transition;
    di.transition = null;
    try {
      $n = 4, Go(e, t, n, r);
    } finally {
      $n = s, di.transition = h;
    }
  }
  function Go(e, t, n, r) {
    if (Uo) {
      var s = yo(e, t, n, r);
      if (s === null)
        Ui(e, t, r, fi, n), Ps(e, r);
      else if (zl(s, e, t, n, r))
        r.stopPropagation();
      else if (Ps(e, r), t & 4 && -1 < Kl.indexOf(e)) {
        for (; s !== null; ) {
          var h = Hu(s);
          if (h !== null && Bs(h), h = yo(e, t, n, r), h === null && Ui(e, t, r, fi, n), h === s)
            break;
          s = h;
        }
        s !== null && r.stopPropagation();
      } else
        Ui(e, t, r, null, n);
    }
  }
  var fi = null;
  function yo(e, t, n, r) {
    if (fi = null, e = Ti(r), e = Du(e), e !== null)
      if (t = me(e), t === null)
        e = null;
      else if (n = t.tag, n === 13) {
        if (e = Se(t), e !== null)
          return e;
        e = null;
      } else if (n === 3) {
        if (t.stateNode.current.memoizedState.isDehydrated)
          return t.tag === 3 ? t.stateNode.containerInfo : null;
        e = null;
      } else
        t !== e && (e = null);
    return fi = e, null;
  }
  function Jo(e) {
    switch (e) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (bt()) {
          case ee:
            return 1;
          case zt:
            return 4;
          case un:
          case Tn:
            return 16;
          case vn:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var _u = null, qo = null, Eo = null;
  function Pa() {
    if (Eo)
      return Eo;
    var e, t = qo, n = t.length, r, s = "value" in _u ? _u.value : _u.textContent, h = s.length;
    for (e = 0; e < n && t[e] === s[e]; e++)
      ;
    var V = n - e;
    for (r = 1; r <= V && t[n - r] === s[h - r]; r++)
      ;
    return Eo = s.slice(e, 1 < r ? 1 - r : void 0);
  }
  function vo(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Li() {
    return !0;
  }
  function Ia() {
    return !1;
  }
  function Ir(e) {
    function t(n, r, s, h, V) {
      this._reactName = n, this._targetInst = s, this.type = r, this.nativeEvent = h, this.target = V, this.currentTarget = null;
      for (var ae in e)
        e.hasOwnProperty(ae) && (n = e[ae], this[ae] = n ? n(h) : h[ae]);
      return this.isDefaultPrevented = (h.defaultPrevented != null ? h.defaultPrevented : h.returnValue === !1) ? Li : Ia, this.isPropagationStopped = Ia, this;
    }
    return de(t.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var n = this.nativeEvent;
      n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Li);
    }, stopPropagation: function() {
      var n = this.nativeEvent;
      n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Li);
    }, persist: function() {
    }, isPersistent: Li }), t;
  }
  var Wu = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Co = Ir(Wu), Oi = de({}, Wu, { view: 0, detail: 0 }), Ls = Ir(Oi), ja, La, Pu, ru = de({}, Oi, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: $a, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Pu && (Pu && e.type === "mousemove" ? (ja = e.screenX - Pu.screenX, La = e.screenY - Pu.screenY) : La = ja = 0, Pu = e), ja);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : La;
  } }), Os = Ir(ru), Ul = de({}, ru, { dataTransfer: 0 }), Gl = Ir(Ul), Jl = de({}, Oi, { relatedTarget: 0 }), Oa = Ir(Jl), ql = de({}, Wu, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Wl = Ir(ql), Xl = de({}, Wu, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), Ql = Ir(Xl), Ma = de({}, Wu, { data: 0 }), Ra = Ir(Ma), Yl = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Hl = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, Fo = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zl(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Fo[e]) ? !!t[e] : !1;
  }
  function $a() {
    return Zl;
  }
  var ec = de({}, Oi, { key: function(e) {
    if (e.key) {
      var t = Yl[e.key] || e.key;
      if (t !== "Unidentified")
        return t;
    }
    return e.type === "keypress" ? (e = vo(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Hl[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: $a, charCode: function(e) {
    return e.type === "keypress" ? vo(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? vo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), tc = Ir(ec), nc = de({}, ru, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), Ms = Ir(nc), rc = de({}, Oi, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: $a }), uc = Ir(rc), Wo = de({}, Wu, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Xo = Ir(Wo), Xu = de({}, ru, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Rs = Ir(Xu), ic = [9, 13, 27, 32], Mi = zn && "CompositionEvent" in window, Ri = null;
  zn && "documentMode" in document && (Ri = document.documentMode);
  var oc = zn && "TextEvent" in window && !Ri, $s = zn && (!Mi || Ri && 8 < Ri && 11 >= Ri), Va = String.fromCharCode(32), Vs = !1;
  function Ka(e, t) {
    switch (e) {
      case "keyup":
        return ic.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Ks(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var $i = !1;
  function Qu(e, t) {
    switch (e) {
      case "compositionend":
        return Ks(t);
      case "keypress":
        return t.which !== 32 ? null : (Vs = !0, Va);
      case "textInput":
        return e = t.data, e === Va && Vs ? null : e;
      default:
        return null;
    }
  }
  function ac(e, t) {
    if ($i)
      return e === "compositionend" || !Mi && Ka(e, t) ? (e = Pa(), Eo = qo = _u = null, $i = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which)
            return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return $s && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var sc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function zs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!sc[e.type] : t === "textarea";
  }
  function Us(e, t, n, r) {
    du(r), t = Gi(t, "onChange"), 0 < t.length && (n = new Co("onChange", "change", null, n, r), e.push({ event: n, listeners: t }));
  }
  var mi = null, xo = null;
  function Gs(e) {
    Ya(e, 0);
  }
  function Qo(e) {
    var t = Zu(e);
    if (Ve(t))
      return e;
  }
  function lc(e, t) {
    if (e === "change")
      return t;
  }
  var Js = !1;
  if (zn) {
    var za;
    if (zn) {
      var Ua = "oninput" in document;
      if (!Ua) {
        var qs = document.createElement("div");
        qs.setAttribute("oninput", "return;"), Ua = typeof qs.oninput == "function";
      }
      za = Ua;
    } else
      za = !1;
    Js = za && (!document.documentMode || 9 < document.documentMode);
  }
  function Ws() {
    mi && (mi.detachEvent("onpropertychange", Nr), xo = mi = null);
  }
  function Nr(e) {
    if (e.propertyName === "value" && Qo(xo)) {
      var t = [];
      Us(t, xo, e, Ti(e)), li(Gs, t);
    }
  }
  function cc(e, t, n) {
    e === "focusin" ? (Ws(), mi = t, xo = n, mi.attachEvent("onpropertychange", Nr)) : e === "focusout" && Ws();
  }
  function pc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Qo(xo);
  }
  function dc(e, t) {
    if (e === "click")
      return Qo(t);
  }
  function Ga(e, t) {
    if (e === "input" || e === "change")
      return Qo(t);
  }
  function Xs(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var mu = typeof Object.is == "function" ? Object.is : Xs;
  function Iu(e, t) {
    if (mu(e, t))
      return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), r = Object.keys(t);
    if (n.length !== r.length)
      return !1;
    for (r = 0; r < n.length; r++) {
      var s = n[r];
      if (!Xt.call(t, s) || !mu(e[s], t[s]))
        return !1;
    }
    return !0;
  }
  function ur(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Qs(e, t) {
    var n = ur(e);
    e = 0;
    for (var r; n; ) {
      if (n.nodeType === 3) {
        if (r = e + n.textContent.length, e <= t && r >= t)
          return { node: n, offset: t - e };
        e = r;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = ur(n);
    }
  }
  function Ys(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Ys(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Hs() {
    for (var e = window, t = Lt(); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n)
        e = t.contentWindow;
      else
        break;
      t = Lt(e.document);
    }
    return t;
  }
  function Ja(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  function fc(e) {
    var t = Hs(), n = e.focusedElem, r = e.selectionRange;
    if (t !== n && n && n.ownerDocument && Ys(n.ownerDocument.documentElement, n)) {
      if (r !== null && Ja(n)) {
        if (t = r.start, e = r.end, e === void 0 && (e = t), "selectionStart" in n)
          n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
        else if (e = (t = n.ownerDocument || document) && t.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var s = n.textContent.length, h = Math.min(r.start, s);
          r = r.end === void 0 ? h : Math.min(r.end, s), !e.extend && h > r && (s = r, r = h, h = s), s = Qs(n, h);
          var V = Qs(
            n,
            r
          );
          s && V && (e.rangeCount !== 1 || e.anchorNode !== s.node || e.anchorOffset !== s.offset || e.focusNode !== V.node || e.focusOffset !== V.offset) && (t = t.createRange(), t.setStart(s.node, s.offset), e.removeAllRanges(), h > r ? (e.addRange(t), e.extend(V.node, V.offset)) : (t.setEnd(V.node, V.offset), e.addRange(t)));
        }
      }
      for (t = [], e = n; e = e.parentNode; )
        e.nodeType === 1 && t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
        e = t[n], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var mc = zn && "documentMode" in document && 11 >= document.documentMode, uu = null, qa = null, Vi = null, Wa = !1;
  function Zs(e, t, n) {
    var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wa || uu == null || uu !== Lt(r) || (r = uu, "selectionStart" in r && Ja(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), Vi && Iu(Vi, r) || (Vi = r, r = Gi(qa, "onSelect"), 0 < r.length && (t = new Co("onSelect", "select", null, t, n), e.push({ event: t, listeners: r }), t.target = uu)));
  }
  function Au(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ki = { animationend: Au("Animation", "AnimationEnd"), animationiteration: Au("Animation", "AnimationIteration"), animationstart: Au("Animation", "AnimationStart"), transitionend: Au("Transition", "TransitionEnd") }, In = {}, Di = {};
  zn && (Di = document.createElement("div").style, "AnimationEvent" in window || (delete Ki.animationend.animation, delete Ki.animationiteration.animation, delete Ki.animationstart.animation), "TransitionEvent" in window || delete Ki.transitionend.transition);
  function Yo(e) {
    if (In[e])
      return In[e];
    if (!Ki[e])
      return e;
    var t = Ki[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Di)
        return In[e] = t[n];
    return e;
  }
  var el = Yo("animationend"), tl = Yo("animationiteration"), nl = Yo("animationstart"), rl = Yo("transitionend"), ul = /* @__PURE__ */ new Map(), Xa = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function ju(e, t) {
    ul.set(e, t), _n(t, [e]);
  }
  for (var Ho = 0; Ho < Xa.length; Ho++) {
    var Zo = Xa[Ho], il = Zo.toLowerCase(), ol = Zo[0].toUpperCase() + Zo.slice(1);
    ju(il, "on" + ol);
  }
  ju(el, "onAnimationEnd"), ju(tl, "onAnimationIteration"), ju(nl, "onAnimationStart"), ju("dblclick", "onDoubleClick"), ju("focusin", "onFocus"), ju("focusout", "onBlur"), ju(rl, "onTransitionEnd"), Yn("onMouseEnter", ["mouseout", "mouseover"]), Yn("onMouseLeave", ["mouseout", "mouseover"]), Yn("onPointerEnter", ["pointerout", "pointerover"]), Yn("onPointerLeave", ["pointerout", "pointerover"]), _n("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _n("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _n("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _n("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _n("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _n("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var zi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), al = new Set("cancel close invalid load scroll toggle".split(" ").concat(zi));
  function Qa(e, t, n) {
    var r = e.type || "unknown-event";
    e.currentTarget = n, Ae(r, t, void 0, e), e.currentTarget = null;
  }
  function Ya(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var r = e[n], s = r.event;
      r = r.listeners;
      e: {
        var h = void 0;
        if (t)
          for (var V = r.length - 1; 0 <= V; V--) {
            var ae = r[V], fe = ae.instance, $e = ae.currentTarget;
            if (ae = ae.listener, fe !== h && s.isPropagationStopped())
              break e;
            Qa(s, ae, $e), h = fe;
          }
        else
          for (V = 0; V < r.length; V++) {
            if (ae = r[V], fe = ae.instance, $e = ae.currentTarget, ae = ae.listener, fe !== h && s.isPropagationStopped())
              break e;
            Qa(s, ae, $e), h = fe;
          }
      }
    }
    if (Mo)
      throw e = ka, Mo = !1, ka = null, e;
  }
  function Xn(e, t) {
    var n = t[qi];
    n === void 0 && (n = t[qi] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    n.has(r) || (na(t, e, 2, !1), n.add(r));
  }
  function ea(e, t, n) {
    var r = 0;
    t && (r |= 4), na(n, e, r, t);
  }
  var ta = "_reactListening" + Math.random().toString(36).slice(2);
  function Ao(e) {
    if (!e[ta]) {
      e[ta] = !0, Mn.forEach(function(n) {
        n !== "selectionchange" && (al.has(n) || ea(n, !1, e), ea(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[ta] || (t[ta] = !0, ea("selectionchange", !1, t));
    }
  }
  function na(e, t, n, r) {
    switch (Jo(t)) {
      case 1:
        var s = yn;
        break;
      case 4:
        s = js;
        break;
      default:
        s = Go;
    }
    n = s.bind(null, t, n, e), s = void 0, !Ni || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (s = !0), r ? s !== void 0 ? e.addEventListener(t, n, { capture: !0, passive: s }) : e.addEventListener(t, n, !0) : s !== void 0 ? e.addEventListener(t, n, { passive: s }) : e.addEventListener(t, n, !1);
  }
  function Ui(e, t, n, r, s) {
    var h = r;
    if (!(t & 1) && !(t & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var V = r.tag;
          if (V === 3 || V === 4) {
            var ae = r.stateNode.containerInfo;
            if (ae === s || ae.nodeType === 8 && ae.parentNode === s)
              break;
            if (V === 4)
              for (V = r.return; V !== null; ) {
                var fe = V.tag;
                if ((fe === 3 || fe === 4) && (fe = V.stateNode.containerInfo, fe === s || fe.nodeType === 8 && fe.parentNode === s))
                  return;
                V = V.return;
              }
            for (; ae !== null; ) {
              if (V = Du(ae), V === null)
                return;
              if (fe = V.tag, fe === 5 || fe === 6) {
                r = h = V;
                continue e;
              }
              ae = ae.parentNode;
            }
          }
          r = r.return;
        }
    li(function() {
      var $e = h, st = Ti(n), dt = [];
      e: {
        var at = ul.get(e);
        if (at !== void 0) {
          var jt = Co, Rt = e;
          switch (e) {
            case "keypress":
              if (vo(n) === 0)
                break e;
            case "keydown":
            case "keyup":
              jt = tc;
              break;
            case "focusin":
              Rt = "focus", jt = Oa;
              break;
            case "focusout":
              Rt = "blur", jt = Oa;
              break;
            case "beforeblur":
            case "afterblur":
              jt = Oa;
              break;
            case "click":
              if (n.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              jt = Os;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              jt = Gl;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              jt = uc;
              break;
            case el:
            case tl:
            case nl:
              jt = Wl;
              break;
            case rl:
              jt = Xo;
              break;
            case "scroll":
              jt = Ls;
              break;
            case "wheel":
              jt = Rs;
              break;
            case "copy":
            case "cut":
            case "paste":
              jt = Ql;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              jt = Ms;
          }
          var Vt = (t & 4) !== 0, vr = !Vt && e === "scroll", Ie = Vt ? at !== null ? at + "Capture" : null : at;
          Vt = [];
          for (var ve = $e, Oe; ve !== null; ) {
            Oe = ve;
            var ht = Oe.stateNode;
            if (Oe.tag === 5 && ht !== null && (Oe = ht, Ie !== null && (ht = Fu(ve, Ie), ht != null && Vt.push(gi(ve, ht, Oe)))), vr)
              break;
            ve = ve.return;
          }
          0 < Vt.length && (at = new jt(at, Rt, null, n, st), dt.push({ event: at, listeners: Vt }));
        }
      }
      if (!(t & 7)) {
        e: {
          if (at = e === "mouseover" || e === "pointerover", jt = e === "mouseout" || e === "pointerout", at && n !== Rr && (Rt = n.relatedTarget || n.fromElement) && (Du(Rt) || Rt[Qr]))
            break e;
          if ((jt || at) && (at = st.window === st ? st : (at = st.ownerDocument) ? at.defaultView || at.parentWindow : window, jt ? (Rt = n.relatedTarget || n.toElement, jt = $e, Rt = Rt ? Du(Rt) : null, Rt !== null && (vr = me(Rt), Rt !== vr || Rt.tag !== 5 && Rt.tag !== 6) && (Rt = null)) : (jt = null, Rt = $e), jt !== Rt)) {
            if (Vt = Os, ht = "onMouseLeave", Ie = "onMouseEnter", ve = "mouse", (e === "pointerout" || e === "pointerover") && (Vt = Ms, ht = "onPointerLeave", Ie = "onPointerEnter", ve = "pointer"), vr = jt == null ? at : Zu(jt), Oe = Rt == null ? at : Zu(Rt), at = new Vt(ht, ve + "leave", jt, n, st), at.target = vr, at.relatedTarget = Oe, ht = null, Du(st) === $e && (Vt = new Vt(Ie, ve + "enter", Rt, n, st), Vt.target = Oe, Vt.relatedTarget = vr, ht = Vt), vr = ht, jt && Rt)
              t: {
                for (Vt = jt, Ie = Rt, ve = 0, Oe = Vt; Oe; Oe = hi(Oe))
                  ve++;
                for (Oe = 0, ht = Ie; ht; ht = hi(ht))
                  Oe++;
                for (; 0 < ve - Oe; )
                  Vt = hi(Vt), ve--;
                for (; 0 < Oe - ve; )
                  Ie = hi(Ie), Oe--;
                for (; ve--; ) {
                  if (Vt === Ie || Ie !== null && Vt === Ie.alternate)
                    break t;
                  Vt = hi(Vt), Ie = hi(Ie);
                }
                Vt = null;
              }
            else
              Vt = null;
            jt !== null && sl(dt, at, jt, Vt, !1), Rt !== null && vr !== null && sl(dt, vr, Rt, Vt, !0);
          }
        }
        e: {
          if (at = $e ? Zu($e) : window, jt = at.nodeName && at.nodeName.toLowerCase(), jt === "select" || jt === "input" && at.type === "file")
            var qt = lc;
          else if (zs(at))
            if (Js)
              qt = Ga;
            else {
              qt = pc;
              var on = cc;
            }
          else
            (jt = at.nodeName) && jt.toLowerCase() === "input" && (at.type === "checkbox" || at.type === "radio") && (qt = dc);
          if (qt && (qt = qt(e, $e))) {
            Us(dt, qt, n, st);
            break e;
          }
          on && on(e, at, $e), e === "focusout" && (on = at._wrapperState) && on.controlled && at.type === "number" && hn(at, "number", at.value);
        }
        switch (on = $e ? Zu($e) : window, e) {
          case "focusin":
            (zs(on) || on.contentEditable === "true") && (uu = on, qa = $e, Vi = null);
            break;
          case "focusout":
            Vi = qa = uu = null;
            break;
          case "mousedown":
            Wa = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wa = !1, Zs(dt, n, st);
            break;
          case "selectionchange":
            if (mc)
              break;
          case "keydown":
          case "keyup":
            Zs(dt, n, st);
        }
        var an;
        if (Mi)
          e: {
            switch (e) {
              case "compositionstart":
                var mn = "onCompositionStart";
                break e;
              case "compositionend":
                mn = "onCompositionEnd";
                break e;
              case "compositionupdate":
                mn = "onCompositionUpdate";
                break e;
            }
            mn = void 0;
          }
        else
          $i ? Ka(e, n) && (mn = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (mn = "onCompositionStart");
        mn && ($s && n.locale !== "ko" && ($i || mn !== "onCompositionStart" ? mn === "onCompositionEnd" && $i && (an = Pa()) : (_u = st, qo = "value" in _u ? _u.value : _u.textContent, $i = !0)), on = Gi($e, mn), 0 < on.length && (mn = new Ra(mn, e, null, n, st), dt.push({ event: mn, listeners: on }), an ? mn.data = an : (an = Ks(n), an !== null && (mn.data = an)))), (an = oc ? Qu(e, n) : ac(e, n)) && ($e = Gi($e, "onBeforeInput"), 0 < $e.length && (st = new Ra("onBeforeInput", "beforeinput", null, n, st), dt.push({ event: st, listeners: $e }), st.data = an));
      }
      Ya(dt, t);
    });
  }
  function gi(e, t, n) {
    return { instance: e, listener: t, currentTarget: n };
  }
  function Gi(e, t) {
    for (var n = t + "Capture", r = []; e !== null; ) {
      var s = e, h = s.stateNode;
      s.tag === 5 && h !== null && (s = h, h = Fu(e, n), h != null && r.unshift(gi(e, h, s)), h = Fu(e, t), h != null && r.push(gi(e, h, s))), e = e.return;
    }
    return r;
  }
  function hi(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function sl(e, t, n, r, s) {
    for (var h = t._reactName, V = []; n !== null && n !== r; ) {
      var ae = n, fe = ae.alternate, $e = ae.stateNode;
      if (fe !== null && fe === r)
        break;
      ae.tag === 5 && $e !== null && (ae = $e, s ? (fe = Fu(n, h), fe != null && V.unshift(gi(n, fe, ae))) : s || (fe = Fu(n, h), fe != null && V.push(gi(n, fe, ae)))), n = n.return;
    }
    V.length !== 0 && e.push({ event: t, listeners: V });
  }
  var Dc = /\r\n?/g, gc = /\u0000|\uFFFD/g;
  function ll(e) {
    return (typeof e == "string" ? e : "" + e).replace(Dc, `
`).replace(gc, "");
  }
  function ra(e, t, n) {
    if (t = ll(t), ll(e) !== t && n)
      throw Error(pe(425));
  }
  function So() {
  }
  var Ha = null, ua = null;
  function Yu(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ia = typeof setTimeout == "function" ? setTimeout : void 0, hc = typeof clearTimeout == "function" ? clearTimeout : void 0, oa = typeof Promise == "function" ? Promise : void 0, yc = typeof queueMicrotask == "function" ? queueMicrotask : typeof oa < "u" ? function(e) {
    return oa.resolve(null).then(e).catch(Ec);
  } : ia;
  function Ec(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function zr(e, t) {
    var n = t, r = 0;
    do {
      var s = n.nextSibling;
      if (e.removeChild(n), s && s.nodeType === 8)
        if (n = s.data, n === "/$") {
          if (r === 0) {
            e.removeChild(s), ji(t);
            return;
          }
          r--;
        } else
          n !== "$" && n !== "$?" && n !== "$!" || r++;
      n = s;
    } while (n);
    ji(t);
  }
  function iu(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3)
        break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?")
          break;
        if (t === "/$")
          return null;
      }
    }
    return e;
  }
  function Za(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?") {
          if (t === 0)
            return e;
          t--;
        } else
          n === "/$" && t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yi = Math.random().toString(36).slice(2), Su = "__reactFiber$" + yi, Ji = "__reactProps$" + yi, Qr = "__reactContainer$" + yi, qi = "__reactEvents$" + yi, aa = "__reactListeners$" + yi, sa = "__reactHandles$" + yi;
  function Du(e) {
    var t = e[Su];
    if (t)
      return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Qr] || n[Su]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Za(e); e !== null; ) {
            if (n = e[Su])
              return n;
            e = Za(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Hu(e) {
    return e = e[Su] || e[Qr], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function Zu(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(pe(33));
  }
  function ei(e) {
    return e[Ji] || null;
  }
  var la = [], Ei = -1;
  function Tu(e) {
    return { current: e };
  }
  function Zn(e) {
    0 > Ei || (e.current = la[Ei], la[Ei] = null, Ei--);
  }
  function Qn(e, t) {
    Ei++, la[Ei] = e.current, e.current = t;
  }
  var Lu = {}, br = Tu(Lu), Ur = Tu(!1), vi = Lu;
  function Wi(e, t) {
    var n = e.type.contextTypes;
    if (!n)
      return Lu;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
      return r.__reactInternalMemoizedMaskedChildContext;
    var s = {}, h;
    for (h in n)
      s[h] = t[h];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = s), s;
  }
  function qr(e) {
    return e = e.childContextTypes, e != null;
  }
  function ca() {
    Zn(Ur), Zn(br);
  }
  function cl(e, t, n) {
    if (br.current !== Lu)
      throw Error(pe(168));
    Qn(br, t), Qn(Ur, n);
  }
  function Ci(e, t, n) {
    var r = e.stateNode;
    if (t = t.childContextTypes, typeof r.getChildContext != "function")
      return n;
    r = r.getChildContext();
    for (var s in r)
      if (!(s in t))
        throw Error(pe(108, Pn(e) || "Unknown", s));
    return de({}, n, r);
  }
  function pa(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Lu, vi = br.current, Qn(br, e), Qn(Ur, Ur.current), !0;
  }
  function pl(e, t, n) {
    var r = e.stateNode;
    if (!r)
      throw Error(pe(169));
    n ? (e = Ci(e, t, vi), r.__reactInternalMemoizedMergedChildContext = e, Zn(Ur), Zn(br), Qn(br, e)) : Zn(Ur), Qn(Ur, n);
  }
  var gu = null, da = !1, es = !1;
  function ts(e) {
    gu === null ? gu = [e] : gu.push(e);
  }
  function vc(e) {
    da = !0, ts(e);
  }
  function ti() {
    if (!es && gu !== null) {
      es = !0;
      var e = 0, t = $n;
      try {
        var n = gu;
        for ($n = 1; e < n.length; e++) {
          var r = n[e];
          do
            r = r(!0);
          while (r !== null);
        }
        gu = null, da = !1;
      } catch (s) {
        throw gu !== null && (gu = gu.slice(e + 1)), He(ee, ti), s;
      } finally {
        $n = t, es = !1;
      }
    }
    return null;
  }
  var Xi = [], Qi = 0, Yi = null, fa = 0, Yr = [], ou = 0, Fi = null, Ou = 1, Mu = "";
  function xi(e, t) {
    Xi[Qi++] = fa, Xi[Qi++] = Yi, Yi = e, fa = t;
  }
  function dl(e, t, n) {
    Yr[ou++] = Ou, Yr[ou++] = Mu, Yr[ou++] = Fi, Fi = e;
    var r = Ou;
    e = Mu;
    var s = 32 - kr(r) - 1;
    r &= ~(1 << s), n += 1;
    var h = 32 - kr(t) + s;
    if (30 < h) {
      var V = s - s % 5;
      h = (r & (1 << V) - 1).toString(32), r >>= V, s -= V, Ou = 1 << 32 - kr(t) + s | n << s | r, Mu = h + e;
    } else
      Ou = 1 << h | n << s | r, Mu = e;
  }
  function ns(e) {
    e.return !== null && (xi(e, 1), dl(e, 1, 0));
  }
  function rs(e) {
    for (; e === Yi; )
      Yi = Xi[--Qi], Xi[Qi] = null, fa = Xi[--Qi], Xi[Qi] = null;
    for (; e === Fi; )
      Fi = Yr[--ou], Yr[ou] = null, Mu = Yr[--ou], Yr[ou] = null, Ou = Yr[--ou], Yr[ou] = null;
  }
  var Hr = null, Zr = null, tr = !1, hu = null;
  function fl(e, t) {
    var n = bu(5, null, null, 0);
    n.elementType = "DELETED", n.stateNode = t, n.return = e, t = e.deletions, t === null ? (e.deletions = [n], e.flags |= 16) : t.push(n);
  }
  function ml(e, t) {
    switch (e.tag) {
      case 5:
        var n = e.type;
        return t = t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t, t !== null ? (e.stateNode = t, Hr = e, Zr = iu(t.firstChild), !0) : !1;
      case 6:
        return t = e.pendingProps === "" || t.nodeType !== 3 ? null : t, t !== null ? (e.stateNode = t, Hr = e, Zr = null, !0) : !1;
      case 13:
        return t = t.nodeType !== 8 ? null : t, t !== null ? (n = Fi !== null ? { id: Ou, overflow: Mu } : null, e.memoizedState = { dehydrated: t, treeContext: n, retryLane: 1073741824 }, n = bu(18, null, null, 0), n.stateNode = t, n.return = e, e.child = n, Hr = e, Zr = null, !0) : !1;
      default:
        return !1;
    }
  }
  function us(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function is(e) {
    if (tr) {
      var t = Zr;
      if (t) {
        var n = t;
        if (!ml(e, t)) {
          if (us(e))
            throw Error(pe(418));
          t = iu(n.nextSibling);
          var r = Hr;
          t && ml(e, t) ? fl(r, n) : (e.flags = e.flags & -4097 | 2, tr = !1, Hr = e);
        }
      } else {
        if (us(e))
          throw Error(pe(418));
        e.flags = e.flags & -4097 | 2, tr = !1, Hr = e;
      }
    }
  }
  function Dl(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Hr = e;
  }
  function ma(e) {
    if (e !== Hr)
      return !1;
    if (!tr)
      return Dl(e), tr = !0, !1;
    var t;
    if ((t = e.tag !== 3) && !(t = e.tag !== 5) && (t = e.type, t = t !== "head" && t !== "body" && !Yu(e.type, e.memoizedProps)), t && (t = Zr)) {
      if (us(e))
        throw gl(), Error(pe(418));
      for (; t; )
        fl(e, t), t = iu(t.nextSibling);
    }
    if (Dl(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(pe(317));
      e: {
        for (e = e.nextSibling, t = 0; e; ) {
          if (e.nodeType === 8) {
            var n = e.data;
            if (n === "/$") {
              if (t === 0) {
                Zr = iu(e.nextSibling);
                break e;
              }
              t--;
            } else
              n !== "$" && n !== "$!" && n !== "$?" || t++;
          }
          e = e.nextSibling;
        }
        Zr = null;
      }
    } else
      Zr = Hr ? iu(e.stateNode.nextSibling) : null;
    return !0;
  }
  function gl() {
    for (var e = Zr; e; )
      e = iu(e.nextSibling);
  }
  function Hi() {
    Zr = Hr = null, tr = !1;
  }
  function os(e) {
    hu === null ? hu = [e] : hu.push(e);
  }
  var Cc = Hn.ReactCurrentBatchConfig;
  function yu(e, t) {
    if (e && e.defaultProps) {
      t = de({}, t), e = e.defaultProps;
      for (var n in e)
        t[n] === void 0 && (t[n] = e[n]);
      return t;
    }
    return t;
  }
  var Da = Tu(null), ga = null, Zi = null, as = null;
  function ss() {
    as = Zi = ga = null;
  }
  function ls(e) {
    var t = Da.current;
    Zn(Da), e._currentValue = t;
  }
  function cs(e, t, n) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, r !== null && (r.childLanes |= t)) : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t), e === n)
        break;
      e = e.return;
    }
  }
  function eo(e, t) {
    ga = e, as = Zi = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & t && (ie = !0), e.firstContext = null);
  }
  function eu(e) {
    var t = e._currentValue;
    if (as !== e)
      if (e = { context: e, memoizedValue: t, next: null }, Zi === null) {
        if (ga === null)
          throw Error(pe(308));
        Zi = e, ga.dependencies = { lanes: 0, firstContext: e };
      } else
        Zi = Zi.next = e;
    return t;
  }
  var ni = null;
  function ps(e) {
    ni === null ? ni = [e] : ni.push(e);
  }
  function ha(e, t, n, r) {
    var s = t.interleaved;
    return s === null ? (n.next = n, ps(t)) : (n.next = s.next, s.next = n), t.interleaved = n, Ru(e, r);
  }
  function Ru(e, t) {
    e.lanes |= t;
    var n = e.alternate;
    for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
      e.childLanes |= t, n = e.alternate, n !== null && (n.childLanes |= t), n = e, e = e.return;
    return n.tag === 3 ? n.stateNode : null;
  }
  var $u = !1;
  function ds(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function hl(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Vu(e, t) {
    return { eventTime: e, lane: t, tag: 0, payload: null, callback: null, next: null };
  }
  function ri(e, t, n) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, nn & 2) {
      var s = r.pending;
      return s === null ? t.next = t : (t.next = s.next, s.next = t), r.pending = t, Ru(e, n);
    }
    return s = r.interleaved, s === null ? (t.next = t, ps(r)) : (t.next = s.next, s.next = t), r.interleaved = t, Ru(e, n);
  }
  function ya(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194240) !== 0)) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Na(e, n);
    }
  }
  function fs(e, t) {
    var n = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, n === r)) {
      var s = null, h = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var V = { eventTime: n.eventTime, lane: n.lane, tag: n.tag, payload: n.payload, callback: n.callback, next: null };
          h === null ? s = h = V : h = h.next = V, n = n.next;
        } while (n !== null);
        h === null ? s = h = t : h = h.next = t;
      } else
        s = h = t;
      n = { baseState: r.baseState, firstBaseUpdate: s, lastBaseUpdate: h, shared: r.shared, effects: r.effects }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  function Ea(e, t, n, r) {
    var s = e.updateQueue;
    $u = !1;
    var h = s.firstBaseUpdate, V = s.lastBaseUpdate, ae = s.shared.pending;
    if (ae !== null) {
      s.shared.pending = null;
      var fe = ae, $e = fe.next;
      fe.next = null, V === null ? h = $e : V.next = $e, V = fe;
      var st = e.alternate;
      st !== null && (st = st.updateQueue, ae = st.lastBaseUpdate, ae !== V && (ae === null ? st.firstBaseUpdate = $e : ae.next = $e, st.lastBaseUpdate = fe));
    }
    if (h !== null) {
      var dt = s.baseState;
      V = 0, st = $e = fe = null, ae = h;
      do {
        var at = ae.lane, jt = ae.eventTime;
        if ((r & at) === at) {
          st !== null && (st = st.next = {
            eventTime: jt,
            lane: 0,
            tag: ae.tag,
            payload: ae.payload,
            callback: ae.callback,
            next: null
          });
          e: {
            var Rt = e, Vt = ae;
            switch (at = t, jt = n, Vt.tag) {
              case 1:
                if (Rt = Vt.payload, typeof Rt == "function") {
                  dt = Rt.call(jt, dt, at);
                  break e;
                }
                dt = Rt;
                break e;
              case 3:
                Rt.flags = Rt.flags & -65537 | 128;
              case 0:
                if (Rt = Vt.payload, at = typeof Rt == "function" ? Rt.call(jt, dt, at) : Rt, at == null)
                  break e;
                dt = de({}, dt, at);
                break e;
              case 2:
                $u = !0;
            }
          }
          ae.callback !== null && ae.lane !== 0 && (e.flags |= 64, at = s.effects, at === null ? s.effects = [ae] : at.push(ae));
        } else
          jt = { eventTime: jt, lane: at, tag: ae.tag, payload: ae.payload, callback: ae.callback, next: null }, st === null ? ($e = st = jt, fe = dt) : st = st.next = jt, V |= at;
        if (ae = ae.next, ae === null) {
          if (ae = s.shared.pending, ae === null)
            break;
          at = ae, ae = at.next, at.next = null, s.lastBaseUpdate = at, s.shared.pending = null;
        }
      } while (1);
      if (st === null && (fe = dt), s.baseState = fe, s.firstBaseUpdate = $e, s.lastBaseUpdate = st, t = s.shared.interleaved, t !== null) {
        s = t;
        do
          V |= s.lane, s = s.next;
        while (s !== t);
      } else
        h === null && (s.shared.lanes = 0);
      oi |= V, e.lanes = V, e.memoizedState = dt;
    }
  }
  function yl(e, t, n) {
    if (e = t.effects, t.effects = null, e !== null)
      for (t = 0; t < e.length; t++) {
        var r = e[t], s = r.callback;
        if (s !== null) {
          if (r.callback = null, r = n, typeof s != "function")
            throw Error(pe(191, s));
          s.call(r);
        }
      }
  }
  var El = new Kt.Component().refs;
  function ms(e, t, n, r) {
    t = e.memoizedState, n = n(r, t), n = n == null ? t : de({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ku = { isMounted: function(e) {
    return (e = e._reactInternals) ? me(e) === e : !1;
  }, enqueueSetState: function(e, t, n) {
    e = e._reactInternals;
    var r = tu(), s = ao(e), h = Vu(r, s);
    h.payload = t, n != null && (h.callback = n), t = ri(e, h, s), t !== null && (zu(t, e, s, r), ya(t, e, s));
  }, enqueueReplaceState: function(e, t, n) {
    e = e._reactInternals;
    var r = tu(), s = ao(e), h = Vu(r, s);
    h.tag = 1, h.payload = t, n != null && (h.callback = n), t = ri(e, h, s), t !== null && (zu(t, e, s, r), ya(t, e, s));
  }, enqueueForceUpdate: function(e, t) {
    e = e._reactInternals;
    var n = tu(), r = ao(e), s = Vu(n, r);
    s.tag = 2, t != null && (s.callback = t), t = ri(e, s, r), t !== null && (zu(t, e, r, n), ya(t, e, r));
  } };
  function vl(e, t, n, r, s, h, V) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, h, V) : t.prototype && t.prototype.isPureReactComponent ? !Iu(n, r) || !Iu(s, h) : !0;
  }
  function Cl(e, t, n) {
    var r = !1, s = Lu, h = t.contextType;
    return typeof h == "object" && h !== null ? h = eu(h) : (s = qr(t) ? vi : br.current, r = t.contextTypes, h = (r = r != null) ? Wi(e, s) : Lu), t = new t(n, h), e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null, t.updater = Ku, e.stateNode = t, t._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = s, e.__reactInternalMemoizedMaskedChildContext = h), t;
  }
  function Fl(e, t, n, r) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, r), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, r), t.state !== e && Ku.enqueueReplaceState(t, t.state, null);
  }
  function Ds(e, t, n, r) {
    var s = e.stateNode;
    s.props = n, s.state = e.memoizedState, s.refs = El, ds(e);
    var h = t.contextType;
    typeof h == "object" && h !== null ? s.context = eu(h) : (h = qr(t) ? vi : br.current, s.context = Wi(e, h)), s.state = e.memoizedState, h = t.getDerivedStateFromProps, typeof h == "function" && (ms(e, t, h, n), s.state = e.memoizedState), typeof t.getDerivedStateFromProps == "function" || typeof s.getSnapshotBeforeUpdate == "function" || typeof s.UNSAFE_componentWillMount != "function" && typeof s.componentWillMount != "function" || (t = s.state, typeof s.componentWillMount == "function" && s.componentWillMount(), typeof s.UNSAFE_componentWillMount == "function" && s.UNSAFE_componentWillMount(), t !== s.state && Ku.enqueueReplaceState(s, s.state, null), Ea(e, n, s, r), s.state = e.memoizedState), typeof s.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function To(e, t, n) {
    if (e = n.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (n._owner) {
        if (n = n._owner, n) {
          if (n.tag !== 1)
            throw Error(pe(309));
          var r = n.stateNode;
        }
        if (!r)
          throw Error(pe(147, e));
        var s = r, h = "" + e;
        return t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === h ? t.ref : (t = function(V) {
          var ae = s.refs;
          ae === El && (ae = s.refs = {}), V === null ? delete ae[h] : ae[h] = V;
        }, t._stringRef = h, t);
      }
      if (typeof e != "string")
        throw Error(pe(284));
      if (!n._owner)
        throw Error(pe(290, e));
    }
    return e;
  }
  function va(e, t) {
    throw e = Object.prototype.toString.call(t), Error(pe(31, e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e));
  }
  function xl(e) {
    var t = e._init;
    return t(e._payload);
  }
  function Ca(e) {
    function t(Ie, ve) {
      if (e) {
        var Oe = Ie.deletions;
        Oe === null ? (Ie.deletions = [ve], Ie.flags |= 16) : Oe.push(ve);
      }
    }
    function n(Ie, ve) {
      if (!e)
        return null;
      for (; ve !== null; )
        t(Ie, ve), ve = ve.sibling;
      return null;
    }
    function r(Ie, ve) {
      for (Ie = /* @__PURE__ */ new Map(); ve !== null; )
        ve.key !== null ? Ie.set(ve.key, ve) : Ie.set(ve.index, ve), ve = ve.sibling;
      return Ie;
    }
    function s(Ie, ve) {
      return Ie = lo(Ie, ve), Ie.index = 0, Ie.sibling = null, Ie;
    }
    function h(Ie, ve, Oe) {
      return Ie.index = Oe, e ? (Oe = Ie.alternate, Oe !== null ? (Oe = Oe.index, Oe < ve ? (Ie.flags |= 2, ve) : Oe) : (Ie.flags |= 2, ve)) : (Ie.flags |= 1048576, ve);
    }
    function V(Ie) {
      return e && Ie.alternate === null && (Ie.flags |= 2), Ie;
    }
    function ae(Ie, ve, Oe, ht) {
      return ve === null || ve.tag !== 6 ? (ve = _c(Oe, Ie.mode, ht), ve.return = Ie, ve) : (ve = s(ve, Oe), ve.return = Ie, ve);
    }
    function fe(Ie, ve, Oe, ht) {
      var qt = Oe.type;
      return qt === Dr ? st(Ie, ve, Oe.props.children, ht, Oe.key) : ve !== null && (ve.elementType === qt || typeof qt == "object" && qt !== null && qt.$$typeof === sn && xl(qt) === ve.type) ? (ht = s(ve, Oe.props), ht.ref = To(Ie, ve, Oe), ht.return = Ie, ht) : (ht = Pl(Oe.type, Oe.key, Oe.props, null, Ie.mode, ht), ht.ref = To(Ie, ve, Oe), ht.return = Ie, ht);
    }
    function $e(Ie, ve, Oe, ht) {
      return ve === null || ve.tag !== 4 || ve.stateNode.containerInfo !== Oe.containerInfo || ve.stateNode.implementation !== Oe.implementation ? (ve = Pc(Oe, Ie.mode, ht), ve.return = Ie, ve) : (ve = s(ve, Oe.children || []), ve.return = Ie, ve);
    }
    function st(Ie, ve, Oe, ht, qt) {
      return ve === null || ve.tag !== 7 ? (ve = Lo(Oe, Ie.mode, ht, qt), ve.return = Ie, ve) : (ve = s(ve, Oe), ve.return = Ie, ve);
    }
    function dt(Ie, ve, Oe) {
      if (typeof ve == "string" && ve !== "" || typeof ve == "number")
        return ve = _c("" + ve, Ie.mode, Oe), ve.return = Ie, ve;
      if (typeof ve == "object" && ve !== null) {
        switch (ve.$$typeof) {
          case wr:
            return Oe = Pl(ve.type, ve.key, ve.props, null, Ie.mode, Oe), Oe.ref = To(Ie, null, ve), Oe.return = Ie, Oe;
          case mr:
            return ve = Pc(ve, Ie.mode, Oe), ve.return = Ie, ve;
          case sn:
            var ht = ve._init;
            return dt(Ie, ht(ve._payload), Oe);
        }
        if (Sn(ve) || At(ve))
          return ve = Lo(ve, Ie.mode, Oe, null), ve.return = Ie, ve;
        va(Ie, ve);
      }
      return null;
    }
    function at(Ie, ve, Oe, ht) {
      var qt = ve !== null ? ve.key : null;
      if (typeof Oe == "string" && Oe !== "" || typeof Oe == "number")
        return qt !== null ? null : ae(Ie, ve, "" + Oe, ht);
      if (typeof Oe == "object" && Oe !== null) {
        switch (Oe.$$typeof) {
          case wr:
            return Oe.key === qt ? fe(Ie, ve, Oe, ht) : null;
          case mr:
            return Oe.key === qt ? $e(Ie, ve, Oe, ht) : null;
          case sn:
            return qt = Oe._init, at(
              Ie,
              ve,
              qt(Oe._payload),
              ht
            );
        }
        if (Sn(Oe) || At(Oe))
          return qt !== null ? null : st(Ie, ve, Oe, ht, null);
        va(Ie, Oe);
      }
      return null;
    }
    function jt(Ie, ve, Oe, ht, qt) {
      if (typeof ht == "string" && ht !== "" || typeof ht == "number")
        return Ie = Ie.get(Oe) || null, ae(ve, Ie, "" + ht, qt);
      if (typeof ht == "object" && ht !== null) {
        switch (ht.$$typeof) {
          case wr:
            return Ie = Ie.get(ht.key === null ? Oe : ht.key) || null, fe(ve, Ie, ht, qt);
          case mr:
            return Ie = Ie.get(ht.key === null ? Oe : ht.key) || null, $e(ve, Ie, ht, qt);
          case sn:
            var on = ht._init;
            return jt(Ie, ve, Oe, on(ht._payload), qt);
        }
        if (Sn(ht) || At(ht))
          return Ie = Ie.get(Oe) || null, st(ve, Ie, ht, qt, null);
        va(ve, ht);
      }
      return null;
    }
    function Rt(Ie, ve, Oe, ht) {
      for (var qt = null, on = null, an = ve, mn = ve = 0, Lr = null; an !== null && mn < Oe.length; mn++) {
        an.index > mn ? (Lr = an, an = null) : Lr = an.sibling;
        var Vn = at(Ie, an, Oe[mn], ht);
        if (Vn === null) {
          an === null && (an = Lr);
          break;
        }
        e && an && Vn.alternate === null && t(Ie, an), ve = h(Vn, ve, mn), on === null ? qt = Vn : on.sibling = Vn, on = Vn, an = Lr;
      }
      if (mn === Oe.length)
        return n(Ie, an), tr && xi(Ie, mn), qt;
      if (an === null) {
        for (; mn < Oe.length; mn++)
          an = dt(Ie, Oe[mn], ht), an !== null && (ve = h(an, ve, mn), on === null ? qt = an : on.sibling = an, on = an);
        return tr && xi(Ie, mn), qt;
      }
      for (an = r(Ie, an); mn < Oe.length; mn++)
        Lr = jt(an, Ie, mn, Oe[mn], ht), Lr !== null && (e && Lr.alternate !== null && an.delete(Lr.key === null ? mn : Lr.key), ve = h(Lr, ve, mn), on === null ? qt = Lr : on.sibling = Lr, on = Lr);
      return e && an.forEach(function(co) {
        return t(Ie, co);
      }), tr && xi(Ie, mn), qt;
    }
    function Vt(Ie, ve, Oe, ht) {
      var qt = At(Oe);
      if (typeof qt != "function")
        throw Error(pe(150));
      if (Oe = qt.call(Oe), Oe == null)
        throw Error(pe(151));
      for (var on = qt = null, an = ve, mn = ve = 0, Lr = null, Vn = Oe.next(); an !== null && !Vn.done; mn++, Vn = Oe.next()) {
        an.index > mn ? (Lr = an, an = null) : Lr = an.sibling;
        var co = at(Ie, an, Vn.value, ht);
        if (co === null) {
          an === null && (an = Lr);
          break;
        }
        e && an && co.alternate === null && t(Ie, an), ve = h(co, ve, mn), on === null ? qt = co : on.sibling = co, on = co, an = Lr;
      }
      if (Vn.done)
        return n(
          Ie,
          an
        ), tr && xi(Ie, mn), qt;
      if (an === null) {
        for (; !Vn.done; mn++, Vn = Oe.next())
          Vn = dt(Ie, Vn.value, ht), Vn !== null && (ve = h(Vn, ve, mn), on === null ? qt = Vn : on.sibling = Vn, on = Vn);
        return tr && xi(Ie, mn), qt;
      }
      for (an = r(Ie, an); !Vn.done; mn++, Vn = Oe.next())
        Vn = jt(an, Ie, mn, Vn.value, ht), Vn !== null && (e && Vn.alternate !== null && an.delete(Vn.key === null ? mn : Vn.key), ve = h(Vn, ve, mn), on === null ? qt = Vn : on.sibling = Vn, on = Vn);
      return e && an.forEach(function(jp) {
        return t(Ie, jp);
      }), tr && xi(Ie, mn), qt;
    }
    function vr(Ie, ve, Oe, ht) {
      if (typeof Oe == "object" && Oe !== null && Oe.type === Dr && Oe.key === null && (Oe = Oe.props.children), typeof Oe == "object" && Oe !== null) {
        switch (Oe.$$typeof) {
          case wr:
            e: {
              for (var qt = Oe.key, on = ve; on !== null; ) {
                if (on.key === qt) {
                  if (qt = Oe.type, qt === Dr) {
                    if (on.tag === 7) {
                      n(Ie, on.sibling), ve = s(on, Oe.props.children), ve.return = Ie, Ie = ve;
                      break e;
                    }
                  } else if (on.elementType === qt || typeof qt == "object" && qt !== null && qt.$$typeof === sn && xl(qt) === on.type) {
                    n(Ie, on.sibling), ve = s(on, Oe.props), ve.ref = To(Ie, on, Oe), ve.return = Ie, Ie = ve;
                    break e;
                  }
                  n(Ie, on);
                  break;
                } else
                  t(Ie, on);
                on = on.sibling;
              }
              Oe.type === Dr ? (ve = Lo(Oe.props.children, Ie.mode, ht, Oe.key), ve.return = Ie, Ie = ve) : (ht = Pl(Oe.type, Oe.key, Oe.props, null, Ie.mode, ht), ht.ref = To(Ie, ve, Oe), ht.return = Ie, Ie = ht);
            }
            return V(Ie);
          case mr:
            e: {
              for (on = Oe.key; ve !== null; ) {
                if (ve.key === on)
                  if (ve.tag === 4 && ve.stateNode.containerInfo === Oe.containerInfo && ve.stateNode.implementation === Oe.implementation) {
                    n(Ie, ve.sibling), ve = s(ve, Oe.children || []), ve.return = Ie, Ie = ve;
                    break e;
                  } else {
                    n(Ie, ve);
                    break;
                  }
                else
                  t(Ie, ve);
                ve = ve.sibling;
              }
              ve = Pc(Oe, Ie.mode, ht), ve.return = Ie, Ie = ve;
            }
            return V(Ie);
          case sn:
            return on = Oe._init, vr(Ie, ve, on(Oe._payload), ht);
        }
        if (Sn(Oe))
          return Rt(Ie, ve, Oe, ht);
        if (At(Oe))
          return Vt(Ie, ve, Oe, ht);
        va(Ie, Oe);
      }
      return typeof Oe == "string" && Oe !== "" || typeof Oe == "number" ? (Oe = "" + Oe, ve !== null && ve.tag === 6 ? (n(Ie, ve.sibling), ve = s(ve, Oe), ve.return = Ie, Ie = ve) : (n(Ie, ve), ve = _c(Oe, Ie.mode, ht), ve.return = Ie, Ie = ve), V(Ie)) : n(Ie, ve);
    }
    return vr;
  }
  var wu = Ca(!0), Al = Ca(!1), wo = {}, ku = Tu(wo), to = Tu(wo), ko = Tu(wo);
  function ui(e) {
    if (e === wo)
      throw Error(pe(174));
    return e;
  }
  function gs(e, t) {
    switch (Qn(ko, t), Qn(to, e), Qn(ku, wo), e = t.nodeType, e) {
      case 9:
      case 11:
        t = (t = t.documentElement) ? t.namespaceURI : Re(null, "");
        break;
      default:
        e = e === 8 ? t.parentNode : t, t = e.namespaceURI || null, e = e.tagName, t = Re(t, e);
    }
    Zn(ku), Qn(ku, t);
  }
  function no() {
    Zn(ku), Zn(to), Zn(ko);
  }
  function Sl(e) {
    ui(ko.current);
    var t = ui(ku.current), n = Re(t, e.type);
    t !== n && (Qn(to, e), Qn(ku, n));
  }
  function hs(e) {
    to.current === e && (Zn(ku), Zn(to));
  }
  var er = Tu(0);
  function Fa(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || n.data === "$?" || n.data === "$!"))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
        if (t.flags & 128)
          return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e)
          return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var ys = [];
  function Es() {
    for (var e = 0; e < ys.length; e++)
      ys[e]._workInProgressVersionPrimary = null;
    ys.length = 0;
  }
  var xa = Hn.ReactCurrentDispatcher, vs = Hn.ReactCurrentBatchConfig, au = 0, rr = null, ir = null, Tr = null, Aa = !1, No = !1, bo = 0, Fc = 0;
  function jr() {
    throw Error(pe(321));
  }
  function Cs(e, t) {
    if (t === null)
      return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!mu(e[n], t[n]))
        return !1;
    return !0;
  }
  function Fs(e, t, n, r, s, h) {
    if (au = h, rr = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, xa.current = e === null || e.memoizedState === null ? w : c, e = n(r, s), No) {
      h = 0;
      do {
        if (No = !1, bo = 0, 25 <= h)
          throw Error(pe(301));
        h += 1, Tr = ir = null, t.updateQueue = null, xa.current = F, e = n(r, s);
      } while (No);
    }
    if (xa.current = E, t = ir !== null && ir.next !== null, au = 0, Tr = ir = rr = null, Aa = !1, t)
      throw Error(pe(300));
    return e;
  }
  function xs() {
    var e = bo !== 0;
    return bo = 0, e;
  }
  function Nu() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return Tr === null ? rr.memoizedState = Tr = e : Tr = Tr.next = e, Tr;
  }
  function Br() {
    if (ir === null) {
      var e = rr.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ir.next;
    var t = Tr === null ? rr.memoizedState : Tr.next;
    if (t !== null)
      Tr = t, ir = e;
    else {
      if (e === null)
        throw Error(pe(310));
      ir = e, e = { memoizedState: ir.memoizedState, baseState: ir.baseState, baseQueue: ir.baseQueue, queue: ir.queue, next: null }, Tr === null ? rr.memoizedState = Tr = e : Tr = Tr.next = e;
    }
    return Tr;
  }
  function Bo(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function As(e) {
    var t = Br(), n = t.queue;
    if (n === null)
      throw Error(pe(311));
    n.lastRenderedReducer = e;
    var r = ir, s = r.baseQueue, h = n.pending;
    if (h !== null) {
      if (s !== null) {
        var V = s.next;
        s.next = h.next, h.next = V;
      }
      r.baseQueue = s = h, n.pending = null;
    }
    if (s !== null) {
      h = s.next, r = r.baseState;
      var ae = V = null, fe = null, $e = h;
      do {
        var st = $e.lane;
        if ((au & st) === st)
          fe !== null && (fe = fe.next = { lane: 0, action: $e.action, hasEagerState: $e.hasEagerState, eagerState: $e.eagerState, next: null }), r = $e.hasEagerState ? $e.eagerState : e(r, $e.action);
        else {
          var dt = {
            lane: st,
            action: $e.action,
            hasEagerState: $e.hasEagerState,
            eagerState: $e.eagerState,
            next: null
          };
          fe === null ? (ae = fe = dt, V = r) : fe = fe.next = dt, rr.lanes |= st, oi |= st;
        }
        $e = $e.next;
      } while ($e !== null && $e !== h);
      fe === null ? V = r : fe.next = ae, mu(r, t.memoizedState) || (ie = !0), t.memoizedState = r, t.baseState = V, t.baseQueue = fe, n.lastRenderedState = r;
    }
    if (e = n.interleaved, e !== null) {
      s = e;
      do
        h = s.lane, rr.lanes |= h, oi |= h, s = s.next;
      while (s !== e);
    } else
      s === null && (n.lanes = 0);
    return [t.memoizedState, n.dispatch];
  }
  function Ss(e) {
    var t = Br(), n = t.queue;
    if (n === null)
      throw Error(pe(311));
    n.lastRenderedReducer = e;
    var r = n.dispatch, s = n.pending, h = t.memoizedState;
    if (s !== null) {
      n.pending = null;
      var V = s = s.next;
      do
        h = e(h, V.action), V = V.next;
      while (V !== s);
      mu(h, t.memoizedState) || (ie = !0), t.memoizedState = h, t.baseQueue === null && (t.baseState = h), n.lastRenderedState = h;
    }
    return [h, r];
  }
  function Tl() {
  }
  function ii(e, t) {
    var n = rr, r = Br(), s = t(), h = !mu(r.memoizedState, s);
    if (h && (r.memoizedState = s, ie = !0), r = r.queue, x(m.bind(null, n, r, e), [e]), r.getSnapshot !== t || h || Tr !== null && Tr.memoizedState.tag & 1) {
      if (n.flags |= 2048, u(9, l.bind(null, n, r, s, t), void 0, null), Tt === null)
        throw Error(pe(349));
      au & 30 || Sa(n, t, s);
    }
    return s;
  }
  function Sa(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = rr.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, rr.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function l(e, t, n, r) {
    t.value = n, t.getSnapshot = r, i(t) && d(e);
  }
  function m(e, t, n) {
    return n(function() {
      i(t) && d(e);
    });
  }
  function i(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !mu(e, n);
    } catch {
      return !0;
    }
  }
  function d(e) {
    var t = Ru(e, 1);
    t !== null && zu(t, e, 1, -1);
  }
  function p(e) {
    var t = Nu();
    return typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Bo, lastRenderedState: e }, t.queue = e, e = e.dispatch = O.bind(null, rr, e), [t.memoizedState, e];
  }
  function u(e, t, n, r) {
    return e = { tag: e, create: t, destroy: n, deps: r, next: null }, t = rr.updateQueue, t === null ? (t = { lastEffect: null, stores: null }, rr.updateQueue = t, t.lastEffect = e.next = e) : (n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (r = n.next, n.next = e, e.next = r, t.lastEffect = e)), e;
  }
  function o() {
    return Br().memoizedState;
  }
  function a(e, t, n, r) {
    var s = Nu();
    rr.flags |= e, s.memoizedState = u(1 | t, n, void 0, r === void 0 ? null : r);
  }
  function f(e, t, n, r) {
    var s = Br();
    r = r === void 0 ? null : r;
    var h = void 0;
    if (ir !== null) {
      var V = ir.memoizedState;
      if (h = V.destroy, r !== null && Cs(r, V.deps)) {
        s.memoizedState = u(t, n, h, r);
        return;
      }
    }
    rr.flags |= e, s.memoizedState = u(1 | t, n, h, r);
  }
  function g(e, t) {
    return a(8390656, 8, e, t);
  }
  function x(e, t) {
    return f(2048, 8, e, t);
  }
  function C(e, t) {
    return f(4, 2, e, t);
  }
  function A(e, t) {
    return f(4, 4, e, t);
  }
  function D(e, t) {
    if (typeof t == "function")
      return e = e(), t(e), function() {
        t(null);
      };
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function y(e, t, n) {
    return n = n != null ? n.concat([e]) : null, f(4, 4, D.bind(null, t, e), n);
  }
  function T() {
  }
  function j(e, t) {
    var n = Br();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Cs(t, r[1]) ? r[0] : (n.memoizedState = [e, t], e);
  }
  function M(e, t) {
    var n = Br();
    t = t === void 0 ? null : t;
    var r = n.memoizedState;
    return r !== null && t !== null && Cs(t, r[1]) ? r[0] : (e = e(), n.memoizedState = [e, t], e);
  }
  function k(e, t, n) {
    return au & 21 ? (mu(n, t) || (n = Kr(), rr.lanes |= n, oi |= n, e.baseState = !0), t) : (e.baseState && (e.baseState = !1, ie = !0), e.memoizedState = n);
  }
  function L(e, t) {
    var n = $n;
    $n = n !== 0 && 4 > n ? n : 4, e(!0);
    var r = vs.transition;
    vs.transition = {};
    try {
      e(!1), t();
    } finally {
      $n = n, vs.transition = r;
    }
  }
  function _() {
    return Br().memoizedState;
  }
  function R(e, t, n) {
    var r = ao(e);
    if (n = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null }, Q(e))
      v(t, n);
    else if (n = ha(e, t, n, r), n !== null) {
      var s = tu();
      zu(n, e, r, s), P(n, t, r);
    }
  }
  function O(e, t, n) {
    var r = ao(e), s = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
    if (Q(e))
      v(t, s);
    else {
      var h = e.alternate;
      if (e.lanes === 0 && (h === null || h.lanes === 0) && (h = t.lastRenderedReducer, h !== null))
        try {
          var V = t.lastRenderedState, ae = h(V, n);
          if (s.hasEagerState = !0, s.eagerState = ae, mu(ae, V)) {
            var fe = t.interleaved;
            fe === null ? (s.next = s, ps(t)) : (s.next = fe.next, fe.next = s), t.interleaved = s;
            return;
          }
        } catch {
        } finally {
        }
      n = ha(e, t, s, r), n !== null && (s = tu(), zu(n, e, r, s), P(n, t, r));
    }
  }
  function Q(e) {
    var t = e.alternate;
    return e === rr || t !== null && t === rr;
  }
  function v(e, t) {
    No = Aa = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function P(e, t, n) {
    if (n & 4194240) {
      var r = t.lanes;
      r &= e.pendingLanes, n |= r, t.lanes = n, Na(e, n);
    }
  }
  var E = { readContext: eu, useCallback: jr, useContext: jr, useEffect: jr, useImperativeHandle: jr, useInsertionEffect: jr, useLayoutEffect: jr, useMemo: jr, useReducer: jr, useRef: jr, useState: jr, useDebugValue: jr, useDeferredValue: jr, useTransition: jr, useMutableSource: jr, useSyncExternalStore: jr, useId: jr, unstable_isNewReconciler: !1 }, w = { readContext: eu, useCallback: function(e, t) {
    return Nu().memoizedState = [e, t === void 0 ? null : t], e;
  }, useContext: eu, useEffect: g, useImperativeHandle: function(e, t, n) {
    return n = n != null ? n.concat([e]) : null, a(
      4194308,
      4,
      D.bind(null, t, e),
      n
    );
  }, useLayoutEffect: function(e, t) {
    return a(4194308, 4, e, t);
  }, useInsertionEffect: function(e, t) {
    return a(4, 2, e, t);
  }, useMemo: function(e, t) {
    var n = Nu();
    return t = t === void 0 ? null : t, e = e(), n.memoizedState = [e, t], e;
  }, useReducer: function(e, t, n) {
    var r = Nu();
    return t = n !== void 0 ? n(t) : t, r.memoizedState = r.baseState = t, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: t }, r.queue = e, e = e.dispatch = R.bind(null, rr, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var t = Nu();
    return e = { current: e }, t.memoizedState = e;
  }, useState: p, useDebugValue: T, useDeferredValue: function(e) {
    return Nu().memoizedState = e;
  }, useTransition: function() {
    var e = p(!1), t = e[0];
    return e = L.bind(null, e[1]), Nu().memoizedState = e, [t, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, t, n) {
    var r = rr, s = Nu();
    if (tr) {
      if (n === void 0)
        throw Error(pe(407));
      n = n();
    } else {
      if (n = t(), Tt === null)
        throw Error(pe(349));
      au & 30 || Sa(r, t, n);
    }
    s.memoizedState = n;
    var h = { value: n, getSnapshot: t };
    return s.queue = h, g(m.bind(
      null,
      r,
      h,
      e
    ), [e]), r.flags |= 2048, u(9, l.bind(null, r, h, n, t), void 0, null), n;
  }, useId: function() {
    var e = Nu(), t = Tt.identifierPrefix;
    if (tr) {
      var n = Mu, r = Ou;
      n = (r & ~(1 << 32 - kr(r) - 1)).toString(32) + n, t = ":" + t + "R" + n, n = bo++, 0 < n && (t += "H" + n.toString(32)), t += ":";
    } else
      n = Fc++, t = ":" + t + "r" + n.toString(32) + ":";
    return e.memoizedState = t;
  }, unstable_isNewReconciler: !1 }, c = {
    readContext: eu,
    useCallback: j,
    useContext: eu,
    useEffect: x,
    useImperativeHandle: y,
    useInsertionEffect: C,
    useLayoutEffect: A,
    useMemo: M,
    useReducer: As,
    useRef: o,
    useState: function() {
      return As(Bo);
    },
    useDebugValue: T,
    useDeferredValue: function(e) {
      var t = Br();
      return k(t, ir.memoizedState, e);
    },
    useTransition: function() {
      var e = As(Bo)[0], t = Br().memoizedState;
      return [e, t];
    },
    useMutableSource: Tl,
    useSyncExternalStore: ii,
    useId: _,
    unstable_isNewReconciler: !1
  }, F = { readContext: eu, useCallback: j, useContext: eu, useEffect: x, useImperativeHandle: y, useInsertionEffect: C, useLayoutEffect: A, useMemo: M, useReducer: Ss, useRef: o, useState: function() {
    return Ss(Bo);
  }, useDebugValue: T, useDeferredValue: function(e) {
    var t = Br();
    return ir === null ? t.memoizedState = e : k(t, ir.memoizedState, e);
  }, useTransition: function() {
    var e = Ss(Bo)[0], t = Br().memoizedState;
    return [e, t];
  }, useMutableSource: Tl, useSyncExternalStore: ii, useId: _, unstable_isNewReconciler: !1 };
  function S(e, t) {
    try {
      var n = "", r = t;
      do
        n += kn(r), r = r.return;
      while (r);
      var s = n;
    } catch (h) {
      s = `
Error generating stack: ` + h.message + `
` + h.stack;
    }
    return { value: e, source: t, stack: s, digest: null };
  }
  function b(e, t, n) {
    return { value: e, source: null, stack: n ?? null, digest: t ?? null };
  }
  function B(e, t) {
    try {
      console.error(t.value);
    } catch (n) {
      setTimeout(function() {
        throw n;
      });
    }
  }
  var I = typeof WeakMap == "function" ? WeakMap : Map;
  function $(e, t, n) {
    n = Vu(-1, n), n.tag = 3, n.payload = { element: null };
    var r = t.value;
    return n.callback = function() {
      wl || (wl = !0, Ac = r), B(e, t);
    }, n;
  }
  function G(e, t, n) {
    n = Vu(-1, n), n.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var s = t.value;
      n.payload = function() {
        return r(s);
      }, n.callback = function() {
        B(e, t);
      };
    }
    var h = e.stateNode;
    return h !== null && typeof h.componentDidCatch == "function" && (n.callback = function() {
      B(e, t), typeof r != "function" && (io === null ? io = /* @__PURE__ */ new Set([this]) : io.add(this));
      var V = t.stack;
      this.componentDidCatch(t.value, { componentStack: V !== null ? V : "" });
    }), n;
  }
  function W(e, t, n) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new I();
      var s = /* @__PURE__ */ new Set();
      r.set(t, s);
    } else
      s = r.get(t), s === void 0 && (s = /* @__PURE__ */ new Set(), r.set(t, s));
    s.has(n) || (s.add(n), e = Ap.bind(null, e, t, n), t.then(e, e));
  }
  function J(e) {
    do {
      var t;
      if ((t = e.tag === 13) && (t = e.memoizedState, t = t !== null ? t.dehydrated !== null : !0), t)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function te(e, t, n, r, s) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = s, e) : (e === t ? e.flags |= 65536 : (e.flags |= 128, n.flags |= 131072, n.flags &= -52805, n.tag === 1 && (n.alternate === null ? n.tag = 17 : (t = Vu(-1, 1), t.tag = 2, ri(n, t, 1))), n.lanes |= 1), e);
  }
  var K = Hn.ReactCurrentOwner, ie = !1;
  function q(e, t, n, r) {
    t.child = e === null ? Al(t, null, n, r) : wu(t, e.child, n, r);
  }
  function U(e, t, n, r, s) {
    n = n.render;
    var h = t.ref;
    return eo(t, s), r = Fs(e, t, n, r, h, s), n = xs(), e !== null && !ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, ft(e, t, s)) : (tr && n && ns(t), t.flags |= 1, q(e, t, r, s), t.child);
  }
  function se(e, t, n, r, s) {
    if (e === null) {
      var h = n.type;
      return typeof h == "function" && !Bc(h) && h.defaultProps === void 0 && n.compare === null && n.defaultProps === void 0 ? (t.tag = 15, t.type = h, ye(e, t, h, r, s)) : (e = Pl(n.type, null, r, t, t.mode, s), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (h = e.child, !(e.lanes & s)) {
      var V = h.memoizedProps;
      if (n = n.compare, n = n !== null ? n : Iu, n(V, r) && e.ref === t.ref)
        return ft(e, t, s);
    }
    return t.flags |= 1, e = lo(h, r), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ye(e, t, n, r, s) {
    if (e !== null) {
      var h = e.memoizedProps;
      if (Iu(h, r) && e.ref === t.ref)
        if (ie = !1, t.pendingProps = r = h, (e.lanes & s) !== 0)
          e.flags & 131072 && (ie = !0);
        else
          return t.lanes = e.lanes, ft(e, t, s);
    }
    return X(e, t, n, r, s);
  }
  function le(e, t, n) {
    var r = t.pendingProps, s = r.children, h = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(t.mode & 1))
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Qn(Ai, Gr), Gr |= n;
      else {
        if (!(n & 1073741824))
          return e = h !== null ? h.baseLanes | n : n, t.lanes = t.childLanes = 1073741824, t.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, t.updateQueue = null, Qn(Ai, Gr), Gr |= e, null;
        t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = h !== null ? h.baseLanes : n, Qn(Ai, Gr), Gr |= r;
      }
    else
      h !== null ? (r = h.baseLanes | n, t.memoizedState = null) : r = n, Qn(Ai, Gr), Gr |= r;
    return q(e, t, s, n), t.child;
  }
  function Ne(e, t) {
    var n = t.ref;
    (e === null && n !== null || e !== null && e.ref !== n) && (t.flags |= 512, t.flags |= 2097152);
  }
  function X(e, t, n, r, s) {
    var h = qr(n) ? vi : br.current;
    return h = Wi(t, h), eo(t, s), n = Fs(e, t, n, r, h, s), r = xs(), e !== null && !ie ? (t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~s, ft(e, t, s)) : (tr && r && ns(t), t.flags |= 1, q(e, t, n, s), t.child);
  }
  function re(e, t, n, r, s) {
    if (qr(n)) {
      var h = !0;
      pa(t);
    } else
      h = !1;
    if (eo(t, s), t.stateNode === null)
      Gt(e, t), Cl(t, n, r), Ds(t, n, r, s), r = !0;
    else if (e === null) {
      var V = t.stateNode, ae = t.memoizedProps;
      V.props = ae;
      var fe = V.context, $e = n.contextType;
      typeof $e == "object" && $e !== null ? $e = eu($e) : ($e = qr(n) ? vi : br.current, $e = Wi(t, $e));
      var st = n.getDerivedStateFromProps, dt = typeof st == "function" || typeof V.getSnapshotBeforeUpdate == "function";
      dt || typeof V.UNSAFE_componentWillReceiveProps != "function" && typeof V.componentWillReceiveProps != "function" || (ae !== r || fe !== $e) && Fl(t, V, r, $e), $u = !1;
      var at = t.memoizedState;
      V.state = at, Ea(t, r, V, s), fe = t.memoizedState, ae !== r || at !== fe || Ur.current || $u ? (typeof st == "function" && (ms(t, n, st, r), fe = t.memoizedState), (ae = $u || vl(t, n, ae, r, at, fe, $e)) ? (dt || typeof V.UNSAFE_componentWillMount != "function" && typeof V.componentWillMount != "function" || (typeof V.componentWillMount == "function" && V.componentWillMount(), typeof V.UNSAFE_componentWillMount == "function" && V.UNSAFE_componentWillMount()), typeof V.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof V.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = r, t.memoizedState = fe), V.props = r, V.state = fe, V.context = $e, r = ae) : (typeof V.componentDidMount == "function" && (t.flags |= 4194308), r = !1);
    } else {
      V = t.stateNode, hl(e, t), ae = t.memoizedProps, $e = t.type === t.elementType ? ae : yu(t.type, ae), V.props = $e, dt = t.pendingProps, at = V.context, fe = n.contextType, typeof fe == "object" && fe !== null ? fe = eu(fe) : (fe = qr(n) ? vi : br.current, fe = Wi(t, fe));
      var jt = n.getDerivedStateFromProps;
      (st = typeof jt == "function" || typeof V.getSnapshotBeforeUpdate == "function") || typeof V.UNSAFE_componentWillReceiveProps != "function" && typeof V.componentWillReceiveProps != "function" || (ae !== dt || at !== fe) && Fl(t, V, r, fe), $u = !1, at = t.memoizedState, V.state = at, Ea(t, r, V, s);
      var Rt = t.memoizedState;
      ae !== dt || at !== Rt || Ur.current || $u ? (typeof jt == "function" && (ms(t, n, jt, r), Rt = t.memoizedState), ($e = $u || vl(t, n, $e, r, at, Rt, fe) || !1) ? (st || typeof V.UNSAFE_componentWillUpdate != "function" && typeof V.componentWillUpdate != "function" || (typeof V.componentWillUpdate == "function" && V.componentWillUpdate(r, Rt, fe), typeof V.UNSAFE_componentWillUpdate == "function" && V.UNSAFE_componentWillUpdate(r, Rt, fe)), typeof V.componentDidUpdate == "function" && (t.flags |= 4), typeof V.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof V.componentDidUpdate != "function" || ae === e.memoizedProps && at === e.memoizedState || (t.flags |= 4), typeof V.getSnapshotBeforeUpdate != "function" || ae === e.memoizedProps && at === e.memoizedState || (t.flags |= 1024), t.memoizedProps = r, t.memoizedState = Rt), V.props = r, V.state = Rt, V.context = fe, r = $e) : (typeof V.componentDidUpdate != "function" || ae === e.memoizedProps && at === e.memoizedState || (t.flags |= 4), typeof V.getSnapshotBeforeUpdate != "function" || ae === e.memoizedProps && at === e.memoizedState || (t.flags |= 1024), r = !1);
    }
    return Te(e, t, n, r, h, s);
  }
  function Te(e, t, n, r, s, h) {
    Ne(e, t);
    var V = (t.flags & 128) !== 0;
    if (!r && !V)
      return s && pl(t, n, !1), ft(e, t, h);
    r = t.stateNode, K.current = t;
    var ae = V && typeof n.getDerivedStateFromError != "function" ? null : r.render();
    return t.flags |= 1, e !== null && V ? (t.child = wu(t, e.child, null, h), t.child = wu(t, null, ae, h)) : q(e, t, ae, h), t.memoizedState = r.state, s && pl(t, n, !0), t.child;
  }
  function we(e) {
    var t = e.stateNode;
    t.pendingContext ? cl(e, t.pendingContext, t.pendingContext !== t.context) : t.context && cl(e, t.context, !1), gs(e, t.containerInfo);
  }
  function tt(e, t, n, r, s) {
    return Hi(), os(s), t.flags |= 256, q(e, t, n, r), t.child;
  }
  var oe = { dehydrated: null, treeContext: null, retryLane: 0 };
  function H(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function ce(e, t, n) {
    var r = t.pendingProps, s = er.current, h = !1, V = (t.flags & 128) !== 0, ae;
    if ((ae = V) || (ae = e !== null && e.memoizedState === null ? !1 : (s & 2) !== 0), ae ? (h = !0, t.flags &= -129) : (e === null || e.memoizedState !== null) && (s |= 1), Qn(er, s & 1), e === null)
      return is(t), e = t.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (t.mode & 1 ? e.data === "$!" ? t.lanes = 8 : t.lanes = 1073741824 : t.lanes = 1, null) : (V = r.children, e = r.fallback, h ? (r = t.mode, h = t.child, V = { mode: "hidden", children: V }, !(r & 1) && h !== null ? (h.childLanes = 0, h.pendingProps = V) : h = Il(V, r, 0, null), e = Lo(e, r, n, null), h.return = t, e.return = t, h.sibling = e, t.child = h, t.child.memoizedState = H(n), t.memoizedState = oe, e) : De(t, V));
    if (s = e.memoizedState, s !== null && (ae = s.dehydrated, ae !== null))
      return Ke(e, t, V, r, ae, s, n);
    if (h) {
      h = r.fallback, V = t.mode, s = e.child, ae = s.sibling;
      var fe = { mode: "hidden", children: r.children };
      return !(V & 1) && t.child !== s ? (r = t.child, r.childLanes = 0, r.pendingProps = fe, t.deletions = null) : (r = lo(s, fe), r.subtreeFlags = s.subtreeFlags & 14680064), ae !== null ? h = lo(ae, h) : (h = Lo(h, V, n, null), h.flags |= 2), h.return = t, r.return = t, r.sibling = h, t.child = r, r = h, h = t.child, V = e.child.memoizedState, V = V === null ? H(n) : { baseLanes: V.baseLanes | n, cachePool: null, transitions: V.transitions }, h.memoizedState = V, h.childLanes = e.childLanes & ~n, t.memoizedState = oe, r;
    }
    return h = e.child, e = h.sibling, r = lo(h, { mode: "visible", children: r.children }), !(t.mode & 1) && (r.lanes = n), r.return = t, r.sibling = null, e !== null && (n = t.deletions, n === null ? (t.deletions = [e], t.flags |= 16) : n.push(e)), t.child = r, t.memoizedState = null, r;
  }
  function De(e, t) {
    return t = Il({ mode: "visible", children: t }, e.mode, 0, null), t.return = e, e.child = t;
  }
  function Be(e, t, n, r) {
    return r !== null && os(r), wu(t, e.child, null, n), e = De(t, t.pendingProps.children), e.flags |= 2, t.memoizedState = null, e;
  }
  function Ke(e, t, n, r, s, h, V) {
    if (n)
      return t.flags & 256 ? (t.flags &= -257, r = b(Error(pe(422))), Be(e, t, V, r)) : t.memoizedState !== null ? (t.child = e.child, t.flags |= 128, null) : (h = r.fallback, s = t.mode, r = Il({ mode: "visible", children: r.children }, s, 0, null), h = Lo(h, s, V, null), h.flags |= 2, r.return = t, h.return = t, r.sibling = h, t.child = r, t.mode & 1 && wu(t, e.child, null, V), t.child.memoizedState = H(V), t.memoizedState = oe, h);
    if (!(t.mode & 1))
      return Be(e, t, V, null);
    if (s.data === "$!") {
      if (r = s.nextSibling && s.nextSibling.dataset, r)
        var ae = r.dgst;
      return r = ae, h = Error(pe(419)), r = b(h, r, void 0), Be(e, t, V, r);
    }
    if (ae = (V & e.childLanes) !== 0, ie || ae) {
      if (r = Tt, r !== null) {
        switch (V & -V) {
          case 4:
            s = 2;
            break;
          case 16:
            s = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            s = 32;
            break;
          case 536870912:
            s = 268435456;
            break;
          default:
            s = 0;
        }
        s = s & (r.suspendedLanes | V) ? 0 : s, s !== 0 && s !== h.retryLane && (h.retryLane = s, Ru(e, s), zu(r, e, s, -1));
      }
      return bc(), r = b(Error(pe(421))), Be(e, t, V, r);
    }
    return s.data === "$?" ? (t.flags |= 128, t.child = e.child, t = Sp.bind(null, e), s._reactRetry = t, null) : (e = h.treeContext, Zr = iu(s.nextSibling), Hr = t, tr = !0, hu = null, e !== null && (Yr[ou++] = Ou, Yr[ou++] = Mu, Yr[ou++] = Fi, Ou = e.id, Mu = e.overflow, Fi = t), t = De(t, r.children), t.flags |= 4096, t);
  }
  function ze(e, t, n) {
    e.lanes |= t;
    var r = e.alternate;
    r !== null && (r.lanes |= t), cs(e.return, t, n);
  }
  function Ct(e, t, n, r, s) {
    var h = e.memoizedState;
    h === null ? e.memoizedState = { isBackwards: t, rendering: null, renderingStartTime: 0, last: r, tail: n, tailMode: s } : (h.isBackwards = t, h.rendering = null, h.renderingStartTime = 0, h.last = r, h.tail = n, h.tailMode = s);
  }
  function en(e, t, n) {
    var r = t.pendingProps, s = r.revealOrder, h = r.tail;
    if (q(e, t, r.children, n), r = er.current, r & 2)
      r = r & 1 | 2, t.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = t.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && ze(e, n, t);
            else if (e.tag === 19)
              ze(e, n, t);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === t)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === t)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (Qn(er, r), !(t.mode & 1))
      t.memoizedState = null;
    else
      switch (s) {
        case "forwards":
          for (n = t.child, s = null; n !== null; )
            e = n.alternate, e !== null && Fa(e) === null && (s = n), n = n.sibling;
          n = s, n === null ? (s = t.child, t.child = null) : (s = n.sibling, n.sibling = null), Ct(t, !1, s, n, h);
          break;
        case "backwards":
          for (n = null, s = t.child, t.child = null; s !== null; ) {
            if (e = s.alternate, e !== null && Fa(e) === null) {
              t.child = s;
              break;
            }
            e = s.sibling, s.sibling = n, n = s, s = e;
          }
          Ct(t, !0, n, null, h);
          break;
        case "together":
          Ct(t, !1, null, null, void 0);
          break;
        default:
          t.memoizedState = null;
      }
    return t.child;
  }
  function Gt(e, t) {
    !(t.mode & 1) && e !== null && (e.alternate = null, t.alternate = null, t.flags |= 2);
  }
  function ft(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), oi |= t.lanes, !(n & t.childLanes))
      return null;
    if (e !== null && t.child !== e.child)
      throw Error(pe(153));
    if (t.child !== null) {
      for (e = t.child, n = lo(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = lo(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function _t(e, t, n) {
    switch (t.tag) {
      case 3:
        we(t), Hi();
        break;
      case 5:
        Sl(t);
        break;
      case 1:
        qr(t.type) && pa(t);
        break;
      case 4:
        gs(t, t.stateNode.containerInfo);
        break;
      case 10:
        var r = t.type._context, s = t.memoizedProps.value;
        Qn(Da, r._currentValue), r._currentValue = s;
        break;
      case 13:
        if (r = t.memoizedState, r !== null)
          return r.dehydrated !== null ? (Qn(er, er.current & 1), t.flags |= 128, null) : n & t.child.childLanes ? ce(e, t, n) : (Qn(er, er.current & 1), e = ft(e, t, n), e !== null ? e.sibling : null);
        Qn(er, er.current & 1);
        break;
      case 19:
        if (r = (n & t.childLanes) !== 0, e.flags & 128) {
          if (r)
            return en(e, t, n);
          t.flags |= 128;
        }
        if (s = t.memoizedState, s !== null && (s.rendering = null, s.tail = null, s.lastEffect = null), Qn(er, er.current), r)
          break;
        return null;
      case 22:
      case 23:
        return t.lanes = 0, le(e, t, n);
    }
    return ft(e, t, n);
  }
  var Fe, Y, ke, ue;
  Fe = function(e, t) {
    for (var n = t.child; n !== null; ) {
      if (n.tag === 5 || n.tag === 6)
        e.appendChild(n.stateNode);
      else if (n.tag !== 4 && n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === t)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === t)
          return;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
  }, Y = function() {
  }, ke = function(e, t, n, r) {
    var s = e.memoizedProps;
    if (s !== r) {
      e = t.stateNode, ui(ku.current);
      var h = null;
      switch (n) {
        case "input":
          s = Ot(e, s), r = Ot(e, r), h = [];
          break;
        case "select":
          s = de({}, s, { value: void 0 }), r = de({}, r, { value: void 0 }), h = [];
          break;
        case "textarea":
          s = tn(e, s), r = tn(e, r), h = [];
          break;
        default:
          typeof s.onClick != "function" && typeof r.onClick == "function" && (e.onclick = So);
      }
      pn(n, r);
      var V;
      n = null;
      for ($e in s)
        if (!r.hasOwnProperty($e) && s.hasOwnProperty($e) && s[$e] != null)
          if ($e === "style") {
            var ae = s[$e];
            for (V in ae)
              ae.hasOwnProperty(V) && (n || (n = {}), n[V] = "");
          } else
            $e !== "dangerouslySetInnerHTML" && $e !== "children" && $e !== "suppressContentEditableWarning" && $e !== "suppressHydrationWarning" && $e !== "autoFocus" && (Cn.hasOwnProperty($e) ? h || (h = []) : (h = h || []).push($e, null));
      for ($e in r) {
        var fe = r[$e];
        if (ae = s != null ? s[$e] : void 0, r.hasOwnProperty($e) && fe !== ae && (fe != null || ae != null))
          if ($e === "style")
            if (ae) {
              for (V in ae)
                !ae.hasOwnProperty(V) || fe && fe.hasOwnProperty(V) || (n || (n = {}), n[V] = "");
              for (V in fe)
                fe.hasOwnProperty(V) && ae[V] !== fe[V] && (n || (n = {}), n[V] = fe[V]);
            } else
              n || (h || (h = []), h.push(
                $e,
                n
              )), n = fe;
          else
            $e === "dangerouslySetInnerHTML" ? (fe = fe ? fe.__html : void 0, ae = ae ? ae.__html : void 0, fe != null && ae !== fe && (h = h || []).push($e, fe)) : $e === "children" ? typeof fe != "string" && typeof fe != "number" || (h = h || []).push($e, "" + fe) : $e !== "suppressContentEditableWarning" && $e !== "suppressHydrationWarning" && (Cn.hasOwnProperty($e) ? (fe != null && $e === "onScroll" && Xn("scroll", e), h || ae === fe || (h = [])) : (h = h || []).push($e, fe));
      }
      n && (h = h || []).push("style", n);
      var $e = h;
      (t.updateQueue = $e) && (t.flags |= 4);
    }
  }, ue = function(e, t, n, r) {
    n !== r && (t.flags |= 4);
  };
  function xe(e, t) {
    if (!tr)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var r = null; n !== null; )
            n.alternate !== null && (r = n), n = n.sibling;
          r === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function nt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, r = 0;
    if (t)
      for (var s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, r |= s.subtreeFlags & 14680064, r |= s.flags & 14680064, s.return = e, s = s.sibling;
    else
      for (s = e.child; s !== null; )
        n |= s.lanes | s.childLanes, r |= s.subtreeFlags, r |= s.flags, s.return = e, s = s.sibling;
    return e.subtreeFlags |= r, e.childLanes = n, t;
  }
  function Ze(e, t, n) {
    var r = t.pendingProps;
    switch (rs(t), t.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return nt(t), null;
      case 1:
        return qr(t.type) && ca(), nt(t), null;
      case 3:
        return r = t.stateNode, no(), Zn(Ur), Zn(br), Es(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (ma(t) ? t.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(t.flags & 256) || (t.flags |= 1024, hu !== null && (wc(hu), hu = null))), Y(e, t), nt(t), null;
      case 5:
        hs(t);
        var s = ui(ko.current);
        if (n = t.type, e !== null && t.stateNode != null)
          ke(e, t, n, r, s), e.ref !== t.ref && (t.flags |= 512, t.flags |= 2097152);
        else {
          if (!r) {
            if (t.stateNode === null)
              throw Error(pe(166));
            return nt(t), null;
          }
          if (e = ui(ku.current), ma(t)) {
            r = t.stateNode, n = t.type;
            var h = t.memoizedProps;
            switch (r[Su] = t, r[Ji] = h, e = (t.mode & 1) !== 0, n) {
              case "dialog":
                Xn("cancel", r), Xn("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                Xn("load", r);
                break;
              case "video":
              case "audio":
                for (s = 0; s < zi.length; s++)
                  Xn(zi[s], r);
                break;
              case "source":
                Xn("error", r);
                break;
              case "img":
              case "image":
              case "link":
                Xn(
                  "error",
                  r
                ), Xn("load", r);
                break;
              case "details":
                Xn("toggle", r);
                break;
              case "input":
                Wt(r, h), Xn("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!h.multiple }, Xn("invalid", r);
                break;
              case "textarea":
                et(r, h), Xn("invalid", r);
            }
            pn(n, h), s = null;
            for (var V in h)
              if (h.hasOwnProperty(V)) {
                var ae = h[V];
                V === "children" ? typeof ae == "string" ? r.textContent !== ae && (h.suppressHydrationWarning !== !0 && ra(r.textContent, ae, e), s = ["children", ae]) : typeof ae == "number" && r.textContent !== "" + ae && (h.suppressHydrationWarning !== !0 && ra(
                  r.textContent,
                  ae,
                  e
                ), s = ["children", "" + ae]) : Cn.hasOwnProperty(V) && ae != null && V === "onScroll" && Xn("scroll", r);
              }
            switch (n) {
              case "input":
                Ye(r), rn(r, h, !0);
                break;
              case "textarea":
                Ye(r), Me(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof h.onClick == "function" && (r.onclick = So);
            }
            r = s, t.updateQueue = r, r !== null && (t.flags |= 4);
          } else {
            V = s.nodeType === 9 ? s : s.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Dt(n)), e === "http://www.w3.org/1999/xhtml" ? n === "script" ? (e = V.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = V.createElement(n, { is: r.is }) : (e = V.createElement(n), n === "select" && (V = e, r.multiple ? V.multiple = !0 : r.size && (V.size = r.size))) : e = V.createElementNS(e, n), e[Su] = t, e[Ji] = r, Fe(e, t, !1, !1), t.stateNode = e;
            e: {
              switch (V = ar(n, r), n) {
                case "dialog":
                  Xn("cancel", e), Xn("close", e), s = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Xn("load", e), s = r;
                  break;
                case "video":
                case "audio":
                  for (s = 0; s < zi.length; s++)
                    Xn(zi[s], e);
                  s = r;
                  break;
                case "source":
                  Xn("error", e), s = r;
                  break;
                case "img":
                case "image":
                case "link":
                  Xn(
                    "error",
                    e
                  ), Xn("load", e), s = r;
                  break;
                case "details":
                  Xn("toggle", e), s = r;
                  break;
                case "input":
                  Wt(e, r), s = Ot(e, r), Xn("invalid", e);
                  break;
                case "option":
                  s = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, s = de({}, r, { value: void 0 }), Xn("invalid", e);
                  break;
                case "textarea":
                  et(e, r), s = tn(e, r), Xn("invalid", e);
                  break;
                default:
                  s = r;
              }
              pn(n, s), ae = s;
              for (h in ae)
                if (ae.hasOwnProperty(h)) {
                  var fe = ae[h];
                  h === "style" ? lt(e, fe) : h === "dangerouslySetInnerHTML" ? (fe = fe ? fe.__html : void 0, fe != null && Zt(e, fe)) : h === "children" ? typeof fe == "string" ? (n !== "textarea" || fe !== "") && yt(e, fe) : typeof fe == "number" && yt(e, "" + fe) : h !== "suppressContentEditableWarning" && h !== "suppressHydrationWarning" && h !== "autoFocus" && (Cn.hasOwnProperty(h) ? fe != null && h === "onScroll" && Xn("scroll", e) : fe != null && cr(e, h, fe, V));
                }
              switch (n) {
                case "input":
                  Ye(e), rn(e, r, !1);
                  break;
                case "textarea":
                  Ye(e), Me(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + Le(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, h = r.value, h != null ? Ft(e, !!r.multiple, h, !1) : r.defaultValue != null && Ft(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof s.onClick == "function" && (e.onclick = So);
              }
              switch (n) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  r = !!r.autoFocus;
                  break e;
                case "img":
                  r = !0;
                  break e;
                default:
                  r = !1;
              }
            }
            r && (t.flags |= 4);
          }
          t.ref !== null && (t.flags |= 512, t.flags |= 2097152);
        }
        return nt(t), null;
      case 6:
        if (e && t.stateNode != null)
          ue(e, t, e.memoizedProps, r);
        else {
          if (typeof r != "string" && t.stateNode === null)
            throw Error(pe(166));
          if (n = ui(ko.current), ui(ku.current), ma(t)) {
            if (r = t.stateNode, n = t.memoizedProps, r[Su] = t, (h = r.nodeValue !== n) && (e = Hr, e !== null))
              switch (e.tag) {
                case 3:
                  ra(r.nodeValue, n, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && ra(r.nodeValue, n, (e.mode & 1) !== 0);
              }
            h && (t.flags |= 4);
          } else
            r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r), r[Su] = t, t.stateNode = r;
        }
        return nt(t), null;
      case 13:
        if (Zn(er), r = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (tr && Zr !== null && t.mode & 1 && !(t.flags & 128))
            gl(), Hi(), t.flags |= 98560, h = !1;
          else if (h = ma(t), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!h)
                throw Error(pe(318));
              if (h = t.memoizedState, h = h !== null ? h.dehydrated : null, !h)
                throw Error(pe(317));
              h[Su] = t;
            } else
              Hi(), !(t.flags & 128) && (t.memoizedState = null), t.flags |= 4;
            nt(t), h = !1;
          } else
            hu !== null && (wc(hu), hu = null), h = !0;
          if (!h)
            return t.flags & 65536 ? t : null;
        }
        return t.flags & 128 ? (t.lanes = n, t) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (t.child.flags |= 8192, t.mode & 1 && (e === null || er.current & 1 ? Er === 0 && (Er = 3) : bc())), t.updateQueue !== null && (t.flags |= 4), nt(t), null);
      case 4:
        return no(), Y(e, t), e === null && Ao(t.stateNode.containerInfo), nt(t), null;
      case 10:
        return ls(t.type._context), nt(t), null;
      case 17:
        return qr(t.type) && ca(), nt(t), null;
      case 19:
        if (Zn(er), h = t.memoizedState, h === null)
          return nt(t), null;
        if (r = (t.flags & 128) !== 0, V = h.rendering, V === null)
          if (r)
            xe(h, !1);
          else {
            if (Er !== 0 || e !== null && e.flags & 128)
              for (e = t.child; e !== null; ) {
                if (V = Fa(e), V !== null) {
                  for (t.flags |= 128, xe(h, !1), r = V.updateQueue, r !== null && (t.updateQueue = r, t.flags |= 4), t.subtreeFlags = 0, r = n, n = t.child; n !== null; )
                    h = n, e = r, h.flags &= 14680066, V = h.alternate, V === null ? (h.childLanes = 0, h.lanes = e, h.child = null, h.subtreeFlags = 0, h.memoizedProps = null, h.memoizedState = null, h.updateQueue = null, h.dependencies = null, h.stateNode = null) : (h.childLanes = V.childLanes, h.lanes = V.lanes, h.child = V.child, h.subtreeFlags = 0, h.deletions = null, h.memoizedProps = V.memoizedProps, h.memoizedState = V.memoizedState, h.updateQueue = V.updateQueue, h.type = V.type, e = V.dependencies, h.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), n = n.sibling;
                  return Qn(er, er.current & 1 | 2), t.child;
                }
                e = e.sibling;
              }
            h.tail !== null && vt() > Ta && (t.flags |= 128, r = !0, xe(h, !1), t.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = Fa(V), e !== null) {
              if (t.flags |= 128, r = !0, n = e.updateQueue, n !== null && (t.updateQueue = n, t.flags |= 4), xe(h, !0), h.tail === null && h.tailMode === "hidden" && !V.alternate && !tr)
                return nt(t), null;
            } else
              2 * vt() - h.renderingStartTime > Ta && n !== 1073741824 && (t.flags |= 128, r = !0, xe(h, !1), t.lanes = 4194304);
          h.isBackwards ? (V.sibling = t.child, t.child = V) : (n = h.last, n !== null ? n.sibling = V : t.child = V, h.last = V);
        }
        return h.tail !== null ? (t = h.tail, h.rendering = t, h.tail = t.sibling, h.renderingStartTime = vt(), t.sibling = null, n = er.current, Qn(er, r ? n & 1 | 2 : n & 1), t) : (nt(t), null);
      case 22:
      case 23:
        return Nc(), r = t.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (t.flags |= 8192), r && t.mode & 1 ? Gr & 1073741824 && (nt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : nt(t), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(pe(156, t.tag));
  }
  function _e(e, t) {
    switch (rs(t), t.tag) {
      case 1:
        return qr(t.type) && ca(), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return no(), Zn(Ur), Zn(br), Es(), e = t.flags, e & 65536 && !(e & 128) ? (t.flags = e & -65537 | 128, t) : null;
      case 5:
        return hs(t), null;
      case 13:
        if (Zn(er), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(pe(340));
          Hi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Zn(er), null;
      case 4:
        return no(), null;
      case 10:
        return ls(t.type._context), null;
      case 22:
      case 23:
        return Nc(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var N = !1, Z = !1, Ee = typeof WeakSet == "function" ? WeakSet : Set, he = null;
  function qe(e, t) {
    var n = e.ref;
    if (n !== null)
      if (typeof n == "function")
        try {
          n(null);
        } catch (r) {
          fr(e, t, r);
        }
      else
        n.current = null;
  }
  function gt(e, t, n) {
    try {
      n();
    } catch (r) {
      fr(e, t, r);
    }
  }
  var Ue = !1;
  function qn(e, t) {
    if (Ha = Uo, e = Hs(), Ja(e)) {
      if ("selectionStart" in e)
        var n = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var r = n.getSelection && n.getSelection();
          if (r && r.rangeCount !== 0) {
            n = r.anchorNode;
            var s = r.anchorOffset, h = r.focusNode;
            r = r.focusOffset;
            try {
              n.nodeType, h.nodeType;
            } catch {
              n = null;
              break e;
            }
            var V = 0, ae = -1, fe = -1, $e = 0, st = 0, dt = e, at = null;
            t:
              for (; ; ) {
                for (var jt; dt !== n || s !== 0 && dt.nodeType !== 3 || (ae = V + s), dt !== h || r !== 0 && dt.nodeType !== 3 || (fe = V + r), dt.nodeType === 3 && (V += dt.nodeValue.length), (jt = dt.firstChild) !== null; )
                  at = dt, dt = jt;
                for (; ; ) {
                  if (dt === e)
                    break t;
                  if (at === n && ++$e === s && (ae = V), at === h && ++st === r && (fe = V), (jt = dt.nextSibling) !== null)
                    break;
                  dt = at, at = dt.parentNode;
                }
                dt = jt;
              }
            n = ae === -1 || fe === -1 ? null : { start: ae, end: fe };
          } else
            n = null;
        }
      n = n || { start: 0, end: 0 };
    } else
      n = null;
    for (ua = { focusedElem: e, selectionRange: n }, Uo = !1, he = t; he !== null; )
      if (t = he, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, he = e;
      else
        for (; he !== null; ) {
          t = he;
          try {
            var Rt = t.alternate;
            if (t.flags & 1024)
              switch (t.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Rt !== null) {
                    var Vt = Rt.memoizedProps, vr = Rt.memoizedState, Ie = t.stateNode, ve = Ie.getSnapshotBeforeUpdate(t.elementType === t.type ? Vt : yu(t.type, Vt), vr);
                    Ie.__reactInternalSnapshotBeforeUpdate = ve;
                  }
                  break;
                case 3:
                  var Oe = t.stateNode.containerInfo;
                  Oe.nodeType === 1 ? Oe.textContent = "" : Oe.nodeType === 9 && Oe.documentElement && Oe.removeChild(Oe.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(pe(163));
              }
          } catch (ht) {
            fr(t, t.return, ht);
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, he = e;
            break;
          }
          he = t.return;
        }
    return Rt = Ue, Ue = !1, Rt;
  }
  function ct(e, t, n) {
    var r = t.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var s = r = r.next;
      do {
        if ((s.tag & e) === e) {
          var h = s.destroy;
          s.destroy = void 0, h !== void 0 && gt(t, n, h);
        }
        s = s.next;
      } while (s !== r);
    }
  }
  function Ln(e, t) {
    if (t = t.updateQueue, t = t !== null ? t.lastEffect : null, t !== null) {
      var n = t = t.next;
      do {
        if ((n.tag & e) === e) {
          var r = n.create;
          n.destroy = r();
        }
        n = n.next;
      } while (n !== t);
    }
  }
  function pt(e) {
    var t = e.ref;
    if (t !== null) {
      var n = e.stateNode;
      switch (e.tag) {
        case 5:
          e = n;
          break;
        default:
          e = n;
      }
      typeof t == "function" ? t(e) : t.current = e;
    }
  }
  function Mt(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Mt(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && (delete t[Su], delete t[Ji], delete t[qi], delete t[aa], delete t[sa])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Qt(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function bn(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Qt(e.return))
            return null;
          e = e.return;
        }
        for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
          if (e.flags & 2 || e.child === null || e.tag === 4)
            continue e;
          e.child.return = e, e = e.child;
        }
        if (!(e.flags & 2))
          return e.stateNode;
      }
  }
  function mt(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.nodeType === 8 ? n.parentNode.insertBefore(e, t) : n.insertBefore(e, t) : (n.nodeType === 8 ? (t = n.parentNode, t.insertBefore(e, n)) : (t = n, t.appendChild(e)), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = So));
    else if (r !== 4 && (e = e.child, e !== null))
      for (mt(e, t, n), e = e.sibling; e !== null; )
        mt(e, t, n), e = e.sibling;
  }
  function Jt(e, t, n) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (Jt(e, t, n), e = e.sibling; e !== null; )
        Jt(e, t, n), e = e.sibling;
  }
  var St = null, ge = !1;
  function pr(e, t, n) {
    for (n = n.child; n !== null; )
      hr(e, t, n), n = n.sibling;
  }
  function hr(e, t, n) {
    if (ne && typeof ne.onCommitFiberUnmount == "function")
      try {
        ne.onCommitFiberUnmount(Jn, n);
      } catch {
      }
    switch (n.tag) {
      case 5:
        Z || qe(n, t);
      case 6:
        var r = St, s = ge;
        St = null, pr(e, t, n), St = r, ge = s, St !== null && (ge ? (e = St, n = n.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n)) : St.removeChild(n.stateNode));
        break;
      case 18:
        St !== null && (ge ? (e = St, n = n.stateNode, e.nodeType === 8 ? zr(e.parentNode, n) : e.nodeType === 1 && zr(e, n), ji(e)) : zr(St, n.stateNode));
        break;
      case 4:
        r = St, s = ge, St = n.stateNode.containerInfo, ge = !0, pr(e, t, n), St = r, ge = s;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Z && (r = n.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          s = r = r.next;
          do {
            var h = s, V = h.destroy;
            h = h.tag, V !== void 0 && (h & 2 || h & 4) && gt(n, t, V), s = s.next;
          } while (s !== r);
        }
        pr(e, t, n);
        break;
      case 1:
        if (!Z && (qe(n, t), r = n.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = n.memoizedProps, r.state = n.memoizedState, r.componentWillUnmount();
          } catch (ae) {
            fr(n, t, ae);
          }
        pr(e, t, n);
        break;
      case 21:
        pr(e, t, n);
        break;
      case 22:
        n.mode & 1 ? (Z = (r = Z) || n.memoizedState !== null, pr(e, t, n), Z = r) : pr(e, t, n);
        break;
      default:
        pr(e, t, n);
    }
  }
  function ln(e) {
    var t = e.updateQueue;
    if (t !== null) {
      e.updateQueue = null;
      var n = e.stateNode;
      n === null && (n = e.stateNode = new Ee()), t.forEach(function(r) {
        var s = Tp.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(s, s));
      });
    }
  }
  function Yt(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var r = 0; r < n.length; r++) {
        var s = n[r];
        try {
          var h = e, V = t, ae = V;
          e:
            for (; ae !== null; ) {
              switch (ae.tag) {
                case 5:
                  St = ae.stateNode, ge = !1;
                  break e;
                case 3:
                  St = ae.stateNode.containerInfo, ge = !0;
                  break e;
                case 4:
                  St = ae.stateNode.containerInfo, ge = !0;
                  break e;
              }
              ae = ae.return;
            }
          if (St === null)
            throw Error(pe(160));
          hr(h, V, s), St = null, ge = !1;
          var fe = s.alternate;
          fe !== null && (fe.return = null), s.return = null;
        } catch ($e) {
          fr(s, t, $e);
        }
      }
    if (t.subtreeFlags & 12854)
      for (t = t.child; t !== null; )
        jn(t, e), t = t.sibling;
  }
  function jn(e, t) {
    var n = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Yt(t, e), or(e), r & 4) {
          try {
            ct(3, e, e.return), Ln(3, e);
          } catch (Vt) {
            fr(e, e.return, Vt);
          }
          try {
            ct(5, e, e.return);
          } catch (Vt) {
            fr(e, e.return, Vt);
          }
        }
        break;
      case 1:
        Yt(t, e), or(e), r & 512 && n !== null && qe(n, n.return);
        break;
      case 5:
        if (Yt(t, e), or(e), r & 512 && n !== null && qe(n, n.return), e.flags & 32) {
          var s = e.stateNode;
          try {
            yt(s, "");
          } catch (Vt) {
            fr(e, e.return, Vt);
          }
        }
        if (r & 4 && (s = e.stateNode, s != null)) {
          var h = e.memoizedProps, V = n !== null ? n.memoizedProps : h, ae = e.type, fe = e.updateQueue;
          if (e.updateQueue = null, fe !== null)
            try {
              ae === "input" && h.type === "radio" && h.name != null && gn(s, h), ar(ae, V);
              var $e = ar(ae, h);
              for (V = 0; V < fe.length; V += 2) {
                var st = fe[V], dt = fe[V + 1];
                st === "style" ? lt(s, dt) : st === "dangerouslySetInnerHTML" ? Zt(s, dt) : st === "children" ? yt(s, dt) : cr(s, st, dt, $e);
              }
              switch (ae) {
                case "input":
                  An(s, h);
                  break;
                case "textarea":
                  be(s, h);
                  break;
                case "select":
                  var at = s._wrapperState.wasMultiple;
                  s._wrapperState.wasMultiple = !!h.multiple;
                  var jt = h.value;
                  jt != null ? Ft(s, !!h.multiple, jt, !1) : at !== !!h.multiple && (h.defaultValue != null ? Ft(
                    s,
                    !!h.multiple,
                    h.defaultValue,
                    !0
                  ) : Ft(s, !!h.multiple, h.multiple ? [] : "", !1));
              }
              s[Ji] = h;
            } catch (Vt) {
              fr(e, e.return, Vt);
            }
        }
        break;
      case 6:
        if (Yt(t, e), or(e), r & 4) {
          if (e.stateNode === null)
            throw Error(pe(162));
          s = e.stateNode, h = e.memoizedProps;
          try {
            s.nodeValue = h;
          } catch (Vt) {
            fr(e, e.return, Vt);
          }
        }
        break;
      case 3:
        if (Yt(t, e), or(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ji(t.containerInfo);
          } catch (Vt) {
            fr(e, e.return, Vt);
          }
        break;
      case 4:
        Yt(t, e), or(e);
        break;
      case 13:
        Yt(t, e), or(e), s = e.child, s.flags & 8192 && (h = s.memoizedState !== null, s.stateNode.isHidden = h, !h || s.alternate !== null && s.alternate.memoizedState !== null || (xc = vt())), r & 4 && ln(e);
        break;
      case 22:
        if (st = n !== null && n.memoizedState !== null, e.mode & 1 ? (Z = ($e = Z) || st, Yt(t, e), Z = $e) : Yt(t, e), or(e), r & 8192) {
          if ($e = e.memoizedState !== null, (e.stateNode.isHidden = $e) && !st && e.mode & 1)
            for (he = e, st = e.child; st !== null; ) {
              for (dt = he = st; he !== null; ) {
                switch (at = he, jt = at.child, at.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ct(4, at, at.return);
                    break;
                  case 1:
                    qe(at, at.return);
                    var Rt = at.stateNode;
                    if (typeof Rt.componentWillUnmount == "function") {
                      r = at, n = at.return;
                      try {
                        t = r, Rt.props = t.memoizedProps, Rt.state = t.memoizedState, Rt.componentWillUnmount();
                      } catch (Vt) {
                        fr(r, n, Vt);
                      }
                    }
                    break;
                  case 5:
                    qe(at, at.return);
                    break;
                  case 22:
                    if (at.memoizedState !== null) {
                      dn(dt);
                      continue;
                    }
                }
                jt !== null ? (jt.return = at, he = jt) : dn(dt);
              }
              st = st.sibling;
            }
          e:
            for (st = null, dt = e; ; ) {
              if (dt.tag === 5) {
                if (st === null) {
                  st = dt;
                  try {
                    s = dt.stateNode, $e ? (h = s.style, typeof h.setProperty == "function" ? h.setProperty("display", "none", "important") : h.display = "none") : (ae = dt.stateNode, fe = dt.memoizedProps.style, V = fe != null && fe.hasOwnProperty("display") ? fe.display : null, ae.style.display = Et("display", V));
                  } catch (Vt) {
                    fr(e, e.return, Vt);
                  }
                }
              } else if (dt.tag === 6) {
                if (st === null)
                  try {
                    dt.stateNode.nodeValue = $e ? "" : dt.memoizedProps;
                  } catch (Vt) {
                    fr(e, e.return, Vt);
                  }
              } else if ((dt.tag !== 22 && dt.tag !== 23 || dt.memoizedState === null || dt === e) && dt.child !== null) {
                dt.child.return = dt, dt = dt.child;
                continue;
              }
              if (dt === e)
                break e;
              for (; dt.sibling === null; ) {
                if (dt.return === null || dt.return === e)
                  break e;
                st === dt && (st = null), dt = dt.return;
              }
              st === dt && (st = null), dt.sibling.return = dt.return, dt = dt.sibling;
            }
        }
        break;
      case 19:
        Yt(t, e), or(e), r & 4 && ln(e);
        break;
      case 21:
        break;
      default:
        Yt(
          t,
          e
        ), or(e);
    }
  }
  function or(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        e: {
          for (var n = e.return; n !== null; ) {
            if (Qt(n)) {
              var r = n;
              break e;
            }
            n = n.return;
          }
          throw Error(pe(160));
        }
        switch (r.tag) {
          case 5:
            var s = r.stateNode;
            r.flags & 32 && (yt(s, ""), r.flags &= -33);
            var h = bn(e);
            Jt(e, h, s);
            break;
          case 3:
          case 4:
            var V = r.stateNode.containerInfo, ae = bn(e);
            mt(e, ae, V);
            break;
          default:
            throw Error(pe(161));
        }
      } catch (fe) {
        fr(e, e.return, fe);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function z(e, t, n) {
    he = e, Pe(e);
  }
  function Pe(e, t, n) {
    for (var r = (e.mode & 1) !== 0; he !== null; ) {
      var s = he, h = s.child;
      if (s.tag === 22 && r) {
        var V = s.memoizedState !== null || N;
        if (!V) {
          var ae = s.alternate, fe = ae !== null && ae.memoizedState !== null || Z;
          ae = N;
          var $e = Z;
          if (N = V, (Z = fe) && !$e)
            for (he = s; he !== null; )
              V = he, fe = V.child, V.tag === 22 && V.memoizedState !== null ? fn(s) : fe !== null ? (fe.return = V, he = fe) : fn(s);
          for (; h !== null; )
            he = h, Pe(h), h = h.sibling;
          he = s, N = ae, Z = $e;
        }
        Nt(e);
      } else
        s.subtreeFlags & 8772 && h !== null ? (h.return = s, he = h) : Nt(e);
    }
  }
  function Nt(e) {
    for (; he !== null; ) {
      var t = he;
      if (t.flags & 8772) {
        var n = t.alternate;
        try {
          if (t.flags & 8772)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                Z || Ln(5, t);
                break;
              case 1:
                var r = t.stateNode;
                if (t.flags & 4 && !Z)
                  if (n === null)
                    r.componentDidMount();
                  else {
                    var s = t.elementType === t.type ? n.memoizedProps : yu(t.type, n.memoizedProps);
                    r.componentDidUpdate(s, n.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var h = t.updateQueue;
                h !== null && yl(t, h, r);
                break;
              case 3:
                var V = t.updateQueue;
                if (V !== null) {
                  if (n = null, t.child !== null)
                    switch (t.child.tag) {
                      case 5:
                        n = t.child.stateNode;
                        break;
                      case 1:
                        n = t.child.stateNode;
                    }
                  yl(t, V, n);
                }
                break;
              case 5:
                var ae = t.stateNode;
                if (n === null && t.flags & 4) {
                  n = ae;
                  var fe = t.memoizedProps;
                  switch (t.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      fe.autoFocus && n.focus();
                      break;
                    case "img":
                      fe.src && (n.src = fe.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (t.memoizedState === null) {
                  var $e = t.alternate;
                  if ($e !== null) {
                    var st = $e.memoizedState;
                    if (st !== null) {
                      var dt = st.dehydrated;
                      dt !== null && ji(dt);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(pe(163));
            }
          Z || t.flags & 512 && pt(t);
        } catch (at) {
          fr(t, t.return, at);
        }
      }
      if (t === e) {
        he = null;
        break;
      }
      if (n = t.sibling, n !== null) {
        n.return = t.return, he = n;
        break;
      }
      he = t.return;
    }
  }
  function dn(e) {
    for (; he !== null; ) {
      var t = he;
      if (t === e) {
        he = null;
        break;
      }
      var n = t.sibling;
      if (n !== null) {
        n.return = t.return, he = n;
        break;
      }
      he = t.return;
    }
  }
  function fn(e) {
    for (; he !== null; ) {
      var t = he;
      try {
        switch (t.tag) {
          case 0:
          case 11:
          case 15:
            var n = t.return;
            try {
              Ln(4, t);
            } catch (fe) {
              fr(t, n, fe);
            }
            break;
          case 1:
            var r = t.stateNode;
            if (typeof r.componentDidMount == "function") {
              var s = t.return;
              try {
                r.componentDidMount();
              } catch (fe) {
                fr(t, s, fe);
              }
            }
            var h = t.return;
            try {
              pt(t);
            } catch (fe) {
              fr(t, h, fe);
            }
            break;
          case 5:
            var V = t.return;
            try {
              pt(t);
            } catch (fe) {
              fr(t, V, fe);
            }
        }
      } catch (fe) {
        fr(t, t.return, fe);
      }
      if (t === e) {
        he = null;
        break;
      }
      var ae = t.sibling;
      if (ae !== null) {
        ae.return = t.return, he = ae;
        break;
      }
      he = t.return;
    }
  }
  var Wr = Math.ceil, Kn = Hn.ReactCurrentDispatcher, yr = Hn.ReactCurrentOwner, nr = Hn.ReactCurrentBatchConfig, nn = 0, Tt = null, It = null, dr = 0, Gr = 0, Ai = Tu(0), Er = 0, ro = null, oi = 0, uo = 0, _o = 0, Ts = null, su = null, xc = 0, Ta = 1 / 0, Si = null, wl = !1, Ac = null, io = null, kl = !1, oo = null, Nl = 0, ws = 0, Sc = null, bl = -1, Bl = 0;
  function tu() {
    return nn & 6 ? vt() : bl !== -1 ? bl : bl = vt();
  }
  function ao(e) {
    return e.mode & 1 ? nn & 2 && dr !== 0 ? dr & -dr : Cc.transition !== null ? (Bl === 0 && (Bl = Kr()), Bl) : (e = $n, e !== 0 || (e = window.event, e = e === void 0 ? 16 : Jo(e.type)), e) : 1;
  }
  function zu(e, t, n, r) {
    if (50 < ws)
      throw ws = 0, Sc = null, Error(pe(185));
    fo(e, n, r), (!(nn & 2) || e !== Tt) && (e === Tt && (!(nn & 2) && (uo |= n), Er === 4 && so(e, dr)), lu(e, r), n === 1 && nn === 0 && !(t.mode & 1) && (Ta = vt() + 500, da && ti()));
  }
  function lu(e, t) {
    var n = e.callbackNode;
    $o(e, t);
    var r = pi(e, e === Tt ? dr : 0);
    if (r === 0)
      n !== null && ut(n), e.callbackNode = null, e.callbackPriority = 0;
    else if (t = r & -r, e.callbackPriority !== t) {
      if (n != null && ut(n), t === 1)
        e.tag === 0 ? vc(Gc.bind(null, e)) : ts(Gc.bind(null, e)), yc(function() {
          !(nn & 6) && ti();
        }), n = null;
      else {
        switch (_i(r)) {
          case 1:
            n = ee;
            break;
          case 4:
            n = zt;
            break;
          case 16:
            n = un;
            break;
          case 536870912:
            n = vn;
            break;
          default:
            n = un;
        }
        n = Zc(n, Uc.bind(null, e));
      }
      e.callbackPriority = t, e.callbackNode = n;
    }
  }
  function Uc(e, t) {
    if (bl = -1, Bl = 0, nn & 6)
      throw Error(pe(327));
    var n = e.callbackNode;
    if (wa() && e.callbackNode !== n)
      return null;
    var r = pi(e, e === Tt ? dr : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || t)
      t = _l(e, r);
    else {
      t = r;
      var s = nn;
      nn |= 2;
      var h = qc();
      (Tt !== e || dr !== t) && (Si = null, Ta = vt() + 500, Io(e, t));
      do
        try {
          Fp();
          break;
        } catch (ae) {
          Jc(e, ae);
        }
      while (1);
      ss(), Kn.current = h, nn = s, It !== null ? t = 0 : (Tt = null, dr = 0, t = Er);
    }
    if (t !== 0) {
      if (t === 2 && (s = Bi(e), s !== 0 && (r = s, t = Tc(e, s))), t === 1)
        throw n = ro, Io(e, 0), so(e, r), lu(e, vt()), n;
      if (t === 6)
        so(e, r);
      else {
        if (s = e.current.alternate, !(r & 30) && !vp(s) && (t = _l(e, r), t === 2 && (h = Bi(e), h !== 0 && (r = h, t = Tc(e, h))), t === 1))
          throw n = ro, Io(e, 0), so(e, r), lu(e, vt()), n;
        switch (e.finishedWork = s, e.finishedLanes = r, t) {
          case 0:
          case 1:
            throw Error(pe(345));
          case 2:
            jo(e, su, Si);
            break;
          case 3:
            if (so(e, r), (r & 130023424) === r && (t = xc + 500 - vt(), 10 < t)) {
              if (pi(e, 0) !== 0)
                break;
              if (s = e.suspendedLanes, (s & r) !== r) {
                tu(), e.pingedLanes |= e.suspendedLanes & s;
                break;
              }
              e.timeoutHandle = ia(jo.bind(null, e, su, Si), t);
              break;
            }
            jo(e, su, Si);
            break;
          case 4:
            if (so(e, r), (r & 4194240) === r)
              break;
            for (t = e.eventTimes, s = -1; 0 < r; ) {
              var V = 31 - kr(r);
              h = 1 << V, V = t[V], V > s && (s = V), r &= ~h;
            }
            if (r = s, r = vt() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * Wr(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = ia(jo.bind(null, e, su, Si), r);
              break;
            }
            jo(e, su, Si);
            break;
          case 5:
            jo(e, su, Si);
            break;
          default:
            throw Error(pe(329));
        }
      }
    }
    return lu(e, vt()), e.callbackNode === n ? Uc.bind(null, e) : null;
  }
  function Tc(e, t) {
    var n = Ts;
    return e.current.memoizedState.isDehydrated && (Io(e, t).flags |= 256), e = _l(e, t), e !== 2 && (t = su, su = n, t !== null && wc(t)), e;
  }
  function wc(e) {
    su === null ? su = e : su.push.apply(su, e);
  }
  function vp(e) {
    for (var t = e; ; ) {
      if (t.flags & 16384) {
        var n = t.updateQueue;
        if (n !== null && (n = n.stores, n !== null))
          for (var r = 0; r < n.length; r++) {
            var s = n[r], h = s.getSnapshot;
            s = s.value;
            try {
              if (!mu(h(), s))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e)
          break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function so(e, t) {
    for (t &= ~_o, t &= ~uo, e.suspendedLanes |= t, e.pingedLanes &= ~t, e = e.expirationTimes; 0 < t; ) {
      var n = 31 - kr(t), r = 1 << n;
      e[n] = -1, t &= ~r;
    }
  }
  function Gc(e) {
    if (nn & 6)
      throw Error(pe(327));
    wa();
    var t = pi(e, 0);
    if (!(t & 1))
      return lu(e, vt()), null;
    var n = _l(e, t);
    if (e.tag !== 0 && n === 2) {
      var r = Bi(e);
      r !== 0 && (t = r, n = Tc(e, r));
    }
    if (n === 1)
      throw n = ro, Io(e, 0), so(e, t), lu(e, vt()), n;
    if (n === 6)
      throw Error(pe(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = t, jo(e, su, Si), lu(e, vt()), null;
  }
  function kc(e, t) {
    var n = nn;
    nn |= 1;
    try {
      return e(t);
    } finally {
      nn = n, nn === 0 && (Ta = vt() + 500, da && ti());
    }
  }
  function Po(e) {
    oo !== null && oo.tag === 0 && !(nn & 6) && wa();
    var t = nn;
    nn |= 1;
    var n = nr.transition, r = $n;
    try {
      if (nr.transition = null, $n = 1, e)
        return e();
    } finally {
      $n = r, nr.transition = n, nn = t, !(nn & 6) && ti();
    }
  }
  function Nc() {
    Gr = Ai.current, Zn(Ai);
  }
  function Io(e, t) {
    e.finishedWork = null, e.finishedLanes = 0;
    var n = e.timeoutHandle;
    if (n !== -1 && (e.timeoutHandle = -1, hc(n)), It !== null)
      for (n = It.return; n !== null; ) {
        var r = n;
        switch (rs(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && ca();
            break;
          case 3:
            no(), Zn(Ur), Zn(br), Es();
            break;
          case 5:
            hs(r);
            break;
          case 4:
            no();
            break;
          case 13:
            Zn(er);
            break;
          case 19:
            Zn(er);
            break;
          case 10:
            ls(r.type._context);
            break;
          case 22:
          case 23:
            Nc();
        }
        n = n.return;
      }
    if (Tt = e, It = e = lo(e.current, null), dr = Gr = t, Er = 0, ro = null, _o = uo = oi = 0, su = Ts = null, ni !== null) {
      for (t = 0; t < ni.length; t++)
        if (n = ni[t], r = n.interleaved, r !== null) {
          n.interleaved = null;
          var s = r.next, h = n.pending;
          if (h !== null) {
            var V = h.next;
            h.next = s, r.next = V;
          }
          n.pending = r;
        }
      ni = null;
    }
    return e;
  }
  function Jc(e, t) {
    do {
      var n = It;
      try {
        if (ss(), xa.current = E, Aa) {
          for (var r = rr.memoizedState; r !== null; ) {
            var s = r.queue;
            s !== null && (s.pending = null), r = r.next;
          }
          Aa = !1;
        }
        if (au = 0, Tr = ir = rr = null, No = !1, bo = 0, yr.current = null, n === null || n.return === null) {
          Er = 1, ro = t, It = null;
          break;
        }
        e: {
          var h = e, V = n.return, ae = n, fe = t;
          if (t = dr, ae.flags |= 32768, fe !== null && typeof fe == "object" && typeof fe.then == "function") {
            var $e = fe, st = ae, dt = st.tag;
            if (!(st.mode & 1) && (dt === 0 || dt === 11 || dt === 15)) {
              var at = st.alternate;
              at ? (st.updateQueue = at.updateQueue, st.memoizedState = at.memoizedState, st.lanes = at.lanes) : (st.updateQueue = null, st.memoizedState = null);
            }
            var jt = J(V);
            if (jt !== null) {
              jt.flags &= -257, te(jt, V, ae, h, t), jt.mode & 1 && W(h, $e, t), t = jt, fe = $e;
              var Rt = t.updateQueue;
              if (Rt === null) {
                var Vt = /* @__PURE__ */ new Set();
                Vt.add(fe), t.updateQueue = Vt;
              } else
                Rt.add(fe);
              break e;
            } else {
              if (!(t & 1)) {
                W(h, $e, t), bc();
                break e;
              }
              fe = Error(pe(426));
            }
          } else if (tr && ae.mode & 1) {
            var vr = J(V);
            if (vr !== null) {
              !(vr.flags & 65536) && (vr.flags |= 256), te(vr, V, ae, h, t), os(S(fe, ae));
              break e;
            }
          }
          h = fe = S(fe, ae), Er !== 4 && (Er = 2), Ts === null ? Ts = [h] : Ts.push(h), h = V;
          do {
            switch (h.tag) {
              case 3:
                h.flags |= 65536, t &= -t, h.lanes |= t;
                var Ie = $(h, fe, t);
                fs(h, Ie);
                break e;
              case 1:
                ae = fe;
                var ve = h.type, Oe = h.stateNode;
                if (!(h.flags & 128) && (typeof ve.getDerivedStateFromError == "function" || Oe !== null && typeof Oe.componentDidCatch == "function" && (io === null || !io.has(Oe)))) {
                  h.flags |= 65536, t &= -t, h.lanes |= t;
                  var ht = G(h, ae, t);
                  fs(h, ht);
                  break e;
                }
            }
            h = h.return;
          } while (h !== null);
        }
        Xc(n);
      } catch (qt) {
        t = qt, It === n && n !== null && (It = n = n.return);
        continue;
      }
      break;
    } while (1);
  }
  function qc() {
    var e = Kn.current;
    return Kn.current = E, e === null ? E : e;
  }
  function bc() {
    (Er === 0 || Er === 3 || Er === 2) && (Er = 4), Tt === null || !(oi & 268435455) && !(uo & 268435455) || so(Tt, dr);
  }
  function _l(e, t) {
    var n = nn;
    nn |= 2;
    var r = qc();
    (Tt !== e || dr !== t) && (Si = null, Io(e, t));
    do
      try {
        Cp();
        break;
      } catch (s) {
        Jc(e, s);
      }
    while (1);
    if (ss(), nn = n, Kn.current = r, It !== null)
      throw Error(pe(261));
    return Tt = null, dr = 0, Er;
  }
  function Cp() {
    for (; It !== null; )
      Wc(It);
  }
  function Fp() {
    for (; It !== null && !kt(); )
      Wc(It);
  }
  function Wc(e) {
    var t = Hc(e.alternate, e, Gr);
    e.memoizedProps = e.pendingProps, t === null ? Xc(e) : It = t, yr.current = null;
  }
  function Xc(e) {
    var t = e;
    do {
      var n = t.alternate;
      if (e = t.return, t.flags & 32768) {
        if (n = _e(n, t), n !== null) {
          n.flags &= 32767, It = n;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          Er = 6, It = null;
          return;
        }
      } else if (n = Ze(n, t, Gr), n !== null) {
        It = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        It = t;
        return;
      }
      It = t = e;
    } while (t !== null);
    Er === 0 && (Er = 5);
  }
  function jo(e, t, n) {
    var r = $n, s = nr.transition;
    try {
      nr.transition = null, $n = 1, xp(e, t, n, r);
    } finally {
      nr.transition = s, $n = r;
    }
    return null;
  }
  function xp(e, t, n, r) {
    do
      wa();
    while (oo !== null);
    if (nn & 6)
      throw Error(pe(327));
    n = e.finishedWork;
    var s = e.finishedLanes;
    if (n === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, n === e.current)
      throw Error(pe(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var h = n.lanes | n.childLanes;
    if (bs(e, h), e === Tt && (It = Tt = null, dr = 0), !(n.subtreeFlags & 2064) && !(n.flags & 2064) || kl || (kl = !0, Zc(un, function() {
      return wa(), null;
    })), h = (n.flags & 15990) !== 0, n.subtreeFlags & 15990 || h) {
      h = nr.transition, nr.transition = null;
      var V = $n;
      $n = 1;
      var ae = nn;
      nn |= 4, yr.current = null, qn(e, n), jn(n, e), fc(ua), Uo = !!Ha, ua = Ha = null, e.current = n, z(n), Pt(), nn = ae, $n = V, nr.transition = h;
    } else
      e.current = n;
    if (kl && (kl = !1, oo = e, Nl = s), h = e.pendingLanes, h === 0 && (io = null), $r(n.stateNode), lu(e, vt()), t !== null)
      for (r = e.onRecoverableError, n = 0; n < t.length; n++)
        s = t[n], r(s.value, { componentStack: s.stack, digest: s.digest });
    if (wl)
      throw wl = !1, e = Ac, Ac = null, e;
    return Nl & 1 && e.tag !== 0 && wa(), h = e.pendingLanes, h & 1 ? e === Sc ? ws++ : (ws = 0, Sc = e) : ws = 0, ti(), null;
  }
  function wa() {
    if (oo !== null) {
      var e = _i(Nl), t = nr.transition, n = $n;
      try {
        if (nr.transition = null, $n = 16 > e ? 16 : e, oo === null)
          var r = !1;
        else {
          if (e = oo, oo = null, Nl = 0, nn & 6)
            throw Error(pe(331));
          var s = nn;
          for (nn |= 4, he = e.current; he !== null; ) {
            var h = he, V = h.child;
            if (he.flags & 16) {
              var ae = h.deletions;
              if (ae !== null) {
                for (var fe = 0; fe < ae.length; fe++) {
                  var $e = ae[fe];
                  for (he = $e; he !== null; ) {
                    var st = he;
                    switch (st.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ct(8, st, h);
                    }
                    var dt = st.child;
                    if (dt !== null)
                      dt.return = st, he = dt;
                    else
                      for (; he !== null; ) {
                        st = he;
                        var at = st.sibling, jt = st.return;
                        if (Mt(st), st === $e) {
                          he = null;
                          break;
                        }
                        if (at !== null) {
                          at.return = jt, he = at;
                          break;
                        }
                        he = jt;
                      }
                  }
                }
                var Rt = h.alternate;
                if (Rt !== null) {
                  var Vt = Rt.child;
                  if (Vt !== null) {
                    Rt.child = null;
                    do {
                      var vr = Vt.sibling;
                      Vt.sibling = null, Vt = vr;
                    } while (Vt !== null);
                  }
                }
                he = h;
              }
            }
            if (h.subtreeFlags & 2064 && V !== null)
              V.return = h, he = V;
            else
              e:
                for (; he !== null; ) {
                  if (h = he, h.flags & 2048)
                    switch (h.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ct(9, h, h.return);
                    }
                  var Ie = h.sibling;
                  if (Ie !== null) {
                    Ie.return = h.return, he = Ie;
                    break e;
                  }
                  he = h.return;
                }
          }
          var ve = e.current;
          for (he = ve; he !== null; ) {
            V = he;
            var Oe = V.child;
            if (V.subtreeFlags & 2064 && Oe !== null)
              Oe.return = V, he = Oe;
            else
              e:
                for (V = ve; he !== null; ) {
                  if (ae = he, ae.flags & 2048)
                    try {
                      switch (ae.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Ln(9, ae);
                      }
                    } catch (qt) {
                      fr(ae, ae.return, qt);
                    }
                  if (ae === V) {
                    he = null;
                    break e;
                  }
                  var ht = ae.sibling;
                  if (ht !== null) {
                    ht.return = ae.return, he = ht;
                    break e;
                  }
                  he = ae.return;
                }
          }
          if (nn = s, ti(), ne && typeof ne.onPostCommitFiberRoot == "function")
            try {
              ne.onPostCommitFiberRoot(Jn, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        $n = n, nr.transition = t;
      }
    }
    return !1;
  }
  function Qc(e, t, n) {
    t = S(n, t), t = $(e, t, 1), e = ri(e, t, 1), t = tu(), e !== null && (fo(e, 1, t), lu(e, t));
  }
  function fr(e, t, n) {
    if (e.tag === 3)
      Qc(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Qc(t, e, n);
          break;
        } else if (t.tag === 1) {
          var r = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (io === null || !io.has(r))) {
            e = S(n, e), e = G(t, e, 1), t = ri(t, e, 1), e = tu(), t !== null && (fo(t, 1, e), lu(t, e));
            break;
          }
        }
        t = t.return;
      }
  }
  function Ap(e, t, n) {
    var r = e.pingCache;
    r !== null && r.delete(t), t = tu(), e.pingedLanes |= e.suspendedLanes & n, Tt === e && (dr & n) === n && (Er === 4 || Er === 3 && (dr & 130023424) === dr && 500 > vt() - xc ? Io(e, 0) : _o |= n), lu(e, t);
  }
  function Yc(e, t) {
    t === 0 && (e.mode & 1 ? (t = ci, ci <<= 1, !(ci & 130023424) && (ci = 4194304)) : t = 1);
    var n = tu();
    e = Ru(e, t), e !== null && (fo(e, t, n), lu(e, n));
  }
  function Sp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Yc(e, n);
  }
  function Tp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, s = e.memoizedState;
        s !== null && (n = s.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(pe(314));
    }
    r !== null && r.delete(t), Yc(e, n);
  }
  var Hc;
  Hc = function(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps || Ur.current)
        ie = !0;
      else {
        if (!(e.lanes & n) && !(t.flags & 128))
          return ie = !1, _t(e, t, n);
        ie = !!(e.flags & 131072);
      }
    else
      ie = !1, tr && t.flags & 1048576 && dl(t, fa, t.index);
    switch (t.lanes = 0, t.tag) {
      case 2:
        var r = t.type;
        Gt(e, t), e = t.pendingProps;
        var s = Wi(t, br.current);
        eo(t, n), s = Fs(null, t, r, e, s, n);
        var h = xs();
        return t.flags |= 1, typeof s == "object" && s !== null && typeof s.render == "function" && s.$$typeof === void 0 ? (t.tag = 1, t.memoizedState = null, t.updateQueue = null, qr(r) ? (h = !0, pa(t)) : h = !1, t.memoizedState = s.state !== null && s.state !== void 0 ? s.state : null, ds(t), s.updater = Ku, t.stateNode = s, s._reactInternals = t, Ds(t, r, e, n), t = Te(null, t, r, !0, h, n)) : (t.tag = 0, tr && h && ns(t), q(null, t, s, n), t = t.child), t;
      case 16:
        r = t.elementType;
        e: {
          switch (Gt(e, t), e = t.pendingProps, s = r._init, r = s(r._payload), t.type = r, s = t.tag = kp(r), e = yu(r, e), s) {
            case 0:
              t = X(null, t, r, e, n);
              break e;
            case 1:
              t = re(null, t, r, e, n);
              break e;
            case 11:
              t = U(null, t, r, e, n);
              break e;
            case 14:
              t = se(null, t, r, yu(r.type, e), n);
              break e;
          }
          throw Error(pe(
            306,
            r,
            ""
          ));
        }
        return t;
      case 0:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yu(r, s), X(e, t, r, s, n);
      case 1:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yu(r, s), re(e, t, r, s, n);
      case 3:
        e: {
          if (we(t), e === null)
            throw Error(pe(387));
          r = t.pendingProps, h = t.memoizedState, s = h.element, hl(e, t), Ea(t, r, null, n);
          var V = t.memoizedState;
          if (r = V.element, h.isDehydrated)
            if (h = { element: r, isDehydrated: !1, cache: V.cache, pendingSuspenseBoundaries: V.pendingSuspenseBoundaries, transitions: V.transitions }, t.updateQueue.baseState = h, t.memoizedState = h, t.flags & 256) {
              s = S(Error(pe(423)), t), t = tt(e, t, r, n, s);
              break e;
            } else if (r !== s) {
              s = S(Error(pe(424)), t), t = tt(e, t, r, n, s);
              break e;
            } else
              for (Zr = iu(t.stateNode.containerInfo.firstChild), Hr = t, tr = !0, hu = null, n = Al(t, null, r, n), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
          else {
            if (Hi(), r === s) {
              t = ft(e, t, n);
              break e;
            }
            q(e, t, r, n);
          }
          t = t.child;
        }
        return t;
      case 5:
        return Sl(t), e === null && is(t), r = t.type, s = t.pendingProps, h = e !== null ? e.memoizedProps : null, V = s.children, Yu(r, s) ? V = null : h !== null && Yu(r, h) && (t.flags |= 32), Ne(e, t), q(e, t, V, n), t.child;
      case 6:
        return e === null && is(t), null;
      case 13:
        return ce(e, t, n);
      case 4:
        return gs(t, t.stateNode.containerInfo), r = t.pendingProps, e === null ? t.child = wu(t, null, r, n) : q(e, t, r, n), t.child;
      case 11:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yu(r, s), U(e, t, r, s, n);
      case 7:
        return q(e, t, t.pendingProps, n), t.child;
      case 8:
        return q(e, t, t.pendingProps.children, n), t.child;
      case 12:
        return q(e, t, t.pendingProps.children, n), t.child;
      case 10:
        e: {
          if (r = t.type._context, s = t.pendingProps, h = t.memoizedProps, V = s.value, Qn(Da, r._currentValue), r._currentValue = V, h !== null)
            if (mu(h.value, V)) {
              if (h.children === s.children && !Ur.current) {
                t = ft(e, t, n);
                break e;
              }
            } else
              for (h = t.child, h !== null && (h.return = t); h !== null; ) {
                var ae = h.dependencies;
                if (ae !== null) {
                  V = h.child;
                  for (var fe = ae.firstContext; fe !== null; ) {
                    if (fe.context === r) {
                      if (h.tag === 1) {
                        fe = Vu(-1, n & -n), fe.tag = 2;
                        var $e = h.updateQueue;
                        if ($e !== null) {
                          $e = $e.shared;
                          var st = $e.pending;
                          st === null ? fe.next = fe : (fe.next = st.next, st.next = fe), $e.pending = fe;
                        }
                      }
                      h.lanes |= n, fe = h.alternate, fe !== null && (fe.lanes |= n), cs(
                        h.return,
                        n,
                        t
                      ), ae.lanes |= n;
                      break;
                    }
                    fe = fe.next;
                  }
                } else if (h.tag === 10)
                  V = h.type === t.type ? null : h.child;
                else if (h.tag === 18) {
                  if (V = h.return, V === null)
                    throw Error(pe(341));
                  V.lanes |= n, ae = V.alternate, ae !== null && (ae.lanes |= n), cs(V, n, t), V = h.sibling;
                } else
                  V = h.child;
                if (V !== null)
                  V.return = h;
                else
                  for (V = h; V !== null; ) {
                    if (V === t) {
                      V = null;
                      break;
                    }
                    if (h = V.sibling, h !== null) {
                      h.return = V.return, V = h;
                      break;
                    }
                    V = V.return;
                  }
                h = V;
              }
          q(e, t, s.children, n), t = t.child;
        }
        return t;
      case 9:
        return s = t.type, r = t.pendingProps.children, eo(t, n), s = eu(s), r = r(s), t.flags |= 1, q(e, t, r, n), t.child;
      case 14:
        return r = t.type, s = yu(r, t.pendingProps), s = yu(r.type, s), se(e, t, r, s, n);
      case 15:
        return ye(e, t, t.type, t.pendingProps, n);
      case 17:
        return r = t.type, s = t.pendingProps, s = t.elementType === r ? s : yu(r, s), Gt(e, t), t.tag = 1, qr(r) ? (e = !0, pa(t)) : e = !1, eo(t, n), Cl(t, r, s), Ds(t, r, s, n), Te(null, t, r, !0, e, n);
      case 19:
        return en(e, t, n);
      case 22:
        return le(e, t, n);
    }
    throw Error(pe(156, t.tag));
  };
  function Zc(e, t) {
    return He(e, t);
  }
  function wp(e, t, n, r) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function bu(e, t, n, r) {
    return new wp(e, t, n, r);
  }
  function Bc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kp(e) {
    if (typeof e == "function")
      return Bc(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === xr)
        return 11;
      if (e === Sr)
        return 14;
    }
    return 2;
  }
  function lo(e, t) {
    var n = e.alternate;
    return n === null ? (n = bu(e.tag, t, e.key, e.mode), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 14680064, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n;
  }
  function Pl(e, t, n, r, s, h) {
    var V = 2;
    if (r = e, typeof e == "function")
      Bc(e) && (V = 1);
    else if (typeof e == "string")
      V = 5;
    else
      e:
        switch (e) {
          case Dr:
            return Lo(n.children, s, h, t);
          case gr:
            V = 8, s |= 8;
            break;
          case Or:
            return e = bu(12, n, t, s | 2), e.elementType = Or, e.lanes = h, e;
          case Ar:
            return e = bu(13, n, t, s), e.elementType = Ar, e.lanes = h, e;
          case Mr:
            return e = bu(19, n, t, s), e.elementType = Mr, e.lanes = h, e;
          case En:
            return Il(n, s, h, t);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Pr:
                  V = 10;
                  break e;
                case Jr:
                  V = 9;
                  break e;
                case xr:
                  V = 11;
                  break e;
                case Sr:
                  V = 14;
                  break e;
                case sn:
                  V = 16, r = null;
                  break e;
              }
            throw Error(pe(130, e == null ? e : typeof e, ""));
        }
    return t = bu(V, n, t, s), t.elementType = e, t.type = r, t.lanes = h, t;
  }
  function Lo(e, t, n, r) {
    return e = bu(7, e, r, t), e.lanes = n, e;
  }
  function Il(e, t, n, r) {
    return e = bu(22, e, r, t), e.elementType = En, e.lanes = n, e.stateNode = { isHidden: !1 }, e;
  }
  function _c(e, t, n) {
    return e = bu(6, e, null, t), e.lanes = n, e;
  }
  function Pc(e, t, n) {
    return t = bu(4, e.children !== null ? e.children : [], e.key, t), t.lanes = n, t.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, t;
  }
  function Np(e, t, n, r, s) {
    this.tag = t, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Vo(0), this.expirationTimes = Vo(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vo(0), this.identifierPrefix = r, this.onRecoverableError = s, this.mutableSourceEagerHydrationData = null;
  }
  function Ic(e, t, n, r, s, h, V, ae, fe) {
    return e = new Np(e, t, n, ae, fe), t === 1 ? (t = 1, h === !0 && (t |= 8)) : t = 0, h = bu(3, null, null, t), e.current = h, h.stateNode = e, h.memoizedState = { element: r, isDehydrated: n, cache: null, transitions: null, pendingSuspenseBoundaries: null }, ds(h), e;
  }
  function bp(e, t, n) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: mr, key: r == null ? null : "" + r, children: e, containerInfo: t, implementation: n };
  }
  function ep(e) {
    if (!e)
      return Lu;
    e = e._reactInternals;
    e: {
      if (me(e) !== e || e.tag !== 1)
        throw Error(pe(170));
      var t = e;
      do {
        switch (t.tag) {
          case 3:
            t = t.stateNode.context;
            break e;
          case 1:
            if (qr(t.type)) {
              t = t.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        t = t.return;
      } while (t !== null);
      throw Error(pe(171));
    }
    if (e.tag === 1) {
      var n = e.type;
      if (qr(n))
        return Ci(e, n, t);
    }
    return t;
  }
  function tp(e, t, n, r, s, h, V, ae, fe) {
    return e = Ic(n, r, !0, e, s, h, V, ae, fe), e.context = ep(null), n = e.current, r = tu(), s = ao(n), h = Vu(r, s), h.callback = t ?? null, ri(n, h, s), e.current.lanes = s, fo(e, s, r), lu(e, r), e;
  }
  function jl(e, t, n, r) {
    var s = t.current, h = tu(), V = ao(s);
    return n = ep(n), t.context === null ? t.context = n : t.pendingContext = n, t = Vu(h, V), t.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (t.callback = r), e = ri(s, t, V), e !== null && (zu(e, s, V, h), ya(e, s, V)), V;
  }
  function Ll(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function np(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function jc(e, t) {
    np(e, t), (e = e.alternate) && np(e, t);
  }
  function Bp() {
    return null;
  }
  var rp = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function Lc(e) {
    this._internalRoot = e;
  }
  Ol.prototype.render = Lc.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null)
      throw Error(pe(409));
    jl(e, t, null, null);
  }, Ol.prototype.unmount = Lc.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Po(function() {
        jl(null, e, null, null);
      }), t[Qr] = null;
    }
  };
  function Ol(e) {
    this._internalRoot = e;
  }
  Ol.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ba();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < xu.length && t !== 0 && t < xu[n].priority; n++)
        ;
      xu.splice(n, 0, e), n === 0 && Is(e);
    }
  };
  function Oc(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Ml(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function up() {
  }
  function _p(e, t, n, r, s) {
    if (s) {
      if (typeof r == "function") {
        var h = r;
        r = function() {
          var $e = Ll(V);
          h.call($e);
        };
      }
      var V = tp(t, r, e, 0, null, !1, !1, "", up);
      return e._reactRootContainer = V, e[Qr] = V.current, Ao(e.nodeType === 8 ? e.parentNode : e), Po(), V;
    }
    for (; s = e.lastChild; )
      e.removeChild(s);
    if (typeof r == "function") {
      var ae = r;
      r = function() {
        var $e = Ll(fe);
        ae.call($e);
      };
    }
    var fe = Ic(e, 0, !1, null, null, !1, !1, "", up);
    return e._reactRootContainer = fe, e[Qr] = fe.current, Ao(e.nodeType === 8 ? e.parentNode : e), Po(function() {
      jl(t, fe, n, r);
    }), fe;
  }
  function Rl(e, t, n, r, s) {
    var h = n._reactRootContainer;
    if (h) {
      var V = h;
      if (typeof s == "function") {
        var ae = s;
        s = function() {
          var fe = Ll(V);
          ae.call(fe);
        };
      }
      jl(t, V, e, s);
    } else
      V = _p(n, t, e, s, r);
    return Ll(V);
  }
  Bs = function(e) {
    switch (e.tag) {
      case 3:
        var t = e.stateNode;
        if (t.current.memoizedState.isDehydrated) {
          var n = Vr(t.pendingLanes);
          n !== 0 && (Na(t, n | 1), lu(t, vt()), !(nn & 6) && (Ta = vt() + 500, ti()));
        }
        break;
      case 13:
        Po(function() {
          var r = Ru(e, 1);
          if (r !== null) {
            var s = tu();
            zu(r, e, 1, s);
          }
        }), jc(e, 1);
    }
  }, ba = function(e) {
    if (e.tag === 13) {
      var t = Ru(e, 134217728);
      if (t !== null) {
        var n = tu();
        zu(t, e, 134217728, n);
      }
      jc(e, 134217728);
    }
  }, Ut = function(e) {
    if (e.tag === 13) {
      var t = ao(e), n = Ru(e, t);
      if (n !== null) {
        var r = tu();
        zu(n, e, t, r);
      }
      jc(e, t);
    }
  }, Ba = function() {
    return $n;
  }, _s = function(e, t) {
    var n = $n;
    try {
      return $n = e, t();
    } finally {
      $n = n;
    }
  }, ai = function(e, t, n) {
    switch (t) {
      case "input":
        if (An(e, n), t = n.name, n.type === "radio" && t != null) {
          for (n = e; n.parentNode; )
            n = n.parentNode;
          for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
            var r = n[t];
            if (r !== e && r.form === e.form) {
              var s = ei(r);
              if (!s)
                throw Error(pe(90));
              Ve(r), An(r, s);
            }
          }
        }
        break;
      case "textarea":
        be(e, n);
        break;
      case "select":
        t = n.value, t != null && Ft(e, !!n.multiple, t, !1);
    }
  }, si = kc, ki = Po;
  var Pp = { usingClientEntryPoint: !1, Events: [Hu, Zu, ei, du, fu, kc] }, ks = { findFiberByHostInstance: Du, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Ip = { bundleType: ks.bundleType, version: ks.version, rendererPackageName: ks.rendererPackageName, rendererConfig: ks.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: Hn.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Ge(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: ks.findFiberByHostInstance || Bp, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $l = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$l.isDisabled && $l.supportsFiber)
      try {
        Jn = $l.inject(Ip), ne = $l;
      } catch {
      }
  }
  return cu.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Pp, cu.createPortal = function(e, t) {
    var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Oc(t))
      throw Error(pe(200));
    return bp(e, t, null, n);
  }, cu.createRoot = function(e, t) {
    if (!Oc(e))
      throw Error(pe(299));
    var n = !1, r = "", s = rp;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (r = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Ic(e, 1, !1, null, null, n, !1, r, s), e[Qr] = t.current, Ao(e.nodeType === 8 ? e.parentNode : e), new Lc(t);
  }, cu.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(pe(188)) : (e = Object.keys(e).join(","), Error(pe(268, e)));
    return e = Ge(t), e = e === null ? null : e.stateNode, e;
  }, cu.flushSync = function(e) {
    return Po(e);
  }, cu.hydrate = function(e, t, n) {
    if (!Ml(t))
      throw Error(pe(200));
    return Rl(null, e, t, !0, n);
  }, cu.hydrateRoot = function(e, t, n) {
    if (!Oc(e))
      throw Error(pe(405));
    var r = n != null && n.hydratedSources || null, s = !1, h = "", V = rp;
    if (n != null && (n.unstable_strictMode === !0 && (s = !0), n.identifierPrefix !== void 0 && (h = n.identifierPrefix), n.onRecoverableError !== void 0 && (V = n.onRecoverableError)), t = tp(t, null, e, 1, n ?? null, s, !1, h, V), e[Qr] = t.current, Ao(e), r)
      for (e = 0; e < r.length; e++)
        n = r[e], s = n._getVersion, s = s(n._source), t.mutableSourceEagerHydrationData == null ? t.mutableSourceEagerHydrationData = [n, s] : t.mutableSourceEagerHydrationData.push(
          n,
          s
        );
    return new Ol(t);
  }, cu.render = function(e, t, n) {
    if (!Ml(t))
      throw Error(pe(200));
    return Rl(null, e, t, !1, n);
  }, cu.unmountComponentAtNode = function(e) {
    if (!Ml(e))
      throw Error(pe(40));
    return e._reactRootContainer ? (Po(function() {
      Rl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[Qr] = null;
      });
    }), !0) : !1;
  }, cu.unstable_batchedUpdates = kc, cu.unstable_renderSubtreeIntoContainer = function(e, t, n, r) {
    if (!Ml(n))
      throw Error(pe(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(pe(38));
    return Rl(e, t, n, !1, r);
  }, cu.version = "18.2.0-next-9e3b772b8-20220608", cu;
}
function hp() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(hp);
    } catch (Kt) {
      console.error(Kt);
    }
}
hp(), gp.exports = zp();
var Up = gp.exports;
const pp = /* @__PURE__ */ Kc(Up);
var yp = { exports: {} };
(function(Kt, wn) {
  (function(pe) {
    Kt.exports = pe();
  })(function() {
    var pe = (ot, Ae) => () => (Ae || ot((Ae = { exports: {} }).exports, Ae), Ae.exports), Mn = pe((ot, Ae) => {
      var me = function(Se) {
        return Se && Se.Math == Math && Se;
      };
      Ae.exports = me(typeof globalThis == "object" && globalThis) || me(typeof window == "object" && window) || me(typeof self == "object" && self) || me(typeof ip == "object" && ip) || function() {
        return this;
      }() || Function("return this")();
    }), Cn = pe((ot, Ae) => {
      Ae.exports = function(me) {
        try {
          return !!me();
        } catch {
          return !0;
        }
      };
    }), _n = pe((ot, Ae) => {
      var me = Cn();
      Ae.exports = !me(function() {
        return Object.defineProperty({}, 1, { get: function() {
          return 7;
        } })[1] != 7;
      });
    }), Yn = pe((ot, Ae) => {
      var me = Cn();
      Ae.exports = !me(function() {
        var Se = function() {
        }.bind();
        return typeof Se != "function" || Se.hasOwnProperty("prototype");
      });
    }), zn = pe((ot, Ae) => {
      var me = Yn(), Se = Function.prototype.call;
      Ae.exports = me ? Se.bind(Se) : function() {
        return Se.apply(Se, arguments);
      };
    }), Xt = pe((ot) => {
      var Ae = {}.propertyIsEnumerable, me = Object.getOwnPropertyDescriptor, Se = me && !Ae.call({ 1: 2 }, 1);
      ot.f = Se ? function(Ce) {
        var je = me(this, Ce);
        return !!je && je.enumerable;
      } : Ae;
    }), cn = pe((ot, Ae) => {
      Ae.exports = function(me, Se) {
        return { enumerable: !(me & 1), configurable: !(me & 2), writable: !(me & 4), value: Se };
      };
    }), Fn = pe((ot, Ae) => {
      var me = Yn(), Se = Function.prototype, Ce = Se.call, je = me && Se.bind.bind(Ce, Ce);
      Ae.exports = me ? je : function(Ge) {
        return function() {
          return Ce.apply(Ge, arguments);
        };
      };
    }), Rn = pe((ot, Ae) => {
      var me = Fn(), Se = me({}.toString), Ce = me("".slice);
      Ae.exports = function(je) {
        return Ce(Se(je), 8, -1);
      };
    }), Un = pe((ot, Ae) => {
      var me = Fn(), Se = Cn(), Ce = Rn(), je = Object, Ge = me("".split);
      Ae.exports = Se(function() {
        return !je("z").propertyIsEnumerable(0);
      }) ? function(rt) {
        return Ce(rt) == "String" ? Ge(rt, "") : je(rt);
      } : je;
    }), Cr = pe((ot, Ae) => {
      Ae.exports = function(me) {
        return me == null;
      };
    }), Fr = pe((ot, Ae) => {
      var me = Cr(), Se = TypeError;
      Ae.exports = function(Ce) {
        if (me(Ce))
          throw Se("Can't call method on " + Ce);
        return Ce;
      };
    }), On = pe((ot, Ae) => {
      var me = Un(), Se = Fr();
      Ae.exports = function(Ce) {
        return me(Se(Ce));
      };
    }), xn = pe((ot, Ae) => {
      var me = typeof document == "object" && document.all, Se = typeof me > "u" && me !== void 0;
      Ae.exports = { all: me, IS_HTMLDDA: Se };
    }), Wn = pe((ot, Ae) => {
      var me = xn(), Se = me.all;
      Ae.exports = me.IS_HTMLDDA ? function(Ce) {
        return typeof Ce == "function" || Ce === Se;
      } : function(Ce) {
        return typeof Ce == "function";
      };
    }), Gn = pe((ot, Ae) => {
      var me = Wn(), Se = xn(), Ce = Se.all;
      Ae.exports = Se.IS_HTMLDDA ? function(je) {
        return typeof je == "object" ? je !== null : me(je) || je === Ce;
      } : function(je) {
        return typeof je == "object" ? je !== null : me(je);
      };
    }), cr = pe((ot, Ae) => {
      var me = Mn(), Se = Wn(), Ce = function(je) {
        return Se(je) ? je : void 0;
      };
      Ae.exports = function(je, Ge) {
        return arguments.length < 2 ? Ce(me[je]) : me[je] && me[je][Ge];
      };
    }), Hn = pe((ot, Ae) => {
      var me = Fn();
      Ae.exports = me({}.isPrototypeOf);
    }), wr = pe((ot, Ae) => {
      var me = cr();
      Ae.exports = me("navigator", "userAgent") || "";
    }), mr = pe((ot, Ae) => {
      var me = Mn(), Se = wr(), Ce = me.process, je = me.Deno, Ge = Ce && Ce.versions || je && je.version, rt = Ge && Ge.v8, He, ut;
      rt && (He = rt.split("."), ut = He[0] > 0 && He[0] < 4 ? 1 : +(He[0] + He[1])), !ut && Se && (He = Se.match(/Edge\/(\d+)/), (!He || He[1] >= 74) && (He = Se.match(/Chrome\/(\d+)/), He && (ut = +He[1]))), Ae.exports = ut;
    }), Dr = pe((ot, Ae) => {
      var me = mr(), Se = Cn();
      Ae.exports = !!Object.getOwnPropertySymbols && !Se(function() {
        var Ce = Symbol();
        return !String(Ce) || !(Object(Ce) instanceof Symbol) || !Symbol.sham && me && me < 41;
      });
    }), gr = pe((ot, Ae) => {
      var me = Dr();
      Ae.exports = me && !Symbol.sham && typeof Symbol.iterator == "symbol";
    }), Or = pe((ot, Ae) => {
      var me = cr(), Se = Wn(), Ce = Hn(), je = gr(), Ge = Object;
      Ae.exports = je ? function(rt) {
        return typeof rt == "symbol";
      } : function(rt) {
        var He = me("Symbol");
        return Se(He) && Ce(He.prototype, Ge(rt));
      };
    }), Pr = pe((ot, Ae) => {
      var me = String;
      Ae.exports = function(Se) {
        try {
          return me(Se);
        } catch {
          return "Object";
        }
      };
    }), Jr = pe((ot, Ae) => {
      var me = Wn(), Se = Pr(), Ce = TypeError;
      Ae.exports = function(je) {
        if (me(je))
          return je;
        throw Ce(Se(je) + " is not a function");
      };
    }), xr = pe((ot, Ae) => {
      var me = Jr(), Se = Cr();
      Ae.exports = function(Ce, je) {
        var Ge = Ce[je];
        return Se(Ge) ? void 0 : me(Ge);
      };
    }), Ar = pe((ot, Ae) => {
      var me = zn(), Se = Wn(), Ce = Gn(), je = TypeError;
      Ae.exports = function(Ge, rt) {
        var He, ut;
        if (rt === "string" && Se(He = Ge.toString) && !Ce(ut = me(He, Ge)) || Se(He = Ge.valueOf) && !Ce(ut = me(He, Ge)) || rt !== "string" && Se(He = Ge.toString) && !Ce(ut = me(He, Ge)))
          return ut;
        throw je("Can't convert object to primitive value");
      };
    }), Mr = pe((ot, Ae) => {
      Ae.exports = !1;
    }), Sr = pe((ot, Ae) => {
      var me = Mn(), Se = Object.defineProperty;
      Ae.exports = function(Ce, je) {
        try {
          Se(me, Ce, { value: je, configurable: !0, writable: !0 });
        } catch {
          me[Ce] = je;
        }
        return je;
      };
    }), sn = pe((ot, Ae) => {
      var me = Mn(), Se = Sr(), Ce = "__core-js_shared__", je = me[Ce] || Se(Ce, {});
      Ae.exports = je;
    }), En = pe((ot, Ae) => {
      var me = Mr(), Se = sn();
      (Ae.exports = function(Ce, je) {
        return Se[Ce] || (Se[Ce] = je !== void 0 ? je : {});
      })("versions", []).push({ version: "3.26.1", mode: me ? "pure" : "global", copyright: "© 2014-2022 Denis Pushkarev (zloirock.ru)", license: "https://github.com/zloirock/core-js/blob/v3.26.1/LICENSE", source: "https://github.com/zloirock/core-js" });
    }), Je = pe((ot, Ae) => {
      var me = Fr(), Se = Object;
      Ae.exports = function(Ce) {
        return Se(me(Ce));
      };
    }), At = pe((ot, Ae) => {
      var me = Fn(), Se = Je(), Ce = me({}.hasOwnProperty);
      Ae.exports = Object.hasOwn || function(je, Ge) {
        return Ce(Se(je), Ge);
      };
    }), de = pe((ot, Ae) => {
      var me = Fn(), Se = 0, Ce = Math.random(), je = me(1 .toString);
      Ae.exports = function(Ge) {
        return "Symbol(" + (Ge === void 0 ? "" : Ge) + ")_" + je(++Se + Ce, 36);
      };
    }), Qe = pe((ot, Ae) => {
      var me = Mn(), Se = En(), Ce = At(), je = de(), Ge = Dr(), rt = gr(), He = Se("wks"), ut = me.Symbol, kt = ut && ut.for, Pt = rt ? ut : ut && ut.withoutSetter || je;
      Ae.exports = function(vt) {
        if (!Ce(He, vt) || !(Ge || typeof He[vt] == "string")) {
          var bt = "Symbol." + vt;
          Ge && Ce(ut, vt) ? He[vt] = ut[vt] : rt && kt ? He[vt] = kt(bt) : He[vt] = Pt(bt);
        }
        return He[vt];
      };
    }), $t = pe((ot, Ae) => {
      var me = zn(), Se = Gn(), Ce = Or(), je = xr(), Ge = Ar(), rt = Qe(), He = TypeError, ut = rt("toPrimitive");
      Ae.exports = function(kt, Pt) {
        if (!Se(kt) || Ce(kt))
          return kt;
        var vt = je(kt, ut), bt;
        if (vt) {
          if (Pt === void 0 && (Pt = "default"), bt = me(vt, kt, Pt), !Se(bt) || Ce(bt))
            return bt;
          throw He("Can't convert object to primitive value");
        }
        return Pt === void 0 && (Pt = "number"), Ge(kt, Pt);
      };
    }), Dn = pe((ot, Ae) => {
      var me = $t(), Se = Or();
      Ae.exports = function(Ce) {
        var je = me(Ce, "string");
        return Se(je) ? je : je + "";
      };
    }), Ht = pe((ot, Ae) => {
      var me = Mn(), Se = Gn(), Ce = me.document, je = Se(Ce) && Se(Ce.createElement);
      Ae.exports = function(Ge) {
        return je ? Ce.createElement(Ge) : {};
      };
    }), kn = pe((ot, Ae) => {
      var me = _n(), Se = Cn(), Ce = Ht();
      Ae.exports = !me && !Se(function() {
        return Object.defineProperty(Ce("div"), "a", { get: function() {
          return 7;
        } }).a != 7;
      });
    }), Nn = pe((ot) => {
      var Ae = _n(), me = zn(), Se = Xt(), Ce = cn(), je = On(), Ge = Dn(), rt = At(), He = kn(), ut = Object.getOwnPropertyDescriptor;
      ot.f = Ae ? ut : function(kt, Pt) {
        if (kt = je(kt), Pt = Ge(Pt), He)
          try {
            return ut(kt, Pt);
          } catch {
          }
        if (rt(kt, Pt))
          return Ce(!me(Se.f, kt, Pt), kt[Pt]);
      };
    }), Pn = pe((ot, Ae) => {
      var me = _n(), Se = Cn();
      Ae.exports = me && Se(function() {
        return Object.defineProperty(function() {
        }, "prototype", { value: 42, writable: !1 }).prototype != 42;
      });
    }), Le = pe((ot, Ae) => {
      var me = Gn(), Se = String, Ce = TypeError;
      Ae.exports = function(je) {
        if (me(je))
          return je;
        throw Ce(Se(je) + " is not an object");
      };
    }), it = pe((ot) => {
      var Ae = _n(), me = kn(), Se = Pn(), Ce = Le(), je = Dn(), Ge = TypeError, rt = Object.defineProperty, He = Object.getOwnPropertyDescriptor, ut = "enumerable", kt = "configurable", Pt = "writable";
      ot.f = Ae ? Se ? function(vt, bt, ee) {
        if (Ce(vt), bt = je(bt), Ce(ee), typeof vt == "function" && bt === "prototype" && "value" in ee && Pt in ee && !ee[Pt]) {
          var zt = He(vt, bt);
          zt && zt[Pt] && (vt[bt] = ee.value, ee = { configurable: kt in ee ? ee[kt] : zt[kt], enumerable: ut in ee ? ee[ut] : zt[ut], writable: !1 });
        }
        return rt(vt, bt, ee);
      } : rt : function(vt, bt, ee) {
        if (Ce(vt), bt = je(bt), Ce(ee), me)
          try {
            return rt(vt, bt, ee);
          } catch {
          }
        if ("get" in ee || "set" in ee)
          throw Ge("Accessors not supported");
        return "value" in ee && (vt[bt] = ee.value), vt;
      };
    }), We = pe((ot, Ae) => {
      var me = _n(), Se = it(), Ce = cn();
      Ae.exports = me ? function(je, Ge, rt) {
        return Se.f(je, Ge, Ce(1, rt));
      } : function(je, Ge, rt) {
        return je[Ge] = rt, je;
      };
    }), Ye = pe((ot, Ae) => {
      var me = _n(), Se = At(), Ce = Function.prototype, je = me && Object.getOwnPropertyDescriptor, Ge = Se(Ce, "name"), rt = Ge && function() {
      }.name === "something", He = Ge && (!me || me && je(Ce, "name").configurable);
      Ae.exports = { EXISTS: Ge, PROPER: rt, CONFIGURABLE: He };
    }), Ve = pe((ot, Ae) => {
      var me = Fn(), Se = Wn(), Ce = sn(), je = me(Function.toString);
      Se(Ce.inspectSource) || (Ce.inspectSource = function(Ge) {
        return je(Ge);
      }), Ae.exports = Ce.inspectSource;
    }), Lt = pe((ot, Ae) => {
      var me = Mn(), Se = Wn(), Ce = me.WeakMap;
      Ae.exports = Se(Ce) && /native code/.test(String(Ce));
    }), Ot = pe((ot, Ae) => {
      var me = En(), Se = de(), Ce = me("keys");
      Ae.exports = function(je) {
        return Ce[je] || (Ce[je] = Se(je));
      };
    }), Wt = pe((ot, Ae) => {
      Ae.exports = {};
    }), gn = pe((ot, Ae) => {
      var me = Lt(), Se = Mn(), Ce = Gn(), je = We(), Ge = At(), rt = sn(), He = Ot(), ut = Wt(), kt = "Object already initialized", Pt = Se.TypeError, vt = Se.WeakMap, bt, ee, zt, un = function(ne) {
        return zt(ne) ? ee(ne) : bt(ne, {});
      }, Tn = function(ne) {
        return function($r) {
          var kr;
          if (!Ce($r) || (kr = ee($r)).type !== ne)
            throw Pt("Incompatible receiver, " + ne + " required");
          return kr;
        };
      };
      me || rt.state ? (vn = rt.state || (rt.state = new vt()), vn.get = vn.get, vn.has = vn.has, vn.set = vn.set, bt = function(ne, $r) {
        if (vn.has(ne))
          throw Pt(kt);
        return $r.facade = ne, vn.set(ne, $r), $r;
      }, ee = function(ne) {
        return vn.get(ne) || {};
      }, zt = function(ne) {
        return vn.has(ne);
      }) : (Jn = He("state"), ut[Jn] = !0, bt = function(ne, $r) {
        if (Ge(ne, Jn))
          throw Pt(kt);
        return $r.facade = ne, je(ne, Jn, $r), $r;
      }, ee = function(ne) {
        return Ge(ne, Jn) ? ne[Jn] : {};
      }, zt = function(ne) {
        return Ge(ne, Jn);
      });
      var vn, Jn;
      Ae.exports = { set: bt, get: ee, has: zt, enforce: un, getterFor: Tn };
    }), An = pe((ot, Ae) => {
      var me = Cn(), Se = Wn(), Ce = At(), je = _n(), Ge = Ye().CONFIGURABLE, rt = Ve(), He = gn(), ut = He.enforce, kt = He.get, Pt = Object.defineProperty, vt = je && !me(function() {
        return Pt(function() {
        }, "length", { value: 8 }).length !== 8;
      }), bt = String(String).split("String"), ee = Ae.exports = function(zt, un, Tn) {
        String(un).slice(0, 7) === "Symbol(" && (un = "[" + String(un).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), Tn && Tn.getter && (un = "get " + un), Tn && Tn.setter && (un = "set " + un), (!Ce(zt, "name") || Ge && zt.name !== un) && (je ? Pt(zt, "name", { value: un, configurable: !0 }) : zt.name = un), vt && Tn && Ce(Tn, "arity") && zt.length !== Tn.arity && Pt(zt, "length", { value: Tn.arity });
        try {
          Tn && Ce(Tn, "constructor") && Tn.constructor ? je && Pt(zt, "prototype", { writable: !1 }) : zt.prototype && (zt.prototype = void 0);
        } catch {
        }
        var vn = ut(zt);
        return Ce(vn, "source") || (vn.source = bt.join(typeof un == "string" ? un : "")), zt;
      };
      Function.prototype.toString = ee(function() {
        return Se(this) && kt(this).source || rt(this);
      }, "toString");
    }), rn = pe((ot, Ae) => {
      var me = Wn(), Se = it(), Ce = An(), je = Sr();
      Ae.exports = function(Ge, rt, He, ut) {
        ut || (ut = {});
        var kt = ut.enumerable, Pt = ut.name !== void 0 ? ut.name : rt;
        if (me(He) && Ce(He, Pt, ut), ut.global)
          kt ? Ge[rt] = He : je(rt, He);
        else {
          try {
            ut.unsafe ? Ge[rt] && (kt = !0) : delete Ge[rt];
          } catch {
          }
          kt ? Ge[rt] = He : Se.f(Ge, rt, { value: He, enumerable: !1, configurable: !ut.nonConfigurable, writable: !ut.nonWritable });
        }
        return Ge;
      };
    }), hn = pe((ot, Ae) => {
      var me = Math.ceil, Se = Math.floor;
      Ae.exports = Math.trunc || function(Ce) {
        var je = +Ce;
        return (je > 0 ? Se : me)(je);
      };
    }), Sn = pe((ot, Ae) => {
      var me = hn();
      Ae.exports = function(Se) {
        var Ce = +Se;
        return Ce !== Ce || Ce === 0 ? 0 : me(Ce);
      };
    }), Ft = pe((ot, Ae) => {
      var me = Sn(), Se = Math.max, Ce = Math.min;
      Ae.exports = function(je, Ge) {
        var rt = me(je);
        return rt < 0 ? Se(rt + Ge, 0) : Ce(rt, Ge);
      };
    }), tn = pe((ot, Ae) => {
      var me = Sn(), Se = Math.min;
      Ae.exports = function(Ce) {
        return Ce > 0 ? Se(me(Ce), 9007199254740991) : 0;
      };
    }), et = pe((ot, Ae) => {
      var me = tn();
      Ae.exports = function(Se) {
        return me(Se.length);
      };
    }), be = pe((ot, Ae) => {
      var me = On(), Se = Ft(), Ce = et(), je = function(Ge) {
        return function(rt, He, ut) {
          var kt = me(rt), Pt = Ce(kt), vt = Se(ut, Pt), bt;
          if (Ge && He != He) {
            for (; Pt > vt; )
              if (bt = kt[vt++], bt != bt)
                return !0;
          } else
            for (; Pt > vt; vt++)
              if ((Ge || vt in kt) && kt[vt] === He)
                return Ge || vt || 0;
          return !Ge && -1;
        };
      };
      Ae.exports = { includes: je(!0), indexOf: je(!1) };
    }), Me = pe((ot, Ae) => {
      var me = Fn(), Se = At(), Ce = On(), je = be().indexOf, Ge = Wt(), rt = me([].push);
      Ae.exports = function(He, ut) {
        var kt = Ce(He), Pt = 0, vt = [], bt;
        for (bt in kt)
          !Se(Ge, bt) && Se(kt, bt) && rt(vt, bt);
        for (; ut.length > Pt; )
          Se(kt, bt = ut[Pt++]) && (~je(vt, bt) || rt(vt, bt));
        return vt;
      };
    }), Dt = pe((ot, Ae) => {
      Ae.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"];
    }), Re = pe((ot) => {
      var Ae = Me(), me = Dt(), Se = me.concat("length", "prototype");
      ot.f = Object.getOwnPropertyNames || function(Ce) {
        return Ae(Ce, Se);
      };
    }), xt = pe((ot) => {
      ot.f = Object.getOwnPropertySymbols;
    }), Zt = pe((ot, Ae) => {
      var me = cr(), Se = Fn(), Ce = Re(), je = xt(), Ge = Le(), rt = Se([].concat);
      Ae.exports = me("Reflect", "ownKeys") || function(He) {
        var ut = Ce.f(Ge(He)), kt = je.f;
        return kt ? rt(ut, kt(He)) : ut;
      };
    }), yt = pe((ot, Ae) => {
      var me = At(), Se = Zt(), Ce = Nn(), je = it();
      Ae.exports = function(Ge, rt, He) {
        for (var ut = Se(rt), kt = je.f, Pt = Ce.f, vt = 0; vt < ut.length; vt++) {
          var bt = ut[vt];
          !me(Ge, bt) && !(He && me(He, bt)) && kt(Ge, bt, Pt(rt, bt));
        }
      };
    }), Bt = pe((ot, Ae) => {
      var me = Cn(), Se = Wn(), Ce = /#|\.prototype\./, je = function(kt, Pt) {
        var vt = rt[Ge(kt)];
        return vt == ut ? !0 : vt == He ? !1 : Se(Pt) ? me(Pt) : !!Pt;
      }, Ge = je.normalize = function(kt) {
        return String(kt).replace(Ce, ".").toLowerCase();
      }, rt = je.data = {}, He = je.NATIVE = "N", ut = je.POLYFILL = "P";
      Ae.exports = je;
    }), Xe = pe((ot, Ae) => {
      var me = Mn(), Se = Nn().f, Ce = We(), je = rn(), Ge = Sr(), rt = yt(), He = Bt();
      Ae.exports = function(ut, kt) {
        var Pt = ut.target, vt = ut.global, bt = ut.stat, ee, zt, un, Tn, vn, Jn;
        if (vt ? zt = me : bt ? zt = me[Pt] || Ge(Pt, {}) : zt = (me[Pt] || {}).prototype, zt)
          for (un in kt) {
            if (vn = kt[un], ut.dontCallGetSet ? (Jn = Se(zt, un), Tn = Jn && Jn.value) : Tn = zt[un], ee = He(vt ? un : Pt + (bt ? "." : "#") + un, ut.forced), !ee && Tn !== void 0) {
              if (typeof vn == typeof Tn)
                continue;
              rt(vn, Tn);
            }
            (ut.sham || Tn && Tn.sham) && Ce(vn, "sham", !0), je(zt, un, vn, ut);
          }
      };
    }), Et = pe((ot, Ae) => {
      var me = Rn();
      Ae.exports = Array.isArray || function(Se) {
        return me(Se) == "Array";
      };
    }), lt = pe((ot, Ae) => {
      var me = TypeError, Se = 9007199254740991;
      Ae.exports = function(Ce) {
        if (Ce > Se)
          throw me("Maximum allowed index exceeded");
        return Ce;
      };
    }), wt = pe((ot, Ae) => {
      var me = Rn(), Se = Fn();
      Ae.exports = function(Ce) {
        if (me(Ce) === "Function")
          return Se(Ce);
      };
    }), pn = pe((ot, Ae) => {
      var me = wt(), Se = Jr(), Ce = Yn(), je = me(me.bind);
      Ae.exports = function(Ge, rt) {
        return Se(Ge), rt === void 0 ? Ge : Ce ? je(Ge, rt) : function() {
          return Ge.apply(rt, arguments);
        };
      };
    }), ar = pe((ot, Ae) => {
      var me = Et(), Se = et(), Ce = lt(), je = pn(), Ge = function(rt, He, ut, kt, Pt, vt, bt, ee) {
        for (var zt = Pt, un = 0, Tn = bt ? je(bt, ee) : !1, vn, Jn; un < kt; )
          un in ut && (vn = Tn ? Tn(ut[un], un, He) : ut[un], vt > 0 && me(vn) ? (Jn = Se(vn), zt = Ge(rt, He, vn, Jn, zt, vt - 1) - 1) : (Ce(zt + 1), rt[zt] = vn), zt++), un++;
        return zt;
      };
      Ae.exports = Ge;
    }), Rr = pe((ot, Ae) => {
      var me = Qe(), Se = me("toStringTag"), Ce = {};
      Ce[Se] = "z", Ae.exports = String(Ce) === "[object z]";
    }), Ti = pe((ot, Ae) => {
      var me = Rr(), Se = Wn(), Ce = Rn(), je = Qe(), Ge = je("toStringTag"), rt = Object, He = Ce(function() {
        return arguments;
      }()) == "Arguments", ut = function(kt, Pt) {
        try {
          return kt[Pt];
        } catch {
        }
      };
      Ae.exports = me ? Ce : function(kt) {
        var Pt, vt, bt;
        return kt === void 0 ? "Undefined" : kt === null ? "Null" : typeof (vt = ut(Pt = rt(kt), Ge)) == "string" ? vt : He ? Ce(Pt) : (bt = Ce(Pt)) == "Object" && Se(Pt.callee) ? "Arguments" : bt;
      };
    }), ai = pe((ot, Ae) => {
      var me = Fn(), Se = Cn(), Ce = Wn(), je = Ti(), Ge = cr(), rt = Ve(), He = function() {
      }, ut = [], kt = Ge("Reflect", "construct"), Pt = /^\s*(?:class|function)\b/, vt = me(Pt.exec), bt = !Pt.exec(He), ee = function(un) {
        if (!Ce(un))
          return !1;
        try {
          return kt(He, ut, un), !0;
        } catch {
          return !1;
        }
      }, zt = function(un) {
        if (!Ce(un))
          return !1;
        switch (je(un)) {
          case "AsyncFunction":
          case "GeneratorFunction":
          case "AsyncGeneratorFunction":
            return !1;
        }
        try {
          return bt || !!vt(Pt, rt(un));
        } catch {
          return !0;
        }
      };
      zt.sham = !0, Ae.exports = !kt || Se(function() {
        var un;
        return ee(ee.call) || !ee(Object) || !ee(function() {
          un = !0;
        }) || un;
      }) ? zt : ee;
    }), vu = pe((ot, Ae) => {
      var me = Et(), Se = ai(), Ce = Gn(), je = Qe(), Ge = je("species"), rt = Array;
      Ae.exports = function(He) {
        var ut;
        return me(He) && (ut = He.constructor, Se(ut) && (ut === rt || me(ut.prototype)) ? ut = void 0 : Ce(ut) && (ut = ut[Ge], ut === null && (ut = void 0))), ut === void 0 ? rt : ut;
      };
    }), pu = pe((ot, Ae) => {
      var me = vu();
      Ae.exports = function(Se, Ce) {
        return new (me(Se))(Ce === 0 ? 0 : Ce);
      };
    }), wi = pe(() => {
      var ot = Xe(), Ae = ar(), me = Jr(), Se = Je(), Ce = et(), je = pu();
      ot({ target: "Array", proto: !0 }, { flatMap: function(Ge) {
        var rt = Se(this), He = Ce(rt), ut;
        return me(Ge), ut = je(rt, 0), ut.length = Ae(ut, rt, rt, He, 0, 1, Ge, arguments.length > 1 ? arguments[1] : void 0), ut;
      } });
    }), du = pe((ot, Ae) => {
      Ae.exports = {};
    }), fu = pe((ot, Ae) => {
      var me = Qe(), Se = du(), Ce = me("iterator"), je = Array.prototype;
      Ae.exports = function(Ge) {
        return Ge !== void 0 && (Se.Array === Ge || je[Ce] === Ge);
      };
    }), si = pe((ot, Ae) => {
      var me = Ti(), Se = xr(), Ce = Cr(), je = du(), Ge = Qe(), rt = Ge("iterator");
      Ae.exports = function(He) {
        if (!Ce(He))
          return Se(He, rt) || Se(He, "@@iterator") || je[me(He)];
      };
    }), ki = pe((ot, Ae) => {
      var me = zn(), Se = Jr(), Ce = Le(), je = Pr(), Ge = si(), rt = TypeError;
      Ae.exports = function(He, ut) {
        var kt = arguments.length < 2 ? Ge(He) : ut;
        if (Se(kt))
          return Ce(me(kt, He));
        throw rt(je(He) + " is not iterable");
      };
    }), Cu = pe((ot, Ae) => {
      var me = zn(), Se = Le(), Ce = xr();
      Ae.exports = function(je, Ge, rt) {
        var He, ut;
        Se(je);
        try {
          if (He = Ce(je, "return"), !He) {
            if (Ge === "throw")
              throw rt;
            return rt;
          }
          He = me(He, je);
        } catch (kt) {
          ut = !0, He = kt;
        }
        if (Ge === "throw")
          throw rt;
        if (ut)
          throw He;
        return Se(He), rt;
      };
    }), li = pe((ot, Ae) => {
      var me = pn(), Se = zn(), Ce = Le(), je = Pr(), Ge = fu(), rt = et(), He = Hn(), ut = ki(), kt = si(), Pt = Cu(), vt = TypeError, bt = function(zt, un) {
        this.stopped = zt, this.result = un;
      }, ee = bt.prototype;
      Ae.exports = function(zt, un, Tn) {
        var vn = Tn && Tn.that, Jn = !!(Tn && Tn.AS_ENTRIES), ne = !!(Tn && Tn.IS_RECORD), $r = !!(Tn && Tn.IS_ITERATOR), kr = !!(Tn && Tn.INTERRUPTED), bi = me(un, vn), nu, Gu, sr, ci, Vr, pi, Ro, $o = function(Kr) {
          return nu && Pt(nu, "normal", Kr), new bt(!0, Kr);
        }, Bi = function(Kr) {
          return Jn ? (Ce(Kr), kr ? bi(Kr[0], Kr[1], $o) : bi(Kr[0], Kr[1])) : kr ? bi(Kr, $o) : bi(Kr);
        };
        if (ne)
          nu = zt.iterator;
        else if ($r)
          nu = zt;
        else {
          if (Gu = kt(zt), !Gu)
            throw vt(je(zt) + " is not iterable");
          if (Ge(Gu)) {
            for (sr = 0, ci = rt(zt); ci > sr; sr++)
              if (Vr = Bi(zt[sr]), Vr && He(ee, Vr))
                return Vr;
            return new bt(!1);
          }
          nu = ut(zt, Gu);
        }
        for (pi = ne ? zt.next : nu.next; !(Ro = Se(pi, nu)).done; ) {
          try {
            Vr = Bi(Ro.value);
          } catch (Kr) {
            Pt(nu, "throw", Kr);
          }
          if (typeof Vr == "object" && Vr && He(ee, Vr))
            return Vr;
        }
        return new bt(!1);
      };
    }), Fu = pe((ot, Ae) => {
      var me = Dn(), Se = it(), Ce = cn();
      Ae.exports = function(je, Ge, rt) {
        var He = me(Ge);
        He in je ? Se.f(je, He, Ce(0, rt)) : je[He] = rt;
      };
    }), Ni = pe(() => {
      var ot = Xe(), Ae = li(), me = Fu();
      ot({ target: "Object", stat: !0 }, { fromEntries: function(Se) {
        var Ce = {};
        return Ae(Se, function(je, Ge) {
          me(Ce, je, Ge);
        }, { AS_ENTRIES: !0 }), Ce;
      } });
    }), Xr = pe((ot, Ae) => {
      var me = An(), Se = it();
      Ae.exports = function(Ce, je, Ge) {
        return Ge.get && me(Ge.get, je, { getter: !0 }), Ge.set && me(Ge.set, je, { setter: !0 }), Se.f(Ce, je, Ge);
      };
    }), Uu = pe((ot, Ae) => {
      var me = Le();
      Ae.exports = function() {
        var Se = me(this), Ce = "";
        return Se.hasIndices && (Ce += "d"), Se.global && (Ce += "g"), Se.ignoreCase && (Ce += "i"), Se.multiline && (Ce += "m"), Se.dotAll && (Ce += "s"), Se.unicode && (Ce += "u"), Se.unicodeSets && (Ce += "v"), Se.sticky && (Ce += "y"), Ce;
      };
    }), po = pe(() => {
      var ot = Mn(), Ae = _n(), me = Xr(), Se = Uu(), Ce = Cn(), je = ot.RegExp, Ge = je.prototype, rt = Ae && Ce(function() {
        var He = !0;
        try {
          je(".", "d");
        } catch {
          He = !1;
        }
        var ut = {}, kt = "", Pt = He ? "dgimsy" : "gimsy", vt = function(un, Tn) {
          Object.defineProperty(ut, un, { get: function() {
            return kt += Tn, !0;
          } });
        }, bt = { dotAll: "s", global: "g", ignoreCase: "i", multiline: "m", sticky: "y" };
        He && (bt.hasIndices = "d");
        for (var ee in bt)
          vt(ee, bt[ee]);
        var zt = Object.getOwnPropertyDescriptor(Ge, "flags").get.call(ut);
        return zt !== Pt || kt !== Pt;
      });
      rt && me(Ge, "flags", { configurable: !0, get: Se });
    }), Oo = pe(() => {
      var ot = Xe(), Ae = Mn();
      ot({ global: !0, forced: Ae.globalThis !== Ae }, { globalThis: Ae });
    }), Mo = pe(() => {
      Oo();
    }), ka = pe(() => {
      var ot = Xe(), Ae = ar(), me = Je(), Se = et(), Ce = Sn(), je = pu();
      ot({ target: "Array", proto: !0 }, { flat: function() {
        var Ge = arguments.length ? arguments[0] : void 0, rt = me(this), He = Se(rt), ut = je(rt, 0);
        return ut.length = Ae(ut, rt, rt, He, 0, Ge === void 0 ? 1 : Ce(Ge)), ut;
      } });
    }), Vl = pe((ot, Ae) => {
      var me = ["cliName", "cliCategory", "cliDescription"], Se = ["_"], Ce = ["languageId"];
      function je(l, m) {
        if (l == null)
          return {};
        var i = Ge(l, m), d, p;
        if (Object.getOwnPropertySymbols) {
          var u = Object.getOwnPropertySymbols(l);
          for (p = 0; p < u.length; p++)
            d = u[p], !(m.indexOf(d) >= 0) && Object.prototype.propertyIsEnumerable.call(l, d) && (i[d] = l[d]);
        }
        return i;
      }
      function Ge(l, m) {
        if (l == null)
          return {};
        var i = {}, d = Object.keys(l), p, u;
        for (u = 0; u < d.length; u++)
          p = d[u], !(m.indexOf(p) >= 0) && (i[p] = l[p]);
        return i;
      }
      wi(), Ni(), po(), Mo(), ka();
      var rt = Object.create, He = Object.defineProperty, ut = Object.getOwnPropertyDescriptor, kt = Object.getOwnPropertyNames, Pt = Object.getPrototypeOf, vt = Object.prototype.hasOwnProperty, bt = (l, m) => function() {
        return l && (m = (0, l[kt(l)[0]])(l = 0)), m;
      }, ee = (l, m) => function() {
        return m || (0, l[kt(l)[0]])((m = { exports: {} }).exports, m), m.exports;
      }, zt = (l, m) => {
        for (var i in m)
          He(l, i, { get: m[i], enumerable: !0 });
      }, un = (l, m, i, d) => {
        if (m && typeof m == "object" || typeof m == "function")
          for (let p of kt(m))
            !vt.call(l, p) && p !== i && He(l, p, { get: () => m[p], enumerable: !(d = ut(m, p)) || d.enumerable });
        return l;
      }, Tn = (l, m, i) => (i = l != null ? rt(Pt(l)) : {}, un(m || !l || !l.__esModule ? He(i, "default", { value: l, enumerable: !0 }) : i, l)), vn = (l) => un(He({}, "__esModule", { value: !0 }), l), Jn, ne = bt({ "<define:process>"() {
        Jn = { env: {}, argv: [] };
      } }), $r = ee({ "package.json"(l, m) {
        m.exports = { version: "2.8.8" };
      } }), kr = ee({ "node_modules/diff/lib/diff/base.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 }), l.default = m;
        function m() {
        }
        m.prototype = { diff: function(p, u) {
          var o = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, a = o.callback;
          typeof o == "function" && (a = o, o = {}), this.options = o;
          var f = this;
          function g(k) {
            return a ? (setTimeout(function() {
              a(void 0, k);
            }, 0), !0) : k;
          }
          p = this.castInput(p), u = this.castInput(u), p = this.removeEmpty(this.tokenize(p)), u = this.removeEmpty(this.tokenize(u));
          var x = u.length, C = p.length, A = 1, D = x + C, y = [{ newPos: -1, components: [] }], T = this.extractCommon(y[0], u, p, 0);
          if (y[0].newPos + 1 >= x && T + 1 >= C)
            return g([{ value: this.join(u), count: u.length }]);
          function j() {
            for (var k = -1 * A; k <= A; k += 2) {
              var L = void 0, _ = y[k - 1], R = y[k + 1], O = (R ? R.newPos : 0) - k;
              _ && (y[k - 1] = void 0);
              var Q = _ && _.newPos + 1 < x, v = R && 0 <= O && O < C;
              if (!Q && !v) {
                y[k] = void 0;
                continue;
              }
              if (!Q || v && _.newPos < R.newPos ? (L = d(R), f.pushComponent(L.components, void 0, !0)) : (L = _, L.newPos++, f.pushComponent(L.components, !0, void 0)), O = f.extractCommon(L, u, p, k), L.newPos + 1 >= x && O + 1 >= C)
                return g(i(f, L.components, u, p, f.useLongestToken));
              y[k] = L;
            }
            A++;
          }
          if (a)
            (function k() {
              setTimeout(function() {
                if (A > D)
                  return a();
                j() || k();
              }, 0);
            })();
          else
            for (; A <= D; ) {
              var M = j();
              if (M)
                return M;
            }
        }, pushComponent: function(p, u, o) {
          var a = p[p.length - 1];
          a && a.added === u && a.removed === o ? p[p.length - 1] = { count: a.count + 1, added: u, removed: o } : p.push({ count: 1, added: u, removed: o });
        }, extractCommon: function(p, u, o, a) {
          for (var f = u.length, g = o.length, x = p.newPos, C = x - a, A = 0; x + 1 < f && C + 1 < g && this.equals(u[x + 1], o[C + 1]); )
            x++, C++, A++;
          return A && p.components.push({ count: A }), p.newPos = x, C;
        }, equals: function(p, u) {
          return this.options.comparator ? this.options.comparator(p, u) : p === u || this.options.ignoreCase && p.toLowerCase() === u.toLowerCase();
        }, removeEmpty: function(p) {
          for (var u = [], o = 0; o < p.length; o++)
            p[o] && u.push(p[o]);
          return u;
        }, castInput: function(p) {
          return p;
        }, tokenize: function(p) {
          return p.split("");
        }, join: function(p) {
          return p.join("");
        } };
        function i(p, u, o, a, f) {
          for (var g = 0, x = u.length, C = 0, A = 0; g < x; g++) {
            var D = u[g];
            if (D.removed) {
              if (D.value = p.join(a.slice(A, A + D.count)), A += D.count, g && u[g - 1].added) {
                var y = u[g - 1];
                u[g - 1] = u[g], u[g] = y;
              }
            } else {
              if (!D.added && f) {
                var T = o.slice(C, C + D.count);
                T = T.map(function(M, k) {
                  var L = a[A + k];
                  return L.length > M.length ? L : M;
                }), D.value = p.join(T);
              } else
                D.value = p.join(o.slice(C, C + D.count));
              C += D.count, D.added || (A += D.count);
            }
          }
          var j = u[x - 1];
          return x > 1 && typeof j.value == "string" && (j.added || j.removed) && p.equals("", j.value) && (u[x - 2].value += j.value, u.pop()), u;
        }
        function d(p) {
          return { newPos: p.newPos, components: p.components.slice(0) };
        }
      } }), bi = ee({ "node_modules/diff/lib/diff/array.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 }), l.diffArrays = p, l.arrayDiff = void 0;
        var m = i(kr());
        function i(u) {
          return u && u.__esModule ? u : { default: u };
        }
        var d = new m.default();
        l.arrayDiff = d, d.tokenize = function(u) {
          return u.slice();
        }, d.join = d.removeEmpty = function(u) {
          return u;
        };
        function p(u, o, a) {
          return d.diff(u, o, a);
        }
      } }), nu = ee({ "src/document/doc-builders.js"(l, m) {
        ne();
        function i(w) {
          return { type: "concat", parts: w };
        }
        function d(w) {
          return { type: "indent", contents: w };
        }
        function p(w, c) {
          return { type: "align", contents: c, n: w };
        }
        function u(w) {
          let c = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
          return { type: "group", id: c.id, contents: w, break: !!c.shouldBreak, expandedStates: c.expandedStates };
        }
        function o(w) {
          return p(Number.NEGATIVE_INFINITY, w);
        }
        function a(w) {
          return p({ type: "root" }, w);
        }
        function f(w) {
          return p(-1, w);
        }
        function g(w, c) {
          return u(w[0], Object.assign(Object.assign({}, c), {}, { expandedStates: w }));
        }
        function x(w) {
          return { type: "fill", parts: w };
        }
        function C(w, c) {
          let F = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return { type: "if-break", breakContents: w, flatContents: c, groupId: F.groupId };
        }
        function A(w, c) {
          return { type: "indent-if-break", contents: w, groupId: c.groupId, negate: c.negate };
        }
        function D(w) {
          return { type: "line-suffix", contents: w };
        }
        var y = { type: "line-suffix-boundary" }, T = { type: "break-parent" }, j = { type: "trim" }, M = { type: "line", hard: !0 }, k = { type: "line", hard: !0, literal: !0 }, L = { type: "line" }, _ = { type: "line", soft: !0 }, R = i([M, T]), O = i([k, T]), Q = { type: "cursor", placeholder: Symbol("cursor") };
        function v(w, c) {
          let F = [];
          for (let S = 0; S < c.length; S++)
            S !== 0 && F.push(w), F.push(c[S]);
          return i(F);
        }
        function P(w, c, F) {
          let S = w;
          if (c > 0) {
            for (let b = 0; b < Math.floor(c / F); ++b)
              S = d(S);
            S = p(c % F, S), S = p(Number.NEGATIVE_INFINITY, S);
          }
          return S;
        }
        function E(w, c) {
          return { type: "label", label: w, contents: c };
        }
        m.exports = { concat: i, join: v, line: L, softline: _, hardline: R, literalline: O, group: u, conditionalGroup: g, fill: x, lineSuffix: D, lineSuffixBoundary: y, cursor: Q, breakParent: T, ifBreak: C, trim: j, indent: d, indentIfBreak: A, align: p, addAlignmentToDoc: P, markAsRoot: a, dedentToRoot: o, dedent: f, hardlineWithoutBreakParent: M, literallineWithoutBreakParent: k, label: E };
      } }), Gu = ee({ "src/common/end-of-line.js"(l, m) {
        ne();
        function i(o) {
          let a = o.indexOf("\r");
          return a >= 0 ? o.charAt(a + 1) === `
` ? "crlf" : "cr" : "lf";
        }
        function d(o) {
          switch (o) {
            case "cr":
              return "\r";
            case "crlf":
              return `\r
`;
            default:
              return `
`;
          }
        }
        function p(o, a) {
          let f;
          switch (a) {
            case `
`:
              f = /\n/g;
              break;
            case "\r":
              f = /\r/g;
              break;
            case `\r
`:
              f = /\r\n/g;
              break;
            default:
              throw new Error(`Unexpected "eol" ${JSON.stringify(a)}.`);
          }
          let g = o.match(f);
          return g ? g.length : 0;
        }
        function u(o) {
          return o.replace(/\r\n?/g, `
`);
        }
        m.exports = { guessEndOfLine: i, convertEndOfLineToChars: d, countEndOfLineChars: p, normalizeEndOfLine: u };
      } }), sr = ee({ "src/utils/get-last.js"(l, m) {
        ne();
        var i = (d) => d[d.length - 1];
        m.exports = i;
      } });
      function ci() {
        let { onlyFirst: l = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, m = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-ntqry=><~]))"].join("|");
        return new RegExp(m, l ? void 0 : "g");
      }
      var Vr = bt({ "node_modules/strip-ansi/node_modules/ansi-regex/index.js"() {
        ne();
      } });
      function pi(l) {
        if (typeof l != "string")
          throw new TypeError(`Expected a \`string\`, got \`${typeof l}\``);
        return l.replace(ci(), "");
      }
      var Ro = bt({ "node_modules/strip-ansi/index.js"() {
        ne(), Vr();
      } });
      function $o(l) {
        return Number.isInteger(l) ? l >= 4352 && (l <= 4447 || l === 9001 || l === 9002 || 11904 <= l && l <= 12871 && l !== 12351 || 12880 <= l && l <= 19903 || 19968 <= l && l <= 42182 || 43360 <= l && l <= 43388 || 44032 <= l && l <= 55203 || 63744 <= l && l <= 64255 || 65040 <= l && l <= 65049 || 65072 <= l && l <= 65131 || 65281 <= l && l <= 65376 || 65504 <= l && l <= 65510 || 110592 <= l && l <= 110593 || 127488 <= l && l <= 127569 || 131072 <= l && l <= 262141) : !1;
      }
      var Bi = bt({ "node_modules/is-fullwidth-code-point/index.js"() {
        ne();
      } }), Kr = ee({ "node_modules/emoji-regex/index.js"(l, m) {
        ne(), m.exports = function() {
          return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
        };
      } }), Vo = {};
      zt(Vo, { default: () => fo });
      function fo(l) {
        if (typeof l != "string" || l.length === 0 || (l = pi(l), l.length === 0))
          return 0;
        l = l.replace((0, bs.default)(), "  ");
        let m = 0;
        for (let i = 0; i < l.length; i++) {
          let d = l.codePointAt(i);
          d <= 31 || d >= 127 && d <= 159 || d >= 768 && d <= 879 || (d > 65535 && i++, m += $o(d) ? 2 : 1);
        }
        return m;
      }
      var bs, Na = bt({ "node_modules/string-width/index.js"() {
        ne(), Ro(), Bi(), bs = Tn(Kr());
      } }), $n = ee({ "src/utils/get-string-width.js"(l, m) {
        ne();
        var i = (Na(), vn(Vo)).default, d = /[^\x20-\x7F]/;
        function p(u) {
          return u ? d.test(u) ? i(u) : u.length : 0;
        }
        m.exports = p;
      } }), _i = ee({ "src/document/doc-utils.js"(l, m) {
        ne();
        var i = sr(), { literalline: d, join: p } = nu(), u = (c) => Array.isArray(c) || c && c.type === "concat", o = (c) => {
          if (Array.isArray(c))
            return c;
          if (c.type !== "concat" && c.type !== "fill")
            throw new Error("Expect doc type to be `concat` or `fill`.");
          return c.parts;
        }, a = {};
        function f(c, F, S, b) {
          let B = [c];
          for (; B.length > 0; ) {
            let I = B.pop();
            if (I === a) {
              S(B.pop());
              continue;
            }
            if (S && B.push(I, a), !F || F(I) !== !1)
              if (u(I) || I.type === "fill") {
                let $ = o(I);
                for (let G = $.length, W = G - 1; W >= 0; --W)
                  B.push($[W]);
              } else if (I.type === "if-break")
                I.flatContents && B.push(I.flatContents), I.breakContents && B.push(I.breakContents);
              else if (I.type === "group" && I.expandedStates)
                if (b)
                  for (let $ = I.expandedStates.length, G = $ - 1; G >= 0; --G)
                    B.push(I.expandedStates[G]);
                else
                  B.push(I.contents);
              else
                I.contents && B.push(I.contents);
          }
        }
        function g(c, F) {
          let S = /* @__PURE__ */ new Map();
          return b(c);
          function b(I) {
            if (S.has(I))
              return S.get(I);
            let $ = B(I);
            return S.set(I, $), $;
          }
          function B(I) {
            if (Array.isArray(I))
              return F(I.map(b));
            if (I.type === "concat" || I.type === "fill") {
              let $ = I.parts.map(b);
              return F(Object.assign(Object.assign({}, I), {}, { parts: $ }));
            }
            if (I.type === "if-break") {
              let $ = I.breakContents && b(I.breakContents), G = I.flatContents && b(I.flatContents);
              return F(Object.assign(Object.assign({}, I), {}, { breakContents: $, flatContents: G }));
            }
            if (I.type === "group" && I.expandedStates) {
              let $ = I.expandedStates.map(b), G = $[0];
              return F(Object.assign(Object.assign({}, I), {}, { contents: G, expandedStates: $ }));
            }
            if (I.contents) {
              let $ = b(I.contents);
              return F(Object.assign(Object.assign({}, I), {}, { contents: $ }));
            }
            return F(I);
          }
        }
        function x(c, F, S) {
          let b = S, B = !1;
          function I($) {
            let G = F($);
            if (G !== void 0 && (B = !0, b = G), B)
              return !1;
          }
          return f(c, I), b;
        }
        function C(c) {
          if (c.type === "group" && c.break || c.type === "line" && c.hard || c.type === "break-parent")
            return !0;
        }
        function A(c) {
          return x(c, C, !1);
        }
        function D(c) {
          if (c.length > 0) {
            let F = i(c);
            !F.expandedStates && !F.break && (F.break = "propagated");
          }
          return null;
        }
        function y(c) {
          let F = /* @__PURE__ */ new Set(), S = [];
          function b(I) {
            if (I.type === "break-parent" && D(S), I.type === "group") {
              if (S.push(I), F.has(I))
                return !1;
              F.add(I);
            }
          }
          function B(I) {
            I.type === "group" && S.pop().break && D(S);
          }
          f(c, b, B, !0);
        }
        function T(c) {
          return c.type === "line" && !c.hard ? c.soft ? "" : " " : c.type === "if-break" ? c.flatContents || "" : c;
        }
        function j(c) {
          return g(c, T);
        }
        var M = (c, F) => c && c.type === "line" && c.hard && F && F.type === "break-parent";
        function k(c) {
          if (!c)
            return c;
          if (u(c) || c.type === "fill") {
            let F = o(c);
            for (; F.length > 1 && M(...F.slice(-2)); )
              F.length -= 2;
            if (F.length > 0) {
              let S = k(i(F));
              F[F.length - 1] = S;
            }
            return Array.isArray(c) ? F : Object.assign(Object.assign({}, c), {}, { parts: F });
          }
          switch (c.type) {
            case "align":
            case "indent":
            case "indent-if-break":
            case "group":
            case "line-suffix":
            case "label": {
              let F = k(c.contents);
              return Object.assign(Object.assign({}, c), {}, { contents: F });
            }
            case "if-break": {
              let F = k(c.breakContents), S = k(c.flatContents);
              return Object.assign(Object.assign({}, c), {}, { breakContents: F, flatContents: S });
            }
          }
          return c;
        }
        function L(c) {
          return k(R(c));
        }
        function _(c) {
          switch (c.type) {
            case "fill":
              if (c.parts.every((S) => S === ""))
                return "";
              break;
            case "group":
              if (!c.contents && !c.id && !c.break && !c.expandedStates)
                return "";
              if (c.contents.type === "group" && c.contents.id === c.id && c.contents.break === c.break && c.contents.expandedStates === c.expandedStates)
                return c.contents;
              break;
            case "align":
            case "indent":
            case "indent-if-break":
            case "line-suffix":
              if (!c.contents)
                return "";
              break;
            case "if-break":
              if (!c.flatContents && !c.breakContents)
                return "";
              break;
          }
          if (!u(c))
            return c;
          let F = [];
          for (let S of o(c)) {
            if (!S)
              continue;
            let [b, ...B] = u(S) ? o(S) : [S];
            typeof b == "string" && typeof i(F) == "string" ? F[F.length - 1] += b : F.push(b), F.push(...B);
          }
          return F.length === 0 ? "" : F.length === 1 ? F[0] : Array.isArray(c) ? F : Object.assign(Object.assign({}, c), {}, { parts: F });
        }
        function R(c) {
          return g(c, (F) => _(F));
        }
        function O(c) {
          let F = [], S = c.filter(Boolean);
          for (; S.length > 0; ) {
            let b = S.shift();
            if (b) {
              if (u(b)) {
                S.unshift(...o(b));
                continue;
              }
              if (F.length > 0 && typeof i(F) == "string" && typeof b == "string") {
                F[F.length - 1] += b;
                continue;
              }
              F.push(b);
            }
          }
          return F;
        }
        function Q(c) {
          return g(c, (F) => Array.isArray(F) ? O(F) : F.parts ? Object.assign(Object.assign({}, F), {}, { parts: O(F.parts) }) : F);
        }
        function v(c) {
          return g(c, (F) => typeof F == "string" && F.includes(`
`) ? P(F) : F);
        }
        function P(c) {
          let F = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : d;
          return p(F, c.split(`
`)).parts;
        }
        function E(c) {
          if (c.type === "line")
            return !0;
        }
        function w(c) {
          return x(c, E, !1);
        }
        m.exports = { isConcat: u, getDocParts: o, willBreak: A, traverseDoc: f, findInDoc: x, mapDoc: g, propagateBreaks: y, removeLines: j, stripTrailingHardline: L, normalizeParts: O, normalizeDoc: Q, cleanDoc: R, replaceTextEndOfLine: P, replaceEndOfLine: v, canBreak: w };
      } }), Bs = ee({ "src/document/doc-printer.js"(l, m) {
        ne();
        var { convertEndOfLineToChars: i } = Gu(), d = sr(), p = $n(), { fill: u, cursor: o, indent: a } = nu(), { isConcat: f, getDocParts: g } = _i(), x, C = 1, A = 2;
        function D() {
          return { value: "", length: 0, queue: [] };
        }
        function y(_, R) {
          return j(_, { type: "indent" }, R);
        }
        function T(_, R, O) {
          return R === Number.NEGATIVE_INFINITY ? _.root || D() : R < 0 ? j(_, { type: "dedent" }, O) : R ? R.type === "root" ? Object.assign(Object.assign({}, _), {}, { root: _ }) : j(_, { type: typeof R == "string" ? "stringAlign" : "numberAlign", n: R }, O) : _;
        }
        function j(_, R, O) {
          let Q = R.type === "dedent" ? _.queue.slice(0, -1) : [..._.queue, R], v = "", P = 0, E = 0, w = 0;
          for (let $ of Q)
            switch ($.type) {
              case "indent":
                S(), O.useTabs ? c(1) : F(O.tabWidth);
                break;
              case "stringAlign":
                S(), v += $.n, P += $.n.length;
                break;
              case "numberAlign":
                E += 1, w += $.n;
                break;
              default:
                throw new Error(`Unexpected type '${$.type}'`);
            }
          return B(), Object.assign(Object.assign({}, _), {}, { value: v, length: P, queue: Q });
          function c($) {
            v += "	".repeat($), P += O.tabWidth * $;
          }
          function F($) {
            v += " ".repeat($), P += $;
          }
          function S() {
            O.useTabs ? b() : B();
          }
          function b() {
            E > 0 && c(E), I();
          }
          function B() {
            w > 0 && F(w), I();
          }
          function I() {
            E = 0, w = 0;
          }
        }
        function M(_) {
          if (_.length === 0)
            return 0;
          let R = 0;
          for (; _.length > 0 && typeof d(_) == "string" && /^[\t ]*$/.test(d(_)); )
            R += _.pop().length;
          if (_.length > 0 && typeof d(_) == "string") {
            let O = d(_).replace(/[\t ]*$/, "");
            R += d(_).length - O.length, _[_.length - 1] = O;
          }
          return R;
        }
        function k(_, R, O, Q, v) {
          let P = R.length, E = [_], w = [];
          for (; O >= 0; ) {
            if (E.length === 0) {
              if (P === 0)
                return !0;
              E.push(R[--P]);
              continue;
            }
            let { mode: c, doc: F } = E.pop();
            if (typeof F == "string")
              w.push(F), O -= p(F);
            else if (f(F) || F.type === "fill") {
              let S = g(F);
              for (let b = S.length - 1; b >= 0; b--)
                E.push({ mode: c, doc: S[b] });
            } else
              switch (F.type) {
                case "indent":
                case "align":
                case "indent-if-break":
                case "label":
                  E.push({ mode: c, doc: F.contents });
                  break;
                case "trim":
                  O += M(w);
                  break;
                case "group": {
                  if (v && F.break)
                    return !1;
                  let S = F.break ? C : c, b = F.expandedStates && S === C ? d(F.expandedStates) : F.contents;
                  E.push({ mode: S, doc: b });
                  break;
                }
                case "if-break": {
                  let S = (F.groupId ? x[F.groupId] || A : c) === C ? F.breakContents : F.flatContents;
                  S && E.push({ mode: c, doc: S });
                  break;
                }
                case "line":
                  if (c === C || F.hard)
                    return !0;
                  F.soft || (w.push(" "), O--);
                  break;
                case "line-suffix":
                  Q = !0;
                  break;
                case "line-suffix-boundary":
                  if (Q)
                    return !1;
                  break;
              }
          }
          return !1;
        }
        function L(_, R) {
          x = {};
          let O = R.printWidth, Q = i(R.endOfLine), v = 0, P = [{ ind: D(), mode: C, doc: _ }], E = [], w = !1, c = [];
          for (; P.length > 0; ) {
            let { ind: S, mode: b, doc: B } = P.pop();
            if (typeof B == "string") {
              let I = Q !== `
` ? B.replace(/\n/g, Q) : B;
              E.push(I), v += p(I);
            } else if (f(B)) {
              let I = g(B);
              for (let $ = I.length - 1; $ >= 0; $--)
                P.push({ ind: S, mode: b, doc: I[$] });
            } else
              switch (B.type) {
                case "cursor":
                  E.push(o.placeholder);
                  break;
                case "indent":
                  P.push({ ind: y(S, R), mode: b, doc: B.contents });
                  break;
                case "align":
                  P.push({ ind: T(S, B.n, R), mode: b, doc: B.contents });
                  break;
                case "trim":
                  v -= M(E);
                  break;
                case "group":
                  switch (b) {
                    case A:
                      if (!w) {
                        P.push({ ind: S, mode: B.break ? C : A, doc: B.contents });
                        break;
                      }
                    case C: {
                      w = !1;
                      let I = { ind: S, mode: A, doc: B.contents }, $ = O - v, G = c.length > 0;
                      if (!B.break && k(I, P, $, G))
                        P.push(I);
                      else if (B.expandedStates) {
                        let W = d(B.expandedStates);
                        if (B.break) {
                          P.push({ ind: S, mode: C, doc: W });
                          break;
                        } else
                          for (let J = 1; J < B.expandedStates.length + 1; J++)
                            if (J >= B.expandedStates.length) {
                              P.push({ ind: S, mode: C, doc: W });
                              break;
                            } else {
                              let te = B.expandedStates[J], K = { ind: S, mode: A, doc: te };
                              if (k(K, P, $, G)) {
                                P.push(K);
                                break;
                              }
                            }
                      } else
                        P.push({ ind: S, mode: C, doc: B.contents });
                      break;
                    }
                  }
                  B.id && (x[B.id] = d(P).mode);
                  break;
                case "fill": {
                  let I = O - v, { parts: $ } = B;
                  if ($.length === 0)
                    break;
                  let [G, W] = $, J = { ind: S, mode: A, doc: G }, te = { ind: S, mode: C, doc: G }, K = k(J, [], I, c.length > 0, !0);
                  if ($.length === 1) {
                    K ? P.push(J) : P.push(te);
                    break;
                  }
                  let ie = { ind: S, mode: A, doc: W }, q = { ind: S, mode: C, doc: W };
                  if ($.length === 2) {
                    K ? P.push(ie, J) : P.push(q, te);
                    break;
                  }
                  $.splice(0, 2);
                  let U = { ind: S, mode: b, doc: u($) }, se = $[0];
                  k({ ind: S, mode: A, doc: [G, W, se] }, [], I, c.length > 0, !0) ? P.push(U, ie, J) : K ? P.push(U, q, J) : P.push(U, q, te);
                  break;
                }
                case "if-break":
                case "indent-if-break": {
                  let I = B.groupId ? x[B.groupId] : b;
                  if (I === C) {
                    let $ = B.type === "if-break" ? B.breakContents : B.negate ? B.contents : a(B.contents);
                    $ && P.push({ ind: S, mode: b, doc: $ });
                  }
                  if (I === A) {
                    let $ = B.type === "if-break" ? B.flatContents : B.negate ? a(B.contents) : B.contents;
                    $ && P.push({ ind: S, mode: b, doc: $ });
                  }
                  break;
                }
                case "line-suffix":
                  c.push({ ind: S, mode: b, doc: B.contents });
                  break;
                case "line-suffix-boundary":
                  c.length > 0 && P.push({ ind: S, mode: b, doc: { type: "line", hard: !0 } });
                  break;
                case "line":
                  switch (b) {
                    case A:
                      if (B.hard)
                        w = !0;
                      else {
                        B.soft || (E.push(" "), v += 1);
                        break;
                      }
                    case C:
                      if (c.length > 0) {
                        P.push({ ind: S, mode: b, doc: B }, ...c.reverse()), c.length = 0;
                        break;
                      }
                      B.literal ? S.root ? (E.push(Q, S.root.value), v = S.root.length) : (E.push(Q), v = 0) : (v -= M(E), E.push(Q + S.value), v = S.length);
                      break;
                  }
                  break;
                case "label":
                  P.push({ ind: S, mode: b, doc: B.contents });
                  break;
              }
            P.length === 0 && c.length > 0 && (P.push(...c.reverse()), c.length = 0);
          }
          let F = E.indexOf(o.placeholder);
          if (F !== -1) {
            let S = E.indexOf(o.placeholder, F + 1), b = E.slice(0, F).join(""), B = E.slice(F + 1, S).join(""), I = E.slice(S + 1).join("");
            return { formatted: b + B + I, cursorNodeStart: b.length, cursorNodeText: B };
          }
          return { formatted: E.join("") };
        }
        m.exports = { printDocToString: L };
      } }), ba = ee({ "src/document/doc-debug.js"(l, m) {
        ne();
        var { isConcat: i, getDocParts: d } = _i();
        function p(o) {
          if (!o)
            return "";
          if (i(o)) {
            let a = [];
            for (let f of d(o))
              if (i(f))
                a.push(...p(f).parts);
              else {
                let g = p(f);
                g !== "" && a.push(g);
              }
            return { type: "concat", parts: a };
          }
          return o.type === "if-break" ? Object.assign(Object.assign({}, o), {}, { breakContents: p(o.breakContents), flatContents: p(o.flatContents) }) : o.type === "group" ? Object.assign(Object.assign({}, o), {}, { contents: p(o.contents), expandedStates: o.expandedStates && o.expandedStates.map(p) }) : o.type === "fill" ? { type: "fill", parts: o.parts.map(p) } : o.contents ? Object.assign(Object.assign({}, o), {}, { contents: p(o.contents) }) : o;
        }
        function u(o) {
          let a = /* @__PURE__ */ Object.create(null), f = /* @__PURE__ */ new Set();
          return g(p(o));
          function g(C, A, D) {
            if (typeof C == "string")
              return JSON.stringify(C);
            if (i(C)) {
              let y = d(C).map(g).filter(Boolean);
              return y.length === 1 ? y[0] : `[${y.join(", ")}]`;
            }
            if (C.type === "line") {
              let y = Array.isArray(D) && D[A + 1] && D[A + 1].type === "break-parent";
              return C.literal ? y ? "literalline" : "literallineWithoutBreakParent" : C.hard ? y ? "hardline" : "hardlineWithoutBreakParent" : C.soft ? "softline" : "line";
            }
            if (C.type === "break-parent")
              return Array.isArray(D) && D[A - 1] && D[A - 1].type === "line" && D[A - 1].hard ? void 0 : "breakParent";
            if (C.type === "trim")
              return "trim";
            if (C.type === "indent")
              return "indent(" + g(C.contents) + ")";
            if (C.type === "align")
              return C.n === Number.NEGATIVE_INFINITY ? "dedentToRoot(" + g(C.contents) + ")" : C.n < 0 ? "dedent(" + g(C.contents) + ")" : C.n.type === "root" ? "markAsRoot(" + g(C.contents) + ")" : "align(" + JSON.stringify(C.n) + ", " + g(C.contents) + ")";
            if (C.type === "if-break")
              return "ifBreak(" + g(C.breakContents) + (C.flatContents ? ", " + g(C.flatContents) : "") + (C.groupId ? (C.flatContents ? "" : ', ""') + `, { groupId: ${x(C.groupId)} }` : "") + ")";
            if (C.type === "indent-if-break") {
              let y = [];
              C.negate && y.push("negate: true"), C.groupId && y.push(`groupId: ${x(C.groupId)}`);
              let T = y.length > 0 ? `, { ${y.join(", ")} }` : "";
              return `indentIfBreak(${g(C.contents)}${T})`;
            }
            if (C.type === "group") {
              let y = [];
              C.break && C.break !== "propagated" && y.push("shouldBreak: true"), C.id && y.push(`id: ${x(C.id)}`);
              let T = y.length > 0 ? `, { ${y.join(", ")} }` : "";
              return C.expandedStates ? `conditionalGroup([${C.expandedStates.map((j) => g(j)).join(",")}]${T})` : `group(${g(C.contents)}${T})`;
            }
            if (C.type === "fill")
              return `fill([${C.parts.map((y) => g(y)).join(", ")}])`;
            if (C.type === "line-suffix")
              return "lineSuffix(" + g(C.contents) + ")";
            if (C.type === "line-suffix-boundary")
              return "lineSuffixBoundary";
            if (C.type === "label")
              return `label(${JSON.stringify(C.label)}, ${g(C.contents)})`;
            throw new Error("Unknown doc type " + C.type);
          }
          function x(C) {
            if (typeof C != "symbol")
              return JSON.stringify(String(C));
            if (C in a)
              return a[C];
            let A = String(C).slice(7, -1) || "symbol";
            for (let D = 0; ; D++) {
              let y = A + (D > 0 ? ` #${D}` : "");
              if (!f.has(y))
                return f.add(y), a[C] = `Symbol.for(${JSON.stringify(y)})`;
            }
          }
        }
        m.exports = { printDocToDebug: u };
      } }), Ut = ee({ "src/document/index.js"(l, m) {
        ne(), m.exports = { builders: nu(), printer: Bs(), utils: _i(), debug: ba() };
      } }), Ba = {};
      zt(Ba, { default: () => _s });
      function _s(l) {
        if (typeof l != "string")
          throw new TypeError("Expected a string");
        return l.replace(/[|\\{}()[\]^$+*?.]/g, "\\$&").replace(/-/g, "\\x2d");
      }
      var _a = bt({ "node_modules/escape-string-regexp/index.js"() {
        ne();
      } }), mo = ee({ "node_modules/semver/internal/debug.js"(l, m) {
        ne();
        var i = typeof Jn == "object" && Jn.env && Jn.env.NODE_DEBUG && /\bsemver\b/i.test(Jn.env.NODE_DEBUG) ? function() {
          for (var d = arguments.length, p = new Array(d), u = 0; u < d; u++)
            p[u] = arguments[u];
          return console.error("SEMVER", ...p);
        } : () => {
        };
        m.exports = i;
      } }), Bu = ee({ "node_modules/semver/internal/constants.js"(l, m) {
        ne();
        var i = "2.0.0", d = 256, p = Number.MAX_SAFE_INTEGER || 9007199254740991, u = 16;
        m.exports = { SEMVER_SPEC_VERSION: i, MAX_LENGTH: d, MAX_SAFE_INTEGER: p, MAX_SAFE_COMPONENT_LENGTH: u };
      } }), Ju = ee({ "node_modules/semver/internal/re.js"(l, m) {
        ne();
        var { MAX_SAFE_COMPONENT_LENGTH: i } = Bu(), d = mo();
        l = m.exports = {};
        var p = l.re = [], u = l.src = [], o = l.t = {}, a = 0, f = (g, x, C) => {
          let A = a++;
          d(g, A, x), o[g] = A, u[A] = x, p[A] = new RegExp(x, C ? "g" : void 0);
        };
        f("NUMERICIDENTIFIER", "0|[1-9]\\d*"), f("NUMERICIDENTIFIERLOOSE", "[0-9]+"), f("NONNUMERICIDENTIFIER", "\\d*[a-zA-Z-][a-zA-Z0-9-]*"), f("MAINVERSION", `(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})\\.(${u[o.NUMERICIDENTIFIER]})`), f("MAINVERSIONLOOSE", `(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})\\.(${u[o.NUMERICIDENTIFIERLOOSE]})`), f("PRERELEASEIDENTIFIER", `(?:${u[o.NUMERICIDENTIFIER]}|${u[o.NONNUMERICIDENTIFIER]})`), f("PRERELEASEIDENTIFIERLOOSE", `(?:${u[o.NUMERICIDENTIFIERLOOSE]}|${u[o.NONNUMERICIDENTIFIER]})`), f("PRERELEASE", `(?:-(${u[o.PRERELEASEIDENTIFIER]}(?:\\.${u[o.PRERELEASEIDENTIFIER]})*))`), f("PRERELEASELOOSE", `(?:-?(${u[o.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${u[o.PRERELEASEIDENTIFIERLOOSE]})*))`), f("BUILDIDENTIFIER", "[0-9A-Za-z-]+"), f("BUILD", `(?:\\+(${u[o.BUILDIDENTIFIER]}(?:\\.${u[o.BUILDIDENTIFIER]})*))`), f("FULLPLAIN", `v?${u[o.MAINVERSION]}${u[o.PRERELEASE]}?${u[o.BUILD]}?`), f("FULL", `^${u[o.FULLPLAIN]}$`), f("LOOSEPLAIN", `[v=\\s]*${u[o.MAINVERSIONLOOSE]}${u[o.PRERELEASELOOSE]}?${u[o.BUILD]}?`), f("LOOSE", `^${u[o.LOOSEPLAIN]}$`), f("GTLT", "((?:<|>)?=?)"), f("XRANGEIDENTIFIERLOOSE", `${u[o.NUMERICIDENTIFIERLOOSE]}|x|X|\\*`), f("XRANGEIDENTIFIER", `${u[o.NUMERICIDENTIFIER]}|x|X|\\*`), f("XRANGEPLAIN", `[v=\\s]*(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:\\.(${u[o.XRANGEIDENTIFIER]})(?:${u[o.PRERELEASE]})?${u[o.BUILD]}?)?)?`), f("XRANGEPLAINLOOSE", `[v=\\s]*(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:\\.(${u[o.XRANGEIDENTIFIERLOOSE]})(?:${u[o.PRERELEASELOOSE]})?${u[o.BUILD]}?)?)?`), f("XRANGE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAIN]}$`), f("XRANGELOOSE", `^${u[o.GTLT]}\\s*${u[o.XRANGEPLAINLOOSE]}$`), f("COERCE", `(^|[^\\d])(\\d{1,${i}})(?:\\.(\\d{1,${i}}))?(?:\\.(\\d{1,${i}}))?(?:$|[^\\d])`), f("COERCERTL", u[o.COERCE], !0), f("LONETILDE", "(?:~>?)"), f("TILDETRIM", `(\\s*)${u[o.LONETILDE]}\\s+`, !0), l.tildeTrimReplace = "$1~", f("TILDE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAIN]}$`), f("TILDELOOSE", `^${u[o.LONETILDE]}${u[o.XRANGEPLAINLOOSE]}$`), f("LONECARET", "(?:\\^)"), f("CARETTRIM", `(\\s*)${u[o.LONECARET]}\\s+`, !0), l.caretTrimReplace = "$1^", f("CARET", `^${u[o.LONECARET]}${u[o.XRANGEPLAIN]}$`), f("CARETLOOSE", `^${u[o.LONECARET]}${u[o.XRANGEPLAINLOOSE]}$`), f("COMPARATORLOOSE", `^${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]})$|^$`), f("COMPARATOR", `^${u[o.GTLT]}\\s*(${u[o.FULLPLAIN]})$|^$`), f("COMPARATORTRIM", `(\\s*)${u[o.GTLT]}\\s*(${u[o.LOOSEPLAIN]}|${u[o.XRANGEPLAIN]})`, !0), l.comparatorTrimReplace = "$1$2$3", f("HYPHENRANGE", `^\\s*(${u[o.XRANGEPLAIN]})\\s+-\\s+(${u[o.XRANGEPLAIN]})\\s*$`), f("HYPHENRANGELOOSE", `^\\s*(${u[o.XRANGEPLAINLOOSE]})\\s+-\\s+(${u[o.XRANGEPLAINLOOSE]})\\s*$`), f("STAR", "(<|>)?=?\\s*\\*"), f("GTE0", "^\\s*>=\\s*0\\.0\\.0\\s*$"), f("GTE0PRE", "^\\s*>=\\s*0\\.0\\.0-0\\s*$");
      } }), qu = ee({ "node_modules/semver/internal/parse-options.js"(l, m) {
        ne();
        var i = ["includePrerelease", "loose", "rtl"], d = (p) => p ? typeof p != "object" ? { loose: !0 } : i.filter((u) => p[u]).reduce((u, o) => (u[o] = !0, u), {}) : {};
        m.exports = d;
      } }), Do = ee({ "node_modules/semver/internal/identifiers.js"(l, m) {
        ne();
        var i = /^[0-9]+$/, d = (u, o) => {
          let a = i.test(u), f = i.test(o);
          return a && f && (u = +u, o = +o), u === o ? 0 : a && !f ? -1 : f && !a ? 1 : u < o ? -1 : 1;
        }, p = (u, o) => d(o, u);
        m.exports = { compareIdentifiers: d, rcompareIdentifiers: p };
      } }), go = ee({ "node_modules/semver/classes/semver.js"(l, m) {
        ne();
        var i = mo(), { MAX_LENGTH: d, MAX_SAFE_INTEGER: p } = Bu(), { re: u, t: o } = Ju(), a = qu(), { compareIdentifiers: f } = Do(), g = class {
          constructor(x, C) {
            if (C = a(C), x instanceof g) {
              if (x.loose === !!C.loose && x.includePrerelease === !!C.includePrerelease)
                return x;
              x = x.version;
            } else if (typeof x != "string")
              throw new TypeError(`Invalid Version: ${x}`);
            if (x.length > d)
              throw new TypeError(`version is longer than ${d} characters`);
            i("SemVer", x, C), this.options = C, this.loose = !!C.loose, this.includePrerelease = !!C.includePrerelease;
            let A = x.trim().match(C.loose ? u[o.LOOSE] : u[o.FULL]);
            if (!A)
              throw new TypeError(`Invalid Version: ${x}`);
            if (this.raw = x, this.major = +A[1], this.minor = +A[2], this.patch = +A[3], this.major > p || this.major < 0)
              throw new TypeError("Invalid major version");
            if (this.minor > p || this.minor < 0)
              throw new TypeError("Invalid minor version");
            if (this.patch > p || this.patch < 0)
              throw new TypeError("Invalid patch version");
            A[4] ? this.prerelease = A[4].split(".").map((D) => {
              if (/^[0-9]+$/.test(D)) {
                let y = +D;
                if (y >= 0 && y < p)
                  return y;
              }
              return D;
            }) : this.prerelease = [], this.build = A[5] ? A[5].split(".") : [], this.format();
          }
          format() {
            return this.version = `${this.major}.${this.minor}.${this.patch}`, this.prerelease.length && (this.version += `-${this.prerelease.join(".")}`), this.version;
          }
          toString() {
            return this.version;
          }
          compare(x) {
            if (i("SemVer.compare", this.version, this.options, x), !(x instanceof g)) {
              if (typeof x == "string" && x === this.version)
                return 0;
              x = new g(x, this.options);
            }
            return x.version === this.version ? 0 : this.compareMain(x) || this.comparePre(x);
          }
          compareMain(x) {
            return x instanceof g || (x = new g(x, this.options)), f(this.major, x.major) || f(this.minor, x.minor) || f(this.patch, x.patch);
          }
          comparePre(x) {
            if (x instanceof g || (x = new g(x, this.options)), this.prerelease.length && !x.prerelease.length)
              return -1;
            if (!this.prerelease.length && x.prerelease.length)
              return 1;
            if (!this.prerelease.length && !x.prerelease.length)
              return 0;
            let C = 0;
            do {
              let A = this.prerelease[C], D = x.prerelease[C];
              if (i("prerelease compare", C, A, D), A === void 0 && D === void 0)
                return 0;
              if (D === void 0)
                return 1;
              if (A === void 0)
                return -1;
              if (A !== D)
                return f(A, D);
            } while (++C);
          }
          compareBuild(x) {
            x instanceof g || (x = new g(x, this.options));
            let C = 0;
            do {
              let A = this.build[C], D = x.build[C];
              if (i("prerelease compare", C, A, D), A === void 0 && D === void 0)
                return 0;
              if (D === void 0)
                return 1;
              if (A === void 0)
                return -1;
              if (A !== D)
                return f(A, D);
            } while (++C);
          }
          inc(x, C) {
            switch (x) {
              case "premajor":
                this.prerelease.length = 0, this.patch = 0, this.minor = 0, this.major++, this.inc("pre", C);
                break;
              case "preminor":
                this.prerelease.length = 0, this.patch = 0, this.minor++, this.inc("pre", C);
                break;
              case "prepatch":
                this.prerelease.length = 0, this.inc("patch", C), this.inc("pre", C);
                break;
              case "prerelease":
                this.prerelease.length === 0 && this.inc("patch", C), this.inc("pre", C);
                break;
              case "major":
                (this.minor !== 0 || this.patch !== 0 || this.prerelease.length === 0) && this.major++, this.minor = 0, this.patch = 0, this.prerelease = [];
                break;
              case "minor":
                (this.patch !== 0 || this.prerelease.length === 0) && this.minor++, this.patch = 0, this.prerelease = [];
                break;
              case "patch":
                this.prerelease.length === 0 && this.patch++, this.prerelease = [];
                break;
              case "pre":
                if (this.prerelease.length === 0)
                  this.prerelease = [0];
                else {
                  let A = this.prerelease.length;
                  for (; --A >= 0; )
                    typeof this.prerelease[A] == "number" && (this.prerelease[A]++, A = -2);
                  A === -1 && this.prerelease.push(0);
                }
                C && (f(this.prerelease[0], C) === 0 ? isNaN(this.prerelease[1]) && (this.prerelease = [C, 0]) : this.prerelease = [C, 0]);
                break;
              default:
                throw new Error(`invalid increment argument: ${x}`);
            }
            return this.format(), this.raw = this.version, this;
          }
        };
        m.exports = g;
      } }), xu = ee({ "node_modules/semver/functions/compare.js"(l, m) {
        ne();
        var i = go(), d = (p, u, o) => new i(p, o).compare(new i(u, o));
        m.exports = d;
      } }), Kl = ee({ "node_modules/semver/functions/lt.js"(l, m) {
        ne();
        var i = xu(), d = (p, u, o) => i(p, u, o) < 0;
        m.exports = d;
      } }), Ps = ee({ "node_modules/semver/functions/gte.js"(l, m) {
        ne();
        var i = xu(), d = (p, u, o) => i(p, u, o) >= 0;
        m.exports = d;
      } }), ho = ee({ "src/utils/arrayify.js"(l, m) {
        ne(), m.exports = (i, d) => Object.entries(i).map((p) => {
          let [u, o] = p;
          return Object.assign({ [d]: u }, o);
        });
      } }), zl = ee({ "node_modules/outdent/lib/index.js"(l, m) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 }), l.outdent = void 0;
        function i() {
          for (var k = [], L = 0; L < arguments.length; L++)
            k[L] = arguments[L];
        }
        function d() {
          return typeof WeakMap < "u" ? /* @__PURE__ */ new WeakMap() : p();
        }
        function p() {
          return { add: i, delete: i, get: i, set: i, has: function(k) {
            return !1;
          } };
        }
        var u = Object.prototype.hasOwnProperty, o = function(k, L) {
          return u.call(k, L);
        };
        function a(k, L) {
          for (var _ in L)
            o(L, _) && (k[_] = L[_]);
          return k;
        }
        var f = /^[ \t]*(?:\r\n|\r|\n)/, g = /(?:\r\n|\r|\n)[ \t]*$/, x = /^(?:[\r\n]|$)/, C = /(?:\r\n|\r|\n)([ \t]*)(?:[^ \t\r\n]|$)/, A = /^[ \t]*[\r\n][ \t\r\n]*$/;
        function D(k, L, _) {
          var R = 0, O = k[0].match(C);
          O && (R = O[1].length);
          var Q = "(\\r\\n|\\r|\\n).{0," + R + "}", v = new RegExp(Q, "g");
          L && (k = k.slice(1));
          var P = _.newline, E = _.trimLeadingNewline, w = _.trimTrailingNewline, c = typeof P == "string", F = k.length, S = k.map(function(b, B) {
            return b = b.replace(v, "$1"), B === 0 && E && (b = b.replace(f, "")), B === F - 1 && w && (b = b.replace(g, "")), c && (b = b.replace(/\r\n|\n|\r/g, function(I) {
              return P;
            })), b;
          });
          return S;
        }
        function y(k, L) {
          for (var _ = "", R = 0, O = k.length; R < O; R++)
            _ += k[R], R < O - 1 && (_ += L[R]);
          return _;
        }
        function T(k) {
          return o(k, "raw") && o(k, "length");
        }
        function j(k) {
          var L = d(), _ = d();
          function R(Q) {
            for (var v = [], P = 1; P < arguments.length; P++)
              v[P - 1] = arguments[P];
            if (T(Q)) {
              var E = Q, w = (v[0] === R || v[0] === M) && A.test(E[0]) && x.test(E[1]), c = w ? _ : L, F = c.get(E);
              if (F || (F = D(E, w, k), c.set(E, F)), v.length === 0)
                return F[0];
              var S = y(F, w ? v.slice(1) : v);
              return S;
            } else
              return j(a(a({}, k), Q || {}));
          }
          var O = a(R, { string: function(Q) {
            return D([Q], !1, k)[0];
          } });
          return O;
        }
        var M = j({ trimLeadingNewline: !0, trimTrailingNewline: !0 });
        if (l.outdent = M, l.default = M, typeof m < "u")
          try {
            m.exports = M, Object.defineProperty(M, "__esModule", { value: !0 }), M.default = M, M.outdent = M;
          } catch {
          }
      } }), Is = ee({ "src/main/core-options.js"(l, m) {
        ne();
        var { outdent: i } = zl(), d = "Config", p = "Editor", u = "Format", o = "Other", a = "Output", f = "Global", g = "Special", x = { cursorOffset: { since: "1.4.0", category: g, type: "int", default: -1, range: { start: -1, end: Number.POSITIVE_INFINITY, step: 1 }, description: i`
      Print (to stderr) where a cursor at the given position would move to after formatting.
      This option cannot be used with --range-start and --range-end.
    `, cliCategory: p }, endOfLine: { since: "1.15.0", category: f, type: "choice", default: [{ since: "1.15.0", value: "auto" }, { since: "2.0.0", value: "lf" }], description: "Which end of line characters to apply.", choices: [{ value: "lf", description: "Line Feed only (\\n), common on Linux and macOS as well as inside git repos" }, { value: "crlf", description: "Carriage Return + Line Feed characters (\\r\\n), common on Windows" }, { value: "cr", description: "Carriage Return character only (\\r), used very rarely" }, { value: "auto", description: i`
          Maintain existing
          (mixed values within one file are normalised by looking at what's used after the first line)
        ` }] }, filepath: { since: "1.4.0", category: g, type: "path", description: "Specify the input filepath. This will be used to do parser inference.", cliName: "stdin-filepath", cliCategory: o, cliDescription: "Path to the file to pretend that stdin comes from." }, insertPragma: { since: "1.8.0", category: g, type: "boolean", default: !1, description: "Insert @format pragma into file's first docblock comment.", cliCategory: o }, parser: { since: "0.0.10", category: f, type: "choice", default: [{ since: "0.0.10", value: "babylon" }, { since: "1.13.0", value: void 0 }], description: "Which parser to use.", exception: (C) => typeof C == "string" || typeof C == "function", choices: [{ value: "flow", description: "Flow" }, { value: "babel", since: "1.16.0", description: "JavaScript" }, { value: "babel-flow", since: "1.16.0", description: "Flow" }, { value: "babel-ts", since: "2.0.0", description: "TypeScript" }, { value: "typescript", since: "1.4.0", description: "TypeScript" }, { value: "acorn", since: "2.6.0", description: "JavaScript" }, { value: "espree", since: "2.2.0", description: "JavaScript" }, { value: "meriyah", since: "2.2.0", description: "JavaScript" }, { value: "css", since: "1.7.1", description: "CSS" }, { value: "less", since: "1.7.1", description: "Less" }, { value: "scss", since: "1.7.1", description: "SCSS" }, { value: "json", since: "1.5.0", description: "JSON" }, { value: "json5", since: "1.13.0", description: "JSON5" }, { value: "json-stringify", since: "1.13.0", description: "JSON.stringify" }, { value: "graphql", since: "1.5.0", description: "GraphQL" }, { value: "markdown", since: "1.8.0", description: "Markdown" }, { value: "mdx", since: "1.15.0", description: "MDX" }, { value: "vue", since: "1.10.0", description: "Vue" }, { value: "yaml", since: "1.14.0", description: "YAML" }, { value: "glimmer", since: "2.3.0", description: "Ember / Handlebars" }, { value: "html", since: "1.15.0", description: "HTML" }, { value: "angular", since: "1.15.0", description: "Angular" }, { value: "lwc", since: "1.17.0", description: "Lightning Web Components" }] }, plugins: { since: "1.10.0", type: "path", array: !0, default: [{ value: [] }], category: f, description: "Add a plugin. Multiple plugins can be passed as separate `--plugin`s.", exception: (C) => typeof C == "string" || typeof C == "object", cliName: "plugin", cliCategory: d }, pluginSearchDirs: { since: "1.13.0", type: "path", array: !0, default: [{ value: [] }], category: f, description: i`
      Custom directory that contains prettier plugins in node_modules subdirectory.
      Overrides default behavior when plugins are searched relatively to the location of Prettier.
      Multiple values are accepted.
    `, exception: (C) => typeof C == "string" || typeof C == "object", cliName: "plugin-search-dir", cliCategory: d }, printWidth: { since: "0.0.0", category: f, type: "int", default: 80, description: "The line length where Prettier will try wrap.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, rangeEnd: { since: "1.4.0", category: g, type: "int", default: Number.POSITIVE_INFINITY, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: i`
      Format code ending at a given character offset (exclusive).
      The range will extend forwards to the end of the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: p }, rangeStart: { since: "1.4.0", category: g, type: "int", default: 0, range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 }, description: i`
      Format code starting at a given character offset.
      The range will extend backwards to the start of the first line containing the selected statement.
      This option cannot be used with --cursor-offset.
    `, cliCategory: p }, requirePragma: { since: "1.7.0", category: g, type: "boolean", default: !1, description: i`
      Require either '@prettier' or '@format' to be present in the file's first docblock comment
      in order for it to be formatted.
    `, cliCategory: o }, tabWidth: { type: "int", category: f, default: 2, description: "Number of spaces per indentation level.", range: { start: 0, end: Number.POSITIVE_INFINITY, step: 1 } }, useTabs: { since: "1.0.0", category: f, type: "boolean", default: !1, description: "Indent with tabs instead of spaces." }, embeddedLanguageFormatting: { since: "2.1.0", category: f, type: "choice", default: [{ since: "2.1.0", value: "auto" }], description: "Control how Prettier formats quoted code embedded in the file.", choices: [{ value: "auto", description: "Format embedded code if Prettier can automatically identify it." }, { value: "off", description: "Never automatically format embedded code." }] } };
        m.exports = { CATEGORY_CONFIG: d, CATEGORY_EDITOR: p, CATEGORY_FORMAT: u, CATEGORY_OTHER: o, CATEGORY_OUTPUT: a, CATEGORY_GLOBAL: f, CATEGORY_SPECIAL: g, options: x };
      } }), Pi = ee({ "src/main/support.js"(l, m) {
        ne();
        var i = { compare: xu(), lt: Kl(), gte: Ps() }, d = ho(), p = $r().version, u = Is().options;
        function o() {
          let { plugins: f = [], showUnreleased: g = !1, showDeprecated: x = !1, showInternal: C = !1 } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, A = p.split("-", 1)[0], D = f.flatMap((k) => k.languages || []).filter(T), y = d(Object.assign({}, ...f.map((k) => {
            let { options: L } = k;
            return L;
          }), u), "name").filter((k) => T(k) && j(k)).sort((k, L) => k.name === L.name ? 0 : k.name < L.name ? -1 : 1).map(M).map((k) => {
            k = Object.assign({}, k), Array.isArray(k.default) && (k.default = k.default.length === 1 ? k.default[0].value : k.default.filter(T).sort((_, R) => i.compare(R.since, _.since))[0].value), Array.isArray(k.choices) && (k.choices = k.choices.filter((_) => T(_) && j(_)), k.name === "parser" && a(k, D, f));
            let L = Object.fromEntries(f.filter((_) => _.defaultOptions && _.defaultOptions[k.name] !== void 0).map((_) => [_.name, _.defaultOptions[k.name]]));
            return Object.assign(Object.assign({}, k), {}, { pluginDefaults: L });
          });
          return { languages: D, options: y };
          function T(k) {
            return g || !("since" in k) || k.since && i.gte(A, k.since);
          }
          function j(k) {
            return x || !("deprecated" in k) || k.deprecated && i.lt(A, k.deprecated);
          }
          function M(k) {
            return C ? k : je(k, me);
          }
        }
        function a(f, g, x) {
          let C = new Set(f.choices.map((A) => A.value));
          for (let A of g)
            if (A.parsers) {
              for (let D of A.parsers)
                if (!C.has(D)) {
                  C.add(D);
                  let y = x.find((j) => j.parsers && j.parsers[D]), T = A.name;
                  y && y.name && (T += ` (plugin: ${y.name})`), f.choices.push({ value: D, description: T });
                }
            }
        }
        m.exports = { getSupportInfo: o };
      } }), Ko = ee({ "src/utils/is-non-empty-array.js"(l, m) {
        ne();
        function i(d) {
          return Array.isArray(d) && d.length > 0;
        }
        m.exports = i;
      } }), zo = ee({ "src/utils/text/skip.js"(l, m) {
        ne();
        function i(a) {
          return (f, g, x) => {
            let C = x && x.backwards;
            if (g === !1)
              return !1;
            let { length: A } = f, D = g;
            for (; D >= 0 && D < A; ) {
              let y = f.charAt(D);
              if (a instanceof RegExp) {
                if (!a.test(y))
                  return D;
              } else if (!a.includes(y))
                return D;
              C ? D-- : D++;
            }
            return D === -1 || D === A ? D : !1;
          };
        }
        var d = i(/\s/), p = i(" 	"), u = i(",; 	"), o = i(/[^\n\r]/);
        m.exports = { skipWhitespace: d, skipSpaces: p, skipToLineEnd: u, skipEverythingButNewLine: o };
      } }), Ii = ee({ "src/utils/text/skip-inline-comment.js"(l, m) {
        ne();
        function i(d, p) {
          if (p === !1)
            return !1;
          if (d.charAt(p) === "/" && d.charAt(p + 1) === "*") {
            for (let u = p + 2; u < d.length; ++u)
              if (d.charAt(u) === "*" && d.charAt(u + 1) === "/")
                return u + 2;
          }
          return p;
        }
        m.exports = i;
      } }), ji = ee({ "src/utils/text/skip-trailing-comment.js"(l, m) {
        ne();
        var { skipEverythingButNewLine: i } = zo();
        function d(p, u) {
          return u === !1 ? !1 : p.charAt(u) === "/" && p.charAt(u + 1) === "/" ? i(p, u) : u;
        }
        m.exports = d;
      } }), di = ee({ "src/utils/text/skip-newline.js"(l, m) {
        ne();
        function i(d, p, u) {
          let o = u && u.backwards;
          if (p === !1)
            return !1;
          let a = d.charAt(p);
          if (o) {
            if (d.charAt(p - 1) === "\r" && a === `
`)
              return p - 2;
            if (a === `
` || a === "\r" || a === "\u2028" || a === "\u2029")
              return p - 1;
          } else {
            if (a === "\r" && d.charAt(p + 1) === `
`)
              return p + 2;
            if (a === `
` || a === "\r" || a === "\u2028" || a === "\u2029")
              return p + 1;
          }
          return p;
        }
        m.exports = i;
      } }), Uo = ee({ "src/utils/text/get-next-non-space-non-comment-character-index-with-start-index.js"(l, m) {
        ne();
        var i = Ii(), d = di(), p = ji(), { skipSpaces: u } = zo();
        function o(a, f) {
          let g = null, x = f;
          for (; x !== g; )
            g = x, x = u(a, x), x = i(a, x), x = p(a, x), x = d(a, x);
          return x;
        }
        m.exports = o;
      } }), yn = ee({ "src/common/util.js"(l, m) {
        ne();
        var { default: i } = (_a(), vn(Ba)), d = sr(), { getSupportInfo: p } = Pi(), u = Ko(), o = $n(), { skipWhitespace: a, skipSpaces: f, skipToLineEnd: g, skipEverythingButNewLine: x } = zo(), C = Ii(), A = ji(), D = di(), y = Uo(), T = (q) => q[q.length - 2];
        function j(q) {
          return (U, se, ye) => {
            let le = ye && ye.backwards;
            if (se === !1)
              return !1;
            let { length: Ne } = U, X = se;
            for (; X >= 0 && X < Ne; ) {
              let re = U.charAt(X);
              if (q instanceof RegExp) {
                if (!q.test(re))
                  return X;
              } else if (!q.includes(re))
                return X;
              le ? X-- : X++;
            }
            return X === -1 || X === Ne ? X : !1;
          };
        }
        function M(q, U) {
          let se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, ye = f(q, se.backwards ? U - 1 : U, se), le = D(q, ye, se);
          return ye !== le;
        }
        function k(q, U, se) {
          for (let ye = U; ye < se; ++ye)
            if (q.charAt(ye) === `
`)
              return !0;
          return !1;
        }
        function L(q, U, se) {
          let ye = se(U) - 1;
          ye = f(q, ye, { backwards: !0 }), ye = D(q, ye, { backwards: !0 }), ye = f(q, ye, { backwards: !0 });
          let le = D(q, ye, { backwards: !0 });
          return ye !== le;
        }
        function _(q, U) {
          let se = null, ye = U;
          for (; ye !== se; )
            se = ye, ye = g(q, ye), ye = C(q, ye), ye = f(q, ye);
          return ye = A(q, ye), ye = D(q, ye), ye !== !1 && M(q, ye);
        }
        function R(q, U, se) {
          return _(q, se(U));
        }
        function O(q, U, se) {
          return y(q, se(U));
        }
        function Q(q, U, se) {
          return q.charAt(O(q, U, se));
        }
        function v(q, U) {
          let se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
          return f(q, se.backwards ? U - 1 : U, se) !== U;
        }
        function P(q, U) {
          let se = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, ye = 0;
          for (let le = se; le < q.length; ++le)
            q[le] === "	" ? ye = ye + U - ye % U : ye++;
          return ye;
        }
        function E(q, U) {
          let se = q.lastIndexOf(`
`);
          return se === -1 ? 0 : P(q.slice(se + 1).match(/^[\t ]*/)[0], U);
        }
        function w(q, U) {
          let se = { quote: '"', regex: /"/g, escaped: "&quot;" }, ye = { quote: "'", regex: /'/g, escaped: "&apos;" }, le = U === "'" ? ye : se, Ne = le === ye ? se : ye, X = le;
          if (q.includes(le.quote) || q.includes(Ne.quote)) {
            let re = (q.match(le.regex) || []).length, Te = (q.match(Ne.regex) || []).length;
            X = re > Te ? Ne : le;
          }
          return X;
        }
        function c(q, U) {
          let se = q.slice(1, -1), ye = U.parser === "json" || U.parser === "json5" && U.quoteProps === "preserve" && !U.singleQuote ? '"' : U.__isInHtmlAttribute ? "'" : w(se, U.singleQuote ? "'" : '"').quote;
          return F(se, ye, !(U.parser === "css" || U.parser === "less" || U.parser === "scss" || U.__embeddedInHtml));
        }
        function F(q, U, se) {
          let ye = U === '"' ? "'" : '"', le = /\\(.)|(["'])/gs, Ne = q.replace(le, (X, re, Te) => re === ye ? re : Te === U ? "\\" + Te : Te || (se && /^[^\n\r"'0-7\\bfnrt-vx\u2028\u2029]$/.test(re) ? re : "\\" + re));
          return U + Ne + U;
        }
        function S(q) {
          return q.toLowerCase().replace(/^([+-]?[\d.]+e)(?:\+|(-))?0*(\d)/, "$1$2$3").replace(/^([+-]?[\d.]+)e[+-]?0+$/, "$1").replace(/^([+-])?\./, "$10.").replace(/(\.\d+?)0+(?=e|$)/, "$1").replace(/\.(?=e|$)/, "");
        }
        function b(q, U) {
          let se = q.match(new RegExp(`(${i(U)})+`, "g"));
          return se === null ? 0 : se.reduce((ye, le) => Math.max(ye, le.length / U.length), 0);
        }
        function B(q, U) {
          let se = q.match(new RegExp(`(${i(U)})+`, "g"));
          if (se === null)
            return 0;
          let ye = /* @__PURE__ */ new Map(), le = 0;
          for (let Ne of se) {
            let X = Ne.length / U.length;
            ye.set(X, !0), X > le && (le = X);
          }
          for (let Ne = 1; Ne < le; Ne++)
            if (!ye.get(Ne))
              return Ne;
          return le + 1;
        }
        function I(q, U) {
          (q.comments || (q.comments = [])).push(U), U.printed = !1, U.nodeDescription = ie(q);
        }
        function $(q, U) {
          U.leading = !0, U.trailing = !1, I(q, U);
        }
        function G(q, U, se) {
          U.leading = !1, U.trailing = !1, se && (U.marker = se), I(q, U);
        }
        function W(q, U) {
          U.leading = !1, U.trailing = !0, I(q, U);
        }
        function J(q, U) {
          let { languages: se } = p({ plugins: U.plugins }), ye = se.find((le) => {
            let { name: Ne } = le;
            return Ne.toLowerCase() === q;
          }) || se.find((le) => {
            let { aliases: Ne } = le;
            return Array.isArray(Ne) && Ne.includes(q);
          }) || se.find((le) => {
            let { extensions: Ne } = le;
            return Array.isArray(Ne) && Ne.includes(`.${q}`);
          });
          return ye && ye.parsers[0];
        }
        function te(q) {
          return q && q.type === "front-matter";
        }
        function K(q) {
          let U = /* @__PURE__ */ new WeakMap();
          return function(se) {
            return U.has(se) || U.set(se, Symbol(q)), U.get(se);
          };
        }
        function ie(q) {
          let U = q.type || q.kind || "(unknown type)", se = String(q.name || q.id && (typeof q.id == "object" ? q.id.name : q.id) || q.key && (typeof q.key == "object" ? q.key.name : q.key) || q.value && (typeof q.value == "object" ? "" : String(q.value)) || q.operator || "");
          return se.length > 20 && (se = se.slice(0, 19) + "…"), U + (se ? " " + se : "");
        }
        m.exports = { inferParserByLanguage: J, getStringWidth: o, getMaxContinuousCount: b, getMinNotPresentContinuousCount: B, getPenultimate: T, getLast: d, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: y, getNextNonSpaceNonCommentCharacterIndex: O, getNextNonSpaceNonCommentCharacter: Q, skip: j, skipWhitespace: a, skipSpaces: f, skipToLineEnd: g, skipEverythingButNewLine: x, skipInlineComment: C, skipTrailingComment: A, skipNewline: D, isNextLineEmptyAfterIndex: _, isNextLineEmpty: R, isPreviousLineEmpty: L, hasNewline: M, hasNewlineInRange: k, hasSpaces: v, getAlignmentSize: P, getIndentSize: E, getPreferredQuote: w, printString: c, printNumber: S, makeString: F, addLeadingComment: $, addDanglingComment: G, addTrailingComment: W, isFrontMatterNode: te, isNonEmptyArray: u, createGroupIdMapper: K };
      } }), js = {};
      zt(js, { basename: () => Pa, default: () => Oi, delimiter: () => Co, dirname: () => Eo, extname: () => vo, isAbsolute: () => Jo, join: () => _u, normalize: () => yo, relative: () => qo, resolve: () => fi, sep: () => Wu });
      function Go(l, m) {
        for (var i = 0, d = l.length - 1; d >= 0; d--) {
          var p = l[d];
          p === "." ? l.splice(d, 1) : p === ".." ? (l.splice(d, 1), i++) : i && (l.splice(d, 1), i--);
        }
        if (m)
          for (; i--; i)
            l.unshift("..");
        return l;
      }
      function fi() {
        for (var l = "", m = !1, i = arguments.length - 1; i >= -1 && !m; i--) {
          var d = i >= 0 ? arguments[i] : "/";
          if (typeof d != "string")
            throw new TypeError("Arguments to path.resolve must be strings");
          d && (l = d + "/" + l, m = d.charAt(0) === "/");
        }
        return l = Go(Li(l.split("/"), function(p) {
          return !!p;
        }), !m).join("/"), (m ? "/" : "") + l || ".";
      }
      function yo(l) {
        var m = Jo(l), i = Ls(l, -1) === "/";
        return l = Go(Li(l.split("/"), function(d) {
          return !!d;
        }), !m).join("/"), !l && !m && (l = "."), l && i && (l += "/"), (m ? "/" : "") + l;
      }
      function Jo(l) {
        return l.charAt(0) === "/";
      }
      function _u() {
        var l = Array.prototype.slice.call(arguments, 0);
        return yo(Li(l, function(m, i) {
          if (typeof m != "string")
            throw new TypeError("Arguments to path.join must be strings");
          return m;
        }).join("/"));
      }
      function qo(l, m) {
        l = fi(l).substr(1), m = fi(m).substr(1);
        function i(g) {
          for (var x = 0; x < g.length && g[x] === ""; x++)
            ;
          for (var C = g.length - 1; C >= 0 && g[C] === ""; C--)
            ;
          return x > C ? [] : g.slice(x, C - x + 1);
        }
        for (var d = i(l.split("/")), p = i(m.split("/")), u = Math.min(d.length, p.length), o = u, a = 0; a < u; a++)
          if (d[a] !== p[a]) {
            o = a;
            break;
          }
        for (var f = [], a = o; a < d.length; a++)
          f.push("..");
        return f = f.concat(p.slice(o)), f.join("/");
      }
      function Eo(l) {
        var m = Ir(l), i = m[0], d = m[1];
        return !i && !d ? "." : (d && (d = d.substr(0, d.length - 1)), i + d);
      }
      function Pa(l, m) {
        var i = Ir(l)[2];
        return m && i.substr(-1 * m.length) === m && (i = i.substr(0, i.length - m.length)), i;
      }
      function vo(l) {
        return Ir(l)[3];
      }
      function Li(l, m) {
        if (l.filter)
          return l.filter(m);
        for (var i = [], d = 0; d < l.length; d++)
          m(l[d], d, l) && i.push(l[d]);
        return i;
      }
      var Ia, Ir, Wu, Co, Oi, Ls, ja = bt({ "node-modules-polyfills:path"() {
        ne(), Ia = /^(\/?|)([\s\S]*?)((?:\.{1,2}|[^\/]+?|)(\.[^.\/]*|))(?:[\/]*)$/, Ir = function(l) {
          return Ia.exec(l).slice(1);
        }, Wu = "/", Co = ":", Oi = { extname: vo, basename: Pa, dirname: Eo, sep: Wu, delimiter: Co, relative: qo, join: _u, isAbsolute: Jo, normalize: yo, resolve: fi }, Ls = "ab".substr(-1) === "b" ? function(l, m, i) {
          return l.substr(m, i);
        } : function(l, m, i) {
          return m < 0 && (m = l.length + m), l.substr(m, i);
        };
      } }), La = ee({ "node-modules-polyfills-commonjs:path"(l, m) {
        ne();
        var i = (ja(), vn(js));
        if (i && i.default) {
          m.exports = i.default;
          for (let d in i)
            m.exports[d] = i[d];
        } else
          i && (m.exports = i);
      } }), Pu = ee({ "src/common/errors.js"(l, m) {
        ne();
        var i = class extends Error {
        }, d = class extends Error {
        }, p = class extends Error {
        }, u = class extends Error {
        };
        m.exports = { ConfigError: i, DebugError: d, UndefinedParserError: p, ArgExpansionBailout: u };
      } }), ru = {};
      zt(ru, { __assign: () => Xo, __asyncDelegator: () => $a, __asyncGenerator: () => Zl, __asyncValues: () => ec, __await: () => Fo, __awaiter: () => ql, __classPrivateFieldGet: () => rc, __classPrivateFieldSet: () => uc, __createBinding: () => Xl, __decorate: () => Gl, __exportStar: () => Ql, __extends: () => Os, __generator: () => Wl, __importDefault: () => Ms, __importStar: () => nc, __makeTemplateObject: () => tc, __metadata: () => Oa, __param: () => Jl, __read: () => Ra, __rest: () => Ul, __spread: () => Yl, __spreadArrays: () => Hl, __values: () => Ma });
      function Os(l, m) {
        Wo(l, m);
        function i() {
          this.constructor = l;
        }
        l.prototype = m === null ? Object.create(m) : (i.prototype = m.prototype, new i());
      }
      function Ul(l, m) {
        var i = {};
        for (var d in l)
          Object.prototype.hasOwnProperty.call(l, d) && m.indexOf(d) < 0 && (i[d] = l[d]);
        if (l != null && typeof Object.getOwnPropertySymbols == "function")
          for (var p = 0, d = Object.getOwnPropertySymbols(l); p < d.length; p++)
            m.indexOf(d[p]) < 0 && Object.prototype.propertyIsEnumerable.call(l, d[p]) && (i[d[p]] = l[d[p]]);
        return i;
      }
      function Gl(l, m, i, d) {
        var p = arguments.length, u = p < 3 ? m : d === null ? d = Object.getOwnPropertyDescriptor(m, i) : d, o;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          u = Reflect.decorate(l, m, i, d);
        else
          for (var a = l.length - 1; a >= 0; a--)
            (o = l[a]) && (u = (p < 3 ? o(u) : p > 3 ? o(m, i, u) : o(m, i)) || u);
        return p > 3 && u && Object.defineProperty(m, i, u), u;
      }
      function Jl(l, m) {
        return function(i, d) {
          m(i, d, l);
        };
      }
      function Oa(l, m) {
        if (typeof Reflect == "object" && typeof Reflect.metadata == "function")
          return Reflect.metadata(l, m);
      }
      function ql(l, m, i, d) {
        function p(u) {
          return u instanceof i ? u : new i(function(o) {
            o(u);
          });
        }
        return new (i || (i = Promise))(function(u, o) {
          function a(x) {
            try {
              g(d.next(x));
            } catch (C) {
              o(C);
            }
          }
          function f(x) {
            try {
              g(d.throw(x));
            } catch (C) {
              o(C);
            }
          }
          function g(x) {
            x.done ? u(x.value) : p(x.value).then(a, f);
          }
          g((d = d.apply(l, m || [])).next());
        });
      }
      function Wl(l, m) {
        var i = { label: 0, sent: function() {
          if (u[0] & 1)
            throw u[1];
          return u[1];
        }, trys: [], ops: [] }, d, p, u, o;
        return o = { next: a(0), throw: a(1), return: a(2) }, typeof Symbol == "function" && (o[Symbol.iterator] = function() {
          return this;
        }), o;
        function a(g) {
          return function(x) {
            return f([g, x]);
          };
        }
        function f(g) {
          if (d)
            throw new TypeError("Generator is already executing.");
          for (; i; )
            try {
              if (d = 1, p && (u = g[0] & 2 ? p.return : g[0] ? p.throw || ((u = p.return) && u.call(p), 0) : p.next) && !(u = u.call(p, g[1])).done)
                return u;
              switch (p = 0, u && (g = [g[0] & 2, u.value]), g[0]) {
                case 0:
                case 1:
                  u = g;
                  break;
                case 4:
                  return i.label++, { value: g[1], done: !1 };
                case 5:
                  i.label++, p = g[1], g = [0];
                  continue;
                case 7:
                  g = i.ops.pop(), i.trys.pop();
                  continue;
                default:
                  if (u = i.trys, !(u = u.length > 0 && u[u.length - 1]) && (g[0] === 6 || g[0] === 2)) {
                    i = 0;
                    continue;
                  }
                  if (g[0] === 3 && (!u || g[1] > u[0] && g[1] < u[3])) {
                    i.label = g[1];
                    break;
                  }
                  if (g[0] === 6 && i.label < u[1]) {
                    i.label = u[1], u = g;
                    break;
                  }
                  if (u && i.label < u[2]) {
                    i.label = u[2], i.ops.push(g);
                    break;
                  }
                  u[2] && i.ops.pop(), i.trys.pop();
                  continue;
              }
              g = m.call(l, i);
            } catch (x) {
              g = [6, x], p = 0;
            } finally {
              d = u = 0;
            }
          if (g[0] & 5)
            throw g[1];
          return { value: g[0] ? g[1] : void 0, done: !0 };
        }
      }
      function Xl(l, m, i, d) {
        d === void 0 && (d = i), l[d] = m[i];
      }
      function Ql(l, m) {
        for (var i in l)
          i !== "default" && !m.hasOwnProperty(i) && (m[i] = l[i]);
      }
      function Ma(l) {
        var m = typeof Symbol == "function" && Symbol.iterator, i = m && l[m], d = 0;
        if (i)
          return i.call(l);
        if (l && typeof l.length == "number")
          return { next: function() {
            return l && d >= l.length && (l = void 0), { value: l && l[d++], done: !l };
          } };
        throw new TypeError(m ? "Object is not iterable." : "Symbol.iterator is not defined.");
      }
      function Ra(l, m) {
        var i = typeof Symbol == "function" && l[Symbol.iterator];
        if (!i)
          return l;
        var d = i.call(l), p, u = [], o;
        try {
          for (; (m === void 0 || m-- > 0) && !(p = d.next()).done; )
            u.push(p.value);
        } catch (a) {
          o = { error: a };
        } finally {
          try {
            p && !p.done && (i = d.return) && i.call(d);
          } finally {
            if (o)
              throw o.error;
          }
        }
        return u;
      }
      function Yl() {
        for (var l = [], m = 0; m < arguments.length; m++)
          l = l.concat(Ra(arguments[m]));
        return l;
      }
      function Hl() {
        for (var l = 0, m = 0, i = arguments.length; m < i; m++)
          l += arguments[m].length;
        for (var d = Array(l), p = 0, m = 0; m < i; m++)
          for (var u = arguments[m], o = 0, a = u.length; o < a; o++, p++)
            d[p] = u[o];
        return d;
      }
      function Fo(l) {
        return this instanceof Fo ? (this.v = l, this) : new Fo(l);
      }
      function Zl(l, m, i) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var d = i.apply(l, m || []), p, u = [];
        return p = {}, o("next"), o("throw"), o("return"), p[Symbol.asyncIterator] = function() {
          return this;
        }, p;
        function o(A) {
          d[A] && (p[A] = function(D) {
            return new Promise(function(y, T) {
              u.push([A, D, y, T]) > 1 || a(A, D);
            });
          });
        }
        function a(A, D) {
          try {
            f(d[A](D));
          } catch (y) {
            C(u[0][3], y);
          }
        }
        function f(A) {
          A.value instanceof Fo ? Promise.resolve(A.value.v).then(g, x) : C(u[0][2], A);
        }
        function g(A) {
          a("next", A);
        }
        function x(A) {
          a("throw", A);
        }
        function C(A, D) {
          A(D), u.shift(), u.length && a(u[0][0], u[0][1]);
        }
      }
      function $a(l) {
        var m, i;
        return m = {}, d("next"), d("throw", function(p) {
          throw p;
        }), d("return"), m[Symbol.iterator] = function() {
          return this;
        }, m;
        function d(p, u) {
          m[p] = l[p] ? function(o) {
            return (i = !i) ? { value: Fo(l[p](o)), done: p === "return" } : u ? u(o) : o;
          } : u;
        }
      }
      function ec(l) {
        if (!Symbol.asyncIterator)
          throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = l[Symbol.asyncIterator], i;
        return m ? m.call(l) : (l = typeof Ma == "function" ? Ma(l) : l[Symbol.iterator](), i = {}, d("next"), d("throw"), d("return"), i[Symbol.asyncIterator] = function() {
          return this;
        }, i);
        function d(u) {
          i[u] = l[u] && function(o) {
            return new Promise(function(a, f) {
              o = l[u](o), p(a, f, o.done, o.value);
            });
          };
        }
        function p(u, o, a, f) {
          Promise.resolve(f).then(function(g) {
            u({ value: g, done: a });
          }, o);
        }
      }
      function tc(l, m) {
        return Object.defineProperty ? Object.defineProperty(l, "raw", { value: m }) : l.raw = m, l;
      }
      function nc(l) {
        if (l && l.__esModule)
          return l;
        var m = {};
        if (l != null)
          for (var i in l)
            Object.hasOwnProperty.call(l, i) && (m[i] = l[i]);
        return m.default = l, m;
      }
      function Ms(l) {
        return l && l.__esModule ? l : { default: l };
      }
      function rc(l, m) {
        if (!m.has(l))
          throw new TypeError("attempted to get private field on non-instance");
        return m.get(l);
      }
      function uc(l, m, i) {
        if (!m.has(l))
          throw new TypeError("attempted to set private field on non-instance");
        return m.set(l, i), i;
      }
      var Wo, Xo, Xu = bt({ "node_modules/tslib/tslib.es6.js"() {
        ne(), Wo = function(l, m) {
          return Wo = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(i, d) {
            i.__proto__ = d;
          } || function(i, d) {
            for (var p in d)
              d.hasOwnProperty(p) && (i[p] = d[p]);
          }, Wo(l, m);
        }, Xo = function() {
          return Xo = Object.assign || function(l) {
            for (var m, i = 1, d = arguments.length; i < d; i++) {
              m = arguments[i];
              for (var p in m)
                Object.prototype.hasOwnProperty.call(m, p) && (l[p] = m[p]);
            }
            return l;
          }, Xo.apply(this, arguments);
        };
      } }), Rs = ee({ "node_modules/vnopts/lib/descriptors/api.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 }), l.apiDescriptor = { key: (m) => /^[$_a-zA-Z][$_a-zA-Z0-9]*$/.test(m) ? m : JSON.stringify(m), value(m) {
          if (m === null || typeof m != "object")
            return JSON.stringify(m);
          if (Array.isArray(m))
            return `[${m.map((d) => l.apiDescriptor.value(d)).join(", ")}]`;
          let i = Object.keys(m);
          return i.length === 0 ? "{}" : `{ ${i.map((d) => `${l.apiDescriptor.key(d)}: ${l.apiDescriptor.value(m[d])}`).join(", ")} }`;
        }, pair: (m) => {
          let { key: i, value: d } = m;
          return l.apiDescriptor.value({ [i]: d });
        } };
      } }), ic = ee({ "node_modules/vnopts/lib/descriptors/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = (Xu(), vn(ru));
        m.__exportStar(Rs(), l);
      } }), Mi = ee({ "scripts/build/shims/chalk.cjs"(l, m) {
        ne();
        var i = (d) => d;
        i.grey = i, i.red = i, i.bold = i, i.yellow = i, i.blue = i, i.default = i, m.exports = i;
      } }), Ri = ee({ "node_modules/vnopts/lib/handlers/deprecated/common.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Mi();
        l.commonDeprecatedHandler = (i, d, p) => {
          let { descriptor: u } = p, o = [`${m.default.yellow(typeof i == "string" ? u.key(i) : u.pair(i))} is deprecated`];
          return d && o.push(`we now treat it as ${m.default.blue(typeof d == "string" ? u.key(d) : u.pair(d))}`), o.join("; ") + ".";
        };
      } }), oc = ee({ "node_modules/vnopts/lib/handlers/deprecated/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = (Xu(), vn(ru));
        m.__exportStar(Ri(), l);
      } }), $s = ee({ "node_modules/vnopts/lib/handlers/invalid/common.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Mi();
        l.commonInvalidHandler = (i, d, p) => [`Invalid ${m.default.red(p.descriptor.key(i))} value.`, `Expected ${m.default.blue(p.schemas[i].expected(p))},`, `but received ${m.default.red(p.descriptor.value(d))}.`].join(" ");
      } }), Va = ee({ "node_modules/vnopts/lib/handlers/invalid/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = (Xu(), vn(ru));
        m.__exportStar($s(), l);
      } }), Vs = ee({ "node_modules/vnopts/node_modules/leven/index.js"(l, m) {
        ne();
        var i = [], d = [];
        m.exports = function(p, u) {
          if (p === u)
            return 0;
          var o = p;
          p.length > u.length && (p = u, u = o);
          var a = p.length, f = u.length;
          if (a === 0)
            return f;
          if (f === 0)
            return a;
          for (; a > 0 && p.charCodeAt(~-a) === u.charCodeAt(~-f); )
            a--, f--;
          if (a === 0)
            return f;
          for (var g = 0; g < a && p.charCodeAt(g) === u.charCodeAt(g); )
            g++;
          if (a -= g, f -= g, a === 0)
            return f;
          for (var x, C, A, D, y = 0, T = 0; y < a; )
            d[g + y] = p.charCodeAt(g + y), i[y] = ++y;
          for (; T < f; )
            for (x = u.charCodeAt(g + T), A = T++, C = T, y = 0; y < a; y++)
              D = x === d[g + y] ? A : A + 1, A = i[y], C = i[y] = A > C ? D > C ? C + 1 : D : D > A ? A + 1 : D;
          return C;
        };
      } }), Ka = ee({ "node_modules/vnopts/lib/handlers/unknown/leven.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Mi(), i = Vs();
        l.levenUnknownHandler = (d, p, u) => {
          let { descriptor: o, logger: a, schemas: f } = u, g = [`Ignored unknown option ${m.default.yellow(o.pair({ key: d, value: p }))}.`], x = Object.keys(f).sort().find((C) => i(d, C) < 3);
          x && g.push(`Did you mean ${m.default.blue(o.key(x))}?`), a.warn(g.join(" "));
        };
      } }), Ks = ee({ "node_modules/vnopts/lib/handlers/unknown/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = (Xu(), vn(ru));
        m.__exportStar(Ka(), l);
      } }), $i = ee({ "node_modules/vnopts/lib/handlers/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = (Xu(), vn(ru));
        m.__exportStar(oc(), l), m.__exportStar(Va(), l), m.__exportStar(Ks(), l);
      } }), Qu = ee({ "node_modules/vnopts/lib/schema.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = ["default", "expected", "validate", "deprecated", "forward", "redirect", "overlap", "preprocess", "postprocess"];
        function i(u, o) {
          let a = new u(o), f = Object.create(a);
          for (let g of m)
            g in o && (f[g] = p(o[g], a, d.prototype[g].length));
          return f;
        }
        l.createSchema = i;
        var d = class {
          constructor(u) {
            this.name = u.name;
          }
          static create(u) {
            return i(this, u);
          }
          default(u) {
          }
          expected(u) {
            return "nothing";
          }
          validate(u, o) {
            return !1;
          }
          deprecated(u, o) {
            return !1;
          }
          forward(u, o) {
          }
          redirect(u, o) {
          }
          overlap(u, o, a) {
            return u;
          }
          preprocess(u, o) {
            return u;
          }
          postprocess(u, o) {
            return u;
          }
        };
        l.Schema = d;
        function p(u, o, a) {
          return typeof u == "function" ? function() {
            for (var f = arguments.length, g = new Array(f), x = 0; x < f; x++)
              g[x] = arguments[x];
            return u(...g.slice(0, a - 1), o, ...g.slice(a - 1));
          } : () => u;
        }
      } }), ac = ee({ "node_modules/vnopts/lib/schemas/alias.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Qu(), i = class extends m.Schema {
          constructor(d) {
            super(d), this._sourceName = d.sourceName;
          }
          expected(d) {
            return d.schemas[this._sourceName].expected(d);
          }
          validate(d, p) {
            return p.schemas[this._sourceName].validate(d, p);
          }
          redirect(d, p) {
            return this._sourceName;
          }
        };
        l.AliasSchema = i;
      } }), sc = ee({ "node_modules/vnopts/lib/schemas/any.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Qu(), i = class extends m.Schema {
          expected() {
            return "anything";
          }
          validate() {
            return !0;
          }
        };
        l.AnySchema = i;
      } }), zs = ee({ "node_modules/vnopts/lib/schemas/array.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = (Xu(), vn(ru)), i = Qu(), d = class extends i.Schema {
          constructor(u) {
            var { valueSchema: o, name: a = o.name } = u, f = m.__rest(u, ["valueSchema", "name"]);
            super(Object.assign({}, f, { name: a })), this._valueSchema = o;
          }
          expected(u) {
            return `an array of ${this._valueSchema.expected(u)}`;
          }
          validate(u, o) {
            if (!Array.isArray(u))
              return !1;
            let a = [];
            for (let f of u) {
              let g = o.normalizeValidateResult(this._valueSchema.validate(f, o), f);
              g !== !0 && a.push(g.value);
            }
            return a.length === 0 ? !0 : { value: a };
          }
          deprecated(u, o) {
            let a = [];
            for (let f of u) {
              let g = o.normalizeDeprecatedResult(this._valueSchema.deprecated(f, o), f);
              g !== !1 && a.push(...g.map((x) => {
                let { value: C } = x;
                return { value: [C] };
              }));
            }
            return a;
          }
          forward(u, o) {
            let a = [];
            for (let f of u) {
              let g = o.normalizeForwardResult(this._valueSchema.forward(f, o), f);
              a.push(...g.map(p));
            }
            return a;
          }
          redirect(u, o) {
            let a = [], f = [];
            for (let g of u) {
              let x = o.normalizeRedirectResult(this._valueSchema.redirect(g, o), g);
              "remain" in x && a.push(x.remain), f.push(...x.redirect.map(p));
            }
            return a.length === 0 ? { redirect: f } : { redirect: f, remain: a };
          }
          overlap(u, o) {
            return u.concat(o);
          }
        };
        l.ArraySchema = d;
        function p(u) {
          let { from: o, to: a } = u;
          return { from: [o], to: a };
        }
      } }), Us = ee({ "node_modules/vnopts/lib/schemas/boolean.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Qu(), i = class extends m.Schema {
          expected() {
            return "true or false";
          }
          validate(d) {
            return typeof d == "boolean";
          }
        };
        l.BooleanSchema = i;
      } }), mi = ee({ "node_modules/vnopts/lib/utils.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        function m(D, y) {
          let T = /* @__PURE__ */ Object.create(null);
          for (let j of D) {
            let M = j[y];
            if (T[M])
              throw new Error(`Duplicate ${y} ${JSON.stringify(M)}`);
            T[M] = j;
          }
          return T;
        }
        l.recordFromArray = m;
        function i(D, y) {
          let T = /* @__PURE__ */ new Map();
          for (let j of D) {
            let M = j[y];
            if (T.has(M))
              throw new Error(`Duplicate ${y} ${JSON.stringify(M)}`);
            T.set(M, j);
          }
          return T;
        }
        l.mapFromArray = i;
        function d() {
          let D = /* @__PURE__ */ Object.create(null);
          return (y) => {
            let T = JSON.stringify(y);
            return D[T] ? !0 : (D[T] = !0, !1);
          };
        }
        l.createAutoChecklist = d;
        function p(D, y) {
          let T = [], j = [];
          for (let M of D)
            y(M) ? T.push(M) : j.push(M);
          return [T, j];
        }
        l.partition = p;
        function u(D) {
          return D === Math.floor(D);
        }
        l.isInt = u;
        function o(D, y) {
          if (D === y)
            return 0;
          let T = typeof D, j = typeof y, M = ["undefined", "object", "boolean", "number", "string"];
          return T !== j ? M.indexOf(T) - M.indexOf(j) : T !== "string" ? Number(D) - Number(y) : D.localeCompare(y);
        }
        l.comparePrimitive = o;
        function a(D) {
          return D === void 0 ? {} : D;
        }
        l.normalizeDefaultResult = a;
        function f(D, y) {
          return D === !0 ? !0 : D === !1 ? { value: y } : D;
        }
        l.normalizeValidateResult = f;
        function g(D, y) {
          let T = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1;
          return D === !1 ? !1 : D === !0 ? T ? !0 : [{ value: y }] : "value" in D ? [D] : D.length === 0 ? !1 : D;
        }
        l.normalizeDeprecatedResult = g;
        function x(D, y) {
          return typeof D == "string" || "key" in D ? { from: y, to: D } : "from" in D ? { from: D.from, to: D.to } : { from: y, to: D.to };
        }
        l.normalizeTransferResult = x;
        function C(D, y) {
          return D === void 0 ? [] : Array.isArray(D) ? D.map((T) => x(T, y)) : [x(D, y)];
        }
        l.normalizeForwardResult = C;
        function A(D, y) {
          let T = C(typeof D == "object" && "redirect" in D ? D.redirect : D, y);
          return T.length === 0 ? { remain: y, redirect: T } : typeof D == "object" && "remain" in D ? { remain: D.remain, redirect: T } : { redirect: T };
        }
        l.normalizeRedirectResult = A;
      } }), xo = ee({ "node_modules/vnopts/lib/schemas/choice.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Qu(), i = mi(), d = class extends m.Schema {
          constructor(p) {
            super(p), this._choices = i.mapFromArray(p.choices.map((u) => u && typeof u == "object" ? u : { value: u }), "value");
          }
          expected(p) {
            let { descriptor: u } = p, o = Array.from(this._choices.keys()).map((g) => this._choices.get(g)).filter((g) => !g.deprecated).map((g) => g.value).sort(i.comparePrimitive).map(u.value), a = o.slice(0, -2), f = o.slice(-2);
            return a.concat(f.join(" or ")).join(", ");
          }
          validate(p) {
            return this._choices.has(p);
          }
          deprecated(p) {
            let u = this._choices.get(p);
            return u && u.deprecated ? { value: p } : !1;
          }
          forward(p) {
            let u = this._choices.get(p);
            return u ? u.forward : void 0;
          }
          redirect(p) {
            let u = this._choices.get(p);
            return u ? u.redirect : void 0;
          }
        };
        l.ChoiceSchema = d;
      } }), Gs = ee({ "node_modules/vnopts/lib/schemas/number.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Qu(), i = class extends m.Schema {
          expected() {
            return "a number";
          }
          validate(d, p) {
            return typeof d == "number";
          }
        };
        l.NumberSchema = i;
      } }), Qo = ee({ "node_modules/vnopts/lib/schemas/integer.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = mi(), i = Gs(), d = class extends i.NumberSchema {
          expected() {
            return "an integer";
          }
          validate(p, u) {
            return u.normalizeValidateResult(super.validate(p, u), p) === !0 && m.isInt(p);
          }
        };
        l.IntegerSchema = d;
      } }), lc = ee({ "node_modules/vnopts/lib/schemas/string.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Qu(), i = class extends m.Schema {
          expected() {
            return "a string";
          }
          validate(d) {
            return typeof d == "string";
          }
        };
        l.StringSchema = i;
      } }), Js = ee({ "node_modules/vnopts/lib/schemas/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = (Xu(), vn(ru));
        m.__exportStar(ac(), l), m.__exportStar(sc(), l), m.__exportStar(zs(), l), m.__exportStar(Us(), l), m.__exportStar(xo(), l), m.__exportStar(Qo(), l), m.__exportStar(Gs(), l), m.__exportStar(lc(), l);
      } }), za = ee({ "node_modules/vnopts/lib/defaults.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Rs(), i = Ri(), d = Va(), p = Ka();
        l.defaultDescriptor = m.apiDescriptor, l.defaultUnknownHandler = p.levenUnknownHandler, l.defaultInvalidHandler = d.commonInvalidHandler, l.defaultDeprecatedHandler = i.commonDeprecatedHandler;
      } }), Ua = ee({ "node_modules/vnopts/lib/normalize.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = za(), i = mi();
        l.normalize = (p, u, o) => new d(u, o).normalize(p);
        var d = class {
          constructor(p, u) {
            let { logger: o = console, descriptor: a = m.defaultDescriptor, unknown: f = m.defaultUnknownHandler, invalid: g = m.defaultInvalidHandler, deprecated: x = m.defaultDeprecatedHandler } = u || {};
            this._utils = { descriptor: a, logger: o || { warn: () => {
            } }, schemas: i.recordFromArray(p, "name"), normalizeDefaultResult: i.normalizeDefaultResult, normalizeDeprecatedResult: i.normalizeDeprecatedResult, normalizeForwardResult: i.normalizeForwardResult, normalizeRedirectResult: i.normalizeRedirectResult, normalizeValidateResult: i.normalizeValidateResult }, this._unknownHandler = f, this._invalidHandler = g, this._deprecatedHandler = x, this.cleanHistory();
          }
          cleanHistory() {
            this._hasDeprecationWarned = i.createAutoChecklist();
          }
          normalize(p) {
            let u = {}, o = [p], a = () => {
              for (; o.length !== 0; ) {
                let f = o.shift(), g = this._applyNormalization(f, u);
                o.push(...g);
              }
            };
            a();
            for (let f of Object.keys(this._utils.schemas)) {
              let g = this._utils.schemas[f];
              if (!(f in u)) {
                let x = i.normalizeDefaultResult(g.default(this._utils));
                "value" in x && o.push({ [f]: x.value });
              }
            }
            a();
            for (let f of Object.keys(this._utils.schemas)) {
              let g = this._utils.schemas[f];
              f in u && (u[f] = g.postprocess(u[f], this._utils));
            }
            return u;
          }
          _applyNormalization(p, u) {
            let o = [], [a, f] = i.partition(Object.keys(p), (g) => g in this._utils.schemas);
            for (let g of a) {
              let x = this._utils.schemas[g], C = x.preprocess(p[g], this._utils), A = i.normalizeValidateResult(x.validate(C, this._utils), C);
              if (A !== !0) {
                let { value: j } = A, M = this._invalidHandler(g, j, this._utils);
                throw typeof M == "string" ? new Error(M) : M;
              }
              let D = (j) => {
                let { from: M, to: k } = j;
                o.push(typeof k == "string" ? { [k]: M } : { [k.key]: k.value });
              }, y = (j) => {
                let { value: M, redirectTo: k } = j, L = i.normalizeDeprecatedResult(x.deprecated(M, this._utils), C, !0);
                if (L !== !1)
                  if (L === !0)
                    this._hasDeprecationWarned(g) || this._utils.logger.warn(this._deprecatedHandler(g, k, this._utils));
                  else
                    for (let { value: _ } of L) {
                      let R = { key: g, value: _ };
                      if (!this._hasDeprecationWarned(R)) {
                        let O = typeof k == "string" ? { key: k, value: _ } : k;
                        this._utils.logger.warn(this._deprecatedHandler(R, O, this._utils));
                      }
                    }
              };
              i.normalizeForwardResult(x.forward(C, this._utils), C).forEach(D);
              let T = i.normalizeRedirectResult(x.redirect(C, this._utils), C);
              if (T.redirect.forEach(D), "remain" in T) {
                let j = T.remain;
                u[g] = g in u ? x.overlap(u[g], j, this._utils) : j, y({ value: j });
              }
              for (let { from: j, to: M } of T.redirect)
                y({ value: j, redirectTo: M });
            }
            for (let g of f) {
              let x = p[g], C = this._unknownHandler(g, x, this._utils);
              if (C)
                for (let A of Object.keys(C)) {
                  let D = { [A]: C[A] };
                  A in this._utils.schemas ? o.push(D) : Object.assign(u, D);
                }
            }
            return o;
          }
        };
        l.Normalizer = d;
      } }), qs = ee({ "node_modules/vnopts/lib/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = (Xu(), vn(ru));
        m.__exportStar(ic(), l), m.__exportStar($i(), l), m.__exportStar(Js(), l), m.__exportStar(Ua(), l), m.__exportStar(Qu(), l);
      } }), Ws = ee({ "src/main/options-normalizer.js"(l, m) {
        ne();
        var i = qs(), d = sr(), p = { key: (A) => A.length === 1 ? `-${A}` : `--${A}`, value: (A) => i.apiDescriptor.value(A), pair: (A) => {
          let { key: D, value: y } = A;
          return y === !1 ? `--no-${D}` : y === !0 ? p.key(D) : y === "" ? `${p.key(D)} without an argument` : `${p.key(D)}=${y}`;
        } }, u = (A) => {
          let { colorsModule: D, levenshteinDistance: y } = A;
          return class extends i.ChoiceSchema {
            constructor(T) {
              let { name: j, flags: M } = T;
              super({ name: j, choices: M }), this._flags = [...M].sort();
            }
            preprocess(T, j) {
              if (typeof T == "string" && T.length > 0 && !this._flags.includes(T)) {
                let M = this._flags.find((k) => y(k, T) < 3);
                if (M)
                  return j.logger.warn([`Unknown flag ${D.yellow(j.descriptor.value(T))},`, `did you mean ${D.blue(j.descriptor.value(M))}?`].join(" ")), M;
              }
              return T;
            }
            expected() {
              return "a flag";
            }
          };
        }, o;
        function a(A, D) {
          let { logger: y = !1, isCLI: T = !1, passThrough: j = !1, colorsModule: M = null, levenshteinDistance: k = null } = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, L = j ? Array.isArray(j) ? (P, E) => j.includes(P) ? { [P]: E } : void 0 : (P, E) => ({ [P]: E }) : (P, E, w) => {
            let c = w.schemas, F = je(c, Se);
            return i.levenUnknownHandler(P, E, Object.assign(Object.assign({}, w), {}, { schemas: F }));
          }, _ = T ? p : i.apiDescriptor, R = f(D, { isCLI: T, colorsModule: M, levenshteinDistance: k }), O = new i.Normalizer(R, { logger: y, unknown: L, descriptor: _ }), Q = y !== !1;
          Q && o && (O._hasDeprecationWarned = o);
          let v = O.normalize(A);
          return Q && (o = O._hasDeprecationWarned), T && v["plugin-search"] === !1 && (v["plugin-search-dir"] = !1), v;
        }
        function f(A, D) {
          let { isCLI: y, colorsModule: T, levenshteinDistance: j } = D, M = [];
          y && M.push(i.AnySchema.create({ name: "_" }));
          for (let k of A)
            M.push(g(k, { isCLI: y, optionInfos: A, colorsModule: T, levenshteinDistance: j })), k.alias && y && M.push(i.AliasSchema.create({ name: k.alias, sourceName: k.name }));
          return M;
        }
        function g(A, D) {
          let { isCLI: y, optionInfos: T, colorsModule: j, levenshteinDistance: M } = D, { name: k } = A;
          if (k === "plugin-search-dir" || k === "pluginSearchDirs")
            return i.AnySchema.create({ name: k, preprocess(O) {
              return O === !1 || (O = Array.isArray(O) ? O : [O]), O;
            }, validate(O) {
              return O === !1 ? !0 : O.every((Q) => typeof Q == "string");
            }, expected() {
              return "false or paths to plugin search dir";
            } });
          let L = { name: k }, _, R = {};
          switch (A.type) {
            case "int":
              _ = i.IntegerSchema, y && (L.preprocess = Number);
              break;
            case "string":
              _ = i.StringSchema;
              break;
            case "choice":
              _ = i.ChoiceSchema, L.choices = A.choices.map((O) => typeof O == "object" && O.redirect ? Object.assign(Object.assign({}, O), {}, { redirect: { to: { key: A.name, value: O.redirect } } }) : O);
              break;
            case "boolean":
              _ = i.BooleanSchema;
              break;
            case "flag":
              _ = u({ colorsModule: j, levenshteinDistance: M }), L.flags = T.flatMap((O) => [O.alias, O.description && O.name, O.oppositeDescription && `no-${O.name}`].filter(Boolean));
              break;
            case "path":
              _ = i.StringSchema;
              break;
            default:
              throw new Error(`Unexpected type ${A.type}`);
          }
          if (A.exception ? L.validate = (O, Q, v) => A.exception(O) || Q.validate(O, v) : L.validate = (O, Q, v) => O === void 0 || Q.validate(O, v), A.redirect && (R.redirect = (O) => O ? { to: { key: A.redirect.option, value: A.redirect.value } } : void 0), A.deprecated && (R.deprecated = !0), y && !A.array) {
            let O = L.preprocess || ((Q) => Q);
            L.preprocess = (Q, v, P) => v.preprocess(O(Array.isArray(Q) ? d(Q) : Q), P);
          }
          return A.array ? i.ArraySchema.create(Object.assign(Object.assign(Object.assign({}, y ? { preprocess: (O) => Array.isArray(O) ? O : [O] } : {}), R), {}, { valueSchema: _.create(L) })) : _.create(Object.assign(Object.assign({}, L), R));
        }
        function x(A, D, y) {
          return a(A, D, y);
        }
        function C(A, D, y) {
          return a(A, D, Object.assign({ isCLI: !0 }, y));
        }
        m.exports = { normalizeApiOptions: x, normalizeCliOptions: C };
      } }), Nr = ee({ "src/language-js/loc.js"(l, m) {
        ne();
        var i = Ko();
        function d(f) {
          var g, x;
          let C = f.range ? f.range[0] : f.start, A = (g = (x = f.declaration) === null || x === void 0 ? void 0 : x.decorators) !== null && g !== void 0 ? g : f.decorators;
          return i(A) ? Math.min(d(A[0]), C) : C;
        }
        function p(f) {
          return f.range ? f.range[1] : f.end;
        }
        function u(f, g) {
          let x = d(f);
          return Number.isInteger(x) && x === d(g);
        }
        function o(f, g) {
          let x = p(f);
          return Number.isInteger(x) && x === p(g);
        }
        function a(f, g) {
          return u(f, g) && o(f, g);
        }
        m.exports = { locStart: d, locEnd: p, hasSameLocStart: u, hasSameLoc: a };
      } }), cc = ee({ "src/main/load-parser.js"(l, m) {
        ne(), m.exports = () => {
        };
      } }), pc = ee({ "scripts/build/shims/babel-highlight.cjs"(l, m) {
        ne();
        var i = Mi(), d = { shouldHighlight: () => !1, getChalk: () => i };
        m.exports = d;
      } }), dc = ee({ "node_modules/@babel/code-frame/lib/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 }), l.codeFrameColumns = o, l.default = a;
        var m = pc(), i = !1;
        function d(f) {
          return { gutter: f.grey, marker: f.red.bold, message: f.red.bold };
        }
        var p = /\r\n|[\n\r\u2028\u2029]/;
        function u(f, g, x) {
          let C = Object.assign({ column: 0, line: -1 }, f.start), A = Object.assign({}, C, f.end), { linesAbove: D = 2, linesBelow: y = 3 } = x || {}, T = C.line, j = C.column, M = A.line, k = A.column, L = Math.max(T - (D + 1), 0), _ = Math.min(g.length, M + y);
          T === -1 && (L = 0), M === -1 && (_ = g.length);
          let R = M - T, O = {};
          if (R)
            for (let Q = 0; Q <= R; Q++) {
              let v = Q + T;
              if (!j)
                O[v] = !0;
              else if (Q === 0) {
                let P = g[v - 1].length;
                O[v] = [j, P - j + 1];
              } else if (Q === R)
                O[v] = [0, k];
              else {
                let P = g[v - Q].length;
                O[v] = [0, P];
              }
            }
          else
            j === k ? j ? O[T] = [j, 0] : O[T] = !0 : O[T] = [j, k - j];
          return { start: L, end: _, markerLines: O };
        }
        function o(f, g) {
          let x = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {}, C = (x.highlightCode || x.forceColor) && (0, m.shouldHighlight)(x), A = (0, m.getChalk)(x), D = d(A), y = (O, Q) => C ? O(Q) : Q, T = f.split(p), { start: j, end: M, markerLines: k } = u(g, T, x), L = g.start && typeof g.start.column == "number", _ = String(M).length, R = (C ? (0, m.default)(f, x) : f).split(p, M).slice(j, M).map((O, Q) => {
            let v = j + 1 + Q, P = ` ${` ${v}`.slice(-_)} |`, E = k[v], w = !k[v + 1];
            if (E) {
              let c = "";
              if (Array.isArray(E)) {
                let F = O.slice(0, Math.max(E[0] - 1, 0)).replace(/[^\t]/g, " "), S = E[1] || 1;
                c = [`
 `, y(D.gutter, P.replace(/\d/g, " ")), " ", F, y(D.marker, "^").repeat(S)].join(""), w && x.message && (c += " " + y(D.message, x.message));
              }
              return [y(D.marker, ">"), y(D.gutter, P), O.length > 0 ? ` ${O}` : "", c].join("");
            } else
              return ` ${y(D.gutter, P)}${O.length > 0 ? ` ${O}` : ""}`;
          }).join(`
`);
          return x.message && !L && (R = `${" ".repeat(_ + 1)}${x.message}
${R}`), C ? A.reset(R) : R;
        }
        function a(f, g, x) {
          let C = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {};
          if (!i) {
            i = !0;
            let A = "Passing lineNumber and colNumber is deprecated to @babel/code-frame. Please use `codeFrameColumns`.";
            if (Jn.emitWarning)
              Jn.emitWarning(A, "DeprecationWarning");
            else {
              let D = new Error(A);
              D.name = "DeprecationWarning", console.warn(new Error(A));
            }
          }
          return x = Math.max(x, 0), o(f, { start: { column: x, line: g } }, C);
        }
      } }), Ga = ee({ "src/main/parser.js"(l, m) {
        ne();
        var { ConfigError: i } = Pu(), d = Nr();
        cc();
        var { locStart: p, locEnd: u } = d, o = Object.getOwnPropertyNames, a = Object.getOwnPropertyDescriptor;
        function f(C) {
          let A = {};
          for (let D of C.plugins)
            if (D.parsers)
              for (let y of o(D.parsers))
                Object.defineProperty(A, y, a(D.parsers, y));
          return A;
        }
        function g(C) {
          let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : f(C);
          if (typeof C.parser == "function")
            return { parse: C.parser, astFormat: "estree", locStart: p, locEnd: u };
          if (typeof C.parser == "string") {
            if (Object.prototype.hasOwnProperty.call(A, C.parser))
              return A[C.parser];
            throw new i(`Couldn't resolve parser "${C.parser}". Parsers must be explicitly added to the standalone bundle.`);
          }
        }
        function x(C, A) {
          let D = f(A), y = Object.defineProperties({}, Object.fromEntries(Object.keys(D).map((j) => [j, { enumerable: !0, get() {
            return D[j].parse;
          } }]))), T = g(A, D);
          try {
            return T.preprocess && (C = T.preprocess(C, A)), { text: C, ast: T.parse(C, y, A) };
          } catch (j) {
            let { loc: M } = j;
            if (M) {
              let { codeFrameColumns: k } = dc();
              throw j.codeFrame = k(C, M, { highlightCode: !0 }), j.message += `
` + j.codeFrame, j;
            }
            throw j;
          }
        }
        m.exports = { parse: x, resolveParser: g };
      } }), Xs = ee({ "src/main/options.js"(l, m) {
        ne();
        var i = La(), { UndefinedParserError: d } = Pu(), { getSupportInfo: p } = Pi(), u = Ws(), { resolveParser: o } = Ga(), a = { astFormat: "estree", printer: {}, originalText: void 0, locStart: null, locEnd: null };
        function f(C) {
          let A = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {}, D = Object.assign({}, C), y = p({ plugins: C.plugins, showUnreleased: !0, showDeprecated: !0 }).options, T = Object.assign(Object.assign({}, a), Object.fromEntries(y.filter((_) => _.default !== void 0).map((_) => [_.name, _.default])));
          if (!D.parser) {
            if (!D.filepath)
              (A.logger || console).warn("No parser and no filepath given, using 'babel' the parser now but this will throw an error in the future. Please specify a parser or a filepath so one can be inferred."), D.parser = "babel";
            else if (D.parser = x(D.filepath, D.plugins), !D.parser)
              throw new d(`No parser could be inferred for file: ${D.filepath}`);
          }
          let j = o(u.normalizeApiOptions(D, [y.find((_) => _.name === "parser")], { passThrough: !0, logger: !1 }));
          D.astFormat = j.astFormat, D.locEnd = j.locEnd, D.locStart = j.locStart;
          let M = g(D);
          D.printer = M.printers[D.astFormat];
          let k = Object.fromEntries(y.filter((_) => _.pluginDefaults && _.pluginDefaults[M.name] !== void 0).map((_) => [_.name, _.pluginDefaults[M.name]])), L = Object.assign(Object.assign({}, T), k);
          for (let [_, R] of Object.entries(L))
            (D[_] === null || D[_] === void 0) && (D[_] = R);
          return D.parser === "json" && (D.trailingComma = "none"), u.normalizeApiOptions(D, y, Object.assign({ passThrough: Object.keys(a) }, A));
        }
        function g(C) {
          let { astFormat: A } = C;
          if (!A)
            throw new Error("getPlugin() requires astFormat to be set");
          let D = C.plugins.find((y) => y.printers && y.printers[A]);
          if (!D)
            throw new Error(`Couldn't find plugin for AST format "${A}"`);
          return D;
        }
        function x(C, A) {
          let D = i.basename(C).toLowerCase(), y = p({ plugins: A }).languages.filter((T) => T.since !== null).find((T) => T.extensions && T.extensions.some((j) => D.endsWith(j)) || T.filenames && T.filenames.some((j) => j.toLowerCase() === D));
          return y && y.parsers[0];
        }
        m.exports = { normalize: f, hiddenDefaults: a, inferParser: x };
      } }), mu = ee({ "src/main/massage-ast.js"(l, m) {
        ne();
        function i(d, p, u) {
          if (Array.isArray(d))
            return d.map((g) => i(g, p, u)).filter(Boolean);
          if (!d || typeof d != "object")
            return d;
          let o = p.printer.massageAstNode, a;
          o && o.ignoredProperties ? a = o.ignoredProperties : a = /* @__PURE__ */ new Set();
          let f = {};
          for (let [g, x] of Object.entries(d))
            !a.has(g) && typeof x != "function" && (f[g] = i(x, p, d));
          if (o) {
            let g = o(d, f, u);
            if (g === null)
              return;
            if (g)
              return g;
          }
          return f;
        }
        m.exports = i;
      } }), Iu = ee({ "scripts/build/shims/assert.cjs"(l, m) {
        ne();
        var i = () => {
        };
        i.ok = i, i.strictEqual = i, m.exports = i;
      } }), ur = ee({ "src/main/comments.js"(l, m) {
        ne();
        var i = Iu(), { builders: { line: d, hardline: p, breakParent: u, indent: o, lineSuffix: a, join: f, cursor: g } } = Ut(), { hasNewline: x, skipNewline: C, skipSpaces: A, isPreviousLineEmpty: D, addLeadingComment: y, addDanglingComment: T, addTrailingComment: j } = yn(), M = /* @__PURE__ */ new WeakMap();
        function k($, G, W) {
          if (!$)
            return;
          let { printer: J, locStart: te, locEnd: K } = G;
          if (W) {
            if (J.canAttachComment && J.canAttachComment($)) {
              let q;
              for (q = W.length - 1; q >= 0 && !(te(W[q]) <= te($) && K(W[q]) <= K($)); --q)
                ;
              W.splice(q + 1, 0, $);
              return;
            }
          } else if (M.has($))
            return M.get($);
          let ie = J.getCommentChildNodes && J.getCommentChildNodes($, G) || typeof $ == "object" && Object.entries($).filter((q) => {
            let [U] = q;
            return U !== "enclosingNode" && U !== "precedingNode" && U !== "followingNode" && U !== "tokens" && U !== "comments" && U !== "parent";
          }).map((q) => {
            let [, U] = q;
            return U;
          });
          if (ie) {
            W || (W = [], M.set($, W));
            for (let q of ie)
              k(q, G, W);
            return W;
          }
        }
        function L($, G, W, J) {
          let { locStart: te, locEnd: K } = W, ie = te(G), q = K(G), U = k($, W), se, ye, le = 0, Ne = U.length;
          for (; le < Ne; ) {
            let X = le + Ne >> 1, re = U[X], Te = te(re), we = K(re);
            if (Te <= ie && q <= we)
              return L(re, G, W, re);
            if (we <= ie) {
              se = re, le = X + 1;
              continue;
            }
            if (q <= Te) {
              ye = re, Ne = X;
              continue;
            }
            throw new Error("Comment location overlaps with node location");
          }
          if (J && J.type === "TemplateLiteral") {
            let { quasis: X } = J, re = w(X, G, W);
            se && w(X, se, W) !== re && (se = null), ye && w(X, ye, W) !== re && (ye = null);
          }
          return { enclosingNode: J, precedingNode: se, followingNode: ye };
        }
        var _ = () => !1;
        function R($, G, W, J) {
          if (!Array.isArray($))
            return;
          let te = [], { locStart: K, locEnd: ie, printer: { handleComments: q = {} } } = J, { avoidAstMutation: U, ownLine: se = _, endOfLine: ye = _, remaining: le = _ } = q, Ne = $.map((X, re) => Object.assign(Object.assign({}, L(G, X, J)), {}, { comment: X, text: W, options: J, ast: G, isLastComment: $.length - 1 === re }));
          for (let [X, re] of Ne.entries()) {
            let { comment: Te, precedingNode: we, enclosingNode: tt, followingNode: oe, text: H, options: ce, ast: De, isLastComment: Be } = re;
            if (ce.parser === "json" || ce.parser === "json5" || ce.parser === "__js_expression" || ce.parser === "__vue_expression" || ce.parser === "__vue_ts_expression") {
              if (K(Te) - K(De) <= 0) {
                y(De, Te);
                continue;
              }
              if (ie(Te) - ie(De) >= 0) {
                j(De, Te);
                continue;
              }
            }
            let Ke;
            if (U ? Ke = [re] : (Te.enclosingNode = tt, Te.precedingNode = we, Te.followingNode = oe, Ke = [Te, H, ce, De, Be]), Q(H, ce, Ne, X))
              Te.placement = "ownLine", se(...Ke) || (oe ? y(oe, Te) : we ? j(we, Te) : T(tt || De, Te));
            else if (v(H, ce, Ne, X))
              Te.placement = "endOfLine", ye(...Ke) || (we ? j(we, Te) : oe ? y(oe, Te) : T(tt || De, Te));
            else if (Te.placement = "remaining", !le(...Ke))
              if (we && oe) {
                let ze = te.length;
                ze > 0 && te[ze - 1].followingNode !== oe && P(te, H, ce), te.push(re);
              } else
                we ? j(we, Te) : oe ? y(oe, Te) : T(tt || De, Te);
          }
          if (P(te, W, J), !U)
            for (let X of $)
              delete X.precedingNode, delete X.enclosingNode, delete X.followingNode;
        }
        var O = ($) => !/[\S\n\u2028\u2029]/.test($);
        function Q($, G, W, J) {
          let { comment: te, precedingNode: K } = W[J], { locStart: ie, locEnd: q } = G, U = ie(te);
          if (K)
            for (let se = J - 1; se >= 0; se--) {
              let { comment: ye, precedingNode: le } = W[se];
              if (le !== K || !O($.slice(q(ye), U)))
                break;
              U = ie(ye);
            }
          return x($, U, { backwards: !0 });
        }
        function v($, G, W, J) {
          let { comment: te, followingNode: K } = W[J], { locStart: ie, locEnd: q } = G, U = q(te);
          if (K)
            for (let se = J + 1; se < W.length; se++) {
              let { comment: ye, followingNode: le } = W[se];
              if (le !== K || !O($.slice(U, ie(ye))))
                break;
              U = q(ye);
            }
          return x($, U);
        }
        function P($, G, W) {
          let J = $.length;
          if (J === 0)
            return;
          let { precedingNode: te, followingNode: K, enclosingNode: ie } = $[0], q = W.printer.getGapRegex && W.printer.getGapRegex(ie) || /^[\s(]*$/, U = W.locStart(K), se;
          for (se = J; se > 0; --se) {
            let { comment: ye, precedingNode: le, followingNode: Ne } = $[se - 1];
            i.strictEqual(le, te), i.strictEqual(Ne, K);
            let X = G.slice(W.locEnd(ye), U);
            if (q.test(X))
              U = W.locStart(ye);
            else
              break;
          }
          for (let [ye, { comment: le }] of $.entries())
            ye < se ? j(te, le) : y(K, le);
          for (let ye of [te, K])
            ye.comments && ye.comments.length > 1 && ye.comments.sort((le, Ne) => W.locStart(le) - W.locStart(Ne));
          $.length = 0;
        }
        function E($, G) {
          let W = $.getValue();
          return W.printed = !0, G.printer.printComment($, G);
        }
        function w($, G, W) {
          let J = W.locStart(G) - 1;
          for (let te = 1; te < $.length; ++te)
            if (J < W.locStart($[te]))
              return te - 1;
          return 0;
        }
        function c($, G) {
          let W = $.getValue(), J = [E($, G)], { printer: te, originalText: K, locStart: ie, locEnd: q } = G;
          if (te.isBlockComment && te.isBlockComment(W)) {
            let se = x(K, q(W)) ? x(K, ie(W), { backwards: !0 }) ? p : d : " ";
            J.push(se);
          } else
            J.push(p);
          let U = C(K, A(K, q(W)));
          return U !== !1 && x(K, U) && J.push(p), J;
        }
        function F($, G) {
          let W = $.getValue(), J = E($, G), { printer: te, originalText: K, locStart: ie } = G, q = te.isBlockComment && te.isBlockComment(W);
          if (x(K, ie(W), { backwards: !0 })) {
            let se = D(K, W, ie);
            return a([p, se ? p : "", J]);
          }
          let U = [" ", J];
          return q || (U = [a(U), u]), U;
        }
        function S($, G, W, J) {
          let te = [], K = $.getValue();
          return !K || !K.comments || ($.each(() => {
            let ie = $.getValue();
            !ie.leading && !ie.trailing && (!J || J(ie)) && te.push(E($, G));
          }, "comments"), te.length === 0) ? "" : W ? f(p, te) : o([p, f(p, te)]);
        }
        function b($, G, W) {
          let J = $.getValue();
          if (!J)
            return {};
          let te = J.comments || [];
          W && (te = te.filter((U) => !W.has(U)));
          let K = J === G.cursorNode;
          if (te.length === 0) {
            let U = K ? g : "";
            return { leading: U, trailing: U };
          }
          let ie = [], q = [];
          return $.each(() => {
            let U = $.getValue();
            if (W && W.has(U))
              return;
            let { leading: se, trailing: ye } = U;
            se ? ie.push(c($, G)) : ye && q.push(F($, G));
          }, "comments"), K && (ie.unshift(g), q.push(g)), { leading: ie, trailing: q };
        }
        function B($, G, W, J) {
          let { leading: te, trailing: K } = b($, W, J);
          return !te && !K ? G : [te, G, K];
        }
        function I($) {
          if ($)
            for (let G of $) {
              if (!G.printed)
                throw new Error('Comment "' + G.value.trim() + '" was not printed. Please report this error!');
              delete G.printed;
            }
        }
        m.exports = { attach: R, printComments: B, printCommentsSeparately: b, printDanglingComments: S, getSortedChildNodes: k, ensureAllCommentsPrinted: I };
      } }), Qs = ee({ "src/common/ast-path.js"(l, m) {
        ne();
        var i = sr();
        function d(o, a) {
          let f = p(o.stack, a);
          return f === -1 ? null : o.stack[f];
        }
        function p(o, a) {
          for (let f = o.length - 1; f >= 0; f -= 2) {
            let g = o[f];
            if (g && !Array.isArray(g) && --a < 0)
              return f;
          }
          return -1;
        }
        var u = class {
          constructor(o) {
            this.stack = [o];
          }
          getName() {
            let { stack: o } = this, { length: a } = o;
            return a > 1 ? o[a - 2] : null;
          }
          getValue() {
            return i(this.stack);
          }
          getNode() {
            let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return d(this, o);
          }
          getParentNode() {
            let o = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
            return d(this, o + 1);
          }
          call(o) {
            let { stack: a } = this, { length: f } = a, g = i(a);
            for (var x = arguments.length, C = new Array(x > 1 ? x - 1 : 0), A = 1; A < x; A++)
              C[A - 1] = arguments[A];
            for (let y of C)
              g = g[y], a.push(y, g);
            let D = o(this);
            return a.length = f, D;
          }
          callParent(o) {
            let a = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, f = p(this.stack, a + 1), g = this.stack.splice(f + 1), x = o(this);
            return this.stack.push(...g), x;
          }
          each(o) {
            let { stack: a } = this, { length: f } = a, g = i(a);
            for (var x = arguments.length, C = new Array(x > 1 ? x - 1 : 0), A = 1; A < x; A++)
              C[A - 1] = arguments[A];
            for (let D of C)
              g = g[D], a.push(D, g);
            for (let D = 0; D < g.length; ++D)
              a.push(D, g[D]), o(this, D, g), a.length -= 2;
            a.length = f;
          }
          map(o) {
            let a = [];
            for (var f = arguments.length, g = new Array(f > 1 ? f - 1 : 0), x = 1; x < f; x++)
              g[x - 1] = arguments[x];
            return this.each((C, A, D) => {
              a[A] = o(C, A, D);
            }, ...g), a;
          }
          try(o) {
            let { stack: a } = this, f = [...a];
            try {
              return o();
            } finally {
              a.length = 0, a.push(...f);
            }
          }
          match() {
            let o = this.stack.length - 1, a = null, f = this.stack[o--];
            for (var g = arguments.length, x = new Array(g), C = 0; C < g; C++)
              x[C] = arguments[C];
            for (let A of x) {
              if (f === void 0)
                return !1;
              let D = null;
              if (typeof a == "number" && (D = a, a = this.stack[o--], f = this.stack[o--]), A && !A(f, a, D))
                return !1;
              a = this.stack[o--], f = this.stack[o--];
            }
            return !0;
          }
          findAncestor(o) {
            let a = this.stack.length - 1, f = null, g = this.stack[a--];
            for (; g; ) {
              let x = null;
              if (typeof f == "number" && (x = f, f = this.stack[a--], g = this.stack[a--]), f !== null && o(g, f, x))
                return g;
              f = this.stack[a--], g = this.stack[a--];
            }
          }
        };
        m.exports = u;
      } }), Ys = ee({ "src/main/multiparser.js"(l, m) {
        ne();
        var { utils: { stripTrailingHardline: i } } = Ut(), { normalize: d } = Xs(), p = ur();
        function u(a, f, g, x) {
          if (g.printer.embed && g.embeddedLanguageFormatting === "auto")
            return g.printer.embed(a, f, (C, A, D) => o(C, A, g, x, D), g);
        }
        function o(a, f, g, x) {
          let { stripTrailingHardline: C = !1 } = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : {}, A = d(Object.assign(Object.assign(Object.assign({}, g), f), {}, { parentParser: g.parser, originalText: a }), { passThrough: !0 }), D = Ga().parse(a, A), { ast: y } = D;
          a = D.text;
          let T = y.comments;
          delete y.comments, p.attach(T, y, a, A), A[Symbol.for("comments")] = T || [], A[Symbol.for("tokens")] = y.tokens || [];
          let j = x(y, A);
          return p.ensureAllCommentsPrinted(T), C ? typeof j == "string" ? j.replace(/(?:\r?\n)*$/, "") : i(j) : j;
        }
        m.exports = { printSubtree: u };
      } }), Hs = ee({ "src/main/ast-to-doc.js"(l, m) {
        ne();
        var i = Qs(), { builders: { hardline: d, addAlignmentToDoc: p }, utils: { propagateBreaks: u } } = Ut(), { printComments: o } = ur(), a = Ys();
        function f(C, A) {
          let D = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, { printer: y } = A;
          y.preprocess && (C = y.preprocess(C, A));
          let T = /* @__PURE__ */ new Map(), j = new i(C), M = k();
          return D > 0 && (M = p([d, M], D, A.tabWidth)), u(M), M;
          function k(_, R) {
            return _ === void 0 || _ === j ? L(R) : Array.isArray(_) ? j.call(() => L(R), ..._) : j.call(() => L(R), _);
          }
          function L(_) {
            let R = j.getValue(), O = R && typeof R == "object" && _ === void 0;
            if (O && T.has(R))
              return T.get(R);
            let Q = x(j, A, k, _);
            return O && T.set(R, Q), Q;
          }
        }
        function g(C, A) {
          let { originalText: D, [Symbol.for("comments")]: y, locStart: T, locEnd: j } = A, M = T(C), k = j(C), L = /* @__PURE__ */ new Set();
          for (let _ of y)
            T(_) >= M && j(_) <= k && (_.printed = !0, L.add(_));
          return { doc: D.slice(M, k), printedComments: L };
        }
        function x(C, A, D, y) {
          let T = C.getValue(), { printer: j } = A, M, k;
          if (j.hasPrettierIgnore && j.hasPrettierIgnore(C))
            ({ doc: M, printedComments: k } = g(T, A));
          else {
            if (T)
              try {
                M = a.printSubtree(C, D, A, f);
              } catch (L) {
                if (globalThis.PRETTIER_DEBUG)
                  throw L;
              }
            M || (M = j.print(C, A, D, y));
          }
          return (!j.willPrintOwnComments || !j.willPrintOwnComments(C, A)) && (M = o(C, M, A, k)), M;
        }
        m.exports = f;
      } }), Ja = ee({ "src/main/range-util.js"(l, m) {
        ne();
        var i = Iu(), d = ur(), p = (y) => {
          let { parser: T } = y;
          return T === "json" || T === "json5" || T === "json-stringify";
        };
        function u(y, T) {
          let j = [y.node, ...y.parentNodes], M = /* @__PURE__ */ new Set([T.node, ...T.parentNodes]);
          return j.find((k) => x.has(k.type) && M.has(k));
        }
        function o(y) {
          let T = y.length - 1;
          for (; ; ) {
            let j = y[T];
            if (j && (j.type === "Program" || j.type === "File"))
              T--;
            else
              break;
          }
          return y.slice(0, T + 1);
        }
        function a(y, T, j) {
          let { locStart: M, locEnd: k } = j, L = y.node, _ = T.node;
          if (L === _)
            return { startNode: L, endNode: _ };
          let R = M(y.node);
          for (let Q of o(T.parentNodes))
            if (M(Q) >= R)
              _ = Q;
            else
              break;
          let O = k(T.node);
          for (let Q of o(y.parentNodes)) {
            if (k(Q) <= O)
              L = Q;
            else
              break;
            if (L === _)
              break;
          }
          return { startNode: L, endNode: _ };
        }
        function f(y, T, j, M) {
          let k = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : [], L = arguments.length > 5 ? arguments[5] : void 0, { locStart: _, locEnd: R } = j, O = _(y), Q = R(y);
          if (!(T > Q || T < O || L === "rangeEnd" && T === O || L === "rangeStart" && T === Q)) {
            for (let v of d.getSortedChildNodes(y, j)) {
              let P = f(v, T, j, M, [y, ...k], L);
              if (P)
                return P;
            }
            if (!M || M(y, k[0]))
              return { node: y, parentNodes: k };
          }
        }
        function g(y, T) {
          return T !== "DeclareExportDeclaration" && y !== "TypeParameterDeclaration" && (y === "Directive" || y === "TypeAlias" || y === "TSExportAssignment" || y.startsWith("Declare") || y.startsWith("TSDeclare") || y.endsWith("Statement") || y.endsWith("Declaration"));
        }
        var x = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "StringLiteral", "NumericLiteral", "BooleanLiteral", "NullLiteral", "UnaryExpression", "TemplateLiteral"]), C = /* @__PURE__ */ new Set(["OperationDefinition", "FragmentDefinition", "VariableDefinition", "TypeExtensionDefinition", "ObjectTypeDefinition", "FieldDefinition", "DirectiveDefinition", "EnumTypeDefinition", "EnumValueDefinition", "InputValueDefinition", "InputObjectTypeDefinition", "SchemaDefinition", "OperationTypeDefinition", "InterfaceTypeDefinition", "UnionTypeDefinition", "ScalarTypeDefinition"]);
        function A(y, T, j) {
          if (!T)
            return !1;
          switch (y.parser) {
            case "flow":
            case "babel":
            case "babel-flow":
            case "babel-ts":
            case "typescript":
            case "acorn":
            case "espree":
            case "meriyah":
            case "__babel_estree":
              return g(T.type, j && j.type);
            case "json":
            case "json5":
            case "json-stringify":
              return x.has(T.type);
            case "graphql":
              return C.has(T.kind);
            case "vue":
              return T.tag !== "root";
          }
          return !1;
        }
        function D(y, T, j) {
          let { rangeStart: M, rangeEnd: k, locStart: L, locEnd: _ } = T;
          i.ok(k > M);
          let R = y.slice(M, k).search(/\S/), O = R === -1;
          if (!O)
            for (M += R; k > M && !/\S/.test(y[k - 1]); --k)
              ;
          let Q = f(j, M, T, (w, c) => A(T, w, c), [], "rangeStart"), v = O ? Q : f(j, k, T, (w) => A(T, w), [], "rangeEnd");
          if (!Q || !v)
            return { rangeStart: 0, rangeEnd: 0 };
          let P, E;
          if (p(T)) {
            let w = u(Q, v);
            P = w, E = w;
          } else
            ({ startNode: P, endNode: E } = a(Q, v, T));
          return { rangeStart: Math.min(L(P), L(E)), rangeEnd: Math.max(_(P), _(E)) };
        }
        m.exports = { calculateRange: D, findNodeAtOffset: f };
      } }), fc = ee({ "src/main/core.js"(l, m) {
        ne();
        var { diffArrays: i } = bi(), { printer: { printDocToString: d }, debug: { printDocToDebug: p } } = Ut(), { getAlignmentSize: u } = yn(), { guessEndOfLine: o, convertEndOfLineToChars: a, countEndOfLineChars: f, normalizeEndOfLine: g } = Gu(), x = Xs().normalize, C = mu(), A = ur(), D = Ga(), y = Hs(), T = Ja(), j = "\uFEFF", M = Symbol("cursor");
        function k(E, w, c) {
          let F = w.comments;
          return F && (delete w.comments, A.attach(F, w, E, c)), c[Symbol.for("comments")] = F || [], c[Symbol.for("tokens")] = w.tokens || [], c.originalText = E, F;
        }
        function L(E, w) {
          let c = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0;
          if (!E || E.trim().length === 0)
            return { formatted: "", cursorOffset: -1, comments: [] };
          let { ast: F, text: S } = D.parse(E, w);
          if (w.cursorOffset >= 0) {
            let $ = T.findNodeAtOffset(F, w.cursorOffset, w);
            $ && $.node && (w.cursorNode = $.node);
          }
          let b = k(S, F, w), B = y(F, w, c), I = d(B, w);
          if (A.ensureAllCommentsPrinted(b), c > 0) {
            let $ = I.formatted.trim();
            I.cursorNodeStart !== void 0 && (I.cursorNodeStart -= I.formatted.indexOf($)), I.formatted = $ + a(w.endOfLine);
          }
          if (w.cursorOffset >= 0) {
            let $, G, W, J, te;
            if (w.cursorNode && I.cursorNodeText ? ($ = w.locStart(w.cursorNode), G = S.slice($, w.locEnd(w.cursorNode)), W = w.cursorOffset - $, J = I.cursorNodeStart, te = I.cursorNodeText) : ($ = 0, G = S, W = w.cursorOffset, J = 0, te = I.formatted), G === te)
              return { formatted: I.formatted, cursorOffset: J + W, comments: b };
            let K = [...G];
            K.splice(W, 0, M);
            let ie = [...te], q = i(K, ie), U = J;
            for (let se of q)
              if (se.removed) {
                if (se.value.includes(M))
                  break;
              } else
                U += se.count;
            return { formatted: I.formatted, cursorOffset: U, comments: b };
          }
          return { formatted: I.formatted, cursorOffset: -1, comments: b };
        }
        function _(E, w) {
          let { ast: c, text: F } = D.parse(E, w), { rangeStart: S, rangeEnd: b } = T.calculateRange(F, w, c), B = F.slice(S, b), I = Math.min(S, F.lastIndexOf(`
`, S) + 1), $ = F.slice(I, S).match(/^\s*/)[0], G = u($, w.tabWidth), W = L(B, Object.assign(Object.assign({}, w), {}, { rangeStart: 0, rangeEnd: Number.POSITIVE_INFINITY, cursorOffset: w.cursorOffset > S && w.cursorOffset <= b ? w.cursorOffset - S : -1, endOfLine: "lf" }), G), J = W.formatted.trimEnd(), { cursorOffset: te } = w;
          te > b ? te += J.length - B.length : W.cursorOffset >= 0 && (te = W.cursorOffset + S);
          let K = F.slice(0, S) + J + F.slice(b);
          if (w.endOfLine !== "lf") {
            let ie = a(w.endOfLine);
            te >= 0 && ie === `\r
` && (te += f(K.slice(0, te), `
`)), K = K.replace(/\n/g, ie);
          }
          return { formatted: K, cursorOffset: te, comments: W.comments };
        }
        function R(E, w, c) {
          return typeof w != "number" || Number.isNaN(w) || w < 0 || w > E.length ? c : w;
        }
        function O(E, w) {
          let { cursorOffset: c, rangeStart: F, rangeEnd: S } = w;
          return c = R(E, c, -1), F = R(E, F, 0), S = R(E, S, E.length), Object.assign(Object.assign({}, w), {}, { cursorOffset: c, rangeStart: F, rangeEnd: S });
        }
        function Q(E, w) {
          let { cursorOffset: c, rangeStart: F, rangeEnd: S, endOfLine: b } = O(E, w), B = E.charAt(0) === j;
          if (B && (E = E.slice(1), c--, F--, S--), b === "auto" && (b = o(E)), E.includes("\r")) {
            let I = ($) => f(E.slice(0, Math.max($, 0)), `\r
`);
            c -= I(c), F -= I(F), S -= I(S), E = g(E);
          }
          return { hasBOM: B, text: E, options: O(E, Object.assign(Object.assign({}, w), {}, { cursorOffset: c, rangeStart: F, rangeEnd: S, endOfLine: b })) };
        }
        function v(E, w) {
          let c = D.resolveParser(w);
          return !c.hasPragma || c.hasPragma(E);
        }
        function P(E, w) {
          let { hasBOM: c, text: F, options: S } = Q(E, x(w));
          if (S.rangeStart >= S.rangeEnd && F !== "" || S.requirePragma && !v(F, S))
            return { formatted: E, cursorOffset: w.cursorOffset, comments: [] };
          let b;
          return S.rangeStart > 0 || S.rangeEnd < F.length ? b = _(F, S) : (!S.requirePragma && S.insertPragma && S.printer.insertPragma && !v(F, S) && (F = S.printer.insertPragma(F)), b = L(F, S)), c && (b.formatted = j + b.formatted, b.cursorOffset >= 0 && b.cursorOffset++), b;
        }
        m.exports = { formatWithCursor: P, parse(E, w, c) {
          let { text: F, options: S } = Q(E, x(w)), b = D.parse(F, S);
          return c && (b.ast = C(b.ast, S)), b;
        }, formatAST(E, w) {
          w = x(w);
          let c = y(E, w);
          return d(c, w);
        }, formatDoc(E, w) {
          return P(p(E), Object.assign(Object.assign({}, w), {}, { parser: "__js_expression" })).formatted;
        }, printToDoc(E, w) {
          w = x(w);
          let { ast: c, text: F } = D.parse(E, w);
          return k(F, c, w), y(c, w);
        }, printDocToString(E, w) {
          return d(E, x(w));
        } };
      } }), mc = ee({ "src/common/util-shared.js"(l, m) {
        ne();
        var { getMaxContinuousCount: i, getStringWidth: d, getAlignmentSize: p, getIndentSize: u, skip: o, skipWhitespace: a, skipSpaces: f, skipNewline: g, skipToLineEnd: x, skipEverythingButNewLine: C, skipInlineComment: A, skipTrailingComment: D, hasNewline: y, hasNewlineInRange: T, hasSpaces: j, isNextLineEmpty: M, isNextLineEmptyAfterIndex: k, isPreviousLineEmpty: L, getNextNonSpaceNonCommentCharacterIndex: _, makeString: R, addLeadingComment: O, addDanglingComment: Q, addTrailingComment: v } = yn();
        m.exports = { getMaxContinuousCount: i, getStringWidth: d, getAlignmentSize: p, getIndentSize: u, skip: o, skipWhitespace: a, skipSpaces: f, skipNewline: g, skipToLineEnd: x, skipEverythingButNewLine: C, skipInlineComment: A, skipTrailingComment: D, hasNewline: y, hasNewlineInRange: T, hasSpaces: j, isNextLineEmpty: M, isNextLineEmptyAfterIndex: k, isPreviousLineEmpty: L, getNextNonSpaceNonCommentCharacterIndex: _, makeString: R, addLeadingComment: O, addDanglingComment: Q, addTrailingComment: v };
      } }), uu = ee({ "src/utils/create-language.js"(l, m) {
        ne(), m.exports = function(i, d) {
          let { languageId: p } = i, u = je(i, Ce);
          return Object.assign(Object.assign({ linguistLanguageId: p }, u), d(i));
        };
      } }), qa = ee({ "node_modules/esutils/lib/ast.js"(l, m) {
        ne(), function() {
          function i(f) {
            if (f == null)
              return !1;
            switch (f.type) {
              case "ArrayExpression":
              case "AssignmentExpression":
              case "BinaryExpression":
              case "CallExpression":
              case "ConditionalExpression":
              case "FunctionExpression":
              case "Identifier":
              case "Literal":
              case "LogicalExpression":
              case "MemberExpression":
              case "NewExpression":
              case "ObjectExpression":
              case "SequenceExpression":
              case "ThisExpression":
              case "UnaryExpression":
              case "UpdateExpression":
                return !0;
            }
            return !1;
          }
          function d(f) {
            if (f == null)
              return !1;
            switch (f.type) {
              case "DoWhileStatement":
              case "ForInStatement":
              case "ForStatement":
              case "WhileStatement":
                return !0;
            }
            return !1;
          }
          function p(f) {
            if (f == null)
              return !1;
            switch (f.type) {
              case "BlockStatement":
              case "BreakStatement":
              case "ContinueStatement":
              case "DebuggerStatement":
              case "DoWhileStatement":
              case "EmptyStatement":
              case "ExpressionStatement":
              case "ForInStatement":
              case "ForStatement":
              case "IfStatement":
              case "LabeledStatement":
              case "ReturnStatement":
              case "SwitchStatement":
              case "ThrowStatement":
              case "TryStatement":
              case "VariableDeclaration":
              case "WhileStatement":
              case "WithStatement":
                return !0;
            }
            return !1;
          }
          function u(f) {
            return p(f) || f != null && f.type === "FunctionDeclaration";
          }
          function o(f) {
            switch (f.type) {
              case "IfStatement":
                return f.alternate != null ? f.alternate : f.consequent;
              case "LabeledStatement":
              case "ForStatement":
              case "ForInStatement":
              case "WhileStatement":
              case "WithStatement":
                return f.body;
            }
            return null;
          }
          function a(f) {
            var g;
            if (f.type !== "IfStatement" || f.alternate == null)
              return !1;
            g = f.consequent;
            do {
              if (g.type === "IfStatement" && g.alternate == null)
                return !0;
              g = o(g);
            } while (g);
            return !1;
          }
          m.exports = { isExpression: i, isStatement: p, isIterationStatement: d, isSourceElement: u, isProblematicIfStatement: a, trailingStatement: o };
        }();
      } }), Vi = ee({ "node_modules/esutils/lib/code.js"(l, m) {
        ne(), function() {
          var i, d, p, u, o, a;
          d = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u1884\u1887-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2E2F\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/, NonAsciiIdentifierPart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19D9\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2119-\u211D\u2124\u2126\u2128\u212A-\u212D\u212F-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u2E2F\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099\u309A\u309D-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]/ }, i = { NonAsciiIdentifierStart: /[\xAA\xB5\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0370-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386\u0388-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u05D0-\u05EA\u05F0-\u05F2\u0620-\u064A\u066E\u066F\u0671-\u06D3\u06D5\u06E5\u06E6\u06EE\u06EF\u06FA-\u06FC\u06FF\u0710\u0712-\u072F\u074D-\u07A5\u07B1\u07CA-\u07EA\u07F4\u07F5\u07FA\u0800-\u0815\u081A\u0824\u0828\u0840-\u0858\u08A0-\u08B4\u08B6-\u08BD\u0904-\u0939\u093D\u0950\u0958-\u0961\u0971-\u0980\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BD\u09CE\u09DC\u09DD\u09DF-\u09E1\u09F0\u09F1\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A59-\u0A5C\u0A5E\u0A72-\u0A74\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABD\u0AD0\u0AE0\u0AE1\u0AF9\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3D\u0B5C\u0B5D\u0B5F-\u0B61\u0B71\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BD0\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D\u0C58-\u0C5A\u0C60\u0C61\u0C80\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBD\u0CDE\u0CE0\u0CE1\u0CF1\u0CF2\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D\u0D4E\u0D54-\u0D56\u0D5F-\u0D61\u0D7A-\u0D7F\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0E01-\u0E30\u0E32\u0E33\u0E40-\u0E46\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB0\u0EB2\u0EB3\u0EBD\u0EC0-\u0EC4\u0EC6\u0EDC-\u0EDF\u0F00\u0F40-\u0F47\u0F49-\u0F6C\u0F88-\u0F8C\u1000-\u102A\u103F\u1050-\u1055\u105A-\u105D\u1061\u1065\u1066\u106E-\u1070\u1075-\u1081\u108E\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1711\u1720-\u1731\u1740-\u1751\u1760-\u176C\u176E-\u1770\u1780-\u17B3\u17D7\u17DC\u1820-\u1877\u1880-\u18A8\u18AA\u18B0-\u18F5\u1900-\u191E\u1950-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u1A00-\u1A16\u1A20-\u1A54\u1AA7\u1B05-\u1B33\u1B45-\u1B4B\u1B83-\u1BA0\u1BAE\u1BAF\u1BBA-\u1BE5\u1C00-\u1C23\u1C4D-\u1C4F\u1C5A-\u1C7D\u1C80-\u1C88\u1CE9-\u1CEC\u1CEE-\u1CF1\u1CF5\u1CF6\u1D00-\u1DBF\u1E00-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u2071\u207F\u2090-\u209C\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CEE\u2CF2\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D80-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u3005-\u3007\u3021-\u3029\u3031-\u3035\u3038-\u303C\u3041-\u3096\u309B-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA61F\uA62A\uA62B\uA640-\uA66E\uA67F-\uA69D\uA6A0-\uA6EF\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA801\uA803-\uA805\uA807-\uA80A\uA80C-\uA822\uA840-\uA873\uA882-\uA8B3\uA8F2-\uA8F7\uA8FB\uA8FD\uA90A-\uA925\uA930-\uA946\uA960-\uA97C\uA984-\uA9B2\uA9CF\uA9E0-\uA9E4\uA9E6-\uA9EF\uA9FA-\uA9FE\uAA00-\uAA28\uAA40-\uAA42\uAA44-\uAA4B\uAA60-\uAA76\uAA7A\uAA7E-\uAAAF\uAAB1\uAAB5\uAAB6\uAAB9-\uAABD\uAAC0\uAAC2\uAADB-\uAADD\uAAE0-\uAAEA\uAAF2-\uAAF4\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABE2\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D\uFB1F-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE70-\uFE74\uFE76-\uFEFC\uFF21-\uFF3A\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDE80-\uDE9C\uDEA0-\uDED0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF75\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00\uDE10-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE4\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC03-\uDC37\uDC83-\uDCAF\uDCD0-\uDCE8\uDD03-\uDD26\uDD50-\uDD72\uDD76\uDD83-\uDDB2\uDDC1-\uDDC4\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE2B\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEDE\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3D\uDF50\uDF5D-\uDF61]|\uD805[\uDC00-\uDC34\uDC47-\uDC4A\uDC80-\uDCAF\uDCC4\uDCC5\uDCC7\uDD80-\uDDAE\uDDD8-\uDDDB\uDE00-\uDE2F\uDE44\uDE80-\uDEAA\uDF00-\uDF19]|\uD806[\uDCA0-\uDCDF\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC2E\uDC40\uDC72-\uDC8F]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDED0-\uDEED\uDF00-\uDF2F\uDF40-\uDF43\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50\uDF93-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB]|\uD83A[\uDC00-\uDCC4\uDD00-\uDD43]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]/, NonAsciiIdentifierPart: /[\xAA\xB5\xB7\xBA\xC0-\xD6\xD8-\xF6\xF8-\u02C1\u02C6-\u02D1\u02E0-\u02E4\u02EC\u02EE\u0300-\u0374\u0376\u0377\u037A-\u037D\u037F\u0386-\u038A\u038C\u038E-\u03A1\u03A3-\u03F5\u03F7-\u0481\u0483-\u0487\u048A-\u052F\u0531-\u0556\u0559\u0561-\u0587\u0591-\u05BD\u05BF\u05C1\u05C2\u05C4\u05C5\u05C7\u05D0-\u05EA\u05F0-\u05F2\u0610-\u061A\u0620-\u0669\u066E-\u06D3\u06D5-\u06DC\u06DF-\u06E8\u06EA-\u06FC\u06FF\u0710-\u074A\u074D-\u07B1\u07C0-\u07F5\u07FA\u0800-\u082D\u0840-\u085B\u08A0-\u08B4\u08B6-\u08BD\u08D4-\u08E1\u08E3-\u0963\u0966-\u096F\u0971-\u0983\u0985-\u098C\u098F\u0990\u0993-\u09A8\u09AA-\u09B0\u09B2\u09B6-\u09B9\u09BC-\u09C4\u09C7\u09C8\u09CB-\u09CE\u09D7\u09DC\u09DD\u09DF-\u09E3\u09E6-\u09F1\u0A01-\u0A03\u0A05-\u0A0A\u0A0F\u0A10\u0A13-\u0A28\u0A2A-\u0A30\u0A32\u0A33\u0A35\u0A36\u0A38\u0A39\u0A3C\u0A3E-\u0A42\u0A47\u0A48\u0A4B-\u0A4D\u0A51\u0A59-\u0A5C\u0A5E\u0A66-\u0A75\u0A81-\u0A83\u0A85-\u0A8D\u0A8F-\u0A91\u0A93-\u0AA8\u0AAA-\u0AB0\u0AB2\u0AB3\u0AB5-\u0AB9\u0ABC-\u0AC5\u0AC7-\u0AC9\u0ACB-\u0ACD\u0AD0\u0AE0-\u0AE3\u0AE6-\u0AEF\u0AF9\u0B01-\u0B03\u0B05-\u0B0C\u0B0F\u0B10\u0B13-\u0B28\u0B2A-\u0B30\u0B32\u0B33\u0B35-\u0B39\u0B3C-\u0B44\u0B47\u0B48\u0B4B-\u0B4D\u0B56\u0B57\u0B5C\u0B5D\u0B5F-\u0B63\u0B66-\u0B6F\u0B71\u0B82\u0B83\u0B85-\u0B8A\u0B8E-\u0B90\u0B92-\u0B95\u0B99\u0B9A\u0B9C\u0B9E\u0B9F\u0BA3\u0BA4\u0BA8-\u0BAA\u0BAE-\u0BB9\u0BBE-\u0BC2\u0BC6-\u0BC8\u0BCA-\u0BCD\u0BD0\u0BD7\u0BE6-\u0BEF\u0C00-\u0C03\u0C05-\u0C0C\u0C0E-\u0C10\u0C12-\u0C28\u0C2A-\u0C39\u0C3D-\u0C44\u0C46-\u0C48\u0C4A-\u0C4D\u0C55\u0C56\u0C58-\u0C5A\u0C60-\u0C63\u0C66-\u0C6F\u0C80-\u0C83\u0C85-\u0C8C\u0C8E-\u0C90\u0C92-\u0CA8\u0CAA-\u0CB3\u0CB5-\u0CB9\u0CBC-\u0CC4\u0CC6-\u0CC8\u0CCA-\u0CCD\u0CD5\u0CD6\u0CDE\u0CE0-\u0CE3\u0CE6-\u0CEF\u0CF1\u0CF2\u0D01-\u0D03\u0D05-\u0D0C\u0D0E-\u0D10\u0D12-\u0D3A\u0D3D-\u0D44\u0D46-\u0D48\u0D4A-\u0D4E\u0D54-\u0D57\u0D5F-\u0D63\u0D66-\u0D6F\u0D7A-\u0D7F\u0D82\u0D83\u0D85-\u0D96\u0D9A-\u0DB1\u0DB3-\u0DBB\u0DBD\u0DC0-\u0DC6\u0DCA\u0DCF-\u0DD4\u0DD6\u0DD8-\u0DDF\u0DE6-\u0DEF\u0DF2\u0DF3\u0E01-\u0E3A\u0E40-\u0E4E\u0E50-\u0E59\u0E81\u0E82\u0E84\u0E87\u0E88\u0E8A\u0E8D\u0E94-\u0E97\u0E99-\u0E9F\u0EA1-\u0EA3\u0EA5\u0EA7\u0EAA\u0EAB\u0EAD-\u0EB9\u0EBB-\u0EBD\u0EC0-\u0EC4\u0EC6\u0EC8-\u0ECD\u0ED0-\u0ED9\u0EDC-\u0EDF\u0F00\u0F18\u0F19\u0F20-\u0F29\u0F35\u0F37\u0F39\u0F3E-\u0F47\u0F49-\u0F6C\u0F71-\u0F84\u0F86-\u0F97\u0F99-\u0FBC\u0FC6\u1000-\u1049\u1050-\u109D\u10A0-\u10C5\u10C7\u10CD\u10D0-\u10FA\u10FC-\u1248\u124A-\u124D\u1250-\u1256\u1258\u125A-\u125D\u1260-\u1288\u128A-\u128D\u1290-\u12B0\u12B2-\u12B5\u12B8-\u12BE\u12C0\u12C2-\u12C5\u12C8-\u12D6\u12D8-\u1310\u1312-\u1315\u1318-\u135A\u135D-\u135F\u1369-\u1371\u1380-\u138F\u13A0-\u13F5\u13F8-\u13FD\u1401-\u166C\u166F-\u167F\u1681-\u169A\u16A0-\u16EA\u16EE-\u16F8\u1700-\u170C\u170E-\u1714\u1720-\u1734\u1740-\u1753\u1760-\u176C\u176E-\u1770\u1772\u1773\u1780-\u17D3\u17D7\u17DC\u17DD\u17E0-\u17E9\u180B-\u180D\u1810-\u1819\u1820-\u1877\u1880-\u18AA\u18B0-\u18F5\u1900-\u191E\u1920-\u192B\u1930-\u193B\u1946-\u196D\u1970-\u1974\u1980-\u19AB\u19B0-\u19C9\u19D0-\u19DA\u1A00-\u1A1B\u1A20-\u1A5E\u1A60-\u1A7C\u1A7F-\u1A89\u1A90-\u1A99\u1AA7\u1AB0-\u1ABD\u1B00-\u1B4B\u1B50-\u1B59\u1B6B-\u1B73\u1B80-\u1BF3\u1C00-\u1C37\u1C40-\u1C49\u1C4D-\u1C7D\u1C80-\u1C88\u1CD0-\u1CD2\u1CD4-\u1CF6\u1CF8\u1CF9\u1D00-\u1DF5\u1DFB-\u1F15\u1F18-\u1F1D\u1F20-\u1F45\u1F48-\u1F4D\u1F50-\u1F57\u1F59\u1F5B\u1F5D\u1F5F-\u1F7D\u1F80-\u1FB4\u1FB6-\u1FBC\u1FBE\u1FC2-\u1FC4\u1FC6-\u1FCC\u1FD0-\u1FD3\u1FD6-\u1FDB\u1FE0-\u1FEC\u1FF2-\u1FF4\u1FF6-\u1FFC\u200C\u200D\u203F\u2040\u2054\u2071\u207F\u2090-\u209C\u20D0-\u20DC\u20E1\u20E5-\u20F0\u2102\u2107\u210A-\u2113\u2115\u2118-\u211D\u2124\u2126\u2128\u212A-\u2139\u213C-\u213F\u2145-\u2149\u214E\u2160-\u2188\u2C00-\u2C2E\u2C30-\u2C5E\u2C60-\u2CE4\u2CEB-\u2CF3\u2D00-\u2D25\u2D27\u2D2D\u2D30-\u2D67\u2D6F\u2D7F-\u2D96\u2DA0-\u2DA6\u2DA8-\u2DAE\u2DB0-\u2DB6\u2DB8-\u2DBE\u2DC0-\u2DC6\u2DC8-\u2DCE\u2DD0-\u2DD6\u2DD8-\u2DDE\u2DE0-\u2DFF\u3005-\u3007\u3021-\u302F\u3031-\u3035\u3038-\u303C\u3041-\u3096\u3099-\u309F\u30A1-\u30FA\u30FC-\u30FF\u3105-\u312D\u3131-\u318E\u31A0-\u31BA\u31F0-\u31FF\u3400-\u4DB5\u4E00-\u9FD5\uA000-\uA48C\uA4D0-\uA4FD\uA500-\uA60C\uA610-\uA62B\uA640-\uA66F\uA674-\uA67D\uA67F-\uA6F1\uA717-\uA71F\uA722-\uA788\uA78B-\uA7AE\uA7B0-\uA7B7\uA7F7-\uA827\uA840-\uA873\uA880-\uA8C5\uA8D0-\uA8D9\uA8E0-\uA8F7\uA8FB\uA8FD\uA900-\uA92D\uA930-\uA953\uA960-\uA97C\uA980-\uA9C0\uA9CF-\uA9D9\uA9E0-\uA9FE\uAA00-\uAA36\uAA40-\uAA4D\uAA50-\uAA59\uAA60-\uAA76\uAA7A-\uAAC2\uAADB-\uAADD\uAAE0-\uAAEF\uAAF2-\uAAF6\uAB01-\uAB06\uAB09-\uAB0E\uAB11-\uAB16\uAB20-\uAB26\uAB28-\uAB2E\uAB30-\uAB5A\uAB5C-\uAB65\uAB70-\uABEA\uABEC\uABED\uABF0-\uABF9\uAC00-\uD7A3\uD7B0-\uD7C6\uD7CB-\uD7FB\uF900-\uFA6D\uFA70-\uFAD9\uFB00-\uFB06\uFB13-\uFB17\uFB1D-\uFB28\uFB2A-\uFB36\uFB38-\uFB3C\uFB3E\uFB40\uFB41\uFB43\uFB44\uFB46-\uFBB1\uFBD3-\uFD3D\uFD50-\uFD8F\uFD92-\uFDC7\uFDF0-\uFDFB\uFE00-\uFE0F\uFE20-\uFE2F\uFE33\uFE34\uFE4D-\uFE4F\uFE70-\uFE74\uFE76-\uFEFC\uFF10-\uFF19\uFF21-\uFF3A\uFF3F\uFF41-\uFF5A\uFF66-\uFFBE\uFFC2-\uFFC7\uFFCA-\uFFCF\uFFD2-\uFFD7\uFFDA-\uFFDC]|\uD800[\uDC00-\uDC0B\uDC0D-\uDC26\uDC28-\uDC3A\uDC3C\uDC3D\uDC3F-\uDC4D\uDC50-\uDC5D\uDC80-\uDCFA\uDD40-\uDD74\uDDFD\uDE80-\uDE9C\uDEA0-\uDED0\uDEE0\uDF00-\uDF1F\uDF30-\uDF4A\uDF50-\uDF7A\uDF80-\uDF9D\uDFA0-\uDFC3\uDFC8-\uDFCF\uDFD1-\uDFD5]|\uD801[\uDC00-\uDC9D\uDCA0-\uDCA9\uDCB0-\uDCD3\uDCD8-\uDCFB\uDD00-\uDD27\uDD30-\uDD63\uDE00-\uDF36\uDF40-\uDF55\uDF60-\uDF67]|\uD802[\uDC00-\uDC05\uDC08\uDC0A-\uDC35\uDC37\uDC38\uDC3C\uDC3F-\uDC55\uDC60-\uDC76\uDC80-\uDC9E\uDCE0-\uDCF2\uDCF4\uDCF5\uDD00-\uDD15\uDD20-\uDD39\uDD80-\uDDB7\uDDBE\uDDBF\uDE00-\uDE03\uDE05\uDE06\uDE0C-\uDE13\uDE15-\uDE17\uDE19-\uDE33\uDE38-\uDE3A\uDE3F\uDE60-\uDE7C\uDE80-\uDE9C\uDEC0-\uDEC7\uDEC9-\uDEE6\uDF00-\uDF35\uDF40-\uDF55\uDF60-\uDF72\uDF80-\uDF91]|\uD803[\uDC00-\uDC48\uDC80-\uDCB2\uDCC0-\uDCF2]|\uD804[\uDC00-\uDC46\uDC66-\uDC6F\uDC7F-\uDCBA\uDCD0-\uDCE8\uDCF0-\uDCF9\uDD00-\uDD34\uDD36-\uDD3F\uDD50-\uDD73\uDD76\uDD80-\uDDC4\uDDCA-\uDDCC\uDDD0-\uDDDA\uDDDC\uDE00-\uDE11\uDE13-\uDE37\uDE3E\uDE80-\uDE86\uDE88\uDE8A-\uDE8D\uDE8F-\uDE9D\uDE9F-\uDEA8\uDEB0-\uDEEA\uDEF0-\uDEF9\uDF00-\uDF03\uDF05-\uDF0C\uDF0F\uDF10\uDF13-\uDF28\uDF2A-\uDF30\uDF32\uDF33\uDF35-\uDF39\uDF3C-\uDF44\uDF47\uDF48\uDF4B-\uDF4D\uDF50\uDF57\uDF5D-\uDF63\uDF66-\uDF6C\uDF70-\uDF74]|\uD805[\uDC00-\uDC4A\uDC50-\uDC59\uDC80-\uDCC5\uDCC7\uDCD0-\uDCD9\uDD80-\uDDB5\uDDB8-\uDDC0\uDDD8-\uDDDD\uDE00-\uDE40\uDE44\uDE50-\uDE59\uDE80-\uDEB7\uDEC0-\uDEC9\uDF00-\uDF19\uDF1D-\uDF2B\uDF30-\uDF39]|\uD806[\uDCA0-\uDCE9\uDCFF\uDEC0-\uDEF8]|\uD807[\uDC00-\uDC08\uDC0A-\uDC36\uDC38-\uDC40\uDC50-\uDC59\uDC72-\uDC8F\uDC92-\uDCA7\uDCA9-\uDCB6]|\uD808[\uDC00-\uDF99]|\uD809[\uDC00-\uDC6E\uDC80-\uDD43]|[\uD80C\uD81C-\uD820\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872][\uDC00-\uDFFF]|\uD80D[\uDC00-\uDC2E]|\uD811[\uDC00-\uDE46]|\uD81A[\uDC00-\uDE38\uDE40-\uDE5E\uDE60-\uDE69\uDED0-\uDEED\uDEF0-\uDEF4\uDF00-\uDF36\uDF40-\uDF43\uDF50-\uDF59\uDF63-\uDF77\uDF7D-\uDF8F]|\uD81B[\uDF00-\uDF44\uDF50-\uDF7E\uDF8F-\uDF9F\uDFE0]|\uD821[\uDC00-\uDFEC]|\uD822[\uDC00-\uDEF2]|\uD82C[\uDC00\uDC01]|\uD82F[\uDC00-\uDC6A\uDC70-\uDC7C\uDC80-\uDC88\uDC90-\uDC99\uDC9D\uDC9E]|\uD834[\uDD65-\uDD69\uDD6D-\uDD72\uDD7B-\uDD82\uDD85-\uDD8B\uDDAA-\uDDAD\uDE42-\uDE44]|\uD835[\uDC00-\uDC54\uDC56-\uDC9C\uDC9E\uDC9F\uDCA2\uDCA5\uDCA6\uDCA9-\uDCAC\uDCAE-\uDCB9\uDCBB\uDCBD-\uDCC3\uDCC5-\uDD05\uDD07-\uDD0A\uDD0D-\uDD14\uDD16-\uDD1C\uDD1E-\uDD39\uDD3B-\uDD3E\uDD40-\uDD44\uDD46\uDD4A-\uDD50\uDD52-\uDEA5\uDEA8-\uDEC0\uDEC2-\uDEDA\uDEDC-\uDEFA\uDEFC-\uDF14\uDF16-\uDF34\uDF36-\uDF4E\uDF50-\uDF6E\uDF70-\uDF88\uDF8A-\uDFA8\uDFAA-\uDFC2\uDFC4-\uDFCB\uDFCE-\uDFFF]|\uD836[\uDE00-\uDE36\uDE3B-\uDE6C\uDE75\uDE84\uDE9B-\uDE9F\uDEA1-\uDEAF]|\uD838[\uDC00-\uDC06\uDC08-\uDC18\uDC1B-\uDC21\uDC23\uDC24\uDC26-\uDC2A]|\uD83A[\uDC00-\uDCC4\uDCD0-\uDCD6\uDD00-\uDD4A\uDD50-\uDD59]|\uD83B[\uDE00-\uDE03\uDE05-\uDE1F\uDE21\uDE22\uDE24\uDE27\uDE29-\uDE32\uDE34-\uDE37\uDE39\uDE3B\uDE42\uDE47\uDE49\uDE4B\uDE4D-\uDE4F\uDE51\uDE52\uDE54\uDE57\uDE59\uDE5B\uDE5D\uDE5F\uDE61\uDE62\uDE64\uDE67-\uDE6A\uDE6C-\uDE72\uDE74-\uDE77\uDE79-\uDE7C\uDE7E\uDE80-\uDE89\uDE8B-\uDE9B\uDEA1-\uDEA3\uDEA5-\uDEA9\uDEAB-\uDEBB]|\uD869[\uDC00-\uDED6\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1]|\uD87E[\uDC00-\uDE1D]|\uDB40[\uDD00-\uDDEF]/ };
          function f(k) {
            return 48 <= k && k <= 57;
          }
          function g(k) {
            return 48 <= k && k <= 57 || 97 <= k && k <= 102 || 65 <= k && k <= 70;
          }
          function x(k) {
            return k >= 48 && k <= 55;
          }
          p = [5760, 8192, 8193, 8194, 8195, 8196, 8197, 8198, 8199, 8200, 8201, 8202, 8239, 8287, 12288, 65279];
          function C(k) {
            return k === 32 || k === 9 || k === 11 || k === 12 || k === 160 || k >= 5760 && p.indexOf(k) >= 0;
          }
          function A(k) {
            return k === 10 || k === 13 || k === 8232 || k === 8233;
          }
          function D(k) {
            if (k <= 65535)
              return String.fromCharCode(k);
            var L = String.fromCharCode(Math.floor((k - 65536) / 1024) + 55296), _ = String.fromCharCode((k - 65536) % 1024 + 56320);
            return L + _;
          }
          for (u = new Array(128), a = 0; a < 128; ++a)
            u[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a === 36 || a === 95;
          for (o = new Array(128), a = 0; a < 128; ++a)
            o[a] = a >= 97 && a <= 122 || a >= 65 && a <= 90 || a >= 48 && a <= 57 || a === 36 || a === 95;
          function y(k) {
            return k < 128 ? u[k] : d.NonAsciiIdentifierStart.test(D(k));
          }
          function T(k) {
            return k < 128 ? o[k] : d.NonAsciiIdentifierPart.test(D(k));
          }
          function j(k) {
            return k < 128 ? u[k] : i.NonAsciiIdentifierStart.test(D(k));
          }
          function M(k) {
            return k < 128 ? o[k] : i.NonAsciiIdentifierPart.test(D(k));
          }
          m.exports = { isDecimalDigit: f, isHexDigit: g, isOctalDigit: x, isWhiteSpace: C, isLineTerminator: A, isIdentifierStartES5: y, isIdentifierPartES5: T, isIdentifierStartES6: j, isIdentifierPartES6: M };
        }();
      } }), Wa = ee({ "node_modules/esutils/lib/keyword.js"(l, m) {
        ne(), function() {
          var i = Vi();
          function d(y) {
            switch (y) {
              case "implements":
              case "interface":
              case "package":
              case "private":
              case "protected":
              case "public":
              case "static":
              case "let":
                return !0;
              default:
                return !1;
            }
          }
          function p(y, T) {
            return !T && y === "yield" ? !1 : u(y, T);
          }
          function u(y, T) {
            if (T && d(y))
              return !0;
            switch (y.length) {
              case 2:
                return y === "if" || y === "in" || y === "do";
              case 3:
                return y === "var" || y === "for" || y === "new" || y === "try";
              case 4:
                return y === "this" || y === "else" || y === "case" || y === "void" || y === "with" || y === "enum";
              case 5:
                return y === "while" || y === "break" || y === "catch" || y === "throw" || y === "const" || y === "yield" || y === "class" || y === "super";
              case 6:
                return y === "return" || y === "typeof" || y === "delete" || y === "switch" || y === "export" || y === "import";
              case 7:
                return y === "default" || y === "finally" || y === "extends";
              case 8:
                return y === "function" || y === "continue" || y === "debugger";
              case 10:
                return y === "instanceof";
              default:
                return !1;
            }
          }
          function o(y, T) {
            return y === "null" || y === "true" || y === "false" || p(y, T);
          }
          function a(y, T) {
            return y === "null" || y === "true" || y === "false" || u(y, T);
          }
          function f(y) {
            return y === "eval" || y === "arguments";
          }
          function g(y) {
            var T, j, M;
            if (y.length === 0 || (M = y.charCodeAt(0), !i.isIdentifierStartES5(M)))
              return !1;
            for (T = 1, j = y.length; T < j; ++T)
              if (M = y.charCodeAt(T), !i.isIdentifierPartES5(M))
                return !1;
            return !0;
          }
          function x(y, T) {
            return (y - 55296) * 1024 + (T - 56320) + 65536;
          }
          function C(y) {
            var T, j, M, k, L;
            if (y.length === 0)
              return !1;
            for (L = i.isIdentifierStartES6, T = 0, j = y.length; T < j; ++T) {
              if (M = y.charCodeAt(T), 55296 <= M && M <= 56319) {
                if (++T, T >= j || (k = y.charCodeAt(T), !(56320 <= k && k <= 57343)))
                  return !1;
                M = x(M, k);
              }
              if (!L(M))
                return !1;
              L = i.isIdentifierPartES6;
            }
            return !0;
          }
          function A(y, T) {
            return g(y) && !o(y, T);
          }
          function D(y, T) {
            return C(y) && !a(y, T);
          }
          m.exports = { isKeywordES5: p, isKeywordES6: u, isReservedWordES5: o, isReservedWordES6: a, isRestrictedWord: f, isIdentifierNameES5: g, isIdentifierNameES6: C, isIdentifierES5: A, isIdentifierES6: D };
        }();
      } }), Zs = ee({ "node_modules/esutils/lib/utils.js"(l) {
        ne(), function() {
          l.ast = qa(), l.code = Vi(), l.keyword = Wa();
        }();
      } }), Au = ee({ "src/language-js/utils/is-block-comment.js"(l, m) {
        ne();
        var i = /* @__PURE__ */ new Set(["Block", "CommentBlock", "MultiLine"]), d = (p) => i.has(p == null ? void 0 : p.type);
        m.exports = d;
      } }), Ki = ee({ "src/language-js/utils/is-node-matches.js"(l, m) {
        ne();
        function i(p, u) {
          let o = u.split(".");
          for (let a = o.length - 1; a >= 0; a--) {
            let f = o[a];
            if (a === 0)
              return p.type === "Identifier" && p.name === f;
            if (p.type !== "MemberExpression" || p.optional || p.computed || p.property.type !== "Identifier" || p.property.name !== f)
              return !1;
            p = p.object;
          }
        }
        function d(p, u) {
          return u.some((o) => i(p, o));
        }
        m.exports = d;
      } }), In = ee({ "src/language-js/utils/index.js"(l, m) {
        ne();
        var i = Zs().keyword.isIdentifierNameES5, { getLast: d, hasNewline: p, skipWhitespace: u, isNonEmptyArray: o, isNextLineEmptyAfterIndex: a, getStringWidth: f } = yn(), { locStart: g, locEnd: x, hasSameLocStart: C } = Nr(), A = Au(), D = Ki(), y = "(?:(?=.)\\s)", T = new RegExp(`^${y}*:`), j = new RegExp(`^${y}*::`);
        function M(z) {
          var Pe, Nt;
          return ((Pe = z.extra) === null || Pe === void 0 ? void 0 : Pe.parenthesized) && A((Nt = z.trailingComments) === null || Nt === void 0 ? void 0 : Nt[0]) && T.test(z.trailingComments[0].value);
        }
        function k(z) {
          let Pe = z == null ? void 0 : z[0];
          return A(Pe) && j.test(Pe.value);
        }
        function L(z, Pe) {
          if (!z || typeof z != "object")
            return !1;
          if (Array.isArray(z))
            return z.some((dn) => L(dn, Pe));
          let Nt = Pe(z);
          return typeof Nt == "boolean" ? Nt : Object.values(z).some((dn) => L(dn, Pe));
        }
        function _(z) {
          return z.type === "AssignmentExpression" || z.type === "BinaryExpression" || z.type === "LogicalExpression" || z.type === "NGPipeExpression" || z.type === "ConditionalExpression" || Te(z) || we(z) || z.type === "SequenceExpression" || z.type === "TaggedTemplateExpression" || z.type === "BindExpression" || z.type === "UpdateExpression" && !z.prefix || or(z) || z.type === "TSNonNullExpression";
        }
        function R(z) {
          var Pe, Nt, dn, fn, Wr, Kn;
          return z.expressions ? z.expressions[0] : (Pe = (Nt = (dn = (fn = (Wr = (Kn = z.left) !== null && Kn !== void 0 ? Kn : z.test) !== null && Wr !== void 0 ? Wr : z.callee) !== null && fn !== void 0 ? fn : z.object) !== null && dn !== void 0 ? dn : z.tag) !== null && Nt !== void 0 ? Nt : z.argument) !== null && Pe !== void 0 ? Pe : z.expression;
        }
        function O(z, Pe) {
          if (Pe.expressions)
            return ["expressions", 0];
          if (Pe.left)
            return ["left"];
          if (Pe.test)
            return ["test"];
          if (Pe.object)
            return ["object"];
          if (Pe.callee)
            return ["callee"];
          if (Pe.tag)
            return ["tag"];
          if (Pe.argument)
            return ["argument"];
          if (Pe.expression)
            return ["expression"];
          throw new Error("Unexpected node has no left side.");
        }
        function Q(z) {
          return z = new Set(z), (Pe) => z.has(Pe == null ? void 0 : Pe.type);
        }
        var v = Q(["Line", "CommentLine", "SingleLine", "HashbangComment", "HTMLOpen", "HTMLClose"]), P = Q(["ExportDefaultDeclaration", "ExportDefaultSpecifier", "DeclareExportDeclaration", "ExportNamedDeclaration", "ExportAllDeclaration"]);
        function E(z) {
          let Pe = z.getParentNode();
          return z.getName() === "declaration" && P(Pe) ? Pe : null;
        }
        var w = Q(["BooleanLiteral", "DirectiveLiteral", "Literal", "NullLiteral", "NumericLiteral", "BigIntLiteral", "DecimalLiteral", "RegExpLiteral", "StringLiteral", "TemplateLiteral", "TSTypeLiteral", "JSXText"]);
        function c(z) {
          return z.type === "NumericLiteral" || z.type === "Literal" && typeof z.value == "number";
        }
        function F(z) {
          return z.type === "UnaryExpression" && (z.operator === "+" || z.operator === "-") && c(z.argument);
        }
        function S(z) {
          return z.type === "StringLiteral" || z.type === "Literal" && typeof z.value == "string";
        }
        var b = Q(["ObjectTypeAnnotation", "TSTypeLiteral", "TSMappedType"]), B = Q(["FunctionExpression", "ArrowFunctionExpression"]);
        function I(z) {
          return z.type === "FunctionExpression" || z.type === "ArrowFunctionExpression" && z.body.type === "BlockStatement";
        }
        function $(z) {
          return Te(z) && z.callee.type === "Identifier" && ["async", "inject", "fakeAsync", "waitForAsync"].includes(z.callee.name);
        }
        var G = Q(["JSXElement", "JSXFragment"]);
        function W(z, Pe) {
          if (z.parentParser !== "markdown" && z.parentParser !== "mdx")
            return !1;
          let Nt = Pe.getNode();
          if (!Nt.expression || !G(Nt.expression))
            return !1;
          let dn = Pe.getParentNode();
          return dn.type === "Program" && dn.body.length === 1;
        }
        function J(z) {
          return z.kind === "get" || z.kind === "set";
        }
        function te(z) {
          return J(z) || C(z, z.value);
        }
        function K(z) {
          return (z.type === "ObjectTypeProperty" || z.type === "ObjectTypeInternalSlot") && z.value.type === "FunctionTypeAnnotation" && !z.static && !te(z);
        }
        function ie(z) {
          return (z.type === "TypeAnnotation" || z.type === "TSTypeAnnotation") && z.typeAnnotation.type === "FunctionTypeAnnotation" && !z.static && !C(z, z.typeAnnotation);
        }
        var q = Q(["BinaryExpression", "LogicalExpression", "NGPipeExpression"]);
        function U(z) {
          return we(z) || z.type === "BindExpression" && !!z.object;
        }
        var se = /* @__PURE__ */ new Set(["AnyTypeAnnotation", "TSAnyKeyword", "NullLiteralTypeAnnotation", "TSNullKeyword", "ThisTypeAnnotation", "TSThisType", "NumberTypeAnnotation", "TSNumberKeyword", "VoidTypeAnnotation", "TSVoidKeyword", "BooleanTypeAnnotation", "TSBooleanKeyword", "BigIntTypeAnnotation", "TSBigIntKeyword", "SymbolTypeAnnotation", "TSSymbolKeyword", "StringTypeAnnotation", "TSStringKeyword", "BooleanLiteralTypeAnnotation", "StringLiteralTypeAnnotation", "BigIntLiteralTypeAnnotation", "NumberLiteralTypeAnnotation", "TSLiteralType", "TSTemplateLiteralType", "EmptyTypeAnnotation", "MixedTypeAnnotation", "TSNeverKeyword", "TSObjectKeyword", "TSUndefinedKeyword", "TSUnknownKeyword"]);
        function ye(z) {
          return z ? !!((z.type === "GenericTypeAnnotation" || z.type === "TSTypeReference") && !z.typeParameters || se.has(z.type)) : !1;
        }
        function le(z) {
          let Pe = /^(?:before|after)(?:Each|All)$/;
          return z.callee.type === "Identifier" && Pe.test(z.callee.name) && z.arguments.length === 1;
        }
        var Ne = ["it", "it.only", "it.skip", "describe", "describe.only", "describe.skip", "test", "test.only", "test.skip", "test.step", "test.describe", "test.describe.only", "test.describe.parallel", "test.describe.parallel.only", "test.describe.serial", "test.describe.serial.only", "skip", "xit", "xdescribe", "xtest", "fit", "fdescribe", "ftest"];
        function X(z) {
          return D(z, Ne);
        }
        function re(z, Pe) {
          if (z.type !== "CallExpression")
            return !1;
          if (z.arguments.length === 1) {
            if ($(z) && Pe && re(Pe))
              return B(z.arguments[0]);
            if (le(z))
              return $(z.arguments[0]);
          } else if ((z.arguments.length === 2 || z.arguments.length === 3) && (z.arguments[0].type === "TemplateLiteral" || S(z.arguments[0])) && X(z.callee))
            return z.arguments[2] && !c(z.arguments[2]) ? !1 : (z.arguments.length === 2 ? B(z.arguments[1]) : I(z.arguments[1]) && Ue(z.arguments[1]).length <= 1) || $(z.arguments[1]);
          return !1;
        }
        var Te = Q(["CallExpression", "OptionalCallExpression"]), we = Q(["MemberExpression", "OptionalMemberExpression"]);
        function tt(z) {
          let Pe = "expressions";
          z.type === "TSTemplateLiteralType" && (Pe = "types");
          let Nt = z[Pe];
          return Nt.length === 0 ? !1 : Nt.every((dn) => {
            if (St(dn))
              return !1;
            if (dn.type === "Identifier" || dn.type === "ThisExpression")
              return !0;
            if (we(dn)) {
              let fn = dn;
              for (; we(fn); )
                if (fn.property.type !== "Identifier" && fn.property.type !== "Literal" && fn.property.type !== "StringLiteral" && fn.property.type !== "NumericLiteral" || (fn = fn.object, St(fn)))
                  return !1;
              return fn.type === "Identifier" || fn.type === "ThisExpression";
            }
            return !1;
          });
        }
        function oe(z, Pe) {
          return z === "+" || z === "-" ? z + Pe : Pe;
        }
        function H(z, Pe) {
          let Nt = g(Pe), dn = u(z, x(Pe));
          return dn !== !1 && z.slice(Nt, Nt + 2) === "/*" && z.slice(dn, dn + 2) === "*/";
        }
        function ce(z, Pe) {
          return G(Pe) ? Qt(Pe) : St(Pe, mt.Leading, (Nt) => p(z, x(Nt)));
        }
        function De(z, Pe) {
          return Pe.parser !== "json" && S(z.key) && Fe(z.key).slice(1, -1) === z.key.value && (i(z.key.value) && !(Pe.parser === "babel-ts" && z.type === "ClassProperty" || Pe.parser === "typescript" && z.type === "PropertyDefinition") || Be(z.key.value) && String(Number(z.key.value)) === z.key.value && (Pe.parser === "babel" || Pe.parser === "acorn" || Pe.parser === "espree" || Pe.parser === "meriyah" || Pe.parser === "__babel_estree"));
        }
        function Be(z) {
          return /^(?:\d+|\d+\.\d+)$/.test(z);
        }
        function Ke(z, Pe) {
          let Nt = /^[fx]?(?:describe|it|test)$/;
          return Pe.type === "TaggedTemplateExpression" && Pe.quasi === z && Pe.tag.type === "MemberExpression" && Pe.tag.property.type === "Identifier" && Pe.tag.property.name === "each" && (Pe.tag.object.type === "Identifier" && Nt.test(Pe.tag.object.name) || Pe.tag.object.type === "MemberExpression" && Pe.tag.object.property.type === "Identifier" && (Pe.tag.object.property.name === "only" || Pe.tag.object.property.name === "skip") && Pe.tag.object.object.type === "Identifier" && Nt.test(Pe.tag.object.object.name));
        }
        function ze(z) {
          return z.quasis.some((Pe) => Pe.value.raw.includes(`
`));
        }
        function Ct(z, Pe) {
          return (z.type === "TemplateLiteral" && ze(z) || z.type === "TaggedTemplateExpression" && ze(z.quasi)) && !p(Pe, g(z), { backwards: !0 });
        }
        function en(z) {
          if (!St(z))
            return !1;
          let Pe = d(ge(z, mt.Dangling));
          return Pe && !A(Pe);
        }
        function Gt(z) {
          if (z.length <= 1)
            return !1;
          let Pe = 0;
          for (let Nt of z)
            if (B(Nt)) {
              if (Pe += 1, Pe > 1)
                return !0;
            } else if (Te(Nt)) {
              for (let dn of Nt.arguments)
                if (B(dn))
                  return !0;
            }
          return !1;
        }
        function ft(z) {
          let Pe = z.getValue(), Nt = z.getParentNode();
          return Te(Pe) && Te(Nt) && Nt.callee === Pe && Pe.arguments.length > Nt.arguments.length && Nt.arguments.length > 0;
        }
        function _t(z, Pe) {
          if (Pe >= 2)
            return !1;
          let Nt = (Kn) => _t(Kn, Pe + 1), dn = z.type === "Literal" && "regex" in z && z.regex.pattern || z.type === "RegExpLiteral" && z.pattern;
          if (dn && f(dn) > 5)
            return !1;
          if (z.type === "Literal" || z.type === "BigIntLiteral" || z.type === "DecimalLiteral" || z.type === "BooleanLiteral" || z.type === "NullLiteral" || z.type === "NumericLiteral" || z.type === "RegExpLiteral" || z.type === "StringLiteral" || z.type === "Identifier" || z.type === "ThisExpression" || z.type === "Super" || z.type === "PrivateName" || z.type === "PrivateIdentifier" || z.type === "ArgumentPlaceholder" || z.type === "Import")
            return !0;
          if (z.type === "TemplateLiteral")
            return z.quasis.every((Kn) => !Kn.value.raw.includes(`
`)) && z.expressions.every(Nt);
          if (z.type === "ObjectExpression")
            return z.properties.every((Kn) => !Kn.computed && (Kn.shorthand || Kn.value && Nt(Kn.value)));
          if (z.type === "ArrayExpression")
            return z.elements.every((Kn) => Kn === null || Nt(Kn));
          if (hr(z))
            return (z.type === "ImportExpression" || _t(z.callee, Pe)) && Ln(z).every(Nt);
          if (we(z))
            return _t(z.object, Pe) && _t(z.property, Pe);
          let fn = { "!": !0, "-": !0, "+": !0, "~": !0 };
          if (z.type === "UnaryExpression" && fn[z.operator])
            return _t(z.argument, Pe);
          let Wr = { "++": !0, "--": !0 };
          return z.type === "UpdateExpression" && Wr[z.operator] ? _t(z.argument, Pe) : z.type === "TSNonNullExpression" ? _t(z.expression, Pe) : !1;
        }
        function Fe(z) {
          var Pe, Nt;
          return (Pe = (Nt = z.extra) === null || Nt === void 0 ? void 0 : Nt.raw) !== null && Pe !== void 0 ? Pe : z.raw;
        }
        function Y(z) {
          return z;
        }
        function ke(z) {
          return z.filepath && /\.tsx$/i.test(z.filepath);
        }
        function ue(z) {
          let Pe = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "es5";
          return z.trailingComma === "es5" && Pe === "es5" || z.trailingComma === "all" && (Pe === "all" || Pe === "es5");
        }
        function xe(z, Pe) {
          switch (z.type) {
            case "BinaryExpression":
            case "LogicalExpression":
            case "AssignmentExpression":
            case "NGPipeExpression":
              return xe(z.left, Pe);
            case "MemberExpression":
            case "OptionalMemberExpression":
              return xe(z.object, Pe);
            case "TaggedTemplateExpression":
              return z.tag.type === "FunctionExpression" ? !1 : xe(z.tag, Pe);
            case "CallExpression":
            case "OptionalCallExpression":
              return z.callee.type === "FunctionExpression" ? !1 : xe(z.callee, Pe);
            case "ConditionalExpression":
              return xe(z.test, Pe);
            case "UpdateExpression":
              return !z.prefix && xe(z.argument, Pe);
            case "BindExpression":
              return z.object && xe(z.object, Pe);
            case "SequenceExpression":
              return xe(z.expressions[0], Pe);
            case "TSSatisfiesExpression":
            case "TSAsExpression":
            case "TSNonNullExpression":
              return xe(z.expression, Pe);
            default:
              return Pe(z);
          }
        }
        var nt = { "==": !0, "!=": !0, "===": !0, "!==": !0 }, Ze = { "*": !0, "/": !0, "%": !0 }, _e = { ">>": !0, ">>>": !0, "<<": !0 };
        function N(z, Pe) {
          return !(Ee(Pe) !== Ee(z) || z === "**" || nt[z] && nt[Pe] || Pe === "%" && Ze[z] || z === "%" && Ze[Pe] || Pe !== z && Ze[Pe] && Ze[z] || _e[z] && _e[Pe]);
        }
        var Z = new Map([["|>"], ["??"], ["||"], ["&&"], ["|"], ["^"], ["&"], ["==", "===", "!=", "!=="], ["<", ">", "<=", ">=", "in", "instanceof"], [">>", "<<", ">>>"], ["+", "-"], ["*", "/", "%"], ["**"]].flatMap((z, Pe) => z.map((Nt) => [Nt, Pe])));
        function Ee(z) {
          return Z.get(z);
        }
        function he(z) {
          return !!_e[z] || z === "|" || z === "^" || z === "&";
        }
        function qe(z) {
          var Pe;
          if (z.rest)
            return !0;
          let Nt = Ue(z);
          return ((Pe = d(Nt)) === null || Pe === void 0 ? void 0 : Pe.type) === "RestElement";
        }
        var gt = /* @__PURE__ */ new WeakMap();
        function Ue(z) {
          if (gt.has(z))
            return gt.get(z);
          let Pe = [];
          return z.this && Pe.push(z.this), Array.isArray(z.parameters) ? Pe.push(...z.parameters) : Array.isArray(z.params) && Pe.push(...z.params), z.rest && Pe.push(z.rest), gt.set(z, Pe), Pe;
        }
        function qn(z, Pe) {
          let Nt = z.getValue(), dn = 0, fn = (Wr) => Pe(Wr, dn++);
          Nt.this && z.call(fn, "this"), Array.isArray(Nt.parameters) ? z.each(fn, "parameters") : Array.isArray(Nt.params) && z.each(fn, "params"), Nt.rest && z.call(fn, "rest");
        }
        var ct = /* @__PURE__ */ new WeakMap();
        function Ln(z) {
          if (ct.has(z))
            return ct.get(z);
          let Pe = z.arguments;
          return z.type === "ImportExpression" && (Pe = [z.source], z.attributes && Pe.push(z.attributes)), ct.set(z, Pe), Pe;
        }
        function pt(z, Pe) {
          let Nt = z.getValue();
          Nt.type === "ImportExpression" ? (z.call((dn) => Pe(dn, 0), "source"), Nt.attributes && z.call((dn) => Pe(dn, 1), "attributes")) : z.each(Pe, "arguments");
        }
        function Mt(z) {
          return z.value.trim() === "prettier-ignore" && !z.unignore;
        }
        function Qt(z) {
          return z && (z.prettierIgnore || St(z, mt.PrettierIgnore));
        }
        function bn(z) {
          let Pe = z.getValue();
          return Qt(Pe);
        }
        var mt = { Leading: 2, Trailing: 4, Dangling: 8, Block: 16, Line: 32, PrettierIgnore: 64, First: 128, Last: 256 }, Jt = (z, Pe) => {
          if (typeof z == "function" && (Pe = z, z = 0), z || Pe)
            return (Nt, dn, fn) => !(z & mt.Leading && !Nt.leading || z & mt.Trailing && !Nt.trailing || z & mt.Dangling && (Nt.leading || Nt.trailing) || z & mt.Block && !A(Nt) || z & mt.Line && !v(Nt) || z & mt.First && dn !== 0 || z & mt.Last && dn !== fn.length - 1 || z & mt.PrettierIgnore && !Mt(Nt) || Pe && !Pe(Nt));
        };
        function St(z, Pe, Nt) {
          if (!o(z == null ? void 0 : z.comments))
            return !1;
          let dn = Jt(Pe, Nt);
          return dn ? z.comments.some(dn) : !0;
        }
        function ge(z, Pe, Nt) {
          if (!Array.isArray(z == null ? void 0 : z.comments))
            return [];
          let dn = Jt(Pe, Nt);
          return dn ? z.comments.filter(dn) : z.comments;
        }
        var pr = (z, Pe) => {
          let { originalText: Nt } = Pe;
          return a(Nt, x(z));
        };
        function hr(z) {
          return Te(z) || z.type === "NewExpression" || z.type === "ImportExpression";
        }
        function ln(z) {
          return z && (z.type === "ObjectProperty" || z.type === "Property" && !z.method && z.kind === "init");
        }
        function Yt(z) {
          return !!z.__isUsingHackPipeline;
        }
        var jn = Symbol("ifWithoutBlockAndSameLineComment");
        function or(z) {
          return z.type === "TSAsExpression" || z.type === "TSSatisfiesExpression";
        }
        m.exports = { getFunctionParameters: Ue, iterateFunctionParametersPath: qn, getCallArguments: Ln, iterateCallArgumentsPath: pt, hasRestParameter: qe, getLeftSide: R, getLeftSidePathName: O, getParentExportDeclaration: E, getTypeScriptMappedTypeModifier: oe, hasFlowAnnotationComment: k, hasFlowShorthandAnnotationComment: M, hasLeadingOwnLineComment: ce, hasNakedLeftSide: _, hasNode: L, hasIgnoreComment: bn, hasNodeIgnoreComment: Qt, identity: Y, isBinaryish: q, isCallLikeExpression: hr, isEnabledHackPipeline: Yt, isLineComment: v, isPrettierIgnoreComment: Mt, isCallExpression: Te, isMemberExpression: we, isExportDeclaration: P, isFlowAnnotationComment: H, isFunctionCompositionArgs: Gt, isFunctionNotation: te, isFunctionOrArrowExpression: B, isGetterOrSetter: J, isJestEachTemplateLiteral: Ke, isJsxNode: G, isLiteral: w, isLongCurriedCallExpression: ft, isSimpleCallArgument: _t, isMemberish: U, isNumericLiteral: c, isSignedNumericLiteral: F, isObjectProperty: ln, isObjectType: b, isObjectTypePropertyAFunction: K, isSimpleType: ye, isSimpleNumber: Be, isSimpleTemplateLiteral: tt, isStringLiteral: S, isStringPropSafeToUnquote: De, isTemplateOnItsOwnLine: Ct, isTestCall: re, isTheOnlyJsxElementInMarkdown: W, isTSXFile: ke, isTypeAnnotationAFunction: ie, isNextLineEmpty: pr, needsHardlineAfterDanglingComment: en, rawText: Fe, shouldPrintComma: ue, isBitwiseOperator: he, shouldFlatten: N, startsWithNoLookaheadToken: xe, getPrecedence: Ee, hasComment: St, getComments: ge, CommentCheckFlags: mt, markerForIfWithoutBlockAndSameLineComment: jn, isTSTypeExpression: or };
      } }), Di = ee({ "src/language-js/print/template-literal.js"(l, m) {
        ne();
        var i = sr(), { getStringWidth: d, getIndentSize: p } = yn(), { builders: { join: u, hardline: o, softline: a, group: f, indent: g, align: x, lineSuffixBoundary: C, addAlignmentToDoc: A }, printer: { printDocToString: D }, utils: { mapDoc: y } } = Ut(), { isBinaryish: T, isJestEachTemplateLiteral: j, isSimpleTemplateLiteral: M, hasComment: k, isMemberExpression: L, isTSTypeExpression: _ } = In();
        function R(w, c, F) {
          let S = w.getValue();
          if (S.type === "TemplateLiteral" && j(S, w.getParentNode())) {
            let G = O(w, F, c);
            if (G)
              return G;
          }
          let b = "expressions";
          S.type === "TSTemplateLiteralType" && (b = "types");
          let B = [], I = w.map(c, b), $ = M(S);
          return $ && (I = I.map((G) => D(G, Object.assign(Object.assign({}, F), {}, { printWidth: Number.POSITIVE_INFINITY })).formatted)), B.push(C, "`"), w.each((G) => {
            let W = G.getName();
            if (B.push(c()), W < I.length) {
              let { tabWidth: J } = F, te = G.getValue(), K = p(te.value.raw, J), ie = I[W];
              if (!$) {
                let U = S[b][W];
                (k(U) || L(U) || U.type === "ConditionalExpression" || U.type === "SequenceExpression" || _(U) || T(U)) && (ie = [g([a, ie]), a]);
              }
              let q = K === 0 && te.value.raw.endsWith(`
`) ? x(Number.NEGATIVE_INFINITY, ie) : A(ie, K, J);
              B.push(f(["${", q, C, "}"]));
            }
          }, "quasis"), B.push("`"), B;
        }
        function O(w, c, F) {
          let S = w.getNode(), b = S.quasis[0].value.raw.trim().split(/\s*\|\s*/);
          if (b.length > 1 || b.some((B) => B.length > 0)) {
            c.__inJestEach = !0;
            let B = w.map(F, "expressions");
            c.__inJestEach = !1;
            let I = [], $ = B.map((K) => "${" + D(K, Object.assign(Object.assign({}, c), {}, { printWidth: Number.POSITIVE_INFINITY, endOfLine: "lf" })).formatted + "}"), G = [{ hasLineBreak: !1, cells: [] }];
            for (let K = 1; K < S.quasis.length; K++) {
              let ie = i(G), q = $[K - 1];
              ie.cells.push(q), q.includes(`
`) && (ie.hasLineBreak = !0), S.quasis[K].value.raw.includes(`
`) && G.push({ hasLineBreak: !1, cells: [] });
            }
            let W = Math.max(b.length, ...G.map((K) => K.cells.length)), J = Array.from({ length: W }).fill(0), te = [{ cells: b }, ...G.filter((K) => K.cells.length > 0)];
            for (let { cells: K } of te.filter((ie) => !ie.hasLineBreak))
              for (let [ie, q] of K.entries())
                J[ie] = Math.max(J[ie], d(q));
            return I.push(C, "`", g([o, u(o, te.map((K) => u(" | ", K.cells.map((ie, q) => K.hasLineBreak ? ie : ie + " ".repeat(J[q] - d(ie))))))]), o, "`"), I;
          }
        }
        function Q(w, c) {
          let F = w.getValue(), S = c();
          return k(F) && (S = f([g([a, S]), a])), ["${", S, C, "}"];
        }
        function v(w, c) {
          return w.map((F) => Q(F, c), "expressions");
        }
        function P(w, c) {
          return y(w, (F) => typeof F == "string" ? c ? F.replace(/(\\*)`/g, "$1$1\\`") : E(F) : F);
        }
        function E(w) {
          return w.replace(/([\\`]|\${)/g, "\\$1");
        }
        m.exports = { printTemplateLiteral: R, printTemplateExpressions: v, escapeTemplateCharacters: P, uncookTemplateElementValue: E };
      } }), Yo = ee({ "src/language-js/embed/markdown.js"(l, m) {
        ne();
        var { builders: { indent: i, softline: d, literalline: p, dedentToRoot: u } } = Ut(), { escapeTemplateCharacters: o } = Di();
        function a(g, x, C) {
          let A = g.getValue().quasis[0].value.raw.replace(/((?:\\\\)*)\\`/g, (j, M) => "\\".repeat(M.length / 2) + "`"), D = f(A), y = D !== "";
          y && (A = A.replace(new RegExp(`^${D}`, "gm"), ""));
          let T = o(C(A, { parser: "markdown", __inJsTemplate: !0 }, { stripTrailingHardline: !0 }), !0);
          return ["`", y ? i([d, T]) : [p, u(T)], d, "`"];
        }
        function f(g) {
          let x = g.match(/^([^\S\n]*)\S/m);
          return x === null ? "" : x[1];
        }
        m.exports = a;
      } }), el = ee({ "src/language-js/embed/css.js"(l, m) {
        ne();
        var { isNonEmptyArray: i } = yn(), { builders: { indent: d, hardline: p, softline: u }, utils: { mapDoc: o, replaceEndOfLine: a, cleanDoc: f } } = Ut(), { printTemplateExpressions: g } = Di();
        function x(D, y, T) {
          let j = D.getValue(), M = j.quasis.map((O) => O.value.raw), k = 0, L = M.reduce((O, Q, v) => v === 0 ? Q : O + "@prettier-placeholder-" + k++ + "-id" + Q, ""), _ = T(L, { parser: "scss" }, { stripTrailingHardline: !0 }), R = g(D, y);
          return C(_, j, R);
        }
        function C(D, y, T) {
          if (y.quasis.length === 1 && !y.quasis[0].value.raw.trim())
            return "``";
          let j = A(D, T);
          if (!j)
            throw new Error("Couldn't insert all the expressions");
          return ["`", d([p, j]), u, "`"];
        }
        function A(D, y) {
          if (!i(y))
            return D;
          let T = 0, j = o(f(D), (M) => typeof M != "string" || !M.includes("@prettier-placeholder") ? M : M.split(/@prettier-placeholder-(\d+)-id/).map((k, L) => L % 2 === 0 ? a(k) : (T++, y[k])));
          return y.length === T ? j : null;
        }
        m.exports = x;
      } }), tl = ee({ "src/language-js/embed/graphql.js"(l, m) {
        ne();
        var { builders: { indent: i, join: d, hardline: p } } = Ut(), { escapeTemplateCharacters: u, printTemplateExpressions: o } = Di();
        function a(g, x, C) {
          let A = g.getValue(), D = A.quasis.length;
          if (D === 1 && A.quasis[0].value.raw.trim() === "")
            return "``";
          let y = o(g, x), T = [];
          for (let j = 0; j < D; j++) {
            let M = A.quasis[j], k = j === 0, L = j === D - 1, _ = M.value.cooked, R = _.split(`
`), O = R.length, Q = y[j], v = O > 2 && R[0].trim() === "" && R[1].trim() === "", P = O > 2 && R[O - 1].trim() === "" && R[O - 2].trim() === "", E = R.every((c) => /^\s*(?:#[^\n\r]*)?$/.test(c));
            if (!L && /#[^\n\r]*$/.test(R[O - 1]))
              return null;
            let w = null;
            E ? w = f(R) : w = C(_, { parser: "graphql" }, { stripTrailingHardline: !0 }), w ? (w = u(w, !1), !k && v && T.push(""), T.push(w), !L && P && T.push("")) : !k && !L && v && T.push(""), Q && T.push(Q);
          }
          return ["`", i([p, d(p, T)]), p, "`"];
        }
        function f(g) {
          let x = [], C = !1, A = g.map((D) => D.trim());
          for (let [D, y] of A.entries())
            y !== "" && (A[D - 1] === "" && C ? x.push([p, y]) : x.push(y), C = !0);
          return x.length === 0 ? null : d(p, x);
        }
        m.exports = a;
      } }), nl = ee({ "src/language-js/embed/html.js"(l, m) {
        ne();
        var { builders: { indent: i, line: d, hardline: p, group: u }, utils: { mapDoc: o } } = Ut(), { printTemplateExpressions: a, uncookTemplateElementValue: f } = Di(), g = 0;
        function x(C, A, D, y, T) {
          let { parser: j } = T, M = C.getValue(), k = g;
          g = g + 1 >>> 0;
          let L = (F) => `PRETTIER_HTML_PLACEHOLDER_${F}_${k}_IN_JS`, _ = M.quasis.map((F, S, b) => S === b.length - 1 ? F.value.cooked : F.value.cooked + L(S)).join(""), R = a(C, A);
          if (R.length === 0 && _.trim().length === 0)
            return "``";
          let O = new RegExp(L("(\\d+)"), "g"), Q = 0, v = D(_, { parser: j, __onHtmlRoot(F) {
            Q = F.children.length;
          } }, { stripTrailingHardline: !0 }), P = o(v, (F) => {
            if (typeof F != "string")
              return F;
            let S = [], b = F.split(O);
            for (let B = 0; B < b.length; B++) {
              let I = b[B];
              if (B % 2 === 0) {
                I && (I = f(I), y.__embeddedInHtml && (I = I.replace(/<\/(script)\b/gi, "<\\/$1")), S.push(I));
                continue;
              }
              let $ = Number(I);
              S.push(R[$]);
            }
            return S;
          }), E = /^\s/.test(_) ? " " : "", w = /\s$/.test(_) ? " " : "", c = y.htmlWhitespaceSensitivity === "ignore" ? p : E && w ? d : null;
          return u(c ? ["`", i([c, u(P)]), c, "`"] : ["`", E, Q > 1 ? i(u(P)) : u(P), w, "`"]);
        }
        m.exports = x;
      } }), rl = ee({ "src/language-js/embed.js"(l, m) {
        ne();
        var { hasComment: i, CommentCheckFlags: d, isObjectProperty: p } = In(), u = Yo(), o = el(), a = tl(), f = nl();
        function g(v) {
          if (A(v) || j(v) || M(v) || D(v))
            return "css";
          if (_(v))
            return "graphql";
          if (O(v))
            return "html";
          if (y(v))
            return "angular";
          if (C(v))
            return "markdown";
        }
        function x(v, P, E, w) {
          let c = v.getValue();
          if (c.type !== "TemplateLiteral" || Q(c))
            return;
          let F = g(v);
          if (F) {
            if (F === "markdown")
              return u(v, P, E);
            if (F === "css")
              return o(v, P, E);
            if (F === "graphql")
              return a(v, P, E);
            if (F === "html" || F === "angular")
              return f(v, P, E, w, { parser: F });
          }
        }
        function C(v) {
          let P = v.getValue(), E = v.getParentNode();
          return E && E.type === "TaggedTemplateExpression" && P.quasis.length === 1 && E.tag.type === "Identifier" && (E.tag.name === "md" || E.tag.name === "markdown");
        }
        function A(v) {
          let P = v.getValue(), E = v.getParentNode(), w = v.getParentNode(1);
          return w && P.quasis && E.type === "JSXExpressionContainer" && w.type === "JSXElement" && w.openingElement.name.name === "style" && w.openingElement.attributes.some((c) => c.name.name === "jsx") || E && E.type === "TaggedTemplateExpression" && E.tag.type === "Identifier" && E.tag.name === "css" || E && E.type === "TaggedTemplateExpression" && E.tag.type === "MemberExpression" && E.tag.object.name === "css" && (E.tag.property.name === "global" || E.tag.property.name === "resolve");
        }
        function D(v) {
          return v.match((P) => P.type === "TemplateLiteral", (P, E) => P.type === "ArrayExpression" && E === "elements", (P, E) => p(P) && P.key.type === "Identifier" && P.key.name === "styles" && E === "value", ...T);
        }
        function y(v) {
          return v.match((P) => P.type === "TemplateLiteral", (P, E) => p(P) && P.key.type === "Identifier" && P.key.name === "template" && E === "value", ...T);
        }
        var T = [(v, P) => v.type === "ObjectExpression" && P === "properties", (v, P) => v.type === "CallExpression" && v.callee.type === "Identifier" && v.callee.name === "Component" && P === "arguments", (v, P) => v.type === "Decorator" && P === "expression"];
        function j(v) {
          let P = v.getParentNode();
          if (!P || P.type !== "TaggedTemplateExpression")
            return !1;
          let E = P.tag.type === "ParenthesizedExpression" ? P.tag.expression : P.tag;
          switch (E.type) {
            case "MemberExpression":
              return k(E.object) || L(E);
            case "CallExpression":
              return k(E.callee) || E.callee.type === "MemberExpression" && (E.callee.object.type === "MemberExpression" && (k(E.callee.object.object) || L(E.callee.object)) || E.callee.object.type === "CallExpression" && k(E.callee.object.callee));
            case "Identifier":
              return E.name === "css";
            default:
              return !1;
          }
        }
        function M(v) {
          let P = v.getParentNode(), E = v.getParentNode(1);
          return E && P.type === "JSXExpressionContainer" && E.type === "JSXAttribute" && E.name.type === "JSXIdentifier" && E.name.name === "css";
        }
        function k(v) {
          return v.type === "Identifier" && v.name === "styled";
        }
        function L(v) {
          return /^[A-Z]/.test(v.object.name) && v.property.name === "extend";
        }
        function _(v) {
          let P = v.getValue(), E = v.getParentNode();
          return R(P, "GraphQL") || E && (E.type === "TaggedTemplateExpression" && (E.tag.type === "MemberExpression" && E.tag.object.name === "graphql" && E.tag.property.name === "experimental" || E.tag.type === "Identifier" && (E.tag.name === "gql" || E.tag.name === "graphql")) || E.type === "CallExpression" && E.callee.type === "Identifier" && E.callee.name === "graphql");
        }
        function R(v, P) {
          return i(v, d.Block | d.Leading, (E) => {
            let { value: w } = E;
            return w === ` ${P} `;
          });
        }
        function O(v) {
          return R(v.getValue(), "HTML") || v.match((P) => P.type === "TemplateLiteral", (P, E) => P.type === "TaggedTemplateExpression" && P.tag.type === "Identifier" && P.tag.name === "html" && E === "quasi");
        }
        function Q(v) {
          let { quasis: P } = v;
          return P.some((E) => {
            let { value: { cooked: w } } = E;
            return w === null;
          });
        }
        m.exports = x;
      } }), ul = ee({ "src/language-js/clean.js"(l, m) {
        ne();
        var i = Au(), d = /* @__PURE__ */ new Set(["range", "raw", "comments", "leadingComments", "trailingComments", "innerComments", "extra", "start", "end", "loc", "flags", "errors", "tokens"]), p = (o) => {
          for (let a of o.quasis)
            delete a.value;
        };
        function u(o, a, f) {
          if (o.type === "Program" && delete a.sourceType, (o.type === "BigIntLiteral" || o.type === "BigIntLiteralTypeAnnotation") && a.value && (a.value = a.value.toLowerCase()), (o.type === "BigIntLiteral" || o.type === "Literal") && a.bigint && (a.bigint = a.bigint.toLowerCase()), o.type === "DecimalLiteral" && (a.value = Number(a.value)), o.type === "Literal" && a.decimal && (a.decimal = Number(a.decimal)), o.type === "EmptyStatement" || o.type === "JSXText" || o.type === "JSXExpressionContainer" && (o.expression.type === "Literal" || o.expression.type === "StringLiteral") && o.expression.value === " ")
            return null;
          if ((o.type === "Property" || o.type === "ObjectProperty" || o.type === "MethodDefinition" || o.type === "ClassProperty" || o.type === "ClassMethod" || o.type === "PropertyDefinition" || o.type === "TSDeclareMethod" || o.type === "TSPropertySignature" || o.type === "ObjectTypeProperty") && typeof o.key == "object" && o.key && (o.key.type === "Literal" || o.key.type === "NumericLiteral" || o.key.type === "StringLiteral" || o.key.type === "Identifier") && delete a.key, o.type === "JSXElement" && o.openingElement.name.name === "style" && o.openingElement.attributes.some((C) => C.name.name === "jsx"))
            for (let { type: C, expression: A } of a.children)
              C === "JSXExpressionContainer" && A.type === "TemplateLiteral" && p(A);
          o.type === "JSXAttribute" && o.name.name === "css" && o.value.type === "JSXExpressionContainer" && o.value.expression.type === "TemplateLiteral" && p(a.value.expression), o.type === "JSXAttribute" && o.value && o.value.type === "Literal" && /["']|&quot;|&apos;/.test(o.value.value) && (a.value.value = a.value.value.replace(/["']|&quot;|&apos;/g, '"'));
          let g = o.expression || o.callee;
          if (o.type === "Decorator" && g.type === "CallExpression" && g.callee.name === "Component" && g.arguments.length === 1) {
            let C = o.expression.arguments[0].properties;
            for (let [A, D] of a.expression.arguments[0].properties.entries())
              switch (C[A].key.name) {
                case "styles":
                  D.value.type === "ArrayExpression" && p(D.value.elements[0]);
                  break;
                case "template":
                  D.value.type === "TemplateLiteral" && p(D.value);
                  break;
              }
          }
          if (o.type === "TaggedTemplateExpression" && (o.tag.type === "MemberExpression" || o.tag.type === "Identifier" && (o.tag.name === "gql" || o.tag.name === "graphql" || o.tag.name === "css" || o.tag.name === "md" || o.tag.name === "markdown" || o.tag.name === "html") || o.tag.type === "CallExpression") && p(a.quasi), o.type === "TemplateLiteral") {
            var x;
            (!((x = o.leadingComments) === null || x === void 0) && x.some((C) => i(C) && ["GraphQL", "HTML"].some((A) => C.value === ` ${A} `)) || f.type === "CallExpression" && f.callee.name === "graphql" || !o.leadingComments) && p(a);
          }
          if (o.type === "InterpreterDirective" && (a.value = a.value.trimEnd()), (o.type === "TSIntersectionType" || o.type === "TSUnionType") && o.types.length === 1)
            return a.types[0];
        }
        u.ignoredProperties = d, m.exports = u;
      } }), Xa = {};
      zt(Xa, { EOL: () => Gi, arch: () => ta, cpus: () => al, default: () => hi, endianness: () => ju, freemem: () => ol, getNetworkInterfaces: () => ea, hostname: () => Ho, loadavg: () => Zo, networkInterfaces: () => Xn, platform: () => Ao, release: () => Ya, tmpDir: () => na, tmpdir: () => gi, totalmem: () => zi, type: () => Qa, uptime: () => il });
      function ju() {
        if (typeof Ui > "u") {
          var l = new ArrayBuffer(2), m = new Uint8Array(l), i = new Uint16Array(l);
          if (m[0] = 1, m[1] = 2, i[0] === 258)
            Ui = "BE";
          else if (i[0] === 513)
            Ui = "LE";
          else
            throw new Error("unable to figure out endianess");
        }
        return Ui;
      }
      function Ho() {
        return typeof globalThis.location < "u" ? globalThis.location.hostname : "";
      }
      function Zo() {
        return [];
      }
      function il() {
        return 0;
      }
      function ol() {
        return Number.MAX_VALUE;
      }
      function zi() {
        return Number.MAX_VALUE;
      }
      function al() {
        return [];
      }
      function Qa() {
        return "Browser";
      }
      function Ya() {
        return typeof globalThis.navigator < "u" ? globalThis.navigator.appVersion : "";
      }
      function Xn() {
      }
      function ea() {
      }
      function ta() {
        return "javascript";
      }
      function Ao() {
        return "browser";
      }
      function na() {
        return "/tmp";
      }
      var Ui, gi, Gi, hi, sl = bt({ "node-modules-polyfills:os"() {
        ne(), gi = na, Gi = `
`, hi = { EOL: Gi, tmpdir: gi, tmpDir: na, networkInterfaces: Xn, getNetworkInterfaces: ea, release: Ya, type: Qa, cpus: al, totalmem: zi, freemem: ol, uptime: il, loadavg: Zo, hostname: Ho, endianness: ju };
      } }), Dc = ee({ "node-modules-polyfills-commonjs:os"(l, m) {
        ne();
        var i = (sl(), vn(Xa));
        if (i && i.default) {
          m.exports = i.default;
          for (let d in i)
            m.exports[d] = i[d];
        } else
          i && (m.exports = i);
      } }), gc = ee({ "node_modules/detect-newline/index.js"(l, m) {
        ne();
        var i = (d) => {
          if (typeof d != "string")
            throw new TypeError("Expected a string");
          let p = d.match(/(?:\r?\n)/g) || [];
          if (p.length === 0)
            return;
          let u = p.filter((a) => a === `\r
`).length, o = p.length - u;
          return u > o ? `\r
` : `
`;
        };
        m.exports = i, m.exports.graceful = (d) => typeof d == "string" && i(d) || `
`;
      } }), ll = ee({ "node_modules/jest-docblock/build/index.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 }), l.extract = D, l.parse = T, l.parseWithComments = j, l.print = M, l.strip = y;
        function m() {
          let L = Dc();
          return m = function() {
            return L;
          }, L;
        }
        function i() {
          let L = d(gc());
          return i = function() {
            return L;
          }, L;
        }
        function d(L) {
          return L && L.__esModule ? L : { default: L };
        }
        var p = /\*\/$/, u = /^\/\*\*?/, o = /^\s*(\/\*\*?(.|\r?\n)*?\*\/)/, a = /(^|\s+)\/\/([^\r\n]*)/g, f = /^(\r?\n)+/, g = /(?:^|\r?\n) *(@[^\r\n]*?) *\r?\n *(?![^@\r\n]*\/\/[^]*)([^@\r\n\s][^@\r\n]+?) *\r?\n/g, x = /(?:^|\r?\n) *@(\S+) *([^\r\n]*)/g, C = /(\r?\n|^) *\* ?/g, A = [];
        function D(L) {
          let _ = L.match(o);
          return _ ? _[0].trimLeft() : "";
        }
        function y(L) {
          let _ = L.match(o);
          return _ && _[0] ? L.substring(_[0].length) : L;
        }
        function T(L) {
          return j(L).pragmas;
        }
        function j(L) {
          let _ = (0, i().default)(L) || m().EOL;
          L = L.replace(u, "").replace(p, "").replace(C, "$1");
          let R = "";
          for (; R !== L; )
            R = L, L = L.replace(g, `${_}$1 $2${_}`);
          L = L.replace(f, "").trimRight();
          let O = /* @__PURE__ */ Object.create(null), Q = L.replace(x, "").replace(f, "").trimRight(), v;
          for (; v = x.exec(L); ) {
            let P = v[2].replace(a, "");
            typeof O[v[1]] == "string" || Array.isArray(O[v[1]]) ? O[v[1]] = A.concat(O[v[1]], P) : O[v[1]] = P;
          }
          return { comments: Q, pragmas: O };
        }
        function M(L) {
          let { comments: _ = "", pragmas: R = {} } = L, O = (0, i().default)(_) || m().EOL, Q = "/**", v = " *", P = " */", E = Object.keys(R), w = E.map((F) => k(F, R[F])).reduce((F, S) => F.concat(S), []).map((F) => `${v} ${F}${O}`).join("");
          if (!_) {
            if (E.length === 0)
              return "";
            if (E.length === 1 && !Array.isArray(R[E[0]])) {
              let F = R[E[0]];
              return `${Q} ${k(E[0], F)[0]}${P}`;
            }
          }
          let c = _.split(O).map((F) => `${v} ${F}`).join(O) + O;
          return Q + O + (_ ? c : "") + (_ && E.length ? v + O : "") + w + P;
        }
        function k(L, _) {
          return A.concat(_).map((R) => `@${L} ${R}`.trim());
        }
      } }), ra = ee({ "src/language-js/utils/get-shebang.js"(l, m) {
        ne();
        function i(d) {
          if (!d.startsWith("#!"))
            return "";
          let p = d.indexOf(`
`);
          return p === -1 ? d : d.slice(0, p);
        }
        m.exports = i;
      } }), So = ee({ "src/language-js/pragma.js"(l, m) {
        ne();
        var { parseWithComments: i, strip: d, extract: p, print: u } = ll(), { normalizeEndOfLine: o } = Gu(), a = ra();
        function f(C) {
          let A = a(C);
          A && (C = C.slice(A.length + 1));
          let D = p(C), { pragmas: y, comments: T } = i(D);
          return { shebang: A, text: C, pragmas: y, comments: T };
        }
        function g(C) {
          let A = Object.keys(f(C).pragmas);
          return A.includes("prettier") || A.includes("format");
        }
        function x(C) {
          let { shebang: A, text: D, pragmas: y, comments: T } = f(C), j = d(D), M = u({ pragmas: Object.assign({ format: "" }, y), comments: T.trimStart() });
          return (A ? `${A}
` : "") + o(M) + (j.startsWith(`
`) ? `
` : `

`) + j;
        }
        m.exports = { hasPragma: g, insertPragma: x };
      } }), Ha = ee({ "src/language-js/utils/is-type-cast-comment.js"(l, m) {
        ne();
        var i = Au();
        function d(p) {
          return i(p) && p.value[0] === "*" && /@(?:type|satisfies)\b/.test(p.value);
        }
        m.exports = d;
      } }), ua = ee({ "src/language-js/comments.js"(l, m) {
        ne();
        var { getLast: i, hasNewline: d, getNextNonSpaceNonCommentCharacterIndexWithStartIndex: p, getNextNonSpaceNonCommentCharacter: u, hasNewlineInRange: o, addLeadingComment: a, addTrailingComment: f, addDanglingComment: g, getNextNonSpaceNonCommentCharacterIndex: x, isNonEmptyArray: C } = yn(), { getFunctionParameters: A, isPrettierIgnoreComment: D, isJsxNode: y, hasFlowShorthandAnnotationComment: T, hasFlowAnnotationComment: j, hasIgnoreComment: M, isCallLikeExpression: k, getCallArguments: L, isCallExpression: _, isMemberExpression: R, isObjectProperty: O, isLineComment: Q, getComments: v, CommentCheckFlags: P, markerForIfWithoutBlockAndSameLineComment: E } = In(), { locStart: w, locEnd: c } = Nr(), F = Au(), S = Ha();
        function b(_e) {
          return [Y, tt, ie, J, te, K, ye, ze, De, Ke, Ct, en, Ne, oe, H].some((N) => N(_e));
        }
        function B(_e) {
          return [W, tt, q, Ct, J, te, K, ye, oe, ce, Be, Ke, _t, H, ue].some((N) => N(_e));
        }
        function I(_e) {
          return [Y, J, te, U, we, Ne, Ke, Te, re, ke, H, Fe].some((N) => N(_e));
        }
        function $(_e, N) {
          let Z = (_e.body || _e.properties).find((Ee) => {
            let { type: he } = Ee;
            return he !== "EmptyStatement";
          });
          Z ? a(Z, N) : g(_e, N);
        }
        function G(_e, N) {
          _e.type === "BlockStatement" ? $(_e, N) : a(_e, N);
        }
        function W(_e) {
          let { comment: N, followingNode: Z } = _e;
          return Z && S(N) ? (a(Z, N), !0) : !1;
        }
        function J(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, followingNode: he, text: qe } = _e;
          if ((Ee == null ? void 0 : Ee.type) !== "IfStatement" || !he)
            return !1;
          if (u(qe, N, c) === ")")
            return f(Z, N), !0;
          if (Z === Ee.consequent && he === Ee.alternate) {
            if (Z.type === "BlockStatement")
              f(Z, N);
            else {
              let gt = N.type === "SingleLine" || N.loc.start.line === N.loc.end.line, Ue = N.loc.start.line === Z.loc.start.line;
              gt && Ue ? g(Z, N, E) : g(Ee, N);
            }
            return !0;
          }
          return he.type === "BlockStatement" ? ($(he, N), !0) : he.type === "IfStatement" ? (G(he.consequent, N), !0) : Ee.consequent === he ? (a(he, N), !0) : !1;
        }
        function te(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, followingNode: he, text: qe } = _e;
          return (Ee == null ? void 0 : Ee.type) !== "WhileStatement" || !he ? !1 : u(qe, N, c) === ")" ? (f(Z, N), !0) : he.type === "BlockStatement" ? ($(he, N), !0) : Ee.body === he ? (a(he, N), !0) : !1;
        }
        function K(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, followingNode: he } = _e;
          return (Ee == null ? void 0 : Ee.type) !== "TryStatement" && (Ee == null ? void 0 : Ee.type) !== "CatchClause" || !he ? !1 : Ee.type === "CatchClause" && Z ? (f(Z, N), !0) : he.type === "BlockStatement" ? ($(he, N), !0) : he.type === "TryStatement" ? (G(he.finalizer, N), !0) : he.type === "CatchClause" ? (G(he.body, N), !0) : !1;
        }
        function ie(_e) {
          let { comment: N, enclosingNode: Z, followingNode: Ee } = _e;
          return R(Z) && (Ee == null ? void 0 : Ee.type) === "Identifier" ? (a(Z, N), !0) : !1;
        }
        function q(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, followingNode: he, text: qe } = _e, gt = Z && !o(qe, c(Z), w(N));
          return (!Z || !gt) && ((Ee == null ? void 0 : Ee.type) === "ConditionalExpression" || (Ee == null ? void 0 : Ee.type) === "TSConditionalType") && he ? (a(he, N), !0) : !1;
        }
        function U(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee } = _e;
          return O(Ee) && Ee.shorthand && Ee.key === Z && Ee.value.type === "AssignmentPattern" ? (f(Ee.value.left, N), !0) : !1;
        }
        var se = /* @__PURE__ */ new Set(["ClassDeclaration", "ClassExpression", "DeclareClass", "DeclareInterface", "InterfaceDeclaration", "TSInterfaceDeclaration"]);
        function ye(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, followingNode: he } = _e;
          if (se.has(Ee == null ? void 0 : Ee.type)) {
            if (C(Ee.decorators) && !(he && he.type === "Decorator"))
              return f(i(Ee.decorators), N), !0;
            if (Ee.body && he === Ee.body)
              return $(Ee.body, N), !0;
            if (he) {
              if (Ee.superClass && he === Ee.superClass && Z && (Z === Ee.id || Z === Ee.typeParameters))
                return f(Z, N), !0;
              for (let qe of ["implements", "extends", "mixins"])
                if (Ee[qe] && he === Ee[qe][0])
                  return Z && (Z === Ee.id || Z === Ee.typeParameters || Z === Ee.superClass) ? f(Z, N) : g(Ee, N, qe), !0;
            }
          }
          return !1;
        }
        var le = /* @__PURE__ */ new Set(["ClassMethod", "ClassProperty", "PropertyDefinition", "TSAbstractPropertyDefinition", "TSAbstractMethodDefinition", "TSDeclareMethod", "MethodDefinition", "ClassAccessorProperty", "AccessorProperty", "TSAbstractAccessorProperty"]);
        function Ne(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, text: he } = _e;
          return Ee && Z && u(he, N, c) === "(" && (Ee.type === "Property" || Ee.type === "TSDeclareMethod" || Ee.type === "TSAbstractMethodDefinition") && Z.type === "Identifier" && Ee.key === Z && u(he, Z, c) !== ":" || (Z == null ? void 0 : Z.type) === "Decorator" && le.has(Ee == null ? void 0 : Ee.type) ? (f(Z, N), !0) : !1;
        }
        var X = /* @__PURE__ */ new Set(["FunctionDeclaration", "FunctionExpression", "ClassMethod", "MethodDefinition", "ObjectMethod"]);
        function re(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, text: he } = _e;
          return u(he, N, c) !== "(" ? !1 : Z && X.has(Ee == null ? void 0 : Ee.type) ? (f(Z, N), !0) : !1;
        }
        function Te(_e) {
          let { comment: N, enclosingNode: Z, text: Ee } = _e;
          if ((Z == null ? void 0 : Z.type) !== "ArrowFunctionExpression")
            return !1;
          let he = x(Ee, N, c);
          return he !== !1 && Ee.slice(he, he + 2) === "=>" ? (g(Z, N), !0) : !1;
        }
        function we(_e) {
          let { comment: N, enclosingNode: Z, text: Ee } = _e;
          return u(Ee, N, c) !== ")" ? !1 : Z && (xe(Z) && A(Z).length === 0 || k(Z) && L(Z).length === 0) ? (g(Z, N), !0) : ((Z == null ? void 0 : Z.type) === "MethodDefinition" || (Z == null ? void 0 : Z.type) === "TSAbstractMethodDefinition") && A(Z.value).length === 0 ? (g(Z.value, N), !0) : !1;
        }
        function tt(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, followingNode: he, text: qe } = _e;
          if ((Z == null ? void 0 : Z.type) === "FunctionTypeParam" && (Ee == null ? void 0 : Ee.type) === "FunctionTypeAnnotation" && (he == null ? void 0 : he.type) !== "FunctionTypeParam" || ((Z == null ? void 0 : Z.type) === "Identifier" || (Z == null ? void 0 : Z.type) === "AssignmentPattern") && Ee && xe(Ee) && u(qe, N, c) === ")")
            return f(Z, N), !0;
          if ((Ee == null ? void 0 : Ee.type) === "FunctionDeclaration" && (he == null ? void 0 : he.type) === "BlockStatement") {
            let gt = (() => {
              let Ue = A(Ee);
              if (Ue.length > 0)
                return p(qe, c(i(Ue)));
              let qn = p(qe, c(Ee.id));
              return qn !== !1 && p(qe, qn + 1);
            })();
            if (w(N) > gt)
              return $(he, N), !0;
          }
          return !1;
        }
        function oe(_e) {
          let { comment: N, enclosingNode: Z } = _e;
          return (Z == null ? void 0 : Z.type) === "LabeledStatement" ? (a(Z, N), !0) : !1;
        }
        function H(_e) {
          let { comment: N, enclosingNode: Z } = _e;
          return ((Z == null ? void 0 : Z.type) === "ContinueStatement" || (Z == null ? void 0 : Z.type) === "BreakStatement") && !Z.label ? (f(Z, N), !0) : !1;
        }
        function ce(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee } = _e;
          return _(Ee) && Z && Ee.callee === Z && Ee.arguments.length > 0 ? (a(Ee.arguments[0], N), !0) : !1;
        }
        function De(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, followingNode: he } = _e;
          return (Ee == null ? void 0 : Ee.type) === "UnionTypeAnnotation" || (Ee == null ? void 0 : Ee.type) === "TSUnionType" ? (D(N) && (he.prettierIgnore = !0, N.unignore = !0), Z ? (f(Z, N), !0) : !1) : (((he == null ? void 0 : he.type) === "UnionTypeAnnotation" || (he == null ? void 0 : he.type) === "TSUnionType") && D(N) && (he.types[0].prettierIgnore = !0, N.unignore = !0), !1);
        }
        function Be(_e) {
          let { comment: N, enclosingNode: Z } = _e;
          return O(Z) ? (a(Z, N), !0) : !1;
        }
        function Ke(_e) {
          let { comment: N, enclosingNode: Z, followingNode: Ee, ast: he, isLastComment: qe } = _e;
          return he && he.body && he.body.length === 0 ? (qe ? g(he, N) : a(he, N), !0) : (Z == null ? void 0 : Z.type) === "Program" && (Z == null ? void 0 : Z.body.length) === 0 && !C(Z.directives) ? (qe ? g(Z, N) : a(Z, N), !0) : (Ee == null ? void 0 : Ee.type) === "Program" && (Ee == null ? void 0 : Ee.body.length) === 0 && (Z == null ? void 0 : Z.type) === "ModuleExpression" ? (g(Ee, N), !0) : !1;
        }
        function ze(_e) {
          let { comment: N, enclosingNode: Z } = _e;
          return (Z == null ? void 0 : Z.type) === "ForInStatement" || (Z == null ? void 0 : Z.type) === "ForOfStatement" ? (a(Z, N), !0) : !1;
        }
        function Ct(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, text: he } = _e;
          if ((Ee == null ? void 0 : Ee.type) === "ImportSpecifier" || (Ee == null ? void 0 : Ee.type) === "ExportSpecifier")
            return a(Ee, N), !0;
          let qe = (Z == null ? void 0 : Z.type) === "ImportSpecifier" && (Ee == null ? void 0 : Ee.type) === "ImportDeclaration", gt = (Z == null ? void 0 : Z.type) === "ExportSpecifier" && (Ee == null ? void 0 : Ee.type) === "ExportNamedDeclaration";
          return (qe || gt) && d(he, c(N)) ? (f(Z, N), !0) : !1;
        }
        function en(_e) {
          let { comment: N, enclosingNode: Z } = _e;
          return (Z == null ? void 0 : Z.type) === "AssignmentPattern" ? (a(Z, N), !0) : !1;
        }
        var Gt = /* @__PURE__ */ new Set(["VariableDeclarator", "AssignmentExpression", "TypeAlias", "TSTypeAliasDeclaration"]), ft = /* @__PURE__ */ new Set(["ObjectExpression", "ArrayExpression", "TemplateLiteral", "TaggedTemplateExpression", "ObjectTypeAnnotation", "TSTypeLiteral"]);
        function _t(_e) {
          let { comment: N, enclosingNode: Z, followingNode: Ee } = _e;
          return Gt.has(Z == null ? void 0 : Z.type) && Ee && (ft.has(Ee.type) || F(N)) ? (a(Ee, N), !0) : !1;
        }
        function Fe(_e) {
          let { comment: N, enclosingNode: Z, followingNode: Ee, text: he } = _e;
          return !Ee && ((Z == null ? void 0 : Z.type) === "TSMethodSignature" || (Z == null ? void 0 : Z.type) === "TSDeclareFunction" || (Z == null ? void 0 : Z.type) === "TSAbstractMethodDefinition") && u(he, N, c) === ";" ? (f(Z, N), !0) : !1;
        }
        function Y(_e) {
          let { comment: N, enclosingNode: Z, followingNode: Ee } = _e;
          if (D(N) && (Z == null ? void 0 : Z.type) === "TSMappedType" && (Ee == null ? void 0 : Ee.type) === "TSTypeParameter" && Ee.constraint)
            return Z.prettierIgnore = !0, N.unignore = !0, !0;
        }
        function ke(_e) {
          let { comment: N, precedingNode: Z, enclosingNode: Ee, followingNode: he } = _e;
          return (Ee == null ? void 0 : Ee.type) !== "TSMappedType" ? !1 : (he == null ? void 0 : he.type) === "TSTypeParameter" && he.name ? (a(he.name, N), !0) : (Z == null ? void 0 : Z.type) === "TSTypeParameter" && Z.constraint ? (f(Z.constraint, N), !0) : !1;
        }
        function ue(_e) {
          let { comment: N, enclosingNode: Z, followingNode: Ee } = _e;
          return !Z || Z.type !== "SwitchCase" || Z.test || !Ee || Ee !== Z.consequent[0] ? !1 : (Ee.type === "BlockStatement" && Q(N) ? $(Ee, N) : g(Z, N), !0);
        }
        function xe(_e) {
          return _e.type === "ArrowFunctionExpression" || _e.type === "FunctionExpression" || _e.type === "FunctionDeclaration" || _e.type === "ObjectMethod" || _e.type === "ClassMethod" || _e.type === "TSDeclareFunction" || _e.type === "TSCallSignatureDeclaration" || _e.type === "TSConstructSignatureDeclaration" || _e.type === "TSMethodSignature" || _e.type === "TSConstructorType" || _e.type === "TSFunctionType" || _e.type === "TSDeclareMethod";
        }
        function nt(_e, N) {
          if ((N.parser === "typescript" || N.parser === "flow" || N.parser === "acorn" || N.parser === "espree" || N.parser === "meriyah" || N.parser === "__babel_estree") && _e.type === "MethodDefinition" && _e.value && _e.value.type === "FunctionExpression" && A(_e.value).length === 0 && !_e.value.returnType && !C(_e.value.typeParameters) && _e.value.body)
            return [..._e.decorators || [], _e.key, _e.value.body];
        }
        function Ze(_e) {
          let N = _e.getValue(), Z = _e.getParentNode(), Ee = (he) => j(v(he, P.Leading)) || j(v(he, P.Trailing));
          return (N && (y(N) || T(N) || _(Z) && Ee(N)) || Z && (Z.type === "JSXSpreadAttribute" || Z.type === "JSXSpreadChild" || Z.type === "UnionTypeAnnotation" || Z.type === "TSUnionType" || (Z.type === "ClassDeclaration" || Z.type === "ClassExpression") && Z.superClass === N)) && (!M(_e) || Z.type === "UnionTypeAnnotation" || Z.type === "TSUnionType");
        }
        m.exports = { handleOwnLineComment: b, handleEndOfLineComment: B, handleRemainingComment: I, getCommentChildNodes: nt, willPrintOwnComments: Ze };
      } }), Yu = ee({ "src/language-js/needs-parens.js"(l, m) {
        ne();
        var i = sr(), d = Ko(), { getFunctionParameters: p, getLeftSidePathName: u, hasFlowShorthandAnnotationComment: o, hasNakedLeftSide: a, hasNode: f, isBitwiseOperator: g, startsWithNoLookaheadToken: x, shouldFlatten: C, getPrecedence: A, isCallExpression: D, isMemberExpression: y, isObjectProperty: T, isTSTypeExpression: j } = In();
        function M(v, P) {
          let E = v.getParentNode();
          if (!E)
            return !1;
          let w = v.getName(), c = v.getNode();
          if (P.__isInHtmlInterpolation && !P.bracketSpacing && R(c) && O(v))
            return !0;
          if (k(c))
            return !1;
          if (P.parser !== "flow" && o(v.getValue()))
            return !0;
          if (c.type === "Identifier") {
            if (c.extra && c.extra.parenthesized && /^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(c.name) || w === "left" && (c.name === "async" && !E.await || c.name === "let") && E.type === "ForOfStatement")
              return !0;
            if (c.name === "let") {
              var F;
              let b = (F = v.findAncestor((B) => B.type === "ForOfStatement")) === null || F === void 0 ? void 0 : F.left;
              if (b && x(b, (B) => B === c))
                return !0;
            }
            if (w === "object" && c.name === "let" && E.type === "MemberExpression" && E.computed && !E.optional) {
              let b = v.findAncestor((I) => I.type === "ExpressionStatement" || I.type === "ForStatement" || I.type === "ForInStatement"), B = b ? b.type === "ExpressionStatement" ? b.expression : b.type === "ForStatement" ? b.init : b.left : void 0;
              if (B && x(B, (I) => I === c))
                return !0;
            }
            return !1;
          }
          if (c.type === "ObjectExpression" || c.type === "FunctionExpression" || c.type === "ClassExpression" || c.type === "DoExpression") {
            var S;
            let b = (S = v.findAncestor((B) => B.type === "ExpressionStatement")) === null || S === void 0 ? void 0 : S.expression;
            if (b && x(b, (B) => B === c))
              return !0;
          }
          switch (E.type) {
            case "ParenthesizedExpression":
              return !1;
            case "ClassDeclaration":
            case "ClassExpression": {
              if (w === "superClass" && (c.type === "ArrowFunctionExpression" || c.type === "AssignmentExpression" || c.type === "AwaitExpression" || c.type === "BinaryExpression" || c.type === "ConditionalExpression" || c.type === "LogicalExpression" || c.type === "NewExpression" || c.type === "ObjectExpression" || c.type === "SequenceExpression" || c.type === "TaggedTemplateExpression" || c.type === "UnaryExpression" || c.type === "UpdateExpression" || c.type === "YieldExpression" || c.type === "TSNonNullExpression"))
                return !0;
              break;
            }
            case "ExportDefaultDeclaration":
              return Q(v, P) || c.type === "SequenceExpression";
            case "Decorator": {
              if (w === "expression") {
                if (y(c) && c.computed)
                  return !0;
                let b = !1, B = !1, I = c;
                for (; I; )
                  switch (I.type) {
                    case "MemberExpression":
                      B = !0, I = I.object;
                      break;
                    case "CallExpression":
                      if (B || b)
                        return P.parser !== "typescript";
                      b = !0, I = I.callee;
                      break;
                    case "Identifier":
                      return !1;
                    case "TaggedTemplateExpression":
                      return P.parser !== "typescript";
                    default:
                      return !0;
                  }
                return !0;
              }
              break;
            }
            case "ArrowFunctionExpression": {
              if (w === "body" && c.type !== "SequenceExpression" && x(c, (b) => b.type === "ObjectExpression"))
                return !0;
              break;
            }
          }
          switch (c.type) {
            case "UpdateExpression":
              if (E.type === "UnaryExpression")
                return c.prefix && (c.operator === "++" && E.operator === "+" || c.operator === "--" && E.operator === "-");
            case "UnaryExpression":
              switch (E.type) {
                case "UnaryExpression":
                  return c.operator === E.operator && (c.operator === "+" || c.operator === "-");
                case "BindExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return w === "object";
                case "TaggedTemplateExpression":
                  return !0;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return w === "callee";
                case "BinaryExpression":
                  return w === "left" && E.operator === "**";
                case "TSNonNullExpression":
                  return !0;
                default:
                  return !1;
              }
            case "BinaryExpression": {
              if (E.type === "UpdateExpression" || c.operator === "in" && L(v))
                return !0;
              if (c.operator === "|>" && c.extra && c.extra.parenthesized) {
                let b = v.getParentNode(1);
                if (b.type === "BinaryExpression" && b.operator === "|>")
                  return !0;
              }
            }
            case "TSTypeAssertion":
            case "TSAsExpression":
            case "TSSatisfiesExpression":
            case "LogicalExpression":
              switch (E.type) {
                case "TSSatisfiesExpression":
                case "TSAsExpression":
                  return !j(c);
                case "ConditionalExpression":
                  return j(c);
                case "CallExpression":
                case "NewExpression":
                case "OptionalCallExpression":
                  return w === "callee";
                case "ClassExpression":
                case "ClassDeclaration":
                  return w === "superClass";
                case "TSTypeAssertion":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "JSXSpreadAttribute":
                case "SpreadElement":
                case "SpreadProperty":
                case "BindExpression":
                case "AwaitExpression":
                case "TSNonNullExpression":
                case "UpdateExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return w === "object";
                case "AssignmentExpression":
                case "AssignmentPattern":
                  return w === "left" && (c.type === "TSTypeAssertion" || j(c));
                case "LogicalExpression":
                  if (c.type === "LogicalExpression")
                    return E.operator !== c.operator;
                case "BinaryExpression": {
                  let { operator: b, type: B } = c;
                  if (!b && B !== "TSTypeAssertion")
                    return !0;
                  let I = A(b), $ = E.operator, G = A($);
                  return G > I || w === "right" && G === I || G === I && !C($, b) ? !0 : G < I && b === "%" ? $ === "+" || $ === "-" : !!g($);
                }
                default:
                  return !1;
              }
            case "SequenceExpression":
              switch (E.type) {
                case "ReturnStatement":
                  return !1;
                case "ForStatement":
                  return !1;
                case "ExpressionStatement":
                  return w !== "expression";
                case "ArrowFunctionExpression":
                  return w !== "body";
                default:
                  return !0;
              }
            case "YieldExpression":
              if (E.type === "UnaryExpression" || E.type === "AwaitExpression" || j(E) || E.type === "TSNonNullExpression")
                return !0;
            case "AwaitExpression":
              switch (E.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                  return !0;
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return w === "object";
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return w === "callee";
                case "ConditionalExpression":
                  return w === "test";
                case "BinaryExpression":
                  return !(!c.argument && E.operator === "|>");
                default:
                  return !1;
              }
            case "TSConditionalType":
            case "TSFunctionType":
            case "TSConstructorType":
              if (w === "extendsType" && E.type === "TSConditionalType") {
                if (c.type === "TSConditionalType")
                  return !0;
                let { typeAnnotation: b } = c.returnType || c.typeAnnotation;
                if (b.type === "TSTypePredicate" && b.typeAnnotation && (b = b.typeAnnotation.typeAnnotation), b.type === "TSInferType" && b.typeParameter.constraint)
                  return !0;
              }
              if (w === "checkType" && E.type === "TSConditionalType")
                return !0;
            case "TSUnionType":
            case "TSIntersectionType":
              if ((E.type === "TSUnionType" || E.type === "TSIntersectionType") && E.types.length > 1 && (!c.types || c.types.length > 1))
                return !0;
            case "TSInferType":
              if (c.type === "TSInferType" && E.type === "TSRestType")
                return !1;
            case "TSTypeOperator":
              return E.type === "TSArrayType" || E.type === "TSOptionalType" || E.type === "TSRestType" || w === "objectType" && E.type === "TSIndexedAccessType" || E.type === "TSTypeOperator" || E.type === "TSTypeAnnotation" && v.getParentNode(1).type.startsWith("TSJSDoc");
            case "TSTypeQuery":
              return w === "objectType" && E.type === "TSIndexedAccessType" || w === "elementType" && E.type === "TSArrayType";
            case "TypeofTypeAnnotation":
              return w === "objectType" && (E.type === "IndexedAccessType" || E.type === "OptionalIndexedAccessType") || w === "elementType" && E.type === "ArrayTypeAnnotation";
            case "ArrayTypeAnnotation":
              return E.type === "NullableTypeAnnotation";
            case "IntersectionTypeAnnotation":
            case "UnionTypeAnnotation":
              return E.type === "ArrayTypeAnnotation" || E.type === "NullableTypeAnnotation" || E.type === "IntersectionTypeAnnotation" || E.type === "UnionTypeAnnotation" || w === "objectType" && (E.type === "IndexedAccessType" || E.type === "OptionalIndexedAccessType");
            case "NullableTypeAnnotation":
              return E.type === "ArrayTypeAnnotation" || w === "objectType" && (E.type === "IndexedAccessType" || E.type === "OptionalIndexedAccessType");
            case "FunctionTypeAnnotation": {
              let b = E.type === "NullableTypeAnnotation" ? v.getParentNode(1) : E;
              return b.type === "UnionTypeAnnotation" || b.type === "IntersectionTypeAnnotation" || b.type === "ArrayTypeAnnotation" || w === "objectType" && (b.type === "IndexedAccessType" || b.type === "OptionalIndexedAccessType") || b.type === "NullableTypeAnnotation" || E.type === "FunctionTypeParam" && E.name === null && p(c).some((B) => B.typeAnnotation && B.typeAnnotation.type === "NullableTypeAnnotation");
            }
            case "OptionalIndexedAccessType":
              return w === "objectType" && E.type === "IndexedAccessType";
            case "StringLiteral":
            case "NumericLiteral":
            case "Literal":
              if (typeof c.value == "string" && E.type === "ExpressionStatement" && !E.directive) {
                let b = v.getParentNode(1);
                return b.type === "Program" || b.type === "BlockStatement";
              }
              return w === "object" && E.type === "MemberExpression" && typeof c.value == "number";
            case "AssignmentExpression": {
              let b = v.getParentNode(1);
              return w === "body" && E.type === "ArrowFunctionExpression" ? !0 : w === "key" && (E.type === "ClassProperty" || E.type === "PropertyDefinition") && E.computed || (w === "init" || w === "update") && E.type === "ForStatement" ? !1 : E.type === "ExpressionStatement" ? c.left.type === "ObjectPattern" : !(w === "key" && E.type === "TSPropertySignature" || E.type === "AssignmentExpression" || E.type === "SequenceExpression" && b && b.type === "ForStatement" && (b.init === E || b.update === E) || w === "value" && E.type === "Property" && b && b.type === "ObjectPattern" && b.properties.includes(E) || E.type === "NGChainedExpression");
            }
            case "ConditionalExpression":
              switch (E.type) {
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "SpreadElement":
                case "SpreadProperty":
                case "BinaryExpression":
                case "LogicalExpression":
                case "NGPipeExpression":
                case "ExportDefaultDeclaration":
                case "AwaitExpression":
                case "JSXSpreadAttribute":
                case "TSTypeAssertion":
                case "TypeCastExpression":
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                  return !0;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return w === "callee";
                case "ConditionalExpression":
                  return w === "test";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return w === "object";
                default:
                  return !1;
              }
            case "FunctionExpression":
              switch (E.type) {
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return w === "callee";
                case "TaggedTemplateExpression":
                  return !0;
                default:
                  return !1;
              }
            case "ArrowFunctionExpression":
              switch (E.type) {
                case "BinaryExpression":
                  return E.operator !== "|>" || c.extra && c.extra.parenthesized;
                case "NewExpression":
                case "CallExpression":
                case "OptionalCallExpression":
                  return w === "callee";
                case "MemberExpression":
                case "OptionalMemberExpression":
                  return w === "object";
                case "TSAsExpression":
                case "TSSatisfiesExpression":
                case "TSNonNullExpression":
                case "BindExpression":
                case "TaggedTemplateExpression":
                case "UnaryExpression":
                case "LogicalExpression":
                case "AwaitExpression":
                case "TSTypeAssertion":
                  return !0;
                case "ConditionalExpression":
                  return w === "test";
                default:
                  return !1;
              }
            case "ClassExpression":
              if (d(c.decorators))
                return !0;
              switch (E.type) {
                case "NewExpression":
                  return w === "callee";
                default:
                  return !1;
              }
            case "OptionalMemberExpression":
            case "OptionalCallExpression": {
              let b = v.getParentNode(1);
              if (w === "object" && E.type === "MemberExpression" || w === "callee" && (E.type === "CallExpression" || E.type === "NewExpression") || E.type === "TSNonNullExpression" && b.type === "MemberExpression" && b.object === E)
                return !0;
            }
            case "CallExpression":
            case "MemberExpression":
            case "TaggedTemplateExpression":
            case "TSNonNullExpression":
              if (w === "callee" && (E.type === "BindExpression" || E.type === "NewExpression")) {
                let b = c;
                for (; b; )
                  switch (b.type) {
                    case "CallExpression":
                    case "OptionalCallExpression":
                      return !0;
                    case "MemberExpression":
                    case "OptionalMemberExpression":
                    case "BindExpression":
                      b = b.object;
                      break;
                    case "TaggedTemplateExpression":
                      b = b.tag;
                      break;
                    case "TSNonNullExpression":
                      b = b.expression;
                      break;
                    default:
                      return !1;
                  }
              }
              return !1;
            case "BindExpression":
              return w === "callee" && (E.type === "BindExpression" || E.type === "NewExpression") || w === "object" && y(E);
            case "NGPipeExpression":
              return !(E.type === "NGRoot" || E.type === "NGMicrosyntaxExpression" || E.type === "ObjectProperty" && !(c.extra && c.extra.parenthesized) || E.type === "ArrayExpression" || D(E) && E.arguments[w] === c || w === "right" && E.type === "NGPipeExpression" || w === "property" && E.type === "MemberExpression" || E.type === "AssignmentExpression");
            case "JSXFragment":
            case "JSXElement":
              return w === "callee" || w === "left" && E.type === "BinaryExpression" && E.operator === "<" || E.type !== "ArrayExpression" && E.type !== "ArrowFunctionExpression" && E.type !== "AssignmentExpression" && E.type !== "AssignmentPattern" && E.type !== "BinaryExpression" && E.type !== "NewExpression" && E.type !== "ConditionalExpression" && E.type !== "ExpressionStatement" && E.type !== "JsExpressionRoot" && E.type !== "JSXAttribute" && E.type !== "JSXElement" && E.type !== "JSXExpressionContainer" && E.type !== "JSXFragment" && E.type !== "LogicalExpression" && !D(E) && !T(E) && E.type !== "ReturnStatement" && E.type !== "ThrowStatement" && E.type !== "TypeCastExpression" && E.type !== "VariableDeclarator" && E.type !== "YieldExpression";
            case "TypeAnnotation":
              return w === "returnType" && E.type === "ArrowFunctionExpression" && _(c);
          }
          return !1;
        }
        function k(v) {
          return v.type === "BlockStatement" || v.type === "BreakStatement" || v.type === "ClassBody" || v.type === "ClassDeclaration" || v.type === "ClassMethod" || v.type === "ClassProperty" || v.type === "PropertyDefinition" || v.type === "ClassPrivateProperty" || v.type === "ContinueStatement" || v.type === "DebuggerStatement" || v.type === "DeclareClass" || v.type === "DeclareExportAllDeclaration" || v.type === "DeclareExportDeclaration" || v.type === "DeclareFunction" || v.type === "DeclareInterface" || v.type === "DeclareModule" || v.type === "DeclareModuleExports" || v.type === "DeclareVariable" || v.type === "DoWhileStatement" || v.type === "EnumDeclaration" || v.type === "ExportAllDeclaration" || v.type === "ExportDefaultDeclaration" || v.type === "ExportNamedDeclaration" || v.type === "ExpressionStatement" || v.type === "ForInStatement" || v.type === "ForOfStatement" || v.type === "ForStatement" || v.type === "FunctionDeclaration" || v.type === "IfStatement" || v.type === "ImportDeclaration" || v.type === "InterfaceDeclaration" || v.type === "LabeledStatement" || v.type === "MethodDefinition" || v.type === "ReturnStatement" || v.type === "SwitchStatement" || v.type === "ThrowStatement" || v.type === "TryStatement" || v.type === "TSDeclareFunction" || v.type === "TSEnumDeclaration" || v.type === "TSImportEqualsDeclaration" || v.type === "TSInterfaceDeclaration" || v.type === "TSModuleDeclaration" || v.type === "TSNamespaceExportDeclaration" || v.type === "TypeAlias" || v.type === "VariableDeclaration" || v.type === "WhileStatement" || v.type === "WithStatement";
        }
        function L(v) {
          let P = 0, E = v.getValue();
          for (; E; ) {
            let w = v.getParentNode(P++);
            if (w && w.type === "ForStatement" && w.init === E)
              return !0;
            E = w;
          }
          return !1;
        }
        function _(v) {
          return f(v, (P) => P.type === "ObjectTypeAnnotation" && f(P, (E) => E.type === "FunctionTypeAnnotation" || void 0) || void 0);
        }
        function R(v) {
          switch (v.type) {
            case "ObjectExpression":
              return !0;
            default:
              return !1;
          }
        }
        function O(v) {
          let P = v.getValue(), E = v.getParentNode(), w = v.getName();
          switch (E.type) {
            case "NGPipeExpression":
              if (typeof w == "number" && E.arguments[w] === P && E.arguments.length - 1 === w)
                return v.callParent(O);
              break;
            case "ObjectProperty":
              if (w === "value") {
                let c = v.getParentNode(1);
                return i(c.properties) === E;
              }
              break;
            case "BinaryExpression":
            case "LogicalExpression":
              if (w === "right")
                return v.callParent(O);
              break;
            case "ConditionalExpression":
              if (w === "alternate")
                return v.callParent(O);
              break;
            case "UnaryExpression":
              if (E.prefix)
                return v.callParent(O);
              break;
          }
          return !1;
        }
        function Q(v, P) {
          let E = v.getValue(), w = v.getParentNode();
          return E.type === "FunctionExpression" || E.type === "ClassExpression" ? w.type === "ExportDefaultDeclaration" || !M(v, P) : !a(E) || w.type !== "ExportDefaultDeclaration" && M(v, P) ? !1 : v.call((c) => Q(c, P), ...u(v, E));
        }
        m.exports = M;
      } }), ia = ee({ "src/language-js/print-preprocess.js"(l, m) {
        ne();
        function i(d, p) {
          switch (p.parser) {
            case "json":
            case "json5":
            case "json-stringify":
            case "__js_expression":
            case "__vue_expression":
            case "__vue_ts_expression":
              return Object.assign(Object.assign({}, d), {}, { type: p.parser.startsWith("__") ? "JsExpressionRoot" : "JsonRoot", node: d, comments: [], rootMarker: p.rootMarker });
            default:
              return d;
          }
        }
        m.exports = i;
      } }), hc = ee({ "src/language-js/print/html-binding.js"(l, m) {
        ne();
        var { builders: { join: i, line: d, group: p, softline: u, indent: o } } = Ut();
        function a(g, x, C) {
          let A = g.getValue();
          if (x.__onHtmlBindingRoot && g.getName() === null && x.__onHtmlBindingRoot(A, x), A.type === "File") {
            if (x.__isVueForBindingLeft)
              return g.call((D) => {
                let y = i([",", d], D.map(C, "params")), { params: T } = D.getValue();
                return T.length === 1 ? y : ["(", o([u, p(y)]), u, ")"];
              }, "program", "body", 0);
            if (x.__isVueBindings)
              return g.call((D) => i([",", d], D.map(C, "params")), "program", "body", 0);
          }
        }
        function f(g) {
          switch (g.type) {
            case "MemberExpression":
              switch (g.property.type) {
                case "Identifier":
                case "NumericLiteral":
                case "StringLiteral":
                  return f(g.object);
              }
              return !1;
            case "Identifier":
              return !0;
            default:
              return !1;
          }
        }
        m.exports = { isVueEventBindingExpression: f, printHtmlBinding: a };
      } }), oa = ee({ "src/language-js/print/binaryish.js"(l, m) {
        ne();
        var { printComments: i } = ur(), { getLast: d } = yn(), { builders: { join: p, line: u, softline: o, group: a, indent: f, align: g, indentIfBreak: x }, utils: { cleanDoc: C, getDocParts: A, isConcat: D } } = Ut(), { hasLeadingOwnLineComment: y, isBinaryish: T, isJsxNode: j, shouldFlatten: M, hasComment: k, CommentCheckFlags: L, isCallExpression: _, isMemberExpression: R, isObjectProperty: O, isEnabledHackPipeline: Q } = In(), v = 0;
        function P(c, F, S) {
          let b = c.getValue(), B = c.getParentNode(), I = c.getParentNode(1), $ = b !== B.body && (B.type === "IfStatement" || B.type === "WhileStatement" || B.type === "SwitchStatement" || B.type === "DoWhileStatement"), G = Q(F) && b.operator === "|>", W = E(c, S, F, !1, $);
          if ($)
            return W;
          if (G)
            return a(W);
          if (_(B) && B.callee === b || B.type === "UnaryExpression" || R(B) && !B.computed)
            return a([f([o, ...W]), o]);
          let J = B.type === "ReturnStatement" || B.type === "ThrowStatement" || B.type === "JSXExpressionContainer" && I.type === "JSXAttribute" || b.operator !== "|" && B.type === "JsExpressionRoot" || b.type !== "NGPipeExpression" && (B.type === "NGRoot" && F.parser === "__ng_binding" || B.type === "NGMicrosyntaxExpression" && I.type === "NGMicrosyntax" && I.body.length === 1) || b === B.body && B.type === "ArrowFunctionExpression" || b !== B.body && B.type === "ForStatement" || B.type === "ConditionalExpression" && I.type !== "ReturnStatement" && I.type !== "ThrowStatement" && !_(I) || B.type === "TemplateLiteral", te = B.type === "AssignmentExpression" || B.type === "VariableDeclarator" || B.type === "ClassProperty" || B.type === "PropertyDefinition" || B.type === "TSAbstractPropertyDefinition" || B.type === "ClassPrivateProperty" || O(B), K = T(b.left) && M(b.operator, b.left.operator);
          if (J || w(b) && !K || !w(b) && te)
            return a(W);
          if (W.length === 0)
            return "";
          let ie = j(b.right), q = W.findIndex((X) => typeof X != "string" && !Array.isArray(X) && X.type === "group"), U = W.slice(0, q === -1 ? 1 : q + 1), se = W.slice(U.length, ie ? -1 : void 0), ye = Symbol("logicalChain-" + ++v), le = a([...U, f(se)], { id: ye });
          if (!ie)
            return le;
          let Ne = d(W);
          return a([le, x(Ne, { groupId: ye })]);
        }
        function E(c, F, S, b, B) {
          let I = c.getValue();
          if (!T(I))
            return [a(F())];
          let $ = [];
          M(I.operator, I.left.operator) ? $ = c.call((se) => E(se, F, S, !0, B), "left") : $.push(a(F("left")));
          let G = w(I), W = (I.operator === "|>" || I.type === "NGPipeExpression" || I.operator === "|" && S.parser === "__vue_expression") && !y(S.originalText, I.right), J = I.type === "NGPipeExpression" ? "|" : I.operator, te = I.type === "NGPipeExpression" && I.arguments.length > 0 ? a(f([u, ": ", p([u, ": "], c.map(F, "arguments").map((se) => g(2, a(se))))])) : "", K;
          if (G)
            K = [J, " ", F("right"), te];
          else {
            let se = Q(S) && J === "|>" ? c.call((ye) => E(ye, F, S, !0, B), "right") : F("right");
            K = [W ? u : "", J, W ? " " : u, se, te];
          }
          let ie = c.getParentNode(), q = k(I.left, L.Trailing | L.Line), U = q || !(B && I.type === "LogicalExpression") && ie.type !== I.type && I.left.type !== I.type && I.right.type !== I.type;
          if ($.push(W ? "" : " ", U ? a(K, { shouldBreak: q }) : K), b && k(I)) {
            let se = C(i(c, $, S));
            return D(se) || se.type === "fill" ? A(se) : [se];
          }
          return $;
        }
        function w(c) {
          return c.type !== "LogicalExpression" ? !1 : !!(c.right.type === "ObjectExpression" && c.right.properties.length > 0 || c.right.type === "ArrayExpression" && c.right.elements.length > 0 || j(c.right));
        }
        m.exports = { printBinaryishExpression: P, shouldInlineLogicalExpression: w };
      } }), yc = ee({ "src/language-js/print/angular.js"(l, m) {
        ne();
        var { builders: { join: i, line: d, group: p } } = Ut(), { hasNode: u, hasComment: o, getComments: a } = In(), { printBinaryishExpression: f } = oa();
        function g(A, D, y) {
          let T = A.getValue();
          if (T.type.startsWith("NG"))
            switch (T.type) {
              case "NGRoot":
                return [y("node"), o(T.node) ? " //" + a(T.node)[0].value.trimEnd() : ""];
              case "NGPipeExpression":
                return f(A, D, y);
              case "NGChainedExpression":
                return p(i([";", d], A.map((j) => C(j) ? y() : ["(", y(), ")"], "expressions")));
              case "NGEmptyExpression":
                return "";
              case "NGQuotedExpression":
                return [T.prefix, ": ", T.value.trim()];
              case "NGMicrosyntax":
                return A.map((j, M) => [M === 0 ? "" : x(j.getValue(), M, T) ? " " : [";", d], y()], "body");
              case "NGMicrosyntaxKey":
                return /^[$_a-z][\w$]*(?:-[$_a-z][\w$])*$/i.test(T.name) ? T.name : JSON.stringify(T.name);
              case "NGMicrosyntaxExpression":
                return [y("expression"), T.alias === null ? "" : [" as ", y("alias")]];
              case "NGMicrosyntaxKeyedExpression": {
                let j = A.getName(), M = A.getParentNode(), k = x(T, j, M) || (j === 1 && (T.key.name === "then" || T.key.name === "else") || j === 2 && T.key.name === "else" && M.body[j - 1].type === "NGMicrosyntaxKeyedExpression" && M.body[j - 1].key.name === "then") && M.body[0].type === "NGMicrosyntaxExpression";
                return [y("key"), k ? " " : ": ", y("expression")];
              }
              case "NGMicrosyntaxLet":
                return ["let ", y("key"), T.value === null ? "" : [" = ", y("value")]];
              case "NGMicrosyntaxAs":
                return [y("key"), " as ", y("alias")];
              default:
                throw new Error(`Unknown Angular node type: ${JSON.stringify(T.type)}.`);
            }
        }
        function x(A, D, y) {
          return A.type === "NGMicrosyntaxKeyedExpression" && A.key.name === "of" && D === 1 && y.body[0].type === "NGMicrosyntaxLet" && y.body[0].value === null;
        }
        function C(A) {
          return u(A.getValue(), (D) => {
            switch (D.type) {
              case void 0:
                return !1;
              case "CallExpression":
              case "OptionalCallExpression":
              case "AssignmentExpression":
                return !0;
            }
          });
        }
        m.exports = { printAngular: g };
      } }), Ec = ee({ "src/language-js/print/jsx.js"(l, m) {
        ne();
        var { printComments: i, printDanglingComments: d, printCommentsSeparately: p } = ur(), { builders: { line: u, hardline: o, softline: a, group: f, indent: g, conditionalGroup: x, fill: C, ifBreak: A, lineSuffixBoundary: D, join: y }, utils: { willBreak: T } } = Ut(), { getLast: j, getPreferredQuote: M } = yn(), { isJsxNode: k, rawText: L, isCallExpression: _, isStringLiteral: R, isBinaryish: O, hasComment: Q, CommentCheckFlags: v, hasNodeIgnoreComment: P } = In(), E = Yu(), { willPrintOwnComments: w } = ua(), c = (H) => H === "" || H === u || H === o || H === a;
        function F(H, ce, De) {
          let Be = H.getValue();
          if (Be.type === "JSXElement" && Te(Be))
            return [De("openingElement"), De("closingElement")];
          let Ke = Be.type === "JSXElement" ? De("openingElement") : De("openingFragment"), ze = Be.type === "JSXElement" ? De("closingElement") : De("closingFragment");
          if (Be.children.length === 1 && Be.children[0].type === "JSXExpressionContainer" && (Be.children[0].expression.type === "TemplateLiteral" || Be.children[0].expression.type === "TaggedTemplateExpression"))
            return [Ke, ...H.map(De, "children"), ze];
          Be.children = Be.children.map((N) => tt(N) ? { type: "JSXText", value: " ", raw: " " } : N);
          let Ct = Be.children.some(k), en = Be.children.filter((N) => N.type === "JSXExpressionContainer").length > 1, Gt = Be.type === "JSXElement" && Be.openingElement.attributes.length > 1, ft = T(Ke) || Ct || Gt || en, _t = H.getParentNode().rootMarker === "mdx", Fe = ce.singleQuote ? "{' '}" : '{" "}', Y = _t ? " " : A([Fe, a], " "), ke = Be.openingElement && Be.openingElement.name && Be.openingElement.name.name === "fbt", ue = S(H, ce, De, Y, ke), xe = Be.children.some((N) => we(N));
          for (let N = ue.length - 2; N >= 0; N--) {
            let Z = ue[N] === "" && ue[N + 1] === "", Ee = ue[N] === o && ue[N + 1] === "" && ue[N + 2] === o, he = (ue[N] === a || ue[N] === o) && ue[N + 1] === "" && ue[N + 2] === Y, qe = ue[N] === Y && ue[N + 1] === "" && (ue[N + 2] === a || ue[N + 2] === o), gt = ue[N] === Y && ue[N + 1] === "" && ue[N + 2] === Y, Ue = ue[N] === a && ue[N + 1] === "" && ue[N + 2] === o || ue[N] === o && ue[N + 1] === "" && ue[N + 2] === a;
            Ee && xe || Z || he || gt || Ue ? ue.splice(N, 2) : qe && ue.splice(N + 1, 2);
          }
          for (; ue.length > 0 && c(j(ue)); )
            ue.pop();
          for (; ue.length > 1 && c(ue[0]) && c(ue[1]); )
            ue.shift(), ue.shift();
          let nt = [];
          for (let [N, Z] of ue.entries()) {
            if (Z === Y) {
              if (N === 1 && ue[N - 1] === "") {
                if (ue.length === 2) {
                  nt.push(Fe);
                  continue;
                }
                nt.push([Fe, o]);
                continue;
              } else if (N === ue.length - 1) {
                nt.push(Fe);
                continue;
              } else if (ue[N - 1] === "" && ue[N - 2] === o) {
                nt.push(Fe);
                continue;
              }
            }
            nt.push(Z), T(Z) && (ft = !0);
          }
          let Ze = xe ? C(nt) : f(nt, { shouldBreak: !0 });
          if (_t)
            return Ze;
          let _e = f([Ke, g([o, Ze]), o, ze]);
          return ft ? _e : x([f([Ke, ...ue, ze]), _e]);
        }
        function S(H, ce, De, Be, Ke) {
          let ze = [];
          return H.each((Ct, en, Gt) => {
            let ft = Ct.getValue();
            if (ft.type === "JSXText") {
              let _t = L(ft);
              if (we(ft)) {
                let Fe = _t.split(Ne);
                if (Fe[0] === "") {
                  if (ze.push(""), Fe.shift(), /\n/.test(Fe[0])) {
                    let ke = Gt[en + 1];
                    ze.push(B(Ke, Fe[1], ft, ke));
                  } else
                    ze.push(Be);
                  Fe.shift();
                }
                let Y;
                if (j(Fe) === "" && (Fe.pop(), Y = Fe.pop()), Fe.length === 0)
                  return;
                for (let [ke, ue] of Fe.entries())
                  ke % 2 === 1 ? ze.push(u) : ze.push(ue);
                if (Y !== void 0)
                  if (/\n/.test(Y)) {
                    let ke = Gt[en + 1];
                    ze.push(B(Ke, j(ze), ft, ke));
                  } else
                    ze.push(Be);
                else {
                  let ke = Gt[en + 1];
                  ze.push(b(Ke, j(ze), ft, ke));
                }
              } else
                /\n/.test(_t) ? _t.match(/\n/g).length > 1 && ze.push("", o) : ze.push("", Be);
            } else {
              let _t = De();
              ze.push(_t);
              let Fe = Gt[en + 1];
              if (Fe && we(Fe)) {
                let Y = re(L(Fe)).split(Ne)[0];
                ze.push(b(Ke, Y, ft, Fe));
              } else
                ze.push(o);
            }
          }, "children"), ze;
        }
        function b(H, ce, De, Be) {
          return H ? "" : De.type === "JSXElement" && !De.closingElement || Be && Be.type === "JSXElement" && !Be.closingElement ? ce.length === 1 ? a : o : a;
        }
        function B(H, ce, De, Be) {
          return H ? o : ce.length === 1 ? De.type === "JSXElement" && !De.closingElement || Be && Be.type === "JSXElement" && !Be.closingElement ? o : a : o;
        }
        function I(H, ce, De) {
          let Be = H.getParentNode();
          if (!Be || { ArrayExpression: !0, JSXAttribute: !0, JSXElement: !0, JSXExpressionContainer: !0, JSXFragment: !0, ExpressionStatement: !0, CallExpression: !0, OptionalCallExpression: !0, ConditionalExpression: !0, JsExpressionRoot: !0 }[Be.type])
            return ce;
          let Ke = H.match(void 0, (Ct) => Ct.type === "ArrowFunctionExpression", _, (Ct) => Ct.type === "JSXExpressionContainer"), ze = E(H, De);
          return f([ze ? "" : A("("), g([a, ce]), a, ze ? "" : A(")")], { shouldBreak: Ke });
        }
        function $(H, ce, De) {
          let Be = H.getValue(), Ke = [];
          if (Ke.push(De("name")), Be.value) {
            let ze;
            if (R(Be.value)) {
              let Ct = L(Be.value).slice(1, -1).replace(/&apos;/g, "'").replace(/&quot;/g, '"'), { escaped: en, quote: Gt, regex: ft } = M(Ct, ce.jsxSingleQuote ? "'" : '"');
              Ct = Ct.replace(ft, en);
              let { leading: _t, trailing: Fe } = H.call(() => p(H, ce), "value");
              ze = [_t, Gt, Ct, Gt, Fe];
            } else
              ze = De("value");
            Ke.push("=", ze);
          }
          return Ke;
        }
        function G(H, ce, De) {
          let Be = H.getValue(), Ke = (ze, Ct) => ze.type === "JSXEmptyExpression" || !Q(ze) && (ze.type === "ArrayExpression" || ze.type === "ObjectExpression" || ze.type === "ArrowFunctionExpression" || ze.type === "AwaitExpression" && (Ke(ze.argument, ze) || ze.argument.type === "JSXElement") || _(ze) || ze.type === "FunctionExpression" || ze.type === "TemplateLiteral" || ze.type === "TaggedTemplateExpression" || ze.type === "DoExpression" || k(Ct) && (ze.type === "ConditionalExpression" || O(ze)));
          return Ke(Be.expression, H.getParentNode(0)) ? f(["{", De("expression"), D, "}"]) : f(["{", g([a, De("expression")]), a, D, "}"]);
        }
        function W(H, ce, De) {
          let Be = H.getValue(), Ke = Be.name && Q(Be.name) || Be.typeParameters && Q(Be.typeParameters);
          if (Be.selfClosing && Be.attributes.length === 0 && !Ke)
            return ["<", De("name"), De("typeParameters"), " />"];
          if (Be.attributes && Be.attributes.length === 1 && Be.attributes[0].value && R(Be.attributes[0].value) && !Be.attributes[0].value.value.includes(`
`) && !Ke && !Q(Be.attributes[0]))
            return f(["<", De("name"), De("typeParameters"), " ", ...H.map(De, "attributes"), Be.selfClosing ? " />" : ">"]);
          let ze = Be.attributes && Be.attributes.some((en) => en.value && R(en.value) && en.value.value.includes(`
`)), Ct = ce.singleAttributePerLine && Be.attributes.length > 1 ? o : u;
          return f(["<", De("name"), De("typeParameters"), g(H.map(() => [Ct, De()], "attributes")), ...J(Be, ce, Ke)], { shouldBreak: ze });
        }
        function J(H, ce, De) {
          return H.selfClosing ? [u, "/>"] : te(H, ce, De) ? [">"] : [a, ">"];
        }
        function te(H, ce, De) {
          let Be = H.attributes.length > 0 && Q(j(H.attributes), v.Trailing);
          return H.attributes.length === 0 && !De || (ce.bracketSameLine || ce.jsxBracketSameLine) && (!De || H.attributes.length > 0) && !Be;
        }
        function K(H, ce, De) {
          let Be = H.getValue(), Ke = [];
          Ke.push("</");
          let ze = De("name");
          return Q(Be.name, v.Leading | v.Line) ? Ke.push(g([o, ze]), o) : Q(Be.name, v.Leading | v.Block) ? Ke.push(" ", ze) : Ke.push(ze), Ke.push(">"), Ke;
        }
        function ie(H, ce) {
          let De = H.getValue(), Be = Q(De), Ke = Q(De, v.Line), ze = De.type === "JSXOpeningFragment";
          return [ze ? "<" : "</", g([Ke ? o : Be && !ze ? " " : "", d(H, ce, !0)]), Ke ? o : "", ">"];
        }
        function q(H, ce, De) {
          let Be = i(H, F(H, ce, De), ce);
          return I(H, Be, ce);
        }
        function U(H, ce) {
          let De = H.getValue(), Be = Q(De, v.Line);
          return [d(H, ce, !Be), Be ? o : ""];
        }
        function se(H, ce, De) {
          let Be = H.getValue();
          return ["{", H.call((Ke) => {
            let ze = ["...", De()], Ct = Ke.getValue();
            return !Q(Ct) || !w(Ke) ? ze : [g([a, i(Ke, ze, ce)]), a];
          }, Be.type === "JSXSpreadAttribute" ? "argument" : "expression"), "}"];
        }
        function ye(H, ce, De) {
          let Be = H.getValue();
          if (Be.type.startsWith("JSX"))
            switch (Be.type) {
              case "JSXAttribute":
                return $(H, ce, De);
              case "JSXIdentifier":
                return String(Be.name);
              case "JSXNamespacedName":
                return y(":", [De("namespace"), De("name")]);
              case "JSXMemberExpression":
                return y(".", [De("object"), De("property")]);
              case "JSXSpreadAttribute":
                return se(H, ce, De);
              case "JSXSpreadChild":
                return se(H, ce, De);
              case "JSXExpressionContainer":
                return G(H, ce, De);
              case "JSXFragment":
              case "JSXElement":
                return q(H, ce, De);
              case "JSXOpeningElement":
                return W(H, ce, De);
              case "JSXClosingElement":
                return K(H, ce, De);
              case "JSXOpeningFragment":
              case "JSXClosingFragment":
                return ie(H, ce);
              case "JSXEmptyExpression":
                return U(H, ce);
              case "JSXText":
                throw new Error("JSXText should be handled by JSXElement");
              default:
                throw new Error(`Unknown JSX node type: ${JSON.stringify(Be.type)}.`);
            }
        }
        var le = ` 
\r	`, Ne = new RegExp("([" + le + "]+)"), X = new RegExp("[^" + le + "]"), re = (H) => H.replace(new RegExp("(?:^" + Ne.source + "|" + Ne.source + "$)"), "");
        function Te(H) {
          if (H.children.length === 0)
            return !0;
          if (H.children.length > 1)
            return !1;
          let ce = H.children[0];
          return ce.type === "JSXText" && !we(ce);
        }
        function we(H) {
          return H.type === "JSXText" && (X.test(L(H)) || !/\n/.test(L(H)));
        }
        function tt(H) {
          return H.type === "JSXExpressionContainer" && R(H.expression) && H.expression.value === " " && !Q(H.expression);
        }
        function oe(H) {
          let ce = H.getValue(), De = H.getParentNode();
          if (!De || !ce || !k(ce) || !k(De))
            return !1;
          let Be = De.children.indexOf(ce), Ke = null;
          for (let ze = Be; ze > 0; ze--) {
            let Ct = De.children[ze - 1];
            if (!(Ct.type === "JSXText" && !we(Ct))) {
              Ke = Ct;
              break;
            }
          }
          return Ke && Ke.type === "JSXExpressionContainer" && Ke.expression.type === "JSXEmptyExpression" && P(Ke.expression);
        }
        m.exports = { hasJsxIgnoreComment: oe, printJsx: ye };
      } }), zr = ee({ "src/language-js/print/misc.js"(l, m) {
        ne();
        var { isNonEmptyArray: i } = yn(), { builders: { indent: d, join: p, line: u } } = Ut(), { isFlowAnnotationComment: o } = In();
        function a(j) {
          let M = j.getValue();
          return !M.optional || M.type === "Identifier" && M === j.getParentNode().key ? "" : M.type === "OptionalCallExpression" || M.type === "OptionalMemberExpression" && M.computed ? "?." : "?";
        }
        function f(j) {
          return j.getValue().definite || j.match(void 0, (M, k) => k === "id" && M.type === "VariableDeclarator" && M.definite) ? "!" : "";
        }
        function g(j, M, k) {
          let L = j.getValue();
          return L.typeArguments ? k("typeArguments") : L.typeParameters ? k("typeParameters") : "";
        }
        function x(j, M, k) {
          let L = j.getValue();
          if (!L.typeAnnotation)
            return "";
          let _ = j.getParentNode(), R = _.type === "DeclareFunction" && _.id === L;
          return o(M.originalText, L.typeAnnotation) ? [" /*: ", k("typeAnnotation"), " */"] : [R ? "" : ": ", k("typeAnnotation")];
        }
        function C(j, M, k) {
          return ["::", k("callee")];
        }
        function A(j, M, k) {
          let L = j.getValue();
          return i(L.modifiers) ? [p(" ", j.map(k, "modifiers")), " "] : "";
        }
        function D(j, M, k) {
          return j.type === "EmptyStatement" ? ";" : j.type === "BlockStatement" || k ? [" ", M] : d([u, M]);
        }
        function y(j, M, k) {
          return ["...", k("argument"), x(j, M, k)];
        }
        function T(j, M) {
          let k = j.slice(1, -1);
          if (k.includes('"') || k.includes("'"))
            return j;
          let L = M.singleQuote ? "'" : '"';
          return L + k + L;
        }
        m.exports = { printOptionalToken: a, printDefiniteToken: f, printFunctionTypeParameters: g, printBindExpressionCallee: C, printTypeScriptModifiers: A, printTypeAnnotation: x, printRestSpread: y, adjustClause: D, printDirective: T };
      } }), iu = ee({ "src/language-js/print/array.js"(l, m) {
        ne();
        var { printDanglingComments: i } = ur(), { builders: { line: d, softline: p, hardline: u, group: o, indent: a, ifBreak: f, fill: g } } = Ut(), { getLast: x, hasNewline: C } = yn(), { shouldPrintComma: A, hasComment: D, CommentCheckFlags: y, isNextLineEmpty: T, isNumericLiteral: j, isSignedNumericLiteral: M } = In(), { locStart: k } = Nr(), { printOptionalToken: L, printTypeAnnotation: _ } = zr();
        function R(P, E, w) {
          let c = P.getValue(), F = [], S = c.type === "TupleExpression" ? "#[" : "[", b = "]";
          if (c.elements.length === 0)
            D(c, y.Dangling) ? F.push(o([S, i(P, E), p, b])) : F.push(S, b);
          else {
            let B = x(c.elements), I = !(B && B.type === "RestElement"), $ = B === null, G = Symbol("array"), W = !E.__inJestEach && c.elements.length > 1 && c.elements.every((K, ie, q) => {
              let U = K && K.type;
              if (U !== "ArrayExpression" && U !== "ObjectExpression")
                return !1;
              let se = q[ie + 1];
              if (se && U !== se.type)
                return !1;
              let ye = U === "ArrayExpression" ? "elements" : "properties";
              return K[ye] && K[ye].length > 1;
            }), J = O(c, E), te = I ? $ ? "," : A(E) ? J ? f(",", "", { groupId: G }) : f(",") : "" : "";
            F.push(o([S, a([p, J ? v(P, E, w, te) : [Q(P, E, "elements", w), te], i(P, E, !0)]), p, b], { shouldBreak: W, id: G }));
          }
          return F.push(L(P), _(P, E, w)), F;
        }
        function O(P, E) {
          return P.elements.length > 1 && P.elements.every((w) => w && (j(w) || M(w) && !D(w.argument)) && !D(w, y.Trailing | y.Line, (c) => !C(E.originalText, k(c), { backwards: !0 })));
        }
        function Q(P, E, w, c) {
          let F = [], S = [];
          return P.each((b) => {
            F.push(S, o(c())), S = [",", d], b.getValue() && T(b.getValue(), E) && S.push(p);
          }, w), F;
        }
        function v(P, E, w, c) {
          let F = [];
          return P.each((S, b, B) => {
            let I = b === B.length - 1;
            F.push([w(), I ? c : ","]), I || F.push(T(S.getValue(), E) ? [u, u] : D(B[b + 1], y.Leading | y.Line) ? u : d);
          }, "elements"), g(F);
        }
        m.exports = { printArray: R, printArrayItems: Q, isConciselyPrintedArray: O };
      } }), Za = ee({ "src/language-js/print/call-arguments.js"(l, m) {
        ne();
        var { printDanglingComments: i } = ur(), { getLast: d, getPenultimate: p } = yn(), { getFunctionParameters: u, hasComment: o, CommentCheckFlags: a, isFunctionCompositionArgs: f, isJsxNode: g, isLongCurriedCallExpression: x, shouldPrintComma: C, getCallArguments: A, iterateCallArgumentsPath: D, isNextLineEmpty: y, isCallExpression: T, isStringLiteral: j, isObjectProperty: M, isTSTypeExpression: k } = In(), { builders: { line: L, hardline: _, softline: R, group: O, indent: Q, conditionalGroup: v, ifBreak: P, breakParent: E }, utils: { willBreak: w } } = Ut(), { ArgExpansionBailout: c } = Pu(), { isConciselyPrintedArray: F } = iu();
        function S(J, te, K) {
          let ie = J.getValue(), q = ie.type === "ImportExpression", U = A(ie);
          if (U.length === 0)
            return ["(", i(J, te, !0), ")"];
          if ($(U))
            return ["(", K(["arguments", 0]), ", ", K(["arguments", 1]), ")"];
          let se = !1, ye = !1, le = U.length - 1, Ne = [];
          D(J, (oe, H) => {
            let ce = oe.getNode(), De = [K()];
            H === le || (y(ce, te) ? (H === 0 && (ye = !0), se = !0, De.push(",", _, _)) : De.push(",", L)), Ne.push(De);
          });
          let X = !(q || ie.callee && ie.callee.type === "Import") && C(te, "all") ? "," : "";
          function re() {
            return O(["(", Q([L, ...Ne]), X, L, ")"], { shouldBreak: !0 });
          }
          if (se || J.getParentNode().type !== "Decorator" && f(U))
            return re();
          let Te = I(U), we = B(U, te);
          if (Te || we) {
            if (Te ? Ne.slice(1).some(w) : Ne.slice(0, -1).some(w))
              return re();
            let oe = [];
            try {
              J.try(() => {
                D(J, (H, ce) => {
                  Te && ce === 0 && (oe = [[K([], { expandFirstArg: !0 }), Ne.length > 1 ? "," : "", ye ? _ : L, ye ? _ : ""], ...Ne.slice(1)]), we && ce === le && (oe = [...Ne.slice(0, -1), K([], { expandLastArg: !0 })]);
                });
              });
            } catch (H) {
              if (H instanceof c)
                return re();
              throw H;
            }
            return [Ne.some(w) ? E : "", v([["(", ...oe, ")"], Te ? ["(", O(oe[0], { shouldBreak: !0 }), ...oe.slice(1), ")"] : ["(", ...Ne.slice(0, -1), O(d(oe), { shouldBreak: !0 }), ")"], re()])];
          }
          let tt = ["(", Q([R, ...Ne]), P(X), R, ")"];
          return x(J) ? tt : O(tt, { shouldBreak: Ne.some(w) || se });
        }
        function b(J) {
          let te = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !1;
          return J.type === "ObjectExpression" && (J.properties.length > 0 || o(J)) || J.type === "ArrayExpression" && (J.elements.length > 0 || o(J)) || J.type === "TSTypeAssertion" && b(J.expression) || k(J) && b(J.expression) || J.type === "FunctionExpression" || J.type === "ArrowFunctionExpression" && (!J.returnType || !J.returnType.typeAnnotation || J.returnType.typeAnnotation.type !== "TSTypeReference" || G(J.body)) && (J.body.type === "BlockStatement" || J.body.type === "ArrowFunctionExpression" && b(J.body, !0) || J.body.type === "ObjectExpression" || J.body.type === "ArrayExpression" || !te && (T(J.body) || J.body.type === "ConditionalExpression") || g(J.body)) || J.type === "DoExpression" || J.type === "ModuleExpression";
        }
        function B(J, te) {
          let K = d(J), ie = p(J);
          return !o(K, a.Leading) && !o(K, a.Trailing) && b(K) && (!ie || ie.type !== K.type) && (J.length !== 2 || ie.type !== "ArrowFunctionExpression" || K.type !== "ArrayExpression") && !(J.length > 1 && K.type === "ArrayExpression" && F(K, te));
        }
        function I(J) {
          if (J.length !== 2)
            return !1;
          let [te, K] = J;
          return te.type === "ModuleExpression" && W(K) ? !0 : !o(te) && (te.type === "FunctionExpression" || te.type === "ArrowFunctionExpression" && te.body.type === "BlockStatement") && K.type !== "FunctionExpression" && K.type !== "ArrowFunctionExpression" && K.type !== "ConditionalExpression" && !b(K);
        }
        function $(J) {
          return J.length === 2 && J[0].type === "ArrowFunctionExpression" && u(J[0]).length === 0 && J[0].body.type === "BlockStatement" && J[1].type === "ArrayExpression" && !J.some((te) => o(te));
        }
        function G(J) {
          return J.type === "BlockStatement" && (J.body.some((te) => te.type !== "EmptyStatement") || o(J, a.Dangling));
        }
        function W(J) {
          return J.type === "ObjectExpression" && J.properties.length === 1 && M(J.properties[0]) && J.properties[0].key.type === "Identifier" && J.properties[0].key.name === "type" && j(J.properties[0].value) && J.properties[0].value.value === "module";
        }
        m.exports = S;
      } }), yi = ee({ "src/language-js/print/member.js"(l, m) {
        ne();
        var { builders: { softline: i, group: d, indent: p, label: u } } = Ut(), { isNumericLiteral: o, isMemberExpression: a, isCallExpression: f } = In(), { printOptionalToken: g } = zr();
        function x(A, D, y) {
          let T = A.getValue(), j = A.getParentNode(), M, k = 0;
          do
            M = A.getParentNode(k), k++;
          while (M && (a(M) || M.type === "TSNonNullExpression"));
          let L = y("object"), _ = C(A, D, y), R = M && (M.type === "NewExpression" || M.type === "BindExpression" || M.type === "AssignmentExpression" && M.left.type !== "Identifier") || T.computed || T.object.type === "Identifier" && T.property.type === "Identifier" && !a(j) || (j.type === "AssignmentExpression" || j.type === "VariableDeclarator") && (f(T.object) && T.object.arguments.length > 0 || T.object.type === "TSNonNullExpression" && f(T.object.expression) && T.object.expression.arguments.length > 0 || L.label === "member-chain");
          return u(L.label === "member-chain" ? "member-chain" : "member", [L, R ? _ : d(p([i, _]))]);
        }
        function C(A, D, y) {
          let T = y("property"), j = A.getValue(), M = g(A);
          return j.computed ? !j.property || o(j.property) ? [M, "[", T, "]"] : d([M, "[", p([i, T]), i, "]"]) : [M, ".", T];
        }
        m.exports = { printMemberExpression: x, printMemberLookup: C };
      } }), Su = ee({ "src/language-js/print/member-chain.js"(l, m) {
        ne();
        var { printComments: i } = ur(), { getLast: d, isNextLineEmptyAfterIndex: p, getNextNonSpaceNonCommentCharacterIndex: u } = yn(), o = Yu(), { isCallExpression: a, isMemberExpression: f, isFunctionOrArrowExpression: g, isLongCurriedCallExpression: x, isMemberish: C, isNumericLiteral: A, isSimpleCallArgument: D, hasComment: y, CommentCheckFlags: T, isNextLineEmpty: j } = In(), { locEnd: M } = Nr(), { builders: { join: k, hardline: L, group: _, indent: R, conditionalGroup: O, breakParent: Q, label: v }, utils: { willBreak: P } } = Ut(), E = Za(), { printMemberLookup: w } = yi(), { printOptionalToken: c, printFunctionTypeParameters: F, printBindExpressionCallee: S } = zr();
        function b(B, I, $) {
          let G = B.getParentNode(), W = !G || G.type === "ExpressionStatement", J = [];
          function te(ft) {
            let { originalText: _t } = I, Fe = u(_t, ft, M);
            return _t.charAt(Fe) === ")" ? Fe !== !1 && p(_t, Fe + 1) : j(ft, I);
          }
          function K(ft) {
            let _t = ft.getValue();
            a(_t) && (C(_t.callee) || a(_t.callee)) ? (J.unshift({ node: _t, printed: [i(ft, [c(ft), F(ft, I, $), E(ft, I, $)], I), te(_t) ? L : ""] }), ft.call((Fe) => K(Fe), "callee")) : C(_t) ? (J.unshift({ node: _t, needsParens: o(ft, I), printed: i(ft, f(_t) ? w(ft, I, $) : S(ft, I, $), I) }), ft.call((Fe) => K(Fe), "object")) : _t.type === "TSNonNullExpression" ? (J.unshift({ node: _t, printed: i(ft, "!", I) }), ft.call((Fe) => K(Fe), "expression")) : J.unshift({ node: _t, printed: $() });
          }
          let ie = B.getValue();
          J.unshift({ node: ie, printed: [c(B), F(B, I, $), E(B, I, $)] }), ie.callee && B.call((ft) => K(ft), "callee");
          let q = [], U = [J[0]], se = 1;
          for (; se < J.length && (J[se].node.type === "TSNonNullExpression" || a(J[se].node) || f(J[se].node) && J[se].node.computed && A(J[se].node.property)); ++se)
            U.push(J[se]);
          if (!a(J[0].node))
            for (; se + 1 < J.length && C(J[se].node) && C(J[se + 1].node); ++se)
              U.push(J[se]);
          q.push(U), U = [];
          let ye = !1;
          for (; se < J.length; ++se) {
            if (ye && C(J[se].node)) {
              if (J[se].node.computed && A(J[se].node.property)) {
                U.push(J[se]);
                continue;
              }
              q.push(U), U = [], ye = !1;
            }
            (a(J[se].node) || J[se].node.type === "ImportExpression") && (ye = !0), U.push(J[se]), y(J[se].node, T.Trailing) && (q.push(U), U = [], ye = !1);
          }
          U.length > 0 && q.push(U);
          function le(ft) {
            return /^[A-Z]|^[$_]+$/.test(ft);
          }
          function Ne(ft) {
            return ft.length <= I.tabWidth;
          }
          function X(ft) {
            let _t = ft[1].length > 0 && ft[1][0].node.computed;
            if (ft[0].length === 1) {
              let Y = ft[0][0].node;
              return Y.type === "ThisExpression" || Y.type === "Identifier" && (le(Y.name) || W && Ne(Y.name) || _t);
            }
            let Fe = d(ft[0]).node;
            return f(Fe) && Fe.property.type === "Identifier" && (le(Fe.property.name) || _t);
          }
          let re = q.length >= 2 && !y(q[1][0].node) && X(q);
          function Te(ft) {
            let _t = ft.map((Fe) => Fe.printed);
            return ft.length > 0 && d(ft).needsParens ? ["(", ..._t, ")"] : _t;
          }
          function we(ft) {
            return ft.length === 0 ? "" : R(_([L, k(L, ft.map(Te))]));
          }
          let tt = q.map(Te), oe = tt, H = re ? 3 : 2, ce = q.flat(), De = ce.slice(1, -1).some((ft) => y(ft.node, T.Leading)) || ce.slice(0, -1).some((ft) => y(ft.node, T.Trailing)) || q[H] && y(q[H][0].node, T.Leading);
          if (q.length <= H && !De)
            return x(B) ? oe : _(oe);
          let Be = d(q[re ? 1 : 0]).node, Ke = !a(Be) && te(Be), ze = [Te(q[0]), re ? q.slice(1, 2).map(Te) : "", Ke ? L : "", we(q.slice(re ? 2 : 1))], Ct = J.map((ft) => {
            let { node: _t } = ft;
            return _t;
          }).filter(a);
          function en() {
            let ft = d(d(q)).node, _t = d(tt);
            return a(ft) && P(_t) && Ct.slice(0, -1).some((Fe) => Fe.arguments.some(g));
          }
          let Gt;
          return De || Ct.length > 2 && Ct.some((ft) => !ft.arguments.every((_t) => D(_t, 0))) || tt.slice(0, -1).some(P) || en() ? Gt = _(ze) : Gt = [P(oe) || Ke ? Q : "", O([oe, ze])], v("member-chain", Gt);
        }
        m.exports = b;
      } }), Ji = ee({ "src/language-js/print/call-expression.js"(l, m) {
        ne();
        var { builders: { join: i, group: d } } = Ut(), p = Yu(), { getCallArguments: u, hasFlowAnnotationComment: o, isCallExpression: a, isMemberish: f, isStringLiteral: g, isTemplateOnItsOwnLine: x, isTestCall: C, iterateCallArgumentsPath: A } = In(), D = Su(), y = Za(), { printOptionalToken: T, printFunctionTypeParameters: j } = zr();
        function M(L, _, R) {
          let O = L.getValue(), Q = L.getParentNode(), v = O.type === "NewExpression", P = O.type === "ImportExpression", E = T(L), w = u(O);
          if (w.length > 0 && (!P && !v && k(O, Q) || w.length === 1 && x(w[0], _.originalText) || !v && C(O, Q))) {
            let S = [];
            return A(L, () => {
              S.push(R());
            }), [v ? "new " : "", R("callee"), E, j(L, _, R), "(", i(", ", S), ")"];
          }
          let c = (_.parser === "babel" || _.parser === "babel-flow") && O.callee && O.callee.type === "Identifier" && o(O.callee.trailingComments);
          if (c && (O.callee.trailingComments[0].printed = !0), !P && !v && f(O.callee) && !L.call((S) => p(S, _), "callee"))
            return D(L, _, R);
          let F = [v ? "new " : "", P ? "import" : R("callee"), E, c ? `/*:: ${O.callee.trailingComments[0].value.slice(2).trim()} */` : "", j(L, _, R), y(L, _, R)];
          return P || a(O.callee) ? d(F) : F;
        }
        function k(L, _) {
          if (L.callee.type !== "Identifier")
            return !1;
          if (L.callee.name === "require")
            return !0;
          if (L.callee.name === "define") {
            let R = u(L);
            return _.type === "ExpressionStatement" && (R.length === 1 || R.length === 2 && R[0].type === "ArrayExpression" || R.length === 3 && g(R[0]) && R[1].type === "ArrayExpression");
          }
          return !1;
        }
        m.exports = { printCallExpression: M };
      } }), Qr = ee({ "src/language-js/print/assignment.js"(l, m) {
        ne();
        var { isNonEmptyArray: i, getStringWidth: d } = yn(), { builders: { line: p, group: u, indent: o, indentIfBreak: a, lineSuffixBoundary: f }, utils: { cleanDoc: g, willBreak: x, canBreak: C } } = Ut(), { hasLeadingOwnLineComment: A, isBinaryish: D, isStringLiteral: y, isLiteral: T, isNumericLiteral: j, isCallExpression: M, isMemberExpression: k, getCallArguments: L, rawText: _, hasComment: R, isSignedNumericLiteral: O, isObjectProperty: Q } = In(), { shouldInlineLogicalExpression: v } = oa(), { printCallExpression: P } = Ji();
        function E(X, re, Te, we, tt, oe) {
          let H = F(X, re, Te, we, oe), ce = Te(oe, { assignmentLayout: H });
          switch (H) {
            case "break-after-operator":
              return u([u(we), tt, u(o([p, ce]))]);
            case "never-break-after-operator":
              return u([u(we), tt, " ", ce]);
            case "fluid": {
              let De = Symbol("assignment");
              return u([u(we), tt, u(o(p), { id: De }), f, a(ce, { groupId: De })]);
            }
            case "break-lhs":
              return u([we, tt, " ", u(ce)]);
            case "chain":
              return [u(we), tt, p, ce];
            case "chain-tail":
              return [u(we), tt, o([p, ce])];
            case "chain-tail-arrow-chain":
              return [u(we), tt, ce];
            case "only-left":
              return we;
          }
        }
        function w(X, re, Te) {
          let we = X.getValue();
          return E(X, re, Te, Te("left"), [" ", we.operator], "right");
        }
        function c(X, re, Te) {
          return E(X, re, Te, Te("id"), " =", "init");
        }
        function F(X, re, Te, we, tt) {
          let oe = X.getValue(), H = oe[tt];
          if (!H)
            return "only-left";
          let ce = !B(H);
          if (X.match(B, I, (Be) => !ce || Be.type !== "ExpressionStatement" && Be.type !== "VariableDeclaration"))
            return ce ? H.type === "ArrowFunctionExpression" && H.body.type === "ArrowFunctionExpression" ? "chain-tail-arrow-chain" : "chain-tail" : "chain";
          if (!ce && B(H.right) || A(re.originalText, H))
            return "break-after-operator";
          if (H.type === "CallExpression" && H.callee.name === "require" || re.parser === "json5" || re.parser === "json")
            return "never-break-after-operator";
          if (b(oe) || $(oe) || J(oe) || te(oe) && C(we))
            return "break-lhs";
          let De = ye(oe, we, re);
          return X.call(() => S(X, re, Te, De), tt) ? "break-after-operator" : De || H.type === "TemplateLiteral" || H.type === "TaggedTemplateExpression" || H.type === "BooleanLiteral" || j(H) || H.type === "ClassExpression" ? "never-break-after-operator" : "fluid";
        }
        function S(X, re, Te, we) {
          let tt = X.getValue();
          if (D(tt) && !v(tt))
            return !0;
          switch (tt.type) {
            case "StringLiteralTypeAnnotation":
            case "SequenceExpression":
              return !0;
            case "ConditionalExpression": {
              let { test: ce } = tt;
              return D(ce) && !v(ce);
            }
            case "ClassExpression":
              return i(tt.decorators);
          }
          if (we)
            return !1;
          let oe = tt, H = [];
          for (; ; )
            if (oe.type === "UnaryExpression")
              oe = oe.argument, H.push("argument");
            else if (oe.type === "TSNonNullExpression")
              oe = oe.expression, H.push("expression");
            else
              break;
          return !!(y(oe) || X.call(() => q(X, re, Te), ...H));
        }
        function b(X) {
          if (I(X)) {
            let re = X.left || X.id;
            return re.type === "ObjectPattern" && re.properties.length > 2 && re.properties.some((Te) => Q(Te) && (!Te.shorthand || Te.value && Te.value.type === "AssignmentPattern"));
          }
          return !1;
        }
        function B(X) {
          return X.type === "AssignmentExpression";
        }
        function I(X) {
          return B(X) || X.type === "VariableDeclarator";
        }
        function $(X) {
          let re = G(X);
          if (i(re)) {
            let Te = X.type === "TSTypeAliasDeclaration" ? "constraint" : "bound";
            if (re.length > 1 && re.some((we) => we[Te] || we.default))
              return !0;
          }
          return !1;
        }
        function G(X) {
          return W(X) && X.typeParameters && X.typeParameters.params ? X.typeParameters.params : null;
        }
        function W(X) {
          return X.type === "TSTypeAliasDeclaration" || X.type === "TypeAlias";
        }
        function J(X) {
          if (X.type !== "VariableDeclarator")
            return !1;
          let { typeAnnotation: re } = X.id;
          if (!re || !re.typeAnnotation)
            return !1;
          let Te = K(re.typeAnnotation);
          return i(Te) && Te.length > 1 && Te.some((we) => i(K(we)) || we.type === "TSConditionalType");
        }
        function te(X) {
          return X.type === "VariableDeclarator" && X.init && X.init.type === "ArrowFunctionExpression";
        }
        function K(X) {
          return ie(X) && X.typeParameters && X.typeParameters.params ? X.typeParameters.params : null;
        }
        function ie(X) {
          return X.type === "TSTypeReference" || X.type === "GenericTypeAnnotation";
        }
        function q(X, re, Te) {
          let we = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : !1, tt = X.getValue(), oe = () => q(X, re, Te, !0);
          if (tt.type === "TSNonNullExpression")
            return X.call(oe, "expression");
          if (M(tt)) {
            if (P(X, re, Te).label === "member-chain")
              return !1;
            let H = L(tt);
            return !(H.length === 0 || H.length === 1 && se(H[0], re)) || le(tt, Te) ? !1 : X.call(oe, "callee");
          }
          return k(tt) ? X.call(oe, "object") : we && (tt.type === "Identifier" || tt.type === "ThisExpression");
        }
        var U = 0.25;
        function se(X, re) {
          let { printWidth: Te } = re;
          if (R(X))
            return !1;
          let we = Te * U;
          if (X.type === "ThisExpression" || X.type === "Identifier" && X.name.length <= we || O(X) && !R(X.argument))
            return !0;
          let tt = X.type === "Literal" && "regex" in X && X.regex.pattern || X.type === "RegExpLiteral" && X.pattern;
          return tt ? tt.length <= we : y(X) ? _(X).length <= we : X.type === "TemplateLiteral" ? X.expressions.length === 0 && X.quasis[0].value.raw.length <= we && !X.quasis[0].value.raw.includes(`
`) : T(X);
        }
        function ye(X, re, Te) {
          if (!Q(X))
            return !1;
          re = g(re);
          let we = 3;
          return typeof re == "string" && d(re) < Te.tabWidth + we;
        }
        function le(X, re) {
          let Te = Ne(X);
          if (i(Te)) {
            if (Te.length > 1)
              return !0;
            if (Te.length === 1) {
              let tt = Te[0];
              if (tt.type === "TSUnionType" || tt.type === "UnionTypeAnnotation" || tt.type === "TSIntersectionType" || tt.type === "IntersectionTypeAnnotation" || tt.type === "TSTypeLiteral" || tt.type === "ObjectTypeAnnotation")
                return !0;
            }
            let we = X.typeParameters ? "typeParameters" : "typeArguments";
            if (x(re(we)))
              return !0;
          }
          return !1;
        }
        function Ne(X) {
          return X.typeParameters && X.typeParameters.params || X.typeArguments && X.typeArguments.params;
        }
        m.exports = { printVariableDeclarator: c, printAssignmentExpression: w, printAssignment: E, isArrowFunctionVariableDeclarator: te };
      } }), qi = ee({ "src/language-js/print/function-parameters.js"(l, m) {
        ne();
        var { getNextNonSpaceNonCommentCharacter: i } = yn(), { printDanglingComments: d } = ur(), { builders: { line: p, hardline: u, softline: o, group: a, indent: f, ifBreak: g }, utils: { removeLines: x, willBreak: C } } = Ut(), { getFunctionParameters: A, iterateFunctionParametersPath: D, isSimpleType: y, isTestCall: T, isTypeAnnotationAFunction: j, isObjectType: M, isObjectTypePropertyAFunction: k, hasRestParameter: L, shouldPrintComma: _, hasComment: R, isNextLineEmpty: O } = In(), { locEnd: Q } = Nr(), { ArgExpansionBailout: v } = Pu(), { printFunctionTypeParameters: P } = zr();
        function E(S, b, B, I, $) {
          let G = S.getValue(), W = A(G), J = $ ? P(S, B, b) : "";
          if (W.length === 0)
            return [J, "(", d(S, B, !0, (se) => i(B.originalText, se, Q) === ")"), ")"];
          let te = S.getParentNode(), K = T(te), ie = w(G), q = [];
          if (D(S, (se, ye) => {
            let le = ye === W.length - 1;
            le && G.rest && q.push("..."), q.push(b()), !le && (q.push(","), K || ie ? q.push(" ") : O(W[ye], B) ? q.push(u, u) : q.push(p));
          }), I) {
            if (C(J) || C(q))
              throw new v();
            return a([x(J), "(", x(q), ")"]);
          }
          let U = W.every((se) => !se.decorators);
          return ie && U ? [J, "(", ...q, ")"] : K ? [J, "(", ...q, ")"] : (k(te) || j(te) || te.type === "TypeAlias" || te.type === "UnionTypeAnnotation" || te.type === "TSUnionType" || te.type === "IntersectionTypeAnnotation" || te.type === "FunctionTypeAnnotation" && te.returnType === G) && W.length === 1 && W[0].name === null && G.this !== W[0] && W[0].typeAnnotation && G.typeParameters === null && y(W[0].typeAnnotation) && !G.rest ? B.arrowParens === "always" ? ["(", ...q, ")"] : q : [J, "(", f([o, ...q]), g(!L(G) && _(B, "all") ? "," : ""), o, ")"];
        }
        function w(S) {
          if (!S)
            return !1;
          let b = A(S);
          if (b.length !== 1)
            return !1;
          let [B] = b;
          return !R(B) && (B.type === "ObjectPattern" || B.type === "ArrayPattern" || B.type === "Identifier" && B.typeAnnotation && (B.typeAnnotation.type === "TypeAnnotation" || B.typeAnnotation.type === "TSTypeAnnotation") && M(B.typeAnnotation.typeAnnotation) || B.type === "FunctionTypeParam" && M(B.typeAnnotation) || B.type === "AssignmentPattern" && (B.left.type === "ObjectPattern" || B.left.type === "ArrayPattern") && (B.right.type === "Identifier" || B.right.type === "ObjectExpression" && B.right.properties.length === 0 || B.right.type === "ArrayExpression" && B.right.elements.length === 0));
        }
        function c(S) {
          let b;
          return S.returnType ? (b = S.returnType, b.typeAnnotation && (b = b.typeAnnotation)) : S.typeAnnotation && (b = S.typeAnnotation), b;
        }
        function F(S, b) {
          let B = c(S);
          if (!B)
            return !1;
          let I = S.typeParameters && S.typeParameters.params;
          if (I) {
            if (I.length > 1)
              return !1;
            if (I.length === 1) {
              let $ = I[0];
              if ($.constraint || $.default)
                return !1;
            }
          }
          return A(S).length === 1 && (M(B) || C(b));
        }
        m.exports = { printFunctionParameters: E, shouldHugFunctionParameters: w, shouldGroupFunctionParameters: F };
      } }), aa = ee({ "src/language-js/print/type-annotation.js"(l, m) {
        ne();
        var { printComments: i, printDanglingComments: d } = ur(), { isNonEmptyArray: p } = yn(), { builders: { group: u, join: o, line: a, softline: f, indent: g, align: x, ifBreak: C } } = Ut(), A = Yu(), { locStart: D } = Nr(), { isSimpleType: y, isObjectType: T, hasLeadingOwnLineComment: j, isObjectTypePropertyAFunction: M, shouldPrintComma: k } = In(), { printAssignment: L } = Qr(), { printFunctionParameters: _, shouldGroupFunctionParameters: R } = qi(), { printArrayItems: O } = iu();
        function Q(B) {
          if (y(B) || T(B))
            return !0;
          if (B.type === "UnionTypeAnnotation" || B.type === "TSUnionType") {
            let I = B.types.filter((G) => G.type === "VoidTypeAnnotation" || G.type === "TSVoidKeyword" || G.type === "NullLiteralTypeAnnotation" || G.type === "TSNullKeyword").length, $ = B.types.some((G) => G.type === "ObjectTypeAnnotation" || G.type === "TSTypeLiteral" || G.type === "GenericTypeAnnotation" || G.type === "TSTypeReference");
            if (B.types.length - 1 === I && $)
              return !0;
          }
          return !1;
        }
        function v(B, I, $) {
          let G = I.semi ? ";" : "", W = B.getValue(), J = [];
          return J.push("opaque type ", $("id"), $("typeParameters")), W.supertype && J.push(": ", $("supertype")), W.impltype && J.push(" = ", $("impltype")), J.push(G), J;
        }
        function P(B, I, $) {
          let G = I.semi ? ";" : "", W = B.getValue(), J = [];
          W.declare && J.push("declare "), J.push("type ", $("id"), $("typeParameters"));
          let te = W.type === "TSTypeAliasDeclaration" ? "typeAnnotation" : "right";
          return [L(B, I, $, J, " =", te), G];
        }
        function E(B, I, $) {
          let G = B.getValue(), W = B.map($, "types"), J = [], te = !1;
          for (let K = 0; K < W.length; ++K)
            K === 0 ? J.push(W[K]) : T(G.types[K - 1]) && T(G.types[K]) ? J.push([" & ", te ? g(W[K]) : W[K]]) : !T(G.types[K - 1]) && !T(G.types[K]) ? J.push(g([" &", a, W[K]])) : (K > 1 && (te = !0), J.push(" & ", K > 1 ? g(W[K]) : W[K]));
          return u(J);
        }
        function w(B, I, $) {
          let G = B.getValue(), W = B.getParentNode(), J = W.type !== "TypeParameterInstantiation" && W.type !== "TSTypeParameterInstantiation" && W.type !== "GenericTypeAnnotation" && W.type !== "TSTypeReference" && W.type !== "TSTypeAssertion" && W.type !== "TupleTypeAnnotation" && W.type !== "TSTupleType" && !(W.type === "FunctionTypeParam" && !W.name && B.getParentNode(1).this !== W) && !((W.type === "TypeAlias" || W.type === "VariableDeclarator" || W.type === "TSTypeAliasDeclaration") && j(I.originalText, G)), te = Q(G), K = B.map((U) => {
            let se = $();
            return te || (se = x(2, se)), i(U, se, I);
          }, "types");
          if (te)
            return o(" | ", K);
          let ie = J && !j(I.originalText, G), q = [C([ie ? a : "", "| "]), o([a, "| "], K)];
          return A(B, I) ? u([g(q), f]) : W.type === "TupleTypeAnnotation" && W.types.length > 1 || W.type === "TSTupleType" && W.elementTypes.length > 1 ? u([g([C(["(", f]), q]), f, C(")")]) : u(J ? g(q) : q);
        }
        function c(B, I, $) {
          let G = B.getValue(), W = [], J = B.getParentNode(0), te = B.getParentNode(1), K = B.getParentNode(2), ie = G.type === "TSFunctionType" || !((J.type === "ObjectTypeProperty" || J.type === "ObjectTypeInternalSlot") && !J.variance && !J.optional && D(J) === D(G) || J.type === "ObjectTypeCallProperty" || K && K.type === "DeclareFunction"), q = ie && (J.type === "TypeAnnotation" || J.type === "TSTypeAnnotation"), U = q && ie && (J.type === "TypeAnnotation" || J.type === "TSTypeAnnotation") && te.type === "ArrowFunctionExpression";
          M(J) && (ie = !0, q = !0), U && W.push("(");
          let se = _(B, $, I, !1, !0), ye = G.returnType || G.predicate || G.typeAnnotation ? [ie ? " => " : ": ", $("returnType"), $("predicate"), $("typeAnnotation")] : "", le = R(G, ye);
          return W.push(le ? u(se) : se), ye && W.push(ye), U && W.push(")"), u(W);
        }
        function F(B, I, $) {
          let G = B.getValue(), W = G.type === "TSTupleType" ? "elementTypes" : "types", J = G[W], te = p(J), K = te ? f : "";
          return u(["[", g([K, O(B, I, W, $)]), C(te && k(I, "all") ? "," : ""), d(B, I, !0), K, "]"]);
        }
        function S(B, I, $) {
          let G = B.getValue(), W = G.type === "OptionalIndexedAccessType" && G.optional ? "?.[" : "[";
          return [$("objectType"), W, $("indexType"), "]"];
        }
        function b(B, I, $) {
          let G = B.getValue();
          return [G.postfix ? "" : $, I("typeAnnotation"), G.postfix ? $ : ""];
        }
        m.exports = { printOpaqueType: v, printTypeAlias: P, printIntersectionType: E, printUnionType: w, printFunctionType: c, printTupleType: F, printIndexedAccessType: S, shouldHugType: Q, printJSDocType: b };
      } }), sa = ee({ "src/language-js/print/type-parameters.js"(l, m) {
        ne();
        var { printDanglingComments: i } = ur(), { builders: { join: d, line: p, hardline: u, softline: o, group: a, indent: f, ifBreak: g } } = Ut(), { isTestCall: x, hasComment: C, CommentCheckFlags: A, isTSXFile: D, shouldPrintComma: y, getFunctionParameters: T, isObjectType: j, getTypeScriptMappedTypeModifier: M } = In(), { createGroupIdMapper: k } = yn(), { shouldHugType: L } = aa(), { isArrowFunctionVariableDeclarator: _ } = Qr(), R = k("typeParameters");
        function O(P, E, w, c) {
          let F = P.getValue();
          if (!F[c])
            return "";
          if (!Array.isArray(F[c]))
            return w(c);
          let S = P.getNode(2), b = S && x(S), B = P.match(($) => !($[c].length === 1 && j($[c][0])), void 0, ($, G) => G === "typeAnnotation", ($) => $.type === "Identifier", _);
          if (F[c].length === 0 || !B && (b || F[c].length === 1 && (F[c][0].type === "NullableTypeAnnotation" || L(F[c][0]))))
            return ["<", d(", ", P.map(w, c)), Q(P, E), ">"];
          let I = F.type === "TSTypeParameterInstantiation" ? "" : T(F).length === 1 && D(E) && !F[c][0].constraint && P.getParentNode().type === "ArrowFunctionExpression" ? "," : y(E, "all") ? g(",") : "";
          return a(["<", f([o, d([",", p], P.map(w, c))]), I, o, ">"], { id: R(F) });
        }
        function Q(P, E) {
          let w = P.getValue();
          if (!C(w, A.Dangling))
            return "";
          let c = !C(w, A.Line), F = i(P, E, c);
          return c ? F : [F, u];
        }
        function v(P, E, w) {
          let c = P.getValue(), F = [c.type === "TSTypeParameter" && c.const ? "const " : ""], S = P.getParentNode();
          return S.type === "TSMappedType" ? (S.readonly && F.push(M(S.readonly, "readonly"), " "), F.push("[", w("name")), c.constraint && F.push(" in ", w("constraint")), S.nameType && F.push(" as ", P.callParent(() => w("nameType"))), F.push("]"), F) : (c.variance && F.push(w("variance")), c.in && F.push("in "), c.out && F.push("out "), F.push(w("name")), c.bound && F.push(": ", w("bound")), c.constraint && F.push(" extends ", w("constraint")), c.default && F.push(" = ", w("default")), F);
        }
        m.exports = { printTypeParameter: v, printTypeParameters: O, getTypeParametersGroupId: R };
      } }), Du = ee({ "src/language-js/print/property.js"(l, m) {
        ne();
        var { printComments: i } = ur(), { printString: d, printNumber: p } = yn(), { isNumericLiteral: u, isSimpleNumber: o, isStringLiteral: a, isStringPropSafeToUnquote: f, rawText: g } = In(), { printAssignment: x } = Qr(), C = /* @__PURE__ */ new WeakMap();
        function A(y, T, j) {
          let M = y.getNode();
          if (M.computed)
            return ["[", j("key"), "]"];
          let k = y.getParentNode(), { key: L } = M;
          if (T.quoteProps === "consistent" && !C.has(k)) {
            let _ = (k.properties || k.body || k.members).some((R) => !R.computed && R.key && a(R.key) && !f(R, T));
            C.set(k, _);
          }
          if ((L.type === "Identifier" || u(L) && o(p(g(L))) && String(L.value) === p(g(L)) && !(T.parser === "typescript" || T.parser === "babel-ts")) && (T.parser === "json" || T.quoteProps === "consistent" && C.get(k))) {
            let _ = d(JSON.stringify(L.type === "Identifier" ? L.name : L.value.toString()), T);
            return y.call((R) => i(R, _, T), "key");
          }
          return f(M, T) && (T.quoteProps === "as-needed" || T.quoteProps === "consistent" && !C.get(k)) ? y.call((_) => i(_, /^\d/.test(L.value) ? p(L.value) : L.value, T), "key") : j("key");
        }
        function D(y, T, j) {
          return y.getValue().shorthand ? j("value") : x(y, T, j, A(y, T, j), ":", "value");
        }
        m.exports = { printProperty: D, printPropertyKey: A };
      } }), Hu = ee({ "src/language-js/print/function.js"(l, m) {
        ne();
        var i = Iu(), { printDanglingComments: d, printCommentsSeparately: p } = ur(), u = sr(), { getNextNonSpaceNonCommentCharacterIndex: o } = yn(), { builders: { line: a, softline: f, group: g, indent: x, ifBreak: C, hardline: A, join: D, indentIfBreak: y }, utils: { removeLines: T, willBreak: j } } = Ut(), { ArgExpansionBailout: M } = Pu(), { getFunctionParameters: k, hasLeadingOwnLineComment: L, isFlowAnnotationComment: _, isJsxNode: R, isTemplateOnItsOwnLine: O, shouldPrintComma: Q, startsWithNoLookaheadToken: v, isBinaryish: P, isLineComment: E, hasComment: w, getComments: c, CommentCheckFlags: F, isCallLikeExpression: S, isCallExpression: b, getCallArguments: B, hasNakedLeftSide: I, getLeftSide: $ } = In(), { locEnd: G } = Nr(), { printFunctionParameters: W, shouldGroupFunctionParameters: J } = qi(), { printPropertyKey: te } = Du(), { printFunctionTypeParameters: K } = zr();
        function ie(H, ce, De, Be) {
          let Ke = H.getValue(), ze = !1;
          if ((Ke.type === "FunctionDeclaration" || Ke.type === "FunctionExpression") && Be && Be.expandLastArg) {
            let _t = H.getParentNode();
            b(_t) && B(_t).length > 1 && (ze = !0);
          }
          let Ct = [];
          Ke.type === "TSDeclareFunction" && Ke.declare && Ct.push("declare "), Ke.async && Ct.push("async "), Ke.generator ? Ct.push("function* ") : Ct.push("function "), Ke.id && Ct.push(ce("id"));
          let en = W(H, ce, De, ze), Gt = re(H, ce, De), ft = J(Ke, Gt);
          return Ct.push(K(H, De, ce), g([ft ? g(en) : en, Gt]), Ke.body ? " " : "", ce("body")), De.semi && (Ke.declare || !Ke.body) && Ct.push(";"), Ct;
        }
        function q(H, ce, De) {
          let Be = H.getNode(), { kind: Ke } = Be, ze = Be.value || Be, Ct = [];
          return !Ke || Ke === "init" || Ke === "method" || Ke === "constructor" ? ze.async && Ct.push("async ") : (i.ok(Ke === "get" || Ke === "set"), Ct.push(Ke, " ")), ze.generator && Ct.push("*"), Ct.push(te(H, ce, De), Be.optional || Be.key.optional ? "?" : ""), Be === ze ? Ct.push(U(H, ce, De)) : ze.type === "FunctionExpression" ? Ct.push(H.call((en) => U(en, ce, De), "value")) : Ct.push(De("value")), Ct;
        }
        function U(H, ce, De) {
          let Be = H.getNode(), Ke = W(H, De, ce), ze = re(H, De, ce), Ct = J(Be, ze), en = [K(H, ce, De), g([Ct ? g(Ke) : Ke, ze])];
          return Be.body ? en.push(" ", De("body")) : en.push(ce.semi ? ";" : ""), en;
        }
        function se(H, ce, De, Be) {
          let Ke = H.getValue(), ze = [];
          if (Ke.async && ze.push("async "), X(H, ce))
            ze.push(De(["params", 0]));
          else {
            let en = Be && (Be.expandLastArg || Be.expandFirstArg), Gt = re(H, De, ce);
            if (en) {
              if (j(Gt))
                throw new M();
              Gt = g(T(Gt));
            }
            ze.push(g([W(H, De, ce, en, !0), Gt]));
          }
          let Ct = d(H, ce, !0, (en) => {
            let Gt = o(ce.originalText, en, G);
            return Gt !== !1 && ce.originalText.slice(Gt, Gt + 2) === "=>";
          });
          return Ct && ze.push(" ", Ct), ze;
        }
        function ye(H, ce, De, Be, Ke, ze) {
          let Ct = H.getName(), en = H.getParentNode(), Gt = S(en) && Ct === "callee", ft = !!(ce && ce.assignmentLayout), _t = ze.body.type !== "BlockStatement" && ze.body.type !== "ObjectExpression" && ze.body.type !== "SequenceExpression", Fe = Gt && _t || ce && ce.assignmentLayout === "chain-tail-arrow-chain", Y = Symbol("arrow-chain");
          return ze.body.type === "SequenceExpression" && (Ke = g(["(", x([f, Ke]), f, ")"])), g([g(x([Gt || ft ? f : "", g(D([" =>", a], De), { shouldBreak: Be })]), { id: Y, shouldBreak: Fe }), " =>", y(_t ? x([a, Ke]) : [" ", Ke], { groupId: Y }), Gt ? C(f, "", { groupId: Y }) : ""]);
        }
        function le(H, ce, De, Be) {
          let Ke = H.getValue(), ze = [], Ct = [], en = !1;
          if (function Y() {
            let ke = se(H, ce, De, Be);
            if (ze.length === 0)
              ze.push(ke);
            else {
              let { leading: ue, trailing: xe } = p(H, ce);
              ze.push([ue, ke]), Ct.unshift(xe);
            }
            en = en || Ke.returnType && k(Ke).length > 0 || Ke.typeParameters || k(Ke).some((ue) => ue.type !== "Identifier"), Ke.body.type !== "ArrowFunctionExpression" || Be && Be.expandLastArg ? Ct.unshift(De("body", Be)) : (Ke = Ke.body, H.call(Y, "body"));
          }(), ze.length > 1)
            return ye(H, Be, ze, en, Ct, Ke);
          let Gt = ze;
          if (Gt.push(" =>"), !L(ce.originalText, Ke.body) && (Ke.body.type === "ArrayExpression" || Ke.body.type === "ObjectExpression" || Ke.body.type === "BlockStatement" || R(Ke.body) || O(Ke.body, ce.originalText) || Ke.body.type === "ArrowFunctionExpression" || Ke.body.type === "DoExpression"))
            return g([...Gt, " ", Ct]);
          if (Ke.body.type === "SequenceExpression")
            return g([...Gt, g([" (", x([f, Ct]), f, ")"])]);
          let ft = (Be && Be.expandLastArg || H.getParentNode().type === "JSXExpressionContainer") && !w(Ke), _t = Be && Be.expandLastArg && Q(ce, "all"), Fe = Ke.body.type === "ConditionalExpression" && !v(Ke.body, (Y) => Y.type === "ObjectExpression");
          return g([...Gt, g([x([a, Fe ? C("", "(") : "", Ct, Fe ? C("", ")") : ""]), ft ? [C(_t ? "," : ""), f] : ""])]);
        }
        function Ne(H) {
          let ce = k(H);
          return ce.length === 1 && !H.typeParameters && !w(H, F.Dangling) && ce[0].type === "Identifier" && !ce[0].typeAnnotation && !w(ce[0]) && !ce[0].optional && !H.predicate && !H.returnType;
        }
        function X(H, ce) {
          if (ce.arrowParens === "always")
            return !1;
          if (ce.arrowParens === "avoid") {
            let De = H.getValue();
            return Ne(De);
          }
          return !1;
        }
        function re(H, ce, De) {
          let Be = H.getValue(), Ke = ce("returnType");
          if (Be.returnType && _(De.originalText, Be.returnType))
            return [" /*: ", Ke, " */"];
          let ze = [Ke];
          return Be.returnType && Be.returnType.typeAnnotation && ze.unshift(": "), Be.predicate && ze.push(Be.returnType ? " " : ": ", ce("predicate")), ze;
        }
        function Te(H, ce, De) {
          let Be = H.getValue(), Ke = ce.semi ? ";" : "", ze = [];
          Be.argument && (oe(ce, Be.argument) ? ze.push([" (", x([A, De("argument")]), A, ")"]) : P(Be.argument) || Be.argument.type === "SequenceExpression" ? ze.push(g([C(" (", " "), x([f, De("argument")]), f, C(")")])) : ze.push(" ", De("argument")));
          let Ct = c(Be), en = u(Ct), Gt = en && E(en);
          return Gt && ze.push(Ke), w(Be, F.Dangling) && ze.push(" ", d(H, ce, !0)), Gt || ze.push(Ke), ze;
        }
        function we(H, ce, De) {
          return ["return", Te(H, ce, De)];
        }
        function tt(H, ce, De) {
          return ["throw", Te(H, ce, De)];
        }
        function oe(H, ce) {
          if (L(H.originalText, ce))
            return !0;
          if (I(ce)) {
            let De = ce, Be;
            for (; Be = $(De); )
              if (De = Be, L(H.originalText, De))
                return !0;
          }
          return !1;
        }
        m.exports = { printFunction: ie, printArrowFunction: le, printMethod: q, printReturnStatement: we, printThrowStatement: tt, printMethodInternal: U, shouldPrintParamsWithoutParens: X };
      } }), Zu = ee({ "src/language-js/print/decorators.js"(l, m) {
        ne();
        var { isNonEmptyArray: i, hasNewline: d } = yn(), { builders: { line: p, hardline: u, join: o, breakParent: a, group: f } } = Ut(), { locStart: g, locEnd: x } = Nr(), { getParentExportDeclaration: C } = In();
        function A(M, k, L) {
          let _ = M.getValue();
          return f([o(p, M.map(L, "decorators")), T(_, k) ? u : p]);
        }
        function D(M, k, L) {
          return [o(u, M.map(L, "declaration", "decorators")), u];
        }
        function y(M, k, L) {
          let _ = M.getValue(), { decorators: R } = _;
          if (!i(R) || j(M.getParentNode()))
            return;
          let O = _.type === "ClassExpression" || _.type === "ClassDeclaration" || T(_, k);
          return [C(M) ? u : O ? a : "", o(p, M.map(L, "decorators")), p];
        }
        function T(M, k) {
          return M.decorators.some((L) => d(k.originalText, x(L)));
        }
        function j(M) {
          if (M.type !== "ExportDefaultDeclaration" && M.type !== "ExportNamedDeclaration" && M.type !== "DeclareExportDeclaration")
            return !1;
          let k = M.declaration && M.declaration.decorators;
          return i(k) && g(M) === g(k[0]);
        }
        m.exports = { printDecorators: y, printClassMemberDecorators: A, printDecoratorsBeforeExport: D, hasDecoratorsBeforeExport: j };
      } }), ei = ee({ "src/language-js/print/class.js"(l, m) {
        ne();
        var { isNonEmptyArray: i, createGroupIdMapper: d } = yn(), { printComments: p, printDanglingComments: u } = ur(), { builders: { join: o, line: a, hardline: f, softline: g, group: x, indent: C, ifBreak: A } } = Ut(), { hasComment: D, CommentCheckFlags: y } = In(), { getTypeParametersGroupId: T } = sa(), { printMethod: j } = Hu(), { printOptionalToken: M, printTypeAnnotation: k, printDefiniteToken: L } = zr(), { printPropertyKey: _ } = Du(), { printAssignment: R } = Qr(), { printClassMemberDecorators: O } = Zu();
        function Q(B, I, $) {
          let G = B.getValue(), W = [];
          G.declare && W.push("declare "), G.abstract && W.push("abstract "), W.push("class");
          let J = G.id && D(G.id, y.Trailing) || G.typeParameters && D(G.typeParameters, y.Trailing) || G.superClass && D(G.superClass) || i(G.extends) || i(G.mixins) || i(G.implements), te = [], K = [];
          if (G.id && te.push(" ", $("id")), te.push($("typeParameters")), G.superClass) {
            let ie = [F(B, I, $), $("superTypeParameters")], q = B.call((U) => ["extends ", p(U, ie, I)], "superClass");
            J ? K.push(a, x(q)) : K.push(" ", q);
          } else
            K.push(c(B, I, $, "extends"));
          if (K.push(c(B, I, $, "mixins"), c(B, I, $, "implements")), J) {
            let ie;
            w(G) ? ie = [...te, C(K)] : ie = C([...te, K]), W.push(x(ie, { id: v(G) }));
          } else
            W.push(...te, ...K);
          return W.push(" ", $("body")), W;
        }
        var v = d("heritageGroup");
        function P(B) {
          return A(f, "", { groupId: v(B) });
        }
        function E(B) {
          return ["superClass", "extends", "mixins", "implements"].filter((I) => !!B[I]).length > 1;
        }
        function w(B) {
          return B.typeParameters && !D(B.typeParameters, y.Trailing | y.Line) && !E(B);
        }
        function c(B, I, $, G) {
          let W = B.getValue();
          if (!i(W[G]))
            return "";
          let J = u(B, I, !0, (te) => {
            let { marker: K } = te;
            return K === G;
          });
          return [w(W) ? A(" ", a, { groupId: T(W.typeParameters) }) : a, J, J && f, G, x(C([a, o([",", a], B.map($, G))]))];
        }
        function F(B, I, $) {
          let G = $("superClass");
          return B.getParentNode().type === "AssignmentExpression" ? x(A(["(", C([g, G]), g, ")"], G)) : G;
        }
        function S(B, I, $) {
          let G = B.getValue(), W = [];
          return i(G.decorators) && W.push(O(B, I, $)), G.accessibility && W.push(G.accessibility + " "), G.readonly && W.push("readonly "), G.declare && W.push("declare "), G.static && W.push("static "), (G.type === "TSAbstractMethodDefinition" || G.abstract) && W.push("abstract "), G.override && W.push("override "), W.push(j(B, I, $)), W;
        }
        function b(B, I, $) {
          let G = B.getValue(), W = [], J = I.semi ? ";" : "";
          return i(G.decorators) && W.push(O(B, I, $)), G.accessibility && W.push(G.accessibility + " "), G.declare && W.push("declare "), G.static && W.push("static "), (G.type === "TSAbstractPropertyDefinition" || G.type === "TSAbstractAccessorProperty" || G.abstract) && W.push("abstract "), G.override && W.push("override "), G.readonly && W.push("readonly "), G.variance && W.push($("variance")), (G.type === "ClassAccessorProperty" || G.type === "AccessorProperty" || G.type === "TSAbstractAccessorProperty") && W.push("accessor "), W.push(_(B, I, $), M(B), L(B), k(B, I, $)), [R(B, I, $, W, " =", "value"), J];
        }
        m.exports = { printClass: Q, printClassMethod: S, printClassProperty: b, printHardlineAfterHeritage: P };
      } }), la = ee({ "src/language-js/print/interface.js"(l, m) {
        ne();
        var { isNonEmptyArray: i } = yn(), { builders: { join: d, line: p, group: u, indent: o, ifBreak: a } } = Ut(), { hasComment: f, identity: g, CommentCheckFlags: x } = In(), { getTypeParametersGroupId: C } = sa(), { printTypeScriptModifiers: A } = zr();
        function D(y, T, j) {
          let M = y.getValue(), k = [];
          M.declare && k.push("declare "), M.type === "TSInterfaceDeclaration" && k.push(M.abstract ? "abstract " : "", A(y, T, j)), k.push("interface");
          let L = [], _ = [];
          M.type !== "InterfaceTypeAnnotation" && L.push(" ", j("id"), j("typeParameters"));
          let R = M.typeParameters && !f(M.typeParameters, x.Trailing | x.Line);
          return i(M.extends) && _.push(R ? a(" ", p, { groupId: C(M.typeParameters) }) : p, "extends ", (M.extends.length === 1 ? g : o)(d([",", p], y.map(j, "extends")))), M.id && f(M.id, x.Trailing) || i(M.extends) ? R ? k.push(u([...L, o(_)])) : k.push(u(o([...L, ..._]))) : k.push(...L, ..._), k.push(" ", j("body")), u(k);
        }
        m.exports = { printInterface: D };
      } }), Ei = ee({ "src/language-js/print/module.js"(l, m) {
        ne();
        var { isNonEmptyArray: i } = yn(), { builders: { softline: d, group: p, indent: u, join: o, line: a, ifBreak: f, hardline: g } } = Ut(), { printDanglingComments: x } = ur(), { hasComment: C, CommentCheckFlags: A, shouldPrintComma: D, needsHardlineAfterDanglingComment: y, isStringLiteral: T, rawText: j } = In(), { locStart: M, hasSameLoc: k } = Nr(), { hasDecoratorsBeforeExport: L, printDecoratorsBeforeExport: _ } = Zu();
        function R(b, B, I) {
          let $ = b.getValue(), G = B.semi ? ";" : "", W = [], { importKind: J } = $;
          return W.push("import"), J && J !== "value" && W.push(" ", J), W.push(E(b, B, I), P(b, B, I), c(b, B, I), G), W;
        }
        function O(b, B, I) {
          let $ = b.getValue(), G = [];
          L($) && G.push(_(b, B, I));
          let { type: W, exportKind: J, declaration: te } = $;
          return G.push("export"), ($.default || W === "ExportDefaultDeclaration") && G.push(" default"), C($, A.Dangling) && (G.push(" ", x(b, B, !0)), y($) && G.push(g)), te ? G.push(" ", I("declaration")) : G.push(J === "type" ? " type" : "", E(b, B, I), P(b, B, I), c(b, B, I)), v($, B) && G.push(";"), G;
        }
        function Q(b, B, I) {
          let $ = b.getValue(), G = B.semi ? ";" : "", W = [], { exportKind: J, exported: te } = $;
          return W.push("export"), J === "type" && W.push(" type"), W.push(" *"), te && W.push(" as ", I("exported")), W.push(P(b, B, I), c(b, B, I), G), W;
        }
        function v(b, B) {
          if (!B.semi)
            return !1;
          let { type: I, declaration: $ } = b, G = b.default || I === "ExportDefaultDeclaration";
          if (!$)
            return !0;
          let { type: W } = $;
          return !!(G && W !== "ClassDeclaration" && W !== "FunctionDeclaration" && W !== "TSInterfaceDeclaration" && W !== "DeclareClass" && W !== "DeclareFunction" && W !== "TSDeclareFunction" && W !== "EnumDeclaration");
        }
        function P(b, B, I) {
          let $ = b.getValue();
          if (!$.source)
            return "";
          let G = [];
          return w($, B) || G.push(" from"), G.push(" ", I("source")), G;
        }
        function E(b, B, I) {
          let $ = b.getValue();
          if (w($, B))
            return "";
          let G = [" "];
          if (i($.specifiers)) {
            let W = [], J = [];
            b.each(() => {
              let te = b.getValue().type;
              if (te === "ExportNamespaceSpecifier" || te === "ExportDefaultSpecifier" || te === "ImportNamespaceSpecifier" || te === "ImportDefaultSpecifier")
                W.push(I());
              else if (te === "ExportSpecifier" || te === "ImportSpecifier")
                J.push(I());
              else
                throw new Error(`Unknown specifier type ${JSON.stringify(te)}`);
            }, "specifiers"), G.push(o(", ", W)), J.length > 0 && (W.length > 0 && G.push(", "), J.length > 1 || W.length > 0 || $.specifiers.some((te) => C(te)) ? G.push(p(["{", u([B.bracketSpacing ? a : d, o([",", a], J)]), f(D(B) ? "," : ""), B.bracketSpacing ? a : d, "}"])) : G.push(["{", B.bracketSpacing ? " " : "", ...J, B.bracketSpacing ? " " : "", "}"]));
          } else
            G.push("{}");
          return G;
        }
        function w(b, B) {
          let { type: I, importKind: $, source: G, specifiers: W } = b;
          return I !== "ImportDeclaration" || i(W) || $ === "type" ? !1 : !/{\s*}/.test(B.originalText.slice(M(b), M(G)));
        }
        function c(b, B, I) {
          let $ = b.getNode();
          return i($.assertions) ? [" assert {", B.bracketSpacing ? " " : "", o(", ", b.map(I, "assertions")), B.bracketSpacing ? " " : "", "}"] : "";
        }
        function F(b, B, I) {
          let $ = b.getNode(), { type: G } = $, W = [], J = G === "ImportSpecifier" ? $.importKind : $.exportKind;
          J && J !== "value" && W.push(J, " ");
          let te = G.startsWith("Import"), K = te ? "imported" : "local", ie = te ? "local" : "exported", q = $[K], U = $[ie], se = "", ye = "";
          return G === "ExportNamespaceSpecifier" || G === "ImportNamespaceSpecifier" ? se = "*" : q && (se = I(K)), U && !S($) && (ye = I(ie)), W.push(se, se && ye ? " as " : "", ye), W;
        }
        function S(b) {
          if (b.type !== "ImportSpecifier" && b.type !== "ExportSpecifier")
            return !1;
          let { local: B, [b.type === "ImportSpecifier" ? "imported" : "exported"]: I } = b;
          if (B.type !== I.type || !k(B, I))
            return !1;
          if (T(B))
            return B.value === I.value && j(B) === j(I);
          switch (B.type) {
            case "Identifier":
              return B.name === I.name;
            default:
              return !1;
          }
        }
        m.exports = { printImportDeclaration: R, printExportDeclaration: O, printExportAllDeclaration: Q, printModuleSpecifier: F };
      } }), Tu = ee({ "src/language-js/print/object.js"(l, m) {
        ne();
        var { printDanglingComments: i } = ur(), { builders: { line: d, softline: p, group: u, indent: o, ifBreak: a, hardline: f } } = Ut(), { getLast: g, hasNewlineInRange: x, hasNewline: C, isNonEmptyArray: A } = yn(), { shouldPrintComma: D, hasComment: y, getComments: T, CommentCheckFlags: j, isNextLineEmpty: M } = In(), { locStart: k, locEnd: L } = Nr(), { printOptionalToken: _, printTypeAnnotation: R } = zr(), { shouldHugFunctionParameters: O } = qi(), { shouldHugType: Q } = aa(), { printHardlineAfterHeritage: v } = ei();
        function P(E, w, c) {
          let F = w.semi ? ";" : "", S = E.getValue(), b;
          S.type === "TSTypeLiteral" ? b = "members" : S.type === "TSInterfaceBody" ? b = "body" : b = "properties";
          let B = S.type === "ObjectTypeAnnotation", I = [b];
          B && I.push("indexers", "callProperties", "internalSlots");
          let $ = I.map((X) => S[X][0]).sort((X, re) => k(X) - k(re))[0], G = E.getParentNode(0), W = B && G && (G.type === "InterfaceDeclaration" || G.type === "DeclareInterface" || G.type === "DeclareClass") && E.getName() === "body", J = S.type === "TSInterfaceBody" || W || S.type === "ObjectPattern" && G.type !== "FunctionDeclaration" && G.type !== "FunctionExpression" && G.type !== "ArrowFunctionExpression" && G.type !== "ObjectMethod" && G.type !== "ClassMethod" && G.type !== "ClassPrivateMethod" && G.type !== "AssignmentPattern" && G.type !== "CatchClause" && S.properties.some((X) => X.value && (X.value.type === "ObjectPattern" || X.value.type === "ArrayPattern")) || S.type !== "ObjectPattern" && $ && x(w.originalText, k(S), k($)), te = W ? ";" : S.type === "TSInterfaceBody" || S.type === "TSTypeLiteral" ? a(F, ";") : ",", K = S.type === "RecordExpression" ? "#{" : S.exact ? "{|" : "{", ie = S.exact ? "|}" : "}", q = [];
          for (let X of I)
            E.each((re) => {
              let Te = re.getValue();
              q.push({ node: Te, printed: c(), loc: k(Te) });
            }, X);
          I.length > 1 && q.sort((X, re) => X.loc - re.loc);
          let U = [], se = q.map((X) => {
            let re = [...U, u(X.printed)];
            return U = [te, d], (X.node.type === "TSPropertySignature" || X.node.type === "TSMethodSignature" || X.node.type === "TSConstructSignatureDeclaration") && y(X.node, j.PrettierIgnore) && U.shift(), M(X.node, w) && U.push(f), re;
          });
          if (S.inexact) {
            let X;
            if (y(S, j.Dangling)) {
              let re = y(S, j.Line);
              X = [i(E, w, !0), re || C(w.originalText, L(g(T(S)))) ? f : d, "..."];
            } else
              X = ["..."];
            se.push([...U, ...X]);
          }
          let ye = g(S[b]), le = !(S.inexact || ye && ye.type === "RestElement" || ye && (ye.type === "TSPropertySignature" || ye.type === "TSCallSignatureDeclaration" || ye.type === "TSMethodSignature" || ye.type === "TSConstructSignatureDeclaration") && y(ye, j.PrettierIgnore)), Ne;
          if (se.length === 0) {
            if (!y(S, j.Dangling))
              return [K, ie, R(E, w, c)];
            Ne = u([K, i(E, w), p, ie, _(E), R(E, w, c)]);
          } else
            Ne = [W && A(S.properties) ? v(G) : "", K, o([w.bracketSpacing ? d : p, ...se]), a(le && (te !== "," || D(w)) ? te : ""), w.bracketSpacing ? d : p, ie, _(E), R(E, w, c)];
          return E.match((X) => X.type === "ObjectPattern" && !X.decorators, (X, re, Te) => O(X) && (re === "params" || re === "parameters" || re === "this" || re === "rest") && Te === 0) || E.match(Q, (X, re) => re === "typeAnnotation", (X, re) => re === "typeAnnotation", (X, re, Te) => O(X) && (re === "params" || re === "parameters" || re === "this" || re === "rest") && Te === 0) || !J && E.match((X) => X.type === "ObjectPattern", (X) => X.type === "AssignmentExpression" || X.type === "VariableDeclarator") ? Ne : u(Ne, { shouldBreak: J });
        }
        m.exports = { printObject: P };
      } }), Zn = ee({ "src/language-js/print/flow.js"(l, m) {
        ne();
        var i = Iu(), { printDanglingComments: d } = ur(), { printString: p, printNumber: u } = yn(), { builders: { hardline: o, softline: a, group: f, indent: g } } = Ut(), { getParentExportDeclaration: x, isFunctionNotation: C, isGetterOrSetter: A, rawText: D, shouldPrintComma: y } = In(), { locStart: T, locEnd: j } = Nr(), { replaceTextEndOfLine: M } = _i(), { printClass: k } = ei(), { printOpaqueType: L, printTypeAlias: _, printIntersectionType: R, printUnionType: O, printFunctionType: Q, printTupleType: v, printIndexedAccessType: P } = aa(), { printInterface: E } = la(), { printTypeParameter: w, printTypeParameters: c } = sa(), { printExportDeclaration: F, printExportAllDeclaration: S } = Ei(), { printArrayItems: b } = iu(), { printObject: B } = Tu(), { printPropertyKey: I } = Du(), { printOptionalToken: $, printTypeAnnotation: G, printRestSpread: W } = zr();
        function J(K, ie, q) {
          let U = K.getValue(), se = ie.semi ? ";" : "", ye = [];
          switch (U.type) {
            case "DeclareClass":
              return te(K, k(K, ie, q));
            case "DeclareFunction":
              return te(K, ["function ", q("id"), U.predicate ? " " : "", q("predicate"), se]);
            case "DeclareModule":
              return te(K, ["module ", q("id"), " ", q("body")]);
            case "DeclareModuleExports":
              return te(K, ["module.exports", ": ", q("typeAnnotation"), se]);
            case "DeclareVariable":
              return te(K, ["var ", q("id"), se]);
            case "DeclareOpaqueType":
              return te(K, L(K, ie, q));
            case "DeclareInterface":
              return te(K, E(K, ie, q));
            case "DeclareTypeAlias":
              return te(K, _(K, ie, q));
            case "DeclareExportDeclaration":
              return te(K, F(K, ie, q));
            case "DeclareExportAllDeclaration":
              return te(K, S(K, ie, q));
            case "OpaqueType":
              return L(K, ie, q);
            case "TypeAlias":
              return _(K, ie, q);
            case "IntersectionTypeAnnotation":
              return R(K, ie, q);
            case "UnionTypeAnnotation":
              return O(K, ie, q);
            case "FunctionTypeAnnotation":
              return Q(K, ie, q);
            case "TupleTypeAnnotation":
              return v(K, ie, q);
            case "GenericTypeAnnotation":
              return [q("id"), c(K, ie, q, "typeParameters")];
            case "IndexedAccessType":
            case "OptionalIndexedAccessType":
              return P(K, ie, q);
            case "TypeAnnotation":
              return q("typeAnnotation");
            case "TypeParameter":
              return w(K, ie, q);
            case "TypeofTypeAnnotation":
              return ["typeof ", q("argument")];
            case "ExistsTypeAnnotation":
              return "*";
            case "EmptyTypeAnnotation":
              return "empty";
            case "MixedTypeAnnotation":
              return "mixed";
            case "ArrayTypeAnnotation":
              return [q("elementType"), "[]"];
            case "BooleanLiteralTypeAnnotation":
              return String(U.value);
            case "EnumDeclaration":
              return ["enum ", q("id"), " ", q("body")];
            case "EnumBooleanBody":
            case "EnumNumberBody":
            case "EnumStringBody":
            case "EnumSymbolBody": {
              if (U.type === "EnumSymbolBody" || U.explicitType) {
                let le = null;
                switch (U.type) {
                  case "EnumBooleanBody":
                    le = "boolean";
                    break;
                  case "EnumNumberBody":
                    le = "number";
                    break;
                  case "EnumStringBody":
                    le = "string";
                    break;
                  case "EnumSymbolBody":
                    le = "symbol";
                    break;
                }
                ye.push("of ", le, " ");
              }
              if (U.members.length === 0 && !U.hasUnknownMembers)
                ye.push(f(["{", d(K, ie), a, "}"]));
              else {
                let le = U.members.length > 0 ? [o, b(K, ie, "members", q), U.hasUnknownMembers || y(ie) ? "," : ""] : [];
                ye.push(f(["{", g([...le, ...U.hasUnknownMembers ? [o, "..."] : []]), d(K, ie, !0), o, "}"]));
              }
              return ye;
            }
            case "EnumBooleanMember":
            case "EnumNumberMember":
            case "EnumStringMember":
              return [q("id"), " = ", typeof U.init == "object" ? q("init") : String(U.init)];
            case "EnumDefaultedMember":
              return q("id");
            case "FunctionTypeParam": {
              let le = U.name ? q("name") : K.getParentNode().this === U ? "this" : "";
              return [le, $(K), le ? ": " : "", q("typeAnnotation")];
            }
            case "InterfaceDeclaration":
            case "InterfaceTypeAnnotation":
              return E(K, ie, q);
            case "ClassImplements":
            case "InterfaceExtends":
              return [q("id"), q("typeParameters")];
            case "NullableTypeAnnotation":
              return ["?", q("typeAnnotation")];
            case "Variance": {
              let { kind: le } = U;
              return i.ok(le === "plus" || le === "minus"), le === "plus" ? "+" : "-";
            }
            case "ObjectTypeCallProperty":
              return U.static && ye.push("static "), ye.push(q("value")), ye;
            case "ObjectTypeIndexer":
              return [U.static ? "static " : "", U.variance ? q("variance") : "", "[", q("id"), U.id ? ": " : "", q("key"), "]: ", q("value")];
            case "ObjectTypeProperty": {
              let le = "";
              return U.proto ? le = "proto " : U.static && (le = "static "), [le, A(U) ? U.kind + " " : "", U.variance ? q("variance") : "", I(K, ie, q), $(K), C(U) ? "" : ": ", q("value")];
            }
            case "ObjectTypeAnnotation":
              return B(K, ie, q);
            case "ObjectTypeInternalSlot":
              return [U.static ? "static " : "", "[[", q("id"), "]]", $(K), U.method ? "" : ": ", q("value")];
            case "ObjectTypeSpreadProperty":
              return W(K, ie, q);
            case "QualifiedTypeofIdentifier":
            case "QualifiedTypeIdentifier":
              return [q("qualification"), ".", q("id")];
            case "StringLiteralTypeAnnotation":
              return M(p(D(U), ie));
            case "NumberLiteralTypeAnnotation":
              i.strictEqual(typeof U.value, "number");
            case "BigIntLiteralTypeAnnotation":
              return U.extra ? u(U.extra.raw) : u(U.raw);
            case "TypeCastExpression":
              return ["(", q("expression"), G(K, ie, q), ")"];
            case "TypeParameterDeclaration":
            case "TypeParameterInstantiation": {
              let le = c(K, ie, q, "params");
              if (ie.parser === "flow") {
                let Ne = T(U), X = j(U), re = ie.originalText.lastIndexOf("/*", Ne), Te = ie.originalText.indexOf("*/", X);
                if (re !== -1 && Te !== -1) {
                  let we = ie.originalText.slice(re + 2, Te).trim();
                  if (we.startsWith("::") && !we.includes("/*") && !we.includes("*/"))
                    return ["/*:: ", le, " */"];
                }
              }
              return le;
            }
            case "InferredPredicate":
              return "%checks";
            case "DeclaredPredicate":
              return ["%checks(", q("value"), ")"];
            case "AnyTypeAnnotation":
              return "any";
            case "BooleanTypeAnnotation":
              return "boolean";
            case "BigIntTypeAnnotation":
              return "bigint";
            case "NullLiteralTypeAnnotation":
              return "null";
            case "NumberTypeAnnotation":
              return "number";
            case "SymbolTypeAnnotation":
              return "symbol";
            case "StringTypeAnnotation":
              return "string";
            case "VoidTypeAnnotation":
              return "void";
            case "ThisTypeAnnotation":
              return "this";
            case "Node":
            case "Printable":
            case "SourceLocation":
            case "Position":
            case "Statement":
            case "Function":
            case "Pattern":
            case "Expression":
            case "Declaration":
            case "Specifier":
            case "NamedSpecifier":
            case "Comment":
            case "MemberTypeAnnotation":
            case "Type":
              throw new Error("unprintable type: " + JSON.stringify(U.type));
          }
        }
        function te(K, ie) {
          let q = x(K);
          return q ? (i.strictEqual(q.type, "DeclareExportDeclaration"), ie) : ["declare ", ie];
        }
        m.exports = { printFlow: J };
      } }), Qn = ee({ "src/language-js/utils/is-ts-keyword-type.js"(l, m) {
        ne();
        function i(d) {
          let { type: p } = d;
          return p.startsWith("TS") && p.endsWith("Keyword");
        }
        m.exports = i;
      } }), Lu = ee({ "src/language-js/print/ternary.js"(l, m) {
        ne();
        var { hasNewlineInRange: i } = yn(), { isJsxNode: d, getComments: p, isCallExpression: u, isMemberExpression: o, isTSTypeExpression: a } = In(), { locStart: f, locEnd: g } = Nr(), x = Au(), { builders: { line: C, softline: A, group: D, indent: y, align: T, ifBreak: j, dedent: M, breakParent: k } } = Ut();
        function L(v) {
          let P = [v];
          for (let E = 0; E < P.length; E++) {
            let w = P[E];
            for (let c of ["test", "consequent", "alternate"]) {
              let F = w[c];
              if (d(F))
                return !0;
              F.type === "ConditionalExpression" && P.push(F);
            }
          }
          return !1;
        }
        function _(v, P, E) {
          let w = v.getValue(), c = w.type === "ConditionalExpression", F = c ? "alternate" : "falseType", S = v.getParentNode(), b = c ? E("test") : [E("checkType"), " ", "extends", " ", E("extendsType")];
          return S.type === w.type && S[F] === w ? T(2, b) : b;
        }
        var R = /* @__PURE__ */ new Map([["AssignmentExpression", "right"], ["VariableDeclarator", "init"], ["ReturnStatement", "argument"], ["ThrowStatement", "argument"], ["UnaryExpression", "argument"], ["YieldExpression", "argument"]]);
        function O(v) {
          let P = v.getValue();
          if (P.type !== "ConditionalExpression")
            return !1;
          let E, w = P;
          for (let c = 0; !E; c++) {
            let F = v.getParentNode(c);
            if (u(F) && F.callee === w || o(F) && F.object === w || F.type === "TSNonNullExpression" && F.expression === w) {
              w = F;
              continue;
            }
            F.type === "NewExpression" && F.callee === w || a(F) && F.expression === w ? (E = v.getParentNode(c + 1), w = F) : E = F;
          }
          return w === P ? !1 : E[R.get(E.type)] === w;
        }
        function Q(v, P, E) {
          let w = v.getValue(), c = w.type === "ConditionalExpression", F = c ? "consequent" : "trueType", S = c ? "alternate" : "falseType", b = c ? ["test"] : ["checkType", "extendsType"], B = w[F], I = w[S], $ = [], G = !1, W = v.getParentNode(), J = W.type === w.type && b.some((Te) => W[Te] === w), te = W.type === w.type && !J, K, ie, q = 0;
          do
            ie = K || w, K = v.getParentNode(q), q++;
          while (K && K.type === w.type && b.every((Te) => K[Te] !== ie));
          let U = K || W, se = ie;
          if (c && (d(w[b[0]]) || d(B) || d(I) || L(se))) {
            G = !0, te = !0;
            let Te = (tt) => [j("("), y([A, tt]), A, j(")")], we = (tt) => tt.type === "NullLiteral" || tt.type === "Literal" && tt.value === null || tt.type === "Identifier" && tt.name === "undefined";
            $.push(" ? ", we(B) ? E(F) : Te(E(F)), " : ", I.type === w.type || we(I) ? E(S) : Te(E(S)));
          } else {
            let Te = [C, "? ", B.type === w.type ? j("", "(") : "", T(2, E(F)), B.type === w.type ? j("", ")") : "", C, ": ", I.type === w.type ? E(S) : T(2, E(S))];
            $.push(W.type !== w.type || W[S] === w || J ? Te : P.useTabs ? M(y(Te)) : T(Math.max(0, P.tabWidth - 2), Te));
          }
          let ye = [...b.map((Te) => p(w[Te])), p(B), p(I)].flat().some((Te) => x(Te) && i(P.originalText, f(Te), g(Te))), le = (Te) => W === U ? D(Te, { shouldBreak: ye }) : ye ? [Te, k] : Te, Ne = !G && (o(W) || W.type === "NGPipeExpression" && W.left === w) && !W.computed, X = O(v), re = le([_(v, P, E), te ? $ : y($), c && Ne && !X ? A : ""]);
          return J || X ? D([y([A, re]), A]) : re;
        }
        m.exports = { printTernary: Q };
      } }), br = ee({ "src/language-js/print/statement.js"(l, m) {
        ne();
        var { builders: { hardline: i } } = Ut(), d = Yu(), { getLeftSidePathName: p, hasNakedLeftSide: u, isJsxNode: o, isTheOnlyJsxElementInMarkdown: a, hasComment: f, CommentCheckFlags: g, isNextLineEmpty: x } = In(), { shouldPrintParamsWithoutParens: C } = Hu();
        function A(_, R, O, Q) {
          let v = _.getValue(), P = [], E = v.type === "ClassBody", w = D(v[Q]);
          return _.each((c, F, S) => {
            let b = c.getValue();
            if (b.type === "EmptyStatement")
              return;
            let B = O();
            !R.semi && !E && !a(R, c) && y(c, R) ? f(b, g.Leading) ? P.push(O([], { needsSemi: !0 })) : P.push(";", B) : P.push(B), !R.semi && E && k(b) && L(b, S[F + 1]) && P.push(";"), b !== w && (P.push(i), x(b, R) && P.push(i));
          }, Q), P;
        }
        function D(_) {
          for (let R = _.length - 1; R >= 0; R--) {
            let O = _[R];
            if (O.type !== "EmptyStatement")
              return O;
          }
        }
        function y(_, R) {
          return _.getNode().type !== "ExpressionStatement" ? !1 : _.call((O) => T(O, R), "expression");
        }
        function T(_, R) {
          let O = _.getValue();
          switch (O.type) {
            case "ParenthesizedExpression":
            case "TypeCastExpression":
            case "ArrayExpression":
            case "ArrayPattern":
            case "TemplateLiteral":
            case "TemplateElement":
            case "RegExpLiteral":
              return !0;
            case "ArrowFunctionExpression": {
              if (!C(_, R))
                return !0;
              break;
            }
            case "UnaryExpression": {
              let { prefix: Q, operator: v } = O;
              if (Q && (v === "+" || v === "-"))
                return !0;
              break;
            }
            case "BindExpression": {
              if (!O.object)
                return !0;
              break;
            }
            case "Literal": {
              if (O.regex)
                return !0;
              break;
            }
            default:
              if (o(O))
                return !0;
          }
          return d(_, R) ? !0 : u(O) ? _.call((Q) => T(Q, R), ...p(_, O)) : !1;
        }
        function j(_, R, O) {
          return A(_, R, O, "body");
        }
        function M(_, R, O) {
          return A(_, R, O, "consequent");
        }
        var k = (_) => {
          let { type: R } = _;
          return R === "ClassProperty" || R === "PropertyDefinition" || R === "ClassPrivateProperty" || R === "ClassAccessorProperty" || R === "AccessorProperty" || R === "TSAbstractPropertyDefinition" || R === "TSAbstractAccessorProperty";
        };
        function L(_, R) {
          let { type: O, name: Q } = _.key;
          if (!_.computed && O === "Identifier" && (Q === "static" || Q === "get" || Q === "set" || Q === "accessor") && !_.value && !_.typeAnnotation)
            return !0;
          if (!R || R.static || R.accessibility)
            return !1;
          if (!R.computed) {
            let v = R.key && R.key.name;
            if (v === "in" || v === "instanceof")
              return !0;
          }
          if (k(R) && R.variance && !R.static && !R.declare)
            return !0;
          switch (R.type) {
            case "ClassProperty":
            case "PropertyDefinition":
            case "TSAbstractPropertyDefinition":
              return R.computed;
            case "MethodDefinition":
            case "TSAbstractMethodDefinition":
            case "ClassMethod":
            case "ClassPrivateMethod": {
              if ((R.value ? R.value.async : R.async) || R.kind === "get" || R.kind === "set")
                return !1;
              let v = R.value ? R.value.generator : R.generator;
              return !!(R.computed || v);
            }
            case "TSIndexSignature":
              return !0;
          }
          return !1;
        }
        m.exports = { printBody: j, printSwitchCaseConsequent: M };
      } }), Ur = ee({ "src/language-js/print/block.js"(l, m) {
        ne();
        var { printDanglingComments: i } = ur(), { isNonEmptyArray: d } = yn(), { builders: { hardline: p, indent: u } } = Ut(), { hasComment: o, CommentCheckFlags: a, isNextLineEmpty: f } = In(), { printHardlineAfterHeritage: g } = ei(), { printBody: x } = br();
        function C(D, y, T) {
          let j = D.getValue(), M = [];
          if (j.type === "StaticBlock" && M.push("static "), j.type === "ClassBody" && d(j.body)) {
            let L = D.getParentNode();
            M.push(g(L));
          }
          M.push("{");
          let k = A(D, y, T);
          if (k)
            M.push(u([p, k]), p);
          else {
            let L = D.getParentNode(), _ = D.getParentNode(1);
            L.type === "ArrowFunctionExpression" || L.type === "FunctionExpression" || L.type === "FunctionDeclaration" || L.type === "ObjectMethod" || L.type === "ClassMethod" || L.type === "ClassPrivateMethod" || L.type === "ForStatement" || L.type === "WhileStatement" || L.type === "DoWhileStatement" || L.type === "DoExpression" || L.type === "CatchClause" && !_.finalizer || L.type === "TSModuleDeclaration" || L.type === "TSDeclareFunction" || j.type === "StaticBlock" || j.type === "ClassBody" || M.push(p);
          }
          return M.push("}"), M;
        }
        function A(D, y, T) {
          let j = D.getValue(), M = d(j.directives), k = j.body.some((R) => R.type !== "EmptyStatement"), L = o(j, a.Dangling);
          if (!M && !k && !L)
            return "";
          let _ = [];
          if (M && D.each((R, O, Q) => {
            _.push(T()), (O < Q.length - 1 || k || L) && (_.push(p), f(R.getValue(), y) && _.push(p));
          }, "directives"), k && _.push(x(D, y, T)), L && _.push(i(D, y, !0)), j.type === "Program") {
            let R = D.getParentNode();
            (!R || R.type !== "ModuleExpression") && _.push(p);
          }
          return _;
        }
        m.exports = { printBlock: C, printBlockBody: A };
      } }), vi = ee({ "src/language-js/print/typescript.js"(l, m) {
        ne();
        var { printDanglingComments: i } = ur(), { hasNewlineInRange: d } = yn(), { builders: { join: p, line: u, hardline: o, softline: a, group: f, indent: g, conditionalGroup: x, ifBreak: C } } = Ut(), { isStringLiteral: A, getTypeScriptMappedTypeModifier: D, shouldPrintComma: y, isCallExpression: T, isMemberExpression: j } = In(), M = Qn(), { locStart: k, locEnd: L } = Nr(), { printOptionalToken: _, printTypeScriptModifiers: R } = zr(), { printTernary: O } = Lu(), { printFunctionParameters: Q, shouldGroupFunctionParameters: v } = qi(), { printTemplateLiteral: P } = Di(), { printArrayItems: E } = iu(), { printObject: w } = Tu(), { printClassProperty: c, printClassMethod: F } = ei(), { printTypeParameter: S, printTypeParameters: b } = sa(), { printPropertyKey: B } = Du(), { printFunction: I, printMethodInternal: $ } = Hu(), { printInterface: G } = la(), { printBlock: W } = Ur(), { printTypeAlias: J, printIntersectionType: te, printUnionType: K, printFunctionType: ie, printTupleType: q, printIndexedAccessType: U, printJSDocType: se } = aa();
        function ye(le, Ne, X) {
          let re = le.getValue();
          if (!re.type.startsWith("TS"))
            return;
          if (M(re))
            return re.type.slice(2, -7).toLowerCase();
          let Te = Ne.semi ? ";" : "", we = [];
          switch (re.type) {
            case "TSThisType":
              return "this";
            case "TSTypeAssertion": {
              let tt = !(re.expression.type === "ArrayExpression" || re.expression.type === "ObjectExpression"), oe = f(["<", g([a, X("typeAnnotation")]), a, ">"]), H = [C("("), g([a, X("expression")]), a, C(")")];
              return tt ? x([[oe, X("expression")], [oe, f(H, { shouldBreak: !0 })], [oe, X("expression")]]) : f([oe, X("expression")]);
            }
            case "TSDeclareFunction":
              return I(le, X, Ne);
            case "TSExportAssignment":
              return ["export = ", X("expression"), Te];
            case "TSModuleBlock":
              return W(le, Ne, X);
            case "TSInterfaceBody":
            case "TSTypeLiteral":
              return w(le, Ne, X);
            case "TSTypeAliasDeclaration":
              return J(le, Ne, X);
            case "TSQualifiedName":
              return p(".", [X("left"), X("right")]);
            case "TSAbstractMethodDefinition":
            case "TSDeclareMethod":
              return F(le, Ne, X);
            case "TSAbstractAccessorProperty":
            case "TSAbstractPropertyDefinition":
              return c(le, Ne, X);
            case "TSInterfaceHeritage":
            case "TSExpressionWithTypeArguments":
              return we.push(X("expression")), re.typeParameters && we.push(X("typeParameters")), we;
            case "TSTemplateLiteralType":
              return P(le, X, Ne);
            case "TSNamedTupleMember":
              return [X("label"), re.optional ? "?" : "", ": ", X("elementType")];
            case "TSRestType":
              return ["...", X("typeAnnotation")];
            case "TSOptionalType":
              return [X("typeAnnotation"), "?"];
            case "TSInterfaceDeclaration":
              return G(le, Ne, X);
            case "TSClassImplements":
              return [X("expression"), X("typeParameters")];
            case "TSTypeParameterDeclaration":
            case "TSTypeParameterInstantiation":
              return b(le, Ne, X, "params");
            case "TSTypeParameter":
              return S(le, Ne, X);
            case "TSSatisfiesExpression":
            case "TSAsExpression": {
              let tt = re.type === "TSAsExpression" ? "as" : "satisfies";
              we.push(X("expression"), ` ${tt} `, X("typeAnnotation"));
              let oe = le.getParentNode();
              return T(oe) && oe.callee === re || j(oe) && oe.object === re ? f([g([a, ...we]), a]) : we;
            }
            case "TSArrayType":
              return [X("elementType"), "[]"];
            case "TSPropertySignature":
              return re.readonly && we.push("readonly "), we.push(B(le, Ne, X), _(le)), re.typeAnnotation && we.push(": ", X("typeAnnotation")), re.initializer && we.push(" = ", X("initializer")), we;
            case "TSParameterProperty":
              return re.accessibility && we.push(re.accessibility + " "), re.export && we.push("export "), re.static && we.push("static "), re.override && we.push("override "), re.readonly && we.push("readonly "), we.push(X("parameter")), we;
            case "TSTypeQuery":
              return ["typeof ", X("exprName"), X("typeParameters")];
            case "TSIndexSignature": {
              let tt = le.getParentNode(), oe = re.parameters.length > 1 ? C(y(Ne) ? "," : "") : "", H = f([g([a, p([", ", a], le.map(X, "parameters"))]), oe, a]);
              return [re.export ? "export " : "", re.accessibility ? [re.accessibility, " "] : "", re.static ? "static " : "", re.readonly ? "readonly " : "", re.declare ? "declare " : "", "[", re.parameters ? H : "", re.typeAnnotation ? "]: " : "]", re.typeAnnotation ? X("typeAnnotation") : "", tt.type === "ClassBody" ? Te : ""];
            }
            case "TSTypePredicate":
              return [re.asserts ? "asserts " : "", X("parameterName"), re.typeAnnotation ? [" is ", X("typeAnnotation")] : ""];
            case "TSNonNullExpression":
              return [X("expression"), "!"];
            case "TSImportType":
              return [re.isTypeOf ? "typeof " : "", "import(", X(re.parameter ? "parameter" : "argument"), ")", re.qualifier ? [".", X("qualifier")] : "", b(le, Ne, X, "typeParameters")];
            case "TSLiteralType":
              return X("literal");
            case "TSIndexedAccessType":
              return U(le, Ne, X);
            case "TSConstructSignatureDeclaration":
            case "TSCallSignatureDeclaration":
            case "TSConstructorType": {
              if (re.type === "TSConstructorType" && re.abstract && we.push("abstract "), re.type !== "TSCallSignatureDeclaration" && we.push("new "), we.push(f(Q(le, X, Ne, !1, !0))), re.returnType || re.typeAnnotation) {
                let tt = re.type === "TSConstructorType";
                we.push(tt ? " => " : ": ", X("returnType"), X("typeAnnotation"));
              }
              return we;
            }
            case "TSTypeOperator":
              return [re.operator, " ", X("typeAnnotation")];
            case "TSMappedType": {
              let tt = d(Ne.originalText, k(re), L(re));
              return f(["{", g([Ne.bracketSpacing ? u : a, X("typeParameter"), re.optional ? D(re.optional, "?") : "", re.typeAnnotation ? ": " : "", X("typeAnnotation"), C(Te)]), i(le, Ne, !0), Ne.bracketSpacing ? u : a, "}"], { shouldBreak: tt });
            }
            case "TSMethodSignature": {
              let tt = re.kind && re.kind !== "method" ? `${re.kind} ` : "";
              we.push(re.accessibility ? [re.accessibility, " "] : "", tt, re.export ? "export " : "", re.static ? "static " : "", re.readonly ? "readonly " : "", re.abstract ? "abstract " : "", re.declare ? "declare " : "", re.computed ? "[" : "", X("key"), re.computed ? "]" : "", _(le));
              let oe = Q(le, X, Ne, !1, !0), H = re.returnType ? "returnType" : "typeAnnotation", ce = re[H], De = ce ? X(H) : "", Be = v(re, De);
              return we.push(Be ? f(oe) : oe), ce && we.push(": ", f(De)), f(we);
            }
            case "TSNamespaceExportDeclaration":
              return we.push("export as namespace ", X("id")), Ne.semi && we.push(";"), f(we);
            case "TSEnumDeclaration":
              return re.declare && we.push("declare "), re.modifiers && we.push(R(le, Ne, X)), re.const && we.push("const "), we.push("enum ", X("id"), " "), re.members.length === 0 ? we.push(f(["{", i(le, Ne), a, "}"])) : we.push(f(["{", g([o, E(le, Ne, "members", X), y(Ne, "es5") ? "," : ""]), i(le, Ne, !0), o, "}"])), we;
            case "TSEnumMember":
              return re.computed ? we.push("[", X("id"), "]") : we.push(X("id")), re.initializer && we.push(" = ", X("initializer")), we;
            case "TSImportEqualsDeclaration":
              return re.isExport && we.push("export "), we.push("import "), re.importKind && re.importKind !== "value" && we.push(re.importKind, " "), we.push(X("id"), " = ", X("moduleReference")), Ne.semi && we.push(";"), f(we);
            case "TSExternalModuleReference":
              return ["require(", X("expression"), ")"];
            case "TSModuleDeclaration": {
              let tt = le.getParentNode(), oe = A(re.id), H = tt.type === "TSModuleDeclaration", ce = re.body && re.body.type === "TSModuleDeclaration";
              if (H)
                we.push(".");
              else {
                re.declare && we.push("declare "), we.push(R(le, Ne, X));
                let De = Ne.originalText.slice(k(re), k(re.id));
                re.id.type === "Identifier" && re.id.name === "global" && !/namespace|module/.test(De) || we.push(oe || /(?:^|\s)module(?:\s|$)/.test(De) ? "module " : "namespace ");
              }
              return we.push(X("id")), ce ? we.push(X("body")) : re.body ? we.push(" ", f(X("body"))) : we.push(Te), we;
            }
            case "TSConditionalType":
              return O(le, Ne, X);
            case "TSInferType":
              return ["infer", " ", X("typeParameter")];
            case "TSIntersectionType":
              return te(le, Ne, X);
            case "TSUnionType":
              return K(le, Ne, X);
            case "TSFunctionType":
              return ie(le, Ne, X);
            case "TSTupleType":
              return q(le, Ne, X);
            case "TSTypeReference":
              return [X("typeName"), b(le, Ne, X, "typeParameters")];
            case "TSTypeAnnotation":
              return X("typeAnnotation");
            case "TSEmptyBodyFunctionExpression":
              return $(le, Ne, X);
            case "TSJSDocAllType":
              return "*";
            case "TSJSDocUnknownType":
              return "?";
            case "TSJSDocNullableType":
              return se(le, X, "?");
            case "TSJSDocNonNullableType":
              return se(le, X, "!");
            case "TSInstantiationExpression":
              return [X("expression"), X("typeParameters")];
            default:
              throw new Error(`Unknown TypeScript node type: ${JSON.stringify(re.type)}.`);
          }
        }
        m.exports = { printTypescript: ye };
      } }), Wi = ee({ "src/language-js/print/comment.js"(l, m) {
        ne();
        var { hasNewline: i } = yn(), { builders: { join: d, hardline: p }, utils: { replaceTextEndOfLine: u } } = Ut(), { isLineComment: o } = In(), { locStart: a, locEnd: f } = Nr(), g = Au();
        function x(D, y) {
          let T = D.getValue();
          if (o(T))
            return y.originalText.slice(a(T), f(T)).trimEnd();
          if (g(T)) {
            if (C(T)) {
              let k = A(T);
              return T.trailing && !i(y.originalText, a(T), { backwards: !0 }) ? [p, k] : k;
            }
            let j = f(T), M = y.originalText.slice(j - 3, j) === "*-/";
            return ["/*", u(T.value), M ? "*-/" : "*/"];
          }
          throw new Error("Not a comment: " + JSON.stringify(T));
        }
        function C(D) {
          let y = `*${D.value}*`.split(`
`);
          return y.length > 1 && y.every((T) => T.trim()[0] === "*");
        }
        function A(D) {
          let y = D.value.split(`
`);
          return ["/*", d(p, y.map((T, j) => j === 0 ? T.trimEnd() : " " + (j < y.length - 1 ? T.trim() : T.trimStart()))), "*/"];
        }
        m.exports = { printComment: x };
      } }), qr = ee({ "src/language-js/print/literal.js"(l, m) {
        ne();
        var { printString: i, printNumber: d } = yn(), { replaceTextEndOfLine: p } = _i(), { printDirective: u } = zr();
        function o(x, C) {
          let A = x.getNode();
          switch (A.type) {
            case "RegExpLiteral":
              return g(A);
            case "BigIntLiteral":
              return f(A.bigint || A.extra.raw);
            case "NumericLiteral":
              return d(A.extra.raw);
            case "StringLiteral":
              return p(i(A.extra.raw, C));
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return String(A.value);
            case "DecimalLiteral":
              return d(A.value) + "m";
            case "Literal": {
              if (A.regex)
                return g(A.regex);
              if (A.bigint)
                return f(A.raw);
              if (A.decimal)
                return d(A.decimal) + "m";
              let { value: D } = A;
              return typeof D == "number" ? d(A.raw) : typeof D == "string" ? a(x) ? u(A.raw, C) : p(i(A.raw, C)) : String(D);
            }
          }
        }
        function a(x) {
          if (x.getName() !== "expression")
            return;
          let C = x.getParentNode();
          return C.type === "ExpressionStatement" && C.directive;
        }
        function f(x) {
          return x.toLowerCase();
        }
        function g(x) {
          let { pattern: C, flags: A } = x;
          return A = [...A].sort().join(""), `/${C}/${A}`;
        }
        m.exports = { printLiteral: o };
      } }), ca = ee({ "src/language-js/printer-estree.js"(l, m) {
        ne();
        var { printDanglingComments: i } = ur(), { hasNewline: d } = yn(), { builders: { join: p, line: u, hardline: o, softline: a, group: f, indent: g }, utils: { replaceTextEndOfLine: x } } = Ut(), C = rl(), A = ul(), { insertPragma: D } = So(), y = ua(), T = Yu(), j = ia(), { hasFlowShorthandAnnotationComment: M, hasComment: k, CommentCheckFlags: L, isTheOnlyJsxElementInMarkdown: _, isLineComment: R, isNextLineEmpty: O, needsHardlineAfterDanglingComment: Q, hasIgnoreComment: v, isCallExpression: P, isMemberExpression: E, markerForIfWithoutBlockAndSameLineComment: w } = In(), { locStart: c, locEnd: F } = Nr(), S = Au(), { printHtmlBinding: b, isVueEventBindingExpression: B } = hc(), { printAngular: I } = yc(), { printJsx: $, hasJsxIgnoreComment: G } = Ec(), { printFlow: W } = Zn(), { printTypescript: J } = vi(), { printOptionalToken: te, printBindExpressionCallee: K, printTypeAnnotation: ie, adjustClause: q, printRestSpread: U, printDefiniteToken: se, printDirective: ye } = zr(), { printImportDeclaration: le, printExportDeclaration: Ne, printExportAllDeclaration: X, printModuleSpecifier: re } = Ei(), { printTernary: Te } = Lu(), { printTemplateLiteral: we } = Di(), { printArray: tt } = iu(), { printObject: oe } = Tu(), { printClass: H, printClassMethod: ce, printClassProperty: De } = ei(), { printProperty: Be } = Du(), { printFunction: Ke, printArrowFunction: ze, printMethod: Ct, printReturnStatement: en, printThrowStatement: Gt } = Hu(), { printCallExpression: ft } = Ji(), { printVariableDeclarator: _t, printAssignmentExpression: Fe } = Qr(), { printBinaryishExpression: Y } = oa(), { printSwitchCaseConsequent: ke } = br(), { printMemberExpression: ue } = yi(), { printBlock: xe, printBlockBody: nt } = Ur(), { printComment: Ze } = Wi(), { printLiteral: _e } = qr(), { printDecorators: N } = Zu();
        function Z(qe, gt, Ue, qn) {
          let ct = Ee(qe, gt, Ue, qn);
          if (!ct)
            return "";
          let Ln = qe.getValue(), { type: pt } = Ln;
          if (pt === "ClassMethod" || pt === "ClassPrivateMethod" || pt === "ClassProperty" || pt === "ClassAccessorProperty" || pt === "AccessorProperty" || pt === "TSAbstractAccessorProperty" || pt === "PropertyDefinition" || pt === "TSAbstractPropertyDefinition" || pt === "ClassPrivateProperty" || pt === "MethodDefinition" || pt === "TSAbstractMethodDefinition" || pt === "TSDeclareMethod")
            return ct;
          let Mt = [ct], Qt = N(qe, gt, Ue), bn = Ln.type === "ClassExpression" && Qt;
          if (Qt && (Mt = [...Qt, ct], !bn))
            return f(Mt);
          if (!T(qe, gt))
            return qn && qn.needsSemi && Mt.unshift(";"), Mt.length === 1 && Mt[0] === ct ? ct : Mt;
          if (bn && (Mt = [g([u, ...Mt])]), Mt.unshift("("), qn && qn.needsSemi && Mt.unshift(";"), M(Ln)) {
            let [mt] = Ln.trailingComments;
            Mt.push(" /*", mt.value.trimStart(), "*/"), mt.printed = !0;
          }
          return bn && Mt.push(u), Mt.push(")"), Mt;
        }
        function Ee(qe, gt, Ue, qn) {
          let ct = qe.getValue(), Ln = gt.semi ? ";" : "";
          if (!ct)
            return "";
          if (typeof ct == "string")
            return ct;
          for (let Mt of [_e, b, I, $, W, J]) {
            let Qt = Mt(qe, gt, Ue);
            if (typeof Qt < "u")
              return Qt;
          }
          let pt = [];
          switch (ct.type) {
            case "JsExpressionRoot":
              return Ue("node");
            case "JsonRoot":
              return [Ue("node"), o];
            case "File":
              return ct.program && ct.program.interpreter && pt.push(Ue(["program", "interpreter"])), pt.push(Ue("program")), pt;
            case "Program":
              return nt(qe, gt, Ue);
            case "EmptyStatement":
              return "";
            case "ExpressionStatement": {
              if (gt.parser === "__vue_event_binding" || gt.parser === "__vue_ts_event_binding") {
                let Qt = qe.getParentNode();
                if (Qt.type === "Program" && Qt.body.length === 1 && Qt.body[0] === ct)
                  return [Ue("expression"), B(ct.expression) ? ";" : ""];
              }
              let Mt = i(qe, gt, !0, (Qt) => {
                let { marker: bn } = Qt;
                return bn === w;
              });
              return [Ue("expression"), _(gt, qe) ? "" : Ln, Mt ? [" ", Mt] : ""];
            }
            case "ParenthesizedExpression":
              return !k(ct.expression) && (ct.expression.type === "ObjectExpression" || ct.expression.type === "ArrayExpression") ? ["(", Ue("expression"), ")"] : f(["(", g([a, Ue("expression")]), a, ")"]);
            case "AssignmentExpression":
              return Fe(qe, gt, Ue);
            case "VariableDeclarator":
              return _t(qe, gt, Ue);
            case "BinaryExpression":
            case "LogicalExpression":
              return Y(qe, gt, Ue);
            case "AssignmentPattern":
              return [Ue("left"), " = ", Ue("right")];
            case "OptionalMemberExpression":
            case "MemberExpression":
              return ue(qe, gt, Ue);
            case "MetaProperty":
              return [Ue("meta"), ".", Ue("property")];
            case "BindExpression":
              return ct.object && pt.push(Ue("object")), pt.push(f(g([a, K(qe, gt, Ue)]))), pt;
            case "Identifier":
              return [ct.name, te(qe), se(qe), ie(qe, gt, Ue)];
            case "V8IntrinsicIdentifier":
              return ["%", ct.name];
            case "SpreadElement":
            case "SpreadElementPattern":
            case "SpreadProperty":
            case "SpreadPropertyPattern":
            case "RestElement":
              return U(qe, gt, Ue);
            case "FunctionDeclaration":
            case "FunctionExpression":
              return Ke(qe, Ue, gt, qn);
            case "ArrowFunctionExpression":
              return ze(qe, gt, Ue, qn);
            case "YieldExpression":
              return pt.push("yield"), ct.delegate && pt.push("*"), ct.argument && pt.push(" ", Ue("argument")), pt;
            case "AwaitExpression": {
              if (pt.push("await"), ct.argument) {
                pt.push(" ", Ue("argument"));
                let Mt = qe.getParentNode();
                if (P(Mt) && Mt.callee === ct || E(Mt) && Mt.object === ct) {
                  pt = [g([a, ...pt]), a];
                  let Qt = qe.findAncestor((bn) => bn.type === "AwaitExpression" || bn.type === "BlockStatement");
                  if (!Qt || Qt.type !== "AwaitExpression")
                    return f(pt);
                }
              }
              return pt;
            }
            case "ExportDefaultDeclaration":
            case "ExportNamedDeclaration":
              return Ne(qe, gt, Ue);
            case "ExportAllDeclaration":
              return X(qe, gt, Ue);
            case "ImportDeclaration":
              return le(qe, gt, Ue);
            case "ImportSpecifier":
            case "ExportSpecifier":
            case "ImportNamespaceSpecifier":
            case "ExportNamespaceSpecifier":
            case "ImportDefaultSpecifier":
            case "ExportDefaultSpecifier":
              return re(qe, gt, Ue);
            case "ImportAttribute":
              return [Ue("key"), ": ", Ue("value")];
            case "Import":
              return "import";
            case "BlockStatement":
            case "StaticBlock":
            case "ClassBody":
              return xe(qe, gt, Ue);
            case "ThrowStatement":
              return Gt(qe, gt, Ue);
            case "ReturnStatement":
              return en(qe, gt, Ue);
            case "NewExpression":
            case "ImportExpression":
            case "OptionalCallExpression":
            case "CallExpression":
              return ft(qe, gt, Ue);
            case "ObjectExpression":
            case "ObjectPattern":
            case "RecordExpression":
              return oe(qe, gt, Ue);
            case "ObjectProperty":
            case "Property":
              return ct.method || ct.kind === "get" || ct.kind === "set" ? Ct(qe, gt, Ue) : Be(qe, gt, Ue);
            case "ObjectMethod":
              return Ct(qe, gt, Ue);
            case "Decorator":
              return ["@", Ue("expression")];
            case "ArrayExpression":
            case "ArrayPattern":
            case "TupleExpression":
              return tt(qe, gt, Ue);
            case "SequenceExpression": {
              let Mt = qe.getParentNode(0);
              if (Mt.type === "ExpressionStatement" || Mt.type === "ForStatement") {
                let Qt = [];
                return qe.each((bn, mt) => {
                  mt === 0 ? Qt.push(Ue()) : Qt.push(",", g([u, Ue()]));
                }, "expressions"), f(Qt);
              }
              return f(p([",", u], qe.map(Ue, "expressions")));
            }
            case "ThisExpression":
              return "this";
            case "Super":
              return "super";
            case "Directive":
              return [Ue("value"), Ln];
            case "DirectiveLiteral":
              return ye(ct.extra.raw, gt);
            case "UnaryExpression":
              return pt.push(ct.operator), /[a-z]$/.test(ct.operator) && pt.push(" "), k(ct.argument) ? pt.push(f(["(", g([a, Ue("argument")]), a, ")"])) : pt.push(Ue("argument")), pt;
            case "UpdateExpression":
              return pt.push(Ue("argument"), ct.operator), ct.prefix && pt.reverse(), pt;
            case "ConditionalExpression":
              return Te(qe, gt, Ue);
            case "VariableDeclaration": {
              let Mt = qe.map(Ue, "declarations"), Qt = qe.getParentNode(), bn = Qt.type === "ForStatement" || Qt.type === "ForInStatement" || Qt.type === "ForOfStatement", mt = ct.declarations.some((St) => St.init), Jt;
              return Mt.length === 1 && !k(ct.declarations[0]) ? Jt = Mt[0] : Mt.length > 0 && (Jt = g(Mt[0])), pt = [ct.declare ? "declare " : "", ct.kind, Jt ? [" ", Jt] : "", g(Mt.slice(1).map((St) => [",", mt && !bn ? o : u, St]))], bn && Qt.body !== ct || pt.push(Ln), f(pt);
            }
            case "WithStatement":
              return f(["with (", Ue("object"), ")", q(ct.body, Ue("body"))]);
            case "IfStatement": {
              let Mt = q(ct.consequent, Ue("consequent")), Qt = f(["if (", f([g([a, Ue("test")]), a]), ")", Mt]);
              if (pt.push(Qt), ct.alternate) {
                let bn = k(ct.consequent, L.Trailing | L.Line) || Q(ct), mt = ct.consequent.type === "BlockStatement" && !bn;
                pt.push(mt ? " " : o), k(ct, L.Dangling) && pt.push(i(qe, gt, !0), bn ? o : " "), pt.push("else", f(q(ct.alternate, Ue("alternate"), ct.alternate.type === "IfStatement")));
              }
              return pt;
            }
            case "ForStatement": {
              let Mt = q(ct.body, Ue("body")), Qt = i(qe, gt, !0), bn = Qt ? [Qt, a] : "";
              return !ct.init && !ct.test && !ct.update ? [bn, f(["for (;;)", Mt])] : [bn, f(["for (", f([g([a, Ue("init"), ";", u, Ue("test"), ";", u, Ue("update")]), a]), ")", Mt])];
            }
            case "WhileStatement":
              return f(["while (", f([g([a, Ue("test")]), a]), ")", q(ct.body, Ue("body"))]);
            case "ForInStatement":
              return f(["for (", Ue("left"), " in ", Ue("right"), ")", q(ct.body, Ue("body"))]);
            case "ForOfStatement":
              return f(["for", ct.await ? " await" : "", " (", Ue("left"), " of ", Ue("right"), ")", q(ct.body, Ue("body"))]);
            case "DoWhileStatement": {
              let Mt = q(ct.body, Ue("body"));
              return pt = [f(["do", Mt])], ct.body.type === "BlockStatement" ? pt.push(" ") : pt.push(o), pt.push("while (", f([g([a, Ue("test")]), a]), ")", Ln), pt;
            }
            case "DoExpression":
              return [ct.async ? "async " : "", "do ", Ue("body")];
            case "BreakStatement":
              return pt.push("break"), ct.label && pt.push(" ", Ue("label")), pt.push(Ln), pt;
            case "ContinueStatement":
              return pt.push("continue"), ct.label && pt.push(" ", Ue("label")), pt.push(Ln), pt;
            case "LabeledStatement":
              return ct.body.type === "EmptyStatement" ? [Ue("label"), ":;"] : [Ue("label"), ": ", Ue("body")];
            case "TryStatement":
              return ["try ", Ue("block"), ct.handler ? [" ", Ue("handler")] : "", ct.finalizer ? [" finally ", Ue("finalizer")] : ""];
            case "CatchClause":
              if (ct.param) {
                let Mt = k(ct.param, (bn) => !S(bn) || bn.leading && d(gt.originalText, F(bn)) || bn.trailing && d(gt.originalText, c(bn), { backwards: !0 })), Qt = Ue("param");
                return ["catch ", Mt ? ["(", g([a, Qt]), a, ") "] : ["(", Qt, ") "], Ue("body")];
              }
              return ["catch ", Ue("body")];
            case "SwitchStatement":
              return [f(["switch (", g([a, Ue("discriminant")]), a, ")"]), " {", ct.cases.length > 0 ? g([o, p(o, qe.map((Mt, Qt, bn) => {
                let mt = Mt.getValue();
                return [Ue(), Qt !== bn.length - 1 && O(mt, gt) ? o : ""];
              }, "cases"))]) : "", o, "}"];
            case "SwitchCase": {
              ct.test ? pt.push("case ", Ue("test"), ":") : pt.push("default:"), k(ct, L.Dangling) && pt.push(" ", i(qe, gt, !0));
              let Mt = ct.consequent.filter((Qt) => Qt.type !== "EmptyStatement");
              if (Mt.length > 0) {
                let Qt = ke(qe, gt, Ue);
                pt.push(Mt.length === 1 && Mt[0].type === "BlockStatement" ? [" ", Qt] : g([o, Qt]));
              }
              return pt;
            }
            case "DebuggerStatement":
              return ["debugger", Ln];
            case "ClassDeclaration":
            case "ClassExpression":
              return H(qe, gt, Ue);
            case "ClassMethod":
            case "ClassPrivateMethod":
            case "MethodDefinition":
              return ce(qe, gt, Ue);
            case "ClassProperty":
            case "PropertyDefinition":
            case "ClassPrivateProperty":
            case "ClassAccessorProperty":
            case "AccessorProperty":
              return De(qe, gt, Ue);
            case "TemplateElement":
              return x(ct.value.raw);
            case "TemplateLiteral":
              return we(qe, Ue, gt);
            case "TaggedTemplateExpression":
              return [Ue("tag"), Ue("typeParameters"), Ue("quasi")];
            case "PrivateIdentifier":
              return ["#", Ue("name")];
            case "PrivateName":
              return ["#", Ue("id")];
            case "InterpreterDirective":
              return pt.push("#!", ct.value, o), O(ct, gt) && pt.push(o), pt;
            case "TopicReference":
              return "%";
            case "ArgumentPlaceholder":
              return "?";
            case "ModuleExpression": {
              pt.push("module {");
              let Mt = Ue("body");
              return Mt && pt.push(g([o, Mt]), o), pt.push("}"), pt;
            }
            default:
              throw new Error("unknown type: " + JSON.stringify(ct.type));
          }
        }
        function he(qe) {
          return qe.type && !S(qe) && !R(qe) && qe.type !== "EmptyStatement" && qe.type !== "TemplateElement" && qe.type !== "Import" && qe.type !== "TSEmptyBodyFunctionExpression";
        }
        m.exports = { preprocess: j, print: Z, embed: C, insertPragma: D, massageAstNode: A, hasPrettierIgnore(qe) {
          return v(qe) || G(qe);
        }, willPrintOwnComments: y.willPrintOwnComments, canAttachComment: he, printComment: Ze, isBlockComment: S, handleComments: { avoidAstMutation: !0, ownLine: y.handleOwnLineComment, endOfLine: y.handleEndOfLineComment, remaining: y.handleRemainingComment }, getCommentChildNodes: y.getCommentChildNodes };
      } }), cl = ee({ "src/language-js/printer-estree-json.js"(l, m) {
        ne();
        var { builders: { hardline: i, indent: d, join: p } } = Ut(), u = ia();
        function o(x, C, A) {
          let D = x.getValue();
          switch (D.type) {
            case "JsonRoot":
              return [A("node"), i];
            case "ArrayExpression": {
              if (D.elements.length === 0)
                return "[]";
              let y = x.map(() => x.getValue() === null ? "null" : A(), "elements");
              return ["[", d([i, p([",", i], y)]), i, "]"];
            }
            case "ObjectExpression":
              return D.properties.length === 0 ? "{}" : ["{", d([i, p([",", i], x.map(A, "properties"))]), i, "}"];
            case "ObjectProperty":
              return [A("key"), ": ", A("value")];
            case "UnaryExpression":
              return [D.operator === "+" ? "" : D.operator, A("argument")];
            case "NullLiteral":
              return "null";
            case "BooleanLiteral":
              return D.value ? "true" : "false";
            case "StringLiteral":
              return JSON.stringify(D.value);
            case "NumericLiteral":
              return a(x) ? JSON.stringify(String(D.value)) : JSON.stringify(D.value);
            case "Identifier":
              return a(x) ? JSON.stringify(D.name) : D.name;
            case "TemplateLiteral":
              return A(["quasis", 0]);
            case "TemplateElement":
              return JSON.stringify(D.value.cooked);
            default:
              throw new Error("unknown type: " + JSON.stringify(D.type));
          }
        }
        function a(x) {
          return x.getName() === "key" && x.getParentNode().type === "ObjectProperty";
        }
        var f = /* @__PURE__ */ new Set(["start", "end", "extra", "loc", "comments", "leadingComments", "trailingComments", "innerComments", "errors", "range", "tokens"]);
        function g(x, C) {
          let { type: A } = x;
          if (A === "ObjectProperty") {
            let { key: D } = x;
            D.type === "Identifier" ? C.key = { type: "StringLiteral", value: D.name } : D.type === "NumericLiteral" && (C.key = { type: "StringLiteral", value: String(D.value) });
            return;
          }
          if (A === "UnaryExpression" && x.operator === "+")
            return C.argument;
          if (A === "ArrayExpression") {
            for (let [D, y] of x.elements.entries())
              y === null && C.elements.splice(D, 0, { type: "NullLiteral" });
            return;
          }
          if (A === "TemplateLiteral")
            return { type: "StringLiteral", value: x.quasis[0].value.cooked };
        }
        g.ignoredProperties = f, m.exports = { preprocess: u, print: o, massageAstNode: g };
      } }), Ci = ee({ "src/common/common-options.js"(l, m) {
        ne();
        var i = "Common";
        m.exports = { bracketSpacing: { since: "0.0.0", category: i, type: "boolean", default: !0, description: "Print spaces between brackets.", oppositeDescription: "Do not print spaces between brackets." }, singleQuote: { since: "0.0.0", category: i, type: "boolean", default: !1, description: "Use single quotes instead of double quotes." }, proseWrap: { since: "1.8.2", category: i, type: "choice", default: [{ since: "1.8.2", value: !0 }, { since: "1.9.0", value: "preserve" }], description: "How to wrap prose.", choices: [{ since: "1.9.0", value: "always", description: "Wrap prose if it exceeds the print width." }, { since: "1.9.0", value: "never", description: "Do not wrap prose." }, { since: "1.9.0", value: "preserve", description: "Wrap prose as-is." }] }, bracketSameLine: { since: "2.4.0", category: i, type: "boolean", default: !1, description: "Put > of opening tags on the last line instead of on a new line." }, singleAttributePerLine: { since: "2.6.0", category: i, type: "boolean", default: !1, description: "Enforce single attribute per line in HTML, Vue and JSX." } };
      } }), pa = ee({ "src/language-js/options.js"(l, m) {
        ne();
        var i = Ci(), d = "JavaScript";
        m.exports = { arrowParens: { since: "1.9.0", category: d, type: "choice", default: [{ since: "1.9.0", value: "avoid" }, { since: "2.0.0", value: "always" }], description: "Include parentheses around a sole arrow function parameter.", choices: [{ value: "always", description: "Always include parens. Example: `(x) => x`" }, { value: "avoid", description: "Omit parens when possible. Example: `x => x`" }] }, bracketSameLine: i.bracketSameLine, bracketSpacing: i.bracketSpacing, jsxBracketSameLine: { since: "0.17.0", category: d, type: "boolean", description: "Put > on the last line instead of at a new line.", deprecated: "2.4.0" }, semi: { since: "1.0.0", category: d, type: "boolean", default: !0, description: "Print semicolons.", oppositeDescription: "Do not print semicolons, except at the beginning of lines which may need them." }, singleQuote: i.singleQuote, jsxSingleQuote: { since: "1.15.0", category: d, type: "boolean", default: !1, description: "Use single quotes in JSX." }, quoteProps: { since: "1.17.0", category: d, type: "choice", default: "as-needed", description: "Change when properties in objects are quoted.", choices: [{ value: "as-needed", description: "Only add quotes around object properties where required." }, { value: "consistent", description: "If at least one property in an object requires quotes, quote all properties." }, { value: "preserve", description: "Respect the input use of quotes in object properties." }] }, trailingComma: { since: "0.0.0", category: d, type: "choice", default: [{ since: "0.0.0", value: !1 }, { since: "0.19.0", value: "none" }, { since: "2.0.0", value: "es5" }], description: "Print trailing commas wherever possible when multi-line.", choices: [{ value: "es5", description: "Trailing commas where valid in ES5 (objects, arrays, etc.)" }, { value: "none", description: "No trailing commas." }, { value: "all", description: "Trailing commas wherever possible (including function arguments)." }] }, singleAttributePerLine: i.singleAttributePerLine };
      } }), pl = ee({ "src/language-js/parse/parsers.js"() {
        ne();
      } }), gu = ee({ "node_modules/linguist-languages/data/JavaScript.json"(l, m) {
        m.exports = { name: "JavaScript", type: "programming", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", color: "#f1e05a", aliases: ["js", "node"], extensions: [".js", "._js", ".bones", ".cjs", ".es", ".es6", ".frag", ".gs", ".jake", ".javascript", ".jsb", ".jscad", ".jsfl", ".jslib", ".jsm", ".jspre", ".jss", ".jsx", ".mjs", ".njs", ".pac", ".sjs", ".ssjs", ".xsjs", ".xsjslib"], filenames: ["Jakefile"], interpreters: ["chakra", "d8", "gjs", "js", "node", "nodejs", "qjs", "rhino", "v8", "v8-shell"], languageId: 183 };
      } }), da = ee({ "node_modules/linguist-languages/data/TypeScript.json"(l, m) {
        m.exports = { name: "TypeScript", type: "programming", color: "#3178c6", aliases: ["ts"], interpreters: ["deno", "ts-node"], extensions: [".ts", ".cts", ".mts"], tmScope: "source.ts", aceMode: "typescript", codemirrorMode: "javascript", codemirrorMimeType: "application/typescript", languageId: 378 };
      } }), es = ee({ "node_modules/linguist-languages/data/TSX.json"(l, m) {
        m.exports = { name: "TSX", type: "programming", color: "#3178c6", group: "TypeScript", extensions: [".tsx"], tmScope: "source.tsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", languageId: 94901924 };
      } }), ts = ee({ "node_modules/linguist-languages/data/JSON.json"(l, m) {
        m.exports = { name: "JSON", type: "data", color: "#292929", tmScope: "source.json", aceMode: "json", codemirrorMode: "javascript", codemirrorMimeType: "application/json", aliases: ["geojson", "jsonl", "topojson"], extensions: [".json", ".4DForm", ".4DProject", ".avsc", ".geojson", ".gltf", ".har", ".ice", ".JSON-tmLanguage", ".jsonl", ".mcmeta", ".tfstate", ".tfstate.backup", ".topojson", ".webapp", ".webmanifest", ".yy", ".yyp"], filenames: [".arcconfig", ".auto-changelog", ".c8rc", ".htmlhintrc", ".imgbotconfig", ".nycrc", ".tern-config", ".tern-project", ".watchmanconfig", "Pipfile.lock", "composer.lock", "mcmod.info"], languageId: 174 };
      } }), vc = ee({ "node_modules/linguist-languages/data/JSON with Comments.json"(l, m) {
        m.exports = { name: "JSON with Comments", type: "data", color: "#292929", group: "JSON", tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "text/javascript", aliases: ["jsonc"], extensions: [".jsonc", ".code-snippets", ".sublime-build", ".sublime-commands", ".sublime-completions", ".sublime-keymap", ".sublime-macro", ".sublime-menu", ".sublime-mousemap", ".sublime-project", ".sublime-settings", ".sublime-theme", ".sublime-workspace", ".sublime_metrics", ".sublime_session"], filenames: [".babelrc", ".devcontainer.json", ".eslintrc.json", ".jscsrc", ".jshintrc", ".jslintrc", "api-extractor.json", "devcontainer.json", "jsconfig.json", "language-configuration.json", "tsconfig.json", "tslint.json"], languageId: 423 };
      } }), ti = ee({ "node_modules/linguist-languages/data/JSON5.json"(l, m) {
        m.exports = { name: "JSON5", type: "data", color: "#267CB9", extensions: [".json5"], tmScope: "source.js", aceMode: "javascript", codemirrorMode: "javascript", codemirrorMimeType: "application/json", languageId: 175 };
      } }), Xi = ee({ "src/language-js/index.js"(l, m) {
        ne();
        var i = uu(), d = ca(), p = cl(), u = pa(), o = pl(), a = [i(gu(), (g) => ({ since: "0.0.0", parsers: ["babel", "acorn", "espree", "meriyah", "babel-flow", "babel-ts", "flow", "typescript"], vscodeLanguageIds: ["javascript", "mongo"], interpreters: [...g.interpreters, "zx"], extensions: [...g.extensions.filter((x) => x !== ".jsx"), ".wxs"] })), i(gu(), () => ({ name: "Flow", since: "0.0.0", parsers: ["flow", "babel-flow"], vscodeLanguageIds: ["javascript"], aliases: [], filenames: [], extensions: [".js.flow"] })), i(gu(), () => ({ name: "JSX", since: "0.0.0", parsers: ["babel", "babel-flow", "babel-ts", "flow", "typescript", "espree", "meriyah"], vscodeLanguageIds: ["javascriptreact"], aliases: void 0, filenames: void 0, extensions: [".jsx"], group: "JavaScript", interpreters: void 0, tmScope: "source.js.jsx", aceMode: "javascript", codemirrorMode: "jsx", codemirrorMimeType: "text/jsx", color: void 0 })), i(da(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescript"] })), i(es(), () => ({ since: "1.4.0", parsers: ["typescript", "babel-ts"], vscodeLanguageIds: ["typescriptreact"] })), i(ts(), () => ({ name: "JSON.stringify", since: "1.13.0", parsers: ["json-stringify"], vscodeLanguageIds: ["json"], extensions: [".importmap"], filenames: ["package.json", "package-lock.json", "composer.json"] })), i(ts(), (g) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["json"], extensions: g.extensions.filter((x) => x !== ".jsonl") })), i(vc(), (g) => ({ since: "1.5.0", parsers: ["json"], vscodeLanguageIds: ["jsonc"], filenames: [...g.filenames, ".eslintrc", ".swcrc"] })), i(ti(), () => ({ since: "1.13.0", parsers: ["json5"], vscodeLanguageIds: ["json5"] }))], f = { estree: d, "estree-json": p };
        m.exports = { languages: a, options: u, printers: f, parsers: o };
      } }), Qi = ee({ "src/language-css/clean.js"(l, m) {
        ne();
        var { isFrontMatterNode: i } = yn(), d = sr(), p = /* @__PURE__ */ new Set(["raw", "raws", "sourceIndex", "source", "before", "after", "trailingComma"]);
        function u(a, f, g) {
          if (i(a) && a.lang === "yaml" && delete f.value, a.type === "css-comment" && g.type === "css-root" && g.nodes.length > 0 && ((g.nodes[0] === a || i(g.nodes[0]) && g.nodes[1] === a) && (delete f.text, /^\*\s*@(?:format|prettier)\s*$/.test(a.text)) || g.type === "css-root" && d(g.nodes) === a))
            return null;
          if (a.type === "value-root" && delete f.text, (a.type === "media-query" || a.type === "media-query-list" || a.type === "media-feature-expression") && delete f.value, a.type === "css-rule" && delete f.params, a.type === "selector-combinator" && (f.value = f.value.replace(/\s+/g, " ")), a.type === "media-feature" && (f.value = f.value.replace(/ /g, "")), (a.type === "value-word" && (a.isColor && a.isHex || ["initial", "inherit", "unset", "revert"].includes(f.value.replace().toLowerCase())) || a.type === "media-feature" || a.type === "selector-root-invalid" || a.type === "selector-pseudo") && (f.value = f.value.toLowerCase()), a.type === "css-decl" && (f.prop = f.prop.toLowerCase()), (a.type === "css-atrule" || a.type === "css-import") && (f.name = f.name.toLowerCase()), a.type === "value-number" && (f.unit = f.unit.toLowerCase()), (a.type === "media-feature" || a.type === "media-keyword" || a.type === "media-type" || a.type === "media-unknown" || a.type === "media-url" || a.type === "media-value" || a.type === "selector-attribute" || a.type === "selector-string" || a.type === "selector-class" || a.type === "selector-combinator" || a.type === "value-string") && f.value && (f.value = o(f.value)), a.type === "selector-attribute" && (f.attribute = f.attribute.trim(), f.namespace && typeof f.namespace == "string" && (f.namespace = f.namespace.trim(), f.namespace.length === 0 && (f.namespace = !0)), f.value && (f.value = f.value.trim().replace(/^["']|["']$/g, ""), delete f.quoted)), (a.type === "media-value" || a.type === "media-type" || a.type === "value-number" || a.type === "selector-root-invalid" || a.type === "selector-class" || a.type === "selector-combinator" || a.type === "selector-tag") && f.value && (f.value = f.value.replace(/([\d+.Ee-]+)([A-Za-z]*)/g, (x, C, A) => {
            let D = Number(C);
            return Number.isNaN(D) ? x : D + A.toLowerCase();
          })), a.type === "selector-tag") {
            let x = a.value.toLowerCase();
            ["from", "to"].includes(x) && (f.value = x);
          }
          if (a.type === "css-atrule" && a.name.toLowerCase() === "supports" && delete f.value, a.type === "selector-unknown" && delete f.value, a.type === "value-comma_group") {
            let x = a.groups.findIndex((C) => C.type === "value-number" && C.unit === "...");
            x !== -1 && (f.groups[x].unit = "", f.groups.splice(x + 1, 0, { type: "value-word", value: "...", isColor: !1, isHex: !1 }));
          }
          if (a.type === "value-comma_group" && a.groups.some((x) => x.type === "value-atword" && x.value.endsWith("[") || x.type === "value-word" && x.value.startsWith("]")))
            return { type: "value-atword", value: a.groups.map((x) => x.value).join(""), group: { open: null, close: null, groups: [], type: "value-paren_group" } };
        }
        u.ignoredProperties = p;
        function o(a) {
          return a.replace(/'/g, '"').replace(/\\([^\dA-Fa-f])/g, "$1");
        }
        m.exports = u;
      } }), Yi = ee({ "src/utils/front-matter/print.js"(l, m) {
        ne();
        var { builders: { hardline: i, markAsRoot: d } } = Ut();
        function p(u, o) {
          if (u.lang === "yaml") {
            let a = u.value.trim(), f = a ? o(a, { parser: "yaml" }, { stripTrailingHardline: !0 }) : "";
            return d([u.startDelimiter, i, f, f ? i : "", u.endDelimiter]);
          }
        }
        m.exports = p;
      } }), fa = ee({ "src/language-css/embed.js"(l, m) {
        ne();
        var { builders: { hardline: i } } = Ut(), d = Yi();
        function p(u, o, a) {
          let f = u.getValue();
          if (f.type === "front-matter") {
            let g = d(f, a);
            return g ? [g, i] : "";
          }
        }
        m.exports = p;
      } }), Yr = ee({ "src/utils/front-matter/parse.js"(l, m) {
        ne();
        var i = new RegExp("^(?<startDelimiter>-{3}|\\+{3})(?<language>[^\\n]*)\\n(?:|(?<value>.*?)\\n)(?<endDelimiter>\\k<startDelimiter>|\\.{3})[^\\S\\n]*(?:\\n|$)", "s");
        function d(p) {
          let u = p.match(i);
          if (!u)
            return { content: p };
          let { startDelimiter: o, language: a, value: f = "", endDelimiter: g } = u.groups, x = a.trim() || "yaml";
          if (o === "+++" && (x = "toml"), x !== "yaml" && o !== g)
            return { content: p };
          let [C] = u;
          return { frontMatter: { type: "front-matter", lang: x, value: f, startDelimiter: o, endDelimiter: g, raw: C.replace(/\n$/, "") }, content: C.replace(/[^\n]/g, " ") + p.slice(C.length) };
        }
        m.exports = d;
      } }), ou = ee({ "src/language-css/pragma.js"(l, m) {
        ne();
        var i = So(), d = Yr();
        function p(o) {
          return i.hasPragma(d(o).content);
        }
        function u(o) {
          let { frontMatter: a, content: f } = d(o);
          return (a ? a.raw + `

` : "") + i.insertPragma(f);
        }
        m.exports = { hasPragma: p, insertPragma: u };
      } }), Fi = ee({ "src/language-css/utils/index.js"(l, m) {
        ne();
        var i = /* @__PURE__ */ new Set(["red", "green", "blue", "alpha", "a", "rgb", "hue", "h", "saturation", "s", "lightness", "l", "whiteness", "w", "blackness", "b", "tint", "shade", "blend", "blenda", "contrast", "hsl", "hsla", "hwb", "hwba"]);
        function d(oe, H) {
          let ce = Array.isArray(H) ? H : [H], De = -1, Be;
          for (; Be = oe.getParentNode(++De); )
            if (ce.includes(Be.type))
              return De;
          return -1;
        }
        function p(oe, H) {
          let ce = d(oe, H);
          return ce === -1 ? null : oe.getParentNode(ce);
        }
        function u(oe) {
          var H;
          let ce = p(oe, "css-decl");
          return ce == null || (H = ce.prop) === null || H === void 0 ? void 0 : H.toLowerCase();
        }
        var o = /* @__PURE__ */ new Set(["initial", "inherit", "unset", "revert"]);
        function a(oe) {
          return o.has(oe.toLowerCase());
        }
        function f(oe, H) {
          let ce = p(oe, "css-atrule");
          return (ce == null ? void 0 : ce.name) && ce.name.toLowerCase().endsWith("keyframes") && ["from", "to"].includes(H.toLowerCase());
        }
        function g(oe) {
          return oe.includes("$") || oe.includes("@") || oe.includes("#") || oe.startsWith("%") || oe.startsWith("--") || oe.startsWith(":--") || oe.includes("(") && oe.includes(")") ? oe : oe.toLowerCase();
        }
        function x(oe, H) {
          var ce;
          let De = p(oe, "value-func");
          return (De == null || (ce = De.value) === null || ce === void 0 ? void 0 : ce.toLowerCase()) === H;
        }
        function C(oe) {
          var H;
          let ce = p(oe, "css-rule"), De = ce == null || (H = ce.raws) === null || H === void 0 ? void 0 : H.selector;
          return De && (De.startsWith(":import") || De.startsWith(":export"));
        }
        function A(oe, H) {
          let ce = Array.isArray(H) ? H : [H], De = p(oe, "css-atrule");
          return De && ce.includes(De.name.toLowerCase());
        }
        function D(oe) {
          let H = oe.getValue(), ce = p(oe, "css-atrule");
          return (ce == null ? void 0 : ce.name) === "import" && H.groups[0].value === "url" && H.groups.length === 2;
        }
        function y(oe) {
          return oe.type === "value-func" && oe.value.toLowerCase() === "url";
        }
        function T(oe, H) {
          var ce;
          let De = (ce = oe.getParentNode()) === null || ce === void 0 ? void 0 : ce.nodes;
          return De && De.indexOf(H) === De.length - 1;
        }
        function j(oe) {
          let { selector: H } = oe;
          return H ? typeof H == "string" && /^@.+:.*$/.test(H) || H.value && /^@.+:.*$/.test(H.value) : !1;
        }
        function M(oe) {
          return oe.type === "value-word" && ["from", "through", "end"].includes(oe.value);
        }
        function k(oe) {
          return oe.type === "value-word" && ["and", "or", "not"].includes(oe.value);
        }
        function L(oe) {
          return oe.type === "value-word" && oe.value === "in";
        }
        function _(oe) {
          return oe.type === "value-operator" && oe.value === "*";
        }
        function R(oe) {
          return oe.type === "value-operator" && oe.value === "/";
        }
        function O(oe) {
          return oe.type === "value-operator" && oe.value === "+";
        }
        function Q(oe) {
          return oe.type === "value-operator" && oe.value === "-";
        }
        function v(oe) {
          return oe.type === "value-operator" && oe.value === "%";
        }
        function P(oe) {
          return _(oe) || R(oe) || O(oe) || Q(oe) || v(oe);
        }
        function E(oe) {
          return oe.type === "value-word" && ["==", "!="].includes(oe.value);
        }
        function w(oe) {
          return oe.type === "value-word" && ["<", ">", "<=", ">="].includes(oe.value);
        }
        function c(oe) {
          return oe.type === "css-atrule" && ["if", "else", "for", "each", "while"].includes(oe.name);
        }
        function F(oe) {
          var H;
          return ((H = oe.raws) === null || H === void 0 ? void 0 : H.params) && /^\(\s*\)$/.test(oe.raws.params);
        }
        function S(oe) {
          return oe.name.startsWith("prettier-placeholder");
        }
        function b(oe) {
          return oe.prop.startsWith("@prettier-placeholder");
        }
        function B(oe, H) {
          return oe.value === "$$" && oe.type === "value-func" && (H == null ? void 0 : H.type) === "value-word" && !H.raws.before;
        }
        function I(oe) {
          var H, ce;
          return ((H = oe.value) === null || H === void 0 ? void 0 : H.type) === "value-root" && ((ce = oe.value.group) === null || ce === void 0 ? void 0 : ce.type) === "value-value" && oe.prop.toLowerCase() === "composes";
        }
        function $(oe) {
          var H, ce, De;
          return ((H = oe.value) === null || H === void 0 || (ce = H.group) === null || ce === void 0 || (De = ce.group) === null || De === void 0 ? void 0 : De.type) === "value-paren_group" && oe.value.group.group.open !== null && oe.value.group.group.close !== null;
        }
        function G(oe) {
          var H;
          return ((H = oe.raws) === null || H === void 0 ? void 0 : H.before) === "";
        }
        function W(oe) {
          var H, ce;
          return oe.type === "value-comma_group" && ((H = oe.groups) === null || H === void 0 || (ce = H[1]) === null || ce === void 0 ? void 0 : ce.type) === "value-colon";
        }
        function J(oe) {
          var H;
          return oe.type === "value-paren_group" && ((H = oe.groups) === null || H === void 0 ? void 0 : H[0]) && W(oe.groups[0]);
        }
        function te(oe) {
          var H;
          let ce = oe.getValue();
          if (ce.groups.length === 0)
            return !1;
          let De = oe.getParentNode(1);
          if (!J(ce) && !(De && J(De)))
            return !1;
          let Be = p(oe, "css-decl");
          return !!(Be != null && (H = Be.prop) !== null && H !== void 0 && H.startsWith("$") || J(De) || De.type === "value-func");
        }
        function K(oe) {
          return oe.type === "value-comment" && oe.inline;
        }
        function ie(oe) {
          return oe.type === "value-word" && oe.value === "#";
        }
        function q(oe) {
          return oe.type === "value-word" && oe.value === "{";
        }
        function U(oe) {
          return oe.type === "value-word" && oe.value === "}";
        }
        function se(oe) {
          return ["value-word", "value-atword"].includes(oe.type);
        }
        function ye(oe) {
          return (oe == null ? void 0 : oe.type) === "value-colon";
        }
        function le(oe, H) {
          if (!W(H))
            return !1;
          let { groups: ce } = H, De = ce.indexOf(oe);
          return De === -1 ? !1 : ye(ce[De + 1]);
        }
        function Ne(oe) {
          return oe.value && ["not", "and", "or"].includes(oe.value.toLowerCase());
        }
        function X(oe) {
          return oe.type !== "value-func" ? !1 : i.has(oe.value.toLowerCase());
        }
        function re(oe) {
          return /\/\//.test(oe.split(/[\n\r]/).pop());
        }
        function Te(oe) {
          return (oe == null ? void 0 : oe.type) === "value-atword" && oe.value.startsWith("prettier-placeholder-");
        }
        function we(oe, H) {
          var ce, De;
          if (((ce = oe.open) === null || ce === void 0 ? void 0 : ce.value) !== "(" || ((De = oe.close) === null || De === void 0 ? void 0 : De.value) !== ")" || oe.groups.some((Be) => Be.type !== "value-comma_group"))
            return !1;
          if (H.type === "value-comma_group") {
            let Be = H.groups.indexOf(oe) - 1, Ke = H.groups[Be];
            if ((Ke == null ? void 0 : Ke.type) === "value-word" && Ke.value === "with")
              return !0;
          }
          return !1;
        }
        function tt(oe) {
          var H, ce;
          return oe.type === "value-paren_group" && ((H = oe.open) === null || H === void 0 ? void 0 : H.value) === "(" && ((ce = oe.close) === null || ce === void 0 ? void 0 : ce.value) === ")";
        }
        m.exports = { getAncestorCounter: d, getAncestorNode: p, getPropOfDeclNode: u, maybeToLowerCase: g, insideValueFunctionNode: x, insideICSSRuleNode: C, insideAtRuleNode: A, insideURLFunctionInImportAtRuleNode: D, isKeyframeAtRuleKeywords: f, isWideKeywords: a, isLastNode: T, isSCSSControlDirectiveNode: c, isDetachedRulesetDeclarationNode: j, isRelationalOperatorNode: w, isEqualityOperatorNode: E, isMultiplicationNode: _, isDivisionNode: R, isAdditionNode: O, isSubtractionNode: Q, isModuloNode: v, isMathOperatorNode: P, isEachKeywordNode: L, isForKeywordNode: M, isURLFunctionNode: y, isIfElseKeywordNode: k, hasComposesNode: I, hasParensAroundNode: $, hasEmptyRawBefore: G, isDetachedRulesetCallNode: F, isTemplatePlaceholderNode: S, isTemplatePropNode: b, isPostcssSimpleVarNode: B, isKeyValuePairNode: W, isKeyValuePairInParenGroupNode: J, isKeyInValuePairNode: le, isSCSSMapItemNode: te, isInlineValueCommentNode: K, isHashNode: ie, isLeftCurlyBraceNode: q, isRightCurlyBraceNode: U, isWordNode: se, isColonNode: ye, isMediaAndSupportsKeywords: Ne, isColorAdjusterFuncNode: X, lastLineHasInlineComment: re, isAtWordPlaceholderNode: Te, isConfigurationNode: we, isParenGroupNode: tt };
      } }), Ou = ee({ "src/utils/line-column-to-index.js"(l, m) {
        ne(), m.exports = function(i, d) {
          let p = 0;
          for (let u = 0; u < i.line - 1; ++u)
            p = d.indexOf(`
`, p) + 1;
          return p + i.column;
        };
      } }), Mu = ee({ "src/language-css/loc.js"(l, m) {
        ne();
        var { skipEverythingButNewLine: i } = zo(), d = sr(), p = Ou();
        function u(D, y) {
          return typeof D.sourceIndex == "number" ? D.sourceIndex : D.source ? p(D.source.start, y) - 1 : null;
        }
        function o(D, y) {
          if (D.type === "css-comment" && D.inline)
            return i(y, D.source.startOffset);
          let T = D.nodes && d(D.nodes);
          return T && D.source && !D.source.end && (D = T), D.source && D.source.end ? p(D.source.end, y) : null;
        }
        function a(D, y) {
          D.source && (D.source.startOffset = u(D, y), D.source.endOffset = o(D, y));
          for (let T in D) {
            let j = D[T];
            T === "source" || !j || typeof j != "object" || (j.type === "value-root" || j.type === "value-unknown" ? f(j, g(D), j.text || j.value) : a(j, y));
          }
        }
        function f(D, y, T) {
          D.source && (D.source.startOffset = u(D, T) + y, D.source.endOffset = o(D, T) + y);
          for (let j in D) {
            let M = D[j];
            j === "source" || !M || typeof M != "object" || f(M, y, T);
          }
        }
        function g(D) {
          let y = D.source.startOffset;
          return typeof D.prop == "string" && (y += D.prop.length), D.type === "css-atrule" && typeof D.name == "string" && (y += 1 + D.name.length + D.raws.afterName.match(/^\s*:?\s*/)[0].length), D.type !== "css-atrule" && D.raws && typeof D.raws.between == "string" && (y += D.raws.between.length), y;
        }
        function x(D) {
          let y = "initial", T = "initial", j, M = !1, k = [];
          for (let L = 0; L < D.length; L++) {
            let _ = D[L];
            switch (y) {
              case "initial":
                if (_ === "'") {
                  y = "single-quotes";
                  continue;
                }
                if (_ === '"') {
                  y = "double-quotes";
                  continue;
                }
                if ((_ === "u" || _ === "U") && D.slice(L, L + 4).toLowerCase() === "url(") {
                  y = "url", L += 3;
                  continue;
                }
                if (_ === "*" && D[L - 1] === "/") {
                  y = "comment-block";
                  continue;
                }
                if (_ === "/" && D[L - 1] === "/") {
                  y = "comment-inline", j = L - 1;
                  continue;
                }
                continue;
              case "single-quotes":
                if (_ === "'" && D[L - 1] !== "\\" && (y = T, T = "initial"), _ === `
` || _ === "\r")
                  return D;
                continue;
              case "double-quotes":
                if (_ === '"' && D[L - 1] !== "\\" && (y = T, T = "initial"), _ === `
` || _ === "\r")
                  return D;
                continue;
              case "url":
                if (_ === ")" && (y = "initial"), _ === `
` || _ === "\r")
                  return D;
                if (_ === "'") {
                  y = "single-quotes", T = "url";
                  continue;
                }
                if (_ === '"') {
                  y = "double-quotes", T = "url";
                  continue;
                }
                continue;
              case "comment-block":
                _ === "/" && D[L - 1] === "*" && (y = "initial");
                continue;
              case "comment-inline":
                (_ === '"' || _ === "'" || _ === "*") && (M = !0), (_ === `
` || _ === "\r") && (M && k.push([j, L]), y = "initial", M = !1);
                continue;
            }
          }
          for (let [L, _] of k)
            D = D.slice(0, L) + D.slice(L, _).replace(/["'*]/g, " ") + D.slice(_);
          return D;
        }
        function C(D) {
          return D.source.startOffset;
        }
        function A(D) {
          return D.source.endOffset;
        }
        m.exports = { locStart: C, locEnd: A, calculateLoc: a, replaceQuotesInInlineComments: x };
      } }), xi = ee({ "src/language-css/utils/is-less-parser.js"(l, m) {
        ne();
        function i(d) {
          return d.parser === "css" || d.parser === "less";
        }
        m.exports = i;
      } }), dl = ee({ "src/language-css/utils/is-scss.js"(l, m) {
        ne();
        function i(d, p) {
          return d === "less" || d === "scss" ? d === "scss" : /(?:\w\s*:\s*[^:}]+|#){|@import[^\n]+(?:url|,)/.test(p);
        }
        m.exports = i;
      } }), ns = ee({ "src/language-css/utils/css-units.evaluate.js"(l, m) {
        m.exports = { em: "em", rem: "rem", ex: "ex", rex: "rex", cap: "cap", rcap: "rcap", ch: "ch", rch: "rch", ic: "ic", ric: "ric", lh: "lh", rlh: "rlh", vw: "vw", svw: "svw", lvw: "lvw", dvw: "dvw", vh: "vh", svh: "svh", lvh: "lvh", dvh: "dvh", vi: "vi", svi: "svi", lvi: "lvi", dvi: "dvi", vb: "vb", svb: "svb", lvb: "lvb", dvb: "dvb", vmin: "vmin", svmin: "svmin", lvmin: "lvmin", dvmin: "dvmin", vmax: "vmax", svmax: "svmax", lvmax: "lvmax", dvmax: "dvmax", cm: "cm", mm: "mm", q: "Q", in: "in", pt: "pt", pc: "pc", px: "px", deg: "deg", grad: "grad", rad: "rad", turn: "turn", s: "s", ms: "ms", hz: "Hz", khz: "kHz", dpi: "dpi", dpcm: "dpcm", dppx: "dppx", x: "x" };
      } }), rs = ee({ "src/language-css/utils/print-unit.js"(l, m) {
        ne();
        var i = ns();
        function d(p) {
          let u = p.toLowerCase();
          return Object.prototype.hasOwnProperty.call(i, u) ? i[u] : p;
        }
        m.exports = d;
      } }), Hr = ee({ "src/language-css/printer-postcss.js"(l, m) {
        ne();
        var i = sr(), { printNumber: d, printString: p, hasNewline: u, isFrontMatterNode: o, isNextLineEmpty: a, isNonEmptyArray: f } = yn(), { builders: { join: g, line: x, hardline: C, softline: A, group: D, fill: y, indent: T, dedent: j, ifBreak: M, breakParent: k }, utils: { removeLines: L, getDocParts: _ } } = Ut(), R = Qi(), O = fa(), { insertPragma: Q } = ou(), { getAncestorNode: v, getPropOfDeclNode: P, maybeToLowerCase: E, insideValueFunctionNode: w, insideICSSRuleNode: c, insideAtRuleNode: F, insideURLFunctionInImportAtRuleNode: S, isKeyframeAtRuleKeywords: b, isWideKeywords: B, isLastNode: I, isSCSSControlDirectiveNode: $, isDetachedRulesetDeclarationNode: G, isRelationalOperatorNode: W, isEqualityOperatorNode: J, isMultiplicationNode: te, isDivisionNode: K, isAdditionNode: ie, isSubtractionNode: q, isMathOperatorNode: U, isEachKeywordNode: se, isForKeywordNode: ye, isURLFunctionNode: le, isIfElseKeywordNode: Ne, hasComposesNode: X, hasParensAroundNode: re, hasEmptyRawBefore: Te, isKeyValuePairNode: we, isKeyInValuePairNode: tt, isDetachedRulesetCallNode: oe, isTemplatePlaceholderNode: H, isTemplatePropNode: ce, isPostcssSimpleVarNode: De, isSCSSMapItemNode: Be, isInlineValueCommentNode: Ke, isHashNode: ze, isLeftCurlyBraceNode: Ct, isRightCurlyBraceNode: en, isWordNode: Gt, isColonNode: ft, isMediaAndSupportsKeywords: _t, isColorAdjusterFuncNode: Fe, lastLineHasInlineComment: Y, isAtWordPlaceholderNode: ke, isConfigurationNode: ue, isParenGroupNode: xe } = Fi(), { locStart: nt, locEnd: Ze } = Mu(), _e = xi(), N = dl(), Z = rs();
        function Ee(mt) {
          return mt.trailingComma === "es5" || mt.trailingComma === "all";
        }
        function he(mt, Jt, St) {
          let ge = mt.getValue();
          if (!ge)
            return "";
          if (typeof ge == "string")
            return ge;
          switch (ge.type) {
            case "front-matter":
              return [ge.raw, C];
            case "css-root": {
              let ln = qe(mt, Jt, St), Yt = ge.raws.after.trim();
              return Yt.startsWith(";") && (Yt = Yt.slice(1).trim()), [ln, Yt ? ` ${Yt}` : "", _(ln).length > 0 ? C : ""];
            }
            case "css-comment": {
              let ln = ge.inline || ge.raws.inline, Yt = Jt.originalText.slice(nt(ge), Ze(ge));
              return ln ? Yt.trimEnd() : Yt;
            }
            case "css-rule":
              return [St("selector"), ge.important ? " !important" : "", ge.nodes ? [ge.selector && ge.selector.type === "selector-unknown" && Y(ge.selector.value) ? x : " ", "{", ge.nodes.length > 0 ? T([C, qe(mt, Jt, St)]) : "", C, "}", G(ge) ? ";" : ""] : ";"];
            case "css-decl": {
              let ln = mt.getParentNode(), { between: Yt } = ge.raws, jn = Yt.trim(), or = jn === ":", z = X(ge) ? L(St("value")) : St("value");
              return !or && Y(jn) && (z = T([C, j(z)])), [ge.raws.before.replace(/[\s;]/g, ""), ln.type === "css-atrule" && ln.variable || c(mt) ? ge.prop : E(ge.prop), jn.startsWith("//") ? " " : "", jn, ge.extend ? "" : " ", _e(Jt) && ge.extend && ge.selector ? ["extend(", St("selector"), ")"] : "", z, ge.raws.important ? ge.raws.important.replace(/\s*!\s*important/i, " !important") : ge.important ? " !important" : "", ge.raws.scssDefault ? ge.raws.scssDefault.replace(/\s*!default/i, " !default") : ge.scssDefault ? " !default" : "", ge.raws.scssGlobal ? ge.raws.scssGlobal.replace(/\s*!global/i, " !global") : ge.scssGlobal ? " !global" : "", ge.nodes ? [" {", T([A, qe(mt, Jt, St)]), A, "}"] : ce(ge) && !ln.raws.semicolon && Jt.originalText[Ze(ge) - 1] !== ";" ? "" : Jt.__isHTMLStyleAttribute && I(mt, ge) ? M(";") : ";"];
            }
            case "css-atrule": {
              let ln = mt.getParentNode(), Yt = H(ge) && !ln.raws.semicolon && Jt.originalText[Ze(ge) - 1] !== ";";
              if (_e(Jt)) {
                if (ge.mixin)
                  return [St("selector"), ge.important ? " !important" : "", Yt ? "" : ";"];
                if (ge.function)
                  return [ge.name, St("params"), Yt ? "" : ";"];
                if (ge.variable)
                  return ["@", ge.name, ": ", ge.value ? St("value") : "", ge.raws.between.trim() ? ge.raws.between.trim() + " " : "", ge.nodes ? ["{", T([ge.nodes.length > 0 ? A : "", qe(mt, Jt, St)]), A, "}"] : "", Yt ? "" : ";"];
              }
              return ["@", oe(ge) || ge.name.endsWith(":") ? ge.name : E(ge.name), ge.params ? [oe(ge) ? "" : H(ge) ? ge.raws.afterName === "" ? "" : ge.name.endsWith(":") ? " " : /^\s*\n\s*\n/.test(ge.raws.afterName) ? [C, C] : /^\s*\n/.test(ge.raws.afterName) ? C : " " : " ", St("params")] : "", ge.selector ? T([" ", St("selector")]) : "", ge.value ? D([" ", St("value"), $(ge) ? re(ge) ? " " : x : ""]) : ge.name === "else" ? " " : "", ge.nodes ? [$(ge) ? "" : ge.selector && !ge.selector.nodes && typeof ge.selector.value == "string" && Y(ge.selector.value) || !ge.selector && typeof ge.params == "string" && Y(ge.params) ? x : " ", "{", T([ge.nodes.length > 0 ? A : "", qe(mt, Jt, St)]), A, "}"] : Yt ? "" : ";"];
            }
            case "media-query-list": {
              let ln = [];
              return mt.each((Yt) => {
                let jn = Yt.getValue();
                jn.type === "media-query" && jn.value === "" || ln.push(St());
              }, "nodes"), D(T(g(x, ln)));
            }
            case "media-query":
              return [g(" ", mt.map(St, "nodes")), I(mt, ge) ? "" : ","];
            case "media-type":
              return Qt(pt(ge.value, Jt));
            case "media-feature-expression":
              return ge.nodes ? ["(", ...mt.map(St, "nodes"), ")"] : ge.value;
            case "media-feature":
              return E(pt(ge.value.replace(/ +/g, " "), Jt));
            case "media-colon":
              return [ge.value, " "];
            case "media-value":
              return Qt(pt(ge.value, Jt));
            case "media-keyword":
              return pt(ge.value, Jt);
            case "media-url":
              return pt(ge.value.replace(/^url\(\s+/gi, "url(").replace(/\s+\)$/g, ")"), Jt);
            case "media-unknown":
              return ge.value;
            case "selector-root":
              return D([F(mt, "custom-selector") ? [v(mt, "css-atrule").customSelector, x] : "", g([",", F(mt, ["extend", "custom-selector", "nest"]) ? x : C], mt.map(St, "nodes"))]);
            case "selector-selector":
              return D(T(mt.map(St, "nodes")));
            case "selector-comment":
              return ge.value;
            case "selector-string":
              return pt(ge.value, Jt);
            case "selector-tag": {
              let ln = mt.getParentNode(), Yt = ln && ln.nodes.indexOf(ge), jn = Yt && ln.nodes[Yt - 1];
              return [ge.namespace ? [ge.namespace === !0 ? "" : ge.namespace.trim(), "|"] : "", jn.type === "selector-nesting" ? ge.value : Qt(b(mt, ge.value) ? ge.value.toLowerCase() : ge.value)];
            }
            case "selector-id":
              return ["#", ge.value];
            case "selector-class":
              return [".", Qt(pt(ge.value, Jt))];
            case "selector-attribute": {
              var pr;
              return ["[", ge.namespace ? [ge.namespace === !0 ? "" : ge.namespace.trim(), "|"] : "", ge.attribute.trim(), (pr = ge.operator) !== null && pr !== void 0 ? pr : "", ge.value ? Mt(pt(ge.value.trim(), Jt), Jt) : "", ge.insensitive ? " i" : "", "]"];
            }
            case "selector-combinator": {
              if (ge.value === "+" || ge.value === ">" || ge.value === "~" || ge.value === ">>>") {
                let jn = mt.getParentNode();
                return [jn.type === "selector-selector" && jn.nodes[0] === ge ? "" : x, ge.value, I(mt, ge) ? "" : " "];
              }
              let ln = ge.value.trim().startsWith("(") ? x : "", Yt = Qt(pt(ge.value.trim(), Jt)) || x;
              return [ln, Yt];
            }
            case "selector-universal":
              return [ge.namespace ? [ge.namespace === !0 ? "" : ge.namespace.trim(), "|"] : "", ge.value];
            case "selector-pseudo":
              return [E(ge.value), f(ge.nodes) ? D(["(", T([A, g([",", x], mt.map(St, "nodes"))]), A, ")"]) : ""];
            case "selector-nesting":
              return ge.value;
            case "selector-unknown": {
              let ln = v(mt, "css-rule");
              if (ln && ln.isSCSSNesterProperty)
                return Qt(pt(E(ge.value), Jt));
              let Yt = mt.getParentNode();
              if (Yt.raws && Yt.raws.selector) {
                let or = nt(Yt), z = or + Yt.raws.selector.length;
                return Jt.originalText.slice(or, z).trim();
              }
              let jn = mt.getParentNode(1);
              if (Yt.type === "value-paren_group" && jn && jn.type === "value-func" && jn.value === "selector") {
                let or = Ze(Yt.open) + 1, z = nt(Yt.close), Pe = Jt.originalText.slice(or, z).trim();
                return Y(Pe) ? [k, Pe] : Pe;
              }
              return ge.value;
            }
            case "value-value":
            case "value-root":
              return St("group");
            case "value-comment":
              return Jt.originalText.slice(nt(ge), Ze(ge));
            case "value-comma_group": {
              let ln = mt.getParentNode(), Yt = mt.getParentNode(1), jn = P(mt), or = jn && ln.type === "value-value" && (jn === "grid" || jn.startsWith("grid-template")), z = v(mt, "css-atrule"), Pe = z && $(z), Nt = ge.groups.some((nr) => Ke(nr)), dn = mt.map(St, "groups"), fn = [], Wr = w(mt, "url"), Kn = !1, yr = !1;
              for (let nr = 0; nr < ge.groups.length; ++nr) {
                var hr;
                fn.push(dn[nr]);
                let nn = ge.groups[nr - 1], Tt = ge.groups[nr], It = ge.groups[nr + 1], dr = ge.groups[nr + 2];
                if (Wr) {
                  (It && ie(It) || ie(Tt)) && fn.push(" ");
                  continue;
                }
                if (F(mt, "forward") && Tt.type === "value-word" && Tt.value && nn !== void 0 && nn.type === "value-word" && nn.value === "as" && It.type === "value-operator" && It.value === "*" || !It || Tt.type === "value-word" && Tt.value.endsWith("-") && ke(It))
                  continue;
                if (Tt.type === "value-string" && Tt.quoted) {
                  let uo = Tt.value.lastIndexOf("#{"), _o = Tt.value.lastIndexOf("}");
                  uo !== -1 && _o !== -1 ? Kn = uo > _o : uo !== -1 ? Kn = !0 : _o !== -1 && (Kn = !1);
                }
                if (Kn || ft(Tt) || ft(It) || Tt.type === "value-atword" && (Tt.value === "" || Tt.value.endsWith("[")) || It.type === "value-word" && It.value.startsWith("]") || Tt.value === "~" || Tt.value && Tt.value.includes("\\") && It && It.type !== "value-comment" || nn && nn.value && nn.value.indexOf("\\") === nn.value.length - 1 && Tt.type === "value-operator" && Tt.value === "/" || Tt.value === "\\" || De(Tt, It) || ze(Tt) || Ct(Tt) || en(It) || Ct(It) && Te(It) || en(Tt) && Te(It) || Tt.value === "--" && ze(It))
                  continue;
                let Gr = U(Tt), Ai = U(It);
                if ((Gr && ze(It) || Ai && en(Tt)) && Te(It) || !nn && K(Tt) || w(mt, "calc") && (ie(Tt) || ie(It) || q(Tt) || q(It)) && Te(It))
                  continue;
                let Er = (ie(Tt) || q(Tt)) && nr === 0 && (It.type === "value-number" || It.isHex) && Yt && Fe(Yt) && !Te(It), ro = dr && dr.type === "value-func" || dr && Gt(dr) || Tt.type === "value-func" || Gt(Tt), oi = It.type === "value-func" || Gt(It) || nn && nn.type === "value-func" || nn && Gt(nn);
                if (!(!(te(It) || te(Tt)) && !w(mt, "calc") && !Er && (K(It) && !ro || K(Tt) && !oi || ie(It) && !ro || ie(Tt) && !oi || q(It) || q(Tt)) && (Te(It) || Gr && (!nn || nn && U(nn)))) && !((Jt.parser === "scss" || Jt.parser === "less") && Gr && Tt.value === "-" && xe(It) && Ze(Tt) === nt(It.open) && It.open.value === "(")) {
                  if (Ke(Tt)) {
                    if (ln.type === "value-paren_group") {
                      fn.push(j(C));
                      continue;
                    }
                    fn.push(C);
                    continue;
                  }
                  if (Pe && (J(It) || W(It) || Ne(It) || se(Tt) || ye(Tt))) {
                    fn.push(" ");
                    continue;
                  }
                  if (z && z.name.toLowerCase() === "namespace") {
                    fn.push(" ");
                    continue;
                  }
                  if (or) {
                    Tt.source && It.source && Tt.source.start.line !== It.source.start.line ? (fn.push(C), yr = !0) : fn.push(" ");
                    continue;
                  }
                  if (Ai) {
                    fn.push(" ");
                    continue;
                  }
                  if (!(It && It.value === "...") && !(ke(Tt) && ke(It) && Ze(Tt) === nt(It))) {
                    if (ke(Tt) && xe(It) && Ze(Tt) === nt(It.open)) {
                      fn.push(A);
                      continue;
                    }
                    if (Tt.value === "with" && xe(It)) {
                      fn.push(" ");
                      continue;
                    }
                    (hr = Tt.value) !== null && hr !== void 0 && hr.endsWith("#") && It.value === "{" && xe(It.group) || fn.push(x);
                  }
                }
              }
              return Nt && fn.push(k), yr && fn.unshift(C), Pe ? D(T(fn)) : S(mt) ? D(y(fn)) : D(T(y(fn)));
            }
            case "value-paren_group": {
              let ln = mt.getParentNode();
              if (ln && le(ln) && (ge.groups.length === 1 || ge.groups.length > 0 && ge.groups[0].type === "value-comma_group" && ge.groups[0].groups.length > 0 && ge.groups[0].groups[0].type === "value-word" && ge.groups[0].groups[0].value.startsWith("data:")))
                return [ge.open ? St("open") : "", g(",", mt.map(St, "groups")), ge.close ? St("close") : ""];
              if (!ge.open) {
                let Wr = mt.map(St, "groups"), Kn = [];
                for (let yr = 0; yr < Wr.length; yr++)
                  yr !== 0 && Kn.push([",", x]), Kn.push(Wr[yr]);
                return D(T(y(Kn)));
              }
              let Yt = Be(mt), jn = i(ge.groups), or = jn && jn.type === "value-comment", z = tt(ge, ln), Pe = ue(ge, ln), Nt = Pe || Yt && !z, dn = Pe || z, fn = D([ge.open ? St("open") : "", T([A, g([x], mt.map((Wr, Kn) => {
                let yr = Wr.getValue(), nr = Kn === ge.groups.length - 1, nn = [St(), nr ? "" : ","];
                if (we(yr) && yr.type === "value-comma_group" && yr.groups && yr.groups[0].type !== "value-paren_group" && yr.groups[2] && yr.groups[2].type === "value-paren_group") {
                  let Tt = _(nn[0].contents.contents);
                  Tt[1] = D(Tt[1]), nn = [D(j(nn))];
                }
                if (!nr && yr.type === "value-comma_group" && f(yr.groups)) {
                  let Tt = i(yr.groups);
                  !Tt.source && Tt.close && (Tt = Tt.close), Tt.source && a(Jt.originalText, Tt, Ze) && nn.push(C);
                }
                return nn;
              }, "groups"))]), M(!or && N(Jt.parser, Jt.originalText) && Yt && Ee(Jt) ? "," : ""), A, ge.close ? St("close") : ""], { shouldBreak: Nt });
              return dn ? j(fn) : fn;
            }
            case "value-func":
              return [ge.value, F(mt, "supports") && _t(ge) ? " " : "", St("group")];
            case "value-paren":
              return ge.value;
            case "value-number":
              return [bn(ge.value), Z(ge.unit)];
            case "value-operator":
              return ge.value;
            case "value-word":
              return ge.isColor && ge.isHex || B(ge.value) ? ge.value.toLowerCase() : ge.value;
            case "value-colon": {
              let ln = mt.getParentNode(), Yt = ln && ln.groups.indexOf(ge), jn = Yt && ln.groups[Yt - 1];
              return [ge.value, jn && typeof jn.value == "string" && i(jn.value) === "\\" || w(mt, "url") ? "" : x];
            }
            case "value-comma":
              return [ge.value, " "];
            case "value-string":
              return p(ge.raws.quote + ge.value + ge.raws.quote, Jt);
            case "value-atword":
              return ["@", ge.value];
            case "value-unicode-range":
              return ge.value;
            case "value-unknown":
              return ge.value;
            default:
              throw new Error(`Unknown postcss type ${JSON.stringify(ge.type)}`);
          }
        }
        function qe(mt, Jt, St) {
          let ge = [];
          return mt.each((pr, hr, ln) => {
            let Yt = ln[hr - 1];
            if (Yt && Yt.type === "css-comment" && Yt.text.trim() === "prettier-ignore") {
              let jn = pr.getValue();
              ge.push(Jt.originalText.slice(nt(jn), Ze(jn)));
            } else
              ge.push(St());
            hr !== ln.length - 1 && (ln[hr + 1].type === "css-comment" && !u(Jt.originalText, nt(ln[hr + 1]), { backwards: !0 }) && !o(ln[hr]) || ln[hr + 1].type === "css-atrule" && ln[hr + 1].name === "else" && ln[hr].type !== "css-comment" ? ge.push(" ") : (ge.push(Jt.__isHTMLStyleAttribute ? x : C), a(Jt.originalText, pr.getValue(), Ze) && !o(ln[hr]) && ge.push(C)));
          }, "nodes"), ge;
        }
        var gt = /(["'])(?:(?!\1)[^\\]|\\.)*\1/gs, Ue = /(?:\d*\.\d+|\d+\.?)(?:[Ee][+-]?\d+)?/g, qn = /[A-Za-z]+/g, ct = /[$@]?[A-Z_a-z\u0080-\uFFFF][\w\u0080-\uFFFF-]*/g, Ln = new RegExp(gt.source + `|(${ct.source})?(${Ue.source})(${qn.source})?`, "g");
        function pt(mt, Jt) {
          return mt.replace(gt, (St) => p(St, Jt));
        }
        function Mt(mt, Jt) {
          let St = Jt.singleQuote ? "'" : '"';
          return mt.includes('"') || mt.includes("'") ? mt : St + mt + St;
        }
        function Qt(mt) {
          return mt.replace(Ln, (Jt, St, ge, pr, hr) => !ge && pr ? bn(pr) + E(hr || "") : Jt);
        }
        function bn(mt) {
          return d(mt).replace(/\.0(?=$|e)/, "");
        }
        m.exports = { print: he, embed: O, insertPragma: Q, massageAstNode: R };
      } }), Zr = ee({ "src/language-css/options.js"(l, m) {
        ne();
        var i = Ci();
        m.exports = { singleQuote: i.singleQuote };
      } }), tr = ee({ "src/language-css/parsers.js"() {
        ne();
      } }), hu = ee({ "node_modules/linguist-languages/data/CSS.json"(l, m) {
        m.exports = { name: "CSS", type: "markup", tmScope: "source.css", aceMode: "css", codemirrorMode: "css", codemirrorMimeType: "text/css", color: "#563d7c", extensions: [".css"], languageId: 50 };
      } }), fl = ee({ "node_modules/linguist-languages/data/PostCSS.json"(l, m) {
        m.exports = { name: "PostCSS", type: "markup", color: "#dc3a0c", tmScope: "source.postcss", group: "CSS", extensions: [".pcss", ".postcss"], aceMode: "text", languageId: 262764437 };
      } }), ml = ee({ "node_modules/linguist-languages/data/Less.json"(l, m) {
        m.exports = { name: "Less", type: "markup", color: "#1d365d", aliases: ["less-css"], extensions: [".less"], tmScope: "source.css.less", aceMode: "less", codemirrorMode: "css", codemirrorMimeType: "text/css", languageId: 198 };
      } }), us = ee({ "node_modules/linguist-languages/data/SCSS.json"(l, m) {
        m.exports = { name: "SCSS", type: "markup", color: "#c6538c", tmScope: "source.css.scss", aceMode: "scss", codemirrorMode: "css", codemirrorMimeType: "text/x-scss", extensions: [".scss"], languageId: 329 };
      } }), is = ee({ "src/language-css/index.js"(l, m) {
        ne();
        var i = uu(), d = Hr(), p = Zr(), u = tr(), o = [i(hu(), (f) => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["css"], extensions: [...f.extensions, ".wxss"] })), i(fl(), () => ({ since: "1.4.0", parsers: ["css"], vscodeLanguageIds: ["postcss"] })), i(ml(), () => ({ since: "1.4.0", parsers: ["less"], vscodeLanguageIds: ["less"] })), i(us(), () => ({ since: "1.4.0", parsers: ["scss"], vscodeLanguageIds: ["scss"] }))], a = { postcss: d };
        m.exports = { languages: o, options: p, printers: a, parsers: u };
      } }), Dl = ee({ "src/language-handlebars/loc.js"(l, m) {
        ne();
        function i(p) {
          return p.loc.start.offset;
        }
        function d(p) {
          return p.loc.end.offset;
        }
        m.exports = { locStart: i, locEnd: d };
      } }), ma = ee({ "src/language-handlebars/clean.js"(l, m) {
        ne();
        function i(d, p) {
          if (d.type === "TextNode") {
            let u = d.chars.trim();
            if (!u)
              return null;
            p.chars = u.replace(/[\t\n\f\r ]+/g, " ");
          }
          d.type === "AttrNode" && d.name.toLowerCase() === "class" && delete p.value;
        }
        i.ignoredProperties = /* @__PURE__ */ new Set(["loc", "selfClosing"]), m.exports = i;
      } }), gl = ee({ "src/language-handlebars/html-void-elements.evaluate.js"(l, m) {
        m.exports = ["area", "base", "br", "col", "command", "embed", "hr", "img", "input", "keygen", "link", "meta", "param", "source", "track", "wbr"];
      } }), Hi = ee({ "src/language-handlebars/utils.js"(l, m) {
        ne();
        var i = sr(), d = gl();
        function p(_) {
          let R = _.getValue(), O = _.getParentNode(0);
          return !!(A(_, ["ElementNode"]) && i(O.children) === R || A(_, ["Block"]) && i(O.body) === R);
        }
        function u(_) {
          return _.toUpperCase() === _;
        }
        function o(_) {
          return C(_, ["ElementNode"]) && typeof _.tag == "string" && !_.tag.startsWith(":") && (u(_.tag[0]) || _.tag.includes("."));
        }
        var a = new Set(d);
        function f(_) {
          return a.has(_.toLowerCase()) && !u(_[0]);
        }
        function g(_) {
          return _.selfClosing === !0 || f(_.tag) || o(_) && _.children.every((R) => x(R));
        }
        function x(_) {
          return C(_, ["TextNode"]) && !/\S/.test(_.chars);
        }
        function C(_, R) {
          return _ && R.includes(_.type);
        }
        function A(_, R) {
          let O = _.getParentNode(0);
          return C(O, R);
        }
        function D(_, R) {
          let O = j(_);
          return C(O, R);
        }
        function y(_, R) {
          let O = M(_);
          return C(O, R);
        }
        function T(_, R) {
          var O, Q, v, P;
          let E = _.getValue(), w = (O = _.getParentNode(0)) !== null && O !== void 0 ? O : {}, c = (Q = (v = (P = w.children) !== null && P !== void 0 ? P : w.body) !== null && v !== void 0 ? v : w.parts) !== null && Q !== void 0 ? Q : [], F = c.indexOf(E);
          return F !== -1 && c[F + R];
        }
        function j(_) {
          let R = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
          return T(_, -R);
        }
        function M(_) {
          return T(_, 1);
        }
        function k(_) {
          return C(_, ["MustacheCommentStatement"]) && typeof _.value == "string" && _.value.trim() === "prettier-ignore";
        }
        function L(_) {
          let R = _.getValue(), O = j(_, 2);
          return k(R) || k(O);
        }
        m.exports = { getNextNode: M, getPreviousNode: j, hasPrettierIgnore: L, isLastNodeOfSiblings: p, isNextNodeOfSomeType: y, isNodeOfSomeType: C, isParentOfSomeType: A, isPreviousNodeOfSomeType: D, isVoid: g, isWhitespaceNode: x };
      } }), os = ee({ "src/language-handlebars/printer-glimmer.js"(l, m) {
        ne();
        var { builders: { dedent: i, fill: d, group: p, hardline: u, ifBreak: o, indent: a, join: f, line: g, softline: x }, utils: { getDocParts: C, replaceTextEndOfLine: A } } = Ut(), { getPreferredQuote: D, isNonEmptyArray: y } = yn(), { locStart: T, locEnd: j } = Dl(), M = ma(), { getNextNode: k, getPreviousNode: L, hasPrettierIgnore: _, isLastNodeOfSiblings: R, isNextNodeOfSomeType: O, isNodeOfSomeType: Q, isParentOfSomeType: v, isPreviousNodeOfSomeType: P, isVoid: E, isWhitespaceNode: w } = Hi(), c = 2;
        function F(Y, ke, ue) {
          let xe = Y.getValue();
          if (!xe)
            return "";
          if (_(Y))
            return ke.originalText.slice(T(xe), j(xe));
          let nt = ke.singleQuote ? "'" : '"';
          switch (xe.type) {
            case "Block":
            case "Program":
            case "Template":
              return p(Y.map(ue, "body"));
            case "ElementNode": {
              let Ze = p(b(Y, ue)), _e = ke.htmlWhitespaceSensitivity === "ignore" && O(Y, ["ElementNode"]) ? x : "";
              if (E(xe))
                return [Ze, _e];
              let N = ["</", xe.tag, ">"];
              return xe.children.length === 0 ? [Ze, a(N), _e] : ke.htmlWhitespaceSensitivity === "ignore" ? [Ze, a(B(Y, ke, ue)), u, a(N), _e] : [Ze, a(p(B(Y, ke, ue))), a(N), _e];
            }
            case "BlockStatement": {
              let Ze = Y.getParentNode(1);
              return Ze && Ze.inverse && Ze.inverse.body.length === 1 && Ze.inverse.body[0] === xe && Ze.inverse.body[0].path.parts[0] === Ze.path.parts[0] ? [ye(Y, ue, Ze.inverse.body[0].path.parts[0]), Te(Y, ue, ke), we(Y, ue, ke)] : [U(Y, ue), p([Te(Y, ue, ke), we(Y, ue, ke), le(Y, ue, ke)])];
            }
            case "ElementModifierStatement":
              return p(["{{", Gt(Y, ue), "}}"]);
            case "MustacheStatement":
              return p([$(xe), Gt(Y, ue), G(xe)]);
            case "SubExpression":
              return p(["(", en(Y, ue), x, ")"]);
            case "AttrNode": {
              let Ze = xe.value.type === "TextNode";
              if (Ze && xe.value.chars === "" && T(xe.value) === j(xe.value))
                return xe.name;
              let _e = Ze ? D(xe.value.chars, nt).quote : xe.value.type === "ConcatStatement" ? D(xe.value.parts.filter((Z) => Z.type === "TextNode").map((Z) => Z.chars).join(""), nt).quote : "", N = ue("value");
              return [xe.name, "=", _e, xe.name === "class" && _e ? p(a(N)) : N, _e];
            }
            case "ConcatStatement":
              return Y.map(ue, "parts");
            case "Hash":
              return f(g, Y.map(ue, "pairs"));
            case "HashPair":
              return [xe.key, "=", ue("value")];
            case "TextNode": {
              let Ze = xe.chars.replace(/{{/g, "\\{{"), _e = H(Y);
              if (_e) {
                if (_e === "class") {
                  let ct = Ze.trim().split(/\s+/).join(" "), Ln = !1, pt = !1;
                  return v(Y, ["ConcatStatement"]) && (P(Y, ["MustacheStatement"]) && /^\s/.test(Ze) && (Ln = !0), O(Y, ["MustacheStatement"]) && /\s$/.test(Ze) && ct !== "" && (pt = !0)), [Ln ? g : "", ct, pt ? g : ""];
                }
                return A(Ze);
              }
              let N = /^[\t\n\f\r ]*$/.test(Ze), Z = !L(Y), Ee = !k(Y);
              if (ke.htmlWhitespaceSensitivity !== "ignore") {
                let ct = /^[\t\n\f\r ]*/, Ln = /[\t\n\f\r ]*$/, pt = Ee && v(Y, ["Template"]), Mt = Z && v(Y, ["Template"]);
                if (N) {
                  if (Mt || pt)
                    return "";
                  let St = [g], ge = ce(Ze);
                  return ge && (St = Ke(ge)), R(Y) && (St = St.map((pr) => i(pr))), St;
                }
                let [Qt] = Ze.match(ct), [bn] = Ze.match(Ln), mt = [];
                if (Qt) {
                  mt = [g];
                  let St = ce(Qt);
                  St && (mt = Ke(St)), Ze = Ze.replace(ct, "");
                }
                let Jt = [];
                if (bn) {
                  if (!pt) {
                    Jt = [g];
                    let St = ce(bn);
                    St && (Jt = Ke(St)), R(Y) && (Jt = Jt.map((ge) => i(ge)));
                  }
                  Ze = Ze.replace(Ln, "");
                }
                return [...mt, d(tt(Ze)), ...Jt];
              }
              let he = ce(Ze), qe = De(Ze), gt = Be(Ze);
              if ((Z || Ee) && N && v(Y, ["Block", "ElementNode", "Template"]))
                return "";
              N && he ? (qe = Math.min(he, c), gt = 0) : (O(Y, ["BlockStatement", "ElementNode"]) && (gt = Math.max(gt, 1)), P(Y, ["BlockStatement", "ElementNode"]) && (qe = Math.max(qe, 1)));
              let Ue = "", qn = "";
              return gt === 0 && O(Y, ["MustacheStatement"]) && (qn = " "), qe === 0 && P(Y, ["MustacheStatement"]) && (Ue = " "), Z && (qe = 0, Ue = ""), Ee && (gt = 0, qn = ""), Ze = Ze.replace(/^[\t\n\f\r ]+/g, Ue).replace(/[\t\n\f\r ]+$/, qn), [...Ke(qe), d(tt(Ze)), ...Ke(gt)];
            }
            case "MustacheCommentStatement": {
              let Ze = T(xe), _e = j(xe), N = ke.originalText.charAt(Ze + 2) === "~", Z = ke.originalText.charAt(_e - 3) === "~", Ee = xe.value.includes("}}") ? "--" : "";
              return ["{{", N ? "~" : "", "!", Ee, xe.value, Ee, Z ? "~" : "", "}}"];
            }
            case "PathExpression":
              return xe.original;
            case "BooleanLiteral":
              return String(xe.value);
            case "CommentStatement":
              return ["<!--", xe.value, "-->"];
            case "StringLiteral": {
              if (Ct(Y)) {
                let Ze = ke.singleQuote ? '"' : "'";
                return ze(xe.value, Ze);
              }
              return ze(xe.value, nt);
            }
            case "NumberLiteral":
              return String(xe.value);
            case "UndefinedLiteral":
              return "undefined";
            case "NullLiteral":
              return "null";
            default:
              throw new Error("unknown glimmer type: " + JSON.stringify(xe.type));
          }
        }
        function S(Y, ke) {
          return T(Y) - T(ke);
        }
        function b(Y, ke) {
          let ue = Y.getValue(), xe = ["attributes", "modifiers", "comments"].filter((Ze) => y(ue[Ze])), nt = xe.flatMap((Ze) => ue[Ze]).sort(S);
          for (let Ze of xe)
            Y.each((_e) => {
              let N = nt.indexOf(_e.getValue());
              nt.splice(N, 1, [g, ke()]);
            }, Ze);
          return y(ue.blockParams) && nt.push(g, Fe(ue)), ["<", ue.tag, a(nt), I(ue)];
        }
        function B(Y, ke, ue) {
          let xe = Y.getValue().children.every((nt) => w(nt));
          return ke.htmlWhitespaceSensitivity === "ignore" && xe ? "" : Y.map((nt, Ze) => {
            let _e = ue();
            return Ze === 0 && ke.htmlWhitespaceSensitivity === "ignore" ? [x, _e] : _e;
          }, "children");
        }
        function I(Y) {
          return E(Y) ? o([x, "/>"], [" />", x]) : o([x, ">"], ">");
        }
        function $(Y) {
          let ke = Y.escaped === !1 ? "{{{" : "{{", ue = Y.strip && Y.strip.open ? "~" : "";
          return [ke, ue];
        }
        function G(Y) {
          let ke = Y.escaped === !1 ? "}}}" : "}}";
          return [Y.strip && Y.strip.close ? "~" : "", ke];
        }
        function W(Y) {
          let ke = $(Y), ue = Y.openStrip.open ? "~" : "";
          return [ke, ue, "#"];
        }
        function J(Y) {
          let ke = G(Y);
          return [Y.openStrip.close ? "~" : "", ke];
        }
        function te(Y) {
          let ke = $(Y), ue = Y.closeStrip.open ? "~" : "";
          return [ke, ue, "/"];
        }
        function K(Y) {
          let ke = G(Y);
          return [Y.closeStrip.close ? "~" : "", ke];
        }
        function ie(Y) {
          let ke = $(Y), ue = Y.inverseStrip.open ? "~" : "";
          return [ke, ue];
        }
        function q(Y) {
          let ke = G(Y);
          return [Y.inverseStrip.close ? "~" : "", ke];
        }
        function U(Y, ke) {
          let ue = Y.getValue(), xe = [], nt = _t(Y, ke);
          return nt && xe.push(p(nt)), y(ue.program.blockParams) && xe.push(Fe(ue.program)), p([W(ue), ft(Y, ke), xe.length > 0 ? a([g, f(g, xe)]) : "", x, J(ue)]);
        }
        function se(Y, ke) {
          return [ke.htmlWhitespaceSensitivity === "ignore" ? u : "", ie(Y), "else", q(Y)];
        }
        function ye(Y, ke, ue) {
          let xe = Y.getValue(), nt = Y.getParentNode(1);
          return p([ie(nt), ["else", " ", ue], a([g, p(_t(Y, ke)), ...y(xe.program.blockParams) ? [g, Fe(xe.program)] : []]), x, q(nt)]);
        }
        function le(Y, ke, ue) {
          let xe = Y.getValue();
          return ue.htmlWhitespaceSensitivity === "ignore" ? [Ne(xe) ? x : u, te(xe), ke("path"), K(xe)] : [te(xe), ke("path"), K(xe)];
        }
        function Ne(Y) {
          return Q(Y, ["BlockStatement"]) && Y.program.body.every((ke) => w(ke));
        }
        function X(Y) {
          return re(Y) && Y.inverse.body.length === 1 && Q(Y.inverse.body[0], ["BlockStatement"]) && Y.inverse.body[0].path.parts[0] === Y.path.parts[0];
        }
        function re(Y) {
          return Q(Y, ["BlockStatement"]) && Y.inverse;
        }
        function Te(Y, ke, ue) {
          let xe = Y.getValue();
          if (Ne(xe))
            return "";
          let nt = ke("program");
          return ue.htmlWhitespaceSensitivity === "ignore" ? a([u, nt]) : a(nt);
        }
        function we(Y, ke, ue) {
          let xe = Y.getValue(), nt = ke("inverse"), Ze = ue.htmlWhitespaceSensitivity === "ignore" ? [u, nt] : nt;
          return X(xe) ? Ze : re(xe) ? [se(xe, ue), a(Ze)] : "";
        }
        function tt(Y) {
          return C(f(g, oe(Y)));
        }
        function oe(Y) {
          return Y.split(/[\t\n\f\r ]+/);
        }
        function H(Y) {
          for (let ke = 0; ke < 2; ke++) {
            let ue = Y.getParentNode(ke);
            if (ue && ue.type === "AttrNode")
              return ue.name.toLowerCase();
          }
        }
        function ce(Y) {
          return Y = typeof Y == "string" ? Y : "", Y.split(`
`).length - 1;
        }
        function De(Y) {
          Y = typeof Y == "string" ? Y : "";
          let ke = (Y.match(/^([^\S\n\r]*[\n\r])+/g) || [])[0] || "";
          return ce(ke);
        }
        function Be(Y) {
          Y = typeof Y == "string" ? Y : "";
          let ke = (Y.match(/([\n\r][^\S\n\r]*)+$/g) || [])[0] || "";
          return ce(ke);
        }
        function Ke() {
          let Y = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
          return Array.from({ length: Math.min(Y, c) }).fill(u);
        }
        function ze(Y, ke) {
          let { quote: ue, regex: xe } = D(Y, ke);
          return [ue, Y.replace(xe, `\\${ue}`), ue];
        }
        function Ct(Y) {
          let ke = 0, ue = Y.getParentNode(ke);
          for (; ue && Q(ue, ["SubExpression"]); )
            ke++, ue = Y.getParentNode(ke);
          return !!(ue && Q(Y.getParentNode(ke + 1), ["ConcatStatement"]) && Q(Y.getParentNode(ke + 2), ["AttrNode"]));
        }
        function en(Y, ke) {
          let ue = ft(Y, ke), xe = _t(Y, ke);
          return xe ? a([ue, g, p(xe)]) : ue;
        }
        function Gt(Y, ke) {
          let ue = ft(Y, ke), xe = _t(Y, ke);
          return xe ? [a([ue, g, xe]), x] : ue;
        }
        function ft(Y, ke) {
          return ke("path");
        }
        function _t(Y, ke) {
          let ue = Y.getValue(), xe = [];
          if (ue.params.length > 0) {
            let nt = Y.map(ke, "params");
            xe.push(...nt);
          }
          if (ue.hash && ue.hash.pairs.length > 0) {
            let nt = ke("hash");
            xe.push(nt);
          }
          return xe.length === 0 ? "" : f(g, xe);
        }
        function Fe(Y) {
          return ["as |", Y.blockParams.join(" "), "|"];
        }
        m.exports = { print: F, massageAstNode: M };
      } }), Cc = ee({ "src/language-handlebars/parsers.js"() {
        ne();
      } }), yu = ee({ "node_modules/linguist-languages/data/Handlebars.json"(l, m) {
        m.exports = { name: "Handlebars", type: "markup", color: "#f7931e", aliases: ["hbs", "htmlbars"], extensions: [".handlebars", ".hbs"], tmScope: "text.html.handlebars", aceMode: "handlebars", languageId: 155 };
      } }), Da = ee({ "src/language-handlebars/index.js"(l, m) {
        ne();
        var i = uu(), d = os(), p = Cc(), u = [i(yu(), () => ({ since: "2.3.0", parsers: ["glimmer"], vscodeLanguageIds: ["handlebars"] }))], o = { glimmer: d };
        m.exports = { languages: u, printers: o, parsers: p };
      } }), ga = ee({ "src/language-graphql/pragma.js"(l, m) {
        ne();
        function i(p) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(p);
        }
        function d(p) {
          return `# @format

` + p;
        }
        m.exports = { hasPragma: i, insertPragma: d };
      } }), Zi = ee({ "src/language-graphql/loc.js"(l, m) {
        ne();
        function i(p) {
          return typeof p.start == "number" ? p.start : p.loc && p.loc.start;
        }
        function d(p) {
          return typeof p.end == "number" ? p.end : p.loc && p.loc.end;
        }
        m.exports = { locStart: i, locEnd: d };
      } }), as = ee({ "src/language-graphql/printer-graphql.js"(l, m) {
        ne();
        var { builders: { join: i, hardline: d, line: p, softline: u, group: o, indent: a, ifBreak: f } } = Ut(), { isNextLineEmpty: g, isNonEmptyArray: x } = yn(), { insertPragma: C } = ga(), { locStart: A, locEnd: D } = Zi();
        function y(O, Q, v) {
          let P = O.getValue();
          if (!P)
            return "";
          if (typeof P == "string")
            return P;
          switch (P.kind) {
            case "Document": {
              let E = [];
              return O.each((w, c, F) => {
                E.push(v()), c !== F.length - 1 && (E.push(d), g(Q.originalText, w.getValue(), D) && E.push(d));
              }, "definitions"), [...E, d];
            }
            case "OperationDefinition": {
              let E = Q.originalText[A(P)] !== "{", w = !!P.name;
              return [E ? P.operation : "", E && w ? [" ", v("name")] : "", E && !w && x(P.variableDefinitions) ? " " : "", x(P.variableDefinitions) ? o(["(", a([u, i([f("", ", "), u], O.map(v, "variableDefinitions"))]), u, ")"]) : "", T(O, v, P), P.selectionSet ? !E && !w ? "" : " " : "", v("selectionSet")];
            }
            case "FragmentDefinition":
              return ["fragment ", v("name"), x(P.variableDefinitions) ? o(["(", a([u, i([f("", ", "), u], O.map(v, "variableDefinitions"))]), u, ")"]) : "", " on ", v("typeCondition"), T(O, v, P), " ", v("selectionSet")];
            case "SelectionSet":
              return ["{", a([d, i(d, j(O, Q, v, "selections"))]), d, "}"];
            case "Field":
              return o([P.alias ? [v("alias"), ": "] : "", v("name"), P.arguments.length > 0 ? o(["(", a([u, i([f("", ", "), u], j(O, Q, v, "arguments"))]), u, ")"]) : "", T(O, v, P), P.selectionSet ? " " : "", v("selectionSet")]);
            case "Name":
              return P.value;
            case "StringValue": {
              if (P.block) {
                let E = P.value.replace(/"""/g, "\\$&").split(`
`);
                return E.length === 1 && (E[0] = E[0].trim()), E.every((w) => w === "") && (E.length = 0), i(d, ['"""', ...E, '"""']);
              }
              return ['"', P.value.replace(/["\\]/g, "\\$&").replace(/\n/g, "\\n"), '"'];
            }
            case "IntValue":
            case "FloatValue":
            case "EnumValue":
              return P.value;
            case "BooleanValue":
              return P.value ? "true" : "false";
            case "NullValue":
              return "null";
            case "Variable":
              return ["$", v("name")];
            case "ListValue":
              return o(["[", a([u, i([f("", ", "), u], O.map(v, "values"))]), u, "]"]);
            case "ObjectValue":
              return o(["{", Q.bracketSpacing && P.fields.length > 0 ? " " : "", a([u, i([f("", ", "), u], O.map(v, "fields"))]), u, f("", Q.bracketSpacing && P.fields.length > 0 ? " " : ""), "}"]);
            case "ObjectField":
            case "Argument":
              return [v("name"), ": ", v("value")];
            case "Directive":
              return ["@", v("name"), P.arguments.length > 0 ? o(["(", a([u, i([f("", ", "), u], j(O, Q, v, "arguments"))]), u, ")"]) : ""];
            case "NamedType":
              return v("name");
            case "VariableDefinition":
              return [v("variable"), ": ", v("type"), P.defaultValue ? [" = ", v("defaultValue")] : "", T(O, v, P)];
            case "ObjectTypeExtension":
            case "ObjectTypeDefinition":
              return [v("description"), P.description ? d : "", P.kind === "ObjectTypeExtension" ? "extend " : "", "type ", v("name"), P.interfaces.length > 0 ? [" implements ", ...L(O, Q, v)] : "", T(O, v, P), P.fields.length > 0 ? [" {", a([d, i(d, j(O, Q, v, "fields"))]), d, "}"] : ""];
            case "FieldDefinition":
              return [v("description"), P.description ? d : "", v("name"), P.arguments.length > 0 ? o(["(", a([u, i([f("", ", "), u], j(O, Q, v, "arguments"))]), u, ")"]) : "", ": ", v("type"), T(O, v, P)];
            case "DirectiveDefinition":
              return [v("description"), P.description ? d : "", "directive ", "@", v("name"), P.arguments.length > 0 ? o(["(", a([u, i([f("", ", "), u], j(O, Q, v, "arguments"))]), u, ")"]) : "", P.repeatable ? " repeatable" : "", " on ", i(" | ", O.map(v, "locations"))];
            case "EnumTypeExtension":
            case "EnumTypeDefinition":
              return [v("description"), P.description ? d : "", P.kind === "EnumTypeExtension" ? "extend " : "", "enum ", v("name"), T(O, v, P), P.values.length > 0 ? [" {", a([d, i(d, j(O, Q, v, "values"))]), d, "}"] : ""];
            case "EnumValueDefinition":
              return [v("description"), P.description ? d : "", v("name"), T(O, v, P)];
            case "InputValueDefinition":
              return [v("description"), P.description ? P.description.block ? d : p : "", v("name"), ": ", v("type"), P.defaultValue ? [" = ", v("defaultValue")] : "", T(O, v, P)];
            case "InputObjectTypeExtension":
            case "InputObjectTypeDefinition":
              return [v("description"), P.description ? d : "", P.kind === "InputObjectTypeExtension" ? "extend " : "", "input ", v("name"), T(O, v, P), P.fields.length > 0 ? [" {", a([d, i(d, j(O, Q, v, "fields"))]), d, "}"] : ""];
            case "SchemaExtension":
              return ["extend schema", T(O, v, P), ...P.operationTypes.length > 0 ? [" {", a([d, i(d, j(O, Q, v, "operationTypes"))]), d, "}"] : []];
            case "SchemaDefinition":
              return [v("description"), P.description ? d : "", "schema", T(O, v, P), " {", P.operationTypes.length > 0 ? a([d, i(d, j(O, Q, v, "operationTypes"))]) : "", d, "}"];
            case "OperationTypeDefinition":
              return [v("operation"), ": ", v("type")];
            case "InterfaceTypeExtension":
            case "InterfaceTypeDefinition":
              return [v("description"), P.description ? d : "", P.kind === "InterfaceTypeExtension" ? "extend " : "", "interface ", v("name"), P.interfaces.length > 0 ? [" implements ", ...L(O, Q, v)] : "", T(O, v, P), P.fields.length > 0 ? [" {", a([d, i(d, j(O, Q, v, "fields"))]), d, "}"] : ""];
            case "FragmentSpread":
              return ["...", v("name"), T(O, v, P)];
            case "InlineFragment":
              return ["...", P.typeCondition ? [" on ", v("typeCondition")] : "", T(O, v, P), " ", v("selectionSet")];
            case "UnionTypeExtension":
            case "UnionTypeDefinition":
              return o([v("description"), P.description ? d : "", o([P.kind === "UnionTypeExtension" ? "extend " : "", "union ", v("name"), T(O, v, P), P.types.length > 0 ? [" =", f("", " "), a([f([p, "  "]), i([p, "| "], O.map(v, "types"))])] : ""])]);
            case "ScalarTypeExtension":
            case "ScalarTypeDefinition":
              return [v("description"), P.description ? d : "", P.kind === "ScalarTypeExtension" ? "extend " : "", "scalar ", v("name"), T(O, v, P)];
            case "NonNullType":
              return [v("type"), "!"];
            case "ListType":
              return ["[", v("type"), "]"];
            default:
              throw new Error("unknown graphql type: " + JSON.stringify(P.kind));
          }
        }
        function T(O, Q, v) {
          if (v.directives.length === 0)
            return "";
          let P = i(p, O.map(Q, "directives"));
          return v.kind === "FragmentDefinition" || v.kind === "OperationDefinition" ? o([p, P]) : [" ", o(a([u, P]))];
        }
        function j(O, Q, v, P) {
          return O.map((E, w, c) => {
            let F = v();
            return w < c.length - 1 && g(Q.originalText, E.getValue(), D) ? [F, d] : F;
          }, P);
        }
        function M(O) {
          return O.kind && O.kind !== "Comment";
        }
        function k(O) {
          let Q = O.getValue();
          if (Q.kind === "Comment")
            return "#" + Q.value.trimEnd();
          throw new Error("Not a comment: " + JSON.stringify(Q));
        }
        function L(O, Q, v) {
          let P = O.getNode(), E = [], { interfaces: w } = P, c = O.map((F) => v(F), "interfaces");
          for (let F = 0; F < w.length; F++) {
            let S = w[F];
            E.push(c[F]);
            let b = w[F + 1];
            if (b) {
              let B = Q.originalText.slice(S.loc.end, b.loc.start), I = B.includes("#"), $ = B.replace(/#.*/g, "").trim();
              E.push($ === "," ? "," : " &", I ? p : " ");
            }
          }
          return E;
        }
        function _(O, Q) {
          O.kind === "StringValue" && O.block && !O.value.includes(`
`) && (Q.value = Q.value.trim());
        }
        _.ignoredProperties = /* @__PURE__ */ new Set(["loc", "comments"]);
        function R(O) {
          var Q;
          let v = O.getValue();
          return v == null || (Q = v.comments) === null || Q === void 0 ? void 0 : Q.some((P) => P.value.trim() === "prettier-ignore");
        }
        m.exports = { print: y, massageAstNode: _, hasPrettierIgnore: R, insertPragma: C, printComment: k, canAttachComment: M };
      } }), ss = ee({ "src/language-graphql/options.js"(l, m) {
        ne();
        var i = Ci();
        m.exports = { bracketSpacing: i.bracketSpacing };
      } }), ls = ee({ "src/language-graphql/parsers.js"() {
        ne();
      } }), cs = ee({ "node_modules/linguist-languages/data/GraphQL.json"(l, m) {
        m.exports = { name: "GraphQL", type: "data", color: "#e10098", extensions: [".graphql", ".gql", ".graphqls"], tmScope: "source.graphql", aceMode: "text", languageId: 139 };
      } }), eo = ee({ "src/language-graphql/index.js"(l, m) {
        ne();
        var i = uu(), d = as(), p = ss(), u = ls(), o = [i(cs(), () => ({ since: "1.5.0", parsers: ["graphql"], vscodeLanguageIds: ["graphql"] }))], a = { graphql: d };
        m.exports = { languages: o, options: p, printers: a, parsers: u };
      } }), eu = ee({ "node_modules/collapse-white-space/index.js"(l, m) {
        ne(), m.exports = i;
        function i(d) {
          return String(d).replace(/\s+/g, " ");
        }
      } }), ni = ee({ "src/language-markdown/loc.js"(l, m) {
        ne();
        function i(p) {
          return p.position.start.offset;
        }
        function d(p) {
          return p.position.end.offset;
        }
        m.exports = { locStart: i, locEnd: d };
      } }), ps = ee({ "src/language-markdown/constants.evaluate.js"(l, m) {
        m.exports = { cjkPattern: "(?:[\\u02ea-\\u02eb\\u1100-\\u11ff\\u2e80-\\u2e99\\u2e9b-\\u2ef3\\u2f00-\\u2fd5\\u2ff0-\\u303f\\u3041-\\u3096\\u3099-\\u309f\\u30a1-\\u30fa\\u30fc-\\u30ff\\u3105-\\u312f\\u3131-\\u318e\\u3190-\\u3191\\u3196-\\u31ba\\u31c0-\\u31e3\\u31f0-\\u321e\\u322a-\\u3247\\u3260-\\u327e\\u328a-\\u32b0\\u32c0-\\u32cb\\u32d0-\\u3370\\u337b-\\u337f\\u33e0-\\u33fe\\u3400-\\u4db5\\u4e00-\\u9fef\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\uf900-\\ufa6d\\ufa70-\\ufad9\\ufe10-\\ufe1f\\ufe30-\\ufe6f\\uff00-\\uffef]|[\\ud840-\\ud868\\ud86a-\\ud86c\\ud86f-\\ud872\\ud874-\\ud879][\\udc00-\\udfff]|\\ud82c[\\udc00-\\udd1e\\udd50-\\udd52\\udd64-\\udd67]|\\ud83c[\\ude00\\ude50-\\ude51]|\\ud869[\\udc00-\\uded6\\udf00-\\udfff]|\\ud86d[\\udc00-\\udf34\\udf40-\\udfff]|\\ud86e[\\udc00-\\udc1d\\udc20-\\udfff]|\\ud873[\\udc00-\\udea1\\udeb0-\\udfff]|\\ud87a[\\udc00-\\udfe0]|\\ud87e[\\udc00-\\ude1d])(?:[\\ufe00-\\ufe0f]|\\udb40[\\udd00-\\uddef])?", kPattern: "[\\u1100-\\u11ff\\u3001-\\u3003\\u3008-\\u3011\\u3013-\\u301f\\u302e-\\u3030\\u3037\\u30fb\\u3131-\\u318e\\u3200-\\u321e\\u3260-\\u327e\\ua960-\\ua97c\\uac00-\\ud7a3\\ud7b0-\\ud7c6\\ud7cb-\\ud7fb\\ufe45-\\ufe46\\uff61-\\uff65\\uffa0-\\uffbe\\uffc2-\\uffc7\\uffca-\\uffcf\\uffd2-\\uffd7\\uffda-\\uffdc]", punctuationPattern: "[\\u0021-\\u002f\\u003a-\\u0040\\u005b-\\u0060\\u007b-\\u007e\\u00a1\\u00a7\\u00ab\\u00b6-\\u00b7\\u00bb\\u00bf\\u037e\\u0387\\u055a-\\u055f\\u0589-\\u058a\\u05be\\u05c0\\u05c3\\u05c6\\u05f3-\\u05f4\\u0609-\\u060a\\u060c-\\u060d\\u061b\\u061e-\\u061f\\u066a-\\u066d\\u06d4\\u0700-\\u070d\\u07f7-\\u07f9\\u0830-\\u083e\\u085e\\u0964-\\u0965\\u0970\\u09fd\\u0a76\\u0af0\\u0c77\\u0c84\\u0df4\\u0e4f\\u0e5a-\\u0e5b\\u0f04-\\u0f12\\u0f14\\u0f3a-\\u0f3d\\u0f85\\u0fd0-\\u0fd4\\u0fd9-\\u0fda\\u104a-\\u104f\\u10fb\\u1360-\\u1368\\u1400\\u166e\\u169b-\\u169c\\u16eb-\\u16ed\\u1735-\\u1736\\u17d4-\\u17d6\\u17d8-\\u17da\\u1800-\\u180a\\u1944-\\u1945\\u1a1e-\\u1a1f\\u1aa0-\\u1aa6\\u1aa8-\\u1aad\\u1b5a-\\u1b60\\u1bfc-\\u1bff\\u1c3b-\\u1c3f\\u1c7e-\\u1c7f\\u1cc0-\\u1cc7\\u1cd3\\u2010-\\u2027\\u2030-\\u2043\\u2045-\\u2051\\u2053-\\u205e\\u207d-\\u207e\\u208d-\\u208e\\u2308-\\u230b\\u2329-\\u232a\\u2768-\\u2775\\u27c5-\\u27c6\\u27e6-\\u27ef\\u2983-\\u2998\\u29d8-\\u29db\\u29fc-\\u29fd\\u2cf9-\\u2cfc\\u2cfe-\\u2cff\\u2d70\\u2e00-\\u2e2e\\u2e30-\\u2e4f\\u3001-\\u3003\\u3008-\\u3011\\u3014-\\u301f\\u3030\\u303d\\u30a0\\u30fb\\ua4fe-\\ua4ff\\ua60d-\\ua60f\\ua673\\ua67e\\ua6f2-\\ua6f7\\ua874-\\ua877\\ua8ce-\\ua8cf\\ua8f8-\\ua8fa\\ua8fc\\ua92e-\\ua92f\\ua95f\\ua9c1-\\ua9cd\\ua9de-\\ua9df\\uaa5c-\\uaa5f\\uaade-\\uaadf\\uaaf0-\\uaaf1\\uabeb\\ufd3e-\\ufd3f\\ufe10-\\ufe19\\ufe30-\\ufe52\\ufe54-\\ufe61\\ufe63\\ufe68\\ufe6a-\\ufe6b\\uff01-\\uff03\\uff05-\\uff0a\\uff0c-\\uff0f\\uff1a-\\uff1b\\uff1f-\\uff20\\uff3b-\\uff3d\\uff3f\\uff5b\\uff5d\\uff5f-\\uff65]|\\ud800[\\udd00-\\udd02\\udf9f\\udfd0]|\\ud801[\\udd6f]|\\ud802[\\udc57\\udd1f\\udd3f\\ude50-\\ude58\\ude7f\\udef0-\\udef6\\udf39-\\udf3f\\udf99-\\udf9c]|\\ud803[\\udf55-\\udf59]|\\ud804[\\udc47-\\udc4d\\udcbb-\\udcbc\\udcbe-\\udcc1\\udd40-\\udd43\\udd74-\\udd75\\uddc5-\\uddc8\\uddcd\\udddb\\udddd-\\udddf\\ude38-\\ude3d\\udea9]|\\ud805[\\udc4b-\\udc4f\\udc5b\\udc5d\\udcc6\\uddc1-\\uddd7\\ude41-\\ude43\\ude60-\\ude6c\\udf3c-\\udf3e]|\\ud806[\\udc3b\\udde2\\ude3f-\\ude46\\ude9a-\\ude9c\\ude9e-\\udea2]|\\ud807[\\udc41-\\udc45\\udc70-\\udc71\\udef7-\\udef8\\udfff]|\\ud809[\\udc70-\\udc74]|\\ud81a[\\ude6e-\\ude6f\\udef5\\udf37-\\udf3b\\udf44]|\\ud81b[\\ude97-\\ude9a\\udfe2]|\\ud82f[\\udc9f]|\\ud836[\\ude87-\\ude8b]|\\ud83a[\\udd5e-\\udd5f]" };
      } }), ha = ee({ "src/language-markdown/utils.js"(l, m) {
        ne();
        var { getLast: i } = yn(), { locStart: d, locEnd: p } = ni(), { cjkPattern: u, kPattern: o, punctuationPattern: a } = ps(), f = ["liquidNode", "inlineCode", "emphasis", "esComment", "strong", "delete", "wikiLink", "link", "linkReference", "image", "imageReference", "footnote", "footnoteReference", "sentence", "whitespace", "word", "break", "inlineMath"], g = [...f, "tableCell", "paragraph", "heading"], x = new RegExp(o), C = new RegExp(a);
        function A(k, L) {
          let _ = "non-cjk", R = "cj-letter", O = "k-letter", Q = "cjk-punctuation", v = [], P = (L.proseWrap === "preserve" ? k : k.replace(new RegExp(`(${u})
(${u})`, "g"), "$1$2")).split(/([\t\n ]+)/);
          for (let [w, c] of P.entries()) {
            if (w % 2 === 1) {
              v.push({ type: "whitespace", value: /\n/.test(c) ? `
` : " " });
              continue;
            }
            if ((w === 0 || w === P.length - 1) && c === "")
              continue;
            let F = c.split(new RegExp(`(${u})`));
            for (let [S, b] of F.entries())
              if (!((S === 0 || S === F.length - 1) && b === "")) {
                if (S % 2 === 0) {
                  b !== "" && E({ type: "word", value: b, kind: _, hasLeadingPunctuation: C.test(b[0]), hasTrailingPunctuation: C.test(i(b)) });
                  continue;
                }
                E(C.test(b) ? { type: "word", value: b, kind: Q, hasLeadingPunctuation: !0, hasTrailingPunctuation: !0 } : { type: "word", value: b, kind: x.test(b) ? O : R, hasLeadingPunctuation: !1, hasTrailingPunctuation: !1 });
              }
          }
          return v;
          function E(w) {
            let c = i(v);
            c && c.type === "word" && (c.kind === _ && w.kind === R && !c.hasTrailingPunctuation || c.kind === R && w.kind === _ && !w.hasLeadingPunctuation ? v.push({ type: "whitespace", value: " " }) : !F(_, Q) && ![c.value, w.value].some((S) => /\u3000/.test(S)) && v.push({ type: "whitespace", value: "" })), v.push(w);
            function F(S, b) {
              return c.kind === S && w.kind === b || c.kind === b && w.kind === S;
            }
          }
        }
        function D(k, L) {
          let [, _, R, O] = L.slice(k.position.start.offset, k.position.end.offset).match(/^\s*(\d+)(\.|\))(\s*)/);
          return { numberText: _, marker: R, leadingSpaces: O };
        }
        function y(k, L) {
          if (!k.ordered || k.children.length < 2)
            return !1;
          let _ = Number(D(k.children[0], L.originalText).numberText), R = Number(D(k.children[1], L.originalText).numberText);
          if (_ === 0 && k.children.length > 2) {
            let O = Number(D(k.children[2], L.originalText).numberText);
            return R === 1 && O === 1;
          }
          return R === 1;
        }
        function T(k, L) {
          let { value: _ } = k;
          return k.position.end.offset === L.length && _.endsWith(`
`) && L.endsWith(`
`) ? _.slice(0, -1) : _;
        }
        function j(k, L) {
          return function _(R, O, Q) {
            let v = Object.assign({}, L(R, O, Q));
            return v.children && (v.children = v.children.map((P, E) => _(P, E, [v, ...Q]))), v;
          }(k, null, []);
        }
        function M(k) {
          if ((k == null ? void 0 : k.type) !== "link" || k.children.length !== 1)
            return !1;
          let [L] = k.children;
          return d(k) === d(L) && p(k) === p(L);
        }
        m.exports = { mapAst: j, splitText: A, punctuationPattern: a, getFencedCodeBlockValue: T, getOrderedListItemInfo: D, hasGitDiffFriendlyOrderedList: y, INLINE_NODE_TYPES: f, INLINE_NODE_WRAPPER_TYPES: g, isAutolink: M };
      } }), Ru = ee({ "src/language-markdown/embed.js"(l, m) {
        ne();
        var { inferParserByLanguage: i, getMaxContinuousCount: d } = yn(), { builders: { hardline: p, markAsRoot: u }, utils: { replaceEndOfLine: o } } = Ut(), a = Yi(), { getFencedCodeBlockValue: f } = ha();
        function g(x, C, A, D) {
          let y = x.getValue();
          if (y.type === "code" && y.lang !== null) {
            let T = i(y.lang, D);
            if (T) {
              let j = D.__inJsTemplate ? "~" : "`", M = j.repeat(Math.max(3, d(y.value, j) + 1)), k = { parser: T };
              y.lang === "tsx" && (k.filepath = "dummy.tsx");
              let L = A(f(y, D.originalText), k, { stripTrailingHardline: !0 });
              return u([M, y.lang, y.meta ? " " + y.meta : "", p, o(L), p, M]);
            }
          }
          switch (y.type) {
            case "front-matter":
              return a(y, A);
            case "importExport":
              return [A(y.value, { parser: "babel" }, { stripTrailingHardline: !0 }), p];
            case "jsx":
              return A(`<$>${y.value}</$>`, { parser: "__js_expression", rootMarker: "mdx" }, { stripTrailingHardline: !0 });
          }
          return null;
        }
        m.exports = g;
      } }), $u = ee({ "src/language-markdown/pragma.js"(l, m) {
        ne();
        var i = Yr(), d = ["format", "prettier"];
        function p(u) {
          let o = `@(${d.join("|")})`, a = new RegExp([`<!--\\s*${o}\\s*-->`, `{\\s*\\/\\*\\s*${o}\\s*\\*\\/\\s*}`, `<!--.*\r?
[\\s\\S]*(^|
)[^\\S
]*${o}[^\\S
]*($|
)[\\s\\S]*
.*-->`].join("|"), "m"), f = u.match(a);
          return (f == null ? void 0 : f.index) === 0;
        }
        m.exports = { startWithPragma: p, hasPragma: (u) => p(i(u).content.trimStart()), insertPragma: (u) => {
          let o = i(u), a = `<!-- @${d[0]} -->`;
          return o.frontMatter ? `${o.frontMatter.raw}

${a}

${o.content}` : `${a}

${o.content}`;
        } };
      } }), ds = ee({ "src/language-markdown/print-preprocess.js"(l, m) {
        ne();
        var i = sr(), { getOrderedListItemInfo: d, mapAst: p, splitText: u } = ha(), o = /^.$/su;
        function a(M, k) {
          return M = x(M, k), M = D(M), M = g(M, k), M = T(M, k), M = j(M, k), M = y(M, k), M = f(M), M = C(M), M;
        }
        function f(M) {
          return p(M, (k) => k.type !== "import" && k.type !== "export" ? k : Object.assign(Object.assign({}, k), {}, { type: "importExport" }));
        }
        function g(M, k) {
          return p(M, (L) => L.type !== "inlineCode" || k.proseWrap === "preserve" ? L : Object.assign(Object.assign({}, L), {}, { value: L.value.replace(/\s+/g, " ") }));
        }
        function x(M, k) {
          return p(M, (L) => L.type !== "text" || L.value === "*" || L.value === "_" || !o.test(L.value) || L.position.end.offset - L.position.start.offset === L.value.length ? L : Object.assign(Object.assign({}, L), {}, { value: k.originalText.slice(L.position.start.offset, L.position.end.offset) }));
        }
        function C(M) {
          return A(M, (k, L) => k.type === "importExport" && L.type === "importExport", (k, L) => ({ type: "importExport", value: k.value + `

` + L.value, position: { start: k.position.start, end: L.position.end } }));
        }
        function A(M, k, L) {
          return p(M, (_) => {
            if (!_.children)
              return _;
            let R = _.children.reduce((O, Q) => {
              let v = i(O);
              return v && k(v, Q) ? O.splice(-1, 1, L(v, Q)) : O.push(Q), O;
            }, []);
            return Object.assign(Object.assign({}, _), {}, { children: R });
          });
        }
        function D(M) {
          return A(M, (k, L) => k.type === "text" && L.type === "text", (k, L) => ({ type: "text", value: k.value + L.value, position: { start: k.position.start, end: L.position.end } }));
        }
        function y(M, k) {
          return p(M, (L, _, R) => {
            let [O] = R;
            if (L.type !== "text")
              return L;
            let { value: Q } = L;
            return O.type === "paragraph" && (_ === 0 && (Q = Q.trimStart()), _ === O.children.length - 1 && (Q = Q.trimEnd())), { type: "sentence", position: L.position, children: u(Q, k) };
          });
        }
        function T(M, k) {
          return p(M, (L, _, R) => {
            if (L.type === "code") {
              let O = /^\n?(?: {4,}|\t)/.test(k.originalText.slice(L.position.start.offset, L.position.end.offset));
              if (L.isIndented = O, O)
                for (let Q = 0; Q < R.length; Q++) {
                  let v = R[Q];
                  if (v.hasIndentedCodeblock)
                    break;
                  v.type === "list" && (v.hasIndentedCodeblock = !0);
                }
            }
            return L;
          });
        }
        function j(M, k) {
          return p(M, (R, O, Q) => {
            if (R.type === "list" && R.children.length > 0) {
              for (let v = 0; v < Q.length; v++) {
                let P = Q[v];
                if (P.type === "list" && !P.isAligned)
                  return R.isAligned = !1, R;
              }
              R.isAligned = _(R);
            }
            return R;
          });
          function L(R) {
            return R.children.length === 0 ? -1 : R.children[0].position.start.column - 1;
          }
          function _(R) {
            if (!R.ordered)
              return !0;
            let [O, Q] = R.children;
            if (d(O, k.originalText).leadingSpaces.length > 1)
              return !0;
            let v = L(O);
            if (v === -1)
              return !1;
            if (R.children.length === 1)
              return v % k.tabWidth === 0;
            let P = L(Q);
            return v !== P ? !1 : v % k.tabWidth === 0 ? !0 : d(Q, k.originalText).leadingSpaces.length > 1;
          }
        }
        m.exports = a;
      } }), hl = ee({ "src/language-markdown/clean.js"(l, m) {
        ne();
        var i = eu(), { isFrontMatterNode: d } = yn(), { startWithPragma: p } = $u(), u = /* @__PURE__ */ new Set(["position", "raw"]);
        function o(a, f, g) {
          if ((a.type === "front-matter" || a.type === "code" || a.type === "yaml" || a.type === "import" || a.type === "export" || a.type === "jsx") && delete f.value, a.type === "list" && delete f.isAligned, (a.type === "list" || a.type === "listItem") && (delete f.spread, delete f.loose), a.type === "text" || (a.type === "inlineCode" && (f.value = a.value.replace(/[\t\n ]+/g, " ")), a.type === "wikiLink" && (f.value = a.value.trim().replace(/[\t\n]+/g, " ")), (a.type === "definition" || a.type === "linkReference" || a.type === "imageReference") && (f.label = i(a.label)), (a.type === "definition" || a.type === "link" || a.type === "image") && a.title && (f.title = a.title.replace(/\\(["')])/g, "$1")), g && g.type === "root" && g.children.length > 0 && (g.children[0] === a || d(g.children[0]) && g.children[1] === a) && a.type === "html" && p(a.value)))
            return null;
        }
        o.ignoredProperties = u, m.exports = o;
      } }), Vu = ee({ "src/language-markdown/printer-markdown.js"(l, m) {
        ne();
        var i = eu(), { getLast: d, getMinNotPresentContinuousCount: p, getMaxContinuousCount: u, getStringWidth: o, isNonEmptyArray: a } = yn(), { builders: { breakParent: f, join: g, line: x, literalline: C, markAsRoot: A, hardline: D, softline: y, ifBreak: T, fill: j, align: M, indent: k, group: L, hardlineWithoutBreakParent: _ }, utils: { normalizeDoc: R, replaceTextEndOfLine: O }, printer: { printDocToString: Q } } = Ut(), v = Ru(), { insertPragma: P } = $u(), { locStart: E, locEnd: w } = ni(), c = ds(), F = hl(), { getFencedCodeBlockValue: S, hasGitDiffFriendlyOrderedList: b, splitText: B, punctuationPattern: I, INLINE_NODE_TYPES: $, INLINE_NODE_WRAPPER_TYPES: G, isAutolink: W } = ha(), J = /* @__PURE__ */ new Set(["importExport"]), te = ["heading", "tableCell", "link", "wikiLink"], K = /* @__PURE__ */ new Set(["listItem", "definition", "footnoteDefinition"]);
        function ie(Fe, Y, ke) {
          let ue = Fe.getValue();
          if (Ke(Fe))
            return B(Y.originalText.slice(ue.position.start.offset, ue.position.end.offset), Y).map((xe) => xe.type === "word" ? xe.value : xe.value === "" ? "" : X(Fe, xe.value, Y));
          switch (ue.type) {
            case "front-matter":
              return Y.originalText.slice(ue.position.start.offset, ue.position.end.offset);
            case "root":
              return ue.children.length === 0 ? "" : [R(Te(Fe, Y, ke)), J.has(oe(ue).type) ? "" : D];
            case "paragraph":
              return we(Fe, Y, ke, { postprocessor: j });
            case "sentence":
              return we(Fe, Y, ke);
            case "word": {
              let xe = ue.value.replace(/\*/g, "\\$&").replace(new RegExp([`(^|${I})(_+)`, `(_+)(${I}|$)`].join("|"), "g"), (_e, N, Z, Ee, he) => (Z ? `${N}${Z}` : `${Ee}${he}`).replace(/_/g, "\\_")), nt = (_e, N, Z) => _e.type === "sentence" && Z === 0, Ze = (_e, N, Z) => W(_e.children[Z - 1]);
              return xe !== ue.value && (Fe.match(void 0, nt, Ze) || Fe.match(void 0, nt, (_e, N, Z) => _e.type === "emphasis" && Z === 0, Ze)) && (xe = xe.replace(/^(\\?[*_])+/, (_e) => _e.replace(/\\/g, ""))), xe;
            }
            case "whitespace": {
              let xe = Fe.getParentNode(), nt = xe.children.indexOf(ue), Ze = xe.children[nt + 1], _e = Ze && /^>|^(?:[*+-]|#{1,6}|\d+[).])$/.test(Ze.value) ? "never" : Y.proseWrap;
              return X(Fe, ue.value, { proseWrap: _e });
            }
            case "emphasis": {
              let xe;
              if (W(ue.children[0]))
                xe = Y.originalText[ue.position.start.offset];
              else {
                let nt = Fe.getParentNode(), Ze = nt.children.indexOf(ue), _e = nt.children[Ze - 1], N = nt.children[Ze + 1];
                xe = _e && _e.type === "sentence" && _e.children.length > 0 && d(_e.children).type === "word" && !d(_e.children).hasTrailingPunctuation || N && N.type === "sentence" && N.children.length > 0 && N.children[0].type === "word" && !N.children[0].hasLeadingPunctuation || Ne(Fe, "emphasis") ? "*" : "_";
              }
              return [xe, we(Fe, Y, ke), xe];
            }
            case "strong":
              return ["**", we(Fe, Y, ke), "**"];
            case "delete":
              return ["~~", we(Fe, Y, ke), "~~"];
            case "inlineCode": {
              let xe = p(ue.value, "`"), nt = "`".repeat(xe || 1), Ze = xe && !/^\s/.test(ue.value) ? " " : "";
              return [nt, Ze, ue.value, Ze, nt];
            }
            case "wikiLink": {
              let xe = "";
              return Y.proseWrap === "preserve" ? xe = ue.value : xe = ue.value.replace(/[\t\n]+/g, " "), ["[[", xe, "]]"];
            }
            case "link":
              switch (Y.originalText[ue.position.start.offset]) {
                case "<": {
                  let xe = "mailto:";
                  return ["<", ue.url.startsWith(xe) && Y.originalText.slice(ue.position.start.offset + 1, ue.position.start.offset + 1 + xe.length) !== xe ? ue.url.slice(xe.length) : ue.url, ">"];
                }
                case "[":
                  return ["[", we(Fe, Y, ke), "](", ze(ue.url, ")"), Ct(ue.title, Y), ")"];
                default:
                  return Y.originalText.slice(ue.position.start.offset, ue.position.end.offset);
              }
            case "image":
              return ["![", ue.alt || "", "](", ze(ue.url, ")"), Ct(ue.title, Y), ")"];
            case "blockquote":
              return ["> ", M("> ", we(Fe, Y, ke))];
            case "heading":
              return ["#".repeat(ue.depth) + " ", we(Fe, Y, ke)];
            case "code": {
              if (ue.isIndented) {
                let Ze = " ".repeat(4);
                return M(Ze, [Ze, ...O(ue.value, D)]);
              }
              let xe = Y.__inJsTemplate ? "~" : "`", nt = xe.repeat(Math.max(3, u(ue.value, xe) + 1));
              return [nt, ue.lang || "", ue.meta ? " " + ue.meta : "", D, ...O(S(ue, Y.originalText), D), D, nt];
            }
            case "html": {
              let xe = Fe.getParentNode(), nt = xe.type === "root" && d(xe.children) === ue ? ue.value.trimEnd() : ue.value, Ze = /^<!--.*-->$/s.test(nt);
              return O(nt, Ze ? D : A(C));
            }
            case "list": {
              let xe = se(ue, Fe.getParentNode()), nt = b(ue, Y);
              return we(Fe, Y, ke, { processor: (Ze, _e) => {
                let N = Ee(), Z = Ze.getValue();
                if (Z.children.length === 2 && Z.children[1].type === "html" && Z.children[0].position.start.column !== Z.children[1].position.start.column)
                  return [N, q(Ze, Y, ke, N)];
                return [N, M(" ".repeat(N.length), q(Ze, Y, ke, N))];
                function Ee() {
                  let he = ue.ordered ? (_e === 0 ? ue.start : nt ? 1 : ue.start + _e) + (xe % 2 === 0 ? ". " : ") ") : xe % 2 === 0 ? "- " : "* ";
                  return ue.isAligned || ue.hasIndentedCodeblock ? U(he, Y) : he;
                }
              } });
            }
            case "thematicBreak": {
              let xe = le(Fe, "list");
              return xe === -1 ? "---" : se(Fe.getParentNode(xe), Fe.getParentNode(xe + 1)) % 2 === 0 ? "***" : "---";
            }
            case "linkReference":
              return ["[", we(Fe, Y, ke), "]", ue.referenceType === "full" ? ft(ue) : ue.referenceType === "collapsed" ? "[]" : ""];
            case "imageReference":
              switch (ue.referenceType) {
                case "full":
                  return ["![", ue.alt || "", "]", ft(ue)];
                default:
                  return ["![", ue.alt, "]", ue.referenceType === "collapsed" ? "[]" : ""];
              }
            case "definition": {
              let xe = Y.proseWrap === "always" ? x : " ";
              return L([ft(ue), ":", k([xe, ze(ue.url), ue.title === null ? "" : [xe, Ct(ue.title, Y, !1)]])]);
            }
            case "footnote":
              return ["[^", we(Fe, Y, ke), "]"];
            case "footnoteReference":
              return _t(ue);
            case "footnoteDefinition": {
              let xe = Fe.getParentNode().children[Fe.getName() + 1], nt = ue.children.length === 1 && ue.children[0].type === "paragraph" && (Y.proseWrap === "never" || Y.proseWrap === "preserve" && ue.children[0].position.start.line === ue.children[0].position.end.line);
              return [_t(ue), ": ", nt ? we(Fe, Y, ke) : L([M(" ".repeat(4), we(Fe, Y, ke, { processor: (Ze, _e) => _e === 0 ? L([y, ke()]) : ke() })), xe && xe.type === "footnoteDefinition" ? y : ""])];
            }
            case "table":
              return re(Fe, Y, ke);
            case "tableCell":
              return we(Fe, Y, ke);
            case "break":
              return /\s/.test(Y.originalText[ue.position.start.offset]) ? ["  ", A(C)] : ["\\", D];
            case "liquidNode":
              return O(ue.value, D);
            case "importExport":
              return [ue.value, D];
            case "esComment":
              return ["{/* ", ue.value, " */}"];
            case "jsx":
              return ue.value;
            case "math":
              return ["$$", D, ue.value ? [...O(ue.value, D), D] : "", "$$"];
            case "inlineMath":
              return Y.originalText.slice(E(ue), w(ue));
            case "tableRow":
            case "listItem":
            default:
              throw new Error(`Unknown markdown type ${JSON.stringify(ue.type)}`);
          }
        }
        function q(Fe, Y, ke, ue) {
          let xe = Fe.getValue(), nt = xe.checked === null ? "" : xe.checked ? "[x] " : "[ ] ";
          return [nt, we(Fe, Y, ke, { processor: (Ze, _e) => {
            if (_e === 0 && Ze.getValue().type !== "list")
              return M(" ".repeat(nt.length), ke());
            let N = " ".repeat(en(Y.tabWidth - ue.length, 0, 3));
            return [N, M(N, ke())];
          } })];
        }
        function U(Fe, Y) {
          let ke = ue();
          return Fe + " ".repeat(ke >= 4 ? 0 : ke);
          function ue() {
            let xe = Fe.length % Y.tabWidth;
            return xe === 0 ? 0 : Y.tabWidth - xe;
          }
        }
        function se(Fe, Y) {
          return ye(Fe, Y, (ke) => ke.ordered === Fe.ordered);
        }
        function ye(Fe, Y, ke) {
          let ue = -1;
          for (let xe of Y.children)
            if (xe.type === Fe.type && ke(xe) ? ue++ : ue = -1, xe === Fe)
              return ue;
        }
        function le(Fe, Y) {
          let ke = Array.isArray(Y) ? Y : [Y], ue = -1, xe;
          for (; xe = Fe.getParentNode(++ue); )
            if (ke.includes(xe.type))
              return ue;
          return -1;
        }
        function Ne(Fe, Y) {
          let ke = le(Fe, Y);
          return ke === -1 ? null : Fe.getParentNode(ke);
        }
        function X(Fe, Y, ke) {
          if (ke.proseWrap === "preserve" && Y === `
`)
            return D;
          let ue = ke.proseWrap === "always" && !Ne(Fe, te);
          return Y !== "" ? ue ? x : " " : ue ? y : "";
        }
        function re(Fe, Y, ke) {
          let ue = Fe.getValue(), xe = [], nt = Fe.map((he) => he.map((qe, gt) => {
            let Ue = Q(ke(), Y).formatted, qn = o(Ue);
            return xe[gt] = Math.max(xe[gt] || 3, qn), { text: Ue, width: qn };
          }, "children"), "children"), Ze = N(!1);
          if (Y.proseWrap !== "never")
            return [f, Ze];
          let _e = N(!0);
          return [f, L(T(_e, Ze))];
          function N(he) {
            let qe = [Ee(nt[0], he), Z(he)];
            return nt.length > 1 && qe.push(g(_, nt.slice(1).map((gt) => Ee(gt, he)))), g(_, qe);
          }
          function Z(he) {
            return `| ${xe.map((qe, gt) => {
              let Ue = ue.align[gt], qn = Ue === "center" || Ue === "left" ? ":" : "-", ct = Ue === "center" || Ue === "right" ? ":" : "-", Ln = he ? "-" : "-".repeat(qe - 2);
              return `${qn}${Ln}${ct}`;
            }).join(" | ")} |`;
          }
          function Ee(he, qe) {
            return `| ${he.map((gt, Ue) => {
              let { text: qn, width: ct } = gt;
              if (qe)
                return qn;
              let Ln = xe[Ue] - ct, pt = ue.align[Ue], Mt = 0;
              pt === "right" ? Mt = Ln : pt === "center" && (Mt = Math.floor(Ln / 2));
              let Qt = Ln - Mt;
              return `${" ".repeat(Mt)}${qn}${" ".repeat(Qt)}`;
            }).join(" | ")} |`;
          }
        }
        function Te(Fe, Y, ke) {
          let ue = [], xe = null, { children: nt } = Fe.getValue();
          for (let [Ze, _e] of nt.entries())
            switch (H(_e)) {
              case "start":
                xe === null && (xe = { index: Ze, offset: _e.position.end.offset });
                break;
              case "end":
                xe !== null && (ue.push({ start: xe, end: { index: Ze, offset: _e.position.start.offset } }), xe = null);
                break;
            }
          return we(Fe, Y, ke, { processor: (Ze, _e) => {
            if (ue.length > 0) {
              let N = ue[0];
              if (_e === N.start.index)
                return [tt(nt[N.start.index]), Y.originalText.slice(N.start.offset, N.end.offset), tt(nt[N.end.index])];
              if (N.start.index < _e && _e < N.end.index)
                return !1;
              if (_e === N.end.index)
                return ue.shift(), !1;
            }
            return ke();
          } });
        }
        function we(Fe, Y, ke) {
          let ue = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : {}, { postprocessor: xe } = ue, nt = ue.processor || (() => ke()), Ze = Fe.getValue(), _e = [], N;
          return Fe.each((Z, Ee) => {
            let he = Z.getValue(), qe = nt(Z, Ee);
            if (qe !== !1) {
              let gt = { parts: _e, prevNode: N, parentNode: Ze, options: Y };
              ce(he, gt) && (_e.push(D), N && J.has(N.type) || (De(he, gt) || Be(he, gt)) && _e.push(D), Be(he, gt) && _e.push(D)), _e.push(qe), N = he;
            }
          }, "children"), xe ? xe(_e) : _e;
        }
        function tt(Fe) {
          if (Fe.type === "html")
            return Fe.value;
          if (Fe.type === "paragraph" && Array.isArray(Fe.children) && Fe.children.length === 1 && Fe.children[0].type === "esComment")
            return ["{/* ", Fe.children[0].value, " */}"];
        }
        function oe(Fe) {
          let Y = Fe;
          for (; a(Y.children); )
            Y = d(Y.children);
          return Y;
        }
        function H(Fe) {
          let Y;
          if (Fe.type === "html")
            Y = Fe.value.match(/^<!--\s*prettier-ignore(?:-(start|end))?\s*-->$/);
          else {
            let ke;
            Fe.type === "esComment" ? ke = Fe : Fe.type === "paragraph" && Fe.children.length === 1 && Fe.children[0].type === "esComment" && (ke = Fe.children[0]), ke && (Y = ke.value.match(/^prettier-ignore(?:-(start|end))?$/));
          }
          return Y ? Y[1] || "next" : !1;
        }
        function ce(Fe, Y) {
          let ke = Y.parts.length === 0, ue = $.includes(Fe.type), xe = Fe.type === "html" && G.includes(Y.parentNode.type);
          return !ke && !ue && !xe;
        }
        function De(Fe, Y) {
          var ke, ue, xe;
          let nt = (Y.prevNode && Y.prevNode.type) === Fe.type && K.has(Fe.type), Ze = Y.parentNode.type === "listItem" && !Y.parentNode.loose, _e = ((ke = Y.prevNode) === null || ke === void 0 ? void 0 : ke.type) === "listItem" && Y.prevNode.loose, N = H(Y.prevNode) === "next", Z = Fe.type === "html" && ((ue = Y.prevNode) === null || ue === void 0 ? void 0 : ue.type) === "html" && Y.prevNode.position.end.line + 1 === Fe.position.start.line, Ee = Fe.type === "html" && Y.parentNode.type === "listItem" && ((xe = Y.prevNode) === null || xe === void 0 ? void 0 : xe.type) === "paragraph" && Y.prevNode.position.end.line + 1 === Fe.position.start.line;
          return _e || !(nt || Ze || N || Z || Ee);
        }
        function Be(Fe, Y) {
          let ke = Y.prevNode && Y.prevNode.type === "list", ue = Fe.type === "code" && Fe.isIndented;
          return ke && ue;
        }
        function Ke(Fe) {
          let Y = Ne(Fe, ["linkReference", "imageReference"]);
          return Y && (Y.type !== "linkReference" || Y.referenceType !== "full");
        }
        function ze(Fe) {
          let Y = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : [], ke = [" ", ...Array.isArray(Y) ? Y : [Y]];
          return new RegExp(ke.map((ue) => `\\${ue}`).join("|")).test(Fe) ? `<${Fe}>` : Fe;
        }
        function Ct(Fe, Y) {
          let ke = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !0;
          if (!Fe)
            return "";
          if (ke)
            return " " + Ct(Fe, Y, !1);
          if (Fe = Fe.replace(/\\(["')])/g, "$1"), Fe.includes('"') && Fe.includes("'") && !Fe.includes(")"))
            return `(${Fe})`;
          let ue = Fe.split("'").length - 1, xe = Fe.split('"').length - 1, nt = ue > xe ? '"' : xe > ue || Y.singleQuote ? "'" : '"';
          return Fe = Fe.replace(/\\/, "\\\\"), Fe = Fe.replace(new RegExp(`(${nt})`, "g"), "\\$1"), `${nt}${Fe}${nt}`;
        }
        function en(Fe, Y, ke) {
          return Fe < Y ? Y : Fe > ke ? ke : Fe;
        }
        function Gt(Fe) {
          let Y = Number(Fe.getName());
          if (Y === 0)
            return !1;
          let ke = Fe.getParentNode().children[Y - 1];
          return H(ke) === "next";
        }
        function ft(Fe) {
          return `[${i(Fe.label)}]`;
        }
        function _t(Fe) {
          return `[^${Fe.label}]`;
        }
        m.exports = { preprocess: c, print: ie, embed: v, massageAstNode: F, hasPrettierIgnore: Gt, insertPragma: P };
      } }), ri = ee({ "src/language-markdown/options.js"(l, m) {
        ne();
        var i = Ci();
        m.exports = { proseWrap: i.proseWrap, singleQuote: i.singleQuote };
      } }), ya = ee({ "src/language-markdown/parsers.js"() {
        ne();
      } }), fs = ee({ "node_modules/linguist-languages/data/Markdown.json"(l, m) {
        m.exports = { name: "Markdown", type: "prose", color: "#083fa1", aliases: ["pandoc"], aceMode: "markdown", codemirrorMode: "gfm", codemirrorMimeType: "text/x-gfm", wrap: !0, extensions: [".md", ".livemd", ".markdown", ".mdown", ".mdwn", ".mdx", ".mkd", ".mkdn", ".mkdown", ".ronn", ".scd", ".workbook"], filenames: ["contents.lr"], tmScope: "source.gfm", languageId: 222 };
      } }), Ea = ee({ "src/language-markdown/index.js"(l, m) {
        ne();
        var i = uu(), d = Vu(), p = ri(), u = ya(), o = [i(fs(), (f) => ({ since: "1.8.0", parsers: ["markdown"], vscodeLanguageIds: ["markdown"], filenames: [...f.filenames, "README"], extensions: f.extensions.filter((g) => g !== ".mdx") })), i(fs(), () => ({ name: "MDX", since: "1.15.0", parsers: ["mdx"], vscodeLanguageIds: ["mdx"], filenames: [], extensions: [".mdx"] }))], a = { mdast: d };
        m.exports = { languages: o, options: p, printers: a, parsers: u };
      } }), yl = ee({ "src/language-html/clean.js"(l, m) {
        ne();
        var { isFrontMatterNode: i } = yn(), d = /* @__PURE__ */ new Set(["sourceSpan", "startSourceSpan", "endSourceSpan", "nameSpan", "valueSpan"]);
        function p(u, o) {
          if (u.type === "text" || u.type === "comment" || i(u) || u.type === "yaml" || u.type === "toml")
            return null;
          u.type === "attribute" && delete o.value, u.type === "docType" && delete o.value;
        }
        p.ignoredProperties = d, m.exports = p;
      } }), El = ee({ "src/language-html/constants.evaluate.js"(l, m) {
        m.exports = { CSS_DISPLAY_TAGS: { area: "none", base: "none", basefont: "none", datalist: "none", head: "none", link: "none", meta: "none", noembed: "none", noframes: "none", param: "block", rp: "none", script: "block", source: "block", style: "none", template: "inline", track: "block", title: "none", html: "block", body: "block", address: "block", blockquote: "block", center: "block", div: "block", figure: "block", figcaption: "block", footer: "block", form: "block", header: "block", hr: "block", legend: "block", listing: "block", main: "block", p: "block", plaintext: "block", pre: "block", xmp: "block", slot: "contents", ruby: "ruby", rt: "ruby-text", article: "block", aside: "block", h1: "block", h2: "block", h3: "block", h4: "block", h5: "block", h6: "block", hgroup: "block", nav: "block", section: "block", dir: "block", dd: "block", dl: "block", dt: "block", ol: "block", ul: "block", li: "list-item", table: "table", caption: "table-caption", colgroup: "table-column-group", col: "table-column", thead: "table-header-group", tbody: "table-row-group", tfoot: "table-footer-group", tr: "table-row", td: "table-cell", th: "table-cell", fieldset: "block", button: "inline-block", details: "block", summary: "block", dialog: "block", meter: "inline-block", progress: "inline-block", object: "inline-block", video: "inline-block", audio: "inline-block", select: "inline-block", option: "block", optgroup: "block" }, CSS_DISPLAY_DEFAULT: "inline", CSS_WHITE_SPACE_TAGS: { listing: "pre", plaintext: "pre", pre: "pre", xmp: "pre", nobr: "nowrap", table: "initial", textarea: "pre-wrap" }, CSS_WHITE_SPACE_DEFAULT: "normal" };
      } }), ms = ee({ "src/language-html/utils/is-unknown-namespace.js"(l, m) {
        ne();
        function i(d) {
          return d.type === "element" && !d.hasExplicitNamespace && !["html", "svg"].includes(d.namespace);
        }
        m.exports = i;
      } }), Ku = ee({ "src/language-html/utils/index.js"(l, m) {
        ne();
        var { inferParserByLanguage: i, isFrontMatterNode: d } = yn(), { builders: { line: p, hardline: u, join: o }, utils: { getDocParts: a, replaceTextEndOfLine: f } } = Ut(), { CSS_DISPLAY_TAGS: g, CSS_DISPLAY_DEFAULT: x, CSS_WHITE_SPACE_TAGS: C, CSS_WHITE_SPACE_DEFAULT: A } = El(), D = ms(), y = /* @__PURE__ */ new Set(["	", `
`, "\f", "\r", " "]), T = (N) => N.replace(/^[\t\n\f\r ]+/, ""), j = (N) => N.replace(/[\t\n\f\r ]+$/, ""), M = (N) => T(j(N)), k = (N) => N.replace(/^[\t\f\r ]*\n/g, ""), L = (N) => k(j(N)), _ = (N) => N.split(/[\t\n\f\r ]+/), R = (N) => N.match(/^[\t\n\f\r ]*/)[0], O = (N) => {
          let [, Z, Ee, he] = N.match(/^([\t\n\f\r ]*)(.*?)([\t\n\f\r ]*)$/s);
          return { leadingWhitespace: Z, trailingWhitespace: he, text: Ee };
        }, Q = (N) => /[\t\n\f\r ]/.test(N);
        function v(N, Z) {
          return !!(N.type === "ieConditionalComment" && N.lastChild && !N.lastChild.isSelfClosing && !N.lastChild.endSourceSpan || N.type === "ieConditionalComment" && !N.complete || De(N) && N.children.some((Ee) => Ee.type !== "text" && Ee.type !== "interpolation") || ue(N, Z) && !c(N) && N.type !== "interpolation");
        }
        function P(N) {
          return N.type === "attribute" || !N.parent || !N.prev ? !1 : E(N.prev);
        }
        function E(N) {
          return N.type === "comment" && N.value.trim() === "prettier-ignore";
        }
        function w(N) {
          return N.type === "text" || N.type === "comment";
        }
        function c(N) {
          return N.type === "element" && (N.fullName === "script" || N.fullName === "style" || N.fullName === "svg:style" || D(N) && (N.name === "script" || N.name === "style"));
        }
        function F(N) {
          return N.children && !c(N);
        }
        function S(N) {
          return c(N) || N.type === "interpolation" || b(N);
        }
        function b(N) {
          return Ct(N).startsWith("pre");
        }
        function B(N, Z) {
          let Ee = he();
          if (Ee && !N.prev && N.parent && N.parent.tagDefinition && N.parent.tagDefinition.ignoreFirstLf)
            return N.type === "interpolation";
          return Ee;
          function he() {
            return d(N) ? !1 : (N.type === "text" || N.type === "interpolation") && N.prev && (N.prev.type === "text" || N.prev.type === "interpolation") ? !0 : !N.parent || N.parent.cssDisplay === "none" ? !1 : De(N.parent) ? !0 : !(!N.prev && (N.parent.type === "root" || De(N) && N.parent || c(N.parent) || Y(N.parent, Z) || !we(N.parent.cssDisplay)) || N.prev && !H(N.prev.cssDisplay));
          }
        }
        function I(N, Z) {
          return d(N) ? !1 : (N.type === "text" || N.type === "interpolation") && N.next && (N.next.type === "text" || N.next.type === "interpolation") ? !0 : !N.parent || N.parent.cssDisplay === "none" ? !1 : De(N.parent) ? !0 : !(!N.next && (N.parent.type === "root" || De(N) && N.parent || c(N.parent) || Y(N.parent, Z) || !tt(N.parent.cssDisplay)) || N.next && !oe(N.next.cssDisplay));
        }
        function $(N) {
          return ce(N.cssDisplay) && !c(N);
        }
        function G(N) {
          return d(N) || N.next && N.sourceSpan.end && N.sourceSpan.end.line + 1 < N.next.sourceSpan.start.line;
        }
        function W(N) {
          return J(N) || N.type === "element" && N.children.length > 0 && (["body", "script", "style"].includes(N.name) || N.children.some((Z) => le(Z))) || N.firstChild && N.firstChild === N.lastChild && N.firstChild.type !== "text" && q(N.firstChild) && (!N.lastChild.isTrailingSpaceSensitive || U(N.lastChild));
        }
        function J(N) {
          return N.type === "element" && N.children.length > 0 && (["html", "head", "ul", "ol", "select"].includes(N.name) || N.cssDisplay.startsWith("table") && N.cssDisplay !== "table-cell");
        }
        function te(N) {
          return se(N) || N.prev && K(N.prev) || ie(N);
        }
        function K(N) {
          return se(N) || N.type === "element" && N.fullName === "br" || ie(N);
        }
        function ie(N) {
          return q(N) && U(N);
        }
        function q(N) {
          return N.hasLeadingSpaces && (N.prev ? N.prev.sourceSpan.end.line < N.sourceSpan.start.line : N.parent.type === "root" || N.parent.startSourceSpan.end.line < N.sourceSpan.start.line);
        }
        function U(N) {
          return N.hasTrailingSpaces && (N.next ? N.next.sourceSpan.start.line > N.sourceSpan.end.line : N.parent.type === "root" || N.parent.endSourceSpan && N.parent.endSourceSpan.start.line > N.sourceSpan.end.line);
        }
        function se(N) {
          switch (N.type) {
            case "ieConditionalComment":
            case "comment":
            case "directive":
              return !0;
            case "element":
              return ["script", "select"].includes(N.name);
          }
          return !1;
        }
        function ye(N) {
          return N.lastChild ? ye(N.lastChild) : N;
        }
        function le(N) {
          return N.children && N.children.some((Z) => Z.type !== "text");
        }
        function Ne(N) {
          let { type: Z, lang: Ee } = N.attrMap;
          if (Z === "module" || Z === "text/javascript" || Z === "text/babel" || Z === "application/javascript" || Ee === "jsx")
            return "babel";
          if (Z === "application/x-typescript" || Ee === "ts" || Ee === "tsx")
            return "typescript";
          if (Z === "text/markdown")
            return "markdown";
          if (Z === "text/html")
            return "html";
          if (Z && (Z.endsWith("json") || Z.endsWith("importmap")) || Z === "speculationrules")
            return "json";
          if (Z === "text/x-handlebars-template")
            return "glimmer";
        }
        function X(N, Z) {
          let { lang: Ee } = N.attrMap;
          if (!Ee || Ee === "postcss" || Ee === "css")
            return "css";
          if (Ee === "scss")
            return "scss";
          if (Ee === "less")
            return "less";
          if (Ee === "stylus")
            return i("stylus", Z);
        }
        function re(N, Z) {
          if (N.name === "script" && !N.attrMap.src)
            return !N.attrMap.lang && !N.attrMap.type ? "babel" : Ne(N);
          if (N.name === "style")
            return X(N, Z);
          if (Z && ue(N, Z))
            return Ne(N) || !("src" in N.attrMap) && i(N.attrMap.lang, Z);
        }
        function Te(N) {
          return N === "block" || N === "list-item" || N.startsWith("table");
        }
        function we(N) {
          return !Te(N) && N !== "inline-block";
        }
        function tt(N) {
          return !Te(N) && N !== "inline-block";
        }
        function oe(N) {
          return !Te(N);
        }
        function H(N) {
          return !Te(N);
        }
        function ce(N) {
          return !Te(N) && N !== "inline-block";
        }
        function De(N) {
          return Ct(N).startsWith("pre");
        }
        function Be(N, Z) {
          let Ee = 0;
          for (let he = N.stack.length - 1; he >= 0; he--) {
            let qe = N.stack[he];
            qe && typeof qe == "object" && !Array.isArray(qe) && Z(qe) && Ee++;
          }
          return Ee;
        }
        function Ke(N, Z) {
          let Ee = N;
          for (; Ee; ) {
            if (Z(Ee))
              return !0;
            Ee = Ee.parent;
          }
          return !1;
        }
        function ze(N, Z) {
          if (N.prev && N.prev.type === "comment") {
            let he = N.prev.value.match(/^\s*display:\s*([a-z]+)\s*$/);
            if (he)
              return he[1];
          }
          let Ee = !1;
          if (N.type === "element" && N.namespace === "svg")
            if (Ke(N, (he) => he.fullName === "svg:foreignObject"))
              Ee = !0;
            else
              return N.name === "svg" ? "inline-block" : "block";
          switch (Z.htmlWhitespaceSensitivity) {
            case "strict":
              return "inline";
            case "ignore":
              return "block";
            default:
              return Z.parser === "vue" && N.parent && N.parent.type === "root" ? "block" : N.type === "element" && (!N.namespace || Ee || D(N)) && g[N.name] || x;
          }
        }
        function Ct(N) {
          return N.type === "element" && (!N.namespace || D(N)) && C[N.name] || A;
        }
        function en(N) {
          let Z = Number.POSITIVE_INFINITY;
          for (let Ee of N.split(`
`)) {
            if (Ee.length === 0)
              continue;
            if (!y.has(Ee[0]))
              return 0;
            let he = R(Ee).length;
            Ee.length !== he && he < Z && (Z = he);
          }
          return Z === Number.POSITIVE_INFINITY ? 0 : Z;
        }
        function Gt(N) {
          let Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : en(N);
          return Z === 0 ? N : N.split(`
`).map((Ee) => Ee.slice(Z)).join(`
`);
        }
        function ft(N, Z) {
          let Ee = 0;
          for (let he = 0; he < N.length; he++)
            N[he] === Z && Ee++;
          return Ee;
        }
        function _t(N) {
          return N.replace(/&apos;/g, "'").replace(/&quot;/g, '"');
        }
        var Fe = /* @__PURE__ */ new Set(["template", "style", "script"]);
        function Y(N, Z) {
          return ke(N, Z) && !Fe.has(N.fullName);
        }
        function ke(N, Z) {
          return Z.parser === "vue" && N.type === "element" && N.parent.type === "root" && N.fullName.toLowerCase() !== "html";
        }
        function ue(N, Z) {
          return ke(N, Z) && (Y(N, Z) || N.attrMap.lang && N.attrMap.lang !== "html");
        }
        function xe(N) {
          let Z = N.fullName;
          return Z.charAt(0) === "#" || Z === "slot-scope" || Z === "v-slot" || Z.startsWith("v-slot:");
        }
        function nt(N, Z) {
          let Ee = N.parent;
          if (!ke(Ee, Z))
            return !1;
          let he = Ee.fullName, qe = N.fullName;
          return he === "script" && qe === "setup" || he === "style" && qe === "vars";
        }
        function Ze(N) {
          let Z = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : N.value;
          return N.parent.isWhitespaceSensitive ? N.parent.isIndentationSensitive ? f(Z) : f(Gt(L(Z)), u) : a(o(p, _(Z)));
        }
        function _e(N, Z) {
          return ke(N, Z) && N.name === "script";
        }
        m.exports = { htmlTrim: M, htmlTrimPreserveIndentation: L, hasHtmlWhitespace: Q, getLeadingAndTrailingHtmlWhitespace: O, canHaveInterpolation: F, countChars: ft, countParents: Be, dedentString: Gt, forceBreakChildren: J, forceBreakContent: W, forceNextEmptyLine: G, getLastDescendant: ye, getNodeCssStyleDisplay: ze, getNodeCssStyleWhiteSpace: Ct, hasPrettierIgnore: P, inferScriptParser: re, isVueCustomBlock: Y, isVueNonHtmlBlock: ue, isVueScriptTag: _e, isVueSlotAttribute: xe, isVueSfcBindingsAttribute: nt, isVueSfcBlock: ke, isDanglingSpaceSensitiveNode: $, isIndentationSensitiveNode: b, isLeadingSpaceSensitiveNode: B, isPreLikeNode: De, isScriptLikeTag: c, isTextLikeNode: w, isTrailingSpaceSensitiveNode: I, isWhitespaceSensitiveNode: S, isUnknownNamespace: D, preferHardlineAsLeadingSpaces: te, preferHardlineAsTrailingSpaces: K, shouldPreserveContent: v, unescapeQuoteEntities: _t, getTextValueParts: Ze };
      } }), vl = ee({ "node_modules/angular-html-parser/lib/compiler/src/chars.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 }), l.$EOF = 0, l.$BSPACE = 8, l.$TAB = 9, l.$LF = 10, l.$VTAB = 11, l.$FF = 12, l.$CR = 13, l.$SPACE = 32, l.$BANG = 33, l.$DQ = 34, l.$HASH = 35, l.$$ = 36, l.$PERCENT = 37, l.$AMPERSAND = 38, l.$SQ = 39, l.$LPAREN = 40, l.$RPAREN = 41, l.$STAR = 42, l.$PLUS = 43, l.$COMMA = 44, l.$MINUS = 45, l.$PERIOD = 46, l.$SLASH = 47, l.$COLON = 58, l.$SEMICOLON = 59, l.$LT = 60, l.$EQ = 61, l.$GT = 62, l.$QUESTION = 63, l.$0 = 48, l.$7 = 55, l.$9 = 57, l.$A = 65, l.$E = 69, l.$F = 70, l.$X = 88, l.$Z = 90, l.$LBRACKET = 91, l.$BACKSLASH = 92, l.$RBRACKET = 93, l.$CARET = 94, l.$_ = 95, l.$a = 97, l.$b = 98, l.$e = 101, l.$f = 102, l.$n = 110, l.$r = 114, l.$t = 116, l.$u = 117, l.$v = 118, l.$x = 120, l.$z = 122, l.$LBRACE = 123, l.$BAR = 124, l.$RBRACE = 125, l.$NBSP = 160, l.$PIPE = 124, l.$TILDA = 126, l.$AT = 64, l.$BT = 96;
        function m(a) {
          return a >= l.$TAB && a <= l.$SPACE || a == l.$NBSP;
        }
        l.isWhitespace = m;
        function i(a) {
          return l.$0 <= a && a <= l.$9;
        }
        l.isDigit = i;
        function d(a) {
          return a >= l.$a && a <= l.$z || a >= l.$A && a <= l.$Z;
        }
        l.isAsciiLetter = d;
        function p(a) {
          return a >= l.$a && a <= l.$f || a >= l.$A && a <= l.$F || i(a);
        }
        l.isAsciiHexDigit = p;
        function u(a) {
          return a === l.$LF || a === l.$CR;
        }
        l.isNewLine = u;
        function o(a) {
          return l.$0 <= a && a <= l.$7;
        }
        l.isOctalDigit = o;
      } }), Cl = ee({ "node_modules/angular-html-parser/lib/compiler/src/aot/static_symbol.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = class {
          constructor(d, p, u) {
            this.filePath = d, this.name = p, this.members = u;
          }
          assertNoMembers() {
            if (this.members.length)
              throw new Error(`Illegal state: symbol without members expected, but got ${JSON.stringify(this)}.`);
          }
        };
        l.StaticSymbol = m;
        var i = class {
          constructor() {
            this.cache = /* @__PURE__ */ new Map();
          }
          get(d, p, u) {
            u = u || [];
            let o = u.length ? `.${u.join(".")}` : "", a = `"${d}".${p}${o}`, f = this.cache.get(a);
            return f || (f = new m(d, p, u), this.cache.set(a, f)), f;
          }
        };
        l.StaticSymbolCache = i;
      } }), Fl = ee({ "node_modules/angular-html-parser/lib/compiler/src/util.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = /-+([a-z0-9])/g;
        function i(c) {
          return c.replace(m, function() {
            for (var F = arguments.length, S = new Array(F), b = 0; b < F; b++)
              S[b] = arguments[b];
            return S[1].toUpperCase();
          });
        }
        l.dashCaseToCamelCase = i;
        function d(c, F) {
          return u(c, ":", F);
        }
        l.splitAtColon = d;
        function p(c, F) {
          return u(c, ".", F);
        }
        l.splitAtPeriod = p;
        function u(c, F, S) {
          let b = c.indexOf(F);
          return b == -1 ? S : [c.slice(0, b).trim(), c.slice(b + 1).trim()];
        }
        function o(c, F, S) {
          return Array.isArray(c) ? F.visitArray(c, S) : k(c) ? F.visitStringMap(c, S) : c == null || typeof c == "string" || typeof c == "number" || typeof c == "boolean" ? F.visitPrimitive(c, S) : F.visitOther(c, S);
        }
        l.visitValue = o;
        function a(c) {
          return c != null;
        }
        l.isDefined = a;
        function f(c) {
          return c === void 0 ? null : c;
        }
        l.noUndefined = f;
        var g = class {
          visitArray(c, F) {
            return c.map((S) => o(S, this, F));
          }
          visitStringMap(c, F) {
            let S = {};
            return Object.keys(c).forEach((b) => {
              S[b] = o(c[b], this, F);
            }), S;
          }
          visitPrimitive(c, F) {
            return c;
          }
          visitOther(c, F) {
            return c;
          }
        };
        l.ValueTransformer = g, l.SyncAsync = { assertSync: (c) => {
          if (O(c))
            throw new Error("Illegal state: value cannot be a promise");
          return c;
        }, then: (c, F) => O(c) ? c.then(F) : F(c), all: (c) => c.some(O) ? Promise.all(c) : c };
        function x(c) {
          throw new Error(`Internal Error: ${c}`);
        }
        l.error = x;
        function C(c, F) {
          let S = Error(c);
          return S[A] = !0, F && (S[D] = F), S;
        }
        l.syntaxError = C;
        var A = "ngSyntaxError", D = "ngParseErrors";
        function y(c) {
          return c[A];
        }
        l.isSyntaxError = y;
        function T(c) {
          return c[D] || [];
        }
        l.getParseErrors = T;
        function j(c) {
          return c.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");
        }
        l.escapeRegExp = j;
        var M = Object.getPrototypeOf({});
        function k(c) {
          return typeof c == "object" && c !== null && Object.getPrototypeOf(c) === M;
        }
        function L(c) {
          let F = "";
          for (let S = 0; S < c.length; S++) {
            let b = c.charCodeAt(S);
            if (b >= 55296 && b <= 56319 && c.length > S + 1) {
              let B = c.charCodeAt(S + 1);
              B >= 56320 && B <= 57343 && (S++, b = (b - 55296 << 10) + B - 56320 + 65536);
            }
            b <= 127 ? F += String.fromCharCode(b) : b <= 2047 ? F += String.fromCharCode(b >> 6 & 31 | 192, b & 63 | 128) : b <= 65535 ? F += String.fromCharCode(b >> 12 | 224, b >> 6 & 63 | 128, b & 63 | 128) : b <= 2097151 && (F += String.fromCharCode(b >> 18 & 7 | 240, b >> 12 & 63 | 128, b >> 6 & 63 | 128, b & 63 | 128));
          }
          return F;
        }
        l.utf8Encode = L;
        function _(c) {
          if (typeof c == "string")
            return c;
          if (c instanceof Array)
            return "[" + c.map(_).join(", ") + "]";
          if (c == null)
            return "" + c;
          if (c.overriddenName)
            return `${c.overriddenName}`;
          if (c.name)
            return `${c.name}`;
          if (!c.toString)
            return "object";
          let F = c.toString();
          if (F == null)
            return "" + F;
          let S = F.indexOf(`
`);
          return S === -1 ? F : F.substring(0, S);
        }
        l.stringify = _;
        function R(c) {
          return typeof c == "function" && c.hasOwnProperty("__forward_ref__") ? c() : c;
        }
        l.resolveForwardRef = R;
        function O(c) {
          return !!c && typeof c.then == "function";
        }
        l.isPromise = O;
        var Q = class {
          constructor(c) {
            this.full = c;
            let F = c.split(".");
            this.major = F[0], this.minor = F[1], this.patch = F.slice(2).join(".");
          }
        };
        l.Version = Q;
        var v = typeof window < "u" && window, P = typeof self < "u" && typeof WorkerGlobalScope < "u" && self instanceof WorkerGlobalScope && self, E = typeof globalThis < "u" && globalThis, w = E || v || P;
        l.global = w;
      } }), Ds = ee({ "node_modules/angular-html-parser/lib/compiler/src/compile_metadata.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = Cl(), i = Fl(), d = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\)))|(\@[-\w]+)$/;
        function p(S) {
          return S.replace(/\W/g, "_");
        }
        l.sanitizeIdentifier = p;
        var u = 0;
        function o(S) {
          if (!S || !S.reference)
            return null;
          let b = S.reference;
          if (b instanceof m.StaticSymbol)
            return b.name;
          if (b.__anonymousType)
            return b.__anonymousType;
          let B = i.stringify(b);
          return B.indexOf("(") >= 0 ? (B = `anonymous_${u++}`, b.__anonymousType = B) : B = p(B), B;
        }
        l.identifierName = o;
        function a(S) {
          let b = S.reference;
          return b instanceof m.StaticSymbol ? b.filePath : `./${i.stringify(b)}`;
        }
        l.identifierModuleUrl = a;
        function f(S, b) {
          return `View_${o({ reference: S })}_${b}`;
        }
        l.viewClassName = f;
        function g(S) {
          return `RenderType_${o({ reference: S })}`;
        }
        l.rendererTypeName = g;
        function x(S) {
          return `HostView_${o({ reference: S })}`;
        }
        l.hostViewClassName = x;
        function C(S) {
          return `${o({ reference: S })}NgFactory`;
        }
        l.componentFactoryName = C;
        var A;
        (function(S) {
          S[S.Pipe = 0] = "Pipe", S[S.Directive = 1] = "Directive", S[S.NgModule = 2] = "NgModule", S[S.Injectable = 3] = "Injectable";
        })(A = l.CompileSummaryKind || (l.CompileSummaryKind = {}));
        function D(S) {
          return S.value != null ? p(S.value) : o(S.identifier);
        }
        l.tokenName = D;
        function y(S) {
          return S.identifier != null ? S.identifier.reference : S.value;
        }
        l.tokenReference = y;
        var T = class {
          constructor() {
            let { moduleUrl: S, styles: b, styleUrls: B } = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {};
            this.moduleUrl = S || null, this.styles = O(b), this.styleUrls = O(B);
          }
        };
        l.CompileStylesheetMetadata = T;
        var j = class {
          constructor(S) {
            let { encapsulation: b, template: B, templateUrl: I, htmlAst: $, styles: G, styleUrls: W, externalStylesheets: J, animations: te, ngContentSelectors: K, interpolation: ie, isInline: q, preserveWhitespaces: U } = S;
            if (this.encapsulation = b, this.template = B, this.templateUrl = I, this.htmlAst = $, this.styles = O(G), this.styleUrls = O(W), this.externalStylesheets = O(J), this.animations = te ? v(te) : [], this.ngContentSelectors = K || [], ie && ie.length != 2)
              throw new Error("'interpolation' should have a start and an end symbol.");
            this.interpolation = ie, this.isInline = q, this.preserveWhitespaces = U;
          }
          toSummary() {
            return { ngContentSelectors: this.ngContentSelectors, encapsulation: this.encapsulation, styles: this.styles, animations: this.animations };
          }
        };
        l.CompileTemplateMetadata = j;
        var M = class {
          static create(S) {
            let { isHost: b, type: B, isComponent: I, selector: $, exportAs: G, changeDetection: W, inputs: J, outputs: te, host: K, providers: ie, viewProviders: q, queries: U, guards: se, viewQueries: ye, entryComponents: le, template: Ne, componentViewType: X, rendererType: re, componentFactory: Te } = S, we = {}, tt = {}, oe = {};
            K != null && Object.keys(K).forEach((De) => {
              let Be = K[De], Ke = De.match(d);
              Ke === null ? oe[De] = Be : Ke[1] != null ? tt[Ke[1]] = Be : Ke[2] != null && (we[Ke[2]] = Be);
            });
            let H = {};
            J != null && J.forEach((De) => {
              let Be = i.splitAtColon(De, [De, De]);
              H[Be[0]] = Be[1];
            });
            let ce = {};
            return te != null && te.forEach((De) => {
              let Be = i.splitAtColon(De, [De, De]);
              ce[Be[0]] = Be[1];
            }), new M({ isHost: b, type: B, isComponent: !!I, selector: $, exportAs: G, changeDetection: W, inputs: H, outputs: ce, hostListeners: we, hostProperties: tt, hostAttributes: oe, providers: ie, viewProviders: q, queries: U, guards: se, viewQueries: ye, entryComponents: le, template: Ne, componentViewType: X, rendererType: re, componentFactory: Te });
          }
          constructor(S) {
            let { isHost: b, type: B, isComponent: I, selector: $, exportAs: G, changeDetection: W, inputs: J, outputs: te, hostListeners: K, hostProperties: ie, hostAttributes: q, providers: U, viewProviders: se, queries: ye, guards: le, viewQueries: Ne, entryComponents: X, template: re, componentViewType: Te, rendererType: we, componentFactory: tt } = S;
            this.isHost = !!b, this.type = B, this.isComponent = I, this.selector = $, this.exportAs = G, this.changeDetection = W, this.inputs = J, this.outputs = te, this.hostListeners = K, this.hostProperties = ie, this.hostAttributes = q, this.providers = O(U), this.viewProviders = O(se), this.queries = O(ye), this.guards = le, this.viewQueries = O(Ne), this.entryComponents = O(X), this.template = re, this.componentViewType = Te, this.rendererType = we, this.componentFactory = tt;
          }
          toSummary() {
            return { summaryKind: A.Directive, type: this.type, isComponent: this.isComponent, selector: this.selector, exportAs: this.exportAs, inputs: this.inputs, outputs: this.outputs, hostListeners: this.hostListeners, hostProperties: this.hostProperties, hostAttributes: this.hostAttributes, providers: this.providers, viewProviders: this.viewProviders, queries: this.queries, guards: this.guards, viewQueries: this.viewQueries, entryComponents: this.entryComponents, changeDetection: this.changeDetection, template: this.template && this.template.toSummary(), componentViewType: this.componentViewType, rendererType: this.rendererType, componentFactory: this.componentFactory };
          }
        };
        l.CompileDirectiveMetadata = M;
        var k = class {
          constructor(S) {
            let { type: b, name: B, pure: I } = S;
            this.type = b, this.name = B, this.pure = !!I;
          }
          toSummary() {
            return { summaryKind: A.Pipe, type: this.type, name: this.name, pure: this.pure };
          }
        };
        l.CompilePipeMetadata = k;
        var L = class {
        };
        l.CompileShallowModuleMetadata = L;
        var _ = class {
          constructor(S) {
            let { type: b, providers: B, declaredDirectives: I, exportedDirectives: $, declaredPipes: G, exportedPipes: W, entryComponents: J, bootstrapComponents: te, importedModules: K, exportedModules: ie, schemas: q, transitiveModule: U, id: se } = S;
            this.type = b || null, this.declaredDirectives = O(I), this.exportedDirectives = O($), this.declaredPipes = O(G), this.exportedPipes = O(W), this.providers = O(B), this.entryComponents = O(J), this.bootstrapComponents = O(te), this.importedModules = O(K), this.exportedModules = O(ie), this.schemas = O(q), this.id = se || null, this.transitiveModule = U || null;
          }
          toSummary() {
            let S = this.transitiveModule;
            return { summaryKind: A.NgModule, type: this.type, entryComponents: S.entryComponents, providers: S.providers, modules: S.modules, exportedDirectives: S.exportedDirectives, exportedPipes: S.exportedPipes };
          }
        };
        l.CompileNgModuleMetadata = _;
        var R = class {
          constructor() {
            this.directivesSet = /* @__PURE__ */ new Set(), this.directives = [], this.exportedDirectivesSet = /* @__PURE__ */ new Set(), this.exportedDirectives = [], this.pipesSet = /* @__PURE__ */ new Set(), this.pipes = [], this.exportedPipesSet = /* @__PURE__ */ new Set(), this.exportedPipes = [], this.modulesSet = /* @__PURE__ */ new Set(), this.modules = [], this.entryComponentsSet = /* @__PURE__ */ new Set(), this.entryComponents = [], this.providers = [];
          }
          addProvider(S, b) {
            this.providers.push({ provider: S, module: b });
          }
          addDirective(S) {
            this.directivesSet.has(S.reference) || (this.directivesSet.add(S.reference), this.directives.push(S));
          }
          addExportedDirective(S) {
            this.exportedDirectivesSet.has(S.reference) || (this.exportedDirectivesSet.add(S.reference), this.exportedDirectives.push(S));
          }
          addPipe(S) {
            this.pipesSet.has(S.reference) || (this.pipesSet.add(S.reference), this.pipes.push(S));
          }
          addExportedPipe(S) {
            this.exportedPipesSet.has(S.reference) || (this.exportedPipesSet.add(S.reference), this.exportedPipes.push(S));
          }
          addModule(S) {
            this.modulesSet.has(S.reference) || (this.modulesSet.add(S.reference), this.modules.push(S));
          }
          addEntryComponent(S) {
            this.entryComponentsSet.has(S.componentType) || (this.entryComponentsSet.add(S.componentType), this.entryComponents.push(S));
          }
        };
        l.TransitiveCompileNgModuleMetadata = R;
        function O(S) {
          return S || [];
        }
        var Q = class {
          constructor(S, b) {
            let { useClass: B, useValue: I, useExisting: $, useFactory: G, deps: W, multi: J } = b;
            this.token = S, this.useClass = B || null, this.useValue = I, this.useExisting = $, this.useFactory = G || null, this.dependencies = W || null, this.multi = !!J;
          }
        };
        l.ProviderMeta = Q;
        function v(S) {
          return S.reduce((b, B) => {
            let I = Array.isArray(B) ? v(B) : B;
            return b.concat(I);
          }, []);
        }
        l.flatten = v;
        function P(S) {
          return S.replace(/(\w+:\/\/[\w:-]+)?(\/+)?/, "ng:///");
        }
        function E(S, b, B) {
          let I;
          return B.isInline ? b.type.reference instanceof m.StaticSymbol ? I = `${b.type.reference.filePath}.${b.type.reference.name}.html` : I = `${o(S)}/${o(b.type)}.html` : I = B.templateUrl, b.type.reference instanceof m.StaticSymbol ? I : P(I);
        }
        l.templateSourceUrl = E;
        function w(S, b) {
          let B = S.moduleUrl.split(/\/\\/g), I = B[B.length - 1];
          return P(`css/${b}${I}.ngstyle.js`);
        }
        l.sharedStylesheetJitUrl = w;
        function c(S) {
          return P(`${o(S.type)}/module.ngfactory.js`);
        }
        l.ngModuleJitUrl = c;
        function F(S, b) {
          return P(`${o(S)}/${o(b.type)}.ngfactory.js`);
        }
        l.templateJitUrl = F;
      } }), To = ee({ "node_modules/angular-html-parser/lib/compiler/src/parse_util.js"(l) {
        ne(), Object.defineProperty(l, "__esModule", { value: !0 });
        var m = vl(), i = Ds(), d = class {
          constructor(x, C, A, D) {
            this.file = x, this.offset = C, this.line = A, this.col = D;
          }
          toString() {
            return this.offset != null ? `${this.file.url}@${this.line}:${this.col}` : this.file.url;
          }
          moveBy(x) {
            let C = this.file.content, A = C.length, D = this.offset, y = this.line, T = this.col;
            for (; D > 0 && x < 0; )
              if (D--, x++, C.charCodeAt(D) == m.$LF) {
                y--;
                let j = C.substr(0, D - 1).lastIndexOf(String.fromCharCode(m.$LF));
                T = j > 0 ? D - j : D;
              } else
                T--;
            for (; D < A && x > 0; ) {
              let j = C.charCodeAt(D);
              D++, x--, j == m.$LF ? (y++, T = 0) : T++;
            }
            return new d(this.file, D, y, T);
          }
          getContext(x, C) {
            let A = this.file.content, D = this.offset;
            if (D != null) {
              D > A.length - 1 && (D = A.length - 1);
              let y = D, T = 0, j = 0;
              for (; T < x && D > 0 && (D--, T++, !(A[D] == `
` && ++j == C)); )
                ;
              for (T = 0, j = 0; T < x && y < A.length - 1 && (y++, T++, !(A[y] == `
` && ++j == C)); )
                ;
              return { before: A.substring(D, this.offset), after: A.substring(this.offset, y + 1) };
            }
            return null;
          }
        };
        l.ParseLocation = d;
        var p = class {
          constructor(x, C) {
            this.content = x, this.url = C;
          }
        };
        l.ParseSourceFile = p;
        var u = class {
          constructor(x, C) {
            let A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
            this.start = x, this.end = C, this.details = A;
          }
          toString() {
            return this.start.file.content.substring(this.start.offset, this.end.offset);
          }
        };
        l.ParseSourceSpan = u, l.EMPTY_PARSE_LOCATION = new d(new p("", ""), 0, 0, 0), l.EMPTY_SOURCE_SPAN = new u(l.EMPTY_PARSE_LOCATION, l.EMPTY_PARSE_LOCATION);
        var o;
        (function(x) {
          x[x.WARNING = 0] = "WARNING", x[x.ERROR = 1] = "ERROR";
        })(o = l.ParseErrorLevel || (l.ParseErrorLevel = {}));
        var a = class {
          constructor(x, C) {
            let A = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : o.ERROR;
            this.span = x, this.msg = C, this.level = A;
          }
          contextualMessage() {
            let x = this.span.start.getContext(100, 3);
            return x ? `${this.msg} ("${x.before}[${o[this.level]} ->]${x.after}")` : this.msg;
          }
          toString() {
            let x = this.span.details ? `, ${this.span.details}` : "";
            return `${this.contextualMessage()}: ${this.span.start}${x}`;
          }
        };
        l.ParseError = a;
        function f(x, C) {
          let A = i.identifierModuleUrl(C), D = A != null ? `in ${x} ${i.identifierName(C)} in ${A}` : `in ${x} ${i.identifierName(C)}`, y = new p("", D);
          return new u(new d(y, -1, -1, -1), new d(y, -1, -1, -1));
        }
        l.typeSourceSpan = f;
        function g(x, C, A) {
          let D = `in ${x} ${C} in ${A}`, y = new p("", D);
          return new u(new d(y, -1, -1, -1), new d(y, -1, -1, -1));
        }
        l.r3JitTypeSourceSpan = g;
      } }), va = ee({ "src/language-html/print-preprocess.js"(l, m) {
        ne();
        var { ParseSourceSpan: i } = To(), { htmlTrim: d, getLeadingAndTrailingHtmlWhitespace: p, hasHtmlWhitespace: u, canHaveInterpolation: o, getNodeCssStyleDisplay: a, isDanglingSpaceSensitiveNode: f, isIndentationSensitiveNode: g, isLeadingSpaceSensitiveNode: x, isTrailingSpaceSensitiveNode: C, isWhitespaceSensitiveNode: A, isVueScriptTag: D } = Ku(), y = [j, M, L, R, O, P, Q, v, E, _, w];
        function T(c, F) {
          for (let S of y)
            S(c, F);
          return c;
        }
        function j(c) {
          c.walk((F) => {
            if (F.type === "element" && F.tagDefinition.ignoreFirstLf && F.children.length > 0 && F.children[0].type === "text" && F.children[0].value[0] === `
`) {
              let S = F.children[0];
              S.value.length === 1 ? F.removeChild(S) : S.value = S.value.slice(1);
            }
          });
        }
        function M(c) {
          let F = (S) => S.type === "element" && S.prev && S.prev.type === "ieConditionalStartComment" && S.prev.sourceSpan.end.offset === S.startSourceSpan.start.offset && S.firstChild && S.firstChild.type === "ieConditionalEndComment" && S.firstChild.sourceSpan.start.offset === S.startSourceSpan.end.offset;
          c.walk((S) => {
            if (S.children)
              for (let b = 0; b < S.children.length; b++) {
                let B = S.children[b];
                if (!F(B))
                  continue;
                let I = B.prev, $ = B.firstChild;
                S.removeChild(I), b--;
                let G = new i(I.sourceSpan.start, $.sourceSpan.end), W = new i(G.start, B.sourceSpan.end);
                B.condition = I.condition, B.sourceSpan = W, B.startSourceSpan = G, B.removeChild($);
              }
          });
        }
        function k(c, F, S) {
          c.walk((b) => {
            if (b.children)
              for (let B = 0; B < b.children.length; B++) {
                let I = b.children[B];
                if (I.type !== "text" && !F(I))
                  continue;
                I.type !== "text" && (I.type = "text", I.value = S(I));
                let $ = I.prev;
                !$ || $.type !== "text" || ($.value += I.value, $.sourceSpan = new i($.sourceSpan.start, I.sourceSpan.end), b.removeChild(I), B--);
              }
          });
        }
        function L(c) {
          return k(c, (F) => F.type === "cdata", (F) => `<![CDATA[${F.value}]]>`);
        }
        function _(c) {
          let F = (S) => S.type === "element" && S.attrs.length === 0 && S.children.length === 1 && S.firstChild.type === "text" && !u(S.children[0].value) && !S.firstChild.hasLeadingSpaces && !S.firstChild.hasTrailingSpaces && S.isLeadingSpaceSensitive && !S.hasLeadingSpaces && S.isTrailingSpaceSensitive && !S.hasTrailingSpaces && S.prev && S.prev.type === "text" && S.next && S.next.type === "text";
          c.walk((S) => {
            if (S.children)
              for (let b = 0; b < S.children.length; b++) {
                let B = S.children[b];
                if (!F(B))
                  continue;
                let I = B.prev, $ = B.next;
                I.value += `<${B.rawName}>` + B.firstChild.value + `</${B.rawName}>` + $.value, I.sourceSpan = new i(I.sourceSpan.start, $.sourceSpan.end), I.isTrailingSpaceSensitive = $.isTrailingSpaceSensitive, I.hasTrailingSpaces = $.hasTrailingSpaces, S.removeChild(B), b--, S.removeChild($);
              }
          });
        }
        function R(c, F) {
          if (F.parser === "html")
            return;
          let S = /{{(.+?)}}/s;
          c.walk((b) => {
            if (o(b))
              for (let B of b.children) {
                if (B.type !== "text")
                  continue;
                let I = B.sourceSpan.start, $ = null, G = B.value.split(S);
                for (let W = 0; W < G.length; W++, I = $) {
                  let J = G[W];
                  if (W % 2 === 0) {
                    $ = I.moveBy(J.length), J.length > 0 && b.insertChildBefore(B, { type: "text", value: J, sourceSpan: new i(I, $) });
                    continue;
                  }
                  $ = I.moveBy(J.length + 4), b.insertChildBefore(B, { type: "interpolation", sourceSpan: new i(I, $), children: J.length === 0 ? [] : [{ type: "text", value: J, sourceSpan: new i(I.moveBy(2), $.moveBy(-2)) }] });
                }
                b.removeChild(B);
              }
          });
        }
        function O(c) {
          c.walk((F) => {
            if (!F.children)
              return;
            if (F.children.length === 0 || F.children.length === 1 && F.children[0].type === "text" && d(F.children[0].value).length === 0) {
              F.hasDanglingSpaces = F.children.length > 0, F.children = [];
              return;
            }
            let S = A(F), b = g(F);
            if (!S)
              for (let B = 0; B < F.children.length; B++) {
                let I = F.children[B];
                if (I.type !== "text")
                  continue;
                let { leadingWhitespace: $, text: G, trailingWhitespace: W } = p(I.value), J = I.prev, te = I.next;
                G ? (I.value = G, I.sourceSpan = new i(I.sourceSpan.start.moveBy($.length), I.sourceSpan.end.moveBy(-W.length)), $ && (J && (J.hasTrailingSpaces = !0), I.hasLeadingSpaces = !0), W && (I.hasTrailingSpaces = !0, te && (te.hasLeadingSpaces = !0))) : (F.removeChild(I), B--, ($ || W) && (J && (J.hasTrailingSpaces = !0), te && (te.hasLeadingSpaces = !0)));
              }
            F.isWhitespaceSensitive = S, F.isIndentationSensitive = b;
          });
        }
        function Q(c) {
          c.walk((F) => {
            F.isSelfClosing = !F.children || F.type === "element" && (F.tagDefinition.isVoid || F.startSourceSpan === F.endSourceSpan);
          });
        }
        function v(c, F) {
          c.walk((S) => {
            S.type === "element" && (S.hasHtmComponentClosingTag = S.endSourceSpan && /^<\s*\/\s*\/\s*>$/.test(F.originalText.slice(S.endSourceSpan.start.offset, S.endSourceSpan.end.offset)));
          });
        }
        function P(c, F) {
          c.walk((S) => {
            S.cssDisplay = a(S, F);
          });
        }
        function E(c, F) {
          c.walk((S) => {
            let { children: b } = S;
            if (b) {
              if (b.length === 0) {
                S.isDanglingSpaceSensitive = f(S);
                return;
              }
              for (let B of b)
                B.isLeadingSpaceSensitive = x(B, F), B.isTrailingSpaceSensitive = C(B, F);
              for (let B = 0; B < b.length; B++) {
                let I = b[B];
                I.isLeadingSpaceSensitive = (B === 0 || I.prev.isTrailingSpaceSensitive) && I.isLeadingSpaceSensitive, I.isTrailingSpaceSensitive = (B === b.length - 1 || I.next.isLeadingSpaceSensitive) && I.isTrailingSpaceSensitive;
              }
            }
          });
        }
        function w(c, F) {
          if (F.parser === "vue") {
            let S = c.children.find((B) => D(B, F));
            if (!S)
              return;
            let { lang: b } = S.attrMap;
            (b === "ts" || b === "typescript") && (F.__should_parse_vue_template_with_ts = !0);
          }
        }
        m.exports = T;
      } }), xl = ee({ "src/language-html/pragma.js"(l, m) {
        ne();
        function i(p) {
          return /^\s*<!--\s*@(?:format|prettier)\s*-->/.test(p);
        }
        function d(p) {
          return `<!-- @format -->

` + p.replace(/^\s*\n/, "");
        }
        m.exports = { hasPragma: i, insertPragma: d };
      } }), Ca = ee({ "src/language-html/loc.js"(l, m) {
        ne();
        function i(p) {
          return p.sourceSpan.start.offset;
        }
        function d(p) {
          return p.sourceSpan.end.offset;
        }
        m.exports = { locStart: i, locEnd: d };
      } }), wu = ee({ "src/language-html/print/tag.js"(l, m) {
        ne();
        var i = Iu(), { isNonEmptyArray: d } = yn(), { builders: { indent: p, join: u, line: o, softline: a, hardline: f }, utils: { replaceTextEndOfLine: g } } = Ut(), { locStart: x, locEnd: C } = Ca(), { isTextLikeNode: A, getLastDescendant: D, isPreLikeNode: y, hasPrettierIgnore: T, shouldPreserveContent: j, isVueSfcBlock: M } = Ku();
        function k(K, ie) {
          return [K.isSelfClosing ? "" : L(K, ie), _(K, ie)];
        }
        function L(K, ie) {
          return K.lastChild && c(K.lastChild) ? "" : [R(K, ie), Q(K, ie)];
        }
        function _(K, ie) {
          return (K.next ? E(K.next) : w(K.parent)) ? "" : [v(K, ie), O(K, ie)];
        }
        function R(K, ie) {
          return w(K) ? v(K.lastChild, ie) : "";
        }
        function O(K, ie) {
          return c(K) ? Q(K.parent, ie) : F(K) ? J(K.next) : "";
        }
        function Q(K, ie) {
          if (i(!K.isSelfClosing), P(K, ie))
            return "";
          switch (K.type) {
            case "ieConditionalComment":
              return "<!";
            case "element":
              if (K.hasHtmComponentClosingTag)
                return "<//";
            default:
              return `</${K.rawName}`;
          }
        }
        function v(K, ie) {
          if (P(K, ie))
            return "";
          switch (K.type) {
            case "ieConditionalComment":
            case "ieConditionalEndComment":
              return "[endif]-->";
            case "ieConditionalStartComment":
              return "]><!-->";
            case "interpolation":
              return "}}";
            case "element":
              if (K.isSelfClosing)
                return "/>";
            default:
              return ">";
          }
        }
        function P(K, ie) {
          return !K.isSelfClosing && !K.endSourceSpan && (T(K) || j(K.parent, ie));
        }
        function E(K) {
          return K.prev && K.prev.type !== "docType" && !A(K.prev) && K.isLeadingSpaceSensitive && !K.hasLeadingSpaces;
        }
        function w(K) {
          return K.lastChild && K.lastChild.isTrailingSpaceSensitive && !K.lastChild.hasTrailingSpaces && !A(D(K.lastChild)) && !y(K);
        }
        function c(K) {
          return !K.next && !K.hasTrailingSpaces && K.isTrailingSpaceSensitive && A(D(K));
        }
        function F(K) {
          return K.next && !A(K.next) && A(K) && K.isTrailingSpaceSensitive && !K.hasTrailingSpaces;
        }
        function S(K) {
          let ie = K.trim().match(/^prettier-ignore-attribute(?:\s+(.+))?$/s);
          return ie ? ie[1] ? ie[1].split(/\s+/) : !0 : !1;
        }
        function b(K) {
          return !K.prev && K.isLeadingSpaceSensitive && !K.hasLeadingSpaces;
        }
        function B(K, ie, q) {
          let U = K.getValue();
          if (!d(U.attrs))
            return U.isSelfClosing ? " " : "";
          let se = U.prev && U.prev.type === "comment" && S(U.prev.value), ye = typeof se == "boolean" ? () => se : Array.isArray(se) ? (Te) => se.includes(Te.rawName) : () => !1, le = K.map((Te) => {
            let we = Te.getValue();
            return ye(we) ? g(ie.originalText.slice(x(we), C(we))) : q();
          }, "attrs"), Ne = U.type === "element" && U.fullName === "script" && U.attrs.length === 1 && U.attrs[0].fullName === "src" && U.children.length === 0, X = ie.singleAttributePerLine && U.attrs.length > 1 && !M(U, ie) ? f : o, re = [p([Ne ? " " : o, u(X, le)])];
          return U.firstChild && b(U.firstChild) || U.isSelfClosing && w(U.parent) || Ne ? re.push(U.isSelfClosing ? " " : "") : re.push(ie.bracketSameLine ? U.isSelfClosing ? " " : "" : U.isSelfClosing ? o : a), re;
        }
        function I(K) {
          return K.firstChild && b(K.firstChild) ? "" : te(K);
        }
        function $(K, ie, q) {
          let U = K.getValue();
          return [G(U, ie), B(K, ie, q), U.isSelfClosing ? "" : I(U)];
        }
        function G(K, ie) {
          return K.prev && F(K.prev) ? "" : [W(K, ie), J(K)];
        }
        function W(K, ie) {
          return b(K) ? te(K.parent) : E(K) ? v(K.prev, ie) : "";
        }
        function J(K) {
          switch (K.type) {
            case "ieConditionalComment":
            case "ieConditionalStartComment":
              return `<!--[if ${K.condition}`;
            case "ieConditionalEndComment":
              return "<!--<!";
            case "interpolation":
              return "{{";
            case "docType":
              return "<!DOCTYPE";
            case "element":
              if (K.condition)
                return `<!--[if ${K.condition}]><!--><${K.rawName}`;
            default:
              return `<${K.rawName}`;
          }
        }
        function te(K) {
          switch (i(!K.isSelfClosing), K.type) {
            case "ieConditionalComment":
              return "]>";
            case "element":
              if (K.condition)
                return "><!--<![endif]-->";
            default:
              return ">";
          }
        }
        m.exports = { printClosingTag: k, printClosingTagStart: L, printClosingTagStartMarker: Q, printClosingTagEndMarker: v, printClosingTagSuffix: O, printClosingTagEnd: _, needsToBorrowLastChildClosingTagEndMarker: w, needsToBorrowParentClosingTagStartMarker: c, needsToBorrowPrevClosingTagEndMarker: E, printOpeningTag: $, printOpeningTagStart: G, printOpeningTagPrefix: W, printOpeningTagStartMarker: J, printOpeningTagEndMarker: te, needsToBorrowNextOpeningTagStartMarker: F, needsToBorrowParentOpeningTagEndMarker: b };
      } }), Al = ee({ "node_modules/parse-srcset/src/parse-srcset.js"(l, m) {
        ne(), function(i, d) {
          typeof m == "object" && m.exports ? m.exports = d() : i.parseSrcset = d();
        }(l, function() {
          return function(i, d) {
            var p = d && d.logger || console;
            function u(Q) {
              return Q === " " || Q === "	" || Q === `
` || Q === "\f" || Q === "\r";
            }
            function o(Q) {
              var v, P = Q.exec(i.substring(L));
              if (P)
                return v = P[0], L += v.length, v;
            }
            for (var a = i.length, f = /^[ \t\n\r\u000c]+/, g = /^[, \t\n\r\u000c]+/, x = /^[^ \t\n\r\u000c]+/, C = /[,]+$/, A = /^\d+$/, D = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/, y, T, j, M, k, L = 0, _ = []; ; ) {
              if (o(g), L >= a)
                return _;
              y = o(x), T = [], y.slice(-1) === "," ? (y = y.replace(C, ""), O()) : R();
            }
            function R() {
              for (o(f), j = "", M = "in descriptor"; ; ) {
                if (k = i.charAt(L), M === "in descriptor")
                  if (u(k))
                    j && (T.push(j), j = "", M = "after descriptor");
                  else if (k === ",") {
                    L += 1, j && T.push(j), O();
                    return;
                  } else if (k === "(")
                    j = j + k, M = "in parens";
                  else if (k === "") {
                    j && T.push(j), O();
                    return;
                  } else
                    j = j + k;
                else if (M === "in parens")
                  if (k === ")")
                    j = j + k, M = "in descriptor";
                  else if (k === "") {
                    T.push(j), O();
                    return;
                  } else
                    j = j + k;
                else if (M === "after descriptor" && !u(k))
                  if (k === "") {
                    O();
                    return;
                  } else
                    M = "in descriptor", L -= 1;
                L += 1;
              }
            }
            function O() {
              var Q = !1, v, P, E, w, c = {}, F, S, b, B, I;
              for (w = 0; w < T.length; w++)
                F = T[w], S = F[F.length - 1], b = F.substring(0, F.length - 1), B = parseInt(b, 10), I = parseFloat(b), A.test(b) && S === "w" ? ((v || P) && (Q = !0), B === 0 ? Q = !0 : v = B) : D.test(b) && S === "x" ? ((v || P || E) && (Q = !0), I < 0 ? Q = !0 : P = I) : A.test(b) && S === "h" ? ((E || P) && (Q = !0), B === 0 ? Q = !0 : E = B) : Q = !0;
              Q ? p && p.error && p.error("Invalid srcset descriptor found in '" + i + "' at '" + F + "'.") : (c.url = y, v && (c.w = v), P && (c.d = P), E && (c.h = E), _.push(c));
            }
          };
        });
      } }), wo = ee({ "src/language-html/syntax-attribute.js"(l, m) {
        ne();
        var i = Al(), { builders: { ifBreak: d, join: p, line: u } } = Ut();
        function o(f) {
          let g = i(f, { logger: { error(R) {
            throw new Error(R);
          } } }), x = g.some((R) => {
            let { w: O } = R;
            return O;
          }), C = g.some((R) => {
            let { h: O } = R;
            return O;
          }), A = g.some((R) => {
            let { d: O } = R;
            return O;
          });
          if (x + C + A > 1)
            throw new Error("Mixed descriptor in srcset is not supported");
          let D = x ? "w" : C ? "h" : "d", y = x ? "w" : C ? "h" : "x", T = (R) => Math.max(...R), j = g.map((R) => R.url), M = T(j.map((R) => R.length)), k = g.map((R) => R[D]).map((R) => R ? R.toString() : ""), L = k.map((R) => {
            let O = R.indexOf(".");
            return O === -1 ? R.length : O;
          }), _ = T(L);
          return p([",", u], j.map((R, O) => {
            let Q = [R], v = k[O];
            if (v) {
              let P = M - R.length + 1, E = _ - L[O], w = " ".repeat(P + E);
              Q.push(d(w, " "), v + y);
            }
            return Q;
          }));
        }
        function a(f) {
          return f.trim().split(/\s+/).join(" ");
        }
        m.exports = { printImgSrcset: o, printClassNames: a };
      } }), ku = ee({ "src/language-html/syntax-vue.js"(l, m) {
        ne();
        var { builders: { group: i } } = Ut();
        function d(a, f) {
          let { left: g, operator: x, right: C } = p(a);
          return [i(f(`function _(${g}) {}`, { parser: "babel", __isVueForBindingLeft: !0 })), " ", x, " ", f(C, { parser: "__js_expression" }, { stripTrailingHardline: !0 })];
        }
        function p(a) {
          let f = /(.*?)\s+(in|of)\s+(.*)/s, g = /,([^,\]}]*)(?:,([^,\]}]*))?$/, x = /^\(|\)$/g, C = a.match(f);
          if (!C)
            return;
          let A = {};
          if (A.for = C[3].trim(), !A.for)
            return;
          let D = C[1].trim().replace(x, ""), y = D.match(g);
          y ? (A.alias = D.replace(g, ""), A.iterator1 = y[1].trim(), y[2] && (A.iterator2 = y[2].trim())) : A.alias = D;
          let T = [A.alias, A.iterator1, A.iterator2];
          if (!T.some((j, M) => !j && (M === 0 || T.slice(M + 1).some(Boolean))))
            return { left: T.filter(Boolean).join(","), operator: C[2], right: A.for };
        }
        function u(a, f) {
          return f(`function _(${a}) {}`, { parser: "babel", __isVueBindings: !0 });
        }
        function o(a) {
          let f = /^(?:[\w$]+|\([^)]*\))\s*=>|^function\s*\(/, g = /^[$A-Z_a-z][\w$]*(?:\.[$A-Z_a-z][\w$]*|\['[^']*']|\["[^"]*"]|\[\d+]|\[[$A-Z_a-z][\w$]*])*$/, x = a.trim();
          return f.test(x) || g.test(x);
        }
        m.exports = { isVueEventBindingExpression: o, printVueFor: d, printVueBindings: u };
      } }), to = ee({ "src/language-html/get-node-content.js"(l, m) {
        ne();
        var { needsToBorrowParentClosingTagStartMarker: i, printClosingTagStartMarker: d, needsToBorrowLastChildClosingTagEndMarker: p, printClosingTagEndMarker: u, needsToBorrowParentOpeningTagEndMarker: o, printOpeningTagEndMarker: a } = wu();
        function f(g, x) {
          let C = g.startSourceSpan.end.offset;
          g.firstChild && o(g.firstChild) && (C -= a(g).length);
          let A = g.endSourceSpan.start.offset;
          return g.lastChild && i(g.lastChild) ? A += d(g, x).length : p(g) && (A -= u(g.lastChild, x).length), x.originalText.slice(C, A);
        }
        m.exports = f;
      } }), ko = ee({ "src/language-html/embed.js"(l, m) {
        ne();
        var { builders: { breakParent: i, group: d, hardline: p, indent: u, line: o, fill: a, softline: f }, utils: { mapDoc: g, replaceTextEndOfLine: x } } = Ut(), C = Yi(), { printClosingTag: A, printClosingTagSuffix: D, needsToBorrowPrevClosingTagEndMarker: y, printOpeningTagPrefix: T, printOpeningTag: j } = wu(), { printImgSrcset: M, printClassNames: k } = wo(), { printVueFor: L, printVueBindings: _, isVueEventBindingExpression: R } = ku(), { isScriptLikeTag: O, isVueNonHtmlBlock: Q, inferScriptParser: v, htmlTrimPreserveIndentation: P, dedentString: E, unescapeQuoteEntities: w, isVueSlotAttribute: c, isVueSfcBindingsAttribute: F, getTextValueParts: S } = Ku(), b = to();
        function B($, G, W) {
          let J = (le) => new RegExp(le.join("|")).test($.fullName), te = () => w($.value), K = !1, ie = (le, Ne) => {
            let X = le.type === "NGRoot" ? le.node.type === "NGMicrosyntax" && le.node.body.length === 1 && le.node.body[0].type === "NGMicrosyntaxExpression" ? le.node.body[0].expression : le.node : le.type === "JsExpressionRoot" ? le.node : le;
            X && (X.type === "ObjectExpression" || X.type === "ArrayExpression" || Ne.parser === "__vue_expression" && (X.type === "TemplateLiteral" || X.type === "StringLiteral")) && (K = !0);
          }, q = (le) => d(le), U = function(le) {
            let Ne = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : !0;
            return d([u([f, le]), Ne ? f : ""]);
          }, se = (le) => K ? q(le) : U(le), ye = (le, Ne) => G(le, Object.assign({ __onHtmlBindingRoot: ie, __embeddedInHtml: !0 }, Ne));
          if ($.fullName === "srcset" && ($.parent.fullName === "img" || $.parent.fullName === "source"))
            return U(M(te()));
          if ($.fullName === "class" && !W.parentParser) {
            let le = te();
            if (!le.includes("{{"))
              return k(le);
          }
          if ($.fullName === "style" && !W.parentParser) {
            let le = te();
            if (!le.includes("{{"))
              return U(ye(le, { parser: "css", __isHTMLStyleAttribute: !0 }));
          }
          if (W.parser === "vue") {
            if ($.fullName === "v-for")
              return L(te(), ye);
            if (c($) || F($, W))
              return _(te(), ye);
            let le = ["^@", "^v-on:"], Ne = ["^:", "^v-bind:"], X = ["^v-"];
            if (J(le)) {
              let re = te(), Te = R(re) ? "__js_expression" : W.__should_parse_vue_template_with_ts ? "__vue_ts_event_binding" : "__vue_event_binding";
              return se(ye(re, { parser: Te }));
            }
            if (J(Ne))
              return se(ye(te(), { parser: "__vue_expression" }));
            if (J(X))
              return se(ye(te(), { parser: "__js_expression" }));
          }
          if (W.parser === "angular") {
            let le = (oe, H) => ye(oe, Object.assign(Object.assign({}, H), {}, { trailingComma: "none" })), Ne = ["^\\*"], X = ["^\\(.+\\)$", "^on-"], re = ["^\\[.+\\]$", "^bind(on)?-", "^ng-(if|show|hide|class|style)$"], Te = ["^i18n(-.+)?$"];
            if (J(X))
              return se(le(te(), { parser: "__ng_action" }));
            if (J(re))
              return se(le(te(), { parser: "__ng_binding" }));
            if (J(Te)) {
              let oe = te().trim();
              return U(a(S($, oe)), !oe.includes("@@"));
            }
            if (J(Ne))
              return se(le(te(), { parser: "__ng_directive" }));
            let we = /{{(.+?)}}/s, tt = te();
            if (we.test(tt)) {
              let oe = [];
              for (let [H, ce] of tt.split(we).entries())
                if (H % 2 === 0)
                  oe.push(x(ce));
                else
                  try {
                    oe.push(d(["{{", u([o, le(ce, { parser: "__ng_interpolation", __isInHtmlInterpolation: !0 })]), o, "}}"]));
                  } catch {
                    oe.push("{{", x(ce), "}}");
                  }
              return d(oe);
            }
          }
          return null;
        }
        function I($, G, W, J) {
          let te = $.getValue();
          switch (te.type) {
            case "element": {
              if (O(te) || te.type === "interpolation")
                return;
              if (!te.isSelfClosing && Q(te, J)) {
                let K = v(te, J);
                if (!K)
                  return;
                let ie = b(te, J), q = /^\s*$/.test(ie), U = "";
                return q || (U = W(P(ie), { parser: K, __embeddedInHtml: !0 }, { stripTrailingHardline: !0 }), q = U === ""), [T(te, J), d(j($, J, G)), q ? "" : p, U, q ? "" : p, A(te, J), D(te, J)];
              }
              break;
            }
            case "text": {
              if (O(te.parent)) {
                let K = v(te.parent, J);
                if (K) {
                  let ie = K === "markdown" ? E(te.value.replace(/^[^\S\n]*\n/, "")) : te.value, q = { parser: K, __embeddedInHtml: !0 };
                  if (J.parser === "html" && K === "babel") {
                    let U = "script", { attrMap: se } = te.parent;
                    se && (se.type === "module" || se.type === "text/babel" && se["data-type"] === "module") && (U = "module"), q.__babelSourceType = U;
                  }
                  return [i, T(te, J), W(ie, q, { stripTrailingHardline: !0 }), D(te, J)];
                }
              } else if (te.parent.type === "interpolation") {
                let K = { __isInHtmlInterpolation: !0, __embeddedInHtml: !0 };
                return J.parser === "angular" ? (K.parser = "__ng_interpolation", K.trailingComma = "none") : J.parser === "vue" ? K.parser = J.__should_parse_vue_template_with_ts ? "__vue_ts_expression" : "__vue_expression" : K.parser = "__js_expression", [u([o, W(te.value, K, { stripTrailingHardline: !0 })]), te.parent.next && y(te.parent.next) ? " " : o];
              }
              break;
            }
            case "attribute": {
              if (!te.value)
                break;
              if (/^PRETTIER_HTML_PLACEHOLDER_\d+_\d+_IN_JS$/.test(J.originalText.slice(te.valueSpan.start.offset, te.valueSpan.end.offset)))
                return [te.rawName, "=", te.value];
              if (J.parser === "lwc" && /^{.*}$/s.test(J.originalText.slice(te.valueSpan.start.offset, te.valueSpan.end.offset)))
                return [te.rawName, "=", te.value];
              let K = B(te, (ie, q) => W(ie, Object.assign({ __isInHtmlAttribute: !0, __embeddedInHtml: !0 }, q), { stripTrailingHardline: !0 }), J);
              if (K)
                return [te.rawName, '="', d(g(K, (ie) => typeof ie == "string" ? ie.replace(/"/g, "&quot;") : ie)), '"'];
              break;
            }
            case "front-matter":
              return C(te, W);
          }
        }
        m.exports = I;
      } }), ui = ee({ "src/language-html/print/children.js"(l, m) {
        ne();
        var { builders: { breakParent: i, group: d, ifBreak: p, line: u, softline: o, hardline: a }, utils: { replaceTextEndOfLine: f } } = Ut(), { locStart: g, locEnd: x } = Ca(), { forceBreakChildren: C, forceNextEmptyLine: A, isTextLikeNode: D, hasPrettierIgnore: y, preferHardlineAsLeadingSpaces: T } = Ku(), { printOpeningTagPrefix: j, needsToBorrowNextOpeningTagStartMarker: M, printOpeningTagStartMarker: k, needsToBorrowPrevClosingTagEndMarker: L, printClosingTagEndMarker: _, printClosingTagSuffix: R, needsToBorrowParentClosingTagStartMarker: O } = wu();
        function Q(E, w, c) {
          let F = E.getValue();
          return y(F) ? [j(F, w), ...f(w.originalText.slice(g(F) + (F.prev && M(F.prev) ? k(F).length : 0), x(F) - (F.next && L(F.next) ? _(F, w).length : 0))), R(F, w)] : c();
        }
        function v(E, w) {
          return D(E) && D(w) ? E.isTrailingSpaceSensitive ? E.hasTrailingSpaces ? T(w) ? a : u : "" : T(w) ? a : o : M(E) && (y(w) || w.firstChild || w.isSelfClosing || w.type === "element" && w.attrs.length > 0) || E.type === "element" && E.isSelfClosing && L(w) ? "" : !w.isLeadingSpaceSensitive || T(w) || L(w) && E.lastChild && O(E.lastChild) && E.lastChild.lastChild && O(E.lastChild.lastChild) ? a : w.hasLeadingSpaces ? u : o;
        }
        function P(E, w, c) {
          let F = E.getValue();
          if (C(F))
            return [i, ...E.map((b) => {
              let B = b.getValue(), I = B.prev ? v(B.prev, B) : "";
              return [I ? [I, A(B.prev) ? a : ""] : "", Q(b, w, c)];
            }, "children")];
          let S = F.children.map(() => Symbol(""));
          return E.map((b, B) => {
            let I = b.getValue();
            if (D(I)) {
              if (I.prev && D(I.prev)) {
                let ie = v(I.prev, I);
                if (ie)
                  return A(I.prev) ? [a, a, Q(b, w, c)] : [ie, Q(b, w, c)];
              }
              return Q(b, w, c);
            }
            let $ = [], G = [], W = [], J = [], te = I.prev ? v(I.prev, I) : "", K = I.next ? v(I, I.next) : "";
            return te && (A(I.prev) ? $.push(a, a) : te === a ? $.push(a) : D(I.prev) ? G.push(te) : G.push(p("", o, { groupId: S[B - 1] }))), K && (A(I) ? D(I.next) && J.push(a, a) : K === a ? D(I.next) && J.push(a) : W.push(K)), [...$, d([...G, d([Q(b, w, c), ...W], { id: S[B] })]), ...J];
          }, "children");
        }
        m.exports = { printChildren: P };
      } }), gs = ee({ "src/language-html/print/element.js"(l, m) {
        ne();
        var { builders: { breakParent: i, dedentToRoot: d, group: p, ifBreak: u, indentIfBreak: o, indent: a, line: f, softline: g }, utils: { replaceTextEndOfLine: x } } = Ut(), C = to(), { shouldPreserveContent: A, isScriptLikeTag: D, isVueCustomBlock: y, countParents: T, forceBreakContent: j } = Ku(), { printOpeningTagPrefix: M, printOpeningTag: k, printClosingTagSuffix: L, printClosingTag: _, needsToBorrowPrevClosingTagEndMarker: R, needsToBorrowLastChildClosingTagEndMarker: O } = wu(), { printChildren: Q } = ui();
        function v(P, E, w) {
          let c = P.getValue();
          if (A(c, E))
            return [M(c, E), p(k(P, E, w)), ...x(C(c, E)), ..._(c, E), L(c, E)];
          let F = c.children.length === 1 && c.firstChild.type === "interpolation" && c.firstChild.isLeadingSpaceSensitive && !c.firstChild.hasLeadingSpaces && c.lastChild.isTrailingSpaceSensitive && !c.lastChild.hasTrailingSpaces, S = Symbol("element-attr-group-id"), b = (G) => p([p(k(P, E, w), { id: S }), G, _(c, E)]), B = (G) => F ? o(G, { groupId: S }) : (D(c) || y(c, E)) && c.parent.type === "root" && E.parser === "vue" && !E.vueIndentScriptAndStyle ? G : a(G), I = () => F ? u(g, "", { groupId: S }) : c.firstChild.hasLeadingSpaces && c.firstChild.isLeadingSpaceSensitive ? f : c.firstChild.type === "text" && c.isWhitespaceSensitive && c.isIndentationSensitive ? d(g) : g, $ = () => (c.next ? R(c.next) : O(c.parent)) ? c.lastChild.hasTrailingSpaces && c.lastChild.isTrailingSpaceSensitive ? " " : "" : F ? u(g, "", { groupId: S }) : c.lastChild.hasTrailingSpaces && c.lastChild.isTrailingSpaceSensitive ? f : (c.lastChild.type === "comment" || c.lastChild.type === "text" && c.isWhitespaceSensitive && c.isIndentationSensitive) && new RegExp(`\\n[\\t ]{${E.tabWidth * T(P, (G) => G.parent && G.parent.type !== "root")}}$`).test(c.lastChild.value) ? "" : g;
          return c.children.length === 0 ? b(c.hasDanglingSpaces && c.isDanglingSpaceSensitive ? f : "") : b([j(c) ? i : "", B([I(), Q(P, E, w)]), $()]);
        }
        m.exports = { printElement: v };
      } }), no = ee({ "src/language-html/printer-html.js"(l, m) {
        ne();
        var { builders: { fill: i, group: d, hardline: p, literalline: u }, utils: { cleanDoc: o, getDocParts: a, isConcat: f, replaceTextEndOfLine: g } } = Ut(), x = yl(), { countChars: C, unescapeQuoteEntities: A, getTextValueParts: D } = Ku(), y = va(), { insertPragma: T } = xl(), { locStart: j, locEnd: M } = Ca(), k = ko(), { printClosingTagSuffix: L, printClosingTagEnd: _, printOpeningTagPrefix: R, printOpeningTagStart: O } = wu(), { printElement: Q } = gs(), { printChildren: v } = ui();
        function P(E, w, c) {
          let F = E.getValue();
          switch (F.type) {
            case "front-matter":
              return g(F.raw);
            case "root":
              return w.__onHtmlRoot && w.__onHtmlRoot(F), [d(v(E, w, c)), p];
            case "element":
            case "ieConditionalComment":
              return Q(E, w, c);
            case "ieConditionalStartComment":
            case "ieConditionalEndComment":
              return [O(F), _(F)];
            case "interpolation":
              return [O(F, w), ...E.map(c, "children"), _(F, w)];
            case "text": {
              if (F.parent.type === "interpolation") {
                let b = /\n[^\S\n]*$/, B = b.test(F.value), I = B ? F.value.replace(b, "") : F.value;
                return [...g(I), B ? p : ""];
              }
              let S = o([R(F, w), ...D(F), L(F, w)]);
              return f(S) || S.type === "fill" ? i(a(S)) : S;
            }
            case "docType":
              return [d([O(F, w), " ", F.value.replace(/^html\b/i, "html").replace(/\s+/g, " ")]), _(F, w)];
            case "comment":
              return [R(F, w), ...g(w.originalText.slice(j(F), M(F)), u), L(F, w)];
            case "attribute": {
              if (F.value === null)
                return F.rawName;
              let S = A(F.value), b = C(S, "'"), B = C(S, '"'), I = b < B ? "'" : '"';
              return [F.rawName, "=", I, ...g(I === '"' ? S.replace(/"/g, "&quot;") : S.replace(/'/g, "&apos;")), I];
            }
            default:
              throw new Error(`Unexpected node type ${F.type}`);
          }
        }
        m.exports = { preprocess: y, print: P, insertPragma: T, massageAstNode: x, embed: k };
      } }), Sl = ee({ "src/language-html/options.js"(l, m) {
        ne();
        var i = Ci(), d = "HTML";
        m.exports = { bracketSameLine: i.bracketSameLine, htmlWhitespaceSensitivity: { since: "1.15.0", category: d, type: "choice", default: "css", description: "How to handle whitespaces in HTML.", choices: [{ value: "css", description: "Respect the default value of CSS display property." }, { value: "strict", description: "Whitespaces are considered sensitive." }, { value: "ignore", description: "Whitespaces are considered insensitive." }] }, singleAttributePerLine: i.singleAttributePerLine, vueIndentScriptAndStyle: { since: "1.19.0", category: d, type: "boolean", default: !1, description: "Indent script and style tags in Vue files." } };
      } }), hs = ee({ "src/language-html/parsers.js"() {
        ne();
      } }), er = ee({ "node_modules/linguist-languages/data/HTML.json"(l, m) {
        m.exports = { name: "HTML", type: "markup", tmScope: "text.html.basic", aceMode: "html", codemirrorMode: "htmlmixed", codemirrorMimeType: "text/html", color: "#e34c26", aliases: ["xhtml"], extensions: [".html", ".hta", ".htm", ".html.hl", ".inc", ".xht", ".xhtml"], languageId: 146 };
      } }), Fa = ee({ "node_modules/linguist-languages/data/Vue.json"(l, m) {
        m.exports = { name: "Vue", type: "markup", color: "#41b883", extensions: [".vue"], tmScope: "text.html.vue", aceMode: "html", languageId: 391 };
      } }), ys = ee({ "src/language-html/index.js"(l, m) {
        ne();
        var i = uu(), d = no(), p = Sl(), u = hs(), o = [i(er(), () => ({ name: "Angular", since: "1.15.0", parsers: ["angular"], vscodeLanguageIds: ["html"], extensions: [".component.html"], filenames: [] })), i(er(), (f) => ({ since: "1.15.0", parsers: ["html"], vscodeLanguageIds: ["html"], extensions: [...f.extensions, ".mjml"] })), i(er(), () => ({ name: "Lightning Web Components", since: "1.17.0", parsers: ["lwc"], vscodeLanguageIds: ["html"], extensions: [], filenames: [] })), i(Fa(), () => ({ since: "1.10.0", parsers: ["vue"], vscodeLanguageIds: ["vue"] }))], a = { html: d };
        m.exports = { languages: o, printers: a, options: p, parsers: u };
      } }), Es = ee({ "src/language-yaml/pragma.js"(l, m) {
        ne();
        function i(u) {
          return /^\s*@(?:prettier|format)\s*$/.test(u);
        }
        function d(u) {
          return /^\s*#[^\S\n]*@(?:prettier|format)\s*?(?:\n|$)/.test(u);
        }
        function p(u) {
          return `# @format

${u}`;
        }
        m.exports = { isPragma: i, hasPragma: d, insertPragma: p };
      } }), xa = ee({ "src/language-yaml/loc.js"(l, m) {
        ne();
        function i(p) {
          return p.position.start.offset;
        }
        function d(p) {
          return p.position.end.offset;
        }
        m.exports = { locStart: i, locEnd: d };
      } }), vs = ee({ "src/language-yaml/embed.js"(l, m) {
        ne();
        function i(d, p, u, o) {
          if (d.getValue().type === "root" && o.filepath && /(?:[/\\]|^)\.(?:prettier|stylelint|lintstaged)rc$/.test(o.filepath))
            return u(o.originalText, Object.assign(Object.assign({}, o), {}, { parser: "json" }));
        }
        m.exports = i;
      } }), au = ee({ "src/language-yaml/utils.js"(l, m) {
        ne();
        var { getLast: i, isNonEmptyArray: d } = yn();
        function p(v, P) {
          let E = 0, w = v.stack.length - 1;
          for (let c = 0; c < w; c++) {
            let F = v.stack[c];
            u(F) && P(F) && E++;
          }
          return E;
        }
        function u(v, P) {
          return v && typeof v.type == "string" && (!P || P.includes(v.type));
        }
        function o(v, P, E) {
          return P("children" in v ? Object.assign(Object.assign({}, v), {}, { children: v.children.map((w) => o(w, P, v)) }) : v, E);
        }
        function a(v, P, E) {
          Object.defineProperty(v, P, { get: E, enumerable: !1 });
        }
        function f(v, P) {
          let E = 0, w = P.length;
          for (let c = v.position.end.offset - 1; c < w; c++) {
            let F = P[c];
            if (F === `
` && E++, E === 1 && /\S/.test(F))
              return !1;
            if (E === 2)
              return !0;
          }
          return !1;
        }
        function g(v) {
          switch (v.getValue().type) {
            case "tag":
            case "anchor":
            case "comment":
              return !1;
          }
          let P = v.stack.length;
          for (let E = 1; E < P; E++) {
            let w = v.stack[E], c = v.stack[E - 1];
            if (Array.isArray(c) && typeof w == "number" && w !== c.length - 1)
              return !1;
          }
          return !0;
        }
        function x(v) {
          return d(v.children) ? x(i(v.children)) : v;
        }
        function C(v) {
          return v.value.trim() === "prettier-ignore";
        }
        function A(v) {
          let P = v.getValue();
          if (P.type === "documentBody") {
            let E = v.getParentNode();
            return L(E.head) && C(i(E.head.endComments));
          }
          return T(P) && C(i(P.leadingComments));
        }
        function D(v) {
          return !d(v.children) && !y(v);
        }
        function y(v) {
          return T(v) || j(v) || M(v) || k(v) || L(v);
        }
        function T(v) {
          return d(v == null ? void 0 : v.leadingComments);
        }
        function j(v) {
          return d(v == null ? void 0 : v.middleComments);
        }
        function M(v) {
          return v == null ? void 0 : v.indicatorComment;
        }
        function k(v) {
          return v == null ? void 0 : v.trailingComment;
        }
        function L(v) {
          return d(v == null ? void 0 : v.endComments);
        }
        function _(v) {
          let P = [], E;
          for (let w of v.split(/( +)/))
            w !== " " ? E === " " ? P.push(w) : P.push((P.pop() || "") + w) : E === void 0 && P.unshift(""), E = w;
          return E === " " && P.push((P.pop() || "") + " "), P[0] === "" && (P.shift(), P.unshift(" " + (P.shift() || ""))), P;
        }
        function R(v, P, E) {
          let w = P.split(`
`).map((c, F, S) => F === 0 && F === S.length - 1 ? c : F !== 0 && F !== S.length - 1 ? c.trim() : F === 0 ? c.trimEnd() : c.trimStart());
          return E.proseWrap === "preserve" ? w.map((c) => c.length === 0 ? [] : [c]) : w.map((c) => c.length === 0 ? [] : _(c)).reduce((c, F, S) => S !== 0 && w[S - 1].length > 0 && F.length > 0 && !(v === "quoteDouble" && i(i(c)).endsWith("\\")) ? [...c.slice(0, -1), [...i(c), ...F]] : [...c, F], []).map((c) => E.proseWrap === "never" ? [c.join(" ")] : c);
        }
        function O(v, P) {
          let { parentIndent: E, isLastDescendant: w, options: c } = P, F = v.position.start.line === v.position.end.line ? "" : c.originalText.slice(v.position.start.offset, v.position.end.offset).match(/^[^\n]*\n(.*)$/s)[1], S;
          if (v.indent === null) {
            let I = F.match(/^(?<leadingSpace> *)[^\n\r ]/m);
            S = I ? I.groups.leadingSpace.length : Number.POSITIVE_INFINITY;
          } else
            S = v.indent - 1 + E;
          let b = F.split(`
`).map((I) => I.slice(S));
          if (c.proseWrap === "preserve" || v.type === "blockLiteral")
            return B(b.map((I) => I.length === 0 ? [] : [I]));
          return B(b.map((I) => I.length === 0 ? [] : _(I)).reduce((I, $, G) => G !== 0 && b[G - 1].length > 0 && $.length > 0 && !/^\s/.test($[0]) && !/^\s|\s$/.test(i(I)) ? [...I.slice(0, -1), [...i(I), ...$]] : [...I, $], []).map((I) => I.reduce(($, G) => $.length > 0 && /\s$/.test(i($)) ? [...$.slice(0, -1), i($) + " " + G] : [...$, G], [])).map((I) => c.proseWrap === "never" ? [I.join(" ")] : I));
          function B(I) {
            if (v.chomping === "keep")
              return i(I).length === 0 ? I.slice(0, -1) : I;
            let $ = 0;
            for (let G = I.length - 1; G >= 0 && I[G].length === 0; G--)
              $++;
            return $ === 0 ? I : $ >= 2 && !w ? I.slice(0, -($ - 1)) : I.slice(0, -$);
          }
        }
        function Q(v) {
          if (!v)
            return !0;
          switch (v.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
            case "alias":
            case "flowMapping":
            case "flowSequence":
              return !0;
            default:
              return !1;
          }
        }
        m.exports = { getLast: i, getAncestorCount: p, isNode: u, isEmptyNode: D, isInlineNode: Q, mapNode: o, defineShortcut: a, isNextLineEmpty: f, isLastDescendantNode: g, getBlockValueLineContents: O, getFlowScalarLineContents: R, getLastDescendantNode: x, hasPrettierIgnore: A, hasLeadingComments: T, hasMiddleComments: j, hasIndicatorComment: M, hasTrailingComment: k, hasEndComments: L };
      } }), rr = ee({ "src/language-yaml/print-preprocess.js"(l, m) {
        ne();
        var { defineShortcut: i, mapNode: d } = au();
        function p(o) {
          return d(o, u);
        }
        function u(o) {
          switch (o.type) {
            case "document":
              i(o, "head", () => o.children[0]), i(o, "body", () => o.children[1]);
              break;
            case "documentBody":
            case "sequenceItem":
            case "flowSequenceItem":
            case "mappingKey":
            case "mappingValue":
              i(o, "content", () => o.children[0]);
              break;
            case "mappingItem":
            case "flowMappingItem":
              i(o, "key", () => o.children[0]), i(o, "value", () => o.children[1]);
              break;
          }
          return o;
        }
        m.exports = p;
      } }), ir = ee({ "src/language-yaml/print/misc.js"(l, m) {
        ne();
        var { builders: { softline: i, align: d } } = Ut(), { hasEndComments: p, isNextLineEmpty: u, isNode: o } = au(), a = /* @__PURE__ */ new WeakMap();
        function f(C, A) {
          let D = C.getValue(), y = C.stack[0], T;
          return a.has(y) ? T = a.get(y) : (T = /* @__PURE__ */ new Set(), a.set(y, T)), !T.has(D.position.end.line) && (T.add(D.position.end.line), u(D, A) && !g(C.getParentNode())) ? i : "";
        }
        function g(C) {
          return p(C) && !o(C, ["documentHead", "documentBody", "flowMapping", "flowSequence"]);
        }
        function x(C, A) {
          return d(" ".repeat(C), A);
        }
        m.exports = { alignWithSpaces: x, shouldPrintEndComments: g, printNextEmptyLine: f };
      } }), Tr = ee({ "src/language-yaml/print/flow-mapping-sequence.js"(l, m) {
        ne();
        var { builders: { ifBreak: i, line: d, softline: p, hardline: u, join: o } } = Ut(), { isEmptyNode: a, getLast: f, hasEndComments: g } = au(), { printNextEmptyLine: x, alignWithSpaces: C } = ir();
        function A(y, T, j) {
          let M = y.getValue(), k = M.type === "flowMapping", L = k ? "{" : "[", _ = k ? "}" : "]", R = p;
          k && M.children.length > 0 && j.bracketSpacing && (R = d);
          let O = f(M.children), Q = O && O.type === "flowMappingItem" && a(O.key) && a(O.value);
          return [L, C(j.tabWidth, [R, D(y, T, j), j.trailingComma === "none" ? "" : i(","), g(M) ? [u, o(u, y.map(T, "endComments"))] : ""]), Q ? "" : R, _];
        }
        function D(y, T, j) {
          let M = y.getValue();
          return y.map((k, L) => [T(), L === M.children.length - 1 ? "" : [",", d, M.children[L].position.start.line !== M.children[L + 1].position.start.line ? x(k, j.originalText) : ""]], "children");
        }
        m.exports = { printFlowMapping: A, printFlowSequence: A };
      } }), Aa = ee({ "src/language-yaml/print/mapping-item.js"(l, m) {
        ne();
        var { builders: { conditionalGroup: i, group: d, hardline: p, ifBreak: u, join: o, line: a } } = Ut(), { hasLeadingComments: f, hasMiddleComments: g, hasTrailingComment: x, hasEndComments: C, isNode: A, isEmptyNode: D, isInlineNode: y } = au(), { alignWithSpaces: T } = ir();
        function j(_, R, O, Q, v) {
          let { key: P, value: E } = _, w = D(P), c = D(E);
          if (w && c)
            return ": ";
          let F = Q("key"), S = k(_) ? " " : "";
          if (c)
            return _.type === "flowMappingItem" && R.type === "flowMapping" ? F : _.type === "mappingItem" && M(P.content, v) && !x(P.content) && (!R.tag || R.tag.value !== "tag:yaml.org,2002:set") ? [F, S, ":"] : ["? ", T(2, F)];
          let b = Q("value");
          if (w)
            return [": ", T(2, b)];
          if (f(E) || !y(P.content))
            return ["? ", T(2, F), p, o("", O.map(Q, "value", "leadingComments").map((J) => [J, p])), ": ", T(2, b)];
          if (L(P.content) && !f(P.content) && !g(P.content) && !x(P.content) && !C(P) && !f(E.content) && !g(E.content) && !C(E) && M(E.content, v))
            return [F, S, ": ", b];
          let B = Symbol("mappingKey"), I = d([u("? "), d(T(2, F), { id: B })]), $ = [p, ": ", T(2, b)], G = [S, ":"];
          f(E.content) || C(E) && E.content && !A(E.content, ["mapping", "sequence"]) || R.type === "mapping" && x(P.content) && y(E.content) || A(E.content, ["mapping", "sequence"]) && E.content.tag === null && E.content.anchor === null ? G.push(p) : E.content && G.push(a), G.push(b);
          let W = T(v.tabWidth, G);
          return M(P.content, v) && !f(P.content) && !g(P.content) && !C(P) ? i([[F, W]]) : i([[I, u($, W, { groupId: B })]]);
        }
        function M(_, R) {
          if (!_)
            return !0;
          switch (_.type) {
            case "plain":
            case "quoteSingle":
            case "quoteDouble":
              break;
            case "alias":
              return !0;
            default:
              return !1;
          }
          if (R.proseWrap === "preserve")
            return _.position.start.line === _.position.end.line;
          if (/\\$/m.test(R.originalText.slice(_.position.start.offset, _.position.end.offset)))
            return !1;
          switch (R.proseWrap) {
            case "never":
              return !_.value.includes(`
`);
            case "always":
              return !/[\n ]/.test(_.value);
            default:
              return !1;
          }
        }
        function k(_) {
          return _.key.content && _.key.content.type === "alias";
        }
        function L(_) {
          if (!_)
            return !0;
          switch (_.type) {
            case "plain":
            case "quoteDouble":
            case "quoteSingle":
              return _.position.start.line === _.position.end.line;
            case "alias":
              return !0;
            default:
              return !1;
          }
        }
        m.exports = j;
      } }), No = ee({ "src/language-yaml/print/block.js"(l, m) {
        ne();
        var { builders: { dedent: i, dedentToRoot: d, fill: p, hardline: u, join: o, line: a, literalline: f, markAsRoot: g }, utils: { getDocParts: x } } = Ut(), { getAncestorCount: C, getBlockValueLineContents: A, hasIndicatorComment: D, isLastDescendantNode: y, isNode: T } = au(), { alignWithSpaces: j } = ir();
        function M(k, L, _) {
          let R = k.getValue(), O = C(k, (w) => T(w, ["sequence", "mapping"])), Q = y(k), v = [R.type === "blockFolded" ? ">" : "|"];
          R.indent !== null && v.push(R.indent.toString()), R.chomping !== "clip" && v.push(R.chomping === "keep" ? "+" : "-"), D(R) && v.push(" ", L("indicatorComment"));
          let P = A(R, { parentIndent: O, isLastDescendant: Q, options: _ }), E = [];
          for (let [w, c] of P.entries())
            w === 0 && E.push(u), E.push(p(x(o(a, c)))), w !== P.length - 1 ? E.push(c.length === 0 ? u : g(f)) : R.chomping === "keep" && Q && E.push(d(c.length === 0 ? u : f));
          return R.indent === null ? v.push(i(j(_.tabWidth, E))) : v.push(d(j(R.indent - 1 + O, E))), v;
        }
        m.exports = M;
      } }), bo = ee({ "src/language-yaml/printer-yaml.js"(l, m) {
        ne();
        var { builders: { breakParent: i, fill: d, group: p, hardline: u, join: o, line: a, lineSuffix: f, literalline: g }, utils: { getDocParts: x, replaceTextEndOfLine: C } } = Ut(), { isPreviousLineEmpty: A } = yn(), { insertPragma: D, isPragma: y } = Es(), { locStart: T } = xa(), j = vs(), { getFlowScalarLineContents: M, getLastDescendantNode: k, hasLeadingComments: L, hasMiddleComments: _, hasTrailingComment: R, hasEndComments: O, hasPrettierIgnore: Q, isLastDescendantNode: v, isNode: P, isInlineNode: E } = au(), w = rr(), { alignWithSpaces: c, printNextEmptyLine: F, shouldPrintEndComments: S } = ir(), { printFlowMapping: b, printFlowSequence: B } = Tr(), I = Aa(), $ = No();
        function G(U, se, ye) {
          let le = U.getValue(), Ne = [];
          le.type !== "mappingValue" && L(le) && Ne.push([o(u, U.map(ye, "leadingComments")), u]);
          let { tag: X, anchor: re } = le;
          X && Ne.push(ye("tag")), X && re && Ne.push(" "), re && Ne.push(ye("anchor"));
          let Te = "";
          P(le, ["mapping", "sequence", "comment", "directive", "mappingItem", "sequenceItem"]) && !v(U) && (Te = F(U, se.originalText)), (X || re) && (P(le, ["sequence", "mapping"]) && !_(le) ? Ne.push(u) : Ne.push(" ")), _(le) && Ne.push([le.middleComments.length === 1 ? "" : u, o(u, U.map(ye, "middleComments")), u]);
          let we = U.getParentNode();
          return Q(U) ? Ne.push(C(se.originalText.slice(le.position.start.offset, le.position.end.offset).trimEnd(), g)) : Ne.push(p(W(le, we, U, se, ye))), R(le) && !P(le, ["document", "documentHead"]) && Ne.push(f([le.type === "mappingValue" && !le.content ? "" : " ", we.type === "mappingKey" && U.getParentNode(2).type === "mapping" && E(le) ? "" : i, ye("trailingComment")])), S(le) && Ne.push(c(le.type === "sequenceItem" ? 2 : 0, [u, o(u, U.map((tt) => [A(se.originalText, tt.getValue(), T) ? u : "", ye()], "endComments"))])), Ne.push(Te), Ne;
        }
        function W(U, se, ye, le, Ne) {
          switch (U.type) {
            case "root": {
              let { children: X } = U, re = [];
              ye.each((we, tt) => {
                let oe = X[tt], H = X[tt + 1];
                tt !== 0 && re.push(u), re.push(Ne()), te(oe, H) ? (re.push(u, "..."), R(oe) && re.push(" ", Ne("trailingComment"))) : H && !R(H.head) && re.push(u, "---");
              }, "children");
              let Te = k(U);
              return (!P(Te, ["blockLiteral", "blockFolded"]) || Te.chomping !== "keep") && re.push(u), re;
            }
            case "document": {
              let X = se.children[ye.getName() + 1], re = [];
              return K(U, X, se, le) === "head" && ((U.head.children.length > 0 || U.head.endComments.length > 0) && re.push(Ne("head")), R(U.head) ? re.push(["---", " ", Ne(["head", "trailingComment"])]) : re.push("---")), J(U) && re.push(Ne("body")), o(u, re);
            }
            case "documentHead":
              return o(u, [...ye.map(Ne, "children"), ...ye.map(Ne, "endComments")]);
            case "documentBody": {
              let { children: X, endComments: re } = U, Te = "";
              if (X.length > 0 && re.length > 0) {
                let we = k(U);
                P(we, ["blockFolded", "blockLiteral"]) ? we.chomping !== "keep" && (Te = [u, u]) : Te = u;
              }
              return [o(u, ye.map(Ne, "children")), Te, o(u, ye.map(Ne, "endComments"))];
            }
            case "directive":
              return ["%", o(" ", [U.name, ...U.parameters])];
            case "comment":
              return ["#", U.value];
            case "alias":
              return ["*", U.value];
            case "tag":
              return le.originalText.slice(U.position.start.offset, U.position.end.offset);
            case "anchor":
              return ["&", U.value];
            case "plain":
              return ie(U.type, le.originalText.slice(U.position.start.offset, U.position.end.offset), le);
            case "quoteDouble":
            case "quoteSingle": {
              let X = "'", re = '"', Te = le.originalText.slice(U.position.start.offset + 1, U.position.end.offset - 1);
              if (U.type === "quoteSingle" && Te.includes("\\") || U.type === "quoteDouble" && /\\[^"]/.test(Te)) {
                let tt = U.type === "quoteDouble" ? re : X;
                return [tt, ie(U.type, Te, le), tt];
              }
              if (Te.includes(re))
                return [X, ie(U.type, U.type === "quoteDouble" ? Te.replace(/\\"/g, re).replace(/'/g, X.repeat(2)) : Te, le), X];
              if (Te.includes(X))
                return [re, ie(U.type, U.type === "quoteSingle" ? Te.replace(/''/g, X) : Te, le), re];
              let we = le.singleQuote ? X : re;
              return [we, ie(U.type, Te, le), we];
            }
            case "blockFolded":
            case "blockLiteral":
              return $(ye, Ne, le);
            case "mapping":
            case "sequence":
              return o(u, ye.map(Ne, "children"));
            case "sequenceItem":
              return ["- ", c(2, U.content ? Ne("content") : "")];
            case "mappingKey":
            case "mappingValue":
              return U.content ? Ne("content") : "";
            case "mappingItem":
            case "flowMappingItem":
              return I(U, se, ye, Ne, le);
            case "flowMapping":
              return b(ye, Ne, le);
            case "flowSequence":
              return B(ye, Ne, le);
            case "flowSequenceItem":
              return Ne("content");
            default:
              throw new Error(`Unexpected node type ${U.type}`);
          }
        }
        function J(U) {
          return U.body.children.length > 0 || O(U.body);
        }
        function te(U, se) {
          return R(U) || se && (se.head.children.length > 0 || O(se.head));
        }
        function K(U, se, ye, le) {
          return ye.children[0] === U && /---(?:\s|$)/.test(le.originalText.slice(T(U), T(U) + 4)) || U.head.children.length > 0 || O(U.head) || R(U.head) ? "head" : te(U, se) ? !1 : se ? "root" : !1;
        }
        function ie(U, se, ye) {
          let le = M(U, se, ye);
          return o(u, le.map((Ne) => d(x(o(a, Ne)))));
        }
        function q(U, se) {
          if (P(se))
            switch (delete se.position, se.type) {
              case "comment":
                if (y(se.value))
                  return null;
                break;
              case "quoteDouble":
              case "quoteSingle":
                se.type = "quote";
                break;
            }
        }
        m.exports = { preprocess: w, embed: j, print: G, massageAstNode: q, insertPragma: D };
      } }), Fc = ee({ "src/language-yaml/options.js"(l, m) {
        ne();
        var i = Ci();
        m.exports = { bracketSpacing: i.bracketSpacing, singleQuote: i.singleQuote, proseWrap: i.proseWrap };
      } }), jr = ee({ "src/language-yaml/parsers.js"() {
        ne();
      } }), Cs = ee({ "node_modules/linguist-languages/data/YAML.json"(l, m) {
        m.exports = { name: "YAML", type: "data", color: "#cb171e", tmScope: "source.yaml", aliases: ["yml"], extensions: [".yml", ".mir", ".reek", ".rviz", ".sublime-syntax", ".syntax", ".yaml", ".yaml-tmlanguage", ".yaml.sed", ".yml.mysql"], filenames: [".clang-format", ".clang-tidy", ".gemrc", "CITATION.cff", "glide.lock", "yarn.lock"], aceMode: "yaml", codemirrorMode: "yaml", codemirrorMimeType: "text/x-yaml", languageId: 407 };
      } }), Fs = ee({ "src/language-yaml/index.js"(l, m) {
        ne();
        var i = uu(), d = bo(), p = Fc(), u = jr(), o = [i(Cs(), (a) => ({ since: "1.14.0", parsers: ["yaml"], vscodeLanguageIds: ["yaml", "ansible", "home-assistant"], filenames: [...a.filenames.filter((f) => f !== "yarn.lock"), ".prettierrc", ".stylelintrc", ".lintstagedrc"] }))];
        m.exports = { languages: o, printers: { yaml: d }, options: p, parsers: u };
      } }), xs = ee({ "src/languages.js"(l, m) {
        ne(), m.exports = [Xi(), is(), Da(), eo(), Ea(), ys(), Fs()];
      } });
      ne();
      var { version: Nu } = $r(), Br = fc(), { getSupportInfo: Bo } = Pi(), As = mc(), Ss = xs(), Tl = Ut();
      function ii(l) {
        let m = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 1;
        return function() {
          for (var i = arguments.length, d = new Array(i), p = 0; p < i; p++)
            d[p] = arguments[p];
          let u = d[m] || {}, o = u.plugins || [];
          return d[m] = Object.assign(Object.assign({}, u), {}, { plugins: [...Ss, ...Array.isArray(o) ? o : Object.values(o)] }), l(...d);
        };
      }
      var Sa = ii(Br.formatWithCursor);
      Ae.exports = { formatWithCursor: Sa, format(l, m) {
        return Sa(l, m).formatted;
      }, check(l, m) {
        let { formatted: i } = Sa(l, m);
        return i === l;
      }, doc: Tl, getSupportInfo: ii(Bo, 0), version: Nu, util: As, __debug: { parse: ii(Br.parse), formatAST: ii(Br.formatAST), formatDoc: ii(Br.formatDoc), printToDoc: ii(Br.printToDoc), printDocToString: ii(Br.printDocToString) } };
    });
    return Vl();
  });
})(yp);
var Gp = yp.exports;
const dp = /* @__PURE__ */ Kc(Gp);
var Ep = { exports: {} };
(function(Kt, wn) {
  (function(pe) {
    Kt.exports = pe();
  })(function() {
    var pe = (Cn, _n) => () => (_n || Cn((_n = { exports: {} }).exports, _n), _n.exports), Mn = pe((Cn, _n) => {
      var Yn = Object.getOwnPropertyNames, zn = (Le, it) => function() {
        return Le && (it = (0, Le[Yn(Le)[0]])(Le = 0)), it;
      }, Xt = (Le, it) => function() {
        return it || (0, Le[Yn(Le)[0]])((it = { exports: {} }).exports, it), it.exports;
      }, cn = zn({ "<define:process>"() {
      } }), Fn = Xt({ "src/common/parser-create-error.js"(Le, it) {
        cn();
        function We(Ye, Ve) {
          let Lt = new SyntaxError(Ye + " (" + Ve.start.line + ":" + Ve.start.column + ")");
          return Lt.loc = Ve, Lt;
        }
        it.exports = We;
      } }), Rn = Xt({ "src/utils/try-combinations.js"(Le, it) {
        cn();
        function We() {
          let Ye;
          for (var Ve = arguments.length, Lt = new Array(Ve), Ot = 0; Ot < Ve; Ot++)
            Lt[Ot] = arguments[Ot];
          for (let [Wt, gn] of Lt.entries())
            try {
              return { result: gn() };
            } catch (An) {
              Wt === 0 && (Ye = An);
            }
          return { error: Ye };
        }
        it.exports = We;
      } }), Un = Xt({ "src/language-graphql/pragma.js"(Le, it) {
        cn();
        function We(Ve) {
          return /^\s*#[^\S\n]*@(?:format|prettier)\s*(?:\n|$)/.test(Ve);
        }
        function Ye(Ve) {
          return `# @format

` + Ve;
        }
        it.exports = { hasPragma: We, insertPragma: Ye };
      } }), Cr = Xt({ "src/language-graphql/loc.js"(Le, it) {
        cn();
        function We(Ve) {
          return typeof Ve.start == "number" ? Ve.start : Ve.loc && Ve.loc.start;
        }
        function Ye(Ve) {
          return typeof Ve.end == "number" ? Ve.end : Ve.loc && Ve.loc.end;
        }
        it.exports = { locStart: We, locEnd: Ye };
      } }), Fr = Xt({ "node_modules/graphql/jsutils/isObjectLike.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = We;
        function it(Ye) {
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? it = function(Ve) {
            return typeof Ve;
          } : it = function(Ve) {
            return Ve && typeof Symbol == "function" && Ve.constructor === Symbol && Ve !== Symbol.prototype ? "symbol" : typeof Ve;
          }, it(Ye);
        }
        function We(Ye) {
          return it(Ye) == "object" && Ye !== null;
        }
      } }), On = Xt({ "node_modules/graphql/polyfills/symbols.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.SYMBOL_TO_STRING_TAG = Le.SYMBOL_ASYNC_ITERATOR = Le.SYMBOL_ITERATOR = void 0;
        var it = typeof Symbol == "function" && Symbol.iterator != null ? Symbol.iterator : "@@iterator";
        Le.SYMBOL_ITERATOR = it;
        var We = typeof Symbol == "function" && Symbol.asyncIterator != null ? Symbol.asyncIterator : "@@asyncIterator";
        Le.SYMBOL_ASYNC_ITERATOR = We;
        var Ye = typeof Symbol == "function" && Symbol.toStringTag != null ? Symbol.toStringTag : "@@toStringTag";
        Le.SYMBOL_TO_STRING_TAG = Ye;
      } }), xn = Xt({ "node_modules/graphql/language/location.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.getLocation = it;
        function it(We, Ye) {
          for (var Ve = /\r\n|[\n\r]/g, Lt = 1, Ot = Ye + 1, Wt; (Wt = Ve.exec(We.body)) && Wt.index < Ye; )
            Lt += 1, Ot = Ye + 1 - (Wt.index + Wt[0].length);
          return { line: Lt, column: Ot };
        }
      } }), Wn = Xt({ "node_modules/graphql/language/printLocation.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.printLocation = We, Le.printSourceLocation = Ye;
        var it = xn();
        function We(Wt) {
          return Ye(Wt.source, (0, it.getLocation)(Wt.source, Wt.start));
        }
        function Ye(Wt, gn) {
          var An = Wt.locationOffset.column - 1, rn = Lt(An) + Wt.body, hn = gn.line - 1, Sn = Wt.locationOffset.line - 1, Ft = gn.line + Sn, tn = gn.line === 1 ? An : 0, et = gn.column + tn, be = "".concat(Wt.name, ":").concat(Ft, ":").concat(et, `
`), Me = rn.split(/\r\n|[\n\r]/g), Dt = Me[hn];
          if (Dt.length > 120) {
            for (var Re = Math.floor(et / 80), xt = et % 80, Zt = [], yt = 0; yt < Dt.length; yt += 80)
              Zt.push(Dt.slice(yt, yt + 80));
            return be + Ve([["".concat(Ft), Zt[0]]].concat(Zt.slice(1, Re + 1).map(function(Bt) {
              return ["", Bt];
            }), [[" ", Lt(xt - 1) + "^"], ["", Zt[Re + 1]]]));
          }
          return be + Ve([["".concat(Ft - 1), Me[hn - 1]], ["".concat(Ft), Dt], ["", Lt(et - 1) + "^"], ["".concat(Ft + 1), Me[hn + 1]]]);
        }
        function Ve(Wt) {
          var gn = Wt.filter(function(rn) {
            rn[0];
            var hn = rn[1];
            return hn !== void 0;
          }), An = Math.max.apply(Math, gn.map(function(rn) {
            var hn = rn[0];
            return hn.length;
          }));
          return gn.map(function(rn) {
            var hn = rn[0], Sn = rn[1];
            return Ot(An, hn) + (Sn ? " | " + Sn : " |");
          }).join(`
`);
        }
        function Lt(Wt) {
          return Array(Wt + 1).join(" ");
        }
        function Ot(Wt, gn) {
          return Lt(Wt - gn.length) + gn;
        }
      } }), Gn = Xt({ "node_modules/graphql/error/GraphQLError.js"(Le) {
        cn();
        function it(yt) {
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? it = function(Bt) {
            return typeof Bt;
          } : it = function(Bt) {
            return Bt && typeof Symbol == "function" && Bt.constructor === Symbol && Bt !== Symbol.prototype ? "symbol" : typeof Bt;
          }, it(yt);
        }
        Object.defineProperty(Le, "__esModule", { value: !0 }), Le.printError = Zt, Le.GraphQLError = void 0;
        var We = Ot(Fr()), Ye = On(), Ve = xn(), Lt = Wn();
        function Ot(yt) {
          return yt && yt.__esModule ? yt : { default: yt };
        }
        function Wt(yt, Bt) {
          if (!(yt instanceof Bt))
            throw new TypeError("Cannot call a class as a function");
        }
        function gn(yt, Bt) {
          for (var Xe = 0; Xe < Bt.length; Xe++) {
            var Et = Bt[Xe];
            Et.enumerable = Et.enumerable || !1, Et.configurable = !0, "value" in Et && (Et.writable = !0), Object.defineProperty(yt, Et.key, Et);
          }
        }
        function An(yt, Bt, Xe) {
          return Bt && gn(yt.prototype, Bt), Xe && gn(yt, Xe), yt;
        }
        function rn(yt, Bt) {
          if (typeof Bt != "function" && Bt !== null)
            throw new TypeError("Super expression must either be null or a function");
          yt.prototype = Object.create(Bt && Bt.prototype, { constructor: { value: yt, writable: !0, configurable: !0 } }), Bt && Dt(yt, Bt);
        }
        function hn(yt) {
          var Bt = be();
          return function() {
            var Xe = Re(yt), Et;
            if (Bt) {
              var lt = Re(this).constructor;
              Et = Reflect.construct(Xe, arguments, lt);
            } else
              Et = Xe.apply(this, arguments);
            return Sn(this, Et);
          };
        }
        function Sn(yt, Bt) {
          return Bt && (it(Bt) === "object" || typeof Bt == "function") ? Bt : Ft(yt);
        }
        function Ft(yt) {
          if (yt === void 0)
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
          return yt;
        }
        function tn(yt) {
          var Bt = typeof Map == "function" ? /* @__PURE__ */ new Map() : void 0;
          return tn = function(Xe) {
            if (Xe === null || !Me(Xe))
              return Xe;
            if (typeof Xe != "function")
              throw new TypeError("Super expression must either be null or a function");
            if (typeof Bt < "u") {
              if (Bt.has(Xe))
                return Bt.get(Xe);
              Bt.set(Xe, Et);
            }
            function Et() {
              return et(Xe, arguments, Re(this).constructor);
            }
            return Et.prototype = Object.create(Xe.prototype, { constructor: { value: Et, enumerable: !1, writable: !0, configurable: !0 } }), Dt(Et, Xe);
          }, tn(yt);
        }
        function et(yt, Bt, Xe) {
          return be() ? et = Reflect.construct : et = function(Et, lt, wt) {
            var pn = [null];
            pn.push.apply(pn, lt);
            var ar = Function.bind.apply(Et, pn), Rr = new ar();
            return wt && Dt(Rr, wt.prototype), Rr;
          }, et.apply(null, arguments);
        }
        function be() {
          if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
            return !1;
          if (typeof Proxy == "function")
            return !0;
          try {
            return Date.prototype.toString.call(Reflect.construct(Date, [], function() {
            })), !0;
          } catch {
            return !1;
          }
        }
        function Me(yt) {
          return Function.toString.call(yt).indexOf("[native code]") !== -1;
        }
        function Dt(yt, Bt) {
          return Dt = Object.setPrototypeOf || function(Xe, Et) {
            return Xe.__proto__ = Et, Xe;
          }, Dt(yt, Bt);
        }
        function Re(yt) {
          return Re = Object.setPrototypeOf ? Object.getPrototypeOf : function(Bt) {
            return Bt.__proto__ || Object.getPrototypeOf(Bt);
          }, Re(yt);
        }
        var xt = function(yt) {
          rn(Xe, yt);
          var Bt = hn(Xe);
          function Xe(Et, lt, wt, pn, ar, Rr, Ti) {
            var ai, vu, pu, wi, du;
            Wt(this, Xe), du = Bt.call(this, Et);
            var fu = Array.isArray(lt) ? lt.length !== 0 ? lt : void 0 : lt ? [lt] : void 0, si = wt;
            if (!si && fu) {
              var ki;
              si = (ki = fu[0].loc) === null || ki === void 0 ? void 0 : ki.source;
            }
            var Cu = pn;
            !Cu && fu && (Cu = fu.reduce(function(Xr, Uu) {
              return Uu.loc && Xr.push(Uu.loc.start), Xr;
            }, [])), Cu && Cu.length === 0 && (Cu = void 0);
            var li;
            pn && wt ? li = pn.map(function(Xr) {
              return (0, Ve.getLocation)(wt, Xr);
            }) : fu && (li = fu.reduce(function(Xr, Uu) {
              return Uu.loc && Xr.push((0, Ve.getLocation)(Uu.loc.source, Uu.loc.start)), Xr;
            }, []));
            var Fu = Ti;
            if (Fu == null && Rr != null) {
              var Ni = Rr.extensions;
              (0, We.default)(Ni) && (Fu = Ni);
            }
            return Object.defineProperties(Ft(du), { name: { value: "GraphQLError" }, message: { value: Et, enumerable: !0, writable: !0 }, locations: { value: (ai = li) !== null && ai !== void 0 ? ai : void 0, enumerable: li != null }, path: { value: ar ?? void 0, enumerable: ar != null }, nodes: { value: fu ?? void 0 }, source: { value: (vu = si) !== null && vu !== void 0 ? vu : void 0 }, positions: { value: (pu = Cu) !== null && pu !== void 0 ? pu : void 0 }, originalError: { value: Rr }, extensions: { value: (wi = Fu) !== null && wi !== void 0 ? wi : void 0, enumerable: Fu != null } }), Rr != null && Rr.stack ? (Object.defineProperty(Ft(du), "stack", { value: Rr.stack, writable: !0, configurable: !0 }), Sn(du)) : (Error.captureStackTrace ? Error.captureStackTrace(Ft(du), Xe) : Object.defineProperty(Ft(du), "stack", { value: Error().stack, writable: !0, configurable: !0 }), du);
          }
          return An(Xe, [{ key: "toString", value: function() {
            return Zt(this);
          } }, { key: Ye.SYMBOL_TO_STRING_TAG, get: function() {
            return "Object";
          } }]), Xe;
        }(tn(Error));
        Le.GraphQLError = xt;
        function Zt(yt) {
          var Bt = yt.message;
          if (yt.nodes)
            for (var Xe = 0, Et = yt.nodes; Xe < Et.length; Xe++) {
              var lt = Et[Xe];
              lt.loc && (Bt += `

` + (0, Lt.printLocation)(lt.loc));
            }
          else if (yt.source && yt.locations)
            for (var wt = 0, pn = yt.locations; wt < pn.length; wt++) {
              var ar = pn[wt];
              Bt += `

` + (0, Lt.printSourceLocation)(yt.source, ar);
            }
          return Bt;
        }
      } }), cr = Xt({ "node_modules/graphql/error/syntaxError.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.syntaxError = We;
        var it = Gn();
        function We(Ye, Ve, Lt) {
          return new it.GraphQLError("Syntax Error: ".concat(Lt), void 0, Ye, [Ve]);
        }
      } }), Hn = Xt({ "node_modules/graphql/language/kinds.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.Kind = void 0;
        var it = Object.freeze({ NAME: "Name", DOCUMENT: "Document", OPERATION_DEFINITION: "OperationDefinition", VARIABLE_DEFINITION: "VariableDefinition", SELECTION_SET: "SelectionSet", FIELD: "Field", ARGUMENT: "Argument", FRAGMENT_SPREAD: "FragmentSpread", INLINE_FRAGMENT: "InlineFragment", FRAGMENT_DEFINITION: "FragmentDefinition", VARIABLE: "Variable", INT: "IntValue", FLOAT: "FloatValue", STRING: "StringValue", BOOLEAN: "BooleanValue", NULL: "NullValue", ENUM: "EnumValue", LIST: "ListValue", OBJECT: "ObjectValue", OBJECT_FIELD: "ObjectField", DIRECTIVE: "Directive", NAMED_TYPE: "NamedType", LIST_TYPE: "ListType", NON_NULL_TYPE: "NonNullType", SCHEMA_DEFINITION: "SchemaDefinition", OPERATION_TYPE_DEFINITION: "OperationTypeDefinition", SCALAR_TYPE_DEFINITION: "ScalarTypeDefinition", OBJECT_TYPE_DEFINITION: "ObjectTypeDefinition", FIELD_DEFINITION: "FieldDefinition", INPUT_VALUE_DEFINITION: "InputValueDefinition", INTERFACE_TYPE_DEFINITION: "InterfaceTypeDefinition", UNION_TYPE_DEFINITION: "UnionTypeDefinition", ENUM_TYPE_DEFINITION: "EnumTypeDefinition", ENUM_VALUE_DEFINITION: "EnumValueDefinition", INPUT_OBJECT_TYPE_DEFINITION: "InputObjectTypeDefinition", DIRECTIVE_DEFINITION: "DirectiveDefinition", SCHEMA_EXTENSION: "SchemaExtension", SCALAR_TYPE_EXTENSION: "ScalarTypeExtension", OBJECT_TYPE_EXTENSION: "ObjectTypeExtension", INTERFACE_TYPE_EXTENSION: "InterfaceTypeExtension", UNION_TYPE_EXTENSION: "UnionTypeExtension", ENUM_TYPE_EXTENSION: "EnumTypeExtension", INPUT_OBJECT_TYPE_EXTENSION: "InputObjectTypeExtension" });
        Le.Kind = it;
      } }), wr = Xt({ "node_modules/graphql/jsutils/invariant.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = it;
        function it(We, Ye) {
          var Ve = !!We;
          if (!Ve)
            throw new Error(Ye ?? "Unexpected invariant triggered.");
        }
      } }), mr = Xt({ "node_modules/graphql/jsutils/nodejsCustomInspectSymbol.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = void 0;
        var it = typeof Symbol == "function" && typeof Symbol.for == "function" ? Symbol.for("nodejs.util.inspect.custom") : void 0, We = it;
        Le.default = We;
      } }), Dr = Xt({ "node_modules/graphql/jsutils/defineInspect.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = Ve;
        var it = Ye(wr()), We = Ye(mr());
        function Ye(Lt) {
          return Lt && Lt.__esModule ? Lt : { default: Lt };
        }
        function Ve(Lt) {
          var Ot = Lt.prototype.toJSON;
          typeof Ot == "function" || (0, it.default)(0), Lt.prototype.inspect = Ot, We.default && (Lt.prototype[We.default] = Ot);
        }
      } }), gr = Xt({ "node_modules/graphql/language/ast.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.isNode = Lt, Le.Token = Le.Location = void 0;
        var it = We(Dr());
        function We(Ot) {
          return Ot && Ot.__esModule ? Ot : { default: Ot };
        }
        var Ye = function() {
          function Ot(gn, An, rn) {
            this.start = gn.start, this.end = An.end, this.startToken = gn, this.endToken = An, this.source = rn;
          }
          var Wt = Ot.prototype;
          return Wt.toJSON = function() {
            return { start: this.start, end: this.end };
          }, Ot;
        }();
        Le.Location = Ye, (0, it.default)(Ye);
        var Ve = function() {
          function Ot(gn, An, rn, hn, Sn, Ft, tn) {
            this.kind = gn, this.start = An, this.end = rn, this.line = hn, this.column = Sn, this.value = tn, this.prev = Ft, this.next = null;
          }
          var Wt = Ot.prototype;
          return Wt.toJSON = function() {
            return { kind: this.kind, value: this.value, line: this.line, column: this.column };
          }, Ot;
        }();
        Le.Token = Ve, (0, it.default)(Ve);
        function Lt(Ot) {
          return Ot != null && typeof Ot.kind == "string";
        }
      } }), Or = Xt({ "node_modules/graphql/language/tokenKind.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.TokenKind = void 0;
        var it = Object.freeze({ SOF: "<SOF>", EOF: "<EOF>", BANG: "!", DOLLAR: "$", AMP: "&", PAREN_L: "(", PAREN_R: ")", SPREAD: "...", COLON: ":", EQUALS: "=", AT: "@", BRACKET_L: "[", BRACKET_R: "]", BRACE_L: "{", PIPE: "|", BRACE_R: "}", NAME: "Name", INT: "Int", FLOAT: "Float", STRING: "String", BLOCK_STRING: "BlockString", COMMENT: "Comment" });
        Le.TokenKind = it;
      } }), Pr = Xt({ "node_modules/graphql/jsutils/inspect.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = Ot;
        var it = We(mr());
        function We(Ft) {
          return Ft && Ft.__esModule ? Ft : { default: Ft };
        }
        function Ye(Ft) {
          return typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? Ye = function(tn) {
            return typeof tn;
          } : Ye = function(tn) {
            return tn && typeof Symbol == "function" && tn.constructor === Symbol && tn !== Symbol.prototype ? "symbol" : typeof tn;
          }, Ye(Ft);
        }
        var Ve = 10, Lt = 2;
        function Ot(Ft) {
          return Wt(Ft, []);
        }
        function Wt(Ft, tn) {
          switch (Ye(Ft)) {
            case "string":
              return JSON.stringify(Ft);
            case "function":
              return Ft.name ? "[function ".concat(Ft.name, "]") : "[function]";
            case "object":
              return Ft === null ? "null" : gn(Ft, tn);
            default:
              return String(Ft);
          }
        }
        function gn(Ft, tn) {
          if (tn.indexOf(Ft) !== -1)
            return "[Circular]";
          var et = [].concat(tn, [Ft]), be = hn(Ft);
          if (be !== void 0) {
            var Me = be.call(Ft);
            if (Me !== Ft)
              return typeof Me == "string" ? Me : Wt(Me, et);
          } else if (Array.isArray(Ft))
            return rn(Ft, et);
          return An(Ft, et);
        }
        function An(Ft, tn) {
          var et = Object.keys(Ft);
          if (et.length === 0)
            return "{}";
          if (tn.length > Lt)
            return "[" + Sn(Ft) + "]";
          var be = et.map(function(Me) {
            var Dt = Wt(Ft[Me], tn);
            return Me + ": " + Dt;
          });
          return "{ " + be.join(", ") + " }";
        }
        function rn(Ft, tn) {
          if (Ft.length === 0)
            return "[]";
          if (tn.length > Lt)
            return "[Array]";
          for (var et = Math.min(Ve, Ft.length), be = Ft.length - et, Me = [], Dt = 0; Dt < et; ++Dt)
            Me.push(Wt(Ft[Dt], tn));
          return be === 1 ? Me.push("... 1 more item") : be > 1 && Me.push("... ".concat(be, " more items")), "[" + Me.join(", ") + "]";
        }
        function hn(Ft) {
          var tn = Ft[String(it.default)];
          if (typeof tn == "function")
            return tn;
          if (typeof Ft.inspect == "function")
            return Ft.inspect;
        }
        function Sn(Ft) {
          var tn = Object.prototype.toString.call(Ft).replace(/^\[object /, "").replace(/]$/, "");
          if (tn === "Object" && typeof Ft.constructor == "function") {
            var et = Ft.constructor.name;
            if (typeof et == "string" && et !== "")
              return et;
          }
          return tn;
        }
      } }), Jr = Xt({ "node_modules/graphql/jsutils/devAssert.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = it;
        function it(We, Ye) {
          var Ve = !!We;
          if (!Ve)
            throw new Error(Ye);
        }
      } }), xr = Xt({ "node_modules/graphql/jsutils/instanceOf.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.default = void 0, it(Pr());
        function it(Ye) {
          return Ye && Ye.__esModule ? Ye : { default: Ye };
        }
        var We = function(Ye, Ve) {
          return Ye instanceof Ve;
        };
        Le.default = We;
      } }), Ar = Xt({ "node_modules/graphql/language/source.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.isSource = An, Le.Source = void 0;
        var it = On(), We = Lt(Pr()), Ye = Lt(Jr()), Ve = Lt(xr());
        function Lt(rn) {
          return rn && rn.__esModule ? rn : { default: rn };
        }
        function Ot(rn, hn) {
          for (var Sn = 0; Sn < hn.length; Sn++) {
            var Ft = hn[Sn];
            Ft.enumerable = Ft.enumerable || !1, Ft.configurable = !0, "value" in Ft && (Ft.writable = !0), Object.defineProperty(rn, Ft.key, Ft);
          }
        }
        function Wt(rn, hn, Sn) {
          return hn && Ot(rn.prototype, hn), Sn && Ot(rn, Sn), rn;
        }
        var gn = function() {
          function rn(hn) {
            var Sn = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "GraphQL request", Ft = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : { line: 1, column: 1 };
            typeof hn == "string" || (0, Ye.default)(0, "Body must be a string. Received: ".concat((0, We.default)(hn), ".")), this.body = hn, this.name = Sn, this.locationOffset = Ft, this.locationOffset.line > 0 || (0, Ye.default)(0, "line in locationOffset is 1-indexed and must be positive."), this.locationOffset.column > 0 || (0, Ye.default)(0, "column in locationOffset is 1-indexed and must be positive.");
          }
          return Wt(rn, [{ key: it.SYMBOL_TO_STRING_TAG, get: function() {
            return "Source";
          } }]), rn;
        }();
        Le.Source = gn;
        function An(rn) {
          return (0, Ve.default)(rn, gn);
        }
      } }), Mr = Xt({ "node_modules/graphql/language/directiveLocation.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.DirectiveLocation = void 0;
        var it = Object.freeze({ QUERY: "QUERY", MUTATION: "MUTATION", SUBSCRIPTION: "SUBSCRIPTION", FIELD: "FIELD", FRAGMENT_DEFINITION: "FRAGMENT_DEFINITION", FRAGMENT_SPREAD: "FRAGMENT_SPREAD", INLINE_FRAGMENT: "INLINE_FRAGMENT", VARIABLE_DEFINITION: "VARIABLE_DEFINITION", SCHEMA: "SCHEMA", SCALAR: "SCALAR", OBJECT: "OBJECT", FIELD_DEFINITION: "FIELD_DEFINITION", ARGUMENT_DEFINITION: "ARGUMENT_DEFINITION", INTERFACE: "INTERFACE", UNION: "UNION", ENUM: "ENUM", ENUM_VALUE: "ENUM_VALUE", INPUT_OBJECT: "INPUT_OBJECT", INPUT_FIELD_DEFINITION: "INPUT_FIELD_DEFINITION" });
        Le.DirectiveLocation = it;
      } }), Sr = Xt({ "node_modules/graphql/language/blockString.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.dedentBlockStringValue = it, Le.getBlockStringIndentation = Ye, Le.printBlockString = Ve;
        function it(Lt) {
          var Ot = Lt.split(/\r\n|[\n\r]/g), Wt = Ye(Lt);
          if (Wt !== 0)
            for (var gn = 1; gn < Ot.length; gn++)
              Ot[gn] = Ot[gn].slice(Wt);
          for (var An = 0; An < Ot.length && We(Ot[An]); )
            ++An;
          for (var rn = Ot.length; rn > An && We(Ot[rn - 1]); )
            --rn;
          return Ot.slice(An, rn).join(`
`);
        }
        function We(Lt) {
          for (var Ot = 0; Ot < Lt.length; ++Ot)
            if (Lt[Ot] !== " " && Lt[Ot] !== "	")
              return !1;
          return !0;
        }
        function Ye(Lt) {
          for (var Ot, Wt = !0, gn = !0, An = 0, rn = null, hn = 0; hn < Lt.length; ++hn)
            switch (Lt.charCodeAt(hn)) {
              case 13:
                Lt.charCodeAt(hn + 1) === 10 && ++hn;
              case 10:
                Wt = !1, gn = !0, An = 0;
                break;
              case 9:
              case 32:
                ++An;
                break;
              default:
                gn && !Wt && (rn === null || An < rn) && (rn = An), gn = !1;
            }
          return (Ot = rn) !== null && Ot !== void 0 ? Ot : 0;
        }
        function Ve(Lt) {
          var Ot = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "", Wt = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : !1, gn = Lt.indexOf(`
`) === -1, An = Lt[0] === " " || Lt[0] === "	", rn = Lt[Lt.length - 1] === '"', hn = Lt[Lt.length - 1] === "\\", Sn = !gn || rn || hn || Wt, Ft = "";
          return Sn && !(gn && An) && (Ft += `
` + Ot), Ft += Ot ? Lt.replace(/\n/g, `
` + Ot) : Lt, Sn && (Ft += `
`), '"""' + Ft.replace(/"""/g, '\\"""') + '"""';
        }
      } }), sn = Xt({ "node_modules/graphql/language/lexer.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.isPunctuatorTokenKind = Ot, Le.Lexer = void 0;
        var it = cr(), We = gr(), Ye = Or(), Ve = Sr(), Lt = function() {
          function Re(Zt) {
            var yt = new We.Token(Ye.TokenKind.SOF, 0, 0, 0, 0, null);
            this.source = Zt, this.lastToken = yt, this.token = yt, this.line = 1, this.lineStart = 0;
          }
          var xt = Re.prototype;
          return xt.advance = function() {
            this.lastToken = this.token;
            var Zt = this.token = this.lookahead();
            return Zt;
          }, xt.lookahead = function() {
            var Zt = this.token;
            if (Zt.kind !== Ye.TokenKind.EOF)
              do {
                var yt;
                Zt = (yt = Zt.next) !== null && yt !== void 0 ? yt : Zt.next = gn(this, Zt);
              } while (Zt.kind === Ye.TokenKind.COMMENT);
            return Zt;
          }, Re;
        }();
        Le.Lexer = Lt;
        function Ot(Re) {
          return Re === Ye.TokenKind.BANG || Re === Ye.TokenKind.DOLLAR || Re === Ye.TokenKind.AMP || Re === Ye.TokenKind.PAREN_L || Re === Ye.TokenKind.PAREN_R || Re === Ye.TokenKind.SPREAD || Re === Ye.TokenKind.COLON || Re === Ye.TokenKind.EQUALS || Re === Ye.TokenKind.AT || Re === Ye.TokenKind.BRACKET_L || Re === Ye.TokenKind.BRACKET_R || Re === Ye.TokenKind.BRACE_L || Re === Ye.TokenKind.PIPE || Re === Ye.TokenKind.BRACE_R;
        }
        function Wt(Re) {
          return isNaN(Re) ? Ye.TokenKind.EOF : Re < 127 ? JSON.stringify(String.fromCharCode(Re)) : '"\\u'.concat(("00" + Re.toString(16).toUpperCase()).slice(-4), '"');
        }
        function gn(Re, xt) {
          for (var Zt = Re.source, yt = Zt.body, Bt = yt.length, Xe = xt.end; Xe < Bt; ) {
            var Et = yt.charCodeAt(Xe), lt = Re.line, wt = 1 + Xe - Re.lineStart;
            switch (Et) {
              case 65279:
              case 9:
              case 32:
              case 44:
                ++Xe;
                continue;
              case 10:
                ++Xe, ++Re.line, Re.lineStart = Xe;
                continue;
              case 13:
                yt.charCodeAt(Xe + 1) === 10 ? Xe += 2 : ++Xe, ++Re.line, Re.lineStart = Xe;
                continue;
              case 33:
                return new We.Token(Ye.TokenKind.BANG, Xe, Xe + 1, lt, wt, xt);
              case 35:
                return rn(Zt, Xe, lt, wt, xt);
              case 36:
                return new We.Token(Ye.TokenKind.DOLLAR, Xe, Xe + 1, lt, wt, xt);
              case 38:
                return new We.Token(Ye.TokenKind.AMP, Xe, Xe + 1, lt, wt, xt);
              case 40:
                return new We.Token(Ye.TokenKind.PAREN_L, Xe, Xe + 1, lt, wt, xt);
              case 41:
                return new We.Token(Ye.TokenKind.PAREN_R, Xe, Xe + 1, lt, wt, xt);
              case 46:
                if (yt.charCodeAt(Xe + 1) === 46 && yt.charCodeAt(Xe + 2) === 46)
                  return new We.Token(Ye.TokenKind.SPREAD, Xe, Xe + 3, lt, wt, xt);
                break;
              case 58:
                return new We.Token(Ye.TokenKind.COLON, Xe, Xe + 1, lt, wt, xt);
              case 61:
                return new We.Token(Ye.TokenKind.EQUALS, Xe, Xe + 1, lt, wt, xt);
              case 64:
                return new We.Token(Ye.TokenKind.AT, Xe, Xe + 1, lt, wt, xt);
              case 91:
                return new We.Token(Ye.TokenKind.BRACKET_L, Xe, Xe + 1, lt, wt, xt);
              case 93:
                return new We.Token(Ye.TokenKind.BRACKET_R, Xe, Xe + 1, lt, wt, xt);
              case 123:
                return new We.Token(Ye.TokenKind.BRACE_L, Xe, Xe + 1, lt, wt, xt);
              case 124:
                return new We.Token(Ye.TokenKind.PIPE, Xe, Xe + 1, lt, wt, xt);
              case 125:
                return new We.Token(Ye.TokenKind.BRACE_R, Xe, Xe + 1, lt, wt, xt);
              case 34:
                return yt.charCodeAt(Xe + 1) === 34 && yt.charCodeAt(Xe + 2) === 34 ? tn(Zt, Xe, lt, wt, xt, Re) : Ft(Zt, Xe, lt, wt, xt);
              case 45:
              case 48:
              case 49:
              case 50:
              case 51:
              case 52:
              case 53:
              case 54:
              case 55:
              case 56:
              case 57:
                return hn(Zt, Xe, Et, lt, wt, xt);
              case 65:
              case 66:
              case 67:
              case 68:
              case 69:
              case 70:
              case 71:
              case 72:
              case 73:
              case 74:
              case 75:
              case 76:
              case 77:
              case 78:
              case 79:
              case 80:
              case 81:
              case 82:
              case 83:
              case 84:
              case 85:
              case 86:
              case 87:
              case 88:
              case 89:
              case 90:
              case 95:
              case 97:
              case 98:
              case 99:
              case 100:
              case 101:
              case 102:
              case 103:
              case 104:
              case 105:
              case 106:
              case 107:
              case 108:
              case 109:
              case 110:
              case 111:
              case 112:
              case 113:
              case 114:
              case 115:
              case 116:
              case 117:
              case 118:
              case 119:
              case 120:
              case 121:
              case 122:
                return Me(Zt, Xe, lt, wt, xt);
            }
            throw (0, it.syntaxError)(Zt, Xe, An(Et));
          }
          var pn = Re.line, ar = 1 + Xe - Re.lineStart;
          return new We.Token(Ye.TokenKind.EOF, Bt, Bt, pn, ar, xt);
        }
        function An(Re) {
          return Re < 32 && Re !== 9 && Re !== 10 && Re !== 13 ? "Cannot contain the invalid character ".concat(Wt(Re), ".") : Re === 39 ? `Unexpected single quote character ('), did you mean to use a double quote (")?` : "Cannot parse the unexpected character ".concat(Wt(Re), ".");
        }
        function rn(Re, xt, Zt, yt, Bt) {
          var Xe = Re.body, Et, lt = xt;
          do
            Et = Xe.charCodeAt(++lt);
          while (!isNaN(Et) && (Et > 31 || Et === 9));
          return new We.Token(Ye.TokenKind.COMMENT, xt, lt, Zt, yt, Bt, Xe.slice(xt + 1, lt));
        }
        function hn(Re, xt, Zt, yt, Bt, Xe) {
          var Et = Re.body, lt = Zt, wt = xt, pn = !1;
          if (lt === 45 && (lt = Et.charCodeAt(++wt)), lt === 48) {
            if (lt = Et.charCodeAt(++wt), lt >= 48 && lt <= 57)
              throw (0, it.syntaxError)(Re, wt, "Invalid number, unexpected digit after 0: ".concat(Wt(lt), "."));
          } else
            wt = Sn(Re, wt, lt), lt = Et.charCodeAt(wt);
          if (lt === 46 && (pn = !0, lt = Et.charCodeAt(++wt), wt = Sn(Re, wt, lt), lt = Et.charCodeAt(wt)), (lt === 69 || lt === 101) && (pn = !0, lt = Et.charCodeAt(++wt), (lt === 43 || lt === 45) && (lt = Et.charCodeAt(++wt)), wt = Sn(Re, wt, lt), lt = Et.charCodeAt(wt)), lt === 46 || Dt(lt))
            throw (0, it.syntaxError)(Re, wt, "Invalid number, expected digit but got: ".concat(Wt(lt), "."));
          return new We.Token(pn ? Ye.TokenKind.FLOAT : Ye.TokenKind.INT, xt, wt, yt, Bt, Xe, Et.slice(xt, wt));
        }
        function Sn(Re, xt, Zt) {
          var yt = Re.body, Bt = xt, Xe = Zt;
          if (Xe >= 48 && Xe <= 57) {
            do
              Xe = yt.charCodeAt(++Bt);
            while (Xe >= 48 && Xe <= 57);
            return Bt;
          }
          throw (0, it.syntaxError)(Re, Bt, "Invalid number, expected digit but got: ".concat(Wt(Xe), "."));
        }
        function Ft(Re, xt, Zt, yt, Bt) {
          for (var Xe = Re.body, Et = xt + 1, lt = Et, wt = 0, pn = ""; Et < Xe.length && !isNaN(wt = Xe.charCodeAt(Et)) && wt !== 10 && wt !== 13; ) {
            if (wt === 34)
              return pn += Xe.slice(lt, Et), new We.Token(Ye.TokenKind.STRING, xt, Et + 1, Zt, yt, Bt, pn);
            if (wt < 32 && wt !== 9)
              throw (0, it.syntaxError)(Re, Et, "Invalid character within String: ".concat(Wt(wt), "."));
            if (++Et, wt === 92) {
              switch (pn += Xe.slice(lt, Et - 1), wt = Xe.charCodeAt(Et), wt) {
                case 34:
                  pn += '"';
                  break;
                case 47:
                  pn += "/";
                  break;
                case 92:
                  pn += "\\";
                  break;
                case 98:
                  pn += "\b";
                  break;
                case 102:
                  pn += "\f";
                  break;
                case 110:
                  pn += `
`;
                  break;
                case 114:
                  pn += "\r";
                  break;
                case 116:
                  pn += "	";
                  break;
                case 117: {
                  var ar = et(Xe.charCodeAt(Et + 1), Xe.charCodeAt(Et + 2), Xe.charCodeAt(Et + 3), Xe.charCodeAt(Et + 4));
                  if (ar < 0) {
                    var Rr = Xe.slice(Et + 1, Et + 5);
                    throw (0, it.syntaxError)(Re, Et, "Invalid character escape sequence: \\u".concat(Rr, "."));
                  }
                  pn += String.fromCharCode(ar), Et += 4;
                  break;
                }
                default:
                  throw (0, it.syntaxError)(Re, Et, "Invalid character escape sequence: \\".concat(String.fromCharCode(wt), "."));
              }
              ++Et, lt = Et;
            }
          }
          throw (0, it.syntaxError)(Re, Et, "Unterminated string.");
        }
        function tn(Re, xt, Zt, yt, Bt, Xe) {
          for (var Et = Re.body, lt = xt + 3, wt = lt, pn = 0, ar = ""; lt < Et.length && !isNaN(pn = Et.charCodeAt(lt)); ) {
            if (pn === 34 && Et.charCodeAt(lt + 1) === 34 && Et.charCodeAt(lt + 2) === 34)
              return ar += Et.slice(wt, lt), new We.Token(Ye.TokenKind.BLOCK_STRING, xt, lt + 3, Zt, yt, Bt, (0, Ve.dedentBlockStringValue)(ar));
            if (pn < 32 && pn !== 9 && pn !== 10 && pn !== 13)
              throw (0, it.syntaxError)(Re, lt, "Invalid character within String: ".concat(Wt(pn), "."));
            pn === 10 ? (++lt, ++Xe.line, Xe.lineStart = lt) : pn === 13 ? (Et.charCodeAt(lt + 1) === 10 ? lt += 2 : ++lt, ++Xe.line, Xe.lineStart = lt) : pn === 92 && Et.charCodeAt(lt + 1) === 34 && Et.charCodeAt(lt + 2) === 34 && Et.charCodeAt(lt + 3) === 34 ? (ar += Et.slice(wt, lt) + '"""', lt += 4, wt = lt) : ++lt;
          }
          throw (0, it.syntaxError)(Re, lt, "Unterminated string.");
        }
        function et(Re, xt, Zt, yt) {
          return be(Re) << 12 | be(xt) << 8 | be(Zt) << 4 | be(yt);
        }
        function be(Re) {
          return Re >= 48 && Re <= 57 ? Re - 48 : Re >= 65 && Re <= 70 ? Re - 55 : Re >= 97 && Re <= 102 ? Re - 87 : -1;
        }
        function Me(Re, xt, Zt, yt, Bt) {
          for (var Xe = Re.body, Et = Xe.length, lt = xt + 1, wt = 0; lt !== Et && !isNaN(wt = Xe.charCodeAt(lt)) && (wt === 95 || wt >= 48 && wt <= 57 || wt >= 65 && wt <= 90 || wt >= 97 && wt <= 122); )
            ++lt;
          return new We.Token(Ye.TokenKind.NAME, xt, lt, Zt, yt, Bt, Xe.slice(xt, lt));
        }
        function Dt(Re) {
          return Re === 95 || Re >= 65 && Re <= 90 || Re >= 97 && Re <= 122;
        }
      } }), En = Xt({ "node_modules/graphql/language/parser.js"(Le) {
        cn(), Object.defineProperty(Le, "__esModule", { value: !0 }), Le.parse = gn, Le.parseValue = An, Le.parseType = rn, Le.Parser = void 0;
        var it = cr(), We = Hn(), Ye = gr(), Ve = Or(), Lt = Ar(), Ot = Mr(), Wt = sn();
        function gn(tn, et) {
          var be = new hn(tn, et);
          return be.parseDocument();
        }
        function An(tn, et) {
          var be = new hn(tn, et);
          be.expectToken(Ve.TokenKind.SOF);
          var Me = be.parseValueLiteral(!1);
          return be.expectToken(Ve.TokenKind.EOF), Me;
        }
        function rn(tn, et) {
          var be = new hn(tn, et);
          be.expectToken(Ve.TokenKind.SOF);
          var Me = be.parseTypeReference();
          return be.expectToken(Ve.TokenKind.EOF), Me;
        }
        var hn = function() {
          function tn(be, Me) {
            var Dt = (0, Lt.isSource)(be) ? be : new Lt.Source(be);
            this._lexer = new Wt.Lexer(Dt), this._options = Me;
          }
          var et = tn.prototype;
          return et.parseName = function() {
            var be = this.expectToken(Ve.TokenKind.NAME);
            return { kind: We.Kind.NAME, value: be.value, loc: this.loc(be) };
          }, et.parseDocument = function() {
            var be = this._lexer.token;
            return { kind: We.Kind.DOCUMENT, definitions: this.many(Ve.TokenKind.SOF, this.parseDefinition, Ve.TokenKind.EOF), loc: this.loc(be) };
          }, et.parseDefinition = function() {
            if (this.peek(Ve.TokenKind.NAME))
              switch (this._lexer.token.value) {
                case "query":
                case "mutation":
                case "subscription":
                  return this.parseOperationDefinition();
                case "fragment":
                  return this.parseFragmentDefinition();
                case "schema":
                case "scalar":
                case "type":
                case "interface":
                case "union":
                case "enum":
                case "input":
                case "directive":
                  return this.parseTypeSystemDefinition();
                case "extend":
                  return this.parseTypeSystemExtension();
              }
            else {
              if (this.peek(Ve.TokenKind.BRACE_L))
                return this.parseOperationDefinition();
              if (this.peekDescription())
                return this.parseTypeSystemDefinition();
            }
            throw this.unexpected();
          }, et.parseOperationDefinition = function() {
            var be = this._lexer.token;
            if (this.peek(Ve.TokenKind.BRACE_L))
              return { kind: We.Kind.OPERATION_DEFINITION, operation: "query", name: void 0, variableDefinitions: [], directives: [], selectionSet: this.parseSelectionSet(), loc: this.loc(be) };
            var Me = this.parseOperationType(), Dt;
            return this.peek(Ve.TokenKind.NAME) && (Dt = this.parseName()), { kind: We.Kind.OPERATION_DEFINITION, operation: Me, name: Dt, variableDefinitions: this.parseVariableDefinitions(), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet(), loc: this.loc(be) };
          }, et.parseOperationType = function() {
            var be = this.expectToken(Ve.TokenKind.NAME);
            switch (be.value) {
              case "query":
                return "query";
              case "mutation":
                return "mutation";
              case "subscription":
                return "subscription";
            }
            throw this.unexpected(be);
          }, et.parseVariableDefinitions = function() {
            return this.optionalMany(Ve.TokenKind.PAREN_L, this.parseVariableDefinition, Ve.TokenKind.PAREN_R);
          }, et.parseVariableDefinition = function() {
            var be = this._lexer.token;
            return { kind: We.Kind.VARIABLE_DEFINITION, variable: this.parseVariable(), type: (this.expectToken(Ve.TokenKind.COLON), this.parseTypeReference()), defaultValue: this.expectOptionalToken(Ve.TokenKind.EQUALS) ? this.parseValueLiteral(!0) : void 0, directives: this.parseDirectives(!0), loc: this.loc(be) };
          }, et.parseVariable = function() {
            var be = this._lexer.token;
            return this.expectToken(Ve.TokenKind.DOLLAR), { kind: We.Kind.VARIABLE, name: this.parseName(), loc: this.loc(be) };
          }, et.parseSelectionSet = function() {
            var be = this._lexer.token;
            return { kind: We.Kind.SELECTION_SET, selections: this.many(Ve.TokenKind.BRACE_L, this.parseSelection, Ve.TokenKind.BRACE_R), loc: this.loc(be) };
          }, et.parseSelection = function() {
            return this.peek(Ve.TokenKind.SPREAD) ? this.parseFragment() : this.parseField();
          }, et.parseField = function() {
            var be = this._lexer.token, Me = this.parseName(), Dt, Re;
            return this.expectOptionalToken(Ve.TokenKind.COLON) ? (Dt = Me, Re = this.parseName()) : Re = Me, { kind: We.Kind.FIELD, alias: Dt, name: Re, arguments: this.parseArguments(!1), directives: this.parseDirectives(!1), selectionSet: this.peek(Ve.TokenKind.BRACE_L) ? this.parseSelectionSet() : void 0, loc: this.loc(be) };
          }, et.parseArguments = function(be) {
            var Me = be ? this.parseConstArgument : this.parseArgument;
            return this.optionalMany(Ve.TokenKind.PAREN_L, Me, Ve.TokenKind.PAREN_R);
          }, et.parseArgument = function() {
            var be = this._lexer.token, Me = this.parseName();
            return this.expectToken(Ve.TokenKind.COLON), { kind: We.Kind.ARGUMENT, name: Me, value: this.parseValueLiteral(!1), loc: this.loc(be) };
          }, et.parseConstArgument = function() {
            var be = this._lexer.token;
            return { kind: We.Kind.ARGUMENT, name: this.parseName(), value: (this.expectToken(Ve.TokenKind.COLON), this.parseValueLiteral(!0)), loc: this.loc(be) };
          }, et.parseFragment = function() {
            var be = this._lexer.token;
            this.expectToken(Ve.TokenKind.SPREAD);
            var Me = this.expectOptionalKeyword("on");
            return !Me && this.peek(Ve.TokenKind.NAME) ? { kind: We.Kind.FRAGMENT_SPREAD, name: this.parseFragmentName(), directives: this.parseDirectives(!1), loc: this.loc(be) } : { kind: We.Kind.INLINE_FRAGMENT, typeCondition: Me ? this.parseNamedType() : void 0, directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet(), loc: this.loc(be) };
          }, et.parseFragmentDefinition = function() {
            var be, Me = this._lexer.token;
            return this.expectKeyword("fragment"), ((be = this._options) === null || be === void 0 ? void 0 : be.experimentalFragmentVariables) === !0 ? { kind: We.Kind.FRAGMENT_DEFINITION, name: this.parseFragmentName(), variableDefinitions: this.parseVariableDefinitions(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet(), loc: this.loc(Me) } : { kind: We.Kind.FRAGMENT_DEFINITION, name: this.parseFragmentName(), typeCondition: (this.expectKeyword("on"), this.parseNamedType()), directives: this.parseDirectives(!1), selectionSet: this.parseSelectionSet(), loc: this.loc(Me) };
          }, et.parseFragmentName = function() {
            if (this._lexer.token.value === "on")
              throw this.unexpected();
            return this.parseName();
          }, et.parseValueLiteral = function(be) {
            var Me = this._lexer.token;
            switch (Me.kind) {
              case Ve.TokenKind.BRACKET_L:
                return this.parseList(be);
              case Ve.TokenKind.BRACE_L:
                return this.parseObject(be);
              case Ve.TokenKind.INT:
                return this._lexer.advance(), { kind: We.Kind.INT, value: Me.value, loc: this.loc(Me) };
              case Ve.TokenKind.FLOAT:
                return this._lexer.advance(), { kind: We.Kind.FLOAT, value: Me.value, loc: this.loc(Me) };
              case Ve.TokenKind.STRING:
              case Ve.TokenKind.BLOCK_STRING:
                return this.parseStringLiteral();
              case Ve.TokenKind.NAME:
                switch (this._lexer.advance(), Me.value) {
                  case "true":
                    return { kind: We.Kind.BOOLEAN, value: !0, loc: this.loc(Me) };
                  case "false":
                    return { kind: We.Kind.BOOLEAN, value: !1, loc: this.loc(Me) };
                  case "null":
                    return { kind: We.Kind.NULL, loc: this.loc(Me) };
                  default:
                    return { kind: We.Kind.ENUM, value: Me.value, loc: this.loc(Me) };
                }
              case Ve.TokenKind.DOLLAR:
                if (!be)
                  return this.parseVariable();
                break;
            }
            throw this.unexpected();
          }, et.parseStringLiteral = function() {
            var be = this._lexer.token;
            return this._lexer.advance(), { kind: We.Kind.STRING, value: be.value, block: be.kind === Ve.TokenKind.BLOCK_STRING, loc: this.loc(be) };
          }, et.parseList = function(be) {
            var Me = this, Dt = this._lexer.token, Re = function() {
              return Me.parseValueLiteral(be);
            };
            return { kind: We.Kind.LIST, values: this.any(Ve.TokenKind.BRACKET_L, Re, Ve.TokenKind.BRACKET_R), loc: this.loc(Dt) };
          }, et.parseObject = function(be) {
            var Me = this, Dt = this._lexer.token, Re = function() {
              return Me.parseObjectField(be);
            };
            return { kind: We.Kind.OBJECT, fields: this.any(Ve.TokenKind.BRACE_L, Re, Ve.TokenKind.BRACE_R), loc: this.loc(Dt) };
          }, et.parseObjectField = function(be) {
            var Me = this._lexer.token, Dt = this.parseName();
            return this.expectToken(Ve.TokenKind.COLON), { kind: We.Kind.OBJECT_FIELD, name: Dt, value: this.parseValueLiteral(be), loc: this.loc(Me) };
          }, et.parseDirectives = function(be) {
            for (var Me = []; this.peek(Ve.TokenKind.AT); )
              Me.push(this.parseDirective(be));
            return Me;
          }, et.parseDirective = function(be) {
            var Me = this._lexer.token;
            return this.expectToken(Ve.TokenKind.AT), { kind: We.Kind.DIRECTIVE, name: this.parseName(), arguments: this.parseArguments(be), loc: this.loc(Me) };
          }, et.parseTypeReference = function() {
            var be = this._lexer.token, Me;
            return this.expectOptionalToken(Ve.TokenKind.BRACKET_L) ? (Me = this.parseTypeReference(), this.expectToken(Ve.TokenKind.BRACKET_R), Me = { kind: We.Kind.LIST_TYPE, type: Me, loc: this.loc(be) }) : Me = this.parseNamedType(), this.expectOptionalToken(Ve.TokenKind.BANG) ? { kind: We.Kind.NON_NULL_TYPE, type: Me, loc: this.loc(be) } : Me;
          }, et.parseNamedType = function() {
            var be = this._lexer.token;
            return { kind: We.Kind.NAMED_TYPE, name: this.parseName(), loc: this.loc(be) };
          }, et.parseTypeSystemDefinition = function() {
            var be = this.peekDescription() ? this._lexer.lookahead() : this._lexer.token;
            if (be.kind === Ve.TokenKind.NAME)
              switch (be.value) {
                case "schema":
                  return this.parseSchemaDefinition();
                case "scalar":
                  return this.parseScalarTypeDefinition();
                case "type":
                  return this.parseObjectTypeDefinition();
                case "interface":
                  return this.parseInterfaceTypeDefinition();
                case "union":
                  return this.parseUnionTypeDefinition();
                case "enum":
                  return this.parseEnumTypeDefinition();
                case "input":
                  return this.parseInputObjectTypeDefinition();
                case "directive":
                  return this.parseDirectiveDefinition();
              }
            throw this.unexpected(be);
          }, et.peekDescription = function() {
            return this.peek(Ve.TokenKind.STRING) || this.peek(Ve.TokenKind.BLOCK_STRING);
          }, et.parseDescription = function() {
            if (this.peekDescription())
              return this.parseStringLiteral();
          }, et.parseSchemaDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription();
            this.expectKeyword("schema");
            var Dt = this.parseDirectives(!0), Re = this.many(Ve.TokenKind.BRACE_L, this.parseOperationTypeDefinition, Ve.TokenKind.BRACE_R);
            return { kind: We.Kind.SCHEMA_DEFINITION, description: Me, directives: Dt, operationTypes: Re, loc: this.loc(be) };
          }, et.parseOperationTypeDefinition = function() {
            var be = this._lexer.token, Me = this.parseOperationType();
            this.expectToken(Ve.TokenKind.COLON);
            var Dt = this.parseNamedType();
            return { kind: We.Kind.OPERATION_TYPE_DEFINITION, operation: Me, type: Dt, loc: this.loc(be) };
          }, et.parseScalarTypeDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription();
            this.expectKeyword("scalar");
            var Dt = this.parseName(), Re = this.parseDirectives(!0);
            return { kind: We.Kind.SCALAR_TYPE_DEFINITION, description: Me, name: Dt, directives: Re, loc: this.loc(be) };
          }, et.parseObjectTypeDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription();
            this.expectKeyword("type");
            var Dt = this.parseName(), Re = this.parseImplementsInterfaces(), xt = this.parseDirectives(!0), Zt = this.parseFieldsDefinition();
            return { kind: We.Kind.OBJECT_TYPE_DEFINITION, description: Me, name: Dt, interfaces: Re, directives: xt, fields: Zt, loc: this.loc(be) };
          }, et.parseImplementsInterfaces = function() {
            var be;
            if (!this.expectOptionalKeyword("implements"))
              return [];
            if (((be = this._options) === null || be === void 0 ? void 0 : be.allowLegacySDLImplementsInterfaces) === !0) {
              var Me = [];
              this.expectOptionalToken(Ve.TokenKind.AMP);
              do
                Me.push(this.parseNamedType());
              while (this.expectOptionalToken(Ve.TokenKind.AMP) || this.peek(Ve.TokenKind.NAME));
              return Me;
            }
            return this.delimitedMany(Ve.TokenKind.AMP, this.parseNamedType);
          }, et.parseFieldsDefinition = function() {
            var be;
            return ((be = this._options) === null || be === void 0 ? void 0 : be.allowLegacySDLEmptyFields) === !0 && this.peek(Ve.TokenKind.BRACE_L) && this._lexer.lookahead().kind === Ve.TokenKind.BRACE_R ? (this._lexer.advance(), this._lexer.advance(), []) : this.optionalMany(Ve.TokenKind.BRACE_L, this.parseFieldDefinition, Ve.TokenKind.BRACE_R);
          }, et.parseFieldDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription(), Dt = this.parseName(), Re = this.parseArgumentDefs();
            this.expectToken(Ve.TokenKind.COLON);
            var xt = this.parseTypeReference(), Zt = this.parseDirectives(!0);
            return { kind: We.Kind.FIELD_DEFINITION, description: Me, name: Dt, arguments: Re, type: xt, directives: Zt, loc: this.loc(be) };
          }, et.parseArgumentDefs = function() {
            return this.optionalMany(Ve.TokenKind.PAREN_L, this.parseInputValueDef, Ve.TokenKind.PAREN_R);
          }, et.parseInputValueDef = function() {
            var be = this._lexer.token, Me = this.parseDescription(), Dt = this.parseName();
            this.expectToken(Ve.TokenKind.COLON);
            var Re = this.parseTypeReference(), xt;
            this.expectOptionalToken(Ve.TokenKind.EQUALS) && (xt = this.parseValueLiteral(!0));
            var Zt = this.parseDirectives(!0);
            return { kind: We.Kind.INPUT_VALUE_DEFINITION, description: Me, name: Dt, type: Re, defaultValue: xt, directives: Zt, loc: this.loc(be) };
          }, et.parseInterfaceTypeDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription();
            this.expectKeyword("interface");
            var Dt = this.parseName(), Re = this.parseImplementsInterfaces(), xt = this.parseDirectives(!0), Zt = this.parseFieldsDefinition();
            return { kind: We.Kind.INTERFACE_TYPE_DEFINITION, description: Me, name: Dt, interfaces: Re, directives: xt, fields: Zt, loc: this.loc(be) };
          }, et.parseUnionTypeDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription();
            this.expectKeyword("union");
            var Dt = this.parseName(), Re = this.parseDirectives(!0), xt = this.parseUnionMemberTypes();
            return { kind: We.Kind.UNION_TYPE_DEFINITION, description: Me, name: Dt, directives: Re, types: xt, loc: this.loc(be) };
          }, et.parseUnionMemberTypes = function() {
            return this.expectOptionalToken(Ve.TokenKind.EQUALS) ? this.delimitedMany(Ve.TokenKind.PIPE, this.parseNamedType) : [];
          }, et.parseEnumTypeDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription();
            this.expectKeyword("enum");
            var Dt = this.parseName(), Re = this.parseDirectives(!0), xt = this.parseEnumValuesDefinition();
            return { kind: We.Kind.ENUM_TYPE_DEFINITION, description: Me, name: Dt, directives: Re, values: xt, loc: this.loc(be) };
          }, et.parseEnumValuesDefinition = function() {
            return this.optionalMany(Ve.TokenKind.BRACE_L, this.parseEnumValueDefinition, Ve.TokenKind.BRACE_R);
          }, et.parseEnumValueDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription(), Dt = this.parseName(), Re = this.parseDirectives(!0);
            return { kind: We.Kind.ENUM_VALUE_DEFINITION, description: Me, name: Dt, directives: Re, loc: this.loc(be) };
          }, et.parseInputObjectTypeDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription();
            this.expectKeyword("input");
            var Dt = this.parseName(), Re = this.parseDirectives(!0), xt = this.parseInputFieldsDefinition();
            return { kind: We.Kind.INPUT_OBJECT_TYPE_DEFINITION, description: Me, name: Dt, directives: Re, fields: xt, loc: this.loc(be) };
          }, et.parseInputFieldsDefinition = function() {
            return this.optionalMany(Ve.TokenKind.BRACE_L, this.parseInputValueDef, Ve.TokenKind.BRACE_R);
          }, et.parseTypeSystemExtension = function() {
            var be = this._lexer.lookahead();
            if (be.kind === Ve.TokenKind.NAME)
              switch (be.value) {
                case "schema":
                  return this.parseSchemaExtension();
                case "scalar":
                  return this.parseScalarTypeExtension();
                case "type":
                  return this.parseObjectTypeExtension();
                case "interface":
                  return this.parseInterfaceTypeExtension();
                case "union":
                  return this.parseUnionTypeExtension();
                case "enum":
                  return this.parseEnumTypeExtension();
                case "input":
                  return this.parseInputObjectTypeExtension();
              }
            throw this.unexpected(be);
          }, et.parseSchemaExtension = function() {
            var be = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("schema");
            var Me = this.parseDirectives(!0), Dt = this.optionalMany(Ve.TokenKind.BRACE_L, this.parseOperationTypeDefinition, Ve.TokenKind.BRACE_R);
            if (Me.length === 0 && Dt.length === 0)
              throw this.unexpected();
            return { kind: We.Kind.SCHEMA_EXTENSION, directives: Me, operationTypes: Dt, loc: this.loc(be) };
          }, et.parseScalarTypeExtension = function() {
            var be = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("scalar");
            var Me = this.parseName(), Dt = this.parseDirectives(!0);
            if (Dt.length === 0)
              throw this.unexpected();
            return { kind: We.Kind.SCALAR_TYPE_EXTENSION, name: Me, directives: Dt, loc: this.loc(be) };
          }, et.parseObjectTypeExtension = function() {
            var be = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("type");
            var Me = this.parseName(), Dt = this.parseImplementsInterfaces(), Re = this.parseDirectives(!0), xt = this.parseFieldsDefinition();
            if (Dt.length === 0 && Re.length === 0 && xt.length === 0)
              throw this.unexpected();
            return { kind: We.Kind.OBJECT_TYPE_EXTENSION, name: Me, interfaces: Dt, directives: Re, fields: xt, loc: this.loc(be) };
          }, et.parseInterfaceTypeExtension = function() {
            var be = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("interface");
            var Me = this.parseName(), Dt = this.parseImplementsInterfaces(), Re = this.parseDirectives(!0), xt = this.parseFieldsDefinition();
            if (Dt.length === 0 && Re.length === 0 && xt.length === 0)
              throw this.unexpected();
            return { kind: We.Kind.INTERFACE_TYPE_EXTENSION, name: Me, interfaces: Dt, directives: Re, fields: xt, loc: this.loc(be) };
          }, et.parseUnionTypeExtension = function() {
            var be = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("union");
            var Me = this.parseName(), Dt = this.parseDirectives(!0), Re = this.parseUnionMemberTypes();
            if (Dt.length === 0 && Re.length === 0)
              throw this.unexpected();
            return { kind: We.Kind.UNION_TYPE_EXTENSION, name: Me, directives: Dt, types: Re, loc: this.loc(be) };
          }, et.parseEnumTypeExtension = function() {
            var be = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("enum");
            var Me = this.parseName(), Dt = this.parseDirectives(!0), Re = this.parseEnumValuesDefinition();
            if (Dt.length === 0 && Re.length === 0)
              throw this.unexpected();
            return { kind: We.Kind.ENUM_TYPE_EXTENSION, name: Me, directives: Dt, values: Re, loc: this.loc(be) };
          }, et.parseInputObjectTypeExtension = function() {
            var be = this._lexer.token;
            this.expectKeyword("extend"), this.expectKeyword("input");
            var Me = this.parseName(), Dt = this.parseDirectives(!0), Re = this.parseInputFieldsDefinition();
            if (Dt.length === 0 && Re.length === 0)
              throw this.unexpected();
            return { kind: We.Kind.INPUT_OBJECT_TYPE_EXTENSION, name: Me, directives: Dt, fields: Re, loc: this.loc(be) };
          }, et.parseDirectiveDefinition = function() {
            var be = this._lexer.token, Me = this.parseDescription();
            this.expectKeyword("directive"), this.expectToken(Ve.TokenKind.AT);
            var Dt = this.parseName(), Re = this.parseArgumentDefs(), xt = this.expectOptionalKeyword("repeatable");
            this.expectKeyword("on");
            var Zt = this.parseDirectiveLocations();
            return { kind: We.Kind.DIRECTIVE_DEFINITION, description: Me, name: Dt, arguments: Re, repeatable: xt, locations: Zt, loc: this.loc(be) };
          }, et.parseDirectiveLocations = function() {
            return this.delimitedMany(Ve.TokenKind.PIPE, this.parseDirectiveLocation);
          }, et.parseDirectiveLocation = function() {
            var be = this._lexer.token, Me = this.parseName();
            if (Ot.DirectiveLocation[Me.value] !== void 0)
              return Me;
            throw this.unexpected(be);
          }, et.loc = function(be) {
            var Me;
            if (((Me = this._options) === null || Me === void 0 ? void 0 : Me.noLocation) !== !0)
              return new Ye.Location(be, this._lexer.lastToken, this._lexer.source);
          }, et.peek = function(be) {
            return this._lexer.token.kind === be;
          }, et.expectToken = function(be) {
            var Me = this._lexer.token;
            if (Me.kind === be)
              return this._lexer.advance(), Me;
            throw (0, it.syntaxError)(this._lexer.source, Me.start, "Expected ".concat(Ft(be), ", found ").concat(Sn(Me), "."));
          }, et.expectOptionalToken = function(be) {
            var Me = this._lexer.token;
            if (Me.kind === be)
              return this._lexer.advance(), Me;
          }, et.expectKeyword = function(be) {
            var Me = this._lexer.token;
            if (Me.kind === Ve.TokenKind.NAME && Me.value === be)
              this._lexer.advance();
            else
              throw (0, it.syntaxError)(this._lexer.source, Me.start, 'Expected "'.concat(be, '", found ').concat(Sn(Me), "."));
          }, et.expectOptionalKeyword = function(be) {
            var Me = this._lexer.token;
            return Me.kind === Ve.TokenKind.NAME && Me.value === be ? (this._lexer.advance(), !0) : !1;
          }, et.unexpected = function(be) {
            var Me = be ?? this._lexer.token;
            return (0, it.syntaxError)(this._lexer.source, Me.start, "Unexpected ".concat(Sn(Me), "."));
          }, et.any = function(be, Me, Dt) {
            this.expectToken(be);
            for (var Re = []; !this.expectOptionalToken(Dt); )
              Re.push(Me.call(this));
            return Re;
          }, et.optionalMany = function(be, Me, Dt) {
            if (this.expectOptionalToken(be)) {
              var Re = [];
              do
                Re.push(Me.call(this));
              while (!this.expectOptionalToken(Dt));
              return Re;
            }
            return [];
          }, et.many = function(be, Me, Dt) {
            this.expectToken(be);
            var Re = [];
            do
              Re.push(Me.call(this));
            while (!this.expectOptionalToken(Dt));
            return Re;
          }, et.delimitedMany = function(be, Me) {
            this.expectOptionalToken(be);
            var Dt = [];
            do
              Dt.push(Me.call(this));
            while (this.expectOptionalToken(be));
            return Dt;
          }, tn;
        }();
        Le.Parser = hn;
        function Sn(tn) {
          var et = tn.value;
          return Ft(tn.kind) + (et != null ? ' "'.concat(et, '"') : "");
        }
        function Ft(tn) {
          return (0, Wt.isPunctuatorTokenKind)(tn) ? '"'.concat(tn, '"') : tn;
        }
      } });
      cn();
      var Je = Fn(), At = Rn(), { hasPragma: de } = Un(), { locStart: Qe, locEnd: $t } = Cr();
      function Dn(Le) {
        let it = [], { startToken: We } = Le.loc, { next: Ye } = We;
        for (; Ye.kind !== "<EOF>"; )
          Ye.kind === "Comment" && (Object.assign(Ye, { column: Ye.column - 1 }), it.push(Ye)), Ye = Ye.next;
        return it;
      }
      function Ht(Le) {
        if (Le && typeof Le == "object") {
          delete Le.startToken, delete Le.endToken, delete Le.prev, delete Le.next;
          for (let it in Le)
            Ht(Le[it]);
        }
        return Le;
      }
      var kn = { allowLegacySDLImplementsInterfaces: !1, experimentalFragmentVariables: !0 };
      function Nn(Le) {
        let { GraphQLError: it } = Gn();
        if (Le instanceof it) {
          let { message: We, locations: [Ye] } = Le;
          return Je(We, { start: Ye });
        }
        return Le;
      }
      function Pn(Le) {
        let { parse: it } = En(), { result: We, error: Ye } = At(() => it(Le, Object.assign({}, kn)), () => it(Le, Object.assign(Object.assign({}, kn), {}, { allowLegacySDLImplementsInterfaces: !0 })));
        if (!We)
          throw Nn(Ye);
        return We.comments = Dn(We), Ht(We), We;
      }
      _n.exports = { parsers: { graphql: { parse: Pn, astFormat: "graphql", hasPragma: de, locStart: Qe, locEnd: $t } } };
    });
    return Mn();
  });
})(Ep);
var Jp = Ep.exports;
const fp = /* @__PURE__ */ Kc(Jp);
class Vc {
  constructor(wn = {}) {
    Mc(this, "checkboxObj", {});
    Mc(this, "currentRelation", null);
    this.checkboxObj = wn;
  }
  setCurrentRelation(wn) {
    this.currentRelation = wn;
  }
  toggleProperty(wn, pe, Mn = []) {
    let Cn = this.checkboxObj;
    for (const _n of Mn)
      (!Cn[_n] || typeof Cn[_n] != "object") && (Cn[_n] = {}), Cn = Cn[_n];
    Cn[pe] ? delete Cn[pe] : Cn[pe] = !0;
  }
  isSelected(wn, pe) {
    var Mn;
    if (((Mn = this.checkboxObj[wn]) == null ? void 0 : Mn[pe]) === !0)
      return !0;
  }
  getCheckboxObj() {
    return this.checkboxObj;
  }
}
function qp() {
  const [Kt, wn] = _r.useState(""), [pe, Mn] = _r.useState(null), [Cn, _n] = _r.useState(null), [Yn, zn] = _r.useState(null), [Xt, cn] = _r.useState(null), [Fn, Rn] = _r.useState(""), [Un, Cr] = _r.useState(null), [Fr, On] = _r.useState("");
  _r.useState({});
  const [xn, Wn] = _r.useState(0), [Gn, cr] = _r.useState(new Vc()), [Hn, wr] = _r.useState([]), [mr, Dr] = _r.useState(!1);
  _r.useState([]);
  const [gr, Or] = _r.useState([]);
  _r.useEffect(() => {
    async function sn() {
      try {
        let At = "https://dam4-training.sitecoresandbox.cloud/api/entitydefinitions?viewMode=Extended&loadPermissions=False&includeConditionalMembers=False", de = [];
        for (; At; ) {
          const Qe = await fetch(At), { items: $t, next: Dn } = await Qe.json();
          de = [...de, ...$t], At = (Dn == null ? void 0 : Dn.href) ?? null;
        }
        Mn(de), Cr(de == null ? void 0 : de.map((Qe) => Qe.name));
      } catch (Je) {
        console.error(Je);
      }
    }
    async function En() {
      try {
        if (Xt) {
          const At = await (await fetch(
            `https://dam4-training.sitecoresandbox.cloud/api/entitydefinitions/${Xt}`
          )).json();
          _n(At);
        }
      } catch (Je) {
        console.error(Je);
      }
    }
    En(), sn();
  }, [Xt]), _r.useEffect(() => {
    xr();
  }, [Fn, Gn, xn]);
  const Pr = (sn) => {
    const En = sn.target.value;
    Rn(En);
  }, Jr = (sn) => {
    const En = new Vc(Gn.getCheckboxObj()), Je = xn === 0 ? Fn : Yn;
    En.toggleProperty(Je, sn, Hn), cr(En);
  };
  function xr() {
    let sn = !1;
    const En = () => {
      Cn.member_groups.map((de) => {
        de.members.map((Qe) => {
          Qe.name === Yn && Qe.cardinality === "ManyToMany" && (sn = !0), Qe.name === Yn && Qe.cardinality === "OneToMany" && (sn = !1);
        });
      });
    }, Je = Gn.getCheckboxObj();
    (() => {
      const de = (Ht) => {
        Ht.replace(/\./g, "_");
        try {
          return dp.format(Ht, {
            parser: "graphql",
            plugins: [fp]
          });
        } catch (kn) {
          return console.error("Failed to format query:", kn), Ht;
        }
      }, $t = `
        query allRIC_Article {
          results {
            ${Object.keys(Je).map((Ht) => {
        if (console.clear(), console.log("Object.keys(checkboxObj)", Object.keys(Je)), typeof Je[Ht] == "boolean")
          return Object.keys(Je).map((kn) => {
            typeof Je[kn] == "boolean" && Or([...gr, kn]);
          }), Ht;
        {
          Or([...gr, Ht]);
          const Pn = Object.keys(Je[Ht]).map((Le) => `${Le}`).join(`
`);
          return console.log("key", Ht), En(), sn === !0 ? `${Ht} {
                results {
                  ${Pn}
                }
              }` : (sn = !1, Pn ? `${Ht} {
              ${Pn}
            }` : `${Ht}`);
        }
      }).join(`
`).replace(/\./g, "_")}
          }
        }`, Dn = de($t);
      wn(Dn);
    })();
  }
  function Ar() {
    const sn = (Je) => {
      try {
        return dp.format(Je, {
          parser: "graphql",
          // Use the 'babel' parser for JavaScript code
          plugins: [fp]
          // Add any required prettier plugins
        });
      } catch (At) {
        return console.error("Failed to format query:", At), Je;
      }
    }, En = sn(Fr);
    On(En), console.log("Generated query", sn(Fr));
  }
  const Mr = (sn) => {
    const { name: En } = sn.target, Je = new Vc(Gn.getCheckboxObj()), At = xn === 0 ? Fn : Yn;
    Je.toggleProperty(At, En, Hn), cr(Je);
  }, Sr = pe == null ? void 0 : pe.find((sn) => sn.name === Fn);
  return /* @__PURE__ */ Eu($p, { children: [
    /* @__PURE__ */ Eu("header", { children: [
      Fn ? /* @__PURE__ */ Eu("h1", { children: [
        "Schema: ",
        Fn
      ] }) : /* @__PURE__ */ lr("h1", { children: "Choose Schema:" }),
      /* @__PURE__ */ Eu("select", { onChange: Pr, children: [
        /* @__PURE__ */ lr("option", { children: "Select a schema" }),
        pe == null ? void 0 : pe.map((sn) => /* @__PURE__ */ lr("option", { value: sn.name, children: sn == null ? void 0 : sn.name }, `option-${sn.name}`))
      ] }),
      /* @__PURE__ */ Eu("div", { className: "buttons-section", children: [
        /* @__PURE__ */ lr(
          "button",
          {
            onClick: () => {
              xr(), Ar();
            },
            children: "Generate Query"
          }
        ),
        /* @__PURE__ */ lr("button", { onClick: () => Ar(), children: "Prettier" }),
        /* @__PURE__ */ lr("button", { children: "Validate mapping" }),
        /* @__PURE__ */ lr("button", { children: "Validate query" })
      ] })
    ] }),
    /* @__PURE__ */ Eu(
      "div",
      {
        className: "div",
        style: {
          border: "1px solid #0d6efd",
          borderRadius: 5,
          display: "flex",
          marginTop: 20,
          marginBottom: 20,
          padding: 0,
          width: "100%",
          height: "100%",
          minHeight: 400
        },
        children: [
          /* @__PURE__ */ Eu(
            "div",
            {
              className: "",
              style: {
                height: "100%",
                width: "100%",
                overflow: Fn ? "auto" : "hidden",
                display: "flex",
                flexDirection: "row",
                paddingTop: 10,
                paddingBottom: 10
              },
              children: [
                !Fn && /* @__PURE__ */ Eu(
                  "h4",
                  {
                    style: {
                      textAlign: "center",
                      fontSize: 20,
                      opacity: 0.2,
                      position: "absolute",
                      top: "42%",
                      left: "50%",
                      transform: "translate(-50%, -50%)"
                    },
                    children: [
                      " ",
                      "Choose Schema First"
                    ]
                  }
                ),
                /* @__PURE__ */ lr(
                  "div",
                  {
                    style: {
                      maxHeight: 400,
                      opacity: xn === 0 ? 1 : 0.4,
                      pointerEvents: xn === 0 ? "all" : "none"
                    },
                    children: Sr == null ? void 0 : Sr.member_groups.map((sn, En) => /* @__PURE__ */ lr("div", { children: sn.members.map((Je, At) => /* @__PURE__ */ lr("ul", { children: /* @__PURE__ */ Eu("li", { className: "triple-col", children: [
                      /* @__PURE__ */ Eu("span", { style: { display: "flex", gap: 5 }, children: [
                        /* @__PURE__ */ lr(
                          "input",
                          {
                            type: "checkbox",
                            name: Je.name,
                            checked: Gn.isSelected(Fn, Je.name),
                            onChange: Mr
                          },
                          `input-${Je.name}-${At}`
                        ),
                        Je.name
                      ] }),
                      /* @__PURE__ */ lr("span", { children: sn.name }),
                      /* @__PURE__ */ lr(
                        "span",
                        {
                          onClick: () => {
                            Je.type === "Relation" && (Wn(1), zn(Je.name), cn(
                              Je.associated_entitydefinition.href.split("/").pop()
                            ), wr([...Hn, Je.name]), Gn.setCurrentRelation(Je.name));
                          },
                          style: Je.type === "Relation" ? { cursor: "pointer", fontWeight: "bold" } : {},
                          children: Je.type
                        }
                      )
                    ] }, `member-${Je.name}-${At}`) }, `member-${Je.name}-${At}`)) }, `group-${En}`))
                  }
                )
              ]
            }
          ),
          Fn && /* @__PURE__ */ lr(
            "button",
            {
              onClick: () => {
                Wn(0), wr(Hn.slice(0, -1)), Dr(!0);
              },
              disabled: xn === 0,
              children: "Back"
            }
          ),
          /* @__PURE__ */ Eu("div", { style: { width: "50%", paddingTop: 10, paddingBottom: 10 }, children: [
            !Cn && /* @__PURE__ */ lr(
              "span",
              {
                style: { marginLeft: 10, display: Fn ? "block" : "none", opacity: 0.4 },
                children: "Click on property relation"
              }
            ),
            Cn && xn === 1 && /* @__PURE__ */ lr(
              "ul",
              {
                style: {
                  display: "flex",
                  flexDirection: "column",
                  padding: 0
                },
                children: Cn.member_groups.map((sn, En) => /* @__PURE__ */ lr("div", { children: sn.members.map((Je, At) => /* @__PURE__ */ lr("ul", { children: Je.type !== "Relation" && /* @__PURE__ */ Eu("li", { children: [
                  /* @__PURE__ */ lr(
                    "input",
                    {
                      type: "checkbox",
                      checked: Gn.isSelected(Yn, Je.name),
                      onChange: () => Jr(Je.name)
                    },
                    `input-${Je.name}-${At}`
                  ),
                  Je.name,
                  " | ",
                  sn.name,
                  " |",
                  /* @__PURE__ */ lr(
                    "span",
                    {
                      onClick: () => {
                        Je.type === "Relation" && (Wn(1), zn(Je.name), cn(
                          Je.associated_entitydefinition.href.split("/").pop()
                        ), wr([...Hn, Je.name]), Gn.setCurrentRelation(Je.name));
                      },
                      children: Je.type
                    }
                  )
                ] }, `member-${Je.name}-${At}`) }, `member-${Je.name}-${At}`)) }, `group-${En}`))
              }
            )
          ] })
        ]
      },
      "div"
    ),
    /* @__PURE__ */ Eu(
      "div",
      {
        style: {
          position: "relative"
        },
        children: [
          /* @__PURE__ */ lr(
            "textarea",
            {
              className: "form-control",
              value: Kt,
              onChange: () => xr(),
              spellCheck: "false"
            }
          ),
          /* @__PURE__ */ lr(
            "button",
            {
              style: {
                position: "absolute",
                right: 30,
                bottom: 30,
                fontSize: 12
              },
              onClick: () => {
                navigator.clipboard.writeText(Kt);
              },
              children: "Copy Query"
            }
          )
        ]
      }
    )
  ] });
}
function Xp(Kt) {
  return pp.render(/* @__PURE__ */ lr(qp, {}), Kt), {
    unmount() {
      pp.unmountComponentAtNode(Kt);
    }
  };
}
export {
  Xp as default
};
