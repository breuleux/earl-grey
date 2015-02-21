
"use strict";require("earlgrey-runtime/5");var $targ$0 = undefined;var $0$0 = undefined;var expr_mac$0 = undefined;var overridable$0 = undefined;var build_loop$0 = undefined;var match_error$0 = undefined;var Body$0 = undefined;var setup_label$0 = undefined;var break_mac$0 = undefined;var continue_mac$0 = undefined;$0$0 = require("./helpers");expr_mac$0 = $0$0.expr_mac;overridable$0 = $0$0.overridable;build_loop$0 = $0$0.build_loop;match_error$0 = $0$0.match_error;Body$0 = $0$0.Body;setup_label$0 = function setup_label(label$0, env$0, body$0) {
  return ["bind", __amp__(["symbol", "break"], { env: env$0 }), ["macro", break_mac$0(label$0)], ["bind", __amp__(["symbol", "continue"], { env: env$0 }), ["macro", continue_mac$0(label$0)], ["js_label", ["value", label$0], body$0]]];
};break_mac$0 = function break_mac(default_label$0) {
  return overridable$0(function (context$0, temp$0$0, form$0, temp$1$0) {
    var t0$0 = undefined;var v$1 = undefined;var v$0 = undefined;var $$10626$0 = undefined;var $$10627$0 = undefined;var $$10628$0 = undefined;var t0$1 = undefined;var t1$0 = undefined;var expr$0 = undefined;var ph$0$0 = undefined;t0$0 = temp$1$0;expr$0 = t0$0;ph$0$0 = t0$0;t0$1 = ph$0$0;if (Array.isArray(t0$1) && (t1$0 = t0$1.length, t1$0 === 1 && (t0$1[0] === "void" && default_label$0))) {
      return ["js_break", ["value", default_label$0]];
    } else {
      t1$0 = t0$1.length;if (t1$0 === 1 && t0$1[0] === "void") {
        return ["js_break"];
      } else {
        if (($$10628$0 = t1$0 === 2) && t0$1[0] === "value") {
          v$0 = t0$1[1];return ["js_break", expr$0];
        } else {
          if ($$10628$0 && t0$1[0] === "symbol") {
            v$1 = t0$1[1];return ["js_break", ["value", v$1]];
          } else {
            return ___match_error(ph$0$0);
          }
        }
      }
    }
  });
};continue_mac$0 = function continue_mac(default_label$1) {
  return overridable$0(function (context$1, temp$2$0, form$1, temp$3$0) {
    var t0$2 = undefined;var v$3 = undefined;var v$2 = undefined;var $$10681$0 = undefined;var $$10682$0 = undefined;var $$10683$0 = undefined;var t0$3 = undefined;var t1$1 = undefined;var expr$1 = undefined;var ph$1$0 = undefined;t0$2 = temp$3$0;expr$1 = t0$2;ph$1$0 = t0$2;t0$3 = ph$1$0;if (Array.isArray(t0$3) && (t1$1 = t0$3.length, t1$1 === 1 && (t0$3[0] === "void" && default_label$1))) {
      return ["js_continue", ["value", default_label$1]];
    } else {
      t1$1 = t0$3.length;if (t1$1 === 1 && t0$3[0] === "void") {
        return ["js_continue"];
      } else {
        if (($$10683$0 = t1$1 === 2) && t0$3[0] === "value") {
          v$2 = t0$3[1];return ["js_continue", expr$1];
        } else {
          if ($$10683$0 && t0$3[0] === "symbol") {
            v$3 = t0$3[1];return ["js_continue", ["value", v$3]];
          } else {
            return ___match_error(ph$1$0);
          }
        }
      }
    }
  });
};$targ$0 = function (mac$0) {
  var m$0 = undefined;var t0$10 = undefined;var t1$6 = undefined;var t0$17 = undefined;var accum$0 = undefined;var accum$1 = undefined;var t0$24 = undefined;var t0$30 = undefined;var $targ$1 = undefined;var while_mac$0 = undefined;var $targ$2 = undefined;var for_mac$0 = undefined;var EachHandler$0 = undefined;var $targ$3 = undefined;var each_mac$0 = undefined;var $targ$4 = undefined;var each_gen_mac$0 = undefined;var exports$0 = undefined;exports$0 = {};m$0 = null;$1: for (var _iterator = items({ "break": break_mac$0(null), "continue": continue_mac$0(null) })[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$0 = _step.value;
    var k$0 = undefined;var v$4 = undefined;var t0$4 = undefined;var t1$2 = undefined;t0$4 = m$0;if (Array.isArray(t0$4) && (t1$2 = t0$4.length, t1$2 === 2)) {
      k$0 = t0$4[0];v$4 = t0$4[1];mac$0(k$0)(v$4);
    } else {
      ___match_error(m$0);
    }
  }$targ$1 = function (info$0, form$2, temp$4$0) {
    var t0$5 = undefined;var t0$7 = undefined;var t1$4 = undefined;var t2$0 = undefined;var t3$0 = undefined;var t4$0 = undefined;var t5$0 = undefined;var t6$0 = undefined;var t7$0 = undefined;var t8$0 = undefined;var t0$8 = undefined;var test$1 = undefined;var body$2 = undefined;var label$1 = undefined;var bridge$$10768$0 = undefined;var t0$6 = undefined;var t1$3 = undefined;var env$1 = undefined;var ph$2$0 = undefined;t0$5 = temp$4$0;if (___hasprop(t0$5, "env")) {
      env$1 = t0$5.env;ph$2$0 = t0$5;
    } else {
      ___match_error(temp$4$0);
    }bridge$$10768$0 = ph$2$0;if (Array.isArray(bridge$$10768$0) && (t0$7 = bridge$$10768$0.length, t0$7 === 3 && (bridge$$10768$0[0] === "send" && (t1$4 = bridge$$10768$0[1], Array.isArray(t1$4) && (t2$0 = t1$4.length, t2$0 === 2 && (t1$4[0] === "symbol" && (t1$4[1] === "." && (t3$0 = bridge$$10768$0[2], Array.isArray(t3$0) && (t4$0 = t3$0.length, t4$0 === 3 && (t3$0[0] === "data" && (t5$0 = t3$0[1], Array.isArray(t5$0) && (t6$0 = t5$0.length, t6$0 === 1 && (t5$0[0] === "void" && (t7$0 = t3$0[2], Array.isArray(t7$0) && (t8$0 = t7$0.length, t8$0 === 2 && (t7$0[0] === "symbol" && (label$1 = t7$0[1], true)))))))))))))))) || Array.isArray(bridge$$10768$0) && (t0$8 = bridge$$10768$0.length, t0$8 === 2 && (bridge$$10768$0[0] === "value" && (label$1 = bridge$$10768$0[1], true)))) {
      return ["macro", function (context$2, temp$5$0, form$3, temp$6$0) {
        var t0$9 = undefined;var t1$5 = undefined;var test$0 = undefined;var body$1 = undefined;t0$9 = temp$6$0;if (Array.isArray(t0$9) && (t1$5 = t0$9.length, t1$5 === 3 && t0$9[0] === "data")) {
          test$0 = t0$9[1];body$1 = t0$9[2];
        } else {
          ___match_error(temp$6$0);
        }return setup_label$0(label$1, env$1, ["js_while", test$0, body$1]);
      }];
    } else {
      t0$6 = ph$2$0;t1$3 = t0$6.length;if (t1$3 === 3 && t0$6[0] === "data") {
        test$1 = t0$6[1];body$2 = t0$6[2];return setup_label$0(info$0.gensym(), env$1, ["js_while", test$1, body$2]);
      } else {
        return ___match_error(ph$2$0);
      }
    }
  };t0$10 = getProjector(expr_mac$0)($targ$1);if (t0$10[0] && (t1$6 = getProjector(mac$0("while"))(t0$10[1]), t1$6[0])) {
    while_mac$0 = t1$6[1];
  } else {
    ___match_error($targ$1);
  }$targ$2 = function (context$3, info$1, form$4, temp$7$0) {
    var t0$11 = undefined;var t0$14 = undefined;var t1$9 = undefined;var t2$2 = undefined;var t3$2 = undefined;var t4$2 = undefined;var t5$2 = undefined;var t6$1 = undefined;var t7$1 = undefined;var t8$1 = undefined;var t0$15 = undefined;var spec$1 = undefined;var body$5 = undefined;var label$3 = undefined;var setup_for$0 = undefined;var bridge$$10890$0 = undefined;var t0$12 = undefined;var t1$7 = undefined;var expr$2 = undefined;var ph$3$0 = undefined;t0$11 = temp$7$0;expr$2 = t0$11;ph$3$0 = t0$11;setup_for$0 = function setup_for(label$2, env$2, ph$4$0, body$3) {
      var a$2 = undefined;var b$2 = undefined;var a$1 = undefined;var b$1 = undefined;var a$0 = undefined;var b$0 = undefined;var c$0 = undefined;var $$10911$0 = undefined;var $$10912$0 = undefined;var $$10913$0 = undefined;var $$10914$0 = undefined;var $$10915$0 = undefined;var $$10916$0 = undefined;var $$10917$0 = undefined;var $$10918$0 = undefined;var $$10919$0 = undefined;var t0$13 = undefined;var t1$8 = undefined;var t2$1 = undefined;var t3$1 = undefined;var t4$1 = undefined;var t5$1 = undefined;t0$13 = ph$4$0;t1$8 = t0$13.length;if (t1$8 === 4 && t0$13[0] === "multi") {
        a$0 = t0$13[1];b$0 = t0$13[2];c$0 = t0$13[3];return ["multi", a$0, setup_label$0(label$2, env$2, ["js_for", ["multi"], b$0, c$0, body$3])];
      } else {
        if (($$10913$0 = t1$8 === 3) && (($$10914$0 = t0$13[0] === "send") && (t2$1 = t0$13[1], ($$10916$0 = Array.isArray(t2$1)) && (t3$1 = t2$1.length, ($$10918$0 = t3$1 === 2) && (($$10919$0 = t2$1[0] === "symbol") && (t2$1[1] === "in" && (t4$1 = t0$13[2], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 3 && t4$1[0] === "data")))))))) {
          a$1 = t4$1[1];b$1 = t4$1[2];return ["multi", ["declare", a$1, ["value", null]], setup_label$0(label$2, env$2, ["js_for_in", a$1, b$1, body$3])];
        } else {
          if ($$10919$0 && (t2$1[1] === "of" && (t4$1 = t0$13[2], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 3 && t4$1[0] === "data")))) {
            a$2 = t4$1[1];b$2 = t4$1[2];return ["multi", ["declare", a$2, ["value", null]], setup_label$0(label$2, env$2, ["js_for_of", a$2, b$2, body$3])];
          } else {
            return ___match_error(ph$4$0);
          }
        }
      }
    };bridge$$10890$0 = ph$3$0;if (Array.isArray(bridge$$10890$0) && (t0$14 = bridge$$10890$0.length, t0$14 === 3 && (bridge$$10890$0[0] === "send" && (t1$9 = bridge$$10890$0[1], Array.isArray(t1$9) && (t2$2 = t1$9.length, t2$2 === 2 && (t1$9[0] === "symbol" && (t1$9[1] === "." && (t3$2 = bridge$$10890$0[2], Array.isArray(t3$2) && (t4$2 = t3$2.length, t4$2 === 3 && (t3$2[0] === "data" && (t5$2 = t3$2[1], Array.isArray(t5$2) && (t6$1 = t5$2.length, t6$1 === 1 && (t5$2[0] === "void" && (t7$1 = t3$2[2], Array.isArray(t7$1) && (t8$1 = t7$1.length, t8$1 === 2 && (t7$1[0] === "symbol" && (label$3 = t7$1[1], true)))))))))))))))) || Array.isArray(bridge$$10890$0) && (t0$15 = bridge$$10890$0.length, t0$15 === 2 && (bridge$$10890$0[0] === "value" && (label$3 = bridge$$10890$0[1], true)))) {
      return ["macro", function (context$4, temp$8$0, form$5, temp$9$0) {
        var t0$16 = undefined;var t1$10 = undefined;var spec$0 = undefined;var body$4 = undefined;t0$16 = temp$9$0;if (Array.isArray(t0$16) && (t1$10 = t0$16.length, t1$10 === 3 && t0$16[0] === "data")) {
          spec$0 = t0$16[1];body$4 = t0$16[2];
        } else {
          ___match_error(temp$9$0);
        }return setup_for$0(label$3, expr$2.env, spec$0, body$4);
      }];
    } else {
      t0$12 = ph$3$0;t1$7 = t0$12.length;if (t1$7 === 3 && t0$12[0] === "data") {
        spec$1 = t0$12[1];body$5 = t0$12[2];return setup_for$0(info$1.gensym(), form$4.env, spec$1, body$5);
      } else {
        return ___match_error(ph$3$0);
      }
    }
  };t0$17 = getProjector(mac$0("for"))($targ$2);if (t0$17[0]) {
    for_mac$0 = t0$17[1];
  } else {
    ___match_error($targ$2);
  }EachHandler$0 = function EachHandler() {
    var $targ$5 = undefined;var t0$18 = undefined;var m$1$0 = undefined;var $it$0 = undefined;if (!getChecker(EachHandler$0)(this)) {
      $it$0 = Object.create(EachHandler$0.prototype);
    } else {
      $it$0 = this;
    }m$1$0 = arguments;t0$18 = m$1$0.length;if (t0$18 >= 2 && t0$18 <= 3) {
      $it$0.placeholder = m$1$0[0];$it$0.loopvar = m$1$0[1];$it$0.generator = 2 >= t0$18 ? false : m$1$0[2];$targ$5 = 2;$it$0.wrapOrder = $targ$5;[];
    } else {
      ___match_error(m$1$0);
    }return $it$0;
  };EachHandler$0.prototype.expand = function expand(info$2) {
    var $it$1 = undefined;var self$0 = undefined;$it$1 = this;self$0 = this;return $it$1.placeholder;
  };EachHandler$0.prototype.wrap = function wrap(expr$3, info$3, opt$0) {
    var $it$2 = undefined;var self$1 = undefined;$it$2 = this;self$1 = this;if ($it$2.generator) {
      return ["send", ["symbol", "each*"], ["data", $it$2.placeholder, ["send", ["symbol", "->"], ["data", $it$2.loopvar, expr$3]]]];
    } else {
      return ["send", ["symbol", "each"], ["data", $it$2.placeholder, ["send", ["symbol", "->"], ["data", $it$2.loopvar, expr$3]]]];
    }
  };__amp____colon__(EachHandler$0, __amp____colon__((accum$0 = {}, accum$0["::name"] = "EachHandler", accum$0), (accum$1 = {}, accum$1["::egclass"] = true, accum$1)));$targ$3 = function (ph$5$0, temp$10$0, form$6, expr$4) {
    var t0$19 = undefined;var x$0 = undefined;var t0$21 = undefined;var t1$12 = undefined;var ph$6 = undefined;var lv$0 = undefined;var $targ$6 = undefined;var li$0 = undefined;var body$6 = undefined;var t0$22 = undefined;var t1$13 = undefined;var t0$23 = undefined;var t1$14 = undefined;var t2$3 = undefined;var x$3 = undefined;var other$1 = undefined;var $targ$7 = undefined;var li$1 = undefined;var body$7 = undefined;var $targ$8 = undefined;var clauses$0 = undefined;var ends_with_test$0 = undefined;var _build_loop$0 = undefined;var $$11151$0 = undefined;var $$11152$0 = undefined;var $$11153$0 = undefined;var $$11154$0 = undefined;var t0$20 = undefined;var t1$11 = undefined;var info$4 = undefined;var env$3 = undefined;t0$19 = temp$10$0;info$4 = t0$19;if (___hasprop(t0$19, "env")) {
      env$3 = t0$19.env;
    } else {
      ___match_error(temp$10$0);
    }if ((x$0 = ph$5$0, x$0 instanceof Array && x$0[0] === "pattern")) {
      if (equal(expr$4, ["void"])) {
        expr$4 = ["data", ["void"], ["void"]];expr$4;
      }$targ$6 = expr$4;t0$21 = $targ$6;if (Array.isArray(t0$21) && (t1$12 = t0$21.length, t1$12 === 3 && t0$21[0] === "data")) {
        li$0 = t0$21[1];body$6 = t0$21[2];
      } else {
        ___match_error($targ$6);
      }[li$0, body$6];if (equal(li$0, ["void"])) {
        ph$6 = info$4.env.mark(["symbol", info$4.gensym("xs")]);
      } else {
        ph$6 = li$0;
      }if (equal(body$6, ["void"])) {
        lv$0 = info$4.env.mark(["symbol", "match"]);
      } else {
        lv$0 = body$6;
      }return ["special", EachHandler$0(ph$6, lv$0)];
    } else {
      $targ$7 = expr$4;t0$22 = $targ$7;if (Array.isArray(t0$22) && (t1$13 = t0$22.length, t1$13 === 3 && t0$22[0] === "data")) {
        li$1 = t0$22[1];body$7 = t0$22[2];
      } else {
        ___match_error($targ$7);
      }[li$1, body$7];$targ$8 = body$7;t0$23 = getProjector(Body$0)($targ$8);if (t0$23[0] && (t1$14 = t0$23[1], t2$3 = t1$14.length, t2$3 >= 0)) {
        clauses$0 = Array.prototype.slice.call(t1$14, 0);
      } else {
        ___match_error($targ$8);
      }ends_with_test$0 = false;_build_loop$0 = function _build_loop(wrap$0, pre$0, post$0) {
        var accum$2 = undefined;var accum$3 = undefined;return build_loop$0(info$4, env$3, form$6, li$1, clauses$0, wrap$0, pre$0, post$0, __amp____colon__({ forof: true }, __amp____colon__((accum$2 = {}, accum$2.wrap_pattern = function wrap_pattern(x$1, toplevel$0) {
          var x$2 = undefined;var other$0 = undefined;var m$2$0 = undefined;m$2$0 = x$1;if ((x$2 = m$2$0, x$2 instanceof Array && x$2[0] === "test")) {
            ends_with_test$0 = toplevel$0;
          } else {
            other$0 = m$2$0;ends_with_test$0 = false;
          }return x$1;
        }, accum$2), (accum$3 = {}, accum$3.fallback = function fallback(target$0) {
          if (ends_with_test$0) {
            return ["symbol", "false"];
          } else {
            return match_error$0(target$0);
          }
        }, accum$3))));
      };if ((x$3 = ph$5$0, x$3 instanceof Array && x$3[0] === "test")) {
        return __amp__(["test_factory", li$1, clauses$0], { env: env$3 });
      } else {
        t0$20 = ph$5$0;t1$11 = t0$20.length;if (($$11153$0 = t1$11 === 2) && (($$11154$0 = t0$20[0] === "expr") && t0$20[1] === "multi")) {
          return ["nostep", form$6];
        } else {
          if ($$11154$0 && t0$20[1] === "ignore") {
            return _build_loop$0(null, ["splice"], ["splice"]);
          } else {
            other$1 = ph$5$0;return _build_loop$0(function (x$4) {
              return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "temp"], ["multi", x$4]]], ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "push"]]]], ["data", ["symbol", "temp"]]]];
            }, ["splice", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "temp"]], ["symbol", "null"]]]], ["symbol", "acc"]);
          }
        }
      }
    }
  };t0$24 = getProjector(mac$0("each"))($targ$3);if (t0$24[0]) {
    each_mac$0 = t0$24[1];
  } else {
    ___match_error($targ$3);
  }$targ$4 = function (ph$7$0, temp$11$0, form$7, expr$5) {
    var t0$25 = undefined;var x$5 = undefined;var t0$27 = undefined;var t1$16 = undefined;var ph$8 = undefined;var lv$1 = undefined;var $targ$9 = undefined;var li$2 = undefined;var body$8 = undefined;var t0$28 = undefined;var t1$17 = undefined;var t0$29 = undefined;var t1$18 = undefined;var t2$4 = undefined;var loop$0 = undefined;var other$3 = undefined;var $targ$10 = undefined;var li$3 = undefined;var body$9 = undefined;var $targ$11 = undefined;var clauses$1 = undefined;var ends_with_test$1 = undefined;var _build_loop$1 = undefined;var $$11327$0 = undefined;var $$11328$0 = undefined;var $$11329$0 = undefined;var $$11330$0 = undefined;var t0$26 = undefined;var t1$15 = undefined;var info$5 = undefined;var env$4 = undefined;t0$25 = temp$11$0;info$5 = t0$25;if (___hasprop(t0$25, "env")) {
      env$4 = t0$25.env;
    } else {
      ___match_error(temp$11$0);
    }if ((x$5 = ph$7$0, x$5 instanceof Array && x$5[0] === "pattern")) {
      if (equal(expr$5, ["void"])) {
        expr$5 = ["data", ["void"], ["void"]];expr$5;
      }$targ$9 = expr$5;t0$27 = $targ$9;if (Array.isArray(t0$27) && (t1$16 = t0$27.length, t1$16 === 3 && t0$27[0] === "data")) {
        li$2 = t0$27[1];body$8 = t0$27[2];
      } else {
        ___match_error($targ$9);
      }[li$2, body$8];if (equal(li$2, ["void"])) {
        ph$8 = info$5.env.mark(["symbol", info$5.gensym("xs")]);
      } else {
        ph$8 = li$2;
      }if (equal(body$8, ["void"])) {
        lv$1 = info$5.env.mark(["symbol", "match"]);
      } else {
        lv$1 = body$8;
      }return ["special", EachHandler$0(ph$8, lv$1, true)];
    } else {
      $targ$10 = expr$5;t0$28 = $targ$10;if (Array.isArray(t0$28) && (t1$17 = t0$28.length, t1$17 === 3 && t0$28[0] === "data")) {
        li$3 = t0$28[1];body$9 = t0$28[2];
      } else {
        ___match_error($targ$10);
      }[li$3, body$9];$targ$11 = body$9;t0$29 = getProjector(Body$0)($targ$11);if (t0$29[0] && (t1$18 = t0$29[1], t2$4 = t1$18.length, t2$4 >= 0)) {
        clauses$1 = Array.prototype.slice.call(t1$18, 0);
      } else {
        ___match_error($targ$11);
      }ends_with_test$1 = false;_build_loop$1 = function _build_loop(wrap$1, pre$1, post$1) {
        var accum$4 = undefined;var accum$5 = undefined;return build_loop$0(info$5, env$4, form$7, li$3, clauses$1, wrap$1, pre$1, post$1, __amp____colon__({ forof: true }, __amp____colon__((accum$4 = {}, accum$4.wrap_pattern = function wrap_pattern(x$6, toplevel$1) {
          var x$7 = undefined;var other$2 = undefined;var m$3$0 = undefined;m$3$0 = x$6;if ((x$7 = m$3$0, x$7 instanceof Array && x$7[0] === "test")) {
            ends_with_test$1 = toplevel$1;
          } else {
            other$2 = m$3$0;ends_with_test$1 = false;
          }return x$6;
        }, accum$4), (accum$5 = {}, accum$5.fallback = function fallback(target$1) {
          if (ends_with_test$1) {
            return ["symbol", "false"];
          } else {
            return match_error$0(target$1);
          }
        }, accum$5))));
      };t0$26 = ph$7$0;t1$15 = t0$26.length;if (($$11329$0 = t1$15 === 2) && (($$11330$0 = t0$26[0] === "expr") && t0$26[1] === "multi")) {
        return ["nostep", form$7];
      } else {
        if ($$11330$0 && t0$26[1] === "ignore") {
          return ["multi"];
        } else {
          other$3 = ph$7$0;loop$0 = _build_loop$1(function (x$8) {
            return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "temp"], ["multi", x$8]]], ["send", ["symbol", "yield"], ["symbol", "temp"]]];
          }, ["splice", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "temp"]], ["symbol", "null"]]]], ["symbol", "acc"]);return ["send", ["send", ["symbol", "*->"], ["data", ["data"], loop$0]], ["data"]];
        }
      }
    }
  };t0$30 = getProjector(mac$0("each*"))($targ$4);if (t0$30[0]) {
    each_gen_mac$0 = t0$30[1];
  } else {
    ___match_error($targ$4);
  }return exports$0;
};module.exports = $targ$0;[];
//# sourceMappingURL=loop.js.map

