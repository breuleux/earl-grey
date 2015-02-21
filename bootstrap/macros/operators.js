
"use strict";require("earlgrey-runtime/5");var $targ$0 = undefined;var $0$0 = undefined;var partial_pattern$0 = undefined;var make_assigner$0 = undefined;$0$0 = require("./helpers");partial_pattern$0 = $0$0.partial_pattern;make_assigner$0 = $0$0.make_assigner;$targ$0 = function (mac$0) {
  var m$0 = undefined;var t0$2 = undefined;var t0$5 = undefined;var t0$7 = undefined;var t0$9 = undefined;var t0$11 = undefined;var t0$14 = undefined;var t0$17 = undefined;var $targ$1 = undefined;var is_mac$0 = undefined;var $targ$2 = undefined;var minus_mac$0 = undefined;var $targ$3 = undefined;var append_mac$0 = undefined;var $targ$4 = undefined;var range_mac$0 = undefined;var $targ$5 = undefined;var floor_mac$0 = undefined;var $targ$6 = undefined;var times_mac$0 = undefined;var $targ$7 = undefined;var exp_mac$0 = undefined;var exports$0 = undefined;exports$0 = {};m$0 = null;$1: for (var _iterator = items({ "===": partial_pattern$0("==="), "!==": partial_pattern$0("!=="), "in": partial_pattern$0("__in__"), "==": partial_pattern$0("equal"), "!=": partial_pattern$0("nequal"), "<=": partial_pattern$0("<="), ">=": partial_pattern$0(">="), "<": partial_pattern$0("<"), ">": partial_pattern$0(">"), "+=": make_assigner$0("+"), "-=": make_assigner$0("-"), "*=": make_assigner$0("*"), "/=": make_assigner$0("/"), "<<=": make_assigner$0("<<"), ">>=": make_assigner$0(">>"), ">>>=": make_assigner$0(">>>"), "++=": make_assigner$0("++"), "?=": make_assigner$0("match"), "or=": make_assigner$0("or"), "and=": make_assigner$0("and"), "each=": make_assigner$0("each") })[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$0 = _step.value;
    var k$0 = undefined;var v$0 = undefined;var t0$0 = undefined;var t1$0 = undefined;t0$0 = m$0;if (Array.isArray(t0$0) && (t1$0 = t0$0.length, t1$0 === 2)) {
      k$0 = t0$0[0];v$0 = t0$0[1];mac$0(k$0)(v$0);
    } else {
      ___match_error(m$0);
    }
  }$targ$1 = function (ph$0$0, temp$0$0, form$0, temp$1$0) {
    var t0$1 = undefined;var t1$1 = undefined;var x$1 = undefined;var x$0 = undefined;var y$0 = undefined;t0$1 = temp$1$0;if (Array.isArray(t0$1) && (t1$1 = t0$1.length, t1$1 === 3 && t0$1[0] === "data")) {
      x$0 = t0$1[1];y$0 = t0$1[2];
    } else {
      ___match_error(temp$1$0);
    }if ((x$1 = ph$0$0, x$1 instanceof Array && x$1[0] === "pattern")) {
      return ["replace", x$0, y$0];
    } else {
      return ["send", ["symbol", "==="], ["data", x$0, y$0]];
    }
  };t0$2 = getProjector(mac$0("is"))($targ$1);if (t0$2[0]) {
    is_mac$0 = t0$2[1];
  } else {
    ___match_error($targ$1);
  }$targ$2 = function (context$0, temp$2$0, form$1, temp$3$0) {
    var t0$3 = undefined;var other$0 = undefined;var n$0 = undefined;var $$14117$0 = undefined;var $$14118$0 = undefined;var t0$4 = undefined;var t1$2 = undefined;var t2$0 = undefined;var t3$0 = undefined;var t4$0 = undefined;var t5$0 = undefined;var t6$0 = undefined;var expr$0 = undefined;var ph$1$0 = undefined;t0$3 = temp$3$0;expr$0 = t0$3;ph$1$0 = t0$3;t0$4 = ph$1$0;t1$2 = t0$4.length;if (t1$2 === 3 && (t0$4[0] === "data" && (t2$0 = t0$4[1], Array.isArray(t2$0) && (t3$0 = t2$0.length, t3$0 === 1 && (t2$0[0] === "void" && (t4$0 = t0$4[2], Array.isArray(t4$0) && (t5$0 = t4$0.length, t5$0 === 2 && (t4$0[0] === "value" && (t6$0 = t4$0[1], typeof t6$0 === "number"))))))))) {
      n$0 = t6$0;return ["value", -n$0];
    } else {
      if (t1$2 === 1 && t0$4[0] === "void") {
        return ["variable", "-"];
      } else {
        other$0 = ph$1$0;return ["send", ["variable", "-"], expr$0];
      }
    }
  };t0$5 = getProjector(mac$0("-"))($targ$2);if (t0$5[0]) {
    minus_mac$0 = t0$5[1];
  } else {
    ___match_error($targ$2);
  }$targ$3 = function (context$1, temp$4$0, form$2, ph$2$0) {
    var other$1 = undefined;var x$4 = undefined;var y$1 = undefined;var x$3 = undefined;var x$2 = undefined;var $$14188$0 = undefined;var $$14189$0 = undefined;var $$14190$0 = undefined;var $$14191$0 = undefined;var t0$6 = undefined;var t1$3 = undefined;var t2$1 = undefined;var t3$1 = undefined;t0$6 = ph$2$0;t1$3 = t0$6.length;if (($$14190$0 = t1$3 === 3) && (($$14191$0 = t0$6[0] === "data") && (t2$1 = t0$6[1], Array.isArray(t2$1) && (t3$1 = t2$1.length, t3$1 === 1 && t2$1[0] === "void")))) {
      x$2 = t0$6[2];return ["send", ["variable", "++"], ["data", ["void"], x$2]];
    } else {
      if ($$14191$0 && (x$3 = t0$6[1], t2$1 = t0$6[2], Array.isArray(t2$1) && (t3$1 = t2$1.length, t3$1 === 1 && t2$1[0] === "void"))) {
        return ["send", ["variable", "++"], ["data", x$3, ["void"]]];
      } else {
        if ($$14191$0) {
          x$4 = t0$6[1];y$1 = t0$6[2];return ["send", ["send", x$4, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", y$1]];
        } else {
          if (t1$3 === 1 && t0$6[0] === "void") {
            return ["send", ["symbol", "->"], ["data", ["data", ["symbol", "x"], ["symbol", "y"]], ["send", ["send", ["symbol", "x"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["symbol", "y"]]]]];
          } else {
            other$1 = ph$2$0;return ["send", ["symbol", "___build_array"], ["data", other$1]];
          }
        }
      }
    }
  };t0$7 = getProjector(mac$0("++"))($targ$3);if (t0$7[0]) {
    append_mac$0 = t0$7[1];
  } else {
    ___match_error($targ$3);
  }$targ$4 = function (context$2, temp$5$0, form$3, ph$3$0) {
    var x$7 = undefined;var y$2 = undefined;var x$6 = undefined;var x$5 = undefined;var $$14255$0 = undefined;var $$14256$0 = undefined;var $$14257$0 = undefined;var $$14258$0 = undefined;var t0$8 = undefined;var t1$4 = undefined;var t2$2 = undefined;var t3$2 = undefined;t0$8 = ph$3$0;t1$4 = t0$8.length;if (($$14257$0 = t1$4 === 3) && (($$14258$0 = t0$8[0] === "data") && (t2$2 = t0$8[1], Array.isArray(t2$2) && (t3$2 = t2$2.length, t3$2 === 1 && t2$2[0] === "void")))) {
      x$5 = t0$8[2];return ["send", ["symbol", "range"], ["data", ["value", 1], x$5]];
    } else {
      if ($$14258$0 && (x$6 = t0$8[1], t2$2 = t0$8[2], Array.isArray(t2$2) && (t3$2 = t2$2.length, t3$2 === 1 && t2$2[0] === "void"))) {
        return ["send", ["symbol", "range"], ["data", x$6]];
      } else {
        if ($$14258$0) {
          x$7 = t0$8[1];y$2 = t0$8[2];return ["send", ["symbol", "range"], ["data", x$7, y$2]];
        } else {
          if (t1$4 === 1 && t0$8[0] === "void") {
            return ["symbol", "range"];
          } else {
            return ___match_error(ph$3$0);
          }
        }
      }
    }
  };t0$9 = getProjector(mac$0(".."))($targ$4);if (t0$9[0]) {
    range_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$4);
  }$targ$5 = function (context$3, temp$6$0, form$4, temp$7$0) {
    var t0$10 = undefined;var t1$5 = undefined;var a$0 = undefined;var b$0 = undefined;t0$10 = temp$7$0;if (Array.isArray(t0$10) && (t1$5 = t0$10.length, t1$5 === 3 && t0$10[0] === "data")) {
      a$0 = t0$10[1];b$0 = t0$10[2];
    } else {
      ___match_error(temp$7$0);
    }return ["send", ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "floor"]]]], ["data", ["send", ["symbol", "/"], ["data", a$0, b$0]]]];
  };t0$11 = getProjector(mac$0("//"))($targ$5);if (t0$11[0]) {
    floor_mac$0 = t0$11[1];
  } else {
    ___match_error($targ$5);
  }$targ$6 = function (context$4, temp$8$0, form$5, expr$1) {
    var x$8 = undefined;var x$9 = undefined;var t0$13 = undefined;var other$2 = undefined;var val$0 = undefined;var $$14352$0 = undefined;var $$14353$0 = undefined;var $$14354$0 = undefined;var t0$12 = undefined;var t1$6 = undefined;var t2$3 = undefined;var bridge$$14349$0 = undefined;var t3$3 = undefined;var t4$1 = undefined;var m$1$0 = undefined;m$1$0 = [context$4, expr$1];if (($$14352$0 = Array.isArray(m$1$0)) && (t0$12 = m$1$0.length, ($$14354$0 = t0$12 === 2) && ((x$8 = m$1$0[0], x$8 instanceof Array && x$8[0] === "pattern") && (t1$6 = m$1$0[1], Array.isArray(t1$6) && (t2$3 = t1$6.length, t2$3 === 1 && t1$6[0] === "void"))))) {
      return ["dynsplice", ["ignore"]];
    } else {
      if ($$14354$0 && (bridge$$14349$0 = m$1$0[0], ((x$9 = bridge$$14349$0, x$9 instanceof Array && x$9[0] === "pattern") || Array.isArray(bridge$$14349$0) && (t0$13 = bridge$$14349$0.length, t0$13 === 2 && (bridge$$14349$0[0] === "expr" && bridge$$14349$0[1] === "data"))) && (t1$6 = m$1$0[1], Array.isArray(t1$6) && (t2$3 = t1$6.length, t2$3 === 3 && (t1$6[0] === "data" && (t3$3 = t1$6[1], Array.isArray(t3$3) && (t4$1 = t3$3.length, t4$1 === 1 && t3$3[0] === "void"))))))) {
        val$0 = t1$6[2];return ["dynsplice", val$0];
      } else {
        if ($$14354$0 && (m$1$0[0], t1$6 = m$1$0[1], Array.isArray(t1$6) && (t2$3 = t1$6.length, t2$3 === 1 && t1$6[0] === "void"))) {
          return ["variable", "*"];
        } else {
          other$2 = m$1$0;return ["send", ["variable", "*"], expr$1];
        }
      }
    }
  };t0$14 = getProjector(mac$0("*"))($targ$6);if (t0$14[0]) {
    times_mac$0 = t0$14[1];
  } else {
    ___match_error($targ$6);
  }$targ$7 = function (context$5, temp$9$0, form$6, expr$2) {
    var x$10 = undefined;var x$11 = undefined;var t0$16 = undefined;var a$1 = undefined;var b$1 = undefined;var val$1 = undefined;var $$14459$0 = undefined;var $$14460$0 = undefined;var $$14461$0 = undefined;var $$14462$0 = undefined;var $$14463$0 = undefined;var $$14464$0 = undefined;var $$14465$0 = undefined;var t0$15 = undefined;var t1$7 = undefined;var t2$4 = undefined;var bridge$$14456$0 = undefined;var t3$4 = undefined;var t4$2 = undefined;var m$2$0 = undefined;m$2$0 = [context$5, expr$2];if (($$14459$0 = Array.isArray(m$2$0)) && (t0$15 = m$2$0.length, ($$14461$0 = t0$15 === 2) && ((x$10 = m$2$0[0], x$10 instanceof Array && x$10[0] === "pattern") && (t1$7 = m$2$0[1], Array.isArray(t1$7) && (t2$4 = t1$7.length, t2$4 === 1 && t1$7[0] === "void"))))) {
      return ["objsplice", ["ignore"]];
    } else {
      if ($$14461$0 && (bridge$$14456$0 = m$2$0[0], ((x$11 = bridge$$14456$0, x$11 instanceof Array && x$11[0] === "pattern") || Array.isArray(bridge$$14456$0) && (t0$16 = bridge$$14456$0.length, t0$16 === 2 && (bridge$$14456$0[0] === "expr" && bridge$$14456$0[1] === "data"))) && (t1$7 = m$2$0[1], Array.isArray(t1$7) && (t2$4 = t1$7.length, t2$4 === 3 && (t1$7[0] === "data" && (t3$4 = t1$7[1], Array.isArray(t3$4) && (t4$2 = t3$4.length, t4$2 === 1 && t3$4[0] === "void"))))))) {
        val$1 = t1$7[2];return ["objsplice", val$1];
      } else {
        if ($$14461$0 && (m$2$0[0], t1$7 = m$2$0[1], ($$14464$0 = Array.isArray(t1$7)) && (t2$4 = t1$7.length, t2$4 === 1 && t1$7[0] === "void"))) {
          return ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]];
        } else {
          if ($$14464$0 && (t2$4 === 3 && t1$7[0] === "data")) {
            a$1 = t1$7[1];b$1 = t1$7[2];return ["send", ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]], ["data", a$1, b$1]];
          } else {
            return ___match_error(m$2$0);
          }
        }
      }
    }
  };t0$17 = getProjector(mac$0("**"))($targ$7);if (t0$17[0]) {
    exp_mac$0 = t0$17[1];
  } else {
    ___match_error($targ$7);
  }return exports$0;
};module.exports = $targ$0;[];
//# sourceMappingURL=operators.js.map

