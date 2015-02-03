"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$0;
var $0$0;
var __lt____lt____colon__$0;
var $1$0;
var accum_flags$0;
var match_error$0;
var Body$0;
var named_statement_matcher$0;
var flatmacro$0;
var $2$0;
var parse_clauses$0;
var util$0;
$0$0 = require("../location");
__lt____lt____colon__$0 = $0$0["<<:"];
$1$0 = require("./helpers");
accum_flags$0 = $1$0.accum_flags;
match_error$0 = $1$0.match_error;
Body$0 = $1$0.Body;
named_statement_matcher$0 = $1$0.named_statement_matcher;
flatmacro$0 = $1$0.flatmacro;
$2$0 = require("../pattern");
parse_clauses$0 = $2$0.parse_clauses;
util$0 = require("../util");
$targ$0 = (function(mac$0) {
  var accum$0;
  var accum$1;
  var t0$3;
  var t1$2;
  var _elif$0;
  var _else$0;
  var t0$10;
  var t0$11;
  var t0$13;
  var t0$15;
  var t0$17;
  var t0$20;
  var t0$24;
  var t0$28;
  var MatchHandler$0;
  var $targ$1;
  var match_mac$0;
  var if_pattern$0;
  var $targ$2;
  var if_mac$0;
  var $targ$3;
  var else_mac$0;
  var $targ$4;
  var not_mac$0;
  var $targ$5;
  var and_mac$0;
  var $targ$6;
  var or_mac$0;
  var $targ$7;
  var when_mac$0;
  var $targ$8;
  var check_mac$0;
  var $targ$9;
  var project_mac$0;
  var exports$0;
  exports$0 = ({});
  MatchHandler$0 = (function MatchHandler() {
    var $targ$10;
    var $it$0;
    if ((!getChecker(MatchHandler$0)(this))) {
      $it$0 = Object.create(MatchHandler$0.prototype);
    } else {
      $it$0 = this;
    }
    $targ$10 = 1;
    ($it$0["wrapOrder"] = $targ$10);
    [];
    return $it$0;
  });
  (MatchHandler$0.prototype["expand"] = (function expand(info$0) {
    var $targ$11;
    var $it$1;
    var self$0;
    $it$1 = this;
    self$0 = this;
    $targ$11 = info$0.env.mark(["symbol", info$0.gensym("ph")]);
    ($it$1["placeholder"] = $targ$11);
    [];
    return $it$1.placeholder;
  }));
  (MatchHandler$0.prototype["wrap"] = (function wrap(expr$0, info$1, opt$0) {
    var $it$2;
    var self$1;
    $it$2 = this;
    self$1 = this;
    return parse_clauses$0(info$1, $it$2.placeholder, Body$0(expr$0), __amp__(opt$0, ({"wrap": null})));
  }));
  __amp____colon__(MatchHandler$0, __amp____colon__(((accum$0 = ({})), (accum$0["::name"] = "MatchHandler"), accum$0), ((accum$1 = ({})), (accum$1["::egclass"] = true), accum$1)));
  $targ$1 = (function(ph$0$0, info$2, form$0, expr$1, flags$0) {
    var x$0;
    var other$0;
    var t0$0;
    var m$0$0;
    var v$0;
    var b$1;
    var b$0;
    var $$10123$0;
    var $$10124$0;
    var t0$1;
    var t1$0;
    var t2$0;
    var t3$0;
    var m$1$0;
    var t0$2;
    var t1$1;
    var accum$2;
    var mbody$0;
    var opt$1;
    var to_match$0;
    var $targ$12;
    var value$0;
    var body$0;
    var other$1;
    if (((x$0 = ph$0$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {
      m$0$0 = expr$1;
      if (((m$0$0 instanceof Array) && ((t0$0 = m$0$0.length), ((t0$0 === 1) && (m$0$0[0] === "void"))))) {
        return ["special", MatchHandler$0()];
      } else {
        other$0 = m$0$0;
        return ["all", __lt____lt____colon__$0(other$0, expr$1), __lt____lt____colon__$0(["special", MatchHandler$0()], form$0)];
      }
    } else {
      other$1 = ph$0$0;
      opt$1 = util$0.mkset(flags$0);
      to_match$0 = __amp__(["symbol", info$2.gensym("m")], ({"single_assignment": true}));
      m$1$0 = expr$1;
      if ((($$10123$0 = (m$1$0 instanceof Array)) && ((t0$1 = m$1$0.length), ((t0$1 === 2) && ((m$1$0[0] === "data") && ((t1$0 = getProjector(Body$0)(m$1$0[1])), (t1$0[0] && ((t2$0 = t1$0[1]), (t3$0 = t2$0.length), (t3$0 >= 0))))))))) {
        b$0 = Array.prototype.slice.call(t2$0, 0);
        $targ$12 = [["value", null], b$0];
      } else {
        if (($$10123$0 && ((t0$1 === 3) && ((m$1$0[0] === "data") && ((v$0 = m$1$0[1]), (t1$0 = getProjector(Body$0)(m$1$0[2])), (t1$0[0] && ((t2$0 = t1$0[1]), (t3$0 = t2$0.length), (t3$0 >= 0)))))))) {
          b$1 = Array.prototype.slice.call(t2$0, 0);
          $targ$12 = [v$0, b$1];
        } else {
          $targ$12 = ___match_error(m$1$0);
        }
      }
      t0$2 = $targ$12;
      if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), (t1$1 === 2)))) {
        value$0 = t0$2[0];
        body$0 = t0$2[1];
      } else {
        ___match_error($targ$12);
      }
      [value$0, body$0];
      mbody$0 = parse_clauses$0(info$2, to_match$0, body$0, __amp__(opt$1, __amp____colon__(((accum$2 = ({})), (accum$2["fallback"] = (function fallback(target$0) {
        return match_error$0(target$0);
      })), accum$2), ({"wrap": null}))));
      return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", to_match$0, value$0]], mbody$0]];
    }
  });
  t0$3 = getProjector(accum_flags$0)($targ$1);
  if ((t0$3[0] && ((t1$2 = getProjector(mac$0("match"))(t0$3[1])), t1$2[0]))) {
    match_mac$0 = t1$2[1];
  } else {
    ___match_error($targ$1);
  }
  _elif$0 = named_statement_matcher$0("elif");
  _else$0 = named_statement_matcher$0("else");
  if_pattern$0 = ["seq", ["multiple", _elif$0], ["multiple", _else$0, 0, 1]];
  $targ$2 = (function(ctx$0, temp$0$0, form$1, ph$1$0) {
    var t0$6;
    var m$2$0;
    var body$1;
    var a$2;
    var b$3;
    var a$1;
    var $$10232$0;
    var $$10233$0;
    var t0$5;
    var t1$4;
    var t2$2;
    var t3$2;
    var t4$1;
    var t5$0;
    var t6$0;
    var t7$0;
    var t8$0;
    var t9$0;
    var t10$0;
    var t11$0;
    var t12$0;
    var t13$0;
    var test$1;
    var ph$2$0;
    var test$0;
    var a$0;
    var b$2;
    var $$10234$0;
    var $$10235$0;
    var t0$4;
    var t1$3;
    var t2$1;
    var t3$1;
    var t4$0;
    t0$4 = ph$1$0;
    t1$3 = t0$4.length;
    if (((t1$3 === 4) && (t0$4[0] === "data"))) {
      test$0 = t0$4[1];
      a$0 = t0$4[2];
      b$2 = t0$4[3];
      return ["if", test$0, a$0, b$2];
    } else {
      if (((t1$3 === 3) && ((t0$4[0] === "data") && ((test$1 = t0$4[1]), (t2$1 = getProjector(["multi"])(t0$4[2])), (t2$1[0] && ((t3$1 = t2$1[1]), (t4$0 = t3$1.length), ((t4$0 >= 1) && (t3$1[0] === "multi")))))))) {
        ph$2$0 = Array.prototype.slice.call(t3$1, 1);
        t0$5 = ph$2$0;
        t1$4 = t0$5.length;
        if (((t1$4 === 1) && ((t2$2 = t0$5[0]), ((t2$2 instanceof Array) && ((t3$2 = t2$2.length), ((t3$2 === 3) && ((t2$2[0] === "send") && ((t4$1 = t2$2[1]), ((t4$1 instanceof Array) && ((t5$0 = t4$1.length), ((t5$0 === 2) && ((t4$1[0] === "symbol") && ((t4$1[1] === "then") && ((t6$0 = t2$2[2]), ((t6$0 instanceof Array) && ((t7$0 = t6$0.length), ((t7$0 === 2) && (t6$0[0] === "data")))))))))))))))))) {
          a$1 = t6$0[1];
          return ["if", test$1, a$1, ["value", undefined]];
        } else {
          if (((t1$4 === 2) && ((t2$2 = t0$5[0]), ((t2$2 instanceof Array) && ((t3$2 = t2$2.length), ((t3$2 === 3) && ((t2$2[0] === "send") && ((t4$1 = t2$2[1]), ((t4$1 instanceof Array) && ((t5$0 = t4$1.length), ((t5$0 === 2) && ((t4$1[0] === "symbol") && ((t4$1[1] === "then") && ((t6$0 = t2$2[2]), ((t6$0 instanceof Array) && ((t7$0 = t6$0.length), ((t7$0 === 2) && ((t6$0[0] === "data") && ((a$2 = t6$0[1]), (t8$0 = t0$5[1]), ((t8$0 instanceof Array) && ((t9$0 = t8$0.length), ((t9$0 === 3) && ((t8$0[0] === "send") && ((t10$0 = t8$0[1]), ((t10$0 instanceof Array) && ((t11$0 = t10$0.length), ((t11$0 === 2) && ((t10$0[0] === "symbol") && ((t10$0[1] === "else") && ((t12$0 = t8$0[2]), ((t12$0 instanceof Array) && ((t13$0 = t12$0.length), ((t13$0 === 2) && (t12$0[0] === "data")))))))))))))))))))))))))))))))))) {
            b$3 = t12$0[1];
            return ["if", test$1, a$2, b$3];
          } else {
            body$1 = ph$2$0;
            m$2$0 = ctx$0;
            if (((m$2$0 instanceof Array) && ((t0$6 = m$2$0.length), ((t0$6 === 2) && ((m$2$0[0] === "expr") && (m$2$0[1] === "multi")))))) {
              return flatmacro$0(if_pattern$0, (function(temp$1$0) {
                var t0$7;
                var t1$5;
                var t2$3;
                var t3$3;
                var t4$2;
                var t5$1;
                var m$3;
                var m$4;
                var rval$0;
                var elifs$0;
                var elses$0;
                t0$7 = temp$1$0;
                if (((t0$7 instanceof Array) && ((t1$5 = t0$7.length), ((t1$5 === 3) && ((t0$7[0] === "seq") && ((t2$3 = t0$7[1]), ((t2$3 instanceof Array) && ((t3$3 = t2$3.length), ((t3$3 >= 1) && ((t2$3[0] === "multiple") && ((elifs$0 = Array.prototype.slice.call(t2$3, 1)), (t4$2 = t0$7[2]), ((t4$2 instanceof Array) && ((t5$1 = t4$2.length), ((t5$1 >= 1) && (t4$2[0] === "multiple"))))))))))))))) {
                  elses$0 = Array.prototype.slice.call(t4$2, 1);
                } else {
                  ___match_error(temp$1$0);
                }
                rval$0 = ["value", undefined];
                m$3 = null;
                $4: for (var $__0 = elses$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  m$3 = $__1.value;
                  {
                    var body$2;
                    var t0$8;
                    var t1$6;
                    var t2$4;
                    var t3$4;
                    var t4$3;
                    var t5$2;
                    t0$8 = m$3;
                    if (((t0$8 instanceof Array) && ((t1$6 = t0$8.length), ((t1$6 === 3) && ((t0$8[0] === "send") && ((t2$4 = t0$8[1]), ((t2$4 instanceof Array) && ((t3$4 = t2$4.length), ((t3$4 === 2) && ((t2$4[0] === "symbol") && ((t2$4[1] === "else") && ((t4$3 = t0$8[2]), ((t4$3 instanceof Array) && ((t5$2 = t4$3.length), ((t5$2 === 2) && (t4$3[0] === "data")))))))))))))))) {
                      body$2 = t4$3[1];
                      rval$0 = body$2;
                      rval$0;
                    } else {
                      ___match_error(m$3, "/home/olivier/git/earl-grey/src/macros/logic.eg", 2005, 2090);
                    }
                  }
                }
                m$4 = null;
                $5: for (var $__2 = elifs$0.reverse()[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__3; !($__3 = $__2.next()).done; ) {
                  m$4 = $__3.value;
                  {
                    var cond$0;
                    var body$3;
                    var t0$9;
                    var t1$7;
                    var t2$5;
                    var t3$5;
                    var t4$4;
                    var t5$3;
                    t0$9 = m$4;
                    if (((t0$9 instanceof Array) && ((t1$7 = t0$9.length), ((t1$7 === 3) && ((t0$9[0] === "send") && ((t2$5 = t0$9[1]), ((t2$5 instanceof Array) && ((t3$5 = t2$5.length), ((t3$5 === 2) && ((t2$5[0] === "symbol") && ((t2$5[1] === "elif") && ((t4$4 = t0$9[2]), ((t4$4 instanceof Array) && ((t5$3 = t4$4.length), ((t5$3 === 3) && (t4$4[0] === "data")))))))))))))))) {
                      cond$0 = t4$4[1];
                      body$3 = t4$4[2];
                      rval$0 = ["if", cond$0, body$3, rval$0];
                      rval$0;
                    } else {
                      ___match_error(m$4, "/home/olivier/git/earl-grey/src/macros/logic.eg", 2090, 2209);
                    }
                  }
                }
                return ["if", test$1, ["multi"].concat(body$1), rval$0];
              }));
            } else {
              return ["if", test$1, ["multi"].concat(body$1), ["value", undefined]];
            }
          }
        }
      } else {
        return ___match_error(ph$1$0);
      }
    }
  });
  t0$10 = getProjector(mac$0("if"))($targ$2);
  if (t0$10[0]) {
    if_mac$0 = t0$10[1];
  } else {
    ___match_error($targ$2);
  }
  $targ$3 = (function(ph$3$0, temp$2$0, form$2, temp$3$0) {
    var x$1;
    var msg$0;
    if (((x$1 = ph$3$0), ((x$1 instanceof Array) && (x$1[0] === "pattern")))) {
      return ["ignore"];
    } else {
      msg$0 = "'else' should be found inside an 'if' block";
      throw ErrorFactory(["syntax", "else"]).create(msg$0, ({"node": form$2}));
    }
  });
  t0$11 = getProjector(mac$0("else"))($targ$3);
  if (t0$11[0]) {
    else_mac$0 = t0$11[1];
  } else {
    ___match_error($targ$3);
  }
  $targ$4 = (function(ph$4$0, temp$4$0, form$3, temp$5$0) {
    var t0$12;
    var t1$8;
    var t2$6;
    var t3$6;
    var x$2;
    var x$3;
    var x$4;
    var other$2;
    var bridge$$10583$0;
    var rhs$0;
    var arg$0;
    t0$12 = temp$5$0;
    if (((t0$12 instanceof Array) && ((t1$8 = t0$12.length), ((t1$8 === 3) && ((t0$12[0] === "data") && ((t2$6 = t0$12[1]), ((t2$6 instanceof Array) && ((t3$6 = t2$6.length), ((t3$6 === 1) && (t2$6[0] === "void")))))))))) {
      rhs$0 = t0$12[2];
      arg$0 = t0$12;
    } else {
      ___match_error(temp$5$0);
    }
    bridge$$10583$0 = ph$4$0;
    if ((((x$2 = bridge$$10583$0), ((x$2 instanceof Array) && (x$2[0] === "check"))) || ((x$3 = bridge$$10583$0), ((x$3 instanceof Array) && (x$3[0] === "project"))))) {
      return ["nostep", form$3];
    } else {
      if (((x$4 = ph$4$0), ((x$4 instanceof Array) && (x$4[0] === "pattern")))) {
        return ["neg", rhs$0];
      } else {
        other$2 = ph$4$0;
        return ["send", ["variable", "not"], arg$0];
      }
    }
  });
  t0$13 = getProjector(mac$0("not"))($targ$4);
  if (t0$13[0]) {
    not_mac$0 = t0$13[1];
  } else {
    ___match_error($targ$4);
  }
  $targ$5 = (function(ph$5$0, temp$6$0, form$4, temp$7$0) {
    var t0$14;
    var t1$9;
    var x$5;
    var x$6;
    var x$7;
    var other$3;
    var bridge$$10653$0;
    var lhs$0;
    var rhs$1;
    var arg$1;
    t0$14 = temp$7$0;
    if (((t0$14 instanceof Array) && ((t1$9 = t0$14.length), ((t1$9 === 3) && (t0$14[0] === "data"))))) {
      lhs$0 = t0$14[1];
      rhs$1 = t0$14[2];
      arg$1 = t0$14;
    } else {
      ___match_error(temp$7$0);
    }
    bridge$$10653$0 = ph$5$0;
    if ((((x$5 = bridge$$10653$0), ((x$5 instanceof Array) && (x$5[0] === "check"))) || ((x$6 = bridge$$10653$0), ((x$6 instanceof Array) && (x$6[0] === "project"))))) {
      return ["nostep", form$4];
    } else {
      if (((x$7 = ph$5$0), ((x$7 instanceof Array) && (x$7[0] === "pattern")))) {
        return ["all", lhs$0, rhs$1];
      } else {
        other$3 = ph$5$0;
        return ["send", ["variable", "and"], arg$1];
      }
    }
  });
  t0$15 = getProjector(mac$0("and"))($targ$5);
  if (t0$15[0]) {
    and_mac$0 = t0$15[1];
  } else {
    ___match_error($targ$5);
  }
  $targ$6 = (function(ph$6$0, temp$8$0, form$5, temp$9$0) {
    var t0$16;
    var t1$10;
    var x$8;
    var x$9;
    var x$10;
    var other$4;
    var bridge$$10713$0;
    var lhs$1;
    var rhs$2;
    var arg$2;
    t0$16 = temp$9$0;
    if (((t0$16 instanceof Array) && ((t1$10 = t0$16.length), ((t1$10 === 3) && (t0$16[0] === "data"))))) {
      lhs$1 = t0$16[1];
      rhs$2 = t0$16[2];
      arg$2 = t0$16;
    } else {
      ___match_error(temp$9$0);
    }
    bridge$$10713$0 = ph$6$0;
    if ((((x$8 = bridge$$10713$0), ((x$8 instanceof Array) && (x$8[0] === "check"))) || ((x$9 = bridge$$10713$0), ((x$9 instanceof Array) && (x$9[0] === "project"))))) {
      return ["nostep", form$5];
    } else {
      if (((x$10 = ph$6$0), ((x$10 instanceof Array) && (x$10[0] === "pattern")))) {
        return ["any", lhs$1, rhs$2];
      } else {
        other$4 = ph$6$0;
        return ["send", ["variable", "or"], arg$2];
      }
    }
  });
  t0$17 = getProjector(mac$0("or"))($targ$6);
  if (t0$17[0]) {
    or_mac$0 = t0$17[1];
  } else {
    ___match_error($targ$6);
  }
  $targ$7 = (function(context$0, temp$10$0, form$6, temp$11$0) {
    var t0$18;
    var t1$11;
    var other$5;
    var t0$19;
    var t1$12;
    var ph$7$0;
    var condition$0;
    t0$18 = temp$11$0;
    if (((t0$18 instanceof Array) && ((t1$11 = t0$18.length), ((t1$11 === 3) && (t0$18[0] === "data"))))) {
      ph$7$0 = t0$18[1];
      condition$0 = t0$18[2];
    } else {
      ___match_error(temp$11$0);
    }
    t0$19 = ph$7$0;
    t1$12 = t0$19.length;
    if (((t1$12 === 1) && (t0$19[0] === "void"))) {
      return ["test", condition$0, ["ignore"]];
    } else {
      other$5 = ph$7$0;
      return ["test", condition$0, other$5];
    }
  });
  t0$20 = getProjector(mac$0("when"))($targ$7);
  if (t0$20[0]) {
    when_mac$0 = t0$20[1];
  } else {
    ___match_error($targ$7);
  }
  $targ$8 = (function(temp$12$0, info$3, form$7, temp$13$0) {
    var t0$21;
    var t0$22;
    var t1$13;
    var checker$1;
    var m$5$0;
    var x$11;
    var projector$0;
    var t0$23;
    var m$6$0;
    var subp$0;
    var other$6;
    var checker$0;
    var context$1;
    var ph$8$0;
    var chk$0;
    var target$1;
    t0$21 = temp$12$0;
    context$1 = t0$21;
    ph$8$0 = t0$21;
    t0$22 = temp$13$0;
    if (((t0$22 instanceof Array) && ((t1$13 = t0$22.length), ((t1$13 === 3) && (t0$22[0] === "data"))))) {
      chk$0 = t0$22[1];
      target$1 = t0$22[2];
    } else {
      ___match_error(temp$13$0);
    }
    m$5$0 = info$3.step(["check", context$1], chk$0);
    if ((m$5$0 === chk$0)) {
      checker$0 = ["send", ["symbol", "getChecker"], ["data", chk$0]];
    } else {
      checker$1 = m$5$0;
      checker$0 = checker$1;
    }
    if (((x$11 = ph$8$0), ((x$11 instanceof Array) && (x$11[0] === "pattern")))) {
      if (equal(target$1, ["void"])) {
        subp$0 = ["ignore"];
      } else {
        subp$0 = target$1;
      }
      m$6$0 = checker$0;
      if (((m$6$0 instanceof Array) && ((t0$23 = m$6$0.length), ((t0$23 === 2) && (m$6$0[0] === "raw"))))) {
        projector$0 = m$6$0[1];
        return checker$0;
      } else {
        return ["check", checker$0, subp$0];
      }
    } else {
      if (equal(target$1, ["void"])) {
        return checker$0;
      } else {
        other$6 = ph$8$0;
        return ["send", checker$0, ["data", target$1]];
      }
    }
  });
  t0$24 = getProjector(mac$0("?"))($targ$8);
  if (t0$24[0]) {
    check_mac$0 = t0$24[1];
  } else {
    ___match_error($targ$8);
  }
  $targ$9 = (function(temp$14$0, info$4, form$8, temp$15$0) {
    var t0$25;
    var t0$26;
    var t1$14;
    var projector$2;
    var m$7$0;
    var x$12;
    var projector$4;
    var projector$3;
    var $$10967$0;
    var $$10968$0;
    var $$10969$0;
    var t0$27;
    var m$8$0;
    var subp$1;
    var other$7;
    var projector$1;
    var context$2;
    var ph$9$0;
    var proj$0;
    var target$2;
    t0$25 = temp$14$0;
    context$2 = t0$25;
    ph$9$0 = t0$25;
    t0$26 = temp$15$0;
    if (((t0$26 instanceof Array) && ((t1$14 = t0$26.length), ((t1$14 === 3) && (t0$26[0] === "data"))))) {
      proj$0 = t0$26[1];
      target$2 = t0$26[2];
    } else {
      ___match_error(temp$15$0);
    }
    m$7$0 = info$4.step(["project", context$2], proj$0);
    if ((m$7$0 === proj$0)) {
      projector$1 = ["send", ["symbol", "getProjector"], ["data", proj$0]];
    } else {
      projector$2 = m$7$0;
      projector$1 = projector$2;
    }
    if (((x$12 = ph$9$0), ((x$12 instanceof Array) && (x$12[0] === "pattern")))) {
      if (equal(target$2, ["void"])) {
        subp$1 = ["ignore"];
      } else {
        subp$1 = target$2;
      }
      m$8$0 = projector$1;
      if ((($$10967$0 = (m$8$0 instanceof Array)) && ((t0$27 = m$8$0.length), (($$10969$0 = (t0$27 === 2)) && (m$8$0[0] === "raw"))))) {
        projector$3 = m$8$0[1];
        return projector$3;
      } else {
        if (($$10969$0 && (m$8$0[0] === "unconditional"))) {
          projector$4 = m$8$0[1];
          return ["project", projector$4, subp$1, true];
        } else {
          return ["project", projector$1, subp$1];
        }
      }
    } else {
      if (equal(target$2, ["void"])) {
        return ["send", ["symbol", "->"], ["data", ["data", ["symbol", "x"]], ["send", ["send", projector$1, ["data", ["symbol", "x"]]], ["value", 1]]]];
      } else {
        other$7 = ph$9$0;
        return ["send", ["send", projector$1, ["data", target$2]], ["value", 1]];
      }
    }
  });
  t0$28 = getProjector(mac$0("!"))($targ$9);
  if (t0$28[0]) {
    project_mac$0 = t0$28[1];
  } else {
    ___match_error($targ$9);
  }
  return exports$0;
});
(module["exports"] = $targ$0);
[];
//# sourceURL=<compile-source>
