"use strict";
require("earlgrey-runtime");
var $targ$3;
var $0$0;
var partial_pattern$0;
var make_assigner$0;
$0$0 = require("./helpers");
partial_pattern$0 = $0$0.partial_pattern;
make_assigner$0 = $0$0.make_assigner;
$targ$3 = (function(mac$0) {
  var m$0;
  var t0$2;
  var t0$5;
  var t0$7;
  var t0$9;
  var t0$11;
  var t0$14;
  var t0$17;
  var $targ$5;
  var is_mac$0;
  var $targ$6;
  var minus_mac$0;
  var $targ$7;
  var append_mac$0;
  var $targ$8;
  var range_mac$0;
  var $targ$9;
  var floor_mac$0;
  var $targ$10;
  var times_mac$0;
  var $targ$11;
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
      var t1$0;
      var t0$0;
      var k$0;
      var v$0;
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
  $targ$5 = (function(ph$0$0, temp$0$0, form$0, temp$1$0) {
    var t1$1;
    var t0$1;
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
  t0$2 = getProjector(mac$0("is"))($targ$5);
  if (t0$2[0]) {
    is_mac$0 = t0$2[1];
  } else {
    ___match_error($targ$5);
  }
  $targ$6 = (function(context$0, temp$2$0, form$1, temp$3$0) {
    var t0$3;
    var t6$0;
    var t5$0;
    var t4$0;
    var t3$0;
    var t2$0;
    var other$0;
    var t0$4;
    var t1$2;
    var n$0;
    var $$14290$0;
    var $$14291$0;
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
  t0$5 = getProjector(mac$0("-"))($targ$6);
  if (t0$5[0]) {
    minus_mac$0 = t0$5[1];
  } else {
    ___match_error($targ$6);
  }
  $targ$7 = (function(context$1, temp$4$0, form$2, ph$2$0) {
    var $targ$30;
    var $targ$29;
    var $targ$32;
    var $targ$31;
    var other$1;
    var x$4;
    var y$1;
    var x$3;
    var t0$6;
    var t1$3;
    var x$2;
    var $$14361$0;
    var $$14362$0;
    var $$14363$0;
    var $$14364$0;
    var t2$1;
    var t3$1;
    t0$6 = ph$2$0;
    t1$3 = t0$6.length;
    if ((($$14363$0 = (t1$3 === 3)) && (($$14364$0 = (t0$6[0] === "data")) && (($targ$29 = t0$6[1]), (t2$1 = $targ$29), ((t2$1 instanceof Array) && (($targ$30 = t2$1.length), (t3$1 = $targ$30), ((t3$1 === 1) && (t2$1[0] === "void")))))))) {
      x$2 = t0$6[2];
      return ["send", ["variable", "++"], ["data", ["void"], x$2]];
    } else {
      if (($$14364$0 && ((x$3 = t0$6[1]), ($targ$31 = t0$6[2]), (t2$1 = $targ$31), ((t2$1 instanceof Array) && (($targ$32 = t2$1.length), (t3$1 = $targ$32), ((t3$1 === 1) && (t2$1[0] === "void"))))))) {
        return ["send", ["variable", "++"], ["data", x$3, ["void"]]];
      } else {
        if ($$14364$0) {
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
  t0$7 = getProjector(mac$0("++"))($targ$7);
  if (t0$7[0]) {
    append_mac$0 = t0$7[1];
  } else {
    ___match_error($targ$7);
  }
  $targ$8 = (function(context$2, temp$5$0, form$3, ph$3$0) {
    var $targ$37;
    var $targ$36;
    var $targ$39;
    var $targ$38;
    var x$7;
    var y$2;
    var x$6;
    var t0$8;
    var t1$4;
    var x$5;
    var $$14428$0;
    var $$14429$0;
    var $$14430$0;
    var $$14431$0;
    var t2$2;
    var t3$2;
    t0$8 = ph$3$0;
    t1$4 = t0$8.length;
    if ((($$14430$0 = (t1$4 === 3)) && (($$14431$0 = (t0$8[0] === "data")) && (($targ$36 = t0$8[1]), (t2$2 = $targ$36), ((t2$2 instanceof Array) && (($targ$37 = t2$2.length), (t3$2 = $targ$37), ((t3$2 === 1) && (t2$2[0] === "void")))))))) {
      x$5 = t0$8[2];
      return ["send", ["symbol", "range"], ["data", ["value", 1], x$5]];
    } else {
      if (($$14431$0 && ((x$6 = t0$8[1]), ($targ$38 = t0$8[2]), (t2$2 = $targ$38), ((t2$2 instanceof Array) && (($targ$39 = t2$2.length), (t3$2 = $targ$39), ((t3$2 === 1) && (t2$2[0] === "void"))))))) {
        return ["send", ["symbol", "range"], ["data", x$6]];
      } else {
        if ($$14431$0) {
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
  t0$9 = getProjector(mac$0(".."))($targ$8);
  if (t0$9[0]) {
    range_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$8);
  }
  $targ$9 = (function(context$3, temp$6$0, form$4, temp$7$0) {
    var t1$5;
    var t0$10;
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
  t0$11 = getProjector(mac$0("//"))($targ$9);
  if (t0$11[0]) {
    floor_mac$0 = t0$11[1];
  } else {
    ___match_error($targ$9);
  }
  $targ$10 = (function(context$4, temp$8$0, form$5, expr$1) {
    var x$8;
    var $targ$48;
    var $targ$47;
    var t0$12;
    var x$9;
    var t0$13;
    var t4$1;
    var t3$3;
    var $targ$53;
    var $targ$52;
    var bridge$$14522$0;
    var $targ$57;
    var $targ$56;
    var other$2;
    var val$0;
    var $$14525$0;
    var $$14526$0;
    var $$14527$0;
    var t1$6;
    var t2$3;
    var m$1$0;
    m$1$0 = [context$4, expr$1];
    if ((($$14525$0 = (m$1$0 instanceof Array)) && ((t0$12 = m$1$0.length), (($$14527$0 = (t0$12 === 2)) && (((x$8 = m$1$0[0]), ((x$8 instanceof Array) && (x$8[0] === "pattern"))) && (($targ$47 = m$1$0[1]), (t1$6 = $targ$47), ((t1$6 instanceof Array) && (($targ$48 = t1$6.length), (t2$3 = $targ$48), ((t2$3 === 1) && (t1$6[0] === "void")))))))))) {
      return ["dynsplice", ["ignore"]];
    } else {
      if (($$14527$0 && ((bridge$$14522$0 = m$1$0[0]), ((((x$9 = bridge$$14522$0), ((x$9 instanceof Array) && (x$9[0] === "pattern"))) || ((bridge$$14522$0 instanceof Array) && ((t0$13 = bridge$$14522$0.length), ((t0$13 === 2) && ((bridge$$14522$0[0] === "expr") && (bridge$$14522$0[1] === "data")))))) && (($targ$52 = m$1$0[1]), (t1$6 = $targ$52), ((t1$6 instanceof Array) && (($targ$53 = t1$6.length), (t2$3 = $targ$53), ((t2$3 === 3) && ((t1$6[0] === "data") && ((t3$3 = t1$6[1]), ((t3$3 instanceof Array) && ((t4$1 = t3$3.length), ((t4$1 === 1) && (t3$3[0] === "void")))))))))))))) {
        val$0 = t1$6[2];
        return ["dynsplice", val$0];
      } else {
        if (($$14527$0 && (m$1$0[0], ($targ$56 = m$1$0[1]), (t1$6 = $targ$56), ((t1$6 instanceof Array) && (($targ$57 = t1$6.length), (t2$3 = $targ$57), ((t2$3 === 1) && (t1$6[0] === "void"))))))) {
          return ["variable", "*"];
        } else {
          other$2 = m$1$0;
          return ["send", ["variable", "*"], expr$1];
        }
      }
    }
  });
  t0$14 = getProjector(mac$0("*"))($targ$10);
  if (t0$14[0]) {
    times_mac$0 = t0$14[1];
  } else {
    ___match_error($targ$10);
  }
  $targ$11 = (function(context$5, temp$9$0, form$6, expr$2) {
    var x$10;
    var $targ$63;
    var $targ$62;
    var t0$15;
    var x$11;
    var t0$16;
    var t4$2;
    var t3$4;
    var $targ$68;
    var $targ$67;
    var bridge$$14629$0;
    var $targ$72;
    var $targ$71;
    var a$1;
    var b$1;
    var val$1;
    var $$14632$0;
    var $$14633$0;
    var $$14634$0;
    var $$14635$0;
    var $$14636$0;
    var $$14637$0;
    var $$14638$0;
    var t1$7;
    var t2$4;
    var m$2$0;
    m$2$0 = [context$5, expr$2];
    if ((($$14632$0 = (m$2$0 instanceof Array)) && ((t0$15 = m$2$0.length), (($$14634$0 = (t0$15 === 2)) && (((x$10 = m$2$0[0]), ((x$10 instanceof Array) && (x$10[0] === "pattern"))) && (($targ$62 = m$2$0[1]), (t1$7 = $targ$62), ((t1$7 instanceof Array) && (($targ$63 = t1$7.length), (t2$4 = $targ$63), ((t2$4 === 1) && (t1$7[0] === "void")))))))))) {
      return ["objsplice", ["ignore"]];
    } else {
      if (($$14634$0 && ((bridge$$14629$0 = m$2$0[0]), ((((x$11 = bridge$$14629$0), ((x$11 instanceof Array) && (x$11[0] === "pattern"))) || ((bridge$$14629$0 instanceof Array) && ((t0$16 = bridge$$14629$0.length), ((t0$16 === 2) && ((bridge$$14629$0[0] === "expr") && (bridge$$14629$0[1] === "data")))))) && (($targ$67 = m$2$0[1]), (t1$7 = $targ$67), ((t1$7 instanceof Array) && (($targ$68 = t1$7.length), (t2$4 = $targ$68), ((t2$4 === 3) && ((t1$7[0] === "data") && ((t3$4 = t1$7[1]), ((t3$4 instanceof Array) && ((t4$2 = t3$4.length), ((t4$2 === 1) && (t3$4[0] === "void")))))))))))))) {
        val$1 = t1$7[2];
        return ["objsplice", val$1];
      } else {
        if (($$14634$0 && (m$2$0[0], ($targ$71 = m$2$0[1]), (t1$7 = $targ$71), (($$14637$0 = (t1$7 instanceof Array)) && (($targ$72 = t1$7.length), (t2$4 = $targ$72), ((t2$4 === 1) && (t1$7[0] === "void"))))))) {
          return ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]];
        } else {
          if (($$14637$0 && ((t2$4 === 3) && (t1$7[0] === "data")))) {
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
  t0$17 = getProjector(mac$0("**"))($targ$11);
  if (t0$17[0]) {
    exp_mac$0 = t0$17[1];
  } else {
    ___match_error($targ$11);
  }
  return exports$0;
});
(module["exports"] = $targ$3);
[];
//# sourceURL=<compile-source>
