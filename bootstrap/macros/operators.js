"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$0;
var $0$0;
var partial_pattern$0;
var make_assigner$0;
$0$0 = require("./helpers");
partial_pattern$0 = $0$0.partial_pattern;
make_assigner$0 = $0$0.make_assigner;
$targ$0 = (function(mac$0) {
  var m$0;
  var t0$2;
  var t0$5;
  var t0$7;
  var t0$9;
  var t0$11;
  var t0$14;
  var t0$17;
  var $targ$1;
  var is_mac$0;
  var $targ$2;
  var minus_mac$0;
  var $targ$3;
  var append_mac$0;
  var $targ$4;
  var range_mac$0;
  var $targ$5;
  var floor_mac$0;
  var $targ$6;
  var times_mac$0;
  var $targ$7;
  var exp_mac$0;
  var exports$0;
  exports$0 = ({});
  m$0 = null;
  $1: for (var $__0 = items(({
    "===": partial_pattern$0("==="),
    "!==": partial_pattern$0("!=="),
    "in": partial_pattern$0("__in__"),
    "==": partial_pattern$0("equal"),
    "!=": partial_pattern$0("nequal"),
    "<=": partial_pattern$0("<="),
    ">=": partial_pattern$0(">="),
    "<": partial_pattern$0("<"),
    ">": partial_pattern$0(">"),
    "+=": make_assigner$0("+"),
    "-=": make_assigner$0("-"),
    "*=": make_assigner$0("*"),
    "/=": make_assigner$0("/"),
    "<<=": make_assigner$0("<<"),
    ">>=": make_assigner$0(">>"),
    ">>>=": make_assigner$0(">>>"),
    "++=": make_assigner$0("++"),
    "?=": make_assigner$0("match"),
    "or=": make_assigner$0("or"),
    "and=": make_assigner$0("and"),
    "each=": make_assigner$0("each")
  }))[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$0 = $__1.value;
    {
      var k$0;
      var v$0;
      var t0$0;
      var t1$0;
      t0$0 = m$0;
      if (((t0$0 instanceof Array) && ((t1$0 = t0$0.length), (t1$0 === 2)))) {
        k$0 = t0$0[0];
        v$0 = t0$0[1];
        mac$0(k$0)(v$0);
      } else {
        ___match_error(m$0, "/home/olivier/git/earl-grey/src/macros/operators.eg", 84, 123);
      }
    }
  }
  $targ$1 = (function(ph$0$0, temp$0$0, form$0, temp$1$0) {
    var t0$1;
    var t1$1;
    var x$1;
    var x$0;
    var y$0;
    t0$1 = temp$1$0;
    if (((t0$1 instanceof Array) && ((t1$1 = t0$1.length), ((t1$1 === 3) && (t0$1[0] === "data"))))) {
      x$0 = t0$1[1];
      y$0 = t0$1[2];
    } else {
      ___match_error(temp$1$0);
    }
    if (((x$1 = ph$0$0), ((x$1 instanceof Array) && (x$1[0] === "pattern")))) {
      return ["replace", x$0, y$0];
    } else {
      return ["send", ["symbol", "=="], ["data", x$0, y$0]];
    }
  });
  t0$2 = getProjector(mac$0("is"))($targ$1);
  if (t0$2[0]) {
    is_mac$0 = t0$2[1];
  } else {
    ___match_error($targ$1);
  }
  $targ$2 = (function(context$0, temp$2$0, form$1, temp$3$0) {
    var t0$3;
    var other$0;
    var n$0;
    var $$14425$0;
    var $$14426$0;
    var t0$4;
    var t1$2;
    var t2$0;
    var t3$0;
    var t4$0;
    var t5$0;
    var t6$0;
    var expr$0;
    var ph$1$0;
    t0$3 = temp$3$0;
    expr$0 = t0$3;
    ph$1$0 = t0$3;
    t0$4 = ph$1$0;
    t1$2 = t0$4.length;
    if (((t1$2 === 3) && ((t0$4[0] === "data") && ((t2$0 = t0$4[1]), ((t2$0 instanceof Array) && ((t3$0 = t2$0.length), ((t3$0 === 1) && ((t2$0[0] === "void") && ((t4$0 = t0$4[2]), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 2) && ((t4$0[0] === "value") && ((t6$0 = t4$0[1]), (typeof(t6$0) === "number"))))))))))))))) {
      n$0 = t6$0;
      return ["value", (-n$0)];
    } else {
      if (((t1$2 === 1) && (t0$4[0] === "void"))) {
        return ["variable", "-"];
      } else {
        other$0 = ph$1$0;
        return ["send", ["variable", "-"], expr$0];
      }
    }
  });
  t0$5 = getProjector(mac$0("-"))($targ$2);
  if (t0$5[0]) {
    minus_mac$0 = t0$5[1];
  } else {
    ___match_error($targ$2);
  }
  $targ$3 = (function(context$1, temp$4$0, form$2, ph$2$0) {
    var other$1;
    var x$4;
    var y$1;
    var x$3;
    var x$2;
    var $$14496$0;
    var $$14497$0;
    var $$14498$0;
    var $$14499$0;
    var t0$6;
    var t1$3;
    var t2$1;
    var t3$1;
    t0$6 = ph$2$0;
    t1$3 = t0$6.length;
    if ((($$14498$0 = (t1$3 === 3)) && (($$14499$0 = (t0$6[0] === "data")) && ((t2$1 = t0$6[1]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 1) && (t2$1[0] === "void")))))))) {
      x$2 = t0$6[2];
      return ["send", ["variable", "++"], ["data", ["void"], x$2]];
    } else {
      if (($$14499$0 && ((x$3 = t0$6[1]), (t2$1 = t0$6[2]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 1) && (t2$1[0] === "void"))))))) {
        return ["send", ["variable", "++"], ["data", x$3, ["void"]]];
      } else {
        if ($$14499$0) {
          x$4 = t0$6[1];
          y$1 = t0$6[2];
          return ["send", ["send", x$4, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", y$1]];
        } else {
          if (((t1$3 === 1) && (t0$6[0] === "void"))) {
            return ["send", ["symbol", "->"], ["data", ["data", ["symbol", "x"], ["symbol", "y"]], ["send", ["send", ["symbol", "x"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["symbol", "y"]]]]];
          } else {
            other$1 = ph$2$0;
            return ["send", ["symbol", "___build_array"], ["data", other$1]];
          }
        }
      }
    }
  });
  t0$7 = getProjector(mac$0("++"))($targ$3);
  if (t0$7[0]) {
    append_mac$0 = t0$7[1];
  } else {
    ___match_error($targ$3);
  }
  $targ$4 = (function(context$2, temp$5$0, form$3, ph$3$0) {
    var x$7;
    var y$2;
    var x$6;
    var x$5;
    var $$14563$0;
    var $$14564$0;
    var $$14565$0;
    var $$14566$0;
    var t0$8;
    var t1$4;
    var t2$2;
    var t3$2;
    t0$8 = ph$3$0;
    t1$4 = t0$8.length;
    if ((($$14565$0 = (t1$4 === 3)) && (($$14566$0 = (t0$8[0] === "data")) && ((t2$2 = t0$8[1]), ((t2$2 instanceof Array) && ((t3$2 = t2$2.length), ((t3$2 === 1) && (t2$2[0] === "void")))))))) {
      x$5 = t0$8[2];
      return ["send", ["symbol", "range"], ["data", ["value", 1], x$5]];
    } else {
      if (($$14566$0 && ((x$6 = t0$8[1]), (t2$2 = t0$8[2]), ((t2$2 instanceof Array) && ((t3$2 = t2$2.length), ((t3$2 === 1) && (t2$2[0] === "void"))))))) {
        return ["send", ["symbol", "range"], ["data", x$6]];
      } else {
        if ($$14566$0) {
          x$7 = t0$8[1];
          y$2 = t0$8[2];
          return ["send", ["symbol", "range"], ["data", x$7, y$2]];
        } else {
          if (((t1$4 === 1) && (t0$8[0] === "void"))) {
            return ["symbol", "range"];
          } else {
            return ___match_error(ph$3$0);
          }
        }
      }
    }
  });
  t0$9 = getProjector(mac$0(".."))($targ$4);
  if (t0$9[0]) {
    range_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$4);
  }
  $targ$5 = (function(context$3, temp$6$0, form$4, temp$7$0) {
    var t0$10;
    var t1$5;
    var a$0;
    var b$0;
    t0$10 = temp$7$0;
    if (((t0$10 instanceof Array) && ((t1$5 = t0$10.length), ((t1$5 === 3) && (t0$10[0] === "data"))))) {
      a$0 = t0$10[1];
      b$0 = t0$10[2];
    } else {
      ___match_error(temp$7$0);
    }
    return ["send", ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "floor"]]]], ["data", ["send", ["symbol", "/"], ["data", a$0, b$0]]]];
  });
  t0$11 = getProjector(mac$0("//"))($targ$5);
  if (t0$11[0]) {
    floor_mac$0 = t0$11[1];
  } else {
    ___match_error($targ$5);
  }
  $targ$6 = (function(context$4, temp$8$0, form$5, expr$1) {
    var x$8;
    var x$9;
    var t0$13;
    var other$2;
    var val$0;
    var $$14660$0;
    var $$14661$0;
    var $$14662$0;
    var t0$12;
    var t1$6;
    var t2$3;
    var bridge$$14657$0;
    var t3$3;
    var t4$1;
    var m$1$0;
    m$1$0 = [context$4, expr$1];
    if ((($$14660$0 = (m$1$0 instanceof Array)) && ((t0$12 = m$1$0.length), (($$14662$0 = (t0$12 === 2)) && (((x$8 = m$1$0[0]), ((x$8 instanceof Array) && (x$8[0] === "pattern"))) && ((t1$6 = m$1$0[1]), ((t1$6 instanceof Array) && ((t2$3 = t1$6.length), ((t2$3 === 1) && (t1$6[0] === "void")))))))))) {
      return ["dynsplice", ["ignore"]];
    } else {
      if (($$14662$0 && ((bridge$$14657$0 = m$1$0[0]), ((((x$9 = bridge$$14657$0), ((x$9 instanceof Array) && (x$9[0] === "pattern"))) || ((bridge$$14657$0 instanceof Array) && ((t0$13 = bridge$$14657$0.length), ((t0$13 === 2) && ((bridge$$14657$0[0] === "expr") && (bridge$$14657$0[1] === "data")))))) && ((t1$6 = m$1$0[1]), ((t1$6 instanceof Array) && ((t2$3 = t1$6.length), ((t2$3 === 3) && ((t1$6[0] === "data") && ((t3$3 = t1$6[1]), ((t3$3 instanceof Array) && ((t4$1 = t3$3.length), ((t4$1 === 1) && (t3$3[0] === "void")))))))))))))) {
        val$0 = t1$6[2];
        return ["dynsplice", val$0];
      } else {
        if (($$14662$0 && (m$1$0[0], (t1$6 = m$1$0[1]), ((t1$6 instanceof Array) && ((t2$3 = t1$6.length), ((t2$3 === 1) && (t1$6[0] === "void"))))))) {
          return ["variable", "*"];
        } else {
          other$2 = m$1$0;
          return ["send", ["variable", "*"], expr$1];
        }
      }
    }
  });
  t0$14 = getProjector(mac$0("*"))($targ$6);
  if (t0$14[0]) {
    times_mac$0 = t0$14[1];
  } else {
    ___match_error($targ$6);
  }
  $targ$7 = (function(context$5, temp$9$0, form$6, expr$2) {
    var x$10;
    var x$11;
    var t0$16;
    var a$1;
    var b$1;
    var val$1;
    var $$14767$0;
    var $$14768$0;
    var $$14769$0;
    var $$14770$0;
    var $$14771$0;
    var $$14772$0;
    var $$14773$0;
    var t0$15;
    var t1$7;
    var t2$4;
    var bridge$$14764$0;
    var t3$4;
    var t4$2;
    var m$2$0;
    m$2$0 = [context$5, expr$2];
    if ((($$14767$0 = (m$2$0 instanceof Array)) && ((t0$15 = m$2$0.length), (($$14769$0 = (t0$15 === 2)) && (((x$10 = m$2$0[0]), ((x$10 instanceof Array) && (x$10[0] === "pattern"))) && ((t1$7 = m$2$0[1]), ((t1$7 instanceof Array) && ((t2$4 = t1$7.length), ((t2$4 === 1) && (t1$7[0] === "void")))))))))) {
      return ["objsplice", ["ignore"]];
    } else {
      if (($$14769$0 && ((bridge$$14764$0 = m$2$0[0]), ((((x$11 = bridge$$14764$0), ((x$11 instanceof Array) && (x$11[0] === "pattern"))) || ((bridge$$14764$0 instanceof Array) && ((t0$16 = bridge$$14764$0.length), ((t0$16 === 2) && ((bridge$$14764$0[0] === "expr") && (bridge$$14764$0[1] === "data")))))) && ((t1$7 = m$2$0[1]), ((t1$7 instanceof Array) && ((t2$4 = t1$7.length), ((t2$4 === 3) && ((t1$7[0] === "data") && ((t3$4 = t1$7[1]), ((t3$4 instanceof Array) && ((t4$2 = t3$4.length), ((t4$2 === 1) && (t3$4[0] === "void")))))))))))))) {
        val$1 = t1$7[2];
        return ["objsplice", val$1];
      } else {
        if (($$14769$0 && (m$2$0[0], (t1$7 = m$2$0[1]), (($$14772$0 = (t1$7 instanceof Array)) && ((t2$4 = t1$7.length), ((t2$4 === 1) && (t1$7[0] === "void"))))))) {
          return ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]];
        } else {
          if (($$14772$0 && ((t2$4 === 3) && (t1$7[0] === "data")))) {
            a$1 = t1$7[1];
            b$1 = t1$7[2];
            return ["send", ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]], ["data", a$1, b$1]];
          } else {
            return ___match_error(m$2$0);
          }
        }
      }
    }
  });
  t0$17 = getProjector(mac$0("**"))($targ$7);
  if (t0$17[0]) {
    exp_mac$0 = t0$17[1];
  } else {
    ___match_error($targ$7);
  }
  return exports$0;
});
(module["exports"] = $targ$0);
[];
//# sourceURL=<compile-source>
