"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$0;
var $0$0;
var protected_value$0;
var value_mac$0;
$0$0 = require("./helpers");
protected_value$0 = $0$0.protected_value;
value_mac$0 = $0$0.value_mac;
$targ$0 = (function(mac$0, bind$0) {
  var m$0;
  var m$1;
  var chk$0;
  var accum$0;
  var chk$1;
  var accum$1;
  var chk$2;
  var accum$2;
  var chk$3;
  var accum$3;
  var chk$4;
  var proj$0;
  var accum$4;
  var chk$5;
  var proj$1;
  var accum$5;
  var chk$6;
  var proj$2;
  var accum$6;
  var m$2;
  var acc$0;
  var temp$0;
  var kv$0;
  var global_variables$0;
  var keywords$0;
  var exports$0;
  exports$0 = ({});
  global_variables$0 = ["+", "-", "*", "/", "mod", "&.", "|.", "^.", "and", "or", "not", "===", "!==", "<", ">", "<=", ">=", "<<", ">>", ">>>", "in", "instanceof", "--", "++", "typeof", "Array", "Object", "Symbol", "RegExp", "Function", "Date", "parseInt", "parseFloat", "Math", "Infinity", "Error", "TypeError", "ReferenceError", "console", "process", "eval", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "___js_fetch", "___node", "arguments", "this", "exports", "send", "object", "keys", "items", "enumerate", "zip", "product", "neighbours", "range", "predicate", "==", "!=", "equal", "nequal", "&", "&:", "clone", "dir", "getProjector", "getChecker", "ErrorFactory", "Node", "___build_array", "___hasprop", "___extend", "___match_error", "___serialize_ast", "Set", "Map", "consume", "Promise", "promisify", "spawn", "Buffer", "global"];
  m$0 = null;
  $1: for (var $__0 = global_variables$0[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$0 = $__1.value;
    {
      var gvar$0;
      gvar$0 = m$0;
      bind$0(gvar$0, __amp__(["variable", gvar$0], ({
        "mutable": false,
        "assigned": true
      })));
    }
  }
  keywords$0 = ({
    "true": protected_value$0("true", true),
    "false": protected_value$0("false", false),
    "null": protected_value$0("null", null),
    "undefined": protected_value$0("undefined", undefined),
    "pass": ["variable", "undefined"]
  });
  m$1 = null;
  $2: for (var $__2 = items(keywords$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3; !($__3 = $__2.next()).done; ) {
    m$1 = $__3.value;
    {
      var gvar$1;
      var v$0;
      var t0$0;
      var t1$0;
      t0$0 = m$1;
      if (((t0$0 instanceof Array) && ((t1$0 = t0$0.length), (t1$0 === 2)))) {
        gvar$1 = t0$0[0];
        v$0 = t0$0[1];
        bind$0(gvar$1, v$0);
      } else {
        ___match_error(m$1, "/home/olivier/git/earl-grey/src/macros/consts.eg", 1387, 1439);
      }
    }
  }
  kv$0 = __amp____colon__(((accum$0 = ({})), (accum$0["null"] = ((chk$0 = (function chk(x$0) {
    return ["send", ["symbol", "==="], ["data", x$0, ["value", null]]];
  })), value_mac$0("null", chk$0))), accum$0), __amp____colon__(((accum$1 = ({})), (accum$1["undefined"] = ((chk$1 = (function chk(x$1) {
    return ["send", ["symbol", "==="], ["data", x$1, ["value", undefined]]];
  })), value_mac$0("undefined", chk$1))), accum$1), __amp____colon__(((accum$2 = ({})), (accum$2["true"] = ((chk$2 = (function chk(x$2) {
    return ["send", ["symbol", "if"], ["data", x$2, ["symbol", "true"], ["symbol", "false"]]];
  })), value_mac$0("true", chk$2))), accum$2), __amp____colon__(((accum$3 = ({})), (accum$3["false"] = ((chk$3 = (function chk(x$3) {
    return ["send", ["symbol", "not"], ["data", ["void"], x$3]];
  })), value_mac$0("false", chk$3))), accum$3), __amp____colon__(((accum$4 = ({})), (accum$4["String"] = ((chk$4 = (function chk(x$4) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$4]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "string"]]]]];
  })), (proj$0 = (function proj(x$5) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "String"], ["data", x$5]]];
  })), value_mac$0("String", chk$4, proj$0))), accum$4), __amp____colon__(((accum$5 = ({})), (accum$5["Number"] = ((chk$5 = (function chk(x$6) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$6]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "number"]]]]];
  })), (proj$1 = (function proj(x$7) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "parseFloat"], ["data", x$7]]];
  })), value_mac$0("Number", chk$5, proj$1))), accum$5), ((accum$6 = ({})), (accum$6["Boolean"] = ((chk$6 = (function chk(x$8) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$8]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "boolean"]]]]];
  })), (proj$2 = (function proj(x$9) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "Boolean"], ["data", x$9]]];
  })), value_mac$0("Boolean", chk$6, proj$2))), accum$6)))))));
  acc$0 = [];
  temp$0 = null;
  m$2 = null;
  $3: for (var $__4 = items(kv$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__5; !($__5 = $__4.next()).done; ) {
    m$2 = $__5.value;
    {
      var k$0;
      var v$1;
      var t0$1;
      var t1$1;
      t0$1 = m$2;
      if (((t0$1 instanceof Array) && ((t1$1 = t0$1.length), (t1$1 === 2)))) {
        k$0 = t0$1[0];
        v$1 = t0$1[1];
        temp$0 = mac$0(k$0)(v$1);
        acc$0.push(temp$0);
      } else {
        ___match_error(m$2, "/home/olivier/git/earl-grey/src/macros/consts.eg", 1439, 1475);
      }
    }
  }
  return exports$0;
});
(module["exports"] = $targ$0);
[];
//# sourceURL=<compile-source>
