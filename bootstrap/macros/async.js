"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$0;
var $0$0;
var expr_mac$0;
var expr_mac2$0;
var AssignmentHandler$0;
$0$0 = require("./helpers");
expr_mac$0 = $0$0.expr_mac;
expr_mac2$0 = $0$0["expr_mac2"];
AssignmentHandler$0 = $0$0.AssignmentHandler;
$targ$0 = (function(mac$0) {
  var t0$3;
  var t0$7;
  var t0$9;
  var t1$3;
  var t0$11;
  var t1$5;
  var $targ$1;
  var yield_mac$0;
  var $targ$2;
  var await_mac$0;
  var $targ$3;
  var gen_mac$0;
  var $targ$4;
  var async_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$1 = (function(ph$0$0, temp$0$0, form$0, arg$0) {
    var x$0;
    var subp$0;
    var w$0;
    var t0$0;
    var t0$1;
    var arg$2;
    var arg$1;
    var t0$2;
    var t1$0;
    var t2$0;
    var m$0$0;
    var otherwise$0;
    var bridge$$5671$0;
    if (((x$0 = ph$0$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {
      if (equal(arg$0, ["void"])) {
        subp$0 = null;
      } else {
        subp$0 = arg$0;
      }
      w$0 = (function w(ph$1) {
        return ["send", ["symbol", "yield"], ph$1];
      });
      return ["special", AssignmentHandler$0(subp$0, w$0)];
    } else {
      bridge$$5671$0 = ph$0$0;
      if ((((bridge$$5671$0 instanceof Array) && ((t0$0 = bridge$$5671$0.length), ((t0$0 === 2) && ((bridge$$5671$0[0] === "expr") && (bridge$$5671$0[1] === "expr"))))) || ((bridge$$5671$0 instanceof Array) && ((t0$1 = bridge$$5671$0.length), ((t0$1 === 2) && ((bridge$$5671$0[0] === "expr") && (bridge$$5671$0[1] === "head"))))))) {
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
  t0$3 = getProjector(mac$0("yield"))($targ$1);
  if (t0$3[0]) {
    yield_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$1);
  }
  $targ$2 = (function(ph$2$0, temp$1$0, form$1, arg$3) {
    var x$1;
    var subp$1;
    var w$1;
    var t0$4;
    var t0$5;
    var arg$6;
    var arg$5;
    var arg$4;
    var $$5812$0;
    var $$5813$0;
    var $$5814$0;
    var $$5815$0;
    var $$5816$0;
    var $$5817$0;
    var $$5818$0;
    var $$5819$0;
    var $$5820$0;
    var t0$6;
    var t1$1;
    var t2$1;
    var m$1$0;
    var otherwise$1;
    var bridge$$5761$0;
    if (((x$1 = ph$2$0), ((x$1 instanceof Array) && (x$1[0] === "pattern")))) {
      if (equal(arg$3, ["void"])) {
        subp$1 = null;
      } else {
        subp$1 = arg$3;
      }
      w$1 = (function w(ph$3) {
        return ["send", ["symbol", "await"], ph$3];
      });
      return ["special", AssignmentHandler$0(subp$1, w$1)];
    } else {
      bridge$$5761$0 = ph$2$0;
      if ((((bridge$$5761$0 instanceof Array) && ((t0$4 = bridge$$5761$0.length), ((t0$4 === 2) && ((bridge$$5761$0[0] === "expr") && (bridge$$5761$0[1] === "expr"))))) || ((bridge$$5761$0 instanceof Array) && ((t0$5 = bridge$$5761$0.length), ((t0$5 === 2) && ((bridge$$5761$0[0] === "expr") && (bridge$$5761$0[1] === "head"))))))) {
        m$1$0 = arg$3;
        if ((($$5812$0 = (m$1$0 instanceof Array)) && ((t0$6 = m$1$0.length), (($$5814$0 = (t0$6 === 3)) && (($$5815$0 = (m$1$0[0] === "send")) && ((t1$1 = m$1$0[1]), (($$5817$0 = (t1$1 instanceof Array)) && ((t2$1 = t1$1.length), (($$5819$0 = (t2$1 === 2)) && (($$5820$0 = (t1$1[0] === "symbol")) && (t1$1[1] === "all"))))))))))) {
          arg$4 = m$1$0[2];
          return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "all"]]]], ["data", arg$4]], ["value", false]];
        } else {
          if (($$5820$0 && (t1$1[1] === "any"))) {
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
  t0$7 = getProjector(mac$0("await"))($targ$2);
  if (t0$7[0]) {
    await_mac$0 = t0$7[1];
  } else {
    ___match_error($targ$2);
  }
  $targ$3 = (function(ph$4$0) {
    var arg$8;
    var pre$0;
    var body$1;
    var post$0;
    var arg$7;
    var body$0;
    var $$5864$0;
    var $$5865$0;
    var $$5866$0;
    var $$5867$0;
    var $$5868$0;
    var $$5869$0;
    var $$5870$0;
    var $$5871$0;
    var $$5872$0;
    var $$5873$0;
    var $$5874$0;
    var $$5875$0;
    var $$5876$0;
    var $$5877$0;
    var t0$8;
    var t1$2;
    var t2$2;
    var t3$0;
    var t4$0;
    var t5$0;
    var t6$0;
    var t7$0;
    t0$8 = ph$4$0;
    t1$2 = t0$8.length;
    if ((($$5866$0 = (t1$2 === 2)) && (($$5867$0 = (t0$8[0] === "data")) && ((t2$2 = t0$8[1]), (($$5869$0 = (t2$2 instanceof Array)) && ((t3$0 = t2$2.length), (($$5871$0 = (t3$0 === 3)) && (($$5872$0 = (t2$2[0] === "send")) && ((t4$0 = t2$2[1]), (($$5874$0 = (t4$0 instanceof Array)) && ((t5$0 = t4$0.length), (($$5876$0 = (t5$0 === 2)) && (($$5877$0 = (t4$0[0] === "symbol")) && ((t4$0[1] === "->") && ((t6$0 = t2$2[2]), ((t6$0 instanceof Array) && ((t7$0 = t6$0.length), ((t7$0 === 3) && (t6$0[0] === "data"))))))))))))))))))) {
      arg$7 = t6$0[1];
      body$0 = t6$0[2];
      return ["send", ["symbol", "*->"], ["data", arg$7, body$0]];
    } else {
      if (($$5877$0 && ((t4$0[1] === "_lambda") && ((t6$0 = t2$2[2]), ((t6$0 instanceof Array) && ((t7$0 = t6$0.length), ((t7$0 === 6) && (t6$0[0] === "data")))))))) {
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
  t0$9 = getProjector(expr_mac2$0)($targ$3);
  if ((t0$9[0] && ((t1$3 = getProjector(mac$0("gen"))(t0$9[1])), t1$3[0]))) {
    gen_mac$0 = t1$3[1];
  } else {
    ___match_error($targ$3);
  }
  $targ$4 = (function(ph$5$0) {
    var arg$10;
    var pre$1;
    var body$3;
    var post$1;
    var arg$9;
    var body$2;
    var $$5954$0;
    var $$5955$0;
    var $$5956$0;
    var $$5957$0;
    var $$5958$0;
    var $$5959$0;
    var $$5960$0;
    var $$5961$0;
    var $$5962$0;
    var $$5963$0;
    var $$5964$0;
    var $$5965$0;
    var $$5966$0;
    var $$5967$0;
    var t0$10;
    var t1$4;
    var t2$3;
    var t3$1;
    var t4$1;
    var t5$1;
    var t6$1;
    var t7$1;
    t0$10 = ph$5$0;
    t1$4 = t0$10.length;
    if ((($$5956$0 = (t1$4 === 2)) && (($$5957$0 = (t0$10[0] === "data")) && ((t2$3 = t0$10[1]), (($$5959$0 = (t2$3 instanceof Array)) && ((t3$1 = t2$3.length), (($$5961$0 = (t3$1 === 3)) && (($$5962$0 = (t2$3[0] === "send")) && ((t4$1 = t2$3[1]), (($$5964$0 = (t4$1 instanceof Array)) && ((t5$1 = t4$1.length), (($$5966$0 = (t5$1 === 2)) && (($$5967$0 = (t4$1[0] === "symbol")) && ((t4$1[1] === "->") && ((t6$1 = t2$3[2]), ((t6$1 instanceof Array) && ((t7$1 = t6$1.length), ((t7$1 === 3) && (t6$1[0] === "data"))))))))))))))))))) {
      arg$9 = t6$1[1];
      body$2 = t6$1[2];
      return ["send", ["symbol", "->"], ["data", arg$9, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$2]]]]]];
    } else {
      if (($$5967$0 && ((t4$1[1] === "_lambda") && ((t6$1 = t2$3[2]), ((t6$1 instanceof Array) && ((t7$1 = t6$1.length), ((t7$1 === 6) && (t6$1[0] === "data")))))))) {
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
  t0$11 = getProjector(expr_mac2$0)($targ$4);
  if ((t0$11[0] && ((t1$5 = getProjector(mac$0("async"))(t0$11[1])), t1$5[0]))) {
    async_mac$0 = t1$5[1];
  } else {
    ___match_error($targ$4);
  }
  return exports$0;
});
(module["exports"] = $targ$0);
[];
//# sourceURL=<compile-source>
