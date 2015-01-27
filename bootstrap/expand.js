"use strict";
require("earlgrey-runtime");
var $targ$58;
var accum$0;
var $targ$59;
var accum$1;
var $targ$101;
var accum$2;
var $targ$102;
var accum$3;
var $targ$140;
var accum$4;
var $targ$141;
var accum$5;
var $targ$333;
var accum$6;
var $targ$334;
var accum$7;
var $targ$342;
var $targ$343;
var $targ$344;
var $targ$345;
var $targ$346;
var $targ$347;
var $targ$348;
var $targ$349;
var $targ$350;
var $targ$351;
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
var $targ$32;
var Expander$0;
var $targ$34;
var $targ$35;
var $targ$36;
var $targ$37;
var $targ$38;
var $targ$39;
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
  var $targ$49;
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
    $targ$49 = ({});
    ($it$0["options"] = $targ$49);
    [];
  } else {
    ___match_error(m$0$0);
  }
  return $it$0;
});
$targ$11 = (function(opt$0) {
  var otherwise$0;
  var $$676$0;
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
  var $targ$55;
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  $targ$55 = value$0;
  ($it$2.options[opt$1] = $targ$55);
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
__amp____colon__(Scope$0, __amp____colon__((($targ$58 = "Scope"), (accum$0 = ({})), (accum$0["::name"] = $targ$58), accum$0), (($targ$59 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$59), accum$1)));
Env$0 = (function() {
  var $targ$61;
  var $it$4;
  if ((!getChecker(Env$0)(this))) {
    $it$4 = Object.create(Env$0.prototype);
  } else {
    $it$4 = this;
  }
  $targ$61 = ({});
  ($it$4["scopes"] = $targ$61);
  [];
  return $it$4;
});
$targ$15 = (function(origin$0) {
  var values$0;
  var $targ$65;
  var scope$0;
  var $it$5;
  var self$3;
  $it$5 = this;
  self$3 = this;
  values$0 = ({});
  $targ$65 = origin$0;
  scope$0 = $targ$65;
  $4: while (scope$0) {
    var $targ$66;
    __amp____colon__(values$0, send($it$5.scopes, scope$0.name));
    $targ$66 = scope$0.parent;
    scope$0 = $targ$66;
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
  var $targ$73;
  var $targ$72;
  var $it$7;
  var self$5;
  $it$7 = this;
  self$5 = this;
  if ((!send($it$7.scopes, scope$2.name))) {
    $targ$73 = ({});
    ($it$7.scopes[scope$2.name] = $targ$73);
    [];
  }
  $targ$72 = value$1;
  (send($it$7.scopes, scope$2.name)[name$1] = $targ$72);
  return [];
});
(Env$0.prototype["bind"] = $targ$17);
$targ$18 = (function(expr$0) {
  var x$0;
  var x$1;
  var bridge$$841$0;
  var x$2;
  var bridge$$840$0;
  var x$3;
  var bridge$$839$0;
  var x$4;
  var t0$1;
  var m$3;
  var other$0;
  var type$0;
  var args$0;
  var bridge$$838$0;
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
    bridge$$838$0 = m$2$0;
    if ((((bridge$$839$0 = bridge$$838$0), (((bridge$$840$0 = bridge$$839$0), (((bridge$$841$0 = bridge$$840$0), (((x$0 = bridge$$841$0), ((x$0 instanceof Array) && (x$0[0] === "symbol"))) || ((x$1 = bridge$$841$0), ((x$1 instanceof Array) && (x$1[0] === "value"))))) || ((x$2 = bridge$$840$0), ((x$2 instanceof Array) && (x$2[0] === "variable"))))) || ((x$3 = bridge$$839$0), ((x$3 instanceof Array) && (x$3[0] === "macro"))))) || ((x$4 = bridge$$838$0), ((x$4 instanceof Array) && (x$4[0] === "void"))))) {
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
      var $targ$93;
      var temp$0;
      var t0$2;
      var scope$3;
      var bindings$0;
      t0$2 = m$4;
      if (((t0$2 instanceof Array) && ((t1$0 = t0$2.length), (t1$0 === 2)))) {
        scope$3 = t0$2[0];
        bindings$0 = t0$2[1];
        acc$0 = [];
        $targ$93 = null;
        temp$0 = $targ$93;
        m$5 = null;
        $7: for (var $__0 = items(bindings$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$5 = $__1.value;
          {
            var t1$1;
            var $targ$98;
            var $targ$96;
            var t0$3;
            var k$0;
            var $targ$97;
            t0$3 = m$5;
            if (((t0$3 instanceof Array) && ((t1$1 = t0$3.length), (t1$1 === 2)))) {
              k$0 = t0$3[0];
              $targ$97 = t0$3[1];
              if ((!send(e$1.scopes, scope$3))) {
                $targ$98 = ({});
                (e$1.scopes[scope$3] = $targ$98);
                [];
              }
              (send(e$1.scopes, scope$3)[k$0] = $targ$97);
              $targ$96 = [];
              temp$0 = $targ$96;
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
__amp____colon__(Env$0, __amp____colon__((($targ$101 = "Env"), (accum$2 = ({})), (accum$2["::name"] = $targ$101), accum$2), (($targ$102 = true), (accum$3 = ({})), (accum$3["::egclass"] = $targ$102), accum$3)));
track_location$0 = (function(f$0) {
  var f2$0;
  f2$0 = (function(context$0, scope$4, expr$1) {
    var $targ$106;
    var $targ$105;
    var rval$1;
    var t0$4;
    var other$1;
    var v$1;
    var m$6$0;
    var rval$0;
    $targ$105 = false;
    rval$1 = $targ$105;
    try {
      $targ$106 = f$0(context$0, scope$4, expr$1);
      rval$1 = $targ$106;
      rval$1;
    } catch (excv$0) {
      var $targ$107;
      var e$2;
      e$2 = excv$0;
      __lt____lt____colon__$0(e$2, expr$1);
      throw e$2;
      rval$1 = $targ$107;
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
  var $targ$111;
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
  $targ$111 = $it$11.form.env;
  ($it$11["env"] = $targ$111);
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
$targ$28 = (function() {
  var m$8;
  var acc$1;
  var $targ$130;
  var temp$6;
  var xs$0;
  var t0$7;
  var t1$2;
  var x$5;
  var t0$6;
  var ph$2$0;
  var m$7$0;
  var $it$17;
  var self$14;
  $it$17 = this;
  self$14 = this;
  m$7$0 = arguments;
  t0$6 = m$7$0.length;
  if ((t0$6 >= 0)) {
    ph$2$0 = Array.prototype.slice.call(m$7$0, 0);
    t0$7 = ph$2$0;
    t1$2 = t0$7.length;
    if ((t1$2 === 1)) {
      x$5 = t0$7[0];
      return $it$17.env.mark(x$5);
    } else {
      xs$0 = ph$2$0;
      acc$1 = [];
      $targ$130 = null;
      temp$6 = $targ$130;
      m$8 = null;
      $8: for (var $__0 = xs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$8 = $__1.value;
        {
          var $targ$131;
          var x$6;
          x$6 = m$8;
          $targ$131 = $it$17.env.mark(x$6);
          temp$6 = $targ$131;
          acc$1.push(temp$6);
        }
      }
      return acc$1;
    }
  } else {
    return ___match_error(m$7$0);
  }
});
(Info$0.prototype["mark"] = $targ$28);
$targ$29 = (function(context$1, expr$2) {
  var $it$18;
  var self$15;
  $it$18 = this;
  self$15 = this;
  return $it$18.expander.step(context$1, $it$18.scope, expr$2);
});
(Info$0.prototype["step"] = $targ$29);
$targ$30 = (function(context$2, exprs$0) {
  var $it$19;
  var self$16;
  $it$19 = this;
  self$16 = this;
  return $it$19.expander.step_all(context$2, $it$19.scope, exprs$0);
});
(Info$0.prototype["step_all"] = $targ$30);
$targ$31 = (function(context$3, expr$3) {
  var $it$20;
  var self$17;
  $it$20 = this;
  self$17 = this;
  return $it$20.expander.expand(context$3, $it$20.scope, expr$3);
});
(Info$0.prototype["expand"] = $targ$31);
$targ$32 = (function(x$7, start$0, end$0) {
  var $it$21;
  var self$18;
  $it$21 = this;
  self$18 = this;
  return $it$21.expander.pipeline.go(x$7, start$0, end$0);
});
(Info$0.prototype["go"] = $targ$32);
__amp____colon__(Info$0, __amp____colon__((($targ$140 = "Info"), (accum$4 = ({})), (accum$4["::name"] = $targ$140), accum$4), (($targ$141 = true), (accum$5 = ({})), (accum$5["::egclass"] = $targ$141), accum$5)));
Expander$0 = (function(temp$7$0, temp$8$0, temp$9$0) {
  var m$9;
  var acc$2;
  var $targ$146;
  var temp$10;
  var jskw$0;
  var $targ$143;
  var $it$22;
  if ((!getChecker(Expander$0)(this))) {
    $it$22 = Object.create(Expander$0.prototype);
  } else {
    $it$22 = this;
  }
  ($it$22["stdenv"] = temp$7$0);
  ($it$22["generic_nodes"] = temp$8$0);
  ($it$22["pipeline"] = temp$9$0);
  jskw$0 = "abstract arguments boolean break byte\n                 case catch char class const\n                 continue debugger default delete do\n                 double else enum eval export\n                 extends false final finally float\n                 for function goto if implements\n                 import in instanceof int interface\n                 let long native new null\n                 package private protected public return\n                 short static super switch synchronized\n                 this throw throws transient true\n                 try typeof var void volatile\n                 while with yield";
  $targ$143 = object(((acc$2 = []), ($targ$146 = null), (temp$10 = $targ$146), (m$9 = null), (function() {
    $9: for (var $__0 = jskw$0.split(RegExp("[ \\n]+", ""))[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$9 = $__1.value;
      {
        var $targ$147;
        var kw$0;
        kw$0 = m$9;
        $targ$147 = [kw$0, 0];
        temp$10 = $targ$147;
        acc$2.push(temp$10);
      }
    }
  })(), acc$2));
  ($it$22["nameusage"] = $targ$143);
  [];
  return $it$22;
});
$targ$34 = (function(temp$11$0) {
  var t0$8;
  var idx$0;
  var $targ$153;
  var bridge$$1403$0;
  var $$1406$0;
  var name$3;
  var ph$3$0;
  var $it$23;
  var self$19;
  $it$23 = this;
  self$19 = this;
  t0$8 = temp$11$0;
  name$3 = t0$8;
  ph$3$0 = t0$8;
  bridge$$1403$0 = ph$3$0;
  if (((bridge$$1403$0 === (void 0)) || (bridge$$1403$0 === null))) {
    return $it$23.gensym("");
  } else {
    if (Object.prototype.hasOwnProperty.call($it$23.nameusage, name$3)) {
      idx$0 = ($it$23.nameusage[name$3] = (send($it$23.nameusage, name$3) + 1));
      return ((name$3 + "$") + String(idx$0));
    } else {
      $targ$153 = 0;
      ($it$23.nameusage[name$3] = $targ$153);
      [];
      return (name$3 + "$0");
    }
  }
});
(Expander$0.prototype["gensym"] = $targ$34);
$targ$35 = (function() {
  var e$3;
  var $targ$157;
  var $it$24;
  var self$20;
  $it$24 = this;
  self$20 = this;
  e$3 = Env$0();
  $targ$157 = $it$24.stdenv.scopes.top;
  (e$3.scopes["top"] = $targ$157);
  [];
  return e$3;
});
(Expander$0.prototype["mkenv"] = $targ$35);
$targ$36 = (function(m$10, context$4, scope$5, form$0, arg$1) {
  var $targ$163;
  var $targ$162;
  var rval$3;
  var info$0;
  var rval$2;
  var $it$25;
  var self$21;
  $it$25 = this;
  self$21 = this;
  info$0 = Info$0(context$4, scope$5, form$0, arg$1, $it$25);
  $targ$162 = false;
  rval$3 = $targ$162;
  try {
    $targ$163 = m$10(context$4, info$0, form$0, arg$1);
    rval$3 = $targ$163;
    rval$3;
  } catch (excv$1) {
    var t3$0;
    var t2$0;
    var t1$3;
    var msg$0;
    var msg$2;
    var find$0;
    var err$0;
    var other$2;
    var m$11$0;
    var e$4;
    var $targ$168;
    var $targ$180;
    var e$5;
    var t0$9;
    var value$2;
    t0$9 = excv$1;
    if ((getChecker(ErrorFactory(["match"]))(t0$9) && (___hasprop(t0$9, "args") && ((t1$3 = t0$9.args), ((t1$3 instanceof Array) && ((t2$0 = t1$3.length), ((t2$0 === 1) && ((t3$0 = t1$3[0]), ___hasprop(t3$0, "value"))))))))) {
      value$2 = t3$0.value;
      m$11$0 = value$2;
      if ((m$11$0 === context$4)) {
        msg$0 = "The macro cannot be found in this context.";
        e$4 = ErrorFactory(["syntax", "context"]).create(msg$0, ({
          "context": context$4,
          "form": form$0
        }));
      } else {
        other$2 = m$11$0;
        find$0 = (function(temp$12$0) {
          var t0$10;
          var msg$1;
          var m$12;
          var other$3;
          var t0$11;
          var t1$4;
          var type$1;
          var xs$1;
          var arg$2;
          var ph$4$0;
          t0$10 = temp$12$0;
          arg$2 = t0$10;
          ph$4$0 = t0$10;
          if ((ph$4$0 === value$2)) {
            msg$1 = "The macro expected something different.";
            return ErrorFactory(["syntax", "argument"]).create(msg$1, ({
              "context": context$4,
              "argument": arg$2,
              "form": form$0
            }));
          } else {
            t0$11 = ph$4$0;
            t1$4 = t0$11.length;
            if ((t1$4 >= 1)) {
              type$1 = t0$11[0];
              xs$1 = Array.prototype.slice.call(t0$11, 1);
              m$12 = null;
              $10: for (var $__0 = xs$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__1; !($__1 = $__0.next()).done; ) {
                m$12 = $__1.value;
                {
                  var t0$12;
                  var x$8;
                  t0$12 = getProjector(find$0)(m$12);
                  if (t0$12[0]) {
                    x$8 = t0$12[1];
                    if (x$8) {
                      return x$8;
                    }
                  } else {
                    ___match_error(m$12, "/home/olivier/git/earl-grey/src/expand.eg", 5397, 5482);
                  }
                }
              }
              return false;
            } else {
              other$3 = ph$4$0;
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
      rval$3 = $targ$168;
      rval$3;
    } else {
      e$5 = excv$1;
      throw e$5;
      rval$3 = $targ$180;
      rval$3;
    }
  }
  rval$2 = rval$3;
  return $it$25.mkenv().mark(rval$2);
});
(Expander$0.prototype["run_macro"] = $targ$36);
$targ$37 = (function(context$5, scope$6, expr$4) {
  var helper$0;
  var $it$26;
  var self$22;
  $it$26 = this;
  self$22 = this;
  helper$0 = track_location$0((function(context$6, scope$7, temp$13$0) {
    var t0$13;
    var other$4;
    var env$1;
    var m$14$0;
    var t0$15;
    var t0$16;
    var other$5;
    var m$16$0;
    var other$6;
    var m$15;
    var m$13$0;
    var env$0;
    var t0$17;
    var other$7;
    var m$18$0;
    var t0$18;
    var other$8;
    var m$20;
    var m$19$0;
    var t$0;
    var p$0;
    var other$9;
    var x$9;
    var code$0;
    var url$0;
    var f$1;
    var arg$3;
    var m$17;
    var t0$14;
    var t1$5;
    var s$0;
    var $$1661$0;
    var $$1662$0;
    var $$1663$0;
    var expr$5;
    var ph$5$0;
    t0$13 = temp$13$0;
    expr$5 = t0$13;
    ph$5$0 = t0$13;
    t0$14 = ph$5$0;
    t1$5 = t0$14.length;
    if ((($$1663$0 = (t1$5 === 2)) && (t0$14[0] === "symbol"))) {
      s$0 = t0$14[1];
      m$14$0 = expr$5;
      if (___hasprop(m$14$0, "env")) {
        env$1 = m$14$0.env;
        env$0 = expr$5.env;
      } else {
        other$4 = m$14$0;
        throw ErrorFactory(["syntax", "no_env"]).create((("No environment was found to resolve '" + s$0) + "'"), ({"symbol": expr$5}));
      }
      m$13$0 = env$0.resolve(scope$7, s$0);
      if (((m$13$0 instanceof Array) && ((t0$15 = m$13$0.length), ((t0$15 === 2) && (m$13$0[0] === "macro"))))) {
        m$15 = m$13$0[1];
        m$16$0 = context$6;
        if (((m$16$0 instanceof Array) && ((t0$16 = m$16$0.length), ((t0$16 === 2) && ((m$16$0[0] === "expr") && (m$16$0[1] === "head")))))) {
          return ["macro", m$15];
        } else {
          other$5 = m$16$0;
          return ["bounce", $it$26.run_macro(m$15, context$6, scope$7, expr$5, __lt____lt____colon__$0(["void"], expr$5))];
        }
      } else {
        other$6 = m$13$0;
        return expr$5;
      }
    } else {
      if (($$1663$0 && (t0$14[0] === "macro"))) {
        m$17 = t0$14[1];
        m$18$0 = context$6;
        if (((m$18$0 instanceof Array) && ((t0$17 = m$18$0.length), ((t0$17 === 2) && ((m$18$0[0] === "expr") && (m$18$0[1] === "head")))))) {
          return expr$5;
        } else {
          other$7 = m$18$0;
          return ["bounce", $it$26.run_macro(m$17, context$6, scope$7, expr$5, __lt____lt____colon__$0(["void"], expr$5))];
        }
      } else {
        if (((t1$5 === 3) && (t0$14[0] === "send"))) {
          f$1 = t0$14[1];
          arg$3 = t0$14[2];
          m$19$0 = helper$0(["expr", "head"], scope$7, f$1);
          if (((m$19$0 instanceof Array) && ((t0$18 = m$19$0.length), ((t0$18 === 2) && (m$19$0[0] === "macro"))))) {
            m$20 = m$19$0[1];
            return ["bounce", $it$26.run_macro(m$20, context$6, scope$7, expr$5, arg$3)];
          } else {
            other$8 = m$19$0;
            return expr$5;
          }
        } else {
          if ((((t1$5 >= 2) && (t1$5 <= 3)) && (t0$14[0] === "parse"))) {
            code$0 = t0$14[1];
            if ((2 >= t1$5)) {
              url$0 = null;
            } else {
              url$0 = t0$14[2];
            }
            t$0 = tokenize$0(Source$0(code$0, url$0));
            p$0 = parse$0(t$0);
            return ["bounce", helper$0(context$6, scope$7, expr$5.env.mark(p$0))];
          } else {
            if (((t1$5 === 2) && (t0$14[0] === "nostep"))) {
              x$9 = t0$14[1];
              return x$9;
            } else {
              other$9 = ph$5$0;
              return expr$5;
            }
          }
        }
      }
    }
  }));
  return helper$0(context$5, scope$6, expr$4);
});
(Expander$0.prototype["step"] = $targ$37);
$targ$38 = (function(context$7, scope$8, temp$14$0) {
  var t1$6;
  var t0$19;
  var $targ$203;
  var pre$0;
  var bulk$0;
  var $targ$205;
  var post$0;
  var stmts$0;
  var $it$27;
  var self$23;
  $it$27 = this;
  self$23 = this;
  t0$19 = temp$14$0;
  if (((t0$19 instanceof Array) && ((t1$6 = t0$19.length), (t1$6 >= 0)))) {
    stmts$0 = Array.prototype.slice.call(t0$19, 0);
  } else {
    ___match_error(temp$14$0);
  }
  $targ$203 = [];
  pre$0 = $targ$203;
  bulk$0 = [];
  $targ$205 = [];
  post$0 = $targ$205;
  $11: while (stmts$0.length) {
    var t0$20;
    var $targ$209;
    var m$23;
    var acc$3;
    var $targ$213;
    var temp$15;
    var e$6;
    var $targ$211;
    var x$10;
    var m$22;
    var stmt$1;
    var stmt$0;
    var prepend$0;
    var $$1856$0;
    var $$1857$0;
    var $$1858$0;
    var m$21$0;
    var current$0;
    current$0 = stmts$0.shift();
    m$21$0 = $it$27.step(context$7, scope$8, current$0);
    if ((($$1856$0 = (m$21$0 instanceof Array)) && ((t0$20 = m$21$0.length), ((t0$20 >= 1) && (m$21$0[0] === "splice"))))) {
      prepend$0 = Array.prototype.slice.call(m$21$0, 1);
      $targ$209 = prepend$0.concat(stmts$0);
      stmts$0 = $targ$209;
      stmts$0;
    } else {
      if (($$1856$0 && (($$1858$0 = (t0$20 === 2)) && (m$21$0[0] === "float")))) {
        stmt$0 = m$21$0[1];
        pre$0 = pre$0.concat($it$27.step_all(context$7, scope$8, [stmt$0]));
      } else {
        if (($$1858$0 && (m$21$0[0] === "sink"))) {
          stmt$1 = m$21$0[1];
          post$0 = post$0.concat($it$27.step_all(context$7, scope$8, [stmt$1]));
        } else {
          if (($$1858$0 && (m$21$0[0] === "restmacro"))) {
            m$22 = m$21$0[1];
            e$6 = $it$27.mkenv();
            acc$3 = [];
            $targ$213 = null;
            temp$15 = $targ$213;
            m$23 = null;
            $12: for (var $__0 = m$22(stmts$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$23 = $__1.value;
              {
                var $targ$214;
                var stmt$2;
                stmt$2 = m$23;
                $targ$214 = e$6.mark(stmt$2);
                temp$15 = $targ$214;
                acc$3.push(temp$15);
              }
            }
            $targ$211 = acc$3;
            stmts$0 = $targ$211;
            stmts$0;
          } else {
            x$10 = m$21$0;
            bulk$0.push(x$10);
          }
        }
      }
    }
  }
  return pre$0.concat(bulk$0).concat(post$0);
});
(Expander$0.prototype["step_all"] = $targ$38);
$targ$39 = (function(context$8, scope$9, expr$6) {
  var helper$1;
  var $it$28;
  var self$24;
  $it$28 = this;
  self$24 = this;
  helper$1 = track_location$0((function(context$9, scope$10, expr$7) {
    var t0$21;
    var t0$22;
    var other$10;
    var m$25$0;
    var $targ$221;
    var env$2;
    var m$26;
    var acc$4;
    var $targ$226;
    var temp$16;
    var newargs$0;
    var m$27;
    var acc$5;
    var $targ$230;
    var temp$17;
    var newargs$1;
    var t2$1;
    var $targ$234;
    var t0$24;
    var newscope$1;
    var env$3;
    var m$28;
    var acc$6;
    var $targ$245;
    var temp$18;
    var t0$29;
    var newscope$2;
    var stepscope$0;
    var $targ$241;
    var changes$0;
    var $targ$242;
    var newargs$2;
    var vars$0;
    var exp$0;
    var m$33;
    var t0$34;
    var other$15;
    var m$34$0;
    var $targ$282;
    var is_obj$0;
    var $targ$283;
    var obj$0;
    var $targ$284;
    var arr$0;
    var arr_parts$0;
    var obj_parts$0;
    var new_arr_part$0;
    var new_obj_part$0;
    var r$0;
    var x$13;
    var msg$3;
    var t0$35;
    var $targ$308;
    var otherwise$1;
    var m$36;
    var m$35$0;
    var t$1;
    var m$37;
    var acc$9;
    var $targ$311;
    var temp$21;
    var newscope$3;
    var $targ$320;
    var s$7;
    var newscope$4;
    var t0$37;
    var name$4;
    var $targ$322;
    var m$38;
    var acc$10;
    var $targ$324;
    var temp$22;
    var m$39;
    var acc$11;
    var $targ$329;
    var temp$23;
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
    var ph$6$0;
    var x$15;
    var bindings$1;
    var body$1;
    var generator$0;
    var target$0;
    var value$8;
    var args$6;
    var args$5;
    var args$4;
    var args$3;
    var $targ$237;
    var s$2;
    var value$3;
    var body$0;
    var args$2;
    var args$1;
    var f$2;
    var arg$4;
    var s$1;
    var $$1968$0;
    var $$1969$0;
    var $$1970$0;
    var t1$7;
    var m$24$0;
    var $targ$218;
    $targ$218 = $it$28.step(context$9, scope$10, expr$7);
    expr$7 = $targ$218;
    m$24$0 = expr$7;
    if ((($$1968$0 = (m$24$0 instanceof Array)) && ((t0$21 = m$24$0.length), (($$1970$0 = (t0$21 === 2)) && (m$24$0[0] === "symbol"))))) {
      s$1 = m$24$0[1];
      $targ$221 = expr$7;
      t0$22 = $targ$221;
      if (___hasprop(t0$22, "env")) {
        env$2 = t0$22.env;
      } else {
        ___match_error($targ$221);
      }
      m$25$0 = env$2.resolve(scope$10, s$1);
      if ((m$25$0 === (void 0))) {
        throw ErrorFactory(["syntax", "undeclared"]).create(("Undeclared variable: " + s$1), ({"node": expr$7}));
      } else {
        other$10 = m$25$0;
        return ["bounce", other$10];
      }
    } else {
      if (($$1970$0 && (m$24$0[0] === "value"))) {
        m$24$0[1];
        return expr$7;
      } else {
        if (($$1970$0 && (m$24$0[0] === "variable"))) {
          m$24$0[1];
          return expr$7;
        } else {
          if (($$1968$0 && ((t0$21 === 1) && (m$24$0[0] === "void")))) {
            return expr$7;
          } else {
            if (($$1968$0 && ((t0$21 === 3) && (m$24$0[0] === "send")))) {
              f$2 = m$24$0[1];
              arg$4 = m$24$0[2];
              return ["send", helper$1(["expr", "head"], scope$10, f$2), helper$1(["expr", "tail"], scope$10, arg$4)];
            } else {
              if (($$1968$0 && (($$1970$0 = (t0$21 >= 1)) && (m$24$0[0] === "array")))) {
                args$1 = Array.prototype.slice.call(m$24$0, 1);
                acc$4 = [];
                $targ$226 = null;
                temp$16 = $targ$226;
                m$26 = null;
                $13: for (var $__0 = $it$28.step_all(["expr", "array"], scope$10, args$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  m$26 = $__1.value;
                  {
                    var $targ$227;
                    var arg$5;
                    arg$5 = m$26;
                    $targ$227 = helper$1(["expr", "expr"], scope$10, arg$5);
                    temp$16 = $targ$227;
                    acc$4.push(temp$16);
                  }
                }
                newargs$0 = acc$4;
                return ["array"].concat(newargs$0);
              } else {
                if (($$1970$0 && (m$24$0[0] === "object"))) {
                  args$2 = Array.prototype.slice.call(m$24$0, 1);
                  acc$5 = [];
                  $targ$230 = null;
                  temp$17 = $targ$230;
                  m$27 = null;
                  $14: for (var $__2 = $it$28.step_all(["expr", "object"], scope$10, args$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
                      $__3; !($__3 = $__2.next()).done; ) {
                    m$27 = $__3.value;
                    {
                      var t1$8;
                      var $targ$233;
                      var t0$23;
                      var k$1;
                      var v$2;
                      t0$23 = m$27;
                      if (((t0$23 instanceof Array) && ((t1$8 = t0$23.length), ((t1$8 === 3) && (t0$23[0] === "array"))))) {
                        k$1 = t0$23[1];
                        v$2 = t0$23[2];
                        $targ$233 = ["array", helper$1(["expr", "expr"], scope$10, k$1), helper$1(["expr", "expr"], scope$10, v$2)];
                        temp$17 = $targ$233;
                        acc$5.push(temp$17);
                      } else {
                        ___match_error(m$27, "/home/olivier/git/earl-grey/src/expand.eg", 10897, 11086);
                      }
                    }
                  }
                  newargs$1 = acc$5;
                  return ["object"].concat(newargs$1);
                } else {
                  if (($$1968$0 && ((t0$21 === 4) && ((m$24$0[0] === "bind") && (($targ$234 = m$24$0[1]), (t1$7 = $targ$234), ($targ$237 = t1$7), ((t1$7 instanceof Array) && ((t2$1 = t1$7.length), ((t2$1 === 2) && (t1$7[0] === "symbol"))))))))) {
                    s$2 = t1$7[1];
                    value$3 = m$24$0[2];
                    body$0 = m$24$0[3];
                    newscope$1 = Scope$0(scope$10);
                    t0$24 = $targ$237;
                    if (___hasprop(t0$24, "env")) {
                      env$3 = t0$24.env;
                    } else {
                      ___match_error($targ$237);
                    }
                    env$3.bind(newscope$1, s$2, value$3);
                    return helper$1(context$9, newscope$1, body$0);
                  } else {
                    if (($$1968$0 && (($$1970$0 = (t0$21 >= 1)) && (m$24$0[0] === "splice")))) {
                      args$3 = Array.prototype.slice.call(m$24$0, 1);
                      return ["bounce", __amp____colon__(["multi"].concat(args$3), ({"override_scope": true}))];
                    } else {
                      if (($$1970$0 && (m$24$0[0] === "interactive"))) {
                        args$4 = Array.prototype.slice.call(m$24$0, 1);
                        return ["bounce", __amp____colon__(["multi"].concat(args$4), ({
                          "override_scope": true,
                          "all_mutable": true
                        }))];
                      } else {
                        if (($$1970$0 && (m$24$0[0] === "multi"))) {
                          args$5 = Array.prototype.slice.call(m$24$0, 1);
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
                          $targ$241 = false;
                          changes$0 = $targ$241;
                          $targ$242 = classify$0("newargs", "vars", ((acc$6 = []), ($targ$245 = null), (temp$18 = $targ$245), (m$28 = null), (function() {
                            $15: for (var $__4 = $it$28.step_all(["expr", "multi"], stepscope$0, args$5)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$28 = $__5.value;
                              {
                                var t1$9;
                                var $targ$248;
                                var $targ$250;
                                var $targ$249;
                                var t0$26;
                                var env$4;
                                var $targ$253;
                                var $targ$251;
                                var $targ$256;
                                var $targ$255;
                                var t0$27;
                                var v$3;
                                var $targ$261;
                                var $targ$258;
                                var env$5;
                                var $targ$257;
                                var $targ$262;
                                var $targ$264;
                                var $targ$263;
                                var $targ$266;
                                var $targ$265;
                                var t0$28;
                                var env$6;
                                var $targ$269;
                                var $targ$267;
                                var $targ$271;
                                var other$11;
                                var s$5;
                                var $targ$268;
                                var v$4;
                                var value$7;
                                var variable$2;
                                var s$4;
                                var value$6;
                                var $targ$252;
                                var s$3;
                                var value$5;
                                var t0$25;
                                var opt$2;
                                var value$4;
                                var $$2160$0;
                                var $$2161$0;
                                var $$2162$0;
                                var $$2163$0;
                                var $$2164$0;
                                var $$2165$0;
                                var t2$2;
                                var t3$1;
                                t0$25 = m$28;
                                if ((($$2161$0 = (t0$25 instanceof Array)) && ((t1$9 = t0$25.length), (($$2163$0 = (t1$9 === 3)) && (t0$25[0] === "option"))))) {
                                  opt$2 = t0$25[1];
                                  value$4 = t0$25[2];
                                  newscope$2.setopt(opt$2, value$4);
                                  $targ$248 = ["ignore"];
                                  temp$18 = $targ$248;
                                  acc$6.push(temp$18);
                                } else {
                                  if (($$2163$0 && ((t0$25[0] === "declare_raw") && (($targ$249 = t0$25[1]), (t2$2 = $targ$249), ($targ$252 = t2$2), ((t2$2 instanceof Array) && (($targ$250 = t2$2.length), (t3$1 = $targ$250), ((t3$1 === 2) && (t2$2[0] === "symbol")))))))) {
                                    s$3 = t2$2[1];
                                    value$5 = t0$25[2];
                                    t0$26 = $targ$252;
                                    if (___hasprop(t0$26, "env")) {
                                      env$4 = t0$26.env;
                                    } else {
                                      ___match_error($targ$252);
                                    }
                                    env$4.bind(newscope$2, s$3, value$5);
                                    $targ$253 = true;
                                    changes$0 = $targ$253;
                                    $targ$251 = ["ignore"];
                                    temp$18 = $targ$251;
                                    acc$6.push(temp$18);
                                  } else {
                                    if (($$2161$0 && (($$2163$0 = ((t1$9 >= 2) && (t1$9 <= 3))) && (($$2164$0 = (t0$25[0] === "declare")) && (($targ$255 = t0$25[1]), (t2$2 = $targ$255), (variable$2 = t2$2), ((t2$2 instanceof Array) && (($targ$256 = t2$2.length), (t3$1 = $targ$256), ((t3$1 === 2) && (t2$2[0] === "symbol"))))))))) {
                                      s$4 = t2$2[1];
                                      if ((2 >= t1$9)) {
                                        value$6 = null;
                                      } else {
                                        value$6 = t0$25[2];
                                      }
                                      $targ$258 = variable$2;
                                      t0$27 = $targ$258;
                                      if (___hasprop(t0$27, "env")) {
                                        env$5 = t0$27.env;
                                      } else {
                                        ___match_error($targ$258);
                                      }
                                      if ((variable$2.use_previous && env$5.resolve(newscope$2, s$4))) {
                                        $targ$257 = ["splice"];
                                      } else {
                                        v$3 = __lt____lt____colon__$0(["variable", $it$28.gensym(s$4)], variable$2);
                                        __amp____colon__(v$3, ({"mutable": (expr$7.all_mutable || variable$2.mutable)}));
                                        env$5.bind(newscope$2, s$4, v$3);
                                        $targ$261 = true;
                                        changes$0 = $targ$261;
                                        if (value$6) {
                                          $targ$257 = ["splice", ["newargs", ["assign", v$3, value$6]], ["vars", v$3]];
                                        } else {
                                          $targ$257 = ["vars", v$3];
                                        }
                                      }
                                      temp$18 = $targ$257;
                                      acc$6.push(temp$18);
                                    } else {
                                      if (($$2164$0 && ((v$4 = t2$2), ((t2$2 instanceof Array) && (($targ$262 = t2$2.length), (t3$1 = $targ$262), ((t3$1 === 2) && (t2$2[0] === "variable"))))))) {
                                        t2$2[1];
                                        if ((2 >= t1$9)) {
                                          value$7 = null;
                                        } else {
                                          value$7 = t0$25[2];
                                        }
                                        $targ$264 = true;
                                        changes$0 = $targ$264;
                                        if (value$7) {
                                          $targ$263 = ["splice", ["newargs", ["assign", v$4, value$7]], ["vars", v$4]];
                                        } else {
                                          $targ$263 = ["vars", v$4];
                                        }
                                        temp$18 = $targ$263;
                                        acc$6.push(temp$18);
                                      } else {
                                        if (($$2161$0 && ((t1$9 === 2) && ((t0$25[0] === "undeclare") && (($targ$265 = t0$25[1]), (t2$2 = $targ$265), ((t2$2 instanceof Array) && (($targ$266 = t2$2.length), (t3$1 = $targ$266), ((t3$1 === 2) && (t2$2[0] === "symbol"))))))))) {
                                          s$5 = t2$2[1];
                                          $targ$268 = t2$2;
                                          t0$28 = $targ$268;
                                          if (___hasprop(t0$28, "env")) {
                                            env$6 = t0$28.env;
                                          } else {
                                            ___match_error($targ$268);
                                          }
                                          env$6.bind(newscope$2, s$5, undefined);
                                          $targ$269 = true;
                                          changes$0 = $targ$269;
                                          $targ$267 = ["ignore"];
                                          temp$18 = $targ$267;
                                          acc$6.push(temp$18);
                                        } else {
                                          other$11 = m$28;
                                          $targ$271 = ["newargs", other$11];
                                          temp$18 = $targ$271;
                                          acc$6.push(temp$18);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          })(), acc$6));
                          t0$29 = $targ$242;
                          if ((___hasprop(t0$29, "newargs") && ((newargs$2 = t0$29.newargs), ___hasprop(t0$29, "vars")))) {
                            vars$0 = t0$29.vars;
                          } else {
                            ___match_error($targ$242);
                          }
                          [newargs$2, vars$0];
                          exp$0 = (function(s$6) {
                            var m$29;
                            var acc$7;
                            var $targ$275;
                            var temp$19;
                            var m$30;
                            var acc$8;
                            var $targ$280;
                            var temp$20;
                            var stepped$0;
                            acc$7 = [];
                            $targ$275 = null;
                            temp$19 = $targ$275;
                            m$29 = null;
                            $17: for (var $__4 = enumerate(newargs$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$29 = $__5.value;
                              {
                                var t1$10;
                                var $targ$278;
                                var t0$30;
                                var i$0;
                                var arg$6;
                                t0$30 = m$29;
                                if (((t0$30 instanceof Array) && ((t1$10 = t0$30.length), (t1$10 === 2)))) {
                                  i$0 = t0$30[0];
                                  arg$6 = t0$30[1];
                                  $targ$278 = $it$28.step(["expr", ((i$0 === (newargs$2.length - 1)) ? "expr" : "ignore")], s$6, arg$6);
                                  temp$19 = $targ$278;
                                  acc$7.push(temp$19);
                                } else {
                                  ___match_error(m$29, "/home/olivier/git/earl-grey/src/expand.eg", 14218, 14395);
                                }
                              }
                            }
                            stepped$0 = acc$7;
                            acc$8 = [];
                            $targ$280 = null;
                            temp$20 = $targ$280;
                            m$30 = null;
                            $16: for (var $__6 = stepped$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__7; !($__7 = $__6.next()).done; ) {
                              m$30 = $__7.value;
                              {
                                var $targ$281;
                                var arg$7;
                                arg$7 = m$30;
                                $targ$281 = helper$1(["expr", "expr"], s$6, arg$7);
                                temp$20 = $targ$281;
                                acc$8.push(temp$20);
                              }
                            }
                            return acc$8;
                          });
                          if (changes$0) {
                            return ["scope", vars$0, ["multi"].concat(exp$0(newscope$2))];
                          } else {
                            return ["multi"].concat(exp$0(scope$10));
                          }
                        } else {
                          if (($$1970$0 && (m$24$0[0] === "data"))) {
                            args$6 = Array.prototype.slice.call(m$24$0, 1);
                            $targ$282 = false;
                            is_obj$0 = $targ$282;
                            $targ$283 = ["object"];
                            obj$0 = $targ$283;
                            $targ$284 = ["array"];
                            arr$0 = $targ$284;
                            arr_parts$0 = [];
                            obj_parts$0 = [];
                            new_arr_part$0 = (function() {
                              var t0$31;
                              var $targ$292;
                              var other$12;
                              var m$31$0;
                              m$31$0 = arr$0;
                              if (((m$31$0 instanceof Array) && ((t0$31 = m$31$0.length), ((t0$31 === 1) && (m$31$0[0] === "array"))))) {
                                return false;
                              } else {
                                other$12 = m$31$0;
                                arr_parts$0.push(arr$0);
                                $targ$292 = ["array"];
                                arr$0 = $targ$292;
                                return arr$0;
                              }
                            });
                            new_obj_part$0 = (function() {
                              var t0$32;
                              var $targ$295;
                              var other$13;
                              var m$32$0;
                              m$32$0 = obj$0;
                              if (((m$32$0 instanceof Array) && ((t0$32 = m$32$0.length), ((t0$32 === 1) && (m$32$0[0] === "object"))))) {
                                return false;
                              } else {
                                other$13 = m$32$0;
                                obj_parts$0.push(obj$0);
                                $targ$295 = ["object"];
                                obj$0 = $targ$295;
                                return obj$0;
                              }
                            });
                            m$33 = null;
                            $18: for (var $__4 = $it$28.step_all(["expr", "data"], scope$10, args$6)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$33 = $__5.value;
                              {
                                var t1$11;
                                var $targ$298;
                                var $targ$299;
                                var $targ$300;
                                var other$14;
                                var expr$9;
                                var expr$8;
                                var k$2;
                                var v$5;
                                var t0$33;
                                var $$2431$0;
                                var $$2432$0;
                                var $$2433$0;
                                var $$2434$0;
                                t0$33 = m$33;
                                if ((($$2432$0 = (t0$33 instanceof Array)) && ((t1$11 = t0$33.length), ((t1$11 === 1) && (t0$33[0] === "assoc"))))) {
                                  $targ$298 = true;
                                  is_obj$0 = $targ$298;
                                  is_obj$0;
                                } else {
                                  if (($$2432$0 && ((t1$11 === 3) && (t0$33[0] === "assoc")))) {
                                    k$2 = t0$33[1];
                                    v$5 = t0$33[2];
                                    $targ$299 = true;
                                    is_obj$0 = $targ$299;
                                    obj$0.push(["array", k$2, v$5]);
                                  } else {
                                    if (($$2432$0 && (($$2434$0 = (t1$11 === 2)) && (t0$33[0] === "dynsplice")))) {
                                      expr$8 = t0$33[1];
                                      new_arr_part$0();
                                      arr_parts$0.push(expr$8);
                                    } else {
                                      if (($$2434$0 && (t0$33[0] === "objsplice"))) {
                                        expr$9 = t0$33[1];
                                        $targ$300 = true;
                                        is_obj$0 = $targ$300;
                                        new_obj_part$0();
                                        obj_parts$0.push(expr$9);
                                      } else {
                                        other$14 = m$33;
                                        arr$0.push(other$14);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            new_arr_part$0();
                            new_obj_part$0();
                            m$34$0 = arr_parts$0;
                            if (((m$34$0 instanceof Array) && ((t0$34 = m$34$0.length), ((t0$34 === 0) && is_obj$0)))) {
                              r$0 = util$0.construct(obj_parts$0, (function(x$11, rest$0) {
                                return ["send", ["symbol", "&:"], ["data", x$11, rest$0]];
                              }), ["object"]);
                            } else {
                              if (is_obj$0) {
                                throw ErrorFactory(["syntax", "array", "object"]).create("Cannot mix array and object notations.");
                              } else {
                                other$15 = m$34$0;
                                r$0 = util$0.construct(arr_parts$0.reverse(), (function(x$12, rest$1) {
                                  return ["send", ["send", rest$1, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", x$12]];
                                }), ["array"]);
                              }
                            }
                            return helper$1(context$9, scope$10, $it$28.mkenv().mark(r$0));
                          } else {
                            if (($$1968$0 && ((t0$21 === 3) && (m$24$0[0] === "assign")))) {
                              target$0 = m$24$0[1];
                              value$8 = m$24$0[2];
                              t$1 = helper$1(["expr", "expr"], scope$10, target$0);
                              m$35$0 = t$1;
                              if ((((x$13 = m$35$0), ((x$13 instanceof Array) && (x$13[0] === "variable"))) && (((!t$1.mutable) && t$1.assigned) && (t$1.assigned.group_id !== target$0.group_id)))) {
                                msg$3 = ["Variable was declared as read-only. Declare it as", "mutable at the origin with `var` (if you have access", "to the declaration) or declare a new variable with", "`let` or `var` or remove the original binding with", "`delete`"].join(" ");
                                throw ErrorFactory(["syntax"]).create(msg$3, ({
                                  "variable": target$0,
                                  "loc": t$1.assigned
                                }));
                              } else {
                                if (((m$35$0 instanceof Array) && ((t0$35 = m$35$0.length), ((t0$35 === 2) && (m$35$0[0] === "macro"))))) {
                                  m$36 = m$35$0[1];
                                  ["bounce", m$36(["assign"], scope$10, expr$7, value$8)];
                                } else {
                                  otherwise$1 = m$35$0;
                                  $targ$308 = target$0;
                                  (t$1["assigned"] = $targ$308);
                                  [];
                                }
                              }
                              return ["assign", t$1, helper$1(["expr", "expr"], scope$10, value$8)];
                            } else {
                              if (($$1968$0 && ((t0$21 === 4) && (m$24$0[0] === "lambda")))) {
                                bindings$1 = m$24$0[1];
                                body$1 = m$24$0[2];
                                generator$0 = m$24$0[3];
                                newscope$3 = Scope$0(scope$10);
                                return ["lambda", ((acc$9 = []), ($targ$311 = null), (temp$21 = $targ$311), (m$37 = null), (function() {
                                  $19: for (var $__6 = bindings$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                                      $__7; !($__7 = $__6.next()).done; ) {
                                    m$37 = $__7.value;
                                    {
                                      var t1$12;
                                      var v$6;
                                      var $targ$314;
                                      var x$14;
                                      var $targ$317;
                                      var $targ$318;
                                      var other$16;
                                      var v$7;
                                      var t0$36;
                                      var b$0;
                                      var env$7;
                                      var $$2643$0;
                                      t0$36 = m$37;
                                      if (((t0$36 instanceof Array) && ((t1$12 = t0$36.length), ((t1$12 === 2) && ((t0$36[0] === "symbol") && ((b$0 = t0$36[1]), ___hasprop(t0$36, "env"))))))) {
                                        env$7 = t0$36.env;
                                        v$6 = ["variable", $it$28.gensym(b$0)];
                                        env$7.bind(newscope$3, b$0, v$6);
                                        $targ$314 = v$6;
                                        temp$21 = $targ$314;
                                        acc$9.push(temp$21);
                                      } else {
                                        if (((x$14 = t0$36), ((x$14 instanceof Array) && (x$14[0] === "variable")))) {
                                          v$7 = t0$36;
                                          $targ$317 = v$7;
                                          temp$21 = $targ$317;
                                          acc$9.push(temp$21);
                                        } else {
                                          other$16 = m$37;
                                          throw ErrorFactory(["syntax", "lambda", "binding"]).create("Not a valid binding.", ({"node": other$16}));
                                          temp$21 = $targ$318;
                                          acc$9.push(temp$21);
                                        }
                                      }
                                    }
                                  }
                                })(), acc$9), helper$1(["expr", "expr"], newscope$3, body$1), generator$0];
                              } else {
                                if (($$1968$0 && (($$1970$0 = (t0$21 === 3)) && (m$24$0[0] === "use")))) {
                                  ph$6$0 = m$24$0[1];
                                  x$15 = m$24$0[2];
                                  t0$37 = ph$6$0;
                                  if ((typeof(t0$37) === "string")) {
                                    name$4 = t0$37;
                                    $targ$320 = scope$10;
                                    s$7 = $targ$320;
                                    $20: while (s$7) {
                                      var $targ$321;
                                      if ((s$7.name.slice(0, (name$4.length + 1)) === (name$4 + "/"))) {
                                        break $20;
                                      } else {
                                        $targ$321 = s$7.parent;
                                        s$7 = $targ$321;
                                        s$7;
                                      }
                                    }
                                    if (s$7) {
                                      return helper$1(context$9, s$7, x$15);
                                    } else {
                                      throw ErrorFactory(["syntax", "noscope"]).create(("Could not find a scope tagged: " + name$4));
                                    }
                                  } else {
                                    newscope$4 = ph$6$0;
                                    return helper$1(context$9, newscope$4, x$15);
                                  }
                                } else {
                                  if (($$1970$0 && ((m$24$0[0] === "tagscope") && (($targ$322 = m$24$0[1]), (t1$7 = $targ$322), (typeof(t1$7) === "string"))))) {
                                    tag$0 = t1$7;
                                    body$2 = m$24$0[2];
                                    return helper$1(context$9, Scope$0(scope$10, $it$28.gensym((tag$0 + "/"))), body$2);
                                  } else {
                                    if (($$1968$0 && ((t0$21 >= 1) && ((type$2 = m$24$0[0]), (args$7 = Array.prototype.slice.call(m$24$0, 1)), ($it$28.generic_nodes.indexOf(type$2) !== -1))))) {
                                      return [type$2].concat(((acc$10 = []), ($targ$324 = null), (temp$22 = $targ$324), (m$38 = null), (function() {
                                        $21: for (var $__6 = args$7[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__7; !($__7 = $__6.next()).done; ) {
                                          m$38 = $__7.value;
                                          {
                                            var $targ$325;
                                            var arg$8;
                                            arg$8 = m$38;
                                            $targ$325 = helper$1(["expr", "expr"], scope$10, arg$8);
                                            temp$22 = $targ$325;
                                            acc$10.push(temp$22);
                                          }
                                        }
                                      })(), acc$10));
                                    } else {
                                      if (($$1968$0 && ((t0$21 >= 2) && (m$24$0[0] === "mismix")))) {
                                        ops$0 = m$24$0[1];
                                        args$8 = Array.prototype.slice.call(m$24$0, 2);
                                        tokens$0 = object(((acc$11 = []), ($targ$329 = null), (temp$23 = $targ$329), (m$39 = null), (function() {
                                          $22: for (var $__6 = enumerate(ops$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                              $__7; !($__7 = $__6.next()).done; ) {
                                            m$39 = $__7.value;
                                            {
                                              var t1$13;
                                              var $targ$332;
                                              var t0$38;
                                              var i$1;
                                              var op$0;
                                              t0$38 = m$39;
                                              if (((t0$38 instanceof Array) && ((t1$13 = t0$38.length), (t1$13 === 2)))) {
                                                i$1 = t0$38[0];
                                                op$0 = t0$38[1];
                                                $targ$332 = [("token" + String((i$1 + 1))), op$0];
                                                temp$23 = $targ$332;
                                                acc$11.push(temp$23);
                                              } else {
                                                ___match_error(m$39, "/home/olivier/git/earl-grey/src/expand.eg", 19440, 19540);
                                              }
                                            }
                                          }
                                        })(), acc$11));
                                        msg$4 = "These operators or brackets cannot be mixed together.";
                                        throw ErrorFactory(["syntax", "mismatch"]).create(msg$4, tokens$0);
                                      } else {
                                        if (($$1968$0 && ((t0$21 === 2) && (m$24$0[0] === "char")))) {
                                          c$0 = m$24$0[1];
                                          throw ErrorFactory(["syntax", "illegal_character"]).create(("An illegal character was found: " + c$0), ({"node": expr$7}));
                                        } else {
                                          other$17 = m$24$0;
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
(Expander$0.prototype["expand"] = $targ$39);
__amp____colon__(Expander$0, __amp____colon__((($targ$333 = "Expander"), (accum$6 = ({})), (accum$6["::name"] = $targ$333), accum$6), (($targ$334 = true), (accum$7 = ({})), (accum$7["::egclass"] = $targ$334), accum$7)));
mac1$0 = (function(f$3) {
  return ["macro", (function(context$10, scope$11, form$1, temp$24$0) {
    var t1$14;
    var t0$39;
    var expr$10;
    t0$39 = temp$24$0;
    if (((t0$39 instanceof Array) && ((t1$14 = t0$39.length), ((t1$14 === 2) && (t0$39[0] === "data"))))) {
      expr$10 = t0$39[1];
    } else {
      ___match_error(temp$24$0);
    }
    return f$3(expr$10);
  })];
});
__chk_ncache$0 = ({});
__chk_scache$0 = ({});
checker_db$0 = (function(ph$7$0) {
  var v$8;
  var $targ$339;
  var v$9;
  var $targ$341;
  var s$8;
  var t0$40;
  var n$0;
  var $$2868$0;
  if ((ph$7$0 === null)) {
    return checker_db$0.null;
  } else {
    if ((ph$7$0 === (void 0))) {
      return checker_db$0.undefined;
    } else {
      if ((ph$7$0 === true)) {
        return checker_db$0.true;
      } else {
        if ((ph$7$0 === false)) {
          return checker_db$0.false;
        } else {
          t0$40 = ph$7$0;
          if ((typeof(t0$40) === "number")) {
            n$0 = t0$40;
            if (send(__chk_ncache$0, n$0)) {
              return send(__chk_ncache$0, n$0);
            } else {
              v$8 = mac1$0((function(x$16) {
                return ["send", ["symbol", "==="], ["data", x$16, ["value", n$0]]];
              }));
              $targ$339 = v$8;
              (__chk_ncache$0[n$0] = $targ$339);
              [];
              return v$8;
            }
          } else {
            if ((typeof(t0$40) === "string")) {
              s$8 = t0$40;
              if (Object.prototype.hasOwnProperty.call(__chk_scache$0, s$8)) {
                return send(__chk_scache$0, s$8);
              } else {
                v$9 = mac1$0((function(x$17) {
                  return ["send", ["symbol", "==="], ["data", x$17, ["value", s$8]]];
                }));
                $targ$341 = v$9;
                (__chk_scache$0[s$8] = $targ$341);
                [];
                return v$9;
              }
            } else {
              return ___match_error(ph$7$0);
            }
          }
        }
      }
    }
  }
});
__amp____colon__(checker_db$0, ({
  "String": mac1$0((function(x$18) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$18]], ["value", "string"]]];
  })),
  "Number": mac1$0((function(x$19) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$19]], ["value", "number"]]];
  })),
  "Array": mac1$0((function(x$20) {
    return ["send", ["symbol", "instanceof"], ["data", x$20, ["symbol", "Array"]]];
  })),
  "true": mac1$0((function(x$21) {
    return x$21;
  })),
  "false": mac1$0((function(x$22) {
    return ["send", ["symbol", "not"], ["data", ["void"], x$22]];
  })),
  "null": mac1$0((function(x$23) {
    return ["send", ["symbol", "==="], ["data", x$23, ["value", null]]];
  })),
  "undefined": mac1$0((function(x$24) {
    return ["send", ["symbol", "==="], ["data", x$24, ["value", undefined]]];
  }))
}));
topscope$0 = Scope$0(null, "top");
$targ$342 = Env$0;
(exports["Env"] = $targ$342);
[];
$targ$343 = Scope$0;
(exports["Scope"] = $targ$343);
[];
$targ$344 = Info$0;
(exports["Info"] = $targ$344);
[];
$targ$345 = track_location$0;
(exports["track_location"] = $targ$345);
[];
$targ$346 = Expander$0;
(exports["Expander"] = $targ$346);
[];
$targ$347 = GenSym$0;
(exports["GenSym"] = $targ$347);
[];
$targ$348 = gensym$0;
(exports["gensym"] = $targ$348);
[];
$targ$349 = mac1$0;
(exports["mac1"] = $targ$349);
[];
$targ$350 = checker_db$0;
(exports["checker_db"] = $targ$350);
[];
$targ$351 = topscope$0;
(exports["topscope"] = $targ$351);
[];
//# sourceURL=<compile-source>
