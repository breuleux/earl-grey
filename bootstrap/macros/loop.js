"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$0;
var $0$0;
var expr_mac$0;
var overridable$0;
var build_loop$0;
var match_error$0;
var Body$0;
var setup_label$0;
var break_mac$0;
var continue_mac$0;
$0$0 = require("./helpers");
expr_mac$0 = $0$0.expr_mac;
overridable$0 = $0$0.overridable;
build_loop$0 = $0$0.build_loop;
match_error$0 = $0$0.match_error;
Body$0 = $0$0.Body;
setup_label$0 = (function setup_label(label$0, env$0, body$0) {
  return ["bind", __amp__(["symbol", "break"], ({"env": env$0})), ["macro", break_mac$0(label$0)], ["bind", __amp__(["symbol", "continue"], ({"env": env$0})), ["macro", continue_mac$0(label$0)], ["js_label", ["value", label$0], body$0]]];
});
break_mac$0 = (function break_mac(default_label$0) {
  return overridable$0((function(context$0, temp$0$0, form$0, temp$1$0) {
    var t0$0;
    var v$1;
    var v$0;
    var $$11054$0;
    var $$11055$0;
    var $$11056$0;
    var t0$1;
    var t1$0;
    var expr$0;
    var ph$0$0;
    t0$0 = temp$1$0;
    expr$0 = t0$0;
    ph$0$0 = t0$0;
    t0$1 = ph$0$0;
    if (((t0$1 instanceof Array) && ((t1$0 = t0$1.length), ((t1$0 === 1) && ((t0$1[0] === "void") && default_label$0))))) {
      return ["js_break", ["value", default_label$0]];
    } else {
      t1$0 = t0$1.length;
      if (((t1$0 === 1) && (t0$1[0] === "void"))) {
        return ["js_break"];
      } else {
        if ((($$11056$0 = (t1$0 === 2)) && (t0$1[0] === "value"))) {
          v$0 = t0$1[1];
          return ["js_break", expr$0];
        } else {
          if (($$11056$0 && (t0$1[0] === "symbol"))) {
            v$1 = t0$1[1];
            return ["js_break", ["value", v$1]];
          } else {
            return ___match_error(ph$0$0);
          }
        }
      }
    }
  }));
});
continue_mac$0 = (function continue_mac(default_label$1) {
  return overridable$0((function(context$1, temp$2$0, form$1, temp$3$0) {
    var t0$2;
    var v$3;
    var v$2;
    var $$11109$0;
    var $$11110$0;
    var $$11111$0;
    var t0$3;
    var t1$1;
    var expr$1;
    var ph$1$0;
    t0$2 = temp$3$0;
    expr$1 = t0$2;
    ph$1$0 = t0$2;
    t0$3 = ph$1$0;
    if (((t0$3 instanceof Array) && ((t1$1 = t0$3.length), ((t1$1 === 1) && ((t0$3[0] === "void") && default_label$1))))) {
      return ["js_continue", ["value", default_label$1]];
    } else {
      t1$1 = t0$3.length;
      if (((t1$1 === 1) && (t0$3[0] === "void"))) {
        return ["js_continue"];
      } else {
        if ((($$11111$0 = (t1$1 === 2)) && (t0$3[0] === "value"))) {
          v$2 = t0$3[1];
          return ["js_continue", expr$1];
        } else {
          if (($$11111$0 && (t0$3[0] === "symbol"))) {
            v$3 = t0$3[1];
            return ["js_continue", ["value", v$3]];
          } else {
            return ___match_error(ph$1$0);
          }
        }
      }
    }
  }));
});
$targ$0 = (function(mac$0) {
  var m$0;
  var t0$10;
  var t1$6;
  var t0$17;
  var accum$0;
  var accum$1;
  var t0$24;
  var t0$30;
  var $targ$1;
  var while_mac$0;
  var $targ$2;
  var for_mac$0;
  var EachHandler$0;
  var $targ$3;
  var each_mac$0;
  var $targ$4;
  var each_gen_mac$0;
  var exports$0;
  exports$0 = ({});
  m$0 = null;
  $1: for (var $__0 = items(({
    "break": break_mac$0(null),
    "continue": continue_mac$0(null)
  }))[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$0 = $__1.value;
    {
      var k$0;
      var v$4;
      var t0$4;
      var t1$2;
      t0$4 = m$0;
      if (((t0$4 instanceof Array) && ((t1$2 = t0$4.length), (t1$2 === 2)))) {
        k$0 = t0$4[0];
        v$4 = t0$4[1];
        mac$0(k$0)(v$4);
      } else {
        ___match_error(m$0, "/home/olivier/git/earl-grey/src/macros/loop.eg", 856, 895);
      }
    }
  }
  $targ$1 = (function(info$0, form$2, temp$4$0) {
    var t0$5;
    var t0$7;
    var t1$4;
    var t2$0;
    var t3$0;
    var t4$0;
    var t5$0;
    var t6$0;
    var t7$0;
    var t8$0;
    var t0$8;
    var test$1;
    var body$2;
    var label$1;
    var bridge$$11196$0;
    var t0$6;
    var t1$3;
    var env$1;
    var ph$2$0;
    t0$5 = temp$4$0;
    if (___hasprop(t0$5, "env")) {
      env$1 = t0$5.env;
      ph$2$0 = t0$5;
    } else {
      ___match_error(temp$4$0);
    }
    bridge$$11196$0 = ph$2$0;
    if ((((bridge$$11196$0 instanceof Array) && ((t0$7 = bridge$$11196$0.length), ((t0$7 === 3) && ((bridge$$11196$0[0] === "send") && ((t1$4 = bridge$$11196$0[1]), ((t1$4 instanceof Array) && ((t2$0 = t1$4.length), ((t2$0 === 2) && ((t1$4[0] === "symbol") && ((t1$4[1] === ".") && ((t3$0 = bridge$$11196$0[2]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 3) && ((t3$0[0] === "data") && ((t5$0 = t3$0[1]), ((t5$0 instanceof Array) && ((t6$0 = t5$0.length), ((t6$0 === 1) && ((t5$0[0] === "void") && ((t7$0 = t3$0[2]), ((t7$0 instanceof Array) && ((t8$0 = t7$0.length), ((t8$0 === 2) && ((t7$0[0] === "symbol") && ((label$1 = t7$0[1]), true)))))))))))))))))))))))))) || ((bridge$$11196$0 instanceof Array) && ((t0$8 = bridge$$11196$0.length), ((t0$8 === 2) && ((bridge$$11196$0[0] === "value") && ((label$1 = bridge$$11196$0[1]), true))))))) {
      return ["macro", (function(context$2, temp$5$0, form$3, temp$6$0) {
        var t0$9;
        var t1$5;
        var test$0;
        var body$1;
        t0$9 = temp$6$0;
        if (((t0$9 instanceof Array) && ((t1$5 = t0$9.length), ((t1$5 === 3) && (t0$9[0] === "data"))))) {
          test$0 = t0$9[1];
          body$1 = t0$9[2];
        } else {
          ___match_error(temp$6$0);
        }
        return setup_label$0(label$1, env$1, ["js_while", test$0, body$1]);
      })];
    } else {
      t0$6 = ph$2$0;
      t1$3 = t0$6.length;
      if (((t1$3 === 3) && (t0$6[0] === "data"))) {
        test$1 = t0$6[1];
        body$2 = t0$6[2];
        return setup_label$0(info$0.gensym(), env$1, ["js_while", test$1, body$2]);
      } else {
        return ___match_error(ph$2$0);
      }
    }
  });
  t0$10 = getProjector(expr_mac$0)($targ$1);
  if ((t0$10[0] && ((t1$6 = getProjector(mac$0("while"))(t0$10[1])), t1$6[0]))) {
    while_mac$0 = t1$6[1];
  } else {
    ___match_error($targ$1);
  }
  $targ$2 = (function(context$3, info$1, form$4, temp$7$0) {
    var t0$11;
    var t0$14;
    var t1$9;
    var t2$2;
    var t3$2;
    var t4$2;
    var t5$2;
    var t6$1;
    var t7$1;
    var t8$1;
    var t0$15;
    var spec$1;
    var body$5;
    var label$3;
    var setup_for$0;
    var bridge$$11318$0;
    var t0$12;
    var t1$7;
    var expr$2;
    var ph$3$0;
    t0$11 = temp$7$0;
    expr$2 = t0$11;
    ph$3$0 = t0$11;
    setup_for$0 = (function setup_for(label$2, env$2, ph$4$0, body$3) {
      var a$2;
      var b$2;
      var a$1;
      var b$1;
      var a$0;
      var b$0;
      var c$0;
      var $$11339$0;
      var $$11340$0;
      var $$11341$0;
      var $$11342$0;
      var $$11343$0;
      var $$11344$0;
      var $$11345$0;
      var $$11346$0;
      var $$11347$0;
      var t0$13;
      var t1$8;
      var t2$1;
      var t3$1;
      var t4$1;
      var t5$1;
      t0$13 = ph$4$0;
      t1$8 = t0$13.length;
      if (((t1$8 === 4) && (t0$13[0] === "multi"))) {
        a$0 = t0$13[1];
        b$0 = t0$13[2];
        c$0 = t0$13[3];
        return ["multi", a$0, setup_label$0(label$2, env$2, ["js_for", ["multi"], b$0, c$0, body$3])];
      } else {
        if ((($$11341$0 = (t1$8 === 3)) && (($$11342$0 = (t0$13[0] === "send")) && ((t2$1 = t0$13[1]), (($$11344$0 = (t2$1 instanceof Array)) && ((t3$1 = t2$1.length), (($$11346$0 = (t3$1 === 2)) && (($$11347$0 = (t2$1[0] === "symbol")) && ((t2$1[1] === "in") && ((t4$1 = t0$13[2]), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 === 3) && (t4$1[0] === "data")))))))))))))) {
          a$1 = t4$1[1];
          b$1 = t4$1[2];
          return ["multi", ["declare", a$1, ["value", null]], setup_label$0(label$2, env$2, ["js_for_in", a$1, b$1, body$3])];
        } else {
          if (($$11347$0 && ((t2$1[1] === "of") && ((t4$1 = t0$13[2]), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 === 3) && (t4$1[0] === "data")))))))) {
            a$2 = t4$1[1];
            b$2 = t4$1[2];
            return ["multi", ["declare", a$2, ["value", null]], setup_label$0(label$2, env$2, ["js_for_of", a$2, b$2, body$3])];
          } else {
            return ___match_error(ph$4$0);
          }
        }
      }
    });
    bridge$$11318$0 = ph$3$0;
    if ((((bridge$$11318$0 instanceof Array) && ((t0$14 = bridge$$11318$0.length), ((t0$14 === 3) && ((bridge$$11318$0[0] === "send") && ((t1$9 = bridge$$11318$0[1]), ((t1$9 instanceof Array) && ((t2$2 = t1$9.length), ((t2$2 === 2) && ((t1$9[0] === "symbol") && ((t1$9[1] === ".") && ((t3$2 = bridge$$11318$0[2]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 3) && ((t3$2[0] === "data") && ((t5$2 = t3$2[1]), ((t5$2 instanceof Array) && ((t6$1 = t5$2.length), ((t6$1 === 1) && ((t5$2[0] === "void") && ((t7$1 = t3$2[2]), ((t7$1 instanceof Array) && ((t8$1 = t7$1.length), ((t8$1 === 2) && ((t7$1[0] === "symbol") && ((label$3 = t7$1[1]), true)))))))))))))))))))))))))) || ((bridge$$11318$0 instanceof Array) && ((t0$15 = bridge$$11318$0.length), ((t0$15 === 2) && ((bridge$$11318$0[0] === "value") && ((label$3 = bridge$$11318$0[1]), true))))))) {
      return ["macro", (function(context$4, temp$8$0, form$5, temp$9$0) {
        var t0$16;
        var t1$10;
        var spec$0;
        var body$4;
        t0$16 = temp$9$0;
        if (((t0$16 instanceof Array) && ((t1$10 = t0$16.length), ((t1$10 === 3) && (t0$16[0] === "data"))))) {
          spec$0 = t0$16[1];
          body$4 = t0$16[2];
        } else {
          ___match_error(temp$9$0);
        }
        return setup_for$0(label$3, expr$2.env, spec$0, body$4);
      })];
    } else {
      t0$12 = ph$3$0;
      t1$7 = t0$12.length;
      if (((t1$7 === 3) && (t0$12[0] === "data"))) {
        spec$1 = t0$12[1];
        body$5 = t0$12[2];
        return setup_for$0(info$1.gensym(), form$4.env, spec$1, body$5);
      } else {
        return ___match_error(ph$3$0);
      }
    }
  });
  t0$17 = getProjector(mac$0("for"))($targ$2);
  if (t0$17[0]) {
    for_mac$0 = t0$17[1];
  } else {
    ___match_error($targ$2);
  }
  EachHandler$0 = (function EachHandler() {
    var $targ$5;
    var t0$18;
    var m$1$0;
    var $it$0;
    if ((!getChecker(EachHandler$0)(this))) {
      $it$0 = Object.create(EachHandler$0.prototype);
    } else {
      $it$0 = this;
    }
    m$1$0 = arguments;
    t0$18 = m$1$0.length;
    if (((t0$18 >= 2) && (t0$18 <= 3))) {
      ($it$0["placeholder"] = m$1$0[0]);
      ($it$0["loopvar"] = m$1$0[1]);
      ($it$0["generator"] = ((2 >= t0$18) ? false : m$1$0[2]));
      $targ$5 = 2;
      ($it$0["wrapOrder"] = $targ$5);
      [];
    } else {
      ___match_error(m$1$0);
    }
    return $it$0;
  });
  (EachHandler$0.prototype["expand"] = (function expand(info$2) {
    var $it$1;
    var self$0;
    $it$1 = this;
    self$0 = this;
    return $it$1.placeholder;
  }));
  (EachHandler$0.prototype["wrap"] = (function wrap(expr$3, info$3, opt$0) {
    var $it$2;
    var self$1;
    $it$2 = this;
    self$1 = this;
    if ($it$2.generator) {
      return ["send", ["symbol", "each*"], ["data", $it$2.placeholder, ["send", ["symbol", "->"], ["data", $it$2.loopvar, expr$3]]]];
    } else {
      return ["send", ["symbol", "each"], ["data", $it$2.placeholder, ["send", ["symbol", "->"], ["data", $it$2.loopvar, expr$3]]]];
    }
  }));
  __amp____colon__(EachHandler$0, __amp____colon__(((accum$0 = ({})), (accum$0["::name"] = "EachHandler"), accum$0), ((accum$1 = ({})), (accum$1["::egclass"] = true), accum$1)));
  $targ$3 = (function(ph$5$0, temp$10$0, form$6, expr$4) {
    var t0$19;
    var x$0;
    var t0$21;
    var t1$12;
    var ph$6;
    var lv$0;
    var $targ$6;
    var li$0;
    var body$6;
    var t0$22;
    var t1$13;
    var t0$23;
    var t1$14;
    var t2$3;
    var x$3;
    var other$1;
    var $targ$7;
    var li$1;
    var body$7;
    var $targ$8;
    var clauses$0;
    var ends_with_test$0;
    var _build_loop$0;
    var $$11579$0;
    var $$11580$0;
    var $$11581$0;
    var $$11582$0;
    var t0$20;
    var t1$11;
    var info$4;
    var env$3;
    t0$19 = temp$10$0;
    info$4 = t0$19;
    if (___hasprop(t0$19, "env")) {
      env$3 = t0$19.env;
    } else {
      ___match_error(temp$10$0);
    }
    if (((x$0 = ph$5$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {
      if (equal(expr$4, ["void"])) {
        expr$4 = ["data", ["void"], ["void"]];
        expr$4;
      }
      $targ$6 = expr$4;
      t0$21 = $targ$6;
      if (((t0$21 instanceof Array) && ((t1$12 = t0$21.length), ((t1$12 === 3) && (t0$21[0] === "data"))))) {
        li$0 = t0$21[1];
        body$6 = t0$21[2];
      } else {
        ___match_error($targ$6);
      }
      [li$0, body$6];
      if (equal(li$0, ["void"])) {
        ph$6 = info$4.env.mark(["symbol", info$4.gensym("xs")]);
      } else {
        ph$6 = li$0;
      }
      if (equal(body$6, ["void"])) {
        lv$0 = info$4.env.mark(["symbol", "match"]);
      } else {
        lv$0 = body$6;
      }
      return ["special", EachHandler$0(ph$6, lv$0)];
    } else {
      $targ$7 = expr$4;
      t0$22 = $targ$7;
      if (((t0$22 instanceof Array) && ((t1$13 = t0$22.length), ((t1$13 === 3) && (t0$22[0] === "data"))))) {
        li$1 = t0$22[1];
        body$7 = t0$22[2];
      } else {
        ___match_error($targ$7);
      }
      [li$1, body$7];
      $targ$8 = body$7;
      t0$23 = getProjector(Body$0)($targ$8);
      if ((t0$23[0] && ((t1$14 = t0$23[1]), (t2$3 = t1$14.length), (t2$3 >= 0)))) {
        clauses$0 = Array.prototype.slice.call(t1$14, 0);
      } else {
        ___match_error($targ$8);
      }
      ends_with_test$0 = false;
      _build_loop$0 = (function _build_loop(wrap$0, pre$0, post$0) {
        var accum$2;
        var accum$3;
        return build_loop$0(info$4, env$3, form$6, li$1, clauses$0, wrap$0, pre$0, post$0, __amp____colon__(({"forof": true}), __amp____colon__(((accum$2 = ({})), (accum$2["wrap_pattern"] = (function wrap_pattern(x$1, toplevel$0) {
          var x$2;
          var other$0;
          var m$2$0;
          m$2$0 = x$1;
          if (((x$2 = m$2$0), ((x$2 instanceof Array) && (x$2[0] === "test")))) {
            ends_with_test$0 = toplevel$0;
          } else {
            other$0 = m$2$0;
            ends_with_test$0 = false;
          }
          return x$1;
        })), accum$2), ((accum$3 = ({})), (accum$3["fallback"] = (function fallback(target$0) {
          if (ends_with_test$0) {
            return ["symbol", "false"];
          } else {
            return match_error$0(target$0);
          }
        })), accum$3))));
      });
      if (((x$3 = ph$5$0), ((x$3 instanceof Array) && (x$3[0] === "test")))) {
        return __amp__(["test_factory", li$1, clauses$0], ({"env": env$3}));
      } else {
        t0$20 = ph$5$0;
        t1$11 = t0$20.length;
        if ((($$11581$0 = (t1$11 === 2)) && (($$11582$0 = (t0$20[0] === "expr")) && (t0$20[1] === "multi")))) {
          return ["nostep", form$6];
        } else {
          if (($$11582$0 && (t0$20[1] === "ignore"))) {
            return _build_loop$0(null, ["splice"], ["splice"]);
          } else {
            other$1 = ph$5$0;
            return _build_loop$0((function(x$4) {
              return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "temp"], ["multi", x$4]]], ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "push"]]]], ["data", ["symbol", "temp"]]]];
            }), ["splice", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "temp"]], ["symbol", "null"]]]], ["symbol", "acc"]);
          }
        }
      }
    }
  });
  t0$24 = getProjector(mac$0("each"))($targ$3);
  if (t0$24[0]) {
    each_mac$0 = t0$24[1];
  } else {
    ___match_error($targ$3);
  }
  $targ$4 = (function(ph$7$0, temp$11$0, form$7, expr$5) {
    var t0$25;
    var x$5;
    var t0$27;
    var t1$16;
    var ph$8;
    var lv$1;
    var $targ$9;
    var li$2;
    var body$8;
    var t0$28;
    var t1$17;
    var t0$29;
    var t1$18;
    var t2$4;
    var loop$0;
    var other$3;
    var $targ$10;
    var li$3;
    var body$9;
    var $targ$11;
    var clauses$1;
    var ends_with_test$1;
    var _build_loop$1;
    var $$11755$0;
    var $$11756$0;
    var $$11757$0;
    var $$11758$0;
    var t0$26;
    var t1$15;
    var info$5;
    var env$4;
    t0$25 = temp$11$0;
    info$5 = t0$25;
    if (___hasprop(t0$25, "env")) {
      env$4 = t0$25.env;
    } else {
      ___match_error(temp$11$0);
    }
    if (((x$5 = ph$7$0), ((x$5 instanceof Array) && (x$5[0] === "pattern")))) {
      if (equal(expr$5, ["void"])) {
        expr$5 = ["data", ["void"], ["void"]];
        expr$5;
      }
      $targ$9 = expr$5;
      t0$27 = $targ$9;
      if (((t0$27 instanceof Array) && ((t1$16 = t0$27.length), ((t1$16 === 3) && (t0$27[0] === "data"))))) {
        li$2 = t0$27[1];
        body$8 = t0$27[2];
      } else {
        ___match_error($targ$9);
      }
      [li$2, body$8];
      if (equal(li$2, ["void"])) {
        ph$8 = info$5.env.mark(["symbol", info$5.gensym("xs")]);
      } else {
        ph$8 = li$2;
      }
      if (equal(body$8, ["void"])) {
        lv$1 = info$5.env.mark(["symbol", "match"]);
      } else {
        lv$1 = body$8;
      }
      return ["special", EachHandler$0(ph$8, lv$1, true)];
    } else {
      $targ$10 = expr$5;
      t0$28 = $targ$10;
      if (((t0$28 instanceof Array) && ((t1$17 = t0$28.length), ((t1$17 === 3) && (t0$28[0] === "data"))))) {
        li$3 = t0$28[1];
        body$9 = t0$28[2];
      } else {
        ___match_error($targ$10);
      }
      [li$3, body$9];
      $targ$11 = body$9;
      t0$29 = getProjector(Body$0)($targ$11);
      if ((t0$29[0] && ((t1$18 = t0$29[1]), (t2$4 = t1$18.length), (t2$4 >= 0)))) {
        clauses$1 = Array.prototype.slice.call(t1$18, 0);
      } else {
        ___match_error($targ$11);
      }
      ends_with_test$1 = false;
      _build_loop$1 = (function _build_loop(wrap$1, pre$1, post$1) {
        var accum$4;
        var accum$5;
        return build_loop$0(info$5, env$4, form$7, li$3, clauses$1, wrap$1, pre$1, post$1, __amp____colon__(({"forof": true}), __amp____colon__(((accum$4 = ({})), (accum$4["wrap_pattern"] = (function wrap_pattern(x$6, toplevel$1) {
          var x$7;
          var other$2;
          var m$3$0;
          m$3$0 = x$6;
          if (((x$7 = m$3$0), ((x$7 instanceof Array) && (x$7[0] === "test")))) {
            ends_with_test$1 = toplevel$1;
          } else {
            other$2 = m$3$0;
            ends_with_test$1 = false;
          }
          return x$6;
        })), accum$4), ((accum$5 = ({})), (accum$5["fallback"] = (function fallback(target$1) {
          if (ends_with_test$1) {
            return ["symbol", "false"];
          } else {
            return match_error$0(target$1);
          }
        })), accum$5))));
      });
      t0$26 = ph$7$0;
      t1$15 = t0$26.length;
      if ((($$11757$0 = (t1$15 === 2)) && (($$11758$0 = (t0$26[0] === "expr")) && (t0$26[1] === "multi")))) {
        return ["nostep", form$7];
      } else {
        if (($$11758$0 && (t0$26[1] === "ignore"))) {
          return ["multi"];
        } else {
          other$3 = ph$7$0;
          loop$0 = _build_loop$1((function(x$8) {
            return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "temp"], ["multi", x$8]]], ["send", ["symbol", "yield"], ["symbol", "temp"]]];
          }), ["splice", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "temp"]], ["symbol", "null"]]]], ["symbol", "acc"]);
          return ["send", ["send", ["symbol", "*->"], ["data", ["data"], loop$0]], ["data"]];
        }
      }
    }
  });
  t0$30 = getProjector(mac$0("each*"))($targ$4);
  if (t0$30[0]) {
    each_gen_mac$0 = t0$30[1];
  } else {
    ___match_error($targ$4);
  }
  return exports$0;
});
(module["exports"] = $targ$0);
[];
//# sourceURL=<compile-source>
