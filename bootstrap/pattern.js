"use strict";
require("earlgrey-runtime");
var $targ$99;
var accum$0;
var $targ$100;
var accum$1;
var $targ$167;
var accum$2;
var $targ$168;
var accum$3;
var $targ$332;
var $targ$333;
var $targ$334;
var $targ$335;
var $0$0;
var __lt____gt__$0;
var $1$0;
var __lt____lt____colon__$0;
var util$0;
var GenSym$0;
var gensym$0;
var classify$0;
var classify_contiguous$0;
var identity$0;
var Body$0;
var $3$0;
var checker_db$0;
var PatternParser$0;
var $targ$13;
var $targ$14;
var PatternProcessor$0;
var $targ$16;
var $targ$17;
var $targ$18;
var $targ$19;
var assemble_conditions$0;
var assemble_pattern$0;
var inject_below_uses$0;
var find_target$0;
var parse_pattern$0;
var checkall$0;
var same_block$0;
var parse_clauses$0;
var opt_clauses$0;
var weave_clauses$0;
$0$0 = require("./pp");
__lt____gt__$0 = $0$0["<>"];
$1$0 = require("./location");
__lt____lt____colon__$0 = $1$0["<<:"];
util$0 = require("./util");
GenSym$0 = util$0.GenSym;
gensym$0 = util$0.gensym;
classify$0 = util$0.classify;
classify_contiguous$0 = util$0.classify_contiguous;
identity$0 = util$0.identity;
Body$0 = util$0.Body;
$3$0 = require("./expand");
checker_db$0 = $3$0.checker_db;
PatternParser$0 = (function(info$0, pattern$0, opt$0) {
  var $targ$32;
  var $targ$33;
  var $targ$34;
  var $targ$35;
  var tags$0;
  var $targ$37;
  var $it$0;
  $it$0 = ((!getChecker(PatternParser$0)(this)) ? Object.create(PatternParser$0.prototype) : this);
  $targ$32 = opt$0;
  ($it$0["opt"] = $targ$32);
  $targ$33 = [];
  ($it$0["arguments"] = $targ$33);
  $targ$34 = [];
  ($it$0["vars"] = $targ$34);
  $targ$35 = ({});
  ($it$0["specials"] = $targ$35);
  tags$0 = clone((opt$0.tags || ({})));
  (tags$0["group_id"] = (tags$0.group_id || gensym$0("group")));
  $targ$37 = $it$0.expand(info$0, pattern$0, tags$0, true, $it$0.opt.indexable);
  ($it$0["pattern"] = $targ$37);
  return $it$0;
});
$targ$13 = (function(info$1, specs$0, tags$1) {
  var m$0;
  var acc$0;
  var $targ$40;
  var rest$0;
  var $targ$41;
  var has_defaults$0;
  var rval$0;
  var $targ$43;
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  $targ$40 = undefined;
  rest$0 = $targ$40;
  $targ$41 = false;
  has_defaults$0 = $targ$41;
  rval$0 = classify$0("fw", "bw", "keys", "defaults", ((acc$0 = []), (m$0 = null), (function() {
    $4: for (var $__0 = info$1.step_all(["pattern"], specs$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$0 = $__1.value;
      {
        var t1$0;
        var $targ$47;
        var $targ$48;
        var v$1;
        var v$0;
        var variable$1;
        var value$0;
        var key$1;
        var subp$0;
        var key$0;
        var t0$0;
        var variable$0;
        var $$17395$0;
        var $$17396$0;
        var $$17397$0;
        var $$17398$0;
        t0$0 = m$0;
        if ((($$17396$0 = (t0$0 instanceof Array)) && ((t1$0 = t0$0.length), (($$17398$0 = (t1$0 === 2)) && (t0$0[0] === "dynsplice"))))) {
          variable$0 = t0$0[1];
          acc$0.push((($targ$47 = $it$1.expand(info$1, variable$0, tags$1)), (rest$0 = $targ$47), ["ignore"]));
        } else {
          if (($$17398$0 && (t0$0[0] === "assoc"))) {
            key$0 = t0$0[1];
            acc$0.push(["keys", [key$0, $it$1.expand(info$1, key$0, tags$1)]]);
          } else {
            if (($$17396$0 && (($$17398$0 = (t1$0 === 3)) && (t0$0[0] === "assoc")))) {
              key$1 = t0$0[1];
              subp$0 = t0$0[2];
              acc$0.push(["keys", [key$1, $it$1.expand(info$1, subp$0, tags$1)]]);
            } else {
              if (($$17398$0 && (t0$0[0] === "default"))) {
                variable$1 = t0$0[1];
                value$0 = t0$0[2];
                acc$0.push((($targ$48 = true), (has_defaults$0 = $targ$48), (rest$0 ? (function() {
                  throw ErrorFactory(["syntax", "pattern"]).create("No default arguments after rest arg.");
                })() : ["defaults", [$it$1.expand(info$1, variable$1, tags$1), value$0]])));
              } else {
                v$0 = m$0;
                if (((rest$0 === undefined) && (!has_defaults$0))) {
                  acc$0.push(["fw", $it$1.expand(info$1, v$0, tags$1)]);
                } else {
                  v$1 = m$0;
                  acc$0.push(["bw", $it$1.expand(info$1, v$1, tags$1)]);
                }
              }
            }
          }
        }
      }
    }
  })(), acc$0));
  $targ$43 = rest$0;
  (rval$0["rest"] = $targ$43);
  return rval$0;
});
(PatternParser$0.prototype["parse_specs"] = $targ$13);
$targ$14 = (function() {
  var x$0;
  var x$1;
  var $targ$58;
  var $targ$59;
  var x$2;
  var x$3;
  var variable$2;
  var $targ$64;
  var variable$3;
  var x$4;
  var t1$1;
  var msg$0;
  var msg$1;
  var $targ$70;
  var m$3;
  var acc$1;
  var m$5;
  var acc$3;
  var m$6;
  var t2$0;
  var t1$4;
  var t0$5;
  var m$8;
  var acc$4;
  var patts$0;
  var canon$0;
  var normalize$0;
  var pps$0;
  var $targ$75;
  var vars$0;
  var $targ$90;
  var $targ$89;
  var patt$0;
  var t5$0;
  var t4$0;
  var t3$0;
  var t2$1;
  var $targ$93;
  var $targ$92;
  var msg$2;
  var other$0;
  var keys$0;
  var fw$0;
  var bw$0;
  var defaults$0;
  var rest$1;
  var $$17801$0;
  var t0$6;
  var t1$5;
  var m$9$0;
  var specs$1;
  var other$1;
  var mode$0;
  var subp$4;
  var args$0;
  var xs$1;
  var xs$0;
  var x$5;
  var f$1;
  var arg$0;
  var f$0;
  var arguments$1;
  var checker$0;
  var subp$3;
  var projector$0;
  var subp$2;
  var unconditional$0;
  var condition$0;
  var subp$1;
  var v$3;
  var v$2;
  var bridge$$17495$0;
  var type$0;
  var $$17510$0;
  var $$17511$0;
  var $$17512$0;
  var $$17513$0;
  var t0$2;
  var m$2$0;
  var expr$0;
  var rval$1;
  var t0$1;
  var info$2;
  var pattern$1;
  var tags$2;
  var toplevel$0;
  var checked$0;
  var m$1$0;
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  m$1$0 = arguments;
  t0$1 = m$1$0.length;
  if (((t0$1 >= 3) && (t0$1 <= 5))) {
    info$2 = m$1$0[0];
    pattern$1 = m$1$0[1];
    tags$2 = m$1$0[2];
    toplevel$0 = ((3 >= t0$1) ? false : m$1$0[3]);
    checked$0 = ((4 >= t0$1) ? false : m$1$0[4]);
    expr$0 = info$2.step(["pattern"], pattern$1);
    rval$1 = ((m$2$0 = expr$0), (((x$0 = m$2$0), ((x$0 instanceof Array) && (x$0[0] === "void"))) ? ["check", checker_db$0.null, ["ignore"]] : (((x$1 = m$2$0), ((x$1 instanceof Array) && (x$1[0] === "ignore"))) ? expr$0 : (((m$2$0 instanceof Array) && (($targ$58 = m$2$0.length), (t0$2 = $targ$58), ((t0$2 === 2) && (m$2$0[0] === "special")))) ? ((type$0 = m$2$0[1]), ($targ$59 = true), ($it$2.specials[type$0] = $targ$59), expr$0) : ((bridge$$17495$0 = m$2$0), ((((x$2 = bridge$$17495$0), ((x$2 instanceof Array) && (x$2[0] === "symbol"))) || ((x$3 = bridge$$17495$0), ((x$3 instanceof Array) && (x$3[0] === "variable")))) ? ((variable$2 = __amp__(expr$0, tags$2)), $it$2.vars.push(variable$2), ["assign", variable$2]) : ((($$17510$0 = (m$2$0 instanceof Array)) && (($targ$64 = m$2$0.length), (t0$2 = $targ$64), (($$17512$0 = (t0$2 === 2)) && (($$17513$0 = (m$2$0[0] === "value")) && ((v$2 = m$2$0[1]), $it$2.opt.strings_as_variables))))) ? ((variable$3 = __lt____lt____colon__$0(__amp__(["symbol", v$2], tags$2), expr$0)), $it$2.vars.push(variable$3), ["assign", variable$3]) : ($$17513$0 ? ((v$3 = m$2$0[1]), ["check", checker_db$0(v$3), ["ignore"]]) : (($$17510$0 && ((t0$2 === 3) && (m$2$0[0] === "test"))) ? ((condition$0 = m$2$0[1]), (subp$1 = m$2$0[2]), ["test", condition$0, $it$2.expand(info$2, subp$1, tags$2, toplevel$0, false)]) : (($$17510$0 && (((t0$2 >= 3) && (t0$2 <= 4)) && (m$2$0[0] === "project"))) ? ((projector$0 = m$2$0[1]), (subp$2 = m$2$0[2]), (unconditional$0 = ((3 >= t0$2) ? false : m$2$0[3])), ["project", projector$0, $it$2.expand(info$2, subp$2, tags$2, toplevel$0, true), unconditional$0]) : (($$17510$0 && (($$17512$0 = (t0$2 === 3)) && (m$2$0[0] === "check"))) ? ((checker$0 = m$2$0[1]), (subp$3 = m$2$0[2]), ["check", checker$0, $it$2.expand(info$2, subp$3, tags$2, toplevel$0, true)]) : (($$17512$0 && (($$17513$0 = (m$2$0[0] === "send")) && ((f$0 = m$2$0[1]), (t1$1 = m$2$0[2]), (x$4 = t1$1), ((x$4 instanceof Array) && (x$4[0] === "data"))))) ? ((arguments$1 = t1$1), (toplevel$0 ? ($it$2.arguments.unshift(arguments$1), $it$2.expand(info$2, f$0, tags$2, true, false)) : ((msg$0 = "Function arguments can only be declared as a top level pattern."), (function() {
      throw ErrorFactory(["syntax", "pattern"]).create(msg$0, ({
        "node": expr$0,
        "arg": arguments$1
      }));
    })()))) : ($$17513$0 ? ((f$1 = m$2$0[1]), (arg$0 = m$2$0[2]), ["assign", expr$0]) : (m$2$0, ((!$it$2.opt.allow_nested) ? ((msg$1 = "Nested patterns are not allowed here."), (function() {
      throw ErrorFactory(["syntax", "pattern"]).create(msg$1, ({"node": expr$0}));
    })()) : ((($$17510$0 = (m$2$0 instanceof Array)) && (($targ$70 = m$2$0.length), (t0$2 = $targ$70), ((t0$2 === 2) && (m$2$0[0] === "neg")))) ? ((x$5 = m$2$0[1]), ["neg", $it$2.expand(info$2, x$5, tags$2)]) : (($$17510$0 && (($$17512$0 = (t0$2 >= 1)) && (m$2$0[0] === "all"))) ? ((xs$0 = Array.prototype.slice.call(m$2$0, 1)), ["all"].concat(((acc$1 = []), (m$3 = null), (function() {
      $5: for (var $__0 = xs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$3 = $__1.value;
        {
          var x$6;
          x$6 = m$3;
          acc$1.push($it$2.expand(info$2, x$6, tags$2));
        }
      }
    })(), acc$1))) : (($$17512$0 && (m$2$0[0] === "any")) ? ((xs$1 = Array.prototype.slice.call(m$2$0, 1)), (canon$0 = (function(all$0) {
      return all$0.sort().join(",");
    })), (normalize$0 = (function(vars$1) {
      var m$4;
      var acc$2;
      return canon$0(((acc$2 = []), (m$4 = null), (function() {
        $7: for (var $__0 = vars$1[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$4 = $__1.value;
          {
            var t1$2;
            var t0$3;
            var v$4;
            t0$3 = m$4;
            if (((t0$3 instanceof Array) && ((t1$2 = t0$3.length), ((t1$2 === 2) && (t0$3[0] === "symbol"))))) {
              v$4 = t0$3[1];
              acc$2.push(v$4);
            } else {
              ___match_error(m$4, "/home/olivier/git/earl-grey/src/pattern.eg", 3939, 3977);
            }
          }
        }
      })(), acc$2));
    })), (pps$0 = ((acc$3 = []), (m$5 = null), (function() {
      $8: for (var $__0 = xs$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$5 = $__1.value;
        {
          var x$7;
          x$7 = m$5;
          acc$3.push(PatternParser$0(info$2, x$7, __amp__($it$2.opt, ({"tags": tags$2}))));
        }
      }
    })(), acc$3)), (m$6 = null), (function() {
      $6: for (var $__2 = neighbours(pps$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        m$6 = $__3.value;
        {
          var t1$3;
          var m$7;
          var t0$4;
          var pp1$0;
          var pp2$0;
          t0$4 = m$6;
          if (((t0$4 instanceof Array) && ((t1$3 = t0$4.length), (t1$3 === 2)))) {
            pp1$0 = t0$4[0];
            pp2$0 = t0$4[1];
            m$7 = null;
            $9: for (var $__0 = pps$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$7 = $__1.value;
              {
                var pp$0;
                pp$0 = m$7;
                normalize$0(pp$0.vars);
              }
            }
            if ((normalize$0(pp1$0.vars) !== normalize$0(pp2$0.vars))) {
              throw ErrorFactory(["syntax", "pattern"]).create("Both branches of 'or' must contain the same variables", ({
                "vars1": __lt____lt____colon__$0(pp1$0.vars.sort(), pp1$0.pattern),
                "vars2": __lt____lt____colon__$0(pp2$0.vars.sort(), pp2$0.pattern)
              }));
            }
            if ((canon$0(keys(pp1$0.specials)) !== canon$0(keys(pp2$0.specials)))) {
              throw ErrorFactory(["syntax", "pattern"]).create("Both branches of 'or' must contain the same special tokens", ({
                "special1": __lt____lt____colon__$0(keys(pp1$0.specials).sort(), pp1$0.pattern),
                "special2": __lt____lt____colon__$0(keys(pp2$0.specials).sort(), pp2$0.pattern)
              }));
            }
          } else {
            ___match_error(m$6, "/home/olivier/git/earl-grey/src/pattern.eg", 4068, 4865);
          }
        }
      }
    })(), ($targ$75 = pps$0), (t0$5 = $targ$75), (((t0$5 instanceof Array) && ((t1$4 = t0$5.length), ((t1$4 >= 1) && ((t2$0 = t0$5[0]), ___hasprop(t2$0, "vars"))))) ? ((vars$0 = t2$0.vars), Array.prototype.slice.call(t0$5, 1)) : ___match_error($targ$75)), ($it$2["vars"] = $it$2.vars.concat(vars$0)), (patts$0 = ((acc$4 = []), (m$8 = null), (function() {
      $10: for (var $__0 = pps$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$8 = $__1.value;
        {
          var pp$1;
          pp$1 = m$8;
          acc$4.push(pp$1.pattern);
        }
      }
    })(), acc$4)), ["any"].concat(patts$0)) : (($$17512$0 && (m$2$0[0] === "data")) ? ((args$0 = Array.prototype.slice.call(m$2$0, 1)), (specs$1 = $it$2.parse_specs(info$2, args$0, tags$2)), (m$9$0 = specs$1), ((($$17801$0 = ___hasprop(m$9$0, "keys")) && (($targ$89 = m$9$0.keys), (t0$6 = $targ$89), ((t0$6 instanceof Array) && (($targ$90 = t0$6.length), (t1$5 = $targ$90), ((t1$5 === 0) && (___hasprop(m$9$0, "fw") && ((fw$0 = m$9$0.fw), (___hasprop(m$9$0, "bw") && ((bw$0 = m$9$0.bw), (___hasprop(m$9$0, "defaults") && ((defaults$0 = m$9$0.defaults), ___hasprop(m$9$0, "rest")))))))))))) ? ((rest$1 = m$9$0.rest), (patt$0 = __lt____lt____colon__$0(["array_pattern", fw$0, bw$0, defaults$0, rest$1], pattern$1)), (checked$0 ? patt$0 : ["check", checker_db$0.Array, patt$0])) : (($$17801$0 && ((keys$0 = m$9$0.keys), (___hasprop(m$9$0, "fw") && (($targ$92 = m$9$0.fw), (t0$6 = $targ$92), ((t0$6 instanceof Array) && (($targ$93 = t0$6.length), (t1$5 = $targ$93), ((t1$5 === 0) && (___hasprop(m$9$0, "bw") && ((t2$1 = m$9$0.bw), ((t2$1 instanceof Array) && ((t3$0 = t2$1.length), ((t3$0 === 0) && (___hasprop(m$9$0, "defaults") && ((t4$0 = m$9$0.defaults), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 0) && (___hasprop(m$9$0, "rest") && (m$9$0.rest === (void 0)))))))))))))))))))) ? ["object_pattern"].concat(keys$0) : ((other$0 = m$9$0), (msg$2 = "Pattern must be an array or an object."), (function() {
      throw ErrorFactory(["syntax", "pattern"]).create(msg$2, ({
        "node": expr$0,
        "specs": specs$1
      }));
    })())))) : (($$17510$0 && ((t0$2 === 3) && (m$2$0[0] === "mode"))) ? ((mode$0 = m$2$0[1]), (subp$4 = m$2$0[2]), $it$2.expand(info$2, subp$4, __amp__(tags$2, ({"declare_mode": mode$0})), toplevel$0, checked$0)) : ((other$1 = m$2$0), (function() {
      throw ErrorFactory(["syntax", "pattern"]).create(("Illegal pattern: " + other$1), ({"node": other$1}));
    })())))))))))))))))))))));
    return ($it$2.opt.wrap_pattern || identity$0)(__lt____lt____colon__$0(rval$1, pattern$1), toplevel$0);
  } else {
    return ___match_error(m$1$0);
  }
});
(PatternParser$0.prototype["expand"] = $targ$14);
__amp____colon__(PatternParser$0, __amp____colon__((($targ$99 = "PatternParser"), (accum$0 = ({})), (accum$0["::name"] = $targ$99), accum$0), (($targ$100 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$100), accum$1)));
PatternParser$0;
PatternProcessor$0 = (function() {
  var $targ$102;
  var $targ$103;
  var $targ$104;
  var $it$3;
  $it$3 = ((!getChecker(PatternProcessor$0)(this)) ? Object.create(PatternProcessor$0.prototype) : this);
  $targ$102 = [];
  ($it$3["temps"] = $targ$102);
  $targ$103 = [];
  ($it$3["parts"] = $targ$103);
  $targ$104 = GenSym$0("t");
  ($it$3["gen"] = $targ$104);
  return $it$3;
});
$targ$16 = (function(part$0) {
  var $it$4;
  var self$2;
  $it$4 = this;
  self$2 = this;
  return $it$4.parts.push(["do", part$0]);
});
(PatternProcessor$0.prototype["do"] = $targ$16);
$targ$17 = (function() {
  var t0$7;
  var part$1;
  var tags$3;
  var m$10$0;
  var $it$5;
  var self$3;
  $it$5 = this;
  self$3 = this;
  m$10$0 = arguments;
  t0$7 = m$10$0.length;
  if (((t0$7 >= 1) && (t0$7 <= 2))) {
    part$1 = m$10$0[0];
    tags$3 = ((1 >= t0$7) ? ({}) : m$10$0[1]);
    return $it$5.parts.push(__amp__(["check", part$1], tags$3));
  } else {
    return ___match_error(m$10$0);
  }
});
(PatternProcessor$0.prototype["check"] = $targ$17);
$targ$18 = (function() {
  var x$9;
  var x$10;
  var $targ$119;
  var $targ$120;
  var init$0;
  var bridge$$17990$0;
  var m$12$0;
  var t0$8;
  var x$8;
  var v$5;
  var m$11$0;
  var $it$6;
  var self$4;
  $it$6 = this;
  self$4 = this;
  m$11$0 = arguments;
  t0$8 = m$11$0.length;
  if (((t0$8 >= 1) && (t0$8 <= 2))) {
    x$8 = m$11$0[0];
    v$5 = ((1 >= t0$8) ? null : m$11$0[1]);
    m$12$0 = x$8;
    bridge$$17990$0 = m$12$0;
    if (((((x$9 = bridge$$17990$0), ((x$9 instanceof Array) && (x$9[0] === "variable"))) || ((x$10 = bridge$$17990$0), ((x$10 instanceof Array) && (x$10[0] === "symbol")))) && (___hasprop(m$12$0, "single_assignment") && ((m$12$0.single_assignment ? true : false) && (!v$5))))) {
      return x$8;
    } else {
      init$0 = m$12$0;
      $targ$119 = (v$5 || ["symbol", $it$6.gen()]);
      v$5 = $targ$119;
      $targ$120 = true;
      (v$5["single_assignment"] = $targ$120);
      $it$6.temps.push(v$5);
      $it$6.do(["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], v$5], init$0]]);
      return v$5;
    }
  } else {
    return ___match_error(m$11$0);
  }
});
(PatternProcessor$0.prototype["temp"] = $targ$18);
$targ$19 = (function(pattern$2, rhs$0, fns$0) {
  var x$11;
  var t0$9;
  var x$12;
  var t$0;
  var t$1;
  var t$2;
  var t1$6;
  var pp$2;
  var m$14;
  var t$3;
  var m$15;
  var acc$5;
  var fn$0;
  var parts$0;
  var t$4;
  var m$16;
  var acc$6;
  var t$5;
  var otherwise$0;
  var m$17$0;
  var m$18;
  var m$20;
  var end$0;
  var pos$0;
  var m$21;
  var acc$7;
  var nfw$0;
  var nbw$0;
  var ndflt$0;
  var extract_length$0;
  var check_length$0;
  var lo$0;
  var hi$0;
  var t$6;
  var len$0;
  var fw$1;
  var bw$1;
  var dflt$0;
  var rest$3;
  var subp$8;
  var xs$3;
  var xs$2;
  var patt$1;
  var projector$1;
  var subp$7;
  var unconditional$1;
  var ph$0$0;
  var checker$2;
  var subp$6;
  var checker$1;
  var condition$1;
  var subp$5;
  var kind$0;
  var sym$0;
  var $$18059$0;
  var $$18060$0;
  var $$18061$0;
  var $$18062$0;
  var m$13$0;
  var rval$2;
  var $it$7;
  var self$5;
  $it$7 = this;
  self$5 = this;
  rval$2 = ((m$13$0 = pattern$2), (((x$11 = m$13$0), ((x$11 instanceof Array) && (x$11[0] === "ignore"))) ? $it$7.do(rhs$0) : ((($$18059$0 = (m$13$0 instanceof Array)) && ((t0$9 = m$13$0.length), (($$18061$0 = (t0$9 === 2)) && (m$13$0[0] === "assign")))) ? ((sym$0 = m$13$0[1]), $it$7.parts.push(fns$0.assign(sym$0, rhs$0))) : (($$18061$0 && (m$13$0[0] === "special")) ? ((kind$0 = m$13$0[1]), $it$7.process(fns$0.special(pattern$2, rhs$0), rhs$0, fns$0)) : (($$18059$0 && (($$18061$0 = (t0$9 === 3)) && (m$13$0[0] === "test"))) ? ((condition$1 = m$13$0[1]), (subp$5 = m$13$0[2]), $it$7.process(subp$5, rhs$0, fns$0), $it$7.check(condition$1, ({"test": true}))) : (($$18061$0 && (($$18062$0 = (m$13$0[0] === "check")) && ((checker$1 = m$13$0[1]), (x$12 = m$13$0[2]), ((x$12 instanceof Array) && (x$12[0] === "ignore"))))) ? $it$7.check(["send", checker$1, ["data", rhs$0]]) : ($$18062$0 ? ((checker$2 = m$13$0[1]), (subp$6 = m$13$0[2]), (t$0 = $it$7.temp(rhs$0)), $it$7.check(["send", checker$2, ["data", t$0]]), $it$7.process(subp$6, t$0, fns$0)) : (($$18059$0 && ((t0$9 === 4) && (m$13$0[0] === "project"))) ? ((projector$1 = m$13$0[1]), (subp$7 = m$13$0[2]), (t1$6 = m$13$0[3]), (unconditional$1 = t1$6), (ph$0$0 = t1$6), ((ph$0$0 ? true : false) ? ((t$1 = $it$7.temp(["send", projector$1, ["data", rhs$0]])), $it$7.process(subp$7, t$1, fns$0)) : (ph$0$0, (t$2 = $it$7.temp(["send", projector$1, ["data", rhs$0]])), $it$7.check(["send", t$2, ["value", 0]]), $it$7.process(subp$7, ["send", t$2, ["value", 1]], fns$0)))) : (($$18059$0 && ((t0$9 === 2) && (m$13$0[0] === "neg"))) ? ((patt$1 = m$13$0[1]), $it$7.check(["send", ["symbol", "not"], ["data", ["void"], ((pp$2 = PatternProcessor$0()), pp$2.process(patt$1, rhs$0, fns$0), assemble_conditions$0(pp$2))]])) : (($$18059$0 && (($$18061$0 = (t0$9 >= 1)) && (m$13$0[0] === "all"))) ? ((xs$2 = Array.prototype.slice.call(m$13$0, 1)), (t$3 = $it$7.temp(rhs$0)), (m$14 = null), (function() {
    $11: for (var $__0 = xs$2[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$14 = $__1.value;
      {
        var x$13;
        x$13 = m$14;
        $it$7.process(x$13, t$3, fns$0);
      }
    }
  })(), null) : (($$18061$0 && (m$13$0[0] === "any")) ? ((xs$3 = Array.prototype.slice.call(m$13$0, 1)), (t$4 = $it$7.temp(rhs$0, ["symbol", gensym$0("bridge")])), $it$7.check(((fn$0 = (function(x$14, rest$2) {
    return ["send", ["symbol", "or"], ["data", x$14, rest$2]];
  })), (parts$0 = ((acc$5 = []), (m$15 = null), (function() {
    $12: for (var $__0 = xs$3[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$15 = $__1.value;
      {
        var pp$3;
        var x$15;
        x$15 = m$15;
        acc$5.push(((pp$3 = PatternProcessor$0()), pp$3.process(x$15, t$4, fns$0), assemble_conditions$0(pp$3)));
      }
    }
  })(), acc$5)), util$0.construct(parts$0, fn$0, ["symbol", "false"])))) : (($$18061$0 && (m$13$0[0] === "object_pattern")) ? ((subp$8 = Array.prototype.slice.call(m$13$0, 1)), (t$5 = $it$7.temp(rhs$0)), (acc$6 = []), (m$16 = null), (function() {
    $13: for (var $__0 = subp$8[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$16 = $__1.value;
      {
        var t3$1;
        var t2$2;
        var t1$7;
        var t0$10;
        var k$0;
        var v$6;
        t0$10 = m$16;
        if (((t0$10 instanceof Array) && ((t1$7 = t0$10.length), ((t1$7 === 2) && ((t2$2 = t0$10[0]), ((t2$2 instanceof Array) && ((t3$1 = t2$2.length), ((t3$1 === 2) && (t2$2[0] === "value"))))))))) {
          k$0 = t2$2[1];
          v$6 = t0$10[1];
          acc$6.push(($it$7.check(["send", ["symbol", "___hasprop"], ["data", t$5, ["value", k$0]]]), $it$7.process(v$6, ["send", t$5, ["value", k$0]], fns$0)));
        } else {
          ___match_error(m$16, "/home/olivier/git/earl-grey/src/pattern.eg", 8376, 8508);
        }
      }
    }
  })(), acc$6) : (($$18059$0 && ((t0$9 === 5) && (m$13$0[0] === "array_pattern"))) ? ((fw$1 = m$13$0[1]), (bw$1 = m$13$0[2]), (dflt$0 = m$13$0[3]), (rest$3 = m$13$0[4]), (nfw$0 = fw$1.length), (nbw$0 = bw$1.length), (ndflt$0 = dflt$0.length), (extract_length$0 = true), (check_length$0 = true), (lo$0 = (nfw$0 + nbw$0)), (hi$0 = (lo$0 + ndflt$0)), (t$6 = $it$7.temp(rhs$0)), (len$0 = $it$7.temp(["send", t$6, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "length"]]]])), $it$7.check(((m$17$0 = rest$3), ((m$17$0 ? true : false) ? ["send", ["symbol", ">="], ["data", len$0, ["value", lo$0]]] : (m$17$0, ((lo$0 === hi$0) ? ["send", ["symbol", "==="], ["data", len$0, ["value", lo$0]]] : ((otherwise$0 = m$17$0), ["send", ["symbol", "and"], ["data", ["send", ["symbol", ">="], ["data", len$0, ["value", lo$0]]], ["send", ["symbol", "<="], ["data", len$0, ["value", hi$0]]]]])))))), (m$18 = null), (function() {
    $14: for (var $__0 = enumerate(fw$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$18 = $__1.value;
      {
        var t1$8;
        var t0$11;
        var i$0;
        var m$19;
        t0$11 = m$18;
        if (((t0$11 instanceof Array) && ((t1$8 = t0$11.length), (t1$8 === 2)))) {
          i$0 = t0$11[0];
          m$19 = t0$11[1];
          $it$7.process(m$19, ["send", t$6, ["value", i$0]], fns$0);
        } else {
          ___match_error(m$18, "/home/olivier/git/earl-grey/src/pattern.eg", 9240, 9326);
        }
      }
    }
  })(), (m$20 = null), (function() {
    $15: for (var $__0 = enumerate(dflt$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$20 = $__1.value;
      {
        var t3$2;
        var t2$3;
        var t1$9;
        var idx$0;
        var t0$12;
        var i$1;
        var patt$2;
        var value$1;
        t0$12 = m$20;
        if (((t0$12 instanceof Array) && ((t1$9 = t0$12.length), ((t1$9 === 2) && ((i$1 = t0$12[0]), (t2$3 = t0$12[1]), ((t2$3 instanceof Array) && ((t3$2 = t2$3.length), (t3$2 === 2)))))))) {
          patt$2 = t2$3[0];
          value$1 = t2$3[1];
          idx$0 = (i$1 + nfw$0);
          $it$7.process(patt$2, ["send", ["symbol", "if"], ["data", ["send", ["symbol", ">="], ["data", ["value", (idx$0 + nbw$0)], len$0]], value$1, ["send", t$6, ["value", idx$0]]]], fns$0);
        } else {
          ___match_error(m$20, "/home/olivier/git/earl-grey/src/pattern.eg", 9326, 9495);
        }
      }
    }
  })(), ((rest$3 !== undefined) ? ((pos$0 = (nfw$0 + ndflt$0)), (end$0 = ((nbw$0 > 0) ? [["value", (-nbw$0)]] : [])), $it$7.process(rest$3, ["send", ["send", ["send", ["send", ["symbol", "Array"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "slice"]]]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "call"]]]], ["data", t$6, ["value", pos$0]].concat(end$0)], fns$0)) : []), (acc$7 = []), (m$21 = null), (function() {
    $16: for (var $__0 = enumerate(bw$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$21 = $__1.value;
      {
        var t1$10;
        var t0$13;
        var i$2;
        var m$22;
        t0$13 = m$21;
        if (((t0$13 instanceof Array) && ((t1$10 = t0$13.length), (t1$10 === 2)))) {
          i$2 = t0$13[0];
          m$22 = t0$13[1];
          acc$7.push($it$7.process(m$22, ["send", ["symbol", "___js_fetch"], ["data", t$6, ["send", ["symbol", "-"], ["data", len$0, ["value", (nbw$0 - i$2)]]]]], fns$0));
        } else {
          ___match_error(m$21, "/home/olivier/git/earl-grey/src/pattern.eg", 9946, 10097);
        }
      }
    }
  })(), acc$7) : ___match_error(m$13$0))))))))))))));
  return rval$2;
});
(PatternProcessor$0.prototype["process"] = $targ$19);
__amp____colon__(PatternProcessor$0, __amp____colon__((($targ$167 = "PatternProcessor"), (accum$2 = ({})), (accum$2["::name"] = $targ$167), accum$2), (($targ$168 = true), (accum$3 = ({})), (accum$3["::egclass"] = $targ$168), accum$3)));
PatternProcessor$0;
assemble_conditions$0 = (function(pp$4) {
  var m$24;
  var acc$8;
  var decls$0;
  var construct$0;
  construct$0 = (function(temp$0$0) {
    var t0$14;
    var $targ$173;
    var $targ$172;
    var $targ$175;
    var $targ$174;
    var $targ$177;
    var $targ$176;
    var x$18;
    var rest$5;
    var x$17;
    var x$16;
    var rest$4;
    var $$18429$0;
    var $$18430$0;
    var t1$11;
    var t2$4;
    var m$23$0;
    var ph$1;
    ph$1 = temp$0$0;
    m$23$0 = ph$1;
    if ((($$18429$0 = (m$23$0 instanceof Array)) && ((t0$14 = m$23$0.length), (t0$14 === 0)))) {
      return ["value", true];
    } else {
      if (($$18429$0 && ((t0$14 >= 1) && (($targ$172 = m$23$0[0]), (t1$11 = $targ$172), ((t1$11 instanceof Array) && (($targ$173 = t1$11.length), (t2$4 = $targ$173), ((t2$4 === 2) && (t1$11[0] === "do")))))))) {
        x$16 = t1$11[1];
        rest$4 = Array.prototype.slice.call(m$23$0, 1);
        return ["multi", x$16, construct$0(rest$4)];
      } else {
        if (($$18429$0 && ((t0$14 === 1) && (($targ$174 = m$23$0[0]), (t1$11 = $targ$174), ((t1$11 instanceof Array) && (($targ$175 = t1$11.length), (t2$4 = $targ$175), ((t2$4 === 2) && (t1$11[0] === "check")))))))) {
          x$17 = t1$11[1];
          return x$17;
        } else {
          if (($$18429$0 && ((t0$14 >= 1) && (($targ$176 = m$23$0[0]), (t1$11 = $targ$176), ((t1$11 instanceof Array) && (($targ$177 = t1$11.length), (t2$4 = $targ$177), ((t2$4 === 2) && (t1$11[0] === "check")))))))) {
            x$18 = t1$11[1];
            rest$5 = Array.prototype.slice.call(m$23$0, 1);
            return ["send", ["symbol", "and"], ["data", x$18, construct$0(rest$5)]];
          } else {
            return ___match_error(m$23$0);
          }
        }
      }
    }
  });
  if (pp$4.temps.length) {
    decls$0 = ((acc$8 = []), (m$24 = null), (function() {
      $17: for (var $__0 = pp$4.temps[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$24 = $__1.value;
        {
          var t$7;
          t$7 = m$24;
          acc$8.push(["declare", t$7]);
        }
      }
    })(), acc$8);
    return ["multi"].concat(decls$0).concat([construct$0(pp$4.parts)]);
  } else {
    return construct$0(pp$4.parts);
  }
});
assemble_pattern$0 = (function() {
  var m$26;
  var m$27;
  var test$0;
  var lead$0;
  var trail$0;
  var construct$1;
  var t0$15;
  var parts$1;
  var t$8;
  var f$2;
  var m$25$0;
  m$25$0 = arguments;
  t0$15 = m$25$0.length;
  if (((t0$15 >= 2) && (t0$15 <= 3))) {
    parts$1 = m$25$0[0];
    t$8 = m$25$0[1];
    f$2 = ((2 >= t0$15) ? null : m$25$0[2]);
    lead$0 = [];
    m$26 = null;
    $18: for (var $__0 = parts$1.slice(0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$26 = $__1.value;
      {
        var t1$12;
        var x$20;
        var t0$16;
        var x$19;
        var $$18540$0;
        var $$18541$0;
        var $$18542$0;
        var $$18543$0;
        t0$16 = m$26;
        if ((($$18541$0 = (t0$16 instanceof Array)) && ((t1$12 = t0$16.length), (($$18543$0 = (t1$12 === 2)) && (t0$16[0] === "do"))))) {
          x$19 = t0$16[1];
          lead$0.push(x$19);
          parts$1.shift();
        } else {
          if (($$18543$0 && (t0$16[0] === "check"))) {
            x$20 = t0$16[1];
            break $18;
          } else {
            ___match_error(m$26, "/home/olivier/git/earl-grey/src/pattern.eg", 10558, 10668);
          }
        }
      }
    }
    trail$0 = [];
    m$27 = null;
    $19: for (var $__2 = parts$1.slice(0).reverse()[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__3; !($__3 = $__2.next()).done; ) {
      m$27 = $__3.value;
      {
        var t1$13;
        var x$22;
        var t0$17;
        var x$21;
        var $$18547$0;
        var $$18548$0;
        var $$18549$0;
        var $$18550$0;
        t0$17 = m$27;
        if ((($$18548$0 = (t0$17 instanceof Array)) && ((t1$13 = t0$17.length), (($$18550$0 = (t1$13 === 2)) && (t0$17[0] === "do"))))) {
          x$21 = t0$17[1];
          trail$0.unshift(x$21);
          parts$1.pop();
        } else {
          if (($$18550$0 && (t0$17[0] === "check"))) {
            x$22 = t0$17[1];
            break $19;
          } else {
            ___match_error(m$27, "/home/olivier/git/earl-grey/src/pattern.eg", 10682, 10804);
          }
        }
      }
    }
    construct$1 = (function(temp$1$0) {
      var t0$18;
      var $targ$192;
      var $targ$191;
      var $targ$194;
      var $targ$193;
      var $targ$196;
      var $targ$195;
      var other$2;
      var x$25;
      var rest$7;
      var x$24;
      var x$23;
      var rest$6;
      var $$18614$0;
      var $$18615$0;
      var t1$14;
      var t2$5;
      var m$28$0;
      var ph$2;
      ph$2 = temp$1$0;
      m$28$0 = ph$2;
      if ((($$18614$0 = (m$28$0 instanceof Array)) && ((t0$18 = m$28$0.length), (t0$18 === 0)))) {
        return ["value", true];
      } else {
        if (($$18614$0 && ((t0$18 >= 1) && (($targ$191 = m$28$0[0]), (t1$14 = $targ$191), ((t1$14 instanceof Array) && (($targ$192 = t1$14.length), (t2$5 = $targ$192), ((t2$5 === 2) && (t1$14[0] === "do")))))))) {
          x$23 = t1$14[1];
          rest$6 = Array.prototype.slice.call(m$28$0, 1);
          return ["multi", x$23, construct$1(rest$6)];
        } else {
          if (($$18614$0 && ((t0$18 === 1) && (($targ$193 = m$28$0[0]), (t1$14 = $targ$193), ((t1$14 instanceof Array) && (($targ$194 = t1$14.length), (t2$5 = $targ$194), ((t2$5 === 2) && (t1$14[0] === "check")))))))) {
            x$24 = t1$14[1];
            return x$24;
          } else {
            if (($$18614$0 && ((t0$18 >= 1) && (($targ$195 = m$28$0[0]), (t1$14 = $targ$195), ((t1$14 instanceof Array) && (($targ$196 = t1$14.length), (t2$5 = $targ$196), ((t2$5 === 2) && (t1$14[0] === "check")))))))) {
              x$25 = t1$14[1];
              rest$7 = Array.prototype.slice.call(m$28$0, 1);
              return ["send", ["symbol", "and"], ["data", x$25, construct$1(rest$7)]];
            } else {
              other$2 = m$28$0;
              throw ErrorFactory(["oops"]).create("?!?", other$2);
            }
          }
        }
      }
    });
    if (parts$1.length) {
      test$0 = construct$1(parts$1);
      return ["multi"].concat(lead$0).concat([(f$2 ? ["send", ["symbol", "if"], ["data", test$0, ["multi"].concat(trail$0).concat([t$8]), f$2]] : ["send", ["symbol", "if"], ["data", test$0, ["multi"].concat(trail$0).concat([t$8])]])]);
    } else {
      return ["multi"].concat(lead$0).concat(trail$0).concat([t$8]);
    }
  } else {
    return ___match_error(m$25$0);
  }
});
inject_below_uses$0 = (function(temp$2$0, fn$1) {
  var t0$19;
  var other$3;
  var scope$0;
  var x$26;
  var m$29$0;
  var ph$3;
  ph$3 = temp$2$0;
  m$29$0 = ph$3;
  if (((m$29$0 instanceof Array) && ((t0$19 = m$29$0.length), ((t0$19 === 3) && (m$29$0[0] === "use"))))) {
    scope$0 = m$29$0[1];
    x$26 = m$29$0[2];
    return ["use", scope$0, inject_below_uses$0(x$26, fn$1)];
  } else {
    other$3 = m$29$0;
    return fn$1(other$3);
  }
});
find_target$0 = (function(rhs$1, temp$3$0) {
  var t0$20;
  var t0$21;
  var projector$2;
  var subp$9;
  var m$30$0;
  var ph$4;
  var pattern$3;
  t0$20 = temp$3$0;
  pattern$3 = t0$20;
  ph$4 = t0$20;
  m$30$0 = ph$4;
  if (((m$30$0 instanceof Array) && ((t0$21 = m$30$0.length), ((t0$21 === 4) && ((m$30$0[0] === "project") && ((projector$2 = m$30$0[1]), (subp$9 = m$30$0[2]), (m$30$0[3] === true))))))) {
    return find_target$0(["send", projector$2, ["data", rhs$1]], subp$9);
  } else {
    m$30$0;
    return [rhs$1, pattern$3];
  }
});
parse_pattern$0 = (function(info$3, pattern$4, rhs$2, opt$1) {
  var t0$22;
  var t1$15;
  var t0$23;
  var x$28;
  var x$29;
  var t1$16;
  var t0$24;
  var $targ$215;
  var bridge$$18761$0;
  var m$31$0;
  var m$32;
  var acc$9;
  var succ$0;
  var fail$0;
  var assembly$0;
  var parse$0;
  var $targ$204;
  var real_rhs$0;
  var $targ$205;
  var target$0;
  var $targ$206;
  var expr$1;
  var proc$0;
  parse$0 = PatternParser$0(info$3, pattern$4, opt$1);
  if (((!opt$1.allow_arguments) && parse$0.arguments.length)) {
    throw ErrorFactory(["syntax", "pattern", "arguments"]).create("Arguments cannot be declared in this pattern", ({"args": parse$0.arguments[0]}));
  }
  $targ$204 = (parse$0.arguments.length ? inject_below_uses$0(rhs$2, (function(x$27) {
    return util$0.construct(parse$0.arguments.concat([x$27]), (function(args$1, rest$8) {
      return ["send", ["symbol", "->"], ["data", args$1, rest$8]];
    }));
  })) : rhs$2);
  t0$22 = getProjector((opt$1.wrap_target || identity$0))($targ$204);
  if (t0$22[0]) {
    real_rhs$0 = t0$22[1];
  } else {
    ___match_error($targ$204);
  }
  $targ$205 = find_target$0(real_rhs$0, parse$0.pattern);
  t0$23 = $targ$205;
  if (((t0$23 instanceof Array) && ((t1$15 = t0$23.length), (t1$15 === 2)))) {
    target$0 = t0$23[0];
    pattern$4 = t0$23[1];
  } else {
    ___match_error($targ$205);
  }
  $targ$206 = null;
  expr$1 = $targ$206;
  m$31$0 = target$0;
  bridge$$18761$0 = m$31$0;
  if ((((x$28 = bridge$$18761$0), ((x$28 instanceof Array) && (x$28[0] === "symbol"))) || ((x$29 = bridge$$18761$0), ((x$29 instanceof Array) && (x$29[0] === "variable"))))) {
    undefined;
  } else {
    m$31$0;
    $targ$215 = [["variable", info$3.gensym("$targ")], target$0];
    t0$24 = $targ$215;
    if (((t0$24 instanceof Array) && ((t1$16 = t0$24.length), (t1$16 === 2)))) {
      target$0 = t0$24[0];
      expr$1 = t0$24[1];
    } else {
      ___match_error($targ$215);
    }
  }
  proc$0 = PatternProcessor$0();
  proc$0.process(pattern$4, target$0, opt$1);
  if (opt$1.finalize) {
    succ$0 = opt$1.success(target$0);
    fail$0 = opt$1.failure(target$0);
    assembly$0 = assemble_pattern$0(proc$0.parts, succ$0, fail$0);
    return ["splice", ((expr$1 === null) ? ["splice"] : ["splice", ["declare", target$0], ["assign", target$0, expr$1]])].concat(opt$1.declare(info$3, parse$0.vars)).concat([["multi"].concat(((acc$9 = []), (m$32 = null), (function() {
      $20: for (var $__0 = proc$0.temps[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$32 = $__1.value;
        {
          var t$9;
          t$9 = m$32;
          acc$9.push(["declare", t$9]);
        }
      }
    })(), acc$9)).concat([assembly$0])]);
  } else {
    return [parse$0.vars, proc$0.temps, proc$0.parts];
  }
});
checkall$0 = ["send", "data", "multi", "assign", "void", "check", "do"];
same_block$0 = (function(temp$4$0, ban1$0, ban2$0) {
  var $targ$227;
  var $targ$226;
  var t2$6;
  var t1$17;
  var t0$25;
  var $targ$229;
  var $targ$228;
  var $targ$231;
  var $targ$230;
  var $targ$233;
  var $targ$232;
  var $targ$235;
  var $targ$234;
  var m$34;
  var other$4;
  var type1$0;
  var args1$0;
  var type2$0;
  var args2$0;
  var m1$0;
  var m2$0;
  var v1$1;
  var v2$1;
  var s1$0;
  var s2$0;
  var v1$0;
  var v2$0;
  var $$18885$0;
  var $$18886$0;
  var $$18887$0;
  var $$18888$0;
  var $$18889$0;
  var $$18890$0;
  var $$18891$0;
  var t3$3;
  var t4$1;
  var m$33$0;
  var ph$5;
  ph$5 = temp$4$0;
  m$33$0 = ph$5;
  if ((($$18885$0 = (m$33$0 instanceof Array)) && ((t0$25 = m$33$0.length), (($$18887$0 = (t0$25 === 2)) && ((t1$17 = m$33$0[0]), (($$18889$0 = (t1$17 instanceof Array)) && ((t2$6 = t1$17.length), (($$18891$0 = (t2$6 === 2)) && ((t1$17[0] === "variable") && ((v1$0 = t1$17[1]), ($targ$226 = m$33$0[1]), (t3$3 = $targ$226), ((t3$3 instanceof Array) && (($targ$227 = t3$3.length), (t4$1 = $targ$227), ((t4$1 === 2) && (t3$3[0] === "variable")))))))))))))) {
    v2$0 = t3$3[1];
    return (v1$0 === v2$0);
  } else {
    if (($$18891$0 && ((t1$17[0] === "symbol") && ((s1$0 = t1$17[1]), ($targ$228 = m$33$0[1]), (t3$3 = $targ$228), ((t3$3 instanceof Array) && (($targ$229 = t3$3.length), (t4$1 = $targ$229), ((t4$1 === 2) && (t3$3[0] === "symbol")))))))) {
      s2$0 = t3$3[1];
      return (((!send(ban1$0, s1$0)) && (!send(ban2$0, s2$0))) && (s1$0 === s2$0));
    } else {
      if (($$18891$0 && ((t1$17[0] === "value") && ((v1$1 = t1$17[1]), ($targ$230 = m$33$0[1]), (t3$3 = $targ$230), ((t3$3 instanceof Array) && (($targ$231 = t3$3.length), (t4$1 = $targ$231), ((t4$1 === 2) && (t3$3[0] === "value")))))))) {
        v2$1 = t3$3[1];
        return (v1$1 === v2$1);
      } else {
        if (($$18891$0 && ((t1$17[0] === "macro") && ((m1$0 = t1$17[1]), ($targ$232 = m$33$0[1]), (t3$3 = $targ$232), ((t3$3 instanceof Array) && (($targ$233 = t3$3.length), (t4$1 = $targ$233), ((t4$1 === 2) && (t3$3[0] === "macro")))))))) {
          m2$0 = t3$3[1];
          return (m1$0 === m2$0);
        } else {
          if (($$18889$0 && ((t2$6 >= 1) && ((type1$0 = t1$17[0]), (args1$0 = Array.prototype.slice.call(t1$17, 1)), ($targ$234 = m$33$0[1]), (t3$3 = $targ$234), ((t3$3 instanceof Array) && (($targ$235 = t3$3.length), (t4$1 = $targ$235), ((t4$1 >= 1) && ((type2$0 = t3$3[0]), (args2$0 = Array.prototype.slice.call(t3$3, 1)), (checkall$0.indexOf(type1$0) !== -1))))))))) {
            if (((type1$0 === type2$0) && (args1$0.length === args2$0.length))) {
              m$34 = null;
              $21: for (var $__0 = zip(args1$0, args2$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__1; !($__1 = $__0.next()).done; ) {
                m$34 = $__1.value;
                {
                  var pair$0;
                  pair$0 = m$34;
                  if ((!same_block$0(pair$0, ban1$0, ban2$0))) {
                    return false;
                  }
                }
              }
              return true;
            } else {
              return false;
            }
          } else {
            other$4 = m$33$0;
            return false;
          }
        }
      }
    }
  }
});
parse_clauses$0 = (function(info$4, target$1, stmts$0, opt$2) {
  var m$35;
  var acc$10;
  var m$38;
  var acc$11;
  var m$39;
  var acc$12;
  var decls$1;
  var $targ$236;
  var all_temps$0;
  var the_parts$0;
  var unique_temps$0;
  $targ$236 = [];
  all_temps$0 = $targ$236;
  the_parts$0 = ((acc$10 = []), (m$35 = null), (function() {
    var $__4 = function() {
      m$35 = $__1.value;
      {
        var t1$18;
        var $targ$250;
        var accum$4;
        var t1$20;
        var t0$28;
        var m$37;
        var bod$0;
        var $targ$242;
        var placeholder$0;
        var special_fn$0;
        var $targ$244;
        var vars$2;
        var temps$0;
        var blocks$0;
        var vars2$0;
        var x$30;
        var other$7;
        var b$0;
        var t0$26;
        var pattern$5;
        var body$0;
        var $$19021$0;
        t0$26 = m$35;
        if (((t0$26 instanceof Array) && ((t1$18 = t0$26.length), ((t1$18 === 3) && (t0$26[0] === "clause"))))) {
          pattern$5 = t0$26[1];
          body$0 = t0$26[2];
          acc$10.push((($targ$242 = undefined), (placeholder$0 = $targ$242), (special_fn$0 = (function(temp$5$0, value$2) {
            var t1$19;
            var t0$27;
            var $targ$249;
            var other$5;
            var m$36$0;
            var ph$6;
            var expr$2;
            t0$27 = temp$5$0;
            if (((t0$27 instanceof Array) && ((t1$19 = t0$27.length), ((t1$19 === 2) && (t0$27[0] === "special"))))) {
              ph$6 = t0$27[1];
              expr$2 = t0$27;
            } else {
              ___match_error(temp$5$0);
            }
            m$36$0 = ph$6;
            if ((m$36$0 === "match")) {
              $targ$249 = __lt____lt____colon__$0(["symbol", info$4.gensym("ph")], expr$2);
              placeholder$0 = $targ$249;
              return ["assign", placeholder$0];
            } else {
              other$5 = m$36$0;
              throw ErrorFactory(["syntax", "pattern", "special"]).create("Special token cannot be used here", ({"special": expr$2}));
            }
          })), ($targ$244 = parse_pattern$0(info$4, pattern$5, target$1, __amp__(opt$2, __amp____colon__(({
            "allow_arguments": false,
            "allow_nested": true,
            "special": special_fn$0
          }), __amp____colon__((($targ$250 = (function(v$7, value$3) {
            return ["do", __lt____lt____colon__$0(["assign", v$7, value$3], v$7)];
          })), (accum$4 = ({})), (accum$4["assign"] = $targ$250), accum$4), ({"finalize": false})))))), (t0$28 = $targ$244), (((t0$28 instanceof Array) && ((t1$20 = t0$28.length), (t1$20 === 3))) ? ((vars$2 = t0$28[0]), (temps$0 = t0$28[1]), (blocks$0 = t0$28[2])) : ___match_error($targ$244)), (all_temps$0 = all_temps$0.concat(temps$0)), (placeholder$0 ? vars$2.push(placeholder$0) : undefined), (vars2$0 = ({})), (m$37 = null), (function() {
            $23: for (var $__0 = vars$2[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$37 = $__1.value;
              {
                var t1$21;
                var $targ$255;
                var other$6;
                var t0$29;
                var xxx$0;
                t0$29 = m$37;
                if (((t0$29 instanceof Array) && ((t1$21 = t0$29.length), ((t1$21 === 2) && (t0$29[0] === "symbol"))))) {
                  xxx$0 = t0$29[1];
                  $targ$255 = true;
                  (vars2$0[xxx$0] = $targ$255);
                } else {
                  other$6 = m$37;
                  throw ErrorFactory(["syntax", "unexpected"]).create();
                }
              }
            }
          })(), (bod$0 = (placeholder$0 ? parse_clauses$0(info$4, placeholder$0, getProjector(Body$0)(body$0)[1], opt$2) : (opt$2.wrap ? opt$2.wrap(body$0) : body$0))), ["clause", vars$2, vars2$0, blocks$0, bod$0]));
        } else {
          if (((x$30 = t0$26), ((x$30 instanceof Array) && (x$30[0] === "block")))) {
            b$0 = t0$26;
            acc$10.push(b$0);
          } else {
            other$7 = m$35;
            acc$10.push((function() {
              throw ErrorFactory(["syntax", "clause"]).create("Illegal clause", ({"clause": other$7}));
            })());
          }
        }
      }
    };
    $22: for (var $__0 = info$4.step_all(["clause"], stmts$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      $__4();
    }
  })(), acc$10);
  if (opt$2.fallback) {
    the_parts$0.push(["block", opt$2.fallback(target$1)]);
  }
  unique_temps$0 = keys(util$0.mkset(((acc$11 = []), (m$38 = null), (function() {
    $24: for (var $__0 = all_temps$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$38 = $__1.value;
      {
        var t1$22;
        var t0$30;
        var t$10;
        t0$30 = m$38;
        if (((t0$30 instanceof Array) && ((t1$22 = t0$30.length), ((t1$22 === 2) && (t0$30[0] === "symbol"))))) {
          t$10 = t0$30[1];
          acc$11.push(t$10);
        } else {
          ___match_error(m$38, "/home/olivier/git/earl-grey/src/pattern.eg", 15868, 15898);
        }
      }
    }
  })(), acc$11)));
  decls$1 = ((acc$12 = []), (m$39 = null), (function() {
    $25: for (var $__0 = unique_temps$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$39 = $__1.value;
      {
        var t$11;
        t$11 = m$39;
        acc$12.push(["declare", __amp____colon__(["symbol", t$11], ({"mutable": true}))]);
      }
    }
  })(), acc$12);
  return ["multi"].concat(decls$1).concat([weave_clauses$0(the_parts$0)]);
});
opt_clauses$0 = (function(clauses$0) {
  var m$40;
  var acc$13;
  var m$43;
  var acc$14;
  var m$44;
  var acc$15;
  var m$45;
  var acc$16;
  var shares$0;
  var max$0;
  var temps$1;
  var $targ$266;
  var shared_last$0;
  var $targ$267;
  var idx_last$0;
  var new_clauses$0;
  shares$0 = ((acc$13 = []), (m$40 = null), (function() {
    var $__5 = function() {
      m$40 = $__1.value;
      {
        var t3$4;
        var t2$7;
        var t1$23;
        var t1$24;
        var t0$32;
        var m$41;
        var $targ$274;
        var varsd0$0;
        var blocks0$0;
        var share$0;
        var $targ$276;
        var idx$1;
        var t0$31;
        var i$3;
        var vars$3;
        var varsd$0;
        var blocks$1;
        var body$1;
        t0$31 = m$40;
        if (((t0$31 instanceof Array) && ((t1$23 = t0$31.length), ((t1$23 === 2) && ((i$3 = t0$31[0]), (t2$7 = t0$31[1]), ((t2$7 instanceof Array) && ((t3$4 = t2$7.length), ((t3$4 === 5) && (t2$7[0] === "clause"))))))))) {
          vars$3 = t2$7[1];
          varsd$0 = t2$7[2];
          blocks$1 = t2$7[3];
          body$1 = t2$7[4];
          acc$13.push((($targ$274 = send(clauses$0, i$3)), (t0$32 = $targ$274), (((t0$32 instanceof Array) && ((t1$24 = t0$32.length), ((t1$24 === 5) && (t0$32[0] === "clause")))) ? (t0$32[1], (varsd0$0 = t0$32[2]), (blocks0$0 = t0$32[3]), t0$32[4]) : ___match_error($targ$274)), (share$0 = 0), ($targ$276 = 0), (idx$1 = $targ$276), (m$41 = null), (function() {
            $27: for (var $__0 = blocks$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$41 = $__1.value;
              {
                var x$31;
                var x$32;
                var $targ$282;
                var other$8;
                var m$42$0;
                var b$1;
                b$1 = m$41;
                if (same_block$0([send(blocks0$0, share$0), b$1], varsd0$0, varsd$0)) {
                  (share$0++);
                  m$42$0 = b$1;
                  if (((x$31 = m$42$0), ((x$31 instanceof Array) && (x$31[0] === "do")))) {
                    null;
                  } else {
                    if (((x$32 = m$42$0), ((x$32 instanceof Array) && (x$32[0] === "check")))) {
                      $targ$282 = share$0;
                      idx$1 = $targ$282;
                    } else {
                      other$8 = m$42$0;
                      __lt____gt__$0(null, other$8);
                    }
                  }
                } else {
                  break $27;
                }
              }
            }
          })(), [share$0, idx$1]));
        } else {
          ___match_error(m$40, "/home/olivier/git/earl-grey/src/pattern.eg", 16067, 16595);
        }
      }
    };
    $26: for (var $__0 = enumerate(clauses$0.slice(1))[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      $__5();
    }
  })(), acc$13);
  max$0 = send(Math.max, ((acc$14 = []), (m$43 = null), (function() {
    $28: for (var $__0 = shares$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$43 = $__1.value;
      {
        var t1$25;
        var t0$33;
        var x$33;
        t0$33 = m$43;
        if (((t0$33 instanceof Array) && ((t1$25 = t0$33.length), (t1$25 === 2)))) {
          x$33 = t0$33[0];
          t0$33[1];
          acc$14.push(x$33);
        } else {
          ___match_error(m$43, "/home/olivier/git/earl-grey/src/pattern.eg", 16609, 16634);
        }
      }
    }
  })(), acc$14));
  shares$0.push([0, 0]);
  temps$1 = ((acc$15 = []), (m$44 = null), (function() {
    $29: for (var $__0 = range(1, max$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$44 = $__1.value;
      {
        m$44;
        acc$15.push(["symbol", gensym$0()]);
      }
    }
  })(), acc$15);
  $targ$266 = 0;
  shared_last$0 = $targ$266;
  $targ$267 = 0;
  idx_last$0 = $targ$267;
  new_clauses$0 = ((acc$16 = []), (m$45 = null), (function() {
    var $__6 = function() {
      m$45 = $__1.value;
      {
        var t3$5;
        var t2$8;
        var t1$26;
        var t1$27;
        var t0$35;
        var m$46;
        var acc$17;
        var rest$9;
        var newblocks$0;
        var $targ$292;
        var share$1;
        var $targ$297;
        var shared$0;
        var n_to_share$0;
        var to_share$0;
        var $targ$296;
        var other$9;
        var t0$34;
        var i$4;
        var vars$4;
        var varsd$1;
        var blocks$2;
        var body$2;
        t0$34 = m$45;
        if (((t0$34 instanceof Array) && ((t1$26 = t0$34.length), ((t1$26 === 2) && ((i$4 = t0$34[0]), (t2$8 = t0$34[1]), ((t2$8 instanceof Array) && ((t3$5 = t2$8.length), ((t3$5 === 5) && (t2$8[0] === "clause"))))))))) {
          vars$4 = t2$8[1];
          varsd$1 = t2$8[2];
          blocks$2 = t2$8[3];
          body$2 = t2$8[4];
          acc$16.push((($targ$292 = send(shares$0, i$4)), (t0$35 = $targ$292), (((t0$35 instanceof Array) && ((t1$27 = t0$35.length), (t1$27 === 2))) ? ((share$1 = t0$35[0]), ($targ$297 = t0$35[1])) : ___match_error($targ$292)), (shared$0 = (idx_last$0 ? [["check", send(temps$1, (idx_last$0 - 1))]] : [])), (n_to_share$0 = Math.max(shared_last$0, share$1)), (to_share$0 = ((acc$17 = []), (m$46 = null), (function() {
            $31: for (var $__0 = enumerate(blocks$2.slice(shared_last$0, n_to_share$0))[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$46 = $__1.value;
              {
                var $targ$304;
                var $targ$303;
                var t1$28;
                var $targ$306;
                var $targ$305;
                var j$1;
                var x$35;
                var t0$36;
                var j$0;
                var x$34;
                var $$19454$0;
                var $$19455$0;
                var $$19456$0;
                var $$19457$0;
                var t2$9;
                var t3$6;
                t0$36 = m$46;
                if ((($$19455$0 = (t0$36 instanceof Array)) && ((t1$28 = t0$36.length), (($$19457$0 = (t1$28 === 2)) && ((j$0 = t0$36[0]), ($targ$303 = t0$36[1]), (t2$9 = $targ$303), ((t2$9 instanceof Array) && (($targ$304 = t2$9.length), (t3$6 = $targ$304), ((t3$6 === 2) && (t2$9[0] === "check"))))))))) {
                  x$34 = t2$9[1];
                  acc$17.push(["check", ["assign", send(temps$1, (shared_last$0 + j$0)), x$34]]);
                } else {
                  if (($$19457$0 && ((j$1 = t0$36[0]), ($targ$305 = t0$36[1]), (t2$9 = $targ$305), ((t2$9 instanceof Array) && (($targ$306 = t2$9.length), (t3$6 = $targ$306), ((t3$6 === 2) && (t2$9[0] === "do"))))))) {
                    x$35 = t2$9[1];
                    acc$17.push(["do", x$35]);
                  } else {
                    ___match_error(m$46, "/home/olivier/git/earl-grey/src/pattern.eg", 17015, 17186);
                  }
                }
              }
            }
          })(), acc$17)), ($targ$296 = share$1), (shared_last$0 = $targ$296), (idx_last$0 = $targ$297), (newblocks$0 = ((rest$9 = blocks$2.slice(n_to_share$0)), shared$0.concat(to_share$0).concat(rest$9))), ["clause", vars$4, varsd$1, newblocks$0, body$2]));
        } else {
          other$9 = m$45;
          acc$16.push((function() {
            throw ErrorFactory(["oops"]).create("what", ({"value": other$9}));
          })());
        }
      }
    };
    $30: for (var $__0 = enumerate(clauses$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      $__6();
    }
  })(), acc$16);
  return [temps$1, new_clauses$0];
});
weave_clauses$0 = (function(parts$2) {
  var m$47;
  var m$51;
  var acc$19;
  var groups$0;
  var $targ$310;
  var reassemble$0;
  var $targ$311;
  var new_temps$0;
  var helper$0;
  groups$0 = classify_contiguous$0(parts$2, (function(temp$6$0) {
    var t1$29;
    var t0$37;
    var cls$0;
    t0$37 = temp$6$0;
    if (((t0$37 instanceof Array) && ((t1$29 = t0$37.length), (t1$29 >= 1)))) {
      cls$0 = t0$37[0];
      Array.prototype.slice.call(t0$37, 1);
    } else {
      ___match_error(temp$6$0);
    }
    return cls$0;
  }));
  $targ$310 = [];
  reassemble$0 = $targ$310;
  $targ$311 = [];
  new_temps$0 = $targ$311;
  m$47 = null;
  $32: for (var $__0 = groups$0[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$47 = $__1.value;
    {
      var t1$30;
      var t1$31;
      var t0$39;
      var $targ$317;
      var ts$0;
      var new_clauses$1;
      var elems$1;
      var t0$38;
      var elems$0;
      var $$19548$0;
      var $$19549$0;
      var $$19550$0;
      var $$19551$0;
      t0$38 = m$47;
      if ((($$19549$0 = (t0$38 instanceof Array)) && ((t1$30 = t0$38.length), (($$19551$0 = (t1$30 >= 1)) && (t0$38[0] === "clause"))))) {
        elems$0 = Array.prototype.slice.call(t0$38, 1);
        $targ$317 = opt_clauses$0(elems$0);
        t0$39 = $targ$317;
        if (((t0$39 instanceof Array) && ((t1$31 = t0$39.length), (t1$31 === 2)))) {
          ts$0 = t0$39[0];
          new_clauses$1 = t0$39[1];
        } else {
          ___match_error($targ$317);
        }
        new_temps$0 = new_temps$0.concat(ts$0);
        reassemble$0 = reassemble$0.concat(new_clauses$1);
      } else {
        if (($$19551$0 && (t0$38[0] === "block"))) {
          elems$1 = Array.prototype.slice.call(t0$38, 1);
          reassemble$0 = reassemble$0.concat(elems$1);
        } else {
          ___match_error(m$47, "/home/olivier/git/earl-grey/src/pattern.eg", 17629, 17834);
        }
      }
    }
  }
  helper$0 = (function(temp$7$0) {
    var t0$40;
    var t5$1;
    var t4$2;
    var t3$7;
    var t2$10;
    var t1$32;
    var m$49;
    var acc$18;
    var decls$2;
    var vars$5;
    var varsd$2;
    var blocks$3;
    var body$4;
    var rest$11;
    var body$3;
    var rest$10;
    var $$19623$0;
    var $$19624$0;
    var $$19625$0;
    var $$19626$0;
    var $$19627$0;
    var $$19628$0;
    var m$48$0;
    var ph$7;
    ph$7 = temp$7$0;
    m$48$0 = ph$7;
    if ((($$19623$0 = (m$48$0 instanceof Array)) && ((t0$40 = m$48$0.length), (t0$40 === 0)))) {
      return ["multi"];
    } else {
      if (($$19623$0 && (($$19625$0 = (t0$40 >= 1)) && ((t1$32 = m$48$0[0]), (($$19627$0 = (t1$32 instanceof Array)) && ((t2$10 = t1$32.length), ((t2$10 === 2) && ((t1$32[0] === "block") && ((t3$7 = getProjector(Body$0)(t1$32[1])), (t3$7[0] && ((t4$2 = t3$7[1]), (t5$1 = t4$2.length), (t5$1 >= 0)))))))))))) {
        body$3 = Array.prototype.slice.call(t4$2, 0);
        rest$10 = Array.prototype.slice.call(m$48$0, 1);
        return ["multi"].concat(body$3).concat([helper$0(rest$10)]);
      } else {
        if (($$19627$0 && ((t2$10 === 5) && (t1$32[0] === "clause")))) {
          vars$5 = t1$32[1];
          varsd$2 = t1$32[2];
          blocks$3 = t1$32[3];
          body$4 = t1$32[4];
          rest$11 = Array.prototype.slice.call(m$48$0, 1);
          decls$2 = ((acc$18 = []), (m$49 = null), (function() {
            $33: for (var $__2 = vars$5[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__3; !($__3 = $__2.next()).done; ) {
              m$49 = $__3.value;
              {
                var bridge$$19699$0;
                var m$50$0;
                var v$8;
                v$8 = m$49;
                acc$18.push(((m$50$0 = v$8.declare_mode), ((m$50$0 === "set") ? ["splice"] : ((m$50$0 === "let") ? ["declare", __amp__(v$8, ({"mutable": false}))] : ((m$50$0 === "var") ? ["declare", __amp__(v$8, ({"mutable": true}))] : ((bridge$$19699$0 = m$50$0), (((bridge$$19699$0 === "unqualified") || (bridge$$19699$0 === (void 0))) ? ["declare", __amp__(v$8, ({"mutable": false}))] : ___match_error(m$50$0))))))));
              }
            }
          })(), acc$18);
          return ["tagscope", "back", ["multi"].concat(decls$2).concat([assemble_pattern$0(blocks$3, body$4, ["use", "back", helper$0(rest$11)])])];
        } else {
          return ___match_error(m$48$0);
        }
      }
    }
  });
  return ["multi"].concat(((acc$19 = []), (m$51 = null), (function() {
    $34: for (var $__2 = new_temps$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__3; !($__3 = $__2.next()).done; ) {
      m$51 = $__3.value;
      {
        var t$12;
        t$12 = m$51;
        acc$19.push(["declare", t$12]);
      }
    }
  })(), acc$19)).concat([helper$0(reassemble$0)]);
});
$targ$332 = PatternParser$0;
(exports["PatternParser"] = $targ$332);
$targ$333 = PatternProcessor$0;
(exports["PatternProcessor"] = $targ$333);
$targ$334 = parse_clauses$0;
(exports["parse_clauses"] = $targ$334);
$targ$335 = parse_pattern$0;
(exports["parse_pattern"] = $targ$335);
//# sourceURL=<compile-source>
