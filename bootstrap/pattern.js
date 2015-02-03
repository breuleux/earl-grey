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
var accum$8;
var accum$9;
var $targ$29;
var $targ$30;
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
var PatternInfo$0;
var PatternCompiler$0;
var PatternProcessor$0;
var assemble_conditions$0;
var assemble_pattern$0;
var inject_below_uses$0;
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
PatternInfo$0 = (function PatternInfo() {
  var t0$0;
  var m$0$0;
  var $it$0;
  if ((!getChecker(PatternInfo$0)(this))) {
    $it$0 = Object.create(PatternInfo$0.prototype);
  } else {
    $it$0 = this;
  }
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (((t0$0 >= 0) && (t0$0 <= 3))) {
    ($it$0["handlers"] = ((0 >= t0$0) ? [] : m$0$0[0]));
    ($it$0["vars"] = ((1 >= t0$0) ? [] : m$0$0[1]));
    ($it$0["arguments"] = ((2 >= t0$0) ? [] : m$0$0[2]));
    undefined;
  } else {
    ___match_error(m$0$0);
  }
  return $it$0;
});
__amp____colon__(((accum$0 = ({})), (accum$0["mergeAll"] = (function mergeAll(pinfos$0) {
  var f$0;
  var rval$0;
  rval$0 = PatternInfo$0();
  f$0 = (function f(acc$0, pinfo$0) {
    return acc$0.merge((pinfo$0.pinfo || pinfo$0));
  });
  return pinfos$0.reduce(f$0, rval$0);
})), accum$0), __amp____colon__(((accum$1 = ({})), (accum$1["::name"] = "PatternInfo"), accum$1), ((accum$2 = ({})), (accum$2["::egclass"] = true), accum$2)));
(PatternInfo$0.prototype["merge"] = (function merge(pinfo$1) {
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  ($it$1["handlers"] = $it$1.handlers.concat(pinfo$1.handlers));
  ($it$1["vars"] = $it$1.vars.concat(pinfo$1.vars));
  ($it$1["arguments"] = $it$1.arguments.concat(pinfo$1.arguments));
  return $it$1;
}));
__amp____colon__(PatternInfo$0, __amp____colon__(((accum$3 = ({})), (accum$3["mergeAll"] = (function mergeAll(pinfos$1) {
  var f$1;
  var rval$1;
  rval$1 = PatternInfo$0();
  f$1 = (function f(acc$1, pinfo$2) {
    return acc$1.merge((pinfo$2.pinfo || pinfo$2));
  });
  return pinfos$1.reduce(f$1, rval$1);
})), accum$3), __amp____colon__(((accum$4 = ({})), (accum$4["::name"] = "PatternInfo"), accum$4), ((accum$5 = ({})), (accum$5["::egclass"] = true), accum$5))));
PatternCompiler$0 = (function PatternCompiler(temp$0$0, temp$1$0, temp$2$0) {
  var $it$2;
  if ((!getChecker(PatternCompiler$0)(this))) {
    $it$2 = Object.create(PatternCompiler$0.prototype);
  } else {
    $it$2 = this;
  }
  ($it$2["pattern"] = temp$0$0);
  ($it$2["info"] = temp$1$0);
  ($it$2["opt"] = temp$2$0);
  return $it$2;
});
(PatternCompiler$0.prototype["compile"] = (function compile() {
  var tags$0;
  var $targ$0;
  var $targ$1;
  var $targ$2;
  var $targ$3;
  var $targ$4;
  var $targ$5;
  var $it$3;
  var self$1;
  $it$3 = this;
  self$1 = this;
  if ($it$3.compiled) {
    return $it$3.compiled;
  }
  tags$0 = clone(($it$3.opt.tags || ({})));
  (tags$0["group_id"] = (tags$0.group_id || gensym$0("group")));
  $targ$0 = $it$3.expand($it$3.pattern, tags$0, true, $it$3.opt.indexable);
  ($it$3["compiled"] = $targ$0);
  [];
  $targ$1 = $it$3.info;
  ($it$3.compiled.pinfo["info"] = $targ$1);
  [];
  $targ$2 = $it$3.opt;
  ($it$3.compiled.pinfo["opt"] = $targ$2);
  [];
  $targ$3 = $it$3.compiled.pinfo.vars;
  ($it$3["vars"] = $targ$3);
  [];
  $targ$4 = $it$3.compiled.pinfo.handlers;
  ($it$3["handlers"] = $targ$4);
  [];
  $targ$5 = $it$3.compiled.pinfo.arguments;
  ($it$3["arguments"] = $targ$5);
  [];
  return $it$3.compiled;
}));
(PatternCompiler$0.prototype["fork"] = (function fork(pattern$0) {
  var pc$0;
  var $targ$6;
  var $it$4;
  var self$2;
  $it$4 = this;
  self$2 = this;
  pc$0 = PatternCompiler$0(null, $it$4.info, $it$4.opt);
  $targ$6 = pattern$0;
  (pc$0["compiled"] = $targ$6);
  [];
  __amp____colon__(pc$0, pattern$0.pinfo);
  return pc$0;
}));
(PatternCompiler$0.prototype["parse_specs"] = (function parse_specs(specs$0, tags$1) {
  var m$1;
  var acc$2;
  var temp$3;
  var rest$0;
  var has_defaults$0;
  var rval$2;
  var $targ$7;
  var $it$5;
  var self$3;
  $it$5 = this;
  self$3 = this;
  rest$0 = undefined;
  has_defaults$0 = false;
  rval$2 = classify$0("fw", "bw", "keys", "defaults", ((acc$2 = []), (temp$3 = null), (m$1 = null), (function() {
    $4: for (var $__0 = $it$5.info.step_all(["pattern"], specs$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$1 = $__1.value;
      {
        var v$1;
        var v$0;
        var variable$1;
        var value$0;
        var key$1;
        var subp$0;
        var key$0;
        var variable$0;
        var $$18802$0;
        var $$18803$0;
        var $$18804$0;
        var $$18805$0;
        var t0$1;
        var t1$0;
        t0$1 = m$1;
        if ((($$18803$0 = (t0$1 instanceof Array)) && ((t1$0 = t0$1.length), (($$18805$0 = (t1$0 === 2)) && (t0$1[0] === "dynsplice"))))) {
          variable$0 = t0$1[1];
          rest$0 = $it$5.expand(variable$0, tags$1);
          temp$3 = ["ignore"];
          acc$2.push(temp$3);
        } else {
          if (($$18805$0 && (t0$1[0] === "assoc"))) {
            key$0 = t0$1[1];
            temp$3 = ["keys", [key$0, $it$5.expand(key$0, tags$1)]];
            acc$2.push(temp$3);
          } else {
            if (($$18803$0 && (($$18805$0 = (t1$0 === 3)) && (t0$1[0] === "assoc")))) {
              key$1 = t0$1[1];
              subp$0 = t0$1[2];
              temp$3 = ["keys", [key$1, $it$5.expand(subp$0, tags$1)]];
              acc$2.push(temp$3);
            } else {
              if (($$18805$0 && (t0$1[0] === "default"))) {
                variable$1 = t0$1[1];
                value$0 = t0$1[2];
                has_defaults$0 = true;
                if (rest$0) {
                  throw ErrorFactory(["syntax", "pattern"]).create("No default arguments after rest arg.");
                } else {
                  temp$3 = ["defaults", [$it$5.expand(variable$1, tags$1), value$0]];
                }
                acc$2.push(temp$3);
              } else {
                v$0 = m$1;
                if (((rest$0 === undefined) && (!has_defaults$0))) {
                  temp$3 = ["fw", $it$5.expand(v$0, tags$1)];
                  acc$2.push(temp$3);
                } else {
                  v$1 = m$1;
                  temp$3 = ["bw", $it$5.expand(v$1, tags$1)];
                  acc$2.push(temp$3);
                }
              }
            }
          }
        }
      }
    }
  })(), acc$2));
  $targ$7 = rest$0;
  (rval$2["rest"] = $targ$7);
  [];
  return rval$2;
}));
(PatternCompiler$0.prototype["expand"] = (function expand() {
  var x$0;
  var x$1;
  var p$0;
  var x$2;
  var x$3;
  var variable$2;
  var variable$3;
  var csubp$0;
  var csubp$1;
  var csubp$2;
  var csubp$3;
  var x$4;
  var fn$0;
  var $targ$8;
  var msg$0;
  var msg$1;
  var cx$0;
  var m$4;
  var acc$3;
  var temp$4;
  var cxs$0;
  var m$6;
  var acc$5;
  var temp$6;
  var m$7;
  var canon$0;
  var normalize$0;
  var pps$0;
  var m$9;
  var acc$6;
  var temp$7;
  var m$10;
  var acc$7;
  var temp$8;
  var m$11;
  var acc$8;
  var temp$9;
  var m$12;
  var acc$9;
  var temp$10;
  var patt$0;
  var msg$2;
  var other$0;
  var keys$0;
  var fw$0;
  var bw$0;
  var defaults$0;
  var rest$1;
  var $$19271$0;
  var t0$10;
  var t1$6;
  var t2$2;
  var t3$0;
  var t4$0;
  var t5$0;
  var m$8$0;
  var specs$1;
  var pinfos$2;
  var pinfo$3;
  var other$1;
  var mode$0;
  var subp$5;
  var args$1;
  var xs$1;
  var xs$0;
  var x$5;
  var f$3;
  var arg$0;
  var f$2;
  var args$0;
  var checker$0;
  var subp$4;
  var projector$0;
  var subp$3;
  var unconditional$0;
  var condition$0;
  var subp$2;
  var subp$1;
  var value$1;
  var v$3;
  var v$2;
  var handler$0;
  var $$18952$0;
  var $$18953$0;
  var $$18954$0;
  var $$18955$0;
  var t0$3;
  var bridge$$18936$0;
  var t1$1;
  var m$3$0;
  var $targ$9;
  var expr$0;
  var rval$3;
  var pattern$1;
  var tags$2;
  var toplevel$0;
  var checked$0;
  var t0$2;
  var m$2$0;
  var $it$6;
  var self$4;
  $it$6 = this;
  self$4 = this;
  m$2$0 = arguments;
  t0$2 = m$2$0.length;
  if (((t0$2 >= 2) && (t0$2 <= 4))) {
    pattern$1 = m$2$0[0];
    tags$2 = m$2$0[1];
    if ((2 >= t0$2)) {
      toplevel$0 = false;
    } else {
      toplevel$0 = m$2$0[2];
    }
    if ((3 >= t0$2)) {
      checked$0 = false;
    } else {
      checked$0 = m$2$0[3];
    }
    expr$0 = $it$6.info.step(["pattern"], pattern$1);
    m$3$0 = expr$0;
    if (((x$0 = m$3$0), ((x$0 instanceof Array) && (x$0[0] === "void")))) {
      rval$3 = ["check", checker_db$0.null, ["ignore"]];
    } else {
      if (((x$1 = m$3$0), ((x$1 instanceof Array) && (x$1[0] === "ignore")))) {
        rval$3 = expr$0;
      } else {
        if (((m$3$0 instanceof Array) && ((t0$3 = m$3$0.length), ((t0$3 === 2) && (m$3$0[0] === "special"))))) {
          handler$0 = m$3$0[1];
          p$0 = $it$6.expand(handler$0.expand($it$6.info), tags$2, toplevel$0, false);
          p$0.pinfo.handlers.push(handler$0);
          rval$3 = p$0;
        } else {
          bridge$$18936$0 = m$3$0;
          if ((((x$2 = bridge$$18936$0), ((x$2 instanceof Array) && (x$2[0] === "symbol"))) || ((x$3 = bridge$$18936$0), ((x$3 instanceof Array) && (x$3[0] === "variable"))))) {
            variable$2 = __amp__(expr$0, tags$2);
            rval$3 = __amp____colon__(["assign", variable$2], ({"pinfo": PatternInfo$0([], [variable$2])}));
          } else {
            if ((($$18952$0 = (m$3$0 instanceof Array)) && ((t0$3 = m$3$0.length), (($$18954$0 = (t0$3 === 2)) && (($$18955$0 = (m$3$0[0] === "value")) && ((v$2 = m$3$0[1]), $it$6.opt.strings_as_variables)))))) {
              variable$3 = __lt____lt____colon__$0(__amp__(["symbol", v$2], tags$2), expr$0);
              rval$3 = __amp____colon__(["assign", variable$3], ({"pinfo": PatternInfo$0([], [variable$3])}));
            } else {
              if ($$18955$0) {
                v$3 = m$3$0[1];
                rval$3 = ["check", checker_db$0(v$3), ["ignore"]];
              } else {
                if (($$18952$0 && (($$18954$0 = (t0$3 === 3)) && (m$3$0[0] === "replace")))) {
                  subp$1 = m$3$0[1];
                  value$1 = m$3$0[2];
                  csubp$0 = $it$6.expand(subp$1, tags$2, toplevel$0, false);
                  rval$3 = __amp____colon__(["replace", csubp$0, value$1], ({"pinfo": csubp$0.pinfo}));
                } else {
                  if (($$18954$0 && (m$3$0[0] === "test"))) {
                    condition$0 = m$3$0[1];
                    subp$2 = m$3$0[2];
                    csubp$1 = $it$6.expand(subp$2, tags$2, toplevel$0, false);
                    rval$3 = __amp____colon__(["test", condition$0, csubp$1], ({"pinfo": csubp$1.pinfo}));
                  } else {
                    if (($$18952$0 && (((t0$3 >= 3) && (t0$3 <= 4)) && (m$3$0[0] === "project")))) {
                      projector$0 = m$3$0[1];
                      subp$3 = m$3$0[2];
                      if ((3 >= t0$3)) {
                        unconditional$0 = false;
                      } else {
                        unconditional$0 = m$3$0[3];
                      }
                      csubp$2 = $it$6.expand(subp$3, tags$2, toplevel$0, true);
                      rval$3 = __amp____colon__(["project", projector$0, csubp$2, unconditional$0], ({"pinfo": csubp$2.pinfo}));
                    } else {
                      if (($$18952$0 && (($$18954$0 = (t0$3 === 3)) && (m$3$0[0] === "check")))) {
                        checker$0 = m$3$0[1];
                        subp$4 = m$3$0[2];
                        csubp$3 = $it$6.expand(subp$4, tags$2, toplevel$0, true);
                        rval$3 = __amp____colon__(["check", checker$0, csubp$3], ({"pinfo": csubp$3.pinfo}));
                      } else {
                        if (($$18954$0 && (($$18955$0 = (m$3$0[0] === "send")) && ((f$2 = m$3$0[1]), (t1$1 = m$3$0[2]), (x$4 = t1$1), ((x$4 instanceof Array) && (x$4[0] === "data")))))) {
                          args$0 = t1$1;
                          if (toplevel$0) {
                            fn$0 = $it$6.expand(f$2, tags$2, true, false);
                            $targ$8 = PatternInfo$0.mergeAll([fn$0.pinfo, PatternInfo$0([], [], [args$0])]);
                            (fn$0["pinfo"] = $targ$8);
                            [];
                            rval$3 = fn$0;
                          } else {
                            msg$0 = "Function arguments can only be declared as a top level pattern.";
                            throw ErrorFactory(["syntax", "pattern"]).create(msg$0, ({
                              "node": expr$0,
                              "arg": args$0
                            }));
                          }
                        } else {
                          if ($$18955$0) {
                            f$3 = m$3$0[1];
                            arg$0 = m$3$0[2];
                            rval$3 = ["assign", expr$0];
                          } else {
                            if ((!$it$6.opt.allow_nested)) {
                              msg$1 = "Nested patterns are not allowed here.";
                              throw ErrorFactory(["syntax", "pattern"]).create(msg$1, ({"node": expr$0}));
                            } else {
                              if ((($$18952$0 = (m$3$0 instanceof Array)) && ((t0$3 = m$3$0.length), ((t0$3 === 2) && (m$3$0[0] === "neg"))))) {
                                x$5 = m$3$0[1];
                                cx$0 = $it$6.expand(x$5, tags$2);
                                rval$3 = __amp____colon__(["neg", cx$0], ({"pinfo": cx$0.pinfo}));
                              } else {
                                if (($$18952$0 && (($$18954$0 = (t0$3 >= 1)) && (m$3$0[0] === "all")))) {
                                  xs$0 = Array.prototype.slice.call(m$3$0, 1);
                                  acc$3 = [];
                                  temp$4 = null;
                                  m$4 = null;
                                  $5: for (var $__0 = xs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                      $__1; !($__1 = $__0.next()).done; ) {
                                    m$4 = $__1.value;
                                    {
                                      var x$6;
                                      x$6 = m$4;
                                      temp$4 = $it$6.expand(x$6, tags$2);
                                      acc$3.push(temp$4);
                                    }
                                  }
                                  cxs$0 = acc$3;
                                  rval$3 = __amp____colon__(["all"].concat(cxs$0), ({"pinfo": PatternInfo$0.mergeAll(cxs$0)}));
                                } else {
                                  if (($$18954$0 && (m$3$0[0] === "any"))) {
                                    xs$1 = Array.prototype.slice.call(m$3$0, 1);
                                    canon$0 = (function canon(all$0) {
                                      return all$0.sort().join(",");
                                    });
                                    normalize$0 = (function normalize(vars$0) {
                                      var m$5;
                                      var acc$4;
                                      var temp$5;
                                      return canon$0(((acc$4 = []), (temp$5 = null), (m$5 = null), (function() {
                                        $7: for (var $__2 = vars$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__3; !($__3 = $__2.next()).done; ) {
                                          m$5 = $__3.value;
                                          {
                                            var v$4;
                                            var t0$4;
                                            var t1$2;
                                            t0$4 = m$5;
                                            if (((t0$4 instanceof Array) && ((t1$2 = t0$4.length), ((t1$2 === 2) && (t0$4[0] === "symbol"))))) {
                                              v$4 = t0$4[1];
                                              temp$5 = v$4;
                                              acc$4.push(temp$5);
                                            } else {
                                              ___match_error(m$5, "/home/olivier/git/earl-grey/src/pattern.eg", 5067, 5092);
                                            }
                                          }
                                        }
                                      })(), acc$4));
                                    });
                                    acc$5 = [];
                                    temp$6 = null;
                                    m$6 = null;
                                    $8: for (var $__2 = xs$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                                        $__3; !($__3 = $__2.next()).done; ) {
                                      m$6 = $__3.value;
                                      {
                                        var x$7;
                                        x$7 = m$6;
                                        temp$6 = $it$6.expand(x$7, tags$2);
                                        acc$5.push(temp$6);
                                      }
                                    }
                                    pps$0 = acc$5;
                                    m$7 = null;
                                    $6: for (var $__4 = neighbours(pps$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                        $__5; !($__5 = $__4.next()).done; ) {
                                      m$7 = $__5.value;
                                      {
                                        var v1$0;
                                        var v2$0;
                                        var pp1$0;
                                        var pp2$0;
                                        var t0$5;
                                        var t1$3;
                                        t0$5 = m$7;
                                        if (((t0$5 instanceof Array) && ((t1$3 = t0$5.length), (t1$3 === 2)))) {
                                          pp1$0 = t0$5[0];
                                          pp2$0 = t0$5[1];
                                          v1$0 = pp1$0.pinfo.vars;
                                          v2$0 = pp2$0.pinfo.vars;
                                          if ((normalize$0(v1$0) !== normalize$0(v2$0))) {
                                            throw ErrorFactory(["syntax", "pattern"]).create("Both branches of 'or' must contain the same variables", ({
                                              "vars1": __lt____lt____colon__$0(v1$0.sort(), pp1$0),
                                              "vars2": __lt____lt____colon__$0(v2$0.sort(), pp2$0)
                                            }));
                                          }
                                        } else {
                                          ___match_error(m$7, "/home/olivier/git/earl-grey/src/pattern.eg", 5154, 5937);
                                        }
                                      }
                                    }
                                    rval$3 = __amp____colon__(["any"].concat(pps$0), ({"pinfo": (pps$0[0] && pps$0[0].pinfo)}));
                                  } else {
                                    if (($$18954$0 && (m$3$0[0] === "data"))) {
                                      args$1 = Array.prototype.slice.call(m$3$0, 1);
                                      specs$1 = $it$6.parse_specs(args$1, tags$2);
                                      pinfos$2 = [];
                                      pinfos$2 = pinfos$2.concat(((acc$6 = []), (temp$7 = null), (m$9 = null), (function() {
                                        $9: for (var $__6 = specs$1.keys[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__7; !($__7 = $__6.next()).done; ) {
                                          m$9 = $__7.value;
                                          {
                                            var pinfo$4;
                                            var t0$6;
                                            var t1$4;
                                            var t2$0;
                                            t0$6 = m$9;
                                            if (((t0$6 instanceof Array) && ((t1$4 = t0$6.length), ((t1$4 === 2) && (t0$6[0], (t2$0 = t0$6[1]), ___hasprop(t2$0, "pinfo")))))) {
                                              pinfo$4 = t2$0.pinfo;
                                              temp$7 = pinfo$4;
                                              acc$6.push(temp$7);
                                            } else {
                                              ___match_error(m$9, "/home/olivier/git/earl-grey/src/pattern.eg", 6108, 6148);
                                            }
                                          }
                                        }
                                      })(), acc$6));
                                      pinfos$2 = pinfos$2.concat(((acc$7 = []), (temp$8 = null), (m$10 = null), (function() {
                                        $10: for (var $__6 = specs$1.fw[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__7; !($__7 = $__6.next()).done; ) {
                                          m$10 = $__7.value;
                                          {
                                            var pinfo$5;
                                            var t0$7;
                                            t0$7 = m$10;
                                            if (___hasprop(t0$7, "pinfo")) {
                                              pinfo$5 = t0$7.pinfo;
                                              temp$8 = pinfo$5;
                                              acc$7.push(temp$8);
                                            } else {
                                              ___match_error(m$10, "/home/olivier/git/earl-grey/src/pattern.eg", 6172, 6205);
                                            }
                                          }
                                        }
                                      })(), acc$7));
                                      pinfos$2 = pinfos$2.concat(((acc$8 = []), (temp$9 = null), (m$11 = null), (function() {
                                        $11: for (var $__6 = specs$1.bw[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__7; !($__7 = $__6.next()).done; ) {
                                          m$11 = $__7.value;
                                          {
                                            var pinfo$6;
                                            var t0$8;
                                            t0$8 = m$11;
                                            if (___hasprop(t0$8, "pinfo")) {
                                              pinfo$6 = t0$8.pinfo;
                                              temp$9 = pinfo$6;
                                              acc$8.push(temp$9);
                                            } else {
                                              ___match_error(m$11, "/home/olivier/git/earl-grey/src/pattern.eg", 6229, 6262);
                                            }
                                          }
                                        }
                                      })(), acc$8));
                                      pinfos$2 = pinfos$2.concat(((acc$9 = []), (temp$10 = null), (m$12 = null), (function() {
                                        $12: for (var $__6 = specs$1.defaults[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__7; !($__7 = $__6.next()).done; ) {
                                          m$12 = $__7.value;
                                          {
                                            var pinfo$7;
                                            var t0$9;
                                            var t1$5;
                                            var t2$1;
                                            t0$9 = m$12;
                                            if (((t0$9 instanceof Array) && ((t1$5 = t0$9.length), ((t1$5 === 2) && ((t2$1 = t0$9[0]), ___hasprop(t2$1, "pinfo")))))) {
                                              pinfo$7 = t2$1.pinfo;
                                              t0$9[1];
                                              temp$10 = pinfo$7;
                                              acc$9.push(temp$10);
                                            } else {
                                              ___match_error(m$12, "/home/olivier/git/earl-grey/src/pattern.eg", 6286, 6330);
                                            }
                                          }
                                        }
                                      })(), acc$9));
                                      if (specs$1.rest) {
                                        pinfos$2.push(specs$1.rest.pinfo);
                                      }
                                      pinfo$3 = PatternInfo$0.mergeAll(pinfos$2);
                                      m$8$0 = specs$1;
                                      if ((($$19271$0 = ___hasprop(m$8$0, "keys")) && ((t0$10 = m$8$0.keys), ((t0$10 instanceof Array) && ((t1$6 = t0$10.length), ((t1$6 === 0) && (___hasprop(m$8$0, "fw") && ((fw$0 = m$8$0.fw), (___hasprop(m$8$0, "bw") && ((bw$0 = m$8$0.bw), (___hasprop(m$8$0, "defaults") && ((defaults$0 = m$8$0.defaults), ___hasprop(m$8$0, "rest"))))))))))))) {
                                        rest$1 = m$8$0.rest;
                                        patt$0 = __amp____colon__(__lt____lt____colon__$0(["array_pattern", fw$0, bw$0, defaults$0, rest$1], pattern$1), ({"pinfo": pinfo$3}));
                                        if (checked$0) {
                                          rval$3 = patt$0;
                                        } else {
                                          rval$3 = __amp____colon__(["check", checker_db$0.Array, patt$0], ({"pinfo": pinfo$3}));
                                        }
                                      } else {
                                        if (($$19271$0 && ((keys$0 = m$8$0.keys), (___hasprop(m$8$0, "fw") && ((t0$10 = m$8$0.fw), ((t0$10 instanceof Array) && ((t1$6 = t0$10.length), ((t1$6 === 0) && (___hasprop(m$8$0, "bw") && ((t2$2 = m$8$0.bw), ((t2$2 instanceof Array) && ((t3$0 = t2$2.length), ((t3$0 === 0) && (___hasprop(m$8$0, "defaults") && ((t4$0 = m$8$0.defaults), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 0) && (___hasprop(m$8$0, "rest") && (m$8$0.rest === (void 0))))))))))))))))))))) {
                                          rval$3 = __amp____colon__(["object_pattern"].concat(keys$0), ({"pinfo": pinfo$3}));
                                        } else {
                                          other$0 = m$8$0;
                                          msg$2 = "Pattern must be an array or an object.";
                                          throw ErrorFactory(["syntax", "pattern"]).create(msg$2, ({
                                            "node": expr$0,
                                            "specs": specs$1
                                          }));
                                        }
                                      }
                                    } else {
                                      if (($$18952$0 && ((t0$3 === 3) && (m$3$0[0] === "mode")))) {
                                        mode$0 = m$3$0[1];
                                        subp$5 = m$3$0[2];
                                        rval$3 = $it$6.expand(subp$5, __amp__(tags$2, ({"declare_mode": mode$0})), toplevel$0, checked$0);
                                      } else {
                                        other$1 = m$3$0;
                                        throw ErrorFactory(["syntax", "pattern"]).create(("Illegal pattern: " + other$1), ({"node": other$1}));
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
    if ((!rval$3.pinfo)) {
      $targ$9 = PatternInfo$0();
      (rval$3["pinfo"] = $targ$9);
      [];
    }
    return ($it$6.opt.wrap_pattern || identity$0)(__lt____lt____colon__$0(rval$3, pattern$1), toplevel$0);
  } else {
    return ___match_error(m$2$0);
  }
}));
(PatternCompiler$0.prototype["shift_rhs"] = (function shift_rhs(temp$11$0, rhs$0) {
  var t0$11;
  var projector$1;
  var subp$6;
  var t0$12;
  var t1$7;
  var pattern$2;
  var ph$0$0;
  var $it$7;
  var self$5;
  $it$7 = this;
  self$5 = this;
  t0$11 = temp$11$0;
  pattern$2 = t0$11;
  ph$0$0 = t0$11;
  t0$12 = ph$0$0;
  t1$7 = t0$12.length;
  if (((t1$7 === 4) && ((t0$12[0] === "project") && ((projector$1 = t0$12[1]), (subp$6 = t0$12[2]), (t0$12[3] === true))))) {
    return $it$7.shift_rhs(subp$6, ["send", projector$1, ["data", rhs$0]]);
  } else {
    return [pattern$2, rhs$0];
  }
}));
(PatternCompiler$0.prototype["process_for_rhs"] = (function process_for_rhs(rhs$1) {
  var t0$13;
  var t0$14;
  var t1$8;
  var x$9;
  var x$10;
  var t0$16;
  var t0$17;
  var $targ$16;
  var t0$18;
  var t1$10;
  var $targ$17;
  var name$0;
  var t0$15;
  var t1$9;
  var bridge$$19571$0;
  var ph$1$0;
  var bridge$$19568$0;
  var m$13$0;
  var t0$19;
  var $targ$10;
  var real_rhs$0;
  var $targ$11;
  var cpattern$0;
  var target$0;
  var expr$1;
  var proc$0;
  var $targ$12;
  var $targ$13;
  var $targ$14;
  var $targ$15;
  var $it$8;
  var self$6;
  $it$8 = this;
  self$6 = this;
  if ((!$it$8.compiled)) {
    $it$8.compile();
  }
  if (((!$it$8.opt.allow_arguments) && $it$8.arguments.length)) {
    throw ErrorFactory(["syntax", "pattern", "arguments"]).create("Arguments cannot be declared in this pattern", ({"args": $it$8.arguments[0]}));
  }
  if ($it$8.arguments.length) {
    $targ$10 = inject_below_uses$0(rhs$1, (function(x$8) {
      return util$0.construct($it$8.arguments.concat([x$8]), (function(args$2, rest$2) {
        return ["send", ["symbol", "->"], ["data", args$2, rest$2]];
      }));
    }));
  } else {
    $targ$10 = rhs$1;
  }
  t0$13 = getProjector(($it$8.opt.wrap_target || identity$0))($targ$10);
  if (t0$13[0]) {
    real_rhs$0 = t0$13[1];
  } else {
    ___match_error($targ$10);
  }
  $targ$11 = $it$8.shift_rhs($it$8.compiled, real_rhs$0);
  t0$14 = $targ$11;
  if (((t0$14 instanceof Array) && ((t1$8 = t0$14.length), (t1$8 === 2)))) {
    cpattern$0 = t0$14[0];
    target$0 = t0$14[1];
  } else {
    ___match_error($targ$11);
  }
  [cpattern$0, target$0];
  expr$1 = null;
  m$13$0 = target$0;
  bridge$$19568$0 = m$13$0;
  if ((((x$9 = bridge$$19568$0), ((x$9 instanceof Array) && (x$9[0] === "symbol"))) || ((x$10 = bridge$$19568$0), ((x$10 instanceof Array) && (x$10[0] === "variable"))))) {
    undefined;
  } else {
    ph$1$0 = cpattern$0;
    t0$15 = ph$1$0;
    if (((t0$15 instanceof Array) && ((t1$9 = t0$15.length), ((t1$9 === 2) && ((t0$15[0] === "assign") && ((bridge$$19571$0 = t0$15[1]), (((bridge$$19571$0 instanceof Array) && ((t0$16 = bridge$$19571$0.length), ((t0$16 === 2) && ((bridge$$19571$0[0] === "symbol") && ((name$0 = bridge$$19571$0[1]), true))))) || ((bridge$$19571$0 instanceof Array) && ((t0$17 = bridge$$19571$0.length), ((t0$17 === 2) && ((bridge$$19571$0[0] === "variable") && ((name$0 = bridge$$19571$0[1]), true)))))))))))) {
      $targ$16 = name$0;
      (target$0["name"] = $targ$16);
      [];
    } else {
      $targ$17 = [["variable", $it$8.info.gensym("$targ")], target$0];
      t0$18 = $targ$17;
      if (((t0$18 instanceof Array) && ((t1$10 = t0$18.length), (t1$10 === 2)))) {
        target$0 = t0$18[0];
        expr$1 = t0$18[1];
      } else {
        ___match_error($targ$17);
      }
      [target$0, expr$1];
    }
  }
  proc$0 = PatternProcessor$0();
  proc$0.process(cpattern$0, target$0, $it$8.opt);
  $targ$12 = proc$0;
  t0$19 = $targ$12;
  if ((___hasprop(t0$19, "temps") && (($it$8["temps"] = t0$19.temps), ___hasprop(t0$19, "parts")))) {
    ($it$8["parts"] = t0$19.parts);
  } else {
    ___match_error($targ$12);
  }
  [];
  $targ$13 = true;
  ($it$8["processed"] = $targ$13);
  [];
  $targ$14 = target$0;
  ($it$8["target"] = $targ$14);
  [];
  $targ$15 = expr$1;
  ($it$8["expr"] = $targ$15);
  [];
  return [$it$8.temps, $it$8.parts];
}));
(PatternCompiler$0.prototype["extract_from_rhs"] = (function extract_from_rhs(rhs$2) {
  var m$14;
  var acc$10;
  var temp$12;
  var succ$0;
  var fail$0;
  var assembly$0;
  var $it$9;
  var self$7;
  $it$9 = this;
  self$7 = this;
  if ((!$it$9.processed)) {
    $it$9.process_for_rhs(rhs$2);
  }
  succ$0 = $it$9.opt.success($it$9.target);
  fail$0 = $it$9.opt.failure($it$9.target);
  assembly$0 = assemble_pattern$0($it$9.parts, succ$0, fail$0);
  return ["splice", (($it$9.expr === null) ? ["splice"] : ["splice", ["declare", $it$9.target], ["assign", $it$9.target, $it$9.expr]])].concat($it$9.opt.declare($it$9.info, $it$9.vars)).concat([["multi"].concat(((acc$10 = []), (temp$12 = null), (m$14 = null), (function() {
    $13: for (var $__0 = $it$9.temps[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$14 = $__1.value;
      {
        var t$0;
        t$0 = m$14;
        temp$12 = ["declare", t$0];
        acc$10.push(temp$12);
      }
    }
  })(), acc$10)).concat([assembly$0])]);
}));
(PatternCompiler$0.prototype["wrapBody"] = (function wrapBody(body$0) {
  var m$15;
  var m$16;
  var x$11;
  var $it$10;
  var self$8;
  $it$10 = this;
  self$8 = this;
  m$15 = null;
  $14: for (var $__0 = enumerate($it$10.handlers)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$15 = $__1.value;
    {
      var $targ$18;
      var i$0;
      var h$0;
      var t0$20;
      var t1$11;
      t0$20 = m$15;
      if (((t0$20 instanceof Array) && ((t1$11 = t0$20.length), (t1$11 === 2)))) {
        i$0 = t0$20[0];
        h$0 = t0$20[1];
        $targ$18 = (h$0.wrapOrder + (i$0 / 1000000));
        (h$0["__ord"] = $targ$18);
        [];
      } else {
        ___match_error(m$15, "/home/olivier/git/earl-grey/src/pattern.eg", 9421, 9506);
      }
    }
  }
  $it$10.handlers.sort((function(x$12, y$0) {
    return (x$12.__ord < y$0.__ord);
  }));
  x$11 = body$0;
  m$16 = null;
  $15: for (var $__2 = $it$10.handlers[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3; !($__3 = $__2.next()).done; ) {
    m$16 = $__3.value;
    {
      var handler$1;
      handler$1 = m$16;
      x$11 = handler$1.wrap(x$11, $it$10.info, $it$10.opt);
      x$11;
    }
  }
  return x$11;
}));
(PatternCompiler$0.prototype["wrapAssignment"] = (function wrapAssignment(expr$2) {
  var m$17;
  var m$18;
  var x$13;
  var $it$11;
  var self$9;
  $it$11 = this;
  self$9 = this;
  m$17 = null;
  $16: for (var $__0 = enumerate($it$11.handlers)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$17 = $__1.value;
    {
      var $targ$19;
      var i$1;
      var h$1;
      var t0$21;
      var t1$12;
      t0$21 = m$17;
      if (((t0$21 instanceof Array) && ((t1$12 = t0$21.length), (t1$12 === 2)))) {
        i$1 = t0$21[0];
        h$1 = t0$21[1];
        $targ$19 = (h$1.wrapBodyOrder + (i$1 / 1000000));
        (h$1["__ord"] = $targ$19);
        [];
      } else {
        ___match_error(m$17, "/home/olivier/git/earl-grey/src/pattern.eg", 9688, 9777);
      }
    }
  }
  $it$11.handlers.sort((function(x$14, y$1) {
    return (x$14.__ord < y$1.__ord);
  }));
  x$13 = expr$2;
  m$18 = null;
  $17: for (var $__2 = $it$11.handlers[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3; !($__3 = $__2.next()).done; ) {
    m$18 = $__3.value;
    {
      var handler$2;
      handler$2 = m$18;
      x$13 = handler$2.wrapAssignment(x$13, $it$11.info, $it$11.opt);
      x$13;
    }
  }
  return x$13;
}));
__amp____colon__(PatternCompiler$0, __amp____colon__(((accum$6 = ({})), (accum$6["::name"] = "PatternCompiler"), accum$6), ((accum$7 = ({})), (accum$7["::egclass"] = true), accum$7)));
PatternProcessor$0 = (function PatternProcessor() {
  var $targ$20;
  var $targ$21;
  var $targ$22;
  var $it$12;
  if ((!getChecker(PatternProcessor$0)(this))) {
    $it$12 = Object.create(PatternProcessor$0.prototype);
  } else {
    $it$12 = this;
  }
  $targ$20 = [];
  ($it$12["temps"] = $targ$20);
  [];
  $targ$21 = [];
  ($it$12["parts"] = $targ$21);
  [];
  $targ$22 = GenSym$0("t");
  ($it$12["gen"] = $targ$22);
  [];
  return $it$12;
});
(PatternProcessor$0.prototype["do"] = (function(part$0) {
  var $it$13;
  var self$10;
  $it$13 = this;
  self$10 = this;
  return $it$13.parts.push(["do", part$0]);
}));
(PatternProcessor$0.prototype["check"] = (function check() {
  var part$1;
  var tags$3;
  var t0$22;
  var m$19$0;
  var $it$14;
  var self$11;
  $it$14 = this;
  self$11 = this;
  m$19$0 = arguments;
  t0$22 = m$19$0.length;
  if (((t0$22 >= 1) && (t0$22 <= 2))) {
    part$1 = m$19$0[0];
    if ((1 >= t0$22)) {
      tags$3 = ({});
    } else {
      tags$3 = m$19$0[1];
    }
    return $it$14.parts.push(__amp__(["check", part$1], tags$3));
  } else {
    return ___match_error(m$19$0);
  }
}));
(PatternProcessor$0.prototype["temp"] = (function temp() {
  var x$16;
  var x$17;
  var $targ$23;
  var init$0;
  var bridge$$19992$0;
  var m$21$0;
  var x$15;
  var v$5;
  var t0$23;
  var m$20$0;
  var $it$15;
  var self$12;
  $it$15 = this;
  self$12 = this;
  m$20$0 = arguments;
  t0$23 = m$20$0.length;
  if (((t0$23 >= 1) && (t0$23 <= 2))) {
    x$15 = m$20$0[0];
    if ((1 >= t0$23)) {
      v$5 = null;
    } else {
      v$5 = m$20$0[1];
    }
    m$21$0 = x$15;
    bridge$$19992$0 = m$21$0;
    if (((((x$16 = bridge$$19992$0), ((x$16 instanceof Array) && (x$16[0] === "variable"))) || ((x$17 = bridge$$19992$0), ((x$17 instanceof Array) && (x$17[0] === "symbol")))) && (___hasprop(m$21$0, "single_assignment") && ((m$21$0.single_assignment ? true : false) && (!v$5))))) {
      return x$15;
    } else {
      init$0 = m$21$0;
      v$5 = (v$5 || ["symbol", $it$15.gen()]);
      $targ$23 = true;
      (v$5["single_assignment"] = $targ$23);
      [];
      $it$15.temps.push(v$5);
      $it$15.do(["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], v$5], init$0]]);
      return v$5;
    }
  } else {
    return ___match_error(m$20$0);
  }
}));
(PatternProcessor$0.prototype["process"] = (function process(pattern$3, rhs$3, fns$0) {
  var x$18;
  var x$19;
  var t$1;
  var t$2;
  var t$3;
  var pp$0;
  var x$20;
  var m$23;
  var t$4;
  var m$24;
  var acc$11;
  var temp$13;
  var fn$1;
  var parts$0;
  var t$5;
  var m$25;
  var acc$12;
  var temp$14;
  var t$6;
  var otherwise$0;
  var m$26$0;
  var m$27;
  var m$29;
  var end$0;
  var pos$0;
  var m$30;
  var acc$13;
  var temp$15;
  var nfw$0;
  var nbw$0;
  var ndflt$0;
  var extract_length$0;
  var check_length$0;
  var lo$0;
  var hi$0;
  var t$7;
  var len$0;
  var fw$1;
  var bw$1;
  var dflt$0;
  var rest$4;
  var subp$11;
  var xs$3;
  var xs$2;
  var patt$1;
  var projector$2;
  var subp$10;
  var unconditional$1;
  var ph$2$0;
  var checker$2;
  var subp$9;
  var checker$1;
  var condition$1;
  var subp$8;
  var subp$7;
  var value$2;
  var sym$0;
  var $$20063$0;
  var $$20064$0;
  var $$20065$0;
  var $$20066$0;
  var t0$24;
  var t1$13;
  var m$22$0;
  var rval$4;
  var $it$16;
  var self$13;
  $it$16 = this;
  self$13 = this;
  m$22$0 = pattern$3;
  if (((x$18 = m$22$0), ((x$18 instanceof Array) && (x$18[0] === "ignore")))) {
    rval$4 = $it$16.do(rhs$3);
  } else {
    if ((($$20063$0 = (m$22$0 instanceof Array)) && ((t0$24 = m$22$0.length), ((t0$24 === 2) && (m$22$0[0] === "assign"))))) {
      sym$0 = m$22$0[1];
      rval$4 = $it$16.parts.push(fns$0.assign(sym$0, rhs$3));
    } else {
      if (($$20063$0 && (($$20065$0 = (t0$24 === 3)) && (m$22$0[0] === "replace")))) {
        subp$7 = m$22$0[1];
        value$2 = m$22$0[2];
        rval$4 = $it$16.process(subp$7, value$2, fns$0);
      } else {
        if (($$20065$0 && (m$22$0[0] === "test"))) {
          condition$1 = m$22$0[1];
          subp$8 = m$22$0[2];
          $it$16.process(subp$8, rhs$3, fns$0);
          rval$4 = $it$16.check(condition$1, ({"test": true}));
        } else {
          if (($$20065$0 && (($$20066$0 = (m$22$0[0] === "check")) && ((checker$1 = m$22$0[1]), (x$19 = m$22$0[2]), ((x$19 instanceof Array) && (x$19[0] === "ignore")))))) {
            rval$4 = $it$16.check(["send", checker$1, ["data", rhs$3]]);
          } else {
            if ($$20066$0) {
              checker$2 = m$22$0[1];
              subp$9 = m$22$0[2];
              t$1 = $it$16.temp(rhs$3);
              $it$16.check(["send", checker$2, ["data", t$1]]);
              rval$4 = $it$16.process(subp$9, t$1, fns$0);
            } else {
              if (($$20063$0 && ((t0$24 === 4) && (m$22$0[0] === "project")))) {
                projector$2 = m$22$0[1];
                subp$10 = m$22$0[2];
                t1$13 = m$22$0[3];
                unconditional$1 = t1$13;
                ph$2$0 = t1$13;
                if ((ph$2$0 ? true : false)) {
                  t$2 = $it$16.temp(["send", projector$2, ["data", rhs$3]]);
                  rval$4 = $it$16.process(subp$10, t$2, fns$0);
                } else {
                  t$3 = $it$16.temp(["send", projector$2, ["data", rhs$3]]);
                  $it$16.check(["send", t$3, ["value", 0]]);
                  rval$4 = $it$16.process(subp$10, ["send", t$3, ["value", 1]], fns$0);
                }
              } else {
                if (($$20063$0 && ((t0$24 === 2) && (m$22$0[0] === "neg")))) {
                  patt$1 = m$22$0[1];
                  pp$0 = PatternProcessor$0();
                  pp$0.process(patt$1, rhs$3, fns$0);
                  x$20 = assemble_conditions$0(pp$0);
                  rval$4 = $it$16.check(["send", ["symbol", "not"], ["data", ["void"], x$20]]);
                } else {
                  if (($$20063$0 && (($$20065$0 = (t0$24 >= 1)) && (m$22$0[0] === "all")))) {
                    xs$2 = Array.prototype.slice.call(m$22$0, 1);
                    t$4 = $it$16.temp(rhs$3);
                    m$23 = null;
                    $18: for (var $__0 = xs$2[$traceurRuntime.toProperty(Symbol.iterator)](),
                        $__1; !($__1 = $__0.next()).done; ) {
                      m$23 = $__1.value;
                      {
                        var x$21;
                        x$21 = m$23;
                        $it$16.process(x$21, t$4, fns$0);
                      }
                    }
                    rval$4 = null;
                  } else {
                    if (($$20065$0 && (m$22$0[0] === "any"))) {
                      xs$3 = Array.prototype.slice.call(m$22$0, 1);
                      t$5 = $it$16.temp(rhs$3, ["symbol", gensym$0("bridge")]);
                      rval$4 = $it$16.check(((fn$1 = (function fn(x$22, rest$3) {
                        return ["send", ["symbol", "or"], ["data", x$22, rest$3]];
                      })), (parts$0 = ((acc$11 = []), (temp$13 = null), (m$24 = null), (function() {
                        $19: for (var $__2 = xs$3[$traceurRuntime.toProperty(Symbol.iterator)](),
                            $__3; !($__3 = $__2.next()).done; ) {
                          m$24 = $__3.value;
                          {
                            var pp$1;
                            var x$23;
                            x$23 = m$24;
                            pp$1 = PatternProcessor$0();
                            pp$1.process(x$23, t$5, fns$0);
                            temp$13 = assemble_conditions$0(pp$1);
                            acc$11.push(temp$13);
                          }
                        }
                      })(), acc$11)), util$0.construct(parts$0, fn$1, ["symbol", "false"])));
                    } else {
                      if (($$20065$0 && (m$22$0[0] === "object_pattern"))) {
                        subp$11 = Array.prototype.slice.call(m$22$0, 1);
                        t$6 = $it$16.temp(rhs$3);
                        acc$12 = [];
                        temp$14 = null;
                        m$25 = null;
                        $20: for (var $__2 = subp$11[$traceurRuntime.toProperty(Symbol.iterator)](),
                            $__3; !($__3 = $__2.next()).done; ) {
                          m$25 = $__3.value;
                          {
                            var k$0;
                            var v$6;
                            var t0$25;
                            var t1$14;
                            var t2$3;
                            var t3$1;
                            t0$25 = m$25;
                            if (((t0$25 instanceof Array) && ((t1$14 = t0$25.length), ((t1$14 === 2) && ((t2$3 = t0$25[0]), ((t2$3 instanceof Array) && ((t3$1 = t2$3.length), ((t3$1 === 2) && (t2$3[0] === "value"))))))))) {
                              k$0 = t2$3[1];
                              v$6 = t0$25[1];
                              $it$16.check(["send", ["symbol", "___hasprop"], ["data", t$6, ["value", k$0]]]);
                              temp$14 = $it$16.process(v$6, ["send", t$6, ["value", k$0]], fns$0);
                              acc$12.push(temp$14);
                            } else {
                              ___match_error(m$25, "/home/olivier/git/earl-grey/src/pattern.eg", 12237, 12371);
                            }
                          }
                        }
                        rval$4 = acc$12;
                      } else {
                        if (($$20063$0 && ((t0$24 === 5) && (m$22$0[0] === "array_pattern")))) {
                          fw$1 = m$22$0[1];
                          bw$1 = m$22$0[2];
                          dflt$0 = m$22$0[3];
                          rest$4 = m$22$0[4];
                          nfw$0 = fw$1.length;
                          nbw$0 = bw$1.length;
                          ndflt$0 = dflt$0.length;
                          extract_length$0 = true;
                          check_length$0 = true;
                          lo$0 = (nfw$0 + nbw$0);
                          hi$0 = (lo$0 + ndflt$0);
                          t$7 = $it$16.temp(rhs$3);
                          len$0 = $it$16.temp(["send", t$7, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "length"]]]]);
                          $it$16.check(((m$26$0 = rest$4), ((m$26$0 ? true : false) ? ["send", ["symbol", ">="], ["data", len$0, ["value", lo$0]]] : ((lo$0 === hi$0) ? ["send", ["symbol", "==="], ["data", len$0, ["value", lo$0]]] : ((otherwise$0 = m$26$0), ["send", ["symbol", "and"], ["data", ["send", ["symbol", ">="], ["data", len$0, ["value", lo$0]]], ["send", ["symbol", "<="], ["data", len$0, ["value", hi$0]]]]])))));
                          m$27 = null;
                          $21: for (var $__4 = enumerate(fw$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                              $__5; !($__5 = $__4.next()).done; ) {
                            m$27 = $__5.value;
                            {
                              var i$2;
                              var m$28;
                              var t0$26;
                              var t1$15;
                              t0$26 = m$27;
                              if (((t0$26 instanceof Array) && ((t1$15 = t0$26.length), (t1$15 === 2)))) {
                                i$2 = t0$26[0];
                                m$28 = t0$26[1];
                                $it$16.process(m$28, ["send", t$7, ["value", i$2]], fns$0);
                              } else {
                                ___match_error(m$27, "/home/olivier/git/earl-grey/src/pattern.eg", 13107, 13194);
                              }
                            }
                          }
                          m$29 = null;
                          $22: for (var $__6 = enumerate(dflt$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                              $__7; !($__7 = $__6.next()).done; ) {
                            m$29 = $__7.value;
                            {
                              var idx$0;
                              var i$3;
                              var patt$2;
                              var value$3;
                              var t0$27;
                              var t1$16;
                              var t2$4;
                              var t3$2;
                              t0$27 = m$29;
                              if (((t0$27 instanceof Array) && ((t1$16 = t0$27.length), ((t1$16 === 2) && ((i$3 = t0$27[0]), (t2$4 = t0$27[1]), ((t2$4 instanceof Array) && ((t3$2 = t2$4.length), (t3$2 === 2)))))))) {
                                patt$2 = t2$4[0];
                                value$3 = t2$4[1];
                                idx$0 = (i$3 + nfw$0);
                                $it$16.process(patt$2, ["send", ["symbol", "if"], ["data", ["send", ["symbol", ">="], ["data", ["value", (idx$0 + nbw$0)], len$0]], value$3, ["send", t$7, ["value", idx$0]]]], fns$0);
                              } else {
                                ___match_error(m$29, "/home/olivier/git/earl-grey/src/pattern.eg", 13194, 13364);
                              }
                            }
                          }
                          if ((rest$4 !== undefined)) {
                            pos$0 = (nfw$0 + ndflt$0);
                            if ((nbw$0 > 0)) {
                              end$0 = [["value", (-nbw$0)]];
                            } else {
                              end$0 = [];
                            }
                            $it$16.process(rest$4, ["send", ["send", ["send", ["send", ["symbol", "Array"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "slice"]]]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "call"]]]], ["data", t$7, ["value", pos$0]].concat(end$0)], fns$0);
                          } else {
                            [];
                          }
                          acc$13 = [];
                          temp$15 = null;
                          m$30 = null;
                          $23: for (var $__8 = enumerate(bw$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                              $__9; !($__9 = $__8.next()).done; ) {
                            m$30 = $__9.value;
                            {
                              var i$4;
                              var m$31;
                              var t0$28;
                              var t1$17;
                              t0$28 = m$30;
                              if (((t0$28 instanceof Array) && ((t1$17 = t0$28.length), (t1$17 === 2)))) {
                                i$4 = t0$28[0];
                                m$31 = t0$28[1];
                                temp$15 = $it$16.process(m$31, ["send", ["symbol", "___js_fetch"], ["data", t$7, ["send", ["symbol", "-"], ["data", len$0, ["value", (nbw$0 - i$4)]]]]], fns$0);
                                acc$13.push(temp$15);
                              } else {
                                ___match_error(m$30, "/home/olivier/git/earl-grey/src/pattern.eg", 13634, 13741);
                              }
                            }
                          }
                          rval$4 = acc$13;
                        } else {
                          rval$4 = ___match_error(m$22$0);
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
  return rval$4;
}));
__amp____colon__(PatternProcessor$0, __amp____colon__(((accum$8 = ({})), (accum$8["::name"] = "PatternProcessor"), accum$8), ((accum$9 = ({})), (accum$9["::egclass"] = true), accum$9)));
assemble_conditions$0 = (function assemble_conditions(pp$2) {
  var m$32;
  var acc$14;
  var temp$16;
  var decls$0;
  var construct$0;
  construct$0 = (function construct(ph$3$0) {
    var x$26;
    var rest$6;
    var x$25;
    var x$24;
    var rest$5;
    var $$20462$0;
    var $$20463$0;
    var t0$29;
    var t1$18;
    var t2$5;
    var t3$3;
    t0$29 = ph$3$0;
    t1$18 = t0$29.length;
    if ((t1$18 === 0)) {
      return ["value", true];
    } else {
      if (((t1$18 >= 1) && ((t2$5 = t0$29[0]), ((t2$5 instanceof Array) && ((t3$3 = t2$5.length), ((t3$3 === 2) && (t2$5[0] === "do"))))))) {
        x$24 = t2$5[1];
        rest$5 = Array.prototype.slice.call(t0$29, 1);
        return ["multi", x$24, construct$0(rest$5)];
      } else {
        if (((t1$18 === 1) && ((t2$5 = t0$29[0]), ((t2$5 instanceof Array) && ((t3$3 = t2$5.length), ((t3$3 === 2) && (t2$5[0] === "check"))))))) {
          x$25 = t2$5[1];
          return x$25;
        } else {
          if (((t1$18 >= 1) && ((t2$5 = t0$29[0]), ((t2$5 instanceof Array) && ((t3$3 = t2$5.length), ((t3$3 === 2) && (t2$5[0] === "check"))))))) {
            x$26 = t2$5[1];
            rest$6 = Array.prototype.slice.call(t0$29, 1);
            return ["send", ["symbol", "and"], ["data", x$26, construct$0(rest$6)]];
          } else {
            return ___match_error(ph$3$0);
          }
        }
      }
    }
  });
  if (pp$2.temps.length) {
    acc$14 = [];
    temp$16 = null;
    m$32 = null;
    $24: for (var $__0 = pp$2.temps[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$32 = $__1.value;
      {
        var t$8;
        t$8 = m$32;
        temp$16 = ["declare", t$8];
        acc$14.push(temp$16);
      }
    }
    decls$0 = acc$14;
    return ["multi"].concat(decls$0).concat([construct$0(pp$2.parts)]);
  } else {
    return construct$0(pp$2.parts);
  }
});
assemble_pattern$0 = (function assemble_pattern() {
  var m$34;
  var m$35;
  var test$0;
  var lead$0;
  var trail$0;
  var construct$1;
  var parts$1;
  var t$9;
  var f$4;
  var t0$30;
  var m$33$0;
  m$33$0 = arguments;
  t0$30 = m$33$0.length;
  if (((t0$30 >= 2) && (t0$30 <= 3))) {
    parts$1 = m$33$0[0];
    t$9 = m$33$0[1];
    if ((2 >= t0$30)) {
      f$4 = null;
    } else {
      f$4 = m$33$0[2];
    }
    lead$0 = [];
    m$34 = null;
    $25: for (var $__0 = parts$1.slice(0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$34 = $__1.value;
      {
        var x$28;
        var x$27;
        var $$20577$0;
        var $$20578$0;
        var $$20579$0;
        var $$20580$0;
        var t0$31;
        var t1$19;
        t0$31 = m$34;
        if ((($$20578$0 = (t0$31 instanceof Array)) && ((t1$19 = t0$31.length), (($$20580$0 = (t1$19 === 2)) && (t0$31[0] === "do"))))) {
          x$27 = t0$31[1];
          lead$0.push(x$27);
          parts$1.shift();
        } else {
          if (($$20580$0 && (t0$31[0] === "check"))) {
            x$28 = t0$31[1];
            break $25;
          } else {
            ___match_error(m$34, "/home/olivier/git/earl-grey/src/pattern.eg", 14203, 14313);
          }
        }
      }
    }
    trail$0 = [];
    m$35 = null;
    $26: for (var $__2 = parts$1.slice(0).reverse()[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__3; !($__3 = $__2.next()).done; ) {
      m$35 = $__3.value;
      {
        var x$30;
        var x$29;
        var $$20584$0;
        var $$20585$0;
        var $$20586$0;
        var $$20587$0;
        var t0$32;
        var t1$20;
        t0$32 = m$35;
        if ((($$20585$0 = (t0$32 instanceof Array)) && ((t1$20 = t0$32.length), (($$20587$0 = (t1$20 === 2)) && (t0$32[0] === "do"))))) {
          x$29 = t0$32[1];
          trail$0.unshift(x$29);
          parts$1.pop();
        } else {
          if (($$20587$0 && (t0$32[0] === "check"))) {
            x$30 = t0$32[1];
            break $26;
          } else {
            ___match_error(m$35, "/home/olivier/git/earl-grey/src/pattern.eg", 14327, 14449);
          }
        }
      }
    }
    construct$1 = (function construct(ph$4$0) {
      var other$2;
      var x$33;
      var rest$8;
      var x$32;
      var x$31;
      var rest$7;
      var $$20650$0;
      var $$20651$0;
      var t0$33;
      var t1$21;
      var t2$6;
      var t3$4;
      t0$33 = ph$4$0;
      t1$21 = t0$33.length;
      if ((t1$21 === 0)) {
        return ["value", true];
      } else {
        if (((t1$21 >= 1) && ((t2$6 = t0$33[0]), ((t2$6 instanceof Array) && ((t3$4 = t2$6.length), ((t3$4 === 2) && (t2$6[0] === "do"))))))) {
          x$31 = t2$6[1];
          rest$7 = Array.prototype.slice.call(t0$33, 1);
          return ["multi", x$31, construct$1(rest$7)];
        } else {
          if (((t1$21 === 1) && ((t2$6 = t0$33[0]), ((t2$6 instanceof Array) && ((t3$4 = t2$6.length), ((t3$4 === 2) && (t2$6[0] === "check"))))))) {
            x$32 = t2$6[1];
            return x$32;
          } else {
            if (((t1$21 >= 1) && ((t2$6 = t0$33[0]), ((t2$6 instanceof Array) && ((t3$4 = t2$6.length), ((t3$4 === 2) && (t2$6[0] === "check"))))))) {
              x$33 = t2$6[1];
              rest$8 = Array.prototype.slice.call(t0$33, 1);
              return ["send", ["symbol", "and"], ["data", x$33, construct$1(rest$8)]];
            } else {
              other$2 = ph$4$0;
              throw ErrorFactory(["oops"]).create("?!?", other$2);
            }
          }
        }
      }
    });
    if (parts$1.length) {
      test$0 = construct$1(parts$1);
      return ["multi"].concat(lead$0).concat([(f$4 ? ["send", ["symbol", "if"], ["data", test$0, ["multi"].concat(trail$0).concat([t$9]), f$4]] : ["send", ["symbol", "if"], ["data", test$0, ["multi"].concat(trail$0).concat([t$9])]])]);
    } else {
      return ["multi"].concat(lead$0).concat(trail$0).concat([t$9]);
    }
  } else {
    return ___match_error(m$33$0);
  }
});
inject_below_uses$0 = (function inject_below_uses(ph$5$0, fn$2) {
  var other$3;
  var scope$0;
  var x$34;
  var t0$34;
  var t1$22;
  t0$34 = ph$5$0;
  t1$22 = t0$34.length;
  if (((t1$22 === 3) && (t0$34[0] === "use"))) {
    scope$0 = t0$34[1];
    x$34 = t0$34[2];
    return ["use", scope$0, inject_below_uses$0(x$34, fn$2)];
  } else {
    other$3 = ph$5$0;
    return fn$2(other$3);
  }
});
checkall$0 = ["send", "data", "multi", "assign", "void", "check", "do"];
same_block$0 = (function same_block(ph$6$0, ban1$0, ban2$0) {
  var m$36;
  var other$4;
  var type1$0;
  var args1$0;
  var type2$0;
  var args2$0;
  var m1$0;
  var m2$0;
  var v1$2;
  var v2$2;
  var s1$0;
  var s2$0;
  var v1$1;
  var v2$1;
  var $$20752$0;
  var $$20753$0;
  var $$20754$0;
  var $$20755$0;
  var $$20756$0;
  var $$20757$0;
  var $$20758$0;
  var t0$35;
  var t1$23;
  var t2$7;
  var t3$5;
  var t4$1;
  var t5$1;
  t0$35 = ph$6$0;
  t1$23 = t0$35.length;
  if ((($$20754$0 = (t1$23 === 2)) && ((t2$7 = t0$35[0]), (($$20756$0 = (t2$7 instanceof Array)) && ((t3$5 = t2$7.length), (($$20758$0 = (t3$5 === 2)) && ((t2$7[0] === "variable") && ((v1$1 = t2$7[1]), (t4$1 = t0$35[1]), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 === 2) && (t4$1[0] === "variable")))))))))))) {
    v2$1 = t4$1[1];
    return (v1$1 === v2$1);
  } else {
    if (($$20758$0 && ((t2$7[0] === "symbol") && ((s1$0 = t2$7[1]), (t4$1 = t0$35[1]), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 === 2) && (t4$1[0] === "symbol")))))))) {
      s2$0 = t4$1[1];
      return (((!send(ban1$0, s1$0)) && (!send(ban2$0, s2$0))) && (s1$0 === s2$0));
    } else {
      if (($$20758$0 && ((t2$7[0] === "value") && ((v1$2 = t2$7[1]), (t4$1 = t0$35[1]), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 === 2) && (t4$1[0] === "value")))))))) {
        v2$2 = t4$1[1];
        return (v1$2 === v2$2);
      } else {
        if (($$20758$0 && ((t2$7[0] === "macro") && ((m1$0 = t2$7[1]), (t4$1 = t0$35[1]), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 === 2) && (t4$1[0] === "macro")))))))) {
          m2$0 = t4$1[1];
          return (m1$0 === m2$0);
        } else {
          if (((t0$35 instanceof Array) && ((t1$23 = t0$35.length), ((t1$23 === 2) && ((t2$7 = t0$35[0]), ((t2$7 instanceof Array) && ((t3$5 = t2$7.length), ((t3$5 >= 1) && ((type1$0 = t2$7[0]), (args1$0 = Array.prototype.slice.call(t2$7, 1)), (t4$1 = t0$35[1]), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 >= 1) && ((type2$0 = t4$1[0]), (args2$0 = Array.prototype.slice.call(t4$1, 1)), (checkall$0.indexOf(type1$0) !== -1)))))))))))))) {
            if (((type1$0 === type2$0) && (args1$0.length === args2$0.length))) {
              m$36 = null;
              $27: for (var $__0 = zip(args1$0, args2$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__1; !($__1 = $__0.next()).done; ) {
                m$36 = $__1.value;
                {
                  var pair$0;
                  pair$0 = m$36;
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
            other$4 = ph$6$0;
            return false;
          }
        }
      }
    }
  }
});
parse_clauses$0 = (function parse_clauses(info$0, target$1, stmts$0, opt$0) {
  var m$37;
  var acc$15;
  var temp$17;
  var m$39;
  var acc$16;
  var temp$18;
  var m$40;
  var acc$17;
  var temp$19;
  var decls$1;
  var all_temps$0;
  var the_parts$0;
  var unique_temps$0;
  all_temps$0 = [];
  acc$15 = [];
  temp$17 = null;
  m$37 = null;
  $28: for (var $__2 = info$0.step_all(["clause"], stmts$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3; !($__3 = $__2.next()).done; ) {
    m$37 = $__3.value;
    {
      var accum$10;
      var t0$37;
      var m$38;
      var pc$1;
      var $targ$24;
      var vars$1;
      var temps$0;
      var blocks$0;
      var vars2$0;
      var x$35;
      var other$6;
      var b$0;
      var pattern$4;
      var body$1;
      var $$20902$0;
      var t0$36;
      var t1$24;
      t0$36 = m$37;
      if (((t0$36 instanceof Array) && ((t1$24 = t0$36.length), ((t1$24 === 3) && (t0$36[0] === "clause"))))) {
        pattern$4 = t0$36[1];
        body$1 = t0$36[2];
        pc$1 = PatternCompiler$0(pattern$4, info$0, __amp__(opt$0, __amp____colon__(({
          "allow_arguments": false,
          "allow_nested": true
        }), ((accum$10 = ({})), (accum$10["assign"] = (function assign(v$7, value$4) {
          return ["do", __lt____lt____colon__$0(["assign", v$7, value$4], v$7)];
        })), accum$10))));
        pc$1.process_for_rhs(target$1);
        $targ$24 = pc$1;
        t0$37 = $targ$24;
        if ((___hasprop(t0$37, "vars") && ((vars$1 = t0$37.vars), (___hasprop(t0$37, "temps") && ((temps$0 = t0$37.temps), ___hasprop(t0$37, "parts")))))) {
          blocks$0 = t0$37.parts;
        } else {
          ___match_error($targ$24);
        }
        [vars$1, temps$0, blocks$0];
        all_temps$0 = all_temps$0.concat(temps$0);
        vars2$0 = ({});
        m$38 = null;
        $29: for (var $__0 = vars$1[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$38 = $__1.value;
          {
            var $targ$25;
            var other$5;
            var xxx$0;
            var t0$38;
            var t1$25;
            t0$38 = m$38;
            if (((t0$38 instanceof Array) && ((t1$25 = t0$38.length), ((t1$25 === 2) && (t0$38[0] === "symbol"))))) {
              xxx$0 = t0$38[1];
              $targ$25 = true;
              (vars2$0[xxx$0] = $targ$25);
              [];
            } else {
              other$5 = m$38;
              throw ErrorFactory(["syntax", "unexpected"]).create();
            }
          }
        }
        if (opt$0.wrap) {
          pc$1.handlers.push(opt$0);
        }
        temp$17 = ["clause", vars$1, vars2$0, blocks$0, pc$1.wrapBody(body$1)];
        acc$15.push(temp$17);
      } else {
        if (((x$35 = t0$36), ((x$35 instanceof Array) && (x$35[0] === "block")))) {
          b$0 = t0$36;
          temp$17 = b$0;
          acc$15.push(temp$17);
        } else {
          other$6 = m$37;
          throw ErrorFactory(["syntax", "clause"]).create("Illegal clause", ({"clause": other$6}));
          acc$15.push(temp$17);
        }
      }
    }
  }
  the_parts$0 = acc$15;
  if (opt$0.fallback) {
    the_parts$0.push(["block", opt$0.fallback(target$1)]);
  }
  unique_temps$0 = keys(util$0.mkset(((acc$16 = []), (temp$18 = null), (m$39 = null), (function() {
    $30: for (var $__4 = all_temps$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__5; !($__5 = $__4.next()).done; ) {
      m$39 = $__5.value;
      {
        var t$10;
        var t0$39;
        var t1$26;
        t0$39 = m$39;
        if (((t0$39 instanceof Array) && ((t1$26 = t0$39.length), ((t1$26 === 2) && (t0$39[0] === "symbol"))))) {
          t$10 = t0$39[1];
          temp$18 = t$10;
          acc$16.push(temp$18);
        } else {
          ___match_error(m$39, "/home/olivier/git/earl-grey/src/pattern.eg", 16776, 16806);
        }
      }
    }
  })(), acc$16)));
  acc$17 = [];
  temp$19 = null;
  m$40 = null;
  $31: for (var $__4 = unique_temps$0[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__5; !($__5 = $__4.next()).done; ) {
    m$40 = $__5.value;
    {
      var t$11;
      t$11 = m$40;
      temp$19 = ["declare", __amp____colon__(["symbol", t$11], ({"mutable": true}))];
      acc$17.push(temp$19);
    }
  }
  decls$1 = acc$17;
  return ["multi"].concat(decls$1).concat([weave_clauses$0(the_parts$0)]);
});
opt_clauses$0 = (function opt_clauses(clauses$0) {
  var m$41;
  var acc$18;
  var temp$20;
  var m$44;
  var acc$19;
  var temp$21;
  var m$45;
  var acc$20;
  var temp$22;
  var m$46;
  var acc$21;
  var temp$23;
  var shares$0;
  var max$0;
  var temps$1;
  var shared_last$0;
  var idx_last$0;
  var new_clauses$0;
  acc$18 = [];
  temp$20 = null;
  m$41 = null;
  $32: for (var $__2 = enumerate(clauses$0.slice(1))[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3; !($__3 = $__2.next()).done; ) {
    m$41 = $__3.value;
    {
      var t0$41;
      var t1$28;
      var m$42;
      var $targ$26;
      var varsd0$0;
      var blocks0$0;
      var share$0;
      var idx$1;
      var i$5;
      var vars$2;
      var varsd$0;
      var blocks$1;
      var body$2;
      var t0$40;
      var t1$27;
      var t2$8;
      var t3$6;
      t0$40 = m$41;
      if (((t0$40 instanceof Array) && ((t1$27 = t0$40.length), ((t1$27 === 2) && ((i$5 = t0$40[0]), (t2$8 = t0$40[1]), ((t2$8 instanceof Array) && ((t3$6 = t2$8.length), ((t3$6 === 5) && (t2$8[0] === "clause"))))))))) {
        vars$2 = t2$8[1];
        varsd$0 = t2$8[2];
        blocks$1 = t2$8[3];
        body$2 = t2$8[4];
        $targ$26 = send(clauses$0, i$5);
        t0$41 = $targ$26;
        if (((t0$41 instanceof Array) && ((t1$28 = t0$41.length), ((t1$28 === 5) && (t0$41[0] === "clause"))))) {
          t0$41[1];
          varsd0$0 = t0$41[2];
          blocks0$0 = t0$41[3];
          t0$41[4];
        } else {
          ___match_error($targ$26);
        }
        [varsd0$0, blocks0$0];
        share$0 = 0;
        idx$1 = 0;
        m$42 = null;
        $33: for (var $__0 = blocks$1[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$42 = $__1.value;
          {
            var x$36;
            var x$37;
            var other$7;
            var m$43$0;
            var b$1;
            b$1 = m$42;
            if (same_block$0([send(blocks0$0, share$0), b$1], varsd0$0, varsd$0)) {
              (share$0++);
              m$43$0 = b$1;
              if (((x$36 = m$43$0), ((x$36 instanceof Array) && (x$36[0] === "do")))) {
                null;
              } else {
                if (((x$37 = m$43$0), ((x$37 instanceof Array) && (x$37[0] === "check")))) {
                  idx$1 = share$0;
                  idx$1;
                } else {
                  other$7 = m$43$0;
                  __lt____gt__$0(null, other$7);
                }
              }
            } else {
              break $33;
            }
          }
        }
        temp$20 = [share$0, idx$1];
        acc$18.push(temp$20);
      } else {
        ___match_error(m$41, "/home/olivier/git/earl-grey/src/pattern.eg", 16975, 17503);
      }
    }
  }
  shares$0 = acc$18;
  max$0 = send(Math.max, ((acc$19 = []), (temp$21 = null), (m$44 = null), (function() {
    $34: for (var $__4 = shares$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__5; !($__5 = $__4.next()).done; ) {
      m$44 = $__5.value;
      {
        var x$38;
        var t0$42;
        var t1$29;
        t0$42 = m$44;
        if (((t0$42 instanceof Array) && ((t1$29 = t0$42.length), (t1$29 === 2)))) {
          x$38 = t0$42[0];
          t0$42[1];
          temp$21 = x$38;
          acc$19.push(temp$21);
        } else {
          ___match_error(m$44, "/home/olivier/git/earl-grey/src/pattern.eg", 17517, 17542);
        }
      }
    }
  })(), acc$19));
  shares$0.push([0, 0]);
  acc$20 = [];
  temp$22 = null;
  m$45 = null;
  $35: for (var $__4 = range(1, max$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__5; !($__5 = $__4.next()).done; ) {
    m$45 = $__5.value;
    {
      temp$22 = ["symbol", gensym$0()];
      acc$20.push(temp$22);
    }
  }
  temps$1 = acc$20;
  shared_last$0 = 0;
  idx_last$0 = 0;
  acc$21 = [];
  temp$23 = null;
  m$46 = null;
  $36: for (var $__8 = enumerate(clauses$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__9; !($__9 = $__8.next()).done; ) {
    m$46 = $__9.value;
    {
      var t0$44;
      var t1$31;
      var m$47;
      var acc$22;
      var temp$24;
      var rest$9;
      var newblocks$0;
      var $targ$27;
      var share$1;
      var idx$2;
      var shared$0;
      var n_to_share$0;
      var to_share$0;
      var other$8;
      var i$6;
      var vars$3;
      var varsd$1;
      var blocks$2;
      var body$3;
      var t0$43;
      var t1$30;
      var t2$9;
      var t3$7;
      t0$43 = m$46;
      if (((t0$43 instanceof Array) && ((t1$30 = t0$43.length), ((t1$30 === 2) && ((i$6 = t0$43[0]), (t2$9 = t0$43[1]), ((t2$9 instanceof Array) && ((t3$7 = t2$9.length), ((t3$7 === 5) && (t2$9[0] === "clause"))))))))) {
        vars$3 = t2$9[1];
        varsd$1 = t2$9[2];
        blocks$2 = t2$9[3];
        body$3 = t2$9[4];
        $targ$27 = send(shares$0, i$6);
        t0$44 = $targ$27;
        if (((t0$44 instanceof Array) && ((t1$31 = t0$44.length), (t1$31 === 2)))) {
          share$1 = t0$44[0];
          idx$2 = t0$44[1];
        } else {
          ___match_error($targ$27);
        }
        [share$1, idx$2];
        if (idx_last$0) {
          shared$0 = [["check", send(temps$1, (idx_last$0 - 1))]];
        } else {
          shared$0 = [];
        }
        n_to_share$0 = Math.max(shared_last$0, share$1);
        acc$22 = [];
        temp$24 = null;
        m$47 = null;
        $37: for (var $__6 = enumerate(blocks$2.slice(shared_last$0, n_to_share$0))[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__7; !($__7 = $__6.next()).done; ) {
          m$47 = $__7.value;
          {
            var j$1;
            var x$40;
            var j$0;
            var x$39;
            var $$21361$0;
            var $$21362$0;
            var $$21363$0;
            var $$21364$0;
            var t0$45;
            var t1$32;
            var t2$10;
            var t3$8;
            t0$45 = m$47;
            if ((($$21362$0 = (t0$45 instanceof Array)) && ((t1$32 = t0$45.length), (($$21364$0 = (t1$32 === 2)) && ((j$0 = t0$45[0]), (t2$10 = t0$45[1]), ((t2$10 instanceof Array) && ((t3$8 = t2$10.length), ((t3$8 === 2) && (t2$10[0] === "check"))))))))) {
              x$39 = t2$10[1];
              temp$24 = ["check", ["assign", send(temps$1, (shared_last$0 + j$0)), x$39]];
              acc$22.push(temp$24);
            } else {
              if (($$21364$0 && ((j$1 = t0$45[0]), (t2$10 = t0$45[1]), ((t2$10 instanceof Array) && ((t3$8 = t2$10.length), ((t3$8 === 2) && (t2$10[0] === "do"))))))) {
                x$40 = t2$10[1];
                temp$24 = ["do", x$40];
                acc$22.push(temp$24);
              } else {
                ___match_error(m$47, "/home/olivier/git/earl-grey/src/pattern.eg", 17923, 18094);
              }
            }
          }
        }
        to_share$0 = acc$22;
        shared_last$0 = share$1;
        idx_last$0 = idx$2;
        rest$9 = blocks$2.slice(n_to_share$0);
        newblocks$0 = shared$0.concat(to_share$0).concat(rest$9);
        temp$23 = ["clause", vars$3, varsd$1, newblocks$0, body$3];
        acc$21.push(temp$23);
      } else {
        other$8 = m$46;
        throw ErrorFactory(["oops"]).create("what", ({"value": other$8}));
        acc$21.push(temp$23);
      }
    }
  }
  new_clauses$0 = acc$21;
  return [temps$1, new_clauses$0];
});
weave_clauses$0 = (function weave_clauses(parts$2) {
  var m$48;
  var m$51;
  var acc$24;
  var temp$27;
  var groups$0;
  var reassemble$0;
  var new_temps$0;
  var helper$0;
  groups$0 = classify_contiguous$0(parts$2, (function(temp$25$0) {
    var t0$46;
    var t1$33;
    var cls$0;
    t0$46 = temp$25$0;
    if (((t0$46 instanceof Array) && ((t1$33 = t0$46.length), (t1$33 >= 1)))) {
      cls$0 = t0$46[0];
      Array.prototype.slice.call(t0$46, 1);
    } else {
      ___match_error(temp$25$0);
    }
    return cls$0;
  }));
  reassemble$0 = [];
  new_temps$0 = [];
  m$48 = null;
  $38: for (var $__0 = groups$0[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$48 = $__1.value;
    {
      var t0$48;
      var t1$35;
      var $targ$28;
      var ts$0;
      var new_clauses$1;
      var elems$1;
      var elems$0;
      var $$21471$0;
      var $$21472$0;
      var $$21473$0;
      var $$21474$0;
      var t0$47;
      var t1$34;
      t0$47 = m$48;
      if ((($$21472$0 = (t0$47 instanceof Array)) && ((t1$34 = t0$47.length), (($$21474$0 = (t1$34 >= 1)) && (t0$47[0] === "clause"))))) {
        elems$0 = Array.prototype.slice.call(t0$47, 1);
        $targ$28 = opt_clauses$0(elems$0);
        t0$48 = $targ$28;
        if (((t0$48 instanceof Array) && ((t1$35 = t0$48.length), (t1$35 === 2)))) {
          ts$0 = t0$48[0];
          new_clauses$1 = t0$48[1];
        } else {
          ___match_error($targ$28);
        }
        [ts$0, new_clauses$1];
        new_temps$0 = new_temps$0.concat(ts$0);
        reassemble$0 = reassemble$0.concat(new_clauses$1);
      } else {
        if (($$21474$0 && (t0$47[0] === "block"))) {
          elems$1 = Array.prototype.slice.call(t0$47, 1);
          reassemble$0 = reassemble$0.concat(elems$1);
        } else {
          ___match_error(m$48, "/home/olivier/git/earl-grey/src/pattern.eg", 18537, 18742);
        }
      }
    }
  }
  helper$0 = (function helper(ph$7$0) {
    var m$49;
    var acc$23;
    var temp$26;
    var decls$2;
    var vars$4;
    var varsd$2;
    var blocks$3;
    var body$5;
    var rest$11;
    var body$4;
    var rest$10;
    var $$21544$0;
    var $$21545$0;
    var $$21546$0;
    var $$21547$0;
    var $$21548$0;
    var $$21549$0;
    var t0$49;
    var t1$36;
    var t2$11;
    var t3$9;
    var t4$2;
    var t5$2;
    var t6$0;
    t0$49 = ph$7$0;
    t1$36 = t0$49.length;
    if ((t1$36 === 0)) {
      return ["multi"];
    } else {
      if ((($$21546$0 = (t1$36 >= 1)) && ((t2$11 = t0$49[0]), (($$21548$0 = (t2$11 instanceof Array)) && ((t3$9 = t2$11.length), ((t3$9 === 2) && ((t2$11[0] === "block") && ((t4$2 = getProjector(Body$0)(t2$11[1])), (t4$2[0] && ((t5$2 = t4$2[1]), (t6$0 = t5$2.length), (t6$0 >= 0))))))))))) {
        body$4 = Array.prototype.slice.call(t5$2, 0);
        rest$10 = Array.prototype.slice.call(t0$49, 1);
        return ["multi"].concat(body$4).concat([helper$0(rest$10)]);
      } else {
        if (($$21548$0 && ((t3$9 === 5) && (t2$11[0] === "clause")))) {
          vars$4 = t2$11[1];
          varsd$2 = t2$11[2];
          blocks$3 = t2$11[3];
          body$5 = t2$11[4];
          rest$11 = Array.prototype.slice.call(t0$49, 1);
          acc$23 = [];
          temp$26 = null;
          m$49 = null;
          $39: for (var $__2 = vars$4[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__3; !($__3 = $__2.next()).done; ) {
            m$49 = $__3.value;
            {
              var bridge$$21627$0;
              var m$50$0;
              var v$8;
              v$8 = m$49;
              m$50$0 = v$8.declare_mode;
              if ((m$50$0 === "set")) {
                temp$26 = ["splice"];
              } else {
                if ((m$50$0 === "let")) {
                  temp$26 = ["declare", __amp__(v$8, ({"mutable": false}))];
                } else {
                  if ((m$50$0 === "var")) {
                    temp$26 = ["declare", __amp__(v$8, ({"mutable": true}))];
                  } else {
                    bridge$$21627$0 = m$50$0;
                    if (((bridge$$21627$0 === "unqualified") || (bridge$$21627$0 === (void 0)))) {
                      temp$26 = ["declare", __amp__(v$8, ({"mutable": false}))];
                    } else {
                      temp$26 = ___match_error(m$50$0);
                    }
                  }
                }
              }
              acc$23.push(temp$26);
            }
          }
          decls$2 = acc$23;
          return ["tagscope", "back", ["multi"].concat(decls$2).concat([assemble_pattern$0(blocks$3, body$5, ["use", "back", helper$0(rest$11)])])];
        } else {
          return ___match_error(ph$7$0);
        }
      }
    }
  });
  return ["multi"].concat(((acc$24 = []), (temp$27 = null), (m$51 = null), (function() {
    $40: for (var $__2 = new_temps$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__3; !($__3 = $__2.next()).done; ) {
      m$51 = $__3.value;
      {
        var t$12;
        t$12 = m$51;
        temp$27 = ["declare", t$12];
        acc$24.push(temp$27);
      }
    }
  })(), acc$24)).concat([helper$0(reassemble$0)]);
});
$targ$29 = PatternCompiler$0;
(exports["PatternCompiler"] = $targ$29);
[];
$targ$30 = parse_clauses$0;
(exports["parse_clauses"] = $targ$30);
[];
//# sourceURL=<compile-source>
