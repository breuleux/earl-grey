
"use strict";require("earlgrey-runtime/5");var $targ$0 = undefined;var $0$0 = undefined;var protected_value$0 = undefined;var value_mac$0 = undefined;$0$0 = require("./helpers");protected_value$0 = $0$0.protected_value;value_mac$0 = $0$0.value_mac;$targ$0 = function (mac$0, bind$0) {
  var m$0 = undefined;var m$1 = undefined;var chk$0 = undefined;var accum$0 = undefined;var chk$1 = undefined;var accum$1 = undefined;var chk$2 = undefined;var accum$2 = undefined;var chk$3 = undefined;var accum$3 = undefined;var chk$4 = undefined;var proj$0 = undefined;var accum$4 = undefined;var chk$5 = undefined;var proj$1 = undefined;var accum$5 = undefined;var chk$6 = undefined;var proj$2 = undefined;var accum$6 = undefined;var chk$7 = undefined;var proj$3 = undefined;var accum$7 = undefined;var chk$8 = undefined;var accum$8 = undefined;var m$2 = undefined;var acc$0 = undefined;var temp$0 = undefined;var kv$0 = undefined;var global_variables$0 = undefined;var keywords$0 = undefined;var exports$0 = undefined;exports$0 = {};global_variables$0 = ["+", "-", "*", "/", "mod", "&.", "|.", "^.", "and", "or", "not", "===", "!==", "<", ">", "<=", ">=", "<<", ">>", ">>>", "in", "instanceof", "--", "++", "typeof", "Array", "Object", "Symbol", "RegExp", "Function", "Date", "parseInt", "parseFloat", "Math", "Infinity", "Error", "TypeError", "ReferenceError", "console", "process", "eval", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "___js_fetch", "___node", "arguments", "this", "exports", "send", "object", "keys", "items", "enumerate", "zip", "product", "neighbours", "range", "predicate", "==", "!=", "equal", "nequal", "&", "&:", "clone", "dir", "getProjector", "getChecker", "ErrorFactory", "ENode", "repr", "___build_array", "___hasprop", "___extend", "___match_error", "___serialize_ast", "Set", "Map", "consume", "Promise", "promisify", "spawn", "Buffer", "global"];m$0 = null;$1: for (var _iterator = global_variables$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$0 = _step.value;
    var gvar$0 = undefined;gvar$0 = m$0;bind$0(gvar$0, __amp__(["variable", gvar$0], { mutable: false, assigned: true }));
  }keywords$0 = { "true": protected_value$0("true", true), "false": protected_value$0("false", false), "null": protected_value$0("null", null), undefined: protected_value$0("undefined", undefined), pass: ["variable", "undefined"] };m$1 = null;$2: for (var _iterator2 = items(keywords$0)[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
    m$1 = _step2.value;
    var gvar$1 = undefined;var v$0 = undefined;var t0$0 = undefined;var t1$0 = undefined;t0$0 = m$1;if (Array.isArray(t0$0) && (t1$0 = t0$0.length, t1$0 === 2)) {
      gvar$1 = t0$0[0];v$0 = t0$0[1];bind$0(gvar$1, v$0);
    } else {
      ___match_error(m$1);
    }
  }kv$0 = __amp____colon__((accum$0 = {}, accum$0["null"] = (chk$0 = function chk(x$0) {
    return ["send", ["symbol", "==="], ["data", x$0, ["value", null]]];
  }, value_mac$0("null", chk$0)), accum$0), __amp____colon__((accum$1 = {}, accum$1.undefined = (chk$1 = function chk(x$1) {
    return ["send", ["symbol", "==="], ["data", x$1, ["value", undefined]]];
  }, value_mac$0("undefined", chk$1)), accum$1), __amp____colon__((accum$2 = {}, accum$2["true"] = (chk$2 = function chk(x$2) {
    return ["send", ["symbol", "if"], ["data", x$2, ["symbol", "true"], ["symbol", "false"]]];
  }, value_mac$0("true", chk$2)), accum$2), __amp____colon__((accum$3 = {}, accum$3["false"] = (chk$3 = function chk(x$3) {
    return ["send", ["symbol", "not"], ["data", ["void"], x$3]];
  }, value_mac$0("false", chk$3)), accum$3), __amp____colon__((accum$4 = {}, accum$4.String = (chk$4 = function chk(x$4) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$4]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "string"]]]]];
  }, proj$0 = function proj(x$5) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "String"], ["data", x$5]]];
  }, value_mac$0("String", chk$4, proj$0)), accum$4), __amp____colon__((accum$5 = {}, accum$5.Number = (chk$5 = function chk(x$6) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$6]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "number"]]]]];
  }, proj$1 = function proj(x$7) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "parseFloat"], ["data", x$7]]];
  }, value_mac$0("Number", chk$5, proj$1)), accum$5), __amp____colon__((accum$6 = {}, accum$6.Boolean = (chk$6 = function chk(x$8) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$8]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "boolean"]]]]];
  }, proj$2 = function proj(x$9) {
    return ["data", ["symbol", "true"], ["send", ["symbol", "Boolean"], ["data", x$9]]];
  }, value_mac$0("Boolean", chk$6, proj$2)), accum$6), __amp____colon__((accum$7 = {}, accum$7.Array = (chk$7 = function chk(x$10) {
    return ["send", ["send", ["symbol", "Array"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "isArray"]]]], ["data", x$10]];
  }, proj$3 = function proj(x$11) {
    return ["data", ["symbol", "true"], ["multi", ["send", ["symbol", "="], ["data", ["symbol", "t"], x$11]], ["send", ["symbol", "if"], ["data", ["send", ["send", ["symbol", "Array"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "isArray"]]]], ["data", ["symbol", "t"]]], ["symbol", "t"], ["data", ["symbol", "t"]]]]]];
  }, value_mac$0("Array", chk$7, proj$3)), accum$7), (accum$8 = {}, accum$8.Function = (chk$8 = function chk(x$12) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$12]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "function"]]]]];
  }, value_mac$0("Function", chk$8)), accum$8)))))))));acc$0 = [];temp$0 = null;m$2 = null;$3: for (var _iterator3 = items(kv$0)[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
    m$2 = _step3.value;
    var k$0 = undefined;var v$1 = undefined;var t0$1 = undefined;var t1$1 = undefined;t0$1 = m$2;if (Array.isArray(t0$1) && (t1$1 = t0$1.length, t1$1 === 2)) {
      k$0 = t0$1[0];v$1 = t0$1[1];temp$0 = mac$0(k$0)(v$1);acc$0.push(temp$0);
    } else {
      ___match_error(m$2);
    }
  }return exports$0;
};module.exports = $targ$0;[];
//# sourceMappingURL=consts.js.map

