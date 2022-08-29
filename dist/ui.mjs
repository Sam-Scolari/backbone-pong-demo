function V_(Y) {
  return Y && Y.__esModule && Object.prototype.hasOwnProperty.call(Y, "default") ? Y.default : Y;
}
var Ys = { exports: {} }, ot = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I1;
function B_() {
  if (I1)
    return ot;
  I1 = 1;
  var Y = Symbol.for("react.element"), q = Symbol.for("react.portal"), U = Symbol.for("react.fragment"), nn = Symbol.for("react.strict_mode"), rn = Symbol.for("react.profiler"), Je = Symbol.for("react.provider"), S = Symbol.for("react.context"), an = Symbol.for("react.forward_ref"), Oe = Symbol.for("react.suspense"), me = Symbol.for("react.memo"), Ht = Symbol.for("react.lazy"), oe = Symbol.iterator;
  function ge(R) {
    return R === null || typeof R != "object" ? null : (R = oe && R[oe] || R["@@iterator"], typeof R == "function" ? R : null);
  }
  var ue = { isMounted: function() {
    return !1;
  }, enqueueForceUpdate: function() {
  }, enqueueReplaceState: function() {
  }, enqueueSetState: function() {
  } }, Fe = Object.assign, vt = {};
  function nt(R, B, ae) {
    this.props = R, this.context = B, this.refs = vt, this.updater = ae || ue;
  }
  nt.prototype.isReactComponent = {}, nt.prototype.setState = function(R, B) {
    if (typeof R != "object" && typeof R != "function" && R != null)
      throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
    this.updater.enqueueSetState(this, R, B, "setState");
  }, nt.prototype.forceUpdate = function(R) {
    this.updater.enqueueForceUpdate(this, R, "forceUpdate");
  };
  function Kn() {
  }
  Kn.prototype = nt.prototype;
  function Gt(R, B, ae) {
    this.props = R, this.context = B, this.refs = vt, this.updater = ae || ue;
  }
  var Be = Gt.prototype = new Kn();
  Be.constructor = Gt, Fe(Be, nt.prototype), Be.isPureReactComponent = !0;
  var rt = Array.isArray, Te = Object.prototype.hasOwnProperty, qe = { current: null }, Ue = { key: !0, ref: !0, __self: !0, __source: !0 };
  function qt(R, B, ae) {
    var Ve, Me = {}, ft = null, Xe = null;
    if (B != null)
      for (Ve in B.ref !== void 0 && (Xe = B.ref), B.key !== void 0 && (ft = "" + B.key), B)
        Te.call(B, Ve) && !Ue.hasOwnProperty(Ve) && (Me[Ve] = B[Ve]);
    var dt = arguments.length - 2;
    if (dt === 1)
      Me.children = ae;
    else if (1 < dt) {
      for (var et = Array(dt), zt = 0; zt < dt; zt++)
        et[zt] = arguments[zt + 2];
      Me.children = et;
    }
    if (R && R.defaultProps)
      for (Ve in dt = R.defaultProps, dt)
        Me[Ve] === void 0 && (Me[Ve] = dt[Ve]);
    return { $$typeof: Y, type: R, key: ft, ref: Xe, props: Me, _owner: qe.current };
  }
  function Dn(R, B) {
    return { $$typeof: Y, type: R.type, key: B, ref: R.ref, props: R.props, _owner: R._owner };
  }
  function Nt(R) {
    return typeof R == "object" && R !== null && R.$$typeof === Y;
  }
  function Et(R) {
    var B = { "=": "=0", ":": "=2" };
    return "$" + R.replace(/[=:]/g, function(ae) {
      return B[ae];
    });
  }
  var En = /\/+/g;
  function Ye(R, B) {
    return typeof R == "object" && R !== null && R.key != null ? Et("" + R.key) : B.toString(36);
  }
  function at(R, B, ae, Ve, Me) {
    var ft = typeof R;
    (ft === "undefined" || ft === "boolean") && (R = null);
    var Xe = !1;
    if (R === null)
      Xe = !0;
    else
      switch (ft) {
        case "string":
        case "number":
          Xe = !0;
          break;
        case "object":
          switch (R.$$typeof) {
            case Y:
            case q:
              Xe = !0;
          }
      }
    if (Xe)
      return Xe = R, Me = Me(Xe), R = Ve === "" ? "." + Ye(Xe, 0) : Ve, rt(Me) ? (ae = "", R != null && (ae = R.replace(En, "$&/") + "/"), at(Me, B, ae, "", function(zt) {
        return zt;
      })) : Me != null && (Nt(Me) && (Me = Dn(Me, ae + (!Me.key || Xe && Xe.key === Me.key ? "" : ("" + Me.key).replace(En, "$&/") + "/") + R)), B.push(Me)), 1;
    if (Xe = 0, Ve = Ve === "" ? "." : Ve + ":", rt(R))
      for (var dt = 0; dt < R.length; dt++) {
        ft = R[dt];
        var et = Ve + Ye(ft, dt);
        Xe += at(ft, B, ae, et, Me);
      }
    else if (et = ge(R), typeof et == "function")
      for (R = et.call(R), dt = 0; !(ft = R.next()).done; )
        ft = ft.value, et = Ve + Ye(ft, dt++), Xe += at(ft, B, ae, et, Me);
    else if (ft === "object")
      throw B = String(R), Error("Objects are not valid as a React child (found: " + (B === "[object Object]" ? "object with keys {" + Object.keys(R).join(", ") + "}" : B) + "). If you meant to render a collection of children, use an array instead.");
    return Xe;
  }
  function Yt(R, B, ae) {
    if (R == null)
      return R;
    var Ve = [], Me = 0;
    return at(R, Ve, "", "", function(ft) {
      return B.call(ae, ft, Me++);
    }), Ve;
  }
  function gt(R) {
    if (R._status === -1) {
      var B = R._result;
      B = B(), B.then(function(ae) {
        (R._status === 0 || R._status === -1) && (R._status = 1, R._result = ae);
      }, function(ae) {
        (R._status === 0 || R._status === -1) && (R._status = 2, R._result = ae);
      }), R._status === -1 && (R._status = 0, R._result = B);
    }
    if (R._status === 1)
      return R._result.default;
    throw R._result;
  }
  var ve = { current: null }, X = { transition: null }, Ee = { ReactCurrentDispatcher: ve, ReactCurrentBatchConfig: X, ReactCurrentOwner: qe };
  return ot.Children = { map: Yt, forEach: function(R, B, ae) {
    Yt(R, function() {
      B.apply(this, arguments);
    }, ae);
  }, count: function(R) {
    var B = 0;
    return Yt(R, function() {
      B++;
    }), B;
  }, toArray: function(R) {
    return Yt(R, function(B) {
      return B;
    }) || [];
  }, only: function(R) {
    if (!Nt(R))
      throw Error("React.Children.only expected to receive a single React element child.");
    return R;
  } }, ot.Component = nt, ot.Fragment = U, ot.Profiler = rn, ot.PureComponent = Gt, ot.StrictMode = nn, ot.Suspense = Oe, ot.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Ee, ot.cloneElement = function(R, B, ae) {
    if (R == null)
      throw Error("React.cloneElement(...): The argument must be a React element, but you passed " + R + ".");
    var Ve = Fe({}, R.props), Me = R.key, ft = R.ref, Xe = R._owner;
    if (B != null) {
      if (B.ref !== void 0 && (ft = B.ref, Xe = qe.current), B.key !== void 0 && (Me = "" + B.key), R.type && R.type.defaultProps)
        var dt = R.type.defaultProps;
      for (et in B)
        Te.call(B, et) && !Ue.hasOwnProperty(et) && (Ve[et] = B[et] === void 0 && dt !== void 0 ? dt[et] : B[et]);
    }
    var et = arguments.length - 2;
    if (et === 1)
      Ve.children = ae;
    else if (1 < et) {
      dt = Array(et);
      for (var zt = 0; zt < et; zt++)
        dt[zt] = arguments[zt + 2];
      Ve.children = dt;
    }
    return { $$typeof: Y, type: R.type, key: Me, ref: ft, props: Ve, _owner: Xe };
  }, ot.createContext = function(R) {
    return R = { $$typeof: S, _currentValue: R, _currentValue2: R, _threadCount: 0, Provider: null, Consumer: null, _defaultValue: null, _globalName: null }, R.Provider = { $$typeof: Je, _context: R }, R.Consumer = R;
  }, ot.createElement = qt, ot.createFactory = function(R) {
    var B = qt.bind(null, R);
    return B.type = R, B;
  }, ot.createRef = function() {
    return { current: null };
  }, ot.forwardRef = function(R) {
    return { $$typeof: an, render: R };
  }, ot.isValidElement = Nt, ot.lazy = function(R) {
    return { $$typeof: Ht, _payload: { _status: -1, _result: R }, _init: gt };
  }, ot.memo = function(R, B) {
    return { $$typeof: me, type: R, compare: B === void 0 ? null : B };
  }, ot.startTransition = function(R) {
    var B = X.transition;
    X.transition = {};
    try {
      R();
    } finally {
      X.transition = B;
    }
  }, ot.unstable_act = function() {
    throw Error("act(...) is not supported in production builds of React.");
  }, ot.useCallback = function(R, B) {
    return ve.current.useCallback(R, B);
  }, ot.useContext = function(R) {
    return ve.current.useContext(R);
  }, ot.useDebugValue = function() {
  }, ot.useDeferredValue = function(R) {
    return ve.current.useDeferredValue(R);
  }, ot.useEffect = function(R, B) {
    return ve.current.useEffect(R, B);
  }, ot.useId = function() {
    return ve.current.useId();
  }, ot.useImperativeHandle = function(R, B, ae) {
    return ve.current.useImperativeHandle(R, B, ae);
  }, ot.useInsertionEffect = function(R, B) {
    return ve.current.useInsertionEffect(R, B);
  }, ot.useLayoutEffect = function(R, B) {
    return ve.current.useLayoutEffect(R, B);
  }, ot.useMemo = function(R, B) {
    return ve.current.useMemo(R, B);
  }, ot.useReducer = function(R, B, ae) {
    return ve.current.useReducer(R, B, ae);
  }, ot.useRef = function(R) {
    return ve.current.useRef(R);
  }, ot.useState = function(R) {
    return ve.current.useState(R);
  }, ot.useSyncExternalStore = function(R, B, ae) {
    return ve.current.useSyncExternalStore(R, B, ae);
  }, ot.useTransition = function() {
    return ve.current.useTransition();
  }, ot.version = "18.2.0", ot;
}
var Um = { exports: {} };
/**
 * @license React
 * react.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Q1;
function P_() {
  return Q1 || (Q1 = 1, function(Y, q) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var U = "18.2.0", nn = Symbol.for("react.element"), rn = Symbol.for("react.portal"), Je = Symbol.for("react.fragment"), S = Symbol.for("react.strict_mode"), an = Symbol.for("react.profiler"), Oe = Symbol.for("react.provider"), me = Symbol.for("react.context"), Ht = Symbol.for("react.forward_ref"), oe = Symbol.for("react.suspense"), ge = Symbol.for("react.suspense_list"), ue = Symbol.for("react.memo"), Fe = Symbol.for("react.lazy"), vt = Symbol.for("react.offscreen"), nt = Symbol.iterator, Kn = "@@iterator";
      function Gt(h) {
        if (h === null || typeof h != "object")
          return null;
        var C = nt && h[nt] || h[Kn];
        return typeof C == "function" ? C : null;
      }
      var Be = {
        current: null
      }, rt = {
        transition: null
      }, Te = {
        current: null,
        isBatchingLegacy: !1,
        didScheduleLegacyUpdate: !1
      }, qe = {
        current: null
      }, Ue = {}, qt = null;
      function Dn(h) {
        qt = h;
      }
      Ue.setExtraStackFrame = function(h) {
        qt = h;
      }, Ue.getCurrentStack = null, Ue.getStackAddendum = function() {
        var h = "";
        qt && (h += qt);
        var C = Ue.getCurrentStack;
        return C && (h += C() || ""), h;
      };
      var Nt = !1, Et = !1, En = !1, Ye = !1, at = !1, Yt = {
        ReactCurrentDispatcher: Be,
        ReactCurrentBatchConfig: rt,
        ReactCurrentOwner: qe
      };
      Yt.ReactDebugCurrentFrame = Ue, Yt.ReactCurrentActQueue = Te;
      function gt(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
            M[A - 1] = arguments[A];
          X("warn", h, M);
        }
      }
      function ve(h) {
        {
          for (var C = arguments.length, M = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
            M[A - 1] = arguments[A];
          X("error", h, M);
        }
      }
      function X(h, C, M) {
        {
          var A = Yt.ReactDebugCurrentFrame, W = A.getStackAddendum();
          W !== "" && (C += "%s", M = M.concat([W]));
          var _e = M.map(function(ee) {
            return String(ee);
          });
          _e.unshift("Warning: " + C), Function.prototype.apply.call(console[h], console, _e);
        }
      }
      var Ee = {};
      function R(h, C) {
        {
          var M = h.constructor, A = M && (M.displayName || M.name) || "ReactClass", W = A + "." + C;
          if (Ee[W])
            return;
          ve("Can't call %s on a component that is not yet mounted. This is a no-op, but it might indicate a bug in your application. Instead, assign to `this.state` directly or define a `state = {};` class property with the desired state in the %s component.", C, A), Ee[W] = !0;
        }
      }
      var B = {
        isMounted: function(h) {
          return !1;
        },
        enqueueForceUpdate: function(h, C, M) {
          R(h, "forceUpdate");
        },
        enqueueReplaceState: function(h, C, M, A) {
          R(h, "replaceState");
        },
        enqueueSetState: function(h, C, M, A) {
          R(h, "setState");
        }
      }, ae = Object.assign, Ve = {};
      Object.freeze(Ve);
      function Me(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || B;
      }
      Me.prototype.isReactComponent = {}, Me.prototype.setState = function(h, C) {
        if (typeof h != "object" && typeof h != "function" && h != null)
          throw new Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");
        this.updater.enqueueSetState(this, h, C, "setState");
      }, Me.prototype.forceUpdate = function(h) {
        this.updater.enqueueForceUpdate(this, h, "forceUpdate");
      };
      {
        var ft = {
          isMounted: ["isMounted", "Instead, make sure to clean up subscriptions and pending requests in componentWillUnmount to prevent memory leaks."],
          replaceState: ["replaceState", "Refactor your code to use setState instead (see https://github.com/facebook/react/issues/3236)."]
        }, Xe = function(h, C) {
          Object.defineProperty(Me.prototype, h, {
            get: function() {
              gt("%s(...) is deprecated in plain JavaScript React classes. %s", C[0], C[1]);
            }
          });
        };
        for (var dt in ft)
          ft.hasOwnProperty(dt) && Xe(dt, ft[dt]);
      }
      function et() {
      }
      et.prototype = Me.prototype;
      function zt(h, C, M) {
        this.props = h, this.context = C, this.refs = Ve, this.updater = M || B;
      }
      var fi = zt.prototype = new et();
      fi.constructor = zt, ae(fi, Me.prototype), fi.isPureReactComponent = !0;
      function Er() {
        var h = {
          current: null
        };
        return Object.seal(h), h;
      }
      var _a = Array.isArray;
      function fn(h) {
        return _a(h);
      }
      function Zn(h) {
        {
          var C = typeof Symbol == "function" && Symbol.toStringTag, M = C && h[Symbol.toStringTag] || h.constructor.name || "Object";
          return M;
        }
      }
      function Cr(h) {
        try {
          return Rr(h), !1;
        } catch {
          return !0;
        }
      }
      function Rr(h) {
        return "" + h;
      }
      function kn(h) {
        if (Cr(h))
          return ve("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Zn(h)), Rr(h);
      }
      function Da(h, C, M) {
        var A = h.displayName;
        if (A)
          return A;
        var W = C.displayName || C.name || "";
        return W !== "" ? M + "(" + W + ")" : M;
      }
      function di(h) {
        return h.displayName || "Context";
      }
      function Jn(h) {
        if (h == null)
          return null;
        if (typeof h.tag == "number" && ve("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof h == "function")
          return h.displayName || h.name || null;
        if (typeof h == "string")
          return h;
        switch (h) {
          case Je:
            return "Fragment";
          case rn:
            return "Portal";
          case an:
            return "Profiler";
          case S:
            return "StrictMode";
          case oe:
            return "Suspense";
          case ge:
            return "SuspenseList";
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case me:
              var C = h;
              return di(C) + ".Consumer";
            case Oe:
              var M = h;
              return di(M._context) + ".Provider";
            case Ht:
              return Da(h, h.render, "ForwardRef");
            case ue:
              var A = h.displayName || null;
              return A !== null ? A : Jn(h.type) || "Memo";
            case Fe: {
              var W = h, _e = W._payload, ee = W._init;
              try {
                return Jn(ee(_e));
              } catch {
                return null;
              }
            }
          }
        return null;
      }
      var Tr = Object.prototype.hasOwnProperty, Ia = {
        key: !0,
        ref: !0,
        __self: !0,
        __source: !0
      }, wr, ka, xr;
      xr = {};
      function Oa(h) {
        if (Tr.call(h, "ref")) {
          var C = Object.getOwnPropertyDescriptor(h, "ref").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.ref !== void 0;
      }
      function Fn(h) {
        if (Tr.call(h, "key")) {
          var C = Object.getOwnPropertyDescriptor(h, "key").get;
          if (C && C.isReactWarning)
            return !1;
        }
        return h.key !== void 0;
      }
      function Yr(h, C) {
        var M = function() {
          wr || (wr = !0, ve("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "key", {
          get: M,
          configurable: !0
        });
      }
      function Al(h, C) {
        var M = function() {
          ka || (ka = !0, ve("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)", C));
        };
        M.isReactWarning = !0, Object.defineProperty(h, "ref", {
          get: M,
          configurable: !0
        });
      }
      function Qa(h) {
        if (typeof h.ref == "string" && qe.current && h.__self && qe.current.stateNode !== h.__self) {
          var C = Jn(qe.current.type);
          xr[C] || (ve('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', C, h.ref), xr[C] = !0);
        }
      }
      var J = function(h, C, M, A, W, _e, ee) {
        var xe = {
          $$typeof: nn,
          type: h,
          key: C,
          ref: M,
          props: ee,
          _owner: _e
        };
        return xe._store = {}, Object.defineProperty(xe._store, "validated", {
          configurable: !1,
          enumerable: !1,
          writable: !0,
          value: !1
        }), Object.defineProperty(xe, "_self", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: A
        }), Object.defineProperty(xe, "_source", {
          configurable: !1,
          enumerable: !1,
          writable: !1,
          value: W
        }), Object.freeze && (Object.freeze(xe.props), Object.freeze(xe)), xe;
      };
      function Ce(h, C, M) {
        var A, W = {}, _e = null, ee = null, xe = null, We = null;
        if (C != null) {
          Oa(C) && (ee = C.ref, Qa(C)), Fn(C) && (kn(C.key), _e = "" + C.key), xe = C.__self === void 0 ? null : C.__self, We = C.__source === void 0 ? null : C.__source;
          for (A in C)
            Tr.call(C, A) && !Ia.hasOwnProperty(A) && (W[A] = C[A]);
        }
        var ct = arguments.length - 2;
        if (ct === 1)
          W.children = M;
        else if (ct > 1) {
          for (var kt = Array(ct), xt = 0; xt < ct; xt++)
            kt[xt] = arguments[xt + 2];
          Object.freeze && Object.freeze(kt), W.children = kt;
        }
        if (h && h.defaultProps) {
          var Ot = h.defaultProps;
          for (A in Ot)
            W[A] === void 0 && (W[A] = Ot[A]);
        }
        if (_e || ee) {
          var At = typeof h == "function" ? h.displayName || h.name || "Unknown" : h;
          _e && Yr(W, At), ee && Al(W, At);
        }
        return J(h, _e, ee, xe, We, qe.current, W);
      }
      function Ie(h, C) {
        var M = J(h.type, C, h.ref, h._self, h._source, h._owner, h.props);
        return M;
      }
      function wt(h, C, M) {
        if (h == null)
          throw new Error("React.cloneElement(...): The argument must be a React element, but you passed " + h + ".");
        var A, W = ae({}, h.props), _e = h.key, ee = h.ref, xe = h._self, We = h._source, ct = h._owner;
        if (C != null) {
          Oa(C) && (ee = C.ref, ct = qe.current), Fn(C) && (kn(C.key), _e = "" + C.key);
          var kt;
          h.type && h.type.defaultProps && (kt = h.type.defaultProps);
          for (A in C)
            Tr.call(C, A) && !Ia.hasOwnProperty(A) && (C[A] === void 0 && kt !== void 0 ? W[A] = kt[A] : W[A] = C[A]);
        }
        var xt = arguments.length - 2;
        if (xt === 1)
          W.children = M;
        else if (xt > 1) {
          for (var Ot = Array(xt), At = 0; At < xt; At++)
            Ot[At] = arguments[At + 2];
          W.children = Ot;
        }
        return J(h.type, _e, ee, xe, We, ct, W);
      }
      function bt(h) {
        return typeof h == "object" && h !== null && h.$$typeof === nn;
      }
      var Cn = ".", dn = ":";
      function br(h) {
        var C = /[=:]/g, M = {
          "=": "=0",
          ":": "=2"
        }, A = h.replace(C, function(W) {
          return M[W];
        });
        return "$" + A;
      }
      var Ft = !1, ra = /\/+/g;
      function Xt(h) {
        return h.replace(ra, "$&/");
      }
      function Ut(h, C) {
        return typeof h == "object" && h !== null && h.key != null ? (kn(h.key), br("" + h.key)) : C.toString(36);
      }
      function Hl(h, C, M, A, W) {
        var _e = typeof h;
        (_e === "undefined" || _e === "boolean") && (h = null);
        var ee = !1;
        if (h === null)
          ee = !0;
        else
          switch (_e) {
            case "string":
            case "number":
              ee = !0;
              break;
            case "object":
              switch (h.$$typeof) {
                case nn:
                case rn:
                  ee = !0;
              }
          }
        if (ee) {
          var xe = h, We = W(xe), ct = A === "" ? Cn + Ut(xe, 0) : A;
          if (fn(We)) {
            var kt = "";
            ct != null && (kt = Xt(ct) + "/"), Hl(We, C, kt, "", function(Pf) {
              return Pf;
            });
          } else
            We != null && (bt(We) && (We.key && (!xe || xe.key !== We.key) && kn(We.key), We = Ie(
              We,
              M + (We.key && (!xe || xe.key !== We.key) ? Xt("" + We.key) + "/" : "") + ct
            )), C.push(We));
          return 1;
        }
        var xt, Ot, At = 0, tt = A === "" ? Cn : A + dn;
        if (fn(h))
          for (var mi = 0; mi < h.length; mi++)
            xt = h[mi], Ot = tt + Ut(xt, mi), At += Hl(xt, C, M, Ot, W);
        else {
          var Bu = Gt(h);
          if (typeof Bu == "function") {
            var $o = h;
            Bu === $o.entries && (Ft || gt("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Ft = !0);
            for (var Bf = Bu.call($o), Aa, Yo = 0; !(Aa = Bf.next()).done; )
              xt = Aa.value, Ot = tt + Ut(xt, Yo++), At += Hl(xt, C, M, Ot, W);
          } else if (_e === "object") {
            var Io = String(h);
            throw new Error("Objects are not valid as a React child (found: " + (Io === "[object Object]" ? "object with keys {" + Object.keys(h).join(", ") + "}" : Io) + "). If you meant to render a collection of children, use an array instead.");
          }
        }
        return At;
      }
      function pi(h, C, M) {
        if (h == null)
          return h;
        var A = [], W = 0;
        return Hl(h, A, "", "", function(_e) {
          return C.call(M, _e, W++);
        }), A;
      }
      function Du(h) {
        var C = 0;
        return pi(h, function() {
          C++;
        }), C;
      }
      function Is(h, C, M) {
        pi(h, function() {
          C.apply(this, arguments);
        }, M);
      }
      function Qs(h) {
        return pi(h, function(C) {
          return C;
        }) || [];
      }
      function ku(h) {
        if (!bt(h))
          throw new Error("React.Children.only expected to receive a single React element child.");
        return h;
      }
      function Ao(h) {
        var C = {
          $$typeof: me,
          _currentValue: h,
          _currentValue2: h,
          _threadCount: 0,
          Provider: null,
          Consumer: null,
          _defaultValue: null,
          _globalName: null
        };
        C.Provider = {
          $$typeof: Oe,
          _context: C
        };
        var M = !1, A = !1, W = !1;
        {
          var _e = {
            $$typeof: me,
            _context: C
          };
          Object.defineProperties(_e, {
            Provider: {
              get: function() {
                return A || (A = !0, ve("Rendering <Context.Consumer.Provider> is not supported and will be removed in a future major release. Did you mean to render <Context.Provider> instead?")), C.Provider;
              },
              set: function(ee) {
                C.Provider = ee;
              }
            },
            _currentValue: {
              get: function() {
                return C._currentValue;
              },
              set: function(ee) {
                C._currentValue = ee;
              }
            },
            _currentValue2: {
              get: function() {
                return C._currentValue2;
              },
              set: function(ee) {
                C._currentValue2 = ee;
              }
            },
            _threadCount: {
              get: function() {
                return C._threadCount;
              },
              set: function(ee) {
                C._threadCount = ee;
              }
            },
            Consumer: {
              get: function() {
                return M || (M = !0, ve("Rendering <Context.Consumer.Consumer> is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?")), C.Consumer;
              }
            },
            displayName: {
              get: function() {
                return C.displayName;
              },
              set: function(ee) {
                W || (gt("Setting `displayName` on Context.Consumer has no effect. You should set it directly on the context with Context.displayName = '%s'.", ee), W = !0);
              }
            }
          }), C.Consumer = _e;
        }
        return C._currentRenderer = null, C._currentRenderer2 = null, C;
      }
      var La = -1, $i = 0, Wa = 1, Yi = 2;
      function Ir(h) {
        if (h._status === La) {
          var C = h._result, M = C();
          if (M.then(function(_e) {
            if (h._status === $i || h._status === La) {
              var ee = h;
              ee._status = Wa, ee._result = _e;
            }
          }, function(_e) {
            if (h._status === $i || h._status === La) {
              var ee = h;
              ee._status = Yi, ee._result = _e;
            }
          }), h._status === La) {
            var A = h;
            A._status = $i, A._result = M;
          }
        }
        if (h._status === Wa) {
          var W = h._result;
          return W === void 0 && ve(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))

Did you accidentally put curly braces around the import?`, W), "default" in W || ve(`lazy: Expected the result of a dynamic import() call. Instead received: %s

Your code should look like: 
  const MyComponent = lazy(() => import('./MyComponent'))`, W), W.default;
        } else
          throw h._result;
      }
      function Ma(h) {
        var C = {
          _status: La,
          _result: h
        }, M = {
          $$typeof: Fe,
          _payload: C,
          _init: Ir
        };
        {
          var A, W;
          Object.defineProperties(M, {
            defaultProps: {
              configurable: !0,
              get: function() {
                return A;
              },
              set: function(_e) {
                ve("React.lazy(...): It is not supported to assign `defaultProps` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), A = _e, Object.defineProperty(M, "defaultProps", {
                  enumerable: !0
                });
              }
            },
            propTypes: {
              configurable: !0,
              get: function() {
                return W;
              },
              set: function(_e) {
                ve("React.lazy(...): It is not supported to assign `propTypes` to a lazy component import. Either specify them where the component is defined, or create a wrapping component around it."), W = _e, Object.defineProperty(M, "propTypes", {
                  enumerable: !0
                });
              }
            }
          });
        }
        return M;
      }
      function Ii(h) {
        h != null && h.$$typeof === ue ? ve("forwardRef requires a render function but received a `memo` component. Instead of forwardRef(memo(...)), use memo(forwardRef(...)).") : typeof h != "function" ? ve("forwardRef requires a render function but was given %s.", h === null ? "null" : typeof h) : h.length !== 0 && h.length !== 2 && ve("forwardRef render functions accept exactly two parameters: props and ref. %s", h.length === 1 ? "Did you forget to use the ref parameter?" : "Any additional parameter will be undefined."), h != null && (h.defaultProps != null || h.propTypes != null) && ve("forwardRef render functions do not support propTypes or defaultProps. Did you accidentally pass a React component?");
        var C = {
          $$typeof: Ht,
          render: h
        };
        {
          var M;
          Object.defineProperty(C, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return M;
            },
            set: function(A) {
              M = A, !h.name && !h.displayName && (h.displayName = A);
            }
          });
        }
        return C;
      }
      var Qi;
      Qi = Symbol.for("react.module.reference");
      function Ou(h) {
        return !!(typeof h == "string" || typeof h == "function" || h === Je || h === an || at || h === S || h === oe || h === ge || Ye || h === vt || Nt || Et || En || typeof h == "object" && h !== null && (h.$$typeof === Fe || h.$$typeof === ue || h.$$typeof === Oe || h.$$typeof === me || h.$$typeof === Ht || h.$$typeof === Qi || h.getModuleId !== void 0));
      }
      function Ho(h, C) {
        Ou(h) || ve("memo: The first argument must be a component. Instead received: %s", h === null ? "null" : typeof h);
        var M = {
          $$typeof: ue,
          type: h,
          compare: C === void 0 ? null : C
        };
        {
          var A;
          Object.defineProperty(M, "displayName", {
            enumerable: !1,
            configurable: !0,
            get: function() {
              return A;
            },
            set: function(W) {
              A = W, !h.name && !h.displayName && (h.displayName = W);
            }
          });
        }
        return M;
      }
      function ln() {
        var h = Be.current;
        return h === null && ve(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`), h;
      }
      function aa(h) {
        var C = ln();
        if (h._context !== void 0) {
          var M = h._context;
          M.Consumer === h ? ve("Calling useContext(Context.Consumer) is not supported, may cause bugs, and will be removed in a future major release. Did you mean to call useContext(Context) instead?") : M.Provider === h && ve("Calling useContext(Context.Provider) is not supported. Did you mean to call useContext(Context) instead?");
        }
        return C.useContext(h);
      }
      function Fl(h) {
        var C = ln();
        return C.useState(h);
      }
      function Wi(h, C, M) {
        var A = ln();
        return A.useReducer(h, C, M);
      }
      function jn(h) {
        var C = ln();
        return C.useRef(h);
      }
      function Ws(h, C) {
        var M = ln();
        return M.useEffect(h, C);
      }
      function Gs(h, C) {
        var M = ln();
        return M.useInsertionEffect(h, C);
      }
      function Fo(h, C) {
        var M = ln();
        return M.useLayoutEffect(h, C);
      }
      function qs(h, C) {
        var M = ln();
        return M.useCallback(h, C);
      }
      function Hf(h, C) {
        var M = ln();
        return M.useMemo(h, C);
      }
      function Ff(h, C, M) {
        var A = ln();
        return A.useImperativeHandle(h, C, M);
      }
      function It(h, C) {
        {
          var M = ln();
          return M.useDebugValue(h, C);
        }
      }
      function jf() {
        var h = ln();
        return h.useTransition();
      }
      function Na(h) {
        var C = ln();
        return C.useDeferredValue(h);
      }
      function Qe() {
        var h = ln();
        return h.useId();
      }
      function Ga(h, C, M) {
        var A = ln();
        return A.useSyncExternalStore(h, C, M);
      }
      var Gi = 0, Lu, qi, _r, jo, ur, Vo, Bo;
      function Xs() {
      }
      Xs.__reactDisabledLog = !0;
      function Mu() {
        {
          if (Gi === 0) {
            Lu = console.log, qi = console.info, _r = console.warn, jo = console.error, ur = console.group, Vo = console.groupCollapsed, Bo = console.groupEnd;
            var h = {
              configurable: !0,
              enumerable: !0,
              value: Xs,
              writable: !0
            };
            Object.defineProperties(console, {
              info: h,
              log: h,
              warn: h,
              error: h,
              group: h,
              groupCollapsed: h,
              groupEnd: h
            });
          }
          Gi++;
        }
      }
      function Xi() {
        {
          if (Gi--, Gi === 0) {
            var h = {
              configurable: !0,
              enumerable: !0,
              writable: !0
            };
            Object.defineProperties(console, {
              log: ae({}, h, {
                value: Lu
              }),
              info: ae({}, h, {
                value: qi
              }),
              warn: ae({}, h, {
                value: _r
              }),
              error: ae({}, h, {
                value: jo
              }),
              group: ae({}, h, {
                value: ur
              }),
              groupCollapsed: ae({}, h, {
                value: Vo
              }),
              groupEnd: ae({}, h, {
                value: Bo
              })
            });
          }
          Gi < 0 && ve("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
        }
      }
      var za = Yt.ReactCurrentDispatcher, or;
      function Ki(h, C, M) {
        {
          if (or === void 0)
            try {
              throw Error();
            } catch (W) {
              var A = W.stack.trim().match(/\n( *(at )?)/);
              or = A && A[1] || "";
            }
          return `
` + or + h;
        }
      }
      var Zi = !1, Ji;
      {
        var Nu = typeof WeakMap == "function" ? WeakMap : Map;
        Ji = new Nu();
      }
      function zu(h, C) {
        if (!h || Zi)
          return "";
        {
          var M = Ji.get(h);
          if (M !== void 0)
            return M;
        }
        var A;
        Zi = !0;
        var W = Error.prepareStackTrace;
        Error.prepareStackTrace = void 0;
        var _e;
        _e = za.current, za.current = null, Mu();
        try {
          if (C) {
            var ee = function() {
              throw Error();
            };
            if (Object.defineProperty(ee.prototype, "props", {
              set: function() {
                throw Error();
              }
            }), typeof Reflect == "object" && Reflect.construct) {
              try {
                Reflect.construct(ee, []);
              } catch (tt) {
                A = tt;
              }
              Reflect.construct(h, [], ee);
            } else {
              try {
                ee.call();
              } catch (tt) {
                A = tt;
              }
              h.call(ee.prototype);
            }
          } else {
            try {
              throw Error();
            } catch (tt) {
              A = tt;
            }
            h();
          }
        } catch (tt) {
          if (tt && A && typeof tt.stack == "string") {
            for (var xe = tt.stack.split(`
`), We = A.stack.split(`
`), ct = xe.length - 1, kt = We.length - 1; ct >= 1 && kt >= 0 && xe[ct] !== We[kt]; )
              kt--;
            for (; ct >= 1 && kt >= 0; ct--, kt--)
              if (xe[ct] !== We[kt]) {
                if (ct !== 1 || kt !== 1)
                  do
                    if (ct--, kt--, kt < 0 || xe[ct] !== We[kt]) {
                      var xt = `
` + xe[ct].replace(" at new ", " at ");
                      return h.displayName && xt.includes("<anonymous>") && (xt = xt.replace("<anonymous>", h.displayName)), typeof h == "function" && Ji.set(h, xt), xt;
                    }
                  while (ct >= 1 && kt >= 0);
                break;
              }
          }
        } finally {
          Zi = !1, za.current = _e, Xi(), Error.prepareStackTrace = W;
        }
        var Ot = h ? h.displayName || h.name : "", At = Ot ? Ki(Ot) : "";
        return typeof h == "function" && Ji.set(h, At), At;
      }
      function vi(h, C, M) {
        return zu(h, !1);
      }
      function Vf(h) {
        var C = h.prototype;
        return !!(C && C.isReactComponent);
      }
      function qa(h, C, M) {
        if (h == null)
          return "";
        if (typeof h == "function")
          return zu(h, Vf(h));
        if (typeof h == "string")
          return Ki(h);
        switch (h) {
          case oe:
            return Ki("Suspense");
          case ge:
            return Ki("SuspenseList");
        }
        if (typeof h == "object")
          switch (h.$$typeof) {
            case Ht:
              return vi(h.render);
            case ue:
              return qa(h.type, C, M);
            case Fe: {
              var A = h, W = A._payload, _e = A._init;
              try {
                return qa(_e(W), C, M);
              } catch {
              }
            }
          }
        return "";
      }
      var ht = {}, Uu = Yt.ReactDebugCurrentFrame;
      function jl(h) {
        if (h) {
          var C = h._owner, M = qa(h.type, h._source, C ? C.type : null);
          Uu.setExtraStackFrame(M);
        } else
          Uu.setExtraStackFrame(null);
      }
      function Au(h, C, M, A, W) {
        {
          var _e = Function.call.bind(Tr);
          for (var ee in h)
            if (_e(h, ee)) {
              var xe = void 0;
              try {
                if (typeof h[ee] != "function") {
                  var We = Error((A || "React class") + ": " + M + " type `" + ee + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof h[ee] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                  throw We.name = "Invariant Violation", We;
                }
                xe = h[ee](C, ee, A, M, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
              } catch (ct) {
                xe = ct;
              }
              xe && !(xe instanceof Error) && (jl(W), ve("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", A || "React class", M, ee, typeof xe), jl(null)), xe instanceof Error && !(xe.message in ht) && (ht[xe.message] = !0, jl(W), ve("Failed %s type: %s", M, xe.message), jl(null));
            }
        }
      }
      function st(h) {
        if (h) {
          var C = h._owner, M = qa(h.type, h._source, C ? C.type : null);
          Dn(M);
        } else
          Dn(null);
      }
      var Hu;
      Hu = !1;
      function Fu() {
        if (qe.current) {
          var h = Jn(qe.current.type);
          if (h)
            return `

Check the render method of \`` + h + "`.";
        }
        return "";
      }
      function Ae(h) {
        if (h !== void 0) {
          var C = h.fileName.replace(/^.*[\\\/]/, ""), M = h.lineNumber;
          return `

Check your code at ` + C + ":" + M + ".";
        }
        return "";
      }
      function Vl(h) {
        return h != null ? Ae(h.__source) : "";
      }
      var Kt = {};
      function Dr(h) {
        var C = Fu();
        if (!C) {
          var M = typeof h == "string" ? h : h.displayName || h.name;
          M && (C = `

Check the top-level render call using <` + M + ">.");
        }
        return C;
      }
      function sr(h, C) {
        if (!(!h._store || h._store.validated || h.key != null)) {
          h._store.validated = !0;
          var M = Dr(C);
          if (!Kt[M]) {
            Kt[M] = !0;
            var A = "";
            h && h._owner && h._owner !== qe.current && (A = " It was passed a child from " + Jn(h._owner.type) + "."), st(h), ve('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.', M, A), st(null);
          }
        }
      }
      function el(h, C) {
        if (typeof h == "object") {
          if (fn(h))
            for (var M = 0; M < h.length; M++) {
              var A = h[M];
              bt(A) && sr(A, C);
            }
          else if (bt(h))
            h._store && (h._store.validated = !0);
          else if (h) {
            var W = Gt(h);
            if (typeof W == "function" && W !== h.entries)
              for (var _e = W.call(h), ee; !(ee = _e.next()).done; )
                bt(ee.value) && sr(ee.value, C);
          }
        }
      }
      function un(h) {
        {
          var C = h.type;
          if (C == null || typeof C == "string")
            return;
          var M;
          if (typeof C == "function")
            M = C.propTypes;
          else if (typeof C == "object" && (C.$$typeof === Ht || C.$$typeof === ue))
            M = C.propTypes;
          else
            return;
          if (M) {
            var A = Jn(C);
            Au(M, h.props, "prop", A, h);
          } else if (C.PropTypes !== void 0 && !Hu) {
            Hu = !0;
            var W = Jn(C);
            ve("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?", W || "Unknown");
          }
          typeof C.getDefaultProps == "function" && !C.getDefaultProps.isReactClassApproved && ve("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.");
        }
      }
      function Ct(h) {
        {
          for (var C = Object.keys(h.props), M = 0; M < C.length; M++) {
            var A = C[M];
            if (A !== "children" && A !== "key") {
              st(h), ve("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.", A), st(null);
              break;
            }
          }
          h.ref !== null && (st(h), ve("Invalid attribute `ref` supplied to `React.Fragment`."), st(null));
        }
      }
      function Ks(h, C, M) {
        var A = Ou(h);
        if (!A) {
          var W = "";
          (h === void 0 || typeof h == "object" && h !== null && Object.keys(h).length === 0) && (W += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
          var _e = Vl(C);
          _e ? W += _e : W += Fu();
          var ee;
          h === null ? ee = "null" : fn(h) ? ee = "array" : h !== void 0 && h.$$typeof === nn ? (ee = "<" + (Jn(h.type) || "Unknown") + " />", W = " Did you accidentally export a JSX literal instead of a component?") : ee = typeof h, ve("React.createElement: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s", ee, W);
        }
        var xe = Ce.apply(this, arguments);
        if (xe == null)
          return xe;
        if (A)
          for (var We = 2; We < arguments.length; We++)
            el(arguments[We], h);
        return h === Je ? Ct(xe) : un(xe), xe;
      }
      var kr = !1;
      function On(h) {
        var C = Ks.bind(null, h);
        return C.type = h, kr || (kr = !0, gt("React.createFactory() is deprecated and will be removed in a future major release. Consider using JSX or use React.createElement() directly instead.")), Object.defineProperty(C, "type", {
          enumerable: !1,
          get: function() {
            return gt("Factory.type is deprecated. Access the class directly before passing it to createFactory."), Object.defineProperty(this, "type", {
              value: h
            }), h;
          }
        }), C;
      }
      function Xa(h, C, M) {
        for (var A = wt.apply(this, arguments), W = 2; W < arguments.length; W++)
          el(arguments[W], A.type);
        return un(A), A;
      }
      function Zs(h, C) {
        var M = rt.transition;
        rt.transition = {};
        var A = rt.transition;
        rt.transition._updatedFibers = /* @__PURE__ */ new Set();
        try {
          h();
        } finally {
          if (rt.transition = M, M === null && A._updatedFibers) {
            var W = A._updatedFibers.size;
            W > 10 && gt("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), A._updatedFibers.clear();
          }
        }
      }
      var hi = !1, tl = null;
      function Js(h) {
        if (tl === null)
          try {
            var C = ("require" + Math.random()).slice(0, 7), M = Y && Y[C];
            tl = M.call(Y, "timers").setImmediate;
          } catch {
            tl = function(W) {
              hi === !1 && (hi = !0, typeof MessageChannel > "u" && ve("This browser does not have a MessageChannel implementation, so enqueuing tasks via await act(async () => ...) will fail. Please file an issue at https://github.com/facebook/react/issues if you encounter this warning."));
              var _e = new MessageChannel();
              _e.port1.onmessage = W, _e.port2.postMessage(void 0);
            };
          }
        return tl(h);
      }
      var ia = 0, nl = !1;
      function rl(h) {
        {
          var C = ia;
          ia++, Te.current === null && (Te.current = []);
          var M = Te.isBatchingLegacy, A;
          try {
            if (Te.isBatchingLegacy = !0, A = h(), !M && Te.didScheduleLegacyUpdate) {
              var W = Te.current;
              W !== null && (Te.didScheduleLegacyUpdate = !1, il(W));
            }
          } catch (Ot) {
            throw la(C), Ot;
          } finally {
            Te.isBatchingLegacy = M;
          }
          if (A !== null && typeof A == "object" && typeof A.then == "function") {
            var _e = A, ee = !1, xe = {
              then: function(Ot, At) {
                ee = !0, _e.then(function(tt) {
                  la(C), ia === 0 ? ju(tt, Ot, At) : Ot(tt);
                }, function(tt) {
                  la(C), At(tt);
                });
              }
            };
            return !nl && typeof Promise < "u" && Promise.resolve().then(function() {
            }).then(function() {
              ee || (nl = !0, ve("You called act(async () => ...) without await. This could lead to unexpected testing behaviour, interleaving multiple act calls and mixing their scopes. You should - await act(async () => ...);"));
            }), xe;
          } else {
            var We = A;
            if (la(C), ia === 0) {
              var ct = Te.current;
              ct !== null && (il(ct), Te.current = null);
              var kt = {
                then: function(Ot, At) {
                  Te.current === null ? (Te.current = [], ju(We, Ot, At)) : Ot(We);
                }
              };
              return kt;
            } else {
              var xt = {
                then: function(Ot, At) {
                  Ot(We);
                }
              };
              return xt;
            }
          }
        }
      }
      function la(h) {
        h !== ia - 1 && ve("You seem to have overlapping act() calls, this is not supported. Be sure to await previous act() calls before making a new one. "), ia = h;
      }
      function ju(h, C, M) {
        {
          var A = Te.current;
          if (A !== null)
            try {
              il(A), Js(function() {
                A.length === 0 ? (Te.current = null, C(h)) : ju(h, C, M);
              });
            } catch (W) {
              M(W);
            }
          else
            C(h);
        }
      }
      var al = !1;
      function il(h) {
        if (!al) {
          al = !0;
          var C = 0;
          try {
            for (; C < h.length; C++) {
              var M = h[C];
              do
                M = M(!0);
              while (M !== null);
            }
            h.length = 0;
          } catch (A) {
            throw h = h.slice(C + 1), A;
          } finally {
            al = !1;
          }
        }
      }
      var Bl = Ks, Vu = Xa, Po = On, Ua = {
        map: pi,
        forEach: Is,
        count: Du,
        toArray: Qs,
        only: ku
      };
      q.Children = Ua, q.Component = Me, q.Fragment = Je, q.Profiler = an, q.PureComponent = zt, q.StrictMode = S, q.Suspense = oe, q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = Yt, q.cloneElement = Vu, q.createContext = Ao, q.createElement = Bl, q.createFactory = Po, q.createRef = Er, q.forwardRef = Ii, q.isValidElement = bt, q.lazy = Ma, q.memo = Ho, q.startTransition = Zs, q.unstable_act = rl, q.useCallback = qs, q.useContext = aa, q.useDebugValue = It, q.useDeferredValue = Na, q.useEffect = Ws, q.useId = Qe, q.useImperativeHandle = Ff, q.useInsertionEffect = Gs, q.useLayoutEffect = Fo, q.useMemo = Hf, q.useReducer = Wi, q.useRef = jn, q.useState = Fl, q.useSyncExternalStore = Ga, q.useTransition = jf, q.version = U, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(Um, Um.exports)), Um.exports;
}
(function(Y) {
  ({}).NODE_ENV === "production" ? Y.exports = B_() : Y.exports = P_();
})(Ys);
const ba = /* @__PURE__ */ V_(Ys.exports);
var qp = {}, Z1 = { exports: {} }, wa = {}, o0 = { exports: {} }, s0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var W1;
function $_() {
  return W1 || (W1 = 1, function(Y) {
    function q(X, Ee) {
      var R = X.length;
      X.push(Ee);
      e:
        for (; 0 < R; ) {
          var B = R - 1 >>> 1, ae = X[B];
          if (0 < rn(ae, Ee))
            X[B] = Ee, X[R] = ae, R = B;
          else
            break e;
        }
    }
    function U(X) {
      return X.length === 0 ? null : X[0];
    }
    function nn(X) {
      if (X.length === 0)
        return null;
      var Ee = X[0], R = X.pop();
      if (R !== Ee) {
        X[0] = R;
        e:
          for (var B = 0, ae = X.length, Ve = ae >>> 1; B < Ve; ) {
            var Me = 2 * (B + 1) - 1, ft = X[Me], Xe = Me + 1, dt = X[Xe];
            if (0 > rn(ft, R))
              Xe < ae && 0 > rn(dt, ft) ? (X[B] = dt, X[Xe] = R, B = Xe) : (X[B] = ft, X[Me] = R, B = Me);
            else if (Xe < ae && 0 > rn(dt, R))
              X[B] = dt, X[Xe] = R, B = Xe;
            else
              break e;
          }
      }
      return Ee;
    }
    function rn(X, Ee) {
      var R = X.sortIndex - Ee.sortIndex;
      return R !== 0 ? R : X.id - Ee.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var Je = performance;
      Y.unstable_now = function() {
        return Je.now();
      };
    } else {
      var S = Date, an = S.now();
      Y.unstable_now = function() {
        return S.now() - an;
      };
    }
    var Oe = [], me = [], Ht = 1, oe = null, ge = 3, ue = !1, Fe = !1, vt = !1, nt = typeof setTimeout == "function" ? setTimeout : null, Kn = typeof clearTimeout == "function" ? clearTimeout : null, Gt = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function Be(X) {
      for (var Ee = U(me); Ee !== null; ) {
        if (Ee.callback === null)
          nn(me);
        else if (Ee.startTime <= X)
          nn(me), Ee.sortIndex = Ee.expirationTime, q(Oe, Ee);
        else
          break;
        Ee = U(me);
      }
    }
    function rt(X) {
      if (vt = !1, Be(X), !Fe)
        if (U(Oe) !== null)
          Fe = !0, gt(Te);
        else {
          var Ee = U(me);
          Ee !== null && ve(rt, Ee.startTime - X);
        }
    }
    function Te(X, Ee) {
      Fe = !1, vt && (vt = !1, Kn(qt), qt = -1), ue = !0;
      var R = ge;
      try {
        for (Be(Ee), oe = U(Oe); oe !== null && (!(oe.expirationTime > Ee) || X && !Et()); ) {
          var B = oe.callback;
          if (typeof B == "function") {
            oe.callback = null, ge = oe.priorityLevel;
            var ae = B(oe.expirationTime <= Ee);
            Ee = Y.unstable_now(), typeof ae == "function" ? oe.callback = ae : oe === U(Oe) && nn(Oe), Be(Ee);
          } else
            nn(Oe);
          oe = U(Oe);
        }
        if (oe !== null)
          var Ve = !0;
        else {
          var Me = U(me);
          Me !== null && ve(rt, Me.startTime - Ee), Ve = !1;
        }
        return Ve;
      } finally {
        oe = null, ge = R, ue = !1;
      }
    }
    var qe = !1, Ue = null, qt = -1, Dn = 5, Nt = -1;
    function Et() {
      return !(Y.unstable_now() - Nt < Dn);
    }
    function En() {
      if (Ue !== null) {
        var X = Y.unstable_now();
        Nt = X;
        var Ee = !0;
        try {
          Ee = Ue(!0, X);
        } finally {
          Ee ? Ye() : (qe = !1, Ue = null);
        }
      } else
        qe = !1;
    }
    var Ye;
    if (typeof Gt == "function")
      Ye = function() {
        Gt(En);
      };
    else if (typeof MessageChannel < "u") {
      var at = new MessageChannel(), Yt = at.port2;
      at.port1.onmessage = En, Ye = function() {
        Yt.postMessage(null);
      };
    } else
      Ye = function() {
        nt(En, 0);
      };
    function gt(X) {
      Ue = X, qe || (qe = !0, Ye());
    }
    function ve(X, Ee) {
      qt = nt(function() {
        X(Y.unstable_now());
      }, Ee);
    }
    Y.unstable_IdlePriority = 5, Y.unstable_ImmediatePriority = 1, Y.unstable_LowPriority = 4, Y.unstable_NormalPriority = 3, Y.unstable_Profiling = null, Y.unstable_UserBlockingPriority = 2, Y.unstable_cancelCallback = function(X) {
      X.callback = null;
    }, Y.unstable_continueExecution = function() {
      Fe || ue || (Fe = !0, gt(Te));
    }, Y.unstable_forceFrameRate = function(X) {
      0 > X || 125 < X ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Dn = 0 < X ? Math.floor(1e3 / X) : 5;
    }, Y.unstable_getCurrentPriorityLevel = function() {
      return ge;
    }, Y.unstable_getFirstCallbackNode = function() {
      return U(Oe);
    }, Y.unstable_next = function(X) {
      switch (ge) {
        case 1:
        case 2:
        case 3:
          var Ee = 3;
          break;
        default:
          Ee = ge;
      }
      var R = ge;
      ge = Ee;
      try {
        return X();
      } finally {
        ge = R;
      }
    }, Y.unstable_pauseExecution = function() {
    }, Y.unstable_requestPaint = function() {
    }, Y.unstable_runWithPriority = function(X, Ee) {
      switch (X) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          X = 3;
      }
      var R = ge;
      ge = X;
      try {
        return Ee();
      } finally {
        ge = R;
      }
    }, Y.unstable_scheduleCallback = function(X, Ee, R) {
      var B = Y.unstable_now();
      switch (typeof R == "object" && R !== null ? (R = R.delay, R = typeof R == "number" && 0 < R ? B + R : B) : R = B, X) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return ae = R + ae, X = { id: Ht++, callback: Ee, priorityLevel: X, startTime: R, expirationTime: ae, sortIndex: -1 }, R > B ? (X.sortIndex = R, q(me, X), U(Oe) === null && X === U(me) && (vt ? (Kn(qt), qt = -1) : vt = !0, ve(rt, R - B))) : (X.sortIndex = ae, q(Oe, X), Fe || ue || (Fe = !0, gt(Te))), X;
    }, Y.unstable_shouldYield = Et, Y.unstable_wrapCallback = function(X) {
      var Ee = ge;
      return function() {
        var R = ge;
        ge = Ee;
        try {
          return X.apply(this, arguments);
        } finally {
          ge = R;
        }
      };
    };
  }(s0)), s0;
}
var c0 = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var G1;
function Y_() {
  return G1 || (G1 = 1, function(Y) {
    ({}).NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var q = !1, U = !1, nn = 5;
      function rn(J, Ce) {
        var Ie = J.length;
        J.push(Ce), an(J, Ce, Ie);
      }
      function Je(J) {
        return J.length === 0 ? null : J[0];
      }
      function S(J) {
        if (J.length === 0)
          return null;
        var Ce = J[0], Ie = J.pop();
        return Ie !== Ce && (J[0] = Ie, Oe(J, Ie, 0)), Ce;
      }
      function an(J, Ce, Ie) {
        for (var wt = Ie; wt > 0; ) {
          var bt = wt - 1 >>> 1, Cn = J[bt];
          if (me(Cn, Ce) > 0)
            J[bt] = Ce, J[wt] = Cn, wt = bt;
          else
            return;
        }
      }
      function Oe(J, Ce, Ie) {
        for (var wt = Ie, bt = J.length, Cn = bt >>> 1; wt < Cn; ) {
          var dn = (wt + 1) * 2 - 1, br = J[dn], Ft = dn + 1, ra = J[Ft];
          if (me(br, Ce) < 0)
            Ft < bt && me(ra, br) < 0 ? (J[wt] = ra, J[Ft] = Ce, wt = Ft) : (J[wt] = br, J[dn] = Ce, wt = dn);
          else if (Ft < bt && me(ra, Ce) < 0)
            J[wt] = ra, J[Ft] = Ce, wt = Ft;
          else
            return;
        }
      }
      function me(J, Ce) {
        var Ie = J.sortIndex - Ce.sortIndex;
        return Ie !== 0 ? Ie : J.id - Ce.id;
      }
      var Ht = 1, oe = 2, ge = 3, ue = 4, Fe = 5;
      function vt(J, Ce) {
      }
      var nt = typeof performance == "object" && typeof performance.now == "function";
      if (nt) {
        var Kn = performance;
        Y.unstable_now = function() {
          return Kn.now();
        };
      } else {
        var Gt = Date, Be = Gt.now();
        Y.unstable_now = function() {
          return Gt.now() - Be;
        };
      }
      var rt = 1073741823, Te = -1, qe = 250, Ue = 5e3, qt = 1e4, Dn = rt, Nt = [], Et = [], En = 1, Ye = null, at = ge, Yt = !1, gt = !1, ve = !1, X = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, R = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function B(J) {
        for (var Ce = Je(Et); Ce !== null; ) {
          if (Ce.callback === null)
            S(Et);
          else if (Ce.startTime <= J)
            S(Et), Ce.sortIndex = Ce.expirationTime, rn(Nt, Ce);
          else
            return;
          Ce = Je(Et);
        }
      }
      function ae(J) {
        if (ve = !1, B(J), !gt)
          if (Je(Nt) !== null)
            gt = !0, Oa(Ve);
          else {
            var Ce = Je(Et);
            Ce !== null && Fn(ae, Ce.startTime - J);
          }
      }
      function Ve(J, Ce) {
        gt = !1, ve && (ve = !1, Yr()), Yt = !0;
        var Ie = at;
        try {
          var wt;
          if (!U)
            return Me(J, Ce);
        } finally {
          Ye = null, at = Ie, Yt = !1;
        }
      }
      function Me(J, Ce) {
        var Ie = Ce;
        for (B(Ie), Ye = Je(Nt); Ye !== null && !q && !(Ye.expirationTime > Ie && (!J || di())); ) {
          var wt = Ye.callback;
          if (typeof wt == "function") {
            Ye.callback = null, at = Ye.priorityLevel;
            var bt = Ye.expirationTime <= Ie, Cn = wt(bt);
            Ie = Y.unstable_now(), typeof Cn == "function" ? Ye.callback = Cn : Ye === Je(Nt) && S(Nt), B(Ie);
          } else
            S(Nt);
          Ye = Je(Nt);
        }
        if (Ye !== null)
          return !0;
        var dn = Je(Et);
        return dn !== null && Fn(ae, dn.startTime - Ie), !1;
      }
      function ft(J, Ce) {
        switch (J) {
          case Ht:
          case oe:
          case ge:
          case ue:
          case Fe:
            break;
          default:
            J = ge;
        }
        var Ie = at;
        at = J;
        try {
          return Ce();
        } finally {
          at = Ie;
        }
      }
      function Xe(J) {
        var Ce;
        switch (at) {
          case Ht:
          case oe:
          case ge:
            Ce = ge;
            break;
          default:
            Ce = at;
            break;
        }
        var Ie = at;
        at = Ce;
        try {
          return J();
        } finally {
          at = Ie;
        }
      }
      function dt(J) {
        var Ce = at;
        return function() {
          var Ie = at;
          at = Ce;
          try {
            return J.apply(this, arguments);
          } finally {
            at = Ie;
          }
        };
      }
      function et(J, Ce, Ie) {
        var wt = Y.unstable_now(), bt;
        if (typeof Ie == "object" && Ie !== null) {
          var Cn = Ie.delay;
          typeof Cn == "number" && Cn > 0 ? bt = wt + Cn : bt = wt;
        } else
          bt = wt;
        var dn;
        switch (J) {
          case Ht:
            dn = Te;
            break;
          case oe:
            dn = qe;
            break;
          case Fe:
            dn = Dn;
            break;
          case ue:
            dn = qt;
            break;
          case ge:
          default:
            dn = Ue;
            break;
        }
        var br = bt + dn, Ft = {
          id: En++,
          callback: Ce,
          priorityLevel: J,
          startTime: bt,
          expirationTime: br,
          sortIndex: -1
        };
        return bt > wt ? (Ft.sortIndex = bt, rn(Et, Ft), Je(Nt) === null && Ft === Je(Et) && (ve ? Yr() : ve = !0, Fn(ae, bt - wt))) : (Ft.sortIndex = br, rn(Nt, Ft), !gt && !Yt && (gt = !0, Oa(Ve))), Ft;
      }
      function zt() {
      }
      function fi() {
        !gt && !Yt && (gt = !0, Oa(Ve));
      }
      function Er() {
        return Je(Nt);
      }
      function _a(J) {
        J.callback = null;
      }
      function fn() {
        return at;
      }
      var Zn = !1, Cr = null, Rr = -1, kn = nn, Da = -1;
      function di() {
        var J = Y.unstable_now() - Da;
        return !(J < kn);
      }
      function Jn() {
      }
      function Tr(J) {
        if (J < 0 || J > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        J > 0 ? kn = Math.floor(1e3 / J) : kn = nn;
      }
      var Ia = function() {
        if (Cr !== null) {
          var J = Y.unstable_now();
          Da = J;
          var Ce = !0, Ie = !0;
          try {
            Ie = Cr(Ce, J);
          } finally {
            Ie ? wr() : (Zn = !1, Cr = null);
          }
        } else
          Zn = !1;
      }, wr;
      if (typeof R == "function")
        wr = function() {
          R(Ia);
        };
      else if (typeof MessageChannel < "u") {
        var ka = new MessageChannel(), xr = ka.port2;
        ka.port1.onmessage = Ia, wr = function() {
          xr.postMessage(null);
        };
      } else
        wr = function() {
          X(Ia, 0);
        };
      function Oa(J) {
        Cr = J, Zn || (Zn = !0, wr());
      }
      function Fn(J, Ce) {
        Rr = X(function() {
          J(Y.unstable_now());
        }, Ce);
      }
      function Yr() {
        Ee(Rr), Rr = -1;
      }
      var Al = Jn, Qa = null;
      Y.unstable_IdlePriority = Fe, Y.unstable_ImmediatePriority = Ht, Y.unstable_LowPriority = ue, Y.unstable_NormalPriority = ge, Y.unstable_Profiling = Qa, Y.unstable_UserBlockingPriority = oe, Y.unstable_cancelCallback = _a, Y.unstable_continueExecution = fi, Y.unstable_forceFrameRate = Tr, Y.unstable_getCurrentPriorityLevel = fn, Y.unstable_getFirstCallbackNode = Er, Y.unstable_next = Xe, Y.unstable_pauseExecution = zt, Y.unstable_requestPaint = Al, Y.unstable_runWithPriority = ft, Y.unstable_scheduleCallback = et, Y.unstable_shouldYield = di, Y.unstable_wrapCallback = dt, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(c0)), c0;
}
var q1;
function J1() {
  return q1 || (q1 = 1, function(Y) {
    ({}).NODE_ENV === "production" ? Y.exports = $_() : Y.exports = Y_();
  }(o0)), o0.exports;
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
var X1;
function I_() {
  if (X1)
    return wa;
  X1 = 1;
  var Y = Ys.exports, q = J1();
  function U(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, l = 1; l < arguments.length; l++)
      r += "&args[]=" + encodeURIComponent(arguments[l]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var nn = /* @__PURE__ */ new Set(), rn = {};
  function Je(n, r) {
    S(n, r), S(n + "Capture", r);
  }
  function S(n, r) {
    for (rn[n] = r, n = 0; n < r.length; n++)
      nn.add(r[n]);
  }
  var an = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Oe = Object.prototype.hasOwnProperty, me = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, Ht = {}, oe = {};
  function ge(n) {
    return Oe.call(oe, n) ? !0 : Oe.call(Ht, n) ? !1 : me.test(n) ? oe[n] = !0 : (Ht[n] = !0, !1);
  }
  function ue(n, r, l, o) {
    if (l !== null && l.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return o ? !1 : l !== null ? !l.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function Fe(n, r, l, o) {
    if (r === null || typeof r > "u" || ue(n, r, l, o))
      return !0;
    if (o)
      return !1;
    if (l !== null)
      switch (l.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function vt(n, r, l, o, c, d, m) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = o, this.attributeNamespace = c, this.mustUseProperty = l, this.propertyName = n, this.type = r, this.sanitizeURL = d, this.removeEmptyString = m;
  }
  var nt = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    nt[n] = new vt(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    nt[r] = new vt(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    nt[n] = new vt(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    nt[n] = new vt(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    nt[n] = new vt(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    nt[n] = new vt(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    nt[n] = new vt(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    nt[n] = new vt(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    nt[n] = new vt(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var Kn = /[\-:]([a-z])/g;
  function Gt(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      Kn,
      Gt
    );
    nt[r] = new vt(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(Kn, Gt);
    nt[r] = new vt(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(Kn, Gt);
    nt[r] = new vt(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    nt[n] = new vt(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), nt.xlinkHref = new vt("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    nt[n] = new vt(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function Be(n, r, l, o) {
    var c = nt.hasOwnProperty(r) ? nt[r] : null;
    (c !== null ? c.type !== 0 : o || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (Fe(r, l, c, o) && (l = null), o || c === null ? ge(r) && (l === null ? n.removeAttribute(r) : n.setAttribute(r, "" + l)) : c.mustUseProperty ? n[c.propertyName] = l === null ? c.type === 3 ? !1 : "" : l : (r = c.attributeName, o = c.attributeNamespace, l === null ? n.removeAttribute(r) : (c = c.type, l = c === 3 || c === 4 && l === !0 ? "" : "" + l, o ? n.setAttributeNS(o, r, l) : n.setAttribute(r, l))));
  }
  var rt = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, Te = Symbol.for("react.element"), qe = Symbol.for("react.portal"), Ue = Symbol.for("react.fragment"), qt = Symbol.for("react.strict_mode"), Dn = Symbol.for("react.profiler"), Nt = Symbol.for("react.provider"), Et = Symbol.for("react.context"), En = Symbol.for("react.forward_ref"), Ye = Symbol.for("react.suspense"), at = Symbol.for("react.suspense_list"), Yt = Symbol.for("react.memo"), gt = Symbol.for("react.lazy"), ve = Symbol.for("react.offscreen"), X = Symbol.iterator;
  function Ee(n) {
    return n === null || typeof n != "object" ? null : (n = X && n[X] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var R = Object.assign, B;
  function ae(n) {
    if (B === void 0)
      try {
        throw Error();
      } catch (l) {
        var r = l.stack.trim().match(/\n( *(at )?)/);
        B = r && r[1] || "";
      }
    return `
` + B + n;
  }
  var Ve = !1;
  function Me(n, r) {
    if (!n || Ve)
      return "";
    Ve = !0;
    var l = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (z) {
            var o = z;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (z) {
            o = z;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (z) {
          o = z;
        }
        n();
      }
    } catch (z) {
      if (z && o && typeof z.stack == "string") {
        for (var c = z.stack.split(`
`), d = o.stack.split(`
`), m = c.length - 1, E = d.length - 1; 1 <= m && 0 <= E && c[m] !== d[E]; )
          E--;
        for (; 1 <= m && 0 <= E; m--, E--)
          if (c[m] !== d[E]) {
            if (m !== 1 || E !== 1)
              do
                if (m--, E--, 0 > E || c[m] !== d[E]) {
                  var T = `
` + c[m].replace(" at new ", " at ");
                  return n.displayName && T.includes("<anonymous>") && (T = T.replace("<anonymous>", n.displayName)), T;
                }
              while (1 <= m && 0 <= E);
            break;
          }
      }
    } finally {
      Ve = !1, Error.prepareStackTrace = l;
    }
    return (n = n ? n.displayName || n.name : "") ? ae(n) : "";
  }
  function ft(n) {
    switch (n.tag) {
      case 5:
        return ae(n.type);
      case 16:
        return ae("Lazy");
      case 13:
        return ae("Suspense");
      case 19:
        return ae("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = Me(n.type, !1), n;
      case 11:
        return n = Me(n.type.render, !1), n;
      case 1:
        return n = Me(n.type, !0), n;
      default:
        return "";
    }
  }
  function Xe(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case Ue:
        return "Fragment";
      case qe:
        return "Portal";
      case Dn:
        return "Profiler";
      case qt:
        return "StrictMode";
      case Ye:
        return "Suspense";
      case at:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Et:
          return (n.displayName || "Context") + ".Consumer";
        case Nt:
          return (n._context.displayName || "Context") + ".Provider";
        case En:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Yt:
          return r = n.displayName || null, r !== null ? r : Xe(n.type) || "Memo";
        case gt:
          r = n._payload, n = n._init;
          try {
            return Xe(n(r));
          } catch {
          }
      }
    return null;
  }
  function dt(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return Xe(r);
      case 8:
        return r === qt ? "StrictMode" : "Mode";
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
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function et(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function zt(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function fi(n) {
    var r = zt(n) ? "checked" : "value", l = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), o = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var c = l.get, d = l.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return c.call(this);
      }, set: function(m) {
        o = "" + m, d.call(this, m);
      } }), Object.defineProperty(n, r, { enumerable: l.enumerable }), { getValue: function() {
        return o;
      }, setValue: function(m) {
        o = "" + m;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function Er(n) {
    n._valueTracker || (n._valueTracker = fi(n));
  }
  function _a(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var l = r.getValue(), o = "";
    return n && (o = zt(n) ? n.checked ? "true" : "false" : n.value), n = o, n !== l ? (r.setValue(n), !0) : !1;
  }
  function fn(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function Zn(n, r) {
    var l = r.checked;
    return R({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: l != null ? l : n._wrapperState.initialChecked });
  }
  function Cr(n, r) {
    var l = r.defaultValue == null ? "" : r.defaultValue, o = r.checked != null ? r.checked : r.defaultChecked;
    l = et(r.value != null ? r.value : l), n._wrapperState = { initialChecked: o, initialValue: l, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Rr(n, r) {
    r = r.checked, r != null && Be(n, "checked", r, !1);
  }
  function kn(n, r) {
    Rr(n, r);
    var l = et(r.value), o = r.type;
    if (l != null)
      o === "number" ? (l === 0 && n.value === "" || n.value != l) && (n.value = "" + l) : n.value !== "" + l && (n.value = "" + l);
    else if (o === "submit" || o === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? di(n, r.type, l) : r.hasOwnProperty("defaultValue") && di(n, r.type, et(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function Da(n, r, l) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var o = r.type;
      if (!(o !== "submit" && o !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, l || r === n.value || (n.value = r), n.defaultValue = r;
    }
    l = n.name, l !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, l !== "" && (n.name = l);
  }
  function di(n, r, l) {
    (r !== "number" || fn(n.ownerDocument) !== n) && (l == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + l && (n.defaultValue = "" + l));
  }
  var Jn = Array.isArray;
  function Tr(n, r, l, o) {
    if (n = n.options, r) {
      r = {};
      for (var c = 0; c < l.length; c++)
        r["$" + l[c]] = !0;
      for (l = 0; l < n.length; l++)
        c = r.hasOwnProperty("$" + n[l].value), n[l].selected !== c && (n[l].selected = c), c && o && (n[l].defaultSelected = !0);
    } else {
      for (l = "" + et(l), r = null, c = 0; c < n.length; c++) {
        if (n[c].value === l) {
          n[c].selected = !0, o && (n[c].defaultSelected = !0);
          return;
        }
        r !== null || n[c].disabled || (r = n[c]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function Ia(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(U(91));
    return R({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function wr(n, r) {
    var l = r.value;
    if (l == null) {
      if (l = r.children, r = r.defaultValue, l != null) {
        if (r != null)
          throw Error(U(92));
        if (Jn(l)) {
          if (1 < l.length)
            throw Error(U(93));
          l = l[0];
        }
        r = l;
      }
      r == null && (r = ""), l = r;
    }
    n._wrapperState = { initialValue: et(l) };
  }
  function ka(n, r) {
    var l = et(r.value), o = et(r.defaultValue);
    l != null && (l = "" + l, l !== n.value && (n.value = l), r.defaultValue == null && n.defaultValue !== l && (n.defaultValue = l)), o != null && (n.defaultValue = "" + o);
  }
  function xr(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Oa(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function Fn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Oa(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var Yr, Al = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, l, o, c) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, l, o, c);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (Yr = Yr || document.createElement("div"), Yr.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = Yr.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function Qa(n, r) {
    if (r) {
      var l = n.firstChild;
      if (l && l === n.lastChild && l.nodeType === 3) {
        l.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var J = {
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
  }, Ce = ["Webkit", "ms", "Moz", "O"];
  Object.keys(J).forEach(function(n) {
    Ce.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), J[r] = J[n];
    });
  });
  function Ie(n, r, l) {
    return r == null || typeof r == "boolean" || r === "" ? "" : l || typeof r != "number" || r === 0 || J.hasOwnProperty(n) && J[n] ? ("" + r).trim() : r + "px";
  }
  function wt(n, r) {
    n = n.style;
    for (var l in r)
      if (r.hasOwnProperty(l)) {
        var o = l.indexOf("--") === 0, c = Ie(l, r[l], o);
        l === "float" && (l = "cssFloat"), o ? n.setProperty(l, c) : n[l] = c;
      }
  }
  var bt = R({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Cn(n, r) {
    if (r) {
      if (bt[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(U(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(U(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(U(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(U(62));
    }
  }
  function dn(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
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
  var br = null;
  function Ft(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var ra = null, Xt = null, Ut = null;
  function Hl(n) {
    if (n = ns(n)) {
      if (typeof ra != "function")
        throw Error(U(280));
      var r = n.stateNode;
      r && (r = Re(r), ra(n.stateNode, n.type, r));
    }
  }
  function pi(n) {
    Xt ? Ut ? Ut.push(n) : Ut = [n] : Xt = n;
  }
  function Du() {
    if (Xt) {
      var n = Xt, r = Ut;
      if (Ut = Xt = null, Hl(n), r)
        for (n = 0; n < r.length; n++)
          Hl(r[n]);
    }
  }
  function Is(n, r) {
    return n(r);
  }
  function Qs() {
  }
  var ku = !1;
  function Ao(n, r, l) {
    if (ku)
      return n(r, l);
    ku = !0;
    try {
      return Is(n, r, l);
    } finally {
      ku = !1, (Xt !== null || Ut !== null) && (Qs(), Du());
    }
  }
  function La(n, r) {
    var l = n.stateNode;
    if (l === null)
      return null;
    var o = Re(l);
    if (o === null)
      return null;
    l = o[r];
    e:
      switch (r) {
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
          (o = !o.disabled) || (n = n.type, o = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !o;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (l && typeof l != "function")
      throw Error(U(231, r, typeof l));
    return l;
  }
  var $i = !1;
  if (an)
    try {
      var Wa = {};
      Object.defineProperty(Wa, "passive", { get: function() {
        $i = !0;
      } }), window.addEventListener("test", Wa, Wa), window.removeEventListener("test", Wa, Wa);
    } catch {
      $i = !1;
    }
  function Yi(n, r, l, o, c, d, m, E, T) {
    var z = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(l, z);
    } catch ($) {
      this.onError($);
    }
  }
  var Ir = !1, Ma = null, Ii = !1, Qi = null, Ou = { onError: function(n) {
    Ir = !0, Ma = n;
  } };
  function Ho(n, r, l, o, c, d, m, E, T) {
    Ir = !1, Ma = null, Yi.apply(Ou, arguments);
  }
  function ln(n, r, l, o, c, d, m, E, T) {
    if (Ho.apply(this, arguments), Ir) {
      if (Ir) {
        var z = Ma;
        Ir = !1, Ma = null;
      } else
        throw Error(U(198));
      Ii || (Ii = !0, Qi = z);
    }
  }
  function aa(n) {
    var r = n, l = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, (r.flags & 4098) !== 0 && (l = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? l : null;
  }
  function Fl(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function Wi(n) {
    if (aa(n) !== n)
      throw Error(U(188));
  }
  function jn(n) {
    var r = n.alternate;
    if (!r) {
      if (r = aa(n), r === null)
        throw Error(U(188));
      return r !== n ? null : n;
    }
    for (var l = n, o = r; ; ) {
      var c = l.return;
      if (c === null)
        break;
      var d = c.alternate;
      if (d === null) {
        if (o = c.return, o !== null) {
          l = o;
          continue;
        }
        break;
      }
      if (c.child === d.child) {
        for (d = c.child; d; ) {
          if (d === l)
            return Wi(c), n;
          if (d === o)
            return Wi(c), r;
          d = d.sibling;
        }
        throw Error(U(188));
      }
      if (l.return !== o.return)
        l = c, o = d;
      else {
        for (var m = !1, E = c.child; E; ) {
          if (E === l) {
            m = !0, l = c, o = d;
            break;
          }
          if (E === o) {
            m = !0, o = c, l = d;
            break;
          }
          E = E.sibling;
        }
        if (!m) {
          for (E = d.child; E; ) {
            if (E === l) {
              m = !0, l = d, o = c;
              break;
            }
            if (E === o) {
              m = !0, o = d, l = c;
              break;
            }
            E = E.sibling;
          }
          if (!m)
            throw Error(U(189));
        }
      }
      if (l.alternate !== o)
        throw Error(U(190));
    }
    if (l.tag !== 3)
      throw Error(U(188));
    return l.stateNode.current === l ? n : r;
  }
  function Ws(n) {
    return n = jn(n), n !== null ? Gs(n) : null;
  }
  function Gs(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = Gs(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var Fo = q.unstable_scheduleCallback, qs = q.unstable_cancelCallback, Hf = q.unstable_shouldYield, Ff = q.unstable_requestPaint, It = q.unstable_now, jf = q.unstable_getCurrentPriorityLevel, Na = q.unstable_ImmediatePriority, Qe = q.unstable_UserBlockingPriority, Ga = q.unstable_NormalPriority, Gi = q.unstable_LowPriority, Lu = q.unstable_IdlePriority, qi = null, _r = null;
  function jo(n) {
    if (_r && typeof _r.onCommitFiberRoot == "function")
      try {
        _r.onCommitFiberRoot(qi, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var ur = Math.clz32 ? Math.clz32 : Xs, Vo = Math.log, Bo = Math.LN2;
  function Xs(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (Vo(n) / Bo | 0) | 0;
  }
  var Mu = 64, Xi = 4194304;
  function za(n) {
    switch (n & -n) {
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
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function or(n, r) {
    var l = n.pendingLanes;
    if (l === 0)
      return 0;
    var o = 0, c = n.suspendedLanes, d = n.pingedLanes, m = l & 268435455;
    if (m !== 0) {
      var E = m & ~c;
      E !== 0 ? o = za(E) : (d &= m, d !== 0 && (o = za(d)));
    } else
      m = l & ~c, m !== 0 ? o = za(m) : d !== 0 && (o = za(d));
    if (o === 0)
      return 0;
    if (r !== 0 && r !== o && (r & c) === 0 && (c = o & -o, d = r & -r, c >= d || c === 16 && (d & 4194240) !== 0))
      return r;
    if ((o & 4) !== 0 && (o |= l & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= o; 0 < r; )
        l = 31 - ur(r), c = 1 << l, o |= n[l], r &= ~c;
    return o;
  }
  function Ki(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
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
        return r + 5e3;
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
  function Zi(n, r) {
    for (var l = n.suspendedLanes, o = n.pingedLanes, c = n.expirationTimes, d = n.pendingLanes; 0 < d; ) {
      var m = 31 - ur(d), E = 1 << m, T = c[m];
      T === -1 ? ((E & l) === 0 || (E & o) !== 0) && (c[m] = Ki(E, r)) : T <= r && (n.expiredLanes |= E), d &= ~E;
    }
  }
  function Ji(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function Nu() {
    var n = Mu;
    return Mu <<= 1, (Mu & 4194240) === 0 && (Mu = 64), n;
  }
  function zu(n) {
    for (var r = [], l = 0; 31 > l; l++)
      r.push(n);
    return r;
  }
  function vi(n, r, l) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - ur(r), n[r] = l;
  }
  function Vf(n, r) {
    var l = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var o = n.eventTimes;
    for (n = n.expirationTimes; 0 < l; ) {
      var c = 31 - ur(l), d = 1 << c;
      r[c] = 0, o[c] = -1, n[c] = -1, l &= ~d;
    }
  }
  function qa(n, r) {
    var l = n.entangledLanes |= r;
    for (n = n.entanglements; l; ) {
      var o = 31 - ur(l), c = 1 << o;
      c & r | n[o] & r && (n[o] |= r), l &= ~c;
    }
  }
  var ht = 0;
  function Uu(n) {
    return n &= -n, 1 < n ? 4 < n ? (n & 268435455) !== 0 ? 16 : 536870912 : 4 : 1;
  }
  var jl, Au, st, Hu, Fu, Ae = !1, Vl = [], Kt = null, Dr = null, sr = null, el = /* @__PURE__ */ new Map(), un = /* @__PURE__ */ new Map(), Ct = [], Ks = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function kr(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Kt = null;
        break;
      case "dragenter":
      case "dragleave":
        Dr = null;
        break;
      case "mouseover":
      case "mouseout":
        sr = null;
        break;
      case "pointerover":
      case "pointerout":
        el.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        un.delete(r.pointerId);
    }
  }
  function On(n, r, l, o, c, d) {
    return n === null || n.nativeEvent !== d ? (n = { blockedOn: r, domEventName: l, eventSystemFlags: o, nativeEvent: d, targetContainers: [c] }, r !== null && (r = ns(r), r !== null && Au(r)), n) : (n.eventSystemFlags |= o, r = n.targetContainers, c !== null && r.indexOf(c) === -1 && r.push(c), n);
  }
  function Xa(n, r, l, o, c) {
    switch (r) {
      case "focusin":
        return Kt = On(Kt, n, r, l, o, c), !0;
      case "dragenter":
        return Dr = On(Dr, n, r, l, o, c), !0;
      case "mouseover":
        return sr = On(sr, n, r, l, o, c), !0;
      case "pointerover":
        var d = c.pointerId;
        return el.set(d, On(el.get(d) || null, n, r, l, o, c)), !0;
      case "gotpointercapture":
        return d = c.pointerId, un.set(d, On(un.get(d) || null, n, r, l, o, c)), !0;
    }
    return !1;
  }
  function Zs(n) {
    var r = oa(n.target);
    if (r !== null) {
      var l = aa(r);
      if (l !== null) {
        if (r = l.tag, r === 13) {
          if (r = Fl(l), r !== null) {
            n.blockedOn = r, Fu(n.priority, function() {
              st(l);
            });
            return;
          }
        } else if (r === 3 && l.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = l.tag === 3 ? l.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function hi(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var l = Vu(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (l === null) {
        l = n.nativeEvent;
        var o = new l.constructor(l.type, l);
        br = o, l.target.dispatchEvent(o), br = null;
      } else
        return r = ns(l), r !== null && Au(r), n.blockedOn = l, !1;
      r.shift();
    }
    return !0;
  }
  function tl(n, r, l) {
    hi(n) && l.delete(r);
  }
  function Js() {
    Ae = !1, Kt !== null && hi(Kt) && (Kt = null), Dr !== null && hi(Dr) && (Dr = null), sr !== null && hi(sr) && (sr = null), el.forEach(tl), un.forEach(tl);
  }
  function ia(n, r) {
    n.blockedOn === r && (n.blockedOn = null, Ae || (Ae = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, Js)));
  }
  function nl(n) {
    function r(c) {
      return ia(c, n);
    }
    if (0 < Vl.length) {
      ia(Vl[0], n);
      for (var l = 1; l < Vl.length; l++) {
        var o = Vl[l];
        o.blockedOn === n && (o.blockedOn = null);
      }
    }
    for (Kt !== null && ia(Kt, n), Dr !== null && ia(Dr, n), sr !== null && ia(sr, n), el.forEach(r), un.forEach(r), l = 0; l < Ct.length; l++)
      o = Ct[l], o.blockedOn === n && (o.blockedOn = null);
    for (; 0 < Ct.length && (l = Ct[0], l.blockedOn === null); )
      Zs(l), l.blockedOn === null && Ct.shift();
  }
  var rl = rt.ReactCurrentBatchConfig, la = !0;
  function ju(n, r, l, o) {
    var c = ht, d = rl.transition;
    rl.transition = null;
    try {
      ht = 1, il(n, r, l, o);
    } finally {
      ht = c, rl.transition = d;
    }
  }
  function al(n, r, l, o) {
    var c = ht, d = rl.transition;
    rl.transition = null;
    try {
      ht = 4, il(n, r, l, o);
    } finally {
      ht = c, rl.transition = d;
    }
  }
  function il(n, r, l, o) {
    if (la) {
      var c = Vu(n, r, l, o);
      if (c === null)
        oc(n, r, o, Bl, l), kr(n, o);
      else if (Xa(c, n, r, l, o))
        o.stopPropagation();
      else if (kr(n, o), r & 4 && -1 < Ks.indexOf(n)) {
        for (; c !== null; ) {
          var d = ns(c);
          if (d !== null && jl(d), d = Vu(n, r, l, o), d === null && oc(n, r, o, Bl, l), d === c)
            break;
          c = d;
        }
        c !== null && o.stopPropagation();
      } else
        oc(n, r, o, null, l);
    }
  }
  var Bl = null;
  function Vu(n, r, l, o) {
    if (Bl = null, n = Ft(o), n = oa(n), n !== null)
      if (r = aa(n), r === null)
        n = null;
      else if (l = r.tag, l === 13) {
        if (n = Fl(r), n !== null)
          return n;
        n = null;
      } else if (l === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return Bl = n, null;
  }
  function Po(n) {
    switch (n) {
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
        switch (jf()) {
          case Na:
            return 1;
          case Qe:
            return 4;
          case Ga:
          case Gi:
            return 16;
          case Lu:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var Ua = null, h = null, C = null;
  function M() {
    if (C)
      return C;
    var n, r = h, l = r.length, o, c = "value" in Ua ? Ua.value : Ua.textContent, d = c.length;
    for (n = 0; n < l && r[n] === c[n]; n++)
      ;
    var m = l - n;
    for (o = 1; o <= m && r[l - o] === c[d - o]; o++)
      ;
    return C = c.slice(n, 1 < o ? 1 - o : void 0);
  }
  function A(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function W() {
    return !0;
  }
  function _e() {
    return !1;
  }
  function ee(n) {
    function r(l, o, c, d, m) {
      this._reactName = l, this._targetInst = c, this.type = o, this.nativeEvent = d, this.target = m, this.currentTarget = null;
      for (var E in n)
        n.hasOwnProperty(E) && (l = n[E], this[E] = l ? l(d) : d[E]);
      return this.isDefaultPrevented = (d.defaultPrevented != null ? d.defaultPrevented : d.returnValue === !1) ? W : _e, this.isPropagationStopped = _e, this;
    }
    return R(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var l = this.nativeEvent;
      l && (l.preventDefault ? l.preventDefault() : typeof l.returnValue != "unknown" && (l.returnValue = !1), this.isDefaultPrevented = W);
    }, stopPropagation: function() {
      var l = this.nativeEvent;
      l && (l.stopPropagation ? l.stopPropagation() : typeof l.cancelBubble != "unknown" && (l.cancelBubble = !0), this.isPropagationStopped = W);
    }, persist: function() {
    }, isPersistent: W }), r;
  }
  var xe = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, We = ee(xe), ct = R({}, xe, { view: 0, detail: 0 }), kt = ee(ct), xt, Ot, At, tt = R({}, ct, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: If, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== At && (At && n.type === "mousemove" ? (xt = n.screenX - At.screenX, Ot = n.screenY - At.screenY) : Ot = xt = 0, At = n), xt);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Ot;
  } }), mi = ee(tt), Bu = R({}, tt, { dataTransfer: 0 }), $o = ee(Bu), Bf = R({}, ct, { relatedTarget: 0 }), Aa = ee(Bf), Yo = R({}, xe, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Io = ee(Yo), Pf = R({}, xe, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Hm = ee(Pf), Fm = R({}, xe, { data: 0 }), $f = ee(Fm), Yf = {
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
  }, Xp = {
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
  }, Kp = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Zp(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = Kp[n]) ? !!r[n] : !1;
  }
  function If() {
    return Zp;
  }
  var yi = R({}, ct, { key: function(n) {
    if (n.key) {
      var r = Yf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = A(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Xp[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: If, charCode: function(n) {
    return n.type === "keypress" ? A(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? A(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), jm = ee(yi), Qf = R({}, tt, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), ec = ee(Qf), Wf = R({}, ct, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: If }), Vm = ee(Wf), tc = R({}, xe, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Jp = ee(tc), Or = R({}, tt, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), gi = ee(Or), mn = [9, 13, 27, 32], Ha = an && "CompositionEvent" in window, Pl = null;
  an && "documentMode" in document && (Pl = document.documentMode);
  var nc = an && "TextEvent" in window && !Pl, ev = an && (!Ha || Pl && 8 < Pl && 11 >= Pl), Pu = String.fromCharCode(32), tv = !1;
  function nv(n, r) {
    switch (n) {
      case "keyup":
        return mn.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function rc(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var $u = !1;
  function Bm(n, r) {
    switch (n) {
      case "compositionend":
        return rc(r);
      case "keypress":
        return r.which !== 32 ? null : (tv = !0, Pu);
      case "textInput":
        return n = r.data, n === Pu && tv ? null : n;
      default:
        return null;
    }
  }
  function Pm(n, r) {
    if ($u)
      return n === "compositionend" || !Ha && nv(n, r) ? (n = M(), C = h = Ua = null, $u = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return ev && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var rv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function av(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!rv[n.type] : r === "textarea";
  }
  function iv(n, r, l, o) {
    pi(o), r = Jo(r, "onChange"), 0 < r.length && (l = new We("onChange", "change", null, l, o), n.push({ event: l, listeners: r }));
  }
  var Qo = null, Yu = null;
  function Iu(n) {
    uc(n, 0);
  }
  function Qu(n) {
    var r = Gu(n);
    if (_a(r))
      return n;
  }
  function lv(n, r) {
    if (n === "change")
      return r;
  }
  var Gf = !1;
  if (an) {
    var qf;
    if (an) {
      var Xf = "oninput" in document;
      if (!Xf) {
        var uv = document.createElement("div");
        uv.setAttribute("oninput", "return;"), Xf = typeof uv.oninput == "function";
      }
      qf = Xf;
    } else
      qf = !1;
    Gf = qf && (!document.documentMode || 9 < document.documentMode);
  }
  function ov() {
    Qo && (Qo.detachEvent("onpropertychange", sv), Yu = Qo = null);
  }
  function sv(n) {
    if (n.propertyName === "value" && Qu(Yu)) {
      var r = [];
      iv(r, Yu, n, Ft(n)), Ao(Iu, r);
    }
  }
  function $m(n, r, l) {
    n === "focusin" ? (ov(), Qo = r, Yu = l, Qo.attachEvent("onpropertychange", sv)) : n === "focusout" && ov();
  }
  function Ym(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return Qu(Yu);
  }
  function Im(n, r) {
    if (n === "click")
      return Qu(r);
  }
  function cv(n, r) {
    if (n === "input" || n === "change")
      return Qu(r);
  }
  function Qm(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var ua = typeof Object.is == "function" ? Object.is : Qm;
  function Wo(n, r) {
    if (ua(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var l = Object.keys(n), o = Object.keys(r);
    if (l.length !== o.length)
      return !1;
    for (o = 0; o < l.length; o++) {
      var c = l[o];
      if (!Oe.call(r, c) || !ua(n[c], r[c]))
        return !1;
    }
    return !0;
  }
  function fv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function dv(n, r) {
    var l = fv(n);
    n = 0;
    for (var o; l; ) {
      if (l.nodeType === 3) {
        if (o = n + l.textContent.length, n <= r && o >= r)
          return { node: l, offset: r - n };
        n = o;
      }
      e: {
        for (; l; ) {
          if (l.nextSibling) {
            l = l.nextSibling;
            break e;
          }
          l = l.parentNode;
        }
        l = void 0;
      }
      l = fv(l);
    }
  }
  function pv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? pv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function ac() {
    for (var n = window, r = fn(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var l = typeof r.contentWindow.location.href == "string";
      } catch {
        l = !1;
      }
      if (l)
        n = r.contentWindow;
      else
        break;
      r = fn(n.document);
    }
    return r;
  }
  function Si(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function ic(n) {
    var r = ac(), l = n.focusedElem, o = n.selectionRange;
    if (r !== l && l && l.ownerDocument && pv(l.ownerDocument.documentElement, l)) {
      if (o !== null && Si(l)) {
        if (r = o.start, n = o.end, n === void 0 && (n = r), "selectionStart" in l)
          l.selectionStart = r, l.selectionEnd = Math.min(n, l.value.length);
        else if (n = (r = l.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var c = l.textContent.length, d = Math.min(o.start, c);
          o = o.end === void 0 ? d : Math.min(o.end, c), !n.extend && d > o && (c = o, o = d, d = c), c = dv(l, d);
          var m = dv(
            l,
            o
          );
          c && m && (n.rangeCount !== 1 || n.anchorNode !== c.node || n.anchorOffset !== c.offset || n.focusNode !== m.node || n.focusOffset !== m.offset) && (r = r.createRange(), r.setStart(c.node, c.offset), n.removeAllRanges(), d > o ? (n.addRange(r), n.extend(m.node, m.offset)) : (r.setEnd(m.node, m.offset), n.addRange(r)));
        }
      }
      for (r = [], n = l; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof l.focus == "function" && l.focus(), l = 0; l < r.length; l++)
        n = r[l], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var vv = an && "documentMode" in document && 11 >= document.documentMode, Fa = null, Kf = null, Go = null, Zf = !1;
  function hv(n, r, l) {
    var o = l.window === l ? l.document : l.nodeType === 9 ? l : l.ownerDocument;
    Zf || Fa == null || Fa !== fn(o) || (o = Fa, "selectionStart" in o && Si(o) ? o = { start: o.selectionStart, end: o.selectionEnd } : (o = (o.ownerDocument && o.ownerDocument.defaultView || window).getSelection(), o = { anchorNode: o.anchorNode, anchorOffset: o.anchorOffset, focusNode: o.focusNode, focusOffset: o.focusOffset }), Go && Wo(Go, o) || (Go = o, o = Jo(Kf, "onSelect"), 0 < o.length && (r = new We("onSelect", "select", null, r, l), n.push({ event: r, listeners: o }), r.target = Fa)));
  }
  function lc(n, r) {
    var l = {};
    return l[n.toLowerCase()] = r.toLowerCase(), l["Webkit" + n] = "webkit" + r, l["Moz" + n] = "moz" + r, l;
  }
  var $l = { animationend: lc("Animation", "AnimationEnd"), animationiteration: lc("Animation", "AnimationIteration"), animationstart: lc("Animation", "AnimationStart"), transitionend: lc("Transition", "TransitionEnd") }, Jf = {}, ed = {};
  an && (ed = document.createElement("div").style, "AnimationEvent" in window || (delete $l.animationend.animation, delete $l.animationiteration.animation, delete $l.animationstart.animation), "TransitionEvent" in window || delete $l.transitionend.transition);
  function Ln(n) {
    if (Jf[n])
      return Jf[n];
    if (!$l[n])
      return n;
    var r = $l[n], l;
    for (l in r)
      if (r.hasOwnProperty(l) && l in ed)
        return Jf[n] = r[l];
    return n;
  }
  var td = Ln("animationend"), mv = Ln("animationiteration"), yv = Ln("animationstart"), gv = Ln("transitionend"), Sv = /* @__PURE__ */ new Map(), Ev = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function Ei(n, r) {
    Sv.set(n, r), Je(r, [n]);
  }
  for (var qo = 0; qo < Ev.length; qo++) {
    var Yl = Ev[qo], Wm = Yl.toLowerCase(), Xo = Yl[0].toUpperCase() + Yl.slice(1);
    Ei(Wm, "on" + Xo);
  }
  Ei(td, "onAnimationEnd"), Ei(mv, "onAnimationIteration"), Ei(yv, "onAnimationStart"), Ei("dblclick", "onDoubleClick"), Ei("focusin", "onFocus"), Ei("focusout", "onBlur"), Ei(gv, "onTransitionEnd"), S("onMouseEnter", ["mouseout", "mouseover"]), S("onMouseLeave", ["mouseout", "mouseover"]), S("onPointerEnter", ["pointerout", "pointerover"]), S("onPointerLeave", ["pointerout", "pointerover"]), Je("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), Je("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), Je("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Je("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), Je("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), Je("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ko = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Gm = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ko));
  function Cv(n, r, l) {
    var o = n.type || "unknown-event";
    n.currentTarget = l, ln(o, r, void 0, n), n.currentTarget = null;
  }
  function uc(n, r) {
    r = (r & 4) !== 0;
    for (var l = 0; l < n.length; l++) {
      var o = n[l], c = o.event;
      o = o.listeners;
      e: {
        var d = void 0;
        if (r)
          for (var m = o.length - 1; 0 <= m; m--) {
            var E = o[m], T = E.instance, z = E.currentTarget;
            if (E = E.listener, T !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, z), d = T;
          }
        else
          for (m = 0; m < o.length; m++) {
            if (E = o[m], T = E.instance, z = E.currentTarget, E = E.listener, T !== d && c.isPropagationStopped())
              break e;
            Cv(c, E, z), d = T;
          }
      }
    }
    if (Ii)
      throw n = Qi, Ii = !1, Qi = null, n;
  }
  function Lt(n, r) {
    var l = r[od];
    l === void 0 && (l = r[od] = /* @__PURE__ */ new Set());
    var o = n + "__bubble";
    l.has(o) || (Rv(r, n, 2, !1), l.add(o));
  }
  function ll(n, r, l) {
    var o = 0;
    r && (o |= 4), Rv(l, n, o, r);
  }
  var Ci = "_reactListening" + Math.random().toString(36).slice(2);
  function Wu(n) {
    if (!n[Ci]) {
      n[Ci] = !0, nn.forEach(function(l) {
        l !== "selectionchange" && (Gm.has(l) || ll(l, !1, n), ll(l, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[Ci] || (r[Ci] = !0, ll("selectionchange", !1, r));
    }
  }
  function Rv(n, r, l, o) {
    switch (Po(r)) {
      case 1:
        var c = ju;
        break;
      case 4:
        c = al;
        break;
      default:
        c = il;
    }
    l = c.bind(null, r, l, n), c = void 0, !$i || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (c = !0), o ? c !== void 0 ? n.addEventListener(r, l, { capture: !0, passive: c }) : n.addEventListener(r, l, !0) : c !== void 0 ? n.addEventListener(r, l, { passive: c }) : n.addEventListener(r, l, !1);
  }
  function oc(n, r, l, o, c) {
    var d = o;
    if ((r & 1) === 0 && (r & 2) === 0 && o !== null)
      e:
        for (; ; ) {
          if (o === null)
            return;
          var m = o.tag;
          if (m === 3 || m === 4) {
            var E = o.stateNode.containerInfo;
            if (E === c || E.nodeType === 8 && E.parentNode === c)
              break;
            if (m === 4)
              for (m = o.return; m !== null; ) {
                var T = m.tag;
                if ((T === 3 || T === 4) && (T = m.stateNode.containerInfo, T === c || T.nodeType === 8 && T.parentNode === c))
                  return;
                m = m.return;
              }
            for (; E !== null; ) {
              if (m = oa(E), m === null)
                return;
              if (T = m.tag, T === 5 || T === 6) {
                o = d = m;
                continue e;
              }
              E = E.parentNode;
            }
          }
          o = o.return;
        }
    Ao(function() {
      var z = d, $ = Ft(l), I = [];
      e: {
        var P = Sv.get(n);
        if (P !== void 0) {
          var ne = We, ce = n;
          switch (n) {
            case "keypress":
              if (A(l) === 0)
                break e;
            case "keydown":
            case "keyup":
              ne = jm;
              break;
            case "focusin":
              ce = "focus", ne = Aa;
              break;
            case "focusout":
              ce = "blur", ne = Aa;
              break;
            case "beforeblur":
            case "afterblur":
              ne = Aa;
              break;
            case "click":
              if (l.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              ne = mi;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              ne = $o;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              ne = Vm;
              break;
            case td:
            case mv:
            case yv:
              ne = Io;
              break;
            case gv:
              ne = Jp;
              break;
            case "scroll":
              ne = kt;
              break;
            case "wheel":
              ne = gi;
              break;
            case "copy":
            case "cut":
            case "paste":
              ne = Hm;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              ne = ec;
          }
          var pe = (r & 4) !== 0, vn = !pe && n === "scroll", _ = pe ? P !== null ? P + "Capture" : null : P;
          pe = [];
          for (var x = z, O; x !== null; ) {
            O = x;
            var G = O.stateNode;
            if (O.tag === 5 && G !== null && (O = G, _ !== null && (G = La(x, _), G != null && pe.push(Zo(x, G, O)))), vn)
              break;
            x = x.return;
          }
          0 < pe.length && (P = new ne(P, ce, null, l, $), I.push({ event: P, listeners: pe }));
        }
      }
      if ((r & 7) === 0) {
        e: {
          if (P = n === "mouseover" || n === "pointerover", ne = n === "mouseout" || n === "pointerout", P && l !== br && (ce = l.relatedTarget || l.fromElement) && (oa(ce) || ce[Ri]))
            break e;
          if ((ne || P) && (P = $.window === $ ? $ : (P = $.ownerDocument) ? P.defaultView || P.parentWindow : window, ne ? (ce = l.relatedTarget || l.toElement, ne = z, ce = ce ? oa(ce) : null, ce !== null && (vn = aa(ce), ce !== vn || ce.tag !== 5 && ce.tag !== 6) && (ce = null)) : (ne = null, ce = z), ne !== ce)) {
            if (pe = mi, G = "onMouseLeave", _ = "onMouseEnter", x = "mouse", (n === "pointerout" || n === "pointerover") && (pe = ec, G = "onPointerLeave", _ = "onPointerEnter", x = "pointer"), vn = ne == null ? P : Gu(ne), O = ce == null ? P : Gu(ce), P = new pe(G, x + "leave", ne, l, $), P.target = vn, P.relatedTarget = O, G = null, oa($) === z && (pe = new pe(_, x + "enter", ce, l, $), pe.target = O, pe.relatedTarget = vn, G = pe), vn = G, ne && ce)
              t: {
                for (pe = ne, _ = ce, x = 0, O = pe; O; O = Il(O))
                  x++;
                for (O = 0, G = _; G; G = Il(G))
                  O++;
                for (; 0 < x - O; )
                  pe = Il(pe), x--;
                for (; 0 < O - x; )
                  _ = Il(_), O--;
                for (; x--; ) {
                  if (pe === _ || _ !== null && pe === _.alternate)
                    break t;
                  pe = Il(pe), _ = Il(_);
                }
                pe = null;
              }
            else
              pe = null;
            ne !== null && nd(I, P, ne, pe, !1), ce !== null && vn !== null && nd(I, vn, ce, pe, !0);
          }
        }
        e: {
          if (P = z ? Gu(z) : window, ne = P.nodeName && P.nodeName.toLowerCase(), ne === "select" || ne === "input" && P.type === "file")
            var he = lv;
          else if (av(P))
            if (Gf)
              he = cv;
            else {
              he = Ym;
              var fe = $m;
            }
          else
            (ne = P.nodeName) && ne.toLowerCase() === "input" && (P.type === "checkbox" || P.type === "radio") && (he = Im);
          if (he && (he = he(n, z))) {
            iv(I, he, l, $);
            break e;
          }
          fe && fe(n, P, z), n === "focusout" && (fe = P._wrapperState) && fe.controlled && P.type === "number" && di(P, "number", P.value);
        }
        switch (fe = z ? Gu(z) : window, n) {
          case "focusin":
            (av(fe) || fe.contentEditable === "true") && (Fa = fe, Kf = z, Go = null);
            break;
          case "focusout":
            Go = Kf = Fa = null;
            break;
          case "mousedown":
            Zf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Zf = !1, hv(I, l, $);
            break;
          case "selectionchange":
            if (vv)
              break;
          case "keydown":
          case "keyup":
            hv(I, l, $);
        }
        var Se;
        if (Ha)
          e: {
            switch (n) {
              case "compositionstart":
                var ze = "onCompositionStart";
                break e;
              case "compositionend":
                ze = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ze = "onCompositionUpdate";
                break e;
            }
            ze = void 0;
          }
        else
          $u ? nv(n, l) && (ze = "onCompositionEnd") : n === "keydown" && l.keyCode === 229 && (ze = "onCompositionStart");
        ze && (ev && l.locale !== "ko" && ($u || ze !== "onCompositionStart" ? ze === "onCompositionEnd" && $u && (Se = M()) : (Ua = $, h = "value" in Ua ? Ua.value : Ua.textContent, $u = !0)), fe = Jo(z, ze), 0 < fe.length && (ze = new $f(ze, n, null, l, $), I.push({ event: ze, listeners: fe }), Se ? ze.data = Se : (Se = rc(l), Se !== null && (ze.data = Se)))), (Se = nc ? Bm(n, l) : Pm(n, l)) && (z = Jo(z, "onBeforeInput"), 0 < z.length && ($ = new $f("onBeforeInput", "beforeinput", null, l, $), I.push({ event: $, listeners: z }), $.data = Se));
      }
      uc(I, r);
    });
  }
  function Zo(n, r, l) {
    return { instance: n, listener: r, currentTarget: l };
  }
  function Jo(n, r) {
    for (var l = r + "Capture", o = []; n !== null; ) {
      var c = n, d = c.stateNode;
      c.tag === 5 && d !== null && (c = d, d = La(n, l), d != null && o.unshift(Zo(n, d, c)), d = La(n, r), d != null && o.push(Zo(n, d, c))), n = n.return;
    }
    return o;
  }
  function Il(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function nd(n, r, l, o, c) {
    for (var d = r._reactName, m = []; l !== null && l !== o; ) {
      var E = l, T = E.alternate, z = E.stateNode;
      if (T !== null && T === o)
        break;
      E.tag === 5 && z !== null && (E = z, c ? (T = La(l, d), T != null && m.unshift(Zo(l, T, E))) : c || (T = La(l, d), T != null && m.push(Zo(l, T, E)))), l = l.return;
    }
    m.length !== 0 && n.push({ event: r, listeners: m });
  }
  var rd = /\r\n?/g, qm = /\u0000|\uFFFD/g;
  function ad(n) {
    return (typeof n == "string" ? n : "" + n).replace(rd, `
`).replace(qm, "");
  }
  function sc(n, r, l) {
    if (r = ad(r), ad(n) !== r && l)
      throw Error(U(425));
  }
  function cc() {
  }
  var id = null, Ql = null;
  function es(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Wl = typeof setTimeout == "function" ? setTimeout : void 0, Tv = typeof clearTimeout == "function" ? clearTimeout : void 0, ld = typeof Promise == "function" ? Promise : void 0, ud = typeof queueMicrotask == "function" ? queueMicrotask : typeof ld < "u" ? function(n) {
    return ld.resolve(null).then(n).catch(Xm);
  } : Wl;
  function Xm(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function ul(n, r) {
    var l = r, o = 0;
    do {
      var c = l.nextSibling;
      if (n.removeChild(l), c && c.nodeType === 8)
        if (l = c.data, l === "/$") {
          if (o === 0) {
            n.removeChild(c), nl(r);
            return;
          }
          o--;
        } else
          l !== "$" && l !== "$?" && l !== "$!" || o++;
      l = c;
    } while (l);
    nl(r);
  }
  function ja(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function ts(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var l = n.data;
        if (l === "$" || l === "$!" || l === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          l === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var ol = Math.random().toString(36).slice(2), Ka = "__reactFiber$" + ol, Gl = "__reactProps$" + ol, Ri = "__reactContainer$" + ol, od = "__reactEvents$" + ol, Km = "__reactListeners$" + ol, sd = "__reactHandles$" + ol;
  function oa(n) {
    var r = n[Ka];
    if (r)
      return r;
    for (var l = n.parentNode; l; ) {
      if (r = l[Ri] || l[Ka]) {
        if (l = r.alternate, r.child !== null || l !== null && l.child !== null)
          for (n = ts(n); n !== null; ) {
            if (l = n[Ka])
              return l;
            n = ts(n);
          }
        return r;
      }
      n = l, l = n.parentNode;
    }
    return null;
  }
  function ns(n) {
    return n = n[Ka] || n[Ri], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function Gu(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(U(33));
  }
  function Re(n) {
    return n[Gl] || null;
  }
  var sl = [], jt = -1;
  function Pe(n) {
    return { current: n };
  }
  function St(n) {
    0 > jt || (n.current = sl[jt], sl[jt] = null, jt--);
  }
  function Rt(n, r) {
    jt++, sl[jt] = n.current, n.current = r;
  }
  var Za = {}, Ne = Pe(Za), on = Pe(!1), Lr = Za;
  function sa(n, r) {
    var l = n.type.contextTypes;
    if (!l)
      return Za;
    var o = n.stateNode;
    if (o && o.__reactInternalMemoizedUnmaskedChildContext === r)
      return o.__reactInternalMemoizedMaskedChildContext;
    var c = {}, d;
    for (d in l)
      c[d] = r[d];
    return o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = c), c;
  }
  function Qt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ca() {
    St(on), St(Ne);
  }
  function cl(n, r, l) {
    if (Ne.current !== Za)
      throw Error(U(168));
    Rt(Ne, r), Rt(on, l);
  }
  function rs(n, r, l) {
    var o = n.stateNode;
    if (r = r.childContextTypes, typeof o.getChildContext != "function")
      return l;
    o = o.getChildContext();
    for (var c in o)
      if (!(c in r))
        throw Error(U(108, dt(n) || "Unknown", c));
    return R({}, l, o);
  }
  function fc(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Za, Lr = Ne.current, Rt(Ne, n), Rt(on, on.current), !0;
  }
  function wv(n, r, l) {
    var o = n.stateNode;
    if (!o)
      throw Error(U(169));
    l ? (n = rs(n, r, Lr), o.__reactInternalMemoizedMergedChildContext = n, St(on), St(Ne), Rt(Ne, n)) : St(on), Rt(on, l);
  }
  var Qr = null, Mn = !1, as = !1;
  function cd(n) {
    Qr === null ? Qr = [n] : Qr.push(n);
  }
  function fd(n) {
    Mn = !0, cd(n);
  }
  function Mr() {
    if (!as && Qr !== null) {
      as = !0;
      var n = 0, r = ht;
      try {
        var l = Qr;
        for (ht = 1; n < l.length; n++) {
          var o = l[n];
          do
            o = o(!0);
          while (o !== null);
        }
        Qr = null, Mn = !1;
      } catch (c) {
        throw Qr !== null && (Qr = Qr.slice(n + 1)), Fo(Na, Mr), c;
      } finally {
        ht = r, as = !1;
      }
    }
    return null;
  }
  var fl = [], Nr = 0, ql = null, qu = 0, zr = [], er = 0, fa = null, Vn = 1, Ti = "";
  function Wr(n, r) {
    fl[Nr++] = qu, fl[Nr++] = ql, ql = n, qu = r;
  }
  function dd(n, r, l) {
    zr[er++] = Vn, zr[er++] = Ti, zr[er++] = fa, fa = n;
    var o = Vn;
    n = Ti;
    var c = 32 - ur(o) - 1;
    o &= ~(1 << c), l += 1;
    var d = 32 - ur(r) + c;
    if (30 < d) {
      var m = c - c % 5;
      d = (o & (1 << m) - 1).toString(32), o >>= m, c -= m, Vn = 1 << 32 - ur(r) + c | l << c | o, Ti = d + n;
    } else
      Vn = 1 << d | l << c | o, Ti = n;
  }
  function dc(n) {
    n.return !== null && (Wr(n, 1), dd(n, 1, 0));
  }
  function pd(n) {
    for (; n === ql; )
      ql = fl[--Nr], fl[Nr] = null, qu = fl[--Nr], fl[Nr] = null;
    for (; n === fa; )
      fa = zr[--er], zr[er] = null, Ti = zr[--er], zr[er] = null, Vn = zr[--er], zr[er] = null;
  }
  var Gr = null, Ur = null, Vt = !1, da = null;
  function vd(n, r) {
    var l = ga(5, null, null, 0);
    l.elementType = "DELETED", l.stateNode = r, l.return = n, r = n.deletions, r === null ? (n.deletions = [l], n.flags |= 16) : r.push(l);
  }
  function xv(n, r) {
    switch (n.tag) {
      case 5:
        var l = n.type;
        return r = r.nodeType !== 1 || l.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Gr = n, Ur = ja(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Gr = n, Ur = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (l = fa !== null ? { id: Vn, overflow: Ti } : null, n.memoizedState = { dehydrated: r, treeContext: l, retryLane: 1073741824 }, l = ga(18, null, null, 0), l.stateNode = r, l.return = n, n.child = l, Gr = n, Ur = null, !0) : !1;
      default:
        return !1;
    }
  }
  function pc(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function vc(n) {
    if (Vt) {
      var r = Ur;
      if (r) {
        var l = r;
        if (!xv(n, r)) {
          if (pc(n))
            throw Error(U(418));
          r = ja(l.nextSibling);
          var o = Gr;
          r && xv(n, r) ? vd(o, l) : (n.flags = n.flags & -4097 | 2, Vt = !1, Gr = n);
        }
      } else {
        if (pc(n))
          throw Error(U(418));
        n.flags = n.flags & -4097 | 2, Vt = !1, Gr = n;
      }
    }
  }
  function bv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Gr = n;
  }
  function hc(n) {
    if (n !== Gr)
      return !1;
    if (!Vt)
      return bv(n), Vt = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !es(n.type, n.memoizedProps)), r && (r = Ur)) {
      if (pc(n))
        throw _v(), Error(U(418));
      for (; r; )
        vd(n, r), r = ja(r.nextSibling);
    }
    if (bv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(U(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var l = n.data;
            if (l === "/$") {
              if (r === 0) {
                Ur = ja(n.nextSibling);
                break e;
              }
              r--;
            } else
              l !== "$" && l !== "$!" && l !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Ur = null;
      }
    } else
      Ur = Gr ? ja(n.stateNode.nextSibling) : null;
    return !0;
  }
  function _v() {
    for (var n = Ur; n; )
      n = ja(n.nextSibling);
  }
  function Zt() {
    Ur = Gr = null, Vt = !1;
  }
  function hd(n) {
    da === null ? da = [n] : da.push(n);
  }
  var mc = rt.ReactCurrentBatchConfig;
  function qr(n, r) {
    if (n && n.defaultProps) {
      r = R({}, r), n = n.defaultProps;
      for (var l in n)
        r[l] === void 0 && (r[l] = n[l]);
      return r;
    }
    return r;
  }
  var Ja = Pe(null), yc = null, dl = null, md = null;
  function yd() {
    md = dl = yc = null;
  }
  function pl(n) {
    var r = Ja.current;
    St(Ja), n._currentValue = r;
  }
  function Nn(n, r, l) {
    for (; n !== null; ) {
      var o = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, o !== null && (o.childLanes |= r)) : o !== null && (o.childLanes & r) !== r && (o.childLanes |= r), n === l)
        break;
      n = n.return;
    }
  }
  function K(n, r) {
    yc = n, md = dl = null, n = n.dependencies, n !== null && n.firstContext !== null && ((n.lanes & r) !== 0 && (yn = !0), n.firstContext = null);
  }
  function pn(n) {
    var r = n._currentValue;
    if (md !== n)
      if (n = { context: n, memoizedValue: r, next: null }, dl === null) {
        if (yc === null)
          throw Error(U(308));
        dl = n, yc.dependencies = { lanes: 0, firstContext: n };
      } else
        dl = dl.next = n;
    return r;
  }
  var Bn = null;
  function gd(n) {
    Bn === null ? Bn = [n] : Bn.push(n);
  }
  function Dv(n, r, l, o) {
    var c = r.interleaved;
    return c === null ? (l.next = l, gd(r)) : (l.next = c.next, c.next = l), r.interleaved = l, wi(n, o);
  }
  function wi(n, r) {
    n.lanes |= r;
    var l = n.alternate;
    for (l !== null && (l.lanes |= r), l = n, n = n.return; n !== null; )
      n.childLanes |= r, l = n.alternate, l !== null && (l.childLanes |= r), l = n, n = n.return;
    return l.tag === 3 ? l.stateNode : null;
  }
  var vl = !1;
  function Sd(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Rn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function xi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function hl(n, r, l) {
    var o = n.updateQueue;
    if (o === null)
      return null;
    if (o = o.shared, (Ke & 2) !== 0) {
      var c = o.pending;
      return c === null ? r.next = r : (r.next = c.next, c.next = r), o.pending = r, wi(n, l);
    }
    return c = o.interleaved, c === null ? (r.next = r, gd(o)) : (r.next = c.next, c.next = r), o.interleaved = r, wi(n, l);
  }
  function gc(n, r, l) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (l & 4194240) !== 0)) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, qa(n, l);
    }
  }
  function Ed(n, r) {
    var l = n.updateQueue, o = n.alternate;
    if (o !== null && (o = o.updateQueue, l === o)) {
      var c = null, d = null;
      if (l = l.firstBaseUpdate, l !== null) {
        do {
          var m = { eventTime: l.eventTime, lane: l.lane, tag: l.tag, payload: l.payload, callback: l.callback, next: null };
          d === null ? c = d = m : d = d.next = m, l = l.next;
        } while (l !== null);
        d === null ? c = d = r : d = d.next = r;
      } else
        c = d = r;
      l = { baseState: o.baseState, firstBaseUpdate: c, lastBaseUpdate: d, shared: o.shared, effects: o.effects }, n.updateQueue = l;
      return;
    }
    n = l.lastBaseUpdate, n === null ? l.firstBaseUpdate = r : n.next = r, l.lastBaseUpdate = r;
  }
  function ml(n, r, l, o) {
    var c = n.updateQueue;
    vl = !1;
    var d = c.firstBaseUpdate, m = c.lastBaseUpdate, E = c.shared.pending;
    if (E !== null) {
      c.shared.pending = null;
      var T = E, z = T.next;
      T.next = null, m === null ? d = z : m.next = z, m = T;
      var $ = n.alternate;
      $ !== null && ($ = $.updateQueue, E = $.lastBaseUpdate, E !== m && (E === null ? $.firstBaseUpdate = z : E.next = z, $.lastBaseUpdate = T));
    }
    if (d !== null) {
      var I = c.baseState;
      m = 0, $ = z = T = null, E = d;
      do {
        var P = E.lane, ne = E.eventTime;
        if ((o & P) === P) {
          $ !== null && ($ = $.next = {
            eventTime: ne,
            lane: 0,
            tag: E.tag,
            payload: E.payload,
            callback: E.callback,
            next: null
          });
          e: {
            var ce = n, pe = E;
            switch (P = r, ne = l, pe.tag) {
              case 1:
                if (ce = pe.payload, typeof ce == "function") {
                  I = ce.call(ne, I, P);
                  break e;
                }
                I = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = pe.payload, P = typeof ce == "function" ? ce.call(ne, I, P) : ce, P == null)
                  break e;
                I = R({}, I, P);
                break e;
              case 2:
                vl = !0;
            }
          }
          E.callback !== null && E.lane !== 0 && (n.flags |= 64, P = c.effects, P === null ? c.effects = [E] : P.push(E));
        } else
          ne = { eventTime: ne, lane: P, tag: E.tag, payload: E.payload, callback: E.callback, next: null }, $ === null ? (z = $ = ne, T = I) : $ = $.next = ne, m |= P;
        if (E = E.next, E === null) {
          if (E = c.shared.pending, E === null)
            break;
          P = E, E = P.next, P.next = null, c.lastBaseUpdate = P, c.shared.pending = null;
        }
      } while (1);
      if ($ === null && (T = I), c.baseState = T, c.firstBaseUpdate = z, c.lastBaseUpdate = $, r = c.shared.interleaved, r !== null) {
        c = r;
        do
          m |= c.lane, c = c.next;
        while (c !== r);
      } else
        d === null && (c.shared.lanes = 0);
      ki |= m, n.lanes = m, n.memoizedState = I;
    }
  }
  function Xl(n, r, l) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var o = n[r], c = o.callback;
        if (c !== null) {
          if (o.callback = null, o = l, typeof c != "function")
            throw Error(U(191, c));
          c.call(o);
        }
      }
  }
  var kv = new Y.Component().refs;
  function Cd(n, r, l, o) {
    r = n.memoizedState, l = l(o, r), l = l == null ? r : R({}, r, l), n.memoizedState = l, n.lanes === 0 && (n.updateQueue.baseState = l);
  }
  var Sc = { isMounted: function(n) {
    return (n = n._reactInternals) ? aa(n) === n : !1;
  }, enqueueSetState: function(n, r, l) {
    n = n._reactInternals;
    var o = ar(), c = gn(n), d = xi(o, c);
    d.payload = r, l != null && (d.callback = l), r = hl(n, d, c), r !== null && (ir(r, n, c, o), gc(r, n, c));
  }, enqueueReplaceState: function(n, r, l) {
    n = n._reactInternals;
    var o = ar(), c = gn(n), d = xi(o, c);
    d.tag = 1, d.payload = r, l != null && (d.callback = l), r = hl(n, d, c), r !== null && (ir(r, n, c, o), gc(r, n, c));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var l = ar(), o = gn(n), c = xi(l, o);
    c.tag = 2, r != null && (c.callback = r), r = hl(n, c, o), r !== null && (ir(r, n, o, l), gc(r, n, o));
  } };
  function Ov(n, r, l, o, c, d, m) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(o, d, m) : r.prototype && r.prototype.isPureReactComponent ? !Wo(l, o) || !Wo(c, d) : !0;
  }
  function Lv(n, r, l) {
    var o = !1, c = Za, d = r.contextType;
    return typeof d == "object" && d !== null ? d = pn(d) : (c = Qt(r) ? Lr : Ne.current, o = r.contextTypes, d = (o = o != null) ? sa(n, c) : Za), r = new r(l, d), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = Sc, n.stateNode = r, r._reactInternals = n, o && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = c, n.__reactInternalMemoizedMaskedChildContext = d), r;
  }
  function Mv(n, r, l, o) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(l, o), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(l, o), r.state !== n && Sc.enqueueReplaceState(r, r.state, null);
  }
  function Ec(n, r, l, o) {
    var c = n.stateNode;
    c.props = l, c.state = n.memoizedState, c.refs = kv, Sd(n);
    var d = r.contextType;
    typeof d == "object" && d !== null ? c.context = pn(d) : (d = Qt(r) ? Lr : Ne.current, c.context = sa(n, d)), c.state = n.memoizedState, d = r.getDerivedStateFromProps, typeof d == "function" && (Cd(n, r, d, l), c.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof c.getSnapshotBeforeUpdate == "function" || typeof c.UNSAFE_componentWillMount != "function" && typeof c.componentWillMount != "function" || (r = c.state, typeof c.componentWillMount == "function" && c.componentWillMount(), typeof c.UNSAFE_componentWillMount == "function" && c.UNSAFE_componentWillMount(), r !== c.state && Sc.enqueueReplaceState(c, c.state, null), ml(n, l, c, o), c.state = n.memoizedState), typeof c.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Xu(n, r, l) {
    if (n = l.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (l._owner) {
        if (l = l._owner, l) {
          if (l.tag !== 1)
            throw Error(U(309));
          var o = l.stateNode;
        }
        if (!o)
          throw Error(U(147, n));
        var c = o, d = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === d ? r.ref : (r = function(m) {
          var E = c.refs;
          E === kv && (E = c.refs = {}), m === null ? delete E[d] : E[d] = m;
        }, r._stringRef = d, r);
      }
      if (typeof n != "string")
        throw Error(U(284));
      if (!l._owner)
        throw Error(U(290, n));
    }
    return n;
  }
  function Cc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(U(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function Nv(n) {
    var r = n._init;
    return r(n._payload);
  }
  function zv(n) {
    function r(_, x) {
      if (n) {
        var O = _.deletions;
        O === null ? (_.deletions = [x], _.flags |= 16) : O.push(x);
      }
    }
    function l(_, x) {
      if (!n)
        return null;
      for (; x !== null; )
        r(_, x), x = x.sibling;
      return null;
    }
    function o(_, x) {
      for (_ = /* @__PURE__ */ new Map(); x !== null; )
        x.key !== null ? _.set(x.key, x) : _.set(x.index, x), x = x.sibling;
      return _;
    }
    function c(_, x) {
      return _ = wl(_, x), _.index = 0, _.sibling = null, _;
    }
    function d(_, x, O) {
      return _.index = O, n ? (O = _.alternate, O !== null ? (O = O.index, O < x ? (_.flags |= 2, x) : O) : (_.flags |= 2, x)) : (_.flags |= 1048576, x);
    }
    function m(_) {
      return n && _.alternate === null && (_.flags |= 2), _;
    }
    function E(_, x, O, G) {
      return x === null || x.tag !== 6 ? (x = Ts(O, _.mode, G), x.return = _, x) : (x = c(x, O), x.return = _, x);
    }
    function T(_, x, O, G) {
      var he = O.type;
      return he === Ue ? $(_, x, O.props.children, G, O.key) : x !== null && (x.elementType === he || typeof he == "object" && he !== null && he.$$typeof === gt && Nv(he) === x.type) ? (G = c(x, O.props), G.ref = Xu(_, x, O), G.return = _, G) : (G = Jc(O.type, O.key, O.props, null, _.mode, G), G.ref = Xu(_, x, O), G.return = _, G);
    }
    function z(_, x, O, G) {
      return x === null || x.tag !== 4 || x.stateNode.containerInfo !== O.containerInfo || x.stateNode.implementation !== O.implementation ? (x = hu(O, _.mode, G), x.return = _, x) : (x = c(x, O.children || []), x.return = _, x);
    }
    function $(_, x, O, G, he) {
      return x === null || x.tag !== 7 ? (x = vu(O, _.mode, G, he), x.return = _, x) : (x = c(x, O), x.return = _, x);
    }
    function I(_, x, O) {
      if (typeof x == "string" && x !== "" || typeof x == "number")
        return x = Ts("" + x, _.mode, O), x.return = _, x;
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case Te:
            return O = Jc(x.type, x.key, x.props, null, _.mode, O), O.ref = Xu(_, null, x), O.return = _, O;
          case qe:
            return x = hu(x, _.mode, O), x.return = _, x;
          case gt:
            var G = x._init;
            return I(_, G(x._payload), O);
        }
        if (Jn(x) || Ee(x))
          return x = vu(x, _.mode, O, null), x.return = _, x;
        Cc(_, x);
      }
      return null;
    }
    function P(_, x, O, G) {
      var he = x !== null ? x.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return he !== null ? null : E(_, x, "" + O, G);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Te:
            return O.key === he ? T(_, x, O, G) : null;
          case qe:
            return O.key === he ? z(_, x, O, G) : null;
          case gt:
            return he = O._init, P(
              _,
              x,
              he(O._payload),
              G
            );
        }
        if (Jn(O) || Ee(O))
          return he !== null ? null : $(_, x, O, G, null);
        Cc(_, O);
      }
      return null;
    }
    function ne(_, x, O, G, he) {
      if (typeof G == "string" && G !== "" || typeof G == "number")
        return _ = _.get(O) || null, E(x, _, "" + G, he);
      if (typeof G == "object" && G !== null) {
        switch (G.$$typeof) {
          case Te:
            return _ = _.get(G.key === null ? O : G.key) || null, T(x, _, G, he);
          case qe:
            return _ = _.get(G.key === null ? O : G.key) || null, z(x, _, G, he);
          case gt:
            var fe = G._init;
            return ne(_, x, O, fe(G._payload), he);
        }
        if (Jn(G) || Ee(G))
          return _ = _.get(O) || null, $(x, _, G, he, null);
        Cc(x, G);
      }
      return null;
    }
    function ce(_, x, O, G) {
      for (var he = null, fe = null, Se = x, ze = x = 0, An = null; Se !== null && ze < O.length; ze++) {
        Se.index > ze ? (An = Se, Se = null) : An = Se.sibling;
        var pt = P(_, Se, O[ze], G);
        if (pt === null) {
          Se === null && (Se = An);
          break;
        }
        n && Se && pt.alternate === null && r(_, Se), x = d(pt, x, ze), fe === null ? he = pt : fe.sibling = pt, fe = pt, Se = An;
      }
      if (ze === O.length)
        return l(_, Se), Vt && Wr(_, ze), he;
      if (Se === null) {
        for (; ze < O.length; ze++)
          Se = I(_, O[ze], G), Se !== null && (x = d(Se, x, ze), fe === null ? he = Se : fe.sibling = Se, fe = Se);
        return Vt && Wr(_, ze), he;
      }
      for (Se = o(_, Se); ze < O.length; ze++)
        An = ne(Se, _, ze, O[ze], G), An !== null && (n && An.alternate !== null && Se.delete(An.key === null ? ze : An.key), x = d(An, x, ze), fe === null ? he = An : fe.sibling = An, fe = An);
      return n && Se.forEach(function(xl) {
        return r(_, xl);
      }), Vt && Wr(_, ze), he;
    }
    function pe(_, x, O, G) {
      var he = Ee(O);
      if (typeof he != "function")
        throw Error(U(150));
      if (O = he.call(O), O == null)
        throw Error(U(151));
      for (var fe = he = null, Se = x, ze = x = 0, An = null, pt = O.next(); Se !== null && !pt.done; ze++, pt = O.next()) {
        Se.index > ze ? (An = Se, Se = null) : An = Se.sibling;
        var xl = P(_, Se, pt.value, G);
        if (xl === null) {
          Se === null && (Se = An);
          break;
        }
        n && Se && xl.alternate === null && r(_, Se), x = d(xl, x, ze), fe === null ? he = xl : fe.sibling = xl, fe = xl, Se = An;
      }
      if (pt.done)
        return l(
          _,
          Se
        ), Vt && Wr(_, ze), he;
      if (Se === null) {
        for (; !pt.done; ze++, pt = O.next())
          pt = I(_, pt.value, G), pt !== null && (x = d(pt, x, ze), fe === null ? he = pt : fe.sibling = pt, fe = pt);
        return Vt && Wr(_, ze), he;
      }
      for (Se = o(_, Se); !pt.done; ze++, pt = O.next())
        pt = ne(Se, _, ze, pt.value, G), pt !== null && (n && pt.alternate !== null && Se.delete(pt.key === null ? ze : pt.key), x = d(pt, x, ze), fe === null ? he = pt : fe.sibling = pt, fe = pt);
      return n && Se.forEach(function(yy) {
        return r(_, yy);
      }), Vt && Wr(_, ze), he;
    }
    function vn(_, x, O, G) {
      if (typeof O == "object" && O !== null && O.type === Ue && O.key === null && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Te:
            e: {
              for (var he = O.key, fe = x; fe !== null; ) {
                if (fe.key === he) {
                  if (he = O.type, he === Ue) {
                    if (fe.tag === 7) {
                      l(_, fe.sibling), x = c(fe, O.props.children), x.return = _, _ = x;
                      break e;
                    }
                  } else if (fe.elementType === he || typeof he == "object" && he !== null && he.$$typeof === gt && Nv(he) === fe.type) {
                    l(_, fe.sibling), x = c(fe, O.props), x.ref = Xu(_, fe, O), x.return = _, _ = x;
                    break e;
                  }
                  l(_, fe);
                  break;
                } else
                  r(_, fe);
                fe = fe.sibling;
              }
              O.type === Ue ? (x = vu(O.props.children, _.mode, G, O.key), x.return = _, _ = x) : (G = Jc(O.type, O.key, O.props, null, _.mode, G), G.ref = Xu(_, x, O), G.return = _, _ = G);
            }
            return m(_);
          case qe:
            e: {
              for (fe = O.key; x !== null; ) {
                if (x.key === fe)
                  if (x.tag === 4 && x.stateNode.containerInfo === O.containerInfo && x.stateNode.implementation === O.implementation) {
                    l(_, x.sibling), x = c(x, O.children || []), x.return = _, _ = x;
                    break e;
                  } else {
                    l(_, x);
                    break;
                  }
                else
                  r(_, x);
                x = x.sibling;
              }
              x = hu(O, _.mode, G), x.return = _, _ = x;
            }
            return m(_);
          case gt:
            return fe = O._init, vn(_, x, fe(O._payload), G);
        }
        if (Jn(O))
          return ce(_, x, O, G);
        if (Ee(O))
          return pe(_, x, O, G);
        Cc(_, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" ? (O = "" + O, x !== null && x.tag === 6 ? (l(_, x.sibling), x = c(x, O), x.return = _, _ = x) : (l(_, x), x = Ts(O, _.mode, G), x.return = _, _ = x), m(_)) : l(_, x);
    }
    return vn;
  }
  var Ku = zv(!0), Uv = zv(!1), is = {}, Va = Pe(is), ls = Pe(is), Zu = Pe(is);
  function Kl(n) {
    if (n === is)
      throw Error(U(174));
    return n;
  }
  function Rd(n, r) {
    switch (Rt(Zu, r), Rt(ls, n), Rt(Va, is), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : Fn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = Fn(r, n);
    }
    St(Va), Rt(Va, r);
  }
  function yl() {
    St(Va), St(ls), St(Zu);
  }
  function be(n) {
    Kl(Zu.current);
    var r = Kl(Va.current), l = Fn(r, n.type);
    r !== l && (Rt(ls, n), Rt(Va, l));
  }
  function Ge(n) {
    ls.current === n && (St(Va), St(ls));
  }
  var De = Pe(0);
  function Jt(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var l = r.memoizedState;
        if (l !== null && (l = l.dehydrated, l === null || l.data === "$?" || l.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if ((r.flags & 128) !== 0)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var pa = [];
  function Rc() {
    for (var n = 0; n < pa.length; n++)
      pa[n]._workInProgressVersionPrimary = null;
    pa.length = 0;
  }
  var Tc = rt.ReactCurrentDispatcher, Td = rt.ReactCurrentBatchConfig, Zl = 0, Bt = null, j = null, it = null, ke = !1, ei = !1, Xr = 0, Jl = 0;
  function Pt() {
    throw Error(U(321));
  }
  function eu(n, r) {
    if (r === null)
      return !1;
    for (var l = 0; l < r.length && l < n.length; l++)
      if (!ua(n[l], r[l]))
        return !1;
    return !0;
  }
  function gl(n, r, l, o, c, d) {
    if (Zl = d, Bt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, Tc.current = n === null || n.memoizedState === null ? Jm : ey, n = l(o, c), ei) {
      d = 0;
      do {
        if (ei = !1, Xr = 0, 25 <= d)
          throw Error(U(301));
        d += 1, it = j = null, r.updateQueue = null, Tc.current = xd, n = l(o, c);
      } while (ei);
    }
    if (Tc.current = jc, r = j !== null && j.next !== null, Zl = 0, it = j = Bt = null, ke = !1, r)
      throw Error(U(300));
    return n;
  }
  function tu() {
    var n = Xr !== 0;
    return Xr = 0, n;
  }
  function va() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return it === null ? Bt.memoizedState = it = n : it = it.next = n, it;
  }
  function Ar() {
    if (j === null) {
      var n = Bt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = j.next;
    var r = it === null ? Bt.memoizedState : it.next;
    if (r !== null)
      it = r, j = n;
    else {
      if (n === null)
        throw Error(U(310));
      j = n, n = { memoizedState: j.memoizedState, baseState: j.baseState, baseQueue: j.baseQueue, queue: j.queue, next: null }, it === null ? Bt.memoizedState = it = n : it = it.next = n;
    }
    return it;
  }
  function nu(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function us(n) {
    var r = Ar(), l = r.queue;
    if (l === null)
      throw Error(U(311));
    l.lastRenderedReducer = n;
    var o = j, c = o.baseQueue, d = l.pending;
    if (d !== null) {
      if (c !== null) {
        var m = c.next;
        c.next = d.next, d.next = m;
      }
      o.baseQueue = c = d, l.pending = null;
    }
    if (c !== null) {
      d = c.next, o = o.baseState;
      var E = m = null, T = null, z = d;
      do {
        var $ = z.lane;
        if ((Zl & $) === $)
          T !== null && (T = T.next = { lane: 0, action: z.action, hasEagerState: z.hasEagerState, eagerState: z.eagerState, next: null }), o = z.hasEagerState ? z.eagerState : n(o, z.action);
        else {
          var I = {
            lane: $,
            action: z.action,
            hasEagerState: z.hasEagerState,
            eagerState: z.eagerState,
            next: null
          };
          T === null ? (E = T = I, m = o) : T = T.next = I, Bt.lanes |= $, ki |= $;
        }
        z = z.next;
      } while (z !== null && z !== d);
      T === null ? m = o : T.next = E, ua(o, r.memoizedState) || (yn = !0), r.memoizedState = o, r.baseState = m, r.baseQueue = T, l.lastRenderedState = o;
    }
    if (n = l.interleaved, n !== null) {
      c = n;
      do
        d = c.lane, Bt.lanes |= d, ki |= d, c = c.next;
      while (c !== n);
    } else
      c === null && (l.lanes = 0);
    return [r.memoizedState, l.dispatch];
  }
  function os(n) {
    var r = Ar(), l = r.queue;
    if (l === null)
      throw Error(U(311));
    l.lastRenderedReducer = n;
    var o = l.dispatch, c = l.pending, d = r.memoizedState;
    if (c !== null) {
      l.pending = null;
      var m = c = c.next;
      do
        d = n(d, m.action), m = m.next;
      while (m !== c);
      ua(d, r.memoizedState) || (yn = !0), r.memoizedState = d, r.baseQueue === null && (r.baseState = d), l.lastRenderedState = d;
    }
    return [d, o];
  }
  function wc() {
  }
  function xc(n, r) {
    var l = Bt, o = Ar(), c = r(), d = !ua(o.memoizedState, c);
    if (d && (o.memoizedState = c, yn = !0), o = o.queue, ss(Dc.bind(null, l, o, n), [n]), o.getSnapshot !== r || d || it !== null && it.memoizedState.tag & 1) {
      if (l.flags |= 2048, ru(9, _c.bind(null, l, o, c, r), void 0, null), en === null)
        throw Error(U(349));
      (Zl & 30) !== 0 || bc(l, r, c);
    }
    return c;
  }
  function bc(n, r, l) {
    n.flags |= 16384, n = { getSnapshot: r, value: l }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.stores = [n]) : (l = r.stores, l === null ? r.stores = [n] : l.push(n));
  }
  function _c(n, r, l, o) {
    r.value = l, r.getSnapshot = o, kc(r) && Oc(n);
  }
  function Dc(n, r, l) {
    return l(function() {
      kc(r) && Oc(n);
    });
  }
  function kc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var l = r();
      return !ua(n, l);
    } catch {
      return !0;
    }
  }
  function Oc(n) {
    var r = wi(n, 1);
    r !== null && ir(r, n, 1, -1);
  }
  function Lc(n) {
    var r = va();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: nu, lastRenderedState: n }, r.queue = n, n = n.dispatch = Fc.bind(null, Bt, n), [r.memoizedState, n];
  }
  function ru(n, r, l, o) {
    return n = { tag: n, create: r, destroy: l, deps: o, next: null }, r = Bt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Bt.updateQueue = r, r.lastEffect = n.next = n) : (l = r.lastEffect, l === null ? r.lastEffect = n.next = n : (o = l.next, l.next = n, n.next = o, r.lastEffect = n)), n;
  }
  function Mc() {
    return Ar().memoizedState;
  }
  function au(n, r, l, o) {
    var c = va();
    Bt.flags |= n, c.memoizedState = ru(1 | r, l, void 0, o === void 0 ? null : o);
  }
  function bi(n, r, l, o) {
    var c = Ar();
    o = o === void 0 ? null : o;
    var d = void 0;
    if (j !== null) {
      var m = j.memoizedState;
      if (d = m.destroy, o !== null && eu(o, m.deps)) {
        c.memoizedState = ru(r, l, d, o);
        return;
      }
    }
    Bt.flags |= n, c.memoizedState = ru(1 | r, l, d, o);
  }
  function Nc(n, r) {
    return au(8390656, 8, n, r);
  }
  function ss(n, r) {
    return bi(2048, 8, n, r);
  }
  function zc(n, r) {
    return bi(4, 2, n, r);
  }
  function Uc(n, r) {
    return bi(4, 4, n, r);
  }
  function wd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Ju(n, r, l) {
    return l = l != null ? l.concat([n]) : null, bi(4, 4, wd.bind(null, r, n), l);
  }
  function Ac() {
  }
  function eo(n, r) {
    var l = Ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && eu(r, o[1]) ? o[0] : (l.memoizedState = [n, r], n);
  }
  function Sl(n, r) {
    var l = Ar();
    r = r === void 0 ? null : r;
    var o = l.memoizedState;
    return o !== null && r !== null && eu(r, o[1]) ? o[0] : (n = n(), l.memoizedState = [n, r], n);
  }
  function Hr(n, r, l) {
    return (Zl & 21) === 0 ? (n.baseState && (n.baseState = !1, yn = !0), n.memoizedState = l) : (ua(l, r) || (l = Nu(), Bt.lanes |= l, ki |= l, n.baseState = !0), r);
  }
  function Zm(n, r) {
    var l = ht;
    ht = l !== 0 && 4 > l ? l : 4, n(!0);
    var o = Td.transition;
    Td.transition = {};
    try {
      n(!1), r();
    } finally {
      ht = l, Td.transition = o;
    }
  }
  function Mt() {
    return Ar().memoizedState;
  }
  function Hc(n, r, l) {
    var o = gn(n);
    if (l = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null }, to(n))
      cs(r, l);
    else if (l = Dv(n, r, l, o), l !== null) {
      var c = ar();
      ir(l, n, o, c), Av(l, r, o);
    }
  }
  function Fc(n, r, l) {
    var o = gn(n), c = { lane: o, action: l, hasEagerState: !1, eagerState: null, next: null };
    if (to(n))
      cs(r, c);
    else {
      var d = n.alternate;
      if (n.lanes === 0 && (d === null || d.lanes === 0) && (d = r.lastRenderedReducer, d !== null))
        try {
          var m = r.lastRenderedState, E = d(m, l);
          if (c.hasEagerState = !0, c.eagerState = E, ua(E, m)) {
            var T = r.interleaved;
            T === null ? (c.next = c, gd(r)) : (c.next = T.next, T.next = c), r.interleaved = c;
            return;
          }
        } catch {
        } finally {
        }
      l = Dv(n, r, c, o), l !== null && (c = ar(), ir(l, n, o, c), Av(l, r, o));
    }
  }
  function to(n) {
    var r = n.alternate;
    return n === Bt || r !== null && r === Bt;
  }
  function cs(n, r) {
    ei = ke = !0;
    var l = n.pending;
    l === null ? r.next = r : (r.next = l.next, l.next = r), n.pending = r;
  }
  function Av(n, r, l) {
    if ((l & 4194240) !== 0) {
      var o = r.lanes;
      o &= n.pendingLanes, l |= o, r.lanes = l, qa(n, l);
    }
  }
  var jc = { readContext: pn, useCallback: Pt, useContext: Pt, useEffect: Pt, useImperativeHandle: Pt, useInsertionEffect: Pt, useLayoutEffect: Pt, useMemo: Pt, useReducer: Pt, useRef: Pt, useState: Pt, useDebugValue: Pt, useDeferredValue: Pt, useTransition: Pt, useMutableSource: Pt, useSyncExternalStore: Pt, useId: Pt, unstable_isNewReconciler: !1 }, Jm = { readContext: pn, useCallback: function(n, r) {
    return va().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pn, useEffect: Nc, useImperativeHandle: function(n, r, l) {
    return l = l != null ? l.concat([n]) : null, au(
      4194308,
      4,
      wd.bind(null, r, n),
      l
    );
  }, useLayoutEffect: function(n, r) {
    return au(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return au(4, 2, n, r);
  }, useMemo: function(n, r) {
    var l = va();
    return r = r === void 0 ? null : r, n = n(), l.memoizedState = [n, r], n;
  }, useReducer: function(n, r, l) {
    var o = va();
    return r = l !== void 0 ? l(r) : r, o.memoizedState = o.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, o.queue = n, n = n.dispatch = Hc.bind(null, Bt, n), [o.memoizedState, n];
  }, useRef: function(n) {
    var r = va();
    return n = { current: n }, r.memoizedState = n;
  }, useState: Lc, useDebugValue: Ac, useDeferredValue: function(n) {
    return va().memoizedState = n;
  }, useTransition: function() {
    var n = Lc(!1), r = n[0];
    return n = Zm.bind(null, n[1]), va().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, l) {
    var o = Bt, c = va();
    if (Vt) {
      if (l === void 0)
        throw Error(U(407));
      l = l();
    } else {
      if (l = r(), en === null)
        throw Error(U(349));
      (Zl & 30) !== 0 || bc(o, r, l);
    }
    c.memoizedState = l;
    var d = { value: l, getSnapshot: r };
    return c.queue = d, Nc(Dc.bind(
      null,
      o,
      d,
      n
    ), [n]), o.flags |= 2048, ru(9, _c.bind(null, o, d, l, r), void 0, null), l;
  }, useId: function() {
    var n = va(), r = en.identifierPrefix;
    if (Vt) {
      var l = Ti, o = Vn;
      l = (o & ~(1 << 32 - ur(o) - 1)).toString(32) + l, r = ":" + r + "R" + l, l = Xr++, 0 < l && (r += "H" + l.toString(32)), r += ":";
    } else
      l = Jl++, r = ":" + r + "r" + l.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, ey = {
    readContext: pn,
    useCallback: eo,
    useContext: pn,
    useEffect: ss,
    useImperativeHandle: Ju,
    useInsertionEffect: zc,
    useLayoutEffect: Uc,
    useMemo: Sl,
    useReducer: us,
    useRef: Mc,
    useState: function() {
      return us(nu);
    },
    useDebugValue: Ac,
    useDeferredValue: function(n) {
      var r = Ar();
      return Hr(r, j.memoizedState, n);
    },
    useTransition: function() {
      var n = us(nu)[0], r = Ar().memoizedState;
      return [n, r];
    },
    useMutableSource: wc,
    useSyncExternalStore: xc,
    useId: Mt,
    unstable_isNewReconciler: !1
  }, xd = { readContext: pn, useCallback: eo, useContext: pn, useEffect: ss, useImperativeHandle: Ju, useInsertionEffect: zc, useLayoutEffect: Uc, useMemo: Sl, useReducer: os, useRef: Mc, useState: function() {
    return os(nu);
  }, useDebugValue: Ac, useDeferredValue: function(n) {
    var r = Ar();
    return j === null ? r.memoizedState = n : Hr(r, j.memoizedState, n);
  }, useTransition: function() {
    var n = os(nu)[0], r = Ar().memoizedState;
    return [n, r];
  }, useMutableSource: wc, useSyncExternalStore: xc, useId: Mt, unstable_isNewReconciler: !1 };
  function no(n, r) {
    try {
      var l = "", o = r;
      do
        l += ft(o), o = o.return;
      while (o);
      var c = l;
    } catch (d) {
      c = `
Error generating stack: ` + d.message + `
` + d.stack;
    }
    return { value: n, source: r, stack: c, digest: null };
  }
  function fs(n, r, l) {
    return { value: n, source: null, stack: l != null ? l : null, digest: r != null ? r : null };
  }
  function Vc(n, r) {
    try {
      console.error(r.value);
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  var ty = typeof WeakMap == "function" ? WeakMap : Map;
  function Hv(n, r, l) {
    l = xi(-1, l), l.tag = 3, l.payload = { element: null };
    var o = r.value;
    return l.callback = function() {
      Wc || (Wc = !0, su = o), Vc(n, r);
    }, l;
  }
  function ds(n, r, l) {
    l = xi(-1, l), l.tag = 3;
    var o = n.type.getDerivedStateFromError;
    if (typeof o == "function") {
      var c = r.value;
      l.payload = function() {
        return o(c);
      }, l.callback = function() {
        Vc(n, r);
      };
    }
    var d = n.stateNode;
    return d !== null && typeof d.componentDidCatch == "function" && (l.callback = function() {
      Vc(n, r), typeof o != "function" && (ri === null ? ri = /* @__PURE__ */ new Set([this]) : ri.add(this));
      var m = r.stack;
      this.componentDidCatch(r.value, { componentStack: m !== null ? m : "" });
    }), l;
  }
  function Fv(n, r, l) {
    var o = n.pingCache;
    if (o === null) {
      o = n.pingCache = new ty();
      var c = /* @__PURE__ */ new Set();
      o.set(r, c);
    } else
      c = o.get(r), c === void 0 && (c = /* @__PURE__ */ new Set(), o.set(r, c));
    c.has(l) || (c.add(l), n = oy.bind(null, n, r, l), r.then(n, n));
  }
  function bd(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function _d(n, r, l, o, c) {
    return (n.mode & 1) === 0 ? (n === r ? n.flags |= 65536 : (n.flags |= 128, l.flags |= 131072, l.flags &= -52805, l.tag === 1 && (l.alternate === null ? l.tag = 17 : (r = xi(-1, 1), r.tag = 2, hl(l, r, 1))), l.lanes |= 1), n) : (n.flags |= 65536, n.lanes = c, n);
  }
  var ny = rt.ReactCurrentOwner, yn = !1;
  function Tn(n, r, l, o) {
    r.child = n === null ? Uv(r, null, l, o) : Ku(r, n.child, l, o);
  }
  function El(n, r, l, o, c) {
    l = l.render;
    var d = r.ref;
    return K(r, c), o = gl(n, r, l, o, d, c), l = tu(), n !== null && !yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pn(n, r, c)) : (Vt && l && dc(r), r.flags |= 1, Tn(n, r, o, c), r.child);
  }
  function Bc(n, r, l, o, c) {
    if (n === null) {
      var d = l.type;
      return typeof d == "function" && !Qd(d) && d.defaultProps === void 0 && l.compare === null && l.defaultProps === void 0 ? (r.tag = 15, r.type = d, Fr(n, r, d, o, c)) : (n = Jc(l.type, null, o, r, r.mode, c), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (d = n.child, (n.lanes & c) === 0) {
      var m = d.memoizedProps;
      if (l = l.compare, l = l !== null ? l : Wo, l(m, o) && n.ref === r.ref)
        return Pn(n, r, c);
    }
    return r.flags |= 1, n = wl(d, o), n.ref = r.ref, n.return = r, r.child = n;
  }
  function Fr(n, r, l, o, c) {
    if (n !== null) {
      var d = n.memoizedProps;
      if (Wo(d, o) && n.ref === r.ref)
        if (yn = !1, r.pendingProps = o = d, (n.lanes & c) !== 0)
          (n.flags & 131072) !== 0 && (yn = !0);
        else
          return r.lanes = n.lanes, Pn(n, r, c);
    }
    return ro(n, r, l, o, c);
  }
  function iu(n, r, l) {
    var o = r.pendingProps, c = o.children, d = n !== null ? n.memoizedState : null;
    if (o.mode === "hidden")
      if ((r.mode & 1) === 0)
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Rt(so, Kr), Kr |= l;
      else {
        if ((l & 1073741824) === 0)
          return n = d !== null ? d.baseLanes | l : l, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Rt(so, Kr), Kr |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, o = d !== null ? d.baseLanes : l, Rt(so, Kr), Kr |= o;
      }
    else
      d !== null ? (o = d.baseLanes | l, r.memoizedState = null) : o = l, Rt(so, Kr), Kr |= o;
    return Tn(n, r, c, l), r.child;
  }
  function $e(n, r) {
    var l = r.ref;
    (n === null && l !== null || n !== null && n.ref !== l) && (r.flags |= 512, r.flags |= 2097152);
  }
  function ro(n, r, l, o, c) {
    var d = Qt(l) ? Lr : Ne.current;
    return d = sa(r, d), K(r, c), l = gl(n, r, l, o, d, c), o = tu(), n !== null && !yn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~c, Pn(n, r, c)) : (Vt && o && dc(r), r.flags |= 1, Tn(n, r, l, c), r.child);
  }
  function Dd(n, r, l, o, c) {
    if (Qt(l)) {
      var d = !0;
      fc(r);
    } else
      d = !1;
    if (K(r, c), r.stateNode === null)
      tr(n, r), Lv(r, l, o), Ec(r, l, o, c), o = !0;
    else if (n === null) {
      var m = r.stateNode, E = r.memoizedProps;
      m.props = E;
      var T = m.context, z = l.contextType;
      typeof z == "object" && z !== null ? z = pn(z) : (z = Qt(l) ? Lr : Ne.current, z = sa(r, z));
      var $ = l.getDerivedStateFromProps, I = typeof $ == "function" || typeof m.getSnapshotBeforeUpdate == "function";
      I || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== o || T !== z) && Mv(r, m, o, z), vl = !1;
      var P = r.memoizedState;
      m.state = P, ml(r, o, m, c), T = r.memoizedState, E !== o || P !== T || on.current || vl ? (typeof $ == "function" && (Cd(r, l, $, o), T = r.memoizedState), (E = vl || Ov(r, l, E, o, P, T, z)) ? (I || typeof m.UNSAFE_componentWillMount != "function" && typeof m.componentWillMount != "function" || (typeof m.componentWillMount == "function" && m.componentWillMount(), typeof m.UNSAFE_componentWillMount == "function" && m.UNSAFE_componentWillMount()), typeof m.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = o, r.memoizedState = T), m.props = o, m.state = T, m.context = z, o = E) : (typeof m.componentDidMount == "function" && (r.flags |= 4194308), o = !1);
    } else {
      m = r.stateNode, Rn(n, r), E = r.memoizedProps, z = r.type === r.elementType ? E : qr(r.type, E), m.props = z, I = r.pendingProps, P = m.context, T = l.contextType, typeof T == "object" && T !== null ? T = pn(T) : (T = Qt(l) ? Lr : Ne.current, T = sa(r, T));
      var ne = l.getDerivedStateFromProps;
      ($ = typeof ne == "function" || typeof m.getSnapshotBeforeUpdate == "function") || typeof m.UNSAFE_componentWillReceiveProps != "function" && typeof m.componentWillReceiveProps != "function" || (E !== I || P !== T) && Mv(r, m, o, T), vl = !1, P = r.memoizedState, m.state = P, ml(r, o, m, c);
      var ce = r.memoizedState;
      E !== I || P !== ce || on.current || vl ? (typeof ne == "function" && (Cd(r, l, ne, o), ce = r.memoizedState), (z = vl || Ov(r, l, z, o, P, ce, T) || !1) ? ($ || typeof m.UNSAFE_componentWillUpdate != "function" && typeof m.componentWillUpdate != "function" || (typeof m.componentWillUpdate == "function" && m.componentWillUpdate(o, ce, T), typeof m.UNSAFE_componentWillUpdate == "function" && m.UNSAFE_componentWillUpdate(o, ce, T)), typeof m.componentDidUpdate == "function" && (r.flags |= 4), typeof m.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && P === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && P === n.memoizedState || (r.flags |= 1024), r.memoizedProps = o, r.memoizedState = ce), m.props = o, m.state = ce, m.context = T, o = z) : (typeof m.componentDidUpdate != "function" || E === n.memoizedProps && P === n.memoizedState || (r.flags |= 4), typeof m.getSnapshotBeforeUpdate != "function" || E === n.memoizedProps && P === n.memoizedState || (r.flags |= 1024), o = !1);
    }
    return jv(n, r, l, o, d, c);
  }
  function jv(n, r, l, o, c, d) {
    $e(n, r);
    var m = (r.flags & 128) !== 0;
    if (!o && !m)
      return c && wv(r, l, !1), Pn(n, r, d);
    o = r.stateNode, ny.current = r;
    var E = m && typeof l.getDerivedStateFromError != "function" ? null : o.render();
    return r.flags |= 1, n !== null && m ? (r.child = Ku(r, n.child, null, d), r.child = Ku(r, null, E, d)) : Tn(n, r, E, d), r.memoizedState = o.state, c && wv(r, l, !0), r.child;
  }
  function Vv(n) {
    var r = n.stateNode;
    r.pendingContext ? cl(n, r.pendingContext, r.pendingContext !== r.context) : r.context && cl(n, r.context, !1), Rd(n, r.containerInfo);
  }
  function Pc(n, r, l, o, c) {
    return Zt(), hd(c), r.flags |= 256, Tn(n, r, l, o), r.child;
  }
  var lu = { dehydrated: null, treeContext: null, retryLane: 0 };
  function kd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Od(n, r, l) {
    var o = r.pendingProps, c = De.current, d = !1, m = (r.flags & 128) !== 0, E;
    if ((E = m) || (E = n !== null && n.memoizedState === null ? !1 : (c & 2) !== 0), E ? (d = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (c |= 1), Rt(De, c & 1), n === null)
      return vc(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? ((r.mode & 1) === 0 ? r.lanes = 1 : n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824, null) : (m = o.children, n = o.fallback, d ? (o = r.mode, d = r.child, m = { mode: "hidden", children: m }, (o & 1) === 0 && d !== null ? (d.childLanes = 0, d.pendingProps = m) : d = Rs(m, o, 0, null), n = vu(n, o, l, null), d.return = r, n.return = r, d.sibling = n, r.child = d, r.child.memoizedState = kd(l), r.memoizedState = lu, n) : Ld(r, m));
    if (c = n.memoizedState, c !== null && (E = c.dehydrated, E !== null))
      return ry(n, r, m, o, E, c, l);
    if (d) {
      d = o.fallback, m = r.mode, c = n.child, E = c.sibling;
      var T = { mode: "hidden", children: o.children };
      return (m & 1) === 0 && r.child !== c ? (o = r.child, o.childLanes = 0, o.pendingProps = T, r.deletions = null) : (o = wl(c, T), o.subtreeFlags = c.subtreeFlags & 14680064), E !== null ? d = wl(E, d) : (d = vu(d, m, l, null), d.flags |= 2), d.return = r, o.return = r, o.sibling = d, r.child = o, o = d, d = r.child, m = n.child.memoizedState, m = m === null ? kd(l) : { baseLanes: m.baseLanes | l, cachePool: null, transitions: m.transitions }, d.memoizedState = m, d.childLanes = n.childLanes & ~l, r.memoizedState = lu, o;
    }
    return d = n.child, n = d.sibling, o = wl(d, { mode: "visible", children: o.children }), (r.mode & 1) === 0 && (o.lanes = l), o.return = r, o.sibling = null, n !== null && (l = r.deletions, l === null ? (r.deletions = [n], r.flags |= 16) : l.push(n)), r.child = o, r.memoizedState = null, o;
  }
  function Ld(n, r) {
    return r = Rs({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function ao(n, r, l, o) {
    return o !== null && hd(o), Ku(r, n.child, null, l), n = Ld(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function ry(n, r, l, o, c, d, m) {
    if (l)
      return r.flags & 256 ? (r.flags &= -257, o = fs(Error(U(422))), ao(n, r, m, o)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (d = o.fallback, c = r.mode, o = Rs({ mode: "visible", children: o.children }, c, 0, null), d = vu(d, c, m, null), d.flags |= 2, o.return = r, d.return = r, o.sibling = d, r.child = o, (r.mode & 1) !== 0 && Ku(r, n.child, null, m), r.child.memoizedState = kd(m), r.memoizedState = lu, d);
    if ((r.mode & 1) === 0)
      return ao(n, r, m, null);
    if (c.data === "$!") {
      if (o = c.nextSibling && c.nextSibling.dataset, o)
        var E = o.dgst;
      return o = E, d = Error(U(419)), o = fs(d, o, void 0), ao(n, r, m, o);
    }
    if (E = (m & n.childLanes) !== 0, yn || E) {
      if (o = en, o !== null) {
        switch (m & -m) {
          case 4:
            c = 2;
            break;
          case 16:
            c = 8;
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
            c = 32;
            break;
          case 536870912:
            c = 268435456;
            break;
          default:
            c = 0;
        }
        c = (c & (o.suspendedLanes | m)) !== 0 ? 0 : c, c !== 0 && c !== d.retryLane && (d.retryLane = c, wi(n, c), ir(o, n, c, -1));
      }
      return $d(), o = fs(Error(U(421))), ao(n, r, m, o);
    }
    return c.data === "$?" ? (r.flags |= 128, r.child = n.child, r = sy.bind(null, n), c._reactRetry = r, null) : (n = d.treeContext, Ur = ja(c.nextSibling), Gr = r, Vt = !0, da = null, n !== null && (zr[er++] = Vn, zr[er++] = Ti, zr[er++] = fa, Vn = n.id, Ti = n.overflow, fa = r), r = Ld(r, o.children), r.flags |= 4096, r);
  }
  function Md(n, r, l) {
    n.lanes |= r;
    var o = n.alternate;
    o !== null && (o.lanes |= r), Nn(n.return, r, l);
  }
  function $c(n, r, l, o, c) {
    var d = n.memoizedState;
    d === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: o, tail: l, tailMode: c } : (d.isBackwards = r, d.rendering = null, d.renderingStartTime = 0, d.last = o, d.tail = l, d.tailMode = c);
  }
  function Nd(n, r, l) {
    var o = r.pendingProps, c = o.revealOrder, d = o.tail;
    if (Tn(n, r, o.children, l), o = De.current, (o & 2) !== 0)
      o = o & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && (n.flags & 128) !== 0)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Md(n, l, r);
            else if (n.tag === 19)
              Md(n, l, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      o &= 1;
    }
    if (Rt(De, o), (r.mode & 1) === 0)
      r.memoizedState = null;
    else
      switch (c) {
        case "forwards":
          for (l = r.child, c = null; l !== null; )
            n = l.alternate, n !== null && Jt(n) === null && (c = l), l = l.sibling;
          l = c, l === null ? (c = r.child, r.child = null) : (c = l.sibling, l.sibling = null), $c(r, !1, c, l, d);
          break;
        case "backwards":
          for (l = null, c = r.child, r.child = null; c !== null; ) {
            if (n = c.alternate, n !== null && Jt(n) === null) {
              r.child = c;
              break;
            }
            n = c.sibling, c.sibling = l, l = c, c = n;
          }
          $c(r, !0, l, null, d);
          break;
        case "together":
          $c(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function tr(n, r) {
    (r.mode & 1) === 0 && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function Pn(n, r, l) {
    if (n !== null && (r.dependencies = n.dependencies), ki |= r.lanes, (l & r.childLanes) === 0)
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(U(153));
    if (r.child !== null) {
      for (n = r.child, l = wl(n, n.pendingProps), r.child = l, l.return = r; n.sibling !== null; )
        n = n.sibling, l = l.sibling = wl(n, n.pendingProps), l.return = r;
      l.sibling = null;
    }
    return r.child;
  }
  function _i(n, r, l) {
    switch (r.tag) {
      case 3:
        Vv(r), Zt();
        break;
      case 5:
        be(r);
        break;
      case 1:
        Qt(r.type) && fc(r);
        break;
      case 4:
        Rd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var o = r.type._context, c = r.memoizedProps.value;
        Rt(Ja, o._currentValue), o._currentValue = c;
        break;
      case 13:
        if (o = r.memoizedState, o !== null)
          return o.dehydrated !== null ? (Rt(De, De.current & 1), r.flags |= 128, null) : (l & r.child.childLanes) !== 0 ? Od(n, r, l) : (Rt(De, De.current & 1), n = Pn(n, r, l), n !== null ? n.sibling : null);
        Rt(De, De.current & 1);
        break;
      case 19:
        if (o = (l & r.childLanes) !== 0, (n.flags & 128) !== 0) {
          if (o)
            return Nd(n, r, l);
          r.flags |= 128;
        }
        if (c = r.memoizedState, c !== null && (c.rendering = null, c.tail = null, c.lastEffect = null), Rt(De, De.current), o)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, iu(n, r, l);
    }
    return Pn(n, r, l);
  }
  var ps, uu, ha, wn;
  ps = function(n, r) {
    for (var l = r.child; l !== null; ) {
      if (l.tag === 5 || l.tag === 6)
        n.appendChild(l.stateNode);
      else if (l.tag !== 4 && l.child !== null) {
        l.child.return = l, l = l.child;
        continue;
      }
      if (l === r)
        break;
      for (; l.sibling === null; ) {
        if (l.return === null || l.return === r)
          return;
        l = l.return;
      }
      l.sibling.return = l.return, l = l.sibling;
    }
  }, uu = function() {
  }, ha = function(n, r, l, o) {
    var c = n.memoizedProps;
    if (c !== o) {
      n = r.stateNode, Kl(Va.current);
      var d = null;
      switch (l) {
        case "input":
          c = Zn(n, c), o = Zn(n, o), d = [];
          break;
        case "select":
          c = R({}, c, { value: void 0 }), o = R({}, o, { value: void 0 }), d = [];
          break;
        case "textarea":
          c = Ia(n, c), o = Ia(n, o), d = [];
          break;
        default:
          typeof c.onClick != "function" && typeof o.onClick == "function" && (n.onclick = cc);
      }
      Cn(l, o);
      var m;
      l = null;
      for (z in c)
        if (!o.hasOwnProperty(z) && c.hasOwnProperty(z) && c[z] != null)
          if (z === "style") {
            var E = c[z];
            for (m in E)
              E.hasOwnProperty(m) && (l || (l = {}), l[m] = "");
          } else
            z !== "dangerouslySetInnerHTML" && z !== "children" && z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && z !== "autoFocus" && (rn.hasOwnProperty(z) ? d || (d = []) : (d = d || []).push(z, null));
      for (z in o) {
        var T = o[z];
        if (E = c != null ? c[z] : void 0, o.hasOwnProperty(z) && T !== E && (T != null || E != null))
          if (z === "style")
            if (E) {
              for (m in E)
                !E.hasOwnProperty(m) || T && T.hasOwnProperty(m) || (l || (l = {}), l[m] = "");
              for (m in T)
                T.hasOwnProperty(m) && E[m] !== T[m] && (l || (l = {}), l[m] = T[m]);
            } else
              l || (d || (d = []), d.push(
                z,
                l
              )), l = T;
          else
            z === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, E = E ? E.__html : void 0, T != null && E !== T && (d = d || []).push(z, T)) : z === "children" ? typeof T != "string" && typeof T != "number" || (d = d || []).push(z, "" + T) : z !== "suppressContentEditableWarning" && z !== "suppressHydrationWarning" && (rn.hasOwnProperty(z) ? (T != null && z === "onScroll" && Lt("scroll", n), d || E === T || (d = [])) : (d = d || []).push(z, T));
      }
      l && (d = d || []).push("style", l);
      var z = d;
      (r.updateQueue = z) && (r.flags |= 4);
    }
  }, wn = function(n, r, l, o) {
    l !== o && (r.flags |= 4);
  };
  function vs(n, r) {
    if (!Vt)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var l = null; r !== null; )
            r.alternate !== null && (l = r), r = r.sibling;
          l === null ? n.tail = null : l.sibling = null;
          break;
        case "collapsed":
          l = n.tail;
          for (var o = null; l !== null; )
            l.alternate !== null && (o = l), l = l.sibling;
          o === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : o.sibling = null;
      }
  }
  function nr(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, l = 0, o = 0;
    if (r)
      for (var c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags & 14680064, o |= c.flags & 14680064, c.return = n, c = c.sibling;
    else
      for (c = n.child; c !== null; )
        l |= c.lanes | c.childLanes, o |= c.subtreeFlags, o |= c.flags, c.return = n, c = c.sibling;
    return n.subtreeFlags |= o, n.childLanes = l, r;
  }
  function ay(n, r, l) {
    var o = r.pendingProps;
    switch (pd(r), r.tag) {
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
        return nr(r), null;
      case 1:
        return Qt(r.type) && ca(), nr(r), null;
      case 3:
        return o = r.stateNode, yl(), St(on), St(Ne), Rc(), o.pendingContext && (o.context = o.pendingContext, o.pendingContext = null), (n === null || n.child === null) && (hc(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && (r.flags & 256) === 0 || (r.flags |= 1024, da !== null && (Cs(da), da = null))), uu(n, r), nr(r), null;
      case 5:
        Ge(r);
        var c = Kl(Zu.current);
        if (l = r.type, n !== null && r.stateNode != null)
          ha(n, r, l, o, c), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!o) {
            if (r.stateNode === null)
              throw Error(U(166));
            return nr(r), null;
          }
          if (n = Kl(Va.current), hc(r)) {
            o = r.stateNode, l = r.type;
            var d = r.memoizedProps;
            switch (o[Ka] = r, o[Gl] = d, n = (r.mode & 1) !== 0, l) {
              case "dialog":
                Lt("cancel", o), Lt("close", o);
                break;
              case "iframe":
              case "object":
              case "embed":
                Lt("load", o);
                break;
              case "video":
              case "audio":
                for (c = 0; c < Ko.length; c++)
                  Lt(Ko[c], o);
                break;
              case "source":
                Lt("error", o);
                break;
              case "img":
              case "image":
              case "link":
                Lt(
                  "error",
                  o
                ), Lt("load", o);
                break;
              case "details":
                Lt("toggle", o);
                break;
              case "input":
                Cr(o, d), Lt("invalid", o);
                break;
              case "select":
                o._wrapperState = { wasMultiple: !!d.multiple }, Lt("invalid", o);
                break;
              case "textarea":
                wr(o, d), Lt("invalid", o);
            }
            Cn(l, d), c = null;
            for (var m in d)
              if (d.hasOwnProperty(m)) {
                var E = d[m];
                m === "children" ? typeof E == "string" ? o.textContent !== E && (d.suppressHydrationWarning !== !0 && sc(o.textContent, E, n), c = ["children", E]) : typeof E == "number" && o.textContent !== "" + E && (d.suppressHydrationWarning !== !0 && sc(
                  o.textContent,
                  E,
                  n
                ), c = ["children", "" + E]) : rn.hasOwnProperty(m) && E != null && m === "onScroll" && Lt("scroll", o);
              }
            switch (l) {
              case "input":
                Er(o), Da(o, d, !0);
                break;
              case "textarea":
                Er(o), xr(o);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof d.onClick == "function" && (o.onclick = cc);
            }
            o = c, r.updateQueue = o, o !== null && (r.flags |= 4);
          } else {
            m = c.nodeType === 9 ? c : c.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Oa(l)), n === "http://www.w3.org/1999/xhtml" ? l === "script" ? (n = m.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof o.is == "string" ? n = m.createElement(l, { is: o.is }) : (n = m.createElement(l), l === "select" && (m = n, o.multiple ? m.multiple = !0 : o.size && (m.size = o.size))) : n = m.createElementNS(n, l), n[Ka] = r, n[Gl] = o, ps(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (m = dn(l, o), l) {
                case "dialog":
                  Lt("cancel", n), Lt("close", n), c = o;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Lt("load", n), c = o;
                  break;
                case "video":
                case "audio":
                  for (c = 0; c < Ko.length; c++)
                    Lt(Ko[c], n);
                  c = o;
                  break;
                case "source":
                  Lt("error", n), c = o;
                  break;
                case "img":
                case "image":
                case "link":
                  Lt(
                    "error",
                    n
                  ), Lt("load", n), c = o;
                  break;
                case "details":
                  Lt("toggle", n), c = o;
                  break;
                case "input":
                  Cr(n, o), c = Zn(n, o), Lt("invalid", n);
                  break;
                case "option":
                  c = o;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!o.multiple }, c = R({}, o, { value: void 0 }), Lt("invalid", n);
                  break;
                case "textarea":
                  wr(n, o), c = Ia(n, o), Lt("invalid", n);
                  break;
                default:
                  c = o;
              }
              Cn(l, c), E = c;
              for (d in E)
                if (E.hasOwnProperty(d)) {
                  var T = E[d];
                  d === "style" ? wt(n, T) : d === "dangerouslySetInnerHTML" ? (T = T ? T.__html : void 0, T != null && Al(n, T)) : d === "children" ? typeof T == "string" ? (l !== "textarea" || T !== "") && Qa(n, T) : typeof T == "number" && Qa(n, "" + T) : d !== "suppressContentEditableWarning" && d !== "suppressHydrationWarning" && d !== "autoFocus" && (rn.hasOwnProperty(d) ? T != null && d === "onScroll" && Lt("scroll", n) : T != null && Be(n, d, T, m));
                }
              switch (l) {
                case "input":
                  Er(n), Da(n, o, !1);
                  break;
                case "textarea":
                  Er(n), xr(n);
                  break;
                case "option":
                  o.value != null && n.setAttribute("value", "" + et(o.value));
                  break;
                case "select":
                  n.multiple = !!o.multiple, d = o.value, d != null ? Tr(n, !!o.multiple, d, !1) : o.defaultValue != null && Tr(
                    n,
                    !!o.multiple,
                    o.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof c.onClick == "function" && (n.onclick = cc);
              }
              switch (l) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  o = !!o.autoFocus;
                  break e;
                case "img":
                  o = !0;
                  break e;
                default:
                  o = !1;
              }
            }
            o && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return nr(r), null;
      case 6:
        if (n && r.stateNode != null)
          wn(n, r, n.memoizedProps, o);
        else {
          if (typeof o != "string" && r.stateNode === null)
            throw Error(U(166));
          if (l = Kl(Zu.current), Kl(Va.current), hc(r)) {
            if (o = r.stateNode, l = r.memoizedProps, o[Ka] = r, (d = o.nodeValue !== l) && (n = Gr, n !== null))
              switch (n.tag) {
                case 3:
                  sc(o.nodeValue, l, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && sc(o.nodeValue, l, (n.mode & 1) !== 0);
              }
            d && (r.flags |= 4);
          } else
            o = (l.nodeType === 9 ? l : l.ownerDocument).createTextNode(o), o[Ka] = r, r.stateNode = o;
        }
        return nr(r), null;
      case 13:
        if (St(De), o = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if (Vt && Ur !== null && (r.mode & 1) !== 0 && (r.flags & 128) === 0)
            _v(), Zt(), r.flags |= 98560, d = !1;
          else if (d = hc(r), o !== null && o.dehydrated !== null) {
            if (n === null) {
              if (!d)
                throw Error(U(318));
              if (d = r.memoizedState, d = d !== null ? d.dehydrated : null, !d)
                throw Error(U(317));
              d[Ka] = r;
            } else
              Zt(), (r.flags & 128) === 0 && (r.memoizedState = null), r.flags |= 4;
            nr(r), d = !1;
          } else
            da !== null && (Cs(da), da = null), d = !0;
          if (!d)
            return r.flags & 65536 ? r : null;
        }
        return (r.flags & 128) !== 0 ? (r.lanes = l, r) : (o = o !== null, o !== (n !== null && n.memoizedState !== null) && o && (r.child.flags |= 8192, (r.mode & 1) !== 0 && (n === null || (De.current & 1) !== 0 ? bn === 0 && (bn = 3) : $d())), r.updateQueue !== null && (r.flags |= 4), nr(r), null);
      case 4:
        return yl(), uu(n, r), n === null && Wu(r.stateNode.containerInfo), nr(r), null;
      case 10:
        return pl(r.type._context), nr(r), null;
      case 17:
        return Qt(r.type) && ca(), nr(r), null;
      case 19:
        if (St(De), d = r.memoizedState, d === null)
          return nr(r), null;
        if (o = (r.flags & 128) !== 0, m = d.rendering, m === null)
          if (o)
            vs(d, !1);
          else {
            if (bn !== 0 || n !== null && (n.flags & 128) !== 0)
              for (n = r.child; n !== null; ) {
                if (m = Jt(n), m !== null) {
                  for (r.flags |= 128, vs(d, !1), o = m.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), r.subtreeFlags = 0, o = l, l = r.child; l !== null; )
                    d = l, n = o, d.flags &= 14680066, m = d.alternate, m === null ? (d.childLanes = 0, d.lanes = n, d.child = null, d.subtreeFlags = 0, d.memoizedProps = null, d.memoizedState = null, d.updateQueue = null, d.dependencies = null, d.stateNode = null) : (d.childLanes = m.childLanes, d.lanes = m.lanes, d.child = m.child, d.subtreeFlags = 0, d.deletions = null, d.memoizedProps = m.memoizedProps, d.memoizedState = m.memoizedState, d.updateQueue = m.updateQueue, d.type = m.type, n = m.dependencies, d.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), l = l.sibling;
                  return Rt(De, De.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            d.tail !== null && It() > fo && (r.flags |= 128, o = !0, vs(d, !1), r.lanes = 4194304);
          }
        else {
          if (!o)
            if (n = Jt(m), n !== null) {
              if (r.flags |= 128, o = !0, l = n.updateQueue, l !== null && (r.updateQueue = l, r.flags |= 4), vs(d, !0), d.tail === null && d.tailMode === "hidden" && !m.alternate && !Vt)
                return nr(r), null;
            } else
              2 * It() - d.renderingStartTime > fo && l !== 1073741824 && (r.flags |= 128, o = !0, vs(d, !1), r.lanes = 4194304);
          d.isBackwards ? (m.sibling = r.child, r.child = m) : (l = d.last, l !== null ? l.sibling = m : r.child = m, d.last = m);
        }
        return d.tail !== null ? (r = d.tail, d.rendering = r, d.tail = r.sibling, d.renderingStartTime = It(), r.sibling = null, l = De.current, Rt(De, o ? l & 1 | 2 : l & 1), r) : (nr(r), null);
      case 22:
      case 23:
        return Pd(), o = r.memoizedState !== null, n !== null && n.memoizedState !== null !== o && (r.flags |= 8192), o && (r.mode & 1) !== 0 ? (Kr & 1073741824) !== 0 && (nr(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : nr(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(U(156, r.tag));
  }
  function zd(n, r) {
    switch (pd(r), r.tag) {
      case 1:
        return Qt(r.type) && ca(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return yl(), St(on), St(Ne), Rc(), n = r.flags, (n & 65536) !== 0 && (n & 128) === 0 ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return Ge(r), null;
      case 13:
        if (St(De), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(U(340));
          Zt();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return St(De), null;
      case 4:
        return yl(), null;
      case 10:
        return pl(r.type._context), null;
      case 22:
      case 23:
        return Pd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var hs = !1, xn = !1, Bv = typeof WeakSet == "function" ? WeakSet : Set, se = null;
  function io(n, r) {
    var l = n.ref;
    if (l !== null)
      if (typeof l == "function")
        try {
          l(null);
        } catch (o) {
          cn(n, r, o);
        }
      else
        l.current = null;
  }
  function ms(n, r, l) {
    try {
      l();
    } catch (o) {
      cn(n, r, o);
    }
  }
  var Pv = !1;
  function $v(n, r) {
    if (id = la, n = ac(), Si(n)) {
      if ("selectionStart" in n)
        var l = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          l = (l = n.ownerDocument) && l.defaultView || window;
          var o = l.getSelection && l.getSelection();
          if (o && o.rangeCount !== 0) {
            l = o.anchorNode;
            var c = o.anchorOffset, d = o.focusNode;
            o = o.focusOffset;
            try {
              l.nodeType, d.nodeType;
            } catch {
              l = null;
              break e;
            }
            var m = 0, E = -1, T = -1, z = 0, $ = 0, I = n, P = null;
            t:
              for (; ; ) {
                for (var ne; I !== l || c !== 0 && I.nodeType !== 3 || (E = m + c), I !== d || o !== 0 && I.nodeType !== 3 || (T = m + o), I.nodeType === 3 && (m += I.nodeValue.length), (ne = I.firstChild) !== null; )
                  P = I, I = ne;
                for (; ; ) {
                  if (I === n)
                    break t;
                  if (P === l && ++z === c && (E = m), P === d && ++$ === o && (T = m), (ne = I.nextSibling) !== null)
                    break;
                  I = P, P = I.parentNode;
                }
                I = ne;
              }
            l = E === -1 || T === -1 ? null : { start: E, end: T };
          } else
            l = null;
        }
      l = l || { start: 0, end: 0 };
    } else
      l = null;
    for (Ql = { focusedElem: n, selectionRange: l }, la = !1, se = r; se !== null; )
      if (r = se, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, se = n;
      else
        for (; se !== null; ) {
          r = se;
          try {
            var ce = r.alternate;
            if ((r.flags & 1024) !== 0)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (ce !== null) {
                    var pe = ce.memoizedProps, vn = ce.memoizedState, _ = r.stateNode, x = _.getSnapshotBeforeUpdate(r.elementType === r.type ? pe : qr(r.type, pe), vn);
                    _.__reactInternalSnapshotBeforeUpdate = x;
                  }
                  break;
                case 3:
                  var O = r.stateNode.containerInfo;
                  O.nodeType === 1 ? O.textContent = "" : O.nodeType === 9 && O.documentElement && O.removeChild(O.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(U(163));
              }
          } catch (G) {
            cn(r, r.return, G);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, se = n;
            break;
          }
          se = r.return;
        }
    return ce = Pv, Pv = !1, ce;
  }
  function ys(n, r, l) {
    var o = r.updateQueue;
    if (o = o !== null ? o.lastEffect : null, o !== null) {
      var c = o = o.next;
      do {
        if ((c.tag & n) === n) {
          var d = c.destroy;
          c.destroy = void 0, d !== void 0 && ms(r, l, d);
        }
        c = c.next;
      } while (c !== o);
    }
  }
  function gs(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var l = r = r.next;
      do {
        if ((l.tag & n) === n) {
          var o = l.create;
          l.destroy = o();
        }
        l = l.next;
      } while (l !== r);
    }
  }
  function Ud(n) {
    var r = n.ref;
    if (r !== null) {
      var l = n.stateNode;
      switch (n.tag) {
        case 5:
          n = l;
          break;
        default:
          n = l;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ad(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ad(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Ka], delete r[Gl], delete r[od], delete r[Km], delete r[sd])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function Yv(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function Yc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || Yv(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function lo(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.nodeType === 8 ? l.parentNode.insertBefore(n, r) : l.insertBefore(n, r) : (l.nodeType === 8 ? (r = l.parentNode, r.insertBefore(n, l)) : (r = l, r.appendChild(n)), l = l._reactRootContainer, l != null || r.onclick !== null || (r.onclick = cc));
    else if (o !== 4 && (n = n.child, n !== null))
      for (lo(n, r, l), n = n.sibling; n !== null; )
        lo(n, r, l), n = n.sibling;
  }
  function ti(n, r, l) {
    var o = n.tag;
    if (o === 5 || o === 6)
      n = n.stateNode, r ? l.insertBefore(n, r) : l.appendChild(n);
    else if (o !== 4 && (n = n.child, n !== null))
      for (ti(n, r, l), n = n.sibling; n !== null; )
        ti(n, r, l), n = n.sibling;
  }
  var Wt = null, zn = !1;
  function ma(n, r, l) {
    for (l = l.child; l !== null; )
      uo(n, r, l), l = l.sibling;
  }
  function uo(n, r, l) {
    if (_r && typeof _r.onCommitFiberUnmount == "function")
      try {
        _r.onCommitFiberUnmount(qi, l);
      } catch {
      }
    switch (l.tag) {
      case 5:
        xn || io(l, r);
      case 6:
        var o = Wt, c = zn;
        Wt = null, ma(n, r, l), Wt = o, zn = c, Wt !== null && (zn ? (n = Wt, l = l.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(l) : n.removeChild(l)) : Wt.removeChild(l.stateNode));
        break;
      case 18:
        Wt !== null && (zn ? (n = Wt, l = l.stateNode, n.nodeType === 8 ? ul(n.parentNode, l) : n.nodeType === 1 && ul(n, l), nl(n)) : ul(Wt, l.stateNode));
        break;
      case 4:
        o = Wt, c = zn, Wt = l.stateNode.containerInfo, zn = !0, ma(n, r, l), Wt = o, zn = c;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!xn && (o = l.updateQueue, o !== null && (o = o.lastEffect, o !== null))) {
          c = o = o.next;
          do {
            var d = c, m = d.destroy;
            d = d.tag, m !== void 0 && ((d & 2) !== 0 || (d & 4) !== 0) && ms(l, r, m), c = c.next;
          } while (c !== o);
        }
        ma(n, r, l);
        break;
      case 1:
        if (!xn && (io(l, r), o = l.stateNode, typeof o.componentWillUnmount == "function"))
          try {
            o.props = l.memoizedProps, o.state = l.memoizedState, o.componentWillUnmount();
          } catch (E) {
            cn(l, r, E);
          }
        ma(n, r, l);
        break;
      case 21:
        ma(n, r, l);
        break;
      case 22:
        l.mode & 1 ? (xn = (o = xn) || l.memoizedState !== null, ma(n, r, l), xn = o) : ma(n, r, l);
        break;
      default:
        ma(n, r, l);
    }
  }
  function Di(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var l = n.stateNode;
      l === null && (l = n.stateNode = new Bv()), r.forEach(function(o) {
        var c = cy.bind(null, n, o);
        l.has(o) || (l.add(o), o.then(c, c));
      });
    }
  }
  function Ba(n, r) {
    var l = r.deletions;
    if (l !== null)
      for (var o = 0; o < l.length; o++) {
        var c = l[o];
        try {
          var d = n, m = r, E = m;
          e:
            for (; E !== null; ) {
              switch (E.tag) {
                case 5:
                  Wt = E.stateNode, zn = !1;
                  break e;
                case 3:
                  Wt = E.stateNode.containerInfo, zn = !0;
                  break e;
                case 4:
                  Wt = E.stateNode.containerInfo, zn = !0;
                  break e;
              }
              E = E.return;
            }
          if (Wt === null)
            throw Error(U(160));
          uo(d, m, c), Wt = null, zn = !1;
          var T = c.alternate;
          T !== null && (T.return = null), c.return = null;
        } catch (z) {
          cn(c, r, z);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        Iv(r, n), r = r.sibling;
  }
  function Iv(n, r) {
    var l = n.alternate, o = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ba(r, n), ni(n), o & 4) {
          try {
            ys(3, n, n.return), gs(3, n);
          } catch (pe) {
            cn(n, n.return, pe);
          }
          try {
            ys(5, n, n.return);
          } catch (pe) {
            cn(n, n.return, pe);
          }
        }
        break;
      case 1:
        Ba(r, n), ni(n), o & 512 && l !== null && io(l, l.return);
        break;
      case 5:
        if (Ba(r, n), ni(n), o & 512 && l !== null && io(l, l.return), n.flags & 32) {
          var c = n.stateNode;
          try {
            Qa(c, "");
          } catch (pe) {
            cn(n, n.return, pe);
          }
        }
        if (o & 4 && (c = n.stateNode, c != null)) {
          var d = n.memoizedProps, m = l !== null ? l.memoizedProps : d, E = n.type, T = n.updateQueue;
          if (n.updateQueue = null, T !== null)
            try {
              E === "input" && d.type === "radio" && d.name != null && Rr(c, d), dn(E, m);
              var z = dn(E, d);
              for (m = 0; m < T.length; m += 2) {
                var $ = T[m], I = T[m + 1];
                $ === "style" ? wt(c, I) : $ === "dangerouslySetInnerHTML" ? Al(c, I) : $ === "children" ? Qa(c, I) : Be(c, $, I, z);
              }
              switch (E) {
                case "input":
                  kn(c, d);
                  break;
                case "textarea":
                  ka(c, d);
                  break;
                case "select":
                  var P = c._wrapperState.wasMultiple;
                  c._wrapperState.wasMultiple = !!d.multiple;
                  var ne = d.value;
                  ne != null ? Tr(c, !!d.multiple, ne, !1) : P !== !!d.multiple && (d.defaultValue != null ? Tr(
                    c,
                    !!d.multiple,
                    d.defaultValue,
                    !0
                  ) : Tr(c, !!d.multiple, d.multiple ? [] : "", !1));
              }
              c[Gl] = d;
            } catch (pe) {
              cn(n, n.return, pe);
            }
        }
        break;
      case 6:
        if (Ba(r, n), ni(n), o & 4) {
          if (n.stateNode === null)
            throw Error(U(162));
          c = n.stateNode, d = n.memoizedProps;
          try {
            c.nodeValue = d;
          } catch (pe) {
            cn(n, n.return, pe);
          }
        }
        break;
      case 3:
        if (Ba(r, n), ni(n), o & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            nl(r.containerInfo);
          } catch (pe) {
            cn(n, n.return, pe);
          }
        break;
      case 4:
        Ba(r, n), ni(n);
        break;
      case 13:
        Ba(r, n), ni(n), c = n.child, c.flags & 8192 && (d = c.memoizedState !== null, c.stateNode.isHidden = d, !d || c.alternate !== null && c.alternate.memoizedState !== null || (jd = It())), o & 4 && Di(n);
        break;
      case 22:
        if ($ = l !== null && l.memoizedState !== null, n.mode & 1 ? (xn = (z = xn) || $, Ba(r, n), xn = z) : Ba(r, n), ni(n), o & 8192) {
          if (z = n.memoizedState !== null, (n.stateNode.isHidden = z) && !$ && (n.mode & 1) !== 0)
            for (se = n, $ = n.child; $ !== null; ) {
              for (I = se = $; se !== null; ) {
                switch (P = se, ne = P.child, P.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    ys(4, P, P.return);
                    break;
                  case 1:
                    io(P, P.return);
                    var ce = P.stateNode;
                    if (typeof ce.componentWillUnmount == "function") {
                      o = P, l = P.return;
                      try {
                        r = o, ce.props = r.memoizedProps, ce.state = r.memoizedState, ce.componentWillUnmount();
                      } catch (pe) {
                        cn(o, l, pe);
                      }
                    }
                    break;
                  case 5:
                    io(P, P.return);
                    break;
                  case 22:
                    if (P.memoizedState !== null) {
                      Hd(I);
                      continue;
                    }
                }
                ne !== null ? (ne.return = P, se = ne) : Hd(I);
              }
              $ = $.sibling;
            }
          e:
            for ($ = null, I = n; ; ) {
              if (I.tag === 5) {
                if ($ === null) {
                  $ = I;
                  try {
                    c = I.stateNode, z ? (d = c.style, typeof d.setProperty == "function" ? d.setProperty("display", "none", "important") : d.display = "none") : (E = I.stateNode, T = I.memoizedProps.style, m = T != null && T.hasOwnProperty("display") ? T.display : null, E.style.display = Ie("display", m));
                  } catch (pe) {
                    cn(n, n.return, pe);
                  }
                }
              } else if (I.tag === 6) {
                if ($ === null)
                  try {
                    I.stateNode.nodeValue = z ? "" : I.memoizedProps;
                  } catch (pe) {
                    cn(n, n.return, pe);
                  }
              } else if ((I.tag !== 22 && I.tag !== 23 || I.memoizedState === null || I === n) && I.child !== null) {
                I.child.return = I, I = I.child;
                continue;
              }
              if (I === n)
                break e;
              for (; I.sibling === null; ) {
                if (I.return === null || I.return === n)
                  break e;
                $ === I && ($ = null), I = I.return;
              }
              $ === I && ($ = null), I.sibling.return = I.return, I = I.sibling;
            }
        }
        break;
      case 19:
        Ba(r, n), ni(n), o & 4 && Di(n);
        break;
      case 21:
        break;
      default:
        Ba(
          r,
          n
        ), ni(n);
    }
  }
  function ni(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var l = n.return; l !== null; ) {
            if (Yv(l)) {
              var o = l;
              break e;
            }
            l = l.return;
          }
          throw Error(U(160));
        }
        switch (o.tag) {
          case 5:
            var c = o.stateNode;
            o.flags & 32 && (Qa(c, ""), o.flags &= -33);
            var d = Yc(n);
            ti(n, d, c);
            break;
          case 3:
          case 4:
            var m = o.stateNode.containerInfo, E = Yc(n);
            lo(n, E, m);
            break;
          default:
            throw Error(U(161));
        }
      } catch (T) {
        cn(n, n.return, T);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function Qv(n, r, l) {
    se = n, oo(n);
  }
  function oo(n, r, l) {
    for (var o = (n.mode & 1) !== 0; se !== null; ) {
      var c = se, d = c.child;
      if (c.tag === 22 && o) {
        var m = c.memoizedState !== null || hs;
        if (!m) {
          var E = c.alternate, T = E !== null && E.memoizedState !== null || xn;
          E = hs;
          var z = xn;
          if (hs = m, (xn = T) && !z)
            for (se = c; se !== null; )
              m = se, T = m.child, m.tag === 22 && m.memoizedState !== null ? Gv(c) : T !== null ? (T.return = m, se = T) : Gv(c);
          for (; d !== null; )
            se = d, oo(d), d = d.sibling;
          se = c, hs = E, xn = z;
        }
        Wv(n);
      } else
        (c.subtreeFlags & 8772) !== 0 && d !== null ? (d.return = c, se = d) : Wv(n);
    }
  }
  function Wv(n) {
    for (; se !== null; ) {
      var r = se;
      if ((r.flags & 8772) !== 0) {
        var l = r.alternate;
        try {
          if ((r.flags & 8772) !== 0)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                xn || gs(5, r);
                break;
              case 1:
                var o = r.stateNode;
                if (r.flags & 4 && !xn)
                  if (l === null)
                    o.componentDidMount();
                  else {
                    var c = r.elementType === r.type ? l.memoizedProps : qr(r.type, l.memoizedProps);
                    o.componentDidUpdate(c, l.memoizedState, o.__reactInternalSnapshotBeforeUpdate);
                  }
                var d = r.updateQueue;
                d !== null && Xl(r, d, o);
                break;
              case 3:
                var m = r.updateQueue;
                if (m !== null) {
                  if (l = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        l = r.child.stateNode;
                        break;
                      case 1:
                        l = r.child.stateNode;
                    }
                  Xl(r, m, l);
                }
                break;
              case 5:
                var E = r.stateNode;
                if (l === null && r.flags & 4) {
                  l = E;
                  var T = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      T.autoFocus && l.focus();
                      break;
                    case "img":
                      T.src && (l.src = T.src);
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
                if (r.memoizedState === null) {
                  var z = r.alternate;
                  if (z !== null) {
                    var $ = z.memoizedState;
                    if ($ !== null) {
                      var I = $.dehydrated;
                      I !== null && nl(I);
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
                throw Error(U(163));
            }
          xn || r.flags & 512 && Ud(r);
        } catch (P) {
          cn(r, r.return, P);
        }
      }
      if (r === n) {
        se = null;
        break;
      }
      if (l = r.sibling, l !== null) {
        l.return = r.return, se = l;
        break;
      }
      se = r.return;
    }
  }
  function Hd(n) {
    for (; se !== null; ) {
      var r = se;
      if (r === n) {
        se = null;
        break;
      }
      var l = r.sibling;
      if (l !== null) {
        l.return = r.return, se = l;
        break;
      }
      se = r.return;
    }
  }
  function Gv(n) {
    for (; se !== null; ) {
      var r = se;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var l = r.return;
            try {
              gs(4, r);
            } catch (T) {
              cn(r, l, T);
            }
            break;
          case 1:
            var o = r.stateNode;
            if (typeof o.componentDidMount == "function") {
              var c = r.return;
              try {
                o.componentDidMount();
              } catch (T) {
                cn(r, c, T);
              }
            }
            var d = r.return;
            try {
              Ud(r);
            } catch (T) {
              cn(r, d, T);
            }
            break;
          case 5:
            var m = r.return;
            try {
              Ud(r);
            } catch (T) {
              cn(r, m, T);
            }
        }
      } catch (T) {
        cn(r, r.return, T);
      }
      if (r === n) {
        se = null;
        break;
      }
      var E = r.sibling;
      if (E !== null) {
        E.return = r.return, se = E;
        break;
      }
      se = r.return;
    }
  }
  var Ic = Math.ceil, Ss = rt.ReactCurrentDispatcher, Fd = rt.ReactCurrentOwner, rr = rt.ReactCurrentBatchConfig, Ke = 0, en = null, sn = null, Un = 0, Kr = 0, so = Pe(0), bn = 0, Es = null, ki = 0, Qc = 0, co = 0, ou = null, cr = null, jd = 0, fo = 1 / 0, Oi = null, Wc = !1, su = null, ri = null, Cl = !1, Rl = null, Gc = 0, po = 0, qc = null, cu = -1, fu = 0;
  function ar() {
    return (Ke & 6) !== 0 ? It() : cu !== -1 ? cu : cu = It();
  }
  function gn(n) {
    return (n.mode & 1) === 0 ? 1 : (Ke & 2) !== 0 && Un !== 0 ? Un & -Un : mc.transition !== null ? (fu === 0 && (fu = Nu()), fu) : (n = ht, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Po(n.type)), n);
  }
  function ir(n, r, l, o) {
    if (50 < po)
      throw po = 0, qc = null, Error(U(185));
    vi(n, l, o), ((Ke & 2) === 0 || n !== en) && (n === en && ((Ke & 2) === 0 && (Qc |= l), bn === 4 && ya(n, Un)), lr(n, o), l === 1 && Ke === 0 && (r.mode & 1) === 0 && (fo = It() + 500, Mn && Mr()));
  }
  function lr(n, r) {
    var l = n.callbackNode;
    Zi(n, r);
    var o = or(n, n === en ? Un : 0);
    if (o === 0)
      l !== null && qs(l), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = o & -o, n.callbackPriority !== r) {
      if (l != null && qs(l), r === 1)
        n.tag === 0 ? fd(qv.bind(null, n)) : cd(qv.bind(null, n)), ud(function() {
          (Ke & 6) === 0 && Mr();
        }), l = null;
      else {
        switch (Uu(o)) {
          case 1:
            l = Na;
            break;
          case 4:
            l = Qe;
            break;
          case 16:
            l = Ga;
            break;
          case 536870912:
            l = Lu;
            break;
          default:
            l = Ga;
        }
        l = Id(l, vo.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = l;
    }
  }
  function vo(n, r) {
    if (cu = -1, fu = 0, (Ke & 6) !== 0)
      throw Error(U(327));
    var l = n.callbackNode;
    if (mo() && n.callbackNode !== l)
      return null;
    var o = or(n, n === en ? Un : 0);
    if (o === 0)
      return null;
    if ((o & 30) !== 0 || (o & n.expiredLanes) !== 0 || r)
      r = Kc(n, o);
    else {
      r = o;
      var c = Ke;
      Ke |= 2;
      var d = Xc();
      (en !== n || Un !== r) && (Oi = null, fo = It() + 500, du(n, r));
      do
        try {
          ly();
          break;
        } catch (E) {
          Xv(n, E);
        }
      while (1);
      yd(), Ss.current = d, Ke = c, sn !== null ? r = 0 : (en = null, Un = 0, r = bn);
    }
    if (r !== 0) {
      if (r === 2 && (c = Ji(n), c !== 0 && (o = c, r = Vd(n, c))), r === 1)
        throw l = Es, du(n, 0), ya(n, o), lr(n, It()), l;
      if (r === 6)
        ya(n, o);
      else {
        if (c = n.current.alternate, (o & 30) === 0 && !Bd(c) && (r = Kc(n, o), r === 2 && (d = Ji(n), d !== 0 && (o = d, r = Vd(n, d))), r === 1))
          throw l = Es, du(n, 0), ya(n, o), lr(n, It()), l;
        switch (n.finishedWork = c, n.finishedLanes = o, r) {
          case 0:
          case 1:
            throw Error(U(345));
          case 2:
            pu(n, cr, Oi);
            break;
          case 3:
            if (ya(n, o), (o & 130023424) === o && (r = jd + 500 - It(), 10 < r)) {
              if (or(n, 0) !== 0)
                break;
              if (c = n.suspendedLanes, (c & o) !== o) {
                ar(), n.pingedLanes |= n.suspendedLanes & c;
                break;
              }
              n.timeoutHandle = Wl(pu.bind(null, n, cr, Oi), r);
              break;
            }
            pu(n, cr, Oi);
            break;
          case 4:
            if (ya(n, o), (o & 4194240) === o)
              break;
            for (r = n.eventTimes, c = -1; 0 < o; ) {
              var m = 31 - ur(o);
              d = 1 << m, m = r[m], m > c && (c = m), o &= ~d;
            }
            if (o = c, o = It() - o, o = (120 > o ? 120 : 480 > o ? 480 : 1080 > o ? 1080 : 1920 > o ? 1920 : 3e3 > o ? 3e3 : 4320 > o ? 4320 : 1960 * Ic(o / 1960)) - o, 10 < o) {
              n.timeoutHandle = Wl(pu.bind(null, n, cr, Oi), o);
              break;
            }
            pu(n, cr, Oi);
            break;
          case 5:
            pu(n, cr, Oi);
            break;
          default:
            throw Error(U(329));
        }
      }
    }
    return lr(n, It()), n.callbackNode === l ? vo.bind(null, n) : null;
  }
  function Vd(n, r) {
    var l = ou;
    return n.current.memoizedState.isDehydrated && (du(n, r).flags |= 256), n = Kc(n, r), n !== 2 && (r = cr, cr = l, r !== null && Cs(r)), n;
  }
  function Cs(n) {
    cr === null ? cr = n : cr.push.apply(cr, n);
  }
  function Bd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var l = r.updateQueue;
        if (l !== null && (l = l.stores, l !== null))
          for (var o = 0; o < l.length; o++) {
            var c = l[o], d = c.getSnapshot;
            c = c.value;
            try {
              if (!ua(d(), c))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (l = r.child, r.subtreeFlags & 16384 && l !== null)
        l.return = r, r = l;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function ya(n, r) {
    for (r &= ~co, r &= ~Qc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var l = 31 - ur(r), o = 1 << l;
      n[l] = -1, r &= ~o;
    }
  }
  function qv(n) {
    if ((Ke & 6) !== 0)
      throw Error(U(327));
    mo();
    var r = or(n, 0);
    if ((r & 1) === 0)
      return lr(n, It()), null;
    var l = Kc(n, r);
    if (n.tag !== 0 && l === 2) {
      var o = Ji(n);
      o !== 0 && (r = o, l = Vd(n, o));
    }
    if (l === 1)
      throw l = Es, du(n, 0), ya(n, r), lr(n, It()), l;
    if (l === 6)
      throw Error(U(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, pu(n, cr, Oi), lr(n, It()), null;
  }
  function ho(n, r) {
    var l = Ke;
    Ke |= 1;
    try {
      return n(r);
    } finally {
      Ke = l, Ke === 0 && (fo = It() + 500, Mn && Mr());
    }
  }
  function Tl(n) {
    Rl !== null && Rl.tag === 0 && (Ke & 6) === 0 && mo();
    var r = Ke;
    Ke |= 1;
    var l = rr.transition, o = ht;
    try {
      if (rr.transition = null, ht = 1, n)
        return n();
    } finally {
      ht = o, rr.transition = l, Ke = r, (Ke & 6) === 0 && Mr();
    }
  }
  function Pd() {
    Kr = so.current, St(so);
  }
  function du(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var l = n.timeoutHandle;
    if (l !== -1 && (n.timeoutHandle = -1, Tv(l)), sn !== null)
      for (l = sn.return; l !== null; ) {
        var o = l;
        switch (pd(o), o.tag) {
          case 1:
            o = o.type.childContextTypes, o != null && ca();
            break;
          case 3:
            yl(), St(on), St(Ne), Rc();
            break;
          case 5:
            Ge(o);
            break;
          case 4:
            yl();
            break;
          case 13:
            St(De);
            break;
          case 19:
            St(De);
            break;
          case 10:
            pl(o.type._context);
            break;
          case 22:
          case 23:
            Pd();
        }
        l = l.return;
      }
    if (en = n, sn = n = wl(n.current, null), Un = Kr = r, bn = 0, Es = null, co = Qc = ki = 0, cr = ou = null, Bn !== null) {
      for (r = 0; r < Bn.length; r++)
        if (l = Bn[r], o = l.interleaved, o !== null) {
          l.interleaved = null;
          var c = o.next, d = l.pending;
          if (d !== null) {
            var m = d.next;
            d.next = c, o.next = m;
          }
          l.pending = o;
        }
      Bn = null;
    }
    return n;
  }
  function Xv(n, r) {
    do {
      var l = sn;
      try {
        if (yd(), Tc.current = jc, ke) {
          for (var o = Bt.memoizedState; o !== null; ) {
            var c = o.queue;
            c !== null && (c.pending = null), o = o.next;
          }
          ke = !1;
        }
        if (Zl = 0, it = j = Bt = null, ei = !1, Xr = 0, Fd.current = null, l === null || l.return === null) {
          bn = 1, Es = r, sn = null;
          break;
        }
        e: {
          var d = n, m = l.return, E = l, T = r;
          if (r = Un, E.flags |= 32768, T !== null && typeof T == "object" && typeof T.then == "function") {
            var z = T, $ = E, I = $.tag;
            if (($.mode & 1) === 0 && (I === 0 || I === 11 || I === 15)) {
              var P = $.alternate;
              P ? ($.updateQueue = P.updateQueue, $.memoizedState = P.memoizedState, $.lanes = P.lanes) : ($.updateQueue = null, $.memoizedState = null);
            }
            var ne = bd(m);
            if (ne !== null) {
              ne.flags &= -257, _d(ne, m, E, d, r), ne.mode & 1 && Fv(d, z, r), r = ne, T = z;
              var ce = r.updateQueue;
              if (ce === null) {
                var pe = /* @__PURE__ */ new Set();
                pe.add(T), r.updateQueue = pe;
              } else
                ce.add(T);
              break e;
            } else {
              if ((r & 1) === 0) {
                Fv(d, z, r), $d();
                break e;
              }
              T = Error(U(426));
            }
          } else if (Vt && E.mode & 1) {
            var vn = bd(m);
            if (vn !== null) {
              (vn.flags & 65536) === 0 && (vn.flags |= 256), _d(vn, m, E, d, r), hd(no(T, E));
              break e;
            }
          }
          d = T = no(T, E), bn !== 4 && (bn = 2), ou === null ? ou = [d] : ou.push(d), d = m;
          do {
            switch (d.tag) {
              case 3:
                d.flags |= 65536, r &= -r, d.lanes |= r;
                var _ = Hv(d, T, r);
                Ed(d, _);
                break e;
              case 1:
                E = T;
                var x = d.type, O = d.stateNode;
                if ((d.flags & 128) === 0 && (typeof x.getDerivedStateFromError == "function" || O !== null && typeof O.componentDidCatch == "function" && (ri === null || !ri.has(O)))) {
                  d.flags |= 65536, r &= -r, d.lanes |= r;
                  var G = ds(d, E, r);
                  Ed(d, G);
                  break e;
                }
            }
            d = d.return;
          } while (d !== null);
        }
        Yd(l);
      } catch (he) {
        r = he, sn === l && l !== null && (sn = l = l.return);
        continue;
      }
      break;
    } while (1);
  }
  function Xc() {
    var n = Ss.current;
    return Ss.current = jc, n === null ? jc : n;
  }
  function $d() {
    (bn === 0 || bn === 3 || bn === 2) && (bn = 4), en === null || (ki & 268435455) === 0 && (Qc & 268435455) === 0 || ya(en, Un);
  }
  function Kc(n, r) {
    var l = Ke;
    Ke |= 2;
    var o = Xc();
    (en !== n || Un !== r) && (Oi = null, du(n, r));
    do
      try {
        iy();
        break;
      } catch (c) {
        Xv(n, c);
      }
    while (1);
    if (yd(), Ke = l, Ss.current = o, sn !== null)
      throw Error(U(261));
    return en = null, Un = 0, bn;
  }
  function iy() {
    for (; sn !== null; )
      Kv(sn);
  }
  function ly() {
    for (; sn !== null && !Hf(); )
      Kv(sn);
  }
  function Kv(n) {
    var r = Jv(n.alternate, n, Kr);
    n.memoizedProps = n.pendingProps, r === null ? Yd(n) : sn = r, Fd.current = null;
  }
  function Yd(n) {
    var r = n;
    do {
      var l = r.alternate;
      if (n = r.return, (r.flags & 32768) === 0) {
        if (l = ay(l, r, Kr), l !== null) {
          sn = l;
          return;
        }
      } else {
        if (l = zd(l, r), l !== null) {
          l.flags &= 32767, sn = l;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          bn = 6, sn = null;
          return;
        }
      }
      if (r = r.sibling, r !== null) {
        sn = r;
        return;
      }
      sn = r = n;
    } while (r !== null);
    bn === 0 && (bn = 5);
  }
  function pu(n, r, l) {
    var o = ht, c = rr.transition;
    try {
      rr.transition = null, ht = 1, uy(n, r, l, o);
    } finally {
      rr.transition = c, ht = o;
    }
    return null;
  }
  function uy(n, r, l, o) {
    do
      mo();
    while (Rl !== null);
    if ((Ke & 6) !== 0)
      throw Error(U(327));
    l = n.finishedWork;
    var c = n.finishedLanes;
    if (l === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, l === n.current)
      throw Error(U(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var d = l.lanes | l.childLanes;
    if (Vf(n, d), n === en && (sn = en = null, Un = 0), (l.subtreeFlags & 2064) === 0 && (l.flags & 2064) === 0 || Cl || (Cl = !0, Id(Ga, function() {
      return mo(), null;
    })), d = (l.flags & 15990) !== 0, (l.subtreeFlags & 15990) !== 0 || d) {
      d = rr.transition, rr.transition = null;
      var m = ht;
      ht = 1;
      var E = Ke;
      Ke |= 4, Fd.current = null, $v(n, l), Iv(l, n), ic(Ql), la = !!id, Ql = id = null, n.current = l, Qv(l), Ff(), Ke = E, ht = m, rr.transition = d;
    } else
      n.current = l;
    if (Cl && (Cl = !1, Rl = n, Gc = c), d = n.pendingLanes, d === 0 && (ri = null), jo(l.stateNode), lr(n, It()), r !== null)
      for (o = n.onRecoverableError, l = 0; l < r.length; l++)
        c = r[l], o(c.value, { componentStack: c.stack, digest: c.digest });
    if (Wc)
      throw Wc = !1, n = su, su = null, n;
    return (Gc & 1) !== 0 && n.tag !== 0 && mo(), d = n.pendingLanes, (d & 1) !== 0 ? n === qc ? po++ : (po = 0, qc = n) : po = 0, Mr(), null;
  }
  function mo() {
    if (Rl !== null) {
      var n = Uu(Gc), r = rr.transition, l = ht;
      try {
        if (rr.transition = null, ht = 16 > n ? 16 : n, Rl === null)
          var o = !1;
        else {
          if (n = Rl, Rl = null, Gc = 0, (Ke & 6) !== 0)
            throw Error(U(331));
          var c = Ke;
          for (Ke |= 4, se = n.current; se !== null; ) {
            var d = se, m = d.child;
            if ((se.flags & 16) !== 0) {
              var E = d.deletions;
              if (E !== null) {
                for (var T = 0; T < E.length; T++) {
                  var z = E[T];
                  for (se = z; se !== null; ) {
                    var $ = se;
                    switch ($.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ys(8, $, d);
                    }
                    var I = $.child;
                    if (I !== null)
                      I.return = $, se = I;
                    else
                      for (; se !== null; ) {
                        $ = se;
                        var P = $.sibling, ne = $.return;
                        if (Ad($), $ === z) {
                          se = null;
                          break;
                        }
                        if (P !== null) {
                          P.return = ne, se = P;
                          break;
                        }
                        se = ne;
                      }
                  }
                }
                var ce = d.alternate;
                if (ce !== null) {
                  var pe = ce.child;
                  if (pe !== null) {
                    ce.child = null;
                    do {
                      var vn = pe.sibling;
                      pe.sibling = null, pe = vn;
                    } while (pe !== null);
                  }
                }
                se = d;
              }
            }
            if ((d.subtreeFlags & 2064) !== 0 && m !== null)
              m.return = d, se = m;
            else
              e:
                for (; se !== null; ) {
                  if (d = se, (d.flags & 2048) !== 0)
                    switch (d.tag) {
                      case 0:
                      case 11:
                      case 15:
                        ys(9, d, d.return);
                    }
                  var _ = d.sibling;
                  if (_ !== null) {
                    _.return = d.return, se = _;
                    break e;
                  }
                  se = d.return;
                }
          }
          var x = n.current;
          for (se = x; se !== null; ) {
            m = se;
            var O = m.child;
            if ((m.subtreeFlags & 2064) !== 0 && O !== null)
              O.return = m, se = O;
            else
              e:
                for (m = x; se !== null; ) {
                  if (E = se, (E.flags & 2048) !== 0)
                    try {
                      switch (E.tag) {
                        case 0:
                        case 11:
                        case 15:
                          gs(9, E);
                      }
                    } catch (he) {
                      cn(E, E.return, he);
                    }
                  if (E === m) {
                    se = null;
                    break e;
                  }
                  var G = E.sibling;
                  if (G !== null) {
                    G.return = E.return, se = G;
                    break e;
                  }
                  se = E.return;
                }
          }
          if (Ke = c, Mr(), _r && typeof _r.onPostCommitFiberRoot == "function")
            try {
              _r.onPostCommitFiberRoot(qi, n);
            } catch {
            }
          o = !0;
        }
        return o;
      } finally {
        ht = l, rr.transition = r;
      }
    }
    return !1;
  }
  function Zv(n, r, l) {
    r = no(l, r), r = Hv(n, r, 1), n = hl(n, r, 1), r = ar(), n !== null && (vi(n, 1, r), lr(n, r));
  }
  function cn(n, r, l) {
    if (n.tag === 3)
      Zv(n, n, l);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Zv(r, n, l);
          break;
        } else if (r.tag === 1) {
          var o = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof o.componentDidCatch == "function" && (ri === null || !ri.has(o))) {
            n = no(l, n), n = ds(r, n, 1), r = hl(r, n, 1), n = ar(), r !== null && (vi(r, 1, n), lr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function oy(n, r, l) {
    var o = n.pingCache;
    o !== null && o.delete(r), r = ar(), n.pingedLanes |= n.suspendedLanes & l, en === n && (Un & l) === l && (bn === 4 || bn === 3 && (Un & 130023424) === Un && 500 > It() - jd ? du(n, 0) : co |= l), lr(n, r);
  }
  function Zc(n, r) {
    r === 0 && ((n.mode & 1) === 0 ? r = 1 : (r = Xi, Xi <<= 1, (Xi & 130023424) === 0 && (Xi = 4194304)));
    var l = ar();
    n = wi(n, r), n !== null && (vi(n, r, l), lr(n, l));
  }
  function sy(n) {
    var r = n.memoizedState, l = 0;
    r !== null && (l = r.retryLane), Zc(n, l);
  }
  function cy(n, r) {
    var l = 0;
    switch (n.tag) {
      case 13:
        var o = n.stateNode, c = n.memoizedState;
        c !== null && (l = c.retryLane);
        break;
      case 19:
        o = n.stateNode;
        break;
      default:
        throw Error(U(314));
    }
    o !== null && o.delete(r), Zc(n, l);
  }
  var Jv;
  Jv = function(n, r, l) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || on.current)
        yn = !0;
      else {
        if ((n.lanes & l) === 0 && (r.flags & 128) === 0)
          return yn = !1, _i(n, r, l);
        yn = (n.flags & 131072) !== 0;
      }
    else
      yn = !1, Vt && (r.flags & 1048576) !== 0 && dd(r, qu, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var o = r.type;
        tr(n, r), n = r.pendingProps;
        var c = sa(r, Ne.current);
        K(r, l), c = gl(null, r, o, n, c, l);
        var d = tu();
        return r.flags |= 1, typeof c == "object" && c !== null && typeof c.render == "function" && c.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Qt(o) ? (d = !0, fc(r)) : d = !1, r.memoizedState = c.state !== null && c.state !== void 0 ? c.state : null, Sd(r), c.updater = Sc, r.stateNode = c, c._reactInternals = r, Ec(r, o, n, l), r = jv(null, r, o, !0, d, l)) : (r.tag = 0, Vt && d && dc(r), Tn(null, r, c, l), r = r.child), r;
      case 16:
        o = r.elementType;
        e: {
          switch (tr(n, r), n = r.pendingProps, c = o._init, o = c(o._payload), r.type = o, c = r.tag = dy(o), n = qr(o, n), c) {
            case 0:
              r = ro(null, r, o, n, l);
              break e;
            case 1:
              r = Dd(null, r, o, n, l);
              break e;
            case 11:
              r = El(null, r, o, n, l);
              break e;
            case 14:
              r = Bc(null, r, o, qr(o.type, n), l);
              break e;
          }
          throw Error(U(
            306,
            o,
            ""
          ));
        }
        return r;
      case 0:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), ro(n, r, o, c, l);
      case 1:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), Dd(n, r, o, c, l);
      case 3:
        e: {
          if (Vv(r), n === null)
            throw Error(U(387));
          o = r.pendingProps, d = r.memoizedState, c = d.element, Rn(n, r), ml(r, o, null, l);
          var m = r.memoizedState;
          if (o = m.element, d.isDehydrated)
            if (d = { element: o, isDehydrated: !1, cache: m.cache, pendingSuspenseBoundaries: m.pendingSuspenseBoundaries, transitions: m.transitions }, r.updateQueue.baseState = d, r.memoizedState = d, r.flags & 256) {
              c = no(Error(U(423)), r), r = Pc(n, r, o, l, c);
              break e;
            } else if (o !== c) {
              c = no(Error(U(424)), r), r = Pc(n, r, o, l, c);
              break e;
            } else
              for (Ur = ja(r.stateNode.containerInfo.firstChild), Gr = r, Vt = !0, da = null, l = Uv(r, null, o, l), r.child = l; l; )
                l.flags = l.flags & -3 | 4096, l = l.sibling;
          else {
            if (Zt(), o === c) {
              r = Pn(n, r, l);
              break e;
            }
            Tn(n, r, o, l);
          }
          r = r.child;
        }
        return r;
      case 5:
        return be(r), n === null && vc(r), o = r.type, c = r.pendingProps, d = n !== null ? n.memoizedProps : null, m = c.children, es(o, c) ? m = null : d !== null && es(o, d) && (r.flags |= 32), $e(n, r), Tn(n, r, m, l), r.child;
      case 6:
        return n === null && vc(r), null;
      case 13:
        return Od(n, r, l);
      case 4:
        return Rd(r, r.stateNode.containerInfo), o = r.pendingProps, n === null ? r.child = Ku(r, null, o, l) : Tn(n, r, o, l), r.child;
      case 11:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), El(n, r, o, c, l);
      case 7:
        return Tn(n, r, r.pendingProps, l), r.child;
      case 8:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 12:
        return Tn(n, r, r.pendingProps.children, l), r.child;
      case 10:
        e: {
          if (o = r.type._context, c = r.pendingProps, d = r.memoizedProps, m = c.value, Rt(Ja, o._currentValue), o._currentValue = m, d !== null)
            if (ua(d.value, m)) {
              if (d.children === c.children && !on.current) {
                r = Pn(n, r, l);
                break e;
              }
            } else
              for (d = r.child, d !== null && (d.return = r); d !== null; ) {
                var E = d.dependencies;
                if (E !== null) {
                  m = d.child;
                  for (var T = E.firstContext; T !== null; ) {
                    if (T.context === o) {
                      if (d.tag === 1) {
                        T = xi(-1, l & -l), T.tag = 2;
                        var z = d.updateQueue;
                        if (z !== null) {
                          z = z.shared;
                          var $ = z.pending;
                          $ === null ? T.next = T : (T.next = $.next, $.next = T), z.pending = T;
                        }
                      }
                      d.lanes |= l, T = d.alternate, T !== null && (T.lanes |= l), Nn(
                        d.return,
                        l,
                        r
                      ), E.lanes |= l;
                      break;
                    }
                    T = T.next;
                  }
                } else if (d.tag === 10)
                  m = d.type === r.type ? null : d.child;
                else if (d.tag === 18) {
                  if (m = d.return, m === null)
                    throw Error(U(341));
                  m.lanes |= l, E = m.alternate, E !== null && (E.lanes |= l), Nn(m, l, r), m = d.sibling;
                } else
                  m = d.child;
                if (m !== null)
                  m.return = d;
                else
                  for (m = d; m !== null; ) {
                    if (m === r) {
                      m = null;
                      break;
                    }
                    if (d = m.sibling, d !== null) {
                      d.return = m.return, m = d;
                      break;
                    }
                    m = m.return;
                  }
                d = m;
              }
          Tn(n, r, c.children, l), r = r.child;
        }
        return r;
      case 9:
        return c = r.type, o = r.pendingProps.children, K(r, l), c = pn(c), o = o(c), r.flags |= 1, Tn(n, r, o, l), r.child;
      case 14:
        return o = r.type, c = qr(o, r.pendingProps), c = qr(o.type, c), Bc(n, r, o, c, l);
      case 15:
        return Fr(n, r, r.type, r.pendingProps, l);
      case 17:
        return o = r.type, c = r.pendingProps, c = r.elementType === o ? c : qr(o, c), tr(n, r), r.tag = 1, Qt(o) ? (n = !0, fc(r)) : n = !1, K(r, l), Lv(r, o, c), Ec(r, o, c, l), jv(null, r, o, !0, n, l);
      case 19:
        return Nd(n, r, l);
      case 22:
        return iu(n, r, l);
    }
    throw Error(U(156, r.tag));
  };
  function Id(n, r) {
    return Fo(n, r);
  }
  function fy(n, r, l, o) {
    this.tag = n, this.key = l, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = o, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function ga(n, r, l, o) {
    return new fy(n, r, l, o);
  }
  function Qd(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function dy(n) {
    if (typeof n == "function")
      return Qd(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === En)
        return 11;
      if (n === Yt)
        return 14;
    }
    return 2;
  }
  function wl(n, r) {
    var l = n.alternate;
    return l === null ? (l = ga(n.tag, r, n.key, n.mode), l.elementType = n.elementType, l.type = n.type, l.stateNode = n.stateNode, l.alternate = n, n.alternate = l) : (l.pendingProps = r, l.type = n.type, l.flags = 0, l.subtreeFlags = 0, l.deletions = null), l.flags = n.flags & 14680064, l.childLanes = n.childLanes, l.lanes = n.lanes, l.child = n.child, l.memoizedProps = n.memoizedProps, l.memoizedState = n.memoizedState, l.updateQueue = n.updateQueue, r = n.dependencies, l.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, l.sibling = n.sibling, l.index = n.index, l.ref = n.ref, l;
  }
  function Jc(n, r, l, o, c, d) {
    var m = 2;
    if (o = n, typeof n == "function")
      Qd(n) && (m = 1);
    else if (typeof n == "string")
      m = 5;
    else
      e:
        switch (n) {
          case Ue:
            return vu(l.children, c, d, r);
          case qt:
            m = 8, c |= 8;
            break;
          case Dn:
            return n = ga(12, l, r, c | 2), n.elementType = Dn, n.lanes = d, n;
          case Ye:
            return n = ga(13, l, r, c), n.elementType = Ye, n.lanes = d, n;
          case at:
            return n = ga(19, l, r, c), n.elementType = at, n.lanes = d, n;
          case ve:
            return Rs(l, c, d, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Nt:
                  m = 10;
                  break e;
                case Et:
                  m = 9;
                  break e;
                case En:
                  m = 11;
                  break e;
                case Yt:
                  m = 14;
                  break e;
                case gt:
                  m = 16, o = null;
                  break e;
              }
            throw Error(U(130, n == null ? n : typeof n, ""));
        }
    return r = ga(m, l, r, c), r.elementType = n, r.type = o, r.lanes = d, r;
  }
  function vu(n, r, l, o) {
    return n = ga(7, n, o, r), n.lanes = l, n;
  }
  function Rs(n, r, l, o) {
    return n = ga(22, n, o, r), n.elementType = ve, n.lanes = l, n.stateNode = { isHidden: !1 }, n;
  }
  function Ts(n, r, l) {
    return n = ga(6, n, null, r), n.lanes = l, n;
  }
  function hu(n, r, l) {
    return r = ga(4, n.children !== null ? n.children : [], n.key, r), r.lanes = l, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function py(n, r, l, o, c) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = zu(0), this.expirationTimes = zu(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = zu(0), this.identifierPrefix = o, this.onRecoverableError = c, this.mutableSourceEagerHydrationData = null;
  }
  function ef(n, r, l, o, c, d, m, E, T) {
    return n = new py(n, r, l, E, T), r === 1 ? (r = 1, d === !0 && (r |= 8)) : r = 0, d = ga(3, null, null, r), n.current = d, d.stateNode = n, d.memoizedState = { element: o, isDehydrated: l, cache: null, transitions: null, pendingSuspenseBoundaries: null }, Sd(d), n;
  }
  function eh(n, r, l) {
    var o = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: qe, key: o == null ? null : "" + o, children: n, containerInfo: r, implementation: l };
  }
  function Wd(n) {
    if (!n)
      return Za;
    n = n._reactInternals;
    e: {
      if (aa(n) !== n || n.tag !== 1)
        throw Error(U(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Qt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(U(171));
    }
    if (n.tag === 1) {
      var l = n.type;
      if (Qt(l))
        return rs(n, l, r);
    }
    return r;
  }
  function th(n, r, l, o, c, d, m, E, T) {
    return n = ef(l, o, !0, n, c, d, m, E, T), n.context = Wd(null), l = n.current, o = ar(), c = gn(l), d = xi(o, c), d.callback = r != null ? r : null, hl(l, d, c), n.current.lanes = c, vi(n, c, o), lr(n, o), n;
  }
  function ws(n, r, l, o) {
    var c = r.current, d = ar(), m = gn(c);
    return l = Wd(l), r.context === null ? r.context = l : r.pendingContext = l, r = xi(d, m), r.payload = { element: n }, o = o === void 0 ? null : o, o !== null && (r.callback = o), n = hl(c, r, m), n !== null && (ir(n, c, m, d), gc(n, c, m)), m;
  }
  function tf(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function nh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var l = n.retryLane;
      n.retryLane = l !== 0 && l < r ? l : r;
    }
  }
  function Gd(n, r) {
    nh(n, r), (n = n.alternate) && nh(n, r);
  }
  function rh() {
    return null;
  }
  var qd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function nf(n) {
    this._internalRoot = n;
  }
  Li.prototype.render = nf.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(U(409));
    ws(n, r, null, null);
  }, Li.prototype.unmount = nf.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Tl(function() {
        ws(null, n, null, null);
      }), r[Ri] = null;
    }
  };
  function Li(n) {
    this._internalRoot = n;
  }
  Li.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = Hu();
      n = { blockedOn: null, target: n, priority: r };
      for (var l = 0; l < Ct.length && r !== 0 && r < Ct[l].priority; l++)
        ;
      Ct.splice(l, 0, n), l === 0 && Zs(n);
    }
  };
  function Xd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function rf(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function ah() {
  }
  function vy(n, r, l, o, c) {
    if (c) {
      if (typeof o == "function") {
        var d = o;
        o = function() {
          var z = tf(m);
          d.call(z);
        };
      }
      var m = th(r, o, n, 0, null, !1, !1, "", ah);
      return n._reactRootContainer = m, n[Ri] = m.current, Wu(n.nodeType === 8 ? n.parentNode : n), Tl(), m;
    }
    for (; c = n.lastChild; )
      n.removeChild(c);
    if (typeof o == "function") {
      var E = o;
      o = function() {
        var z = tf(T);
        E.call(z);
      };
    }
    var T = ef(n, 0, !1, null, null, !1, !1, "", ah);
    return n._reactRootContainer = T, n[Ri] = T.current, Wu(n.nodeType === 8 ? n.parentNode : n), Tl(function() {
      ws(r, T, l, o);
    }), T;
  }
  function af(n, r, l, o, c) {
    var d = l._reactRootContainer;
    if (d) {
      var m = d;
      if (typeof c == "function") {
        var E = c;
        c = function() {
          var T = tf(m);
          E.call(T);
        };
      }
      ws(r, m, n, c);
    } else
      m = vy(l, r, n, c, o);
    return tf(m);
  }
  jl = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var l = za(r.pendingLanes);
          l !== 0 && (qa(r, l | 1), lr(r, It()), (Ke & 6) === 0 && (fo = It() + 500, Mr()));
        }
        break;
      case 13:
        Tl(function() {
          var o = wi(n, 1);
          if (o !== null) {
            var c = ar();
            ir(o, n, 1, c);
          }
        }), Gd(n, 1);
    }
  }, Au = function(n) {
    if (n.tag === 13) {
      var r = wi(n, 134217728);
      if (r !== null) {
        var l = ar();
        ir(r, n, 134217728, l);
      }
      Gd(n, 134217728);
    }
  }, st = function(n) {
    if (n.tag === 13) {
      var r = gn(n), l = wi(n, r);
      if (l !== null) {
        var o = ar();
        ir(l, n, r, o);
      }
      Gd(n, r);
    }
  }, Hu = function() {
    return ht;
  }, Fu = function(n, r) {
    var l = ht;
    try {
      return ht = n, r();
    } finally {
      ht = l;
    }
  }, ra = function(n, r, l) {
    switch (r) {
      case "input":
        if (kn(n, l), r = l.name, l.type === "radio" && r != null) {
          for (l = n; l.parentNode; )
            l = l.parentNode;
          for (l = l.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < l.length; r++) {
            var o = l[r];
            if (o !== n && o.form === n.form) {
              var c = Re(o);
              if (!c)
                throw Error(U(90));
              _a(o), kn(o, c);
            }
          }
        }
        break;
      case "textarea":
        ka(n, l);
        break;
      case "select":
        r = l.value, r != null && Tr(n, !!l.multiple, r, !1);
    }
  }, Is = ho, Qs = Tl;
  var hy = { usingClientEntryPoint: !1, Events: [ns, Gu, Re, pi, Du, ho] }, yo = { findFiberByHostInstance: oa, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, my = { bundleType: yo.bundleType, version: yo.version, rendererPackageName: yo.rendererPackageName, rendererConfig: yo.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: rt.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = Ws(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: yo.findFiberByHostInstance || rh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var lf = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!lf.isDisabled && lf.supportsFiber)
      try {
        qi = lf.inject(my), _r = lf;
      } catch {
      }
  }
  return wa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = hy, wa.createPortal = function(n, r) {
    var l = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Xd(r))
      throw Error(U(200));
    return eh(n, r, null, l);
  }, wa.createRoot = function(n, r) {
    if (!Xd(n))
      throw Error(U(299));
    var l = !1, o = "", c = qd;
    return r != null && (r.unstable_strictMode === !0 && (l = !0), r.identifierPrefix !== void 0 && (o = r.identifierPrefix), r.onRecoverableError !== void 0 && (c = r.onRecoverableError)), r = ef(n, 1, !1, null, null, l, !1, o, c), n[Ri] = r.current, Wu(n.nodeType === 8 ? n.parentNode : n), new nf(r);
  }, wa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(U(188)) : (n = Object.keys(n).join(","), Error(U(268, n)));
    return n = Ws(r), n = n === null ? null : n.stateNode, n;
  }, wa.flushSync = function(n) {
    return Tl(n);
  }, wa.hydrate = function(n, r, l) {
    if (!rf(r))
      throw Error(U(200));
    return af(null, n, r, !0, l);
  }, wa.hydrateRoot = function(n, r, l) {
    if (!Xd(n))
      throw Error(U(405));
    var o = l != null && l.hydratedSources || null, c = !1, d = "", m = qd;
    if (l != null && (l.unstable_strictMode === !0 && (c = !0), l.identifierPrefix !== void 0 && (d = l.identifierPrefix), l.onRecoverableError !== void 0 && (m = l.onRecoverableError)), r = th(r, null, n, 1, l != null ? l : null, c, !1, d, m), n[Ri] = r.current, Wu(n), o)
      for (n = 0; n < o.length; n++)
        l = o[n], c = l._getVersion, c = c(l._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [l, c] : r.mutableSourceEagerHydrationData.push(
          l,
          c
        );
    return new Li(r);
  }, wa.render = function(n, r, l) {
    if (!rf(r))
      throw Error(U(200));
    return af(null, n, r, !1, l);
  }, wa.unmountComponentAtNode = function(n) {
    if (!rf(n))
      throw Error(U(40));
    return n._reactRootContainer ? (Tl(function() {
      af(null, null, n, !1, function() {
        n._reactRootContainer = null, n[Ri] = null;
      });
    }), !0) : !1;
  }, wa.unstable_batchedUpdates = ho, wa.unstable_renderSubtreeIntoContainer = function(n, r, l, o) {
    if (!rf(l))
      throw Error(U(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(U(38));
    return af(n, r, l, !1, o);
  }, wa.version = "18.2.0-next-9e3b772b8-20220608", wa;
}
var xa = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var K1;
function Q_() {
  return K1 || (K1 = 1, {}.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var Y = Ys.exports, q = J1(), U = Y.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, nn = !1;
    function rn(e) {
      nn = e;
    }
    function Je(e) {
      if (!nn) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        an("warn", e, a);
      }
    }
    function S(e) {
      if (!nn) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        an("error", e, a);
      }
    }
    function an(e, t, a) {
      {
        var i = U.ReactDebugCurrentFrame, u = i.getStackAddendum();
        u !== "" && (t += "%s", a = a.concat([u]));
        var s = a.map(function(f) {
          return String(f);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var Oe = 0, me = 1, Ht = 2, oe = 3, ge = 4, ue = 5, Fe = 6, vt = 7, nt = 8, Kn = 9, Gt = 10, Be = 11, rt = 12, Te = 13, qe = 14, Ue = 15, qt = 16, Dn = 17, Nt = 18, Et = 19, En = 21, Ye = 22, at = 23, Yt = 24, gt = 25, ve = !0, X = !1, Ee = !1, R = !1, B = !1, ae = !0, Ve = !1, Me = !1, ft = !0, Xe = !0, dt = !0, et = /* @__PURE__ */ new Set(), zt = {}, fi = {};
    function Er(e, t) {
      _a(e, t), _a(e + "Capture", t);
    }
    function _a(e, t) {
      zt[e] && S("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), zt[e] = t;
      {
        var a = e.toLowerCase();
        fi[a] = e, e === "onDoubleClick" && (fi.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        et.add(t[i]);
    }
    var fn = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", Zn = Object.prototype.hasOwnProperty;
    function Cr(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Rr(e) {
      try {
        return kn(e), !1;
      } catch {
        return !0;
      }
    }
    function kn(e) {
      return "" + e;
    }
    function Da(e, t) {
      if (Rr(e))
        return S("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cr(e)), kn(e);
    }
    function di(e) {
      if (Rr(e))
        return S("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", Cr(e)), kn(e);
    }
    function Jn(e, t) {
      if (Rr(e))
        return S("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cr(e)), kn(e);
    }
    function Tr(e, t) {
      if (Rr(e))
        return S("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, Cr(e)), kn(e);
    }
    function Ia(e) {
      if (Rr(e))
        return S("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", Cr(e)), kn(e);
    }
    function wr(e) {
      if (Rr(e))
        return S("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", Cr(e)), kn(e);
    }
    var ka = 0, xr = 1, Oa = 2, Fn = 3, Yr = 4, Al = 5, Qa = 6, J = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", Ce = J + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", Ie = new RegExp("^[" + J + "][" + Ce + "]*$"), wt = {}, bt = {};
    function Cn(e) {
      return Zn.call(bt, e) ? !0 : Zn.call(wt, e) ? !1 : Ie.test(e) ? (bt[e] = !0, !0) : (wt[e] = !0, S("Invalid attribute name: `%s`", e), !1);
    }
    function dn(e, t, a) {
      return t !== null ? t.type === ka : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function br(e, t, a, i) {
      if (a !== null && a.type === ka)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var u = e.toLowerCase().slice(0, 5);
          return u !== "data-" && u !== "aria-";
        }
        default:
          return !1;
      }
    }
    function Ft(e, t, a, i) {
      if (t === null || typeof t > "u" || br(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case Fn:
            return !t;
          case Yr:
            return t === !1;
          case Al:
            return isNaN(t);
          case Qa:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function ra(e) {
      return Ut.hasOwnProperty(e) ? Ut[e] : null;
    }
    function Xt(e, t, a, i, u, s, f) {
      this.acceptsBooleans = t === Oa || t === Fn || t === Yr, this.attributeName = i, this.attributeNamespace = u, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = f;
    }
    var Ut = {}, Hl = [
      "children",
      "dangerouslySetInnerHTML",
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    Hl.forEach(function(e) {
      Ut[e] = new Xt(
        e,
        ka,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      Ut[t] = new Xt(
        t,
        xr,
        !1,
        a,
        null,
        !1,
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        Oa,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        Oa,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      "itemScope"
    ].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        Fn,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    }), [
      "checked",
      "multiple",
      "muted",
      "selected"
    ].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        Fn,
        !0,
        e,
        null,
        !1,
        !1
      );
    }), [
      "capture",
      "download"
    ].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        Yr,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
    ].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        Qa,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        Al,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var pi = /[\-\:]([a-z])/g, Du = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
    ].forEach(function(e) {
      var t = e.replace(pi, Du);
      Ut[t] = new Xt(
        t,
        xr,
        !1,
        e,
        null,
        !1,
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
    ].forEach(function(e) {
      var t = e.replace(pi, Du);
      Ut[t] = new Xt(
        t,
        xr,
        !1,
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
    ].forEach(function(e) {
      var t = e.replace(pi, Du);
      Ut[t] = new Xt(
        t,
        xr,
        !1,
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        xr,
        !1,
        e.toLowerCase(),
        null,
        !1,
        !1
      );
    });
    var Is = "xlinkHref";
    Ut[Is] = new Xt(
      "xlinkHref",
      xr,
      !1,
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      Ut[e] = new Xt(
        e,
        xr,
        !1,
        e.toLowerCase(),
        null,
        !0,
        !0
      );
    });
    var Qs = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, ku = !1;
    function Ao(e) {
      !ku && Qs.test(e) && (ku = !0, S("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function La(e, t, a, i) {
      if (i.mustUseProperty) {
        var u = i.propertyName;
        return e[u];
      } else {
        Da(a, t), i.sanitizeURL && Ao("" + a);
        var s = i.attributeName, f = null;
        if (i.type === Yr) {
          if (e.hasAttribute(s)) {
            var p = e.getAttribute(s);
            return p === "" ? !0 : Ft(t, a, i, !1) ? p : p === "" + a ? a : p;
          }
        } else if (e.hasAttribute(s)) {
          if (Ft(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === Fn)
            return a;
          f = e.getAttribute(s);
        }
        return Ft(t, a, i, !1) ? f === null ? a : f : f === "" + a ? a : f;
      }
    }
    function $i(e, t, a, i) {
      {
        if (!Cn(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var u = e.getAttribute(t);
        return Da(a, t), u === "" + a ? a : u;
      }
    }
    function Wa(e, t, a, i) {
      var u = ra(t);
      if (!dn(t, u, i)) {
        if (Ft(t, a, u, i) && (a = null), i || u === null) {
          if (Cn(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (Da(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var f = u.mustUseProperty;
        if (f) {
          var p = u.propertyName;
          if (a === null) {
            var v = u.type;
            e[p] = v === Fn ? !1 : "";
          } else
            e[p] = a;
          return;
        }
        var y = u.attributeName, g = u.attributeNamespace;
        if (a === null)
          e.removeAttribute(y);
        else {
          var b = u.type, w;
          b === Fn || b === Yr && a === !0 ? w = "" : (Da(a, y), w = "" + a, u.sanitizeURL && Ao(w.toString())), g ? e.setAttributeNS(g, y, w) : e.setAttribute(y, w);
        }
      }
    }
    var Yi = Symbol.for("react.element"), Ir = Symbol.for("react.portal"), Ma = Symbol.for("react.fragment"), Ii = Symbol.for("react.strict_mode"), Qi = Symbol.for("react.profiler"), Ou = Symbol.for("react.provider"), Ho = Symbol.for("react.context"), ln = Symbol.for("react.forward_ref"), aa = Symbol.for("react.suspense"), Fl = Symbol.for("react.suspense_list"), Wi = Symbol.for("react.memo"), jn = Symbol.for("react.lazy"), Ws = Symbol.for("react.scope"), Gs = Symbol.for("react.debug_trace_mode"), Fo = Symbol.for("react.offscreen"), qs = Symbol.for("react.legacy_hidden"), Hf = Symbol.for("react.cache"), Ff = Symbol.for("react.tracing_marker"), It = Symbol.iterator, jf = "@@iterator";
    function Na(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = It && e[It] || e[jf];
      return typeof t == "function" ? t : null;
    }
    var Qe = Object.assign, Ga = 0, Gi, Lu, qi, _r, jo, ur, Vo;
    function Bo() {
    }
    Bo.__reactDisabledLog = !0;
    function Xs() {
      {
        if (Ga === 0) {
          Gi = console.log, Lu = console.info, qi = console.warn, _r = console.error, jo = console.group, ur = console.groupCollapsed, Vo = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: Bo,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ga++;
      }
    }
    function Mu() {
      {
        if (Ga--, Ga === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: Qe({}, e, {
              value: Gi
            }),
            info: Qe({}, e, {
              value: Lu
            }),
            warn: Qe({}, e, {
              value: qi
            }),
            error: Qe({}, e, {
              value: _r
            }),
            group: Qe({}, e, {
              value: jo
            }),
            groupCollapsed: Qe({}, e, {
              value: ur
            }),
            groupEnd: Qe({}, e, {
              value: Vo
            })
          });
        }
        Ga < 0 && S("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var Xi = U.ReactCurrentDispatcher, za;
    function or(e, t, a) {
      {
        if (za === void 0)
          try {
            throw Error();
          } catch (u) {
            var i = u.stack.trim().match(/\n( *(at )?)/);
            za = i && i[1] || "";
          }
        return `
` + za + e;
      }
    }
    var Ki = !1, Zi;
    {
      var Ji = typeof WeakMap == "function" ? WeakMap : Map;
      Zi = new Ji();
    }
    function Nu(e, t) {
      if (!e || Ki)
        return "";
      {
        var a = Zi.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Ki = !0;
      var u = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = Xi.current, Xi.current = null, Xs();
      try {
        if (t) {
          var f = function() {
            throw Error();
          };
          if (Object.defineProperty(f.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(f, []);
            } catch (N) {
              i = N;
            }
            Reflect.construct(e, [], f);
          } else {
            try {
              f.call();
            } catch (N) {
              i = N;
            }
            e.call(f.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (N) {
            i = N;
          }
          e();
        }
      } catch (N) {
        if (N && i && typeof N.stack == "string") {
          for (var p = N.stack.split(`
`), v = i.stack.split(`
`), y = p.length - 1, g = v.length - 1; y >= 1 && g >= 0 && p[y] !== v[g]; )
            g--;
          for (; y >= 1 && g >= 0; y--, g--)
            if (p[y] !== v[g]) {
              if (y !== 1 || g !== 1)
                do
                  if (y--, g--, g < 0 || p[y] !== v[g]) {
                    var b = `
` + p[y].replace(" at new ", " at ");
                    return e.displayName && b.includes("<anonymous>") && (b = b.replace("<anonymous>", e.displayName)), typeof e == "function" && Zi.set(e, b), b;
                  }
                while (y >= 1 && g >= 0);
              break;
            }
        }
      } finally {
        Ki = !1, Xi.current = s, Mu(), Error.prepareStackTrace = u;
      }
      var w = e ? e.displayName || e.name : "", L = w ? or(w) : "";
      return typeof e == "function" && Zi.set(e, L), L;
    }
    function zu(e, t, a) {
      return Nu(e, !0);
    }
    function vi(e, t, a) {
      return Nu(e, !1);
    }
    function Vf(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function qa(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return Nu(e, Vf(e));
      if (typeof e == "string")
        return or(e);
      switch (e) {
        case aa:
          return or("Suspense");
        case Fl:
          return or("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case ln:
            return vi(e.render);
          case Wi:
            return qa(e.type, t, a);
          case jn: {
            var i = e, u = i._payload, s = i._init;
            try {
              return qa(s(u), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function ht(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case ue:
          return or(e.type);
        case qt:
          return or("Lazy");
        case Te:
          return or("Suspense");
        case Et:
          return or("SuspenseList");
        case Oe:
        case Ht:
        case Ue:
          return vi(e.type);
        case Be:
          return vi(e.type.render);
        case me:
          return zu(e.type);
        default:
          return "";
      }
    }
    function Uu(e) {
      try {
        var t = "", a = e;
        do
          t += ht(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function jl(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var u = t.displayName || t.name || "";
      return u !== "" ? a + "(" + u + ")" : a;
    }
    function Au(e) {
      return e.displayName || "Context";
    }
    function st(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && S("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case Ma:
          return "Fragment";
        case Ir:
          return "Portal";
        case Qi:
          return "Profiler";
        case Ii:
          return "StrictMode";
        case aa:
          return "Suspense";
        case Fl:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Ho:
            var t = e;
            return Au(t) + ".Consumer";
          case Ou:
            var a = e;
            return Au(a._context) + ".Provider";
          case ln:
            return jl(e, e.render, "ForwardRef");
          case Wi:
            var i = e.displayName || null;
            return i !== null ? i : st(e.type) || "Memo";
          case jn: {
            var u = e, s = u._payload, f = u._init;
            try {
              return st(f(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function Hu(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function Fu(e) {
      return e.displayName || "Context";
    }
    function Ae(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Yt:
          return "Cache";
        case Kn:
          var i = a;
          return Fu(i) + ".Consumer";
        case Gt:
          var u = a;
          return Fu(u._context) + ".Provider";
        case Nt:
          return "DehydratedFragment";
        case Be:
          return Hu(a, a.render, "ForwardRef");
        case vt:
          return "Fragment";
        case ue:
          return a;
        case ge:
          return "Portal";
        case oe:
          return "Root";
        case Fe:
          return "Text";
        case qt:
          return st(a);
        case nt:
          return a === Ii ? "StrictMode" : "Mode";
        case Ye:
          return "Offscreen";
        case rt:
          return "Profiler";
        case En:
          return "Scope";
        case Te:
          return "Suspense";
        case Et:
          return "SuspenseList";
        case gt:
          return "TracingMarker";
        case me:
        case Oe:
        case Dn:
        case Ht:
        case qe:
        case Ue:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var Vl = U.ReactDebugCurrentFrame, Kt = null, Dr = !1;
    function sr() {
      {
        if (Kt === null)
          return null;
        var e = Kt._debugOwner;
        if (e !== null && typeof e < "u")
          return Ae(e);
      }
      return null;
    }
    function el() {
      return Kt === null ? "" : Uu(Kt);
    }
    function un() {
      Vl.getCurrentStack = null, Kt = null, Dr = !1;
    }
    function Ct(e) {
      Vl.getCurrentStack = e === null ? null : el, Kt = e, Dr = !1;
    }
    function Ks() {
      return Kt;
    }
    function kr(e) {
      Dr = e;
    }
    function On(e) {
      return "" + e;
    }
    function Xa(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return wr(e), e;
        default:
          return "";
      }
    }
    var Zs = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function hi(e, t) {
      Zs[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || S("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || S("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function tl(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function Js(e) {
      return e._valueTracker;
    }
    function ia(e) {
      e._valueTracker = null;
    }
    function nl(e) {
      var t = "";
      return e && (tl(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function rl(e) {
      var t = tl(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      wr(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var u = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return u.call(this);
          },
          set: function(p) {
            wr(p), i = "" + p, s.call(this, p);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var f = {
          getValue: function() {
            return i;
          },
          setValue: function(p) {
            wr(p), i = "" + p;
          },
          stopTracking: function() {
            ia(e), delete e[t];
          }
        };
        return f;
      }
    }
    function la(e) {
      Js(e) || (e._valueTracker = rl(e));
    }
    function ju(e) {
      if (!e)
        return !1;
      var t = Js(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = nl(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function al(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var il = !1, Bl = !1, Vu = !1, Po = !1;
    function Ua(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function h(e, t) {
      var a = e, i = t.checked, u = Qe({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i != null ? i : a._wrapperState.initialChecked
      });
      return u;
    }
    function C(e, t) {
      hi("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !Bl && (S("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", sr() || "A component", t.type), Bl = !0), t.value !== void 0 && t.defaultValue !== void 0 && !il && (S("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", sr() || "A component", t.type), il = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Xa(t.value != null ? t.value : i),
        controlled: Ua(t)
      };
    }
    function M(e, t) {
      var a = e, i = t.checked;
      i != null && Wa(a, "checked", i, !1);
    }
    function A(e, t) {
      var a = e;
      {
        var i = Ua(t);
        !a._wrapperState.controlled && i && !Po && (S("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Po = !0), a._wrapperState.controlled && !i && !Vu && (S("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Vu = !0);
      }
      M(e, t);
      var u = Xa(t.value), s = t.type;
      if (u != null)
        s === "number" ? (u === 0 && a.value === "" || a.value != u) && (a.value = On(u)) : a.value !== On(u) && (a.value = On(u));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? xe(a, t.type, u) : t.hasOwnProperty("defaultValue") && xe(a, t.type, Xa(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function W(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var u = t.type, s = u === "submit" || u === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var f = On(i._wrapperState.initialValue);
        a || f !== i.value && (i.value = f), i.defaultValue = f;
      }
      var p = i.name;
      p !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, p !== "" && (i.name = p);
    }
    function _e(e, t) {
      var a = e;
      A(a, t), ee(a, t);
    }
    function ee(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        Da(a, "name");
        for (var u = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < u.length; s++) {
          var f = u[s];
          if (!(f === e || f.form !== e.form)) {
            var p = Ch(f);
            if (!p)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            ju(f), A(f, p);
          }
        }
      }
    }
    function xe(e, t, a) {
      (t !== "number" || al(e.ownerDocument) !== e) && (a == null ? e.defaultValue = On(e._wrapperState.initialValue) : e.defaultValue !== On(a) && (e.defaultValue = On(a)));
    }
    var We = !1, ct = !1, kt = !1;
    function xt(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? Y.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || ct || (ct = !0, S("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (kt || (kt = !0, S("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !We && (S("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), We = !0);
    }
    function Ot(e, t) {
      t.value != null && e.setAttribute("value", On(Xa(t.value)));
    }
    var At = Array.isArray;
    function tt(e) {
      return At(e);
    }
    var mi;
    mi = !1;
    function Bu() {
      var e = sr();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var $o = ["value", "defaultValue"];
    function Bf(e) {
      {
        hi("select", e);
        for (var t = 0; t < $o.length; t++) {
          var a = $o[t];
          if (e[a] != null) {
            var i = tt(e[a]);
            e.multiple && !i ? S("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, Bu()) : !e.multiple && i && S("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, Bu());
          }
        }
      }
    }
    function Aa(e, t, a, i) {
      var u = e.options;
      if (t) {
        for (var s = a, f = {}, p = 0; p < s.length; p++)
          f["$" + s[p]] = !0;
        for (var v = 0; v < u.length; v++) {
          var y = f.hasOwnProperty("$" + u[v].value);
          u[v].selected !== y && (u[v].selected = y), y && i && (u[v].defaultSelected = !0);
        }
      } else {
        for (var g = On(Xa(a)), b = null, w = 0; w < u.length; w++) {
          if (u[w].value === g) {
            u[w].selected = !0, i && (u[w].defaultSelected = !0);
            return;
          }
          b === null && !u[w].disabled && (b = u[w]);
        }
        b !== null && (b.selected = !0);
      }
    }
    function Yo(e, t) {
      return Qe({}, t, {
        value: void 0
      });
    }
    function Io(e, t) {
      var a = e;
      Bf(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !mi && (S("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), mi = !0);
    }
    function Pf(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Aa(a, !!t.multiple, i, !1) : t.defaultValue != null && Aa(a, !!t.multiple, t.defaultValue, !0);
    }
    function Hm(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var u = t.value;
      u != null ? Aa(a, !!t.multiple, u, !1) : i !== !!t.multiple && (t.defaultValue != null ? Aa(a, !!t.multiple, t.defaultValue, !0) : Aa(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function Fm(e, t) {
      var a = e, i = t.value;
      i != null && Aa(a, !!t.multiple, i, !1);
    }
    var $f = !1;
    function Yf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = Qe({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: On(a._wrapperState.initialValue)
      });
      return i;
    }
    function Xp(e, t) {
      var a = e;
      hi("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !$f && (S("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", sr() || "A component"), $f = !0);
      var i = t.value;
      if (i == null) {
        var u = t.children, s = t.defaultValue;
        if (u != null) {
          S("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (tt(u)) {
              if (u.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              u = u[0];
            }
            s = u;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Xa(i)
      };
    }
    function Kp(e, t) {
      var a = e, i = Xa(t.value), u = Xa(t.defaultValue);
      if (i != null) {
        var s = On(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      u != null && (a.defaultValue = On(u));
    }
    function Zp(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function If(e, t) {
      Kp(e, t);
    }
    var yi = "http://www.w3.org/1999/xhtml", jm = "http://www.w3.org/1998/Math/MathML", Qf = "http://www.w3.org/2000/svg";
    function ec(e) {
      switch (e) {
        case "svg":
          return Qf;
        case "math":
          return jm;
        default:
          return yi;
      }
    }
    function Wf(e, t) {
      return e == null || e === yi ? ec(t) : e === Qf && t === "foreignObject" ? yi : e;
    }
    var Vm = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, u) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, u);
        });
      } : e;
    }, tc, Jp = Vm(function(e, t) {
      if (e.namespaceURI === Qf && !("innerHTML" in e)) {
        tc = tc || document.createElement("div"), tc.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = tc.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), Or = 1, gi = 3, mn = 8, Ha = 9, Pl = 11, nc = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === gi) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, ev = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, Pu = {
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
    };
    function tv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var nv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(Pu).forEach(function(e) {
      nv.forEach(function(t) {
        Pu[tv(t, e)] = Pu[e];
      });
    });
    function rc(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(Pu.hasOwnProperty(e) && Pu[e]) ? t + "px" : (Tr(t, e), ("" + t).trim());
    }
    var $u = /([A-Z])/g, Bm = /^ms-/;
    function Pm(e) {
      return e.replace($u, "-$1").toLowerCase().replace(Bm, "-ms-");
    }
    var rv = function() {
    };
    {
      var av = /^(?:webkit|moz|o)[A-Z]/, iv = /^-ms-/, Qo = /-(.)/g, Yu = /;\s*$/, Iu = {}, Qu = {}, lv = !1, Gf = !1, qf = function(e) {
        return e.replace(Qo, function(t, a) {
          return a.toUpperCase();
        });
      }, Xf = function(e) {
        Iu.hasOwnProperty(e) && Iu[e] || (Iu[e] = !0, S(
          "Unsupported style property %s. Did you mean %s?",
          e,
          qf(e.replace(iv, "ms-"))
        ));
      }, uv = function(e) {
        Iu.hasOwnProperty(e) && Iu[e] || (Iu[e] = !0, S("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, ov = function(e, t) {
        Qu.hasOwnProperty(t) && Qu[t] || (Qu[t] = !0, S(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(Yu, "")));
      }, sv = function(e, t) {
        lv || (lv = !0, S("`NaN` is an invalid value for the `%s` css style property.", e));
      }, $m = function(e, t) {
        Gf || (Gf = !0, S("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      rv = function(e, t) {
        e.indexOf("-") > -1 ? Xf(e) : av.test(e) ? uv(e) : Yu.test(t) && ov(e, t), typeof t == "number" && (isNaN(t) ? sv(e, t) : isFinite(t) || $m(e, t));
      };
    }
    var Ym = rv;
    function Im(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (!!e.hasOwnProperty(i)) {
            var u = e[i];
            if (u != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : Pm(i)) + ":", t += rc(i, u, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function cv(e, t) {
      var a = e.style;
      for (var i in t)
        if (!!t.hasOwnProperty(i)) {
          var u = i.indexOf("--") === 0;
          u || Ym(i, t[i]);
          var s = rc(i, t[i], u);
          i === "float" && (i = "cssFloat"), u ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Qm(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function ua(e) {
      var t = {};
      for (var a in e)
        for (var i = ev[a] || [a], u = 0; u < i.length; u++)
          t[i[u]] = a;
      return t;
    }
    function Wo(e, t) {
      {
        if (!t)
          return;
        var a = ua(e), i = ua(t), u = {};
        for (var s in a) {
          var f = a[s], p = i[s];
          if (p && f !== p) {
            var v = f + "," + p;
            if (u[v])
              continue;
            u[v] = !0, S("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Qm(e[f]) ? "Removing" : "Updating", f, p);
          }
        }
      }
    }
    var fv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
    }, dv = Qe({
      menuitem: !0
    }, fv), pv = "__html";
    function ac(e, t) {
      if (!!t) {
        if (dv[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(pv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && S("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function Si(e, t) {
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
    var ic = {
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, vv = {
      "aria-current": 0,
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      "aria-hidden": 0,
      "aria-invalid": 0,
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, Fa = {}, Kf = new RegExp("^(aria)-[" + Ce + "]*$"), Go = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
    function Zf(e, t) {
      {
        if (Zn.call(Fa, t) && Fa[t])
          return !0;
        if (Go.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = vv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return S("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), Fa[t] = !0, !0;
          if (t !== i)
            return S("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), Fa[t] = !0, !0;
        }
        if (Kf.test(t)) {
          var u = t.toLowerCase(), s = vv.hasOwnProperty(u) ? u : null;
          if (s == null)
            return Fa[t] = !0, !1;
          if (t !== s)
            return S("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), Fa[t] = !0, !0;
        }
      }
      return !0;
    }
    function hv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var u = Zf(e, i);
          u || a.push(i);
        }
        var s = a.map(function(f) {
          return "`" + f + "`";
        }).join(", ");
        a.length === 1 ? S("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && S("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function lc(e, t) {
      Si(e, t) || hv(e, t);
    }
    var $l = !1;
    function Jf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !$l && ($l = !0, e === "select" && t.multiple ? S("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : S("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var ed = function() {
    };
    {
      var Ln = {}, td = /^on./, mv = /^on[^A-Z]/, yv = new RegExp("^(aria)-[" + Ce + "]*$"), gv = new RegExp("^(aria)[A-Z][" + Ce + "]*$");
      ed = function(e, t, a, i) {
        if (Zn.call(Ln, t) && Ln[t])
          return !0;
        var u = t.toLowerCase();
        if (u === "onfocusin" || u === "onfocusout")
          return S("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), Ln[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, f = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var p = f.hasOwnProperty(u) ? f[u] : null;
          if (p != null)
            return S("Invalid event handler property `%s`. Did you mean `%s`?", t, p), Ln[t] = !0, !0;
          if (td.test(t))
            return S("Unknown event handler property `%s`. It will be ignored.", t), Ln[t] = !0, !0;
        } else if (td.test(t))
          return mv.test(t) && S("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), Ln[t] = !0, !0;
        if (yv.test(t) || gv.test(t))
          return !0;
        if (u === "innerhtml")
          return S("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), Ln[t] = !0, !0;
        if (u === "aria")
          return S("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), Ln[t] = !0, !0;
        if (u === "is" && a !== null && a !== void 0 && typeof a != "string")
          return S("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), Ln[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return S("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), Ln[t] = !0, !0;
        var v = ra(t), y = v !== null && v.type === ka;
        if (ic.hasOwnProperty(u)) {
          var g = ic[u];
          if (g !== t)
            return S("Invalid DOM property `%s`. Did you mean `%s`?", t, g), Ln[t] = !0, !0;
        } else if (!y && t !== u)
          return S("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, u), Ln[t] = !0, !0;
        return typeof a == "boolean" && br(t, a, v, !1) ? (a ? S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : S('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), Ln[t] = !0, !0) : y ? !0 : br(t, a, v, !1) ? (Ln[t] = !0, !1) : ((a === "false" || a === "true") && v !== null && v.type === Fn && (S("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), Ln[t] = !0), !0);
      };
    }
    var Sv = function(e, t, a) {
      {
        var i = [];
        for (var u in t) {
          var s = ed(e, u, t[u], a);
          s || i.push(u);
        }
        var f = i.map(function(p) {
          return "`" + p + "`";
        }).join(", ");
        i.length === 1 ? S("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e) : i.length > 1 && S("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", f, e);
      }
    };
    function Ev(e, t, a) {
      Si(e, t) || Sv(e, t, a);
    }
    var Ei = 1, qo = 1 << 1, Yl = 1 << 2, Wm = Ei | qo | Yl, Xo = null;
    function Ko(e) {
      Xo !== null && S("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), Xo = e;
    }
    function Gm() {
      Xo === null && S("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), Xo = null;
    }
    function Cv(e) {
      return e === Xo;
    }
    function uc(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === gi ? t.parentNode : t;
    }
    var Lt = null, ll = null, Ci = null;
    function Wu(e) {
      var t = Eo(e);
      if (!!t) {
        if (typeof Lt != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Ch(a);
          Lt(t.stateNode, t.type, i);
        }
      }
    }
    function Rv(e) {
      Lt = e;
    }
    function oc(e) {
      ll ? Ci ? Ci.push(e) : Ci = [e] : ll = e;
    }
    function Zo() {
      return ll !== null || Ci !== null;
    }
    function Jo() {
      if (!!ll) {
        var e = ll, t = Ci;
        if (ll = null, Ci = null, Wu(e), t)
          for (var a = 0; a < t.length; a++)
            Wu(t[a]);
      }
    }
    var Il = function(e, t) {
      return e(t);
    }, nd = function() {
    }, rd = !1;
    function qm() {
      var e = Zo();
      e && (nd(), Jo());
    }
    function ad(e, t, a) {
      if (rd)
        return e(t, a);
      rd = !0;
      try {
        return Il(e, t, a);
      } finally {
        rd = !1, qm();
      }
    }
    function sc(e, t, a) {
      Il = e, nd = a;
    }
    function cc(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function id(e, t, a) {
      switch (e) {
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
          return !!(a.disabled && cc(t));
        default:
          return !1;
      }
    }
    function Ql(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Ch(a);
      if (i === null)
        return null;
      var u = i[t];
      if (id(t, e.type, i))
        return null;
      if (u && typeof u != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof u + "` type.");
      return u;
    }
    var es = !1;
    if (fn)
      try {
        var Wl = {};
        Object.defineProperty(Wl, "passive", {
          get: function() {
            es = !0;
          }
        }), window.addEventListener("test", Wl, Wl), window.removeEventListener("test", Wl, Wl);
      } catch {
        es = !1;
      }
    function Tv(e, t, a, i, u, s, f, p, v) {
      var y = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, y);
      } catch (g) {
        this.onError(g);
      }
    }
    var ld = Tv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ud = document.createElement("react");
      ld = function(t, a, i, u, s, f, p, v, y) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var g = document.createEvent("Event"), b = !1, w = !0, L = window.event, N = Object.getOwnPropertyDescriptor(window, "event");
        function H() {
          ud.removeEventListener(F, we, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = L);
        }
        var ie = Array.prototype.slice.call(arguments, 3);
        function we() {
          b = !0, H(), a.apply(i, ie), w = !1;
        }
        var ye, ut = !1, Ze = !1;
        function D(k) {
          if (ye = k.error, ut = !0, ye === null && k.colno === 0 && k.lineno === 0 && (Ze = !0), k.defaultPrevented && ye != null && typeof ye == "object")
            try {
              ye._suppressLogging = !0;
            } catch {
            }
        }
        var F = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", D), ud.addEventListener(F, we, !1), g.initEvent(F, !1, !1), ud.dispatchEvent(g), N && Object.defineProperty(window, "event", N), b && w && (ut ? Ze && (ye = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : ye = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(ye)), window.removeEventListener("error", D), !b)
          return H(), Tv.apply(this, arguments);
      };
    }
    var Xm = ld, ul = !1, ja = null, ts = !1, ol = null, Ka = {
      onError: function(e) {
        ul = !0, ja = e;
      }
    };
    function Gl(e, t, a, i, u, s, f, p, v) {
      ul = !1, ja = null, Xm.apply(Ka, arguments);
    }
    function Ri(e, t, a, i, u, s, f, p, v) {
      if (Gl.apply(this, arguments), ul) {
        var y = sd();
        ts || (ts = !0, ol = y);
      }
    }
    function od() {
      if (ts) {
        var e = ol;
        throw ts = !1, ol = null, e;
      }
    }
    function Km() {
      return ul;
    }
    function sd() {
      if (ul) {
        var e = ja;
        return ul = !1, ja = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function oa(e) {
      return e._reactInternals;
    }
    function ns(e) {
      return e._reactInternals !== void 0;
    }
    function Gu(e, t) {
      e._reactInternals = t;
    }
    var Re = 0, sl = 1, jt = 2, Pe = 4, St = 16, Rt = 32, Za = 64, Ne = 128, on = 256, Lr = 512, sa = 1024, Qt = 2048, ca = 4096, cl = 8192, rs = 16384, fc = Qt | Pe | Za | Lr | sa | rs, wv = 32767, Qr = 32768, Mn = 65536, as = 131072, cd = 1048576, fd = 2097152, Mr = 4194304, fl = 8388608, Nr = 16777216, ql = 33554432, qu = Pe | sa | 0, zr = jt | Pe | St | Rt | Lr | ca | cl, er = Pe | Za | Lr | cl, fa = Qt | St, Vn = Mr | fl | fd, Ti = U.ReactCurrentOwner;
    function Wr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (jt | ca)) !== Re && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === oe ? a : null;
    }
    function dd(e) {
      if (e.tag === Te) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function dc(e) {
      return e.tag === oe ? e.stateNode.containerInfo : null;
    }
    function pd(e) {
      return Wr(e) === e;
    }
    function Gr(e) {
      {
        var t = Ti.current;
        if (t !== null && t.tag === me) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || S("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Ae(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var u = oa(e);
      return u ? Wr(u) === u : !1;
    }
    function Ur(e) {
      if (Wr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function Vt(e) {
      var t = e.alternate;
      if (!t) {
        var a = Wr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, u = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var f = s.alternate;
        if (f === null) {
          var p = s.return;
          if (p !== null) {
            i = u = p;
            continue;
          }
          break;
        }
        if (s.child === f.child) {
          for (var v = s.child; v; ) {
            if (v === i)
              return Ur(s), e;
            if (v === u)
              return Ur(s), t;
            v = v.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== u.return)
          i = s, u = f;
        else {
          for (var y = !1, g = s.child; g; ) {
            if (g === i) {
              y = !0, i = s, u = f;
              break;
            }
            if (g === u) {
              y = !0, u = s, i = f;
              break;
            }
            g = g.sibling;
          }
          if (!y) {
            for (g = f.child; g; ) {
              if (g === i) {
                y = !0, i = f, u = s;
                break;
              }
              if (g === u) {
                y = !0, u = f, i = s;
                break;
              }
              g = g.sibling;
            }
            if (!y)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== u)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== oe)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function da(e) {
      var t = Vt(e);
      return t !== null ? vd(t) : null;
    }
    function vd(e) {
      if (e.tag === ue || e.tag === Fe)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = vd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function xv(e) {
      var t = Vt(e);
      return t !== null ? pc(t) : null;
    }
    function pc(e) {
      if (e.tag === ue || e.tag === Fe)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== ge) {
          var a = pc(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var vc = q.unstable_scheduleCallback, bv = q.unstable_cancelCallback, hc = q.unstable_shouldYield, _v = q.unstable_requestPaint, Zt = q.unstable_now, hd = q.unstable_getCurrentPriorityLevel, mc = q.unstable_ImmediatePriority, qr = q.unstable_UserBlockingPriority, Ja = q.unstable_NormalPriority, yc = q.unstable_LowPriority, dl = q.unstable_IdlePriority, md = q.unstable_yieldValue, yd = q.unstable_setDisableYieldValue, pl = null, Nn = null, K = null, pn = !1, Bn = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function gd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return S("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        ft && (e = Qe({}, e, {
          getLaneLabelMap: hl,
          injectProfilingHooks: xi
        })), pl = t.inject(e), Nn = t;
      } catch (a) {
        S("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Dv(e, t) {
      if (Nn && typeof Nn.onScheduleFiberRoot == "function")
        try {
          Nn.onScheduleFiberRoot(pl, e, t);
        } catch (a) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", a));
        }
    }
    function wi(e, t) {
      if (Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Ne) === Ne;
          if (Xe) {
            var i;
            switch (t) {
              case tr:
                i = mc;
                break;
              case Pn:
                i = qr;
                break;
              case _i:
                i = Ja;
                break;
              case ps:
                i = dl;
                break;
              default:
                i = Ja;
                break;
            }
            Nn.onCommitFiberRoot(pl, e, i, a);
          }
        } catch (u) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", u));
        }
    }
    function vl(e) {
      if (Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(pl, e);
        } catch (t) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Sd(e) {
      if (Nn && typeof Nn.onCommitFiberUnmount == "function")
        try {
          Nn.onCommitFiberUnmount(pl, e);
        } catch (t) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function Rn(e) {
      if (typeof md == "function" && (yd(e), rn(e)), Nn && typeof Nn.setStrictMode == "function")
        try {
          Nn.setStrictMode(pl, e);
        } catch (t) {
          pn || (pn = !0, S("React instrumentation encountered an error: %s", t));
        }
    }
    function xi(e) {
      K = e;
    }
    function hl() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Bt; a++) {
          var i = Zm(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function gc(e) {
      K !== null && typeof K.markCommitStarted == "function" && K.markCommitStarted(e);
    }
    function Ed() {
      K !== null && typeof K.markCommitStopped == "function" && K.markCommitStopped();
    }
    function ml(e) {
      K !== null && typeof K.markComponentRenderStarted == "function" && K.markComponentRenderStarted(e);
    }
    function Xl() {
      K !== null && typeof K.markComponentRenderStopped == "function" && K.markComponentRenderStopped();
    }
    function kv(e) {
      K !== null && typeof K.markComponentPassiveEffectMountStarted == "function" && K.markComponentPassiveEffectMountStarted(e);
    }
    function Cd() {
      K !== null && typeof K.markComponentPassiveEffectMountStopped == "function" && K.markComponentPassiveEffectMountStopped();
    }
    function Sc(e) {
      K !== null && typeof K.markComponentPassiveEffectUnmountStarted == "function" && K.markComponentPassiveEffectUnmountStarted(e);
    }
    function Ov() {
      K !== null && typeof K.markComponentPassiveEffectUnmountStopped == "function" && K.markComponentPassiveEffectUnmountStopped();
    }
    function Lv(e) {
      K !== null && typeof K.markComponentLayoutEffectMountStarted == "function" && K.markComponentLayoutEffectMountStarted(e);
    }
    function Mv() {
      K !== null && typeof K.markComponentLayoutEffectMountStopped == "function" && K.markComponentLayoutEffectMountStopped();
    }
    function Ec(e) {
      K !== null && typeof K.markComponentLayoutEffectUnmountStarted == "function" && K.markComponentLayoutEffectUnmountStarted(e);
    }
    function Xu() {
      K !== null && typeof K.markComponentLayoutEffectUnmountStopped == "function" && K.markComponentLayoutEffectUnmountStopped();
    }
    function Cc(e, t, a) {
      K !== null && typeof K.markComponentErrored == "function" && K.markComponentErrored(e, t, a);
    }
    function Nv(e, t, a) {
      K !== null && typeof K.markComponentSuspended == "function" && K.markComponentSuspended(e, t, a);
    }
    function zv(e) {
      K !== null && typeof K.markLayoutEffectsStarted == "function" && K.markLayoutEffectsStarted(e);
    }
    function Ku() {
      K !== null && typeof K.markLayoutEffectsStopped == "function" && K.markLayoutEffectsStopped();
    }
    function Uv(e) {
      K !== null && typeof K.markPassiveEffectsStarted == "function" && K.markPassiveEffectsStarted(e);
    }
    function is() {
      K !== null && typeof K.markPassiveEffectsStopped == "function" && K.markPassiveEffectsStopped();
    }
    function Va(e) {
      K !== null && typeof K.markRenderStarted == "function" && K.markRenderStarted(e);
    }
    function ls() {
      K !== null && typeof K.markRenderYielded == "function" && K.markRenderYielded();
    }
    function Zu() {
      K !== null && typeof K.markRenderStopped == "function" && K.markRenderStopped();
    }
    function Kl(e) {
      K !== null && typeof K.markRenderScheduled == "function" && K.markRenderScheduled(e);
    }
    function Rd(e, t) {
      K !== null && typeof K.markForceUpdateScheduled == "function" && K.markForceUpdateScheduled(e, t);
    }
    function yl(e, t) {
      K !== null && typeof K.markStateUpdateScheduled == "function" && K.markStateUpdateScheduled(e, t);
    }
    var be = 0, Ge = 1, De = 2, Jt = 8, pa = 16, Rc = Math.clz32 ? Math.clz32 : Zl, Tc = Math.log, Td = Math.LN2;
    function Zl(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (Tc(t) / Td | 0) | 0;
    }
    var Bt = 31, j = 0, it = 0, ke = 1, ei = 2, Xr = 4, Jl = 8, Pt = 16, eu = 32, gl = 4194240, tu = 64, va = 128, Ar = 256, nu = 512, us = 1024, os = 2048, wc = 4096, xc = 8192, bc = 16384, _c = 32768, Dc = 65536, kc = 131072, Oc = 262144, Lc = 524288, ru = 1048576, Mc = 2097152, au = 130023424, bi = 4194304, Nc = 8388608, ss = 16777216, zc = 33554432, Uc = 67108864, wd = bi, Ju = 134217728, Ac = 268435455, eo = 268435456, Sl = 536870912, Hr = 1073741824;
    function Zm(e) {
      {
        if (e & ke)
          return "Sync";
        if (e & ei)
          return "InputContinuousHydration";
        if (e & Xr)
          return "InputContinuous";
        if (e & Jl)
          return "DefaultHydration";
        if (e & Pt)
          return "Default";
        if (e & eu)
          return "TransitionHydration";
        if (e & gl)
          return "Transition";
        if (e & au)
          return "Retry";
        if (e & Ju)
          return "SelectiveHydration";
        if (e & eo)
          return "IdleHydration";
        if (e & Sl)
          return "Idle";
        if (e & Hr)
          return "Offscreen";
      }
    }
    var Mt = -1, Hc = tu, Fc = bi;
    function to(e) {
      switch (yn(e)) {
        case ke:
          return ke;
        case ei:
          return ei;
        case Xr:
          return Xr;
        case Jl:
          return Jl;
        case Pt:
          return Pt;
        case eu:
          return eu;
        case tu:
        case va:
        case Ar:
        case nu:
        case us:
        case os:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case ru:
        case Mc:
          return e & gl;
        case bi:
        case Nc:
        case ss:
        case zc:
        case Uc:
          return e & au;
        case Ju:
          return Ju;
        case eo:
          return eo;
        case Sl:
          return Sl;
        case Hr:
          return Hr;
        default:
          return S("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function cs(e, t) {
      var a = e.pendingLanes;
      if (a === j)
        return j;
      var i = j, u = e.suspendedLanes, s = e.pingedLanes, f = a & Ac;
      if (f !== j) {
        var p = f & ~u;
        if (p !== j)
          i = to(p);
        else {
          var v = f & s;
          v !== j && (i = to(v));
        }
      } else {
        var y = a & ~u;
        y !== j ? i = to(y) : s !== j && (i = to(s));
      }
      if (i === j)
        return j;
      if (t !== j && t !== i && (t & u) === j) {
        var g = yn(i), b = yn(t);
        if (g >= b || g === Pt && (b & gl) !== j)
          return t;
      }
      (i & Xr) !== j && (i |= a & Pt);
      var w = e.entangledLanes;
      if (w !== j)
        for (var L = e.entanglements, N = i & w; N > 0; ) {
          var H = El(N), ie = 1 << H;
          i |= L[H], N &= ~ie;
        }
      return i;
    }
    function Av(e, t) {
      for (var a = e.eventTimes, i = Mt; t > 0; ) {
        var u = El(t), s = 1 << u, f = a[u];
        f > i && (i = f), t &= ~s;
      }
      return i;
    }
    function jc(e, t) {
      switch (e) {
        case ke:
        case ei:
        case Xr:
          return t + 250;
        case Jl:
        case Pt:
        case eu:
        case tu:
        case va:
        case Ar:
        case nu:
        case us:
        case os:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case ru:
        case Mc:
          return t + 5e3;
        case bi:
        case Nc:
        case ss:
        case zc:
        case Uc:
          return Mt;
        case Ju:
        case eo:
        case Sl:
        case Hr:
          return Mt;
        default:
          return S("Should have found matching lanes. This is a bug in React."), Mt;
      }
    }
    function Jm(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, u = e.pingedLanes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = El(f), v = 1 << p, y = s[p];
        y === Mt ? ((v & i) === j || (v & u) !== j) && (s[p] = jc(v, t)) : y <= t && (e.expiredLanes |= v), f &= ~v;
      }
    }
    function ey(e) {
      return to(e.pendingLanes);
    }
    function xd(e) {
      var t = e.pendingLanes & ~Hr;
      return t !== j ? t : t & Hr ? Hr : j;
    }
    function no(e) {
      return (e & ke) !== j;
    }
    function fs(e) {
      return (e & Ac) !== j;
    }
    function Vc(e) {
      return (e & au) === e;
    }
    function ty(e) {
      var t = ke | Xr | Pt;
      return (e & t) === j;
    }
    function Hv(e) {
      return (e & gl) === e;
    }
    function ds(e, t) {
      var a = ei | Xr | Jl | Pt;
      return (t & a) !== j;
    }
    function Fv(e, t) {
      return (t & e.expiredLanes) !== j;
    }
    function bd(e) {
      return (e & gl) !== j;
    }
    function _d() {
      var e = Hc;
      return Hc <<= 1, (Hc & gl) === j && (Hc = tu), e;
    }
    function ny() {
      var e = Fc;
      return Fc <<= 1, (Fc & au) === j && (Fc = bi), e;
    }
    function yn(e) {
      return e & -e;
    }
    function Tn(e) {
      return yn(e);
    }
    function El(e) {
      return 31 - Rc(e);
    }
    function Bc(e) {
      return El(e);
    }
    function Fr(e, t) {
      return (e & t) !== j;
    }
    function iu(e, t) {
      return (e & t) === t;
    }
    function $e(e, t) {
      return e | t;
    }
    function ro(e, t) {
      return e & ~t;
    }
    function Dd(e, t) {
      return e & t;
    }
    function jv(e) {
      return e;
    }
    function Vv(e, t) {
      return e !== it && e < t ? e : t;
    }
    function Pc(e) {
      for (var t = [], a = 0; a < Bt; a++)
        t.push(e);
      return t;
    }
    function lu(e, t, a) {
      e.pendingLanes |= t, t !== Sl && (e.suspendedLanes = j, e.pingedLanes = j);
      var i = e.eventTimes, u = Bc(t);
      i[u] = a;
    }
    function kd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var u = El(i), s = 1 << u;
        a[u] = Mt, i &= ~s;
      }
    }
    function Od(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function Ld(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = j, e.pingedLanes = j, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, u = e.eventTimes, s = e.expirationTimes, f = a; f > 0; ) {
        var p = El(f), v = 1 << p;
        i[p] = j, u[p] = Mt, s[p] = Mt, f &= ~v;
      }
    }
    function ao(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, u = a; u; ) {
        var s = El(u), f = 1 << s;
        f & t | i[s] & t && (i[s] |= t), u &= ~f;
      }
    }
    function ry(e, t) {
      var a = yn(t), i;
      switch (a) {
        case Xr:
          i = ei;
          break;
        case Pt:
          i = Jl;
          break;
        case tu:
        case va:
        case Ar:
        case nu:
        case us:
        case os:
        case wc:
        case xc:
        case bc:
        case _c:
        case Dc:
        case kc:
        case Oc:
        case Lc:
        case ru:
        case Mc:
        case bi:
        case Nc:
        case ss:
        case zc:
        case Uc:
          i = eu;
          break;
        case Sl:
          i = eo;
          break;
        default:
          i = it;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== it ? it : i;
    }
    function Md(e, t, a) {
      if (!!Bn)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var u = Bc(a), s = 1 << u, f = i[u];
          f.add(t), a &= ~s;
        }
    }
    function $c(e, t) {
      if (!!Bn)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var u = Bc(t), s = 1 << u, f = a[u];
          f.size > 0 && (f.forEach(function(p) {
            var v = p.alternate;
            (v === null || !i.has(v)) && i.add(p);
          }), f.clear()), t &= ~s;
        }
    }
    function Nd(e, t) {
      return null;
    }
    var tr = ke, Pn = Xr, _i = Pt, ps = Sl, uu = it;
    function ha() {
      return uu;
    }
    function wn(e) {
      uu = e;
    }
    function vs(e, t) {
      var a = uu;
      try {
        return uu = e, t();
      } finally {
        uu = a;
      }
    }
    function nr(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function ay(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function zd(e, t) {
      return e !== 0 && e < t;
    }
    function hs(e) {
      var t = yn(e);
      return zd(tr, t) ? zd(Pn, t) ? fs(t) ? _i : ps : Pn : tr;
    }
    function xn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var Bv;
    function se(e) {
      Bv = e;
    }
    function io(e) {
      Bv(e);
    }
    var ms;
    function Pv(e) {
      ms = e;
    }
    var $v;
    function ys(e) {
      $v = e;
    }
    var gs;
    function Ud(e) {
      gs = e;
    }
    var Ad;
    function Yv(e) {
      Ad = e;
    }
    var Yc = !1, lo = [], ti = null, Wt = null, zn = null, ma = /* @__PURE__ */ new Map(), uo = /* @__PURE__ */ new Map(), Di = [], Ba = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function Iv(e) {
      return Ba.indexOf(e) > -1;
    }
    function ni(e, t, a, i, u) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: u,
        targetContainers: [i]
      };
    }
    function Qv(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          ti = null;
          break;
        case "dragenter":
        case "dragleave":
          Wt = null;
          break;
        case "mouseover":
        case "mouseout":
          zn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          ma.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          uo.delete(i);
          break;
        }
      }
    }
    function oo(e, t, a, i, u, s) {
      if (e === null || e.nativeEvent !== s) {
        var f = ni(t, a, i, u, s);
        if (t !== null) {
          var p = Eo(t);
          p !== null && ms(p);
        }
        return f;
      }
      e.eventSystemFlags |= i;
      var v = e.targetContainers;
      return u !== null && v.indexOf(u) === -1 && v.push(u), e;
    }
    function Wv(e, t, a, i, u) {
      switch (t) {
        case "focusin": {
          var s = u;
          return ti = oo(ti, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var f = u;
          return Wt = oo(Wt, e, t, a, i, f), !0;
        }
        case "mouseover": {
          var p = u;
          return zn = oo(zn, e, t, a, i, p), !0;
        }
        case "pointerover": {
          var v = u, y = v.pointerId;
          return ma.set(y, oo(ma.get(y) || null, e, t, a, i, v)), !0;
        }
        case "gotpointercapture": {
          var g = u, b = g.pointerId;
          return uo.set(b, oo(uo.get(b) || null, e, t, a, i, g)), !0;
        }
      }
      return !1;
    }
    function Hd(e) {
      var t = _s(e.target);
      if (t !== null) {
        var a = Wr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === Te) {
            var u = dd(a);
            if (u !== null) {
              e.blockedOn = u, Ad(e.priority, function() {
                $v(a);
              });
              return;
            }
          } else if (i === oe) {
            var s = a.stateNode;
            if (xn(s)) {
              e.blockedOn = dc(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function Gv(e) {
      for (var t = gs(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < Di.length && zd(t, Di[i].priority); i++)
        ;
      Di.splice(i, 0, a), i === 0 && Hd(a);
    }
    function Ic(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = ou(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var u = e.nativeEvent, s = new u.constructor(u.type, u);
          Ko(s), u.target.dispatchEvent(s), Gm();
        } else {
          var f = Eo(i);
          return f !== null && ms(f), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Ss(e, t, a) {
      Ic(e) && a.delete(t);
    }
    function Fd() {
      Yc = !1, ti !== null && Ic(ti) && (ti = null), Wt !== null && Ic(Wt) && (Wt = null), zn !== null && Ic(zn) && (zn = null), ma.forEach(Ss), uo.forEach(Ss);
    }
    function rr(e, t) {
      e.blockedOn === t && (e.blockedOn = null, Yc || (Yc = !0, q.unstable_scheduleCallback(q.unstable_NormalPriority, Fd)));
    }
    function Ke(e) {
      if (lo.length > 0) {
        rr(lo[0], e);
        for (var t = 1; t < lo.length; t++) {
          var a = lo[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      ti !== null && rr(ti, e), Wt !== null && rr(Wt, e), zn !== null && rr(zn, e);
      var i = function(p) {
        return rr(p, e);
      };
      ma.forEach(i), uo.forEach(i);
      for (var u = 0; u < Di.length; u++) {
        var s = Di[u];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; Di.length > 0; ) {
        var f = Di[0];
        if (f.blockedOn !== null)
          break;
        Hd(f), f.blockedOn === null && Di.shift();
      }
    }
    var en = U.ReactCurrentBatchConfig, sn = !0;
    function Un(e) {
      sn = !!e;
    }
    function Kr() {
      return sn;
    }
    function so(e, t, a) {
      var i = cr(t), u;
      switch (i) {
        case tr:
          u = bn;
          break;
        case Pn:
          u = Es;
          break;
        case _i:
        default:
          u = ki;
          break;
      }
      return u.bind(null, t, a, e);
    }
    function bn(e, t, a, i) {
      var u = ha(), s = en.transition;
      en.transition = null;
      try {
        wn(tr), ki(e, t, a, i);
      } finally {
        wn(u), en.transition = s;
      }
    }
    function Es(e, t, a, i) {
      var u = ha(), s = en.transition;
      en.transition = null;
      try {
        wn(Pn), ki(e, t, a, i);
      } finally {
        wn(u), en.transition = s;
      }
    }
    function ki(e, t, a, i) {
      !sn || Qc(e, t, a, i);
    }
    function Qc(e, t, a, i) {
      var u = ou(e, t, a, i);
      if (u === null) {
        wy(e, t, i, co, a), Qv(e, i);
        return;
      }
      if (Wv(u, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (Qv(e, i), t & Yl && Iv(e)) {
        for (; u !== null; ) {
          var s = Eo(u);
          s !== null && io(s);
          var f = ou(e, t, a, i);
          if (f === null && wy(e, t, i, co, a), f === u)
            break;
          u = f;
        }
        u !== null && i.stopPropagation();
        return;
      }
      wy(e, t, i, null, a);
    }
    var co = null;
    function ou(e, t, a, i) {
      co = null;
      var u = uc(i), s = _s(u);
      if (s !== null) {
        var f = Wr(s);
        if (f === null)
          s = null;
        else {
          var p = f.tag;
          if (p === Te) {
            var v = dd(f);
            if (v !== null)
              return v;
            s = null;
          } else if (p === oe) {
            var y = f.stateNode;
            if (xn(y))
              return dc(f);
            s = null;
          } else
            f !== s && (s = null);
        }
      }
      return co = s, null;
    }
    function cr(e) {
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
          return tr;
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
          return Pn;
        case "message": {
          var t = hd();
          switch (t) {
            case mc:
              return tr;
            case qr:
              return Pn;
            case Ja:
            case yc:
              return _i;
            case dl:
              return ps;
            default:
              return _i;
          }
        }
        default:
          return _i;
      }
    }
    function jd(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function fo(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function Oi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Wc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var su = null, ri = null, Cl = null;
    function Rl(e) {
      return su = e, ri = qc(), !0;
    }
    function Gc() {
      su = null, ri = null, Cl = null;
    }
    function po() {
      if (Cl)
        return Cl;
      var e, t = ri, a = t.length, i, u = qc(), s = u.length;
      for (e = 0; e < a && t[e] === u[e]; e++)
        ;
      var f = a - e;
      for (i = 1; i <= f && t[a - i] === u[s - i]; i++)
        ;
      var p = i > 1 ? 1 - i : void 0;
      return Cl = u.slice(e, p), Cl;
    }
    function qc() {
      return "value" in su ? su.value : su.textContent;
    }
    function cu(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function fu() {
      return !0;
    }
    function ar() {
      return !1;
    }
    function gn(e) {
      function t(a, i, u, s, f) {
        this._reactName = a, this._targetInst = u, this.type = i, this.nativeEvent = s, this.target = f, this.currentTarget = null;
        for (var p in e)
          if (!!e.hasOwnProperty(p)) {
            var v = e[p];
            v ? this[p] = v(s) : this[p] = s[p];
          }
        var y = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return y ? this.isDefaultPrevented = fu : this.isDefaultPrevented = ar, this.isPropagationStopped = ar, this;
      }
      return Qe(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          !a || (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = fu);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          !a || (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = fu);
        },
        persist: function() {
        },
        isPersistent: fu
      }), t;
    }
    var ir = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, lr = gn(ir), vo = Qe({}, ir, {
      view: 0,
      detail: 0
    }), Vd = gn(vo), Cs, Bd, ya;
    function qv(e) {
      e !== ya && (ya && e.type === "mousemove" ? (Cs = e.screenX - ya.screenX, Bd = e.screenY - ya.screenY) : (Cs = 0, Bd = 0), ya = e);
    }
    var ho = Qe({}, vo, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: Zc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (qv(e), Cs);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Bd;
      }
    }), Tl = gn(ho), Pd = Qe({}, ho, {
      dataTransfer: 0
    }), du = gn(Pd), Xv = Qe({}, vo, {
      relatedTarget: 0
    }), Xc = gn(Xv), $d = Qe({}, ir, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Kc = gn($d), iy = Qe({}, ir, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), ly = gn(iy), Kv = Qe({}, ir, {
      data: 0
    }), Yd = gn(Kv), pu = Yd, uy = {
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
    }, mo = {
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
    };
    function Zv(e) {
      if (e.key) {
        var t = uy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = cu(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? mo[e.keyCode] || "Unidentified" : "";
    }
    var cn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function oy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = cn[e];
      return i ? !!a[i] : !1;
    }
    function Zc(e) {
      return oy;
    }
    var sy = Qe({}, vo, {
      key: Zv,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: Zc,
      charCode: function(e) {
        return e.type === "keypress" ? cu(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? cu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), cy = gn(sy), Jv = Qe({}, ho, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Id = gn(Jv), fy = Qe({}, vo, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: Zc
    }), ga = gn(fy), Qd = Qe({}, ir, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), dy = gn(Qd), wl = Qe({}, ho, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
      },
      deltaZ: 0,
      deltaMode: 0
    }), Jc = gn(wl), vu = [9, 13, 27, 32], Rs = 229, Ts = fn && "CompositionEvent" in window, hu = null;
    fn && "documentMode" in document && (hu = document.documentMode);
    var py = fn && "TextEvent" in window && !hu, ef = fn && (!Ts || hu && hu > 8 && hu <= 11), eh = 32, Wd = String.fromCharCode(eh);
    function th() {
      Er("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), Er("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), Er("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var ws = !1;
    function tf(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && !(e.ctrlKey && e.altKey);
    }
    function nh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Gd(e, t) {
      return e === "keydown" && t.keyCode === Rs;
    }
    function rh(e, t) {
      switch (e) {
        case "keyup":
          return vu.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Rs;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function qd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function nf(e) {
      return e.locale === "ko";
    }
    var Li = !1;
    function Xd(e, t, a, i, u) {
      var s, f;
      if (Ts ? s = nh(t) : Li ? rh(t, i) && (s = "onCompositionEnd") : Gd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      ef && !nf(i) && (!Li && s === "onCompositionStart" ? Li = Rl(u) : s === "onCompositionEnd" && Li && (f = po()));
      var p = oh(a, s);
      if (p.length > 0) {
        var v = new Yd(s, t, null, i, u);
        if (e.push({
          event: v,
          listeners: p
        }), f)
          v.data = f;
        else {
          var y = qd(i);
          y !== null && (v.data = y);
        }
      }
    }
    function rf(e, t) {
      switch (e) {
        case "compositionend":
          return qd(t);
        case "keypress":
          var a = t.which;
          return a !== eh ? null : (ws = !0, Wd);
        case "textInput":
          var i = t.data;
          return i === Wd && ws ? null : i;
        default:
          return null;
      }
    }
    function ah(e, t) {
      if (Li) {
        if (e === "compositionend" || !Ts && rh(e, t)) {
          var a = po();
          return Gc(), Li = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!tf(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return ef && !nf(t) ? null : t.data;
        default:
          return null;
      }
    }
    function vy(e, t, a, i, u) {
      var s;
      if (py ? s = rf(t, i) : s = ah(t, i), !s)
        return null;
      var f = oh(a, "onBeforeInput");
      if (f.length > 0) {
        var p = new pu("onBeforeInput", "beforeinput", null, i, u);
        e.push({
          event: p,
          listeners: f
        }), p.data = s;
      }
    }
    function af(e, t, a, i, u, s, f) {
      Xd(e, t, a, i, u), vy(e, t, a, i, u);
    }
    var hy = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function yo(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!hy[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function my(e) {
      if (!fn)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function lf() {
      Er("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      oc(i);
      var u = oh(t, "onChange");
      if (u.length > 0) {
        var s = new lr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: u
        });
      }
    }
    var r = null, l = null;
    function o(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function c(e) {
      var t = [];
      n(t, l, e, uc(e)), ad(d, t);
    }
    function d(e) {
      T0(e, 0);
    }
    function m(e) {
      var t = df(e);
      if (ju(t))
        return e;
    }
    function E(e, t) {
      if (e === "change")
        return t;
    }
    var T = !1;
    fn && (T = my("input") && (!document.documentMode || document.documentMode > 9));
    function z(e, t) {
      r = e, l = t, r.attachEvent("onpropertychange", I);
    }
    function $() {
      !r || (r.detachEvent("onpropertychange", I), r = null, l = null);
    }
    function I(e) {
      e.propertyName === "value" && m(l) && c(e);
    }
    function P(e, t, a) {
      e === "focusin" ? ($(), z(t, a)) : e === "focusout" && $();
    }
    function ne(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return m(l);
    }
    function ce(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function pe(e, t) {
      if (e === "click")
        return m(t);
    }
    function vn(e, t) {
      if (e === "input" || e === "change")
        return m(t);
    }
    function _(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || xe(e, "number", e.value);
    }
    function x(e, t, a, i, u, s, f) {
      var p = a ? df(a) : window, v, y;
      if (o(p) ? v = E : yo(p) ? T ? v = vn : (v = ne, y = P) : ce(p) && (v = pe), v) {
        var g = v(t, a);
        if (g) {
          n(e, g, i, u);
          return;
        }
      }
      y && y(t, p, a), t === "focusout" && _(p);
    }
    function O() {
      _a("onMouseEnter", ["mouseout", "mouseover"]), _a("onMouseLeave", ["mouseout", "mouseover"]), _a("onPointerEnter", ["pointerout", "pointerover"]), _a("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function G(e, t, a, i, u, s, f) {
      var p = t === "mouseover" || t === "pointerover", v = t === "mouseout" || t === "pointerout";
      if (p && !Cv(i)) {
        var y = i.relatedTarget || i.fromElement;
        if (y && (_s(y) || cp(y)))
          return;
      }
      if (!(!v && !p)) {
        var g;
        if (u.window === u)
          g = u;
        else {
          var b = u.ownerDocument;
          b ? g = b.defaultView || b.parentWindow : g = window;
        }
        var w, L;
        if (v) {
          var N = i.relatedTarget || i.toElement;
          if (w = a, L = N ? _s(N) : null, L !== null) {
            var H = Wr(L);
            (L !== H || L.tag !== ue && L.tag !== Fe) && (L = null);
          }
        } else
          w = null, L = a;
        if (w !== L) {
          var ie = Tl, we = "onMouseLeave", ye = "onMouseEnter", ut = "mouse";
          (t === "pointerout" || t === "pointerover") && (ie = Id, we = "onPointerLeave", ye = "onPointerEnter", ut = "pointer");
          var Ze = w == null ? g : df(w), D = L == null ? g : df(L), F = new ie(we, ut + "leave", w, i, u);
          F.target = Ze, F.relatedTarget = D;
          var k = null, Q = _s(u);
          if (Q === a) {
            var le = new ie(ye, ut + "enter", L, i, u);
            le.target = D, le.relatedTarget = Ze, k = le;
          }
          SR(e, F, k, w, L);
        }
      }
    }
    function he(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var fe = typeof Object.is == "function" ? Object.is : he;
    function Se(e, t) {
      if (fe(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var u = 0; u < a.length; u++) {
        var s = a[u];
        if (!Zn.call(t, s) || !fe(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function ze(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function An(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function pt(e, t) {
      for (var a = ze(e), i = 0, u = 0; a; ) {
        if (a.nodeType === gi) {
          if (u = i + a.textContent.length, i <= t && u >= t)
            return {
              node: a,
              offset: t - i
            };
          i = u;
        }
        a = ze(An(a));
      }
    }
    function xl(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var u = i.anchorNode, s = i.anchorOffset, f = i.focusNode, p = i.focusOffset;
      try {
        u.nodeType, f.nodeType;
      } catch {
        return null;
      }
      return yy(e, u, s, f, p);
    }
    function yy(e, t, a, i, u) {
      var s = 0, f = -1, p = -1, v = 0, y = 0, g = e, b = null;
      e:
        for (; ; ) {
          for (var w = null; g === t && (a === 0 || g.nodeType === gi) && (f = s + a), g === i && (u === 0 || g.nodeType === gi) && (p = s + u), g.nodeType === gi && (s += g.nodeValue.length), (w = g.firstChild) !== null; )
            b = g, g = w;
          for (; ; ) {
            if (g === e)
              break e;
            if (b === t && ++v === a && (f = s), b === i && ++y === u && (p = s), (w = g.nextSibling) !== null)
              break;
            g = b, b = g.parentNode;
          }
          g = w;
        }
      return f === -1 || p === -1 ? null : {
        start: f,
        end: p
      };
    }
    function eR(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (!!i.getSelection) {
        var u = i.getSelection(), s = e.textContent.length, f = Math.min(t.start, s), p = t.end === void 0 ? f : Math.min(t.end, s);
        if (!u.extend && f > p) {
          var v = p;
          p = f, f = v;
        }
        var y = pt(e, f), g = pt(e, p);
        if (y && g) {
          if (u.rangeCount === 1 && u.anchorNode === y.node && u.anchorOffset === y.offset && u.focusNode === g.node && u.focusOffset === g.offset)
            return;
          var b = a.createRange();
          b.setStart(y.node, y.offset), u.removeAllRanges(), f > p ? (u.addRange(b), u.extend(g.node, g.offset)) : (b.setEnd(g.node, g.offset), u.addRange(b));
        }
      }
    }
    function f0(e) {
      return e && e.nodeType === gi;
    }
    function d0(e, t) {
      return !e || !t ? !1 : e === t ? !0 : f0(e) ? !1 : f0(t) ? d0(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function tR(e) {
      return e && e.ownerDocument && d0(e.ownerDocument.documentElement, e);
    }
    function nR(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function p0() {
      for (var e = window, t = al(); t instanceof e.HTMLIFrameElement; ) {
        if (nR(t))
          e = t.contentWindow;
        else
          return t;
        t = al(e.document);
      }
      return t;
    }
    function gy(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function rR() {
      var e = p0();
      return {
        focusedElem: e,
        selectionRange: gy(e) ? iR(e) : null
      };
    }
    function aR(e) {
      var t = p0(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && tR(a)) {
        i !== null && gy(a) && lR(a, i);
        for (var u = [], s = a; s = s.parentNode; )
          s.nodeType === Or && u.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var f = 0; f < u.length; f++) {
          var p = u[f];
          p.element.scrollLeft = p.left, p.element.scrollTop = p.top;
        }
      }
    }
    function iR(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = xl(e), t || {
        start: 0,
        end: 0
      };
    }
    function lR(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : eR(e, t);
    }
    var uR = fn && "documentMode" in document && document.documentMode <= 11;
    function oR() {
      Er("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var uf = null, Sy = null, Kd = null, Ey = !1;
    function sR(e) {
      if ("selectionStart" in e && gy(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function cR(e) {
      return e.window === e ? e.document : e.nodeType === Ha ? e : e.ownerDocument;
    }
    function v0(e, t, a) {
      var i = cR(a);
      if (!(Ey || uf == null || uf !== al(i))) {
        var u = sR(uf);
        if (!Kd || !Se(Kd, u)) {
          Kd = u;
          var s = oh(Sy, "onSelect");
          if (s.length > 0) {
            var f = new lr("onSelect", "select", null, t, a);
            e.push({
              event: f,
              listeners: s
            }), f.target = uf;
          }
        }
      }
    }
    function fR(e, t, a, i, u, s, f) {
      var p = a ? df(a) : window;
      switch (t) {
        case "focusin":
          (yo(p) || p.contentEditable === "true") && (uf = p, Sy = a, Kd = null);
          break;
        case "focusout":
          uf = null, Sy = null, Kd = null;
          break;
        case "mousedown":
          Ey = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          Ey = !1, v0(e, i, u);
          break;
        case "selectionchange":
          if (uR)
            break;
        case "keydown":
        case "keyup":
          v0(e, i, u);
      }
    }
    function ih(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var of = {
      animationend: ih("Animation", "AnimationEnd"),
      animationiteration: ih("Animation", "AnimationIteration"),
      animationstart: ih("Animation", "AnimationStart"),
      transitionend: ih("Transition", "TransitionEnd")
    }, Cy = {}, h0 = {};
    fn && (h0 = document.createElement("div").style, "AnimationEvent" in window || (delete of.animationend.animation, delete of.animationiteration.animation, delete of.animationstart.animation), "TransitionEvent" in window || delete of.transitionend.transition);
    function lh(e) {
      if (Cy[e])
        return Cy[e];
      if (!of[e])
        return e;
      var t = of[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in h0)
          return Cy[e] = t[a];
      return e;
    }
    var m0 = lh("animationend"), y0 = lh("animationiteration"), g0 = lh("animationstart"), S0 = lh("transitionend"), E0 = /* @__PURE__ */ new Map(), C0 = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function go(e, t) {
      E0.set(e, t), Er(t, [e]);
    }
    function dR() {
      for (var e = 0; e < C0.length; e++) {
        var t = C0[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        go(a, "on" + i);
      }
      go(m0, "onAnimationEnd"), go(y0, "onAnimationIteration"), go(g0, "onAnimationStart"), go("dblclick", "onDoubleClick"), go("focusin", "onFocus"), go("focusout", "onBlur"), go(S0, "onTransitionEnd");
    }
    function pR(e, t, a, i, u, s, f) {
      var p = E0.get(t);
      if (p !== void 0) {
        var v = lr, y = t;
        switch (t) {
          case "keypress":
            if (cu(i) === 0)
              return;
          case "keydown":
          case "keyup":
            v = cy;
            break;
          case "focusin":
            y = "focus", v = Xc;
            break;
          case "focusout":
            y = "blur", v = Xc;
            break;
          case "beforeblur":
          case "afterblur":
            v = Xc;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            v = Tl;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            v = du;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            v = ga;
            break;
          case m0:
          case y0:
          case g0:
            v = Kc;
            break;
          case S0:
            v = dy;
            break;
          case "scroll":
            v = Vd;
            break;
          case "wheel":
            v = Jc;
            break;
          case "copy":
          case "cut":
          case "paste":
            v = ly;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            v = Id;
            break;
        }
        var g = (s & Yl) !== 0;
        {
          var b = !g && t === "scroll", w = yR(a, p, i.type, g, b);
          if (w.length > 0) {
            var L = new v(p, y, null, i, u);
            e.push({
              event: L,
              listeners: w
            });
          }
        }
      }
    }
    dR(), O(), lf(), oR(), th();
    function vR(e, t, a, i, u, s, f) {
      pR(e, t, a, i, u, s);
      var p = (s & Wm) === 0;
      p && (G(e, t, a, i, u), x(e, t, a, i, u), fR(e, t, a, i, u), af(e, t, a, i, u));
    }
    var Zd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], Ry = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Zd));
    function R0(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, Ri(i, t, void 0, e), e.currentTarget = null;
    }
    function hR(e, t, a) {
      var i;
      if (a)
        for (var u = t.length - 1; u >= 0; u--) {
          var s = t[u], f = s.instance, p = s.currentTarget, v = s.listener;
          if (f !== i && e.isPropagationStopped())
            return;
          R0(e, v, p), i = f;
        }
      else
        for (var y = 0; y < t.length; y++) {
          var g = t[y], b = g.instance, w = g.currentTarget, L = g.listener;
          if (b !== i && e.isPropagationStopped())
            return;
          R0(e, L, w), i = b;
        }
    }
    function T0(e, t) {
      for (var a = (t & Yl) !== 0, i = 0; i < e.length; i++) {
        var u = e[i], s = u.event, f = u.listeners;
        hR(s, f, a);
      }
      od();
    }
    function mR(e, t, a, i, u) {
      var s = uc(a), f = [];
      vR(f, e, i, a, s, t), T0(f, t);
    }
    function tn(e, t) {
      Ry.has(e) || S('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = QT(t), u = ER(e, a);
      i.has(u) || (w0(t, e, qo, a), i.add(u));
    }
    function Ty(e, t, a) {
      Ry.has(e) && !t && S('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= Yl), w0(a, e, i, t);
    }
    var uh = "_reactListening" + Math.random().toString(36).slice(2);
    function Jd(e) {
      if (!e[uh]) {
        e[uh] = !0, et.forEach(function(a) {
          a !== "selectionchange" && (Ry.has(a) || Ty(a, !1, e), Ty(a, !0, e));
        });
        var t = e.nodeType === Ha ? e : e.ownerDocument;
        t !== null && (t[uh] || (t[uh] = !0, Ty("selectionchange", !1, t)));
      }
    }
    function w0(e, t, a, i, u) {
      var s = so(e, t, a), f = void 0;
      es && (t === "touchstart" || t === "touchmove" || t === "wheel") && (f = !0), e = e, i ? f !== void 0 ? Oi(e, t, s, f) : fo(e, t, s) : f !== void 0 ? Wc(e, t, s, f) : jd(e, t, s);
    }
    function x0(e, t) {
      return e === t || e.nodeType === mn && e.parentNode === t;
    }
    function wy(e, t, a, i, u) {
      var s = i;
      if ((t & Ei) === 0 && (t & qo) === 0) {
        var f = u;
        if (i !== null) {
          var p = i;
          e:
            for (; ; ) {
              if (p === null)
                return;
              var v = p.tag;
              if (v === oe || v === ge) {
                var y = p.stateNode.containerInfo;
                if (x0(y, f))
                  break;
                if (v === ge)
                  for (var g = p.return; g !== null; ) {
                    var b = g.tag;
                    if (b === oe || b === ge) {
                      var w = g.stateNode.containerInfo;
                      if (x0(w, f))
                        return;
                    }
                    g = g.return;
                  }
                for (; y !== null; ) {
                  var L = _s(y);
                  if (L === null)
                    return;
                  var N = L.tag;
                  if (N === ue || N === Fe) {
                    p = s = L;
                    continue e;
                  }
                  y = y.parentNode;
                }
              }
              p = p.return;
            }
        }
      }
      ad(function() {
        return mR(e, t, a, s);
      });
    }
    function ep(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function yR(e, t, a, i, u, s) {
      for (var f = t !== null ? t + "Capture" : null, p = i ? f : t, v = [], y = e, g = null; y !== null; ) {
        var b = y, w = b.stateNode, L = b.tag;
        if (L === ue && w !== null && (g = w, p !== null)) {
          var N = Ql(y, p);
          N != null && v.push(ep(y, N, g));
        }
        if (u)
          break;
        y = y.return;
      }
      return v;
    }
    function oh(e, t) {
      for (var a = t + "Capture", i = [], u = e; u !== null; ) {
        var s = u, f = s.stateNode, p = s.tag;
        if (p === ue && f !== null) {
          var v = f, y = Ql(u, a);
          y != null && i.unshift(ep(u, y, v));
          var g = Ql(u, t);
          g != null && i.push(ep(u, g, v));
        }
        u = u.return;
      }
      return i;
    }
    function sf(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== ue);
      return e || null;
    }
    function gR(e, t) {
      for (var a = e, i = t, u = 0, s = a; s; s = sf(s))
        u++;
      for (var f = 0, p = i; p; p = sf(p))
        f++;
      for (; u - f > 0; )
        a = sf(a), u--;
      for (; f - u > 0; )
        i = sf(i), f--;
      for (var v = u; v--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = sf(a), i = sf(i);
      }
      return null;
    }
    function b0(e, t, a, i, u) {
      for (var s = t._reactName, f = [], p = a; p !== null && p !== i; ) {
        var v = p, y = v.alternate, g = v.stateNode, b = v.tag;
        if (y !== null && y === i)
          break;
        if (b === ue && g !== null) {
          var w = g;
          if (u) {
            var L = Ql(p, s);
            L != null && f.unshift(ep(p, L, w));
          } else if (!u) {
            var N = Ql(p, s);
            N != null && f.push(ep(p, N, w));
          }
        }
        p = p.return;
      }
      f.length !== 0 && e.push({
        event: t,
        listeners: f
      });
    }
    function SR(e, t, a, i, u) {
      var s = i && u ? gR(i, u) : null;
      i !== null && b0(e, t, i, s, !1), u !== null && a !== null && b0(e, a, u, s, !0);
    }
    function ER(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var Sa = !1, tp = "dangerouslySetInnerHTML", sh = "suppressContentEditableWarning", So = "suppressHydrationWarning", _0 = "autoFocus", xs = "children", bs = "style", ch = "__html", xy, fh, np, D0, dh, k0, O0;
    xy = {
      dialog: !0,
      webview: !0
    }, fh = function(e, t) {
      lc(e, t), Jf(e, t), Ev(e, t, {
        registrationNameDependencies: zt,
        possibleRegistrationNames: fi
      });
    }, k0 = fn && !document.documentMode, np = function(e, t, a) {
      if (!Sa) {
        var i = ph(a), u = ph(t);
        u !== i && (Sa = !0, S("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(u), JSON.stringify(i)));
      }
    }, D0 = function(e) {
      if (!Sa) {
        Sa = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), S("Extra attributes from the server: %s", t);
      }
    }, dh = function(e, t) {
      t === !1 ? S("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : S("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, O0 = function(e, t) {
      var a = e.namespaceURI === yi ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var CR = /\r\n?/g, RR = /\u0000|\uFFFD/g;
    function ph(e) {
      Ia(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(CR, `
`).replace(RR, "");
    }
    function vh(e, t, a, i) {
      var u = ph(t), s = ph(e);
      if (s !== u && (i && (Sa || (Sa = !0, S('Text content did not match. Server: "%s" Client: "%s"', s, u))), a && ve))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function L0(e) {
      return e.nodeType === Ha ? e : e.ownerDocument;
    }
    function TR() {
    }
    function hh(e) {
      e.onclick = TR;
    }
    function wR(e, t, a, i, u) {
      for (var s in i)
        if (!!i.hasOwnProperty(s)) {
          var f = i[s];
          if (s === bs)
            f && Object.freeze(f), cv(t, f);
          else if (s === tp) {
            var p = f ? f[ch] : void 0;
            p != null && Jp(t, p);
          } else if (s === xs)
            if (typeof f == "string") {
              var v = e !== "textarea" || f !== "";
              v && nc(t, f);
            } else
              typeof f == "number" && nc(t, "" + f);
          else
            s === sh || s === So || s === _0 || (zt.hasOwnProperty(s) ? f != null && (typeof f != "function" && dh(s, f), s === "onScroll" && tn("scroll", t)) : f != null && Wa(t, s, f, u));
        }
    }
    function xR(e, t, a, i) {
      for (var u = 0; u < t.length; u += 2) {
        var s = t[u], f = t[u + 1];
        s === bs ? cv(e, f) : s === tp ? Jp(e, f) : s === xs ? nc(e, f) : Wa(e, s, f, i);
      }
    }
    function bR(e, t, a, i) {
      var u, s = L0(a), f, p = i;
      if (p === yi && (p = ec(e)), p === yi) {
        if (u = Si(e, t), !u && e !== e.toLowerCase() && S("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var v = s.createElement("div");
          v.innerHTML = "<script><\/script>";
          var y = v.firstChild;
          f = v.removeChild(y);
        } else if (typeof t.is == "string")
          f = s.createElement(e, {
            is: t.is
          });
        else if (f = s.createElement(e), e === "select") {
          var g = f;
          t.multiple ? g.multiple = !0 : t.size && (g.size = t.size);
        }
      } else
        f = s.createElementNS(p, e);
      return p === yi && !u && Object.prototype.toString.call(f) === "[object HTMLUnknownElement]" && !Zn.call(xy, e) && (xy[e] = !0, S("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), f;
    }
    function _R(e, t) {
      return L0(t).createTextNode(e);
    }
    function DR(e, t, a, i) {
      var u = Si(t, a);
      fh(t, a);
      var s;
      switch (t) {
        case "dialog":
          tn("cancel", e), tn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          tn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var f = 0; f < Zd.length; f++)
            tn(Zd[f], e);
          s = a;
          break;
        case "source":
          tn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          tn("error", e), tn("load", e), s = a;
          break;
        case "details":
          tn("toggle", e), s = a;
          break;
        case "input":
          C(e, a), s = h(e, a), tn("invalid", e);
          break;
        case "option":
          xt(e, a), s = a;
          break;
        case "select":
          Io(e, a), s = Yo(e, a), tn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), s = Yf(e, a), tn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (ac(t, s), wR(t, e, i, s, u), t) {
        case "input":
          la(e), W(e, a, !1);
          break;
        case "textarea":
          la(e), Zp(e);
          break;
        case "option":
          Ot(e, a);
          break;
        case "select":
          Pf(e, a);
          break;
        default:
          typeof s.onClick == "function" && hh(e);
          break;
      }
    }
    function kR(e, t, a, i, u) {
      fh(t, i);
      var s = null, f, p;
      switch (t) {
        case "input":
          f = h(e, a), p = h(e, i), s = [];
          break;
        case "select":
          f = Yo(e, a), p = Yo(e, i), s = [];
          break;
        case "textarea":
          f = Yf(e, a), p = Yf(e, i), s = [];
          break;
        default:
          f = a, p = i, typeof f.onClick != "function" && typeof p.onClick == "function" && hh(e);
          break;
      }
      ac(t, p);
      var v, y, g = null;
      for (v in f)
        if (!(p.hasOwnProperty(v) || !f.hasOwnProperty(v) || f[v] == null))
          if (v === bs) {
            var b = f[v];
            for (y in b)
              b.hasOwnProperty(y) && (g || (g = {}), g[y] = "");
          } else
            v === tp || v === xs || v === sh || v === So || v === _0 || (zt.hasOwnProperty(v) ? s || (s = []) : (s = s || []).push(v, null));
      for (v in p) {
        var w = p[v], L = f != null ? f[v] : void 0;
        if (!(!p.hasOwnProperty(v) || w === L || w == null && L == null))
          if (v === bs)
            if (w && Object.freeze(w), L) {
              for (y in L)
                L.hasOwnProperty(y) && (!w || !w.hasOwnProperty(y)) && (g || (g = {}), g[y] = "");
              for (y in w)
                w.hasOwnProperty(y) && L[y] !== w[y] && (g || (g = {}), g[y] = w[y]);
            } else
              g || (s || (s = []), s.push(v, g)), g = w;
          else if (v === tp) {
            var N = w ? w[ch] : void 0, H = L ? L[ch] : void 0;
            N != null && H !== N && (s = s || []).push(v, N);
          } else
            v === xs ? (typeof w == "string" || typeof w == "number") && (s = s || []).push(v, "" + w) : v === sh || v === So || (zt.hasOwnProperty(v) ? (w != null && (typeof w != "function" && dh(v, w), v === "onScroll" && tn("scroll", e)), !s && L !== w && (s = [])) : (s = s || []).push(v, w));
      }
      return g && (Wo(g, p[bs]), (s = s || []).push(bs, g)), s;
    }
    function OR(e, t, a, i, u) {
      a === "input" && u.type === "radio" && u.name != null && M(e, u);
      var s = Si(a, i), f = Si(a, u);
      switch (xR(e, t, s, f), a) {
        case "input":
          A(e, u);
          break;
        case "textarea":
          Kp(e, u);
          break;
        case "select":
          Hm(e, u);
          break;
      }
    }
    function LR(e) {
      {
        var t = e.toLowerCase();
        return ic.hasOwnProperty(t) && ic[t] || null;
      }
    }
    function MR(e, t, a, i, u, s, f) {
      var p, v;
      switch (p = Si(t, a), fh(t, a), t) {
        case "dialog":
          tn("cancel", e), tn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          tn("load", e);
          break;
        case "video":
        case "audio":
          for (var y = 0; y < Zd.length; y++)
            tn(Zd[y], e);
          break;
        case "source":
          tn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          tn("error", e), tn("load", e);
          break;
        case "details":
          tn("toggle", e);
          break;
        case "input":
          C(e, a), tn("invalid", e);
          break;
        case "option":
          xt(e, a);
          break;
        case "select":
          Io(e, a), tn("invalid", e);
          break;
        case "textarea":
          Xp(e, a), tn("invalid", e);
          break;
      }
      ac(t, a);
      {
        v = /* @__PURE__ */ new Set();
        for (var g = e.attributes, b = 0; b < g.length; b++) {
          var w = g[b].name.toLowerCase();
          switch (w) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              v.add(g[b].name);
          }
        }
      }
      var L = null;
      for (var N in a)
        if (!!a.hasOwnProperty(N)) {
          var H = a[N];
          if (N === xs)
            typeof H == "string" ? e.textContent !== H && (a[So] !== !0 && vh(e.textContent, H, s, f), L = [xs, H]) : typeof H == "number" && e.textContent !== "" + H && (a[So] !== !0 && vh(e.textContent, H, s, f), L = [xs, "" + H]);
          else if (zt.hasOwnProperty(N))
            H != null && (typeof H != "function" && dh(N, H), N === "onScroll" && tn("scroll", e));
          else if (f && !0 && typeof p == "boolean") {
            var ie = void 0, we = p && Ve ? null : ra(N);
            if (a[So] !== !0) {
              if (!(N === sh || N === So || N === "value" || N === "checked" || N === "selected")) {
                if (N === tp) {
                  var ye = e.innerHTML, ut = H ? H[ch] : void 0;
                  if (ut != null) {
                    var Ze = O0(e, ut);
                    Ze !== ye && np(N, ye, Ze);
                  }
                } else if (N === bs) {
                  if (v.delete(N), k0) {
                    var D = Im(H);
                    ie = e.getAttribute("style"), D !== ie && np(N, ie, D);
                  }
                } else if (p && !Ve)
                  v.delete(N.toLowerCase()), ie = $i(e, N, H), H !== ie && np(N, ie, H);
                else if (!dn(N, we, p) && !Ft(N, H, we, p)) {
                  var F = !1;
                  if (we !== null)
                    v.delete(we.attributeName), ie = La(e, N, H, we);
                  else {
                    var k = i;
                    if (k === yi && (k = ec(t)), k === yi)
                      v.delete(N.toLowerCase());
                    else {
                      var Q = LR(N);
                      Q !== null && Q !== N && (F = !0, v.delete(Q)), v.delete(N);
                    }
                    ie = $i(e, N, H);
                  }
                  var le = Ve;
                  !le && H !== ie && !F && np(N, ie, H);
                }
              }
            }
          }
        }
      switch (f && v.size > 0 && a[So] !== !0 && D0(v), t) {
        case "input":
          la(e), W(e, a, !0);
          break;
        case "textarea":
          la(e), Zp(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && hh(e);
          break;
      }
      return L;
    }
    function NR(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function by(e, t) {
      {
        if (Sa)
          return;
        Sa = !0, S("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function _y(e, t) {
      {
        if (Sa)
          return;
        Sa = !0, S('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function Dy(e, t, a) {
      {
        if (Sa)
          return;
        Sa = !0, S("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function ky(e, t) {
      {
        if (t === "" || Sa)
          return;
        Sa = !0, S('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function zR(e, t, a) {
      switch (t) {
        case "input":
          _e(e, a);
          return;
        case "textarea":
          If(e, a);
          return;
        case "select":
          Fm(e, a);
          return;
      }
    }
    var rp = function() {
    }, ap = function() {
    };
    {
      var UR = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], M0 = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        "foreignObject",
        "desc",
        "title"
      ], AR = M0.concat(["button"]), HR = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], N0 = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      ap = function(e, t) {
        var a = Qe({}, e || N0), i = {
          tag: t
        };
        return M0.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), AR.indexOf(t) !== -1 && (a.pTagInButtonScope = null), UR.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var FR = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return HR.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, jR = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, z0 = {};
      rp = function(e, t, a) {
        a = a || N0;
        var i = a.current, u = i && i.tag;
        t != null && (e != null && S("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = FR(e, u) ? null : i, f = s ? null : jR(e, a), p = s || f;
        if (!!p) {
          var v = p.tag, y = !!s + "|" + e + "|" + v;
          if (!z0[y]) {
            z0[y] = !0;
            var g = e, b = "";
            if (e === "#text" ? /\S/.test(t) ? g = "Text nodes" : (g = "Whitespace text nodes", b = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : g = "<" + e + ">", s) {
              var w = "";
              v === "table" && e === "tr" && (w += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), S("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", g, v, b, w);
            } else
              S("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", g, v);
          }
        }
      };
    }
    var mh = "suppressHydrationWarning", yh = "$", gh = "/$", ip = "$?", lp = "$!", VR = "style", Oy = null, Ly = null;
    function BR(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Ha:
        case Pl: {
          t = i === Ha ? "#document" : "#fragment";
          var u = e.documentElement;
          a = u ? u.namespaceURI : Wf(null, "");
          break;
        }
        default: {
          var s = i === mn ? e.parentNode : e, f = s.namespaceURI || null;
          t = s.tagName, a = Wf(f, t);
          break;
        }
      }
      {
        var p = t.toLowerCase(), v = ap(null, p);
        return {
          namespace: a,
          ancestorInfo: v
        };
      }
    }
    function PR(e, t, a) {
      {
        var i = e, u = Wf(i.namespace, t), s = ap(i.ancestorInfo, t);
        return {
          namespace: u,
          ancestorInfo: s
        };
      }
    }
    function X_(e) {
      return e;
    }
    function $R(e) {
      Oy = Kr(), Ly = rR();
      var t = null;
      return Un(!1), t;
    }
    function YR(e) {
      aR(Ly), Un(Oy), Oy = null, Ly = null;
    }
    function IR(e, t, a, i, u) {
      var s;
      {
        var f = i;
        if (rp(e, null, f.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var p = "" + t.children, v = ap(f.ancestorInfo, e);
          rp(null, p, v);
        }
        s = f.namespace;
      }
      var y = bR(e, t, a, s);
      return sp(u, y), jy(y, t), y;
    }
    function QR(e, t) {
      e.appendChild(t);
    }
    function WR(e, t, a, i, u) {
      switch (DR(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function GR(e, t, a, i, u, s) {
      {
        var f = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var p = "" + i.children, v = ap(f.ancestorInfo, t);
          rp(null, p, v);
        }
      }
      return kR(e, t, a, i);
    }
    function My(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function qR(e, t, a, i) {
      {
        var u = a;
        rp(null, e, u.ancestorInfo);
      }
      var s = _R(e, t);
      return sp(i, s), s;
    }
    function XR() {
      var e = window.event;
      return e === void 0 ? _i : cr(e.type);
    }
    var Ny = typeof setTimeout == "function" ? setTimeout : void 0, KR = typeof clearTimeout == "function" ? clearTimeout : void 0, zy = -1, U0 = typeof Promise == "function" ? Promise : void 0, ZR = typeof queueMicrotask == "function" ? queueMicrotask : typeof U0 < "u" ? function(e) {
      return U0.resolve(null).then(e).catch(JR);
    } : Ny;
    function JR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function eT(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function tT(e, t, a, i, u, s) {
      OR(e, t, a, i, u), jy(e, u);
    }
    function A0(e) {
      nc(e, "");
    }
    function nT(e, t, a) {
      e.nodeValue = a;
    }
    function rT(e, t) {
      e.appendChild(t);
    }
    function aT(e, t) {
      var a;
      e.nodeType === mn ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && hh(a);
    }
    function iT(e, t, a) {
      e.insertBefore(t, a);
    }
    function lT(e, t, a) {
      e.nodeType === mn ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function uT(e, t) {
      e.removeChild(t);
    }
    function oT(e, t) {
      e.nodeType === mn ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Uy(e, t) {
      var a = t, i = 0;
      do {
        var u = a.nextSibling;
        if (e.removeChild(a), u && u.nodeType === mn) {
          var s = u.data;
          if (s === gh)
            if (i === 0) {
              e.removeChild(u), Ke(t);
              return;
            } else
              i--;
          else
            (s === yh || s === ip || s === lp) && i++;
        }
        a = u;
      } while (a);
      Ke(t);
    }
    function sT(e, t) {
      e.nodeType === mn ? Uy(e.parentNode, t) : e.nodeType === Or && Uy(e, t), Ke(e);
    }
    function cT(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function fT(e) {
      e.nodeValue = "";
    }
    function dT(e, t) {
      e = e;
      var a = t[VR], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = rc("display", i);
    }
    function pT(e, t) {
      e.nodeValue = t;
    }
    function vT(e) {
      e.nodeType === Or ? e.textContent = "" : e.nodeType === Ha && e.documentElement && e.removeChild(e.documentElement);
    }
    function hT(e, t, a) {
      return e.nodeType !== Or || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function mT(e, t) {
      return t === "" || e.nodeType !== gi ? null : e;
    }
    function yT(e) {
      return e.nodeType !== mn ? null : e;
    }
    function H0(e) {
      return e.data === ip;
    }
    function Ay(e) {
      return e.data === lp;
    }
    function gT(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, u;
      return t && (a = t.dgst, i = t.msg, u = t.stck), {
        message: i,
        digest: a,
        stack: u
      };
    }
    function ST(e, t) {
      e._reactRetry = t;
    }
    function Sh(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === Or || t === gi)
          break;
        if (t === mn) {
          var a = e.data;
          if (a === yh || a === lp || a === ip)
            break;
          if (a === gh)
            return null;
        }
      }
      return e;
    }
    function up(e) {
      return Sh(e.nextSibling);
    }
    function ET(e) {
      return Sh(e.firstChild);
    }
    function CT(e) {
      return Sh(e.firstChild);
    }
    function RT(e) {
      return Sh(e.nextSibling);
    }
    function TT(e, t, a, i, u, s, f) {
      sp(s, e), jy(e, a);
      var p;
      {
        var v = u;
        p = v.namespace;
      }
      var y = (s.mode & Ge) !== be;
      return MR(e, t, a, p, i, y, f);
    }
    function wT(e, t, a, i) {
      return sp(a, e), a.mode & Ge, NR(e, t);
    }
    function xT(e, t) {
      sp(t, e);
    }
    function bT(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === mn) {
          var i = t.data;
          if (i === gh) {
            if (a === 0)
              return up(t);
            a--;
          } else
            (i === yh || i === lp || i === ip) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function F0(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === mn) {
          var i = t.data;
          if (i === yh || i === lp || i === ip) {
            if (a === 0)
              return t;
            a--;
          } else
            i === gh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function _T(e) {
      Ke(e);
    }
    function DT(e) {
      Ke(e);
    }
    function kT(e) {
      return e !== "head" && e !== "body";
    }
    function OT(e, t, a, i) {
      var u = !0;
      vh(t.nodeValue, a, i, u);
    }
    function LT(e, t, a, i, u, s) {
      if (t[mh] !== !0) {
        var f = !0;
        vh(i.nodeValue, u, s, f);
      }
    }
    function MT(e, t) {
      t.nodeType === Or ? by(e, t) : t.nodeType === mn || _y(e, t);
    }
    function NT(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === Or ? by(a, t) : t.nodeType === mn || _y(a, t));
      }
    }
    function zT(e, t, a, i, u) {
      (u || t[mh] !== !0) && (i.nodeType === Or ? by(a, i) : i.nodeType === mn || _y(a, i));
    }
    function UT(e, t, a) {
      Dy(e, t);
    }
    function AT(e, t) {
      ky(e, t);
    }
    function HT(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && Dy(i, t);
      }
    }
    function FT(e, t) {
      {
        var a = e.parentNode;
        a !== null && ky(a, t);
      }
    }
    function jT(e, t, a, i, u, s) {
      (s || t[mh] !== !0) && Dy(a, i);
    }
    function VT(e, t, a, i, u) {
      (u || t[mh] !== !0) && ky(a, i);
    }
    function BT(e) {
      S("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function PT(e) {
      Jd(e);
    }
    var cf = Math.random().toString(36).slice(2), ff = "__reactFiber$" + cf, Hy = "__reactProps$" + cf, op = "__reactContainer$" + cf, Fy = "__reactEvents$" + cf, $T = "__reactListeners$" + cf, YT = "__reactHandles$" + cf;
    function IT(e) {
      delete e[ff], delete e[Hy], delete e[Fy], delete e[$T], delete e[YT];
    }
    function sp(e, t) {
      t[ff] = e;
    }
    function Eh(e, t) {
      t[op] = e;
    }
    function j0(e) {
      e[op] = null;
    }
    function cp(e) {
      return !!e[op];
    }
    function _s(e) {
      var t = e[ff];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[op] || a[ff], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var u = F0(e); u !== null; ) {
              var s = u[ff];
              if (s)
                return s;
              u = F0(u);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Eo(e) {
      var t = e[ff] || e[op];
      return t && (t.tag === ue || t.tag === Fe || t.tag === Te || t.tag === oe) ? t : null;
    }
    function df(e) {
      if (e.tag === ue || e.tag === Fe)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Ch(e) {
      return e[Hy] || null;
    }
    function jy(e, t) {
      e[Hy] = t;
    }
    function QT(e) {
      var t = e[Fy];
      return t === void 0 && (t = e[Fy] = /* @__PURE__ */ new Set()), t;
    }
    var V0 = {}, B0 = U.ReactDebugCurrentFrame;
    function Rh(e) {
      if (e) {
        var t = e._owner, a = qa(e.type, e._source, t ? t.type : null);
        B0.setExtraStackFrame(a);
      } else
        B0.setExtraStackFrame(null);
    }
    function Mi(e, t, a, i, u) {
      {
        var s = Function.call.bind(Zn);
        for (var f in e)
          if (s(e, f)) {
            var p = void 0;
            try {
              if (typeof e[f] != "function") {
                var v = Error((i || "React class") + ": " + a + " type `" + f + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[f] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw v.name = "Invariant Violation", v;
              }
              p = e[f](t, f, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (y) {
              p = y;
            }
            p && !(p instanceof Error) && (Rh(u), S("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, f, typeof p), Rh(null)), p instanceof Error && !(p.message in V0) && (V0[p.message] = !0, Rh(u), S("Failed %s type: %s", a, p.message), Rh(null));
          }
      }
    }
    var Vy = [], Th;
    Th = [];
    var mu = -1;
    function Co(e) {
      return {
        current: e
      };
    }
    function jr(e, t) {
      if (mu < 0) {
        S("Unexpected pop.");
        return;
      }
      t !== Th[mu] && S("Unexpected Fiber popped."), e.current = Vy[mu], Vy[mu] = null, Th[mu] = null, mu--;
    }
    function Vr(e, t, a) {
      mu++, Vy[mu] = e.current, Th[mu] = a, e.current = t;
    }
    var By;
    By = {};
    var Pa = {};
    Object.freeze(Pa);
    var yu = Co(Pa), bl = Co(!1), Py = Pa;
    function pf(e, t, a) {
      return a && _l(t) ? Py : yu.current;
    }
    function P0(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function vf(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return Pa;
        var u = e.stateNode;
        if (u && u.__reactInternalMemoizedUnmaskedChildContext === t)
          return u.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var f in i)
          s[f] = t[f];
        {
          var p = Ae(e) || "Unknown";
          Mi(i, s, "context", p);
        }
        return u && P0(e, t, s), s;
      }
    }
    function wh() {
      return bl.current;
    }
    function _l(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function xh(e) {
      jr(bl, e), jr(yu, e);
    }
    function $y(e) {
      jr(bl, e), jr(yu, e);
    }
    function $0(e, t, a) {
      {
        if (yu.current !== Pa)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        Vr(yu, t, e), Vr(bl, a, e);
      }
    }
    function Y0(e, t, a) {
      {
        var i = e.stateNode, u = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = Ae(e) || "Unknown";
            By[s] || (By[s] = !0, S("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var f = i.getChildContext();
        for (var p in f)
          if (!(p in u))
            throw new Error((Ae(e) || "Unknown") + '.getChildContext(): key "' + p + '" is not defined in childContextTypes.');
        {
          var v = Ae(e) || "Unknown";
          Mi(u, f, "child context", v);
        }
        return Qe({}, a, f);
      }
    }
    function bh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || Pa;
        return Py = yu.current, Vr(yu, a, e), Vr(bl, bl.current, e), !0;
      }
    }
    function I0(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var u = Y0(e, t, Py);
          i.__reactInternalMemoizedMergedChildContext = u, jr(bl, e), jr(yu, e), Vr(yu, u, e), Vr(bl, a, e);
        } else
          jr(bl, e), Vr(bl, a, e);
      }
    }
    function WT(e) {
      {
        if (!pd(e) || e.tag !== me)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case oe:
              return t.stateNode.context;
            case me: {
              var a = t.type;
              if (_l(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var Ro = 0, _h = 1, gu = null, Yy = !1, Iy = !1;
    function Q0(e) {
      gu === null ? gu = [e] : gu.push(e);
    }
    function GT(e) {
      Yy = !0, Q0(e);
    }
    function W0() {
      Yy && To();
    }
    function To() {
      if (!Iy && gu !== null) {
        Iy = !0;
        var e = 0, t = ha();
        try {
          var a = !0, i = gu;
          for (wn(tr); e < i.length; e++) {
            var u = i[e];
            do
              u = u(a);
            while (u !== null);
          }
          gu = null, Yy = !1;
        } catch (s) {
          throw gu !== null && (gu = gu.slice(e + 1)), vc(mc, To), s;
        } finally {
          wn(t), Iy = !1;
        }
      }
      return null;
    }
    var hf = [], mf = 0, Dh = null, kh = 0, ai = [], ii = 0, Ds = null, Su = 1, Eu = "";
    function qT(e) {
      return Os(), (e.flags & cd) !== Re;
    }
    function XT(e) {
      return Os(), kh;
    }
    function KT() {
      var e = Eu, t = Su, a = t & ~ZT(t);
      return a.toString(32) + e;
    }
    function ks(e, t) {
      Os(), hf[mf++] = kh, hf[mf++] = Dh, Dh = e, kh = t;
    }
    function G0(e, t, a) {
      Os(), ai[ii++] = Su, ai[ii++] = Eu, ai[ii++] = Ds, Ds = e;
      var i = Su, u = Eu, s = Oh(i) - 1, f = i & ~(1 << s), p = a + 1, v = Oh(t) + s;
      if (v > 30) {
        var y = s - s % 5, g = (1 << y) - 1, b = (f & g).toString(32), w = f >> y, L = s - y, N = Oh(t) + L, H = p << L, ie = H | w, we = b + u;
        Su = 1 << N | ie, Eu = we;
      } else {
        var ye = p << s, ut = ye | f, Ze = u;
        Su = 1 << v | ut, Eu = Ze;
      }
    }
    function Qy(e) {
      Os();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        ks(e, a), G0(e, a, i);
      }
    }
    function Oh(e) {
      return 32 - Rc(e);
    }
    function ZT(e) {
      return 1 << Oh(e) - 1;
    }
    function Wy(e) {
      for (; e === Dh; )
        Dh = hf[--mf], hf[mf] = null, kh = hf[--mf], hf[mf] = null;
      for (; e === Ds; )
        Ds = ai[--ii], ai[ii] = null, Eu = ai[--ii], ai[ii] = null, Su = ai[--ii], ai[ii] = null;
    }
    function JT() {
      return Os(), Ds !== null ? {
        id: Su,
        overflow: Eu
      } : null;
    }
    function ew(e, t) {
      Os(), ai[ii++] = Su, ai[ii++] = Eu, ai[ii++] = Ds, Su = t.id, Eu = t.overflow, Ds = e;
    }
    function Os() {
      dr() || S("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var fr = null, li = null, Ni = !1, Ls = !1, wo = null;
    function tw() {
      Ni && S("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function q0() {
      Ls = !0;
    }
    function nw() {
      return Ls;
    }
    function rw(e) {
      var t = e.stateNode.containerInfo;
      return li = CT(t), fr = e, Ni = !0, wo = null, Ls = !1, !0;
    }
    function aw(e, t, a) {
      return li = RT(t), fr = e, Ni = !0, wo = null, Ls = !1, a !== null && ew(e, a), !0;
    }
    function X0(e, t) {
      switch (e.tag) {
        case oe: {
          MT(e.stateNode.containerInfo, t);
          break;
        }
        case ue: {
          var a = (e.mode & Ge) !== be;
          zT(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            a
          );
          break;
        }
        case Te: {
          var i = e.memoizedState;
          i.dehydrated !== null && NT(i.dehydrated, t);
          break;
        }
      }
    }
    function K0(e, t) {
      X0(e, t);
      var a = u_();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= St) : i.push(a);
    }
    function Gy(e, t) {
      {
        if (Ls)
          return;
        switch (e.tag) {
          case oe: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case ue:
                var i = t.type;
                t.pendingProps, UT(a, i);
                break;
              case Fe:
                var u = t.pendingProps;
                AT(a, u);
                break;
            }
            break;
          }
          case ue: {
            var s = e.type, f = e.memoizedProps, p = e.stateNode;
            switch (t.tag) {
              case ue: {
                var v = t.type, y = t.pendingProps, g = (e.mode & Ge) !== be;
                jT(
                  s,
                  f,
                  p,
                  v,
                  y,
                  g
                );
                break;
              }
              case Fe: {
                var b = t.pendingProps, w = (e.mode & Ge) !== be;
                VT(
                  s,
                  f,
                  p,
                  b,
                  w
                );
                break;
              }
            }
            break;
          }
          case Te: {
            var L = e.memoizedState, N = L.dehydrated;
            if (N !== null)
              switch (t.tag) {
                case ue:
                  var H = t.type;
                  t.pendingProps, HT(N, H);
                  break;
                case Fe:
                  var ie = t.pendingProps;
                  FT(N, ie);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function Z0(e, t) {
      t.flags = t.flags & ~ca | jt, Gy(e, t);
    }
    function J0(e, t) {
      switch (e.tag) {
        case ue: {
          var a = e.type;
          e.pendingProps;
          var i = hT(t, a);
          return i !== null ? (e.stateNode = i, fr = e, li = ET(i), !0) : !1;
        }
        case Fe: {
          var u = e.pendingProps, s = mT(t, u);
          return s !== null ? (e.stateNode = s, fr = e, li = null, !0) : !1;
        }
        case Te: {
          var f = yT(t);
          if (f !== null) {
            var p = {
              dehydrated: f,
              treeContext: JT(),
              retryLane: Hr
            };
            e.memoizedState = p;
            var v = o_(f);
            return v.return = e, e.child = v, fr = e, li = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function qy(e) {
      return (e.mode & Ge) !== be && (e.flags & Ne) === Re;
    }
    function Xy(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Ky(e) {
      if (!!Ni) {
        var t = li;
        if (!t) {
          qy(e) && (Gy(fr, e), Xy()), Z0(fr, e), Ni = !1, fr = e;
          return;
        }
        var a = t;
        if (!J0(e, t)) {
          qy(e) && (Gy(fr, e), Xy()), t = up(a);
          var i = fr;
          if (!t || !J0(e, t)) {
            Z0(fr, e), Ni = !1, fr = e;
            return;
          }
          K0(i, a);
        }
      }
    }
    function iw(e, t, a) {
      var i = e.stateNode, u = !Ls, s = TT(i, e.type, e.memoizedProps, t, a, e, u);
      return e.updateQueue = s, s !== null;
    }
    function lw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = wT(t, a, e);
      if (i) {
        var u = fr;
        if (u !== null)
          switch (u.tag) {
            case oe: {
              var s = u.stateNode.containerInfo, f = (u.mode & Ge) !== be;
              OT(
                s,
                t,
                a,
                f
              );
              break;
            }
            case ue: {
              var p = u.type, v = u.memoizedProps, y = u.stateNode, g = (u.mode & Ge) !== be;
              LT(
                p,
                v,
                y,
                t,
                a,
                g
              );
              break;
            }
          }
      }
      return i;
    }
    function uw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      xT(a, e);
    }
    function ow(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return bT(a);
    }
    function eE(e) {
      for (var t = e.return; t !== null && t.tag !== ue && t.tag !== oe && t.tag !== Te; )
        t = t.return;
      fr = t;
    }
    function Lh(e) {
      if (e !== fr)
        return !1;
      if (!Ni)
        return eE(e), Ni = !0, !1;
      if (e.tag !== oe && (e.tag !== ue || kT(e.type) && !My(e.type, e.memoizedProps))) {
        var t = li;
        if (t)
          if (qy(e))
            tE(e), Xy();
          else
            for (; t; )
              K0(e, t), t = up(t);
      }
      return eE(e), e.tag === Te ? li = ow(e) : li = fr ? up(e.stateNode) : null, !0;
    }
    function sw() {
      return Ni && li !== null;
    }
    function tE(e) {
      for (var t = li; t; )
        X0(e, t), t = up(t);
    }
    function yf() {
      fr = null, li = null, Ni = !1, Ls = !1;
    }
    function nE() {
      wo !== null && (XC(wo), wo = null);
    }
    function dr() {
      return Ni;
    }
    function Zy(e) {
      wo === null ? wo = [e] : wo.push(e);
    }
    var cw = U.ReactCurrentBatchConfig, fw = null;
    function dw() {
      return cw.transition;
    }
    var zi = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var pw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & Jt && (t = a), a = a.return;
        return t;
      }, Ms = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Ns = /* @__PURE__ */ new Set();
      zi.recordUnsafeLifecycleWarnings = function(e, t) {
        Ns.has(e.type) || (typeof t.componentWillMount == "function" && t.componentWillMount.__suppressDeprecationWarning !== !0 && fp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillMount == "function" && dp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && pp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillReceiveProps == "function" && vp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && hp.push(e), e.mode & Jt && typeof t.UNSAFE_componentWillUpdate == "function" && mp.push(e));
      }, zi.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(w) {
          e.add(Ae(w) || "Component"), Ns.add(w.type);
        }), fp = []);
        var t = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(w) {
          t.add(Ae(w) || "Component"), Ns.add(w.type);
        }), dp = []);
        var a = /* @__PURE__ */ new Set();
        pp.length > 0 && (pp.forEach(function(w) {
          a.add(Ae(w) || "Component"), Ns.add(w.type);
        }), pp = []);
        var i = /* @__PURE__ */ new Set();
        vp.length > 0 && (vp.forEach(function(w) {
          i.add(Ae(w) || "Component"), Ns.add(w.type);
        }), vp = []);
        var u = /* @__PURE__ */ new Set();
        hp.length > 0 && (hp.forEach(function(w) {
          u.add(Ae(w) || "Component"), Ns.add(w.type);
        }), hp = []);
        var s = /* @__PURE__ */ new Set();
        if (mp.length > 0 && (mp.forEach(function(w) {
          s.add(Ae(w) || "Component"), Ns.add(w.type);
        }), mp = []), t.size > 0) {
          var f = Ms(t);
          S(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, f);
        }
        if (i.size > 0) {
          var p = Ms(i);
          S(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, p);
        }
        if (s.size > 0) {
          var v = Ms(s);
          S(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, v);
        }
        if (e.size > 0) {
          var y = Ms(e);
          Je(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, y);
        }
        if (a.size > 0) {
          var g = Ms(a);
          Je(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, g);
        }
        if (u.size > 0) {
          var b = Ms(u);
          Je(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
      };
      var Mh = /* @__PURE__ */ new Map(), rE = /* @__PURE__ */ new Set();
      zi.recordLegacyContextWarning = function(e, t) {
        var a = pw(e);
        if (a === null) {
          S("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!rE.has(e.type)) {
          var i = Mh.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], Mh.set(a, i)), i.push(e));
        }
      }, zi.flushLegacyContextWarning = function() {
        Mh.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(Ae(s) || "Component"), rE.add(s.type);
            });
            var u = Ms(i);
            try {
              Ct(a), S(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, u);
            } finally {
              un();
            }
          }
        });
      }, zi.discardPendingWarnings = function() {
        fp = [], dp = [], pp = [], vp = [], hp = [], mp = [], Mh = /* @__PURE__ */ new Map();
      };
    }
    function Ui(e, t) {
      if (e && e.defaultProps) {
        var a = Qe({}, t), i = e.defaultProps;
        for (var u in i)
          a[u] === void 0 && (a[u] = i[u]);
        return a;
      }
      return t;
    }
    var Jy = Co(null), eg;
    eg = {};
    var Nh = null, gf = null, tg = null, zh = !1;
    function Uh() {
      Nh = null, gf = null, tg = null, zh = !1;
    }
    function aE() {
      zh = !0;
    }
    function iE() {
      zh = !1;
    }
    function lE(e, t, a) {
      Vr(Jy, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== eg && S("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = eg;
    }
    function ng(e, t) {
      var a = Jy.current;
      jr(Jy, t), e._currentValue = a;
    }
    function rg(e, t, a) {
      for (var i = e; i !== null; ) {
        var u = i.alternate;
        if (iu(i.childLanes, t) ? u !== null && !iu(u.childLanes, t) && (u.childLanes = $e(u.childLanes, t)) : (i.childLanes = $e(i.childLanes, t), u !== null && (u.childLanes = $e(u.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && S("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function vw(e, t, a) {
      hw(e, t, a);
    }
    function hw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var u = void 0, s = i.dependencies;
        if (s !== null) {
          u = i.child;
          for (var f = s.firstContext; f !== null; ) {
            if (f.context === t) {
              if (i.tag === me) {
                var p = Tn(a), v = Cu(Mt, p);
                v.tag = Hh;
                var y = i.updateQueue;
                if (y !== null) {
                  var g = y.shared, b = g.pending;
                  b === null ? v.next = v : (v.next = b.next, b.next = v), g.pending = v;
                }
              }
              i.lanes = $e(i.lanes, a);
              var w = i.alternate;
              w !== null && (w.lanes = $e(w.lanes, a)), rg(i.return, a, e), s.lanes = $e(s.lanes, a);
              break;
            }
            f = f.next;
          }
        } else if (i.tag === Gt)
          u = i.type === e.type ? null : i.child;
        else if (i.tag === Nt) {
          var L = i.return;
          if (L === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          L.lanes = $e(L.lanes, a);
          var N = L.alternate;
          N !== null && (N.lanes = $e(N.lanes, a)), rg(L, a, e), u = i.sibling;
        } else
          u = i.child;
        if (u !== null)
          u.return = i;
        else
          for (u = i; u !== null; ) {
            if (u === e) {
              u = null;
              break;
            }
            var H = u.sibling;
            if (H !== null) {
              H.return = u.return, u = H;
              break;
            }
            u = u.return;
          }
        i = u;
      }
    }
    function Sf(e, t) {
      Nh = e, gf = null, tg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (Fr(a.lanes, t) && Op(), a.firstContext = null);
      }
    }
    function Hn(e) {
      zh && S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (tg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (gf === null) {
          if (Nh === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          gf = a, Nh.dependencies = {
            lanes: j,
            firstContext: a
          };
        } else
          gf = gf.next = a;
      }
      return t;
    }
    var zs = null;
    function ag(e) {
      zs === null ? zs = [e] : zs.push(e);
    }
    function mw() {
      if (zs !== null) {
        for (var e = 0; e < zs.length; e++) {
          var t = zs[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, u = t.pending;
            if (u !== null) {
              var s = u.next;
              u.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        zs = null;
      }
    }
    function uE(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ah(e, i);
    }
    function yw(e, t, a, i) {
      var u = t.interleaved;
      u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a;
    }
    function gw(e, t, a, i) {
      var u = t.interleaved;
      return u === null ? (a.next = a, ag(t)) : (a.next = u.next, u.next = a), t.interleaved = a, Ah(e, i);
    }
    function Ea(e, t) {
      return Ah(e, t);
    }
    var Sw = Ah;
    function Ah(e, t) {
      e.lanes = $e(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = $e(a.lanes, t)), a === null && (e.flags & (jt | ca)) !== Re && o1(e);
      for (var i = e, u = e.return; u !== null; )
        u.childLanes = $e(u.childLanes, t), a = u.alternate, a !== null ? a.childLanes = $e(a.childLanes, t) : (u.flags & (jt | ca)) !== Re && o1(e), i = u, u = u.return;
      if (i.tag === oe) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var oE = 0, sE = 1, Hh = 2, ig = 3, Fh = !1, lg, jh;
    lg = !1, jh = null;
    function ug(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: j
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function cE(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var u = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = u;
      }
    }
    function Cu(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: oE,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function xo(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var u = i.shared;
      if (jh === u && !lg && (S("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), lg = !0), Sb()) {
        var s = u.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), u.pending = t, Sw(e, a);
      } else
        return gw(e, u, t, a);
    }
    function Vh(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var u = i.shared;
        if (bd(a)) {
          var s = u.lanes;
          s = Dd(s, e.pendingLanes);
          var f = $e(s, a);
          u.lanes = f, ao(e, f);
        }
      }
    }
    function og(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var u = i.updateQueue;
        if (a === u) {
          var s = null, f = null, p = a.firstBaseUpdate;
          if (p !== null) {
            var v = p;
            do {
              var y = {
                eventTime: v.eventTime,
                lane: v.lane,
                tag: v.tag,
                payload: v.payload,
                callback: v.callback,
                next: null
              };
              f === null ? s = f = y : (f.next = y, f = y), v = v.next;
            } while (v !== null);
            f === null ? s = f = t : (f.next = t, f = t);
          } else
            s = f = t;
          a = {
            baseState: u.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: f,
            shared: u.shared,
            effects: u.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var g = a.lastBaseUpdate;
      g === null ? a.firstBaseUpdate = t : g.next = t, a.lastBaseUpdate = t;
    }
    function Ew(e, t, a, i, u, s) {
      switch (a.tag) {
        case sE: {
          var f = a.payload;
          if (typeof f == "function") {
            aE();
            var p = f.call(s, i, u);
            {
              if (e.mode & Jt) {
                Rn(!0);
                try {
                  f.call(s, i, u);
                } finally {
                  Rn(!1);
                }
              }
              iE();
            }
            return p;
          }
          return f;
        }
        case ig:
          e.flags = e.flags & ~Mn | Ne;
        case oE: {
          var v = a.payload, y;
          if (typeof v == "function") {
            aE(), y = v.call(s, i, u);
            {
              if (e.mode & Jt) {
                Rn(!0);
                try {
                  v.call(s, i, u);
                } finally {
                  Rn(!1);
                }
              }
              iE();
            }
          } else
            y = v;
          return y == null ? i : Qe({}, i, y);
        }
        case Hh:
          return Fh = !0, i;
      }
      return i;
    }
    function Bh(e, t, a, i) {
      var u = e.updateQueue;
      Fh = !1, jh = u.shared;
      var s = u.firstBaseUpdate, f = u.lastBaseUpdate, p = u.shared.pending;
      if (p !== null) {
        u.shared.pending = null;
        var v = p, y = v.next;
        v.next = null, f === null ? s = y : f.next = y, f = v;
        var g = e.alternate;
        if (g !== null) {
          var b = g.updateQueue, w = b.lastBaseUpdate;
          w !== f && (w === null ? b.firstBaseUpdate = y : w.next = y, b.lastBaseUpdate = v);
        }
      }
      if (s !== null) {
        var L = u.baseState, N = j, H = null, ie = null, we = null, ye = s;
        do {
          var ut = ye.lane, Ze = ye.eventTime;
          if (iu(i, ut)) {
            if (we !== null) {
              var F = {
                eventTime: Ze,
                lane: it,
                tag: ye.tag,
                payload: ye.payload,
                callback: ye.callback,
                next: null
              };
              we = we.next = F;
            }
            L = Ew(e, u, ye, L, t, a);
            var k = ye.callback;
            if (k !== null && ye.lane !== it) {
              e.flags |= Za;
              var Q = u.effects;
              Q === null ? u.effects = [ye] : Q.push(ye);
            }
          } else {
            var D = {
              eventTime: Ze,
              lane: ut,
              tag: ye.tag,
              payload: ye.payload,
              callback: ye.callback,
              next: null
            };
            we === null ? (ie = we = D, H = L) : we = we.next = D, N = $e(N, ut);
          }
          if (ye = ye.next, ye === null) {
            if (p = u.shared.pending, p === null)
              break;
            var le = p, te = le.next;
            le.next = null, ye = te, u.lastBaseUpdate = le, u.shared.pending = null;
          }
        } while (!0);
        we === null && (H = L), u.baseState = H, u.firstBaseUpdate = ie, u.lastBaseUpdate = we;
        var Le = u.shared.interleaved;
        if (Le !== null) {
          var je = Le;
          do
            N = $e(N, je.lane), je = je.next;
          while (je !== Le);
        } else
          s === null && (u.shared.lanes = j);
        Pp(N), e.lanes = N, e.memoizedState = L;
      }
      jh = null;
    }
    function Cw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function fE() {
      Fh = !1;
    }
    function Ph() {
      return Fh;
    }
    function dE(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u], f = s.callback;
          f !== null && (s.callback = null, Cw(f, a));
        }
    }
    var sg = {}, pE = new Y.Component().refs, cg, fg, dg, pg, vg, vE, $h, hg, mg, yg;
    {
      cg = /* @__PURE__ */ new Set(), fg = /* @__PURE__ */ new Set(), dg = /* @__PURE__ */ new Set(), pg = /* @__PURE__ */ new Set(), hg = /* @__PURE__ */ new Set(), vg = /* @__PURE__ */ new Set(), mg = /* @__PURE__ */ new Set(), yg = /* @__PURE__ */ new Set();
      var hE = /* @__PURE__ */ new Set();
      $h = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          hE.has(a) || (hE.add(a), S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, vE = function(e, t) {
        if (t === void 0) {
          var a = st(e) || "Component";
          vg.has(a) || (vg.add(a), S("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(sg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(sg);
    }
    function gg(e, t, a, i) {
      var u = e.memoizedState, s = a(i, u);
      {
        if (e.mode & Jt) {
          Rn(!0);
          try {
            s = a(i, u);
          } finally {
            Rn(!1);
          }
        }
        vE(t, s);
      }
      var f = s == null ? u : Qe({}, u, s);
      if (e.memoizedState = f, e.lanes === j) {
        var p = e.updateQueue;
        p.baseState = f;
      }
    }
    var Sg = {
      isMounted: Gr,
      enqueueSetState: function(e, t, a) {
        var i = oa(e), u = ea(), s = No(i), f = Cu(u, s);
        f.payload = t, a != null && ($h(a, "setState"), f.callback = a);
        var p = xo(i, f, s);
        p !== null && (Xn(p, i, s, u), Vh(p, i, s)), yl(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = oa(e), u = ea(), s = No(i), f = Cu(u, s);
        f.tag = sE, f.payload = t, a != null && ($h(a, "replaceState"), f.callback = a);
        var p = xo(i, f, s);
        p !== null && (Xn(p, i, s, u), Vh(p, i, s)), yl(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = oa(e), i = ea(), u = No(a), s = Cu(i, u);
        s.tag = Hh, t != null && ($h(t, "forceUpdate"), s.callback = t);
        var f = xo(a, s, u);
        f !== null && (Xn(f, a, u, i), Vh(f, a, u)), Rd(a, u);
      }
    };
    function mE(e, t, a, i, u, s, f) {
      var p = e.stateNode;
      if (typeof p.shouldComponentUpdate == "function") {
        var v = p.shouldComponentUpdate(i, s, f);
        {
          if (e.mode & Jt) {
            Rn(!0);
            try {
              v = p.shouldComponentUpdate(i, s, f);
            } finally {
              Rn(!1);
            }
          }
          v === void 0 && S("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", st(t) || "Component");
        }
        return v;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !Se(a, i) || !Se(u, s) : !0;
    }
    function Rw(e, t, a) {
      var i = e.stateNode;
      {
        var u = st(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? S("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", u) : S("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", u)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && S("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", u), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && S("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", u), i.propTypes && S("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", u), i.contextType && S("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", u), i.contextTypes && S("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", u), t.contextType && t.contextTypes && !mg.has(t) && (mg.add(t), S("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", u)), typeof i.componentShouldUpdate == "function" && S("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", u), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && S("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", st(t) || "A pure component"), typeof i.componentDidUnmount == "function" && S("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", u), typeof i.componentDidReceiveProps == "function" && S("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", u), typeof i.componentWillRecieveProps == "function" && S("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", u), typeof i.UNSAFE_componentWillRecieveProps == "function" && S("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", u);
        var f = i.props !== a;
        i.props !== void 0 && f && S("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", u, u), i.defaultProps && S("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", u, u), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !dg.has(t) && (dg.add(t), S("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", st(t))), typeof i.getDerivedStateFromProps == "function" && S("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof i.getDerivedStateFromError == "function" && S("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", u), typeof t.getSnapshotBeforeUpdate == "function" && S("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", u);
        var p = i.state;
        p && (typeof p != "object" || tt(p)) && S("%s.state: must be set to an object or null", u), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && S("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", u);
      }
    }
    function yE(e, t) {
      t.updater = Sg, e.stateNode = t, Gu(t, e), t._reactInternalInstance = sg;
    }
    function gE(e, t, a) {
      var i = !1, u = Pa, s = Pa, f = t.contextType;
      if ("contextType" in t) {
        var p = f === null || f !== void 0 && f.$$typeof === Ho && f._context === void 0;
        if (!p && !yg.has(t)) {
          yg.add(t);
          var v = "";
          f === void 0 ? v = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof f != "object" ? v = " However, it is set to a " + typeof f + "." : f.$$typeof === Ou ? v = " Did you accidentally pass the Context.Provider instead?" : f._context !== void 0 ? v = " Did you accidentally pass the Context.Consumer instead?" : v = " However, it is set to an object with keys {" + Object.keys(f).join(", ") + "}.", S("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", st(t) || "Component", v);
        }
      }
      if (typeof f == "object" && f !== null)
        s = Hn(f);
      else {
        u = pf(e, t, !0);
        var y = t.contextTypes;
        i = y != null, s = i ? vf(e, u) : Pa;
      }
      var g = new t(a, s);
      if (e.mode & Jt) {
        Rn(!0);
        try {
          g = new t(a, s);
        } finally {
          Rn(!1);
        }
      }
      var b = e.memoizedState = g.state !== null && g.state !== void 0 ? g.state : null;
      yE(e, g);
      {
        if (typeof t.getDerivedStateFromProps == "function" && b === null) {
          var w = st(t) || "Component";
          fg.has(w) || (fg.add(w), S("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", w, g.state === null ? "null" : "undefined", w));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof g.getSnapshotBeforeUpdate == "function") {
          var L = null, N = null, H = null;
          if (typeof g.componentWillMount == "function" && g.componentWillMount.__suppressDeprecationWarning !== !0 ? L = "componentWillMount" : typeof g.UNSAFE_componentWillMount == "function" && (L = "UNSAFE_componentWillMount"), typeof g.componentWillReceiveProps == "function" && g.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? N = "componentWillReceiveProps" : typeof g.UNSAFE_componentWillReceiveProps == "function" && (N = "UNSAFE_componentWillReceiveProps"), typeof g.componentWillUpdate == "function" && g.componentWillUpdate.__suppressDeprecationWarning !== !0 ? H = "componentWillUpdate" : typeof g.UNSAFE_componentWillUpdate == "function" && (H = "UNSAFE_componentWillUpdate"), L !== null || N !== null || H !== null) {
            var ie = st(t) || "Component", we = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            pg.has(ie) || (pg.add(ie), S(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, ie, we, L !== null ? `
  ` + L : "", N !== null ? `
  ` + N : "", H !== null ? `
  ` + H : ""));
          }
        }
      }
      return i && P0(e, u, s), g;
    }
    function Tw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (S("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", Ae(e) || "Component"), Sg.enqueueReplaceState(t, t.state, null));
    }
    function SE(e, t, a, i) {
      var u = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== u) {
        {
          var s = Ae(e) || "Component";
          cg.has(s) || (cg.add(s), S("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        Sg.enqueueReplaceState(t, t.state, null);
      }
    }
    function Eg(e, t, a, i) {
      Rw(e, t, a);
      var u = e.stateNode;
      u.props = a, u.state = e.memoizedState, u.refs = pE, ug(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        u.context = Hn(s);
      else {
        var f = pf(e, t, !0);
        u.context = vf(e, f);
      }
      {
        if (u.state === a) {
          var p = st(t) || "Component";
          hg.has(p) || (hg.add(p), S("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", p));
        }
        e.mode & Jt && zi.recordLegacyContextWarning(e, u), zi.recordUnsafeLifecycleWarnings(e, u);
      }
      u.state = e.memoizedState;
      var v = t.getDerivedStateFromProps;
      if (typeof v == "function" && (gg(e, t, v, a), u.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof u.getSnapshotBeforeUpdate != "function" && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (Tw(e, u), Bh(e, a, u, i), u.state = e.memoizedState), typeof u.componentDidMount == "function") {
        var y = Pe;
        y |= Mr, (e.mode & pa) !== be && (y |= Nr), e.flags |= y;
      }
    }
    function ww(e, t, a, i) {
      var u = e.stateNode, s = e.memoizedProps;
      u.props = s;
      var f = u.context, p = t.contextType, v = Pa;
      if (typeof p == "object" && p !== null)
        v = Hn(p);
      else {
        var y = pf(e, t, !0);
        v = vf(e, y);
      }
      var g = t.getDerivedStateFromProps, b = typeof g == "function" || typeof u.getSnapshotBeforeUpdate == "function";
      !b && (typeof u.UNSAFE_componentWillReceiveProps == "function" || typeof u.componentWillReceiveProps == "function") && (s !== a || f !== v) && SE(e, u, a, v), fE();
      var w = e.memoizedState, L = u.state = w;
      if (Bh(e, a, u, i), L = e.memoizedState, s === a && w === L && !wh() && !Ph()) {
        if (typeof u.componentDidMount == "function") {
          var N = Pe;
          N |= Mr, (e.mode & pa) !== be && (N |= Nr), e.flags |= N;
        }
        return !1;
      }
      typeof g == "function" && (gg(e, t, g, a), L = e.memoizedState);
      var H = Ph() || mE(e, t, s, a, w, L, v);
      if (H) {
        if (!b && (typeof u.UNSAFE_componentWillMount == "function" || typeof u.componentWillMount == "function") && (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function") {
          var ie = Pe;
          ie |= Mr, (e.mode & pa) !== be && (ie |= Nr), e.flags |= ie;
        }
      } else {
        if (typeof u.componentDidMount == "function") {
          var we = Pe;
          we |= Mr, (e.mode & pa) !== be && (we |= Nr), e.flags |= we;
        }
        e.memoizedProps = a, e.memoizedState = L;
      }
      return u.props = a, u.state = L, u.context = v, H;
    }
    function xw(e, t, a, i, u) {
      var s = t.stateNode;
      cE(e, t);
      var f = t.memoizedProps, p = t.type === t.elementType ? f : Ui(t.type, f);
      s.props = p;
      var v = t.pendingProps, y = s.context, g = a.contextType, b = Pa;
      if (typeof g == "object" && g !== null)
        b = Hn(g);
      else {
        var w = pf(t, a, !0);
        b = vf(t, w);
      }
      var L = a.getDerivedStateFromProps, N = typeof L == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !N && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (f !== v || y !== b) && SE(t, s, i, b), fE();
      var H = t.memoizedState, ie = s.state = H;
      if (Bh(t, i, s, u), ie = t.memoizedState, f === v && H === ie && !wh() && !Ph() && !Ee)
        return typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= sa), !1;
      typeof L == "function" && (gg(t, a, L, i), ie = t.memoizedState);
      var we = Ph() || mE(t, a, p, i, H, ie, b) || Ee;
      return we ? (!N && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, ie, b), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, ie, b)), typeof s.componentDidUpdate == "function" && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= sa)) : (typeof s.componentDidUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= Pe), typeof s.getSnapshotBeforeUpdate == "function" && (f !== e.memoizedProps || H !== e.memoizedState) && (t.flags |= sa), t.memoizedProps = i, t.memoizedState = ie), s.props = i, s.state = ie, s.context = b, we;
    }
    var Cg, Rg, Tg, wg, xg, EE = function(e, t) {
    };
    Cg = !1, Rg = !1, Tg = {}, wg = {}, xg = {}, EE = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = Ae(t) || "Component";
        wg[a] || (wg[a] = !0, S('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function yp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & Jt || Me) && !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var u = Ae(e) || "Component";
          Tg[u] || (S('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), Tg[u] = !0);
        }
        if (a._owner) {
          var s = a._owner, f;
          if (s) {
            var p = s;
            if (p.tag !== me)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            f = p.stateNode;
          }
          if (!f)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var v = f;
          Jn(i, "ref");
          var y = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === y)
            return t.ref;
          var g = function(b) {
            var w = v.refs;
            w === pE && (w = v.refs = {}), b === null ? delete w[y] : w[y] = b;
          };
          return g._stringRef = y, g;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function Yh(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function Ih(e) {
      {
        var t = Ae(e) || "Component";
        if (xg[t])
          return;
        xg[t] = !0, S("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function CE(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function RE(e) {
      function t(D, F) {
        if (!!e) {
          var k = D.deletions;
          k === null ? (D.deletions = [F], D.flags |= St) : k.push(F);
        }
      }
      function a(D, F) {
        if (!e)
          return null;
        for (var k = F; k !== null; )
          t(D, k), k = k.sibling;
        return null;
      }
      function i(D, F) {
        for (var k = /* @__PURE__ */ new Map(), Q = F; Q !== null; )
          Q.key !== null ? k.set(Q.key, Q) : k.set(Q.index, Q), Q = Q.sibling;
        return k;
      }
      function u(D, F) {
        var k = Ps(D, F);
        return k.index = 0, k.sibling = null, k;
      }
      function s(D, F, k) {
        if (D.index = k, !e)
          return D.flags |= cd, F;
        var Q = D.alternate;
        if (Q !== null) {
          var le = Q.index;
          return le < F ? (D.flags |= jt, F) : le;
        } else
          return D.flags |= jt, F;
      }
      function f(D) {
        return e && D.alternate === null && (D.flags |= jt), D;
      }
      function p(D, F, k, Q) {
        if (F === null || F.tag !== Fe) {
          var le = ZS(k, D.mode, Q);
          return le.return = D, le;
        } else {
          var te = u(F, k);
          return te.return = D, te;
        }
      }
      function v(D, F, k, Q) {
        var le = k.type;
        if (le === Ma)
          return g(D, F, k.props.children, Q, k.key);
        if (F !== null && (F.elementType === le || d1(F, k) || typeof le == "object" && le !== null && le.$$typeof === jn && CE(le) === F.type)) {
          var te = u(F, k.props);
          return te.ref = yp(D, F, k), te.return = D, te._debugSource = k._source, te._debugOwner = k._owner, te;
        }
        var Le = KS(k, D.mode, Q);
        return Le.ref = yp(D, F, k), Le.return = D, Le;
      }
      function y(D, F, k, Q) {
        if (F === null || F.tag !== ge || F.stateNode.containerInfo !== k.containerInfo || F.stateNode.implementation !== k.implementation) {
          var le = JS(k, D.mode, Q);
          return le.return = D, le;
        } else {
          var te = u(F, k.children || []);
          return te.return = D, te;
        }
      }
      function g(D, F, k, Q, le) {
        if (F === null || F.tag !== vt) {
          var te = Uo(k, D.mode, Q, le);
          return te.return = D, te;
        } else {
          var Le = u(F, k);
          return Le.return = D, Le;
        }
      }
      function b(D, F, k) {
        if (typeof F == "string" && F !== "" || typeof F == "number") {
          var Q = ZS("" + F, D.mode, k);
          return Q.return = D, Q;
        }
        if (typeof F == "object" && F !== null) {
          switch (F.$$typeof) {
            case Yi: {
              var le = KS(F, D.mode, k);
              return le.ref = yp(D, null, F), le.return = D, le;
            }
            case Ir: {
              var te = JS(F, D.mode, k);
              return te.return = D, te;
            }
            case jn: {
              var Le = F._payload, je = F._init;
              return b(D, je(Le), k);
            }
          }
          if (tt(F) || Na(F)) {
            var Dt = Uo(F, D.mode, k, null);
            return Dt.return = D, Dt;
          }
          Yh(D, F);
        }
        return typeof F == "function" && Ih(D), null;
      }
      function w(D, F, k, Q) {
        var le = F !== null ? F.key : null;
        if (typeof k == "string" && k !== "" || typeof k == "number")
          return le !== null ? null : p(D, F, "" + k, Q);
        if (typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case Yi:
              return k.key === le ? v(D, F, k, Q) : null;
            case Ir:
              return k.key === le ? y(D, F, k, Q) : null;
            case jn: {
              var te = k._payload, Le = k._init;
              return w(D, F, Le(te), Q);
            }
          }
          if (tt(k) || Na(k))
            return le !== null ? null : g(D, F, k, Q, null);
          Yh(D, k);
        }
        return typeof k == "function" && Ih(D), null;
      }
      function L(D, F, k, Q, le) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var te = D.get(k) || null;
          return p(F, te, "" + Q, le);
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case Yi: {
              var Le = D.get(Q.key === null ? k : Q.key) || null;
              return v(F, Le, Q, le);
            }
            case Ir: {
              var je = D.get(Q.key === null ? k : Q.key) || null;
              return y(F, je, Q, le);
            }
            case jn:
              var Dt = Q._payload, mt = Q._init;
              return L(D, F, k, mt(Dt), le);
          }
          if (tt(Q) || Na(Q)) {
            var _n = D.get(k) || null;
            return g(F, _n, Q, le, null);
          }
          Yh(F, Q);
        }
        return typeof Q == "function" && Ih(F), null;
      }
      function N(D, F, k) {
        {
          if (typeof D != "object" || D === null)
            return F;
          switch (D.$$typeof) {
            case Yi:
            case Ir:
              EE(D, k);
              var Q = D.key;
              if (typeof Q != "string")
                break;
              if (F === null) {
                F = /* @__PURE__ */ new Set(), F.add(Q);
                break;
              }
              if (!F.has(Q)) {
                F.add(Q);
                break;
              }
              S("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted \u2014 the behavior is unsupported and could change in a future version.", Q);
              break;
            case jn:
              var le = D._payload, te = D._init;
              N(te(le), F, k);
              break;
          }
        }
        return F;
      }
      function H(D, F, k, Q) {
        for (var le = null, te = 0; te < k.length; te++) {
          var Le = k[te];
          le = N(Le, le, D);
        }
        for (var je = null, Dt = null, mt = F, _n = 0, yt = 0, Sn = null; mt !== null && yt < k.length; yt++) {
          mt.index > yt ? (Sn = mt, mt = null) : Sn = mt.sibling;
          var Pr = w(D, mt, k[yt], Q);
          if (Pr === null) {
            mt === null && (mt = Sn);
            break;
          }
          e && mt && Pr.alternate === null && t(D, mt), _n = s(Pr, _n, yt), Dt === null ? je = Pr : Dt.sibling = Pr, Dt = Pr, mt = Sn;
        }
        if (yt === k.length) {
          if (a(D, mt), dr()) {
            var Sr = yt;
            ks(D, Sr);
          }
          return je;
        }
        if (mt === null) {
          for (; yt < k.length; yt++) {
            var Ya = b(D, k[yt], Q);
            Ya !== null && (_n = s(Ya, _n, yt), Dt === null ? je = Ya : Dt.sibling = Ya, Dt = Ya);
          }
          if (dr()) {
            var ta = yt;
            ks(D, ta);
          }
          return je;
        }
        for (var na = i(D, mt); yt < k.length; yt++) {
          var $r = L(na, D, yt, k[yt], Q);
          $r !== null && (e && $r.alternate !== null && na.delete($r.key === null ? yt : $r.key), _n = s($r, _n, yt), Dt === null ? je = $r : Dt.sibling = $r, Dt = $r);
        }
        if (e && na.forEach(function(Af) {
          return t(D, Af);
        }), dr()) {
          var _u = yt;
          ks(D, _u);
        }
        return je;
      }
      function ie(D, F, k, Q) {
        var le = Na(k);
        if (typeof le != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && k[Symbol.toStringTag] === "Generator" && (Rg || S("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), Rg = !0), k.entries === le && (Cg || S("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), Cg = !0);
          var te = le.call(k);
          if (te)
            for (var Le = null, je = te.next(); !je.done; je = te.next()) {
              var Dt = je.value;
              Le = N(Dt, Le, D);
            }
        }
        var mt = le.call(k);
        if (mt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var _n = null, yt = null, Sn = F, Pr = 0, Sr = 0, Ya = null, ta = mt.next(); Sn !== null && !ta.done; Sr++, ta = mt.next()) {
          Sn.index > Sr ? (Ya = Sn, Sn = null) : Ya = Sn.sibling;
          var na = w(D, Sn, ta.value, Q);
          if (na === null) {
            Sn === null && (Sn = Ya);
            break;
          }
          e && Sn && na.alternate === null && t(D, Sn), Pr = s(na, Pr, Sr), yt === null ? _n = na : yt.sibling = na, yt = na, Sn = Ya;
        }
        if (ta.done) {
          if (a(D, Sn), dr()) {
            var $r = Sr;
            ks(D, $r);
          }
          return _n;
        }
        if (Sn === null) {
          for (; !ta.done; Sr++, ta = mt.next()) {
            var _u = b(D, ta.value, Q);
            _u !== null && (Pr = s(_u, Pr, Sr), yt === null ? _n = _u : yt.sibling = _u, yt = _u);
          }
          if (dr()) {
            var Af = Sr;
            ks(D, Af);
          }
          return _n;
        }
        for (var Wp = i(D, Sn); !ta.done; Sr++, ta = mt.next()) {
          var Ul = L(Wp, D, Sr, ta.value, Q);
          Ul !== null && (e && Ul.alternate !== null && Wp.delete(Ul.key === null ? Sr : Ul.key), Pr = s(Ul, Pr, Sr), yt === null ? _n = Ul : yt.sibling = Ul, yt = Ul);
        }
        if (e && Wp.forEach(function(j_) {
          return t(D, j_);
        }), dr()) {
          var F_ = Sr;
          ks(D, F_);
        }
        return _n;
      }
      function we(D, F, k, Q) {
        if (F !== null && F.tag === Fe) {
          a(D, F.sibling);
          var le = u(F, k);
          return le.return = D, le;
        }
        a(D, F);
        var te = ZS(k, D.mode, Q);
        return te.return = D, te;
      }
      function ye(D, F, k, Q) {
        for (var le = k.key, te = F; te !== null; ) {
          if (te.key === le) {
            var Le = k.type;
            if (Le === Ma) {
              if (te.tag === vt) {
                a(D, te.sibling);
                var je = u(te, k.props.children);
                return je.return = D, je._debugSource = k._source, je._debugOwner = k._owner, je;
              }
            } else if (te.elementType === Le || d1(te, k) || typeof Le == "object" && Le !== null && Le.$$typeof === jn && CE(Le) === te.type) {
              a(D, te.sibling);
              var Dt = u(te, k.props);
              return Dt.ref = yp(D, te, k), Dt.return = D, Dt._debugSource = k._source, Dt._debugOwner = k._owner, Dt;
            }
            a(D, te);
            break;
          } else
            t(D, te);
          te = te.sibling;
        }
        if (k.type === Ma) {
          var mt = Uo(k.props.children, D.mode, Q, k.key);
          return mt.return = D, mt;
        } else {
          var _n = KS(k, D.mode, Q);
          return _n.ref = yp(D, F, k), _n.return = D, _n;
        }
      }
      function ut(D, F, k, Q) {
        for (var le = k.key, te = F; te !== null; ) {
          if (te.key === le)
            if (te.tag === ge && te.stateNode.containerInfo === k.containerInfo && te.stateNode.implementation === k.implementation) {
              a(D, te.sibling);
              var Le = u(te, k.children || []);
              return Le.return = D, Le;
            } else {
              a(D, te);
              break;
            }
          else
            t(D, te);
          te = te.sibling;
        }
        var je = JS(k, D.mode, Q);
        return je.return = D, je;
      }
      function Ze(D, F, k, Q) {
        var le = typeof k == "object" && k !== null && k.type === Ma && k.key === null;
        if (le && (k = k.props.children), typeof k == "object" && k !== null) {
          switch (k.$$typeof) {
            case Yi:
              return f(ye(D, F, k, Q));
            case Ir:
              return f(ut(D, F, k, Q));
            case jn:
              var te = k._payload, Le = k._init;
              return Ze(D, F, Le(te), Q);
          }
          if (tt(k))
            return H(D, F, k, Q);
          if (Na(k))
            return ie(D, F, k, Q);
          Yh(D, k);
        }
        return typeof k == "string" && k !== "" || typeof k == "number" ? f(we(D, F, "" + k, Q)) : (typeof k == "function" && Ih(D), a(D, F));
      }
      return Ze;
    }
    var Ef = RE(!0), TE = RE(!1);
    function bw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = Ps(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = Ps(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function _w(e, t) {
      for (var a = e.child; a !== null; )
        n_(a, t), a = a.sibling;
    }
    var gp = {}, bo = Co(gp), Sp = Co(gp), Qh = Co(gp);
    function Wh(e) {
      if (e === gp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function wE() {
      var e = Wh(Qh.current);
      return e;
    }
    function bg(e, t) {
      Vr(Qh, t, e), Vr(Sp, e, e), Vr(bo, gp, e);
      var a = BR(t);
      jr(bo, e), Vr(bo, a, e);
    }
    function Cf(e) {
      jr(bo, e), jr(Sp, e), jr(Qh, e);
    }
    function _g() {
      var e = Wh(bo.current);
      return e;
    }
    function xE(e) {
      Wh(Qh.current);
      var t = Wh(bo.current), a = PR(t, e.type);
      t !== a && (Vr(Sp, e, e), Vr(bo, a, e));
    }
    function Dg(e) {
      Sp.current === e && (jr(bo, e), jr(Sp, e));
    }
    var Dw = 0, bE = 1, _E = 1, Ep = 2, Ai = Co(Dw);
    function kg(e, t) {
      return (e & t) !== 0;
    }
    function Rf(e) {
      return e & bE;
    }
    function Og(e, t) {
      return e & bE | t;
    }
    function kw(e, t) {
      return e | t;
    }
    function _o(e, t) {
      Vr(Ai, t, e);
    }
    function Tf(e) {
      jr(Ai, e);
    }
    function Ow(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function Gh(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === Te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || H0(i) || Ay(i))
              return t;
          }
        } else if (t.tag === Et && t.memoizedProps.revealOrder !== void 0) {
          var u = (t.flags & Ne) !== Re;
          if (u)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var Ca = 0, $n = 1, Dl = 2, Yn = 4, pr = 8, Lg = [];
    function Mg() {
      for (var e = 0; e < Lg.length; e++) {
        var t = Lg[e];
        t._workInProgressVersionPrimary = null;
      }
      Lg.length = 0;
    }
    function Lw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var re = U.ReactCurrentDispatcher, Cp = U.ReactCurrentBatchConfig, Ng, wf;
    Ng = /* @__PURE__ */ new Set();
    var Us = j, _t = null, In = null, Qn = null, qh = !1, Rp = !1, Tp = 0, Mw = 0, Nw = 25, V = null, ui = null, Do = -1, zg = !1;
    function Tt() {
      {
        var e = V;
        ui === null ? ui = [e] : ui.push(e);
      }
    }
    function Z() {
      {
        var e = V;
        ui !== null && (Do++, ui[Do] !== e && zw(e));
      }
    }
    function xf(e) {
      e != null && !tt(e) && S("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", V, typeof e);
    }
    function zw(e) {
      {
        var t = Ae(_t);
        if (!Ng.has(t) && (Ng.add(t), ui !== null)) {
          for (var a = "", i = 30, u = 0; u <= Do; u++) {
            for (var s = ui[u], f = u === Do ? e : s, p = u + 1 + ". " + s; p.length < i; )
              p += " ";
            p += f + `
`, a += p;
          }
          S(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Br() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function Ug(e, t) {
      if (zg)
        return !1;
      if (t === null)
        return S("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", V), !1;
      e.length !== t.length && S(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, V, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!fe(e[a], t[a]))
          return !1;
      return !0;
    }
    function bf(e, t, a, i, u, s) {
      Us = s, _t = t, ui = e !== null ? e._debugHookTypes : null, Do = -1, zg = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = j, e !== null && e.memoizedState !== null ? re.current = qE : ui !== null ? re.current = GE : re.current = WE;
      var f = a(i, u);
      if (Rp) {
        var p = 0;
        do {
          if (Rp = !1, Tp = 0, p >= Nw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          p += 1, zg = !1, In = null, Qn = null, t.updateQueue = null, Do = -1, re.current = XE, f = a(i, u);
        } while (Rp);
      }
      re.current = om, t._debugHookTypes = ui;
      var v = In !== null && In.next !== null;
      if (Us = j, _t = null, In = null, Qn = null, V = null, ui = null, Do = -1, e !== null && (e.flags & Vn) !== (t.flags & Vn) && (e.mode & Ge) !== be && S("Internal React error: Expected static flag was missing. Please notify the React team."), qh = !1, v)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return f;
    }
    function _f() {
      var e = Tp !== 0;
      return Tp = 0, e;
    }
    function DE(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & pa) !== be ? t.flags &= ~(ql | Nr | Qt | Pe) : t.flags &= ~(Qt | Pe), e.lanes = ro(e.lanes, a);
    }
    function kE() {
      if (re.current = om, qh) {
        for (var e = _t.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        qh = !1;
      }
      Us = j, _t = null, In = null, Qn = null, ui = null, Do = -1, V = null, PE = !1, Rp = !1, Tp = 0;
    }
    function kl() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return Qn === null ? _t.memoizedState = Qn = e : Qn = Qn.next = e, Qn;
    }
    function oi() {
      var e;
      if (In === null) {
        var t = _t.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = In.next;
      var a;
      if (Qn === null ? a = _t.memoizedState : a = Qn.next, a !== null)
        Qn = a, a = Qn.next, In = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        In = e;
        var i = {
          memoizedState: In.memoizedState,
          baseState: In.baseState,
          baseQueue: In.baseQueue,
          queue: In.queue,
          next: null
        };
        Qn === null ? _t.memoizedState = Qn = i : Qn = Qn.next = i;
      }
      return Qn;
    }
    function OE() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function Ag(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function Hg(e, t, a) {
      var i = kl(), u;
      a !== void 0 ? u = a(t) : u = t, i.memoizedState = i.baseState = u;
      var s = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      };
      i.queue = s;
      var f = s.dispatch = Fw.bind(null, _t, s);
      return [i.memoizedState, f];
    }
    function Fg(e, t, a) {
      var i = oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = In, f = s.baseQueue, p = u.pending;
      if (p !== null) {
        if (f !== null) {
          var v = f.next, y = p.next;
          f.next = y, p.next = v;
        }
        s.baseQueue !== f && S("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = f = p, u.pending = null;
      }
      if (f !== null) {
        var g = f.next, b = s.baseState, w = null, L = null, N = null, H = g;
        do {
          var ie = H.lane;
          if (iu(Us, ie)) {
            if (N !== null) {
              var ye = {
                lane: it,
                action: H.action,
                hasEagerState: H.hasEagerState,
                eagerState: H.eagerState,
                next: null
              };
              N = N.next = ye;
            }
            if (H.hasEagerState)
              b = H.eagerState;
            else {
              var ut = H.action;
              b = e(b, ut);
            }
          } else {
            var we = {
              lane: ie,
              action: H.action,
              hasEagerState: H.hasEagerState,
              eagerState: H.eagerState,
              next: null
            };
            N === null ? (L = N = we, w = b) : N = N.next = we, _t.lanes = $e(_t.lanes, ie), Pp(ie);
          }
          H = H.next;
        } while (H !== null && H !== g);
        N === null ? w = b : N.next = L, fe(b, i.memoizedState) || Op(), i.memoizedState = b, i.baseState = w, i.baseQueue = N, u.lastRenderedState = b;
      }
      var Ze = u.interleaved;
      if (Ze !== null) {
        var D = Ze;
        do {
          var F = D.lane;
          _t.lanes = $e(_t.lanes, F), Pp(F), D = D.next;
        } while (D !== Ze);
      } else
        f === null && (u.lanes = j);
      var k = u.dispatch;
      return [i.memoizedState, k];
    }
    function jg(e, t, a) {
      var i = oi(), u = i.queue;
      if (u === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      u.lastRenderedReducer = e;
      var s = u.dispatch, f = u.pending, p = i.memoizedState;
      if (f !== null) {
        u.pending = null;
        var v = f.next, y = v;
        do {
          var g = y.action;
          p = e(p, g), y = y.next;
        } while (y !== v);
        fe(p, i.memoizedState) || Op(), i.memoizedState = p, i.baseQueue === null && (i.baseState = p), u.lastRenderedState = p;
      }
      return [p, s];
    }
    function K_(e, t, a) {
    }
    function Z_(e, t, a) {
    }
    function Vg(e, t, a) {
      var i = _t, u = kl(), s, f = dr();
      if (f) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), wf || s !== a() && (S("The result of getServerSnapshot should be cached to avoid an infinite loop"), wf = !0);
      } else {
        if (s = t(), !wf) {
          var p = t();
          fe(s, p) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
        }
        var v = bm();
        if (v === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ds(v, Us) || LE(i, t, s);
      }
      u.memoizedState = s;
      var y = {
        value: s,
        getSnapshot: t
      };
      return u.queue = y, em(NE.bind(null, i, y, e), [e]), i.flags |= Qt, wp($n | pr, ME.bind(null, i, y, s, t), void 0, null), s;
    }
    function Xh(e, t, a) {
      var i = _t, u = oi(), s = t();
      if (!wf) {
        var f = t();
        fe(s, f) || (S("The result of getSnapshot should be cached to avoid an infinite loop"), wf = !0);
      }
      var p = u.memoizedState, v = !fe(p, s);
      v && (u.memoizedState = s, Op());
      var y = u.queue;
      if (bp(NE.bind(null, i, y, e), [e]), y.getSnapshot !== t || v || Qn !== null && Qn.memoizedState.tag & $n) {
        i.flags |= Qt, wp($n | pr, ME.bind(null, i, y, s, t), void 0, null);
        var g = bm();
        if (g === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ds(g, Us) || LE(i, t, s);
      }
      return s;
    }
    function LE(e, t, a) {
      e.flags |= rs;
      var i = {
        getSnapshot: t,
        value: a
      }, u = _t.updateQueue;
      if (u === null)
        u = OE(), _t.updateQueue = u, u.stores = [i];
      else {
        var s = u.stores;
        s === null ? u.stores = [i] : s.push(i);
      }
    }
    function ME(e, t, a, i) {
      t.value = a, t.getSnapshot = i, zE(t) && UE(e);
    }
    function NE(e, t, a) {
      var i = function() {
        zE(t) && UE(e);
      };
      return a(i);
    }
    function zE(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !fe(a, i);
      } catch {
        return !0;
      }
    }
    function UE(e) {
      var t = Ea(e, ke);
      t !== null && Xn(t, e, ke, Mt);
    }
    function Kh(e) {
      var t = kl();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: j,
        dispatch: null,
        lastRenderedReducer: Ag,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = jw.bind(null, _t, a);
      return [t.memoizedState, i];
    }
    function Bg(e) {
      return Fg(Ag);
    }
    function Pg(e) {
      return jg(Ag);
    }
    function wp(e, t, a, i) {
      var u = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        next: null
      }, s = _t.updateQueue;
      if (s === null)
        s = OE(), _t.updateQueue = s, s.lastEffect = u.next = u;
      else {
        var f = s.lastEffect;
        if (f === null)
          s.lastEffect = u.next = u;
        else {
          var p = f.next;
          f.next = u, u.next = p, s.lastEffect = u;
        }
      }
      return u;
    }
    function $g(e) {
      var t = kl();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Zh(e) {
      var t = oi();
      return t.memoizedState;
    }
    function xp(e, t, a, i) {
      var u = kl(), s = i === void 0 ? null : i;
      _t.flags |= e, u.memoizedState = wp($n | t, a, void 0, s);
    }
    function Jh(e, t, a, i) {
      var u = oi(), s = i === void 0 ? null : i, f = void 0;
      if (In !== null) {
        var p = In.memoizedState;
        if (f = p.destroy, s !== null) {
          var v = p.deps;
          if (Ug(s, v)) {
            u.memoizedState = wp(t, a, f, s);
            return;
          }
        }
      }
      _t.flags |= e, u.memoizedState = wp($n | t, a, f, s);
    }
    function em(e, t) {
      return (_t.mode & pa) !== be ? xp(ql | Qt | fl, pr, e, t) : xp(Qt | fl, pr, e, t);
    }
    function bp(e, t) {
      return Jh(Qt, pr, e, t);
    }
    function Yg(e, t) {
      return xp(Pe, Dl, e, t);
    }
    function tm(e, t) {
      return Jh(Pe, Dl, e, t);
    }
    function Ig(e, t) {
      var a = Pe;
      return a |= Mr, (_t.mode & pa) !== be && (a |= Nr), xp(a, Yn, e, t);
    }
    function nm(e, t) {
      return Jh(Pe, Yn, e, t);
    }
    function AE(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var u = t;
        u.hasOwnProperty("current") || S("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(u).join(", ") + "}");
        var s = e();
        return u.current = s, function() {
          u.current = null;
        };
      }
    }
    function Qg(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, u = Pe;
      return u |= Mr, (_t.mode & pa) !== be && (u |= Nr), xp(u, Yn, AE.bind(null, t, e), i);
    }
    function rm(e, t, a) {
      typeof t != "function" && S("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Jh(Pe, Yn, AE.bind(null, t, e), i);
    }
    function Uw(e, t) {
    }
    var am = Uw;
    function Wg(e, t) {
      var a = kl(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function im(e, t) {
      var a = oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ug(i, s))
          return u[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function Gg(e, t) {
      var a = kl(), i = t === void 0 ? null : t, u = e();
      return a.memoizedState = [u, i], u;
    }
    function lm(e, t) {
      var a = oi(), i = t === void 0 ? null : t, u = a.memoizedState;
      if (u !== null && i !== null) {
        var s = u[1];
        if (Ug(i, s))
          return u[0];
      }
      var f = e();
      return a.memoizedState = [f, i], f;
    }
    function qg(e) {
      var t = kl();
      return t.memoizedState = e, e;
    }
    function HE(e) {
      var t = oi(), a = In, i = a.memoizedState;
      return jE(t, i, e);
    }
    function FE(e) {
      var t = oi();
      if (In === null)
        return t.memoizedState = e, e;
      var a = In.memoizedState;
      return jE(t, a, e);
    }
    function jE(e, t, a) {
      var i = !ty(Us);
      if (i) {
        if (!fe(a, t)) {
          var u = _d();
          _t.lanes = $e(_t.lanes, u), Pp(u), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Op()), e.memoizedState = a, a;
    }
    function Aw(e, t, a) {
      var i = ha();
      wn(nr(i, Pn)), e(!0);
      var u = Cp.transition;
      Cp.transition = {};
      var s = Cp.transition;
      Cp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (wn(i), Cp.transition = u, u === null && s._updatedFibers) {
          var f = s._updatedFibers.size;
          f > 10 && Je("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function Xg() {
      var e = Kh(!1), t = e[0], a = e[1], i = Aw.bind(null, a), u = kl();
      return u.memoizedState = i, [t, i];
    }
    function VE() {
      var e = Bg(), t = e[0], a = oi(), i = a.memoizedState;
      return [t, i];
    }
    function BE() {
      var e = Pg(), t = e[0], a = oi(), i = a.memoizedState;
      return [t, i];
    }
    var PE = !1;
    function Hw() {
      return PE;
    }
    function Kg() {
      var e = kl(), t = bm(), a = t.identifierPrefix, i;
      if (dr()) {
        var u = KT();
        i = ":" + a + "R" + u;
        var s = Tp++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var f = Mw++;
        i = ":" + a + "r" + f.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function um() {
      var e = oi(), t = e.memoizedState;
      return t;
    }
    function Fw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = No(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        YE(t, u);
      else {
        var s = uE(e, t, u, i);
        if (s !== null) {
          var f = ea();
          Xn(s, e, i, f), IE(s, t, i);
        }
      }
      QE(e, i);
    }
    function jw(e, t, a) {
      typeof arguments[3] == "function" && S("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = No(e), u = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if ($E(e))
        YE(t, u);
      else {
        var s = e.alternate;
        if (e.lanes === j && (s === null || s.lanes === j)) {
          var f = t.lastRenderedReducer;
          if (f !== null) {
            var p;
            p = re.current, re.current = Hi;
            try {
              var v = t.lastRenderedState, y = f(v, a);
              if (u.hasEagerState = !0, u.eagerState = y, fe(y, v)) {
                yw(e, t, u, i);
                return;
              }
            } catch {
            } finally {
              re.current = p;
            }
          }
        }
        var g = uE(e, t, u, i);
        if (g !== null) {
          var b = ea();
          Xn(g, e, i, b), IE(g, t, i);
        }
      }
      QE(e, i);
    }
    function $E(e) {
      var t = e.alternate;
      return e === _t || t !== null && t === _t;
    }
    function YE(e, t) {
      Rp = qh = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function IE(e, t, a) {
      if (bd(a)) {
        var i = t.lanes;
        i = Dd(i, e.pendingLanes);
        var u = $e(i, a);
        t.lanes = u, ao(e, u);
      }
    }
    function QE(e, t, a) {
      yl(e, t);
    }
    var om = {
      readContext: Hn,
      useCallback: Br,
      useContext: Br,
      useEffect: Br,
      useImperativeHandle: Br,
      useInsertionEffect: Br,
      useLayoutEffect: Br,
      useMemo: Br,
      useReducer: Br,
      useRef: Br,
      useState: Br,
      useDebugValue: Br,
      useDeferredValue: Br,
      useTransition: Br,
      useMutableSource: Br,
      useSyncExternalStore: Br,
      useId: Br,
      unstable_isNewReconciler: X
    }, WE = null, GE = null, qE = null, XE = null, Ol = null, Hi = null, sm = null;
    {
      var Zg = function() {
        S("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, He = function() {
        S("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      WE = {
        readContext: function(e) {
          return Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Tt(), xf(t), Wg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Tt(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Tt(), xf(t), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Tt(), xf(a), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Tt(), xf(t), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Tt(), xf(t), Ig(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Tt(), xf(t);
          var a = re.current;
          re.current = Ol;
          try {
            return Gg(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Tt();
          var i = re.current;
          re.current = Ol;
          try {
            return Hg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Tt(), $g(e);
        },
        useState: function(e) {
          V = "useState", Tt();
          var t = re.current;
          re.current = Ol;
          try {
            return Kh(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Tt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Tt(), qg(e);
        },
        useTransition: function() {
          return V = "useTransition", Tt(), Xg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Tt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Tt(), Vg(e, t, a);
        },
        useId: function() {
          return V = "useId", Tt(), Kg();
        },
        unstable_isNewReconciler: X
      }, GE = {
        readContext: function(e) {
          return Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Z(), Wg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Z(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Z(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Z(), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Z(), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Z(), Ig(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Z();
          var a = re.current;
          re.current = Ol;
          try {
            return Gg(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Z();
          var i = re.current;
          re.current = Ol;
          try {
            return Hg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Z(), $g(e);
        },
        useState: function(e) {
          V = "useState", Z();
          var t = re.current;
          re.current = Ol;
          try {
            return Kh(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Z(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Z(), qg(e);
        },
        useTransition: function() {
          return V = "useTransition", Z(), Xg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Z(), Vg(e, t, a);
        },
        useId: function() {
          return V = "useId", Z(), Kg();
        },
        unstable_isNewReconciler: X
      }, qE = {
        readContext: function(e) {
          return Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Z(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Z(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Z(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Z(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Z(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Z(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Z();
          var a = re.current;
          re.current = Hi;
          try {
            return lm(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Z();
          var i = re.current;
          re.current = Hi;
          try {
            return Fg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Z(), Zh();
        },
        useState: function(e) {
          V = "useState", Z();
          var t = re.current;
          re.current = Hi;
          try {
            return Bg(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Z(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Z(), HE(e);
        },
        useTransition: function() {
          return V = "useTransition", Z(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Z(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", Z(), um();
        },
        unstable_isNewReconciler: X
      }, XE = {
        readContext: function(e) {
          return Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", Z(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", Z(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", Z(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", Z(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", Z(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", Z(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", Z();
          var a = re.current;
          re.current = sm;
          try {
            return lm(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", Z();
          var i = re.current;
          re.current = sm;
          try {
            return jg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", Z(), Zh();
        },
        useState: function(e) {
          V = "useState", Z();
          var t = re.current;
          re.current = sm;
          try {
            return Pg(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", Z(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", Z(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", Z(), BE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", Z(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", Z(), um();
        },
        unstable_isNewReconciler: X
      }, Ol = {
        readContext: function(e) {
          return Zg(), Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", He(), Tt(), Wg(e, t);
        },
        useContext: function(e) {
          return V = "useContext", He(), Tt(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", He(), Tt(), em(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", He(), Tt(), Qg(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", He(), Tt(), Yg(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", He(), Tt(), Ig(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", He(), Tt();
          var a = re.current;
          re.current = Ol;
          try {
            return Gg(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", He(), Tt();
          var i = re.current;
          re.current = Ol;
          try {
            return Hg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", He(), Tt(), $g(e);
        },
        useState: function(e) {
          V = "useState", He(), Tt();
          var t = re.current;
          re.current = Ol;
          try {
            return Kh(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", He(), Tt(), void 0;
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", He(), Tt(), qg(e);
        },
        useTransition: function() {
          return V = "useTransition", He(), Tt(), Xg();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", He(), Tt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", He(), Tt(), Vg(e, t, a);
        },
        useId: function() {
          return V = "useId", He(), Tt(), Kg();
        },
        unstable_isNewReconciler: X
      }, Hi = {
        readContext: function(e) {
          return Zg(), Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", He(), Z(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", He(), Z(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", He(), Z(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", He(), Z(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", He(), Z(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", He(), Z(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", He(), Z();
          var a = re.current;
          re.current = Hi;
          try {
            return lm(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", He(), Z();
          var i = re.current;
          re.current = Hi;
          try {
            return Fg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", He(), Z(), Zh();
        },
        useState: function(e) {
          V = "useState", He(), Z();
          var t = re.current;
          re.current = Hi;
          try {
            return Bg(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", He(), Z(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", He(), Z(), HE(e);
        },
        useTransition: function() {
          return V = "useTransition", He(), Z(), VE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", He(), Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", He(), Z(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", He(), Z(), um();
        },
        unstable_isNewReconciler: X
      }, sm = {
        readContext: function(e) {
          return Zg(), Hn(e);
        },
        useCallback: function(e, t) {
          return V = "useCallback", He(), Z(), im(e, t);
        },
        useContext: function(e) {
          return V = "useContext", He(), Z(), Hn(e);
        },
        useEffect: function(e, t) {
          return V = "useEffect", He(), Z(), bp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return V = "useImperativeHandle", He(), Z(), rm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return V = "useInsertionEffect", He(), Z(), tm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return V = "useLayoutEffect", He(), Z(), nm(e, t);
        },
        useMemo: function(e, t) {
          V = "useMemo", He(), Z();
          var a = re.current;
          re.current = Hi;
          try {
            return lm(e, t);
          } finally {
            re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          V = "useReducer", He(), Z();
          var i = re.current;
          re.current = Hi;
          try {
            return jg(e, t, a);
          } finally {
            re.current = i;
          }
        },
        useRef: function(e) {
          return V = "useRef", He(), Z(), Zh();
        },
        useState: function(e) {
          V = "useState", He(), Z();
          var t = re.current;
          re.current = Hi;
          try {
            return Pg(e);
          } finally {
            re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return V = "useDebugValue", He(), Z(), am();
        },
        useDeferredValue: function(e) {
          return V = "useDeferredValue", He(), Z(), FE(e);
        },
        useTransition: function() {
          return V = "useTransition", He(), Z(), BE();
        },
        useMutableSource: function(e, t, a) {
          return V = "useMutableSource", He(), Z(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return V = "useSyncExternalStore", He(), Z(), Xh(e, t);
        },
        useId: function() {
          return V = "useId", He(), Z(), um();
        },
        unstable_isNewReconciler: X
      };
    }
    var ko = q.unstable_now, KE = 0, cm = -1, _p = -1, fm = -1, Jg = !1, dm = !1;
    function ZE() {
      return Jg;
    }
    function Vw() {
      dm = !0;
    }
    function Bw() {
      Jg = !1, dm = !1;
    }
    function Pw() {
      Jg = dm, dm = !1;
    }
    function JE() {
      return KE;
    }
    function eC() {
      KE = ko();
    }
    function eS(e) {
      _p = ko(), e.actualStartTime < 0 && (e.actualStartTime = ko());
    }
    function tC(e) {
      _p = -1;
    }
    function pm(e, t) {
      if (_p >= 0) {
        var a = ko() - _p;
        e.actualDuration += a, t && (e.selfBaseDuration = a), _p = -1;
      }
    }
    function Ll(e) {
      if (cm >= 0) {
        var t = ko() - cm;
        cm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case oe:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case rt:
              var u = a.stateNode;
              u.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function tS(e) {
      if (fm >= 0) {
        var t = ko() - fm;
        fm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case oe:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case rt:
              var u = a.stateNode;
              u !== null && (u.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function Ml() {
      cm = ko();
    }
    function nS() {
      fm = ko();
    }
    function rS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function As(e, t) {
      return {
        value: e,
        source: t,
        stack: Uu(t),
        digest: null
      };
    }
    function aS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a != null ? a : null,
        digest: t != null ? t : null
      };
    }
    function $w(e, t) {
      return !0;
    }
    function iS(e, t) {
      try {
        var a = $w(e, t);
        if (a === !1)
          return;
        var i = t.value, u = t.source, s = t.stack, f = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === me)
            return;
          console.error(i);
        }
        var p = u ? Ae(u) : null, v = p ? "The above error occurred in the <" + p + "> component:" : "The above error occurred in one of your React components:", y;
        if (e.tag === oe)
          y = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var g = Ae(e) || "Anonymous";
          y = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + g + ".");
        }
        var b = v + `
` + f + `

` + ("" + y);
        console.error(b);
      } catch (w) {
        setTimeout(function() {
          throw w;
        });
      }
    }
    var Yw = typeof WeakMap == "function" ? WeakMap : Map;
    function nC(e, t, a) {
      var i = Cu(Mt, a);
      i.tag = ig, i.payload = {
        element: null
      };
      var u = t.value;
      return i.callback = function() {
        Ab(u), iS(e, t);
      }, i;
    }
    function lS(e, t, a) {
      var i = Cu(Mt, a);
      i.tag = ig;
      var u = e.type.getDerivedStateFromError;
      if (typeof u == "function") {
        var s = t.value;
        i.payload = function() {
          return u(s);
        }, i.callback = function() {
          p1(e), iS(e, t);
        };
      }
      var f = e.stateNode;
      return f !== null && typeof f.componentDidCatch == "function" && (i.callback = function() {
        p1(e), iS(e, t), typeof u != "function" && zb(this);
        var v = t.value, y = t.stack;
        this.componentDidCatch(v, {
          componentStack: y !== null ? y : ""
        }), typeof u != "function" && (Fr(e.lanes, ke) || S("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", Ae(e) || "Unknown"));
      }), i;
    }
    function rC(e, t, a) {
      var i = e.pingCache, u;
      if (i === null ? (i = e.pingCache = new Yw(), u = /* @__PURE__ */ new Set(), i.set(t, u)) : (u = i.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), i.set(t, u))), !u.has(a)) {
        u.add(a);
        var s = Hb.bind(null, e, t, a);
        Bn && $p(e, a), t.then(s, s);
      }
    }
    function Iw(e, t, a, i) {
      var u = e.updateQueue;
      if (u === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        u.add(a);
    }
    function Qw(e, t) {
      var a = e.tag;
      if ((e.mode & Ge) === be && (a === Oe || a === Be || a === Ue)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function aC(e) {
      var t = e;
      do {
        if (t.tag === Te && Ow(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function iC(e, t, a, i, u) {
      if ((e.mode & Ge) === be) {
        if (e === t)
          e.flags |= Mn;
        else {
          if (e.flags |= Ne, a.flags |= as, a.flags &= ~(fc | Qr), a.tag === me) {
            var s = a.alternate;
            if (s === null)
              a.tag = Dn;
            else {
              var f = Cu(Mt, ke);
              f.tag = Hh, xo(a, f, ke);
            }
          }
          a.lanes = $e(a.lanes, ke);
        }
        return e;
      }
      return e.flags |= Mn, e.lanes = u, e;
    }
    function Ww(e, t, a, i, u) {
      if (a.flags |= Qr, Bn && $p(e, u), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        Qw(a), dr() && a.mode & Ge && q0();
        var f = aC(t);
        if (f !== null) {
          f.flags &= ~on, iC(f, t, a, e, u), f.mode & Ge && rC(e, s, u), Iw(f, e, s);
          return;
        } else {
          if (!no(u)) {
            rC(e, s, u), jS();
            return;
          }
          var p = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = p;
        }
      } else if (dr() && a.mode & Ge) {
        q0();
        var v = aC(t);
        if (v !== null) {
          (v.flags & Mn) === Re && (v.flags |= on), iC(v, t, a, e, u), Zy(As(i, a));
          return;
        }
      }
      i = As(i, a), bb(i);
      var y = t;
      do {
        switch (y.tag) {
          case oe: {
            var g = i;
            y.flags |= Mn;
            var b = Tn(u);
            y.lanes = $e(y.lanes, b);
            var w = nC(y, g, b);
            og(y, w);
            return;
          }
          case me:
            var L = i, N = y.type, H = y.stateNode;
            if ((y.flags & Ne) === Re && (typeof N.getDerivedStateFromError == "function" || H !== null && typeof H.componentDidCatch == "function" && !a1(H))) {
              y.flags |= Mn;
              var ie = Tn(u);
              y.lanes = $e(y.lanes, ie);
              var we = lS(y, L, ie);
              og(y, we);
              return;
            }
            break;
        }
        y = y.return;
      } while (y !== null);
    }
    function Gw() {
      return null;
    }
    var Dp = U.ReactCurrentOwner, Fi = !1, uS, kp, oS, sS, cS, Hs, fS, vm;
    uS = {}, kp = {}, oS = {}, sS = {}, cS = {}, Hs = !1, fS = {}, vm = {};
    function Zr(e, t, a, i) {
      e === null ? t.child = TE(t, null, a, i) : t.child = Ef(t, e.child, a, i);
    }
    function qw(e, t, a, i) {
      t.child = Ef(t, e.child, null, i), t.child = Ef(t, null, a, i);
    }
    function lC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Mi(
          s,
          i,
          "prop",
          st(a)
        );
      }
      var f = a.render, p = t.ref, v, y;
      Sf(t, u), ml(t);
      {
        if (Dp.current = t, kr(!0), v = bf(e, t, f, i, p, u), y = _f(), t.mode & Jt) {
          Rn(!0);
          try {
            v = bf(e, t, f, i, p, u), y = _f();
          } finally {
            Rn(!1);
          }
        }
        kr(!1);
      }
      return Xl(), e !== null && !Fi ? (DE(e, t, u), Ru(e, t, u)) : (dr() && y && Qy(t), t.flags |= sl, Zr(e, t, v, u), t.child);
    }
    function uC(e, t, a, i, u) {
      if (e === null) {
        var s = a.type;
        if (e_(s) && a.compare === null && a.defaultProps === void 0) {
          var f = s;
          return f = Uf(s), t.tag = Ue, t.type = f, vS(t, s), oC(e, t, f, i, u);
        }
        {
          var p = s.propTypes;
          p && Mi(
            p,
            i,
            "prop",
            st(s)
          );
        }
        var v = XS(a.type, null, i, t, t.mode, u);
        return v.ref = t.ref, v.return = t, t.child = v, v;
      }
      {
        var y = a.type, g = y.propTypes;
        g && Mi(
          g,
          i,
          "prop",
          st(y)
        );
      }
      var b = e.child, w = ES(e, u);
      if (!w) {
        var L = b.memoizedProps, N = a.compare;
        if (N = N !== null ? N : Se, N(L, i) && e.ref === t.ref)
          return Ru(e, t, u);
      }
      t.flags |= sl;
      var H = Ps(b, i);
      return H.ref = t.ref, H.return = t, t.child = H, H;
    }
    function oC(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === jn) {
          var f = s, p = f._payload, v = f._init;
          try {
            s = v(p);
          } catch {
            s = null;
          }
          var y = s && s.propTypes;
          y && Mi(
            y,
            i,
            "prop",
            st(s)
          );
        }
      }
      if (e !== null) {
        var g = e.memoizedProps;
        if (Se(g, i) && e.ref === t.ref && t.type === e.type)
          if (Fi = !1, t.pendingProps = i = g, ES(e, u))
            (e.flags & as) !== Re && (Fi = !0);
          else
            return t.lanes = e.lanes, Ru(e, t, u);
      }
      return dS(e, t, a, i, u);
    }
    function sC(e, t, a) {
      var i = t.pendingProps, u = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || R)
        if ((t.mode & Ge) === be) {
          var f = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = f, _m(t, a);
        } else if (Fr(a, Hr)) {
          var b = {
            baseLanes: j,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = b;
          var w = s !== null ? s.baseLanes : a;
          _m(t, w);
        } else {
          var p = null, v;
          if (s !== null) {
            var y = s.baseLanes;
            v = $e(y, a);
          } else
            v = a;
          t.lanes = t.childLanes = Hr;
          var g = {
            baseLanes: v,
            cachePool: p,
            transitions: null
          };
          return t.memoizedState = g, t.updateQueue = null, _m(t, v), null;
        }
      else {
        var L;
        s !== null ? (L = $e(s.baseLanes, a), t.memoizedState = null) : L = a, _m(t, L);
      }
      return Zr(e, t, u, a), t.child;
    }
    function Xw(e, t, a) {
      var i = t.pendingProps;
      return Zr(e, t, i, a), t.child;
    }
    function Kw(e, t, a) {
      var i = t.pendingProps.children;
      return Zr(e, t, i, a), t.child;
    }
    function Zw(e, t, a) {
      {
        t.flags |= Pe;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var u = t.pendingProps, s = u.children;
      return Zr(e, t, s, a), t.child;
    }
    function cC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Lr, t.flags |= fd);
    }
    function dS(e, t, a, i, u) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && Mi(
          s,
          i,
          "prop",
          st(a)
        );
      }
      var f;
      {
        var p = pf(t, a, !0);
        f = vf(t, p);
      }
      var v, y;
      Sf(t, u), ml(t);
      {
        if (Dp.current = t, kr(!0), v = bf(e, t, a, i, f, u), y = _f(), t.mode & Jt) {
          Rn(!0);
          try {
            v = bf(e, t, a, i, f, u), y = _f();
          } finally {
            Rn(!1);
          }
        }
        kr(!1);
      }
      return Xl(), e !== null && !Fi ? (DE(e, t, u), Ru(e, t, u)) : (dr() && y && Qy(t), t.flags |= sl, Zr(e, t, v, u), t.child);
    }
    function fC(e, t, a, i, u) {
      {
        switch (h_(t)) {
          case !1: {
            var s = t.stateNode, f = t.type, p = new f(t.memoizedProps, s.context), v = p.state;
            s.updater.enqueueSetState(s, v, null);
            break;
          }
          case !0: {
            t.flags |= Ne, t.flags |= Mn;
            var y = new Error("Simulated error coming from DevTools"), g = Tn(u);
            t.lanes = $e(t.lanes, g);
            var b = lS(t, As(y, t), g);
            og(t, b);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var w = a.propTypes;
          w && Mi(
            w,
            i,
            "prop",
            st(a)
          );
        }
      }
      var L;
      _l(a) ? (L = !0, bh(t)) : L = !1, Sf(t, u);
      var N = t.stateNode, H;
      N === null ? (mm(e, t), gE(t, a, i), Eg(t, a, i, u), H = !0) : e === null ? H = ww(t, a, i, u) : H = xw(e, t, a, i, u);
      var ie = pS(e, t, a, H, L, u);
      {
        var we = t.stateNode;
        H && we.props !== i && (Hs || S("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", Ae(t) || "a component"), Hs = !0);
      }
      return ie;
    }
    function pS(e, t, a, i, u, s) {
      cC(e, t);
      var f = (t.flags & Ne) !== Re;
      if (!i && !f)
        return u && I0(t, a, !1), Ru(e, t, s);
      var p = t.stateNode;
      Dp.current = t;
      var v;
      if (f && typeof a.getDerivedStateFromError != "function")
        v = null, tC();
      else {
        ml(t);
        {
          if (kr(!0), v = p.render(), t.mode & Jt) {
            Rn(!0);
            try {
              p.render();
            } finally {
              Rn(!1);
            }
          }
          kr(!1);
        }
        Xl();
      }
      return t.flags |= sl, e !== null && f ? qw(e, t, v, s) : Zr(e, t, v, s), t.memoizedState = p.state, u && I0(t, a, !0), t.child;
    }
    function dC(e) {
      var t = e.stateNode;
      t.pendingContext ? $0(e, t.pendingContext, t.pendingContext !== t.context) : t.context && $0(e, t.context, !1), bg(e, t.containerInfo);
    }
    function Jw(e, t, a) {
      if (dC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, u = t.memoizedState, s = u.element;
      cE(e, t), Bh(t, i, null, a);
      var f = t.memoizedState;
      t.stateNode;
      var p = f.element;
      if (u.isDehydrated) {
        var v = {
          element: p,
          isDehydrated: !1,
          cache: f.cache,
          pendingSuspenseBoundaries: f.pendingSuspenseBoundaries,
          transitions: f.transitions
        }, y = t.updateQueue;
        if (y.baseState = v, t.memoizedState = v, t.flags & on) {
          var g = As(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return pC(e, t, p, a, g);
        } else if (p !== s) {
          var b = As(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return pC(e, t, p, a, b);
        } else {
          rw(t);
          var w = TE(t, null, p, a);
          t.child = w;
          for (var L = w; L; )
            L.flags = L.flags & ~jt | ca, L = L.sibling;
        }
      } else {
        if (yf(), p === s)
          return Ru(e, t, a);
        Zr(e, t, p, a);
      }
      return t.child;
    }
    function pC(e, t, a, i, u) {
      return yf(), Zy(u), t.flags |= on, Zr(e, t, a, i), t.child;
    }
    function ex(e, t, a) {
      xE(t), e === null && Ky(t);
      var i = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, f = u.children, p = My(i, u);
      return p ? f = null : s !== null && My(i, s) && (t.flags |= Rt), cC(e, t), Zr(e, t, f, a), t.child;
    }
    function tx(e, t) {
      return e === null && Ky(t), null;
    }
    function nx(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s = a, f = s._payload, p = s._init, v = p(f);
      t.type = v;
      var y = t.tag = t_(v), g = Ui(v, u), b;
      switch (y) {
        case Oe:
          return vS(t, v), t.type = v = Uf(v), b = dS(null, t, v, g, i), b;
        case me:
          return t.type = v = YS(v), b = fC(null, t, v, g, i), b;
        case Be:
          return t.type = v = IS(v), b = lC(null, t, v, g, i), b;
        case qe: {
          if (t.type !== t.elementType) {
            var w = v.propTypes;
            w && Mi(
              w,
              g,
              "prop",
              st(v)
            );
          }
          return b = uC(
            null,
            t,
            v,
            Ui(v.type, g),
            i
          ), b;
        }
      }
      var L = "";
      throw v !== null && typeof v == "object" && v.$$typeof === jn && (L = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + v + ". " + ("Lazy element type must resolve to a class or function." + L));
    }
    function rx(e, t, a, i, u) {
      mm(e, t), t.tag = me;
      var s;
      return _l(a) ? (s = !0, bh(t)) : s = !1, Sf(t, u), gE(t, a, i), Eg(t, a, i, u), pS(null, t, a, !0, s, u);
    }
    function ax(e, t, a, i) {
      mm(e, t);
      var u = t.pendingProps, s;
      {
        var f = pf(t, a, !1);
        s = vf(t, f);
      }
      Sf(t, i);
      var p, v;
      ml(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var y = st(a) || "Unknown";
          uS[y] || (S("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", y, y), uS[y] = !0);
        }
        t.mode & Jt && zi.recordLegacyContextWarning(t, null), kr(!0), Dp.current = t, p = bf(null, t, a, u, s, i), v = _f(), kr(!1);
      }
      if (Xl(), t.flags |= sl, typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        var g = st(a) || "Unknown";
        kp[g] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", g, g, g), kp[g] = !0);
      }
      if (typeof p == "object" && p !== null && typeof p.render == "function" && p.$$typeof === void 0) {
        {
          var b = st(a) || "Unknown";
          kp[b] || (S("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", b, b, b), kp[b] = !0);
        }
        t.tag = me, t.memoizedState = null, t.updateQueue = null;
        var w = !1;
        return _l(a) ? (w = !0, bh(t)) : w = !1, t.memoizedState = p.state !== null && p.state !== void 0 ? p.state : null, ug(t), yE(t, p), Eg(t, a, u, i), pS(null, t, a, !0, w, i);
      } else {
        if (t.tag = Oe, t.mode & Jt) {
          Rn(!0);
          try {
            p = bf(null, t, a, u, s, i), v = _f();
          } finally {
            Rn(!1);
          }
        }
        return dr() && v && Qy(t), Zr(null, t, p, i), vS(t, a), t.child;
      }
    }
    function vS(e, t) {
      {
        if (t && t.childContextTypes && S("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = sr();
          i && (a += `

Check the render method of \`` + i + "`.");
          var u = i || "", s = e._debugSource;
          s && (u = s.fileName + ":" + s.lineNumber), cS[u] || (cS[u] = !0, S("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var f = st(t) || "Unknown";
          sS[f] || (S("%s: Function components do not support getDerivedStateFromProps.", f), sS[f] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var p = st(t) || "Unknown";
          oS[p] || (S("%s: Function components do not support contextType.", p), oS[p] = !0);
        }
      }
    }
    var hS = {
      dehydrated: null,
      treeContext: null,
      retryLane: it
    };
    function mS(e) {
      return {
        baseLanes: e,
        cachePool: Gw(),
        transitions: null
      };
    }
    function ix(e, t) {
      var a = null;
      return {
        baseLanes: $e(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function lx(e, t, a, i) {
      if (t !== null) {
        var u = t.memoizedState;
        if (u === null)
          return !1;
      }
      return kg(e, Ep);
    }
    function ux(e, t) {
      return ro(e.childLanes, t);
    }
    function vC(e, t, a) {
      var i = t.pendingProps;
      m_(t) && (t.flags |= Ne);
      var u = Ai.current, s = !1, f = (t.flags & Ne) !== Re;
      if (f || lx(u, e) ? (s = !0, t.flags &= ~Ne) : (e === null || e.memoizedState !== null) && (u = kw(u, _E)), u = Rf(u), _o(t, u), e === null) {
        Ky(t);
        var p = t.memoizedState;
        if (p !== null) {
          var v = p.dehydrated;
          if (v !== null)
            return dx(t, v);
        }
        var y = i.children, g = i.fallback;
        if (s) {
          var b = ox(t, y, g, a), w = t.child;
          return w.memoizedState = mS(a), t.memoizedState = hS, b;
        } else
          return yS(t, y);
      } else {
        var L = e.memoizedState;
        if (L !== null) {
          var N = L.dehydrated;
          if (N !== null)
            return px(e, t, f, i, N, L, a);
        }
        if (s) {
          var H = i.fallback, ie = i.children, we = cx(e, t, ie, H, a), ye = t.child, ut = e.child.memoizedState;
          return ye.memoizedState = ut === null ? mS(a) : ix(ut, a), ye.childLanes = ux(e, a), t.memoizedState = hS, we;
        } else {
          var Ze = i.children, D = sx(e, t, Ze, a);
          return t.memoizedState = null, D;
        }
      }
    }
    function yS(e, t, a) {
      var i = e.mode, u = {
        mode: "visible",
        children: t
      }, s = gS(u, i);
      return s.return = e, e.child = s, s;
    }
    function ox(e, t, a, i) {
      var u = e.mode, s = e.child, f = {
        mode: "hidden",
        children: t
      }, p, v;
      return (u & Ge) === be && s !== null ? (p = s, p.childLanes = j, p.pendingProps = f, e.mode & De && (p.actualDuration = 0, p.actualStartTime = -1, p.selfBaseDuration = 0, p.treeBaseDuration = 0), v = Uo(a, u, i, null)) : (p = gS(f, u), v = Uo(a, u, i, null)), p.return = e, v.return = e, p.sibling = v, e.child = p, v;
    }
    function gS(e, t, a) {
      return h1(e, t, j, null);
    }
    function hC(e, t) {
      return Ps(e, t);
    }
    function sx(e, t, a, i) {
      var u = e.child, s = u.sibling, f = hC(u, {
        mode: "visible",
        children: a
      });
      if ((t.mode & Ge) === be && (f.lanes = i), f.return = t, f.sibling = null, s !== null) {
        var p = t.deletions;
        p === null ? (t.deletions = [s], t.flags |= St) : p.push(s);
      }
      return t.child = f, f;
    }
    function cx(e, t, a, i, u) {
      var s = t.mode, f = e.child, p = f.sibling, v = {
        mode: "hidden",
        children: a
      }, y;
      if ((s & Ge) === be && t.child !== f) {
        var g = t.child;
        y = g, y.childLanes = j, y.pendingProps = v, t.mode & De && (y.actualDuration = 0, y.actualStartTime = -1, y.selfBaseDuration = f.selfBaseDuration, y.treeBaseDuration = f.treeBaseDuration), t.deletions = null;
      } else
        y = hC(f, v), y.subtreeFlags = f.subtreeFlags & Vn;
      var b;
      return p !== null ? b = Ps(p, i) : (b = Uo(i, s, u, null), b.flags |= jt), b.return = t, y.return = t, y.sibling = b, t.child = y, b;
    }
    function hm(e, t, a, i) {
      i !== null && Zy(i), Ef(t, e.child, null, a);
      var u = t.pendingProps, s = u.children, f = yS(t, s);
      return f.flags |= jt, t.memoizedState = null, f;
    }
    function fx(e, t, a, i, u) {
      var s = t.mode, f = {
        mode: "visible",
        children: a
      }, p = gS(f, s), v = Uo(i, s, u, null);
      return v.flags |= jt, p.return = t, v.return = t, p.sibling = v, t.child = p, (t.mode & Ge) !== be && Ef(t, e.child, null, u), v;
    }
    function dx(e, t, a) {
      return (e.mode & Ge) === be ? (S("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = ke) : Ay(t) ? e.lanes = Jl : e.lanes = Hr, null;
    }
    function px(e, t, a, i, u, s, f) {
      if (a)
        if (t.flags & on) {
          t.flags &= ~on;
          var D = aS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return hm(e, t, f, D);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Ne, null;
          var F = i.children, k = i.fallback, Q = fx(e, t, F, k, f), le = t.child;
          return le.memoizedState = mS(f), t.memoizedState = hS, Q;
        }
      else {
        if (tw(), (t.mode & Ge) === be)
          return hm(
            e,
            t,
            f,
            null
          );
        if (Ay(u)) {
          var p, v, y;
          {
            var g = gT(u);
            p = g.digest, v = g.message, y = g.stack;
          }
          var b;
          v ? b = new Error(v) : b = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var w = aS(b, p, y);
          return hm(e, t, f, w);
        }
        var L = Fr(f, e.childLanes);
        if (Fi || L) {
          var N = bm();
          if (N !== null) {
            var H = ry(N, f);
            if (H !== it && H !== s.retryLane) {
              s.retryLane = H;
              var ie = Mt;
              Ea(e, H), Xn(N, e, H, ie);
            }
          }
          jS();
          var we = aS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return hm(e, t, f, we);
        } else if (H0(u)) {
          t.flags |= Ne, t.child = e.child;
          var ye = Fb.bind(null, e);
          return ST(u, ye), null;
        } else {
          aw(t, u, s.treeContext);
          var ut = i.children, Ze = yS(t, ut);
          return Ze.flags |= ca, Ze;
        }
      }
    }
    function mC(e, t, a) {
      e.lanes = $e(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = $e(i.lanes, t)), rg(e.return, t, a);
    }
    function vx(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === Te) {
          var u = i.memoizedState;
          u !== null && mC(i, a, e);
        } else if (i.tag === Et)
          mC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function hx(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && Gh(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function mx(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !fS[e])
        if (fS[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              S('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              S('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          S('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function yx(e, t) {
      e !== void 0 && !vm[e] && (e !== "collapsed" && e !== "hidden" ? (vm[e] = !0, S('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (vm[e] = !0, S('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function yC(e, t) {
      {
        var a = tt(e), i = !a && typeof Na(e) == "function";
        if (a || i) {
          var u = a ? "array" : "iterable";
          return S("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", u, t, u), !1;
        }
      }
      return !0;
    }
    function gx(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (tt(e)) {
          for (var a = 0; a < e.length; a++)
            if (!yC(e[a], a))
              return;
        } else {
          var i = Na(e);
          if (typeof i == "function") {
            var u = i.call(e);
            if (u)
              for (var s = u.next(), f = 0; !s.done; s = u.next()) {
                if (!yC(s.value, f))
                  return;
                f++;
              }
          } else
            S('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function SS(e, t, a, i, u) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: u
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = u);
    }
    function gC(e, t, a) {
      var i = t.pendingProps, u = i.revealOrder, s = i.tail, f = i.children;
      mx(u), yx(s, u), gx(f, u), Zr(e, t, f, a);
      var p = Ai.current, v = kg(p, Ep);
      if (v)
        p = Og(p, Ep), t.flags |= Ne;
      else {
        var y = e !== null && (e.flags & Ne) !== Re;
        y && vx(t, t.child, a), p = Rf(p);
      }
      if (_o(t, p), (t.mode & Ge) === be)
        t.memoizedState = null;
      else
        switch (u) {
          case "forwards": {
            var g = hx(t.child), b;
            g === null ? (b = t.child, t.child = null) : (b = g.sibling, g.sibling = null), SS(
              t,
              !1,
              b,
              g,
              s
            );
            break;
          }
          case "backwards": {
            var w = null, L = t.child;
            for (t.child = null; L !== null; ) {
              var N = L.alternate;
              if (N !== null && Gh(N) === null) {
                t.child = L;
                break;
              }
              var H = L.sibling;
              L.sibling = w, w = L, L = H;
            }
            SS(
              t,
              !0,
              w,
              null,
              s
            );
            break;
          }
          case "together": {
            SS(
              t,
              !1,
              null,
              null,
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function Sx(e, t, a) {
      bg(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = Ef(t, null, i, a) : Zr(e, t, i, a), t.child;
    }
    var SC = !1;
    function Ex(e, t, a) {
      var i = t.type, u = i._context, s = t.pendingProps, f = t.memoizedProps, p = s.value;
      {
        "value" in s || SC || (SC = !0, S("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var v = t.type.propTypes;
        v && Mi(v, s, "prop", "Context.Provider");
      }
      if (lE(t, u, p), f !== null) {
        var y = f.value;
        if (fe(y, p)) {
          if (f.children === s.children && !wh())
            return Ru(e, t, a);
        } else
          vw(t, u, a);
      }
      var g = s.children;
      return Zr(e, t, g, a), t.child;
    }
    var EC = !1;
    function Cx(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (EC || (EC = !0, S("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var u = t.pendingProps, s = u.children;
      typeof s != "function" && S("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), Sf(t, a);
      var f = Hn(i);
      ml(t);
      var p;
      return Dp.current = t, kr(!0), p = s(f), kr(!1), Xl(), t.flags |= sl, Zr(e, t, p, a), t.child;
    }
    function Op() {
      Fi = !0;
    }
    function mm(e, t) {
      (t.mode & Ge) === be && e !== null && (e.alternate = null, t.alternate = null, t.flags |= jt);
    }
    function Ru(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), tC(), Pp(t.lanes), Fr(a, t.childLanes) ? (bw(e, t), t.child) : null;
    }
    function Rx(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var u = i.child;
          if (u === null)
            throw new Error("Expected parent to have a child.");
          for (; u.sibling !== t; )
            if (u = u.sibling, u === null)
              throw new Error("Expected to find the previous sibling.");
          u.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= St) : s.push(e), a.flags |= jt, a;
      }
    }
    function ES(e, t) {
      var a = e.lanes;
      return !!Fr(a, t);
    }
    function Tx(e, t, a) {
      switch (t.tag) {
        case oe:
          dC(t), t.stateNode, yf();
          break;
        case ue:
          xE(t);
          break;
        case me: {
          var i = t.type;
          _l(i) && bh(t);
          break;
        }
        case ge:
          bg(t, t.stateNode.containerInfo);
          break;
        case Gt: {
          var u = t.memoizedProps.value, s = t.type._context;
          lE(t, s, u);
          break;
        }
        case rt:
          {
            var f = Fr(a, t.childLanes);
            f && (t.flags |= Pe);
            {
              var p = t.stateNode;
              p.effectDuration = 0, p.passiveEffectDuration = 0;
            }
          }
          break;
        case Te: {
          var v = t.memoizedState;
          if (v !== null) {
            if (v.dehydrated !== null)
              return _o(t, Rf(Ai.current)), t.flags |= Ne, null;
            var y = t.child, g = y.childLanes;
            if (Fr(a, g))
              return vC(e, t, a);
            _o(t, Rf(Ai.current));
            var b = Ru(e, t, a);
            return b !== null ? b.sibling : null;
          } else
            _o(t, Rf(Ai.current));
          break;
        }
        case Et: {
          var w = (e.flags & Ne) !== Re, L = Fr(a, t.childLanes);
          if (w) {
            if (L)
              return gC(e, t, a);
            t.flags |= Ne;
          }
          var N = t.memoizedState;
          if (N !== null && (N.rendering = null, N.tail = null, N.lastEffect = null), _o(t, Ai.current), L)
            break;
          return null;
        }
        case Ye:
        case at:
          return t.lanes = j, sC(e, t, a);
      }
      return Ru(e, t, a);
    }
    function CC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return Rx(e, t, XS(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, u = t.pendingProps;
        if (i !== u || wh() || t.type !== e.type)
          Fi = !0;
        else {
          var s = ES(e, a);
          if (!s && (t.flags & Ne) === Re)
            return Fi = !1, Tx(e, t, a);
          (e.flags & as) !== Re ? Fi = !0 : Fi = !1;
        }
      } else if (Fi = !1, dr() && qT(t)) {
        var f = t.index, p = XT();
        G0(t, p, f);
      }
      switch (t.lanes = j, t.tag) {
        case Ht:
          return ax(e, t, t.type, a);
        case qt: {
          var v = t.elementType;
          return nx(e, t, v, a);
        }
        case Oe: {
          var y = t.type, g = t.pendingProps, b = t.elementType === y ? g : Ui(y, g);
          return dS(e, t, y, b, a);
        }
        case me: {
          var w = t.type, L = t.pendingProps, N = t.elementType === w ? L : Ui(w, L);
          return fC(e, t, w, N, a);
        }
        case oe:
          return Jw(e, t, a);
        case ue:
          return ex(e, t, a);
        case Fe:
          return tx(e, t);
        case Te:
          return vC(e, t, a);
        case ge:
          return Sx(e, t, a);
        case Be: {
          var H = t.type, ie = t.pendingProps, we = t.elementType === H ? ie : Ui(H, ie);
          return lC(e, t, H, we, a);
        }
        case vt:
          return Xw(e, t, a);
        case nt:
          return Kw(e, t, a);
        case rt:
          return Zw(e, t, a);
        case Gt:
          return Ex(e, t, a);
        case Kn:
          return Cx(e, t, a);
        case qe: {
          var ye = t.type, ut = t.pendingProps, Ze = Ui(ye, ut);
          if (t.type !== t.elementType) {
            var D = ye.propTypes;
            D && Mi(
              D,
              Ze,
              "prop",
              st(ye)
            );
          }
          return Ze = Ui(ye.type, Ze), uC(e, t, ye, Ze, a);
        }
        case Ue:
          return oC(e, t, t.type, t.pendingProps, a);
        case Dn: {
          var F = t.type, k = t.pendingProps, Q = t.elementType === F ? k : Ui(F, k);
          return rx(e, t, F, Q, a);
        }
        case Et:
          return gC(e, t, a);
        case En:
          break;
        case Ye:
          return sC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function Df(e) {
      e.flags |= Pe;
    }
    function RC(e) {
      e.flags |= Lr, e.flags |= fd;
    }
    var TC, CS, wC, xC;
    TC = function(e, t, a, i) {
      for (var u = t.child; u !== null; ) {
        if (u.tag === ue || u.tag === Fe)
          QR(e, u.stateNode);
        else if (u.tag !== ge) {
          if (u.child !== null) {
            u.child.return = u, u = u.child;
            continue;
          }
        }
        if (u === t)
          return;
        for (; u.sibling === null; ) {
          if (u.return === null || u.return === t)
            return;
          u = u.return;
        }
        u.sibling.return = u.return, u = u.sibling;
      }
    }, CS = function(e, t) {
    }, wC = function(e, t, a, i, u) {
      var s = e.memoizedProps;
      if (s !== i) {
        var f = t.stateNode, p = _g(), v = GR(f, a, s, i, u, p);
        t.updateQueue = v, v && Df(t);
      }
    }, xC = function(e, t, a, i) {
      a !== i && Df(t);
    };
    function Lp(e, t) {
      if (!dr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var u = e.tail, s = null; u !== null; )
              u.alternate !== null && (s = u), u = u.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function vr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = j, i = Re;
      if (t) {
        if ((e.mode & De) !== be) {
          for (var v = e.selfBaseDuration, y = e.child; y !== null; )
            a = $e(a, $e(y.lanes, y.childLanes)), i |= y.subtreeFlags & Vn, i |= y.flags & Vn, v += y.treeBaseDuration, y = y.sibling;
          e.treeBaseDuration = v;
        } else
          for (var g = e.child; g !== null; )
            a = $e(a, $e(g.lanes, g.childLanes)), i |= g.subtreeFlags & Vn, i |= g.flags & Vn, g.return = e, g = g.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & De) !== be) {
          for (var u = e.actualDuration, s = e.selfBaseDuration, f = e.child; f !== null; )
            a = $e(a, $e(f.lanes, f.childLanes)), i |= f.subtreeFlags, i |= f.flags, u += f.actualDuration, s += f.treeBaseDuration, f = f.sibling;
          e.actualDuration = u, e.treeBaseDuration = s;
        } else
          for (var p = e.child; p !== null; )
            a = $e(a, $e(p.lanes, p.childLanes)), i |= p.subtreeFlags, i |= p.flags, p.return = e, p = p.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function wx(e, t, a) {
      if (sw() && (t.mode & Ge) !== be && (t.flags & Ne) === Re)
        return tE(t), yf(), t.flags |= on | Qr | Mn, !1;
      var i = Lh(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (uw(t), vr(t), (t.mode & De) !== be) {
            var u = a !== null;
            if (u) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (yf(), (t.flags & Ne) === Re && (t.memoizedState = null), t.flags |= Pe, vr(t), (t.mode & De) !== be) {
            var f = a !== null;
            if (f) {
              var p = t.child;
              p !== null && (t.treeBaseDuration -= p.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return nE(), !0;
    }
    function bC(e, t, a) {
      var i = t.pendingProps;
      switch (Wy(t), t.tag) {
        case Ht:
        case qt:
        case Ue:
        case Oe:
        case Be:
        case vt:
        case nt:
        case rt:
        case Kn:
        case qe:
          return vr(t), null;
        case me: {
          var u = t.type;
          return _l(u) && xh(t), vr(t), null;
        }
        case oe: {
          var s = t.stateNode;
          if (Cf(t), $y(t), Mg(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var f = Lh(t);
            if (f)
              Df(t);
            else if (e !== null) {
              var p = e.memoizedState;
              (!p.isDehydrated || (t.flags & on) !== Re) && (t.flags |= sa, nE());
            }
          }
          return CS(e, t), vr(t), null;
        }
        case ue: {
          Dg(t);
          var v = wE(), y = t.type;
          if (e !== null && t.stateNode != null)
            wC(e, t, y, i, v), e.ref !== t.ref && RC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return vr(t), null;
            }
            var g = _g(), b = Lh(t);
            if (b)
              iw(t, v, g) && Df(t);
            else {
              var w = IR(y, i, v, g, t);
              TC(w, t, !1, !1), t.stateNode = w, WR(w, y, i, v) && Df(t);
            }
            t.ref !== null && RC(t);
          }
          return vr(t), null;
        }
        case Fe: {
          var L = i;
          if (e && t.stateNode != null) {
            var N = e.memoizedProps;
            xC(e, t, N, L);
          } else {
            if (typeof L != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var H = wE(), ie = _g(), we = Lh(t);
            we ? lw(t) && Df(t) : t.stateNode = qR(L, H, ie, t);
          }
          return vr(t), null;
        }
        case Te: {
          Tf(t);
          var ye = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var ut = wx(e, t, ye);
            if (!ut)
              return t.flags & Mn ? t : null;
          }
          if ((t.flags & Ne) !== Re)
            return t.lanes = a, (t.mode & De) !== be && rS(t), t;
          var Ze = ye !== null, D = e !== null && e.memoizedState !== null;
          if (Ze !== D && Ze) {
            var F = t.child;
            if (F.flags |= cl, (t.mode & Ge) !== be) {
              var k = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !B);
              k || kg(Ai.current, _E) ? xb() : jS();
            }
          }
          var Q = t.updateQueue;
          if (Q !== null && (t.flags |= Pe), vr(t), (t.mode & De) !== be && Ze) {
            var le = t.child;
            le !== null && (t.treeBaseDuration -= le.treeBaseDuration);
          }
          return null;
        }
        case ge:
          return Cf(t), CS(e, t), e === null && PT(t.stateNode.containerInfo), vr(t), null;
        case Gt:
          var te = t.type._context;
          return ng(te, t), vr(t), null;
        case Dn: {
          var Le = t.type;
          return _l(Le) && xh(t), vr(t), null;
        }
        case Et: {
          Tf(t);
          var je = t.memoizedState;
          if (je === null)
            return vr(t), null;
          var Dt = (t.flags & Ne) !== Re, mt = je.rendering;
          if (mt === null)
            if (Dt)
              Lp(je, !1);
            else {
              var _n = _b() && (e === null || (e.flags & Ne) === Re);
              if (!_n)
                for (var yt = t.child; yt !== null; ) {
                  var Sn = Gh(yt);
                  if (Sn !== null) {
                    Dt = !0, t.flags |= Ne, Lp(je, !1);
                    var Pr = Sn.updateQueue;
                    return Pr !== null && (t.updateQueue = Pr, t.flags |= Pe), t.subtreeFlags = Re, _w(t, a), _o(t, Og(Ai.current, Ep)), t.child;
                  }
                  yt = yt.sibling;
                }
              je.tail !== null && Zt() > WC() && (t.flags |= Ne, Dt = !0, Lp(je, !1), t.lanes = wd);
            }
          else {
            if (!Dt) {
              var Sr = Gh(mt);
              if (Sr !== null) {
                t.flags |= Ne, Dt = !0;
                var Ya = Sr.updateQueue;
                if (Ya !== null && (t.updateQueue = Ya, t.flags |= Pe), Lp(je, !0), je.tail === null && je.tailMode === "hidden" && !mt.alternate && !dr())
                  return vr(t), null;
              } else
                Zt() * 2 - je.renderingStartTime > WC() && a !== Hr && (t.flags |= Ne, Dt = !0, Lp(je, !1), t.lanes = wd);
            }
            if (je.isBackwards)
              mt.sibling = t.child, t.child = mt;
            else {
              var ta = je.last;
              ta !== null ? ta.sibling = mt : t.child = mt, je.last = mt;
            }
          }
          if (je.tail !== null) {
            var na = je.tail;
            je.rendering = na, je.tail = na.sibling, je.renderingStartTime = Zt(), na.sibling = null;
            var $r = Ai.current;
            return Dt ? $r = Og($r, Ep) : $r = Rf($r), _o(t, $r), na;
          }
          return vr(t), null;
        }
        case En:
          break;
        case Ye:
        case at: {
          FS(t);
          var _u = t.memoizedState, Af = _u !== null;
          if (e !== null) {
            var Wp = e.memoizedState, Ul = Wp !== null;
            Ul !== Af && !R && (t.flags |= cl);
          }
          return !Af || (t.mode & Ge) === be ? vr(t) : Fr(zl, Hr) && (vr(t), t.subtreeFlags & (jt | Pe) && (t.flags |= cl)), null;
        }
        case Yt:
          return null;
        case gt:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function xx(e, t, a) {
      switch (Wy(t), t.tag) {
        case me: {
          var i = t.type;
          _l(i) && xh(t);
          var u = t.flags;
          return u & Mn ? (t.flags = u & ~Mn | Ne, (t.mode & De) !== be && rS(t), t) : null;
        }
        case oe: {
          t.stateNode, Cf(t), $y(t), Mg();
          var s = t.flags;
          return (s & Mn) !== Re && (s & Ne) === Re ? (t.flags = s & ~Mn | Ne, t) : null;
        }
        case ue:
          return Dg(t), null;
        case Te: {
          Tf(t);
          var f = t.memoizedState;
          if (f !== null && f.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            yf();
          }
          var p = t.flags;
          return p & Mn ? (t.flags = p & ~Mn | Ne, (t.mode & De) !== be && rS(t), t) : null;
        }
        case Et:
          return Tf(t), null;
        case ge:
          return Cf(t), null;
        case Gt:
          var v = t.type._context;
          return ng(v, t), null;
        case Ye:
        case at:
          return FS(t), null;
        case Yt:
          return null;
        default:
          return null;
      }
    }
    function _C(e, t, a) {
      switch (Wy(t), t.tag) {
        case me: {
          var i = t.type.childContextTypes;
          i != null && xh(t);
          break;
        }
        case oe: {
          t.stateNode, Cf(t), $y(t), Mg();
          break;
        }
        case ue: {
          Dg(t);
          break;
        }
        case ge:
          Cf(t);
          break;
        case Te:
          Tf(t);
          break;
        case Et:
          Tf(t);
          break;
        case Gt:
          var u = t.type._context;
          ng(u, t);
          break;
        case Ye:
        case at:
          FS(t);
          break;
      }
    }
    var DC = null;
    DC = /* @__PURE__ */ new Set();
    var ym = !1, hr = !1, bx = typeof WeakSet == "function" ? WeakSet : Set, de = null, kf = null, Of = null;
    function _x(e) {
      Gl(null, function() {
        throw e;
      }), sd();
    }
    var Dx = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & De)
        try {
          Ml(), t.componentWillUnmount();
        } finally {
          Ll(e);
        }
      else
        t.componentWillUnmount();
    };
    function kC(e, t) {
      try {
        Oo(Yn, e);
      } catch (a) {
        $t(e, t, a);
      }
    }
    function RS(e, t, a) {
      try {
        Dx(e, a);
      } catch (i) {
        $t(e, t, i);
      }
    }
    function kx(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        $t(e, t, i);
      }
    }
    function OC(e, t) {
      try {
        MC(e);
      } catch (a) {
        $t(e, t, a);
      }
    }
    function Lf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (Xe && dt && e.mode & De)
              try {
                Ml(), i = a(null);
              } finally {
                Ll(e);
              }
            else
              i = a(null);
          } catch (u) {
            $t(e, t, u);
          }
          typeof i == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ae(e));
        } else
          a.current = null;
    }
    function gm(e, t, a) {
      try {
        a();
      } catch (i) {
        $t(e, t, i);
      }
    }
    var LC = !1;
    function Ox(e, t) {
      $R(e.containerInfo), de = t, Lx();
      var a = LC;
      return LC = !1, a;
    }
    function Lx() {
      for (; de !== null; ) {
        var e = de, t = e.child;
        (e.subtreeFlags & qu) !== Re && t !== null ? (t.return = e, de = t) : Mx();
      }
    }
    function Mx() {
      for (; de !== null; ) {
        var e = de;
        Ct(e);
        try {
          Nx(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        un();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, de = t;
          return;
        }
        de = e.return;
      }
    }
    function Nx(e) {
      var t = e.alternate, a = e.flags;
      if ((a & sa) !== Re) {
        switch (Ct(e), e.tag) {
          case Oe:
          case Be:
          case Ue:
            break;
          case me: {
            if (t !== null) {
              var i = t.memoizedProps, u = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !Hs && (s.props !== e.memoizedProps && S("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ae(e) || "instance"), s.state !== e.memoizedState && S("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ae(e) || "instance"));
              var f = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : Ui(e.type, i), u);
              {
                var p = DC;
                f === void 0 && !p.has(e.type) && (p.add(e.type), S("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", Ae(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = f;
            }
            break;
          }
          case oe: {
            {
              var v = e.stateNode;
              vT(v.containerInfo);
            }
            break;
          }
          case ue:
          case Fe:
          case ge:
          case Dn:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        un();
      }
    }
    function ji(e, t, a) {
      var i = t.updateQueue, u = i !== null ? i.lastEffect : null;
      if (u !== null) {
        var s = u.next, f = s;
        do {
          if ((f.tag & e) === e) {
            var p = f.destroy;
            f.destroy = void 0, p !== void 0 && ((e & pr) !== Ca ? Sc(t) : (e & Yn) !== Ca && Ec(t), (e & Dl) !== Ca && Yp(!0), gm(t, a, p), (e & Dl) !== Ca && Yp(!1), (e & pr) !== Ca ? Ov() : (e & Yn) !== Ca && Xu());
          }
          f = f.next;
        } while (f !== s);
      }
    }
    function Oo(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var u = i.next, s = u;
        do {
          if ((s.tag & e) === e) {
            (e & pr) !== Ca ? kv(t) : (e & Yn) !== Ca && Lv(t);
            var f = s.create;
            (e & Dl) !== Ca && Yp(!0), s.destroy = f(), (e & Dl) !== Ca && Yp(!1), (e & pr) !== Ca ? Cd() : (e & Yn) !== Ca && Mv();
            {
              var p = s.destroy;
              if (p !== void 0 && typeof p != "function") {
                var v = void 0;
                (s.tag & Yn) !== Re ? v = "useLayoutEffect" : (s.tag & Dl) !== Re ? v = "useInsertionEffect" : v = "useEffect";
                var y = void 0;
                p === null ? y = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof p.then == "function" ? y = `

It looks like you wrote ` + v + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + v + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : y = " You returned: " + p, S("%s must not return anything besides a function, which is used for clean-up.%s", v, y);
              }
            }
          }
          s = s.next;
        } while (s !== u);
      }
    }
    function zx(e, t) {
      if ((t.flags & Pe) !== Re)
        switch (t.tag) {
          case rt: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, u = i.id, s = i.onPostCommit, f = JE(), p = t.alternate === null ? "mount" : "update";
            ZE() && (p = "nested-update"), typeof s == "function" && s(u, p, a, f);
            var v = t.return;
            e:
              for (; v !== null; ) {
                switch (v.tag) {
                  case oe:
                    var y = v.stateNode;
                    y.passiveEffectDuration += a;
                    break e;
                  case rt:
                    var g = v.stateNode;
                    g.passiveEffectDuration += a;
                    break e;
                }
                v = v.return;
              }
            break;
          }
        }
    }
    function Ux(e, t, a, i) {
      if ((a.flags & er) !== Re)
        switch (a.tag) {
          case Oe:
          case Be:
          case Ue: {
            if (!hr)
              if (a.mode & De)
                try {
                  Ml(), Oo(Yn | $n, a);
                } finally {
                  Ll(a);
                }
              else
                Oo(Yn | $n, a);
            break;
          }
          case me: {
            var u = a.stateNode;
            if (a.flags & Pe && !hr)
              if (t === null)
                if (a.type === a.elementType && !Hs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ae(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ae(a) || "instance")), a.mode & De)
                  try {
                    Ml(), u.componentDidMount();
                  } finally {
                    Ll(a);
                  }
                else
                  u.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : Ui(a.type, t.memoizedProps), f = t.memoizedState;
                if (a.type === a.elementType && !Hs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ae(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ae(a) || "instance")), a.mode & De)
                  try {
                    Ml(), u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    Ll(a);
                  }
                else
                  u.componentDidUpdate(s, f, u.__reactInternalSnapshotBeforeUpdate);
              }
            var p = a.updateQueue;
            p !== null && (a.type === a.elementType && !Hs && (u.props !== a.memoizedProps && S("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", Ae(a) || "instance"), u.state !== a.memoizedState && S("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", Ae(a) || "instance")), dE(a, p, u));
            break;
          }
          case oe: {
            var v = a.updateQueue;
            if (v !== null) {
              var y = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case ue:
                    y = a.child.stateNode;
                    break;
                  case me:
                    y = a.child.stateNode;
                    break;
                }
              dE(a, v, y);
            }
            break;
          }
          case ue: {
            var g = a.stateNode;
            if (t === null && a.flags & Pe) {
              var b = a.type, w = a.memoizedProps;
              eT(g, b, w);
            }
            break;
          }
          case Fe:
            break;
          case ge:
            break;
          case rt: {
            {
              var L = a.memoizedProps, N = L.onCommit, H = L.onRender, ie = a.stateNode.effectDuration, we = JE(), ye = t === null ? "mount" : "update";
              ZE() && (ye = "nested-update"), typeof H == "function" && H(a.memoizedProps.id, ye, a.actualDuration, a.treeBaseDuration, a.actualStartTime, we);
              {
                typeof N == "function" && N(a.memoizedProps.id, ye, ie, we), Mb(a);
                var ut = a.return;
                e:
                  for (; ut !== null; ) {
                    switch (ut.tag) {
                      case oe:
                        var Ze = ut.stateNode;
                        Ze.effectDuration += ie;
                        break e;
                      case rt:
                        var D = ut.stateNode;
                        D.effectDuration += ie;
                        break e;
                    }
                    ut = ut.return;
                  }
              }
            }
            break;
          }
          case Te: {
            $x(e, a);
            break;
          }
          case Et:
          case Dn:
          case En:
          case Ye:
          case at:
          case gt:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      hr || a.flags & Lr && MC(a);
    }
    function Ax(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          if (e.mode & De)
            try {
              Ml(), kC(e, e.return);
            } finally {
              Ll(e);
            }
          else
            kC(e, e.return);
          break;
        }
        case me: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && kx(e, e.return, t), OC(e, e.return);
          break;
        }
        case ue: {
          OC(e, e.return);
          break;
        }
      }
    }
    function Hx(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === ue) {
          if (a === null) {
            a = i;
            try {
              var u = i.stateNode;
              t ? cT(u) : dT(i.stateNode, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
          }
        } else if (i.tag === Fe) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? fT(s) : pT(s, i.memoizedProps);
            } catch (f) {
              $t(e, e.return, f);
            }
        } else if (!((i.tag === Ye || i.tag === at) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function MC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case ue:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var u;
          if (e.mode & De)
            try {
              Ml(), u = t(i);
            } finally {
              Ll(e);
            }
          else
            u = t(i);
          typeof u == "function" && S("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", Ae(e));
        } else
          t.hasOwnProperty("current") || S("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", Ae(e)), t.current = i;
      }
    }
    function Fx(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function NC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, NC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === ue) {
          var a = e.stateNode;
          a !== null && IT(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function jx(e) {
      for (var t = e.return; t !== null; ) {
        if (zC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function zC(e) {
      return e.tag === ue || e.tag === oe || e.tag === ge;
    }
    function UC(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || zC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== ue && t.tag !== Fe && t.tag !== Nt; ) {
            if (t.flags & jt || t.child === null || t.tag === ge)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & jt))
            return t.stateNode;
        }
    }
    function Vx(e) {
      var t = jx(e);
      switch (t.tag) {
        case ue: {
          var a = t.stateNode;
          t.flags & Rt && (A0(a), t.flags &= ~Rt);
          var i = UC(e);
          wS(e, i, a);
          break;
        }
        case oe:
        case ge: {
          var u = t.stateNode.containerInfo, s = UC(e);
          TS(e, s, u);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function TS(e, t, a) {
      var i = e.tag, u = i === ue || i === Fe;
      if (u) {
        var s = e.stateNode;
        t ? lT(a, s, t) : aT(a, s);
      } else if (i !== ge) {
        var f = e.child;
        if (f !== null) {
          TS(f, t, a);
          for (var p = f.sibling; p !== null; )
            TS(p, t, a), p = p.sibling;
        }
      }
    }
    function wS(e, t, a) {
      var i = e.tag, u = i === ue || i === Fe;
      if (u) {
        var s = e.stateNode;
        t ? iT(a, s, t) : rT(a, s);
      } else if (i !== ge) {
        var f = e.child;
        if (f !== null) {
          wS(f, t, a);
          for (var p = f.sibling; p !== null; )
            wS(p, t, a), p = p.sibling;
        }
      }
    }
    var mr = null, Vi = !1;
    function Bx(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case ue: {
                mr = i.stateNode, Vi = !1;
                break e;
              }
              case oe: {
                mr = i.stateNode.containerInfo, Vi = !0;
                break e;
              }
              case ge: {
                mr = i.stateNode.containerInfo, Vi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (mr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        AC(e, t, a), mr = null, Vi = !1;
      }
      Fx(a);
    }
    function Lo(e, t, a) {
      for (var i = a.child; i !== null; )
        AC(e, t, i), i = i.sibling;
    }
    function AC(e, t, a) {
      switch (Sd(a), a.tag) {
        case ue:
          hr || Lf(a, t);
        case Fe: {
          {
            var i = mr, u = Vi;
            mr = null, Lo(e, t, a), mr = i, Vi = u, mr !== null && (Vi ? oT(mr, a.stateNode) : uT(mr, a.stateNode));
          }
          return;
        }
        case Nt: {
          mr !== null && (Vi ? sT(mr, a.stateNode) : Uy(mr, a.stateNode));
          return;
        }
        case ge: {
          {
            var s = mr, f = Vi;
            mr = a.stateNode.containerInfo, Vi = !0, Lo(e, t, a), mr = s, Vi = f;
          }
          return;
        }
        case Oe:
        case Be:
        case qe:
        case Ue: {
          if (!hr) {
            var p = a.updateQueue;
            if (p !== null) {
              var v = p.lastEffect;
              if (v !== null) {
                var y = v.next, g = y;
                do {
                  var b = g, w = b.destroy, L = b.tag;
                  w !== void 0 && ((L & Dl) !== Ca ? gm(a, t, w) : (L & Yn) !== Ca && (Ec(a), a.mode & De ? (Ml(), gm(a, t, w), Ll(a)) : gm(a, t, w), Xu())), g = g.next;
                } while (g !== y);
              }
            }
          }
          Lo(e, t, a);
          return;
        }
        case me: {
          if (!hr) {
            Lf(a, t);
            var N = a.stateNode;
            typeof N.componentWillUnmount == "function" && RS(a, t, N);
          }
          Lo(e, t, a);
          return;
        }
        case En: {
          Lo(e, t, a);
          return;
        }
        case Ye: {
          if (a.mode & Ge) {
            var H = hr;
            hr = H || a.memoizedState !== null, Lo(e, t, a), hr = H;
          } else
            Lo(e, t, a);
          break;
        }
        default: {
          Lo(e, t, a);
          return;
        }
      }
    }
    function Px(e) {
      e.memoizedState;
    }
    function $x(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var u = i.memoizedState;
          if (u !== null) {
            var s = u.dehydrated;
            s !== null && DT(s);
          }
        }
      }
    }
    function HC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new bx()), t.forEach(function(i) {
          var u = jb.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), Bn)
              if (kf !== null && Of !== null)
                $p(Of, kf);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(u, u);
          }
        });
      }
    }
    function Yx(e, t, a) {
      kf = a, Of = e, Ct(t), FC(t, e), Ct(t), kf = null, Of = null;
    }
    function Bi(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var u = 0; u < i.length; u++) {
          var s = i[u];
          try {
            Bx(e, t, s);
          } catch (v) {
            $t(s, t, v);
          }
        }
      var f = Ks();
      if (t.subtreeFlags & zr)
        for (var p = t.child; p !== null; )
          Ct(p), FC(p, e), p = p.sibling;
      Ct(f);
    }
    function FC(e, t, a) {
      var i = e.alternate, u = e.flags;
      switch (e.tag) {
        case Oe:
        case Be:
        case qe:
        case Ue: {
          if (Bi(t, e), Nl(e), u & Pe) {
            try {
              ji(Dl | $n, e, e.return), Oo(Dl | $n, e);
            } catch (Le) {
              $t(e, e.return, Le);
            }
            if (e.mode & De) {
              try {
                Ml(), ji(Yn | $n, e, e.return);
              } catch (Le) {
                $t(e, e.return, Le);
              }
              Ll(e);
            } else
              try {
                ji(Yn | $n, e, e.return);
              } catch (Le) {
                $t(e, e.return, Le);
              }
          }
          return;
        }
        case me: {
          Bi(t, e), Nl(e), u & Lr && i !== null && Lf(i, i.return);
          return;
        }
        case ue: {
          Bi(t, e), Nl(e), u & Lr && i !== null && Lf(i, i.return);
          {
            if (e.flags & Rt) {
              var s = e.stateNode;
              try {
                A0(s);
              } catch (Le) {
                $t(e, e.return, Le);
              }
            }
            if (u & Pe) {
              var f = e.stateNode;
              if (f != null) {
                var p = e.memoizedProps, v = i !== null ? i.memoizedProps : p, y = e.type, g = e.updateQueue;
                if (e.updateQueue = null, g !== null)
                  try {
                    tT(f, g, y, v, p, e);
                  } catch (Le) {
                    $t(e, e.return, Le);
                  }
              }
            }
          }
          return;
        }
        case Fe: {
          if (Bi(t, e), Nl(e), u & Pe) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var b = e.stateNode, w = e.memoizedProps, L = i !== null ? i.memoizedProps : w;
            try {
              nT(b, L, w);
            } catch (Le) {
              $t(e, e.return, Le);
            }
          }
          return;
        }
        case oe: {
          if (Bi(t, e), Nl(e), u & Pe && i !== null) {
            var N = i.memoizedState;
            if (N.isDehydrated)
              try {
                _T(t.containerInfo);
              } catch (Le) {
                $t(e, e.return, Le);
              }
          }
          return;
        }
        case ge: {
          Bi(t, e), Nl(e);
          return;
        }
        case Te: {
          Bi(t, e), Nl(e);
          var H = e.child;
          if (H.flags & cl) {
            var ie = H.stateNode, we = H.memoizedState, ye = we !== null;
            if (ie.isHidden = ye, ye) {
              var ut = H.alternate !== null && H.alternate.memoizedState !== null;
              ut || wb();
            }
          }
          if (u & Pe) {
            try {
              Px(e);
            } catch (Le) {
              $t(e, e.return, Le);
            }
            HC(e);
          }
          return;
        }
        case Ye: {
          var Ze = i !== null && i.memoizedState !== null;
          if (e.mode & Ge) {
            var D = hr;
            hr = D || Ze, Bi(t, e), hr = D;
          } else
            Bi(t, e);
          if (Nl(e), u & cl) {
            var F = e.stateNode, k = e.memoizedState, Q = k !== null, le = e;
            if (F.isHidden = Q, Q && !Ze && (le.mode & Ge) !== be) {
              de = le;
              for (var te = le.child; te !== null; )
                de = te, Qx(te), te = te.sibling;
            }
            Hx(le, Q);
          }
          return;
        }
        case Et: {
          Bi(t, e), Nl(e), u & Pe && HC(e);
          return;
        }
        case En:
          return;
        default: {
          Bi(t, e), Nl(e);
          return;
        }
      }
    }
    function Nl(e) {
      var t = e.flags;
      if (t & jt) {
        try {
          Vx(e);
        } catch (a) {
          $t(e, e.return, a);
        }
        e.flags &= ~jt;
      }
      t & ca && (e.flags &= ~ca);
    }
    function Ix(e, t, a) {
      kf = a, Of = t, de = e, jC(e, t, a), kf = null, Of = null;
    }
    function jC(e, t, a) {
      for (var i = (e.mode & Ge) !== be; de !== null; ) {
        var u = de, s = u.child;
        if (u.tag === Ye && i) {
          var f = u.memoizedState !== null, p = f || ym;
          if (p) {
            xS(e, t, a);
            continue;
          } else {
            var v = u.alternate, y = v !== null && v.memoizedState !== null, g = y || hr, b = ym, w = hr;
            ym = p, hr = g, hr && !w && (de = u, Wx(u));
            for (var L = s; L !== null; )
              de = L, jC(
                L,
                t,
                a
              ), L = L.sibling;
            de = u, ym = b, hr = w, xS(e, t, a);
            continue;
          }
        }
        (u.subtreeFlags & er) !== Re && s !== null ? (s.return = u, de = s) : xS(e, t, a);
      }
    }
    function xS(e, t, a) {
      for (; de !== null; ) {
        var i = de;
        if ((i.flags & er) !== Re) {
          var u = i.alternate;
          Ct(i);
          try {
            Ux(t, u, i, a);
          } catch (f) {
            $t(i, i.return, f);
          }
          un();
        }
        if (i === e) {
          de = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, de = s;
          return;
        }
        de = i.return;
      }
    }
    function Qx(e) {
      for (; de !== null; ) {
        var t = de, a = t.child;
        switch (t.tag) {
          case Oe:
          case Be:
          case qe:
          case Ue: {
            if (t.mode & De)
              try {
                Ml(), ji(Yn, t, t.return);
              } finally {
                Ll(t);
              }
            else
              ji(Yn, t, t.return);
            break;
          }
          case me: {
            Lf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && RS(t, t.return, i);
            break;
          }
          case ue: {
            Lf(t, t.return);
            break;
          }
          case Ye: {
            var u = t.memoizedState !== null;
            if (u) {
              VC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, de = a) : VC(e);
      }
    }
    function VC(e) {
      for (; de !== null; ) {
        var t = de;
        if (t === e) {
          de = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, de = a;
          return;
        }
        de = t.return;
      }
    }
    function Wx(e) {
      for (; de !== null; ) {
        var t = de, a = t.child;
        if (t.tag === Ye) {
          var i = t.memoizedState !== null;
          if (i) {
            BC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, de = a) : BC(e);
      }
    }
    function BC(e) {
      for (; de !== null; ) {
        var t = de;
        Ct(t);
        try {
          Ax(t);
        } catch (i) {
          $t(t, t.return, i);
        }
        if (un(), t === e) {
          de = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, de = a;
          return;
        }
        de = t.return;
      }
    }
    function Gx(e, t, a, i) {
      de = t, qx(t, e, a, i);
    }
    function qx(e, t, a, i) {
      for (; de !== null; ) {
        var u = de, s = u.child;
        (u.subtreeFlags & fa) !== Re && s !== null ? (s.return = u, de = s) : Xx(e, t, a, i);
      }
    }
    function Xx(e, t, a, i) {
      for (; de !== null; ) {
        var u = de;
        if ((u.flags & Qt) !== Re) {
          Ct(u);
          try {
            Kx(t, u, a, i);
          } catch (f) {
            $t(u, u.return, f);
          }
          un();
        }
        if (u === e) {
          de = null;
          return;
        }
        var s = u.sibling;
        if (s !== null) {
          s.return = u.return, de = s;
          return;
        }
        de = u.return;
      }
    }
    function Kx(e, t, a, i) {
      switch (t.tag) {
        case Oe:
        case Be:
        case Ue: {
          if (t.mode & De) {
            nS();
            try {
              Oo(pr | $n, t);
            } finally {
              tS(t);
            }
          } else
            Oo(pr | $n, t);
          break;
        }
      }
    }
    function Zx(e) {
      de = e, Jx();
    }
    function Jx() {
      for (; de !== null; ) {
        var e = de, t = e.child;
        if ((de.flags & St) !== Re) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var u = a[i];
              de = u, nb(u, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var f = s.child;
                if (f !== null) {
                  s.child = null;
                  do {
                    var p = f.sibling;
                    f.sibling = null, f = p;
                  } while (f !== null);
                }
              }
            }
            de = e;
          }
        }
        (e.subtreeFlags & fa) !== Re && t !== null ? (t.return = e, de = t) : eb();
      }
    }
    function eb() {
      for (; de !== null; ) {
        var e = de;
        (e.flags & Qt) !== Re && (Ct(e), tb(e), un());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, de = t;
          return;
        }
        de = e.return;
      }
    }
    function tb(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          e.mode & De ? (nS(), ji(pr | $n, e, e.return), tS(e)) : ji(pr | $n, e, e.return);
          break;
        }
      }
    }
    function nb(e, t) {
      for (; de !== null; ) {
        var a = de;
        Ct(a), ab(a, t), un();
        var i = a.child;
        i !== null ? (i.return = a, de = i) : rb(e);
      }
    }
    function rb(e) {
      for (; de !== null; ) {
        var t = de, a = t.sibling, i = t.return;
        if (NC(t), t === e) {
          de = null;
          return;
        }
        if (a !== null) {
          a.return = i, de = a;
          return;
        }
        de = i;
      }
    }
    function ab(e, t) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          e.mode & De ? (nS(), ji(pr, e, t), tS(e)) : ji(pr, e, t);
          break;
        }
      }
    }
    function ib(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          try {
            Oo(Yn | $n, e);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case me: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
      }
    }
    function lb(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          try {
            Oo(pr | $n, e);
          } catch (t) {
            $t(e, e.return, t);
          }
          break;
        }
      }
    }
    function ub(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue: {
          try {
            ji(Yn | $n, e, e.return);
          } catch (a) {
            $t(e, e.return, a);
          }
          break;
        }
        case me: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && RS(e, e.return, t);
          break;
        }
      }
    }
    function ob(e) {
      switch (e.tag) {
        case Oe:
        case Be:
        case Ue:
          try {
            ji(pr | $n, e, e.return);
          } catch (t) {
            $t(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Mp = Symbol.for;
      Mp("selector.component"), Mp("selector.has_pseudo_class"), Mp("selector.role"), Mp("selector.test_id"), Mp("selector.text");
    }
    var sb = [];
    function cb() {
      sb.forEach(function(e) {
        return e();
      });
    }
    var fb = U.ReactCurrentActQueue;
    function db(e) {
      {
        var t = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0, a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function PC() {
      {
        var e = typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0;
        return !e && fb.current !== null && S("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var pb = Math.ceil, bS = U.ReactCurrentDispatcher, _S = U.ReactCurrentOwner, yr = U.ReactCurrentBatchConfig, Pi = U.ReactCurrentActQueue, Wn = 0, $C = 1, gr = 2, si = 4, Tu = 0, Np = 1, Fs = 2, Sm = 3, zp = 4, YC = 5, DS = 6, lt = Wn, Jr = null, hn = null, Gn = j, zl = j, kS = Co(j), qn = Tu, Up = null, Em = j, Ap = j, Cm = j, Hp = null, Ra = null, OS = 0, IC = 500, QC = 1 / 0, vb = 500, wu = null;
    function Fp() {
      QC = Zt() + vb;
    }
    function WC() {
      return QC;
    }
    var Rm = !1, LS = null, Mf = null, js = !1, Mo = null, jp = j, MS = [], NS = null, hb = 50, Vp = 0, zS = null, US = !1, Tm = !1, mb = 50, Nf = 0, wm = null, Bp = Mt, xm = j, GC = !1;
    function bm() {
      return Jr;
    }
    function ea() {
      return (lt & (gr | si)) !== Wn ? Zt() : (Bp !== Mt || (Bp = Zt()), Bp);
    }
    function No(e) {
      var t = e.mode;
      if ((t & Ge) === be)
        return ke;
      if ((lt & gr) !== Wn && Gn !== j)
        return Tn(Gn);
      var a = dw() !== fw;
      if (a) {
        if (yr.transition !== null) {
          var i = yr.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return xm === it && (xm = _d()), xm;
      }
      var u = ha();
      if (u !== it)
        return u;
      var s = XR();
      return s;
    }
    function yb(e) {
      var t = e.mode;
      return (t & Ge) === be ? ke : ny();
    }
    function Xn(e, t, a, i) {
      Bb(), GC && S("useInsertionEffect must not schedule updates."), US && (Tm = !0), lu(e, a, i), (lt & gr) !== j && e === Jr ? Yb(t) : (Bn && Md(e, t, a), Ib(t), e === Jr && ((lt & gr) === Wn && (Ap = $e(Ap, a)), qn === zp && zo(e, Gn)), Ta(e, i), a === ke && lt === Wn && (t.mode & Ge) === be && !Pi.isBatchingLegacy && (Fp(), W0()));
    }
    function gb(e, t, a) {
      var i = e.current;
      i.lanes = t, lu(e, t, a), Ta(e, a);
    }
    function Sb(e) {
      return (lt & gr) !== Wn;
    }
    function Ta(e, t) {
      var a = e.callbackNode;
      Jm(e, t);
      var i = cs(e, e === Jr ? Gn : j);
      if (i === j) {
        a !== null && c1(a), e.callbackNode = null, e.callbackPriority = it;
        return;
      }
      var u = yn(i), s = e.callbackPriority;
      if (s === u && !(Pi.current !== null && a !== PS)) {
        a == null && s !== ke && S("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && c1(a);
      var f;
      if (u === ke)
        e.tag === Ro ? (Pi.isBatchingLegacy !== null && (Pi.didScheduleLegacyUpdate = !0), GT(KC.bind(null, e))) : Q0(KC.bind(null, e)), Pi.current !== null ? Pi.current.push(To) : ZR(function() {
          (lt & (gr | si)) === Wn && To();
        }), f = null;
      else {
        var p;
        switch (hs(i)) {
          case tr:
            p = mc;
            break;
          case Pn:
            p = qr;
            break;
          case _i:
            p = Ja;
            break;
          case ps:
            p = dl;
            break;
          default:
            p = Ja;
            break;
        }
        f = $S(p, qC.bind(null, e));
      }
      e.callbackPriority = u, e.callbackNode = f;
    }
    function qC(e, t) {
      if (Bw(), Bp = Mt, xm = j, (lt & (gr | si)) !== Wn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = bu();
      if (i && e.callbackNode !== a)
        return null;
      var u = cs(e, e === Jr ? Gn : j);
      if (u === j)
        return null;
      var s = !ds(e, u) && !Fv(e, u) && !t, f = s ? kb(e, u) : Dm(e, u);
      if (f !== Tu) {
        if (f === Fs) {
          var p = xd(e);
          p !== j && (u = p, f = AS(e, p));
        }
        if (f === Np) {
          var v = Up;
          throw Vs(e, j), zo(e, u), Ta(e, Zt()), v;
        }
        if (f === DS)
          zo(e, u);
        else {
          var y = !ds(e, u), g = e.current.alternate;
          if (y && !Cb(g)) {
            if (f = Dm(e, u), f === Fs) {
              var b = xd(e);
              b !== j && (u = b, f = AS(e, b));
            }
            if (f === Np) {
              var w = Up;
              throw Vs(e, j), zo(e, u), Ta(e, Zt()), w;
            }
          }
          e.finishedWork = g, e.finishedLanes = u, Eb(e, f, u);
        }
      }
      return Ta(e, Zt()), e.callbackNode === a ? qC.bind(null, e) : null;
    }
    function AS(e, t) {
      var a = Hp;
      if (xn(e)) {
        var i = Vs(e, t);
        i.flags |= on, BT(e.containerInfo);
      }
      var u = Dm(e, t);
      if (u !== Fs) {
        var s = Ra;
        Ra = a, s !== null && XC(s);
      }
      return u;
    }
    function XC(e) {
      Ra === null ? Ra = e : Ra.push.apply(Ra, e);
    }
    function Eb(e, t, a) {
      switch (t) {
        case Tu:
        case Np:
          throw new Error("Root did not complete. This is a bug in React.");
        case Fs: {
          Bs(e, Ra, wu);
          break;
        }
        case Sm: {
          if (zo(e, a), Vc(a) && !f1()) {
            var i = OS + IC - Zt();
            if (i > 10) {
              var u = cs(e, j);
              if (u !== j)
                break;
              var s = e.suspendedLanes;
              if (!iu(s, a)) {
                ea(), Od(e, s);
                break;
              }
              e.timeoutHandle = Ny(Bs.bind(null, e, Ra, wu), i);
              break;
            }
          }
          Bs(e, Ra, wu);
          break;
        }
        case zp: {
          if (zo(e, a), Hv(a))
            break;
          if (!f1()) {
            var f = Av(e, a), p = f, v = Zt() - p, y = Vb(v) - v;
            if (y > 10) {
              e.timeoutHandle = Ny(Bs.bind(null, e, Ra, wu), y);
              break;
            }
          }
          Bs(e, Ra, wu);
          break;
        }
        case YC: {
          Bs(e, Ra, wu);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Cb(e) {
      for (var t = e; ; ) {
        if (t.flags & rs) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var u = 0; u < i.length; u++) {
                var s = i[u], f = s.getSnapshot, p = s.value;
                try {
                  if (!fe(f(), p))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var v = t.child;
        if (t.subtreeFlags & rs && v !== null) {
          v.return = t, t = v;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function zo(e, t) {
      t = ro(t, Cm), t = ro(t, Ap), kd(e, t);
    }
    function KC(e) {
      if (Pw(), (lt & (gr | si)) !== Wn)
        throw new Error("Should not already be working.");
      bu();
      var t = cs(e, j);
      if (!Fr(t, ke))
        return Ta(e, Zt()), null;
      var a = Dm(e, t);
      if (e.tag !== Ro && a === Fs) {
        var i = xd(e);
        i !== j && (t = i, a = AS(e, i));
      }
      if (a === Np) {
        var u = Up;
        throw Vs(e, j), zo(e, t), Ta(e, Zt()), u;
      }
      if (a === DS)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, Bs(e, Ra, wu), Ta(e, Zt()), null;
    }
    function Rb(e, t) {
      t !== j && (ao(e, $e(t, ke)), Ta(e, Zt()), (lt & (gr | si)) === Wn && (Fp(), To()));
    }
    function HS(e, t) {
      var a = lt;
      lt |= $C;
      try {
        return e(t);
      } finally {
        lt = a, lt === Wn && !Pi.isBatchingLegacy && (Fp(), W0());
      }
    }
    function Tb(e, t, a, i, u) {
      var s = ha(), f = yr.transition;
      try {
        return yr.transition = null, wn(tr), e(t, a, i, u);
      } finally {
        wn(s), yr.transition = f, lt === Wn && Fp();
      }
    }
    function xu(e) {
      Mo !== null && Mo.tag === Ro && (lt & (gr | si)) === Wn && bu();
      var t = lt;
      lt |= $C;
      var a = yr.transition, i = ha();
      try {
        return yr.transition = null, wn(tr), e ? e() : void 0;
      } finally {
        wn(i), yr.transition = a, lt = t, (lt & (gr | si)) === Wn && To();
      }
    }
    function ZC() {
      return (lt & (gr | si)) !== Wn;
    }
    function _m(e, t) {
      Vr(kS, zl, e), zl = $e(zl, t);
    }
    function FS(e) {
      zl = kS.current, jr(kS, e);
    }
    function Vs(e, t) {
      e.finishedWork = null, e.finishedLanes = j;
      var a = e.timeoutHandle;
      if (a !== zy && (e.timeoutHandle = zy, KR(a)), hn !== null)
        for (var i = hn.return; i !== null; ) {
          var u = i.alternate;
          _C(u, i), i = i.return;
        }
      Jr = e;
      var s = Ps(e.current, null);
      return hn = s, Gn = zl = t, qn = Tu, Up = null, Em = j, Ap = j, Cm = j, Hp = null, Ra = null, mw(), zi.discardPendingWarnings(), s;
    }
    function JC(e, t) {
      do {
        var a = hn;
        try {
          if (Uh(), kE(), un(), _S.current = null, a === null || a.return === null) {
            qn = Np, Up = t, hn = null;
            return;
          }
          if (Xe && a.mode & De && pm(a, !0), ft)
            if (Xl(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              Nv(a, i, Gn);
            } else
              Cc(a, t, Gn);
          Ww(e, a.return, a, t, Gn), r1(a);
        } catch (u) {
          t = u, hn === a && a !== null ? (a = a.return, hn = a) : a = hn;
          continue;
        }
        return;
      } while (!0);
    }
    function e1() {
      var e = bS.current;
      return bS.current = om, e === null ? om : e;
    }
    function t1(e) {
      bS.current = e;
    }
    function wb() {
      OS = Zt();
    }
    function Pp(e) {
      Em = $e(e, Em);
    }
    function xb() {
      qn === Tu && (qn = Sm);
    }
    function jS() {
      (qn === Tu || qn === Sm || qn === Fs) && (qn = zp), Jr !== null && (fs(Em) || fs(Ap)) && zo(Jr, Gn);
    }
    function bb(e) {
      qn !== zp && (qn = Fs), Hp === null ? Hp = [e] : Hp.push(e);
    }
    function _b() {
      return qn === Tu;
    }
    function Dm(e, t) {
      var a = lt;
      lt |= gr;
      var i = e1();
      if (Jr !== e || Gn !== t) {
        if (Bn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, Gn), u.clear()), $c(e, t);
        }
        wu = Nd(), Vs(e, t);
      }
      Va(t);
      do
        try {
          Db();
          break;
        } catch (s) {
          JC(e, s);
        }
      while (!0);
      if (Uh(), lt = a, t1(i), hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return Zu(), Jr = null, Gn = j, qn;
    }
    function Db() {
      for (; hn !== null; )
        n1(hn);
    }
    function kb(e, t) {
      var a = lt;
      lt |= gr;
      var i = e1();
      if (Jr !== e || Gn !== t) {
        if (Bn) {
          var u = e.memoizedUpdaters;
          u.size > 0 && ($p(e, Gn), u.clear()), $c(e, t);
        }
        wu = Nd(), Fp(), Vs(e, t);
      }
      Va(t);
      do
        try {
          Ob();
          break;
        } catch (s) {
          JC(e, s);
        }
      while (!0);
      return Uh(), t1(i), lt = a, hn !== null ? (ls(), Tu) : (Zu(), Jr = null, Gn = j, qn);
    }
    function Ob() {
      for (; hn !== null && !hc(); )
        n1(hn);
    }
    function n1(e) {
      var t = e.alternate;
      Ct(e);
      var a;
      (e.mode & De) !== be ? (eS(e), a = VS(t, e, zl), pm(e, !0)) : a = VS(t, e, zl), un(), e.memoizedProps = e.pendingProps, a === null ? r1(e) : hn = a, _S.current = null;
    }
    function r1(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Qr) === Re) {
          Ct(t);
          var u = void 0;
          if ((t.mode & De) === be ? u = bC(a, t, zl) : (eS(t), u = bC(a, t, zl), pm(t, !1)), un(), u !== null) {
            hn = u;
            return;
          }
        } else {
          var s = xx(a, t);
          if (s !== null) {
            s.flags &= wv, hn = s;
            return;
          }
          if ((t.mode & De) !== be) {
            pm(t, !1);
            for (var f = t.actualDuration, p = t.child; p !== null; )
              f += p.actualDuration, p = p.sibling;
            t.actualDuration = f;
          }
          if (i !== null)
            i.flags |= Qr, i.subtreeFlags = Re, i.deletions = null;
          else {
            qn = DS, hn = null;
            return;
          }
        }
        var v = t.sibling;
        if (v !== null) {
          hn = v;
          return;
        }
        t = i, hn = t;
      } while (t !== null);
      qn === Tu && (qn = YC);
    }
    function Bs(e, t, a) {
      var i = ha(), u = yr.transition;
      try {
        yr.transition = null, wn(tr), Lb(e, t, a, i);
      } finally {
        yr.transition = u, wn(i);
      }
      return null;
    }
    function Lb(e, t, a, i) {
      do
        bu();
      while (Mo !== null);
      if (Pb(), (lt & (gr | si)) !== Wn)
        throw new Error("Should not already be working.");
      var u = e.finishedWork, s = e.finishedLanes;
      if (gc(s), u === null)
        return Ed(), null;
      if (s === j && S("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = j, u === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = it;
      var f = $e(u.lanes, u.childLanes);
      Ld(e, f), e === Jr && (Jr = null, hn = null, Gn = j), ((u.subtreeFlags & fa) !== Re || (u.flags & fa) !== Re) && (js || (js = !0, NS = a, $S(Ja, function() {
        return bu(), null;
      })));
      var p = (u.subtreeFlags & (qu | zr | er | fa)) !== Re, v = (u.flags & (qu | zr | er | fa)) !== Re;
      if (p || v) {
        var y = yr.transition;
        yr.transition = null;
        var g = ha();
        wn(tr);
        var b = lt;
        lt |= si, _S.current = null, Ox(e, u), eC(), Yx(e, u, s), YR(e.containerInfo), e.current = u, zv(s), Ix(u, e, s), Ku(), _v(), lt = b, wn(g), yr.transition = y;
      } else
        e.current = u, eC();
      var w = js;
      if (js ? (js = !1, Mo = e, jp = s) : (Nf = 0, wm = null), f = e.pendingLanes, f === j && (Mf = null), w || u1(e.current, !1), wi(u.stateNode, i), Bn && e.memoizedUpdaters.clear(), cb(), Ta(e, Zt()), t !== null)
        for (var L = e.onRecoverableError, N = 0; N < t.length; N++) {
          var H = t[N], ie = H.stack, we = H.digest;
          L(H.value, {
            componentStack: ie,
            digest: we
          });
        }
      if (Rm) {
        Rm = !1;
        var ye = LS;
        throw LS = null, ye;
      }
      return Fr(jp, ke) && e.tag !== Ro && bu(), f = e.pendingLanes, Fr(f, ke) ? (Vw(), e === zS ? Vp++ : (Vp = 0, zS = e)) : Vp = 0, To(), Ed(), null;
    }
    function bu() {
      if (Mo !== null) {
        var e = hs(jp), t = ay(_i, e), a = yr.transition, i = ha();
        try {
          return yr.transition = null, wn(t), Nb();
        } finally {
          wn(i), yr.transition = a;
        }
      }
      return !1;
    }
    function Mb(e) {
      MS.push(e), js || (js = !0, $S(Ja, function() {
        return bu(), null;
      }));
    }
    function Nb() {
      if (Mo === null)
        return !1;
      var e = NS;
      NS = null;
      var t = Mo, a = jp;
      if (Mo = null, jp = j, (lt & (gr | si)) !== Wn)
        throw new Error("Cannot flush passive effects while already rendering.");
      US = !0, Tm = !1, Uv(a);
      var i = lt;
      lt |= si, Zx(t.current), Gx(t, t.current, a, e);
      {
        var u = MS;
        MS = [];
        for (var s = 0; s < u.length; s++) {
          var f = u[s];
          zx(t, f);
        }
      }
      is(), u1(t.current, !0), lt = i, To(), Tm ? t === wm ? Nf++ : (Nf = 0, wm = t) : Nf = 0, US = !1, Tm = !1, vl(t);
      {
        var p = t.current.stateNode;
        p.effectDuration = 0, p.passiveEffectDuration = 0;
      }
      return !0;
    }
    function a1(e) {
      return Mf !== null && Mf.has(e);
    }
    function zb(e) {
      Mf === null ? Mf = /* @__PURE__ */ new Set([e]) : Mf.add(e);
    }
    function Ub(e) {
      Rm || (Rm = !0, LS = e);
    }
    var Ab = Ub;
    function i1(e, t, a) {
      var i = As(a, t), u = nC(e, i, ke), s = xo(e, u, ke), f = ea();
      s !== null && (lu(s, ke, f), Ta(s, f));
    }
    function $t(e, t, a) {
      if (_x(a), Yp(!1), e.tag === oe) {
        i1(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === oe) {
          i1(i, e, a);
          return;
        } else if (i.tag === me) {
          var u = i.type, s = i.stateNode;
          if (typeof u.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !a1(s)) {
            var f = As(a, e), p = lS(i, f, ke), v = xo(i, p, ke), y = ea();
            v !== null && (lu(v, ke, y), Ta(v, y));
            return;
          }
        }
        i = i.return;
      }
      S(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Hb(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var u = ea();
      Od(e, a), Qb(e), Jr === e && iu(Gn, a) && (qn === zp || qn === Sm && Vc(Gn) && Zt() - OS < IC ? Vs(e, j) : Cm = $e(Cm, a)), Ta(e, u);
    }
    function l1(e, t) {
      t === it && (t = yb(e));
      var a = ea(), i = Ea(e, t);
      i !== null && (lu(i, t, a), Ta(i, a));
    }
    function Fb(e) {
      var t = e.memoizedState, a = it;
      t !== null && (a = t.retryLane), l1(e, a);
    }
    function jb(e, t) {
      var a = it, i;
      switch (e.tag) {
        case Te:
          i = e.stateNode;
          var u = e.memoizedState;
          u !== null && (a = u.retryLane);
          break;
        case Et:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), l1(e, a);
    }
    function Vb(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : pb(e / 1960) * 1960;
    }
    function Bb() {
      if (Vp > hb)
        throw Vp = 0, zS = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      Nf > mb && (Nf = 0, wm = null, S("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Pb() {
      zi.flushLegacyContextWarning(), zi.flushPendingUnsafeLifecycleWarnings();
    }
    function u1(e, t) {
      Ct(e), km(e, Nr, ub), t && km(e, ql, ob), km(e, Nr, ib), t && km(e, ql, lb), un();
    }
    function km(e, t, a) {
      for (var i = e, u = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== u && i.child !== null && s !== Re ? i = i.child : ((i.flags & t) !== Re && a(i), i.sibling !== null ? i = i.sibling : i = u = i.return);
      }
    }
    var Om = null;
    function o1(e) {
      {
        if ((lt & gr) !== Wn || !(e.mode & Ge))
          return;
        var t = e.tag;
        if (t !== Ht && t !== oe && t !== me && t !== Oe && t !== Be && t !== qe && t !== Ue)
          return;
        var a = Ae(e) || "ReactComponent";
        if (Om !== null) {
          if (Om.has(a))
            return;
          Om.add(a);
        } else
          Om = /* @__PURE__ */ new Set([a]);
        var i = Kt;
        try {
          Ct(e), S("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ct(e) : un();
        }
      }
    }
    var VS;
    {
      var $b = null;
      VS = function(e, t, a) {
        var i = m1($b, t);
        try {
          return CC(e, t, a);
        } catch (s) {
          if (nw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (Uh(), kE(), _C(e, t), m1(t, i), t.mode & De && eS(t), Gl(null, CC, null, e, t, a), Km()) {
            var u = sd();
            typeof u == "object" && u !== null && u._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var s1 = !1, BS;
    BS = /* @__PURE__ */ new Set();
    function Yb(e) {
      if (Dr && !Hw())
        switch (e.tag) {
          case Oe:
          case Be:
          case Ue: {
            var t = hn && Ae(hn) || "Unknown", a = t;
            if (!BS.has(a)) {
              BS.add(a);
              var i = Ae(e) || "Unknown";
              S("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case me: {
            s1 || (S("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), s1 = !0);
            break;
          }
        }
    }
    function $p(e, t) {
      if (Bn) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Md(e, i, t);
        });
      }
    }
    var PS = {};
    function $S(e, t) {
      {
        var a = Pi.current;
        return a !== null ? (a.push(t), PS) : vc(e, t);
      }
    }
    function c1(e) {
      if (e !== PS)
        return bv(e);
    }
    function f1() {
      return Pi.current !== null;
    }
    function Ib(e) {
      {
        if (e.mode & Ge) {
          if (!PC())
            return;
        } else if (!db() || lt !== Wn || e.tag !== Oe && e.tag !== Be && e.tag !== Ue)
          return;
        if (Pi.current === null) {
          var t = Kt;
          try {
            Ct(e), S(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, Ae(e));
          } finally {
            t ? Ct(e) : un();
          }
        }
      }
    }
    function Qb(e) {
      e.tag !== Ro && PC() && Pi.current === null && S(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Yp(e) {
      GC = e;
    }
    var ci = null, zf = null, Wb = function(e) {
      ci = e;
    };
    function Uf(e) {
      {
        if (ci === null)
          return e;
        var t = ci(e);
        return t === void 0 ? e : t.current;
      }
    }
    function YS(e) {
      return Uf(e);
    }
    function IS(e) {
      {
        if (ci === null)
          return e;
        var t = ci(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = Uf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: ln,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function d1(e, t) {
      {
        if (ci === null)
          return !1;
        var a = e.elementType, i = t.type, u = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case me: {
            typeof i == "function" && (u = !0);
            break;
          }
          case Oe: {
            (typeof i == "function" || s === jn) && (u = !0);
            break;
          }
          case Be: {
            (s === ln || s === jn) && (u = !0);
            break;
          }
          case qe:
          case Ue: {
            (s === Wi || s === jn) && (u = !0);
            break;
          }
          default:
            return !1;
        }
        if (u) {
          var f = ci(a);
          if (f !== void 0 && f === ci(i))
            return !0;
        }
        return !1;
      }
    }
    function p1(e) {
      {
        if (ci === null || typeof WeakSet != "function")
          return;
        zf === null && (zf = /* @__PURE__ */ new WeakSet()), zf.add(e);
      }
    }
    var Gb = function(e, t) {
      {
        if (ci === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        bu(), xu(function() {
          QS(e.current, i, a);
        });
      }
    }, qb = function(e, t) {
      {
        if (e.context !== Pa)
          return;
        bu(), xu(function() {
          Ip(t, e, null, null);
        });
      }
    };
    function QS(e, t, a) {
      {
        var i = e.alternate, u = e.child, s = e.sibling, f = e.tag, p = e.type, v = null;
        switch (f) {
          case Oe:
          case Ue:
          case me:
            v = p;
            break;
          case Be:
            v = p.render;
            break;
        }
        if (ci === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var y = !1, g = !1;
        if (v !== null) {
          var b = ci(v);
          b !== void 0 && (a.has(b) ? g = !0 : t.has(b) && (f === me ? g = !0 : y = !0));
        }
        if (zf !== null && (zf.has(e) || i !== null && zf.has(i)) && (g = !0), g && (e._debugNeedsRemount = !0), g || y) {
          var w = Ea(e, ke);
          w !== null && Xn(w, e, ke, Mt);
        }
        u !== null && !g && QS(u, t, a), s !== null && QS(s, t, a);
      }
    }
    var Xb = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(u) {
          return u.current;
        }));
        return WS(e.current, i, a), a;
      }
    };
    function WS(e, t, a) {
      {
        var i = e.child, u = e.sibling, s = e.tag, f = e.type, p = null;
        switch (s) {
          case Oe:
          case Ue:
          case me:
            p = f;
            break;
          case Be:
            p = f.render;
            break;
        }
        var v = !1;
        p !== null && t.has(p) && (v = !0), v ? Kb(e, a) : i !== null && WS(i, t, a), u !== null && WS(u, t, a);
      }
    }
    function Kb(e, t) {
      {
        var a = Zb(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case ue:
              t.add(i.stateNode);
              return;
            case ge:
              t.add(i.stateNode.containerInfo);
              return;
            case oe:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function Zb(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === ue)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var GS;
    {
      GS = !1;
      try {
        var v1 = Object.preventExtensions({});
      } catch {
        GS = !0;
      }
    }
    function Jb(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Re, this.subtreeFlags = Re, this.deletions = null, this.lanes = j, this.childLanes = j, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !GS && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var $a = function(e, t, a, i) {
      return new Jb(e, t, a, i);
    };
    function qS(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function e_(e) {
      return typeof e == "function" && !qS(e) && e.defaultProps === void 0;
    }
    function t_(e) {
      if (typeof e == "function")
        return qS(e) ? me : Oe;
      if (e != null) {
        var t = e.$$typeof;
        if (t === ln)
          return Be;
        if (t === Wi)
          return qe;
      }
      return Ht;
    }
    function Ps(e, t) {
      var a = e.alternate;
      a === null ? (a = $a(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Re, a.subtreeFlags = Re, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Vn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case Ht:
        case Oe:
        case Ue:
          a.type = Uf(e.type);
          break;
        case me:
          a.type = YS(e.type);
          break;
        case Be:
          a.type = IS(e.type);
          break;
      }
      return a;
    }
    function n_(e, t) {
      e.flags &= Vn | jt;
      var a = e.alternate;
      if (a === null)
        e.childLanes = j, e.lanes = t, e.child = null, e.subtreeFlags = Re, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Re, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function r_(e, t, a) {
      var i;
      return e === _h ? (i = Ge, t === !0 && (i |= Jt, i |= pa)) : i = be, Bn && (i |= De), $a(oe, null, null, i);
    }
    function XS(e, t, a, i, u, s) {
      var f = Ht, p = e;
      if (typeof e == "function")
        qS(e) ? (f = me, p = YS(p)) : p = Uf(p);
      else if (typeof e == "string")
        f = ue;
      else {
        e:
          switch (e) {
            case Ma:
              return Uo(a.children, u, s, t);
            case Ii:
              f = nt, u |= Jt, (u & Ge) !== be && (u |= pa);
              break;
            case Qi:
              return a_(a, u, s, t);
            case aa:
              return i_(a, u, s, t);
            case Fl:
              return l_(a, u, s, t);
            case Fo:
              return h1(a, u, s, t);
            case qs:
            case Ws:
            case Hf:
            case Ff:
            case Gs:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case Ou:
                    f = Gt;
                    break e;
                  case Ho:
                    f = Kn;
                    break e;
                  case ln:
                    f = Be, p = IS(p);
                    break e;
                  case Wi:
                    f = qe;
                    break e;
                  case jn:
                    f = qt, p = null;
                    break e;
                }
              var v = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (v += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var y = i ? Ae(i) : null;
                y && (v += `

Check the render method of \`` + y + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + v));
            }
          }
      }
      var g = $a(f, a, t, u);
      return g.elementType = e, g.type = p, g.lanes = s, g._debugOwner = i, g;
    }
    function KS(e, t, a) {
      var i = null;
      i = e._owner;
      var u = e.type, s = e.key, f = e.props, p = XS(u, s, f, i, t, a);
      return p._debugSource = e._source, p._debugOwner = e._owner, p;
    }
    function Uo(e, t, a, i) {
      var u = $a(vt, e, i, t);
      return u.lanes = a, u;
    }
    function a_(e, t, a, i) {
      typeof e.id != "string" && S('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var u = $a(rt, e, i, t | De);
      return u.elementType = Qi, u.lanes = a, u.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, u;
    }
    function i_(e, t, a, i) {
      var u = $a(Te, e, i, t);
      return u.elementType = aa, u.lanes = a, u;
    }
    function l_(e, t, a, i) {
      var u = $a(Et, e, i, t);
      return u.elementType = Fl, u.lanes = a, u;
    }
    function h1(e, t, a, i) {
      var u = $a(Ye, e, i, t);
      u.elementType = Fo, u.lanes = a;
      var s = {
        isHidden: !1
      };
      return u.stateNode = s, u;
    }
    function ZS(e, t, a) {
      var i = $a(Fe, e, null, t);
      return i.lanes = a, i;
    }
    function u_() {
      var e = $a(ue, null, null, be);
      return e.elementType = "DELETED", e;
    }
    function o_(e) {
      var t = $a(Nt, null, null, be);
      return t.stateNode = e, t;
    }
    function JS(e, t, a) {
      var i = e.children !== null ? e.children : [], u = $a(ge, i, e.key, t);
      return u.lanes = a, u.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        implementation: e.implementation
      }, u;
    }
    function m1(e, t) {
      return e === null && (e = $a(Ht, null, null, be)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function s_(e, t, a, i, u) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = zy, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = it, this.eventTimes = Pc(j), this.expirationTimes = Pc(Mt), this.pendingLanes = j, this.suspendedLanes = j, this.pingedLanes = j, this.expiredLanes = j, this.mutableReadLanes = j, this.finishedLanes = j, this.entangledLanes = j, this.entanglements = Pc(j), this.identifierPrefix = i, this.onRecoverableError = u, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], f = 0; f < Bt; f++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case _h:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case Ro:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function y1(e, t, a, i, u, s, f, p, v, y) {
      var g = new s_(e, t, a, p, v), b = r_(t, s);
      g.current = b, b.stateNode = g;
      {
        var w = {
          element: i,
          isDehydrated: a,
          cache: null,
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        b.memoizedState = w;
      }
      return ug(b), g;
    }
    var e0 = "18.2.0";
    function c_(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return di(i), {
        $$typeof: Ir,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var t0, n0;
    t0 = !1, n0 = {};
    function g1(e) {
      if (!e)
        return Pa;
      var t = oa(e), a = WT(t);
      if (t.tag === me) {
        var i = t.type;
        if (_l(i))
          return Y0(t, i, a);
      }
      return a;
    }
    function f_(e, t) {
      {
        var a = oa(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var u = da(a);
        if (u === null)
          return null;
        if (u.mode & Jt) {
          var s = Ae(a) || "Component";
          if (!n0[s]) {
            n0[s] = !0;
            var f = Kt;
            try {
              Ct(u), a.mode & Jt ? S("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : S("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              f ? Ct(f) : un();
            }
          }
        }
        return u.stateNode;
      }
    }
    function S1(e, t, a, i, u, s, f, p) {
      var v = !1, y = null;
      return y1(e, t, v, y, a, i, u, s, f);
    }
    function E1(e, t, a, i, u, s, f, p, v, y) {
      var g = !0, b = y1(a, i, g, e, u, s, f, p, v);
      b.context = g1(null);
      var w = b.current, L = ea(), N = No(w), H = Cu(L, N);
      return H.callback = t != null ? t : null, xo(w, H, N), gb(b, N, L), b;
    }
    function Ip(e, t, a, i) {
      Dv(t, e);
      var u = t.current, s = ea(), f = No(u);
      Kl(f);
      var p = g1(a);
      t.context === null ? t.context = p : t.pendingContext = p, Dr && Kt !== null && !t0 && (t0 = !0, S(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, Ae(Kt) || "Unknown"));
      var v = Cu(s, f);
      v.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && S("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), v.callback = i);
      var y = xo(u, v, f);
      return y !== null && (Xn(y, u, f, s), Vh(y, u, f)), f;
    }
    function Lm(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case ue:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function d_(e) {
      switch (e.tag) {
        case oe: {
          var t = e.stateNode;
          if (xn(t)) {
            var a = ey(t);
            Rb(t, a);
          }
          break;
        }
        case Te: {
          xu(function() {
            var u = Ea(e, ke);
            if (u !== null) {
              var s = ea();
              Xn(u, e, ke, s);
            }
          });
          var i = ke;
          r0(e, i);
          break;
        }
      }
    }
    function C1(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = Vv(a.retryLane, t));
    }
    function r0(e, t) {
      C1(e, t);
      var a = e.alternate;
      a && C1(a, t);
    }
    function p_(e) {
      if (e.tag === Te) {
        var t = Ju, a = Ea(e, t);
        if (a !== null) {
          var i = ea();
          Xn(a, e, t, i);
        }
        r0(e, t);
      }
    }
    function v_(e) {
      if (e.tag === Te) {
        var t = No(e), a = Ea(e, t);
        if (a !== null) {
          var i = ea();
          Xn(a, e, t, i);
        }
        r0(e, t);
      }
    }
    function R1(e) {
      var t = xv(e);
      return t === null ? null : t.stateNode;
    }
    var T1 = function(e) {
      return null;
    };
    function h_(e) {
      return T1(e);
    }
    var w1 = function(e) {
      return !1;
    };
    function m_(e) {
      return w1(e);
    }
    var x1 = null, b1 = null, _1 = null, D1 = null, k1 = null, O1 = null, L1 = null, M1 = null, N1 = null;
    {
      var z1 = function(e, t, a) {
        var i = t[a], u = tt(e) ? e.slice() : Qe({}, e);
        return a + 1 === t.length ? (tt(u) ? u.splice(i, 1) : delete u[i], u) : (u[i] = z1(e[i], t, a + 1), u);
      }, U1 = function(e, t) {
        return z1(e, t, 0);
      }, A1 = function(e, t, a, i) {
        var u = t[i], s = tt(e) ? e.slice() : Qe({}, e);
        if (i + 1 === t.length) {
          var f = a[i];
          s[f] = s[u], tt(s) ? s.splice(u, 1) : delete s[u];
        } else
          s[u] = A1(
            e[u],
            t,
            a,
            i + 1
          );
        return s;
      }, H1 = function(e, t, a) {
        if (t.length !== a.length) {
          Je("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              Je("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return A1(e, t, a, 0);
      }, F1 = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var u = t[a], s = tt(e) ? e.slice() : Qe({}, e);
        return s[u] = F1(e[u], t, a + 1, i), s;
      }, j1 = function(e, t, a) {
        return F1(e, t, 0, a);
      }, a0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      x1 = function(e, t, a, i) {
        var u = a0(e, t);
        if (u !== null) {
          var s = j1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Qe({}, e.memoizedProps);
          var f = Ea(e, ke);
          f !== null && Xn(f, e, ke, Mt);
        }
      }, b1 = function(e, t, a) {
        var i = a0(e, t);
        if (i !== null) {
          var u = U1(i.memoizedState, a);
          i.memoizedState = u, i.baseState = u, e.memoizedProps = Qe({}, e.memoizedProps);
          var s = Ea(e, ke);
          s !== null && Xn(s, e, ke, Mt);
        }
      }, _1 = function(e, t, a, i) {
        var u = a0(e, t);
        if (u !== null) {
          var s = H1(u.memoizedState, a, i);
          u.memoizedState = s, u.baseState = s, e.memoizedProps = Qe({}, e.memoizedProps);
          var f = Ea(e, ke);
          f !== null && Xn(f, e, ke, Mt);
        }
      }, D1 = function(e, t, a) {
        e.pendingProps = j1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ea(e, ke);
        i !== null && Xn(i, e, ke, Mt);
      }, k1 = function(e, t) {
        e.pendingProps = U1(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = Ea(e, ke);
        a !== null && Xn(a, e, ke, Mt);
      }, O1 = function(e, t, a) {
        e.pendingProps = H1(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = Ea(e, ke);
        i !== null && Xn(i, e, ke, Mt);
      }, L1 = function(e) {
        var t = Ea(e, ke);
        t !== null && Xn(t, e, ke, Mt);
      }, M1 = function(e) {
        T1 = e;
      }, N1 = function(e) {
        w1 = e;
      };
    }
    function y_(e) {
      var t = da(e);
      return t === null ? null : t.stateNode;
    }
    function g_(e) {
      return null;
    }
    function S_() {
      return Kt;
    }
    function E_(e) {
      var t = e.findFiberByHostInstance, a = U.ReactCurrentDispatcher;
      return gd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: x1,
        overrideHookStateDeletePath: b1,
        overrideHookStateRenamePath: _1,
        overrideProps: D1,
        overridePropsDeletePath: k1,
        overridePropsRenamePath: O1,
        setErrorHandler: M1,
        setSuspenseHandler: N1,
        scheduleUpdate: L1,
        currentDispatcherRef: a,
        findHostInstanceByFiber: y_,
        findFiberByHostInstance: t || g_,
        findHostInstancesForRefresh: Xb,
        scheduleRefresh: Gb,
        scheduleRoot: qb,
        setRefreshHandler: Wb,
        getCurrentFiber: S_,
        reconcilerVersion: e0
      });
    }
    var V1 = typeof reportError == "function" ? reportError : function(e) {
      console.error(e);
    };
    function i0(e) {
      this._internalRoot = e;
    }
    Mm.prototype.render = i0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? S("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : Nm(arguments[1]) ? S("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && S("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== mn) {
          var i = R1(t.current);
          i && i.parentNode !== a && S("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Ip(e, t, null, null);
    }, Mm.prototype.unmount = i0.prototype.unmount = function() {
      typeof arguments[0] == "function" && S("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        ZC() && S("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), xu(function() {
          Ip(null, e, null, null);
        }), j0(t);
      }
    };
    function C_(e, t) {
      if (!Nm(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      B1(e);
      var a = !1, i = !1, u = "", s = V1;
      t != null && (t.hydrate ? Je("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === Yi && S(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (u = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var f = S1(e, _h, null, a, i, u, s);
      Eh(f.current, e);
      var p = e.nodeType === mn ? e.parentNode : e;
      return Jd(p), new i0(f);
    }
    function Mm(e) {
      this._internalRoot = e;
    }
    function R_(e) {
      e && Gv(e);
    }
    Mm.prototype.unstable_scheduleHydration = R_;
    function T_(e, t, a) {
      if (!Nm(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      B1(e), t === void 0 && S("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a != null ? a : null, u = a != null && a.hydratedSources || null, s = !1, f = !1, p = "", v = V1;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (p = a.identifierPrefix), a.onRecoverableError !== void 0 && (v = a.onRecoverableError));
      var y = E1(t, null, e, _h, i, s, f, p, v);
      if (Eh(y.current, e), Jd(e), u)
        for (var g = 0; g < u.length; g++) {
          var b = u[g];
          Lw(y, b);
        }
      return new Mm(y);
    }
    function Nm(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === Ha || e.nodeType === Pl || !ae));
    }
    function Qp(e) {
      return !!(e && (e.nodeType === Or || e.nodeType === Ha || e.nodeType === Pl || e.nodeType === mn && e.nodeValue === " react-mount-point-unstable "));
    }
    function B1(e) {
      e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && S("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), cp(e) && (e._reactRootContainer ? S("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : S("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var w_ = U.ReactCurrentOwner, P1;
    P1 = function(e) {
      if (e._reactRootContainer && e.nodeType !== mn) {
        var t = R1(e._reactRootContainer.current);
        t && t.parentNode !== e && S("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = l0(e), u = !!(i && Eo(i));
      u && !a && S("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === Or && e.tagName && e.tagName.toUpperCase() === "BODY" && S("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function l0(e) {
      return e ? e.nodeType === Ha ? e.documentElement : e.firstChild : null;
    }
    function $1() {
    }
    function x_(e, t, a, i, u) {
      if (u) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var w = Lm(f);
            s.call(w);
          };
        }
        var f = E1(
          t,
          i,
          e,
          Ro,
          null,
          !1,
          !1,
          "",
          $1
        );
        e._reactRootContainer = f, Eh(f.current, e);
        var p = e.nodeType === mn ? e.parentNode : e;
        return Jd(p), xu(), f;
      } else {
        for (var v; v = e.lastChild; )
          e.removeChild(v);
        if (typeof i == "function") {
          var y = i;
          i = function() {
            var w = Lm(g);
            y.call(w);
          };
        }
        var g = S1(
          e,
          Ro,
          null,
          !1,
          !1,
          "",
          $1
        );
        e._reactRootContainer = g, Eh(g.current, e);
        var b = e.nodeType === mn ? e.parentNode : e;
        return Jd(b), xu(function() {
          Ip(t, g, a, i);
        }), g;
      }
    }
    function b_(e, t) {
      e !== null && typeof e != "function" && S("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function zm(e, t, a, i, u) {
      P1(a), b_(u === void 0 ? null : u, "render");
      var s = a._reactRootContainer, f;
      if (!s)
        f = x_(a, t, e, u, i);
      else {
        if (f = s, typeof u == "function") {
          var p = u;
          u = function() {
            var v = Lm(f);
            p.call(v);
          };
        }
        Ip(t, f, e, u);
      }
      return Lm(f);
    }
    function __(e) {
      {
        var t = w_.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || S("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", st(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === Or ? e : f_(e, "findDOMNode");
    }
    function D_(e, t, a) {
      if (S("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return zm(null, e, t, !0, a);
    }
    function k_(e, t, a) {
      if (S("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = cp(t) && t._reactRootContainer === void 0;
        i && S("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return zm(null, e, t, !1, a);
    }
    function O_(e, t, a, i) {
      if (S("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Qp(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !ns(e))
        throw new Error("parentComponent must be a valid React Component");
      return zm(e, t, a, !1, i);
    }
    function L_(e) {
      if (!Qp(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = cp(e) && e._reactRootContainer === void 0;
        t && S("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = l0(e), i = a && !Eo(a);
          i && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return xu(function() {
          zm(null, null, e, !1, function() {
            e._reactRootContainer = null, j0(e);
          });
        }), !0;
      } else {
        {
          var u = l0(e), s = !!(u && Eo(u)), f = e.nodeType === Or && Qp(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && S("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", f ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    se(d_), Pv(p_), ys(v_), Ud(ha), Yv(vs), (typeof Map != "function" || Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && S("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Rv(zR), sc(HS, Tb, xu);
    function M_(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!Nm(t))
        throw new Error("Target container is not a DOM element.");
      return c_(e, t, null, a);
    }
    function N_(e, t, a, i) {
      return O_(e, t, a, i);
    }
    var u0 = {
      usingClientEntryPoint: !1,
      Events: [Eo, df, Ch, oc, Jo, HS]
    };
    function z_(e, t) {
      return u0.usingClientEntryPoint || S('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), C_(e, t);
    }
    function U_(e, t, a) {
      return u0.usingClientEntryPoint || S('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), T_(e, t, a);
    }
    function A_(e) {
      return ZC() && S("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), xu(e);
    }
    var H_ = E_({
      findFiberByHostInstance: _s,
      bundleType: 1,
      version: e0,
      rendererPackageName: "react-dom"
    });
    if (!H_ && fn && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var Y1 = window.location.protocol;
      /^(https?|file):$/.test(Y1) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (Y1 === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    xa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = u0, xa.createPortal = M_, xa.createRoot = z_, xa.findDOMNode = __, xa.flushSync = A_, xa.hydrate = D_, xa.hydrateRoot = U_, xa.render = k_, xa.unmountComponentAtNode = L_, xa.unstable_batchedUpdates = HS, xa.unstable_renderSubtreeIntoContainer = N_, xa.version = e0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), xa;
}
(function(Y) {
  function q() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
      if ({}.NODE_ENV !== "production")
        throw new Error("^_^");
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(q);
      } catch (U) {
        console.error(U);
      }
    }
  }
  ({}).NODE_ENV === "production" ? (q(), Y.exports = I_()) : Y.exports = Q_();
})(Z1);
var Gp = Z1.exports;
if ({}.NODE_ENV === "production")
  qp.createRoot = Gp.createRoot, qp.hydrateRoot = Gp.hydrateRoot;
else {
  var Am = Gp.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
  qp.createRoot = function(Y, q) {
    Am.usingClientEntryPoint = !0;
    try {
      return Gp.createRoot(Y, q);
    } finally {
      Am.usingClientEntryPoint = !1;
    }
  }, qp.hydrateRoot = function(Y, q, U) {
    Am.usingClientEntryPoint = !0;
    try {
      return Gp.hydrateRoot(Y, q, U);
    } finally {
      Am.usingClientEntryPoint = !1;
    }
  };
}
function $s() {
  var Y, q;
  if ((Y = window.backbone) != null && Y.app)
    return (q = window.backbone) == null ? void 0 : q.app;
}
async function W_(Y) {
  $s() && await $s().onAdd(async () => {
    const q = await $s().all();
    Y(q);
  });
}
function G_() {
  const [Y, q] = Ys.exports.useState([]), [U, nn] = Ys.exports.useState("");
  Ys.exports.useEffect(() => {
    rn(), W_(q);
  }, []);
  async function rn() {
    const S = $s() ? await $s().all() : [];
    q(S);
  }
  async function Je(S) {
    S && S.PreventDefault(), U && ($s() && await $s().set({ key: new Date().getTime().toString(), value: U }), nn(""), await rn());
  }
  return /* @__PURE__ */ ba.createElement(ba.Fragment, null, /* @__PURE__ */ ba.createElement("div", {
    className: "head"
  }, "Anonymous chat"), /* @__PURE__ */ ba.createElement("div", {
    className: "sub"
  }, location.href.match(/#0x/) ? "" : `Open ${location.href}#${window._dev_address} on another browser (not a tab)`, " "), /* @__PURE__ */ ba.createElement("div", {
    id: "messages"
  }, /* @__PURE__ */ ba.createElement("table", null, /* @__PURE__ */ ba.createElement("tbody", null, Y.map((S, an) => /* @__PURE__ */ ba.createElement("tr", {
    key: an
  }, /* @__PURE__ */ ba.createElement("td", {
    className: "pointer"
  }, ">"), /* @__PURE__ */ ba.createElement("td", {
    className: "message"
  }, S))))), /* @__PURE__ */ ba.createElement("form", {
    onSubmit: (S) => {
      S.preventDefault();
    }
  }, /* @__PURE__ */ ba.createElement("input", {
    type: "text",
    placeholder: "what's on your mind?",
    name: "msg",
    id: "msg",
    value: U,
    onChange: (S) => nn(S.target.value)
  }), /* @__PURE__ */ ba.createElement("button", {
    type: "submit",
    onClick: () => Je()
  }, "Post"))));
}
const q_ = `*{font-family:monospace!important}body{top:0;bottom:0;left:0;right:0;position:absolute;background:#212121;z-index:100}body .head{font-size:2rem;font-weight:700;color:#fff;text-align:center;margin:15px}body .sub{color:#fff;text-align:center}body #messages{display:flex;flex-direction:column;background:#141414;width:80%;position:relative;margin:20px auto 0;border-radius:10px;border:1px solid rgba(255,255,255,.1019607843);box-shadow:0 0 5px #000 inset}body #messages table{width:100%;padding:10px}body #messages table td{font-family:monospace!important;color:green;vertical-align:top}body #messages table td.pointer{width:10px}body #messages form{display:flex;padding:0 10px 10px}body #messages form input[type=text]{flex:1}body #messages form input[type=text],body #messages form button{background:#151515;border:1px solid rgba(255,255,255,.0901960784);height:35px;color:#fff;border-radius:30px;width:100%;padding:0 14px 1px}body #messages form input[type=text]:focus,body #messages form input[type=text]:focus-visible{border:1px solid rgba(255,255,255,.1803921569);outline:none}body #messages form button{width:auto;background:linear-gradient(180deg,#e042ff 0%,#394bd5 100%);border:1px solid rgba(255,255,255,.1294117647);font-weight:700;text-transform:uppercase;font-size:1rem;border-radius:10px;margin-left:10px;white-space:nowrap;background:rgba(100,0,247,.1019607843);box-shadow:0 0 2px #000}
`;
if (typeof window == "object") {
  const Y = document.createElement("style");
  Y.setAttribute("id", "app-style"), Y.innerHTML = q_, document.body.appendChild(Y);
}
const J_ = async () => {
  qp.createRoot(document.getElementById("UI")).render(/* @__PURE__ */ ba.createElement(G_, null));
};
export {
  J_ as default
};
