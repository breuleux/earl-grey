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
var parse_pattern$0;
$0$0 = require("../location");
__lt____lt____colon__$0 = $0$0["<<:"];
$1$0 = require("./helpers");
expr_mac$0 = $1$0.expr_mac;
var_operator$0 = $1$0.var_operator;
overridable$0 = $1$0.overridable;
pattern_handlers$0 = $1$0.pattern_handlers;
Body$0 = $1$0.Body;
$2$0 = require("../pattern");
parse_pattern$0 = $2$0.parse_pattern;
$targ$10 = (function(mac$0) {
  var m$0;
  var t1$2;
  var t0$3;
  var t1$4;
  var t0$5;
  var t1$7;
  var t0$8;
  var t0$19;
  var t0$20;
  var t0$37;
  var errf_macro$0;
  var t0$39;
  var $targ$12;
  var chain_mac$0;
  var $targ$13;
  var using_mac$0;
  var $targ$14;
  var do_mac$0;
  var $targ$15;
  var buildnode_mac$0;
  var $targ$16;
  var S_mac$0;
  var $targ$17;
  var class_mac$0;
  var $targ$18;
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
        ___match_error(m$0, "/home/olivier/git/earl-grey/src/macros/misc.eg", 197, 236);
      }
    }
  }
  $targ$12 = (function(temp$0$0, form$0, temp$1$0) {
    var t5$0;
    var t4$0;
    var t3$0;
    var t2$0;
    var t1$1;
    var t0$1;
    var it$0;
    var construct$0;
    var defn$0;
    var env$0;
    var body$0;
    temp$0$0;
    t0$1 = temp$1$0;
    if (((t0$1 instanceof Array) && ((t1$1 = t0$1.length), ((t1$1 === 3) && ((t0$1[0] === "data") && ((t2$0 = t0$1[1]), (defn$0 = t2$0), (___hasprop(t2$0, "env") && ((env$0 = t2$0.env), (t3$0 = getProjector(Body$0)(t0$1[2])), (t3$0[0] && ((t4$0 = t3$0[1]), (t5$0 = t4$0.length), (t5$0 >= 0))))))))))) {
      body$0 = Array.prototype.slice.call(t4$0, 0);
    } else {
      ___match_error(temp$1$0);
    }
    it$0 = __amp__(["symbol", "@"], ({"env": env$0}));
    construct$0 = (function(temp$2$0) {
      var t0$2;
      var x$1;
      var rest$0;
      var x$0;
      var $$11429$0;
      var $$11430$0;
      var m$1$0;
      var ph$0;
      ph$0 = temp$2$0;
      m$1$0 = ph$0;
      if ((($$11429$0 = (m$1$0 instanceof Array)) && ((t0$2 = m$1$0.length), (t0$2 === 1)))) {
        x$0 = m$1$0[0];
        return x$0;
      } else {
        if (($$11429$0 && (t0$2 >= 1))) {
          x$1 = m$1$0[0];
          rest$0 = Array.prototype.slice.call(m$1$0, 1);
          return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$0, x$1]], construct$0(rest$0)]];
        } else {
          return ___match_error(m$1$0);
        }
      }
    });
    return construct$0([defn$0].concat(body$0));
  });
  t0$3 = getProjector(expr_mac$0)($targ$12);
  if ((t0$3[0] && ((t1$2 = getProjector(mac$0("chain"))(t0$3[1])), t1$2[0]))) {
    chain_mac$0 = t1$2[1];
  } else {
    ___match_error($targ$12);
  }
  $targ$13 = (function(temp$3$0, form$1, temp$4$0) {
    var t2$1;
    var t1$3;
    var t0$4;
    var it$1;
    var defn$1;
    var env$1;
    var body$1;
    temp$3$0;
    t0$4 = temp$4$0;
    if (((t0$4 instanceof Array) && ((t1$3 = t0$4.length), ((t1$3 === 3) && ((t0$4[0] === "data") && ((t2$1 = t0$4[1]), (defn$1 = t2$1), ___hasprop(t2$1, "env"))))))) {
      env$1 = t2$1.env;
      body$1 = t0$4[2];
    } else {
      ___match_error(temp$4$0);
    }
    it$1 = __amp__(["symbol", "@"], ({"env": env$1}));
    return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$1, defn$1]], body$1]];
  });
  t0$5 = getProjector(expr_mac$0)($targ$13);
  if ((t0$5[0] && ((t1$4 = getProjector(mac$0("using"))(t0$5[1])), t1$4[0]))) {
    using_mac$0 = t1$4[1];
  } else {
    ___match_error($targ$13);
  }
  $targ$14 = (function(temp$5$0, temp$6$0, form$2, temp$7$0) {
    var t1$5;
    var t0$6;
    var x$2;
    var x$3;
    var t2$2;
    var t1$6;
    var t0$7;
    var $targ$44;
    var stmts$0;
    var x$4;
    var m$2$0;
    var ph$1;
    var body$2;
    ph$1 = temp$5$0;
    temp$6$0;
    t0$6 = temp$7$0;
    if (((t0$6 instanceof Array) && ((t1$5 = t0$6.length), ((t1$5 === 2) && (t0$6[0] === "data"))))) {
      body$2 = t0$6[1];
    } else {
      ___match_error(temp$7$0);
    }
    m$2$0 = ph$1;
    if (((x$2 = m$2$0), ((x$2 instanceof Array) && (x$2[0] === "clause")))) {
      return ["block", body$2];
    } else {
      if (((x$3 = m$2$0), ((x$3 instanceof Array) && (x$3[0] === "test")))) {
        $targ$44 = body$2;
        t0$7 = getProjector(Body$0)($targ$44);
        if ((t0$7[0] && ((t1$6 = t0$7[1]), (t2$2 = t1$6.length), (t2$2 >= 0)))) {
          stmts$0 = Array.prototype.slice.call(t1$6, 0);
        } else {
          ___match_error($targ$44);
        }
        return ["do", ["splice"].concat(stmts$0)];
      } else {
        if (((x$4 = m$2$0), ((x$4 instanceof Array) && (x$4[0] === "expr")))) {
          return ["multi", body$2];
        } else {
          return ___match_error(m$2$0);
        }
      }
    }
  });
  t0$8 = getProjector(overridable$0)($targ$14);
  if ((t0$8[0] && ((t1$7 = getProjector(mac$0("do"))(t0$8[1])), t1$7[0]))) {
    do_mac$0 = t1$7[1];
  } else {
    ___match_error($targ$14);
  }
  $targ$15 = (function(context$0, temp$8$0, form$3, temp$9$0) {
    var t0$9;
    var t1$8;
    var t0$10;
    var x$5;
    var x$6;
    var bridge$$11637$0;
    var m$3$0;
    var $targ$86;
    var m$7;
    var xs$0;
    var t4$2;
    var t3$2;
    var t2$4;
    var t1$11;
    var $targ$101;
    var x$9;
    var pair$1;
    var k$2;
    var v$2;
    var args$1;
    var $$11872$0;
    var $$11873$0;
    var t0$17;
    var m$6$0;
    var tags$0;
    var kv$0;
    var parse$0;
    var env$2;
    var descr$0;
    var contents$0;
    t0$9 = temp$8$0;
    t0$9;
    if (___hasprop(t0$9, "env")) {
      env$2 = t0$9.env;
    } else {
      ___match_error(temp$8$0);
    }
    t0$10 = temp$9$0;
    if (((t0$10 instanceof Array) && ((t1$8 = t0$10.length), ((t1$8 === 3) && (t0$10[0] === "data"))))) {
      descr$0 = t0$10[1];
      contents$0 = t0$10[2];
    } else {
      ___match_error(temp$9$0);
    }
    m$3$0 = context$0;
    bridge$$11637$0 = m$3$0;
    if ((((x$5 = bridge$$11637$0), ((x$5 instanceof Array) && (x$5[0] === "check"))) || ((x$6 = bridge$$11637$0), ((x$6 instanceof Array) && (x$6[0] === "project"))))) {
      return ["nostep", form$3];
    } else {
      m$3$0;
      undefined;
    }
    tags$0 = ["data"];
    kv$0 = ["data", ["symbol", "="]];
    parse$0 = (function(temp$10$0) {
      var t0$11;
      var t0$12;
      var $targ$64;
      var t0$13;
      var t1$10;
      var t0$14;
      var bridge$$11682$0;
      var $targ$70;
      var $targ$69;
      var $targ$68;
      var $targ$67;
      var t2$3;
      var $targ$65;
      var $targ$78;
      var $targ$77;
      var $targ$76;
      var $targ$75;
      var $targ$80;
      var $targ$79;
      var t0$15;
      var t0$16;
      var m$5;
      var acc$0;
      var bridge$$11687$0;
      var args$0;
      var expr$1;
      var rest$1;
      var expr$0;
      var x$8;
      var x$7;
      var s$0;
      var $$11688$0;
      var $$11689$0;
      var $$11690$0;
      var $$11691$0;
      var $$11692$0;
      var $$11693$0;
      var $$11694$0;
      var $$11695$0;
      var $$11696$0;
      var t1$9;
      var t3$1;
      var t4$1;
      var t5$1;
      var t6$0;
      var m$4$0;
      var ph$2;
      var whole$0;
      t0$11 = temp$10$0;
      whole$0 = t0$11;
      ph$2 = t0$11;
      m$4$0 = ph$2;
      if ((($$11688$0 = (m$4$0 instanceof Array)) && ((t0$12 = m$4$0.length), ((t0$12 === 1) && (m$4$0[0] === "void"))))) {
        return null;
      } else {
        if (($$11688$0 && (($$11690$0 = (t0$12 === 2)) && (m$4$0[0] === "symbol")))) {
          s$0 = m$4$0[1];
          return tags$0.push(["value", s$0]);
        } else {
          if (($$11690$0 && ((m$4$0[0] === "value") && (($targ$64 = [true, String(m$4$0[1])]), (t1$9 = $targ$64), t1$9[0])))) {
            x$7 = t1$9[1];
            return tags$0.push(["value", x$7]);
          } else {
            if (($$11688$0 && (($$11690$0 = (t0$12 === 3)) && (($$11691$0 = (m$4$0[0] === "send")) && (($targ$65 = m$4$0[1]), (t1$9 = $targ$65), (($$11693$0 = (t1$9 instanceof Array)) && ((t2$3 = t1$9.length), (($$11695$0 = (t2$3 === 2)) && (($$11696$0 = (t1$9[0] === "symbol")) && ((t1$9[1] === ".") && (($targ$67 = m$4$0[2]), (t3$1 = $targ$67), ((t3$1 instanceof Array) && (($targ$68 = t3$1.length), (t4$1 = $targ$68), ((t4$1 === 3) && ((t3$1[0] === "data") && (($targ$69 = t3$1[1]), (t5$1 = $targ$69), ((t5$1 instanceof Array) && (($targ$70 = t5$1.length), (t6$0 = $targ$70), ((t6$0 === 1) && ((t5$1[0] === "void") && ((bridge$$11682$0 = t3$1[2]), (((bridge$$11682$0 instanceof Array) && ((t0$13 = bridge$$11682$0.length), ((t0$13 === 2) && ((bridge$$11682$0[0] === "symbol") && ((x$8 = bridge$$11682$0[1]), true))))) || ((bridge$$11682$0 instanceof Array) && ((t0$14 = bridge$$11682$0.length), ((t0$14 === 2) && ((bridge$$11682$0[0] === "value") && ((t1$10 = [true, String(bridge$$11682$0[1])]), (t1$10[0] && ((x$8 = t1$10[1]), true))))))))))))))))))))))))))))) {
              return tags$0.push(["value", ("." + x$8)]);
            } else {
              if (($$11696$0 && ((t1$9[1] === "^") && (($targ$75 = m$4$0[2]), (t3$1 = $targ$75), ((t3$1 instanceof Array) && (($targ$76 = t3$1.length), (t4$1 = $targ$76), ((t4$1 === 3) && ((t3$1[0] === "data") && (($targ$77 = t3$1[1]), (t5$1 = $targ$77), ((t5$1 instanceof Array) && (($targ$78 = t5$1.length), (t6$0 = $targ$78), ((t6$0 === 1) && (t5$1[0] === "void"))))))))))))) {
                expr$0 = t3$1[2];
                return tags$0.push(expr$0);
              } else {
                if (($$11696$0 && ((t1$9[1] === "=") && (($targ$79 = m$4$0[2]), (t3$1 = $targ$79), ((t3$1 instanceof Array) && (($targ$80 = t3$1.length), (t4$1 = $targ$80), ((t4$1 === 3) && (t3$1[0] === "data")))))))) {
                  t3$1[1];
                  t3$1[2];
                  return kv$0.push(whole$0);
                } else {
                  if ($$11691$0) {
                    expr$1 = m$4$0[1];
                    rest$1 = m$4$0[2];
                    parse$0(expr$1);
                    return parse$0(rest$1);
                  } else {
                    bridge$$11687$0 = m$4$0;
                    if ((((bridge$$11687$0 instanceof Array) && ((t0$15 = bridge$$11687$0.length), ((t0$15 >= 1) && ((bridge$$11687$0[0] === "multi") && ((args$0 = Array.prototype.slice.call(bridge$$11687$0, 1)), true))))) || ((bridge$$11687$0 instanceof Array) && ((t0$16 = bridge$$11687$0.length), ((t0$16 >= 1) && ((bridge$$11687$0[0] === "data") && ((args$0 = Array.prototype.slice.call(bridge$$11687$0, 1)), true))))))) {
                      acc$0 = [];
                      m$5 = null;
                      $4: for (var $__2 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__3; !($__3 = $__2.next()).done; ) {
                        m$5 = $__3.value;
                        {
                          var arg$0;
                          arg$0 = m$5;
                          acc$0.push(parse$0(arg$0));
                        }
                      }
                      return acc$0;
                    } else {
                      return ___match_error(m$4$0);
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
    contents$0 = ((m$6$0 = contents$0), ((($$11872$0 = (m$6$0 instanceof Array)) && (($targ$86 = m$6$0.length), (t0$17 = $targ$86), ((t0$17 === 1) && (m$6$0[0] === "void")))) ? ["array"] : (($$11872$0 && ((t0$17 >= 1) && (m$6$0[0] === "multi"))) ? ((args$1 = Array.prototype.slice.call(m$6$0, 1)), (xs$0 = []), (m$7 = null), (function() {
      $5: for (var $__2 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        m$7 = $__3.value;
        {
          var $targ$93;
          var $targ$92;
          var $targ$91;
          var $targ$90;
          var $targ$89;
          var t7$0;
          var t6$1;
          var $targ$98;
          var $targ$97;
          var $targ$96;
          var $targ$95;
          var $targ$94;
          var other$0;
          var spl$0;
          var t0$18;
          var pair$0;
          var k$1;
          var v$1;
          var $$11898$0;
          var t1$12;
          var t2$5;
          var t3$3;
          var t4$3;
          var t5$2;
          t0$18 = m$7;
          pair$0 = t0$18;
          if (((t0$18 instanceof Array) && (($targ$89 = t0$18.length), (t1$12 = $targ$89), ((t1$12 === 3) && ((t0$18[0] === "send") && (($targ$90 = t0$18[1]), (t2$5 = $targ$90), ((t2$5 instanceof Array) && (($targ$91 = t2$5.length), (t3$3 = $targ$91), ((t3$3 === 2) && ((t2$5[0] === "symbol") && ((t2$5[1] === "=") && (($targ$92 = t0$18[2]), (t4$3 = $targ$92), ((t4$3 instanceof Array) && (($targ$93 = t4$3.length), (t5$2 = $targ$93), ((t5$2 === 3) && (t4$3[0] === "data")))))))))))))))) {
            k$1 = t4$3[1];
            v$1 = t4$3[2];
            kv$0.push(pair$0);
          } else {
            spl$0 = t0$18;
            if (((t0$18 instanceof Array) && (($targ$94 = t0$18.length), (t1$12 = $targ$94), ((t1$12 === 3) && ((t0$18[0] === "send") && (($targ$95 = t0$18[1]), (t2$5 = $targ$95), ((t2$5 instanceof Array) && (($targ$96 = t2$5.length), (t3$3 = $targ$96), ((t3$3 === 2) && ((t2$5[0] === "symbol") && ((t2$5[1] === "**") && (($targ$97 = t0$18[2]), (t4$3 = $targ$97), ((t4$3 instanceof Array) && (($targ$98 = t4$3.length), (t5$2 = $targ$98), ((t5$2 === 3) && ((t4$3[0] === "data") && ((t6$1 = t4$3[1]), ((t6$1 instanceof Array) && ((t7$0 = t6$1.length), ((t7$0 === 1) && (t6$1[0] === "void"))))))))))))))))))))) {
              t4$3[2];
              kv$0.push(spl$0);
            } else {
              other$0 = m$7;
              xs$0.push(other$0);
            }
          }
        }
      }
    })(), ["array"].concat(xs$0)) : ((pair$1 = m$6$0), (((m$6$0 instanceof Array) && (($targ$101 = m$6$0.length), (t0$17 = $targ$101), ((t0$17 === 3) && ((m$6$0[0] === "send") && ((t1$11 = m$6$0[1]), ((t1$11 instanceof Array) && ((t2$4 = t1$11.length), ((t2$4 === 2) && ((t1$11[0] === "symbol") && ((t1$11[1] === "=") && ((t3$2 = m$6$0[2]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 3) && (t3$2[0] === "data"))))))))))))))) ? ((k$2 = t3$2[1]), (v$2 = t3$2[2]), kv$0.push(pair$1), ["array"]) : ((x$9 = m$6$0), x$9))))));
    return ["send", ["symbol", "Node"], ["data", tags$0, kv$0, contents$0]];
  });
  t0$19 = getProjector(mac$0("%"))($targ$15);
  if (t0$19[0]) {
    buildnode_mac$0 = t0$19[1];
  } else {
    ___match_error($targ$15);
  }
  $targ$16 = (function(context$1, info$0, form$4, arg$1) {
    var text$1;
    var text$0;
    var m$8$0;
    return ["value", ((m$8$0 = info$0.gettext(arg$1)), (getChecker(RegExp("^\\[(.|\\n)*\\]$", ""))(m$8$0) ? ((text$0 = m$8$0), text$0.substring(1, (text$0.length - 1))) : ((text$1 = m$8$0), text$1)))];
  });
  t0$20 = getProjector(mac$0("S"))($targ$16);
  if (t0$20[0]) {
    S_mac$0 = t0$20[1];
  } else {
    ___match_error($targ$16);
  }
  $targ$17 = (function(context$2, temp$11$0, form$5, expr$2) {
    var t0$21;
    var $targ$188;
    var $targ$187;
    var $targ$186;
    var t0$33;
    var t3$9;
    var t2$11;
    var t1$19;
    var t2$12;
    var t1$20;
    var t0$35;
    var t0$36;
    var bridge$$12061$0;
    var name$2;
    var t0$34;
    var name$1;
    var super$2;
    var $targ$200;
    var $targ$199;
    var $targ$198;
    var stmts$3;
    var stmts$2;
    var ph$3$0;
    var $$12063$0;
    var $$12064$0;
    var t1$18;
    var t2$10;
    var t3$8;
    var m$9$0;
    var helper$0;
    var info$1;
    var env$3;
    t0$21 = temp$11$0;
    info$1 = t0$21;
    if (___hasprop(t0$21, "env")) {
      env$3 = t0$21.env;
    } else {
      ___match_error(temp$11$0);
    }
    helper$0 = (function(name$0, super$1, stmts$1) {
      var m$12;
      var acc$1;
      var t1$17;
      var t0$29;
      var t0$30;
      var $targ$176;
      var env2$0;
      var it$3;
      var cls$0;
      var t0$31;
      var name_str$0;
      var m$10$0;
      var t0$32;
      var other$2;
      var m$11$0;
      var $targ$111;
      var statics$0;
      var $targ$112;
      var ctor$0;
      var new_stmts$0;
      var $targ$114;
      var ctor_args$0;
      var ctor_body$0;
      var ctor_expr$0;
      var node$0;
      $targ$111 = ["data", ["symbol", "="]];
      statics$0 = $targ$111;
      $targ$112 = [["data"], __amp__(["multi"], ({"env": env$3}))];
      ctor$0 = $targ$112;
      new_stmts$0 = ((acc$1 = []), (m$12 = null), (function() {
        $6: for (var $__2 = stmts$1[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__3; !($__3 = $__2.next()).done; ) {
          m$12 = $__3.value;
          {
            var t8$0;
            var t7$1;
            var t6$2;
            var $targ$123;
            var $targ$122;
            var $targ$121;
            var $targ$120;
            var $targ$119;
            var t8$1;
            var t7$2;
            var t6$3;
            var t5$4;
            var t4$5;
            var t3$5;
            var t2$7;
            var t1$14;
            var t0$23;
            var t12$0;
            var t11$0;
            var t10$0;
            var t9$0;
            var t8$2;
            var t7$3;
            var t6$4;
            var t5$5;
            var t4$6;
            var t3$6;
            var t2$8;
            var t1$15;
            var t0$24;
            var $targ$150;
            var $targ$156;
            var $targ$155;
            var $targ$154;
            var $targ$153;
            var $targ$152;
            var $targ$157;
            var accum$0;
            var $targ$158;
            var accum$1;
            var $targ$159;
            var accum$2;
            var $targ$160;
            var accum$3;
            var $targ$151;
            var lhs$0;
            var rhs$0;
            var bridge$$12088$0;
            var args$2;
            var body$3;
            var $targ$118;
            var methods$0;
            var t0$22;
            var t1$13;
            var t2$6;
            var t3$4;
            var t4$4;
            var t5$3;
            $targ$118 = m$12;
            t0$22 = $targ$118;
            if (((t0$22 instanceof Array) && (($targ$119 = t0$22.length), (t1$13 = $targ$119), ((t1$13 === 3) && ((t0$22[0] === "send") && (($targ$120 = t0$22[1]), (t2$6 = $targ$120), ((t2$6 instanceof Array) && (($targ$121 = t2$6.length), (t3$4 = $targ$121), ((t3$4 === 2) && ((t2$6[0] === "symbol") && ((t2$6[1] === "static") && (($targ$122 = t0$22[2]), (t4$4 = $targ$122), ((t4$4 instanceof Array) && (($targ$123 = t4$4.length), (t5$3 = $targ$123), ((t5$3 === 2) && ((t4$4[0] === "data") && ((t6$2 = getProjector(Body$0)(t4$4[1])), (t6$2[0] && ((t7$1 = t6$2[1]), (t8$0 = t7$1.length), (t8$0 >= 0)))))))))))))))))))) {
              methods$0 = Array.prototype.slice.call(t7$1, 0);
              acc$1.push((statics$0 = statics$0.concat(methods$0)));
            } else {
              bridge$$12088$0 = m$12;
              if ((((bridge$$12088$0 instanceof Array) && ((t0$23 = bridge$$12088$0.length), ((t0$23 === 3) && ((bridge$$12088$0[0] === "send") && ((t1$14 = bridge$$12088$0[1]), ((t1$14 instanceof Array) && ((t2$7 = t1$14.length), ((t2$7 === 2) && ((t1$14[0] === "symbol") && ((t1$14[1] === "=") && ((t3$5 = bridge$$12088$0[2]), ((t3$5 instanceof Array) && ((t4$5 = t3$5.length), ((t4$5 === 3) && ((t3$5[0] === "data") && ((t5$4 = t3$5[1]), ((t5$4 instanceof Array) && ((t6$3 = t5$4.length), ((t6$3 === 3) && ((t5$4[0] === "send") && ((t7$2 = t5$4[1]), ((t7$2 instanceof Array) && ((t8$1 = t7$2.length), ((t8$1 === 2) && ((t7$2[0] === "symbol") && ((t7$2[1] === "constructor") && ((args$2 = t5$4[2]), (body$3 = t3$5[2]), true))))))))))))))))))))))))))) || ((bridge$$12088$0 instanceof Array) && ((t0$24 = bridge$$12088$0.length), ((t0$24 === 3) && ((bridge$$12088$0[0] === "send") && ((t1$15 = bridge$$12088$0[1]), ((t1$15 instanceof Array) && ((t2$8 = t1$15.length), ((t2$8 === 2) && ((t1$15[0] === "symbol") && ((t1$15[1] === "=") && ((t3$6 = bridge$$12088$0[2]), ((t3$6 instanceof Array) && ((t4$6 = t3$6.length), ((t4$6 === 3) && ((t3$6[0] === "data") && ((t5$5 = t3$6[1]), ((t5$5 instanceof Array) && ((t6$4 = t5$5.length), ((t6$4 === 2) && ((t5$5[0] === "symbol") && ((t5$5[1] === "constructor") && ((t7$3 = t3$6[2]), ((t7$3 instanceof Array) && ((t8$2 = t7$3.length), ((t8$2 === 3) && ((t7$3[0] === "send") && ((t9$0 = t7$3[1]), ((t9$0 instanceof Array) && ((t10$0 = t9$0.length), ((t10$0 === 2) && ((t9$0[0] === "symbol") && ((t9$0[1] === "->") && ((t11$0 = t7$3[2]), ((t11$0 instanceof Array) && ((t12$0 = t11$0.length), ((t12$0 === 3) && ((t11$0[0] === "data") && ((args$2 = t11$0[1]), (body$3 = t11$0[2]), true)))))))))))))))))))))))))))))))))))))))) {
                acc$1.push((($targ$150 = [args$2, body$3]), (ctor$0 = $targ$150), ["splice"]));
              } else {
                $targ$151 = m$12;
                t0$22 = $targ$151;
                if (((t0$22 instanceof Array) && (($targ$152 = t0$22.length), (t1$13 = $targ$152), ((t1$13 === 3) && ((t0$22[0] === "send") && (($targ$153 = t0$22[1]), (t2$6 = $targ$153), ((t2$6 instanceof Array) && (($targ$154 = t2$6.length), (t3$4 = $targ$154), ((t3$4 === 2) && ((t2$6[0] === "symbol") && ((t2$6[1] === "=") && (($targ$155 = t0$22[2]), (t4$4 = $targ$155), ((t4$4 instanceof Array) && (($targ$156 = t4$4.length), (t5$3 = $targ$156), ((t5$3 === 3) && (t4$4[0] === "data")))))))))))))))) {
                  lhs$0 = t4$4[1];
                  rhs$0 = t4$4[2];
                  acc$1.push(parse_pattern$0(info$1, lhs$0, rhs$0, __amp__(pattern_handlers$0.build_object, __amp____colon__(({"allow_nested": false}), __amp____colon__((($targ$157 = (function(temp$12$0, value$0) {
                    var t0$25;
                    var t0$26;
                    var bridge$$12318$0;
                    var v$3;
                    bridge$$12318$0 = temp$12$0;
                    if ((((bridge$$12318$0 instanceof Array) && ((t0$25 = bridge$$12318$0.length), ((t0$25 === 2) && ((bridge$$12318$0[0] === "symbol") && ((v$3 = bridge$$12318$0[1]), true))))) || ((bridge$$12318$0 instanceof Array) && ((t0$26 = bridge$$12318$0.length), ((t0$26 === 2) && ((bridge$$12318$0[0] === "value") && ((v$3 = bridge$$12318$0[1]), true))))))) {} else {
                      ___match_error(temp$12$0);
                    }
                    return ["do", __lt____lt____colon__$0(["assign", ["send", ["send", name$0, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]], ["value", v$3]], value$0], v$3)];
                  })), (accum$0 = ({})), (accum$0["assign"] = $targ$157), accum$0), __amp____colon__((($targ$158 = (function(vars$0) {
                    return [];
                  })), (accum$1 = ({})), (accum$1["declare"] = $targ$158), accum$1), __amp____colon__((($targ$159 = (function(temp$13$0) {
                    var t4$7;
                    var t3$7;
                    var t2$9;
                    var t1$16;
                    var t0$27;
                    var t0$28;
                    var $targ$170;
                    var other_env$0;
                    var it$2;
                    var it2$0;
                    var other$1;
                    var args$3;
                    var body$4;
                    var m$13$0;
                    var ph$4;
                    ph$4 = temp$13$0;
                    m$13$0 = ph$4;
                    if (((m$13$0 instanceof Array) && ((t0$27 = m$13$0.length), ((t0$27 === 3) && ((m$13$0[0] === "send") && ((t1$16 = m$13$0[1]), ((t1$16 instanceof Array) && ((t2$9 = t1$16.length), ((t2$9 === 2) && ((t1$16[0] === "symbol") && ((t1$16[1] === "->") && ((t3$7 = m$13$0[2]), ((t3$7 instanceof Array) && ((t4$7 = t3$7.length), ((t4$7 === 3) && (t3$7[0] === "data")))))))))))))))) {
                      args$3 = t3$7[1];
                      body$4 = t3$7[2];
                      $targ$170 = body$4;
                      t0$28 = $targ$170;
                      if (___hasprop(t0$28, "env")) {
                        other_env$0 = t0$28.env;
                      } else {
                        ___match_error($targ$170);
                      }
                      it$2 = __amp__(["symbol", "@"], ({"env": other_env$0}));
                      it2$0 = __amp__(["symbol", "self"], ({"env": other_env$0}));
                      return ["send", ["symbol", "_lambda"], ["data", args$3, ["send", ["symbol", "splice"], ["data", ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], it$2], ["symbol", "this"]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], it2$0], ["symbol", "this"]]]]]], body$4, ["value", null], ["value", false]]];
                    } else {
                      other$1 = m$13$0;
                      return other$1;
                    }
                  })), (accum$2 = ({})), (accum$2["wrap_target"] = $targ$159), accum$2), (($targ$160 = (function(temp$14$0) {
                    temp$14$0;
                    return ["splice"];
                  })), (accum$3 = ({})), (accum$3["success"] = $targ$160), accum$3))))))));
                } else {
                  m$12;
                  if (false) {
                    acc$1.push(undefined);
                  } else {
                    false;
                  }
                }
              }
            }
          }
        }
      })(), acc$1);
      $targ$114 = ctor$0;
      t0$29 = $targ$114;
      if (((t0$29 instanceof Array) && ((t1$17 = t0$29.length), (t1$17 === 2)))) {
        ctor_args$0 = t0$29[0];
        ctor_body$0 = t0$29[1];
      } else {
        ___match_error($targ$114);
      }
      ctor_expr$0 = (($targ$176 = ctor_body$0), (t0$30 = $targ$176), (___hasprop(t0$30, "env") ? (env2$0 = t0$30.env) : ___match_error($targ$176)), (it$3 = __amp__(["symbol", "@"], ({"env": env2$0}))), (cls$0 = ["send", ["symbol", "_lambda"], ["data", ctor_args$0, ["send", ["symbol", "="], ["data", it$3, ["send", ["symbol", "if"], ["data", ["send", ["symbol", "not"], ["data", ["void"], ["send", ["symbol", "?"], ["data", name$0, ["symbol", "this"]]]]], ["send", ["send", ["symbol", "Object"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "create"]]]], ["data", ["send", name$0, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]]]], ["symbol", "this"]]]]], ctor_body$0, it$3, ["value", false]]]), (super$1 ? ["send", ["symbol", "___extend"], ["data", cls$0, super$1]] : cls$0));
      m$10$0 = name$0;
      if (((m$10$0 instanceof Array) && ((t0$31 = m$10$0.length), ((t0$31 === 2) && (m$10$0[0] === "symbol"))))) {
        name_str$0 = m$10$0[1];
        statics$0.push(["send", ["symbol", "="], ["data", ["value", "::name"], ["value", name_str$0]]]);
      } else {
        m$10$0;
        undefined;
      }
      statics$0.push(["send", ["symbol", "="], ["data", ["value", "::egclass"], ["symbol", "true"]]]);
      node$0 = ["splice", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], name$0], ctor_expr$0]]].concat(new_stmts$0).concat([["send", ["symbol", "&:"], ["data", name$0, statics$0]], name$0]);
      m$11$0 = context$2;
      if (((m$11$0 instanceof Array) && ((t0$32 = m$11$0.length), ((t0$32 === 2) && ((m$11$0[0] === "expr") && (m$11$0[1] === "multi")))))) {
        return node$0;
      } else {
        other$2 = m$11$0;
        return ["multi", node$0];
      }
    });
    m$9$0 = expr$2;
    if ((($$12063$0 = (m$9$0 instanceof Array)) && ((t0$33 = m$9$0.length), ((t0$33 === 3) && ((m$9$0[0] === "data") && ((ph$3$0 = m$9$0[1]), ($targ$186 = getProjector(Body$0)(m$9$0[2])), (t1$18 = $targ$186), (t1$18[0] && (($targ$187 = t1$18[1]), (t2$10 = $targ$187), ($targ$188 = t2$10.length), (t3$8 = $targ$188), (t3$8 >= 0))))))))) {
      stmts$2 = Array.prototype.slice.call(t2$10, 0);
      t0$34 = ph$3$0;
      if (((t0$34 instanceof Array) && ((t1$19 = t0$34.length), ((t1$19 === 3) && ((t0$34[0] === "send") && ((name$1 = t0$34[1]), (t2$11 = t0$34[2]), ((t2$11 instanceof Array) && ((t3$9 = t2$11.length), ((t3$9 === 2) && (t2$11[0] === "data")))))))))) {
        super$2 = t2$11[1];
        return helper$0(name$1, super$2, stmts$2);
      } else {
        bridge$$12061$0 = ph$3$0;
        if ((((bridge$$12061$0 instanceof Array) && ((t0$35 = bridge$$12061$0.length), ((t0$35 === 3) && ((bridge$$12061$0[0] === "send") && ((name$2 = bridge$$12061$0[1]), (t1$20 = bridge$$12061$0[2]), ((t1$20 instanceof Array) && ((t2$12 = t1$20.length), ((t2$12 === 1) && (t1$20[0] === "data"))))))))) || ((bridge$$12061$0 instanceof Array) && ((t0$36 = bridge$$12061$0.length), ((t0$36 === 2) && ((bridge$$12061$0[0] === "symbol") && (bridge$$12061$0[1], (name$2 = bridge$$12061$0), true))))))) {
          return helper$0(name$2, null, stmts$2);
        } else {
          return ___match_error(ph$3$0, "/home/olivier/git/earl-grey/src/macros/misc.eg", 4587, 4592);
        }
      }
    } else {
      if (($$12063$0 && ((t0$33 === 2) && ((m$9$0[0] === "data") && (($targ$198 = getProjector(Body$0)(m$9$0[1])), (t1$18 = $targ$198), (t1$18[0] && (($targ$199 = t1$18[1]), (t2$10 = $targ$199), ($targ$200 = t2$10.length), (t3$8 = $targ$200), (t3$8 >= 0)))))))) {
        stmts$3 = Array.prototype.slice.call(t2$10, 0);
        return helper$0(["symbol", info$1.gensym()], null, stmts$3);
      } else {
        return ___match_error(m$9$0);
      }
    }
  });
  t0$37 = getProjector(mac$0("class"))($targ$17);
  if (t0$37[0]) {
    class_mac$0 = t0$37[1];
  } else {
    ___match_error($targ$17);
  }
  $targ$18 = ((errf_macro$0 = (function(tags$1) {
    return (function(temp$15$0, temp$16$0, form$6, expr$3) {
      var x$10;
      var x$11;
      var t0$38;
      var other$3;
      var args$4;
      var $$12677$0;
      var $$12678$0;
      var m$15$0;
      var ctx$0;
      var bridge$$12640$0;
      var m$14$0;
      var ph$5;
      ph$5 = temp$15$0;
      temp$16$0;
      m$14$0 = ph$5;
      bridge$$12640$0 = m$14$0;
      if ((((x$10 = bridge$$12640$0), ((x$10 instanceof Array) && (x$10[0] === "check"))) || ((x$11 = bridge$$12640$0), ((x$11 instanceof Array) && (x$11[0] === "project"))))) {
        return ["nostep", form$6];
      } else {
        ctx$0 = m$14$0;
        m$15$0 = expr$3;
        if ((($$12677$0 = (m$15$0 instanceof Array)) && ((t0$38 = m$15$0.length), ((t0$38 === 1) && (m$15$0[0] === "void"))))) {
          return ["send", ["symbol", "ErrorFactory"], ["data", ["data"].concat(tags$1)]];
        } else {
          if (($$12677$0 && ((t0$38 >= 1) && (m$15$0[0] === "data")))) {
            args$4 = Array.prototype.slice.call(m$15$0, 1);
            return ["send", ["send", ["send", ["symbol", "ErrorFactory"], ["data", ["data"].concat(tags$1)]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "create"]]]], ["data"].concat(args$4)];
          } else {
            other$3 = m$15$0;
            return ["macro", errf_macro$0(tags$1.concat([other$3]))];
          }
        }
      }
    });
  })), errf_macro$0([]));
  t0$39 = getProjector(mac$0("E"))($targ$18);
  if (t0$39[0]) {
    E_mac$0 = t0$39[1];
  } else {
    ___match_error($targ$18);
  }
  return exports$0;
});
(module["exports"] = $targ$10);
//# sourceURL=<compile-source>
