
"use strict";require("earlgrey-runtime/5");var $26$0 = undefined;var $28$0 = undefined;var $30$0 = undefined;var $32$0 = undefined;var $34$0 = undefined;var $36$0 = undefined;var $38$0 = undefined;var $40$0 = undefined;var $42$0 = undefined;var $44$0 = undefined;var $46$0 = undefined;var $48$0 = undefined;var $targ$0 = undefined;var $targ$1 = undefined;var mt$0 = undefined;var Env$0 = undefined;var Expander$0 = undefined;var topscope$0 = undefined;var stdenv$0 = undefined;var mac$0 = undefined;var bind$0 = undefined;var make_expander$0 = undefined;mt$0 = require("./expand");Env$0 = mt$0.Env;Expander$0 = mt$0.Expander;topscope$0 = mt$0.topscope;stdenv$0 = Env$0();mac$0 = function mac(name$0) {
  return function (m$0) {
    stdenv$0.bind(topscope$0, name$0, ["macro", m$0]);return m$0;
  };
};bind$0 = function bind(name$1, value$0) {
  return stdenv$0.bind(topscope$0, name$1, value$0);
};($26$0 = require("./macros/consts"), $26$0)(mac$0, bind$0);($28$0 = require("./macros/core"), $28$0)(mac$0, bind$0);($30$0 = require("./macros/operators"), $30$0)(mac$0, bind$0);($32$0 = require("./macros/loop"), $32$0)(mac$0, bind$0);($34$0 = require("./macros/quote"), $34$0)(mac$0, bind$0);($36$0 = require("./macros/regexp"), $36$0)(mac$0, bind$0);($38$0 = require("./macros/modularity"), $38$0)(mac$0, bind$0);($40$0 = require("./macros/testing"), $40$0)(mac$0, bind$0);($42$0 = require("./macros/misc"), $42$0)(mac$0, bind$0);($44$0 = require("./macros/macrodef"), $44$0)(mac$0, bind$0);($46$0 = require("./macros/async"), $46$0)(mac$0, bind$0);($48$0 = require("./macros/logic"), $48$0)(mac$0, bind$0);make_expander$0 = function make_expander(pipeline$0) {
  var generic_nodes$0 = undefined;generic_nodes$0 = ["if", "js_while", "js_for", "js_for_in", "js_for_of", "js_label", "js_break", "js_continue", "js_return", "js_delete", "js_throw", "js_try", "js_new", "js_yield"];return Expander$0(stdenv$0.fork(), generic_nodes$0, pipeline$0);
};$targ$0 = stdenv$0;exports.stdenv = $targ$0;[];$targ$1 = make_expander$0;exports.make_expander = $targ$1;[];
//# sourceMappingURL=stdenv.js.map

