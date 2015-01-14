"use strict";
require("earlgrey-runtime");
var $targ$4;
var $0$0;
var build_loop$0;
var match_error$0;
var Body$0;
$0$0 = require("./helpers");
build_loop$0 = $0$0.build_loop;
match_error$0 = $0$0.match_error;
Body$0 = $0$0.Body;
$targ$4 = (function(mac$0) {
  var t0$3;
  var t0$5;
  var blocktest_wrap$0;
  var _blocktest_mac$0;
  var $targ$8;
  var blocktest_mac$0;
  var $targ$9;
  var timeit_mac$0;
  var exports$0;
  exports$0 = ({});
  blocktest_wrap$0 = (function(expr$0) {
    return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "value"], ["send", ["symbol", "!!"], ["data", ["multi", ["send", ["symbol", "match"], ["data", expr$0, ["multi", ["send", ["symbol", "->"], ["data", ["send", ["symbol", "?"], ["data", ["symbol", "true"], ["symbol", "x"]]], ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "success"]]], ["data", ["symbol", "x"]]]]], ["send", ["symbol", "->"], ["data", ["send", ["symbol", "?"], ["data", ["symbol", "false"], ["symbol", "x"]]], ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "failure"]]], ["data", ["symbol", "x"]]]]]]]]], ["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "error"]]], ["data", ["symbol", "e"]]]]]]]]], ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "push"]]]], ["data", ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "test_result"]]], ["data", ["symbol", "label"], ["symbol", "value"]]]]]];
  });
  _blocktest_mac$0 = (function(info$0, tests$0) {
    var m$0;
    var acc$0;
    var exptests$0;
    var n$0;
    var stmts$0;
    exptests$0 = enumerate(info$0.step_all(["test"], tests$0));
    n$0 = exptests$0.length;
    stmts$0 = ((acc$0 = []), (m$0 = null), (function() {
      $1: for (var $__0 = exptests$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$0 = $__1.value;
        {
          var $targ$17;
          var $targ$16;
          var t1$0;
          var $targ$19;
          var $targ$18;
          var $targ$21;
          var $targ$20;
          var wrap$0;
          var fall$0;
          var lbl$0;
          var i$3;
          var expr$2;
          var i$2;
          var elements$0;
          var clauses$0;
          var env$0;
          var i$1;
          var more_labels$0;
          var more_tests$0;
          var t0$0;
          var i$0;
          var stmt$0;
          var $$14673$0;
          var $$14674$0;
          var $$14675$0;
          var $$14676$0;
          var t2$0;
          var t3$0;
          t0$0 = m$0;
          if ((($$14674$0 = (t0$0 instanceof Array)) && ((t1$0 = t0$0.length), (($$14676$0 = (t1$0 === 2)) && ((i$0 = t0$0[0]), ($targ$16 = t0$0[1]), (t2$0 = $targ$16), ((t2$0 instanceof Array) && (($targ$17 = t2$0.length), (t3$0 = $targ$17), ((t3$0 === 2) && (t2$0[0] === "do"))))))))) {
            stmt$0 = t2$0[1];
            acc$0.push(stmt$0);
          } else {
            if (($$14676$0 && ((i$1 = t0$0[0]), ($targ$18 = t0$0[1]), (t2$0 = $targ$18), ((t2$0 instanceof Array) && (($targ$19 = t2$0.length), (t3$0 = $targ$19), ((t3$0 === 3) && (t2$0[0] === "blocktest"))))))) {
              more_labels$0 = t2$0[1];
              more_tests$0 = t2$0[2];
              acc$0.push(["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["send", ["send", ["symbol", "label"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["send", ["symbol", "!"], ["data", ["symbol", "Array"], more_labels$0]]]]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "acc"]], ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", _blocktest_mac$0(info$0, more_tests$0)]]]]]]);
            } else {
              if (($$14676$0 && ((i$2 = t0$0[0]), ($targ$20 = t0$0[1]), (t2$0 = $targ$20), ((t2$0 instanceof Array) && (($targ$21 = t2$0.length), (t3$0 = $targ$21), ((t3$0 === 3) && ((t2$0[0] === "test_factory") && ((elements$0 = t2$0[1]), (clauses$0 = t2$0[2]), ___hasprop(t2$0, "env"))))))))) {
                env$0 = t2$0.env;
                acc$0.push(((wrap$0 = (function(expr$1, index$0) {
                  return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["send", ["send", ["symbol", "label"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["data", index$0]]]]], blocktest_wrap$0(expr$1)]];
                })), (fall$0 = (function(target$0) {
                  return match_error$0(target$0);
                })), build_loop$0(info$0, env$0, ["void"], elements$0, clauses$0, wrap$0, ["splice"], ["splice"], ({"fallback": fall$0}))));
              } else {
                if ($$14676$0) {
                  i$3 = t0$0[0];
                  expr$2 = t0$0[1];
                  acc$0.push(((lbl$0 = ((n$0 === 1) ? ["data"] : ["data", ["value", i$3]])), ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["send", ["send", ["symbol", "label"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", lbl$0]]]], blocktest_wrap$0(expr$2)]]));
                } else {
                  ___match_error(m$0, "/home/olivier/git/earl-grey/src/macros/testing.eg", 468, 1276);
                }
              }
            }
          }
        }
      }
    })(), acc$0);
    return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["send", ["symbol", "!!"], ["data", ["multi"].concat(stmts$0).concat([["symbol", "acc"]]), ["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["data", ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "error"]]], ["data", ["symbol", "label"], ["symbol", "e"]]]]]]]]]]]];
  });
  $targ$8 = (function(context$0, info$1, form$0, temp$0$0) {
    var t1$1;
    var t0$1;
    var $targ$31;
    var $targ$30;
    var $targ$29;
    var t0$2;
    var $targ$34;
    var $targ$33;
    var $targ$32;
    var labels$0;
    var tests$2;
    var tests$1;
    var $$14781$0;
    var $$14782$0;
    var t1$2;
    var t2$1;
    var t3$1;
    var m$1$0;
    var ph$0;
    t0$1 = temp$0$0;
    if (((t0$1 instanceof Array) && ((t1$1 = t0$1.length), ((t1$1 >= 1) && (t0$1[0] === "data"))))) {
      ph$0 = Array.prototype.slice.call(t0$1, 1);
    } else {
      ___match_error(temp$0$0);
    }
    m$1$0 = ph$0;
    if ((($$14781$0 = (m$1$0 instanceof Array)) && ((t0$2 = m$1$0.length), ((t0$2 === 1) && (($targ$29 = getProjector(Body$0)(m$1$0[0])), (t1$2 = $targ$29), (t1$2[0] && (($targ$30 = t1$2[1]), (t2$1 = $targ$30), ($targ$31 = t2$1.length), (t3$1 = $targ$31), (t3$1 >= 0)))))))) {
      tests$1 = Array.prototype.slice.call(t2$1, 0);
      return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["data"]]], _blocktest_mac$0(info$1, tests$1)];
    } else {
      if (($$14781$0 && ((t0$2 === 2) && ((labels$0 = m$1$0[0]), ($targ$32 = getProjector(Body$0)(m$1$0[1])), (t1$2 = $targ$32), (t1$2[0] && (($targ$33 = t1$2[1]), (t2$1 = $targ$33), ($targ$34 = t2$1.length), (t3$1 = $targ$34), (t3$1 >= 0))))))) {
        tests$2 = Array.prototype.slice.call(t2$1, 0);
        return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["send", ["symbol", "!"], ["data", ["symbol", "Array"], labels$0]]]], _blocktest_mac$0(info$1, tests$2)];
      } else {
        return ___match_error(m$1$0);
      }
    }
  });
  t0$3 = getProjector(mac$0("blocktest"))($targ$8);
  if (t0$3[0]) {
    blocktest_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$8);
  }
  $targ$9 = (function(context$1, info$2, form$1, temp$1$0) {
    var t1$3;
    var t0$4;
    var body$0;
    t0$4 = temp$1$0;
    if (((t0$4 instanceof Array) && ((t1$3 = t0$4.length), ((t1$3 === 2) && (t0$4[0] === "data"))))) {
      body$0 = t0$4[1];
    } else {
      ___match_error(temp$1$0);
    }
    return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "t"], ["send", ["send", ["symbol", "process"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "hrtime"]]]], ["data"]]]], ["send", ["symbol", "="], ["data", ["symbol", "result"], body$0]], ["send", ["symbol", "="], ["data", ["data", ["symbol", "s"], ["symbol", "n"]], ["send", ["send", ["symbol", "process"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "hrtime"]]]], ["data", ["symbol", "t"]]]]], ["data", ["symbol", "result"], ["send", ["symbol", "+"], ["data", ["send", ["symbol", "*"], ["data", ["symbol", "s"], ["value", 1000]]], ["send", ["symbol", "/"], ["data", ["symbol", "n"], ["value", 1000000]]]]]]];
  });
  t0$5 = getProjector(mac$0("timeit"))($targ$9);
  if (t0$5[0]) {
    timeit_mac$0 = t0$5[1];
  } else {
    ___match_error($targ$9);
  }
  return exports$0;
});
(module["exports"] = $targ$4);
//# sourceURL=<compile-source>
