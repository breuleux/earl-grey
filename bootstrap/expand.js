"use strict";
require("earlgrey-runtime");
var $targ$57;
var accum$0;
var $targ$58;
var accum$1;
var $targ$100;
var accum$2;
var $targ$101;
var accum$3;
var $targ$130;
var accum$4;
var $targ$131;
var accum$5;
var $targ$323;
var accum$6;
var $targ$324;
var accum$7;
var $targ$332;
var $targ$333;
var $targ$334;
var $targ$335;
var $targ$336;
var $targ$337;
var $targ$338;
var $targ$339;
var $targ$340;
var $targ$341;
var $0$0;
var __lt____lt____colon__$0;
var Source$0;
var util$0;
var classify$0;
var GenSym$0;
var gensym$0;
var $2$0;
var tokenize$0;
var $3$0;
var parse$0;
var Scope$0;
var $targ$11;
var $targ$12;
var $targ$13;
var Env$0;
var $targ$15;
var $targ$16;
var $targ$17;
var $targ$18;
var $targ$19;
var $targ$20;
var track_location$0;
var Info$0;
var $targ$23;
var $targ$24;
var $targ$25;
var $targ$26;
var $targ$27;
var $targ$28;
var $targ$29;
var $targ$30;
var $targ$31;
var Expander$0;
var $targ$33;
var $targ$34;
var $targ$35;
var $targ$36;
var $targ$37;
var $targ$38;
var mac1$0;
var __chk_ncache$0;
var __chk_scache$0;
var checker_db$0;
var topscope$0;
$0$0 = require("./location");
__lt____lt____colon__$0 = $0$0["<<:"];
Source$0 = $0$0.Source;
util$0 = require("./util");
classify$0 = util$0.classify;
GenSym$0 = util$0.GenSym;
gensym$0 = util$0.gensym;
$2$0 = require("./lex");
tokenize$0 = $2$0.tokenize;
$3$0 = require("./parse");
parse$0 = $3$0.parse;
Scope$0 = (function() {
  var $targ$48;
  var t0$0;
  var m$0$0;
  var $it$0;
  if ((!getChecker(Scope$0)(this))) {
    $it$0 = Object.create(Scope$0.prototype);
  } else {
    $it$0 = this;
  }
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (((t0$0 >= 0) && (t0$0 <= 2))) {
    ($it$0["parent"] = ((0 >= t0$0) ? null : m$0$0[0]));
    ($it$0["name"] = ((1 >= t0$0) ? gensym$0("scope") : m$0$0[1]));
    $targ$48 = ({});
    ($it$0["options"] = $targ$48);
    [];
  } else {
    ___match_error(m$0$0);
  }
  return $it$0;
});
$targ$11 = (function(opt$0) {
  var otherwise$0;
  var $$675$0;
  var m$1$0;
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  m$1$0 = null;
  if (Object.prototype.hasOwnProperty.call($it$1.options, opt$0)) {
    return send($it$1.options, opt$0);
  } else {
    if (($it$1.parent === null)) {
      return undefined;
    } else {
      otherwise$0 = m$1$0;
      return $it$1.parent.getopt(opt$0);
    }
  }
});
(Scope$0.prototype["getopt"] = $targ$11);
$targ$12 = (function(opt$1, value$0) {
  var $targ$54;
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  $targ$54 = value$0;
  ($it$2.options[opt$1] = $targ$54);
  return [];
});
(Scope$0.prototype["setopt"] = $targ$12);
$targ$13 = (function() {
  var $it$3;
  var self$2;
  $it$3 = this;
  self$2 = this;
  return (("Scope{" + $it$3.name) + "}");
});
(Scope$0.prototype["toString"] = $targ$13);
__amp____colon__(Scope$0, __amp____colon__((($targ$57 = "Scope"), (accum$0 = ({})), (accum$0["::name"] = $targ$57), accum$0), (($targ$58 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$58), accum$1)));
Env$0 = (function() {
  var $targ$60;
  var $it$4;
  if ((!getChecker(Env$0)(this))) {
    $it$4 = Object.create(Env$0.prototype);
  } else {
    $it$4 = this;
  }
  $targ$60 = ({});
  ($it$4["scopes"] = $targ$60);
  [];
  return $it$4;
});
$targ$15 = (function(origin$0) {
  var values$0;
  var $targ$64;
  var scope$0;
  var $it$5;
  var self$3;
  $it$5 = this;
  self$3 = this;
  values$0 = ({});
  $targ$64 = origin$0;
  scope$0 = $targ$64;
  $4: while (scope$0) {
    var $targ$65;
    __amp____colon__(values$0, send($it$5.scopes, scope$0.name));
    $targ$65 = scope$0.parent;
    scope$0 = $targ$65;
    scope$0;
  }
  return values$0;
});
(Env$0.prototype["list_bindings"] = $targ$15);
$targ$16 = (function(scope$1, name$0) {
  var scope_data$0;
  var $it$6;
  var self$4;
  $it$6 = this;
  self$4 = this;
  if ((scope$1 === null)) {
    return undefined;
  }
  scope_data$0 = send($it$6.scopes, scope$1.name);
  if ((scope_data$0 && Object.prototype.hasOwnProperty.call(scope_data$0, name$0))) {
    return send(scope_data$0, name$0);
  } else {
    return $it$6.resolve(scope$1.parent, name$0);
  }
});
(Env$0.prototype["resolve"] = $targ$16);
$targ$17 = (function(scope$2, name$1, value$1) {
  var $targ$72;
  var $targ$71;
  var $it$7;
  var self$5;
  $it$7 = this;
  self$5 = this;
  if ((!send($it$7.scopes, scope$2.name))) {
    $targ$72 = ({});
    ($it$7.scopes[scope$2.name] = $targ$72);
    [];
  }
  $targ$71 = value$1;
  (send($it$7.scopes, scope$2.name)[name$1] = $targ$71);
  return [];
});
(Env$0.prototype["bind"] = $targ$17);
$targ$18 = (function(expr$0) {
  var x$0;
  var x$1;
  var bridge$$840$0;
  var x$2;
  var bridge$$839$0;
  var x$3;
  var bridge$$838$0;
  var x$4;
  var t0$1;
  var m$3;
  var other$0;
  var type$0;
  var args$0;
  var bridge$$837$0;
  var e$0;
  var m$2$0;
  var $it$8;
  var self$6;
  $it$8 = this;
  self$6 = this;
  m$2$0 = expr$0;
  if (___hasprop(m$2$0, "env")) {
    e$0 = m$2$0.env;
    return expr$0;
  } else {
    bridge$$837$0 = m$2$0;
    if ((((bridge$$838$0 = bridge$$837$0), (((bridge$$839$0 = bridge$$838$0), (((bridge$$840$0 = bridge$$839$0), (((x$0 = bridge$$840$0), ((x$0 instanceof Array) && (x$0[0] === "symbol"))) || ((x$1 = bridge$$840$0), ((x$1 instanceof Array) && (x$1[0] === "value"))))) || ((x$2 = bridge$$839$0), ((x$2 instanceof Array) && (x$2[0] === "variable"))))) || ((x$3 = bridge$$838$0), ((x$3 instanceof Array) && (x$3[0] === "macro"))))) || ((x$4 = bridge$$837$0), ((x$4 instanceof Array) && (x$4[0] === "void"))))) {
      return __amp____colon__(expr$0, ({"env": $it$8}));
    } else {
      if (((m$2$0 instanceof Array) && ((t0$1 = m$2$0.length), (t0$1 >= 1)))) {
        type$0 = m$2$0[0];
        args$0 = Array.prototype.slice.call(m$2$0, 1);
        m$3 = null;
        $5: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$3 = $__1.value;
          {
            var arg$0;
            arg$0 = m$3;
            $it$8.mark(arg$0);
          }
        }
        return __amp____colon__(expr$0, ({"env": $it$8}));
      } else {
        other$0 = m$2$0;
        return __amp____colon__(expr$0, ({"env": $it$8}));
      }
    }
  }
});
(Env$0.prototype["mark"] = $targ$18);
$targ$19 = (function() {
  var m$4;
  var e$1;
  var $it$9;
  var self$7;
  $it$9 = this;
  self$7 = this;
  e$1 = Env$0();
  m$4 = null;
  $6: for (var $__2 = items($it$9.scopes)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3; !($__3 = $__2.next()).done; ) {
    m$4 = $__3.value;
    {
      var t1$0;
      var m$5;
      var acc$0;
      var $targ$92;
      var temp$0;
      var t0$2;
      var scope$3;
      var bindings$0;
      t0$2 = m$4;
      if (((t0$2 instanceof Array) && ((t1$0 = t0$2.length), (t1$0 === 2)))) {
        scope$3 = t0$2[0];
        bindings$0 = t0$2[1];
        acc$0 = [];
        $targ$92 = null;
        temp$0 = $targ$92;
        m$5 = null;
        $7: for (var $__0 = items(bindings$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$5 = $__1.value;
          {
            var t1$1;
            var $targ$97;
            var $targ$95;
            var t0$3;
            var k$0;
            var $targ$96;
            t0$3 = m$5;
            if (((t0$3 instanceof Array) && ((t1$1 = t0$3.length), (t1$1 === 2)))) {
              k$0 = t0$3[0];
              $targ$96 = t0$3[1];
              if ((!send(e$1.scopes, scope$3))) {
                $targ$97 = ({});
                (e$1.scopes[scope$3] = $targ$97);
                [];
              }
              (send(e$1.scopes, scope$3)[k$0] = $targ$96);
              $targ$95 = [];
              temp$0 = $targ$95;
              acc$0.push(temp$0);
            } else {
              ___match_error(m$5, "/home/olivier/git/earl-grey/src/expand.eg", 2106, 2253);
            }
          }
        }
        acc$0;
      } else {
        ___match_error(m$4, "/home/olivier/git/earl-grey/src/expand.eg", 2056, 2253);
      }
    }
  }
  return e$1;
});
(Env$0.prototype["fork"] = $targ$19);
$targ$20 = (function() {
  var $it$10;
  var self$8;
  $it$10 = this;
  self$8 = this;
  return "Env{...}";
});
(Env$0.prototype["toString"] = $targ$20);
__amp____colon__(Env$0, __amp____colon__((($targ$100 = "Env"), (accum$2 = ({})), (accum$2["::name"] = $targ$100), accum$2), (($targ$101 = true), (accum$3 = ({})), (accum$3["::egclass"] = $targ$101), accum$3)));
track_location$0 = (function(f$0) {
  var f2$0;
  f2$0 = (function(context$0, scope$4, expr$1) {
    var $targ$105;
    var $targ$104;
    var rval$1;
    var t0$4;
    var other$1;
    var v$1;
    var m$6$0;
    var rval$0;
    $targ$104 = false;
    rval$1 = $targ$104;
    try {
      $targ$105 = f$0(context$0, scope$4, expr$1);
      rval$1 = $targ$105;
      rval$1;
    } catch (excv$0) {
      var $targ$106;
      var e$2;
      e$2 = excv$0;
      __lt____lt____colon__$0(e$2, expr$1);
      throw e$2;
      rval$1 = $targ$106;
      rval$1;
    }
    rval$0 = rval$1;
    m$6$0 = rval$0;
    if (((m$6$0 instanceof Array) && ((t0$4 = m$6$0.length), ((t0$4 === 2) && (m$6$0[0] === "bounce"))))) {
      v$1 = m$6$0[1];
      return f2$0(context$0, scope$4, __lt____lt____colon__$0(v$1, expr$1));
    } else {
      other$1 = m$6$0;
      return __lt____lt____colon__$0(other$1, expr$1);
    }
  });
  return f2$0;
});
Info$0 = (function(temp$1$0, temp$2$0, temp$3$0, temp$4$0, temp$5$0) {
  var $targ$110;
  var $it$11;
  if ((!getChecker(Info$0)(this))) {
    $it$11 = Object.create(Info$0.prototype);
  } else {
    $it$11 = this;
  }
  ($it$11["context"] = temp$1$0);
  ($it$11["scope"] = temp$2$0);
  ($it$11["form"] = temp$3$0);
  ($it$11["arg"] = temp$4$0);
  ($it$11["expander"] = temp$5$0);
  $targ$110 = $it$11.form.env;
  ($it$11["env"] = $targ$110);
  [];
  return $it$11;
});
$targ$23 = (function(ph$0$0) {
  var t0$5;
  var location$0;
  var $it$12;
  var self$9;
  $it$12 = this;
  self$9 = this;
  t0$5 = ph$0$0;
  if (___hasprop(t0$5, "location")) {
    location$0 = t0$5.location;
    return location$0.text();
  } else {
    return null;
  }
});
(Info$0.prototype["gettext"] = $targ$23);
$targ$24 = (function(newscope$0) {
  var $it$13;
  var self$10;
  $it$13 = this;
  self$10 = this;
  return Info$0($it$13.context, newscope$0, $it$13.form, $it$13.arg, $it$13.expander);
});
(Info$0.prototype["with_scope"] = $targ$24);
$targ$25 = (function(name$2) {
  var $it$14;
  var self$11;
  $it$14 = this;
  self$11 = this;
  return $it$14.expander.gensym((name$2 || ""));
});
(Info$0.prototype["gensym"] = $targ$25);
$targ$26 = (function() {
  var $it$15;
  var self$12;
  $it$15 = this;
  self$12 = this;
  return ["nostep", $it$15.form];
});
(Info$0.prototype["defer"] = $targ$26);
$targ$27 = (function() {
  var $it$16;
  var self$13;
  $it$16 = this;
  self$13 = this;
  return $it$16.expander.mkenv();
});
(Info$0.prototype["mkenv"] = $targ$27);
$targ$28 = (function(context$1, expr$2) {
  var $it$17;
  var self$14;
  $it$17 = this;
  self$14 = this;
  return $it$17.expander.step(context$1, $it$17.scope, expr$2);
});
(Info$0.prototype["step"] = $targ$28);
$targ$29 = (function(context$2, exprs$0) {
  var $it$18;
  var self$15;
  $it$18 = this;
  self$15 = this;
  return $it$18.expander.step_all(context$2, $it$18.scope, exprs$0);
});
(Info$0.prototype["step_all"] = $targ$29);
$targ$30 = (function(context$3, expr$3) {
  var $it$19;
  var self$16;
  $it$19 = this;
  self$16 = this;
  return $it$19.expander.expand(context$3, $it$19.scope, expr$3);
});
(Info$0.prototype["expand"] = $targ$30);
$targ$31 = (function(x$5, start$0, end$0) {
  var $it$20;
  var self$17;
  $it$20 = this;
  self$17 = this;
  return $it$20.expander.pipeline.go(x$5, start$0, end$0);
});
(Info$0.prototype["go"] = $targ$31);
__amp____colon__(Info$0, __amp____colon__((($targ$130 = "Info"), (accum$4 = ({})), (accum$4["::name"] = $targ$130), accum$4), (($targ$131 = true), (accum$5 = ({})), (accum$5["::egclass"] = $targ$131), accum$5)));
Expander$0 = (function(temp$6$0, temp$7$0, temp$8$0) {
  var m$7;
  var acc$1;
  var $targ$136;
  var temp$9;
  var jskw$0;
  var $targ$133;
  var $it$21;
  if ((!getChecker(Expander$0)(this))) {
    $it$21 = Object.create(Expander$0.prototype);
  } else {
    $it$21 = this;
  }
  ($it$21["stdenv"] = temp$6$0);
  ($it$21["generic_nodes"] = temp$7$0);
  ($it$21["pipeline"] = temp$8$0);
  jskw$0 = "abstract arguments boolean break byte\n                 case catch char class const\n                 continue debugger default delete do\n                 double else enum eval export\n                 extends false final finally float\n                 for function goto if implements\n                 import in instanceof int interface\n                 let long native new null\n                 package private protected public return\n                 short static super switch synchronized\n                 this throw throws transient true\n                 try typeof var void volatile\n                 while with yield";
  $targ$133 = object(((acc$1 = []), ($targ$136 = null), (temp$9 = $targ$136), (m$7 = null), (function() {
    $8: for (var $__0 = jskw$0.split(RegExp("[ \\n]+", ""))[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$7 = $__1.value;
      {
        var $targ$137;
        var kw$0;
        kw$0 = m$7;
        $targ$137 = [kw$0, 0];
        temp$9 = $targ$137;
        acc$1.push(temp$9);
      }
    }
  })(), acc$1));
  ($it$21["nameusage"] = $targ$133);
  [];
  return $it$21;
});
$targ$33 = (function(temp$10$0) {
  var t0$6;
  var idx$0;
  var $targ$143;
  var bridge$$1331$0;
  var $$1334$0;
  var name$3;
  var ph$1$0;
  var $it$22;
  var self$18;
  $it$22 = this;
  self$18 = this;
  t0$6 = temp$10$0;
  name$3 = t0$6;
  ph$1$0 = t0$6;
  bridge$$1331$0 = ph$1$0;
  if (((bridge$$1331$0 === (void 0)) || (bridge$$1331$0 === null))) {
    return $it$22.gensym("");
  } else {
    if (Object.prototype.hasOwnProperty.call($it$22.nameusage, name$3)) {
      idx$0 = ($it$22.nameusage[name$3] = (send($it$22.nameusage, name$3) + 1));
      return ((name$3 + "$") + String(idx$0));
    } else {
      $targ$143 = 0;
      ($it$22.nameusage[name$3] = $targ$143);
      [];
      return (name$3 + "$0");
    }
  }
});
(Expander$0.prototype["gensym"] = $targ$33);
$targ$34 = (function() {
  var e$3;
  var $targ$147;
  var $it$23;
  var self$19;
  $it$23 = this;
  self$19 = this;
  e$3 = Env$0();
  $targ$147 = $it$23.stdenv.scopes.top;
  (e$3.scopes["top"] = $targ$147);
  [];
  return e$3;
});
(Expander$0.prototype["mkenv"] = $targ$34);
$targ$35 = (function(m$8, context$4, scope$5, form$0, arg$1) {
  var $targ$153;
  var $targ$152;
  var rval$3;
  var info$0;
  var rval$2;
  var $it$24;
  var self$20;
  $it$24 = this;
  self$20 = this;
  info$0 = Info$0(context$4, scope$5, form$0, arg$1, $it$24);
  $targ$152 = false;
  rval$3 = $targ$152;
  try {
    $targ$153 = m$8(context$4, info$0, form$0, arg$1);
    rval$3 = $targ$153;
    rval$3;
  } catch (excv$1) {
    var t3$0;
    var t2$0;
    var t1$2;
    var msg$0;
    var msg$2;
    var find$0;
    var err$0;
    var other$2;
    var m$9$0;
    var e$4;
    var $targ$158;
    var $targ$170;
    var e$5;
    var t0$7;
    var value$2;
    t0$7 = excv$1;
    if ((getChecker(ErrorFactory(["match"]))(t0$7) && (___hasprop(t0$7, "args") && ((t1$2 = t0$7.args), ((t1$2 instanceof Array) && ((t2$0 = t1$2.length), ((t2$0 === 1) && ((t3$0 = t1$2[0]), ___hasprop(t3$0, "value"))))))))) {
      value$2 = t3$0.value;
      m$9$0 = value$2;
      if ((m$9$0 === context$4)) {
        msg$0 = "The macro cannot be found in this context.";
        e$4 = ErrorFactory(["syntax", "context"]).create(msg$0, ({
          "context": context$4,
          "form": form$0
        }));
      } else {
        other$2 = m$9$0;
        find$0 = (function(temp$11$0) {
          var t0$8;
          var msg$1;
          var m$10;
          var other$3;
          var t0$9;
          var t1$3;
          var type$1;
          var xs$0;
          var arg$2;
          var ph$2$0;
          t0$8 = temp$11$0;
          arg$2 = t0$8;
          ph$2$0 = t0$8;
          if ((ph$2$0 === value$2)) {
            msg$1 = "The macro expected something different.";
            return ErrorFactory(["syntax", "argument"]).create(msg$1, ({
              "context": context$4,
              "argument": arg$2,
              "form": form$0
            }));
          } else {
            t0$9 = ph$2$0;
            t1$3 = t0$9.length;
            if ((t1$3 >= 1)) {
              type$1 = t0$9[0];
              xs$0 = Array.prototype.slice.call(t0$9, 1);
              m$10 = null;
              $9: for (var $__0 = xs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__1; !($__1 = $__0.next()).done; ) {
                m$10 = $__1.value;
                {
                  var t0$10;
                  var x$6;
                  t0$10 = getProjector(find$0)(m$10);
                  if (t0$10[0]) {
                    x$6 = t0$10[1];
                    if (x$6) {
                      return x$6;
                    }
                  } else {
                    ___match_error(m$10, "/home/olivier/git/earl-grey/src/expand.eg", 5314, 5399);
                  }
                }
              }
              return false;
            } else {
              other$3 = ph$2$0;
              return false;
            }
          }
        });
        err$0 = find$0(arg$1);
        if (err$0) {
          e$4 = err$0;
        } else {
          msg$2 = "The macro expected something different (could not locate error in the source).";
          e$4 = ErrorFactory(["syntax", "failure"]).create(msg$2, ({
            "form": form$0,
            "value": value$2
          }));
        }
      }
      throw e$4;
      rval$3 = $targ$158;
      rval$3;
    } else {
      e$5 = excv$1;
      throw e$5;
      rval$3 = $targ$170;
      rval$3;
    }
  }
  rval$2 = rval$3;
  return $it$24.mkenv().mark(rval$2);
});
(Expander$0.prototype["run_macro"] = $targ$35);
$targ$36 = (function(context$5, scope$6, expr$4) {
  var helper$0;
  var $it$25;
  var self$21;
  $it$25 = this;
  self$21 = this;
  helper$0 = track_location$0((function(context$6, scope$7, temp$12$0) {
    var t0$11;
    var other$4;
    var env$1;
    var m$12$0;
    var t0$13;
    var t0$14;
    var other$5;
    var m$14$0;
    var other$6;
    var m$13;
    var m$11$0;
    var env$0;
    var t0$15;
    var other$7;
    var m$16$0;
    var t0$16;
    var other$8;
    var m$18;
    var m$17$0;
    var t$0;
    var p$0;
    var other$9;
    var x$7;
    var code$0;
    var url$0;
    var f$1;
    var arg$3;
    var m$15;
    var t0$12;
    var t1$4;
    var s$0;
    var $$1589$0;
    var $$1590$0;
    var $$1591$0;
    var expr$5;
    var ph$3$0;
    t0$11 = temp$12$0;
    expr$5 = t0$11;
    ph$3$0 = t0$11;
    t0$12 = ph$3$0;
    t1$4 = t0$12.length;
    if ((($$1591$0 = (t1$4 === 2)) && (t0$12[0] === "symbol"))) {
      s$0 = t0$12[1];
      m$12$0 = expr$5;
      if (___hasprop(m$12$0, "env")) {
        env$1 = m$12$0.env;
        env$0 = expr$5.env;
      } else {
        other$4 = m$12$0;
        throw ErrorFactory(["syntax", "no_env"]).create((("No environment was found to resolve '" + s$0) + "'"), ({"symbol": expr$5}));
      }
      m$11$0 = env$0.resolve(scope$7, s$0);
      if (((m$11$0 instanceof Array) && ((t0$13 = m$11$0.length), ((t0$13 === 2) && (m$11$0[0] === "macro"))))) {
        m$13 = m$11$0[1];
        m$14$0 = context$6;
        if (((m$14$0 instanceof Array) && ((t0$14 = m$14$0.length), ((t0$14 === 2) && ((m$14$0[0] === "expr") && (m$14$0[1] === "head")))))) {
          return ["macro", m$13];
        } else {
          other$5 = m$14$0;
          return ["bounce", $it$25.run_macro(m$13, context$6, scope$7, expr$5, __lt____lt____colon__$0(["void"], expr$5))];
        }
      } else {
        other$6 = m$11$0;
        return expr$5;
      }
    } else {
      if (($$1591$0 && (t0$12[0] === "macro"))) {
        m$15 = t0$12[1];
        m$16$0 = context$6;
        if (((m$16$0 instanceof Array) && ((t0$15 = m$16$0.length), ((t0$15 === 2) && ((m$16$0[0] === "expr") && (m$16$0[1] === "head")))))) {
          return expr$5;
        } else {
          other$7 = m$16$0;
          return ["bounce", $it$25.run_macro(m$15, context$6, scope$7, expr$5, __lt____lt____colon__$0(["void"], expr$5))];
        }
      } else {
        if (((t1$4 === 3) && (t0$12[0] === "send"))) {
          f$1 = t0$12[1];
          arg$3 = t0$12[2];
          m$17$0 = helper$0(["expr", "head"], scope$7, f$1);
          if (((m$17$0 instanceof Array) && ((t0$16 = m$17$0.length), ((t0$16 === 2) && (m$17$0[0] === "macro"))))) {
            m$18 = m$17$0[1];
            return ["bounce", $it$25.run_macro(m$18, context$6, scope$7, expr$5, arg$3)];
          } else {
            other$8 = m$17$0;
            return expr$5;
          }
        } else {
          if ((((t1$4 >= 2) && (t1$4 <= 3)) && (t0$12[0] === "parse"))) {
            code$0 = t0$12[1];
            if ((2 >= t1$4)) {
              url$0 = null;
            } else {
              url$0 = t0$12[2];
            }
            t$0 = tokenize$0(Source$0(code$0, url$0));
            p$0 = parse$0(t$0);
            return ["bounce", helper$0(context$6, scope$7, expr$5.env.mark(p$0))];
          } else {
            if (((t1$4 === 2) && (t0$12[0] === "nostep"))) {
              x$7 = t0$12[1];
              return x$7;
            } else {
              other$9 = ph$3$0;
              return expr$5;
            }
          }
        }
      }
    }
  }));
  return helper$0(context$5, scope$6, expr$4);
});
(Expander$0.prototype["step"] = $targ$36);
$targ$37 = (function(context$7, scope$8, temp$13$0) {
  var t1$5;
  var t0$17;
  var $targ$193;
  var pre$0;
  var bulk$0;
  var $targ$195;
  var post$0;
  var stmts$0;
  var $it$26;
  var self$22;
  $it$26 = this;
  self$22 = this;
  t0$17 = temp$13$0;
  if (((t0$17 instanceof Array) && ((t1$5 = t0$17.length), (t1$5 >= 0)))) {
    stmts$0 = Array.prototype.slice.call(t0$17, 0);
  } else {
    ___match_error(temp$13$0);
  }
  $targ$193 = [];
  pre$0 = $targ$193;
  bulk$0 = [];
  $targ$195 = [];
  post$0 = $targ$195;
  $10: while (stmts$0.length) {
    var t0$18;
    var $targ$199;
    var m$21;
    var acc$2;
    var $targ$203;
    var temp$14;
    var e$6;
    var $targ$201;
    var x$8;
    var m$20;
    var stmt$1;
    var stmt$0;
    var prepend$0;
    var $$1784$0;
    var $$1785$0;
    var $$1786$0;
    var m$19$0;
    var current$0;
    current$0 = stmts$0.shift();
    m$19$0 = $it$26.step(context$7, scope$8, current$0);
    if ((($$1784$0 = (m$19$0 instanceof Array)) && ((t0$18 = m$19$0.length), ((t0$18 >= 1) && (m$19$0[0] === "splice"))))) {
      prepend$0 = Array.prototype.slice.call(m$19$0, 1);
      $targ$199 = prepend$0.concat(stmts$0);
      stmts$0 = $targ$199;
      stmts$0;
    } else {
      if (($$1784$0 && (($$1786$0 = (t0$18 === 2)) && (m$19$0[0] === "float")))) {
        stmt$0 = m$19$0[1];
        pre$0 = pre$0.concat($it$26.step_all(context$7, scope$8, [stmt$0]));
      } else {
        if (($$1786$0 && (m$19$0[0] === "sink"))) {
          stmt$1 = m$19$0[1];
          post$0 = post$0.concat($it$26.step_all(context$7, scope$8, [stmt$1]));
        } else {
          if (($$1786$0 && (m$19$0[0] === "restmacro"))) {
            m$20 = m$19$0[1];
            e$6 = $it$26.mkenv();
            acc$2 = [];
            $targ$203 = null;
            temp$14 = $targ$203;
            m$21 = null;
            $11: for (var $__0 = m$20(stmts$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$21 = $__1.value;
              {
                var $targ$204;
                var stmt$2;
                stmt$2 = m$21;
                $targ$204 = e$6.mark(stmt$2);
                temp$14 = $targ$204;
                acc$2.push(temp$14);
              }
            }
            $targ$201 = acc$2;
            stmts$0 = $targ$201;
            stmts$0;
          } else {
            x$8 = m$19$0;
            bulk$0.push(x$8);
          }
        }
      }
    }
  }
  return pre$0.concat(bulk$0).concat(post$0);
});
(Expander$0.prototype["step_all"] = $targ$37);
$targ$38 = (function(context$8, scope$9, expr$6) {
  var helper$1;
  var $it$27;
  var self$23;
  $it$27 = this;
  self$23 = this;
  helper$1 = track_location$0((function(context$9, scope$10, expr$7) {
    var t0$19;
    var t0$20;
    var other$10;
    var m$23$0;
    var $targ$211;
    var env$2;
    var m$24;
    var acc$3;
    var $targ$216;
    var temp$15;
    var newargs$0;
    var m$25;
    var acc$4;
    var $targ$220;
    var temp$16;
    var newargs$1;
    var t2$1;
    var $targ$224;
    var t0$22;
    var newscope$1;
    var env$3;
    var m$26;
    var acc$5;
    var $targ$235;
    var temp$17;
    var t0$27;
    var newscope$2;
    var stepscope$0;
    var $targ$231;
    var changes$0;
    var $targ$232;
    var newargs$2;
    var vars$0;
    var exp$0;
    var m$31;
    var t0$32;
    var other$15;
    var m$32$0;
    var $targ$272;
    var is_obj$0;
    var $targ$273;
    var obj$0;
    var $targ$274;
    var arr$0;
    var arr_parts$0;
    var obj_parts$0;
    var new_arr_part$0;
    var new_obj_part$0;
    var r$0;
    var x$11;
    var msg$3;
    var t0$33;
    var $targ$298;
    var otherwise$1;
    var m$34;
    var m$33$0;
    var t$1;
    var m$35;
    var acc$8;
    var $targ$301;
    var temp$20;
    var newscope$3;
    var $targ$310;
    var s$7;
    var newscope$4;
    var t0$35;
    var name$4;
    var $targ$312;
    var m$36;
    var acc$9;
    var $targ$314;
    var temp$21;
    var m$37;
    var acc$10;
    var $targ$319;
    var temp$22;
    var tokens$0;
    var msg$4;
    var other$17;
    var c$0;
    var ops$0;
    var args$8;
    var type$2;
    var args$7;
    var tag$0;
    var body$2;
    var ph$4$0;
    var x$13;
    var bindings$1;
    var body$1;
    var generator$0;
    var target$0;
    var value$8;
    var args$6;
    var args$5;
    var args$4;
    var args$3;
    var $targ$227;
    var s$2;
    var value$3;
    var body$0;
    var args$2;
    var args$1;
    var f$2;
    var arg$4;
    var s$1;
    var $$1896$0;
    var $$1897$0;
    var $$1898$0;
    var t1$6;
    var m$22$0;
    var $targ$208;
    $targ$208 = $it$27.step(context$9, scope$10, expr$7);
    expr$7 = $targ$208;
    m$22$0 = expr$7;
    if ((($$1896$0 = (m$22$0 instanceof Array)) && ((t0$19 = m$22$0.length), (($$1898$0 = (t0$19 === 2)) && (m$22$0[0] === "symbol"))))) {
      s$1 = m$22$0[1];
      $targ$211 = expr$7;
      t0$20 = $targ$211;
      if (___hasprop(t0$20, "env")) {
        env$2 = t0$20.env;
      } else {
        ___match_error($targ$211);
      }
      m$23$0 = env$2.resolve(scope$10, s$1);
      if ((m$23$0 === (void 0))) {
        throw ErrorFactory(["syntax", "undeclared"]).create(("Undeclared variable: " + s$1), ({"node": expr$7}));
      } else {
        other$10 = m$23$0;
        return ["bounce", other$10];
      }
    } else {
      if (($$1898$0 && (m$22$0[0] === "value"))) {
        m$22$0[1];
        return expr$7;
      } else {
        if (($$1898$0 && (m$22$0[0] === "variable"))) {
          m$22$0[1];
          return expr$7;
        } else {
          if (($$1896$0 && ((t0$19 === 1) && (m$22$0[0] === "void")))) {
            return expr$7;
          } else {
            if (($$1896$0 && ((t0$19 === 3) && (m$22$0[0] === "send")))) {
              f$2 = m$22$0[1];
              arg$4 = m$22$0[2];
              return ["send", helper$1(["expr", "head"], scope$10, f$2), helper$1(["expr", "tail"], scope$10, arg$4)];
            } else {
              if (($$1896$0 && (($$1898$0 = (t0$19 >= 1)) && (m$22$0[0] === "array")))) {
                args$1 = Array.prototype.slice.call(m$22$0, 1);
                acc$3 = [];
                $targ$216 = null;
                temp$15 = $targ$216;
                m$24 = null;
                $12: for (var $__0 = $it$27.step_all(["expr", "array"], scope$10, args$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  m$24 = $__1.value;
                  {
                    var $targ$217;
                    var arg$5;
                    arg$5 = m$24;
                    $targ$217 = helper$1(["expr", "expr"], scope$10, arg$5);
                    temp$15 = $targ$217;
                    acc$3.push(temp$15);
                  }
                }
                newargs$0 = acc$3;
                return ["array"].concat(newargs$0);
              } else {
                if (($$1898$0 && (m$22$0[0] === "object"))) {
                  args$2 = Array.prototype.slice.call(m$22$0, 1);
                  acc$4 = [];
                  $targ$220 = null;
                  temp$16 = $targ$220;
                  m$25 = null;
                  $13: for (var $__2 = $it$27.step_all(["expr", "object"], scope$10, args$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
                      $__3; !($__3 = $__2.next()).done; ) {
                    m$25 = $__3.value;
                    {
                      var t1$7;
                      var $targ$223;
                      var t0$21;
                      var k$1;
                      var v$2;
                      t0$21 = m$25;
                      if (((t0$21 instanceof Array) && ((t1$7 = t0$21.length), ((t1$7 === 3) && (t0$21[0] === "array"))))) {
                        k$1 = t0$21[1];
                        v$2 = t0$21[2];
                        $targ$223 = ["array", helper$1(["expr", "expr"], scope$10, k$1), helper$1(["expr", "expr"], scope$10, v$2)];
                        temp$16 = $targ$223;
                        acc$4.push(temp$16);
                      } else {
                        ___match_error(m$25, "/home/olivier/git/earl-grey/src/expand.eg", 10814, 11003);
                      }
                    }
                  }
                  newargs$1 = acc$4;
                  return ["object"].concat(newargs$1);
                } else {
                  if (($$1896$0 && ((t0$19 === 4) && ((m$22$0[0] === "bind") && (($targ$224 = m$22$0[1]), (t1$6 = $targ$224), ($targ$227 = t1$6), ((t1$6 instanceof Array) && ((t2$1 = t1$6.length), ((t2$1 === 2) && (t1$6[0] === "symbol"))))))))) {
                    s$2 = t1$6[1];
                    value$3 = m$22$0[2];
                    body$0 = m$22$0[3];
                    newscope$1 = Scope$0(scope$10);
                    t0$22 = $targ$227;
                    if (___hasprop(t0$22, "env")) {
                      env$3 = t0$22.env;
                    } else {
                      ___match_error($targ$227);
                    }
                    env$3.bind(newscope$1, s$2, value$3);
                    return helper$1(context$9, newscope$1, body$0);
                  } else {
                    if (($$1896$0 && (($$1898$0 = (t0$19 >= 1)) && (m$22$0[0] === "splice")))) {
                      args$3 = Array.prototype.slice.call(m$22$0, 1);
                      return ["bounce", __amp____colon__(["multi"].concat(args$3), ({"override_scope": true}))];
                    } else {
                      if (($$1898$0 && (m$22$0[0] === "interactive"))) {
                        args$4 = Array.prototype.slice.call(m$22$0, 1);
                        return ["bounce", __amp____colon__(["multi"].concat(args$4), ({
                          "override_scope": true,
                          "all_mutable": true
                        }))];
                      } else {
                        if (($$1898$0 && (m$22$0[0] === "multi"))) {
                          args$5 = Array.prototype.slice.call(m$22$0, 1);
                          if (expr$7.override_scope) {
                            newscope$2 = scope$10;
                          } else {
                            newscope$2 = Scope$0(scope$10);
                          }
                          if (expr$7.nonrecursive) {
                            stepscope$0 = scope$10;
                          } else {
                            stepscope$0 = newscope$2;
                          }
                          $targ$231 = false;
                          changes$0 = $targ$231;
                          $targ$232 = classify$0("newargs", "vars", ((acc$5 = []), ($targ$235 = null), (temp$17 = $targ$235), (m$26 = null), (function() {
                            $14: for (var $__4 = $it$27.step_all(["expr", "multi"], stepscope$0, args$5)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$26 = $__5.value;
                              {
                                var t1$8;
                                var $targ$238;
                                var $targ$240;
                                var $targ$239;
                                var t0$24;
                                var env$4;
                                var $targ$243;
                                var $targ$241;
                                var $targ$246;
                                var $targ$245;
                                var t0$25;
                                var v$3;
                                var $targ$251;
                                var $targ$248;
                                var env$5;
                                var $targ$247;
                                var $targ$252;
                                var $targ$254;
                                var $targ$253;
                                var $targ$256;
                                var $targ$255;
                                var t0$26;
                                var env$6;
                                var $targ$259;
                                var $targ$257;
                                var $targ$261;
                                var other$11;
                                var s$5;
                                var $targ$258;
                                var v$4;
                                var value$7;
                                var variable$2;
                                var s$4;
                                var value$6;
                                var $targ$242;
                                var s$3;
                                var value$5;
                                var t0$23;
                                var opt$2;
                                var value$4;
                                var $$2088$0;
                                var $$2089$0;
                                var $$2090$0;
                                var $$2091$0;
                                var $$2092$0;
                                var $$2093$0;
                                var t2$2;
                                var t3$1;
                                t0$23 = m$26;
                                if ((($$2089$0 = (t0$23 instanceof Array)) && ((t1$8 = t0$23.length), (($$2091$0 = (t1$8 === 3)) && (t0$23[0] === "option"))))) {
                                  opt$2 = t0$23[1];
                                  value$4 = t0$23[2];
                                  newscope$2.setopt(opt$2, value$4);
                                  $targ$238 = ["ignore"];
                                  temp$17 = $targ$238;
                                  acc$5.push(temp$17);
                                } else {
                                  if (($$2091$0 && ((t0$23[0] === "declare_raw") && (($targ$239 = t0$23[1]), (t2$2 = $targ$239), ($targ$242 = t2$2), ((t2$2 instanceof Array) && (($targ$240 = t2$2.length), (t3$1 = $targ$240), ((t3$1 === 2) && (t2$2[0] === "symbol")))))))) {
                                    s$3 = t2$2[1];
                                    value$5 = t0$23[2];
                                    t0$24 = $targ$242;
                                    if (___hasprop(t0$24, "env")) {
                                      env$4 = t0$24.env;
                                    } else {
                                      ___match_error($targ$242);
                                    }
                                    env$4.bind(newscope$2, s$3, value$5);
                                    $targ$243 = true;
                                    changes$0 = $targ$243;
                                    $targ$241 = ["ignore"];
                                    temp$17 = $targ$241;
                                    acc$5.push(temp$17);
                                  } else {
                                    if (($$2089$0 && (($$2091$0 = ((t1$8 >= 2) && (t1$8 <= 3))) && (($$2092$0 = (t0$23[0] === "declare")) && (($targ$245 = t0$23[1]), (t2$2 = $targ$245), (variable$2 = t2$2), ((t2$2 instanceof Array) && (($targ$246 = t2$2.length), (t3$1 = $targ$246), ((t3$1 === 2) && (t2$2[0] === "symbol"))))))))) {
                                      s$4 = t2$2[1];
                                      if ((2 >= t1$8)) {
                                        value$6 = null;
                                      } else {
                                        value$6 = t0$23[2];
                                      }
                                      $targ$248 = variable$2;
                                      t0$25 = $targ$248;
                                      if (___hasprop(t0$25, "env")) {
                                        env$5 = t0$25.env;
                                      } else {
                                        ___match_error($targ$248);
                                      }
                                      if ((variable$2.use_previous && env$5.resolve(newscope$2, s$4))) {
                                        $targ$247 = ["splice"];
                                      } else {
                                        v$3 = __lt____lt____colon__$0(["variable", $it$27.gensym(s$4)], variable$2);
                                        __amp____colon__(v$3, ({"mutable": (expr$7.all_mutable || variable$2.mutable)}));
                                        env$5.bind(newscope$2, s$4, v$3);
                                        $targ$251 = true;
                                        changes$0 = $targ$251;
                                        if (value$6) {
                                          $targ$247 = ["splice", ["newargs", ["assign", v$3, value$6]], ["vars", v$3]];
                                        } else {
                                          $targ$247 = ["vars", v$3];
                                        }
                                      }
                                      temp$17 = $targ$247;
                                      acc$5.push(temp$17);
                                    } else {
                                      if (($$2092$0 && ((v$4 = t2$2), ((t2$2 instanceof Array) && (($targ$252 = t2$2.length), (t3$1 = $targ$252), ((t3$1 === 2) && (t2$2[0] === "variable"))))))) {
                                        t2$2[1];
                                        if ((2 >= t1$8)) {
                                          value$7 = null;
                                        } else {
                                          value$7 = t0$23[2];
                                        }
                                        $targ$254 = true;
                                        changes$0 = $targ$254;
                                        if (value$7) {
                                          $targ$253 = ["splice", ["newargs", ["assign", v$4, value$7]], ["vars", v$4]];
                                        } else {
                                          $targ$253 = ["vars", v$4];
                                        }
                                        temp$17 = $targ$253;
                                        acc$5.push(temp$17);
                                      } else {
                                        if (($$2089$0 && ((t1$8 === 2) && ((t0$23[0] === "undeclare") && (($targ$255 = t0$23[1]), (t2$2 = $targ$255), ((t2$2 instanceof Array) && (($targ$256 = t2$2.length), (t3$1 = $targ$256), ((t3$1 === 2) && (t2$2[0] === "symbol"))))))))) {
                                          s$5 = t2$2[1];
                                          $targ$258 = t2$2;
                                          t0$26 = $targ$258;
                                          if (___hasprop(t0$26, "env")) {
                                            env$6 = t0$26.env;
                                          } else {
                                            ___match_error($targ$258);
                                          }
                                          env$6.bind(newscope$2, s$5, undefined);
                                          $targ$259 = true;
                                          changes$0 = $targ$259;
                                          $targ$257 = ["ignore"];
                                          temp$17 = $targ$257;
                                          acc$5.push(temp$17);
                                        } else {
                                          other$11 = m$26;
                                          $targ$261 = ["newargs", other$11];
                                          temp$17 = $targ$261;
                                          acc$5.push(temp$17);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          })(), acc$5));
                          t0$27 = $targ$232;
                          if ((___hasprop(t0$27, "newargs") && ((newargs$2 = t0$27.newargs), ___hasprop(t0$27, "vars")))) {
                            vars$0 = t0$27.vars;
                          } else {
                            ___match_error($targ$232);
                          }
                          [newargs$2, vars$0];
                          exp$0 = (function(s$6) {
                            var m$27;
                            var acc$6;
                            var $targ$265;
                            var temp$18;
                            var m$28;
                            var acc$7;
                            var $targ$270;
                            var temp$19;
                            var stepped$0;
                            acc$6 = [];
                            $targ$265 = null;
                            temp$18 = $targ$265;
                            m$27 = null;
                            $16: for (var $__4 = enumerate(newargs$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$27 = $__5.value;
                              {
                                var t1$9;
                                var $targ$268;
                                var t0$28;
                                var i$0;
                                var arg$6;
                                t0$28 = m$27;
                                if (((t0$28 instanceof Array) && ((t1$9 = t0$28.length), (t1$9 === 2)))) {
                                  i$0 = t0$28[0];
                                  arg$6 = t0$28[1];
                                  $targ$268 = $it$27.step(["expr", ((i$0 === (newargs$2.length - 1)) ? "expr" : "ignore")], s$6, arg$6);
                                  temp$18 = $targ$268;
                                  acc$6.push(temp$18);
                                } else {
                                  ___match_error(m$27, "/home/olivier/git/earl-grey/src/expand.eg", 14135, 14312);
                                }
                              }
                            }
                            stepped$0 = acc$6;
                            acc$7 = [];
                            $targ$270 = null;
                            temp$19 = $targ$270;
                            m$28 = null;
                            $15: for (var $__6 = stepped$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__7; !($__7 = $__6.next()).done; ) {
                              m$28 = $__7.value;
                              {
                                var $targ$271;
                                var arg$7;
                                arg$7 = m$28;
                                $targ$271 = helper$1(["expr", "expr"], s$6, arg$7);
                                temp$19 = $targ$271;
                                acc$7.push(temp$19);
                              }
                            }
                            return acc$7;
                          });
                          if (changes$0) {
                            return ["scope", vars$0, ["multi"].concat(exp$0(newscope$2))];
                          } else {
                            return ["multi"].concat(exp$0(scope$10));
                          }
                        } else {
                          if (($$1898$0 && (m$22$0[0] === "data"))) {
                            args$6 = Array.prototype.slice.call(m$22$0, 1);
                            $targ$272 = false;
                            is_obj$0 = $targ$272;
                            $targ$273 = ["object"];
                            obj$0 = $targ$273;
                            $targ$274 = ["array"];
                            arr$0 = $targ$274;
                            arr_parts$0 = [];
                            obj_parts$0 = [];
                            new_arr_part$0 = (function() {
                              var t0$29;
                              var $targ$282;
                              var other$12;
                              var m$29$0;
                              m$29$0 = arr$0;
                              if (((m$29$0 instanceof Array) && ((t0$29 = m$29$0.length), ((t0$29 === 1) && (m$29$0[0] === "array"))))) {
                                return false;
                              } else {
                                other$12 = m$29$0;
                                arr_parts$0.push(arr$0);
                                $targ$282 = ["array"];
                                arr$0 = $targ$282;
                                return arr$0;
                              }
                            });
                            new_obj_part$0 = (function() {
                              var t0$30;
                              var $targ$285;
                              var other$13;
                              var m$30$0;
                              m$30$0 = obj$0;
                              if (((m$30$0 instanceof Array) && ((t0$30 = m$30$0.length), ((t0$30 === 1) && (m$30$0[0] === "object"))))) {
                                return false;
                              } else {
                                other$13 = m$30$0;
                                obj_parts$0.push(obj$0);
                                $targ$285 = ["object"];
                                obj$0 = $targ$285;
                                return obj$0;
                              }
                            });
                            m$31 = null;
                            $17: for (var $__4 = $it$27.step_all(["expr", "data"], scope$10, args$6)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$31 = $__5.value;
                              {
                                var t1$10;
                                var $targ$288;
                                var $targ$289;
                                var $targ$290;
                                var other$14;
                                var expr$9;
                                var expr$8;
                                var k$2;
                                var v$5;
                                var t0$31;
                                var $$2359$0;
                                var $$2360$0;
                                var $$2361$0;
                                var $$2362$0;
                                t0$31 = m$31;
                                if ((($$2360$0 = (t0$31 instanceof Array)) && ((t1$10 = t0$31.length), ((t1$10 === 1) && (t0$31[0] === "assoc"))))) {
                                  $targ$288 = true;
                                  is_obj$0 = $targ$288;
                                  is_obj$0;
                                } else {
                                  if (($$2360$0 && ((t1$10 === 3) && (t0$31[0] === "assoc")))) {
                                    k$2 = t0$31[1];
                                    v$5 = t0$31[2];
                                    $targ$289 = true;
                                    is_obj$0 = $targ$289;
                                    obj$0.push(["array", k$2, v$5]);
                                  } else {
                                    if (($$2360$0 && (($$2362$0 = (t1$10 === 2)) && (t0$31[0] === "dynsplice")))) {
                                      expr$8 = t0$31[1];
                                      new_arr_part$0();
                                      arr_parts$0.push(expr$8);
                                    } else {
                                      if (($$2362$0 && (t0$31[0] === "objsplice"))) {
                                        expr$9 = t0$31[1];
                                        $targ$290 = true;
                                        is_obj$0 = $targ$290;
                                        new_obj_part$0();
                                        obj_parts$0.push(expr$9);
                                      } else {
                                        other$14 = m$31;
                                        arr$0.push(other$14);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            new_arr_part$0();
                            new_obj_part$0();
                            m$32$0 = arr_parts$0;
                            if (((m$32$0 instanceof Array) && ((t0$32 = m$32$0.length), ((t0$32 === 0) && is_obj$0)))) {
                              r$0 = util$0.construct(obj_parts$0, (function(x$9, rest$0) {
                                return ["send", ["symbol", "&:"], ["data", x$9, rest$0]];
                              }), ["object"]);
                            } else {
                              if (is_obj$0) {
                                throw ErrorFactory(["syntax", "array", "object"]).create("Cannot mix array and object notations.");
                              } else {
                                other$15 = m$32$0;
                                r$0 = util$0.construct(arr_parts$0.reverse(), (function(x$10, rest$1) {
                                  return ["send", ["send", rest$1, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", x$10]];
                                }), ["array"]);
                              }
                            }
                            return helper$1(context$9, scope$10, $it$27.mkenv().mark(r$0));
                          } else {
                            if (($$1896$0 && ((t0$19 === 3) && (m$22$0[0] === "assign")))) {
                              target$0 = m$22$0[1];
                              value$8 = m$22$0[2];
                              t$1 = helper$1(["expr", "expr"], scope$10, target$0);
                              m$33$0 = t$1;
                              if ((((x$11 = m$33$0), ((x$11 instanceof Array) && (x$11[0] === "variable"))) && (((!t$1.mutable) && t$1.assigned) && (t$1.assigned.group_id !== target$0.group_id)))) {
                                msg$3 = ["Variable was declared as read-only. Declare it as", "mutable at the origin with `var` (if you have access", "to the declaration) or declare a new variable with", "`let` or `var` or remove the original binding with", "`delete`"].join(" ");
                                throw ErrorFactory(["syntax"]).create(msg$3, ({
                                  "variable": target$0,
                                  "loc": t$1.assigned
                                }));
                              } else {
                                if (((m$33$0 instanceof Array) && ((t0$33 = m$33$0.length), ((t0$33 === 2) && (m$33$0[0] === "macro"))))) {
                                  m$34 = m$33$0[1];
                                  ["bounce", m$34(["assign"], scope$10, expr$7, value$8)];
                                } else {
                                  otherwise$1 = m$33$0;
                                  $targ$298 = target$0;
                                  (t$1["assigned"] = $targ$298);
                                  [];
                                }
                              }
                              return ["assign", t$1, helper$1(["expr", "expr"], scope$10, value$8)];
                            } else {
                              if (($$1896$0 && ((t0$19 === 4) && (m$22$0[0] === "lambda")))) {
                                bindings$1 = m$22$0[1];
                                body$1 = m$22$0[2];
                                generator$0 = m$22$0[3];
                                newscope$3 = Scope$0(scope$10);
                                return ["lambda", ((acc$8 = []), ($targ$301 = null), (temp$20 = $targ$301), (m$35 = null), (function() {
                                  $18: for (var $__6 = bindings$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                                      $__7; !($__7 = $__6.next()).done; ) {
                                    m$35 = $__7.value;
                                    {
                                      var t1$11;
                                      var v$6;
                                      var $targ$304;
                                      var x$12;
                                      var $targ$307;
                                      var $targ$308;
                                      var other$16;
                                      var v$7;
                                      var t0$34;
                                      var b$0;
                                      var env$7;
                                      var $$2571$0;
                                      t0$34 = m$35;
                                      if (((t0$34 instanceof Array) && ((t1$11 = t0$34.length), ((t1$11 === 2) && ((t0$34[0] === "symbol") && ((b$0 = t0$34[1]), ___hasprop(t0$34, "env"))))))) {
                                        env$7 = t0$34.env;
                                        v$6 = ["variable", $it$27.gensym(b$0)];
                                        env$7.bind(newscope$3, b$0, v$6);
                                        $targ$304 = v$6;
                                        temp$20 = $targ$304;
                                        acc$8.push(temp$20);
                                      } else {
                                        if (((x$12 = t0$34), ((x$12 instanceof Array) && (x$12[0] === "variable")))) {
                                          v$7 = t0$34;
                                          $targ$307 = v$7;
                                          temp$20 = $targ$307;
                                          acc$8.push(temp$20);
                                        } else {
                                          other$16 = m$35;
                                          throw ErrorFactory(["syntax", "lambda", "binding"]).create("Not a valid binding.", ({"node": other$16}));
                                          temp$20 = $targ$308;
                                          acc$8.push(temp$20);
                                        }
                                      }
                                    }
                                  }
                                })(), acc$8), helper$1(["expr", "expr"], newscope$3, body$1), generator$0];
                              } else {
                                if (($$1896$0 && (($$1898$0 = (t0$19 === 3)) && (m$22$0[0] === "use")))) {
                                  ph$4$0 = m$22$0[1];
                                  x$13 = m$22$0[2];
                                  t0$35 = ph$4$0;
                                  if ((typeof(t0$35) === "string")) {
                                    name$4 = t0$35;
                                    $targ$310 = scope$10;
                                    s$7 = $targ$310;
                                    $19: while (s$7) {
                                      var $targ$311;
                                      if ((s$7.name.slice(0, (name$4.length + 1)) === (name$4 + "/"))) {
                                        break $19;
                                      } else {
                                        $targ$311 = s$7.parent;
                                        s$7 = $targ$311;
                                        s$7;
                                      }
                                    }
                                    if (s$7) {
                                      return helper$1(context$9, s$7, x$13);
                                    } else {
                                      throw ErrorFactory(["syntax", "noscope"]).create(("Could not find a scope tagged: " + name$4));
                                    }
                                  } else {
                                    newscope$4 = ph$4$0;
                                    return helper$1(context$9, newscope$4, x$13);
                                  }
                                } else {
                                  if (($$1898$0 && ((m$22$0[0] === "tagscope") && (($targ$312 = m$22$0[1]), (t1$6 = $targ$312), (typeof(t1$6) === "string"))))) {
                                    tag$0 = t1$6;
                                    body$2 = m$22$0[2];
                                    return helper$1(context$9, Scope$0(scope$10, $it$27.gensym((tag$0 + "/"))), body$2);
                                  } else {
                                    if (($$1896$0 && ((t0$19 >= 1) && ((type$2 = m$22$0[0]), (args$7 = Array.prototype.slice.call(m$22$0, 1)), ($it$27.generic_nodes.indexOf(type$2) !== -1))))) {
                                      return [type$2].concat(((acc$9 = []), ($targ$314 = null), (temp$21 = $targ$314), (m$36 = null), (function() {
                                        $20: for (var $__6 = args$7[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__7; !($__7 = $__6.next()).done; ) {
                                          m$36 = $__7.value;
                                          {
                                            var $targ$315;
                                            var arg$8;
                                            arg$8 = m$36;
                                            $targ$315 = helper$1(["expr", "expr"], scope$10, arg$8);
                                            temp$21 = $targ$315;
                                            acc$9.push(temp$21);
                                          }
                                        }
                                      })(), acc$9));
                                    } else {
                                      if (($$1896$0 && ((t0$19 >= 2) && (m$22$0[0] === "mismix")))) {
                                        ops$0 = m$22$0[1];
                                        args$8 = Array.prototype.slice.call(m$22$0, 2);
                                        tokens$0 = object(((acc$10 = []), ($targ$319 = null), (temp$22 = $targ$319), (m$37 = null), (function() {
                                          $21: for (var $__6 = enumerate(ops$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                              $__7; !($__7 = $__6.next()).done; ) {
                                            m$37 = $__7.value;
                                            {
                                              var t1$12;
                                              var $targ$322;
                                              var t0$36;
                                              var i$1;
                                              var op$0;
                                              t0$36 = m$37;
                                              if (((t0$36 instanceof Array) && ((t1$12 = t0$36.length), (t1$12 === 2)))) {
                                                i$1 = t0$36[0];
                                                op$0 = t0$36[1];
                                                $targ$322 = [("token" + String((i$1 + 1))), op$0];
                                                temp$22 = $targ$322;
                                                acc$10.push(temp$22);
                                              } else {
                                                ___match_error(m$37, "/home/olivier/git/earl-grey/src/expand.eg", 19357, 19457);
                                              }
                                            }
                                          }
                                        })(), acc$10));
                                        msg$4 = "These operators or brackets cannot be mixed together.";
                                        throw ErrorFactory(["syntax", "mismatch"]).create(msg$4, tokens$0);
                                      } else {
                                        if (($$1896$0 && ((t0$19 === 2) && (m$22$0[0] === "char")))) {
                                          c$0 = m$22$0[1];
                                          throw ErrorFactory(["syntax", "illegal_character"]).create(("An illegal character was found: " + c$0), ({"node": expr$7}));
                                        } else {
                                          other$17 = m$22$0;
                                          throw ErrorFactory(["syntax", "illegal_node"]).create(("An illegal node was found: " + other$17), ({
                                            "node": other$17,
                                            "context": context$9
                                          }));
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }));
  return helper$1(context$8, scope$9, expr$6);
});
(Expander$0.prototype["expand"] = $targ$38);
__amp____colon__(Expander$0, __amp____colon__((($targ$323 = "Expander"), (accum$6 = ({})), (accum$6["::name"] = $targ$323), accum$6), (($targ$324 = true), (accum$7 = ({})), (accum$7["::egclass"] = $targ$324), accum$7)));
mac1$0 = (function(f$3) {
  return ["macro", (function(context$10, scope$11, form$1, temp$23$0) {
    var t1$13;
    var t0$37;
    var expr$10;
    t0$37 = temp$23$0;
    if (((t0$37 instanceof Array) && ((t1$13 = t0$37.length), ((t1$13 === 2) && (t0$37[0] === "data"))))) {
      expr$10 = t0$37[1];
    } else {
      ___match_error(temp$23$0);
    }
    return f$3(expr$10);
  })];
});
__chk_ncache$0 = ({});
__chk_scache$0 = ({});
checker_db$0 = (function(ph$5$0) {
  var v$8;
  var $targ$329;
  var v$9;
  var $targ$331;
  var s$8;
  var t0$38;
  var n$0;
  var $$2796$0;
  if ((ph$5$0 === null)) {
    return checker_db$0.null;
  } else {
    if ((ph$5$0 === (void 0))) {
      return checker_db$0.undefined;
    } else {
      if ((ph$5$0 === true)) {
        return checker_db$0.true;
      } else {
        if ((ph$5$0 === false)) {
          return checker_db$0.false;
        } else {
          t0$38 = ph$5$0;
          if ((typeof(t0$38) === "number")) {
            n$0 = t0$38;
            if (send(__chk_ncache$0, n$0)) {
              return send(__chk_ncache$0, n$0);
            } else {
              v$8 = mac1$0((function(x$14) {
                return ["send", ["symbol", "==="], ["data", x$14, ["value", n$0]]];
              }));
              $targ$329 = v$8;
              (__chk_ncache$0[n$0] = $targ$329);
              [];
              return v$8;
            }
          } else {
            if ((typeof(t0$38) === "string")) {
              s$8 = t0$38;
              if (Object.prototype.hasOwnProperty.call(__chk_scache$0, s$8)) {
                return send(__chk_scache$0, s$8);
              } else {
                v$9 = mac1$0((function(x$15) {
                  return ["send", ["symbol", "==="], ["data", x$15, ["value", s$8]]];
                }));
                $targ$331 = v$9;
                (__chk_scache$0[s$8] = $targ$331);
                [];
                return v$9;
              }
            } else {
              return ___match_error(ph$5$0);
            }
          }
        }
      }
    }
  }
});
__amp____colon__(checker_db$0, ({
  "String": mac1$0((function(x$16) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$16]], ["value", "string"]]];
  })),
  "Number": mac1$0((function(x$17) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$17]], ["value", "number"]]];
  })),
  "Array": mac1$0((function(x$18) {
    return ["send", ["symbol", "instanceof"], ["data", x$18, ["symbol", "Array"]]];
  })),
  "true": mac1$0((function(x$19) {
    return x$19;
  })),
  "false": mac1$0((function(x$20) {
    return ["send", ["symbol", "not"], ["data", ["void"], x$20]];
  })),
  "null": mac1$0((function(x$21) {
    return ["send", ["symbol", "==="], ["data", x$21, ["value", null]]];
  })),
  "undefined": mac1$0((function(x$22) {
    return ["send", ["symbol", "==="], ["data", x$22, ["value", undefined]]];
  }))
}));
topscope$0 = Scope$0(null, "top");
$targ$332 = Env$0;
(exports["Env"] = $targ$332);
[];
$targ$333 = Scope$0;
(exports["Scope"] = $targ$333);
[];
$targ$334 = Info$0;
(exports["Info"] = $targ$334);
[];
$targ$335 = track_location$0;
(exports["track_location"] = $targ$335);
[];
$targ$336 = Expander$0;
(exports["Expander"] = $targ$336);
[];
$targ$337 = GenSym$0;
(exports["GenSym"] = $targ$337);
[];
$targ$338 = gensym$0;
(exports["gensym"] = $targ$338);
[];
$targ$339 = mac1$0;
(exports["mac1"] = $targ$339);
[];
$targ$340 = checker_db$0;
(exports["checker_db"] = $targ$340);
[];
$targ$341 = topscope$0;
(exports["topscope"] = $targ$341);
[];
//# sourceURL=<compile-source>
