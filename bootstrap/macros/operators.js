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
  var t0$3;
  var t0$5;
  var t0$7;
  var t0$9;
  var t0$12;
  var t0$15;
  var $targ$5;
  var minus_mac$0;
  var $targ$6;
  var append_mac$0;
  var $targ$7;
  var range_mac$0;
  var $targ$8;
  var floor_mac$0;
  var $targ$9;
  var times_mac$0;
  var $targ$10;
  var exp_mac$0;
  var exports$0;
  exports$0 = ({});
  m$0 = null;
  $1: for (var $__0 = items(({
    "===": partial_pattern$0("==="),
    "!==": partial_pattern$0("!=="),
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
  $targ$5 = (function(context$0, temp$0$0, form$0, temp$1$0) {
    var t0$1;
    var t5$0;
    var t4$0;
    var t3$0;
    var t2$0;
    var t1$1;
    var t0$2;
    var other$0;
    var n$0;
    var $$13281$0;
    var $$13282$0;
    var m$1$0;
    var ph$0;
    var expr$0;
    temp$0$0;
    t0$1 = temp$1$0;
    expr$0 = t0$1;
    ph$0 = t0$1;
    m$1$0 = ph$0;
    if ((($$13281$0 = (m$1$0 instanceof Array)) && ((t0$2 = m$1$0.length), ((t0$2 === 3) && ((m$1$0[0] === "data") && ((t1$1 = m$1$0[1]), ((t1$1 instanceof Array) && ((t2$0 = t1$1.length), ((t2$0 === 1) && ((t1$1[0] === "void") && ((t3$0 = m$1$0[2]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 2) && ((t3$0[0] === "value") && ((t5$0 = t3$0[1]), (typeof(t5$0) === "number"))))))))))))))))) {
      n$0 = t5$0;
      return ["value", (-n$0)];
    } else {
      if (($$13281$0 && ((t0$2 === 1) && (m$1$0[0] === "void")))) {
        return ["variable", "-"];
      } else {
        other$0 = m$1$0;
        return ["send", ["variable", "-"], expr$0];
      }
    }
  });
  t0$3 = getProjector(mac$0("-"))($targ$5);
  if (t0$3[0]) {
    minus_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$5);
  }
  $targ$6 = (function(context$1, temp$2$0, form$1, temp$3$0) {
    var $targ$25;
    var $targ$24;
    var t0$4;
    var $targ$27;
    var $targ$26;
    var other$1;
    var x$2;
    var y$0;
    var x$1;
    var x$0;
    var $$13356$0;
    var $$13357$0;
    var $$13358$0;
    var $$13359$0;
    var t1$2;
    var t2$1;
    var m$2$0;
    var ph$1;
    temp$2$0;
    ph$1 = temp$3$0;
    m$2$0 = ph$1;
    if ((($$13356$0 = (m$2$0 instanceof Array)) && ((t0$4 = m$2$0.length), (($$13358$0 = (t0$4 === 3)) && (($$13359$0 = (m$2$0[0] === "data")) && (($targ$24 = m$2$0[1]), (t1$2 = $targ$24), ((t1$2 instanceof Array) && (($targ$25 = t1$2.length), (t2$1 = $targ$25), ((t2$1 === 1) && (t1$2[0] === "void")))))))))) {
      x$0 = m$2$0[2];
      return ["send", ["variable", "++"], ["data", ["void"], x$0]];
    } else {
      if (($$13359$0 && ((x$1 = m$2$0[1]), ($targ$26 = m$2$0[2]), (t1$2 = $targ$26), ((t1$2 instanceof Array) && (($targ$27 = t1$2.length), (t2$1 = $targ$27), ((t2$1 === 1) && (t1$2[0] === "void"))))))) {
        return ["send", ["variable", "++"], ["data", x$1, ["void"]]];
      } else {
        if ($$13359$0) {
          x$2 = m$2$0[1];
          y$0 = m$2$0[2];
          return ["send", ["send", x$2, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", y$0]];
        } else {
          if (($$13356$0 && ((t0$4 === 1) && (m$2$0[0] === "void")))) {
            return ["send", ["symbol", "->"], ["data", ["data", ["symbol", "x"], ["symbol", "y"]], ["send", ["send", ["symbol", "x"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["symbol", "y"]]]]];
          } else {
            other$1 = m$2$0;
            return ["send", ["symbol", "___build_array"], ["data", other$1]];
          }
        }
      }
    }
  });
  t0$5 = getProjector(mac$0("++"))($targ$6);
  if (t0$5[0]) {
    append_mac$0 = t0$5[1];
  } else {
    ___match_error($targ$6);
  }
  $targ$7 = (function(context$2, temp$4$0, form$2, temp$5$0) {
    var $targ$32;
    var $targ$31;
    var t0$6;
    var $targ$34;
    var $targ$33;
    var x$5;
    var y$1;
    var x$4;
    var x$3;
    var $$13430$0;
    var $$13431$0;
    var $$13432$0;
    var $$13433$0;
    var t1$3;
    var t2$2;
    var m$3$0;
    var ph$2;
    temp$4$0;
    ph$2 = temp$5$0;
    m$3$0 = ph$2;
    if ((($$13430$0 = (m$3$0 instanceof Array)) && ((t0$6 = m$3$0.length), (($$13432$0 = (t0$6 === 3)) && (($$13433$0 = (m$3$0[0] === "data")) && (($targ$31 = m$3$0[1]), (t1$3 = $targ$31), ((t1$3 instanceof Array) && (($targ$32 = t1$3.length), (t2$2 = $targ$32), ((t2$2 === 1) && (t1$3[0] === "void")))))))))) {
      x$3 = m$3$0[2];
      return ["send", ["symbol", "range"], ["data", ["value", 1], x$3]];
    } else {
      if (($$13433$0 && ((x$4 = m$3$0[1]), ($targ$33 = m$3$0[2]), (t1$3 = $targ$33), ((t1$3 instanceof Array) && (($targ$34 = t1$3.length), (t2$2 = $targ$34), ((t2$2 === 1) && (t1$3[0] === "void"))))))) {
        return ["send", ["symbol", "range"], ["data", x$4]];
      } else {
        if ($$13433$0) {
          x$5 = m$3$0[1];
          y$1 = m$3$0[2];
          return ["send", ["symbol", "range"], ["data", x$5, y$1]];
        } else {
          if (($$13430$0 && ((t0$6 === 1) && (m$3$0[0] === "void")))) {
            return ["symbol", "range"];
          } else {
            return ___match_error(m$3$0);
          }
        }
      }
    }
  });
  t0$7 = getProjector(mac$0(".."))($targ$7);
  if (t0$7[0]) {
    range_mac$0 = t0$7[1];
  } else {
    ___match_error($targ$7);
  }
  $targ$8 = (function(context$3, temp$6$0, form$3, temp$7$0) {
    var t1$4;
    var t0$8;
    var a$0;
    var b$0;
    temp$6$0;
    t0$8 = temp$7$0;
    if (((t0$8 instanceof Array) && ((t1$4 = t0$8.length), ((t1$4 === 3) && (t0$8[0] === "data"))))) {
      a$0 = t0$8[1];
      b$0 = t0$8[2];
    } else {
      ___match_error(temp$7$0);
    }
    return ["send", ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "floor"]]]], ["data", ["send", ["symbol", "/"], ["data", a$0, b$0]]]];
  });
  t0$9 = getProjector(mac$0("//"))($targ$8);
  if (t0$9[0]) {
    floor_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$8);
  }
  $targ$9 = (function(context$4, temp$8$0, form$4, expr$1) {
    var x$6;
    var $targ$43;
    var $targ$42;
    var t0$10;
    var x$7;
    var t0$11;
    var t4$1;
    var t3$1;
    var $targ$48;
    var $targ$47;
    var bridge$$13530$0;
    var $targ$52;
    var $targ$51;
    var other$2;
    var val$0;
    var $$13533$0;
    var $$13534$0;
    var $$13535$0;
    var t1$5;
    var t2$3;
    var m$4$0;
    temp$8$0;
    m$4$0 = [context$4, expr$1];
    if ((($$13533$0 = (m$4$0 instanceof Array)) && ((t0$10 = m$4$0.length), (($$13535$0 = (t0$10 === 2)) && (((x$6 = m$4$0[0]), ((x$6 instanceof Array) && (x$6[0] === "pattern"))) && (($targ$42 = m$4$0[1]), (t1$5 = $targ$42), ((t1$5 instanceof Array) && (($targ$43 = t1$5.length), (t2$3 = $targ$43), ((t2$3 === 1) && (t1$5[0] === "void")))))))))) {
      return ["dynsplice", ["ignore"]];
    } else {
      if (($$13535$0 && ((bridge$$13530$0 = m$4$0[0]), ((((x$7 = bridge$$13530$0), ((x$7 instanceof Array) && (x$7[0] === "pattern"))) || ((bridge$$13530$0 instanceof Array) && ((t0$11 = bridge$$13530$0.length), ((t0$11 === 2) && ((bridge$$13530$0[0] === "expr") && (bridge$$13530$0[1] === "data")))))) && (($targ$47 = m$4$0[1]), (t1$5 = $targ$47), ((t1$5 instanceof Array) && (($targ$48 = t1$5.length), (t2$3 = $targ$48), ((t2$3 === 3) && ((t1$5[0] === "data") && ((t3$1 = t1$5[1]), ((t3$1 instanceof Array) && ((t4$1 = t3$1.length), ((t4$1 === 1) && (t3$1[0] === "void")))))))))))))) {
        val$0 = t1$5[2];
        return ["dynsplice", val$0];
      } else {
        if (($$13535$0 && (m$4$0[0], ($targ$51 = m$4$0[1]), (t1$5 = $targ$51), ((t1$5 instanceof Array) && (($targ$52 = t1$5.length), (t2$3 = $targ$52), ((t2$3 === 1) && (t1$5[0] === "void"))))))) {
          return ["variable", "*"];
        } else {
          other$2 = m$4$0;
          return ["send", ["variable", "*"], expr$1];
        }
      }
    }
  });
  t0$12 = getProjector(mac$0("*"))($targ$9);
  if (t0$12[0]) {
    times_mac$0 = t0$12[1];
  } else {
    ___match_error($targ$9);
  }
  $targ$10 = (function(context$5, temp$9$0, form$5, expr$2) {
    var x$8;
    var $targ$58;
    var $targ$57;
    var t0$13;
    var x$9;
    var t0$14;
    var t4$2;
    var t3$2;
    var $targ$63;
    var $targ$62;
    var bridge$$13638$0;
    var $targ$67;
    var $targ$66;
    var a$1;
    var b$1;
    var val$1;
    var $$13641$0;
    var $$13642$0;
    var $$13643$0;
    var $$13644$0;
    var $$13645$0;
    var $$13646$0;
    var $$13647$0;
    var t1$6;
    var t2$4;
    var m$5$0;
    temp$9$0;
    m$5$0 = [context$5, expr$2];
    if ((($$13641$0 = (m$5$0 instanceof Array)) && ((t0$13 = m$5$0.length), (($$13643$0 = (t0$13 === 2)) && (((x$8 = m$5$0[0]), ((x$8 instanceof Array) && (x$8[0] === "pattern"))) && (($targ$57 = m$5$0[1]), (t1$6 = $targ$57), ((t1$6 instanceof Array) && (($targ$58 = t1$6.length), (t2$4 = $targ$58), ((t2$4 === 1) && (t1$6[0] === "void")))))))))) {
      return ["objsplice", ["ignore"]];
    } else {
      if (($$13643$0 && ((bridge$$13638$0 = m$5$0[0]), ((((x$9 = bridge$$13638$0), ((x$9 instanceof Array) && (x$9[0] === "pattern"))) || ((bridge$$13638$0 instanceof Array) && ((t0$14 = bridge$$13638$0.length), ((t0$14 === 2) && ((bridge$$13638$0[0] === "expr") && (bridge$$13638$0[1] === "data")))))) && (($targ$62 = m$5$0[1]), (t1$6 = $targ$62), ((t1$6 instanceof Array) && (($targ$63 = t1$6.length), (t2$4 = $targ$63), ((t2$4 === 3) && ((t1$6[0] === "data") && ((t3$2 = t1$6[1]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 1) && (t3$2[0] === "void")))))))))))))) {
        val$1 = t1$6[2];
        return ["objsplice", val$1];
      } else {
        if (($$13643$0 && (m$5$0[0], ($targ$66 = m$5$0[1]), (t1$6 = $targ$66), (($$13646$0 = (t1$6 instanceof Array)) && (($targ$67 = t1$6.length), (t2$4 = $targ$67), ((t2$4 === 1) && (t1$6[0] === "void"))))))) {
          return ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]];
        } else {
          if (($$13646$0 && ((t2$4 === 3) && (t1$6[0] === "data")))) {
            a$1 = t1$6[1];
            b$1 = t1$6[2];
            return ["send", ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]], ["data", a$1, b$1]];
          } else {
            return ___match_error(m$5$0);
          }
        }
      }
    }
  });
  t0$15 = getProjector(mac$0("**"))($targ$10);
  if (t0$15[0]) {
    exp_mac$0 = t0$15[1];
  } else {
    ___match_error($targ$10);
  }
  return exports$0;
});
(module["exports"] = $targ$3);
//# sourceURL=<compile-source>
