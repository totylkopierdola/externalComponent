function Tf(N) {
  return N && N.__esModule && Object.prototype.hasOwnProperty.call(N, "default") ? N.default : N;
}
var Pa = { exports: {} }, gr = {}, za = { exports: {} }, D = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ka;
function Lf() {
  if (ka)
    return D;
  ka = 1;
  var N = Symbol.for("react.element"), te = Symbol.for("react.portal"), m = Symbol.for("react.fragment"), Re = Symbol.for("react.strict_mode"), K = Symbol.for("react.profiler"), _e = Symbol.for("react.provider"), oe = Symbol.for("react.context"), ce = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), me = Symbol.for("react.memo"), he = Symbol.for("react.lazy"), q = Symbol.iterator;
  function Y(a) {
    return a === null || typeof a != "object" ? null : (a = q && a[q] || a["@@iterator"], typeof a == "function" ? a : null);
  }
  var Oe = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Me = Object.assign, G = {};
  function Q(a, v, P) {
    this.props = a, this.context = v, this.refs = G, this.updater = P || Oe;
  }
  Q.prototype.isReactComponent = {}, Q.prototype.setState = function(a, v) {
    if (typeof a != "object" && typeof a != "function" && a != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, a, v, "setState");
  }, Q.prototype.forceUpdate = function(a) {
    this.updater.enqueueForceUpdate(this, a, "forceUpdate");
  };
  function rn() {
  }
  rn.prototype = Q.prototype;
  function Xe(a, v, P) {
    this.props = a, this.context = v, this.refs = G, this.updater = P || Oe;
  }
  var De = Xe.prototype = new rn();
  De.constructor = Xe, Me(De, Q.prototype), De.isPureReactComponent = !0;
  var z = Array.isArray, I = Object.prototype.hasOwnProperty, j = { current: null }, V = { key: !0, ref: !0, __self: !0, __source: !0 };
  function ue(a, v, P) {
    var F, M = {}, Z = null, $ = null;
    if (v != null)
      for (F in v.ref !== void 0 && ($ = v.ref), v.key !== void 0 && (Z = "" + v.key), v)
        I.call(v, F) && !V.hasOwnProperty(F) && (M[F] = v[F]);
    var X = arguments.length - 2;
    if (X === 1)
      M.children = P;
    else if (1 < X) {
      for (var H = Array(X), je = 0; je < X; je++)
        H[je] = arguments[je + 2];
      M.children = H;
    }
    if (a && a.defaultProps)
      for (F in X = a.defaultProps, X)
        M[F] === void 0 && (M[F] = X[F]);
    return { $$typeof: N, type: a, key: Z, ref: $, props: M, _owner: j.current };
  }
  function ze(a, v) {
    return { $$typeof: N, type: a.type, key: v, ref: a.ref, props: a.props, _owner: a._owner };
  }
  function Ie(a) {
    return typeof a == "object" && a !== null && a.$$typeof === N;
  }
  function ln(a) {
    var v = { "=": "=0", ":": "=2" };
    return "$" + a.replace(/[=:]/g, function(P) {
      return v[P];
    });
  }
  var on = /\/+/g;
  function Qe(a, v) {
    return typeof a == "object" && a !== null && a.key != null ? ln("" + a.key) : v.toString(36);
  }
  function un(a, v, P, F, M) {
    var Z = typeof a;
    (Z === "undefined" || Z === "boolean") && (a = null);
    var $ = !1;
    if (a === null)
      $ = !0;
    else
      switch (Z) {
        case "string":
        case "number":
          $ = !0;
          break;
        case "object":
          switch (a.$$typeof) {
            case N:
            case te:
              $ = !0;
          }
      }
    if ($)
      return $ = a, M = M($), a = F === "" ? "." + Qe($, 0) : F, z(M) ? (P = "", a != null && (P = a.replace(on, "$&/") + "/"), un(M, v, P, "", function(je) {
        return je;
      })) : M != null && (Ie(M) && (M = ze(M, P + (!M.key || $ && $.key === M.key ? "" : ("" + M.key).replace(on, "$&/") + "/") + a)), v.push(M)), 1;
    if ($ = 0, F = F === "" ? "." : F + ":", z(a))
      for (var X = 0; X < a.length; X++) {
        Z = a[X];
        var H = F + Qe(Z, X);
        $ += un(Z, v, P, H, M);
      }
    else if (H = Y(a), typeof H == "function")
      for (a = H.call(a), X = 0; !(Z = a.next()).done; )
        Z = Z.value, H = F + Qe(Z, X++), $ += un(Z, v, P, H, M);
    else if (Z === "object")
      throw v = String(a), Error("Objects are not valid as a React child (found: " + (v === "[object Object]" ? "object with keys {" + Object.keys(a).join(", ") + "}" : v) + "). If you meant to render a collection of children, use an array instead.");
    return $;
  }
  function hn(a, v, P) {
    if (a == null)
      return a;
    var F = [], M = 0;
    return un(a, F, "", "", function(Z) {
      return v.call(P, Z, M++);
    }), F;
  }
  function Fe(a) {
    if (a._status === -1) {
      var v = a._result;
      v = v(), v.then(function(P) {
        (a._status === 0 || a._status === -1) && (a._status = 1, a._result = P);
      }, function(P) {
        (a._status === 0 || a._status === -1) && (a._status = 2, a._result = P);
      }), a._status === -1 && (a._status = 0, a._result = v);
    }
    if (a._status === 1)
      return a._result.default;
    throw a._result;
  }
  var ie = { current: null }, S = { transition: null }, R = { ReactCurrentDispatcher: ie, ReactCurrentBatchConfig: S, ReactCurrentOwner: j };
  return D.Children = { map: hn, forEach: function(a, v, P) {
    hn(a, function() {
      v.apply(this, arguments);
    }, P);
  }, count: function(a) {
    var v = 0;
    return hn(a, function() {
      v++;
    }), v;
  }, toArray: function(a) {
    return hn(a, function(v) {
      return v;
    }) || [];
  }, only: function(a) {
    if (!Ie(a))
      throw Error("React.Children.only expected to receive a single React element child.");
    return a;
  } }, D.Component = Q, D.Fragment = m, D.Profiler = K, D.PureComponent = Xe, D.StrictMode = Re, D.Suspense = B, D.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = R, D.cloneElement = function(a, v, P) {
    if (a == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + a + ".");
    var F = Me({}, a.props), M = a.key, Z = a.ref, $ = a._owner;
    if (v != null) {
      if (v.ref !== void 0 && (Z = v.ref, $ = j.current), v.key !== void 0 && (M = "" + v.key), a.type && a.type.defaultProps)
        var X = a.type.defaultProps;
      for (H in v)
        I.call(v, H) && !V.hasOwnProperty(H) && (F[H] = v[H] === void 0 && X !== void 0 ? X[H] : v[H]);
    }
    var H = arguments.length - 2;
    if (H === 1)
      F.children = P;
    else if (1 < H) {
      X = Array(H);
      for (var je = 0; je < H; je++)
        X[je] = arguments[je + 2];
      F.children = X;
    }
    return { $$typeof: N, type: a.type, key: M, ref: Z, props: F, _owner: $ };
  }, D.createContext = function(a) {
    return a = { $$typeof: oe, _currentValue: a, _currentValue2: a, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, a.Provider = { $$typeof: _e, _context: a }, a.Consumer = a;
  }, D.createElement = ue, D.createFactory = function(a) {
    var v = ue.bind(null, a);
    return v.type = a, v;
  }, D.createRef = function() {
    return { current: null };
  }, D.forwardRef = function(a) {
    return { $$typeof: ce, render: a };
  }, D.isValidElement = Ie, D.lazy = function(a) {
    return { $$typeof: he, _payload: { _status: -1, _result: a }, _init: Fe };
  }, D.memo = function(a, v) {
    return { $$typeof: me, type: a, compare: v === void 0 ? null : v };
  }, D.startTransition = function(a) {
    var v = S.transition;
    S.transition = {};
    try {
      a();
    } finally {
      S.transition = v;
    }
  }, D.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, D.useCallback = function(a, v) {
    return ie.current.useCallback(a, v);
  }, D.useContext = function(a) {
    return ie.current.useContext(a);
  }, D.useDebugValue = function() {
  }, D.useDeferredValue = function(a) {
    return ie.current.useDeferredValue(a);
  }, D.useEffect = function(a, v) {
    return ie.current.useEffect(a, v);
  }, D.useId = function() {
    return ie.current.useId();
  }, D.useImperativeHandle = function(a, v, P) {
    return ie.current.useImperativeHandle(a, v, P);
  }, D.useInsertionEffect = function(a, v) {
    return ie.current.useInsertionEffect(a, v);
  }, D.useLayoutEffect = function(a, v) {
    return ie.current.useLayoutEffect(a, v);
  }, D.useMemo = function(a, v) {
    return ie.current.useMemo(a, v);
  }, D.useReducer = function(a, v, P) {
    return ie.current.useReducer(a, v, P);
  }, D.useRef = function(a) {
    return ie.current.useRef(a);
  }, D.useState = function(a) {
    return ie.current.useState(a);
  }, D.useSyncExternalStore = function(a, v, P) {
    return ie.current.useSyncExternalStore(a, v, P);
  }, D.useTransition = function() {
    return ie.current.useTransition();
  }, D.version = "18.2.0", D;
}
za.exports = Lf();
var Tn = za.exports;
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Ea;
function Rf() {
  if (Ea)
    return gr;
  Ea = 1;
  var N = Tn, te = Symbol.for("react.element"), m = Symbol.for("react.fragment"), Re = Object.prototype.hasOwnProperty, K = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, _e = { key: !0, ref: !0, __self: !0, __source: !0 };
  function oe(ce, B, me) {
    var he, q = {}, Y = null, Oe = null;
    me !== void 0 && (Y = "" + me), B.key !== void 0 && (Y = "" + B.key), B.ref !== void 0 && (Oe = B.ref);
    for (he in B)
      Re.call(B, he) && !_e.hasOwnProperty(he) && (q[he] = B[he]);
    if (ce && ce.defaultProps)
      for (he in B = ce.defaultProps, B)
        q[he] === void 0 && (q[he] = B[he]);
    return { $$typeof: te, type: ce, key: Y, ref: Oe, props: q, _owner: K.current };
  }
  return gr.Fragment = m, gr.jsx = oe, gr.jsxs = oe, gr;
}
Pa.exports = Rf();
var xu = Pa.exports;
const Of = xu.Fragment, ae = xu.jsx, tn = xu.jsxs;
var Ta = { exports: {} }, He = {}, _u = { exports: {} }, Cu = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _a;
function Mf() {
  return _a || (_a = 1, function(N) {
    function te(S, R) {
      var a = S.length;
      S.push(R);
      e:
        for (; 0 < a; ) {
          var v = a - 1 >>> 1, P = S[v];
          if (0 < K(P, R))
            S[v] = R, S[a] = P, a = v;
          else
            break e;
        }
    }
    function m(S) {
      return S.length === 0 ? null : S[0];
    }
    function Re(S) {
      if (S.length === 0)
        return null;
      var R = S[0], a = S.pop();
      if (a !== R) {
        S[0] = a;
        e:
          for (var v = 0, P = S.length, F = P >>> 1; v < F; ) {
            var M = 2 * (v + 1) - 1, Z = S[M], $ = M + 1, X = S[$];
            if (0 > K(Z, a))
              $ < P && 0 > K(X, Z) ? (S[v] = X, S[$] = a, v = $) : (S[v] = Z, S[M] = a, v = M);
            else if ($ < P && 0 > K(X, a))
              S[v] = X, S[$] = a, v = $;
            else
              break e;
          }
      }
      return R;
    }
    function K(S, R) {
      var a = S.sortIndex - R.sortIndex;
      return a !== 0 ? a : S.id - R.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var _e = performance;
      N.unstable_now = function() {
        return _e.now();
      };
    } else {
      var oe = Date, ce = oe.now();
      N.unstable_now = function() {
        return oe.now() - ce;
      };
    }
    var B = [], me = [], he = 1, q = null, Y = 3, Oe = !1, Me = !1, G = !1, Q = typeof setTimeout == "function" ? setTimeout : null, rn = typeof clearTimeout == "function" ? clearTimeout : null, Xe = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function De(S) {
      for (var R = m(me); R !== null; ) {
        if (R.callback === null)
          Re(me);
        else if (R.startTime <= S)
          Re(me), R.sortIndex = R.expirationTime, te(B, R);
        else
          break;
        R = m(me);
      }
    }
    function z(S) {
      if (G = !1, De(S), !Me)
        if (m(B) !== null)
          Me = !0, Fe(I);
        else {
          var R = m(me);
          R !== null && ie(z, R.startTime - S);
        }
    }
    function I(S, R) {
      Me = !1, G && (G = !1, rn(ue), ue = -1), Oe = !0;
      var a = Y;
      try {
        for (De(R), q = m(B); q !== null && (!(q.expirationTime > R) || S && !ln()); ) {
          var v = q.callback;
          if (typeof v == "function") {
            q.callback = null, Y = q.priorityLevel;
            var P = v(q.expirationTime <= R);
            R = N.unstable_now(), typeof P == "function" ? q.callback = P : q === m(B) && Re(B), De(R);
          } else
            Re(B);
          q = m(B);
        }
        if (q !== null)
          var F = !0;
        else {
          var M = m(me);
          M !== null && ie(z, M.startTime - R), F = !1;
        }
        return F;
      } finally {
        q = null, Y = a, Oe = !1;
      }
    }
    var j = !1, V = null, ue = -1, ze = 5, Ie = -1;
    function ln() {
      return !(N.unstable_now() - Ie < ze);
    }
    function on() {
      if (V !== null) {
        var S = N.unstable_now();
        Ie = S;
        var R = !0;
        try {
          R = V(!0, S);
        } finally {
          R ? Qe() : (j = !1, V = null);
        }
      } else
        j = !1;
    }
    var Qe;
    if (typeof Xe == "function")
      Qe = function() {
        Xe(on);
      };
    else if (typeof MessageChannel < "u") {
      var un = new MessageChannel(), hn = un.port2;
      un.port1.onmessage = on, Qe = function() {
        hn.postMessage(null);
      };
    } else
      Qe = function() {
        Q(on, 0);
      };
    function Fe(S) {
      V = S, j || (j = !0, Qe());
    }
    function ie(S, R) {
      ue = Q(function() {
        S(N.unstable_now());
      }, R);
    }
    N.unstable_IdlePriority = 5, N.unstable_ImmediatePriority = 1, N.unstable_LowPriority = 4, N.unstable_NormalPriority = 3, N.unstable_Profiling = null, N.unstable_UserBlockingPriority = 2, N.unstable_cancelCallback = function(S) {
      S.callback = null;
    }, N.unstable_continueExecution = function() {
      Me || Oe || (Me = !0, Fe(I));
    }, N.unstable_forceFrameRate = function(S) {
      0 > S || 125 < S ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : ze = 0 < S ? Math.floor(1e3 / S) : 5;
    }, N.unstable_getCurrentPriorityLevel = function() {
      return Y;
    }, N.unstable_getFirstCallbackNode = function() {
      return m(B);
    }, N.unstable_next = function(S) {
      switch (Y) {
        case 1:
        case 2:
        case 3:
          var R = 3;
          break;
        default:
          R = Y;
      }
      var a = Y;
      Y = R;
      try {
        return S();
      } finally {
        Y = a;
      }
    }, N.unstable_pauseExecution = function() {
    }, N.unstable_requestPaint = function() {
    }, N.unstable_runWithPriority = function(S, R) {
      switch (S) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          S = 3;
      }
      var a = Y;
      Y = S;
      try {
        return R();
      } finally {
        Y = a;
      }
    }, N.unstable_scheduleCallback = function(S, R, a) {
      var v = N.unstable_now();
      switch (typeof a == "object" && a !== null ? (a = a.delay, a = typeof a == "number" && 0 < a ? v + a : v) : a = v, S) {
        case 1:
          var P = -1;
          break;
        case 2:
          P = 250;
          break;
        case 5:
          P = 1073741823;
          break;
        case 4:
          P = 1e4;
          break;
        default:
          P = 5e3;
      }
      return P = a + P, S = { id: he++, callback: R, priorityLevel: S, startTime: a, expirationTime: P, sortIndex: -1 }, a > v ? (S.sortIndex = a, te(me, S), m(B) === null && S === m(me) && (G ? (rn(ue), ue = -1) : G = !0, ie(z, a - v))) : (S.sortIndex = P, te(B, S), Me || Oe || (Me = !0, Fe(I))), S;
    }, N.unstable_shouldYield = ln, N.unstable_wrapCallback = function(S) {
      var R = Y;
      return function() {
        var a = Y;
        Y = R;
        try {
          return S.apply(this, arguments);
        } finally {
          Y = a;
        }
      };
    };
  }(Cu)), Cu;
}
var Ca;
function Df() {
  return Ca || (Ca = 1, _u.exports = Mf()), _u.exports;
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
var xa;
function If() {
  if (xa)
    return He;
  xa = 1;
  var N = Tn, te = Df();
  function m(e) {
    for (var n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, t = 1; t < arguments.length; t++)
      n += "&args[]=" + encodeURIComponent(arguments[t]);
    return "Minified React error #" + e + "; visit " + n + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var Re = /* @__PURE__ */ new Set(), K = {};
  function _e(e, n) {
    oe(e, n), oe(e + "Capture", n);
  }
  function oe(e, n) {
    for (K[e] = n, e = 0; e < n.length; e++)
      Re.add(n[e]);
  }
  var ce = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), B = Object.prototype.hasOwnProperty, me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, he = {}, q = {};
  function Y(e) {
    return B.call(q, e) ? !0 : B.call(he, e) ? !1 : me.test(e) ? q[e] = !0 : (he[e] = !0, !1);
  }
  function Oe(e, n, t, r) {
    if (t !== null && t.type === 0)
      return !1;
    switch (typeof n) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return r ? !1 : t !== null ? !t.acceptsBooleans : (e = e.toLowerCase().slice(0, 5), e !== "data-" && e !== "aria-");
      default:
        return !1;
    }
  }
  function Me(e, n, t, r) {
    if (n === null || typeof n > "u" || Oe(e, n, t, r))
      return !0;
    if (r)
      return !1;
    if (t !== null)
      switch (t.type) {
        case 3:
          return !n;
        case 4:
          return n === !1;
        case 5:
          return isNaN(n);
        case 6:
          return isNaN(n) || 1 > n;
      }
    return !1;
  }
  function G(e, n, t, r, l, o, u) {
    this.acceptsBooleans = n === 2 || n === 3 || n === 4, this.attributeName = r, this.attributeNamespace = l, this.mustUseProperty = t, this.propertyName = e, this.type = n, this.sanitizeURL = o, this.removeEmptyString = u;
  }
  var Q = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e) {
    Q[e] = new G(e, 0, !1, e, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
    var n = e[0];
    Q[n] = new G(n, 1, !1, e[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
    Q[e] = new G(e, 2, !1, e.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
    Q[e] = new G(e, 2, !1, e, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e) {
    Q[e] = new G(e, 3, !1, e.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(e) {
    Q[e] = new G(e, 3, !0, e, null, !1, !1);
  }), ["capture", "download"].forEach(function(e) {
    Q[e] = new G(e, 4, !1, e, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(e) {
    Q[e] = new G(e, 6, !1, e, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(e) {
    Q[e] = new G(e, 5, !1, e.toLowerCase(), null, !1, !1);
  });
  var rn = /[\-:]([a-z])/g;
  function Xe(e) {
    return e[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e) {
    var n = e.replace(
      rn,
      Xe
    );
    Q[n] = new G(n, 1, !1, e, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e) {
    var n = e.replace(rn, Xe);
    Q[n] = new G(n, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(e) {
    var n = e.replace(rn, Xe);
    Q[n] = new G(n, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(e) {
    Q[e] = new G(e, 1, !1, e.toLowerCase(), null, !1, !1);
  }), Q.xlinkHref = new G("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(e) {
    Q[e] = new G(e, 1, !1, e.toLowerCase(), null, !0, !0);
  });
  function De(e, n, t, r) {
    var l = Q.hasOwnProperty(n) ? Q[n] : null;
    (l !== null ? l.type !== 0 : r || !(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (Me(n, t, l, r) && (t = null), r || l === null ? Y(n) && (t === null ? e.removeAttribute(n) : e.setAttribute(n, "" + t)) : l.mustUseProperty ? e[l.propertyName] = t === null ? l.type === 3 ? !1 : "" : t : (n = l.attributeName, r = l.attributeNamespace, t === null ? e.removeAttribute(n) : (l = l.type, t = l === 3 || l === 4 && t === !0 ? "" : "" + t, r ? e.setAttributeNS(r, n, t) : e.setAttribute(n, t))));
  }
  var z = N.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, I = Symbol.for("react.element"), j = Symbol.for("react.portal"), V = Symbol.for("react.fragment"), ue = Symbol.for("react.strict_mode"), ze = Symbol.for("react.profiler"), Ie = Symbol.for("react.provider"), ln = Symbol.for("react.context"), on = Symbol.for("react.forward_ref"), Qe = Symbol.for("react.suspense"), un = Symbol.for("react.suspense_list"), hn = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), ie = Symbol.for("react.offscreen"), S = Symbol.iterator;
  function R(e) {
    return e === null || typeof e != "object" ? null : (e = S && e[S] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var a = Object.assign, v;
  function P(e) {
    if (v === void 0)
      try {
        throw Error();
      } catch (t) {
        var n = t.stack.trim().match(/\n( *(at )?)/);
        v = n && n[1] || "";
      }
    return `
` + v + e;
  }
  var F = !1;
  function M(e, n) {
    if (!e || F)
      return "";
    F = !0;
    var t = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (n)
        if (n = function() {
          throw Error();
        }, Object.defineProperty(n.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(n, []);
          } catch (p) {
            var r = p;
          }
          Reflect.construct(e, [], n);
        } else {
          try {
            n.call();
          } catch (p) {
            r = p;
          }
          e.call(n.prototype);
        }
      else {
        try {
          throw Error();
        } catch (p) {
          r = p;
        }
        e();
      }
    } catch (p) {
      if (p && r && typeof p.stack == "string") {
        for (var l = p.stack.split(`
`), o = r.stack.split(`
`), u = l.length - 1, i = o.length - 1; 1 <= u && 0 <= i && l[u] !== o[i]; )
          i--;
        for (; 1 <= u && 0 <= i; u--, i--)
          if (l[u] !== o[i]) {
            if (u !== 1 || i !== 1)
              do
                if (u--, i--, 0 > i || l[u] !== o[i]) {
                  var s = `
` + l[u].replace(" at new ", " at ");
                  return e.displayName && s.includes("<anonymous>") && (s = s.replace("<anonymous>", e.displayName)), s;
                }
              while (1 <= u && 0 <= i);
            break;
          }
      }
    } finally {
      F = !1, Error.prepareStackTrace = t;
    }
    return (e = e ? e.displayName || e.name : "") ? P(e) : "";
  }
  function Z(e) {
    switch (e.tag) {
      case 5:
        return P(e.type);
      case 16:
        return P("Lazy");
      case 13:
        return P("Suspense");
      case 19:
        return P("SuspenseList");
      case 0:
      case 2:
      case 15:
        return e = M(e.type, !1), e;
      case 11:
        return e = M(e.type.render, !1), e;
      case 1:
        return e = M(e.type, !0), e;
      default:
        return "";
    }
  }
  function $(e) {
    if (e == null)
      return null;
    if (typeof e == "function")
      return e.displayName || e.name || null;
    if (typeof e == "string")
      return e;
    switch (e) {
      case V:
        return "Fragment";
      case j:
        return "Portal";
      case ze:
        return "Profiler";
      case ue:
        return "StrictMode";
      case Qe:
        return "Suspense";
      case un:
        return "SuspenseList";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ln:
          return (e.displayName || "Context") + ".Consumer";
        case Ie:
          return (e._context.displayName || "Context") + ".Provider";
        case on:
          var n = e.render;
          return e = e.displayName, e || (e = n.displayName || n.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case hn:
          return n = e.displayName || null, n !== null ? n : $(e.type) || "Memo";
        case Fe:
          n = e._payload, e = e._init;
          try {
            return $(e(n));
          } catch {
          }
      }
    return null;
  }
  function X(e) {
    var n = e.type;
    switch (e.tag) {
      case 24:
        return "Cache";
      case 9:
        return (n.displayName || "Context") + ".Consumer";
      case 10:
        return (n._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return e = n.render, e = e.displayName || e.name || "", n.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return n;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return $(n);
      case 8:
        return n === ue ? "StrictMode" : "Mode";
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
        if (typeof n == "function")
          return n.displayName || n.name || null;
        if (typeof n == "string")
          return n;
    }
    return null;
  }
  function H(e) {
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
  function je(e) {
    var n = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (n === "checkbox" || n === "radio");
  }
  function Ra(e) {
    var n = je(e) ? "checked" : "value", t = Object.getOwnPropertyDescriptor(e.constructor.prototype, n), r = "" + e[n];
    if (!e.hasOwnProperty(n) && typeof t < "u" && typeof t.get == "function" && typeof t.set == "function") {
      var l = t.get, o = t.set;
      return Object.defineProperty(e, n, { configurable: !0, get: function() {
        return l.call(this);
      }, set: function(u) {
        r = "" + u, o.call(this, u);
      } }), Object.defineProperty(e, n, { enumerable: t.enumerable }), { getValue: function() {
        return r;
      }, setValue: function(u) {
        r = "" + u;
      }, stopTracking: function() {
        e._valueTracker = null, delete e[n];
      } };
    }
  }
  function wr(e) {
    e._valueTracker || (e._valueTracker = Ra(e));
  }
  function Nu(e) {
    if (!e)
      return !1;
    var n = e._valueTracker;
    if (!n)
      return !0;
    var t = n.getValue(), r = "";
    return e && (r = je(e) ? e.checked ? "true" : "false" : e.value), e = r, e !== t ? (n.setValue(e), !0) : !1;
  }
  function Sr(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
      return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Tl(e, n) {
    var t = n.checked;
    return a({}, n, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: t ?? e._wrapperState.initialChecked });
  }
  function Pu(e, n) {
    var t = n.defaultValue == null ? "" : n.defaultValue, r = n.checked != null ? n.checked : n.defaultChecked;
    t = H(n.value != null ? n.value : t), e._wrapperState = { initialChecked: r, initialValue: t, controlled: n.type === "checkbox" || n.type === "radio" ? n.checked != null : n.value != null };
  }
  function zu(e, n) {
    n = n.checked, n != null && De(e, "checked", n, !1);
  }
  function Ll(e, n) {
    zu(e, n);
    var t = H(n.value), r = n.type;
    if (t != null)
      r === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + t) : e.value !== "" + t && (e.value = "" + t);
    else if (r === "submit" || r === "reset") {
      e.removeAttribute("value");
      return;
    }
    n.hasOwnProperty("value") ? Rl(e, n.type, t) : n.hasOwnProperty("defaultValue") && Rl(e, n.type, H(n.defaultValue)), n.checked == null && n.defaultChecked != null && (e.defaultChecked = !!n.defaultChecked);
  }
  function Tu(e, n, t) {
    if (n.hasOwnProperty("value") || n.hasOwnProperty("defaultValue")) {
      var r = n.type;
      if (!(r !== "submit" && r !== "reset" || n.value !== void 0 && n.value !== null))
        return;
      n = "" + e._wrapperState.initialValue, t || n === e.value || (e.value = n), e.defaultValue = n;
    }
    t = e.name, t !== "" && (e.name = ""), e.defaultChecked = !!e._wrapperState.initialChecked, t !== "" && (e.name = t);
  }
  function Rl(e, n, t) {
    (n !== "number" || Sr(e.ownerDocument) !== e) && (t == null ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + t && (e.defaultValue = "" + t));
  }
  var Mt = Array.isArray;
  function st(e, n, t, r) {
    if (e = e.options, n) {
      n = {};
      for (var l = 0; l < t.length; l++)
        n["$" + t[l]] = !0;
      for (t = 0; t < e.length; t++)
        l = n.hasOwnProperty("$" + e[t].value), e[t].selected !== l && (e[t].selected = l), l && r && (e[t].defaultSelected = !0);
    } else {
      for (t = "" + H(t), n = null, l = 0; l < e.length; l++) {
        if (e[l].value === t) {
          e[l].selected = !0, r && (e[l].defaultSelected = !0);
          return;
        }
        n !== null || e[l].disabled || (n = e[l]);
      }
      n !== null && (n.selected = !0);
    }
  }
  function Ol(e, n) {
    if (n.dangerouslySetInnerHTML != null)
      throw Error(m(91));
    return a({}, n, { value: void 0, defaultValue: void 0, children: "" + e._wrapperState.initialValue });
  }
  function Lu(e, n) {
    var t = n.value;
    if (t == null) {
      if (t = n.children, n = n.defaultValue, t != null) {
        if (n != null)
          throw Error(m(92));
        if (Mt(t)) {
          if (1 < t.length)
            throw Error(m(93));
          t = t[0];
        }
        n = t;
      }
      n == null && (n = ""), t = n;
    }
    e._wrapperState = { initialValue: H(t) };
  }
  function Ru(e, n) {
    var t = H(n.value), r = H(n.defaultValue);
    t != null && (t = "" + t, t !== e.value && (e.value = t), n.defaultValue == null && e.defaultValue !== t && (e.defaultValue = t)), r != null && (e.defaultValue = "" + r);
  }
  function Ou(e) {
    var n = e.textContent;
    n === e._wrapperState.initialValue && n !== "" && n !== null && (e.value = n);
  }
  function Mu(e) {
    switch (e) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Ml(e, n) {
    return e == null || e === "http://www.w3.org/1999/xhtml" ? Mu(n) : e === "http://www.w3.org/2000/svg" && n === "foreignObject" ? "http://www.w3.org/1999/xhtml" : e;
  }
  var kr, Du = function(e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(n, t, r, l) {
      MSApp.execUnsafeLocalFunction(function() {
        return e(n, t, r, l);
      });
    } : e;
  }(function(e, n) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = n;
    else {
      for (kr = kr || document.createElement("div"), kr.innerHTML = "<svg>" + n.valueOf().toString() + "</svg>", n = kr.firstChild; e.firstChild; )
        e.removeChild(e.firstChild);
      for (; n.firstChild; )
        e.appendChild(n.firstChild);
    }
  });
  function Dt(e, n) {
    if (n) {
      var t = e.firstChild;
      if (t && t === e.lastChild && t.nodeType === 3) {
        t.nodeValue = n;
        return;
      }
    }
    e.textContent = n;
  }
  var It = {
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
  }, Oa = ["Webkit", "ms", "Moz", "O"];
  Object.keys(It).forEach(function(e) {
    Oa.forEach(function(n) {
      n = n + e.charAt(0).toUpperCase() + e.substring(1), It[n] = It[e];
    });
  });
  function Iu(e, n, t) {
    return n == null || typeof n == "boolean" || n === "" ? "" : t || typeof n != "number" || n === 0 || It.hasOwnProperty(e) && It[e] ? ("" + n).trim() : n + "px";
  }
  function Fu(e, n) {
    e = e.style;
    for (var t in n)
      if (n.hasOwnProperty(t)) {
        var r = t.indexOf("--") === 0, l = Iu(t, n[t], r);
        t === "float" && (t = "cssFloat"), r ? e.setProperty(t, l) : e[t] = l;
      }
  }
  var Ma = a({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Dl(e, n) {
    if (n) {
      if (Ma[e] && (n.children != null || n.dangerouslySetInnerHTML != null))
        throw Error(m(137, e));
      if (n.dangerouslySetInnerHTML != null) {
        if (n.children != null)
          throw Error(m(60));
        if (typeof n.dangerouslySetInnerHTML != "object" || !("__html" in n.dangerouslySetInnerHTML))
          throw Error(m(61));
      }
      if (n.style != null && typeof n.style != "object")
        throw Error(m(62));
    }
  }
  function Il(e, n) {
    if (e.indexOf("-") === -1)
      return typeof n.is == "string";
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
  var Fl = null;
  function jl(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var Ul = null, at = null, ct = null;
  function ju(e) {
    if (e = rr(e)) {
      if (typeof Ul != "function")
        throw Error(m(280));
      var n = e.stateNode;
      n && (n = Qr(n), Ul(e.stateNode, e.type, n));
    }
  }
  function Uu(e) {
    at ? ct ? ct.push(e) : ct = [e] : at = e;
  }
  function Au() {
    if (at) {
      var e = at, n = ct;
      if (ct = at = null, ju(e), n)
        for (e = 0; e < n.length; e++)
          ju(n[e]);
    }
  }
  function Vu(e, n) {
    return e(n);
  }
  function $u() {
  }
  var Al = !1;
  function Bu(e, n, t) {
    if (Al)
      return e(n, t);
    Al = !0;
    try {
      return Vu(e, n, t);
    } finally {
      Al = !1, (at !== null || ct !== null) && ($u(), Au());
    }
  }
  function Ft(e, n) {
    var t = e.stateNode;
    if (t === null)
      return null;
    var r = Qr(t);
    if (r === null)
      return null;
    t = r[n];
    e:
      switch (n) {
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
    if (t && typeof t != "function")
      throw Error(m(231, n, typeof t));
    return t;
  }
  var Vl = !1;
  if (ce)
    try {
      var jt = {};
      Object.defineProperty(jt, "passive", { get: function() {
        Vl = !0;
      } }), window.addEventListener("test", jt, jt), window.removeEventListener("test", jt, jt);
    } catch {
      Vl = !1;
    }
  function Da(e, n, t, r, l, o, u, i, s) {
    var p = Array.prototype.slice.call(arguments, 3);
    try {
      n.apply(t, p);
    } catch (y) {
      this.onError(y);
    }
  }
  var Ut = !1, Er = null, _r = !1, $l = null, Ia = { onError: function(e) {
    Ut = !0, Er = e;
  } };
  function Fa(e, n, t, r, l, o, u, i, s) {
    Ut = !1, Er = null, Da.apply(Ia, arguments);
  }
  function ja(e, n, t, r, l, o, u, i, s) {
    if (Fa.apply(this, arguments), Ut) {
      if (Ut) {
        var p = Er;
        Ut = !1, Er = null;
      } else
        throw Error(m(198));
      _r || (_r = !0, $l = p);
    }
  }
  function Xn(e) {
    var n = e, t = e;
    if (e.alternate)
      for (; n.return; )
        n = n.return;
    else {
      e = n;
      do
        n = e, n.flags & 4098 && (t = n.return), e = n.return;
      while (e);
    }
    return n.tag === 3 ? t : null;
  }
  function Hu(e) {
    if (e.tag === 13) {
      var n = e.memoizedState;
      if (n === null && (e = e.alternate, e !== null && (n = e.memoizedState)), n !== null)
        return n.dehydrated;
    }
    return null;
  }
  function Qu(e) {
    if (Xn(e) !== e)
      throw Error(m(188));
  }
  function Ua(e) {
    var n = e.alternate;
    if (!n) {
      if (n = Xn(e), n === null)
        throw Error(m(188));
      return n !== e ? null : e;
    }
    for (var t = e, r = n; ; ) {
      var l = t.return;
      if (l === null)
        break;
      var o = l.alternate;
      if (o === null) {
        if (r = l.return, r !== null) {
          t = r;
          continue;
        }
        break;
      }
      if (l.child === o.child) {
        for (o = l.child; o; ) {
          if (o === t)
            return Qu(l), e;
          if (o === r)
            return Qu(l), n;
          o = o.sibling;
        }
        throw Error(m(188));
      }
      if (t.return !== r.return)
        t = l, r = o;
      else {
        for (var u = !1, i = l.child; i; ) {
          if (i === t) {
            u = !0, t = l, r = o;
            break;
          }
          if (i === r) {
            u = !0, r = l, t = o;
            break;
          }
          i = i.sibling;
        }
        if (!u) {
          for (i = o.child; i; ) {
            if (i === t) {
              u = !0, t = o, r = l;
              break;
            }
            if (i === r) {
              u = !0, r = o, t = l;
              break;
            }
            i = i.sibling;
          }
          if (!u)
            throw Error(m(189));
        }
      }
      if (t.alternate !== r)
        throw Error(m(190));
    }
    if (t.tag !== 3)
      throw Error(m(188));
    return t.stateNode.current === t ? e : n;
  }
  function Wu(e) {
    return e = Ua(e), e !== null ? Ku(e) : null;
  }
  function Ku(e) {
    if (e.tag === 5 || e.tag === 6)
      return e;
    for (e = e.child; e !== null; ) {
      var n = Ku(e);
      if (n !== null)
        return n;
      e = e.sibling;
    }
    return null;
  }
  var Yu = te.unstable_scheduleCallback, Gu = te.unstable_cancelCallback, Aa = te.unstable_shouldYield, Va = te.unstable_requestPaint, fe = te.unstable_now, $a = te.unstable_getCurrentPriorityLevel, Bl = te.unstable_ImmediatePriority, Xu = te.unstable_UserBlockingPriority, Cr = te.unstable_NormalPriority, Ba = te.unstable_LowPriority, Zu = te.unstable_IdlePriority, xr = null, vn = null;
  function Ha(e) {
    if (vn && typeof vn.onCommitFiberRoot == "function")
      try {
        vn.onCommitFiberRoot(xr, e, void 0, (e.current.flags & 128) === 128);
      } catch {
      }
  }
  var sn = Math.clz32 ? Math.clz32 : Ka, Qa = Math.log, Wa = Math.LN2;
  function Ka(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Qa(e) / Wa | 0) | 0;
  }
  var Nr = 64, Pr = 4194304;
  function At(e) {
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
  function zr(e, n) {
    var t = e.pendingLanes;
    if (t === 0)
      return 0;
    var r = 0, l = e.suspendedLanes, o = e.pingedLanes, u = t & 268435455;
    if (u !== 0) {
      var i = u & ~l;
      i !== 0 ? r = At(i) : (o &= u, o !== 0 && (r = At(o)));
    } else
      u = t & ~l, u !== 0 ? r = At(u) : o !== 0 && (r = At(o));
    if (r === 0)
      return 0;
    if (n !== 0 && n !== r && !(n & l) && (l = r & -r, o = n & -n, l >= o || l === 16 && (o & 4194240) !== 0))
      return n;
    if (r & 4 && (r |= t & 16), n = e.entangledLanes, n !== 0)
      for (e = e.entanglements, n &= r; 0 < n; )
        t = 31 - sn(n), l = 1 << t, r |= e[t], n &= ~l;
    return r;
  }
  function Ya(e, n) {
    switch (e) {
      case 1:
      case 2:
      case 4:
        return n + 250;
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
        return n + 5e3;
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
  function Ga(e, n) {
    for (var t = e.suspendedLanes, r = e.pingedLanes, l = e.expirationTimes, o = e.pendingLanes; 0 < o; ) {
      var u = 31 - sn(o), i = 1 << u, s = l[u];
      s === -1 ? (!(i & t) || i & r) && (l[u] = Ya(i, n)) : s <= n && (e.expiredLanes |= i), o &= ~i;
    }
  }
  function Hl(e) {
    return e = e.pendingLanes & -1073741825, e !== 0 ? e : e & 1073741824 ? 1073741824 : 0;
  }
  function Ju() {
    var e = Nr;
    return Nr <<= 1, !(Nr & 4194240) && (Nr = 64), e;
  }
  function Ql(e) {
    for (var n = [], t = 0; 31 > t; t++)
      n.push(e);
    return n;
  }
  function Vt(e, n, t) {
    e.pendingLanes |= n, n !== 536870912 && (e.suspendedLanes = 0, e.pingedLanes = 0), e = e.eventTimes, n = 31 - sn(n), e[n] = t;
  }
  function Xa(e, n) {
    var t = e.pendingLanes & ~n;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.expiredLanes &= n, e.mutableReadLanes &= n, e.entangledLanes &= n, n = e.entanglements;
    var r = e.eventTimes;
    for (e = e.expirationTimes; 0 < t; ) {
      var l = 31 - sn(t), o = 1 << l;
      n[l] = 0, r[l] = -1, e[l] = -1, t &= ~o;
    }
  }
  function Wl(e, n) {
    var t = e.entangledLanes |= n;
    for (e = e.entanglements; t; ) {
      var r = 31 - sn(t), l = 1 << r;
      l & n | e[r] & n && (e[r] |= n), t &= ~l;
    }
  }
  var W = 0;
  function qu(e) {
    return e &= -e, 1 < e ? 4 < e ? e & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var bu, Kl, ei, ni, ti, Yl = !1, Tr = [], Ln = null, Rn = null, On = null, $t = /* @__PURE__ */ new Map(), Bt = /* @__PURE__ */ new Map(), Mn = [], Za = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function ri(e, n) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ln = null;
        break;
      case "dragenter":
      case "dragleave":
        Rn = null;
        break;
      case "mouseover":
      case "mouseout":
        On = null;
        break;
      case "pointerover":
      case "pointerout":
        $t.delete(n.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Bt.delete(n.pointerId);
    }
  }
  function Ht(e, n, t, r, l, o) {
    return e === null || e.nativeEvent !== o ? (e = { blockedOn: n, domEventName: t, eventSystemFlags: r, nativeEvent: o, targetContainers: [l] }, n !== null && (n = rr(n), n !== null && Kl(n)), e) : (e.eventSystemFlags |= r, n = e.targetContainers, l !== null && n.indexOf(l) === -1 && n.push(l), e);
  }
  function Ja(e, n, t, r, l) {
    switch (n) {
      case "focusin":
        return Ln = Ht(Ln, e, n, t, r, l), !0;
      case "dragenter":
        return Rn = Ht(Rn, e, n, t, r, l), !0;
      case "mouseover":
        return On = Ht(On, e, n, t, r, l), !0;
      case "pointerover":
        var o = l.pointerId;
        return $t.set(o, Ht($t.get(o) || null, e, n, t, r, l)), !0;
      case "gotpointercapture":
        return o = l.pointerId, Bt.set(o, Ht(Bt.get(o) || null, e, n, t, r, l)), !0;
    }
    return !1;
  }
  function li(e) {
    var n = Zn(e.target);
    if (n !== null) {
      var t = Xn(n);
      if (t !== null) {
        if (n = t.tag, n === 13) {
          if (n = Hu(t), n !== null) {
            e.blockedOn = n, ti(e.priority, function() {
              ei(t);
            });
            return;
          }
        } else if (n === 3 && t.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = t.tag === 3 ? t.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function Lr(e) {
    if (e.blockedOn !== null)
      return !1;
    for (var n = e.targetContainers; 0 < n.length; ) {
      var t = Xl(e.domEventName, e.eventSystemFlags, n[0], e.nativeEvent);
      if (t === null) {
        t = e.nativeEvent;
        var r = new t.constructor(t.type, t);
        Fl = r, t.target.dispatchEvent(r), Fl = null;
      } else
        return n = rr(t), n !== null && Kl(n), e.blockedOn = t, !1;
      n.shift();
    }
    return !0;
  }
  function oi(e, n, t) {
    Lr(e) && t.delete(n);
  }
  function qa() {
    Yl = !1, Ln !== null && Lr(Ln) && (Ln = null), Rn !== null && Lr(Rn) && (Rn = null), On !== null && Lr(On) && (On = null), $t.forEach(oi), Bt.forEach(oi);
  }
  function Qt(e, n) {
    e.blockedOn === n && (e.blockedOn = null, Yl || (Yl = !0, te.unstable_scheduleCallback(te.unstable_NormalPriority, qa)));
  }
  function Wt(e) {
    function n(l) {
      return Qt(l, e);
    }
    if (0 < Tr.length) {
      Qt(Tr[0], e);
      for (var t = 1; t < Tr.length; t++) {
        var r = Tr[t];
        r.blockedOn === e && (r.blockedOn = null);
      }
    }
    for (Ln !== null && Qt(Ln, e), Rn !== null && Qt(Rn, e), On !== null && Qt(On, e), $t.forEach(n), Bt.forEach(n), t = 0; t < Mn.length; t++)
      r = Mn[t], r.blockedOn === e && (r.blockedOn = null);
    for (; 0 < Mn.length && (t = Mn[0], t.blockedOn === null); )
      li(t), t.blockedOn === null && Mn.shift();
  }
  var ft = z.ReactCurrentBatchConfig, Rr = !0;
  function ba(e, n, t, r) {
    var l = W, o = ft.transition;
    ft.transition = null;
    try {
      W = 1, Gl(e, n, t, r);
    } finally {
      W = l, ft.transition = o;
    }
  }
  function ec(e, n, t, r) {
    var l = W, o = ft.transition;
    ft.transition = null;
    try {
      W = 4, Gl(e, n, t, r);
    } finally {
      W = l, ft.transition = o;
    }
  }
  function Gl(e, n, t, r) {
    if (Rr) {
      var l = Xl(e, n, t, r);
      if (l === null)
        po(e, n, r, Or, t), ri(e, r);
      else if (Ja(l, e, n, t, r))
        r.stopPropagation();
      else if (ri(e, r), n & 4 && -1 < Za.indexOf(e)) {
        for (; l !== null; ) {
          var o = rr(l);
          if (o !== null && bu(o), o = Xl(e, n, t, r), o === null && po(e, n, r, Or, t), o === l)
            break;
          l = o;
        }
        l !== null && r.stopPropagation();
      } else
        po(e, n, r, null, t);
    }
  }
  var Or = null;
  function Xl(e, n, t, r) {
    if (Or = null, e = jl(r), e = Zn(e), e !== null)
      if (n = Xn(e), n === null)
        e = null;
      else if (t = n.tag, t === 13) {
        if (e = Hu(n), e !== null)
          return e;
        e = null;
      } else if (t === 3) {
        if (n.stateNode.current.memoizedState.isDehydrated)
          return n.tag === 3 ? n.stateNode.containerInfo : null;
        e = null;
      } else
        n !== e && (e = null);
    return Or = e, null;
  }
  function ui(e) {
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
        switch ($a()) {
          case Bl:
            return 1;
          case Xu:
            return 4;
          case Cr:
          case Ba:
            return 16;
          case Zu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Dn = null, Zl = null, Mr = null;
  function ii() {
    if (Mr)
      return Mr;
    var e, n = Zl, t = n.length, r, l = "value" in Dn ? Dn.value : Dn.textContent, o = l.length;
    for (e = 0; e < t && n[e] === l[e]; e++)
      ;
    var u = t - e;
    for (r = 1; r <= u && n[t - r] === l[o - r]; r++)
      ;
    return Mr = l.slice(e, 1 < r ? 1 - r : void 0);
  }
  function Dr(e) {
    var n = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && n === 13 && (e = 13)) : e = n, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Ir() {
    return !0;
  }
  function si() {
    return !1;
  }
  function We(e) {
    function n(t, r, l, o, u) {
      this._reactName = t, this._targetInst = l, this.type = r, this.nativeEvent = o, this.target = u, this.currentTarget = null;
      for (var i in e)
        e.hasOwnProperty(i) && (t = e[i], this[i] = t ? t(o) : o[i]);
      return this.isDefaultPrevented = (o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1) ? Ir : si, this.isPropagationStopped = si, this;
    }
    return a(n.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var t = this.nativeEvent;
      t && (t.preventDefault ? t.preventDefault() : typeof t.returnValue != "unknown" && (t.returnValue = !1), this.isDefaultPrevented = Ir);
    }, stopPropagation: function() {
      var t = this.nativeEvent;
      t && (t.stopPropagation ? t.stopPropagation() : typeof t.cancelBubble != "unknown" && (t.cancelBubble = !0), this.isPropagationStopped = Ir);
    }, persist: function() {
    }, isPersistent: Ir }), n;
  }
  var dt = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(e) {
    return e.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Jl = We(dt), Kt = a({}, dt, { view: 0, detail: 0 }), nc = We(Kt), ql, bl, Yt, Fr = a({}, Kt, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: no, button: 0, buttons: 0, relatedTarget: function(e) {
    return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
  }, movementX: function(e) {
    return "movementX" in e ? e.movementX : (e !== Yt && (Yt && e.type === "mousemove" ? (ql = e.screenX - Yt.screenX, bl = e.screenY - Yt.screenY) : bl = ql = 0, Yt = e), ql);
  }, movementY: function(e) {
    return "movementY" in e ? e.movementY : bl;
  } }), ai = We(Fr), tc = a({}, Fr, { dataTransfer: 0 }), rc = We(tc), lc = a({}, Kt, { relatedTarget: 0 }), eo = We(lc), oc = a({}, dt, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), uc = We(oc), ic = a({}, dt, { clipboardData: function(e) {
    return "clipboardData" in e ? e.clipboardData : window.clipboardData;
  } }), sc = We(ic), ac = a({}, dt, { data: 0 }), ci = We(ac), cc = {
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
  }, fc = {
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
  }, dc = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function pc(e) {
    var n = this.nativeEvent;
    return n.getModifierState ? n.getModifierState(e) : (e = dc[e]) ? !!n[e] : !1;
  }
  function no() {
    return pc;
  }
  var mc = a({}, Kt, { key: function(e) {
    if (e.key) {
      var n = cc[e.key] || e.key;
      if (n !== "Unidentified")
        return n;
    }
    return e.type === "keypress" ? (e = Dr(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? fc[e.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: no, charCode: function(e) {
    return e.type === "keypress" ? Dr(e) : 0;
  }, keyCode: function(e) {
    return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  }, which: function(e) {
    return e.type === "keypress" ? Dr(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
  } }), hc = We(mc), vc = a({}, Fr, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), fi = We(vc), yc = a({}, Kt, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: no }), gc = We(yc), wc = a({}, dt, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Sc = We(wc), kc = a({}, Fr, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Ec = We(kc), _c = [9, 13, 27, 32], to = ce && "CompositionEvent" in window, Gt = null;
  ce && "documentMode" in document && (Gt = document.documentMode);
  var Cc = ce && "TextEvent" in window && !Gt, di = ce && (!to || Gt && 8 < Gt && 11 >= Gt), pi = String.fromCharCode(32), mi = !1;
  function hi(e, n) {
    switch (e) {
      case "keyup":
        return _c.indexOf(n.keyCode) !== -1;
      case "keydown":
        return n.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function vi(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var pt = !1;
  function xc(e, n) {
    switch (e) {
      case "compositionend":
        return vi(n);
      case "keypress":
        return n.which !== 32 ? null : (mi = !0, pi);
      case "textInput":
        return e = n.data, e === pi && mi ? null : e;
      default:
        return null;
    }
  }
  function Nc(e, n) {
    if (pt)
      return e === "compositionend" || !to && hi(e, n) ? (e = ii(), Mr = Zl = Dn = null, pt = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(n.ctrlKey || n.altKey || n.metaKey) || n.ctrlKey && n.altKey) {
          if (n.char && 1 < n.char.length)
            return n.char;
          if (n.which)
            return String.fromCharCode(n.which);
        }
        return null;
      case "compositionend":
        return di && n.locale !== "ko" ? null : n.data;
      default:
        return null;
    }
  }
  var Pc = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function yi(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n === "input" ? !!Pc[e.type] : n === "textarea";
  }
  function gi(e, n, t, r) {
    Uu(r), n = $r(n, "onChange"), 0 < n.length && (t = new Jl("onChange", "change", null, t, r), e.push({ event: t, listeners: n }));
  }
  var Xt = null, Zt = null;
  function zc(e) {
    Fi(e, 0);
  }
  function jr(e) {
    var n = gt(e);
    if (Nu(n))
      return e;
  }
  function Tc(e, n) {
    if (e === "change")
      return n;
  }
  var wi = !1;
  if (ce) {
    var ro;
    if (ce) {
      var lo = "oninput" in document;
      if (!lo) {
        var Si = document.createElement("div");
        Si.setAttribute("oninput", "return;"), lo = typeof Si.oninput == "function";
      }
      ro = lo;
    } else
      ro = !1;
    wi = ro && (!document.documentMode || 9 < document.documentMode);
  }
  function ki() {
    Xt && (Xt.detachEvent("onpropertychange", Ei), Zt = Xt = null);
  }
  function Ei(e) {
    if (e.propertyName === "value" && jr(Zt)) {
      var n = [];
      gi(n, Zt, e, jl(e)), Bu(zc, n);
    }
  }
  function Lc(e, n, t) {
    e === "focusin" ? (ki(), Xt = n, Zt = t, Xt.attachEvent("onpropertychange", Ei)) : e === "focusout" && ki();
  }
  function Rc(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return jr(Zt);
  }
  function Oc(e, n) {
    if (e === "click")
      return jr(n);
  }
  function Mc(e, n) {
    if (e === "input" || e === "change")
      return jr(n);
  }
  function Dc(e, n) {
    return e === n && (e !== 0 || 1 / e === 1 / n) || e !== e && n !== n;
  }
  var an = typeof Object.is == "function" ? Object.is : Dc;
  function Jt(e, n) {
    if (an(e, n))
      return !0;
    if (typeof e != "object" || e === null || typeof n != "object" || n === null)
      return !1;
    var t = Object.keys(e), r = Object.keys(n);
    if (t.length !== r.length)
      return !1;
    for (r = 0; r < t.length; r++) {
      var l = t[r];
      if (!B.call(n, l) || !an(e[l], n[l]))
        return !1;
    }
    return !0;
  }
  function _i(e) {
    for (; e && e.firstChild; )
      e = e.firstChild;
    return e;
  }
  function Ci(e, n) {
    var t = _i(e);
    e = 0;
    for (var r; t; ) {
      if (t.nodeType === 3) {
        if (r = e + t.textContent.length, e <= n && r >= n)
          return { node: t, offset: n - e };
        e = r;
      }
      e: {
        for (; t; ) {
          if (t.nextSibling) {
            t = t.nextSibling;
            break e;
          }
          t = t.parentNode;
        }
        t = void 0;
      }
      t = _i(t);
    }
  }
  function xi(e, n) {
    return e && n ? e === n ? !0 : e && e.nodeType === 3 ? !1 : n && n.nodeType === 3 ? xi(e, n.parentNode) : "contains" in e ? e.contains(n) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(n) & 16) : !1 : !1;
  }
  function Ni() {
    for (var e = window, n = Sr(); n instanceof e.HTMLIFrameElement; ) {
      try {
        var t = typeof n.contentWindow.location.href == "string";
      } catch {
        t = !1;
      }
      if (t)
        e = n.contentWindow;
      else
        break;
      n = Sr(e.document);
    }
    return n;
  }
  function oo(e) {
    var n = e && e.nodeName && e.nodeName.toLowerCase();
    return n && (n === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || n === "textarea" || e.contentEditable === "true");
  }
  function Ic(e) {
    var n = Ni(), t = e.focusedElem, r = e.selectionRange;
    if (n !== t && t && t.ownerDocument && xi(t.ownerDocument.documentElement, t)) {
      if (r !== null && oo(t)) {
        if (n = r.start, e = r.end, e === void 0 && (e = n), "selectionStart" in t)
          t.selectionStart = n, t.selectionEnd = Math.min(e, t.value.length);
        else if (e = (n = t.ownerDocument || document) && n.defaultView || window, e.getSelection) {
          e = e.getSelection();
          var l = t.textContent.length, o = Math.min(r.start, l);
          r = r.end === void 0 ? o : Math.min(r.end, l), !e.extend && o > r && (l = r, r = o, o = l), l = Ci(t, o);
          var u = Ci(
            t,
            r
          );
          l && u && (e.rangeCount !== 1 || e.anchorNode !== l.node || e.anchorOffset !== l.offset || e.focusNode !== u.node || e.focusOffset !== u.offset) && (n = n.createRange(), n.setStart(l.node, l.offset), e.removeAllRanges(), o > r ? (e.addRange(n), e.extend(u.node, u.offset)) : (n.setEnd(u.node, u.offset), e.addRange(n)));
        }
      }
      for (n = [], e = t; e = e.parentNode; )
        e.nodeType === 1 && n.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
      for (typeof t.focus == "function" && t.focus(), t = 0; t < n.length; t++)
        e = n[t], e.element.scrollLeft = e.left, e.element.scrollTop = e.top;
    }
  }
  var Fc = ce && "documentMode" in document && 11 >= document.documentMode, mt = null, uo = null, qt = null, io = !1;
  function Pi(e, n, t) {
    var r = t.window === t ? t.document : t.nodeType === 9 ? t : t.ownerDocument;
    io || mt == null || mt !== Sr(r) || (r = mt, "selectionStart" in r && oo(r) ? r = { start: r.selectionStart, end: r.selectionEnd } : (r = (r.ownerDocument && r.ownerDocument.defaultView || window).getSelection(), r = { anchorNode: r.anchorNode, anchorOffset: r.anchorOffset, focusNode: r.focusNode, focusOffset: r.focusOffset }), qt && Jt(qt, r) || (qt = r, r = $r(uo, "onSelect"), 0 < r.length && (n = new Jl("onSelect", "select", null, n, t), e.push({ event: n, listeners: r }), n.target = mt)));
  }
  function Ur(e, n) {
    var t = {};
    return t[e.toLowerCase()] = n.toLowerCase(), t["Webkit" + e] = "webkit" + n, t["Moz" + e] = "moz" + n, t;
  }
  var ht = { animationend: Ur("Animation", "AnimationEnd"), animationiteration: Ur("Animation", "AnimationIteration"), animationstart: Ur("Animation", "AnimationStart"), transitionend: Ur("Transition", "TransitionEnd") }, so = {}, zi = {};
  ce && (zi = document.createElement("div").style, "AnimationEvent" in window || (delete ht.animationend.animation, delete ht.animationiteration.animation, delete ht.animationstart.animation), "TransitionEvent" in window || delete ht.transitionend.transition);
  function Ar(e) {
    if (so[e])
      return so[e];
    if (!ht[e])
      return e;
    var n = ht[e], t;
    for (t in n)
      if (n.hasOwnProperty(t) && t in zi)
        return so[e] = n[t];
    return e;
  }
  var Ti = Ar("animationend"), Li = Ar("animationiteration"), Ri = Ar("animationstart"), Oi = Ar("transitionend"), Mi = /* @__PURE__ */ new Map(), Di = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function In(e, n) {
    Mi.set(e, n), _e(n, [e]);
  }
  for (var ao = 0; ao < Di.length; ao++) {
    var co = Di[ao], jc = co.toLowerCase(), Uc = co[0].toUpperCase() + co.slice(1);
    In(jc, "on" + Uc);
  }
  In(Ti, "onAnimationEnd"), In(Li, "onAnimationIteration"), In(Ri, "onAnimationStart"), In("dblclick", "onDoubleClick"), In("focusin", "onFocus"), In("focusout", "onBlur"), In(Oi, "onTransitionEnd"), oe("onMouseEnter", ["mouseout", "mouseover"]), oe("onMouseLeave", ["mouseout", "mouseover"]), oe("onPointerEnter", ["pointerout", "pointerover"]), oe("onPointerLeave", ["pointerout", "pointerover"]), _e("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), _e("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), _e("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), _e("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), _e("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var bt = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Ac = new Set("cancel close invalid load scroll toggle".split(" ").concat(bt));
  function Ii(e, n, t) {
    var r = e.type || "unknown-event";
    e.currentTarget = t, ja(r, n, void 0, e), e.currentTarget = null;
  }
  function Fi(e, n) {
    n = (n & 4) !== 0;
    for (var t = 0; t < e.length; t++) {
      var r = e[t], l = r.event;
      r = r.listeners;
      e: {
        var o = void 0;
        if (n)
          for (var u = r.length - 1; 0 <= u; u--) {
            var i = r[u], s = i.instance, p = i.currentTarget;
            if (i = i.listener, s !== o && l.isPropagationStopped())
              break e;
            Ii(l, i, p), o = s;
          }
        else
          for (u = 0; u < r.length; u++) {
            if (i = r[u], s = i.instance, p = i.currentTarget, i = i.listener, s !== o && l.isPropagationStopped())
              break e;
            Ii(l, i, p), o = s;
          }
      }
    }
    if (_r)
      throw e = $l, _r = !1, $l = null, e;
  }
  function b(e, n) {
    var t = n[wo];
    t === void 0 && (t = n[wo] = /* @__PURE__ */ new Set());
    var r = e + "__bubble";
    t.has(r) || (ji(n, e, 2, !1), t.add(r));
  }
  function fo(e, n, t) {
    var r = 0;
    n && (r |= 4), ji(t, e, r, n);
  }
  var Vr = "_reactListening" + Math.random().toString(36).slice(2);
  function er(e) {
    if (!e[Vr]) {
      e[Vr] = !0, Re.forEach(function(t) {
        t !== "selectionchange" && (Ac.has(t) || fo(t, !1, e), fo(t, !0, e));
      });
      var n = e.nodeType === 9 ? e : e.ownerDocument;
      n === null || n[Vr] || (n[Vr] = !0, fo("selectionchange", !1, n));
    }
  }
  function ji(e, n, t, r) {
    switch (ui(n)) {
      case 1:
        var l = ba;
        break;
      case 4:
        l = ec;
        break;
      default:
        l = Gl;
    }
    t = l.bind(null, n, t, e), l = void 0, !Vl || n !== "touchstart" && n !== "touchmove" && n !== "wheel" || (l = !0), r ? l !== void 0 ? e.addEventListener(n, t, { capture: !0, passive: l }) : e.addEventListener(n, t, !0) : l !== void 0 ? e.addEventListener(n, t, { passive: l }) : e.addEventListener(n, t, !1);
  }
  function po(e, n, t, r, l) {
    var o = r;
    if (!(n & 1) && !(n & 2) && r !== null)
      e:
        for (; ; ) {
          if (r === null)
            return;
          var u = r.tag;
          if (u === 3 || u === 4) {
            var i = r.stateNode.containerInfo;
            if (i === l || i.nodeType === 8 && i.parentNode === l)
              break;
            if (u === 4)
              for (u = r.return; u !== null; ) {
                var s = u.tag;
                if ((s === 3 || s === 4) && (s = u.stateNode.containerInfo, s === l || s.nodeType === 8 && s.parentNode === l))
                  return;
                u = u.return;
              }
            for (; i !== null; ) {
              if (u = Zn(i), u === null)
                return;
              if (s = u.tag, s === 5 || s === 6) {
                r = o = u;
                continue e;
              }
              i = i.parentNode;
            }
          }
          r = r.return;
        }
    Bu(function() {
      var p = o, y = jl(t), g = [];
      e: {
        var h = Mi.get(e);
        if (h !== void 0) {
          var k = Jl, _ = e;
          switch (e) {
            case "keypress":
              if (Dr(t) === 0)
                break e;
            case "keydown":
            case "keyup":
              k = hc;
              break;
            case "focusin":
              _ = "focus", k = eo;
              break;
            case "focusout":
              _ = "blur", k = eo;
              break;
            case "beforeblur":
            case "afterblur":
              k = eo;
              break;
            case "click":
              if (t.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              k = ai;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              k = rc;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              k = gc;
              break;
            case Ti:
            case Li:
            case Ri:
              k = uc;
              break;
            case Oi:
              k = Sc;
              break;
            case "scroll":
              k = nc;
              break;
            case "wheel":
              k = Ec;
              break;
            case "copy":
            case "cut":
            case "paste":
              k = sc;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              k = fi;
          }
          var C = (n & 4) !== 0, de = !C && e === "scroll", f = C ? h !== null ? h + "Capture" : null : h;
          C = [];
          for (var c = p, d; c !== null; ) {
            d = c;
            var w = d.stateNode;
            if (d.tag === 5 && w !== null && (d = w, f !== null && (w = Ft(c, f), w != null && C.push(nr(c, w, d)))), de)
              break;
            c = c.return;
          }
          0 < C.length && (h = new k(h, _, null, t, y), g.push({ event: h, listeners: C }));
        }
      }
      if (!(n & 7)) {
        e: {
          if (h = e === "mouseover" || e === "pointerover", k = e === "mouseout" || e === "pointerout", h && t !== Fl && (_ = t.relatedTarget || t.fromElement) && (Zn(_) || _[kn]))
            break e;
          if ((k || h) && (h = y.window === y ? y : (h = y.ownerDocument) ? h.defaultView || h.parentWindow : window, k ? (_ = t.relatedTarget || t.toElement, k = p, _ = _ ? Zn(_) : null, _ !== null && (de = Xn(_), _ !== de || _.tag !== 5 && _.tag !== 6) && (_ = null)) : (k = null, _ = p), k !== _)) {
            if (C = ai, w = "onMouseLeave", f = "onMouseEnter", c = "mouse", (e === "pointerout" || e === "pointerover") && (C = fi, w = "onPointerLeave", f = "onPointerEnter", c = "pointer"), de = k == null ? h : gt(k), d = _ == null ? h : gt(_), h = new C(w, c + "leave", k, t, y), h.target = de, h.relatedTarget = d, w = null, Zn(y) === p && (C = new C(f, c + "enter", _, t, y), C.target = d, C.relatedTarget = de, w = C), de = w, k && _)
              n: {
                for (C = k, f = _, c = 0, d = C; d; d = vt(d))
                  c++;
                for (d = 0, w = f; w; w = vt(w))
                  d++;
                for (; 0 < c - d; )
                  C = vt(C), c--;
                for (; 0 < d - c; )
                  f = vt(f), d--;
                for (; c--; ) {
                  if (C === f || f !== null && C === f.alternate)
                    break n;
                  C = vt(C), f = vt(f);
                }
                C = null;
              }
            else
              C = null;
            k !== null && Ui(g, h, k, C, !1), _ !== null && de !== null && Ui(g, de, _, C, !0);
          }
        }
        e: {
          if (h = p ? gt(p) : window, k = h.nodeName && h.nodeName.toLowerCase(), k === "select" || k === "input" && h.type === "file")
            var x = Tc;
          else if (yi(h))
            if (wi)
              x = Mc;
            else {
              x = Rc;
              var T = Lc;
            }
          else
            (k = h.nodeName) && k.toLowerCase() === "input" && (h.type === "checkbox" || h.type === "radio") && (x = Oc);
          if (x && (x = x(e, p))) {
            gi(g, x, t, y);
            break e;
          }
          T && T(e, h, p), e === "focusout" && (T = h._wrapperState) && T.controlled && h.type === "number" && Rl(h, "number", h.value);
        }
        switch (T = p ? gt(p) : window, e) {
          case "focusin":
            (yi(T) || T.contentEditable === "true") && (mt = T, uo = p, qt = null);
            break;
          case "focusout":
            qt = uo = mt = null;
            break;
          case "mousedown":
            io = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            io = !1, Pi(g, t, y);
            break;
          case "selectionchange":
            if (Fc)
              break;
          case "keydown":
          case "keyup":
            Pi(g, t, y);
        }
        var L;
        if (to)
          e: {
            switch (e) {
              case "compositionstart":
                var O = "onCompositionStart";
                break e;
              case "compositionend":
                O = "onCompositionEnd";
                break e;
              case "compositionupdate":
                O = "onCompositionUpdate";
                break e;
            }
            O = void 0;
          }
        else
          pt ? hi(e, t) && (O = "onCompositionEnd") : e === "keydown" && t.keyCode === 229 && (O = "onCompositionStart");
        O && (di && t.locale !== "ko" && (pt || O !== "onCompositionStart" ? O === "onCompositionEnd" && pt && (L = ii()) : (Dn = y, Zl = "value" in Dn ? Dn.value : Dn.textContent, pt = !0)), T = $r(p, O), 0 < T.length && (O = new ci(O, e, null, t, y), g.push({ event: O, listeners: T }), L ? O.data = L : (L = vi(t), L !== null && (O.data = L)))), (L = Cc ? xc(e, t) : Nc(e, t)) && (p = $r(p, "onBeforeInput"), 0 < p.length && (y = new ci("onBeforeInput", "beforeinput", null, t, y), g.push({ event: y, listeners: p }), y.data = L));
      }
      Fi(g, n);
    });
  }
  function nr(e, n, t) {
    return { instance: e, listener: n, currentTarget: t };
  }
  function $r(e, n) {
    for (var t = n + "Capture", r = []; e !== null; ) {
      var l = e, o = l.stateNode;
      l.tag === 5 && o !== null && (l = o, o = Ft(e, t), o != null && r.unshift(nr(e, o, l)), o = Ft(e, n), o != null && r.push(nr(e, o, l))), e = e.return;
    }
    return r;
  }
  function vt(e) {
    if (e === null)
      return null;
    do
      e = e.return;
    while (e && e.tag !== 5);
    return e || null;
  }
  function Ui(e, n, t, r, l) {
    for (var o = n._reactName, u = []; t !== null && t !== r; ) {
      var i = t, s = i.alternate, p = i.stateNode;
      if (s !== null && s === r)
        break;
      i.tag === 5 && p !== null && (i = p, l ? (s = Ft(t, o), s != null && u.unshift(nr(t, s, i))) : l || (s = Ft(t, o), s != null && u.push(nr(t, s, i)))), t = t.return;
    }
    u.length !== 0 && e.push({ event: n, listeners: u });
  }
  var Vc = /\r\n?/g, $c = /\u0000|\uFFFD/g;
  function Ai(e) {
    return (typeof e == "string" ? e : "" + e).replace(Vc, `
`).replace($c, "");
  }
  function Br(e, n, t) {
    if (n = Ai(n), Ai(e) !== n && t)
      throw Error(m(425));
  }
  function Hr() {
  }
  var mo = null, ho = null;
  function vo(e, n) {
    return e === "textarea" || e === "noscript" || typeof n.children == "string" || typeof n.children == "number" || typeof n.dangerouslySetInnerHTML == "object" && n.dangerouslySetInnerHTML !== null && n.dangerouslySetInnerHTML.__html != null;
  }
  var yo = typeof setTimeout == "function" ? setTimeout : void 0, Bc = typeof clearTimeout == "function" ? clearTimeout : void 0, Vi = typeof Promise == "function" ? Promise : void 0, Hc = typeof queueMicrotask == "function" ? queueMicrotask : typeof Vi < "u" ? function(e) {
    return Vi.resolve(null).then(e).catch(Qc);
  } : yo;
  function Qc(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function go(e, n) {
    var t = n, r = 0;
    do {
      var l = t.nextSibling;
      if (e.removeChild(t), l && l.nodeType === 8)
        if (t = l.data, t === "/$") {
          if (r === 0) {
            e.removeChild(l), Wt(n);
            return;
          }
          r--;
        } else
          t !== "$" && t !== "$?" && t !== "$!" || r++;
      t = l;
    } while (t);
    Wt(n);
  }
  function Fn(e) {
    for (; e != null; e = e.nextSibling) {
      var n = e.nodeType;
      if (n === 1 || n === 3)
        break;
      if (n === 8) {
        if (n = e.data, n === "$" || n === "$!" || n === "$?")
          break;
        if (n === "/$")
          return null;
      }
    }
    return e;
  }
  function $i(e) {
    e = e.previousSibling;
    for (var n = 0; e; ) {
      if (e.nodeType === 8) {
        var t = e.data;
        if (t === "$" || t === "$!" || t === "$?") {
          if (n === 0)
            return e;
          n--;
        } else
          t === "/$" && n++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  var yt = Math.random().toString(36).slice(2), yn = "__reactFiber$" + yt, tr = "__reactProps$" + yt, kn = "__reactContainer$" + yt, wo = "__reactEvents$" + yt, Wc = "__reactListeners$" + yt, Kc = "__reactHandles$" + yt;
  function Zn(e) {
    var n = e[yn];
    if (n)
      return n;
    for (var t = e.parentNode; t; ) {
      if (n = t[kn] || t[yn]) {
        if (t = n.alternate, n.child !== null || t !== null && t.child !== null)
          for (e = $i(e); e !== null; ) {
            if (t = e[yn])
              return t;
            e = $i(e);
          }
        return n;
      }
      e = t, t = e.parentNode;
    }
    return null;
  }
  function rr(e) {
    return e = e[yn] || e[kn], !e || e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3 ? null : e;
  }
  function gt(e) {
    if (e.tag === 5 || e.tag === 6)
      return e.stateNode;
    throw Error(m(33));
  }
  function Qr(e) {
    return e[tr] || null;
  }
  var So = [], wt = -1;
  function jn(e) {
    return { current: e };
  }
  function ee(e) {
    0 > wt || (e.current = So[wt], So[wt] = null, wt--);
  }
  function J(e, n) {
    wt++, So[wt] = e.current, e.current = n;
  }
  var Un = {}, Ce = jn(Un), Ue = jn(!1), Jn = Un;
  function St(e, n) {
    var t = e.type.contextTypes;
    if (!t)
      return Un;
    var r = e.stateNode;
    if (r && r.__reactInternalMemoizedUnmaskedChildContext === n)
      return r.__reactInternalMemoizedMaskedChildContext;
    var l = {}, o;
    for (o in t)
      l[o] = n[o];
    return r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = n, e.__reactInternalMemoizedMaskedChildContext = l), l;
  }
  function Ae(e) {
    return e = e.childContextTypes, e != null;
  }
  function Wr() {
    ee(Ue), ee(Ce);
  }
  function Bi(e, n, t) {
    if (Ce.current !== Un)
      throw Error(m(168));
    J(Ce, n), J(Ue, t);
  }
  function Hi(e, n, t) {
    var r = e.stateNode;
    if (n = n.childContextTypes, typeof r.getChildContext != "function")
      return t;
    r = r.getChildContext();
    for (var l in r)
      if (!(l in n))
        throw Error(m(108, X(e) || "Unknown", l));
    return a({}, t, r);
  }
  function Kr(e) {
    return e = (e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext || Un, Jn = Ce.current, J(Ce, e), J(Ue, Ue.current), !0;
  }
  function Qi(e, n, t) {
    var r = e.stateNode;
    if (!r)
      throw Error(m(169));
    t ? (e = Hi(e, n, Jn), r.__reactInternalMemoizedMergedChildContext = e, ee(Ue), ee(Ce), J(Ce, e)) : ee(Ue), J(Ue, t);
  }
  var En = null, Yr = !1, ko = !1;
  function Wi(e) {
    En === null ? En = [e] : En.push(e);
  }
  function Yc(e) {
    Yr = !0, Wi(e);
  }
  function An() {
    if (!ko && En !== null) {
      ko = !0;
      var e = 0, n = W;
      try {
        var t = En;
        for (W = 1; e < t.length; e++) {
          var r = t[e];
          do
            r = r(!0);
          while (r !== null);
        }
        En = null, Yr = !1;
      } catch (l) {
        throw En !== null && (En = En.slice(e + 1)), Yu(Bl, An), l;
      } finally {
        W = n, ko = !1;
      }
    }
    return null;
  }
  var kt = [], Et = 0, Gr = null, Xr = 0, Ze = [], Je = 0, qn = null, _n = 1, Cn = "";
  function bn(e, n) {
    kt[Et++] = Xr, kt[Et++] = Gr, Gr = e, Xr = n;
  }
  function Ki(e, n, t) {
    Ze[Je++] = _n, Ze[Je++] = Cn, Ze[Je++] = qn, qn = e;
    var r = _n;
    e = Cn;
    var l = 32 - sn(r) - 1;
    r &= ~(1 << l), t += 1;
    var o = 32 - sn(n) + l;
    if (30 < o) {
      var u = l - l % 5;
      o = (r & (1 << u) - 1).toString(32), r >>= u, l -= u, _n = 1 << 32 - sn(n) + l | t << l | r, Cn = o + e;
    } else
      _n = 1 << o | t << l | r, Cn = e;
  }
  function Eo(e) {
    e.return !== null && (bn(e, 1), Ki(e, 1, 0));
  }
  function _o(e) {
    for (; e === Gr; )
      Gr = kt[--Et], kt[Et] = null, Xr = kt[--Et], kt[Et] = null;
    for (; e === qn; )
      qn = Ze[--Je], Ze[Je] = null, Cn = Ze[--Je], Ze[Je] = null, _n = Ze[--Je], Ze[Je] = null;
  }
  var Ke = null, Ye = null, ne = !1, cn = null;
  function Yi(e, n) {
    var t = nn(5, null, null, 0);
    t.elementType = "DELETED", t.stateNode = n, t.return = e, n = e.deletions, n === null ? (e.deletions = [t], e.flags |= 16) : n.push(t);
  }
  function Gi(e, n) {
    switch (e.tag) {
      case 5:
        var t = e.type;
        return n = n.nodeType !== 1 || t.toLowerCase() !== n.nodeName.toLowerCase() ? null : n, n !== null ? (e.stateNode = n, Ke = e, Ye = Fn(n.firstChild), !0) : !1;
      case 6:
        return n = e.pendingProps === "" || n.nodeType !== 3 ? null : n, n !== null ? (e.stateNode = n, Ke = e, Ye = null, !0) : !1;
      case 13:
        return n = n.nodeType !== 8 ? null : n, n !== null ? (t = qn !== null ? { id: _n, overflow: Cn } : null, e.memoizedState = { dehydrated: n, treeContext: t, retryLane: 1073741824 }, t = nn(18, null, null, 0), t.stateNode = n, t.return = e, e.child = t, Ke = e, Ye = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Co(e) {
    return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
  }
  function xo(e) {
    if (ne) {
      var n = Ye;
      if (n) {
        var t = n;
        if (!Gi(e, n)) {
          if (Co(e))
            throw Error(m(418));
          n = Fn(t.nextSibling);
          var r = Ke;
          n && Gi(e, n) ? Yi(r, t) : (e.flags = e.flags & -4097 | 2, ne = !1, Ke = e);
        }
      } else {
        if (Co(e))
          throw Error(m(418));
        e.flags = e.flags & -4097 | 2, ne = !1, Ke = e;
      }
    }
  }
  function Xi(e) {
    for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
      e = e.return;
    Ke = e;
  }
  function Zr(e) {
    if (e !== Ke)
      return !1;
    if (!ne)
      return Xi(e), ne = !0, !1;
    var n;
    if ((n = e.tag !== 3) && !(n = e.tag !== 5) && (n = e.type, n = n !== "head" && n !== "body" && !vo(e.type, e.memoizedProps)), n && (n = Ye)) {
      if (Co(e))
        throw Zi(), Error(m(418));
      for (; n; )
        Yi(e, n), n = Fn(n.nextSibling);
    }
    if (Xi(e), e.tag === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e)
        throw Error(m(317));
      e: {
        for (e = e.nextSibling, n = 0; e; ) {
          if (e.nodeType === 8) {
            var t = e.data;
            if (t === "/$") {
              if (n === 0) {
                Ye = Fn(e.nextSibling);
                break e;
              }
              n--;
            } else
              t !== "$" && t !== "$!" && t !== "$?" || n++;
          }
          e = e.nextSibling;
        }
        Ye = null;
      }
    } else
      Ye = Ke ? Fn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Zi() {
    for (var e = Ye; e; )
      e = Fn(e.nextSibling);
  }
  function _t() {
    Ye = Ke = null, ne = !1;
  }
  function No(e) {
    cn === null ? cn = [e] : cn.push(e);
  }
  var Gc = z.ReactCurrentBatchConfig;
  function fn(e, n) {
    if (e && e.defaultProps) {
      n = a({}, n), e = e.defaultProps;
      for (var t in e)
        n[t] === void 0 && (n[t] = e[t]);
      return n;
    }
    return n;
  }
  var Jr = jn(null), qr = null, Ct = null, Po = null;
  function zo() {
    Po = Ct = qr = null;
  }
  function To(e) {
    var n = Jr.current;
    ee(Jr), e._currentValue = n;
  }
  function Lo(e, n, t) {
    for (; e !== null; ) {
      var r = e.alternate;
      if ((e.childLanes & n) !== n ? (e.childLanes |= n, r !== null && (r.childLanes |= n)) : r !== null && (r.childLanes & n) !== n && (r.childLanes |= n), e === t)
        break;
      e = e.return;
    }
  }
  function xt(e, n) {
    qr = e, Po = Ct = null, e = e.dependencies, e !== null && e.firstContext !== null && (e.lanes & n && (Ve = !0), e.firstContext = null);
  }
  function qe(e) {
    var n = e._currentValue;
    if (Po !== e)
      if (e = { context: e, memoizedValue: n, next: null }, Ct === null) {
        if (qr === null)
          throw Error(m(308));
        Ct = e, qr.dependencies = { lanes: 0, firstContext: e };
      } else
        Ct = Ct.next = e;
    return n;
  }
  var et = null;
  function Ro(e) {
    et === null ? et = [e] : et.push(e);
  }
  function Ji(e, n, t, r) {
    var l = n.interleaved;
    return l === null ? (t.next = t, Ro(n)) : (t.next = l.next, l.next = t), n.interleaved = t, xn(e, r);
  }
  function xn(e, n) {
    e.lanes |= n;
    var t = e.alternate;
    for (t !== null && (t.lanes |= n), t = e, e = e.return; e !== null; )
      e.childLanes |= n, t = e.alternate, t !== null && (t.childLanes |= n), t = e, e = e.return;
    return t.tag === 3 ? t.stateNode : null;
  }
  var Vn = !1;
  function Oo(e) {
    e.updateQueue = { baseState: e.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function qi(e, n) {
    e = e.updateQueue, n.updateQueue === e && (n.updateQueue = { baseState: e.baseState, firstBaseUpdate: e.firstBaseUpdate, lastBaseUpdate: e.lastBaseUpdate, shared: e.shared, effects: e.effects });
  }
  function Nn(e, n) {
    return { eventTime: e, lane: n, tag: 0, payload: null, callback: null, next: null };
  }
  function $n(e, n, t) {
    var r = e.updateQueue;
    if (r === null)
      return null;
    if (r = r.shared, U & 2) {
      var l = r.pending;
      return l === null ? n.next = n : (n.next = l.next, l.next = n), r.pending = n, xn(e, t);
    }
    return l = r.interleaved, l === null ? (n.next = n, Ro(r)) : (n.next = l.next, l.next = n), r.interleaved = n, xn(e, t);
  }
  function br(e, n, t) {
    if (n = n.updateQueue, n !== null && (n = n.shared, (t & 4194240) !== 0)) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Wl(e, t);
    }
  }
  function bi(e, n) {
    var t = e.updateQueue, r = e.alternate;
    if (r !== null && (r = r.updateQueue, t === r)) {
      var l = null, o = null;
      if (t = t.firstBaseUpdate, t !== null) {
        do {
          var u = { eventTime: t.eventTime, lane: t.lane, tag: t.tag, payload: t.payload, callback: t.callback, next: null };
          o === null ? l = o = u : o = o.next = u, t = t.next;
        } while (t !== null);
        o === null ? l = o = n : o = o.next = n;
      } else
        l = o = n;
      t = { baseState: r.baseState, firstBaseUpdate: l, lastBaseUpdate: o, shared: r.shared, effects: r.effects }, e.updateQueue = t;
      return;
    }
    e = t.lastBaseUpdate, e === null ? t.firstBaseUpdate = n : e.next = n, t.lastBaseUpdate = n;
  }
  function el(e, n, t, r) {
    var l = e.updateQueue;
    Vn = !1;
    var o = l.firstBaseUpdate, u = l.lastBaseUpdate, i = l.shared.pending;
    if (i !== null) {
      l.shared.pending = null;
      var s = i, p = s.next;
      s.next = null, u === null ? o = p : u.next = p, u = s;
      var y = e.alternate;
      y !== null && (y = y.updateQueue, i = y.lastBaseUpdate, i !== u && (i === null ? y.firstBaseUpdate = p : i.next = p, y.lastBaseUpdate = s));
    }
    if (o !== null) {
      var g = l.baseState;
      u = 0, y = p = s = null, i = o;
      do {
        var h = i.lane, k = i.eventTime;
        if ((r & h) === h) {
          y !== null && (y = y.next = {
            eventTime: k,
            lane: 0,
            tag: i.tag,
            payload: i.payload,
            callback: i.callback,
            next: null
          });
          e: {
            var _ = e, C = i;
            switch (h = n, k = t, C.tag) {
              case 1:
                if (_ = C.payload, typeof _ == "function") {
                  g = _.call(k, g, h);
                  break e;
                }
                g = _;
                break e;
              case 3:
                _.flags = _.flags & -65537 | 128;
              case 0:
                if (_ = C.payload, h = typeof _ == "function" ? _.call(k, g, h) : _, h == null)
                  break e;
                g = a({}, g, h);
                break e;
              case 2:
                Vn = !0;
            }
          }
          i.callback !== null && i.lane !== 0 && (e.flags |= 64, h = l.effects, h === null ? l.effects = [i] : h.push(i));
        } else
          k = { eventTime: k, lane: h, tag: i.tag, payload: i.payload, callback: i.callback, next: null }, y === null ? (p = y = k, s = g) : y = y.next = k, u |= h;
        if (i = i.next, i === null) {
          if (i = l.shared.pending, i === null)
            break;
          h = i, i = h.next, h.next = null, l.lastBaseUpdate = h, l.shared.pending = null;
        }
      } while (1);
      if (y === null && (s = g), l.baseState = s, l.firstBaseUpdate = p, l.lastBaseUpdate = y, n = l.shared.interleaved, n !== null) {
        l = n;
        do
          u |= l.lane, l = l.next;
        while (l !== n);
      } else
        o === null && (l.shared.lanes = 0);
      rt |= u, e.lanes = u, e.memoizedState = g;
    }
  }
  function es(e, n, t) {
    if (e = n.effects, n.effects = null, e !== null)
      for (n = 0; n < e.length; n++) {
        var r = e[n], l = r.callback;
        if (l !== null) {
          if (r.callback = null, r = t, typeof l != "function")
            throw Error(m(191, l));
          l.call(r);
        }
      }
  }
  var ns = new N.Component().refs;
  function Mo(e, n, t, r) {
    n = e.memoizedState, t = t(r, n), t = t == null ? n : a({}, n, t), e.memoizedState = t, e.lanes === 0 && (e.updateQueue.baseState = t);
  }
  var nl = { isMounted: function(e) {
    return (e = e._reactInternals) ? Xn(e) === e : !1;
  }, enqueueSetState: function(e, n, t) {
    e = e._reactInternals;
    var r = Le(), l = Wn(e), o = Nn(r, l);
    o.payload = n, t != null && (o.callback = t), n = $n(e, o, l), n !== null && (mn(n, e, l, r), br(n, e, l));
  }, enqueueReplaceState: function(e, n, t) {
    e = e._reactInternals;
    var r = Le(), l = Wn(e), o = Nn(r, l);
    o.tag = 1, o.payload = n, t != null && (o.callback = t), n = $n(e, o, l), n !== null && (mn(n, e, l, r), br(n, e, l));
  }, enqueueForceUpdate: function(e, n) {
    e = e._reactInternals;
    var t = Le(), r = Wn(e), l = Nn(t, r);
    l.tag = 2, n != null && (l.callback = n), n = $n(e, l, r), n !== null && (mn(n, e, r, t), br(n, e, r));
  } };
  function ts(e, n, t, r, l, o, u) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(r, o, u) : n.prototype && n.prototype.isPureReactComponent ? !Jt(t, r) || !Jt(l, o) : !0;
  }
  function rs(e, n, t) {
    var r = !1, l = Un, o = n.contextType;
    return typeof o == "object" && o !== null ? o = qe(o) : (l = Ae(n) ? Jn : Ce.current, r = n.contextTypes, o = (r = r != null) ? St(e, l) : Un), n = new n(t, o), e.memoizedState = n.state !== null && n.state !== void 0 ? n.state : null, n.updater = nl, e.stateNode = n, n._reactInternals = e, r && (e = e.stateNode, e.__reactInternalMemoizedUnmaskedChildContext = l, e.__reactInternalMemoizedMaskedChildContext = o), n;
  }
  function ls(e, n, t, r) {
    e = n.state, typeof n.componentWillReceiveProps == "function" && n.componentWillReceiveProps(t, r), typeof n.UNSAFE_componentWillReceiveProps == "function" && n.UNSAFE_componentWillReceiveProps(t, r), n.state !== e && nl.enqueueReplaceState(n, n.state, null);
  }
  function Do(e, n, t, r) {
    var l = e.stateNode;
    l.props = t, l.state = e.memoizedState, l.refs = ns, Oo(e);
    var o = n.contextType;
    typeof o == "object" && o !== null ? l.context = qe(o) : (o = Ae(n) ? Jn : Ce.current, l.context = St(e, o)), l.state = e.memoizedState, o = n.getDerivedStateFromProps, typeof o == "function" && (Mo(e, n, o, t), l.state = e.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof l.getSnapshotBeforeUpdate == "function" || typeof l.UNSAFE_componentWillMount != "function" && typeof l.componentWillMount != "function" || (n = l.state, typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount(), n !== l.state && nl.enqueueReplaceState(l, l.state, null), el(e, t, l, r), l.state = e.memoizedState), typeof l.componentDidMount == "function" && (e.flags |= 4194308);
  }
  function lr(e, n, t) {
    if (e = t.ref, e !== null && typeof e != "function" && typeof e != "object") {
      if (t._owner) {
        if (t = t._owner, t) {
          if (t.tag !== 1)
            throw Error(m(309));
          var r = t.stateNode;
        }
        if (!r)
          throw Error(m(147, e));
        var l = r, o = "" + e;
        return n !== null && n.ref !== null && typeof n.ref == "function" && n.ref._stringRef === o ? n.ref : (n = function(u) {
          var i = l.refs;
          i === ns && (i = l.refs = {}), u === null ? delete i[o] : i[o] = u;
        }, n._stringRef = o, n);
      }
      if (typeof e != "string")
        throw Error(m(284));
      if (!t._owner)
        throw Error(m(290, e));
    }
    return e;
  }
  function tl(e, n) {
    throw e = Object.prototype.toString.call(n), Error(m(31, e === "[object Object]" ? "object with keys {" + Object.keys(n).join(", ") + "}" : e));
  }
  function os(e) {
    var n = e._init;
    return n(e._payload);
  }
  function us(e) {
    function n(f, c) {
      if (e) {
        var d = f.deletions;
        d === null ? (f.deletions = [c], f.flags |= 16) : d.push(c);
      }
    }
    function t(f, c) {
      if (!e)
        return null;
      for (; c !== null; )
        n(f, c), c = c.sibling;
      return null;
    }
    function r(f, c) {
      for (f = /* @__PURE__ */ new Map(); c !== null; )
        c.key !== null ? f.set(c.key, c) : f.set(c.index, c), c = c.sibling;
      return f;
    }
    function l(f, c) {
      return f = Yn(f, c), f.index = 0, f.sibling = null, f;
    }
    function o(f, c, d) {
      return f.index = d, e ? (d = f.alternate, d !== null ? (d = d.index, d < c ? (f.flags |= 2, c) : d) : (f.flags |= 2, c)) : (f.flags |= 1048576, c);
    }
    function u(f) {
      return e && f.alternate === null && (f.flags |= 2), f;
    }
    function i(f, c, d, w) {
      return c === null || c.tag !== 6 ? (c = yu(d, f.mode, w), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function s(f, c, d, w) {
      var x = d.type;
      return x === V ? y(f, c, d.props.children, w, d.key) : c !== null && (c.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Fe && os(x) === c.type) ? (w = l(c, d.props), w.ref = lr(f, c, d), w.return = f, w) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, c, d), w.return = f, w);
    }
    function p(f, c, d, w) {
      return c === null || c.tag !== 4 || c.stateNode.containerInfo !== d.containerInfo || c.stateNode.implementation !== d.implementation ? (c = gu(d, f.mode, w), c.return = f, c) : (c = l(c, d.children || []), c.return = f, c);
    }
    function y(f, c, d, w, x) {
      return c === null || c.tag !== 7 ? (c = it(d, f.mode, w, x), c.return = f, c) : (c = l(c, d), c.return = f, c);
    }
    function g(f, c, d) {
      if (typeof c == "string" && c !== "" || typeof c == "number")
        return c = yu("" + c, f.mode, d), c.return = f, c;
      if (typeof c == "object" && c !== null) {
        switch (c.$$typeof) {
          case I:
            return d = kl(c.type, c.key, c.props, null, f.mode, d), d.ref = lr(f, null, c), d.return = f, d;
          case j:
            return c = gu(c, f.mode, d), c.return = f, c;
          case Fe:
            var w = c._init;
            return g(f, w(c._payload), d);
        }
        if (Mt(c) || R(c))
          return c = it(c, f.mode, d, null), c.return = f, c;
        tl(f, c);
      }
      return null;
    }
    function h(f, c, d, w) {
      var x = c !== null ? c.key : null;
      if (typeof d == "string" && d !== "" || typeof d == "number")
        return x !== null ? null : i(f, c, "" + d, w);
      if (typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case I:
            return d.key === x ? s(f, c, d, w) : null;
          case j:
            return d.key === x ? p(f, c, d, w) : null;
          case Fe:
            return x = d._init, h(
              f,
              c,
              x(d._payload),
              w
            );
        }
        if (Mt(d) || R(d))
          return x !== null ? null : y(f, c, d, w, null);
        tl(f, d);
      }
      return null;
    }
    function k(f, c, d, w, x) {
      if (typeof w == "string" && w !== "" || typeof w == "number")
        return f = f.get(d) || null, i(c, f, "" + w, x);
      if (typeof w == "object" && w !== null) {
        switch (w.$$typeof) {
          case I:
            return f = f.get(w.key === null ? d : w.key) || null, s(c, f, w, x);
          case j:
            return f = f.get(w.key === null ? d : w.key) || null, p(c, f, w, x);
          case Fe:
            var T = w._init;
            return k(f, c, d, T(w._payload), x);
        }
        if (Mt(w) || R(w))
          return f = f.get(d) || null, y(c, f, w, x, null);
        tl(c, w);
      }
      return null;
    }
    function _(f, c, d, w) {
      for (var x = null, T = null, L = c, O = c = 0, Se = null; L !== null && O < d.length; O++) {
        L.index > O ? (Se = L, L = null) : Se = L.sibling;
        var A = h(f, L, d[O], w);
        if (A === null) {
          L === null && (L = Se);
          break;
        }
        e && L && A.alternate === null && n(f, L), c = o(A, c, O), T === null ? x = A : T.sibling = A, T = A, L = Se;
      }
      if (O === d.length)
        return t(f, L), ne && bn(f, O), x;
      if (L === null) {
        for (; O < d.length; O++)
          L = g(f, d[O], w), L !== null && (c = o(L, c, O), T === null ? x = L : T.sibling = L, T = L);
        return ne && bn(f, O), x;
      }
      for (L = r(f, L); O < d.length; O++)
        Se = k(L, f, O, d[O], w), Se !== null && (e && Se.alternate !== null && L.delete(Se.key === null ? O : Se.key), c = o(Se, c, O), T === null ? x = Se : T.sibling = Se, T = Se);
      return e && L.forEach(function(Gn) {
        return n(f, Gn);
      }), ne && bn(f, O), x;
    }
    function C(f, c, d, w) {
      var x = R(d);
      if (typeof x != "function")
        throw Error(m(150));
      if (d = x.call(d), d == null)
        throw Error(m(151));
      for (var T = x = null, L = c, O = c = 0, Se = null, A = d.next(); L !== null && !A.done; O++, A = d.next()) {
        L.index > O ? (Se = L, L = null) : Se = L.sibling;
        var Gn = h(f, L, A.value, w);
        if (Gn === null) {
          L === null && (L = Se);
          break;
        }
        e && L && Gn.alternate === null && n(f, L), c = o(Gn, c, O), T === null ? x = Gn : T.sibling = Gn, T = Gn, L = Se;
      }
      if (A.done)
        return t(
          f,
          L
        ), ne && bn(f, O), x;
      if (L === null) {
        for (; !A.done; O++, A = d.next())
          A = g(f, A.value, w), A !== null && (c = o(A, c, O), T === null ? x = A : T.sibling = A, T = A);
        return ne && bn(f, O), x;
      }
      for (L = r(f, L); !A.done; O++, A = d.next())
        A = k(L, f, O, A.value, w), A !== null && (e && A.alternate !== null && L.delete(A.key === null ? O : A.key), c = o(A, c, O), T === null ? x = A : T.sibling = A, T = A);
      return e && L.forEach(function(zf) {
        return n(f, zf);
      }), ne && bn(f, O), x;
    }
    function de(f, c, d, w) {
      if (typeof d == "object" && d !== null && d.type === V && d.key === null && (d = d.props.children), typeof d == "object" && d !== null) {
        switch (d.$$typeof) {
          case I:
            e: {
              for (var x = d.key, T = c; T !== null; ) {
                if (T.key === x) {
                  if (x = d.type, x === V) {
                    if (T.tag === 7) {
                      t(f, T.sibling), c = l(T, d.props.children), c.return = f, f = c;
                      break e;
                    }
                  } else if (T.elementType === x || typeof x == "object" && x !== null && x.$$typeof === Fe && os(x) === T.type) {
                    t(f, T.sibling), c = l(T, d.props), c.ref = lr(f, T, d), c.return = f, f = c;
                    break e;
                  }
                  t(f, T);
                  break;
                } else
                  n(f, T);
                T = T.sibling;
              }
              d.type === V ? (c = it(d.props.children, f.mode, w, d.key), c.return = f, f = c) : (w = kl(d.type, d.key, d.props, null, f.mode, w), w.ref = lr(f, c, d), w.return = f, f = w);
            }
            return u(f);
          case j:
            e: {
              for (T = d.key; c !== null; ) {
                if (c.key === T)
                  if (c.tag === 4 && c.stateNode.containerInfo === d.containerInfo && c.stateNode.implementation === d.implementation) {
                    t(f, c.sibling), c = l(c, d.children || []), c.return = f, f = c;
                    break e;
                  } else {
                    t(f, c);
                    break;
                  }
                else
                  n(f, c);
                c = c.sibling;
              }
              c = gu(d, f.mode, w), c.return = f, f = c;
            }
            return u(f);
          case Fe:
            return T = d._init, de(f, c, T(d._payload), w);
        }
        if (Mt(d))
          return _(f, c, d, w);
        if (R(d))
          return C(f, c, d, w);
        tl(f, d);
      }
      return typeof d == "string" && d !== "" || typeof d == "number" ? (d = "" + d, c !== null && c.tag === 6 ? (t(f, c.sibling), c = l(c, d), c.return = f, f = c) : (t(f, c), c = yu(d, f.mode, w), c.return = f, f = c), u(f)) : t(f, c);
    }
    return de;
  }
  var Nt = us(!0), is = us(!1), or = {}, gn = jn(or), ur = jn(or), ir = jn(or);
  function nt(e) {
    if (e === or)
      throw Error(m(174));
    return e;
  }
  function Io(e, n) {
    switch (J(ir, n), J(ur, e), J(gn, or), e = n.nodeType, e) {
      case 9:
      case 11:
        n = (n = n.documentElement) ? n.namespaceURI : Ml(null, "");
        break;
      default:
        e = e === 8 ? n.parentNode : n, n = e.namespaceURI || null, e = e.tagName, n = Ml(n, e);
    }
    ee(gn), J(gn, n);
  }
  function Pt() {
    ee(gn), ee(ur), ee(ir);
  }
  function ss(e) {
    nt(ir.current);
    var n = nt(gn.current), t = Ml(n, e.type);
    n !== t && (J(ur, e), J(gn, t));
  }
  function Fo(e) {
    ur.current === e && (ee(gn), ee(ur));
  }
  var re = jn(0);
  function rl(e) {
    for (var n = e; n !== null; ) {
      if (n.tag === 13) {
        var t = n.memoizedState;
        if (t !== null && (t = t.dehydrated, t === null || t.data === "$?" || t.data === "$!"))
          return n;
      } else if (n.tag === 19 && n.memoizedProps.revealOrder !== void 0) {
        if (n.flags & 128)
          return n;
      } else if (n.child !== null) {
        n.child.return = n, n = n.child;
        continue;
      }
      if (n === e)
        break;
      for (; n.sibling === null; ) {
        if (n.return === null || n.return === e)
          return null;
        n = n.return;
      }
      n.sibling.return = n.return, n = n.sibling;
    }
    return null;
  }
  var jo = [];
  function Uo() {
    for (var e = 0; e < jo.length; e++)
      jo[e]._workInProgressVersionPrimary = null;
    jo.length = 0;
  }
  var ll = z.ReactCurrentDispatcher, Ao = z.ReactCurrentBatchConfig, tt = 0, le = null, ve = null, ge = null, ol = !1, sr = !1, ar = 0, Xc = 0;
  function xe() {
    throw Error(m(321));
  }
  function Vo(e, n) {
    if (n === null)
      return !1;
    for (var t = 0; t < n.length && t < e.length; t++)
      if (!an(e[t], n[t]))
        return !1;
    return !0;
  }
  function $o(e, n, t, r, l, o) {
    if (tt = o, le = n, n.memoizedState = null, n.updateQueue = null, n.lanes = 0, ll.current = e === null || e.memoizedState === null ? bc : ef, e = t(r, l), sr) {
      o = 0;
      do {
        if (sr = !1, ar = 0, 25 <= o)
          throw Error(m(301));
        o += 1, ge = ve = null, n.updateQueue = null, ll.current = nf, e = t(r, l);
      } while (sr);
    }
    if (ll.current = sl, n = ve !== null && ve.next !== null, tt = 0, ge = ve = le = null, ol = !1, n)
      throw Error(m(300));
    return e;
  }
  function Bo() {
    var e = ar !== 0;
    return ar = 0, e;
  }
  function wn() {
    var e = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return ge === null ? le.memoizedState = ge = e : ge = ge.next = e, ge;
  }
  function be() {
    if (ve === null) {
      var e = le.alternate;
      e = e !== null ? e.memoizedState : null;
    } else
      e = ve.next;
    var n = ge === null ? le.memoizedState : ge.next;
    if (n !== null)
      ge = n, ve = e;
    else {
      if (e === null)
        throw Error(m(310));
      ve = e, e = { memoizedState: ve.memoizedState, baseState: ve.baseState, baseQueue: ve.baseQueue, queue: ve.queue, next: null }, ge === null ? le.memoizedState = ge = e : ge = ge.next = e;
    }
    return ge;
  }
  function cr(e, n) {
    return typeof n == "function" ? n(e) : n;
  }
  function Ho(e) {
    var n = be(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = ve, l = r.baseQueue, o = t.pending;
    if (o !== null) {
      if (l !== null) {
        var u = l.next;
        l.next = o.next, o.next = u;
      }
      r.baseQueue = l = o, t.pending = null;
    }
    if (l !== null) {
      o = l.next, r = r.baseState;
      var i = u = null, s = null, p = o;
      do {
        var y = p.lane;
        if ((tt & y) === y)
          s !== null && (s = s.next = { lane: 0, action: p.action, hasEagerState: p.hasEagerState, eagerState: p.eagerState, next: null }), r = p.hasEagerState ? p.eagerState : e(r, p.action);
        else {
          var g = {
            lane: y,
            action: p.action,
            hasEagerState: p.hasEagerState,
            eagerState: p.eagerState,
            next: null
          };
          s === null ? (i = s = g, u = r) : s = s.next = g, le.lanes |= y, rt |= y;
        }
        p = p.next;
      } while (p !== null && p !== o);
      s === null ? u = r : s.next = i, an(r, n.memoizedState) || (Ve = !0), n.memoizedState = r, n.baseState = u, n.baseQueue = s, t.lastRenderedState = r;
    }
    if (e = t.interleaved, e !== null) {
      l = e;
      do
        o = l.lane, le.lanes |= o, rt |= o, l = l.next;
      while (l !== e);
    } else
      l === null && (t.lanes = 0);
    return [n.memoizedState, t.dispatch];
  }
  function Qo(e) {
    var n = be(), t = n.queue;
    if (t === null)
      throw Error(m(311));
    t.lastRenderedReducer = e;
    var r = t.dispatch, l = t.pending, o = n.memoizedState;
    if (l !== null) {
      t.pending = null;
      var u = l = l.next;
      do
        o = e(o, u.action), u = u.next;
      while (u !== l);
      an(o, n.memoizedState) || (Ve = !0), n.memoizedState = o, n.baseQueue === null && (n.baseState = o), t.lastRenderedState = o;
    }
    return [o, r];
  }
  function as() {
  }
  function cs(e, n) {
    var t = le, r = be(), l = n(), o = !an(r.memoizedState, l);
    if (o && (r.memoizedState = l, Ve = !0), r = r.queue, Wo(ps.bind(null, t, r, e), [e]), r.getSnapshot !== n || o || ge !== null && ge.memoizedState.tag & 1) {
      if (t.flags |= 2048, fr(9, ds.bind(null, t, r, l, n), void 0, null), we === null)
        throw Error(m(349));
      tt & 30 || fs(t, n, l);
    }
    return l;
  }
  function fs(e, n, t) {
    e.flags |= 16384, e = { getSnapshot: n, value: t }, n = le.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, le.updateQueue = n, n.stores = [e]) : (t = n.stores, t === null ? n.stores = [e] : t.push(e));
  }
  function ds(e, n, t, r) {
    n.value = t, n.getSnapshot = r, ms(n) && hs(e);
  }
  function ps(e, n, t) {
    return t(function() {
      ms(n) && hs(e);
    });
  }
  function ms(e) {
    var n = e.getSnapshot;
    e = e.value;
    try {
      var t = n();
      return !an(e, t);
    } catch {
      return !0;
    }
  }
  function hs(e) {
    var n = xn(e, 1);
    n !== null && mn(n, e, 1, -1);
  }
  function vs(e) {
    var n = wn();
    return typeof e == "function" && (e = e()), n.memoizedState = n.baseState = e, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: cr, lastRenderedState: e }, n.queue = e, e = e.dispatch = qc.bind(null, le, e), [n.memoizedState, e];
  }
  function fr(e, n, t, r) {
    return e = { tag: e, create: n, destroy: t, deps: r, next: null }, n = le.updateQueue, n === null ? (n = { lastEffect: null, stores: null }, le.updateQueue = n, n.lastEffect = e.next = e) : (t = n.lastEffect, t === null ? n.lastEffect = e.next = e : (r = t.next, t.next = e, e.next = r, n.lastEffect = e)), e;
  }
  function ys() {
    return be().memoizedState;
  }
  function ul(e, n, t, r) {
    var l = wn();
    le.flags |= e, l.memoizedState = fr(1 | n, t, void 0, r === void 0 ? null : r);
  }
  function il(e, n, t, r) {
    var l = be();
    r = r === void 0 ? null : r;
    var o = void 0;
    if (ve !== null) {
      var u = ve.memoizedState;
      if (o = u.destroy, r !== null && Vo(r, u.deps)) {
        l.memoizedState = fr(n, t, o, r);
        return;
      }
    }
    le.flags |= e, l.memoizedState = fr(1 | n, t, o, r);
  }
  function gs(e, n) {
    return ul(8390656, 8, e, n);
  }
  function Wo(e, n) {
    return il(2048, 8, e, n);
  }
  function ws(e, n) {
    return il(4, 2, e, n);
  }
  function Ss(e, n) {
    return il(4, 4, e, n);
  }
  function ks(e, n) {
    if (typeof n == "function")
      return e = e(), n(e), function() {
        n(null);
      };
    if (n != null)
      return e = e(), n.current = e, function() {
        n.current = null;
      };
  }
  function Es(e, n, t) {
    return t = t != null ? t.concat([e]) : null, il(4, 4, ks.bind(null, n, e), t);
  }
  function Ko() {
  }
  function _s(e, n) {
    var t = be();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (t.memoizedState = [e, n], e);
  }
  function Cs(e, n) {
    var t = be();
    n = n === void 0 ? null : n;
    var r = t.memoizedState;
    return r !== null && n !== null && Vo(n, r[1]) ? r[0] : (e = e(), t.memoizedState = [e, n], e);
  }
  function xs(e, n, t) {
    return tt & 21 ? (an(t, n) || (t = Ju(), le.lanes |= t, rt |= t, e.baseState = !0), n) : (e.baseState && (e.baseState = !1, Ve = !0), e.memoizedState = t);
  }
  function Zc(e, n) {
    var t = W;
    W = t !== 0 && 4 > t ? t : 4, e(!0);
    var r = Ao.transition;
    Ao.transition = {};
    try {
      e(!1), n();
    } finally {
      W = t, Ao.transition = r;
    }
  }
  function Ns() {
    return be().memoizedState;
  }
  function Jc(e, n, t) {
    var r = Wn(e);
    if (t = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null }, Ps(e))
      zs(n, t);
    else if (t = Ji(e, n, t, r), t !== null) {
      var l = Le();
      mn(t, e, r, l), Ts(t, n, r);
    }
  }
  function qc(e, n, t) {
    var r = Wn(e), l = { lane: r, action: t, hasEagerState: !1, eagerState: null, next: null };
    if (Ps(e))
      zs(n, l);
    else {
      var o = e.alternate;
      if (e.lanes === 0 && (o === null || o.lanes === 0) && (o = n.lastRenderedReducer, o !== null))
        try {
          var u = n.lastRenderedState, i = o(u, t);
          if (l.hasEagerState = !0, l.eagerState = i, an(i, u)) {
            var s = n.interleaved;
            s === null ? (l.next = l, Ro(n)) : (l.next = s.next, s.next = l), n.interleaved = l;
            return;
          }
        } catch {
        } finally {
        }
      t = Ji(e, n, l, r), t !== null && (l = Le(), mn(t, e, r, l), Ts(t, n, r));
    }
  }
  function Ps(e) {
    var n = e.alternate;
    return e === le || n !== null && n === le;
  }
  function zs(e, n) {
    sr = ol = !0;
    var t = e.pending;
    t === null ? n.next = n : (n.next = t.next, t.next = n), e.pending = n;
  }
  function Ts(e, n, t) {
    if (t & 4194240) {
      var r = n.lanes;
      r &= e.pendingLanes, t |= r, n.lanes = t, Wl(e, t);
    }
  }
  var sl = { readContext: qe, useCallback: xe, useContext: xe, useEffect: xe, useImperativeHandle: xe, useInsertionEffect: xe, useLayoutEffect: xe, useMemo: xe, useReducer: xe, useRef: xe, useState: xe, useDebugValue: xe, useDeferredValue: xe, useTransition: xe, useMutableSource: xe, useSyncExternalStore: xe, useId: xe, unstable_isNewReconciler: !1 }, bc = { readContext: qe, useCallback: function(e, n) {
    return wn().memoizedState = [e, n === void 0 ? null : n], e;
  }, useContext: qe, useEffect: gs, useImperativeHandle: function(e, n, t) {
    return t = t != null ? t.concat([e]) : null, ul(
      4194308,
      4,
      ks.bind(null, n, e),
      t
    );
  }, useLayoutEffect: function(e, n) {
    return ul(4194308, 4, e, n);
  }, useInsertionEffect: function(e, n) {
    return ul(4, 2, e, n);
  }, useMemo: function(e, n) {
    var t = wn();
    return n = n === void 0 ? null : n, e = e(), t.memoizedState = [e, n], e;
  }, useReducer: function(e, n, t) {
    var r = wn();
    return n = t !== void 0 ? t(n) : n, r.memoizedState = r.baseState = n, e = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: e, lastRenderedState: n }, r.queue = e, e = e.dispatch = Jc.bind(null, le, e), [r.memoizedState, e];
  }, useRef: function(e) {
    var n = wn();
    return e = { current: e }, n.memoizedState = e;
  }, useState: vs, useDebugValue: Ko, useDeferredValue: function(e) {
    return wn().memoizedState = e;
  }, useTransition: function() {
    var e = vs(!1), n = e[0];
    return e = Zc.bind(null, e[1]), wn().memoizedState = e, [n, e];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(e, n, t) {
    var r = le, l = wn();
    if (ne) {
      if (t === void 0)
        throw Error(m(407));
      t = t();
    } else {
      if (t = n(), we === null)
        throw Error(m(349));
      tt & 30 || fs(r, n, t);
    }
    l.memoizedState = t;
    var o = { value: t, getSnapshot: n };
    return l.queue = o, gs(ps.bind(
      null,
      r,
      o,
      e
    ), [e]), r.flags |= 2048, fr(9, ds.bind(null, r, o, t, n), void 0, null), t;
  }, useId: function() {
    var e = wn(), n = we.identifierPrefix;
    if (ne) {
      var t = Cn, r = _n;
      t = (r & ~(1 << 32 - sn(r) - 1)).toString(32) + t, n = ":" + n + "R" + t, t = ar++, 0 < t && (n += "H" + t.toString(32)), n += ":";
    } else
      t = Xc++, n = ":" + n + "r" + t.toString(32) + ":";
    return e.memoizedState = n;
  }, unstable_isNewReconciler: !1 }, ef = {
    readContext: qe,
    useCallback: _s,
    useContext: qe,
    useEffect: Wo,
    useImperativeHandle: Es,
    useInsertionEffect: ws,
    useLayoutEffect: Ss,
    useMemo: Cs,
    useReducer: Ho,
    useRef: ys,
    useState: function() {
      return Ho(cr);
    },
    useDebugValue: Ko,
    useDeferredValue: function(e) {
      var n = be();
      return xs(n, ve.memoizedState, e);
    },
    useTransition: function() {
      var e = Ho(cr)[0], n = be().memoizedState;
      return [e, n];
    },
    useMutableSource: as,
    useSyncExternalStore: cs,
    useId: Ns,
    unstable_isNewReconciler: !1
  }, nf = { readContext: qe, useCallback: _s, useContext: qe, useEffect: Wo, useImperativeHandle: Es, useInsertionEffect: ws, useLayoutEffect: Ss, useMemo: Cs, useReducer: Qo, useRef: ys, useState: function() {
    return Qo(cr);
  }, useDebugValue: Ko, useDeferredValue: function(e) {
    var n = be();
    return ve === null ? n.memoizedState = e : xs(n, ve.memoizedState, e);
  }, useTransition: function() {
    var e = Qo(cr)[0], n = be().memoizedState;
    return [e, n];
  }, useMutableSource: as, useSyncExternalStore: cs, useId: Ns, unstable_isNewReconciler: !1 };
  function zt(e, n) {
    try {
      var t = "", r = n;
      do
        t += Z(r), r = r.return;
      while (r);
      var l = t;
    } catch (o) {
      l = `
Error generating stack: ` + o.message + `
` + o.stack;
    }
    return { value: e, source: n, stack: l, digest: null };
  }
  function Yo(e, n, t) {
    return { value: e, source: null, stack: t ?? null, digest: n ?? null };
  }
  function Go(e, n) {
    try {
      console.error(n.value);
    } catch (t) {
      setTimeout(function() {
        throw t;
      });
    }
  }
  var tf = typeof WeakMap == "function" ? WeakMap : Map;
  function Ls(e, n, t) {
    t = Nn(-1, t), t.tag = 3, t.payload = { element: null };
    var r = n.value;
    return t.callback = function() {
      hl || (hl = !0, au = r), Go(e, n);
    }, t;
  }
  function Rs(e, n, t) {
    t = Nn(-1, t), t.tag = 3;
    var r = e.type.getDerivedStateFromError;
    if (typeof r == "function") {
      var l = n.value;
      t.payload = function() {
        return r(l);
      }, t.callback = function() {
        Go(e, n);
      };
    }
    var o = e.stateNode;
    return o !== null && typeof o.componentDidCatch == "function" && (t.callback = function() {
      Go(e, n), typeof r != "function" && (Hn === null ? Hn = /* @__PURE__ */ new Set([this]) : Hn.add(this));
      var u = n.stack;
      this.componentDidCatch(n.value, { componentStack: u !== null ? u : "" });
    }), t;
  }
  function Os(e, n, t) {
    var r = e.pingCache;
    if (r === null) {
      r = e.pingCache = new tf();
      var l = /* @__PURE__ */ new Set();
      r.set(n, l);
    } else
      l = r.get(n), l === void 0 && (l = /* @__PURE__ */ new Set(), r.set(n, l));
    l.has(t) || (l.add(t), e = yf.bind(null, e, n, t), n.then(e, e));
  }
  function Ms(e) {
    do {
      var n;
      if ((n = e.tag === 13) && (n = e.memoizedState, n = n !== null ? n.dehydrated !== null : !0), n)
        return e;
      e = e.return;
    } while (e !== null);
    return null;
  }
  function Ds(e, n, t, r, l) {
    return e.mode & 1 ? (e.flags |= 65536, e.lanes = l, e) : (e === n ? e.flags |= 65536 : (e.flags |= 128, t.flags |= 131072, t.flags &= -52805, t.tag === 1 && (t.alternate === null ? t.tag = 17 : (n = Nn(-1, 1), n.tag = 2, $n(t, n, 1))), t.lanes |= 1), e);
  }
  var rf = z.ReactCurrentOwner, Ve = !1;
  function Te(e, n, t, r) {
    n.child = e === null ? is(n, null, t, r) : Nt(n, e.child, t, r);
  }
  function Is(e, n, t, r, l) {
    t = t.render;
    var o = n.ref;
    return xt(n, l), r = $o(e, n, t, r, o, l), t = Bo(), e !== null && !Ve ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Pn(e, n, l)) : (ne && t && Eo(n), n.flags |= 1, Te(e, n, r, l), n.child);
  }
  function Fs(e, n, t, r, l) {
    if (e === null) {
      var o = t.type;
      return typeof o == "function" && !vu(o) && o.defaultProps === void 0 && t.compare === null && t.defaultProps === void 0 ? (n.tag = 15, n.type = o, js(e, n, o, r, l)) : (e = kl(t.type, null, r, n, n.mode, l), e.ref = n.ref, e.return = n, n.child = e);
    }
    if (o = e.child, !(e.lanes & l)) {
      var u = o.memoizedProps;
      if (t = t.compare, t = t !== null ? t : Jt, t(u, r) && e.ref === n.ref)
        return Pn(e, n, l);
    }
    return n.flags |= 1, e = Yn(o, r), e.ref = n.ref, e.return = n, n.child = e;
  }
  function js(e, n, t, r, l) {
    if (e !== null) {
      var o = e.memoizedProps;
      if (Jt(o, r) && e.ref === n.ref)
        if (Ve = !1, n.pendingProps = r = o, (e.lanes & l) !== 0)
          e.flags & 131072 && (Ve = !0);
        else
          return n.lanes = e.lanes, Pn(e, n, l);
    }
    return Xo(e, n, t, r, l);
  }
  function Us(e, n, t) {
    var r = n.pendingProps, l = r.children, o = e !== null ? e.memoizedState : null;
    if (r.mode === "hidden")
      if (!(n.mode & 1))
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, J(Lt, Ge), Ge |= t;
      else {
        if (!(t & 1073741824))
          return e = o !== null ? o.baseLanes | t : t, n.lanes = n.childLanes = 1073741824, n.memoizedState = { baseLanes: e, cachePool: null, transitions: null }, n.updateQueue = null, J(Lt, Ge), Ge |= e, null;
        n.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, r = o !== null ? o.baseLanes : t, J(Lt, Ge), Ge |= r;
      }
    else
      o !== null ? (r = o.baseLanes | t, n.memoizedState = null) : r = t, J(Lt, Ge), Ge |= r;
    return Te(e, n, l, t), n.child;
  }
  function As(e, n) {
    var t = n.ref;
    (e === null && t !== null || e !== null && e.ref !== t) && (n.flags |= 512, n.flags |= 2097152);
  }
  function Xo(e, n, t, r, l) {
    var o = Ae(t) ? Jn : Ce.current;
    return o = St(n, o), xt(n, l), t = $o(e, n, t, r, o, l), r = Bo(), e !== null && !Ve ? (n.updateQueue = e.updateQueue, n.flags &= -2053, e.lanes &= ~l, Pn(e, n, l)) : (ne && r && Eo(n), n.flags |= 1, Te(e, n, t, l), n.child);
  }
  function Vs(e, n, t, r, l) {
    if (Ae(t)) {
      var o = !0;
      Kr(n);
    } else
      o = !1;
    if (xt(n, l), n.stateNode === null)
      cl(e, n), rs(n, t, r), Do(n, t, r, l), r = !0;
    else if (e === null) {
      var u = n.stateNode, i = n.memoizedProps;
      u.props = i;
      var s = u.context, p = t.contextType;
      typeof p == "object" && p !== null ? p = qe(p) : (p = Ae(t) ? Jn : Ce.current, p = St(n, p));
      var y = t.getDerivedStateFromProps, g = typeof y == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      g || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== r || s !== p) && ls(n, u, r, p), Vn = !1;
      var h = n.memoizedState;
      u.state = h, el(n, r, u, l), s = n.memoizedState, i !== r || h !== s || Ue.current || Vn ? (typeof y == "function" && (Mo(n, t, y, r), s = n.memoizedState), (i = Vn || ts(n, t, i, r, h, s, p)) ? (g || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (n.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), n.memoizedProps = r, n.memoizedState = s), u.props = r, u.state = s, u.context = p, r = i) : (typeof u.componentDidMount == "function" && (n.flags |= 4194308), r = !1);
    } else {
      u = n.stateNode, qi(e, n), i = n.memoizedProps, p = n.type === n.elementType ? i : fn(n.type, i), u.props = p, g = n.pendingProps, h = u.context, s = t.contextType, typeof s == "object" && s !== null ? s = qe(s) : (s = Ae(t) ? Jn : Ce.current, s = St(n, s));
      var k = t.getDerivedStateFromProps;
      (y = typeof k == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (i !== g || h !== s) && ls(n, u, r, s), Vn = !1, h = n.memoizedState, u.state = h, el(n, r, u, l);
      var _ = n.memoizedState;
      i !== g || h !== _ || Ue.current || Vn ? (typeof k == "function" && (Mo(n, t, k, r), _ = n.memoizedState), (p = Vn || ts(n, t, p, r, h, _, s) || !1) ? (y || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(r, _, s), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(r, _, s)), typeof u.componentDidUpdate == "function" && (n.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (n.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), n.memoizedProps = r, n.memoizedState = _), u.props = r, u.state = _, u.context = s, r = p) : (typeof u.componentDidUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || i === e.memoizedProps && h === e.memoizedState || (n.flags |= 1024), r = !1);
    }
    return Zo(e, n, t, r, o, l);
  }
  function Zo(e, n, t, r, l, o) {
    As(e, n);
    var u = (n.flags & 128) !== 0;
    if (!r && !u)
      return l && Qi(n, t, !1), Pn(e, n, o);
    r = n.stateNode, rf.current = n;
    var i = u && typeof t.getDerivedStateFromError != "function" ? null : r.render();
    return n.flags |= 1, e !== null && u ? (n.child = Nt(n, e.child, null, o), n.child = Nt(n, null, i, o)) : Te(e, n, i, o), n.memoizedState = r.state, l && Qi(n, t, !0), n.child;
  }
  function $s(e) {
    var n = e.stateNode;
    n.pendingContext ? Bi(e, n.pendingContext, n.pendingContext !== n.context) : n.context && Bi(e, n.context, !1), Io(e, n.containerInfo);
  }
  function Bs(e, n, t, r, l) {
    return _t(), No(l), n.flags |= 256, Te(e, n, t, r), n.child;
  }
  var Jo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function qo(e) {
    return { baseLanes: e, cachePool: null, transitions: null };
  }
  function Hs(e, n, t) {
    var r = n.pendingProps, l = re.current, o = !1, u = (n.flags & 128) !== 0, i;
    if ((i = u) || (i = e !== null && e.memoizedState === null ? !1 : (l & 2) !== 0), i ? (o = !0, n.flags &= -129) : (e === null || e.memoizedState !== null) && (l |= 1), J(re, l & 1), e === null)
      return xo(n), e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null) ? (n.mode & 1 ? e.data === "$!" ? n.lanes = 8 : n.lanes = 1073741824 : n.lanes = 1, null) : (u = r.children, e = r.fallback, o ? (r = n.mode, o = n.child, u = { mode: "hidden", children: u }, !(r & 1) && o !== null ? (o.childLanes = 0, o.pendingProps = u) : o = El(u, r, 0, null), e = it(e, r, t, null), o.return = n, e.return = n, o.sibling = e, n.child = o, n.child.memoizedState = qo(t), n.memoizedState = Jo, e) : bo(n, u));
    if (l = e.memoizedState, l !== null && (i = l.dehydrated, i !== null))
      return lf(e, n, u, r, i, l, t);
    if (o) {
      o = r.fallback, u = n.mode, l = e.child, i = l.sibling;
      var s = { mode: "hidden", children: r.children };
      return !(u & 1) && n.child !== l ? (r = n.child, r.childLanes = 0, r.pendingProps = s, n.deletions = null) : (r = Yn(l, s), r.subtreeFlags = l.subtreeFlags & 14680064), i !== null ? o = Yn(i, o) : (o = it(o, u, t, null), o.flags |= 2), o.return = n, r.return = n, r.sibling = o, n.child = r, r = o, o = n.child, u = e.child.memoizedState, u = u === null ? qo(t) : { baseLanes: u.baseLanes | t, cachePool: null, transitions: u.transitions }, o.memoizedState = u, o.childLanes = e.childLanes & ~t, n.memoizedState = Jo, r;
    }
    return o = e.child, e = o.sibling, r = Yn(o, { mode: "visible", children: r.children }), !(n.mode & 1) && (r.lanes = t), r.return = n, r.sibling = null, e !== null && (t = n.deletions, t === null ? (n.deletions = [e], n.flags |= 16) : t.push(e)), n.child = r, n.memoizedState = null, r;
  }
  function bo(e, n) {
    return n = El({ mode: "visible", children: n }, e.mode, 0, null), n.return = e, e.child = n;
  }
  function al(e, n, t, r) {
    return r !== null && No(r), Nt(n, e.child, null, t), e = bo(n, n.pendingProps.children), e.flags |= 2, n.memoizedState = null, e;
  }
  function lf(e, n, t, r, l, o, u) {
    if (t)
      return n.flags & 256 ? (n.flags &= -257, r = Yo(Error(m(422))), al(e, n, u, r)) : n.memoizedState !== null ? (n.child = e.child, n.flags |= 128, null) : (o = r.fallback, l = n.mode, r = El({ mode: "visible", children: r.children }, l, 0, null), o = it(o, l, u, null), o.flags |= 2, r.return = n, o.return = n, r.sibling = o, n.child = r, n.mode & 1 && Nt(n, e.child, null, u), n.child.memoizedState = qo(u), n.memoizedState = Jo, o);
    if (!(n.mode & 1))
      return al(e, n, u, null);
    if (l.data === "$!") {
      if (r = l.nextSibling && l.nextSibling.dataset, r)
        var i = r.dgst;
      return r = i, o = Error(m(419)), r = Yo(o, r, void 0), al(e, n, u, r);
    }
    if (i = (u & e.childLanes) !== 0, Ve || i) {
      if (r = we, r !== null) {
        switch (u & -u) {
          case 4:
            l = 2;
            break;
          case 16:
            l = 8;
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
            l = 32;
            break;
          case 536870912:
            l = 268435456;
            break;
          default:
            l = 0;
        }
        l = l & (r.suspendedLanes | u) ? 0 : l, l !== 0 && l !== o.retryLane && (o.retryLane = l, xn(e, l), mn(r, e, l, -1));
      }
      return hu(), r = Yo(Error(m(421))), al(e, n, u, r);
    }
    return l.data === "$?" ? (n.flags |= 128, n.child = e.child, n = gf.bind(null, e), l._reactRetry = n, null) : (e = o.treeContext, Ye = Fn(l.nextSibling), Ke = n, ne = !0, cn = null, e !== null && (Ze[Je++] = _n, Ze[Je++] = Cn, Ze[Je++] = qn, _n = e.id, Cn = e.overflow, qn = n), n = bo(n, r.children), n.flags |= 4096, n);
  }
  function Qs(e, n, t) {
    e.lanes |= n;
    var r = e.alternate;
    r !== null && (r.lanes |= n), Lo(e.return, n, t);
  }
  function eu(e, n, t, r, l) {
    var o = e.memoizedState;
    o === null ? e.memoizedState = { isBackwards: n, rendering: null, renderingStartTime: 0, last: r, tail: t, tailMode: l } : (o.isBackwards = n, o.rendering = null, o.renderingStartTime = 0, o.last = r, o.tail = t, o.tailMode = l);
  }
  function Ws(e, n, t) {
    var r = n.pendingProps, l = r.revealOrder, o = r.tail;
    if (Te(e, n, r.children, t), r = re.current, r & 2)
      r = r & 1 | 2, n.flags |= 128;
    else {
      if (e !== null && e.flags & 128)
        e:
          for (e = n.child; e !== null; ) {
            if (e.tag === 13)
              e.memoizedState !== null && Qs(e, t, n);
            else if (e.tag === 19)
              Qs(e, t, n);
            else if (e.child !== null) {
              e.child.return = e, e = e.child;
              continue;
            }
            if (e === n)
              break e;
            for (; e.sibling === null; ) {
              if (e.return === null || e.return === n)
                break e;
              e = e.return;
            }
            e.sibling.return = e.return, e = e.sibling;
          }
      r &= 1;
    }
    if (J(re, r), !(n.mode & 1))
      n.memoizedState = null;
    else
      switch (l) {
        case "forwards":
          for (t = n.child, l = null; t !== null; )
            e = t.alternate, e !== null && rl(e) === null && (l = t), t = t.sibling;
          t = l, t === null ? (l = n.child, n.child = null) : (l = t.sibling, t.sibling = null), eu(n, !1, l, t, o);
          break;
        case "backwards":
          for (t = null, l = n.child, n.child = null; l !== null; ) {
            if (e = l.alternate, e !== null && rl(e) === null) {
              n.child = l;
              break;
            }
            e = l.sibling, l.sibling = t, t = l, l = e;
          }
          eu(n, !0, t, null, o);
          break;
        case "together":
          eu(n, !1, null, null, void 0);
          break;
        default:
          n.memoizedState = null;
      }
    return n.child;
  }
  function cl(e, n) {
    !(n.mode & 1) && e !== null && (e.alternate = null, n.alternate = null, n.flags |= 2);
  }
  function Pn(e, n, t) {
    if (e !== null && (n.dependencies = e.dependencies), rt |= n.lanes, !(t & n.childLanes))
      return null;
    if (e !== null && n.child !== e.child)
      throw Error(m(153));
    if (n.child !== null) {
      for (e = n.child, t = Yn(e, e.pendingProps), n.child = t, t.return = n; e.sibling !== null; )
        e = e.sibling, t = t.sibling = Yn(e, e.pendingProps), t.return = n;
      t.sibling = null;
    }
    return n.child;
  }
  function of(e, n, t) {
    switch (n.tag) {
      case 3:
        $s(n), _t();
        break;
      case 5:
        ss(n);
        break;
      case 1:
        Ae(n.type) && Kr(n);
        break;
      case 4:
        Io(n, n.stateNode.containerInfo);
        break;
      case 10:
        var r = n.type._context, l = n.memoizedProps.value;
        J(Jr, r._currentValue), r._currentValue = l;
        break;
      case 13:
        if (r = n.memoizedState, r !== null)
          return r.dehydrated !== null ? (J(re, re.current & 1), n.flags |= 128, null) : t & n.child.childLanes ? Hs(e, n, t) : (J(re, re.current & 1), e = Pn(e, n, t), e !== null ? e.sibling : null);
        J(re, re.current & 1);
        break;
      case 19:
        if (r = (t & n.childLanes) !== 0, e.flags & 128) {
          if (r)
            return Ws(e, n, t);
          n.flags |= 128;
        }
        if (l = n.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), J(re, re.current), r)
          break;
        return null;
      case 22:
      case 23:
        return n.lanes = 0, Us(e, n, t);
    }
    return Pn(e, n, t);
  }
  var Ks, nu, Ys, Gs;
  Ks = function(e, n) {
    for (var t = n.child; t !== null; ) {
      if (t.tag === 5 || t.tag === 6)
        e.appendChild(t.stateNode);
      else if (t.tag !== 4 && t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === n)
        break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === n)
          return;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
  }, nu = function() {
  }, Ys = function(e, n, t, r) {
    var l = e.memoizedProps;
    if (l !== r) {
      e = n.stateNode, nt(gn.current);
      var o = null;
      switch (t) {
        case "input":
          l = Tl(e, l), r = Tl(e, r), o = [];
          break;
        case "select":
          l = a({}, l, { value: void 0 }), r = a({}, r, { value: void 0 }), o = [];
          break;
        case "textarea":
          l = Ol(e, l), r = Ol(e, r), o = [];
          break;
        default:
          typeof l.onClick != "function" && typeof r.onClick == "function" && (e.onclick = Hr);
      }
      Dl(t, r);
      var u;
      t = null;
      for (p in l)
        if (!r.hasOwnProperty(p) && l.hasOwnProperty(p) && l[p] != null)
          if (p === "style") {
            var i = l[p];
            for (u in i)
              i.hasOwnProperty(u) && (t || (t = {}), t[u] = "");
          } else
            p !== "dangerouslySetInnerHTML" && p !== "children" && p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (K.hasOwnProperty(p) ? o || (o = []) : (o = o || []).push(p, null));
      for (p in r) {
        var s = r[p];
        if (i = l != null ? l[p] : void 0, r.hasOwnProperty(p) && s !== i && (s != null || i != null))
          if (p === "style")
            if (i) {
              for (u in i)
                !i.hasOwnProperty(u) || s && s.hasOwnProperty(u) || (t || (t = {}), t[u] = "");
              for (u in s)
                s.hasOwnProperty(u) && i[u] !== s[u] && (t || (t = {}), t[u] = s[u]);
            } else
              t || (o || (o = []), o.push(
                p,
                t
              )), t = s;
          else
            p === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, i = i ? i.__html : void 0, s != null && i !== s && (o = o || []).push(p, s)) : p === "children" ? typeof s != "string" && typeof s != "number" || (o = o || []).push(p, "" + s) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && (K.hasOwnProperty(p) ? (s != null && p === "onScroll" && b("scroll", e), o || i === s || (o = [])) : (o = o || []).push(p, s));
      }
      t && (o = o || []).push("style", t);
      var p = o;
      (n.updateQueue = p) && (n.flags |= 4);
    }
  }, Gs = function(e, n, t, r) {
    t !== r && (n.flags |= 4);
  };
  function dr(e, n) {
    if (!ne)
      switch (e.tailMode) {
        case "hidden":
          n = e.tail;
          for (var t = null; n !== null; )
            n.alternate !== null && (t = n), n = n.sibling;
          t === null ? e.tail = null : t.sibling = null;
          break;
        case "collapsed":
          t = e.tail;
          for (var r = null; t !== null; )
            t.alternate !== null && (r = t), t = t.sibling;
          r === null ? n || e.tail === null ? e.tail = null : e.tail.sibling = null : r.sibling = null;
      }
  }
  function Ne(e) {
    var n = e.alternate !== null && e.alternate.child === e.child, t = 0, r = 0;
    if (n)
      for (var l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags & 14680064, r |= l.flags & 14680064, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        t |= l.lanes | l.childLanes, r |= l.subtreeFlags, r |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= r, e.childLanes = t, n;
  }
  function uf(e, n, t) {
    var r = n.pendingProps;
    switch (_o(n), n.tag) {
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
        return Ne(n), null;
      case 1:
        return Ae(n.type) && Wr(), Ne(n), null;
      case 3:
        return r = n.stateNode, Pt(), ee(Ue), ee(Ce), Uo(), r.pendingContext && (r.context = r.pendingContext, r.pendingContext = null), (e === null || e.child === null) && (Zr(n) ? n.flags |= 4 : e === null || e.memoizedState.isDehydrated && !(n.flags & 256) || (n.flags |= 1024, cn !== null && (du(cn), cn = null))), nu(e, n), Ne(n), null;
      case 5:
        Fo(n);
        var l = nt(ir.current);
        if (t = n.type, e !== null && n.stateNode != null)
          Ys(e, n, t, r, l), e.ref !== n.ref && (n.flags |= 512, n.flags |= 2097152);
        else {
          if (!r) {
            if (n.stateNode === null)
              throw Error(m(166));
            return Ne(n), null;
          }
          if (e = nt(gn.current), Zr(n)) {
            r = n.stateNode, t = n.type;
            var o = n.memoizedProps;
            switch (r[yn] = n, r[tr] = o, e = (n.mode & 1) !== 0, t) {
              case "dialog":
                b("cancel", r), b("close", r);
                break;
              case "iframe":
              case "object":
              case "embed":
                b("load", r);
                break;
              case "video":
              case "audio":
                for (l = 0; l < bt.length; l++)
                  b(bt[l], r);
                break;
              case "source":
                b("error", r);
                break;
              case "img":
              case "image":
              case "link":
                b(
                  "error",
                  r
                ), b("load", r);
                break;
              case "details":
                b("toggle", r);
                break;
              case "input":
                Pu(r, o), b("invalid", r);
                break;
              case "select":
                r._wrapperState = { wasMultiple: !!o.multiple }, b("invalid", r);
                break;
              case "textarea":
                Lu(r, o), b("invalid", r);
            }
            Dl(t, o), l = null;
            for (var u in o)
              if (o.hasOwnProperty(u)) {
                var i = o[u];
                u === "children" ? typeof i == "string" ? r.textContent !== i && (o.suppressHydrationWarning !== !0 && Br(r.textContent, i, e), l = ["children", i]) : typeof i == "number" && r.textContent !== "" + i && (o.suppressHydrationWarning !== !0 && Br(
                  r.textContent,
                  i,
                  e
                ), l = ["children", "" + i]) : K.hasOwnProperty(u) && i != null && u === "onScroll" && b("scroll", r);
              }
            switch (t) {
              case "input":
                wr(r), Tu(r, o, !0);
                break;
              case "textarea":
                wr(r), Ou(r);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof o.onClick == "function" && (r.onclick = Hr);
            }
            r = l, n.updateQueue = r, r !== null && (n.flags |= 4);
          } else {
            u = l.nodeType === 9 ? l : l.ownerDocument, e === "http://www.w3.org/1999/xhtml" && (e = Mu(t)), e === "http://www.w3.org/1999/xhtml" ? t === "script" ? (e = u.createElement("div"), e.innerHTML = "<script><\/script>", e = e.removeChild(e.firstChild)) : typeof r.is == "string" ? e = u.createElement(t, { is: r.is }) : (e = u.createElement(t), t === "select" && (u = e, r.multiple ? u.multiple = !0 : r.size && (u.size = r.size))) : e = u.createElementNS(e, t), e[yn] = n, e[tr] = r, Ks(e, n, !1, !1), n.stateNode = e;
            e: {
              switch (u = Il(t, r), t) {
                case "dialog":
                  b("cancel", e), b("close", e), l = r;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  b("load", e), l = r;
                  break;
                case "video":
                case "audio":
                  for (l = 0; l < bt.length; l++)
                    b(bt[l], e);
                  l = r;
                  break;
                case "source":
                  b("error", e), l = r;
                  break;
                case "img":
                case "image":
                case "link":
                  b(
                    "error",
                    e
                  ), b("load", e), l = r;
                  break;
                case "details":
                  b("toggle", e), l = r;
                  break;
                case "input":
                  Pu(e, r), l = Tl(e, r), b("invalid", e);
                  break;
                case "option":
                  l = r;
                  break;
                case "select":
                  e._wrapperState = { wasMultiple: !!r.multiple }, l = a({}, r, { value: void 0 }), b("invalid", e);
                  break;
                case "textarea":
                  Lu(e, r), l = Ol(e, r), b("invalid", e);
                  break;
                default:
                  l = r;
              }
              Dl(t, l), i = l;
              for (o in i)
                if (i.hasOwnProperty(o)) {
                  var s = i[o];
                  o === "style" ? Fu(e, s) : o === "dangerouslySetInnerHTML" ? (s = s ? s.__html : void 0, s != null && Du(e, s)) : o === "children" ? typeof s == "string" ? (t !== "textarea" || s !== "") && Dt(e, s) : typeof s == "number" && Dt(e, "" + s) : o !== "suppressContentEditableWarning" && o !== "suppressHydrationWarning" && o !== "autoFocus" && (K.hasOwnProperty(o) ? s != null && o === "onScroll" && b("scroll", e) : s != null && De(e, o, s, u));
                }
              switch (t) {
                case "input":
                  wr(e), Tu(e, r, !1);
                  break;
                case "textarea":
                  wr(e), Ou(e);
                  break;
                case "option":
                  r.value != null && e.setAttribute("value", "" + H(r.value));
                  break;
                case "select":
                  e.multiple = !!r.multiple, o = r.value, o != null ? st(e, !!r.multiple, o, !1) : r.defaultValue != null && st(
                    e,
                    !!r.multiple,
                    r.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof l.onClick == "function" && (e.onclick = Hr);
              }
              switch (t) {
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
            r && (n.flags |= 4);
          }
          n.ref !== null && (n.flags |= 512, n.flags |= 2097152);
        }
        return Ne(n), null;
      case 6:
        if (e && n.stateNode != null)
          Gs(e, n, e.memoizedProps, r);
        else {
          if (typeof r != "string" && n.stateNode === null)
            throw Error(m(166));
          if (t = nt(ir.current), nt(gn.current), Zr(n)) {
            if (r = n.stateNode, t = n.memoizedProps, r[yn] = n, (o = r.nodeValue !== t) && (e = Ke, e !== null))
              switch (e.tag) {
                case 3:
                  Br(r.nodeValue, t, (e.mode & 1) !== 0);
                  break;
                case 5:
                  e.memoizedProps.suppressHydrationWarning !== !0 && Br(r.nodeValue, t, (e.mode & 1) !== 0);
              }
            o && (n.flags |= 4);
          } else
            r = (t.nodeType === 9 ? t : t.ownerDocument).createTextNode(r), r[yn] = n, n.stateNode = r;
        }
        return Ne(n), null;
      case 13:
        if (ee(re), r = n.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (ne && Ye !== null && n.mode & 1 && !(n.flags & 128))
            Zi(), _t(), n.flags |= 98560, o = !1;
          else if (o = Zr(n), r !== null && r.dehydrated !== null) {
            if (e === null) {
              if (!o)
                throw Error(m(318));
              if (o = n.memoizedState, o = o !== null ? o.dehydrated : null, !o)
                throw Error(m(317));
              o[yn] = n;
            } else
              _t(), !(n.flags & 128) && (n.memoizedState = null), n.flags |= 4;
            Ne(n), o = !1;
          } else
            cn !== null && (du(cn), cn = null), o = !0;
          if (!o)
            return n.flags & 65536 ? n : null;
        }
        return n.flags & 128 ? (n.lanes = t, n) : (r = r !== null, r !== (e !== null && e.memoizedState !== null) && r && (n.child.flags |= 8192, n.mode & 1 && (e === null || re.current & 1 ? ye === 0 && (ye = 3) : hu())), n.updateQueue !== null && (n.flags |= 4), Ne(n), null);
      case 4:
        return Pt(), nu(e, n), e === null && er(n.stateNode.containerInfo), Ne(n), null;
      case 10:
        return To(n.type._context), Ne(n), null;
      case 17:
        return Ae(n.type) && Wr(), Ne(n), null;
      case 19:
        if (ee(re), o = n.memoizedState, o === null)
          return Ne(n), null;
        if (r = (n.flags & 128) !== 0, u = o.rendering, u === null)
          if (r)
            dr(o, !1);
          else {
            if (ye !== 0 || e !== null && e.flags & 128)
              for (e = n.child; e !== null; ) {
                if (u = rl(e), u !== null) {
                  for (n.flags |= 128, dr(o, !1), r = u.updateQueue, r !== null && (n.updateQueue = r, n.flags |= 4), n.subtreeFlags = 0, r = t, t = n.child; t !== null; )
                    o = t, e = r, o.flags &= 14680066, u = o.alternate, u === null ? (o.childLanes = 0, o.lanes = e, o.child = null, o.subtreeFlags = 0, o.memoizedProps = null, o.memoizedState = null, o.updateQueue = null, o.dependencies = null, o.stateNode = null) : (o.childLanes = u.childLanes, o.lanes = u.lanes, o.child = u.child, o.subtreeFlags = 0, o.deletions = null, o.memoizedProps = u.memoizedProps, o.memoizedState = u.memoizedState, o.updateQueue = u.updateQueue, o.type = u.type, e = u.dependencies, o.dependencies = e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }), t = t.sibling;
                  return J(re, re.current & 1 | 2), n.child;
                }
                e = e.sibling;
              }
            o.tail !== null && fe() > Rt && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
          }
        else {
          if (!r)
            if (e = rl(u), e !== null) {
              if (n.flags |= 128, r = !0, t = e.updateQueue, t !== null && (n.updateQueue = t, n.flags |= 4), dr(o, !0), o.tail === null && o.tailMode === "hidden" && !u.alternate && !ne)
                return Ne(n), null;
            } else
              2 * fe() - o.renderingStartTime > Rt && t !== 1073741824 && (n.flags |= 128, r = !0, dr(o, !1), n.lanes = 4194304);
          o.isBackwards ? (u.sibling = n.child, n.child = u) : (t = o.last, t !== null ? t.sibling = u : n.child = u, o.last = u);
        }
        return o.tail !== null ? (n = o.tail, o.rendering = n, o.tail = n.sibling, o.renderingStartTime = fe(), n.sibling = null, t = re.current, J(re, r ? t & 1 | 2 : t & 1), n) : (Ne(n), null);
      case 22:
      case 23:
        return mu(), r = n.memoizedState !== null, e !== null && e.memoizedState !== null !== r && (n.flags |= 8192), r && n.mode & 1 ? Ge & 1073741824 && (Ne(n), n.subtreeFlags & 6 && (n.flags |= 8192)) : Ne(n), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(m(156, n.tag));
  }
  function sf(e, n) {
    switch (_o(n), n.tag) {
      case 1:
        return Ae(n.type) && Wr(), e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 3:
        return Pt(), ee(Ue), ee(Ce), Uo(), e = n.flags, e & 65536 && !(e & 128) ? (n.flags = e & -65537 | 128, n) : null;
      case 5:
        return Fo(n), null;
      case 13:
        if (ee(re), e = n.memoizedState, e !== null && e.dehydrated !== null) {
          if (n.alternate === null)
            throw Error(m(340));
          _t();
        }
        return e = n.flags, e & 65536 ? (n.flags = e & -65537 | 128, n) : null;
      case 19:
        return ee(re), null;
      case 4:
        return Pt(), null;
      case 10:
        return To(n.type._context), null;
      case 22:
      case 23:
        return mu(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var fl = !1, Pe = !1, af = typeof WeakSet == "function" ? WeakSet : Set, E = null;
  function Tt(e, n) {
    var t = e.ref;
    if (t !== null)
      if (typeof t == "function")
        try {
          t(null);
        } catch (r) {
          se(e, n, r);
        }
      else
        t.current = null;
  }
  function tu(e, n, t) {
    try {
      t();
    } catch (r) {
      se(e, n, r);
    }
  }
  var Xs = !1;
  function cf(e, n) {
    if (mo = Rr, e = Ni(), oo(e)) {
      if ("selectionStart" in e)
        var t = { start: e.selectionStart, end: e.selectionEnd };
      else
        e: {
          t = (t = e.ownerDocument) && t.defaultView || window;
          var r = t.getSelection && t.getSelection();
          if (r && r.rangeCount !== 0) {
            t = r.anchorNode;
            var l = r.anchorOffset, o = r.focusNode;
            r = r.focusOffset;
            try {
              t.nodeType, o.nodeType;
            } catch {
              t = null;
              break e;
            }
            var u = 0, i = -1, s = -1, p = 0, y = 0, g = e, h = null;
            n:
              for (; ; ) {
                for (var k; g !== t || l !== 0 && g.nodeType !== 3 || (i = u + l), g !== o || r !== 0 && g.nodeType !== 3 || (s = u + r), g.nodeType === 3 && (u += g.nodeValue.length), (k = g.firstChild) !== null; )
                  h = g, g = k;
                for (; ; ) {
                  if (g === e)
                    break n;
                  if (h === t && ++p === l && (i = u), h === o && ++y === r && (s = u), (k = g.nextSibling) !== null)
                    break;
                  g = h, h = g.parentNode;
                }
                g = k;
              }
            t = i === -1 || s === -1 ? null : { start: i, end: s };
          } else
            t = null;
        }
      t = t || { start: 0, end: 0 };
    } else
      t = null;
    for (ho = { focusedElem: e, selectionRange: t }, Rr = !1, E = n; E !== null; )
      if (n = E, e = n.child, (n.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = n, E = e;
      else
        for (; E !== null; ) {
          n = E;
          try {
            var _ = n.alternate;
            if (n.flags & 1024)
              switch (n.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (_ !== null) {
                    var C = _.memoizedProps, de = _.memoizedState, f = n.stateNode, c = f.getSnapshotBeforeUpdate(n.elementType === n.type ? C : fn(n.type, C), de);
                    f.__reactInternalSnapshotBeforeUpdate = c;
                  }
                  break;
                case 3:
                  var d = n.stateNode.containerInfo;
                  d.nodeType === 1 ? d.textContent = "" : d.nodeType === 9 && d.documentElement && d.removeChild(d.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(m(163));
              }
          } catch (w) {
            se(n, n.return, w);
          }
          if (e = n.sibling, e !== null) {
            e.return = n.return, E = e;
            break;
          }
          E = n.return;
        }
    return _ = Xs, Xs = !1, _;
  }
  function pr(e, n, t) {
    var r = n.updateQueue;
    if (r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & e) === e) {
          var o = l.destroy;
          l.destroy = void 0, o !== void 0 && tu(n, t, o);
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function dl(e, n) {
    if (n = n.updateQueue, n = n !== null ? n.lastEffect : null, n !== null) {
      var t = n = n.next;
      do {
        if ((t.tag & e) === e) {
          var r = t.create;
          t.destroy = r();
        }
        t = t.next;
      } while (t !== n);
    }
  }
  function ru(e) {
    var n = e.ref;
    if (n !== null) {
      var t = e.stateNode;
      switch (e.tag) {
        case 5:
          e = t;
          break;
        default:
          e = t;
      }
      typeof n == "function" ? n(e) : n.current = e;
    }
  }
  function Zs(e) {
    var n = e.alternate;
    n !== null && (e.alternate = null, Zs(n)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (n = e.stateNode, n !== null && (delete n[yn], delete n[tr], delete n[wo], delete n[Wc], delete n[Kc])), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  function Js(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 4;
  }
  function qs(e) {
    e:
      for (; ; ) {
        for (; e.sibling === null; ) {
          if (e.return === null || Js(e.return))
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
  function lu(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.nodeType === 8 ? t.parentNode.insertBefore(e, n) : t.insertBefore(e, n) : (t.nodeType === 8 ? (n = t.parentNode, n.insertBefore(e, t)) : (n = t, n.appendChild(e)), t = t._reactRootContainer, t != null || n.onclick !== null || (n.onclick = Hr));
    else if (r !== 4 && (e = e.child, e !== null))
      for (lu(e, n, t), e = e.sibling; e !== null; )
        lu(e, n, t), e = e.sibling;
  }
  function ou(e, n, t) {
    var r = e.tag;
    if (r === 5 || r === 6)
      e = e.stateNode, n ? t.insertBefore(e, n) : t.appendChild(e);
    else if (r !== 4 && (e = e.child, e !== null))
      for (ou(e, n, t), e = e.sibling; e !== null; )
        ou(e, n, t), e = e.sibling;
  }
  var ke = null, dn = !1;
  function Bn(e, n, t) {
    for (t = t.child; t !== null; )
      bs(e, n, t), t = t.sibling;
  }
  function bs(e, n, t) {
    if (vn && typeof vn.onCommitFiberUnmount == "function")
      try {
        vn.onCommitFiberUnmount(xr, t);
      } catch {
      }
    switch (t.tag) {
      case 5:
        Pe || Tt(t, n);
      case 6:
        var r = ke, l = dn;
        ke = null, Bn(e, n, t), ke = r, dn = l, ke !== null && (dn ? (e = ke, t = t.stateNode, e.nodeType === 8 ? e.parentNode.removeChild(t) : e.removeChild(t)) : ke.removeChild(t.stateNode));
        break;
      case 18:
        ke !== null && (dn ? (e = ke, t = t.stateNode, e.nodeType === 8 ? go(e.parentNode, t) : e.nodeType === 1 && go(e, t), Wt(e)) : go(ke, t.stateNode));
        break;
      case 4:
        r = ke, l = dn, ke = t.stateNode.containerInfo, dn = !0, Bn(e, n, t), ke = r, dn = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!Pe && (r = t.updateQueue, r !== null && (r = r.lastEffect, r !== null))) {
          l = r = r.next;
          do {
            var o = l, u = o.destroy;
            o = o.tag, u !== void 0 && (o & 2 || o & 4) && tu(t, n, u), l = l.next;
          } while (l !== r);
        }
        Bn(e, n, t);
        break;
      case 1:
        if (!Pe && (Tt(t, n), r = t.stateNode, typeof r.componentWillUnmount == "function"))
          try {
            r.props = t.memoizedProps, r.state = t.memoizedState, r.componentWillUnmount();
          } catch (i) {
            se(t, n, i);
          }
        Bn(e, n, t);
        break;
      case 21:
        Bn(e, n, t);
        break;
      case 22:
        t.mode & 1 ? (Pe = (r = Pe) || t.memoizedState !== null, Bn(e, n, t), Pe = r) : Bn(e, n, t);
        break;
      default:
        Bn(e, n, t);
    }
  }
  function ea(e) {
    var n = e.updateQueue;
    if (n !== null) {
      e.updateQueue = null;
      var t = e.stateNode;
      t === null && (t = e.stateNode = new af()), n.forEach(function(r) {
        var l = wf.bind(null, e, r);
        t.has(r) || (t.add(r), r.then(l, l));
      });
    }
  }
  function pn(e, n) {
    var t = n.deletions;
    if (t !== null)
      for (var r = 0; r < t.length; r++) {
        var l = t[r];
        try {
          var o = e, u = n, i = u;
          e:
            for (; i !== null; ) {
              switch (i.tag) {
                case 5:
                  ke = i.stateNode, dn = !1;
                  break e;
                case 3:
                  ke = i.stateNode.containerInfo, dn = !0;
                  break e;
                case 4:
                  ke = i.stateNode.containerInfo, dn = !0;
                  break e;
              }
              i = i.return;
            }
          if (ke === null)
            throw Error(m(160));
          bs(o, u, l), ke = null, dn = !1;
          var s = l.alternate;
          s !== null && (s.return = null), l.return = null;
        } catch (p) {
          se(l, n, p);
        }
      }
    if (n.subtreeFlags & 12854)
      for (n = n.child; n !== null; )
        na(n, e), n = n.sibling;
  }
  function na(e, n) {
    var t = e.alternate, r = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (pn(n, e), Sn(e), r & 4) {
          try {
            pr(3, e, e.return), dl(3, e);
          } catch (C) {
            se(e, e.return, C);
          }
          try {
            pr(5, e, e.return);
          } catch (C) {
            se(e, e.return, C);
          }
        }
        break;
      case 1:
        pn(n, e), Sn(e), r & 512 && t !== null && Tt(t, t.return);
        break;
      case 5:
        if (pn(n, e), Sn(e), r & 512 && t !== null && Tt(t, t.return), e.flags & 32) {
          var l = e.stateNode;
          try {
            Dt(l, "");
          } catch (C) {
            se(e, e.return, C);
          }
        }
        if (r & 4 && (l = e.stateNode, l != null)) {
          var o = e.memoizedProps, u = t !== null ? t.memoizedProps : o, i = e.type, s = e.updateQueue;
          if (e.updateQueue = null, s !== null)
            try {
              i === "input" && o.type === "radio" && o.name != null && zu(l, o), Il(i, u);
              var p = Il(i, o);
              for (u = 0; u < s.length; u += 2) {
                var y = s[u], g = s[u + 1];
                y === "style" ? Fu(l, g) : y === "dangerouslySetInnerHTML" ? Du(l, g) : y === "children" ? Dt(l, g) : De(l, y, g, p);
              }
              switch (i) {
                case "input":
                  Ll(l, o);
                  break;
                case "textarea":
                  Ru(l, o);
                  break;
                case "select":
                  var h = l._wrapperState.wasMultiple;
                  l._wrapperState.wasMultiple = !!o.multiple;
                  var k = o.value;
                  k != null ? st(l, !!o.multiple, k, !1) : h !== !!o.multiple && (o.defaultValue != null ? st(
                    l,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  ) : st(l, !!o.multiple, o.multiple ? [] : "", !1));
              }
              l[tr] = o;
            } catch (C) {
              se(e, e.return, C);
            }
        }
        break;
      case 6:
        if (pn(n, e), Sn(e), r & 4) {
          if (e.stateNode === null)
            throw Error(m(162));
          l = e.stateNode, o = e.memoizedProps;
          try {
            l.nodeValue = o;
          } catch (C) {
            se(e, e.return, C);
          }
        }
        break;
      case 3:
        if (pn(n, e), Sn(e), r & 4 && t !== null && t.memoizedState.isDehydrated)
          try {
            Wt(n.containerInfo);
          } catch (C) {
            se(e, e.return, C);
          }
        break;
      case 4:
        pn(n, e), Sn(e);
        break;
      case 13:
        pn(n, e), Sn(e), l = e.child, l.flags & 8192 && (o = l.memoizedState !== null, l.stateNode.isHidden = o, !o || l.alternate !== null && l.alternate.memoizedState !== null || (su = fe())), r & 4 && ea(e);
        break;
      case 22:
        if (y = t !== null && t.memoizedState !== null, e.mode & 1 ? (Pe = (p = Pe) || y, pn(n, e), Pe = p) : pn(n, e), Sn(e), r & 8192) {
          if (p = e.memoizedState !== null, (e.stateNode.isHidden = p) && !y && e.mode & 1)
            for (E = e, y = e.child; y !== null; ) {
              for (g = E = y; E !== null; ) {
                switch (h = E, k = h.child, h.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    pr(4, h, h.return);
                    break;
                  case 1:
                    Tt(h, h.return);
                    var _ = h.stateNode;
                    if (typeof _.componentWillUnmount == "function") {
                      r = h, t = h.return;
                      try {
                        n = r, _.props = n.memoizedProps, _.state = n.memoizedState, _.componentWillUnmount();
                      } catch (C) {
                        se(r, t, C);
                      }
                    }
                    break;
                  case 5:
                    Tt(h, h.return);
                    break;
                  case 22:
                    if (h.memoizedState !== null) {
                      la(g);
                      continue;
                    }
                }
                k !== null ? (k.return = h, E = k) : la(g);
              }
              y = y.sibling;
            }
          e:
            for (y = null, g = e; ; ) {
              if (g.tag === 5) {
                if (y === null) {
                  y = g;
                  try {
                    l = g.stateNode, p ? (o = l.style, typeof o.setProperty == "function" ? o.setProperty("display", "none", "important") : o.display = "none") : (i = g.stateNode, s = g.memoizedProps.style, u = s != null && s.hasOwnProperty("display") ? s.display : null, i.style.display = Iu("display", u));
                  } catch (C) {
                    se(e, e.return, C);
                  }
                }
              } else if (g.tag === 6) {
                if (y === null)
                  try {
                    g.stateNode.nodeValue = p ? "" : g.memoizedProps;
                  } catch (C) {
                    se(e, e.return, C);
                  }
              } else if ((g.tag !== 22 && g.tag !== 23 || g.memoizedState === null || g === e) && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === e)
                break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === e)
                  break e;
                y === g && (y = null), g = g.return;
              }
              y === g && (y = null), g.sibling.return = g.return, g = g.sibling;
            }
        }
        break;
      case 19:
        pn(n, e), Sn(e), r & 4 && ea(e);
        break;
      case 21:
        break;
      default:
        pn(
          n,
          e
        ), Sn(e);
    }
  }
  function Sn(e) {
    var n = e.flags;
    if (n & 2) {
      try {
        e: {
          for (var t = e.return; t !== null; ) {
            if (Js(t)) {
              var r = t;
              break e;
            }
            t = t.return;
          }
          throw Error(m(160));
        }
        switch (r.tag) {
          case 5:
            var l = r.stateNode;
            r.flags & 32 && (Dt(l, ""), r.flags &= -33);
            var o = qs(e);
            ou(e, o, l);
            break;
          case 3:
          case 4:
            var u = r.stateNode.containerInfo, i = qs(e);
            lu(e, i, u);
            break;
          default:
            throw Error(m(161));
        }
      } catch (s) {
        se(e, e.return, s);
      }
      e.flags &= -3;
    }
    n & 4096 && (e.flags &= -4097);
  }
  function ff(e, n, t) {
    E = e, ta(e);
  }
  function ta(e, n, t) {
    for (var r = (e.mode & 1) !== 0; E !== null; ) {
      var l = E, o = l.child;
      if (l.tag === 22 && r) {
        var u = l.memoizedState !== null || fl;
        if (!u) {
          var i = l.alternate, s = i !== null && i.memoizedState !== null || Pe;
          i = fl;
          var p = Pe;
          if (fl = u, (Pe = s) && !p)
            for (E = l; E !== null; )
              u = E, s = u.child, u.tag === 22 && u.memoizedState !== null ? oa(l) : s !== null ? (s.return = u, E = s) : oa(l);
          for (; o !== null; )
            E = o, ta(o), o = o.sibling;
          E = l, fl = i, Pe = p;
        }
        ra(e);
      } else
        l.subtreeFlags & 8772 && o !== null ? (o.return = l, E = o) : ra(e);
    }
  }
  function ra(e) {
    for (; E !== null; ) {
      var n = E;
      if (n.flags & 8772) {
        var t = n.alternate;
        try {
          if (n.flags & 8772)
            switch (n.tag) {
              case 0:
              case 11:
              case 15:
                Pe || dl(5, n);
                break;
              case 1:
                var r = n.stateNode;
                if (n.flags & 4 && !Pe)
                  if (t === null)
                    r.componentDidMount();
                  else {
                    var l = n.elementType === n.type ? t.memoizedProps : fn(n.type, t.memoizedProps);
                    r.componentDidUpdate(l, t.memoizedState, r.__reactInternalSnapshotBeforeUpdate);
                  }
                var o = n.updateQueue;
                o !== null && es(n, o, r);
                break;
              case 3:
                var u = n.updateQueue;
                if (u !== null) {
                  if (t = null, n.child !== null)
                    switch (n.child.tag) {
                      case 5:
                        t = n.child.stateNode;
                        break;
                      case 1:
                        t = n.child.stateNode;
                    }
                  es(n, u, t);
                }
                break;
              case 5:
                var i = n.stateNode;
                if (t === null && n.flags & 4) {
                  t = i;
                  var s = n.memoizedProps;
                  switch (n.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      s.autoFocus && t.focus();
                      break;
                    case "img":
                      s.src && (t.src = s.src);
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
                if (n.memoizedState === null) {
                  var p = n.alternate;
                  if (p !== null) {
                    var y = p.memoizedState;
                    if (y !== null) {
                      var g = y.dehydrated;
                      g !== null && Wt(g);
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
                throw Error(m(163));
            }
          Pe || n.flags & 512 && ru(n);
        } catch (h) {
          se(n, n.return, h);
        }
      }
      if (n === e) {
        E = null;
        break;
      }
      if (t = n.sibling, t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function la(e) {
    for (; E !== null; ) {
      var n = E;
      if (n === e) {
        E = null;
        break;
      }
      var t = n.sibling;
      if (t !== null) {
        t.return = n.return, E = t;
        break;
      }
      E = n.return;
    }
  }
  function oa(e) {
    for (; E !== null; ) {
      var n = E;
      try {
        switch (n.tag) {
          case 0:
          case 11:
          case 15:
            var t = n.return;
            try {
              dl(4, n);
            } catch (s) {
              se(n, t, s);
            }
            break;
          case 1:
            var r = n.stateNode;
            if (typeof r.componentDidMount == "function") {
              var l = n.return;
              try {
                r.componentDidMount();
              } catch (s) {
                se(n, l, s);
              }
            }
            var o = n.return;
            try {
              ru(n);
            } catch (s) {
              se(n, o, s);
            }
            break;
          case 5:
            var u = n.return;
            try {
              ru(n);
            } catch (s) {
              se(n, u, s);
            }
        }
      } catch (s) {
        se(n, n.return, s);
      }
      if (n === e) {
        E = null;
        break;
      }
      var i = n.sibling;
      if (i !== null) {
        i.return = n.return, E = i;
        break;
      }
      E = n.return;
    }
  }
  var df = Math.ceil, pl = z.ReactCurrentDispatcher, uu = z.ReactCurrentOwner, en = z.ReactCurrentBatchConfig, U = 0, we = null, pe = null, Ee = 0, Ge = 0, Lt = jn(0), ye = 0, mr = null, rt = 0, ml = 0, iu = 0, hr = null, $e = null, su = 0, Rt = 1 / 0, zn = null, hl = !1, au = null, Hn = null, vl = !1, Qn = null, yl = 0, vr = 0, cu = null, gl = -1, wl = 0;
  function Le() {
    return U & 6 ? fe() : gl !== -1 ? gl : gl = fe();
  }
  function Wn(e) {
    return e.mode & 1 ? U & 2 && Ee !== 0 ? Ee & -Ee : Gc.transition !== null ? (wl === 0 && (wl = Ju()), wl) : (e = W, e !== 0 || (e = window.event, e = e === void 0 ? 16 : ui(e.type)), e) : 1;
  }
  function mn(e, n, t, r) {
    if (50 < vr)
      throw vr = 0, cu = null, Error(m(185));
    Vt(e, t, r), (!(U & 2) || e !== we) && (e === we && (!(U & 2) && (ml |= t), ye === 4 && Kn(e, Ee)), Be(e, r), t === 1 && U === 0 && !(n.mode & 1) && (Rt = fe() + 500, Yr && An()));
  }
  function Be(e, n) {
    var t = e.callbackNode;
    Ga(e, n);
    var r = zr(e, e === we ? Ee : 0);
    if (r === 0)
      t !== null && Gu(t), e.callbackNode = null, e.callbackPriority = 0;
    else if (n = r & -r, e.callbackPriority !== n) {
      if (t != null && Gu(t), n === 1)
        e.tag === 0 ? Yc(ia.bind(null, e)) : Wi(ia.bind(null, e)), Hc(function() {
          !(U & 6) && An();
        }), t = null;
      else {
        switch (qu(r)) {
          case 1:
            t = Bl;
            break;
          case 4:
            t = Xu;
            break;
          case 16:
            t = Cr;
            break;
          case 536870912:
            t = Zu;
            break;
          default:
            t = Cr;
        }
        t = ha(t, ua.bind(null, e));
      }
      e.callbackPriority = n, e.callbackNode = t;
    }
  }
  function ua(e, n) {
    if (gl = -1, wl = 0, U & 6)
      throw Error(m(327));
    var t = e.callbackNode;
    if (Ot() && e.callbackNode !== t)
      return null;
    var r = zr(e, e === we ? Ee : 0);
    if (r === 0)
      return null;
    if (r & 30 || r & e.expiredLanes || n)
      n = Sl(e, r);
    else {
      n = r;
      var l = U;
      U |= 2;
      var o = aa();
      (we !== e || Ee !== n) && (zn = null, Rt = fe() + 500, ot(e, n));
      do
        try {
          hf();
          break;
        } catch (i) {
          sa(e, i);
        }
      while (1);
      zo(), pl.current = o, U = l, pe !== null ? n = 0 : (we = null, Ee = 0, n = ye);
    }
    if (n !== 0) {
      if (n === 2 && (l = Hl(e), l !== 0 && (r = l, n = fu(e, l))), n === 1)
        throw t = mr, ot(e, 0), Kn(e, r), Be(e, fe()), t;
      if (n === 6)
        Kn(e, r);
      else {
        if (l = e.current.alternate, !(r & 30) && !pf(l) && (n = Sl(e, r), n === 2 && (o = Hl(e), o !== 0 && (r = o, n = fu(e, o))), n === 1))
          throw t = mr, ot(e, 0), Kn(e, r), Be(e, fe()), t;
        switch (e.finishedWork = l, e.finishedLanes = r, n) {
          case 0:
          case 1:
            throw Error(m(345));
          case 2:
            ut(e, $e, zn);
            break;
          case 3:
            if (Kn(e, r), (r & 130023424) === r && (n = su + 500 - fe(), 10 < n)) {
              if (zr(e, 0) !== 0)
                break;
              if (l = e.suspendedLanes, (l & r) !== r) {
                Le(), e.pingedLanes |= e.suspendedLanes & l;
                break;
              }
              e.timeoutHandle = yo(ut.bind(null, e, $e, zn), n);
              break;
            }
            ut(e, $e, zn);
            break;
          case 4:
            if (Kn(e, r), (r & 4194240) === r)
              break;
            for (n = e.eventTimes, l = -1; 0 < r; ) {
              var u = 31 - sn(r);
              o = 1 << u, u = n[u], u > l && (l = u), r &= ~o;
            }
            if (r = l, r = fe() - r, r = (120 > r ? 120 : 480 > r ? 480 : 1080 > r ? 1080 : 1920 > r ? 1920 : 3e3 > r ? 3e3 : 4320 > r ? 4320 : 1960 * df(r / 1960)) - r, 10 < r) {
              e.timeoutHandle = yo(ut.bind(null, e, $e, zn), r);
              break;
            }
            ut(e, $e, zn);
            break;
          case 5:
            ut(e, $e, zn);
            break;
          default:
            throw Error(m(329));
        }
      }
    }
    return Be(e, fe()), e.callbackNode === t ? ua.bind(null, e) : null;
  }
  function fu(e, n) {
    var t = hr;
    return e.current.memoizedState.isDehydrated && (ot(e, n).flags |= 256), e = Sl(e, n), e !== 2 && (n = $e, $e = t, n !== null && du(n)), e;
  }
  function du(e) {
    $e === null ? $e = e : $e.push.apply($e, e);
  }
  function pf(e) {
    for (var n = e; ; ) {
      if (n.flags & 16384) {
        var t = n.updateQueue;
        if (t !== null && (t = t.stores, t !== null))
          for (var r = 0; r < t.length; r++) {
            var l = t[r], o = l.getSnapshot;
            l = l.value;
            try {
              if (!an(o(), l))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (t = n.child, n.subtreeFlags & 16384 && t !== null)
        t.return = n, n = t;
      else {
        if (n === e)
          break;
        for (; n.sibling === null; ) {
          if (n.return === null || n.return === e)
            return !0;
          n = n.return;
        }
        n.sibling.return = n.return, n = n.sibling;
      }
    }
    return !0;
  }
  function Kn(e, n) {
    for (n &= ~iu, n &= ~ml, e.suspendedLanes |= n, e.pingedLanes &= ~n, e = e.expirationTimes; 0 < n; ) {
      var t = 31 - sn(n), r = 1 << t;
      e[t] = -1, n &= ~r;
    }
  }
  function ia(e) {
    if (U & 6)
      throw Error(m(327));
    Ot();
    var n = zr(e, 0);
    if (!(n & 1))
      return Be(e, fe()), null;
    var t = Sl(e, n);
    if (e.tag !== 0 && t === 2) {
      var r = Hl(e);
      r !== 0 && (n = r, t = fu(e, r));
    }
    if (t === 1)
      throw t = mr, ot(e, 0), Kn(e, n), Be(e, fe()), t;
    if (t === 6)
      throw Error(m(345));
    return e.finishedWork = e.current.alternate, e.finishedLanes = n, ut(e, $e, zn), Be(e, fe()), null;
  }
  function pu(e, n) {
    var t = U;
    U |= 1;
    try {
      return e(n);
    } finally {
      U = t, U === 0 && (Rt = fe() + 500, Yr && An());
    }
  }
  function lt(e) {
    Qn !== null && Qn.tag === 0 && !(U & 6) && Ot();
    var n = U;
    U |= 1;
    var t = en.transition, r = W;
    try {
      if (en.transition = null, W = 1, e)
        return e();
    } finally {
      W = r, en.transition = t, U = n, !(U & 6) && An();
    }
  }
  function mu() {
    Ge = Lt.current, ee(Lt);
  }
  function ot(e, n) {
    e.finishedWork = null, e.finishedLanes = 0;
    var t = e.timeoutHandle;
    if (t !== -1 && (e.timeoutHandle = -1, Bc(t)), pe !== null)
      for (t = pe.return; t !== null; ) {
        var r = t;
        switch (_o(r), r.tag) {
          case 1:
            r = r.type.childContextTypes, r != null && Wr();
            break;
          case 3:
            Pt(), ee(Ue), ee(Ce), Uo();
            break;
          case 5:
            Fo(r);
            break;
          case 4:
            Pt();
            break;
          case 13:
            ee(re);
            break;
          case 19:
            ee(re);
            break;
          case 10:
            To(r.type._context);
            break;
          case 22:
          case 23:
            mu();
        }
        t = t.return;
      }
    if (we = e, pe = e = Yn(e.current, null), Ee = Ge = n, ye = 0, mr = null, iu = ml = rt = 0, $e = hr = null, et !== null) {
      for (n = 0; n < et.length; n++)
        if (t = et[n], r = t.interleaved, r !== null) {
          t.interleaved = null;
          var l = r.next, o = t.pending;
          if (o !== null) {
            var u = o.next;
            o.next = l, r.next = u;
          }
          t.pending = r;
        }
      et = null;
    }
    return e;
  }
  function sa(e, n) {
    do {
      var t = pe;
      try {
        if (zo(), ll.current = sl, ol) {
          for (var r = le.memoizedState; r !== null; ) {
            var l = r.queue;
            l !== null && (l.pending = null), r = r.next;
          }
          ol = !1;
        }
        if (tt = 0, ge = ve = le = null, sr = !1, ar = 0, uu.current = null, t === null || t.return === null) {
          ye = 1, mr = n, pe = null;
          break;
        }
        e: {
          var o = e, u = t.return, i = t, s = n;
          if (n = Ee, i.flags |= 32768, s !== null && typeof s == "object" && typeof s.then == "function") {
            var p = s, y = i, g = y.tag;
            if (!(y.mode & 1) && (g === 0 || g === 11 || g === 15)) {
              var h = y.alternate;
              h ? (y.updateQueue = h.updateQueue, y.memoizedState = h.memoizedState, y.lanes = h.lanes) : (y.updateQueue = null, y.memoizedState = null);
            }
            var k = Ms(u);
            if (k !== null) {
              k.flags &= -257, Ds(k, u, i, o, n), k.mode & 1 && Os(o, p, n), n = k, s = p;
              var _ = n.updateQueue;
              if (_ === null) {
                var C = /* @__PURE__ */ new Set();
                C.add(s), n.updateQueue = C;
              } else
                _.add(s);
              break e;
            } else {
              if (!(n & 1)) {
                Os(o, p, n), hu();
                break e;
              }
              s = Error(m(426));
            }
          } else if (ne && i.mode & 1) {
            var de = Ms(u);
            if (de !== null) {
              !(de.flags & 65536) && (de.flags |= 256), Ds(de, u, i, o, n), No(zt(s, i));
              break e;
            }
          }
          o = s = zt(s, i), ye !== 4 && (ye = 2), hr === null ? hr = [o] : hr.push(o), o = u;
          do {
            switch (o.tag) {
              case 3:
                o.flags |= 65536, n &= -n, o.lanes |= n;
                var f = Ls(o, s, n);
                bi(o, f);
                break e;
              case 1:
                i = s;
                var c = o.type, d = o.stateNode;
                if (!(o.flags & 128) && (typeof c.getDerivedStateFromError == "function" || d !== null && typeof d.componentDidCatch == "function" && (Hn === null || !Hn.has(d)))) {
                  o.flags |= 65536, n &= -n, o.lanes |= n;
                  var w = Rs(o, i, n);
                  bi(o, w);
                  break e;
                }
            }
            o = o.return;
          } while (o !== null);
        }
        fa(t);
      } catch (x) {
        n = x, pe === t && t !== null && (pe = t = t.return);
        continue;
      }
      break;
    } while (1);
  }
  function aa() {
    var e = pl.current;
    return pl.current = sl, e === null ? sl : e;
  }
  function hu() {
    (ye === 0 || ye === 3 || ye === 2) && (ye = 4), we === null || !(rt & 268435455) && !(ml & 268435455) || Kn(we, Ee);
  }
  function Sl(e, n) {
    var t = U;
    U |= 2;
    var r = aa();
    (we !== e || Ee !== n) && (zn = null, ot(e, n));
    do
      try {
        mf();
        break;
      } catch (l) {
        sa(e, l);
      }
    while (1);
    if (zo(), U = t, pl.current = r, pe !== null)
      throw Error(m(261));
    return we = null, Ee = 0, ye;
  }
  function mf() {
    for (; pe !== null; )
      ca(pe);
  }
  function hf() {
    for (; pe !== null && !Aa(); )
      ca(pe);
  }
  function ca(e) {
    var n = ma(e.alternate, e, Ge);
    e.memoizedProps = e.pendingProps, n === null ? fa(e) : pe = n, uu.current = null;
  }
  function fa(e) {
    var n = e;
    do {
      var t = n.alternate;
      if (e = n.return, n.flags & 32768) {
        if (t = sf(t, n), t !== null) {
          t.flags &= 32767, pe = t;
          return;
        }
        if (e !== null)
          e.flags |= 32768, e.subtreeFlags = 0, e.deletions = null;
        else {
          ye = 6, pe = null;
          return;
        }
      } else if (t = uf(t, n, Ge), t !== null) {
        pe = t;
        return;
      }
      if (n = n.sibling, n !== null) {
        pe = n;
        return;
      }
      pe = n = e;
    } while (n !== null);
    ye === 0 && (ye = 5);
  }
  function ut(e, n, t) {
    var r = W, l = en.transition;
    try {
      en.transition = null, W = 1, vf(e, n, t, r);
    } finally {
      en.transition = l, W = r;
    }
    return null;
  }
  function vf(e, n, t, r) {
    do
      Ot();
    while (Qn !== null);
    if (U & 6)
      throw Error(m(327));
    t = e.finishedWork;
    var l = e.finishedLanes;
    if (t === null)
      return null;
    if (e.finishedWork = null, e.finishedLanes = 0, t === e.current)
      throw Error(m(177));
    e.callbackNode = null, e.callbackPriority = 0;
    var o = t.lanes | t.childLanes;
    if (Xa(e, o), e === we && (pe = we = null, Ee = 0), !(t.subtreeFlags & 2064) && !(t.flags & 2064) || vl || (vl = !0, ha(Cr, function() {
      return Ot(), null;
    })), o = (t.flags & 15990) !== 0, t.subtreeFlags & 15990 || o) {
      o = en.transition, en.transition = null;
      var u = W;
      W = 1;
      var i = U;
      U |= 4, uu.current = null, cf(e, t), na(t, e), Ic(ho), Rr = !!mo, ho = mo = null, e.current = t, ff(t), Va(), U = i, W = u, en.transition = o;
    } else
      e.current = t;
    if (vl && (vl = !1, Qn = e, yl = l), o = e.pendingLanes, o === 0 && (Hn = null), Ha(t.stateNode), Be(e, fe()), n !== null)
      for (r = e.onRecoverableError, t = 0; t < n.length; t++)
        l = n[t], r(l.value, { componentStack: l.stack, digest: l.digest });
    if (hl)
      throw hl = !1, e = au, au = null, e;
    return yl & 1 && e.tag !== 0 && Ot(), o = e.pendingLanes, o & 1 ? e === cu ? vr++ : (vr = 0, cu = e) : vr = 0, An(), null;
  }
  function Ot() {
    if (Qn !== null) {
      var e = qu(yl), n = en.transition, t = W;
      try {
        if (en.transition = null, W = 16 > e ? 16 : e, Qn === null)
          var r = !1;
        else {
          if (e = Qn, Qn = null, yl = 0, U & 6)
            throw Error(m(331));
          var l = U;
          for (U |= 4, E = e.current; E !== null; ) {
            var o = E, u = o.child;
            if (E.flags & 16) {
              var i = o.deletions;
              if (i !== null) {
                for (var s = 0; s < i.length; s++) {
                  var p = i[s];
                  for (E = p; E !== null; ) {
                    var y = E;
                    switch (y.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(8, y, o);
                    }
                    var g = y.child;
                    if (g !== null)
                      g.return = y, E = g;
                    else
                      for (; E !== null; ) {
                        y = E;
                        var h = y.sibling, k = y.return;
                        if (Zs(y), y === p) {
                          E = null;
                          break;
                        }
                        if (h !== null) {
                          h.return = k, E = h;
                          break;
                        }
                        E = k;
                      }
                  }
                }
                var _ = o.alternate;
                if (_ !== null) {
                  var C = _.child;
                  if (C !== null) {
                    _.child = null;
                    do {
                      var de = C.sibling;
                      C.sibling = null, C = de;
                    } while (C !== null);
                  }
                }
                E = o;
              }
            }
            if (o.subtreeFlags & 2064 && u !== null)
              u.return = o, E = u;
            else
              e:
                for (; E !== null; ) {
                  if (o = E, o.flags & 2048)
                    switch (o.tag) {
                      case 0:
                      case 11:
                      case 15:
                        pr(9, o, o.return);
                    }
                  var f = o.sibling;
                  if (f !== null) {
                    f.return = o.return, E = f;
                    break e;
                  }
                  E = o.return;
                }
          }
          var c = e.current;
          for (E = c; E !== null; ) {
            u = E;
            var d = u.child;
            if (u.subtreeFlags & 2064 && d !== null)
              d.return = u, E = d;
            else
              e:
                for (u = c; E !== null; ) {
                  if (i = E, i.flags & 2048)
                    try {
                      switch (i.tag) {
                        case 0:
                        case 11:
                        case 15:
                          dl(9, i);
                      }
                    } catch (x) {
                      se(i, i.return, x);
                    }
                  if (i === u) {
                    E = null;
                    break e;
                  }
                  var w = i.sibling;
                  if (w !== null) {
                    w.return = i.return, E = w;
                    break e;
                  }
                  E = i.return;
                }
          }
          if (U = l, An(), vn && typeof vn.onPostCommitFiberRoot == "function")
            try {
              vn.onPostCommitFiberRoot(xr, e);
            } catch {
            }
          r = !0;
        }
        return r;
      } finally {
        W = t, en.transition = n;
      }
    }
    return !1;
  }
  function da(e, n, t) {
    n = zt(t, n), n = Ls(e, n, 1), e = $n(e, n, 1), n = Le(), e !== null && (Vt(e, 1, n), Be(e, n));
  }
  function se(e, n, t) {
    if (e.tag === 3)
      da(e, e, t);
    else
      for (; n !== null; ) {
        if (n.tag === 3) {
          da(n, e, t);
          break;
        } else if (n.tag === 1) {
          var r = n.stateNode;
          if (typeof n.type.getDerivedStateFromError == "function" || typeof r.componentDidCatch == "function" && (Hn === null || !Hn.has(r))) {
            e = zt(t, e), e = Rs(n, e, 1), n = $n(n, e, 1), e = Le(), n !== null && (Vt(n, 1, e), Be(n, e));
            break;
          }
        }
        n = n.return;
      }
  }
  function yf(e, n, t) {
    var r = e.pingCache;
    r !== null && r.delete(n), n = Le(), e.pingedLanes |= e.suspendedLanes & t, we === e && (Ee & t) === t && (ye === 4 || ye === 3 && (Ee & 130023424) === Ee && 500 > fe() - su ? ot(e, 0) : iu |= t), Be(e, n);
  }
  function pa(e, n) {
    n === 0 && (e.mode & 1 ? (n = Pr, Pr <<= 1, !(Pr & 130023424) && (Pr = 4194304)) : n = 1);
    var t = Le();
    e = xn(e, n), e !== null && (Vt(e, n, t), Be(e, t));
  }
  function gf(e) {
    var n = e.memoizedState, t = 0;
    n !== null && (t = n.retryLane), pa(e, t);
  }
  function wf(e, n) {
    var t = 0;
    switch (e.tag) {
      case 13:
        var r = e.stateNode, l = e.memoizedState;
        l !== null && (t = l.retryLane);
        break;
      case 19:
        r = e.stateNode;
        break;
      default:
        throw Error(m(314));
    }
    r !== null && r.delete(n), pa(e, t);
  }
  var ma;
  ma = function(e, n, t) {
    if (e !== null)
      if (e.memoizedProps !== n.pendingProps || Ue.current)
        Ve = !0;
      else {
        if (!(e.lanes & t) && !(n.flags & 128))
          return Ve = !1, of(e, n, t);
        Ve = !!(e.flags & 131072);
      }
    else
      Ve = !1, ne && n.flags & 1048576 && Ki(n, Xr, n.index);
    switch (n.lanes = 0, n.tag) {
      case 2:
        var r = n.type;
        cl(e, n), e = n.pendingProps;
        var l = St(n, Ce.current);
        xt(n, t), l = $o(null, n, r, e, l, t);
        var o = Bo();
        return n.flags |= 1, typeof l == "object" && l !== null && typeof l.render == "function" && l.$$typeof === void 0 ? (n.tag = 1, n.memoizedState = null, n.updateQueue = null, Ae(r) ? (o = !0, Kr(n)) : o = !1, n.memoizedState = l.state !== null && l.state !== void 0 ? l.state : null, Oo(n), l.updater = nl, n.stateNode = l, l._reactInternals = n, Do(n, r, e, t), n = Zo(null, n, r, !0, o, t)) : (n.tag = 0, ne && o && Eo(n), Te(null, n, l, t), n = n.child), n;
      case 16:
        r = n.elementType;
        e: {
          switch (cl(e, n), e = n.pendingProps, l = r._init, r = l(r._payload), n.type = r, l = n.tag = kf(r), e = fn(r, e), l) {
            case 0:
              n = Xo(null, n, r, e, t);
              break e;
            case 1:
              n = Vs(null, n, r, e, t);
              break e;
            case 11:
              n = Is(null, n, r, e, t);
              break e;
            case 14:
              n = Fs(null, n, r, fn(r.type, e), t);
              break e;
          }
          throw Error(m(
            306,
            r,
            ""
          ));
        }
        return n;
      case 0:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : fn(r, l), Xo(e, n, r, l, t);
      case 1:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : fn(r, l), Vs(e, n, r, l, t);
      case 3:
        e: {
          if ($s(n), e === null)
            throw Error(m(387));
          r = n.pendingProps, o = n.memoizedState, l = o.element, qi(e, n), el(n, r, null, t);
          var u = n.memoizedState;
          if (r = u.element, o.isDehydrated)
            if (o = { element: r, isDehydrated: !1, cache: u.cache, pendingSuspenseBoundaries: u.pendingSuspenseBoundaries, transitions: u.transitions }, n.updateQueue.baseState = o, n.memoizedState = o, n.flags & 256) {
              l = zt(Error(m(423)), n), n = Bs(e, n, r, t, l);
              break e;
            } else if (r !== l) {
              l = zt(Error(m(424)), n), n = Bs(e, n, r, t, l);
              break e;
            } else
              for (Ye = Fn(n.stateNode.containerInfo.firstChild), Ke = n, ne = !0, cn = null, t = is(n, null, r, t), n.child = t; t; )
                t.flags = t.flags & -3 | 4096, t = t.sibling;
          else {
            if (_t(), r === l) {
              n = Pn(e, n, t);
              break e;
            }
            Te(e, n, r, t);
          }
          n = n.child;
        }
        return n;
      case 5:
        return ss(n), e === null && xo(n), r = n.type, l = n.pendingProps, o = e !== null ? e.memoizedProps : null, u = l.children, vo(r, l) ? u = null : o !== null && vo(r, o) && (n.flags |= 32), As(e, n), Te(e, n, u, t), n.child;
      case 6:
        return e === null && xo(n), null;
      case 13:
        return Hs(e, n, t);
      case 4:
        return Io(n, n.stateNode.containerInfo), r = n.pendingProps, e === null ? n.child = Nt(n, null, r, t) : Te(e, n, r, t), n.child;
      case 11:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : fn(r, l), Is(e, n, r, l, t);
      case 7:
        return Te(e, n, n.pendingProps, t), n.child;
      case 8:
        return Te(e, n, n.pendingProps.children, t), n.child;
      case 12:
        return Te(e, n, n.pendingProps.children, t), n.child;
      case 10:
        e: {
          if (r = n.type._context, l = n.pendingProps, o = n.memoizedProps, u = l.value, J(Jr, r._currentValue), r._currentValue = u, o !== null)
            if (an(o.value, u)) {
              if (o.children === l.children && !Ue.current) {
                n = Pn(e, n, t);
                break e;
              }
            } else
              for (o = n.child, o !== null && (o.return = n); o !== null; ) {
                var i = o.dependencies;
                if (i !== null) {
                  u = o.child;
                  for (var s = i.firstContext; s !== null; ) {
                    if (s.context === r) {
                      if (o.tag === 1) {
                        s = Nn(-1, t & -t), s.tag = 2;
                        var p = o.updateQueue;
                        if (p !== null) {
                          p = p.shared;
                          var y = p.pending;
                          y === null ? s.next = s : (s.next = y.next, y.next = s), p.pending = s;
                        }
                      }
                      o.lanes |= t, s = o.alternate, s !== null && (s.lanes |= t), Lo(
                        o.return,
                        t,
                        n
                      ), i.lanes |= t;
                      break;
                    }
                    s = s.next;
                  }
                } else if (o.tag === 10)
                  u = o.type === n.type ? null : o.child;
                else if (o.tag === 18) {
                  if (u = o.return, u === null)
                    throw Error(m(341));
                  u.lanes |= t, i = u.alternate, i !== null && (i.lanes |= t), Lo(u, t, n), u = o.sibling;
                } else
                  u = o.child;
                if (u !== null)
                  u.return = o;
                else
                  for (u = o; u !== null; ) {
                    if (u === n) {
                      u = null;
                      break;
                    }
                    if (o = u.sibling, o !== null) {
                      o.return = u.return, u = o;
                      break;
                    }
                    u = u.return;
                  }
                o = u;
              }
          Te(e, n, l.children, t), n = n.child;
        }
        return n;
      case 9:
        return l = n.type, r = n.pendingProps.children, xt(n, t), l = qe(l), r = r(l), n.flags |= 1, Te(e, n, r, t), n.child;
      case 14:
        return r = n.type, l = fn(r, n.pendingProps), l = fn(r.type, l), Fs(e, n, r, l, t);
      case 15:
        return js(e, n, n.type, n.pendingProps, t);
      case 17:
        return r = n.type, l = n.pendingProps, l = n.elementType === r ? l : fn(r, l), cl(e, n), n.tag = 1, Ae(r) ? (e = !0, Kr(n)) : e = !1, xt(n, t), rs(n, r, l), Do(n, r, l, t), Zo(null, n, r, !0, e, t);
      case 19:
        return Ws(e, n, t);
      case 22:
        return Us(e, n, t);
    }
    throw Error(m(156, n.tag));
  };
  function ha(e, n) {
    return Yu(e, n);
  }
  function Sf(e, n, t, r) {
    this.tag = e, this.key = t, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = n, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = r, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function nn(e, n, t, r) {
    return new Sf(e, n, t, r);
  }
  function vu(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function kf(e) {
    if (typeof e == "function")
      return vu(e) ? 1 : 0;
    if (e != null) {
      if (e = e.$$typeof, e === on)
        return 11;
      if (e === hn)
        return 14;
    }
    return 2;
  }
  function Yn(e, n) {
    var t = e.alternate;
    return t === null ? (t = nn(e.tag, n, e.key, e.mode), t.elementType = e.elementType, t.type = e.type, t.stateNode = e.stateNode, t.alternate = e, e.alternate = t) : (t.pendingProps = n, t.type = e.type, t.flags = 0, t.subtreeFlags = 0, t.deletions = null), t.flags = e.flags & 14680064, t.childLanes = e.childLanes, t.lanes = e.lanes, t.child = e.child, t.memoizedProps = e.memoizedProps, t.memoizedState = e.memoizedState, t.updateQueue = e.updateQueue, n = e.dependencies, t.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }, t.sibling = e.sibling, t.index = e.index, t.ref = e.ref, t;
  }
  function kl(e, n, t, r, l, o) {
    var u = 2;
    if (r = e, typeof e == "function")
      vu(e) && (u = 1);
    else if (typeof e == "string")
      u = 5;
    else
      e:
        switch (e) {
          case V:
            return it(t.children, l, o, n);
          case ue:
            u = 8, l |= 8;
            break;
          case ze:
            return e = nn(12, t, n, l | 2), e.elementType = ze, e.lanes = o, e;
          case Qe:
            return e = nn(13, t, n, l), e.elementType = Qe, e.lanes = o, e;
          case un:
            return e = nn(19, t, n, l), e.elementType = un, e.lanes = o, e;
          case ie:
            return El(t, l, o, n);
          default:
            if (typeof e == "object" && e !== null)
              switch (e.$$typeof) {
                case Ie:
                  u = 10;
                  break e;
                case ln:
                  u = 9;
                  break e;
                case on:
                  u = 11;
                  break e;
                case hn:
                  u = 14;
                  break e;
                case Fe:
                  u = 16, r = null;
                  break e;
              }
            throw Error(m(130, e == null ? e : typeof e, ""));
        }
    return n = nn(u, t, n, l), n.elementType = e, n.type = r, n.lanes = o, n;
  }
  function it(e, n, t, r) {
    return e = nn(7, e, r, n), e.lanes = t, e;
  }
  function El(e, n, t, r) {
    return e = nn(22, e, r, n), e.elementType = ie, e.lanes = t, e.stateNode = { isHidden: !1 }, e;
  }
  function yu(e, n, t) {
    return e = nn(6, e, null, n), e.lanes = t, e;
  }
  function gu(e, n, t) {
    return n = nn(4, e.children !== null ? e.children : [], e.key, n), n.lanes = t, n.stateNode = { containerInfo: e.containerInfo, pendingChildren: null, implementation: e.implementation }, n;
  }
  function Ef(e, n, t, r, l) {
    this.tag = n, this.containerInfo = e, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = Ql(0), this.expirationTimes = Ql(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ql(0), this.identifierPrefix = r, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null;
  }
  function wu(e, n, t, r, l, o, u, i, s) {
    return e = new Ef(e, n, t, i, s), n === 1 ? (n = 1, o === !0 && (n |= 8)) : n = 0, o = nn(3, null, null, n), e.current = o, o.stateNode = e, o.memoizedState = { element: r, isDehydrated: t, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Oo(o), e;
  }
  function _f(e, n, t) {
    var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: j, key: r == null ? null : "" + r, children: e, containerInfo: n, implementation: t };
  }
  function va(e) {
    if (!e)
      return Un;
    e = e._reactInternals;
    e: {
      if (Xn(e) !== e || e.tag !== 1)
        throw Error(m(170));
      var n = e;
      do {
        switch (n.tag) {
          case 3:
            n = n.stateNode.context;
            break e;
          case 1:
            if (Ae(n.type)) {
              n = n.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        n = n.return;
      } while (n !== null);
      throw Error(m(171));
    }
    if (e.tag === 1) {
      var t = e.type;
      if (Ae(t))
        return Hi(e, t, n);
    }
    return n;
  }
  function ya(e, n, t, r, l, o, u, i, s) {
    return e = wu(t, r, !0, e, l, o, u, i, s), e.context = va(null), t = e.current, r = Le(), l = Wn(t), o = Nn(r, l), o.callback = n ?? null, $n(t, o, l), e.current.lanes = l, Vt(e, l, r), Be(e, r), e;
  }
  function _l(e, n, t, r) {
    var l = n.current, o = Le(), u = Wn(l);
    return t = va(t), n.context === null ? n.context = t : n.pendingContext = t, n = Nn(o, u), n.payload = { element: e }, r = r === void 0 ? null : r, r !== null && (n.callback = r), e = $n(l, n, u), e !== null && (mn(e, l, u, o), br(e, l, u)), u;
  }
  function Cl(e) {
    if (e = e.current, !e.child)
      return null;
    switch (e.child.tag) {
      case 5:
        return e.child.stateNode;
      default:
        return e.child.stateNode;
    }
  }
  function ga(e, n) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var t = e.retryLane;
      e.retryLane = t !== 0 && t < n ? t : n;
    }
  }
  function Su(e, n) {
    ga(e, n), (e = e.alternate) && ga(e, n);
  }
  function Cf() {
    return null;
  }
  var wa = typeof reportError == "function" ? reportError : function(e) {
    console.error(e);
  };
  function ku(e) {
    this._internalRoot = e;
  }
  xl.prototype.render = ku.prototype.render = function(e) {
    var n = this._internalRoot;
    if (n === null)
      throw Error(m(409));
    _l(e, n, null, null);
  }, xl.prototype.unmount = ku.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var n = e.containerInfo;
      lt(function() {
        _l(null, e, null, null);
      }), n[kn] = null;
    }
  };
  function xl(e) {
    this._internalRoot = e;
  }
  xl.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var n = ni();
      e = { blockedOn: null, target: e, priority: n };
      for (var t = 0; t < Mn.length && n !== 0 && n < Mn[t].priority; t++)
        ;
      Mn.splice(t, 0, e), t === 0 && li(e);
    }
  };
  function Eu(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function Nl(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11 && (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "));
  }
  function Sa() {
  }
  function xf(e, n, t, r, l) {
    if (l) {
      if (typeof r == "function") {
        var o = r;
        r = function() {
          var p = Cl(u);
          o.call(p);
        };
      }
      var u = ya(n, r, e, 0, null, !1, !1, "", Sa);
      return e._reactRootContainer = u, e[kn] = u.current, er(e.nodeType === 8 ? e.parentNode : e), lt(), u;
    }
    for (; l = e.lastChild; )
      e.removeChild(l);
    if (typeof r == "function") {
      var i = r;
      r = function() {
        var p = Cl(s);
        i.call(p);
      };
    }
    var s = wu(e, 0, !1, null, null, !1, !1, "", Sa);
    return e._reactRootContainer = s, e[kn] = s.current, er(e.nodeType === 8 ? e.parentNode : e), lt(function() {
      _l(n, s, t, r);
    }), s;
  }
  function Pl(e, n, t, r, l) {
    var o = t._reactRootContainer;
    if (o) {
      var u = o;
      if (typeof l == "function") {
        var i = l;
        l = function() {
          var s = Cl(u);
          i.call(s);
        };
      }
      _l(n, u, e, l);
    } else
      u = xf(t, n, e, l, r);
    return Cl(u);
  }
  bu = function(e) {
    switch (e.tag) {
      case 3:
        var n = e.stateNode;
        if (n.current.memoizedState.isDehydrated) {
          var t = At(n.pendingLanes);
          t !== 0 && (Wl(n, t | 1), Be(n, fe()), !(U & 6) && (Rt = fe() + 500, An()));
        }
        break;
      case 13:
        lt(function() {
          var r = xn(e, 1);
          if (r !== null) {
            var l = Le();
            mn(r, e, 1, l);
          }
        }), Su(e, 1);
    }
  }, Kl = function(e) {
    if (e.tag === 13) {
      var n = xn(e, 134217728);
      if (n !== null) {
        var t = Le();
        mn(n, e, 134217728, t);
      }
      Su(e, 134217728);
    }
  }, ei = function(e) {
    if (e.tag === 13) {
      var n = Wn(e), t = xn(e, n);
      if (t !== null) {
        var r = Le();
        mn(t, e, n, r);
      }
      Su(e, n);
    }
  }, ni = function() {
    return W;
  }, ti = function(e, n) {
    var t = W;
    try {
      return W = e, n();
    } finally {
      W = t;
    }
  }, Ul = function(e, n, t) {
    switch (n) {
      case "input":
        if (Ll(e, t), n = t.name, t.type === "radio" && n != null) {
          for (t = e; t.parentNode; )
            t = t.parentNode;
          for (t = t.querySelectorAll("input[name=" + JSON.stringify("" + n) + '][type="radio"]'), n = 0; n < t.length; n++) {
            var r = t[n];
            if (r !== e && r.form === e.form) {
              var l = Qr(r);
              if (!l)
                throw Error(m(90));
              Nu(r), Ll(r, l);
            }
          }
        }
        break;
      case "textarea":
        Ru(e, t);
        break;
      case "select":
        n = t.value, n != null && st(e, !!t.multiple, n, !1);
    }
  }, Vu = pu, $u = lt;
  var Nf = { usingClientEntryPoint: !1, Events: [rr, gt, Qr, Uu, Au, pu] }, yr = { findFiberByHostInstance: Zn, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, Pf = { bundleType: yr.bundleType, version: yr.version, rendererPackageName: yr.rendererPackageName, rendererConfig: yr.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: z.ReactCurrentDispatcher, findHostInstanceByFiber: function(e) {
    return e = Wu(e), e === null ? null : e.stateNode;
  }, findFiberByHostInstance: yr.findFiberByHostInstance || Cf, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zl = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zl.isDisabled && zl.supportsFiber)
      try {
        xr = zl.inject(Pf), vn = zl;
      } catch {
      }
  }
  return He.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Nf, He.createPortal = function(e, n) {
    var t = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Eu(n))
      throw Error(m(200));
    return _f(e, n, null, t);
  }, He.createRoot = function(e, n) {
    if (!Eu(e))
      throw Error(m(299));
    var t = !1, r = "", l = wa;
    return n != null && (n.unstable_strictMode === !0 && (t = !0), n.identifierPrefix !== void 0 && (r = n.identifierPrefix), n.onRecoverableError !== void 0 && (l = n.onRecoverableError)), n = wu(e, 1, !1, null, null, t, !1, r, l), e[kn] = n.current, er(e.nodeType === 8 ? e.parentNode : e), new ku(n);
  }, He.findDOMNode = function(e) {
    if (e == null)
      return null;
    if (e.nodeType === 1)
      return e;
    var n = e._reactInternals;
    if (n === void 0)
      throw typeof e.render == "function" ? Error(m(188)) : (e = Object.keys(e).join(","), Error(m(268, e)));
    return e = Wu(n), e = e === null ? null : e.stateNode, e;
  }, He.flushSync = function(e) {
    return lt(e);
  }, He.hydrate = function(e, n, t) {
    if (!Nl(n))
      throw Error(m(200));
    return Pl(null, e, n, !0, t);
  }, He.hydrateRoot = function(e, n, t) {
    if (!Eu(e))
      throw Error(m(405));
    var r = t != null && t.hydratedSources || null, l = !1, o = "", u = wa;
    if (t != null && (t.unstable_strictMode === !0 && (l = !0), t.identifierPrefix !== void 0 && (o = t.identifierPrefix), t.onRecoverableError !== void 0 && (u = t.onRecoverableError)), n = ya(n, null, e, 1, t ?? null, l, !1, o, u), e[kn] = n.current, er(e), r)
      for (e = 0; e < r.length; e++)
        t = r[e], l = t._getVersion, l = l(t._source), n.mutableSourceEagerHydrationData == null ? n.mutableSourceEagerHydrationData = [t, l] : n.mutableSourceEagerHydrationData.push(
          t,
          l
        );
    return new xl(n);
  }, He.render = function(e, n, t) {
    if (!Nl(n))
      throw Error(m(200));
    return Pl(null, e, n, !1, t);
  }, He.unmountComponentAtNode = function(e) {
    if (!Nl(e))
      throw Error(m(40));
    return e._reactRootContainer ? (lt(function() {
      Pl(null, null, e, !1, function() {
        e._reactRootContainer = null, e[kn] = null;
      });
    }), !0) : !1;
  }, He.unstable_batchedUpdates = pu, He.unstable_renderSubtreeIntoContainer = function(e, n, t, r) {
    if (!Nl(t))
      throw Error(m(200));
    if (e == null || e._reactInternals === void 0)
      throw Error(m(38));
    return Pl(e, n, t, !1, r);
  }, He.version = "18.2.0-next-9e3b772b8-20220608", He;
}
function La() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(La);
    } catch (N) {
      console.error(N);
    }
}
La(), Ta.exports = If();
var Ff = Ta.exports;
const Na = /* @__PURE__ */ Tf(Ff);
function jf() {
  var De;
  const [N, te] = Tn.useState(null), [m, Re] = Tn.useState(null), [K, _e] = Tn.useState(null), [oe, ce] = Tn.useState(null), [B, me] = Tn.useState(null), [he, q] = Tn.useState(null), Y = "https://dam4-training.sitecoresandbox.cloud";
  Tn.useEffect(() => {
    async function z(j) {
      var V, ue;
      try {
        const Ie = await (await fetch(j || `${Y}/api/entitydefinitions`)).json();
        te((ln) => ({
          items: ((ln == null ? void 0 : ln.items) || []).concat(Ie.items),
          next: Ie.next
        })), Ie.next ? await z(Ie.next) : console.log("All items fetched:", N == null ? void 0 : N.items);
      } catch (ze) {
        console.error(ze);
      }
      !m && Re((ue = (V = N == null ? void 0 : N.items) == null ? void 0 : V[0]) == null ? void 0 : ue.name);
    }
    async function I() {
      var j;
      if (m)
        try {
          const ue = await (await fetch(`${Y}/api/entitydefinitions/${m}`)).json();
          _e(ue), ce((j = ue == null ? void 0 : ue.member_groups[0]) == null ? void 0 : j.name);
        } catch (V) {
          console.error(V);
        }
    }
    z(), I();
  }, [m]);
  function Oe(z) {
    ce(z);
  }
  function Me(z) {
    me(B === z ? null : z);
  }
  function G() {
    if (!K || !oe)
      return "";
    const z = K.member_groups.find(
      (V) => V.name === oe
    );
    if (!z)
      return "";
    const I = z.members.filter((V) => V.selected);
    if (I.length === 0)
      return "";
    const j = `    {  
      ${z.name} {
        ${I.map((V) => V.name).join(`
        `)}
      }
    }`;
    return console.log(j), j;
  }
  async function Q() {
    const z = G();
    if (z)
      try {
        const j = await (await fetch("<YOUR_GRAPHQL_ENDPOINT>", {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({ query: z })
        })).json();
        q(j.data);
      } catch (I) {
        console.error(I);
      }
  }
  function rn(z, I) {
    const j = { ...K }, ue = j.member_groups.find(
      (ze) => ze.name === oe
    ).members.find((ze) => ze.name === z.name);
    ue.selected = I, _e(j);
  }
  function Xe(z) {
    const I = z.target.value;
    Re(I);
  }
  return /* @__PURE__ */ tn(Of, { children: [
    /* @__PURE__ */ tn("div", { children: [
      m ? /* @__PURE__ */ tn("h1", { children: [
        "Schema: ",
        m
      ] }) : /* @__PURE__ */ ae("h1", { children: "Choose Schema:" }),
      /* @__PURE__ */ ae("select", { onChange: Xe, children: (De = N == null ? void 0 : N.items) == null ? void 0 : De.map((z) => /* @__PURE__ */ ae("option", { value: z.name, children: z.name }, `option-${z.name}`)) })
    ] }),
    /* @__PURE__ */ tn("div", { className: "container", children: [
      /* @__PURE__ */ ae("div", { className: "left-side", children: K == null ? void 0 : K.member_groups.map((z) => /* @__PURE__ */ ae(
        "div",
        {
          className: "member-groups-container",
          onClick: () => Oe(z.name),
          children: /* @__PURE__ */ ae("ul", { className: "member-groups-data-container", children: /* @__PURE__ */ ae("li", { children: z.name }, `member-groups-li-${z.name}`) })
        },
        `member-groups-${z.name}`
      )) }),
      oe && /* @__PURE__ */ tn("div", { className: "right-side", children: [
        /* @__PURE__ */ tn("h2", { children: [
          oe,
          ": "
        ] }),
        K == null ? void 0 : K.member_groups.filter((z) => z.name === oe).map(
          (z) => z.members.map((I) => /* @__PURE__ */ ae(
            "div",
            {
              className: "properties-data-container",
              children: /* @__PURE__ */ ae("ul", { children: /* @__PURE__ */ tn("li", { children: [
                /* @__PURE__ */ tn("span", { children: [
                  I.name,
                  " ",
                  /* @__PURE__ */ ae(
                    "input",
                    {
                      type: "checkbox",
                      checked: I.selected || !1,
                      onChange: (j) => rn(I, j.target.checked)
                    }
                  ),
                  /* @__PURE__ */ ae("div", { className: "i-icon", onClick: () => Me(I), children: /* @__PURE__ */ ae("span", { children: "ⓘ" }) }),
                  B === I && /* @__PURE__ */ ae("div", { className: "additional-data", children: /* @__PURE__ */ tn("ul", { children: [
                    Object.entries(I).map(([j, V]) => /* @__PURE__ */ tn("li", { children: [
                      j,
                      ":",
                      " ",
                      typeof V == "object" ? JSON.stringify(V) : V.toString()
                    ] }, `property-${j}`)),
                    /* @__PURE__ */ ae(
                      "div",
                      {
                        className: "close-icon",
                        onClick: () => me(null),
                        children: "✖"
                      }
                    )
                  ] }) })
                ] }),
                /* @__PURE__ */ ae("span", { children: I.type }),
                /* @__PURE__ */ ae("span", { children: `is_conditional: ${I.is_conditional}` })
              ] }) }, `data-container-ul-${I.name}`)
            },
            `properties-data-container-${I.name}`
          ))
        ),
        he && /* @__PURE__ */ tn("div", { className: "query-result", children: [
          /* @__PURE__ */ ae("h3", { children: "Query Result:" }),
          /* @__PURE__ */ ae("pre", { children: JSON.stringify(he, null, 2) })
        ] }),
        K == null ? void 0 : K.member_groups.filter((z) => z.name === oe && z.members.length === 0).map((z) => /* @__PURE__ */ ae("li", { className: "properties-empty", children: "No properties found" }, `properties-empty-${z.name}`))
      ] })
    ] }, "container"),
    /* @__PURE__ */ tn("div", { className: "graphql-query-container", children: [
      /* @__PURE__ */ ae("textarea", { className: "graphql-query", value: G(), readOnly: !0 }),
      /* @__PURE__ */ ae("button", { onClick: Q, children: "Execute Query" })
    ] })
  ] });
}
function Uf(N) {
  return Na.render(/* @__PURE__ */ ae(jf, {}), N), {
    unmount() {
      Na.unmountComponentAtNode(N);
    }
  };
}
export {
  Uf as default
};
