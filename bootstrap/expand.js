"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var accum$0;
var accum$1;
var accum$2;
var accum$3;
var accum$4;
var accum$5;
var accum$6;
var accum$7;
var $targ$20;
var $targ$21;
var $targ$22;
var $targ$23;
var $targ$24;
var $targ$25;
var $targ$26;
var $targ$27;
var $targ$28;
var $targ$29;
var $targ$30;
var $0$0;
var transferLocation$0;
var Source$0;
var util$0;
var classify$0;
var GenSym$0;
var gensym$0;
var $2$0;
var tokenize$0;
var $3$0;
var parse$0;
var __lt____lt____colon__$0;
var jsKeywords$0;
var Scope$0;
var Env$0;
var track_location$0;
var Info$0;
var Expander$0;
var mac1$0;
var __chk_ncache$0;
var __chk_scache$0;
var checker_db$0;
var topscope$0;
$0$0 = require("./location");
transferLocation$0 = $0$0["<<:"];
Source$0 = $0$0.Source;
util$0 = require("./util");
classify$0 = util$0.classify;
GenSym$0 = util$0.GenSym;
gensym$0 = util$0.gensym;
$2$0 = require("./lex");
tokenize$0 = $2$0.tokenize;
$3$0 = require("./parse");
parse$0 = $3$0.parse;
__lt____lt____colon__$0 = (function(a$0, b$0) {
  transferLocation$0(a$0, b$0);
  return __amp____colon__(a$0, ({"name": b$0.name}));
});
jsKeywords$0 = "abstract arguments boolean break byte\n              case catch char class const\n              continue debugger default delete do\n              double else enum eval export\n              extends false final finally float\n              for function goto if implements\n              import in instanceof int interface\n              let long native new null\n              package private protected public return\n              short static super switch synchronized\n              this throw throws transient true\n              try typeof var void volatile\n              while with yield".split(RegExp("[ \\n]+", ""));
Scope$0 = (function Scope() {
  var $targ$0;
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
    $targ$0 = ({});
    ($it$0["options"] = $targ$0);
    [];
  } else {
    ___match_error(m$0$0);
  }
  return $it$0;
});
(Scope$0.prototype["getopt"] = (function getopt(opt$0) {
  var otherwise$0;
  var $$794$0;
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
}));
(Scope$0.prototype["setopt"] = (function setopt(opt$1, value$0) {
  var $targ$1;
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  $targ$1 = value$0;
  ($it$2.options[opt$1] = $targ$1);
  return [];
}));
(Scope$0.prototype["toString"] = (function toString() {
  var $it$3;
  var self$2;
  $it$3 = this;
  self$2 = this;
  return (("Scope{" + $it$3.name) + "}");
}));
__amp____colon__(Scope$0, __amp____colon__(((accum$0 = ({})), (accum$0["::name"] = "Scope"), accum$0), ((accum$1 = ({})), (accum$1["::egclass"] = true), accum$1)));
Env$0 = (function Env() {
  var $targ$2;
  var $it$4;
  if ((!getChecker(Env$0)(this))) {
    $it$4 = Object.create(Env$0.prototype);
  } else {
    $it$4 = this;
  }
  $targ$2 = ({});
  ($it$4["scopes"] = $targ$2);
  [];
  return $it$4;
});
(Env$0.prototype["list_bindings"] = (function list_bindings(origin$0) {
  var values$0;
  var scope$0;
  var $it$5;
  var self$3;
  $it$5 = this;
  self$3 = this;
  values$0 = ({});
  scope$0 = origin$0;
  $4: while (scope$0) {
    __amp____colon__(values$0, send($it$5.scopes, scope$0.name));
    scope$0 = scope$0.parent;
    scope$0;
  }
  return values$0;
}));
(Env$0.prototype["resolve"] = (function resolve(scope$1, name$0) {
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
}));
(Env$0.prototype["bind"] = (function bind(scope$2, name$1, value$1) {
  var $targ$4;
  var $targ$3;
  var $it$7;
  var self$5;
  $it$7 = this;
  self$5 = this;
  if ((!send($it$7.scopes, scope$2.name))) {
    $targ$4 = ({});
    ($it$7.scopes[scope$2.name] = $targ$4);
    [];
  }
  $targ$3 = value$1;
  (send($it$7.scopes, scope$2.name)[name$1] = $targ$3);
  return [];
}));
(Env$0.prototype["mark"] = (function mark(expr$0) {
  var x$0;
  var x$1;
  var bridge$$959$0;
  var x$2;
  var bridge$$958$0;
  var x$3;
  var bridge$$957$0;
  var x$4;
  var m$3;
  var other$0;
  var type$0;
  var args$0;
  var e$0;
  var bridge$$956$0;
  var t0$1;
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
    bridge$$956$0 = m$2$0;
    if ((((bridge$$957$0 = bridge$$956$0), (((bridge$$958$0 = bridge$$957$0), (((bridge$$959$0 = bridge$$958$0), (((x$0 = bridge$$959$0), ((x$0 instanceof Array) && (x$0[0] === "symbol"))) || ((x$1 = bridge$$959$0), ((x$1 instanceof Array) && (x$1[0] === "value"))))) || ((x$2 = bridge$$958$0), ((x$2 instanceof Array) && (x$2[0] === "variable"))))) || ((x$3 = bridge$$957$0), ((x$3 instanceof Array) && (x$3[0] === "macro"))))) || ((x$4 = bridge$$956$0), ((x$4 instanceof Array) && (x$4[0] === "void"))))) {
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
}));
(Env$0.prototype["fork"] = (function fork() {
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
      var m$5;
      var acc$0;
      var temp$0;
      var scope$3;
      var bindings$0;
      var t0$2;
      var t1$0;
      t0$2 = m$4;
      if (((t0$2 instanceof Array) && ((t1$0 = t0$2.length), (t1$0 === 2)))) {
        scope$3 = t0$2[0];
        bindings$0 = t0$2[1];
        acc$0 = [];
        temp$0 = null;
        m$5 = null;
        $7: for (var $__0 = items(bindings$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$5 = $__1.value;
          {
            var $targ$6;
            var $targ$5;
            var k$0;
            var v$0;
            var t0$3;
            var t1$1;
            t0$3 = m$5;
            if (((t0$3 instanceof Array) && ((t1$1 = t0$3.length), (t1$1 === 2)))) {
              k$0 = t0$3[0];
              v$0 = t0$3[1];
              if ((!send(e$1.scopes, scope$3))) {
                $targ$6 = ({});
                (e$1.scopes[scope$3] = $targ$6);
                [];
              }
              $targ$5 = v$0;
              (send(e$1.scopes, scope$3)[k$0] = $targ$5);
              temp$0 = [];
              acc$0.push(temp$0);
            } else {
              ___match_error(m$5, "/home/olivier/git/earl-grey/src/expand.eg", 2820, 2967);
            }
          }
        }
        acc$0;
      } else {
        ___match_error(m$4, "/home/olivier/git/earl-grey/src/expand.eg", 2770, 2967);
      }
    }
  }
  return e$1;
}));
(Env$0.prototype["toString"] = (function toString() {
  var $it$10;
  var self$8;
  $it$10 = this;
  self$8 = this;
  return "Env{...}";
}));
__amp____colon__(Env$0, __amp____colon__(((accum$2 = ({})), (accum$2["::name"] = "Env"), accum$2), ((accum$3 = ({})), (accum$3["::egclass"] = true), accum$3)));
track_location$0 = (function track_location(f$0) {
  var f2$0;
  f2$0 = (function f2(context$0, scope$4, expr$1) {
    var rval$1;
    var other$1;
    var v$1;
    var t0$4;
    var m$6$0;
    var rval$0;
    rval$1 = false;
    try {
      rval$1 = f$0(context$0, scope$4, expr$1);
      rval$1;
    } catch (excv$0) {
      var e$2;
      e$2 = excv$0;
      __lt____lt____colon__$0(e$2, expr$1);
      throw e$2;
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
Info$0 = (function Info(temp$1$0, temp$2$0, temp$3$0, temp$4$0, temp$5$0) {
  var $targ$7;
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
  $targ$7 = $it$11.form.env;
  ($it$11["env"] = $targ$7);
  [];
  return $it$11;
});
(Info$0.prototype["gettext"] = (function gettext(ph$0$0) {
  var location$0;
  var t0$5;
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
}));
(Info$0.prototype["with_scope"] = (function with_scope(newscope$0) {
  var $it$13;
  var self$10;
  $it$13 = this;
  self$10 = this;
  return Info$0($it$13.context, newscope$0, $it$13.form, $it$13.arg, $it$13.expander);
}));
(Info$0.prototype["gensym"] = (function gensym(name$2) {
  var $it$14;
  var self$11;
  $it$14 = this;
  self$11 = this;
  return $it$14.expander.gensym((name$2 || ""));
}));
(Info$0.prototype["defer"] = (function defer() {
  var $it$15;
  var self$12;
  $it$15 = this;
  self$12 = this;
  return ["nostep", $it$15.form];
}));
(Info$0.prototype["mkenv"] = (function mkenv() {
  var $it$16;
  var self$13;
  $it$16 = this;
  self$13 = this;
  return $it$16.expander.mkenv();
}));
(Info$0.prototype["mark"] = (function mark() {
  var m$8;
  var acc$1;
  var temp$6;
  var xs$0;
  var x$5;
  var t0$7;
  var t1$2;
  var ph$2$0;
  var t0$6;
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
      temp$6 = null;
      m$8 = null;
      $8: for (var $__0 = xs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$8 = $__1.value;
        {
          var x$6;
          x$6 = m$8;
          temp$6 = $it$17.env.mark(x$6);
          acc$1.push(temp$6);
        }
      }
      return acc$1;
    }
  } else {
    return ___match_error(m$7$0);
  }
}));
(Info$0.prototype["step"] = (function step(context$1, expr$2) {
  var $it$18;
  var self$15;
  $it$18 = this;
  self$15 = this;
  return $it$18.expander.step(context$1, $it$18.scope, expr$2);
}));
(Info$0.prototype["step_all"] = (function step_all(context$2, exprs$0) {
  var $it$19;
  var self$16;
  $it$19 = this;
  self$16 = this;
  return $it$19.expander.step_all(context$2, $it$19.scope, exprs$0);
}));
(Info$0.prototype["expand"] = (function expand(context$3, expr$3) {
  var $it$20;
  var self$17;
  $it$20 = this;
  self$17 = this;
  return $it$20.expander.expand(context$3, $it$20.scope, expr$3);
}));
(Info$0.prototype["go"] = (function go(x$7, start$0, end$0) {
  var $it$21;
  var self$18;
  $it$21 = this;
  self$18 = this;
  return $it$21.expander.pipeline.go(x$7, start$0, end$0);
}));
__amp____colon__(Info$0, __amp____colon__(((accum$4 = ({})), (accum$4["::name"] = "Info"), accum$4), ((accum$5 = ({})), (accum$5["::egclass"] = true), accum$5)));
Expander$0 = (function Expander(temp$7$0, temp$8$0, temp$9$0) {
  var m$9;
  var acc$2;
  var temp$10;
  var $targ$8;
  var $it$22;
  if ((!getChecker(Expander$0)(this))) {
    $it$22 = Object.create(Expander$0.prototype);
  } else {
    $it$22 = this;
  }
  ($it$22["stdenv"] = temp$7$0);
  ($it$22["generic_nodes"] = temp$8$0);
  ($it$22["pipeline"] = temp$9$0);
  $targ$8 = object(((acc$2 = []), (temp$10 = null), (m$9 = null), (function() {
    $9: for (var $__0 = jsKeywords$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$9 = $__1.value;
      {
        var kw$0;
        kw$0 = m$9;
        temp$10 = [kw$0, 0];
        acc$2.push(temp$10);
      }
    }
  })(), acc$2));
  ($it$22["nameusage"] = $targ$8);
  [];
  return $it$22;
});
(Expander$0.prototype["gensym"] = (function gensym(temp$11$0) {
  var t0$8;
  var idx$0;
  var $targ$9;
  var $$1519$0;
  var bridge$$1516$0;
  var name$3;
  var ph$3$0;
  var $it$23;
  var self$19;
  $it$23 = this;
  self$19 = this;
  t0$8 = temp$11$0;
  name$3 = t0$8;
  ph$3$0 = t0$8;
  bridge$$1516$0 = ph$3$0;
  if (((bridge$$1516$0 === (void 0)) || (bridge$$1516$0 === null))) {
    return $it$23.gensym("");
  } else {
    if (Object.prototype.hasOwnProperty.call($it$23.nameusage, name$3)) {
      idx$0 = ($it$23.nameusage[name$3] = (send($it$23.nameusage, name$3) + 1));
      return ((name$3 + "$") + String(idx$0));
    } else {
      $targ$9 = 0;
      ($it$23.nameusage[name$3] = $targ$9);
      [];
      return (name$3 + "$0");
    }
  }
}));
(Expander$0.prototype["mkenv"] = (function mkenv() {
  var e$3;
  var $targ$10;
  var $it$24;
  var self$20;
  $it$24 = this;
  self$20 = this;
  e$3 = Env$0();
  $targ$10 = $it$24.stdenv.scopes.top;
  (e$3.scopes["top"] = $targ$10);
  [];
  return e$3;
}));
(Expander$0.prototype["run_macro"] = (function run_macro(m$10, context$4, scope$5, form$0, arg$1) {
  var rval$3;
  var info$0;
  var rval$2;
  var $it$25;
  var self$21;
  $it$25 = this;
  self$21 = this;
  info$0 = Info$0(context$4, scope$5, form$0, arg$1, $it$25);
  rval$3 = false;
  try {
    rval$3 = m$10(context$4, info$0, form$0, arg$1);
    rval$3;
  } catch (excv$1) {
    var msg$0;
    var msg$2;
    var find$0;
    var err$0;
    var other$2;
    var m$11$0;
    var e$4;
    var e$5;
    var value$2;
    var t0$9;
    var t1$3;
    var t2$0;
    var t3$0;
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
        find$0 = (function find(temp$12$0) {
          var t0$10;
          var msg$1;
          var m$12;
          var other$3;
          var type$1;
          var xs$1;
          var t0$11;
          var t1$4;
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
                  var x$8;
                  var t0$12;
                  t0$12 = getProjector(find$0)(m$12);
                  if (t0$12[0]) {
                    x$8 = t0$12[1];
                    if (x$8) {
                      return x$8;
                    }
                  } else {
                    ___match_error(m$12, "/home/olivier/git/earl-grey/src/expand.eg", 5457, 5542);
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
      rval$3;
    } else {
      e$5 = excv$1;
      throw e$5;
      rval$3;
    }
  }
  rval$2 = rval$3;
  return $it$25.mkenv().mark(rval$2);
}));
(Expander$0.prototype["step"] = (function step(context$5, scope$6, expr$4) {
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
    var other$5;
    var t0$16;
    var m$16$0;
    var other$6;
    var m$15;
    var t0$15;
    var m$13$0;
    var env$0;
    var other$7;
    var t0$17;
    var m$18$0;
    var other$8;
    var m$20;
    var t0$18;
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
    var s$0;
    var $$1776$0;
    var $$1777$0;
    var $$1778$0;
    var t0$14;
    var t1$5;
    var expr$5;
    var ph$5$0;
    t0$13 = temp$13$0;
    expr$5 = t0$13;
    ph$5$0 = t0$13;
    t0$14 = ph$5$0;
    t1$5 = t0$14.length;
    if ((($$1778$0 = (t1$5 === 2)) && (t0$14[0] === "symbol"))) {
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
      if (($$1778$0 && (t0$14[0] === "macro"))) {
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
}));
(Expander$0.prototype["step_all"] = (function step_all(context$7, scope$8, temp$14$0) {
  var t0$19;
  var t1$6;
  var pre$0;
  var bulk$0;
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
  pre$0 = [];
  bulk$0 = [];
  post$0 = [];
  $11: while (stmts$0.length) {
    var m$23;
    var acc$3;
    var temp$15;
    var e$6;
    var x$10;
    var m$22;
    var stmt$1;
    var stmt$0;
    var prepend$0;
    var $$1969$0;
    var $$1970$0;
    var $$1971$0;
    var t0$20;
    var m$21$0;
    var current$0;
    current$0 = stmts$0.shift();
    m$21$0 = $it$27.step(context$7, scope$8, current$0);
    if ((($$1969$0 = (m$21$0 instanceof Array)) && ((t0$20 = m$21$0.length), ((t0$20 >= 1) && (m$21$0[0] === "splice"))))) {
      prepend$0 = Array.prototype.slice.call(m$21$0, 1);
      stmts$0 = prepend$0.concat(stmts$0);
      stmts$0;
    } else {
      if (($$1969$0 && (($$1971$0 = (t0$20 === 2)) && (m$21$0[0] === "float")))) {
        stmt$0 = m$21$0[1];
        pre$0 = pre$0.concat($it$27.step_all(context$7, scope$8, [stmt$0]));
      } else {
        if (($$1971$0 && (m$21$0[0] === "sink"))) {
          stmt$1 = m$21$0[1];
          post$0 = post$0.concat($it$27.step_all(context$7, scope$8, [stmt$1]));
        } else {
          if (($$1971$0 && (m$21$0[0] === "restmacro"))) {
            m$22 = m$21$0[1];
            e$6 = $it$27.mkenv();
            acc$3 = [];
            temp$15 = null;
            m$23 = null;
            $12: for (var $__0 = m$22(stmts$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$23 = $__1.value;
              {
                var stmt$2;
                stmt$2 = m$23;
                temp$15 = e$6.mark(stmt$2);
                acc$3.push(temp$15);
              }
            }
            stmts$0 = acc$3;
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
}));
(Expander$0.prototype["expand"] = (function expand(context$8, scope$9, expr$6) {
  var helper$1;
  var $it$28;
  var self$24;
  $it$28 = this;
  self$24 = this;
  helper$1 = track_location$0((function(context$9, scope$10, expr$7) {
    var t0$22;
    var other$10;
    var m$25$0;
    var $targ$11;
    var env$2;
    var m$26;
    var acc$4;
    var temp$16;
    var newargs$0;
    var m$27;
    var acc$5;
    var temp$17;
    var newargs$1;
    var t0$24;
    var newscope$1;
    var $targ$12;
    var env$3;
    var m$28;
    var acc$6;
    var temp$18;
    var t0$29;
    var newscope$2;
    var stepscope$0;
    var changes$0;
    var $targ$13;
    var newargs$2;
    var vars$0;
    var exp$0;
    var m$33;
    var other$15;
    var t0$34;
    var m$34$0;
    var is_obj$0;
    var obj$0;
    var arr$0;
    var arr_parts$0;
    var obj_parts$0;
    var new_arr_part$0;
    var new_obj_part$0;
    var r$0;
    var x$13;
    var msg$3;
    var $targ$17;
    var otherwise$1;
    var m$36;
    var t0$35;
    var m$35$0;
    var t$1;
    var m$37;
    var acc$9;
    var temp$21;
    var newscope$3;
    var s$7;
    var newscope$4;
    var name$4;
    var t0$37;
    var m$38;
    var acc$10;
    var temp$22;
    var m$39;
    var acc$11;
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
    var variable$0;
    var s$2;
    var value$3;
    var body$0;
    var args$2;
    var args$1;
    var f$2;
    var arg$4;
    var s$1;
    var $$2083$0;
    var $$2084$0;
    var $$2085$0;
    var t0$21;
    var t1$7;
    var t2$1;
    var m$24$0;
    expr$7 = $it$28.step(context$9, scope$10, expr$7);
    m$24$0 = expr$7;
    if ((($$2083$0 = (m$24$0 instanceof Array)) && ((t0$21 = m$24$0.length), (($$2085$0 = (t0$21 === 2)) && (m$24$0[0] === "symbol"))))) {
      s$1 = m$24$0[1];
      $targ$11 = expr$7;
      t0$22 = $targ$11;
      if (___hasprop(t0$22, "env")) {
        env$2 = t0$22.env;
      } else {
        ___match_error($targ$11);
      }
      m$25$0 = env$2.resolve(scope$10, s$1);
      if ((m$25$0 === (void 0))) {
        throw ErrorFactory(["syntax", "undeclared"]).create(("Undeclared variable: " + s$1), ({"node": expr$7}));
      } else {
        other$10 = m$25$0;
        return ["bounce", other$10];
      }
    } else {
      if (($$2085$0 && (m$24$0[0] === "value"))) {
        m$24$0[1];
        return expr$7;
      } else {
        if (($$2085$0 && (m$24$0[0] === "variable"))) {
          m$24$0[1];
          return expr$7;
        } else {
          if (($$2083$0 && ((t0$21 === 1) && (m$24$0[0] === "void")))) {
            return expr$7;
          } else {
            if (($$2083$0 && ((t0$21 === 3) && (m$24$0[0] === "send")))) {
              f$2 = m$24$0[1];
              arg$4 = m$24$0[2];
              return ["send", helper$1(["expr", "head"], scope$10, f$2), helper$1(["expr", "tail"], scope$10, arg$4)];
            } else {
              if (($$2083$0 && (($$2085$0 = (t0$21 >= 1)) && (m$24$0[0] === "array")))) {
                args$1 = Array.prototype.slice.call(m$24$0, 1);
                acc$4 = [];
                temp$16 = null;
                m$26 = null;
                $13: for (var $__0 = $it$28.step_all(["expr", "array"], scope$10, args$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  m$26 = $__1.value;
                  {
                    var arg$5;
                    arg$5 = m$26;
                    temp$16 = helper$1(["expr", "expr"], scope$10, arg$5);
                    acc$4.push(temp$16);
                  }
                }
                newargs$0 = acc$4;
                return ["array"].concat(newargs$0);
              } else {
                if (($$2085$0 && (m$24$0[0] === "object"))) {
                  args$2 = Array.prototype.slice.call(m$24$0, 1);
                  acc$5 = [];
                  temp$17 = null;
                  m$27 = null;
                  $14: for (var $__2 = $it$28.step_all(["expr", "object"], scope$10, args$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
                      $__3; !($__3 = $__2.next()).done; ) {
                    m$27 = $__3.value;
                    {
                      var k$1;
                      var v$2;
                      var t0$23;
                      var t1$8;
                      t0$23 = m$27;
                      if (((t0$23 instanceof Array) && ((t1$8 = t0$23.length), ((t1$8 === 3) && (t0$23[0] === "array"))))) {
                        k$1 = t0$23[1];
                        v$2 = t0$23[2];
                        temp$17 = ["array", helper$1(["expr", "expr"], scope$10, k$1), helper$1(["expr", "expr"], scope$10, v$2)];
                        acc$5.push(temp$17);
                      } else {
                        ___match_error(m$27, "/home/olivier/git/earl-grey/src/expand.eg", 10957, 11146);
                      }
                    }
                  }
                  newargs$1 = acc$5;
                  return ["object"].concat(newargs$1);
                } else {
                  if (($$2083$0 && ((t0$21 === 4) && ((m$24$0[0] === "bind") && ((t1$7 = m$24$0[1]), (variable$0 = t1$7), ((t1$7 instanceof Array) && ((t2$1 = t1$7.length), ((t2$1 === 2) && (t1$7[0] === "symbol"))))))))) {
                    s$2 = t1$7[1];
                    value$3 = m$24$0[2];
                    body$0 = m$24$0[3];
                    newscope$1 = Scope$0(scope$10);
                    $targ$12 = variable$0;
                    t0$24 = $targ$12;
                    if (___hasprop(t0$24, "env")) {
                      env$3 = t0$24.env;
                    } else {
                      ___match_error($targ$12);
                    }
                    env$3.bind(newscope$1, s$2, value$3);
                    return helper$1(context$9, newscope$1, body$0);
                  } else {
                    if (($$2083$0 && (($$2085$0 = (t0$21 >= 1)) && (m$24$0[0] === "splice")))) {
                      args$3 = Array.prototype.slice.call(m$24$0, 1);
                      return ["bounce", __amp____colon__(["multi"].concat(args$3), ({"override_scope": true}))];
                    } else {
                      if (($$2085$0 && (m$24$0[0] === "interactive"))) {
                        args$4 = Array.prototype.slice.call(m$24$0, 1);
                        return ["bounce", __amp____colon__(["multi"].concat(args$4), ({
                          "override_scope": true,
                          "all_mutable": true
                        }))];
                      } else {
                        if (($$2085$0 && (m$24$0[0] === "multi"))) {
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
                          changes$0 = false;
                          $targ$13 = classify$0("newargs", "vars", ((acc$6 = []), (temp$18 = null), (m$28 = null), (function() {
                            $15: for (var $__4 = $it$28.step_all(["expr", "multi"], stepscope$0, args$5)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$28 = $__5.value;
                              {
                                var t0$26;
                                var $targ$14;
                                var env$4;
                                var t0$27;
                                var v$3;
                                var $targ$15;
                                var env$5;
                                var t0$28;
                                var $targ$16;
                                var env$6;
                                var other$11;
                                var s$5;
                                var variable$3;
                                var v$4;
                                var value$7;
                                var variable$2;
                                var s$4;
                                var value$6;
                                var variable$1;
                                var s$3;
                                var value$5;
                                var opt$2;
                                var value$4;
                                var $$2275$0;
                                var $$2276$0;
                                var $$2277$0;
                                var $$2278$0;
                                var $$2279$0;
                                var $$2280$0;
                                var t0$25;
                                var t1$9;
                                var t2$2;
                                var t3$1;
                                t0$25 = m$28;
                                if ((($$2276$0 = (t0$25 instanceof Array)) && ((t1$9 = t0$25.length), (($$2278$0 = (t1$9 === 3)) && (t0$25[0] === "option"))))) {
                                  opt$2 = t0$25[1];
                                  value$4 = t0$25[2];
                                  newscope$2.setopt(opt$2, value$4);
                                  temp$18 = ["ignore"];
                                  acc$6.push(temp$18);
                                } else {
                                  if (($$2278$0 && ((t0$25[0] === "declare_raw") && ((t2$2 = t0$25[1]), (variable$1 = t2$2), ((t2$2 instanceof Array) && ((t3$1 = t2$2.length), ((t3$1 === 2) && (t2$2[0] === "symbol")))))))) {
                                    s$3 = t2$2[1];
                                    value$5 = t0$25[2];
                                    $targ$14 = variable$1;
                                    t0$26 = $targ$14;
                                    if (___hasprop(t0$26, "env")) {
                                      env$4 = t0$26.env;
                                    } else {
                                      ___match_error($targ$14);
                                    }
                                    env$4.bind(newscope$2, s$3, value$5);
                                    changes$0 = true;
                                    temp$18 = ["ignore"];
                                    acc$6.push(temp$18);
                                  } else {
                                    if (($$2276$0 && (($$2278$0 = ((t1$9 >= 2) && (t1$9 <= 3))) && (($$2279$0 = (t0$25[0] === "declare")) && ((t2$2 = t0$25[1]), (variable$2 = t2$2), ((t2$2 instanceof Array) && ((t3$1 = t2$2.length), ((t3$1 === 2) && (t2$2[0] === "symbol"))))))))) {
                                      s$4 = t2$2[1];
                                      if ((2 >= t1$9)) {
                                        value$6 = null;
                                      } else {
                                        value$6 = t0$25[2];
                                      }
                                      $targ$15 = variable$2;
                                      t0$27 = $targ$15;
                                      if (___hasprop(t0$27, "env")) {
                                        env$5 = t0$27.env;
                                      } else {
                                        ___match_error($targ$15);
                                      }
                                      if ((variable$2.use_previous && env$5.resolve(newscope$2, s$4))) {
                                        temp$18 = ["splice"];
                                      } else {
                                        v$3 = __lt____lt____colon__$0(["variable", $it$28.gensym(s$4)], variable$2);
                                        __amp____colon__(v$3, ({"mutable": (expr$7.all_mutable || variable$2.mutable)}));
                                        env$5.bind(newscope$2, s$4, v$3);
                                        changes$0 = true;
                                        if (value$6) {
                                          temp$18 = ["splice", ["newargs", ["assign", v$3, value$6]], ["vars", v$3]];
                                        } else {
                                          temp$18 = ["vars", v$3];
                                        }
                                      }
                                      acc$6.push(temp$18);
                                    } else {
                                      if (($$2279$0 && ((v$4 = t2$2), ((t2$2 instanceof Array) && ((t3$1 = t2$2.length), ((t3$1 === 2) && (t2$2[0] === "variable"))))))) {
                                        t2$2[1];
                                        if ((2 >= t1$9)) {
                                          value$7 = null;
                                        } else {
                                          value$7 = t0$25[2];
                                        }
                                        changes$0 = true;
                                        if (value$7) {
                                          temp$18 = ["splice", ["newargs", ["assign", v$4, value$7]], ["vars", v$4]];
                                        } else {
                                          temp$18 = ["vars", v$4];
                                        }
                                        acc$6.push(temp$18);
                                      } else {
                                        if (($$2276$0 && ((t1$9 === 2) && ((t0$25[0] === "undeclare") && ((t2$2 = t0$25[1]), ((t2$2 instanceof Array) && ((t3$1 = t2$2.length), ((t3$1 === 2) && (t2$2[0] === "symbol"))))))))) {
                                          s$5 = t2$2[1];
                                          variable$3 = t2$2;
                                          $targ$16 = variable$3;
                                          t0$28 = $targ$16;
                                          if (___hasprop(t0$28, "env")) {
                                            env$6 = t0$28.env;
                                          } else {
                                            ___match_error($targ$16);
                                          }
                                          env$6.bind(newscope$2, s$5, undefined);
                                          changes$0 = true;
                                          temp$18 = ["ignore"];
                                          acc$6.push(temp$18);
                                        } else {
                                          other$11 = m$28;
                                          temp$18 = ["newargs", other$11];
                                          acc$6.push(temp$18);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          })(), acc$6));
                          t0$29 = $targ$13;
                          if ((___hasprop(t0$29, "newargs") && ((newargs$2 = t0$29.newargs), ___hasprop(t0$29, "vars")))) {
                            vars$0 = t0$29.vars;
                          } else {
                            ___match_error($targ$13);
                          }
                          [newargs$2, vars$0];
                          exp$0 = (function exp(s$6) {
                            var m$29;
                            var acc$7;
                            var temp$19;
                            var m$30;
                            var acc$8;
                            var temp$20;
                            var stepped$0;
                            acc$7 = [];
                            temp$19 = null;
                            m$29 = null;
                            $17: for (var $__4 = enumerate(newargs$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$29 = $__5.value;
                              {
                                var i$0;
                                var arg$6;
                                var t0$30;
                                var t1$10;
                                t0$30 = m$29;
                                if (((t0$30 instanceof Array) && ((t1$10 = t0$30.length), (t1$10 === 2)))) {
                                  i$0 = t0$30[0];
                                  arg$6 = t0$30[1];
                                  temp$19 = $it$28.step(["expr", ((i$0 === (newargs$2.length - 1)) ? "expr" : "ignore")], s$6, arg$6);
                                  acc$7.push(temp$19);
                                } else {
                                  ___match_error(m$29, "/home/olivier/git/earl-grey/src/expand.eg", 14278, 14455);
                                }
                              }
                            }
                            stepped$0 = acc$7;
                            acc$8 = [];
                            temp$20 = null;
                            m$30 = null;
                            $16: for (var $__6 = stepped$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__7; !($__7 = $__6.next()).done; ) {
                              m$30 = $__7.value;
                              {
                                var arg$7;
                                arg$7 = m$30;
                                temp$20 = helper$1(["expr", "expr"], s$6, arg$7);
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
                          if (($$2085$0 && (m$24$0[0] === "data"))) {
                            args$6 = Array.prototype.slice.call(m$24$0, 1);
                            is_obj$0 = false;
                            obj$0 = ["object"];
                            arr$0 = ["array"];
                            arr_parts$0 = [];
                            obj_parts$0 = [];
                            new_arr_part$0 = (function new_arr_part() {
                              var other$12;
                              var t0$31;
                              var m$31$0;
                              m$31$0 = arr$0;
                              if (((m$31$0 instanceof Array) && ((t0$31 = m$31$0.length), ((t0$31 === 1) && (m$31$0[0] === "array"))))) {
                                return false;
                              } else {
                                other$12 = m$31$0;
                                arr_parts$0.push(arr$0);
                                arr$0 = ["array"];
                                return arr$0;
                              }
                            });
                            new_obj_part$0 = (function new_obj_part() {
                              var other$13;
                              var t0$32;
                              var m$32$0;
                              m$32$0 = obj$0;
                              if (((m$32$0 instanceof Array) && ((t0$32 = m$32$0.length), ((t0$32 === 1) && (m$32$0[0] === "object"))))) {
                                return false;
                              } else {
                                other$13 = m$32$0;
                                obj_parts$0.push(obj$0);
                                obj$0 = ["object"];
                                return obj$0;
                              }
                            });
                            m$33 = null;
                            $18: for (var $__4 = $it$28.step_all(["expr", "data"], scope$10, args$6)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$33 = $__5.value;
                              {
                                var other$14;
                                var expr$9;
                                var expr$8;
                                var k$2;
                                var v$5;
                                var $$2546$0;
                                var $$2547$0;
                                var $$2548$0;
                                var $$2549$0;
                                var t0$33;
                                var t1$11;
                                t0$33 = m$33;
                                if ((($$2547$0 = (t0$33 instanceof Array)) && ((t1$11 = t0$33.length), ((t1$11 === 1) && (t0$33[0] === "assoc"))))) {
                                  is_obj$0 = true;
                                  is_obj$0;
                                } else {
                                  if (($$2547$0 && ((t1$11 === 3) && (t0$33[0] === "assoc")))) {
                                    k$2 = t0$33[1];
                                    v$5 = t0$33[2];
                                    is_obj$0 = true;
                                    obj$0.push(["array", k$2, v$5]);
                                  } else {
                                    if (($$2547$0 && (($$2549$0 = (t1$11 === 2)) && (t0$33[0] === "dynsplice")))) {
                                      expr$8 = t0$33[1];
                                      new_arr_part$0();
                                      arr_parts$0.push(expr$8);
                                    } else {
                                      if (($$2549$0 && (t0$33[0] === "objsplice"))) {
                                        expr$9 = t0$33[1];
                                        is_obj$0 = true;
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
                            if (($$2083$0 && ((t0$21 === 3) && (m$24$0[0] === "assign")))) {
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
                                  $targ$17 = target$0;
                                  (t$1["assigned"] = $targ$17);
                                  [];
                                }
                              }
                              return ["assign", t$1, helper$1(["expr", "expr"], scope$10, value$8)];
                            } else {
                              if (($$2083$0 && ((t0$21 === 4) && (m$24$0[0] === "lambda")))) {
                                bindings$1 = m$24$0[1];
                                body$1 = m$24$0[2];
                                generator$0 = m$24$0[3];
                                newscope$3 = Scope$0(scope$10);
                                return ["lambda", ((acc$9 = []), (temp$21 = null), (m$37 = null), (function() {
                                  $19: for (var $__6 = bindings$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                                      $__7; !($__7 = $__6.next()).done; ) {
                                    m$37 = $__7.value;
                                    {
                                      var v$6;
                                      var x$14;
                                      var other$16;
                                      var v$7;
                                      var b$1;
                                      var env$7;
                                      var $$2758$0;
                                      var t0$36;
                                      var t1$12;
                                      t0$36 = m$37;
                                      if (((t0$36 instanceof Array) && ((t1$12 = t0$36.length), ((t1$12 === 2) && ((t0$36[0] === "symbol") && ((b$1 = t0$36[1]), ___hasprop(t0$36, "env"))))))) {
                                        env$7 = t0$36.env;
                                        v$6 = ["variable", $it$28.gensym(b$1)];
                                        env$7.bind(newscope$3, b$1, v$6);
                                        temp$21 = v$6;
                                        acc$9.push(temp$21);
                                      } else {
                                        if (((x$14 = t0$36), ((x$14 instanceof Array) && (x$14[0] === "variable")))) {
                                          v$7 = t0$36;
                                          temp$21 = v$7;
                                          acc$9.push(temp$21);
                                        } else {
                                          other$16 = m$37;
                                          throw ErrorFactory(["syntax", "lambda", "binding"]).create("Not a valid binding.", ({"node": other$16}));
                                          acc$9.push(temp$21);
                                        }
                                      }
                                    }
                                  }
                                })(), acc$9), helper$1(["expr", "expr"], newscope$3, body$1), generator$0];
                              } else {
                                if (($$2083$0 && (($$2085$0 = (t0$21 === 3)) && (m$24$0[0] === "use")))) {
                                  ph$6$0 = m$24$0[1];
                                  x$15 = m$24$0[2];
                                  t0$37 = ph$6$0;
                                  if ((typeof(t0$37) === "string")) {
                                    name$4 = t0$37;
                                    s$7 = scope$10;
                                    $20: while (s$7) {
                                      if ((s$7.name.slice(0, (name$4.length + 1)) === (name$4 + "/"))) {
                                        break $20;
                                      } else {
                                        s$7 = s$7.parent;
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
                                  if (($$2085$0 && ((m$24$0[0] === "tagscope") && ((t1$7 = m$24$0[1]), (typeof(t1$7) === "string"))))) {
                                    tag$0 = t1$7;
                                    body$2 = m$24$0[2];
                                    return helper$1(context$9, Scope$0(scope$10, $it$28.gensym((tag$0 + "/"))), body$2);
                                  } else {
                                    if (($$2083$0 && ((t0$21 >= 1) && ((type$2 = m$24$0[0]), (args$7 = Array.prototype.slice.call(m$24$0, 1)), ($it$28.generic_nodes.indexOf(type$2) !== -1))))) {
                                      return [type$2].concat(((acc$10 = []), (temp$22 = null), (m$38 = null), (function() {
                                        $21: for (var $__6 = args$7[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__7; !($__7 = $__6.next()).done; ) {
                                          m$38 = $__7.value;
                                          {
                                            var arg$8;
                                            arg$8 = m$38;
                                            temp$22 = helper$1(["expr", "expr"], scope$10, arg$8);
                                            acc$10.push(temp$22);
                                          }
                                        }
                                      })(), acc$10));
                                    } else {
                                      if (($$2083$0 && ((t0$21 >= 2) && (m$24$0[0] === "mismix")))) {
                                        ops$0 = m$24$0[1];
                                        args$8 = Array.prototype.slice.call(m$24$0, 2);
                                        tokens$0 = object(((acc$11 = []), (temp$23 = null), (m$39 = null), (function() {
                                          $22: for (var $__6 = enumerate(ops$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                              $__7; !($__7 = $__6.next()).done; ) {
                                            m$39 = $__7.value;
                                            {
                                              var i$1;
                                              var op$0;
                                              var t0$38;
                                              var t1$13;
                                              t0$38 = m$39;
                                              if (((t0$38 instanceof Array) && ((t1$13 = t0$38.length), (t1$13 === 2)))) {
                                                i$1 = t0$38[0];
                                                op$0 = t0$38[1];
                                                temp$23 = [("token" + String((i$1 + 1))), op$0];
                                                acc$11.push(temp$23);
                                              } else {
                                                ___match_error(m$39, "/home/olivier/git/earl-grey/src/expand.eg", 19529, 19629);
                                              }
                                            }
                                          }
                                        })(), acc$11));
                                        msg$4 = "These operators or brackets cannot be mixed together.";
                                        throw ErrorFactory(["syntax", "mismatch"]).create(msg$4, tokens$0);
                                      } else {
                                        if (($$2083$0 && ((t0$21 === 2) && (m$24$0[0] === "char")))) {
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
}));
__amp____colon__(Expander$0, __amp____colon__(((accum$6 = ({})), (accum$6["::name"] = "Expander"), accum$6), ((accum$7 = ({})), (accum$7["::egclass"] = true), accum$7)));
mac1$0 = (function mac1(f$3) {
  return ["macro", (function(context$10, scope$11, form$1, temp$24$0) {
    var t0$39;
    var t1$14;
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
checker_db$0 = (function checker_db(ph$7$0) {
  var v$8;
  var $targ$18;
  var v$9;
  var $targ$19;
  var s$8;
  var n$0;
  var $$2984$0;
  var t0$40;
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
              $targ$18 = v$8;
              (__chk_ncache$0[n$0] = $targ$18);
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
                $targ$19 = v$9;
                (__chk_scache$0[s$8] = $targ$19);
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
$targ$20 = Env$0;
(exports["Env"] = $targ$20);
[];
$targ$21 = Scope$0;
(exports["Scope"] = $targ$21);
[];
$targ$22 = Info$0;
(exports["Info"] = $targ$22);
[];
$targ$23 = track_location$0;
(exports["track_location"] = $targ$23);
[];
$targ$24 = Expander$0;
(exports["Expander"] = $targ$24);
[];
$targ$25 = GenSym$0;
(exports["GenSym"] = $targ$25);
[];
$targ$26 = gensym$0;
(exports["gensym"] = $targ$26);
[];
$targ$27 = mac1$0;
(exports["mac1"] = $targ$27);
[];
$targ$28 = checker_db$0;
(exports["checker_db"] = $targ$28);
[];
$targ$29 = topscope$0;
(exports["topscope"] = $targ$29);
[];
$targ$30 = jsKeywords$0;
(exports["jsKeywords"] = $targ$30);
[];
//# sourceURL=<compile-source>
