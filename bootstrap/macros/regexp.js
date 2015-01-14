"use strict";
require("earlgrey-runtime");
var $targ$2;
var $0$0;
var accum_flags$0;
$0$0 = require("./helpers");
accum_flags$0 = $0$0.accum_flags;
$targ$2 = (function(mac$0) {
  var $targ$62;
  var accum$0;
  var $targ$63;
  var accum$1;
  var t1$9;
  var t0$9;
  var RegexBuilder$0;
  var $targ$4;
  var $targ$5;
  var $targ$6;
  var $targ$7;
  var build_regexp$0;
  var accum_flagsf$0;
  var $targ$11;
  var regexp_mac$0;
  var exports$0;
  exports$0 = ({});
  RegexBuilder$0 = (function() {
    var $it$0;
    $it$0 = ((!getChecker(RegexBuilder$0)(this)) ? Object.create(RegexBuilder$0.prototype) : this);
    return $it$0;
  });
  $targ$4 = (function(x$0) {
    var $it$1;
    var self$0;
    $it$1 = this;
    self$0 = this;
    return (("(?:" + x$0) + ")");
  });
  (RegexBuilder$0.prototype["wrap"] = $targ$4);
  $targ$5 = (function(x$1) {
    var $it$2;
    var self$1;
    $it$2 = this;
    self$1 = this;
    return x$1.replace(RegExp("([.?*+\\^$\\[\\]\\(\\)\\{\\}|\\\\])", "g"), "\\$1");
  });
  (RegexBuilder$0.prototype["quote"] = $targ$5);
  $targ$6 = (function(x$2) {
    var $it$3;
    var self$2;
    $it$3 = this;
    self$2 = this;
    return x$2.replace(RegExp("([\\[\\]\\(\\)\\{\\}\\^])", "g"), "\\$1");
  });
  (RegexBuilder$0.prototype["quote_charset"] = $targ$6);
  $targ$7 = (function(expr$0) {
    var t0$0;
    var $targ$26;
    var $targ$25;
    var t2$0;
    var t1$0;
    var $targ$28;
    var $targ$27;
    var t1$1;
    var t0$1;
    var $targ$29;
    var t1$2;
    var t0$2;
    var $targ$32;
    var t1$3;
    var t0$3;
    var $targ$35;
    var t1$4;
    var t0$4;
    var t1$5;
    var t0$5;
    var x$4;
    var $targ$38;
    var $targ$39;
    var v$0;
    var t1$6;
    var t0$6;
    var t9$0;
    var t8$0;
    var t7$0;
    var t6$0;
    var t5$0;
    var t4$1;
    var t3$1;
    var t2$1;
    var t1$7;
    var t0$7;
    var x$5;
    var $targ$45;
    var $targ$46;
    var v$1;
    var m$1;
    var acc$0;
    var m$2;
    var acc$1;
    var other$0;
    var args$1;
    var args$0;
    var a$0;
    var b$0;
    var ph$1$0;
    var s$0;
    var x$3;
    var ph$0$0;
    var $$14125$0;
    var $$14126$0;
    var $$14127$0;
    var $$14128$0;
    var $$14129$0;
    var $$14130$0;
    var $$14131$0;
    var $$14132$0;
    var $$14133$0;
    var t3$0;
    var t4$0;
    var m$0$0;
    var $it$4;
    var self$3;
    $it$4 = this;
    self$3 = this;
    m$0$0 = expr$0;
    if ((($$14125$0 = (m$0$0 instanceof Array)) && ((t0$0 = m$0$0.length), (($$14127$0 = (t0$0 === 2)) && (m$0$0[0] === "symbol"))))) {
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
                                return ___match_error(ph$0$0, "/home/olivier/git/earl-grey/src/macros/regexp.eg", 378, 383);
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
      if (($$14127$0 && (m$0$0[0] === "value"))) {
        x$3 = m$0$0[1];
        return $it$4.quote(x$3);
      } else {
        if (($$14125$0 && (($$14127$0 = (t0$0 === 3)) && (($$14128$0 = (m$0$0[0] === "send")) && ((t1$0 = m$0$0[1]), (($$14130$0 = (t1$0 instanceof Array)) && ((t2$0 = t1$0.length), (($$14132$0 = (t2$0 === 2)) && (($$14133$0 = (t1$0[0] === "symbol")) && ((t1$0[1] === "raw") && (($targ$25 = m$0$0[2]), (t3$0 = $targ$25), ((t3$0 instanceof Array) && (($targ$26 = t3$0.length), (t4$0 = $targ$26), ((t4$0 === 2) && (t3$0[0] === "value"))))))))))))))) {
          s$0 = t3$0[1];
          return s$0;
        } else {
          if (($$14133$0 && ((ph$1$0 = t1$0[1]), ($targ$27 = m$0$0[2]), (t3$0 = $targ$27), ((t3$0 instanceof Array) && (($targ$28 = t3$0.length), (t4$0 = $targ$28), ((t4$0 === 3) && (t3$0[0] === "data"))))))) {
            a$0 = t3$0[1];
            b$0 = t3$0[2];
            if ((ph$1$0 === "||")) {
              return $it$4.wrap((($it$4.build(a$0) + "|") + $it$4.build(b$0)));
            } else {
              if ((ph$1$0 === "or")) {
                return $it$4.wrap((($it$4.build(a$0) + "|") + $it$4.build(b$0)));
              } else {
                if ((ph$1$0 === "*")) {
                  $targ$29 = a$0;
                  t0$1 = $targ$29;
                  if (((t0$1 instanceof Array) && ((t1$1 = t0$1.length), ((t1$1 === 1) && (t0$1[0] === "void"))))) {} else {
                    ___match_error($targ$29);
                  }
                  return $it$4.wrap(($it$4.build(b$0) + "*"));
                } else {
                  if ((ph$1$0 === "+")) {
                    $targ$32 = a$0;
                    t0$2 = $targ$32;
                    if (((t0$2 instanceof Array) && ((t1$2 = t0$2.length), ((t1$2 === 1) && (t0$2[0] === "void"))))) {} else {
                      ___match_error($targ$32);
                    }
                    return $it$4.wrap(($it$4.build(b$0) + "+"));
                  } else {
                    if ((ph$1$0 === "?")) {
                      $targ$35 = a$0;
                      t0$3 = $targ$35;
                      if (((t0$3 instanceof Array) && ((t1$3 = t0$3.length), ((t1$3 === 1) && (t0$3[0] === "void"))))) {} else {
                        ___match_error($targ$35);
                      }
                      return $it$4.wrap(($it$4.build(b$0) + "?"));
                    } else {
                      if ((ph$1$0 === "in")) {
                        $targ$38 = a$0;
                        t0$4 = $targ$38;
                        if (((t0$4 instanceof Array) && ((t1$4 = t0$4.length), ((t1$4 === 1) && (t0$4[0] === "void"))))) {} else {
                          ___match_error($targ$38);
                        }
                        $targ$39 = b$0;
                        t0$5 = $targ$39;
                        if (((t0$5 instanceof Array) && ((t1$5 = t0$5.length), ((t1$5 === 2) && (t0$5[0] === "value"))))) {
                          v$0 = t0$5[1];
                        } else {
                          ___match_error($targ$39);
                        }
                        x$4 = $it$4.quote_charset(v$0);
                        return (("[" + x$4) + "]");
                      } else {
                        if ((ph$1$0 === "not")) {
                          $targ$45 = a$0;
                          t0$6 = $targ$45;
                          if (((t0$6 instanceof Array) && ((t1$6 = t0$6.length), ((t1$6 === 1) && (t0$6[0] === "void"))))) {} else {
                            ___match_error($targ$45);
                          }
                          $targ$46 = b$0;
                          t0$7 = $targ$46;
                          if (((t0$7 instanceof Array) && ((t1$7 = t0$7.length), ((t1$7 === 3) && ((t0$7[0] === "send") && ((t2$1 = t0$7[1]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 2) && ((t2$1[0] === "symbol") && ((t2$1[1] === "in") && ((t4$1 = t0$7[2]), ((t4$1 instanceof Array) && ((t5$0 = t4$1.length), ((t5$0 === 3) && ((t4$1[0] === "data") && ((t6$0 = t4$1[1]), ((t6$0 instanceof Array) && ((t7$0 = t6$0.length), ((t7$0 === 1) && ((t6$0[0] === "void") && ((t8$0 = t4$1[2]), ((t8$0 instanceof Array) && ((t9$0 = t8$0.length), ((t9$0 === 2) && (t8$0[0] === "value")))))))))))))))))))))))))) {
                            v$1 = t8$0[1];
                          } else {
                            ___match_error($targ$46);
                          }
                          x$5 = $it$4.quote_charset(v$1);
                          return (("[^" + x$5) + "]");
                        } else {
                          return ___match_error(ph$1$0, "/home/olivier/git/earl-grey/src/macros/regexp.eg", 842, 847);
                        }
                      }
                    }
                  }
                }
              }
            }
          } else {
            if (($$14125$0 && (($$14127$0 = (t0$0 >= 1)) && (m$0$0[0] === "data")))) {
              args$0 = Array.prototype.slice.call(m$0$0, 1);
              return (("(" + ((acc$0 = []), (m$1 = null), (function() {
                $5: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  m$1 = $__1.value;
                  {
                    var arg$0;
                    arg$0 = m$1;
                    acc$0.push($it$4.build(arg$0));
                  }
                }
              })(), acc$0).join("")) + ")");
            } else {
              if (($$14127$0 && (m$0$0[0] === "multi"))) {
                args$1 = Array.prototype.slice.call(m$0$0, 1);
                return (("(?:" + ((acc$1 = []), (m$2 = null), (function() {
                  $10: for (var $__0 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                      $__1; !($__1 = $__0.next()).done; ) {
                    m$2 = $__1.value;
                    {
                      var arg$1;
                      arg$1 = m$2;
                      acc$1.push($it$4.build(arg$1));
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
  });
  (RegexBuilder$0.prototype["build"] = $targ$7);
  __amp____colon__(RegexBuilder$0, __amp____colon__((($targ$62 = "RegexBuilder"), (accum$0 = ({})), (accum$0["::name"] = $targ$62), accum$0), (($targ$63 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$63), accum$1)));
  RegexBuilder$0;
  build_regexp$0 = (function(x$6) {
    return RegexBuilder$0().build(x$6);
  });
  accum_flagsf$0 = (function(f$0) {
    return accum_flags$0(f$0, false);
  });
  $targ$11 = (function(temp$0$0, info$0, form$0, arg$2, flags$0) {
    var x$7;
    var x$8;
    var $targ$70;
    var t0$8;
    var text$2;
    var text$1;
    var m$5$0;
    var text$0;
    var t6$1;
    var t5$1;
    var t4$2;
    var t3$2;
    var t2$2;
    var $targ$73;
    var arg$3;
    var v$2;
    var $$14524$0;
    var $$14525$0;
    var t1$8;
    var m$4$0;
    var bridge$$14491$0;
    var m$3$0;
    var ph$2;
    ph$2 = temp$0$0;
    m$3$0 = ph$2;
    bridge$$14491$0 = m$3$0;
    if ((((x$7 = bridge$$14491$0), ((x$7 instanceof Array) && (x$7[0] === "check"))) || ((x$8 = bridge$$14491$0), ((x$8 instanceof Array) && (x$8[0] === "project"))))) {
      return ["nostep", form$0];
    } else {
      m$3$0;
      m$4$0 = arg$2;
      if ((($$14524$0 = (m$4$0 instanceof Array)) && ((t0$8 = m$4$0.length), ((t0$8 === 2) && ((m$4$0[0] === "value") && (($targ$70 = m$4$0[1]), (t1$8 = $targ$70), (typeof(t1$8) === "string"))))))) {
        v$2 = t1$8;
        text$0 = ((m$5$0 = info$0.gettext(arg$2)), (getChecker(RegExp("^\\\".*\\\"$", ""))(m$5$0) ? ((text$1 = m$5$0), text$1.substring(1, (text$1.length - 1))) : ((text$2 = m$5$0), text$2)));
        return ["send", ["symbol", "RegExp"], ["data", ["value", text$0], ["value", flags$0.join("")]]];
      } else {
        if (($$14524$0 && ((t0$8 === 3) && ((m$4$0[0] === "send") && (($targ$73 = m$4$0[1]), (t1$8 = $targ$73), ((t1$8 instanceof Array) && ((t2$2 = t1$8.length), ((t2$2 === 2) && ((t1$8[0] === "symbol") && ((t1$8[1] === "'") && ((t3$2 = m$4$0[2]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 3) && ((t3$2[0] === "data") && ((t5$1 = t3$2[1]), ((t5$1 instanceof Array) && ((t6$1 = t5$1.length), ((t6$1 === 1) && (t5$1[0] === "void")))))))))))))))))))) {
          arg$3 = t3$2[2];
          return ["send", ["symbol", "RegExp"], ["data", ["value", build_regexp$0(arg$3)], ["value", flags$0.join("")]]];
        } else {
          return ___match_error(m$4$0);
        }
      }
    }
  });
  t0$9 = getProjector(accum_flagsf$0)($targ$11);
  if ((t0$9[0] && ((t1$9 = getProjector(mac$0("R"))(t0$9[1])), t1$9[0]))) {
    regexp_mac$0 = t1$9[1];
  } else {
    ___match_error($targ$11);
  }
  return exports$0;
});
(module["exports"] = $targ$2);
//# sourceURL=<compile-source>
