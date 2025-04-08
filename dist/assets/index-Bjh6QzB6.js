(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) r(i);
  new MutationObserver((i) => {
    for (const s of i)
      if (s.type === "childList")
        for (const o of s.addedNodes)
          o.tagName === "LINK" && o.rel === "modulepreload" && r(o);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(i) {
    const s = {};
    return (
      i.integrity && (s.integrity = i.integrity),
      i.referrerPolicy && (s.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (s.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (s.credentials = "omit")
        : (s.credentials = "same-origin"),
      s
    );
  }
  function r(i) {
    if (i.ep) return;
    i.ep = !0;
    const s = n(i);
    fetch(i.href, s);
  }
})();
var Us =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function od(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default")
    ? e.default
    : e;
}
var Mh = { exports: {} },
  Va = {},
  Nh = { exports: {} },
  V = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var Ts = Symbol.for("react.element"),
  lS = Symbol.for("react.portal"),
  uS = Symbol.for("react.fragment"),
  cS = Symbol.for("react.strict_mode"),
  dS = Symbol.for("react.profiler"),
  fS = Symbol.for("react.provider"),
  pS = Symbol.for("react.context"),
  mS = Symbol.for("react.forward_ref"),
  vS = Symbol.for("react.suspense"),
  hS = Symbol.for("react.memo"),
  gS = Symbol.for("react.lazy"),
  op = Symbol.iterator;
function yS(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (op && e[op]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var kh = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  Ah = Object.assign,
  Lh = {};
function ni(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lh),
    (this.updater = n || kh);
}
ni.prototype.isReactComponent = {};
ni.prototype.setState = function (e, t) {
  if (typeof e != "object" && typeof e != "function" && e != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, e, t, "setState");
};
ni.prototype.forceUpdate = function (e) {
  this.updater.enqueueForceUpdate(this, e, "forceUpdate");
};
function Dh() {}
Dh.prototype = ni.prototype;
function ad(e, t, n) {
  (this.props = e),
    (this.context = t),
    (this.refs = Lh),
    (this.updater = n || kh);
}
var ld = (ad.prototype = new Dh());
ld.constructor = ad;
Ah(ld, ni.prototype);
ld.isPureReactComponent = !0;
var ap = Array.isArray,
  zh = Object.prototype.hasOwnProperty,
  ud = { current: null },
  Rh = { key: !0, ref: !0, __self: !0, __source: !0 };
function Bh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  if (t != null)
    for (r in (t.ref !== void 0 && (o = t.ref),
    t.key !== void 0 && (s = "" + t.key),
    t))
      zh.call(t, r) && !Rh.hasOwnProperty(r) && (i[r] = t[r]);
  var a = arguments.length - 2;
  if (a === 1) i.children = n;
  else if (1 < a) {
    for (var l = Array(a), c = 0; c < a; c++) l[c] = arguments[c + 2];
    i.children = l;
  }
  if (e && e.defaultProps)
    for (r in ((a = e.defaultProps), a)) i[r] === void 0 && (i[r] = a[r]);
  return {
    $$typeof: Ts,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: ud.current,
  };
}
function wS(e, t) {
  return {
    $$typeof: Ts,
    type: e.type,
    key: t,
    ref: e.ref,
    props: e.props,
    _owner: e._owner,
  };
}
function cd(e) {
  return typeof e == "object" && e !== null && e.$$typeof === Ts;
}
function xS(e) {
  var t = { "=": "=0", ":": "=2" };
  return (
    "$" +
    e.replace(/[=:]/g, function (n) {
      return t[n];
    })
  );
}
var lp = /\/+/g;
function bl(e, t) {
  return typeof e == "object" && e !== null && e.key != null
    ? xS("" + e.key)
    : t.toString(36);
}
function zo(e, t, n, r, i) {
  var s = typeof e;
  (s === "undefined" || s === "boolean") && (e = null);
  var o = !1;
  if (e === null) o = !0;
  else
    switch (s) {
      case "string":
      case "number":
        o = !0;
        break;
      case "object":
        switch (e.$$typeof) {
          case Ts:
          case lS:
            o = !0;
        }
    }
  if (o)
    return (
      (o = e),
      (i = i(o)),
      (e = r === "" ? "." + bl(o, 0) : r),
      ap(i)
        ? ((n = ""),
          e != null && (n = e.replace(lp, "$&/") + "/"),
          zo(i, t, n, "", function (c) {
            return c;
          }))
        : i != null &&
          (cd(i) &&
            (i = wS(
              i,
              n +
                (!i.key || (o && o.key === i.key)
                  ? ""
                  : ("" + i.key).replace(lp, "$&/") + "/") +
                e
            )),
          t.push(i)),
      1
    );
  if (((o = 0), (r = r === "" ? "." : r + ":"), ap(e)))
    for (var a = 0; a < e.length; a++) {
      s = e[a];
      var l = r + bl(s, a);
      o += zo(s, t, n, l, i);
    }
  else if (((l = yS(e)), typeof l == "function"))
    for (e = l.call(e), a = 0; !(s = e.next()).done; )
      (s = s.value), (l = r + bl(s, a++)), (o += zo(s, t, n, l, i));
  else if (s === "object")
    throw (
      ((t = String(e)),
      Error(
        "Objects are not valid as a React child (found: " +
          (t === "[object Object]"
            ? "object with keys {" + Object.keys(e).join(", ") + "}"
            : t) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return o;
}
function Zs(e, t, n) {
  if (e == null) return e;
  var r = [],
    i = 0;
  return (
    zo(e, r, "", "", function (s) {
      return t.call(n, s, i++);
    }),
    r
  );
}
function SS(e) {
  if (e._status === -1) {
    var t = e._result;
    (t = t()),
      t.then(
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 1), (e._result = n));
        },
        function (n) {
          (e._status === 0 || e._status === -1) &&
            ((e._status = 2), (e._result = n));
        }
      ),
      e._status === -1 && ((e._status = 0), (e._result = t));
  }
  if (e._status === 1) return e._result.default;
  throw e._result;
}
var Me = { current: null },
  Ro = { transition: null },
  ES = {
    ReactCurrentDispatcher: Me,
    ReactCurrentBatchConfig: Ro,
    ReactCurrentOwner: ud,
  };
function Fh() {
  throw Error("act(...) is not supported in production builds of React.");
}
V.Children = {
  map: Zs,
  forEach: function (e, t, n) {
    Zs(
      e,
      function () {
        t.apply(this, arguments);
      },
      n
    );
  },
  count: function (e) {
    var t = 0;
    return (
      Zs(e, function () {
        t++;
      }),
      t
    );
  },
  toArray: function (e) {
    return (
      Zs(e, function (t) {
        return t;
      }) || []
    );
  },
  only: function (e) {
    if (!cd(e))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return e;
  },
};
V.Component = ni;
V.Fragment = uS;
V.Profiler = dS;
V.PureComponent = ad;
V.StrictMode = cS;
V.Suspense = vS;
V.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ES;
V.act = Fh;
V.cloneElement = function (e, t, n) {
  if (e == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        e +
        "."
    );
  var r = Ah({}, e.props),
    i = e.key,
    s = e.ref,
    o = e._owner;
  if (t != null) {
    if (
      (t.ref !== void 0 && ((s = t.ref), (o = ud.current)),
      t.key !== void 0 && (i = "" + t.key),
      e.type && e.type.defaultProps)
    )
      var a = e.type.defaultProps;
    for (l in t)
      zh.call(t, l) &&
        !Rh.hasOwnProperty(l) &&
        (r[l] = t[l] === void 0 && a !== void 0 ? a[l] : t[l]);
  }
  var l = arguments.length - 2;
  if (l === 1) r.children = n;
  else if (1 < l) {
    a = Array(l);
    for (var c = 0; c < l; c++) a[c] = arguments[c + 2];
    r.children = a;
  }
  return { $$typeof: Ts, type: e.type, key: i, ref: s, props: r, _owner: o };
};
V.createContext = function (e) {
  return (
    (e = {
      $$typeof: pS,
      _currentValue: e,
      _currentValue2: e,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (e.Provider = { $$typeof: fS, _context: e }),
    (e.Consumer = e)
  );
};
V.createElement = Bh;
V.createFactory = function (e) {
  var t = Bh.bind(null, e);
  return (t.type = e), t;
};
V.createRef = function () {
  return { current: null };
};
V.forwardRef = function (e) {
  return { $$typeof: mS, render: e };
};
V.isValidElement = cd;
V.lazy = function (e) {
  return { $$typeof: gS, _payload: { _status: -1, _result: e }, _init: SS };
};
V.memo = function (e, t) {
  return { $$typeof: hS, type: e, compare: t === void 0 ? null : t };
};
V.startTransition = function (e) {
  var t = Ro.transition;
  Ro.transition = {};
  try {
    e();
  } finally {
    Ro.transition = t;
  }
};
V.unstable_act = Fh;
V.useCallback = function (e, t) {
  return Me.current.useCallback(e, t);
};
V.useContext = function (e) {
  return Me.current.useContext(e);
};
V.useDebugValue = function () {};
V.useDeferredValue = function (e) {
  return Me.current.useDeferredValue(e);
};
V.useEffect = function (e, t) {
  return Me.current.useEffect(e, t);
};
V.useId = function () {
  return Me.current.useId();
};
V.useImperativeHandle = function (e, t, n) {
  return Me.current.useImperativeHandle(e, t, n);
};
V.useInsertionEffect = function (e, t) {
  return Me.current.useInsertionEffect(e, t);
};
V.useLayoutEffect = function (e, t) {
  return Me.current.useLayoutEffect(e, t);
};
V.useMemo = function (e, t) {
  return Me.current.useMemo(e, t);
};
V.useReducer = function (e, t, n) {
  return Me.current.useReducer(e, t, n);
};
V.useRef = function (e) {
  return Me.current.useRef(e);
};
V.useState = function (e) {
  return Me.current.useState(e);
};
V.useSyncExternalStore = function (e, t, n) {
  return Me.current.useSyncExternalStore(e, t, n);
};
V.useTransition = function () {
  return Me.current.useTransition();
};
V.version = "18.3.1";
Nh.exports = V;
var E = Nh.exports;
const Q = od(E);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var IS = E,
  TS = Symbol.for("react.element"),
  CS = Symbol.for("react.fragment"),
  bS = Object.prototype.hasOwnProperty,
  PS = IS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  jS = { key: !0, ref: !0, __self: !0, __source: !0 };
function Wh(e, t, n) {
  var r,
    i = {},
    s = null,
    o = null;
  n !== void 0 && (s = "" + n),
    t.key !== void 0 && (s = "" + t.key),
    t.ref !== void 0 && (o = t.ref);
  for (r in t) bS.call(t, r) && !jS.hasOwnProperty(r) && (i[r] = t[r]);
  if (e && e.defaultProps)
    for (r in ((t = e.defaultProps), t)) i[r] === void 0 && (i[r] = t[r]);
  return {
    $$typeof: TS,
    type: e,
    key: s,
    ref: o,
    props: i,
    _owner: PS.current,
  };
}
Va.Fragment = CS;
Va.jsx = Wh;
Va.jsxs = Wh;
Mh.exports = Va;
var p = Mh.exports,
  Hh = { exports: {} },
  qe = {},
  Vh = { exports: {} },
  Gh = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (e) {
  function t(M, k) {
    var A = M.length;
    M.push(k);
    e: for (; 0 < A; ) {
      var N = (A - 1) >>> 1,
        D = M[N];
      if (0 < i(D, k)) (M[N] = k), (M[A] = D), (A = N);
      else break e;
    }
  }
  function n(M) {
    return M.length === 0 ? null : M[0];
  }
  function r(M) {
    if (M.length === 0) return null;
    var k = M[0],
      A = M.pop();
    if (A !== k) {
      M[0] = A;
      e: for (var N = 0, D = M.length, R = D >>> 1; N < R; ) {
        var H = 2 * (N + 1) - 1,
          K = M[H],
          ce = H + 1,
          xe = M[ce];
        if (0 > i(K, A))
          ce < D && 0 > i(xe, K)
            ? ((M[N] = xe), (M[ce] = A), (N = ce))
            : ((M[N] = K), (M[H] = A), (N = H));
        else if (ce < D && 0 > i(xe, A)) (M[N] = xe), (M[ce] = A), (N = ce);
        else break e;
      }
    }
    return k;
  }
  function i(M, k) {
    var A = M.sortIndex - k.sortIndex;
    return A !== 0 ? A : M.id - k.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var s = performance;
    e.unstable_now = function () {
      return s.now();
    };
  } else {
    var o = Date,
      a = o.now();
    e.unstable_now = function () {
      return o.now() - a;
    };
  }
  var l = [],
    c = [],
    u = 1,
    d = null,
    f = 3,
    g = !1,
    y = !1,
    w = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    v = typeof clearTimeout == "function" ? clearTimeout : null,
    m = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function h(M) {
    for (var k = n(c); k !== null; ) {
      if (k.callback === null) r(c);
      else if (k.startTime <= M)
        r(c), (k.sortIndex = k.expirationTime), t(l, k);
      else break;
      k = n(c);
    }
  }
  function x(M) {
    if (((w = !1), h(M), !y))
      if (n(l) !== null) (y = !0), W(S);
      else {
        var k = n(c);
        k !== null && G(x, k.startTime - M);
      }
  }
  function S(M, k) {
    (y = !1), w && ((w = !1), v(T), (T = -1)), (g = !0);
    var A = f;
    try {
      for (
        h(k), d = n(l);
        d !== null && (!(d.expirationTime > k) || (M && !C()));

      ) {
        var N = d.callback;
        if (typeof N == "function") {
          (d.callback = null), (f = d.priorityLevel);
          var D = N(d.expirationTime <= k);
          (k = e.unstable_now()),
            typeof D == "function" ? (d.callback = D) : d === n(l) && r(l),
            h(k);
        } else r(l);
        d = n(l);
      }
      if (d !== null) var R = !0;
      else {
        var H = n(c);
        H !== null && G(x, H.startTime - k), (R = !1);
      }
      return R;
    } finally {
      (d = null), (f = A), (g = !1);
    }
  }
  var b = !1,
    $ = null,
    T = -1,
    j = 5,
    P = -1;
  function C() {
    return !(e.unstable_now() - P < j);
  }
  function _() {
    if ($ !== null) {
      var M = e.unstable_now();
      P = M;
      var k = !0;
      try {
        k = $(!0, M);
      } finally {
        k ? O() : ((b = !1), ($ = null));
      }
    } else b = !1;
  }
  var O;
  if (typeof m == "function")
    O = function () {
      m(_);
    };
  else if (typeof MessageChannel < "u") {
    var z = new MessageChannel(),
      F = z.port2;
    (z.port1.onmessage = _),
      (O = function () {
        F.postMessage(null);
      });
  } else
    O = function () {
      I(_, 0);
    };
  function W(M) {
    ($ = M), b || ((b = !0), O());
  }
  function G(M, k) {
    T = I(function () {
      M(e.unstable_now());
    }, k);
  }
  (e.unstable_IdlePriority = 5),
    (e.unstable_ImmediatePriority = 1),
    (e.unstable_LowPriority = 4),
    (e.unstable_NormalPriority = 3),
    (e.unstable_Profiling = null),
    (e.unstable_UserBlockingPriority = 2),
    (e.unstable_cancelCallback = function (M) {
      M.callback = null;
    }),
    (e.unstable_continueExecution = function () {
      y || g || ((y = !0), W(S));
    }),
    (e.unstable_forceFrameRate = function (M) {
      0 > M || 125 < M
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (j = 0 < M ? Math.floor(1e3 / M) : 5);
    }),
    (e.unstable_getCurrentPriorityLevel = function () {
      return f;
    }),
    (e.unstable_getFirstCallbackNode = function () {
      return n(l);
    }),
    (e.unstable_next = function (M) {
      switch (f) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = f;
      }
      var A = f;
      f = k;
      try {
        return M();
      } finally {
        f = A;
      }
    }),
    (e.unstable_pauseExecution = function () {}),
    (e.unstable_requestPaint = function () {}),
    (e.unstable_runWithPriority = function (M, k) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var A = f;
      f = M;
      try {
        return k();
      } finally {
        f = A;
      }
    }),
    (e.unstable_scheduleCallback = function (M, k, A) {
      var N = e.unstable_now();
      switch (
        (typeof A == "object" && A !== null
          ? ((A = A.delay), (A = typeof A == "number" && 0 < A ? N + A : N))
          : (A = N),
        M)
      ) {
        case 1:
          var D = -1;
          break;
        case 2:
          D = 250;
          break;
        case 5:
          D = 1073741823;
          break;
        case 4:
          D = 1e4;
          break;
        default:
          D = 5e3;
      }
      return (
        (D = A + D),
        (M = {
          id: u++,
          callback: k,
          priorityLevel: M,
          startTime: A,
          expirationTime: D,
          sortIndex: -1,
        }),
        A > N
          ? ((M.sortIndex = A),
            t(c, M),
            n(l) === null &&
              M === n(c) &&
              (w ? (v(T), (T = -1)) : (w = !0), G(x, A - N)))
          : ((M.sortIndex = D), t(l, M), y || g || ((y = !0), W(S))),
        M
      );
    }),
    (e.unstable_shouldYield = C),
    (e.unstable_wrapCallback = function (M) {
      var k = f;
      return function () {
        var A = f;
        f = k;
        try {
          return M.apply(this, arguments);
        } finally {
          f = A;
        }
      };
    });
})(Gh);
Vh.exports = Gh;
var $S = Vh.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var _S = E,
  Ke = $S;
function L(e) {
  for (
    var t = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, n = 1;
    n < arguments.length;
    n++
  )
    t += "&args[]=" + encodeURIComponent(arguments[n]);
  return (
    "Minified React error #" +
    e +
    "; visit " +
    t +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var Yh = new Set(),
  rs = {};
function dr(e, t) {
  Vr(e, t), Vr(e + "Capture", t);
}
function Vr(e, t) {
  for (rs[e] = t, e = 0; e < t.length; e++) Yh.add(t[e]);
}
var rn = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Wu = Object.prototype.hasOwnProperty,
  OS =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  up = {},
  cp = {};
function MS(e) {
  return Wu.call(cp, e)
    ? !0
    : Wu.call(up, e)
    ? !1
    : OS.test(e)
    ? (cp[e] = !0)
    : ((up[e] = !0), !1);
}
function NS(e, t, n, r) {
  if (n !== null && n.type === 0) return !1;
  switch (typeof t) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return r
        ? !1
        : n !== null
        ? !n.acceptsBooleans
        : ((e = e.toLowerCase().slice(0, 5)), e !== "data-" && e !== "aria-");
    default:
      return !1;
  }
}
function kS(e, t, n, r) {
  if (t === null || typeof t > "u" || NS(e, t, n, r)) return !0;
  if (r) return !1;
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
function Ne(e, t, n, r, i, s, o) {
  (this.acceptsBooleans = t === 2 || t === 3 || t === 4),
    (this.attributeName = r),
    (this.attributeNamespace = i),
    (this.mustUseProperty = n),
    (this.propertyName = e),
    (this.type = t),
    (this.sanitizeURL = s),
    (this.removeEmptyString = o);
}
var Te = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Ne(e, 0, !1, e, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (e) {
  var t = e[0];
  Te[t] = new Ne(t, 1, !1, e[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (e) {
  Te[e] = new Ne(e, 2, !1, e.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (e) {
  Te[e] = new Ne(e, 2, !1, e, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (e) {
    Te[e] = new Ne(e, 3, !1, e.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (e) {
  Te[e] = new Ne(e, 3, !0, e, null, !1, !1);
});
["capture", "download"].forEach(function (e) {
  Te[e] = new Ne(e, 4, !1, e, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (e) {
  Te[e] = new Ne(e, 6, !1, e, null, !1, !1);
});
["rowSpan", "start"].forEach(function (e) {
  Te[e] = new Ne(e, 5, !1, e.toLowerCase(), null, !1, !1);
});
var dd = /[\-:]([a-z])/g;
function fd(e) {
  return e[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(dd, fd);
    Te[t] = new Ne(t, 1, !1, e, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (e) {
    var t = e.replace(dd, fd);
    Te[t] = new Ne(t, 1, !1, e, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (e) {
  var t = e.replace(dd, fd);
  Te[t] = new Ne(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (e) {
  Te[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !1, !1);
});
Te.xlinkHref = new Ne(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (e) {
  Te[e] = new Ne(e, 1, !1, e.toLowerCase(), null, !0, !0);
});
function pd(e, t, n, r) {
  var i = Te.hasOwnProperty(t) ? Te[t] : null;
  (i !== null
    ? i.type !== 0
    : r ||
      !(2 < t.length) ||
      (t[0] !== "o" && t[0] !== "O") ||
      (t[1] !== "n" && t[1] !== "N")) &&
    (kS(t, n, i, r) && (n = null),
    r || i === null
      ? MS(t) && (n === null ? e.removeAttribute(t) : e.setAttribute(t, "" + n))
      : i.mustUseProperty
      ? (e[i.propertyName] = n === null ? (i.type === 3 ? !1 : "") : n)
      : ((t = i.attributeName),
        (r = i.attributeNamespace),
        n === null
          ? e.removeAttribute(t)
          : ((i = i.type),
            (n = i === 3 || (i === 4 && n === !0) ? "" : "" + n),
            r ? e.setAttributeNS(r, t, n) : e.setAttribute(t, n))));
}
var cn = _S.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Ks = Symbol.for("react.element"),
  Ir = Symbol.for("react.portal"),
  Tr = Symbol.for("react.fragment"),
  md = Symbol.for("react.strict_mode"),
  Hu = Symbol.for("react.profiler"),
  Xh = Symbol.for("react.provider"),
  Uh = Symbol.for("react.context"),
  vd = Symbol.for("react.forward_ref"),
  Vu = Symbol.for("react.suspense"),
  Gu = Symbol.for("react.suspense_list"),
  hd = Symbol.for("react.memo"),
  wn = Symbol.for("react.lazy"),
  Zh = Symbol.for("react.offscreen"),
  dp = Symbol.iterator;
function yi(e) {
  return e === null || typeof e != "object"
    ? null
    : ((e = (dp && e[dp]) || e["@@iterator"]),
      typeof e == "function" ? e : null);
}
var ae = Object.assign,
  Pl;
function zi(e) {
  if (Pl === void 0)
    try {
      throw Error();
    } catch (n) {
      var t = n.stack.trim().match(/\n( *(at )?)/);
      Pl = (t && t[1]) || "";
    }
  return (
    `
` +
    Pl +
    e
  );
}
var jl = !1;
function $l(e, t) {
  if (!e || jl) return "";
  jl = !0;
  var n = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (t)
      if (
        ((t = function () {
          throw Error();
        }),
        Object.defineProperty(t.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(t, []);
        } catch (c) {
          var r = c;
        }
        Reflect.construct(e, [], t);
      } else {
        try {
          t.call();
        } catch (c) {
          r = c;
        }
        e.call(t.prototype);
      }
    else {
      try {
        throw Error();
      } catch (c) {
        r = c;
      }
      e();
    }
  } catch (c) {
    if (c && r && typeof c.stack == "string") {
      for (
        var i = c.stack.split(`
`),
          s = r.stack.split(`
`),
          o = i.length - 1,
          a = s.length - 1;
        1 <= o && 0 <= a && i[o] !== s[a];

      )
        a--;
      for (; 1 <= o && 0 <= a; o--, a--)
        if (i[o] !== s[a]) {
          if (o !== 1 || a !== 1)
            do
              if ((o--, a--, 0 > a || i[o] !== s[a])) {
                var l =
                  `
` + i[o].replace(" at new ", " at ");
                return (
                  e.displayName &&
                    l.includes("<anonymous>") &&
                    (l = l.replace("<anonymous>", e.displayName)),
                  l
                );
              }
            while (1 <= o && 0 <= a);
          break;
        }
    }
  } finally {
    (jl = !1), (Error.prepareStackTrace = n);
  }
  return (e = e ? e.displayName || e.name : "") ? zi(e) : "";
}
function AS(e) {
  switch (e.tag) {
    case 5:
      return zi(e.type);
    case 16:
      return zi("Lazy");
    case 13:
      return zi("Suspense");
    case 19:
      return zi("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (e = $l(e.type, !1)), e;
    case 11:
      return (e = $l(e.type.render, !1)), e;
    case 1:
      return (e = $l(e.type, !0)), e;
    default:
      return "";
  }
}
function Yu(e) {
  if (e == null) return null;
  if (typeof e == "function") return e.displayName || e.name || null;
  if (typeof e == "string") return e;
  switch (e) {
    case Tr:
      return "Fragment";
    case Ir:
      return "Portal";
    case Hu:
      return "Profiler";
    case md:
      return "StrictMode";
    case Vu:
      return "Suspense";
    case Gu:
      return "SuspenseList";
  }
  if (typeof e == "object")
    switch (e.$$typeof) {
      case Uh:
        return (e.displayName || "Context") + ".Consumer";
      case Xh:
        return (e._context.displayName || "Context") + ".Provider";
      case vd:
        var t = e.render;
        return (
          (e = e.displayName),
          e ||
            ((e = t.displayName || t.name || ""),
            (e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")),
          e
        );
      case hd:
        return (
          (t = e.displayName || null), t !== null ? t : Yu(e.type) || "Memo"
        );
      case wn:
        (t = e._payload), (e = e._init);
        try {
          return Yu(e(t));
        } catch {}
    }
  return null;
}
function LS(e) {
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
      return (
        (e = t.render),
        (e = e.displayName || e.name || ""),
        t.displayName || (e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef")
      );
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
      return Yu(t);
    case 8:
      return t === md ? "StrictMode" : "Mode";
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
      if (typeof t == "function") return t.displayName || t.name || null;
      if (typeof t == "string") return t;
  }
  return null;
}
function kn(e) {
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
function Kh(e) {
  var t = e.type;
  return (
    (e = e.nodeName) &&
    e.toLowerCase() === "input" &&
    (t === "checkbox" || t === "radio")
  );
}
function DS(e) {
  var t = Kh(e) ? "checked" : "value",
    n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
    r = "" + e[t];
  if (
    !e.hasOwnProperty(t) &&
    typeof n < "u" &&
    typeof n.get == "function" &&
    typeof n.set == "function"
  ) {
    var i = n.get,
      s = n.set;
    return (
      Object.defineProperty(e, t, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (o) {
          (r = "" + o), s.call(this, o);
        },
      }),
      Object.defineProperty(e, t, { enumerable: n.enumerable }),
      {
        getValue: function () {
          return r;
        },
        setValue: function (o) {
          r = "" + o;
        },
        stopTracking: function () {
          (e._valueTracker = null), delete e[t];
        },
      }
    );
  }
}
function Qs(e) {
  e._valueTracker || (e._valueTracker = DS(e));
}
function Qh(e) {
  if (!e) return !1;
  var t = e._valueTracker;
  if (!t) return !0;
  var n = t.getValue(),
    r = "";
  return (
    e && (r = Kh(e) ? (e.checked ? "true" : "false") : e.value),
    (e = r),
    e !== n ? (t.setValue(e), !0) : !1
  );
}
function oa(e) {
  if (((e = e || (typeof document < "u" ? document : void 0)), typeof e > "u"))
    return null;
  try {
    return e.activeElement || e.body;
  } catch {
    return e.body;
  }
}
function Xu(e, t) {
  var n = t.checked;
  return ae({}, t, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: n ?? e._wrapperState.initialChecked,
  });
}
function fp(e, t) {
  var n = t.defaultValue == null ? "" : t.defaultValue,
    r = t.checked != null ? t.checked : t.defaultChecked;
  (n = kn(t.value != null ? t.value : n)),
    (e._wrapperState = {
      initialChecked: r,
      initialValue: n,
      controlled:
        t.type === "checkbox" || t.type === "radio"
          ? t.checked != null
          : t.value != null,
    });
}
function qh(e, t) {
  (t = t.checked), t != null && pd(e, "checked", t, !1);
}
function Uu(e, t) {
  qh(e, t);
  var n = kn(t.value),
    r = t.type;
  if (n != null)
    r === "number"
      ? ((n === 0 && e.value === "") || e.value != n) && (e.value = "" + n)
      : e.value !== "" + n && (e.value = "" + n);
  else if (r === "submit" || r === "reset") {
    e.removeAttribute("value");
    return;
  }
  t.hasOwnProperty("value")
    ? Zu(e, t.type, n)
    : t.hasOwnProperty("defaultValue") && Zu(e, t.type, kn(t.defaultValue)),
    t.checked == null &&
      t.defaultChecked != null &&
      (e.defaultChecked = !!t.defaultChecked);
}
function pp(e, t, n) {
  if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
    var r = t.type;
    if (
      !(
        (r !== "submit" && r !== "reset") ||
        (t.value !== void 0 && t.value !== null)
      )
    )
      return;
    (t = "" + e._wrapperState.initialValue),
      n || t === e.value || (e.value = t),
      (e.defaultValue = t);
  }
  (n = e.name),
    n !== "" && (e.name = ""),
    (e.defaultChecked = !!e._wrapperState.initialChecked),
    n !== "" && (e.name = n);
}
function Zu(e, t, n) {
  (t !== "number" || oa(e.ownerDocument) !== e) &&
    (n == null
      ? (e.defaultValue = "" + e._wrapperState.initialValue)
      : e.defaultValue !== "" + n && (e.defaultValue = "" + n));
}
var Ri = Array.isArray;
function Lr(e, t, n, r) {
  if (((e = e.options), t)) {
    t = {};
    for (var i = 0; i < n.length; i++) t["$" + n[i]] = !0;
    for (n = 0; n < e.length; n++)
      (i = t.hasOwnProperty("$" + e[n].value)),
        e[n].selected !== i && (e[n].selected = i),
        i && r && (e[n].defaultSelected = !0);
  } else {
    for (n = "" + kn(n), t = null, i = 0; i < e.length; i++) {
      if (e[i].value === n) {
        (e[i].selected = !0), r && (e[i].defaultSelected = !0);
        return;
      }
      t !== null || e[i].disabled || (t = e[i]);
    }
    t !== null && (t.selected = !0);
  }
}
function Ku(e, t) {
  if (t.dangerouslySetInnerHTML != null) throw Error(L(91));
  return ae({}, t, {
    value: void 0,
    defaultValue: void 0,
    children: "" + e._wrapperState.initialValue,
  });
}
function mp(e, t) {
  var n = t.value;
  if (n == null) {
    if (((n = t.children), (t = t.defaultValue), n != null)) {
      if (t != null) throw Error(L(92));
      if (Ri(n)) {
        if (1 < n.length) throw Error(L(93));
        n = n[0];
      }
      t = n;
    }
    t == null && (t = ""), (n = t);
  }
  e._wrapperState = { initialValue: kn(n) };
}
function Jh(e, t) {
  var n = kn(t.value),
    r = kn(t.defaultValue);
  n != null &&
    ((n = "" + n),
    n !== e.value && (e.value = n),
    t.defaultValue == null && e.defaultValue !== n && (e.defaultValue = n)),
    r != null && (e.defaultValue = "" + r);
}
function vp(e) {
  var t = e.textContent;
  t === e._wrapperState.initialValue && t !== "" && t !== null && (e.value = t);
}
function eg(e) {
  switch (e) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Qu(e, t) {
  return e == null || e === "http://www.w3.org/1999/xhtml"
    ? eg(t)
    : e === "http://www.w3.org/2000/svg" && t === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : e;
}
var qs,
  tg = (function (e) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (t, n, r, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return e(t, n, r, i);
          });
        }
      : e;
  })(function (e, t) {
    if (e.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in e)
      e.innerHTML = t;
    else {
      for (
        qs = qs || document.createElement("div"),
          qs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>",
          t = qs.firstChild;
        e.firstChild;

      )
        e.removeChild(e.firstChild);
      for (; t.firstChild; ) e.appendChild(t.firstChild);
    }
  });
function is(e, t) {
  if (t) {
    var n = e.firstChild;
    if (n && n === e.lastChild && n.nodeType === 3) {
      n.nodeValue = t;
      return;
    }
  }
  e.textContent = t;
}
var Wi = {
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
    strokeWidth: !0,
  },
  zS = ["Webkit", "ms", "Moz", "O"];
Object.keys(Wi).forEach(function (e) {
  zS.forEach(function (t) {
    (t = t + e.charAt(0).toUpperCase() + e.substring(1)), (Wi[t] = Wi[e]);
  });
});
function ng(e, t, n) {
  return t == null || typeof t == "boolean" || t === ""
    ? ""
    : n || typeof t != "number" || t === 0 || (Wi.hasOwnProperty(e) && Wi[e])
    ? ("" + t).trim()
    : t + "px";
}
function rg(e, t) {
  e = e.style;
  for (var n in t)
    if (t.hasOwnProperty(n)) {
      var r = n.indexOf("--") === 0,
        i = ng(n, t[n], r);
      n === "float" && (n = "cssFloat"), r ? e.setProperty(n, i) : (e[n] = i);
    }
}
var RS = ae(
  { menuitem: !0 },
  {
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
    wbr: !0,
  }
);
function qu(e, t) {
  if (t) {
    if (RS[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
      throw Error(L(137, e));
    if (t.dangerouslySetInnerHTML != null) {
      if (t.children != null) throw Error(L(60));
      if (
        typeof t.dangerouslySetInnerHTML != "object" ||
        !("__html" in t.dangerouslySetInnerHTML)
      )
        throw Error(L(61));
    }
    if (t.style != null && typeof t.style != "object") throw Error(L(62));
  }
}
function Ju(e, t) {
  if (e.indexOf("-") === -1) return typeof t.is == "string";
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
var ec = null;
function gd(e) {
  return (
    (e = e.target || e.srcElement || window),
    e.correspondingUseElement && (e = e.correspondingUseElement),
    e.nodeType === 3 ? e.parentNode : e
  );
}
var tc = null,
  Dr = null,
  zr = null;
function hp(e) {
  if ((e = Ps(e))) {
    if (typeof tc != "function") throw Error(L(280));
    var t = e.stateNode;
    t && ((t = Za(t)), tc(e.stateNode, e.type, t));
  }
}
function ig(e) {
  Dr ? (zr ? zr.push(e) : (zr = [e])) : (Dr = e);
}
function sg() {
  if (Dr) {
    var e = Dr,
      t = zr;
    if (((zr = Dr = null), hp(e), t)) for (e = 0; e < t.length; e++) hp(t[e]);
  }
}
function og(e, t) {
  return e(t);
}
function ag() {}
var _l = !1;
function lg(e, t, n) {
  if (_l) return e(t, n);
  _l = !0;
  try {
    return og(e, t, n);
  } finally {
    (_l = !1), (Dr !== null || zr !== null) && (ag(), sg());
  }
}
function ss(e, t) {
  var n = e.stateNode;
  if (n === null) return null;
  var r = Za(n);
  if (r === null) return null;
  n = r[t];
  e: switch (t) {
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
      (r = !r.disabled) ||
        ((e = e.type),
        (r = !(
          e === "button" ||
          e === "input" ||
          e === "select" ||
          e === "textarea"
        ))),
        (e = !r);
      break e;
    default:
      e = !1;
  }
  if (e) return null;
  if (n && typeof n != "function") throw Error(L(231, t, typeof n));
  return n;
}
var nc = !1;
if (rn)
  try {
    var wi = {};
    Object.defineProperty(wi, "passive", {
      get: function () {
        nc = !0;
      },
    }),
      window.addEventListener("test", wi, wi),
      window.removeEventListener("test", wi, wi);
  } catch {
    nc = !1;
  }
function BS(e, t, n, r, i, s, o, a, l) {
  var c = Array.prototype.slice.call(arguments, 3);
  try {
    t.apply(n, c);
  } catch (u) {
    this.onError(u);
  }
}
var Hi = !1,
  aa = null,
  la = !1,
  rc = null,
  FS = {
    onError: function (e) {
      (Hi = !0), (aa = e);
    },
  };
function WS(e, t, n, r, i, s, o, a, l) {
  (Hi = !1), (aa = null), BS.apply(FS, arguments);
}
function HS(e, t, n, r, i, s, o, a, l) {
  if ((WS.apply(this, arguments), Hi)) {
    if (Hi) {
      var c = aa;
      (Hi = !1), (aa = null);
    } else throw Error(L(198));
    la || ((la = !0), (rc = c));
  }
}
function fr(e) {
  var t = e,
    n = e;
  if (e.alternate) for (; t.return; ) t = t.return;
  else {
    e = t;
    do (t = e), t.flags & 4098 && (n = t.return), (e = t.return);
    while (e);
  }
  return t.tag === 3 ? n : null;
}
function ug(e) {
  if (e.tag === 13) {
    var t = e.memoizedState;
    if (
      (t === null && ((e = e.alternate), e !== null && (t = e.memoizedState)),
      t !== null)
    )
      return t.dehydrated;
  }
  return null;
}
function gp(e) {
  if (fr(e) !== e) throw Error(L(188));
}
function VS(e) {
  var t = e.alternate;
  if (!t) {
    if (((t = fr(e)), t === null)) throw Error(L(188));
    return t !== e ? null : e;
  }
  for (var n = e, r = t; ; ) {
    var i = n.return;
    if (i === null) break;
    var s = i.alternate;
    if (s === null) {
      if (((r = i.return), r !== null)) {
        n = r;
        continue;
      }
      break;
    }
    if (i.child === s.child) {
      for (s = i.child; s; ) {
        if (s === n) return gp(i), e;
        if (s === r) return gp(i), t;
        s = s.sibling;
      }
      throw Error(L(188));
    }
    if (n.return !== r.return) (n = i), (r = s);
    else {
      for (var o = !1, a = i.child; a; ) {
        if (a === n) {
          (o = !0), (n = i), (r = s);
          break;
        }
        if (a === r) {
          (o = !0), (r = i), (n = s);
          break;
        }
        a = a.sibling;
      }
      if (!o) {
        for (a = s.child; a; ) {
          if (a === n) {
            (o = !0), (n = s), (r = i);
            break;
          }
          if (a === r) {
            (o = !0), (r = s), (n = i);
            break;
          }
          a = a.sibling;
        }
        if (!o) throw Error(L(189));
      }
    }
    if (n.alternate !== r) throw Error(L(190));
  }
  if (n.tag !== 3) throw Error(L(188));
  return n.stateNode.current === n ? e : t;
}
function cg(e) {
  return (e = VS(e)), e !== null ? dg(e) : null;
}
function dg(e) {
  if (e.tag === 5 || e.tag === 6) return e;
  for (e = e.child; e !== null; ) {
    var t = dg(e);
    if (t !== null) return t;
    e = e.sibling;
  }
  return null;
}
var fg = Ke.unstable_scheduleCallback,
  yp = Ke.unstable_cancelCallback,
  GS = Ke.unstable_shouldYield,
  YS = Ke.unstable_requestPaint,
  de = Ke.unstable_now,
  XS = Ke.unstable_getCurrentPriorityLevel,
  yd = Ke.unstable_ImmediatePriority,
  pg = Ke.unstable_UserBlockingPriority,
  ua = Ke.unstable_NormalPriority,
  US = Ke.unstable_LowPriority,
  mg = Ke.unstable_IdlePriority,
  Ga = null,
  Dt = null;
function ZS(e) {
  if (Dt && typeof Dt.onCommitFiberRoot == "function")
    try {
      Dt.onCommitFiberRoot(Ga, e, void 0, (e.current.flags & 128) === 128);
    } catch {}
}
var Tt = Math.clz32 ? Math.clz32 : qS,
  KS = Math.log,
  QS = Math.LN2;
function qS(e) {
  return (e >>>= 0), e === 0 ? 32 : (31 - ((KS(e) / QS) | 0)) | 0;
}
var Js = 64,
  eo = 4194304;
function Bi(e) {
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
function ca(e, t) {
  var n = e.pendingLanes;
  if (n === 0) return 0;
  var r = 0,
    i = e.suspendedLanes,
    s = e.pingedLanes,
    o = n & 268435455;
  if (o !== 0) {
    var a = o & ~i;
    a !== 0 ? (r = Bi(a)) : ((s &= o), s !== 0 && (r = Bi(s)));
  } else (o = n & ~i), o !== 0 ? (r = Bi(o)) : s !== 0 && (r = Bi(s));
  if (r === 0) return 0;
  if (
    t !== 0 &&
    t !== r &&
    !(t & i) &&
    ((i = r & -r), (s = t & -t), i >= s || (i === 16 && (s & 4194240) !== 0))
  )
    return t;
  if ((r & 4 && (r |= n & 16), (t = e.entangledLanes), t !== 0))
    for (e = e.entanglements, t &= r; 0 < t; )
      (n = 31 - Tt(t)), (i = 1 << n), (r |= e[n]), (t &= ~i);
  return r;
}
function JS(e, t) {
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
function e1(e, t) {
  for (
    var n = e.suspendedLanes,
      r = e.pingedLanes,
      i = e.expirationTimes,
      s = e.pendingLanes;
    0 < s;

  ) {
    var o = 31 - Tt(s),
      a = 1 << o,
      l = i[o];
    l === -1
      ? (!(a & n) || a & r) && (i[o] = JS(a, t))
      : l <= t && (e.expiredLanes |= a),
      (s &= ~a);
  }
}
function ic(e) {
  return (
    (e = e.pendingLanes & -1073741825),
    e !== 0 ? e : e & 1073741824 ? 1073741824 : 0
  );
}
function vg() {
  var e = Js;
  return (Js <<= 1), !(Js & 4194240) && (Js = 64), e;
}
function Ol(e) {
  for (var t = [], n = 0; 31 > n; n++) t.push(e);
  return t;
}
function Cs(e, t, n) {
  (e.pendingLanes |= t),
    t !== 536870912 && ((e.suspendedLanes = 0), (e.pingedLanes = 0)),
    (e = e.eventTimes),
    (t = 31 - Tt(t)),
    (e[t] = n);
}
function t1(e, t) {
  var n = e.pendingLanes & ~t;
  (e.pendingLanes = t),
    (e.suspendedLanes = 0),
    (e.pingedLanes = 0),
    (e.expiredLanes &= t),
    (e.mutableReadLanes &= t),
    (e.entangledLanes &= t),
    (t = e.entanglements);
  var r = e.eventTimes;
  for (e = e.expirationTimes; 0 < n; ) {
    var i = 31 - Tt(n),
      s = 1 << i;
    (t[i] = 0), (r[i] = -1), (e[i] = -1), (n &= ~s);
  }
}
function wd(e, t) {
  var n = (e.entangledLanes |= t);
  for (e = e.entanglements; n; ) {
    var r = 31 - Tt(n),
      i = 1 << r;
    (i & t) | (e[r] & t) && (e[r] |= t), (n &= ~i);
  }
}
var U = 0;
function hg(e) {
  return (e &= -e), 1 < e ? (4 < e ? (e & 268435455 ? 16 : 536870912) : 4) : 1;
}
var gg,
  xd,
  yg,
  wg,
  xg,
  sc = !1,
  to = [],
  bn = null,
  Pn = null,
  jn = null,
  os = new Map(),
  as = new Map(),
  Sn = [],
  n1 =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function wp(e, t) {
  switch (e) {
    case "focusin":
    case "focusout":
      bn = null;
      break;
    case "dragenter":
    case "dragleave":
      Pn = null;
      break;
    case "mouseover":
    case "mouseout":
      jn = null;
      break;
    case "pointerover":
    case "pointerout":
      os.delete(t.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      as.delete(t.pointerId);
  }
}
function xi(e, t, n, r, i, s) {
  return e === null || e.nativeEvent !== s
    ? ((e = {
        blockedOn: t,
        domEventName: n,
        eventSystemFlags: r,
        nativeEvent: s,
        targetContainers: [i],
      }),
      t !== null && ((t = Ps(t)), t !== null && xd(t)),
      e)
    : ((e.eventSystemFlags |= r),
      (t = e.targetContainers),
      i !== null && t.indexOf(i) === -1 && t.push(i),
      e);
}
function r1(e, t, n, r, i) {
  switch (t) {
    case "focusin":
      return (bn = xi(bn, e, t, n, r, i)), !0;
    case "dragenter":
      return (Pn = xi(Pn, e, t, n, r, i)), !0;
    case "mouseover":
      return (jn = xi(jn, e, t, n, r, i)), !0;
    case "pointerover":
      var s = i.pointerId;
      return os.set(s, xi(os.get(s) || null, e, t, n, r, i)), !0;
    case "gotpointercapture":
      return (
        (s = i.pointerId), as.set(s, xi(as.get(s) || null, e, t, n, r, i)), !0
      );
  }
  return !1;
}
function Sg(e) {
  var t = Qn(e.target);
  if (t !== null) {
    var n = fr(t);
    if (n !== null) {
      if (((t = n.tag), t === 13)) {
        if (((t = ug(n)), t !== null)) {
          (e.blockedOn = t),
            xg(e.priority, function () {
              yg(n);
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
function Bo(e) {
  if (e.blockedOn !== null) return !1;
  for (var t = e.targetContainers; 0 < t.length; ) {
    var n = oc(e.domEventName, e.eventSystemFlags, t[0], e.nativeEvent);
    if (n === null) {
      n = e.nativeEvent;
      var r = new n.constructor(n.type, n);
      (ec = r), n.target.dispatchEvent(r), (ec = null);
    } else return (t = Ps(n)), t !== null && xd(t), (e.blockedOn = n), !1;
    t.shift();
  }
  return !0;
}
function xp(e, t, n) {
  Bo(e) && n.delete(t);
}
function i1() {
  (sc = !1),
    bn !== null && Bo(bn) && (bn = null),
    Pn !== null && Bo(Pn) && (Pn = null),
    jn !== null && Bo(jn) && (jn = null),
    os.forEach(xp),
    as.forEach(xp);
}
function Si(e, t) {
  e.blockedOn === t &&
    ((e.blockedOn = null),
    sc ||
      ((sc = !0),
      Ke.unstable_scheduleCallback(Ke.unstable_NormalPriority, i1)));
}
function ls(e) {
  function t(i) {
    return Si(i, e);
  }
  if (0 < to.length) {
    Si(to[0], e);
    for (var n = 1; n < to.length; n++) {
      var r = to[n];
      r.blockedOn === e && (r.blockedOn = null);
    }
  }
  for (
    bn !== null && Si(bn, e),
      Pn !== null && Si(Pn, e),
      jn !== null && Si(jn, e),
      os.forEach(t),
      as.forEach(t),
      n = 0;
    n < Sn.length;
    n++
  )
    (r = Sn[n]), r.blockedOn === e && (r.blockedOn = null);
  for (; 0 < Sn.length && ((n = Sn[0]), n.blockedOn === null); )
    Sg(n), n.blockedOn === null && Sn.shift();
}
var Rr = cn.ReactCurrentBatchConfig,
  da = !0;
function s1(e, t, n, r) {
  var i = U,
    s = Rr.transition;
  Rr.transition = null;
  try {
    (U = 1), Sd(e, t, n, r);
  } finally {
    (U = i), (Rr.transition = s);
  }
}
function o1(e, t, n, r) {
  var i = U,
    s = Rr.transition;
  Rr.transition = null;
  try {
    (U = 4), Sd(e, t, n, r);
  } finally {
    (U = i), (Rr.transition = s);
  }
}
function Sd(e, t, n, r) {
  if (da) {
    var i = oc(e, t, n, r);
    if (i === null) Fl(e, t, r, fa, n), wp(e, r);
    else if (r1(i, e, t, n, r)) r.stopPropagation();
    else if ((wp(e, r), t & 4 && -1 < n1.indexOf(e))) {
      for (; i !== null; ) {
        var s = Ps(i);
        if (
          (s !== null && gg(s),
          (s = oc(e, t, n, r)),
          s === null && Fl(e, t, r, fa, n),
          s === i)
        )
          break;
        i = s;
      }
      i !== null && r.stopPropagation();
    } else Fl(e, t, r, null, n);
  }
}
var fa = null;
function oc(e, t, n, r) {
  if (((fa = null), (e = gd(r)), (e = Qn(e)), e !== null))
    if (((t = fr(e)), t === null)) e = null;
    else if (((n = t.tag), n === 13)) {
      if (((e = ug(t)), e !== null)) return e;
      e = null;
    } else if (n === 3) {
      if (t.stateNode.current.memoizedState.isDehydrated)
        return t.tag === 3 ? t.stateNode.containerInfo : null;
      e = null;
    } else t !== e && (e = null);
  return (fa = e), null;
}
function Eg(e) {
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
      switch (XS()) {
        case yd:
          return 1;
        case pg:
          return 4;
        case ua:
        case US:
          return 16;
        case mg:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var In = null,
  Ed = null,
  Fo = null;
function Ig() {
  if (Fo) return Fo;
  var e,
    t = Ed,
    n = t.length,
    r,
    i = "value" in In ? In.value : In.textContent,
    s = i.length;
  for (e = 0; e < n && t[e] === i[e]; e++);
  var o = n - e;
  for (r = 1; r <= o && t[n - r] === i[s - r]; r++);
  return (Fo = i.slice(e, 1 < r ? 1 - r : void 0));
}
function Wo(e) {
  var t = e.keyCode;
  return (
    "charCode" in e
      ? ((e = e.charCode), e === 0 && t === 13 && (e = 13))
      : (e = t),
    e === 10 && (e = 13),
    32 <= e || e === 13 ? e : 0
  );
}
function no() {
  return !0;
}
function Sp() {
  return !1;
}
function Je(e) {
  function t(n, r, i, s, o) {
    (this._reactName = n),
      (this._targetInst = i),
      (this.type = r),
      (this.nativeEvent = s),
      (this.target = o),
      (this.currentTarget = null);
    for (var a in e)
      e.hasOwnProperty(a) && ((n = e[a]), (this[a] = n ? n(s) : s[a]));
    return (
      (this.isDefaultPrevented = (
        s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1
      )
        ? no
        : Sp),
      (this.isPropagationStopped = Sp),
      this
    );
  }
  return (
    ae(t.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n &&
          (n.preventDefault
            ? n.preventDefault()
            : typeof n.returnValue != "unknown" && (n.returnValue = !1),
          (this.isDefaultPrevented = no));
      },
      stopPropagation: function () {
        var n = this.nativeEvent;
        n &&
          (n.stopPropagation
            ? n.stopPropagation()
            : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0),
          (this.isPropagationStopped = no));
      },
      persist: function () {},
      isPersistent: no,
    }),
    t
  );
}
var ri = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Id = Je(ri),
  bs = ae({}, ri, { view: 0, detail: 0 }),
  a1 = Je(bs),
  Ml,
  Nl,
  Ei,
  Ya = ae({}, bs, {
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
    getModifierState: Td,
    button: 0,
    buttons: 0,
    relatedTarget: function (e) {
      return e.relatedTarget === void 0
        ? e.fromElement === e.srcElement
          ? e.toElement
          : e.fromElement
        : e.relatedTarget;
    },
    movementX: function (e) {
      return "movementX" in e
        ? e.movementX
        : (e !== Ei &&
            (Ei && e.type === "mousemove"
              ? ((Ml = e.screenX - Ei.screenX), (Nl = e.screenY - Ei.screenY))
              : (Nl = Ml = 0),
            (Ei = e)),
          Ml);
    },
    movementY: function (e) {
      return "movementY" in e ? e.movementY : Nl;
    },
  }),
  Ep = Je(Ya),
  l1 = ae({}, Ya, { dataTransfer: 0 }),
  u1 = Je(l1),
  c1 = ae({}, bs, { relatedTarget: 0 }),
  kl = Je(c1),
  d1 = ae({}, ri, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  f1 = Je(d1),
  p1 = ae({}, ri, {
    clipboardData: function (e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    },
  }),
  m1 = Je(p1),
  v1 = ae({}, ri, { data: 0 }),
  Ip = Je(v1),
  h1 = {
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
    MozPrintableKey: "Unidentified",
  },
  g1 = {
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
    224: "Meta",
  },
  y1 = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function w1(e) {
  var t = this.nativeEvent;
  return t.getModifierState ? t.getModifierState(e) : (e = y1[e]) ? !!t[e] : !1;
}
function Td() {
  return w1;
}
var x1 = ae({}, bs, {
    key: function (e) {
      if (e.key) {
        var t = h1[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress"
        ? ((e = Wo(e)), e === 13 ? "Enter" : String.fromCharCode(e))
        : e.type === "keydown" || e.type === "keyup"
        ? g1[e.keyCode] || "Unidentified"
        : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Td,
    charCode: function (e) {
      return e.type === "keypress" ? Wo(e) : 0;
    },
    keyCode: function (e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function (e) {
      return e.type === "keypress"
        ? Wo(e)
        : e.type === "keydown" || e.type === "keyup"
        ? e.keyCode
        : 0;
    },
  }),
  S1 = Je(x1),
  E1 = ae({}, Ya, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  Tp = Je(E1),
  I1 = ae({}, bs, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Td,
  }),
  T1 = Je(I1),
  C1 = ae({}, ri, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  b1 = Je(C1),
  P1 = ae({}, Ya, {
    deltaX: function (e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function (e) {
      return "deltaY" in e
        ? e.deltaY
        : "wheelDeltaY" in e
        ? -e.wheelDeltaY
        : "wheelDelta" in e
        ? -e.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  j1 = Je(P1),
  $1 = [9, 13, 27, 32],
  Cd = rn && "CompositionEvent" in window,
  Vi = null;
rn && "documentMode" in document && (Vi = document.documentMode);
var _1 = rn && "TextEvent" in window && !Vi,
  Tg = rn && (!Cd || (Vi && 8 < Vi && 11 >= Vi)),
  Cp = " ",
  bp = !1;
function Cg(e, t) {
  switch (e) {
    case "keyup":
      return $1.indexOf(t.keyCode) !== -1;
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
function bg(e) {
  return (e = e.detail), typeof e == "object" && "data" in e ? e.data : null;
}
var Cr = !1;
function O1(e, t) {
  switch (e) {
    case "compositionend":
      return bg(t);
    case "keypress":
      return t.which !== 32 ? null : ((bp = !0), Cp);
    case "textInput":
      return (e = t.data), e === Cp && bp ? null : e;
    default:
      return null;
  }
}
function M1(e, t) {
  if (Cr)
    return e === "compositionend" || (!Cd && Cg(e, t))
      ? ((e = Ig()), (Fo = Ed = In = null), (Cr = !1), e)
      : null;
  switch (e) {
    case "paste":
      return null;
    case "keypress":
      if (!(t.ctrlKey || t.altKey || t.metaKey) || (t.ctrlKey && t.altKey)) {
        if (t.char && 1 < t.char.length) return t.char;
        if (t.which) return String.fromCharCode(t.which);
      }
      return null;
    case "compositionend":
      return Tg && t.locale !== "ko" ? null : t.data;
    default:
      return null;
  }
}
var N1 = {
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
  week: !0,
};
function Pp(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return t === "input" ? !!N1[e.type] : t === "textarea";
}
function Pg(e, t, n, r) {
  ig(r),
    (t = pa(t, "onChange")),
    0 < t.length &&
      ((n = new Id("onChange", "change", null, n, r)),
      e.push({ event: n, listeners: t }));
}
var Gi = null,
  us = null;
function k1(e) {
  zg(e, 0);
}
function Xa(e) {
  var t = jr(e);
  if (Qh(t)) return e;
}
function A1(e, t) {
  if (e === "change") return t;
}
var jg = !1;
if (rn) {
  var Al;
  if (rn) {
    var Ll = "oninput" in document;
    if (!Ll) {
      var jp = document.createElement("div");
      jp.setAttribute("oninput", "return;"),
        (Ll = typeof jp.oninput == "function");
    }
    Al = Ll;
  } else Al = !1;
  jg = Al && (!document.documentMode || 9 < document.documentMode);
}
function $p() {
  Gi && (Gi.detachEvent("onpropertychange", $g), (us = Gi = null));
}
function $g(e) {
  if (e.propertyName === "value" && Xa(us)) {
    var t = [];
    Pg(t, us, e, gd(e)), lg(k1, t);
  }
}
function L1(e, t, n) {
  e === "focusin"
    ? ($p(), (Gi = t), (us = n), Gi.attachEvent("onpropertychange", $g))
    : e === "focusout" && $p();
}
function D1(e) {
  if (e === "selectionchange" || e === "keyup" || e === "keydown")
    return Xa(us);
}
function z1(e, t) {
  if (e === "click") return Xa(t);
}
function R1(e, t) {
  if (e === "input" || e === "change") return Xa(t);
}
function B1(e, t) {
  return (e === t && (e !== 0 || 1 / e === 1 / t)) || (e !== e && t !== t);
}
var Pt = typeof Object.is == "function" ? Object.is : B1;
function cs(e, t) {
  if (Pt(e, t)) return !0;
  if (typeof e != "object" || e === null || typeof t != "object" || t === null)
    return !1;
  var n = Object.keys(e),
    r = Object.keys(t);
  if (n.length !== r.length) return !1;
  for (r = 0; r < n.length; r++) {
    var i = n[r];
    if (!Wu.call(t, i) || !Pt(e[i], t[i])) return !1;
  }
  return !0;
}
function _p(e) {
  for (; e && e.firstChild; ) e = e.firstChild;
  return e;
}
function Op(e, t) {
  var n = _p(e);
  e = 0;
  for (var r; n; ) {
    if (n.nodeType === 3) {
      if (((r = e + n.textContent.length), e <= t && r >= t))
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
    n = _p(n);
  }
}
function _g(e, t) {
  return e && t
    ? e === t
      ? !0
      : e && e.nodeType === 3
      ? !1
      : t && t.nodeType === 3
      ? _g(e, t.parentNode)
      : "contains" in e
      ? e.contains(t)
      : e.compareDocumentPosition
      ? !!(e.compareDocumentPosition(t) & 16)
      : !1
    : !1;
}
function Og() {
  for (var e = window, t = oa(); t instanceof e.HTMLIFrameElement; ) {
    try {
      var n = typeof t.contentWindow.location.href == "string";
    } catch {
      n = !1;
    }
    if (n) e = t.contentWindow;
    else break;
    t = oa(e.document);
  }
  return t;
}
function bd(e) {
  var t = e && e.nodeName && e.nodeName.toLowerCase();
  return (
    t &&
    ((t === "input" &&
      (e.type === "text" ||
        e.type === "search" ||
        e.type === "tel" ||
        e.type === "url" ||
        e.type === "password")) ||
      t === "textarea" ||
      e.contentEditable === "true")
  );
}
function F1(e) {
  var t = Og(),
    n = e.focusedElem,
    r = e.selectionRange;
  if (
    t !== n &&
    n &&
    n.ownerDocument &&
    _g(n.ownerDocument.documentElement, n)
  ) {
    if (r !== null && bd(n)) {
      if (
        ((t = r.start),
        (e = r.end),
        e === void 0 && (e = t),
        "selectionStart" in n)
      )
        (n.selectionStart = t), (n.selectionEnd = Math.min(e, n.value.length));
      else if (
        ((e = ((t = n.ownerDocument || document) && t.defaultView) || window),
        e.getSelection)
      ) {
        e = e.getSelection();
        var i = n.textContent.length,
          s = Math.min(r.start, i);
        (r = r.end === void 0 ? s : Math.min(r.end, i)),
          !e.extend && s > r && ((i = r), (r = s), (s = i)),
          (i = Op(n, s));
        var o = Op(n, r);
        i &&
          o &&
          (e.rangeCount !== 1 ||
            e.anchorNode !== i.node ||
            e.anchorOffset !== i.offset ||
            e.focusNode !== o.node ||
            e.focusOffset !== o.offset) &&
          ((t = t.createRange()),
          t.setStart(i.node, i.offset),
          e.removeAllRanges(),
          s > r
            ? (e.addRange(t), e.extend(o.node, o.offset))
            : (t.setEnd(o.node, o.offset), e.addRange(t)));
      }
    }
    for (t = [], e = n; (e = e.parentNode); )
      e.nodeType === 1 &&
        t.push({ element: e, left: e.scrollLeft, top: e.scrollTop });
    for (typeof n.focus == "function" && n.focus(), n = 0; n < t.length; n++)
      (e = t[n]),
        (e.element.scrollLeft = e.left),
        (e.element.scrollTop = e.top);
  }
}
var W1 = rn && "documentMode" in document && 11 >= document.documentMode,
  br = null,
  ac = null,
  Yi = null,
  lc = !1;
function Mp(e, t, n) {
  var r = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
  lc ||
    br == null ||
    br !== oa(r) ||
    ((r = br),
    "selectionStart" in r && bd(r)
      ? (r = { start: r.selectionStart, end: r.selectionEnd })
      : ((r = (
          (r.ownerDocument && r.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (r = {
          anchorNode: r.anchorNode,
          anchorOffset: r.anchorOffset,
          focusNode: r.focusNode,
          focusOffset: r.focusOffset,
        })),
    (Yi && cs(Yi, r)) ||
      ((Yi = r),
      (r = pa(ac, "onSelect")),
      0 < r.length &&
        ((t = new Id("onSelect", "select", null, t, n)),
        e.push({ event: t, listeners: r }),
        (t.target = br))));
}
function ro(e, t) {
  var n = {};
  return (
    (n[e.toLowerCase()] = t.toLowerCase()),
    (n["Webkit" + e] = "webkit" + t),
    (n["Moz" + e] = "moz" + t),
    n
  );
}
var Pr = {
    animationend: ro("Animation", "AnimationEnd"),
    animationiteration: ro("Animation", "AnimationIteration"),
    animationstart: ro("Animation", "AnimationStart"),
    transitionend: ro("Transition", "TransitionEnd"),
  },
  Dl = {},
  Mg = {};
rn &&
  ((Mg = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Pr.animationend.animation,
    delete Pr.animationiteration.animation,
    delete Pr.animationstart.animation),
  "TransitionEvent" in window || delete Pr.transitionend.transition);
function Ua(e) {
  if (Dl[e]) return Dl[e];
  if (!Pr[e]) return e;
  var t = Pr[e],
    n;
  for (n in t) if (t.hasOwnProperty(n) && n in Mg) return (Dl[e] = t[n]);
  return e;
}
var Ng = Ua("animationend"),
  kg = Ua("animationiteration"),
  Ag = Ua("animationstart"),
  Lg = Ua("transitionend"),
  Dg = new Map(),
  Np =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function zn(e, t) {
  Dg.set(e, t), dr(t, [e]);
}
for (var zl = 0; zl < Np.length; zl++) {
  var Rl = Np[zl],
    H1 = Rl.toLowerCase(),
    V1 = Rl[0].toUpperCase() + Rl.slice(1);
  zn(H1, "on" + V1);
}
zn(Ng, "onAnimationEnd");
zn(kg, "onAnimationIteration");
zn(Ag, "onAnimationStart");
zn("dblclick", "onDoubleClick");
zn("focusin", "onFocus");
zn("focusout", "onBlur");
zn(Lg, "onTransitionEnd");
Vr("onMouseEnter", ["mouseout", "mouseover"]);
Vr("onMouseLeave", ["mouseout", "mouseover"]);
Vr("onPointerEnter", ["pointerout", "pointerover"]);
Vr("onPointerLeave", ["pointerout", "pointerover"]);
dr(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
dr(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
dr("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
dr(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
dr(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
dr(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Fi =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  G1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Fi));
function kp(e, t, n) {
  var r = e.type || "unknown-event";
  (e.currentTarget = n), HS(r, t, void 0, e), (e.currentTarget = null);
}
function zg(e, t) {
  t = (t & 4) !== 0;
  for (var n = 0; n < e.length; n++) {
    var r = e[n],
      i = r.event;
    r = r.listeners;
    e: {
      var s = void 0;
      if (t)
        for (var o = r.length - 1; 0 <= o; o--) {
          var a = r[o],
            l = a.instance,
            c = a.currentTarget;
          if (((a = a.listener), l !== s && i.isPropagationStopped())) break e;
          kp(i, a, c), (s = l);
        }
      else
        for (o = 0; o < r.length; o++) {
          if (
            ((a = r[o]),
            (l = a.instance),
            (c = a.currentTarget),
            (a = a.listener),
            l !== s && i.isPropagationStopped())
          )
            break e;
          kp(i, a, c), (s = l);
        }
    }
  }
  if (la) throw ((e = rc), (la = !1), (rc = null), e);
}
function ee(e, t) {
  var n = t[pc];
  n === void 0 && (n = t[pc] = new Set());
  var r = e + "__bubble";
  n.has(r) || (Rg(t, e, 2, !1), n.add(r));
}
function Bl(e, t, n) {
  var r = 0;
  t && (r |= 4), Rg(n, e, r, t);
}
var io = "_reactListening" + Math.random().toString(36).slice(2);
function ds(e) {
  if (!e[io]) {
    (e[io] = !0),
      Yh.forEach(function (n) {
        n !== "selectionchange" && (G1.has(n) || Bl(n, !1, e), Bl(n, !0, e));
      });
    var t = e.nodeType === 9 ? e : e.ownerDocument;
    t === null || t[io] || ((t[io] = !0), Bl("selectionchange", !1, t));
  }
}
function Rg(e, t, n, r) {
  switch (Eg(t)) {
    case 1:
      var i = s1;
      break;
    case 4:
      i = o1;
      break;
    default:
      i = Sd;
  }
  (n = i.bind(null, t, n, e)),
    (i = void 0),
    !nc ||
      (t !== "touchstart" && t !== "touchmove" && t !== "wheel") ||
      (i = !0),
    r
      ? i !== void 0
        ? e.addEventListener(t, n, { capture: !0, passive: i })
        : e.addEventListener(t, n, !0)
      : i !== void 0
      ? e.addEventListener(t, n, { passive: i })
      : e.addEventListener(t, n, !1);
}
function Fl(e, t, n, r, i) {
  var s = r;
  if (!(t & 1) && !(t & 2) && r !== null)
    e: for (;;) {
      if (r === null) return;
      var o = r.tag;
      if (o === 3 || o === 4) {
        var a = r.stateNode.containerInfo;
        if (a === i || (a.nodeType === 8 && a.parentNode === i)) break;
        if (o === 4)
          for (o = r.return; o !== null; ) {
            var l = o.tag;
            if (
              (l === 3 || l === 4) &&
              ((l = o.stateNode.containerInfo),
              l === i || (l.nodeType === 8 && l.parentNode === i))
            )
              return;
            o = o.return;
          }
        for (; a !== null; ) {
          if (((o = Qn(a)), o === null)) return;
          if (((l = o.tag), l === 5 || l === 6)) {
            r = s = o;
            continue e;
          }
          a = a.parentNode;
        }
      }
      r = r.return;
    }
  lg(function () {
    var c = s,
      u = gd(n),
      d = [];
    e: {
      var f = Dg.get(e);
      if (f !== void 0) {
        var g = Id,
          y = e;
        switch (e) {
          case "keypress":
            if (Wo(n) === 0) break e;
          case "keydown":
          case "keyup":
            g = S1;
            break;
          case "focusin":
            (y = "focus"), (g = kl);
            break;
          case "focusout":
            (y = "blur"), (g = kl);
            break;
          case "beforeblur":
          case "afterblur":
            g = kl;
            break;
          case "click":
            if (n.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            g = Ep;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            g = u1;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            g = T1;
            break;
          case Ng:
          case kg:
          case Ag:
            g = f1;
            break;
          case Lg:
            g = b1;
            break;
          case "scroll":
            g = a1;
            break;
          case "wheel":
            g = j1;
            break;
          case "copy":
          case "cut":
          case "paste":
            g = m1;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            g = Tp;
        }
        var w = (t & 4) !== 0,
          I = !w && e === "scroll",
          v = w ? (f !== null ? f + "Capture" : null) : f;
        w = [];
        for (var m = c, h; m !== null; ) {
          h = m;
          var x = h.stateNode;
          if (
            (h.tag === 5 &&
              x !== null &&
              ((h = x),
              v !== null && ((x = ss(m, v)), x != null && w.push(fs(m, x, h)))),
            I)
          )
            break;
          m = m.return;
        }
        0 < w.length &&
          ((f = new g(f, y, null, n, u)), d.push({ event: f, listeners: w }));
      }
    }
    if (!(t & 7)) {
      e: {
        if (
          ((f = e === "mouseover" || e === "pointerover"),
          (g = e === "mouseout" || e === "pointerout"),
          f &&
            n !== ec &&
            (y = n.relatedTarget || n.fromElement) &&
            (Qn(y) || y[sn]))
        )
          break e;
        if (
          (g || f) &&
          ((f =
            u.window === u
              ? u
              : (f = u.ownerDocument)
              ? f.defaultView || f.parentWindow
              : window),
          g
            ? ((y = n.relatedTarget || n.toElement),
              (g = c),
              (y = y ? Qn(y) : null),
              y !== null &&
                ((I = fr(y)), y !== I || (y.tag !== 5 && y.tag !== 6)) &&
                (y = null))
            : ((g = null), (y = c)),
          g !== y)
        ) {
          if (
            ((w = Ep),
            (x = "onMouseLeave"),
            (v = "onMouseEnter"),
            (m = "mouse"),
            (e === "pointerout" || e === "pointerover") &&
              ((w = Tp),
              (x = "onPointerLeave"),
              (v = "onPointerEnter"),
              (m = "pointer")),
            (I = g == null ? f : jr(g)),
            (h = y == null ? f : jr(y)),
            (f = new w(x, m + "leave", g, n, u)),
            (f.target = I),
            (f.relatedTarget = h),
            (x = null),
            Qn(u) === c &&
              ((w = new w(v, m + "enter", y, n, u)),
              (w.target = h),
              (w.relatedTarget = I),
              (x = w)),
            (I = x),
            g && y)
          )
            t: {
              for (w = g, v = y, m = 0, h = w; h; h = yr(h)) m++;
              for (h = 0, x = v; x; x = yr(x)) h++;
              for (; 0 < m - h; ) (w = yr(w)), m--;
              for (; 0 < h - m; ) (v = yr(v)), h--;
              for (; m--; ) {
                if (w === v || (v !== null && w === v.alternate)) break t;
                (w = yr(w)), (v = yr(v));
              }
              w = null;
            }
          else w = null;
          g !== null && Ap(d, f, g, w, !1),
            y !== null && I !== null && Ap(d, I, y, w, !0);
        }
      }
      e: {
        if (
          ((f = c ? jr(c) : window),
          (g = f.nodeName && f.nodeName.toLowerCase()),
          g === "select" || (g === "input" && f.type === "file"))
        )
          var S = A1;
        else if (Pp(f))
          if (jg) S = R1;
          else {
            S = D1;
            var b = L1;
          }
        else
          (g = f.nodeName) &&
            g.toLowerCase() === "input" &&
            (f.type === "checkbox" || f.type === "radio") &&
            (S = z1);
        if (S && (S = S(e, c))) {
          Pg(d, S, n, u);
          break e;
        }
        b && b(e, f, c),
          e === "focusout" &&
            (b = f._wrapperState) &&
            b.controlled &&
            f.type === "number" &&
            Zu(f, "number", f.value);
      }
      switch (((b = c ? jr(c) : window), e)) {
        case "focusin":
          (Pp(b) || b.contentEditable === "true") &&
            ((br = b), (ac = c), (Yi = null));
          break;
        case "focusout":
          Yi = ac = br = null;
          break;
        case "mousedown":
          lc = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (lc = !1), Mp(d, n, u);
          break;
        case "selectionchange":
          if (W1) break;
        case "keydown":
        case "keyup":
          Mp(d, n, u);
      }
      var $;
      if (Cd)
        e: {
          switch (e) {
            case "compositionstart":
              var T = "onCompositionStart";
              break e;
            case "compositionend":
              T = "onCompositionEnd";
              break e;
            case "compositionupdate":
              T = "onCompositionUpdate";
              break e;
          }
          T = void 0;
        }
      else
        Cr
          ? Cg(e, n) && (T = "onCompositionEnd")
          : e === "keydown" && n.keyCode === 229 && (T = "onCompositionStart");
      T &&
        (Tg &&
          n.locale !== "ko" &&
          (Cr || T !== "onCompositionStart"
            ? T === "onCompositionEnd" && Cr && ($ = Ig())
            : ((In = u),
              (Ed = "value" in In ? In.value : In.textContent),
              (Cr = !0))),
        (b = pa(c, T)),
        0 < b.length &&
          ((T = new Ip(T, e, null, n, u)),
          d.push({ event: T, listeners: b }),
          $ ? (T.data = $) : (($ = bg(n)), $ !== null && (T.data = $)))),
        ($ = _1 ? O1(e, n) : M1(e, n)) &&
          ((c = pa(c, "onBeforeInput")),
          0 < c.length &&
            ((u = new Ip("onBeforeInput", "beforeinput", null, n, u)),
            d.push({ event: u, listeners: c }),
            (u.data = $)));
    }
    zg(d, t);
  });
}
function fs(e, t, n) {
  return { instance: e, listener: t, currentTarget: n };
}
function pa(e, t) {
  for (var n = t + "Capture", r = []; e !== null; ) {
    var i = e,
      s = i.stateNode;
    i.tag === 5 &&
      s !== null &&
      ((i = s),
      (s = ss(e, n)),
      s != null && r.unshift(fs(e, s, i)),
      (s = ss(e, t)),
      s != null && r.push(fs(e, s, i))),
      (e = e.return);
  }
  return r;
}
function yr(e) {
  if (e === null) return null;
  do e = e.return;
  while (e && e.tag !== 5);
  return e || null;
}
function Ap(e, t, n, r, i) {
  for (var s = t._reactName, o = []; n !== null && n !== r; ) {
    var a = n,
      l = a.alternate,
      c = a.stateNode;
    if (l !== null && l === r) break;
    a.tag === 5 &&
      c !== null &&
      ((a = c),
      i
        ? ((l = ss(n, s)), l != null && o.unshift(fs(n, l, a)))
        : i || ((l = ss(n, s)), l != null && o.push(fs(n, l, a)))),
      (n = n.return);
  }
  o.length !== 0 && e.push({ event: t, listeners: o });
}
var Y1 = /\r\n?/g,
  X1 = /\u0000|\uFFFD/g;
function Lp(e) {
  return (typeof e == "string" ? e : "" + e)
    .replace(
      Y1,
      `
`
    )
    .replace(X1, "");
}
function so(e, t, n) {
  if (((t = Lp(t)), Lp(e) !== t && n)) throw Error(L(425));
}
function ma() {}
var uc = null,
  cc = null;
function dc(e, t) {
  return (
    e === "textarea" ||
    e === "noscript" ||
    typeof t.children == "string" ||
    typeof t.children == "number" ||
    (typeof t.dangerouslySetInnerHTML == "object" &&
      t.dangerouslySetInnerHTML !== null &&
      t.dangerouslySetInnerHTML.__html != null)
  );
}
var fc = typeof setTimeout == "function" ? setTimeout : void 0,
  U1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  Dp = typeof Promise == "function" ? Promise : void 0,
  Z1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof Dp < "u"
      ? function (e) {
          return Dp.resolve(null).then(e).catch(K1);
        }
      : fc;
function K1(e) {
  setTimeout(function () {
    throw e;
  });
}
function Wl(e, t) {
  var n = t,
    r = 0;
  do {
    var i = n.nextSibling;
    if ((e.removeChild(n), i && i.nodeType === 8))
      if (((n = i.data), n === "/$")) {
        if (r === 0) {
          e.removeChild(i), ls(t);
          return;
        }
        r--;
      } else (n !== "$" && n !== "$?" && n !== "$!") || r++;
    n = i;
  } while (n);
  ls(t);
}
function $n(e) {
  for (; e != null; e = e.nextSibling) {
    var t = e.nodeType;
    if (t === 1 || t === 3) break;
    if (t === 8) {
      if (((t = e.data), t === "$" || t === "$!" || t === "$?")) break;
      if (t === "/$") return null;
    }
  }
  return e;
}
function zp(e) {
  e = e.previousSibling;
  for (var t = 0; e; ) {
    if (e.nodeType === 8) {
      var n = e.data;
      if (n === "$" || n === "$!" || n === "$?") {
        if (t === 0) return e;
        t--;
      } else n === "/$" && t++;
    }
    e = e.previousSibling;
  }
  return null;
}
var ii = Math.random().toString(36).slice(2),
  Lt = "__reactFiber$" + ii,
  ps = "__reactProps$" + ii,
  sn = "__reactContainer$" + ii,
  pc = "__reactEvents$" + ii,
  Q1 = "__reactListeners$" + ii,
  q1 = "__reactHandles$" + ii;
function Qn(e) {
  var t = e[Lt];
  if (t) return t;
  for (var n = e.parentNode; n; ) {
    if ((t = n[sn] || n[Lt])) {
      if (
        ((n = t.alternate),
        t.child !== null || (n !== null && n.child !== null))
      )
        for (e = zp(e); e !== null; ) {
          if ((n = e[Lt])) return n;
          e = zp(e);
        }
      return t;
    }
    (e = n), (n = e.parentNode);
  }
  return null;
}
function Ps(e) {
  return (
    (e = e[Lt] || e[sn]),
    !e || (e.tag !== 5 && e.tag !== 6 && e.tag !== 13 && e.tag !== 3) ? null : e
  );
}
function jr(e) {
  if (e.tag === 5 || e.tag === 6) return e.stateNode;
  throw Error(L(33));
}
function Za(e) {
  return e[ps] || null;
}
var mc = [],
  $r = -1;
function Rn(e) {
  return { current: e };
}
function te(e) {
  0 > $r || ((e.current = mc[$r]), (mc[$r] = null), $r--);
}
function q(e, t) {
  $r++, (mc[$r] = e.current), (e.current = t);
}
var An = {},
  $e = Rn(An),
  Re = Rn(!1),
  rr = An;
function Gr(e, t) {
  var n = e.type.contextTypes;
  if (!n) return An;
  var r = e.stateNode;
  if (r && r.__reactInternalMemoizedUnmaskedChildContext === t)
    return r.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    s;
  for (s in n) i[s] = t[s];
  return (
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = t),
      (e.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function Be(e) {
  return (e = e.childContextTypes), e != null;
}
function va() {
  te(Re), te($e);
}
function Rp(e, t, n) {
  if ($e.current !== An) throw Error(L(168));
  q($e, t), q(Re, n);
}
function Bg(e, t, n) {
  var r = e.stateNode;
  if (((t = t.childContextTypes), typeof r.getChildContext != "function"))
    return n;
  r = r.getChildContext();
  for (var i in r) if (!(i in t)) throw Error(L(108, LS(e) || "Unknown", i));
  return ae({}, n, r);
}
function ha(e) {
  return (
    (e =
      ((e = e.stateNode) && e.__reactInternalMemoizedMergedChildContext) || An),
    (rr = $e.current),
    q($e, e),
    q(Re, Re.current),
    !0
  );
}
function Bp(e, t, n) {
  var r = e.stateNode;
  if (!r) throw Error(L(169));
  n
    ? ((e = Bg(e, t, rr)),
      (r.__reactInternalMemoizedMergedChildContext = e),
      te(Re),
      te($e),
      q($e, e))
    : te(Re),
    q(Re, n);
}
var qt = null,
  Ka = !1,
  Hl = !1;
function Fg(e) {
  qt === null ? (qt = [e]) : qt.push(e);
}
function J1(e) {
  (Ka = !0), Fg(e);
}
function Bn() {
  if (!Hl && qt !== null) {
    Hl = !0;
    var e = 0,
      t = U;
    try {
      var n = qt;
      for (U = 1; e < n.length; e++) {
        var r = n[e];
        do r = r(!0);
        while (r !== null);
      }
      (qt = null), (Ka = !1);
    } catch (i) {
      throw (qt !== null && (qt = qt.slice(e + 1)), fg(yd, Bn), i);
    } finally {
      (U = t), (Hl = !1);
    }
  }
  return null;
}
var _r = [],
  Or = 0,
  ga = null,
  ya = 0,
  it = [],
  st = 0,
  ir = null,
  Jt = 1,
  en = "";
function Un(e, t) {
  (_r[Or++] = ya), (_r[Or++] = ga), (ga = e), (ya = t);
}
function Wg(e, t, n) {
  (it[st++] = Jt), (it[st++] = en), (it[st++] = ir), (ir = e);
  var r = Jt;
  e = en;
  var i = 32 - Tt(r) - 1;
  (r &= ~(1 << i)), (n += 1);
  var s = 32 - Tt(t) + i;
  if (30 < s) {
    var o = i - (i % 5);
    (s = (r & ((1 << o) - 1)).toString(32)),
      (r >>= o),
      (i -= o),
      (Jt = (1 << (32 - Tt(t) + i)) | (n << i) | r),
      (en = s + e);
  } else (Jt = (1 << s) | (n << i) | r), (en = e);
}
function Pd(e) {
  e.return !== null && (Un(e, 1), Wg(e, 1, 0));
}
function jd(e) {
  for (; e === ga; )
    (ga = _r[--Or]), (_r[Or] = null), (ya = _r[--Or]), (_r[Or] = null);
  for (; e === ir; )
    (ir = it[--st]),
      (it[st] = null),
      (en = it[--st]),
      (it[st] = null),
      (Jt = it[--st]),
      (it[st] = null);
}
var Ue = null,
  Xe = null,
  re = !1,
  Et = null;
function Hg(e, t) {
  var n = ot(5, null, null, 0);
  (n.elementType = "DELETED"),
    (n.stateNode = t),
    (n.return = e),
    (t = e.deletions),
    t === null ? ((e.deletions = [n]), (e.flags |= 16)) : t.push(n);
}
function Fp(e, t) {
  switch (e.tag) {
    case 5:
      var n = e.type;
      return (
        (t =
          t.nodeType !== 1 || n.toLowerCase() !== t.nodeName.toLowerCase()
            ? null
            : t),
        t !== null
          ? ((e.stateNode = t), (Ue = e), (Xe = $n(t.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (t = e.pendingProps === "" || t.nodeType !== 3 ? null : t),
        t !== null ? ((e.stateNode = t), (Ue = e), (Xe = null), !0) : !1
      );
    case 13:
      return (
        (t = t.nodeType !== 8 ? null : t),
        t !== null
          ? ((n = ir !== null ? { id: Jt, overflow: en } : null),
            (e.memoizedState = {
              dehydrated: t,
              treeContext: n,
              retryLane: 1073741824,
            }),
            (n = ot(18, null, null, 0)),
            (n.stateNode = t),
            (n.return = e),
            (e.child = n),
            (Ue = e),
            (Xe = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function vc(e) {
  return (e.mode & 1) !== 0 && (e.flags & 128) === 0;
}
function hc(e) {
  if (re) {
    var t = Xe;
    if (t) {
      var n = t;
      if (!Fp(e, t)) {
        if (vc(e)) throw Error(L(418));
        t = $n(n.nextSibling);
        var r = Ue;
        t && Fp(e, t)
          ? Hg(r, n)
          : ((e.flags = (e.flags & -4097) | 2), (re = !1), (Ue = e));
      }
    } else {
      if (vc(e)) throw Error(L(418));
      (e.flags = (e.flags & -4097) | 2), (re = !1), (Ue = e);
    }
  }
}
function Wp(e) {
  for (e = e.return; e !== null && e.tag !== 5 && e.tag !== 3 && e.tag !== 13; )
    e = e.return;
  Ue = e;
}
function oo(e) {
  if (e !== Ue) return !1;
  if (!re) return Wp(e), (re = !0), !1;
  var t;
  if (
    ((t = e.tag !== 3) &&
      !(t = e.tag !== 5) &&
      ((t = e.type),
      (t = t !== "head" && t !== "body" && !dc(e.type, e.memoizedProps))),
    t && (t = Xe))
  ) {
    if (vc(e)) throw (Vg(), Error(L(418)));
    for (; t; ) Hg(e, t), (t = $n(t.nextSibling));
  }
  if ((Wp(e), e.tag === 13)) {
    if (((e = e.memoizedState), (e = e !== null ? e.dehydrated : null), !e))
      throw Error(L(317));
    e: {
      for (e = e.nextSibling, t = 0; e; ) {
        if (e.nodeType === 8) {
          var n = e.data;
          if (n === "/$") {
            if (t === 0) {
              Xe = $n(e.nextSibling);
              break e;
            }
            t--;
          } else (n !== "$" && n !== "$!" && n !== "$?") || t++;
        }
        e = e.nextSibling;
      }
      Xe = null;
    }
  } else Xe = Ue ? $n(e.stateNode.nextSibling) : null;
  return !0;
}
function Vg() {
  for (var e = Xe; e; ) e = $n(e.nextSibling);
}
function Yr() {
  (Xe = Ue = null), (re = !1);
}
function $d(e) {
  Et === null ? (Et = [e]) : Et.push(e);
}
var eE = cn.ReactCurrentBatchConfig;
function Ii(e, t, n) {
  if (
    ((e = n.ref), e !== null && typeof e != "function" && typeof e != "object")
  ) {
    if (n._owner) {
      if (((n = n._owner), n)) {
        if (n.tag !== 1) throw Error(L(309));
        var r = n.stateNode;
      }
      if (!r) throw Error(L(147, e));
      var i = r,
        s = "" + e;
      return t !== null &&
        t.ref !== null &&
        typeof t.ref == "function" &&
        t.ref._stringRef === s
        ? t.ref
        : ((t = function (o) {
            var a = i.refs;
            o === null ? delete a[s] : (a[s] = o);
          }),
          (t._stringRef = s),
          t);
    }
    if (typeof e != "string") throw Error(L(284));
    if (!n._owner) throw Error(L(290, e));
  }
  return e;
}
function ao(e, t) {
  throw (
    ((e = Object.prototype.toString.call(t)),
    Error(
      L(
        31,
        e === "[object Object]"
          ? "object with keys {" + Object.keys(t).join(", ") + "}"
          : e
      )
    ))
  );
}
function Hp(e) {
  var t = e._init;
  return t(e._payload);
}
function Gg(e) {
  function t(v, m) {
    if (e) {
      var h = v.deletions;
      h === null ? ((v.deletions = [m]), (v.flags |= 16)) : h.push(m);
    }
  }
  function n(v, m) {
    if (!e) return null;
    for (; m !== null; ) t(v, m), (m = m.sibling);
    return null;
  }
  function r(v, m) {
    for (v = new Map(); m !== null; )
      m.key !== null ? v.set(m.key, m) : v.set(m.index, m), (m = m.sibling);
    return v;
  }
  function i(v, m) {
    return (v = Nn(v, m)), (v.index = 0), (v.sibling = null), v;
  }
  function s(v, m, h) {
    return (
      (v.index = h),
      e
        ? ((h = v.alternate),
          h !== null
            ? ((h = h.index), h < m ? ((v.flags |= 2), m) : h)
            : ((v.flags |= 2), m))
        : ((v.flags |= 1048576), m)
    );
  }
  function o(v) {
    return e && v.alternate === null && (v.flags |= 2), v;
  }
  function a(v, m, h, x) {
    return m === null || m.tag !== 6
      ? ((m = Kl(h, v.mode, x)), (m.return = v), m)
      : ((m = i(m, h)), (m.return = v), m);
  }
  function l(v, m, h, x) {
    var S = h.type;
    return S === Tr
      ? u(v, m, h.props.children, x, h.key)
      : m !== null &&
        (m.elementType === S ||
          (typeof S == "object" &&
            S !== null &&
            S.$$typeof === wn &&
            Hp(S) === m.type))
      ? ((x = i(m, h.props)), (x.ref = Ii(v, m, h)), (x.return = v), x)
      : ((x = Zo(h.type, h.key, h.props, null, v.mode, x)),
        (x.ref = Ii(v, m, h)),
        (x.return = v),
        x);
  }
  function c(v, m, h, x) {
    return m === null ||
      m.tag !== 4 ||
      m.stateNode.containerInfo !== h.containerInfo ||
      m.stateNode.implementation !== h.implementation
      ? ((m = Ql(h, v.mode, x)), (m.return = v), m)
      : ((m = i(m, h.children || [])), (m.return = v), m);
  }
  function u(v, m, h, x, S) {
    return m === null || m.tag !== 7
      ? ((m = tr(h, v.mode, x, S)), (m.return = v), m)
      : ((m = i(m, h)), (m.return = v), m);
  }
  function d(v, m, h) {
    if ((typeof m == "string" && m !== "") || typeof m == "number")
      return (m = Kl("" + m, v.mode, h)), (m.return = v), m;
    if (typeof m == "object" && m !== null) {
      switch (m.$$typeof) {
        case Ks:
          return (
            (h = Zo(m.type, m.key, m.props, null, v.mode, h)),
            (h.ref = Ii(v, null, m)),
            (h.return = v),
            h
          );
        case Ir:
          return (m = Ql(m, v.mode, h)), (m.return = v), m;
        case wn:
          var x = m._init;
          return d(v, x(m._payload), h);
      }
      if (Ri(m) || yi(m))
        return (m = tr(m, v.mode, h, null)), (m.return = v), m;
      ao(v, m);
    }
    return null;
  }
  function f(v, m, h, x) {
    var S = m !== null ? m.key : null;
    if ((typeof h == "string" && h !== "") || typeof h == "number")
      return S !== null ? null : a(v, m, "" + h, x);
    if (typeof h == "object" && h !== null) {
      switch (h.$$typeof) {
        case Ks:
          return h.key === S ? l(v, m, h, x) : null;
        case Ir:
          return h.key === S ? c(v, m, h, x) : null;
        case wn:
          return (S = h._init), f(v, m, S(h._payload), x);
      }
      if (Ri(h) || yi(h)) return S !== null ? null : u(v, m, h, x, null);
      ao(v, h);
    }
    return null;
  }
  function g(v, m, h, x, S) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (v = v.get(h) || null), a(m, v, "" + x, S);
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Ks:
          return (v = v.get(x.key === null ? h : x.key) || null), l(m, v, x, S);
        case Ir:
          return (v = v.get(x.key === null ? h : x.key) || null), c(m, v, x, S);
        case wn:
          var b = x._init;
          return g(v, m, h, b(x._payload), S);
      }
      if (Ri(x) || yi(x)) return (v = v.get(h) || null), u(m, v, x, S, null);
      ao(m, x);
    }
    return null;
  }
  function y(v, m, h, x) {
    for (
      var S = null, b = null, $ = m, T = (m = 0), j = null;
      $ !== null && T < h.length;
      T++
    ) {
      $.index > T ? ((j = $), ($ = null)) : (j = $.sibling);
      var P = f(v, $, h[T], x);
      if (P === null) {
        $ === null && ($ = j);
        break;
      }
      e && $ && P.alternate === null && t(v, $),
        (m = s(P, m, T)),
        b === null ? (S = P) : (b.sibling = P),
        (b = P),
        ($ = j);
    }
    if (T === h.length) return n(v, $), re && Un(v, T), S;
    if ($ === null) {
      for (; T < h.length; T++)
        ($ = d(v, h[T], x)),
          $ !== null &&
            ((m = s($, m, T)), b === null ? (S = $) : (b.sibling = $), (b = $));
      return re && Un(v, T), S;
    }
    for ($ = r(v, $); T < h.length; T++)
      (j = g($, v, T, h[T], x)),
        j !== null &&
          (e && j.alternate !== null && $.delete(j.key === null ? T : j.key),
          (m = s(j, m, T)),
          b === null ? (S = j) : (b.sibling = j),
          (b = j));
    return (
      e &&
        $.forEach(function (C) {
          return t(v, C);
        }),
      re && Un(v, T),
      S
    );
  }
  function w(v, m, h, x) {
    var S = yi(h);
    if (typeof S != "function") throw Error(L(150));
    if (((h = S.call(h)), h == null)) throw Error(L(151));
    for (
      var b = (S = null), $ = m, T = (m = 0), j = null, P = h.next();
      $ !== null && !P.done;
      T++, P = h.next()
    ) {
      $.index > T ? ((j = $), ($ = null)) : (j = $.sibling);
      var C = f(v, $, P.value, x);
      if (C === null) {
        $ === null && ($ = j);
        break;
      }
      e && $ && C.alternate === null && t(v, $),
        (m = s(C, m, T)),
        b === null ? (S = C) : (b.sibling = C),
        (b = C),
        ($ = j);
    }
    if (P.done) return n(v, $), re && Un(v, T), S;
    if ($ === null) {
      for (; !P.done; T++, P = h.next())
        (P = d(v, P.value, x)),
          P !== null &&
            ((m = s(P, m, T)), b === null ? (S = P) : (b.sibling = P), (b = P));
      return re && Un(v, T), S;
    }
    for ($ = r(v, $); !P.done; T++, P = h.next())
      (P = g($, v, T, P.value, x)),
        P !== null &&
          (e && P.alternate !== null && $.delete(P.key === null ? T : P.key),
          (m = s(P, m, T)),
          b === null ? (S = P) : (b.sibling = P),
          (b = P));
    return (
      e &&
        $.forEach(function (_) {
          return t(v, _);
        }),
      re && Un(v, T),
      S
    );
  }
  function I(v, m, h, x) {
    if (
      (typeof h == "object" &&
        h !== null &&
        h.type === Tr &&
        h.key === null &&
        (h = h.props.children),
      typeof h == "object" && h !== null)
    ) {
      switch (h.$$typeof) {
        case Ks:
          e: {
            for (var S = h.key, b = m; b !== null; ) {
              if (b.key === S) {
                if (((S = h.type), S === Tr)) {
                  if (b.tag === 7) {
                    n(v, b.sibling),
                      (m = i(b, h.props.children)),
                      (m.return = v),
                      (v = m);
                    break e;
                  }
                } else if (
                  b.elementType === S ||
                  (typeof S == "object" &&
                    S !== null &&
                    S.$$typeof === wn &&
                    Hp(S) === b.type)
                ) {
                  n(v, b.sibling),
                    (m = i(b, h.props)),
                    (m.ref = Ii(v, b, h)),
                    (m.return = v),
                    (v = m);
                  break e;
                }
                n(v, b);
                break;
              } else t(v, b);
              b = b.sibling;
            }
            h.type === Tr
              ? ((m = tr(h.props.children, v.mode, x, h.key)),
                (m.return = v),
                (v = m))
              : ((x = Zo(h.type, h.key, h.props, null, v.mode, x)),
                (x.ref = Ii(v, m, h)),
                (x.return = v),
                (v = x));
          }
          return o(v);
        case Ir:
          e: {
            for (b = h.key; m !== null; ) {
              if (m.key === b)
                if (
                  m.tag === 4 &&
                  m.stateNode.containerInfo === h.containerInfo &&
                  m.stateNode.implementation === h.implementation
                ) {
                  n(v, m.sibling),
                    (m = i(m, h.children || [])),
                    (m.return = v),
                    (v = m);
                  break e;
                } else {
                  n(v, m);
                  break;
                }
              else t(v, m);
              m = m.sibling;
            }
            (m = Ql(h, v.mode, x)), (m.return = v), (v = m);
          }
          return o(v);
        case wn:
          return (b = h._init), I(v, m, b(h._payload), x);
      }
      if (Ri(h)) return y(v, m, h, x);
      if (yi(h)) return w(v, m, h, x);
      ao(v, h);
    }
    return (typeof h == "string" && h !== "") || typeof h == "number"
      ? ((h = "" + h),
        m !== null && m.tag === 6
          ? (n(v, m.sibling), (m = i(m, h)), (m.return = v), (v = m))
          : (n(v, m), (m = Kl(h, v.mode, x)), (m.return = v), (v = m)),
        o(v))
      : n(v, m);
  }
  return I;
}
var Xr = Gg(!0),
  Yg = Gg(!1),
  wa = Rn(null),
  xa = null,
  Mr = null,
  _d = null;
function Od() {
  _d = Mr = xa = null;
}
function Md(e) {
  var t = wa.current;
  te(wa), (e._currentValue = t);
}
function gc(e, t, n) {
  for (; e !== null; ) {
    var r = e.alternate;
    if (
      ((e.childLanes & t) !== t
        ? ((e.childLanes |= t), r !== null && (r.childLanes |= t))
        : r !== null && (r.childLanes & t) !== t && (r.childLanes |= t),
      e === n)
    )
      break;
    e = e.return;
  }
}
function Br(e, t) {
  (xa = e),
    (_d = Mr = null),
    (e = e.dependencies),
    e !== null &&
      e.firstContext !== null &&
      (e.lanes & t && (ze = !0), (e.firstContext = null));
}
function ut(e) {
  var t = e._currentValue;
  if (_d !== e)
    if (((e = { context: e, memoizedValue: t, next: null }), Mr === null)) {
      if (xa === null) throw Error(L(308));
      (Mr = e), (xa.dependencies = { lanes: 0, firstContext: e });
    } else Mr = Mr.next = e;
  return t;
}
var qn = null;
function Nd(e) {
  qn === null ? (qn = [e]) : qn.push(e);
}
function Xg(e, t, n, r) {
  var i = t.interleaved;
  return (
    i === null ? ((n.next = n), Nd(t)) : ((n.next = i.next), (i.next = n)),
    (t.interleaved = n),
    on(e, r)
  );
}
function on(e, t) {
  e.lanes |= t;
  var n = e.alternate;
  for (n !== null && (n.lanes |= t), n = e, e = e.return; e !== null; )
    (e.childLanes |= t),
      (n = e.alternate),
      n !== null && (n.childLanes |= t),
      (n = e),
      (e = e.return);
  return n.tag === 3 ? n.stateNode : null;
}
var xn = !1;
function kd(e) {
  e.updateQueue = {
    baseState: e.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function Ug(e, t) {
  (e = e.updateQueue),
    t.updateQueue === e &&
      (t.updateQueue = {
        baseState: e.baseState,
        firstBaseUpdate: e.firstBaseUpdate,
        lastBaseUpdate: e.lastBaseUpdate,
        shared: e.shared,
        effects: e.effects,
      });
}
function tn(e, t) {
  return {
    eventTime: e,
    lane: t,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function _n(e, t, n) {
  var r = e.updateQueue;
  if (r === null) return null;
  if (((r = r.shared), Y & 2)) {
    var i = r.pending;
    return (
      i === null ? (t.next = t) : ((t.next = i.next), (i.next = t)),
      (r.pending = t),
      on(e, n)
    );
  }
  return (
    (i = r.interleaved),
    i === null ? ((t.next = t), Nd(r)) : ((t.next = i.next), (i.next = t)),
    (r.interleaved = t),
    on(e, n)
  );
}
function Ho(e, t, n) {
  if (
    ((t = t.updateQueue), t !== null && ((t = t.shared), (n & 4194240) !== 0))
  ) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wd(e, n);
  }
}
function Vp(e, t) {
  var n = e.updateQueue,
    r = e.alternate;
  if (r !== null && ((r = r.updateQueue), n === r)) {
    var i = null,
      s = null;
    if (((n = n.firstBaseUpdate), n !== null)) {
      do {
        var o = {
          eventTime: n.eventTime,
          lane: n.lane,
          tag: n.tag,
          payload: n.payload,
          callback: n.callback,
          next: null,
        };
        s === null ? (i = s = o) : (s = s.next = o), (n = n.next);
      } while (n !== null);
      s === null ? (i = s = t) : (s = s.next = t);
    } else i = s = t;
    (n = {
      baseState: r.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: s,
      shared: r.shared,
      effects: r.effects,
    }),
      (e.updateQueue = n);
    return;
  }
  (e = n.lastBaseUpdate),
    e === null ? (n.firstBaseUpdate = t) : (e.next = t),
    (n.lastBaseUpdate = t);
}
function Sa(e, t, n, r) {
  var i = e.updateQueue;
  xn = !1;
  var s = i.firstBaseUpdate,
    o = i.lastBaseUpdate,
    a = i.shared.pending;
  if (a !== null) {
    i.shared.pending = null;
    var l = a,
      c = l.next;
    (l.next = null), o === null ? (s = c) : (o.next = c), (o = l);
    var u = e.alternate;
    u !== null &&
      ((u = u.updateQueue),
      (a = u.lastBaseUpdate),
      a !== o &&
        (a === null ? (u.firstBaseUpdate = c) : (a.next = c),
        (u.lastBaseUpdate = l)));
  }
  if (s !== null) {
    var d = i.baseState;
    (o = 0), (u = c = l = null), (a = s);
    do {
      var f = a.lane,
        g = a.eventTime;
      if ((r & f) === f) {
        u !== null &&
          (u = u.next =
            {
              eventTime: g,
              lane: 0,
              tag: a.tag,
              payload: a.payload,
              callback: a.callback,
              next: null,
            });
        e: {
          var y = e,
            w = a;
          switch (((f = t), (g = n), w.tag)) {
            case 1:
              if (((y = w.payload), typeof y == "function")) {
                d = y.call(g, d, f);
                break e;
              }
              d = y;
              break e;
            case 3:
              y.flags = (y.flags & -65537) | 128;
            case 0:
              if (
                ((y = w.payload),
                (f = typeof y == "function" ? y.call(g, d, f) : y),
                f == null)
              )
                break e;
              d = ae({}, d, f);
              break e;
            case 2:
              xn = !0;
          }
        }
        a.callback !== null &&
          a.lane !== 0 &&
          ((e.flags |= 64),
          (f = i.effects),
          f === null ? (i.effects = [a]) : f.push(a));
      } else
        (g = {
          eventTime: g,
          lane: f,
          tag: a.tag,
          payload: a.payload,
          callback: a.callback,
          next: null,
        }),
          u === null ? ((c = u = g), (l = d)) : (u = u.next = g),
          (o |= f);
      if (((a = a.next), a === null)) {
        if (((a = i.shared.pending), a === null)) break;
        (f = a),
          (a = f.next),
          (f.next = null),
          (i.lastBaseUpdate = f),
          (i.shared.pending = null);
      }
    } while (!0);
    if (
      (u === null && (l = d),
      (i.baseState = l),
      (i.firstBaseUpdate = c),
      (i.lastBaseUpdate = u),
      (t = i.shared.interleaved),
      t !== null)
    ) {
      i = t;
      do (o |= i.lane), (i = i.next);
      while (i !== t);
    } else s === null && (i.shared.lanes = 0);
    (or |= o), (e.lanes = o), (e.memoizedState = d);
  }
}
function Gp(e, t, n) {
  if (((e = t.effects), (t.effects = null), e !== null))
    for (t = 0; t < e.length; t++) {
      var r = e[t],
        i = r.callback;
      if (i !== null) {
        if (((r.callback = null), (r = n), typeof i != "function"))
          throw Error(L(191, i));
        i.call(r);
      }
    }
}
var js = {},
  zt = Rn(js),
  ms = Rn(js),
  vs = Rn(js);
function Jn(e) {
  if (e === js) throw Error(L(174));
  return e;
}
function Ad(e, t) {
  switch ((q(vs, t), q(ms, e), q(zt, js), (e = t.nodeType), e)) {
    case 9:
    case 11:
      t = (t = t.documentElement) ? t.namespaceURI : Qu(null, "");
      break;
    default:
      (e = e === 8 ? t.parentNode : t),
        (t = e.namespaceURI || null),
        (e = e.tagName),
        (t = Qu(t, e));
  }
  te(zt), q(zt, t);
}
function Ur() {
  te(zt), te(ms), te(vs);
}
function Zg(e) {
  Jn(vs.current);
  var t = Jn(zt.current),
    n = Qu(t, e.type);
  t !== n && (q(ms, e), q(zt, n));
}
function Ld(e) {
  ms.current === e && (te(zt), te(ms));
}
var se = Rn(0);
function Ea(e) {
  for (var t = e; t !== null; ) {
    if (t.tag === 13) {
      var n = t.memoizedState;
      if (
        n !== null &&
        ((n = n.dehydrated), n === null || n.data === "$?" || n.data === "$!")
      )
        return t;
    } else if (t.tag === 19 && t.memoizedProps.revealOrder !== void 0) {
      if (t.flags & 128) return t;
    } else if (t.child !== null) {
      (t.child.return = t), (t = t.child);
      continue;
    }
    if (t === e) break;
    for (; t.sibling === null; ) {
      if (t.return === null || t.return === e) return null;
      t = t.return;
    }
    (t.sibling.return = t.return), (t = t.sibling);
  }
  return null;
}
var Vl = [];
function Dd() {
  for (var e = 0; e < Vl.length; e++)
    Vl[e]._workInProgressVersionPrimary = null;
  Vl.length = 0;
}
var Vo = cn.ReactCurrentDispatcher,
  Gl = cn.ReactCurrentBatchConfig,
  sr = 0,
  oe = null,
  ve = null,
  ye = null,
  Ia = !1,
  Xi = !1,
  hs = 0,
  tE = 0;
function be() {
  throw Error(L(321));
}
function zd(e, t) {
  if (t === null) return !1;
  for (var n = 0; n < t.length && n < e.length; n++)
    if (!Pt(e[n], t[n])) return !1;
  return !0;
}
function Rd(e, t, n, r, i, s) {
  if (
    ((sr = s),
    (oe = t),
    (t.memoizedState = null),
    (t.updateQueue = null),
    (t.lanes = 0),
    (Vo.current = e === null || e.memoizedState === null ? sE : oE),
    (e = n(r, i)),
    Xi)
  ) {
    s = 0;
    do {
      if (((Xi = !1), (hs = 0), 25 <= s)) throw Error(L(301));
      (s += 1),
        (ye = ve = null),
        (t.updateQueue = null),
        (Vo.current = aE),
        (e = n(r, i));
    } while (Xi);
  }
  if (
    ((Vo.current = Ta),
    (t = ve !== null && ve.next !== null),
    (sr = 0),
    (ye = ve = oe = null),
    (Ia = !1),
    t)
  )
    throw Error(L(300));
  return e;
}
function Bd() {
  var e = hs !== 0;
  return (hs = 0), e;
}
function Nt() {
  var e = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return ye === null ? (oe.memoizedState = ye = e) : (ye = ye.next = e), ye;
}
function ct() {
  if (ve === null) {
    var e = oe.alternate;
    e = e !== null ? e.memoizedState : null;
  } else e = ve.next;
  var t = ye === null ? oe.memoizedState : ye.next;
  if (t !== null) (ye = t), (ve = e);
  else {
    if (e === null) throw Error(L(310));
    (ve = e),
      (e = {
        memoizedState: ve.memoizedState,
        baseState: ve.baseState,
        baseQueue: ve.baseQueue,
        queue: ve.queue,
        next: null,
      }),
      ye === null ? (oe.memoizedState = ye = e) : (ye = ye.next = e);
  }
  return ye;
}
function gs(e, t) {
  return typeof t == "function" ? t(e) : t;
}
function Yl(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = ve,
    i = r.baseQueue,
    s = n.pending;
  if (s !== null) {
    if (i !== null) {
      var o = i.next;
      (i.next = s.next), (s.next = o);
    }
    (r.baseQueue = i = s), (n.pending = null);
  }
  if (i !== null) {
    (s = i.next), (r = r.baseState);
    var a = (o = null),
      l = null,
      c = s;
    do {
      var u = c.lane;
      if ((sr & u) === u)
        l !== null &&
          (l = l.next =
            {
              lane: 0,
              action: c.action,
              hasEagerState: c.hasEagerState,
              eagerState: c.eagerState,
              next: null,
            }),
          (r = c.hasEagerState ? c.eagerState : e(r, c.action));
      else {
        var d = {
          lane: u,
          action: c.action,
          hasEagerState: c.hasEagerState,
          eagerState: c.eagerState,
          next: null,
        };
        l === null ? ((a = l = d), (o = r)) : (l = l.next = d),
          (oe.lanes |= u),
          (or |= u);
      }
      c = c.next;
    } while (c !== null && c !== s);
    l === null ? (o = r) : (l.next = a),
      Pt(r, t.memoizedState) || (ze = !0),
      (t.memoizedState = r),
      (t.baseState = o),
      (t.baseQueue = l),
      (n.lastRenderedState = r);
  }
  if (((e = n.interleaved), e !== null)) {
    i = e;
    do (s = i.lane), (oe.lanes |= s), (or |= s), (i = i.next);
    while (i !== e);
  } else i === null && (n.lanes = 0);
  return [t.memoizedState, n.dispatch];
}
function Xl(e) {
  var t = ct(),
    n = t.queue;
  if (n === null) throw Error(L(311));
  n.lastRenderedReducer = e;
  var r = n.dispatch,
    i = n.pending,
    s = t.memoizedState;
  if (i !== null) {
    n.pending = null;
    var o = (i = i.next);
    do (s = e(s, o.action)), (o = o.next);
    while (o !== i);
    Pt(s, t.memoizedState) || (ze = !0),
      (t.memoizedState = s),
      t.baseQueue === null && (t.baseState = s),
      (n.lastRenderedState = s);
  }
  return [s, r];
}
function Kg() {}
function Qg(e, t) {
  var n = oe,
    r = ct(),
    i = t(),
    s = !Pt(r.memoizedState, i);
  if (
    (s && ((r.memoizedState = i), (ze = !0)),
    (r = r.queue),
    Fd(ey.bind(null, n, r, e), [e]),
    r.getSnapshot !== t || s || (ye !== null && ye.memoizedState.tag & 1))
  ) {
    if (
      ((n.flags |= 2048),
      ys(9, Jg.bind(null, n, r, i, t), void 0, null),
      we === null)
    )
      throw Error(L(349));
    sr & 30 || qg(n, t, i);
  }
  return i;
}
function qg(e, t, n) {
  (e.flags |= 16384),
    (e = { getSnapshot: t, value: n }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.stores = [e]))
      : ((n = t.stores), n === null ? (t.stores = [e]) : n.push(e));
}
function Jg(e, t, n, r) {
  (t.value = n), (t.getSnapshot = r), ty(t) && ny(e);
}
function ey(e, t, n) {
  return n(function () {
    ty(t) && ny(e);
  });
}
function ty(e) {
  var t = e.getSnapshot;
  e = e.value;
  try {
    var n = t();
    return !Pt(e, n);
  } catch {
    return !0;
  }
}
function ny(e) {
  var t = on(e, 1);
  t !== null && Ct(t, e, 1, -1);
}
function Yp(e) {
  var t = Nt();
  return (
    typeof e == "function" && (e = e()),
    (t.memoizedState = t.baseState = e),
    (e = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: gs,
      lastRenderedState: e,
    }),
    (t.queue = e),
    (e = e.dispatch = iE.bind(null, oe, e)),
    [t.memoizedState, e]
  );
}
function ys(e, t, n, r) {
  return (
    (e = { tag: e, create: t, destroy: n, deps: r, next: null }),
    (t = oe.updateQueue),
    t === null
      ? ((t = { lastEffect: null, stores: null }),
        (oe.updateQueue = t),
        (t.lastEffect = e.next = e))
      : ((n = t.lastEffect),
        n === null
          ? (t.lastEffect = e.next = e)
          : ((r = n.next), (n.next = e), (e.next = r), (t.lastEffect = e))),
    e
  );
}
function ry() {
  return ct().memoizedState;
}
function Go(e, t, n, r) {
  var i = Nt();
  (oe.flags |= e),
    (i.memoizedState = ys(1 | t, n, void 0, r === void 0 ? null : r));
}
function Qa(e, t, n, r) {
  var i = ct();
  r = r === void 0 ? null : r;
  var s = void 0;
  if (ve !== null) {
    var o = ve.memoizedState;
    if (((s = o.destroy), r !== null && zd(r, o.deps))) {
      i.memoizedState = ys(t, n, s, r);
      return;
    }
  }
  (oe.flags |= e), (i.memoizedState = ys(1 | t, n, s, r));
}
function Xp(e, t) {
  return Go(8390656, 8, e, t);
}
function Fd(e, t) {
  return Qa(2048, 8, e, t);
}
function iy(e, t) {
  return Qa(4, 2, e, t);
}
function sy(e, t) {
  return Qa(4, 4, e, t);
}
function oy(e, t) {
  if (typeof t == "function")
    return (
      (e = e()),
      t(e),
      function () {
        t(null);
      }
    );
  if (t != null)
    return (
      (e = e()),
      (t.current = e),
      function () {
        t.current = null;
      }
    );
}
function ay(e, t, n) {
  return (
    (n = n != null ? n.concat([e]) : null), Qa(4, 4, oy.bind(null, t, e), n)
  );
}
function Wd() {}
function ly(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zd(t, r[1])
    ? r[0]
    : ((n.memoizedState = [e, t]), e);
}
function uy(e, t) {
  var n = ct();
  t = t === void 0 ? null : t;
  var r = n.memoizedState;
  return r !== null && t !== null && zd(t, r[1])
    ? r[0]
    : ((e = e()), (n.memoizedState = [e, t]), e);
}
function cy(e, t, n) {
  return sr & 21
    ? (Pt(n, t) || ((n = vg()), (oe.lanes |= n), (or |= n), (e.baseState = !0)),
      t)
    : (e.baseState && ((e.baseState = !1), (ze = !0)), (e.memoizedState = n));
}
function nE(e, t) {
  var n = U;
  (U = n !== 0 && 4 > n ? n : 4), e(!0);
  var r = Gl.transition;
  Gl.transition = {};
  try {
    e(!1), t();
  } finally {
    (U = n), (Gl.transition = r);
  }
}
function dy() {
  return ct().memoizedState;
}
function rE(e, t, n) {
  var r = Mn(e);
  if (
    ((n = {
      lane: r,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    fy(e))
  )
    py(t, n);
  else if (((n = Xg(e, t, n, r)), n !== null)) {
    var i = Oe();
    Ct(n, e, r, i), my(n, t, r);
  }
}
function iE(e, t, n) {
  var r = Mn(e),
    i = { lane: r, action: n, hasEagerState: !1, eagerState: null, next: null };
  if (fy(e)) py(t, i);
  else {
    var s = e.alternate;
    if (
      e.lanes === 0 &&
      (s === null || s.lanes === 0) &&
      ((s = t.lastRenderedReducer), s !== null)
    )
      try {
        var o = t.lastRenderedState,
          a = s(o, n);
        if (((i.hasEagerState = !0), (i.eagerState = a), Pt(a, o))) {
          var l = t.interleaved;
          l === null
            ? ((i.next = i), Nd(t))
            : ((i.next = l.next), (l.next = i)),
            (t.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (n = Xg(e, t, i, r)),
      n !== null && ((i = Oe()), Ct(n, e, r, i), my(n, t, r));
  }
}
function fy(e) {
  var t = e.alternate;
  return e === oe || (t !== null && t === oe);
}
function py(e, t) {
  Xi = Ia = !0;
  var n = e.pending;
  n === null ? (t.next = t) : ((t.next = n.next), (n.next = t)),
    (e.pending = t);
}
function my(e, t, n) {
  if (n & 4194240) {
    var r = t.lanes;
    (r &= e.pendingLanes), (n |= r), (t.lanes = n), wd(e, n);
  }
}
var Ta = {
    readContext: ut,
    useCallback: be,
    useContext: be,
    useEffect: be,
    useImperativeHandle: be,
    useInsertionEffect: be,
    useLayoutEffect: be,
    useMemo: be,
    useReducer: be,
    useRef: be,
    useState: be,
    useDebugValue: be,
    useDeferredValue: be,
    useTransition: be,
    useMutableSource: be,
    useSyncExternalStore: be,
    useId: be,
    unstable_isNewReconciler: !1,
  },
  sE = {
    readContext: ut,
    useCallback: function (e, t) {
      return (Nt().memoizedState = [e, t === void 0 ? null : t]), e;
    },
    useContext: ut,
    useEffect: Xp,
    useImperativeHandle: function (e, t, n) {
      return (
        (n = n != null ? n.concat([e]) : null),
        Go(4194308, 4, oy.bind(null, t, e), n)
      );
    },
    useLayoutEffect: function (e, t) {
      return Go(4194308, 4, e, t);
    },
    useInsertionEffect: function (e, t) {
      return Go(4, 2, e, t);
    },
    useMemo: function (e, t) {
      var n = Nt();
      return (
        (t = t === void 0 ? null : t), (e = e()), (n.memoizedState = [e, t]), e
      );
    },
    useReducer: function (e, t, n) {
      var r = Nt();
      return (
        (t = n !== void 0 ? n(t) : t),
        (r.memoizedState = r.baseState = t),
        (e = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: e,
          lastRenderedState: t,
        }),
        (r.queue = e),
        (e = e.dispatch = rE.bind(null, oe, e)),
        [r.memoizedState, e]
      );
    },
    useRef: function (e) {
      var t = Nt();
      return (e = { current: e }), (t.memoizedState = e);
    },
    useState: Yp,
    useDebugValue: Wd,
    useDeferredValue: function (e) {
      return (Nt().memoizedState = e);
    },
    useTransition: function () {
      var e = Yp(!1),
        t = e[0];
      return (e = nE.bind(null, e[1])), (Nt().memoizedState = e), [t, e];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (e, t, n) {
      var r = oe,
        i = Nt();
      if (re) {
        if (n === void 0) throw Error(L(407));
        n = n();
      } else {
        if (((n = t()), we === null)) throw Error(L(349));
        sr & 30 || qg(r, t, n);
      }
      i.memoizedState = n;
      var s = { value: n, getSnapshot: t };
      return (
        (i.queue = s),
        Xp(ey.bind(null, r, s, e), [e]),
        (r.flags |= 2048),
        ys(9, Jg.bind(null, r, s, n, t), void 0, null),
        n
      );
    },
    useId: function () {
      var e = Nt(),
        t = we.identifierPrefix;
      if (re) {
        var n = en,
          r = Jt;
        (n = (r & ~(1 << (32 - Tt(r) - 1))).toString(32) + n),
          (t = ":" + t + "R" + n),
          (n = hs++),
          0 < n && (t += "H" + n.toString(32)),
          (t += ":");
      } else (n = tE++), (t = ":" + t + "r" + n.toString(32) + ":");
      return (e.memoizedState = t);
    },
    unstable_isNewReconciler: !1,
  },
  oE = {
    readContext: ut,
    useCallback: ly,
    useContext: ut,
    useEffect: Fd,
    useImperativeHandle: ay,
    useInsertionEffect: iy,
    useLayoutEffect: sy,
    useMemo: uy,
    useReducer: Yl,
    useRef: ry,
    useState: function () {
      return Yl(gs);
    },
    useDebugValue: Wd,
    useDeferredValue: function (e) {
      var t = ct();
      return cy(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Yl(gs)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Kg,
    useSyncExternalStore: Qg,
    useId: dy,
    unstable_isNewReconciler: !1,
  },
  aE = {
    readContext: ut,
    useCallback: ly,
    useContext: ut,
    useEffect: Fd,
    useImperativeHandle: ay,
    useInsertionEffect: iy,
    useLayoutEffect: sy,
    useMemo: uy,
    useReducer: Xl,
    useRef: ry,
    useState: function () {
      return Xl(gs);
    },
    useDebugValue: Wd,
    useDeferredValue: function (e) {
      var t = ct();
      return ve === null ? (t.memoizedState = e) : cy(t, ve.memoizedState, e);
    },
    useTransition: function () {
      var e = Xl(gs)[0],
        t = ct().memoizedState;
      return [e, t];
    },
    useMutableSource: Kg,
    useSyncExternalStore: Qg,
    useId: dy,
    unstable_isNewReconciler: !1,
  };
function xt(e, t) {
  if (e && e.defaultProps) {
    (t = ae({}, t)), (e = e.defaultProps);
    for (var n in e) t[n] === void 0 && (t[n] = e[n]);
    return t;
  }
  return t;
}
function yc(e, t, n, r) {
  (t = e.memoizedState),
    (n = n(r, t)),
    (n = n == null ? t : ae({}, t, n)),
    (e.memoizedState = n),
    e.lanes === 0 && (e.updateQueue.baseState = n);
}
var qa = {
  isMounted: function (e) {
    return (e = e._reactInternals) ? fr(e) === e : !1;
  },
  enqueueSetState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      i = Mn(e),
      s = tn(r, i);
    (s.payload = t),
      n != null && (s.callback = n),
      (t = _n(e, s, i)),
      t !== null && (Ct(t, e, i, r), Ho(t, e, i));
  },
  enqueueReplaceState: function (e, t, n) {
    e = e._reactInternals;
    var r = Oe(),
      i = Mn(e),
      s = tn(r, i);
    (s.tag = 1),
      (s.payload = t),
      n != null && (s.callback = n),
      (t = _n(e, s, i)),
      t !== null && (Ct(t, e, i, r), Ho(t, e, i));
  },
  enqueueForceUpdate: function (e, t) {
    e = e._reactInternals;
    var n = Oe(),
      r = Mn(e),
      i = tn(n, r);
    (i.tag = 2),
      t != null && (i.callback = t),
      (t = _n(e, i, r)),
      t !== null && (Ct(t, e, r, n), Ho(t, e, r));
  },
};
function Up(e, t, n, r, i, s, o) {
  return (
    (e = e.stateNode),
    typeof e.shouldComponentUpdate == "function"
      ? e.shouldComponentUpdate(r, s, o)
      : t.prototype && t.prototype.isPureReactComponent
      ? !cs(n, r) || !cs(i, s)
      : !0
  );
}
function vy(e, t, n) {
  var r = !1,
    i = An,
    s = t.contextType;
  return (
    typeof s == "object" && s !== null
      ? (s = ut(s))
      : ((i = Be(t) ? rr : $e.current),
        (r = t.contextTypes),
        (s = (r = r != null) ? Gr(e, i) : An)),
    (t = new t(n, s)),
    (e.memoizedState = t.state !== null && t.state !== void 0 ? t.state : null),
    (t.updater = qa),
    (e.stateNode = t),
    (t._reactInternals = e),
    r &&
      ((e = e.stateNode),
      (e.__reactInternalMemoizedUnmaskedChildContext = i),
      (e.__reactInternalMemoizedMaskedChildContext = s)),
    t
  );
}
function Zp(e, t, n, r) {
  (e = t.state),
    typeof t.componentWillReceiveProps == "function" &&
      t.componentWillReceiveProps(n, r),
    typeof t.UNSAFE_componentWillReceiveProps == "function" &&
      t.UNSAFE_componentWillReceiveProps(n, r),
    t.state !== e && qa.enqueueReplaceState(t, t.state, null);
}
function wc(e, t, n, r) {
  var i = e.stateNode;
  (i.props = n), (i.state = e.memoizedState), (i.refs = {}), kd(e);
  var s = t.contextType;
  typeof s == "object" && s !== null
    ? (i.context = ut(s))
    : ((s = Be(t) ? rr : $e.current), (i.context = Gr(e, s))),
    (i.state = e.memoizedState),
    (s = t.getDerivedStateFromProps),
    typeof s == "function" && (yc(e, t, s, n), (i.state = e.memoizedState)),
    typeof t.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((t = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      t !== i.state && qa.enqueueReplaceState(i, i.state, null),
      Sa(e, n, i, r),
      (i.state = e.memoizedState)),
    typeof i.componentDidMount == "function" && (e.flags |= 4194308);
}
function Zr(e, t) {
  try {
    var n = "",
      r = t;
    do (n += AS(r)), (r = r.return);
    while (r);
    var i = n;
  } catch (s) {
    i =
      `
Error generating stack: ` +
      s.message +
      `
` +
      s.stack;
  }
  return { value: e, source: t, stack: i, digest: null };
}
function Ul(e, t, n) {
  return { value: e, source: null, stack: n ?? null, digest: t ?? null };
}
function xc(e, t) {
  try {
    console.error(t.value);
  } catch (n) {
    setTimeout(function () {
      throw n;
    });
  }
}
var lE = typeof WeakMap == "function" ? WeakMap : Map;
function hy(e, t, n) {
  (n = tn(-1, n)), (n.tag = 3), (n.payload = { element: null });
  var r = t.value;
  return (
    (n.callback = function () {
      ba || ((ba = !0), (_c = r)), xc(e, t);
    }),
    n
  );
}
function gy(e, t, n) {
  (n = tn(-1, n)), (n.tag = 3);
  var r = e.type.getDerivedStateFromError;
  if (typeof r == "function") {
    var i = t.value;
    (n.payload = function () {
      return r(i);
    }),
      (n.callback = function () {
        xc(e, t);
      });
  }
  var s = e.stateNode;
  return (
    s !== null &&
      typeof s.componentDidCatch == "function" &&
      (n.callback = function () {
        xc(e, t),
          typeof r != "function" &&
            (On === null ? (On = new Set([this])) : On.add(this));
        var o = t.stack;
        this.componentDidCatch(t.value, {
          componentStack: o !== null ? o : "",
        });
      }),
    n
  );
}
function Kp(e, t, n) {
  var r = e.pingCache;
  if (r === null) {
    r = e.pingCache = new lE();
    var i = new Set();
    r.set(t, i);
  } else (i = r.get(t)), i === void 0 && ((i = new Set()), r.set(t, i));
  i.has(n) || (i.add(n), (e = EE.bind(null, e, t, n)), t.then(e, e));
}
function Qp(e) {
  do {
    var t;
    if (
      ((t = e.tag === 13) &&
        ((t = e.memoizedState), (t = t !== null ? t.dehydrated !== null : !0)),
      t)
    )
      return e;
    e = e.return;
  } while (e !== null);
  return null;
}
function qp(e, t, n, r, i) {
  return e.mode & 1
    ? ((e.flags |= 65536), (e.lanes = i), e)
    : (e === t
        ? (e.flags |= 65536)
        : ((e.flags |= 128),
          (n.flags |= 131072),
          (n.flags &= -52805),
          n.tag === 1 &&
            (n.alternate === null
              ? (n.tag = 17)
              : ((t = tn(-1, 1)), (t.tag = 2), _n(n, t, 1))),
          (n.lanes |= 1)),
      e);
}
var uE = cn.ReactCurrentOwner,
  ze = !1;
function _e(e, t, n, r) {
  t.child = e === null ? Yg(t, null, n, r) : Xr(t, e.child, n, r);
}
function Jp(e, t, n, r, i) {
  n = n.render;
  var s = t.ref;
  return (
    Br(t, i),
    (r = Rd(e, t, n, r, s, i)),
    (n = Bd()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        an(e, t, i))
      : (re && n && Pd(t), (t.flags |= 1), _e(e, t, r, i), t.child)
  );
}
function em(e, t, n, r, i) {
  if (e === null) {
    var s = n.type;
    return typeof s == "function" &&
      !Kd(s) &&
      s.defaultProps === void 0 &&
      n.compare === null &&
      n.defaultProps === void 0
      ? ((t.tag = 15), (t.type = s), yy(e, t, s, r, i))
      : ((e = Zo(n.type, null, r, t, t.mode, i)),
        (e.ref = t.ref),
        (e.return = t),
        (t.child = e));
  }
  if (((s = e.child), !(e.lanes & i))) {
    var o = s.memoizedProps;
    if (
      ((n = n.compare), (n = n !== null ? n : cs), n(o, r) && e.ref === t.ref)
    )
      return an(e, t, i);
  }
  return (
    (t.flags |= 1),
    (e = Nn(s, r)),
    (e.ref = t.ref),
    (e.return = t),
    (t.child = e)
  );
}
function yy(e, t, n, r, i) {
  if (e !== null) {
    var s = e.memoizedProps;
    if (cs(s, r) && e.ref === t.ref)
      if (((ze = !1), (t.pendingProps = r = s), (e.lanes & i) !== 0))
        e.flags & 131072 && (ze = !0);
      else return (t.lanes = e.lanes), an(e, t, i);
  }
  return Sc(e, t, n, r, i);
}
function wy(e, t, n) {
  var r = t.pendingProps,
    i = r.children,
    s = e !== null ? e.memoizedState : null;
  if (r.mode === "hidden")
    if (!(t.mode & 1))
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        q(kr, Ge),
        (Ge |= n);
    else {
      if (!(n & 1073741824))
        return (
          (e = s !== null ? s.baseLanes | n : n),
          (t.lanes = t.childLanes = 1073741824),
          (t.memoizedState = {
            baseLanes: e,
            cachePool: null,
            transitions: null,
          }),
          (t.updateQueue = null),
          q(kr, Ge),
          (Ge |= e),
          null
        );
      (t.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (r = s !== null ? s.baseLanes : n),
        q(kr, Ge),
        (Ge |= r);
    }
  else
    s !== null ? ((r = s.baseLanes | n), (t.memoizedState = null)) : (r = n),
      q(kr, Ge),
      (Ge |= r);
  return _e(e, t, i, n), t.child;
}
function xy(e, t) {
  var n = t.ref;
  ((e === null && n !== null) || (e !== null && e.ref !== n)) &&
    ((t.flags |= 512), (t.flags |= 2097152));
}
function Sc(e, t, n, r, i) {
  var s = Be(n) ? rr : $e.current;
  return (
    (s = Gr(t, s)),
    Br(t, i),
    (n = Rd(e, t, n, r, s, i)),
    (r = Bd()),
    e !== null && !ze
      ? ((t.updateQueue = e.updateQueue),
        (t.flags &= -2053),
        (e.lanes &= ~i),
        an(e, t, i))
      : (re && r && Pd(t), (t.flags |= 1), _e(e, t, n, i), t.child)
  );
}
function tm(e, t, n, r, i) {
  if (Be(n)) {
    var s = !0;
    ha(t);
  } else s = !1;
  if ((Br(t, i), t.stateNode === null))
    Yo(e, t), vy(t, n, r), wc(t, n, r, i), (r = !0);
  else if (e === null) {
    var o = t.stateNode,
      a = t.memoizedProps;
    o.props = a;
    var l = o.context,
      c = n.contextType;
    typeof c == "object" && c !== null
      ? (c = ut(c))
      : ((c = Be(n) ? rr : $e.current), (c = Gr(t, c)));
    var u = n.getDerivedStateFromProps,
      d =
        typeof u == "function" ||
        typeof o.getSnapshotBeforeUpdate == "function";
    d ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== r || l !== c) && Zp(t, o, r, c)),
      (xn = !1);
    var f = t.memoizedState;
    (o.state = f),
      Sa(t, r, o, i),
      (l = t.memoizedState),
      a !== r || f !== l || Re.current || xn
        ? (typeof u == "function" && (yc(t, n, u, r), (l = t.memoizedState)),
          (a = xn || Up(t, n, a, r, f, l, c))
            ? (d ||
                (typeof o.UNSAFE_componentWillMount != "function" &&
                  typeof o.componentWillMount != "function") ||
                (typeof o.componentWillMount == "function" &&
                  o.componentWillMount(),
                typeof o.UNSAFE_componentWillMount == "function" &&
                  o.UNSAFE_componentWillMount()),
              typeof o.componentDidMount == "function" && (t.flags |= 4194308))
            : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
              (t.memoizedProps = r),
              (t.memoizedState = l)),
          (o.props = r),
          (o.state = l),
          (o.context = c),
          (r = a))
        : (typeof o.componentDidMount == "function" && (t.flags |= 4194308),
          (r = !1));
  } else {
    (o = t.stateNode),
      Ug(e, t),
      (a = t.memoizedProps),
      (c = t.type === t.elementType ? a : xt(t.type, a)),
      (o.props = c),
      (d = t.pendingProps),
      (f = o.context),
      (l = n.contextType),
      typeof l == "object" && l !== null
        ? (l = ut(l))
        : ((l = Be(n) ? rr : $e.current), (l = Gr(t, l)));
    var g = n.getDerivedStateFromProps;
    (u =
      typeof g == "function" ||
      typeof o.getSnapshotBeforeUpdate == "function") ||
      (typeof o.UNSAFE_componentWillReceiveProps != "function" &&
        typeof o.componentWillReceiveProps != "function") ||
      ((a !== d || f !== l) && Zp(t, o, r, l)),
      (xn = !1),
      (f = t.memoizedState),
      (o.state = f),
      Sa(t, r, o, i);
    var y = t.memoizedState;
    a !== d || f !== y || Re.current || xn
      ? (typeof g == "function" && (yc(t, n, g, r), (y = t.memoizedState)),
        (c = xn || Up(t, n, c, r, f, y, l) || !1)
          ? (u ||
              (typeof o.UNSAFE_componentWillUpdate != "function" &&
                typeof o.componentWillUpdate != "function") ||
              (typeof o.componentWillUpdate == "function" &&
                o.componentWillUpdate(r, y, l),
              typeof o.UNSAFE_componentWillUpdate == "function" &&
                o.UNSAFE_componentWillUpdate(r, y, l)),
            typeof o.componentDidUpdate == "function" && (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024))
          : (typeof o.componentDidUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 4),
            typeof o.getSnapshotBeforeUpdate != "function" ||
              (a === e.memoizedProps && f === e.memoizedState) ||
              (t.flags |= 1024),
            (t.memoizedProps = r),
            (t.memoizedState = y)),
        (o.props = r),
        (o.state = y),
        (o.context = l),
        (r = c))
      : (typeof o.componentDidUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 4),
        typeof o.getSnapshotBeforeUpdate != "function" ||
          (a === e.memoizedProps && f === e.memoizedState) ||
          (t.flags |= 1024),
        (r = !1));
  }
  return Ec(e, t, n, r, s, i);
}
function Ec(e, t, n, r, i, s) {
  xy(e, t);
  var o = (t.flags & 128) !== 0;
  if (!r && !o) return i && Bp(t, n, !1), an(e, t, s);
  (r = t.stateNode), (uE.current = t);
  var a =
    o && typeof n.getDerivedStateFromError != "function" ? null : r.render();
  return (
    (t.flags |= 1),
    e !== null && o
      ? ((t.child = Xr(t, e.child, null, s)), (t.child = Xr(t, null, a, s)))
      : _e(e, t, a, s),
    (t.memoizedState = r.state),
    i && Bp(t, n, !0),
    t.child
  );
}
function Sy(e) {
  var t = e.stateNode;
  t.pendingContext
    ? Rp(e, t.pendingContext, t.pendingContext !== t.context)
    : t.context && Rp(e, t.context, !1),
    Ad(e, t.containerInfo);
}
function nm(e, t, n, r, i) {
  return Yr(), $d(i), (t.flags |= 256), _e(e, t, n, r), t.child;
}
var Ic = { dehydrated: null, treeContext: null, retryLane: 0 };
function Tc(e) {
  return { baseLanes: e, cachePool: null, transitions: null };
}
function Ey(e, t, n) {
  var r = t.pendingProps,
    i = se.current,
    s = !1,
    o = (t.flags & 128) !== 0,
    a;
  if (
    ((a = o) ||
      (a = e !== null && e.memoizedState === null ? !1 : (i & 2) !== 0),
    a
      ? ((s = !0), (t.flags &= -129))
      : (e === null || e.memoizedState !== null) && (i |= 1),
    q(se, i & 1),
    e === null)
  )
    return (
      hc(t),
      (e = t.memoizedState),
      e !== null && ((e = e.dehydrated), e !== null)
        ? (t.mode & 1
            ? e.data === "$!"
              ? (t.lanes = 8)
              : (t.lanes = 1073741824)
            : (t.lanes = 1),
          null)
        : ((o = r.children),
          (e = r.fallback),
          s
            ? ((r = t.mode),
              (s = t.child),
              (o = { mode: "hidden", children: o }),
              !(r & 1) && s !== null
                ? ((s.childLanes = 0), (s.pendingProps = o))
                : (s = tl(o, r, 0, null)),
              (e = tr(e, r, n, null)),
              (s.return = t),
              (e.return = t),
              (s.sibling = e),
              (t.child = s),
              (t.child.memoizedState = Tc(n)),
              (t.memoizedState = Ic),
              e)
            : Hd(t, o))
    );
  if (((i = e.memoizedState), i !== null && ((a = i.dehydrated), a !== null)))
    return cE(e, t, o, r, a, i, n);
  if (s) {
    (s = r.fallback), (o = t.mode), (i = e.child), (a = i.sibling);
    var l = { mode: "hidden", children: r.children };
    return (
      !(o & 1) && t.child !== i
        ? ((r = t.child),
          (r.childLanes = 0),
          (r.pendingProps = l),
          (t.deletions = null))
        : ((r = Nn(i, l)), (r.subtreeFlags = i.subtreeFlags & 14680064)),
      a !== null ? (s = Nn(a, s)) : ((s = tr(s, o, n, null)), (s.flags |= 2)),
      (s.return = t),
      (r.return = t),
      (r.sibling = s),
      (t.child = r),
      (r = s),
      (s = t.child),
      (o = e.child.memoizedState),
      (o =
        o === null
          ? Tc(n)
          : {
              baseLanes: o.baseLanes | n,
              cachePool: null,
              transitions: o.transitions,
            }),
      (s.memoizedState = o),
      (s.childLanes = e.childLanes & ~n),
      (t.memoizedState = Ic),
      r
    );
  }
  return (
    (s = e.child),
    (e = s.sibling),
    (r = Nn(s, { mode: "visible", children: r.children })),
    !(t.mode & 1) && (r.lanes = n),
    (r.return = t),
    (r.sibling = null),
    e !== null &&
      ((n = t.deletions),
      n === null ? ((t.deletions = [e]), (t.flags |= 16)) : n.push(e)),
    (t.child = r),
    (t.memoizedState = null),
    r
  );
}
function Hd(e, t) {
  return (
    (t = tl({ mode: "visible", children: t }, e.mode, 0, null)),
    (t.return = e),
    (e.child = t)
  );
}
function lo(e, t, n, r) {
  return (
    r !== null && $d(r),
    Xr(t, e.child, null, n),
    (e = Hd(t, t.pendingProps.children)),
    (e.flags |= 2),
    (t.memoizedState = null),
    e
  );
}
function cE(e, t, n, r, i, s, o) {
  if (n)
    return t.flags & 256
      ? ((t.flags &= -257), (r = Ul(Error(L(422)))), lo(e, t, o, r))
      : t.memoizedState !== null
      ? ((t.child = e.child), (t.flags |= 128), null)
      : ((s = r.fallback),
        (i = t.mode),
        (r = tl({ mode: "visible", children: r.children }, i, 0, null)),
        (s = tr(s, i, o, null)),
        (s.flags |= 2),
        (r.return = t),
        (s.return = t),
        (r.sibling = s),
        (t.child = r),
        t.mode & 1 && Xr(t, e.child, null, o),
        (t.child.memoizedState = Tc(o)),
        (t.memoizedState = Ic),
        s);
  if (!(t.mode & 1)) return lo(e, t, o, null);
  if (i.data === "$!") {
    if (((r = i.nextSibling && i.nextSibling.dataset), r)) var a = r.dgst;
    return (r = a), (s = Error(L(419))), (r = Ul(s, r, void 0)), lo(e, t, o, r);
  }
  if (((a = (o & e.childLanes) !== 0), ze || a)) {
    if (((r = we), r !== null)) {
      switch (o & -o) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
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
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (r.suspendedLanes | o) ? 0 : i),
        i !== 0 &&
          i !== s.retryLane &&
          ((s.retryLane = i), on(e, i), Ct(r, e, i, -1));
    }
    return Zd(), (r = Ul(Error(L(421)))), lo(e, t, o, r);
  }
  return i.data === "$?"
    ? ((t.flags |= 128),
      (t.child = e.child),
      (t = IE.bind(null, e)),
      (i._reactRetry = t),
      null)
    : ((e = s.treeContext),
      (Xe = $n(i.nextSibling)),
      (Ue = t),
      (re = !0),
      (Et = null),
      e !== null &&
        ((it[st++] = Jt),
        (it[st++] = en),
        (it[st++] = ir),
        (Jt = e.id),
        (en = e.overflow),
        (ir = t)),
      (t = Hd(t, r.children)),
      (t.flags |= 4096),
      t);
}
function rm(e, t, n) {
  e.lanes |= t;
  var r = e.alternate;
  r !== null && (r.lanes |= t), gc(e.return, t, n);
}
function Zl(e, t, n, r, i) {
  var s = e.memoizedState;
  s === null
    ? (e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: r,
        tail: n,
        tailMode: i,
      })
    : ((s.isBackwards = t),
      (s.rendering = null),
      (s.renderingStartTime = 0),
      (s.last = r),
      (s.tail = n),
      (s.tailMode = i));
}
function Iy(e, t, n) {
  var r = t.pendingProps,
    i = r.revealOrder,
    s = r.tail;
  if ((_e(e, t, r.children, n), (r = se.current), r & 2))
    (r = (r & 1) | 2), (t.flags |= 128);
  else {
    if (e !== null && e.flags & 128)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13) e.memoizedState !== null && rm(e, n, t);
        else if (e.tag === 19) rm(e, n, t);
        else if (e.child !== null) {
          (e.child.return = e), (e = e.child);
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t) break e;
          e = e.return;
        }
        (e.sibling.return = e.return), (e = e.sibling);
      }
    r &= 1;
  }
  if ((q(se, r), !(t.mode & 1))) t.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (n = t.child, i = null; n !== null; )
          (e = n.alternate),
            e !== null && Ea(e) === null && (i = n),
            (n = n.sibling);
        (n = i),
          n === null
            ? ((i = t.child), (t.child = null))
            : ((i = n.sibling), (n.sibling = null)),
          Zl(t, !1, i, n, s);
        break;
      case "backwards":
        for (n = null, i = t.child, t.child = null; i !== null; ) {
          if (((e = i.alternate), e !== null && Ea(e) === null)) {
            t.child = i;
            break;
          }
          (e = i.sibling), (i.sibling = n), (n = i), (i = e);
        }
        Zl(t, !0, n, null, s);
        break;
      case "together":
        Zl(t, !1, null, null, void 0);
        break;
      default:
        t.memoizedState = null;
    }
  return t.child;
}
function Yo(e, t) {
  !(t.mode & 1) &&
    e !== null &&
    ((e.alternate = null), (t.alternate = null), (t.flags |= 2));
}
function an(e, t, n) {
  if (
    (e !== null && (t.dependencies = e.dependencies),
    (or |= t.lanes),
    !(n & t.childLanes))
  )
    return null;
  if (e !== null && t.child !== e.child) throw Error(L(153));
  if (t.child !== null) {
    for (
      e = t.child, n = Nn(e, e.pendingProps), t.child = n, n.return = t;
      e.sibling !== null;

    )
      (e = e.sibling), (n = n.sibling = Nn(e, e.pendingProps)), (n.return = t);
    n.sibling = null;
  }
  return t.child;
}
function dE(e, t, n) {
  switch (t.tag) {
    case 3:
      Sy(t), Yr();
      break;
    case 5:
      Zg(t);
      break;
    case 1:
      Be(t.type) && ha(t);
      break;
    case 4:
      Ad(t, t.stateNode.containerInfo);
      break;
    case 10:
      var r = t.type._context,
        i = t.memoizedProps.value;
      q(wa, r._currentValue), (r._currentValue = i);
      break;
    case 13:
      if (((r = t.memoizedState), r !== null))
        return r.dehydrated !== null
          ? (q(se, se.current & 1), (t.flags |= 128), null)
          : n & t.child.childLanes
          ? Ey(e, t, n)
          : (q(se, se.current & 1),
            (e = an(e, t, n)),
            e !== null ? e.sibling : null);
      q(se, se.current & 1);
      break;
    case 19:
      if (((r = (n & t.childLanes) !== 0), e.flags & 128)) {
        if (r) return Iy(e, t, n);
        t.flags |= 128;
      }
      if (
        ((i = t.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        q(se, se.current),
        r)
      )
        break;
      return null;
    case 22:
    case 23:
      return (t.lanes = 0), wy(e, t, n);
  }
  return an(e, t, n);
}
var Ty, Cc, Cy, by;
Ty = function (e, t) {
  for (var n = t.child; n !== null; ) {
    if (n.tag === 5 || n.tag === 6) e.appendChild(n.stateNode);
    else if (n.tag !== 4 && n.child !== null) {
      (n.child.return = n), (n = n.child);
      continue;
    }
    if (n === t) break;
    for (; n.sibling === null; ) {
      if (n.return === null || n.return === t) return;
      n = n.return;
    }
    (n.sibling.return = n.return), (n = n.sibling);
  }
};
Cc = function () {};
Cy = function (e, t, n, r) {
  var i = e.memoizedProps;
  if (i !== r) {
    (e = t.stateNode), Jn(zt.current);
    var s = null;
    switch (n) {
      case "input":
        (i = Xu(e, i)), (r = Xu(e, r)), (s = []);
        break;
      case "select":
        (i = ae({}, i, { value: void 0 })),
          (r = ae({}, r, { value: void 0 })),
          (s = []);
        break;
      case "textarea":
        (i = Ku(e, i)), (r = Ku(e, r)), (s = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof r.onClick == "function" &&
          (e.onclick = ma);
    }
    qu(n, r);
    var o;
    n = null;
    for (c in i)
      if (!r.hasOwnProperty(c) && i.hasOwnProperty(c) && i[c] != null)
        if (c === "style") {
          var a = i[c];
          for (o in a) a.hasOwnProperty(o) && (n || (n = {}), (n[o] = ""));
        } else
          c !== "dangerouslySetInnerHTML" &&
            c !== "children" &&
            c !== "suppressContentEditableWarning" &&
            c !== "suppressHydrationWarning" &&
            c !== "autoFocus" &&
            (rs.hasOwnProperty(c)
              ? s || (s = [])
              : (s = s || []).push(c, null));
    for (c in r) {
      var l = r[c];
      if (
        ((a = i != null ? i[c] : void 0),
        r.hasOwnProperty(c) && l !== a && (l != null || a != null))
      )
        if (c === "style")
          if (a) {
            for (o in a)
              !a.hasOwnProperty(o) ||
                (l && l.hasOwnProperty(o)) ||
                (n || (n = {}), (n[o] = ""));
            for (o in l)
              l.hasOwnProperty(o) &&
                a[o] !== l[o] &&
                (n || (n = {}), (n[o] = l[o]));
          } else n || (s || (s = []), s.push(c, n)), (n = l);
        else
          c === "dangerouslySetInnerHTML"
            ? ((l = l ? l.__html : void 0),
              (a = a ? a.__html : void 0),
              l != null && a !== l && (s = s || []).push(c, l))
            : c === "children"
            ? (typeof l != "string" && typeof l != "number") ||
              (s = s || []).push(c, "" + l)
            : c !== "suppressContentEditableWarning" &&
              c !== "suppressHydrationWarning" &&
              (rs.hasOwnProperty(c)
                ? (l != null && c === "onScroll" && ee("scroll", e),
                  s || a === l || (s = []))
                : (s = s || []).push(c, l));
    }
    n && (s = s || []).push("style", n);
    var c = s;
    (t.updateQueue = c) && (t.flags |= 4);
  }
};
by = function (e, t, n, r) {
  n !== r && (t.flags |= 4);
};
function Ti(e, t) {
  if (!re)
    switch (e.tailMode) {
      case "hidden":
        t = e.tail;
        for (var n = null; t !== null; )
          t.alternate !== null && (n = t), (t = t.sibling);
        n === null ? (e.tail = null) : (n.sibling = null);
        break;
      case "collapsed":
        n = e.tail;
        for (var r = null; n !== null; )
          n.alternate !== null && (r = n), (n = n.sibling);
        r === null
          ? t || e.tail === null
            ? (e.tail = null)
            : (e.tail.sibling = null)
          : (r.sibling = null);
    }
}
function Pe(e) {
  var t = e.alternate !== null && e.alternate.child === e.child,
    n = 0,
    r = 0;
  if (t)
    for (var i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags & 14680064),
        (r |= i.flags & 14680064),
        (i.return = e),
        (i = i.sibling);
  else
    for (i = e.child; i !== null; )
      (n |= i.lanes | i.childLanes),
        (r |= i.subtreeFlags),
        (r |= i.flags),
        (i.return = e),
        (i = i.sibling);
  return (e.subtreeFlags |= r), (e.childLanes = n), t;
}
function fE(e, t, n) {
  var r = t.pendingProps;
  switch ((jd(t), t.tag)) {
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
      return Pe(t), null;
    case 1:
      return Be(t.type) && va(), Pe(t), null;
    case 3:
      return (
        (r = t.stateNode),
        Ur(),
        te(Re),
        te($e),
        Dd(),
        r.pendingContext &&
          ((r.context = r.pendingContext), (r.pendingContext = null)),
        (e === null || e.child === null) &&
          (oo(t)
            ? (t.flags |= 4)
            : e === null ||
              (e.memoizedState.isDehydrated && !(t.flags & 256)) ||
              ((t.flags |= 1024), Et !== null && (Nc(Et), (Et = null)))),
        Cc(e, t),
        Pe(t),
        null
      );
    case 5:
      Ld(t);
      var i = Jn(vs.current);
      if (((n = t.type), e !== null && t.stateNode != null))
        Cy(e, t, n, r, i),
          e.ref !== t.ref && ((t.flags |= 512), (t.flags |= 2097152));
      else {
        if (!r) {
          if (t.stateNode === null) throw Error(L(166));
          return Pe(t), null;
        }
        if (((e = Jn(zt.current)), oo(t))) {
          (r = t.stateNode), (n = t.type);
          var s = t.memoizedProps;
          switch (((r[Lt] = t), (r[ps] = s), (e = (t.mode & 1) !== 0), n)) {
            case "dialog":
              ee("cancel", r), ee("close", r);
              break;
            case "iframe":
            case "object":
            case "embed":
              ee("load", r);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Fi.length; i++) ee(Fi[i], r);
              break;
            case "source":
              ee("error", r);
              break;
            case "img":
            case "image":
            case "link":
              ee("error", r), ee("load", r);
              break;
            case "details":
              ee("toggle", r);
              break;
            case "input":
              fp(r, s), ee("invalid", r);
              break;
            case "select":
              (r._wrapperState = { wasMultiple: !!s.multiple }),
                ee("invalid", r);
              break;
            case "textarea":
              mp(r, s), ee("invalid", r);
          }
          qu(n, s), (i = null);
          for (var o in s)
            if (s.hasOwnProperty(o)) {
              var a = s[o];
              o === "children"
                ? typeof a == "string"
                  ? r.textContent !== a &&
                    (s.suppressHydrationWarning !== !0 &&
                      so(r.textContent, a, e),
                    (i = ["children", a]))
                  : typeof a == "number" &&
                    r.textContent !== "" + a &&
                    (s.suppressHydrationWarning !== !0 &&
                      so(r.textContent, a, e),
                    (i = ["children", "" + a]))
                : rs.hasOwnProperty(o) &&
                  a != null &&
                  o === "onScroll" &&
                  ee("scroll", r);
            }
          switch (n) {
            case "input":
              Qs(r), pp(r, s, !0);
              break;
            case "textarea":
              Qs(r), vp(r);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof s.onClick == "function" && (r.onclick = ma);
          }
          (r = i), (t.updateQueue = r), r !== null && (t.flags |= 4);
        } else {
          (o = i.nodeType === 9 ? i : i.ownerDocument),
            e === "http://www.w3.org/1999/xhtml" && (e = eg(n)),
            e === "http://www.w3.org/1999/xhtml"
              ? n === "script"
                ? ((e = o.createElement("div")),
                  (e.innerHTML = "<script></script>"),
                  (e = e.removeChild(e.firstChild)))
                : typeof r.is == "string"
                ? (e = o.createElement(n, { is: r.is }))
                : ((e = o.createElement(n)),
                  n === "select" &&
                    ((o = e),
                    r.multiple
                      ? (o.multiple = !0)
                      : r.size && (o.size = r.size)))
              : (e = o.createElementNS(e, n)),
            (e[Lt] = t),
            (e[ps] = r),
            Ty(e, t, !1, !1),
            (t.stateNode = e);
          e: {
            switch (((o = Ju(n, r)), n)) {
              case "dialog":
                ee("cancel", e), ee("close", e), (i = r);
                break;
              case "iframe":
              case "object":
              case "embed":
                ee("load", e), (i = r);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Fi.length; i++) ee(Fi[i], e);
                i = r;
                break;
              case "source":
                ee("error", e), (i = r);
                break;
              case "img":
              case "image":
              case "link":
                ee("error", e), ee("load", e), (i = r);
                break;
              case "details":
                ee("toggle", e), (i = r);
                break;
              case "input":
                fp(e, r), (i = Xu(e, r)), ee("invalid", e);
                break;
              case "option":
                i = r;
                break;
              case "select":
                (e._wrapperState = { wasMultiple: !!r.multiple }),
                  (i = ae({}, r, { value: void 0 })),
                  ee("invalid", e);
                break;
              case "textarea":
                mp(e, r), (i = Ku(e, r)), ee("invalid", e);
                break;
              default:
                i = r;
            }
            qu(n, i), (a = i);
            for (s in a)
              if (a.hasOwnProperty(s)) {
                var l = a[s];
                s === "style"
                  ? rg(e, l)
                  : s === "dangerouslySetInnerHTML"
                  ? ((l = l ? l.__html : void 0), l != null && tg(e, l))
                  : s === "children"
                  ? typeof l == "string"
                    ? (n !== "textarea" || l !== "") && is(e, l)
                    : typeof l == "number" && is(e, "" + l)
                  : s !== "suppressContentEditableWarning" &&
                    s !== "suppressHydrationWarning" &&
                    s !== "autoFocus" &&
                    (rs.hasOwnProperty(s)
                      ? l != null && s === "onScroll" && ee("scroll", e)
                      : l != null && pd(e, s, l, o));
              }
            switch (n) {
              case "input":
                Qs(e), pp(e, r, !1);
                break;
              case "textarea":
                Qs(e), vp(e);
                break;
              case "option":
                r.value != null && e.setAttribute("value", "" + kn(r.value));
                break;
              case "select":
                (e.multiple = !!r.multiple),
                  (s = r.value),
                  s != null
                    ? Lr(e, !!r.multiple, s, !1)
                    : r.defaultValue != null &&
                      Lr(e, !!r.multiple, r.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (e.onclick = ma);
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
        t.ref !== null && ((t.flags |= 512), (t.flags |= 2097152));
      }
      return Pe(t), null;
    case 6:
      if (e && t.stateNode != null) by(e, t, e.memoizedProps, r);
      else {
        if (typeof r != "string" && t.stateNode === null) throw Error(L(166));
        if (((n = Jn(vs.current)), Jn(zt.current), oo(t))) {
          if (
            ((r = t.stateNode),
            (n = t.memoizedProps),
            (r[Lt] = t),
            (s = r.nodeValue !== n) && ((e = Ue), e !== null))
          )
            switch (e.tag) {
              case 3:
                so(r.nodeValue, n, (e.mode & 1) !== 0);
                break;
              case 5:
                e.memoizedProps.suppressHydrationWarning !== !0 &&
                  so(r.nodeValue, n, (e.mode & 1) !== 0);
            }
          s && (t.flags |= 4);
        } else
          (r = (n.nodeType === 9 ? n : n.ownerDocument).createTextNode(r)),
            (r[Lt] = t),
            (t.stateNode = r);
      }
      return Pe(t), null;
    case 13:
      if (
        (te(se),
        (r = t.memoizedState),
        e === null ||
          (e.memoizedState !== null && e.memoizedState.dehydrated !== null))
      ) {
        if (re && Xe !== null && t.mode & 1 && !(t.flags & 128))
          Vg(), Yr(), (t.flags |= 98560), (s = !1);
        else if (((s = oo(t)), r !== null && r.dehydrated !== null)) {
          if (e === null) {
            if (!s) throw Error(L(318));
            if (
              ((s = t.memoizedState),
              (s = s !== null ? s.dehydrated : null),
              !s)
            )
              throw Error(L(317));
            s[Lt] = t;
          } else
            Yr(), !(t.flags & 128) && (t.memoizedState = null), (t.flags |= 4);
          Pe(t), (s = !1);
        } else Et !== null && (Nc(Et), (Et = null)), (s = !0);
        if (!s) return t.flags & 65536 ? t : null;
      }
      return t.flags & 128
        ? ((t.lanes = n), t)
        : ((r = r !== null),
          r !== (e !== null && e.memoizedState !== null) &&
            r &&
            ((t.child.flags |= 8192),
            t.mode & 1 &&
              (e === null || se.current & 1 ? he === 0 && (he = 3) : Zd())),
          t.updateQueue !== null && (t.flags |= 4),
          Pe(t),
          null);
    case 4:
      return (
        Ur(), Cc(e, t), e === null && ds(t.stateNode.containerInfo), Pe(t), null
      );
    case 10:
      return Md(t.type._context), Pe(t), null;
    case 17:
      return Be(t.type) && va(), Pe(t), null;
    case 19:
      if ((te(se), (s = t.memoizedState), s === null)) return Pe(t), null;
      if (((r = (t.flags & 128) !== 0), (o = s.rendering), o === null))
        if (r) Ti(s, !1);
        else {
          if (he !== 0 || (e !== null && e.flags & 128))
            for (e = t.child; e !== null; ) {
              if (((o = Ea(e)), o !== null)) {
                for (
                  t.flags |= 128,
                    Ti(s, !1),
                    r = o.updateQueue,
                    r !== null && ((t.updateQueue = r), (t.flags |= 4)),
                    t.subtreeFlags = 0,
                    r = n,
                    n = t.child;
                  n !== null;

                )
                  (s = n),
                    (e = r),
                    (s.flags &= 14680066),
                    (o = s.alternate),
                    o === null
                      ? ((s.childLanes = 0),
                        (s.lanes = e),
                        (s.child = null),
                        (s.subtreeFlags = 0),
                        (s.memoizedProps = null),
                        (s.memoizedState = null),
                        (s.updateQueue = null),
                        (s.dependencies = null),
                        (s.stateNode = null))
                      : ((s.childLanes = o.childLanes),
                        (s.lanes = o.lanes),
                        (s.child = o.child),
                        (s.subtreeFlags = 0),
                        (s.deletions = null),
                        (s.memoizedProps = o.memoizedProps),
                        (s.memoizedState = o.memoizedState),
                        (s.updateQueue = o.updateQueue),
                        (s.type = o.type),
                        (e = o.dependencies),
                        (s.dependencies =
                          e === null
                            ? null
                            : {
                                lanes: e.lanes,
                                firstContext: e.firstContext,
                              })),
                    (n = n.sibling);
                return q(se, (se.current & 1) | 2), t.child;
              }
              e = e.sibling;
            }
          s.tail !== null &&
            de() > Kr &&
            ((t.flags |= 128), (r = !0), Ti(s, !1), (t.lanes = 4194304));
        }
      else {
        if (!r)
          if (((e = Ea(o)), e !== null)) {
            if (
              ((t.flags |= 128),
              (r = !0),
              (n = e.updateQueue),
              n !== null && ((t.updateQueue = n), (t.flags |= 4)),
              Ti(s, !0),
              s.tail === null && s.tailMode === "hidden" && !o.alternate && !re)
            )
              return Pe(t), null;
          } else
            2 * de() - s.renderingStartTime > Kr &&
              n !== 1073741824 &&
              ((t.flags |= 128), (r = !0), Ti(s, !1), (t.lanes = 4194304));
        s.isBackwards
          ? ((o.sibling = t.child), (t.child = o))
          : ((n = s.last),
            n !== null ? (n.sibling = o) : (t.child = o),
            (s.last = o));
      }
      return s.tail !== null
        ? ((t = s.tail),
          (s.rendering = t),
          (s.tail = t.sibling),
          (s.renderingStartTime = de()),
          (t.sibling = null),
          (n = se.current),
          q(se, r ? (n & 1) | 2 : n & 1),
          t)
        : (Pe(t), null);
    case 22:
    case 23:
      return (
        Ud(),
        (r = t.memoizedState !== null),
        e !== null && (e.memoizedState !== null) !== r && (t.flags |= 8192),
        r && t.mode & 1
          ? Ge & 1073741824 && (Pe(t), t.subtreeFlags & 6 && (t.flags |= 8192))
          : Pe(t),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(L(156, t.tag));
}
function pE(e, t) {
  switch ((jd(t), t.tag)) {
    case 1:
      return (
        Be(t.type) && va(),
        (e = t.flags),
        e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 3:
      return (
        Ur(),
        te(Re),
        te($e),
        Dd(),
        (e = t.flags),
        e & 65536 && !(e & 128) ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 5:
      return Ld(t), null;
    case 13:
      if (
        (te(se), (e = t.memoizedState), e !== null && e.dehydrated !== null)
      ) {
        if (t.alternate === null) throw Error(L(340));
        Yr();
      }
      return (
        (e = t.flags), e & 65536 ? ((t.flags = (e & -65537) | 128), t) : null
      );
    case 19:
      return te(se), null;
    case 4:
      return Ur(), null;
    case 10:
      return Md(t.type._context), null;
    case 22:
    case 23:
      return Ud(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var uo = !1,
  je = !1,
  mE = typeof WeakSet == "function" ? WeakSet : Set,
  B = null;
function Nr(e, t) {
  var n = e.ref;
  if (n !== null)
    if (typeof n == "function")
      try {
        n(null);
      } catch (r) {
        ue(e, t, r);
      }
    else n.current = null;
}
function bc(e, t, n) {
  try {
    n();
  } catch (r) {
    ue(e, t, r);
  }
}
var im = !1;
function vE(e, t) {
  if (((uc = da), (e = Og()), bd(e))) {
    if ("selectionStart" in e)
      var n = { start: e.selectionStart, end: e.selectionEnd };
    else
      e: {
        n = ((n = e.ownerDocument) && n.defaultView) || window;
        var r = n.getSelection && n.getSelection();
        if (r && r.rangeCount !== 0) {
          n = r.anchorNode;
          var i = r.anchorOffset,
            s = r.focusNode;
          r = r.focusOffset;
          try {
            n.nodeType, s.nodeType;
          } catch {
            n = null;
            break e;
          }
          var o = 0,
            a = -1,
            l = -1,
            c = 0,
            u = 0,
            d = e,
            f = null;
          t: for (;;) {
            for (
              var g;
              d !== n || (i !== 0 && d.nodeType !== 3) || (a = o + i),
                d !== s || (r !== 0 && d.nodeType !== 3) || (l = o + r),
                d.nodeType === 3 && (o += d.nodeValue.length),
                (g = d.firstChild) !== null;

            )
              (f = d), (d = g);
            for (;;) {
              if (d === e) break t;
              if (
                (f === n && ++c === i && (a = o),
                f === s && ++u === r && (l = o),
                (g = d.nextSibling) !== null)
              )
                break;
              (d = f), (f = d.parentNode);
            }
            d = g;
          }
          n = a === -1 || l === -1 ? null : { start: a, end: l };
        } else n = null;
      }
    n = n || { start: 0, end: 0 };
  } else n = null;
  for (cc = { focusedElem: e, selectionRange: n }, da = !1, B = t; B !== null; )
    if (((t = B), (e = t.child), (t.subtreeFlags & 1028) !== 0 && e !== null))
      (e.return = t), (B = e);
    else
      for (; B !== null; ) {
        t = B;
        try {
          var y = t.alternate;
          if (t.flags & 1024)
            switch (t.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (y !== null) {
                  var w = y.memoizedProps,
                    I = y.memoizedState,
                    v = t.stateNode,
                    m = v.getSnapshotBeforeUpdate(
                      t.elementType === t.type ? w : xt(t.type, w),
                      I
                    );
                  v.__reactInternalSnapshotBeforeUpdate = m;
                }
                break;
              case 3:
                var h = t.stateNode.containerInfo;
                h.nodeType === 1
                  ? (h.textContent = "")
                  : h.nodeType === 9 &&
                    h.documentElement &&
                    h.removeChild(h.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(L(163));
            }
        } catch (x) {
          ue(t, t.return, x);
        }
        if (((e = t.sibling), e !== null)) {
          (e.return = t.return), (B = e);
          break;
        }
        B = t.return;
      }
  return (y = im), (im = !1), y;
}
function Ui(e, t, n) {
  var r = t.updateQueue;
  if (((r = r !== null ? r.lastEffect : null), r !== null)) {
    var i = (r = r.next);
    do {
      if ((i.tag & e) === e) {
        var s = i.destroy;
        (i.destroy = void 0), s !== void 0 && bc(t, n, s);
      }
      i = i.next;
    } while (i !== r);
  }
}
function Ja(e, t) {
  if (
    ((t = t.updateQueue), (t = t !== null ? t.lastEffect : null), t !== null)
  ) {
    var n = (t = t.next);
    do {
      if ((n.tag & e) === e) {
        var r = n.create;
        n.destroy = r();
      }
      n = n.next;
    } while (n !== t);
  }
}
function Pc(e) {
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
    typeof t == "function" ? t(e) : (t.current = e);
  }
}
function Py(e) {
  var t = e.alternate;
  t !== null && ((e.alternate = null), Py(t)),
    (e.child = null),
    (e.deletions = null),
    (e.sibling = null),
    e.tag === 5 &&
      ((t = e.stateNode),
      t !== null &&
        (delete t[Lt], delete t[ps], delete t[pc], delete t[Q1], delete t[q1])),
    (e.stateNode = null),
    (e.return = null),
    (e.dependencies = null),
    (e.memoizedProps = null),
    (e.memoizedState = null),
    (e.pendingProps = null),
    (e.stateNode = null),
    (e.updateQueue = null);
}
function jy(e) {
  return e.tag === 5 || e.tag === 3 || e.tag === 4;
}
function sm(e) {
  e: for (;;) {
    for (; e.sibling === null; ) {
      if (e.return === null || jy(e.return)) return null;
      e = e.return;
    }
    for (
      e.sibling.return = e.return, e = e.sibling;
      e.tag !== 5 && e.tag !== 6 && e.tag !== 18;

    ) {
      if (e.flags & 2 || e.child === null || e.tag === 4) continue e;
      (e.child.return = e), (e = e.child);
    }
    if (!(e.flags & 2)) return e.stateNode;
  }
}
function jc(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode),
      t
        ? n.nodeType === 8
          ? n.parentNode.insertBefore(e, t)
          : n.insertBefore(e, t)
        : (n.nodeType === 8
            ? ((t = n.parentNode), t.insertBefore(e, n))
            : ((t = n), t.appendChild(e)),
          (n = n._reactRootContainer),
          n != null || t.onclick !== null || (t.onclick = ma));
  else if (r !== 4 && ((e = e.child), e !== null))
    for (jc(e, t, n), e = e.sibling; e !== null; ) jc(e, t, n), (e = e.sibling);
}
function $c(e, t, n) {
  var r = e.tag;
  if (r === 5 || r === 6)
    (e = e.stateNode), t ? n.insertBefore(e, t) : n.appendChild(e);
  else if (r !== 4 && ((e = e.child), e !== null))
    for ($c(e, t, n), e = e.sibling; e !== null; ) $c(e, t, n), (e = e.sibling);
}
var Se = null,
  St = !1;
function hn(e, t, n) {
  for (n = n.child; n !== null; ) $y(e, t, n), (n = n.sibling);
}
function $y(e, t, n) {
  if (Dt && typeof Dt.onCommitFiberUnmount == "function")
    try {
      Dt.onCommitFiberUnmount(Ga, n);
    } catch {}
  switch (n.tag) {
    case 5:
      je || Nr(n, t);
    case 6:
      var r = Se,
        i = St;
      (Se = null),
        hn(e, t, n),
        (Se = r),
        (St = i),
        Se !== null &&
          (St
            ? ((e = Se),
              (n = n.stateNode),
              e.nodeType === 8 ? e.parentNode.removeChild(n) : e.removeChild(n))
            : Se.removeChild(n.stateNode));
      break;
    case 18:
      Se !== null &&
        (St
          ? ((e = Se),
            (n = n.stateNode),
            e.nodeType === 8
              ? Wl(e.parentNode, n)
              : e.nodeType === 1 && Wl(e, n),
            ls(e))
          : Wl(Se, n.stateNode));
      break;
    case 4:
      (r = Se),
        (i = St),
        (Se = n.stateNode.containerInfo),
        (St = !0),
        hn(e, t, n),
        (Se = r),
        (St = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !je &&
        ((r = n.updateQueue), r !== null && ((r = r.lastEffect), r !== null))
      ) {
        i = r = r.next;
        do {
          var s = i,
            o = s.destroy;
          (s = s.tag),
            o !== void 0 && (s & 2 || s & 4) && bc(n, t, o),
            (i = i.next);
        } while (i !== r);
      }
      hn(e, t, n);
      break;
    case 1:
      if (
        !je &&
        (Nr(n, t),
        (r = n.stateNode),
        typeof r.componentWillUnmount == "function")
      )
        try {
          (r.props = n.memoizedProps),
            (r.state = n.memoizedState),
            r.componentWillUnmount();
        } catch (a) {
          ue(n, t, a);
        }
      hn(e, t, n);
      break;
    case 21:
      hn(e, t, n);
      break;
    case 22:
      n.mode & 1
        ? ((je = (r = je) || n.memoizedState !== null), hn(e, t, n), (je = r))
        : hn(e, t, n);
      break;
    default:
      hn(e, t, n);
  }
}
function om(e) {
  var t = e.updateQueue;
  if (t !== null) {
    e.updateQueue = null;
    var n = e.stateNode;
    n === null && (n = e.stateNode = new mE()),
      t.forEach(function (r) {
        var i = TE.bind(null, e, r);
        n.has(r) || (n.add(r), r.then(i, i));
      });
  }
}
function wt(e, t) {
  var n = t.deletions;
  if (n !== null)
    for (var r = 0; r < n.length; r++) {
      var i = n[r];
      try {
        var s = e,
          o = t,
          a = o;
        e: for (; a !== null; ) {
          switch (a.tag) {
            case 5:
              (Se = a.stateNode), (St = !1);
              break e;
            case 3:
              (Se = a.stateNode.containerInfo), (St = !0);
              break e;
            case 4:
              (Se = a.stateNode.containerInfo), (St = !0);
              break e;
          }
          a = a.return;
        }
        if (Se === null) throw Error(L(160));
        $y(s, o, i), (Se = null), (St = !1);
        var l = i.alternate;
        l !== null && (l.return = null), (i.return = null);
      } catch (c) {
        ue(i, t, c);
      }
    }
  if (t.subtreeFlags & 12854)
    for (t = t.child; t !== null; ) _y(t, e), (t = t.sibling);
}
function _y(e, t) {
  var n = e.alternate,
    r = e.flags;
  switch (e.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((wt(t, e), Ot(e), r & 4)) {
        try {
          Ui(3, e, e.return), Ja(3, e);
        } catch (w) {
          ue(e, e.return, w);
        }
        try {
          Ui(5, e, e.return);
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      break;
    case 1:
      wt(t, e), Ot(e), r & 512 && n !== null && Nr(n, n.return);
      break;
    case 5:
      if (
        (wt(t, e),
        Ot(e),
        r & 512 && n !== null && Nr(n, n.return),
        e.flags & 32)
      ) {
        var i = e.stateNode;
        try {
          is(i, "");
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      if (r & 4 && ((i = e.stateNode), i != null)) {
        var s = e.memoizedProps,
          o = n !== null ? n.memoizedProps : s,
          a = e.type,
          l = e.updateQueue;
        if (((e.updateQueue = null), l !== null))
          try {
            a === "input" && s.type === "radio" && s.name != null && qh(i, s),
              Ju(a, o);
            var c = Ju(a, s);
            for (o = 0; o < l.length; o += 2) {
              var u = l[o],
                d = l[o + 1];
              u === "style"
                ? rg(i, d)
                : u === "dangerouslySetInnerHTML"
                ? tg(i, d)
                : u === "children"
                ? is(i, d)
                : pd(i, u, d, c);
            }
            switch (a) {
              case "input":
                Uu(i, s);
                break;
              case "textarea":
                Jh(i, s);
                break;
              case "select":
                var f = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!s.multiple;
                var g = s.value;
                g != null
                  ? Lr(i, !!s.multiple, g, !1)
                  : f !== !!s.multiple &&
                    (s.defaultValue != null
                      ? Lr(i, !!s.multiple, s.defaultValue, !0)
                      : Lr(i, !!s.multiple, s.multiple ? [] : "", !1));
            }
            i[ps] = s;
          } catch (w) {
            ue(e, e.return, w);
          }
      }
      break;
    case 6:
      if ((wt(t, e), Ot(e), r & 4)) {
        if (e.stateNode === null) throw Error(L(162));
        (i = e.stateNode), (s = e.memoizedProps);
        try {
          i.nodeValue = s;
        } catch (w) {
          ue(e, e.return, w);
        }
      }
      break;
    case 3:
      if (
        (wt(t, e), Ot(e), r & 4 && n !== null && n.memoizedState.isDehydrated)
      )
        try {
          ls(t.containerInfo);
        } catch (w) {
          ue(e, e.return, w);
        }
      break;
    case 4:
      wt(t, e), Ot(e);
      break;
    case 13:
      wt(t, e),
        Ot(e),
        (i = e.child),
        i.flags & 8192 &&
          ((s = i.memoizedState !== null),
          (i.stateNode.isHidden = s),
          !s ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (Yd = de())),
        r & 4 && om(e);
      break;
    case 22:
      if (
        ((u = n !== null && n.memoizedState !== null),
        e.mode & 1 ? ((je = (c = je) || u), wt(t, e), (je = c)) : wt(t, e),
        Ot(e),
        r & 8192)
      ) {
        if (
          ((c = e.memoizedState !== null),
          (e.stateNode.isHidden = c) && !u && e.mode & 1)
        )
          for (B = e, u = e.child; u !== null; ) {
            for (d = B = u; B !== null; ) {
              switch (((f = B), (g = f.child), f.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Ui(4, f, f.return);
                  break;
                case 1:
                  Nr(f, f.return);
                  var y = f.stateNode;
                  if (typeof y.componentWillUnmount == "function") {
                    (r = f), (n = f.return);
                    try {
                      (t = r),
                        (y.props = t.memoizedProps),
                        (y.state = t.memoizedState),
                        y.componentWillUnmount();
                    } catch (w) {
                      ue(r, n, w);
                    }
                  }
                  break;
                case 5:
                  Nr(f, f.return);
                  break;
                case 22:
                  if (f.memoizedState !== null) {
                    lm(d);
                    continue;
                  }
              }
              g !== null ? ((g.return = f), (B = g)) : lm(d);
            }
            u = u.sibling;
          }
        e: for (u = null, d = e; ; ) {
          if (d.tag === 5) {
            if (u === null) {
              u = d;
              try {
                (i = d.stateNode),
                  c
                    ? ((s = i.style),
                      typeof s.setProperty == "function"
                        ? s.setProperty("display", "none", "important")
                        : (s.display = "none"))
                    : ((a = d.stateNode),
                      (l = d.memoizedProps.style),
                      (o =
                        l != null && l.hasOwnProperty("display")
                          ? l.display
                          : null),
                      (a.style.display = ng("display", o)));
              } catch (w) {
                ue(e, e.return, w);
              }
            }
          } else if (d.tag === 6) {
            if (u === null)
              try {
                d.stateNode.nodeValue = c ? "" : d.memoizedProps;
              } catch (w) {
                ue(e, e.return, w);
              }
          } else if (
            ((d.tag !== 22 && d.tag !== 23) ||
              d.memoizedState === null ||
              d === e) &&
            d.child !== null
          ) {
            (d.child.return = d), (d = d.child);
            continue;
          }
          if (d === e) break e;
          for (; d.sibling === null; ) {
            if (d.return === null || d.return === e) break e;
            u === d && (u = null), (d = d.return);
          }
          u === d && (u = null), (d.sibling.return = d.return), (d = d.sibling);
        }
      }
      break;
    case 19:
      wt(t, e), Ot(e), r & 4 && om(e);
      break;
    case 21:
      break;
    default:
      wt(t, e), Ot(e);
  }
}
function Ot(e) {
  var t = e.flags;
  if (t & 2) {
    try {
      e: {
        for (var n = e.return; n !== null; ) {
          if (jy(n)) {
            var r = n;
            break e;
          }
          n = n.return;
        }
        throw Error(L(160));
      }
      switch (r.tag) {
        case 5:
          var i = r.stateNode;
          r.flags & 32 && (is(i, ""), (r.flags &= -33));
          var s = sm(e);
          $c(e, s, i);
          break;
        case 3:
        case 4:
          var o = r.stateNode.containerInfo,
            a = sm(e);
          jc(e, a, o);
          break;
        default:
          throw Error(L(161));
      }
    } catch (l) {
      ue(e, e.return, l);
    }
    e.flags &= -3;
  }
  t & 4096 && (e.flags &= -4097);
}
function hE(e, t, n) {
  (B = e), Oy(e);
}
function Oy(e, t, n) {
  for (var r = (e.mode & 1) !== 0; B !== null; ) {
    var i = B,
      s = i.child;
    if (i.tag === 22 && r) {
      var o = i.memoizedState !== null || uo;
      if (!o) {
        var a = i.alternate,
          l = (a !== null && a.memoizedState !== null) || je;
        a = uo;
        var c = je;
        if (((uo = o), (je = l) && !c))
          for (B = i; B !== null; )
            (o = B),
              (l = o.child),
              o.tag === 22 && o.memoizedState !== null
                ? um(i)
                : l !== null
                ? ((l.return = o), (B = l))
                : um(i);
        for (; s !== null; ) (B = s), Oy(s), (s = s.sibling);
        (B = i), (uo = a), (je = c);
      }
      am(e);
    } else
      i.subtreeFlags & 8772 && s !== null ? ((s.return = i), (B = s)) : am(e);
  }
}
function am(e) {
  for (; B !== null; ) {
    var t = B;
    if (t.flags & 8772) {
      var n = t.alternate;
      try {
        if (t.flags & 8772)
          switch (t.tag) {
            case 0:
            case 11:
            case 15:
              je || Ja(5, t);
              break;
            case 1:
              var r = t.stateNode;
              if (t.flags & 4 && !je)
                if (n === null) r.componentDidMount();
                else {
                  var i =
                    t.elementType === t.type
                      ? n.memoizedProps
                      : xt(t.type, n.memoizedProps);
                  r.componentDidUpdate(
                    i,
                    n.memoizedState,
                    r.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var s = t.updateQueue;
              s !== null && Gp(t, s, r);
              break;
            case 3:
              var o = t.updateQueue;
              if (o !== null) {
                if (((n = null), t.child !== null))
                  switch (t.child.tag) {
                    case 5:
                      n = t.child.stateNode;
                      break;
                    case 1:
                      n = t.child.stateNode;
                  }
                Gp(t, o, n);
              }
              break;
            case 5:
              var a = t.stateNode;
              if (n === null && t.flags & 4) {
                n = a;
                var l = t.memoizedProps;
                switch (t.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    l.autoFocus && n.focus();
                    break;
                  case "img":
                    l.src && (n.src = l.src);
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
                var c = t.alternate;
                if (c !== null) {
                  var u = c.memoizedState;
                  if (u !== null) {
                    var d = u.dehydrated;
                    d !== null && ls(d);
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
              throw Error(L(163));
          }
        je || (t.flags & 512 && Pc(t));
      } catch (f) {
        ue(t, t.return, f);
      }
    }
    if (t === e) {
      B = null;
      break;
    }
    if (((n = t.sibling), n !== null)) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function lm(e) {
  for (; B !== null; ) {
    var t = B;
    if (t === e) {
      B = null;
      break;
    }
    var n = t.sibling;
    if (n !== null) {
      (n.return = t.return), (B = n);
      break;
    }
    B = t.return;
  }
}
function um(e) {
  for (; B !== null; ) {
    var t = B;
    try {
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          var n = t.return;
          try {
            Ja(4, t);
          } catch (l) {
            ue(t, n, l);
          }
          break;
        case 1:
          var r = t.stateNode;
          if (typeof r.componentDidMount == "function") {
            var i = t.return;
            try {
              r.componentDidMount();
            } catch (l) {
              ue(t, i, l);
            }
          }
          var s = t.return;
          try {
            Pc(t);
          } catch (l) {
            ue(t, s, l);
          }
          break;
        case 5:
          var o = t.return;
          try {
            Pc(t);
          } catch (l) {
            ue(t, o, l);
          }
      }
    } catch (l) {
      ue(t, t.return, l);
    }
    if (t === e) {
      B = null;
      break;
    }
    var a = t.sibling;
    if (a !== null) {
      (a.return = t.return), (B = a);
      break;
    }
    B = t.return;
  }
}
var gE = Math.ceil,
  Ca = cn.ReactCurrentDispatcher,
  Vd = cn.ReactCurrentOwner,
  lt = cn.ReactCurrentBatchConfig,
  Y = 0,
  we = null,
  pe = null,
  Ie = 0,
  Ge = 0,
  kr = Rn(0),
  he = 0,
  ws = null,
  or = 0,
  el = 0,
  Gd = 0,
  Zi = null,
  De = null,
  Yd = 0,
  Kr = 1 / 0,
  Kt = null,
  ba = !1,
  _c = null,
  On = null,
  co = !1,
  Tn = null,
  Pa = 0,
  Ki = 0,
  Oc = null,
  Xo = -1,
  Uo = 0;
function Oe() {
  return Y & 6 ? de() : Xo !== -1 ? Xo : (Xo = de());
}
function Mn(e) {
  return e.mode & 1
    ? Y & 2 && Ie !== 0
      ? Ie & -Ie
      : eE.transition !== null
      ? (Uo === 0 && (Uo = vg()), Uo)
      : ((e = U),
        e !== 0 || ((e = window.event), (e = e === void 0 ? 16 : Eg(e.type))),
        e)
    : 1;
}
function Ct(e, t, n, r) {
  if (50 < Ki) throw ((Ki = 0), (Oc = null), Error(L(185)));
  Cs(e, n, r),
    (!(Y & 2) || e !== we) &&
      (e === we && (!(Y & 2) && (el |= n), he === 4 && En(e, Ie)),
      Fe(e, r),
      n === 1 && Y === 0 && !(t.mode & 1) && ((Kr = de() + 500), Ka && Bn()));
}
function Fe(e, t) {
  var n = e.callbackNode;
  e1(e, t);
  var r = ca(e, e === we ? Ie : 0);
  if (r === 0)
    n !== null && yp(n), (e.callbackNode = null), (e.callbackPriority = 0);
  else if (((t = r & -r), e.callbackPriority !== t)) {
    if ((n != null && yp(n), t === 1))
      e.tag === 0 ? J1(cm.bind(null, e)) : Fg(cm.bind(null, e)),
        Z1(function () {
          !(Y & 6) && Bn();
        }),
        (n = null);
    else {
      switch (hg(r)) {
        case 1:
          n = yd;
          break;
        case 4:
          n = pg;
          break;
        case 16:
          n = ua;
          break;
        case 536870912:
          n = mg;
          break;
        default:
          n = ua;
      }
      n = Ry(n, My.bind(null, e));
    }
    (e.callbackPriority = t), (e.callbackNode = n);
  }
}
function My(e, t) {
  if (((Xo = -1), (Uo = 0), Y & 6)) throw Error(L(327));
  var n = e.callbackNode;
  if (Fr() && e.callbackNode !== n) return null;
  var r = ca(e, e === we ? Ie : 0);
  if (r === 0) return null;
  if (r & 30 || r & e.expiredLanes || t) t = ja(e, r);
  else {
    t = r;
    var i = Y;
    Y |= 2;
    var s = ky();
    (we !== e || Ie !== t) && ((Kt = null), (Kr = de() + 500), er(e, t));
    do
      try {
        xE();
        break;
      } catch (a) {
        Ny(e, a);
      }
    while (!0);
    Od(),
      (Ca.current = s),
      (Y = i),
      pe !== null ? (t = 0) : ((we = null), (Ie = 0), (t = he));
  }
  if (t !== 0) {
    if (
      (t === 2 && ((i = ic(e)), i !== 0 && ((r = i), (t = Mc(e, i)))), t === 1)
    )
      throw ((n = ws), er(e, 0), En(e, r), Fe(e, de()), n);
    if (t === 6) En(e, r);
    else {
      if (
        ((i = e.current.alternate),
        !(r & 30) &&
          !yE(i) &&
          ((t = ja(e, r)),
          t === 2 && ((s = ic(e)), s !== 0 && ((r = s), (t = Mc(e, s)))),
          t === 1))
      )
        throw ((n = ws), er(e, 0), En(e, r), Fe(e, de()), n);
      switch (((e.finishedWork = i), (e.finishedLanes = r), t)) {
        case 0:
        case 1:
          throw Error(L(345));
        case 2:
          Zn(e, De, Kt);
          break;
        case 3:
          if (
            (En(e, r), (r & 130023424) === r && ((t = Yd + 500 - de()), 10 < t))
          ) {
            if (ca(e, 0) !== 0) break;
            if (((i = e.suspendedLanes), (i & r) !== r)) {
              Oe(), (e.pingedLanes |= e.suspendedLanes & i);
              break;
            }
            e.timeoutHandle = fc(Zn.bind(null, e, De, Kt), t);
            break;
          }
          Zn(e, De, Kt);
          break;
        case 4:
          if ((En(e, r), (r & 4194240) === r)) break;
          for (t = e.eventTimes, i = -1; 0 < r; ) {
            var o = 31 - Tt(r);
            (s = 1 << o), (o = t[o]), o > i && (i = o), (r &= ~s);
          }
          if (
            ((r = i),
            (r = de() - r),
            (r =
              (120 > r
                ? 120
                : 480 > r
                ? 480
                : 1080 > r
                ? 1080
                : 1920 > r
                ? 1920
                : 3e3 > r
                ? 3e3
                : 4320 > r
                ? 4320
                : 1960 * gE(r / 1960)) - r),
            10 < r)
          ) {
            e.timeoutHandle = fc(Zn.bind(null, e, De, Kt), r);
            break;
          }
          Zn(e, De, Kt);
          break;
        case 5:
          Zn(e, De, Kt);
          break;
        default:
          throw Error(L(329));
      }
    }
  }
  return Fe(e, de()), e.callbackNode === n ? My.bind(null, e) : null;
}
function Mc(e, t) {
  var n = Zi;
  return (
    e.current.memoizedState.isDehydrated && (er(e, t).flags |= 256),
    (e = ja(e, t)),
    e !== 2 && ((t = De), (De = n), t !== null && Nc(t)),
    e
  );
}
function Nc(e) {
  De === null ? (De = e) : De.push.apply(De, e);
}
function yE(e) {
  for (var t = e; ; ) {
    if (t.flags & 16384) {
      var n = t.updateQueue;
      if (n !== null && ((n = n.stores), n !== null))
        for (var r = 0; r < n.length; r++) {
          var i = n[r],
            s = i.getSnapshot;
          i = i.value;
          try {
            if (!Pt(s(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((n = t.child), t.subtreeFlags & 16384 && n !== null))
      (n.return = t), (t = n);
    else {
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return !0;
        t = t.return;
      }
      (t.sibling.return = t.return), (t = t.sibling);
    }
  }
  return !0;
}
function En(e, t) {
  for (
    t &= ~Gd,
      t &= ~el,
      e.suspendedLanes |= t,
      e.pingedLanes &= ~t,
      e = e.expirationTimes;
    0 < t;

  ) {
    var n = 31 - Tt(t),
      r = 1 << n;
    (e[n] = -1), (t &= ~r);
  }
}
function cm(e) {
  if (Y & 6) throw Error(L(327));
  Fr();
  var t = ca(e, 0);
  if (!(t & 1)) return Fe(e, de()), null;
  var n = ja(e, t);
  if (e.tag !== 0 && n === 2) {
    var r = ic(e);
    r !== 0 && ((t = r), (n = Mc(e, r)));
  }
  if (n === 1) throw ((n = ws), er(e, 0), En(e, t), Fe(e, de()), n);
  if (n === 6) throw Error(L(345));
  return (
    (e.finishedWork = e.current.alternate),
    (e.finishedLanes = t),
    Zn(e, De, Kt),
    Fe(e, de()),
    null
  );
}
function Xd(e, t) {
  var n = Y;
  Y |= 1;
  try {
    return e(t);
  } finally {
    (Y = n), Y === 0 && ((Kr = de() + 500), Ka && Bn());
  }
}
function ar(e) {
  Tn !== null && Tn.tag === 0 && !(Y & 6) && Fr();
  var t = Y;
  Y |= 1;
  var n = lt.transition,
    r = U;
  try {
    if (((lt.transition = null), (U = 1), e)) return e();
  } finally {
    (U = r), (lt.transition = n), (Y = t), !(Y & 6) && Bn();
  }
}
function Ud() {
  (Ge = kr.current), te(kr);
}
function er(e, t) {
  (e.finishedWork = null), (e.finishedLanes = 0);
  var n = e.timeoutHandle;
  if ((n !== -1 && ((e.timeoutHandle = -1), U1(n)), pe !== null))
    for (n = pe.return; n !== null; ) {
      var r = n;
      switch ((jd(r), r.tag)) {
        case 1:
          (r = r.type.childContextTypes), r != null && va();
          break;
        case 3:
          Ur(), te(Re), te($e), Dd();
          break;
        case 5:
          Ld(r);
          break;
        case 4:
          Ur();
          break;
        case 13:
          te(se);
          break;
        case 19:
          te(se);
          break;
        case 10:
          Md(r.type._context);
          break;
        case 22:
        case 23:
          Ud();
      }
      n = n.return;
    }
  if (
    ((we = e),
    (pe = e = Nn(e.current, null)),
    (Ie = Ge = t),
    (he = 0),
    (ws = null),
    (Gd = el = or = 0),
    (De = Zi = null),
    qn !== null)
  ) {
    for (t = 0; t < qn.length; t++)
      if (((n = qn[t]), (r = n.interleaved), r !== null)) {
        n.interleaved = null;
        var i = r.next,
          s = n.pending;
        if (s !== null) {
          var o = s.next;
          (s.next = i), (r.next = o);
        }
        n.pending = r;
      }
    qn = null;
  }
  return e;
}
function Ny(e, t) {
  do {
    var n = pe;
    try {
      if ((Od(), (Vo.current = Ta), Ia)) {
        for (var r = oe.memoizedState; r !== null; ) {
          var i = r.queue;
          i !== null && (i.pending = null), (r = r.next);
        }
        Ia = !1;
      }
      if (
        ((sr = 0),
        (ye = ve = oe = null),
        (Xi = !1),
        (hs = 0),
        (Vd.current = null),
        n === null || n.return === null)
      ) {
        (he = 1), (ws = t), (pe = null);
        break;
      }
      e: {
        var s = e,
          o = n.return,
          a = n,
          l = t;
        if (
          ((t = Ie),
          (a.flags |= 32768),
          l !== null && typeof l == "object" && typeof l.then == "function")
        ) {
          var c = l,
            u = a,
            d = u.tag;
          if (!(u.mode & 1) && (d === 0 || d === 11 || d === 15)) {
            var f = u.alternate;
            f
              ? ((u.updateQueue = f.updateQueue),
                (u.memoizedState = f.memoizedState),
                (u.lanes = f.lanes))
              : ((u.updateQueue = null), (u.memoizedState = null));
          }
          var g = Qp(o);
          if (g !== null) {
            (g.flags &= -257),
              qp(g, o, a, s, t),
              g.mode & 1 && Kp(s, c, t),
              (t = g),
              (l = c);
            var y = t.updateQueue;
            if (y === null) {
              var w = new Set();
              w.add(l), (t.updateQueue = w);
            } else y.add(l);
            break e;
          } else {
            if (!(t & 1)) {
              Kp(s, c, t), Zd();
              break e;
            }
            l = Error(L(426));
          }
        } else if (re && a.mode & 1) {
          var I = Qp(o);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              qp(I, o, a, s, t),
              $d(Zr(l, a));
            break e;
          }
        }
        (s = l = Zr(l, a)),
          he !== 4 && (he = 2),
          Zi === null ? (Zi = [s]) : Zi.push(s),
          (s = o);
        do {
          switch (s.tag) {
            case 3:
              (s.flags |= 65536), (t &= -t), (s.lanes |= t);
              var v = hy(s, l, t);
              Vp(s, v);
              break e;
            case 1:
              a = l;
              var m = s.type,
                h = s.stateNode;
              if (
                !(s.flags & 128) &&
                (typeof m.getDerivedStateFromError == "function" ||
                  (h !== null &&
                    typeof h.componentDidCatch == "function" &&
                    (On === null || !On.has(h))))
              ) {
                (s.flags |= 65536), (t &= -t), (s.lanes |= t);
                var x = gy(s, a, t);
                Vp(s, x);
                break e;
              }
          }
          s = s.return;
        } while (s !== null);
      }
      Ly(n);
    } catch (S) {
      (t = S), pe === n && n !== null && (pe = n = n.return);
      continue;
    }
    break;
  } while (!0);
}
function ky() {
  var e = Ca.current;
  return (Ca.current = Ta), e === null ? Ta : e;
}
function Zd() {
  (he === 0 || he === 3 || he === 2) && (he = 4),
    we === null || (!(or & 268435455) && !(el & 268435455)) || En(we, Ie);
}
function ja(e, t) {
  var n = Y;
  Y |= 2;
  var r = ky();
  (we !== e || Ie !== t) && ((Kt = null), er(e, t));
  do
    try {
      wE();
      break;
    } catch (i) {
      Ny(e, i);
    }
  while (!0);
  if ((Od(), (Y = n), (Ca.current = r), pe !== null)) throw Error(L(261));
  return (we = null), (Ie = 0), he;
}
function wE() {
  for (; pe !== null; ) Ay(pe);
}
function xE() {
  for (; pe !== null && !GS(); ) Ay(pe);
}
function Ay(e) {
  var t = zy(e.alternate, e, Ge);
  (e.memoizedProps = e.pendingProps),
    t === null ? Ly(e) : (pe = t),
    (Vd.current = null);
}
function Ly(e) {
  var t = e;
  do {
    var n = t.alternate;
    if (((e = t.return), t.flags & 32768)) {
      if (((n = pE(n, t)), n !== null)) {
        (n.flags &= 32767), (pe = n);
        return;
      }
      if (e !== null)
        (e.flags |= 32768), (e.subtreeFlags = 0), (e.deletions = null);
      else {
        (he = 6), (pe = null);
        return;
      }
    } else if (((n = fE(n, t, Ge)), n !== null)) {
      pe = n;
      return;
    }
    if (((t = t.sibling), t !== null)) {
      pe = t;
      return;
    }
    pe = t = e;
  } while (t !== null);
  he === 0 && (he = 5);
}
function Zn(e, t, n) {
  var r = U,
    i = lt.transition;
  try {
    (lt.transition = null), (U = 1), SE(e, t, n, r);
  } finally {
    (lt.transition = i), (U = r);
  }
  return null;
}
function SE(e, t, n, r) {
  do Fr();
  while (Tn !== null);
  if (Y & 6) throw Error(L(327));
  n = e.finishedWork;
  var i = e.finishedLanes;
  if (n === null) return null;
  if (((e.finishedWork = null), (e.finishedLanes = 0), n === e.current))
    throw Error(L(177));
  (e.callbackNode = null), (e.callbackPriority = 0);
  var s = n.lanes | n.childLanes;
  if (
    (t1(e, s),
    e === we && ((pe = we = null), (Ie = 0)),
    (!(n.subtreeFlags & 2064) && !(n.flags & 2064)) ||
      co ||
      ((co = !0),
      Ry(ua, function () {
        return Fr(), null;
      })),
    (s = (n.flags & 15990) !== 0),
    n.subtreeFlags & 15990 || s)
  ) {
    (s = lt.transition), (lt.transition = null);
    var o = U;
    U = 1;
    var a = Y;
    (Y |= 4),
      (Vd.current = null),
      vE(e, n),
      _y(n, e),
      F1(cc),
      (da = !!uc),
      (cc = uc = null),
      (e.current = n),
      hE(n),
      YS(),
      (Y = a),
      (U = o),
      (lt.transition = s);
  } else e.current = n;
  if (
    (co && ((co = !1), (Tn = e), (Pa = i)),
    (s = e.pendingLanes),
    s === 0 && (On = null),
    ZS(n.stateNode),
    Fe(e, de()),
    t !== null)
  )
    for (r = e.onRecoverableError, n = 0; n < t.length; n++)
      (i = t[n]), r(i.value, { componentStack: i.stack, digest: i.digest });
  if (ba) throw ((ba = !1), (e = _c), (_c = null), e);
  return (
    Pa & 1 && e.tag !== 0 && Fr(),
    (s = e.pendingLanes),
    s & 1 ? (e === Oc ? Ki++ : ((Ki = 0), (Oc = e))) : (Ki = 0),
    Bn(),
    null
  );
}
function Fr() {
  if (Tn !== null) {
    var e = hg(Pa),
      t = lt.transition,
      n = U;
    try {
      if (((lt.transition = null), (U = 16 > e ? 16 : e), Tn === null))
        var r = !1;
      else {
        if (((e = Tn), (Tn = null), (Pa = 0), Y & 6)) throw Error(L(331));
        var i = Y;
        for (Y |= 4, B = e.current; B !== null; ) {
          var s = B,
            o = s.child;
          if (B.flags & 16) {
            var a = s.deletions;
            if (a !== null) {
              for (var l = 0; l < a.length; l++) {
                var c = a[l];
                for (B = c; B !== null; ) {
                  var u = B;
                  switch (u.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ui(8, u, s);
                  }
                  var d = u.child;
                  if (d !== null) (d.return = u), (B = d);
                  else
                    for (; B !== null; ) {
                      u = B;
                      var f = u.sibling,
                        g = u.return;
                      if ((Py(u), u === c)) {
                        B = null;
                        break;
                      }
                      if (f !== null) {
                        (f.return = g), (B = f);
                        break;
                      }
                      B = g;
                    }
                }
              }
              var y = s.alternate;
              if (y !== null) {
                var w = y.child;
                if (w !== null) {
                  y.child = null;
                  do {
                    var I = w.sibling;
                    (w.sibling = null), (w = I);
                  } while (w !== null);
                }
              }
              B = s;
            }
          }
          if (s.subtreeFlags & 2064 && o !== null) (o.return = s), (B = o);
          else
            e: for (; B !== null; ) {
              if (((s = B), s.flags & 2048))
                switch (s.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Ui(9, s, s.return);
                }
              var v = s.sibling;
              if (v !== null) {
                (v.return = s.return), (B = v);
                break e;
              }
              B = s.return;
            }
        }
        var m = e.current;
        for (B = m; B !== null; ) {
          o = B;
          var h = o.child;
          if (o.subtreeFlags & 2064 && h !== null) (h.return = o), (B = h);
          else
            e: for (o = m; B !== null; ) {
              if (((a = B), a.flags & 2048))
                try {
                  switch (a.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Ja(9, a);
                  }
                } catch (S) {
                  ue(a, a.return, S);
                }
              if (a === o) {
                B = null;
                break e;
              }
              var x = a.sibling;
              if (x !== null) {
                (x.return = a.return), (B = x);
                break e;
              }
              B = a.return;
            }
        }
        if (
          ((Y = i), Bn(), Dt && typeof Dt.onPostCommitFiberRoot == "function")
        )
          try {
            Dt.onPostCommitFiberRoot(Ga, e);
          } catch {}
        r = !0;
      }
      return r;
    } finally {
      (U = n), (lt.transition = t);
    }
  }
  return !1;
}
function dm(e, t, n) {
  (t = Zr(n, t)),
    (t = hy(e, t, 1)),
    (e = _n(e, t, 1)),
    (t = Oe()),
    e !== null && (Cs(e, 1, t), Fe(e, t));
}
function ue(e, t, n) {
  if (e.tag === 3) dm(e, e, n);
  else
    for (; t !== null; ) {
      if (t.tag === 3) {
        dm(t, e, n);
        break;
      } else if (t.tag === 1) {
        var r = t.stateNode;
        if (
          typeof t.type.getDerivedStateFromError == "function" ||
          (typeof r.componentDidCatch == "function" &&
            (On === null || !On.has(r)))
        ) {
          (e = Zr(n, e)),
            (e = gy(t, e, 1)),
            (t = _n(t, e, 1)),
            (e = Oe()),
            t !== null && (Cs(t, 1, e), Fe(t, e));
          break;
        }
      }
      t = t.return;
    }
}
function EE(e, t, n) {
  var r = e.pingCache;
  r !== null && r.delete(t),
    (t = Oe()),
    (e.pingedLanes |= e.suspendedLanes & n),
    we === e &&
      (Ie & n) === n &&
      (he === 4 || (he === 3 && (Ie & 130023424) === Ie && 500 > de() - Yd)
        ? er(e, 0)
        : (Gd |= n)),
    Fe(e, t);
}
function Dy(e, t) {
  t === 0 &&
    (e.mode & 1
      ? ((t = eo), (eo <<= 1), !(eo & 130023424) && (eo = 4194304))
      : (t = 1));
  var n = Oe();
  (e = on(e, t)), e !== null && (Cs(e, t, n), Fe(e, n));
}
function IE(e) {
  var t = e.memoizedState,
    n = 0;
  t !== null && (n = t.retryLane), Dy(e, n);
}
function TE(e, t) {
  var n = 0;
  switch (e.tag) {
    case 13:
      var r = e.stateNode,
        i = e.memoizedState;
      i !== null && (n = i.retryLane);
      break;
    case 19:
      r = e.stateNode;
      break;
    default:
      throw Error(L(314));
  }
  r !== null && r.delete(t), Dy(e, n);
}
var zy;
zy = function (e, t, n) {
  if (e !== null)
    if (e.memoizedProps !== t.pendingProps || Re.current) ze = !0;
    else {
      if (!(e.lanes & n) && !(t.flags & 128)) return (ze = !1), dE(e, t, n);
      ze = !!(e.flags & 131072);
    }
  else (ze = !1), re && t.flags & 1048576 && Wg(t, ya, t.index);
  switch (((t.lanes = 0), t.tag)) {
    case 2:
      var r = t.type;
      Yo(e, t), (e = t.pendingProps);
      var i = Gr(t, $e.current);
      Br(t, n), (i = Rd(null, t, r, e, i, n));
      var s = Bd();
      return (
        (t.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((t.tag = 1),
            (t.memoizedState = null),
            (t.updateQueue = null),
            Be(r) ? ((s = !0), ha(t)) : (s = !1),
            (t.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            kd(t),
            (i.updater = qa),
            (t.stateNode = i),
            (i._reactInternals = t),
            wc(t, r, e, n),
            (t = Ec(null, t, r, !0, s, n)))
          : ((t.tag = 0), re && s && Pd(t), _e(null, t, i, n), (t = t.child)),
        t
      );
    case 16:
      r = t.elementType;
      e: {
        switch (
          (Yo(e, t),
          (e = t.pendingProps),
          (i = r._init),
          (r = i(r._payload)),
          (t.type = r),
          (i = t.tag = bE(r)),
          (e = xt(r, e)),
          i)
        ) {
          case 0:
            t = Sc(null, t, r, e, n);
            break e;
          case 1:
            t = tm(null, t, r, e, n);
            break e;
          case 11:
            t = Jp(null, t, r, e, n);
            break e;
          case 14:
            t = em(null, t, r, xt(r.type, e), n);
            break e;
        }
        throw Error(L(306, r, ""));
      }
      return t;
    case 0:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : xt(r, i)),
        Sc(e, t, r, i, n)
      );
    case 1:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : xt(r, i)),
        tm(e, t, r, i, n)
      );
    case 3:
      e: {
        if ((Sy(t), e === null)) throw Error(L(387));
        (r = t.pendingProps),
          (s = t.memoizedState),
          (i = s.element),
          Ug(e, t),
          Sa(t, r, null, n);
        var o = t.memoizedState;
        if (((r = o.element), s.isDehydrated))
          if (
            ((s = {
              element: r,
              isDehydrated: !1,
              cache: o.cache,
              pendingSuspenseBoundaries: o.pendingSuspenseBoundaries,
              transitions: o.transitions,
            }),
            (t.updateQueue.baseState = s),
            (t.memoizedState = s),
            t.flags & 256)
          ) {
            (i = Zr(Error(L(423)), t)), (t = nm(e, t, r, n, i));
            break e;
          } else if (r !== i) {
            (i = Zr(Error(L(424)), t)), (t = nm(e, t, r, n, i));
            break e;
          } else
            for (
              Xe = $n(t.stateNode.containerInfo.firstChild),
                Ue = t,
                re = !0,
                Et = null,
                n = Yg(t, null, r, n),
                t.child = n;
              n;

            )
              (n.flags = (n.flags & -3) | 4096), (n = n.sibling);
        else {
          if ((Yr(), r === i)) {
            t = an(e, t, n);
            break e;
          }
          _e(e, t, r, n);
        }
        t = t.child;
      }
      return t;
    case 5:
      return (
        Zg(t),
        e === null && hc(t),
        (r = t.type),
        (i = t.pendingProps),
        (s = e !== null ? e.memoizedProps : null),
        (o = i.children),
        dc(r, i) ? (o = null) : s !== null && dc(r, s) && (t.flags |= 32),
        xy(e, t),
        _e(e, t, o, n),
        t.child
      );
    case 6:
      return e === null && hc(t), null;
    case 13:
      return Ey(e, t, n);
    case 4:
      return (
        Ad(t, t.stateNode.containerInfo),
        (r = t.pendingProps),
        e === null ? (t.child = Xr(t, null, r, n)) : _e(e, t, r, n),
        t.child
      );
    case 11:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : xt(r, i)),
        Jp(e, t, r, i, n)
      );
    case 7:
      return _e(e, t, t.pendingProps, n), t.child;
    case 8:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 12:
      return _e(e, t, t.pendingProps.children, n), t.child;
    case 10:
      e: {
        if (
          ((r = t.type._context),
          (i = t.pendingProps),
          (s = t.memoizedProps),
          (o = i.value),
          q(wa, r._currentValue),
          (r._currentValue = o),
          s !== null)
        )
          if (Pt(s.value, o)) {
            if (s.children === i.children && !Re.current) {
              t = an(e, t, n);
              break e;
            }
          } else
            for (s = t.child, s !== null && (s.return = t); s !== null; ) {
              var a = s.dependencies;
              if (a !== null) {
                o = s.child;
                for (var l = a.firstContext; l !== null; ) {
                  if (l.context === r) {
                    if (s.tag === 1) {
                      (l = tn(-1, n & -n)), (l.tag = 2);
                      var c = s.updateQueue;
                      if (c !== null) {
                        c = c.shared;
                        var u = c.pending;
                        u === null
                          ? (l.next = l)
                          : ((l.next = u.next), (u.next = l)),
                          (c.pending = l);
                      }
                    }
                    (s.lanes |= n),
                      (l = s.alternate),
                      l !== null && (l.lanes |= n),
                      gc(s.return, n, t),
                      (a.lanes |= n);
                    break;
                  }
                  l = l.next;
                }
              } else if (s.tag === 10) o = s.type === t.type ? null : s.child;
              else if (s.tag === 18) {
                if (((o = s.return), o === null)) throw Error(L(341));
                (o.lanes |= n),
                  (a = o.alternate),
                  a !== null && (a.lanes |= n),
                  gc(o, n, t),
                  (o = s.sibling);
              } else o = s.child;
              if (o !== null) o.return = s;
              else
                for (o = s; o !== null; ) {
                  if (o === t) {
                    o = null;
                    break;
                  }
                  if (((s = o.sibling), s !== null)) {
                    (s.return = o.return), (o = s);
                    break;
                  }
                  o = o.return;
                }
              s = o;
            }
        _e(e, t, i.children, n), (t = t.child);
      }
      return t;
    case 9:
      return (
        (i = t.type),
        (r = t.pendingProps.children),
        Br(t, n),
        (i = ut(i)),
        (r = r(i)),
        (t.flags |= 1),
        _e(e, t, r, n),
        t.child
      );
    case 14:
      return (
        (r = t.type),
        (i = xt(r, t.pendingProps)),
        (i = xt(r.type, i)),
        em(e, t, r, i, n)
      );
    case 15:
      return yy(e, t, t.type, t.pendingProps, n);
    case 17:
      return (
        (r = t.type),
        (i = t.pendingProps),
        (i = t.elementType === r ? i : xt(r, i)),
        Yo(e, t),
        (t.tag = 1),
        Be(r) ? ((e = !0), ha(t)) : (e = !1),
        Br(t, n),
        vy(t, r, i),
        wc(t, r, i, n),
        Ec(null, t, r, !0, e, n)
      );
    case 19:
      return Iy(e, t, n);
    case 22:
      return wy(e, t, n);
  }
  throw Error(L(156, t.tag));
};
function Ry(e, t) {
  return fg(e, t);
}
function CE(e, t, n, r) {
  (this.tag = e),
    (this.key = n),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = t),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = r),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function ot(e, t, n, r) {
  return new CE(e, t, n, r);
}
function Kd(e) {
  return (e = e.prototype), !(!e || !e.isReactComponent);
}
function bE(e) {
  if (typeof e == "function") return Kd(e) ? 1 : 0;
  if (e != null) {
    if (((e = e.$$typeof), e === vd)) return 11;
    if (e === hd) return 14;
  }
  return 2;
}
function Nn(e, t) {
  var n = e.alternate;
  return (
    n === null
      ? ((n = ot(e.tag, t, e.key, e.mode)),
        (n.elementType = e.elementType),
        (n.type = e.type),
        (n.stateNode = e.stateNode),
        (n.alternate = e),
        (e.alternate = n))
      : ((n.pendingProps = t),
        (n.type = e.type),
        (n.flags = 0),
        (n.subtreeFlags = 0),
        (n.deletions = null)),
    (n.flags = e.flags & 14680064),
    (n.childLanes = e.childLanes),
    (n.lanes = e.lanes),
    (n.child = e.child),
    (n.memoizedProps = e.memoizedProps),
    (n.memoizedState = e.memoizedState),
    (n.updateQueue = e.updateQueue),
    (t = e.dependencies),
    (n.dependencies =
      t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }),
    (n.sibling = e.sibling),
    (n.index = e.index),
    (n.ref = e.ref),
    n
  );
}
function Zo(e, t, n, r, i, s) {
  var o = 2;
  if (((r = e), typeof e == "function")) Kd(e) && (o = 1);
  else if (typeof e == "string") o = 5;
  else
    e: switch (e) {
      case Tr:
        return tr(n.children, i, s, t);
      case md:
        (o = 8), (i |= 8);
        break;
      case Hu:
        return (
          (e = ot(12, n, t, i | 2)), (e.elementType = Hu), (e.lanes = s), e
        );
      case Vu:
        return (e = ot(13, n, t, i)), (e.elementType = Vu), (e.lanes = s), e;
      case Gu:
        return (e = ot(19, n, t, i)), (e.elementType = Gu), (e.lanes = s), e;
      case Zh:
        return tl(n, i, s, t);
      default:
        if (typeof e == "object" && e !== null)
          switch (e.$$typeof) {
            case Xh:
              o = 10;
              break e;
            case Uh:
              o = 9;
              break e;
            case vd:
              o = 11;
              break e;
            case hd:
              o = 14;
              break e;
            case wn:
              (o = 16), (r = null);
              break e;
          }
        throw Error(L(130, e == null ? e : typeof e, ""));
    }
  return (
    (t = ot(o, n, t, i)), (t.elementType = e), (t.type = r), (t.lanes = s), t
  );
}
function tr(e, t, n, r) {
  return (e = ot(7, e, r, t)), (e.lanes = n), e;
}
function tl(e, t, n, r) {
  return (
    (e = ot(22, e, r, t)),
    (e.elementType = Zh),
    (e.lanes = n),
    (e.stateNode = { isHidden: !1 }),
    e
  );
}
function Kl(e, t, n) {
  return (e = ot(6, e, null, t)), (e.lanes = n), e;
}
function Ql(e, t, n) {
  return (
    (t = ot(4, e.children !== null ? e.children : [], e.key, t)),
    (t.lanes = n),
    (t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation,
    }),
    t
  );
}
function PE(e, t, n, r, i) {
  (this.tag = t),
    (this.containerInfo = e),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = Ol(0)),
    (this.expirationTimes = Ol(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = Ol(0)),
    (this.identifierPrefix = r),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function Qd(e, t, n, r, i, s, o, a, l) {
  return (
    (e = new PE(e, t, n, a, l)),
    t === 1 ? ((t = 1), s === !0 && (t |= 8)) : (t = 0),
    (s = ot(3, null, null, t)),
    (e.current = s),
    (s.stateNode = e),
    (s.memoizedState = {
      element: r,
      isDehydrated: n,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    kd(s),
    e
  );
}
function jE(e, t, n) {
  var r = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: Ir,
    key: r == null ? null : "" + r,
    children: e,
    containerInfo: t,
    implementation: n,
  };
}
function By(e) {
  if (!e) return An;
  e = e._reactInternals;
  e: {
    if (fr(e) !== e || e.tag !== 1) throw Error(L(170));
    var t = e;
    do {
      switch (t.tag) {
        case 3:
          t = t.stateNode.context;
          break e;
        case 1:
          if (Be(t.type)) {
            t = t.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      t = t.return;
    } while (t !== null);
    throw Error(L(171));
  }
  if (e.tag === 1) {
    var n = e.type;
    if (Be(n)) return Bg(e, n, t);
  }
  return t;
}
function Fy(e, t, n, r, i, s, o, a, l) {
  return (
    (e = Qd(n, r, !0, e, i, s, o, a, l)),
    (e.context = By(null)),
    (n = e.current),
    (r = Oe()),
    (i = Mn(n)),
    (s = tn(r, i)),
    (s.callback = t ?? null),
    _n(n, s, i),
    (e.current.lanes = i),
    Cs(e, i, r),
    Fe(e, r),
    e
  );
}
function nl(e, t, n, r) {
  var i = t.current,
    s = Oe(),
    o = Mn(i);
  return (
    (n = By(n)),
    t.context === null ? (t.context = n) : (t.pendingContext = n),
    (t = tn(s, o)),
    (t.payload = { element: e }),
    (r = r === void 0 ? null : r),
    r !== null && (t.callback = r),
    (e = _n(i, t, o)),
    e !== null && (Ct(e, i, o, s), Ho(e, i, o)),
    o
  );
}
function $a(e) {
  if (((e = e.current), !e.child)) return null;
  switch (e.child.tag) {
    case 5:
      return e.child.stateNode;
    default:
      return e.child.stateNode;
  }
}
function fm(e, t) {
  if (((e = e.memoizedState), e !== null && e.dehydrated !== null)) {
    var n = e.retryLane;
    e.retryLane = n !== 0 && n < t ? n : t;
  }
}
function qd(e, t) {
  fm(e, t), (e = e.alternate) && fm(e, t);
}
function $E() {
  return null;
}
var Wy =
  typeof reportError == "function"
    ? reportError
    : function (e) {
        console.error(e);
      };
function Jd(e) {
  this._internalRoot = e;
}
rl.prototype.render = Jd.prototype.render = function (e) {
  var t = this._internalRoot;
  if (t === null) throw Error(L(409));
  nl(e, t, null, null);
};
rl.prototype.unmount = Jd.prototype.unmount = function () {
  var e = this._internalRoot;
  if (e !== null) {
    this._internalRoot = null;
    var t = e.containerInfo;
    ar(function () {
      nl(null, e, null, null);
    }),
      (t[sn] = null);
  }
};
function rl(e) {
  this._internalRoot = e;
}
rl.prototype.unstable_scheduleHydration = function (e) {
  if (e) {
    var t = wg();
    e = { blockedOn: null, target: e, priority: t };
    for (var n = 0; n < Sn.length && t !== 0 && t < Sn[n].priority; n++);
    Sn.splice(n, 0, e), n === 0 && Sg(e);
  }
};
function ef(e) {
  return !(!e || (e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11));
}
function il(e) {
  return !(
    !e ||
    (e.nodeType !== 1 &&
      e.nodeType !== 9 &&
      e.nodeType !== 11 &&
      (e.nodeType !== 8 || e.nodeValue !== " react-mount-point-unstable "))
  );
}
function pm() {}
function _E(e, t, n, r, i) {
  if (i) {
    if (typeof r == "function") {
      var s = r;
      r = function () {
        var c = $a(o);
        s.call(c);
      };
    }
    var o = Fy(t, r, e, 0, null, !1, !1, "", pm);
    return (
      (e._reactRootContainer = o),
      (e[sn] = o.current),
      ds(e.nodeType === 8 ? e.parentNode : e),
      ar(),
      o
    );
  }
  for (; (i = e.lastChild); ) e.removeChild(i);
  if (typeof r == "function") {
    var a = r;
    r = function () {
      var c = $a(l);
      a.call(c);
    };
  }
  var l = Qd(e, 0, !1, null, null, !1, !1, "", pm);
  return (
    (e._reactRootContainer = l),
    (e[sn] = l.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    ar(function () {
      nl(t, l, n, r);
    }),
    l
  );
}
function sl(e, t, n, r, i) {
  var s = n._reactRootContainer;
  if (s) {
    var o = s;
    if (typeof i == "function") {
      var a = i;
      i = function () {
        var l = $a(o);
        a.call(l);
      };
    }
    nl(t, o, e, i);
  } else o = _E(n, t, e, i, r);
  return $a(o);
}
gg = function (e) {
  switch (e.tag) {
    case 3:
      var t = e.stateNode;
      if (t.current.memoizedState.isDehydrated) {
        var n = Bi(t.pendingLanes);
        n !== 0 &&
          (wd(t, n | 1), Fe(t, de()), !(Y & 6) && ((Kr = de() + 500), Bn()));
      }
      break;
    case 13:
      ar(function () {
        var r = on(e, 1);
        if (r !== null) {
          var i = Oe();
          Ct(r, e, 1, i);
        }
      }),
        qd(e, 1);
  }
};
xd = function (e) {
  if (e.tag === 13) {
    var t = on(e, 134217728);
    if (t !== null) {
      var n = Oe();
      Ct(t, e, 134217728, n);
    }
    qd(e, 134217728);
  }
};
yg = function (e) {
  if (e.tag === 13) {
    var t = Mn(e),
      n = on(e, t);
    if (n !== null) {
      var r = Oe();
      Ct(n, e, t, r);
    }
    qd(e, t);
  }
};
wg = function () {
  return U;
};
xg = function (e, t) {
  var n = U;
  try {
    return (U = e), t();
  } finally {
    U = n;
  }
};
tc = function (e, t, n) {
  switch (t) {
    case "input":
      if ((Uu(e, n), (t = n.name), n.type === "radio" && t != null)) {
        for (n = e; n.parentNode; ) n = n.parentNode;
        for (
          n = n.querySelectorAll(
            "input[name=" + JSON.stringify("" + t) + '][type="radio"]'
          ),
            t = 0;
          t < n.length;
          t++
        ) {
          var r = n[t];
          if (r !== e && r.form === e.form) {
            var i = Za(r);
            if (!i) throw Error(L(90));
            Qh(r), Uu(r, i);
          }
        }
      }
      break;
    case "textarea":
      Jh(e, n);
      break;
    case "select":
      (t = n.value), t != null && Lr(e, !!n.multiple, t, !1);
  }
};
og = Xd;
ag = ar;
var OE = { usingClientEntryPoint: !1, Events: [Ps, jr, Za, ig, sg, Xd] },
  Ci = {
    findFiberByHostInstance: Qn,
    bundleType: 0,
    version: "18.3.1",
    rendererPackageName: "react-dom",
  },
  ME = {
    bundleType: Ci.bundleType,
    version: Ci.version,
    rendererPackageName: Ci.rendererPackageName,
    rendererConfig: Ci.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: cn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (e) {
      return (e = cg(e)), e === null ? null : e.stateNode;
    },
    findFiberByHostInstance: Ci.findFiberByHostInstance || $E,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.3.1-next-f1338f8080-20240426",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var fo = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!fo.isDisabled && fo.supportsFiber)
    try {
      (Ga = fo.inject(ME)), (Dt = fo);
    } catch {}
}
qe.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = OE;
qe.createPortal = function (e, t) {
  var n = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!ef(t)) throw Error(L(200));
  return jE(e, t, null, n);
};
qe.createRoot = function (e, t) {
  if (!ef(e)) throw Error(L(299));
  var n = !1,
    r = "",
    i = Wy;
  return (
    t != null &&
      (t.unstable_strictMode === !0 && (n = !0),
      t.identifierPrefix !== void 0 && (r = t.identifierPrefix),
      t.onRecoverableError !== void 0 && (i = t.onRecoverableError)),
    (t = Qd(e, 1, !1, null, null, n, !1, r, i)),
    (e[sn] = t.current),
    ds(e.nodeType === 8 ? e.parentNode : e),
    new Jd(t)
  );
};
qe.findDOMNode = function (e) {
  if (e == null) return null;
  if (e.nodeType === 1) return e;
  var t = e._reactInternals;
  if (t === void 0)
    throw typeof e.render == "function"
      ? Error(L(188))
      : ((e = Object.keys(e).join(",")), Error(L(268, e)));
  return (e = cg(t)), (e = e === null ? null : e.stateNode), e;
};
qe.flushSync = function (e) {
  return ar(e);
};
qe.hydrate = function (e, t, n) {
  if (!il(t)) throw Error(L(200));
  return sl(null, e, t, !0, n);
};
qe.hydrateRoot = function (e, t, n) {
  if (!ef(e)) throw Error(L(405));
  var r = (n != null && n.hydratedSources) || null,
    i = !1,
    s = "",
    o = Wy;
  if (
    (n != null &&
      (n.unstable_strictMode === !0 && (i = !0),
      n.identifierPrefix !== void 0 && (s = n.identifierPrefix),
      n.onRecoverableError !== void 0 && (o = n.onRecoverableError)),
    (t = Fy(t, null, e, 1, n ?? null, i, !1, s, o)),
    (e[sn] = t.current),
    ds(e),
    r)
  )
    for (e = 0; e < r.length; e++)
      (n = r[e]),
        (i = n._getVersion),
        (i = i(n._source)),
        t.mutableSourceEagerHydrationData == null
          ? (t.mutableSourceEagerHydrationData = [n, i])
          : t.mutableSourceEagerHydrationData.push(n, i);
  return new rl(t);
};
qe.render = function (e, t, n) {
  if (!il(t)) throw Error(L(200));
  return sl(null, e, t, !1, n);
};
qe.unmountComponentAtNode = function (e) {
  if (!il(e)) throw Error(L(40));
  return e._reactRootContainer
    ? (ar(function () {
        sl(null, null, e, !1, function () {
          (e._reactRootContainer = null), (e[sn] = null);
        });
      }),
      !0)
    : !1;
};
qe.unstable_batchedUpdates = Xd;
qe.unstable_renderSubtreeIntoContainer = function (e, t, n, r) {
  if (!il(n)) throw Error(L(200));
  if (e == null || e._reactInternals === void 0) throw Error(L(38));
  return sl(e, t, n, !1, r);
};
qe.version = "18.3.1-next-f1338f8080-20240426";
function Hy() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Hy);
    } catch (e) {
      console.error(e);
    }
}
Hy(), (Hh.exports = qe);
var NE = Hh.exports,
  Vy,
  mm = NE;
(Vy = mm.createRoot), mm.hydrateRoot;
const X = () => {
  const e = "/react-portfolio-template/".replace(/\/$/, ""),
    t = [
      "rgb(255, 99, 132)",
      "rgb(54, 162, 235)",
      "rgb(255, 205, 86)",
      "rgb(197,176,255)",
      "rgb(142, 227, 197)",
      "rgb(238, 183, 154)",
      "rgb(164,205,253)",
      "rgb(246,169,255)",
      "rgb(171, 235, 198)",
      "rgb(255, 201, 214)",
      "rgb(209, 247, 200)",
      "rgb(235, 214, 169)",
      "rgb(174, 229, 248)",
      "rgb(246, 224, 196)",
      "rgb(255, 217, 232)",
    ],
    n = (C) => {
      document.body.classList.add(C);
    },
    r = (C) => {
      document.body.classList.remove(C);
    },
    i = (C, _, O) => Math.min(Math.max(C, _), O),
    s = (C) => {
      const _ = document.documentElement;
      return getComputedStyle(_)
        .getPropertyValue("--bs-" + C)
        .trim();
    },
    o = (C) => {
      const _ = document.documentElement;
      return getComputedStyle(_)
        .getPropertyValue("--" + C)
        .trim();
    },
    a = (C) => (C ? (C.charAt(0) !== "/" && (C = "/" + C), e + C) : null),
    l = (C, _) => (C ? _ : ""),
    c = (C) =>
      C +
      new Date().getTime() +
      "-r-" +
      Math.random().toFixed(3).replace(".", ""),
    u = (C, _) => {
      if (((_ = _ || 0), !C)) return !0;
      const O = C.getBoundingClientRect();
      return O
        ? O.bottom + _ < 0 ||
            O.right + _ < 0 ||
            O.left - _ > window.innerWidth ||
            O.top - _ > window.innerHeight
        : !0;
    },
    d = () => {
      const C = window.navigator.userAgent.toLowerCase();
      return /android/.test(C);
    },
    f = () => {
      const C = window.navigator.userAgent.toLowerCase();
      return /iphone|ipad|ipod/.test(C);
    },
    g = () => {
      const C = window.navigator.userAgent.toLowerCase();
      return /ipad/.test(C);
    },
    y = () =>
      "ontouchstart" in window ||
      navigator.maxTouchPoints > 0 ||
      navigator.msMaxTouchPoints > 0,
    w = () => {
      const C = navigator.userAgent || navigator.vendor || window.opera;
      return /CriOS/.test(C);
    },
    I = () => {
      const C = navigator.userAgent || navigator.vendor || window.opera;
      return /Firefox/.test(C);
    },
    v = () => {
      const C = navigator.userAgent;
      return /^((?!chrome|android).)*safari/i.test(C);
    },
    m = (C) => {
      if (typeof C != "string") return C;
      let _ = C;
      return (
        (_ = _.replace(
          /\*\*(.*?)\*\*/g,
          '<span class="text-highlight">$1</span>'
        )),
        _
      );
    },
    h = (C, _) => (C.length <= _ ? C : C.substring(0, _ - 5) + "(...)"),
    x = (C) => {
      const _ = document.querySelectorAll(C || "img");
      let O = !0;
      return (
        _.forEach((z) => {
          (!z.complete || z.naturalHeight === 0) && (O = !1);
        }),
        O
      );
    },
    S = (C, _, O, z) => {
      if (!C || C === "") return "";
      if (!C.includes("/")) return C;
      const F = {
          year: "numeric",
          month: O ? "short" : "numeric",
          day: z ? void 0 : "numeric",
        },
        W = new Date(C);
      W.setDate(W.getDate() + 1);
      let G = W.toLocaleString(_, F);
      return (G = G.charAt(0).toUpperCase() + G.slice(1)), G;
    };
  return {
    addClassToBody: n,
    removeClassFromBody: r,
    clamp: i,
    getBootstrapColor: s,
    getRootSCSSVariable: o,
    resolvePath: a,
    strIf: l,
    randomTag: c,
    isElementOutsideBounds: u,
    isAndroid: d,
    isIOS: f,
    isIPad: g,
    isTouchDevice: y,
    isChrome: w,
    isFirefox: I,
    isSafari: v,
    parseJsonText: m,
    limitTextSize: h,
    didLoadAllImages: x,
    formatDate: S,
    formatDateInterval: (C, _, O, z, F) => {
      let W = "";
      const G = S(C, O, z, F),
        M = S(_, O, z, F);
      return (
        G !== "" && (W += G),
        M !== "" && (W.length !== 0 && (W += " ➔ "), (W += M)),
        W
      );
    },
    getYearsPassedSince: (C) => {
      if (!C) return 0;
      const _ = new Date(C),
        z = new Date() - _,
        F = 365.25 * 24 * 60 * 60 * 1e3;
      return z / F;
    },
    isUrlExternal: (C) => {
      const _ = document.createElement("a");
      return (_.href = C), _.hostname !== window.location.hostname;
    },
    setPageScrollingEnabled: (C) => {
      const _ = document.body;
      C
        ? (_.classList.remove("body-no-scroll"),
          _.classList.remove("position-fixed"),
          window.savedScrollY &&
            (window.scrollTo(0, window.savedScrollY),
            (window.savedScrollY = null)))
        : ((window.savedScrollY = window.scrollY),
          _.classList.add("body-no-scroll"),
          f() && _.classList.add("position-fixed"));
    },
    getColorForChart: (C) => t[C],
  };
};
class $s {
  constructor(t = 0, n = "Network Error") {
    (this.status = t), (this.text = n);
  }
}
const kE = () => {
    if (!(typeof localStorage > "u"))
      return {
        get: (e) => Promise.resolve(localStorage.getItem(e)),
        set: (e, t) => Promise.resolve(localStorage.setItem(e, t)),
        remove: (e) => Promise.resolve(localStorage.removeItem(e)),
      };
  },
  Ee = {
    origin: "https://api.emailjs.com",
    blockHeadless: !1,
    storageProvider: kE(),
  },
  tf = (e) =>
    e
      ? typeof e == "string"
        ? { publicKey: e }
        : e.toString() === "[object Object]"
        ? e
        : {}
      : {},
  AE = (e, t = "https://api.emailjs.com") => {
    if (!e) return;
    const n = tf(e);
    (Ee.publicKey = n.publicKey),
      (Ee.blockHeadless = n.blockHeadless),
      (Ee.storageProvider = n.storageProvider),
      (Ee.blockList = n.blockList),
      (Ee.limitRate = n.limitRate),
      (Ee.origin = n.origin || t);
  },
  Gy = async (e, t, n = {}) => {
    const r = await fetch(Ee.origin + e, {
        method: "POST",
        headers: n,
        body: t,
      }),
      i = await r.text(),
      s = new $s(r.status, i);
    if (r.ok) return s;
    throw s;
  },
  Yy = (e, t, n) => {
    if (!e || typeof e != "string")
      throw "The public key is required. Visit https://dashboard.emailjs.com/admin/account";
    if (!t || typeof t != "string")
      throw "The service ID is required. Visit https://dashboard.emailjs.com/admin";
    if (!n || typeof n != "string")
      throw "The template ID is required. Visit https://dashboard.emailjs.com/admin/templates";
  },
  LE = (e) => {
    if (e && e.toString() !== "[object Object]")
      throw "The template params have to be the object. Visit https://www.emailjs.com/docs/sdk/send/";
  },
  Xy = (e) => e.webdriver || !e.languages || e.languages.length === 0,
  Uy = () => new $s(451, "Unavailable For Headless Browser"),
  DE = (e, t) => {
    if (!Array.isArray(e)) throw "The BlockList list has to be an array";
    if (typeof t != "string")
      throw "The BlockList watchVariable has to be a string";
  },
  zE = (e) => {
    var t;
    return !((t = e.list) != null && t.length) || !e.watchVariable;
  },
  RE = (e, t) => (e instanceof FormData ? e.get(t) : e[t]),
  Zy = (e, t) => {
    if (zE(e)) return !1;
    DE(e.list, e.watchVariable);
    const n = RE(t, e.watchVariable);
    return typeof n != "string" ? !1 : e.list.includes(n);
  },
  Ky = () => new $s(403, "Forbidden"),
  BE = (e, t) => {
    if (typeof e != "number" || e < 0)
      throw "The LimitRate throttle has to be a positive number";
    if (t && typeof t != "string")
      throw "The LimitRate ID has to be a non-empty string";
  },
  FE = async (e, t, n) => {
    const r = Number((await n.get(e)) || 0);
    return t - Date.now() + r;
  },
  Qy = async (e, t, n) => {
    if (!t.throttle || !n) return !1;
    BE(t.throttle, t.id);
    const r = t.id || e;
    return (await FE(r, t.throttle, n)) > 0
      ? !0
      : (await n.set(r, Date.now().toString()), !1);
  },
  qy = () => new $s(429, "Too Many Requests"),
  WE = async (e, t, n, r) => {
    const i = tf(r),
      s = i.publicKey || Ee.publicKey,
      o = i.blockHeadless || Ee.blockHeadless,
      a = i.storageProvider || Ee.storageProvider,
      l = { ...Ee.blockList, ...i.blockList },
      c = { ...Ee.limitRate, ...i.limitRate };
    return o && Xy(navigator)
      ? Promise.reject(Uy())
      : (Yy(s, e, t),
        LE(n),
        n && Zy(l, n)
          ? Promise.reject(Ky())
          : (await Qy(location.pathname, c, a))
          ? Promise.reject(qy())
          : Gy(
              "/api/v1.0/email/send",
              JSON.stringify({
                lib_version: "4.4.1",
                user_id: s,
                service_id: e,
                template_id: t,
                template_params: n,
              }),
              { "Content-type": "application/json" }
            ));
  },
  HE = (e) => {
    if (!e || e.nodeName !== "FORM")
      throw "The 3rd parameter is expected to be the HTML form element or the style selector of the form";
  },
  VE = (e) => (typeof e == "string" ? document.querySelector(e) : e),
  GE = async (e, t, n, r) => {
    const i = tf(r),
      s = i.publicKey || Ee.publicKey,
      o = i.blockHeadless || Ee.blockHeadless,
      a = Ee.storageProvider || i.storageProvider,
      l = { ...Ee.blockList, ...i.blockList },
      c = { ...Ee.limitRate, ...i.limitRate };
    if (o && Xy(navigator)) return Promise.reject(Uy());
    const u = VE(n);
    Yy(s, e, t), HE(u);
    const d = new FormData(u);
    return Zy(l, d)
      ? Promise.reject(Ky())
      : (await Qy(location.pathname, c, a))
      ? Promise.reject(qy())
      : (d.append("lib_version", "4.4.1"),
        d.append("service_id", e),
        d.append("template_id", t),
        d.append("user_id", s),
        Gy("/api/v1.0/email/send-form", d));
  },
  vm = { init: AE, send: WE, sendForm: GE, EmailJSResponseStatus: $s },
  bi = { didInit: !1, config: null },
  Jy = () => {
    const e = (r) => {
        vm.init(r.publicKey), (bi.config = r), (bi.didInit = !0);
      },
      t = () => bi.didInit;
    return {
      init: e,
      isInitialized: t,
      sendContactEmail: async (r, i, s, o) => {
        if (!t()) return;
        const a = {
          from_name: r,
          from_email: i,
          custom_subject: s,
          message: o,
        };
        try {
          const l = await vm.send(bi.config.serviceId, bi.config.templateId, a);
          return !0;
        } catch {
          return !1;
        }
      },
    };
  },
  e0 = E.createContext(null),
  pt = () => E.useContext(e0),
  ql = { NOT_LOADED: 0, LOADED: 1 },
  YE = ({ children: e }) => {
    const t = X(),
      n = Jy(),
      [r, i] = E.useState(ql.NOT_LOADED),
      [s, o] = E.useState({
        settings: {},
        strings: {},
        sections: [],
        categories: [],
      }),
      [a, l] = E.useState(!1);
    E.useEffect(() => {
      c().then((m) => {});
    }, []),
      E.useEffect(() => {
        s.settings &&
          (a || u(), s.settings.emailjs && n.init(s.settings.emailjs));
      }, [s]);
    const c = async () => {
        const m = await d("/data/settings.json"),
          h = await d("/data/strings.json"),
          x = await d("/data/structure.json"),
          S = x.categories,
          b = x.sections;
        for (const T of b) {
          const j = S.find((P) => P.id === T.categoryId);
          if (!j)
            throw new Error(
              `[DataProvider] The section with id "${T.id}" has an invalid categoryId "${T.categoryId}". There's no such category.`
            );
          (T.category = j), (T.content = await d(T.jsonPath));
        }
        const $ = S.filter((T) => b.find((j) => j.categoryId === T.id));
        o((T) => ({
          ...T,
          settings: m,
          strings: h,
          categories: $,
          sections: x.sections,
        })),
          i(ql.LOADED);
      },
      u = () => {
        s.sections.length && l(!0);
      },
      d = async (m) => {
        const h = t.resolvePath(m);
        return (await fetch(h)).json();
      },
      f = () => s.settings,
      g = () => s.strings,
      y = () => s.sections,
      w = () => s.categories,
      I = (m) => (m ? s.sections.filter((h) => h.categoryId === m.id) : []),
      v = () => {
        const m = f(),
          h = y(),
          x = [
            t.resolvePath(m.profile.logoUrl),
            t.resolvePath(m.profile.profilePictureUrl),
          ];
        return (
          m.supportedLanguages.forEach((S) => {
            x.push(t.resolvePath(S.flagUrl));
          }),
          h.forEach((S) => {
            !S.content ||
              !S.content.articles ||
              S.content.articles.forEach((b) => {
                b.items &&
                  b.items.forEach(($) => {
                    !$.icon || !$.icon.img || x.push(t.resolvePath($.icon.img));
                  });
              });
          }),
          x
        );
      };
    return p.jsx(e0.Provider, {
      value: {
        getSettings: f,
        getStrings: g,
        getSections: y,
        getCategories: w,
        getCategorySections: I,
        listImagesForCache: v,
      },
      children: r === ql.LOADED && a && p.jsx(p.Fragment, { children: e }),
    });
  },
  t0 = E.createContext(null),
  J = () => E.useContext(t0),
  XE = ({ children: e }) => {
    const { getSettings: t, getStrings: n } = pt(),
      r = t(),
      i = n(),
      s = r.supportedLanguages || [],
      o = "language-preferences",
      a = s.length >= 2,
      [l, c] = E.useState(null),
      [u, d] = E.useState(null);
    E.useEffect(() => {
      const v = s.find((S) => S.default) || s[0];
      c(v.id);
      const m = window.localStorage.getItem(o),
        h = s.find((S) => S.id === m);
      if (h) {
        f(h);
        return;
      }
      const x = s.find((S) => navigator.language.includes(S.id)) || v;
      f(x);
    }, []);
    const f = (v) => {
        v && (d(v.id), window.localStorage.setItem(o, v.id.toString()));
      },
      g = () => s.find((v) => v.id === u),
      y = () => (s ? s.filter((v) => v.id !== u) : []),
      w = (v, m, h) => {
        if (!u || !v) return "locale:" + m;
        const x = v[u];
        if (x && x[m]) return x[m];
        const S = v[l];
        return S && S[m] ? S[m] : h ? null : "locale:" + m;
      },
      I = (v) => w(i.locales, v);
    return p.jsx(t0.Provider, {
      value: {
        selectedLanguageId: u,
        canChangeLanguage: a,
        setSelectedLanguage: f,
        getSelectedLanguage: g,
        getAvailableLanguages: y,
        getTranslation: w,
        getString: I,
      },
      children: u && p.jsx(p.Fragment, { children: e }),
    });
  },
  n0 = E.createContext(null),
  nf = () => E.useContext(n0),
  UE = ({ children: e }) => {
    const { getSettings: t } = pt(),
      r = t().supportedThemes || [],
      i = "theme-preferences",
      s = r.length >= 2,
      [o, a] = E.useState(null);
    E.useEffect(() => {
      const f = window.localStorage.getItem(i),
        g = r.find((w) => w.id === f),
        y = r.find((w) => w.default) || r[0];
      l(g || y);
    }, []);
    const l = (f) => {
        f &&
          (a(f.id),
          document.documentElement.setAttribute("data-theme", f.id),
          window.localStorage.setItem(i, f.id));
      },
      c = () => r.find((f) => f.id === o),
      u = () => r.filter((f) => f.id !== o),
      d = (f) => {
        const g = r.find((y) => y.id === f);
        l(g);
      };
    return p.jsx(n0.Provider, {
      value: {
        selectTheme: l,
        canChangeTheme: s,
        getSelectedTheme: c,
        getAvailableThemes: u,
        selectThemeWithId: d,
      },
      children: o && p.jsx(p.Fragment, { children: e }),
    });
  },
  r0 = E.createContext(null),
  mt = () => E.useContext(r0),
  ZE = ({ children: e }) => {
    const t = X(),
      { getSettings: n } = pt(),
      r = n(),
      [i, s] = E.useState([]),
      [o, a] = E.useState(!0),
      [l, c] = E.useState(!0),
      [u, d] = E.useState(null),
      [f, g] = E.useState(null),
      [y, w] = E.useState(null),
      [I, v] = E.useState(null);
    E.useEffect(() => {
      a(!t.isTouchDevice() && r.animatedCursorEnabled);
    }, []);
    const m = (M, k) => {
        if (i.find((N) => N.id === M)) return;
        const A = { id: M, message: k };
        s((N) => [...N, A]);
      },
      h = () => i.length,
      x = () => i,
      S = (M) => {
        s((k) => k.filter((A) => A.id !== M));
      },
      b = () => o,
      $ = () => l,
      T = () => {
        c(!l);
      },
      j = (M, k, A) => {
        d({ type: M, title: k, message: A });
      },
      P = () => {
        d(null);
      },
      C = (M, k, A) => {
        g({ url: M, title: k, description: A });
      },
      _ = () => {
        g(null);
      },
      O = (M, k, A, N, D) => {
        v({
          title: M,
          message: k,
          cancelButtonLabel: A,
          confirmButtonLabel: N,
          onConfirm: D,
        });
      },
      z = () => {
        v(null);
      },
      F = (M, k, A, N) => {
        w({ screenshots: M, aspectRatio: k, title: A, description: N });
      },
      W = () => {
        w(null);
      },
      G = () => h() || f || y || I;
    return p.jsx(r0.Provider, {
      value: {
        isShowingSpinner: h,
        listSpinnerActivities: x,
        showActivitySpinner: m,
        hideActivitySpinner: S,
        isAnimatedCursorEnabled: b,
        isAnimatedCursorActive: $,
        toggleAnimatedCursorActive: T,
        displayingNotification: u,
        displayNotification: j,
        killNotification: P,
        displayingYoutubeVideo: f,
        displayYoutubeVideo: C,
        hideYoutubeVideo: _,
        displayingGallery: y,
        displayGallery: F,
        hideGallery: W,
        pendingConfirmation: I,
        showConfirmationDialog: O,
        hideConfirmationDialog: z,
        isModalOpen: G,
      },
      children: e,
    });
  },
  Gn = [],
  Yn = [],
  Fn = () => ({
    schedule: (i, s, o) => {
      const a = setTimeout(i, s);
      Gn.push({ id: a, tag: o });
    },
    interval: (i, s, o) => {
      const a = setInterval(i, s);
      Yn.push({ id: a, tag: o });
    },
    clearAllWithTag: (i) => {
      for (let s = Gn.length - 1; s >= 0; s--)
        Gn[s].tag === i && (clearTimeout(Gn[s].id), Gn.splice(s, 1));
      for (let s = Yn.length - 1; s >= 0; s--)
        Yn[s].tag === i && (clearInterval(Yn[s].id), Yn.splice(s, 1));
    },
    clearAll: () => {
      Gn.forEach((i) => {
        clearTimeout(i.id);
      }),
        Yn.forEach((i) => {
          clearInterval(i.id);
        }),
        (Gn.length = 0),
        (Yn.length = 0);
    },
  }),
  i0 = E.createContext(null),
  pr = () => E.useContext(i0),
  KE = ({ children: e }) => {
    const { getSections: t, getCategories: n, getCategorySections: r } = pt(),
      { showActivitySpinner: i, hideActivitySpinner: s } = mt(),
      o = Fn(),
      [a, l] = E.useState(null),
      [c, u] = E.useState(!0),
      [d, f] = E.useState(!1),
      g = t(),
      y = n();
    E.useEffect(
      () => (
        window.addEventListener("popstate", I),
        window.addEventListener("hashchange", I),
        I(),
        () => {
          window.removeEventListener("popstate", I),
            window.removeEventListener("hashchange", I);
        }
      ),
      []
    );
    const w = (T) => {
        const j = g.find((P) => P.id === T);
        j && v(j);
      },
      I = () => {
        const T = window.location.hash.substring(1);
        let j = g.find((P) => P.id === T);
        !j && g.length && (j = g[0]), v(j);
      },
      v = (T) => {
        if (window.targetSectionId === T.id) return;
        const j = new Date().getTime(),
          P = j - (window.lastSectionChangeTimespan || j),
          C = 800;
        if (P > C) {
          m(T);
          return;
        }
        const _ = Math.max(C - P, 300);
        i("section-changing"),
          o.clearAllWithTag("section-state"),
          o.schedule(
            () => {
              m(T);
            },
            _,
            "section-state"
          );
      },
      m = (T) => {
        o.clearAllWithTag("section-state"),
          (window.lastSectionChangeTimespan = new Date().getTime()),
          (window.targetSectionId = T.id),
          (window.location.hash = T.id),
          l(T.id),
          s("section-changing"),
          T.category &&
            ((window.visitHistory = window.visitHistory || []),
            (window.visitHistory[T.category.id] = T.id));
      },
      h = () => g.find((T) => T.id === a),
      x = (T) => (a ? a === T : !1),
      S = (T) => {
        if (b(T)) return;
        const j = y.find((_) => _.id === T),
          P = r(j);
        if (!j || !P || P.length === 0) return;
        const C =
          window.visitHistory && window.visitHistory[T]
            ? window.visitHistory[T]
            : P[0].id;
        w(C);
      },
      b = (T) => {
        const j = h();
        return !j || !j.category ? !1 : j.category.id === T;
      },
      $ = () => {
        const T = h();
        return T ? T.category : null;
      };
    return p.jsx(i0.Provider, {
      value: {
        activeSectionId: a,
        setActiveSection: w,
        getActiveSection: h,
        isSectionActive: x,
        setActiveSectionFromCategory: S,
        isCategoryActive: b,
        getActiveCategory: $,
        fixedNavigationEnabled: c,
        setFixedNavigationEnabled: u,
        didRenderFirstSection: d,
        setDidRenderFirstSection: f,
      },
      children: a && p.jsx(p.Fragment, { children: e }),
    });
  },
  s0 = E.createContext(null),
  fe = () => E.useContext(s0),
  wr = { xxs: 0, xs: 360, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 },
  hm = 0.1,
  po = X(),
  Jl = Fn(),
  QE = ({ children: e }) => {
    const [t, n] = E.useState(0),
      [r, i] = E.useState(0),
      [s, o] = E.useState(window.innerWidth),
      [a, l] = E.useState(window.innerHeight),
      [c, u] = E.useState(0),
      [d, f] = E.useState(!1);
    E.useEffect(
      () => (
        g(),
        () => {
          y();
        }
      ),
      []
    );
    const g = () => {
        window.addEventListener("scroll", w),
          window.addEventListener("resize", I),
          window.addEventListener("keydown", m),
          w(),
          I(),
          Jl.clearAllWithTag("window-provider"),
          Jl.interval(
            () => {
              v();
            },
            hm * 1e3,
            "window-provider"
          ),
          f(!0);
      },
      y = () => {
        window.removeEventListener("scroll", w),
          window.removeEventListener("resize", I),
          window.removeEventListener("keydown", m),
          Jl.clearAllWithTag("window-provider"),
          f(!1);
      },
      w = () => {
        n(window.scrollX), i(window.scrollY);
      },
      I = () => {
        o(window.innerWidth), l(window.innerHeight);
      },
      v = () => {
        u((T) => T + hm);
      },
      m = (T) => {
        switch (T.key) {
          case "ArrowUp":
          case "ArrowDown":
            $();
            break;
        }
      },
      h = (T) => s >= wr[T],
      x = () => {
        const T = s;
        return T < wr.sm
          ? "xs"
          : T < wr.md
          ? "sm"
          : T < wr.lg
          ? "md"
          : T < wr.xl
          ? "lg"
          : T < wr.xxl
          ? "xl"
          : "xxl";
      },
      S = () => !h(po.getRootSCSSVariable("mobile-layout-breakpoint") || "md"),
      b = () => po.isIOS() && po.isChrome(),
      $ = () => {
        const T = document.querySelector(".custom-scrollable"),
          j = document.querySelector(".custom-modal");
        !T || po.isTouchDevice() || j || T.focus();
      };
    return p.jsx(s0.Provider, {
      value: {
        scrollX: t,
        scrollY: r,
        innerWidth: s,
        innerHeight: a,
        currentTimeSpan: c,
        isBreakpoint: h,
        getBreakpoint: x,
        isMobileLayout: S,
        hasFooterOffset: b,
        focusMainView: $,
      },
      children: d && p.jsx(p.Fragment, { children: e }),
    });
  };
function rf({ children: e, opaque: t, nav: n, className: r, id: i }) {
  const s = t ? "box-opacity" : "",
    o = n ? "box-nav" : "";
  return p.jsx("div", { className: `box ${s} ${o} ${r}`, id: i, children: e });
}
function Z({ iconName: e, colors: t, className: n }) {
  const r = `fa-icon ${e}`,
    i = t ? { color: t.fill } : null,
    s = t
      ? { backgroundColor: t.bg, padding: "5px", borderRadius: "100%" }
      : null;
  return p.jsx("div", {
    className: `fa-icon-wrapper d-inline ${n}`,
    style: s,
    children: p.jsx("i", { className: r, style: i }),
  });
}
function ol({
  className: e,
  tooltip: t,
  icon: n,
  size: r,
  onClick: i,
  nav: s,
  color: o,
}) {
  const c = "tool-button-size-" + X().clamp(r, 1, 4),
    u = s ? "tool-button-nav" : "",
    d = "tool-button-color-" + o;
  return p.jsx("button", {
    "data-tooltip": t,
    className: `btn tool-button ${c} ${u} ${e} ${d}`,
    onClick: i,
    children: p.jsx("div", {
      className: "tool-button-content",
      children: p.jsx(Z, { iconName: n }),
    }),
  });
}
const Pi = { LOADING: "loading", LOADED: "loaded", ERROR: "error" };
function xs({ className: e, src: t, alt: n }) {
  const [r, i] = E.useState(Pi.LOADING),
    s = () => {
      a(Pi.LOADED);
    },
    o = () => {
      a(Pi.ERROR);
    },
    a = (l) => {
      l !== r && i(l);
    };
  return p.jsxs("div", {
    className: `image-view-wrapper ${e}`,
    children: [
      (!t || r === Pi.LOADING) &&
        p.jsx("img", {
          alt: "spinner",
          className: "spinner",
          src: "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBzdHlsZT0ibWFyZ2luOiBhdXRvOyBiYWNrZ3JvdW5kOiBub25lOyBkaXNwbGF5OiBibG9jazsgc2hhcGUtcmVuZGVyaW5nOiBhdXRvOyIgd2lkdGg9IjMzN3B4IiBoZWlnaHQ9IjMzN3B4IiB2aWV3Qm94PSIwIDAgMTAwIDEwMCIgcHJlc2VydmVBc3BlY3RSYXRpbz0ieE1pZFlNaWQiPgo8ZyB0cmFuc2Zvcm09InJvdGF0ZSgwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iMyIgcnk9IjYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDA0MDQwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuOTE2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAgNTAgNTApIj4KICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSIzIiByeT0iNiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiM0MDQwNDAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC44MzMzMzMzMzMzMzMzMzM0cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg2MCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQwNDA0MCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjc1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSg5MCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQwNDA0MCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjY2NjY2NjY2NjY2NjY2NjZzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDEyMCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQwNDA0MCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjU4MzMzMzMzMzMzMzMzMzRzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDE1MCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQwNDA0MCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjVzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDE4MCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQwNDA0MCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjQxNjY2NjY2NjY2NjY2NjdzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDIxMCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQwNDA0MCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjMzMzMzMzMzMzMzMzMzMzNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDI0MCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQwNDA0MCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49Ii0wLjI1cyIgcmVwZWF0Q291bnQ9ImluZGVmaW5pdGUiPjwvYW5pbWF0ZT4KICA8L3JlY3Q+CjwvZz48ZyB0cmFuc2Zvcm09InJvdGF0ZSgyNzAgNTAgNTApIj4KICA8cmVjdCB4PSI0NyIgeT0iMjQiIHJ4PSIzIiByeT0iNiIgd2lkdGg9IjYiIGhlaWdodD0iMTIiIGZpbGw9IiM0MDQwNDAiPgogICAgPGFuaW1hdGUgYXR0cmlidXRlTmFtZT0ib3BhY2l0eSIgdmFsdWVzPSIxOzAiIGtleVRpbWVzPSIwOzEiIGR1cj0iMXMiIGJlZ2luPSItMC4xNjY2NjY2NjY2NjY2NjY2NnMiIHJlcGVhdENvdW50PSJpbmRlZmluaXRlIj48L2FuaW1hdGU+CiAgPC9yZWN0Pgo8L2c+PGcgdHJhbnNmb3JtPSJyb3RhdGUoMzAwIDUwIDUwKSI+CiAgPHJlY3QgeD0iNDciIHk9IjI0IiByeD0iMyIgcnk9IjYiIHdpZHRoPSI2IiBoZWlnaHQ9IjEyIiBmaWxsPSIjNDA0MDQwIj4KICAgIDxhbmltYXRlIGF0dHJpYnV0ZU5hbWU9Im9wYWNpdHkiIHZhbHVlcz0iMTswIiBrZXlUaW1lcz0iMDsxIiBkdXI9IjFzIiBiZWdpbj0iLTAuMDgzMzMzMzMzMzMzMzMzMzNzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPjxnIHRyYW5zZm9ybT0icm90YXRlKDMzMCA1MCA1MCkiPgogIDxyZWN0IHg9IjQ3IiB5PSIyNCIgcng9IjMiIHJ5PSI2IiB3aWR0aD0iNiIgaGVpZ2h0PSIxMiIgZmlsbD0iIzQwNDA0MCI+CiAgICA8YW5pbWF0ZSBhdHRyaWJ1dGVOYW1lPSJvcGFjaXR5IiB2YWx1ZXM9IjE7MCIga2V5VGltZXM9IjA7MSIgZHVyPSIxcyIgYmVnaW49IjBzIiByZXBlYXRDb3VudD0iaW5kZWZpbml0ZSI+PC9hbmltYXRlPgogIDwvcmVjdD4KPC9nPgo8IS0tIFtsZGlvXSBnZW5lcmF0ZWQgYnkgaHR0cHM6Ly9sb2FkaW5nLmlvLyAtLT48L3N2Zz4=",
        }),
      t &&
        p.jsx("img", {
          src: t,
          onLoad: s,
          onError: o,
          className: `image ${
            r === Pi.LOADING ? "invisible position-absolute" : ""
          }`,
          alt: n,
        }),
    ],
  });
}
function o0({ className: e, id: t, label: n }) {
  const [r, i] = E.useState("");
  return (
    E.useEffect(() => {
      n && i(n);
    }, [n]),
    p.jsx("div", {
      className: `custom-tooltip ${e} text-center text-3`,
      id: t,
      children: r,
    })
  );
}
function qE({ available: e, message: t, smallMode: n }) {
  const r = X(),
    { getBreakpoint: i } = fe(),
    s = r.isTouchDevice(),
    [o, a] = E.useState(""),
    l = e ? "status-circle-active" : "status-circle-inactive",
    c = e ? "status-circle-active-pulse" : "status-circle-inactive-pulse",
    [u, d] = E.useState(!1);
  E.useEffect(
    () => (
      window.addEventListener("mousedown", w),
      () => {
        window.removeEventListener("mousedown", w);
      }
    ),
    []
  ),
    E.useEffect(() => {
      a("d-none"),
        setTimeout(() => {
          a("");
        }, 10);
    }, [i(), n]);
  const f = () => {
      s || d(!0);
    },
    g = () => {
      s || d(!1);
    },
    y = (I) => {
      s && (d(!u), I.stopPropagation());
    },
    w = (I) => {
      !s || I.target.classList.contains("status-badge") || d(!1);
    };
  return p.jsxs("div", {
    className: `status-badge ${n ? "status-badge-sm" : ""} ${o}`,
    onMouseEnter: f,
    onMouseLeave: g,
    onClick: y,
    children: [
      p.jsx("div", { className: `status-circle ${l}` }),
      p.jsx("div", { className: `status-circle-pulse ${c}` }),
      u && p.jsx(o0, { id: "status-tooltip", label: t, position: "right" }),
    ],
  });
}
function a0({ shrink: e }) {
  const t = X(),
    { getTranslation: n } = J(),
    { getSettings: r } = pt(),
    i = r(),
    s = i.profile,
    o = t.parseJsonText(s.stylizedName),
    a = t.parseJsonText(n(s.locales, "role")),
    l = t.resolvePath(s.profilePictureUrl),
    c = t.resolvePath(s.logoUrl),
    u = i.status,
    d = u.visible,
    f = u.available,
    g = n(u.locales, "message");
  return p.jsxs("header", {
    className: `nav-header ${e ? "nav-header-shrink" : ""}`,
    children: [
      p.jsx(xs, { src: l, className: "img-view-avatar", alt: name }),
      d && p.jsx(qE, { available: f, message: g, smallMode: e }),
      p.jsxs("div", {
        className: "info mt-3 text-center",
        children: [
          p.jsxs("h5", {
            className: "name",
            children: [
              p.jsx(xs, {
                src: c,
                alt: "logo",
                className: "img-view-logo me-1",
              }),
              p.jsx("span", { dangerouslySetInnerHTML: { __html: o } }),
            ],
          }),
          p.jsx("div", {
            className: "role",
            children: p.jsx("span", { children: a }),
          }),
        ],
      }),
    ],
  });
}
function l0({
  children: e,
  className: t,
  direction: n,
  shrink: r,
  fillSpace: i,
}) {
  const s = X();
  return p.jsx("div", {
    className: `
            nav-sidebar-group 
            nav-sidebar-group-${n}
            ${s.strIf(r, `nav-sidebar-group-${n}-shrink`)}
            ${s.strIf(i, "nav-sidebar-group-fill")}
            ${t}
        `,
    children: e,
  });
}
function Ko({ children: e, visible: t }) {
  return p.jsx("div", {
    className: `nav-sidebar-group-item ${t ? "" : "d-none"}`,
    children: e,
  });
}
var u0 = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/ (function (e) {
  (function () {
    var t = {}.hasOwnProperty;
    function n() {
      for (var s = "", o = 0; o < arguments.length; o++) {
        var a = arguments[o];
        a && (s = i(s, r(a)));
      }
      return s;
    }
    function r(s) {
      if (typeof s == "string" || typeof s == "number") return s;
      if (typeof s != "object") return "";
      if (Array.isArray(s)) return n.apply(null, s);
      if (
        s.toString !== Object.prototype.toString &&
        !s.toString.toString().includes("[native code]")
      )
        return s.toString();
      var o = "";
      for (var a in s) t.call(s, a) && s[a] && (o = i(o, a));
      return o;
    }
    function i(s, o) {
      return o ? (s ? s + " " + o : s + o) : s;
    }
    e.exports ? ((n.default = n), (e.exports = n)) : (window.classNames = n);
  })();
})(u0);
var JE = u0.exports;
const ne = od(JE);
function kc() {
  return (
    (kc = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n) ({}).hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    kc.apply(null, arguments)
  );
}
function eI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.includes(r)) continue;
      n[r] = e[r];
    }
  return n;
}
function gm(e) {
  return "default" + e.charAt(0).toUpperCase() + e.substr(1);
}
function tI(e) {
  var t = nI(e, "string");
  return typeof t == "symbol" ? t : String(t);
}
function nI(e, t) {
  if (typeof e != "object" || e === null) return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t);
    if (typeof r != "object") return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(e);
}
function rI(e, t, n) {
  var r = E.useRef(e !== void 0),
    i = E.useState(t),
    s = i[0],
    o = i[1],
    a = e !== void 0,
    l = r.current;
  return (
    (r.current = a),
    !a && l && s !== t && o(t),
    [
      a ? e : s,
      E.useCallback(
        function (c) {
          for (
            var u = arguments.length, d = new Array(u > 1 ? u - 1 : 0), f = 1;
            f < u;
            f++
          )
            d[f - 1] = arguments[f];
          n && n.apply(void 0, [c].concat(d)), o(c);
        },
        [n]
      ),
    ]
  );
}
function iI(e, t) {
  return Object.keys(t).reduce(function (n, r) {
    var i,
      s = n,
      o = s[gm(r)],
      a = s[r],
      l = eI(s, [gm(r), r].map(tI)),
      c = t[r],
      u = rI(a, o, e[c]),
      d = u[0],
      f = u[1];
    return kc({}, l, ((i = {}), (i[r] = d), (i[c] = f), i));
  }, e);
}
const sI = ["xxl", "xl", "lg", "md", "sm", "xs"],
  oI = "xs",
  al = E.createContext({ prefixes: {}, breakpoints: sI, minBreakpoint: oI });
function le(e, t) {
  const { prefixes: n } = E.useContext(al);
  return e || n[t] || t;
}
function c0() {
  const { breakpoints: e } = E.useContext(al);
  return e;
}
function d0() {
  const { minBreakpoint: e } = E.useContext(al);
  return e;
}
function aI() {
  const { dir: e } = E.useContext(al);
  return e === "rtl";
}
function lI(e) {
  return (e && e.ownerDocument) || document;
}
const f0 = !!(
  typeof window < "u" &&
  window.document &&
  window.document.createElement
);
var Ac = !1,
  Lc = !1;
try {
  var eu = {
    get passive() {
      return (Ac = !0);
    },
    get once() {
      return (Lc = Ac = !0);
    },
  };
  f0 &&
    (window.addEventListener("test", eu, eu),
    window.removeEventListener("test", eu, !0));
} catch {}
function p0(e, t, n, r) {
  if (r && typeof r != "boolean" && !Lc) {
    var i = r.once,
      s = r.capture,
      o = n;
    !Lc &&
      i &&
      ((o =
        n.__once ||
        function a(l) {
          this.removeEventListener(t, a, s), n.call(this, l);
        }),
      (n.__once = o)),
      e.addEventListener(t, o, Ac ? r : s);
  }
  e.addEventListener(t, n, r);
}
function uI(e, t, n, r) {
  var i = r && typeof r != "boolean" ? r.capture : r;
  e.removeEventListener(t, n, i),
    n.__once && e.removeEventListener(t, n.__once, i);
}
function mo(e, t, n, r) {
  return (
    p0(e, t, n, r),
    function () {
      uI(e, t, n, r);
    }
  );
}
const ym = (e) =>
  !e || typeof e == "function"
    ? e
    : (t) => {
        e.current = t;
      };
function cI(e, t) {
  const n = ym(e),
    r = ym(t);
  return (i) => {
    n && n(i), r && r(i);
  };
}
function m0(e, t) {
  return E.useMemo(() => cI(e, t), [e, t]);
}
function dI(e) {
  const t = E.useRef(e);
  return (
    E.useEffect(() => {
      t.current = e;
    }, [e]),
    t
  );
}
function nn(e) {
  const t = dI(e);
  return E.useCallback(
    function (...n) {
      return t.current && t.current(...n);
    },
    [t]
  );
}
const v0 = (e) =>
  E.forwardRef((t, n) =>
    p.jsx("div", { ...t, ref: n, className: ne(t.className, e) })
  );
function fI() {
  return E.useState(null);
}
function pI(e, t, n, r = !1) {
  const i = nn(n);
  E.useEffect(() => {
    const s = typeof e == "function" ? e() : e;
    return s.addEventListener(t, i, r), () => s.removeEventListener(t, i, r);
  }, [e]);
}
function mI() {
  const e = E.useRef(!0),
    t = E.useRef(() => e.current);
  return (
    E.useEffect(
      () => (
        (e.current = !0),
        () => {
          e.current = !1;
        }
      ),
      []
    ),
    t.current
  );
}
function vI(e) {
  const t = E.useRef(null);
  return (
    E.useEffect(() => {
      t.current = e;
    }),
    t.current
  );
}
const hI =
    typeof global < "u" &&
    global.navigator &&
    global.navigator.product === "ReactNative",
  gI = typeof document < "u",
  yI = gI || hI ? E.useLayoutEffect : E.useEffect,
  wI = ["as", "disabled"];
function xI(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function SI(e) {
  return !e || e.trim() === "#";
}
function sf({
  tagName: e,
  disabled: t,
  href: n,
  target: r,
  rel: i,
  role: s,
  onClick: o,
  tabIndex: a = 0,
  type: l,
}) {
  e || (n != null || r != null || i != null ? (e = "a") : (e = "button"));
  const c = { tagName: e };
  if (e === "button") return [{ type: l || "button", disabled: t }, c];
  const u = (f) => {
      if (((t || (e === "a" && SI(n))) && f.preventDefault(), t)) {
        f.stopPropagation();
        return;
      }
      o == null || o(f);
    },
    d = (f) => {
      f.key === " " && (f.preventDefault(), u(f));
    };
  return (
    e === "a" && (n || (n = "#"), t && (n = void 0)),
    [
      {
        role: s ?? "button",
        disabled: void 0,
        tabIndex: t ? void 0 : a,
        href: n,
        target: e === "a" ? r : void 0,
        "aria-disabled": t || void 0,
        rel: e === "a" ? i : void 0,
        onClick: u,
        onKeyDown: d,
      },
      c,
    ]
  );
}
const h0 = E.forwardRef((e, t) => {
  let { as: n, disabled: r } = e,
    i = xI(e, wI);
  const [s, { tagName: o }] = sf(Object.assign({ tagName: n, disabled: r }, i));
  return p.jsx(o, Object.assign({}, i, s, { ref: t }));
});
h0.displayName = "Button";
const EI = ["onKeyDown"];
function II(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function TI(e) {
  return !e || e.trim() === "#";
}
const g0 = E.forwardRef((e, t) => {
  let { onKeyDown: n } = e,
    r = II(e, EI);
  const [i] = sf(Object.assign({ tagName: "a" }, r)),
    s = nn((o) => {
      i.onKeyDown(o), n == null || n(o);
    });
  return TI(r.href) || r.role === "button"
    ? p.jsx("a", Object.assign({ ref: t }, r, i, { onKeyDown: s }))
    : p.jsx("a", Object.assign({ ref: t }, r, { onKeyDown: n }));
});
g0.displayName = "Anchor";
const y0 = E.forwardRef(
  (
    {
      as: e,
      bsPrefix: t,
      variant: n = "primary",
      size: r,
      active: i = !1,
      disabled: s = !1,
      className: o,
      ...a
    },
    l
  ) => {
    const c = le(t, "btn"),
      [u, { tagName: d }] = sf({ tagName: e, disabled: s, ...a }),
      f = d;
    return p.jsx(f, {
      ...u,
      ...a,
      ref: l,
      disabled: s,
      className: ne(
        o,
        c,
        i && "active",
        n && `${c}-${n}`,
        r && `${c}-${r}`,
        a.href && s && "disabled"
      ),
    });
  }
);
y0.displayName = "Button";
const dn = E.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
    (t = le(t, "card-body")), p.jsx(n, { ref: i, className: ne(e, t), ...r })
  )
);
dn.displayName = "CardBody";
const ll = E.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
    (t = le(t, "card-footer")), p.jsx(n, { ref: i, className: ne(e, t), ...r })
  )
);
ll.displayName = "CardFooter";
const w0 = E.createContext(null);
w0.displayName = "CardHeaderContext";
const ul = E.forwardRef(
  ({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const s = le(e, "card-header"),
      o = E.useMemo(() => ({ cardHeaderBsPrefix: s }), [s]);
    return p.jsx(w0.Provider, {
      value: o,
      children: p.jsx(n, { ref: i, ...r, className: ne(t, s) }),
    });
  }
);
ul.displayName = "CardHeader";
const x0 = E.forwardRef(
  ({ bsPrefix: e, className: t, variant: n, as: r = "img", ...i }, s) => {
    const o = le(e, "card-img");
    return p.jsx(r, { ref: s, className: ne(n ? `${o}-${n}` : o, t), ...i });
  }
);
x0.displayName = "CardImg";
const S0 = E.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "div", ...r }, i) => (
    (t = le(t, "card-img-overlay")),
    p.jsx(n, { ref: i, className: ne(e, t), ...r })
  )
);
S0.displayName = "CardImgOverlay";
const E0 = E.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "a", ...r }, i) => (
    (t = le(t, "card-link")), p.jsx(n, { ref: i, className: ne(e, t), ...r })
  )
);
E0.displayName = "CardLink";
const CI = v0("h6"),
  I0 = E.forwardRef(
    ({ className: e, bsPrefix: t, as: n = CI, ...r }, i) => (
      (t = le(t, "card-subtitle")),
      p.jsx(n, { ref: i, className: ne(e, t), ...r })
    )
  );
I0.displayName = "CardSubtitle";
const T0 = E.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "p", ...r }, i) => (
    (t = le(t, "card-text")), p.jsx(n, { ref: i, className: ne(e, t), ...r })
  )
);
T0.displayName = "CardText";
const bI = v0("h5"),
  C0 = E.forwardRef(
    ({ className: e, bsPrefix: t, as: n = bI, ...r }, i) => (
      (t = le(t, "card-title")), p.jsx(n, { ref: i, className: ne(e, t), ...r })
    )
  );
C0.displayName = "CardTitle";
const b0 = E.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      bg: n,
      text: r,
      border: i,
      body: s = !1,
      children: o,
      as: a = "div",
      ...l
    },
    c
  ) => {
    const u = le(e, "card");
    return p.jsx(a, {
      ref: c,
      ...l,
      className: ne(t, u, n && `bg-${n}`, r && `text-${r}`, i && `border-${i}`),
      children: s ? p.jsx(dn, { children: o }) : o,
    });
  }
);
b0.displayName = "Card";
const si = Object.assign(b0, {
  Img: x0,
  Title: C0,
  Subtitle: I0,
  Body: dn,
  Link: E0,
  Text: T0,
  Header: ul,
  Footer: ll,
  ImgOverlay: S0,
});
function PI({ as: e, bsPrefix: t, className: n, ...r }) {
  t = le(t, "col");
  const i = c0(),
    s = d0(),
    o = [],
    a = [];
  return (
    i.forEach((l) => {
      const c = r[l];
      delete r[l];
      let u, d, f;
      typeof c == "object" && c != null
        ? ({ span: u, offset: d, order: f } = c)
        : (u = c);
      const g = l !== s ? `-${l}` : "";
      u && o.push(u === !0 ? `${t}${g}` : `${t}${g}-${u}`),
        f != null && a.push(`order${g}-${f}`),
        d != null && a.push(`offset${g}-${d}`);
    }),
    [
      { ...r, className: ne(n, ...o, ...a) },
      { as: e, bsPrefix: t, spans: o },
    ]
  );
}
const Ln = E.forwardRef((e, t) => {
  const [{ className: n, ...r }, { as: i = "div", bsPrefix: s, spans: o }] =
    PI(e);
  return p.jsx(i, { ...r, ref: t, className: ne(n, !o.length && s) });
});
Ln.displayName = "Col";
var jI = Function.prototype.bind.call(Function.prototype.call, [].slice);
function wm(e, t) {
  return jI(e.querySelectorAll(t));
}
function $I(e, t, n) {
  const r = E.useRef(e !== void 0),
    [i, s] = E.useState(t),
    o = e !== void 0,
    a = r.current;
  return (
    (r.current = o),
    !o && a && i !== t && s(t),
    [
      o ? e : i,
      E.useCallback(
        (...l) => {
          const [c, ...u] = l;
          let d = n == null ? void 0 : n(c, ...u);
          return s(c), d;
        },
        [n]
      ),
    ]
  );
}
function _I() {
  const [, e] = E.useReducer((t) => !t, !1);
  return e;
}
const cl = E.createContext(null);
var xm = Object.prototype.hasOwnProperty;
function Sm(e, t, n) {
  for (n of e.keys()) if (Qi(n, t)) return n;
}
function Qi(e, t) {
  var n, r, i;
  if (e === t) return !0;
  if (e && t && (n = e.constructor) === t.constructor) {
    if (n === Date) return e.getTime() === t.getTime();
    if (n === RegExp) return e.toString() === t.toString();
    if (n === Array) {
      if ((r = e.length) === t.length) for (; r-- && Qi(e[r], t[r]); );
      return r === -1;
    }
    if (n === Set) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((i = r),
          (i && typeof i == "object" && ((i = Sm(t, i)), !i)) || !t.has(i))
        )
          return !1;
      return !0;
    }
    if (n === Map) {
      if (e.size !== t.size) return !1;
      for (r of e)
        if (
          ((i = r[0]),
          (i && typeof i == "object" && ((i = Sm(t, i)), !i)) ||
            !Qi(r[1], t.get(i)))
        )
          return !1;
      return !0;
    }
    if (n === ArrayBuffer) (e = new Uint8Array(e)), (t = new Uint8Array(t));
    else if (n === DataView) {
      if ((r = e.byteLength) === t.byteLength)
        for (; r-- && e.getInt8(r) === t.getInt8(r); );
      return r === -1;
    }
    if (ArrayBuffer.isView(e)) {
      if ((r = e.byteLength) === t.byteLength) for (; r-- && e[r] === t[r]; );
      return r === -1;
    }
    if (!n || typeof e == "object") {
      r = 0;
      for (n in e)
        if (
          (xm.call(e, n) && ++r && !xm.call(t, n)) ||
          !(n in t) ||
          !Qi(e[n], t[n])
        )
          return !1;
      return Object.keys(t).length === r;
    }
  }
  return e !== e && t !== t;
}
function OI(e) {
  const t = mI();
  return [
    e[0],
    E.useCallback(
      (n) => {
        if (t()) return e[1](n);
      },
      [t, e[1]]
    ),
  ];
}
var We = "top",
  dt = "bottom",
  ft = "right",
  He = "left",
  of = "auto",
  _s = [We, dt, ft, He],
  Qr = "start",
  Ss = "end",
  MI = "clippingParents",
  P0 = "viewport",
  ji = "popper",
  NI = "reference",
  Em = _s.reduce(function (e, t) {
    return e.concat([t + "-" + Qr, t + "-" + Ss]);
  }, []),
  j0 = [].concat(_s, [of]).reduce(function (e, t) {
    return e.concat([t, t + "-" + Qr, t + "-" + Ss]);
  }, []),
  kI = "beforeRead",
  AI = "read",
  LI = "afterRead",
  DI = "beforeMain",
  zI = "main",
  RI = "afterMain",
  BI = "beforeWrite",
  FI = "write",
  WI = "afterWrite",
  HI = [kI, AI, LI, DI, zI, RI, BI, FI, WI];
function Rt(e) {
  return e.split("-")[0];
}
function Qe(e) {
  if (e == null) return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return (t && t.defaultView) || window;
  }
  return e;
}
function lr(e) {
  var t = Qe(e).Element;
  return e instanceof t || e instanceof Element;
}
function Bt(e) {
  var t = Qe(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function af(e) {
  if (typeof ShadowRoot > "u") return !1;
  var t = Qe(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
var nr = Math.max,
  _a = Math.min,
  qr = Math.round;
function Dc() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands)
    ? e.brands
        .map(function (t) {
          return t.brand + "/" + t.version;
        })
        .join(" ")
    : navigator.userAgent;
}
function $0() {
  return !/^((?!chrome|android).)*safari/i.test(Dc());
}
function Jr(e, t, n) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  var r = e.getBoundingClientRect(),
    i = 1,
    s = 1;
  t &&
    Bt(e) &&
    ((i = (e.offsetWidth > 0 && qr(r.width) / e.offsetWidth) || 1),
    (s = (e.offsetHeight > 0 && qr(r.height) / e.offsetHeight) || 1));
  var o = lr(e) ? Qe(e) : window,
    a = o.visualViewport,
    l = !$0() && n,
    c = (r.left + (l && a ? a.offsetLeft : 0)) / i,
    u = (r.top + (l && a ? a.offsetTop : 0)) / s,
    d = r.width / i,
    f = r.height / s;
  return {
    width: d,
    height: f,
    top: u,
    right: c + d,
    bottom: u + f,
    left: c,
    x: c,
    y: u,
  };
}
function lf(e) {
  var t = Jr(e),
    n = e.offsetWidth,
    r = e.offsetHeight;
  return (
    Math.abs(t.width - n) <= 1 && (n = t.width),
    Math.abs(t.height - r) <= 1 && (r = t.height),
    { x: e.offsetLeft, y: e.offsetTop, width: n, height: r }
  );
}
function _0(e, t) {
  var n = t.getRootNode && t.getRootNode();
  if (e.contains(t)) return !0;
  if (n && af(n)) {
    var r = t;
    do {
      if (r && e.isSameNode(r)) return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function Dn(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function ln(e) {
  return Qe(e).getComputedStyle(e);
}
function VI(e) {
  return ["table", "td", "th"].indexOf(Dn(e)) >= 0;
}
function Wn(e) {
  return ((lr(e) ? e.ownerDocument : e.document) || window.document)
    .documentElement;
}
function dl(e) {
  return Dn(e) === "html"
    ? e
    : e.assignedSlot || e.parentNode || (af(e) ? e.host : null) || Wn(e);
}
function Im(e) {
  return !Bt(e) || ln(e).position === "fixed" ? null : e.offsetParent;
}
function GI(e) {
  var t = /firefox/i.test(Dc()),
    n = /Trident/i.test(Dc());
  if (n && Bt(e)) {
    var r = ln(e);
    if (r.position === "fixed") return null;
  }
  var i = dl(e);
  for (af(i) && (i = i.host); Bt(i) && ["html", "body"].indexOf(Dn(i)) < 0; ) {
    var s = ln(i);
    if (
      s.transform !== "none" ||
      s.perspective !== "none" ||
      s.contain === "paint" ||
      ["transform", "perspective"].indexOf(s.willChange) !== -1 ||
      (t && s.willChange === "filter") ||
      (t && s.filter && s.filter !== "none")
    )
      return i;
    i = i.parentNode;
  }
  return null;
}
function Os(e) {
  for (var t = Qe(e), n = Im(e); n && VI(n) && ln(n).position === "static"; )
    n = Im(n);
  return n &&
    (Dn(n) === "html" || (Dn(n) === "body" && ln(n).position === "static"))
    ? t
    : n || GI(e) || t;
}
function uf(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function qi(e, t, n) {
  return nr(e, _a(t, n));
}
function YI(e, t, n) {
  var r = qi(e, t, n);
  return r > n ? n : r;
}
function O0() {
  return { top: 0, right: 0, bottom: 0, left: 0 };
}
function M0(e) {
  return Object.assign({}, O0(), e);
}
function N0(e, t) {
  return t.reduce(function (n, r) {
    return (n[r] = e), n;
  }, {});
}
var XI = function (t, n) {
  return (
    (t =
      typeof t == "function"
        ? t(Object.assign({}, n.rects, { placement: n.placement }))
        : t),
    M0(typeof t != "number" ? t : N0(t, _s))
  );
};
function UI(e) {
  var t,
    n = e.state,
    r = e.name,
    i = e.options,
    s = n.elements.arrow,
    o = n.modifiersData.popperOffsets,
    a = Rt(n.placement),
    l = uf(a),
    c = [He, ft].indexOf(a) >= 0,
    u = c ? "height" : "width";
  if (!(!s || !o)) {
    var d = XI(i.padding, n),
      f = lf(s),
      g = l === "y" ? We : He,
      y = l === "y" ? dt : ft,
      w =
        n.rects.reference[u] + n.rects.reference[l] - o[l] - n.rects.popper[u],
      I = o[l] - n.rects.reference[l],
      v = Os(s),
      m = v ? (l === "y" ? v.clientHeight || 0 : v.clientWidth || 0) : 0,
      h = w / 2 - I / 2,
      x = d[g],
      S = m - f[u] - d[y],
      b = m / 2 - f[u] / 2 + h,
      $ = qi(x, b, S),
      T = l;
    n.modifiersData[r] = ((t = {}), (t[T] = $), (t.centerOffset = $ - b), t);
  }
}
function ZI(e) {
  var t = e.state,
    n = e.options,
    r = n.element,
    i = r === void 0 ? "[data-popper-arrow]" : r;
  i != null &&
    ((typeof i == "string" && ((i = t.elements.popper.querySelector(i)), !i)) ||
      (_0(t.elements.popper, i) && (t.elements.arrow = i)));
}
const KI = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: UI,
  effect: ZI,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"],
};
function ei(e) {
  return e.split("-")[1];
}
var QI = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
function qI(e, t) {
  var n = e.x,
    r = e.y,
    i = t.devicePixelRatio || 1;
  return { x: qr(n * i) / i || 0, y: qr(r * i) / i || 0 };
}
function Tm(e) {
  var t,
    n = e.popper,
    r = e.popperRect,
    i = e.placement,
    s = e.variation,
    o = e.offsets,
    a = e.position,
    l = e.gpuAcceleration,
    c = e.adaptive,
    u = e.roundOffsets,
    d = e.isFixed,
    f = o.x,
    g = f === void 0 ? 0 : f,
    y = o.y,
    w = y === void 0 ? 0 : y,
    I = typeof u == "function" ? u({ x: g, y: w }) : { x: g, y: w };
  (g = I.x), (w = I.y);
  var v = o.hasOwnProperty("x"),
    m = o.hasOwnProperty("y"),
    h = He,
    x = We,
    S = window;
  if (c) {
    var b = Os(n),
      $ = "clientHeight",
      T = "clientWidth";
    if (
      (b === Qe(n) &&
        ((b = Wn(n)),
        ln(b).position !== "static" &&
          a === "absolute" &&
          (($ = "scrollHeight"), (T = "scrollWidth"))),
      (b = b),
      i === We || ((i === He || i === ft) && s === Ss))
    ) {
      x = dt;
      var j = d && b === S && S.visualViewport ? S.visualViewport.height : b[$];
      (w -= j - r.height), (w *= l ? 1 : -1);
    }
    if (i === He || ((i === We || i === dt) && s === Ss)) {
      h = ft;
      var P = d && b === S && S.visualViewport ? S.visualViewport.width : b[T];
      (g -= P - r.width), (g *= l ? 1 : -1);
    }
  }
  var C = Object.assign({ position: a }, c && QI),
    _ = u === !0 ? qI({ x: g, y: w }, Qe(n)) : { x: g, y: w };
  if (((g = _.x), (w = _.y), l)) {
    var O;
    return Object.assign(
      {},
      C,
      ((O = {}),
      (O[x] = m ? "0" : ""),
      (O[h] = v ? "0" : ""),
      (O.transform =
        (S.devicePixelRatio || 1) <= 1
          ? "translate(" + g + "px, " + w + "px)"
          : "translate3d(" + g + "px, " + w + "px, 0)"),
      O)
    );
  }
  return Object.assign(
    {},
    C,
    ((t = {}),
    (t[x] = m ? w + "px" : ""),
    (t[h] = v ? g + "px" : ""),
    (t.transform = ""),
    t)
  );
}
function JI(e) {
  var t = e.state,
    n = e.options,
    r = n.gpuAcceleration,
    i = r === void 0 ? !0 : r,
    s = n.adaptive,
    o = s === void 0 ? !0 : s,
    a = n.roundOffsets,
    l = a === void 0 ? !0 : a,
    c = {
      placement: Rt(t.placement),
      variation: ei(t.placement),
      popper: t.elements.popper,
      popperRect: t.rects.popper,
      gpuAcceleration: i,
      isFixed: t.options.strategy === "fixed",
    };
  t.modifiersData.popperOffsets != null &&
    (t.styles.popper = Object.assign(
      {},
      t.styles.popper,
      Tm(
        Object.assign({}, c, {
          offsets: t.modifiersData.popperOffsets,
          position: t.options.strategy,
          adaptive: o,
          roundOffsets: l,
        })
      )
    )),
    t.modifiersData.arrow != null &&
      (t.styles.arrow = Object.assign(
        {},
        t.styles.arrow,
        Tm(
          Object.assign({}, c, {
            offsets: t.modifiersData.arrow,
            position: "absolute",
            adaptive: !1,
            roundOffsets: l,
          })
        )
      )),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-placement": t.placement,
    }));
}
const eT = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: JI,
  data: {},
};
var vo = { passive: !0 };
function tT(e) {
  var t = e.state,
    n = e.instance,
    r = e.options,
    i = r.scroll,
    s = i === void 0 ? !0 : i,
    o = r.resize,
    a = o === void 0 ? !0 : o,
    l = Qe(t.elements.popper),
    c = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return (
    s &&
      c.forEach(function (u) {
        u.addEventListener("scroll", n.update, vo);
      }),
    a && l.addEventListener("resize", n.update, vo),
    function () {
      s &&
        c.forEach(function (u) {
          u.removeEventListener("scroll", n.update, vo);
        }),
        a && l.removeEventListener("resize", n.update, vo);
    }
  );
}
const nT = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function () {},
  effect: tT,
  data: {},
};
var rT = { left: "right", right: "left", bottom: "top", top: "bottom" };
function Qo(e) {
  return e.replace(/left|right|bottom|top/g, function (t) {
    return rT[t];
  });
}
var iT = { start: "end", end: "start" };
function Cm(e) {
  return e.replace(/start|end/g, function (t) {
    return iT[t];
  });
}
function cf(e) {
  var t = Qe(e),
    n = t.pageXOffset,
    r = t.pageYOffset;
  return { scrollLeft: n, scrollTop: r };
}
function df(e) {
  return Jr(Wn(e)).left + cf(e).scrollLeft;
}
function sT(e, t) {
  var n = Qe(e),
    r = Wn(e),
    i = n.visualViewport,
    s = r.clientWidth,
    o = r.clientHeight,
    a = 0,
    l = 0;
  if (i) {
    (s = i.width), (o = i.height);
    var c = $0();
    (c || (!c && t === "fixed")) && ((a = i.offsetLeft), (l = i.offsetTop));
  }
  return { width: s, height: o, x: a + df(e), y: l };
}
function oT(e) {
  var t,
    n = Wn(e),
    r = cf(e),
    i = (t = e.ownerDocument) == null ? void 0 : t.body,
    s = nr(
      n.scrollWidth,
      n.clientWidth,
      i ? i.scrollWidth : 0,
      i ? i.clientWidth : 0
    ),
    o = nr(
      n.scrollHeight,
      n.clientHeight,
      i ? i.scrollHeight : 0,
      i ? i.clientHeight : 0
    ),
    a = -r.scrollLeft + df(e),
    l = -r.scrollTop;
  return (
    ln(i || n).direction === "rtl" &&
      (a += nr(n.clientWidth, i ? i.clientWidth : 0) - s),
    { width: s, height: o, x: a, y: l }
  );
}
function ff(e) {
  var t = ln(e),
    n = t.overflow,
    r = t.overflowX,
    i = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(n + i + r);
}
function k0(e) {
  return ["html", "body", "#document"].indexOf(Dn(e)) >= 0
    ? e.ownerDocument.body
    : Bt(e) && ff(e)
    ? e
    : k0(dl(e));
}
function Ji(e, t) {
  var n;
  t === void 0 && (t = []);
  var r = k0(e),
    i = r === ((n = e.ownerDocument) == null ? void 0 : n.body),
    s = Qe(r),
    o = i ? [s].concat(s.visualViewport || [], ff(r) ? r : []) : r,
    a = t.concat(o);
  return i ? a : a.concat(Ji(dl(o)));
}
function zc(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height,
  });
}
function aT(e, t) {
  var n = Jr(e, !1, t === "fixed");
  return (
    (n.top = n.top + e.clientTop),
    (n.left = n.left + e.clientLeft),
    (n.bottom = n.top + e.clientHeight),
    (n.right = n.left + e.clientWidth),
    (n.width = e.clientWidth),
    (n.height = e.clientHeight),
    (n.x = n.left),
    (n.y = n.top),
    n
  );
}
function bm(e, t, n) {
  return t === P0 ? zc(sT(e, n)) : lr(t) ? aT(t, n) : zc(oT(Wn(e)));
}
function lT(e) {
  var t = Ji(dl(e)),
    n = ["absolute", "fixed"].indexOf(ln(e).position) >= 0,
    r = n && Bt(e) ? Os(e) : e;
  return lr(r)
    ? t.filter(function (i) {
        return lr(i) && _0(i, r) && Dn(i) !== "body";
      })
    : [];
}
function uT(e, t, n, r) {
  var i = t === "clippingParents" ? lT(e) : [].concat(t),
    s = [].concat(i, [n]),
    o = s[0],
    a = s.reduce(function (l, c) {
      var u = bm(e, c, r);
      return (
        (l.top = nr(u.top, l.top)),
        (l.right = _a(u.right, l.right)),
        (l.bottom = _a(u.bottom, l.bottom)),
        (l.left = nr(u.left, l.left)),
        l
      );
    }, bm(e, o, r));
  return (
    (a.width = a.right - a.left),
    (a.height = a.bottom - a.top),
    (a.x = a.left),
    (a.y = a.top),
    a
  );
}
function A0(e) {
  var t = e.reference,
    n = e.element,
    r = e.placement,
    i = r ? Rt(r) : null,
    s = r ? ei(r) : null,
    o = t.x + t.width / 2 - n.width / 2,
    a = t.y + t.height / 2 - n.height / 2,
    l;
  switch (i) {
    case We:
      l = { x: o, y: t.y - n.height };
      break;
    case dt:
      l = { x: o, y: t.y + t.height };
      break;
    case ft:
      l = { x: t.x + t.width, y: a };
      break;
    case He:
      l = { x: t.x - n.width, y: a };
      break;
    default:
      l = { x: t.x, y: t.y };
  }
  var c = i ? uf(i) : null;
  if (c != null) {
    var u = c === "y" ? "height" : "width";
    switch (s) {
      case Qr:
        l[c] = l[c] - (t[u] / 2 - n[u] / 2);
        break;
      case Ss:
        l[c] = l[c] + (t[u] / 2 - n[u] / 2);
        break;
    }
  }
  return l;
}
function Es(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = r === void 0 ? e.placement : r,
    s = n.strategy,
    o = s === void 0 ? e.strategy : s,
    a = n.boundary,
    l = a === void 0 ? MI : a,
    c = n.rootBoundary,
    u = c === void 0 ? P0 : c,
    d = n.elementContext,
    f = d === void 0 ? ji : d,
    g = n.altBoundary,
    y = g === void 0 ? !1 : g,
    w = n.padding,
    I = w === void 0 ? 0 : w,
    v = M0(typeof I != "number" ? I : N0(I, _s)),
    m = f === ji ? NI : ji,
    h = e.rects.popper,
    x = e.elements[y ? m : f],
    S = uT(lr(x) ? x : x.contextElement || Wn(e.elements.popper), l, u, o),
    b = Jr(e.elements.reference),
    $ = A0({ reference: b, element: h, strategy: "absolute", placement: i }),
    T = zc(Object.assign({}, h, $)),
    j = f === ji ? T : b,
    P = {
      top: S.top - j.top + v.top,
      bottom: j.bottom - S.bottom + v.bottom,
      left: S.left - j.left + v.left,
      right: j.right - S.right + v.right,
    },
    C = e.modifiersData.offset;
  if (f === ji && C) {
    var _ = C[i];
    Object.keys(P).forEach(function (O) {
      var z = [ft, dt].indexOf(O) >= 0 ? 1 : -1,
        F = [We, dt].indexOf(O) >= 0 ? "y" : "x";
      P[O] += _[F] * z;
    });
  }
  return P;
}
function cT(e, t) {
  t === void 0 && (t = {});
  var n = t,
    r = n.placement,
    i = n.boundary,
    s = n.rootBoundary,
    o = n.padding,
    a = n.flipVariations,
    l = n.allowedAutoPlacements,
    c = l === void 0 ? j0 : l,
    u = ei(r),
    d = u
      ? a
        ? Em
        : Em.filter(function (y) {
            return ei(y) === u;
          })
      : _s,
    f = d.filter(function (y) {
      return c.indexOf(y) >= 0;
    });
  f.length === 0 && (f = d);
  var g = f.reduce(function (y, w) {
    return (
      (y[w] = Es(e, { placement: w, boundary: i, rootBoundary: s, padding: o })[
        Rt(w)
      ]),
      y
    );
  }, {});
  return Object.keys(g).sort(function (y, w) {
    return g[y] - g[w];
  });
}
function dT(e) {
  if (Rt(e) === of) return [];
  var t = Qo(e);
  return [Cm(e), t, Cm(t)];
}
function fT(e) {
  var t = e.state,
    n = e.options,
    r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (
      var i = n.mainAxis,
        s = i === void 0 ? !0 : i,
        o = n.altAxis,
        a = o === void 0 ? !0 : o,
        l = n.fallbackPlacements,
        c = n.padding,
        u = n.boundary,
        d = n.rootBoundary,
        f = n.altBoundary,
        g = n.flipVariations,
        y = g === void 0 ? !0 : g,
        w = n.allowedAutoPlacements,
        I = t.options.placement,
        v = Rt(I),
        m = v === I,
        h = l || (m || !y ? [Qo(I)] : dT(I)),
        x = [I].concat(h).reduce(function (H, K) {
          return H.concat(
            Rt(K) === of
              ? cT(t, {
                  placement: K,
                  boundary: u,
                  rootBoundary: d,
                  padding: c,
                  flipVariations: y,
                  allowedAutoPlacements: w,
                })
              : K
          );
        }, []),
        S = t.rects.reference,
        b = t.rects.popper,
        $ = new Map(),
        T = !0,
        j = x[0],
        P = 0;
      P < x.length;
      P++
    ) {
      var C = x[P],
        _ = Rt(C),
        O = ei(C) === Qr,
        z = [We, dt].indexOf(_) >= 0,
        F = z ? "width" : "height",
        W = Es(t, {
          placement: C,
          boundary: u,
          rootBoundary: d,
          altBoundary: f,
          padding: c,
        }),
        G = z ? (O ? ft : He) : O ? dt : We;
      S[F] > b[F] && (G = Qo(G));
      var M = Qo(G),
        k = [];
      if (
        (s && k.push(W[_] <= 0),
        a && k.push(W[G] <= 0, W[M] <= 0),
        k.every(function (H) {
          return H;
        }))
      ) {
        (j = C), (T = !1);
        break;
      }
      $.set(C, k);
    }
    if (T)
      for (
        var A = y ? 3 : 1,
          N = function (K) {
            var ce = x.find(function (xe) {
              var Le = $.get(xe);
              if (Le)
                return Le.slice(0, K).every(function (pn) {
                  return pn;
                });
            });
            if (ce) return (j = ce), "break";
          },
          D = A;
        D > 0;
        D--
      ) {
        var R = N(D);
        if (R === "break") break;
      }
    t.placement !== j &&
      ((t.modifiersData[r]._skip = !0), (t.placement = j), (t.reset = !0));
  }
}
const pT = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: fT,
  requiresIfExists: ["offset"],
  data: { _skip: !1 },
};
function Pm(e, t, n) {
  return (
    n === void 0 && (n = { x: 0, y: 0 }),
    {
      top: e.top - t.height - n.y,
      right: e.right - t.width + n.x,
      bottom: e.bottom - t.height + n.y,
      left: e.left - t.width - n.x,
    }
  );
}
function jm(e) {
  return [We, ft, dt, He].some(function (t) {
    return e[t] >= 0;
  });
}
function mT(e) {
  var t = e.state,
    n = e.name,
    r = t.rects.reference,
    i = t.rects.popper,
    s = t.modifiersData.preventOverflow,
    o = Es(t, { elementContext: "reference" }),
    a = Es(t, { altBoundary: !0 }),
    l = Pm(o, r),
    c = Pm(a, i, s),
    u = jm(l),
    d = jm(c);
  (t.modifiersData[n] = {
    referenceClippingOffsets: l,
    popperEscapeOffsets: c,
    isReferenceHidden: u,
    hasPopperEscaped: d,
  }),
    (t.attributes.popper = Object.assign({}, t.attributes.popper, {
      "data-popper-reference-hidden": u,
      "data-popper-escaped": d,
    }));
}
const vT = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: mT,
};
function hT(e, t, n) {
  var r = Rt(e),
    i = [He, We].indexOf(r) >= 0 ? -1 : 1,
    s = typeof n == "function" ? n(Object.assign({}, t, { placement: e })) : n,
    o = s[0],
    a = s[1];
  return (
    (o = o || 0),
    (a = (a || 0) * i),
    [He, ft].indexOf(r) >= 0 ? { x: a, y: o } : { x: o, y: a }
  );
}
function gT(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.offset,
    s = i === void 0 ? [0, 0] : i,
    o = j0.reduce(function (u, d) {
      return (u[d] = hT(d, t.rects, s)), u;
    }, {}),
    a = o[t.placement],
    l = a.x,
    c = a.y;
  t.modifiersData.popperOffsets != null &&
    ((t.modifiersData.popperOffsets.x += l),
    (t.modifiersData.popperOffsets.y += c)),
    (t.modifiersData[r] = o);
}
const yT = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: gT,
};
function wT(e) {
  var t = e.state,
    n = e.name;
  t.modifiersData[n] = A0({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement,
  });
}
const xT = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: wT,
  data: {},
};
function ST(e) {
  return e === "x" ? "y" : "x";
}
function ET(e) {
  var t = e.state,
    n = e.options,
    r = e.name,
    i = n.mainAxis,
    s = i === void 0 ? !0 : i,
    o = n.altAxis,
    a = o === void 0 ? !1 : o,
    l = n.boundary,
    c = n.rootBoundary,
    u = n.altBoundary,
    d = n.padding,
    f = n.tether,
    g = f === void 0 ? !0 : f,
    y = n.tetherOffset,
    w = y === void 0 ? 0 : y,
    I = Es(t, { boundary: l, rootBoundary: c, padding: d, altBoundary: u }),
    v = Rt(t.placement),
    m = ei(t.placement),
    h = !m,
    x = uf(v),
    S = ST(x),
    b = t.modifiersData.popperOffsets,
    $ = t.rects.reference,
    T = t.rects.popper,
    j =
      typeof w == "function"
        ? w(Object.assign({}, t.rects, { placement: t.placement }))
        : w,
    P =
      typeof j == "number"
        ? { mainAxis: j, altAxis: j }
        : Object.assign({ mainAxis: 0, altAxis: 0 }, j),
    C = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
    _ = { x: 0, y: 0 };
  if (b) {
    if (s) {
      var O,
        z = x === "y" ? We : He,
        F = x === "y" ? dt : ft,
        W = x === "y" ? "height" : "width",
        G = b[x],
        M = G + I[z],
        k = G - I[F],
        A = g ? -T[W] / 2 : 0,
        N = m === Qr ? $[W] : T[W],
        D = m === Qr ? -T[W] : -$[W],
        R = t.elements.arrow,
        H = g && R ? lf(R) : { width: 0, height: 0 },
        K = t.modifiersData["arrow#persistent"]
          ? t.modifiersData["arrow#persistent"].padding
          : O0(),
        ce = K[z],
        xe = K[F],
        Le = qi(0, $[W], H[W]),
        pn = h ? $[W] / 2 - A - Le - ce - P.mainAxis : N - Le - ce - P.mainAxis,
        ht = h
          ? -$[W] / 2 + A + Le + xe + P.mainAxis
          : D + Le + xe + P.mainAxis,
        gt = t.elements.arrow && Os(t.elements.arrow),
        Gs = gt ? (x === "y" ? gt.clientTop || 0 : gt.clientLeft || 0) : 0,
        mi = (O = C == null ? void 0 : C[x]) != null ? O : 0,
        Ys = G + pn - mi - Gs,
        Xs = G + ht - mi,
        Hn = qi(g ? _a(M, Ys) : M, G, g ? nr(k, Xs) : k);
      (b[x] = Hn), (_[x] = Hn - G);
    }
    if (a) {
      var Vn,
        vi = x === "x" ? We : He,
        hi = x === "x" ? dt : ft,
        yt = b[S],
        mn = S === "y" ? "height" : "width",
        vn = yt + I[vi],
        gi = yt - I[hi],
        Yt = [We, He].indexOf(v) !== -1,
        np = (Vn = C == null ? void 0 : C[S]) != null ? Vn : 0,
        rp = Yt ? vn : yt - $[mn] - T[mn] - np + P.altAxis,
        ip = Yt ? yt + $[mn] + T[mn] - np - P.altAxis : gi,
        sp = g && Yt ? YI(rp, yt, ip) : qi(g ? rp : vn, yt, g ? ip : gi);
      (b[S] = sp), (_[S] = sp - yt);
    }
    t.modifiersData[r] = _;
  }
}
const IT = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: ET,
  requiresIfExists: ["offset"],
};
function TT(e) {
  return { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop };
}
function CT(e) {
  return e === Qe(e) || !Bt(e) ? cf(e) : TT(e);
}
function bT(e) {
  var t = e.getBoundingClientRect(),
    n = qr(t.width) / e.offsetWidth || 1,
    r = qr(t.height) / e.offsetHeight || 1;
  return n !== 1 || r !== 1;
}
function PT(e, t, n) {
  n === void 0 && (n = !1);
  var r = Bt(t),
    i = Bt(t) && bT(t),
    s = Wn(t),
    o = Jr(e, i, n),
    a = { scrollLeft: 0, scrollTop: 0 },
    l = { x: 0, y: 0 };
  return (
    (r || (!r && !n)) &&
      ((Dn(t) !== "body" || ff(s)) && (a = CT(t)),
      Bt(t)
        ? ((l = Jr(t, !0)), (l.x += t.clientLeft), (l.y += t.clientTop))
        : s && (l.x = df(s))),
    {
      x: o.left + a.scrollLeft - l.x,
      y: o.top + a.scrollTop - l.y,
      width: o.width,
      height: o.height,
    }
  );
}
function jT(e) {
  var t = new Map(),
    n = new Set(),
    r = [];
  e.forEach(function (s) {
    t.set(s.name, s);
  });
  function i(s) {
    n.add(s.name);
    var o = [].concat(s.requires || [], s.requiresIfExists || []);
    o.forEach(function (a) {
      if (!n.has(a)) {
        var l = t.get(a);
        l && i(l);
      }
    }),
      r.push(s);
  }
  return (
    e.forEach(function (s) {
      n.has(s.name) || i(s);
    }),
    r
  );
}
function $T(e) {
  var t = jT(e);
  return HI.reduce(function (n, r) {
    return n.concat(
      t.filter(function (i) {
        return i.phase === r;
      })
    );
  }, []);
}
function _T(e) {
  var t;
  return function () {
    return (
      t ||
        (t = new Promise(function (n) {
          Promise.resolve().then(function () {
            (t = void 0), n(e());
          });
        })),
      t
    );
  };
}
function OT(e) {
  var t = e.reduce(function (n, r) {
    var i = n[r.name];
    return (
      (n[r.name] = i
        ? Object.assign({}, i, r, {
            options: Object.assign({}, i.options, r.options),
            data: Object.assign({}, i.data, r.data),
          })
        : r),
      n
    );
  }, {});
  return Object.keys(t).map(function (n) {
    return t[n];
  });
}
var $m = { placement: "bottom", modifiers: [], strategy: "absolute" };
function _m() {
  for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
    t[n] = arguments[n];
  return !t.some(function (r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function MT(e) {
  e === void 0 && (e = {});
  var t = e,
    n = t.defaultModifiers,
    r = n === void 0 ? [] : n,
    i = t.defaultOptions,
    s = i === void 0 ? $m : i;
  return function (a, l, c) {
    c === void 0 && (c = s);
    var u = {
        placement: "bottom",
        orderedModifiers: [],
        options: Object.assign({}, $m, s),
        modifiersData: {},
        elements: { reference: a, popper: l },
        attributes: {},
        styles: {},
      },
      d = [],
      f = !1,
      g = {
        state: u,
        setOptions: function (v) {
          var m = typeof v == "function" ? v(u.options) : v;
          w(),
            (u.options = Object.assign({}, s, u.options, m)),
            (u.scrollParents = {
              reference: lr(a)
                ? Ji(a)
                : a.contextElement
                ? Ji(a.contextElement)
                : [],
              popper: Ji(l),
            });
          var h = $T(OT([].concat(r, u.options.modifiers)));
          return (
            (u.orderedModifiers = h.filter(function (x) {
              return x.enabled;
            })),
            y(),
            g.update()
          );
        },
        forceUpdate: function () {
          if (!f) {
            var v = u.elements,
              m = v.reference,
              h = v.popper;
            if (_m(m, h)) {
              (u.rects = {
                reference: PT(m, Os(h), u.options.strategy === "fixed"),
                popper: lf(h),
              }),
                (u.reset = !1),
                (u.placement = u.options.placement),
                u.orderedModifiers.forEach(function (P) {
                  return (u.modifiersData[P.name] = Object.assign({}, P.data));
                });
              for (var x = 0; x < u.orderedModifiers.length; x++) {
                if (u.reset === !0) {
                  (u.reset = !1), (x = -1);
                  continue;
                }
                var S = u.orderedModifiers[x],
                  b = S.fn,
                  $ = S.options,
                  T = $ === void 0 ? {} : $,
                  j = S.name;
                typeof b == "function" &&
                  (u = b({ state: u, options: T, name: j, instance: g }) || u);
              }
            }
          }
        },
        update: _T(function () {
          return new Promise(function (I) {
            g.forceUpdate(), I(u);
          });
        }),
        destroy: function () {
          w(), (f = !0);
        },
      };
    if (!_m(a, l)) return g;
    g.setOptions(c).then(function (I) {
      !f && c.onFirstUpdate && c.onFirstUpdate(I);
    });
    function y() {
      u.orderedModifiers.forEach(function (I) {
        var v = I.name,
          m = I.options,
          h = m === void 0 ? {} : m,
          x = I.effect;
        if (typeof x == "function") {
          var S = x({ state: u, name: v, instance: g, options: h }),
            b = function () {};
          d.push(S || b);
        }
      });
    }
    function w() {
      d.forEach(function (I) {
        return I();
      }),
        (d = []);
    }
    return g;
  };
}
const NT = MT({ defaultModifiers: [vT, xT, eT, nT, yT, pT, IT, KI] }),
  kT = ["enabled", "placement", "strategy", "modifiers"];
function AT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const LT = {
    name: "applyStyles",
    enabled: !1,
    phase: "afterWrite",
    fn: () => {},
  },
  DT = {
    name: "ariaDescribedBy",
    enabled: !0,
    phase: "afterWrite",
    effect:
      ({ state: e }) =>
      () => {
        const { reference: t, popper: n } = e.elements;
        if ("removeAttribute" in t) {
          const r = (t.getAttribute("aria-describedby") || "")
            .split(",")
            .filter((i) => i.trim() !== n.id);
          r.length
            ? t.setAttribute("aria-describedby", r.join(","))
            : t.removeAttribute("aria-describedby");
        }
      },
    fn: ({ state: e }) => {
      var t;
      const { popper: n, reference: r } = e.elements,
        i = (t = n.getAttribute("role")) == null ? void 0 : t.toLowerCase();
      if (n.id && i === "tooltip" && "setAttribute" in r) {
        const s = r.getAttribute("aria-describedby");
        if (s && s.split(",").indexOf(n.id) !== -1) return;
        r.setAttribute("aria-describedby", s ? `${s},${n.id}` : n.id);
      }
    },
  },
  zT = [];
function RT(e, t, n = {}) {
  let {
      enabled: r = !0,
      placement: i = "bottom",
      strategy: s = "absolute",
      modifiers: o = zT,
    } = n,
    a = AT(n, kT);
  const l = E.useRef(o),
    c = E.useRef(),
    u = E.useCallback(() => {
      var I;
      (I = c.current) == null || I.update();
    }, []),
    d = E.useCallback(() => {
      var I;
      (I = c.current) == null || I.forceUpdate();
    }, []),
    [f, g] = OI(
      E.useState({
        placement: i,
        update: u,
        forceUpdate: d,
        attributes: {},
        styles: { popper: {}, arrow: {} },
      })
    ),
    y = E.useMemo(
      () => ({
        name: "updateStateModifier",
        enabled: !0,
        phase: "write",
        requires: ["computeStyles"],
        fn: ({ state: I }) => {
          const v = {},
            m = {};
          Object.keys(I.elements).forEach((h) => {
            (v[h] = I.styles[h]), (m[h] = I.attributes[h]);
          }),
            g({
              state: I,
              styles: v,
              attributes: m,
              update: u,
              forceUpdate: d,
              placement: I.placement,
            });
        },
      }),
      [u, d, g]
    ),
    w = E.useMemo(() => (Qi(l.current, o) || (l.current = o), l.current), [o]);
  return (
    E.useEffect(() => {
      !c.current ||
        !r ||
        c.current.setOptions({
          placement: i,
          strategy: s,
          modifiers: [...w, y, LT],
        });
    }, [s, i, y, r, w]),
    E.useEffect(() => {
      if (!(!r || e == null || t == null))
        return (
          (c.current = NT(
            e,
            t,
            Object.assign({}, a, {
              placement: i,
              strategy: s,
              modifiers: [...w, DT, y],
            })
          )),
          () => {
            c.current != null &&
              (c.current.destroy(),
              (c.current = void 0),
              g((I) =>
                Object.assign({}, I, { attributes: {}, styles: { popper: {} } })
              ));
          }
        );
    }, [r, e, t]),
    f
  );
}
function Om(e, t) {
  if (e.contains) return e.contains(t);
  if (e.compareDocumentPosition)
    return e === t || !!(e.compareDocumentPosition(t) & 16);
}
var BT = function () {},
  FT = BT;
const WT = od(FT),
  Mm = () => {};
function HT(e) {
  return e.button === 0;
}
function VT(e) {
  return !!(e.metaKey || e.altKey || e.ctrlKey || e.shiftKey);
}
const tu = (e) => e && ("current" in e ? e.current : e),
  Nm = { click: "mousedown", mouseup: "mousedown", pointerup: "pointerdown" };
function GT(e, t = Mm, { disabled: n, clickTrigger: r = "click" } = {}) {
  const i = E.useRef(!1),
    s = E.useRef(!1),
    o = E.useCallback(
      (c) => {
        const u = tu(e);
        WT(
          !!u,
          "ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"
        ),
          (i.current = !u || VT(c) || !HT(c) || !!Om(u, c.target) || s.current),
          (s.current = !1);
      },
      [e]
    ),
    a = nn((c) => {
      const u = tu(e);
      u && Om(u, c.target) && (s.current = !0);
    }),
    l = nn((c) => {
      i.current || t(c);
    });
  E.useEffect(() => {
    var c, u;
    if (n || e == null) return;
    const d = lI(tu(e)),
      f = d.defaultView || window;
    let g =
        (c = f.event) != null ? c : (u = f.parent) == null ? void 0 : u.event,
      y = null;
    Nm[r] && (y = mo(d, Nm[r], a, !0));
    const w = mo(d, r, o, !0),
      I = mo(d, r, (m) => {
        if (m === g) {
          g = void 0;
          return;
        }
        l(m);
      });
    let v = [];
    return (
      "ontouchstart" in d.documentElement &&
        (v = [].slice.call(d.body.children).map((m) => mo(m, "mousemove", Mm))),
      () => {
        y == null || y(), w(), I(), v.forEach((m) => m());
      }
    );
  }, [e, n, r, o, a, l]);
}
function YT(e) {
  const t = {};
  return Array.isArray(e)
    ? (e == null ||
        e.forEach((n) => {
          t[n.name] = n;
        }),
      t)
    : e || t;
}
function XT(e = {}) {
  return Array.isArray(e)
    ? e
    : Object.keys(e).map((t) => ((e[t].name = t), e[t]));
}
function UT({
  enabled: e,
  enableEvents: t,
  placement: n,
  flip: r,
  offset: i,
  fixed: s,
  containerPadding: o,
  arrowElement: a,
  popperConfig: l = {},
}) {
  var c, u, d, f, g;
  const y = YT(l.modifiers);
  return Object.assign({}, l, {
    placement: n,
    enabled: e,
    strategy: s ? "fixed" : l.strategy,
    modifiers: XT(
      Object.assign({}, y, {
        eventListeners: {
          enabled: t,
          options: (c = y.eventListeners) == null ? void 0 : c.options,
        },
        preventOverflow: Object.assign({}, y.preventOverflow, {
          options: o
            ? Object.assign(
                { padding: o },
                (u = y.preventOverflow) == null ? void 0 : u.options
              )
            : (d = y.preventOverflow) == null
            ? void 0
            : d.options,
        }),
        offset: {
          options: Object.assign(
            { offset: i },
            (f = y.offset) == null ? void 0 : f.options
          ),
        },
        arrow: Object.assign({}, y.arrow, {
          enabled: !!a,
          options: Object.assign(
            {},
            (g = y.arrow) == null ? void 0 : g.options,
            { element: a }
          ),
        }),
        flip: Object.assign({ enabled: !!r }, y.flip),
      })
    ),
  });
}
const ZT = ["children", "usePopper"];
function KT(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
const QT = () => {};
function L0(e = {}) {
  const t = E.useContext(cl),
    [n, r] = fI(),
    i = E.useRef(!1),
    {
      flip: s,
      offset: o,
      rootCloseEvent: a,
      fixed: l = !1,
      placement: c,
      popperConfig: u = {},
      enableEventListeners: d = !0,
      usePopper: f = !!t,
    } = e,
    g = (t == null ? void 0 : t.show) == null ? !!e.show : t.show;
  g && !i.current && (i.current = !0);
  const y = (b) => {
      t == null || t.toggle(!1, b);
    },
    { placement: w, setMenu: I, menuElement: v, toggleElement: m } = t || {},
    h = RT(
      m,
      v,
      UT({
        placement: c || w || "bottom-start",
        enabled: f,
        enableEvents: d ?? g,
        offset: o,
        flip: s,
        fixed: l,
        arrowElement: n,
        popperConfig: u,
      })
    ),
    x = Object.assign(
      { ref: I || QT, "aria-labelledby": m == null ? void 0 : m.id },
      h.attributes.popper,
      { style: h.styles.popper }
    ),
    S = {
      show: g,
      placement: w,
      hasShown: i.current,
      toggle: t == null ? void 0 : t.toggle,
      popper: f ? h : null,
      arrowProps: f
        ? Object.assign({ ref: r }, h.attributes.arrow, {
            style: h.styles.arrow,
          })
        : {},
    };
  return GT(v, y, { clickTrigger: a, disabled: !g }), [x, S];
}
function D0(e) {
  let { children: t, usePopper: n = !0 } = e,
    r = KT(e, ZT);
  const [i, s] = L0(Object.assign({}, r, { usePopper: n }));
  return p.jsx(p.Fragment, { children: t(i, s) });
}
D0.displayName = "DropdownMenu";
const Oa = { prefix: String(Math.round(Math.random() * 1e10)), current: 0 },
  z0 = Q.createContext(Oa),
  qT = Q.createContext(!1);
let JT = !!(
    typeof window < "u" &&
    window.document &&
    window.document.createElement
  ),
  nu = new WeakMap();
function eC(e = !1) {
  let t = E.useContext(z0),
    n = E.useRef(null);
  if (n.current === null && !e) {
    var r, i;
    let s =
      (i = Q.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED) === null ||
      i === void 0 ||
      (r = i.ReactCurrentOwner) === null ||
      r === void 0
        ? void 0
        : r.current;
    if (s) {
      let o = nu.get(s);
      o == null
        ? nu.set(s, { id: t.current, state: s.memoizedState })
        : s.memoizedState !== o.state && ((t.current = o.id), nu.delete(s));
    }
    n.current = ++t.current;
  }
  return n.current;
}
function tC(e) {
  let t = E.useContext(z0);
  t === Oa &&
    !JT &&
    console.warn(
      "When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."
    );
  let n = eC(!!e),
    r = `react-aria${t.prefix}`;
  return e || `${r}-${n}`;
}
function nC(e) {
  let t = Q.useId(),
    [n] = E.useState(aC()),
    r = n ? "react-aria" : `react-aria${Oa.prefix}`;
  return e || `${r}-${t}`;
}
const rC = typeof Q.useId == "function" ? nC : tC;
function iC() {
  return !1;
}
function sC() {
  return !0;
}
function oC(e) {
  return () => {};
}
function aC() {
  return typeof Q.useSyncExternalStore == "function"
    ? Q.useSyncExternalStore(oC, iC, sC)
    : E.useContext(qT);
}
const R0 = (e) => {
    var t;
    return (
      ((t = e.getAttribute("role")) == null ? void 0 : t.toLowerCase()) ===
      "menu"
    );
  },
  km = () => {};
function B0() {
  const e = rC(),
    {
      show: t = !1,
      toggle: n = km,
      setToggle: r,
      menuElement: i,
    } = E.useContext(cl) || {},
    s = E.useCallback(
      (a) => {
        n(!t, a);
      },
      [t, n]
    ),
    o = { id: e, ref: r || km, onClick: s, "aria-expanded": !!t };
  return i && R0(i) && (o["aria-haspopup"] = !0), [o, { show: t, toggle: n }];
}
function F0({ children: e }) {
  const [t, n] = B0();
  return p.jsx(p.Fragment, { children: e(t, n) });
}
F0.displayName = "DropdownToggle";
const Rc = E.createContext(null),
  Am = (e, t = null) => (e != null ? String(e) : t || null),
  W0 = E.createContext(null);
W0.displayName = "NavContext";
const lC = "data-rr-ui-";
function H0(e) {
  return `${lC}${e}`;
}
const uC = ["eventKey", "disabled", "onClick", "active", "as"];
function cC(e, t) {
  if (e == null) return {};
  var n = {};
  for (var r in e)
    if ({}.hasOwnProperty.call(e, r)) {
      if (t.indexOf(r) >= 0) continue;
      n[r] = e[r];
    }
  return n;
}
function V0({ key: e, href: t, active: n, disabled: r, onClick: i }) {
  const s = E.useContext(Rc),
    o = E.useContext(W0),
    { activeKey: a } = o || {},
    l = Am(e, t),
    c = n == null && e != null ? Am(a) === l : n;
  return [
    {
      onClick: nn((d) => {
        r || (i == null || i(d), s && !d.isPropagationStopped() && s(l, d));
      }),
      "aria-disabled": r || void 0,
      "aria-selected": c,
      [H0("dropdown-item")]: "",
    },
    { isActive: c },
  ];
}
const G0 = E.forwardRef((e, t) => {
  let { eventKey: n, disabled: r, onClick: i, active: s, as: o = h0 } = e,
    a = cC(e, uC);
  const [l] = V0({ key: n, href: a.href, disabled: r, onClick: i, active: s });
  return p.jsx(o, Object.assign({}, a, { ref: t }, l));
});
G0.displayName = "DropdownItem";
const Y0 = E.createContext(f0 ? window : void 0);
Y0.Provider;
function dC() {
  return E.useContext(Y0);
}
function Lm() {
  const e = _I(),
    t = E.useRef(null),
    n = E.useCallback(
      (r) => {
        (t.current = r), e();
      },
      [e]
    );
  return [t, n];
}
function Ms({
  defaultShow: e,
  show: t,
  onSelect: n,
  onToggle: r,
  itemSelector: i = `* [${H0("dropdown-item")}]`,
  focusFirstItemOnShow: s,
  placement: o = "bottom-start",
  children: a,
}) {
  const l = dC(),
    [c, u] = $I(t, e, r),
    [d, f] = Lm(),
    g = d.current,
    [y, w] = Lm(),
    I = y.current,
    v = vI(c),
    m = E.useRef(null),
    h = E.useRef(!1),
    x = E.useContext(Rc),
    S = E.useCallback(
      (C, _, O = _ == null ? void 0 : _.type) => {
        u(C, { originalEvent: _, source: O });
      },
      [u]
    ),
    b = nn((C, _) => {
      n == null || n(C, _),
        S(!1, _, "select"),
        _.isPropagationStopped() || x == null || x(C, _);
    }),
    $ = E.useMemo(
      () => ({
        toggle: S,
        placement: o,
        show: c,
        menuElement: g,
        toggleElement: I,
        setMenu: f,
        setToggle: w,
      }),
      [S, o, c, g, I, f, w]
    );
  g && v && !c && (h.current = g.contains(g.ownerDocument.activeElement));
  const T = nn(() => {
      I && I.focus && I.focus();
    }),
    j = nn(() => {
      const C = m.current;
      let _ = s;
      if (
        (_ == null && (_ = d.current && R0(d.current) ? "keyboard" : !1),
        _ === !1 || (_ === "keyboard" && !/^key.+$/.test(C)))
      )
        return;
      const O = wm(d.current, i)[0];
      O && O.focus && O.focus();
    });
  E.useEffect(() => {
    c ? j() : h.current && ((h.current = !1), T());
  }, [c, h, T, j]),
    E.useEffect(() => {
      m.current = null;
    });
  const P = (C, _) => {
    if (!d.current) return null;
    const O = wm(d.current, i);
    let z = O.indexOf(C) + _;
    return (z = Math.max(0, Math.min(z, O.length))), O[z];
  };
  return (
    pI(
      E.useCallback(() => l.document, [l]),
      "keydown",
      (C) => {
        var _, O;
        const { key: z } = C,
          F = C.target,
          W = (_ = d.current) == null ? void 0 : _.contains(F),
          G = (O = y.current) == null ? void 0 : O.contains(F);
        if (
          (/input|textarea/i.test(F.tagName) &&
            (z === " " ||
              (z !== "Escape" && W) ||
              (z === "Escape" && F.type === "search"))) ||
          (!W && !G) ||
          (z === "Tab" && (!d.current || !c))
        )
          return;
        m.current = C.type;
        const k = { originalEvent: C, source: C.type };
        switch (z) {
          case "ArrowUp": {
            const A = P(F, -1);
            A && A.focus && A.focus(), C.preventDefault();
            return;
          }
          case "ArrowDown":
            if ((C.preventDefault(), !c)) u(!0, k);
            else {
              const A = P(F, 1);
              A && A.focus && A.focus();
            }
            return;
          case "Tab":
            p0(
              F.ownerDocument,
              "keyup",
              (A) => {
                var N;
                ((A.key === "Tab" && !A.target) ||
                  !((N = d.current) != null && N.contains(A.target))) &&
                  u(!1, k);
              },
              { once: !0 }
            );
            break;
          case "Escape":
            z === "Escape" && (C.preventDefault(), C.stopPropagation()),
              u(!1, k);
            break;
        }
      }
    ),
    p.jsx(Rc.Provider, {
      value: b,
      children: p.jsx(cl.Provider, { value: $, children: a }),
    })
  );
}
Ms.displayName = "Dropdown";
Ms.Menu = D0;
Ms.Toggle = F0;
Ms.Item = G0;
const pf = E.createContext({});
pf.displayName = "DropdownContext";
const X0 = E.forwardRef(
  (
    { className: e, bsPrefix: t, as: n = "hr", role: r = "separator", ...i },
    s
  ) => (
    (t = le(t, "dropdown-divider")),
    p.jsx(n, { ref: s, className: ne(e, t), role: r, ...i })
  )
);
X0.displayName = "DropdownDivider";
const U0 = E.forwardRef(
  (
    { className: e, bsPrefix: t, as: n = "div", role: r = "heading", ...i },
    s
  ) => (
    (t = le(t, "dropdown-header")),
    p.jsx(n, { ref: s, className: ne(e, t), role: r, ...i })
  )
);
U0.displayName = "DropdownHeader";
const Z0 = E.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      eventKey: n,
      disabled: r = !1,
      onClick: i,
      active: s,
      as: o = g0,
      ...a
    },
    l
  ) => {
    const c = le(e, "dropdown-item"),
      [u, d] = V0({ key: n, href: a.href, disabled: r, onClick: i, active: s });
    return p.jsx(o, {
      ...a,
      ...u,
      ref: l,
      className: ne(t, c, d.isActive && "active", r && "disabled"),
    });
  }
);
Z0.displayName = "DropdownItem";
const K0 = E.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "span", ...r }, i) => (
    (t = le(t, "dropdown-item-text")),
    p.jsx(n, { ref: i, className: ne(e, t), ...r })
  )
);
K0.displayName = "DropdownItemText";
const fl = E.createContext(null);
fl.displayName = "InputGroupContext";
const Q0 = E.createContext(null);
Q0.displayName = "NavbarContext";
function q0(e, t) {
  return e;
}
function J0(e, t, n) {
  const r = n ? "top-end" : "top-start",
    i = n ? "top-start" : "top-end",
    s = n ? "bottom-end" : "bottom-start",
    o = n ? "bottom-start" : "bottom-end",
    a = n ? "right-start" : "left-start",
    l = n ? "right-end" : "left-end",
    c = n ? "left-start" : "right-start",
    u = n ? "left-end" : "right-end";
  let d = e ? o : s;
  return (
    t === "up"
      ? (d = e ? i : r)
      : t === "end"
      ? (d = e ? u : c)
      : t === "start"
      ? (d = e ? l : a)
      : t === "down-centered"
      ? (d = "bottom")
      : t === "up-centered" && (d = "top"),
    d
  );
}
const ew = E.forwardRef(
  (
    {
      bsPrefix: e,
      className: t,
      align: n,
      rootCloseEvent: r,
      flip: i = !0,
      show: s,
      renderOnMount: o,
      as: a = "div",
      popperConfig: l,
      variant: c,
      ...u
    },
    d
  ) => {
    let f = !1;
    const g = E.useContext(Q0),
      y = le(e, "dropdown-menu"),
      { align: w, drop: I, isRTL: v } = E.useContext(pf);
    n = n || w;
    const m = E.useContext(fl),
      h = [];
    if (n)
      if (typeof n == "object") {
        const C = Object.keys(n);
        if (C.length) {
          const _ = C[0],
            O = n[_];
          (f = O === "start"), h.push(`${y}-${_}-${O}`);
        }
      } else n === "end" && (f = !0);
    const x = J0(f, I, v),
      [S, { hasShown: b, popper: $, show: T, toggle: j }] = L0({
        flip: i,
        rootCloseEvent: r,
        show: s,
        usePopper: !g && h.length === 0,
        offset: [0, 2],
        popperConfig: l,
        placement: x,
      });
    if (
      ((S.ref = m0(q0(d), S.ref)),
      yI(() => {
        T && ($ == null || $.update());
      }, [T]),
      !b && !o && !m)
    )
      return null;
    typeof a != "string" &&
      ((S.show = T),
      (S.close = () => (j == null ? void 0 : j(!1))),
      (S.align = n));
    let P = u.style;
    return (
      $ != null &&
        $.placement &&
        ((P = { ...u.style, ...S.style }), (u["x-placement"] = $.placement)),
      p.jsx(a, {
        ...u,
        ...S,
        style: P,
        ...((h.length || g) && { "data-bs-popper": "static" }),
        className: ne(
          t,
          y,
          T && "show",
          f && `${y}-end`,
          c && `${y}-${c}`,
          ...h
        ),
      })
    );
  }
);
ew.displayName = "DropdownMenu";
const tw = E.forwardRef(
  (
    { bsPrefix: e, split: t, className: n, childBsPrefix: r, as: i = y0, ...s },
    o
  ) => {
    const a = le(e, "dropdown-toggle"),
      l = E.useContext(cl);
    r !== void 0 && (s.bsPrefix = r);
    const [c] = B0();
    return (
      (c.ref = m0(c.ref, q0(o))),
      p.jsx(i, {
        className: ne(
          n,
          a,
          t && `${a}-split`,
          (l == null ? void 0 : l.show) && "show"
        ),
        ...c,
        ...s,
      })
    );
  }
);
tw.displayName = "DropdownToggle";
const nw = E.forwardRef((e, t) => {
  const {
      bsPrefix: n,
      drop: r = "down",
      show: i,
      className: s,
      align: o = "start",
      onSelect: a,
      onToggle: l,
      focusFirstItemOnShow: c,
      as: u = "div",
      navbar: d,
      autoClose: f = !0,
      ...g
    } = iI(e, { show: "onToggle" }),
    y = E.useContext(fl),
    w = le(n, "dropdown"),
    I = aI(),
    v = ($) =>
      f === !1
        ? $ === "click"
        : f === "inside"
        ? $ !== "rootClose"
        : f === "outside"
        ? $ !== "select"
        : !0,
    m = nn(($, T) => {
      var j;
      (!((j = T.originalEvent) == null || (j = j.target) == null) &&
        j.classList.contains("dropdown-toggle") &&
        T.source === "mousedown") ||
        (T.originalEvent.currentTarget === document &&
          (T.source !== "keydown" || T.originalEvent.key === "Escape") &&
          (T.source = "rootClose"),
        v(T.source) && (l == null || l($, T)));
    }),
    x = J0(o === "end", r, I),
    S = E.useMemo(() => ({ align: o, drop: r, isRTL: I }), [o, r, I]),
    b = {
      down: w,
      "down-centered": `${w}-center`,
      up: "dropup",
      "up-centered": "dropup-center dropup",
      end: "dropend",
      start: "dropstart",
    };
  return p.jsx(pf.Provider, {
    value: S,
    children: p.jsx(Ms, {
      placement: x,
      show: i,
      onSelect: a,
      onToggle: m,
      focusFirstItemOnShow: c,
      itemSelector: `.${w}-item:not(.disabled):not(:disabled)`,
      children: y
        ? g.children
        : p.jsx(u, { ...g, ref: t, className: ne(s, i && "show", b[r]) }),
    }),
  });
});
nw.displayName = "Dropdown";
const ho = Object.assign(nw, {
    Toggle: tw,
    Menu: ew,
    Item: Z0,
    ItemText: K0,
    Divider: X0,
    Header: U0,
  }),
  fC = E.createContext({}),
  mf = E.forwardRef(
    (
      {
        id: e,
        bsPrefix: t,
        className: n,
        type: r = "checkbox",
        isValid: i = !1,
        isInvalid: s = !1,
        as: o = "input",
        ...a
      },
      l
    ) => {
      const { controlId: c } = E.useContext(fC);
      return (
        (t = le(t, "form-check-input")),
        p.jsx(o, {
          ...a,
          ref: l,
          type: r,
          id: e || c,
          className: ne(n, t, i && "is-valid", s && "is-invalid"),
        })
      );
    }
  );
mf.displayName = "FormCheckInput";
const Ns = E.forwardRef(
  ({ className: e, bsPrefix: t, as: n = "span", ...r }, i) => (
    (t = le(t, "input-group-text")),
    p.jsx(n, { ref: i, className: ne(e, t), ...r })
  )
);
Ns.displayName = "InputGroupText";
const pC = (e) =>
    p.jsx(Ns, { children: p.jsx(mf, { type: "checkbox", ...e }) }),
  mC = (e) => p.jsx(Ns, { children: p.jsx(mf, { type: "radio", ...e }) }),
  rw = E.forwardRef(
    (
      {
        bsPrefix: e,
        size: t,
        hasValidation: n,
        className: r,
        as: i = "div",
        ...s
      },
      o
    ) => {
      e = le(e, "input-group");
      const a = E.useMemo(() => ({}), []);
      return p.jsx(fl.Provider, {
        value: a,
        children: p.jsx(i, {
          ref: o,
          ...s,
          className: ne(r, e, t && `${e}-${t}`, n && "has-validation"),
        }),
      });
    }
  );
rw.displayName = "InputGroup";
const iw = Object.assign(rw, { Text: Ns, Radio: mC, Checkbox: pC }),
  ks = E.forwardRef(({ bsPrefix: e, className: t, as: n = "div", ...r }, i) => {
    const s = le(e, "row"),
      o = c0(),
      a = d0(),
      l = `${s}-cols`,
      c = [];
    return (
      o.forEach((u) => {
        const d = r[u];
        delete r[u];
        let f;
        d != null && typeof d == "object" ? ({ cols: f } = d) : (f = d);
        const g = u !== a ? `-${u}` : "";
        f != null && c.push(`${l}${g}-${f}`);
      }),
      p.jsx(n, { ref: i, ...r, className: ne(t, s, ...c) })
    );
  });
ks.displayName = "Row";
function Bc({
  label: e,
  icon: t,
  faSuffix: n,
  hoverAnimation: r,
  selected: i,
  size: s,
  shrink: o,
  className: a,
  style: l,
  tooltip: c,
}) {
  const u = X();
  (e = e || "Item"), (s = u.clamp(s, 1, 2)), (t = t || "fa-solid fa-circle");
  const d = t.includes(".");
  return p.jsxs("div", {
    "data-tooltip": c,
    style: l,
    className: `
            menu-item 
            ${u.strIf(r, "menu-item-with-hover")}
            ${u.strIf(o, "menu-item-compressed")}
            ${u.strIf(i, "menu-item-selected")}
            ${a}
        `,
    children: [
      p.jsxs("div", {
        className: `menu-item-icon-wrapper menu-item-icon-wrapper-${s}`,
        children: [
          d && p.jsx("img", { src: String(t), alt: e }),
          !d && p.jsx(Z, { iconName: t }),
        ],
      }),
      p.jsx("span", {
        className: "menu-item-label ms-3",
        dangerouslySetInnerHTML: { __html: e },
      }),
      n && p.jsx(Z, { iconName: n, className: "ms-2 pb-1 text-2" }),
    ],
  });
}
function sw({
  availableOptions: e,
  selectedOption: t,
  size: n,
  onOptionSelected: r,
  shrink: i,
  alwaysForceDropdown: s,
  tooltip: o,
}) {
  const a = !s && e.length <= 1,
    l = () => {
      a && r && r(e[0].id);
    },
    c = (u) => {
      r && r(u.id);
    };
  return p.jsx("div", {
    className: "dropdown-picker-wrapper",
    children:
      e.length > 0 &&
      p.jsxs(ho, {
        className: "dropdown-picker",
        children: [
          p.jsx(ho.Toggle, {
            variant: "transparent",
            className: "dropdown-picker-toggle",
            onClickCapture: l,
            children: p.jsx(Bc, {
              label: t.label,
              icon: t.imgUrl || t.faIcon,
              faSuffix: a ? null : "fa-solid fa-caret-down",
              hoverAnimation: !0,
              tooltip: o,
              size: n,
              shrink: i,
            }),
          }),
          !a &&
            p.jsx(ho.Menu, {
              className: "dropdown-menu",
              children: e.map((u, d) =>
                p.jsx(
                  ho.Item,
                  {
                    className: "dropdown-item",
                    onClick: () => c(u),
                    children: p.jsx(Bc, {
                      label: u.label,
                      icon: u.imgUrl || u.faIcon,
                      size: 1,
                      style: { height: "35px" },
                      shrink: !1,
                    }),
                  },
                  d
                )
              ),
            }),
        ],
      }),
  });
}
function ow({ shrink: e }) {
  const t = X(),
    {
      setSelectedLanguage: n,
      getSelectedLanguage: r,
      getAvailableLanguages: i,
      canChangeLanguage: s,
    } = J(),
    o = r(),
    a = i(),
    l = (u) => ({ id: u.id, label: u.name, imgUrl: t.resolvePath(u.flagUrl) }),
    c = (u) => {
      const d = a.find((f) => f.id === u);
      n(d);
    };
  return p.jsx("div", {
    children:
      s &&
      p.jsx(sw, {
        selectedOption: l(o),
        availableOptions: a.map(l),
        onOptionSelected: c,
        size: 2,
        tooltip: null,
        alwaysForceDropdown: !0,
        shrink: e,
      }),
  });
}
function aw({ shrink: e }) {
  const {
      selectThemeWithId: t,
      canChangeTheme: n,
      getSelectedTheme: r,
      getAvailableThemes: i,
    } = nf(),
    { getString: s } = J(),
    o = r(),
    a = i(),
    l = (u) => ({ id: u.id, faIcon: u.icon, label: s(u.id) }),
    c = (u) => {
      t(u);
    };
  return p.jsx("div", {
    children:
      n &&
      p.jsx(sw, {
        selectedOption: l(o),
        availableOptions: a.map(l),
        onOptionSelected: c,
        size: 2,
        tooltip: s("theme_" + o.id),
        shrink: e,
      }),
  });
}
function pl({
  onClick: e,
  children: t,
  className: n,
  tooltipText: r,
  disabled: i,
}) {
  const [s, o] = E.useState(!1),
    a = (d) => {
      o(!0);
    },
    l = (d) => {
      o(!1);
    },
    c = (d) => {
      s && e(), o(!1);
    },
    u = (d) => {
      if (s) {
        d.stopImmediatePropagation();
        return;
      }
      e();
    };
  return p.jsx("button", {
    className: `sensitive-button ${n}`,
    "data-tooltip": r,
    type: "button",
    disabled: i,
    onTouchStart: a,
    onTouchMove: l,
    onTouchEnd: c,
    onClick: u,
    children: t,
  });
}
function lw({
  shrink: e,
  label: t,
  icon: n,
  size: r,
  className: i,
  rounded: s,
  selected: o,
  disabled: a,
  onClick: l,
  tooltip: c,
}) {
  const u = X();
  return p.jsx(pl, {
    className: `nav-link ${u.strIf(s, "nav-link-rounded")}`,
    disabled: a,
    onClick: l,
    children: p.jsx(Bc, {
      shrink: e,
      label: t,
      icon: n,
      hoverAnimation: !0,
      size: r,
      tooltip: c,
      selected: o,
      className: i,
    }),
  });
}
function vC() {
  const {
      isAnimatedCursorEnabled: e,
      isAnimatedCursorActive: t,
      toggleAnimatedCursorActive: n,
    } = mt(),
    { getString: r } = J(),
    i = () => {
      n();
    };
  return p.jsx("div", {
    className: "toggle-button-wrapper",
    children:
      e() &&
      p.jsx(lw, {
        shrink: !0,
        label: "",
        tooltip: r("magic_cursor_on"),
        icon: t()
          ? "fa-solid fa-wand-magic-sparkles"
          : "fa-solid fa-wand-magic",
        size: 2,
        onClick: i,
      }),
  });
}
function hC() {
  const e = X(),
    [t, n] = E.useState(!1),
    [r, i] = E.useState(!0),
    { getSections: s } = pt(),
    { isBreakpoint: o } = fe(),
    { getString: a } = J(),
    l = s(),
    c = t || !r;
  E.useEffect(() => {
    i(o("lg"));
  }, [o("lg")]);
  const u = () => {
    n(!t);
  };
  return p.jsxs(rf, {
    nav: !0,
    className: `sidebar highlight-scrollbar ${e.strIf(c, "sidebar-shrink")}`,
    children: [
      r &&
        p.jsx(ol, {
          className: "btn-toggle",
          icon: c ? "fa-solid fa-caret-right" : "fa-solid fa-caret-left",
          size: c ? 1 : 2,
          tooltip: a("toggle_sidebar"),
          onClick: u,
        }),
      p.jsxs("div", {
        className: "sidebar-content d-flex h-100 flex-column",
        children: [
          p.jsx(a0, { shrink: c }),
          o("md") &&
            p.jsxs(p.Fragment, {
              children: [
                p.jsx(gC, { shouldShrink: c, sections: l }),
                p.jsx(yC, { shouldShrink: c }),
              ],
            }),
        ],
      }),
    ],
  });
}
function gC({ shouldShrink: e, sections: t }) {
  const { getTranslation: n } = J(),
    { isSectionActive: r, setActiveSection: i } = pr(),
    { isShowingSpinner: s } = mt(),
    [o, a] = E.useState(null),
    l = (u) => (s() ? !1 : o ? u.id === o : r(u.id)),
    c = (u) => {
      o ||
        (a(u.id),
        setTimeout(() => {
          i(u.id);
        }, 60),
        setTimeout(() => {
          a(null);
        }, 100));
    };
  return p.jsx(l0, {
    direction: "vertical",
    shrink: e,
    className: "mt-3",
    fillSpace: !0,
    children: t.map((u, d) =>
      p.jsx(
        Ko,
        {
          visible: !0,
          children: p.jsx(lw, {
            shrink: e,
            label:
              n(u.content.locales, "title_menu", !0) ||
              n(u.content.locales, "title"),
            icon: u.faIcon,
            size: 1,
            className: "px-4",
            disabled: l(u),
            selected: l(u),
            onClick: () => {
              c(u);
            },
          }),
        },
        d
      )
    ),
  });
}
function yC({ shouldShrink: e }) {
  const { canChangeLanguage: t } = J(),
    { canChangeTheme: n } = nf(),
    { isAnimatedCursorEnabled: r } = mt();
  return p.jsxs(l0, {
    direction: "horizontal",
    shrink: e,
    children: [
      p.jsx(Ko, { visible: t, children: p.jsx(ow, { shrink: !0 }) }),
      p.jsx(Ko, { visible: n, children: p.jsx(aw, { shrink: !0 }) }),
      !e && p.jsx(Ko, { visible: r(), children: p.jsx(vC, {}) }),
    ],
  });
}
function wC({ children: e, className: t, id: n, bottomBorder: r }) {
  return p.jsxs("div", {
    className: `border-wrap ${t}`,
    id: n,
    children: [
      p.jsx("div", { className: "border-wrap-block-top" }),
      p.jsx("div", { className: "border-wrap-content", children: e }),
      r && p.jsx("div", { className: "border-wrap-block-bottom" }),
    ],
  });
}
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ var Fc =
  function (e, t) {
    return (
      (Fc =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (n, r) {
            n.__proto__ = r;
          }) ||
        function (n, r) {
          for (var i in r) r.hasOwnProperty(i) && (n[i] = r[i]);
        }),
      Fc(e, t)
    );
  };
function uw(e, t) {
  Fc(e, t);
  function n() {
    this.constructor = e;
  }
  e.prototype =
    t === null ? Object.create(t) : ((n.prototype = t.prototype), new n());
}
var bt = function () {
  return (
    (bt =
      Object.assign ||
      function (t) {
        for (var n, r = 1, i = arguments.length; r < i; r++) {
          n = arguments[r];
          for (var s in n)
            Object.prototype.hasOwnProperty.call(n, s) && (t[s] = n[s]);
        }
        return t;
      }),
    bt.apply(this, arguments)
  );
};
function Kn(e, t, n, r) {
  var i = arguments.length,
    s =
      i < 3 ? t : r === null ? (r = Object.getOwnPropertyDescriptor(t, n)) : r,
    o;
  if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
    s = Reflect.decorate(e, t, n, r);
  else
    for (var a = e.length - 1; a >= 0; a--)
      (o = e[a]) && (s = (i < 3 ? o(s) : i > 3 ? o(t, n, s) : o(t, n)) || s);
  return i > 3 && s && Object.defineProperty(t, n, s), s;
}
function xC() {
  for (var e = 0, t = 0, n = arguments.length; t < n; t++)
    e += arguments[t].length;
  for (var r = Array(e), i = 0, t = 0; t < n; t++)
    for (var s = arguments[t], o = 0, a = s.length; o < a; o++, i++)
      r[i] = s[o];
  return r;
}
var ge = function (e) {
    try {
      return !!e();
    } catch {
      return !0;
    }
  },
  SC = ge,
  vf = !SC(function () {
    var e = function () {}.bind();
    return typeof e != "function" || e.hasOwnProperty("prototype");
  }),
  cw = vf,
  dw = Function.prototype,
  Wc = dw.call,
  EC = cw && dw.bind.bind(Wc, Wc),
  ie = cw
    ? EC
    : function (e) {
        return function () {
          return Wc.apply(e, arguments);
        };
      },
  fw = ie,
  IC = fw({}.toString),
  TC = fw("".slice),
  oi = function (e) {
    return TC(IC(e), 8, -1);
  },
  CC = ie,
  bC = ge,
  PC = oi,
  ru = Object,
  jC = CC("".split),
  hf = bC(function () {
    return !ru("z").propertyIsEnumerable(0);
  })
    ? function (e) {
        return PC(e) === "String" ? jC(e, "") : ru(e);
      }
    : ru,
  ai = function (e) {
    return e == null;
  },
  $C = ai,
  _C = TypeError,
  As = function (e) {
    if ($C(e)) throw new _C("Can't call method on " + e);
    return e;
  },
  OC = hf,
  MC = As,
  li = function (e) {
    return OC(MC(e));
  },
  $i = function (e) {
    return e && e.Math === Math && e;
  },
  Ve =
    $i(typeof globalThis == "object" && globalThis) ||
    $i(typeof window == "object" && window) ||
    $i(typeof self == "object" && self) ||
    $i(typeof Us == "object" && Us) ||
    $i(typeof Us == "object" && Us) ||
    (function () {
      return this;
    })() ||
    Function("return this")(),
  pw = { exports: {} },
  Dm = Ve,
  NC = Object.defineProperty,
  gf = function (e, t) {
    try {
      NC(Dm, e, { value: t, configurable: !0, writable: !0 });
    } catch {
      Dm[e] = t;
    }
    return t;
  },
  kC = Ve,
  AC = gf,
  zm = "__core-js_shared__",
  Rm = (pw.exports = kC[zm] || AC(zm, {}));
(Rm.versions || (Rm.versions = [])).push({
  version: "3.38.1",
  mode: "global",
  copyright: "© 2014-2024 Denis Pushkarev (zloirock.ru)",
  license: "https://github.com/zloirock/core-js/blob/v3.38.1/LICENSE",
  source: "https://github.com/zloirock/core-js",
});
var yf = pw.exports,
  Bm = yf,
  mw = function (e, t) {
    return Bm[e] || (Bm[e] = t || {});
  },
  LC = As,
  DC = Object,
  Ls = function (e) {
    return DC(LC(e));
  },
  zC = ie,
  RC = Ls,
  BC = zC({}.hasOwnProperty),
  jt =
    Object.hasOwn ||
    function (t, n) {
      return BC(RC(t), n);
    },
  FC = ie,
  WC = 0,
  HC = Math.random(),
  VC = FC((1).toString),
  wf = function (e) {
    return "Symbol(" + (e === void 0 ? "" : e) + ")_" + VC(++WC + HC, 36);
  },
  GC = Ve,
  Fm = GC.navigator,
  Wm = Fm && Fm.userAgent,
  YC = Wm ? String(Wm) : "",
  vw = Ve,
  iu = YC,
  Hm = vw.process,
  Vm = vw.Deno,
  Gm = (Hm && Hm.versions) || (Vm && Vm.version),
  Ym = Gm && Gm.v8,
  It,
  Ma;
Ym &&
  ((It = Ym.split(".")), (Ma = It[0] > 0 && It[0] < 4 ? 1 : +(It[0] + It[1])));
!Ma &&
  iu &&
  ((It = iu.match(/Edge\/(\d+)/)),
  (!It || It[1] >= 74) &&
    ((It = iu.match(/Chrome\/(\d+)/)), It && (Ma = +It[1])));
var XC = Ma,
  Xm = XC,
  UC = ge,
  ZC = Ve,
  KC = ZC.String,
  hw =
    !!Object.getOwnPropertySymbols &&
    !UC(function () {
      var e = Symbol("symbol detection");
      return (
        !KC(e) ||
        !(Object(e) instanceof Symbol) ||
        (!Symbol.sham && Xm && Xm < 41)
      );
    }),
  QC = hw,
  gw = QC && !Symbol.sham && typeof Symbol.iterator == "symbol",
  qC = Ve,
  JC = mw,
  Um = jt,
  eb = wf,
  tb = hw,
  nb = gw,
  Ar = qC.Symbol,
  su = JC("wks"),
  rb = nb ? Ar.for || Ar : (Ar && Ar.withoutSetter) || eb,
  vt = function (e) {
    return (
      Um(su, e) || (su[e] = tb && Um(Ar, e) ? Ar[e] : rb("Symbol." + e)), su[e]
    );
  },
  ou = typeof document == "object" && document.all,
  Ce =
    typeof ou > "u" && ou !== void 0
      ? function (e) {
          return typeof e == "function" || e === ou;
        }
      : function (e) {
          return typeof e == "function";
        },
  ib = Ce,
  ke = function (e) {
    return typeof e == "object" ? e !== null : ib(e);
  },
  sb = ke,
  ob = String,
  ab = TypeError,
  Wt = function (e) {
    if (sb(e)) return e;
    throw new ab(ob(e) + " is not an object");
  },
  yw = {},
  lb = ge,
  et = !lb(function () {
    return (
      Object.defineProperty({}, 1, {
        get: function () {
          return 7;
        },
      })[1] !== 7
    );
  }),
  ub = et,
  cb = ge,
  ww =
    ub &&
    cb(function () {
      return (
        Object.defineProperty(function () {}, "prototype", {
          value: 42,
          writable: !1,
        }).prototype !== 42
      );
    }),
  $t = {},
  db = Ve,
  Zm = ke,
  Hc = db.document,
  fb = Zm(Hc) && Zm(Hc.createElement),
  xw = function (e) {
    return fb ? Hc.createElement(e) : {};
  },
  pb = et,
  mb = ge,
  vb = xw,
  Sw =
    !pb &&
    !mb(function () {
      return (
        Object.defineProperty(vb("div"), "a", {
          get: function () {
            return 7;
          },
        }).a !== 7
      );
    }),
  hb = vf,
  go = Function.prototype.call,
  _t = hb
    ? go.bind(go)
    : function () {
        return go.apply(go, arguments);
      },
  au = Ve,
  gb = Ce,
  yb = function (e) {
    return gb(e) ? e : void 0;
  },
  ui = function (e, t) {
    return arguments.length < 2 ? yb(au[e]) : au[e] && au[e][t];
  },
  wb = ie,
  xf = wb({}.isPrototypeOf),
  xb = ui,
  Sb = Ce,
  Eb = xf,
  Ib = gw,
  Tb = Object,
  Ew = Ib
    ? function (e) {
        return typeof e == "symbol";
      }
    : function (e) {
        var t = xb("Symbol");
        return Sb(t) && Eb(t.prototype, Tb(e));
      },
  Cb = String,
  Sf = function (e) {
    try {
      return Cb(e);
    } catch {
      return "Object";
    }
  },
  bb = Ce,
  Pb = Sf,
  jb = TypeError,
  ci = function (e) {
    if (bb(e)) return e;
    throw new jb(Pb(e) + " is not a function");
  },
  $b = ci,
  _b = ai,
  Ef = function (e, t) {
    var n = e[t];
    return _b(n) ? void 0 : $b(n);
  },
  lu = _t,
  uu = Ce,
  cu = ke,
  Ob = TypeError,
  Mb = function (e, t) {
    var n, r;
    if (
      (t === "string" && uu((n = e.toString)) && !cu((r = lu(n, e)))) ||
      (uu((n = e.valueOf)) && !cu((r = lu(n, e)))) ||
      (t !== "string" && uu((n = e.toString)) && !cu((r = lu(n, e))))
    )
      return r;
    throw new Ob("Can't convert object to primitive value");
  },
  Nb = _t,
  Km = ke,
  Qm = Ew,
  kb = Ef,
  Ab = Mb,
  Lb = vt,
  Db = TypeError,
  zb = Lb("toPrimitive"),
  Rb = function (e, t) {
    if (!Km(e) || Qm(e)) return e;
    var n = kb(e, zb),
      r;
    if (n) {
      if ((t === void 0 && (t = "default"), (r = Nb(n, e, t)), !Km(r) || Qm(r)))
        return r;
      throw new Db("Can't convert object to primitive value");
    }
    return t === void 0 && (t = "number"), Ab(e, t);
  },
  Bb = Rb,
  Fb = Ew,
  Iw = function (e) {
    var t = Bb(e, "string");
    return Fb(t) ? t : t + "";
  },
  Wb = et,
  Hb = Sw,
  Vb = ww,
  yo = Wt,
  qm = Iw,
  Gb = TypeError,
  du = Object.defineProperty,
  Yb = Object.getOwnPropertyDescriptor,
  fu = "enumerable",
  pu = "configurable",
  mu = "writable";
$t.f = Wb
  ? Vb
    ? function (t, n, r) {
        if (
          (yo(t),
          (n = qm(n)),
          yo(r),
          typeof t == "function" &&
            n === "prototype" &&
            "value" in r &&
            mu in r &&
            !r[mu])
        ) {
          var i = Yb(t, n);
          i &&
            i[mu] &&
            ((t[n] = r.value),
            (r = {
              configurable: pu in r ? r[pu] : i[pu],
              enumerable: fu in r ? r[fu] : i[fu],
              writable: !1,
            }));
        }
        return du(t, n, r);
      }
    : du
  : function (t, n, r) {
      if ((yo(t), (n = qm(n)), yo(r), Hb))
        try {
          return du(t, n, r);
        } catch {}
      if ("get" in r || "set" in r) throw new Gb("Accessors not supported");
      return "value" in r && (t[n] = r.value), t;
    };
var Xb = Math.ceil,
  Ub = Math.floor,
  Zb =
    Math.trunc ||
    function (t) {
      var n = +t;
      return (n > 0 ? Ub : Xb)(n);
    },
  Kb = Zb,
  ml = function (e) {
    var t = +e;
    return t !== t || t === 0 ? 0 : Kb(t);
  },
  Qb = ml,
  qb = Math.max,
  Jb = Math.min,
  eP = function (e, t) {
    var n = Qb(e);
    return n < 0 ? qb(n + t, 0) : Jb(n, t);
  },
  tP = ml,
  nP = Math.min,
  rP = function (e) {
    var t = tP(e);
    return t > 0 ? nP(t, 9007199254740991) : 0;
  },
  iP = rP,
  vl = function (e) {
    return iP(e.length);
  },
  sP = li,
  oP = eP,
  aP = vl,
  Jm = function (e) {
    return function (t, n, r) {
      var i = sP(t),
        s = aP(i);
      if (s === 0) return !e && -1;
      var o = oP(r, s),
        a;
      if (e && n !== n) {
        for (; s > o; ) if (((a = i[o++]), a !== a)) return !0;
      } else
        for (; s > o; o++) if ((e || o in i) && i[o] === n) return e || o || 0;
      return !e && -1;
    };
  },
  lP = { includes: Jm(!0), indexOf: Jm(!1) },
  hl = {},
  uP = ie,
  vu = jt,
  cP = li,
  dP = lP.indexOf,
  fP = hl,
  ev = uP([].push),
  Tw = function (e, t) {
    var n = cP(e),
      r = 0,
      i = [],
      s;
    for (s in n) !vu(fP, s) && vu(n, s) && ev(i, s);
    for (; t.length > r; ) vu(n, (s = t[r++])) && (~dP(i, s) || ev(i, s));
    return i;
  },
  If = [
    "constructor",
    "hasOwnProperty",
    "isPrototypeOf",
    "propertyIsEnumerable",
    "toLocaleString",
    "toString",
    "valueOf",
  ],
  pP = Tw,
  mP = If,
  Cw =
    Object.keys ||
    function (t) {
      return pP(t, mP);
    },
  vP = et,
  hP = ww,
  gP = $t,
  yP = Wt,
  wP = li,
  xP = Cw;
yw.f =
  vP && !hP
    ? Object.defineProperties
    : function (t, n) {
        yP(t);
        for (var r = wP(n), i = xP(n), s = i.length, o = 0, a; s > o; )
          gP.f(t, (a = i[o++]), r[a]);
        return t;
      };
var SP = ui,
  EP = SP("document", "documentElement"),
  IP = mw,
  TP = wf,
  tv = IP("keys"),
  Tf = function (e) {
    return tv[e] || (tv[e] = TP(e));
  },
  CP = Wt,
  bP = yw,
  nv = If,
  PP = hl,
  jP = EP,
  $P = xw,
  _P = Tf,
  rv = ">",
  iv = "<",
  Vc = "prototype",
  Gc = "script",
  bw = _P("IE_PROTO"),
  hu = function () {},
  Pw = function (e) {
    return iv + Gc + rv + e + iv + "/" + Gc + rv;
  },
  sv = function (e) {
    e.write(Pw("")), e.close();
    var t = e.parentWindow.Object;
    return (e = null), t;
  },
  OP = function () {
    var e = $P("iframe"),
      t = "java" + Gc + ":",
      n;
    return (
      (e.style.display = "none"),
      jP.appendChild(e),
      (e.src = String(t)),
      (n = e.contentWindow.document),
      n.open(),
      n.write(Pw("document.F=Object")),
      n.close(),
      n.F
    );
  },
  wo,
  qo = function () {
    try {
      wo = new ActiveXObject("htmlfile");
    } catch {}
    qo =
      typeof document < "u" ? (document.domain && wo ? sv(wo) : OP()) : sv(wo);
    for (var e = nv.length; e--; ) delete qo[Vc][nv[e]];
    return qo();
  };
PP[bw] = !0;
var Cf =
    Object.create ||
    function (t, n) {
      var r;
      return (
        t !== null
          ? ((hu[Vc] = CP(t)), (r = new hu()), (hu[Vc] = null), (r[bw] = t))
          : (r = qo()),
        n === void 0 ? r : bP.f(r, n)
      );
    },
  MP = vt,
  NP = Cf,
  kP = $t.f,
  Yc = MP("unscopables"),
  Xc = Array.prototype;
Xc[Yc] === void 0 && kP(Xc, Yc, { configurable: !0, value: NP(null) });
var AP = function (e) {
    Xc[Yc][e] = !0;
  },
  Ds = {},
  LP = Ve,
  DP = Ce,
  ov = LP.WeakMap,
  jw = DP(ov) && /native code/.test(String(ov)),
  gl = function (e, t) {
    return {
      enumerable: !(e & 1),
      configurable: !(e & 2),
      writable: !(e & 4),
      value: t,
    };
  },
  zP = et,
  RP = $t,
  BP = gl,
  bf = zP
    ? function (e, t, n) {
        return RP.f(e, t, BP(1, n));
      }
    : function (e, t, n) {
        return (e[t] = n), e;
      },
  FP = jw,
  $w = Ve,
  WP = ke,
  HP = bf,
  gu = jt,
  yu = yf,
  VP = Tf,
  GP = hl,
  av = "Object already initialized",
  Uc = $w.TypeError,
  YP = $w.WeakMap,
  Na,
  Is,
  ka,
  XP = function (e) {
    return ka(e) ? Is(e) : Na(e, {});
  },
  UP = function (e) {
    return function (t) {
      var n;
      if (!WP(t) || (n = Is(t)).type !== e)
        throw new Uc("Incompatible receiver, " + e + " required");
      return n;
    };
  };
if (FP || yu.state) {
  var Mt = yu.state || (yu.state = new YP());
  (Mt.get = Mt.get),
    (Mt.has = Mt.has),
    (Mt.set = Mt.set),
    (Na = function (e, t) {
      if (Mt.has(e)) throw new Uc(av);
      return (t.facade = e), Mt.set(e, t), t;
    }),
    (Is = function (e) {
      return Mt.get(e) || {};
    }),
    (ka = function (e) {
      return Mt.has(e);
    });
} else {
  var xr = VP("state");
  (GP[xr] = !0),
    (Na = function (e, t) {
      if (gu(e, xr)) throw new Uc(av);
      return (t.facade = e), HP(e, xr, t), t;
    }),
    (Is = function (e) {
      return gu(e, xr) ? e[xr] : {};
    }),
    (ka = function (e) {
      return gu(e, xr);
    });
}
var di = { set: Na, get: Is, has: ka, enforce: XP, getterFor: UP },
  Pf = {},
  jf = {},
  _w = {}.propertyIsEnumerable,
  Ow = Object.getOwnPropertyDescriptor,
  ZP = Ow && !_w.call({ 1: 2 }, 1);
jf.f = ZP
  ? function (t) {
      var n = Ow(this, t);
      return !!n && n.enumerable;
    }
  : _w;
var KP = et,
  QP = _t,
  qP = jf,
  JP = gl,
  ej = li,
  tj = Iw,
  nj = jt,
  rj = Sw,
  lv = Object.getOwnPropertyDescriptor;
Pf.f = KP
  ? lv
  : function (t, n) {
      if (((t = ej(t)), (n = tj(n)), rj))
        try {
          return lv(t, n);
        } catch {}
      if (nj(t, n)) return JP(!QP(qP.f, t, n), t[n]);
    };
var Mw = { exports: {} },
  Zc = et,
  ij = jt,
  Nw = Function.prototype,
  sj = Zc && Object.getOwnPropertyDescriptor,
  $f = ij(Nw, "name"),
  oj = $f && function () {}.name === "something",
  aj = $f && (!Zc || (Zc && sj(Nw, "name").configurable)),
  kw = { EXISTS: $f, PROPER: oj, CONFIGURABLE: aj },
  lj = ie,
  uj = Ce,
  Kc = yf,
  cj = lj(Function.toString);
uj(Kc.inspectSource) ||
  (Kc.inspectSource = function (e) {
    return cj(e);
  });
var Aw = Kc.inspectSource,
  _f = ie,
  dj = ge,
  fj = Ce,
  xo = jt,
  Qc = et,
  pj = kw.CONFIGURABLE,
  mj = Aw,
  Lw = di,
  vj = Lw.enforce,
  hj = Lw.get,
  uv = String,
  Jo = Object.defineProperty,
  gj = _f("".slice),
  yj = _f("".replace),
  wj = _f([].join),
  xj =
    Qc &&
    !dj(function () {
      return Jo(function () {}, "length", { value: 8 }).length !== 8;
    }),
  Sj = String(String).split("String"),
  Ej = (Mw.exports = function (e, t, n) {
    gj(uv(t), 0, 7) === "Symbol(" &&
      (t = "[" + yj(uv(t), /^Symbol\(([^)]*)\).*$/, "$1") + "]"),
      n && n.getter && (t = "get " + t),
      n && n.setter && (t = "set " + t),
      (!xo(e, "name") || (pj && e.name !== t)) &&
        (Qc ? Jo(e, "name", { value: t, configurable: !0 }) : (e.name = t)),
      xj &&
        n &&
        xo(n, "arity") &&
        e.length !== n.arity &&
        Jo(e, "length", { value: n.arity });
    try {
      n && xo(n, "constructor") && n.constructor
        ? Qc && Jo(e, "prototype", { writable: !1 })
        : e.prototype && (e.prototype = void 0);
    } catch {}
    var r = vj(e);
    return (
      xo(r, "source") || (r.source = wj(Sj, typeof t == "string" ? t : "")), e
    );
  });
Function.prototype.toString = Ej(function () {
  return (fj(this) && hj(this).source) || mj(this);
}, "toString");
var Dw = Mw.exports,
  Ij = Ce,
  Tj = $t,
  Cj = Dw,
  bj = gf,
  fi = function (e, t, n, r) {
    r || (r = {});
    var i = r.enumerable,
      s = r.name !== void 0 ? r.name : t;
    if ((Ij(n) && Cj(n, s, r), r.global)) i ? (e[t] = n) : bj(t, n);
    else {
      try {
        r.unsafe ? e[t] && (i = !0) : delete e[t];
      } catch {}
      i
        ? (e[t] = n)
        : Tj.f(e, t, {
            value: n,
            enumerable: !1,
            configurable: !r.nonConfigurable,
            writable: !r.nonWritable,
          });
    }
    return e;
  },
  yl = {},
  Pj = Tw,
  jj = If,
  $j = jj.concat("length", "prototype");
yl.f =
  Object.getOwnPropertyNames ||
  function (t) {
    return Pj(t, $j);
  };
var Of = {};
Of.f = Object.getOwnPropertySymbols;
var _j = ui,
  Oj = ie,
  Mj = yl,
  Nj = Of,
  kj = Wt,
  Aj = Oj([].concat),
  Lj =
    _j("Reflect", "ownKeys") ||
    function (t) {
      var n = Mj.f(kj(t)),
        r = Nj.f;
      return r ? Aj(n, r(t)) : n;
    },
  cv = jt,
  Dj = Lj,
  zj = Pf,
  Rj = $t,
  Bj = function (e, t, n) {
    for (var r = Dj(t), i = Rj.f, s = zj.f, o = 0; o < r.length; o++) {
      var a = r[o];
      !cv(e, a) && !(n && cv(n, a)) && i(e, a, s(t, a));
    }
  },
  Fj = ge,
  Wj = Ce,
  Hj = /#|\.prototype\./,
  zs = function (e, t) {
    var n = Gj[Vj(e)];
    return n === Xj ? !0 : n === Yj ? !1 : Wj(t) ? Fj(t) : !!t;
  },
  Vj = (zs.normalize = function (e) {
    return String(e).replace(Hj, ".").toLowerCase();
  }),
  Gj = (zs.data = {}),
  Yj = (zs.NATIVE = "N"),
  Xj = (zs.POLYFILL = "P"),
  zw = zs,
  So = Ve,
  Uj = Pf.f,
  Zj = bf,
  Kj = fi,
  Qj = gf,
  qj = Bj,
  Jj = zw,
  tt = function (e, t) {
    var n = e.target,
      r = e.global,
      i = e.stat,
      s,
      o,
      a,
      l,
      c,
      u;
    if (
      (r
        ? (o = So)
        : i
        ? (o = So[n] || Qj(n, {}))
        : (o = So[n] && So[n].prototype),
      o)
    )
      for (a in t) {
        if (
          ((c = t[a]),
          e.dontCallGetSet ? ((u = Uj(o, a)), (l = u && u.value)) : (l = o[a]),
          (s = Jj(r ? a : n + (i ? "." : "#") + a, e.forced)),
          !s && l !== void 0)
        ) {
          if (typeof c == typeof l) continue;
          qj(c, l);
        }
        (e.sham || (l && l.sham)) && Zj(c, "sham", !0), Kj(o, a, c, e);
      }
  },
  e$ = ge,
  t$ = !e$(function () {
    function e() {}
    return (
      (e.prototype.constructor = null),
      Object.getPrototypeOf(new e()) !== e.prototype
    );
  }),
  n$ = jt,
  r$ = Ce,
  i$ = Ls,
  s$ = Tf,
  o$ = t$,
  dv = s$("IE_PROTO"),
  qc = Object,
  a$ = qc.prototype,
  Rw = o$
    ? qc.getPrototypeOf
    : function (e) {
        var t = i$(e);
        if (n$(t, dv)) return t[dv];
        var n = t.constructor;
        return r$(n) && t instanceof n
          ? n.prototype
          : t instanceof qc
          ? a$
          : null;
      },
  l$ = ge,
  u$ = Ce,
  c$ = ke,
  fv = Rw,
  d$ = fi,
  f$ = vt,
  Jc = f$("iterator"),
  Bw = !1,
  ur,
  wu,
  xu;
[].keys &&
  ((xu = [].keys()),
  "next" in xu
    ? ((wu = fv(fv(xu))), wu !== Object.prototype && (ur = wu))
    : (Bw = !0));
var p$ =
  !c$(ur) ||
  l$(function () {
    var e = {};
    return ur[Jc].call(e) !== e;
  });
p$ && (ur = {});
u$(ur[Jc]) ||
  d$(ur, Jc, function () {
    return this;
  });
var Fw = { IteratorPrototype: ur, BUGGY_SAFARI_ITERATORS: Bw },
  m$ = $t.f,
  v$ = jt,
  h$ = vt,
  pv = h$("toStringTag"),
  Mf = function (e, t, n) {
    e && !n && (e = e.prototype),
      e && !v$(e, pv) && m$(e, pv, { configurable: !0, value: t });
  },
  g$ = Fw.IteratorPrototype,
  y$ = Cf,
  w$ = gl,
  x$ = Mf,
  S$ = Ds,
  E$ = function () {
    return this;
  },
  I$ = function (e, t, n, r) {
    var i = t + " Iterator";
    return (
      (e.prototype = y$(g$, { next: w$(+!r, n) })),
      x$(e, i, !1),
      (S$[i] = E$),
      e
    );
  },
  T$ = ie,
  C$ = ci,
  Ww = function (e, t, n) {
    try {
      return T$(C$(Object.getOwnPropertyDescriptor(e, t)[n]));
    } catch {}
  },
  b$ = ke,
  P$ = function (e) {
    return b$(e) || e === null;
  },
  j$ = P$,
  $$ = String,
  _$ = TypeError,
  O$ = function (e) {
    if (j$(e)) return e;
    throw new _$("Can't set " + $$(e) + " as a prototype");
  },
  M$ = Ww,
  N$ = ke,
  k$ = As,
  A$ = O$,
  Hw =
    Object.setPrototypeOf ||
    ("__proto__" in {}
      ? (function () {
          var e = !1,
            t = {},
            n;
          try {
            (n = M$(Object.prototype, "__proto__", "set")),
              n(t, []),
              (e = t instanceof Array);
          } catch {}
          return function (i, s) {
            return k$(i), A$(s), N$(i) && (e ? n(i, s) : (i.__proto__ = s)), i;
          };
        })()
      : void 0),
  L$ = tt,
  D$ = _t,
  Vw = kw,
  z$ = Ce,
  R$ = I$,
  mv = Rw,
  vv = Hw,
  B$ = Mf,
  F$ = bf,
  Su = fi,
  W$ = vt,
  H$ = Ds,
  Gw = Fw,
  V$ = Vw.PROPER,
  G$ = Vw.CONFIGURABLE,
  hv = Gw.IteratorPrototype,
  Eo = Gw.BUGGY_SAFARI_ITERATORS,
  _i = W$("iterator"),
  gv = "keys",
  Oi = "values",
  yv = "entries",
  Y$ = function () {
    return this;
  },
  Nf = function (e, t, n, r, i, s, o) {
    R$(n, t, r);
    var a = function (v) {
        if (v === i && f) return f;
        if (!Eo && v && v in u) return u[v];
        switch (v) {
          case gv:
            return function () {
              return new n(this, v);
            };
          case Oi:
            return function () {
              return new n(this, v);
            };
          case yv:
            return function () {
              return new n(this, v);
            };
        }
        return function () {
          return new n(this);
        };
      },
      l = t + " Iterator",
      c = !1,
      u = e.prototype,
      d = u[_i] || u["@@iterator"] || (i && u[i]),
      f = (!Eo && d) || a(i),
      g = (t === "Array" && u.entries) || d,
      y,
      w,
      I;
    if (
      (g &&
        ((y = mv(g.call(new e()))),
        y !== Object.prototype &&
          y.next &&
          (mv(y) !== hv && (vv ? vv(y, hv) : z$(y[_i]) || Su(y, _i, Y$)),
          B$(y, l, !0))),
      V$ &&
        i === Oi &&
        d &&
        d.name !== Oi &&
        (G$
          ? F$(u, "name", Oi)
          : ((c = !0),
            (f = function () {
              return D$(d, this);
            }))),
      i)
    )
      if (((w = { values: a(Oi), keys: s ? f : a(gv), entries: a(yv) }), o))
        for (I in w) (Eo || c || !(I in u)) && Su(u, I, w[I]);
      else L$({ target: t, proto: !0, forced: Eo || c }, w);
    return u[_i] !== f && Su(u, _i, f, { name: i }), (H$[t] = f), w;
  },
  kf = function (e, t) {
    return { value: e, done: t };
  },
  X$ = li,
  Af = AP,
  wv = Ds,
  Yw = di,
  U$ = $t.f,
  Z$ = Nf,
  Io = kf,
  K$ = et,
  Xw = "Array Iterator",
  Q$ = Yw.set,
  q$ = Yw.getterFor(Xw);
Z$(
  Array,
  "Array",
  function (e, t) {
    Q$(this, { type: Xw, target: X$(e), index: 0, kind: t });
  },
  function () {
    var e = q$(this),
      t = e.target,
      n = e.index++;
    if (!t || n >= t.length) return (e.target = null), Io(void 0, !0);
    switch (e.kind) {
      case "keys":
        return Io(n, !1);
      case "values":
        return Io(t[n], !1);
    }
    return Io([n, t[n]], !1);
  },
  "values"
);
var xv = (wv.Arguments = wv.Array);
Af("keys");
Af("values");
Af("entries");
if (K$ && xv.name !== "values")
  try {
    U$(xv, "name", { value: "values" });
  } catch {}
var Uw = { exports: {} },
  Zw = {},
  J$ = ie,
  e_ = J$([].slice),
  t_ = oi,
  n_ = li,
  Kw = yl.f,
  r_ = e_,
  Qw =
    typeof window == "object" && window && Object.getOwnPropertyNames
      ? Object.getOwnPropertyNames(window)
      : [],
  i_ = function (e) {
    try {
      return Kw(e);
    } catch {
      return r_(Qw);
    }
  };
Zw.f = function (t) {
  return Qw && t_(t) === "Window" ? i_(t) : Kw(n_(t));
};
var s_ = ge,
  o_ = s_(function () {
    if (typeof ArrayBuffer == "function") {
      var e = new ArrayBuffer(8);
      Object.isExtensible(e) && Object.defineProperty(e, "a", { value: 8 });
    }
  }),
  a_ = ge,
  l_ = ke,
  u_ = oi,
  Sv = o_,
  ea = Object.isExtensible,
  c_ = a_(function () {
    ea(1);
  }),
  d_ =
    c_ || Sv
      ? function (t) {
          return !l_(t) || (Sv && u_(t) === "ArrayBuffer")
            ? !1
            : ea
            ? ea(t)
            : !0;
        }
      : ea,
  f_ = ge,
  qw = !f_(function () {
    return Object.isExtensible(Object.preventExtensions({}));
  }),
  p_ = tt,
  m_ = ie,
  v_ = hl,
  h_ = ke,
  Lf = jt,
  g_ = $t.f,
  Ev = yl,
  y_ = Zw,
  Df = d_,
  w_ = wf,
  x_ = qw,
  Jw = !1,
  un = w_("meta"),
  S_ = 0,
  zf = function (e) {
    g_(e, un, { value: { objectID: "O" + S_++, weakData: {} } });
  },
  E_ = function (e, t) {
    if (!h_(e))
      return typeof e == "symbol" ? e : (typeof e == "string" ? "S" : "P") + e;
    if (!Lf(e, un)) {
      if (!Df(e)) return "F";
      if (!t) return "E";
      zf(e);
    }
    return e[un].objectID;
  },
  I_ = function (e, t) {
    if (!Lf(e, un)) {
      if (!Df(e)) return !0;
      if (!t) return !1;
      zf(e);
    }
    return e[un].weakData;
  },
  T_ = function (e) {
    return x_ && Jw && Df(e) && !Lf(e, un) && zf(e), e;
  },
  C_ = function () {
    (b_.enable = function () {}), (Jw = !0);
    var e = Ev.f,
      t = m_([].splice),
      n = {};
    (n[un] = 1),
      e(n).length &&
        ((Ev.f = function (r) {
          for (var i = e(r), s = 0, o = i.length; s < o; s++)
            if (i[s] === un) {
              t(i, s, 1);
              break;
            }
          return i;
        }),
        p_(
          { target: "Object", stat: !0, forced: !0 },
          { getOwnPropertyNames: y_.f }
        ));
  },
  b_ = (Uw.exports = {
    enable: C_,
    fastKey: E_,
    getWeakData: I_,
    onFreeze: T_,
  });
v_[un] = !0;
var wl = Uw.exports,
  P_ = oi,
  j_ = ie,
  $_ = function (e) {
    if (P_(e) === "Function") return j_(e);
  },
  Iv = $_,
  __ = ci,
  O_ = vf,
  M_ = Iv(Iv.bind),
  xl = function (e, t) {
    return (
      __(e),
      t === void 0
        ? e
        : O_
        ? M_(e, t)
        : function () {
            return e.apply(t, arguments);
          }
    );
  },
  N_ = vt,
  k_ = Ds,
  A_ = N_("iterator"),
  L_ = Array.prototype,
  ex = function (e) {
    return e !== void 0 && (k_.Array === e || L_[A_] === e);
  },
  D_ = vt,
  z_ = D_("toStringTag"),
  tx = {};
tx[z_] = "z";
var Rf = String(tx) === "[object z]",
  R_ = Rf,
  B_ = Ce,
  ta = oi,
  F_ = vt,
  W_ = F_("toStringTag"),
  H_ = Object,
  V_ =
    ta(
      (function () {
        return arguments;
      })()
    ) === "Arguments",
  G_ = function (e, t) {
    try {
      return e[t];
    } catch {}
  },
  Sl = R_
    ? ta
    : function (e) {
        var t, n, r;
        return e === void 0
          ? "Undefined"
          : e === null
          ? "Null"
          : typeof (n = G_((t = H_(e)), W_)) == "string"
          ? n
          : V_
          ? ta(t)
          : (r = ta(t)) === "Object" && B_(t.callee)
          ? "Arguments"
          : r;
      },
  Y_ = Sl,
  Tv = Ef,
  X_ = ai,
  U_ = Ds,
  Z_ = vt,
  K_ = Z_("iterator"),
  Bf = function (e) {
    if (!X_(e)) return Tv(e, K_) || Tv(e, "@@iterator") || U_[Y_(e)];
  },
  Q_ = _t,
  q_ = ci,
  J_ = Wt,
  eO = Sf,
  tO = Bf,
  nO = TypeError,
  nx = function (e, t) {
    var n = arguments.length < 2 ? tO(e) : t;
    if (q_(n)) return J_(Q_(n, e));
    throw new nO(eO(e) + " is not iterable");
  },
  rO = _t,
  Cv = Wt,
  iO = Ef,
  El = function (e, t, n) {
    var r, i;
    Cv(e);
    try {
      if (((r = iO(e, "return")), !r)) {
        if (t === "throw") throw n;
        return n;
      }
      r = rO(r, e);
    } catch (s) {
      (i = !0), (r = s);
    }
    if (t === "throw") throw n;
    if (i) throw r;
    return Cv(r), n;
  },
  sO = xl,
  oO = _t,
  aO = Wt,
  lO = Sf,
  uO = ex,
  cO = vl,
  bv = xf,
  dO = nx,
  fO = Bf,
  Pv = El,
  pO = TypeError,
  na = function (e, t) {
    (this.stopped = e), (this.result = t);
  },
  jv = na.prototype,
  Il = function (e, t, n) {
    var r = n && n.that,
      i = !!(n && n.AS_ENTRIES),
      s = !!(n && n.IS_RECORD),
      o = !!(n && n.IS_ITERATOR),
      a = !!(n && n.INTERRUPTED),
      l = sO(t, r),
      c,
      u,
      d,
      f,
      g,
      y,
      w,
      I = function (m) {
        return c && Pv(c, "normal", m), new na(!0, m);
      },
      v = function (m) {
        return i
          ? (aO(m), a ? l(m[0], m[1], I) : l(m[0], m[1]))
          : a
          ? l(m, I)
          : l(m);
      };
    if (s) c = e.iterator;
    else if (o) c = e;
    else {
      if (((u = fO(e)), !u)) throw new pO(lO(e) + " is not iterable");
      if (uO(u)) {
        for (d = 0, f = cO(e); f > d; d++)
          if (((g = v(e[d])), g && bv(jv, g))) return g;
        return new na(!1);
      }
      c = dO(e, u);
    }
    for (y = s ? e.next : c.next; !(w = oO(y, c)).done; ) {
      try {
        g = v(w.value);
      } catch (m) {
        Pv(c, "throw", m);
      }
      if (typeof g == "object" && g && bv(jv, g)) return g;
    }
    return new na(!1);
  },
  mO = xf,
  vO = TypeError,
  Ff = function (e, t) {
    if (mO(t, e)) return e;
    throw new vO("Incorrect invocation");
  },
  hO = vt,
  rx = hO("iterator"),
  ix = !1;
try {
  var gO = 0,
    $v = {
      next: function () {
        return { done: !!gO++ };
      },
      return: function () {
        ix = !0;
      },
    };
  ($v[rx] = function () {
    return this;
  }),
    Array.from($v, function () {
      throw 2;
    });
} catch {}
var sx = function (e, t) {
    try {
      if (!t && !ix) return !1;
    } catch {
      return !1;
    }
    var n = !1;
    try {
      var r = {};
      (r[rx] = function () {
        return {
          next: function () {
            return { done: (n = !0) };
          },
        };
      }),
        e(r);
    } catch {}
    return n;
  },
  yO = Ce,
  wO = ke,
  _v = Hw,
  xO = function (e, t, n) {
    var r, i;
    return (
      _v &&
        yO((r = t.constructor)) &&
        r !== n &&
        wO((i = r.prototype)) &&
        i !== n.prototype &&
        _v(e, i),
      e
    );
  },
  SO = tt,
  EO = Ve,
  IO = ie,
  Ov = zw,
  TO = fi,
  CO = wl,
  bO = Il,
  PO = Ff,
  jO = Ce,
  $O = ai,
  Eu = ke,
  Iu = ge,
  _O = sx,
  OO = Mf,
  MO = xO,
  Wf = function (e, t, n) {
    var r = e.indexOf("Map") !== -1,
      i = e.indexOf("Weak") !== -1,
      s = r ? "set" : "add",
      o = EO[e],
      a = o && o.prototype,
      l = o,
      c = {},
      u = function (v) {
        var m = IO(a[v]);
        TO(
          a,
          v,
          v === "add"
            ? function (x) {
                return m(this, x === 0 ? 0 : x), this;
              }
            : v === "delete"
            ? function (h) {
                return i && !Eu(h) ? !1 : m(this, h === 0 ? 0 : h);
              }
            : v === "get"
            ? function (x) {
                return i && !Eu(x) ? void 0 : m(this, x === 0 ? 0 : x);
              }
            : v === "has"
            ? function (x) {
                return i && !Eu(x) ? !1 : m(this, x === 0 ? 0 : x);
              }
            : function (x, S) {
                return m(this, x === 0 ? 0 : x, S), this;
              }
        );
      },
      d = Ov(
        e,
        !jO(o) ||
          !(
            i ||
            (a.forEach &&
              !Iu(function () {
                new o().entries().next();
              }))
          )
      );
    if (d) (l = n.getConstructor(t, e, r, s)), CO.enable();
    else if (Ov(e, !0)) {
      var f = new l(),
        g = f[s](i ? {} : -0, 1) !== f,
        y = Iu(function () {
          f.has(1);
        }),
        w = _O(function (v) {
          new o(v);
        }),
        I =
          !i &&
          Iu(function () {
            for (var v = new o(), m = 5; m--; ) v[s](m, m);
            return !v.has(-0);
          });
      w ||
        ((l = t(function (v, m) {
          PO(v, a);
          var h = MO(new o(), v, l);
          return $O(m) || bO(m, h[s], { that: h, AS_ENTRIES: r }), h;
        })),
        (l.prototype = a),
        (a.constructor = l)),
        (y || I) && (u("delete"), u("has"), r && u("get")),
        (I || g) && u(s),
        i && a.clear && delete a.clear;
    }
    return (
      (c[e] = l),
      SO({ global: !0, constructor: !0, forced: l !== o }, c),
      OO(l, e),
      i || n.setStrong(l, e, r),
      l
    );
  },
  Mv = Dw,
  NO = $t,
  ox = function (e, t, n) {
    return (
      n.get && Mv(n.get, t, { getter: !0 }),
      n.set && Mv(n.set, t, { setter: !0 }),
      NO.f(e, t, n)
    );
  },
  kO = fi,
  Hf = function (e, t, n) {
    for (var r in t) kO(e, r, t[r], n);
    return e;
  },
  AO = ui,
  LO = ox,
  DO = vt,
  zO = et,
  Nv = DO("species"),
  RO = function (e) {
    var t = AO(e);
    zO &&
      t &&
      !t[Nv] &&
      LO(t, Nv, {
        configurable: !0,
        get: function () {
          return this;
        },
      });
  },
  kv = Cf,
  BO = ox,
  Av = Hf,
  FO = xl,
  WO = Ff,
  HO = ai,
  VO = Il,
  GO = Nf,
  To = kf,
  YO = RO,
  Mi = et,
  Lv = wl.fastKey,
  ax = di,
  Dv = ax.set,
  Tu = ax.getterFor,
  lx = {
    getConstructor: function (e, t, n, r) {
      var i = e(function (c, u) {
          WO(c, s),
            Dv(c, {
              type: t,
              index: kv(null),
              first: null,
              last: null,
              size: 0,
            }),
            Mi || (c.size = 0),
            HO(u) || VO(u, c[r], { that: c, AS_ENTRIES: n });
        }),
        s = i.prototype,
        o = Tu(t),
        a = function (c, u, d) {
          var f = o(c),
            g = l(c, u),
            y,
            w;
          return (
            g
              ? (g.value = d)
              : ((f.last = g =
                  {
                    index: (w = Lv(u, !0)),
                    key: u,
                    value: d,
                    previous: (y = f.last),
                    next: null,
                    removed: !1,
                  }),
                f.first || (f.first = g),
                y && (y.next = g),
                Mi ? f.size++ : c.size++,
                w !== "F" && (f.index[w] = g)),
            c
          );
        },
        l = function (c, u) {
          var d = o(c),
            f = Lv(u),
            g;
          if (f !== "F") return d.index[f];
          for (g = d.first; g; g = g.next) if (g.key === u) return g;
        };
      return (
        Av(s, {
          clear: function () {
            for (var u = this, d = o(u), f = d.first; f; )
              (f.removed = !0),
                f.previous && (f.previous = f.previous.next = null),
                (f = f.next);
            (d.first = d.last = null),
              (d.index = kv(null)),
              Mi ? (d.size = 0) : (u.size = 0);
          },
          delete: function (c) {
            var u = this,
              d = o(u),
              f = l(u, c);
            if (f) {
              var g = f.next,
                y = f.previous;
              delete d.index[f.index],
                (f.removed = !0),
                y && (y.next = g),
                g && (g.previous = y),
                d.first === f && (d.first = g),
                d.last === f && (d.last = y),
                Mi ? d.size-- : u.size--;
            }
            return !!f;
          },
          forEach: function (u) {
            for (
              var d = o(this),
                f = FO(u, arguments.length > 1 ? arguments[1] : void 0),
                g;
              (g = g ? g.next : d.first);

            )
              for (f(g.value, g.key, this); g && g.removed; ) g = g.previous;
          },
          has: function (u) {
            return !!l(this, u);
          },
        }),
        Av(
          s,
          n
            ? {
                get: function (u) {
                  var d = l(this, u);
                  return d && d.value;
                },
                set: function (u, d) {
                  return a(this, u === 0 ? 0 : u, d);
                },
              }
            : {
                add: function (u) {
                  return a(this, (u = u === 0 ? 0 : u), u);
                },
              }
        ),
        Mi &&
          BO(s, "size", {
            configurable: !0,
            get: function () {
              return o(this).size;
            },
          }),
        i
      );
    },
    setStrong: function (e, t, n) {
      var r = t + " Iterator",
        i = Tu(t),
        s = Tu(r);
      GO(
        e,
        t,
        function (o, a) {
          Dv(this, { type: r, target: o, state: i(o), kind: a, last: null });
        },
        function () {
          for (var o = s(this), a = o.kind, l = o.last; l && l.removed; )
            l = l.previous;
          return !o.target || !(o.last = l = l ? l.next : o.state.first)
            ? ((o.target = null), To(void 0, !0))
            : To(
                a === "keys"
                  ? l.key
                  : a === "values"
                  ? l.value
                  : [l.key, l.value],
                !1
              );
        },
        n ? "entries" : "values",
        !n,
        !0
      ),
        YO(t);
    },
  },
  XO = Wf,
  UO = lx;
XO(
  "Map",
  function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  },
  UO
);
var Co = ie,
  Ni = Map.prototype,
  ZO = {
    Map,
    set: Co(Ni.set),
    get: Co(Ni.get),
    has: Co(Ni.has),
    remove: Co(Ni.delete),
    proto: Ni,
  },
  KO = tt,
  QO = ie,
  qO = ci,
  JO = As,
  eM = Il,
  Tl = ZO,
  tM = ge,
  ux = Tl.Map,
  nM = Tl.has,
  rM = Tl.get,
  iM = Tl.set,
  sM = QO([].push),
  oM = tM(function () {
    return (
      ux
        .groupBy("ab", function (e) {
          return e;
        })
        .get("a").length !== 1
    );
  });
KO(
  { target: "Map", stat: !0, forced: oM },
  {
    groupBy: function (t, n) {
      JO(t), qO(n);
      var r = new ux(),
        i = 0;
      return (
        eM(t, function (s) {
          var o = n(s, i++);
          nM(r, o) ? sM(rM(r, o), s) : iM(r, o, [s]);
        }),
        r
      );
    },
  }
);
var aM = Rf,
  lM = Sl,
  uM = aM
    ? {}.toString
    : function () {
        return "[object " + lM(this) + "]";
      },
  cM = Rf,
  dM = fi,
  fM = uM;
cM || dM(Object.prototype, "toString", fM, { unsafe: !0 });
var pM = Sl,
  mM = String,
  cx = function (e) {
    if (pM(e) === "Symbol")
      throw new TypeError("Cannot convert a Symbol value to a string");
    return mM(e);
  },
  Vf = ie,
  vM = ml,
  hM = cx,
  gM = As,
  yM = Vf("".charAt),
  zv = Vf("".charCodeAt),
  wM = Vf("".slice),
  Rv = function (e) {
    return function (t, n) {
      var r = hM(gM(t)),
        i = vM(n),
        s = r.length,
        o,
        a;
      return i < 0 || i >= s
        ? e
          ? ""
          : void 0
        : ((o = zv(r, i)),
          o < 55296 ||
          o > 56319 ||
          i + 1 === s ||
          (a = zv(r, i + 1)) < 56320 ||
          a > 57343
            ? e
              ? yM(r, i)
              : o
            : e
            ? wM(r, i, i + 2)
            : ((o - 55296) << 10) + (a - 56320) + 65536);
    };
  },
  xM = { codeAt: Rv(!1), charAt: Rv(!0) },
  SM = xM.charAt,
  EM = cx,
  dx = di,
  IM = Nf,
  Bv = kf,
  fx = "String Iterator",
  TM = dx.set,
  CM = dx.getterFor(fx);
IM(
  String,
  "String",
  function (e) {
    TM(this, { type: fx, string: EM(e), index: 0 });
  },
  function () {
    var t = CM(this),
      n = t.string,
      r = t.index,
      i;
    return r >= n.length
      ? Bv(void 0, !0)
      : ((i = SM(n, r)), (t.index += i.length), Bv(i, !1));
  }
);
var bM = Ve,
  Rs = bM,
  PM = Rs;
PM.Map;
var jM = Wf,
  $M = lx;
jM(
  "Set",
  function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  },
  $M
);
var Cu = ie,
  bo = Set.prototype,
  Ht = {
    Set,
    add: Cu(bo.add),
    has: Cu(bo.has),
    remove: Cu(bo.delete),
    proto: bo,
  },
  _M = Ht.has,
  mr = function (e) {
    return _M(e), e;
  },
  OM = _t,
  vr = function (e, t, n) {
    for (var r = n ? e : e.iterator, i = e.next, s, o; !(s = OM(i, r)).done; )
      if (((o = t(s.value)), o !== void 0)) return o;
  },
  px = ie,
  MM = vr,
  mx = Ht,
  NM = mx.Set,
  vx = mx.proto,
  kM = px(vx.forEach),
  hx = px(vx.keys),
  AM = hx(new NM()).next,
  Bs = function (e, t, n) {
    return n ? MM({ iterator: hx(e), next: AM }, t) : kM(e, t);
  },
  gx = Ht,
  LM = Bs,
  DM = gx.Set,
  zM = gx.add,
  Gf = function (e) {
    var t = new DM();
    return (
      LM(e, function (n) {
        zM(t, n);
      }),
      t
    );
  },
  RM = Ww,
  BM = Ht,
  Fs =
    RM(BM.proto, "size", "get") ||
    function (e) {
      return e.size;
    },
  FM = function (e) {
    return { iterator: e, next: e.next, done: !1 };
  },
  Fv = ci,
  yx = Wt,
  Wv = _t,
  WM = ml,
  HM = FM,
  Hv = "Invalid size",
  VM = RangeError,
  GM = TypeError,
  YM = Math.max,
  wx = function (e, t) {
    (this.set = e),
      (this.size = YM(t, 0)),
      (this.has = Fv(e.has)),
      (this.keys = Fv(e.keys));
  };
wx.prototype = {
  getIterator: function () {
    return HM(yx(Wv(this.keys, this.set)));
  },
  includes: function (e) {
    return Wv(this.has, this.set, e);
  },
};
var hr = function (e) {
    yx(e);
    var t = +e.size;
    if (t !== t) throw new GM(Hv);
    var n = WM(t);
    if (n < 0) throw new VM(Hv);
    return new wx(e, n);
  },
  XM = mr,
  xx = Ht,
  UM = Gf,
  ZM = Fs,
  KM = hr,
  QM = Bs,
  qM = vr,
  JM = xx.has,
  Vv = xx.remove,
  eN = function (t) {
    var n = XM(this),
      r = KM(t),
      i = UM(n);
    return (
      ZM(n) <= r.size
        ? QM(n, function (s) {
            r.includes(s) && Vv(i, s);
          })
        : qM(r.getIterator(), function (s) {
            JM(n, s) && Vv(i, s);
          }),
      i
    );
  },
  tN = ui,
  Gv = function (e) {
    return {
      size: e,
      has: function () {
        return !1;
      },
      keys: function () {
        return {
          next: function () {
            return { done: !0 };
          },
        };
      },
    };
  },
  gr = function (e) {
    var t = tN("Set");
    try {
      new t()[e](Gv(0));
      try {
        return new t()[e](Gv(-1)), !1;
      } catch {
        return !0;
      }
    } catch {
      return !1;
    }
  },
  nN = tt,
  rN = eN,
  iN = gr;
nN(
  { target: "Set", proto: !0, real: !0, forced: !iN("difference") },
  { difference: rN }
);
var sN = mr,
  Yf = Ht,
  oN = Fs,
  aN = hr,
  lN = Bs,
  uN = vr,
  cN = Yf.Set,
  Yv = Yf.add,
  dN = Yf.has,
  fN = function (t) {
    var n = sN(this),
      r = aN(t),
      i = new cN();
    return (
      oN(n) > r.size
        ? uN(r.getIterator(), function (s) {
            dN(n, s) && Yv(i, s);
          })
        : lN(n, function (s) {
            r.includes(s) && Yv(i, s);
          }),
      i
    );
  },
  pN = tt,
  mN = ge,
  vN = fN,
  hN = gr,
  gN =
    !hN("intersection") ||
    mN(function () {
      return (
        String(Array.from(new Set([1, 2, 3]).intersection(new Set([3, 2])))) !==
        "3,2"
      );
    });
pN({ target: "Set", proto: !0, real: !0, forced: gN }, { intersection: vN });
var yN = mr,
  wN = Ht.has,
  xN = Fs,
  SN = hr,
  EN = Bs,
  IN = vr,
  TN = El,
  CN = function (t) {
    var n = yN(this),
      r = SN(t);
    if (xN(n) <= r.size)
      return (
        EN(
          n,
          function (s) {
            if (r.includes(s)) return !1;
          },
          !0
        ) !== !1
      );
    var i = r.getIterator();
    return (
      IN(i, function (s) {
        if (wN(n, s)) return TN(i, "normal", !1);
      }) !== !1
    );
  },
  bN = tt,
  PN = CN,
  jN = gr;
bN(
  { target: "Set", proto: !0, real: !0, forced: !jN("isDisjointFrom") },
  { isDisjointFrom: PN }
);
var $N = mr,
  _N = Fs,
  ON = Bs,
  MN = hr,
  NN = function (t) {
    var n = $N(this),
      r = MN(t);
    return _N(n) > r.size
      ? !1
      : ON(
          n,
          function (i) {
            if (!r.includes(i)) return !1;
          },
          !0
        ) !== !1;
  },
  kN = tt,
  AN = NN,
  LN = gr;
kN(
  { target: "Set", proto: !0, real: !0, forced: !LN("isSubsetOf") },
  { isSubsetOf: AN }
);
var DN = mr,
  zN = Ht.has,
  RN = Fs,
  BN = hr,
  FN = vr,
  WN = El,
  HN = function (t) {
    var n = DN(this),
      r = BN(t);
    if (RN(n) < r.size) return !1;
    var i = r.getIterator();
    return (
      FN(i, function (s) {
        if (!zN(n, s)) return WN(i, "normal", !1);
      }) !== !1
    );
  },
  VN = tt,
  GN = HN,
  YN = gr;
VN(
  { target: "Set", proto: !0, real: !0, forced: !YN("isSupersetOf") },
  { isSupersetOf: GN }
);
var XN = mr,
  Xf = Ht,
  UN = Gf,
  ZN = hr,
  KN = vr,
  QN = Xf.add,
  qN = Xf.has,
  JN = Xf.remove,
  ek = function (t) {
    var n = XN(this),
      r = ZN(t).getIterator(),
      i = UN(n);
    return (
      KN(r, function (s) {
        qN(n, s) ? JN(i, s) : QN(i, s);
      }),
      i
    );
  },
  tk = tt,
  nk = ek,
  rk = gr;
tk(
  { target: "Set", proto: !0, real: !0, forced: !rk("symmetricDifference") },
  { symmetricDifference: nk }
);
var ik = mr,
  sk = Ht.add,
  ok = Gf,
  ak = hr,
  lk = vr,
  uk = function (t) {
    var n = ik(this),
      r = ak(t).getIterator(),
      i = ok(n);
    return (
      lk(r, function (s) {
        sk(i, s);
      }),
      i
    );
  },
  ck = tt,
  dk = uk,
  fk = gr;
ck({ target: "Set", proto: !0, real: !0, forced: !fk("union") }, { union: dk });
var pk = Rs;
pk.Set;
var mk = oi,
  vk =
    Array.isArray ||
    function (t) {
      return mk(t) === "Array";
    },
  hk = ie,
  gk = ge,
  Sx = Ce,
  yk = Sl,
  wk = ui,
  xk = Aw,
  Ex = function () {},
  Ix = wk("Reflect", "construct"),
  Uf = /^\s*(?:class|function)\b/,
  Sk = hk(Uf.exec),
  Ek = !Uf.test(Ex),
  ki = function (t) {
    if (!Sx(t)) return !1;
    try {
      return Ix(Ex, [], t), !0;
    } catch {
      return !1;
    }
  },
  Tx = function (t) {
    if (!Sx(t)) return !1;
    switch (yk(t)) {
      case "AsyncFunction":
      case "GeneratorFunction":
      case "AsyncGeneratorFunction":
        return !1;
    }
    try {
      return Ek || !!Sk(Uf, xk(t));
    } catch {
      return !0;
    }
  };
Tx.sham = !0;
var Cx =
    !Ix ||
    gk(function () {
      var e;
      return (
        ki(ki.call) ||
        !ki(Object) ||
        !ki(function () {
          e = !0;
        }) ||
        e
      );
    })
      ? Tx
      : ki,
  Xv = vk,
  Ik = Cx,
  Tk = ke,
  Ck = vt,
  bk = Ck("species"),
  Uv = Array,
  Pk = function (e) {
    var t;
    return (
      Xv(e) &&
        ((t = e.constructor),
        Ik(t) && (t === Uv || Xv(t.prototype))
          ? (t = void 0)
          : Tk(t) && ((t = t[bk]), t === null && (t = void 0))),
      t === void 0 ? Uv : t
    );
  },
  jk = Pk,
  $k = function (e, t) {
    return new (jk(e))(t === 0 ? 0 : t);
  },
  _k = xl,
  Ok = ie,
  Mk = hf,
  Nk = Ls,
  kk = vl,
  Ak = $k,
  Zv = Ok([].push),
  gn = function (e) {
    var t = e === 1,
      n = e === 2,
      r = e === 3,
      i = e === 4,
      s = e === 6,
      o = e === 7,
      a = e === 5 || s;
    return function (l, c, u, d) {
      for (
        var f = Nk(l),
          g = Mk(f),
          y = kk(g),
          w = _k(c, u),
          I = 0,
          v = d || Ak,
          m = t ? v(l, y) : n || o ? v(l, 0) : void 0,
          h,
          x;
        y > I;
        I++
      )
        if ((a || I in g) && ((h = g[I]), (x = w(h, I, f)), e))
          if (t) m[I] = x;
          else if (x)
            switch (e) {
              case 3:
                return !0;
              case 5:
                return h;
              case 6:
                return I;
              case 2:
                Zv(m, h);
            }
          else
            switch (e) {
              case 4:
                return !1;
              case 7:
                Zv(m, h);
            }
      return s ? -1 : r || i ? i : m;
    };
  },
  Lk = {
    forEach: gn(0),
    map: gn(1),
    filter: gn(2),
    some: gn(3),
    every: gn(4),
    find: gn(5),
    findIndex: gn(6),
    filterReject: gn(7),
  },
  Dk = ie,
  Kv = Hf,
  Po = wl.getWeakData,
  zk = Ff,
  Rk = Wt,
  Bk = ai,
  bu = ke,
  Fk = Il,
  bx = Lk,
  Qv = jt,
  Px = di,
  Wk = Px.set,
  Hk = Px.getterFor,
  Vk = bx.find,
  Gk = bx.findIndex,
  Yk = Dk([].splice),
  Xk = 0,
  jo = function (e) {
    return e.frozen || (e.frozen = new jx());
  },
  jx = function () {
    this.entries = [];
  },
  Pu = function (e, t) {
    return Vk(e.entries, function (n) {
      return n[0] === t;
    });
  };
jx.prototype = {
  get: function (e) {
    var t = Pu(this, e);
    if (t) return t[1];
  },
  has: function (e) {
    return !!Pu(this, e);
  },
  set: function (e, t) {
    var n = Pu(this, e);
    n ? (n[1] = t) : this.entries.push([e, t]);
  },
  delete: function (e) {
    var t = Gk(this.entries, function (n) {
      return n[0] === e;
    });
    return ~t && Yk(this.entries, t, 1), !!~t;
  },
};
var Uk = {
    getConstructor: function (e, t, n, r) {
      var i = e(function (l, c) {
          zk(l, s),
            Wk(l, { type: t, id: Xk++, frozen: null }),
            Bk(c) || Fk(c, l[r], { that: l, AS_ENTRIES: n });
        }),
        s = i.prototype,
        o = Hk(t),
        a = function (l, c, u) {
          var d = o(l),
            f = Po(Rk(c), !0);
          return f === !0 ? jo(d).set(c, u) : (f[d.id] = u), l;
        };
      return (
        Kv(s, {
          delete: function (l) {
            var c = o(this);
            if (!bu(l)) return !1;
            var u = Po(l);
            return u === !0
              ? jo(c).delete(l)
              : u && Qv(u, c.id) && delete u[c.id];
          },
          has: function (c) {
            var u = o(this);
            if (!bu(c)) return !1;
            var d = Po(c);
            return d === !0 ? jo(u).has(c) : d && Qv(d, u.id);
          },
        }),
        Kv(
          s,
          n
            ? {
                get: function (c) {
                  var u = o(this);
                  if (bu(c)) {
                    var d = Po(c);
                    if (d === !0) return jo(u).get(c);
                    if (d) return d[u.id];
                  }
                },
                set: function (c, u) {
                  return a(this, c, u);
                },
              }
            : {
                add: function (c) {
                  return a(this, c, !0);
                },
              }
        ),
        i
      );
    },
  },
  Zk = qw,
  qv = Ve,
  ra = ie,
  Jv = Hf,
  Kk = wl,
  Qk = Wf,
  $x = Uk,
  $o = ke,
  _o = di.enforce,
  qk = ge,
  Jk = jw,
  Ws = Object,
  eA = Array.isArray,
  Oo = Ws.isExtensible,
  _x = Ws.isFrozen,
  tA = Ws.isSealed,
  Ox = Ws.freeze,
  nA = Ws.seal,
  rA = !qv.ActiveXObject && "ActiveXObject" in qv,
  Ai,
  Mx = function (e) {
    return function () {
      return e(this, arguments.length ? arguments[0] : void 0);
    };
  },
  Nx = Qk("WeakMap", Mx, $x),
  Er = Nx.prototype,
  ia = ra(Er.set),
  iA = function () {
    return (
      Zk &&
      qk(function () {
        var e = Ox([]);
        return ia(new Nx(), e, 1), !_x(e);
      })
    );
  };
if (Jk)
  if (rA) {
    (Ai = $x.getConstructor(Mx, "WeakMap", !0)), Kk.enable();
    var eh = ra(Er.delete),
      Mo = ra(Er.has),
      th = ra(Er.get);
    Jv(Er, {
      delete: function (e) {
        if ($o(e) && !Oo(e)) {
          var t = _o(this);
          return (
            t.frozen || (t.frozen = new Ai()), eh(this, e) || t.frozen.delete(e)
          );
        }
        return eh(this, e);
      },
      has: function (t) {
        if ($o(t) && !Oo(t)) {
          var n = _o(this);
          return (
            n.frozen || (n.frozen = new Ai()), Mo(this, t) || n.frozen.has(t)
          );
        }
        return Mo(this, t);
      },
      get: function (t) {
        if ($o(t) && !Oo(t)) {
          var n = _o(this);
          return (
            n.frozen || (n.frozen = new Ai()),
            Mo(this, t) ? th(this, t) : n.frozen.get(t)
          );
        }
        return th(this, t);
      },
      set: function (t, n) {
        if ($o(t) && !Oo(t)) {
          var r = _o(this);
          r.frozen || (r.frozen = new Ai()),
            Mo(this, t) ? ia(this, t, n) : r.frozen.set(t, n);
        } else ia(this, t, n);
        return this;
      },
    });
  } else
    iA() &&
      Jv(Er, {
        set: function (t, n) {
          var r;
          return (
            eA(t) && (_x(t) ? (r = Ox) : tA(t) && (r = nA)),
            ia(this, t, n),
            r && r(t),
            this
          );
        },
      });
var sA = Rs;
sA.WeakMap;
var oA = Wt,
  aA = El,
  lA = function (e, t, n, r) {
    try {
      return r ? t(oA(n)[0], n[1]) : t(n);
    } catch (i) {
      aA(e, "throw", i);
    }
  },
  uA = et,
  cA = $t,
  dA = gl,
  fA = function (e, t, n) {
    uA ? cA.f(e, t, dA(0, n)) : (e[t] = n);
  },
  pA = xl,
  mA = _t,
  vA = Ls,
  hA = lA,
  gA = ex,
  yA = Cx,
  wA = vl,
  nh = fA,
  xA = nx,
  SA = Bf,
  rh = Array,
  EA = function (t) {
    var n = vA(t),
      r = yA(this),
      i = arguments.length,
      s = i > 1 ? arguments[1] : void 0,
      o = s !== void 0;
    o && (s = pA(s, i > 2 ? arguments[2] : void 0));
    var a = SA(n),
      l = 0,
      c,
      u,
      d,
      f,
      g,
      y;
    if (a && !(this === rh && gA(a)))
      for (
        u = r ? new this() : [], f = xA(n, a), g = f.next;
        !(d = mA(g, f)).done;
        l++
      )
        (y = o ? hA(f, s, [d.value, l], !0) : d.value), nh(u, l, y);
    else
      for (c = wA(n), u = r ? new this(c) : rh(c); c > l; l++)
        (y = o ? s(n[l], l) : n[l]), nh(u, l, y);
    return (u.length = l), u;
  },
  IA = tt,
  TA = EA,
  CA = sx,
  bA = !CA(function (e) {
    Array.from(e);
  });
IA({ target: "Array", stat: !0, forced: bA }, { from: TA });
var PA = Rs;
PA.Array.from;
var ih = et,
  jA = ie,
  $A = _t,
  _A = ge,
  ju = Cw,
  OA = Of,
  MA = jf,
  NA = Ls,
  kA = hf,
  Sr = Object.assign,
  sh = Object.defineProperty,
  AA = jA([].concat),
  LA =
    !Sr ||
    _A(function () {
      if (
        ih &&
        Sr(
          { b: 1 },
          Sr(
            sh({}, "a", {
              enumerable: !0,
              get: function () {
                sh(this, "b", { value: 3, enumerable: !1 });
              },
            }),
            { b: 2 }
          )
        ).b !== 1
      )
        return !0;
      var e = {},
        t = {},
        n = Symbol("assign detection"),
        r = "abcdefghijklmnopqrst";
      return (
        (e[n] = 7),
        r.split("").forEach(function (i) {
          t[i] = i;
        }),
        Sr({}, e)[n] !== 7 || ju(Sr({}, t)).join("") !== r
      );
    })
      ? function (t, n) {
          for (
            var r = NA(t), i = arguments.length, s = 1, o = OA.f, a = MA.f;
            i > s;

          )
            for (
              var l = kA(arguments[s++]),
                c = o ? AA(ju(l), o(l)) : ju(l),
                u = c.length,
                d = 0,
                f;
              u > d;

            )
              (f = c[d++]), (!ih || $A(a, l, f)) && (r[f] = l[f]);
          return r;
        }
      : Sr,
  DA = tt,
  oh = LA;
DA(
  { target: "Object", stat: !0, arity: 2, forced: Object.assign !== oh },
  { assign: oh }
);
var zA = Rs;
zA.Object.assign;
var No,
  Aa = new WeakMap();
function kx() {
  if (No !== void 0) return No;
  var e = !1;
  try {
    var t = function () {},
      n = Object.defineProperty({}, "passive", {
        enumerable: !0,
        get: function () {
          return (e = !0), !0;
        },
      });
    window.addEventListener("testPassive", t, n),
      window.removeEventListener("testPassive", t, n);
  } catch {}
  return (No = e ? { passive: !1 } : !1), No;
}
function pi(e) {
  var t = Aa.get(e) || [];
  return (
    Aa.set(e, t),
    function (r, i, s) {
      function o(a) {
        a.defaultPrevented || s(a);
      }
      i.split(/\s+/g).forEach(function (a) {
        t.push({ elem: r, eventName: a, handler: o }),
          r.addEventListener(a, o, kx());
      });
    }
  );
}
function RA(e) {
  var t = Aa.get(e);
  t &&
    (t.forEach(function (n) {
      var r = n.elem,
        i = n.eventName,
        s = n.handler;
      r.removeEventListener(i, s, kx());
    }),
    Aa.delete(e));
}
function BA(e) {
  return e.touches ? e.touches[e.touches.length - 1] : e;
}
function Wr(e) {
  var t = BA(e);
  return { x: t.clientX, y: t.clientY };
}
function ko(e, t) {
  return (
    t === void 0 && (t = []),
    t.some(function (n) {
      return e === n;
    })
  );
}
var Ax = ["webkit", "moz", "ms", "o"],
  FA = new RegExp("^-(?!(?:" + Ax.join("|") + ")-)");
function WA(e) {
  var t = {};
  return (
    Object.keys(e).forEach(function (n) {
      if (!FA.test(n)) {
        t[n] = e[n];
        return;
      }
      var r = e[n];
      (n = n.replace(/^-/, "")),
        (t[n] = r),
        Ax.forEach(function (i) {
          t["-" + i + "-" + n] = r;
        });
    }),
    t
  );
}
function Ze(e, t) {
  (t = WA(t)),
    Object.keys(t).forEach(function (n) {
      var r = n.replace(/^-/, "").replace(/-([a-z])/g, function (i, s) {
        return s.toUpperCase();
      });
      e.style[r] = t[n];
    });
}
var HA = (function () {
    function e(t) {
      (this.velocityMultiplier = window.devicePixelRatio),
        (this.updateTime = Date.now()),
        (this.delta = { x: 0, y: 0 }),
        (this.velocity = { x: 0, y: 0 }),
        (this.lastPosition = { x: 0, y: 0 }),
        (this.lastPosition = Wr(t));
    }
    return (
      (e.prototype.update = function (t) {
        var n = this,
          r = n.velocity,
          i = n.updateTime,
          s = n.lastPosition,
          o = Date.now(),
          a = Wr(t),
          l = { x: -(a.x - s.x), y: -(a.y - s.y) },
          c = o - i || 16.7,
          u = (l.x / c) * 16.7,
          d = (l.y / c) * 16.7;
        (r.x = u * this.velocityMultiplier),
          (r.y = d * this.velocityMultiplier),
          (this.delta = l),
          (this.updateTime = o),
          (this.lastPosition = a);
      }),
      e
    );
  })(),
  VA = (function () {
    function e() {
      this._touchList = {};
    }
    return (
      Object.defineProperty(e.prototype, "_primitiveValue", {
        get: function () {
          return { x: 0, y: 0 };
        },
        enumerable: !0,
        configurable: !0,
      }),
      (e.prototype.isActive = function () {
        return this._activeTouchID !== void 0;
      }),
      (e.prototype.getDelta = function () {
        var t = this._getActiveTracker();
        return t ? bt({}, t.delta) : this._primitiveValue;
      }),
      (e.prototype.getVelocity = function () {
        var t = this._getActiveTracker();
        return t ? bt({}, t.velocity) : this._primitiveValue;
      }),
      (e.prototype.getEasingDistance = function (t) {
        var n = 1 - t,
          r = { x: 0, y: 0 },
          i = this.getVelocity();
        return (
          Object.keys(i).forEach(function (s) {
            for (var o = Math.abs(i[s]) <= 10 ? 0 : i[s]; o !== 0; )
              (r[s] += o), (o = (o * n) | 0);
          }),
          r
        );
      }),
      (e.prototype.track = function (t) {
        var n = this,
          r = t.targetTouches;
        return (
          Array.from(r).forEach(function (i) {
            n._add(i);
          }),
          this._touchList
        );
      }),
      (e.prototype.update = function (t) {
        var n = this,
          r = t.touches,
          i = t.changedTouches;
        return (
          Array.from(r).forEach(function (s) {
            n._renew(s);
          }),
          this._setActiveID(i),
          this._touchList
        );
      }),
      (e.prototype.release = function (t) {
        var n = this;
        delete this._activeTouchID,
          Array.from(t.changedTouches).forEach(function (r) {
            n._delete(r);
          });
      }),
      (e.prototype._add = function (t) {
        this._has(t) && this._delete(t);
        var n = new HA(t);
        this._touchList[t.identifier] = n;
      }),
      (e.prototype._renew = function (t) {
        if (this._has(t)) {
          var n = this._touchList[t.identifier];
          n.update(t);
        }
      }),
      (e.prototype._delete = function (t) {
        delete this._touchList[t.identifier];
      }),
      (e.prototype._has = function (t) {
        return this._touchList.hasOwnProperty(t.identifier);
      }),
      (e.prototype._setActiveID = function (t) {
        this._activeTouchID = t[t.length - 1].identifier;
      }),
      (e.prototype._getActiveTracker = function () {
        var t = this,
          n = t._touchList,
          r = t._activeTouchID;
        return n[r];
      }),
      e
    );
  })();
function me(e, t, n) {
  return Math.max(t, Math.min(n, e));
}
function Zf(e, t, n) {
  t === void 0 && (t = 0);
  var r,
    i = -1 / 0;
  return function () {
    for (var o = this, a = [], l = 0; l < arguments.length; l++)
      a[l] = arguments[l];
    if (n) {
      var c = Date.now(),
        u = c - i;
      (i = c), u >= t && e.apply(this, a);
    }
    clearTimeout(r),
      (r = setTimeout(function () {
        e.apply(o, a);
      }, t));
  };
}
function ah(e, t) {
  return (
    t === void 0 && (t = 1 / 0),
    function (n, r) {
      var i = "_" + r;
      Object.defineProperty(n, r, {
        get: function () {
          return this[i];
        },
        set: function (s) {
          Object.defineProperty(this, i, {
            value: me(s, e, t),
            enumerable: !1,
            writable: !0,
            configurable: !0,
          });
        },
        enumerable: !0,
        configurable: !0,
      });
    }
  );
}
function $u(e, t) {
  var n = "_" + t;
  Object.defineProperty(e, t, {
    get: function () {
      return this[n];
    },
    set: function (r) {
      Object.defineProperty(this, n, {
        value: !!r,
        enumerable: !1,
        writable: !0,
        configurable: !0,
      });
    },
    enumerable: !0,
    configurable: !0,
  });
}
function Lx() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  return function (n, r, i) {
    var s = i.value;
    return {
      get: function () {
        return (
          this.hasOwnProperty(r) ||
            Object.defineProperty(this, r, {
              value: Zf.apply(void 0, xC([s], e)),
            }),
          this[r]
        );
      },
    };
  };
}
var GA = (function () {
    function e(t) {
      var n = this;
      t === void 0 && (t = {}),
        (this.damping = 0.1),
        (this.thumbMinSize = 20),
        (this.renderByPixels = !0),
        (this.alwaysShowTracks = !1),
        (this.continuousScrolling = !0),
        (this.delegateTo = null),
        (this.plugins = {}),
        Object.keys(t).forEach(function (r) {
          n[r] = t[r];
        });
    }
    return (
      Object.defineProperty(e.prototype, "wheelEventTarget", {
        get: function () {
          return this.delegateTo;
        },
        set: function (t) {
          console.warn(
            "[smooth-scrollbar]: `options.wheelEventTarget` is deprecated and will be removed in the future, use `options.delegateTo` instead."
          ),
            (this.delegateTo = t);
        },
        enumerable: !0,
        configurable: !0,
      }),
      Kn([ah(0, 1)], e.prototype, "damping", void 0),
      Kn([ah(0, 1 / 0)], e.prototype, "thumbMinSize", void 0),
      Kn([$u], e.prototype, "renderByPixels", void 0),
      Kn([$u], e.prototype, "alwaysShowTracks", void 0),
      Kn([$u], e.prototype, "continuousScrolling", void 0),
      e
    );
  })(),
  ti;
(function (e) {
  (e.X = "x"), (e.Y = "y");
})(ti || (ti = {}));
var YA = (function () {
    function e(t, n) {
      n === void 0 && (n = 0),
        (this._direction = t),
        (this._minSize = n),
        (this.element = document.createElement("div")),
        (this.displaySize = 0),
        (this.realSize = 0),
        (this.offset = 0),
        (this.element.className = "scrollbar-thumb scrollbar-thumb-" + t);
    }
    return (
      (e.prototype.attachTo = function (t) {
        t.appendChild(this.element);
      }),
      (e.prototype.update = function (t, n, r) {
        (this.realSize = Math.min(n / r, 1) * n),
          (this.displaySize = Math.max(this.realSize, this._minSize)),
          (this.offset = (t / r) * (n + (this.realSize - this.displaySize))),
          Ze(this.element, this._getStyle());
      }),
      (e.prototype._getStyle = function () {
        switch (this._direction) {
          case ti.X:
            return {
              width: this.displaySize + "px",
              "-transform": "translate3d(" + this.offset + "px, 0, 0)",
            };
          case ti.Y:
            return {
              height: this.displaySize + "px",
              "-transform": "translate3d(0, " + this.offset + "px, 0)",
            };
          default:
            return null;
        }
      }),
      e
    );
  })(),
  lh = (function () {
    function e(t, n) {
      n === void 0 && (n = 0),
        (this.element = document.createElement("div")),
        (this._isShown = !1),
        (this.element.className = "scrollbar-track scrollbar-track-" + t),
        (this.thumb = new YA(t, n)),
        this.thumb.attachTo(this.element);
    }
    return (
      (e.prototype.attachTo = function (t) {
        t.appendChild(this.element);
      }),
      (e.prototype.show = function () {
        this._isShown ||
          ((this._isShown = !0), this.element.classList.add("show"));
      }),
      (e.prototype.hide = function () {
        this._isShown &&
          ((this._isShown = !1), this.element.classList.remove("show"));
      }),
      (e.prototype.update = function (t, n, r) {
        Ze(this.element, { display: r <= n ? "none" : "block" }),
          this.thumb.update(t, n, r);
      }),
      e
    );
  })(),
  XA = (function () {
    function e(t) {
      this._scrollbar = t;
      var n = t.options.thumbMinSize;
      (this.xAxis = new lh(ti.X, n)),
        (this.yAxis = new lh(ti.Y, n)),
        this.xAxis.attachTo(t.containerEl),
        this.yAxis.attachTo(t.containerEl),
        t.options.alwaysShowTracks && (this.xAxis.show(), this.yAxis.show());
    }
    return (
      (e.prototype.update = function () {
        var t = this._scrollbar,
          n = t.size,
          r = t.offset;
        this.xAxis.update(r.x, n.container.width, n.content.width),
          this.yAxis.update(r.y, n.container.height, n.content.height);
      }),
      (e.prototype.autoHideOnIdle = function () {
        this._scrollbar.options.alwaysShowTracks ||
          (this.xAxis.hide(), this.yAxis.hide());
      }),
      Kn([Lx(300)], e.prototype, "autoHideOnIdle", null),
      e
    );
  })();
function UA(e) {
  var t = e.containerEl,
    n = e.contentEl,
    r = getComputedStyle(t),
    i = ["paddingTop", "paddingBottom", "paddingLeft", "paddingRight"].map(
      function (a) {
        return r[a] ? parseFloat(r[a]) : 0;
      }
    ),
    s = i[0] + i[1],
    o = i[2] + i[3];
  return {
    container: { width: t.clientWidth, height: t.clientHeight },
    content: {
      width: n.offsetWidth - n.clientWidth + n.scrollWidth + o,
      height: n.offsetHeight - n.clientHeight + n.scrollHeight + s,
    },
  };
}
function ZA(e, t) {
  var n = e.bounding,
    r = t.getBoundingClientRect(),
    i = Math.max(n.top, r.top),
    s = Math.max(n.left, r.left),
    o = Math.min(n.right, r.right),
    a = Math.min(n.bottom, r.bottom);
  return i < a && s < o;
}
function KA(e) {
  var t = e.getSize(),
    n = {
      x: Math.max(t.content.width - t.container.width, 0),
      y: Math.max(t.content.height - t.container.height, 0),
    },
    r = e.containerEl.getBoundingClientRect(),
    i = {
      top: Math.max(r.top, 0),
      right: Math.min(r.right, window.innerWidth),
      bottom: Math.min(r.bottom, window.innerHeight),
      left: Math.max(r.left, 0),
    };
  (e.size = t),
    (e.limit = n),
    (e.bounding = i),
    e.track.update(),
    e.setPosition();
}
function QA(e, t, n) {
  var r = e.options,
    i = e.offset,
    s = e.limit,
    o = e.track,
    a = e.contentEl;
  return (
    r.renderByPixels && ((t = Math.round(t)), (n = Math.round(n))),
    (t = me(t, 0, s.x)),
    (n = me(n, 0, s.y)),
    t !== i.x && o.xAxis.show(),
    n !== i.y && o.yAxis.show(),
    r.alwaysShowTracks || o.autoHideOnIdle(),
    t === i.x && n === i.y
      ? null
      : ((i.x = t),
        (i.y = n),
        Ze(a, { "-transform": "translate3d(" + -t + "px, " + -n + "px, 0)" }),
        o.update(),
        { offset: bt({}, i), limit: bt({}, s) })
  );
}
var uh = new WeakMap();
function qA(e, t, n, r, i) {
  r === void 0 && (r = 0);
  var s = i === void 0 ? {} : i,
    o = s.easing,
    a = o === void 0 ? JA : o,
    l = s.callback,
    c = e.options,
    u = e.offset,
    d = e.limit;
  c.renderByPixels && ((t = Math.round(t)), (n = Math.round(n)));
  var f = u.x,
    g = u.y,
    y = me(t, 0, d.x) - f,
    w = me(n, 0, d.y) - g,
    I = Date.now();
  function v() {
    var m = Date.now() - I,
      h = r ? a(Math.min(m / r, 1)) : 1;
    if ((e.setPosition(f + y * h, g + w * h), m >= r))
      typeof l == "function" && l.call(e);
    else {
      var x = requestAnimationFrame(v);
      uh.set(e, x);
    }
  }
  cancelAnimationFrame(uh.get(e)), v();
}
function JA(e) {
  return Math.pow(e - 1, 3) + 1;
}
function eL(e, t, n) {
  var r = n === void 0 ? {} : n,
    i = r.alignToTop,
    s = i === void 0 ? !0 : i,
    o = r.onlyScrollIfNeeded,
    a = o === void 0 ? !1 : o,
    l = r.offsetTop,
    c = l === void 0 ? 0 : l,
    u = r.offsetLeft,
    d = u === void 0 ? 0 : u,
    f = r.offsetBottom,
    g = f === void 0 ? 0 : f,
    y = e.containerEl,
    w = e.bounding,
    I = e.offset,
    v = e.limit;
  if (!(!t || !y.contains(t))) {
    var m = t.getBoundingClientRect();
    if (!(a && e.isVisible(t))) {
      var h = s ? m.top - w.top - c : m.bottom - w.bottom + g;
      e.setMomentum(m.left - w.left - d, me(h, -I.y, v.y - I.y));
    }
  }
}
var Dx = (function () {
    function e(t, n) {
      var r = this.constructor;
      (this.scrollbar = t),
        (this.name = r.pluginName),
        (this.options = bt(bt({}, r.defaultOptions), n));
    }
    return (
      (e.prototype.onInit = function () {}),
      (e.prototype.onDestroy = function () {}),
      (e.prototype.onUpdate = function () {}),
      (e.prototype.onRender = function (t) {}),
      (e.prototype.transformDelta = function (t, n) {
        return bt({}, t);
      }),
      (e.pluginName = ""),
      (e.defaultOptions = {}),
      e
    );
  })(),
  La = { order: new Set(), constructors: {} };
function tL() {
  for (var e = [], t = 0; t < arguments.length; t++) e[t] = arguments[t];
  e.forEach(function (n) {
    var r = n.pluginName;
    if (!r) throw new TypeError("plugin name is required");
    La.order.add(r), (La.constructors[r] = n);
  });
}
function nL(e, t) {
  return Array.from(La.order)
    .filter(function (n) {
      return t[n] !== !1;
    })
    .map(function (n) {
      var r = La.constructors[n],
        i = new r(e, t[n]);
      return (t[n] = i.options), i;
    });
}
var rt;
(function (e) {
  (e[(e.TAB = 9)] = "TAB"),
    (e[(e.SPACE = 32)] = "SPACE"),
    (e[(e.PAGE_UP = 33)] = "PAGE_UP"),
    (e[(e.PAGE_DOWN = 34)] = "PAGE_DOWN"),
    (e[(e.END = 35)] = "END"),
    (e[(e.HOME = 36)] = "HOME"),
    (e[(e.LEFT = 37)] = "LEFT"),
    (e[(e.UP = 38)] = "UP"),
    (e[(e.RIGHT = 39)] = "RIGHT"),
    (e[(e.DOWN = 40)] = "DOWN");
})(rt || (rt = {}));
function rL(e) {
  var t = pi(e),
    n = e.containerEl;
  t(n, "keydown", function (r) {
    var i = document.activeElement;
    if (!(i !== n && !n.contains(i)) && !oL(i)) {
      var s = iL(e, r.keyCode || r.which);
      if (s) {
        var o = s[0],
          a = s[1];
        e.addTransformableMomentum(o, a, r, function (l) {
          l
            ? r.preventDefault()
            : (e.containerEl.blur(), e.parent && e.parent.containerEl.focus());
        });
      }
    }
  });
}
function iL(e, t) {
  var n = e.size,
    r = e.limit,
    i = e.offset;
  switch (t) {
    case rt.TAB:
      return sL(e);
    case rt.SPACE:
      return [0, 200];
    case rt.PAGE_UP:
      return [0, -n.container.height + 40];
    case rt.PAGE_DOWN:
      return [0, n.container.height - 40];
    case rt.END:
      return [0, r.y - i.y];
    case rt.HOME:
      return [0, -i.y];
    case rt.LEFT:
      return [-40, 0];
    case rt.UP:
      return [0, -40];
    case rt.RIGHT:
      return [40, 0];
    case rt.DOWN:
      return [0, 40];
    default:
      return null;
  }
}
function sL(e) {
  requestAnimationFrame(function () {
    e.scrollIntoView(document.activeElement, {
      offsetTop: e.size.container.height / 2,
      offsetLeft: e.size.container.width / 2,
      onlyScrollIfNeeded: !0,
    });
  });
}
function oL(e) {
  return e.tagName === "INPUT" ||
    e.tagName === "SELECT" ||
    e.tagName === "TEXTAREA" ||
    e.isContentEditable
    ? !e.disabled
    : !1;
}
var kt;
(function (e) {
  (e[(e.X = 0)] = "X"), (e[(e.Y = 1)] = "Y");
})(kt || (kt = {}));
function aL(e) {
  var t = pi(e),
    n = e.containerEl,
    r = e.track,
    i = r.xAxis,
    s = r.yAxis;
  function o(g, y) {
    var w = e.size,
      I = e.limit,
      v = e.offset;
    if (g === kt.X) {
      var m = w.container.width + (i.thumb.realSize - i.thumb.displaySize);
      return me((y / m) * w.content.width, 0, I.x) - v.x;
    }
    if (g === kt.Y) {
      var h = w.container.height + (s.thumb.realSize - s.thumb.displaySize);
      return me((y / h) * w.content.height, 0, I.y) - v.y;
    }
    return 0;
  }
  function a(g) {
    if (ko(g, [i.element, i.thumb.element])) return kt.X;
    if (ko(g, [s.element, s.thumb.element])) return kt.Y;
  }
  var l, c, u, d, f;
  t(n, "click", function (g) {
    if (!(c || !ko(g.target, [i.element, s.element]))) {
      var y = g.target,
        w = a(y),
        I = y.getBoundingClientRect(),
        v = Wr(g);
      if (w === kt.X) {
        var m = v.x - I.left - i.thumb.displaySize / 2;
        e.setMomentum(o(w, m), 0);
      }
      if (w === kt.Y) {
        var m = v.y - I.top - s.thumb.displaySize / 2;
        e.setMomentum(0, o(w, m));
      }
    }
  }),
    t(n, "mousedown", function (g) {
      if (ko(g.target, [i.thumb.element, s.thumb.element])) {
        l = !0;
        var y = g.target,
          w = Wr(g),
          I = y.getBoundingClientRect();
        (d = a(y)),
          (u = { x: w.x - I.left, y: w.y - I.top }),
          (f = n.getBoundingClientRect()),
          Ze(e.containerEl, { "-user-select": "none" });
      }
    }),
    t(window, "mousemove", function (g) {
      if (l) {
        c = !0;
        var y = Wr(g);
        if (d === kt.X) {
          var w = y.x - u.x - f.left;
          e.setMomentum(o(d, w), 0);
        }
        if (d === kt.Y) {
          var w = y.y - u.y - f.top;
          e.setMomentum(0, o(d, w));
        }
      }
    }),
    t(window, "mouseup blur", function () {
      (l = c = !1), Ze(e.containerEl, { "-user-select": "" });
    });
}
function lL(e) {
  var t = pi(e);
  t(window, "resize", Zf(e.update.bind(e), 300));
}
function uL(e) {
  var t = pi(e),
    n = e.containerEl,
    r = e.contentEl,
    i = !1,
    s = !1,
    o;
  function a(l) {
    var c = l.x,
      u = l.y;
    if (!(!c && !u)) {
      var d = e.offset,
        f = e.limit;
      e.setMomentum(me(d.x + c, 0, f.x) - d.x, me(d.y + u, 0, f.y) - d.y),
        (o = requestAnimationFrame(function () {
          a({ x: c, y: u });
        }));
    }
  }
  t(window, "mousemove", function (l) {
    if (i) {
      cancelAnimationFrame(o);
      var c = cL(e, l);
      a(c);
    }
  }),
    t(r, "contextmenu", function () {
      (s = !0), cancelAnimationFrame(o), (i = !1);
    }),
    t(r, "mousedown", function () {
      s = !1;
    }),
    t(r, "selectstart", function () {
      s || (cancelAnimationFrame(o), (i = !0));
    }),
    t(window, "mouseup blur", function () {
      cancelAnimationFrame(o), (i = !1), (s = !1);
    }),
    t(n, "scroll", function (l) {
      l.preventDefault(), (n.scrollTop = n.scrollLeft = 0);
    });
}
function cL(e, t) {
  var n = e.bounding,
    r = n.top,
    i = n.right,
    s = n.bottom,
    o = n.left,
    a = Wr(t),
    l = a.x,
    c = a.y,
    u = { x: 0, y: 0 },
    d = 20;
  return (
    (l === 0 && c === 0) ||
      (l > i - d ? (u.x = l - i + d) : l < o + d && (u.x = l - o - d),
      c > s - d ? (u.y = c - s + d) : c < r + d && (u.y = c - r - d),
      (u.x *= 2),
      (u.y *= 2)),
    u
  );
}
var Ao;
function dL(e) {
  var t = e.options.delegateTo || e.containerEl,
    n = new VA(),
    r = pi(e),
    i,
    s = 0;
  r(t, "touchstart", function (o) {
    n.track(o),
      e.setMomentum(0, 0),
      s === 0 &&
        ((i = e.options.damping), (e.options.damping = Math.max(i, 0.5))),
      s++;
  }),
    r(t, "touchmove", function (o) {
      if (!(Ao && Ao !== e)) {
        n.update(o);
        var a = n.getDelta(),
          l = a.x,
          c = a.y;
        e.addTransformableMomentum(l, c, o, function (u) {
          u && o.cancelable && (o.preventDefault(), (Ao = e));
        });
      }
    }),
    r(t, "touchcancel touchend", function (o) {
      var a = n.getEasingDistance(i);
      e.addTransformableMomentum(a.x, a.y, o),
        s--,
        s === 0 && (e.options.damping = i),
        n.release(o),
        (Ao = null);
    });
}
function fL(e) {
  var t = pi(e),
    n = e.options.delegateTo || e.containerEl,
    r =
      "onwheel" in window ||
      document.implementation.hasFeature("Events.wheel", "3.0")
        ? "wheel"
        : "mousewheel";
  t(n, r, function (i) {
    var s = mL(i),
      o = s.x,
      a = s.y;
    e.addTransformableMomentum(o, a, i, function (l) {
      l && i.preventDefault();
    });
  });
}
var Li = { STANDARD: 1, OTHERS: -3 },
  ch = [1, 28, 500],
  pL = function (e) {
    return ch[e] || ch[0];
  };
function mL(e) {
  if ("deltaX" in e) {
    var t = pL(e.deltaMode);
    return { x: (e.deltaX / Li.STANDARD) * t, y: (e.deltaY / Li.STANDARD) * t };
  }
  return "wheelDeltaX" in e
    ? { x: e.wheelDeltaX / Li.OTHERS, y: e.wheelDeltaY / Li.OTHERS }
    : { x: 0, y: e.wheelDelta / Li.OTHERS };
}
const dh = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      keyboardHandler: rL,
      mouseHandler: aL,
      resizeHandler: lL,
      selectHandler: uL,
      touchHandler: dL,
      wheelHandler: fL,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
var At = new Map(),
  fh = (function () {
    function e(t, n) {
      var r = this;
      (this.offset = { x: 0, y: 0 }),
        (this.limit = { x: 1 / 0, y: 1 / 0 }),
        (this.bounding = { top: 0, right: 0, bottom: 0, left: 0 }),
        (this._plugins = []),
        (this._momentum = { x: 0, y: 0 }),
        (this._listeners = new Set()),
        (this.containerEl = t);
      var i = (this.contentEl = document.createElement("div"));
      (this.options = new GA(n)),
        t.setAttribute("data-scrollbar", "true"),
        t.setAttribute("tabindex", "-1"),
        Ze(t, { overflow: "hidden", outline: "none" }),
        window.navigator.msPointerEnabled && (t.style.msTouchAction = "none"),
        (i.className = "scroll-content"),
        Array.from(t.childNodes).forEach(function (l) {
          i.appendChild(l);
        }),
        t.appendChild(i),
        (this.track = new XA(this)),
        (this.size = this.getSize()),
        (this._plugins = nL(this, this.options.plugins));
      var s = t.scrollLeft,
        o = t.scrollTop;
      (t.scrollLeft = t.scrollTop = 0),
        this.setPosition(s, o, { withoutCallbacks: !0 });
      var a = window.ResizeObserver;
      typeof a == "function" &&
        ((this._observer = new a(function () {
          r.update();
        })),
        this._observer.observe(i)),
        At.set(t, this),
        requestAnimationFrame(function () {
          r._init();
        });
    }
    return (
      Object.defineProperty(e.prototype, "parent", {
        get: function () {
          for (var t = this.containerEl.parentElement; t; ) {
            var n = At.get(t);
            if (n) return n;
            t = t.parentElement;
          }
          return null;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "scrollTop", {
        get: function () {
          return this.offset.y;
        },
        set: function (t) {
          this.setPosition(this.scrollLeft, t);
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(e.prototype, "scrollLeft", {
        get: function () {
          return this.offset.x;
        },
        set: function (t) {
          this.setPosition(t, this.scrollTop);
        },
        enumerable: !0,
        configurable: !0,
      }),
      (e.prototype.getSize = function () {
        return UA(this);
      }),
      (e.prototype.update = function () {
        KA(this),
          this._plugins.forEach(function (t) {
            t.onUpdate();
          });
      }),
      (e.prototype.isVisible = function (t) {
        return ZA(this, t);
      }),
      (e.prototype.setPosition = function (t, n, r) {
        var i = this;
        t === void 0 && (t = this.offset.x),
          n === void 0 && (n = this.offset.y),
          r === void 0 && (r = {});
        var s = QA(this, t, n);
        !s ||
          r.withoutCallbacks ||
          this._listeners.forEach(function (o) {
            o.call(i, s);
          });
      }),
      (e.prototype.scrollTo = function (t, n, r, i) {
        t === void 0 && (t = this.offset.x),
          n === void 0 && (n = this.offset.y),
          r === void 0 && (r = 0),
          i === void 0 && (i = {}),
          qA(this, t, n, r, i);
      }),
      (e.prototype.scrollIntoView = function (t, n) {
        n === void 0 && (n = {}), eL(this, t, n);
      }),
      (e.prototype.addListener = function (t) {
        if (typeof t != "function")
          throw new TypeError(
            "[smooth-scrollbar] scrolling listener should be a function"
          );
        this._listeners.add(t);
      }),
      (e.prototype.removeListener = function (t) {
        this._listeners.delete(t);
      }),
      (e.prototype.addTransformableMomentum = function (t, n, r, i) {
        this._updateDebounced();
        var s = this._plugins.reduce(
            function (a, l) {
              return l.transformDelta(a, r) || a;
            },
            { x: t, y: n }
          ),
          o = !this._shouldPropagateMomentum(s.x, s.y);
        o && this.addMomentum(s.x, s.y), i && i.call(this, o);
      }),
      (e.prototype.addMomentum = function (t, n) {
        this.setMomentum(this._momentum.x + t, this._momentum.y + n);
      }),
      (e.prototype.setMomentum = function (t, n) {
        this.limit.x === 0 && (t = 0),
          this.limit.y === 0 && (n = 0),
          this.options.renderByPixels &&
            ((t = Math.round(t)), (n = Math.round(n))),
          (this._momentum.x = t),
          (this._momentum.y = n);
      }),
      (e.prototype.updatePluginOptions = function (t, n) {
        this._plugins.forEach(function (r) {
          r.name === t && Object.assign(r.options, n);
        });
      }),
      (e.prototype.destroy = function () {
        var t = this,
          n = t.containerEl,
          r = t.contentEl;
        RA(this),
          this._listeners.clear(),
          this.setMomentum(0, 0),
          cancelAnimationFrame(this._renderID),
          this._observer && this._observer.disconnect(),
          At.delete(this.containerEl);
        for (var i = Array.from(r.childNodes); n.firstChild; )
          n.removeChild(n.firstChild);
        i.forEach(function (s) {
          n.appendChild(s);
        }),
          Ze(n, { overflow: "" }),
          (n.scrollTop = this.scrollTop),
          (n.scrollLeft = this.scrollLeft),
          this._plugins.forEach(function (s) {
            s.onDestroy();
          }),
          (this._plugins.length = 0);
      }),
      (e.prototype._init = function () {
        var t = this;
        this.update(),
          Object.keys(dh).forEach(function (n) {
            dh[n](t);
          }),
          this._plugins.forEach(function (n) {
            n.onInit();
          }),
          this._render();
      }),
      (e.prototype._updateDebounced = function () {
        this.update();
      }),
      (e.prototype._shouldPropagateMomentum = function (t, n) {
        t === void 0 && (t = 0), n === void 0 && (n = 0);
        var r = this,
          i = r.options,
          s = r.offset,
          o = r.limit;
        if (!i.continuousScrolling) return !1;
        o.x === 0 && o.y === 0 && this._updateDebounced();
        var a = me(t + s.x, 0, o.x),
          l = me(n + s.y, 0, o.y),
          c = !0;
        return (
          (c = c && a === s.x),
          (c = c && l === s.y),
          (c = c && (s.x === o.x || s.x === 0 || s.y === o.y || s.y === 0)),
          c
        );
      }),
      (e.prototype._render = function () {
        var t = this._momentum;
        if (t.x || t.y) {
          var n = this._nextTick("x"),
            r = this._nextTick("y");
          (t.x = n.momentum),
            (t.y = r.momentum),
            this.setPosition(n.position, r.position);
        }
        var i = bt({}, this._momentum);
        this._plugins.forEach(function (s) {
          s.onRender(i);
        }),
          (this._renderID = requestAnimationFrame(this._render.bind(this)));
      }),
      (e.prototype._nextTick = function (t) {
        var n = this,
          r = n.options,
          i = n.offset,
          s = n._momentum,
          o = i[t],
          a = s[t];
        if (Math.abs(a) <= 0.1) return { momentum: 0, position: o + a };
        var l = a * (1 - r.damping);
        return (
          r.renderByPixels && (l |= 0), { momentum: l, position: o + a - l }
        );
      }),
      Kn([Lx(100, !0)], e.prototype, "_updateDebounced", null),
      e
    );
  })(),
  vL = "rgba(222, 222, 222, .75)",
  hL = "rgba(0, 0, 0, .5)",
  gL =
    `
[data-scrollbar] {
  display: block;
  position: relative;
}

.scroll-content {
  display: flow-root;
  -webkit-transform: translate3d(0, 0, 0);
          transform: translate3d(0, 0, 0);
}

.scrollbar-track {
  position: absolute;
  opacity: 0;
  z-index: 1;
  background: ` +
    vL +
    `;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  -webkit-transition: opacity 0.5s 0.5s ease-out;
          transition: opacity 0.5s 0.5s ease-out;
}
.scrollbar-track.show,
.scrollbar-track:hover {
  opacity: 1;
  -webkit-transition-delay: 0s;
          transition-delay: 0s;
}

.scrollbar-track-x {
  bottom: 0;
  left: 0;
  width: 100%;
  height: 8px;
}
.scrollbar-track-y {
  top: 0;
  right: 0;
  width: 8px;
  height: 100%;
}
.scrollbar-thumb {
  position: absolute;
  top: 0;
  left: 0;
  width: 8px;
  height: 8px;
  background: ` +
    hL +
    `;
  border-radius: 4px;
}
`,
  zx = "smooth-scrollbar-style",
  Da = !1;
function ph() {
  if (!(Da || typeof window > "u")) {
    var e = document.createElement("style");
    (e.id = zx),
      (e.textContent = gL),
      document.head && document.head.appendChild(e),
      (Da = !0);
  }
}
function yL() {
  if (!(!Da || typeof window > "u")) {
    var e = document.getElementById(zx);
    !e || !e.parentNode || (e.parentNode.removeChild(e), (Da = !1));
  }
}
var ed = (function (e) {
    uw(t, e);
    function t() {
      return (e !== null && e.apply(this, arguments)) || this;
    }
    return (
      (t.init = function (n, r) {
        if (!n || n.nodeType !== 1)
          throw new TypeError("expect element to be DOM Element, but got " + n);
        return ph(), At.has(n) ? At.get(n) : new fh(n, r);
      }),
      (t.initAll = function (n) {
        return Array.from(
          document.querySelectorAll("[data-scrollbar]"),
          function (r) {
            return t.init(r, n);
          }
        );
      }),
      (t.has = function (n) {
        return At.has(n);
      }),
      (t.get = function (n) {
        return At.get(n);
      }),
      (t.getAll = function () {
        return Array.from(At.values());
      }),
      (t.destroy = function (n) {
        var r = At.get(n);
        r && r.destroy();
      }),
      (t.destroyAll = function () {
        At.forEach(function (n) {
          n.destroy();
        });
      }),
      (t.use = function () {
        for (var n = [], r = 0; r < arguments.length; r++) n[r] = arguments[r];
        return tL.apply(void 0, n);
      }),
      (t.attachStyle = function () {
        return ph();
      }),
      (t.detachStyle = function () {
        return yL();
      }),
      (t.version = "8.8.4"),
      (t.ScrollbarPlugin = Dx),
      t
    );
  })(fh),
  wL = (function () {
    function e(t) {
      this._scrollbar = t;
    }
    return (
      (e.prototype.render = function (t) {
        var n = t.x,
          r = n === void 0 ? 0 : n,
          i = t.y,
          s = i === void 0 ? 0 : i,
          o = this._scrollbar,
          a = o.size,
          l = o.track,
          c = o.offset,
          u = o.contentEl;
        if (
          (Ze(u, {
            "-transform":
              "translate3d(" + -(c.x + r) + "px, " + -(c.y + s) + "px, 0)",
          }),
          r)
        ) {
          l.xAxis.show();
          var d = a.container.width / (a.container.width + Math.abs(r));
          Ze(l.xAxis.thumb.element, {
            "-transform":
              "translate3d(" +
              l.xAxis.thumb.offset +
              "px, 0, 0) scale3d(" +
              d +
              ", 1, 1)",
            "-transform-origin": r < 0 ? "left" : "right",
          });
        }
        if (s) {
          l.yAxis.show();
          var d = a.container.height / (a.container.height + Math.abs(s));
          Ze(l.yAxis.thumb.element, {
            "-transform":
              "translate3d(0, " +
              l.yAxis.thumb.offset +
              "px, 0) scale3d(1, " +
              d +
              ", 1)",
            "-transform-origin": s < 0 ? "top" : "bottom",
          });
        }
        l.autoHideOnIdle();
      }),
      e
    );
  })(),
  mh = 0.75,
  vh = 0.25,
  xL = (function () {
    function e(t) {
      (this._scrollbar = t),
        (this._canvas = document.createElement("canvas")),
        (this._ctx = this._canvas.getContext("2d")),
        Ze(this._canvas, {
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          display: "none",
        });
    }
    return (
      (e.prototype.mount = function () {
        this._scrollbar.containerEl.appendChild(this._canvas);
      }),
      (e.prototype.unmount = function () {
        this._canvas.parentNode &&
          this._canvas.parentNode.removeChild(this._canvas);
      }),
      (e.prototype.adjust = function () {
        var t = this._scrollbar.size,
          n = window.devicePixelRatio || 1,
          r = t.container.width * n,
          i = t.container.height * n;
        (r === this._canvas.width && i === this._canvas.height) ||
          ((this._canvas.width = r),
          (this._canvas.height = i),
          this._ctx.scale(n, n));
      }),
      (e.prototype.recordTouch = function (t) {
        var n = t.touches[t.touches.length - 1];
        (this._touchX = n.clientX), (this._touchY = n.clientY);
      }),
      (e.prototype.render = function (t, n) {
        var r = t.x,
          i = r === void 0 ? 0 : r,
          s = t.y,
          o = s === void 0 ? 0 : s;
        if (!i && !o) {
          Ze(this._canvas, { display: "none" });
          return;
        }
        Ze(this._canvas, { display: "block" });
        var a = this._scrollbar.size;
        this._ctx.clearRect(0, 0, a.container.width, a.container.height),
          (this._ctx.fillStyle = n),
          this._renderX(i),
          this._renderY(o);
      }),
      (e.prototype._getMaxOverscroll = function () {
        var t = this._scrollbar.options.plugins.overscroll;
        return t && t.maxOverscroll ? t.maxOverscroll : 150;
      }),
      (e.prototype._renderX = function (t) {
        var n = this._scrollbar.size,
          r = this._getMaxOverscroll(),
          i = n.container,
          s = i.width,
          o = i.height,
          a = this._ctx;
        a.save(), t > 0 && a.transform(-1, 0, 0, 1, s, 0);
        var l = me(Math.abs(t) / r, 0, mh),
          c = me(l, 0, vh) * s,
          u = Math.abs(t),
          d = this._touchY || o / 2;
        (a.globalAlpha = l),
          a.beginPath(),
          a.moveTo(0, -c),
          a.quadraticCurveTo(u, d, 0, o + c),
          a.fill(),
          a.closePath(),
          a.restore();
      }),
      (e.prototype._renderY = function (t) {
        var n = this._scrollbar.size,
          r = this._getMaxOverscroll(),
          i = n.container,
          s = i.width,
          o = i.height,
          a = this._ctx;
        a.save(), t > 0 && a.transform(1, 0, 0, -1, 0, o);
        var l = me(Math.abs(t) / r, 0, mh),
          c = me(l, 0, vh) * s,
          u = this._touchX || s / 2,
          d = Math.abs(t);
        (a.globalAlpha = l),
          a.beginPath(),
          a.moveTo(-c, 0),
          a.quadraticCurveTo(u, d, s + c, 0),
          a.fill(),
          a.closePath(),
          a.restore();
      }),
      e
    );
  })(),
  Qt;
(function (e) {
  (e.BOUNCE = "bounce"), (e.GLOW = "glow");
})(Qt || (Qt = {}));
var hh = /wheel|touch/,
  SL = (function (e) {
    uw(t, e);
    function t() {
      var n = (e !== null && e.apply(this, arguments)) || this;
      return (
        (n._glow = new xL(n.scrollbar)),
        (n._bounce = new wL(n.scrollbar)),
        (n._wheelScrollBack = { x: !1, y: !1 }),
        (n._lockWheel = { x: !1, y: !1 }),
        (n._touching = !1),
        (n._amplitude = { x: 0, y: 0 }),
        (n._position = { x: 0, y: 0 }),
        (n._releaseWheel = Zf(function () {
          (n._lockWheel.x = !1), (n._lockWheel.y = !1);
        }, 30)),
        n
      );
    }
    return (
      Object.defineProperty(t.prototype, "_isWheelLocked", {
        get: function () {
          return this._lockWheel.x || this._lockWheel.y;
        },
        enumerable: !0,
        configurable: !0,
      }),
      Object.defineProperty(t.prototype, "_enabled", {
        get: function () {
          return !!this.options.effect;
        },
        enumerable: !0,
        configurable: !0,
      }),
      (t.prototype.onInit = function () {
        var n = this,
          r = n._glow,
          i = n.options,
          s = n.scrollbar,
          o = i.effect;
        Object.defineProperty(i, "effect", {
          get: function () {
            return o;
          },
          set: function (a) {
            if (!a) {
              o = void 0;
              return;
            }
            if (a !== Qt.BOUNCE && a !== Qt.GLOW)
              throw new TypeError("unknow overscroll effect: " + a);
            (o = a),
              (s.options.continuousScrolling = !1),
              a === Qt.GLOW ? (r.mount(), r.adjust()) : r.unmount();
          },
        }),
          (i.effect = o);
      }),
      (t.prototype.onUpdate = function () {
        this.options.effect === Qt.GLOW && this._glow.adjust();
      }),
      (t.prototype.onRender = function (n) {
        if (this._enabled) {
          this.scrollbar.options.continuousScrolling &&
            (this.scrollbar.options.continuousScrolling = !1);
          var r = n.x,
            i = n.y;
          !this._amplitude.x &&
            this._willOverscroll("x", n.x) &&
            ((r = 0), this._absorbMomentum("x", n.x)),
            !this._amplitude.y &&
              this._willOverscroll("y", n.y) &&
              ((i = 0), this._absorbMomentum("y", n.y)),
            this.scrollbar.setMomentum(r, i),
            this._render();
        }
      }),
      (t.prototype.transformDelta = function (n, r) {
        if (
          ((this._lastEventType = r.type), !this._enabled || !hh.test(r.type))
        )
          return n;
        this._isWheelLocked &&
          /wheel/.test(r.type) &&
          (this._releaseWheel(),
          this._willOverscroll("x", n.x) && (n.x = 0),
          this._willOverscroll("y", n.y) && (n.y = 0));
        var i = n.x,
          s = n.y;
        switch (
          (this._willOverscroll("x", n.x) &&
            ((i = 0), this._addAmplitude("x", n.x)),
          this._willOverscroll("y", n.y) &&
            ((s = 0), this._addAmplitude("y", n.y)),
          r.type)
        ) {
          case "touchstart":
          case "touchmove":
            (this._touching = !0), this._glow.recordTouch(r);
            break;
          case "touchcancel":
          case "touchend":
            this._touching = !1;
            break;
        }
        return { x: i, y: s };
      }),
      (t.prototype._willOverscroll = function (n, r) {
        if (!r) return !1;
        if (this._position[n]) return !0;
        var i = this.scrollbar.offset[n],
          s = this.scrollbar.limit[n];
        return s === 0 ? !1 : me(i + r, 0, s) === i && (i === 0 || i === s);
      }),
      (t.prototype._absorbMomentum = function (n, r) {
        var i = this,
          s = i.options,
          o = i._lastEventType,
          a = i._amplitude;
        hh.test(o) && (a[n] = me(r, -s.maxOverscroll, s.maxOverscroll));
      }),
      (t.prototype._addAmplitude = function (n, r) {
        var i = this,
          s = i.options,
          o = i.scrollbar,
          a = i._amplitude,
          l = i._position,
          c = a[n],
          u = r * c < 0,
          d;
        u
          ? (d = 0)
          : (d = this._wheelScrollBack[n] ? 1 : Math.abs(c / s.maxOverscroll));
        var f = c + r * (1 - d);
        (a[n] =
          o.offset[n] === 0
            ? me(f, -s.maxOverscroll, 0)
            : me(f, 0, s.maxOverscroll)),
          u && (l[n] = a[n]);
      }),
      (t.prototype._render = function () {
        var n = this,
          r = n.options,
          i = n._amplitude,
          s = n._position;
        if (this._enabled && (i.x || i.y || s.x || s.y)) {
          var o = this._nextAmp("x"),
            a = this._nextAmp("y");
          switch (
            ((i.x = o.amplitude),
            (s.x = o.position),
            (i.y = a.amplitude),
            (s.y = a.position),
            r.effect)
          ) {
            case Qt.BOUNCE:
              this._bounce.render(s);
              break;
            case Qt.GLOW:
              this._glow.render(s, this.options.glowColor);
              break;
          }
          typeof r.onScroll == "function" && r.onScroll.call(this, bt({}, s));
        }
      }),
      (t.prototype._nextAmp = function (n) {
        var r = this,
          i = r.options,
          s = r._amplitude,
          o = r._position,
          a = 1 - i.damping,
          l = s[n],
          c = o[n],
          u = this._touching ? l : (l * a) | 0,
          d = u - c,
          f = c + d - ((d * a) | 0);
        return (
          !this._touching &&
            Math.abs(f) < Math.abs(c) &&
            (this._wheelScrollBack[n] = !0),
          this._wheelScrollBack[n] &&
            Math.abs(f) <= 1 &&
            ((this._wheelScrollBack[n] = !1), (this._lockWheel[n] = !0)),
          { amplitude: u, position: f }
        );
      }),
      (t.pluginName = "overscroll"),
      (t.defaultOptions = {
        effect: Qt.BOUNCE,
        onScroll: void 0,
        damping: 0.2,
        maxOverscroll: 150,
        glowColor: "#87ceeb",
      }),
      t
    );
  })(Dx);
ed.use(SL);
function EL({ children: e, id: t, scrollEnabled: n, scrollActive: r }) {
  const i = X(),
    { isMobileLayout: s } = fe(),
    [o, a] = E.useState(null),
    l = o && o.limit.y > 0;
  E.useEffect(() => {
    const f = !s();
    n && f ? c() : u();
  }, [n]),
    E.useEffect(() => {
      const f = document.getElementById(t);
      !r || !f || d();
    }, [r]);
  const c = () => {
      if (o) return;
      const f = document.getElementById(t),
        g = ed.init(f, {
          damping: 0.2,
          renderByPixels: !0,
          alwaysShowTracks: !0,
          continuousScrolling: !0,
          plugins: {
            overscroll: {
              effect: "glow",
              glowColor: i.getBootstrapColor("secondary"),
            },
          },
        });
      a(g);
    },
    u = () => {
      if (!o) return;
      const f = document.getElementById(t);
      ed.destroy(f), a(null);
    },
    d = () => {
      const f = document.getElementById(t);
      f && (o ? o.scrollTo(0, 0) : (f.scrollTop = 0));
    };
  return p.jsx("div", {
    className: `custom-scrollable ${i.strIf(
      !n || !l,
      "custom-scrollable-disabled"
    )}`,
    id: t,
    children: p.jsx("div", {
      className: "custom-scrollable-content",
      children: e,
    }),
  });
}
function IL({ text: e, classList: t }) {
  const n = { tag: "h4", lineTag: "eq-h3" },
    r = n.tag;
  return p.jsxs(r, {
    className: "stylized-title d-flex align-items-center fw-bold " + t,
    children: [
      p.jsx("span", {
        className: `text-highlight ${n.lineTag} ms-1 me-2 pe-1`,
        children: "|",
      }),
      p.jsx("span", {
        className: "mb-0",
        dangerouslySetInnerHTML: { __html: e },
      }),
    ],
  });
}
function Vt({ title: e, children: t, className: n }) {
  const r = X();
  return p.jsxs("article", {
    className: `${n} w-100`,
    children: [
      e &&
        p.jsx(IL, {
          text: r.parseJsonText(e),
          size: "default",
          classList: "mb-3",
        }),
      p.jsx("div", {
        className: "article-content-wrapper mx-2 mx-md-3 text-4",
        children: t,
      }),
    ],
  });
}
function gh(e) {
  return (
    e !== null &&
    typeof e == "object" &&
    "constructor" in e &&
    e.constructor === Object
  );
}
function Kf(e, t) {
  e === void 0 && (e = {}),
    t === void 0 && (t = {}),
    Object.keys(t).forEach((n) => {
      typeof e[n] > "u"
        ? (e[n] = t[n])
        : gh(t[n]) &&
          gh(e[n]) &&
          Object.keys(t[n]).length > 0 &&
          Kf(e[n], t[n]);
    });
}
const Rx = {
  body: {},
  addEventListener() {},
  removeEventListener() {},
  activeElement: { blur() {}, nodeName: "" },
  querySelector() {
    return null;
  },
  querySelectorAll() {
    return [];
  },
  getElementById() {
    return null;
  },
  createEvent() {
    return { initEvent() {} };
  },
  createElement() {
    return {
      children: [],
      childNodes: [],
      style: {},
      setAttribute() {},
      getElementsByTagName() {
        return [];
      },
    };
  },
  createElementNS() {
    return {};
  },
  importNode() {
    return null;
  },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
};
function Ft() {
  const e = typeof document < "u" ? document : {};
  return Kf(e, Rx), e;
}
const TL = {
  document: Rx,
  navigator: { userAgent: "" },
  location: {
    hash: "",
    host: "",
    hostname: "",
    href: "",
    origin: "",
    pathname: "",
    protocol: "",
    search: "",
  },
  history: { replaceState() {}, pushState() {}, go() {}, back() {} },
  CustomEvent: function () {
    return this;
  },
  addEventListener() {},
  removeEventListener() {},
  getComputedStyle() {
    return {
      getPropertyValue() {
        return "";
      },
    };
  },
  Image() {},
  Date() {},
  screen: {},
  setTimeout() {},
  clearTimeout() {},
  matchMedia() {
    return {};
  },
  requestAnimationFrame(e) {
    return typeof setTimeout > "u" ? (e(), null) : setTimeout(e, 0);
  },
  cancelAnimationFrame(e) {
    typeof setTimeout > "u" || clearTimeout(e);
  },
};
function Ae() {
  const e = typeof window < "u" ? window : {};
  return Kf(e, TL), e;
}
function CL(e) {
  return (
    e === void 0 && (e = ""),
    e
      .trim()
      .split(" ")
      .filter((t) => !!t.trim())
  );
}
function bL(e) {
  const t = e;
  Object.keys(t).forEach((n) => {
    try {
      t[n] = null;
    } catch {}
    try {
      delete t[n];
    } catch {}
  });
}
function td(e, t) {
  return t === void 0 && (t = 0), setTimeout(e, t);
}
function za() {
  return Date.now();
}
function PL(e) {
  const t = Ae();
  let n;
  return (
    t.getComputedStyle && (n = t.getComputedStyle(e, null)),
    !n && e.currentStyle && (n = e.currentStyle),
    n || (n = e.style),
    n
  );
}
function nd(e, t) {
  t === void 0 && (t = "x");
  const n = Ae();
  let r, i, s;
  const o = PL(e);
  return (
    n.WebKitCSSMatrix
      ? ((i = o.transform || o.webkitTransform),
        i.split(",").length > 6 &&
          (i = i
            .split(", ")
            .map((a) => a.replace(",", "."))
            .join(", ")),
        (s = new n.WebKitCSSMatrix(i === "none" ? "" : i)))
      : ((s =
          o.MozTransform ||
          o.OTransform ||
          o.MsTransform ||
          o.msTransform ||
          o.transform ||
          o
            .getPropertyValue("transform")
            .replace("translate(", "matrix(1, 0, 0, 1,")),
        (r = s.toString().split(","))),
    t === "x" &&
      (n.WebKitCSSMatrix
        ? (i = s.m41)
        : r.length === 16
        ? (i = parseFloat(r[12]))
        : (i = parseFloat(r[4]))),
    t === "y" &&
      (n.WebKitCSSMatrix
        ? (i = s.m42)
        : r.length === 16
        ? (i = parseFloat(r[13]))
        : (i = parseFloat(r[5]))),
    i || 0
  );
}
function Lo(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object"
  );
}
function jL(e) {
  return typeof window < "u" && typeof window.HTMLElement < "u"
    ? e instanceof HTMLElement
    : e && (e.nodeType === 1 || e.nodeType === 11);
}
function Ye() {
  const e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
    t = ["__proto__", "constructor", "prototype"];
  for (let n = 1; n < arguments.length; n += 1) {
    const r = n < 0 || arguments.length <= n ? void 0 : arguments[n];
    if (r != null && !jL(r)) {
      const i = Object.keys(Object(r)).filter((s) => t.indexOf(s) < 0);
      for (let s = 0, o = i.length; s < o; s += 1) {
        const a = i[s],
          l = Object.getOwnPropertyDescriptor(r, a);
        l !== void 0 &&
          l.enumerable &&
          (Lo(e[a]) && Lo(r[a])
            ? r[a].__swiper__
              ? (e[a] = r[a])
              : Ye(e[a], r[a])
            : !Lo(e[a]) && Lo(r[a])
            ? ((e[a] = {}), r[a].__swiper__ ? (e[a] = r[a]) : Ye(e[a], r[a]))
            : (e[a] = r[a]));
      }
    }
  }
  return e;
}
function Do(e, t, n) {
  e.style.setProperty(t, n);
}
function Bx(e) {
  let { swiper: t, targetPosition: n, side: r } = e;
  const i = Ae(),
    s = -t.translate;
  let o = null,
    a;
  const l = t.params.speed;
  (t.wrapperEl.style.scrollSnapType = "none"),
    i.cancelAnimationFrame(t.cssModeFrameID);
  const c = n > s ? "next" : "prev",
    u = (f, g) => (c === "next" && f >= g) || (c === "prev" && f <= g),
    d = () => {
      (a = new Date().getTime()), o === null && (o = a);
      const f = Math.max(Math.min((a - o) / l, 1), 0),
        g = 0.5 - Math.cos(f * Math.PI) / 2;
      let y = s + g * (n - s);
      if ((u(y, n) && (y = n), t.wrapperEl.scrollTo({ [r]: y }), u(y, n))) {
        (t.wrapperEl.style.overflow = "hidden"),
          (t.wrapperEl.style.scrollSnapType = ""),
          setTimeout(() => {
            (t.wrapperEl.style.overflow = ""), t.wrapperEl.scrollTo({ [r]: y });
          }),
          i.cancelAnimationFrame(t.cssModeFrameID);
        return;
      }
      t.cssModeFrameID = i.requestAnimationFrame(d);
    };
  d();
}
function at(e, t) {
  t === void 0 && (t = "");
  const n = [...e.children];
  return (
    e instanceof HTMLSlotElement && n.push(...e.assignedElements()),
    t ? n.filter((r) => r.matches(t)) : n
  );
}
function $L(e, t) {
  const n = t.contains(e);
  return !n && t instanceof HTMLSlotElement
    ? [...t.assignedElements()].includes(e)
    : n;
}
function Ra(e) {
  try {
    console.warn(e);
    return;
  } catch {}
}
function Ba(e, t) {
  t === void 0 && (t = []);
  const n = document.createElement(e);
  return n.classList.add(...(Array.isArray(t) ? t : CL(t))), n;
}
function yh(e) {
  const t = Ae(),
    n = Ft(),
    r = e.getBoundingClientRect(),
    i = n.body,
    s = e.clientTop || i.clientTop || 0,
    o = e.clientLeft || i.clientLeft || 0,
    a = e === t ? t.scrollY : e.scrollTop,
    l = e === t ? t.scrollX : e.scrollLeft;
  return { top: r.top + a - s, left: r.left + l - o };
}
function _L(e, t) {
  const n = [];
  for (; e.previousElementSibling; ) {
    const r = e.previousElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function OL(e, t) {
  const n = [];
  for (; e.nextElementSibling; ) {
    const r = e.nextElementSibling;
    t ? r.matches(t) && n.push(r) : n.push(r), (e = r);
  }
  return n;
}
function Cn(e, t) {
  return Ae().getComputedStyle(e, null).getPropertyValue(t);
}
function Fa(e) {
  let t = e,
    n;
  if (t) {
    for (n = 0; (t = t.previousSibling) !== null; )
      t.nodeType === 1 && (n += 1);
    return n;
  }
}
function es(e, t) {
  const n = [];
  let r = e.parentElement;
  for (; r; ) t ? r.matches(t) && n.push(r) : n.push(r), (r = r.parentElement);
  return n;
}
function rd(e, t, n) {
  const r = Ae();
  return (
    e[t === "width" ? "offsetWidth" : "offsetHeight"] +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-right" : "margin-top")
    ) +
    parseFloat(
      r
        .getComputedStyle(e, null)
        .getPropertyValue(t === "width" ? "margin-left" : "margin-bottom")
    )
  );
}
function Xt(e) {
  return (Array.isArray(e) ? e : [e]).filter((t) => !!t);
}
let _u;
function ML() {
  const e = Ae(),
    t = Ft();
  return {
    smoothScroll:
      t.documentElement &&
      t.documentElement.style &&
      "scrollBehavior" in t.documentElement.style,
    touch: !!(
      "ontouchstart" in e ||
      (e.DocumentTouch && t instanceof e.DocumentTouch)
    ),
  };
}
function Fx() {
  return _u || (_u = ML()), _u;
}
let Ou;
function NL(e) {
  let { userAgent: t } = e === void 0 ? {} : e;
  const n = Fx(),
    r = Ae(),
    i = r.navigator.platform,
    s = t || r.navigator.userAgent,
    o = { ios: !1, android: !1 },
    a = r.screen.width,
    l = r.screen.height,
    c = s.match(/(Android);?[\s\/]+([\d.]+)?/);
  let u = s.match(/(iPad).*OS\s([\d_]+)/);
  const d = s.match(/(iPod)(.*OS\s([\d_]+))?/),
    f = !u && s.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
    g = i === "Win32";
  let y = i === "MacIntel";
  const w = [
    "1024x1366",
    "1366x1024",
    "834x1194",
    "1194x834",
    "834x1112",
    "1112x834",
    "768x1024",
    "1024x768",
    "820x1180",
    "1180x820",
    "810x1080",
    "1080x810",
  ];
  return (
    !u &&
      y &&
      n.touch &&
      w.indexOf(`${a}x${l}`) >= 0 &&
      ((u = s.match(/(Version)\/([\d.]+)/)),
      u || (u = [0, 1, "13_0_0"]),
      (y = !1)),
    c && !g && ((o.os = "android"), (o.android = !0)),
    (u || f || d) && ((o.os = "ios"), (o.ios = !0)),
    o
  );
}
function Wx(e) {
  return e === void 0 && (e = {}), Ou || (Ou = NL(e)), Ou;
}
let Mu;
function kL() {
  const e = Ae(),
    t = Wx();
  let n = !1;
  function r() {
    const a = e.navigator.userAgent.toLowerCase();
    return (
      a.indexOf("safari") >= 0 &&
      a.indexOf("chrome") < 0 &&
      a.indexOf("android") < 0
    );
  }
  if (r()) {
    const a = String(e.navigator.userAgent);
    if (a.includes("Version/")) {
      const [l, c] = a
        .split("Version/")[1]
        .split(" ")[0]
        .split(".")
        .map((u) => Number(u));
      n = l < 16 || (l === 16 && c < 2);
    }
  }
  const i = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(
      e.navigator.userAgent
    ),
    s = r(),
    o = s || (i && t.ios);
  return {
    isSafari: n || s,
    needPerspectiveFix: n,
    need3dFix: o,
    isWebView: i,
  };
}
function AL() {
  return Mu || (Mu = kL()), Mu;
}
function LL(e) {
  let { swiper: t, on: n, emit: r } = e;
  const i = Ae();
  let s = null,
    o = null;
  const a = () => {
      !t || t.destroyed || !t.initialized || (r("beforeResize"), r("resize"));
    },
    l = () => {
      !t ||
        t.destroyed ||
        !t.initialized ||
        ((s = new ResizeObserver((d) => {
          o = i.requestAnimationFrame(() => {
            const { width: f, height: g } = t;
            let y = f,
              w = g;
            d.forEach((I) => {
              let { contentBoxSize: v, contentRect: m, target: h } = I;
              (h && h !== t.el) ||
                ((y = m ? m.width : (v[0] || v).inlineSize),
                (w = m ? m.height : (v[0] || v).blockSize));
            }),
              (y !== f || w !== g) && a();
          });
        })),
        s.observe(t.el));
    },
    c = () => {
      o && i.cancelAnimationFrame(o),
        s && s.unobserve && t.el && (s.unobserve(t.el), (s = null));
    },
    u = () => {
      !t || t.destroyed || !t.initialized || r("orientationchange");
    };
  n("init", () => {
    if (t.params.resizeObserver && typeof i.ResizeObserver < "u") {
      l();
      return;
    }
    i.addEventListener("resize", a), i.addEventListener("orientationchange", u);
  }),
    n("destroy", () => {
      c(),
        i.removeEventListener("resize", a),
        i.removeEventListener("orientationchange", u);
    });
}
function DL(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = [],
    o = Ae(),
    a = function (u, d) {
      d === void 0 && (d = {});
      const f = o.MutationObserver || o.WebkitMutationObserver,
        g = new f((y) => {
          if (t.__preventObserver__) return;
          if (y.length === 1) {
            i("observerUpdate", y[0]);
            return;
          }
          const w = function () {
            i("observerUpdate", y[0]);
          };
          o.requestAnimationFrame
            ? o.requestAnimationFrame(w)
            : o.setTimeout(w, 0);
        });
      g.observe(u, {
        attributes: typeof d.attributes > "u" ? !0 : d.attributes,
        childList: t.isElement || (typeof d.childList > "u" ? !0 : d).childList,
        characterData: typeof d.characterData > "u" ? !0 : d.characterData,
      }),
        s.push(g);
    },
    l = () => {
      if (t.params.observer) {
        if (t.params.observeParents) {
          const u = es(t.hostEl);
          for (let d = 0; d < u.length; d += 1) a(u[d]);
        }
        a(t.hostEl, { childList: t.params.observeSlideChildren }),
          a(t.wrapperEl, { attributes: !1 });
      }
    },
    c = () => {
      s.forEach((u) => {
        u.disconnect();
      }),
        s.splice(0, s.length);
    };
  n({ observer: !1, observeParents: !1, observeSlideChildren: !1 }),
    r("init", l),
    r("destroy", c);
}
var zL = {
  on(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    const i = n ? "unshift" : "push";
    return (
      e.split(" ").forEach((s) => {
        r.eventsListeners[s] || (r.eventsListeners[s] = []),
          r.eventsListeners[s][i](t);
      }),
      r
    );
  },
  once(e, t, n) {
    const r = this;
    if (!r.eventsListeners || r.destroyed || typeof t != "function") return r;
    function i() {
      r.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
      for (var s = arguments.length, o = new Array(s), a = 0; a < s; a++)
        o[a] = arguments[a];
      t.apply(r, o);
    }
    return (i.__emitterProxy = t), r.on(e, i, n);
  },
  onAny(e, t) {
    const n = this;
    if (!n.eventsListeners || n.destroyed || typeof e != "function") return n;
    const r = t ? "unshift" : "push";
    return n.eventsAnyListeners.indexOf(e) < 0 && n.eventsAnyListeners[r](e), n;
  },
  offAny(e) {
    const t = this;
    if (!t.eventsListeners || t.destroyed || !t.eventsAnyListeners) return t;
    const n = t.eventsAnyListeners.indexOf(e);
    return n >= 0 && t.eventsAnyListeners.splice(n, 1), t;
  },
  off(e, t) {
    const n = this;
    return (
      !n.eventsListeners ||
        n.destroyed ||
        !n.eventsListeners ||
        e.split(" ").forEach((r) => {
          typeof t > "u"
            ? (n.eventsListeners[r] = [])
            : n.eventsListeners[r] &&
              n.eventsListeners[r].forEach((i, s) => {
                (i === t || (i.__emitterProxy && i.__emitterProxy === t)) &&
                  n.eventsListeners[r].splice(s, 1);
              });
        }),
      n
    );
  },
  emit() {
    const e = this;
    if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
    let t, n, r;
    for (var i = arguments.length, s = new Array(i), o = 0; o < i; o++)
      s[o] = arguments[o];
    return (
      typeof s[0] == "string" || Array.isArray(s[0])
        ? ((t = s[0]), (n = s.slice(1, s.length)), (r = e))
        : ((t = s[0].events), (n = s[0].data), (r = s[0].context || e)),
      n.unshift(r),
      (Array.isArray(t) ? t : t.split(" ")).forEach((l) => {
        e.eventsAnyListeners &&
          e.eventsAnyListeners.length &&
          e.eventsAnyListeners.forEach((c) => {
            c.apply(r, [l, ...n]);
          }),
          e.eventsListeners &&
            e.eventsListeners[l] &&
            e.eventsListeners[l].forEach((c) => {
              c.apply(r, n);
            });
      }),
      e
    );
  },
};
function RL() {
  const e = this;
  let t, n;
  const r = e.el;
  typeof e.params.width < "u" && e.params.width !== null
    ? (t = e.params.width)
    : (t = r.clientWidth),
    typeof e.params.height < "u" && e.params.height !== null
      ? (n = e.params.height)
      : (n = r.clientHeight),
    !((t === 0 && e.isHorizontal()) || (n === 0 && e.isVertical())) &&
      ((t =
        t -
        parseInt(Cn(r, "padding-left") || 0, 10) -
        parseInt(Cn(r, "padding-right") || 0, 10)),
      (n =
        n -
        parseInt(Cn(r, "padding-top") || 0, 10) -
        parseInt(Cn(r, "padding-bottom") || 0, 10)),
      Number.isNaN(t) && (t = 0),
      Number.isNaN(n) && (n = 0),
      Object.assign(e, {
        width: t,
        height: n,
        size: e.isHorizontal() ? t : n,
      }));
}
function BL() {
  const e = this;
  function t(P, C) {
    return parseFloat(P.getPropertyValue(e.getDirectionLabel(C)) || 0);
  }
  const n = e.params,
    { wrapperEl: r, slidesEl: i, size: s, rtlTranslate: o, wrongRTL: a } = e,
    l = e.virtual && n.virtual.enabled,
    c = l ? e.virtual.slides.length : e.slides.length,
    u = at(i, `.${e.params.slideClass}, swiper-slide`),
    d = l ? e.virtual.slides.length : u.length;
  let f = [];
  const g = [],
    y = [];
  let w = n.slidesOffsetBefore;
  typeof w == "function" && (w = n.slidesOffsetBefore.call(e));
  let I = n.slidesOffsetAfter;
  typeof I == "function" && (I = n.slidesOffsetAfter.call(e));
  const v = e.snapGrid.length,
    m = e.slidesGrid.length;
  let h = n.spaceBetween,
    x = -w,
    S = 0,
    b = 0;
  if (typeof s > "u") return;
  typeof h == "string" && h.indexOf("%") >= 0
    ? (h = (parseFloat(h.replace("%", "")) / 100) * s)
    : typeof h == "string" && (h = parseFloat(h)),
    (e.virtualSize = -h),
    u.forEach((P) => {
      o ? (P.style.marginLeft = "") : (P.style.marginRight = ""),
        (P.style.marginBottom = ""),
        (P.style.marginTop = "");
    }),
    n.centeredSlides &&
      n.cssMode &&
      (Do(r, "--swiper-centered-offset-before", ""),
      Do(r, "--swiper-centered-offset-after", ""));
  const $ = n.grid && n.grid.rows > 1 && e.grid;
  $ ? e.grid.initSlides(u) : e.grid && e.grid.unsetSlides();
  let T;
  const j =
    n.slidesPerView === "auto" &&
    n.breakpoints &&
    Object.keys(n.breakpoints).filter(
      (P) => typeof n.breakpoints[P].slidesPerView < "u"
    ).length > 0;
  for (let P = 0; P < d; P += 1) {
    T = 0;
    let C;
    if (
      (u[P] && (C = u[P]),
      $ && e.grid.updateSlide(P, C, u),
      !(u[P] && Cn(C, "display") === "none"))
    ) {
      if (n.slidesPerView === "auto") {
        j && (u[P].style[e.getDirectionLabel("width")] = "");
        const _ = getComputedStyle(C),
          O = C.style.transform,
          z = C.style.webkitTransform;
        if (
          (O && (C.style.transform = "none"),
          z && (C.style.webkitTransform = "none"),
          n.roundLengths)
        )
          T = e.isHorizontal() ? rd(C, "width") : rd(C, "height");
        else {
          const F = t(_, "width"),
            W = t(_, "padding-left"),
            G = t(_, "padding-right"),
            M = t(_, "margin-left"),
            k = t(_, "margin-right"),
            A = _.getPropertyValue("box-sizing");
          if (A && A === "border-box") T = F + M + k;
          else {
            const { clientWidth: N, offsetWidth: D } = C;
            T = F + W + G + M + k + (D - N);
          }
        }
        O && (C.style.transform = O),
          z && (C.style.webkitTransform = z),
          n.roundLengths && (T = Math.floor(T));
      } else
        (T = (s - (n.slidesPerView - 1) * h) / n.slidesPerView),
          n.roundLengths && (T = Math.floor(T)),
          u[P] && (u[P].style[e.getDirectionLabel("width")] = `${T}px`);
      u[P] && (u[P].swiperSlideSize = T),
        y.push(T),
        n.centeredSlides
          ? ((x = x + T / 2 + S / 2 + h),
            S === 0 && P !== 0 && (x = x - s / 2 - h),
            P === 0 && (x = x - s / 2 - h),
            Math.abs(x) < 1 / 1e3 && (x = 0),
            n.roundLengths && (x = Math.floor(x)),
            b % n.slidesPerGroup === 0 && f.push(x),
            g.push(x))
          : (n.roundLengths && (x = Math.floor(x)),
            (b - Math.min(e.params.slidesPerGroupSkip, b)) %
              e.params.slidesPerGroup ===
              0 && f.push(x),
            g.push(x),
            (x = x + T + h)),
        (e.virtualSize += T + h),
        (S = T),
        (b += 1);
    }
  }
  if (
    ((e.virtualSize = Math.max(e.virtualSize, s) + I),
    o &&
      a &&
      (n.effect === "slide" || n.effect === "coverflow") &&
      (r.style.width = `${e.virtualSize + h}px`),
    n.setWrapperSize &&
      (r.style[e.getDirectionLabel("width")] = `${e.virtualSize + h}px`),
    $ && e.grid.updateWrapperSize(T, f),
    !n.centeredSlides)
  ) {
    const P = [];
    for (let C = 0; C < f.length; C += 1) {
      let _ = f[C];
      n.roundLengths && (_ = Math.floor(_)),
        f[C] <= e.virtualSize - s && P.push(_);
    }
    (f = P),
      Math.floor(e.virtualSize - s) - Math.floor(f[f.length - 1]) > 1 &&
        f.push(e.virtualSize - s);
  }
  if (l && n.loop) {
    const P = y[0] + h;
    if (n.slidesPerGroup > 1) {
      const C = Math.ceil(
          (e.virtual.slidesBefore + e.virtual.slidesAfter) / n.slidesPerGroup
        ),
        _ = P * n.slidesPerGroup;
      for (let O = 0; O < C; O += 1) f.push(f[f.length - 1] + _);
    }
    for (let C = 0; C < e.virtual.slidesBefore + e.virtual.slidesAfter; C += 1)
      n.slidesPerGroup === 1 && f.push(f[f.length - 1] + P),
        g.push(g[g.length - 1] + P),
        (e.virtualSize += P);
  }
  if ((f.length === 0 && (f = [0]), h !== 0)) {
    const P =
      e.isHorizontal() && o ? "marginLeft" : e.getDirectionLabel("marginRight");
    u.filter((C, _) =>
      !n.cssMode || n.loop ? !0 : _ !== u.length - 1
    ).forEach((C) => {
      C.style[P] = `${h}px`;
    });
  }
  if (n.centeredSlides && n.centeredSlidesBounds) {
    let P = 0;
    y.forEach((_) => {
      P += _ + (h || 0);
    }),
      (P -= h);
    const C = P > s ? P - s : 0;
    f = f.map((_) => (_ <= 0 ? -w : _ > C ? C + I : _));
  }
  if (n.centerInsufficientSlides) {
    let P = 0;
    y.forEach((_) => {
      P += _ + (h || 0);
    }),
      (P -= h);
    const C = (n.slidesOffsetBefore || 0) + (n.slidesOffsetAfter || 0);
    if (P + C < s) {
      const _ = (s - P - C) / 2;
      f.forEach((O, z) => {
        f[z] = O - _;
      }),
        g.forEach((O, z) => {
          g[z] = O + _;
        });
    }
  }
  if (
    (Object.assign(e, {
      slides: u,
      snapGrid: f,
      slidesGrid: g,
      slidesSizesGrid: y,
    }),
    n.centeredSlides && n.cssMode && !n.centeredSlidesBounds)
  ) {
    Do(r, "--swiper-centered-offset-before", `${-f[0]}px`),
      Do(
        r,
        "--swiper-centered-offset-after",
        `${e.size / 2 - y[y.length - 1] / 2}px`
      );
    const P = -e.snapGrid[0],
      C = -e.slidesGrid[0];
    (e.snapGrid = e.snapGrid.map((_) => _ + P)),
      (e.slidesGrid = e.slidesGrid.map((_) => _ + C));
  }
  if (
    (d !== c && e.emit("slidesLengthChange"),
    f.length !== v &&
      (e.params.watchOverflow && e.checkOverflow(),
      e.emit("snapGridLengthChange")),
    g.length !== m && e.emit("slidesGridLengthChange"),
    n.watchSlidesProgress && e.updateSlidesOffset(),
    e.emit("slidesUpdated"),
    !l && !n.cssMode && (n.effect === "slide" || n.effect === "fade"))
  ) {
    const P = `${n.containerModifierClass}backface-hidden`,
      C = e.el.classList.contains(P);
    d <= n.maxBackfaceHiddenSlides
      ? C || e.el.classList.add(P)
      : C && e.el.classList.remove(P);
  }
}
function FL(e) {
  const t = this,
    n = [],
    r = t.virtual && t.params.virtual.enabled;
  let i = 0,
    s;
  typeof e == "number"
    ? t.setTransition(e)
    : e === !0 && t.setTransition(t.params.speed);
  const o = (a) => (r ? t.slides[t.getSlideIndexByData(a)] : t.slides[a]);
  if (t.params.slidesPerView !== "auto" && t.params.slidesPerView > 1)
    if (t.params.centeredSlides)
      (t.visibleSlides || []).forEach((a) => {
        n.push(a);
      });
    else
      for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
        const a = t.activeIndex + s;
        if (a > t.slides.length && !r) break;
        n.push(o(a));
      }
  else n.push(o(t.activeIndex));
  for (s = 0; s < n.length; s += 1)
    if (typeof n[s] < "u") {
      const a = n[s].offsetHeight;
      i = a > i ? a : i;
    }
  (i || i === 0) && (t.wrapperEl.style.height = `${i}px`);
}
function WL() {
  const e = this,
    t = e.slides,
    n = e.isElement
      ? e.isHorizontal()
        ? e.wrapperEl.offsetLeft
        : e.wrapperEl.offsetTop
      : 0;
  for (let r = 0; r < t.length; r += 1)
    t[r].swiperSlideOffset =
      (e.isHorizontal() ? t[r].offsetLeft : t[r].offsetTop) -
      n -
      e.cssOverflowAdjustment();
}
const wh = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function HL(e) {
  e === void 0 && (e = (this && this.translate) || 0);
  const t = this,
    n = t.params,
    { slides: r, rtlTranslate: i, snapGrid: s } = t;
  if (r.length === 0) return;
  typeof r[0].swiperSlideOffset > "u" && t.updateSlidesOffset();
  let o = -e;
  i && (o = e), (t.visibleSlidesIndexes = []), (t.visibleSlides = []);
  let a = n.spaceBetween;
  typeof a == "string" && a.indexOf("%") >= 0
    ? (a = (parseFloat(a.replace("%", "")) / 100) * t.size)
    : typeof a == "string" && (a = parseFloat(a));
  for (let l = 0; l < r.length; l += 1) {
    const c = r[l];
    let u = c.swiperSlideOffset;
    n.cssMode && n.centeredSlides && (u -= r[0].swiperSlideOffset);
    const d =
        (o + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + a),
      f =
        (o - s[0] + (n.centeredSlides ? t.minTranslate() : 0) - u) /
        (c.swiperSlideSize + a),
      g = -(o - u),
      y = g + t.slidesSizesGrid[l],
      w = g >= 0 && g <= t.size - t.slidesSizesGrid[l],
      I =
        (g >= 0 && g < t.size - 1) ||
        (y > 1 && y <= t.size) ||
        (g <= 0 && y >= t.size);
    I && (t.visibleSlides.push(c), t.visibleSlidesIndexes.push(l)),
      wh(c, I, n.slideVisibleClass),
      wh(c, w, n.slideFullyVisibleClass),
      (c.progress = i ? -d : d),
      (c.originalProgress = i ? -f : f);
  }
}
function VL(e) {
  const t = this;
  if (typeof e > "u") {
    const u = t.rtlTranslate ? -1 : 1;
    e = (t && t.translate && t.translate * u) || 0;
  }
  const n = t.params,
    r = t.maxTranslate() - t.minTranslate();
  let { progress: i, isBeginning: s, isEnd: o, progressLoop: a } = t;
  const l = s,
    c = o;
  if (r === 0) (i = 0), (s = !0), (o = !0);
  else {
    i = (e - t.minTranslate()) / r;
    const u = Math.abs(e - t.minTranslate()) < 1,
      d = Math.abs(e - t.maxTranslate()) < 1;
    (s = u || i <= 0), (o = d || i >= 1), u && (i = 0), d && (i = 1);
  }
  if (n.loop) {
    const u = t.getSlideIndexByData(0),
      d = t.getSlideIndexByData(t.slides.length - 1),
      f = t.slidesGrid[u],
      g = t.slidesGrid[d],
      y = t.slidesGrid[t.slidesGrid.length - 1],
      w = Math.abs(e);
    w >= f ? (a = (w - f) / y) : (a = (w + y - g) / y), a > 1 && (a -= 1);
  }
  Object.assign(t, { progress: i, progressLoop: a, isBeginning: s, isEnd: o }),
    (n.watchSlidesProgress || (n.centeredSlides && n.autoHeight)) &&
      t.updateSlidesProgress(e),
    s && !l && t.emit("reachBeginning toEdge"),
    o && !c && t.emit("reachEnd toEdge"),
    ((l && !s) || (c && !o)) && t.emit("fromEdge"),
    t.emit("progress", i);
}
const Nu = (e, t, n) => {
  t && !e.classList.contains(n)
    ? e.classList.add(n)
    : !t && e.classList.contains(n) && e.classList.remove(n);
};
function GL() {
  const e = this,
    { slides: t, params: n, slidesEl: r, activeIndex: i } = e,
    s = e.virtual && n.virtual.enabled,
    o = e.grid && n.grid && n.grid.rows > 1,
    a = (d) => at(r, `.${n.slideClass}${d}, swiper-slide${d}`)[0];
  let l, c, u;
  if (s)
    if (n.loop) {
      let d = i - e.virtual.slidesBefore;
      d < 0 && (d = e.virtual.slides.length + d),
        d >= e.virtual.slides.length && (d -= e.virtual.slides.length),
        (l = a(`[data-swiper-slide-index="${d}"]`));
    } else l = a(`[data-swiper-slide-index="${i}"]`);
  else
    o
      ? ((l = t.filter((d) => d.column === i)[0]),
        (u = t.filter((d) => d.column === i + 1)[0]),
        (c = t.filter((d) => d.column === i - 1)[0]))
      : (l = t[i]);
  l &&
    (o ||
      ((u = OL(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !u && (u = t[0]),
      (c = _L(l, `.${n.slideClass}, swiper-slide`)[0]),
      n.loop && !c === 0 && (c = t[t.length - 1]))),
    t.forEach((d) => {
      Nu(d, d === l, n.slideActiveClass),
        Nu(d, d === u, n.slideNextClass),
        Nu(d, d === c, n.slidePrevClass);
    }),
    e.emitSlidesClasses();
}
const sa = (e, t) => {
    if (!e || e.destroyed || !e.params) return;
    const n = () => (e.isElement ? "swiper-slide" : `.${e.params.slideClass}`),
      r = t.closest(n());
    if (r) {
      let i = r.querySelector(`.${e.params.lazyPreloaderClass}`);
      !i &&
        e.isElement &&
        (r.shadowRoot
          ? (i = r.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`))
          : requestAnimationFrame(() => {
              r.shadowRoot &&
                ((i = r.shadowRoot.querySelector(
                  `.${e.params.lazyPreloaderClass}`
                )),
                i && i.remove());
            })),
        i && i.remove();
    }
  },
  ku = (e, t) => {
    if (!e.slides[t]) return;
    const n = e.slides[t].querySelector('[loading="lazy"]');
    n && n.removeAttribute("loading");
  },
  id = (e) => {
    if (!e || e.destroyed || !e.params) return;
    let t = e.params.lazyPreloadPrevNext;
    const n = e.slides.length;
    if (!n || !t || t < 0) return;
    t = Math.min(t, n);
    const r =
        e.params.slidesPerView === "auto"
          ? e.slidesPerViewDynamic()
          : Math.ceil(e.params.slidesPerView),
      i = e.activeIndex;
    if (e.params.grid && e.params.grid.rows > 1) {
      const o = i,
        a = [o - t];
      a.push(...Array.from({ length: t }).map((l, c) => o + r + c)),
        e.slides.forEach((l, c) => {
          a.includes(l.column) && ku(e, c);
        });
      return;
    }
    const s = i + r - 1;
    if (e.params.rewind || e.params.loop)
      for (let o = i - t; o <= s + t; o += 1) {
        const a = ((o % n) + n) % n;
        (a < i || a > s) && ku(e, a);
      }
    else
      for (let o = Math.max(i - t, 0); o <= Math.min(s + t, n - 1); o += 1)
        o !== i && (o > s || o < i) && ku(e, o);
  };
function YL(e) {
  const { slidesGrid: t, params: n } = e,
    r = e.rtlTranslate ? e.translate : -e.translate;
  let i;
  for (let s = 0; s < t.length; s += 1)
    typeof t[s + 1] < "u"
      ? r >= t[s] && r < t[s + 1] - (t[s + 1] - t[s]) / 2
        ? (i = s)
        : r >= t[s] && r < t[s + 1] && (i = s + 1)
      : r >= t[s] && (i = s);
  return n.normalizeSlideIndex && (i < 0 || typeof i > "u") && (i = 0), i;
}
function XL(e) {
  const t = this,
    n = t.rtlTranslate ? t.translate : -t.translate,
    { snapGrid: r, params: i, activeIndex: s, realIndex: o, snapIndex: a } = t;
  let l = e,
    c;
  const u = (g) => {
    let y = g - t.virtual.slidesBefore;
    return (
      y < 0 && (y = t.virtual.slides.length + y),
      y >= t.virtual.slides.length && (y -= t.virtual.slides.length),
      y
    );
  };
  if ((typeof l > "u" && (l = YL(t)), r.indexOf(n) >= 0)) c = r.indexOf(n);
  else {
    const g = Math.min(i.slidesPerGroupSkip, l);
    c = g + Math.floor((l - g) / i.slidesPerGroup);
  }
  if ((c >= r.length && (c = r.length - 1), l === s && !t.params.loop)) {
    c !== a && ((t.snapIndex = c), t.emit("snapIndexChange"));
    return;
  }
  if (l === s && t.params.loop && t.virtual && t.params.virtual.enabled) {
    t.realIndex = u(l);
    return;
  }
  const d = t.grid && i.grid && i.grid.rows > 1;
  let f;
  if (t.virtual && i.virtual.enabled && i.loop) f = u(l);
  else if (d) {
    const g = t.slides.filter((w) => w.column === l)[0];
    let y = parseInt(g.getAttribute("data-swiper-slide-index"), 10);
    Number.isNaN(y) && (y = Math.max(t.slides.indexOf(g), 0)),
      (f = Math.floor(y / i.grid.rows));
  } else if (t.slides[l]) {
    const g = t.slides[l].getAttribute("data-swiper-slide-index");
    g ? (f = parseInt(g, 10)) : (f = l);
  } else f = l;
  Object.assign(t, {
    previousSnapIndex: a,
    snapIndex: c,
    previousRealIndex: o,
    realIndex: f,
    previousIndex: s,
    activeIndex: l,
  }),
    t.initialized && id(t),
    t.emit("activeIndexChange"),
    t.emit("snapIndexChange"),
    (t.initialized || t.params.runCallbacksOnInit) &&
      (o !== f && t.emit("realIndexChange"), t.emit("slideChange"));
}
function UL(e, t) {
  const n = this,
    r = n.params;
  let i = e.closest(`.${r.slideClass}, swiper-slide`);
  !i &&
    n.isElement &&
    t &&
    t.length > 1 &&
    t.includes(e) &&
    [...t.slice(t.indexOf(e) + 1, t.length)].forEach((a) => {
      !i && a.matches && a.matches(`.${r.slideClass}, swiper-slide`) && (i = a);
    });
  let s = !1,
    o;
  if (i) {
    for (let a = 0; a < n.slides.length; a += 1)
      if (n.slides[a] === i) {
        (s = !0), (o = a);
        break;
      }
  }
  if (i && s)
    (n.clickedSlide = i),
      n.virtual && n.params.virtual.enabled
        ? (n.clickedIndex = parseInt(
            i.getAttribute("data-swiper-slide-index"),
            10
          ))
        : (n.clickedIndex = o);
  else {
    (n.clickedSlide = void 0), (n.clickedIndex = void 0);
    return;
  }
  r.slideToClickedSlide &&
    n.clickedIndex !== void 0 &&
    n.clickedIndex !== n.activeIndex &&
    n.slideToClickedSlide();
}
var ZL = {
  updateSize: RL,
  updateSlides: BL,
  updateAutoHeight: FL,
  updateSlidesOffset: WL,
  updateSlidesProgress: HL,
  updateProgress: VL,
  updateSlidesClasses: GL,
  updateActiveIndex: XL,
  updateClickedSlide: UL,
};
function KL(e) {
  e === void 0 && (e = this.isHorizontal() ? "x" : "y");
  const t = this,
    { params: n, rtlTranslate: r, translate: i, wrapperEl: s } = t;
  if (n.virtualTranslate) return r ? -i : i;
  if (n.cssMode) return i;
  let o = nd(s, e);
  return (o += t.cssOverflowAdjustment()), r && (o = -o), o || 0;
}
function QL(e, t) {
  const n = this,
    { rtlTranslate: r, params: i, wrapperEl: s, progress: o } = n;
  let a = 0,
    l = 0;
  const c = 0;
  n.isHorizontal() ? (a = r ? -e : e) : (l = e),
    i.roundLengths && ((a = Math.floor(a)), (l = Math.floor(l))),
    (n.previousTranslate = n.translate),
    (n.translate = n.isHorizontal() ? a : l),
    i.cssMode
      ? (s[n.isHorizontal() ? "scrollLeft" : "scrollTop"] = n.isHorizontal()
          ? -a
          : -l)
      : i.virtualTranslate ||
        (n.isHorizontal()
          ? (a -= n.cssOverflowAdjustment())
          : (l -= n.cssOverflowAdjustment()),
        (s.style.transform = `translate3d(${a}px, ${l}px, ${c}px)`));
  let u;
  const d = n.maxTranslate() - n.minTranslate();
  d === 0 ? (u = 0) : (u = (e - n.minTranslate()) / d),
    u !== o && n.updateProgress(e),
    n.emit("setTranslate", n.translate, t);
}
function qL() {
  return -this.snapGrid[0];
}
function JL() {
  return -this.snapGrid[this.snapGrid.length - 1];
}
function e2(e, t, n, r, i) {
  e === void 0 && (e = 0),
    t === void 0 && (t = this.params.speed),
    n === void 0 && (n = !0),
    r === void 0 && (r = !0);
  const s = this,
    { params: o, wrapperEl: a } = s;
  if (s.animating && o.preventInteractionOnTransition) return !1;
  const l = s.minTranslate(),
    c = s.maxTranslate();
  let u;
  if (
    (r && e > l ? (u = l) : r && e < c ? (u = c) : (u = e),
    s.updateProgress(u),
    o.cssMode)
  ) {
    const d = s.isHorizontal();
    if (t === 0) a[d ? "scrollLeft" : "scrollTop"] = -u;
    else {
      if (!s.support.smoothScroll)
        return (
          Bx({ swiper: s, targetPosition: -u, side: d ? "left" : "top" }), !0
        );
      a.scrollTo({ [d ? "left" : "top"]: -u, behavior: "smooth" });
    }
    return !0;
  }
  return (
    t === 0
      ? (s.setTransition(0),
        s.setTranslate(u),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionEnd")))
      : (s.setTransition(t),
        s.setTranslate(u),
        n && (s.emit("beforeTransitionStart", t, i), s.emit("transitionStart")),
        s.animating ||
          ((s.animating = !0),
          s.onTranslateToWrapperTransitionEnd ||
            (s.onTranslateToWrapperTransitionEnd = function (f) {
              !s ||
                s.destroyed ||
                (f.target === this &&
                  (s.wrapperEl.removeEventListener(
                    "transitionend",
                    s.onTranslateToWrapperTransitionEnd
                  ),
                  (s.onTranslateToWrapperTransitionEnd = null),
                  delete s.onTranslateToWrapperTransitionEnd,
                  (s.animating = !1),
                  n && s.emit("transitionEnd")));
            }),
          s.wrapperEl.addEventListener(
            "transitionend",
            s.onTranslateToWrapperTransitionEnd
          ))),
    !0
  );
}
var t2 = {
  getTranslate: KL,
  setTranslate: QL,
  minTranslate: qL,
  maxTranslate: JL,
  translateTo: e2,
};
function n2(e, t) {
  const n = this;
  n.params.cssMode ||
    ((n.wrapperEl.style.transitionDuration = `${e}ms`),
    (n.wrapperEl.style.transitionDelay = e === 0 ? "0ms" : "")),
    n.emit("setTransition", e, t);
}
function Hx(e) {
  let { swiper: t, runCallbacks: n, direction: r, step: i } = e;
  const { activeIndex: s, previousIndex: o } = t;
  let a = r;
  if (
    (a || (s > o ? (a = "next") : s < o ? (a = "prev") : (a = "reset")),
    t.emit(`transition${i}`),
    n && s !== o)
  ) {
    if (a === "reset") {
      t.emit(`slideResetTransition${i}`);
      return;
    }
    t.emit(`slideChangeTransition${i}`),
      a === "next"
        ? t.emit(`slideNextTransition${i}`)
        : t.emit(`slidePrevTransition${i}`);
  }
}
function r2(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  r.cssMode ||
    (r.autoHeight && n.updateAutoHeight(),
    Hx({ swiper: n, runCallbacks: e, direction: t, step: "Start" }));
}
function i2(e, t) {
  e === void 0 && (e = !0);
  const n = this,
    { params: r } = n;
  (n.animating = !1),
    !r.cssMode &&
      (n.setTransition(0),
      Hx({ swiper: n, runCallbacks: e, direction: t, step: "End" }));
}
var s2 = { setTransition: n2, transitionStart: r2, transitionEnd: i2 };
function o2(e, t, n, r, i) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const s = this;
  let o = e;
  o < 0 && (o = 0);
  const {
    params: a,
    snapGrid: l,
    slidesGrid: c,
    previousIndex: u,
    activeIndex: d,
    rtlTranslate: f,
    wrapperEl: g,
    enabled: y,
  } = s;
  if (
    (!y && !r && !i) ||
    s.destroyed ||
    (s.animating && a.preventInteractionOnTransition)
  )
    return !1;
  typeof t > "u" && (t = s.params.speed);
  const w = Math.min(s.params.slidesPerGroupSkip, o);
  let I = w + Math.floor((o - w) / s.params.slidesPerGroup);
  I >= l.length && (I = l.length - 1);
  const v = -l[I];
  if (a.normalizeSlideIndex)
    for (let S = 0; S < c.length; S += 1) {
      const b = -Math.floor(v * 100),
        $ = Math.floor(c[S] * 100),
        T = Math.floor(c[S + 1] * 100);
      typeof c[S + 1] < "u"
        ? b >= $ && b < T - (T - $) / 2
          ? (o = S)
          : b >= $ && b < T && (o = S + 1)
        : b >= $ && (o = S);
    }
  if (
    s.initialized &&
    o !== d &&
    ((!s.allowSlideNext &&
      (f
        ? v > s.translate && v > s.minTranslate()
        : v < s.translate && v < s.minTranslate())) ||
      (!s.allowSlidePrev &&
        v > s.translate &&
        v > s.maxTranslate() &&
        (d || 0) !== o))
  )
    return !1;
  o !== (u || 0) && n && s.emit("beforeSlideChangeStart"), s.updateProgress(v);
  let m;
  o > d ? (m = "next") : o < d ? (m = "prev") : (m = "reset");
  const h = s.virtual && s.params.virtual.enabled;
  if (!(h && i) && ((f && -v === s.translate) || (!f && v === s.translate)))
    return (
      s.updateActiveIndex(o),
      a.autoHeight && s.updateAutoHeight(),
      s.updateSlidesClasses(),
      a.effect !== "slide" && s.setTranslate(v),
      m !== "reset" && (s.transitionStart(n, m), s.transitionEnd(n, m)),
      !1
    );
  if (a.cssMode) {
    const S = s.isHorizontal(),
      b = f ? v : -v;
    if (t === 0)
      h &&
        ((s.wrapperEl.style.scrollSnapType = "none"),
        (s._immediateVirtual = !0)),
        h && !s._cssModeVirtualInitialSet && s.params.initialSlide > 0
          ? ((s._cssModeVirtualInitialSet = !0),
            requestAnimationFrame(() => {
              g[S ? "scrollLeft" : "scrollTop"] = b;
            }))
          : (g[S ? "scrollLeft" : "scrollTop"] = b),
        h &&
          requestAnimationFrame(() => {
            (s.wrapperEl.style.scrollSnapType = ""), (s._immediateVirtual = !1);
          });
    else {
      if (!s.support.smoothScroll)
        return (
          Bx({ swiper: s, targetPosition: b, side: S ? "left" : "top" }), !0
        );
      g.scrollTo({ [S ? "left" : "top"]: b, behavior: "smooth" });
    }
    return !0;
  }
  return (
    s.setTransition(t),
    s.setTranslate(v),
    s.updateActiveIndex(o),
    s.updateSlidesClasses(),
    s.emit("beforeTransitionStart", t, r),
    s.transitionStart(n, m),
    t === 0
      ? s.transitionEnd(n, m)
      : s.animating ||
        ((s.animating = !0),
        s.onSlideToWrapperTransitionEnd ||
          (s.onSlideToWrapperTransitionEnd = function (b) {
            !s ||
              s.destroyed ||
              (b.target === this &&
                (s.wrapperEl.removeEventListener(
                  "transitionend",
                  s.onSlideToWrapperTransitionEnd
                ),
                (s.onSlideToWrapperTransitionEnd = null),
                delete s.onSlideToWrapperTransitionEnd,
                s.transitionEnd(n, m)));
          }),
        s.wrapperEl.addEventListener(
          "transitionend",
          s.onSlideToWrapperTransitionEnd
        )),
    !0
  );
}
function a2(e, t, n, r) {
  e === void 0 && (e = 0),
    n === void 0 && (n = !0),
    typeof e == "string" && (e = parseInt(e, 10));
  const i = this;
  if (i.destroyed) return;
  typeof t > "u" && (t = i.params.speed);
  const s = i.grid && i.params.grid && i.params.grid.rows > 1;
  let o = e;
  if (i.params.loop)
    if (i.virtual && i.params.virtual.enabled) o = o + i.virtual.slidesBefore;
    else {
      let a;
      if (s) {
        const f = o * i.params.grid.rows;
        a = i.slides.filter(
          (g) => g.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else a = i.getSlideIndexByData(o);
      const l = s
          ? Math.ceil(i.slides.length / i.params.grid.rows)
          : i.slides.length,
        { centeredSlides: c } = i.params;
      let u = i.params.slidesPerView;
      u === "auto"
        ? (u = i.slidesPerViewDynamic())
        : ((u = Math.ceil(parseFloat(i.params.slidesPerView, 10))),
          c && u % 2 === 0 && (u = u + 1));
      let d = l - a < u;
      if (
        (c && (d = d || a < Math.ceil(u / 2)),
        r && c && i.params.slidesPerView !== "auto" && !s && (d = !1),
        d)
      ) {
        const f = c
          ? a < i.activeIndex
            ? "prev"
            : "next"
          : a - i.activeIndex - 1 < i.params.slidesPerView
          ? "next"
          : "prev";
        i.loopFix({
          direction: f,
          slideTo: !0,
          activeSlideIndex: f === "next" ? a + 1 : a - l + 1,
          slideRealIndex: f === "next" ? i.realIndex : void 0,
        });
      }
      if (s) {
        const f = o * i.params.grid.rows;
        o = i.slides.filter(
          (g) => g.getAttribute("data-swiper-slide-index") * 1 === f
        )[0].column;
      } else o = i.getSlideIndexByData(o);
    }
  return (
    requestAnimationFrame(() => {
      i.slideTo(o, t, n, r);
    }),
    i
  );
}
function l2(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    { enabled: i, params: s, animating: o } = r;
  if (!i || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  let a = s.slidesPerGroup;
  s.slidesPerView === "auto" &&
    s.slidesPerGroup === 1 &&
    s.slidesPerGroupAuto &&
    (a = Math.max(r.slidesPerViewDynamic("current", !0), 1));
  const l = r.activeIndex < s.slidesPerGroupSkip ? 1 : a,
    c = r.virtual && s.virtual.enabled;
  if (s.loop) {
    if (o && !c && s.loopPreventsSliding) return !1;
    if (
      (r.loopFix({ direction: "next" }),
      (r._clientLeft = r.wrapperEl.clientLeft),
      r.activeIndex === r.slides.length - 1 && s.cssMode)
    )
      return (
        requestAnimationFrame(() => {
          r.slideTo(r.activeIndex + l, e, t, n);
        }),
        !0
      );
  }
  return s.rewind && r.isEnd
    ? r.slideTo(0, e, t, n)
    : r.slideTo(r.activeIndex + l, e, t, n);
}
function u2(e, t, n) {
  t === void 0 && (t = !0);
  const r = this,
    {
      params: i,
      snapGrid: s,
      slidesGrid: o,
      rtlTranslate: a,
      enabled: l,
      animating: c,
    } = r;
  if (!l || r.destroyed) return r;
  typeof e > "u" && (e = r.params.speed);
  const u = r.virtual && i.virtual.enabled;
  if (i.loop) {
    if (c && !u && i.loopPreventsSliding) return !1;
    r.loopFix({ direction: "prev" }), (r._clientLeft = r.wrapperEl.clientLeft);
  }
  const d = a ? r.translate : -r.translate;
  function f(v) {
    return v < 0 ? -Math.floor(Math.abs(v)) : Math.floor(v);
  }
  const g = f(d),
    y = s.map((v) => f(v));
  let w = s[y.indexOf(g) - 1];
  if (typeof w > "u" && i.cssMode) {
    let v;
    s.forEach((m, h) => {
      g >= m && (v = h);
    }),
      typeof v < "u" && (w = s[v > 0 ? v - 1 : v]);
  }
  let I = 0;
  if (
    (typeof w < "u" &&
      ((I = o.indexOf(w)),
      I < 0 && (I = r.activeIndex - 1),
      i.slidesPerView === "auto" &&
        i.slidesPerGroup === 1 &&
        i.slidesPerGroupAuto &&
        ((I = I - r.slidesPerViewDynamic("previous", !0) + 1),
        (I = Math.max(I, 0)))),
    i.rewind && r.isBeginning)
  ) {
    const v =
      r.params.virtual && r.params.virtual.enabled && r.virtual
        ? r.virtual.slides.length - 1
        : r.slides.length - 1;
    return r.slideTo(v, e, t, n);
  } else if (i.loop && r.activeIndex === 0 && i.cssMode)
    return (
      requestAnimationFrame(() => {
        r.slideTo(I, e, t, n);
      }),
      !0
    );
  return r.slideTo(I, e, t, n);
}
function c2(e, t, n) {
  t === void 0 && (t = !0);
  const r = this;
  if (!r.destroyed)
    return (
      typeof e > "u" && (e = r.params.speed), r.slideTo(r.activeIndex, e, t, n)
    );
}
function d2(e, t, n, r) {
  t === void 0 && (t = !0), r === void 0 && (r = 0.5);
  const i = this;
  if (i.destroyed) return;
  typeof e > "u" && (e = i.params.speed);
  let s = i.activeIndex;
  const o = Math.min(i.params.slidesPerGroupSkip, s),
    a = o + Math.floor((s - o) / i.params.slidesPerGroup),
    l = i.rtlTranslate ? i.translate : -i.translate;
  if (l >= i.snapGrid[a]) {
    const c = i.snapGrid[a],
      u = i.snapGrid[a + 1];
    l - c > (u - c) * r && (s += i.params.slidesPerGroup);
  } else {
    const c = i.snapGrid[a - 1],
      u = i.snapGrid[a];
    l - c <= (u - c) * r && (s -= i.params.slidesPerGroup);
  }
  return (
    (s = Math.max(s, 0)),
    (s = Math.min(s, i.slidesGrid.length - 1)),
    i.slideTo(s, e, t, n)
  );
}
function f2() {
  const e = this;
  if (e.destroyed) return;
  const { params: t, slidesEl: n } = e,
    r = t.slidesPerView === "auto" ? e.slidesPerViewDynamic() : t.slidesPerView;
  let i = e.clickedIndex,
    s;
  const o = e.isElement ? "swiper-slide" : `.${t.slideClass}`;
  if (t.loop) {
    if (e.animating) return;
    (s = parseInt(e.clickedSlide.getAttribute("data-swiper-slide-index"), 10)),
      t.centeredSlides
        ? i < e.loopedSlides - r / 2 ||
          i > e.slides.length - e.loopedSlides + r / 2
          ? (e.loopFix(),
            (i = e.getSlideIndex(
              at(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
            )),
            td(() => {
              e.slideTo(i);
            }))
          : e.slideTo(i)
        : i > e.slides.length - r
        ? (e.loopFix(),
          (i = e.getSlideIndex(
            at(n, `${o}[data-swiper-slide-index="${s}"]`)[0]
          )),
          td(() => {
            e.slideTo(i);
          }))
        : e.slideTo(i);
  } else e.slideTo(i);
}
var p2 = {
  slideTo: o2,
  slideToLoop: a2,
  slideNext: l2,
  slidePrev: u2,
  slideReset: c2,
  slideToClosest: d2,
  slideToClickedSlide: f2,
};
function m2(e) {
  const t = this,
    { params: n, slidesEl: r } = t;
  if (!n.loop || (t.virtual && t.params.virtual.enabled)) return;
  const i = () => {
      at(r, `.${n.slideClass}, swiper-slide`).forEach((d, f) => {
        d.setAttribute("data-swiper-slide-index", f);
      });
    },
    s = t.grid && n.grid && n.grid.rows > 1,
    o = n.slidesPerGroup * (s ? n.grid.rows : 1),
    a = t.slides.length % o !== 0,
    l = s && t.slides.length % n.grid.rows !== 0,
    c = (u) => {
      for (let d = 0; d < u; d += 1) {
        const f = t.isElement
          ? Ba("swiper-slide", [n.slideBlankClass])
          : Ba("div", [n.slideClass, n.slideBlankClass]);
        t.slidesEl.append(f);
      }
    };
  if (a) {
    if (n.loopAddBlankSlides) {
      const u = o - (t.slides.length % o);
      c(u), t.recalcSlides(), t.updateSlides();
    } else
      Ra(
        "Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else if (l) {
    if (n.loopAddBlankSlides) {
      const u = n.grid.rows - (t.slides.length % n.grid.rows);
      c(u), t.recalcSlides(), t.updateSlides();
    } else
      Ra(
        "Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)"
      );
    i();
  } else i();
  t.loopFix({
    slideRealIndex: e,
    direction: n.centeredSlides ? void 0 : "next",
  });
}
function v2(e) {
  let {
    slideRealIndex: t,
    slideTo: n = !0,
    direction: r,
    setTranslate: i,
    activeSlideIndex: s,
    byController: o,
    byMousewheel: a,
  } = e === void 0 ? {} : e;
  const l = this;
  if (!l.params.loop) return;
  l.emit("beforeLoopFix");
  const {
      slides: c,
      allowSlidePrev: u,
      allowSlideNext: d,
      slidesEl: f,
      params: g,
    } = l,
    { centeredSlides: y } = g;
  if (
    ((l.allowSlidePrev = !0),
    (l.allowSlideNext = !0),
    l.virtual && g.virtual.enabled)
  ) {
    n &&
      (!g.centeredSlides && l.snapIndex === 0
        ? l.slideTo(l.virtual.slides.length, 0, !1, !0)
        : g.centeredSlides && l.snapIndex < g.slidesPerView
        ? l.slideTo(l.virtual.slides.length + l.snapIndex, 0, !1, !0)
        : l.snapIndex === l.snapGrid.length - 1 &&
          l.slideTo(l.virtual.slidesBefore, 0, !1, !0)),
      (l.allowSlidePrev = u),
      (l.allowSlideNext = d),
      l.emit("loopFix");
    return;
  }
  let w = g.slidesPerView;
  w === "auto"
    ? (w = l.slidesPerViewDynamic())
    : ((w = Math.ceil(parseFloat(g.slidesPerView, 10))),
      y && w % 2 === 0 && (w = w + 1));
  const I = g.slidesPerGroupAuto ? w : g.slidesPerGroup;
  let v = I;
  v % I !== 0 && (v += I - (v % I)),
    (v += g.loopAdditionalSlides),
    (l.loopedSlides = v);
  const m = l.grid && g.grid && g.grid.rows > 1;
  c.length < w + v
    ? Ra(
        "Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled and not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters"
      )
    : m &&
      g.grid.fill === "row" &&
      Ra(
        "Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`"
      );
  const h = [],
    x = [];
  let S = l.activeIndex;
  typeof s > "u"
    ? (s = l.getSlideIndex(
        c.filter((O) => O.classList.contains(g.slideActiveClass))[0]
      ))
    : (S = s);
  const b = r === "next" || !r,
    $ = r === "prev" || !r;
  let T = 0,
    j = 0;
  const P = m ? Math.ceil(c.length / g.grid.rows) : c.length,
    _ = (m ? c[s].column : s) + (y && typeof i > "u" ? -w / 2 + 0.5 : 0);
  if (_ < v) {
    T = Math.max(v - _, I);
    for (let O = 0; O < v - _; O += 1) {
      const z = O - Math.floor(O / P) * P;
      if (m) {
        const F = P - z - 1;
        for (let W = c.length - 1; W >= 0; W -= 1)
          c[W].column === F && h.push(W);
      } else h.push(P - z - 1);
    }
  } else if (_ + w > P - v) {
    j = Math.max(_ - (P - v * 2), I);
    for (let O = 0; O < j; O += 1) {
      const z = O - Math.floor(O / P) * P;
      m
        ? c.forEach((F, W) => {
            F.column === z && x.push(W);
          })
        : x.push(z);
    }
  }
  if (
    ((l.__preventObserver__ = !0),
    requestAnimationFrame(() => {
      l.__preventObserver__ = !1;
    }),
    $ &&
      h.forEach((O) => {
        (c[O].swiperLoopMoveDOM = !0),
          f.prepend(c[O]),
          (c[O].swiperLoopMoveDOM = !1);
      }),
    b &&
      x.forEach((O) => {
        (c[O].swiperLoopMoveDOM = !0),
          f.append(c[O]),
          (c[O].swiperLoopMoveDOM = !1);
      }),
    l.recalcSlides(),
    g.slidesPerView === "auto"
      ? l.updateSlides()
      : m &&
        ((h.length > 0 && $) || (x.length > 0 && b)) &&
        l.slides.forEach((O, z) => {
          l.grid.updateSlide(z, O, l.slides);
        }),
    g.watchSlidesProgress && l.updateSlidesOffset(),
    n)
  ) {
    if (h.length > 0 && $) {
      if (typeof t > "u") {
        const O = l.slidesGrid[S],
          F = l.slidesGrid[S + T] - O;
        a
          ? l.setTranslate(l.translate - F)
          : (l.slideTo(S + Math.ceil(T), 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - F),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - F)));
      } else if (i) {
        const O = m ? h.length / g.grid.rows : h.length;
        l.slideTo(l.activeIndex + O, 0, !1, !0),
          (l.touchEventsData.currentTranslate = l.translate);
      }
    } else if (x.length > 0 && b)
      if (typeof t > "u") {
        const O = l.slidesGrid[S],
          F = l.slidesGrid[S - j] - O;
        a
          ? l.setTranslate(l.translate - F)
          : (l.slideTo(S - j, 0, !1, !0),
            i &&
              ((l.touchEventsData.startTranslate =
                l.touchEventsData.startTranslate - F),
              (l.touchEventsData.currentTranslate =
                l.touchEventsData.currentTranslate - F)));
      } else {
        const O = m ? x.length / g.grid.rows : x.length;
        l.slideTo(l.activeIndex - O, 0, !1, !0);
      }
  }
  if (
    ((l.allowSlidePrev = u),
    (l.allowSlideNext = d),
    l.controller && l.controller.control && !o)
  ) {
    const O = {
      slideRealIndex: t,
      direction: r,
      setTranslate: i,
      activeSlideIndex: s,
      byController: !0,
    };
    Array.isArray(l.controller.control)
      ? l.controller.control.forEach((z) => {
          !z.destroyed &&
            z.params.loop &&
            z.loopFix({
              ...O,
              slideTo: z.params.slidesPerView === g.slidesPerView ? n : !1,
            });
        })
      : l.controller.control instanceof l.constructor &&
        l.controller.control.params.loop &&
        l.controller.control.loopFix({
          ...O,
          slideTo:
            l.controller.control.params.slidesPerView === g.slidesPerView
              ? n
              : !1,
        });
  }
  l.emit("loopFix");
}
function h2() {
  const e = this,
    { params: t, slidesEl: n } = e;
  if (!t.loop || (e.virtual && e.params.virtual.enabled)) return;
  e.recalcSlides();
  const r = [];
  e.slides.forEach((i) => {
    const s =
      typeof i.swiperSlideIndex > "u"
        ? i.getAttribute("data-swiper-slide-index") * 1
        : i.swiperSlideIndex;
    r[s] = i;
  }),
    e.slides.forEach((i) => {
      i.removeAttribute("data-swiper-slide-index");
    }),
    r.forEach((i) => {
      n.append(i);
    }),
    e.recalcSlides(),
    e.slideTo(e.realIndex, 0);
}
var g2 = { loopCreate: m2, loopFix: v2, loopDestroy: h2 };
function y2(e) {
  const t = this;
  if (
    !t.params.simulateTouch ||
    (t.params.watchOverflow && t.isLocked) ||
    t.params.cssMode
  )
    return;
  const n = t.params.touchEventsTarget === "container" ? t.el : t.wrapperEl;
  t.isElement && (t.__preventObserver__ = !0),
    (n.style.cursor = "move"),
    (n.style.cursor = e ? "grabbing" : "grab"),
    t.isElement &&
      requestAnimationFrame(() => {
        t.__preventObserver__ = !1;
      });
}
function w2() {
  const e = this;
  (e.params.watchOverflow && e.isLocked) ||
    e.params.cssMode ||
    (e.isElement && (e.__preventObserver__ = !0),
    (e[
      e.params.touchEventsTarget === "container" ? "el" : "wrapperEl"
    ].style.cursor = ""),
    e.isElement &&
      requestAnimationFrame(() => {
        e.__preventObserver__ = !1;
      }));
}
var x2 = { setGrabCursor: y2, unsetGrabCursor: w2 };
function S2(e, t) {
  t === void 0 && (t = this);
  function n(r) {
    if (!r || r === Ft() || r === Ae()) return null;
    r.assignedSlot && (r = r.assignedSlot);
    const i = r.closest(e);
    return !i && !r.getRootNode ? null : i || n(r.getRootNode().host);
  }
  return n(t);
}
function xh(e, t, n) {
  const r = Ae(),
    { params: i } = e,
    s = i.edgeSwipeDetection,
    o = i.edgeSwipeThreshold;
  return s && (n <= o || n >= r.innerWidth - o)
    ? s === "prevent"
      ? (t.preventDefault(), !0)
      : !1
    : !0;
}
function E2(e) {
  const t = this,
    n = Ft();
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  const i = t.touchEventsData;
  if (r.type === "pointerdown") {
    if (i.pointerId !== null && i.pointerId !== r.pointerId) return;
    i.pointerId = r.pointerId;
  } else
    r.type === "touchstart" &&
      r.targetTouches.length === 1 &&
      (i.touchId = r.targetTouches[0].identifier);
  if (r.type === "touchstart") {
    xh(t, r, r.targetTouches[0].pageX);
    return;
  }
  const { params: s, touches: o, enabled: a } = t;
  if (
    !a ||
    (!s.simulateTouch && r.pointerType === "mouse") ||
    (t.animating && s.preventInteractionOnTransition)
  )
    return;
  !t.animating && s.cssMode && s.loop && t.loopFix();
  let l = r.target;
  if (
    (s.touchEventsTarget === "wrapper" && !$L(l, t.wrapperEl)) ||
    ("which" in r && r.which === 3) ||
    ("button" in r && r.button > 0) ||
    (i.isTouched && i.isMoved)
  )
    return;
  const c = !!s.noSwipingClass && s.noSwipingClass !== "",
    u = r.composedPath ? r.composedPath() : r.path;
  c && r.target && r.target.shadowRoot && u && (l = u[0]);
  const d = s.noSwipingSelector ? s.noSwipingSelector : `.${s.noSwipingClass}`,
    f = !!(r.target && r.target.shadowRoot);
  if (s.noSwiping && (f ? S2(d, l) : l.closest(d))) {
    t.allowClick = !0;
    return;
  }
  if (s.swipeHandler && !l.closest(s.swipeHandler)) return;
  (o.currentX = r.pageX), (o.currentY = r.pageY);
  const g = o.currentX,
    y = o.currentY;
  if (!xh(t, r, g)) return;
  Object.assign(i, {
    isTouched: !0,
    isMoved: !1,
    allowTouchCallbacks: !0,
    isScrolling: void 0,
    startMoving: void 0,
  }),
    (o.startX = g),
    (o.startY = y),
    (i.touchStartTime = za()),
    (t.allowClick = !0),
    t.updateSize(),
    (t.swipeDirection = void 0),
    s.threshold > 0 && (i.allowThresholdMove = !1);
  let w = !0;
  l.matches(i.focusableElements) &&
    ((w = !1), l.nodeName === "SELECT" && (i.isTouched = !1)),
    n.activeElement &&
      n.activeElement.matches(i.focusableElements) &&
      n.activeElement !== l &&
      (r.pointerType === "mouse" ||
        (r.pointerType !== "mouse" && !l.matches(i.focusableElements))) &&
      n.activeElement.blur();
  const I = w && t.allowTouchMove && s.touchStartPreventDefault;
  (s.touchStartForcePreventDefault || I) &&
    !l.isContentEditable &&
    r.preventDefault(),
    s.freeMode &&
      s.freeMode.enabled &&
      t.freeMode &&
      t.animating &&
      !s.cssMode &&
      t.freeMode.onTouchStart(),
    t.emit("touchStart", r);
}
function I2(e) {
  const t = Ft(),
    n = this,
    r = n.touchEventsData,
    { params: i, touches: s, rtlTranslate: o, enabled: a } = n;
  if (!a || (!i.simulateTouch && e.pointerType === "mouse")) return;
  let l = e;
  if (
    (l.originalEvent && (l = l.originalEvent),
    l.type === "pointermove" &&
      (r.touchId !== null || l.pointerId !== r.pointerId))
  )
    return;
  let c;
  if (l.type === "touchmove") {
    if (
      ((c = [...l.changedTouches].filter((b) => b.identifier === r.touchId)[0]),
      !c || c.identifier !== r.touchId)
    )
      return;
  } else c = l;
  if (!r.isTouched) {
    r.startMoving && r.isScrolling && n.emit("touchMoveOpposite", l);
    return;
  }
  const u = c.pageX,
    d = c.pageY;
  if (l.preventedByNestedSwiper) {
    (s.startX = u), (s.startY = d);
    return;
  }
  if (!n.allowTouchMove) {
    l.target.matches(r.focusableElements) || (n.allowClick = !1),
      r.isTouched &&
        (Object.assign(s, { startX: u, startY: d, currentX: u, currentY: d }),
        (r.touchStartTime = za()));
    return;
  }
  if (i.touchReleaseOnEdges && !i.loop) {
    if (n.isVertical()) {
      if (
        (d < s.startY && n.translate <= n.maxTranslate()) ||
        (d > s.startY && n.translate >= n.minTranslate())
      ) {
        (r.isTouched = !1), (r.isMoved = !1);
        return;
      }
    } else if (
      (u < s.startX && n.translate <= n.maxTranslate()) ||
      (u > s.startX && n.translate >= n.minTranslate())
    )
      return;
  }
  if (
    (t.activeElement &&
      t.activeElement.matches(r.focusableElements) &&
      t.activeElement !== l.target &&
      l.pointerType !== "mouse" &&
      t.activeElement.blur(),
    t.activeElement &&
      l.target === t.activeElement &&
      l.target.matches(r.focusableElements))
  ) {
    (r.isMoved = !0), (n.allowClick = !1);
    return;
  }
  r.allowTouchCallbacks && n.emit("touchMove", l),
    (s.previousX = s.currentX),
    (s.previousY = s.currentY),
    (s.currentX = u),
    (s.currentY = d);
  const f = s.currentX - s.startX,
    g = s.currentY - s.startY;
  if (n.params.threshold && Math.sqrt(f ** 2 + g ** 2) < n.params.threshold)
    return;
  if (typeof r.isScrolling > "u") {
    let b;
    (n.isHorizontal() && s.currentY === s.startY) ||
    (n.isVertical() && s.currentX === s.startX)
      ? (r.isScrolling = !1)
      : f * f + g * g >= 25 &&
        ((b = (Math.atan2(Math.abs(g), Math.abs(f)) * 180) / Math.PI),
        (r.isScrolling = n.isHorizontal()
          ? b > i.touchAngle
          : 90 - b > i.touchAngle));
  }
  if (
    (r.isScrolling && n.emit("touchMoveOpposite", l),
    typeof r.startMoving > "u" &&
      (s.currentX !== s.startX || s.currentY !== s.startY) &&
      (r.startMoving = !0),
    r.isScrolling ||
      (l.type === "touchmove" && r.preventTouchMoveFromPointerMove))
  ) {
    r.isTouched = !1;
    return;
  }
  if (!r.startMoving) return;
  (n.allowClick = !1),
    !i.cssMode && l.cancelable && l.preventDefault(),
    i.touchMoveStopPropagation && !i.nested && l.stopPropagation();
  let y = n.isHorizontal() ? f : g,
    w = n.isHorizontal() ? s.currentX - s.previousX : s.currentY - s.previousY;
  i.oneWayMovement &&
    ((y = Math.abs(y) * (o ? 1 : -1)), (w = Math.abs(w) * (o ? 1 : -1))),
    (s.diff = y),
    (y *= i.touchRatio),
    o && ((y = -y), (w = -w));
  const I = n.touchesDirection;
  (n.swipeDirection = y > 0 ? "prev" : "next"),
    (n.touchesDirection = w > 0 ? "prev" : "next");
  const v = n.params.loop && !i.cssMode,
    m =
      (n.touchesDirection === "next" && n.allowSlideNext) ||
      (n.touchesDirection === "prev" && n.allowSlidePrev);
  if (!r.isMoved) {
    if (
      (v && m && n.loopFix({ direction: n.swipeDirection }),
      (r.startTranslate = n.getTranslate()),
      n.setTransition(0),
      n.animating)
    ) {
      const b = new window.CustomEvent("transitionend", {
        bubbles: !0,
        cancelable: !0,
        detail: { bySwiperTouchMove: !0 },
      });
      n.wrapperEl.dispatchEvent(b);
    }
    (r.allowMomentumBounce = !1),
      i.grabCursor &&
        (n.allowSlideNext === !0 || n.allowSlidePrev === !0) &&
        n.setGrabCursor(!0),
      n.emit("sliderFirstMove", l);
  }
  let h;
  if (
    (new Date().getTime(),
    r.isMoved &&
      r.allowThresholdMove &&
      I !== n.touchesDirection &&
      v &&
      m &&
      Math.abs(y) >= 1)
  ) {
    Object.assign(s, {
      startX: u,
      startY: d,
      currentX: u,
      currentY: d,
      startTranslate: r.currentTranslate,
    }),
      (r.loopSwapReset = !0),
      (r.startTranslate = r.currentTranslate);
    return;
  }
  n.emit("sliderMove", l),
    (r.isMoved = !0),
    (r.currentTranslate = y + r.startTranslate);
  let x = !0,
    S = i.resistanceRatio;
  if (
    (i.touchReleaseOnEdges && (S = 0),
    y > 0
      ? (v &&
          m &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate >
            (i.centeredSlides
              ? n.minTranslate() -
                n.slidesSizesGrid[n.activeIndex + 1] -
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.activeIndex + 1] + n.params.spaceBetween
                  : 0) -
                n.params.spaceBetween
              : n.minTranslate()) &&
          n.loopFix({
            direction: "prev",
            setTranslate: !0,
            activeSlideIndex: 0,
          }),
        r.currentTranslate > n.minTranslate() &&
          ((x = !1),
          i.resistance &&
            (r.currentTranslate =
              n.minTranslate() -
              1 +
              (-n.minTranslate() + r.startTranslate + y) ** S)))
      : y < 0 &&
        (v &&
          m &&
          !h &&
          r.allowThresholdMove &&
          r.currentTranslate <
            (i.centeredSlides
              ? n.maxTranslate() +
                n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                n.params.spaceBetween +
                (i.slidesPerView !== "auto" &&
                n.slides.length - i.slidesPerView >= 2
                  ? n.slidesSizesGrid[n.slidesSizesGrid.length - 1] +
                    n.params.spaceBetween
                  : 0)
              : n.maxTranslate()) &&
          n.loopFix({
            direction: "next",
            setTranslate: !0,
            activeSlideIndex:
              n.slides.length -
              (i.slidesPerView === "auto"
                ? n.slidesPerViewDynamic()
                : Math.ceil(parseFloat(i.slidesPerView, 10))),
          }),
        r.currentTranslate < n.maxTranslate() &&
          ((x = !1),
          i.resistance &&
            (r.currentTranslate =
              n.maxTranslate() +
              1 -
              (n.maxTranslate() - r.startTranslate - y) ** S))),
    x && (l.preventedByNestedSwiper = !0),
    !n.allowSlideNext &&
      n.swipeDirection === "next" &&
      r.currentTranslate < r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      n.swipeDirection === "prev" &&
      r.currentTranslate > r.startTranslate &&
      (r.currentTranslate = r.startTranslate),
    !n.allowSlidePrev &&
      !n.allowSlideNext &&
      (r.currentTranslate = r.startTranslate),
    i.threshold > 0)
  )
    if (Math.abs(y) > i.threshold || r.allowThresholdMove) {
      if (!r.allowThresholdMove) {
        (r.allowThresholdMove = !0),
          (s.startX = s.currentX),
          (s.startY = s.currentY),
          (r.currentTranslate = r.startTranslate),
          (s.diff = n.isHorizontal()
            ? s.currentX - s.startX
            : s.currentY - s.startY);
        return;
      }
    } else {
      r.currentTranslate = r.startTranslate;
      return;
    }
  !i.followFinger ||
    i.cssMode ||
    (((i.freeMode && i.freeMode.enabled && n.freeMode) ||
      i.watchSlidesProgress) &&
      (n.updateActiveIndex(), n.updateSlidesClasses()),
    i.freeMode && i.freeMode.enabled && n.freeMode && n.freeMode.onTouchMove(),
    n.updateProgress(r.currentTranslate),
    n.setTranslate(r.currentTranslate));
}
function T2(e) {
  const t = this,
    n = t.touchEventsData;
  let r = e;
  r.originalEvent && (r = r.originalEvent);
  let i;
  if (r.type === "touchend" || r.type === "touchcancel") {
    if (
      ((i = [...r.changedTouches].filter((S) => S.identifier === n.touchId)[0]),
      !i || i.identifier !== n.touchId)
    )
      return;
  } else {
    if (n.touchId !== null || r.pointerId !== n.pointerId) return;
    i = r;
  }
  if (
    ["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(
      r.type
    ) &&
    !(
      ["pointercancel", "contextmenu"].includes(r.type) &&
      (t.browser.isSafari || t.browser.isWebView)
    )
  )
    return;
  (n.pointerId = null), (n.touchId = null);
  const {
    params: o,
    touches: a,
    rtlTranslate: l,
    slidesGrid: c,
    enabled: u,
  } = t;
  if (!u || (!o.simulateTouch && r.pointerType === "mouse")) return;
  if (
    (n.allowTouchCallbacks && t.emit("touchEnd", r),
    (n.allowTouchCallbacks = !1),
    !n.isTouched)
  ) {
    n.isMoved && o.grabCursor && t.setGrabCursor(!1),
      (n.isMoved = !1),
      (n.startMoving = !1);
    return;
  }
  o.grabCursor &&
    n.isMoved &&
    n.isTouched &&
    (t.allowSlideNext === !0 || t.allowSlidePrev === !0) &&
    t.setGrabCursor(!1);
  const d = za(),
    f = d - n.touchStartTime;
  if (t.allowClick) {
    const S = r.path || (r.composedPath && r.composedPath());
    t.updateClickedSlide((S && S[0]) || r.target, S),
      t.emit("tap click", r),
      f < 300 &&
        d - n.lastClickTime < 300 &&
        t.emit("doubleTap doubleClick", r);
  }
  if (
    ((n.lastClickTime = za()),
    td(() => {
      t.destroyed || (t.allowClick = !0);
    }),
    !n.isTouched ||
      !n.isMoved ||
      !t.swipeDirection ||
      (a.diff === 0 && !n.loopSwapReset) ||
      (n.currentTranslate === n.startTranslate && !n.loopSwapReset))
  ) {
    (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
    return;
  }
  (n.isTouched = !1), (n.isMoved = !1), (n.startMoving = !1);
  let g;
  if (
    (o.followFinger
      ? (g = l ? t.translate : -t.translate)
      : (g = -n.currentTranslate),
    o.cssMode)
  )
    return;
  if (o.freeMode && o.freeMode.enabled) {
    t.freeMode.onTouchEnd({ currentPos: g });
    return;
  }
  const y = g >= -t.maxTranslate() && !t.params.loop;
  let w = 0,
    I = t.slidesSizesGrid[0];
  for (
    let S = 0;
    S < c.length;
    S += S < o.slidesPerGroupSkip ? 1 : o.slidesPerGroup
  ) {
    const b = S < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
    typeof c[S + b] < "u"
      ? (y || (g >= c[S] && g < c[S + b])) && ((w = S), (I = c[S + b] - c[S]))
      : (y || g >= c[S]) && ((w = S), (I = c[c.length - 1] - c[c.length - 2]));
  }
  let v = null,
    m = null;
  o.rewind &&
    (t.isBeginning
      ? (m =
          o.virtual && o.virtual.enabled && t.virtual
            ? t.virtual.slides.length - 1
            : t.slides.length - 1)
      : t.isEnd && (v = 0));
  const h = (g - c[w]) / I,
    x = w < o.slidesPerGroupSkip - 1 ? 1 : o.slidesPerGroup;
  if (f > o.longSwipesMs) {
    if (!o.longSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.swipeDirection === "next" &&
      (h >= o.longSwipesRatio
        ? t.slideTo(o.rewind && t.isEnd ? v : w + x)
        : t.slideTo(w)),
      t.swipeDirection === "prev" &&
        (h > 1 - o.longSwipesRatio
          ? t.slideTo(w + x)
          : m !== null && h < 0 && Math.abs(h) > o.longSwipesRatio
          ? t.slideTo(m)
          : t.slideTo(w));
  } else {
    if (!o.shortSwipes) {
      t.slideTo(t.activeIndex);
      return;
    }
    t.navigation &&
    (r.target === t.navigation.nextEl || r.target === t.navigation.prevEl)
      ? r.target === t.navigation.nextEl
        ? t.slideTo(w + x)
        : t.slideTo(w)
      : (t.swipeDirection === "next" && t.slideTo(v !== null ? v : w + x),
        t.swipeDirection === "prev" && t.slideTo(m !== null ? m : w));
  }
}
function Sh() {
  const e = this,
    { params: t, el: n } = e;
  if (n && n.offsetWidth === 0) return;
  t.breakpoints && e.setBreakpoint();
  const { allowSlideNext: r, allowSlidePrev: i, snapGrid: s } = e,
    o = e.virtual && e.params.virtual.enabled;
  (e.allowSlideNext = !0),
    (e.allowSlidePrev = !0),
    e.updateSize(),
    e.updateSlides(),
    e.updateSlidesClasses();
  const a = o && t.loop;
  (t.slidesPerView === "auto" || t.slidesPerView > 1) &&
  e.isEnd &&
  !e.isBeginning &&
  !e.params.centeredSlides &&
  !a
    ? e.slideTo(e.slides.length - 1, 0, !1, !0)
    : e.params.loop && !o
    ? e.slideToLoop(e.realIndex, 0, !1, !0)
    : e.slideTo(e.activeIndex, 0, !1, !0),
    e.autoplay &&
      e.autoplay.running &&
      e.autoplay.paused &&
      (clearTimeout(e.autoplay.resizeTimeout),
      (e.autoplay.resizeTimeout = setTimeout(() => {
        e.autoplay &&
          e.autoplay.running &&
          e.autoplay.paused &&
          e.autoplay.resume();
      }, 500))),
    (e.allowSlidePrev = i),
    (e.allowSlideNext = r),
    e.params.watchOverflow && s !== e.snapGrid && e.checkOverflow();
}
function C2(e) {
  const t = this;
  t.enabled &&
    (t.allowClick ||
      (t.params.preventClicks && e.preventDefault(),
      t.params.preventClicksPropagation &&
        t.animating &&
        (e.stopPropagation(), e.stopImmediatePropagation())));
}
function b2() {
  const e = this,
    { wrapperEl: t, rtlTranslate: n, enabled: r } = e;
  if (!r) return;
  (e.previousTranslate = e.translate),
    e.isHorizontal()
      ? (e.translate = -t.scrollLeft)
      : (e.translate = -t.scrollTop),
    e.translate === 0 && (e.translate = 0),
    e.updateActiveIndex(),
    e.updateSlidesClasses();
  let i;
  const s = e.maxTranslate() - e.minTranslate();
  s === 0 ? (i = 0) : (i = (e.translate - e.minTranslate()) / s),
    i !== e.progress && e.updateProgress(n ? -e.translate : e.translate),
    e.emit("setTranslate", e.translate, !1);
}
function P2(e) {
  const t = this;
  sa(t, e.target),
    !(
      t.params.cssMode ||
      (t.params.slidesPerView !== "auto" && !t.params.autoHeight)
    ) && t.update();
}
function j2() {
  const e = this;
  e.documentTouchHandlerProceeded ||
    ((e.documentTouchHandlerProceeded = !0),
    e.params.touchReleaseOnEdges && (e.el.style.touchAction = "auto"));
}
const Vx = (e, t) => {
  const n = Ft(),
    { params: r, el: i, wrapperEl: s, device: o } = e,
    a = !!r.nested,
    l = t === "on" ? "addEventListener" : "removeEventListener",
    c = t;
  !i ||
    typeof i == "string" ||
    (n[l]("touchstart", e.onDocumentTouchStart, { passive: !1, capture: a }),
    i[l]("touchstart", e.onTouchStart, { passive: !1 }),
    i[l]("pointerdown", e.onTouchStart, { passive: !1 }),
    n[l]("touchmove", e.onTouchMove, { passive: !1, capture: a }),
    n[l]("pointermove", e.onTouchMove, { passive: !1, capture: a }),
    n[l]("touchend", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerup", e.onTouchEnd, { passive: !0 }),
    n[l]("pointercancel", e.onTouchEnd, { passive: !0 }),
    n[l]("touchcancel", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerout", e.onTouchEnd, { passive: !0 }),
    n[l]("pointerleave", e.onTouchEnd, { passive: !0 }),
    n[l]("contextmenu", e.onTouchEnd, { passive: !0 }),
    (r.preventClicks || r.preventClicksPropagation) &&
      i[l]("click", e.onClick, !0),
    r.cssMode && s[l]("scroll", e.onScroll),
    r.updateOnWindowResize
      ? e[c](
          o.ios || o.android
            ? "resize orientationchange observerUpdate"
            : "resize observerUpdate",
          Sh,
          !0
        )
      : e[c]("observerUpdate", Sh, !0),
    i[l]("load", e.onLoad, { capture: !0 }));
};
function $2() {
  const e = this,
    { params: t } = e;
  (e.onTouchStart = E2.bind(e)),
    (e.onTouchMove = I2.bind(e)),
    (e.onTouchEnd = T2.bind(e)),
    (e.onDocumentTouchStart = j2.bind(e)),
    t.cssMode && (e.onScroll = b2.bind(e)),
    (e.onClick = C2.bind(e)),
    (e.onLoad = P2.bind(e)),
    Vx(e, "on");
}
function _2() {
  Vx(this, "off");
}
var O2 = { attachEvents: $2, detachEvents: _2 };
const Eh = (e, t) => e.grid && t.grid && t.grid.rows > 1;
function M2() {
  const e = this,
    { realIndex: t, initialized: n, params: r, el: i } = e,
    s = r.breakpoints;
  if (!s || (s && Object.keys(s).length === 0)) return;
  const o = e.getBreakpoint(s, e.params.breakpointsBase, e.el);
  if (!o || e.currentBreakpoint === o) return;
  const l = (o in s ? s[o] : void 0) || e.originalParams,
    c = Eh(e, r),
    u = Eh(e, l),
    d = e.params.grabCursor,
    f = l.grabCursor,
    g = r.enabled;
  c && !u
    ? (i.classList.remove(
        `${r.containerModifierClass}grid`,
        `${r.containerModifierClass}grid-column`
      ),
      e.emitContainerClasses())
    : !c &&
      u &&
      (i.classList.add(`${r.containerModifierClass}grid`),
      ((l.grid.fill && l.grid.fill === "column") ||
        (!l.grid.fill && r.grid.fill === "column")) &&
        i.classList.add(`${r.containerModifierClass}grid-column`),
      e.emitContainerClasses()),
    d && !f ? e.unsetGrabCursor() : !d && f && e.setGrabCursor(),
    ["navigation", "pagination", "scrollbar"].forEach((h) => {
      if (typeof l[h] > "u") return;
      const x = r[h] && r[h].enabled,
        S = l[h] && l[h].enabled;
      x && !S && e[h].disable(), !x && S && e[h].enable();
    });
  const y = l.direction && l.direction !== r.direction,
    w = r.loop && (l.slidesPerView !== r.slidesPerView || y),
    I = r.loop;
  y && n && e.changeDirection(), Ye(e.params, l);
  const v = e.params.enabled,
    m = e.params.loop;
  Object.assign(e, {
    allowTouchMove: e.params.allowTouchMove,
    allowSlideNext: e.params.allowSlideNext,
    allowSlidePrev: e.params.allowSlidePrev,
  }),
    g && !v ? e.disable() : !g && v && e.enable(),
    (e.currentBreakpoint = o),
    e.emit("_beforeBreakpoint", l),
    n &&
      (w
        ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides())
        : !I && m
        ? (e.loopCreate(t), e.updateSlides())
        : I && !m && e.loopDestroy()),
    e.emit("breakpoint", l);
}
function N2(e, t, n) {
  if ((t === void 0 && (t = "window"), !e || (t === "container" && !n))) return;
  let r = !1;
  const i = Ae(),
    s = t === "window" ? i.innerHeight : n.clientHeight,
    o = Object.keys(e).map((a) => {
      if (typeof a == "string" && a.indexOf("@") === 0) {
        const l = parseFloat(a.substr(1));
        return { value: s * l, point: a };
      }
      return { value: a, point: a };
    });
  o.sort((a, l) => parseInt(a.value, 10) - parseInt(l.value, 10));
  for (let a = 0; a < o.length; a += 1) {
    const { point: l, value: c } = o[a];
    t === "window"
      ? i.matchMedia(`(min-width: ${c}px)`).matches && (r = l)
      : c <= n.clientWidth && (r = l);
  }
  return r || "max";
}
var k2 = { setBreakpoint: M2, getBreakpoint: N2 };
function A2(e, t) {
  const n = [];
  return (
    e.forEach((r) => {
      typeof r == "object"
        ? Object.keys(r).forEach((i) => {
            r[i] && n.push(t + i);
          })
        : typeof r == "string" && n.push(t + r);
    }),
    n
  );
}
function L2() {
  const e = this,
    { classNames: t, params: n, rtl: r, el: i, device: s } = e,
    o = A2(
      [
        "initialized",
        n.direction,
        { "free-mode": e.params.freeMode && n.freeMode.enabled },
        { autoheight: n.autoHeight },
        { rtl: r },
        { grid: n.grid && n.grid.rows > 1 },
        {
          "grid-column": n.grid && n.grid.rows > 1 && n.grid.fill === "column",
        },
        { android: s.android },
        { ios: s.ios },
        { "css-mode": n.cssMode },
        { centered: n.cssMode && n.centeredSlides },
        { "watch-progress": n.watchSlidesProgress },
      ],
      n.containerModifierClass
    );
  t.push(...o), i.classList.add(...t), e.emitContainerClasses();
}
function D2() {
  const e = this,
    { el: t, classNames: n } = e;
  !t ||
    typeof t == "string" ||
    (t.classList.remove(...n), e.emitContainerClasses());
}
var z2 = { addClasses: L2, removeClasses: D2 };
function R2() {
  const e = this,
    { isLocked: t, params: n } = e,
    { slidesOffsetBefore: r } = n;
  if (r) {
    const i = e.slides.length - 1,
      s = e.slidesGrid[i] + e.slidesSizesGrid[i] + r * 2;
    e.isLocked = e.size > s;
  } else e.isLocked = e.snapGrid.length === 1;
  n.allowSlideNext === !0 && (e.allowSlideNext = !e.isLocked),
    n.allowSlidePrev === !0 && (e.allowSlidePrev = !e.isLocked),
    t && t !== e.isLocked && (e.isEnd = !1),
    t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
}
var B2 = { checkOverflow: R2 },
  sd = {
    init: !0,
    direction: "horizontal",
    oneWayMovement: !1,
    swiperElementNodeName: "SWIPER-CONTAINER",
    touchEventsTarget: "wrapper",
    initialSlide: 0,
    speed: 300,
    cssMode: !1,
    updateOnWindowResize: !0,
    resizeObserver: !0,
    nested: !1,
    createElements: !1,
    eventsPrefix: "swiper",
    enabled: !0,
    focusableElements: "input, select, option, textarea, button, video, label",
    width: null,
    height: null,
    preventInteractionOnTransition: !1,
    userAgent: null,
    url: null,
    edgeSwipeDetection: !1,
    edgeSwipeThreshold: 20,
    autoHeight: !1,
    setWrapperSize: !1,
    virtualTranslate: !1,
    effect: "slide",
    breakpoints: void 0,
    breakpointsBase: "window",
    spaceBetween: 0,
    slidesPerView: 1,
    slidesPerGroup: 1,
    slidesPerGroupSkip: 0,
    slidesPerGroupAuto: !1,
    centeredSlides: !1,
    centeredSlidesBounds: !1,
    slidesOffsetBefore: 0,
    slidesOffsetAfter: 0,
    normalizeSlideIndex: !0,
    centerInsufficientSlides: !1,
    watchOverflow: !0,
    roundLengths: !1,
    touchRatio: 1,
    touchAngle: 45,
    simulateTouch: !0,
    shortSwipes: !0,
    longSwipes: !0,
    longSwipesRatio: 0.5,
    longSwipesMs: 300,
    followFinger: !0,
    allowTouchMove: !0,
    threshold: 5,
    touchMoveStopPropagation: !1,
    touchStartPreventDefault: !0,
    touchStartForcePreventDefault: !1,
    touchReleaseOnEdges: !1,
    uniqueNavElements: !0,
    resistance: !0,
    resistanceRatio: 0.85,
    watchSlidesProgress: !1,
    grabCursor: !1,
    preventClicks: !0,
    preventClicksPropagation: !0,
    slideToClickedSlide: !1,
    loop: !1,
    loopAddBlankSlides: !0,
    loopAdditionalSlides: 0,
    loopPreventsSliding: !0,
    rewind: !1,
    allowSlidePrev: !0,
    allowSlideNext: !0,
    swipeHandler: null,
    noSwiping: !0,
    noSwipingClass: "swiper-no-swiping",
    noSwipingSelector: null,
    passiveListeners: !0,
    maxBackfaceHiddenSlides: 10,
    containerModifierClass: "swiper-",
    slideClass: "swiper-slide",
    slideBlankClass: "swiper-slide-blank",
    slideActiveClass: "swiper-slide-active",
    slideVisibleClass: "swiper-slide-visible",
    slideFullyVisibleClass: "swiper-slide-fully-visible",
    slideNextClass: "swiper-slide-next",
    slidePrevClass: "swiper-slide-prev",
    wrapperClass: "swiper-wrapper",
    lazyPreloaderClass: "swiper-lazy-preloader",
    lazyPreloadPrevNext: 0,
    runCallbacksOnInit: !0,
    _emitClasses: !1,
  };
function F2(e, t) {
  return function (r) {
    r === void 0 && (r = {});
    const i = Object.keys(r)[0],
      s = r[i];
    if (typeof s != "object" || s === null) {
      Ye(t, r);
      return;
    }
    if (
      (e[i] === !0 && (e[i] = { enabled: !0 }),
      i === "navigation" &&
        e[i] &&
        e[i].enabled &&
        !e[i].prevEl &&
        !e[i].nextEl &&
        (e[i].auto = !0),
      ["pagination", "scrollbar"].indexOf(i) >= 0 &&
        e[i] &&
        e[i].enabled &&
        !e[i].el &&
        (e[i].auto = !0),
      !(i in e && "enabled" in s))
    ) {
      Ye(t, r);
      return;
    }
    typeof e[i] == "object" && !("enabled" in e[i]) && (e[i].enabled = !0),
      e[i] || (e[i] = { enabled: !1 }),
      Ye(t, r);
  };
}
const Au = {
    eventsEmitter: zL,
    update: ZL,
    translate: t2,
    transition: s2,
    slide: p2,
    loop: g2,
    grabCursor: x2,
    events: O2,
    breakpoints: k2,
    checkOverflow: B2,
    classes: z2,
  },
  Lu = {};
let Qf = class Zt {
  constructor() {
    let t, n;
    for (var r = arguments.length, i = new Array(r), s = 0; s < r; s++)
      i[s] = arguments[s];
    i.length === 1 &&
    i[0].constructor &&
    Object.prototype.toString.call(i[0]).slice(8, -1) === "Object"
      ? (n = i[0])
      : ([t, n] = i),
      n || (n = {}),
      (n = Ye({}, n)),
      t && !n.el && (n.el = t);
    const o = Ft();
    if (
      n.el &&
      typeof n.el == "string" &&
      o.querySelectorAll(n.el).length > 1
    ) {
      const u = [];
      return (
        o.querySelectorAll(n.el).forEach((d) => {
          const f = Ye({}, n, { el: d });
          u.push(new Zt(f));
        }),
        u
      );
    }
    const a = this;
    (a.__swiper__ = !0),
      (a.support = Fx()),
      (a.device = Wx({ userAgent: n.userAgent })),
      (a.browser = AL()),
      (a.eventsListeners = {}),
      (a.eventsAnyListeners = []),
      (a.modules = [...a.__modules__]),
      n.modules && Array.isArray(n.modules) && a.modules.push(...n.modules);
    const l = {};
    a.modules.forEach((u) => {
      u({
        params: n,
        swiper: a,
        extendParams: F2(n, l),
        on: a.on.bind(a),
        once: a.once.bind(a),
        off: a.off.bind(a),
        emit: a.emit.bind(a),
      });
    });
    const c = Ye({}, sd, l);
    return (
      (a.params = Ye({}, c, Lu, n)),
      (a.originalParams = Ye({}, a.params)),
      (a.passedParams = Ye({}, n)),
      a.params &&
        a.params.on &&
        Object.keys(a.params.on).forEach((u) => {
          a.on(u, a.params.on[u]);
        }),
      a.params && a.params.onAny && a.onAny(a.params.onAny),
      Object.assign(a, {
        enabled: a.params.enabled,
        el: t,
        classNames: [],
        slides: [],
        slidesGrid: [],
        snapGrid: [],
        slidesSizesGrid: [],
        isHorizontal() {
          return a.params.direction === "horizontal";
        },
        isVertical() {
          return a.params.direction === "vertical";
        },
        activeIndex: 0,
        realIndex: 0,
        isBeginning: !0,
        isEnd: !1,
        translate: 0,
        previousTranslate: 0,
        progress: 0,
        velocity: 0,
        animating: !1,
        cssOverflowAdjustment() {
          return Math.trunc(this.translate / 2 ** 23) * 2 ** 23;
        },
        allowSlideNext: a.params.allowSlideNext,
        allowSlidePrev: a.params.allowSlidePrev,
        touchEventsData: {
          isTouched: void 0,
          isMoved: void 0,
          allowTouchCallbacks: void 0,
          touchStartTime: void 0,
          isScrolling: void 0,
          currentTranslate: void 0,
          startTranslate: void 0,
          allowThresholdMove: void 0,
          focusableElements: a.params.focusableElements,
          lastClickTime: 0,
          clickTimeout: void 0,
          velocities: [],
          allowMomentumBounce: void 0,
          startMoving: void 0,
          pointerId: null,
          touchId: null,
        },
        allowClick: !0,
        allowTouchMove: a.params.allowTouchMove,
        touches: { startX: 0, startY: 0, currentX: 0, currentY: 0, diff: 0 },
        imagesToLoad: [],
        imagesLoaded: 0,
      }),
      a.emit("_swiper"),
      a.params.init && a.init(),
      a
    );
  }
  getDirectionLabel(t) {
    return this.isHorizontal()
      ? t
      : {
          width: "height",
          "margin-top": "margin-left",
          "margin-bottom ": "margin-right",
          "margin-left": "margin-top",
          "margin-right": "margin-bottom",
          "padding-left": "padding-top",
          "padding-right": "padding-bottom",
          marginRight: "marginBottom",
        }[t];
  }
  getSlideIndex(t) {
    const { slidesEl: n, params: r } = this,
      i = at(n, `.${r.slideClass}, swiper-slide`),
      s = Fa(i[0]);
    return Fa(t) - s;
  }
  getSlideIndexByData(t) {
    return this.getSlideIndex(
      this.slides.filter(
        (n) => n.getAttribute("data-swiper-slide-index") * 1 === t
      )[0]
    );
  }
  recalcSlides() {
    const t = this,
      { slidesEl: n, params: r } = t;
    t.slides = at(n, `.${r.slideClass}, swiper-slide`);
  }
  enable() {
    const t = this;
    t.enabled ||
      ((t.enabled = !0),
      t.params.grabCursor && t.setGrabCursor(),
      t.emit("enable"));
  }
  disable() {
    const t = this;
    t.enabled &&
      ((t.enabled = !1),
      t.params.grabCursor && t.unsetGrabCursor(),
      t.emit("disable"));
  }
  setProgress(t, n) {
    const r = this;
    t = Math.min(Math.max(t, 0), 1);
    const i = r.minTranslate(),
      o = (r.maxTranslate() - i) * t + i;
    r.translateTo(o, typeof n > "u" ? 0 : n),
      r.updateActiveIndex(),
      r.updateSlidesClasses();
  }
  emitContainerClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = t.el.className
      .split(" ")
      .filter(
        (r) =>
          r.indexOf("swiper") === 0 ||
          r.indexOf(t.params.containerModifierClass) === 0
      );
    t.emit("_containerClasses", n.join(" "));
  }
  getSlideClasses(t) {
    const n = this;
    return n.destroyed
      ? ""
      : t.className
          .split(" ")
          .filter(
            (r) =>
              r.indexOf("swiper-slide") === 0 ||
              r.indexOf(n.params.slideClass) === 0
          )
          .join(" ");
  }
  emitSlidesClasses() {
    const t = this;
    if (!t.params._emitClasses || !t.el) return;
    const n = [];
    t.slides.forEach((r) => {
      const i = t.getSlideClasses(r);
      n.push({ slideEl: r, classNames: i }), t.emit("_slideClass", r, i);
    }),
      t.emit("_slideClasses", n);
  }
  slidesPerViewDynamic(t, n) {
    t === void 0 && (t = "current"), n === void 0 && (n = !1);
    const r = this,
      {
        params: i,
        slides: s,
        slidesGrid: o,
        slidesSizesGrid: a,
        size: l,
        activeIndex: c,
      } = r;
    let u = 1;
    if (typeof i.slidesPerView == "number") return i.slidesPerView;
    if (i.centeredSlides) {
      let d = s[c] ? Math.ceil(s[c].swiperSlideSize) : 0,
        f;
      for (let g = c + 1; g < s.length; g += 1)
        s[g] &&
          !f &&
          ((d += Math.ceil(s[g].swiperSlideSize)), (u += 1), d > l && (f = !0));
      for (let g = c - 1; g >= 0; g -= 1)
        s[g] &&
          !f &&
          ((d += s[g].swiperSlideSize), (u += 1), d > l && (f = !0));
    } else if (t === "current")
      for (let d = c + 1; d < s.length; d += 1)
        (n ? o[d] + a[d] - o[c] < l : o[d] - o[c] < l) && (u += 1);
    else for (let d = c - 1; d >= 0; d -= 1) o[c] - o[d] < l && (u += 1);
    return u;
  }
  update() {
    const t = this;
    if (!t || t.destroyed) return;
    const { snapGrid: n, params: r } = t;
    r.breakpoints && t.setBreakpoint(),
      [...t.el.querySelectorAll('[loading="lazy"]')].forEach((o) => {
        o.complete && sa(t, o);
      }),
      t.updateSize(),
      t.updateSlides(),
      t.updateProgress(),
      t.updateSlidesClasses();
    function i() {
      const o = t.rtlTranslate ? t.translate * -1 : t.translate,
        a = Math.min(Math.max(o, t.maxTranslate()), t.minTranslate());
      t.setTranslate(a), t.updateActiveIndex(), t.updateSlidesClasses();
    }
    let s;
    if (r.freeMode && r.freeMode.enabled && !r.cssMode)
      i(), r.autoHeight && t.updateAutoHeight();
    else {
      if (
        (r.slidesPerView === "auto" || r.slidesPerView > 1) &&
        t.isEnd &&
        !r.centeredSlides
      ) {
        const o = t.virtual && r.virtual.enabled ? t.virtual.slides : t.slides;
        s = t.slideTo(o.length - 1, 0, !1, !0);
      } else s = t.slideTo(t.activeIndex, 0, !1, !0);
      s || i();
    }
    r.watchOverflow && n !== t.snapGrid && t.checkOverflow(), t.emit("update");
  }
  changeDirection(t, n) {
    n === void 0 && (n = !0);
    const r = this,
      i = r.params.direction;
    return (
      t || (t = i === "horizontal" ? "vertical" : "horizontal"),
      t === i ||
        (t !== "horizontal" && t !== "vertical") ||
        (r.el.classList.remove(`${r.params.containerModifierClass}${i}`),
        r.el.classList.add(`${r.params.containerModifierClass}${t}`),
        r.emitContainerClasses(),
        (r.params.direction = t),
        r.slides.forEach((s) => {
          t === "vertical" ? (s.style.width = "") : (s.style.height = "");
        }),
        r.emit("changeDirection"),
        n && r.update()),
      r
    );
  }
  changeLanguageDirection(t) {
    const n = this;
    (n.rtl && t === "rtl") ||
      (!n.rtl && t === "ltr") ||
      ((n.rtl = t === "rtl"),
      (n.rtlTranslate = n.params.direction === "horizontal" && n.rtl),
      n.rtl
        ? (n.el.classList.add(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "rtl"))
        : (n.el.classList.remove(`${n.params.containerModifierClass}rtl`),
          (n.el.dir = "ltr")),
      n.update());
  }
  mount(t) {
    const n = this;
    if (n.mounted) return !0;
    let r = t || n.params.el;
    if ((typeof r == "string" && (r = document.querySelector(r)), !r))
      return !1;
    (r.swiper = n),
      r.parentNode &&
        r.parentNode.host &&
        r.parentNode.host.nodeName ===
          n.params.swiperElementNodeName.toUpperCase() &&
        (n.isElement = !0);
    const i = () =>
      `.${(n.params.wrapperClass || "").trim().split(" ").join(".")}`;
    let o =
      r && r.shadowRoot && r.shadowRoot.querySelector
        ? r.shadowRoot.querySelector(i())
        : at(r, i())[0];
    return (
      !o &&
        n.params.createElements &&
        ((o = Ba("div", n.params.wrapperClass)),
        r.append(o),
        at(r, `.${n.params.slideClass}`).forEach((a) => {
          o.append(a);
        })),
      Object.assign(n, {
        el: r,
        wrapperEl: o,
        slidesEl:
          n.isElement && !r.parentNode.host.slideSlots ? r.parentNode.host : o,
        hostEl: n.isElement ? r.parentNode.host : r,
        mounted: !0,
        rtl: r.dir.toLowerCase() === "rtl" || Cn(r, "direction") === "rtl",
        rtlTranslate:
          n.params.direction === "horizontal" &&
          (r.dir.toLowerCase() === "rtl" || Cn(r, "direction") === "rtl"),
        wrongRTL: Cn(o, "display") === "-webkit-box",
      }),
      !0
    );
  }
  init(t) {
    const n = this;
    if (n.initialized || n.mount(t) === !1) return n;
    n.emit("beforeInit"),
      n.params.breakpoints && n.setBreakpoint(),
      n.addClasses(),
      n.updateSize(),
      n.updateSlides(),
      n.params.watchOverflow && n.checkOverflow(),
      n.params.grabCursor && n.enabled && n.setGrabCursor(),
      n.params.loop && n.virtual && n.params.virtual.enabled
        ? n.slideTo(
            n.params.initialSlide + n.virtual.slidesBefore,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          )
        : n.slideTo(
            n.params.initialSlide,
            0,
            n.params.runCallbacksOnInit,
            !1,
            !0
          ),
      n.params.loop && n.loopCreate(),
      n.attachEvents();
    const i = [...n.el.querySelectorAll('[loading="lazy"]')];
    return (
      n.isElement && i.push(...n.hostEl.querySelectorAll('[loading="lazy"]')),
      i.forEach((s) => {
        s.complete
          ? sa(n, s)
          : s.addEventListener("load", (o) => {
              sa(n, o.target);
            });
      }),
      id(n),
      (n.initialized = !0),
      id(n),
      n.emit("init"),
      n.emit("afterInit"),
      n
    );
  }
  destroy(t, n) {
    t === void 0 && (t = !0), n === void 0 && (n = !0);
    const r = this,
      { params: i, el: s, wrapperEl: o, slides: a } = r;
    return (
      typeof r.params > "u" ||
        r.destroyed ||
        (r.emit("beforeDestroy"),
        (r.initialized = !1),
        r.detachEvents(),
        i.loop && r.loopDestroy(),
        n &&
          (r.removeClasses(),
          s && typeof s != "string" && s.removeAttribute("style"),
          o && o.removeAttribute("style"),
          a &&
            a.length &&
            a.forEach((l) => {
              l.classList.remove(
                i.slideVisibleClass,
                i.slideFullyVisibleClass,
                i.slideActiveClass,
                i.slideNextClass,
                i.slidePrevClass
              ),
                l.removeAttribute("style"),
                l.removeAttribute("data-swiper-slide-index");
            })),
        r.emit("destroy"),
        Object.keys(r.eventsListeners).forEach((l) => {
          r.off(l);
        }),
        t !== !1 &&
          (r.el && typeof r.el != "string" && (r.el.swiper = null), bL(r)),
        (r.destroyed = !0)),
      null
    );
  }
  static extendDefaults(t) {
    Ye(Lu, t);
  }
  static get extendedDefaults() {
    return Lu;
  }
  static get defaults() {
    return sd;
  }
  static installModule(t) {
    Zt.prototype.__modules__ || (Zt.prototype.__modules__ = []);
    const n = Zt.prototype.__modules__;
    typeof t == "function" && n.indexOf(t) < 0 && n.push(t);
  }
  static use(t) {
    return Array.isArray(t)
      ? (t.forEach((n) => Zt.installModule(n)), Zt)
      : (Zt.installModule(t), Zt);
  }
};
Object.keys(Au).forEach((e) => {
  Object.keys(Au[e]).forEach((t) => {
    Qf.prototype[t] = Au[e][t];
  });
});
Qf.use([LL, DL]);
const Gx = [
  "eventsPrefix",
  "injectStyles",
  "injectStylesUrls",
  "modules",
  "init",
  "_direction",
  "oneWayMovement",
  "swiperElementNodeName",
  "touchEventsTarget",
  "initialSlide",
  "_speed",
  "cssMode",
  "updateOnWindowResize",
  "resizeObserver",
  "nested",
  "focusableElements",
  "_enabled",
  "_width",
  "_height",
  "preventInteractionOnTransition",
  "userAgent",
  "url",
  "_edgeSwipeDetection",
  "_edgeSwipeThreshold",
  "_freeMode",
  "_autoHeight",
  "setWrapperSize",
  "virtualTranslate",
  "_effect",
  "breakpoints",
  "breakpointsBase",
  "_spaceBetween",
  "_slidesPerView",
  "maxBackfaceHiddenSlides",
  "_grid",
  "_slidesPerGroup",
  "_slidesPerGroupSkip",
  "_slidesPerGroupAuto",
  "_centeredSlides",
  "_centeredSlidesBounds",
  "_slidesOffsetBefore",
  "_slidesOffsetAfter",
  "normalizeSlideIndex",
  "_centerInsufficientSlides",
  "_watchOverflow",
  "roundLengths",
  "touchRatio",
  "touchAngle",
  "simulateTouch",
  "_shortSwipes",
  "_longSwipes",
  "longSwipesRatio",
  "longSwipesMs",
  "_followFinger",
  "allowTouchMove",
  "_threshold",
  "touchMoveStopPropagation",
  "touchStartPreventDefault",
  "touchStartForcePreventDefault",
  "touchReleaseOnEdges",
  "uniqueNavElements",
  "_resistance",
  "_resistanceRatio",
  "_watchSlidesProgress",
  "_grabCursor",
  "preventClicks",
  "preventClicksPropagation",
  "_slideToClickedSlide",
  "_loop",
  "loopAdditionalSlides",
  "loopAddBlankSlides",
  "loopPreventsSliding",
  "_rewind",
  "_allowSlidePrev",
  "_allowSlideNext",
  "_swipeHandler",
  "_noSwiping",
  "noSwipingClass",
  "noSwipingSelector",
  "passiveListeners",
  "containerModifierClass",
  "slideClass",
  "slideActiveClass",
  "slideVisibleClass",
  "slideFullyVisibleClass",
  "slideNextClass",
  "slidePrevClass",
  "slideBlankClass",
  "wrapperClass",
  "lazyPreloaderClass",
  "lazyPreloadPrevNext",
  "runCallbacksOnInit",
  "observer",
  "observeParents",
  "observeSlideChildren",
  "a11y",
  "_autoplay",
  "_controller",
  "coverflowEffect",
  "cubeEffect",
  "fadeEffect",
  "flipEffect",
  "creativeEffect",
  "cardsEffect",
  "hashNavigation",
  "history",
  "keyboard",
  "mousewheel",
  "_navigation",
  "_pagination",
  "parallax",
  "_scrollbar",
  "_thumbs",
  "virtual",
  "zoom",
  "control",
];
function cr(e) {
  return (
    typeof e == "object" &&
    e !== null &&
    e.constructor &&
    Object.prototype.toString.call(e).slice(8, -1) === "Object" &&
    !e.__swiper__
  );
}
function Hr(e, t) {
  const n = ["__proto__", "constructor", "prototype"];
  Object.keys(t)
    .filter((r) => n.indexOf(r) < 0)
    .forEach((r) => {
      typeof e[r] > "u"
        ? (e[r] = t[r])
        : cr(t[r]) && cr(e[r]) && Object.keys(t[r]).length > 0
        ? t[r].__swiper__
          ? (e[r] = t[r])
          : Hr(e[r], t[r])
        : (e[r] = t[r]);
    });
}
function Yx(e) {
  return (
    e === void 0 && (e = {}),
    e.navigation &&
      typeof e.navigation.nextEl > "u" &&
      typeof e.navigation.prevEl > "u"
  );
}
function Xx(e) {
  return e === void 0 && (e = {}), e.pagination && typeof e.pagination.el > "u";
}
function Ux(e) {
  return e === void 0 && (e = {}), e.scrollbar && typeof e.scrollbar.el > "u";
}
function Zx(e) {
  e === void 0 && (e = "");
  const t = e
      .split(" ")
      .map((r) => r.trim())
      .filter((r) => !!r),
    n = [];
  return (
    t.forEach((r) => {
      n.indexOf(r) < 0 && n.push(r);
    }),
    n.join(" ")
  );
}
function W2(e) {
  return (
    e === void 0 && (e = ""),
    e
      ? e.includes("swiper-wrapper")
        ? e
        : `swiper-wrapper ${e}`
      : "swiper-wrapper"
  );
}
function H2(e) {
  let {
    swiper: t,
    slides: n,
    passedParams: r,
    changedParams: i,
    nextEl: s,
    prevEl: o,
    scrollbarEl: a,
    paginationEl: l,
  } = e;
  const c = i.filter(
      (j) => j !== "children" && j !== "direction" && j !== "wrapperClass"
    ),
    {
      params: u,
      pagination: d,
      navigation: f,
      scrollbar: g,
      virtual: y,
      thumbs: w,
    } = t;
  let I, v, m, h, x, S, b, $;
  i.includes("thumbs") &&
    r.thumbs &&
    r.thumbs.swiper &&
    u.thumbs &&
    !u.thumbs.swiper &&
    (I = !0),
    i.includes("controller") &&
      r.controller &&
      r.controller.control &&
      u.controller &&
      !u.controller.control &&
      (v = !0),
    i.includes("pagination") &&
      r.pagination &&
      (r.pagination.el || l) &&
      (u.pagination || u.pagination === !1) &&
      d &&
      !d.el &&
      (m = !0),
    i.includes("scrollbar") &&
      r.scrollbar &&
      (r.scrollbar.el || a) &&
      (u.scrollbar || u.scrollbar === !1) &&
      g &&
      !g.el &&
      (h = !0),
    i.includes("navigation") &&
      r.navigation &&
      (r.navigation.prevEl || o) &&
      (r.navigation.nextEl || s) &&
      (u.navigation || u.navigation === !1) &&
      f &&
      !f.prevEl &&
      !f.nextEl &&
      (x = !0);
  const T = (j) => {
    t[j] &&
      (t[j].destroy(),
      j === "navigation"
        ? (t.isElement && (t[j].prevEl.remove(), t[j].nextEl.remove()),
          (u[j].prevEl = void 0),
          (u[j].nextEl = void 0),
          (t[j].prevEl = void 0),
          (t[j].nextEl = void 0))
        : (t.isElement && t[j].el.remove(),
          (u[j].el = void 0),
          (t[j].el = void 0)));
  };
  i.includes("loop") &&
    t.isElement &&
    (u.loop && !r.loop ? (S = !0) : !u.loop && r.loop ? (b = !0) : ($ = !0)),
    c.forEach((j) => {
      if (cr(u[j]) && cr(r[j]))
        Object.assign(u[j], r[j]),
          (j === "navigation" || j === "pagination" || j === "scrollbar") &&
            "enabled" in r[j] &&
            !r[j].enabled &&
            T(j);
      else {
        const P = r[j];
        (P === !0 || P === !1) &&
        (j === "navigation" || j === "pagination" || j === "scrollbar")
          ? P === !1 && T(j)
          : (u[j] = r[j]);
      }
    }),
    c.includes("controller") &&
      !v &&
      t.controller &&
      t.controller.control &&
      u.controller &&
      u.controller.control &&
      (t.controller.control = u.controller.control),
    i.includes("children") && n && y && u.virtual.enabled
      ? ((y.slides = n), y.update(!0))
      : i.includes("virtual") &&
        y &&
        u.virtual.enabled &&
        (n && (y.slides = n), y.update(!0)),
    i.includes("children") && n && u.loop && ($ = !0),
    I && w.init() && w.update(!0),
    v && (t.controller.control = u.controller.control),
    m &&
      (t.isElement &&
        (!l || typeof l == "string") &&
        ((l = document.createElement("div")),
        l.classList.add("swiper-pagination"),
        l.part.add("pagination"),
        t.el.appendChild(l)),
      l && (u.pagination.el = l),
      d.init(),
      d.render(),
      d.update()),
    h &&
      (t.isElement &&
        (!a || typeof a == "string") &&
        ((a = document.createElement("div")),
        a.classList.add("swiper-scrollbar"),
        a.part.add("scrollbar"),
        t.el.appendChild(a)),
      a && (u.scrollbar.el = a),
      g.init(),
      g.updateSize(),
      g.setTranslate()),
    x &&
      (t.isElement &&
        ((!s || typeof s == "string") &&
          ((s = document.createElement("div")),
          s.classList.add("swiper-button-next"),
          (s.innerHTML = t.hostEl.constructor.nextButtonSvg),
          s.part.add("button-next"),
          t.el.appendChild(s)),
        (!o || typeof o == "string") &&
          ((o = document.createElement("div")),
          o.classList.add("swiper-button-prev"),
          (o.innerHTML = t.hostEl.constructor.prevButtonSvg),
          o.part.add("button-prev"),
          t.el.appendChild(o))),
      s && (u.navigation.nextEl = s),
      o && (u.navigation.prevEl = o),
      f.init(),
      f.update()),
    i.includes("allowSlideNext") && (t.allowSlideNext = r.allowSlideNext),
    i.includes("allowSlidePrev") && (t.allowSlidePrev = r.allowSlidePrev),
    i.includes("direction") && t.changeDirection(r.direction, !1),
    (S || $) && t.loopDestroy(),
    (b || $) && t.loopCreate(),
    t.update();
}
function V2(e, t) {
  e === void 0 && (e = {}), t === void 0 && (t = !0);
  const n = { on: {} },
    r = {},
    i = {};
  Hr(n, sd), (n._emitClasses = !0), (n.init = !1);
  const s = {},
    o = Gx.map((l) => l.replace(/_/, "")),
    a = Object.assign({}, e);
  return (
    Object.keys(a).forEach((l) => {
      typeof e[l] > "u" ||
        (o.indexOf(l) >= 0
          ? cr(e[l])
            ? ((n[l] = {}), (i[l] = {}), Hr(n[l], e[l]), Hr(i[l], e[l]))
            : ((n[l] = e[l]), (i[l] = e[l]))
          : l.search(/on[A-Z]/) === 0 && typeof e[l] == "function"
          ? t
            ? (r[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
            : (n.on[`${l[2].toLowerCase()}${l.substr(3)}`] = e[l])
          : (s[l] = e[l]));
    }),
    ["navigation", "pagination", "scrollbar"].forEach((l) => {
      n[l] === !0 && (n[l] = {}), n[l] === !1 && delete n[l];
    }),
    { params: n, passedParams: i, rest: s, events: r }
  );
}
function G2(e, t) {
  let {
    el: n,
    nextEl: r,
    prevEl: i,
    paginationEl: s,
    scrollbarEl: o,
    swiper: a,
  } = e;
  Yx(t) &&
    r &&
    i &&
    ((a.params.navigation.nextEl = r),
    (a.originalParams.navigation.nextEl = r),
    (a.params.navigation.prevEl = i),
    (a.originalParams.navigation.prevEl = i)),
    Xx(t) &&
      s &&
      ((a.params.pagination.el = s), (a.originalParams.pagination.el = s)),
    Ux(t) &&
      o &&
      ((a.params.scrollbar.el = o), (a.originalParams.scrollbar.el = o)),
    a.init(n);
}
function Y2(e, t, n, r, i) {
  const s = [];
  if (!t) return s;
  const o = (l) => {
    s.indexOf(l) < 0 && s.push(l);
  };
  if (n && r) {
    const l = r.map(i),
      c = n.map(i);
    l.join("") !== c.join("") && o("children"),
      r.length !== n.length && o("children");
  }
  return (
    Gx.filter((l) => l[0] === "_")
      .map((l) => l.replace(/_/, ""))
      .forEach((l) => {
        if (l in e && l in t)
          if (cr(e[l]) && cr(t[l])) {
            const c = Object.keys(e[l]),
              u = Object.keys(t[l]);
            c.length !== u.length
              ? o(l)
              : (c.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }),
                u.forEach((d) => {
                  e[l][d] !== t[l][d] && o(l);
                }));
          } else e[l] !== t[l] && o(l);
      }),
    s
  );
}
const X2 = (e) => {
  !e ||
    e.destroyed ||
    !e.params.virtual ||
    (e.params.virtual && !e.params.virtual.enabled) ||
    (e.updateSlides(),
    e.updateProgress(),
    e.updateSlidesClasses(),
    e.parallax &&
      e.params.parallax &&
      e.params.parallax.enabled &&
      e.parallax.setTranslate());
};
function Wa() {
  return (
    (Wa = Object.assign
      ? Object.assign.bind()
      : function (e) {
          for (var t = 1; t < arguments.length; t++) {
            var n = arguments[t];
            for (var r in n)
              Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r]);
          }
          return e;
        }),
    Wa.apply(this, arguments)
  );
}
function Kx(e) {
  return (
    e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
  );
}
function Qx(e) {
  const t = [];
  return (
    Q.Children.toArray(e).forEach((n) => {
      Kx(n)
        ? t.push(n)
        : n.props &&
          n.props.children &&
          Qx(n.props.children).forEach((r) => t.push(r));
    }),
    t
  );
}
function U2(e) {
  const t = [],
    n = {
      "container-start": [],
      "container-end": [],
      "wrapper-start": [],
      "wrapper-end": [],
    };
  return (
    Q.Children.toArray(e).forEach((r) => {
      if (Kx(r)) t.push(r);
      else if (r.props && r.props.slot && n[r.props.slot])
        n[r.props.slot].push(r);
      else if (r.props && r.props.children) {
        const i = Qx(r.props.children);
        i.length > 0 ? i.forEach((s) => t.push(s)) : n["container-end"].push(r);
      } else n["container-end"].push(r);
    }),
    { slides: t, slots: n }
  );
}
function Z2(e, t, n) {
  if (!n) return null;
  const r = (u) => {
      let d = u;
      return (
        u < 0 ? (d = t.length + u) : d >= t.length && (d = d - t.length), d
      );
    },
    i = e.isHorizontal()
      ? { [e.rtlTranslate ? "right" : "left"]: `${n.offset}px` }
      : { top: `${n.offset}px` },
    { from: s, to: o } = n,
    a = e.params.loop ? -t.length : 0,
    l = e.params.loop ? t.length * 2 : t.length,
    c = [];
  for (let u = a; u < l; u += 1) u >= s && u <= o && c.push(t[r(u)]);
  return c.map((u, d) =>
    Q.cloneElement(u, {
      swiper: e,
      style: i,
      key: u.props.virtualIndex || u.key || `slide-${d}`,
    })
  );
}
function ts(e, t) {
  return typeof window > "u" ? E.useEffect(e, t) : E.useLayoutEffect(e, t);
}
const Ih = E.createContext(null),
  K2 = E.createContext(null),
  qf = E.forwardRef(function (e, t) {
    let {
        className: n,
        tag: r = "div",
        wrapperTag: i = "div",
        children: s,
        onSwiper: o,
        ...a
      } = e === void 0 ? {} : e,
      l = !1;
    const [c, u] = E.useState("swiper"),
      [d, f] = E.useState(null),
      [g, y] = E.useState(!1),
      w = E.useRef(!1),
      I = E.useRef(null),
      v = E.useRef(null),
      m = E.useRef(null),
      h = E.useRef(null),
      x = E.useRef(null),
      S = E.useRef(null),
      b = E.useRef(null),
      $ = E.useRef(null),
      { params: T, passedParams: j, rest: P, events: C } = V2(a),
      { slides: _, slots: O } = U2(s),
      z = () => {
        y(!g);
      };
    Object.assign(T.on, {
      _containerClasses(k, A) {
        u(A);
      },
    });
    const F = () => {
      Object.assign(T.on, C), (l = !0);
      const k = { ...T };
      if (
        (delete k.wrapperClass,
        (v.current = new Qf(k)),
        v.current.virtual && v.current.params.virtual.enabled)
      ) {
        v.current.virtual.slides = _;
        const A = {
          cache: !1,
          slides: _,
          renderExternal: f,
          renderExternalUpdate: !1,
        };
        Hr(v.current.params.virtual, A),
          Hr(v.current.originalParams.virtual, A);
      }
    };
    I.current || F(), v.current && v.current.on("_beforeBreakpoint", z);
    const W = () => {
        l ||
          !C ||
          !v.current ||
          Object.keys(C).forEach((k) => {
            v.current.on(k, C[k]);
          });
      },
      G = () => {
        !C ||
          !v.current ||
          Object.keys(C).forEach((k) => {
            v.current.off(k, C[k]);
          });
      };
    E.useEffect(() => () => {
      v.current && v.current.off("_beforeBreakpoint", z);
    }),
      E.useEffect(() => {
        !w.current &&
          v.current &&
          (v.current.emitSlidesClasses(), (w.current = !0));
      }),
      ts(() => {
        if ((t && (t.current = I.current), !!I.current))
          return (
            v.current.destroyed && F(),
            G2(
              {
                el: I.current,
                nextEl: x.current,
                prevEl: S.current,
                paginationEl: b.current,
                scrollbarEl: $.current,
                swiper: v.current,
              },
              T
            ),
            o && !v.current.destroyed && o(v.current),
            () => {
              v.current && !v.current.destroyed && v.current.destroy(!0, !1);
            }
          );
      }, []),
      ts(() => {
        W();
        const k = Y2(j, m.current, _, h.current, (A) => A.key);
        return (
          (m.current = j),
          (h.current = _),
          k.length &&
            v.current &&
            !v.current.destroyed &&
            H2({
              swiper: v.current,
              slides: _,
              passedParams: j,
              changedParams: k,
              nextEl: x.current,
              prevEl: S.current,
              scrollbarEl: $.current,
              paginationEl: b.current,
            }),
          () => {
            G();
          }
        );
      }),
      ts(() => {
        X2(v.current);
      }, [d]);
    function M() {
      return T.virtual
        ? Z2(v.current, _, d)
        : _.map((k, A) =>
            Q.cloneElement(k, { swiper: v.current, swiperSlideIndex: A })
          );
    }
    return Q.createElement(
      r,
      Wa({ ref: I, className: Zx(`${c}${n ? ` ${n}` : ""}`) }, P),
      Q.createElement(
        K2.Provider,
        { value: v.current },
        O["container-start"],
        Q.createElement(
          i,
          { className: W2(T.wrapperClass) },
          O["wrapper-start"],
          M(),
          O["wrapper-end"]
        ),
        Yx(T) &&
          Q.createElement(
            Q.Fragment,
            null,
            Q.createElement("div", { ref: S, className: "swiper-button-prev" }),
            Q.createElement("div", { ref: x, className: "swiper-button-next" })
          ),
        Ux(T) &&
          Q.createElement("div", { ref: $, className: "swiper-scrollbar" }),
        Xx(T) &&
          Q.createElement("div", { ref: b, className: "swiper-pagination" }),
        O["container-end"]
      )
    );
  });
qf.displayName = "Swiper";
const Hs = E.forwardRef(function (e, t) {
  let {
    tag: n = "div",
    children: r,
    className: i = "",
    swiper: s,
    zoom: o,
    lazy: a,
    virtualIndex: l,
    swiperSlideIndex: c,
    ...u
  } = e === void 0 ? {} : e;
  const d = E.useRef(null),
    [f, g] = E.useState("swiper-slide"),
    [y, w] = E.useState(!1);
  function I(x, S, b) {
    S === d.current && g(b);
  }
  ts(() => {
    if (
      (typeof c < "u" && (d.current.swiperSlideIndex = c),
      t && (t.current = d.current),
      !(!d.current || !s))
    ) {
      if (s.destroyed) {
        f !== "swiper-slide" && g("swiper-slide");
        return;
      }
      return (
        s.on("_slideClass", I),
        () => {
          s && s.off("_slideClass", I);
        }
      );
    }
  }),
    ts(() => {
      s && d.current && !s.destroyed && g(s.getSlideClasses(d.current));
    }, [s]);
  const v = {
      isActive: f.indexOf("swiper-slide-active") >= 0,
      isVisible: f.indexOf("swiper-slide-visible") >= 0,
      isPrev: f.indexOf("swiper-slide-prev") >= 0,
      isNext: f.indexOf("swiper-slide-next") >= 0,
    },
    m = () => (typeof r == "function" ? r(v) : r),
    h = () => {
      w(!0);
    };
  return Q.createElement(
    n,
    Wa(
      {
        ref: d,
        className: Zx(`${f}${i ? ` ${i}` : ""}`),
        "data-swiper-slide-index": l,
        onLoad: h,
      },
      u
    ),
    o &&
      Q.createElement(
        Ih.Provider,
        { value: v },
        Q.createElement(
          "div",
          {
            className: "swiper-zoom-container",
            "data-swiper-zoom": typeof o == "number" ? o : void 0,
          },
          m(),
          a &&
            !y &&
            Q.createElement("div", { className: "swiper-lazy-preloader" })
        )
      ),
    !o &&
      Q.createElement(
        Ih.Provider,
        { value: v },
        m(),
        a &&
          !y &&
          Q.createElement("div", { className: "swiper-lazy-preloader" })
      )
  );
});
Hs.displayName = "SwiperSlide";
function Q2(e, t, n, r) {
  return (
    e.params.createElements &&
      Object.keys(r).forEach((i) => {
        if (!n[i] && n.auto === !0) {
          let s = at(e.el, `.${r[i]}`)[0];
          s || ((s = Ba("div", r[i])), (s.className = r[i]), e.el.append(s)),
            (n[i] = s),
            (t[i] = s);
        }
      }),
    n
  );
}
function Di(e) {
  return (
    e === void 0 && (e = ""),
    `.${e
      .trim()
      .replace(/([\.:!+\/])/g, "\\$1")
      .replace(/ /g, ".")}`
  );
}
function qx(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = "swiper-pagination";
  n({
    pagination: {
      el: null,
      bulletElement: "span",
      clickable: !1,
      hideOnClick: !1,
      renderBullet: null,
      renderProgressbar: null,
      renderFraction: null,
      renderCustom: null,
      progressbarOpposite: !1,
      type: "bullets",
      dynamicBullets: !1,
      dynamicMainBullets: 1,
      formatFractionCurrent: (m) => m,
      formatFractionTotal: (m) => m,
      bulletClass: `${s}-bullet`,
      bulletActiveClass: `${s}-bullet-active`,
      modifierClass: `${s}-`,
      currentClass: `${s}-current`,
      totalClass: `${s}-total`,
      hiddenClass: `${s}-hidden`,
      progressbarFillClass: `${s}-progressbar-fill`,
      progressbarOppositeClass: `${s}-progressbar-opposite`,
      clickableClass: `${s}-clickable`,
      lockClass: `${s}-lock`,
      horizontalClass: `${s}-horizontal`,
      verticalClass: `${s}-vertical`,
      paginationDisabledClass: `${s}-disabled`,
    },
  }),
    (t.pagination = { el: null, bullets: [] });
  let o,
    a = 0;
  function l() {
    return (
      !t.params.pagination.el ||
      !t.pagination.el ||
      (Array.isArray(t.pagination.el) && t.pagination.el.length === 0)
    );
  }
  function c(m, h) {
    const { bulletActiveClass: x } = t.params.pagination;
    m &&
      ((m = m[`${h === "prev" ? "previous" : "next"}ElementSibling`]),
      m &&
        (m.classList.add(`${x}-${h}`),
        (m = m[`${h === "prev" ? "previous" : "next"}ElementSibling`]),
        m && m.classList.add(`${x}-${h}-${h}`)));
  }
  function u(m, h, x) {
    if (((m = m % x), (h = h % x), h === m + 1)) return "next";
    if (h === m - 1) return "previous";
  }
  function d(m) {
    const h = m.target.closest(Di(t.params.pagination.bulletClass));
    if (!h) return;
    m.preventDefault();
    const x = Fa(h) * t.params.slidesPerGroup;
    if (t.params.loop) {
      if (t.realIndex === x) return;
      const S = u(t.realIndex, x, t.slides.length);
      S === "next"
        ? t.slideNext()
        : S === "previous"
        ? t.slidePrev()
        : t.slideToLoop(x);
    } else t.slideTo(x);
  }
  function f() {
    const m = t.rtl,
      h = t.params.pagination;
    if (l()) return;
    let x = t.pagination.el;
    x = Xt(x);
    let S, b;
    const $ =
        t.virtual && t.params.virtual.enabled
          ? t.virtual.slides.length
          : t.slides.length,
      T = t.params.loop
        ? Math.ceil($ / t.params.slidesPerGroup)
        : t.snapGrid.length;
    if (
      (t.params.loop
        ? ((b = t.previousRealIndex || 0),
          (S =
            t.params.slidesPerGroup > 1
              ? Math.floor(t.realIndex / t.params.slidesPerGroup)
              : t.realIndex))
        : typeof t.snapIndex < "u"
        ? ((S = t.snapIndex), (b = t.previousSnapIndex))
        : ((b = t.previousIndex || 0), (S = t.activeIndex || 0)),
      h.type === "bullets" &&
        t.pagination.bullets &&
        t.pagination.bullets.length > 0)
    ) {
      const j = t.pagination.bullets;
      let P, C, _;
      if (
        (h.dynamicBullets &&
          ((o = rd(j[0], t.isHorizontal() ? "width" : "height")),
          x.forEach((O) => {
            O.style[t.isHorizontal() ? "width" : "height"] = `${
              o * (h.dynamicMainBullets + 4)
            }px`;
          }),
          h.dynamicMainBullets > 1 &&
            b !== void 0 &&
            ((a += S - (b || 0)),
            a > h.dynamicMainBullets - 1
              ? (a = h.dynamicMainBullets - 1)
              : a < 0 && (a = 0)),
          (P = Math.max(S - a, 0)),
          (C = P + (Math.min(j.length, h.dynamicMainBullets) - 1)),
          (_ = (C + P) / 2)),
        j.forEach((O) => {
          const z = [
            ...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(
              (F) => `${h.bulletActiveClass}${F}`
            ),
          ]
            .map((F) =>
              typeof F == "string" && F.includes(" ") ? F.split(" ") : F
            )
            .flat();
          O.classList.remove(...z);
        }),
        x.length > 1)
      )
        j.forEach((O) => {
          const z = Fa(O);
          z === S
            ? O.classList.add(...h.bulletActiveClass.split(" "))
            : t.isElement && O.setAttribute("part", "bullet"),
            h.dynamicBullets &&
              (z >= P &&
                z <= C &&
                O.classList.add(...`${h.bulletActiveClass}-main`.split(" ")),
              z === P && c(O, "prev"),
              z === C && c(O, "next"));
        });
      else {
        const O = j[S];
        if (
          (O && O.classList.add(...h.bulletActiveClass.split(" ")),
          t.isElement &&
            j.forEach((z, F) => {
              z.setAttribute("part", F === S ? "bullet-active" : "bullet");
            }),
          h.dynamicBullets)
        ) {
          const z = j[P],
            F = j[C];
          for (let W = P; W <= C; W += 1)
            j[W] &&
              j[W].classList.add(...`${h.bulletActiveClass}-main`.split(" "));
          c(z, "prev"), c(F, "next");
        }
      }
      if (h.dynamicBullets) {
        const O = Math.min(j.length, h.dynamicMainBullets + 4),
          z = (o * O - o) / 2 - _ * o,
          F = m ? "right" : "left";
        j.forEach((W) => {
          W.style[t.isHorizontal() ? F : "top"] = `${z}px`;
        });
      }
    }
    x.forEach((j, P) => {
      if (
        (h.type === "fraction" &&
          (j.querySelectorAll(Di(h.currentClass)).forEach((C) => {
            C.textContent = h.formatFractionCurrent(S + 1);
          }),
          j.querySelectorAll(Di(h.totalClass)).forEach((C) => {
            C.textContent = h.formatFractionTotal(T);
          })),
        h.type === "progressbar")
      ) {
        let C;
        h.progressbarOpposite
          ? (C = t.isHorizontal() ? "vertical" : "horizontal")
          : (C = t.isHorizontal() ? "horizontal" : "vertical");
        const _ = (S + 1) / T;
        let O = 1,
          z = 1;
        C === "horizontal" ? (O = _) : (z = _),
          j.querySelectorAll(Di(h.progressbarFillClass)).forEach((F) => {
            (F.style.transform = `translate3d(0,0,0) scaleX(${O}) scaleY(${z})`),
              (F.style.transitionDuration = `${t.params.speed}ms`);
          });
      }
      h.type === "custom" && h.renderCustom
        ? ((j.innerHTML = h.renderCustom(t, S + 1, T)),
          P === 0 && i("paginationRender", j))
        : (P === 0 && i("paginationRender", j), i("paginationUpdate", j)),
        t.params.watchOverflow &&
          t.enabled &&
          j.classList[t.isLocked ? "add" : "remove"](h.lockClass);
    });
  }
  function g() {
    const m = t.params.pagination;
    if (l()) return;
    const h =
      t.virtual && t.params.virtual.enabled
        ? t.virtual.slides.length
        : t.grid && t.params.grid.rows > 1
        ? t.slides.length / Math.ceil(t.params.grid.rows)
        : t.slides.length;
    let x = t.pagination.el;
    x = Xt(x);
    let S = "";
    if (m.type === "bullets") {
      let b = t.params.loop
        ? Math.ceil(h / t.params.slidesPerGroup)
        : t.snapGrid.length;
      t.params.freeMode && t.params.freeMode.enabled && b > h && (b = h);
      for (let $ = 0; $ < b; $ += 1)
        m.renderBullet
          ? (S += m.renderBullet.call(t, $, m.bulletClass))
          : (S += `<${m.bulletElement} ${
              t.isElement ? 'part="bullet"' : ""
            } class="${m.bulletClass}"></${m.bulletElement}>`);
    }
    m.type === "fraction" &&
      (m.renderFraction
        ? (S = m.renderFraction.call(t, m.currentClass, m.totalClass))
        : (S = `<span class="${m.currentClass}"></span> / <span class="${m.totalClass}"></span>`)),
      m.type === "progressbar" &&
        (m.renderProgressbar
          ? (S = m.renderProgressbar.call(t, m.progressbarFillClass))
          : (S = `<span class="${m.progressbarFillClass}"></span>`)),
      (t.pagination.bullets = []),
      x.forEach((b) => {
        m.type !== "custom" && (b.innerHTML = S || ""),
          m.type === "bullets" &&
            t.pagination.bullets.push(...b.querySelectorAll(Di(m.bulletClass)));
      }),
      m.type !== "custom" && i("paginationRender", x[0]);
  }
  function y() {
    t.params.pagination = Q2(
      t,
      t.originalParams.pagination,
      t.params.pagination,
      { el: "swiper-pagination" }
    );
    const m = t.params.pagination;
    if (!m.el) return;
    let h;
    typeof m.el == "string" && t.isElement && (h = t.el.querySelector(m.el)),
      !h &&
        typeof m.el == "string" &&
        (h = [...document.querySelectorAll(m.el)]),
      h || (h = m.el),
      !(!h || h.length === 0) &&
        (t.params.uniqueNavElements &&
          typeof m.el == "string" &&
          Array.isArray(h) &&
          h.length > 1 &&
          ((h = [...t.el.querySelectorAll(m.el)]),
          h.length > 1 &&
            (h = h.filter((x) => es(x, ".swiper")[0] === t.el)[0])),
        Array.isArray(h) && h.length === 1 && (h = h[0]),
        Object.assign(t.pagination, { el: h }),
        (h = Xt(h)),
        h.forEach((x) => {
          m.type === "bullets" &&
            m.clickable &&
            x.classList.add(...(m.clickableClass || "").split(" ")),
            x.classList.add(m.modifierClass + m.type),
            x.classList.add(
              t.isHorizontal() ? m.horizontalClass : m.verticalClass
            ),
            m.type === "bullets" &&
              m.dynamicBullets &&
              (x.classList.add(`${m.modifierClass}${m.type}-dynamic`),
              (a = 0),
              m.dynamicMainBullets < 1 && (m.dynamicMainBullets = 1)),
            m.type === "progressbar" &&
              m.progressbarOpposite &&
              x.classList.add(m.progressbarOppositeClass),
            m.clickable && x.addEventListener("click", d),
            t.enabled || x.classList.add(m.lockClass);
        }));
  }
  function w() {
    const m = t.params.pagination;
    if (l()) return;
    let h = t.pagination.el;
    h &&
      ((h = Xt(h)),
      h.forEach((x) => {
        x.classList.remove(m.hiddenClass),
          x.classList.remove(m.modifierClass + m.type),
          x.classList.remove(
            t.isHorizontal() ? m.horizontalClass : m.verticalClass
          ),
          m.clickable &&
            (x.classList.remove(...(m.clickableClass || "").split(" ")),
            x.removeEventListener("click", d));
      })),
      t.pagination.bullets &&
        t.pagination.bullets.forEach((x) =>
          x.classList.remove(...m.bulletActiveClass.split(" "))
        );
  }
  r("changeDirection", () => {
    if (!t.pagination || !t.pagination.el) return;
    const m = t.params.pagination;
    let { el: h } = t.pagination;
    (h = Xt(h)),
      h.forEach((x) => {
        x.classList.remove(m.horizontalClass, m.verticalClass),
          x.classList.add(
            t.isHorizontal() ? m.horizontalClass : m.verticalClass
          );
      });
  }),
    r("init", () => {
      t.params.pagination.enabled === !1 ? v() : (y(), g(), f());
    }),
    r("activeIndexChange", () => {
      typeof t.snapIndex > "u" && f();
    }),
    r("snapIndexChange", () => {
      f();
    }),
    r("snapGridLengthChange", () => {
      g(), f();
    }),
    r("destroy", () => {
      w();
    }),
    r("enable disable", () => {
      let { el: m } = t.pagination;
      m &&
        ((m = Xt(m)),
        m.forEach((h) =>
          h.classList[t.enabled ? "remove" : "add"](
            t.params.pagination.lockClass
          )
        ));
    }),
    r("lock unlock", () => {
      f();
    }),
    r("click", (m, h) => {
      const x = h.target,
        S = Xt(t.pagination.el);
      if (
        t.params.pagination.el &&
        t.params.pagination.hideOnClick &&
        S &&
        S.length > 0 &&
        !x.classList.contains(t.params.pagination.bulletClass)
      ) {
        if (
          t.navigation &&
          ((t.navigation.nextEl && x === t.navigation.nextEl) ||
            (t.navigation.prevEl && x === t.navigation.prevEl))
        )
          return;
        const b = S[0].classList.contains(t.params.pagination.hiddenClass);
        i(b === !0 ? "paginationShow" : "paginationHide"),
          S.forEach(($) => $.classList.toggle(t.params.pagination.hiddenClass));
      }
    });
  const I = () => {
      t.el.classList.remove(t.params.pagination.paginationDisabledClass);
      let { el: m } = t.pagination;
      m &&
        ((m = Xt(m)),
        m.forEach((h) =>
          h.classList.remove(t.params.pagination.paginationDisabledClass)
        )),
        y(),
        g(),
        f();
    },
    v = () => {
      t.el.classList.add(t.params.pagination.paginationDisabledClass);
      let { el: m } = t.pagination;
      m &&
        ((m = Xt(m)),
        m.forEach((h) =>
          h.classList.add(t.params.pagination.paginationDisabledClass)
        )),
        w();
    };
  Object.assign(t.pagination, {
    enable: I,
    disable: v,
    render: g,
    update: f,
    init: y,
    destroy: w,
  });
}
function q2(e) {
  let { swiper: t, extendParams: n, on: r, emit: i } = e;
  const s = Ae();
  n({
    zoom: {
      enabled: !1,
      limitToOriginalSize: !1,
      maxRatio: 3,
      minRatio: 1,
      toggle: !0,
      containerClass: "swiper-zoom-container",
      zoomedSlideClass: "swiper-slide-zoomed",
    },
  }),
    (t.zoom = { enabled: !1 });
  let o = 1,
    a = !1,
    l,
    c;
  const u = [],
    d = {
      originX: 0,
      originY: 0,
      slideEl: void 0,
      slideWidth: void 0,
      slideHeight: void 0,
      imageEl: void 0,
      imageWrapEl: void 0,
      maxRatio: 3,
    },
    f = {
      isTouched: void 0,
      isMoved: void 0,
      currentX: void 0,
      currentY: void 0,
      minX: void 0,
      minY: void 0,
      maxX: void 0,
      maxY: void 0,
      width: void 0,
      height: void 0,
      startX: void 0,
      startY: void 0,
      touchesStart: {},
      touchesCurrent: {},
    },
    g = {
      x: void 0,
      y: void 0,
      prevPositionX: void 0,
      prevPositionY: void 0,
      prevTime: void 0,
    };
  let y = 1;
  Object.defineProperty(t.zoom, "scale", {
    get() {
      return y;
    },
    set(N) {
      if (y !== N) {
        const D = d.imageEl,
          R = d.slideEl;
        i("zoomChange", N, D, R);
      }
      y = N;
    },
  });
  function w() {
    if (u.length < 2) return 1;
    const N = u[0].pageX,
      D = u[0].pageY,
      R = u[1].pageX,
      H = u[1].pageY;
    return Math.sqrt((R - N) ** 2 + (H - D) ** 2);
  }
  function I() {
    const N = t.params.zoom,
      D = d.imageWrapEl.getAttribute("data-swiper-zoom") || N.maxRatio;
    if (N.limitToOriginalSize && d.imageEl && d.imageEl.naturalWidth) {
      const R = d.imageEl.naturalWidth / d.imageEl.offsetWidth;
      return Math.min(R, D);
    }
    return D;
  }
  function v() {
    if (u.length < 2) return { x: null, y: null };
    const N = d.imageEl.getBoundingClientRect();
    return [
      (u[0].pageX + (u[1].pageX - u[0].pageX) / 2 - N.x - s.scrollX) / o,
      (u[0].pageY + (u[1].pageY - u[0].pageY) / 2 - N.y - s.scrollY) / o,
    ];
  }
  function m() {
    return t.isElement ? "swiper-slide" : `.${t.params.slideClass}`;
  }
  function h(N) {
    const D = m();
    return !!(
      N.target.matches(D) ||
      t.slides.filter((R) => R.contains(N.target)).length > 0
    );
  }
  function x(N) {
    const D = `.${t.params.zoom.containerClass}`;
    return !!(
      N.target.matches(D) ||
      [...t.hostEl.querySelectorAll(D)].filter((R) => R.contains(N.target))
        .length > 0
    );
  }
  function S(N) {
    if ((N.pointerType === "mouse" && u.splice(0, u.length), !h(N))) return;
    const D = t.params.zoom;
    if (((l = !1), (c = !1), u.push(N), !(u.length < 2))) {
      if (((l = !0), (d.scaleStart = w()), !d.slideEl)) {
        (d.slideEl = N.target.closest(`.${t.params.slideClass}, swiper-slide`)),
          d.slideEl || (d.slideEl = t.slides[t.activeIndex]);
        let R = d.slideEl.querySelector(`.${D.containerClass}`);
        if (
          (R &&
            (R = R.querySelectorAll(
              "picture, img, svg, canvas, .swiper-zoom-target"
            )[0]),
          (d.imageEl = R),
          R
            ? (d.imageWrapEl = es(d.imageEl, `.${D.containerClass}`)[0])
            : (d.imageWrapEl = void 0),
          !d.imageWrapEl)
        ) {
          d.imageEl = void 0;
          return;
        }
        d.maxRatio = I();
      }
      if (d.imageEl) {
        const [R, H] = v();
        (d.originX = R),
          (d.originY = H),
          (d.imageEl.style.transitionDuration = "0ms");
      }
      a = !0;
    }
  }
  function b(N) {
    if (!h(N)) return;
    const D = t.params.zoom,
      R = t.zoom,
      H = u.findIndex((K) => K.pointerId === N.pointerId);
    H >= 0 && (u[H] = N),
      !(u.length < 2) &&
        ((c = !0),
        (d.scaleMove = w()),
        d.imageEl &&
          ((R.scale = (d.scaleMove / d.scaleStart) * o),
          R.scale > d.maxRatio &&
            (R.scale = d.maxRatio - 1 + (R.scale - d.maxRatio + 1) ** 0.5),
          R.scale < D.minRatio &&
            (R.scale = D.minRatio + 1 - (D.minRatio - R.scale + 1) ** 0.5),
          (d.imageEl.style.transform = `translate3d(0,0,0) scale(${R.scale})`)));
  }
  function $(N) {
    if (!h(N) || (N.pointerType === "mouse" && N.type === "pointerout")) return;
    const D = t.params.zoom,
      R = t.zoom,
      H = u.findIndex((K) => K.pointerId === N.pointerId);
    H >= 0 && u.splice(H, 1),
      !(!l || !c) &&
        ((l = !1),
        (c = !1),
        d.imageEl &&
          ((R.scale = Math.max(Math.min(R.scale, d.maxRatio), D.minRatio)),
          (d.imageEl.style.transitionDuration = `${t.params.speed}ms`),
          (d.imageEl.style.transform = `translate3d(0,0,0) scale(${R.scale})`),
          (o = R.scale),
          (a = !1),
          R.scale > 1 && d.slideEl
            ? d.slideEl.classList.add(`${D.zoomedSlideClass}`)
            : R.scale <= 1 &&
              d.slideEl &&
              d.slideEl.classList.remove(`${D.zoomedSlideClass}`),
          R.scale === 1 &&
            ((d.originX = 0), (d.originY = 0), (d.slideEl = void 0))));
  }
  let T;
  function j() {
    t.touchEventsData.preventTouchMoveFromPointerMove = !1;
  }
  function P() {
    clearTimeout(T),
      (t.touchEventsData.preventTouchMoveFromPointerMove = !0),
      (T = setTimeout(() => {
        t.destroyed || j();
      }));
  }
  function C(N) {
    const D = t.device;
    if (!d.imageEl || f.isTouched) return;
    D.android && N.cancelable && N.preventDefault(), (f.isTouched = !0);
    const R = u.length > 0 ? u[0] : N;
    (f.touchesStart.x = R.pageX), (f.touchesStart.y = R.pageY);
  }
  function _(N) {
    if (!h(N) || !x(N)) return;
    const D = t.zoom;
    if (!d.imageEl || !f.isTouched || !d.slideEl) return;
    f.isMoved ||
      ((f.width = d.imageEl.offsetWidth || d.imageEl.clientWidth),
      (f.height = d.imageEl.offsetHeight || d.imageEl.clientHeight),
      (f.startX = nd(d.imageWrapEl, "x") || 0),
      (f.startY = nd(d.imageWrapEl, "y") || 0),
      (d.slideWidth = d.slideEl.offsetWidth),
      (d.slideHeight = d.slideEl.offsetHeight),
      (d.imageWrapEl.style.transitionDuration = "0ms"));
    const R = f.width * D.scale,
      H = f.height * D.scale;
    if (
      ((f.minX = Math.min(d.slideWidth / 2 - R / 2, 0)),
      (f.maxX = -f.minX),
      (f.minY = Math.min(d.slideHeight / 2 - H / 2, 0)),
      (f.maxY = -f.minY),
      (f.touchesCurrent.x = u.length > 0 ? u[0].pageX : N.pageX),
      (f.touchesCurrent.y = u.length > 0 ? u[0].pageY : N.pageY),
      Math.max(
        Math.abs(f.touchesCurrent.x - f.touchesStart.x),
        Math.abs(f.touchesCurrent.y - f.touchesStart.y)
      ) > 5 && (t.allowClick = !1),
      !f.isMoved && !a)
    ) {
      if (
        t.isHorizontal() &&
        ((Math.floor(f.minX) === Math.floor(f.startX) &&
          f.touchesCurrent.x < f.touchesStart.x) ||
          (Math.floor(f.maxX) === Math.floor(f.startX) &&
            f.touchesCurrent.x > f.touchesStart.x))
      ) {
        (f.isTouched = !1), j();
        return;
      }
      if (
        !t.isHorizontal() &&
        ((Math.floor(f.minY) === Math.floor(f.startY) &&
          f.touchesCurrent.y < f.touchesStart.y) ||
          (Math.floor(f.maxY) === Math.floor(f.startY) &&
            f.touchesCurrent.y > f.touchesStart.y))
      ) {
        (f.isTouched = !1), j();
        return;
      }
    }
    N.cancelable && N.preventDefault(),
      N.stopPropagation(),
      P(),
      (f.isMoved = !0);
    const ce = (D.scale - o) / (d.maxRatio - t.params.zoom.minRatio),
      { originX: xe, originY: Le } = d;
    (f.currentX =
      f.touchesCurrent.x -
      f.touchesStart.x +
      f.startX +
      ce * (f.width - xe * 2)),
      (f.currentY =
        f.touchesCurrent.y -
        f.touchesStart.y +
        f.startY +
        ce * (f.height - Le * 2)),
      f.currentX < f.minX &&
        (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8),
      f.currentX > f.maxX &&
        (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8),
      f.currentY < f.minY &&
        (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8),
      f.currentY > f.maxY &&
        (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8),
      g.prevPositionX || (g.prevPositionX = f.touchesCurrent.x),
      g.prevPositionY || (g.prevPositionY = f.touchesCurrent.y),
      g.prevTime || (g.prevTime = Date.now()),
      (g.x =
        (f.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2),
      (g.y =
        (f.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2),
      Math.abs(f.touchesCurrent.x - g.prevPositionX) < 2 && (g.x = 0),
      Math.abs(f.touchesCurrent.y - g.prevPositionY) < 2 && (g.y = 0),
      (g.prevPositionX = f.touchesCurrent.x),
      (g.prevPositionY = f.touchesCurrent.y),
      (g.prevTime = Date.now()),
      (d.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
  }
  function O() {
    const N = t.zoom;
    if (!d.imageEl) return;
    if (!f.isTouched || !f.isMoved) {
      (f.isTouched = !1), (f.isMoved = !1);
      return;
    }
    (f.isTouched = !1), (f.isMoved = !1);
    let D = 300,
      R = 300;
    const H = g.x * D,
      K = f.currentX + H,
      ce = g.y * R,
      xe = f.currentY + ce;
    g.x !== 0 && (D = Math.abs((K - f.currentX) / g.x)),
      g.y !== 0 && (R = Math.abs((xe - f.currentY) / g.y));
    const Le = Math.max(D, R);
    (f.currentX = K), (f.currentY = xe);
    const pn = f.width * N.scale,
      ht = f.height * N.scale;
    (f.minX = Math.min(d.slideWidth / 2 - pn / 2, 0)),
      (f.maxX = -f.minX),
      (f.minY = Math.min(d.slideHeight / 2 - ht / 2, 0)),
      (f.maxY = -f.minY),
      (f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX)),
      (f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY)),
      (d.imageWrapEl.style.transitionDuration = `${Le}ms`),
      (d.imageWrapEl.style.transform = `translate3d(${f.currentX}px, ${f.currentY}px,0)`);
  }
  function z() {
    const N = t.zoom;
    d.slideEl &&
      t.activeIndex !== t.slides.indexOf(d.slideEl) &&
      (d.imageEl && (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      d.imageWrapEl && (d.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      d.slideEl.classList.remove(`${t.params.zoom.zoomedSlideClass}`),
      (N.scale = 1),
      (o = 1),
      (d.slideEl = void 0),
      (d.imageEl = void 0),
      (d.imageWrapEl = void 0),
      (d.originX = 0),
      (d.originY = 0));
  }
  function F(N) {
    const D = t.zoom,
      R = t.params.zoom;
    if (!d.slideEl) {
      N &&
        N.target &&
        (d.slideEl = N.target.closest(`.${t.params.slideClass}, swiper-slide`)),
        d.slideEl ||
          (t.params.virtual && t.params.virtual.enabled && t.virtual
            ? (d.slideEl = at(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
            : (d.slideEl = t.slides[t.activeIndex]));
      let Yt = d.slideEl.querySelector(`.${R.containerClass}`);
      Yt &&
        (Yt = Yt.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (d.imageEl = Yt),
        Yt
          ? (d.imageWrapEl = es(d.imageEl, `.${R.containerClass}`)[0])
          : (d.imageWrapEl = void 0);
    }
    if (!d.imageEl || !d.imageWrapEl) return;
    t.params.cssMode &&
      ((t.wrapperEl.style.overflow = "hidden"),
      (t.wrapperEl.style.touchAction = "none")),
      d.slideEl.classList.add(`${R.zoomedSlideClass}`);
    let H, K, ce, xe, Le, pn, ht, gt, Gs, mi, Ys, Xs, Hn, Vn, vi, hi, yt, mn;
    typeof f.touchesStart.x > "u" && N
      ? ((H = N.pageX), (K = N.pageY))
      : ((H = f.touchesStart.x), (K = f.touchesStart.y));
    const vn = typeof N == "number" ? N : null;
    o === 1 &&
      vn &&
      ((H = void 0),
      (K = void 0),
      (f.touchesStart.x = void 0),
      (f.touchesStart.y = void 0));
    const gi = I();
    (D.scale = vn || gi),
      (o = vn || gi),
      N && !(o === 1 && vn)
        ? ((yt = d.slideEl.offsetWidth),
          (mn = d.slideEl.offsetHeight),
          (ce = yh(d.slideEl).left + s.scrollX),
          (xe = yh(d.slideEl).top + s.scrollY),
          (Le = ce + yt / 2 - H),
          (pn = xe + mn / 2 - K),
          (Gs = d.imageEl.offsetWidth || d.imageEl.clientWidth),
          (mi = d.imageEl.offsetHeight || d.imageEl.clientHeight),
          (Ys = Gs * D.scale),
          (Xs = mi * D.scale),
          (Hn = Math.min(yt / 2 - Ys / 2, 0)),
          (Vn = Math.min(mn / 2 - Xs / 2, 0)),
          (vi = -Hn),
          (hi = -Vn),
          (ht = Le * D.scale),
          (gt = pn * D.scale),
          ht < Hn && (ht = Hn),
          ht > vi && (ht = vi),
          gt < Vn && (gt = Vn),
          gt > hi && (gt = hi))
        : ((ht = 0), (gt = 0)),
      vn && D.scale === 1 && ((d.originX = 0), (d.originY = 0)),
      (d.imageWrapEl.style.transitionDuration = "300ms"),
      (d.imageWrapEl.style.transform = `translate3d(${ht}px, ${gt}px,0)`),
      (d.imageEl.style.transitionDuration = "300ms"),
      (d.imageEl.style.transform = `translate3d(0,0,0) scale(${D.scale})`);
  }
  function W() {
    const N = t.zoom,
      D = t.params.zoom;
    if (!d.slideEl) {
      t.params.virtual && t.params.virtual.enabled && t.virtual
        ? (d.slideEl = at(t.slidesEl, `.${t.params.slideActiveClass}`)[0])
        : (d.slideEl = t.slides[t.activeIndex]);
      let R = d.slideEl.querySelector(`.${D.containerClass}`);
      R &&
        (R = R.querySelectorAll(
          "picture, img, svg, canvas, .swiper-zoom-target"
        )[0]),
        (d.imageEl = R),
        R
          ? (d.imageWrapEl = es(d.imageEl, `.${D.containerClass}`)[0])
          : (d.imageWrapEl = void 0);
    }
    !d.imageEl ||
      !d.imageWrapEl ||
      (t.params.cssMode &&
        ((t.wrapperEl.style.overflow = ""),
        (t.wrapperEl.style.touchAction = "")),
      (N.scale = 1),
      (o = 1),
      (f.touchesStart.x = void 0),
      (f.touchesStart.y = void 0),
      (d.imageWrapEl.style.transitionDuration = "300ms"),
      (d.imageWrapEl.style.transform = "translate3d(0,0,0)"),
      (d.imageEl.style.transitionDuration = "300ms"),
      (d.imageEl.style.transform = "translate3d(0,0,0) scale(1)"),
      d.slideEl.classList.remove(`${D.zoomedSlideClass}`),
      (d.slideEl = void 0),
      (d.originX = 0),
      (d.originY = 0));
  }
  function G(N) {
    const D = t.zoom;
    D.scale && D.scale !== 1 ? W() : F(N);
  }
  function M() {
    const N = t.params.passiveListeners ? { passive: !0, capture: !1 } : !1,
      D = t.params.passiveListeners ? { passive: !1, capture: !0 } : !0;
    return { passiveListener: N, activeListenerWithCapture: D };
  }
  function k() {
    const N = t.zoom;
    if (N.enabled) return;
    N.enabled = !0;
    const { passiveListener: D, activeListenerWithCapture: R } = M();
    t.wrapperEl.addEventListener("pointerdown", S, D),
      t.wrapperEl.addEventListener("pointermove", b, R),
      ["pointerup", "pointercancel", "pointerout"].forEach((H) => {
        t.wrapperEl.addEventListener(H, $, D);
      }),
      t.wrapperEl.addEventListener("pointermove", _, R);
  }
  function A() {
    const N = t.zoom;
    if (!N.enabled) return;
    N.enabled = !1;
    const { passiveListener: D, activeListenerWithCapture: R } = M();
    t.wrapperEl.removeEventListener("pointerdown", S, D),
      t.wrapperEl.removeEventListener("pointermove", b, R),
      ["pointerup", "pointercancel", "pointerout"].forEach((H) => {
        t.wrapperEl.removeEventListener(H, $, D);
      }),
      t.wrapperEl.removeEventListener("pointermove", _, R);
  }
  r("init", () => {
    t.params.zoom.enabled && k();
  }),
    r("destroy", () => {
      A();
    }),
    r("touchStart", (N, D) => {
      t.zoom.enabled && C(D);
    }),
    r("touchEnd", (N, D) => {
      t.zoom.enabled && O();
    }),
    r("doubleTap", (N, D) => {
      !t.animating &&
        t.params.zoom.enabled &&
        t.zoom.enabled &&
        t.params.zoom.toggle &&
        G(D);
    }),
    r("transitionEnd", () => {
      t.zoom.enabled && t.params.zoom.enabled && z();
    }),
    r("slideChange", () => {
      t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && z();
    }),
    Object.assign(t.zoom, { enable: k, disable: A, in: F, out: W, toggle: G });
}
function J2(e) {
  let { swiper: t, extendParams: n, on: r, emit: i, params: s } = e;
  (t.autoplay = { running: !1, paused: !1, timeLeft: 0 }),
    n({
      autoplay: {
        enabled: !1,
        delay: 3e3,
        waitForTransition: !0,
        disableOnInteraction: !1,
        stopOnLastSlide: !1,
        reverseDirection: !1,
        pauseOnMouseEnter: !1,
      },
    });
  let o,
    a,
    l = s && s.autoplay ? s.autoplay.delay : 3e3,
    c = s && s.autoplay ? s.autoplay.delay : 3e3,
    u,
    d = new Date().getTime(),
    f,
    g,
    y,
    w,
    I,
    v,
    m;
  function h(M) {
    !t ||
      t.destroyed ||
      !t.wrapperEl ||
      (M.target === t.wrapperEl &&
        (t.wrapperEl.removeEventListener("transitionend", h),
        !(m || (M.detail && M.detail.bySwiperTouchMove)) && P()));
  }
  const x = () => {
      if (t.destroyed || !t.autoplay.running) return;
      t.autoplay.paused ? (f = !0) : f && ((c = u), (f = !1));
      const M = t.autoplay.paused ? u : d + c - new Date().getTime();
      (t.autoplay.timeLeft = M),
        i("autoplayTimeLeft", M, M / l),
        (a = requestAnimationFrame(() => {
          x();
        }));
    },
    S = () => {
      let M;
      return (
        t.virtual && t.params.virtual.enabled
          ? (M = t.slides.filter((A) =>
              A.classList.contains("swiper-slide-active")
            )[0])
          : (M = t.slides[t.activeIndex]),
        M ? parseInt(M.getAttribute("data-swiper-autoplay"), 10) : void 0
      );
    },
    b = (M) => {
      if (t.destroyed || !t.autoplay.running) return;
      cancelAnimationFrame(a), x();
      let k = typeof M > "u" ? t.params.autoplay.delay : M;
      (l = t.params.autoplay.delay), (c = t.params.autoplay.delay);
      const A = S();
      !Number.isNaN(A) &&
        A > 0 &&
        typeof M > "u" &&
        ((k = A), (l = A), (c = A)),
        (u = k);
      const N = t.params.speed,
        D = () => {
          !t ||
            t.destroyed ||
            (t.params.autoplay.reverseDirection
              ? !t.isBeginning || t.params.loop || t.params.rewind
                ? (t.slidePrev(N, !0, !0), i("autoplay"))
                : t.params.autoplay.stopOnLastSlide ||
                  (t.slideTo(t.slides.length - 1, N, !0, !0), i("autoplay"))
              : !t.isEnd || t.params.loop || t.params.rewind
              ? (t.slideNext(N, !0, !0), i("autoplay"))
              : t.params.autoplay.stopOnLastSlide ||
                (t.slideTo(0, N, !0, !0), i("autoplay")),
            t.params.cssMode &&
              ((d = new Date().getTime()),
              requestAnimationFrame(() => {
                b();
              })));
        };
      return (
        k > 0
          ? (clearTimeout(o),
            (o = setTimeout(() => {
              D();
            }, k)))
          : requestAnimationFrame(() => {
              D();
            }),
        k
      );
    },
    $ = () => {
      (d = new Date().getTime()),
        (t.autoplay.running = !0),
        b(),
        i("autoplayStart");
    },
    T = () => {
      (t.autoplay.running = !1),
        clearTimeout(o),
        cancelAnimationFrame(a),
        i("autoplayStop");
    },
    j = (M, k) => {
      if (t.destroyed || !t.autoplay.running) return;
      clearTimeout(o), M || (v = !0);
      const A = () => {
        i("autoplayPause"),
          t.params.autoplay.waitForTransition
            ? t.wrapperEl.addEventListener("transitionend", h)
            : P();
      };
      if (((t.autoplay.paused = !0), k)) {
        I && (u = t.params.autoplay.delay), (I = !1), A();
        return;
      }
      (u = (u || t.params.autoplay.delay) - (new Date().getTime() - d)),
        !(t.isEnd && u < 0 && !t.params.loop) && (u < 0 && (u = 0), A());
    },
    P = () => {
      (t.isEnd && u < 0 && !t.params.loop) ||
        t.destroyed ||
        !t.autoplay.running ||
        ((d = new Date().getTime()),
        v ? ((v = !1), b(u)) : b(),
        (t.autoplay.paused = !1),
        i("autoplayResume"));
    },
    C = () => {
      if (t.destroyed || !t.autoplay.running) return;
      const M = Ft();
      M.visibilityState === "hidden" && ((v = !0), j(!0)),
        M.visibilityState === "visible" && P();
    },
    _ = (M) => {
      M.pointerType === "mouse" &&
        ((v = !0), (m = !0), !(t.animating || t.autoplay.paused) && j(!0));
    },
    O = (M) => {
      M.pointerType === "mouse" && ((m = !1), t.autoplay.paused && P());
    },
    z = () => {
      t.params.autoplay.pauseOnMouseEnter &&
        (t.el.addEventListener("pointerenter", _),
        t.el.addEventListener("pointerleave", O));
    },
    F = () => {
      t.el &&
        typeof t.el != "string" &&
        (t.el.removeEventListener("pointerenter", _),
        t.el.removeEventListener("pointerleave", O));
    },
    W = () => {
      Ft().addEventListener("visibilitychange", C);
    },
    G = () => {
      Ft().removeEventListener("visibilitychange", C);
    };
  r("init", () => {
    t.params.autoplay.enabled && (z(), W(), $());
  }),
    r("destroy", () => {
      F(), G(), t.autoplay.running && T();
    }),
    r("_freeModeStaticRelease", () => {
      (y || v) && P();
    }),
    r("_freeModeNoMomentumRelease", () => {
      t.params.autoplay.disableOnInteraction ? T() : j(!0, !0);
    }),
    r("beforeTransitionStart", (M, k, A) => {
      t.destroyed ||
        !t.autoplay.running ||
        (A || !t.params.autoplay.disableOnInteraction ? j(!0, !0) : T());
    }),
    r("sliderFirstMove", () => {
      if (!(t.destroyed || !t.autoplay.running)) {
        if (t.params.autoplay.disableOnInteraction) {
          T();
          return;
        }
        (g = !0),
          (y = !1),
          (v = !1),
          (w = setTimeout(() => {
            (v = !0), (y = !0), j(!0);
          }, 200));
      }
    }),
    r("touchEnd", () => {
      if (!(t.destroyed || !t.autoplay.running || !g)) {
        if (
          (clearTimeout(w),
          clearTimeout(o),
          t.params.autoplay.disableOnInteraction)
        ) {
          (y = !1), (g = !1);
          return;
        }
        y && t.params.cssMode && P(), (y = !1), (g = !1);
      }
    }),
    r("slideChange", () => {
      t.destroyed || !t.autoplay.running || (I = !0);
    }),
    Object.assign(t.autoplay, { start: $, stop: T, pause: j, resume: P });
}
const eD = {
    0: { slidesPerView: 1 },
    630: { slidesPerView: 2 },
    1500: { slidesPerView: 3 },
  },
  tD = {
    0: { slidesPerView: 2 },
    900: { slidesPerView: 3 },
    1500: { slidesPerView: 4 },
  };
function Jf({ children: e, loop: t, autoPlayDelay: n, slidesPerView: r }) {
  const i = X();
  (r = r || 3), (r = i.clamp(r, 3, 4));
  const s = r === 3 ? eD : tD,
    o = { delay: n ? n * 1e3 : 1e4, disableOnInteraction: !1 };
  return p.jsx(qf, {
    className: "swiper-full-width",
    slidesPerView: r,
    spaceBetween: 20,
    pagination: { clickable: !0 },
    modules: [qx, J2],
    grabCursor: !0,
    preventClicksPropagation: !0,
    breakpoints: s,
    loop: t,
    autoplay: o,
    children: e,
  });
}
function fn({
  img: e,
  alt: t,
  size: n,
  dynamicSize: r,
  fallbackIcon: i,
  fallbackIconColors: s,
  className: o,
}) {
  const a = `circle-avatar-${n || 1}`,
    l = r ? `circle-avatar-dynamic-${n}` : "";
  return p.jsxs("div", {
    className: `circle-avatar ${o} ${a} ${l}`,
    style: { backgroundColor: s ? s.bg : null, color: s ? s.fill : "inherit" },
    children: [
      e && p.jsx(xs, { src: e, alt: t }),
      !e && i && p.jsx(Z, { iconName: i }),
    ],
  });
}
function Ha({ faIcon: e, text: t, className: n }) {
  return p.jsxs("div", {
    className: `info-badge text-1 ${n}`,
    children: [
      p.jsx(Z, { iconName: e, className: "me-2 opacity-50" }),
      p.jsx("span", { children: t }),
    ],
  });
}
function nD({
  title: e,
  text: t,
  img: n,
  fallbackIcon: r,
  fallbackIconColors: i,
  dateInterval: s,
  href: o,
  hrefLabel: a,
}) {
  const l = X(),
    { showConfirmationDialog: c } = mt(),
    { isBreakpoint: u } = fe(),
    { getString: d } = J();
  (e = e || ""), (t = t || "");
  const f = () => {
    o &&
      c(
        a,
        d("leaving_site").replace("$url", l.limitTextSize(o, 50)),
        d("cancel"),
        d("proceed"),
        () => {
          window.open(o, "_blank");
        }
      );
  };
  return p.jsxs(si, {
    className: "info-card",
    children: [
      p.jsxs(dn, {
        children: [
          p.jsx("div", {
            className: "avatar-wrapper",
            children: p.jsx(fn, {
              size: u("lg") ? 3 : 2,
              dynamicSize: !1,
              img: n,
              fallbackIcon: r,
              fallbackIconColors: i,
            }),
          }),
          p.jsxs("div", {
            className: "info mt-3",
            children: [
              p.jsx("h5", {
                className: "fw-bold",
                children: p.jsx("span", {
                  dangerouslySetInnerHTML: { __html: l.parseJsonText(e) },
                }),
              }),
              p.jsx("div", {
                className: "text-3 opacity-75 mt-3 mb-3",
                dangerouslySetInnerHTML: { __html: l.parseJsonText(t) },
              }),
            ],
          }),
        ],
      }),
      (s || o) &&
        p.jsxs(ll, {
          children: [
            p.jsx(Ha, {
              text: s,
              faIcon: "fa-solid fa-calendar",
              className: "text-1",
            }),
            p.jsx("div", {
              className: "link-wrapper",
              children: p.jsx(ol, {
                tooltip: a,
                size: 2,
                color: "dark",
                className: o ? "" : "invisible",
                icon: "fa-solid fa-arrow-up-right-dots",
                onClick: f,
                nav: !1,
              }),
            }),
          ],
        }),
    ],
  });
}
const Gt = () => {
  const { getString: e, getTranslation: t, selectedLanguageId: n } = J(),
    r = X(),
    i = (w, I) => (
      (I = I || []),
      (w.locales = w.locales || {}),
      (w.items = w.items || []),
      (w.categories = w.categories || []),
      I.length &&
        I.includes(w.config.format) === !1 &&
        console.warn(
          `The format ${w.config.format} is invalid for the article with ID ${w.id}.`
        ),
      {
        id: w.id,
        title: t(w.locales, "title", !0),
        items: w.items,
        categories: w.categories,
        config: w.config,
      }
    ),
    s = (w) => {
      for (const I of w)
        I.locales &&
          ((I.singular = t(I.locales, "singular")),
          (I.plural = t(I.locales, "plural")));
      return w;
    },
    o = (w) => w.some((I) => I.value),
    a = (w, I) => w.some((v) => t(v.locales, I, !0)),
    l = (w) => {
      w.sort((I, v) => {
        var x, S;
        const m =
            (x = I.dates) != null && x.start ? new Date(I.dates.start) : null,
          h = (S = v.dates) != null && S.start ? new Date(v.dates.start) : null;
        return !m && !h ? 0 : m ? (h ? h - m : -1) : 1;
      });
    },
    c = (w, I) => (
      (I = I || {}),
      (I.hideDayFromDates = I.hideDayFromDates || !0),
      w.map((v, m) => {
        var j, P;
        const h = v.locales,
          x = v.icon,
          S = v.dates,
          b = v.links,
          $ = v.media,
          T = {};
        if (
          ((T.title = r.parseJsonText(t(h, "title"))),
          (T.info = r.parseJsonText(t(h, "info", !0))),
          (T.text = r.parseJsonText(t(h, "text", !0))),
          (T.tags = t(h, "tags", !0) || []),
          (T.img = x && x.img ? r.resolvePath(x.img) : null),
          (T.faIcon = (x == null ? void 0 : x.fa) || null),
          (T.faIconColors = (x == null ? void 0 : x.faColors) || null),
          (T.dateInterval = S
            ? r.formatDateInterval(
                S == null ? void 0 : S.start,
                S == null ? void 0 : S.end,
                n,
                !0,
                I.hideDayFromDates
              )
            : null),
          (T.dateStarted = S == null ? void 0 : S.start),
          (T.dateEnded = S == null ? void 0 : S.end),
          (T.links = b
            ? b.map((C, _) => ({
                href: C.href,
                hrefLabel: e(C.string || "link"),
                faIcon: C.faIcon,
              }))
            : []),
          (T.mediaOptions = []),
          $)
        ) {
          const C = v.media.screenshots,
            _ = v.media.youtubeVideo;
          C &&
            (j = C.images) != null &&
            j.length &&
            T.mediaOptions.push({
              id: "gallery",
              target: C,
              tooltip: e("open_gallery"),
              faIcon: "fa-solid fa-camera",
            }),
            _ &&
              T.mediaOptions.push({
                id: "youtube",
                target: _,
                tooltip: e("watch_video"),
                faIcon: "fa-brands fa-youtube",
              });
        }
        return (
          (T.categoryId = v.categoryId),
          (T.firstLink = (P = T.links) != null && P.length ? T.links[0] : null),
          (T.value = v.value),
          T
        );
      })
    );
  return {
    parseArticleData: i,
    parseArticleCategories: s,
    hasAnyItemWithValue: o,
    hasAnyItemWithLocaleFieldNamed: a,
    sortArticleItemsByDateDesc: l,
    parseArticleItems: c,
    bindItemsToCategories: (w, I) => {
      w.forEach((v) => {
        v.category = I.find((m) => m.id === v.categoryId);
      });
    },
    formatForGrid: (w) => {
      var v;
      const I = c(w);
      for (const m of I)
        (m.value = m.value || m.info),
          (m.label = m.value),
          (m.href = (v = m.firstLink) == null ? void 0 : v.href);
      return I;
    },
    formatForActivityList: (w) => {
      const I = c(w);
      for (const v of I) {
        const m = v.tags.length ? " – " : "";
        (v.title = v.title + m),
          (v.progress =
            v.value !== null && v.value !== void 0 ? Number(v.value) : null),
          (v.description = v.info),
          (v.fallbackIcon = v.faIcon),
          (v.fallbackIconColors = v.faIconColors);
      }
      return I;
    },
    formatForThreads: (w) => {
      var v, m;
      const I = c(w);
      for (const h of I)
        (h.date = h.dateInterval),
          (h.place = h.info),
          (h.description = h.text),
          (h.href = (v = h.firstLink) == null ? void 0 : v.href),
          (h.hrefLabel = (m = h.firstLink) == null ? void 0 : m.hrefLabel);
      return I;
    },
    formatForTimeline: (w) => c(w),
  };
};
function rD({ data: e }) {
  const t = Gt(),
    n = t.parseArticleData(e),
    r = n.items;
  t.sortArticleItemsByDateDesc(r);
  const i = t.parseArticleItems(r, { hideDayFromDates: !1 });
  return p.jsx(Vt, {
    className: "article-cards",
    title: n.title,
    children: p.jsx(Jf, {
      loop: !0,
      autoPlayDelay: 4,
      children: i.map((s, o) => {
        var a, l;
        return p.jsx(
          Hs,
          {
            className: "custom-swiper-slide",
            children: p.jsx(nD, {
              title: s.title,
              text: s.text,
              img: s.img,
              fallbackIcon: s.faIcon,
              fallbackIconColors: s.faIconColors,
              href: (a = s.firstLink) == null ? void 0 : a.href,
              hrefLabel: (l = s.firstLink) == null ? void 0 : l.hrefLabel,
              dateInterval: s.dateInterval,
            }),
          },
          o
        );
      }),
    }),
  });
}
function Du({
  id: e,
  type: t,
  value: n,
  valueSetter: r,
  faIcon: i,
  placeholder: s,
  required: o,
}) {
  const a = s + (o ? "*" : ""),
    [l, c] = E.useState(!1),
    u = (g) => {
      r(g.target.value);
    },
    d = () => {
      c(!0);
    },
    f = () => {
      c(!1);
    };
  return p.jsxs(iw, {
    className: "input-group-list",
    children: [
      p.jsx(Ns, {
        className: l ? "input-group-text-focused" : "",
        children: p.jsx(Z, { iconName: i }),
      }),
      p.jsx("input", {
        className: "form-control text-4",
        id: e,
        type: t,
        value: n,
        placeholder: a,
        required: o,
        onChange: u,
        onFocus: d,
        onBlur: f,
      }),
    ],
  });
}
function iD({ id: e, placeholder: t, value: n, valueSetter: r, required: i }) {
  const s = t + (i ? "*" : ""),
    o = (a) => {
      r(a.target.value);
    };
  return p.jsx(iw, {
    className: "input-group-list",
    children: p.jsx("textarea", {
      className: "form-control text-4",
      id: e,
      onChange: o,
      value: n,
      placeholder: s,
      required: i,
    }),
  });
}
function sD({
  children: e,
  id: t,
  submitLabel: n,
  submitIcon: r,
  onSubmit: i,
}) {
  const { getString: s } = J();
  return (
    (r = r || "fa-solid fa-circle"),
    (n = n || s("submit")),
    p.jsx("form", {
      id: t,
      onSubmit: i,
      className: "mt-4 pt-0 pt-xl-2",
      children: p.jsxs(ks, {
        children: [
          e,
          p.jsx(Ln, {
            className: "col-12 text-center mt-2",
            children: p.jsxs("button", {
              className: "btn btn-xl btn-highlight",
              type: "submit",
              children: [p.jsx(Z, { iconName: `${r} me-2` }), n],
            }),
          }),
        ],
      }),
    })
  );
}
function oD({ title: e, message: t, faIcon: n, type: r }) {
  const { isBreakpoint: i } = fe(),
    s = X();
  let o = null;
  switch (r) {
    case "success":
      o = {
        bg: s.getRootSCSSVariable("theme-highlight"),
        fill: s.getRootSCSSVariable("theme-dark"),
      };
      break;
  }
  return p.jsx(si, {
    className: "status-message",
    children: p.jsx(dn, {
      children: p.jsxs("div", {
        children: [
          p.jsx(fn, {
            size: i("lg") ? 5 : 3,
            dynamicSize: !1,
            img: null,
            fallbackIcon: n,
            fallbackIconColors: o,
          }),
          p.jsxs("div", {
            className: "status-message-content mt-2",
            children: [
              p.jsx("h5", { className: "fw-bold mb-3", children: e }),
              p.jsx("p", {
                className: "text-5 text-muted",
                dangerouslySetInnerHTML: { __html: t },
              }),
            ],
          }),
        ],
      }),
    }),
  });
}
function aD({ data: e }) {
  const t = Gt(),
    n = Jy(),
    {
      showActivitySpinner: r,
      hideActivitySpinner: i,
      displayNotification: s,
    } = mt(),
    { getString: o } = J(),
    { getSelectedTheme: a } = nf(),
    [l, c] = E.useState(""),
    [u, d] = E.useState(""),
    [f, g] = E.useState(""),
    [y, w] = E.useState(""),
    [I, v] = E.useState(!1),
    m = t.parseArticleData(e);
  E.useEffect(() => {
    h();
  }, [a()]);
  const h = () => {
      const T = document.getElementById("contact-form");
      T && T.reset(), c(""), d(""), g("");
    },
    x = (T) => {
      T.preventDefault(),
        r("submitting"),
        setTimeout(async () => {
          await S();
        }, 300);
    },
    S = async () => {
      if (!n.isInitialized()) {
        i("submitting"), $();
        return;
      }
      window.scrollTo({ top: 260, behavior: "instant" }),
        (await n.sendContactEmail(l, u, f, y)) ? b() : $();
    },
    b = () => {
      i("submitting"), v(!0);
    },
    $ = () => {
      i("submitting"), s("error", o("uhOh"), o("message_sent_error"));
    };
  return p.jsxs(Vt, {
    className: "article-contact-form pb-2",
    title: m.title,
    children: [
      !I &&
        p.jsxs(sD, {
          id: "contact-form",
          submitIcon: "fa-solid fa-envelope",
          submitLabel: o("send_message"),
          onSubmit: x,
          children: [
            p.jsxs(Ln, {
              className: "col-12 col-xl-6",
              children: [
                p.jsx(Du, {
                  id: "name",
                  type: "text",
                  value: l,
                  valueSetter: c,
                  faIcon: "fa-solid fa-signature",
                  placeholder: o("name"),
                  required: !0,
                }),
                p.jsx(Du, {
                  id: "email",
                  type: "email",
                  value: u,
                  valueSetter: d,
                  faIcon: "fa-solid fa-envelope",
                  placeholder: o("email"),
                  required: !0,
                }),
                p.jsx(Du, {
                  id: "subject",
                  type: "text",
                  value: f,
                  valueSetter: g,
                  faIcon: "fa-solid fa-pen-to-square",
                  placeholder: o("subject"),
                  required: !0,
                }),
              ],
            }),
            p.jsx(Ln, {
              className: "col-12 col-xl-6 d-flex",
              children: p.jsx(iD, {
                id: "message",
                value: y,
                valueSetter: w,
                placeholder: o("message"),
                required: !0,
              }),
            }),
          ],
        }),
      I &&
        p.jsx(oD, {
          title: o("yay"),
          faIcon: "fa-solid fa-check",
          type: "success",
          message: o("message_sent_success"),
        }),
    ],
  });
}
function Vs({ href: e, className: t, children: n }) {
  const { showConfirmationDialog: r } = mt(),
    { getString: i } = J(),
    s = X(),
    o = (a) => {
      e.includes("mailto") ||
        e.includes("tel:") ||
        (a.preventDefault(),
        r(
          i("open_link"),
          i("leaving_site").replace("$url", s.limitTextSize(e, 50)),
          i("cancel"),
          i("proceed"),
          () => {
            window.open(e, "_blank");
          }
        ));
    };
  return p.jsx("a", { href: e, className: t, onClick: o, children: n });
}
function lD({ items: e, textClass: t }) {
  const { isBreakpoint: n } = fe(),
    r = !n("sm");
  return (
    (t = t || "text-4"),
    r && (e = e.slice(0, 2)),
    p.jsx("ul", {
      className: "inline-list",
      children: e.map((i, s) =>
        p.jsxs(
          "li",
          {
            className: `inline-list-item ${t}`,
            children: [
              i.href &&
                p.jsx(Vs, {
                  href: i.href,
                  className: "inline-list-link",
                  children: p.jsx(Th, { item: i, shortenedMode: r }),
                }),
              !i.href && p.jsx(Th, { item: i, shortenedMode: r }),
            ],
          },
          s
        )
      ),
    })
  );
}
function Th({ item: e, shortenedMode: t }) {
  let n = e.label;
  return (
    t && (n = e.shortLabel || n),
    p.jsxs("div", {
      className: `inline-link-list-content ${e.href ? "" : "text-secondary-2"}`,
      children: [
        e.img && p.jsx(xs, { src: e.img, alt: n, className: "me-2" }),
        !e.img &&
          p.jsx(Z, {
            iconName: e.faIcon,
            colors: e.faIconColors,
            className: `me-1 me-md-2 ${e.href ? "" : "opacity-50"}`,
          }),
        p.jsx("span", { children: n }),
      ],
    })
  );
}
function uD({ items: e }) {
  return p.jsx(ks, {
    className: "info-grid gy-3 gy-xl-4",
    children: e.map((t, n) =>
      p.jsx(
        Ln,
        {
          className: "col-12 col-sm-6 col-md-12 col-xl-6",
          children: p.jsx(cD, { item: t }),
        },
        n
      )
    ),
  });
}
function cD({ item: e }) {
  const { isMobileLayout: t } = fe();
  return p.jsx(si, {
    className: "info-grid-item",
    children: p.jsxs(dn, {
      children: [
        p.jsx("div", {
          className: "avatar-wrapper me-3",
          children: p.jsx(fn, {
            size: t() ? 1 : 2,
            dynamicSize: !1,
            img: e.img,
            fallbackIcon: e.faIcon,
            fallbackIconColors: e.faIconColors,
          }),
        }),
        p.jsxs("div", {
          className: "text-wrapper",
          children: [
            p.jsx("h6", { className: "fw-bold mb-1", children: e.title }),
            e.href &&
              p.jsx(Vs, {
                href: e.href,
                className: "text-3 fw-bold",
                children: e.value,
              }),
            !e.href &&
              p.jsx("span", {
                className: "text-3 text-muted",
                children: e.value,
              }),
          ],
        }),
      ],
    }),
  });
}
function Cl({
  children: e,
  items: t,
  storageId: n,
  onFilter: r,
  controlsClass: i,
  maxItems: s,
  stepAmount: o,
}) {
  const { getString: a } = J(),
    [l, c] = E.useState(0);
  E.useEffect(() => {
    window.expandableStates = window.expandableStates || {};
    const f = window.expandableStates[n] || {};
    u(f.displayingItems || s);
  }, [t, s]),
    E.useEffect(() => {
      window.expandableStates = window.expandableStates || {};
      const f = window.expandableStates[n] || {};
      u(f.displayingItems || s);
    }, []);
  const u = (f, g) => {
      c(f);
      const y = t.slice(0, f);
      r(y),
        !(!n || !g) &&
          ((window.expandableStates = window.expandableStates || {}),
          (window.expandableStates[n] = { displayingItems: f }));
    },
    d = (f) => {
      f.currentTarget.blur(), u(l + (o || s), !0);
    };
  return p.jsxs(p.Fragment, {
    children: [
      e,
      l < t.length &&
        p.jsx("div", {
          className: `col-12 w-100 text-center ${i}`,
          children: p.jsxs("button", {
            className: "btn btn-primary text-3",
            onClick: d,
            children: [
              p.jsx(Z, { iconName: "fa-solid fa-caret-down" }),
              p.jsx("span", { className: "ms-2", children: a("see_more") }),
            ],
          }),
        }),
    ],
  });
}
function dD({ data: e }) {
  const { isBreakpoint: t, isMobileLayout: n } = fe(),
    { selectedLanguageId: r } = J(),
    i = Gt(),
    [s, o] = E.useState([]),
    [a, l] = E.useState([]),
    c = ["inline", "grid"],
    u = i.parseArticleData(e, c);
  return (
    E.useEffect(() => {
      const d = i.formatForGrid(u.items);
      o(d);
    }, [null, r]),
    p.jsxs(Vt, {
      className: "article-grid",
      title: u.title,
      children: [
        p.jsx("div", {
          className: "text-center",
          children:
            u.config.format === "inline" &&
            p.jsx(lD, { items: s, textClass: t("sm") ? "text-4" : "text-3" }),
        }),
        u.config.format === "grid" &&
          p.jsx(Cl, {
            items: s,
            storageId: e.id + "_expandable",
            onFilter: l,
            controlsClass: "pt-3",
            maxItems: n() ? 4 : 10,
            stepAmount: 4,
            children: p.jsx(uD, { items: a }),
          }),
      ],
    })
  );
}
const fD = X();
function pD({ img: e, faIcon: t, faIconColors: n, html: r }) {
  return p.jsxs("div", {
    className: "info-block",
    children: [
      (e || t) && p.jsx(mD, { img: e, fallbackIcon: t, fallbackIconColors: n }),
      p.jsx(vD, { html: r }),
    ],
  });
}
function mD({ img: e, fallbackIcon: t, fallbackIconColors: n }) {
  return p.jsxs("div", {
    className: "info-block-image-col",
    children: [
      e && p.jsx(xs, { src: e, alt: "logo" }),
      !e && p.jsx(Z, { iconName: t, className: "display-6", colors: n }),
    ],
  });
}
function vD({ html: e }) {
  return p.jsx("div", {
    className: "info-block-text-col",
    children: p.jsx("span", {
      className: "text-4",
      dangerouslySetInnerHTML: { __html: fD.parseJsonText(e) },
    }),
  });
}
function hD({ data: e }) {
  const t = Gt(),
    n = t.parseArticleData(e),
    r = n.items;
  t.sortArticleItemsByDateDesc(r);
  const i = t.parseArticleItems(r);
  return p.jsx(Vt, {
    className: "article-info-block",
    title: n.title,
    children: i.map((s, o) =>
      p.jsx(
        pD,
        {
          img: s.img,
          faIcon: s.faIcon,
          faIconColors: s.faIconColors,
          html: s.text,
        },
        o
      )
    ),
  });
}
function gD({ now: e, fillColor: t }) {
  return p.jsx("div", {
    className: "progress",
    children: p.jsx("div", {
      className: "progress-bar",
      role: "progressbar",
      style: {
        width: `${e}%`,
        backgroundColor: t || "auto",
        opacity: 0.25 + (e / 100) * 0.75,
      },
    }),
  });
}
const ep = X();
function yD({
  items: e,
  storageId: t,
  colClass: n,
  maxItems: r,
  hideProgressBar: i,
  cascadeMargin: s,
}) {
  const { currentTimeSpan: o } = fe(),
    [a, l] = E.useState([]),
    [c] = E.useState(o),
    u = (f) => f.progress !== null && f.progress !== void 0 && !i,
    d = (f) => {
      if (!s) return {};
      const g = Math.floor(a.length / 2),
        y = 30;
      let w;
      return (
        f < g ? (w = f * y) : (w = (a.length - f - 1) * y),
        { marginLeft: `${w}px` }
      );
    };
  return p.jsx(ks, {
    className: "gy-2 gy-md-3",
    children: p.jsx(Cl, {
      items: e,
      storageId: t,
      onFilter: l,
      controlsClass: "mt-3 mt-lg-4",
      maxItems: r || 4,
      stepAmount: 10,
      children: a.map((f, g) =>
        p.jsxs(
          Ln,
          {
            className: n || "col-12 col-lg-6",
            children: [
              u(f) && p.jsx(wD, { item: f, customStyle: d(g), createdAt: c }),
              !u(f) && p.jsx(Jx, { item: f, customStyle: d(g) }),
            ],
          },
          g
        )
      ),
    }),
  });
}
function Jx({ item: e, customStyle: t, children: n }) {
  const { getString: r } = J();
  let i = "";
  if (e.dateStarted) {
    const s = ep.getYearsPassedSince(e.dateStarted),
      o = Math.floor(s);
    (i = r("experience_year_count_less_than_one")),
      o > 1
        ? (i = r("experience_year_count_plural").replace("{x}", o + "+"))
        : o === 1 &&
          (i = r("experience_year_count_singular").replace("{x}", o));
  }
  return p.jsxs("div", {
    className: "activity-list-item",
    style: t,
    children: [
      p.jsx("div", {
        className: "avatar-wrapper me-3",
        children: p.jsx(fn, {
          size: 1,
          dynamicSize: !0,
          img: e.img,
          fallbackIcon: e.fallbackIcon,
          fallbackIconColors: e.fallbackIconColors,
        }),
      }),
      p.jsxs("div", {
        className: "content-wrapper w-100",
        children: [
          p.jsxs("div", {
            className: "d-flex justify-content-between font-family-subheadings",
            children: [
              p.jsxs("div", {
                className: "fw-bold text-2",
                children: [
                  p.jsx("span", {
                    dangerouslySetInnerHTML: { __html: e.title },
                  }),
                  e.tags.map((s, o) =>
                    p.jsx("span", { className: "opacity-75", children: s }, o)
                  ),
                ],
              }),
              e.progress !== null &&
                e.progress !== !1 &&
                p.jsxs("span", {
                  className: "text-muted text-1 me-1 fw-bold",
                  children: [e.progress, "%"],
                }),
            ],
          }),
          p.jsx("div", { className: "custom-fields mt-1", children: n }),
          e.dateStarted &&
            p.jsx(Ch, {
              icon: "fa-solid fa-stopwatch",
              text: i,
              shouldDisplayLargeText: !!n,
            }),
          e.description &&
            p.jsx(Ch, {
              icon: e.dateStarted ? "fa-solid fa-comment" : "",
              text: e.description,
              shouldDisplayLargeText: !!n,
            }),
        ],
      }),
    ],
  });
}
function Ch({ icon: e, text: t, shouldDisplayLargeText: n }) {
  return p.jsx("div", {
    className: "w-100 text-muted fw-bold",
    children: p.jsxs("div", {
      className: `${n ? "text-1" : "text-2"}`,
      style: { marginTop: "2px" },
      children: [
        e && p.jsx(Z, { iconName: `${e} text-1 opacity-50 me-1` }),
        p.jsx("span", {
          dangerouslySetInnerHTML: { __html: ep.parseJsonText(t) },
        }),
      ],
    }),
  });
}
function wD({ item: e, createdAt: t }) {
  const { currentTimeSpan: n, isBreakpoint: r } = fe(),
    i = ep.isTouchDevice() || !r("xl"),
    [s, o] = E.useState(i ? e.progress : 0);
  return (
    E.useEffect(() => {
      i ||
        (o(0),
        setTimeout(
          () => {
            o(e.progress);
          },
          Math.abs(n - t) < 1 ? 500 : 0
        ));
    }, []),
    p.jsx(Jx, { item: e, children: p.jsx(gD, { now: s }) })
  );
}
function xD({ data: e }) {
  const t = Gt(),
    n = t.parseArticleData(e),
    r = n.items,
    { selectedLanguageId: i } = J(),
    { isMobileLayout: s } = fe(),
    [o, a] = E.useState([]),
    l = t.hasAnyItemWithValue(r),
    c = t.hasAnyItemWithLocaleFieldNamed(r, "info"),
    u = s() ? 4 : 12;
  let d = "col-12";
  return (
    l && !c
      ? (d = "col-12 col-md-6 col-xxl-4")
      : c && o.length > 4 && (d = "col-12 col-xl-6"),
    E.useEffect(() => {
      const f = t.formatForActivityList(r);
      a(f);
    }, [null, i]),
    p.jsx(Vt, {
      className: "article-list",
      title: n.title,
      children: p.jsx(yD, {
        items: o,
        storageId: e.id + "_expandable",
        maxItems: u,
        colClass: d,
      }),
    })
  );
}
function SD({ items: e, selectedItemId: t, onSelect: n }) {
  const r = (i) => {
    n && n(i.id);
  };
  return p.jsx("div", {
    className: "filter-tabs",
    children: p.jsx("div", {
      className: "btn-group",
      role: "group",
      children: e.map((i, s) =>
        p.jsx(ED, { item: i, isSelected: i.id === t, onClick: r }, s)
      ),
    }),
  });
}
function ED({ item: e, isSelected: t, onClick: n }) {
  const { getString: r } = J(),
    i = t ? "btn-selected" : null,
    s = r("filter_by").replace("{x}", e.label),
    o = e.label + (e.count ? ` (${e.count})` : ""),
    a = (l) => {
      n(e);
    };
  return p.jsx(pl, {
    className: `btn btn-primary text-1 ${i}`,
    onClick: a,
    tooltipText: s,
    children: p.jsx("span", { children: o }),
  });
}
function ID({
  children: e,
  items: t,
  categories: n,
  storageId: r,
  onFilter: i,
  controlsClass: s,
}) {
  const { getString: o, getTranslation: a } = J(),
    [l, c] = E.useState(null),
    u = [
      { id: null, label: o("all_categories"), count: t.length },
      ...n.map((f) => ({
        id: f.id,
        label: a(f.locales, "plural"),
        count: t.filter((g) => g.categoryId === f.id).length,
      })),
    ];
  E.useEffect(() => {
    window.categorizableStates = window.categorizableStates || {};
    const f = window.categorizableStates[r] || {};
    d(f.selectedCategoryId || null);
  }, [null, t]);
  const d = (f) => {
    c(f);
    const g = f ? t.filter((y) => y.categoryId === f) : t;
    i(g),
      r &&
        ((window.categorizableStates = window.categorizableStates || {}),
        (window.categorizableStates[r] = { selectedCategoryId: f }));
  };
  return p.jsxs(p.Fragment, {
    children: [
      p.jsx(Ln, {
        className: `col-12 mb-2 w-100 ${s}`,
        children: p.jsx(SD, { items: u, selectedItemId: l, onSelect: d }),
      }),
      e,
    ],
  });
}
function eS({ strings: e, className: t, shorten: n }) {
  return (
    (!e || !e.map) && (e = []),
    p.jsx("div", {
      className: `tags d-block ${t}`,
      children: e.map((r, i) =>
        p.jsxs(
          "span",
          {
            className: `badge badge-sm ${n ? "badge-xs" : ""}`,
            children: [
              !n &&
                p.jsx(Z, {
                  iconName: "fa-solid fa-bullseye",
                  className: "me-2 opacity-25",
                }),
              n ? r : r.toUpperCase(),
            ],
          },
          i
        )
      ),
    })
  );
}
function bh({ links: e, options: t, type: n, onOptionClicked: r }) {
  n = n || "default";
  const i = (s, o) => {
    r && r(s);
  };
  return p.jsxs("ul", {
    className: "circular-button-list",
    children: [
      e &&
        e.map((s, o) =>
          p.jsx(
            "li",
            {
              className: "circular-button-list-item",
              children: p.jsx(Vs, {
                href: s.href,
                target: "_blank",
                "aria-label": s.faIcon,
                className: `circular-button circular-button-${n}`,
                children: p.jsx(Z, { iconName: s.faIcon }),
              }),
            },
            o
          )
        ),
      t &&
        t.map((s, o) =>
          p.jsx(
            "li",
            {
              className: "circular-button-list-item",
              children: p.jsx("button", {
                "data-tooltip": s.tooltip,
                "aria-label": s.id,
                className: `circular-button circular-button-${n}`,
                onClick: (a) => {
                  i(s);
                },
                children: p.jsx(Z, { iconName: s.faIcon }),
              }),
            },
            o
          )
        ),
    ],
  });
}
function TD({
  className: e,
  img: t,
  fallbackIcon: n,
  fallbackIconColors: r,
  title: i,
  subtitle: s,
  text: o,
  links: a,
  options: l,
  tags: c,
}) {
  const { displayYoutubeVideo: u, displayGallery: d } = mt(),
    { isBreakpoint: f } = fe(),
    g = !!(a && a.length),
    y = (w) => {
      switch (w.id) {
        case "youtube":
          u(w.target, i, o);
          break;
        case "gallery":
          d(w.target.images || [], w.target.aspectRatio, i, o);
          break;
      }
    };
  return p.jsx(si, {
    className: `grid-item ${e}`,
    children: p.jsxs(dn, {
      children: [
        p.jsx(fn, {
          size: f("xl") ? 3 : 2,
          dynamicSize: !1,
          img: t,
          fallbackIcon: n,
          fallbackIconColors: r,
        }),
        p.jsxs("div", {
          className: "title-wrapper",
          children: [
            p.jsx("h5", {
              className: "title fw-bold mb-0 text-highlight",
              children: i,
            }),
            p.jsx("span", {
              className:
                "font-family-subheadings fw-bold text-muted text-1 ms-1",
              children: s,
            }),
          ],
        }),
        p.jsx("div", {
          className: "tags-wrapper text-2 mt-2",
          children: p.jsx(eS, { strings: c, shorten: !0 }),
        }),
        o &&
          p.jsx("div", {
            className: "main-content-wrapper mt-2 mb-3",
            children: p.jsx("div", {
              className: "text opacity-75",
              dangerouslySetInnerHTML: { __html: o },
            }),
          }),
        p.jsxs("div", {
          className: `links-wrapper ${o ? "" : "mt-3"}`,
          children: [
            g && p.jsx(bh, { links: a }),
            p.jsx(bh, { options: l, onOptionClicked: y }),
          ],
        }),
      ],
    }),
  });
}
const Xn = {
  INVISIBLE: "invisible",
  VISIBLE: "visible",
  VISIBLE_WITH_TWEEN: "visible_with_tween",
};
function CD({ data: e }) {
  const t = Gt(),
    n = Fn(),
    { isBreakpoint: r } = fe(),
    { selectedLanguageId: i } = J(),
    s = t.parseArticleData(e),
    [o, a] = E.useState([]),
    [l, c] = E.useState([]),
    [u, d] = E.useState(o),
    [f, g] = E.useState(o),
    [y, w] = E.useState(!1),
    [I, v] = E.useState(!1);
  E.useEffect(() => {
    const x = t.parseArticleItems(s.items),
      S = t.parseArticleCategories(s.categories);
    t.bindItemsToCategories(x, S), a(x), c(S), d(x), v(!0);
  }, [null, i]),
    E.useEffect(() => {
      if (I) {
        v(!1);
        return;
      }
      w(!0), m(Xn.INVISIBLE);
    }, [u]),
    E.useEffect(() => {
      m(y ? Xn.VISIBLE_WITH_TWEEN : Xn.VISIBLE), w(!1);
    }, [f]),
    E.useEffect(() => {
      m(Xn.VISIBLE);
    }, []);
  const m = (x) => {
      const S = "portfolio-grid";
      n.clearAllWithTag(S);
      const b = document.querySelectorAll(".grid-item");
      switch (x) {
        case Xn.INVISIBLE:
          b.forEach(($, T) => {
            $.classList.add("grid-item-hidden");
          });
          break;
        case Xn.VISIBLE:
          b.forEach(($, T) => {
            $.classList.remove("grid-item-hidden");
          });
          break;
        case Xn.VISIBLE_WITH_TWEEN:
          b.forEach(($, T) => {
            $.classList.add("grid-item-hidden"),
              n.schedule(
                () => {
                  $.classList.remove("grid-item-hidden");
                },
                200 + 100 * T,
                S
              );
          });
          break;
      }
    },
    h = () => (r("xxl") ? 9 : r("lg") ? 8 : r("sm") ? 6 : 4);
  return p.jsx(Vt, {
    className: "article-portfolio",
    title: s.title,
    children: p.jsx(ks, {
      className: "gx-4 gy-lg-4 gx-lg-5",
      children: p.jsx(ID, {
        items: o,
        categories: l,
        onFilter: d,
        storageId: e.id + "_categorizable",
        controlsClass: "",
        children: p.jsx(Cl, {
          items: u,
          storageId: null,
          onFilter: g,
          controlsClass: "mt-4 pt-1",
          maxItems: h(),
          children: f.map((x, S) =>
            p.jsx(
              Ln,
              {
                className: "col-12 col-sm-6 col-md-12 col-lg-6 col-xxl-4",
                children: p.jsx(TD, {
                  title: x.title,
                  subtitle: x.category.singular,
                  text: x.text,
                  links: x.links,
                  options: x.mediaOptions,
                  tags: x.tags.slice(0, 3),
                  img: x.img,
                  fallbackIcon: x.faIcon,
                  fallbackIconColors: x.faIconColors,
                  className: "grid-item-hidden",
                }),
              },
              S
            )
          ),
        }),
      }),
    }),
  });
}
function bD({
  img: e,
  fallbackIcon: t,
  fallbackIconColors: n,
  title: r,
  info: i,
}) {
  const s = X(),
    { getBreakpoint: o } = fe();
  let a = 2;
  return (
    o() === "xl" && (a = 3),
    o() === "xxl" && (a = 4),
    p.jsxs("div", {
      className: "fun-fact text-center",
      children: [
        p.jsx(fn, {
          size: a,
          dynamicSize: !1,
          img: e,
          fallbackIcon: t || "fa-solid fa-heart",
          fallbackIconColors: n || {
            bg: s.getRootSCSSVariable("theme-secondary"),
            fill: s.getRootSCSSVariable("theme-section-background"),
          },
        }),
        p.jsxs("div", {
          className: "fun-fact-texts mt-3",
          children: [
            p.jsx("h5", {
              className: "text-highlight fw-bold mb-1",
              dangerouslySetInnerHTML: { __html: r },
            }),
            p.jsx("span", {
              className: "mt-0 text-2 font-family-subheadings fw-bold",
              dangerouslySetInnerHTML: { __html: i },
            }),
          ],
        }),
      ],
    })
  );
}
function PD({ data: e }) {
  const t = Gt(),
    n = t.parseArticleData(e),
    r = n.items;
  t.sortArticleItemsByDateDesc(r);
  const i = t.parseArticleItems(r);
  return p.jsx(Vt, {
    className: "article-services",
    title: n.title,
    children: p.jsx(Jf, {
      slidesPerView: 4,
      loop: !0,
      autoPlayDelay: 3,
      children: i.map((s, o) =>
        p.jsx(
          Hs,
          {
            className: "custom-swiper-slide mt-2",
            children: p.jsx(bD, {
              img: s.img,
              fallbackIcon: s.faIcon,
              fallbackIconColors: s.faIconColors,
              title: s.title,
              info: s.info,
            }),
          },
          o
        )
      ),
    }),
  });
}
function jD({
  quote: e,
  avatar: t,
  fallbackIcon: n,
  fallbackIconColors: r,
  author: i,
  role: s,
  href: o,
}) {
  const a = X();
  return (
    (e = a.limitTextSize(e, 230)),
    p.jsxs("div", {
      className: "testimonial",
      children: [
        p.jsxs("div", {
          className: "testimonial-balloon",
          children: [
            p.jsx("div", { className: "triangle" }),
            p.jsxs("div", {
              className: "text-2",
              children: [
                p.jsx(Z, {
                  iconName: "fa-solid fa-quote-left",
                  className: "fa-icon me-2",
                }),
                p.jsx("span", {
                  dangerouslySetInnerHTML: { __html: a.parseJsonText(e) },
                }),
                p.jsx(Z, {
                  iconName: "fa-solid fa-quote-right",
                  className: "fa-icon ms-2",
                }),
              ],
            }),
          ],
        }),
        p.jsx(fn, {
          img: t,
          alt: i,
          size: 3,
          fallbackIcon: n,
          fallbackIconColors: r,
        }),
        p.jsxs("div", {
          className: "testimonial-info mt-2",
          children: [
            p.jsxs("div", {
              className: "name",
              children: [
                o && p.jsx(Vs, { href: o, className: "text-5", children: i }),
                !o && p.jsx("span", { className: "text-5", children: i }),
              ],
            }),
            p.jsx("span", {
              className: "role text-secondary text-2",
              dangerouslySetInnerHTML: { __html: s },
            }),
          ],
        }),
      ],
    })
  );
}
function $D({ data: e }) {
  const t = Gt(),
    n = t.parseArticleData(e),
    r = n.items;
  t.sortArticleItemsByDateDesc(r);
  const i = t.parseArticleItems(r);
  return p.jsx(Vt, {
    className: "article-testimonials",
    title: n.title,
    children: p.jsx(Jf, {
      children: i.map((s, o) => {
        var a;
        return p.jsx(
          Hs,
          {
            className: "custom-swiper-slide",
            children: p.jsx(jD, {
              quote: s.text,
              avatar: s.img,
              fallbackIcon: s.faIcon,
              fallbackIconColors: s.faIconColors,
              author: s.value,
              href: (a = s.firstLink) == null ? void 0 : a.href,
              role: s.info,
            }),
          },
          o
        );
      }),
    }),
  });
}
function _D({ items: e, shouldShowAsComplete: t }) {
  return (
    (e = e || []),
    p.jsxs("ul", {
      className: "thread",
      children: [
        e.map((n, r) =>
          p.jsxs(
            "li",
            {
              className: "thread-item",
              children: [
                p.jsx("div", {
                  className: "fa fa-stack circle",
                  children: p.jsx("i", {
                    className: "fa fa-circle fa-stack-1x",
                  }),
                }),
                p.jsxs("div", {
                  className: "thread-item-content",
                  children: [
                    p.jsx("h6", {
                      className: "title fw-bold",
                      dangerouslySetInnerHTML: { __html: n.title },
                    }),
                    p.jsxs("div", {
                      className: "badges pt-1",
                      children: [
                        p.jsx(Ha, {
                          faIcon: "fa-solid fa-calendar",
                          text: n.date,
                        }),
                        n.place &&
                          p.jsx(Ha, {
                            faIcon: "fa-solid fa-building",
                            text: n.place,
                          }),
                      ],
                    }),
                    p.jsx("div", {
                      className: "description mt-2 text-4",
                      dangerouslySetInnerHTML: { __html: n.description },
                    }),
                    p.jsx("div", {
                      className: `link-wrapper ${n.href ? "mt-4" : "mt-2"}`,
                      children:
                        n.href &&
                        p.jsxs(Vs, {
                          className:
                            "link font-family-subheadings fw-bold text-2",
                          href: n.href,
                          children: [
                            p.jsx("span", { children: n.hrefLabel }),
                            p.jsx(Z, {
                              iconName: "fa-solid fa-arrow-up-right-dots ms-1",
                            }),
                          ],
                        }),
                    }),
                  ],
                }),
              ],
            },
            r
          )
        ),
        p.jsx("li", {
          className: "thread-item trailing-thread-item",
          children: p.jsx("div", {
            className: "fa fa-stack circle",
            children: p.jsx(Z, { iconName: t ? "" : "fa-solid fa-caret-down" }),
          }),
        }),
      ],
    })
  );
}
function OD({ data: e }) {
  const t = Gt(),
    { isMobileLayout: n } = fe(),
    { selectedLanguageId: r } = J(),
    i = t.parseArticleData(e),
    s = i.items,
    [o, a] = E.useState([]),
    [l, c] = E.useState([]);
  return (
    E.useEffect(() => {
      t.sortArticleItemsByDateDesc(s);
      const u = t.formatForThreads(s);
      a(u);
    }, [null, r]),
    p.jsx(Vt, {
      className: "article-thread",
      title: i.title,
      children: p.jsx(Cl, {
        items: o,
        storageId: e.id + "_expandable",
        onFilter: c,
        controlsClass: "pt-0",
        maxItems: n() ? 2 : 4,
        stepAmount: 4,
        children: p.jsx(_D, {
          items: l,
          shouldShowAsComplete: o.length <= o.length,
        }),
      }),
    })
  );
}
const zu = X();
function MD({ items: e }) {
  return e
    ? p.jsx("div", {
        className: "timeline-wrapper",
        children: p.jsxs("ul", {
          className: "timeline",
          children: [e.map((t, n) => p.jsx(ND, { item: t }, n)), p.jsx(kD, {})],
        }),
      })
    : p.jsx(p.Fragment, {});
}
function ND({ item: e }) {
  const { getSelectedLanguage: t, getString: n } = J();
  e.dateEnded === "now" && (e.dateEnded = n("now"));
  const r = zu.formatDateInterval(e.dateStarted, e.dateEnded, t().id, !0, !0);
  return p.jsxs("li", {
    className: "timeline-item",
    children: [
      p.jsx("div", {
        className: "timeline-avatar-wrapper",
        children: p.jsx(fn, {
          img: e.img,
          alt: "timeline-item",
          fallbackIcon: e.faIcon,
          fallbackIconColors: e.faIconColors,
        }),
      }),
      p.jsxs("div", {
        className: "timeline-content-wrapper",
        children: [
          p.jsxs("header", {
            className: "timeline-content-header mb-3",
            children: [
              p.jsxs("div", {
                className: "timeline-content-header-left",
                children: [
                  p.jsx("h5", {
                    className: "title fw-bold mb-2",
                    dangerouslySetInnerHTML: {
                      __html: zu.parseJsonText(e.title),
                    },
                  }),
                  p.jsxs("div", {
                    className:
                      "info ms-3 text-muted font-family-subheadings fw-bold text-2",
                    children: [
                      p.jsx(Z, {
                        iconName: "fa-solid fa-building",
                        className: "me-2",
                      }),
                      p.jsx("span", {
                        className: "",
                        dangerouslySetInnerHTML: { __html: e.info },
                      }),
                    ],
                  }),
                ],
              }),
              p.jsx("div", {
                className: "timeline-content-header-right",
                children: p.jsx(Ha, { iconName: "faCalendar", text: r }),
              }),
            ],
          }),
          p.jsxs("div", {
            className: "timeline-content-body mb-1 mb-md-2",
            children: [
              p.jsx("div", {
                className: "text",
                dangerouslySetInnerHTML: { __html: zu.parseJsonText(e.text) },
              }),
              e.tags &&
                e.tags.length > 0 &&
                p.jsx(eS, {
                  strings: e.tags,
                  className: "text-2 mt-3 pt-0 pt-md-1",
                }),
            ],
          }),
        ],
      }),
    ],
  });
}
function kD() {
  return p.jsx("li", {
    className: "timeline-item timeline-item-trailer",
    children: p.jsx("div", {
      className: "timeline-avatar-wrapper",
      children: p.jsx(fn, {}),
    }),
  });
}
function AD({ data: e }) {
  const t = Gt(),
    n = t.parseArticleData(e),
    r = n.items;
  t.sortArticleItemsByDateDesc(r);
  const i = t.formatForTimeline(r);
  return p.jsx(Vt, {
    className: "article-timeline",
    title: n.title,
    children: p.jsx(MD, { items: i }),
  });
}
function LD({ className: e, enabled: t }) {
  const { getString: n } = J(),
    r = document.fullscreenElement,
    i = () => {
      r
        ? ((window.toggledFullscreen = !1),
          document.exitFullscreen().catch((s) => {
            console.log(
              `Error attempting to exit full-screen mode: ${s.message}`
            );
          }))
        : ((window.toggledFullscreen = !0),
          document.documentElement
            .requestFullscreen({ navigationUI: "hide" })
            .catch((s) => {
              console.log(
                `Error attempting to enter full-screen mode: ${s.message}`
              );
            }));
    };
  return p.jsx("div", {
    className: `toggle-button-wrapper ${e}`,
    children:
      t &&
      p.jsx(ol, {
        size: 2,
        tooltip: n(r ? "full_screen_exit" : "full_screen_enter"),
        icon: r ? "fa-solid fa-minimize" : "fa-solid fa-maximize",
        onClick: i,
      }),
  });
}
const nt = {
    HIDDEN: "section-transition-hidden",
    HIDING: "section-transition-hiding",
    SHOWING: "section-transition-showing",
    SHOWN: "section-transition-shown",
    FORCE_SHOW: "section-transition-show-without-transition",
  },
  DD = {
    ArticleCards: rD,
    ArticleContactForm: aD,
    ArticleGrid: dD,
    ArticleInfoBlock: hD,
    ArticleList: xD,
    ArticlePortfolio: CD,
    ArticleServices: PD,
    ArticleTestimonials: $D,
    ArticleThread: OD,
    ArticleTimeline: AD,
  },
  ns = X(),
  Ru = Fn();
function zD({ section: e }) {
  const { getSettings: t } = pt(),
    {
      isSectionActive: n,
      didRenderFirstSection: r,
      setDidRenderFirstSection: i,
    } = pr(),
    { isBreakpoint: s, isMobileLayout: o, focusMainView: a } = fe(),
    [l, c] = E.useState(nt.HIDDEN),
    u = t(),
    d = !o() && !ns.isTouchDevice(),
    f = e.content && e.content.articles ? e.content.articles : [];
  E.useEffect(() => {
    n(e.id) ? g() : y();
  }, [n(e.id)]);
  const g = () => {
      l !== nt.SHOWN &&
        (r
          ? (c(nt.SHOWING),
            Ru.clearAllWithTag("section-" + e.id),
            w(nt.SHOWN, 30))
          : (i(!0), c(nt.SHOWN)));
    },
    y = () => {
      l !== nt.HIDDEN &&
        (c(nt.FORCE_SHOW),
        Ru.clearAllWithTag("section-" + e.id),
        w(nt.HIDING, 30),
        w(nt.HIDDEN, 1e3));
    },
    w = (I, v) => {
      Ru.schedule(
        () => {
          c(I);
        },
        v,
        "section-" + e.id
      );
    };
  return p.jsx(p.Fragment, {
    children:
      l !== nt.HIDDEN &&
      p.jsx(rf, {
        className: `lead-section ${l}`,
        opaque: !0,
        id: `lead-section-${e.id}`,
        children: p.jsxs("div", {
          className: "lead-section-content",
          children: [
            u.fullScreenButtonEnabled &&
              !ns.isIOS() &&
              !o() &&
              !ns.isSafari() &&
              p.jsx("div", {
                className: `full-screen-toggle-wrapper ${
                  s("lg")
                    ? "full-screen-toggle-wrapper-top-right"
                    : "full-screen-toggle-wrapper-top-left"
                }`,
                children: p.jsx(LD, {
                  enabled: !0,
                  className: "fullscreen-toggle",
                }),
              }),
            p.jsx(EL, {
              id: `scrollable-${e.id}`,
              scrollActive: l === nt.SHOWN,
              scrollEnabled: l !== nt.HIDDEN && d,
              children: p.jsx(wC, {
                children: p.jsxs("section", {
                  className: "w-100",
                  children: [
                    p.jsx(RD, { section: e }),
                    p.jsx(BD, { articles: f }),
                  ],
                }),
              }),
            }),
          ],
        }),
      }),
  });
}
function RD({ section: e }) {
  const { getTranslation: t } = J(),
    { isBreakpoint: n } = fe();
  let r = ns.parseJsonText(t(e.content.locales, "title_long")),
    i = ns.parseJsonText(t(e.content.locales, "title_long_prefix", !0));
  return (
    n("lg") ||
      ((r = t(e.content.locales, "title")),
      (r = `<span class="text-highlight">${r}</span>`),
      (i = null)),
    p.jsxs("div", {
      className: `section-header w-100 px-0 px-md-3 text-center ${
        i ? "mt-0" : "mt-1 mt-sm-2 mt-lg-4"
      }`,
      children: [
        i &&
          p.jsxs("div", {
            className: "fw-bold text-muted lead-2 font-family-headings mb-2",
            children: [
              p.jsx(Z, {
                className: "me-2 opacity-50",
                iconName: "fa-solid fa-cubes",
              }),
              p.jsx("span", { dangerouslySetInnerHTML: { __html: i || "" } }),
            ],
          }),
        p.jsx("h3", {
          className: `fw-bold ${n("lg") ? "lead-4" : ""} mx-4 mb-0`,
          dangerouslySetInnerHTML: { __html: r },
        }),
      ],
    })
  );
}
function BD({ articles: e }) {
  return p.jsx("div", {
    className: "section-content ",
    children: e.map((t, n) => {
      var s;
      const r = DD[t.component];
      let i = "mt-4 pt-1 pt-md-3";
      return (
        (s = t.config) != null && s.ignorePaddingTop && (i = "mt-4"),
        p.jsxs(
          "div",
          {
            className: `article-wrapper ${i}`,
            children: [
              r && p.jsx(r, { data: t }),
              !r &&
                p.jsxs("div", {
                  className: "alert alert-danger text-3",
                  children: [
                    "Component ",
                    p.jsx("strong", { children: t.component }),
                    " not found! Make sure the component exists and is listed on the ",
                    p.jsx("i", { children: "ARTICLES" }),
                    " dictionary on ",
                    p.jsx("b", { children: "Section.jsx" }),
                    ".",
                  ],
                }),
            ],
          },
          n
        )
      );
    }),
  });
}
function FD() {
  const { getSections: e } = pt(),
    { hasFooterOffset: t } = fe(),
    n = e(),
    r = t() ? "sections-slider-offset-bottom " : "";
  return p.jsx("div", {
    className: `sections-slider highlight-scrollbar ${r}`,
    children: n.map((i, s) => p.jsx(zD, { section: i }, s)),
  });
}
function tS({ sections: e }) {
  const { setActiveSection: t, isSectionActive: n } = pr(),
    { isShowingSpinner: r } = mt(),
    [i, s] = E.useState(null),
    o = (l) => (r() ? !1 : i ? l.id === i : n(l.id)),
    a = (l) => {
      i ||
        (s(l.id),
        setTimeout(() => {
          t(l.id);
        }, 60),
        setTimeout(() => {
          s(null);
        }, 100));
    };
  return p.jsx("div", {
    className: "nav-pills",
    children: e.map((l, c) =>
      p.jsx(WD, { section: l, active: o(l), onClick: a }, c)
    ),
  });
}
function WD({ section: e, active: t, onClick: n }) {
  const { getTranslation: r } = J();
  return p.jsxs(pl, {
    disabled: t,
    className: `nav-pill ${t ? "nav-pill-active" : ""}`,
    onClick: () => {
      n(e);
    },
    children: [
      p.jsx(Z, { iconName: e.faIcon }),
      p.jsx("span", { children: r(e.content.locales, "title") }),
    ],
  });
}
function HD() {
  const { getCategorySections: e } = pt(),
    { getActiveCategory: t } = pr(),
    n = t(),
    r = e(n);
  return p.jsxs(rf, {
    nav: !0,
    id: "nav-mobile-top",
    className: "nav-mobile-top",
    children: [
      p.jsx("div", {
        className: "float-top-left",
        children: p.jsx(ow, { shrink: !0 }),
      }),
      p.jsx("div", {
        className: "float-top-right",
        children: p.jsx(aw, { shrink: !0 }),
      }),
      p.jsx(a0, { shrink: !1 }),
      p.jsx("div", {
        className: "mt-4",
        children: n && r.length > 1 && p.jsx(tS, { sections: r }),
      }),
    ],
  });
}
function VD() {
  const { isCategoryActive: e, setActiveSectionFromCategory: t } = pr(),
    { getCategories: n } = pt(),
    { isShowingSpinner: r } = mt(),
    { hasFooterOffset: i, isMobileLayout: s } = fe(),
    o = n(),
    a = i() ? "nav-tab-controller-with-offset" : "",
    [l, c] = E.useState(null),
    u = (y) => (r() ? !1 : l ? y.id === l : e(y.id)),
    d = (y) => {
      if (e(y.id)) {
        f();
        return;
      }
      g(y);
    },
    f = () => {
      window.scrollTo(0, 0);
    },
    g = (y) => {
      l ||
        (c(y.id),
        setTimeout(() => {
          t(y.id);
        }, 60),
        setTimeout(() => {
          c(null);
        }, 100));
    };
  return p.jsx(p.Fragment, {
    children:
      s() &&
      p.jsx("div", {
        className: `nav-tab-controller ${a}`,
        children: o.map((y, w) =>
          p.jsx(GD, { category: y, active: u(y), onClick: d }, w)
        ),
      }),
  });
}
function GD({ category: e, active: t, onClick: n }) {
  const { getTranslation: r } = J();
  return p.jsxs(pl, {
    className: `nav-tab-btn ${t ? "nav-tab-btn-active" : ""}`,
    onClick: () => {
      n(e);
    },
    children: [
      p.jsx(Z, { iconName: e.faIcon }),
      p.jsx("span", { className: "mb-1", children: r(e.locales, "title") }),
    ],
  });
}
function YD() {
  const { getActiveCategory: e, fixedNavigationEnabled: t } = pr(),
    { getCategorySections: n } = pt(),
    { scrollY: r, isBreakpoint: i } = fe(),
    s = X(),
    o = e(),
    a = n(o),
    l = document.getElementById("nav-mobile-top"),
    c = (l && l.getBoundingClientRect()) || 0,
    u = s.isElementOutsideBounds(l, 20),
    d = o && n(o).length > 1;
  return p.jsx(p.Fragment, {
    children:
      !i("md") &&
      d &&
      r > c.height - 10 &&
      t &&
      p.jsx("div", {
        id: "fixed-nav-pills-wrapper",
        className: `fixed-nav-pills-wrapper ${s.strIf(
          !u,
          "fixed-nav-pills-wrapper-hidden"
        )}`,
        children: p.jsx(tS, { sections: a }),
      }),
  });
}
function XD() {
  const { getActiveSection: e, setFixedNavigationEnabled: t } = pr(),
    [n, r] = E.useState(!0),
    i = X();
  return (
    E.useEffect(() => {
      i.isTouchDevice() && i.isAndroid() && i.addClassToBody("body-android");
    }, []),
    E.useEffect(() => {
      const s = n,
        o = 258,
        a = { top: o, behavior: "instant" };
      r(!1),
        !(s || window.scrollY < o) &&
          (t(!1),
          window.scrollTo(a),
          setTimeout(() => {
            window.scrollTo(a), t(!0);
          }, 100));
    }, [e()]),
    p.jsx("div", {
      className: "portfolio-wrapper",
      children: p.jsxs("div", {
        className: "portfolio",
        id: "portfolio",
        children: [
          p.jsx("div", {
            className: "sidebar-wrapper",
            children: p.jsx(hC, {}),
          }),
          p.jsx("div", {
            className: "content-wrapper",
            children: p.jsxs("div", {
              className: "content",
              children: [p.jsx(HD, {}), p.jsx(FD, {})],
            }),
          }),
          p.jsx(YD, {}),
          p.jsx("div", {
            className: "nav-tabs-wrapper",
            children: p.jsx(VD, {}),
          }),
        ],
      }),
    })
  );
}
const Ph = 75,
  Bu = 0.1,
  jh = 0.6,
  Fu = 1,
  $h = 3,
  nS = [
    { name: "scrollbar-track", icon: "fa-solid fa-up-down" },
    { name: "scrollbar-thumb", icon: "fa-solid fa-up-down" },
    { name: "menu-item", icon: null },
    { name: "swiper-pagination-bullet", icon: null },
    { name: "status-badge", icon: null },
  ],
  rS = X();
function UD({ enabled: e, active: t, modalOpen: n }) {
  const r = e && t,
    [i, s] = E.useState(0),
    [o, a] = E.useState(0),
    [l, c] = E.useState(0),
    [u, d] = E.useState(!1);
  E.useEffect(
    () => (
      f(),
      () => {
        g();
      }
    ),
    []
  ),
    E.useEffect(() => {
      n && c(null);
    }, [n]);
  const f = () => {
      r &&
        (window.addEventListener("mousedown", y),
        window.addEventListener("mousemove", w),
        window.addEventListener("mouseup", I));
    },
    g = () => {
      window.removeEventListener("mousedown", y),
        window.removeEventListener("mousemove", w),
        window.removeEventListener("mouseup", I);
    },
    y = (m) => {
      d(!0), v(m);
    },
    w = (m) => {
      s(m.clientX), a(m.clientY), v(m);
    },
    I = (m) => {
      d(!1), v(m);
    },
    v = (m) => {
      let h = !1;
      const x = m.target;
      if (x) {
        (x.matches("a") || x.matches("button")) && (h = !0);
        for (const S of nS) m.target.classList.contains(S.name) && (h = !0);
      }
      c(h ? m.target : null);
    };
  return p.jsx(p.Fragment, {
    children:
      r &&
      p.jsxs("div", {
        className: "animated-cursor",
        children: [
          p.jsx(ZD, { targetX: i, targetY: o, hoveringDiv: l, isClicked: u }),
          p.jsx(KD, { hoveringDiv: l }),
        ],
      }),
  });
}
function ZD({ targetX: e, targetY: t, hoveringDiv: n, isClicked: r }) {
  const [i, s] = E.useState(e),
    [o, a] = E.useState(t),
    [l, c] = E.useState(1),
    [u, d] = E.useState(1),
    [f, g] = E.useState(null),
    [y, w] = E.useState(!1),
    [I, v] = E.useState(0);
  E.useEffect(() => {
    const T = setInterval(() => {
      w(!0);
    }, 16.666666666666668);
    return () => {
      clearInterval(T);
    };
  }, []);
  const m = (T) => {
      const j = document.getElementById("animated-cursor-circle");
      j &&
        (T
          ? j.classList.add("animated-cursor-circle-highlight")
          : j.classList.remove("animated-cursor-circle-highlight"));
    },
    h = () => {
      const T = document.getElementById("animated-cursor-circle");
      if (!T || !y) return;
      const j = rS.isSafari() ? 1.25 : 1;
      v(e === i && t === o ? (C) => C + 1 / 60 : 0),
        w(!1),
        b(i, e, s, 0.1 * j, 1),
        b(o, t, a, 0.1 * j, 1),
        b(l, x(), c, 0.2, 0.1),
        b(u, S(), d, 0.2, 0.025),
        m(!!n),
        $(),
        (T.style.transform = `translate3d(${i - Ph / 2}px, ${
          o - Ph / 2
        }px, 0) scale(${l / 3})`),
        (T.style.opacity = u.toString());
    },
    x = () => {
      let T = Fu;
      return n && (T = Fu + ($h - Fu) / 2), r && (T = $h), T;
    },
    S = () => {
      const j = I > 0.5 && !n;
      let P = 0;
      return (
        j || (P = Bu), n && (P = (jh - Bu) / 2), r && (P += (jh - Bu) / 2), P
      );
    },
    b = (T, j, P, C, _) => {
      const O = j - T;
      Math.abs(O) > _ ? P((z) => z + O * C) : P(j);
    },
    $ = () => {
      if (!n) {
        r || g(null);
        return;
      }
      g(null);
      for (const T of nS) n.classList.contains(T.name) && g(T.icon);
    };
  return (
    h(),
    p.jsx("div", {
      className: "animated-cursor-circle",
      id: "animated-cursor-circle",
      children: p.jsx(Z, {
        iconName: f || "fa-solid fa-circle",
        className: f ? "fa-icon" : "fa-icon fa-icon-hidden",
      }),
    })
  );
}
function KD({ hoveringDiv: e }) {
  const [t, n] = E.useState(!1),
    [r, i] = E.useState("Label"),
    [s, o] = E.useState(-1),
    [a, l] = E.useState(-1),
    c = e && r;
  E.useEffect(() => {
    const f = setInterval(() => {
      n(!0);
    }, 16.666666666666668);
    return () => {
      clearInterval(f);
    };
  }, []),
    E.useEffect(() => {
      const f = document.getElementById("animated-cursor-tooltip");
      f &&
        (f.classList.add("d-none"),
        f.classList.add("custom-tooltip-hidden"),
        clearTimeout(s),
        clearTimeout(a),
        c &&
          (o(
            setTimeout(() => {
              f.classList.remove("d-none");
            }, 10)
          ),
          l(
            setTimeout(() => {
              f.classList.remove("custom-tooltip-hidden");
            }, 50)
          )));
    }, [c, r]);
  const u = () => {
    if (!e) return;
    if (
      e.matches("a") &&
      e.href &&
      e.href.includes("//") &&
      rS.isUrlExternal(e.href)
    ) {
      i("");
      return;
    }
    const f = e.getAttribute("data-tooltip");
    i(f || null);
  };
  return (
    (() => {
      const f = document.getElementById("animated-cursor-circle"),
        g = document.getElementById("animated-cursor-tooltip");
      if (!f || !g || !t) return;
      n(!1), u();
      const y = f.getBoundingClientRect(),
        w = g.getBoundingClientRect(),
        I = y.x + y.width / 2 - w.width / 2,
        v = y.y - 35;
      g.style.transform = `translate3d(${I}px, ${v}px, 0)`;
    })(),
    p.jsx(o0, { id: "animated-cursor-tooltip", label: r })
  );
}
function QD({ activities: e }) {
  const t = X(),
    n = e.length > 0,
    r = e.length > 0 ? e[0].message : null;
  return p.jsx(p.Fragment, {
    children:
      n &&
      p.jsx("div", {
        className: `activity-spinner ${n ? "" : "activity-spinner-hidden"}`,
        children: p.jsxs("div", {
          className: "activity-spinner-content",
          children: [
            p.jsx("img", {
              src: t.resolvePath("/images/svg/spinner.svg"),
              className: "spinner",
              alt: "loader",
            }),
            p.jsx("h6", { className: "text-white opacity-75", children: r }),
          ],
        }),
      }),
  });
}
function qD({ urls: e }) {
  return p.jsxs("div", {
    className: "image-cache position-absolute invisible",
    children: [
      p.jsx("div", {
        className: "bg-dark",
        style: { width: "5px", height: "5px" },
      }),
      p.jsx("div", {
        className: "bg-green",
        style: { width: "5px", height: "5px" },
      }),
      e.map((t, n) =>
        p.jsx(
          "img",
          { alt: "cached", src: t, style: { width: "5px", height: "5px" } },
          n
        )
      ),
    ],
  });
}
const JD = X(),
  ez = Fn();
function tp({ children: e, className: t, id: n, visible: r }) {
  return (
    E.useEffect(() => {
      window.scrollTo(0, Math.max(0, window.scrollTop - 1)),
        JD.setPageScrollingEnabled(!r);
    }, [r]),
    p.jsx(p.Fragment, {
      children:
        r &&
        p.jsx("div", { className: `custom-modal ${t}`, id: n, children: e }),
    })
  );
}
function iS({ children: e }) {
  const [t, n] = E.useState(!0);
  E.useEffect(() => {
    ez.schedule(
      () => {
        n(!1);
      },
      50,
      "modal"
    );
  }, []);
  const r = t ? "custom-modal-window-hidden" : "";
  return p.jsx(si, { className: `custom-modal-window ${r}`, children: e });
}
function sS({ title: e, faIcon: t, onClose: n }) {
  return p.jsxs(ul, {
    children: [
      p.jsxs("div", {
        className: "fw-bold lead-3 font-family-headings me-3",
        children: [
          t && p.jsx(Z, { iconName: `${t} me-3 text-highlight ` }),
          e && p.jsx("span", { className: "", children: e }),
        ],
      }),
      p.jsx("div", {
        className: "close-menu d-flex align-items-center",
        children: p.jsx(aS, { color: "dark", onClose: n }),
      }),
    ],
  });
}
function oS({ children: e }) {
  return p.jsx(dn, { children: e });
}
function tz({ text: e }) {
  return p.jsxs(ll, {
    children: [
      p.jsx(Z, { iconName: "fa-solid fa-comments eq-h4 text-highlight" }),
      p.jsx("span", {
        className: "description text-1 text-secondary-4 mb-1",
        dangerouslySetInnerHTML: { __html: e },
      }),
    ],
  });
}
function nz({ children: e, onClose: t }) {
  return p.jsxs("div", {
    className: "custom-modal-window-transparent",
    children: [e, p.jsx(aS, { color: "highlight", onClose: t })],
  });
}
function aS({ color: e, onClose: t }) {
  const { getString: n } = J();
  e = e || "dark";
  const r = () => {
    t();
  };
  return p.jsx(ol, {
    icon: "fa-solid fa-xmark",
    className: "close-button",
    size: 2,
    onClick: r,
    color: e,
    tooltip: n("close"),
  });
}
function rz({ displayingYoutubeVideo: e, hideYoutubeVideo: t }) {
  let n = null;
  e && (n = e.url),
    n &&
      !n.includes("embed") &&
      (n = `https://www.youtube.com/embed/${new URL(n).searchParams.get("v")}`);
  const r = () => {
    t();
  };
  return p.jsx(tp, {
    id: "youtube-modal",
    visible: !!e,
    children:
      e &&
      p.jsxs(iS, {
        children: [
          p.jsx(sS, {
            title: e.title,
            faIcon: "fa-brands fa-youtube",
            onClose: r,
          }),
          p.jsx(oS, {
            children: p.jsx("div", {
              className: "youtube-iframe-wrapper",
              children: p.jsx("iframe", {
                src: n,
                className: "youtube-iframe",
              }),
            }),
          }),
          p.jsx(tz, { text: e.description }),
        ],
      }),
  });
}
const _h = {
  "16:9": "swiper-slide-landscape",
  "9:16": "swiper-slide-portrait",
};
function iz({ displayingGallery: e, hideGallery: t }) {
  const { showActivitySpinner: n, hideActivitySpinner: r } = mt(),
    i = X(),
    s = Fn(),
    { isBreakpoint: o } = fe(),
    [a, l] = E.useState(null),
    [c, u] = E.useState(null),
    d = "gallery",
    f = c === "16:9" && !o("xl") && !i.isAndroid() ? "vertical" : "horizontal";
  E.useEffect(() => {
    e &&
      (n(d),
      s.clearAllWithTag(d),
      s.schedule(
        () => {
          if ((l(e.screenshots || []), u(e.aspectRatio), !_h[e.aspectRatio]))
            throw new Error(
              "Aspect ratio " +
                c +
                " not supported by the gallery viewer component. The supported ratios are 16:9 and 9:16."
            );
        },
        100,
        d
      ),
      s.schedule(
        () => {
          g();
        },
        200,
        d
      ));
  }, [e]);
  const g = () => {
      s.clearAllWithTag(d),
        s.interval(
          () => {
            i.didLoadAllImages(".swiper-image") && (s.clearAllWithTag(d), r(d));
          },
          300,
          d
        );
    },
    y = () => {
      l(null), u(null), t();
    };
  return p.jsx(tp, {
    id: "gallery-modal",
    visible: !!e,
    children:
      a &&
      c &&
      p.jsx(nz, {
        transparent: !0,
        onClose: y,
        children: p.jsx(qf, {
          zoom: !0,
          slidesPerView: "auto",
          spaceBetween: 10,
          direction: f,
          pagination: { clickable: !0 },
          modules: [q2, qx],
          className: `gallery-swiper ${
            f === "vertical" ? "gallery-swiper-no-bullets" : ""
          }`,
          children: a.map((w, I) =>
            p.jsx(
              Hs,
              {
                className: _h[c],
                children: p.jsx("div", {
                  className: "swiper-zoom-container",
                  children: p.jsx("img", {
                    className: "swiper-image",
                    alt: "img-" + I,
                    src: i.resolvePath(w),
                  }),
                }),
              },
              I
            )
          ),
        }),
      }),
  });
}
function sz({ displayingNotification: e, killNotification: t }) {
  const n = Fn(),
    r = "notifications",
    [i, s] = E.useState("");
  E.useEffect(() => {
    n.clearAllWithTag(r),
      s("notification-hidden"),
      e &&
        (n.schedule(
          () => {
            s(`notification-${e.type}`);
          },
          50,
          r
        ),
        n.schedule(
          () => {
            s(`notification-hiding notification-${e.type}`);
          },
          4e3,
          r
        ),
        n.schedule(
          () => {
            t();
          },
          4400,
          r
        ));
  }, [e]);
  const o = () => {
      if (!e) return "";
      switch (e.type) {
        case "default":
          return "fa-solid fa-bell";
        case "error":
          return "fa-solid fa-circle-exclamation";
      }
    },
    a = () => {
      t();
    };
  return p.jsx(p.Fragment, {
    children:
      e &&
      p.jsx("div", {
        className: "notifications-container",
        children: p.jsxs(si, {
          className: `notification ${i}`,
          children: [
            p.jsxs(ul, {
              children: [
                p.jsxs("h6", {
                  className: "mb-0 fw-bold",
                  children: [
                    p.jsx(Z, { iconName: `${o()} me-2` }),
                    p.jsx("span", { children: e.title }),
                  ],
                }),
                p.jsx("button", {
                  className: "hide-button ps-1",
                  onClick: a,
                  children: p.jsx(Z, { iconName: "fa-solid fa-xmark" }),
                }),
              ],
            }),
            p.jsx(dn, {
              children: p.jsx("div", {
                className: "message text-3 opacity-75",
                children: e.message,
              }),
            }),
          ],
        }),
      }),
  });
}
function oz({ pendingConfirmation: e, hideConfirmationDialog: t }) {
  const n = () => {
      e.onConfirm(), r();
    },
    r = () => {
      t();
    };
  return p.jsx(tp, {
    id: "confirmation-modal",
    visible: !!e,
    children:
      e &&
      p.jsxs(iS, {
        children: [
          p.jsx(sS, { title: e.title, faIcon: "fa-solid fa-link", onClose: r }),
          p.jsx(oS, {
            children: p.jsxs("div", {
              className: "confirmation-window-content",
              children: [
                p.jsx("div", {
                  className: "confirmation-window-message text-center",
                  children: p.jsx("div", {
                    className: "text-4",
                    dangerouslySetInnerHTML: { __html: e.message },
                  }),
                }),
                p.jsxs("div", {
                  className: "confirmation-window-buttons",
                  children: [
                    p.jsxs("button", {
                      className: "btn btn-secondary text-4",
                      onClick: r,
                      "data-tooltip": e.cancelButtonLabel,
                      children: [
                        p.jsx(Z, { iconName: "fa-solid fa-xmark me-2" }),
                        p.jsx("span", { children: e.cancelButtonLabel }),
                      ],
                    }),
                    p.jsxs("button", {
                      className: "btn btn-highlight text-4",
                      onClick: n,
                      "data-tooltip": e.confirmButtonLabel,
                      children: [
                        p.jsx("span", { children: e.confirmButtonLabel }),
                        p.jsx(Z, { iconName: "fa-solid fa-caret-right ms-2" }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          }),
        ],
      }),
  });
}
function az() {
  const { listImagesForCache: e } = pt(),
    t = e();
  return p.jsxs("div", {
    className: "app-wrapper",
    children: [p.jsx(lz, {}), p.jsx(qD, { urls: t }), p.jsx(XD, {})],
  });
}
function lz() {
  const {
      listSpinnerActivities: e,
      isAnimatedCursorEnabled: t,
      isAnimatedCursorActive: n,
      isModalOpen: r,
      displayingNotification: i,
      killNotification: s,
      displayingYoutubeVideo: o,
      hideYoutubeVideo: a,
      displayingGallery: l,
      hideGallery: c,
      pendingConfirmation: u,
      hideConfirmationDialog: d,
    } = mt(),
    f = e(),
    g = t(),
    y = n(),
    w = r();
  return p.jsxs(p.Fragment, {
    children: [
      f && p.jsx(QD, { activities: f }),
      t() && p.jsx(UD, { enabled: g, active: y, modalOpen: w }),
      i && p.jsx(sz, { displayingNotification: i, killNotification: s }),
      p.jsx(rz, { displayingYoutubeVideo: o, hideYoutubeVideo: a }),
      p.jsx(iz, { displayingGallery: l, hideGallery: c }),
      p.jsx(oz, { pendingConfirmation: u, hideConfirmationDialog: d }),
    ],
  });
}
const yn = {
    ANIMATING: "animating",
    SHOWN: "shown",
    HIDING: "hiding",
    HIDDEN: "hidden",
  },
  Ut = "fs-loader";
function uz({ children: e }) {
  const t = X(),
    n = Fn(),
    [r, i] = E.useState(!1),
    [s, o] = E.useState(!1),
    [a, l] = E.useState(!1),
    [c, u] = E.useState(null),
    [d, f] = E.useState("spinner-hidden"),
    [g, y] = E.useState("loader-content-info-hidden"),
    [w, I] = E.useState(yn.ANIMATING),
    v = (c == null ? void 0 : c.preloader.title) || "",
    m = (c == null ? void 0 : c.preloader.subtitle) || "";
  E.useEffect(() => {
    const $ = t.resolvePath("/data/settings.json");
    fetch($)
      .then((T) => T.json())
      .then((T) => {
        u(T);
      });
  }, []),
    E.useEffect(() => {
      if (!c) return;
      const $ = c.preloader.enabled;
      if ((i($), !$)) {
        b();
        return;
      }
      c && a && s && h();
    }, [a, s, c]);
  const h = () => {
      n.clearAllWithTag(Ut),
        i(!0),
        n.schedule(
          () => {
            f("");
          },
          100,
          Ut
        ),
        n.schedule(
          () => {
            y("");
          },
          500,
          Ut
        ),
        n.schedule(
          () => {
            I(yn.SHOWN), t.addClassToBody("body-with-image");
          },
          900,
          Ut
        ),
        n.schedule(
          () => {
            x();
          },
          2500,
          Ut
        );
    },
    x = () => {
      let $ = 0;
      n.interval(
        () => {
          if ((($ += 0.2), $ >= 5)) {
            S();
            return;
          }
          if (document.querySelectorAll("img").length <= 2) return;
          t.didLoadAllImages() && S();
        },
        200,
        Ut
      );
    },
    S = () => {
      n.clearAllWithTag(Ut),
        I(yn.HIDING),
        n.schedule(
          () => {
            I(yn.HIDDEN), i(!1);
          },
          400,
          Ut
        );
    },
    b = () => {
      t.addClassToBody("body-with-image"),
        n.clearAllWithTag(Ut),
        I(yn.HIDDEN),
        i(!1);
    };
  return p.jsxs(p.Fragment, {
    children: [
      r &&
        p.jsx("div", {
          className: `loader loader-${
            w === yn.ANIMATING || w === yn.SHOWN ? "visible" : "hidden"
          }`,
          children: p.jsxs("div", {
            className: "loader-content text-white",
            children: [
              p.jsx("img", {
                src: t.resolvePath("/images/svg/pacman.svg"),
                onLoad: () => {
                  o(!0);
                },
                className: `spinner ${d}`,
                alt: "loader",
              }),
              p.jsxs("div", {
                className: `loader-content-info ${g}`,
                children: [
                  p.jsxs("div", {
                    className: "title-wrapper",
                    children: [
                      p.jsx("img", {
                        src: t.resolvePath("/images/svg/logo.svg"),
                        onLoad: () => {
                          l(!0);
                        },
                        className: "logo me-3",
                        alt: "logo",
                      }),
                      p.jsx("h5", { dangerouslySetInnerHTML: { __html: v } }),
                    ],
                  }),
                  p.jsx("p", {
                    className: "opacity-50 text-4 text-center",
                    dangerouslySetInnerHTML: { __html: m },
                  }),
                ],
              }),
            ],
          }),
        }),
      w !== yn.ANIMATING && p.jsx(p.Fragment, { children: e }),
    ],
  });
}
const cz = ({ children: e }) =>
  p.jsx(YE, {
    children: p.jsx(XE, {
      children: p.jsx(ZE, {
        children: p.jsx(QE, {
          children: p.jsx(UE, { children: p.jsx(KE, { children: e }) }),
        }),
      }),
    }),
  });
let Oh = null;
document.addEventListener("DOMContentLoaded", function (e) {
  Oh ||
    ((Oh = document.getElementById("root")),
    Vy(document.getElementById("root")).render(
      p.jsx(E.StrictMode, {
        children: p.jsx(uz, {
          children: p.jsx(cz, { children: p.jsx(az, {}) }),
        }),
      })
    ));
});
