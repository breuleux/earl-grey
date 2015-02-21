
"use strict";require("earlgrey-runtime/5");var $targ$0 = undefined;var $0$0 = undefined;var __lt____lt____colon__$0 = undefined;var $1$0 = undefined;var expr_mac$0 = undefined;var var_operator$0 = undefined;var overridable$0 = undefined;var pattern_handlers$0 = undefined;var Body$0 = undefined;var $2$0 = undefined;var PatternCompiler$0 = undefined;$0$0 = require("../location");__lt____lt____colon__$0 = $0$0["<<:"];$1$0 = require("./helpers");expr_mac$0 = $1$0.expr_mac;var_operator$0 = $1$0.var_operator;overridable$0 = $1$0.overridable;pattern_handlers$0 = $1$0.pattern_handlers;Body$0 = $1$0.Body;$2$0 = require("../pattern");PatternCompiler$0 = $2$0.PatternCompiler;$targ$0 = function (mac$0) {
  var m$0 = undefined;var accum$0 = undefined;var accum$1 = undefined;var t0$6 = undefined;var t0$8 = undefined;var t1$4 = undefined;var t0$11 = undefined;var t1$7 = undefined;var t0$24 = undefined;var t0$25 = undefined;var t0$27 = undefined;var t0$44 = undefined;var errf_macro$0 = undefined;var t0$46 = undefined;var ChainHandler$0 = undefined;var $targ$1 = undefined;var chain_mac$0 = undefined;var $targ$2 = undefined;var using_mac$0 = undefined;var $targ$3 = undefined;var do_mac$0 = undefined;var $targ$4 = undefined;var buildnode_mac$0 = undefined;var $targ$5 = undefined;var S_mac$0 = undefined;var $targ$6 = undefined;var print_mac$0 = undefined;var $targ$7 = undefined;var class_mac$0 = undefined;var $targ$8 = undefined;var E_mac$0 = undefined;var exports$0 = undefined;exports$0 = {};m$0 = null;$3: for (var _iterator = items({ "@": var_operator$0("$it") })[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$0 = _step.value;
    var k$0 = undefined;var v$0 = undefined;var t0$0 = undefined;var t1$0 = undefined;t0$0 = m$0;if (Array.isArray(t0$0) && (t1$0 = t0$0.length, t1$0 === 2)) {
      k$0 = t0$0[0];v$0 = t0$0[1];mac$0(k$0)(v$0);
    } else {
      ___match_error(m$0);
    }
  }ChainHandler$0 = function ChainHandler(temp$0$0) {
    var $targ$9 = undefined;var $it$0 = undefined;if (!getChecker(ChainHandler$0)(this)) {
      $it$0 = Object.create(ChainHandler$0.prototype);
    } else {
      $it$0 = this;
    }$it$0.env = temp$0$0;$targ$9 = 2;$it$0.wrapOrder = $targ$9;[];return $it$0;
  };ChainHandler$0.prototype.expand = function expand(info$0) {
    var $targ$10 = undefined;var $it$1 = undefined;var self$0 = undefined;$it$1 = this;self$0 = this;$targ$10 = $it$1.env.mark(["symbol", info$0.gensym("ph")]);$it$1.placeholder = $targ$10;[];return $it$1.placeholder;
  };ChainHandler$0.prototype.wrap = function wrap(expr$0, info$1, opt$0) {
    var $it$2 = undefined;var self$1 = undefined;$it$2 = this;self$1 = this;return ["send", ["symbol", "chain"], ["data", $it$2.placeholder, expr$0]];
  };__amp____colon__(ChainHandler$0, __amp____colon__((accum$0 = {}, accum$0["::name"] = "ChainHandler", accum$0), (accum$1 = {}, accum$1["::egclass"] = true, accum$1)));$targ$1 = function (ph$0$0, info$2, form$0, expr$1) {
    var x$0 = undefined;var other$0 = undefined;var t0$1 = undefined;var m$1$0 = undefined;var t0$2 = undefined;var t0$3 = undefined;var t0$4 = undefined;var t1$1 = undefined;var t2$0 = undefined;var t3$0 = undefined;var t4$0 = undefined;var t5$0 = undefined;var $targ$11 = undefined;var defn$0 = undefined;var env$0 = undefined;var body$0 = undefined;var it$0 = undefined;var construct$0 = undefined;var bridge$$12022$0 = undefined;if ((x$0 = ph$0$0, x$0 instanceof Array && x$0[0] === "pattern")) {
      m$1$0 = expr$1;if (Array.isArray(m$1$0) && (t0$1 = m$1$0.length, t0$1 === 1 && m$1$0[0] === "void")) {
        return ["special", ChainHandler$0(form$0.env)];
      } else {
        other$0 = m$1$0;return ["all", __lt____lt____colon__$0(other$0, expr$1), __lt____lt____colon__$0(["special", ChainHandler$0(form$0.env)], form$0)];
      }
    } else {
      bridge$$12022$0 = ph$0$0;if (Array.isArray(bridge$$12022$0) && (t0$2 = bridge$$12022$0.length, t0$2 === 2 && (bridge$$12022$0[0] === "expr" && bridge$$12022$0[1] === "expr")) || Array.isArray(bridge$$12022$0) && (t0$3 = bridge$$12022$0.length, t0$3 === 2 && (bridge$$12022$0[0] === "expr" && bridge$$12022$0[1] === "head"))) {
        $targ$11 = expr$1;t0$4 = $targ$11;if (Array.isArray(t0$4) && (t1$1 = t0$4.length, t1$1 === 3 && (t0$4[0] === "data" && (t2$0 = t0$4[1], defn$0 = t2$0, ___hasprop(t2$0, "env") && (env$0 = t2$0.env, t3$0 = getProjector(Body$0)(t0$4[2]), t3$0[0] && (t4$0 = t3$0[1], t5$0 = t4$0.length, t5$0 >= 0)))))) {
          body$0 = Array.prototype.slice.call(t4$0, 0);
        } else {
          ___match_error($targ$11);
        }[defn$0, env$0, body$0];it$0 = __amp__(["symbol", "@"], { env: env$0 });construct$0 = function construct(ph$1$0) {
          var x$2 = undefined;var rest$0 = undefined;var x$1 = undefined;var $$12121$0 = undefined;var $$12122$0 = undefined;var t0$5 = undefined;var t1$2 = undefined;t0$5 = ph$1$0;t1$2 = t0$5.length;if (t1$2 === 1) {
            x$1 = t0$5[0];return x$1;
          } else {
            if (t1$2 >= 1) {
              x$2 = t0$5[0];rest$0 = Array.prototype.slice.call(t0$5, 1);return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$0, x$2]], construct$0(rest$0)]];
            } else {
              return ___match_error(ph$1$0);
            }
          }
        };return construct$0([defn$0].concat(body$0));
      } else {
        return ["nostep", form$0];
      }
    }
  };t0$6 = getProjector(mac$0("chain"))($targ$1);if (t0$6[0]) {
    chain_mac$0 = t0$6[1];
  } else {
    ___match_error($targ$1);
  }$targ$2 = function (temp$1$0, form$1, temp$2$0) {
    var t0$7 = undefined;var t1$3 = undefined;var t2$1 = undefined;var it$1 = undefined;var defn$1 = undefined;var env$1 = undefined;var body$1 = undefined;t0$7 = temp$2$0;if (Array.isArray(t0$7) && (t1$3 = t0$7.length, t1$3 === 3 && (t0$7[0] === "data" && (t2$1 = t0$7[1], defn$1 = t2$1, ___hasprop(t2$1, "env"))))) {
      env$1 = t2$1.env;body$1 = t0$7[2];
    } else {
      ___match_error(temp$2$0);
    }it$1 = __amp__(["symbol", "@"], { env: env$1 });return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$1, defn$1]], body$1]];
  };t0$8 = getProjector(expr_mac$0)($targ$2);if (t0$8[0] && (t1$4 = getProjector(mac$0("using"))(t0$8[1]), t1$4[0])) {
    using_mac$0 = t1$4[1];
  } else {
    ___match_error($targ$2);
  }$targ$3 = function (ph$2$0, temp$3$0, form$2, temp$4$0) {
    var t0$9 = undefined;var t1$5 = undefined;var x$3 = undefined;var x$4 = undefined;var t0$10 = undefined;var t1$6 = undefined;var t2$2 = undefined;var $targ$12 = undefined;var stmts$0 = undefined;var x$5 = undefined;var body$2 = undefined;t0$9 = temp$4$0;if (Array.isArray(t0$9) && (t1$5 = t0$9.length, t1$5 === 2 && t0$9[0] === "data")) {
      body$2 = t0$9[1];
    } else {
      ___match_error(temp$4$0);
    }if ((x$3 = ph$2$0, x$3 instanceof Array && x$3[0] === "clause")) {
      return ["block", body$2];
    } else {
      if ((x$4 = ph$2$0, x$4 instanceof Array && x$4[0] === "test")) {
        $targ$12 = body$2;t0$10 = getProjector(Body$0)($targ$12);if (t0$10[0] && (t1$6 = t0$10[1], t2$2 = t1$6.length, t2$2 >= 0)) {
          stmts$0 = Array.prototype.slice.call(t1$6, 0);
        } else {
          ___match_error($targ$12);
        }return ["do", ["splice"].concat(stmts$0)];
      } else {
        if ((x$5 = ph$2$0, x$5 instanceof Array && x$5[0] === "expr")) {
          return ["multi", body$2];
        } else {
          return ___match_error(ph$2$0);
        }
      }
    }
  };t0$11 = getProjector(overridable$0)($targ$3);if (t0$11[0] && (t1$7 = getProjector(mac$0("do"))(t0$11[1]), t1$7[0])) {
    do_mac$0 = t1$7[1];
  } else {
    ___match_error($targ$3);
  }$targ$4 = function (context$0, temp$5$0, form$3, temp$6$0) {
    var t0$12 = undefined;var t0$13 = undefined;var t1$8 = undefined;var x$6 = undefined;var x$7 = undefined;var bridge$$12306$0 = undefined;var m$2$0 = undefined;var m$5 = undefined;var xs$0 = undefined;var x$11 = undefined;var pair$1 = undefined;var k$2 = undefined;var v$2 = undefined;var args$1 = undefined;var $$12597$0 = undefined;var $$12598$0 = undefined;var t0$22 = undefined;var t1$12 = undefined;var t2$4 = undefined;var t3$2 = undefined;var t4$2 = undefined;var m$4$0 = undefined;var tags$0 = undefined;var kv$0 = undefined;var parse$0 = undefined;var node$0 = undefined;var env$2 = undefined;var descr$0 = undefined;var contents$0 = undefined;t0$12 = temp$5$0;if (___hasprop(t0$12, "env")) {
      env$2 = t0$12.env;
    } else {
      ___match_error(temp$5$0);
    }t0$13 = temp$6$0;if (Array.isArray(t0$13) && (t1$8 = t0$13.length, t1$8 === 3 && t0$13[0] === "data")) {
      descr$0 = t0$13[1];contents$0 = t0$13[2];
    } else {
      ___match_error(temp$6$0);
    }m$2$0 = context$0;bridge$$12306$0 = m$2$0;if ((x$6 = bridge$$12306$0, x$6 instanceof Array && x$6[0] === "check") || (x$7 = bridge$$12306$0, x$7 instanceof Array && x$7[0] === "project")) {
      return ["nostep", form$3];
    } else {
      undefined;
    }tags$0 = ["data"];kv$0 = ["data", ["symbol", "="]];parse$0 = function parse(temp$7$0) {
      var t0$14 = undefined;var t0$16 = undefined;var t0$17 = undefined;var t1$10 = undefined;var t0$18 = undefined;var t0$19 = undefined;var t1$11 = undefined;var t0$20 = undefined;var t0$21 = undefined;var m$3 = undefined;var acc$0 = undefined;var temp$8 = undefined;var args$0 = undefined;var expr$3 = undefined;var rest$1 = undefined;var expr$2 = undefined;var x$10 = undefined;var x$9 = undefined;var x$8 = undefined;var s$0 = undefined;var $$12359$0 = undefined;var $$12360$0 = undefined;var $$12361$0 = undefined;var $$12362$0 = undefined;var $$12363$0 = undefined;var $$12364$0 = undefined;var $$12365$0 = undefined;var $$12366$0 = undefined;var $$12367$0 = undefined;var t0$15 = undefined;var t1$9 = undefined;var t2$3 = undefined;var t3$1 = undefined;var t4$1 = undefined;var t5$1 = undefined;var t6$0 = undefined;var t7$0 = undefined;var bridge$$12351$0 = undefined;var bridge$$12353$0 = undefined;var bridge$$12358$0 = undefined;var whole$0 = undefined;var ph$3$0 = undefined;t0$14 = temp$7$0;whole$0 = t0$14;ph$3$0 = t0$14;t0$15 = ph$3$0;t1$9 = t0$15.length;if (t1$9 === 1 && t0$15[0] === "void") {
        return null;
      } else {
        if (($$12361$0 = t1$9 === 2) && t0$15[0] === "symbol") {
          s$0 = t0$15[1];return tags$0.push(["value", s$0]);
        } else {
          if ($$12361$0 && (t0$15[0] === "value" && (t2$3 = [true, String(t0$15[1])], t2$3[0]))) {
            x$8 = t2$3[1];return tags$0.push(["value", x$8]);
          } else {
            if (($$12361$0 = t1$9 === 3) && (($$12362$0 = t0$15[0] === "send") && (t2$3 = t0$15[1], ($$12364$0 = Array.isArray(t2$3)) && (t3$1 = t2$3.length, ($$12366$0 = t3$1 === 2) && (($$12367$0 = t2$3[0] === "symbol") && (t2$3[1] === "." && (t4$1 = t0$15[2], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 3 && (t4$1[0] === "data" && (t6$0 = t4$1[1], Array.isArray(t6$0) && (t7$0 = t6$0.length, t7$0 === 1 && (t6$0[0] === "void" && (bridge$$12351$0 = t4$1[2], Array.isArray(bridge$$12351$0) && (t0$16 = bridge$$12351$0.length, t0$16 === 2 && (bridge$$12351$0[0] === "symbol" && (x$9 = bridge$$12351$0[1], true))) || Array.isArray(bridge$$12351$0) && (t0$17 = bridge$$12351$0.length, t0$17 === 2 && (bridge$$12351$0[0] === "value" && (t1$10 = [true, String(bridge$$12351$0[1])], t1$10[0] && (x$9 = t1$10[1], true))))))))))))))))) {
              return tags$0.push(["value", "." + x$9]);
            } else {
              if ($$12367$0 && (t2$3[1] === "#" && (t4$1 = t0$15[2], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 3 && (t4$1[0] === "data" && (t6$0 = t4$1[1], Array.isArray(t6$0) && (t7$0 = t6$0.length, t7$0 === 1 && (t6$0[0] === "void" && (bridge$$12353$0 = t4$1[2], Array.isArray(bridge$$12353$0) && (t0$18 = bridge$$12353$0.length, t0$18 === 2 && (bridge$$12353$0[0] === "symbol" && (x$10 = bridge$$12353$0[1], true))) || Array.isArray(bridge$$12353$0) && (t0$19 = bridge$$12353$0.length, t0$19 === 2 && (bridge$$12353$0[0] === "value" && (t1$11 = [true, String(bridge$$12353$0[1])], t1$11[0] && (x$10 = t1$11[1], true))))))))))))) {
                return tags$0.push(["value", "#" + x$10]);
              } else {
                if ($$12367$0 && (t2$3[1] === "^" && (t4$1 = t0$15[2], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 3 && (t4$1[0] === "data" && (t6$0 = t4$1[1], Array.isArray(t6$0) && (t7$0 = t6$0.length, t7$0 === 1 && t6$0[0] === "void"))))))) {
                  expr$2 = t4$1[2];return tags$0.push(expr$2);
                } else {
                  if ($$12367$0 && (t2$3[1] === "=" && (t4$1 = t0$15[2], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 3 && t4$1[0] === "data")))) {
                    t4$1[1];t4$1[2];return kv$0.push(whole$0);
                  } else {
                    if ($$12362$0) {
                      expr$3 = t0$15[1];rest$1 = t0$15[2];parse$0(expr$3);return parse$0(rest$1);
                    } else {
                      bridge$$12358$0 = ph$3$0;if (Array.isArray(bridge$$12358$0) && (t0$20 = bridge$$12358$0.length, t0$20 >= 1 && (bridge$$12358$0[0] === "multi" && (args$0 = Array.prototype.slice.call(bridge$$12358$0, 1), true))) || Array.isArray(bridge$$12358$0) && (t0$21 = bridge$$12358$0.length, t0$21 >= 1 && (bridge$$12358$0[0] === "data" && (args$0 = Array.prototype.slice.call(bridge$$12358$0, 1), true)))) {
                        acc$0 = [];temp$8 = null;m$3 = null;$4: for (var _iterator2 = args$0[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
                          m$3 = _step2.value;
                          var arg$0 = undefined;arg$0 = m$3;temp$8 = parse$0(arg$0);acc$0.push(temp$8);
                        }return acc$0;
                      } else {
                        return ___match_error(ph$3$0);
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    };parse$0(descr$0);m$4$0 = contents$0;if (($$12597$0 = Array.isArray(m$4$0)) && (t0$22 = m$4$0.length, t0$22 === 1 && m$4$0[0] === "void")) {
      contents$0 = ["array"];
    } else {
      if ($$12597$0 && (t0$22 >= 1 && m$4$0[0] === "multi")) {
        args$1 = Array.prototype.slice.call(m$4$0, 1);xs$0 = [];m$5 = null;$5: for (var _iterator3 = args$1[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
          m$5 = _step3.value;
          var other$1 = undefined;var spl$0 = undefined;var pair$0 = undefined;var k$1 = undefined;var v$1 = undefined;var $$12623$0 = undefined;var t0$23 = undefined;var t1$13 = undefined;var t2$5 = undefined;var t3$3 = undefined;var t4$3 = undefined;var t5$2 = undefined;var t6$1 = undefined;var t7$1 = undefined;t0$23 = m$5;pair$0 = t0$23;if (Array.isArray(t0$23) && (t1$13 = t0$23.length, t1$13 === 3 && (t0$23[0] === "send" && (t2$5 = t0$23[1], Array.isArray(t2$5) && (t3$3 = t2$5.length, t3$3 === 2 && (t2$5[0] === "symbol" && (t2$5[1] === "=" && (t4$3 = t0$23[2], Array.isArray(t4$3) && (t5$2 = t4$3.length, t5$2 === 3 && t4$3[0] === "data"))))))))) {
            k$1 = t4$3[1];v$1 = t4$3[2];kv$0.push(pair$0);
          } else {
            spl$0 = t0$23;if (Array.isArray(t0$23) && (t1$13 = t0$23.length, t1$13 === 3 && (t0$23[0] === "send" && (t2$5 = t0$23[1], Array.isArray(t2$5) && (t3$3 = t2$5.length, t3$3 === 2 && (t2$5[0] === "symbol" && (t2$5[1] === "**" && (t4$3 = t0$23[2], Array.isArray(t4$3) && (t5$2 = t4$3.length, t5$2 === 3 && (t4$3[0] === "data" && (t6$1 = t4$3[1], Array.isArray(t6$1) && (t7$1 = t6$1.length, t7$1 === 1 && t6$1[0] === "void")))))))))))) {
              t4$3[2];kv$0.push(spl$0);
            } else {
              other$1 = m$5;xs$0.push(other$1);
            }
          }
        }contents$0 = ["array"].concat(xs$0);
      } else {
        pair$1 = m$4$0;if (Array.isArray(m$4$0) && (t0$22 = m$4$0.length, t0$22 === 3 && (m$4$0[0] === "send" && (t1$12 = m$4$0[1], Array.isArray(t1$12) && (t2$4 = t1$12.length, t2$4 === 2 && (t1$12[0] === "symbol" && (t1$12[1] === "=" && (t3$2 = m$4$0[2], Array.isArray(t3$2) && (t4$2 = t3$2.length, t4$2 === 3 && t3$2[0] === "data"))))))))) {
          k$2 = t3$2[1];v$2 = t3$2[2];kv$0.push(pair$1);contents$0 = ["array"];
        } else {
          x$11 = m$4$0;contents$0 = x$11;
        }
      }
    }node$0 = form$3.env.mark(["symbol", "ENode"]);return ["send", node$0, ["data", tags$0, kv$0, contents$0]];
  };t0$24 = getProjector(mac$0("%"))($targ$4);if (t0$24[0]) {
    buildnode_mac$0 = t0$24[1];
  } else {
    ___match_error($targ$4);
  }$targ$5 = function (context$1, info$3, form$4, arg$1) {
    var text$1 = undefined;var text$0 = undefined;var m$6$0 = undefined;return ["value", (m$6$0 = info$3.gettext(arg$1), getChecker(RegExp("^\\[(.|\\n)*\\]$", ""))(m$6$0) ? (text$0 = m$6$0, text$0.substring(1, text$0.length - 1)) : (text$1 = m$6$0, text$1))];
  };t0$25 = getProjector(mac$0("S"))($targ$5);if (t0$25[0]) {
    S_mac$0 = t0$25[1];
  } else {
    ___match_error($targ$5);
  }$targ$6 = function (context$2, info$4, form$5, ph$4$0) {
    var arg$2 = undefined;var t0$26 = undefined;var t1$14 = undefined;t0$26 = ph$4$0;t1$14 = t0$26.length;if (t1$14 === 1 && t0$26[0] === "void") {
      return ["send", ["send", ["symbol", "console"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "log"]]]], ["data"]];
    } else {
      arg$2 = ph$4$0;return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "t"], arg$2]], ["send", ["send", ["symbol", "console"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "log"]]]], ["data", ["symbol", "t"]]], ["symbol", "t"]];
    }
  };t0$27 = getProjector(mac$0("print"))($targ$6);if (t0$27[0]) {
    print_mac$0 = t0$27[1];
  } else {
    ___match_error($targ$6);
  }$targ$7 = function (context$3, temp$9$0, form$6, expr$4) {
    var t0$28 = undefined;var t0$42 = undefined;var t1$22 = undefined;var t2$12 = undefined;var t0$43 = undefined;var name$2 = undefined;var name$1 = undefined;var super$2 = undefined;var t0$41 = undefined;var t1$21 = undefined;var t2$11 = undefined;var t3$9 = undefined;var bridge$$12816$0 = undefined;var stmts$3 = undefined;var ph$5$0 = undefined;var stmts$2 = undefined;var $$12818$0 = undefined;var $$12819$0 = undefined;var t0$40 = undefined;var t1$20 = undefined;var t2$10 = undefined;var t3$8 = undefined;var m$7$0 = undefined;var helper$0 = undefined;var info$5 = undefined;var env$3 = undefined;t0$28 = temp$9$0;info$5 = t0$28;if (___hasprop(t0$28, "env")) {
      env$3 = t0$28.env;
    } else {
      ___match_error(temp$9$0);
    }helper$0 = function helper(name$0, super$1, stmts$1) {
      var m$10 = undefined;var acc$1 = undefined;var temp$10 = undefined;var t0$36 = undefined;var t1$19 = undefined;var t0$37 = undefined;var $targ$15 = undefined;var env2$0 = undefined;var it$3 = undefined;var cls$0 = undefined;var name_str$0 = undefined;var t0$38 = undefined;var m$8$0 = undefined;var other$3 = undefined;var t0$39 = undefined;var m$9$0 = undefined;var statics$0 = undefined;var ctor$0 = undefined;var new_stmts$0 = undefined;var $targ$13 = undefined;var ctor_args$0 = undefined;var ctor_body$0 = undefined;var ctor_expr$0 = undefined;var node$1 = undefined;statics$0 = ["data", ["symbol", "="]];ctor$0 = [["data"], __amp__(["multi"], { env: env$3 })];acc$1 = [];temp$10 = null;m$10 = null;$6: for (var _iterator4 = stmts$1[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
        (function () {
          m$10 = _step4.value;
          var t0$30 = undefined;var t1$16 = undefined;var t2$7 = undefined;var t3$5 = undefined;var t4$5 = undefined;var t5$4 = undefined;var t6$3 = undefined;var t7$3 = undefined;var t8$1 = undefined;var t0$31 = undefined;var t1$17 = undefined;var t2$8 = undefined;var t3$6 = undefined;var t4$6 = undefined;var t5$5 = undefined;var t6$4 = undefined;var t7$4 = undefined;var t8$2 = undefined;var t9$0 = undefined;var t10$0 = undefined;var t11$0 = undefined;var t12$0 = undefined;var accum$2 = undefined;var accum$3 = undefined;var accum$4 = undefined;var accum$5 = undefined;var opt$1 = undefined;var lhs$0 = undefined;var rhs$0 = undefined;var args$2 = undefined;var body$3 = undefined;var methods$0 = undefined;var t0$29 = undefined;var t1$15 = undefined;var t2$6 = undefined;var t3$4 = undefined;var t4$4 = undefined;var t5$3 = undefined;var t6$2 = undefined;var t7$2 = undefined;var t8$0 = undefined;var bridge$$12847$0 = undefined;t0$29 = m$10;if (Array.isArray(t0$29) && (t1$15 = t0$29.length, t1$15 === 3 && (t0$29[0] === "send" && (t2$6 = t0$29[1], Array.isArray(t2$6) && (t3$4 = t2$6.length, t3$4 === 2 && (t2$6[0] === "symbol" && (t2$6[1] === "static" && (t4$4 = t0$29[2], Array.isArray(t4$4) && (t5$3 = t4$4.length, t5$3 === 2 && (t4$4[0] === "data" && (t6$2 = getProjector(Body$0)(t4$4[1]), t6$2[0] && (t7$2 = t6$2[1], t8$0 = t7$2.length, t8$0 >= 0)))))))))))) {
            methods$0 = Array.prototype.slice.call(t7$2, 0);temp$10 = statics$0 = statics$0.concat(methods$0);acc$1.push(temp$10);
          } else {
            bridge$$12847$0 = m$10;if (Array.isArray(bridge$$12847$0) && (t0$30 = bridge$$12847$0.length, t0$30 === 3 && (bridge$$12847$0[0] === "send" && (t1$16 = bridge$$12847$0[1], Array.isArray(t1$16) && (t2$7 = t1$16.length, t2$7 === 2 && (t1$16[0] === "symbol" && (t1$16[1] === "=" && (t3$5 = bridge$$12847$0[2], Array.isArray(t3$5) && (t4$5 = t3$5.length, t4$5 === 3 && (t3$5[0] === "data" && (t5$4 = t3$5[1], Array.isArray(t5$4) && (t6$3 = t5$4.length, t6$3 === 3 && (t5$4[0] === "send" && (t7$3 = t5$4[1], Array.isArray(t7$3) && (t8$1 = t7$3.length, t8$1 === 2 && (t7$3[0] === "symbol" && (t7$3[1] === "constructor" && (args$2 = t5$4[2], body$3 = t3$5[2], true))))))))))))))))) || Array.isArray(bridge$$12847$0) && (t0$31 = bridge$$12847$0.length, t0$31 === 3 && (bridge$$12847$0[0] === "send" && (t1$17 = bridge$$12847$0[1], Array.isArray(t1$17) && (t2$8 = t1$17.length, t2$8 === 2 && (t1$17[0] === "symbol" && (t1$17[1] === "=" && (t3$6 = bridge$$12847$0[2], Array.isArray(t3$6) && (t4$6 = t3$6.length, t4$6 === 3 && (t3$6[0] === "data" && (t5$5 = t3$6[1], Array.isArray(t5$5) && (t6$4 = t5$5.length, t6$4 === 2 && (t5$5[0] === "symbol" && (t5$5[1] === "constructor" && (t7$4 = t3$6[2], Array.isArray(t7$4) && (t8$2 = t7$4.length, t8$2 === 3 && (t7$4[0] === "send" && (t9$0 = t7$4[1], Array.isArray(t9$0) && (t10$0 = t9$0.length, t10$0 === 2 && (t9$0[0] === "symbol" && (t9$0[1] === "->" && (t11$0 = t7$4[2], Array.isArray(t11$0) && (t12$0 = t11$0.length, t12$0 === 3 && (t11$0[0] === "data" && (args$2 = t11$0[1], body$3 = t11$0[2], true))))))))))))))))))))))))) {
              ctor$0 = [args$2, body$3];temp$10 = ["splice"];acc$1.push(temp$10);
            } else {
              t0$29 = m$10;if (Array.isArray(t0$29) && (t1$15 = t0$29.length, t1$15 === 3 && (t0$29[0] === "send" && (t2$6 = t0$29[1], Array.isArray(t2$6) && (t3$4 = t2$6.length, t3$4 === 2 && (t2$6[0] === "symbol" && (t2$6[1] === "=" && (t4$4 = t0$29[2], Array.isArray(t4$4) && (t5$3 = t4$4.length, t5$3 === 3 && t4$4[0] === "data"))))))))) {
                lhs$0 = t4$4[1];rhs$0 = t4$4[2];opt$1 = __amp__(pattern_handlers$0.build_object, __amp____colon__({ allow_nested: false }, __amp____colon__((accum$2 = {}, accum$2.assign = function assign(temp$11$0, value$0) {
                  var t0$32 = undefined;var t0$33 = undefined;var bridge$$13100$0 = undefined;var v$3 = undefined;bridge$$13100$0 = temp$11$0;if (Array.isArray(bridge$$13100$0) && (t0$32 = bridge$$13100$0.length, t0$32 === 2 && (bridge$$13100$0[0] === "symbol" && (v$3 = bridge$$13100$0[1], true))) || Array.isArray(bridge$$13100$0) && (t0$33 = bridge$$13100$0.length, t0$33 === 2 && (bridge$$13100$0[0] === "value" && (v$3 = bridge$$13100$0[1], true)))) {} else {
                    ___match_error(temp$11$0);
                  }return ["do", __lt____lt____colon__$0(["assign", ["send", ["send", name$0, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]], ["value", v$3]], value$0], v$3)];
                }, accum$2), __amp____colon__((accum$3 = {}, accum$3.declare = function declare(vars$0) {
                  return [];
                }, accum$3), __amp____colon__((accum$4 = {}, accum$4.wrap_target = function wrap_target(ph$6$0) {
                  var t0$35 = undefined;var $targ$14 = undefined;var other_env$0 = undefined;var it$2 = undefined;var it2$0 = undefined;var other$2 = undefined;var args$3 = undefined;var body$4 = undefined;var t0$34 = undefined;var t1$18 = undefined;var t2$9 = undefined;var t3$7 = undefined;var t4$7 = undefined;var t5$6 = undefined;t0$34 = ph$6$0;t1$18 = t0$34.length;if (t1$18 === 3 && (t0$34[0] === "send" && (t2$9 = t0$34[1], Array.isArray(t2$9) && (t3$7 = t2$9.length, t3$7 === 2 && (t2$9[0] === "symbol" && (t2$9[1] === "->" && (t4$7 = t0$34[2], Array.isArray(t4$7) && (t5$6 = t4$7.length, t5$6 === 3 && t4$7[0] === "data")))))))) {
                    args$3 = t4$7[1];body$4 = t4$7[2];$targ$14 = body$4;t0$35 = $targ$14;if (___hasprop(t0$35, "env")) {
                      other_env$0 = t0$35.env;
                    } else {
                      ___match_error($targ$14);
                    }it$2 = __amp__(["symbol", "@"], { env: other_env$0 });it2$0 = __amp__(["symbol", "self"], { env: other_env$0 });return ["send", ["symbol", "_lambda"], ["data", args$3, ["send", ["symbol", "splice"], ["data", ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], it$2], ["symbol", "this"]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], it2$0], ["symbol", "this"]]]]]], body$4, ["value", null], ["value", false]]];
                  } else {
                    other$2 = ph$6$0;return other$2;
                  }
                }, accum$4), (accum$5 = {}, accum$5.success = function success(temp$12$0) {
                  return ["splice"];
                }, accum$5))))));temp$10 = PatternCompiler$0(lhs$0, info$5, opt$1).extract_from_rhs(rhs$0);acc$1.push(temp$10);
              } else {
                if (false) {
                  temp$10 = undefined;acc$1.push(temp$10);
                } else {
                  false;
                }
              }
            }
          }
        })();
      }new_stmts$0 = acc$1;$targ$13 = ctor$0;t0$36 = $targ$13;if (Array.isArray(t0$36) && (t1$19 = t0$36.length, t1$19 === 2)) {
        ctor_args$0 = t0$36[0];ctor_body$0 = t0$36[1];
      } else {
        ___match_error($targ$13);
      }[ctor_args$0, ctor_body$0];$targ$15 = ctor_body$0;t0$37 = $targ$15;if (___hasprop(t0$37, "env")) {
        env2$0 = t0$37.env;
      } else {
        ___match_error($targ$15);
      }it$3 = __amp__(["symbol", "@"], { env: env2$0 });cls$0 = ["send", ["symbol", "_lambda"], ["data", ctor_args$0, ["send", ["symbol", "="], ["data", it$3, ["send", ["symbol", "if"], ["data", ["send", ["symbol", "not"], ["data", ["void"], ["send", ["symbol", "?"], ["data", name$0, ["symbol", "this"]]]]], ["send", ["send", ["symbol", "Object"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "create"]]]], ["data", ["send", name$0, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]]]], ["symbol", "this"]]]]], ctor_body$0, it$3, ["value", false]]];if (super$1) {
        ctor_expr$0 = ["send", ["symbol", "___extend"], ["data", cls$0, super$1]];
      } else {
        ctor_expr$0 = cls$0;
      }m$8$0 = name$0;if (Array.isArray(m$8$0) && (t0$38 = m$8$0.length, t0$38 === 2 && m$8$0[0] === "symbol")) {
        name_str$0 = m$8$0[1];statics$0.push(["send", ["symbol", "="], ["data", ["value", "::name"], ["value", name_str$0]]]);
      } else {
        undefined;
      }statics$0.push(["send", ["symbol", "="], ["data", ["value", "::egclass"], ["symbol", "true"]]]);node$1 = ["splice", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], name$0], ctor_expr$0]]].concat(new_stmts$0).concat([["send", ["symbol", "&:"], ["data", name$0, statics$0]], name$0]);m$9$0 = context$3;if (Array.isArray(m$9$0) && (t0$39 = m$9$0.length, t0$39 === 2 && (m$9$0[0] === "expr" && m$9$0[1] === "multi"))) {
        return node$1;
      } else {
        other$3 = m$9$0;return ["multi", node$1];
      }
    };m$7$0 = expr$4;if (($$12818$0 = Array.isArray(m$7$0)) && (t0$40 = m$7$0.length, t0$40 === 3 && (m$7$0[0] === "data" && (ph$5$0 = m$7$0[1], t1$20 = getProjector(Body$0)(m$7$0[2]), t1$20[0] && (t2$10 = t1$20[1], t3$8 = t2$10.length, t3$8 >= 0))))) {
      stmts$2 = Array.prototype.slice.call(t2$10, 0);t0$41 = ph$5$0;if (Array.isArray(t0$41) && (t1$21 = t0$41.length, t1$21 === 3 && (t0$41[0] === "send" && (name$1 = t0$41[1], t2$11 = t0$41[2], Array.isArray(t2$11) && (t3$9 = t2$11.length, t3$9 === 2 && t2$11[0] === "data"))))) {
        super$2 = t2$11[1];return helper$0(name$1, super$2, stmts$2);
      } else {
        bridge$$12816$0 = ph$5$0;if (Array.isArray(bridge$$12816$0) && (t0$42 = bridge$$12816$0.length, t0$42 === 3 && (bridge$$12816$0[0] === "send" && (name$2 = bridge$$12816$0[1], t1$22 = bridge$$12816$0[2], Array.isArray(t1$22) && (t2$12 = t1$22.length, t2$12 === 1 && t1$22[0] === "data")))) || Array.isArray(bridge$$12816$0) && (t0$43 = bridge$$12816$0.length, t0$43 === 2 && (bridge$$12816$0[0] === "symbol" && (bridge$$12816$0[1], name$2 = bridge$$12816$0, true)))) {
          return helper$0(name$2, null, stmts$2);
        } else {
          return ___match_error(ph$5$0);
        }
      }
    } else {
      if ($$12818$0 && (t0$40 === 2 && (m$7$0[0] === "data" && (t1$20 = getProjector(Body$0)(m$7$0[1]), t1$20[0] && (t2$10 = t1$20[1], t3$8 = t2$10.length, t3$8 >= 0))))) {
        stmts$3 = Array.prototype.slice.call(t2$10, 0);return helper$0(["symbol", info$5.gensym()], null, stmts$3);
      } else {
        return ___match_error(m$7$0);
      }
    }
  };t0$44 = getProjector(mac$0("class"))($targ$7);if (t0$44[0]) {
    class_mac$0 = t0$44[1];
  } else {
    ___match_error($targ$7);
  }errf_macro$0 = function errf_macro(tags$1) {
    return function (ph$7$0, temp$13$0, form$7, expr$5) {
      var x$12 = undefined;var x$13 = undefined;var other$4 = undefined;var args$4 = undefined;var $$13445$0 = undefined;var $$13446$0 = undefined;var t0$45 = undefined;var m$11$0 = undefined;var ctx$0 = undefined;var bridge$$13414$0 = undefined;bridge$$13414$0 = ph$7$0;if ((x$12 = bridge$$13414$0, x$12 instanceof Array && x$12[0] === "check") || (x$13 = bridge$$13414$0, x$13 instanceof Array && x$13[0] === "project")) {
        return ["nostep", form$7];
      } else {
        ctx$0 = ph$7$0;m$11$0 = expr$5;if (($$13445$0 = Array.isArray(m$11$0)) && (t0$45 = m$11$0.length, t0$45 === 1 && m$11$0[0] === "void")) {
          return ["send", ["symbol", "ErrorFactory"], ["data", ["data"].concat(tags$1)]];
        } else {
          if ($$13445$0 && (t0$45 >= 1 && m$11$0[0] === "data")) {
            args$4 = Array.prototype.slice.call(m$11$0, 1);return ["send", ["send", ["send", ["symbol", "ErrorFactory"], ["data", ["data"].concat(tags$1)]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "create"]]]], ["data"].concat(args$4)];
          } else {
            other$4 = m$11$0;return ["macro", errf_macro$0(tags$1.concat([other$4]))];
          }
        }
      }
    };
  };$targ$8 = errf_macro$0([]);t0$46 = getProjector(mac$0("E"))($targ$8);if (t0$46[0]) {
    E_mac$0 = t0$46[1];
  } else {
    ___match_error($targ$8);
  }return exports$0;
};module.exports = $targ$0;[];
//# sourceMappingURL=misc.js.map

