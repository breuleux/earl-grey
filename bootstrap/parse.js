"use strict";
require("earlgrey-runtime");
var $11136 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var accum$9065;
var accum$9069;
var accum$9717;
var accum$9721;
var accum$9947;
var accum$9951;
var accum$9955;
var accum$9959;
var accum$9963;
var accum$9967;
var accum$9979;
var accum$9983;
var accum$9987;
var accum$9991;
var accum$9995;
var eg_groups$9732;
var eg_prio$9733;
var $8473$8497;
var __lt____lt____colon__$8498;
var __plus____plus____colon__$8499;
var $8474$8500;
var Body$8501;
var transform$8502;
var OperatorGroups$8503;
var parse_op_description$8504;
var SimplePriority$8505;
var MAX$8506;
var eg_order$8507;
var DONE$8508;
var NONE$8509;
var LEFT$8510;
var RIGHT$8511;
var BOTH$8512;
var oparse$8513;
var finalize$8514;
var parse$8515;
($8473$8497 = require("./location"));
(__lt____lt____colon__$8498 = $8473$8497["<<:"]);
(__plus____plus____colon__$8499 = $8473$8497["++:"]);
($8474$8500 = require("./util"));
(Body$8501 = $8474$8500.Body);
(transform$8502 = (function(expr$8535, cb$8536) {
  var rval$8556;
  var tr$8541;
  var result$8542;
  (tr$8541 = (function(x$8547) {
    return transform$8502(x$8547, cb$8536);
  }));
  (result$8542 = (((rval$8556 = false)), ((function() {
    try {
      (rval$8556 = cb$8536.call(tr$8541, expr$8535));
    } catch (excv$8567) {
      var name$8619;
      var args$8620;
      var v$8614;
      var s$8609;
      var $8583$8595;
      var $8584$8596;
      var $8585$8597;
      var t0$8593;
      var $8578$8588;
      var e$8573;
      (e$8573 = excv$8567);
      (rval$8556 = ((($8578$8588 = expr$8535)), ((($8583$8595 = ($8578$8588 instanceof Array)) && (((t0$8593 = $8578$8588.length)), ((t0$8593 === 1) && ($8578$8588[0] === "void")))) ? ["void"] : (($8583$8595 && (($8585$8597 = (t0$8593 === 2)) && ($8578$8588[0] === "symbol"))) ? ((s$8609 = $8578$8588[1]), expr$8535) : (($8585$8597 && ($8578$8588[0] === "value")) ? ((v$8614 = $8578$8588[1]), expr$8535) : (($8583$8595 && (t0$8593 >= 1)) ? ((name$8619 = $8578$8588[0]), (args$8620 = Array.prototype.slice.call($8578$8588, 1)), [name$8619].concat(args$8620.map(tr$8541))) : (___match_error($8578$8588))))))));
    }
  })(), rval$8556)));
  return __lt____lt____colon__$8498(result$8542, expr$8535);
}));
(OperatorGroups$8503 = (function(groups$8632) {
  var $index$8679;
  var $length$8673;
  var temp$8667;
  var acc$8661;
  var $index$8739;
  var $length$8733;
  var temp$8727;
  var acc$8721;
  var $index$8844;
  var $length$8838;
  var temp$8832;
  var acc$8826;
  var itg$8647;
  var it$0$8635;
  (it$0$8635 = ((!getChecker(OperatorGroups$8503)(this)) ? Object.create(OperatorGroups$8503.prototype) : this));
  (itg$8647 = items(groups$8632));
  (it$0$8635["gnames"] = (((acc$8661 = [])), (((temp$8667 = itg$8647)), ((($length$8673 = temp$8667.length)), ((($index$8679 = 0)), (function() {
    $8656: for (; ($index$8679 < $length$8673); ($index$8679++)) {
      var name$8698;
      var t0$8693;
      var t1$8694;
      var m$8688;
      (m$8688 = temp$8667[$index$8679]);
      (t0$8693 = m$8688);
      if (((t0$8693 instanceof Array) && (((t1$8694 = t0$8693.length)), (t1$8694 === 2)))) {
        (name$8698 = t0$8693[0]);
        t0$8693[1];
        acc$8661.push(name$8698);
      } else {
        ___match_error(m$8688, "/home/olivier/git/earl-grey/src/parse.eg", 565, 591);
      }
    }
  })()))), acc$8661));
  (it$0$8635["groups"] = (((acc$8721 = [])), (((temp$8727 = itg$8647)), ((($length$8733 = temp$8727.length)), ((($index$8739 = 0)), (function() {
    var $__0 = function() {
      var $index$8795;
      var $length$8789;
      var temp$8783;
      var acc$8777;
      var name$8758;
      var descrs$8759;
      var t0$8753;
      var t1$8754;
      var m$8748;
      (m$8748 = temp$8727[$index$8739]);
      (t0$8753 = m$8748);
      if (((t0$8753 instanceof Array) && (((t1$8754 = t0$8753.length)), (t1$8754 === 2)))) {
        (name$8758 = t0$8753[0]);
        (descrs$8759 = t0$8753[1]);
        acc$8721.push(___build_array((((acc$8777 = [])), (((temp$8783 = descrs$8759)), ((($length$8789 = temp$8783.length)), ((($index$8795 = 0)), (function() {
          $8772: for (; ($index$8795 < $length$8789); ($index$8795++)) {
            var descr$8812;
            var m$8804;
            (m$8804 = temp$8783[$index$8795]);
            (descr$8812 = m$8804);
            acc$8777.push(parse_op_description$8504(descr$8812));
          }
        })()))), acc$8777)));
      } else {
        ___match_error(m$8748, "/home/olivier/git/earl-grey/src/parse.eg", 608, 705);
      }
    };
    $8716: for (; ($index$8739 < $length$8733); ($index$8739++)) {
      $__0();
    }
  })()))), acc$8721));
  (it$0$8635["fns"] = []);
  (it$0$8635["to_gid"] = ({
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
  }));
  (acc$8826 = []);
  (temp$8832 = enumerate(it$0$8635.groups));
  ($length$8838 = temp$8832.length);
  ($index$8844 = 0);
  var $__1 = function() {
    var $index$8901;
    var $length$8895;
    var temp$8889;
    var acc$8883;
    var i$8863;
    var group$8864;
    var t0$8858;
    var t1$8859;
    var m$8853;
    (m$8853 = temp$8832[$index$8844]);
    (t0$8858 = m$8853);
    if (((t0$8858 instanceof Array) && (((t1$8859 = t0$8858.length)), (t1$8859 === 2)))) {
      (i$8863 = t0$8858[0]);
      (group$8864 = t0$8858[1]);
      acc$8826.push((((acc$8883 = [])), (((temp$8889 = group$8864)), ((($length$8895 = temp$8889.length)), ((($index$8901 = 0)), (function() {
        $8877: for (; ($index$8901 < $length$8895); ($index$8901++)) {
          var f$8941;
          var fixity$8920;
          var width$8921;
          var name$8922;
          var t0$8915;
          var t1$8916;
          var m$8910;
          (m$8910 = temp$8889[$index$8901]);
          (t0$8915 = m$8910);
          if (((t0$8915 instanceof Array) && (((t1$8916 = t0$8915.length)), (t1$8916 === 3)))) {
            (fixity$8920 = t0$8915[0]);
            (width$8921 = t0$8915[1]);
            (name$8922 = t0$8915[2]);
            acc$8883.push((($11136($11136(it$0$8635.to_gid, fixity$8920), width$8921)[name$8922] = i$8863)));
          } else {
            (f$8941 = m$8910);
            acc$8883.push(it$0$8635.fns.push([f$8941, i$8863]));
          }
        }
      })()))), acc$8883));
    } else {
      ___match_error(m$8853, "/home/olivier/git/earl-grey/src/parse.eg", 870, 1071);
    }
  };
  $8648: for (; ($index$8844 < $length$8838); ($index$8844++)) {
    $__1();
  }
  acc$8826;
  return it$0$8635;
}));
(OperatorGroups$8503.prototype["get_name"] = (function(o$8951) {
  var it$0$8955;
  var self$8956;
  (it$0$8955 = this);
  (self$8956 = this);
  return $11136(it$0$8955.gnames, it$0$8955.get(o$8951));
}));
(OperatorGroups$8503.prototype["get"] = (function($8967$8970) {
  var t0$8988;
  var t1$8989;
  var $index$9027;
  var $length$9021;
  var temp$9015;
  var attempt$9004;
  var o$8983;
  var fixity$8984;
  var width$8985;
  var name$8986;
  var it$0$8974;
  var self$8975;
  (it$0$8974 = this);
  (self$8975 = this);
  (t0$8988 = $8967$8970);
  (o$8983 = t0$8988);
  if (((t0$8988 instanceof Array) && (((t1$8989 = t0$8988.length)), (t1$8989 === 3)))) {
    (fixity$8984 = t0$8988[0]);
    (width$8985 = t0$8988[1]);
    (name$8986 = t0$8988[2]);
  } else {
    ___match_error($8967$8970);
  }
  (attempt$9004 = $11136($11136($11136(it$0$8974.to_gid, fixity$8984), width$8985), name$8986));
  if ((attempt$9004 === (void 0))) {
    (temp$9015 = it$0$8974.fns);
    ($length$9021 = temp$9015.length);
    ($index$9027 = 0);
    $9009: for (; ($index$9027 < $length$9021); ($index$9027++)) {
      var f$9046;
      var i$9047;
      var t0$9041;
      var t1$9042;
      var m$9036;
      (m$9036 = temp$9015[$index$9027]);
      (t0$9041 = m$9036);
      if (((t0$9041 instanceof Array) && (((t1$9042 = t0$9041.length)), (t1$9042 === 2)))) {
        (f$9046 = t0$9041[0]);
        (i$9047 = t0$9041[1]);
        if (f$9046(o$8983)) {
          return i$9047;
        }
      } else {
        ___match_error(m$9036, "/home/olivier/git/earl-grey/src/parse.eg", 1250, 1333);
      }
    }
    throw ErrorFactory(["syntax", "unknown_operator"]).create(("Unknown operator: " + [true, String(o$8983)][1]), ({"operator": o$8983}));
  } else {
    return attempt$9004;
  }
}));
__amp____colon__(OperatorGroups$8503, __amp____colon__(((accum$9065 = ({})), ((accum$9065["::name"] = "OperatorGroups"), accum$9065)), ((accum$9069 = ({})), ((accum$9069["::egclass"] = true), accum$9069))));
OperatorGroups$8503;
(parse_op_description$8504 = (function($9075$9078) {
  var otherwise$9168;
  var $9148$9157;
  var $9144$9151;
  var otherwise$9202;
  var $9182$9191;
  var $9178$9185;
  var t0$9138;
  var t1$9139;
  var fixity$9135;
  var short$9136;
  var other$9206;
  var x$9112;
  var w1$9113;
  var op$9114;
  var w2$9115;
  var y$9116;
  var f$9107;
  var rx$9101;
  var t0$9095;
  var t1$9096;
  var t2$9097;
  var $9080$9090;
  var ph$9084;
  (ph$9084 = $9075$9078);
  ($9080$9090 = ph$9084);
  (rx$9101 = RegExp("(?:^((?:X?))((?:[ _]?))((?:[^ _Y]*))((?:[ _]?))((?:Y?))$)", ""));
  if (getChecker(Function)($9080$9090)) {
    (f$9107 = $9080$9090);
    return f$9107;
  } else {
    (t0$9095 = getProjector(rx$9101)($9080$9090));
    if ((t0$9095[0] && (((t1$9096 = t0$9095[1])), (((t2$9097 = t1$9096.length)), (t2$9097 === 6))))) {
      t1$9096[0];
      (x$9112 = t1$9096[1]);
      (w1$9113 = t1$9096[2]);
      (op$9114 = t1$9096[3]);
      (w2$9115 = t1$9096[4]);
      (y$9116 = t1$9096[5]);
      (t0$9138 = ((($9144$9151 = null)), ($9144$9151, ((x$9112 === "") ? ["PFX", (w2$9115 === "")] : ((y$9116 === "") ? ["SFX", (w1$9113 === "")] : ((otherwise$9168 = $9144$9151), ["IFX", ((w1$9113 === "") || (w2$9115 === ""))]))))));
      if (((t0$9138 instanceof Array) && (((t1$9139 = t0$9138.length)), (t1$9139 === 2)))) {
        (fixity$9135 = t0$9138[0]);
        (short$9136 = t0$9138[1]);
      } else {
        ___match_error(((($9178$9185 = null)), ($9178$9185, ((x$9112 === "") ? ["PFX", (w2$9115 === "")] : ((y$9116 === "") ? ["SFX", (w1$9113 === "")] : ((otherwise$9202 = $9178$9185), ["IFX", ((w1$9113 === "") || (w2$9115 === ""))]))))), "/home/olivier/git/earl-grey/src/parse.eg", 1714, 1922);
      }
      if (((w1$9113 === "_") || (w2$9115 === "_"))) {
        return [[fixity$9135, "short", op$9114], [fixity$9135, "wide", op$9114]];
      } else {
        return [[fixity$9135, (short$9136 ? "short" : "wide"), op$9114]];
      }
    } else {
      (other$9206 = $9080$9090);
      throw ErrorFactory(["invalid_op_description"]).create(("Invalid operator description: " + other$9206));
    }
  }
}));
(SimplePriority$8505 = (function(groups$9213, priorities$9214) {
  var $index$9264;
  var $length$9258;
  var temp$9252;
  var acc$9246;
  var _i$9228;
  var tracks$9229;
  var it$0$9217;
  (it$0$9217 = ((!getChecker(SimplePriority$8505)(this)) ? Object.create(SimplePriority$8505.prototype) : this));
  (it$0$9217["groups"] = groups$9213);
  (_i$9228 = 0);
  (tracks$9229 = ({}));
  (it$0$9217["prio"] = (((acc$9246 = [])), (((temp$9252 = groups$9213.gnames)), ((($length$9258 = temp$9252.length)), ((($index$9264 = 0)), (function() {
    var $__2 = function() {
      var t0$9294;
      var t1$9295;
      var t2$9296;
      var t3$9297;
      var t4$9298;
      var t5$9299;
      var t6$9300;
      var t7$9301;
      var $index$9376;
      var $length$9370;
      var temp$9364;
      var acc$9358;
      var $index$9498;
      var $length$9492;
      var temp$9486;
      var acc$9480;
      var t0$9347;
      var t1$9348;
      var ltracks$9287;
      var lp$9288;
      var rtracks$9289;
      var rp$9290;
      var lt$9291;
      var rt$9292;
      var name$9281;
      var m$9273;
      (m$9273 = temp$9252[$index$9264]);
      (name$9281 = m$9273);
      acc$9246.push(((((t0$9294 = $11136(priorities$9214, name$9281))), (((t0$9294 instanceof Array) && (((t1$9295 = t0$9294.length)), ((t1$9295 === 2) && (((t2$9296 = t0$9294[0])), ((t2$9296 instanceof Array) && (((t3$9297 = t2$9296.length)), ((t3$9297 === 2) && (((t4$9298 = getProjector(Array)(t2$9296[0]))), (t4$9298[0] && ((ltracks$9287 = t4$9298[1]), ((lp$9288 = t2$9296[1]), (((t5$9299 = t0$9294[1])), ((t5$9299 instanceof Array) && (((t6$9300 = t5$9299.length)), ((t6$9300 === 2) && (((t7$9301 = getProjector(Array)(t5$9299[0]))), t7$9301[0])))))))))))))))) ? ((rtracks$9289 = t7$9301[1]), (rp$9290 = t5$9299[1])) : ___match_error($11136(priorities$9214, name$9281), "/home/olivier/git/earl-grey/src/parse.eg", 3721, 3737))), (((t0$9347 = (((acc$9358 = [])), (((temp$9364 = [ltracks$9287, rtracks$9289])), ((($length$9370 = temp$9364.length)), ((($index$9376 = 0)), (function() {
        var $__3 = function() {
          var $index$9422;
          var $length$9416;
          var temp$9410;
          var rval$9398;
          var tr$9393;
          var m$9385;
          (m$9385 = temp$9364[$index$9376]);
          (tr$9393 = m$9385);
          acc$9358.push((((rval$9398 = 0)), (((temp$9410 = tr$9393)), ((($length$9416 = temp$9410.length)), ((($index$9422 = 0)), (function() {
            $9399: for (; ($index$9422 < $length$9416); ($index$9422++)) {
              var t$9461;
              var t$9447;
              var m$9431;
              (m$9431 = temp$9410[$index$9422]);
              if ((m$9431 === "all")) {
                (rval$9398 = (Math.pow(2, 31) - 1));
              } else {
                (t$9447 = m$9431);
                if ((!$11136(tracks$9229, t$9447))) {
                  (rval$9398 = (rval$9398 | Math.pow(2, _i$9228)));
                  (tracks$9229[t$9447] = (_i$9228++));
                } else {
                  (t$9461 = m$9431);
                  (rval$9398 = (rval$9398 | Math.pow(2, $11136(tracks$9229, t$9461))));
                }
              }
            }
          })()))), rval$9398));
        };
        $9353: for (; ($index$9376 < $length$9370); ($index$9376++)) {
          $__3();
        }
      })()))), acc$9358))), (((t0$9347 instanceof Array) && (((t1$9348 = t0$9347.length)), (t1$9348 === 2))) ? ((lt$9291 = t0$9347[0]), (rt$9292 = t0$9347[1])) : ___match_error((((acc$9480 = [])), (((temp$9486 = [ltracks$9287, rtracks$9289])), ((($length$9492 = temp$9486.length)), ((($index$9498 = 0)), (function() {
        var $__4 = function() {
          var $index$9544;
          var $length$9538;
          var temp$9532;
          var rval$9520;
          var tr$9515;
          var m$9507;
          (m$9507 = temp$9486[$index$9498]);
          (tr$9515 = m$9507);
          acc$9480.push((((rval$9520 = 0)), (((temp$9532 = tr$9515)), ((($length$9538 = temp$9532.length)), ((($index$9544 = 0)), (function() {
            $9521: for (; ($index$9544 < $length$9538); ($index$9544++)) {
              var t$9583;
              var t$9569;
              var m$9553;
              (m$9553 = temp$9532[$index$9544]);
              if ((m$9553 === "all")) {
                (rval$9520 = (Math.pow(2, 31) - 1));
              } else {
                (t$9569 = m$9553);
                if ((!$11136(tracks$9229, t$9569))) {
                  (rval$9520 = (rval$9520 | Math.pow(2, _i$9228)));
                  (tracks$9229[t$9569] = (_i$9228++));
                } else {
                  (t$9583 = m$9553);
                  (rval$9520 = (rval$9520 | Math.pow(2, $11136(tracks$9229, t$9583))));
                }
              }
            }
          })()))), rval$9520));
        };
        $9475: for (; ($index$9498 < $length$9492); ($index$9498++)) {
          $__4();
        }
      })()))), acc$9480), "/home/olivier/git/earl-grey/src/parse.eg", 3758, 4078))), [[lt$9291, lp$9288], [rt$9292, rp$9290]]));
    };
    $9241: for (; ($index$9264 < $length$9258); ($index$9264++)) {
      $__2();
    }
  })()))), acc$9246));
  return it$0$9217;
}));
(SimplePriority$8505.prototype["compare"] = (function(op1$9595, op2$9596) {
  var t0$9633;
  var t1$9634;
  var t2$9635;
  var t3$9636;
  var t0$9661;
  var t1$9662;
  var t2$9663;
  var t3$9664;
  var $9619$9695;
  var $9614$9689;
  var i1$9620;
  var i2$9621;
  var code1$9622;
  var ord1$9623;
  var code2$9624;
  var ord2$9625;
  var it$0$9600;
  var self$9601;
  (it$0$9600 = this);
  (self$9601 = this);
  (i1$9620 = it$0$9600.groups.get(op1$9595));
  (i2$9621 = it$0$9600.groups.get(op2$9596));
  (t0$9633 = $11136(it$0$9600.prio, i1$9620));
  if (((t0$9633 instanceof Array) && (((t1$9634 = t0$9633.length)), ((t1$9634 === 2) && (t0$9633[0], (((t2$9635 = t0$9633[1])), ((t2$9635 instanceof Array) && (((t3$9636 = t2$9635.length)), (t3$9636 === 2))))))))) {
    (code1$9622 = t2$9635[0]);
    (ord1$9623 = t2$9635[1]);
  } else {
    ___match_error($11136(it$0$9600.prio, i1$9620), "/home/olivier/git/earl-grey/src/parse.eg", 4205, 4215);
  }
  (t0$9661 = $11136(it$0$9600.prio, i2$9621));
  if (((t0$9661 instanceof Array) && (((t1$9662 = t0$9661.length)), ((t1$9662 === 2) && (((t2$9663 = t0$9661[0])), ((t2$9663 instanceof Array) && (((t3$9664 = t2$9663.length)), (t3$9664 === 2)))))))) {
    (code2$9624 = t2$9663[0]);
    (ord2$9625 = t2$9663[1]);
    t0$9661[1];
  } else {
    ___match_error($11136(it$0$9600.prio, i2$9621), "/home/olivier/git/earl-grey/src/parse.eg", 4242, 4252);
  }
  ($9614$9689 = null);
  $9614$9689;
  if (((code1$9622 & code2$9624) === 0)) {
    return NONE$8509;
  } else {
    if ((ord1$9623 > ord2$9625)) {
      return LEFT$8510;
    } else {
      if ((ord1$9623 < ord2$9625)) {
        return RIGHT$8511;
      } else {
        if ((ord1$9623 === ord2$9625)) {
          return BOTH$8512;
        } else {
          ___match_error($9614$9689);
        }
      }
    }
  }
}));
__amp____colon__(SimplePriority$8505, __amp____colon__(((accum$9717 = ({})), ((accum$9717["::name"] = "SimplePriority"), accum$9717)), ((accum$9721 = ({})), ((accum$9721["::egclass"] = true), accum$9721))));
SimplePriority$8505;
(MAX$8506 = (1 / 0));
(eg_order$8507 = (((eg_groups$9732 = OperatorGroups$8503(__amp____colon__(({
  "sh_ifx": [(function($9743$9746) {
    var t0$9762;
    var $9748$9757;
    var ph$9751;
    (ph$9751 = $9743$9746);
    ($9748$9757 = ph$9751);
    if ((($9748$9757 instanceof Array) && (((t0$9762 = $9748$9757.length)), ((t0$9762 === 3) && (($9748$9757[0] === "IFX") && ($9748$9757[1] === "short")))))) {
      $9748$9757[2];
      return true;
    } else {
      $9748$9757;
      return false;
    }
  })],
  "sh_pfx": [(function($9777$9780) {
    var t0$9796;
    var $9782$9791;
    var ph$9785;
    (ph$9785 = $9777$9780);
    ($9782$9791 = ph$9785);
    if ((($9782$9791 instanceof Array) && (((t0$9796 = $9782$9791.length)), ((t0$9796 === 3) && (($9782$9791[0] === "PFX") && ($9782$9791[1] === "short")))))) {
      $9782$9791[2];
      return true;
    } else {
      $9782$9791;
      return false;
    }
  })],
  "sh_sfx": [(function($9811$9814) {
    var t0$9830;
    var $9816$9825;
    var ph$9819;
    (ph$9819 = $9811$9814);
    ($9816$9825 = ph$9819);
    if ((($9816$9825 instanceof Array) && (((t0$9830 = $9816$9825.length)), ((t0$9830 === 3) && (($9816$9825[0] === "SFX") && ($9816$9825[1] === "short")))))) {
      $9816$9825[2];
      return true;
    } else {
      $9816$9825;
      return false;
    }
  })],
  "wi_ifx": [(function($9845$9848) {
    var t0$9864;
    var $9850$9859;
    var ph$9853;
    (ph$9853 = $9845$9848);
    ($9850$9859 = ph$9853);
    if ((($9850$9859 instanceof Array) && (((t0$9864 = $9850$9859.length)), ((t0$9864 === 3) && (($9850$9859[0] === "IFX") && ($9850$9859[1] === "wide")))))) {
      $9850$9859[2];
      return true;
    } else {
      $9850$9859;
      return false;
    }
  })],
  "wi_pfx": [(function($9879$9882) {
    var t0$9898;
    var $9884$9893;
    var ph$9887;
    (ph$9887 = $9879$9882);
    ($9884$9893 = ph$9887);
    if ((($9884$9893 instanceof Array) && (((t0$9898 = $9884$9893.length)), ((t0$9898 === 3) && (($9884$9893[0] === "PFX") && ($9884$9893[1] === "wide")))))) {
      $9884$9893[2];
      return true;
    } else {
      $9884$9893;
      return false;
    }
  })],
  "wi_sfx": [(function($9913$9916) {
    var t0$9932;
    var $9918$9927;
    var ph$9921;
    (ph$9921 = $9913$9916);
    ($9918$9927 = ph$9921);
    if ((($9918$9927 instanceof Array) && (((t0$9932 = $9918$9927.length)), ((t0$9932 === 3) && (($9918$9927[0] === "SFX") && ($9918$9927[1] === "wide")))))) {
      $9918$9927[2];
      return true;
    } else {
      $9918$9927;
      return false;
    }
  })],
  "comma": ["X_,_Y"],
  "obrack": ["(_Y", "[_Y", "{_Y"],
  "cbrack": ["X_)", "X_]", "X_}"]
}), __amp____colon__(((accum$9947 = ({})), ((accum$9947["withp"] = ["with Y"]), accum$9947)), __amp____colon__(((accum$9951 = ({})), ((accum$9951["with"] = ["X with Y"]), accum$9951)), __amp____colon__(({"lowprio": ["X each Y", "X each? Y", "X where Y", "X_!!_Y", "X_->_Y", "X_=>_Y", "X_=_Y", "X_:=_Y", "X_+=_Y", "X_-=_Y", "X_*=_Y", "X_/=_Y", "X_<<=_Y", "X_>>=_Y", "X_>>>=_Y", "X_++=_Y", "X_?=_Y", "X_or=_Y", "X_and=_Y", "X_each=_Y", "X_%_Y"]}), __amp____colon__(((accum$9955 = ({})), ((accum$9955["when"] = ["X_when_Y"]), accum$9955)), __amp____colon__(((accum$9959 = ({})), ((accum$9959["or"] = ["X_or_Y"]), accum$9959)), __amp____colon__(((accum$9963 = ({})), ((accum$9963["and"] = ["X_and_Y"]), accum$9963)), __amp____colon__(((accum$9967 = ({})), ((accum$9967["not"] = ["not_Y"]), accum$9967)), ({
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
})))))))))))), ((eg_prio$9733 = __amp____colon__(({
  "comma": [["all", 1], ["all", 1]],
  "obrack": [["all", MAX$8506], ["all", 1]],
  "cbrack": [["all", 1], ["all", MAX$8506]]
}), __amp____colon__(((accum$9979 = ({})), ((accum$9979["with"] = [["all", 1999], ["all", 10]]), accum$9979)), __amp____colon__(({"lowprio": [["all", 11], ["all", 10]]}), __amp____colon__(((accum$9983 = ({})), ((accum$9983["when"] = [["all", 100], ["all", 101]]), accum$9983)), __amp____colon__(((accum$9987 = ({})), ((accum$9987["or"] = [["all", 110], ["all", 111]]), accum$9987)), __amp____colon__(((accum$9991 = ({})), ((accum$9991["and"] = [["all", 120], ["all", 121]]), accum$9991)), __amp____colon__(((accum$9995 = ({})), ((accum$9995["not"] = [["all", MAX$8506], ["all", 131]]), accum$9995)), ({
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
  "pfx": [["all", MAX$8506], ["all", 3000]],
  "pp": [["all", MAX$8506], ["all", 5]],
  "when2": [["all", MAX$8506], ["all", 101]],
  "withp": [["all", MAX$8506], ["all", 10]],
  "pipe": [["pipe", 550], ["pipe", 551]],
  "sh_ifx": [["all", 1800], ["all", 1801]],
  "sh_pfx": [["all", MAX$8506], ["all", 1901]],
  "sh_sfx": [["all", 1900], ["all", MAX$8506]],
  "wi_ifx": [["customl", 900], ["customr", 901]],
  "wi_pfx": [["all", MAX$8506], ["all", 901]],
  "wi_sfx": [["all", 900], ["all", MAX$8506]]
})))))))))), SimplePriority$8505(eg_groups$9732, eg_prio$9733)));
(DONE$8508 = -1);
(NONE$8509 = 0);
(LEFT$8510 = 1);
(RIGHT$8511 = 2);
(BOTH$8512 = 3);
(oparse$8513 = (function(next$10019, order$10020, finalize$10021) {
  var between$10029;
  var right_op$10030;
  var stack$10031;
  var left_op$10032;
  var current$10033;
  (between$10029 = finalize$10021(next$10019()));
  (right_op$10030 = next$10019());
  (stack$10031 = []);
  (left_op$10032 = null);
  (current$10033 = null);
  $10034: while (true) {
    var v$10087;
    var other$10149;
    var bridge$10059$10072;
    var $10054$10067;
    var o$10061;
    (o$10061 = (((!left_op$10032) && (!right_op$10030)) ? DONE$8508 : ((((!left_op$10032) && RIGHT$8511) || ((!right_op$10030) && LEFT$8510)) || order$10020(left_op$10032, right_op$10030))));
    ($10054$10067 = o$10061);
    if (($10054$10067 === DONE$8508)) {
      return between$10029;
    } else {
      if (($10054$10067 === LEFT$8510)) {
        current$10033.push(between$10029);
        (between$10029 = finalize$10021(current$10033));
        (v$10087 = stack$10031.pop());
        (left_op$10032 = v$10087[0]);
        (current$10033 = v$10087[1]);
      } else {
        if (($10054$10067 === RIGHT$8511)) {
          stack$10031.push([left_op$10032, current$10033]);
          (left_op$10032 = right_op$10030);
          (current$10033 = [[right_op$10030], between$10029]);
          (between$10029 = finalize$10021(next$10019()));
          (right_op$10030 = next$10019());
        } else {
          (bridge$10059$10072 = $10054$10067);
          if (((bridge$10059$10072 === BOTH$8512) || (bridge$10059$10072 === NONE$8509))) {
            current$10033[0].push(right_op$10030);
            current$10033.push(between$10029);
            (left_op$10032 = right_op$10030);
            (between$10029 = finalize$10021(next$10019()));
            (right_op$10030 = next$10019());
            if ((o$10061 === NONE$8509)) {
              (current$10033["tainted"] = true);
            }
          } else {
            (other$10149 = $10054$10067);
            throw ErrorFactory(["should_never_happen"]).create("undefined priority", ({
              "left": left_op$10032,
              "right": right_op$10030
            }));
          }
        }
      }
    }
  }
}));
(finalize$8514 = (function($10155$10158) {
  var t0$10174;
  var $index$10285;
  var $length$10279;
  var temp$10273;
  var $index$10323;
  var $length$10317;
  var temp$10311;
  var $index$10389;
  var $length$10383;
  var temp$10377;
  var acc$10371;
  var other$10751;
  var args$10746;
  var f$10722;
  var orig_args$10723;
  var args$10724;
  var $10692$10705;
  var $10693$10706;
  var t0$10701;
  var t1$10702;
  var t2$10703;
  var $10686$10696;
  var inserted$10528;
  var result$10529;
  var t0$10763;
  var f$10790;
  var other$10871;
  var x$10860;
  var $10836$10847;
  var $10837$10848;
  var t0$10845;
  var $10832$10840;
  var result$10780;
  var f$10897;
  var oloc$11002;
  var abloc$11003;
  var oabloc$11004;
  var rval$11005;
  var a$10992;
  var b$10993;
  var $10245$10953;
  var $10246$10954;
  var $10247$10955;
  var $10248$10956;
  var t0$10946;
  var t1$10947;
  var t2$10948;
  var t3$10949;
  var t4$10950;
  var t5$10951;
  var $index$11052;
  var $length$11046;
  var temp$11040;
  var acc$11034;
  var op_strings$11025;
  var args$11026;
  var $10242$10942;
  var commas$10876;
  var commas$10755;
  var target$10488;
  var _b$10489;
  var body$10490;
  var f$10472;
  var body$10473;
  var f$10440;
  var arg$10441;
  var body$10442;
  var $10250$10431;
  var $10251$10432;
  var $10252$10433;
  var $10253$10434;
  var $10254$10435;
  var $10255$10436;
  var $10256$10437;
  var t0$10420;
  var t1$10421;
  var t2$10422;
  var t3$10423;
  var t4$10424;
  var t5$10425;
  var t6$10426;
  var t7$10427;
  var t8$10428;
  var bridge$10238$10429;
  var $10233$10415;
  var sumloc$10257;
  var orig_ops$10258;
  var op$10259;
  var other$11076;
  var ops$10224;
  var args$10225;
  var value$10215;
  var value$10210;
  var value$10205;
  var value$10195;
  var $10168$10190;
  var $10169$10191;
  var $10170$10192;
  var t0$10188;
  var $10160$10183;
  var ph$10171;
  var token$10172;
  (t0$10174 = $10155$10158);
  (token$10172 = t0$10174);
  (ph$10171 = t0$10174);
  ($10160$10183 = ph$10171);
  if ((($10168$10190 = ($10160$10183 instanceof Array)) && (((t0$10188 = $10160$10183.length)), (($10170$10192 = (t0$10188 === 2)) && ($10160$10183[0] === "ID"))))) {
    (value$10195 = $10160$10183[1]);
    return __lt____lt____colon__$8498(["symbol", value$10195], token$10172);
  } else {
    if (($10170$10192 && ($10160$10183[0] === "ILLEGAL"))) {
      (value$10205 = $10160$10183[1]);
      return __lt____lt____colon__$8498(["char", value$10205], token$10172);
    } else {
      if (($10170$10192 && ($10160$10183[0] === "NUM"))) {
        (value$10210 = $10160$10183[1]);
        return __lt____lt____colon__$8498(["value", value$10210], token$10172);
      } else {
        if (($10170$10192 && ($10160$10183[0] === "STR"))) {
          (value$10215 = $10160$10183[1]);
          return __lt____lt____colon__$8498(["value", value$10215], token$10172);
        } else {
          if (($10168$10190 && ((t0$10188 === 1) && ($10160$10183[0] === "VOID")))) {
            return __lt____lt____colon__$8498(["void"], token$10172);
          } else {
            if (($10168$10190 && (t0$10188 >= 1))) {
              (ops$10224 = $10160$10183[0]);
              (args$10225 = Array.prototype.slice.call($10160$10183, 1));
              (sumloc$10257 = ops$10224[0].location);
              (temp$10273 = ops$10224.slice(1));
              ($length$10279 = temp$10273.length);
              ($index$10285 = 0);
              $10260: for (; ($index$10285 < $length$10279); ($index$10285++)) {
                var op$10302;
                var m$10294;
                (m$10294 = temp$10273[$index$10285]);
                (op$10302 = m$10294);
                (sumloc$10257 = __plus____plus____colon__$8499(sumloc$10257, op$10302));
              }
              (temp$10311 = args$10225);
              ($length$10317 = temp$10311.length);
              ($index$10323 = 0);
              $10263: for (; ($index$10323 < $length$10317); ($index$10323++)) {
                var arg$10355;
                var t0$10337;
                var t1$10338;
                var m$10332;
                (m$10332 = temp$10311[$index$10323]);
                (t0$10337 = m$10332);
                if (((t0$10337 instanceof Array) && (((t1$10338 = t0$10337.length)), ((t1$10338 === 1) && (t0$10337[0] === "void"))))) {
                  undefined;
                } else {
                  (arg$10355 = m$10332);
                  (sumloc$10257 = __plus____plus____colon__$8499(sumloc$10257, arg$10355));
                }
              }
              (orig_ops$10258 = ops$10224);
              (ops$10224 = (((acc$10371 = [])), (((temp$10377 = ops$10224)), ((($length$10383 = temp$10377.length)), ((($index$10389 = 0)), (function() {
                $10366: for (; ($index$10389 < $length$10383); ($index$10389++)) {
                  var o$10406;
                  var m$10398;
                  (m$10398 = temp$10377[$index$10389]);
                  (o$10406 = m$10398);
                  acc$10371.push(o$10406[2]);
                }
              })()))), acc$10371));
              (op$10259 = ops$10224[0]);
              ($10233$10415 = [ops$10224, args$10225]);
              if ((($10250$10431 = ($10233$10415 instanceof Array)) && (((t0$10420 = $10233$10415.length)), (($10252$10433 = (t0$10420 === 2)) && (((t1$10421 = $10233$10415[0])), (($10254$10435 = (t1$10421 instanceof Array)) && (((t2$10422 = t1$10421.length)), ((t2$10422 === 2) && ((t1$10421[0] === "WHITE") && ((t1$10421[1] === ":") && (((t3$10423 = $10233$10415[1])), ((t3$10423 instanceof Array) && (((t4$10424 = t3$10423.length)), (t4$10424 === 3)))))))))))))) {
                (f$10440 = t3$10423[0]);
                (arg$10441 = t3$10423[1]);
                (body$10442 = t3$10423[2]);
                return __lt____lt____colon__$8498(["send", f$10440, __lt____lt____colon__$8498(["data", arg$10441, body$10442], __plus____plus____colon__$8499(arg$10441, body$10442))], sumloc$10257);
              } else {
                if (($10254$10435 && (($10256$10437 = (t2$10422 === 1)) && ((t1$10421[0] === ":") && (((t3$10423 = $10233$10415[1])), ((t3$10423 instanceof Array) && (((t4$10424 = t3$10423.length)), (t4$10424 === 2)))))))) {
                  (f$10472 = t3$10423[0]);
                  (body$10473 = t3$10423[1]);
                  return __lt____lt____colon__$8498(["send", f$10472, __lt____lt____colon__$8498(["data", body$10473], body$10473)], sumloc$10257);
                } else {
                  if (($10256$10437 && ((t1$10421[0] === "with") && (((t3$10423 = $10233$10415[1])), ((t3$10423 instanceof Array) && (((t4$10424 = t3$10423.length)), ((t4$10424 === 2) && ((target$10488 = t3$10423[0]), (((t5$10425 = t3$10423[1])), ((_b$10489 = t5$10425), (((t6$10426 = getProjector(Body$8501)(t5$10425))), (t6$10426[0] && (((t7$10427 = t6$10426[1])), (((t8$10428 = t7$10427.length)), (t8$10428 >= 0))))))))))))))) {
                    (body$10490 = Array.prototype.slice.call(t7$10427, 0));
                    (inserted$10528 = false);
                    (result$10529 = transform$8502(target$10488, (function($10536$10539) {
                      var t0$10548;
                      var $index$10644;
                      var $length$10638;
                      var temp$10632;
                      var tr$10617;
                      var res$10618;
                      var args$10606;
                      var x$10582;
                      var f$10583;
                      var a$10584;
                      var b$10585;
                      var t0$10562;
                      var t1$10563;
                      var t2$10564;
                      var $10541$10557;
                      var ph$10545;
                      var expr$10546;
                      (t0$10548 = $10536$10539);
                      (expr$10546 = t0$10548);
                      (ph$10545 = t0$10548);
                      ($10541$10557 = ph$10545);
                      if ((($10541$10557 instanceof Array) && (((t0$10562 = $10541$10557.length)), ((t0$10562 === 2) && (($10541$10557[0] === "symbol") && ($10541$10557[1] === "...")))))) {
                        (inserted$10528 = true);
                        return __lt____lt____colon__$8498(["multi"].concat(body$10490), _b$10489);
                      } else {
                        (x$10582 = $10541$10557);
                        if ((x$10582.fromop && (($10541$10557 instanceof Array) && (((t0$10562 = $10541$10557.length)), ((t0$10562 === 3) && (($10541$10557[0] === "send") && ((f$10583 = $10541$10557[1]), (((t1$10563 = $10541$10557[2])), ((t1$10563 instanceof Array) && (((t2$10564 = t1$10563.length)), ((t2$10564 === 3) && (t1$10563[0] === "data")))))))))))) {
                          (a$10584 = t1$10563[1]);
                          (b$10585 = t1$10563[2]);
                          return ["send", this(f$10583), __lt____lt____colon__$8498(["data", this(a$10584), this(b$10585)], __plus____plus____colon__$8499(a$10584, b$10585))];
                        } else {
                          if ((($10541$10557 instanceof Array) && (((t0$10562 = $10541$10557.length)), ((t0$10562 >= 1) && ($10541$10557[0] === "data"))))) {
                            (args$10606 = Array.prototype.slice.call($10541$10557, 1));
                            (tr$10617 = this);
                            (res$10618 = ["data"]);
                            (temp$10632 = args$10606);
                            ($length$10638 = temp$10632.length);
                            ($index$10644 = 0);
                            $10619: for (; ($index$10644 < $length$10638); ($index$10644++)) {
                              var other$10681;
                              var t0$10658;
                              var t1$10659;
                              var m$10653;
                              (m$10653 = temp$10632[$index$10644]);
                              (t0$10658 = m$10653);
                              if (((t0$10658 instanceof Array) && (((t1$10659 = t0$10658.length)), ((t1$10659 === 2) && ((t0$10658[0] === "symbol") && (t0$10658[1] === "...")))))) {
                                (inserted$10528 = true);
                                (res$10618 = res$10618.concat(body$10490));
                              } else {
                                (other$10681 = m$10653);
                                res$10618.push(__lt____lt____colon__$8498(tr$10617(other$10681), other$10681));
                              }
                            }
                            return __lt____lt____colon__$8498(res$10618, expr$10546);
                          } else {
                            ___match_error($10541$10557);
                          }
                        }
                      }
                    })));
                    if ((!inserted$10528)) {
                      ($10686$10696 = target$10488);
                      if ((($10686$10696 instanceof Array) && (((t0$10701 = $10686$10696.length)), ((t0$10701 === 1) && ($10686$10696[0] === "void"))))) {
                        return __lt____lt____colon__$8498(["data"].concat(body$10490), sumloc$10257);
                      } else {
                        $10686$10696;
                        if (target$10488.fromop) {
                          return __lt____lt____colon__$8498(["send", target$10488, __lt____lt____colon__$8498(["data"].concat(body$10490), _b$10489)], sumloc$10257);
                        } else {
                          if ((($10692$10705 = ($10686$10696 instanceof Array)) && (((t0$10701 = $10686$10696.length)), ((t0$10701 === 3) && (($10686$10696[0] === "send") && ((f$10722 = $10686$10696[1]), (((t1$10702 = $10686$10696[2])), ((orig_args$10723 = t1$10702), ((t1$10702 instanceof Array) && (((t2$10703 = t1$10702.length)), ((t2$10703 >= 1) && (t1$10702[0] === "data")))))))))))) {
                            (args$10724 = Array.prototype.slice.call(t1$10702, 1));
                            return __lt____lt____colon__$8498(["send", f$10722, __lt____lt____colon__$8498(["data"].concat(args$10724).concat(body$10490), __plus____plus____colon__$8499(orig_args$10723, _b$10489))], sumloc$10257);
                          } else {
                            if (($10692$10705 && ((t0$10701 >= 1) && ($10686$10696[0] === "data")))) {
                              (args$10746 = Array.prototype.slice.call($10686$10696, 1));
                              return __lt____lt____colon__$8498(target$10488.concat(body$10490), sumloc$10257);
                            } else {
                              (other$10751 = $10686$10696);
                              return __lt____lt____colon__$8498(["send", target$10488, __lt____lt____colon__$8498(["data"].concat(body$10490), _b$10489)], sumloc$10257);
                            }
                          }
                        }
                      }
                    } else {
                      return __lt____lt____colon__$8498(result$10529, sumloc$10257);
                    }
                  } else {
                    if (($10252$10433 && (((bridge$10238$10429 = $10233$10415[0])), ((((bridge$10238$10429 instanceof Array) && (((t0$10763 = bridge$10238$10429.length)), ((t0$10763 >= 2) && ((bridge$10238$10429[0] === "[") && ((commas$10755 = Array.prototype.slice.call(bridge$10238$10429, 1, -1)), (bridge$10238$10429[(t0$10763 - 1)] === "]")))))) || ((commas$10755 = bridge$10238$10429), true)) && ($10233$10415[1], commas$10755.every((function(x$10774) {
                      return equal(x$10774, ",");
                    }))))))) {
                      if ((op$10259 === "[")) {
                        (args$10225 = args$10225.slice(1, -1));
                      }
                      (args$10225 = (((f$10790 = (function($10794$10797) {
                        var other$10826;
                        var t0$10813;
                        var $10799$10808;
                        var ph$10802;
                        (ph$10802 = $10794$10797);
                        ($10799$10808 = ph$10802);
                        if ((($10799$10808 instanceof Array) && (((t0$10813 = $10799$10808.length)), ((t0$10813 === 1) && ($10799$10808[0] === "void"))))) {
                          return false;
                        } else {
                          (other$10826 = $10799$10808);
                          return true;
                        }
                      }))), args$10225.filter(f$10790)));
                      (result$10780 = ((($10832$10840 = args$10225)), ((($10836$10847 = ($10832$10840 instanceof Array)) && (((t0$10845 = $10832$10840.length)), (t0$10845 === 0))) ? ["multi"] : (($10836$10847 && (t0$10845 === 1)) ? ((x$10860 = $10832$10840[0]), ((((!isNaN(sumloc$10257.start)) && (!isNaN(sumloc$10257.end))) ? ((x$10860["location"] = sumloc$10257)) : undefined), x$10860)) : ((other$10871 = $10832$10840), ["multi"].concat(args$10225))))));
                      return __lt____lt____colon__$8498(result$10780, sumloc$10257);
                    } else {
                      if (($10252$10433 && (((t1$10421 = $10233$10415[0])), (($10254$10435 = (t1$10421 instanceof Array)) && (((t2$10422 = t1$10421.length)), ((t2$10422 >= 2) && ((t1$10421[0] === "{") && ((commas$10876 = Array.prototype.slice.call(t1$10421, 1, -1)), ((t1$10421[(t2$10422 - 1)] === "}") && ($10233$10415[1], commas$10876.every((function(x$10892) {
                        return equal(x$10892, ",");
                      })))))))))))) {
                        (f$10897 = (function($10901$10904) {
                          var other$10933;
                          var t0$10920;
                          var $10906$10915;
                          var ph$10909;
                          (ph$10909 = $10901$10904);
                          ($10906$10915 = ph$10909);
                          if ((($10906$10915 instanceof Array) && (((t0$10920 = $10906$10915.length)), ((t0$10920 === 1) && ($10906$10915[0] === "void"))))) {
                            return false;
                          } else {
                            (other$10933 = $10906$10915);
                            return true;
                          }
                        }));
                        return __lt____lt____colon__$8498(["data"].concat(args$10225.slice(1, -1).filter(f$10897)), sumloc$10257);
                      } else {
                        if (($10254$10435 && (($10256$10437 = (t2$10422 === 1)) && (t1$10421[0] === "WHITE")))) {
                          $10233$10415[1];
                          return __lt____lt____colon__$8498(["send"].concat(args$10225), sumloc$10257);
                        } else {
                          if ($10256$10437) {
                            t1$10421[0];
                            ($10242$10942 = $10233$10415[1]);
                            (t0$10946 = $10242$10942);
                            if ((($10246$10954 = (t0$10946 instanceof Array)) && (((t1$10947 = t0$10946.length)), (($10248$10956 = (t1$10947 === 2)) && (((t2$10948 = t0$10946[0])), ((t2$10948 instanceof Array) && (((t3$10949 = t2$10948.length)), ((t3$10949 === 1) && ((t2$10948[0] === "void") && (((t4$10950 = t0$10946[1])), ((t4$10950 instanceof Array) && (((t5$10951 = t4$10950.length)), ((t5$10951 === 1) && (t4$10950[0] === "void")))))))))))))) {
                              return __lt____lt____colon__$8498(["symbol", op$10259], orig_ops$10258[0]);
                            } else {
                              if ($10248$10956) {
                                (a$10992 = t0$10946[0]);
                                (b$10993 = t0$10946[1]);
                                (oloc$11002 = orig_ops$10258[0].location);
                                (abloc$11003 = __plus____plus____colon__$8499(a$10992, b$10993));
                                (oabloc$11004 = __plus____plus____colon__$8499(orig_ops$10258[0], abloc$11003));
                                (rval$11005 = __lt____lt____colon__$8498(["send", __lt____lt____colon__$8498(["symbol", op$10259], oloc$11002), __lt____lt____colon__$8498(["data", a$10992, b$10993], abloc$11003)], __plus____plus____colon__$8499(oloc$11002, abloc$11003)));
                                (rval$11005["fromop"] = true);
                                return rval$11005;
                              } else {
                                ___match_error($10242$10942, "/home/olivier/git/earl-grey/src/parse.eg", 17814, 17819);
                              }
                            }
                          } else {
                            if ($10252$10433) {
                              (op_strings$11025 = $10233$10415[0]);
                              (args$11026 = $10233$10415[1]);
                              return __lt____lt____colon__$8498(["mismix", (((acc$11034 = [])), (((temp$11040 = orig_ops$10258)), ((($length$11046 = temp$11040.length)), ((($index$11052 = 0)), (function() {
                                $11029: for (; ($index$11052 < $length$11046); ($index$11052++)) {
                                  var op$11069;
                                  var m$11061;
                                  (m$11061 = temp$11040[$index$11052]);
                                  (op$11069 = m$11061);
                                  acc$11034.push(__lt____lt____colon__$8498(["symbol", op$11069[2]], op$11069));
                                }
                              })()))), acc$11034)].concat(args$11026), sumloc$10257);
                            } else {
                              ___match_error($10233$10415);
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            } else {
              (other$11076 = $10160$10183);
              throw ErrorFactory(["should_never_happen"]).create("unknown node (B)", ({"node": token$10172}));
            }
          }
        }
      }
    }
  }
}));
(parse$8515 = (function(tokens$11083) {
  var next$11087;
  (next$11087 = (function() {
    return tokens$11083.shift();
  }));
  return oparse$8513(next$11087, eg_order$8507.compare.bind(eg_order$8507), finalize$8514);
}));
(exports["OperatorGroups"] = OperatorGroups$8503);
(exports["SimplePriority"] = SimplePriority$8505);
(exports["parse"] = parse$8515);
(exports["oparse"] = oparse$8513);
(exports["finalize"] = finalize$8514);
(exports["DONE"] = DONE$8508);
(exports["NONE"] = NONE$8509);
(exports["LEFT"] = LEFT$8510);
(exports["RIGHT"] = RIGHT$8511);
(exports["BOTH"] = BOTH$8512);
//# sourceURL=<compile-source>
