"use strict";
require("earlgrey-runtime");
var $targ$4;
var $0$0;
var expr_mac$0;
var expr_mac2$0;
var AssignmentHandler$0;
$0$0 = require("./helpers");
expr_mac$0 = $0$0.expr_mac;
expr_mac2$0 = $0$0["expr_mac2"];
AssignmentHandler$0 = $0$0.AssignmentHandler;
$targ$4 = (function(mac$0) {
  var t0$3;
  var t0$7;
  var t1$3;
  var t0$9;
  var t1$5;
  var t0$11;
  var $targ$6;
  var yield_mac$0;
  var $targ$7;
  var await_mac$0;
  var $targ$8;
  var gen_mac$0;
  var $targ$9;
  var async_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$6 = (function(ph$0$0, temp$0$0, form$0, arg$0) {
    var x$0;
    var subp$0;
    var w$0;
    var t0$0;
    var t0$1;
    var t2$0;
    var t1$0;
    var t0$2;
    var arg$2;
    var arg$1;
    var m$0$0;
    var otherwise$0;
    var bridge$$5824$0;
    if (((x$0 = ph$0$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {
      if (equal(arg$0, ["void"])) {
        subp$0 = null;
      } else {
        subp$0 = arg$0;
      }
      w$0 = (function(ph$1) {
        return ["send", ["symbol", "yield"], ph$1];
      });
      return ["special", AssignmentHandler$0(subp$0, w$0)];
    } else {
      bridge$$5824$0 = ph$0$0;
      if ((((bridge$$5824$0 instanceof Array) && ((t0$0 = bridge$$5824$0.length), ((t0$0 === 2) && ((bridge$$5824$0[0] === "expr") && (bridge$$5824$0[1] === "expr"))))) || ((bridge$$5824$0 instanceof Array) && ((t0$1 = bridge$$5824$0.length), ((t0$1 === 2) && ((bridge$$5824$0[0] === "expr") && (bridge$$5824$0[1] === "head"))))))) {
        m$0$0 = arg$0;
        if (((m$0$0 instanceof Array) && ((t0$2 = m$0$0.length), ((t0$2 === 3) && ((m$0$0[0] === "send") && ((t1$0 = m$0$0[1]), ((t1$0 instanceof Array) && ((t2$0 = t1$0.length), ((t2$0 === 2) && ((t1$0[0] === "symbol") && (t1$0[1] === "all"))))))))))) {
          arg$1 = m$0$0[2];
          return ["js_yield", arg$1, ["value", true]];
        } else {
          arg$2 = m$0$0;
          return ["js_yield", arg$2, ["value", false]];
        }
      } else {
        otherwise$0 = ph$0$0;
        return ["nostep", form$0];
      }
    }
  });
  t0$3 = getProjector(mac$0("yield"))($targ$6);
  if (t0$3[0]) {
    yield_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$6);
  }
  $targ$7 = (function(ph$2$0, temp$1$0, form$1, arg$3) {
    var x$1;
    var subp$1;
    var w$1;
    var t0$4;
    var t0$5;
    var t2$1;
    var t1$1;
    var t0$6;
    var arg$6;
    var arg$5;
    var arg$4;
    var $$5965$0;
    var $$5966$0;
    var $$5967$0;
    var $$5968$0;
    var $$5969$0;
    var $$5970$0;
    var $$5971$0;
    var $$5972$0;
    var $$5973$0;
    var m$1$0;
    var otherwise$1;
    var bridge$$5914$0;
    if (((x$1 = ph$2$0), ((x$1 instanceof Array) && (x$1[0] === "pattern")))) {
      if (equal(arg$3, ["void"])) {
        subp$1 = null;
      } else {
        subp$1 = arg$3;
      }
      w$1 = (function(ph$3) {
        return ["send", ["symbol", "await"], ph$3];
      });
      return ["special", AssignmentHandler$0(subp$1, w$1)];
    } else {
      bridge$$5914$0 = ph$2$0;
      if ((((bridge$$5914$0 instanceof Array) && ((t0$4 = bridge$$5914$0.length), ((t0$4 === 2) && ((bridge$$5914$0[0] === "expr") && (bridge$$5914$0[1] === "expr"))))) || ((bridge$$5914$0 instanceof Array) && ((t0$5 = bridge$$5914$0.length), ((t0$5 === 2) && ((bridge$$5914$0[0] === "expr") && (bridge$$5914$0[1] === "head"))))))) {
        m$1$0 = arg$3;
        if ((($$5965$0 = (m$1$0 instanceof Array)) && ((t0$6 = m$1$0.length), (($$5967$0 = (t0$6 === 3)) && (($$5968$0 = (m$1$0[0] === "send")) && ((t1$1 = m$1$0[1]), (($$5970$0 = (t1$1 instanceof Array)) && ((t2$1 = t1$1.length), (($$5972$0 = (t2$1 === 2)) && (($$5973$0 = (t1$1[0] === "symbol")) && (t1$1[1] === "all"))))))))))) {
          arg$4 = m$1$0[2];
          return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "all"]]]], ["data", arg$4]], ["value", false]];
        } else {
          if (($$5973$0 && (t1$1[1] === "any"))) {
            arg$5 = m$1$0[2];
            return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "race"]]]], ["data", arg$5]], ["value", false]];
          } else {
            arg$6 = m$1$0;
            return ["js_yield", arg$6, ["value", false]];
          }
        }
      } else {
        otherwise$1 = ph$2$0;
        return ["nostep", form$1];
      }
    }
  });
  t0$7 = getProjector(mac$0("await"))($targ$7);
  if (t0$7[0]) {
    await_mac$0 = t0$7[1];
  } else {
    ___match_error($targ$7);
  }
  $targ$8 = (function(ph$4$0) {
    var $targ$39;
    var $targ$38;
    var t5$0;
    var t4$0;
    var t3$0;
    var t2$2;
    var $targ$41;
    var $targ$40;
    var arg$8;
    var pre$0;
    var body$1;
    var post$0;
    var t0$8;
    var t1$2;
    var arg$7;
    var body$0;
    var $$6017$0;
    var $$6018$0;
    var $$6019$0;
    var $$6020$0;
    var $$6021$0;
    var $$6022$0;
    var $$6023$0;
    var $$6024$0;
    var $$6025$0;
    var $$6026$0;
    var $$6027$0;
    var $$6028$0;
    var $$6029$0;
    var $$6030$0;
    var t6$0;
    var t7$0;
    t0$8 = ph$4$0;
    t1$2 = t0$8.length;
    if ((($$6019$0 = (t1$2 === 2)) && (($$6020$0 = (t0$8[0] === "data")) && ((t2$2 = t0$8[1]), (($$6022$0 = (t2$2 instanceof Array)) && ((t3$0 = t2$2.length), (($$6024$0 = (t3$0 === 3)) && (($$6025$0 = (t2$2[0] === "send")) && ((t4$0 = t2$2[1]), (($$6027$0 = (t4$0 instanceof Array)) && ((t5$0 = t4$0.length), (($$6029$0 = (t5$0 === 2)) && (($$6030$0 = (t4$0[0] === "symbol")) && ((t4$0[1] === "->") && (($targ$38 = t2$2[2]), (t6$0 = $targ$38), ((t6$0 instanceof Array) && (($targ$39 = t6$0.length), (t7$0 = $targ$39), ((t7$0 === 3) && (t6$0[0] === "data"))))))))))))))))))) {
      arg$7 = t6$0[1];
      body$0 = t6$0[2];
      return ["send", ["symbol", "*->"], ["data", arg$7, body$0]];
    } else {
      if (($$6030$0 && ((t4$0[1] === "_lambda") && (($targ$40 = t2$2[2]), (t6$0 = $targ$40), ((t6$0 instanceof Array) && (($targ$41 = t6$0.length), (t7$0 = $targ$41), ((t7$0 === 6) && (t6$0[0] === "data")))))))) {
        arg$8 = t6$0[1];
        pre$0 = t6$0[2];
        body$1 = t6$0[3];
        post$0 = t6$0[4];
        t6$0[5];
        return ["send", ["symbol", "_lambda"], ["data", arg$8, pre$0, body$1, post$0, ["value", true]]];
      } else {
        return ___match_error(ph$4$0);
      }
    }
  });
  t0$9 = getProjector(expr_mac2$0)($targ$8);
  if ((t0$9[0] && ((t1$3 = getProjector(mac$0("gen"))(t0$9[1])), t1$3[0]))) {
    gen_mac$0 = t1$3[1];
  } else {
    ___match_error($targ$8);
  }
  $targ$9 = (function(ph$5$0) {
    var $targ$51;
    var $targ$50;
    var t5$1;
    var t4$1;
    var t3$1;
    var t2$3;
    var $targ$53;
    var $targ$52;
    var arg$10;
    var pre$1;
    var body$3;
    var post$1;
    var t0$10;
    var t1$4;
    var arg$9;
    var body$2;
    var $$6107$0;
    var $$6108$0;
    var $$6109$0;
    var $$6110$0;
    var $$6111$0;
    var $$6112$0;
    var $$6113$0;
    var $$6114$0;
    var $$6115$0;
    var $$6116$0;
    var $$6117$0;
    var $$6118$0;
    var $$6119$0;
    var $$6120$0;
    var t6$1;
    var t7$1;
    t0$10 = ph$5$0;
    t1$4 = t0$10.length;
    if ((($$6109$0 = (t1$4 === 2)) && (($$6110$0 = (t0$10[0] === "data")) && ((t2$3 = t0$10[1]), (($$6112$0 = (t2$3 instanceof Array)) && ((t3$1 = t2$3.length), (($$6114$0 = (t3$1 === 3)) && (($$6115$0 = (t2$3[0] === "send")) && ((t4$1 = t2$3[1]), (($$6117$0 = (t4$1 instanceof Array)) && ((t5$1 = t4$1.length), (($$6119$0 = (t5$1 === 2)) && (($$6120$0 = (t4$1[0] === "symbol")) && ((t4$1[1] === "->") && (($targ$50 = t2$3[2]), (t6$1 = $targ$50), ((t6$1 instanceof Array) && (($targ$51 = t6$1.length), (t7$1 = $targ$51), ((t7$1 === 3) && (t6$1[0] === "data"))))))))))))))))))) {
      arg$9 = t6$1[1];
      body$2 = t6$1[2];
      return ["send", ["symbol", "->"], ["data", arg$9, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$2]]]]]];
    } else {
      if (($$6120$0 && ((t4$1[1] === "_lambda") && (($targ$52 = t2$3[2]), (t6$1 = $targ$52), ((t6$1 instanceof Array) && (($targ$53 = t6$1.length), (t7$1 = $targ$53), ((t7$1 === 6) && (t6$1[0] === "data")))))))) {
        arg$10 = t6$1[1];
        pre$1 = t6$1[2];
        body$3 = t6$1[3];
        post$1 = t6$1[4];
        t6$1[5];
        return ["send", ["symbol", "_lambda"], ["data", arg$10, pre$1, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$3]]]], post$1, ["value", false]]];
      } else {
        return ___match_error(ph$5$0);
      }
    }
  });
  t0$11 = getProjector(expr_mac2$0)($targ$9);
  if ((t0$11[0] && ((t1$5 = getProjector(mac$0("async"))(t0$11[1])), t1$5[0]))) {
    async_mac$0 = t1$5[1];
  } else {
    ___match_error($targ$9);
  }
  return exports$0;
});
(module["exports"] = $targ$4);
[];
//# sourceURL=<compile-source>
