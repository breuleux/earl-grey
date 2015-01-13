"use strict";
require("earlgrey-runtime");
var $15100 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var accum$12128;
var accum$12132;
var accum$12942;
var accum$12946;
var $11139$11173;
var __lt____gt__$11174;
var $11140$11175;
var __lt____lt____colon__$11176;
var util$11177;
var GenSym$11178;
var gensym$11179;
var classify$11180;
var classify_contiguous$11181;
var identity$11182;
var Body$11183;
var $11142$11184;
var checker_db$11185;
var PatternParser$11186;
var PatternProcessor$11187;
var assemble_conditions$11188;
var assemble_pattern$11189;
var inject_below_uses$11190;
var parse_pattern$11191;
var checkall$11192;
var same_block$11193;
var parse_clauses$11194;
var opt_clauses$11195;
var weave_clauses$11196;
($11139$11173 = require("./pp"));
(__lt____gt__$11174 = $11139$11173["<>"]);
($11140$11175 = require("./location"));
(__lt____lt____colon__$11176 = $11140$11175["<<:"]);
(util$11177 = require("./util"));
(GenSym$11178 = util$11177.GenSym);
(gensym$11179 = util$11177.gensym);
(classify$11180 = util$11177.classify);
(classify_contiguous$11181 = util$11177.classify_contiguous);
(identity$11182 = util$11177.identity);
(Body$11183 = util$11177.Body);
($11142$11184 = require("./expand"));
(checker_db$11185 = $11142$11184.checker_db);
(PatternParser$11186 = (function(scope$11240, pattern$11241, opt$11242) {
  var tags$11258;
  var it$0$11245;
  (it$0$11245 = ((!getChecker(PatternParser$11186)(this)) ? Object.create(PatternParser$11186.prototype) : this));
  (it$0$11245["opt"] = opt$11242);
  (it$0$11245["arguments"] = []);
  (it$0$11245["vars"] = []);
  (it$0$11245["specials"] = ({}));
  (tags$11258 = clone((opt$11242.tags || ({}))));
  (tags$11258["group_id"] = (tags$11258.group_id || gensym$11179("group")));
  (it$0$11245["pattern"] = it$0$11245.expand(scope$11240, pattern$11241, tags$11258, true, it$0$11245.opt.indexable));
  return it$0$11245;
}));
(PatternParser$11186.prototype["parse_specs"] = (function(scope$11282, specs$11283, tags$11284) {
  var $index$11345;
  var $length$11339;
  var temp$11333;
  var acc$11327;
  var rest$11302;
  var has_defaults$11303;
  var rval$11304;
  var it$0$11288;
  var self$11289;
  (it$0$11288 = this);
  (self$11289 = this);
  (rest$11302 = undefined);
  (has_defaults$11303 = false);
  (rval$11304 = classify$11180("fw", "bw", "keys", "defaults", (((acc$11327 = [])), (((temp$11333 = scope$11282.step_all(["pattern"], specs$11283))), ((($length$11339 = temp$11333.length)), ((($index$11345 = 0)), (function() {
    $11313: for (; ($index$11345 < $length$11339); ($index$11345++)) {
      var v$11419;
      var v$11413;
      var variable$11401;
      var value$11402;
      var key$11394;
      var subp$11395;
      var key$11388;
      var variable$11368;
      var $11321$11362;
      var $11322$11363;
      var $11323$11364;
      var $11324$11365;
      var t0$11359;
      var t1$11360;
      var m$11354;
      (m$11354 = temp$11333[$index$11345]);
      (t0$11359 = m$11354);
      if ((($11322$11363 = (t0$11359 instanceof Array)) && (((t1$11360 = t0$11359.length)), (($11324$11365 = (t1$11360 === 2)) && (t0$11359[0] === "dynsplice"))))) {
        (variable$11368 = t0$11359[1]);
        acc$11327.push((((rest$11302 = it$0$11288.expand(scope$11282, variable$11368, tags$11284))), ["ignore"]));
      } else {
        if (($11324$11365 && (t0$11359[0] === "assoc"))) {
          (key$11388 = t0$11359[1]);
          acc$11327.push(["keys", [key$11388, it$0$11288.expand(scope$11282, key$11388, tags$11284)]]);
        } else {
          if (($11322$11363 && (($11324$11365 = (t1$11360 === 3)) && (t0$11359[0] === "assoc")))) {
            (key$11394 = t0$11359[1]);
            (subp$11395 = t0$11359[2]);
            acc$11327.push(["keys", [key$11394, it$0$11288.expand(scope$11282, subp$11395, tags$11284)]]);
          } else {
            if (($11324$11365 && (t0$11359[0] === "default"))) {
              (variable$11401 = t0$11359[1]);
              (value$11402 = t0$11359[2]);
              acc$11327.push((((has_defaults$11303 = true)), (rest$11302 ? (function() {
                throw ErrorFactory(["syntax", "pattern"]).create("No default arguments after rest arg.");
              })() : ["defaults", [it$0$11288.expand(scope$11282, variable$11401, tags$11284), value$11402]])));
            } else {
              (v$11413 = m$11354);
              if (((rest$11302 === undefined) && (!has_defaults$11303))) {
                acc$11327.push(["fw", it$0$11288.expand(scope$11282, v$11413, tags$11284)]);
              } else {
                (v$11419 = m$11354);
                acc$11327.push(["bw", it$0$11288.expand(scope$11282, v$11419, tags$11284)]);
              }
            }
          }
        }
      }
    }
  })()))), acc$11327)));
  (rval$11304["rest"] = rest$11302);
  return rval$11304;
}));
(PatternParser$11186.prototype["expand"] = (function() {
  var x$11519;
  var x$11529;
  var x$11558;
  var x$11564;
  var variable$11571;
  var variable$11588;
  var x$11629;
  var msg$11637;
  var msg$11653;
  var $index$11695;
  var $length$11689;
  var temp$11683;
  var acc$11677;
  var $index$11828;
  var $length$11822;
  var temp$11816;
  var acc$11810;
  var $index$11864;
  var $length$11858;
  var temp$11852;
  var t0$11939;
  var t1$11940;
  var t2$11941;
  var $index$11987;
  var $length$11981;
  var temp$11975;
  var acc$11969;
  var patts$11961;
  var canon$11725;
  var normalize$11726;
  var pps$11727;
  var vars$11728;
  var patt$12062;
  var msg$12108;
  var other$12104;
  var keys$12068;
  var fw$12041;
  var bw$12042;
  var defaults$12043;
  var rest$12044;
  var $12019$12038;
  var t0$12031;
  var t1$12032;
  var t2$12033;
  var t3$12034;
  var t4$12035;
  var t5$12036;
  var $12015$12026;
  var specs$12020;
  var other$12120;
  var mode$12114;
  var subp$12115;
  var args$12010;
  var xs$11717;
  var xs$11669;
  var x$11659;
  var f$11643;
  var arg$11644;
  var f$11618;
  var arguments$11619;
  var checker$11612;
  var subp$11613;
  var projector$11605;
  var subp$11606;
  var unconditional$11607;
  var condition$11599;
  var subp$11600;
  var v$11594;
  var v$11577;
  var type$11536;
  var $11495$11510;
  var $11496$11511;
  var $11497$11512;
  var $11498$11513;
  var t0$11506;
  var bridge$11480$11507;
  var t1$11508;
  var $11475$11501;
  var expr$11468;
  var rval$11469;
  var scope$11454;
  var pattern$11455;
  var tags$11456;
  var toplevel$11457;
  var checked$11458;
  var t0$11450;
  var $11433$11445;
  var it$0$11435;
  var self$11436;
  (it$0$11435 = this);
  (self$11436 = this);
  ($11433$11445 = arguments);
  (t0$11450 = $11433$11445.length);
  if (((t0$11450 >= 3) && (t0$11450 <= 5))) {
    (scope$11454 = $11433$11445[0]);
    (pattern$11455 = $11433$11445[1]);
    (tags$11456 = $11433$11445[2]);
    (toplevel$11457 = ((3 >= t0$11450) ? false : $11433$11445[3]));
    (checked$11458 = ((4 >= t0$11450) ? false : $11433$11445[4]));
    (expr$11468 = scope$11454.step(["pattern"], pattern$11455));
    (rval$11469 = ((($11475$11501 = expr$11468)), ((((x$11519 = $11475$11501)), ((x$11519 instanceof Array) && (x$11519[0] === "void"))) ? ["check", checker_db$11185.null, ["ignore"]] : ((((x$11529 = $11475$11501)), ((x$11529 instanceof Array) && (x$11529[0] === "ignore"))) ? expr$11468 : ((($11475$11501 instanceof Array) && (((t0$11506 = $11475$11501.length)), ((t0$11506 === 2) && ($11475$11501[0] === "special")))) ? ((type$11536 = $11475$11501[1]), (((it$0$11435.specials[type$11536] = true)), expr$11468)) : (((bridge$11480$11507 = $11475$11501)), (((((x$11558 = bridge$11480$11507)), ((x$11558 instanceof Array) && (x$11558[0] === "symbol"))) || (((x$11564 = bridge$11480$11507)), ((x$11564 instanceof Array) && (x$11564[0] === "variable")))) ? (((variable$11571 = __amp__(expr$11468, tags$11456))), it$0$11435.vars.push(variable$11571), ["assign", variable$11571]) : ((($11495$11510 = ($11475$11501 instanceof Array)) && (((t0$11506 = $11475$11501.length)), (($11497$11512 = (t0$11506 === 2)) && (($11498$11513 = ($11475$11501[0] === "value")) && ((v$11577 = $11475$11501[1]), it$0$11435.opt.strings_as_variables))))) ? (((variable$11588 = __lt____lt____colon__$11176(__amp__(["symbol", v$11577], tags$11456), expr$11468))), it$0$11435.vars.push(variable$11588), ["assign", variable$11588]) : ($11498$11513 ? ((v$11594 = $11475$11501[1]), ["check", checker_db$11185(v$11594), ["ignore"]]) : (($11495$11510 && ((t0$11506 === 3) && ($11475$11501[0] === "test"))) ? ((condition$11599 = $11475$11501[1]), (subp$11600 = $11475$11501[2]), ["test", condition$11599, it$0$11435.expand(scope$11454, subp$11600, tags$11456, toplevel$11457, false)]) : (($11495$11510 && (((t0$11506 >= 3) && (t0$11506 <= 4)) && ($11475$11501[0] === "project"))) ? ((projector$11605 = $11475$11501[1]), (subp$11606 = $11475$11501[2]), (unconditional$11607 = ((3 >= t0$11506) ? false : $11475$11501[3])), ["project", projector$11605, it$0$11435.expand(scope$11454, subp$11606, tags$11456, toplevel$11457, true), unconditional$11607]) : (($11495$11510 && (($11497$11512 = (t0$11506 === 3)) && ($11475$11501[0] === "check"))) ? ((checker$11612 = $11475$11501[1]), (subp$11613 = $11475$11501[2]), ["check", checker$11612, it$0$11435.expand(scope$11454, subp$11613, tags$11456, toplevel$11457, true)]) : (($11497$11512 && (($11498$11513 = ($11475$11501[0] === "send")) && ((f$11618 = $11475$11501[1]), (((t1$11508 = $11475$11501[2])), (((x$11629 = t1$11508)), ((x$11629 instanceof Array) && (x$11629[0] === "data"))))))) ? ((arguments$11619 = t1$11508), (toplevel$11457 ? (it$0$11435.arguments.unshift(arguments$11619), it$0$11435.expand(scope$11454, f$11618, tags$11456, true, false)) : (((msg$11637 = "Function arguments can only be declared as a top level pattern.")), (function() {
      throw ErrorFactory(["syntax", "pattern"]).create(msg$11637, ({
        "node": expr$11468,
        "arg": arguments$11619
      }));
    })()))) : ($11498$11513 ? ((f$11643 = $11475$11501[1]), (arg$11644 = $11475$11501[2]), ["assign", expr$11468]) : ($11475$11501, ((!it$0$11435.opt.allow_nested) ? (((msg$11653 = "Nested patterns are not allowed here.")), (function() {
      throw ErrorFactory(["syntax", "pattern"]).create(msg$11653, ({"node": expr$11468}));
    })()) : ((($11495$11510 = ($11475$11501 instanceof Array)) && (((t0$11506 = $11475$11501.length)), ((t0$11506 === 2) && ($11475$11501[0] === "neg")))) ? ((x$11659 = $11475$11501[1]), ["neg", it$0$11435.expand(scope$11454, x$11659, tags$11456)]) : (($11495$11510 && (($11497$11512 = (t0$11506 >= 1)) && ($11475$11501[0] === "all"))) ? ((xs$11669 = Array.prototype.slice.call($11475$11501, 1)), ["all"].concat((((acc$11677 = [])), (((temp$11683 = xs$11669)), ((($length$11689 = temp$11683.length)), ((($index$11695 = 0)), (function() {
      $11672: for (; ($index$11695 < $length$11689); ($index$11695++)) {
        var x$11712;
        var m$11704;
        (m$11704 = temp$11683[$index$11695]);
        (x$11712 = m$11704);
        acc$11677.push(it$0$11435.expand(scope$11454, x$11712, tags$11456));
      }
    })()))), acc$11677))) : (($11497$11512 && ($11475$11501[0] === "any")) ? ((xs$11717 = Array.prototype.slice.call($11475$11501, 1)), (((canon$11725 = (function(all$11736) {
      return all$11736.sort().join(",");
    }))), ((normalize$11726 = (function(vars$11743) {
      var $index$11768;
      var $length$11762;
      var temp$11756;
      var acc$11750;
      return canon$11725((((acc$11750 = [])), (((temp$11756 = vars$11743)), ((($length$11762 = temp$11756.length)), ((($index$11768 = 0)), (function() {
        $11745: for (; ($index$11768 < $length$11762); ($index$11768++)) {
          var v$11787;
          var t0$11782;
          var t1$11783;
          var m$11777;
          (m$11777 = temp$11756[$index$11768]);
          (t0$11782 = m$11777);
          if (((t0$11782 instanceof Array) && (((t1$11783 = t0$11782.length)), ((t1$11783 === 2) && (t0$11782[0] === "symbol"))))) {
            (v$11787 = t0$11782[1]);
            acc$11750.push(v$11787);
          } else {
            ___match_error(m$11777, "/home/olivier/git/earl-grey/src/pattern.eg", 3957, 3995);
          }
        }
      })()))), acc$11750));
    }))), ((pps$11727 = (((acc$11810 = [])), (((temp$11816 = xs$11717)), ((($length$11822 = temp$11816.length)), ((($index$11828 = 0)), (function() {
      $11805: for (; ($index$11828 < $length$11822); ($index$11828++)) {
        var x$11845;
        var m$11837;
        (m$11837 = temp$11816[$index$11828]);
        (x$11845 = m$11837);
        acc$11810.push(PatternParser$11186(scope$11454, x$11845, __amp__(it$0$11435.opt, ({"tags": tags$11456}))));
      }
    })()))), acc$11810))), (((temp$11852 = neighbours(pps$11727))), ((($length$11858 = temp$11852.length)), ((($index$11864 = 0)), (function() {
      $11729: for (; ($index$11864 < $length$11858); ($index$11864++)) {
        var $index$11915;
        var $length$11909;
        var temp$11903;
        var pp1$11883;
        var pp2$11884;
        var t0$11878;
        var t1$11879;
        var m$11873;
        (m$11873 = temp$11852[$index$11864]);
        (t0$11878 = m$11873);
        if (((t0$11878 instanceof Array) && (((t1$11879 = t0$11878.length)), (t1$11879 === 2)))) {
          (pp1$11883 = t0$11878[0]);
          (pp2$11884 = t0$11878[1]);
          (temp$11903 = pps$11727);
          ($length$11909 = temp$11903.length);
          ($index$11915 = 0);
          $11897: for (; ($index$11915 < $length$11909); ($index$11915++)) {
            var pp$11932;
            var m$11924;
            (m$11924 = temp$11903[$index$11915]);
            (pp$11932 = m$11924);
            normalize$11726(pp$11932.vars);
          }
          if ((normalize$11726(pp1$11883.vars) !== normalize$11726(pp2$11884.vars))) {
            throw ErrorFactory(["syntax", "pattern"]).create("Both branches of 'or' must contain the same variables", ({
              "vars1": __lt____lt____colon__$11176(pp1$11883.vars.sort(), pp1$11883.pattern),
              "vars2": __lt____lt____colon__$11176(pp2$11884.vars.sort(), pp2$11884.pattern)
            }));
          }
          if ((canon$11725(keys(pp1$11883.specials)) !== canon$11725(keys(pp2$11884.specials)))) {
            throw ErrorFactory(["syntax", "pattern"]).create("Both branches of 'or' must contain the same special tokens", ({
              "special1": __lt____lt____colon__$11176(keys(pp1$11883.specials).sort(), pp1$11883.pattern),
              "special2": __lt____lt____colon__$11176(keys(pp2$11884.specials).sort(), pp2$11884.pattern)
            }));
          }
        } else {
          ___match_error(m$11873, "/home/olivier/git/earl-grey/src/pattern.eg", 4087, 4884);
        }
      }
    })()))), (((t0$11939 = pps$11727)), (((t0$11939 instanceof Array) && (((t1$11940 = t0$11939.length)), ((t1$11940 >= 1) && (((t2$11941 = t0$11939[0])), ___hasprop(t2$11941, "vars"))))) ? ((vars$11728 = t2$11941.vars), Array.prototype.slice.call(t0$11939, 1)) : ___match_error(pps$11727, "/home/olivier/git/earl-grey/src/pattern.eg", 4901, 4904))), (it$0$11435["vars"] = it$0$11435.vars.concat(vars$11728)), (((patts$11961 = (((acc$11969 = [])), (((temp$11975 = pps$11727)), ((($length$11981 = temp$11975.length)), ((($index$11987 = 0)), (function() {
      $11964: for (; ($index$11987 < $length$11981); ($index$11987++)) {
        var pp$12004;
        var m$11996;
        (m$11996 = temp$11975[$index$11987]);
        (pp$12004 = m$11996);
        acc$11969.push(pp$12004.pattern);
      }
    })()))), acc$11969))), ["any"].concat(patts$11961)))) : (($11497$11512 && ($11475$11501[0] === "data")) ? ((args$12010 = Array.prototype.slice.call($11475$11501, 1)), (((specs$12020 = it$0$11435.parse_specs(scope$11454, args$12010, tags$11456))), ((($12015$12026 = specs$12020)), ((($12019$12038 = ___hasprop($12015$12026, "keys")) && (((t0$12031 = $12015$12026.keys)), ((t0$12031 instanceof Array) && (((t1$12032 = t0$12031.length)), ((t1$12032 === 0) && (___hasprop($12015$12026, "fw") && ((fw$12041 = $12015$12026.fw), (___hasprop($12015$12026, "bw") && ((bw$12042 = $12015$12026.bw), (___hasprop($12015$12026, "defaults") && ((defaults$12043 = $12015$12026.defaults), ___hasprop($12015$12026, "rest")))))))))))) ? ((rest$12044 = $12015$12026.rest), (((patt$12062 = __lt____lt____colon__$11176(["array_pattern", fw$12041, bw$12042, defaults$12043, rest$12044], pattern$11455))), (checked$11458 ? patt$12062 : ["check", checker_db$11185.Array, patt$12062]))) : (($12019$12038 && ((keys$12068 = $12015$12026.keys), (___hasprop($12015$12026, "fw") && (((t0$12031 = $12015$12026.fw)), ((t0$12031 instanceof Array) && (((t1$12032 = t0$12031.length)), ((t1$12032 === 0) && (___hasprop($12015$12026, "bw") && (((t2$12033 = $12015$12026.bw)), ((t2$12033 instanceof Array) && (((t3$12034 = t2$12033.length)), ((t3$12034 === 0) && (___hasprop($12015$12026, "defaults") && (((t4$12035 = $12015$12026.defaults)), ((t4$12035 instanceof Array) && (((t5$12036 = t4$12035.length)), ((t5$12036 === 0) && (___hasprop($12015$12026, "rest") && ($12015$12026.rest === (void 0)))))))))))))))))))) ? ["object_pattern"].concat(keys$12068) : ((other$12104 = $12015$12026), (((msg$12108 = "Pattern must be an array or an object.")), (function() {
      throw ErrorFactory(["syntax", "pattern"]).create(msg$12108, ({
        "node": expr$11468,
        "specs": specs$12020
      }));
    })()))))))) : (($11495$11510 && ((t0$11506 === 3) && ($11475$11501[0] === "mode"))) ? ((mode$12114 = $11475$11501[1]), (subp$12115 = $11475$11501[2]), it$0$11435.expand(scope$11454, subp$12115, __amp__(tags$11456, ({"declare_mode": mode$12114})), toplevel$11457, checked$11458)) : ((other$12120 = $11475$11501), (function() {
      throw ErrorFactory(["syntax", "pattern"]).create(("Illegal pattern: " + other$12120), ({"node": other$12120}));
    })()))))))))))))))))))))));
    return (it$0$11435.opt.wrap_pattern || identity$11182)(__lt____lt____colon__$11176(rval$11469, pattern$11455), toplevel$11457);
  } else {
    ___match_error($11433$11445);
  }
}));
__amp____colon__(PatternParser$11186, __amp____colon__(((accum$12128 = ({})), ((accum$12128["::name"] = "PatternParser"), accum$12128)), ((accum$12132 = ({})), ((accum$12132["::egclass"] = true), accum$12132))));
PatternParser$11186;
(PatternProcessor$11187 = (function() {
  var it$0$12141;
  (it$0$12141 = ((!getChecker(PatternProcessor$11187)(this)) ? Object.create(PatternProcessor$11187.prototype) : this));
  (it$0$12141["temps"] = []);
  (it$0$12141["parts"] = []);
  (it$0$12141["gen"] = GenSym$11178("t"));
  return it$0$12141;
}));
(PatternProcessor$11187.prototype["do"] = (function(part$12165) {
  var it$0$12169;
  var self$12170;
  (it$0$12169 = this);
  (self$12170 = this);
  return it$0$12169.parts.push(["do", part$12165]);
}));
(PatternProcessor$11187.prototype["check"] = (function() {
  var part$12206;
  var tags$12207;
  var t0$12202;
  var $12185$12197;
  var it$0$12187;
  var self$12188;
  (it$0$12187 = this);
  (self$12188 = this);
  ($12185$12197 = arguments);
  (t0$12202 = $12185$12197.length);
  if (((t0$12202 >= 1) && (t0$12202 <= 2))) {
    (part$12206 = $12185$12197[0]);
    (tags$12207 = ((1 >= t0$12202) ? ({}) : $12185$12197[1]));
    return it$0$12187.parts.push(__amp__(["check", part$12206], tags$12207));
  } else {
    ___match_error($12185$12197);
  }
}));
(PatternProcessor$11187.prototype["temp"] = (function() {
  var x$12274;
  var x$12280;
  var init$12287;
  var bridge$12254$12263;
  var $12252$12258;
  var x$12244;
  var v$12245;
  var t0$12240;
  var $12223$12235;
  var it$0$12225;
  var self$12226;
  (it$0$12225 = this);
  (self$12226 = this);
  ($12223$12235 = arguments);
  (t0$12240 = $12223$12235.length);
  if (((t0$12240 >= 1) && (t0$12240 <= 2))) {
    (x$12244 = $12223$12235[0]);
    (v$12245 = ((1 >= t0$12240) ? null : $12223$12235[1]));
    ($12252$12258 = x$12244);
    (bridge$12254$12263 = $12252$12258);
    if ((((((x$12274 = bridge$12254$12263)), ((x$12274 instanceof Array) && (x$12274[0] === "variable"))) || (((x$12280 = bridge$12254$12263)), ((x$12280 instanceof Array) && (x$12280[0] === "symbol")))) && (___hasprop($12252$12258, "single_assignment") && (($12252$12258.single_assignment ? true : false) && (!v$12245))))) {
      return x$12244;
    } else {
      (init$12287 = $12252$12258);
      (v$12245 = (v$12245 || ["symbol", it$0$12225.gen()]));
      (v$12245["single_assignment"] = true);
      it$0$12225.temps.push(v$12245);
      it$0$12225.do(["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], v$12245], init$12287]]);
      return v$12245;
    }
  } else {
    ___match_error($12223$12235);
  }
}));
(PatternProcessor$11187.prototype["process"] = (function(pattern$12304, rhs$12305, fns$12306) {
  var x$12363;
  var x$12397;
  var t$12410;
  var t$12434;
  var t$12443;
  var pp$12454;
  var $index$12487;
  var $length$12481;
  var temp$12475;
  var t$12465;
  var $index$12555;
  var $length$12549;
  var temp$12543;
  var acc$12537;
  var fn$12520;
  var parts$12521;
  var t$12513;
  var $index$12616;
  var $length$12610;
  var temp$12604;
  var acc$12598;
  var t$12589;
  var otherwise$12749;
  var $12727$12733;
  var $index$12766;
  var $length$12760;
  var temp$12754;
  var $index$12815;
  var $length$12809;
  var temp$12803;
  var end$12877;
  var pos$12871;
  var $index$12901;
  var $length$12895;
  var temp$12889;
  var acc$12883;
  var nfw$12682;
  var nbw$12683;
  var ndflt$12684;
  var extract_length$12685;
  var check_length$12686;
  var lo$12687;
  var hi$12688;
  var t$12689;
  var len$12690;
  var fw$12666;
  var bw$12667;
  var dflt$12668;
  var rest$12669;
  var subp$12584;
  var xs$12508;
  var xs$12460;
  var patt$12449;
  var projector$12416;
  var subp$12417;
  var unconditional$12418;
  var $12332$12419;
  var checker$12404;
  var subp$12405;
  var checker$12392;
  var condition$12385;
  var subp$12386;
  var kind$12380;
  var sym$12370;
  var $12340$12354;
  var $12341$12355;
  var $12342$12356;
  var $12343$12357;
  var t0$12351;
  var t1$12352;
  var $12324$12346;
  var rval$12321;
  var it$0$12310;
  var self$12311;
  (it$0$12310 = this);
  (self$12311 = this);
  (rval$12321 = ((($12324$12346 = pattern$12304)), ((((x$12363 = $12324$12346)), ((x$12363 instanceof Array) && (x$12363[0] === "ignore"))) ? it$0$12310.do(rhs$12305) : ((($12340$12354 = ($12324$12346 instanceof Array)) && (((t0$12351 = $12324$12346.length)), (($12342$12356 = (t0$12351 === 2)) && ($12324$12346[0] === "assign")))) ? ((sym$12370 = $12324$12346[1]), it$0$12310.parts.push(fns$12306.assign(sym$12370, rhs$12305))) : (($12342$12356 && ($12324$12346[0] === "special")) ? ((kind$12380 = $12324$12346[1]), it$0$12310.process(fns$12306.special(pattern$12304, rhs$12305), rhs$12305, fns$12306)) : (($12340$12354 && (($12342$12356 = (t0$12351 === 3)) && ($12324$12346[0] === "test"))) ? ((condition$12385 = $12324$12346[1]), (subp$12386 = $12324$12346[2]), (it$0$12310.process(subp$12386, rhs$12305, fns$12306), it$0$12310.check(condition$12385, ({"test": true})))) : (($12342$12356 && (($12343$12357 = ($12324$12346[0] === "check")) && ((checker$12392 = $12324$12346[1]), (((x$12397 = $12324$12346[2])), ((x$12397 instanceof Array) && (x$12397[0] === "ignore")))))) ? it$0$12310.check(["send", checker$12392, ["data", rhs$12305]]) : ($12343$12357 ? ((checker$12404 = $12324$12346[1]), (subp$12405 = $12324$12346[2]), (((t$12410 = it$0$12310.temp(rhs$12305))), it$0$12310.check(["send", checker$12404, ["data", t$12410]]), it$0$12310.process(subp$12405, t$12410, fns$12306))) : (($12340$12354 && ((t0$12351 === 4) && ($12324$12346[0] === "project"))) ? ((projector$12416 = $12324$12346[1]), (subp$12417 = $12324$12346[2]), ((t1$12352 = $12324$12346[3])), (unconditional$12418 = t1$12352), ($12332$12419 = t1$12352), (($12332$12419 ? true : false) ? (((t$12434 = it$0$12310.temp(["send", projector$12416, ["data", rhs$12305]]))), it$0$12310.process(subp$12417, t$12434, fns$12306)) : ($12332$12419, (((t$12443 = it$0$12310.temp(["send", projector$12416, ["data", rhs$12305]]))), it$0$12310.check(["send", t$12443, ["value", 0]]), it$0$12310.process(subp$12417, ["send", t$12443, ["value", 1]], fns$12306))))) : (($12340$12354 && ((t0$12351 === 2) && ($12324$12346[0] === "neg"))) ? ((patt$12449 = $12324$12346[1]), it$0$12310.check(["send", ["symbol", "not"], ["data", ["void"], (((pp$12454 = PatternProcessor$11187())), pp$12454.process(patt$12449, rhs$12305, fns$12306), assemble_conditions$11188(pp$12454))]])) : (($12340$12354 && (($12342$12356 = (t0$12351 >= 1)) && ($12324$12346[0] === "all"))) ? ((xs$12460 = Array.prototype.slice.call($12324$12346, 1)), (((t$12465 = it$0$12310.temp(rhs$12305))), (((temp$12475 = xs$12460)), ((($length$12481 = temp$12475.length)), ((($index$12487 = 0)), (function() {
    $12466: for (; ($index$12487 < $length$12481); ($index$12487++)) {
      var x$12504;
      var m$12496;
      (m$12496 = temp$12475[$index$12487]);
      (x$12504 = m$12496);
      it$0$12310.process(x$12504, t$12465, fns$12306);
    }
  })()))), null)) : (($12342$12356 && ($12324$12346[0] === "any")) ? ((xs$12508 = Array.prototype.slice.call($12324$12346, 1)), (((t$12513 = it$0$12310.temp(rhs$12305, ["symbol", gensym$11179("bridge")]))), it$0$12310.check((((fn$12520 = (function(x$12526, rest$12527) {
    return ["send", ["symbol", "or"], ["data", x$12526, rest$12527]];
  }))), ((parts$12521 = (((acc$12537 = [])), (((temp$12543 = xs$12508)), ((($length$12549 = temp$12543.length)), ((($index$12555 = 0)), (function() {
    $12532: for (; ($index$12555 < $length$12549); ($index$12555++)) {
      var pp$12577;
      var x$12572;
      var m$12564;
      (m$12564 = temp$12543[$index$12555]);
      (x$12572 = m$12564);
      acc$12537.push((((pp$12577 = PatternProcessor$11187())), pp$12577.process(x$12572, t$12513, fns$12306), assemble_conditions$11188(pp$12577)));
    }
  })()))), acc$12537))), util$11177.construct(parts$12521, fn$12520, ["symbol", "false"]))))) : (($12342$12356 && ($12324$12346[0] === "object_pattern")) ? ((subp$12584 = Array.prototype.slice.call($12324$12346, 1)), (((t$12589 = it$0$12310.temp(rhs$12305))), (((acc$12598 = [])), (((temp$12604 = subp$12584)), ((($length$12610 = temp$12604.length)), ((($index$12616 = 0)), (function() {
    $12590: for (; ($index$12616 < $length$12610); ($index$12616++)) {
      var k$12637;
      var v$12638;
      var t0$12630;
      var t1$12631;
      var t2$12632;
      var t3$12633;
      var m$12625;
      (m$12625 = temp$12604[$index$12616]);
      (t0$12630 = m$12625);
      if (((t0$12630 instanceof Array) && (((t1$12631 = t0$12630.length)), ((t1$12631 === 2) && (((t2$12632 = t0$12630[0])), ((t2$12632 instanceof Array) && (((t3$12633 = t2$12632.length)), ((t3$12633 === 2) && (t2$12632[0] === "value"))))))))) {
        (k$12637 = t2$12632[1]);
        (v$12638 = t0$12630[1]);
        acc$12598.push((it$0$12310.check(["send", ["symbol", "___hasprop"], ["data", t$12589, ["value", k$12637]]]), it$0$12310.process(v$12638, ["send", t$12589, ["value", k$12637]], fns$12306)));
      } else {
        ___match_error(m$12625, "/home/olivier/git/earl-grey/src/pattern.eg", 8398, 8530);
      }
    }
  })()))), acc$12598))) : (($12340$12354 && ((t0$12351 === 5) && ($12324$12346[0] === "array_pattern"))) ? ((fw$12666 = $12324$12346[1]), (bw$12667 = $12324$12346[2]), (dflt$12668 = $12324$12346[3]), (rest$12669 = $12324$12346[4]), (((nfw$12682 = fw$12666.length)), ((nbw$12683 = bw$12667.length)), ((ndflt$12684 = dflt$12668.length)), ((extract_length$12685 = true)), ((check_length$12686 = true)), ((lo$12687 = (nfw$12682 + nbw$12683))), ((hi$12688 = (lo$12687 + ndflt$12684))), ((t$12689 = it$0$12310.temp(rhs$12305))), ((len$12690 = it$0$12310.temp(["send", t$12689, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "length"]]]]))), it$0$12310.check(((($12727$12733 = rest$12669)), (($12727$12733 ? true : false) ? ["send", ["symbol", ">="], ["data", len$12690, ["value", lo$12687]]] : ($12727$12733, ((lo$12687 === hi$12688) ? ["send", ["symbol", "==="], ["data", len$12690, ["value", lo$12687]]] : ((otherwise$12749 = $12727$12733), ["send", ["symbol", "and"], ["data", ["send", ["symbol", ">="], ["data", len$12690, ["value", lo$12687]]], ["send", ["symbol", "<="], ["data", len$12690, ["value", hi$12688]]]]])))))), (((temp$12754 = enumerate(fw$12666))), ((($length$12760 = temp$12754.length)), ((($index$12766 = 0)), (function() {
    $12691: for (; ($index$12766 < $length$12760); ($index$12766++)) {
      var i$12785;
      var m$12786;
      var t0$12780;
      var t1$12781;
      var m$12775;
      (m$12775 = temp$12754[$index$12766]);
      (t0$12780 = m$12775);
      if (((t0$12780 instanceof Array) && (((t1$12781 = t0$12780.length)), (t1$12781 === 2)))) {
        (i$12785 = t0$12780[0]);
        (m$12786 = t0$12780[1]);
        it$0$12310.process(m$12786, ["send", t$12689, ["value", i$12785]], fns$12306);
      } else {
        ___match_error(m$12775, "/home/olivier/git/earl-grey/src/pattern.eg", 9262, 9348);
      }
    }
  })()))), (((temp$12803 = enumerate(dflt$12668))), ((($length$12809 = temp$12803.length)), ((($index$12815 = 0)), (function() {
    $12694: for (; ($index$12815 < $length$12809); ($index$12815++)) {
      var idx$12863;
      var i$12836;
      var patt$12837;
      var value$12838;
      var t0$12829;
      var t1$12830;
      var t2$12831;
      var t3$12832;
      var m$12824;
      (m$12824 = temp$12803[$index$12815]);
      (t0$12829 = m$12824);
      if (((t0$12829 instanceof Array) && (((t1$12830 = t0$12829.length)), ((t1$12830 === 2) && ((i$12836 = t0$12829[0]), (((t2$12831 = t0$12829[1])), ((t2$12831 instanceof Array) && (((t3$12832 = t2$12831.length)), (t3$12832 === 2))))))))) {
        (patt$12837 = t2$12831[0]);
        (value$12838 = t2$12831[1]);
        (idx$12863 = (i$12836 + nfw$12682));
        it$0$12310.process(patt$12837, ["send", ["symbol", "if"], ["data", ["send", ["symbol", ">="], ["data", ["value", (idx$12863 + nbw$12683)], len$12690]], value$12838, ["send", t$12689, ["value", idx$12863]]]], fns$12306);
      } else {
        ___match_error(m$12824, "/home/olivier/git/earl-grey/src/pattern.eg", 9348, 9517);
      }
    }
  })()))), ((rest$12669 !== undefined) ? (((pos$12871 = (nfw$12682 + ndflt$12684))), (((end$12877 = ((nbw$12683 > 0) ? [["value", (-nbw$12683)]] : []))), it$0$12310.process(rest$12669, ["send", ["send", ["send", ["send", ["symbol", "Array"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "slice"]]]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "call"]]]], ["data", t$12689, ["value", pos$12871]].concat(end$12877)], fns$12306))) : []), (((acc$12883 = [])), (((temp$12889 = enumerate(bw$12667))), ((($length$12895 = temp$12889.length)), ((($index$12901 = 0)), (function() {
    $12697: for (; ($index$12901 < $length$12895); ($index$12901++)) {
      var i$12920;
      var m$12921;
      var t0$12915;
      var t1$12916;
      var m$12910;
      (m$12910 = temp$12889[$index$12901]);
      (t0$12915 = m$12910);
      if (((t0$12915 instanceof Array) && (((t1$12916 = t0$12915.length)), (t1$12916 === 2)))) {
        (i$12920 = t0$12915[0]);
        (m$12921 = t0$12915[1]);
        acc$12883.push(it$0$12310.process(m$12921, ["send", ["symbol", "___js_fetch"], ["data", t$12689, ["send", ["symbol", "-"], ["data", len$12690, ["value", (nbw$12683 - i$12920)]]]]], fns$12306));
      } else {
        ___match_error(m$12910, "/home/olivier/git/earl-grey/src/pattern.eg", 9968, 10119);
      }
    }
  })()))), acc$12883))) : (___match_error($12324$12346))))))))))))))));
  return rval$12321;
}));
__amp____colon__(PatternProcessor$11187, __amp____colon__(((accum$12942 = ({})), ((accum$12942["::name"] = "PatternProcessor"), accum$12942)), ((accum$12946 = ({})), ((accum$12946["::egclass"] = true), accum$12946))));
PatternProcessor$11187;
(assemble_conditions$11188 = (function(pp$12953) {
  var $index$13077;
  var $length$13071;
  var temp$13065;
  var acc$13059;
  var decls$13051;
  var construct$12957;
  (construct$12957 = (function($12961$12964) {
    var x$13032;
    var rest$13033;
    var x$13017;
    var x$13001;
    var rest$13002;
    var $12971$12988;
    var $12972$12989;
    var t0$12984;
    var t1$12985;
    var t2$12986;
    var $12966$12979;
    var ph$12973;
    (ph$12973 = $12961$12964);
    ($12966$12979 = ph$12973);
    if ((($12971$12988 = ($12966$12979 instanceof Array)) && (((t0$12984 = $12966$12979.length)), (t0$12984 === 0)))) {
      return ["value", true];
    } else {
      if (($12971$12988 && ((t0$12984 >= 1) && (((t1$12985 = $12966$12979[0])), ((t1$12985 instanceof Array) && (((t2$12986 = t1$12985.length)), ((t2$12986 === 2) && (t1$12985[0] === "do")))))))) {
        (x$13001 = t1$12985[1]);
        (rest$13002 = Array.prototype.slice.call($12966$12979, 1));
        return ["multi", x$13001, construct$12957(rest$13002)];
      } else {
        if (($12971$12988 && ((t0$12984 === 1) && (((t1$12985 = $12966$12979[0])), ((t1$12985 instanceof Array) && (((t2$12986 = t1$12985.length)), ((t2$12986 === 2) && (t1$12985[0] === "check")))))))) {
          (x$13017 = t1$12985[1]);
          return x$13017;
        } else {
          if (($12971$12988 && ((t0$12984 >= 1) && (((t1$12985 = $12966$12979[0])), ((t1$12985 instanceof Array) && (((t2$12986 = t1$12985.length)), ((t2$12986 === 2) && (t1$12985[0] === "check")))))))) {
            (x$13032 = t1$12985[1]);
            (rest$13033 = Array.prototype.slice.call($12966$12979, 1));
            return ["send", ["symbol", "and"], ["data", x$13032, construct$12957(rest$13033)]];
          } else {
            ___match_error($12966$12979);
          }
        }
      }
    }
  }));
  if (pp$12953.temps.length) {
    (decls$13051 = (((acc$13059 = [])), (((temp$13065 = pp$12953.temps)), ((($length$13071 = temp$13065.length)), ((($index$13077 = 0)), (function() {
      $13054: for (; ($index$13077 < $length$13071); ($index$13077++)) {
        var t$13094;
        var m$13086;
        (m$13086 = temp$13065[$index$13077]);
        (t$13094 = m$13086);
        acc$13059.push(["declare", t$13094]);
      }
    })()))), acc$13059));
    return ["multi"].concat(decls$13051).concat([construct$12957(pp$12953.parts)]);
  } else {
    return construct$12957(pp$12953.parts);
  }
}));
(assemble_pattern$11189 = (function() {
  var $index$13166;
  var $length$13160;
  var temp$13154;
  var $index$13227;
  var $length$13221;
  var temp$13215;
  var test$13366;
  var lead$13129;
  var trail$13130;
  var construct$13131;
  var parts$13116;
  var t$13117;
  var f$13118;
  var t0$13112;
  var $13103$13107;
  ($13103$13107 = arguments);
  (t0$13112 = $13103$13107.length);
  if (((t0$13112 >= 2) && (t0$13112 <= 3))) {
    (parts$13116 = $13103$13107[0]);
    (t$13117 = $13103$13107[1]);
    (f$13118 = ((2 >= t0$13112) ? null : $13103$13107[2]));
    (lead$13129 = []);
    (temp$13154 = parts$13116.slice(0));
    ($length$13160 = temp$13154.length);
    ($index$13166 = 0);
    $13132: for (; ($index$13166 < $length$13160); ($index$13166++)) {
      var x$13204;
      var x$13189;
      var $13136$13183;
      var $13137$13184;
      var $13138$13185;
      var $13139$13186;
      var t0$13180;
      var t1$13181;
      var m$13175;
      (m$13175 = temp$13154[$index$13166]);
      (t0$13180 = m$13175);
      if ((($13137$13184 = (t0$13180 instanceof Array)) && (((t1$13181 = t0$13180.length)), (($13139$13186 = (t1$13181 === 2)) && (t0$13180[0] === "do"))))) {
        (x$13189 = t0$13180[1]);
        lead$13129.push(x$13189);
        parts$13116.shift();
      } else {
        if (($13139$13186 && (t0$13180[0] === "check"))) {
          (x$13204 = t0$13180[1]);
          break $13132;
        } else {
          ___match_error(m$13175, "/home/olivier/git/earl-grey/src/pattern.eg", 10580, 10690);
        }
      }
    }
    (trail$13130 = []);
    (temp$13215 = parts$13116.slice(0).reverse());
    ($length$13221 = temp$13215.length);
    ($index$13227 = 0);
    $13140: for (; ($index$13227 < $length$13221); ($index$13227++)) {
      var x$13265;
      var x$13250;
      var $13144$13244;
      var $13145$13245;
      var $13146$13246;
      var $13147$13247;
      var t0$13241;
      var t1$13242;
      var m$13236;
      (m$13236 = temp$13215[$index$13227]);
      (t0$13241 = m$13236);
      if ((($13145$13245 = (t0$13241 instanceof Array)) && (((t1$13242 = t0$13241.length)), (($13147$13247 = (t1$13242 === 2)) && (t0$13241[0] === "do"))))) {
        (x$13250 = t0$13241[1]);
        trail$13130.unshift(x$13250);
        parts$13116.pop();
      } else {
        if (($13147$13247 && (t0$13241[0] === "check"))) {
          (x$13265 = t0$13241[1]);
          break $13140;
        } else {
          ___match_error(m$13236, "/home/olivier/git/earl-grey/src/pattern.eg", 10704, 10826);
        }
      }
    }
    (construct$13131 = (function($13273$13276) {
      var other$13361;
      var x$13345;
      var rest$13346;
      var x$13330;
      var x$13314;
      var rest$13315;
      var $13284$13301;
      var $13285$13302;
      var t0$13297;
      var t1$13298;
      var t2$13299;
      var $13278$13292;
      var ph$13286;
      (ph$13286 = $13273$13276);
      ($13278$13292 = ph$13286);
      if ((($13284$13301 = ($13278$13292 instanceof Array)) && (((t0$13297 = $13278$13292.length)), (t0$13297 === 0)))) {
        return ["value", true];
      } else {
        if (($13284$13301 && ((t0$13297 >= 1) && (((t1$13298 = $13278$13292[0])), ((t1$13298 instanceof Array) && (((t2$13299 = t1$13298.length)), ((t2$13299 === 2) && (t1$13298[0] === "do")))))))) {
          (x$13314 = t1$13298[1]);
          (rest$13315 = Array.prototype.slice.call($13278$13292, 1));
          return ["multi", x$13314, construct$13131(rest$13315)];
        } else {
          if (($13284$13301 && ((t0$13297 === 1) && (((t1$13298 = $13278$13292[0])), ((t1$13298 instanceof Array) && (((t2$13299 = t1$13298.length)), ((t2$13299 === 2) && (t1$13298[0] === "check")))))))) {
            (x$13330 = t1$13298[1]);
            return x$13330;
          } else {
            if (($13284$13301 && ((t0$13297 >= 1) && (((t1$13298 = $13278$13292[0])), ((t1$13298 instanceof Array) && (((t2$13299 = t1$13298.length)), ((t2$13299 === 2) && (t1$13298[0] === "check")))))))) {
              (x$13345 = t1$13298[1]);
              (rest$13346 = Array.prototype.slice.call($13278$13292, 1));
              return ["send", ["symbol", "and"], ["data", x$13345, construct$13131(rest$13346)]];
            } else {
              (other$13361 = $13278$13292);
              throw ErrorFactory(["oops"]).create("?!?", other$13361);
            }
          }
        }
      }
    }));
    if (parts$13116.length) {
      (test$13366 = construct$13131(parts$13116));
      return ["multi"].concat(lead$13129).concat([(f$13118 ? ["send", ["symbol", "if"], ["data", test$13366, ["multi"].concat(trail$13130).concat([t$13117]), f$13118]] : ["send", ["symbol", "if"], ["data", test$13366, ["multi"].concat(trail$13130).concat([t$13117])]])]);
    } else {
      return ["multi"].concat(lead$13129).concat(trail$13130).concat([t$13117]);
    }
  } else {
    ___match_error($13103$13107);
  }
}));
(inject_below_uses$11190 = (function($13376$13379, fn$13380) {
  var other$13411;
  var scope$13400;
  var x$13401;
  var t0$13396;
  var $13382$13391;
  var ph$13385;
  (ph$13385 = $13376$13379);
  ($13382$13391 = ph$13385);
  if ((($13382$13391 instanceof Array) && (((t0$13396 = $13382$13391.length)), ((t0$13396 === 3) && ($13382$13391[0] === "use"))))) {
    (scope$13400 = $13382$13391[1]);
    (x$13401 = $13382$13391[2]);
    return ["use", scope$13400, inject_below_uses$11190(x$13401, fn$13380)];
  } else {
    (other$13411 = $13382$13391);
    return fn$13380(other$13411);
  }
}));
(parse_pattern$11191 = (function(scope$13418, pattern$13419, rhs$13420, opt$13421) {
  var t0$13435;
  var $index$13487;
  var $length$13481;
  var temp$13475;
  var acc$13469;
  var t0$13533;
  var t1$13534;
  var t2$13535;
  var t3$13536;
  var t4$13537;
  var t0$13566;
  var t1$13567;
  var t2$13568;
  var t3$13569;
  var t4$13570;
  var bridge$13514$13523;
  var $13512$13518;
  var targ$13509;
  var parse$13427;
  var target$13428;
  var proc$13429;
  (parse$13427 = PatternParser$11186(scope$13418, pattern$13419, opt$13421));
  if (((!opt$13421.allow_arguments) && parse$13427.arguments.length)) {
    throw ErrorFactory(["syntax", "pattern", "arguments"]).create("Arguments cannot be declared in this pattern", ({"args": parse$13427.arguments[0]}));
  }
  (t0$13435 = getProjector((opt$13421.wrap_target || identity$11182))((parse$13427.arguments.length ? inject_below_uses$11190(rhs$13420, (function(x$13442) {
    return util$11177.construct(parse$13427.arguments.concat([x$13442]), (function(args$13446, rest$13447) {
      return ["send", ["symbol", "->"], ["data", args$13446, rest$13447]];
    }));
  })) : rhs$13420)));
  if (t0$13435[0]) {
    (target$13428 = t0$13435[1]);
  } else {
    ___match_error((parse$13427.arguments.length ? inject_below_uses$11190(rhs$13420, (function(x$13454) {
      return util$11177.construct(parse$13427.arguments.concat([x$13454]), (function(args$13458, rest$13459) {
        return ["send", ["symbol", "->"], ["data", args$13458, rest$13459]];
      }));
    })) : rhs$13420), "/home/olivier/git/earl-grey/src/pattern.eg", 12226, 12652);
  }
  (proc$13429 = PatternProcessor$11187());
  proc$13429.process(parse$13427.pattern, target$13428, opt$13421);
  if (opt$13421.finalize) {
    return ["splice"].concat(opt$13421.declare(scope$13418, parse$13427.vars)).concat([["multi"].concat((((acc$13469 = [])), (((temp$13475 = proc$13429.temps)), ((($length$13481 = temp$13475.length)), ((($index$13487 = 0)), (function() {
      $13464: for (; ($index$13487 < $length$13481); ($index$13487++)) {
        var t$13504;
        var m$13496;
        (m$13496 = temp$13475[$index$13487]);
        (t$13504 = m$13496);
        acc$13469.push(["declare", t$13504]);
      }
    })()))), acc$13469)).concat([(((targ$13509 = ((($13512$13518 = target$13428)), (((bridge$13514$13523 = $13512$13518)), ((((bridge$13514$13523 instanceof Array) && (((t0$13533 = bridge$13514$13523.length)), ((t0$13533 === 3) && ((bridge$13514$13523[0] === "send") && (((t1$13534 = bridge$13514$13523[1])), ((t1$13534 instanceof Array) && (((t2$13535 = t1$13534.length)), ((t2$13535 === 2) && ((t1$13534[0] === "symbol") && ((t1$13534[1] === "->") && (((t3$13536 = bridge$13514$13523[2])), ((t3$13536 instanceof Array) && (((t4$13537 = t3$13536.length)), ((t4$13537 === 3) && ((t3$13536[0] === "data") && (t3$13536[1], (t3$13536[2], true))))))))))))))))) || ((bridge$13514$13523 instanceof Array) && (((t0$13566 = bridge$13514$13523.length)), ((t0$13566 === 3) && ((bridge$13514$13523[0] === "send") && (((t1$13567 = bridge$13514$13523[1])), ((t1$13567 instanceof Array) && (((t2$13568 = t1$13567.length)), ((t2$13568 === 2) && ((t1$13567[0] === "symbol") && ((t1$13567[1] === "_lambda") && (((t3$13569 = bridge$13514$13523[2])), ((t3$13569 instanceof Array) && (((t4$13570 = t3$13569.length)), ((t4$13570 >= 1) && ((t3$13569[0] === "data") && (Array.prototype.slice.call(t3$13569, 1), true))))))))))))))))) ? ["value", "<function>"] : ($13512$13518, target$13428)))))), assemble_pattern$11189(proc$13429.parts, opt$13421.success(target$13428), opt$13421.failure(targ$13509)))])]);
  } else {
    return [parse$13427.vars, proc$13429.temps, proc$13429.parts];
  }
}));
(checkall$11192 = ["send", "data", "multi", "assign", "void", "check", "do"]);
(same_block$11193 = (function($13609$13612, ban1$13613, ban2$13614) {
  var $index$13778;
  var $length$13772;
  var temp$13766;
  var other$13800;
  var type1$13739;
  var args1$13740;
  var type2$13741;
  var args2$13742;
  var m1$13722;
  var m2$13723;
  var v1$13705;
  var v2$13706;
  var s1$13688;
  var s2$13689;
  var v1$13656;
  var v2$13657;
  var $13623$13647;
  var $13624$13648;
  var $13625$13649;
  var $13626$13650;
  var $13627$13651;
  var $13628$13652;
  var $13629$13653;
  var t0$13641;
  var t1$13642;
  var t2$13643;
  var t3$13644;
  var t4$13645;
  var $13616$13636;
  var ph$13630;
  (ph$13630 = $13609$13612);
  ($13616$13636 = ph$13630);
  if ((($13623$13647 = ($13616$13636 instanceof Array)) && (((t0$13641 = $13616$13636.length)), (($13625$13649 = (t0$13641 === 2)) && (((t1$13642 = $13616$13636[0])), (($13627$13651 = (t1$13642 instanceof Array)) && (((t2$13643 = t1$13642.length)), (($13629$13653 = (t2$13643 === 2)) && ((t1$13642[0] === "variable") && ((v1$13656 = t1$13642[1]), (((t3$13644 = $13616$13636[1])), ((t3$13644 instanceof Array) && (((t4$13645 = t3$13644.length)), ((t4$13645 === 2) && (t3$13644[0] === "variable"))))))))))))))) {
    (v2$13657 = t3$13644[1]);
    return (v1$13656 === v2$13657);
  } else {
    if (($13629$13653 && ((t1$13642[0] === "symbol") && ((s1$13688 = t1$13642[1]), (((t3$13644 = $13616$13636[1])), ((t3$13644 instanceof Array) && (((t4$13645 = t3$13644.length)), ((t4$13645 === 2) && (t3$13644[0] === "symbol"))))))))) {
      (s2$13689 = t3$13644[1]);
      return (((!$15100(ban1$13613, s1$13688)) && (!$15100(ban2$13614, s2$13689))) && (s1$13688 === s2$13689));
    } else {
      if (($13629$13653 && ((t1$13642[0] === "value") && ((v1$13705 = t1$13642[1]), (((t3$13644 = $13616$13636[1])), ((t3$13644 instanceof Array) && (((t4$13645 = t3$13644.length)), ((t4$13645 === 2) && (t3$13644[0] === "value"))))))))) {
        (v2$13706 = t3$13644[1]);
        return (v1$13705 === v2$13706);
      } else {
        if (($13629$13653 && ((t1$13642[0] === "macro") && ((m1$13722 = t1$13642[1]), (((t3$13644 = $13616$13636[1])), ((t3$13644 instanceof Array) && (((t4$13645 = t3$13644.length)), ((t4$13645 === 2) && (t3$13644[0] === "macro"))))))))) {
          (m2$13723 = t3$13644[1]);
          return (m1$13722 === m2$13723);
        } else {
          if (($13627$13651 && ((t2$13643 >= 1) && ((type1$13739 = t1$13642[0]), ((args1$13740 = Array.prototype.slice.call(t1$13642, 1)), (((t3$13644 = $13616$13636[1])), ((t3$13644 instanceof Array) && (((t4$13645 = t3$13644.length)), ((t4$13645 >= 1) && ((type2$13741 = t3$13644[0]), ((args2$13742 = Array.prototype.slice.call(t3$13644, 1)), (checkall$11192.indexOf(type1$13739) !== -1)))))))))))) {
            if (((type1$13739 === type2$13741) && (args1$13740.length === args2$13742.length))) {
              (temp$13766 = zip(args1$13740, args2$13742));
              ($length$13772 = temp$13766.length);
              ($index$13778 = 0);
              $13760: for (; ($index$13778 < $length$13772); ($index$13778++)) {
                var pair$13795;
                var m$13787;
                (m$13787 = temp$13766[$index$13778]);
                (pair$13795 = m$13787);
                if ((!same_block$11193(pair$13795, ban1$13613, ban2$13614))) {
                  return false;
                }
              }
              return true;
            } else {
              return false;
            }
          } else {
            (other$13800 = $13616$13636);
            return false;
          }
        }
      }
    }
  }
}));
(parse_clauses$11194 = (function(scope$13807, target$13808, stmts$13809, opt$13810) {
  var $index$13850;
  var $length$13844;
  var temp$13838;
  var acc$13832;
  var $index$14096;
  var $length$14090;
  var temp$14084;
  var acc$14078;
  var $index$14159;
  var $length$14153;
  var temp$14147;
  var acc$14141;
  var decls$14133;
  var all_temps$13816;
  var the_parts$13817;
  var unique_temps$13818;
  (all_temps$13816 = []);
  (the_parts$13817 = (((acc$13832 = [])), (((temp$13838 = scope$13807.step_all(["clause"], stmts$13809))), ((($length$13844 = temp$13838.length)), ((($index$13850 = 0)), (function() {
    var $__0 = function() {
      var accum$13962;
      var accum$13980;
      var t0$13954;
      var t1$13955;
      var $index$14007;
      var $length$14001;
      var temp$13995;
      var bod$14048;
      var placeholder$13889;
      var special_fn$13890;
      var vars$13891;
      var temps$13892;
      var blocks$13893;
      var vars2$13894;
      var x$14058;
      var other$14066;
      var b$14054;
      var pattern$13870;
      var body$13871;
      var $13829$13867;
      var t0$13864;
      var t1$13865;
      var m$13859;
      (m$13859 = temp$13838[$index$13850]);
      (t0$13864 = m$13859);
      if (((t0$13864 instanceof Array) && (((t1$13865 = t0$13864.length)), ((t1$13865 === 3) && (t0$13864[0] === "clause"))))) {
        (pattern$13870 = t0$13864[1]);
        (body$13871 = t0$13864[2]);
        acc$13832.push((((placeholder$13889 = undefined)), ((special_fn$13890 = (function($13905$13908, value$13909) {
          var t0$13917;
          var t1$13918;
          var other$13950;
          var $13911$13933;
          var ph$13914;
          var expr$13915;
          (t0$13917 = $13905$13908);
          if (((t0$13917 instanceof Array) && (((t1$13918 = t0$13917.length)), ((t1$13918 === 2) && (t0$13917[0] === "special"))))) {
            (ph$13914 = t0$13917[1]);
            (expr$13915 = t0$13917);
          } else {
            ___match_error($13905$13908);
          }
          ($13911$13933 = ph$13914);
          if (($13911$13933 === "match")) {
            (placeholder$13889 = __lt____lt____colon__$11176(["symbol", scope$13807.gensym("ph")], expr$13915));
            return ["assign", placeholder$13889];
          } else {
            (other$13950 = $13911$13933);
            throw ErrorFactory(["syntax", "pattern", "special"]).create("Special token cannot be used here", ({"special": expr$13915}));
          }
        }))), (((t0$13954 = parse_pattern$11191(scope$13807, pattern$13870, target$13808, __amp__(opt$13810, __amp____colon__(({
          "allow_arguments": false,
          "allow_nested": true,
          "special": special_fn$13890
        }), __amp____colon__(((accum$13962 = ({})), ((accum$13962["assign"] = (function(v$13967, value$13968) {
          return ["do", __lt____lt____colon__$11176(["assign", v$13967, value$13968], v$13967)];
        })), accum$13962)), ({"finalize": false}))))))), (((t0$13954 instanceof Array) && (((t1$13955 = t0$13954.length)), (t1$13955 === 3))) ? ((vars$13891 = t0$13954[0]), (temps$13892 = t0$13954[1]), (blocks$13893 = t0$13954[2])) : ___match_error(parse_pattern$11191(scope$13807, pattern$13870, target$13808, __amp__(opt$13810, __amp____colon__(({
          "allow_arguments": false,
          "allow_nested": true,
          "special": special_fn$13890
        }), __amp____colon__(((accum$13980 = ({})), ((accum$13980["assign"] = (function(v$13985, value$13986) {
          return ["do", __lt____lt____colon__$11176(["assign", v$13985, value$13986], v$13985)];
        })), accum$13980)), ({"finalize": false}))))), "/home/olivier/git/earl-grey/src/pattern.eg", 14830, 15164))), (all_temps$13816 = all_temps$13816.concat(temps$13892)), (placeholder$13889 ? vars$13891.push(placeholder$13889) : undefined), ((vars2$13894 = ({}))), (((temp$13995 = vars$13891)), ((($length$14001 = temp$13995.length)), ((($index$14007 = 0)), (function() {
          $13895: for (; ($index$14007 < $length$14001); ($index$14007++)) {
            var other$14044;
            var xxx$14026;
            var t0$14021;
            var t1$14022;
            var m$14016;
            (m$14016 = temp$13995[$index$14007]);
            (t0$14021 = m$14016);
            if (((t0$14021 instanceof Array) && (((t1$14022 = t0$14021.length)), ((t1$14022 === 2) && (t0$14021[0] === "symbol"))))) {
              (xxx$14026 = t0$14021[1]);
              (vars2$13894[xxx$14026] = true);
            } else {
              (other$14044 = m$14016);
              throw ErrorFactory(["syntax", "unexpected"]).create();
            }
          }
        })()))), (((bod$14048 = (placeholder$13889 ? parse_clauses$11194(scope$13807, placeholder$13889, getProjector(Body$11183)(body$13871)[1], opt$13810) : (opt$13810.wrap ? opt$13810.wrap(body$13871) : body$13871)))), ["clause", vars$13891, vars2$13894, blocks$13893, bod$14048])));
      } else {
        if ((((x$14058 = t0$13864)), ((x$14058 instanceof Array) && (x$14058[0] === "block")))) {
          (b$14054 = t0$13864);
          acc$13832.push(b$14054);
        } else {
          (other$14066 = m$13859);
          acc$13832.push((function() {
            throw ErrorFactory(["syntax", "clause"]).create("Illegal clause", ({"clause": other$14066}));
          })());
        }
      }
    };
    $13824: for (; ($index$13850 < $length$13844); ($index$13850++)) {
      $__0();
    }
  })()))), acc$13832));
  if (opt$13810.fallback) {
    the_parts$13817.push(["block", opt$13810.fallback(target$13808)]);
  }
  (unique_temps$13818 = keys(util$11177.mkset((((acc$14078 = [])), (((temp$14084 = all_temps$13816)), ((($length$14090 = temp$14084.length)), ((($index$14096 = 0)), (function() {
    $14073: for (; ($index$14096 < $length$14090); ($index$14096++)) {
      var t$14115;
      var t0$14110;
      var t1$14111;
      var m$14105;
      (m$14105 = temp$14084[$index$14096]);
      (t0$14110 = m$14105);
      if (((t0$14110 instanceof Array) && (((t1$14111 = t0$14110.length)), ((t1$14111 === 2) && (t0$14110[0] === "symbol"))))) {
        (t$14115 = t0$14110[1]);
        acc$14078.push(t$14115);
      } else {
        ___match_error(m$14105, "/home/olivier/git/earl-grey/src/pattern.eg", 15971, 16001);
      }
    }
  })()))), acc$14078))));
  (decls$14133 = (((acc$14141 = [])), (((temp$14147 = unique_temps$13818)), ((($length$14153 = temp$14147.length)), ((($index$14159 = 0)), (function() {
    $14136: for (; ($index$14159 < $length$14153); ($index$14159++)) {
      var t$14176;
      var m$14168;
      (m$14168 = temp$14147[$index$14159]);
      (t$14176 = m$14168);
      acc$14141.push(["declare", __amp____colon__(["symbol", t$14176], ({"mutable": true}))]);
    }
  })()))), acc$14141));
  return ["multi"].concat(decls$14133).concat([weave_clauses$11196(the_parts$13817)]);
}));
(opt_clauses$11195 = (function(clauses$14185) {
  var $index$14225;
  var $length$14219;
  var temp$14213;
  var acc$14207;
  var $index$14409;
  var $length$14403;
  var temp$14397;
  var acc$14391;
  var $index$14469;
  var $length$14463;
  var temp$14457;
  var acc$14451;
  var $index$14521;
  var $length$14515;
  var temp$14509;
  var acc$14503;
  var shares$14194;
  var max$14195;
  var temps$14196;
  var shared_last$14197;
  var idx_last$14198;
  var new_clauses$14199;
  (shares$14194 = (((acc$14207 = [])), (((temp$14213 = enumerate(clauses$14185.slice(1)))), ((($length$14219 = temp$14213.length)), ((($index$14225 = 0)), (function() {
    var $__1 = function() {
      var t0$14286;
      var t1$14287;
      var $index$14321;
      var $length$14315;
      var temp$14309;
      var varsd0$14278;
      var blocks0$14279;
      var share$14280;
      var idx$14281;
      var i$14246;
      var vars$14247;
      var varsd$14248;
      var blocks$14249;
      var body$14250;
      var t0$14239;
      var t1$14240;
      var t2$14241;
      var t3$14242;
      var m$14234;
      (m$14234 = temp$14213[$index$14225]);
      (t0$14239 = m$14234);
      if (((t0$14239 instanceof Array) && (((t1$14240 = t0$14239.length)), ((t1$14240 === 2) && ((i$14246 = t0$14239[0]), (((t2$14241 = t0$14239[1])), ((t2$14241 instanceof Array) && (((t3$14242 = t2$14241.length)), ((t3$14242 === 5) && (t2$14241[0] === "clause")))))))))) {
        (vars$14247 = t2$14241[1]);
        (varsd$14248 = t2$14241[2]);
        (blocks$14249 = t2$14241[3]);
        (body$14250 = t2$14241[4]);
        acc$14207.push(((((t0$14286 = $15100(clauses$14185, i$14246))), (((t0$14286 instanceof Array) && (((t1$14287 = t0$14286.length)), ((t1$14287 === 5) && (t0$14286[0] === "clause")))) ? (t0$14286[1], (varsd0$14278 = t0$14286[2]), (blocks0$14279 = t0$14286[3]), t0$14286[4]) : ___match_error($15100(clauses$14185, i$14246), "/home/olivier/git/earl-grey/src/pattern.eg", 16294, 16304))), ((share$14280 = 0)), ((idx$14281 = 0)), (((temp$14309 = blocks$14249)), ((($length$14315 = temp$14309.length)), ((($index$14321 = 0)), (function() {
          $14282: for (; ($index$14321 < $length$14315); ($index$14321++)) {
            var x$14358;
            var x$14368;
            var other$14379;
            var $14341$14347;
            var b$14338;
            var m$14330;
            (m$14330 = temp$14309[$index$14321]);
            (b$14338 = m$14330);
            if (same_block$11193([$15100(blocks0$14279, share$14280), b$14338], varsd0$14278, varsd$14248)) {
              (share$14280++);
              ($14341$14347 = b$14338);
              if ((((x$14358 = $14341$14347)), ((x$14358 instanceof Array) && (x$14358[0] === "do")))) {
                null;
              } else {
                if ((((x$14368 = $14341$14347)), ((x$14368 instanceof Array) && (x$14368[0] === "check")))) {
                  (idx$14281 = share$14280);
                } else {
                  (other$14379 = $14341$14347);
                  __lt____gt__$11174(null, other$14379);
                }
              }
            } else {
              break $14282;
            }
          }
        })()))), [share$14280, idx$14281]));
      } else {
        ___match_error(m$14234, "/home/olivier/git/earl-grey/src/pattern.eg", 16170, 16698);
      }
    };
    $14202: for (; ($index$14225 < $length$14219); ($index$14225++)) {
      $__1();
    }
  })()))), acc$14207));
  (max$14195 = $15100(Math.max, (((acc$14391 = [])), (((temp$14397 = shares$14194)), ((($length$14403 = temp$14397.length)), ((($index$14409 = 0)), (function() {
    $14386: for (; ($index$14409 < $length$14403); ($index$14409++)) {
      var x$14428;
      var t0$14423;
      var t1$14424;
      var m$14418;
      (m$14418 = temp$14397[$index$14409]);
      (t0$14423 = m$14418);
      if (((t0$14423 instanceof Array) && (((t1$14424 = t0$14423.length)), (t1$14424 === 2)))) {
        (x$14428 = t0$14423[0]);
        t0$14423[1];
        acc$14391.push(x$14428);
      } else {
        ___match_error(m$14418, "/home/olivier/git/earl-grey/src/pattern.eg", 16712, 16737);
      }
    }
  })()))), acc$14391)));
  shares$14194.push([0, 0]);
  (temps$14196 = (((acc$14451 = [])), (((temp$14457 = range(1, max$14195))), ((($length$14463 = temp$14457.length)), ((($index$14469 = 0)), (function() {
    $14446: for (; ($index$14469 < $length$14463); ($index$14469++)) {
      var m$14478;
      (m$14478 = temp$14457[$index$14469]);
      m$14478;
      acc$14451.push(["symbol", gensym$11179()]);
    }
  })()))), acc$14451));
  (shared_last$14197 = 0);
  (idx_last$14198 = 0);
  (new_clauses$14199 = (((acc$14503 = [])), (((temp$14509 = enumerate(clauses$14185))), ((($length$14515 = temp$14509.length)), ((($index$14521 = 0)), (function() {
    var $__2 = function() {
      var t0$14583;
      var t1$14584;
      var $index$14633;
      var $length$14627;
      var temp$14621;
      var acc$14615;
      var rest$14717;
      var newblocks$14712;
      var share$14577;
      var idx$14578;
      var shared$14579;
      var n_to_share$14580;
      var to_share$14581;
      var other$14724;
      var i$14542;
      var vars$14543;
      var varsd$14544;
      var blocks$14545;
      var body$14546;
      var t0$14535;
      var t1$14536;
      var t2$14537;
      var t3$14538;
      var m$14530;
      (m$14530 = temp$14509[$index$14521]);
      (t0$14535 = m$14530);
      if (((t0$14535 instanceof Array) && (((t1$14536 = t0$14535.length)), ((t1$14536 === 2) && ((i$14542 = t0$14535[0]), (((t2$14537 = t0$14535[1])), ((t2$14537 instanceof Array) && (((t3$14538 = t2$14537.length)), ((t3$14538 === 5) && (t2$14537[0] === "clause")))))))))) {
        (vars$14543 = t2$14537[1]);
        (varsd$14544 = t2$14537[2]);
        (blocks$14545 = t2$14537[3]);
        (body$14546 = t2$14537[4]);
        acc$14503.push(((((t0$14583 = $15100(shares$14194, i$14542))), (((t0$14583 instanceof Array) && (((t1$14584 = t0$14583.length)), (t1$14584 === 2))) ? ((share$14577 = t0$14583[0]), (idx$14578 = t0$14583[1])) : ___match_error($15100(shares$14194, i$14542), "/home/olivier/git/earl-grey/src/pattern.eg", 16970, 16979))), ((shared$14579 = (idx_last$14198 ? [["check", $15100(temps$14196, (idx_last$14198 - 1))]] : []))), ((n_to_share$14580 = Math.max(shared_last$14197, share$14577))), ((to_share$14581 = (((acc$14615 = [])), (((temp$14621 = enumerate(blocks$14545.slice(shared_last$14197, n_to_share$14580)))), ((($length$14627 = temp$14621.length)), ((($index$14633 = 0)), (function() {
          $14605: for (; ($index$14633 < $length$14627); ($index$14633++)) {
            var j$14685;
            var x$14686;
            var j$14658;
            var x$14659;
            var $14609$14652;
            var $14610$14653;
            var $14611$14654;
            var $14612$14655;
            var t0$14647;
            var t1$14648;
            var t2$14649;
            var t3$14650;
            var m$14642;
            (m$14642 = temp$14621[$index$14633]);
            (t0$14647 = m$14642);
            if ((($14610$14653 = (t0$14647 instanceof Array)) && (((t1$14648 = t0$14647.length)), (($14612$14655 = (t1$14648 === 2)) && ((j$14658 = t0$14647[0]), (((t2$14649 = t0$14647[1])), ((t2$14649 instanceof Array) && (((t3$14650 = t2$14649.length)), ((t3$14650 === 2) && (t2$14649[0] === "check")))))))))) {
              (x$14659 = t2$14649[1]);
              acc$14615.push(["check", ["assign", $15100(temps$14196, (shared_last$14197 + j$14658)), x$14659]]);
            } else {
              if (($14612$14655 && ((j$14685 = t0$14647[0]), (((t2$14649 = t0$14647[1])), ((t2$14649 instanceof Array) && (((t3$14650 = t2$14649.length)), ((t3$14650 === 2) && (t2$14649[0] === "do")))))))) {
                (x$14686 = t2$14649[1]);
                acc$14615.push(["do", x$14686]);
              } else {
                ___match_error(m$14642, "/home/olivier/git/earl-grey/src/pattern.eg", 17118, 17289);
              }
            }
          }
        })()))), acc$14615))), ((shared_last$14197 = share$14577)), ((idx_last$14198 = idx$14578)), (((newblocks$14712 = (((rest$14717 = blocks$14545.slice(n_to_share$14580))), shared$14579.concat(to_share$14581).concat(rest$14717)))), ["clause", vars$14543, varsd$14544, newblocks$14712, body$14546])));
      } else {
        (other$14724 = m$14530);
        acc$14503.push((function() {
          throw ErrorFactory(["oops"]).create("what", ({"value": other$14724}));
        })());
      }
    };
    $14497: for (; ($index$14521 < $length$14515); ($index$14521++)) {
      $__2();
    }
  })()))), acc$14503));
  return [temps$14196, new_clauses$14199];
}));
(weave_clauses$11196 = (function(parts$14733) {
  var $index$14798;
  var $length$14792;
  var temp$14786;
  var $index$15062;
  var $length$15056;
  var temp$15050;
  var acc$15044;
  var groups$14740;
  var reassemble$14741;
  var new_temps$14742;
  var helper$14743;
  (groups$14740 = classify_contiguous$11181(parts$14733, (function($14755$14758) {
    var t0$14762;
    var t1$14763;
    var cls$14760;
    (t0$14762 = $14755$14758);
    if (((t0$14762 instanceof Array) && (((t1$14763 = t0$14762.length)), (t1$14763 >= 1)))) {
      (cls$14760 = t0$14762[0]);
      Array.prototype.slice.call(t0$14762, 1);
    } else {
      ___match_error($14755$14758);
    }
    return cls$14760;
  })));
  (reassemble$14741 = []);
  (new_temps$14742 = []);
  (temp$14786 = groups$14740);
  ($length$14792 = temp$14786.length);
  ($index$14798 = 0);
  $14744: for (; ($index$14798 < $length$14792); ($index$14798++)) {
    var t0$14838;
    var t1$14839;
    var ts$14835;
    var new_clauses$14836;
    var elems$14854;
    var elems$14821;
    var $14748$14815;
    var $14749$14816;
    var $14750$14817;
    var $14751$14818;
    var t0$14812;
    var t1$14813;
    var m$14807;
    (m$14807 = temp$14786[$index$14798]);
    (t0$14812 = m$14807);
    if ((($14749$14816 = (t0$14812 instanceof Array)) && (((t1$14813 = t0$14812.length)), (($14751$14818 = (t1$14813 >= 1)) && (t0$14812[0] === "clause"))))) {
      (elems$14821 = Array.prototype.slice.call(t0$14812, 1));
      (t0$14838 = opt_clauses$11195(elems$14821));
      if (((t0$14838 instanceof Array) && (((t1$14839 = t0$14838.length)), (t1$14839 === 2)))) {
        (ts$14835 = t0$14838[0]);
        (new_clauses$14836 = t0$14838[1]);
      } else {
        ___match_error(opt_clauses$11195(elems$14821), "/home/olivier/git/earl-grey/src/pattern.eg", 17798, 17816);
      }
      (new_temps$14742 = new_temps$14742.concat(ts$14835));
      (reassemble$14741 = reassemble$14741.concat(new_clauses$14836));
    } else {
      if (($14751$14818 && (t0$14812[0] === "block"))) {
        (elems$14854 = Array.prototype.slice.call(t0$14812, 1));
        (reassemble$14741 = reassemble$14741.concat(elems$14854));
      } else {
        ___match_error(m$14807, "/home/olivier/git/earl-grey/src/pattern.eg", 17732, 17937);
      }
    }
  }
  (helper$14743 = (function($14862$14865) {
    var $index$14978;
    var $length$14972;
    var temp$14966;
    var acc$14960;
    var decls$14952;
    var vars$14943;
    var varsd$14944;
    var blocks$14945;
    var body$14946;
    var rest$14947;
    var body$14912;
    var rest$14913;
    var $14871$14895;
    var $14872$14896;
    var $14873$14897;
    var $14874$14898;
    var $14875$14899;
    var $14876$14900;
    var t0$14888;
    var t1$14889;
    var t2$14890;
    var t3$14891;
    var t4$14892;
    var t5$14893;
    var $14867$14883;
    var ph$14877;
    (ph$14877 = $14862$14865);
    ($14867$14883 = ph$14877);
    if ((($14871$14895 = ($14867$14883 instanceof Array)) && (((t0$14888 = $14867$14883.length)), (t0$14888 === 0)))) {
      return ["multi"];
    } else {
      if (($14871$14895 && (($14873$14897 = (t0$14888 >= 1)) && (((t1$14889 = $14867$14883[0])), (($14875$14899 = (t1$14889 instanceof Array)) && (((t2$14890 = t1$14889.length)), ((t2$14890 === 2) && ((t1$14889[0] === "block") && (((t3$14891 = getProjector(Body$11183)(t1$14889[1]))), (t3$14891[0] && (((t4$14892 = t3$14891[1])), (((t5$14893 = t4$14892.length)), (t5$14893 >= 0))))))))))))) {
        (body$14912 = Array.prototype.slice.call(t4$14892, 0));
        (rest$14913 = Array.prototype.slice.call($14867$14883, 1));
        return ["multi"].concat(body$14912).concat([helper$14743(rest$14913)]);
      } else {
        if (($14875$14899 && ((t2$14890 === 5) && (t1$14889[0] === "clause")))) {
          (vars$14943 = t1$14889[1]);
          (varsd$14944 = t1$14889[2]);
          (blocks$14945 = t1$14889[3]);
          (body$14946 = t1$14889[4]);
          (rest$14947 = Array.prototype.slice.call($14867$14883, 1));
          (decls$14952 = (((acc$14960 = [])), (((temp$14966 = vars$14943)), ((($length$14972 = temp$14966.length)), ((($index$14978 = 0)), (function() {
            $14955: for (; ($index$14978 < $length$14972); ($index$14978++)) {
              var bridge$15003$15011;
              var $14998$15006;
              var v$14995;
              var m$14987;
              (m$14987 = temp$14966[$index$14978]);
              (v$14995 = m$14987);
              acc$14960.push(((($14998$15006 = v$14995.declare_mode)), (($14998$15006 === "set") ? ["splice"] : (($14998$15006 === "let") ? ["declare", __amp__(v$14995, ({"mutable": false}))] : (($14998$15006 === "var") ? ["declare", __amp__(v$14995, ({"mutable": true}))] : (((bridge$15003$15011 = $14998$15006)), (((bridge$15003$15011 === "unqualified") || (bridge$15003$15011 === (void 0))) ? ["declare", __amp__(v$14995, ({"mutable": false}))] : (___match_error($14998$15006)))))))));
            }
          })()))), acc$14960));
          return ["tagscope", "back", ["multi"].concat(decls$14952).concat([assemble_pattern$11189(blocks$14945, body$14946, ["use", "back", helper$14743(rest$14947)])])];
        } else {
          ___match_error($14867$14883);
        }
      }
    }
  }));
  return ["multi"].concat((((acc$15044 = [])), (((temp$15050 = new_temps$14742)), ((($length$15056 = temp$15050.length)), ((($index$15062 = 0)), (function() {
    $15039: for (; ($index$15062 < $length$15056); ($index$15062++)) {
      var t$15079;
      var m$15071;
      (m$15071 = temp$15050[$index$15062]);
      (t$15079 = m$15071);
      acc$15044.push(["declare", t$15079]);
    }
  })()))), acc$15044)).concat([helper$14743(reassemble$14741)]);
}));
(exports["PatternParser"] = PatternParser$11186);
(exports["PatternProcessor"] = PatternProcessor$11187);
(exports["parse_clauses"] = parse_clauses$11194);
(exports["parse_pattern"] = parse_pattern$11191);
//# sourceURL=<compile-source>
