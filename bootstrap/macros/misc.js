"use strict";
require("earlgrey-runtime");
var $targ$10;
var $0$0;
var __lt____lt____colon__$0;
var $1$0;
var expr_mac$0;
var var_operator$0;
var overridable$0;
var pattern_handlers$0;
var Body$0;
var $2$0;
var PatternCompiler$0;
$0$0 = require("../location");
__lt____lt____colon__$0 = $0$0["<<:"];
$1$0 = require("./helpers");
expr_mac$0 = $1$0.expr_mac;
var_operator$0 = $1$0.var_operator;
overridable$0 = $1$0.overridable;
pattern_handlers$0 = $1$0.pattern_handlers;
Body$0 = $1$0.Body;
$2$0 = require("../pattern");
PatternCompiler$0 = $2$0.PatternCompiler;
$targ$10 = (function(mac$0) {
  var m$0;
  var $targ$32;
  var accum$0;
  var $targ$33;
  var accum$1;
  var t0$6;
  var t1$4;
  var t0$8;
  var t1$7;
  var t0$11;
  var t0$22;
  var t0$23;
  var t0$25;
  var t0$42;
  var errf_macro$0;
  var t0$44;
  var ChainHandler$0;
  var $targ$12;
  var $targ$13;
  var $targ$15;
  var chain_mac$0;
  var $targ$16;
  var using_mac$0;
  var $targ$17;
  var do_mac$0;
  var $targ$18;
  var buildnode_mac$0;
  var $targ$19;
  var S_mac$0;
  var $targ$20;
  var print_mac$0;
  var $targ$21;
  var class_mac$0;
  var $targ$22;
  var E_mac$0;
  var exports$0;
  exports$0 = ({});
  m$0 = null;
  $3: for (var $__0 = items(({"@": var_operator$0("$it")}))[$traceurRuntime.toProperty(Symbol.iterator)](),
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
        ___match_error(m$0, "/home/olivier/git/earl-grey/src/macros/misc.eg", 222, 261);
      }
    }
  }
  ChainHandler$0 = (function(temp$0$0) {
    var $targ$26;
    var $it$0;
    if ((!getChecker(ChainHandler$0)(this))) {
      $it$0 = Object.create(ChainHandler$0.prototype);
    } else {
      $it$0 = this;
    }
    ($it$0["env"] = temp$0$0);
    $targ$26 = 2;
    ($it$0["wrapOrder"] = $targ$26);
    [];
    return $it$0;
  });
  $targ$12 = (function(info$0) {
    var $targ$29;
    var $it$1;
    var self$0;
    $it$1 = this;
    self$0 = this;
    $targ$29 = $it$1.env.mark(["symbol", info$0.gensym("ph")]);
    ($it$1["placeholder"] = $targ$29);
    [];
    return $it$1.placeholder;
  });
  (ChainHandler$0.prototype["expand"] = $targ$12);
  $targ$13 = (function(expr$0, info$1, opt$0) {
    var $it$2;
    var self$1;
    $it$2 = this;
    self$1 = this;
    return ["send", ["symbol", "chain"], ["data", $it$2.placeholder, expr$0]];
  });
  (ChainHandler$0.prototype["wrap"] = $targ$13);
  __amp____colon__(ChainHandler$0, __amp____colon__((($targ$32 = "ChainHandler"), (accum$0 = ({})), (accum$0["::name"] = $targ$32), accum$0), (($targ$33 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$33), accum$1)));
  $targ$15 = (function(ph$0$0, info$2, form$0, expr$1) {
    var x$0;
    var t0$1;
    var other$0;
    var m$1$0;
    var t0$2;
    var t0$3;
    var t5$0;
    var t4$0;
    var t3$0;
    var t2$0;
    var t1$1;
    var t0$4;
    var $targ$40;
    var defn$0;
    var env$0;
    var body$0;
    var it$0;
    var construct$0;
    var bridge$$12286$0;
    if (((x$0 = ph$0$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {
      m$1$0 = expr$1;
      if (((m$1$0 instanceof Array) && ((t0$1 = m$1$0.length), ((t0$1 === 1) && (m$1$0[0] === "void"))))) {
        return ["special", ChainHandler$0(form$0.env)];
      } else {
        other$0 = m$1$0;
        return ["all", __lt____lt____colon__$0(other$0, expr$1), __lt____lt____colon__$0(["special", ChainHandler$0(form$0.env)], form$0)];
      }
    } else {
      bridge$$12286$0 = ph$0$0;
      if ((((bridge$$12286$0 instanceof Array) && ((t0$2 = bridge$$12286$0.length), ((t0$2 === 2) && ((bridge$$12286$0[0] === "expr") && (bridge$$12286$0[1] === "expr"))))) || ((bridge$$12286$0 instanceof Array) && ((t0$3 = bridge$$12286$0.length), ((t0$3 === 2) && ((bridge$$12286$0[0] === "expr") && (bridge$$12286$0[1] === "head"))))))) {
        $targ$40 = expr$1;
        t0$4 = $targ$40;
        if (((t0$4 instanceof Array) && ((t1$1 = t0$4.length), ((t1$1 === 3) && ((t0$4[0] === "data") && ((t2$0 = t0$4[1]), (defn$0 = t2$0), (___hasprop(t2$0, "env") && ((env$0 = t2$0.env), (t3$0 = getProjector(Body$0)(t0$4[2])), (t3$0[0] && ((t4$0 = t3$0[1]), (t5$0 = t4$0.length), (t5$0 >= 0))))))))))) {
          body$0 = Array.prototype.slice.call(t4$0, 0);
        } else {
          ___match_error($targ$40);
        }
        [defn$0, env$0, body$0];
        it$0 = __amp__(["symbol", "@"], ({"env": env$0}));
        construct$0 = (function(ph$1$0) {
          var x$2;
          var rest$0;
          var t0$5;
          var t1$2;
          var x$1;
          var $$12383$0;
          var $$12384$0;
          t0$5 = ph$1$0;
          t1$2 = t0$5.length;
          if ((t1$2 === 1)) {
            x$1 = t0$5[0];
            return x$1;
          } else {
            if ((t1$2 >= 1)) {
              x$2 = t0$5[0];
              rest$0 = Array.prototype.slice.call(t0$5, 1);
              return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$0, x$2]], construct$0(rest$0)]];
            } else {
              return ___match_error(ph$1$0);
            }
          }
        });
        return construct$0([defn$0].concat(body$0));
      } else {
        return ["nostep", form$0];
      }
    }
  });
  t0$6 = getProjector(mac$0("chain"))($targ$15);
  if (t0$6[0]) {
    chain_mac$0 = t0$6[1];
  } else {
    ___match_error($targ$15);
  }
  $targ$16 = (function(temp$1$0, form$1, temp$2$0) {
    var t2$1;
    var t1$3;
    var t0$7;
    var it$1;
    var defn$1;
    var env$1;
    var body$1;
    t0$7 = temp$2$0;
    if (((t0$7 instanceof Array) && ((t1$3 = t0$7.length), ((t1$3 === 3) && ((t0$7[0] === "data") && ((t2$1 = t0$7[1]), (defn$1 = t2$1), ___hasprop(t2$1, "env"))))))) {
      env$1 = t2$1.env;
      body$1 = t0$7[2];
    } else {
      ___match_error(temp$2$0);
    }
    it$1 = __amp__(["symbol", "@"], ({"env": env$1}));
    return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$1, defn$1]], body$1]];
  });
  t0$8 = getProjector(expr_mac$0)($targ$16);
  if ((t0$8[0] && ((t1$4 = getProjector(mac$0("using"))(t0$8[1])), t1$4[0]))) {
    using_mac$0 = t1$4[1];
  } else {
    ___match_error($targ$16);
  }
  $targ$17 = (function(ph$2$0, temp$3$0, form$2, temp$4$0) {
    var t1$5;
    var t0$9;
    var x$3;
    var x$4;
    var t2$2;
    var t1$6;
    var t0$10;
    var $targ$62;
    var stmts$0;
    var x$5;
    var body$2;
    t0$9 = temp$4$0;
    if (((t0$9 instanceof Array) && ((t1$5 = t0$9.length), ((t1$5 === 2) && (t0$9[0] === "data"))))) {
      body$2 = t0$9[1];
    } else {
      ___match_error(temp$4$0);
    }
    if (((x$3 = ph$2$0), ((x$3 instanceof Array) && (x$3[0] === "clause")))) {
      return ["block", body$2];
    } else {
      if (((x$4 = ph$2$0), ((x$4 instanceof Array) && (x$4[0] === "test")))) {
        $targ$62 = body$2;
        t0$10 = getProjector(Body$0)($targ$62);
        if ((t0$10[0] && ((t1$6 = t0$10[1]), (t2$2 = t1$6.length), (t2$2 >= 0)))) {
          stmts$0 = Array.prototype.slice.call(t1$6, 0);
        } else {
          ___match_error($targ$62);
        }
        return ["do", ["splice"].concat(stmts$0)];
      } else {
        if (((x$5 = ph$2$0), ((x$5 instanceof Array) && (x$5[0] === "expr")))) {
          return ["multi", body$2];
        } else {
          return ___match_error(ph$2$0);
        }
      }
    }
  });
  t0$11 = getProjector(overridable$0)($targ$17);
  if ((t0$11[0] && ((t1$7 = getProjector(mac$0("do"))(t0$11[1])), t1$7[0]))) {
    do_mac$0 = t1$7[1];
  } else {
    ___match_error($targ$17);
  }
  $targ$18 = (function(context$0, temp$5$0, form$3, temp$6$0) {
    var t0$12;
    var t1$8;
    var t0$13;
    var x$6;
    var x$7;
    var bridge$$12570$0;
    var m$2$0;
    var $targ$107;
    var m$5;
    var xs$0;
    var t4$2;
    var t3$2;
    var t2$4;
    var t1$11;
    var $targ$122;
    var x$10;
    var pair$1;
    var k$2;
    var v$2;
    var args$1;
    var $$12812$0;
    var $$12813$0;
    var t0$20;
    var m$4$0;
    var tags$0;
    var kv$0;
    var parse$0;
    var node$0;
    var env$2;
    var descr$0;
    var contents$0;
    t0$12 = temp$5$0;
    if (___hasprop(t0$12, "env")) {
      env$2 = t0$12.env;
    } else {
      ___match_error(temp$5$0);
    }
    t0$13 = temp$6$0;
    if (((t0$13 instanceof Array) && ((t1$8 = t0$13.length), ((t1$8 === 3) && (t0$13[0] === "data"))))) {
      descr$0 = t0$13[1];
      contents$0 = t0$13[2];
    } else {
      ___match_error(temp$6$0);
    }
    m$2$0 = context$0;
    bridge$$12570$0 = m$2$0;
    if ((((x$6 = bridge$$12570$0), ((x$6 instanceof Array) && (x$6[0] === "check"))) || ((x$7 = bridge$$12570$0), ((x$7 instanceof Array) && (x$7[0] === "project"))))) {
      return ["nostep", form$3];
    } else {
      undefined;
    }
    tags$0 = ["data"];
    kv$0 = ["data", ["symbol", "="]];
    parse$0 = (function(temp$7$0) {
      var t0$14;
      var $targ$83;
      var t0$16;
      var t1$10;
      var t0$17;
      var bridge$$12613$0;
      var $targ$89;
      var $targ$88;
      var $targ$87;
      var $targ$86;
      var t3$1;
      var $targ$84;
      var $targ$97;
      var $targ$96;
      var $targ$95;
      var $targ$94;
      var $targ$99;
      var $targ$98;
      var t0$18;
      var t0$19;
      var m$3;
      var acc$0;
      var $targ$104;
      var temp$8;
      var bridge$$12618$0;
      var args$0;
      var expr$3;
      var rest$1;
      var expr$2;
      var x$9;
      var x$8;
      var s$0;
      var t0$15;
      var t1$9;
      var $$12619$0;
      var $$12620$0;
      var $$12621$0;
      var $$12622$0;
      var $$12623$0;
      var $$12624$0;
      var $$12625$0;
      var $$12626$0;
      var $$12627$0;
      var t2$3;
      var t4$1;
      var t5$1;
      var t6$0;
      var t7$0;
      var whole$0;
      var ph$3$0;
      t0$14 = temp$7$0;
      whole$0 = t0$14;
      ph$3$0 = t0$14;
      t0$15 = ph$3$0;
      t1$9 = t0$15.length;
      if (((t1$9 === 1) && (t0$15[0] === "void"))) {
        return null;
      } else {
        if ((($$12621$0 = (t1$9 === 2)) && (t0$15[0] === "symbol"))) {
          s$0 = t0$15[1];
          return tags$0.push(["value", s$0]);
        } else {
          if (($$12621$0 && ((t0$15[0] === "value") && (($targ$83 = [true, String(t0$15[1])]), (t2$3 = $targ$83), t2$3[0])))) {
            x$8 = t2$3[1];
            return tags$0.push(["value", x$8]);
          } else {
            if ((($$12621$0 = (t1$9 === 3)) && (($$12622$0 = (t0$15[0] === "send")) && (($targ$84 = t0$15[1]), (t2$3 = $targ$84), (($$12624$0 = (t2$3 instanceof Array)) && ((t3$1 = t2$3.length), (($$12626$0 = (t3$1 === 2)) && (($$12627$0 = (t2$3[0] === "symbol")) && ((t2$3[1] === ".") && (($targ$86 = t0$15[2]), (t4$1 = $targ$86), ((t4$1 instanceof Array) && (($targ$87 = t4$1.length), (t5$1 = $targ$87), ((t5$1 === 3) && ((t4$1[0] === "data") && (($targ$88 = t4$1[1]), (t6$0 = $targ$88), ((t6$0 instanceof Array) && (($targ$89 = t6$0.length), (t7$0 = $targ$89), ((t7$0 === 1) && ((t6$0[0] === "void") && ((bridge$$12613$0 = t4$1[2]), (((bridge$$12613$0 instanceof Array) && ((t0$16 = bridge$$12613$0.length), ((t0$16 === 2) && ((bridge$$12613$0[0] === "symbol") && ((x$9 = bridge$$12613$0[1]), true))))) || ((bridge$$12613$0 instanceof Array) && ((t0$17 = bridge$$12613$0.length), ((t0$17 === 2) && ((bridge$$12613$0[0] === "value") && ((t1$10 = [true, String(bridge$$12613$0[1])]), (t1$10[0] && ((x$9 = t1$10[1]), true)))))))))))))))))))))))))))) {
              return tags$0.push(["value", ("." + x$9)]);
            } else {
              if (($$12627$0 && ((t2$3[1] === "^") && (($targ$94 = t0$15[2]), (t4$1 = $targ$94), ((t4$1 instanceof Array) && (($targ$95 = t4$1.length), (t5$1 = $targ$95), ((t5$1 === 3) && ((t4$1[0] === "data") && (($targ$96 = t4$1[1]), (t6$0 = $targ$96), ((t6$0 instanceof Array) && (($targ$97 = t6$0.length), (t7$0 = $targ$97), ((t7$0 === 1) && (t6$0[0] === "void"))))))))))))) {
                expr$2 = t4$1[2];
                return tags$0.push(expr$2);
              } else {
                if (($$12627$0 && ((t2$3[1] === "=") && (($targ$98 = t0$15[2]), (t4$1 = $targ$98), ((t4$1 instanceof Array) && (($targ$99 = t4$1.length), (t5$1 = $targ$99), ((t5$1 === 3) && (t4$1[0] === "data")))))))) {
                  t4$1[1];
                  t4$1[2];
                  return kv$0.push(whole$0);
                } else {
                  if ($$12622$0) {
                    expr$3 = t0$15[1];
                    rest$1 = t0$15[2];
                    parse$0(expr$3);
                    return parse$0(rest$1);
                  } else {
                    bridge$$12618$0 = ph$3$0;
                    if ((((bridge$$12618$0 instanceof Array) && ((t0$18 = bridge$$12618$0.length), ((t0$18 >= 1) && ((bridge$$12618$0[0] === "multi") && ((args$0 = Array.prototype.slice.call(bridge$$12618$0, 1)), true))))) || ((bridge$$12618$0 instanceof Array) && ((t0$19 = bridge$$12618$0.length), ((t0$19 >= 1) && ((bridge$$12618$0[0] === "data") && ((args$0 = Array.prototype.slice.call(bridge$$12618$0, 1)), true))))))) {
                      acc$0 = [];
                      $targ$104 = null;
                      temp$8 = $targ$104;
                      m$3 = null;
                      $4: for (var $__2 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__3; !($__3 = $__2.next()).done; ) {
                        m$3 = $__3.value;
                        {
                          var $targ$105;
                          var arg$0;
                          arg$0 = m$3;
                          $targ$105 = parse$0(arg$0);
                          temp$8 = $targ$105;
                          acc$0.push(temp$8);
                        }
                      }
                      return acc$0;
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
    });
    parse$0(descr$0);
    m$4$0 = contents$0;
    if ((($$12812$0 = (m$4$0 instanceof Array)) && (($targ$107 = m$4$0.length), (t0$20 = $targ$107), ((t0$20 === 1) && (m$4$0[0] === "void"))))) {
      contents$0 = ["array"];
    } else {
      if (($$12812$0 && ((t0$20 >= 1) && (m$4$0[0] === "multi")))) {
        args$1 = Array.prototype.slice.call(m$4$0, 1);
        xs$0 = [];
        m$5 = null;
        $5: for (var $__2 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__3; !($__3 = $__2.next()).done; ) {
          m$5 = $__3.value;
          {
            var $targ$114;
            var $targ$113;
            var $targ$112;
            var $targ$111;
            var $targ$110;
            var t7$1;
            var t6$1;
            var $targ$119;
            var $targ$118;
            var $targ$117;
            var $targ$116;
            var $targ$115;
            var other$1;
            var spl$0;
            var t0$21;
            var pair$0;
            var k$1;
            var v$1;
            var $$12838$0;
            var t1$12;
            var t2$5;
            var t3$3;
            var t4$3;
            var t5$2;
            t0$21 = m$5;
            pair$0 = t0$21;
            if (((t0$21 instanceof Array) && (($targ$110 = t0$21.length), (t1$12 = $targ$110), ((t1$12 === 3) && ((t0$21[0] === "send") && (($targ$111 = t0$21[1]), (t2$5 = $targ$111), ((t2$5 instanceof Array) && (($targ$112 = t2$5.length), (t3$3 = $targ$112), ((t3$3 === 2) && ((t2$5[0] === "symbol") && ((t2$5[1] === "=") && (($targ$113 = t0$21[2]), (t4$3 = $targ$113), ((t4$3 instanceof Array) && (($targ$114 = t4$3.length), (t5$2 = $targ$114), ((t5$2 === 3) && (t4$3[0] === "data")))))))))))))))) {
              k$1 = t4$3[1];
              v$1 = t4$3[2];
              kv$0.push(pair$0);
            } else {
              spl$0 = t0$21;
              if (((t0$21 instanceof Array) && (($targ$115 = t0$21.length), (t1$12 = $targ$115), ((t1$12 === 3) && ((t0$21[0] === "send") && (($targ$116 = t0$21[1]), (t2$5 = $targ$116), ((t2$5 instanceof Array) && (($targ$117 = t2$5.length), (t3$3 = $targ$117), ((t3$3 === 2) && ((t2$5[0] === "symbol") && ((t2$5[1] === "**") && (($targ$118 = t0$21[2]), (t4$3 = $targ$118), ((t4$3 instanceof Array) && (($targ$119 = t4$3.length), (t5$2 = $targ$119), ((t5$2 === 3) && ((t4$3[0] === "data") && ((t6$1 = t4$3[1]), ((t6$1 instanceof Array) && ((t7$1 = t6$1.length), ((t7$1 === 1) && (t6$1[0] === "void"))))))))))))))))))))) {
                t4$3[2];
                kv$0.push(spl$0);
              } else {
                other$1 = m$5;
                xs$0.push(other$1);
              }
            }
          }
        }
        contents$0 = ["array"].concat(xs$0);
      } else {
        pair$1 = m$4$0;
        if (((m$4$0 instanceof Array) && (($targ$122 = m$4$0.length), (t0$20 = $targ$122), ((t0$20 === 3) && ((m$4$0[0] === "send") && ((t1$11 = m$4$0[1]), ((t1$11 instanceof Array) && ((t2$4 = t1$11.length), ((t2$4 === 2) && ((t1$11[0] === "symbol") && ((t1$11[1] === "=") && ((t3$2 = m$4$0[2]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 3) && (t3$2[0] === "data")))))))))))))))) {
          k$2 = t3$2[1];
          v$2 = t3$2[2];
          kv$0.push(pair$1);
          contents$0 = ["array"];
        } else {
          x$10 = m$4$0;
          contents$0 = x$10;
        }
      }
    }
    node$0 = form$3.env.mark(["symbol", "Node"]);
    return ["send", node$0, ["data", tags$0, kv$0, contents$0]];
  });
  t0$22 = getProjector(mac$0("%"))($targ$18);
  if (t0$22[0]) {
    buildnode_mac$0 = t0$22[1];
  } else {
    ___match_error($targ$18);
  }
  $targ$19 = (function(context$1, info$3, form$4, arg$1) {
    var text$1;
    var text$0;
    var m$6$0;
    return ["value", ((m$6$0 = info$3.gettext(arg$1)), (getChecker(RegExp("^\\[(.|\\n)*\\]$", ""))(m$6$0) ? ((text$0 = m$6$0), text$0.substring(1, (text$0.length - 1))) : ((text$1 = m$6$0), text$1)))];
  });
  t0$23 = getProjector(mac$0("S"))($targ$19);
  if (t0$23[0]) {
    S_mac$0 = t0$23[1];
  } else {
    ___match_error($targ$19);
  }
  $targ$20 = (function(context$2, info$4, form$5, ph$4$0) {
    var arg$2;
    var t0$24;
    var t1$13;
    t0$24 = ph$4$0;
    t1$13 = t0$24.length;
    if (((t1$13 === 1) && (t0$24[0] === "void"))) {
      return ["send", ["send", ["symbol", "console"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "log"]]]], ["data"]];
    } else {
      arg$2 = ph$4$0;
      return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "t"], arg$2]], ["send", ["send", ["symbol", "console"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "log"]]]], ["data", ["symbol", "t"]]], ["symbol", "t"]];
    }
  });
  t0$25 = getProjector(mac$0("print"))($targ$20);
  if (t0$25[0]) {
    print_mac$0 = t0$25[1];
  } else {
    ___match_error($targ$20);
  }
  $targ$21 = (function(context$3, temp$9$0, form$6, expr$4) {
    var t0$26;
    var $targ$218;
    var $targ$217;
    var $targ$216;
    var t0$38;
    var t3$9;
    var t2$11;
    var t1$20;
    var t2$12;
    var t1$21;
    var t0$40;
    var t0$41;
    var bridge$$13031$0;
    var name$2;
    var t0$39;
    var name$1;
    var super$2;
    var $targ$230;
    var $targ$229;
    var $targ$228;
    var stmts$3;
    var ph$5$0;
    var stmts$2;
    var $$13033$0;
    var $$13034$0;
    var t1$19;
    var t2$10;
    var t3$8;
    var m$7$0;
    var helper$0;
    var info$5;
    var env$3;
    t0$26 = temp$9$0;
    info$5 = t0$26;
    if (___hasprop(t0$26, "env")) {
      env$3 = t0$26.env;
    } else {
      ___match_error(temp$9$0);
    }
    helper$0 = (function(name$0, super$1, stmts$1) {
      var m$10;
      var acc$1;
      var $targ$142;
      var temp$10;
      var t1$18;
      var t0$34;
      var t0$35;
      var $targ$206;
      var env2$0;
      var it$3;
      var cls$0;
      var t0$36;
      var name_str$0;
      var m$8$0;
      var t0$37;
      var other$3;
      var m$9$0;
      var $targ$135;
      var statics$0;
      var $targ$136;
      var ctor$0;
      var new_stmts$0;
      var $targ$138;
      var ctor_args$0;
      var ctor_body$0;
      var ctor_expr$0;
      var node$1;
      $targ$135 = ["data", ["symbol", "="]];
      statics$0 = $targ$135;
      $targ$136 = [["data"], __amp__(["multi"], ({"env": env$3}))];
      ctor$0 = $targ$136;
      acc$1 = [];
      $targ$142 = null;
      temp$10 = $targ$142;
      m$10 = null;
      $6: for (var $__2 = stmts$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        m$10 = $__3.value;
        {
          var t8$0;
          var t7$2;
          var t6$2;
          var $targ$148;
          var $targ$147;
          var $targ$146;
          var $targ$145;
          var $targ$144;
          var $targ$152;
          var t8$1;
          var t7$3;
          var t6$3;
          var t5$4;
          var t4$5;
          var t3$5;
          var t2$7;
          var t1$15;
          var t0$28;
          var t12$0;
          var t11$0;
          var t10$0;
          var t9$0;
          var t8$2;
          var t7$4;
          var t6$4;
          var t5$5;
          var t4$6;
          var t3$6;
          var t2$8;
          var t1$16;
          var t0$29;
          var $targ$177;
          var $targ$176;
          var $targ$183;
          var $targ$182;
          var $targ$181;
          var $targ$180;
          var $targ$179;
          var $targ$186;
          var accum$2;
          var $targ$187;
          var accum$3;
          var $targ$188;
          var accum$4;
          var $targ$189;
          var accum$5;
          var opt$1;
          var $targ$184;
          var $targ$203;
          var $targ$178;
          var lhs$0;
          var rhs$0;
          var bridge$$13058$0;
          var args$2;
          var body$3;
          var $targ$143;
          var methods$0;
          var t0$27;
          var t1$14;
          var t2$6;
          var t3$4;
          var t4$4;
          var t5$3;
          $targ$143 = m$10;
          t0$27 = $targ$143;
          if (((t0$27 instanceof Array) && (($targ$144 = t0$27.length), (t1$14 = $targ$144), ((t1$14 === 3) && ((t0$27[0] === "send") && (($targ$145 = t0$27[1]), (t2$6 = $targ$145), ((t2$6 instanceof Array) && (($targ$146 = t2$6.length), (t3$4 = $targ$146), ((t3$4 === 2) && ((t2$6[0] === "symbol") && ((t2$6[1] === "static") && (($targ$147 = t0$27[2]), (t4$4 = $targ$147), ((t4$4 instanceof Array) && (($targ$148 = t4$4.length), (t5$3 = $targ$148), ((t5$3 === 2) && ((t4$4[0] === "data") && ((t6$2 = getProjector(Body$0)(t4$4[1])), (t6$2[0] && ((t7$2 = t6$2[1]), (t8$0 = t7$2.length), (t8$0 >= 0)))))))))))))))))))) {
            methods$0 = Array.prototype.slice.call(t7$2, 0);
            $targ$152 = (statics$0 = statics$0.concat(methods$0));
            temp$10 = $targ$152;
            acc$1.push(temp$10);
          } else {
            bridge$$13058$0 = m$10;
            if ((((bridge$$13058$0 instanceof Array) && ((t0$28 = bridge$$13058$0.length), ((t0$28 === 3) && ((bridge$$13058$0[0] === "send") && ((t1$15 = bridge$$13058$0[1]), ((t1$15 instanceof Array) && ((t2$7 = t1$15.length), ((t2$7 === 2) && ((t1$15[0] === "symbol") && ((t1$15[1] === "=") && ((t3$5 = bridge$$13058$0[2]), ((t3$5 instanceof Array) && ((t4$5 = t3$5.length), ((t4$5 === 3) && ((t3$5[0] === "data") && ((t5$4 = t3$5[1]), ((t5$4 instanceof Array) && ((t6$3 = t5$4.length), ((t6$3 === 3) && ((t5$4[0] === "send") && ((t7$3 = t5$4[1]), ((t7$3 instanceof Array) && ((t8$1 = t7$3.length), ((t8$1 === 2) && ((t7$3[0] === "symbol") && ((t7$3[1] === "constructor") && ((args$2 = t5$4[2]), (body$3 = t3$5[2]), true))))))))))))))))))))))))))) || ((bridge$$13058$0 instanceof Array) && ((t0$29 = bridge$$13058$0.length), ((t0$29 === 3) && ((bridge$$13058$0[0] === "send") && ((t1$16 = bridge$$13058$0[1]), ((t1$16 instanceof Array) && ((t2$8 = t1$16.length), ((t2$8 === 2) && ((t1$16[0] === "symbol") && ((t1$16[1] === "=") && ((t3$6 = bridge$$13058$0[2]), ((t3$6 instanceof Array) && ((t4$6 = t3$6.length), ((t4$6 === 3) && ((t3$6[0] === "data") && ((t5$5 = t3$6[1]), ((t5$5 instanceof Array) && ((t6$4 = t5$5.length), ((t6$4 === 2) && ((t5$5[0] === "symbol") && ((t5$5[1] === "constructor") && ((t7$4 = t3$6[2]), ((t7$4 instanceof Array) && ((t8$2 = t7$4.length), ((t8$2 === 3) && ((t7$4[0] === "send") && ((t9$0 = t7$4[1]), ((t9$0 instanceof Array) && ((t10$0 = t9$0.length), ((t10$0 === 2) && ((t9$0[0] === "symbol") && ((t9$0[1] === "->") && ((t11$0 = t7$4[2]), ((t11$0 instanceof Array) && ((t12$0 = t11$0.length), ((t12$0 === 3) && ((t11$0[0] === "data") && ((args$2 = t11$0[1]), (body$3 = t11$0[2]), true)))))))))))))))))))))))))))))))))))))))) {
              $targ$177 = [args$2, body$3];
              ctor$0 = $targ$177;
              $targ$176 = ["splice"];
              temp$10 = $targ$176;
              acc$1.push(temp$10);
            } else {
              $targ$178 = m$10;
              t0$27 = $targ$178;
              if (((t0$27 instanceof Array) && (($targ$179 = t0$27.length), (t1$14 = $targ$179), ((t1$14 === 3) && ((t0$27[0] === "send") && (($targ$180 = t0$27[1]), (t2$6 = $targ$180), ((t2$6 instanceof Array) && (($targ$181 = t2$6.length), (t3$4 = $targ$181), ((t3$4 === 2) && ((t2$6[0] === "symbol") && ((t2$6[1] === "=") && (($targ$182 = t0$27[2]), (t4$4 = $targ$182), ((t4$4 instanceof Array) && (($targ$183 = t4$4.length), (t5$3 = $targ$183), ((t5$3 === 3) && (t4$4[0] === "data")))))))))))))))) {
                lhs$0 = t4$4[1];
                rhs$0 = t4$4[2];
                opt$1 = __amp__(pattern_handlers$0.build_object, __amp____colon__(({"allow_nested": false}), __amp____colon__((($targ$186 = (function(temp$11$0, value$0) {
                  var t0$30;
                  var t0$31;
                  var bridge$$13305$0;
                  var v$3;
                  bridge$$13305$0 = temp$11$0;
                  if ((((bridge$$13305$0 instanceof Array) && ((t0$30 = bridge$$13305$0.length), ((t0$30 === 2) && ((bridge$$13305$0[0] === "symbol") && ((v$3 = bridge$$13305$0[1]), true))))) || ((bridge$$13305$0 instanceof Array) && ((t0$31 = bridge$$13305$0.length), ((t0$31 === 2) && ((bridge$$13305$0[0] === "value") && ((v$3 = bridge$$13305$0[1]), true))))))) {} else {
                    ___match_error(temp$11$0);
                  }
                  return ["do", __lt____lt____colon__$0(["assign", ["send", ["send", name$0, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]], ["value", v$3]], value$0], v$3)];
                })), (accum$2 = ({})), (accum$2["assign"] = $targ$186), accum$2), __amp____colon__((($targ$187 = (function(vars$0) {
                  return [];
                })), (accum$3 = ({})), (accum$3["declare"] = $targ$187), accum$3), __amp____colon__((($targ$188 = (function(ph$6$0) {
                  var t5$6;
                  var t4$7;
                  var t3$7;
                  var t2$9;
                  var t0$33;
                  var $targ$199;
                  var other_env$0;
                  var it$2;
                  var it2$0;
                  var other$2;
                  var t0$32;
                  var t1$17;
                  var args$3;
                  var body$4;
                  t0$32 = ph$6$0;
                  t1$17 = t0$32.length;
                  if (((t1$17 === 3) && ((t0$32[0] === "send") && ((t2$9 = t0$32[1]), ((t2$9 instanceof Array) && ((t3$7 = t2$9.length), ((t3$7 === 2) && ((t2$9[0] === "symbol") && ((t2$9[1] === "->") && ((t4$7 = t0$32[2]), ((t4$7 instanceof Array) && ((t5$6 = t4$7.length), ((t5$6 === 3) && (t4$7[0] === "data")))))))))))))) {
                    args$3 = t4$7[1];
                    body$4 = t4$7[2];
                    $targ$199 = body$4;
                    t0$33 = $targ$199;
                    if (___hasprop(t0$33, "env")) {
                      other_env$0 = t0$33.env;
                    } else {
                      ___match_error($targ$199);
                    }
                    it$2 = __amp__(["symbol", "@"], ({"env": other_env$0}));
                    it2$0 = __amp__(["symbol", "self"], ({"env": other_env$0}));
                    return ["send", ["symbol", "_lambda"], ["data", args$3, ["send", ["symbol", "splice"], ["data", ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], it$2], ["symbol", "this"]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], it2$0], ["symbol", "this"]]]]]], body$4, ["value", null], ["value", false]]];
                  } else {
                    other$2 = ph$6$0;
                    return other$2;
                  }
                })), (accum$4 = ({})), (accum$4["wrap_target"] = $targ$188), accum$4), (($targ$189 = (function(temp$12$0) {
                  return ["splice"];
                })), (accum$5 = ({})), (accum$5["success"] = $targ$189), accum$5))))));
                $targ$184 = PatternCompiler$0(lhs$0, info$5, opt$1).extract_from_rhs(rhs$0);
                temp$10 = $targ$184;
                acc$1.push(temp$10);
              } else {
                if (false) {
                  $targ$203 = undefined;
                  temp$10 = $targ$203;
                  acc$1.push(temp$10);
                } else {
                  false;
                }
              }
            }
          }
        }
      }
      new_stmts$0 = acc$1;
      $targ$138 = ctor$0;
      t0$34 = $targ$138;
      if (((t0$34 instanceof Array) && ((t1$18 = t0$34.length), (t1$18 === 2)))) {
        ctor_args$0 = t0$34[0];
        ctor_body$0 = t0$34[1];
      } else {
        ___match_error($targ$138);
      }
      [ctor_args$0, ctor_body$0];
      $targ$206 = ctor_body$0;
      t0$35 = $targ$206;
      if (___hasprop(t0$35, "env")) {
        env2$0 = t0$35.env;
      } else {
        ___match_error($targ$206);
      }
      it$3 = __amp__(["symbol", "@"], ({"env": env2$0}));
      cls$0 = ["send", ["symbol", "_lambda"], ["data", ctor_args$0, ["send", ["symbol", "="], ["data", it$3, ["send", ["symbol", "if"], ["data", ["send", ["symbol", "not"], ["data", ["void"], ["send", ["symbol", "?"], ["data", name$0, ["symbol", "this"]]]]], ["send", ["send", ["symbol", "Object"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "create"]]]], ["data", ["send", name$0, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]]]], ["symbol", "this"]]]]], ctor_body$0, it$3, ["value", false]]];
      if (super$1) {
        ctor_expr$0 = ["send", ["symbol", "___extend"], ["data", cls$0, super$1]];
      } else {
        ctor_expr$0 = cls$0;
      }
      m$8$0 = name$0;
      if (((m$8$0 instanceof Array) && ((t0$36 = m$8$0.length), ((t0$36 === 2) && (m$8$0[0] === "symbol"))))) {
        name_str$0 = m$8$0[1];
        statics$0.push(["send", ["symbol", "="], ["data", ["value", "::name"], ["value", name_str$0]]]);
      } else {
        undefined;
      }
      statics$0.push(["send", ["symbol", "="], ["data", ["value", "::egclass"], ["symbol", "true"]]]);
      node$1 = ["splice", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], name$0], ctor_expr$0]]].concat(new_stmts$0).concat([["send", ["symbol", "&:"], ["data", name$0, statics$0]], name$0]);
      m$9$0 = context$3;
      if (((m$9$0 instanceof Array) && ((t0$37 = m$9$0.length), ((t0$37 === 2) && ((m$9$0[0] === "expr") && (m$9$0[1] === "multi")))))) {
        return node$1;
      } else {
        other$3 = m$9$0;
        return ["multi", node$1];
      }
    });
    m$7$0 = expr$4;
    if ((($$13033$0 = (m$7$0 instanceof Array)) && ((t0$38 = m$7$0.length), ((t0$38 === 3) && ((m$7$0[0] === "data") && ((ph$5$0 = m$7$0[1]), ($targ$216 = getProjector(Body$0)(m$7$0[2])), (t1$19 = $targ$216), (t1$19[0] && (($targ$217 = t1$19[1]), (t2$10 = $targ$217), ($targ$218 = t2$10.length), (t3$8 = $targ$218), (t3$8 >= 0))))))))) {
      stmts$2 = Array.prototype.slice.call(t2$10, 0);
      t0$39 = ph$5$0;
      if (((t0$39 instanceof Array) && ((t1$20 = t0$39.length), ((t1$20 === 3) && ((t0$39[0] === "send") && ((name$1 = t0$39[1]), (t2$11 = t0$39[2]), ((t2$11 instanceof Array) && ((t3$9 = t2$11.length), ((t3$9 === 2) && (t2$11[0] === "data")))))))))) {
        super$2 = t2$11[1];
        return helper$0(name$1, super$2, stmts$2);
      } else {
        bridge$$13031$0 = ph$5$0;
        if ((((bridge$$13031$0 instanceof Array) && ((t0$40 = bridge$$13031$0.length), ((t0$40 === 3) && ((bridge$$13031$0[0] === "send") && ((name$2 = bridge$$13031$0[1]), (t1$21 = bridge$$13031$0[2]), ((t1$21 instanceof Array) && ((t2$12 = t1$21.length), ((t2$12 === 1) && (t1$21[0] === "data"))))))))) || ((bridge$$13031$0 instanceof Array) && ((t0$41 = bridge$$13031$0.length), ((t0$41 === 2) && ((bridge$$13031$0[0] === "symbol") && (bridge$$13031$0[1], (name$2 = bridge$$13031$0), true))))))) {
          return helper$0(name$2, null, stmts$2);
        } else {
          return ___match_error(ph$5$0);
        }
      }
    } else {
      if (($$13033$0 && ((t0$38 === 2) && ((m$7$0[0] === "data") && (($targ$228 = getProjector(Body$0)(m$7$0[1])), (t1$19 = $targ$228), (t1$19[0] && (($targ$229 = t1$19[1]), (t2$10 = $targ$229), ($targ$230 = t2$10.length), (t3$8 = $targ$230), (t3$8 >= 0)))))))) {
        stmts$3 = Array.prototype.slice.call(t2$10, 0);
        return helper$0(["symbol", info$5.gensym()], null, stmts$3);
      } else {
        return ___match_error(m$7$0);
      }
    }
  });
  t0$42 = getProjector(mac$0("class"))($targ$21);
  if (t0$42[0]) {
    class_mac$0 = t0$42[1];
  } else {
    ___match_error($targ$21);
  }
  errf_macro$0 = (function(tags$1) {
    return (function(ph$7$0, temp$13$0, form$7, expr$5) {
      var x$11;
      var x$12;
      var t0$43;
      var other$4;
      var args$4;
      var $$13658$0;
      var $$13659$0;
      var m$11$0;
      var ctx$0;
      var bridge$$13627$0;
      bridge$$13627$0 = ph$7$0;
      if ((((x$11 = bridge$$13627$0), ((x$11 instanceof Array) && (x$11[0] === "check"))) || ((x$12 = bridge$$13627$0), ((x$12 instanceof Array) && (x$12[0] === "project"))))) {
        return ["nostep", form$7];
      } else {
        ctx$0 = ph$7$0;
        m$11$0 = expr$5;
        if ((($$13658$0 = (m$11$0 instanceof Array)) && ((t0$43 = m$11$0.length), ((t0$43 === 1) && (m$11$0[0] === "void"))))) {
          return ["send", ["symbol", "ErrorFactory"], ["data", ["data"].concat(tags$1)]];
        } else {
          if (($$13658$0 && ((t0$43 >= 1) && (m$11$0[0] === "data")))) {
            args$4 = Array.prototype.slice.call(m$11$0, 1);
            return ["send", ["send", ["send", ["symbol", "ErrorFactory"], ["data", ["data"].concat(tags$1)]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "create"]]]], ["data"].concat(args$4)];
          } else {
            other$4 = m$11$0;
            return ["macro", errf_macro$0(tags$1.concat([other$4]))];
          }
        }
      }
    });
  });
  $targ$22 = errf_macro$0([]);
  t0$44 = getProjector(mac$0("E"))($targ$22);
  if (t0$44[0]) {
    E_mac$0 = t0$44[1];
  } else {
    ___match_error($targ$22);
  }
  return exports$0;
});
(module["exports"] = $targ$10);
[];
//# sourceURL=<compile-source>
