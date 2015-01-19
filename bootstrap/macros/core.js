"use strict";
require("earlgrey-runtime");
var $targ$14;
var $0$0;
var __lt____lt____colon__$0;
var $1$0;
var expr_mac$0;
var pattern_handlers$0;
var ctx_mac$0;
var named_statement_matcher$0;
var flatmacro$0;
var match_error$0;
var Body$0;
var AssignmentHandler$0;
var $2$0;
var PatternCompiler$0;
var parse_clauses$0;
$0$0 = require("../location");
__lt____lt____colon__$0 = $0$0["<<:"];
$1$0 = require("./helpers");
expr_mac$0 = $1$0.expr_mac;
pattern_handlers$0 = $1$0.pattern_handlers;
ctx_mac$0 = $1$0.ctx_mac;
named_statement_matcher$0 = $1$0.named_statement_matcher;
flatmacro$0 = $1$0.flatmacro;
match_error$0 = $1$0.match_error;
Body$0 = $1$0.Body;
AssignmentHandler$0 = $1$0.AssignmentHandler;
$2$0 = require("../pattern");
PatternCompiler$0 = $2$0.PatternCompiler;
parse_clauses$0 = $2$0.parse_clauses;
$targ$14 = (function(mac$0) {
  var t0$0;
  var t0$1;
  var t0$4;
  var t1$4;
  var t0$7;
  var t0$9;
  var t0$12;
  var t0$18;
  var t0$27;
  var t0$32;
  var t0$34;
  var t0$37;
  var _catch$0;
  var _finally$0;
  var t0$45;
  var t0$48;
  var t1$28;
  var t0$49;
  var t0$50;
  var t0$53;
  var t1$29;
  var t0$54;
  var t0$57;
  var t0$59;
  var t0$64;
  var t0$66;
  var $targ$16;
  var var_mac$0;
  var $targ$17;
  var set_mac$0;
  var $targ$18;
  var let_mac$0;
  var $targ$19;
  var letrec_mac$0;
  var $targ$20;
  var where_mac$0;
  var $targ$21;
  var dot_mac$0;
  var $targ$22;
  var equal_mac$0;
  var $targ$23;
  var fat_arrow_mac$0;
  var $targ$24;
  var _lambda_mac$0;
  var $targ$25;
  var genarrow_mac$0;
  var $targ$26;
  var arrow_mac$0;
  var try_pattern$0;
  var $targ$28;
  var try_mac$0;
  var $targ$29;
  var tryop_mac$0;
  var $targ$30;
  var throw_mac$0;
  var $targ$31;
  var get_mac$0;
  var $targ$32;
  var return_mac$0;
  var $targ$33;
  var new_mac$0;
  var $targ$34;
  var delete_mac$0;
  var $targ$35;
  var splice_mac$0;
  var $targ$36;
  var hash_mac$0;
  var $targ$37;
  var placeholder_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$16 = (function(temp$0$0, temp$1$0, form$0, argument$0) {
    var x$0;
    if (((x$0 = temp$0$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {} else {
      ___match_error(temp$0$0);
    }
    return ["mode", "var", argument$0];
  });
  t0$0 = getProjector(mac$0("var"))($targ$16);
  if (t0$0[0]) {
    var_mac$0 = t0$0[1];
  } else {
    ___match_error($targ$16);
  }
  $targ$17 = (function(temp$2$0, temp$3$0, form$1, argument$1) {
    var x$1;
    if (((x$1 = temp$2$0), ((x$1 instanceof Array) && (x$1[0] === "pattern")))) {} else {
      ___match_error(temp$2$0);
    }
    return ["mode", "set", argument$1];
  });
  t0$1 = getProjector(mac$0("set"))($targ$17);
  if (t0$1[0]) {
    set_mac$0 = t0$1[1];
  } else {
    ___match_error($targ$17);
  }
  $targ$18 = (function(ph$0$0, temp$4$0, form$2, argument$2) {
    var x$2;
    var t3$0;
    var t2$0;
    var t1$0;
    var t0$2;
    var construct$0;
    var bindings$0;
    var body$0;
    var m$0$0;
    var other$0;
    if (((x$2 = ph$0$0), ((x$2 instanceof Array) && (x$2[0] === "pattern")))) {
      return ["mode", "let", argument$2];
    } else {
      other$0 = ph$0$0;
      m$0$0 = argument$2;
      if (((m$0$0 instanceof Array) && ((t0$2 = m$0$0.length), ((t0$2 === 3) && ((m$0$0[0] === "data") && ((t1$0 = getProjector(Body$0)(m$0$0[1])), (t1$0[0] && ((t2$0 = t1$0[1]), (t3$0 = t2$0.length), (t3$0 >= 0))))))))) {
        bindings$0 = Array.prototype.slice.call(t2$0, 0);
        body$0 = m$0$0[2];
        construct$0 = (function(ph$1$0) {
          var t7$0;
          var t6$0;
          var t5$0;
          var t4$0;
          var t3$1;
          var t2$1;
          var bind$0;
          var val$0;
          var xs$0;
          var t0$3;
          var t1$1;
          var $$6604$0;
          var $$6605$0;
          t0$3 = ph$1$0;
          t1$1 = t0$3.length;
          if ((t1$1 === 0)) {
            return body$0;
          } else {
            if (((t1$1 >= 1) && ((t2$1 = t0$3[0]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 3) && ((t2$1[0] === "send") && ((t4$0 = t2$1[1]), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 2) && ((t4$0[0] === "symbol") && ((t4$0[1] === "=") && ((t6$0 = t2$1[2]), ((t6$0 instanceof Array) && ((t7$0 = t6$0.length), ((t7$0 === 3) && (t6$0[0] === "data")))))))))))))))))) {
              bind$0 = t6$0[1];
              val$0 = t6$0[2];
              xs$0 = Array.prototype.slice.call(t0$3, 1);
              return __amp__(["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], bind$0], val$0]], construct$0(xs$0)], ({"nonrecursive": true}));
            } else {
              return ___match_error(ph$1$0);
            }
          }
        });
        return construct$0(bindings$0);
      } else {
        return ___match_error(m$0$0);
      }
    }
  });
  t0$4 = getProjector(mac$0("let"))($targ$18);
  if (t0$4[0]) {
    let_mac$0 = t0$4[1];
  } else {
    ___match_error($targ$18);
  }
  $targ$19 = (function(temp$5$0, form$3, temp$6$0) {
    var t4$1;
    var t3$2;
    var t2$2;
    var t1$2;
    var t0$5;
    var m$1;
    var acc$0;
    var $targ$65;
    var temp$7;
    var let_bindings$0;
    var bindings$1;
    var body$1;
    t0$5 = temp$6$0;
    if (((t0$5 instanceof Array) && ((t1$2 = t0$5.length), ((t1$2 === 3) && ((t0$5[0] === "data") && ((t2$2 = getProjector(Body$0)(t0$5[1])), (t2$2[0] && ((t3$2 = t2$2[1]), (t4$1 = t3$2.length), (t4$1 >= 0))))))))) {
      bindings$1 = Array.prototype.slice.call(t3$2, 0);
      body$1 = t0$5[2];
    } else {
      ___match_error(temp$6$0);
    }
    acc$0 = [];
    $targ$65 = null;
    temp$7 = $targ$65;
    m$1 = null;
    $3: for (var $__0 = bindings$1[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$1 = $__1.value;
      {
        var t5$1;
        var t4$2;
        var t3$3;
        var t2$3;
        var t1$3;
        var $targ$72;
        var t0$6;
        var b$0;
        var v$0;
        t0$6 = m$1;
        if (((t0$6 instanceof Array) && ((t1$3 = t0$6.length), ((t1$3 === 3) && ((t0$6[0] === "send") && ((t2$3 = t0$6[1]), ((t2$3 instanceof Array) && ((t3$3 = t2$3.length), ((t3$3 === 2) && ((t2$3[0] === "symbol") && ((t2$3[1] === "=") && ((t4$2 = t0$6[2]), ((t4$2 instanceof Array) && ((t5$1 = t4$2.length), ((t5$1 === 3) && (t4$2[0] === "data")))))))))))))))) {
          b$0 = t4$2[1];
          v$0 = t4$2[2];
          $targ$72 = ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], b$0], v$0]];
          temp$7 = $targ$72;
          acc$0.push(temp$7);
        } else {
          ___match_error(m$1, "/home/olivier/git/earl-grey/src/macros/core.eg", 961, 1003);
        }
      }
    }
    let_bindings$0 = acc$0;
    return ["multi"].concat(let_bindings$0).concat([body$1]);
  });
  t0$7 = getProjector(expr_mac$0)($targ$19);
  if ((t0$7[0] && ((t1$4 = getProjector(mac$0("letrec"))(t0$7[1])), t1$4[0]))) {
    letrec_mac$0 = t1$4[1];
  } else {
    ___match_error($targ$19);
  }
  $targ$20 = (function(context$0, temp$8$0, form$4, temp$9$0) {
    var t1$5;
    var t0$8;
    var body$2;
    var bindings$2;
    t0$8 = temp$9$0;
    if (((t0$8 instanceof Array) && ((t1$5 = t0$8.length), ((t1$5 === 3) && (t0$8[0] === "data"))))) {
      body$2 = t0$8[1];
      bindings$2 = t0$8[2];
    } else {
      ___match_error(temp$9$0);
    }
    return ["send", ["symbol", "letrec"], ["data", bindings$2, body$2]];
  });
  t0$9 = getProjector(mac$0("where"))($targ$20);
  if (t0$9[0]) {
    where_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$20);
  }
  $targ$21 = (function(context$1, temp$10$0, form$5, temp$11$0) {
    var t3$4;
    var t2$4;
    var t1$6;
    var t0$10;
    var f$0;
    var expr$0;
    t0$10 = temp$11$0;
    if (((t0$10 instanceof Array) && ((t1$6 = t0$10.length), ((t1$6 === 3) && ((t0$10[0] === "data") && ((t2$4 = t0$10[1]), ((t2$4 instanceof Array) && ((t3$4 = t2$4.length), ((t3$4 === 1) && (t2$4[0] === "void")))))))))) {
      expr$0 = t0$10[2];
    } else {
      ___match_error(temp$11$0);
    }
    f$0 = (function(ph$2$0) {
      var m$2;
      var acc$1;
      var $targ$86;
      var temp$12;
      var other$1;
      var args$0;
      var t0$11;
      var t1$7;
      var x$3;
      var $$6839$0;
      var $$6840$0;
      t0$11 = ph$2$0;
      t1$7 = t0$11.length;
      if (((t1$7 === 2) && (t0$11[0] === "symbol"))) {
        x$3 = t0$11[1];
        return ["value", x$3];
      } else {
        if (((t1$7 >= 1) && (t0$11[0] === "data"))) {
          args$0 = Array.prototype.slice.call(t0$11, 1);
          return ["data"].concat(((acc$1 = []), ($targ$86 = null), (temp$12 = $targ$86), (m$2 = null), (function() {
            $4: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$2 = $__1.value;
              {
                var $targ$87;
                var arg$0;
                arg$0 = m$2;
                $targ$87 = f$0(arg$0);
                temp$12 = $targ$87;
                acc$1.push(temp$12);
              }
            }
          })(), acc$1));
        } else {
          other$1 = ph$2$0;
          throw ErrorFactory(["syntax", "dot"]).create("Argument to '.' must be a symbol or an array", ({"argument": other$1}));
        }
      }
    });
    return f$0(expr$0);
  });
  t0$12 = getProjector(mac$0("."))($targ$21);
  if (t0$12[0]) {
    dot_mac$0 = t0$12[1];
  } else {
    ___match_error($targ$21);
  }
  $targ$22 = (function(ph$3$0, info$0, form$6, expr$1) {
    var x$4;
    var t1$9;
    var t0$14;
    var $targ$90;
    var lhs$0;
    var rhs$0;
    var t0$15;
    var t2$5;
    var t1$10;
    var opt$0;
    var rhs2$0;
    var lhs$1;
    var rhs$2;
    var s$0;
    var rhs$1;
    var $$6941$0;
    var $$6942$0;
    var $$6943$0;
    var $$6944$0;
    var m$3$0;
    var t1$11;
    var t0$16;
    var opt$1;
    var rhs2$1;
    var t0$17;
    var vs$0;
    var v$1;
    var m$4$0;
    var expr$2;
    var $targ$101;
    var lhs$2;
    var rhs$3;
    var pc$0;
    var assignment$0;
    var rval$0;
    var other$2;
    var t0$13;
    var t1$8;
    if (((x$4 = ph$3$0), ((x$4 instanceof Array) && (x$4[0] === "pattern")))) {
      $targ$90 = expr$1;
      t0$14 = $targ$90;
      if (((t0$14 instanceof Array) && ((t1$9 = t0$14.length), ((t1$9 === 3) && (t0$14[0] === "data"))))) {
        lhs$0 = t0$14[1];
        rhs$0 = t0$14[2];
      } else {
        ___match_error($targ$90);
      }
      [lhs$0, rhs$0];
      return ["default", lhs$0, rhs$0];
    } else {
      t0$13 = ph$3$0;
      t1$8 = t0$13.length;
      if (((t1$8 === 2) && ((t0$13[0] === "expr") && (t0$13[1] === "data")))) {
        m$3$0 = expr$1;
        if ((($$6941$0 = (m$3$0 instanceof Array)) && ((t0$15 = m$3$0.length), ((t0$15 === 1) && (m$3$0[0] === "void"))))) {
          return ["assoc"];
        } else {
          if (($$6941$0 && (($$6943$0 = (t0$15 === 3)) && (($$6944$0 = (m$3$0[0] === "data")) && ((t1$10 = m$3$0[1]), ((t1$10 instanceof Array) && ((t2$5 = t1$10.length), ((t2$5 === 2) && (t1$10[0] === "symbol"))))))))) {
            s$0 = t1$10[1];
            rhs$1 = m$3$0[2];
            return ["assoc", ["value", s$0], rhs$1];
          } else {
            if ($$6944$0) {
              lhs$1 = m$3$0[1];
              rhs$2 = m$3$0[2];
              return ["objsplice", ["multi", ((opt$0 = pattern_handlers$0.build_object), (rhs2$0 = __lt____lt____colon__$0(["use", info$0.scope, rhs$2], rhs$2)), PatternCompiler$0(lhs$1, info$0, opt$0).extract_from_rhs(rhs2$0))]];
            } else {
              return ___match_error(m$3$0);
            }
          }
        }
      } else {
        other$2 = ph$3$0;
        $targ$101 = expr$1;
        t0$16 = $targ$101;
        if (((t0$16 instanceof Array) && ((t1$11 = t0$16.length), ((t1$11 === 3) && (t0$16[0] === "data"))))) {
          lhs$2 = t0$16[1];
          rhs$3 = t0$16[2];
        } else {
          ___match_error($targ$101);
        }
        [lhs$2, rhs$3];
        opt$1 = pattern_handlers$0.declare_variables;
        pc$0 = PatternCompiler$0(lhs$2, info$0, opt$1);
        rhs2$1 = __lt____lt____colon__$0(["use", info$0.scope, rhs$3], rhs$3);
        assignment$0 = pc$0.extract_from_rhs(rhs2$1);
        m$4$0 = pc$0.vars;
        if (((m$4$0 instanceof Array) && ((t0$17 = m$4$0.length), (t0$17 === 1)))) {
          v$1 = m$4$0[0];
          rval$0 = v$1;
        } else {
          vs$0 = m$4$0;
          rval$0 = ["data"].concat(vs$0);
        }
        expr$2 = ["splice", assignment$0, rval$0];
        return pc$0.wrapAssignment(expr$2);
      }
    }
  });
  t0$18 = getProjector(mac$0("="))($targ$22);
  if (t0$18[0]) {
    equal_mac$0 = t0$18[1];
  } else {
    ___match_error($targ$22);
  }
  $targ$23 = (function(ph$4$0, temp$13$0, temp$14$0, temp$15$0) {
    var t0$19;
    var t1$12;
    var t0$20;
    var x$5;
    var x$6;
    var t0$22;
    var t0$23;
    var bridge$$7099$0;
    var t0$21;
    var t0$24;
    var t0$25;
    var bridge$$7101$0;
    var k$1;
    var rhs$5;
    var k$0;
    var $$7102$0;
    var $$7103$0;
    var $$7104$0;
    var m$5$0;
    var x$7;
    var t2$6;
    var t1$13;
    var t0$26;
    var $targ$127;
    var stmts$0;
    var other$3;
    var env$0;
    var lhs$3;
    var rhs$4;
    t0$19 = temp$13$0;
    if (___hasprop(t0$19, "env")) {
      env$0 = t0$19.env;
    } else {
      ___match_error(temp$13$0);
    }
    t0$20 = temp$15$0;
    if (((t0$20 instanceof Array) && ((t1$12 = t0$20.length), ((t1$12 === 3) && (t0$20[0] === "data"))))) {
      lhs$3 = t0$20[1];
      rhs$4 = t0$20[2];
    } else {
      ___match_error(temp$15$0);
    }
    if (((x$5 = ph$4$0), ((x$5 instanceof Array) && (x$5[0] === "pattern")))) {
      m$5$0 = [lhs$3, rhs$4];
      if ((($$7102$0 = (m$5$0 instanceof Array)) && ((t0$21 = m$5$0.length), (($$7104$0 = (t0$21 === 2)) && (((x$6 = m$5$0[0]), ((x$6 instanceof Array) && (x$6[0] === "void"))) && ((bridge$$7099$0 = m$5$0[1]), (((bridge$$7099$0 instanceof Array) && ((t0$22 = bridge$$7099$0.length), ((t0$22 === 2) && ((bridge$$7099$0[0] === "symbol") && ((k$0 = bridge$$7099$0[1]), true))))) || ((bridge$$7099$0 instanceof Array) && ((t0$23 = bridge$$7099$0.length), ((t0$23 === 2) && ((bridge$$7099$0[0] === "value") && ((k$0 = bridge$$7099$0[1]), true)))))))))))) {
        return ["assoc", ["value", k$0], __amp__(__lt____lt____colon__$0(["symbol", k$0], rhs$4), ({"env": env$0}))];
      } else {
        if (($$7104$0 && ((bridge$$7101$0 = m$5$0[0]), (((bridge$$7101$0 instanceof Array) && ((t0$24 = bridge$$7101$0.length), ((t0$24 === 2) && ((bridge$$7101$0[0] === "symbol") && ((k$1 = bridge$$7101$0[1]), true))))) || ((bridge$$7101$0 instanceof Array) && ((t0$25 = bridge$$7101$0.length), ((t0$25 === 2) && ((bridge$$7101$0[0] === "value") && ((k$1 = bridge$$7101$0[1]), true))))))))) {
          rhs$5 = m$5$0[1];
          return ["assoc", ["value", k$1], rhs$5];
        } else {
          return ___match_error(m$5$0);
        }
      }
    } else {
      if (((x$7 = ph$4$0), ((x$7 instanceof Array) && (x$7[0] === "test")))) {
        $targ$127 = rhs$4;
        t0$26 = getProjector(Body$0)($targ$127);
        if ((t0$26[0] && ((t1$13 = t0$26[1]), (t2$6 = t1$13.length), (t2$6 >= 0)))) {
          stmts$0 = Array.prototype.slice.call(t1$13, 0);
        } else {
          ___match_error($targ$127);
        }
        return ["blocktest", lhs$3, stmts$0];
      } else {
        other$3 = ph$4$0;
        return ["assoc", lhs$3, rhs$4];
      }
    }
  });
  t0$27 = getProjector(mac$0("=>"))($targ$23);
  if (t0$27[0]) {
    fat_arrow_mac$0 = t0$27[1];
  } else {
    ___match_error($targ$23);
  }
  $targ$24 = (function(context$2, info$1, form$7, ph$5$0) {
    var t3$5;
    var t2$7;
    var $targ$140;
    var accum$0;
    var t4$3;
    var t3$6;
    var t2$8;
    var t1$15;
    var t0$29;
    var m$7;
    var acc$2;
    var $targ$151;
    var temp$16;
    var decls$0;
    var newargs$0;
    var _body$0;
    var body2$1;
    var a$0;
    var other$5;
    var fw$0;
    var m$6$0;
    var wrap$0;
    var pc$1;
    var cpattern$0;
    var t0$28;
    var t1$14;
    var args$1;
    var arg$1;
    var pre$0;
    var body$3;
    var post$0;
    var generator$0;
    t0$28 = ph$5$0;
    t1$14 = t0$28.length;
    if ((((t1$14 >= 5) && (t1$14 <= 6)) && ((t0$28[0] === "data") && ((t2$7 = t0$28[1]), ((t2$7 instanceof Array) && ((t3$5 = t2$7.length), ((t3$5 >= 1) && (t2$7[0] === "data")))))))) {
      args$1 = Array.prototype.slice.call(t2$7, 1);
      arg$1 = t2$7;
      pre$0 = t0$28[2];
      body$3 = t0$28[3];
      post$0 = t0$28[4];
      if ((5 >= t1$14)) {
        generator$0 = ["value", false];
      } else {
        generator$0 = t0$28[5];
      }
      wrap$0 = (function(body2$0) {
        var body3$0;
        if (equal(post$0, ["value", null])) {
          body3$0 = body2$0;
        } else {
          body3$0 = ["multi", body2$0, post$0];
        }
        if (equal(pre$0, ["value", null])) {
          return body3$0;
        } else {
          return ["multi", pre$0, body3$0];
        }
      });
      pc$1 = PatternCompiler$0(arg$1, info$1, __amp__(pattern_handlers$0.declare_variables, __amp____colon__(({
        "indexable": true,
        "allow_nested": true
      }), __amp____colon__((($targ$140 = (function(target$0) {
        return match_error$0(target$0);
      })), (accum$0 = ({})), (accum$0["fallback"] = $targ$140), accum$0), ({"tags": ({"declare_mode": "let"})})))));
      cpattern$0 = pc$1.compile();
      m$6$0 = cpattern$0;
      if (((m$6$0 instanceof Array) && ((t0$29 = m$6$0.length), ((t0$29 === 5) && ((m$6$0[0] === "array_pattern") && ((fw$0 = m$6$0[1]), (t1$15 = m$6$0[2]), ((t1$15 instanceof Array) && ((t2$8 = t1$15.length), ((t2$8 === 0) && ((t3$6 = m$6$0[3]), ((t3$6 instanceof Array) && ((t4$3 = t3$6.length), ((t4$3 === 0) && (m$6$0[4] === (void 0))))))))))))))) {
        decls$0 = [];
        acc$2 = [];
        $targ$151 = null;
        temp$16 = $targ$151;
        m$7 = null;
        $5: for (var $__0 = zip(fw$0, args$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$7 = $__1.value;
          {
            var t1$16;
            var t3$7;
            var t2$9;
            var t1$17;
            var newv$0;
            var pc2$0;
            var other$4;
            var t0$31;
            var expr$3;
            var v$2;
            var $targ$154;
            var t0$30;
            var ph$6$0;
            var arg$2;
            t0$30 = m$7;
            if (((t0$30 instanceof Array) && ((t1$16 = t0$30.length), (t1$16 === 2)))) {
              ph$6$0 = t0$30[0];
              arg$2 = t0$30[1];
              t0$31 = ph$6$0;
              if (((t0$31 instanceof Array) && ((t1$17 = t0$31.length), ((t1$17 === 2) && ((t0$31[0] === "assign") && ((t2$9 = t0$31[1]), (expr$3 = t2$9), ((t2$9 instanceof Array) && ((t3$7 = t2$9.length), ((t3$7 === 2) && (t2$9[0] === "symbol")))))))))) {
                v$2 = t2$9[1];
                $targ$154 = expr$3;
              } else {
                other$4 = ph$6$0;
                newv$0 = __amp__(["symbol", info$1.gensym("temp")], ({"env": info$1.mkenv()}));
                pc2$0 = pc$1.fork(other$4);
                decls$0.push(pc2$0.extract_from_rhs(newv$0));
                $targ$154 = newv$0;
              }
              temp$16 = $targ$154;
              acc$2.push(temp$16);
            } else {
              ___match_error(m$7, "/home/olivier/git/earl-grey/src/macros/core.eg", 3507, 3847);
            }
          }
        }
        newargs$0 = acc$2;
        _body$0 = pc$1.wrapBody(body$3);
        return ["lambda", newargs$0, wrap$0(["multi"].concat(decls$0).concat([_body$0])), generator$0];
      } else {
        other$5 = m$6$0;
        a$0 = __lt____lt____colon__$0(["symbol", "arguments"], arg$1);
        body2$1 = ["send", ["send", ["symbol", "match"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "indexable"]]]], ["data", a$0, ["send", ["symbol", "->"], ["data", arg$1, body$3]]]];
        return ["lambda", [], wrap$0(body2$1), generator$0];
      }
    } else {
      return ___match_error(ph$5$0);
    }
  });
  t0$32 = getProjector(mac$0("_lambda"))($targ$24);
  if (t0$32[0]) {
    _lambda_mac$0 = t0$32[1];
  } else {
    ___match_error($targ$24);
  }
  $targ$25 = (function(ctx$0, temp$17$0, form$8, ph$7$0) {
    var other$6;
    var t0$33;
    var t1$18;
    var args$2;
    var body$4;
    t0$33 = ph$7$0;
    t1$18 = t0$33.length;
    if (((t1$18 === 3) && (t0$33[0] === "data"))) {
      args$2 = t0$33[1];
      body$4 = t0$33[2];
      return ["send", ["symbol", "_lambda"], ["data", args$2, ["value", null], body$4, ["value", null], ["value", true]]];
    } else {
      other$6 = ph$7$0;
      throw ErrorFactory(["syntax", "lambda"]).create("Bad lambda syntax", ({"node": other$6}));
    }
  });
  t0$34 = getProjector(mac$0("*->"))($targ$25);
  if (t0$34[0]) {
    genarrow_mac$0 = t0$34[1];
  } else {
    ___match_error($targ$25);
  }
  $targ$26 = (function(ph$8$0, temp$18$0, form$9, expr$4) {
    var x$8;
    var t1$19;
    var t0$35;
    var $targ$168;
    var lhs$4;
    var rhs$6;
    var t0$36;
    var other$8;
    var args$3;
    var body$5;
    var m$8$0;
    var other$7;
    if (form$9.name) {
      console.log(form$9.name);
    }
    if (((x$8 = ph$8$0), ((x$8 instanceof Array) && (x$8[0] === "clause")))) {
      $targ$168 = expr$4;
      t0$35 = $targ$168;
      if (((t0$35 instanceof Array) && ((t1$19 = t0$35.length), ((t1$19 === 3) && (t0$35[0] === "data"))))) {
        lhs$4 = t0$35[1];
        rhs$6 = t0$35[2];
      } else {
        ___match_error($targ$168);
      }
      [lhs$4, rhs$6];
      return ["clause", lhs$4, rhs$6];
    } else {
      other$7 = ph$8$0;
      m$8$0 = expr$4;
      if (((m$8$0 instanceof Array) && ((t0$36 = m$8$0.length), ((t0$36 === 3) && (m$8$0[0] === "data"))))) {
        args$3 = m$8$0[1];
        body$5 = m$8$0[2];
        return ["send", ["symbol", "_lambda"], ["data", args$3, ["value", null], body$5, ["value", null]]];
      } else {
        other$8 = m$8$0;
        throw ErrorFactory(["syntax", "lambda"]).create("Bad lambda syntax", ({"node": other$8}));
      }
    }
  });
  t0$37 = getProjector(mac$0("->"))($targ$26);
  if (t0$37[0]) {
    arrow_mac$0 = t0$37[1];
  } else {
    ___match_error($targ$26);
  }
  _catch$0 = named_statement_matcher$0("catch");
  _finally$0 = named_statement_matcher$0("finally");
  try_pattern$0 = ["seq", ["multiple", _catch$0], ["multiple", _finally$0, 0, 1]];
  $targ$28 = (function(temp$19$0, info$2, form$10, temp$20$0) {
    var t1$20;
    var t0$38;
    var t1$21;
    var t0$39;
    var body$6;
    t0$38 = temp$19$0;
    if (((t0$38 instanceof Array) && ((t1$20 = t0$38.length), ((t1$20 === 2) && ((t0$38[0] === "expr") && (t0$38[1] === "multi")))))) {} else {
      ___match_error(temp$19$0);
    }
    t0$39 = temp$20$0;
    if (((t0$39 instanceof Array) && ((t1$21 = t0$39.length), ((t1$21 === 2) && (t0$39[0] === "data"))))) {
      body$6 = t0$39[1];
    } else {
      ___match_error(temp$20$0);
    }
    return flatmacro$0(try_pattern$0, (function(temp$21$0) {
      var t5$2;
      var t4$4;
      var t3$8;
      var t2$10;
      var t1$22;
      var t0$40;
      var m$9;
      var m$10;
      var t0$44;
      var $targ$203;
      var m$11;
      var env$1;
      var clauses$0;
      var $targ$188;
      var finally$1;
      var make_ebody$0;
      var catches$0;
      var finallies$0;
      t0$40 = temp$21$0;
      if (((t0$40 instanceof Array) && ((t1$22 = t0$40.length), ((t1$22 === 3) && ((t0$40[0] === "seq") && ((t2$10 = t0$40[1]), ((t2$10 instanceof Array) && ((t3$8 = t2$10.length), ((t3$8 >= 1) && ((t2$10[0] === "multiple") && ((catches$0 = Array.prototype.slice.call(t2$10, 1)), (t4$4 = t0$40[2]), ((t4$4 instanceof Array) && ((t5$2 = t4$4.length), ((t5$2 >= 1) && (t4$4[0] === "multiple"))))))))))))))) {
        finallies$0 = Array.prototype.slice.call(t4$4, 1);
      } else {
        ___match_error(temp$21$0);
      }
      env$1 = info$2.mkenv();
      clauses$0 = [];
      $targ$188 = ["void"];
      finally$1 = $targ$188;
      m$9 = null;
      $6: for (var $__0 = catches$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$9 = $__1.value;
        {
          var t5$3;
          var t4$5;
          var t3$9;
          var t2$11;
          var t1$23;
          var t0$41;
          var p$0;
          var body$7;
          t0$41 = m$9;
          if (((t0$41 instanceof Array) && ((t1$23 = t0$41.length), ((t1$23 === 3) && ((t0$41[0] === "send") && ((t2$11 = t0$41[1]), ((t2$11 instanceof Array) && ((t3$9 = t2$11.length), ((t3$9 === 2) && ((t2$11[0] === "symbol") && ((t2$11[1] === "catch") && ((t4$5 = t0$41[2]), ((t4$5 instanceof Array) && ((t5$3 = t4$5.length), ((t5$3 === 3) && (t4$5[0] === "data")))))))))))))))) {
            p$0 = t4$5[1];
            body$7 = t4$5[2];
            clauses$0.push(env$1.mark(["send", ["symbol", "->"], ["data", p$0, body$7]]));
          } else {
            ___match_error(m$9, "/home/olivier/git/earl-grey/src/macros/core.eg", 5128, 5245);
          }
        }
      }
      m$10 = null;
      $7: for (var $__2 = finallies$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        m$10 = $__3.value;
        {
          var t5$4;
          var t4$6;
          var t3$10;
          var t2$12;
          var t1$24;
          var t0$42;
          var $targ$202;
          t0$42 = m$10;
          if (((t0$42 instanceof Array) && ((t1$24 = t0$42.length), ((t1$24 === 3) && ((t0$42[0] === "send") && ((t2$12 = t0$42[1]), ((t2$12 instanceof Array) && ((t3$10 = t2$12.length), ((t3$10 === 2) && ((t2$12[0] === "symbol") && ((t2$12[1] === "finally") && ((t4$6 = t0$42[2]), ((t4$6 instanceof Array) && ((t5$4 = t4$6.length), ((t5$4 === 2) && (t4$6[0] === "data")))))))))))))))) {
            $targ$202 = t4$6[1];
            finally$1 = $targ$202;
            finally$1;
          } else {
            ___match_error(m$10, "/home/olivier/git/earl-grey/src/macros/core.eg", 5245, 5315);
          }
        }
      }
      clauses$0.push(env$1.mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
      make_ebody$0 = (function(wrap$1) {
        return parse_clauses$0(info$2, ["symbol", "excv"], clauses$0, ({"wrap": wrap$1}));
      });
      $targ$203 = (function(ph$9$0, e$0) {
        var t0$43;
        var t1$25;
        var $$7695$0;
        var $$7696$0;
        var $$7697$0;
        var $$7698$0;
        t0$43 = ph$9$0;
        t1$25 = t0$43.length;
        if ((($$7697$0 = (t1$25 === 2)) && (($$7698$0 = (t0$43[0] === "expr")) && (t0$43[1] === "multi")))) {
          return ["nostep", this.form];
        } else {
          if (($$7698$0 && (t0$43[1] === "ignore"))) {
            return ["js_try", body$6, ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], make_ebody$0((function(x$9) {
              return x$9;
            }))]], finally$1];
          } else {
            if (($$7698$0 && (t0$43[1] === "expr"))) {
              return ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "rval"]], ["symbol", "false"]]], ["js_try", ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], body$6]], ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], make_ebody$0((function(x$10) {
                return ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], x$10]];
              }))]], finally$1], ["symbol", "rval"]];
            } else {
              return ___match_error(ph$9$0);
            }
          }
        }
      });
      t0$44 = getProjector(ctx_mac$0)($targ$203);
      if (t0$44[0]) {
        m$11 = t0$44[1];
      } else {
        ___match_error($targ$203);
      }
      return ["macro", m$11];
    }));
  });
  t0$45 = getProjector(mac$0("try"))($targ$28);
  if (t0$45[0]) {
    try_mac$0 = t0$45[1];
  } else {
    ___match_error($targ$28);
  }
  $targ$29 = (function(ph$10$0, info$3, form$11, temp$22$0) {
    var t4$7;
    var t3$11;
    var t2$13;
    var t1$26;
    var t0$46;
    var other$9;
    var t0$47;
    var t1$27;
    var $$7748$0;
    var $$7749$0;
    var $$7750$0;
    var $$7751$0;
    var expr$5;
    var clauses$1;
    t0$46 = temp$22$0;
    if (((t0$46 instanceof Array) && ((t1$26 = t0$46.length), ((t1$26 === 3) && ((t0$46[0] === "data") && ((expr$5 = t0$46[1]), (t2$13 = getProjector(Body$0)(t0$46[2])), (t2$13[0] && ((t3$11 = t2$13[1]), (t4$7 = t3$11.length), (t4$7 >= 0))))))))) {
      clauses$1 = Array.prototype.slice.call(t3$11, 0);
    } else {
      ___match_error(temp$22$0);
    }
    t0$47 = ph$10$0;
    t1$27 = t0$47.length;
    if ((($$7750$0 = (t1$27 === 2)) && (($$7751$0 = (t0$47[0] === "expr")) && (t0$47[1] === "multi")))) {
      return ["nostep", form$11];
    } else {
      if (($$7751$0 && (t0$47[1] === "ignore"))) {
        clauses$1.push(info$3.mkenv().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
        return ["js_try", expr$5, ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$0(info$3, ["symbol", "excv"], clauses$1, ({"wrap": (function(x$11) {
            return x$11;
          })}))]], ["void"]];
      } else {
        other$9 = ph$10$0;
        clauses$1.push(info$3.mkenv().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
        return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "rval"]], ["symbol", "false"]]], ["multi", ["js_try", ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], expr$5]], ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$0(info$3, ["symbol", "excv"], clauses$1, ({"wrap": (function(x$12) {
            return ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], x$12]];
          })}))]], ["void"]], ["symbol", "rval"]]]];
      }
    }
  });
  t0$48 = getProjector(mac$0("!!"))($targ$29);
  if (t0$48[0]) {
    tryop_mac$0 = t0$48[1];
  } else {
    ___match_error($targ$29);
  }
  $targ$30 = (function(temp$23$0, form$12, arg$3) {
    return ["js_throw", arg$3];
  });
  t0$49 = getProjector(expr_mac$0)($targ$30);
  if ((t0$49[0] && ((t1$28 = getProjector(mac$0("throw"))(t0$49[1])), t1$28[0]))) {
    throw_mac$0 = t1$28[1];
  } else {
    ___match_error($targ$30);
  }
  $targ$31 = (function(ph$11$0, temp$24$0, form$13, arg$4) {
    var x$13;
    var subp$0;
    var w$0;
    if (((x$13 = ph$11$0), ((x$13 instanceof Array) && (x$13[0] === "pattern")))) {
      if (equal(arg$4, ["void"])) {
        subp$0 = null;
      } else {
        subp$0 = arg$4;
      }
      w$0 = (function(ph$12) {
        return ph$12;
      });
      return ["special", AssignmentHandler$0(subp$0, w$0)];
    } else {
      return ___match_error(ph$11$0);
    }
  });
  t0$50 = getProjector(mac$0("get"))($targ$31);
  if (t0$50[0]) {
    get_mac$0 = t0$50[1];
  } else {
    ___match_error($targ$31);
  }
  $targ$32 = (function(ph$13$0, temp$25$0, form$14, arg$5) {
    var x$14;
    var subp$1;
    var w$1;
    var t0$51;
    var t0$52;
    var otherwise$0;
    var bridge$$7878$0;
    if (((x$14 = ph$13$0), ((x$14 instanceof Array) && (x$14[0] === "pattern")))) {
      if (equal(arg$5, ["void"])) {
        subp$1 = null;
      } else {
        subp$1 = arg$5;
      }
      w$1 = (function(ph$14) {
        return ["send", ["symbol", "return"], ph$14];
      });
      return ["special", AssignmentHandler$0(subp$1, w$1)];
    } else {
      bridge$$7878$0 = ph$13$0;
      if ((((bridge$$7878$0 instanceof Array) && ((t0$51 = bridge$$7878$0.length), ((t0$51 === 2) && ((bridge$$7878$0[0] === "expr") && (bridge$$7878$0[1] === "expr"))))) || ((bridge$$7878$0 instanceof Array) && ((t0$52 = bridge$$7878$0.length), ((t0$52 === 2) && ((bridge$$7878$0[0] === "expr") && (bridge$$7878$0[1] === "head"))))))) {
        return ["js_return", arg$5];
      } else {
        otherwise$0 = ph$13$0;
        return ["nostep", form$14];
      }
    }
  });
  t0$53 = getProjector(mac$0("return"))($targ$32);
  if (t0$53[0]) {
    return_mac$0 = t0$53[1];
  } else {
    ___match_error($targ$32);
  }
  $targ$33 = (function(temp$26$0, form$15, arg$6) {
    return ["js_new", arg$6];
  });
  t0$54 = getProjector(expr_mac$0)($targ$33);
  if ((t0$54[0] && ((t1$29 = getProjector(mac$0("new"))(t0$54[1])), t1$29[0]))) {
    new_mac$0 = t1$29[1];
  } else {
    ___match_error($targ$33);
  }
  $targ$34 = (function(context$3, temp$27$0, form$16, temp$28$0) {
    var t0$55;
    var other$10;
    var t0$56;
    var t1$30;
    var s$1;
    var arg$7;
    var ph$15$0;
    t0$55 = temp$28$0;
    arg$7 = t0$55;
    ph$15$0 = t0$55;
    t0$56 = ph$15$0;
    t1$30 = t0$56.length;
    if (((t1$30 === 2) && (t0$56[0] === "symbol"))) {
      s$1 = t0$56[1];
      return ["undeclare", arg$7];
    } else {
      other$10 = ph$15$0;
      return ["js_delete", other$10];
    }
  });
  t0$57 = getProjector(mac$0("delete"))($targ$34);
  if (t0$57[0]) {
    delete_mac$0 = t0$57[1];
  } else {
    ___match_error($targ$34);
  }
  $targ$35 = (function(context$4, temp$29$0, form$17, temp$30$0) {
    var t4$8;
    var t3$12;
    var t2$14;
    var t1$31;
    var t0$58;
    var stmts$1;
    t0$58 = temp$30$0;
    if (((t0$58 instanceof Array) && ((t1$31 = t0$58.length), ((t1$31 === 2) && ((t0$58[0] === "data") && ((t2$14 = getProjector(Body$0)(t0$58[1])), (t2$14[0] && ((t3$12 = t2$14[1]), (t4$8 = t3$12.length), (t4$8 >= 0))))))))) {
      stmts$1 = Array.prototype.slice.call(t3$12, 0);
    } else {
      ___match_error(temp$30$0);
    }
    return ["splice"].concat(stmts$1);
  });
  t0$59 = getProjector(mac$0("splice"))($targ$35);
  if (t0$59[0]) {
    splice_mac$0 = t0$59[1];
  } else {
    ___match_error($targ$35);
  }
  $targ$36 = (function(context$5, temp$31$0, form$18, temp$32$0) {
    var t5$5;
    var t4$9;
    var t3$13;
    var t2$15;
    var t1$32;
    var t0$60;
    var f$1;
    var $targ$247;
    var tag$0;
    t0$60 = temp$32$0;
    if (((t0$60 instanceof Array) && ((t1$32 = t0$60.length), ((t1$32 === 3) && ((t0$60[0] === "data") && ((t2$15 = t0$60[1]), ((t2$15 instanceof Array) && ((t3$13 = t2$15.length), ((t3$13 === 1) && ((t2$15[0] === "void") && ((t4$9 = t0$60[2]), ((t4$9 instanceof Array) && ((t5$5 = t4$9.length), ((t5$5 === 2) && (t4$9[0] === "symbol"))))))))))))))) {
      tag$0 = t4$9[1];
    } else {
      ___match_error(temp$32$0);
    }
    $targ$247 = ["value", tag$0];
    tag$0 = $targ$247;
    f$1 = (function(ph$16$0, temp$33$0, form$19, expr$6) {
      var x$15;
      var t0$62;
      var other$11;
      var subp$2;
      var $$8106$0;
      var $$8107$0;
      var m$12$0;
      var checker_mac$0;
      var x$16;
      var x$17;
      var t0$63;
      var other$12;
      var args$4;
      var $$8171$0;
      var $$8172$0;
      var m$13$0;
      if (((x$15 = ph$16$0), ((x$15 instanceof Array) && (x$15[0] === "pattern")))) {
        checker_mac$0 = ["macro", (function(context$6, temp$34$0, form$20, temp$35$0) {
          var t1$33;
          var t0$61;
          var expr$7;
          t0$61 = temp$35$0;
          if (((t0$61 instanceof Array) && ((t1$33 = t0$61.length), ((t1$33 === 2) && (t0$61[0] === "data"))))) {
            expr$7 = t0$61[1];
          } else {
            ___match_error(temp$35$0);
          }
          return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "x"], expr$7]], ["send", ["symbol", "and"], ["data", ["send", ["symbol", "instanceof"], ["data", ["symbol", "x"], ["symbol", "Array"]]], ["send", ["symbol", "==="], ["data", ["send", ["symbol", "x"], ["value", 0]], tag$0]]]]]];
        })];
        m$12$0 = expr$6;
        if ((($$8106$0 = (m$12$0 instanceof Array)) && ((t0$62 = m$12$0.length), ((t0$62 >= 1) && (m$12$0[0] === "data"))))) {
          subp$2 = Array.prototype.slice.call(m$12$0, 1);
          return ["data", tag$0].concat(subp$2);
        } else {
          if (($$8106$0 && ((t0$62 === 1) && (m$12$0[0] === "void")))) {
            return ["check", checker_mac$0, ["ignore"]];
          } else {
            other$11 = m$12$0;
            return ["check", checker_mac$0, expr$6];
          }
        }
      } else {
        if (((x$16 = ph$16$0), ((x$16 instanceof Array) && (x$16[0] === "check")))) {
          return ["send", ["symbol", "getChecker"], ["data", ["data", tag$0]]];
        } else {
          if (((x$17 = ph$16$0), ((x$17 instanceof Array) && (x$17[0] === "project")))) {
            return ["send", ["symbol", "getProjector"], ["data", ["data", tag$0]]];
          } else {
            m$13$0 = expr$6;
            if ((($$8171$0 = (m$13$0 instanceof Array)) && ((t0$63 = m$13$0.length), ((t0$63 === 1) && (m$13$0[0] === "void"))))) {
              return ["data", tag$0];
            } else {
              if (($$8171$0 && ((t0$63 >= 1) && (m$13$0[0] === "data")))) {
                args$4 = Array.prototype.slice.call(m$13$0, 1);
                return ["data", tag$0].concat(args$4);
              } else {
                other$12 = m$13$0;
                return ["send", ["data", tag$0], other$12];
              }
            }
          }
        }
      }
    });
    return ["macro", f$1];
  });
  t0$64 = getProjector(mac$0("#"))($targ$36);
  if (t0$64[0]) {
    hash_mac$0 = t0$64[1];
  } else {
    ___match_error($targ$36);
  }
  $targ$37 = (function(temp$36$0, temp$37$0, form$21, temp$38$0) {
    var x$18;
    var t1$34;
    var t0$65;
    if (((x$18 = temp$36$0), ((x$18 instanceof Array) && (x$18[0] === "pattern")))) {} else {
      ___match_error(temp$36$0);
    }
    t0$65 = temp$38$0;
    if (((t0$65 instanceof Array) && ((t1$34 = t0$65.length), ((t1$34 === 1) && (t0$65[0] === "void"))))) {} else {
      ___match_error(temp$38$0);
    }
    return ["ignore"];
  });
  t0$66 = getProjector(mac$0("_"))($targ$37);
  if (t0$66[0]) {
    placeholder_mac$0 = t0$66[1];
  } else {
    ___match_error($targ$37);
  }
  return exports$0;
});
(module["exports"] = $targ$14);
[];
//# sourceURL=<compile-source>
