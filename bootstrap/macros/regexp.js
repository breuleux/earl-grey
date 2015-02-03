"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$0;
var $0$0;
var Source$0;
var $1$0;
var accum_flags$0;
$0$0 = require("../location");
Source$0 = $0$0.Source;
$1$0 = require("./helpers");
accum_flags$0 = $1$0.accum_flags;
$targ$0 = (function(mac$0) {
  var accum$0;
  var accum$1;
  var t0$9;
  var t1$9;
  var RegexBuilder$0;
  var build_regexp$0;
  var accum_flagsf$0;
  var $targ$1;
  var regexp_mac$0;
  var exports$0;
  exports$0 = ({});
  RegexBuilder$0 = (function RegexBuilder() {
    var $it$0;
    if ((!getChecker(RegexBuilder$0)(this))) {
      $it$0 = Object.create(RegexBuilder$0.prototype);
    } else {
      $it$0 = this;
    }
    return $it$0;
  });
  (RegexBuilder$0.prototype["wrap"] = (function wrap(x$0) {
    var $it$1;
    var self$0;
    $it$1 = this;
    self$0 = this;
    return (("(?:" + x$0) + ")");
  }));
  (RegexBuilder$0.prototype["quote"] = (function quote(x$1) {
    var $it$2;
    var self$1;
    $it$2 = this;
    self$1 = this;
    return x$1.replace(RegExp("([.?*+\\^$\\[\\]\\(\\)\\{\\}|\\\\])", "g"), "\\$1");
  }));
  (RegexBuilder$0.prototype["quote_charset"] = (function quote_charset(x$2) {
    var $it$3;
    var self$2;
    $it$3 = this;
    self$2 = this;
    return x$2.replace(RegExp("([\\[\\]\\(\\)\\{\\}\\^])", "g"), "\\$1");
  }));
  (RegexBuilder$0.prototype["build"] = (function build(expr$0) {
    var t0$1;
    var t1$1;
    var $targ$2;
    var t0$2;
    var t1$2;
    var $targ$3;
    var t0$3;
    var t1$3;
    var $targ$4;
    var t0$4;
    var t1$4;
    var t0$5;
    var t1$5;
    var x$4;
    var $targ$5;
    var $targ$6;
    var v$0;
    var t0$6;
    var t1$6;
    var t0$7;
    var t1$7;
    var t2$1;
    var t3$1;
    var t4$1;
    var t5$0;
    var t6$0;
    var t7$0;
    var t8$0;
    var t9$0;
    var x$5;
    var $targ$7;
    var $targ$8;
    var v$1;
    var m$1;
    var acc$0;
    var temp$0;
    var m$2;
    var acc$1;
    var temp$1;
    var other$0;
    var args$1;
    var args$0;
    var ph$1$0;
    var a$0;
    var b$0;
    var s$0;
    var x$3;
    var ph$0$0;
    var $$15219$0;
    var $$15220$0;
    var $$15221$0;
    var $$15222$0;
    var $$15223$0;
    var $$15224$0;
    var $$15225$0;
    var $$15226$0;
    var $$15227$0;
    var t0$0;
    var t1$0;
    var t2$0;
    var t3$0;
    var t4$0;
    var m$0$0;
    var $it$4;
    var self$3;
    $it$4 = this;
    self$3 = this;
    m$0$0 = expr$0;
    if ((($$15219$0 = (m$0$0 instanceof Array)) && ((t0$0 = m$0$0.length), (($$15221$0 = (t0$0 === 2)) && (m$0$0[0] === "symbol"))))) {
      ph$0$0 = m$0$0[1];
      if ((ph$0$0 === "any")) {
        return ".";
      } else {
        if ((ph$0$0 === "start")) {
          return "^";
        } else {
          if ((ph$0$0 === "end")) {
            return "$";
          } else {
            if ((ph$0$0 === "alpha")) {
              return "\\a";
            } else {
              if ((ph$0$0 === "digit")) {
                return "\\d";
              } else {
                if ((ph$0$0 === "word")) {
                  return "\\w";
                } else {
                  if ((ph$0$0 === "space")) {
                    return "\\s";
                  } else {
                    if ((ph$0$0 === "boundary")) {
                      return "\\b";
                    } else {
                      if ((ph$0$0 === "a")) {
                        return "\\a";
                      } else {
                        if ((ph$0$0 === "d")) {
                          return "\\d";
                        } else {
                          if ((ph$0$0 === "w")) {
                            return "\\w";
                          } else {
                            if ((ph$0$0 === "s")) {
                              return "\\s";
                            } else {
                              if ((ph$0$0 === "b")) {
                                return "\\b";
                              } else {
                                return ___match_error(ph$0$0);
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
    } else {
      if (($$15221$0 && (m$0$0[0] === "value"))) {
        x$3 = m$0$0[1];
        return $it$4.quote(x$3);
      } else {
        if (($$15219$0 && (($$15221$0 = (t0$0 === 3)) && (($$15222$0 = (m$0$0[0] === "send")) && ((t1$0 = m$0$0[1]), (($$15224$0 = (t1$0 instanceof Array)) && ((t2$0 = t1$0.length), (($$15226$0 = (t2$0 === 2)) && (($$15227$0 = (t1$0[0] === "symbol")) && ((t1$0[1] === "raw") && ((t3$0 = m$0$0[2]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 2) && (t3$0[0] === "value"))))))))))))))) {
          s$0 = t3$0[1];
          return s$0;
        } else {
          if (($$15227$0 && ((ph$1$0 = t1$0[1]), (t3$0 = m$0$0[2]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 3) && (t3$0[0] === "data"))))))) {
            a$0 = t3$0[1];
            b$0 = t3$0[2];
            if ((ph$1$0 === "||")) {
              return $it$4.wrap((($it$4.build(a$0) + "|") + $it$4.build(b$0)));
            } else {
              if ((ph$1$0 === "or")) {
                return $it$4.wrap((($it$4.build(a$0) + "|") + $it$4.build(b$0)));
              } else {
                if ((ph$1$0 === "*")) {
                  $targ$2 = a$0;
                  t0$1 = $targ$2;
                  if (((t0$1 instanceof Array) && ((t1$1 = t0$1.length), ((t1$1 === 1) && (t0$1[0] === "void"))))) {} else {
                    ___match_error($targ$2);
                  }
                  [];
                  return $it$4.wrap(($it$4.build(b$0) + "*"));
                } else {
                  if ((ph$1$0 === "+")) {
                    $targ$3 = a$0;
                    t0$2 = $targ$3;
                    if (((t0$2 instanceof Array) && ((t1$2 = t0$2.length), ((t1$2 === 1) && (t0$2[0] === "void"))))) {} else {
                      ___match_error($targ$3);
                    }
                    [];
                    return $it$4.wrap(($it$4.build(b$0) + "+"));
                  } else {
                    if ((ph$1$0 === "?")) {
                      $targ$4 = a$0;
                      t0$3 = $targ$4;
                      if (((t0$3 instanceof Array) && ((t1$3 = t0$3.length), ((t1$3 === 1) && (t0$3[0] === "void"))))) {} else {
                        ___match_error($targ$4);
                      }
                      [];
                      return $it$4.wrap(($it$4.build(b$0) + "?"));
                    } else {
                      if ((ph$1$0 === "in")) {
                        $targ$5 = a$0;
                        t0$4 = $targ$5;
                        if (((t0$4 instanceof Array) && ((t1$4 = t0$4.length), ((t1$4 === 1) && (t0$4[0] === "void"))))) {} else {
                          ___match_error($targ$5);
                        }
                        [];
                        $targ$6 = b$0;
                        t0$5 = $targ$6;
                        if (((t0$5 instanceof Array) && ((t1$5 = t0$5.length), ((t1$5 === 2) && (t0$5[0] === "value"))))) {
                          v$0 = t0$5[1];
                        } else {
                          ___match_error($targ$6);
                        }
                        x$4 = $it$4.quote_charset(v$0);
                        return (("[" + x$4) + "]");
                      } else {
                        if ((ph$1$0 === "not")) {
                          $targ$7 = a$0;
                          t0$6 = $targ$7;
                          if (((t0$6 instanceof Array) && ((t1$6 = t0$6.length), ((t1$6 === 1) && (t0$6[0] === "void"))))) {} else {
                            ___match_error($targ$7);
                          }
                          [];
                          $targ$8 = b$0;
                          t0$7 = $targ$8;
                          if (((t0$7 instanceof Array) && ((t1$7 = t0$7.length), ((t1$7 === 3) && ((t0$7[0] === "send") && ((t2$1 = t0$7[1]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 2) && ((t2$1[0] === "symbol") && ((t2$1[1] === "in") && ((t4$1 = t0$7[2]), ((t4$1 instanceof Array) && ((t5$0 = t4$1.length), ((t5$0 === 3) && ((t4$1[0] === "data") && ((t6$0 = t4$1[1]), ((t6$0 instanceof Array) && ((t7$0 = t6$0.length), ((t7$0 === 1) && ((t6$0[0] === "void") && ((t8$0 = t4$1[2]), ((t8$0 instanceof Array) && ((t9$0 = t8$0.length), ((t9$0 === 2) && (t8$0[0] === "value")))))))))))))))))))))))))) {
                            v$1 = t8$0[1];
                          } else {
                            ___match_error($targ$8);
                          }
                          x$5 = $it$4.quote_charset(v$1);
                          return (("[^" + x$5) + "]");
                        } else {
                          return ___match_error(ph$1$0);
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (($$15219$0 && (($$15221$0 = (t0$0 >= 1)) && (m$0$0[0] === "data")))) {
              args$0 = Array.prototype.slice.call(m$0$0, 1);
              return (("(" + ((acc$0 = []), (temp$0 = null), (m$1 = null), (function() {
                $6: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  m$1 = $__1.value;
                  {
                    var arg$0;
                    arg$0 = m$1;
                    temp$0 = $it$4.build(arg$0);
                    acc$0.push(temp$0);
                  }
                }
              })(), acc$0).join("")) + ")");
            } else {
              if (($$15221$0 && (m$0$0[0] === "multi"))) {
                args$1 = Array.prototype.slice.call(m$0$0, 1);
                return (("(?:" + ((acc$1 = []), (temp$1 = null), (m$2 = null), (function() {
                  $11: for (var $__0 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                      $__1; !($__1 = $__0.next()).done; ) {
                    m$2 = $__1.value;
                    {
                      var arg$1;
                      arg$1 = m$2;
                      temp$1 = $it$4.build(arg$1);
                      acc$1.push(temp$1);
                    }
                  }
                })(), acc$1).join("")) + ")");
              } else {
                other$0 = m$0$0;
                return ErrorFactory(["syntax", "regexp"]).create("Illegal regular expression", ({"expr": expr$0}));
              }
            }
          }
        }
      }
    }
  }));
  __amp____colon__(RegexBuilder$0, __amp____colon__(((accum$0 = ({})), (accum$0["::name"] = "RegexBuilder"), accum$0), ((accum$1 = ({})), (accum$1["::egclass"] = true), accum$1)));
  build_regexp$0 = (function build_regexp(x$6) {
    return RegexBuilder$0().build(x$6);
  });
  accum_flagsf$0 = (function accum_flagsf(f$0) {
    return accum_flags$0(f$0, false);
  });
  $targ$1 = (function(ph$2$0, info$0, form$0, arg$2, flags$0) {
    var x$7;
    var x$8;
    var text$2;
    var text$1;
    var m$4$0;
    var text$0;
    var s$1;
    var arg$3;
    var v$2;
    var $$15626$0;
    var $$15627$0;
    var $$15628$0;
    var $$15629$0;
    var $$15630$0;
    var $$15631$0;
    var $$15632$0;
    var $$15633$0;
    var $$15634$0;
    var t0$8;
    var t1$8;
    var t2$2;
    var t3$2;
    var t4$2;
    var t5$1;
    var t6$1;
    var m$3$0;
    var bridge$$15598$0;
    bridge$$15598$0 = ph$2$0;
    if ((((x$7 = bridge$$15598$0), ((x$7 instanceof Array) && (x$7[0] === "check"))) || ((x$8 = bridge$$15598$0), ((x$8 instanceof Array) && (x$8[0] === "project"))))) {
      return ["nostep", form$0];
    } else {
      m$3$0 = arg$2;
      if ((($$15626$0 = (m$3$0 instanceof Array)) && ((t0$8 = m$3$0.length), ((t0$8 === 2) && ((m$3$0[0] === "value") && ((t1$8 = m$3$0[1]), (typeof(t1$8) === "string"))))))) {
        v$2 = t1$8;
        m$4$0 = info$0.gettext(arg$2);
        if (getChecker(RegExp("^\\\".*\\\"$", ""))(m$4$0)) {
          text$1 = m$4$0;
          text$0 = text$1.substring(1, (text$1.length - 1));
        } else {
          text$2 = m$4$0;
          text$0 = text$2;
        }
        return ["send", ["symbol", "RegExp"], ["data", ["value", text$0], ["value", flags$0.join("")]]];
      } else {
        if (($$15626$0 && (($$15628$0 = (t0$8 === 3)) && (($$15629$0 = (m$3$0[0] === "send")) && ((t1$8 = m$3$0[1]), (($$15631$0 = (t1$8 instanceof Array)) && ((t2$2 = t1$8.length), (($$15633$0 = (t2$2 === 2)) && (($$15634$0 = (t1$8[0] === "symbol")) && ((t1$8[1] === "'") && ((t3$2 = m$3$0[2]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 3) && ((t3$2[0] === "data") && ((t5$1 = t3$2[1]), ((t5$1 instanceof Array) && ((t6$1 = t5$1.length), ((t6$1 === 1) && (t5$1[0] === "void")))))))))))))))))))) {
          arg$3 = t3$2[2];
          return ["send", ["symbol", "RegExp"], ["data", ["value", build_regexp$0(arg$3)], ["value", flags$0.join("")]]];
        } else {
          if (($$15634$0 && ((t1$8[1] === "`") && ((t3$2 = m$3$0[2]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 2) && (t3$2[0] === "value")))))))) {
            s$1 = t3$2[1];
            arg$2 = info$0.go(Source$0(s$1, "<quasiquote>"), "source", "parse");
            return ["send", ["symbol", "RegExp"], ["data", ["value", build_regexp$0(arg$2)], ["value", flags$0.join("")]]];
          } else {
            return ___match_error(m$3$0);
          }
        }
      }
    }
  });
  t0$9 = getProjector(accum_flagsf$0)($targ$1);
  if ((t0$9[0] && ((t1$9 = getProjector(mac$0("R"))(t0$9[1])), t1$9[0]))) {
    regexp_mac$0 = t1$9[1];
  } else {
    ___match_error($targ$1);
  }
  return exports$0;
});
(module["exports"] = $targ$0);
[];
//# sourceURL=<compile-source>
