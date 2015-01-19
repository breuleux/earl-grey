"use strict";
require("earlgrey-runtime");
var m$1;
var $targ$10;
var $targ$11;
var mt$0;
var Env$0;
var Expander$0;
var topscope$0;
var stdenv$0;
var mac$0;
var bind$0;
var make_expander$0;
mt$0 = require("./expand");
Env$0 = mt$0.Env;
Expander$0 = mt$0.Expander;
topscope$0 = mt$0.topscope;
stdenv$0 = Env$0();
mac$0 = (function(name$0) {
  return (function(m$0) {
    stdenv$0.bind(topscope$0, name$0, ["macro", m$0]);
    return m$0;
  });
});
bind$0 = (function(name$1, value$0) {
  return stdenv$0.bind(topscope$0, name$1, value$0);
});
m$1 = null;
$1: for (var $__0 = "consts core operators loop quote regexp modularity\n testing misc macrodef async logic".split(RegExp("[\\n ]+", ""))[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__1; !($__1 = $__0.next()).done; ) {
  m$1 = $__1.value;
  {
    var $5$0;
    var m$2;
    m$2 = m$1;
    (($5$0 = require(("./macros/" + m$2))), $5$0)(mac$0, bind$0);
  }
}
make_expander$0 = (function(pipeline$0) {
  var generic_nodes$0;
  generic_nodes$0 = ["if", "js_while", "js_for", "js_for_in", "js_for_of", "js_label", "js_break", "js_continue", "js_return", "js_delete", "js_throw", "js_try", "js_new", "js_yield"];
  return Expander$0(stdenv$0.fork(), generic_nodes$0, pipeline$0);
});
$targ$10 = stdenv$0;
(exports["stdenv"] = $targ$10);
[];
$targ$11 = make_expander$0;
(exports["make_expander"] = $targ$11);
[];
//# sourceURL=<compile-source>
