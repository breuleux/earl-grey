"use strict";
require("earlgrey-runtime");
var $targ$6;
var $0$0;
var Env$0;
var topscope$0;
var $1$0;
var ctx_mac$0;
var expr_mac2$0;
$0$0 = require("../expand");
Env$0 = $0$0.Env;
topscope$0 = $0$0.topscope;
$1$0 = require("./helpers");
ctx_mac$0 = $1$0.ctx_mac;
expr_mac2$0 = $1$0["expr_mac2"];
$targ$6 = (function(mac$0) {
  var t0$1;
  var t0$3;
  var t0$7;
  var t0$9;
  var wrap_macro$0;
  var wrap_macro_func$0;
  var $targ$10;
  var macro_mac$0;
  var $targ$11;
  var cmacro_mac$0;
  var $targ$12;
  var macros_mac$0;
  var $targ$13;
  var oldmacro_mac$0;
  var exports$0;
  exports$0 = ({});
  wrap_macro$0 = (function(info$0, mac$1) {
    var mac2$0;
    mac2$0 = (function(c$0, s$0, f$0, e$0) {
      var bindings$0;
      var env$0;
      var $targ$17;
      var r$0;
      bindings$0 = info$0.env.list_bindings(info$0.scope);
      env$0 = Env$0();
      $targ$17 = bindings$0;
      (env$0.scopes[topscope$0.name] = $targ$17);
      [];
      r$0 = mac$1.call(info$0, c$0, s$0, f$0, e$0);
      return env$0.mark(r$0);
    });
    return ["macro", mac2$0];
  });
  wrap_macro_func$0 = (function(info$1, args$0, body$0) {
    var it$0;
    it$0 = info$1.env.mark(["symbol", "@"]);
    return ["send", ["symbol", "_lambda"], ["data", args$0, ["send", ["symbol", "="], ["data", it$0, ["symbol", "this"]]], body$0, ["value", null]]];
  });
  $targ$10 = (function(context$0, info$2, form$0, ph$0$0) {
    var t5$0;
    var t4$0;
    var t3$0;
    var t2$0;
    var mac$2;
    var t0$0;
    var t1$0;
    var name$0;
    var sym$0;
    var arguments$1;
    var ast$0;
    t0$0 = ph$0$0;
    t1$0 = t0$0.length;
    if (((t1$0 === 3) && ((t0$0[0] === "data") && ((t2$0 = t0$0[1]), ((t2$0 instanceof Array) && ((t3$0 = t2$0.length), ((t3$0 === 3) && ((t2$0[0] === "send") && ((t4$0 = t2$0[1]), (name$0 = t4$0), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 2) && (t4$0[0] === "symbol"))))))))))))) {
      sym$0 = t4$0[1];
      arguments$1 = t2$0[2];
      ast$0 = t0$0[2];
      mac$2 = info$2.go(wrap_macro_func$0(info$2, arguments$1, ast$0), "parse", "eval");
      return ["declare_raw", name$0, wrap_macro$0(info$2, expr_mac2$0(mac$2))];
    } else {
      return ___match_error(ph$0$0);
    }
  });
  t0$1 = getProjector(mac$0("macro"))($targ$10);
  if (t0$1[0]) {
    macro_mac$0 = t0$1[1];
  } else {
    ___match_error($targ$10);
  }
  $targ$11 = (function(context$1, info$3, form$1, ph$1$0) {
    var t5$1;
    var t4$1;
    var t3$1;
    var t2$1;
    var mac$3;
    var t0$2;
    var t1$1;
    var name$1;
    var sym$1;
    var arguments$2;
    var ast$1;
    t0$2 = ph$1$0;
    t1$1 = t0$2.length;
    if (((t1$1 === 3) && ((t0$2[0] === "data") && ((t2$1 = t0$2[1]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 3) && ((t2$1[0] === "send") && ((t4$1 = t2$1[1]), (name$1 = t4$1), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 === 2) && (t4$1[0] === "symbol"))))))))))))) {
      sym$1 = t4$1[1];
      arguments$2 = t2$1[2];
      ast$1 = t0$2[2];
      mac$3 = info$3.go(wrap_macro_func$0(info$3, arguments$2, ast$1), "parse", "eval");
      return ["declare_raw", name$1, wrap_macro$0(info$3, ctx_mac$0(mac$3))];
    } else {
      return ___match_error(ph$1$0);
    }
  });
  t0$3 = getProjector(mac$0("cmacro"))($targ$11);
  if (t0$3[0]) {
    cmacro_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$11);
  }
  $targ$12 = (function(context$2, info$4, temp$0$0, temp$1$0) {
    var t0$4;
    var t1$2;
    var t0$5;
    var m$0;
    var acc$0;
    var $targ$41;
    var temp$2;
    var the_macros$0;
    var form$2;
    var env$1;
    var body$1;
    t0$4 = temp$0$0;
    form$2 = t0$4;
    if (___hasprop(t0$4, "env")) {
      env$1 = t0$4.env;
    } else {
      ___match_error(temp$0$0);
    }
    t0$5 = temp$1$0;
    if (((t0$5 instanceof Array) && ((t1$2 = t0$5.length), ((t1$2 === 2) && (t0$5[0] === "data"))))) {
      body$1 = t0$5[1];
    } else {
      ___match_error(temp$1$0);
    }
    the_macros$0 = info$4.go(body$1, "parse", "eval");
    return ["splice"].concat(((acc$0 = []), ($targ$41 = null), (temp$2 = $targ$41), (m$0 = null), (function() {
      $2: for (var $__0 = items(the_macros$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$0 = $__1.value;
        {
          var t1$3;
          var $targ$44;
          var t0$6;
          var k$0;
          var v$0;
          t0$6 = m$0;
          if (((t0$6 instanceof Array) && ((t1$3 = t0$6.length), (t1$3 === 2)))) {
            k$0 = t0$6[0];
            v$0 = t0$6[1];
            $targ$44 = ["declare_raw", __amp____colon__(["symbol", k$0], ({"env": env$1})), ["macro", v$0]];
            temp$2 = $targ$44;
            acc$0.push(temp$2);
          } else {
            ___match_error(m$0, "/home/olivier/git/earl-grey/src/macros/macrodef.eg", 1138, 1234);
          }
        }
      }
    })(), acc$0));
  });
  t0$7 = getProjector(mac$0("macros"))($targ$12);
  if (t0$7[0]) {
    macros_mac$0 = t0$7[1];
  } else {
    ___match_error($targ$12);
  }
  $targ$13 = (function(context$3, info$5, form$3, ph$2$0) {
    var t5$2;
    var t4$2;
    var t3$2;
    var t2$2;
    var mac$4;
    var t0$8;
    var t1$4;
    var name$2;
    var sym$2;
    var arguments$3;
    var ast$2;
    t0$8 = ph$2$0;
    t1$4 = t0$8.length;
    if (((t1$4 === 3) && ((t0$8[0] === "data") && ((t2$2 = t0$8[1]), ((t2$2 instanceof Array) && ((t3$2 = t2$2.length), ((t3$2 === 3) && ((t2$2[0] === "send") && ((t4$2 = t2$2[1]), (name$2 = t4$2), ((t4$2 instanceof Array) && ((t5$2 = t4$2.length), ((t5$2 === 2) && (t4$2[0] === "symbol"))))))))))))) {
      sym$2 = t4$2[1];
      arguments$3 = t2$2[2];
      ast$2 = t0$8[2];
      mac$4 = info$5.go(["send", ["symbol", "->"], ["data", arguments$3, ast$2]], "parse", "eval");
      return ["declare_raw", name$2, wrap_macro$0(info$5, mac$4)];
    } else {
      return ___match_error(ph$2$0);
    }
  });
  t0$9 = getProjector(mac$0("oldmacro"))($targ$13);
  if (t0$9[0]) {
    oldmacro_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$13);
  }
  return exports$0;
});
(module["exports"] = $targ$6);
[];
//# sourceURL=<compile-source>
