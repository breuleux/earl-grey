
"use strict";require("earlgrey-runtime/5");var accum$0 = undefined;var accum$1 = undefined;var accum$2 = undefined;var accum$3 = undefined;var accum$4 = undefined;var accum$5 = undefined;var accum$6 = undefined;var accum$7 = undefined;var accum$8 = undefined;var accum$9 = undefined;var $targ$29 = undefined;var $targ$30 = undefined;var $0$0 = undefined;var __lt____gt__$0 = undefined;var $1$0 = undefined;var __lt____lt____colon__$0 = undefined;var util$0 = undefined;var GenSym$0 = undefined;var gensym$0 = undefined;var classify$0 = undefined;var classify_contiguous$0 = undefined;var identity$0 = undefined;var Body$0 = undefined;var $3$0 = undefined;var checker_db$0 = undefined;var PatternInfo$0 = undefined;var PatternCompiler$0 = undefined;var PatternProcessor$0 = undefined;var assemble_conditions$0 = undefined;var assemble_pattern$0 = undefined;var inject_below_uses$0 = undefined;var checkall$0 = undefined;var same_block$0 = undefined;var parse_clauses$0 = undefined;var opt_clauses$0 = undefined;var weave_clauses$0 = undefined;$0$0 = require("./pp");__lt____gt__$0 = $0$0["<>"];$1$0 = require("./location");__lt____lt____colon__$0 = $1$0["<<:"];util$0 = require("./util");GenSym$0 = util$0.GenSym;gensym$0 = util$0.gensym;classify$0 = util$0.classify;classify_contiguous$0 = util$0.classify_contiguous;identity$0 = util$0.identity;Body$0 = util$0.Body;$3$0 = require("./expand");checker_db$0 = $3$0.checker_db;PatternInfo$0 = function PatternInfo() {
  var t0$0 = undefined;var m$0$0 = undefined;var $it$0 = undefined;if (!getChecker(PatternInfo$0)(this)) {
    $it$0 = Object.create(PatternInfo$0.prototype);
  } else {
    $it$0 = this;
  }m$0$0 = arguments;t0$0 = m$0$0.length;if (t0$0 >= 0 && t0$0 <= 3) {
    $it$0.handlers = 0 >= t0$0 ? [] : m$0$0[0];$it$0.vars = 1 >= t0$0 ? [] : m$0$0[1];$it$0.arguments = 2 >= t0$0 ? [] : m$0$0[2];undefined;
  } else {
    ___match_error(m$0$0);
  }return $it$0;
};__amp____colon__((accum$0 = {}, accum$0.mergeAll = function mergeAll(pinfos$0) {
  var f$0 = undefined;var rval$0 = undefined;rval$0 = PatternInfo$0();f$0 = function f(acc$0, pinfo$0) {
    return acc$0.merge(pinfo$0.pinfo || pinfo$0);
  };return pinfos$0.reduce(f$0, rval$0);
}, accum$0), __amp____colon__((accum$1 = {}, accum$1["::name"] = "PatternInfo", accum$1), (accum$2 = {}, accum$2["::egclass"] = true, accum$2)));PatternInfo$0.prototype.merge = function merge(pinfo$1) {
  var $it$1 = undefined;var self$0 = undefined;$it$1 = this;self$0 = this;$it$1.handlers = $it$1.handlers.concat(pinfo$1.handlers);$it$1.vars = $it$1.vars.concat(pinfo$1.vars);$it$1.arguments = $it$1.arguments.concat(pinfo$1.arguments);return $it$1;
};__amp____colon__(PatternInfo$0, __amp____colon__((accum$3 = {}, accum$3.mergeAll = function mergeAll(pinfos$1) {
  var f$1 = undefined;var rval$1 = undefined;rval$1 = PatternInfo$0();f$1 = function f(acc$1, pinfo$2) {
    return acc$1.merge(pinfo$2.pinfo || pinfo$2);
  };return pinfos$1.reduce(f$1, rval$1);
}, accum$3), __amp____colon__((accum$4 = {}, accum$4["::name"] = "PatternInfo", accum$4), (accum$5 = {}, accum$5["::egclass"] = true, accum$5))));PatternCompiler$0 = function PatternCompiler(temp$0$0, temp$1$0, temp$2$0) {
  var $it$2 = undefined;if (!getChecker(PatternCompiler$0)(this)) {
    $it$2 = Object.create(PatternCompiler$0.prototype);
  } else {
    $it$2 = this;
  }$it$2.pattern = temp$0$0;$it$2.info = temp$1$0;$it$2.opt = temp$2$0;return $it$2;
};PatternCompiler$0.prototype.compile = function compile() {
  var tags$0 = undefined;var $targ$0 = undefined;var $targ$1 = undefined;var $targ$2 = undefined;var $targ$3 = undefined;var $targ$4 = undefined;var $targ$5 = undefined;var $it$3 = undefined;var self$1 = undefined;$it$3 = this;self$1 = this;if ($it$3.compiled) {
    return $it$3.compiled;
  }tags$0 = clone($it$3.opt.tags || {});tags$0.group_id = tags$0.group_id || gensym$0("group");$targ$0 = $it$3.expand($it$3.pattern, tags$0, true, $it$3.opt.indexable);$it$3.compiled = $targ$0;[];$targ$1 = $it$3.info;$it$3.compiled.pinfo.info = $targ$1;[];$targ$2 = $it$3.opt;$it$3.compiled.pinfo.opt = $targ$2;[];$targ$3 = $it$3.compiled.pinfo.vars;$it$3.vars = $targ$3;[];$targ$4 = $it$3.compiled.pinfo.handlers;$it$3.handlers = $targ$4;[];$targ$5 = $it$3.compiled.pinfo.arguments;$it$3.arguments = $targ$5;[];return $it$3.compiled;
};PatternCompiler$0.prototype.fork = function fork(pattern$0) {
  var pc$0 = undefined;var $targ$6 = undefined;var $it$4 = undefined;var self$2 = undefined;$it$4 = this;self$2 = this;pc$0 = PatternCompiler$0(null, $it$4.info, $it$4.opt);$targ$6 = pattern$0;pc$0.compiled = $targ$6;[];__amp____colon__(pc$0, pattern$0.pinfo);return pc$0;
};PatternCompiler$0.prototype.parse_specs = function parse_specs(specs$0, tags$1) {
  var m$1 = undefined;var acc$2 = undefined;var temp$3 = undefined;var rest$0 = undefined;var has_defaults$0 = undefined;var rval$2 = undefined;var $targ$7 = undefined;var $it$5 = undefined;var self$3 = undefined;$it$5 = this;self$3 = this;rest$0 = undefined;has_defaults$0 = false;rval$2 = classify$0("fw", "bw", "keys", "defaults", (acc$2 = [], temp$3 = null, m$1 = null, (function () {
    $4: for (var _iterator = $it$5.info.step_all(["pattern"], specs$0)[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      m$1 = _step.value;
      var v$1 = undefined;var v$0 = undefined;var variable$1 = undefined;var value$0 = undefined;var key$1 = undefined;var subp$0 = undefined;var key$0 = undefined;var variable$0 = undefined;var $$18684$0 = undefined;var $$18685$0 = undefined;var $$18686$0 = undefined;var $$18687$0 = undefined;var t0$1 = undefined;var t1$0 = undefined;t0$1 = m$1;if (($$18685$0 = Array.isArray(t0$1)) && (t1$0 = t0$1.length, ($$18687$0 = t1$0 === 2) && t0$1[0] === "dynsplice")) {
        variable$0 = t0$1[1];rest$0 = $it$5.expand(variable$0, tags$1);temp$3 = ["ignore"];acc$2.push(temp$3);
      } else {
        if ($$18687$0 && t0$1[0] === "assoc") {
          key$0 = t0$1[1];temp$3 = ["keys", [key$0, $it$5.expand(key$0, tags$1)]];acc$2.push(temp$3);
        } else {
          if ($$18685$0 && (($$18687$0 = t1$0 === 3) && t0$1[0] === "assoc")) {
            key$1 = t0$1[1];subp$0 = t0$1[2];temp$3 = ["keys", [key$1, $it$5.expand(subp$0, tags$1)]];acc$2.push(temp$3);
          } else {
            if ($$18687$0 && t0$1[0] === "default") {
              variable$1 = t0$1[1];value$0 = t0$1[2];has_defaults$0 = true;if (rest$0) {
                throw ErrorFactory(["syntax", "pattern"]).create("No default arguments after rest arg.");
              } else {
                temp$3 = ["defaults", [$it$5.expand(variable$1, tags$1), value$0]];
              }acc$2.push(temp$3);
            } else {
              v$0 = m$1;if (rest$0 === undefined && !has_defaults$0) {
                temp$3 = ["fw", $it$5.expand(v$0, tags$1)];acc$2.push(temp$3);
              } else {
                v$1 = m$1;temp$3 = ["bw", $it$5.expand(v$1, tags$1)];acc$2.push(temp$3);
              }
            }
          }
        }
      }
    }
  })(), acc$2));$targ$7 = rest$0;rval$2.rest = $targ$7;[];return rval$2;
};PatternCompiler$0.prototype.expand = function expand() {
  var x$0 = undefined;var x$1 = undefined;var p$0 = undefined;var x$2 = undefined;var x$3 = undefined;var variable$2 = undefined;var variable$3 = undefined;var csubp$0 = undefined;var csubp$1 = undefined;var csubp$2 = undefined;var csubp$3 = undefined;var x$4 = undefined;var fn$0 = undefined;var $targ$8 = undefined;var msg$0 = undefined;var msg$1 = undefined;var cx$0 = undefined;var m$4 = undefined;var acc$3 = undefined;var temp$4 = undefined;var cxs$0 = undefined;var m$6 = undefined;var acc$5 = undefined;var temp$6 = undefined;var m$7 = undefined;var canon$0 = undefined;var normalize$0 = undefined;var pps$0 = undefined;var m$9 = undefined;var acc$6 = undefined;var temp$7 = undefined;var m$10 = undefined;var acc$7 = undefined;var temp$8 = undefined;var m$11 = undefined;var acc$8 = undefined;var temp$9 = undefined;var m$12 = undefined;var acc$9 = undefined;var temp$10 = undefined;var patt$0 = undefined;var msg$2 = undefined;var other$0 = undefined;var keys$0 = undefined;var fw$0 = undefined;var bw$0 = undefined;var defaults$0 = undefined;var rest$1 = undefined;var $$19153$0 = undefined;var t0$10 = undefined;var t1$6 = undefined;var t2$2 = undefined;var t3$0 = undefined;var t4$0 = undefined;var t5$0 = undefined;var m$8$0 = undefined;var specs$1 = undefined;var pinfos$2 = undefined;var pinfo$3 = undefined;var other$1 = undefined;var mode$0 = undefined;var subp$5 = undefined;var args$1 = undefined;var xs$1 = undefined;var xs$0 = undefined;var x$5 = undefined;var f$3 = undefined;var arg$0 = undefined;var f$2 = undefined;var args$0 = undefined;var checker$0 = undefined;var subp$4 = undefined;var projector$0 = undefined;var subp$3 = undefined;var unconditional$0 = undefined;var condition$0 = undefined;var subp$2 = undefined;var subp$1 = undefined;var value$1 = undefined;var v$3 = undefined;var v$2 = undefined;var handler$0 = undefined;var $$18834$0 = undefined;var $$18835$0 = undefined;var $$18836$0 = undefined;var $$18837$0 = undefined;var t0$3 = undefined;var bridge$$18818$0 = undefined;var t1$1 = undefined;var m$3$0 = undefined;var $targ$9 = undefined;var expr$0 = undefined;var rval$3 = undefined;var pattern$1 = undefined;var tags$2 = undefined;var toplevel$0 = undefined;var checked$0 = undefined;var t0$2 = undefined;var m$2$0 = undefined;var $it$6 = undefined;var self$4 = undefined;$it$6 = this;self$4 = this;m$2$0 = arguments;t0$2 = m$2$0.length;if (t0$2 >= 2 && t0$2 <= 4) {
    pattern$1 = m$2$0[0];tags$2 = m$2$0[1];if (2 >= t0$2) {
      toplevel$0 = false;
    } else {
      toplevel$0 = m$2$0[2];
    }if (3 >= t0$2) {
      checked$0 = false;
    } else {
      checked$0 = m$2$0[3];
    }expr$0 = $it$6.info.step(["pattern"], pattern$1);m$3$0 = expr$0;if ((x$0 = m$3$0, x$0 instanceof Array && x$0[0] === "void")) {
      rval$3 = ["check", checker_db$0["null"], ["ignore"]];
    } else {
      if ((x$1 = m$3$0, x$1 instanceof Array && x$1[0] === "ignore")) {
        rval$3 = expr$0;
      } else {
        if (Array.isArray(m$3$0) && (t0$3 = m$3$0.length, t0$3 === 2 && m$3$0[0] === "special")) {
          handler$0 = m$3$0[1];p$0 = $it$6.expand(handler$0.expand($it$6.info), tags$2, toplevel$0, false);p$0.pinfo.handlers.push(handler$0);rval$3 = p$0;
        } else {
          bridge$$18818$0 = m$3$0;if ((x$2 = bridge$$18818$0, x$2 instanceof Array && x$2[0] === "symbol") || (x$3 = bridge$$18818$0, x$3 instanceof Array && x$3[0] === "variable")) {
            variable$2 = __amp__(expr$0, tags$2);rval$3 = __amp____colon__(["assign", variable$2], { pinfo: PatternInfo$0([], [variable$2]) });
          } else {
            if (($$18834$0 = Array.isArray(m$3$0)) && (t0$3 = m$3$0.length, ($$18836$0 = t0$3 === 2) && (($$18837$0 = m$3$0[0] === "value") && (v$2 = m$3$0[1], $it$6.opt.strings_as_variables)))) {
              variable$3 = __lt____lt____colon__$0(__amp__(["symbol", v$2], tags$2), expr$0);rval$3 = __amp____colon__(["assign", variable$3], { pinfo: PatternInfo$0([], [variable$3]) });
            } else {
              if ($$18837$0) {
                v$3 = m$3$0[1];rval$3 = ["check", checker_db$0(v$3), ["ignore"]];
              } else {
                if ($$18834$0 && (($$18836$0 = t0$3 === 3) && m$3$0[0] === "replace")) {
                  subp$1 = m$3$0[1];value$1 = m$3$0[2];csubp$0 = $it$6.expand(subp$1, tags$2, toplevel$0, false);rval$3 = __amp____colon__(["replace", csubp$0, value$1], { pinfo: csubp$0.pinfo });
                } else {
                  if ($$18836$0 && m$3$0[0] === "test") {
                    condition$0 = m$3$0[1];subp$2 = m$3$0[2];csubp$1 = $it$6.expand(subp$2, tags$2, toplevel$0, false);rval$3 = __amp____colon__(["test", condition$0, csubp$1], { pinfo: csubp$1.pinfo });
                  } else {
                    if ($$18834$0 && (t0$3 >= 3 && t0$3 <= 4 && m$3$0[0] === "project")) {
                      projector$0 = m$3$0[1];subp$3 = m$3$0[2];if (3 >= t0$3) {
                        unconditional$0 = false;
                      } else {
                        unconditional$0 = m$3$0[3];
                      }csubp$2 = $it$6.expand(subp$3, tags$2, toplevel$0, true);rval$3 = __amp____colon__(["project", projector$0, csubp$2, unconditional$0], { pinfo: csubp$2.pinfo });
                    } else {
                      if ($$18834$0 && (($$18836$0 = t0$3 === 3) && m$3$0[0] === "check")) {
                        checker$0 = m$3$0[1];subp$4 = m$3$0[2];csubp$3 = $it$6.expand(subp$4, tags$2, toplevel$0, true);rval$3 = __amp____colon__(["check", checker$0, csubp$3], { pinfo: csubp$3.pinfo });
                      } else {
                        if ($$18836$0 && (($$18837$0 = m$3$0[0] === "send") && (f$2 = m$3$0[1], t1$1 = m$3$0[2], x$4 = t1$1, x$4 instanceof Array && x$4[0] === "data"))) {
                          args$0 = t1$1;if (toplevel$0) {
                            fn$0 = $it$6.expand(f$2, tags$2, true, false);$targ$8 = PatternInfo$0.mergeAll([fn$0.pinfo, PatternInfo$0([], [], [args$0])]);fn$0.pinfo = $targ$8;[];rval$3 = fn$0;
                          } else {
                            msg$0 = "Function arguments can only be declared as a top level pattern.";throw ErrorFactory(["syntax", "pattern"]).create(msg$0, { node: expr$0, arg: args$0 });
                          }
                        } else {
                          if ($$18837$0) {
                            f$3 = m$3$0[1];arg$0 = m$3$0[2];rval$3 = ["assign", expr$0];
                          } else {
                            if (!$it$6.opt.allow_nested) {
                              msg$1 = "Nested patterns are not allowed here.";throw ErrorFactory(["syntax", "pattern"]).create(msg$1, { node: expr$0 });
                            } else {
                              if (($$18834$0 = Array.isArray(m$3$0)) && (t0$3 = m$3$0.length, t0$3 === 2 && m$3$0[0] === "neg")) {
                                x$5 = m$3$0[1];cx$0 = $it$6.expand(x$5, tags$2);rval$3 = __amp____colon__(["neg", cx$0], { pinfo: cx$0.pinfo });
                              } else {
                                if ($$18834$0 && (($$18836$0 = t0$3 >= 1) && m$3$0[0] === "all")) {
                                  xs$0 = Array.prototype.slice.call(m$3$0, 1);acc$3 = [];temp$4 = null;m$4 = null;$5: for (var _iterator2 = xs$0[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
                                    m$4 = _step2.value;
                                    var x$6 = undefined;x$6 = m$4;temp$4 = $it$6.expand(x$6, tags$2);acc$3.push(temp$4);
                                  }cxs$0 = acc$3;rval$3 = __amp____colon__(["all"].concat(cxs$0), { pinfo: PatternInfo$0.mergeAll(cxs$0) });
                                } else {
                                  if ($$18836$0 && m$3$0[0] === "any") {
                                    xs$1 = Array.prototype.slice.call(m$3$0, 1);canon$0 = function canon(all$0) {
                                      return all$0.sort().join(",");
                                    };normalize$0 = function normalize(vars$0) {
                                      var m$5 = undefined;var acc$4 = undefined;var temp$5 = undefined;return canon$0((acc$4 = [], temp$5 = null, m$5 = null, (function () {
                                        $7: for (var _iterator3 = vars$0[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
                                          m$5 = _step3.value;
                                          var v$4 = undefined;var t0$4 = undefined;var t1$2 = undefined;t0$4 = m$5;if (Array.isArray(t0$4) && (t1$2 = t0$4.length, t1$2 === 2 && t0$4[0] === "symbol")) {
                                            v$4 = t0$4[1];temp$5 = v$4;acc$4.push(temp$5);
                                          } else {
                                            ___match_error(m$5);
                                          }
                                        }
                                      })(), acc$4));
                                    };acc$5 = [];temp$6 = null;m$6 = null;$8: for (var _iterator4 = xs$1[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
                                      m$6 = _step4.value;
                                      var x$7 = undefined;x$7 = m$6;temp$6 = $it$6.expand(x$7, tags$2);acc$5.push(temp$6);
                                    }pps$0 = acc$5;m$7 = null;$6: for (var _iterator5 = neighbours(pps$0)[Symbol.iterator](), _step5; !(_step5 = _iterator5.next()).done;) {
                                      m$7 = _step5.value;
                                      var v1$0 = undefined;var v2$0 = undefined;var pp1$0 = undefined;var pp2$0 = undefined;var t0$5 = undefined;var t1$3 = undefined;t0$5 = m$7;if (Array.isArray(t0$5) && (t1$3 = t0$5.length, t1$3 === 2)) {
                                        pp1$0 = t0$5[0];pp2$0 = t0$5[1];v1$0 = pp1$0.pinfo.vars;v2$0 = pp2$0.pinfo.vars;if (normalize$0(v1$0) !== normalize$0(v2$0)) {
                                          throw ErrorFactory(["syntax", "pattern"]).create("Both branches of 'or' must contain the same variables", { vars1: __lt____lt____colon__$0(v1$0.sort(), pp1$0), vars2: __lt____lt____colon__$0(v2$0.sort(), pp2$0) });
                                        }
                                      } else {
                                        ___match_error(m$7);
                                      }
                                    }rval$3 = __amp____colon__(["any"].concat(pps$0), { pinfo: pps$0[0] && pps$0[0].pinfo });
                                  } else {
                                    if ($$18836$0 && m$3$0[0] === "data") {
                                      args$1 = Array.prototype.slice.call(m$3$0, 1);specs$1 = $it$6.parse_specs(args$1, tags$2);pinfos$2 = [];pinfos$2 = pinfos$2.concat((acc$6 = [], temp$7 = null, m$9 = null, (function () {
                                        $9: for (var _iterator6 = specs$1.keys[Symbol.iterator](), _step6; !(_step6 = _iterator6.next()).done;) {
                                          m$9 = _step6.value;
                                          var pinfo$4 = undefined;var t0$6 = undefined;var t1$4 = undefined;var t2$0 = undefined;t0$6 = m$9;if (Array.isArray(t0$6) && (t1$4 = t0$6.length, t1$4 === 2 && (t0$6[0], t2$0 = t0$6[1], ___hasprop(t2$0, "pinfo")))) {
                                            pinfo$4 = t2$0.pinfo;temp$7 = pinfo$4;acc$6.push(temp$7);
                                          } else {
                                            ___match_error(m$9);
                                          }
                                        }
                                      })(), acc$6));pinfos$2 = pinfos$2.concat((acc$7 = [], temp$8 = null, m$10 = null, (function () {
                                        $10: for (var _iterator7 = specs$1.fw[Symbol.iterator](), _step7; !(_step7 = _iterator7.next()).done;) {
                                          m$10 = _step7.value;
                                          var pinfo$5 = undefined;var t0$7 = undefined;t0$7 = m$10;if (___hasprop(t0$7, "pinfo")) {
                                            pinfo$5 = t0$7.pinfo;temp$8 = pinfo$5;acc$7.push(temp$8);
                                          } else {
                                            ___match_error(m$10);
                                          }
                                        }
                                      })(), acc$7));pinfos$2 = pinfos$2.concat((acc$8 = [], temp$9 = null, m$11 = null, (function () {
                                        $11: for (var _iterator8 = specs$1.bw[Symbol.iterator](), _step8; !(_step8 = _iterator8.next()).done;) {
                                          m$11 = _step8.value;
                                          var pinfo$6 = undefined;var t0$8 = undefined;t0$8 = m$11;if (___hasprop(t0$8, "pinfo")) {
                                            pinfo$6 = t0$8.pinfo;temp$9 = pinfo$6;acc$8.push(temp$9);
                                          } else {
                                            ___match_error(m$11);
                                          }
                                        }
                                      })(), acc$8));pinfos$2 = pinfos$2.concat((acc$9 = [], temp$10 = null, m$12 = null, (function () {
                                        $12: for (var _iterator9 = specs$1.defaults[Symbol.iterator](), _step9; !(_step9 = _iterator9.next()).done;) {
                                          m$12 = _step9.value;
                                          var pinfo$7 = undefined;var t0$9 = undefined;var t1$5 = undefined;var t2$1 = undefined;t0$9 = m$12;if (Array.isArray(t0$9) && (t1$5 = t0$9.length, t1$5 === 2 && (t2$1 = t0$9[0], ___hasprop(t2$1, "pinfo")))) {
                                            pinfo$7 = t2$1.pinfo;t0$9[1];temp$10 = pinfo$7;acc$9.push(temp$10);
                                          } else {
                                            ___match_error(m$12);
                                          }
                                        }
                                      })(), acc$9));if (specs$1.rest) {
                                        pinfos$2.push(specs$1.rest.pinfo);
                                      }pinfo$3 = PatternInfo$0.mergeAll(pinfos$2);m$8$0 = specs$1;if (($$19153$0 = ___hasprop(m$8$0, "keys")) && (t0$10 = m$8$0.keys, Array.isArray(t0$10) && (t1$6 = t0$10.length, t1$6 === 0 && (___hasprop(m$8$0, "fw") && (fw$0 = m$8$0.fw, ___hasprop(m$8$0, "bw") && (bw$0 = m$8$0.bw, ___hasprop(m$8$0, "defaults") && (defaults$0 = m$8$0.defaults, ___hasprop(m$8$0, "rest")))))))) {
                                        rest$1 = m$8$0.rest;patt$0 = __amp____colon__(__lt____lt____colon__$0(["array_pattern", fw$0, bw$0, defaults$0, rest$1], pattern$1), { pinfo: pinfo$3 });if (checked$0) {
                                          rval$3 = patt$0;
                                        } else {
                                          rval$3 = __amp____colon__(["check", checker_db$0.Array, patt$0], { pinfo: pinfo$3 });
                                        }
                                      } else {
                                        if ($$19153$0 && (keys$0 = m$8$0.keys, ___hasprop(m$8$0, "fw") && (t0$10 = m$8$0.fw, Array.isArray(t0$10) && (t1$6 = t0$10.length, t1$6 === 0 && (___hasprop(m$8$0, "bw") && (t2$2 = m$8$0.bw, Array.isArray(t2$2) && (t3$0 = t2$2.length, t3$0 === 0 && (___hasprop(m$8$0, "defaults") && (t4$0 = m$8$0.defaults, Array.isArray(t4$0) && (t5$0 = t4$0.length, t5$0 === 0 && (___hasprop(m$8$0, "rest") && m$8$0.rest === void 0))))))))))) {
                                          rval$3 = __amp____colon__(["object_pattern"].concat(keys$0), { pinfo: pinfo$3 });
                                        } else {
                                          other$0 = m$8$0;msg$2 = "Pattern must be an array or an object.";throw ErrorFactory(["syntax", "pattern"]).create(msg$2, { node: expr$0, specs: specs$1 });
                                        }
                                      }
                                    } else {
                                      if ($$18834$0 && (t0$3 === 3 && m$3$0[0] === "mode")) {
                                        mode$0 = m$3$0[1];subp$5 = m$3$0[2];rval$3 = $it$6.expand(subp$5, __amp__(tags$2, { declare_mode: mode$0 }), toplevel$0, checked$0);
                                      } else {
                                        other$1 = m$3$0;throw ErrorFactory(["syntax", "pattern"]).create("Illegal pattern: " + other$1, { node: other$1 });
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
    }if (!rval$3.pinfo) {
      $targ$9 = PatternInfo$0();rval$3.pinfo = $targ$9;[];
    }return ($it$6.opt.wrap_pattern || identity$0)(__lt____lt____colon__$0(rval$3, pattern$1), toplevel$0);
  } else {
    return ___match_error(m$2$0);
  }
};PatternCompiler$0.prototype.shift_rhs = function shift_rhs(temp$11$0, rhs$0) {
  var t0$11 = undefined;var projector$1 = undefined;var subp$6 = undefined;var t0$12 = undefined;var t1$7 = undefined;var pattern$2 = undefined;var ph$0$0 = undefined;var $it$7 = undefined;var self$5 = undefined;$it$7 = this;self$5 = this;t0$11 = temp$11$0;pattern$2 = t0$11;ph$0$0 = t0$11;t0$12 = ph$0$0;t1$7 = t0$12.length;if (t1$7 === 4 && (t0$12[0] === "project" && (projector$1 = t0$12[1], subp$6 = t0$12[2], t0$12[3] === true))) {
    return $it$7.shift_rhs(subp$6, ["send", projector$1, ["data", rhs$0]]);
  } else {
    return [pattern$2, rhs$0];
  }
};PatternCompiler$0.prototype.process_for_rhs = function process_for_rhs(rhs$1) {
  var t0$13 = undefined;var t0$14 = undefined;var t1$8 = undefined;var x$9 = undefined;var x$10 = undefined;var t0$16 = undefined;var t0$17 = undefined;var $targ$16 = undefined;var t0$18 = undefined;var t1$10 = undefined;var $targ$17 = undefined;var name$0 = undefined;var t0$15 = undefined;var t1$9 = undefined;var bridge$$19453$0 = undefined;var ph$1$0 = undefined;var bridge$$19450$0 = undefined;var m$13$0 = undefined;var t0$19 = undefined;var $targ$10 = undefined;var real_rhs$0 = undefined;var $targ$11 = undefined;var cpattern$0 = undefined;var target$0 = undefined;var expr$1 = undefined;var proc$0 = undefined;var $targ$12 = undefined;var $targ$13 = undefined;var $targ$14 = undefined;var $targ$15 = undefined;var $it$8 = undefined;var self$6 = undefined;$it$8 = this;self$6 = this;if (!$it$8.compiled) {
    $it$8.compile();
  }if (!$it$8.opt.allow_arguments && $it$8.arguments.length) {
    throw ErrorFactory(["syntax", "pattern", "arguments"]).create("Arguments cannot be declared in this pattern", { args: $it$8.arguments[0] });
  }if ($it$8.arguments.length) {
    $targ$10 = inject_below_uses$0(rhs$1, function (x$8) {
      return util$0.construct($it$8.arguments.concat([x$8]), function (args$2, rest$2) {
        return ["send", ["symbol", "->"], ["data", args$2, rest$2]];
      });
    });
  } else {
    $targ$10 = rhs$1;
  }t0$13 = getProjector($it$8.opt.wrap_target || identity$0)($targ$10);if (t0$13[0]) {
    real_rhs$0 = t0$13[1];
  } else {
    ___match_error($targ$10);
  }$targ$11 = $it$8.shift_rhs($it$8.compiled, real_rhs$0);t0$14 = $targ$11;if (Array.isArray(t0$14) && (t1$8 = t0$14.length, t1$8 === 2)) {
    cpattern$0 = t0$14[0];target$0 = t0$14[1];
  } else {
    ___match_error($targ$11);
  }[cpattern$0, target$0];__lt____lt____colon__$0(target$0, rhs$1);expr$1 = null;m$13$0 = target$0;bridge$$19450$0 = m$13$0;if ((x$9 = bridge$$19450$0, x$9 instanceof Array && x$9[0] === "symbol") || (x$10 = bridge$$19450$0, x$10 instanceof Array && x$10[0] === "variable")) {
    undefined;
  } else {
    ph$1$0 = cpattern$0;t0$15 = ph$1$0;if (Array.isArray(t0$15) && (t1$9 = t0$15.length, t1$9 === 2 && (t0$15[0] === "assign" && (bridge$$19453$0 = t0$15[1], Array.isArray(bridge$$19453$0) && (t0$16 = bridge$$19453$0.length, t0$16 === 2 && (bridge$$19453$0[0] === "symbol" && (name$0 = bridge$$19453$0[1], true))) || Array.isArray(bridge$$19453$0) && (t0$17 = bridge$$19453$0.length, t0$17 === 2 && (bridge$$19453$0[0] === "variable" && (name$0 = bridge$$19453$0[1], true))))))) {
      $targ$16 = name$0;target$0.name = $targ$16;[];
    } else {
      $targ$17 = [__lt____lt____colon__$0(["variable", $it$8.info.gensym("$targ")], target$0), target$0];t0$18 = $targ$17;if (Array.isArray(t0$18) && (t1$10 = t0$18.length, t1$10 === 2)) {
        target$0 = t0$18[0];expr$1 = t0$18[1];
      } else {
        ___match_error($targ$17);
      }[target$0, expr$1];
    }
  }proc$0 = PatternProcessor$0();proc$0.process(cpattern$0, target$0, $it$8.opt);$targ$12 = proc$0;t0$19 = $targ$12;if (___hasprop(t0$19, "temps") && ($it$8.temps = t0$19.temps, ___hasprop(t0$19, "parts"))) {
    $it$8.parts = t0$19.parts;
  } else {
    ___match_error($targ$12);
  }[];$targ$13 = true;$it$8.processed = $targ$13;[];$targ$14 = target$0;$it$8.target = $targ$14;[];$targ$15 = expr$1;$it$8.expr = $targ$15;[];return [$it$8.temps, $it$8.parts];
};PatternCompiler$0.prototype.extract_from_rhs = function extract_from_rhs(rhs$2) {
  var m$14 = undefined;var acc$10 = undefined;var temp$12 = undefined;var succ$0 = undefined;var fail$0 = undefined;var assembly$0 = undefined;var $it$9 = undefined;var self$7 = undefined;$it$9 = this;self$7 = this;if (!$it$9.processed) {
    $it$9.process_for_rhs(rhs$2);
  }succ$0 = $it$9.opt.success($it$9.target);fail$0 = $it$9.opt.failure($it$9.target);assembly$0 = assemble_pattern$0($it$9.parts, succ$0, fail$0);return ["splice", $it$9.expr === null ? ["splice"] : ["splice", ["declare", $it$9.target], ["assign", $it$9.target, $it$9.expr]]].concat($it$9.opt.declare($it$9.info, $it$9.vars)).concat([["multi"].concat((acc$10 = [], temp$12 = null, m$14 = null, (function () {
    $13: for (var _iterator10 = $it$9.temps[Symbol.iterator](), _step10; !(_step10 = _iterator10.next()).done;) {
      m$14 = _step10.value;
      var t$0 = undefined;t$0 = m$14;temp$12 = ["declare", t$0];acc$10.push(temp$12);
    }
  })(), acc$10)).concat([assembly$0])]);
};PatternCompiler$0.prototype.wrapBody = function wrapBody(body$0) {
  var m$15 = undefined;var m$16 = undefined;var x$11 = undefined;var $it$10 = undefined;var self$8 = undefined;$it$10 = this;self$8 = this;m$15 = null;$14: for (var _iterator11 = enumerate($it$10.handlers)[Symbol.iterator](), _step11; !(_step11 = _iterator11.next()).done;) {
    m$15 = _step11.value;
    var $targ$18 = undefined;var i$0 = undefined;var h$0 = undefined;var t0$20 = undefined;var t1$11 = undefined;t0$20 = m$15;if (Array.isArray(t0$20) && (t1$11 = t0$20.length, t1$11 === 2)) {
      i$0 = t0$20[0];h$0 = t0$20[1];$targ$18 = h$0.wrapOrder + i$0 / 1000000;h$0.__ord = $targ$18;[];
    } else {
      ___match_error(m$15);
    }
  }$it$10.handlers.sort(function (x$12, y$0) {
    return x$12.__ord < y$0.__ord;
  });x$11 = body$0;m$16 = null;$15: for (var _iterator12 = $it$10.handlers[Symbol.iterator](), _step12; !(_step12 = _iterator12.next()).done;) {
    m$16 = _step12.value;
    var handler$1 = undefined;handler$1 = m$16;x$11 = handler$1.wrap(x$11, $it$10.info, $it$10.opt);x$11;
  }return x$11;
};PatternCompiler$0.prototype.wrapAssignment = function wrapAssignment(expr$2) {
  var m$17 = undefined;var m$18 = undefined;var x$13 = undefined;var $it$11 = undefined;var self$9 = undefined;$it$11 = this;self$9 = this;m$17 = null;$16: for (var _iterator13 = enumerate($it$11.handlers)[Symbol.iterator](), _step13; !(_step13 = _iterator13.next()).done;) {
    m$17 = _step13.value;
    var $targ$19 = undefined;var i$1 = undefined;var h$1 = undefined;var t0$21 = undefined;var t1$12 = undefined;t0$21 = m$17;if (Array.isArray(t0$21) && (t1$12 = t0$21.length, t1$12 === 2)) {
      i$1 = t0$21[0];h$1 = t0$21[1];$targ$19 = h$1.wrapBodyOrder + i$1 / 1000000;h$1.__ord = $targ$19;[];
    } else {
      ___match_error(m$17);
    }
  }$it$11.handlers.sort(function (x$14, y$1) {
    return x$14.__ord < y$1.__ord;
  });x$13 = expr$2;m$18 = null;$17: for (var _iterator14 = $it$11.handlers[Symbol.iterator](), _step14; !(_step14 = _iterator14.next()).done;) {
    m$18 = _step14.value;
    var handler$2 = undefined;handler$2 = m$18;x$13 = handler$2.wrapAssignment(x$13, $it$11.info, $it$11.opt);x$13;
  }return x$13;
};__amp____colon__(PatternCompiler$0, __amp____colon__((accum$6 = {}, accum$6["::name"] = "PatternCompiler", accum$6), (accum$7 = {}, accum$7["::egclass"] = true, accum$7)));PatternProcessor$0 = function PatternProcessor() {
  var $targ$20 = undefined;var $targ$21 = undefined;var $targ$22 = undefined;var $it$12 = undefined;if (!getChecker(PatternProcessor$0)(this)) {
    $it$12 = Object.create(PatternProcessor$0.prototype);
  } else {
    $it$12 = this;
  }$targ$20 = [];$it$12.temps = $targ$20;[];$targ$21 = [];$it$12.parts = $targ$21;[];$targ$22 = GenSym$0("t");$it$12.gen = $targ$22;[];return $it$12;
};PatternProcessor$0.prototype["do"] = function (part$0) {
  var $it$13 = undefined;var self$10 = undefined;$it$13 = this;self$10 = this;return $it$13.parts.push(["do", part$0]);
};PatternProcessor$0.prototype.check = function check() {
  var part$1 = undefined;var tags$3 = undefined;var t0$22 = undefined;var m$19$0 = undefined;var $it$14 = undefined;var self$11 = undefined;$it$14 = this;self$11 = this;m$19$0 = arguments;t0$22 = m$19$0.length;if (t0$22 >= 1 && t0$22 <= 2) {
    part$1 = m$19$0[0];if (1 >= t0$22) {
      tags$3 = {};
    } else {
      tags$3 = m$19$0[1];
    }return $it$14.parts.push(__amp__(["check", part$1], tags$3));
  } else {
    return ___match_error(m$19$0);
  }
};PatternProcessor$0.prototype.temp = function temp() {
  var x$16 = undefined;var x$17 = undefined;var $targ$23 = undefined;var init$0 = undefined;var bridge$$19874$0 = undefined;var m$21$0 = undefined;var x$15 = undefined;var v$5 = undefined;var t0$23 = undefined;var m$20$0 = undefined;var $it$15 = undefined;var self$12 = undefined;$it$15 = this;self$12 = this;m$20$0 = arguments;t0$23 = m$20$0.length;if (t0$23 >= 1 && t0$23 <= 2) {
    x$15 = m$20$0[0];if (1 >= t0$23) {
      v$5 = null;
    } else {
      v$5 = m$20$0[1];
    }m$21$0 = x$15;bridge$$19874$0 = m$21$0;if (((x$16 = bridge$$19874$0, x$16 instanceof Array && x$16[0] === "variable") || (x$17 = bridge$$19874$0, x$17 instanceof Array && x$17[0] === "symbol")) && (___hasprop(m$21$0, "single_assignment") && ((m$21$0.single_assignment ? true : false) && !v$5))) {
      return x$15;
    } else {
      init$0 = m$21$0;v$5 = v$5 || ["symbol", $it$15.gen()];$targ$23 = true;v$5.single_assignment = $targ$23;[];$it$15.temps.push(v$5);$it$15["do"](["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], v$5], init$0]]);return v$5;
    }
  } else {
    return ___match_error(m$20$0);
  }
};PatternProcessor$0.prototype.process = function process(pattern$3, rhs$3, fns$0) {
  var x$18 = undefined;var x$19 = undefined;var t$1 = undefined;var t$2 = undefined;var t$3 = undefined;var pp$0 = undefined;var x$20 = undefined;var m$23 = undefined;var t$4 = undefined;var m$24 = undefined;var acc$11 = undefined;var temp$13 = undefined;var fn$1 = undefined;var parts$0 = undefined;var t$5 = undefined;var m$25 = undefined;var acc$12 = undefined;var temp$14 = undefined;var t$6 = undefined;var otherwise$0 = undefined;var m$26$0 = undefined;var m$27 = undefined;var m$29 = undefined;var end$0 = undefined;var pos$0 = undefined;var m$30 = undefined;var acc$13 = undefined;var temp$15 = undefined;var nfw$0 = undefined;var nbw$0 = undefined;var ndflt$0 = undefined;var extract_length$0 = undefined;var check_length$0 = undefined;var lo$0 = undefined;var hi$0 = undefined;var t$7 = undefined;var len$0 = undefined;var fw$1 = undefined;var bw$1 = undefined;var dflt$0 = undefined;var rest$4 = undefined;var subp$11 = undefined;var xs$3 = undefined;var xs$2 = undefined;var patt$1 = undefined;var projector$2 = undefined;var subp$10 = undefined;var unconditional$1 = undefined;var ph$2$0 = undefined;var checker$2 = undefined;var subp$9 = undefined;var checker$1 = undefined;var condition$1 = undefined;var subp$8 = undefined;var subp$7 = undefined;var value$2 = undefined;var sym$0 = undefined;var $$19945$0 = undefined;var $$19946$0 = undefined;var $$19947$0 = undefined;var $$19948$0 = undefined;var t0$24 = undefined;var t1$13 = undefined;var m$22$0 = undefined;var rval$4 = undefined;var $it$16 = undefined;var self$13 = undefined;$it$16 = this;self$13 = this;m$22$0 = pattern$3;if ((x$18 = m$22$0, x$18 instanceof Array && x$18[0] === "ignore")) {
    rval$4 = $it$16["do"](rhs$3);
  } else {
    if (($$19945$0 = Array.isArray(m$22$0)) && (t0$24 = m$22$0.length, t0$24 === 2 && m$22$0[0] === "assign")) {
      sym$0 = m$22$0[1];rval$4 = $it$16.parts.push(fns$0.assign(sym$0, rhs$3));
    } else {
      if ($$19945$0 && (($$19947$0 = t0$24 === 3) && m$22$0[0] === "replace")) {
        subp$7 = m$22$0[1];value$2 = m$22$0[2];rval$4 = $it$16.process(subp$7, value$2, fns$0);
      } else {
        if ($$19947$0 && m$22$0[0] === "test") {
          condition$1 = m$22$0[1];subp$8 = m$22$0[2];$it$16.process(subp$8, rhs$3, fns$0);rval$4 = $it$16.check(condition$1, { test: true });
        } else {
          if ($$19947$0 && (($$19948$0 = m$22$0[0] === "check") && (checker$1 = m$22$0[1], x$19 = m$22$0[2], x$19 instanceof Array && x$19[0] === "ignore"))) {
            rval$4 = $it$16.check(["send", checker$1, ["data", rhs$3]]);
          } else {
            if ($$19948$0) {
              checker$2 = m$22$0[1];subp$9 = m$22$0[2];t$1 = $it$16.temp(rhs$3);$it$16.check(["send", checker$2, ["data", t$1]]);rval$4 = $it$16.process(subp$9, t$1, fns$0);
            } else {
              if ($$19945$0 && (t0$24 === 4 && m$22$0[0] === "project")) {
                projector$2 = m$22$0[1];subp$10 = m$22$0[2];t1$13 = m$22$0[3];unconditional$1 = t1$13;ph$2$0 = t1$13;if (ph$2$0 ? true : false) {
                  t$2 = $it$16.temp(["send", projector$2, ["data", rhs$3]]);rval$4 = $it$16.process(subp$10, t$2, fns$0);
                } else {
                  t$3 = $it$16.temp(["send", projector$2, ["data", rhs$3]]);$it$16.check(["send", t$3, ["value", 0]]);rval$4 = $it$16.process(subp$10, ["send", t$3, ["value", 1]], fns$0);
                }
              } else {
                if ($$19945$0 && (t0$24 === 2 && m$22$0[0] === "neg")) {
                  patt$1 = m$22$0[1];pp$0 = PatternProcessor$0();pp$0.process(patt$1, rhs$3, fns$0);x$20 = assemble_conditions$0(pp$0);rval$4 = $it$16.check(["send", ["symbol", "not"], ["data", ["void"], x$20]]);
                } else {
                  if ($$19945$0 && (($$19947$0 = t0$24 >= 1) && m$22$0[0] === "all")) {
                    xs$2 = Array.prototype.slice.call(m$22$0, 1);t$4 = $it$16.temp(rhs$3);m$23 = null;$18: for (var _iterator15 = xs$2[Symbol.iterator](), _step15; !(_step15 = _iterator15.next()).done;) {
                      m$23 = _step15.value;
                      var x$21 = undefined;x$21 = m$23;$it$16.process(x$21, t$4, fns$0);
                    }rval$4 = null;
                  } else {
                    if ($$19947$0 && m$22$0[0] === "any") {
                      xs$3 = Array.prototype.slice.call(m$22$0, 1);t$5 = $it$16.temp(rhs$3, ["symbol", gensym$0("bridge")]);rval$4 = $it$16.check((fn$1 = function fn(x$22, rest$3) {
                        return ["send", ["symbol", "or"], ["data", x$22, rest$3]];
                      }, parts$0 = (acc$11 = [], temp$13 = null, m$24 = null, (function () {
                        $19: for (var _iterator16 = xs$3[Symbol.iterator](), _step16; !(_step16 = _iterator16.next()).done;) {
                          m$24 = _step16.value;
                          var pp$1 = undefined;var x$23 = undefined;x$23 = m$24;pp$1 = PatternProcessor$0();pp$1.process(x$23, t$5, fns$0);temp$13 = assemble_conditions$0(pp$1);acc$11.push(temp$13);
                        }
                      })(), acc$11), util$0.construct(parts$0, fn$1, ["symbol", "false"])));
                    } else {
                      if ($$19947$0 && m$22$0[0] === "object_pattern") {
                        subp$11 = Array.prototype.slice.call(m$22$0, 1);t$6 = $it$16.temp(rhs$3);acc$12 = [];temp$14 = null;m$25 = null;$20: for (var _iterator17 = subp$11[Symbol.iterator](), _step17; !(_step17 = _iterator17.next()).done;) {
                          m$25 = _step17.value;
                          var k$0 = undefined;var v$6 = undefined;var t0$25 = undefined;var t1$14 = undefined;var t2$3 = undefined;var t3$1 = undefined;t0$25 = m$25;if (Array.isArray(t0$25) && (t1$14 = t0$25.length, t1$14 === 2 && (t2$3 = t0$25[0], Array.isArray(t2$3) && (t3$1 = t2$3.length, t3$1 === 2 && t2$3[0] === "value")))) {
                            k$0 = t2$3[1];v$6 = t0$25[1];$it$16.check(["send", ["symbol", "___hasprop"], ["data", t$6, ["value", k$0]]]);temp$14 = $it$16.process(v$6, ["send", t$6, ["value", k$0]], fns$0);acc$12.push(temp$14);
                          } else {
                            ___match_error(m$25);
                          }
                        }rval$4 = acc$12;
                      } else {
                        if ($$19945$0 && (t0$24 === 5 && m$22$0[0] === "array_pattern")) {
                          fw$1 = m$22$0[1];bw$1 = m$22$0[2];dflt$0 = m$22$0[3];rest$4 = m$22$0[4];nfw$0 = fw$1.length;nbw$0 = bw$1.length;ndflt$0 = dflt$0.length;extract_length$0 = true;check_length$0 = true;lo$0 = nfw$0 + nbw$0;hi$0 = lo$0 + ndflt$0;t$7 = $it$16.temp(rhs$3);len$0 = $it$16.temp(["send", t$7, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "length"]]]]);$it$16.check((m$26$0 = rest$4, (m$26$0 ? true : false) ? ["send", ["symbol", ">="], ["data", len$0, ["value", lo$0]]] : lo$0 === hi$0 ? ["send", ["symbol", "==="], ["data", len$0, ["value", lo$0]]] : (otherwise$0 = m$26$0, ["send", ["symbol", "and"], ["data", ["send", ["symbol", ">="], ["data", len$0, ["value", lo$0]]], ["send", ["symbol", "<="], ["data", len$0, ["value", hi$0]]]]])));m$27 = null;$21: for (var _iterator18 = enumerate(fw$1)[Symbol.iterator](), _step18; !(_step18 = _iterator18.next()).done;) {
                            m$27 = _step18.value;
                            var i$2 = undefined;var m$28 = undefined;var t0$26 = undefined;var t1$15 = undefined;t0$26 = m$27;if (Array.isArray(t0$26) && (t1$15 = t0$26.length, t1$15 === 2)) {
                              i$2 = t0$26[0];m$28 = t0$26[1];$it$16.process(m$28, ["send", t$7, ["value", i$2]], fns$0);
                            } else {
                              ___match_error(m$27);
                            }
                          }m$29 = null;$22: for (var _iterator19 = enumerate(dflt$0)[Symbol.iterator](), _step19; !(_step19 = _iterator19.next()).done;) {
                            m$29 = _step19.value;
                            var idx$0 = undefined;var i$3 = undefined;var patt$2 = undefined;var value$3 = undefined;var t0$27 = undefined;var t1$16 = undefined;var t2$4 = undefined;var t3$2 = undefined;t0$27 = m$29;if (Array.isArray(t0$27) && (t1$16 = t0$27.length, t1$16 === 2 && (i$3 = t0$27[0], t2$4 = t0$27[1], Array.isArray(t2$4) && (t3$2 = t2$4.length, t3$2 === 2)))) {
                              patt$2 = t2$4[0];value$3 = t2$4[1];idx$0 = i$3 + nfw$0;$it$16.process(patt$2, ["send", ["symbol", "if"], ["data", ["send", ["symbol", ">="], ["data", ["value", idx$0 + nbw$0], len$0]], value$3, ["send", t$7, ["value", idx$0]]]], fns$0);
                            } else {
                              ___match_error(m$29);
                            }
                          }if (rest$4 !== undefined) {
                            pos$0 = nfw$0 + ndflt$0;if (nbw$0 > 0) {
                              end$0 = [["value", -nbw$0]];
                            } else {
                              end$0 = [];
                            }$it$16.process(rest$4, ["send", ["send", ["send", ["send", ["symbol", "Array"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "slice"]]]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "call"]]]], ["data", t$7, ["value", pos$0]].concat(end$0)], fns$0);
                          } else {
                            [];
                          }acc$13 = [];temp$15 = null;m$30 = null;$23: for (var _iterator20 = enumerate(bw$1)[Symbol.iterator](), _step20; !(_step20 = _iterator20.next()).done;) {
                            m$30 = _step20.value;
                            var i$4 = undefined;var m$31 = undefined;var t0$28 = undefined;var t1$17 = undefined;t0$28 = m$30;if (Array.isArray(t0$28) && (t1$17 = t0$28.length, t1$17 === 2)) {
                              i$4 = t0$28[0];m$31 = t0$28[1];temp$15 = $it$16.process(m$31, ["send", ["symbol", "___js_fetch"], ["data", t$7, ["send", ["symbol", "-"], ["data", len$0, ["value", nbw$0 - i$4]]]]], fns$0);acc$13.push(temp$15);
                            } else {
                              ___match_error(m$30);
                            }
                          }rval$4 = acc$13;
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
  }return rval$4;
};__amp____colon__(PatternProcessor$0, __amp____colon__((accum$8 = {}, accum$8["::name"] = "PatternProcessor", accum$8), (accum$9 = {}, accum$9["::egclass"] = true, accum$9)));assemble_conditions$0 = function assemble_conditions(pp$2) {
  var m$32 = undefined;var acc$14 = undefined;var temp$16 = undefined;var decls$0 = undefined;var construct$0 = undefined;construct$0 = function construct(ph$3$0) {
    var x$26 = undefined;var rest$6 = undefined;var x$25 = undefined;var x$24 = undefined;var rest$5 = undefined;var $$20344$0 = undefined;var $$20345$0 = undefined;var t0$29 = undefined;var t1$18 = undefined;var t2$5 = undefined;var t3$3 = undefined;t0$29 = ph$3$0;t1$18 = t0$29.length;if (t1$18 === 0) {
      return ["value", true];
    } else {
      if (t1$18 >= 1 && (t2$5 = t0$29[0], Array.isArray(t2$5) && (t3$3 = t2$5.length, t3$3 === 2 && t2$5[0] === "do"))) {
        x$24 = t2$5[1];rest$5 = Array.prototype.slice.call(t0$29, 1);return ["multi", x$24, construct$0(rest$5)];
      } else {
        if (t1$18 === 1 && (t2$5 = t0$29[0], Array.isArray(t2$5) && (t3$3 = t2$5.length, t3$3 === 2 && t2$5[0] === "check"))) {
          x$25 = t2$5[1];return x$25;
        } else {
          if (t1$18 >= 1 && (t2$5 = t0$29[0], Array.isArray(t2$5) && (t3$3 = t2$5.length, t3$3 === 2 && t2$5[0] === "check"))) {
            x$26 = t2$5[1];rest$6 = Array.prototype.slice.call(t0$29, 1);return ["send", ["symbol", "and"], ["data", x$26, construct$0(rest$6)]];
          } else {
            return ___match_error(ph$3$0);
          }
        }
      }
    }
  };if (pp$2.temps.length) {
    acc$14 = [];temp$16 = null;m$32 = null;$24: for (var _iterator21 = pp$2.temps[Symbol.iterator](), _step21; !(_step21 = _iterator21.next()).done;) {
      m$32 = _step21.value;
      var t$8 = undefined;t$8 = m$32;temp$16 = ["declare", t$8];acc$14.push(temp$16);
    }decls$0 = acc$14;return ["multi"].concat(decls$0).concat([construct$0(pp$2.parts)]);
  } else {
    return construct$0(pp$2.parts);
  }
};assemble_pattern$0 = function assemble_pattern() {
  var m$34 = undefined;var m$35 = undefined;var test$0 = undefined;var lead$0 = undefined;var trail$0 = undefined;var construct$1 = undefined;var parts$1 = undefined;var t$9 = undefined;var f$4 = undefined;var t0$30 = undefined;var m$33$0 = undefined;m$33$0 = arguments;t0$30 = m$33$0.length;if (t0$30 >= 2 && t0$30 <= 3) {
    parts$1 = m$33$0[0];t$9 = m$33$0[1];if (2 >= t0$30) {
      f$4 = null;
    } else {
      f$4 = m$33$0[2];
    }lead$0 = [];m$34 = null;$25: for (var _iterator22 = parts$1.slice(0)[Symbol.iterator](), _step22; !(_step22 = _iterator22.next()).done;) {
      m$34 = _step22.value;
      var x$28 = undefined;var x$27 = undefined;var $$20459$0 = undefined;var $$20460$0 = undefined;var $$20461$0 = undefined;var $$20462$0 = undefined;var t0$31 = undefined;var t1$19 = undefined;t0$31 = m$34;if (($$20460$0 = Array.isArray(t0$31)) && (t1$19 = t0$31.length, ($$20462$0 = t1$19 === 2) && t0$31[0] === "do")) {
        x$27 = t0$31[1];lead$0.push(x$27);parts$1.shift();
      } else {
        if ($$20462$0 && t0$31[0] === "check") {
          x$28 = t0$31[1];break $25;
        } else {
          ___match_error(m$34);
        }
      }
    }trail$0 = [];m$35 = null;$26: for (var _iterator23 = parts$1.slice(0).reverse()[Symbol.iterator](), _step23; !(_step23 = _iterator23.next()).done;) {
      m$35 = _step23.value;
      var x$30 = undefined;var x$29 = undefined;var $$20466$0 = undefined;var $$20467$0 = undefined;var $$20468$0 = undefined;var $$20469$0 = undefined;var t0$32 = undefined;var t1$20 = undefined;t0$32 = m$35;if (($$20467$0 = Array.isArray(t0$32)) && (t1$20 = t0$32.length, ($$20469$0 = t1$20 === 2) && t0$32[0] === "do")) {
        x$29 = t0$32[1];trail$0.unshift(x$29);parts$1.pop();
      } else {
        if ($$20469$0 && t0$32[0] === "check") {
          x$30 = t0$32[1];break $26;
        } else {
          ___match_error(m$35);
        }
      }
    }construct$1 = function construct(ph$4$0) {
      var other$2 = undefined;var x$33 = undefined;var rest$8 = undefined;var x$32 = undefined;var x$31 = undefined;var rest$7 = undefined;var $$20532$0 = undefined;var $$20533$0 = undefined;var t0$33 = undefined;var t1$21 = undefined;var t2$6 = undefined;var t3$4 = undefined;t0$33 = ph$4$0;t1$21 = t0$33.length;if (t1$21 === 0) {
        return ["value", true];
      } else {
        if (t1$21 >= 1 && (t2$6 = t0$33[0], Array.isArray(t2$6) && (t3$4 = t2$6.length, t3$4 === 2 && t2$6[0] === "do"))) {
          x$31 = t2$6[1];rest$7 = Array.prototype.slice.call(t0$33, 1);return ["multi", x$31, construct$1(rest$7)];
        } else {
          if (t1$21 === 1 && (t2$6 = t0$33[0], Array.isArray(t2$6) && (t3$4 = t2$6.length, t3$4 === 2 && t2$6[0] === "check"))) {
            x$32 = t2$6[1];return x$32;
          } else {
            if (t1$21 >= 1 && (t2$6 = t0$33[0], Array.isArray(t2$6) && (t3$4 = t2$6.length, t3$4 === 2 && t2$6[0] === "check"))) {
              x$33 = t2$6[1];rest$8 = Array.prototype.slice.call(t0$33, 1);return ["send", ["symbol", "and"], ["data", x$33, construct$1(rest$8)]];
            } else {
              other$2 = ph$4$0;throw ErrorFactory(["oops"]).create("?!?", other$2);
            }
          }
        }
      }
    };if (parts$1.length) {
      test$0 = construct$1(parts$1);return ["multi"].concat(lead$0).concat([f$4 ? ["send", ["symbol", "if"], ["data", test$0, ["multi"].concat(trail$0).concat([t$9]), f$4]] : ["send", ["symbol", "if"], ["data", test$0, ["multi"].concat(trail$0).concat([t$9])]]]);
    } else {
      return ["multi"].concat(lead$0).concat(trail$0).concat([t$9]);
    }
  } else {
    return ___match_error(m$33$0);
  }
};inject_below_uses$0 = function inject_below_uses(ph$5$0, fn$2) {
  var other$3 = undefined;var scope$0 = undefined;var x$34 = undefined;var t0$34 = undefined;var t1$22 = undefined;t0$34 = ph$5$0;t1$22 = t0$34.length;if (t1$22 === 3 && t0$34[0] === "use") {
    scope$0 = t0$34[1];x$34 = t0$34[2];return ["use", scope$0, inject_below_uses$0(x$34, fn$2)];
  } else {
    other$3 = ph$5$0;return fn$2(other$3);
  }
};checkall$0 = ["send", "data", "multi", "assign", "void", "check", "do"];same_block$0 = function same_block(ph$6$0, ban1$0, ban2$0) {
  var m$36 = undefined;var other$4 = undefined;var type1$0 = undefined;var args1$0 = undefined;var type2$0 = undefined;var args2$0 = undefined;var m1$0 = undefined;var m2$0 = undefined;var v1$2 = undefined;var v2$2 = undefined;var s1$0 = undefined;var s2$0 = undefined;var v1$1 = undefined;var v2$1 = undefined;var $$20634$0 = undefined;var $$20635$0 = undefined;var $$20636$0 = undefined;var $$20637$0 = undefined;var $$20638$0 = undefined;var $$20639$0 = undefined;var $$20640$0 = undefined;var t0$35 = undefined;var t1$23 = undefined;var t2$7 = undefined;var t3$5 = undefined;var t4$1 = undefined;var t5$1 = undefined;t0$35 = ph$6$0;t1$23 = t0$35.length;if (($$20636$0 = t1$23 === 2) && (t2$7 = t0$35[0], ($$20638$0 = Array.isArray(t2$7)) && (t3$5 = t2$7.length, ($$20640$0 = t3$5 === 2) && (t2$7[0] === "variable" && (v1$1 = t2$7[1], t4$1 = t0$35[1], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 2 && t4$1[0] === "variable")))))) {
    v2$1 = t4$1[1];return v1$1 === v2$1;
  } else {
    if ($$20640$0 && (t2$7[0] === "symbol" && (s1$0 = t2$7[1], t4$1 = t0$35[1], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 2 && t4$1[0] === "symbol")))) {
      s2$0 = t4$1[1];return !send(ban1$0, s1$0) && !send(ban2$0, s2$0) && s1$0 === s2$0;
    } else {
      if ($$20640$0 && (t2$7[0] === "value" && (v1$2 = t2$7[1], t4$1 = t0$35[1], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 2 && t4$1[0] === "value")))) {
        v2$2 = t4$1[1];return v1$2 === v2$2;
      } else {
        if ($$20640$0 && (t2$7[0] === "macro" && (m1$0 = t2$7[1], t4$1 = t0$35[1], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 2 && t4$1[0] === "macro")))) {
          m2$0 = t4$1[1];return m1$0 === m2$0;
        } else {
          if (Array.isArray(t0$35) && (t1$23 = t0$35.length, t1$23 === 2 && (t2$7 = t0$35[0], Array.isArray(t2$7) && (t3$5 = t2$7.length, t3$5 >= 1 && (type1$0 = t2$7[0], args1$0 = Array.prototype.slice.call(t2$7, 1), t4$1 = t0$35[1], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 >= 1 && (type2$0 = t4$1[0], args2$0 = Array.prototype.slice.call(t4$1, 1), checkall$0.indexOf(type1$0) !== -1))))))) {
            if (type1$0 === type2$0 && args1$0.length === args2$0.length) {
              m$36 = null;$27: for (var _iterator24 = zip(args1$0, args2$0)[Symbol.iterator](), _step24; !(_step24 = _iterator24.next()).done;) {
                m$36 = _step24.value;
                var pair$0 = undefined;pair$0 = m$36;if (!same_block$0(pair$0, ban1$0, ban2$0)) {
                  return false;
                }
              }return true;
            } else {
              return false;
            }
          } else {
            other$4 = ph$6$0;return false;
          }
        }
      }
    }
  }
};parse_clauses$0 = function parse_clauses(info$0, target$1, stmts$0, opt$0) {
  var m$37 = undefined;var acc$15 = undefined;var temp$17 = undefined;var m$39 = undefined;var acc$16 = undefined;var temp$18 = undefined;var m$40 = undefined;var acc$17 = undefined;var temp$19 = undefined;var decls$1 = undefined;var all_temps$0 = undefined;var the_parts$0 = undefined;var unique_temps$0 = undefined;all_temps$0 = [];acc$15 = [];temp$17 = null;m$37 = null;$28: for (var _iterator25 = info$0.step_all(["clause"], stmts$0)[Symbol.iterator](), _step25; !(_step25 = _iterator25.next()).done;) {
    var _iterator26, _step26;
    (function () {
      m$37 = _step25.value;
      var accum$10 = undefined;var t0$37 = undefined;var m$38 = undefined;var pc$1 = undefined;var $targ$24 = undefined;var vars$1 = undefined;var temps$0 = undefined;var blocks$0 = undefined;var vars2$0 = undefined;var x$35 = undefined;var other$6 = undefined;var b$0 = undefined;var pattern$4 = undefined;var body$1 = undefined;var $$20784$0 = undefined;var t0$36 = undefined;var t1$24 = undefined;t0$36 = m$37;if (Array.isArray(t0$36) && (t1$24 = t0$36.length, t1$24 === 3 && t0$36[0] === "clause")) {
        pattern$4 = t0$36[1];body$1 = t0$36[2];pc$1 = PatternCompiler$0(pattern$4, info$0, __amp__(opt$0, __amp____colon__({ allow_arguments: false, allow_nested: true }, (accum$10 = {}, accum$10.assign = function assign(v$7, value$4) {
          return ["do", __lt____lt____colon__$0(["assign", v$7, value$4], v$7)];
        }, accum$10))));pc$1.process_for_rhs(target$1);$targ$24 = pc$1;t0$37 = $targ$24;if (___hasprop(t0$37, "vars") && (vars$1 = t0$37.vars, ___hasprop(t0$37, "temps") && (temps$0 = t0$37.temps, ___hasprop(t0$37, "parts")))) {
          blocks$0 = t0$37.parts;
        } else {
          ___match_error($targ$24);
        }[vars$1, temps$0, blocks$0];all_temps$0 = all_temps$0.concat(temps$0);vars2$0 = {};m$38 = null;$29: for (_iterator26 = vars$1[Symbol.iterator](); !(_step26 = _iterator26.next()).done;) {
          m$38 = _step26.value;
          var _$targ$25 = undefined;var _other$5 = undefined;var _xxx$0 = undefined;var _t0$38 = undefined;var _t1$25 = undefined;_t0$38 = m$38;if (Array.isArray(_t0$38) && (_t1$25 = _t0$38.length, _t1$25 === 2 && _t0$38[0] === "symbol")) {
            _xxx$0 = _t0$38[1];_$targ$25 = true;vars2$0[_xxx$0] = _$targ$25;[];
          } else {
            _other$5 = m$38;throw ErrorFactory(["syntax", "unexpected"]).create();
          }
        }if (opt$0.wrap) {
          pc$1.handlers.push(opt$0);
        }temp$17 = ["clause", vars$1, vars2$0, blocks$0, pc$1.wrapBody(body$1)];acc$15.push(temp$17);
      } else {
        if ((x$35 = t0$36, x$35 instanceof Array && x$35[0] === "block")) {
          b$0 = t0$36;temp$17 = b$0;acc$15.push(temp$17);
        } else {
          other$6 = m$37;throw ErrorFactory(["syntax", "clause"]).create("Illegal clause", { clause: other$6 });acc$15.push(temp$17);
        }
      }
    })();
  }the_parts$0 = acc$15;if (opt$0.fallback) {
    the_parts$0.push(["block", opt$0.fallback(target$1)]);
  }unique_temps$0 = keys(util$0.mkset((acc$16 = [], temp$18 = null, m$39 = null, (function () {
    $30: for (var _iterator27 = all_temps$0[Symbol.iterator](), _step27; !(_step27 = _iterator27.next()).done;) {
      m$39 = _step27.value;
      var t$10 = undefined;var t0$39 = undefined;var t1$26 = undefined;t0$39 = m$39;if (Array.isArray(t0$39) && (t1$26 = t0$39.length, t1$26 === 2 && t0$39[0] === "symbol")) {
        t$10 = t0$39[1];temp$18 = t$10;acc$16.push(temp$18);
      } else {
        ___match_error(m$39);
      }
    }
  })(), acc$16)));acc$17 = [];temp$19 = null;m$40 = null;$31: for (var _iterator28 = unique_temps$0[Symbol.iterator](), _step28; !(_step28 = _iterator28.next()).done;) {
    m$40 = _step28.value;
    var t$11 = undefined;t$11 = m$40;temp$19 = ["declare", __amp____colon__(["symbol", t$11], { mutable: true })];acc$17.push(temp$19);
  }decls$1 = acc$17;return ["multi"].concat(decls$1).concat([weave_clauses$0(the_parts$0)]);
};opt_clauses$0 = function opt_clauses(clauses$0) {
  var m$41 = undefined;var acc$18 = undefined;var temp$20 = undefined;var m$44 = undefined;var acc$19 = undefined;var temp$21 = undefined;var m$45 = undefined;var acc$20 = undefined;var temp$22 = undefined;var m$46 = undefined;var acc$21 = undefined;var temp$23 = undefined;var shares$0 = undefined;var max$0 = undefined;var temps$1 = undefined;var shared_last$0 = undefined;var idx_last$0 = undefined;var new_clauses$0 = undefined;acc$18 = [];temp$20 = null;m$41 = null;$32: for (var _iterator29 = enumerate(clauses$0.slice(1))[Symbol.iterator](), _step29; !(_step29 = _iterator29.next()).done;) {
    m$41 = _step29.value;
    var t0$41 = undefined;var t1$28 = undefined;var m$42 = undefined;var $targ$26 = undefined;var varsd0$0 = undefined;var blocks0$0 = undefined;var share$0 = undefined;var idx$1 = undefined;var i$5 = undefined;var vars$2 = undefined;var varsd$0 = undefined;var blocks$1 = undefined;var body$2 = undefined;var t0$40 = undefined;var t1$27 = undefined;var t2$8 = undefined;var t3$6 = undefined;t0$40 = m$41;if (Array.isArray(t0$40) && (t1$27 = t0$40.length, t1$27 === 2 && (i$5 = t0$40[0], t2$8 = t0$40[1], Array.isArray(t2$8) && (t3$6 = t2$8.length, t3$6 === 5 && t2$8[0] === "clause")))) {
      vars$2 = t2$8[1];varsd$0 = t2$8[2];blocks$1 = t2$8[3];body$2 = t2$8[4];$targ$26 = send(clauses$0, i$5);t0$41 = $targ$26;if (Array.isArray(t0$41) && (t1$28 = t0$41.length, t1$28 === 5 && t0$41[0] === "clause")) {
        t0$41[1];varsd0$0 = t0$41[2];blocks0$0 = t0$41[3];t0$41[4];
      } else {
        ___match_error($targ$26);
      }[varsd0$0, blocks0$0];share$0 = 0;idx$1 = 0;m$42 = null;$33: for (var _iterator30 = blocks$1[Symbol.iterator](), _step30; !(_step30 = _iterator30.next()).done;) {
        m$42 = _step30.value;
        var x$36 = undefined;var x$37 = undefined;var other$7 = undefined;var m$43$0 = undefined;var b$1 = undefined;b$1 = m$42;if (same_block$0([send(blocks0$0, share$0), b$1], varsd0$0, varsd$0)) {
          share$0++;m$43$0 = b$1;if ((x$36 = m$43$0, x$36 instanceof Array && x$36[0] === "do")) {
            null;
          } else {
            if ((x$37 = m$43$0, x$37 instanceof Array && x$37[0] === "check")) {
              idx$1 = share$0;idx$1;
            } else {
              other$7 = m$43$0;__lt____gt__$0(null, other$7);
            }
          }
        } else {
          break $33;
        }
      }temp$20 = [share$0, idx$1];acc$18.push(temp$20);
    } else {
      ___match_error(m$41);
    }
  }shares$0 = acc$18;max$0 = send(Math.max, (acc$19 = [], temp$21 = null, m$44 = null, (function () {
    $34: for (var _iterator31 = shares$0[Symbol.iterator](), _step31; !(_step31 = _iterator31.next()).done;) {
      m$44 = _step31.value;
      var x$38 = undefined;var t0$42 = undefined;var t1$29 = undefined;t0$42 = m$44;if (Array.isArray(t0$42) && (t1$29 = t0$42.length, t1$29 === 2)) {
        x$38 = t0$42[0];t0$42[1];temp$21 = x$38;acc$19.push(temp$21);
      } else {
        ___match_error(m$44);
      }
    }
  })(), acc$19));shares$0.push([0, 0]);acc$20 = [];temp$22 = null;m$45 = null;$35: for (var _iterator32 = range(1, max$0)[Symbol.iterator](), _step32; !(_step32 = _iterator32.next()).done;) {
    m$45 = _step32.value;
    temp$22 = ["symbol", gensym$0()];acc$20.push(temp$22);
  }temps$1 = acc$20;shared_last$0 = 0;idx_last$0 = 0;acc$21 = [];temp$23 = null;m$46 = null;$36: for (var _iterator33 = enumerate(clauses$0)[Symbol.iterator](), _step33; !(_step33 = _iterator33.next()).done;) {
    m$46 = _step33.value;
    var t0$44 = undefined;var t1$31 = undefined;var m$47 = undefined;var acc$22 = undefined;var temp$24 = undefined;var rest$9 = undefined;var newblocks$0 = undefined;var $targ$27 = undefined;var share$1 = undefined;var idx$2 = undefined;var shared$0 = undefined;var n_to_share$0 = undefined;var to_share$0 = undefined;var other$8 = undefined;var i$6 = undefined;var vars$3 = undefined;var varsd$1 = undefined;var blocks$2 = undefined;var body$3 = undefined;var t0$43 = undefined;var t1$30 = undefined;var t2$9 = undefined;var t3$7 = undefined;t0$43 = m$46;if (Array.isArray(t0$43) && (t1$30 = t0$43.length, t1$30 === 2 && (i$6 = t0$43[0], t2$9 = t0$43[1], Array.isArray(t2$9) && (t3$7 = t2$9.length, t3$7 === 5 && t2$9[0] === "clause")))) {
      vars$3 = t2$9[1];varsd$1 = t2$9[2];blocks$2 = t2$9[3];body$3 = t2$9[4];$targ$27 = send(shares$0, i$6);t0$44 = $targ$27;if (Array.isArray(t0$44) && (t1$31 = t0$44.length, t1$31 === 2)) {
        share$1 = t0$44[0];idx$2 = t0$44[1];
      } else {
        ___match_error($targ$27);
      }[share$1, idx$2];if (idx_last$0) {
        shared$0 = [["check", send(temps$1, idx_last$0 - 1)]];
      } else {
        shared$0 = [];
      }n_to_share$0 = Math.max(shared_last$0, share$1);acc$22 = [];temp$24 = null;m$47 = null;$37: for (var _iterator34 = enumerate(blocks$2.slice(shared_last$0, n_to_share$0))[Symbol.iterator](), _step34; !(_step34 = _iterator34.next()).done;) {
        m$47 = _step34.value;
        var j$1 = undefined;var x$40 = undefined;var j$0 = undefined;var x$39 = undefined;var $$21243$0 = undefined;var $$21244$0 = undefined;var $$21245$0 = undefined;var $$21246$0 = undefined;var t0$45 = undefined;var t1$32 = undefined;var t2$10 = undefined;var t3$8 = undefined;t0$45 = m$47;if (($$21244$0 = Array.isArray(t0$45)) && (t1$32 = t0$45.length, ($$21246$0 = t1$32 === 2) && (j$0 = t0$45[0], t2$10 = t0$45[1], Array.isArray(t2$10) && (t3$8 = t2$10.length, t3$8 === 2 && t2$10[0] === "check")))) {
          x$39 = t2$10[1];temp$24 = ["check", ["assign", send(temps$1, shared_last$0 + j$0), x$39]];acc$22.push(temp$24);
        } else {
          if ($$21246$0 && (j$1 = t0$45[0], t2$10 = t0$45[1], Array.isArray(t2$10) && (t3$8 = t2$10.length, t3$8 === 2 && t2$10[0] === "do"))) {
            x$40 = t2$10[1];temp$24 = ["do", x$40];acc$22.push(temp$24);
          } else {
            ___match_error(m$47);
          }
        }
      }to_share$0 = acc$22;shared_last$0 = share$1;idx_last$0 = idx$2;rest$9 = blocks$2.slice(n_to_share$0);newblocks$0 = shared$0.concat(to_share$0).concat(rest$9);temp$23 = ["clause", vars$3, varsd$1, newblocks$0, body$3];acc$21.push(temp$23);
    } else {
      other$8 = m$46;throw ErrorFactory(["oops"]).create("what", { value: other$8 });acc$21.push(temp$23);
    }
  }new_clauses$0 = acc$21;return [temps$1, new_clauses$0];
};weave_clauses$0 = function weave_clauses(parts$2) {
  var m$48 = undefined;var m$51 = undefined;var acc$24 = undefined;var temp$27 = undefined;var groups$0 = undefined;var reassemble$0 = undefined;var new_temps$0 = undefined;var helper$0 = undefined;groups$0 = classify_contiguous$0(parts$2, function (temp$25$0) {
    var t0$46 = undefined;var t1$33 = undefined;var cls$0 = undefined;t0$46 = temp$25$0;if (Array.isArray(t0$46) && (t1$33 = t0$46.length, t1$33 >= 1)) {
      cls$0 = t0$46[0];Array.prototype.slice.call(t0$46, 1);
    } else {
      ___match_error(temp$25$0);
    }return cls$0;
  });reassemble$0 = [];new_temps$0 = [];m$48 = null;$38: for (var _iterator35 = groups$0[Symbol.iterator](), _step35; !(_step35 = _iterator35.next()).done;) {
    m$48 = _step35.value;
    var t0$48 = undefined;var t1$35 = undefined;var $targ$28 = undefined;var ts$0 = undefined;var new_clauses$1 = undefined;var elems$1 = undefined;var elems$0 = undefined;var $$21353$0 = undefined;var $$21354$0 = undefined;var $$21355$0 = undefined;var $$21356$0 = undefined;var t0$47 = undefined;var t1$34 = undefined;t0$47 = m$48;if (($$21354$0 = Array.isArray(t0$47)) && (t1$34 = t0$47.length, ($$21356$0 = t1$34 >= 1) && t0$47[0] === "clause")) {
      elems$0 = Array.prototype.slice.call(t0$47, 1);$targ$28 = opt_clauses$0(elems$0);t0$48 = $targ$28;if (Array.isArray(t0$48) && (t1$35 = t0$48.length, t1$35 === 2)) {
        ts$0 = t0$48[0];new_clauses$1 = t0$48[1];
      } else {
        ___match_error($targ$28);
      }[ts$0, new_clauses$1];new_temps$0 = new_temps$0.concat(ts$0);reassemble$0 = reassemble$0.concat(new_clauses$1);
    } else {
      if ($$21356$0 && t0$47[0] === "block") {
        elems$1 = Array.prototype.slice.call(t0$47, 1);reassemble$0 = reassemble$0.concat(elems$1);
      } else {
        ___match_error(m$48);
      }
    }
  }helper$0 = function helper(ph$7$0) {
    var m$49 = undefined;var acc$23 = undefined;var temp$26 = undefined;var decls$2 = undefined;var vars$4 = undefined;var varsd$2 = undefined;var blocks$3 = undefined;var body$5 = undefined;var rest$11 = undefined;var body$4 = undefined;var rest$10 = undefined;var $$21426$0 = undefined;var $$21427$0 = undefined;var $$21428$0 = undefined;var $$21429$0 = undefined;var $$21430$0 = undefined;var $$21431$0 = undefined;var t0$49 = undefined;var t1$36 = undefined;var t2$11 = undefined;var t3$9 = undefined;var t4$2 = undefined;var t5$2 = undefined;var t6$0 = undefined;t0$49 = ph$7$0;t1$36 = t0$49.length;if (t1$36 === 0) {
      return ["multi"];
    } else {
      if (($$21428$0 = t1$36 >= 1) && (t2$11 = t0$49[0], ($$21430$0 = Array.isArray(t2$11)) && (t3$9 = t2$11.length, t3$9 === 2 && (t2$11[0] === "block" && (t4$2 = getProjector(Body$0)(t2$11[1]), t4$2[0] && (t5$2 = t4$2[1], t6$0 = t5$2.length, t6$0 >= 0)))))) {
        body$4 = Array.prototype.slice.call(t5$2, 0);rest$10 = Array.prototype.slice.call(t0$49, 1);return ["multi"].concat(body$4).concat([helper$0(rest$10)]);
      } else {
        if ($$21430$0 && (t3$9 === 5 && t2$11[0] === "clause")) {
          vars$4 = t2$11[1];varsd$2 = t2$11[2];blocks$3 = t2$11[3];body$5 = t2$11[4];rest$11 = Array.prototype.slice.call(t0$49, 1);acc$23 = [];temp$26 = null;m$49 = null;$39: for (var _iterator36 = vars$4[Symbol.iterator](), _step36; !(_step36 = _iterator36.next()).done;) {
            m$49 = _step36.value;
            var bridge$$21509$0 = undefined;var m$50$0 = undefined;var v$8 = undefined;v$8 = m$49;m$50$0 = v$8.declare_mode;if (m$50$0 === "set") {
              temp$26 = ["splice"];
            } else {
              if (m$50$0 === "let") {
                temp$26 = ["declare", __amp__(v$8, { mutable: false })];
              } else {
                if (m$50$0 === "var") {
                  temp$26 = ["declare", __amp__(v$8, { mutable: true })];
                } else {
                  bridge$$21509$0 = m$50$0;if (bridge$$21509$0 === "unqualified" || bridge$$21509$0 === void 0) {
                    temp$26 = ["declare", __amp__(v$8, { mutable: false })];
                  } else {
                    temp$26 = ___match_error(m$50$0);
                  }
                }
              }
            }acc$23.push(temp$26);
          }decls$2 = acc$23;return ["tagscope", "back", ["multi"].concat(decls$2).concat([assemble_pattern$0(blocks$3, body$5, ["use", "back", helper$0(rest$11)])])];
        } else {
          return ___match_error(ph$7$0);
        }
      }
    }
  };return ["multi"].concat((acc$24 = [], temp$27 = null, m$51 = null, (function () {
    $40: for (var _iterator37 = new_temps$0[Symbol.iterator](), _step37; !(_step37 = _iterator37.next()).done;) {
      m$51 = _step37.value;
      var t$12 = undefined;t$12 = m$51;temp$27 = ["declare", t$12];acc$24.push(temp$27);
    }
  })(), acc$24)).concat([helper$0(reassemble$0)]);
};$targ$29 = PatternCompiler$0;exports.PatternCompiler = $targ$29;[];$targ$30 = parse_clauses$0;exports.parse_clauses = $targ$30;[];
//# sourceMappingURL=pattern.js.map

