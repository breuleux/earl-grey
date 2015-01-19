"use strict";
require("earlgrey-runtime");
var $targ$3;
var $0$0;
var protected_value$0;
var value_mac$0;
$0$0 = require("./helpers");
protected_value$0 = $0$0.protected_value;
value_mac$0 = $0$0.value_mac;
$targ$3 = (function(mac$0, bind$0) {
  var m$0;
  var m$1;
  var chk$0;
  var $targ$10;
  var accum$0;
  var chk$1;
  var $targ$11;
  var accum$1;
  var chk$2;
  var $targ$12;
  var accum$2;
  var chk$3;
  var $targ$13;
  var accum$3;
  var chk$4;
  var proj$0;
  var $targ$14;
  var accum$4;
  var chk$5;
  var proj$1;
  var $targ$15;
  var accum$5;
  var chk$6;
  var proj$2;
  var $targ$16;
  var accum$6;
  var m$2;
  var acc$0;
  var $targ$28;
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
      var t1$0;
      var t0$0;
      var gvar$1;
      var v$0;
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
  kv$0 = __amp____colon__((($targ$10 = ((chk$0 = (function(x$0) {
    return ["send", ["symbol", "==="], ["data", x$0, ["value", null]]];
  })), value_mac$0("null", chk$0))), (accum$0 = ({})), (accum$0["null"] = $targ$10), accum$0), __amp____colon__((($targ$11 = ((chk$1 = (function(x$1) {
    return ["send", ["symbol", "==="], ["data", x$1, ["value", undefined]]];
  })), value_mac$0("undefined", chk$1))), (accum$1 = ({})), (accum$1["undefined"] = $targ$11), accum$1), __amp____colon__((($targ$12 = ((chk$2 = (function(x$2) {
    return ["send", ["symbol", "if"], ["data", x$2, ["symbol", "true"], ["symbol", "false"]]];
  })), value_mac$0("true", chk$2))), (accum$2 = ({})), (accum$2["true"] = $targ$12), accum$2), __amp____colon__((($targ$13 = ((chk$3 = (function(x$3) {
    return ["send", ["symbol", "not"], ["data", ["void"], x$3]];
  })), value_mac$0("false", chk$3))), (accum$3 = ({})), (accum$3["false"] = $targ$13), accum$3), __amp____colon__((($targ$14 = ((chk$4 = (function(x$4) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$4]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "string"]]]]];
  })), (proj$0 = (function(x$5) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "String"], ["data", x$5]]];
  })), value_mac$0("String", chk$4, proj$0))), (accum$4 = ({})), (accum$4["String"] = $targ$14), accum$4), __amp____colon__((($targ$15 = ((chk$5 = (function(x$6) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$6]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "number"]]]]];
  })), (proj$1 = (function(x$7) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "parseFloat"], ["data", x$7]]];
  })), value_mac$0("Number", chk$5, proj$1))), (accum$5 = ({})), (accum$5["Number"] = $targ$15), accum$5), (($targ$16 = ((chk$6 = (function(x$8) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$8]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "boolean"]]]]];
  })), (proj$2 = (function(x$9) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "Boolean"], ["data", x$9]]];
  })), value_mac$0("Boolean", chk$6, proj$2))), (accum$6 = ({})), (accum$6["Boolean"] = $targ$16), accum$6)))))));
  acc$0 = [];
  $targ$28 = null;
  temp$0 = $targ$28;
  m$2 = null;
  $3: for (var $__4 = items(kv$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__5; !($__5 = $__4.next()).done; ) {
    m$2 = $__5.value;
    {
      var t1$1;
      var $targ$31;
      var t0$1;
      var k$0;
      var v$1;
      t0$1 = m$2;
      if (((t0$1 instanceof Array) && ((t1$1 = t0$1.length), (t1$1 === 2)))) {
        k$0 = t0$1[0];
        v$1 = t0$1[1];
        $targ$31 = mac$0(k$0)(v$1);
        temp$0 = $targ$31;
        acc$0.push(temp$0);
      } else {
        ___match_error(m$2, "/home/olivier/git/earl-grey/src/macros/consts.eg", 1439, 1475);
      }
    }
  }
  return exports$0;
});
(module["exports"] = $targ$3);
[];
//# sourceURL=<compile-source>
