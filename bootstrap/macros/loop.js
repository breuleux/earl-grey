"use strict";
require("earlgrey-runtime");
var $targ$15;
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
setup_label$0 = (function(label$0, env$0, body$0) {
  return ["bind", __amp__(["symbol", "break"], ({"env": env$0})), ["macro", break_mac$0(label$0)], ["bind", __amp__(["symbol", "continue"], ({"env": env$0})), ["macro", continue_mac$0(label$0)], ["js_label", ["value", label$0], body$0]]];
});
break_mac$0 = (function(default_label$0) {
  return overridable$0((function(context$0, temp$0$0, form$0, temp$1$0) {
    var t0$0;
    var t0$1;
    var v$1;
    var v$0;
    var $$10364$0;
    var $$10365$0;
    var $$10366$0;
    var $$10367$0;
    var m$0$0;
    var ph$0;
    var expr$0;
    temp$0$0;
    t0$0 = temp$1$0;
    expr$0 = t0$0;
    ph$0 = t0$0;
    m$0$0 = ph$0;
    if ((($$10364$0 = (m$0$0 instanceof Array)) && ((t0$1 = m$0$0.length), (($$10366$0 = (t0$1 === 1)) && (($$10367$0 = (m$0$0[0] === "void")) && default_label$0))))) {
      return ["js_break", ["value", default_label$0]];
    } else {
      if ($$10367$0) {
        return ["js_break"];
      } else {
        if (($$10364$0 && (($$10366$0 = (t0$1 === 2)) && (m$0$0[0] === "value")))) {
          v$0 = m$0$0[1];
          return ["js_break", expr$0];
        } else {
          if (($$10366$0 && (m$0$0[0] === "symbol"))) {
            v$1 = m$0$0[1];
            return ["js_break", ["value", v$1]];
          } else {
            return ___match_error(m$0$0);
          }
        }
      }
    }
  }));
});
continue_mac$0 = (function(default_label$1) {
  return overridable$0((function(context$1, temp$2$0, form$1, temp$3$0) {
    var t0$2;
    var t0$3;
    var v$3;
    var v$2;
    var $$10419$0;
    var $$10420$0;
    var $$10421$0;
    var $$10422$0;
    var m$1$0;
    var ph$1;
    var expr$1;
    temp$2$0;
    t0$2 = temp$3$0;
    expr$1 = t0$2;
    ph$1 = t0$2;
    m$1$0 = ph$1;
    if ((($$10419$0 = (m$1$0 instanceof Array)) && ((t0$3 = m$1$0.length), (($$10421$0 = (t0$3 === 1)) && (($$10422$0 = (m$1$0[0] === "void")) && default_label$1))))) {
      return ["js_continue", ["value", default_label$1]];
    } else {
      if ($$10422$0) {
        return ["js_continue"];
      } else {
        if (($$10419$0 && (($$10421$0 = (t0$3 === 2)) && (m$1$0[0] === "value")))) {
          v$2 = m$1$0[1];
          return ["js_continue", expr$1];
        } else {
          if (($$10421$0 && (m$1$0[0] === "symbol"))) {
            v$3 = m$1$0[1];
            return ["js_continue", ["value", v$3]];
          } else {
            return ___match_error(m$1$0);
          }
        }
      }
    }
  }));
});
$targ$15 = (function(mac$0) {
  var m$2;
  var t1$3;
  var t0$10;
  var t0$17;
  var t0$21;
  var $targ$17;
  var while_mac$0;
  var $targ$18;
  var for_mac$0;
  var $targ$19;
  var each_mac$0;
  var exports$0;
  exports$0 = ({});
  m$2 = null;
  $1: for (var $__0 = items(({
    "break": break_mac$0(null),
    "continue": continue_mac$0(null)
  }))[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$2 = $__1.value;
    {
      var t1$0;
      var t0$4;
      var k$0;
      var v$4;
      t0$4 = m$2;
      if (((t0$4 instanceof Array) && ((t1$0 = t0$4.length), (t1$0 === 2)))) {
        k$0 = t0$4[0];
        v$4 = t0$4[1];
        mac$0(k$0)(v$4);
      } else {
        ___match_error(m$2, "/home/olivier/git/earl-grey/src/macros/loop.eg", 854, 893);
      }
    }
  }
  $targ$17 = (function(info$0, form$2, temp$4$0) {
    var t0$5;
    var t8$0;
    var t7$0;
    var t6$0;
    var t5$0;
    var t4$0;
    var t3$0;
    var t2$0;
    var t1$1;
    var t0$7;
    var t0$8;
    var t0$6;
    var test$1;
    var body$2;
    var bridge$$10503$0;
    var label$1;
    var m$3$0;
    var ph$2;
    var env$1;
    t0$5 = temp$4$0;
    if (___hasprop(t0$5, "env")) {
      env$1 = t0$5.env;
      ph$2 = t0$5;
    } else {
      ___match_error(temp$4$0);
    }
    m$3$0 = ph$2;
    bridge$$10503$0 = m$3$0;
    if ((((bridge$$10503$0 instanceof Array) && ((t0$7 = bridge$$10503$0.length), ((t0$7 === 3) && ((bridge$$10503$0[0] === "send") && ((t1$1 = bridge$$10503$0[1]), ((t1$1 instanceof Array) && ((t2$0 = t1$1.length), ((t2$0 === 2) && ((t1$1[0] === "symbol") && ((t1$1[1] === ".") && ((t3$0 = bridge$$10503$0[2]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 3) && ((t3$0[0] === "data") && ((t5$0 = t3$0[1]), ((t5$0 instanceof Array) && ((t6$0 = t5$0.length), ((t6$0 === 1) && ((t5$0[0] === "void") && ((t7$0 = t3$0[2]), ((t7$0 instanceof Array) && ((t8$0 = t7$0.length), ((t8$0 === 2) && ((t7$0[0] === "symbol") && ((label$1 = t7$0[1]), true)))))))))))))))))))))))))) || ((bridge$$10503$0 instanceof Array) && ((t0$8 = bridge$$10503$0.length), ((t0$8 === 2) && ((bridge$$10503$0[0] === "value") && ((label$1 = bridge$$10503$0[1]), true))))))) {
      return ["macro", (function(context$2, temp$5$0, form$3, temp$6$0) {
        var t1$2;
        var t0$9;
        var test$0;
        var body$1;
        temp$5$0;
        t0$9 = temp$6$0;
        if (((t0$9 instanceof Array) && ((t1$2 = t0$9.length), ((t1$2 === 3) && (t0$9[0] === "data"))))) {
          test$0 = t0$9[1];
          body$1 = t0$9[2];
        } else {
          ___match_error(temp$6$0);
        }
        return setup_label$0(label$1, env$1, ["js_while", test$0, body$1]);
      })];
    } else {
      if (((m$3$0 instanceof Array) && ((t0$6 = m$3$0.length), ((t0$6 === 3) && (m$3$0[0] === "data"))))) {
        test$1 = m$3$0[1];
        body$2 = m$3$0[2];
        return setup_label$0(info$0.gensym(), env$1, ["js_while", test$1, body$2]);
      } else {
        return ___match_error(m$3$0);
      }
    }
  });
  t0$10 = getProjector(expr_mac$0)($targ$17);
  if ((t0$10[0] && ((t1$3 = getProjector(mac$0("while"))(t0$10[1])), t1$3[0]))) {
    while_mac$0 = t1$3[1];
  } else {
    ___match_error($targ$17);
  }
  $targ$18 = (function(context$3, info$1, form$4, temp$7$0) {
    var t0$11;
    var t8$1;
    var t7$1;
    var t6$1;
    var t5$1;
    var t4$2;
    var t3$2;
    var t2$2;
    var t1$5;
    var t0$14;
    var t0$15;
    var t0$12;
    var spec$1;
    var body$5;
    var bridge$$10630$0;
    var label$3;
    var setup_for$0;
    var m$4$0;
    var ph$3;
    var expr$2;
    t0$11 = temp$7$0;
    expr$2 = t0$11;
    ph$3 = t0$11;
    m$4$0 = ph$3;
    setup_for$0 = (function(label$2, env$2, temp$8$0, body$3) {
      var t0$13;
      var $targ$48;
      var $targ$47;
      var t2$1;
      var t1$4;
      var $targ$50;
      var $targ$49;
      var a$2;
      var b$2;
      var a$1;
      var b$1;
      var a$0;
      var b$0;
      var c$0;
      var $$10655$0;
      var $$10656$0;
      var $$10657$0;
      var $$10658$0;
      var $$10659$0;
      var $$10660$0;
      var $$10661$0;
      var $$10662$0;
      var $$10663$0;
      var t3$1;
      var t4$1;
      var m$5$0;
      var ph$4;
      ph$4 = temp$8$0;
      m$5$0 = ph$4;
      if ((($$10655$0 = (m$5$0 instanceof Array)) && ((t0$13 = m$5$0.length), ((t0$13 === 4) && (m$5$0[0] === "multi"))))) {
        a$0 = m$5$0[1];
        b$0 = m$5$0[2];
        c$0 = m$5$0[3];
        return ["multi", a$0, setup_label$0(label$2, env$2, ["js_for", ["multi"], b$0, c$0, body$3])];
      } else {
        if (($$10655$0 && (($$10657$0 = (t0$13 === 3)) && (($$10658$0 = (m$5$0[0] === "send")) && ((t1$4 = m$5$0[1]), (($$10660$0 = (t1$4 instanceof Array)) && ((t2$1 = t1$4.length), (($$10662$0 = (t2$1 === 2)) && (($$10663$0 = (t1$4[0] === "symbol")) && ((t1$4[1] === "in") && (($targ$47 = m$5$0[2]), (t3$1 = $targ$47), ((t3$1 instanceof Array) && (($targ$48 = t3$1.length), (t4$1 = $targ$48), ((t4$1 === 3) && (t3$1[0] === "data"))))))))))))))) {
          a$1 = t3$1[1];
          b$1 = t3$1[2];
          return ["multi", ["declare", a$1, ["value", null]], setup_label$0(label$2, env$2, ["js_for_in", a$1, b$1, body$3])];
        } else {
          if (($$10663$0 && ((t1$4[1] === "of") && (($targ$49 = m$5$0[2]), (t3$1 = $targ$49), ((t3$1 instanceof Array) && (($targ$50 = t3$1.length), (t4$1 = $targ$50), ((t4$1 === 3) && (t3$1[0] === "data")))))))) {
            a$2 = t3$1[1];
            b$2 = t3$1[2];
            return ["multi", ["declare", a$2, ["value", null]], setup_label$0(label$2, env$2, ["js_for_of", a$2, b$2, body$3])];
          } else {
            return ___match_error(m$5$0);
          }
        }
      }
    });
    bridge$$10630$0 = m$4$0;
    if ((((bridge$$10630$0 instanceof Array) && ((t0$14 = bridge$$10630$0.length), ((t0$14 === 3) && ((bridge$$10630$0[0] === "send") && ((t1$5 = bridge$$10630$0[1]), ((t1$5 instanceof Array) && ((t2$2 = t1$5.length), ((t2$2 === 2) && ((t1$5[0] === "symbol") && ((t1$5[1] === ".") && ((t3$2 = bridge$$10630$0[2]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 3) && ((t3$2[0] === "data") && ((t5$1 = t3$2[1]), ((t5$1 instanceof Array) && ((t6$1 = t5$1.length), ((t6$1 === 1) && ((t5$1[0] === "void") && ((t7$1 = t3$2[2]), ((t7$1 instanceof Array) && ((t8$1 = t7$1.length), ((t8$1 === 2) && ((t7$1[0] === "symbol") && ((label$3 = t7$1[1]), true)))))))))))))))))))))))))) || ((bridge$$10630$0 instanceof Array) && ((t0$15 = bridge$$10630$0.length), ((t0$15 === 2) && ((bridge$$10630$0[0] === "value") && ((label$3 = bridge$$10630$0[1]), true))))))) {
      return ["macro", (function(context$4, temp$9$0, form$5, temp$10$0) {
        var t1$6;
        var t0$16;
        var spec$0;
        var body$4;
        temp$9$0;
        t0$16 = temp$10$0;
        if (((t0$16 instanceof Array) && ((t1$6 = t0$16.length), ((t1$6 === 3) && (t0$16[0] === "data"))))) {
          spec$0 = t0$16[1];
          body$4 = t0$16[2];
        } else {
          ___match_error(temp$10$0);
        }
        return setup_for$0(label$3, expr$2.env, spec$0, body$4);
      })];
    } else {
      if (((m$4$0 instanceof Array) && ((t0$12 = m$4$0.length), ((t0$12 === 3) && (m$4$0[0] === "data"))))) {
        spec$1 = m$4$0[1];
        body$5 = m$4$0[2];
        return setup_for$0(info$1.gensym(), form$4.env, spec$1, body$5);
      } else {
        return ___match_error(m$4$0);
      }
    }
  });
  t0$17 = getProjector(mac$0("for"))($targ$18);
  if (t0$17[0]) {
    for_mac$0 = t0$17[1];
  } else {
    ___match_error($targ$18);
  }
  $targ$19 = (function(temp$11$0, temp$12$0, form$6, temp$13$0) {
    var t0$18;
    var t4$3;
    var t3$3;
    var t2$3;
    var t1$7;
    var t0$19;
    var x$2;
    var t0$20;
    var other$1;
    var $targ$73;
    var ends_with_test$0;
    var _build_loop$0;
    var $$10833$0;
    var $$10834$0;
    var $$10835$0;
    var $$10836$0;
    var m$6$0;
    var ph$5;
    var info$2;
    var env$3;
    var li$0;
    var clauses$0;
    ph$5 = temp$11$0;
    t0$18 = temp$12$0;
    info$2 = t0$18;
    if (___hasprop(t0$18, "env")) {
      env$3 = t0$18.env;
    } else {
      ___match_error(temp$12$0);
    }
    t0$19 = temp$13$0;
    if (((t0$19 instanceof Array) && ((t1$7 = t0$19.length), ((t1$7 === 3) && ((t0$19[0] === "data") && ((li$0 = t0$19[1]), (t2$3 = getProjector(Body$0)(t0$19[2])), (t2$3[0] && ((t3$3 = t2$3[1]), (t4$3 = t3$3.length), (t4$3 >= 0))))))))) {
      clauses$0 = Array.prototype.slice.call(t3$3, 0);
    } else {
      ___match_error(temp$13$0);
    }
    m$6$0 = ph$5;
    $targ$73 = false;
    ends_with_test$0 = $targ$73;
    _build_loop$0 = (function(wrap$0, pre$0, post$0) {
      var $targ$75;
      var accum$0;
      var $targ$76;
      var accum$1;
      return build_loop$0(info$2, env$3, form$6, li$0, clauses$0, wrap$0, pre$0, post$0, __amp____colon__(({"forof": true}), __amp____colon__((($targ$75 = (function(x$0, toplevel$0) {
        var x$1;
        var other$0;
        var m$7$0;
        var $targ$77;
        $targ$77 = ((m$7$0 = x$0), (((x$1 = m$7$0), ((x$1 instanceof Array) && (x$1[0] === "test"))) ? toplevel$0 : ((other$0 = m$7$0), false)));
        ends_with_test$0 = $targ$77;
        return x$0;
      })), (accum$0 = ({})), (accum$0["wrap_pattern"] = $targ$75), accum$0), (($targ$76 = (function(target$0) {
        if (ends_with_test$0) {
          return ["symbol", "false"];
        } else {
          return match_error$0(target$0);
        }
      })), (accum$1 = ({})), (accum$1["fallback"] = $targ$76), accum$1))));
    });
    if (((x$2 = m$6$0), ((x$2 instanceof Array) && (x$2[0] === "test")))) {
      return __amp__(["test_factory", li$0, clauses$0], ({"env": env$3}));
    } else {
      if ((($$10833$0 = (m$6$0 instanceof Array)) && ((t0$20 = m$6$0.length), (($$10835$0 = (t0$20 === 2)) && (($$10836$0 = (m$6$0[0] === "expr")) && (m$6$0[1] === "multi")))))) {
        return ["nostep", form$6];
      } else {
        if (($$10836$0 && (m$6$0[1] === "ignore"))) {
          return _build_loop$0((function(x$3) {
            return x$3;
          }), ["splice"], ["splice"]);
        } else {
          other$1 = m$6$0;
          return _build_loop$0((function(x$4) {
            return ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "push"]]]], ["data", ["multi", x$4]]];
          }), ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["symbol", "acc"]);
        }
      }
    }
  });
  t0$21 = getProjector(mac$0("each"))($targ$19);
  if (t0$21[0]) {
    each_mac$0 = t0$21[1];
  } else {
    ___match_error($targ$19);
  }
  return exports$0;
});
(module["exports"] = $targ$15);
//# sourceURL=<compile-source>
