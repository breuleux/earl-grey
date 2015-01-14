"use strict";
require("earlgrey-runtime");
var $targ$9;
var $0$0;
var __lt____lt____colon__$0;
var $1$0;
var accum_flags$0;
var match_error$0;
var Body$0;
var $2$0;
var parse_clauses$0;
var util$0;
$0$0 = require("../location");
__lt____lt____colon__$0 = $0$0["<<:"];
$1$0 = require("./helpers");
accum_flags$0 = $1$0.accum_flags;
match_error$0 = $1$0.match_error;
Body$0 = $1$0.Body;
$2$0 = require("../pattern");
parse_clauses$0 = $2$0.parse_clauses;
util$0 = require("../util");
$targ$9 = (function(mac$0) {
  var t1$2;
  var t0$3;
  var t0$9;
  var t0$10;
  var t0$12;
  var t0$14;
  var t0$16;
  var t0$19;
  var t0$23;
  var t0$27;
  var $targ$11;
  var match_mac$0;
  var $targ$12;
  var if_mac$0;
  var $targ$13;
  var else_mac$0;
  var $targ$14;
  var not_mac$0;
  var $targ$15;
  var and_mac$0;
  var $targ$16;
  var or_mac$0;
  var $targ$17;
  var when_mac$0;
  var $targ$18;
  var check_mac$0;
  var $targ$19;
  var project_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$11 = (function(temp$0$0, info$0, form$0, expr$0, flags$0) {
    var x$0;
    var t0$0;
    var other$0;
    var m$1$0;
    var $targ$31;
    var $targ$30;
    var $targ$29;
    var t0$1;
    var $targ$34;
    var $targ$33;
    var $targ$32;
    var v$0;
    var b$1;
    var b$0;
    var $$9378$0;
    var $$9379$0;
    var t1$0;
    var t2$0;
    var t3$0;
    var m$2$0;
    var t1$1;
    var t0$2;
    var $targ$38;
    var accum$0;
    var mbody$0;
    var opt$0;
    var to_match$0;
    var $targ$26;
    var value$0;
    var body$0;
    var other$1;
    var m$0$0;
    var ph$0;
    ph$0 = temp$0$0;
    m$0$0 = ph$0;
    if (((x$0 = m$0$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {
      m$1$0 = expr$0;
      if (((m$1$0 instanceof Array) && ((t0$0 = m$1$0.length), ((t0$0 === 1) && (m$1$0[0] === "void"))))) {
        return ["special", "match"];
      } else {
        other$0 = m$1$0;
        return ["all", __lt____lt____colon__$0(other$0, expr$0), __lt____lt____colon__$0(["special", "match"], form$0)];
      }
    } else {
      other$1 = m$0$0;
      opt$0 = util$0.mkset(flags$0);
      to_match$0 = __amp__(["symbol", info$0.gensym("m")], ({"single_assignment": true}));
      $targ$26 = ((m$2$0 = expr$0), ((($$9378$0 = (m$2$0 instanceof Array)) && ((t0$1 = m$2$0.length), ((t0$1 === 2) && ((m$2$0[0] === "data") && (($targ$29 = getProjector(Body$0)(m$2$0[1])), (t1$0 = $targ$29), (t1$0[0] && (($targ$30 = t1$0[1]), (t2$0 = $targ$30), ($targ$31 = t2$0.length), (t3$0 = $targ$31), (t3$0 >= 0)))))))) ? ((b$0 = Array.prototype.slice.call(t2$0, 0)), [["value", null], b$0]) : (($$9378$0 && ((t0$1 === 3) && ((m$2$0[0] === "data") && ((v$0 = m$2$0[1]), ($targ$32 = getProjector(Body$0)(m$2$0[2])), (t1$0 = $targ$32), (t1$0[0] && (($targ$33 = t1$0[1]), (t2$0 = $targ$33), ($targ$34 = t2$0.length), (t3$0 = $targ$34), (t3$0 >= 0))))))) ? ((b$1 = Array.prototype.slice.call(t2$0, 0)), [v$0, b$1]) : ___match_error(m$2$0))));
      t0$2 = $targ$26;
      if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), (t1$1 === 2)))) {
        value$0 = t0$2[0];
        body$0 = t0$2[1];
      } else {
        ___match_error($targ$26);
      }
      mbody$0 = parse_clauses$0(info$0, to_match$0, body$0, __amp__(opt$0, __amp____colon__((($targ$38 = (function(target$0) {
        return match_error$0(target$0);
      })), (accum$0 = ({})), (accum$0["fallback"] = $targ$38), accum$0), ({"wrap": (function(x$1) {
          return x$1;
        })}))));
      return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", to_match$0, value$0]], mbody$0]];
    }
  });
  t0$3 = getProjector(accum_flags$0)($targ$11);
  if ((t0$3[0] && ((t1$2 = getProjector(mac$0("match"))(t0$3[1])), t1$2[0]))) {
    match_mac$0 = t1$2[1];
  } else {
    ___match_error($targ$11);
  }
  $targ$12 = (function(ctx$0, temp$1$0, form$1, temp$2$0) {
    var t0$4;
    var t3$1;
    var t2$1;
    var t1$3;
    var $targ$53;
    var $targ$52;
    var $targ$51;
    var $targ$50;
    var $targ$49;
    var $targ$48;
    var t1$4;
    var t13$0;
    var t12$0;
    var t11$0;
    var t10$0;
    var t9$0;
    var t8$0;
    var $targ$59;
    var $targ$58;
    var $targ$57;
    var $targ$56;
    var $targ$55;
    var $targ$54;
    var t0$7;
    var m$4$0;
    var piece_together$0;
    var conditions$0;
    var body$1;
    var a$2;
    var b$3;
    var t0$5;
    var a$1;
    var $$9482$0;
    var $$9483$0;
    var $$9484$0;
    var t2$2;
    var t3$2;
    var t4$0;
    var t5$0;
    var t6$0;
    var t7$0;
    var test$1;
    var ph$1$0;
    var test$0;
    var a$0;
    var b$2;
    var $$9485$0;
    var $$9486$0;
    var m$3$0;
    var ph$2;
    temp$1$0;
    ph$2 = temp$2$0;
    m$3$0 = ph$2;
    if ((($$9485$0 = (m$3$0 instanceof Array)) && ((t0$4 = m$3$0.length), ((t0$4 === 4) && (m$3$0[0] === "data"))))) {
      test$0 = m$3$0[1];
      a$0 = m$3$0[2];
      b$2 = m$3$0[3];
      return ["if", test$0, a$0, b$2];
    } else {
      if (($$9485$0 && ((t0$4 === 3) && ((m$3$0[0] === "data") && ((test$1 = m$3$0[1]), (t1$3 = getProjector(["multi"])(m$3$0[2])), (t1$3[0] && ((t2$1 = t1$3[1]), (t3$1 = t2$1.length), ((t3$1 >= 1) && (t2$1[0] === "multi"))))))))) {
        ph$1$0 = Array.prototype.slice.call(t2$1, 1);
        t0$5 = ph$1$0;
        if ((($$9483$0 = (t0$5 instanceof Array)) && ((t1$4 = t0$5.length), ((t1$4 === 1) && (($targ$48 = t0$5[0]), (t2$2 = $targ$48), ((t2$2 instanceof Array) && (($targ$49 = t2$2.length), (t3$2 = $targ$49), ((t3$2 === 3) && ((t2$2[0] === "send") && (($targ$50 = t2$2[1]), (t4$0 = $targ$50), ((t4$0 instanceof Array) && (($targ$51 = t4$0.length), (t5$0 = $targ$51), ((t5$0 === 2) && ((t4$0[0] === "symbol") && ((t4$0[1] === "then") && (($targ$52 = t2$2[2]), (t6$0 = $targ$52), ((t6$0 instanceof Array) && (($targ$53 = t6$0.length), (t7$0 = $targ$53), ((t7$0 === 2) && (t6$0[0] === "data")))))))))))))))))))) {
          a$1 = t6$0[1];
          return ["if", test$1, a$1, ["value", undefined]];
        } else {
          if (($$9483$0 && ((t1$4 === 2) && (($targ$54 = t0$5[0]), (t2$2 = $targ$54), ((t2$2 instanceof Array) && (($targ$55 = t2$2.length), (t3$2 = $targ$55), ((t3$2 === 3) && ((t2$2[0] === "send") && (($targ$56 = t2$2[1]), (t4$0 = $targ$56), ((t4$0 instanceof Array) && (($targ$57 = t4$0.length), (t5$0 = $targ$57), ((t5$0 === 2) && ((t4$0[0] === "symbol") && ((t4$0[1] === "then") && (($targ$58 = t2$2[2]), (t6$0 = $targ$58), ((t6$0 instanceof Array) && (($targ$59 = t6$0.length), (t7$0 = $targ$59), ((t7$0 === 2) && ((t6$0[0] === "data") && ((a$2 = t6$0[1]), (t8$0 = t0$5[1]), ((t8$0 instanceof Array) && ((t9$0 = t8$0.length), ((t9$0 === 3) && ((t8$0[0] === "send") && ((t10$0 = t8$0[1]), ((t10$0 instanceof Array) && ((t11$0 = t10$0.length), ((t11$0 === 2) && ((t10$0[0] === "symbol") && ((t10$0[1] === "else") && ((t12$0 = t8$0[2]), ((t12$0 instanceof Array) && ((t13$0 = t12$0.length), ((t13$0 === 2) && (t12$0[0] === "data"))))))))))))))))))))))))))))))))))) {
            b$3 = t12$0[1];
            return ["if", test$1, a$2, b$3];
          } else {
            body$1 = ph$1$0;
            piece_together$0 = (function(conditions$1) {
              var m$5;
              var $targ$68;
              var rval$0;
              $targ$68 = ["value", undefined];
              rval$0 = $targ$68;
              m$5 = null;
              $4: for (var $__0 = conditions$1.reverse()[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__1; !($__1 = $__0.next()).done; ) {
                m$5 = $__1.value;
                {
                  var t1$5;
                  var $targ$71;
                  var $targ$72;
                  var test$2;
                  var t0$6;
                  var bod$0;
                  var ph$3$0;
                  t0$6 = m$5;
                  if (((t0$6 instanceof Array) && ((t1$5 = t0$6.length), (t1$5 === 2)))) {
                    ph$3$0 = t0$6[0];
                    bod$0 = t0$6[1];
                    if ((ph$3$0 === null)) {
                      $targ$71 = bod$0;
                      rval$0 = $targ$71;
                    } else {
                      test$2 = ph$3$0;
                      $targ$72 = ["if", test$2, bod$0, rval$0];
                      rval$0 = $targ$72;
                    }
                  } else {
                    ___match_error(m$5, "/home/olivier/git/earl-grey/src/macros/logic.eg", 1380, 1556);
                  }
                }
              }
              return rval$0;
            });
            conditions$0 = [[test$1, ["multi"].concat(body$1)]];
            m$4$0 = ctx$0;
            if (((m$4$0 instanceof Array) && ((t0$7 = m$4$0.length), ((t0$7 === 2) && ((m$4$0[0] === "expr") && (m$4$0[1] === "multi")))))) {
              return ["restmacro", (function(stmts$0) {
                $5: while (stmts$0.length) {
                  var $targ$80;
                  var $targ$79;
                  var t2$3;
                  var t1$6;
                  var t0$8;
                  var $targ$82;
                  var $targ$81;
                  var x$2;
                  var body$3;
                  var cond$0;
                  var body$2;
                  var $$9719$0;
                  var $$9720$0;
                  var $$9721$0;
                  var $$9722$0;
                  var $$9723$0;
                  var $$9724$0;
                  var $$9725$0;
                  var $$9726$0;
                  var $$9727$0;
                  var t3$3;
                  var t4$1;
                  var m$6$0;
                  m$6$0 = stmts$0.shift();
                  if ((($$9719$0 = (m$6$0 instanceof Array)) && ((t0$8 = m$6$0.length), (($$9721$0 = (t0$8 === 3)) && (($$9722$0 = (m$6$0[0] === "send")) && ((t1$6 = m$6$0[1]), (($$9724$0 = (t1$6 instanceof Array)) && ((t2$3 = t1$6.length), (($$9726$0 = (t2$3 === 2)) && (($$9727$0 = (t1$6[0] === "symbol")) && ((t1$6[1] === "elif") && (($targ$79 = m$6$0[2]), (t3$3 = $targ$79), ((t3$3 instanceof Array) && (($targ$80 = t3$3.length), (t4$1 = $targ$80), ((t4$1 === 3) && (t3$3[0] === "data")))))))))))))))) {
                    cond$0 = t3$3[1];
                    body$2 = t3$3[2];
                    conditions$0.push([cond$0, body$2]);
                  } else {
                    if (($$9727$0 && ((t1$6[1] === "else") && (($targ$81 = m$6$0[2]), (t3$3 = $targ$81), ((t3$3 instanceof Array) && (($targ$82 = t3$3.length), (t4$1 = $targ$82), ((t4$1 === 2) && (t3$3[0] === "data")))))))) {
                      body$3 = t3$3[1];
                      conditions$0.push([null, body$3]);
                    } else {
                      x$2 = m$6$0;
                      stmts$0.unshift(x$2);
                      break $5;
                    }
                  }
                }
                return [piece_together$0(conditions$0)].concat(stmts$0);
              })];
            } else {
              m$4$0;
              return piece_together$0(conditions$0);
            }
          }
        }
      } else {
        return ___match_error(m$3$0);
      }
    }
  });
  t0$9 = getProjector(mac$0("if"))($targ$12);
  if (t0$9[0]) {
    if_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$12);
  }
  $targ$13 = (function(temp$3$0, temp$4$0, form$2, temp$5$0) {
    var x$3;
    var msg$0;
    var m$7$0;
    var ph$4;
    ph$4 = temp$3$0;
    temp$4$0;
    temp$5$0;
    m$7$0 = ph$4;
    if (((x$3 = m$7$0), ((x$3 instanceof Array) && (x$3[0] === "pattern")))) {
      return ["ignore"];
    } else {
      m$7$0;
      msg$0 = "'else' should be found inside an 'if' block";
      throw ErrorFactory(["syntax", "else"]).create(msg$0, ({"node": form$2}));
    }
  });
  t0$10 = getProjector(mac$0("else"))($targ$13);
  if (t0$10[0]) {
    else_mac$0 = t0$10[1];
  } else {
    ___match_error($targ$13);
  }
  $targ$14 = (function(temp$6$0, temp$7$0, form$3, temp$8$0) {
    var t3$4;
    var t2$4;
    var t1$7;
    var t0$11;
    var x$4;
    var x$5;
    var x$6;
    var other$2;
    var bridge$$9845$0;
    var m$8$0;
    var ph$5;
    var rhs$0;
    var arg$0;
    ph$5 = temp$6$0;
    temp$7$0;
    t0$11 = temp$8$0;
    if (((t0$11 instanceof Array) && ((t1$7 = t0$11.length), ((t1$7 === 3) && ((t0$11[0] === "data") && ((t2$4 = t0$11[1]), ((t2$4 instanceof Array) && ((t3$4 = t2$4.length), ((t3$4 === 1) && (t2$4[0] === "void")))))))))) {
      rhs$0 = t0$11[2];
      arg$0 = t0$11;
    } else {
      ___match_error(temp$8$0);
    }
    m$8$0 = ph$5;
    bridge$$9845$0 = m$8$0;
    if ((((x$4 = bridge$$9845$0), ((x$4 instanceof Array) && (x$4[0] === "check"))) || ((x$5 = bridge$$9845$0), ((x$5 instanceof Array) && (x$5[0] === "project"))))) {
      return ["nostep", form$3];
    } else {
      if (((x$6 = m$8$0), ((x$6 instanceof Array) && (x$6[0] === "pattern")))) {
        return ["neg", rhs$0];
      } else {
        other$2 = m$8$0;
        return ["send", ["variable", "not"], arg$0];
      }
    }
  });
  t0$12 = getProjector(mac$0("not"))($targ$14);
  if (t0$12[0]) {
    not_mac$0 = t0$12[1];
  } else {
    ___match_error($targ$14);
  }
  $targ$15 = (function(temp$9$0, temp$10$0, form$4, temp$11$0) {
    var t1$8;
    var t0$13;
    var x$7;
    var x$8;
    var x$9;
    var other$3;
    var bridge$$9926$0;
    var m$9$0;
    var ph$6;
    var lhs$0;
    var rhs$1;
    var arg$1;
    ph$6 = temp$9$0;
    temp$10$0;
    t0$13 = temp$11$0;
    if (((t0$13 instanceof Array) && ((t1$8 = t0$13.length), ((t1$8 === 3) && (t0$13[0] === "data"))))) {
      lhs$0 = t0$13[1];
      rhs$1 = t0$13[2];
      arg$1 = t0$13;
    } else {
      ___match_error(temp$11$0);
    }
    m$9$0 = ph$6;
    bridge$$9926$0 = m$9$0;
    if ((((x$7 = bridge$$9926$0), ((x$7 instanceof Array) && (x$7[0] === "check"))) || ((x$8 = bridge$$9926$0), ((x$8 instanceof Array) && (x$8[0] === "project"))))) {
      return ["nostep", form$4];
    } else {
      if (((x$9 = m$9$0), ((x$9 instanceof Array) && (x$9[0] === "pattern")))) {
        return ["all", lhs$0, rhs$1];
      } else {
        other$3 = m$9$0;
        return ["send", ["variable", "and"], arg$1];
      }
    }
  });
  t0$14 = getProjector(mac$0("and"))($targ$15);
  if (t0$14[0]) {
    and_mac$0 = t0$14[1];
  } else {
    ___match_error($targ$15);
  }
  $targ$16 = (function(temp$12$0, temp$13$0, form$5, temp$14$0) {
    var t1$9;
    var t0$15;
    var x$10;
    var x$11;
    var x$12;
    var other$4;
    var bridge$$9997$0;
    var m$10$0;
    var ph$7;
    var lhs$1;
    var rhs$2;
    var arg$2;
    ph$7 = temp$12$0;
    temp$13$0;
    t0$15 = temp$14$0;
    if (((t0$15 instanceof Array) && ((t1$9 = t0$15.length), ((t1$9 === 3) && (t0$15[0] === "data"))))) {
      lhs$1 = t0$15[1];
      rhs$2 = t0$15[2];
      arg$2 = t0$15;
    } else {
      ___match_error(temp$14$0);
    }
    m$10$0 = ph$7;
    bridge$$9997$0 = m$10$0;
    if ((((x$10 = bridge$$9997$0), ((x$10 instanceof Array) && (x$10[0] === "check"))) || ((x$11 = bridge$$9997$0), ((x$11 instanceof Array) && (x$11[0] === "project"))))) {
      return ["nostep", form$5];
    } else {
      if (((x$12 = m$10$0), ((x$12 instanceof Array) && (x$12[0] === "pattern")))) {
        return ["any", lhs$1, rhs$2];
      } else {
        other$4 = m$10$0;
        return ["send", ["variable", "or"], arg$2];
      }
    }
  });
  t0$16 = getProjector(mac$0("or"))($targ$16);
  if (t0$16[0]) {
    or_mac$0 = t0$16[1];
  } else {
    ___match_error($targ$16);
  }
  $targ$17 = (function(context$0, temp$15$0, form$6, temp$16$0) {
    var t1$10;
    var t0$17;
    var t0$18;
    var other$5;
    var m$11$0;
    var ph$8;
    var condition$0;
    temp$15$0;
    t0$17 = temp$16$0;
    if (((t0$17 instanceof Array) && ((t1$10 = t0$17.length), ((t1$10 === 3) && (t0$17[0] === "data"))))) {
      ph$8 = t0$17[1];
      condition$0 = t0$17[2];
    } else {
      ___match_error(temp$16$0);
    }
    m$11$0 = ph$8;
    if (((m$11$0 instanceof Array) && ((t0$18 = m$11$0.length), ((t0$18 === 1) && (m$11$0[0] === "void"))))) {
      return ["test", condition$0, ["ignore"]];
    } else {
      other$5 = m$11$0;
      return ["test", condition$0, other$5];
    }
  });
  t0$19 = getProjector(mac$0("when"))($targ$17);
  if (t0$19[0]) {
    when_mac$0 = t0$19[1];
  } else {
    ___match_error($targ$17);
  }
  $targ$18 = (function(temp$17$0, info$1, form$7, temp$18$0) {
    var t0$20;
    var t1$11;
    var t0$21;
    var checker$1;
    var m$13$0;
    var x$13;
    var t0$22;
    var projector$0;
    var m$14$0;
    var subp$0;
    var other$6;
    var checker$0;
    var m$12$0;
    var ph$9;
    var context$1;
    var chk$0;
    var target$1;
    t0$20 = temp$17$0;
    context$1 = t0$20;
    ph$9 = t0$20;
    t0$21 = temp$18$0;
    if (((t0$21 instanceof Array) && ((t1$11 = t0$21.length), ((t1$11 === 3) && (t0$21[0] === "data"))))) {
      chk$0 = t0$21[1];
      target$1 = t0$21[2];
    } else {
      ___match_error(temp$18$0);
    }
    m$12$0 = ph$9;
    checker$0 = ((m$13$0 = info$1.step(["check", context$1], chk$0)), ((m$13$0 === chk$0) ? ["send", ["symbol", "getChecker"], ["data", chk$0]] : ((checker$1 = m$13$0), checker$1)));
    if (((x$13 = m$12$0), ((x$13 instanceof Array) && (x$13[0] === "pattern")))) {
      subp$0 = (equal(target$1, ["void"]) ? ["ignore"] : target$1);
      m$14$0 = checker$0;
      if (((m$14$0 instanceof Array) && ((t0$22 = m$14$0.length), ((t0$22 === 2) && (m$14$0[0] === "raw"))))) {
        projector$0 = m$14$0[1];
        return checker$0;
      } else {
        m$14$0;
        return ["check", checker$0, subp$0];
      }
    } else {
      m$12$0;
      if (equal(target$1, ["void"])) {
        return checker$0;
      } else {
        other$6 = m$12$0;
        return ["send", checker$0, ["data", target$1]];
      }
    }
  });
  t0$23 = getProjector(mac$0("?"))($targ$18);
  if (t0$23[0]) {
    check_mac$0 = t0$23[1];
  } else {
    ___match_error($targ$18);
  }
  $targ$19 = (function(temp$19$0, info$2, form$8, temp$20$0) {
    var t0$24;
    var t1$12;
    var t0$25;
    var projector$2;
    var m$16$0;
    var x$14;
    var t0$26;
    var projector$4;
    var projector$3;
    var $$10275$0;
    var $$10276$0;
    var $$10277$0;
    var m$17$0;
    var subp$1;
    var other$7;
    var projector$1;
    var m$15$0;
    var ph$10;
    var context$2;
    var proj$0;
    var target$2;
    t0$24 = temp$19$0;
    context$2 = t0$24;
    ph$10 = t0$24;
    t0$25 = temp$20$0;
    if (((t0$25 instanceof Array) && ((t1$12 = t0$25.length), ((t1$12 === 3) && (t0$25[0] === "data"))))) {
      proj$0 = t0$25[1];
      target$2 = t0$25[2];
    } else {
      ___match_error(temp$20$0);
    }
    m$15$0 = ph$10;
    projector$1 = ((m$16$0 = info$2.step(["project", context$2], proj$0)), ((m$16$0 === proj$0) ? ["send", ["symbol", "getProjector"], ["data", proj$0]] : ((projector$2 = m$16$0), projector$2)));
    if (((x$14 = m$15$0), ((x$14 instanceof Array) && (x$14[0] === "pattern")))) {
      subp$1 = (equal(target$2, ["void"]) ? ["ignore"] : target$2);
      m$17$0 = projector$1;
      if ((($$10275$0 = (m$17$0 instanceof Array)) && ((t0$26 = m$17$0.length), (($$10277$0 = (t0$26 === 2)) && (m$17$0[0] === "raw"))))) {
        projector$3 = m$17$0[1];
        return projector$3;
      } else {
        if (($$10277$0 && (m$17$0[0] === "unconditional"))) {
          projector$4 = m$17$0[1];
          return ["project", projector$4, subp$1, true];
        } else {
          m$17$0;
          return ["project", projector$1, subp$1];
        }
      }
    } else {
      m$15$0;
      if (equal(target$2, ["void"])) {
        return ["send", ["symbol", "->"], ["data", ["data", ["symbol", "x"]], ["send", ["send", projector$1, ["data", ["symbol", "x"]]], ["value", 1]]]];
      } else {
        other$7 = m$15$0;
        return ["send", ["send", projector$1, ["data", target$2]], ["value", 1]];
      }
    }
  });
  t0$27 = getProjector(mac$0("!"))($targ$19);
  if (t0$27[0]) {
    project_mac$0 = t0$27[1];
  } else {
    ___match_error($targ$19);
  }
  return exports$0;
});
(module["exports"] = $targ$9);
//# sourceURL=<compile-source>
