"use strict";
require("earlgrey-runtime");
var $targ$58;
var accum$0;
var $targ$59;
var accum$1;
var $targ$108;
var accum$2;
var $targ$109;
var accum$3;
var $targ$112;
var accum$4;
var $targ$113;
var accum$5;
var $targ$114;
var accum$6;
var $targ$115;
var accum$7;
var $targ$116;
var accum$8;
var $targ$117;
var accum$9;
var $targ$130;
var accum$10;
var $targ$131;
var accum$11;
var $targ$132;
var accum$12;
var $targ$133;
var accum$13;
var $targ$134;
var accum$14;
var eg_groups$0;
var eg_prio$0;
var $targ$230;
var $targ$231;
var $targ$232;
var $targ$233;
var $targ$234;
var $targ$235;
var $targ$236;
var $targ$237;
var $targ$238;
var $targ$239;
var $0$0;
var __lt____lt____colon__$0;
var __plus____plus____colon__$0;
var $1$0;
var Body$0;
var transform$0;
var OperatorGroups$0;
var $targ$6;
var $targ$7;
var parse_op_description$0;
var SimplePriority$0;
var $targ$10;
var MAX$0;
var eg_order$0;
var DONE$0;
var NONE$0;
var LEFT$0;
var RIGHT$0;
var BOTH$0;
var oparse$0;
var finalize$0;
var parse$0;
$0$0 = require("./location");
__lt____lt____colon__$0 = $0$0["<<:"];
__plus____plus____colon__$0 = $0$0["++:"];
$1$0 = require("./util");
Body$0 = $1$0.Body;
transform$0 = (function(expr$0, cb$0) {
  var $targ$25;
  var $targ$24;
  var rval$0;
  var tr$0;
  var result$0;
  tr$0 = (function(x$0) {
    return transform$0(x$0, cb$0);
  });
  result$0 = (($targ$24 = false), (rval$0 = $targ$24), (function() {
    try {
      $targ$25 = cb$0.call(tr$0, expr$0);
      rval$0 = $targ$25;
    } catch (excv$0) {
      var t0$0;
      var name$0;
      var args$0;
      var v$0;
      var s$0;
      var $$15604$0;
      var $$15605$0;
      var $$15606$0;
      var m$0$0;
      var $targ$26;
      var e$0;
      e$0 = excv$0;
      $targ$26 = ((m$0$0 = expr$0), ((($$15604$0 = (m$0$0 instanceof Array)) && ((t0$0 = m$0$0.length), ((t0$0 === 1) && (m$0$0[0] === "void")))) ? ["void"] : (($$15604$0 && (($$15606$0 = (t0$0 === 2)) && (m$0$0[0] === "symbol"))) ? ((s$0 = m$0$0[1]), expr$0) : (($$15606$0 && (m$0$0[0] === "value")) ? ((v$0 = m$0$0[1]), expr$0) : (($$15604$0 && (t0$0 >= 1)) ? ((name$0 = m$0$0[0]), (args$0 = Array.prototype.slice.call(m$0$0, 1)), [name$0].concat(args$0.map(tr$0))) : ___match_error(m$0$0))))));
      rval$0 = $targ$26;
    }
  })(), rval$0);
  return __lt____lt____colon__$0(result$0, expr$0);
});
OperatorGroups$0 = (function(groups$0) {
  var m$1;
  var acc$0;
  var m$2;
  var acc$1;
  var m$4;
  var acc$3;
  var itg$0;
  var $targ$31;
  var $targ$32;
  var $targ$33;
  var $targ$34;
  var $it$0;
  $it$0 = ((!getChecker(OperatorGroups$0)(this)) ? Object.create(OperatorGroups$0.prototype) : this);
  itg$0 = items(groups$0);
  $targ$31 = ((acc$0 = []), (m$1 = null), (function() {
    $3: for (var $__0 = itg$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$1 = $__1.value;
      {
        var t1$0;
        var t0$1;
        var name$1;
        t0$1 = m$1;
        if (((t0$1 instanceof Array) && ((t1$0 = t0$1.length), (t1$0 === 2)))) {
          name$1 = t0$1[0];
          t0$1[1];
          acc$0.push(name$1);
        } else {
          ___match_error(m$1, "/home/olivier/git/earl-grey/src/parse.eg", 565, 591);
        }
      }
    }
  })(), acc$0);
  ($it$0["gnames"] = $targ$31);
  $targ$32 = ((acc$1 = []), (m$2 = null), (function() {
    var $__6 = function() {
      m$2 = $__1.value;
      {
        var t1$1;
        var m$3;
        var acc$2;
        var t0$2;
        var name$2;
        var descrs$0;
        t0$2 = m$2;
        if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), (t1$1 === 2)))) {
          name$2 = t0$2[0];
          descrs$0 = t0$2[1];
          acc$1.push(___build_array(((acc$2 = []), (m$3 = null), (function() {
            $5: for (var $__0 = descrs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$3 = $__1.value;
              {
                var descr$0;
                descr$0 = m$3;
                acc$2.push(parse_op_description$0(descr$0));
              }
            }
          })(), acc$2)));
        } else {
          ___match_error(m$2, "/home/olivier/git/earl-grey/src/parse.eg", 608, 705);
        }
      }
    };
    $4: for (var $__0 = itg$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      $__6();
    }
  })(), acc$1);
  ($it$0["groups"] = $targ$32);
  $targ$33 = [];
  ($it$0["fns"] = $targ$33);
  $targ$34 = ({
    "IFX": ({
      "wide": ({}),
      "short": ({})
    }),
    "PFX": ({
      "wide": ({}),
      "short": ({})
    }),
    "SFX": ({
      "wide": ({}),
      "short": ({})
    })
  });
  ($it$0["to_gid"] = $targ$34);
  acc$3 = [];
  m$4 = null;
  var $__7 = function() {
    m$4 = $__1.value;
    {
      var t1$2;
      var m$5;
      var acc$4;
      var t0$3;
      var i$0;
      var group$0;
      t0$3 = m$4;
      if (((t0$3 instanceof Array) && ((t1$2 = t0$3.length), (t1$2 === 2)))) {
        i$0 = t0$3[0];
        group$0 = t0$3[1];
        acc$3.push(((acc$4 = []), (m$5 = null), (function() {
          $6: for (var $__0 = group$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$5 = $__1.value;
            {
              var t1$3;
              var $targ$48;
              var f$0;
              var t0$4;
              var fixity$0;
              var width$0;
              var name$3;
              t0$4 = m$5;
              if (((t0$4 instanceof Array) && ((t1$3 = t0$4.length), (t1$3 === 3)))) {
                fixity$0 = t0$4[0];
                width$0 = t0$4[1];
                name$3 = t0$4[2];
                acc$4.push((($targ$48 = i$0), (send(send($it$0.to_gid, fixity$0), width$0)[name$3] = $targ$48)));
              } else {
                f$0 = m$5;
                acc$4.push($it$0.fns.push([f$0, i$0]));
              }
            }
          }
        })(), acc$4));
      } else {
        ___match_error(m$4, "/home/olivier/git/earl-grey/src/parse.eg", 870, 1071);
      }
    }
  };
  $2: for (var $__0 = enumerate($it$0.groups)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    $__7();
  }
  acc$3;
  return $it$0;
});
$targ$6 = (function(o$0) {
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  return send($it$1.gnames, $it$1.get(o$0));
});
(OperatorGroups$0.prototype["get_name"] = $targ$6);
$targ$7 = (function(temp$0$0) {
  var t1$4;
  var t0$5;
  var m$6;
  var attempt$0;
  var o$1;
  var fixity$1;
  var width$1;
  var name$4;
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  t0$5 = temp$0$0;
  o$1 = t0$5;
  if (((t0$5 instanceof Array) && ((t1$4 = t0$5.length), (t1$4 === 3)))) {
    fixity$1 = t0$5[0];
    width$1 = t0$5[1];
    name$4 = t0$5[2];
  } else {
    ___match_error(temp$0$0);
  }
  attempt$0 = send(send(send($it$2.to_gid, fixity$1), width$1), name$4);
  if ((attempt$0 === (void 0))) {
    m$6 = null;
    $7: for (var $__0 = $it$2.fns[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$6 = $__1.value;
      {
        var t1$5;
        var t0$6;
        var f$1;
        var i$1;
        t0$6 = m$6;
        if (((t0$6 instanceof Array) && ((t1$5 = t0$6.length), (t1$5 === 2)))) {
          f$1 = t0$6[0];
          i$1 = t0$6[1];
          if (f$1(o$1)) {
            return i$1;
          }
        } else {
          ___match_error(m$6, "/home/olivier/git/earl-grey/src/parse.eg", 1250, 1333);
        }
      }
    }
    throw ErrorFactory(["syntax", "unknown_operator"]).create(("Unknown operator: " + [true, String(o$1)][1]), ({"operator": o$1}));
  } else {
    return attempt$0;
  }
});
(OperatorGroups$0.prototype["get"] = $targ$7);
__amp____colon__(OperatorGroups$0, __amp____colon__((($targ$58 = "OperatorGroups"), (accum$0 = ({})), (accum$0["::name"] = $targ$58), accum$0), (($targ$59 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$59), accum$1)));
OperatorGroups$0;
parse_op_description$0 = (function(temp$1$0) {
  var t2$0;
  var t1$6;
  var otherwise$0;
  var $$15930$0;
  var m$8$0;
  var t1$7;
  var t0$8;
  var $targ$65;
  var fixity$2;
  var short$1;
  var other$0;
  var t0$7;
  var x$1;
  var w1$0;
  var op$0;
  var w2$0;
  var y$0;
  var f$2;
  var rx$0;
  var m$7$0;
  var ph$0;
  ph$0 = temp$1$0;
  m$7$0 = ph$0;
  rx$0 = RegExp("(?:^((?:X?))((?:[ _]?))((?:[^ _Y]*))((?:[ _]?))((?:Y?))$)", "");
  if (getChecker(Function)(m$7$0)) {
    f$2 = m$7$0;
    return f$2;
  } else {
    t0$7 = getProjector(rx$0)(m$7$0);
    if ((t0$7[0] && ((t1$6 = t0$7[1]), (t2$0 = t1$6.length), (t2$0 === 6)))) {
      t1$6[0];
      x$1 = t1$6[1];
      w1$0 = t1$6[2];
      op$0 = t1$6[3];
      w2$0 = t1$6[4];
      y$0 = t1$6[5];
      $targ$65 = ((m$8$0 = null), m$8$0, ((x$1 === "") ? ["PFX", (w2$0 === "")] : ((y$0 === "") ? ["SFX", (w1$0 === "")] : ((otherwise$0 = m$8$0), ["IFX", ((w1$0 === "") || (w2$0 === ""))]))));
      t0$8 = $targ$65;
      if (((t0$8 instanceof Array) && ((t1$7 = t0$8.length), (t1$7 === 2)))) {
        fixity$2 = t0$8[0];
        short$1 = t0$8[1];
      } else {
        ___match_error($targ$65);
      }
      if (((w1$0 === "_") || (w2$0 === "_"))) {
        return [[fixity$2, "short", op$0], [fixity$2, "wide", op$0]];
      } else {
        return [[fixity$2, (short$1 ? "short" : "wide"), op$0]];
      }
    } else {
      other$0 = m$7$0;
      throw ErrorFactory(["invalid_op_description"]).create(("Invalid operator description: " + other$0));
    }
  }
});
SimplePriority$0 = (function(groups$1, priorities$0) {
  var m$9;
  var acc$5;
  var $targ$70;
  var _i$0;
  var tracks$0;
  var $targ$73;
  var $it$3;
  $it$3 = ((!getChecker(SimplePriority$0)(this)) ? Object.create(SimplePriority$0.prototype) : this);
  $targ$70 = groups$1;
  ($it$3["groups"] = $targ$70);
  _i$0 = 0;
  tracks$0 = ({});
  $targ$73 = ((acc$5 = []), (m$9 = null), (function() {
    var $__8 = function() {
      m$9 = $__1.value;
      {
        var t7$0;
        var t6$0;
        var t5$0;
        var t4$0;
        var t3$0;
        var t2$1;
        var t1$8;
        var t0$9;
        var m$10;
        var acc$6;
        var t1$9;
        var t0$10;
        var $targ$75;
        var ltracks$0;
        var lp$0;
        var rtracks$0;
        var rp$0;
        var $targ$76;
        var lt$0;
        var rt$0;
        var name$5;
        name$5 = m$9;
        acc$5.push((($targ$75 = send(priorities$0, name$5)), (t0$9 = $targ$75), (((t0$9 instanceof Array) && ((t1$8 = t0$9.length), ((t1$8 === 2) && ((t2$1 = t0$9[0]), ((t2$1 instanceof Array) && ((t3$0 = t2$1.length), ((t3$0 === 2) && ((t4$0 = getProjector(Array)(t2$1[0])), (t4$0[0] && ((ltracks$0 = t4$0[1]), (lp$0 = t2$1[1]), (t5$0 = t0$9[1]), ((t5$0 instanceof Array) && ((t6$0 = t5$0.length), ((t6$0 === 2) && ((t7$0 = getProjector(Array)(t5$0[0])), t7$0[0])))))))))))))) ? ((rtracks$0 = t7$0[1]), (rp$0 = t5$0[1])) : ___match_error($targ$75)), ($targ$76 = ((acc$6 = []), (m$10 = null), (function() {
          var $__9 = function() {
            m$10 = $__1.value;
            {
              var m$11;
              var $targ$86;
              var rval$1;
              var tr$1;
              tr$1 = m$10;
              acc$6.push((($targ$86 = 0), (rval$1 = $targ$86), (m$11 = null), (function() {
                $10: for (var $__0 = tr$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  m$11 = $__1.value;
                  {
                    var $targ$87;
                    var $targ$88;
                    var $targ$89;
                    var $targ$90;
                    var t$1;
                    var t$0;
                    if ((m$11 === "all")) {
                      $targ$87 = (Math.pow(2, 31) - 1);
                      rval$1 = $targ$87;
                    } else {
                      t$0 = m$11;
                      if ((!send(tracks$0, t$0))) {
                        $targ$88 = (rval$1 | Math.pow(2, _i$0));
                        rval$1 = $targ$88;
                        $targ$89 = (_i$0++);
                        (tracks$0[t$0] = $targ$89);
                      } else {
                        t$1 = m$11;
                        $targ$90 = (rval$1 | Math.pow(2, send(tracks$0, t$1)));
                        rval$1 = $targ$90;
                      }
                    }
                  }
                }
              })(), rval$1));
            }
          };
          $9: for (var $__0 = [ltracks$0, rtracks$0][$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            $__9();
          }
        })(), acc$6)), (t0$10 = $targ$76), (((t0$10 instanceof Array) && ((t1$9 = t0$10.length), (t1$9 === 2))) ? ((lt$0 = t0$10[0]), (rt$0 = t0$10[1])) : ___match_error($targ$76)), [[lt$0, lp$0], [rt$0, rp$0]]));
      }
    };
    $8: for (var $__0 = groups$1.gnames[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      $__8();
    }
  })(), acc$5);
  ($it$3["prio"] = $targ$73);
  return $it$3;
});
$targ$10 = (function(op1$0, op2$0) {
  var t3$1;
  var t2$2;
  var t1$10;
  var t0$11;
  var t3$2;
  var t2$3;
  var t1$11;
  var t0$12;
  var $$16145$0;
  var m$12$0;
  var i1$0;
  var i2$0;
  var $targ$97;
  var code1$0;
  var ord1$0;
  var $targ$98;
  var code2$0;
  var ord2$0;
  var $it$4;
  var self$2;
  $it$4 = this;
  self$2 = this;
  i1$0 = $it$4.groups.get(op1$0);
  i2$0 = $it$4.groups.get(op2$0);
  $targ$97 = send($it$4.prio, i1$0);
  t0$11 = $targ$97;
  if (((t0$11 instanceof Array) && ((t1$10 = t0$11.length), ((t1$10 === 2) && (t0$11[0], (t2$2 = t0$11[1]), ((t2$2 instanceof Array) && ((t3$1 = t2$2.length), (t3$1 === 2)))))))) {
    code1$0 = t2$2[0];
    ord1$0 = t2$2[1];
  } else {
    ___match_error($targ$97);
  }
  $targ$98 = send($it$4.prio, i2$0);
  t0$12 = $targ$98;
  if (((t0$12 instanceof Array) && ((t1$11 = t0$12.length), ((t1$11 === 2) && ((t2$3 = t0$12[0]), ((t2$3 instanceof Array) && ((t3$2 = t2$3.length), (t3$2 === 2)))))))) {
    code2$0 = t2$3[0];
    ord2$0 = t2$3[1];
    t0$12[1];
  } else {
    ___match_error($targ$98);
  }
  m$12$0 = null;
  m$12$0;
  if (((code1$0 & code2$0) === 0)) {
    return NONE$0;
  } else {
    if ((ord1$0 > ord2$0)) {
      return LEFT$0;
    } else {
      if ((ord1$0 < ord2$0)) {
        return RIGHT$0;
      } else {
        if ((ord1$0 === ord2$0)) {
          return BOTH$0;
        } else {
          return ___match_error(m$12$0);
        }
      }
    }
  }
});
(SimplePriority$0.prototype["compare"] = $targ$10);
__amp____colon__(SimplePriority$0, __amp____colon__((($targ$108 = "SimplePriority"), (accum$2 = ({})), (accum$2["::name"] = $targ$108), accum$2), (($targ$109 = true), (accum$3 = ({})), (accum$3["::egclass"] = $targ$109), accum$3)));
SimplePriority$0;
MAX$0 = (1 / 0);
eg_order$0 = ((eg_groups$0 = OperatorGroups$0(__amp____colon__(({
  "sh_ifx": [(function(temp$2$0) {
    var t0$13;
    var m$13$0;
    var ph$1;
    ph$1 = temp$2$0;
    m$13$0 = ph$1;
    if (((m$13$0 instanceof Array) && ((t0$13 = m$13$0.length), ((t0$13 === 3) && ((m$13$0[0] === "IFX") && (m$13$0[1] === "short")))))) {
      m$13$0[2];
      return true;
    } else {
      m$13$0;
      return false;
    }
  })],
  "sh_pfx": [(function(temp$3$0) {
    var t0$14;
    var m$14$0;
    var ph$2;
    ph$2 = temp$3$0;
    m$14$0 = ph$2;
    if (((m$14$0 instanceof Array) && ((t0$14 = m$14$0.length), ((t0$14 === 3) && ((m$14$0[0] === "PFX") && (m$14$0[1] === "short")))))) {
      m$14$0[2];
      return true;
    } else {
      m$14$0;
      return false;
    }
  })],
  "sh_sfx": [(function(temp$4$0) {
    var t0$15;
    var m$15$0;
    var ph$3;
    ph$3 = temp$4$0;
    m$15$0 = ph$3;
    if (((m$15$0 instanceof Array) && ((t0$15 = m$15$0.length), ((t0$15 === 3) && ((m$15$0[0] === "SFX") && (m$15$0[1] === "short")))))) {
      m$15$0[2];
      return true;
    } else {
      m$15$0;
      return false;
    }
  })],
  "wi_ifx": [(function(temp$5$0) {
    var t0$16;
    var m$16$0;
    var ph$4;
    ph$4 = temp$5$0;
    m$16$0 = ph$4;
    if (((m$16$0 instanceof Array) && ((t0$16 = m$16$0.length), ((t0$16 === 3) && ((m$16$0[0] === "IFX") && (m$16$0[1] === "wide")))))) {
      m$16$0[2];
      return true;
    } else {
      m$16$0;
      return false;
    }
  })],
  "wi_pfx": [(function(temp$6$0) {
    var t0$17;
    var m$17$0;
    var ph$5;
    ph$5 = temp$6$0;
    m$17$0 = ph$5;
    if (((m$17$0 instanceof Array) && ((t0$17 = m$17$0.length), ((t0$17 === 3) && ((m$17$0[0] === "PFX") && (m$17$0[1] === "wide")))))) {
      m$17$0[2];
      return true;
    } else {
      m$17$0;
      return false;
    }
  })],
  "wi_sfx": [(function(temp$7$0) {
    var t0$18;
    var m$18$0;
    var ph$6;
    ph$6 = temp$7$0;
    m$18$0 = ph$6;
    if (((m$18$0 instanceof Array) && ((t0$18 = m$18$0.length), ((t0$18 === 3) && ((m$18$0[0] === "SFX") && (m$18$0[1] === "wide")))))) {
      m$18$0[2];
      return true;
    } else {
      m$18$0;
      return false;
    }
  })],
  "comma": ["X_,_Y"],
  "obrack": ["(_Y", "[_Y", "{_Y"],
  "cbrack": ["X_)", "X_]", "X_}"]
}), __amp____colon__((($targ$112 = ["with Y"]), (accum$4 = ({})), (accum$4["withp"] = $targ$112), accum$4), __amp____colon__((($targ$113 = ["X with Y"]), (accum$5 = ({})), (accum$5["with"] = $targ$113), accum$5), __amp____colon__(({"lowprio": ["X each Y", "X where Y", "X_!!_Y", "X_->_Y", "X_=>_Y", "X_=_Y", "X_:=_Y", "X_+=_Y", "X_-=_Y", "X_*=_Y", "X_/=_Y", "X_<<=_Y", "X_>>=_Y", "X_>>>=_Y", "X_++=_Y", "X_?=_Y", "X_or=_Y", "X_and=_Y", "X_each=_Y", "X_%_Y"]}), __amp____colon__((($targ$114 = ["X_when_Y"]), (accum$6 = ({})), (accum$6["when"] = $targ$114), accum$6), __amp____colon__((($targ$115 = ["X_or_Y"]), (accum$7 = ({})), (accum$7["or"] = $targ$115), accum$7), __amp____colon__((($targ$116 = ["X_and_Y"]), (accum$8 = ({})), (accum$8["and"] = $targ$116), accum$8), __amp____colon__((($targ$117 = ["not_Y"]), (accum$9 = ({})), (accum$9["not"] = $targ$117), accum$9), ({
  "type": ["X_!_Y", "X_?_Y"],
  "cmp": ["X_==_Y", "X_!=_Y", "X_>=_Y", "X_<=_Y", "X_>_Y", "X_<_Y"],
  "binxor": ["X_^._Y"],
  "binor": ["X_|._Y"],
  "binand": ["X_&._Y"],
  "shift": ["X_<<_Y", "X_>>_Y", "X_>>>_Y"],
  "add": ["X_+_Y", "X_-_Y"],
  "mul": ["X_*_Y", "X_/_Y", "X_//_Y", "X_mod_Y"],
  "exp": ["X_**_Y"],
  "sjuxt": ["XWHITEY"],
  "wjuxt": ["X WHITE Y"],
  "colon": ["X_:_Y"],
  "pfx": ["._Y", "#_Y", "@_Y"],
  "when2": ["when Y"],
  "pp": ["<>_Y"],
  "pipe": ["X_|>_Y"]
}))))))))))), (eg_prio$0 = __amp____colon__(({
  "comma": [["all", 1], ["all", 1]],
  "obrack": [["all", MAX$0], ["all", 1]],
  "cbrack": [["all", 1], ["all", MAX$0]]
}), __amp____colon__((($targ$130 = [["all", 1999], ["all", 10]]), (accum$10 = ({})), (accum$10["with"] = $targ$130), accum$10), __amp____colon__(({"lowprio": [["all", 11], ["all", 10]]}), __amp____colon__((($targ$131 = [["all", 100], ["all", 101]]), (accum$11 = ({})), (accum$11["when"] = $targ$131), accum$11), __amp____colon__((($targ$132 = [["all", 110], ["all", 111]]), (accum$12 = ({})), (accum$12["or"] = $targ$132), accum$12), __amp____colon__((($targ$133 = [["all", 120], ["all", 121]]), (accum$13 = ({})), (accum$13["and"] = $targ$133), accum$13), __amp____colon__((($targ$134 = [["all", MAX$0], ["all", 131]]), (accum$14 = ({})), (accum$14["not"] = $targ$134), accum$14), ({
  "type": [["all", 141], ["all", 140]],
  "cmp": [["all", 200], ["all", 201]],
  "binxor": [["all", 400], ["all", 401]],
  "binor": [["all", 410], ["all", 411]],
  "binand": [["all", 420], ["all", 421]],
  "shift": [["arith", 500], ["arith", 501]],
  "add": [["arith", 550], ["arith", 551]],
  "mul": [["arith", 560], ["arith", 561]],
  "exp": [["arith", 571], ["arith", 570]],
  "wjuxt": [["wjuxt", 13], ["all", 12]],
  "colon": [["all", 12], ["all", 10]],
  "sjuxt": [["all", 2000], ["all", 2001]],
  "pfx": [["all", MAX$0], ["all", 3000]],
  "pp": [["all", MAX$0], ["all", 5]],
  "when2": [["all", MAX$0], ["all", 101]],
  "withp": [["all", MAX$0], ["all", 10]],
  "pipe": [["pipe", 550], ["pipe", 551]],
  "sh_ifx": [["all", 1800], ["all", 1801]],
  "sh_pfx": [["all", MAX$0], ["all", 1901]],
  "sh_sfx": [["all", 1900], ["all", MAX$0]],
  "wi_ifx": [["customl", 900], ["customr", 901]],
  "wi_pfx": [["all", MAX$0], ["all", 901]],
  "wi_sfx": [["all", 900], ["all", MAX$0]]
}))))))))), SimplePriority$0(eg_groups$0, eg_prio$0));
DONE$0 = -1;
NONE$0 = 0;
LEFT$0 = 1;
RIGHT$0 = 2;
BOTH$0 = 3;
oparse$0 = (function(next$0, order$0, finalize$1) {
  var $targ$135;
  var between$0;
  var $targ$136;
  var right_op$0;
  var stack$0;
  var $targ$138;
  var left_op$0;
  var $targ$139;
  var current$0;
  $targ$135 = finalize$1(next$0());
  between$0 = $targ$135;
  $targ$136 = next$0();
  right_op$0 = $targ$136;
  stack$0 = [];
  $targ$138 = null;
  left_op$0 = $targ$138;
  $targ$139 = null;
  current$0 = $targ$139;
  $11: while (true) {
    var $targ$142;
    var v$1;
    var $targ$144;
    var $targ$145;
    var $targ$146;
    var $targ$147;
    var $targ$148;
    var $targ$149;
    var $targ$154;
    var $targ$151;
    var $targ$152;
    var $targ$153;
    var other$1;
    var bridge$$16492$0;
    var m$19$0;
    var o$2;
    o$2 = (((!left_op$0) && (!right_op$0)) ? DONE$0 : ((((!left_op$0) && RIGHT$0) || ((!right_op$0) && LEFT$0)) || order$0(left_op$0, right_op$0)));
    m$19$0 = o$2;
    if ((m$19$0 === DONE$0)) {
      return between$0;
    } else {
      if ((m$19$0 === LEFT$0)) {
        current$0.push(between$0);
        $targ$142 = finalize$1(current$0);
        between$0 = $targ$142;
        v$1 = stack$0.pop();
        $targ$144 = v$1[0];
        left_op$0 = $targ$144;
        $targ$145 = v$1[1];
        current$0 = $targ$145;
      } else {
        if ((m$19$0 === RIGHT$0)) {
          stack$0.push([left_op$0, current$0]);
          $targ$146 = right_op$0;
          left_op$0 = $targ$146;
          $targ$147 = [[right_op$0], between$0];
          current$0 = $targ$147;
          $targ$148 = finalize$1(next$0());
          between$0 = $targ$148;
          $targ$149 = next$0();
          right_op$0 = $targ$149;
        } else {
          bridge$$16492$0 = m$19$0;
          if (((bridge$$16492$0 === BOTH$0) || (bridge$$16492$0 === NONE$0))) {
            current$0[0].push(right_op$0);
            current$0.push(between$0);
            $targ$151 = right_op$0;
            left_op$0 = $targ$151;
            $targ$152 = finalize$1(next$0());
            between$0 = $targ$152;
            $targ$153 = next$0();
            right_op$0 = $targ$153;
            if ((o$2 === NONE$0)) {
              $targ$154 = true;
              (current$0["tainted"] = $targ$154);
            }
          } else {
            other$1 = m$19$0;
            throw ErrorFactory(["should_never_happen"]).create("undefined priority", ({
              "left": left_op$0,
              "right": right_op$0
            }));
          }
        }
      }
    }
  }
});
finalize$0 = (function(temp$8$0) {
  var t0$19;
  var t0$20;
  var m$22;
  var m$23;
  var m$24;
  var acc$7;
  var $targ$172;
  var $targ$171;
  var $targ$170;
  var $targ$169;
  var t0$22;
  var $targ$174;
  var $targ$173;
  var t8$0;
  var t7$1;
  var t6$1;
  var t5$1;
  var $targ$176;
  var $targ$175;
  var $targ$197;
  var t2$6;
  var t1$16;
  var $targ$198;
  var other$3;
  var args$4;
  var f$6;
  var orig_args$0;
  var args$3;
  var $$16920$0;
  var $$16921$0;
  var t0$26;
  var m$27$0;
  var $targ$181;
  var inserted$0;
  var result$1;
  var t0$27;
  var bridge$$16637$0;
  var $targ$205;
  var f$7;
  var t0$29;
  var $targ$211;
  var other$5;
  var x$4;
  var $$17030$0;
  var $$17031$0;
  var m$29$0;
  var $targ$203;
  var result$2;
  var $targ$213;
  var $targ$212;
  var f$8;
  var t5$2;
  var t4$2;
  var t3$4;
  var t2$7;
  var t1$17;
  var oloc$0;
  var abloc$0;
  var oabloc$0;
  var rval$2;
  var $targ$227;
  var a$1;
  var b$1;
  var t0$31;
  var $$16643$0;
  var $$16644$0;
  var $$16645$0;
  var $$16646$0;
  var m$31;
  var acc$8;
  var op_strings$0;
  var args$5;
  var ph$8$0;
  var commas$1;
  var commas$0;
  var target$0;
  var _b$0;
  var body$2;
  var f$4;
  var body$1;
  var f$3;
  var arg$1;
  var body$0;
  var $$16648$0;
  var $$16649$0;
  var $$16650$0;
  var $$16651$0;
  var $$16652$0;
  var $$16653$0;
  var $$16654$0;
  var t1$13;
  var t2$4;
  var t3$3;
  var t4$1;
  var m$21$0;
  var $targ$158;
  var sumloc$0;
  var orig_ops$0;
  var $targ$160;
  var op$1;
  var other$7;
  var ops$0;
  var args$1;
  var value$3;
  var value$2;
  var value$1;
  var value$0;
  var $$16588$0;
  var $$16589$0;
  var $$16590$0;
  var m$20$0;
  var ph$7;
  var token$0;
  t0$19 = temp$8$0;
  token$0 = t0$19;
  ph$7 = t0$19;
  m$20$0 = ph$7;
  if ((($$16588$0 = (m$20$0 instanceof Array)) && ((t0$20 = m$20$0.length), (($$16590$0 = (t0$20 === 2)) && (m$20$0[0] === "ID"))))) {
    value$0 = m$20$0[1];
    return __lt____lt____colon__$0(["symbol", value$0], token$0);
  } else {
    if (($$16590$0 && (m$20$0[0] === "ILLEGAL"))) {
      value$1 = m$20$0[1];
      return __lt____lt____colon__$0(["char", value$1], token$0);
    } else {
      if (($$16590$0 && (m$20$0[0] === "NUM"))) {
        value$2 = m$20$0[1];
        return __lt____lt____colon__$0(["value", value$2], token$0);
      } else {
        if (($$16590$0 && (m$20$0[0] === "STR"))) {
          value$3 = m$20$0[1];
          return __lt____lt____colon__$0(["value", value$3], token$0);
        } else {
          if (($$16588$0 && ((t0$20 === 1) && (m$20$0[0] === "VOID")))) {
            return __lt____lt____colon__$0(["void"], token$0);
          } else {
            if (($$16588$0 && (t0$20 >= 1))) {
              ops$0 = m$20$0[0];
              args$1 = Array.prototype.slice.call(m$20$0, 1);
              $targ$158 = ops$0[0].location;
              sumloc$0 = $targ$158;
              m$22 = null;
              $12: for (var $__0 = ops$0.slice(1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__1; !($__1 = $__0.next()).done; ) {
                m$22 = $__1.value;
                {
                  var $targ$162;
                  var op$2;
                  op$2 = m$22;
                  $targ$162 = __plus____plus____colon__$0(sumloc$0, op$2);
                  sumloc$0 = $targ$162;
                }
              }
              m$23 = null;
              $13: for (var $__2 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__3; !($__3 = $__2.next()).done; ) {
                m$23 = $__3.value;
                {
                  var t1$12;
                  var $targ$165;
                  var arg$0;
                  var t0$21;
                  t0$21 = m$23;
                  if (((t0$21 instanceof Array) && ((t1$12 = t0$21.length), ((t1$12 === 1) && (t0$21[0] === "void"))))) {
                    undefined;
                  } else {
                    arg$0 = m$23;
                    $targ$165 = __plus____plus____colon__$0(sumloc$0, arg$0);
                    sumloc$0 = $targ$165;
                  }
                }
              }
              orig_ops$0 = ops$0;
              $targ$160 = ((acc$7 = []), (m$24 = null), (function() {
                $14: for (var $__4 = ops$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__5; !($__5 = $__4.next()).done; ) {
                  m$24 = $__5.value;
                  {
                    var o$3;
                    o$3 = m$24;
                    acc$7.push(o$3[2]);
                  }
                }
              })(), acc$7);
              ops$0 = $targ$160;
              op$1 = ops$0[0];
              m$21$0 = [ops$0, args$1];
              if ((($$16648$0 = (m$21$0 instanceof Array)) && ((t0$22 = m$21$0.length), (($$16650$0 = (t0$22 === 2)) && (($targ$169 = m$21$0[0]), (t1$13 = $targ$169), (($$16652$0 = (t1$13 instanceof Array)) && (($targ$170 = t1$13.length), (t2$4 = $targ$170), ((t2$4 === 2) && ((t1$13[0] === "WHITE") && ((t1$13[1] === ":") && (($targ$171 = m$21$0[1]), (t3$3 = $targ$171), ((t3$3 instanceof Array) && (($targ$172 = t3$3.length), (t4$1 = $targ$172), (t4$1 === 3)))))))))))))) {
                f$3 = t3$3[0];
                arg$1 = t3$3[1];
                body$0 = t3$3[2];
                return __lt____lt____colon__$0(["send", f$3, __lt____lt____colon__$0(["data", arg$1, body$0], __plus____plus____colon__$0(arg$1, body$0))], sumloc$0);
              } else {
                if (($$16652$0 && (($$16654$0 = (t2$4 === 1)) && ((t1$13[0] === ":") && (($targ$173 = m$21$0[1]), (t3$3 = $targ$173), ((t3$3 instanceof Array) && (($targ$174 = t3$3.length), (t4$1 = $targ$174), (t4$1 === 2)))))))) {
                  f$4 = t3$3[0];
                  body$1 = t3$3[1];
                  return __lt____lt____colon__$0(["send", f$4, __lt____lt____colon__$0(["data", body$1], body$1)], sumloc$0);
                } else {
                  if (($$16654$0 && ((t1$13[0] === "with") && (($targ$175 = m$21$0[1]), (t3$3 = $targ$175), ((t3$3 instanceof Array) && (($targ$176 = t3$3.length), (t4$1 = $targ$176), ((t4$1 === 2) && ((target$0 = t3$3[0]), (t5$1 = t3$3[1]), (_b$0 = t5$1), (t6$1 = getProjector(Body$0)(t5$1)), (t6$1[0] && ((t7$1 = t6$1[1]), (t8$0 = t7$1.length), (t8$0 >= 0))))))))))) {
                    body$2 = Array.prototype.slice.call(t7$1, 0);
                    $targ$181 = false;
                    inserted$0 = $targ$181;
                    result$1 = transform$0(target$0, (function(temp$9$0) {
                      var t0$23;
                      var $targ$185;
                      var $targ$186;
                      var t2$5;
                      var t1$14;
                      var $targ$187;
                      var $targ$190;
                      var m$26;
                      var tr$2;
                      var $targ$192;
                      var res$0;
                      var args$2;
                      var x$2;
                      var f$5;
                      var a$0;
                      var b$0;
                      var t0$24;
                      var m$25$0;
                      var ph$9;
                      var expr$1;
                      t0$23 = temp$9$0;
                      expr$1 = t0$23;
                      ph$9 = t0$23;
                      m$25$0 = ph$9;
                      if (((m$25$0 instanceof Array) && (($targ$185 = m$25$0.length), (t0$24 = $targ$185), ((t0$24 === 2) && ((m$25$0[0] === "symbol") && (m$25$0[1] === "...")))))) {
                        $targ$186 = true;
                        inserted$0 = $targ$186;
                        return __lt____lt____colon__$0(["multi"].concat(body$2), _b$0);
                      } else {
                        x$2 = m$25$0;
                        if ((x$2.fromop && ((m$25$0 instanceof Array) && (($targ$187 = m$25$0.length), (t0$24 = $targ$187), ((t0$24 === 3) && ((m$25$0[0] === "send") && ((f$5 = m$25$0[1]), (t1$14 = m$25$0[2]), ((t1$14 instanceof Array) && ((t2$5 = t1$14.length), ((t2$5 === 3) && (t1$14[0] === "data"))))))))))) {
                          a$0 = t1$14[1];
                          b$0 = t1$14[2];
                          return ["send", this(f$5), __lt____lt____colon__$0(["data", this(a$0), this(b$0)], __plus____plus____colon__$0(a$0, b$0))];
                        } else {
                          if (((m$25$0 instanceof Array) && (($targ$190 = m$25$0.length), (t0$24 = $targ$190), ((t0$24 >= 1) && (m$25$0[0] === "data"))))) {
                            args$2 = Array.prototype.slice.call(m$25$0, 1);
                            tr$2 = this;
                            $targ$192 = ["data"];
                            res$0 = $targ$192;
                            m$26 = null;
                            $15: for (var $__4 = args$2[$traceurRuntime.toProperty(Symbol.iterator)](),
                                $__5; !($__5 = $__4.next()).done; ) {
                              m$26 = $__5.value;
                              {
                                var t1$15;
                                var $targ$195;
                                var other$2;
                                var t0$25;
                                t0$25 = m$26;
                                if (((t0$25 instanceof Array) && ((t1$15 = t0$25.length), ((t1$15 === 2) && ((t0$25[0] === "symbol") && (t0$25[1] === "...")))))) {
                                  $targ$195 = true;
                                  inserted$0 = $targ$195;
                                  res$0 = res$0.concat(body$2);
                                } else {
                                  other$2 = m$26;
                                  res$0.push(__lt____lt____colon__$0(tr$2(other$2), other$2));
                                }
                              }
                            }
                            return __lt____lt____colon__$0(res$0, expr$1);
                          } else {
                            return ___match_error(m$25$0);
                          }
                        }
                      }
                    }));
                    if ((!inserted$0)) {
                      m$27$0 = target$0;
                      if (((m$27$0 instanceof Array) && (($targ$197 = m$27$0.length), (t0$26 = $targ$197), ((t0$26 === 1) && (m$27$0[0] === "void"))))) {
                        return __lt____lt____colon__$0(["data"].concat(body$2), sumloc$0);
                      } else {
                        m$27$0;
                        if (target$0.fromop) {
                          return __lt____lt____colon__$0(["send", target$0, __lt____lt____colon__$0(["data"].concat(body$2), _b$0)], sumloc$0);
                        } else {
                          if ((($$16920$0 = (m$27$0 instanceof Array)) && (($targ$198 = m$27$0.length), (t0$26 = $targ$198), ((t0$26 === 3) && ((m$27$0[0] === "send") && ((f$6 = m$27$0[1]), (t1$16 = m$27$0[2]), (orig_args$0 = t1$16), ((t1$16 instanceof Array) && ((t2$6 = t1$16.length), ((t2$6 >= 1) && (t1$16[0] === "data")))))))))) {
                            args$3 = Array.prototype.slice.call(t1$16, 1);
                            return __lt____lt____colon__$0(["send", f$6, __lt____lt____colon__$0(["data"].concat(args$3).concat(body$2), __plus____plus____colon__$0(orig_args$0, _b$0))], sumloc$0);
                          } else {
                            if (($$16920$0 && ((t0$26 >= 1) && (m$27$0[0] === "data")))) {
                              args$4 = Array.prototype.slice.call(m$27$0, 1);
                              return __lt____lt____colon__$0(target$0.concat(body$2), sumloc$0);
                            } else {
                              other$3 = m$27$0;
                              return __lt____lt____colon__$0(["send", target$0, __lt____lt____colon__$0(["data"].concat(body$2), _b$0)], sumloc$0);
                            }
                          }
                        }
                      }
                    } else {
                      return __lt____lt____colon__$0(result$1, sumloc$0);
                    }
                  } else {
                    if (($$16650$0 && ((bridge$$16637$0 = m$21$0[0]), ((((bridge$$16637$0 instanceof Array) && ((t0$27 = bridge$$16637$0.length), ((t0$27 >= 2) && ((bridge$$16637$0[0] === "[") && ((commas$0 = Array.prototype.slice.call(bridge$$16637$0, 1, -1)), (bridge$$16637$0[(t0$27 - 1)] === "]")))))) || ((commas$0 = bridge$$16637$0), true)) && (m$21$0[1], commas$0.every((function(x$3) {
                      return equal(x$3, ",");
                    }))))))) {
                      if ((op$1 === "[")) {
                        $targ$205 = args$1.slice(1, -1);
                        args$1 = $targ$205;
                      }
                      $targ$203 = ((f$7 = (function(temp$10$0) {
                        var t0$28;
                        var other$4;
                        var m$28$0;
                        var ph$10;
                        ph$10 = temp$10$0;
                        m$28$0 = ph$10;
                        if (((m$28$0 instanceof Array) && ((t0$28 = m$28$0.length), ((t0$28 === 1) && (m$28$0[0] === "void"))))) {
                          return false;
                        } else {
                          other$4 = m$28$0;
                          return true;
                        }
                      })), args$1.filter(f$7));
                      args$1 = $targ$203;
                      result$2 = ((m$29$0 = args$1), ((($$17030$0 = (m$29$0 instanceof Array)) && ((t0$29 = m$29$0.length), (t0$29 === 0))) ? ["multi"] : (($$17030$0 && (t0$29 === 1)) ? ((x$4 = m$29$0[0]), (((!isNaN(sumloc$0.start)) && (!isNaN(sumloc$0.end))) ? (($targ$211 = sumloc$0), (x$4["location"] = $targ$211)) : undefined), x$4) : ((other$5 = m$29$0), ["multi"].concat(args$1)))));
                      return __lt____lt____colon__$0(result$2, sumloc$0);
                    } else {
                      if (($$16650$0 && (($targ$212 = m$21$0[0]), (t1$13 = $targ$212), (($$16652$0 = (t1$13 instanceof Array)) && (($targ$213 = t1$13.length), (t2$4 = $targ$213), ((t2$4 >= 2) && ((t1$13[0] === "{") && ((commas$1 = Array.prototype.slice.call(t1$13, 1, -1)), ((t1$13[(t2$4 - 1)] === "}") && (m$21$0[1], commas$1.every((function(x$5) {
                        return equal(x$5, ",");
                      })))))))))))) {
                        f$8 = (function(temp$11$0) {
                          var t0$30;
                          var other$6;
                          var m$30$0;
                          var ph$11;
                          ph$11 = temp$11$0;
                          m$30$0 = ph$11;
                          if (((m$30$0 instanceof Array) && ((t0$30 = m$30$0.length), ((t0$30 === 1) && (m$30$0[0] === "void"))))) {
                            return false;
                          } else {
                            other$6 = m$30$0;
                            return true;
                          }
                        });
                        return __lt____lt____colon__$0(["data"].concat(args$1.slice(1, -1).filter(f$8)), sumloc$0);
                      } else {
                        if (($$16652$0 && (($$16654$0 = (t2$4 === 1)) && (t1$13[0] === "WHITE")))) {
                          m$21$0[1];
                          return __lt____lt____colon__$0(["send"].concat(args$1), sumloc$0);
                        } else {
                          if ($$16654$0) {
                            t1$13[0];
                            ph$8$0 = m$21$0[1];
                            t0$31 = ph$8$0;
                            if ((($$16644$0 = (t0$31 instanceof Array)) && ((t1$17 = t0$31.length), (($$16646$0 = (t1$17 === 2)) && ((t2$7 = t0$31[0]), ((t2$7 instanceof Array) && ((t3$4 = t2$7.length), ((t3$4 === 1) && ((t2$7[0] === "void") && ((t4$2 = t0$31[1]), ((t4$2 instanceof Array) && ((t5$2 = t4$2.length), ((t5$2 === 1) && (t4$2[0] === "void")))))))))))))) {
                              return __lt____lt____colon__$0(["symbol", op$1], orig_ops$0[0]);
                            } else {
                              if ($$16646$0) {
                                a$1 = t0$31[0];
                                b$1 = t0$31[1];
                                oloc$0 = orig_ops$0[0].location;
                                abloc$0 = __plus____plus____colon__$0(a$1, b$1);
                                oabloc$0 = __plus____plus____colon__$0(orig_ops$0[0], abloc$0);
                                rval$2 = __lt____lt____colon__$0(["send", __lt____lt____colon__$0(["symbol", op$1], oloc$0), __lt____lt____colon__$0(["data", a$1, b$1], abloc$0)], __plus____plus____colon__$0(oloc$0, abloc$0));
                                $targ$227 = true;
                                (rval$2["fromop"] = $targ$227);
                                return rval$2;
                              } else {
                                return ___match_error(ph$8$0, "/home/olivier/git/earl-grey/src/parse.eg", 17801, 17806);
                              }
                            }
                          } else {
                            if ($$16650$0) {
                              op_strings$0 = m$21$0[0];
                              args$5 = m$21$0[1];
                              return __lt____lt____colon__$0(["mismix", ((acc$8 = []), (m$31 = null), (function() {
                                $16: for (var $__4 = orig_ops$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                    $__5; !($__5 = $__4.next()).done; ) {
                                  m$31 = $__5.value;
                                  {
                                    var op$3;
                                    op$3 = m$31;
                                    acc$8.push(__lt____lt____colon__$0(["symbol", op$3[2]], op$3));
                                  }
                                }
                              })(), acc$8)].concat(args$5), sumloc$0);
                            } else {
                              return ___match_error(m$21$0);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              other$7 = m$20$0;
              throw ErrorFactory(["should_never_happen"]).create("unknown node (B)", ({"node": token$0}));
            }
          }
        }
      }
    }
  }
});
parse$0 = (function(tokens$0) {
  var next$1;
  next$1 = (function() {
    return tokens$0.shift();
  });
  return oparse$0(next$1, eg_order$0.compare.bind(eg_order$0), finalize$0);
});
$targ$230 = OperatorGroups$0;
(exports["OperatorGroups"] = $targ$230);
$targ$231 = SimplePriority$0;
(exports["SimplePriority"] = $targ$231);
$targ$232 = parse$0;
(exports["parse"] = $targ$232);
$targ$233 = oparse$0;
(exports["oparse"] = $targ$233);
$targ$234 = finalize$0;
(exports["finalize"] = $targ$234);
$targ$235 = DONE$0;
(exports["DONE"] = $targ$235);
$targ$236 = NONE$0;
(exports["NONE"] = $targ$236);
$targ$237 = LEFT$0;
(exports["LEFT"] = $targ$237);
$targ$238 = RIGHT$0;
(exports["RIGHT"] = $targ$238);
$targ$239 = BOTH$0;
(exports["BOTH"] = $targ$239);
//# sourceURL=<compile-source>
