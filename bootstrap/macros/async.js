
"use strict";require("earlgrey-runtime/5");var $targ$0 = undefined;var $0$0 = undefined;var expr_mac$0 = undefined;var expr_mac2$0 = undefined;var AssignmentHandler$0 = undefined;$0$0 = require("./helpers");expr_mac$0 = $0$0.expr_mac;expr_mac2$0 = $0$0.expr_mac2;AssignmentHandler$0 = $0$0.AssignmentHandler;$targ$0 = function (mac$0) {
  var t0$3 = undefined;var t0$7 = undefined;var t0$9 = undefined;var t1$3 = undefined;var t0$11 = undefined;var t1$5 = undefined;var $targ$1 = undefined;var yield_mac$0 = undefined;var $targ$2 = undefined;var await_mac$0 = undefined;var $targ$3 = undefined;var gen_mac$0 = undefined;var $targ$4 = undefined;var async_mac$0 = undefined;var exports$0 = undefined;exports$0 = {};$targ$1 = function (ph$0$0, temp$0$0, form$0, arg$0) {
    var x$0 = undefined;var subp$0 = undefined;var w$0 = undefined;var t0$0 = undefined;var t0$1 = undefined;var arg$2 = undefined;var arg$1 = undefined;var t0$2 = undefined;var t1$0 = undefined;var t2$0 = undefined;var m$0$0 = undefined;var otherwise$0 = undefined;var bridge$$5244$0 = undefined;if ((x$0 = ph$0$0, x$0 instanceof Array && x$0[0] === "pattern")) {
      if (equal(arg$0, ["void"])) {
        subp$0 = null;
      } else {
        subp$0 = arg$0;
      }w$0 = function w(ph$1) {
        return ["send", ["symbol", "yield"], ph$1];
      };return ["special", AssignmentHandler$0(subp$0, w$0)];
    } else {
      bridge$$5244$0 = ph$0$0;if (Array.isArray(bridge$$5244$0) && (t0$0 = bridge$$5244$0.length, t0$0 === 2 && (bridge$$5244$0[0] === "expr" && bridge$$5244$0[1] === "expr")) || Array.isArray(bridge$$5244$0) && (t0$1 = bridge$$5244$0.length, t0$1 === 2 && (bridge$$5244$0[0] === "expr" && bridge$$5244$0[1] === "head"))) {
        m$0$0 = arg$0;if (Array.isArray(m$0$0) && (t0$2 = m$0$0.length, t0$2 === 3 && (m$0$0[0] === "send" && (t1$0 = m$0$0[1], Array.isArray(t1$0) && (t2$0 = t1$0.length, t2$0 === 2 && (t1$0[0] === "symbol" && t1$0[1] === "all")))))) {
          arg$1 = m$0$0[2];return ["js_yield", arg$1, ["value", true]];
        } else {
          arg$2 = m$0$0;return ["js_yield", arg$2, ["value", false]];
        }
      } else {
        otherwise$0 = ph$0$0;return ["nostep", form$0];
      }
    }
  };t0$3 = getProjector(mac$0("yield"))($targ$1);if (t0$3[0]) {
    yield_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$1);
  }$targ$2 = function (ph$2$0, temp$1$0, form$1, arg$3) {
    var x$1 = undefined;var subp$1 = undefined;var w$1 = undefined;var t0$4 = undefined;var t0$5 = undefined;var arg$6 = undefined;var arg$5 = undefined;var arg$4 = undefined;var $$5385$0 = undefined;var $$5386$0 = undefined;var $$5387$0 = undefined;var $$5388$0 = undefined;var $$5389$0 = undefined;var $$5390$0 = undefined;var $$5391$0 = undefined;var $$5392$0 = undefined;var $$5393$0 = undefined;var t0$6 = undefined;var t1$1 = undefined;var t2$1 = undefined;var m$1$0 = undefined;var otherwise$1 = undefined;var bridge$$5334$0 = undefined;if ((x$1 = ph$2$0, x$1 instanceof Array && x$1[0] === "pattern")) {
      if (equal(arg$3, ["void"])) {
        subp$1 = null;
      } else {
        subp$1 = arg$3;
      }w$1 = function w(ph$3) {
        return ["send", ["symbol", "await"], ph$3];
      };return ["special", AssignmentHandler$0(subp$1, w$1)];
    } else {
      bridge$$5334$0 = ph$2$0;if (Array.isArray(bridge$$5334$0) && (t0$4 = bridge$$5334$0.length, t0$4 === 2 && (bridge$$5334$0[0] === "expr" && bridge$$5334$0[1] === "expr")) || Array.isArray(bridge$$5334$0) && (t0$5 = bridge$$5334$0.length, t0$5 === 2 && (bridge$$5334$0[0] === "expr" && bridge$$5334$0[1] === "head"))) {
        m$1$0 = arg$3;if (($$5385$0 = Array.isArray(m$1$0)) && (t0$6 = m$1$0.length, ($$5387$0 = t0$6 === 3) && (($$5388$0 = m$1$0[0] === "send") && (t1$1 = m$1$0[1], ($$5390$0 = Array.isArray(t1$1)) && (t2$1 = t1$1.length, ($$5392$0 = t2$1 === 2) && (($$5393$0 = t1$1[0] === "symbol") && t1$1[1] === "all")))))) {
          arg$4 = m$1$0[2];return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "all"]]]], ["data", arg$4]], ["value", false]];
        } else {
          if ($$5393$0 && t1$1[1] === "any") {
            arg$5 = m$1$0[2];return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "race"]]]], ["data", arg$5]], ["value", false]];
          } else {
            arg$6 = m$1$0;return ["js_yield", arg$6, ["value", false]];
          }
        }
      } else {
        otherwise$1 = ph$2$0;return ["nostep", form$1];
      }
    }
  };t0$7 = getProjector(mac$0("await"))($targ$2);if (t0$7[0]) {
    await_mac$0 = t0$7[1];
  } else {
    ___match_error($targ$2);
  }$targ$3 = function (ph$4$0) {
    var arg$8 = undefined;var pre$0 = undefined;var body$1 = undefined;var post$0 = undefined;var arg$7 = undefined;var body$0 = undefined;var $$5437$0 = undefined;var $$5438$0 = undefined;var $$5439$0 = undefined;var $$5440$0 = undefined;var $$5441$0 = undefined;var $$5442$0 = undefined;var $$5443$0 = undefined;var $$5444$0 = undefined;var $$5445$0 = undefined;var $$5446$0 = undefined;var $$5447$0 = undefined;var $$5448$0 = undefined;var $$5449$0 = undefined;var $$5450$0 = undefined;var t0$8 = undefined;var t1$2 = undefined;var t2$2 = undefined;var t3$0 = undefined;var t4$0 = undefined;var t5$0 = undefined;var t6$0 = undefined;var t7$0 = undefined;t0$8 = ph$4$0;t1$2 = t0$8.length;if (($$5439$0 = t1$2 === 2) && (($$5440$0 = t0$8[0] === "data") && (t2$2 = t0$8[1], ($$5442$0 = Array.isArray(t2$2)) && (t3$0 = t2$2.length, ($$5444$0 = t3$0 === 3) && (($$5445$0 = t2$2[0] === "send") && (t4$0 = t2$2[1], ($$5447$0 = Array.isArray(t4$0)) && (t5$0 = t4$0.length, ($$5449$0 = t5$0 === 2) && (($$5450$0 = t4$0[0] === "symbol") && (t4$0[1] === "->" && (t6$0 = t2$2[2], Array.isArray(t6$0) && (t7$0 = t6$0.length, t7$0 === 3 && t6$0[0] === "data"))))))))))) {
      arg$7 = t6$0[1];body$0 = t6$0[2];return ["send", ["symbol", "*->"], ["data", arg$7, body$0]];
    } else {
      if ($$5450$0 && (t4$0[1] === "_lambda" && (t6$0 = t2$2[2], Array.isArray(t6$0) && (t7$0 = t6$0.length, t7$0 === 6 && t6$0[0] === "data")))) {
        arg$8 = t6$0[1];pre$0 = t6$0[2];body$1 = t6$0[3];post$0 = t6$0[4];t6$0[5];return ["send", ["symbol", "_lambda"], ["data", arg$8, pre$0, body$1, post$0, ["value", true]]];
      } else {
        return ___match_error(ph$4$0);
      }
    }
  };t0$9 = getProjector(expr_mac2$0)($targ$3);if (t0$9[0] && (t1$3 = getProjector(mac$0("gen"))(t0$9[1]), t1$3[0])) {
    gen_mac$0 = t1$3[1];
  } else {
    ___match_error($targ$3);
  }$targ$4 = function (ph$5$0) {
    var arg$10 = undefined;var pre$1 = undefined;var body$3 = undefined;var post$1 = undefined;var arg$9 = undefined;var body$2 = undefined;var $$5527$0 = undefined;var $$5528$0 = undefined;var $$5529$0 = undefined;var $$5530$0 = undefined;var $$5531$0 = undefined;var $$5532$0 = undefined;var $$5533$0 = undefined;var $$5534$0 = undefined;var $$5535$0 = undefined;var $$5536$0 = undefined;var $$5537$0 = undefined;var $$5538$0 = undefined;var $$5539$0 = undefined;var $$5540$0 = undefined;var t0$10 = undefined;var t1$4 = undefined;var t2$3 = undefined;var t3$1 = undefined;var t4$1 = undefined;var t5$1 = undefined;var t6$1 = undefined;var t7$1 = undefined;t0$10 = ph$5$0;t1$4 = t0$10.length;if (($$5529$0 = t1$4 === 2) && (($$5530$0 = t0$10[0] === "data") && (t2$3 = t0$10[1], ($$5532$0 = Array.isArray(t2$3)) && (t3$1 = t2$3.length, ($$5534$0 = t3$1 === 3) && (($$5535$0 = t2$3[0] === "send") && (t4$1 = t2$3[1], ($$5537$0 = Array.isArray(t4$1)) && (t5$1 = t4$1.length, ($$5539$0 = t5$1 === 2) && (($$5540$0 = t4$1[0] === "symbol") && (t4$1[1] === "->" && (t6$1 = t2$3[2], Array.isArray(t6$1) && (t7$1 = t6$1.length, t7$1 === 3 && t6$1[0] === "data"))))))))))) {
      arg$9 = t6$1[1];body$2 = t6$1[2];return ["send", ["symbol", "->"], ["data", arg$9, ["send", ["send", ["symbol", "spawn"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "call"]]]], ["data", ["symbol", "this"], ["send", ["symbol", "*->"], ["data", ["data"], body$2]]]]]];
    } else {
      if ($$5540$0 && (t4$1[1] === "_lambda" && (t6$1 = t2$3[2], Array.isArray(t6$1) && (t7$1 = t6$1.length, t7$1 === 6 && t6$1[0] === "data")))) {
        arg$10 = t6$1[1];pre$1 = t6$1[2];body$3 = t6$1[3];post$1 = t6$1[4];t6$1[5];return ["send", ["symbol", "_lambda"], ["data", arg$10, pre$1, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$3]]]], post$1, ["value", false]]];
      } else {
        return ___match_error(ph$5$0);
      }
    }
  };t0$11 = getProjector(expr_mac2$0)($targ$4);if (t0$11[0] && (t1$5 = getProjector(mac$0("async"))(t0$11[1]), t1$5[0])) {
    async_mac$0 = t1$5[1];
  } else {
    ___match_error($targ$4);
  }return exports$0;
};module.exports = $targ$0;[];
//# sourceMappingURL=async.js.map

