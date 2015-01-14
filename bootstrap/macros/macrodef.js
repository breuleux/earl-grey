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
  var t0$5;
  var t0$9;
  var wrap_macro$0;
  var $targ$9;
  var macro_mac$0;
  var $targ$10;
  var cmacro_mac$0;
  var $targ$11;
  var emacro_mac$0;
  var $targ$12;
  var macros_mac$0;
  var exports$0;
  exports$0 = ({});
  wrap_macro$0 = (function(info$0, mac$1) {
    var mac2$0;
    mac2$0 = (function(c$0, s$0, f$0, e$0) {
      var bindings$0;
      var env$0;
      var $targ$16;
      var r$0;
      bindings$0 = info$0.env.list_bindings(info$0.scope);
      env$0 = Env$0();
      $targ$16 = bindings$0;
      (env$0.scopes[topscope$0.name] = $targ$16);
      r$0 = mac$1.call(info$0, c$0, s$0, f$0, e$0);
      return env$0.mark(r$0);
    });
    return ["macro", mac2$0];
  });
  $targ$9 = (function(context$0, info$1, form$0, temp$0$0) {
    var t4$0;
    var t3$0;
    var t2$0;
    var t1$0;
    var t0$0;
    var mac$2;
    var name$0;
    var sym$0;
    var arguments$1;
    var ast$0;
    var m$0$0;
    var ph$0;
    ph$0 = temp$0$0;
    m$0$0 = ph$0;
    if (((m$0$0 instanceof Array) && ((t0$0 = m$0$0.length), ((t0$0 === 3) && ((m$0$0[0] === "data") && ((t1$0 = m$0$0[1]), ((t1$0 instanceof Array) && ((t2$0 = t1$0.length), ((t2$0 === 3) && ((t1$0[0] === "send") && ((t3$0 = t1$0[1]), (name$0 = t3$0), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 2) && (t3$0[0] === "symbol"))))))))))))))) {
      sym$0 = t3$0[1];
      arguments$1 = t1$0[2];
      ast$0 = m$0$0[2];
      mac$2 = info$1.go(["send", ["symbol", "->"], ["data", arguments$1, ast$0]], "parse", "eval");
      return ["declare_raw", name$0, wrap_macro$0(info$1, mac$2)];
    } else {
      return ___match_error(m$0$0);
    }
  });
  t0$1 = getProjector(mac$0("macro"))($targ$9);
  if (t0$1[0]) {
    macro_mac$0 = t0$1[1];
  } else {
    ___match_error($targ$9);
  }
  $targ$10 = (function(context$1, info$2, form$1, temp$1$0) {
    var t4$1;
    var t3$1;
    var t2$1;
    var t1$1;
    var t0$2;
    var mac$3;
    var name$1;
    var sym$1;
    var arguments$2;
    var ast$1;
    var m$1$0;
    var ph$1;
    ph$1 = temp$1$0;
    m$1$0 = ph$1;
    if (((m$1$0 instanceof Array) && ((t0$2 = m$1$0.length), ((t0$2 === 3) && ((m$1$0[0] === "data") && ((t1$1 = m$1$0[1]), ((t1$1 instanceof Array) && ((t2$1 = t1$1.length), ((t2$1 === 3) && ((t1$1[0] === "send") && ((t3$1 = t1$1[1]), (name$1 = t3$1), ((t3$1 instanceof Array) && ((t4$1 = t3$1.length), ((t4$1 === 2) && (t3$1[0] === "symbol"))))))))))))))) {
      sym$1 = t3$1[1];
      arguments$2 = t1$1[2];
      ast$1 = m$1$0[2];
      mac$3 = info$2.go(["send", ["symbol", "->"], ["data", arguments$2, ast$1]], "parse", "eval");
      return ["declare_raw", name$1, wrap_macro$0(info$2, ctx_mac$0(mac$3))];
    } else {
      return ___match_error(m$1$0);
    }
  });
  t0$3 = getProjector(mac$0("cmacro"))($targ$10);
  if (t0$3[0]) {
    cmacro_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$10);
  }
  $targ$11 = (function(context$2, info$3, form$2, temp$2$0) {
    var t4$2;
    var t3$2;
    var t2$2;
    var t1$2;
    var t0$4;
    var mac$4;
    var name$2;
    var sym$2;
    var argument$0;
    var ast$2;
    var m$2$0;
    var ph$2;
    ph$2 = temp$2$0;
    m$2$0 = ph$2;
    if (((m$2$0 instanceof Array) && ((t0$4 = m$2$0.length), ((t0$4 === 3) && ((m$2$0[0] === "data") && ((t1$2 = m$2$0[1]), ((t1$2 instanceof Array) && ((t2$2 = t1$2.length), ((t2$2 === 3) && ((t1$2[0] === "send") && ((t3$2 = t1$2[1]), (name$2 = t3$2), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 2) && (t3$2[0] === "symbol"))))))))))))))) {
      sym$2 = t3$2[1];
      argument$0 = t1$2[2];
      ast$2 = m$2$0[2];
      mac$4 = info$3.go(["send", ["symbol", "->"], ["data", ["data", argument$0], ast$2]], "parse", "eval");
      return ["declare_raw", name$2, wrap_macro$0(info$3, expr_mac2$0(mac$4))];
    } else {
      return ___match_error(m$2$0);
    }
  });
  t0$5 = getProjector(mac$0("emacro"))($targ$11);
  if (t0$5[0]) {
    emacro_mac$0 = t0$5[1];
  } else {
    ___match_error($targ$11);
  }
  $targ$12 = (function(context$3, info$4, temp$3$0, temp$4$0) {
    var t0$6;
    var t1$3;
    var t0$7;
    var m$3;
    var acc$0;
    var the_macros$0;
    var form$3;
    var env$1;
    var body$0;
    t0$6 = temp$3$0;
    form$3 = t0$6;
    if (___hasprop(t0$6, "env")) {
      env$1 = t0$6.env;
    } else {
      ___match_error(temp$3$0);
    }
    t0$7 = temp$4$0;
    if (((t0$7 instanceof Array) && ((t1$3 = t0$7.length), ((t1$3 === 2) && (t0$7[0] === "data"))))) {
      body$0 = t0$7[1];
    } else {
      ___match_error(temp$4$0);
    }
    the_macros$0 = info$4.go(body$0, "parse", "eval");
    return ["splice"].concat(((acc$0 = []), (m$3 = null), (function() {
      $2: for (var $__0 = items(the_macros$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$3 = $__1.value;
        {
          var t1$4;
          var t0$8;
          var k$0;
          var v$0;
          t0$8 = m$3;
          if (((t0$8 instanceof Array) && ((t1$4 = t0$8.length), (t1$4 === 2)))) {
            k$0 = t0$8[0];
            v$0 = t0$8[1];
            acc$0.push(["declare_raw", __amp____colon__(["symbol", k$0], ({"env": env$1})), ["macro", v$0]]);
          } else {
            ___match_error(m$3, "/home/olivier/git/earl-grey/src/macros/macrodef.eg", 1219, 1312);
          }
        }
      }
    })(), acc$0));
  });
  t0$9 = getProjector(mac$0("macros"))($targ$12);
  if (t0$9[0]) {
    macros_mac$0 = t0$9[1];
  } else {
    ___match_error($targ$12);
  }
  return exports$0;
});
(module["exports"] = $targ$6);
//# sourceURL=<compile-source>
