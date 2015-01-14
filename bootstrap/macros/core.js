"use strict";
require("earlgrey-runtime");
var $targ$12;
var $0$0;
var __lt____lt____colon__$0;
var $1$0;
var expr_mac$0;
var pattern_handlers$0;
var Body$0;
var $2$0;
var parse_pattern$0;
var PatternParser$0;
var parse_clauses$0;
var util$0;
var classify_contiguous$0;
$0$0 = require("../location");
__lt____lt____colon__$0 = $0$0["<<:"];
$1$0 = require("./helpers");
expr_mac$0 = $1$0.expr_mac;
pattern_handlers$0 = $1$0.pattern_handlers;
Body$0 = $1$0.Body;
$2$0 = require("../pattern");
parse_pattern$0 = $2$0.parse_pattern;
PatternParser$0 = $2$0.PatternParser;
parse_clauses$0 = $2$0.parse_clauses;
util$0 = require("../util");
classify_contiguous$0 = util$0.classify_contiguous;
$targ$12 = (function(mac$0) {
  var t0$0;
  var t0$1;
  var t0$4;
  var t1$4;
  var t0$7;
  var t0$9;
  var t0$12;
  var t0$17;
  var t0$26;
  var t0$32;
  var t0$34;
  var t0$37;
  var t0$43;
  var t0$46;
  var t1$23;
  var t0$47;
  var t1$24;
  var t0$48;
  var t1$25;
  var t0$49;
  var t0$52;
  var t0$54;
  var t0$59;
  var t0$61;
  var $targ$14;
  var var_mac$0;
  var $targ$15;
  var set_mac$0;
  var $targ$16;
  var let_mac$0;
  var $targ$17;
  var letrec_mac$0;
  var $targ$18;
  var where_mac$0;
  var $targ$19;
  var dot_mac$0;
  var $targ$20;
  var equal_mac$0;
  var $targ$21;
  var fat_arrow_mac$0;
  var $targ$22;
  var _lambda_mac$0;
  var $targ$23;
  var genarrow_mac$0;
  var $targ$24;
  var arrow_mac$0;
  var $targ$25;
  var try_mac$0;
  var $targ$26;
  var tryop_mac$0;
  var $targ$27;
  var throw_mac$0;
  var $targ$28;
  var return_mac$0;
  var $targ$29;
  var new_mac$0;
  var $targ$30;
  var delete_mac$0;
  var $targ$31;
  var splice_mac$0;
  var $targ$32;
  var hash_mac$0;
  var $targ$33;
  var placeholder_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$14 = (function(temp$0$0, temp$1$0, form$0, argument$0) {
    var x$0;
    if (((x$0 = temp$0$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {} else {
      ___match_error(temp$0$0);
    }
    temp$1$0;
    return ["mode", "var", argument$0];
  });
  t0$0 = getProjector(mac$0("var"))($targ$14);
  if (t0$0[0]) {
    var_mac$0 = t0$0[1];
  } else {
    ___match_error($targ$14);
  }
  $targ$15 = (function(temp$2$0, temp$3$0, form$1, argument$1) {
    var x$1;
    if (((x$1 = temp$2$0), ((x$1 instanceof Array) && (x$1[0] === "pattern")))) {} else {
      ___match_error(temp$2$0);
    }
    temp$3$0;
    return ["mode", "set", argument$1];
  });
  t0$1 = getProjector(mac$0("set"))($targ$15);
  if (t0$1[0]) {
    set_mac$0 = t0$1[1];
  } else {
    ___match_error($targ$15);
  }
  $targ$16 = (function(temp$4$0, temp$5$0, form$2, argument$2) {
    var x$2;
    var t3$0;
    var t2$0;
    var t1$0;
    var t0$2;
    var construct$0;
    var bindings$0;
    var body$0;
    var m$1$0;
    var other$0;
    var m$0$0;
    var ph$0;
    ph$0 = temp$4$0;
    temp$5$0;
    m$0$0 = ph$0;
    if (((x$2 = m$0$0), ((x$2 instanceof Array) && (x$2[0] === "pattern")))) {
      return ["mode", "let", argument$2];
    } else {
      other$0 = m$0$0;
      m$1$0 = argument$2;
      if (((m$1$0 instanceof Array) && ((t0$2 = m$1$0.length), ((t0$2 === 3) && ((m$1$0[0] === "data") && ((t1$0 = getProjector(Body$0)(m$1$0[1])), (t1$0[0] && ((t2$0 = t1$0[1]), (t3$0 = t2$0.length), (t3$0 >= 0))))))))) {
        bindings$0 = Array.prototype.slice.call(t2$0, 0);
        body$0 = m$1$0[2];
        construct$0 = (function(temp$6$0) {
          var t0$3;
          var t6$0;
          var t5$0;
          var t4$0;
          var t3$1;
          var t2$1;
          var t1$1;
          var bind$0;
          var val$0;
          var xs$0;
          var $$6302$0;
          var $$6303$0;
          var m$2$0;
          var ph$1;
          ph$1 = temp$6$0;
          m$2$0 = ph$1;
          if ((($$6302$0 = (m$2$0 instanceof Array)) && ((t0$3 = m$2$0.length), (t0$3 === 0)))) {
            return body$0;
          } else {
            if (($$6302$0 && ((t0$3 >= 1) && ((t1$1 = m$2$0[0]), ((t1$1 instanceof Array) && ((t2$1 = t1$1.length), ((t2$1 === 3) && ((t1$1[0] === "send") && ((t3$1 = t1$1[1]), ((t3$1 instanceof Array) && ((t4$0 = t3$1.length), ((t4$0 === 2) && ((t3$1[0] === "symbol") && ((t3$1[1] === "=") && ((t5$0 = t1$1[2]), ((t5$0 instanceof Array) && ((t6$0 = t5$0.length), ((t6$0 === 3) && (t5$0[0] === "data"))))))))))))))))))) {
              bind$0 = t5$0[1];
              val$0 = t5$0[2];
              xs$0 = Array.prototype.slice.call(m$2$0, 1);
              return __amp__(["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], bind$0], val$0]], construct$0(xs$0)], ({"nonrecursive": true}));
            } else {
              return ___match_error(m$2$0);
            }
          }
        });
        return construct$0(bindings$0);
      } else {
        return ___match_error(m$1$0);
      }
    }
  });
  t0$4 = getProjector(mac$0("let"))($targ$16);
  if (t0$4[0]) {
    let_mac$0 = t0$4[1];
  } else {
    ___match_error($targ$16);
  }
  $targ$17 = (function(temp$7$0, form$3, temp$8$0) {
    var t4$1;
    var t3$2;
    var t2$2;
    var t1$2;
    var t0$5;
    var m$3;
    var acc$0;
    var let_bindings$0;
    var bindings$1;
    var body$1;
    temp$7$0;
    t0$5 = temp$8$0;
    if (((t0$5 instanceof Array) && ((t1$2 = t0$5.length), ((t1$2 === 3) && ((t0$5[0] === "data") && ((t2$2 = getProjector(Body$0)(t0$5[1])), (t2$2[0] && ((t3$2 = t2$2[1]), (t4$1 = t3$2.length), (t4$1 >= 0))))))))) {
      bindings$1 = Array.prototype.slice.call(t3$2, 0);
      body$1 = t0$5[2];
    } else {
      ___match_error(temp$8$0);
    }
    let_bindings$0 = ((acc$0 = []), (m$3 = null), (function() {
      $4: for (var $__0 = bindings$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$3 = $__1.value;
        {
          var t5$1;
          var t4$2;
          var t3$3;
          var t2$3;
          var t1$3;
          var t0$6;
          var b$0;
          var v$0;
          t0$6 = m$3;
          if (((t0$6 instanceof Array) && ((t1$3 = t0$6.length), ((t1$3 === 3) && ((t0$6[0] === "send") && ((t2$3 = t0$6[1]), ((t2$3 instanceof Array) && ((t3$3 = t2$3.length), ((t3$3 === 2) && ((t2$3[0] === "symbol") && ((t2$3[1] === "=") && ((t4$2 = t0$6[2]), ((t4$2 instanceof Array) && ((t5$1 = t4$2.length), ((t5$1 === 3) && (t4$2[0] === "data")))))))))))))))) {
            b$0 = t4$2[1];
            v$0 = t4$2[2];
            acc$0.push(["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], b$0], v$0]]);
          } else {
            ___match_error(m$3, "/home/olivier/git/earl-grey/src/macros/core.eg", 1090, 1132);
          }
        }
      }
    })(), acc$0);
    return ["multi"].concat(let_bindings$0).concat([body$1]);
  });
  t0$7 = getProjector(expr_mac$0)($targ$17);
  if ((t0$7[0] && ((t1$4 = getProjector(mac$0("letrec"))(t0$7[1])), t1$4[0]))) {
    letrec_mac$0 = t1$4[1];
  } else {
    ___match_error($targ$17);
  }
  $targ$18 = (function(context$0, temp$9$0, form$4, temp$10$0) {
    var t1$5;
    var t0$8;
    var body$2;
    var bindings$2;
    temp$9$0;
    t0$8 = temp$10$0;
    if (((t0$8 instanceof Array) && ((t1$5 = t0$8.length), ((t1$5 === 3) && (t0$8[0] === "data"))))) {
      body$2 = t0$8[1];
      bindings$2 = t0$8[2];
    } else {
      ___match_error(temp$10$0);
    }
    return ["send", ["symbol", "letrec"], ["data", bindings$2, body$2]];
  });
  t0$9 = getProjector(mac$0("where"))($targ$18);
  if (t0$9[0]) {
    where_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$18);
  }
  $targ$19 = (function(context$1, temp$11$0, form$5, temp$12$0) {
    var t3$4;
    var t2$4;
    var t1$6;
    var t0$10;
    var f$0;
    var expr$0;
    temp$11$0;
    t0$10 = temp$12$0;
    if (((t0$10 instanceof Array) && ((t1$6 = t0$10.length), ((t1$6 === 3) && ((t0$10[0] === "data") && ((t2$4 = t0$10[1]), ((t2$4 instanceof Array) && ((t3$4 = t2$4.length), ((t3$4 === 1) && (t2$4[0] === "void")))))))))) {
      expr$0 = t0$10[2];
    } else {
      ___match_error(temp$12$0);
    }
    f$0 = (function(temp$13$0) {
      var t0$11;
      var m$5;
      var acc$1;
      var other$1;
      var args$0;
      var x$3;
      var $$6540$0;
      var $$6541$0;
      var m$4$0;
      var ph$2;
      ph$2 = temp$13$0;
      m$4$0 = ph$2;
      if ((($$6540$0 = (m$4$0 instanceof Array)) && ((t0$11 = m$4$0.length), ((t0$11 === 2) && (m$4$0[0] === "symbol"))))) {
        x$3 = m$4$0[1];
        return ["value", x$3];
      } else {
        if (($$6540$0 && ((t0$11 >= 1) && (m$4$0[0] === "data")))) {
          args$0 = Array.prototype.slice.call(m$4$0, 1);
          return ["data"].concat(((acc$1 = []), (m$5 = null), (function() {
            $5: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$5 = $__1.value;
              {
                var arg$0;
                arg$0 = m$5;
                acc$1.push(f$0(arg$0));
              }
            }
          })(), acc$1));
        } else {
          other$1 = m$4$0;
          throw ErrorFactory(["syntax", "dot"]).create("Argument to '.' must be a symbol or an array", ({"argument": other$1}));
        }
      }
    });
    return f$0(expr$0);
  });
  t0$12 = getProjector(mac$0("."))($targ$19);
  if (t0$12[0]) {
    dot_mac$0 = t0$12[1];
  } else {
    ___match_error($targ$19);
  }
  $targ$20 = (function(temp$14$0, info$0, form$6, expr$1) {
    var x$4;
    var t1$7;
    var t0$14;
    var $targ$84;
    var lhs$0;
    var rhs$0;
    var t0$13;
    var t0$15;
    var t2$5;
    var t1$8;
    var lhs$1;
    var rhs$2;
    var s$0;
    var rhs$1;
    var $$6642$0;
    var $$6643$0;
    var $$6644$0;
    var $$6645$0;
    var m$7$0;
    var t1$9;
    var t0$16;
    var $targ$92;
    var lhs$2;
    var rhs$3;
    var other$2;
    var m$6$0;
    var ph$3;
    ph$3 = temp$14$0;
    m$6$0 = ph$3;
    if (((x$4 = m$6$0), ((x$4 instanceof Array) && (x$4[0] === "pattern")))) {
      $targ$84 = expr$1;
      t0$14 = $targ$84;
      if (((t0$14 instanceof Array) && ((t1$7 = t0$14.length), ((t1$7 === 3) && (t0$14[0] === "data"))))) {
        lhs$0 = t0$14[1];
        rhs$0 = t0$14[2];
      } else {
        ___match_error($targ$84);
      }
      return ["default", lhs$0, rhs$0];
    } else {
      if (((m$6$0 instanceof Array) && ((t0$13 = m$6$0.length), ((t0$13 === 2) && ((m$6$0[0] === "expr") && (m$6$0[1] === "data")))))) {
        m$7$0 = expr$1;
        if ((($$6642$0 = (m$7$0 instanceof Array)) && ((t0$15 = m$7$0.length), ((t0$15 === 1) && (m$7$0[0] === "void"))))) {
          return ["assoc"];
        } else {
          if (($$6642$0 && (($$6644$0 = (t0$15 === 3)) && (($$6645$0 = (m$7$0[0] === "data")) && ((t1$8 = m$7$0[1]), ((t1$8 instanceof Array) && ((t2$5 = t1$8.length), ((t2$5 === 2) && (t1$8[0] === "symbol"))))))))) {
            s$0 = t1$8[1];
            rhs$1 = m$7$0[2];
            return ["assoc", ["value", s$0], rhs$1];
          } else {
            if ($$6645$0) {
              lhs$1 = m$7$0[1];
              rhs$2 = m$7$0[2];
              return ["objsplice", ["multi", parse_pattern$0(info$0, lhs$1, __lt____lt____colon__$0(["use", info$0.scope, rhs$2], rhs$2), pattern_handlers$0.build_object)]];
            } else {
              return ___match_error(m$7$0);
            }
          }
        }
      } else {
        other$2 = m$6$0;
        $targ$92 = expr$1;
        t0$16 = $targ$92;
        if (((t0$16 instanceof Array) && ((t1$9 = t0$16.length), ((t1$9 === 3) && (t0$16[0] === "data"))))) {
          lhs$2 = t0$16[1];
          rhs$3 = t0$16[2];
        } else {
          ___match_error($targ$92);
        }
        return parse_pattern$0(info$0, lhs$2, __lt____lt____colon__$0(["use", info$0.scope, rhs$3], rhs$3), pattern_handlers$0.declare_variables);
      }
    }
  });
  t0$17 = getProjector(mac$0("="))($targ$20);
  if (t0$17[0]) {
    equal_mac$0 = t0$17[1];
  } else {
    ___match_error($targ$20);
  }
  $targ$21 = (function(temp$15$0, temp$16$0, temp$17$0, temp$18$0) {
    var t0$18;
    var t1$10;
    var t0$19;
    var x$5;
    var x$6;
    var t0$21;
    var t0$22;
    var bridge$$6757$0;
    var t0$20;
    var t0$23;
    var t0$24;
    var bridge$$6759$0;
    var k$1;
    var rhs$5;
    var k$0;
    var $$6760$0;
    var $$6761$0;
    var $$6762$0;
    var m$9$0;
    var x$7;
    var t2$6;
    var t1$11;
    var t0$25;
    var $targ$111;
    var stmts$0;
    var other$3;
    var m$8$0;
    var ph$4;
    var env$0;
    var lhs$3;
    var rhs$4;
    ph$4 = temp$15$0;
    t0$18 = temp$16$0;
    if (___hasprop(t0$18, "env")) {
      env$0 = t0$18.env;
    } else {
      ___match_error(temp$16$0);
    }
    temp$17$0;
    t0$19 = temp$18$0;
    if (((t0$19 instanceof Array) && ((t1$10 = t0$19.length), ((t1$10 === 3) && (t0$19[0] === "data"))))) {
      lhs$3 = t0$19[1];
      rhs$4 = t0$19[2];
    } else {
      ___match_error(temp$18$0);
    }
    m$8$0 = ph$4;
    if (((x$5 = m$8$0), ((x$5 instanceof Array) && (x$5[0] === "pattern")))) {
      m$9$0 = [lhs$3, rhs$4];
      if ((($$6760$0 = (m$9$0 instanceof Array)) && ((t0$20 = m$9$0.length), (($$6762$0 = (t0$20 === 2)) && (((x$6 = m$9$0[0]), ((x$6 instanceof Array) && (x$6[0] === "void"))) && ((bridge$$6757$0 = m$9$0[1]), (((bridge$$6757$0 instanceof Array) && ((t0$21 = bridge$$6757$0.length), ((t0$21 === 2) && ((bridge$$6757$0[0] === "symbol") && ((k$0 = bridge$$6757$0[1]), true))))) || ((bridge$$6757$0 instanceof Array) && ((t0$22 = bridge$$6757$0.length), ((t0$22 === 2) && ((bridge$$6757$0[0] === "value") && ((k$0 = bridge$$6757$0[1]), true)))))))))))) {
        return ["assoc", ["value", k$0], __amp__(__lt____lt____colon__$0(["symbol", k$0], rhs$4), ({"env": env$0}))];
      } else {
        if (($$6762$0 && ((bridge$$6759$0 = m$9$0[0]), (((bridge$$6759$0 instanceof Array) && ((t0$23 = bridge$$6759$0.length), ((t0$23 === 2) && ((bridge$$6759$0[0] === "symbol") && ((k$1 = bridge$$6759$0[1]), true))))) || ((bridge$$6759$0 instanceof Array) && ((t0$24 = bridge$$6759$0.length), ((t0$24 === 2) && ((bridge$$6759$0[0] === "value") && ((k$1 = bridge$$6759$0[1]), true))))))))) {
          rhs$5 = m$9$0[1];
          return ["assoc", ["value", k$1], rhs$5];
        } else {
          return ___match_error(m$9$0);
        }
      }
    } else {
      if (((x$7 = m$8$0), ((x$7 instanceof Array) && (x$7[0] === "test")))) {
        $targ$111 = rhs$4;
        t0$25 = getProjector(Body$0)($targ$111);
        if ((t0$25[0] && ((t1$11 = t0$25[1]), (t2$6 = t1$11.length), (t2$6 >= 0)))) {
          stmts$0 = Array.prototype.slice.call(t1$11, 0);
        } else {
          ___match_error($targ$111);
        }
        return ["blocktest", lhs$3, stmts$0];
      } else {
        other$3 = m$8$0;
        return ["assoc", lhs$3, rhs$4];
      }
    }
  });
  t0$26 = getProjector(mac$0("=>"))($targ$21);
  if (t0$26[0]) {
    fat_arrow_mac$0 = t0$26[1];
  } else {
    ___match_error($targ$21);
  }
  $targ$22 = (function(context$2, info$1, form$7, temp$19$0) {
    var t2$7;
    var t1$12;
    var t0$27;
    var t4$3;
    var t3$5;
    var t2$8;
    var t1$13;
    var t0$28;
    var m$12;
    var acc$2;
    var decls$0;
    var newargs$0;
    var body2$1;
    var a$0;
    var other$6;
    var fw$0;
    var m$11$0;
    var wrap$0;
    var pp$0;
    var args$1;
    var arg$1;
    var pre$0;
    var body$3;
    var post$0;
    var generator$0;
    var m$10$0;
    var ph$5;
    ph$5 = temp$19$0;
    m$10$0 = ph$5;
    if (((m$10$0 instanceof Array) && ((t0$27 = m$10$0.length), (((t0$27 >= 5) && (t0$27 <= 6)) && ((m$10$0[0] === "data") && ((t1$12 = m$10$0[1]), ((t1$12 instanceof Array) && ((t2$7 = t1$12.length), ((t2$7 >= 1) && (t1$12[0] === "data")))))))))) {
      args$1 = Array.prototype.slice.call(t1$12, 1);
      arg$1 = t1$12;
      pre$0 = m$10$0[2];
      body$3 = m$10$0[3];
      post$0 = m$10$0[4];
      generator$0 = ((5 >= t0$27) ? ["value", false] : m$10$0[5]);
      wrap$0 = (function(body2$0) {
        var body3$0;
        body3$0 = (equal(post$0, ["value", null]) ? body2$0 : ["multi", body2$0, post$0]);
        if (equal(pre$0, ["value", null])) {
          return body3$0;
        } else {
          return ["multi", pre$0, body3$0];
        }
      });
      pp$0 = PatternParser$0(info$1, arg$1, ({
        "indexable": true,
        "allow_nested": true
      }));
      m$11$0 = pp$0.pattern;
      if (((m$11$0 instanceof Array) && ((t0$28 = m$11$0.length), ((t0$28 === 5) && ((m$11$0[0] === "array_pattern") && ((fw$0 = m$11$0[1]), (t1$13 = m$11$0[2]), ((t1$13 instanceof Array) && ((t2$8 = t1$13.length), ((t2$8 === 0) && ((t3$5 = m$11$0[3]), ((t3$5 instanceof Array) && ((t4$3 = t3$5.length), ((t4$3 === 0) && (m$11$0[4] === (void 0))))))))))))))) {
        decls$0 = (pp$0.specials.match ? [["declare", ["symbol", "ph"]]] : []);
        newargs$0 = ((acc$2 = []), (m$12 = null), (function() {
          $6: for (var $__0 = zip(fw$0, args$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$12 = $__1.value;
            {
              var t1$14;
              var t3$6;
              var t2$9;
              var t1$15;
              var newv$0;
              var other$4;
              var t0$30;
              var expr$2;
              var v$1;
              var t0$29;
              var arg$2;
              var ph$6$0;
              t0$29 = m$12;
              if (((t0$29 instanceof Array) && ((t1$14 = t0$29.length), (t1$14 === 2)))) {
                ph$6$0 = t0$29[0];
                arg$2 = t0$29[1];
                t0$30 = ph$6$0;
                if (((t0$30 instanceof Array) && ((t1$15 = t0$30.length), ((t1$15 === 2) && ((t0$30[0] === "assign") && ((t2$9 = t0$30[1]), (expr$2 = t2$9), ((t2$9 instanceof Array) && ((t3$6 = t2$9.length), ((t3$6 === 2) && (t2$9[0] === "symbol")))))))))) {
                  v$1 = t2$9[1];
                  acc$2.push(expr$2);
                } else {
                  other$4 = ph$6$0;
                  acc$2.push(((newv$0 = __amp__(["symbol", info$1.gensym("temp")], ({"env": info$1.mkenv()}))), decls$0.push(parse_pattern$0(info$1, arg$2, newv$0, __amp__(pattern_handlers$0.declare_variables, ({
                    "tags": ({"declare_mode": "let"}),
                    "special": (function(temp$20$0, value$0) {
                      var t1$16;
                      var t0$31;
                      var other$5;
                      var m$13$0;
                      var ph$7;
                      var expr$3;
                      t0$31 = temp$20$0;
                      if (((t0$31 instanceof Array) && ((t1$16 = t0$31.length), ((t1$16 === 2) && (t0$31[0] === "special"))))) {
                        ph$7 = t0$31[1];
                        expr$3 = t0$31;
                      } else {
                        ___match_error(temp$20$0);
                      }
                      m$13$0 = ph$7;
                      if ((m$13$0 === "match")) {
                        return ["assign", ["symbol", "ph"]];
                      } else {
                        other$5 = m$13$0;
                        throw ErrorFactory(["syntax", "pattern", "special"]).create("Special token cannot be used here", ({"special": expr$3}));
                      }
                    })
                  })))), newv$0));
                }
              } else {
                ___match_error(m$12, "/home/olivier/git/earl-grey/src/macros/core.eg", 3216, 4158);
              }
            }
          }
        })(), acc$2);
        return ["lambda", newargs$0, wrap$0(["multi"].concat(decls$0).concat([(pp$0.specials.match ? ["send", ["symbol", "match"], ["data", ["symbol", "ph"], body$3]] : body$3)])), generator$0];
      } else {
        other$6 = m$11$0;
        a$0 = __lt____lt____colon__$0(["symbol", "arguments"], arg$1);
        body2$1 = ["send", ["send", ["symbol", "match"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "indexable"]]]], ["data", a$0, ["send", ["symbol", "->"], ["data", arg$1, body$3]]]];
        return ["lambda", [], wrap$0(body2$1), generator$0];
      }
    } else {
      return ___match_error(m$10$0);
    }
  });
  t0$32 = getProjector(mac$0("_lambda"))($targ$22);
  if (t0$32[0]) {
    _lambda_mac$0 = t0$32[1];
  } else {
    ___match_error($targ$22);
  }
  $targ$23 = (function(ctx$0, temp$21$0, form$8, temp$22$0) {
    var t0$33;
    var other$7;
    var args$2;
    var body$4;
    var m$14$0;
    var ph$8;
    temp$21$0;
    ph$8 = temp$22$0;
    m$14$0 = ph$8;
    if (((m$14$0 instanceof Array) && ((t0$33 = m$14$0.length), ((t0$33 === 3) && (m$14$0[0] === "data"))))) {
      args$2 = m$14$0[1];
      body$4 = m$14$0[2];
      return ["send", ["symbol", "_lambda"], ["data", args$2, ["value", null], body$4, ["value", null], ["value", true]]];
    } else {
      other$7 = m$14$0;
      throw ErrorFactory(["syntax", "lambda"]).create("Bad lambda syntax", ({"node": other$7}));
    }
  });
  t0$34 = getProjector(mac$0("*->"))($targ$23);
  if (t0$34[0]) {
    genarrow_mac$0 = t0$34[1];
  } else {
    ___match_error($targ$23);
  }
  $targ$24 = (function(temp$23$0, temp$24$0, form$9, expr$4) {
    var x$8;
    var t1$17;
    var t0$35;
    var $targ$150;
    var lhs$4;
    var rhs$6;
    var t0$36;
    var other$9;
    var args$3;
    var body$5;
    var m$16$0;
    var other$8;
    var m$15$0;
    var ph$9;
    ph$9 = temp$23$0;
    temp$24$0;
    m$15$0 = ph$9;
    if (form$9.name) {
      console.log(form$9.name);
    }
    if (((x$8 = m$15$0), ((x$8 instanceof Array) && (x$8[0] === "clause")))) {
      $targ$150 = expr$4;
      t0$35 = $targ$150;
      if (((t0$35 instanceof Array) && ((t1$17 = t0$35.length), ((t1$17 === 3) && (t0$35[0] === "data"))))) {
        lhs$4 = t0$35[1];
        rhs$6 = t0$35[2];
      } else {
        ___match_error($targ$150);
      }
      return ["clause", lhs$4, rhs$6];
    } else {
      other$8 = m$15$0;
      m$16$0 = expr$4;
      if (((m$16$0 instanceof Array) && ((t0$36 = m$16$0.length), ((t0$36 === 3) && (m$16$0[0] === "data"))))) {
        args$3 = m$16$0[1];
        body$5 = m$16$0[2];
        return ["send", ["symbol", "_lambda"], ["data", args$3, ["value", null], body$5, ["value", null]]];
      } else {
        other$9 = m$16$0;
        throw ErrorFactory(["syntax", "lambda"]).create("Bad lambda syntax", ({"node": other$9}));
      }
    }
  });
  t0$37 = getProjector(mac$0("->"))($targ$24);
  if (t0$37[0]) {
    arrow_mac$0 = t0$37[1];
  } else {
    ___match_error($targ$24);
  }
  $targ$25 = (function(temp$25$0, info$2, form$10, temp$26$0) {
    var t4$4;
    var t3$7;
    var t2$10;
    var t1$18;
    var t0$38;
    var t12$0;
    var t11$0;
    var $targ$183;
    var $targ$182;
    var $targ$181;
    var $targ$180;
    var $targ$179;
    var $targ$178;
    var $targ$177;
    var $targ$176;
    var $targ$175;
    var $targ$174;
    var t0$41;
    var $targ$189;
    var $targ$188;
    var $targ$187;
    var $targ$186;
    var $targ$197;
    var $targ$196;
    var $targ$195;
    var $targ$194;
    var $targ$193;
    var $targ$192;
    var $targ$191;
    var $targ$190;
    var msg$0;
    var otherwise$0;
    var a$3;
    var c$1;
    var a$2;
    var b$4;
    var a$1;
    var b$3;
    var c$0;
    var $$7317$0;
    var $$7318$0;
    var $$7319$0;
    var $$7320$0;
    var $$7321$0;
    var $$7322$0;
    var $$7323$0;
    var $$7324$0;
    var t1$20;
    var t2$12;
    var t3$9;
    var t4$6;
    var t5$2;
    var t6$1;
    var t7$0;
    var t8$0;
    var t9$0;
    var t10$0;
    var m$19$0;
    var t1$21;
    var t0$42;
    var t0$39;
    var other$11;
    var grouped$0;
    var $targ$163;
    var stmts$1;
    var clauses$0;
    var finally$1;
    var $$7196$0;
    var $$7197$0;
    var $$7198$0;
    var $$7199$0;
    var m$17$0;
    var ph$10;
    var parts$0;
    ph$10 = temp$25$0;
    t0$38 = temp$26$0;
    if (((t0$38 instanceof Array) && ((t1$18 = t0$38.length), ((t1$18 === 2) && ((t0$38[0] === "data") && ((t2$10 = getProjector(Body$0)(t0$38[1])), (t2$10[0] && ((t3$7 = t2$10[1]), (t4$4 = t3$7.length), (t4$4 >= 0))))))))) {
      parts$0 = Array.prototype.slice.call(t3$7, 0);
    } else {
      ___match_error(temp$26$0);
    }
    m$17$0 = ph$10;
    grouped$0 = classify_contiguous$0(parts$0, (function(temp$27$0) {
      var $targ$169;
      var $targ$168;
      var t2$11;
      var t1$19;
      var t0$40;
      var $targ$171;
      var $targ$170;
      var other$10;
      var e$0;
      var b$2;
      var b$1;
      var $$7248$0;
      var $$7249$0;
      var $$7250$0;
      var $$7251$0;
      var $$7252$0;
      var $$7253$0;
      var $$7254$0;
      var $$7255$0;
      var $$7256$0;
      var t3$8;
      var t4$5;
      var m$18$0;
      var ph$11;
      ph$11 = temp$27$0;
      m$18$0 = ph$11;
      if ((($$7248$0 = (m$18$0 instanceof Array)) && ((t0$40 = m$18$0.length), (($$7250$0 = (t0$40 === 3)) && (($$7251$0 = (m$18$0[0] === "send")) && ((t1$19 = m$18$0[1]), (($$7253$0 = (t1$19 instanceof Array)) && ((t2$11 = t1$19.length), (($$7255$0 = (t2$11 === 2)) && (($$7256$0 = (t1$19[0] === "symbol")) && ((t1$19[1] === "finally") && (($targ$168 = m$18$0[2]), (t3$8 = $targ$168), ((t3$8 instanceof Array) && (($targ$169 = t3$8.length), (t4$5 = $targ$169), ((t4$5 === 2) && (t3$8[0] === "data")))))))))))))))) {
        b$1 = t3$8[1];
        return "finally";
      } else {
        if (($$7256$0 && ((t1$19[1] === "->") && (($targ$170 = m$18$0[2]), (t3$8 = $targ$170), ((t3$8 instanceof Array) && (($targ$171 = t3$8.length), (t4$5 = $targ$171), ((t4$5 === 3) && (t3$8[0] === "data")))))))) {
          e$0 = t3$8[1];
          b$2 = t3$8[2];
          return "clause";
        } else {
          other$10 = m$18$0;
          return "stmt";
        }
      }
    }));
    $targ$163 = ((m$19$0 = grouped$0), ((($$7317$0 = (m$19$0 instanceof Array)) && ((t0$41 = m$19$0.length), ((t0$41 === 3) && (($targ$174 = m$19$0[0]), (t1$20 = $targ$174), ((t1$20 instanceof Array) && (($targ$175 = t1$20.length), (t2$12 = $targ$175), ((t2$12 >= 1) && ((t1$20[0] === "stmt") && ((a$1 = Array.prototype.slice.call(t1$20, 1)), ($targ$176 = m$19$0[1]), (t3$9 = $targ$176), ((t3$9 instanceof Array) && (($targ$177 = t3$9.length), (t4$6 = $targ$177), ((t4$6 >= 1) && ((t3$9[0] === "clause") && ((b$3 = Array.prototype.slice.call(t3$9, 1)), ($targ$178 = m$19$0[2]), (t5$2 = $targ$178), ((t5$2 instanceof Array) && (($targ$179 = t5$2.length), (t6$1 = $targ$179), ((t6$1 === 2) && ((t5$2[0] === "finally") && (($targ$180 = t5$2[1]), (t7$0 = $targ$180), ((t7$0 instanceof Array) && (($targ$181 = t7$0.length), (t8$0 = $targ$181), ((t8$0 === 3) && ((t7$0[0] === "send") && (($targ$182 = t7$0[1]), (t9$0 = $targ$182), ((t9$0 instanceof Array) && (($targ$183 = t9$0.length), (t10$0 = $targ$183), ((t10$0 === 2) && ((t9$0[0] === "symbol") && ((t9$0[1] === "finally") && ((t11$0 = t7$0[2]), ((t11$0 instanceof Array) && ((t12$0 = t11$0.length), ((t12$0 === 2) && (t11$0[0] === "data")))))))))))))))))))))))))))))))))) ? ((c$0 = t11$0[1]), [a$1, b$3, c$0]) : (($$7317$0 && (($$7319$0 = (t0$41 === 2)) && (($targ$186 = m$19$0[0]), (t1$20 = $targ$186), (($$7321$0 = (t1$20 instanceof Array)) && (($targ$187 = t1$20.length), (t2$12 = $targ$187), (($$7323$0 = (t2$12 >= 1)) && (($$7324$0 = (t1$20[0] === "stmt")) && ((a$2 = Array.prototype.slice.call(t1$20, 1)), ($targ$188 = m$19$0[1]), (t3$9 = $targ$188), ((t3$9 instanceof Array) && (($targ$189 = t3$9.length), (t4$6 = $targ$189), ((t4$6 >= 1) && (t3$9[0] === "clause")))))))))))) ? ((b$4 = Array.prototype.slice.call(t3$9, 1)), [a$2, b$4, null]) : (($$7324$0 && ((a$3 = Array.prototype.slice.call(t1$20, 1)), ($targ$190 = m$19$0[1]), (t3$9 = $targ$190), ((t3$9 instanceof Array) && (($targ$191 = t3$9.length), (t4$6 = $targ$191), ((t4$6 === 2) && ((t3$9[0] === "finally") && (($targ$192 = t3$9[1]), (t5$2 = $targ$192), ((t5$2 instanceof Array) && (($targ$193 = t5$2.length), (t6$1 = $targ$193), ((t6$1 === 3) && ((t5$2[0] === "send") && (($targ$194 = t5$2[1]), (t7$0 = $targ$194), ((t7$0 instanceof Array) && (($targ$195 = t7$0.length), (t8$0 = $targ$195), ((t8$0 === 2) && ((t7$0[0] === "symbol") && ((t7$0[1] === "finally") && (($targ$196 = t5$2[2]), (t9$0 = $targ$196), ((t9$0 instanceof Array) && (($targ$197 = t9$0.length), (t10$0 = $targ$197), ((t10$0 === 2) && (t9$0[0] === "data")))))))))))))))))))))) ? ((c$1 = t9$0[1]), [a$3, [], c$1]) : ((otherwise$0 = m$19$0), (msg$0 = ["try expects a list of statements", "and one or more catch clauses and/or", "a finally clause"].join(" ")), (function() {
      throw ErrorFactory(["syntax", "try"]).create(msg$0, ({"node": form$10}));
    })())))));
    t0$42 = $targ$163;
    if (((t0$42 instanceof Array) && ((t1$21 = t0$42.length), (t1$21 === 3)))) {
      stmts$1 = t0$42[0];
      clauses$0 = t0$42[1];
      finally$1 = t0$42[2];
    } else {
      ___match_error($targ$163);
    }
    if ((($$7196$0 = (m$17$0 instanceof Array)) && ((t0$39 = m$17$0.length), (($$7198$0 = (t0$39 === 2)) && (($$7199$0 = (m$17$0[0] === "expr")) && (m$17$0[1] === "multi")))))) {
      return ["nostep", form$10];
    } else {
      if (($$7199$0 && (m$17$0[1] === "ignore"))) {
        clauses$0.push(info$2.mkenv().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
        return ["js_try", ["multi"].concat(stmts$1), ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$0(info$2, ["symbol", "excv"], clauses$0, ({"wrap": (function(x$9) {
            return x$9;
          })}))]], (finally$1 || ["void"])];
      } else {
        other$11 = m$17$0;
        clauses$0.push(info$2.mkenv().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
        return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "rval"]], ["symbol", "false"]]], ["multi", ["js_try", ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], ["multi"].concat(stmts$1)]], ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$0(info$2, ["symbol", "excv"], clauses$0, ({"wrap": (function(x$10) {
            return ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], x$10]];
          })}))]], (finally$1 || ["void"])], ["symbol", "rval"]]]];
      }
    }
  });
  t0$43 = getProjector(mac$0("try"))($targ$25);
  if (t0$43[0]) {
    try_mac$0 = t0$43[1];
  } else {
    ___match_error($targ$25);
  }
  $targ$26 = (function(temp$28$0, info$3, form$11, temp$29$0) {
    var t4$7;
    var t3$10;
    var t2$13;
    var t1$22;
    var t0$44;
    var t0$45;
    var other$12;
    var $$7527$0;
    var $$7528$0;
    var $$7529$0;
    var $$7530$0;
    var m$20$0;
    var ph$12;
    var expr$5;
    var clauses$1;
    ph$12 = temp$28$0;
    t0$44 = temp$29$0;
    if (((t0$44 instanceof Array) && ((t1$22 = t0$44.length), ((t1$22 === 3) && ((t0$44[0] === "data") && ((expr$5 = t0$44[1]), (t2$13 = getProjector(Body$0)(t0$44[2])), (t2$13[0] && ((t3$10 = t2$13[1]), (t4$7 = t3$10.length), (t4$7 >= 0))))))))) {
      clauses$1 = Array.prototype.slice.call(t3$10, 0);
    } else {
      ___match_error(temp$29$0);
    }
    m$20$0 = ph$12;
    if ((($$7527$0 = (m$20$0 instanceof Array)) && ((t0$45 = m$20$0.length), (($$7529$0 = (t0$45 === 2)) && (($$7530$0 = (m$20$0[0] === "expr")) && (m$20$0[1] === "multi")))))) {
      return ["nostep", form$11];
    } else {
      if (($$7530$0 && (m$20$0[1] === "ignore"))) {
        clauses$1.push(info$3.mkenv().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
        return ["js_try", expr$5, ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$0(info$3, ["symbol", "excv"], clauses$1, ({"wrap": (function(x$11) {
            return x$11;
          })}))]], ["void"]];
      } else {
        other$12 = m$20$0;
        clauses$1.push(info$3.mkenv().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
        return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "rval"]], ["symbol", "false"]]], ["multi", ["js_try", ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], expr$5]], ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$0(info$3, ["symbol", "excv"], clauses$1, ({"wrap": (function(x$12) {
            return ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], x$12]];
          })}))]], ["void"]], ["symbol", "rval"]]]];
      }
    }
  });
  t0$46 = getProjector(mac$0("!!"))($targ$26);
  if (t0$46[0]) {
    tryop_mac$0 = t0$46[1];
  } else {
    ___match_error($targ$26);
  }
  $targ$27 = (function(temp$30$0, form$12, arg$3) {
    temp$30$0;
    return ["js_throw", arg$3];
  });
  t0$47 = getProjector(expr_mac$0)($targ$27);
  if ((t0$47[0] && ((t1$23 = getProjector(mac$0("throw"))(t0$47[1])), t1$23[0]))) {
    throw_mac$0 = t1$23[1];
  } else {
    ___match_error($targ$27);
  }
  $targ$28 = (function(temp$31$0, form$13, arg$4) {
    temp$31$0;
    return ["js_return", arg$4];
  });
  t0$48 = getProjector(expr_mac$0)($targ$28);
  if ((t0$48[0] && ((t1$24 = getProjector(mac$0("return"))(t0$48[1])), t1$24[0]))) {
    return_mac$0 = t1$24[1];
  } else {
    ___match_error($targ$28);
  }
  $targ$29 = (function(temp$32$0, form$14, arg$5) {
    temp$32$0;
    return ["js_new", arg$5];
  });
  t0$49 = getProjector(expr_mac$0)($targ$29);
  if ((t0$49[0] && ((t1$25 = getProjector(mac$0("new"))(t0$49[1])), t1$25[0]))) {
    new_mac$0 = t1$25[1];
  } else {
    ___match_error($targ$29);
  }
  $targ$30 = (function(context$3, temp$33$0, form$15, temp$34$0) {
    var t0$50;
    var t0$51;
    var other$13;
    var s$1;
    var m$21$0;
    var ph$13;
    var arg$6;
    temp$33$0;
    t0$50 = temp$34$0;
    arg$6 = t0$50;
    ph$13 = t0$50;
    m$21$0 = ph$13;
    if (((m$21$0 instanceof Array) && ((t0$51 = m$21$0.length), ((t0$51 === 2) && (m$21$0[0] === "symbol"))))) {
      s$1 = m$21$0[1];
      return ["undeclare", arg$6];
    } else {
      other$13 = m$21$0;
      return ["js_delete", other$13];
    }
  });
  t0$52 = getProjector(mac$0("delete"))($targ$30);
  if (t0$52[0]) {
    delete_mac$0 = t0$52[1];
  } else {
    ___match_error($targ$30);
  }
  $targ$31 = (function(context$4, temp$35$0, form$16, temp$36$0) {
    var t4$8;
    var t3$11;
    var t2$14;
    var t1$26;
    var t0$53;
    var stmts$2;
    temp$35$0;
    t0$53 = temp$36$0;
    if (((t0$53 instanceof Array) && ((t1$26 = t0$53.length), ((t1$26 === 2) && ((t0$53[0] === "data") && ((t2$14 = getProjector(Body$0)(t0$53[1])), (t2$14[0] && ((t3$11 = t2$14[1]), (t4$8 = t3$11.length), (t4$8 >= 0))))))))) {
      stmts$2 = Array.prototype.slice.call(t3$11, 0);
    } else {
      ___match_error(temp$36$0);
    }
    return ["splice"].concat(stmts$2);
  });
  t0$54 = getProjector(mac$0("splice"))($targ$31);
  if (t0$54[0]) {
    splice_mac$0 = t0$54[1];
  } else {
    ___match_error($targ$31);
  }
  $targ$32 = (function(context$5, temp$37$0, form$17, temp$38$0) {
    var t5$3;
    var t4$9;
    var t3$12;
    var t2$15;
    var t1$27;
    var t0$55;
    var f$1;
    var $targ$233;
    var tag$0;
    temp$37$0;
    t0$55 = temp$38$0;
    if (((t0$55 instanceof Array) && ((t1$27 = t0$55.length), ((t1$27 === 3) && ((t0$55[0] === "data") && ((t2$15 = t0$55[1]), ((t2$15 instanceof Array) && ((t3$12 = t2$15.length), ((t3$12 === 1) && ((t2$15[0] === "void") && ((t4$9 = t0$55[2]), ((t4$9 instanceof Array) && ((t5$3 = t4$9.length), ((t5$3 === 2) && (t4$9[0] === "symbol"))))))))))))))) {
      tag$0 = t4$9[1];
    } else {
      ___match_error(temp$38$0);
    }
    $targ$233 = ["value", tag$0];
    tag$0 = $targ$233;
    f$1 = (function(temp$39$0, temp$40$0, form$18, expr$6) {
      var x$13;
      var t0$57;
      var other$14;
      var subp$0;
      var $$7828$0;
      var $$7829$0;
      var m$23$0;
      var checker_mac$0;
      var x$14;
      var x$15;
      var t0$58;
      var other$15;
      var args$4;
      var $$7895$0;
      var $$7896$0;
      var m$24$0;
      var m$22$0;
      var ph$14;
      ph$14 = temp$39$0;
      temp$40$0;
      m$22$0 = ph$14;
      if (((x$13 = m$22$0), ((x$13 instanceof Array) && (x$13[0] === "pattern")))) {
        checker_mac$0 = ["macro", (function(context$6, temp$41$0, form$19, temp$42$0) {
          var t1$28;
          var t0$56;
          var expr$7;
          temp$41$0;
          t0$56 = temp$42$0;
          if (((t0$56 instanceof Array) && ((t1$28 = t0$56.length), ((t1$28 === 2) && (t0$56[0] === "data"))))) {
            expr$7 = t0$56[1];
          } else {
            ___match_error(temp$42$0);
          }
          return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "x"], expr$7]], ["send", ["symbol", "and"], ["data", ["send", ["symbol", "instanceof"], ["data", ["symbol", "x"], ["symbol", "Array"]]], ["send", ["symbol", "==="], ["data", ["send", ["symbol", "x"], ["value", 0]], tag$0]]]]]];
        })];
        m$23$0 = expr$6;
        if ((($$7828$0 = (m$23$0 instanceof Array)) && ((t0$57 = m$23$0.length), ((t0$57 >= 1) && (m$23$0[0] === "data"))))) {
          subp$0 = Array.prototype.slice.call(m$23$0, 1);
          return ["data", tag$0].concat(subp$0);
        } else {
          if (($$7828$0 && ((t0$57 === 1) && (m$23$0[0] === "void")))) {
            return ["check", checker_mac$0, ["ignore"]];
          } else {
            other$14 = m$23$0;
            return ["check", checker_mac$0, expr$6];
          }
        }
      } else {
        if (((x$14 = m$22$0), ((x$14 instanceof Array) && (x$14[0] === "check")))) {
          return ["send", ["symbol", "getChecker"], ["data", ["data", tag$0]]];
        } else {
          if (((x$15 = m$22$0), ((x$15 instanceof Array) && (x$15[0] === "project")))) {
            return ["send", ["symbol", "getProjector"], ["data", ["data", tag$0]]];
          } else {
            m$22$0;
            m$24$0 = expr$6;
            if ((($$7895$0 = (m$24$0 instanceof Array)) && ((t0$58 = m$24$0.length), ((t0$58 === 1) && (m$24$0[0] === "void"))))) {
              return ["data", tag$0];
            } else {
              if (($$7895$0 && ((t0$58 >= 1) && (m$24$0[0] === "data")))) {
                args$4 = Array.prototype.slice.call(m$24$0, 1);
                return ["data", tag$0].concat(args$4);
              } else {
                other$15 = m$24$0;
                return ["send", ["data", tag$0], other$15];
              }
            }
          }
        }
      }
    });
    return ["macro", f$1];
  });
  t0$59 = getProjector(mac$0("#"))($targ$32);
  if (t0$59[0]) {
    hash_mac$0 = t0$59[1];
  } else {
    ___match_error($targ$32);
  }
  $targ$33 = (function(temp$43$0, temp$44$0, form$20, temp$45$0) {
    var x$16;
    var t1$29;
    var t0$60;
    if (((x$16 = temp$43$0), ((x$16 instanceof Array) && (x$16[0] === "pattern")))) {} else {
      ___match_error(temp$43$0);
    }
    temp$44$0;
    t0$60 = temp$45$0;
    if (((t0$60 instanceof Array) && ((t1$29 = t0$60.length), ((t1$29 === 1) && (t0$60[0] === "void"))))) {} else {
      ___match_error(temp$45$0);
    }
    return ["ignore"];
  });
  t0$61 = getProjector(mac$0("_"))($targ$33);
  if (t0$61[0]) {
    placeholder_mac$0 = t0$61[1];
  } else {
    ___match_error($targ$33);
  }
  return exports$0;
});
(module["exports"] = $targ$12);
//# sourceURL=<compile-source>
