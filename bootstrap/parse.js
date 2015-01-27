"use strict";
require("earlgrey-runtime");
var $targ$69;
var accum$0;
var $targ$70;
var accum$1;
var $targ$123;
var accum$2;
var $targ$124;
var accum$3;
var $targ$127;
var accum$4;
var $targ$128;
var accum$5;
var $targ$129;
var accum$6;
var $targ$130;
var accum$7;
var $targ$131;
var accum$8;
var $targ$132;
var accum$9;
var $targ$145;
var accum$10;
var $targ$146;
var accum$11;
var $targ$147;
var accum$12;
var $targ$148;
var accum$13;
var $targ$149;
var accum$14;
var eg_groups$0;
var eg_prio$0;
var $targ$249;
var $targ$250;
var $targ$251;
var $targ$252;
var $targ$253;
var $targ$254;
var $targ$255;
var $targ$256;
var $targ$257;
var $targ$258;
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
  $targ$24 = false;
  rval$0 = $targ$24;
  try {
    $targ$25 = cb$0.call(tr$0, expr$0);
    rval$0 = $targ$25;
    rval$0;
  } catch (excv$0) {
    var t0$0;
    var name$0;
    var args$0;
    var v$0;
    var s$0;
    var $$16547$0;
    var $$16548$0;
    var $$16549$0;
    var m$0$0;
    var $targ$26;
    var e$0;
    e$0 = excv$0;
    m$0$0 = expr$0;
    if ((($$16547$0 = (m$0$0 instanceof Array)) && ((t0$0 = m$0$0.length), ((t0$0 === 1) && (m$0$0[0] === "void"))))) {
      $targ$26 = ["void"];
    } else {
      if (($$16547$0 && (($$16549$0 = (t0$0 === 2)) && (m$0$0[0] === "symbol")))) {
        s$0 = m$0$0[1];
        $targ$26 = expr$0;
      } else {
        if (($$16549$0 && (m$0$0[0] === "value"))) {
          v$0 = m$0$0[1];
          $targ$26 = expr$0;
        } else {
          if (($$16547$0 && (t0$0 >= 1))) {
            name$0 = m$0$0[0];
            args$0 = Array.prototype.slice.call(m$0$0, 1);
            $targ$26 = [name$0].concat(args$0.map(tr$0));
          } else {
            $targ$26 = ___match_error(m$0$0);
          }
        }
      }
    }
    rval$0 = $targ$26;
    rval$0;
  }
  result$0 = rval$0;
  return __lt____lt____colon__$0(result$0, expr$0);
});
OperatorGroups$0 = (function(groups$0) {
  var m$1;
  var acc$0;
  var $targ$36;
  var temp$0;
  var m$2;
  var acc$1;
  var $targ$41;
  var temp$1;
  var m$4;
  var acc$3;
  var $targ$49;
  var temp$3;
  var itg$0;
  var $targ$31;
  var $targ$32;
  var $targ$33;
  var $targ$34;
  var $it$0;
  if ((!getChecker(OperatorGroups$0)(this))) {
    $it$0 = Object.create(OperatorGroups$0.prototype);
  } else {
    $it$0 = this;
  }
  itg$0 = items(groups$0);
  acc$0 = [];
  $targ$36 = null;
  temp$0 = $targ$36;
  m$1 = null;
  $3: for (var $__0 = itg$0[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$1 = $__1.value;
    {
      var t1$0;
      var $targ$39;
      var t0$1;
      var name$1;
      t0$1 = m$1;
      if (((t0$1 instanceof Array) && ((t1$0 = t0$1.length), (t1$0 === 2)))) {
        name$1 = t0$1[0];
        t0$1[1];
        $targ$39 = name$1;
        temp$0 = $targ$39;
        acc$0.push(temp$0);
      } else {
        ___match_error(m$1, "/home/olivier/git/earl-grey/src/parse.eg", 565, 591);
      }
    }
  }
  $targ$31 = acc$0;
  ($it$0["gnames"] = $targ$31);
  [];
  acc$1 = [];
  $targ$41 = null;
  temp$1 = $targ$41;
  m$2 = null;
  var $__8 = function() {
    m$2 = $__3.value;
    {
      var t1$1;
      var m$3;
      var acc$2;
      var $targ$46;
      var temp$2;
      var $targ$44;
      var t0$2;
      var name$2;
      var descrs$0;
      t0$2 = m$2;
      if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), (t1$1 === 2)))) {
        name$2 = t0$2[0];
        descrs$0 = t0$2[1];
        $targ$44 = ___build_array(((acc$2 = []), ($targ$46 = null), (temp$2 = $targ$46), (m$3 = null), (function() {
          $5: for (var $__2 = descrs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__3; !($__3 = $__2.next()).done; ) {
            m$3 = $__3.value;
            {
              var $targ$47;
              var descr$0;
              descr$0 = m$3;
              $targ$47 = parse_op_description$0(descr$0);
              temp$2 = $targ$47;
              acc$2.push(temp$2);
            }
          }
        })(), acc$2));
        temp$1 = $targ$44;
        acc$1.push(temp$1);
      } else {
        ___match_error(m$2, "/home/olivier/git/earl-grey/src/parse.eg", 608, 705);
      }
    }
  };
  $4: for (var $__2 = itg$0[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__3; !($__3 = $__2.next()).done; ) {
    $__8();
  }
  $targ$32 = acc$1;
  ($it$0["groups"] = $targ$32);
  [];
  $targ$33 = [];
  ($it$0["fns"] = $targ$33);
  [];
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
  [];
  acc$3 = [];
  $targ$49 = null;
  temp$3 = $targ$49;
  m$4 = null;
  $2: for (var $__6 = enumerate($it$0.groups)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__7; !($__7 = $__6.next()).done; ) {
    m$4 = $__7.value;
    {
      var t1$2;
      var m$5;
      var acc$4;
      var $targ$54;
      var temp$4;
      var $targ$52;
      var t0$3;
      var i$0;
      var group$0;
      t0$3 = m$4;
      if (((t0$3 instanceof Array) && ((t1$2 = t0$3.length), (t1$2 === 2)))) {
        i$0 = t0$3[0];
        group$0 = t0$3[1];
        acc$4 = [];
        $targ$54 = null;
        temp$4 = $targ$54;
        m$5 = null;
        $6: for (var $__4 = group$0[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__5; !($__5 = $__4.next()).done; ) {
          m$5 = $__5.value;
          {
            var t1$3;
            var $targ$58;
            var $targ$57;
            var $targ$59;
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
              $targ$58 = i$0;
              (send(send($it$0.to_gid, fixity$0), width$0)[name$3] = $targ$58);
              $targ$57 = [];
              temp$4 = $targ$57;
              acc$4.push(temp$4);
            } else {
              f$0 = m$5;
              $targ$59 = $it$0.fns.push([f$0, i$0]);
              temp$4 = $targ$59;
              acc$4.push(temp$4);
            }
          }
        }
        $targ$52 = acc$4;
        temp$3 = $targ$52;
        acc$3.push(temp$3);
      } else {
        ___match_error(m$4, "/home/olivier/git/earl-grey/src/parse.eg", 870, 1071);
      }
    }
  }
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
$targ$7 = (function(temp$5$0) {
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
  t0$5 = temp$5$0;
  o$1 = t0$5;
  if (((t0$5 instanceof Array) && ((t1$4 = t0$5.length), (t1$4 === 3)))) {
    fixity$1 = t0$5[0];
    width$1 = t0$5[1];
    name$4 = t0$5[2];
  } else {
    ___match_error(temp$5$0);
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
          ___match_error(m$6, "/home/olivier/git/earl-grey/src/parse.eg", 1252, 1335);
        }
      }
    }
    throw ErrorFactory(["syntax", "unknown_operator"]).create(("Unknown operator: " + [true, String(o$1)][1]), ({"operator": o$1}));
  } else {
    return attempt$0;
  }
});
(OperatorGroups$0.prototype["get"] = $targ$7);
__amp____colon__(OperatorGroups$0, __amp____colon__((($targ$69 = "OperatorGroups"), (accum$0 = ({})), (accum$0["::name"] = $targ$69), accum$0), (($targ$70 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$70), accum$1)));
parse_op_description$0 = (function(ph$0$0) {
  var t2$0;
  var t1$6;
  var otherwise$0;
  var $$16917$0;
  var m$7$0;
  var t1$7;
  var t0$8;
  var $targ$76;
  var fixity$2;
  var short$1;
  var other$0;
  var $targ$73;
  var x$1;
  var w1$0;
  var op$0;
  var w2$0;
  var y$0;
  var $targ$72;
  var f$2;
  var rx$0;
  var t0$7;
  rx$0 = RegExp("(?:^((?:X?))((?:[ _]?))((?:[^ _Y]*))((?:[ _]?))((?:Y?))$)", "");
  $targ$72 = ph$0$0;
  t0$7 = $targ$72;
  if (getChecker(Function)(t0$7)) {
    f$2 = t0$7;
    return f$2;
  } else {
    $targ$73 = getProjector(rx$0)(ph$0$0);
    t0$7 = $targ$73;
    if ((t0$7[0] && ((t1$6 = t0$7[1]), (t2$0 = t1$6.length), (t2$0 === 6)))) {
      t1$6[0];
      x$1 = t1$6[1];
      w1$0 = t1$6[2];
      op$0 = t1$6[3];
      w2$0 = t1$6[4];
      y$0 = t1$6[5];
      m$7$0 = null;
      if ((x$1 === "")) {
        $targ$76 = ["PFX", (w2$0 === "")];
      } else {
        if ((y$0 === "")) {
          $targ$76 = ["SFX", (w1$0 === "")];
        } else {
          otherwise$0 = m$7$0;
          $targ$76 = ["IFX", ((w1$0 === "") || (w2$0 === ""))];
        }
      }
      t0$8 = $targ$76;
      if (((t0$8 instanceof Array) && ((t1$7 = t0$8.length), (t1$7 === 2)))) {
        fixity$2 = t0$8[0];
        short$1 = t0$8[1];
      } else {
        ___match_error($targ$76);
      }
      [fixity$2, short$1];
      if (((w1$0 === "_") || (w2$0 === "_"))) {
        return [[fixity$2, "short", op$0], [fixity$2, "wide", op$0]];
      } else {
        return [[fixity$2, (short$1 ? "short" : "wide"), op$0]];
      }
    } else {
      other$0 = ph$0$0;
      throw ErrorFactory(["invalid_op_description"]).create(("Invalid operator description: " + other$0));
    }
  }
});
SimplePriority$0 = (function(groups$1, priorities$0) {
  var m$8;
  var acc$5;
  var $targ$86;
  var temp$6;
  var $targ$81;
  var _i$0;
  var tracks$0;
  var $targ$84;
  var $it$3;
  if ((!getChecker(SimplePriority$0)(this))) {
    $it$3 = Object.create(SimplePriority$0.prototype);
  } else {
    $it$3 = this;
  }
  $targ$81 = groups$1;
  ($it$3["groups"] = $targ$81);
  [];
  _i$0 = 0;
  tracks$0 = ({});
  acc$5 = [];
  $targ$86 = null;
  temp$6 = $targ$86;
  m$8 = null;
  $8: for (var $__4 = groups$1.gnames[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__5; !($__5 = $__4.next()).done; ) {
    m$8 = $__5.value;
    {
      var t7$0;
      var t6$0;
      var t5$0;
      var t4$0;
      var t3$0;
      var t2$1;
      var t1$8;
      var t0$9;
      var m$9;
      var acc$6;
      var $targ$99;
      var temp$7;
      var t1$9;
      var t0$10;
      var $targ$88;
      var ltracks$0;
      var lp$0;
      var rtracks$0;
      var rp$0;
      var $targ$89;
      var lt$0;
      var rt$0;
      var $targ$87;
      var name$5;
      name$5 = m$8;
      $targ$88 = send(priorities$0, name$5);
      t0$9 = $targ$88;
      if (((t0$9 instanceof Array) && ((t1$8 = t0$9.length), ((t1$8 === 2) && ((t2$1 = t0$9[0]), ((t2$1 instanceof Array) && ((t3$0 = t2$1.length), ((t3$0 === 2) && ((t4$0 = getProjector(Array)(t2$1[0])), (t4$0[0] && ((ltracks$0 = t4$0[1]), (lp$0 = t2$1[1]), (t5$0 = t0$9[1]), ((t5$0 instanceof Array) && ((t6$0 = t5$0.length), ((t6$0 === 2) && ((t7$0 = getProjector(Array)(t5$0[0])), t7$0[0]))))))))))))))) {
        rtracks$0 = t7$0[1];
        rp$0 = t5$0[1];
      } else {
        ___match_error($targ$88);
      }
      [ltracks$0, lp$0, rtracks$0, rp$0];
      acc$6 = [];
      $targ$99 = null;
      temp$7 = $targ$99;
      m$9 = null;
      $9: for (var $__2 = [ltracks$0, rtracks$0][$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        m$9 = $__3.value;
        {
          var m$10;
          var $targ$101;
          var rval$1;
          var $targ$100;
          var tr$1;
          tr$1 = m$9;
          $targ$101 = 0;
          rval$1 = $targ$101;
          m$10 = null;
          $10: for (var $__0 = tr$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$10 = $__1.value;
            {
              var $targ$102;
              var $targ$103;
              var $targ$104;
              var $targ$105;
              var t$1;
              var t$0;
              if ((m$10 === "all")) {
                $targ$102 = (Math.pow(2, 31) - 1);
                rval$1 = $targ$102;
                rval$1;
              } else {
                t$0 = m$10;
                if ((!send(tracks$0, t$0))) {
                  $targ$103 = (rval$1 | Math.pow(2, _i$0));
                  rval$1 = $targ$103;
                  $targ$104 = (_i$0++);
                  (tracks$0[t$0] = $targ$104);
                  [];
                } else {
                  t$1 = m$10;
                  $targ$105 = (rval$1 | Math.pow(2, send(tracks$0, t$1)));
                  rval$1 = $targ$105;
                  rval$1;
                }
              }
            }
          }
          $targ$100 = rval$1;
          temp$7 = $targ$100;
          acc$6.push(temp$7);
        }
      }
      $targ$89 = acc$6;
      t0$10 = $targ$89;
      if (((t0$10 instanceof Array) && ((t1$9 = t0$10.length), (t1$9 === 2)))) {
        lt$0 = t0$10[0];
        rt$0 = t0$10[1];
      } else {
        ___match_error($targ$89);
      }
      [lt$0, rt$0];
      $targ$87 = [[lt$0, lp$0], [rt$0, rp$0]];
      temp$6 = $targ$87;
      acc$5.push(temp$6);
    }
  }
  $targ$84 = acc$5;
  ($it$3["prio"] = $targ$84);
  [];
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
  var $$17150$0;
  var m$11$0;
  var i1$0;
  var i2$0;
  var $targ$112;
  var code1$0;
  var ord1$0;
  var $targ$113;
  var code2$0;
  var ord2$0;
  var $it$4;
  var self$2;
  $it$4 = this;
  self$2 = this;
  i1$0 = $it$4.groups.get(op1$0);
  i2$0 = $it$4.groups.get(op2$0);
  $targ$112 = send($it$4.prio, i1$0);
  t0$11 = $targ$112;
  if (((t0$11 instanceof Array) && ((t1$10 = t0$11.length), ((t1$10 === 2) && (t0$11[0], (t2$2 = t0$11[1]), ((t2$2 instanceof Array) && ((t3$1 = t2$2.length), (t3$1 === 2)))))))) {
    code1$0 = t2$2[0];
    ord1$0 = t2$2[1];
  } else {
    ___match_error($targ$112);
  }
  [code1$0, ord1$0];
  $targ$113 = send($it$4.prio, i2$0);
  t0$12 = $targ$113;
  if (((t0$12 instanceof Array) && ((t1$11 = t0$12.length), ((t1$11 === 2) && ((t2$3 = t0$12[0]), ((t2$3 instanceof Array) && ((t3$2 = t2$3.length), (t3$2 === 2)))))))) {
    code2$0 = t2$3[0];
    ord2$0 = t2$3[1];
    t0$12[1];
  } else {
    ___match_error($targ$113);
  }
  [code2$0, ord2$0];
  m$11$0 = null;
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
          return ___match_error(m$11$0);
        }
      }
    }
  }
});
(SimplePriority$0.prototype["compare"] = $targ$10);
__amp____colon__(SimplePriority$0, __amp____colon__((($targ$123 = "SimplePriority"), (accum$2 = ({})), (accum$2["::name"] = $targ$123), accum$2), (($targ$124 = true), (accum$3 = ({})), (accum$3["::egclass"] = $targ$124), accum$3)));
MAX$0 = (1 / 0);
eg_groups$0 = OperatorGroups$0(__amp____colon__(({
  "sh_ifx": [(function(ph$1$0) {
    var t0$13;
    var t1$12;
    t0$13 = ph$1$0;
    t1$12 = t0$13.length;
    if (((t1$12 === 3) && ((t0$13[0] === "IFX") && (t0$13[1] === "short")))) {
      t0$13[2];
      return true;
    } else {
      return false;
    }
  })],
  "sh_pfx": [(function(ph$2$0) {
    var t0$14;
    var t1$13;
    t0$14 = ph$2$0;
    t1$13 = t0$14.length;
    if (((t1$13 === 3) && ((t0$14[0] === "PFX") && (t0$14[1] === "short")))) {
      t0$14[2];
      return true;
    } else {
      return false;
    }
  })],
  "sh_sfx": [(function(ph$3$0) {
    var t0$15;
    var t1$14;
    t0$15 = ph$3$0;
    t1$14 = t0$15.length;
    if (((t1$14 === 3) && ((t0$15[0] === "SFX") && (t0$15[1] === "short")))) {
      t0$15[2];
      return true;
    } else {
      return false;
    }
  })],
  "wi_ifx": [(function(ph$4$0) {
    var t0$16;
    var t1$15;
    t0$16 = ph$4$0;
    t1$15 = t0$16.length;
    if (((t1$15 === 3) && ((t0$16[0] === "IFX") && (t0$16[1] === "wide")))) {
      t0$16[2];
      return true;
    } else {
      return false;
    }
  })],
  "wi_pfx": [(function(ph$5$0) {
    var t0$17;
    var t1$16;
    t0$17 = ph$5$0;
    t1$16 = t0$17.length;
    if (((t1$16 === 3) && ((t0$17[0] === "PFX") && (t0$17[1] === "wide")))) {
      t0$17[2];
      return true;
    } else {
      return false;
    }
  })],
  "wi_sfx": [(function(ph$6$0) {
    var t0$18;
    var t1$17;
    t0$18 = ph$6$0;
    t1$17 = t0$18.length;
    if (((t1$17 === 3) && ((t0$18[0] === "SFX") && (t0$18[1] === "wide")))) {
      t0$18[2];
      return true;
    } else {
      return false;
    }
  })],
  "comma": ["X_,_Y"],
  "obrack": ["(_Y", "[_Y", "{_Y"],
  "cbrack": ["X_)", "X_]", "X_}"]
}), __amp____colon__((($targ$127 = ["with Y"]), (accum$4 = ({})), (accum$4["withp"] = $targ$127), accum$4), __amp____colon__((($targ$128 = ["X with Y"]), (accum$5 = ({})), (accum$5["with"] = $targ$128), accum$5), __amp____colon__(({
  "lowpriop": ["each Y", "each* Y"],
  "lowprio": ["X each Y", "X each* Y", "X where Y", "X_!!_Y", "X_->_Y", "X_=>_Y", "X_=_Y", "X_:=_Y", "X_+=_Y", "X_-=_Y", "X_*=_Y", "X_/=_Y", "X_<<=_Y", "X_>>=_Y", "X_>>>=_Y", "X_++=_Y", "X_?=_Y", "X_or=_Y", "X_and=_Y", "X_each=_Y", "X_%_Y"]
}), __amp____colon__((($targ$129 = ["X_when_Y"]), (accum$6 = ({})), (accum$6["when"] = $targ$129), accum$6), __amp____colon__((($targ$130 = ["X_or_Y"]), (accum$7 = ({})), (accum$7["or"] = $targ$130), accum$7), __amp____colon__((($targ$131 = ["X_and_Y"]), (accum$8 = ({})), (accum$8["and"] = $targ$131), accum$8), __amp____colon__((($targ$132 = ["not_Y"]), (accum$9 = ({})), (accum$9["not"] = $targ$132), accum$9), ({
  "type": ["X_!_Y", "X_?_Y"],
  "cmp": ["X_==_Y", "X_!=_Y", "X_is_Y", "X_>=_Y", "X_<=_Y", "X_>_Y", "X_<_Y"],
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
}))))))))));
eg_prio$0 = __amp____colon__(({
  "comma": [["all", 1], ["all", 1]],
  "obrack": [["all", MAX$0], ["all", 1]],
  "cbrack": [["all", 1], ["all", MAX$0]]
}), __amp____colon__((($targ$145 = [["all", 1999], ["all", 10]]), (accum$10 = ({})), (accum$10["with"] = $targ$145), accum$10), __amp____colon__(({"lowprio": [["all", 11], ["all", 10]]}), __amp____colon__((($targ$146 = [["all", 100], ["all", 101]]), (accum$11 = ({})), (accum$11["when"] = $targ$146), accum$11), __amp____colon__((($targ$147 = [["all", 110], ["all", 111]]), (accum$12 = ({})), (accum$12["or"] = $targ$147), accum$12), __amp____colon__((($targ$148 = [["all", 120], ["all", 121]]), (accum$13 = ({})), (accum$13["and"] = $targ$148), accum$13), __amp____colon__((($targ$149 = [["all", MAX$0], ["all", 131]]), (accum$14 = ({})), (accum$14["not"] = $targ$149), accum$14), ({
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
  "lowpriop": [["all", MAX$0], ["all", 10]],
  "pipe": [["pipe", 550], ["pipe", 551]],
  "sh_ifx": [["all", 1800], ["all", 1801]],
  "sh_pfx": [["all", MAX$0], ["all", 1901]],
  "sh_sfx": [["all", 1900], ["all", MAX$0]],
  "wi_ifx": [["customl", 900], ["customr", 901]],
  "wi_pfx": [["all", MAX$0], ["all", 901]],
  "wi_sfx": [["all", 900], ["all", MAX$0]]
}))))))));
eg_order$0 = SimplePriority$0(eg_groups$0, eg_prio$0);
DONE$0 = -1;
NONE$0 = 0;
LEFT$0 = 1;
RIGHT$0 = 2;
BOTH$0 = 3;
oparse$0 = (function(next$0, order$0, finalize$1) {
  var $targ$150;
  var between$0;
  var $targ$151;
  var right_op$0;
  var stack$0;
  var $targ$153;
  var left_op$0;
  var $targ$154;
  var current$0;
  $targ$150 = finalize$1(next$0());
  between$0 = $targ$150;
  $targ$151 = next$0();
  right_op$0 = $targ$151;
  stack$0 = [];
  $targ$153 = null;
  left_op$0 = $targ$153;
  $targ$154 = null;
  current$0 = $targ$154;
  $11: while (true) {
    var $targ$157;
    var v$1;
    var $targ$159;
    var $targ$160;
    var $targ$161;
    var $targ$162;
    var $targ$163;
    var $targ$164;
    var $targ$169;
    var $targ$166;
    var $targ$167;
    var $targ$168;
    var other$1;
    var bridge$$17461$0;
    var m$12$0;
    var o$2;
    if (((!left_op$0) && (!right_op$0))) {
      o$2 = DONE$0;
    } else {
      o$2 = ((((!left_op$0) && RIGHT$0) || ((!right_op$0) && LEFT$0)) || order$0(left_op$0, right_op$0));
    }
    m$12$0 = o$2;
    if ((m$12$0 === DONE$0)) {
      return between$0;
    } else {
      if ((m$12$0 === LEFT$0)) {
        current$0.push(between$0);
        $targ$157 = finalize$1(current$0);
        between$0 = $targ$157;
        v$1 = stack$0.pop();
        $targ$159 = v$1[0];
        left_op$0 = $targ$159;
        $targ$160 = v$1[1];
        current$0 = $targ$160;
        current$0;
      } else {
        if ((m$12$0 === RIGHT$0)) {
          stack$0.push([left_op$0, current$0]);
          $targ$161 = right_op$0;
          left_op$0 = $targ$161;
          $targ$162 = [[right_op$0], between$0];
          current$0 = $targ$162;
          $targ$163 = finalize$1(next$0());
          between$0 = $targ$163;
          $targ$164 = next$0();
          right_op$0 = $targ$164;
          right_op$0;
        } else {
          bridge$$17461$0 = m$12$0;
          if (((bridge$$17461$0 === BOTH$0) || (bridge$$17461$0 === NONE$0))) {
            current$0[0].push(right_op$0);
            current$0.push(between$0);
            $targ$166 = right_op$0;
            left_op$0 = $targ$166;
            $targ$167 = finalize$1(next$0());
            between$0 = $targ$167;
            $targ$168 = next$0();
            right_op$0 = $targ$168;
            if ((o$2 === NONE$0)) {
              $targ$169 = true;
              (current$0["tainted"] = $targ$169);
              [];
            }
          } else {
            other$1 = m$12$0;
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
  var m$14;
  var m$15;
  var m$16;
  var acc$7;
  var $targ$182;
  var temp$9;
  var $targ$189;
  var $targ$188;
  var $targ$187;
  var $targ$186;
  var t0$22;
  var $targ$191;
  var $targ$190;
  var t8$0;
  var t7$1;
  var t6$1;
  var t5$1;
  var $targ$193;
  var $targ$192;
  var $targ$214;
  var t2$6;
  var t1$23;
  var $targ$215;
  var other$3;
  var args$4;
  var f$6;
  var orig_args$0;
  var args$3;
  var $$17896$0;
  var $$17897$0;
  var t0$26;
  var m$18$0;
  var $targ$198;
  var inserted$0;
  var result$1;
  var t0$27;
  var bridge$$17607$0;
  var $targ$222;
  var f$7;
  var t0$29;
  var $targ$228;
  var other$5;
  var x$4;
  var $$18000$0;
  var $$18001$0;
  var m$19$0;
  var $targ$220;
  var result$2;
  var $targ$230;
  var $targ$229;
  var f$8;
  var t5$2;
  var t4$2;
  var t3$5;
  var t2$7;
  var t1$26;
  var oloc$0;
  var abloc$0;
  var oabloc$0;
  var rval$2;
  var $targ$244;
  var a$1;
  var b$1;
  var t0$31;
  var $$17613$0;
  var $$17614$0;
  var $$17615$0;
  var $$17616$0;
  var m$20;
  var acc$8;
  var $targ$246;
  var temp$11;
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
  var $$17618$0;
  var $$17619$0;
  var $$17620$0;
  var $$17621$0;
  var $$17622$0;
  var $$17623$0;
  var $$17624$0;
  var t1$20;
  var t2$4;
  var t3$3;
  var t4$1;
  var m$13$0;
  var $targ$173;
  var sumloc$0;
  var orig_ops$0;
  var $targ$175;
  var op$1;
  var other$7;
  var ops$0;
  var args$1;
  var value$4;
  var value$3;
  var value$2;
  var value$1;
  var t0$20;
  var t1$18;
  var value$0;
  var $$17555$0;
  var $$17556$0;
  var $$17557$0;
  var token$0;
  var ph$7$0;
  t0$19 = temp$8$0;
  token$0 = t0$19;
  ph$7$0 = t0$19;
  t0$20 = ph$7$0;
  t1$18 = t0$20.length;
  if ((($$17557$0 = (t1$18 === 2)) && (t0$20[0] === "ID"))) {
    value$0 = t0$20[1];
    return __lt____lt____colon__$0(["symbol", value$0], token$0);
  } else {
    if (($$17557$0 && (t0$20[0] === "ILLEGAL"))) {
      value$1 = t0$20[1];
      return __lt____lt____colon__$0(["char", value$1], token$0);
    } else {
      if (($$17557$0 && (t0$20[0] === "NUM"))) {
        value$2 = t0$20[1];
        return __lt____lt____colon__$0(["value", value$2], token$0);
      } else {
        if (($$17557$0 && (t0$20[0] === "STR"))) {
          value$3 = t0$20[1];
          return __lt____lt____colon__$0(["value", value$3], token$0);
        } else {
          if (($$17557$0 && (t0$20[0] === "QUASI"))) {
            value$4 = t0$20[1];
            return __lt____lt____colon__$0(["send", ["symbol", "`"], __lt____lt____colon__$0(["value", value$4], token$0)], token$0);
          } else {
            if (((t1$18 === 1) && (t0$20[0] === "VOID"))) {
              return __lt____lt____colon__$0(["void"], token$0);
            } else {
              if ((t1$18 >= 1)) {
                ops$0 = t0$20[0];
                args$1 = Array.prototype.slice.call(t0$20, 1);
                $targ$173 = ops$0[0].location;
                sumloc$0 = $targ$173;
                m$14 = null;
                $12: for (var $__0 = ops$0.slice(1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__1; !($__1 = $__0.next()).done; ) {
                  m$14 = $__1.value;
                  {
                    var $targ$177;
                    var op$2;
                    op$2 = m$14;
                    $targ$177 = __plus____plus____colon__$0(sumloc$0, op$2);
                    sumloc$0 = $targ$177;
                    sumloc$0;
                  }
                }
                m$15 = null;
                $13: for (var $__2 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__3; !($__3 = $__2.next()).done; ) {
                  m$15 = $__3.value;
                  {
                    var t1$19;
                    var $targ$180;
                    var arg$0;
                    var t0$21;
                    t0$21 = m$15;
                    if (((t0$21 instanceof Array) && ((t1$19 = t0$21.length), ((t1$19 === 1) && (t0$21[0] === "void"))))) {
                      undefined;
                    } else {
                      arg$0 = m$15;
                      $targ$180 = __plus____plus____colon__$0(sumloc$0, arg$0);
                      sumloc$0 = $targ$180;
                      sumloc$0;
                    }
                  }
                }
                orig_ops$0 = ops$0;
                acc$7 = [];
                $targ$182 = null;
                temp$9 = $targ$182;
                m$16 = null;
                $14: for (var $__4 = ops$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__5; !($__5 = $__4.next()).done; ) {
                  m$16 = $__5.value;
                  {
                    var $targ$183;
                    var o$3;
                    o$3 = m$16;
                    $targ$183 = o$3[2];
                    temp$9 = $targ$183;
                    acc$7.push(temp$9);
                  }
                }
                $targ$175 = acc$7;
                ops$0 = $targ$175;
                op$1 = ops$0[0];
                m$13$0 = [ops$0, args$1];
                if ((($$17618$0 = (m$13$0 instanceof Array)) && ((t0$22 = m$13$0.length), (($$17620$0 = (t0$22 === 2)) && (($targ$186 = m$13$0[0]), (t1$20 = $targ$186), (($$17622$0 = (t1$20 instanceof Array)) && (($targ$187 = t1$20.length), (t2$4 = $targ$187), ((t2$4 === 2) && ((t1$20[0] === "WHITE") && ((t1$20[1] === ":") && (($targ$188 = m$13$0[1]), (t3$3 = $targ$188), ((t3$3 instanceof Array) && (($targ$189 = t3$3.length), (t4$1 = $targ$189), (t4$1 === 3)))))))))))))) {
                  f$3 = t3$3[0];
                  arg$1 = t3$3[1];
                  body$0 = t3$3[2];
                  return __lt____lt____colon__$0(["send", f$3, __lt____lt____colon__$0(["data", arg$1, body$0], __plus____plus____colon__$0(arg$1, body$0))], sumloc$0);
                } else {
                  if (($$17622$0 && (($$17624$0 = (t2$4 === 1)) && ((t1$20[0] === ":") && (($targ$190 = m$13$0[1]), (t3$3 = $targ$190), ((t3$3 instanceof Array) && (($targ$191 = t3$3.length), (t4$1 = $targ$191), (t4$1 === 2)))))))) {
                    f$4 = t3$3[0];
                    body$1 = t3$3[1];
                    return __lt____lt____colon__$0(["send", f$4, __lt____lt____colon__$0(["data", body$1], body$1)], sumloc$0);
                  } else {
                    if (($$17624$0 && ((t1$20[0] === "with") && (($targ$192 = m$13$0[1]), (t3$3 = $targ$192), ((t3$3 instanceof Array) && (($targ$193 = t3$3.length), (t4$1 = $targ$193), ((t4$1 === 2) && ((target$0 = t3$3[0]), (t5$1 = t3$3[1]), (_b$0 = t5$1), (t6$1 = getProjector(Body$0)(t5$1)), (t6$1[0] && ((t7$1 = t6$1[1]), (t8$0 = t7$1.length), (t8$0 >= 0))))))))))) {
                      body$2 = Array.prototype.slice.call(t7$1, 0);
                      $targ$198 = false;
                      inserted$0 = $targ$198;
                      result$1 = transform$0(target$0, (function(temp$10$0) {
                        var t0$23;
                        var $targ$203;
                        var t3$4;
                        var t2$5;
                        var $targ$204;
                        var m$17;
                        var tr$2;
                        var $targ$209;
                        var res$0;
                        var $targ$207;
                        var args$2;
                        var x$2;
                        var f$5;
                        var a$0;
                        var b$0;
                        var t0$24;
                        var $targ$202;
                        var $$17795$0;
                        var t1$21;
                        var expr$1;
                        var ph$9$0;
                        t0$23 = temp$10$0;
                        expr$1 = t0$23;
                        ph$9$0 = t0$23;
                        t0$24 = ph$9$0;
                        $targ$202 = t0$24.length;
                        t1$21 = $targ$202;
                        if (((t1$21 === 2) && ((t0$24[0] === "symbol") && (t0$24[1] === "...")))) {
                          $targ$203 = true;
                          inserted$0 = $targ$203;
                          return __lt____lt____colon__$0(["multi"].concat(body$2), _b$0);
                        } else {
                          x$2 = t0$24;
                          if ((x$2.fromop && ((t0$24 instanceof Array) && (($targ$204 = t0$24.length), (t1$21 = $targ$204), ((t1$21 === 3) && ((t0$24[0] === "send") && ((f$5 = t0$24[1]), (t2$5 = t0$24[2]), ((t2$5 instanceof Array) && ((t3$4 = t2$5.length), ((t3$4 === 3) && (t2$5[0] === "data"))))))))))) {
                            a$0 = t2$5[1];
                            b$0 = t2$5[2];
                            return ["send", this(f$5), __lt____lt____colon__$0(["data", this(a$0), this(b$0)], __plus____plus____colon__$0(a$0, b$0))];
                          } else {
                            $targ$207 = t0$24.length;
                            t1$21 = $targ$207;
                            if (((t1$21 >= 1) && (t0$24[0] === "data"))) {
                              args$2 = Array.prototype.slice.call(t0$24, 1);
                              tr$2 = this;
                              $targ$209 = ["data"];
                              res$0 = $targ$209;
                              m$17 = null;
                              $15: for (var $__6 = args$2[$traceurRuntime.toProperty(Symbol.iterator)](),
                                  $__7; !($__7 = $__6.next()).done; ) {
                                m$17 = $__7.value;
                                {
                                  var t1$22;
                                  var $targ$212;
                                  var other$2;
                                  var t0$25;
                                  t0$25 = m$17;
                                  if (((t0$25 instanceof Array) && ((t1$22 = t0$25.length), ((t1$22 === 2) && ((t0$25[0] === "symbol") && (t0$25[1] === "...")))))) {
                                    $targ$212 = true;
                                    inserted$0 = $targ$212;
                                    res$0 = res$0.concat(body$2);
                                  } else {
                                    other$2 = m$17;
                                    res$0.push(__lt____lt____colon__$0(tr$2(other$2), other$2));
                                  }
                                }
                              }
                              return __lt____lt____colon__$0(res$0, expr$1);
                            } else {
                              return ___match_error(ph$9$0);
                            }
                          }
                        }
                      }));
                      if ((!inserted$0)) {
                        m$18$0 = target$0;
                        if (((m$18$0 instanceof Array) && (($targ$214 = m$18$0.length), (t0$26 = $targ$214), ((t0$26 === 1) && (m$18$0[0] === "void"))))) {
                          return __lt____lt____colon__$0(["data"].concat(body$2), sumloc$0);
                        } else {
                          if (target$0.fromop) {
                            return __lt____lt____colon__$0(["send", target$0, __lt____lt____colon__$0(["data"].concat(body$2), _b$0)], sumloc$0);
                          } else {
                            if ((($$17896$0 = (m$18$0 instanceof Array)) && (($targ$215 = m$18$0.length), (t0$26 = $targ$215), ((t0$26 === 3) && ((m$18$0[0] === "send") && ((f$6 = m$18$0[1]), (t1$23 = m$18$0[2]), (orig_args$0 = t1$23), ((t1$23 instanceof Array) && ((t2$6 = t1$23.length), ((t2$6 >= 1) && (t1$23[0] === "data")))))))))) {
                              args$3 = Array.prototype.slice.call(t1$23, 1);
                              return __lt____lt____colon__$0(["send", f$6, __lt____lt____colon__$0(["data"].concat(args$3).concat(body$2), __plus____plus____colon__$0(orig_args$0, _b$0))], sumloc$0);
                            } else {
                              if (($$17896$0 && ((t0$26 >= 1) && (m$18$0[0] === "data")))) {
                                args$4 = Array.prototype.slice.call(m$18$0, 1);
                                return __lt____lt____colon__$0(target$0.concat(body$2), sumloc$0);
                              } else {
                                other$3 = m$18$0;
                                return __lt____lt____colon__$0(["send", target$0, __lt____lt____colon__$0(["data"].concat(body$2), _b$0)], sumloc$0);
                              }
                            }
                          }
                        }
                      } else {
                        return __lt____lt____colon__$0(result$1, sumloc$0);
                      }
                    } else {
                      if (($$17620$0 && ((bridge$$17607$0 = m$13$0[0]), ((((bridge$$17607$0 instanceof Array) && ((t0$27 = bridge$$17607$0.length), ((t0$27 >= 2) && ((bridge$$17607$0[0] === "[") && ((commas$0 = Array.prototype.slice.call(bridge$$17607$0, 1, -1)), (bridge$$17607$0[(t0$27 - 1)] === "]")))))) || ((commas$0 = bridge$$17607$0), true)) && (m$13$0[1], commas$0.every((function(x$3) {
                        return equal(x$3, ",");
                      }))))))) {
                        if ((op$1 === "[")) {
                          $targ$222 = args$1.slice(1, -1);
                          args$1 = $targ$222;
                          args$1;
                        }
                        f$7 = (function(ph$10$0) {
                          var other$4;
                          var t0$28;
                          var t1$24;
                          t0$28 = ph$10$0;
                          t1$24 = t0$28.length;
                          if (((t1$24 === 1) && (t0$28[0] === "void"))) {
                            return false;
                          } else {
                            other$4 = ph$10$0;
                            return true;
                          }
                        });
                        $targ$220 = args$1.filter(f$7);
                        args$1 = $targ$220;
                        m$19$0 = args$1;
                        if ((($$18000$0 = (m$19$0 instanceof Array)) && ((t0$29 = m$19$0.length), (t0$29 === 0)))) {
                          result$2 = ["multi"];
                        } else {
                          if (($$18000$0 && (t0$29 === 1))) {
                            x$4 = m$19$0[0];
                            if (((!isNaN(sumloc$0.start)) && (!isNaN(sumloc$0.end)))) {
                              $targ$228 = sumloc$0;
                              (x$4["location"] = $targ$228);
                              [];
                            }
                            result$2 = x$4;
                          } else {
                            other$5 = m$19$0;
                            result$2 = ["multi"].concat(args$1);
                          }
                        }
                        return __lt____lt____colon__$0(result$2, sumloc$0);
                      } else {
                        if (($$17620$0 && (($targ$229 = m$13$0[0]), (t1$20 = $targ$229), (($$17622$0 = (t1$20 instanceof Array)) && (($targ$230 = t1$20.length), (t2$4 = $targ$230), ((t2$4 >= 2) && ((t1$20[0] === "{") && ((commas$1 = Array.prototype.slice.call(t1$20, 1, -1)), ((t1$20[(t2$4 - 1)] === "}") && (m$13$0[1], commas$1.every((function(x$5) {
                          return equal(x$5, ",");
                        })))))))))))) {
                          f$8 = (function(ph$11$0) {
                            var other$6;
                            var t0$30;
                            var t1$25;
                            t0$30 = ph$11$0;
                            t1$25 = t0$30.length;
                            if (((t1$25 === 1) && (t0$30[0] === "void"))) {
                              return false;
                            } else {
                              other$6 = ph$11$0;
                              return true;
                            }
                          });
                          return __lt____lt____colon__$0(["data"].concat(args$1.slice(1, -1).filter(f$8)), sumloc$0);
                        } else {
                          if (($$17622$0 && (($$17624$0 = (t2$4 === 1)) && (t1$20[0] === "WHITE")))) {
                            m$13$0[1];
                            return __lt____lt____colon__$0(["send"].concat(args$1), sumloc$0);
                          } else {
                            if ($$17624$0) {
                              t1$20[0];
                              ph$8$0 = m$13$0[1];
                              t0$31 = ph$8$0;
                              if ((($$17614$0 = (t0$31 instanceof Array)) && ((t1$26 = t0$31.length), (($$17616$0 = (t1$26 === 2)) && ((t2$7 = t0$31[0]), ((t2$7 instanceof Array) && ((t3$5 = t2$7.length), ((t3$5 === 1) && ((t2$7[0] === "void") && ((t4$2 = t0$31[1]), ((t4$2 instanceof Array) && ((t5$2 = t4$2.length), ((t5$2 === 1) && (t4$2[0] === "void")))))))))))))) {
                                return __lt____lt____colon__$0(["symbol", op$1], orig_ops$0[0]);
                              } else {
                                if ($$17616$0) {
                                  a$1 = t0$31[0];
                                  b$1 = t0$31[1];
                                  oloc$0 = orig_ops$0[0].location;
                                  abloc$0 = __plus____plus____colon__$0(a$1, b$1);
                                  oabloc$0 = __plus____plus____colon__$0(orig_ops$0[0], abloc$0);
                                  rval$2 = __lt____lt____colon__$0(["send", __lt____lt____colon__$0(["symbol", op$1], oloc$0), __lt____lt____colon__$0(["data", a$1, b$1], abloc$0)], __plus____plus____colon__$0(oloc$0, abloc$0));
                                  $targ$244 = true;
                                  (rval$2["fromop"] = $targ$244);
                                  [];
                                  return rval$2;
                                } else {
                                  return ___match_error(ph$8$0);
                                }
                              }
                            } else {
                              if ($$17620$0) {
                                op_strings$0 = m$13$0[0];
                                args$5 = m$13$0[1];
                                return __lt____lt____colon__$0(["mismix", ((acc$8 = []), ($targ$246 = null), (temp$11 = $targ$246), (m$20 = null), (function() {
                                  $16: for (var $__6 = orig_ops$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                      $__7; !($__7 = $__6.next()).done; ) {
                                    m$20 = $__7.value;
                                    {
                                      var $targ$247;
                                      var op$3;
                                      op$3 = m$20;
                                      $targ$247 = __lt____lt____colon__$0(["symbol", op$3[2]], op$3);
                                      temp$11 = $targ$247;
                                      acc$8.push(temp$11);
                                    }
                                  }
                                })(), acc$8)].concat(args$5), sumloc$0);
                              } else {
                                return ___match_error(m$13$0);
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              } else {
                other$7 = ph$7$0;
                throw ErrorFactory(["should_never_happen"]).create("unknown node (B)", ({"node": token$0}));
              }
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
$targ$249 = OperatorGroups$0;
(exports["OperatorGroups"] = $targ$249);
[];
$targ$250 = SimplePriority$0;
(exports["SimplePriority"] = $targ$250);
[];
$targ$251 = parse$0;
(exports["parse"] = $targ$251);
[];
$targ$252 = oparse$0;
(exports["oparse"] = $targ$252);
[];
$targ$253 = finalize$0;
(exports["finalize"] = $targ$253);
[];
$targ$254 = DONE$0;
(exports["DONE"] = $targ$254);
[];
$targ$255 = NONE$0;
(exports["NONE"] = $targ$255);
[];
$targ$256 = LEFT$0;
(exports["LEFT"] = $targ$256);
[];
$targ$257 = RIGHT$0;
(exports["RIGHT"] = $targ$257);
[];
$targ$258 = BOTH$0;
(exports["BOTH"] = $targ$258);
[];
//# sourceURL=<compile-source>
