"use strict";
require("earlgrey-runtime");
var accum$18354;
var accum$18358;
var $index$18404;
var $length$18398;
var temp$18392;
var accum$19569;
var accum$19616;
var accum$19699;
var accum$19712;
var accum$19724;
var accum$19768;
var accum$19777;
var accum$19790;
var accum$20181;
var accum$20269;
var accum$20361;
var accum$20450;
var accum$20480;
var accum$20604;
var accum$20740;
var accum$20780;
var accum$20832;
var accum$20928;
var accum$21013;
var accum$21098;
var accum$21153;
var accum$21289;
var accum$21430;
var accum$21626;
var accum$21656;
var accum$21944;
var accum$21988;
var accum$22326;
var accum$22517;
var accum$22650;
var accum$23271;
var t0$23376;
var accum$23374;
var t0$23600;
var accum$23598;
var t0$23688;
var accum$23686;
var accum$23894;
var t0$24359;
var accum$24357;
var accum$24657;
var accum$24916;
var accum$24939;
var accum$24962;
var t0$25134;
var accum$25132;
var accum$25404;
var t0$25436;
var accum$25434;
var t0$25546;
var accum$25544;
var t0$25704;
var accum$25702;
var t0$25948;
var accum$25946;
var t0$26192;
var accum$26190;
var t0$26214;
var accum$26212;
var t0$26236;
var accum$26234;
var accum$26256;
var accum$26305;
var chk$26357;
var accum$26352;
var chk$26371;
var accum$26366;
var chk$26385;
var accum$26380;
var chk$26399;
var accum$26394;
var chk$26414;
var proj$26415;
var accum$26408;
var chk$26437;
var proj$26438;
var accum$26431;
var chk$26460;
var proj$26461;
var accum$26454;
var accum$26477;
var accum$26605;
var accum$26745;
var accum$26969;
var accum$27286;
var accum$27464;
var accum$27521;
var accum$28266;
var accum$28829;
var accum$28935;
var $index$28974;
var $length$28968;
var temp$20117;
var accum$30242;
var accum$30246;
var mac$30258;
var $index$30519;
var $length$30513;
var temp$30507;
var $18114$18181;
var __lt____gt__$18182;
var $18115$18183;
var __lt____lt____colon__$18184;
var util$18185;
var GenSym$18186;
var classify_contiguous$18187;
var Body$18188;
var $18117$18189;
var PatternParser$18190;
var PatternProcessor$18191;
var parse_pattern$18192;
var parse_clauses$18193;
var mt$18194;
var Expander$18195;
var Scope$18196;
var Env$18197;
var nullenv$18198;
var mac1$18199;
var checker_db$18200;
var generic_nodes$18201;
var mkid$18202;
var Embedded$18203;
var stdenv$18204;
var mkstdenv$18205;
var expander$18206;
var expand$18207;
var topscope$18208;
var embed_location$18209;
var error_embed_location$18210;
var match_error$18211;
var drop_ctx$18212;
var expr_mac$18213;
var expr_mac2$18214;
var _default_proj$18215;
var value_mac$18216;
var overridable$18217;
var protected_value$18218;
var setup_label$18219;
var break_mac$18220;
var continue_mac$18221;
var var_operator$18222;
var accum_flags$18223;
var pattern_constructors$18224;
var disregard_specials$18225;
var pattern_handlers$18226;
var build_loop$18227;
var partial_pattern$18228;
var make_assigner$18229;
var blocktest_wrap$18230;
var blocktest_mac$18231;
var qqstruct$18232;
var qq$18233;
var RegexBuilder$18234;
var build_regexp$18235;
var errf_macro$18236;
($18114$18181 = require("./pp"));
(__lt____gt__$18182 = $18114$18181["<>"]);
($18115$18183 = require("./location"));
(__lt____lt____colon__$18184 = $18115$18183["<<:"]);
(util$18185 = require("./util"));
(GenSym$18186 = util$18185.GenSym);
(classify_contiguous$18187 = util$18185.classify_contiguous);
(Body$18188 = util$18185.Body);
($18117$18189 = require("./pattern"));
(PatternParser$18190 = $18117$18189.PatternParser);
(PatternProcessor$18191 = $18117$18189.PatternProcessor);
(parse_pattern$18192 = $18117$18189.parse_pattern);
(parse_clauses$18193 = $18117$18189.parse_clauses);
(mt$18194 = require("./expand"));
(Expander$18195 = mt$18194.Expander);
(Scope$18196 = mt$18194.Scope);
(Env$18197 = mt$18194.Env);
(nullenv$18198 = mt$18194.nullenv);
(mac1$18199 = mt$18194["mac1"]);
(checker_db$18200 = mt$18194.checker_db);
(generic_nodes$18201 = ["if", "js_while", "js_for", "js_for_in", "js_for_of", "js_label", "js_break", "js_continue", "js_return", "js_delete", "js_throw", "js_try", "js_new", "js_yield"]);
(mkid$18202 = GenSym$18186("#"));
(Embedded$18203 = (function(code$18316) {
  var it$0$18319;
  (it$0$18319 = ((!getChecker(Embedded$18203)(this)) ? Object.create(Embedded$18203.prototype) : this));
  (it$0$18319["code"] = mkstdenv$18205().mark(code$18316));
  (it$0$18319["::id"] = mkid$18202());
  return it$0$18319;
}));
(Embedded$18203.prototype["::serialize_ast"] = (function() {
  var it$0$18342;
  var self$18343;
  (it$0$18342 = this);
  (self$18343 = this);
  return expand$18207(["top"], topscope$18208, it$0$18342.code);
}));
__amp____colon__(Embedded$18203, __amp____colon__(((accum$18354 = ({})), ((accum$18354["::name"] = "Embedded"), accum$18354)), ((accum$18358 = ({})), ((accum$18358["::egclass"] = true), accum$18358))));
Embedded$18203;
(stdenv$18204 = Env$18197());
(mkstdenv$18205 = (function() {
  var e$18372;
  (e$18372 = Env$18197());
  (e$18372.scopes["top"] = stdenv$18204.scopes.top);
  return e$18372;
}));
(expander$18206 = Expander$18195(mkstdenv$18205, generic_nodes$18201));
(expand$18207 = expander$18206.expand.bind(expander$18206));
(topscope$18208 = Scope$18196(null, "top", expander$18206));
(temp$18392 = ["+", "-", "*", "/", "mod", "&.", "|.", "^.", "and", "or", "not", "===", "!==", "<", ">", "<=", ">=", "<<", ">>", ">>>", "in", "instanceof", "--", "++", "typeof", "Array", "Object", "RegExp", "Function", "Date", "parseInt", "parseFloat", "Math", "Error", "TypeError", "ReferenceError", "console", "process", "eval", "setTimeout", "clearTimeout", "setInterval", "clearInterval", "___js_fetch", "___node", "arguments", "this", "exports", "send", "object", "keys", "items", "enumerate", "zip", "neighbours", "range", "predicate", "==", "!=", "equal", "nequal", "&", "&:", "clone", "dir", "getProjector", "getChecker", "ErrorFactory", "Node", "___build_array", "___hasprop", "___extend", "___match_error", "___serialize_ast", "Promise", "promisify", "spawn", "Buffer", "global"]);
($length$18398 = temp$18392.length);
($index$18404 = 0);
$18237: for (; ($index$18404 < $length$18398); ($index$18404++)) {
  var k$18421;
  var m$18413;
  (m$18413 = temp$18392[$index$18404]);
  (k$18421 = m$18413);
  stdenv$18204.bind(topscope$18208, k$18421, __amp__(["variable", k$18421], ({
    "mutable": false,
    "assigned": true
  })));
}
stdenv$18204.bind(topscope$18208, "pass", ["variable", "undefined"]);
(embed_location$18209 = (function($18426$18429) {
  var other$18469;
  var url$18450;
  var start$18451;
  var end$18452;
  var t0$18445;
  var t1$18446;
  var $18431$18440;
  var ph$18434;
  (ph$18434 = $18426$18429);
  ($18431$18440 = ph$18434);
  if ((___hasprop($18431$18440, "location") && (((t0$18445 = $18431$18440.location)), (___hasprop(t0$18445, "source") && (((t1$18446 = t0$18445.source)), (___hasprop(t1$18446, "url") && ((url$18450 = t1$18446.url), (___hasprop(t0$18445, "start") && ((start$18451 = t0$18445.start), ___hasprop(t0$18445, "end")))))))))) {
    (end$18452 = t0$18445.end);
    return ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "location"]]], ["data", ["value", url$18450], ["value", start$18451], ["value", end$18452]]];
  } else {
    (other$18469 = $18431$18440);
    return ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "location"]]], ["data", ["symbol", "null"], ["value", 0], ["value", 0]]];
  }
}));
(error_embed_location$18210 = (function(error$18476, target$18477) {
  return ["send", ["symbol", "throw"], ["send", ["symbol", "&:"], ["data", error$18476, ["data", ["send", ["symbol", "="], ["data", ["symbol", "location"], embed_location$18209(target$18477)]]]]]];
}));
(match_error$18211 = (function($18483$18486) {
  var t0$18494;
  var other$18532;
  var url$18513;
  var start$18514;
  var end$18515;
  var t0$18508;
  var t1$18509;
  var $18488$18503;
  var ph$18491;
  var target$18492;
  (t0$18494 = $18483$18486);
  (target$18492 = t0$18494);
  (ph$18491 = t0$18494);
  ($18488$18503 = ph$18491);
  if ((___hasprop($18488$18503, "location") && (((t0$18508 = $18488$18503.location)), (___hasprop(t0$18508, "source") && (((t1$18509 = t0$18508.source)), (___hasprop(t1$18509, "url") && ((url$18513 = t1$18509.url), (___hasprop(t0$18508, "start") && ((start$18514 = t0$18508.start), ___hasprop(t0$18508, "end")))))))))) {
    (end$18515 = t0$18508.end);
    return ["send", ["symbol", "___match_error"], ["data", target$18492, ["value", url$18513], ["value", start$18514], ["value", end$18515]]];
  } else {
    (other$18532 = $18488$18503);
    return ["send", ["symbol", "___match_error"], ["data", other$18532]];
  }
}));
(drop_ctx$18212 = (function(f$18539) {
  return (function(context$18543, scope$18544, form$18545, arg$18546) {
    var rval$18552;
    (rval$18552 = false);
    try {
      (rval$18552 = f$18539(context$18543, scope$18544, form$18545, arg$18546));
    } catch (excv$18563) {
      var t0$18600;
      var e$18613;
      var t0$18566;
      var t1$18567;
      var t2$18568;
      var t3$18569;
      var t4$18570;
      (t0$18566 = excv$18563);
      if ((getChecker(ErrorFactory(["match"]))(t0$18566) && (___hasprop(t0$18566, "args") && (((t1$18567 = t0$18566.args)), ((t1$18567 instanceof Array) && (((t2$18568 = t1$18567.length)), ((t2$18568 === 1) && (((t3$18569 = t1$18567[0])), (___hasprop(t3$18569, "value") && (((t4$18570 = t3$18569.value)), ((t4$18570 === context$18543) && (!((t4$18570 instanceof Array) && (((t0$18600 = t4$18570.length)), ((t0$18600 === 2) && ((t4$18570[0] === "expr") && (t4$18570[1] === "expr"))))))))))))))))) {
        (rval$18552 = ["nostep", form$18545]);
      } else {
        (e$18613 = excv$18563);
        (rval$18552 = (function() {
          throw e$18613;
        })());
      }
    }
    return rval$18552;
  });
}));
(expr_mac$18213 = (function(f$18624) {
  return (function($18627$18630, scope$18631, form$18632, arg$18633) {
    var t0$18660;
    var t0$18667;
    var otherwise$18676;
    var bridge$18637$18650;
    var $18635$18645;
    var ph$18639;
    (ph$18639 = $18627$18630);
    ($18635$18645 = ph$18639);
    (bridge$18637$18650 = $18635$18645);
    if ((((bridge$18637$18650 instanceof Array) && (((t0$18660 = bridge$18637$18650.length)), ((t0$18660 === 2) && ((bridge$18637$18650[0] === "expr") && (bridge$18637$18650[1] === "expr"))))) || ((bridge$18637$18650 instanceof Array) && (((t0$18667 = bridge$18637$18650.length)), ((t0$18667 === 2) && ((bridge$18637$18650[0] === "expr") && (bridge$18637$18650[1] === "head"))))))) {
      return f$18624(scope$18631, form$18632, arg$18633);
    } else {
      (otherwise$18676 = $18635$18645);
      return ["nostep", form$18632];
    }
  });
}));
(expr_mac2$18214 = (function(mac$18683) {
  return (function($18686$18689, s$18690, f$18691, e$18692) {
    var x$18730;
    var mac3$18737;
    var x$18801;
    var $18696$18715;
    var t0$18711;
    var $18694$18706;
    var ph$18700;
    (ph$18700 = $18686$18689);
    ($18694$18706 = ph$18700);
    if ((($18694$18706 instanceof Array) && (((t0$18711 = $18694$18706.length)), ((t0$18711 === 2) && ($18694$18706[0] === "project"))))) {
      ($18696$18715 = $18694$18706[1]);
      if ((((x$18730 = $18696$18715)), ((x$18730 instanceof Array) && (x$18730[0] === "pattern")))) {
        (mac3$18737 = (function(c$18744, s$18745, f$18746, $18741$18747) {
          var t0$18754;
          var t1$18755;
          var x$18790;
          var env$18779;
          var x$18780;
          var t0$18775;
          var $18749$18770;
          var ph$18752;
          (t0$18754 = $18741$18747);
          if (((t0$18754 instanceof Array) && (((t1$18755 = t0$18754.length)), ((t1$18755 === 2) && (t0$18754[0] === "data"))))) {
            (ph$18752 = t0$18754[1]);
          } else {
            ___match_error($18741$18747);
          }
          ($18749$18770 = ph$18752);
          if ((($18749$18770 instanceof Array) && (((t0$18775 = $18749$18770.length)), ((t0$18775 === 3) && ($18749$18770[0] === "use"))))) {
            (env$18779 = $18749$18770[1]);
            (x$18780 = $18749$18770[2]);
            return ["use", env$18779, mac$18683(__lt____lt____colon__$18184(["data", x$18780], e$18692))];
          } else {
            (x$18790 = $18749$18770);
            return mac$18683(__lt____lt____colon__$18184(["data", x$18790], x$18790));
          }
        }));
        return ["unconditional", ["macro", mac3$18737]];
      } else {
        $18696$18715;
        return mac$18683(e$18692);
      }
    } else {
      if ((((x$18801 = $18694$18706)), ((x$18801 instanceof Array) && (x$18801[0] === "expr")))) {
        return mac$18683(e$18692);
      } else {
        ___match_error($18694$18706);
      }
    }
  });
}));
(_default_proj$18215 = (function(name$18813) {
  return (function(x$18817) {
    return ["send", ["symbol", "throw"], ["send", ["send", ["symbol", "E"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "project"]]]], ["data", ["send", ["symbol", "+"], ["data", ["send", ["symbol", "+"], ["data", ["value", "Cannot project a value with '"], ["value", name$18813]]], ["value", "!'"]]]]]];
  });
}));
(value_mac$18216 = (function() {
  var name$18837;
  var chk$18838;
  var proj$18839;
  var t0$18833;
  var $18824$18828;
  ($18824$18828 = arguments);
  (t0$18833 = $18824$18828.length);
  if (((t0$18833 >= 2) && (t0$18833 <= 3))) {
    (name$18837 = $18824$18828[0]);
    (chk$18838 = $18824$18828[1]);
    (proj$18839 = ((2 >= t0$18833) ? _default_proj$18215(name$18837) : $18824$18828[2]));
    return (function($18847$18850, scope$18851, form$18852, arg$18853) {
      var t0$18862;
      var x$18882;
      var m$18889;
      var x$18935;
      var m$18942;
      var x$19003;
      var $18987$18992;
      var ctx$18985;
      var $18855$18871;
      var ph$18859;
      var ctx$18860;
      (t0$18862 = $18847$18850);
      (ctx$18860 = t0$18862);
      (ph$18859 = t0$18862);
      ($18855$18871 = ph$18859);
      if ((((x$18882 = $18855$18871)), ((x$18882 instanceof Array) && (x$18882[0] === "check")))) {
        (m$18889 = (function() {
          var x$18909;
          var t0$18903;
          var t1$18904;
          var t2$18905;
          var $18894$18898;
          ($18894$18898 = arguments);
          (t0$18903 = $18894$18898.length);
          if (((t0$18903 >= 1) && (Array.prototype.slice.call($18894$18898, 0, -1), (((t1$18904 = $18894$18898[(t0$18903 - 1)])), ((t1$18904 instanceof Array) && (((t2$18905 = t1$18904.length)), ((t2$18905 === 2) && (t1$18904[0] === "data")))))))) {
            (x$18909 = t1$18904[1]);
            return chk$18838(x$18909);
          } else {
            ___match_error($18894$18898);
          }
        }));
        return ["nostep", ["macro", m$18889]];
      } else {
        if ((((x$18935 = $18855$18871)), ((x$18935 instanceof Array) && (x$18935[0] === "project")))) {
          (m$18942 = (function() {
            var x$18962;
            var t0$18956;
            var t1$18957;
            var t2$18958;
            var $18947$18951;
            ($18947$18951 = arguments);
            (t0$18956 = $18947$18951.length);
            if (((t0$18956 >= 1) && (Array.prototype.slice.call($18947$18951, 0, -1), (((t1$18957 = $18947$18951[(t0$18956 - 1)])), ((t1$18957 instanceof Array) && (((t2$18958 = t1$18957.length)), ((t2$18958 === 2) && (t1$18957[0] === "data")))))))) {
              (x$18962 = t1$18957[1]);
              return proj$18839(x$18962);
            } else {
              ___match_error($18947$18951);
            }
          }));
          return ["nostep", ["macro", m$18942]];
        } else {
          (ctx$18985 = $18855$18871);
          ($18987$18992 = arg$18853);
          if ((((x$19003 = $18987$18992)), ((x$19003 instanceof Array) && (x$19003[0] === "void")))) {
            return ["variable", name$18837];
          } else {
            $18987$18992;
            return ["send", ["variable", name$18837], arg$18853];
          }
        }
      }
    });
  } else {
    ___match_error($18824$18828);
  }
}));
(overridable$18217 = (function(f$19018) {
  return (function($19021$19024, scope$19025, form$19026, arg$19027) {
    var t0$19036;
    var x$19057;
    var other$19073;
    var t0$19050;
    var $19029$19045;
    var ph$19033;
    var context$19034;
    (t0$19036 = $19021$19024);
    (context$19034 = t0$19036);
    (ph$19033 = t0$19036);
    ($19029$19045 = ph$19033);
    if ((((x$19057 = $19029$19045)), ((x$19057 instanceof Array) && (x$19057[0] === "pattern")))) {
      return ["nostep", form$19026];
    } else {
      if ((($19029$19045 instanceof Array) && (((t0$19050 = $19029$19045.length)), ((t0$19050 === 2) && (($19029$19045[0] === "expr") && ($19029$19045[1] === "multi")))))) {
        return ["nostep", form$19026];
      } else {
        (other$19073 = $19029$19045);
        return f$19018(context$19034, scope$19025, form$19026, arg$19027);
      }
    }
  });
}));
(protected_value$18218 = (function(name$19080, value$19081) {
  return (function($19084$19087, scope$19088, form$19089, arg$19090) {
    var x$19112;
    var other$19144;
    var t0$19131;
    var $19121$19126;
    var other$19119;
    var $19092$19101;
    var ph$19095;
    (ph$19095 = $19084$19087);
    ($19092$19101 = ph$19095);
    if ((((x$19112 = $19092$19101)), ((x$19112 instanceof Array) && (x$19112[0] === "pattern")))) {
      throw ErrorFactory(["syntax", "pattern"]).create((("'" + name$19080) + "' is not a valid pattern and cannot be redeclared"));
    } else {
      (other$19119 = $19092$19101);
      ($19121$19126 = arg$19090);
      if ((($19121$19126 instanceof Array) && (((t0$19131 = $19121$19126.length)), ((t0$19131 === 1) && ($19121$19126[0] === "void"))))) {
        return ["value", value$19081];
      } else {
        (other$19144 = $19121$19126);
        return ["send", ["value", value$19081], arg$19090];
      }
    }
  });
}));
(setup_label$18219 = (function(label$19151, env$19152, body$19153) {
  return ["bind", __amp__(["symbol", "break"], ({"env": env$19152})), ["macro", break_mac$18220(label$19151)], ["bind", __amp__(["symbol", "continue"], ({"env": env$19152})), ["macro", continue_mac$18221(label$19151)], ["js_label", ["value", label$19151], body$19153]]];
}));
(break_mac$18220 = (function(default_label$19160) {
  return overridable$18217((function(context$19166, scope$19167, form$19168, $19163$19169) {
    var t0$19183;
    var v$19223;
    var v$19218;
    var $19176$19199;
    var $19177$19200;
    var $19178$19201;
    var $19179$19202;
    var t0$19197;
    var $19171$19192;
    var ph$19180;
    var expr$19181;
    (t0$19183 = $19163$19169);
    (expr$19181 = t0$19183);
    (ph$19180 = t0$19183);
    ($19171$19192 = ph$19180);
    if ((($19176$19199 = ($19171$19192 instanceof Array)) && (((t0$19197 = $19171$19192.length)), (($19178$19201 = (t0$19197 === 1)) && (($19179$19202 = ($19171$19192[0] === "void")) && default_label$19160))))) {
      return ["js_break", ["value", default_label$19160]];
    } else {
      if ($19179$19202) {
        return ["js_break"];
      } else {
        if (($19176$19199 && (($19178$19201 = (t0$19197 === 2)) && ($19171$19192[0] === "value")))) {
          (v$19218 = $19171$19192[1]);
          return ["js_break", expr$19181];
        } else {
          if (($19178$19201 && ($19171$19192[0] === "symbol"))) {
            (v$19223 = $19171$19192[1]);
            return ["js_break", ["value", v$19223]];
          } else {
            ___match_error($19171$19192);
          }
        }
      }
    }
  }));
}));
(continue_mac$18221 = (function(default_label$19233) {
  return overridable$18217((function(context$19239, scope$19240, form$19241, $19236$19242) {
    var t0$19256;
    var v$19296;
    var v$19291;
    var $19249$19272;
    var $19250$19273;
    var $19251$19274;
    var $19252$19275;
    var t0$19270;
    var $19244$19265;
    var ph$19253;
    var expr$19254;
    (t0$19256 = $19236$19242);
    (expr$19254 = t0$19256);
    (ph$19253 = t0$19256);
    ($19244$19265 = ph$19253);
    if ((($19249$19272 = ($19244$19265 instanceof Array)) && (((t0$19270 = $19244$19265.length)), (($19251$19274 = (t0$19270 === 1)) && (($19252$19275 = ($19244$19265[0] === "void")) && default_label$19233))))) {
      return ["js_continue", ["value", default_label$19233]];
    } else {
      if ($19252$19275) {
        return ["js_continue"];
      } else {
        if (($19249$19272 && (($19251$19274 = (t0$19270 === 2)) && ($19244$19265[0] === "value")))) {
          (v$19291 = $19244$19265[1]);
          return ["js_continue", expr$19254];
        } else {
          if (($19251$19274 && ($19244$19265[0] === "symbol"))) {
            (v$19296 = $19244$19265[1]);
            return ["js_continue", ["value", v$19296]];
          } else {
            ___match_error($19244$19265);
          }
        }
      }
    }
  }));
}));
(var_operator$18222 = (function(name$19306) {
  return (function(context$19310, scope$19311, form$19312, expr$19313) {
    var t0$19329;
    var x$19366;
    var other$19391;
    var s$19377;
    var t0$19372;
    var t1$19373;
    var $19321$19362;
    var $19324$19349;
    var $19325$19350;
    var t0$19347;
    var $19318$19342;
    var env$19326;
    var sym$19327;
    (t0$19329 = form$19312);
    if (___hasprop(t0$19329, "env")) {
      (env$19326 = t0$19329.env);
    } else {
      ___match_error(form$19312, "/home/olivier/git/earl-grey/src/stdenv.eg", 4858, 4862);
    }
    (sym$19327 = __amp__(["symbol", name$19306], ({"env": env$19326})));
    ($19318$19342 = expr$19313);
    if ((($19324$19349 = ($19318$19342 instanceof Array)) && (((t0$19347 = $19318$19342.length)), ((t0$19347 === 1) && ($19318$19342[0] === "void"))))) {
      return sym$19327;
    } else {
      if (($19324$19349 && ((t0$19347 === 3) && (($19318$19342[0] === "data") && (((x$19366 = $19318$19342[1])), ((x$19366 instanceof Array) && (x$19366[0] === "void"))))))) {
        ($19321$19362 = $19318$19342[2]);
        (t0$19372 = $19321$19362);
        if (((t0$19372 instanceof Array) && (((t1$19373 = t0$19372.length)), ((t1$19373 === 2) && (t0$19372[0] === "symbol"))))) {
          (s$19377 = t0$19372[1]);
          return ["send", sym$19327, ["value", s$19377]];
        } else {
          (other$19391 = $19321$19362);
          return ["send", sym$19327, other$19391];
        }
      } else {
        ___match_error($19318$19342);
      }
    }
  });
}));
(accum_flags$18223 = (function() {
  var make$19423;
  var mac$19413;
  var also_values$19414;
  var t0$19409;
  var $19400$19404;
  ($19400$19404 = arguments);
  (t0$19409 = $19400$19404.length);
  if (((t0$19409 >= 1) && (t0$19409 <= 2))) {
    (mac$19413 = $19400$19404[0]);
    (also_values$19414 = ((1 >= t0$19409) ? true : $19400$19404[1]));
    (make$19423 = (function(flags$19428) {
      return (function(context$19434, scope$19435, form$19436, $19431$19437) {
        var other$19526;
        var flag$19481;
        var flag$19470;
        var $19443$19466;
        var $19444$19467;
        var t0$19456;
        var t1$19457;
        var t2$19458;
        var t3$19459;
        var t4$19460;
        var t5$19461;
        var t6$19462;
        var t7$19463;
        var t8$19464;
        var $19439$19451;
        var ph$19445;
        (ph$19445 = $19431$19437);
        ($19439$19451 = ph$19445);
        if ((($19443$19466 = ($19439$19451 instanceof Array)) && (((t0$19456 = $19439$19451.length)), ((t0$19456 === 2) && (($19439$19451[0] === "value") && ((flag$19470 = $19439$19451[1]), also_values$19414)))))) {
          return ["macro", make$19423(flags$19428.concat([flag$19470]))];
        } else {
          if (($19443$19466 && ((t0$19456 === 3) && (($19439$19451[0] === "send") && (((t1$19457 = $19439$19451[1])), ((t1$19457 instanceof Array) && (((t2$19458 = t1$19457.length)), ((t2$19458 === 2) && ((t1$19457[0] === "symbol") && ((t1$19457[1] === ".") && (((t3$19459 = $19439$19451[2])), ((t3$19459 instanceof Array) && (((t4$19460 = t3$19459.length)), ((t4$19460 === 3) && ((t3$19459[0] === "data") && (((t5$19461 = t3$19459[1])), ((t5$19461 instanceof Array) && (((t6$19462 = t5$19461.length)), ((t6$19462 === 1) && ((t5$19461[0] === "void") && (((t7$19463 = t3$19459[2])), ((t7$19463 instanceof Array) && (((t8$19464 = t7$19463.length)), ((t8$19464 === 2) && (t7$19463[0] === "symbol"))))))))))))))))))))))))) {
            (flag$19481 = t7$19463[1]);
            return ["macro", make$19423(flags$19428.concat([flag$19481]))];
          } else {
            (other$19526 = $19439$19451);
            return mac$19413(context$19434, scope$19435, form$19436, other$19526, flags$19428);
          }
        }
      });
    }));
    return make$19423([]);
  } else {
    ___match_error($19400$19404);
  }
}));
(pattern_constructors$18224 = ({}));
(disregard_specials$18225 = (function($19538$19541, value$19542) {
  var t0$19547;
  var t1$19548;
  var kind$19544;
  var expr$19545;
  (t0$19547 = $19538$19541);
  if (((t0$19547 instanceof Array) && (((t1$19548 = t0$19547.length)), ((t1$19548 === 2) && (t0$19547[0] === "special"))))) {
    (kind$19544 = t0$19547[1]);
    (expr$19545 = t0$19547);
  } else {
    ___match_error($19538$19541);
  }
  throw ErrorFactory(["syntax", "pattern", "special"]).create("Special token cannot be used here", ({"special": expr$19545}));
}));
(pattern_handlers$18226 = ({
  "declare_variables": __amp____colon__(({
    "allow_nested": true,
    "allow_arguments": true,
    "special": disregard_specials$18225
  }), __amp____colon__(((accum$19569 = ({})), ((accum$19569["assign"] = (function($19573$19576, value$19577) {
    var t0$19585;
    var v$19613;
    var name$19603;
    var t0$19599;
    var $19579$19594;
    var ph$19582;
    var v$19583;
    (t0$19585 = $19573$19576);
    (v$19583 = t0$19585);
    (ph$19582 = t0$19585);
    ($19579$19594 = ph$19582);
    if ((($19579$19594 instanceof Array) && (((t0$19599 = $19579$19594.length)), ((t0$19599 === 2) && ($19579$19594[0] === "symbol"))))) {
      (name$19603 = $19579$19594[1]);
      return ["do", __lt____lt____colon__$18184(["assign", v$19583, __amp____colon__(value$19577, ({"name": name$19603}))], v$19583)];
    } else {
      (v$19613 = $19579$19594);
      return ["do", __lt____lt____colon__$18184(["assign", v$19613, value$19577], v$19613)];
    }
  })), accum$19569)), __amp____colon__(({
    "finalize": true,
    "tags": ({"declare_mode": "unqualified"})
  }), __amp____colon__(((accum$19616 = ({})), ((accum$19616["declare"] = (function(scope$19621, vars$19622) {
    var $index$19647;
    var $length$19641;
    var temp$19635;
    var acc$19629;
    (acc$19629 = []);
    (temp$19635 = vars$19622);
    ($length$19641 = temp$19635.length);
    ($index$19647 = 0);
    $19624: for (; ($index$19647 < $length$19641); ($index$19647++)) {
      var $19667$19674;
      var v$19664;
      var m$19656;
      (m$19656 = temp$19635[$index$19647]);
      (v$19664 = m$19656);
      acc$19629.push(((($19667$19674 = v$19664.declare_mode)), (($19667$19674 === "set") ? ["splice"] : (($19667$19674 === "let") ? ["declare", __amp__(v$19664, ({"mutable": false}))] : (($19667$19674 === "var") ? ["declare", __amp__(v$19664, ({"mutable": true}))] : (($19667$19674 === "unqualified") ? ["declare", __amp__(v$19664, ({
        "mutable": false,
        "use_previous": true
      }))] : (___match_error($19667$19674))))))));
    }
    return acc$19629;
  })), accum$19616)), __amp____colon__(((accum$19699 = ({})), ((accum$19699["success"] = (function($19703$19706) {
    $19703$19706;
    return ["multi"];
  })), accum$19699)), ((accum$19712 = ({})), ((accum$19712["failure"] = (function(target$19717) {
    return match_error$18211(target$19717);
  })), accum$19712))))))),
  "build_object": __amp____colon__(({
    "strings_as_variables": true,
    "allow_nested": true,
    "allow_arguments": true,
    "special": disregard_specials$18225
  }), __amp____colon__(((accum$19724 = ({})), ((accum$19724["assign"] = (function($19728$19734, value$19735, $19731$19736) {
    var t0$19747;
    var t0$19755;
    var bridge$19730$19740;
    var v$19738;
    (bridge$19730$19740 = $19728$19734);
    if ((((bridge$19730$19740 instanceof Array) && (((t0$19747 = bridge$19730$19740.length)), ((t0$19747 === 2) && ((bridge$19730$19740[0] === "symbol") && ((v$19738 = bridge$19730$19740[1]), true))))) || ((bridge$19730$19740 instanceof Array) && (((t0$19755 = bridge$19730$19740.length)), ((t0$19755 === 2) && ((bridge$19730$19740[0] === "value") && ((v$19738 = bridge$19730$19740[1]), true))))))) {} else {
      ___match_error($19728$19734);
    }
    $19731$19736;
    return ["do", __lt____lt____colon__$18184(["assign", ["send", ["symbol", "accum"], ["value", v$19738]], value$19735], v$19738)];
  })), accum$19724)), __amp____colon__(({"finalize": true}), __amp____colon__(((accum$19768 = ({})), ((accum$19768["declare"] = (function(scope$19773, vars$19774) {
    return [["declare", ["symbol", "accum"], ["data", ["symbol", "="]]]];
  })), accum$19768)), __amp____colon__(((accum$19777 = ({})), ((accum$19777["success"] = (function($19781$19784) {
    $19781$19784;
    return ["symbol", "accum"];
  })), accum$19777)), ((accum$19790 = ({})), ((accum$19790["failure"] = (function(target$19795) {
    return match_error$18211(target$19795);
  })), accum$19790)))))))
}));
(build_loop$18227 = (function(scope$19802, env$19803, form$19804, li$19805, clauses$19806, wrap$19807, pre$19808, post$19809, opt$19810) {
  var t0$19837;
  var t0$19884;
  var accum$19938;
  var lbl$19820;
  var i$19821;
  var len$19822;
  var first_mac$19823;
  var last_mac$19824;
  var newscope$19825;
  var m$19826;
  (lbl$19820 = (env$19803 ? __amp__(["value", scope$19802.gensym()], ({"env": env$19803})) : ["value", scope$19802.gensym()]));
  (i$19821 = __amp__(["symbol", "$index"], ({"env": env$19803})));
  (len$19822 = __amp__(["symbol", "$length"], ({"env": env$19803})));
  (t0$19837 = getProjector(drop_ctx$18212)((function($19843$19846, scope$19847, form$19848, subp$19849) {
    var x$19855;
    if ((((x$19855 = $19843$19846)), ((x$19855 instanceof Array) && (x$19855[0] === "pattern")))) {} else {
      ___match_error($19843$19846);
    }
    return ["test", ["send", ["symbol", "==="], ["data", i$19821, ["value", 0]]], subp$19849];
  })));
  if (t0$19837[0]) {
    (first_mac$19823 = t0$19837[1]);
  } else {
    ___match_error((function($19865$19868, scope$19869, form$19870, subp$19871) {
      var x$19877;
      if ((((x$19877 = $19865$19868)), ((x$19877 instanceof Array) && (x$19877[0] === "pattern")))) {} else {
        ___match_error($19865$19868);
      }
      return ["test", ["send", ["symbol", "==="], ["data", i$19821, ["value", 0]]], subp$19871];
    }));
  }
  (t0$19884 = getProjector(drop_ctx$18212)((function($19890$19893, scope$19894, form$19895, subp$19896) {
    var x$19902;
    if ((((x$19902 = $19890$19893)), ((x$19902 instanceof Array) && (x$19902[0] === "pattern")))) {} else {
      ___match_error($19890$19893);
    }
    return ["test", ["send", ["symbol", "==="], ["data", i$19821, ["send", ["symbol", "-"], ["data", len$19822, ["value", 1]]]]], subp$19896];
  })));
  if (t0$19884[0]) {
    (last_mac$19824 = t0$19884[1]);
  } else {
    ___match_error((function($19912$19915, scope$19916, form$19917, subp$19918) {
      var x$19924;
      if ((((x$19924 = $19912$19915)), ((x$19924 instanceof Array) && (x$19924[0] === "pattern")))) {} else {
        ___match_error($19912$19915);
      }
      return ["test", ["send", ["symbol", "==="], ["data", i$19821, ["send", ["symbol", "-"], ["data", len$19822, ["value", 1]]]]], subp$19918];
    }));
  }
  (newscope$19825 = Scope$18196(scope$19802));
  env$19803.bind(newscope$19825, "first", ["macro", first_mac$19823]);
  env$19803.bind(newscope$19825, "last", ["macro", last_mac$19824]);
  (m$19826 = __lt____lt____colon__$18184(["symbol", "m"], form$19804));
  return ["multi", pre$19808, ["send", ["symbol", "let"], ["data", ["multi", ["send", ["symbol", "="], ["data", ["symbol", "temp"], li$19805]], ["send", ["symbol", "="], ["data", len$19822, ["send", ["symbol", "temp"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "length"]]]]]]], ["send", ["send", ["symbol", "for"], lbl$19820], ["data", ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], i$19821], ["value", 0]]], ["send", ["symbol", "<"], ["data", i$19821, len$19822]], ["send", ["symbol", "++"], ["data", i$19821, ["void"]]]], ["multi", ["send", ["symbol", "="], ["data", m$19826, ["send", ["symbol", "___js_fetch"], ["data", ["symbol", "temp"], i$19821]]]], parse_clauses$18193(newscope$19825, m$19826, clauses$19806, __amp__(opt$19810, ((accum$19938 = ({})), ((accum$19938["wrap"] = (function(x$19943) {
    return wrap$19807(x$19943, i$19821);
  })), accum$19938))))]]]]], post$19809];
}));
(partial_pattern$18228 = (function(operator$19950) {
  var x$19974;
  var $19958$19963;
  var op$19955;
  (op$19955 = ((($19958$19963 = operator$19950)), ((((x$19974 = $19958$19963)), ((x$19974 instanceof Array) && (x$19974[0] === "symbol"))) ? operator$19950 : ((typeof($19958$19963) === "string") ? ["variable", operator$19950] : (___match_error($19958$19963))))));
  return (function(context$19987, scope$19988, form$19989, expr$19990) {
    var x$20026;
    var m$20053;
    var other$20078;
    var val$20017;
    var $19996$20012;
    var $19997$20013;
    var $19998$20014;
    var t0$20006;
    var t1$20007;
    var t2$20008;
    var t3$20009;
    var t4$20010;
    var $19992$20001;
    ($19992$20001 = [context$19987, expr$19990]);
    if ((($19996$20012 = ($19992$20001 instanceof Array)) && (((t0$20006 = $19992$20001.length)), (($19998$20014 = (t0$20006 === 2)) && ((((x$20026 = $19992$20001[0])), ((x$20026 instanceof Array) && (x$20026[0] === "pattern"))) && (((t1$20007 = $19992$20001[1])), ((t1$20007 instanceof Array) && (((t2$20008 = t1$20007.length)), ((t2$20008 === 3) && ((t1$20007[0] === "data") && (((t3$20009 = t1$20007[1])), ((t3$20009 instanceof Array) && (((t4$20010 = t3$20009.length)), ((t4$20010 === 1) && (t3$20009[0] === "void"))))))))))))))) {
      (val$20017 = t1$20007[2]);
      (m$20053 = mac1$18199((function(x$20058) {
        return ["send", op$19955, ["data", x$20058, val$20017]];
      })));
      return ["check", m$20053, ["ignore"]];
    } else {
      if (($19998$20014 && ($19992$20001[0], (((t1$20007 = $19992$20001[1])), ((t1$20007 instanceof Array) && (((t2$20008 = t1$20007.length)), ((t2$20008 === 1) && (t1$20007[0] === "void")))))))) {
        return op$19955;
      } else {
        (other$20078 = $19992$20001);
        return ["send", op$19955, expr$19990];
      }
    }
  });
}));
(make_assigner$18229 = (function(op$20085) {
  return (function(context$20091, scope$20092, form$20093, $20088$20094) {
    var t0$20099;
    var t1$20100;
    var a$20096;
    var b$20097;
    (t0$20099 = $20088$20094);
    if (((t0$20099 instanceof Array) && (((t1$20100 = t0$20099.length)), ((t1$20100 === 3) && (t0$20099[0] === "data"))))) {
      (a$20096 = t0$20099[1]);
      (b$20097 = t0$20099[2]);
    } else {
      ___match_error($20088$20094);
    }
    return ["assign", a$20096, ["send", ["symbol", op$20085], ["data", a$20096, b$20097]]];
  });
}));
(temp$20117 = items(__amp____colon__(({
  "true": protected_value$18218("true", true),
  "false": protected_value$18218("false", false),
  "null": protected_value$18218("null", null),
  "undefined": protected_value$18218("undefined", undefined),
  "===": partial_pattern$18228("==="),
  "!==": partial_pattern$18228("!=="),
  "==": partial_pattern$18228("equal"),
  "!=": partial_pattern$18228("nequal"),
  "<=": partial_pattern$18228("<="),
  ">=": partial_pattern$18228(">="),
  "<": partial_pattern$18228("<"),
  ">": partial_pattern$18228(">")
}), __amp____colon__(((accum$20181 = ({})), ((accum$20181["-"] = (function(context$20188, scope$20189, form$20190, $20185$20191) {
  var t0$20202;
  var other$20266;
  var n$20227;
  var $20197$20223;
  var $20198$20224;
  var t0$20216;
  var t1$20217;
  var t2$20218;
  var t3$20219;
  var t4$20220;
  var t5$20221;
  var $20193$20211;
  var ph$20199;
  var expr$20200;
  (t0$20202 = $20185$20191);
  (expr$20200 = t0$20202);
  (ph$20199 = t0$20202);
  ($20193$20211 = ph$20199);
  if ((($20197$20223 = ($20193$20211 instanceof Array)) && (((t0$20216 = $20193$20211.length)), ((t0$20216 === 3) && (($20193$20211[0] === "data") && (((t1$20217 = $20193$20211[1])), ((t1$20217 instanceof Array) && (((t2$20218 = t1$20217.length)), ((t2$20218 === 1) && ((t1$20217[0] === "void") && (((t3$20219 = $20193$20211[2])), ((t3$20219 instanceof Array) && (((t4$20220 = t3$20219.length)), ((t4$20220 === 2) && ((t3$20219[0] === "value") && (((t5$20221 = t3$20219[1])), (typeof(t5$20221) === "number"))))))))))))))))) {
    (n$20227 = t5$20221);
    return ["value", (-n$20227)];
  } else {
    if (($20197$20223 && ((t0$20216 === 1) && ($20193$20211[0] === "void")))) {
      return ["variable", "-"];
    } else {
      (other$20266 = $20193$20211);
      return ["send", ["variable", "-"], expr$20200];
    }
  }
})), accum$20181)), __amp____colon__(((accum$20269 = ({})), ((accum$20269["++"] = (function(context$20276, scope$20277, form$20278, $20273$20279) {
  var other$20358;
  var x$20348;
  var y$20349;
  var x$20332;
  var x$20312;
  var $20287$20306;
  var $20288$20307;
  var $20289$20308;
  var $20290$20309;
  var t0$20302;
  var t1$20303;
  var t2$20304;
  var $20281$20297;
  var ph$20291;
  (ph$20291 = $20273$20279);
  ($20281$20297 = ph$20291);
  if ((($20287$20306 = ($20281$20297 instanceof Array)) && (((t0$20302 = $20281$20297.length)), (($20289$20308 = (t0$20302 === 3)) && (($20290$20309 = ($20281$20297[0] === "data")) && (((t1$20303 = $20281$20297[1])), ((t1$20303 instanceof Array) && (((t2$20304 = t1$20303.length)), ((t2$20304 === 1) && (t1$20303[0] === "void")))))))))) {
    (x$20312 = $20281$20297[2]);
    return ["send", ["variable", "++"], ["data", ["void"], x$20312]];
  } else {
    if (($20290$20309 && ((x$20332 = $20281$20297[1]), (((t1$20303 = $20281$20297[2])), ((t1$20303 instanceof Array) && (((t2$20304 = t1$20303.length)), ((t2$20304 === 1) && (t1$20303[0] === "void")))))))) {
      return ["send", ["variable", "++"], ["data", x$20332, ["void"]]];
    } else {
      if ($20290$20309) {
        (x$20348 = $20281$20297[1]);
        (y$20349 = $20281$20297[2]);
        return ["send", ["send", x$20348, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", y$20349]];
      } else {
        if (($20287$20306 && ((t0$20302 === 1) && ($20281$20297[0] === "void")))) {
          return ["send", ["symbol", "->"], ["data", ["data", ["symbol", "x"], ["symbol", "y"]], ["send", ["send", ["symbol", "x"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["symbol", "y"]]]]];
        } else {
          (other$20358 = $20281$20297);
          return ["send", ["symbol", "___build_array"], ["data", other$20358]];
        }
      }
    }
  }
})), accum$20269)), __amp____colon__(((accum$20361 = ({})), ((accum$20361[".."] = (function(context$20368, scope$20369, form$20370, $20365$20371) {
  var x$20439;
  var y$20440;
  var x$20423;
  var x$20403;
  var $20378$20397;
  var $20379$20398;
  var $20380$20399;
  var $20381$20400;
  var t0$20393;
  var t1$20394;
  var t2$20395;
  var $20373$20388;
  var ph$20382;
  (ph$20382 = $20365$20371);
  ($20373$20388 = ph$20382);
  if ((($20378$20397 = ($20373$20388 instanceof Array)) && (((t0$20393 = $20373$20388.length)), (($20380$20399 = (t0$20393 === 3)) && (($20381$20400 = ($20373$20388[0] === "data")) && (((t1$20394 = $20373$20388[1])), ((t1$20394 instanceof Array) && (((t2$20395 = t1$20394.length)), ((t2$20395 === 1) && (t1$20394[0] === "void")))))))))) {
    (x$20403 = $20373$20388[2]);
    return ["send", ["symbol", "range"], ["data", ["value", 1], x$20403]];
  } else {
    if (($20381$20400 && ((x$20423 = $20373$20388[1]), (((t1$20394 = $20373$20388[2])), ((t1$20394 instanceof Array) && (((t2$20395 = t1$20394.length)), ((t2$20395 === 1) && (t1$20394[0] === "void")))))))) {
      return ["send", ["symbol", "range"], ["data", x$20423]];
    } else {
      if ($20381$20400) {
        (x$20439 = $20373$20388[1]);
        (y$20440 = $20373$20388[2]);
        return ["send", ["symbol", "range"], ["data", x$20439, y$20440]];
      } else {
        if (($20378$20397 && ((t0$20393 === 1) && ($20373$20388[0] === "void")))) {
          return ["symbol", "range"];
        } else {
          ___match_error($20373$20388);
        }
      }
    }
  }
})), accum$20361)), __amp____colon__(((accum$20450 = ({})), ((accum$20450["//"] = (function(context$20457, scope$20458, form$20459, $20454$20460) {
  var t0$20465;
  var t1$20466;
  var a$20462;
  var b$20463;
  (t0$20465 = $20454$20460);
  if (((t0$20465 instanceof Array) && (((t1$20466 = t0$20465.length)), ((t1$20466 === 3) && (t0$20465[0] === "data"))))) {
    (a$20462 = t0$20465[1]);
    (b$20463 = t0$20465[2]);
  } else {
    ___match_error($20454$20460);
  }
  return ["send", ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "floor"]]]], ["data", ["send", ["symbol", "/"], ["data", a$20462, b$20463]]]];
})), accum$20450)), __amp____colon__(((accum$20480 = ({})), ((accum$20480["*"] = (function(context$20485, scope$20486, form$20487, expr$20488) {
  var x$20526;
  var x$20552;
  var t0$20557;
  var other$20601;
  var val$20543;
  var $20496$20513;
  var $20497$20514;
  var $20498$20515;
  var t0$20506;
  var t1$20507;
  var t2$20508;
  var bridge$20493$20509;
  var t3$20510;
  var t4$20511;
  var $20490$20501;
  ($20490$20501 = [context$20485, expr$20488]);
  if ((($20496$20513 = ($20490$20501 instanceof Array)) && (((t0$20506 = $20490$20501.length)), (($20498$20515 = (t0$20506 === 2)) && ((((x$20526 = $20490$20501[0])), ((x$20526 instanceof Array) && (x$20526[0] === "pattern"))) && (((t1$20507 = $20490$20501[1])), ((t1$20507 instanceof Array) && (((t2$20508 = t1$20507.length)), ((t2$20508 === 1) && (t1$20507[0] === "void")))))))))) {
    return ["dynsplice", ["ignore"]];
  } else {
    if (($20498$20515 && (((bridge$20493$20509 = $20490$20501[0])), (((((x$20552 = bridge$20493$20509)), ((x$20552 instanceof Array) && (x$20552[0] === "pattern"))) || ((bridge$20493$20509 instanceof Array) && (((t0$20557 = bridge$20493$20509.length)), ((t0$20557 === 2) && ((bridge$20493$20509[0] === "expr") && (bridge$20493$20509[1] === "data")))))) && (((t1$20507 = $20490$20501[1])), ((t1$20507 instanceof Array) && (((t2$20508 = t1$20507.length)), ((t2$20508 === 3) && ((t1$20507[0] === "data") && (((t3$20510 = t1$20507[1])), ((t3$20510 instanceof Array) && (((t4$20511 = t3$20510.length)), ((t4$20511 === 1) && (t3$20510[0] === "void")))))))))))))) {
      (val$20543 = t1$20507[2]);
      return ["dynsplice", val$20543];
    } else {
      if (($20498$20515 && ($20490$20501[0], (((t1$20507 = $20490$20501[1])), ((t1$20507 instanceof Array) && (((t2$20508 = t1$20507.length)), ((t2$20508 === 1) && (t1$20507[0] === "void")))))))) {
        return ["variable", "*"];
      } else {
        (other$20601 = $20490$20501);
        return ["send", ["variable", "*"], expr$20488];
      }
    }
  }
})), accum$20480)), __amp____colon__(((accum$20604 = ({})), ((accum$20604["**"] = (function(context$20609, scope$20610, form$20611, expr$20612) {
  var x$20658;
  var x$20684;
  var t0$20689;
  var a$20733;
  var b$20734;
  var val$20675;
  var $20620$20641;
  var $20621$20642;
  var $20622$20643;
  var $20623$20644;
  var $20624$20645;
  var $20625$20646;
  var $20626$20647;
  var t0$20634;
  var t1$20635;
  var t2$20636;
  var bridge$20617$20637;
  var t3$20638;
  var t4$20639;
  var $20614$20629;
  ($20614$20629 = [context$20609, expr$20612]);
  if ((($20620$20641 = ($20614$20629 instanceof Array)) && (((t0$20634 = $20614$20629.length)), (($20622$20643 = (t0$20634 === 2)) && ((((x$20658 = $20614$20629[0])), ((x$20658 instanceof Array) && (x$20658[0] === "pattern"))) && (((t1$20635 = $20614$20629[1])), ((t1$20635 instanceof Array) && (((t2$20636 = t1$20635.length)), ((t2$20636 === 1) && (t1$20635[0] === "void")))))))))) {
    return ["objsplice", ["ignore"]];
  } else {
    if (($20622$20643 && (((bridge$20617$20637 = $20614$20629[0])), (((((x$20684 = bridge$20617$20637)), ((x$20684 instanceof Array) && (x$20684[0] === "pattern"))) || ((bridge$20617$20637 instanceof Array) && (((t0$20689 = bridge$20617$20637.length)), ((t0$20689 === 2) && ((bridge$20617$20637[0] === "expr") && (bridge$20617$20637[1] === "data")))))) && (((t1$20635 = $20614$20629[1])), ((t1$20635 instanceof Array) && (((t2$20636 = t1$20635.length)), ((t2$20636 === 3) && ((t1$20635[0] === "data") && (((t3$20638 = t1$20635[1])), ((t3$20638 instanceof Array) && (((t4$20639 = t3$20638.length)), ((t4$20639 === 1) && (t3$20638[0] === "void")))))))))))))) {
      (val$20675 = t1$20635[2]);
      return ["objsplice", val$20675];
    } else {
      if (($20622$20643 && ($20614$20629[0], (((t1$20635 = $20614$20629[1])), (($20625$20646 = (t1$20635 instanceof Array)) && (((t2$20636 = t1$20635.length)), ((t2$20636 === 1) && (t1$20635[0] === "void")))))))) {
        return ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]];
      } else {
        if (($20625$20646 && ((t2$20636 === 3) && (t1$20635[0] === "data")))) {
          (a$20733 = t1$20635[1]);
          (b$20734 = t1$20635[2]);
          return ["send", ["send", ["symbol", "Math"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "pow"]]]], ["data", a$20733, b$20734]];
        } else {
          ___match_error($20614$20629);
        }
      }
    }
  }
})), accum$20604)), __amp____colon__(((accum$20740 = ({})), ((accum$20740["_"] = (function($20744$20749, scope$20750, form$20751, $20746$20752) {
  var x$20758;
  var t0$20765;
  var t1$20766;
  if ((((x$20758 = $20744$20749)), ((x$20758 instanceof Array) && (x$20758[0] === "pattern")))) {} else {
    ___match_error($20744$20749);
  }
  (t0$20765 = $20746$20752);
  if (((t0$20765 instanceof Array) && (((t1$20766 = t0$20765.length)), ((t1$20766 === 1) && (t0$20765[0] === "void"))))) {} else {
    ___match_error($20746$20752);
  }
  return ["ignore"];
})), accum$20740)), __amp____colon__(((accum$20780 = ({})), ((accum$20780["else"] = (function($20784$20789, scope$20790, form$20791, $20786$20792) {
  var x$20817;
  var msg$20827;
  var $20794$20806;
  var ph$20797;
  (ph$20797 = $20784$20789);
  $20786$20792;
  ($20794$20806 = ph$20797);
  if ((((x$20817 = $20794$20806)), ((x$20817 instanceof Array) && (x$20817[0] === "pattern")))) {
    return ["ignore"];
  } else {
    $20794$20806;
    (msg$20827 = "'else' should be found inside an 'if' block");
    throw ErrorFactory(["syntax", "else"]).create(msg$20827, ({"node": form$20791}));
  }
})), accum$20780)), __amp____colon__(((accum$20832 = ({})), ((accum$20832["not"] = (function($20836$20841, scope$20842, form$20843, $20838$20844) {
  var t0$20858;
  var t1$20859;
  var t2$20860;
  var t3$20861;
  var x$20902;
  var x$20908;
  var x$20918;
  var other$20925;
  var bridge$20848$20891;
  var $20846$20886;
  var ph$20851;
  var rhs$20852;
  var arg$20853;
  (ph$20851 = $20836$20841);
  (t0$20858 = $20838$20844);
  if (((t0$20858 instanceof Array) && (((t1$20859 = t0$20858.length)), ((t1$20859 === 3) && ((t0$20858[0] === "data") && (((t2$20860 = t0$20858[1])), ((t2$20860 instanceof Array) && (((t3$20861 = t2$20860.length)), ((t3$20861 === 1) && (t2$20860[0] === "void")))))))))) {
    (rhs$20852 = t0$20858[2]);
    (arg$20853 = t0$20858);
  } else {
    ___match_error($20838$20844);
  }
  ($20846$20886 = ph$20851);
  (bridge$20848$20891 = $20846$20886);
  if (((((x$20902 = bridge$20848$20891)), ((x$20902 instanceof Array) && (x$20902[0] === "check"))) || (((x$20908 = bridge$20848$20891)), ((x$20908 instanceof Array) && (x$20908[0] === "project"))))) {
    return ["nostep", form$20843];
  } else {
    if ((((x$20918 = $20846$20886)), ((x$20918 instanceof Array) && (x$20918[0] === "pattern")))) {
      return ["neg", rhs$20852];
    } else {
      (other$20925 = $20846$20886);
      return ["send", ["variable", "not"], arg$20853];
    }
  }
})), accum$20832)), __amp____colon__(((accum$20928 = ({})), ((accum$20928["and"] = (function($20932$20937, scope$20938, form$20939, $20934$20940) {
  var t0$20955;
  var t1$20956;
  var x$20987;
  var x$20993;
  var x$21003;
  var other$21010;
  var bridge$20944$20976;
  var $20942$20971;
  var ph$20947;
  var lhs$20948;
  var rhs$20949;
  var arg$20950;
  (ph$20947 = $20932$20937);
  (t0$20955 = $20934$20940);
  if (((t0$20955 instanceof Array) && (((t1$20956 = t0$20955.length)), ((t1$20956 === 3) && (t0$20955[0] === "data"))))) {
    (lhs$20948 = t0$20955[1]);
    (rhs$20949 = t0$20955[2]);
    (arg$20950 = t0$20955);
  } else {
    ___match_error($20934$20940);
  }
  ($20942$20971 = ph$20947);
  (bridge$20944$20976 = $20942$20971);
  if (((((x$20987 = bridge$20944$20976)), ((x$20987 instanceof Array) && (x$20987[0] === "check"))) || (((x$20993 = bridge$20944$20976)), ((x$20993 instanceof Array) && (x$20993[0] === "project"))))) {
    return ["nostep", form$20939];
  } else {
    if ((((x$21003 = $20942$20971)), ((x$21003 instanceof Array) && (x$21003[0] === "pattern")))) {
      return ["all", lhs$20948, rhs$20949];
    } else {
      (other$21010 = $20942$20971);
      return ["send", ["variable", "and"], arg$20950];
    }
  }
})), accum$20928)), __amp____colon__(((accum$21013 = ({})), ((accum$21013["or"] = (function($21017$21022, scope$21023, form$21024, $21019$21025) {
  var t0$21040;
  var t1$21041;
  var x$21072;
  var x$21078;
  var x$21088;
  var other$21095;
  var bridge$21029$21061;
  var $21027$21056;
  var ph$21032;
  var lhs$21033;
  var rhs$21034;
  var arg$21035;
  (ph$21032 = $21017$21022);
  (t0$21040 = $21019$21025);
  if (((t0$21040 instanceof Array) && (((t1$21041 = t0$21040.length)), ((t1$21041 === 3) && (t0$21040[0] === "data"))))) {
    (lhs$21033 = t0$21040[1]);
    (rhs$21034 = t0$21040[2]);
    (arg$21035 = t0$21040);
  } else {
    ___match_error($21019$21025);
  }
  ($21027$21056 = ph$21032);
  (bridge$21029$21061 = $21027$21056);
  if (((((x$21072 = bridge$21029$21061)), ((x$21072 instanceof Array) && (x$21072[0] === "check"))) || (((x$21078 = bridge$21029$21061)), ((x$21078 instanceof Array) && (x$21078[0] === "project"))))) {
    return ["nostep", form$21024];
  } else {
    if ((((x$21088 = $21027$21056)), ((x$21088 instanceof Array) && (x$21088[0] === "pattern")))) {
      return ["any", lhs$21033, rhs$21034];
    } else {
      (other$21095 = $21027$21056);
      return ["send", ["variable", "or"], arg$21035];
    }
  }
})), accum$21013)), __amp____colon__(((accum$21098 = ({})), ((accum$21098["when"] = (function(context$21105, scope$21106, form$21107, $21102$21108) {
  var t0$21116;
  var t1$21117;
  var other$21150;
  var t0$21137;
  var $21110$21132;
  var ph$21113;
  var condition$21114;
  (t0$21116 = $21102$21108);
  if (((t0$21116 instanceof Array) && (((t1$21117 = t0$21116.length)), ((t1$21117 === 3) && (t0$21116[0] === "data"))))) {
    (ph$21113 = t0$21116[1]);
    (condition$21114 = t0$21116[2]);
  } else {
    ___match_error($21102$21108);
  }
  ($21110$21132 = ph$21113);
  if ((($21110$21132 instanceof Array) && (((t0$21137 = $21110$21132.length)), ((t0$21137 === 1) && ($21110$21132[0] === "void"))))) {
    return ["test", condition$21114, ["ignore"]];
  } else {
    (other$21150 = $21110$21132);
    return ["test", condition$21114, other$21150];
  }
})), accum$21098)), __amp____colon__(((accum$21153 = ({})), ((accum$21153["."] = (function(context$21160, scope$21161, form$21162, $21157$21163) {
  var t0$21167;
  var t1$21168;
  var t2$21169;
  var t3$21170;
  var f$21195;
  var expr$21165;
  (t0$21167 = $21157$21163);
  if (((t0$21167 instanceof Array) && (((t1$21168 = t0$21167.length)), ((t1$21168 === 3) && ((t0$21167[0] === "data") && (((t2$21169 = t0$21167[1])), ((t2$21169 instanceof Array) && (((t3$21170 = t2$21169.length)), ((t3$21170 === 1) && (t2$21169[0] === "void")))))))))) {
    (expr$21165 = t0$21167[2]);
  } else {
    ___match_error($21157$21163);
  }
  (f$21195 = (function($21199$21202) {
    var $index$21263;
    var $length$21257;
    var temp$21251;
    var acc$21245;
    var other$21285;
    var args$21237;
    var x$21227;
    var $21208$21223;
    var $21209$21224;
    var t0$21221;
    var $21204$21216;
    var ph$21210;
    (ph$21210 = $21199$21202);
    ($21204$21216 = ph$21210);
    if ((($21208$21223 = ($21204$21216 instanceof Array)) && (((t0$21221 = $21204$21216.length)), ((t0$21221 === 2) && ($21204$21216[0] === "symbol"))))) {
      (x$21227 = $21204$21216[1]);
      return ["value", x$21227];
    } else {
      if (($21208$21223 && ((t0$21221 >= 1) && ($21204$21216[0] === "data")))) {
        (args$21237 = Array.prototype.slice.call($21204$21216, 1));
        return ["data"].concat((((acc$21245 = [])), (((temp$21251 = args$21237)), ((($length$21257 = temp$21251.length)), ((($index$21263 = 0)), (function() {
          $21240: for (; ($index$21263 < $length$21257); ($index$21263++)) {
            var arg$21280;
            var m$21272;
            (m$21272 = temp$21251[$index$21263]);
            (arg$21280 = m$21272);
            acc$21245.push(f$21195(arg$21280));
          }
        })()))), acc$21245));
      } else {
        (other$21285 = $21204$21216);
        throw ErrorFactory(["syntax", "dot"]).create("Argument to '.' must be a symbol or an array", ({"argument": other$21285}));
      }
    }
  }));
  return f$21195(expr$21165);
})), accum$21153)), __amp____colon__(((accum$21289 = ({})), ((accum$21289["="] = (function(context$21294, scope$21295, form$21296, expr$21297) {
  var x$21317;
  var t0$21327;
  var t1$21328;
  var lhs$21324;
  var rhs$21325;
  var lhs$21400;
  var rhs$21401;
  var s$21384;
  var rhs$21385;
  var $21354$21369;
  var $21355$21370;
  var $21356$21371;
  var $21357$21372;
  var t0$21365;
  var t1$21366;
  var t2$21367;
  var $21350$21360;
  var t0$21415;
  var t1$21416;
  var lhs$21412;
  var rhs$21413;
  var other$21408;
  var t0$21310;
  var $21299$21305;
  ($21299$21305 = context$21294);
  if ((((x$21317 = $21299$21305)), ((x$21317 instanceof Array) && (x$21317[0] === "pattern")))) {
    (t0$21327 = expr$21297);
    if (((t0$21327 instanceof Array) && (((t1$21328 = t0$21327.length)), ((t1$21328 === 3) && (t0$21327[0] === "data"))))) {
      (lhs$21324 = t0$21327[1]);
      (rhs$21325 = t0$21327[2]);
    } else {
      ___match_error(expr$21297, "/home/olivier/git/earl-grey/src/stdenv.eg", 13046, 13050);
    }
    return ["default", lhs$21324, rhs$21325];
  } else {
    if ((($21299$21305 instanceof Array) && (((t0$21310 = $21299$21305.length)), ((t0$21310 === 2) && (($21299$21305[0] === "expr") && ($21299$21305[1] === "data")))))) {
      ($21350$21360 = expr$21297);
      if ((($21354$21369 = ($21350$21360 instanceof Array)) && (((t0$21365 = $21350$21360.length)), ((t0$21365 === 1) && ($21350$21360[0] === "void"))))) {
        return ["assoc"];
      } else {
        if (($21354$21369 && (($21356$21371 = (t0$21365 === 3)) && (($21357$21372 = ($21350$21360[0] === "data")) && (((t1$21366 = $21350$21360[1])), ((t1$21366 instanceof Array) && (((t2$21367 = t1$21366.length)), ((t2$21367 === 2) && (t1$21366[0] === "symbol"))))))))) {
          (s$21384 = t1$21366[1]);
          (rhs$21385 = $21350$21360[2]);
          return ["assoc", ["value", s$21384], rhs$21385];
        } else {
          if ($21357$21372) {
            (lhs$21400 = $21350$21360[1]);
            (rhs$21401 = $21350$21360[2]);
            return ["objsplice", ["multi", parse_pattern$18192(scope$21295, lhs$21400, __lt____lt____colon__$18184(["use", scope$21295, rhs$21401], rhs$21401), pattern_handlers$18226.build_object)]];
          } else {
            ___match_error($21350$21360);
          }
        }
      }
    } else {
      (other$21408 = $21299$21305);
      (t0$21415 = expr$21297);
      if (((t0$21415 instanceof Array) && (((t1$21416 = t0$21415.length)), ((t1$21416 === 3) && (t0$21415[0] === "data"))))) {
        (lhs$21412 = t0$21415[1]);
        (rhs$21413 = t0$21415[2]);
      } else {
        ___match_error(expr$21297, "/home/olivier/git/earl-grey/src/stdenv.eg", 13621, 13625);
      }
      return parse_pattern$18192(scope$21295, lhs$21412, __lt____lt____colon__$18184(["use", scope$21295, rhs$21413], rhs$21413), pattern_handlers$18226.declare_variables);
    }
  }
})), accum$21289)), __amp____colon__(((accum$21430 = ({})), ((accum$21430["=>"] = (function($21434$21441, scope$21442, $21436$21443, $21438$21444) {
  var t0$21458;
  var t0$21467;
  var t1$21468;
  var x$21494;
  var x$21532;
  var t0$21542;
  var t0$21550;
  var t0$21569;
  var t0$21577;
  var k$21560;
  var rhs$21561;
  var k$21523;
  var $21504$21518;
  var $21505$21519;
  var $21506$21520;
  var t0$21514;
  var bridge$21501$21515;
  var bridge$21503$21516;
  var $21499$21509;
  var x$21592;
  var t0$21601;
  var t1$21602;
  var t2$21603;
  var stmts$21599;
  var other$21623;
  var $21446$21483;
  var ph$21450;
  var env$21451;
  var lhs$21452;
  var rhs$21453;
  (ph$21450 = $21434$21441);
  (t0$21458 = $21436$21443);
  if (___hasprop(t0$21458, "env")) {
    (env$21451 = t0$21458.env);
  } else {
    ___match_error($21436$21443);
  }
  (t0$21467 = $21438$21444);
  if (((t0$21467 instanceof Array) && (((t1$21468 = t0$21467.length)), ((t1$21468 === 3) && (t0$21467[0] === "data"))))) {
    (lhs$21452 = t0$21467[1]);
    (rhs$21453 = t0$21467[2]);
  } else {
    ___match_error($21438$21444);
  }
  ($21446$21483 = ph$21450);
  if ((((x$21494 = $21446$21483)), ((x$21494 instanceof Array) && (x$21494[0] === "pattern")))) {
    ($21499$21509 = [lhs$21452, rhs$21453]);
    if ((($21504$21518 = ($21499$21509 instanceof Array)) && (((t0$21514 = $21499$21509.length)), (($21506$21520 = (t0$21514 === 2)) && ((((x$21532 = $21499$21509[0])), ((x$21532 instanceof Array) && (x$21532[0] === "void"))) && (((bridge$21501$21515 = $21499$21509[1])), (((bridge$21501$21515 instanceof Array) && (((t0$21542 = bridge$21501$21515.length)), ((t0$21542 === 2) && ((bridge$21501$21515[0] === "symbol") && ((k$21523 = bridge$21501$21515[1]), true))))) || ((bridge$21501$21515 instanceof Array) && (((t0$21550 = bridge$21501$21515.length)), ((t0$21550 === 2) && ((bridge$21501$21515[0] === "value") && ((k$21523 = bridge$21501$21515[1]), true)))))))))))) {
      return ["assoc", ["value", k$21523], __amp__(__lt____lt____colon__$18184(["symbol", k$21523], rhs$21453), ({"env": env$21451}))];
    } else {
      if (($21506$21520 && (((bridge$21503$21516 = $21499$21509[0])), (((bridge$21503$21516 instanceof Array) && (((t0$21569 = bridge$21503$21516.length)), ((t0$21569 === 2) && ((bridge$21503$21516[0] === "symbol") && ((k$21560 = bridge$21503$21516[1]), true))))) || ((bridge$21503$21516 instanceof Array) && (((t0$21577 = bridge$21503$21516.length)), ((t0$21577 === 2) && ((bridge$21503$21516[0] === "value") && ((k$21560 = bridge$21503$21516[1]), true))))))))) {
        (rhs$21561 = $21499$21509[1]);
        return ["assoc", ["value", k$21560], rhs$21561];
      } else {
        ___match_error($21499$21509);
      }
    }
  } else {
    if ((((x$21592 = $21446$21483)), ((x$21592 instanceof Array) && (x$21592[0] === "test")))) {
      (t0$21601 = getProjector(Body$18188)(rhs$21453));
      if ((t0$21601[0] && (((t1$21602 = t0$21601[1])), (((t2$21603 = t1$21602.length)), (t2$21603 >= 0))))) {
        (stmts$21599 = Array.prototype.slice.call(t1$21602, 0));
      } else {
        ___match_error(rhs$21453, "/home/olivier/git/earl-grey/src/stdenv.eg", 14194, 14197);
      }
      return ["blocktest", lhs$21452, stmts$21599];
    } else {
      (other$21623 = $21446$21483);
      return ["assoc", lhs$21452, rhs$21453];
    }
  }
})), accum$21430)), __amp____colon__(((accum$21626 = ({})), ((accum$21626[":="] = (function(context$21633, scope$21634, form$21635, $21630$21636) {
  var t0$21641;
  var t1$21642;
  var lhs$21638;
  var rhs$21639;
  (t0$21641 = $21630$21636);
  if (((t0$21641 instanceof Array) && (((t1$21642 = t0$21641.length)), ((t1$21642 === 3) && (t0$21641[0] === "data"))))) {
    (lhs$21638 = t0$21641[1]);
    (rhs$21639 = t0$21641[2]);
  } else {
    ___match_error($21630$21636);
  }
  return ["assign", lhs$21638, rhs$21639];
})), accum$21626)), __amp____colon__(({
  "+=": make_assigner$18229("+"),
  "-=": make_assigner$18229("-"),
  "*=": make_assigner$18229("*"),
  "/=": make_assigner$18229("/"),
  "<<=": make_assigner$18229("<<"),
  ">>=": make_assigner$18229(">>"),
  ">>>=": make_assigner$18229(">>>"),
  "++=": make_assigner$18229("++"),
  "?=": make_assigner$18229("match"),
  "or=": make_assigner$18229("or"),
  "and=": make_assigner$18229("and"),
  "each=": make_assigner$18229("each")
}), __amp____colon__(((accum$21656 = ({})), ((accum$21656["_lambda"] = (function(context$21663, scope$21664, form$21665, $21660$21666) {
  var t0$21675;
  var t1$21676;
  var t2$21677;
  var t3$21678;
  var $index$21805;
  var $length$21799;
  var temp$21793;
  var acc$21787;
  var decls$21772;
  var newargs$21773;
  var body2$21939;
  var a$21933;
  var other$21929;
  var fw$21740;
  var t0$21732;
  var t1$21733;
  var t2$21734;
  var t3$21735;
  var t4$21736;
  var $21704$21727;
  var wrap$21707;
  var pp$21708;
  var args$21668;
  var arg$21669;
  var pre$21670;
  var body$21671;
  var post$21672;
  var generator$21673;
  (t0$21675 = $21660$21666);
  if (((t0$21675 instanceof Array) && (((t1$21676 = t0$21675.length)), (((t1$21676 >= 5) && (t1$21676 <= 6)) && ((t0$21675[0] === "data") && (((t2$21677 = t0$21675[1])), ((t2$21677 instanceof Array) && (((t3$21678 = t2$21677.length)), ((t3$21678 >= 1) && (t2$21677[0] === "data")))))))))) {
    (args$21668 = Array.prototype.slice.call(t2$21677, 1));
    (arg$21669 = t2$21677);
    (pre$21670 = t0$21675[2]);
    (body$21671 = t0$21675[3]);
    (post$21672 = t0$21675[4]);
    (generator$21673 = ((5 >= t1$21676) ? ["value", false] : t0$21675[5]));
  } else {
    ___match_error($21660$21666);
  }
  (wrap$21707 = (function(body2$21713) {
    var body3$21717;
    (body3$21717 = (equal(post$21672, ["value", null]) ? body2$21713 : ["multi", body2$21713, post$21672]));
    if (equal(pre$21670, ["value", null])) {
      return body3$21717;
    } else {
      return ["multi", pre$21670, body3$21717];
    }
  }));
  (pp$21708 = PatternParser$18190(scope$21664, arg$21669, ({
    "indexable": true,
    "allow_nested": true
  })));
  ($21704$21727 = pp$21708.pattern);
  if ((($21704$21727 instanceof Array) && (((t0$21732 = $21704$21727.length)), ((t0$21732 === 5) && (($21704$21727[0] === "array_pattern") && ((fw$21740 = $21704$21727[1]), (((t1$21733 = $21704$21727[2])), ((t1$21733 instanceof Array) && (((t2$21734 = t1$21733.length)), ((t2$21734 === 0) && (((t3$21735 = $21704$21727[3])), ((t3$21735 instanceof Array) && (((t4$21736 = t3$21735.length)), ((t4$21736 === 0) && ($21704$21727[4] === (void 0)))))))))))))))) {
    (decls$21772 = (pp$21708.specials.match ? [["declare", ["symbol", "ph"]]] : []));
    (newargs$21773 = (((acc$21787 = [])), (((temp$21793 = zip(fw$21740, args$21668))), ((($length$21799 = temp$21793.length)), ((($index$21805 = 0)), (function() {
      $21779: for (; ($index$21805 < $length$21799); ($index$21805++)) {
        var newv$21877;
        var other$21872;
        var expr$21845;
        var v$21846;
        var t0$21838;
        var t1$21839;
        var t2$21840;
        var t3$21841;
        var arg$21824;
        var $21782$21825;
        var t0$21819;
        var t1$21820;
        var m$21814;
        (m$21814 = temp$21793[$index$21805]);
        (t0$21819 = m$21814);
        if (((t0$21819 instanceof Array) && (((t1$21820 = t0$21819.length)), (t1$21820 === 2)))) {
          ($21782$21825 = t0$21819[0]);
          (arg$21824 = t0$21819[1]);
          (t0$21838 = $21782$21825);
          if (((t0$21838 instanceof Array) && (((t1$21839 = t0$21838.length)), ((t1$21839 === 2) && ((t0$21838[0] === "assign") && (((t2$21840 = t0$21838[1])), ((expr$21845 = t2$21840), ((t2$21840 instanceof Array) && (((t3$21841 = t2$21840.length)), ((t3$21841 === 2) && (t2$21840[0] === "symbol"))))))))))) {
            (v$21846 = t2$21840[1]);
            acc$21787.push(expr$21845);
          } else {
            (other$21872 = $21782$21825);
            acc$21787.push((((newv$21877 = __amp__(["symbol", scope$21664.gensym("temp")], ({"env": stdenv$18204})))), decls$21772.push(parse_pattern$18192(scope$21664, arg$21824, newv$21877, __amp__(pattern_handlers$18226.declare_variables, ({
              "tags": ({"declare_mode": "let"}),
              "special": (function($21882$21885, value$21886) {
                var t0$21894;
                var t1$21895;
                var other$21922;
                var $21888$21910;
                var ph$21891;
                var expr$21892;
                (t0$21894 = $21882$21885);
                if (((t0$21894 instanceof Array) && (((t1$21895 = t0$21894.length)), ((t1$21895 === 2) && (t0$21894[0] === "special"))))) {
                  (ph$21891 = t0$21894[1]);
                  (expr$21892 = t0$21894);
                } else {
                  ___match_error($21882$21885);
                }
                ($21888$21910 = ph$21891);
                if (($21888$21910 === "match")) {
                  return ["assign", ["symbol", "ph"]];
                } else {
                  (other$21922 = $21888$21910);
                  throw ErrorFactory(["syntax", "pattern", "special"]).create("Special token cannot be used here", ({"special": expr$21892}));
                }
              })
            })))), newv$21877));
          }
        } else {
          ___match_error(m$21814, "/home/olivier/git/earl-grey/src/stdenv.eg", 15331, 16196);
        }
      }
    })()))), acc$21787));
    return ["lambda", newargs$21773, wrap$21707(["multi"].concat(decls$21772).concat([(pp$21708.specials.match ? ["send", ["symbol", "match"], ["data", ["symbol", "ph"], body$21671]] : body$21671)])), generator$21673];
  } else {
    (other$21929 = $21704$21727);
    (a$21933 = __lt____lt____colon__$18184(["symbol", "arguments"], arg$21669));
    (body2$21939 = ["send", ["send", ["symbol", "match"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "indexable"]]]], ["data", a$21933, ["send", ["symbol", "->"], ["data", arg$21669, body$21671]]]]);
    return ["lambda", [], wrap$21707(body2$21939), generator$21673];
  }
})), accum$21656)), __amp____colon__(((accum$21944 = ({})), ((accum$21944["*->"] = (function(ctx$21951, scope$21952, form$21953, $21948$21954) {
  var other$21985;
  var args$21974;
  var body$21975;
  var t0$21970;
  var $21956$21965;
  var ph$21959;
  (ph$21959 = $21948$21954);
  ($21956$21965 = ph$21959);
  if ((($21956$21965 instanceof Array) && (((t0$21970 = $21956$21965.length)), ((t0$21970 === 3) && ($21956$21965[0] === "data"))))) {
    (args$21974 = $21956$21965[1]);
    (body$21975 = $21956$21965[2]);
    return ["send", ["symbol", "_lambda"], ["data", args$21974, ["value", null], body$21975, ["value", null], ["value", true]]];
  } else {
    (other$21985 = $21956$21965);
    throw ErrorFactory(["syntax", "lambda"]).create("Bad lambda syntax", ({"node": other$21985}));
  }
})), accum$21944)), __amp____colon__(((accum$21988 = ({})), ((accum$21988["->"] = (function($21992$21995, scope$21996, form$21997, expr$21998) {
  var x$22022;
  var t0$22032;
  var t1$22033;
  var lhs$22029;
  var rhs$22030;
  var other$22075;
  var args$22064;
  var body$22065;
  var t0$22060;
  var $22050$22055;
  var other$22048;
  var $22000$22009;
  var ph$22003;
  (ph$22003 = $21992$21995);
  ($22000$22009 = ph$22003);
  if (form$21997.name) {
    console.log(form$21997.name);
  }
  if ((((x$22022 = $22000$22009)), ((x$22022 instanceof Array) && (x$22022[0] === "clause")))) {
    (t0$22032 = expr$21998);
    if (((t0$22032 instanceof Array) && (((t1$22033 = t0$22032.length)), ((t1$22033 === 3) && (t0$22032[0] === "data"))))) {
      (lhs$22029 = t0$22032[1]);
      (rhs$22030 = t0$22032[2]);
    } else {
      ___match_error(expr$21998, "/home/olivier/git/earl-grey/src/stdenv.eg", 16919, 16923);
    }
    return ["clause", lhs$22029, rhs$22030];
  } else {
    (other$22048 = $22000$22009);
    ($22050$22055 = expr$21998);
    if ((($22050$22055 instanceof Array) && (((t0$22060 = $22050$22055.length)), ((t0$22060 === 3) && ($22050$22055[0] === "data"))))) {
      (args$22064 = $22050$22055[1]);
      (body$22065 = $22050$22055[2]);
      return ["send", ["symbol", "_lambda"], ["data", args$22064, ["value", null], body$22065, ["value", null]]];
    } else {
      (other$22075 = $22050$22055);
      throw ErrorFactory(["syntax", "lambda"]).create("Bad lambda syntax", ({"node": other$22075}));
    }
  }
})), accum$21988)), __amp____colon__(({"match": accum_flags$18223((function($22078$22081, scope$22082, form$22083, expr$22084, flags$22085) {
    var x$22107;
    var other$22135;
    var t0$22122;
    var $22112$22117;
    var v$22208;
    var b$22209;
    var b$22183;
    var $22165$22179;
    var $22166$22180;
    var t0$22174;
    var t1$22175;
    var t2$22176;
    var t3$22177;
    var $22162$22169;
    var v$22284;
    var b$22285;
    var b$22259;
    var $22241$22255;
    var $22242$22256;
    var t0$22250;
    var t1$22251;
    var t2$22252;
    var t3$22253;
    var $22238$22245;
    var t0$22156;
    var t1$22157;
    var accum$22313;
    var mbody$22308;
    var opt$22145;
    var to_match$22146;
    var value$22147;
    var body$22148;
    var other$22139;
    var $22087$22096;
    var ph$22090;
    (ph$22090 = $22078$22081);
    ($22087$22096 = ph$22090);
    if ((((x$22107 = $22087$22096)), ((x$22107 instanceof Array) && (x$22107[0] === "pattern")))) {
      ($22112$22117 = expr$22084);
      if ((($22112$22117 instanceof Array) && (((t0$22122 = $22112$22117.length)), ((t0$22122 === 1) && ($22112$22117[0] === "void"))))) {
        return ["special", "match"];
      } else {
        (other$22135 = $22112$22117);
        return ["all", __lt____lt____colon__$18184(other$22135, expr$22084), __lt____lt____colon__$18184(["special", "match"], form$22083)];
      }
    } else {
      (other$22139 = $22087$22096);
      (opt$22145 = util$18185.mkset(flags$22085));
      (to_match$22146 = __amp__(["symbol", scope$22082.gensym("m")], ({"single_assignment": true})));
      (t0$22156 = ((($22162$22169 = expr$22084)), ((($22165$22179 = ($22162$22169 instanceof Array)) && (((t0$22174 = $22162$22169.length)), ((t0$22174 === 2) && (($22162$22169[0] === "data") && (((t1$22175 = getProjector(Body$18188)($22162$22169[1]))), (t1$22175[0] && (((t2$22176 = t1$22175[1])), (((t3$22177 = t2$22176.length)), (t3$22177 >= 0))))))))) ? ((b$22183 = Array.prototype.slice.call(t2$22176, 0)), [["value", null], b$22183]) : (($22165$22179 && ((t0$22174 === 3) && (($22162$22169[0] === "data") && ((v$22208 = $22162$22169[1]), (((t1$22175 = getProjector(Body$18188)($22162$22169[2]))), (t1$22175[0] && (((t2$22176 = t1$22175[1])), (((t3$22177 = t2$22176.length)), (t3$22177 >= 0))))))))) ? ((b$22209 = Array.prototype.slice.call(t2$22176, 0)), [v$22208, b$22209]) : (___match_error($22162$22169))))));
      if (((t0$22156 instanceof Array) && (((t1$22157 = t0$22156.length)), (t1$22157 === 2)))) {
        (value$22147 = t0$22156[0]);
        (body$22148 = t0$22156[1]);
      } else {
        ___match_error(((($22238$22245 = expr$22084)), ((($22241$22255 = ($22238$22245 instanceof Array)) && (((t0$22250 = $22238$22245.length)), ((t0$22250 === 2) && (($22238$22245[0] === "data") && (((t1$22251 = getProjector(Body$18188)($22238$22245[1]))), (t1$22251[0] && (((t2$22252 = t1$22251[1])), (((t3$22253 = t2$22252.length)), (t3$22253 >= 0))))))))) ? ((b$22259 = Array.prototype.slice.call(t2$22252, 0)), [["value", null], b$22259]) : (($22241$22255 && ((t0$22250 === 3) && (($22238$22245[0] === "data") && ((v$22284 = $22238$22245[1]), (((t1$22251 = getProjector(Body$18188)($22238$22245[2]))), (t1$22251[0] && (((t2$22252 = t1$22251[1])), (((t3$22253 = t2$22252.length)), (t3$22253 >= 0))))))))) ? ((b$22285 = Array.prototype.slice.call(t2$22252, 0)), [v$22284, b$22285]) : (___match_error($22238$22245))))), "/home/olivier/git/earl-grey/src/stdenv.eg", 19553, 19668);
      }
      (mbody$22308 = parse_clauses$18193(scope$22082, to_match$22146, body$22148, __amp__(opt$22145, __amp____colon__(((accum$22313 = ({})), ((accum$22313["fallback"] = (function(target$22318) {
        return match_error$18211(target$22318);
      })), accum$22313)), ({"wrap": (function(x$22322) {
          return x$22322;
        })})))));
      return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", to_match$22146, value$22147]], mbody$22308]];
    }
  }))}), __amp____colon__(((accum$22326 = ({})), ((accum$22326["each"] = (function($22330$22337, scope$22338, $22332$22339, $22334$22340) {
  var t0$22360;
  var t0$22369;
  var t1$22370;
  var t2$22371;
  var t3$22372;
  var t4$22373;
  var x$22486;
  var other$22510;
  var ends_with_test$22418;
  var _build_loop$22419;
  var $22347$22411;
  var $22348$22412;
  var $22349$22413;
  var $22350$22414;
  var t0$22409;
  var $22342$22404;
  var ph$22351;
  var form$22352;
  var env$22353;
  var li$22354;
  var clauses$22355;
  (ph$22351 = $22330$22337);
  (t0$22360 = $22332$22339);
  (form$22352 = t0$22360);
  if (___hasprop(t0$22360, "env")) {
    (env$22353 = t0$22360.env);
  } else {
    ___match_error($22332$22339);
  }
  (t0$22369 = $22334$22340);
  if (((t0$22369 instanceof Array) && (((t1$22370 = t0$22369.length)), ((t1$22370 === 3) && ((t0$22369[0] === "data") && ((li$22354 = t0$22369[1]), (((t2$22371 = getProjector(Body$18188)(t0$22369[2]))), (t2$22371[0] && (((t3$22372 = t2$22371[1])), (((t4$22373 = t3$22372.length)), (t4$22373 >= 0))))))))))) {
    (clauses$22355 = Array.prototype.slice.call(t3$22372, 0));
  } else {
    ___match_error($22334$22340);
  }
  ($22342$22404 = ph$22351);
  (ends_with_test$22418 = false);
  (_build_loop$22419 = (function(wrap$22427, pre$22428, post$22429) {
    var accum$22434;
    var accum$22473;
    return build_loop$18227(scope$22338, env$22353, form$22352, li$22354, clauses$22355, wrap$22427, pre$22428, post$22429, __amp____colon__(((accum$22434 = ({})), ((accum$22434["wrap_pattern"] = (function(x$22439, toplevel$22440) {
      var x$22462;
      var other$22469;
      var $22446$22451;
      (ends_with_test$22418 = ((($22446$22451 = x$22439)), ((((x$22462 = $22446$22451)), ((x$22462 instanceof Array) && (x$22462[0] === "test"))) ? toplevel$22440 : ((other$22469 = $22446$22451), false))));
      return x$22439;
    })), accum$22434)), ((accum$22473 = ({})), ((accum$22473["fallback"] = (function(target$22478) {
      if (ends_with_test$22418) {
        return ["symbol", "false"];
      } else {
        return match_error$18211(target$22478);
      }
    })), accum$22473))));
  }));
  if ((((x$22486 = $22342$22404)), ((x$22486 instanceof Array) && (x$22486[0] === "test")))) {
    return __amp__(["test_factory", li$22354, clauses$22355], ({"env": env$22353}));
  } else {
    if ((($22347$22411 = ($22342$22404 instanceof Array)) && (((t0$22409 = $22342$22404.length)), (($22349$22413 = (t0$22409 === 2)) && (($22350$22414 = ($22342$22404[0] === "expr")) && ($22342$22404[1] === "multi")))))) {
      return ["nostep", form$22352];
    } else {
      if (($22350$22414 && ($22342$22404[1] === "ignore"))) {
        return _build_loop$22419((function(x$22506) {
          return x$22506;
        }), ["splice"], ["splice"]);
      } else {
        (other$22510 = $22342$22404);
        return _build_loop$22419((function(x$22514) {
          return ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "push"]]]], ["data", ["multi", x$22514]]];
        }), ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["symbol", "acc"]);
      }
    }
  }
})), accum$22326)), __amp____colon__(((accum$22517 = ({})), ((accum$22517["each?"] = (function($22521$22528, scope$22529, $22523$22530, $22525$22531) {
  var t0$22551;
  var t0$22560;
  var t1$22561;
  var t2$22562;
  var t3$22563;
  var t4$22564;
  var x$22611;
  var other$22639;
  var $22538$22602;
  var $22539$22603;
  var $22540$22604;
  var $22541$22605;
  var t0$22600;
  var $22533$22595;
  var ph$22542;
  var form$22543;
  var env$22544;
  var li$22545;
  var clauses$22546;
  (ph$22542 = $22521$22528);
  (t0$22551 = $22523$22530);
  (form$22543 = t0$22551);
  if (___hasprop(t0$22551, "env")) {
    (env$22544 = t0$22551.env);
  } else {
    ___match_error($22523$22530);
  }
  (t0$22560 = $22525$22531);
  if (((t0$22560 instanceof Array) && (((t1$22561 = t0$22560.length)), ((t1$22561 === 3) && ((t0$22560[0] === "data") && ((li$22545 = t0$22560[1]), (((t2$22562 = getProjector(Body$18188)(t0$22560[2]))), (t2$22562[0] && (((t3$22563 = t2$22562[1])), (((t4$22564 = t3$22563.length)), (t4$22564 >= 0))))))))))) {
    (clauses$22546 = Array.prototype.slice.call(t3$22563, 0));
  } else {
    ___match_error($22525$22531);
  }
  ($22533$22595 = ph$22542);
  if ((((x$22611 = $22533$22595)), ((x$22611 instanceof Array) && (x$22611[0] === "test")))) {
    return __amp__(["test_factory", li$22545, clauses$22546], ({"env": env$22544}));
  } else {
    if ((($22538$22602 = ($22533$22595 instanceof Array)) && (((t0$22600 = $22533$22595.length)), (($22540$22604 = (t0$22600 === 2)) && (($22541$22605 = ($22533$22595[0] === "expr")) && ($22533$22595[1] === "multi")))))) {
      return ["nostep", form$22543];
    } else {
      if (($22541$22605 && ($22533$22595[1] === "ignore"))) {
        return build_loop$18227(scope$22529, env$22544, form$22543, li$22545, clauses$22546, (function(x$22631) {
          return x$22631;
        }), ["splice"], ["splice"], ({"fallback": (function(target$22635) {
            return ["symbol", "false"];
          })}));
      } else {
        (other$22639 = $22533$22595);
        return build_loop$18227(scope$22529, env$22544, form$22543, li$22545, clauses$22546, (function(x$22643) {
          return ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "push"]]]], ["data", x$22643]];
        }), ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["symbol", "acc"], ({"fallback": (function(target$22647) {
            return ["symbol", "false"];
          })}));
      }
    }
  }
})), accum$22517)), __amp____colon__(((accum$22650 = ({})), ((accum$22650["try"] = (function($22654$22659, scope$22660, form$22661, $22656$22662) {
  var t0$22678;
  var t1$22679;
  var t2$22680;
  var t3$22681;
  var t4$22682;
  var msg$23031;
  var otherwise$23027;
  var a$22980;
  var c$22981;
  var a$22953;
  var b$22954;
  var a$22879;
  var b$22880;
  var c$22881;
  var $22840$22869;
  var $22841$22870;
  var $22842$22871;
  var $22843$22872;
  var $22844$22873;
  var $22845$22874;
  var $22846$22875;
  var $22847$22876;
  var t0$22855;
  var t1$22856;
  var t2$22857;
  var t3$22858;
  var t4$22859;
  var t5$22860;
  var t6$22861;
  var t7$22862;
  var t8$22863;
  var t9$22864;
  var t10$22865;
  var t11$22866;
  var t12$22867;
  var $22835$22850;
  var msg$23239;
  var otherwise$23235;
  var a$23188;
  var c$23189;
  var a$23161;
  var b$23162;
  var a$23087;
  var b$23088;
  var c$23089;
  var $23048$23077;
  var $23049$23078;
  var $23050$23079;
  var $23051$23080;
  var $23052$23081;
  var $23053$23082;
  var $23054$23083;
  var $23055$23084;
  var t0$23063;
  var t1$23064;
  var t2$23065;
  var t3$23066;
  var t4$23067;
  var t5$23068;
  var t6$23069;
  var t7$23070;
  var t8$23071;
  var t9$23072;
  var t10$23073;
  var t11$23074;
  var t12$23075;
  var $23043$23058;
  var t0$22829;
  var t1$22830;
  var other$23263;
  var grouped$22726;
  var stmts$22727;
  var clauses$22728;
  var finally$22729;
  var $22668$22719;
  var $22669$22720;
  var $22670$22721;
  var $22671$22722;
  var t0$22717;
  var $22664$22712;
  var ph$22672;
  var parts$22673;
  (ph$22672 = $22654$22659);
  (t0$22678 = $22656$22662);
  if (((t0$22678 instanceof Array) && (((t1$22679 = t0$22678.length)), ((t1$22679 === 2) && ((t0$22678[0] === "data") && (((t2$22680 = getProjector(Body$18188)(t0$22678[1]))), (t2$22680[0] && (((t3$22681 = t2$22680[1])), (((t4$22682 = t3$22681.length)), (t4$22682 >= 0)))))))))) {
    (parts$22673 = Array.prototype.slice.call(t3$22681, 0));
  } else {
    ___match_error($22656$22662);
  }
  ($22664$22712 = ph$22672);
  (grouped$22726 = classify_contiguous$18187(parts$22673, (function($22733$22736) {
    var other$22825;
    var e$22809;
    var b$22810;
    var b$22779;
    var $22742$22768;
    var $22743$22769;
    var $22744$22770;
    var $22745$22771;
    var $22746$22772;
    var $22747$22773;
    var $22748$22774;
    var $22749$22775;
    var $22750$22776;
    var t0$22762;
    var t1$22763;
    var t2$22764;
    var t3$22765;
    var t4$22766;
    var $22738$22757;
    var ph$22751;
    (ph$22751 = $22733$22736);
    ($22738$22757 = ph$22751);
    if ((($22742$22768 = ($22738$22757 instanceof Array)) && (((t0$22762 = $22738$22757.length)), (($22744$22770 = (t0$22762 === 3)) && (($22745$22771 = ($22738$22757[0] === "send")) && (((t1$22763 = $22738$22757[1])), (($22747$22773 = (t1$22763 instanceof Array)) && (((t2$22764 = t1$22763.length)), (($22749$22775 = (t2$22764 === 2)) && (($22750$22776 = (t1$22763[0] === "symbol")) && ((t1$22763[1] === "finally") && (((t3$22765 = $22738$22757[2])), ((t3$22765 instanceof Array) && (((t4$22766 = t3$22765.length)), ((t4$22766 === 2) && (t3$22765[0] === "data")))))))))))))))) {
      (b$22779 = t3$22765[1]);
      return "finally";
    } else {
      if (($22750$22776 && ((t1$22763[1] === "->") && (((t3$22765 = $22738$22757[2])), ((t3$22765 instanceof Array) && (((t4$22766 = t3$22765.length)), ((t4$22766 === 3) && (t3$22765[0] === "data")))))))) {
        (e$22809 = t3$22765[1]);
        (b$22810 = t3$22765[2]);
        return "clause";
      } else {
        (other$22825 = $22738$22757);
        return "stmt";
      }
    }
  })));
  (t0$22829 = ((($22835$22850 = grouped$22726)), ((($22840$22869 = ($22835$22850 instanceof Array)) && (((t0$22855 = $22835$22850.length)), ((t0$22855 === 3) && (((t1$22856 = $22835$22850[0])), ((t1$22856 instanceof Array) && (((t2$22857 = t1$22856.length)), ((t2$22857 >= 1) && ((t1$22856[0] === "stmt") && ((a$22879 = Array.prototype.slice.call(t1$22856, 1)), (((t3$22858 = $22835$22850[1])), ((t3$22858 instanceof Array) && (((t4$22859 = t3$22858.length)), ((t4$22859 >= 1) && ((t3$22858[0] === "clause") && ((b$22880 = Array.prototype.slice.call(t3$22858, 1)), (((t5$22860 = $22835$22850[2])), ((t5$22860 instanceof Array) && (((t6$22861 = t5$22860.length)), ((t6$22861 === 2) && ((t5$22860[0] === "finally") && (((t7$22862 = t5$22860[1])), ((t7$22862 instanceof Array) && (((t8$22863 = t7$22862.length)), ((t8$22863 === 3) && ((t7$22862[0] === "send") && (((t9$22864 = t7$22862[1])), ((t9$22864 instanceof Array) && (((t10$22865 = t9$22864.length)), ((t10$22865 === 2) && ((t9$22864[0] === "symbol") && ((t9$22864[1] === "finally") && (((t11$22866 = t7$22862[2])), ((t11$22866 instanceof Array) && (((t12$22867 = t11$22866.length)), ((t12$22867 === 2) && (t11$22866[0] === "data")))))))))))))))))))))))))))))))))))) ? ((c$22881 = t11$22866[1]), [a$22879, b$22880, c$22881]) : (($22840$22869 && (($22842$22871 = (t0$22855 === 2)) && (((t1$22856 = $22835$22850[0])), (($22844$22873 = (t1$22856 instanceof Array)) && (((t2$22857 = t1$22856.length)), (($22846$22875 = (t2$22857 >= 1)) && (($22847$22876 = (t1$22856[0] === "stmt")) && ((a$22953 = Array.prototype.slice.call(t1$22856, 1)), (((t3$22858 = $22835$22850[1])), ((t3$22858 instanceof Array) && (((t4$22859 = t3$22858.length)), ((t4$22859 >= 1) && (t3$22858[0] === "clause"))))))))))))) ? ((b$22954 = Array.prototype.slice.call(t3$22858, 1)), [a$22953, b$22954, null]) : (($22847$22876 && ((a$22980 = Array.prototype.slice.call(t1$22856, 1)), (((t3$22858 = $22835$22850[1])), ((t3$22858 instanceof Array) && (((t4$22859 = t3$22858.length)), ((t4$22859 === 2) && ((t3$22858[0] === "finally") && (((t5$22860 = t3$22858[1])), ((t5$22860 instanceof Array) && (((t6$22861 = t5$22860.length)), ((t6$22861 === 3) && ((t5$22860[0] === "send") && (((t7$22862 = t5$22860[1])), ((t7$22862 instanceof Array) && (((t8$22863 = t7$22862.length)), ((t8$22863 === 2) && ((t7$22862[0] === "symbol") && ((t7$22862[1] === "finally") && (((t9$22864 = t5$22860[2])), ((t9$22864 instanceof Array) && (((t10$22865 = t9$22864.length)), ((t10$22865 === 2) && (t9$22864[0] === "data"))))))))))))))))))))))) ? ((c$22981 = t9$22864[1]), [a$22980, [], c$22981]) : ((otherwise$23027 = $22835$22850), (((msg$23031 = ["try expects a list of statements", "and one or more catch clauses and/or", "a finally clause"].join(" "))), (function() {
    throw ErrorFactory(["syntax", "try"]).create(msg$23031, ({"node": form$22661}));
  })())))))));
  if (((t0$22829 instanceof Array) && (((t1$22830 = t0$22829.length)), (t1$22830 === 3)))) {
    (stmts$22727 = t0$22829[0]);
    (clauses$22728 = t0$22829[1]);
    (finally$22729 = t0$22829[2]);
  } else {
    ___match_error(((($23043$23058 = grouped$22726)), ((($23048$23077 = ($23043$23058 instanceof Array)) && (((t0$23063 = $23043$23058.length)), ((t0$23063 === 3) && (((t1$23064 = $23043$23058[0])), ((t1$23064 instanceof Array) && (((t2$23065 = t1$23064.length)), ((t2$23065 >= 1) && ((t1$23064[0] === "stmt") && ((a$23087 = Array.prototype.slice.call(t1$23064, 1)), (((t3$23066 = $23043$23058[1])), ((t3$23066 instanceof Array) && (((t4$23067 = t3$23066.length)), ((t4$23067 >= 1) && ((t3$23066[0] === "clause") && ((b$23088 = Array.prototype.slice.call(t3$23066, 1)), (((t5$23068 = $23043$23058[2])), ((t5$23068 instanceof Array) && (((t6$23069 = t5$23068.length)), ((t6$23069 === 2) && ((t5$23068[0] === "finally") && (((t7$23070 = t5$23068[1])), ((t7$23070 instanceof Array) && (((t8$23071 = t7$23070.length)), ((t8$23071 === 3) && ((t7$23070[0] === "send") && (((t9$23072 = t7$23070[1])), ((t9$23072 instanceof Array) && (((t10$23073 = t9$23072.length)), ((t10$23073 === 2) && ((t9$23072[0] === "symbol") && ((t9$23072[1] === "finally") && (((t11$23074 = t7$23070[2])), ((t11$23074 instanceof Array) && (((t12$23075 = t11$23074.length)), ((t12$23075 === 2) && (t11$23074[0] === "data")))))))))))))))))))))))))))))))))))) ? ((c$23089 = t11$23074[1]), [a$23087, b$23088, c$23089]) : (($23048$23077 && (($23050$23079 = (t0$23063 === 2)) && (((t1$23064 = $23043$23058[0])), (($23052$23081 = (t1$23064 instanceof Array)) && (((t2$23065 = t1$23064.length)), (($23054$23083 = (t2$23065 >= 1)) && (($23055$23084 = (t1$23064[0] === "stmt")) && ((a$23161 = Array.prototype.slice.call(t1$23064, 1)), (((t3$23066 = $23043$23058[1])), ((t3$23066 instanceof Array) && (((t4$23067 = t3$23066.length)), ((t4$23067 >= 1) && (t3$23066[0] === "clause"))))))))))))) ? ((b$23162 = Array.prototype.slice.call(t3$23066, 1)), [a$23161, b$23162, null]) : (($23055$23084 && ((a$23188 = Array.prototype.slice.call(t1$23064, 1)), (((t3$23066 = $23043$23058[1])), ((t3$23066 instanceof Array) && (((t4$23067 = t3$23066.length)), ((t4$23067 === 2) && ((t3$23066[0] === "finally") && (((t5$23068 = t3$23066[1])), ((t5$23068 instanceof Array) && (((t6$23069 = t5$23068.length)), ((t6$23069 === 3) && ((t5$23068[0] === "send") && (((t7$23070 = t5$23068[1])), ((t7$23070 instanceof Array) && (((t8$23071 = t7$23070.length)), ((t8$23071 === 2) && ((t7$23070[0] === "symbol") && ((t7$23070[1] === "finally") && (((t9$23072 = t5$23068[2])), ((t9$23072 instanceof Array) && (((t10$23073 = t9$23072.length)), ((t10$23073 === 2) && (t9$23072[0] === "data"))))))))))))))))))))))) ? ((c$23189 = t9$23072[1]), [a$23188, [], c$23189]) : ((otherwise$23235 = $23043$23058), (((msg$23239 = ["try expects a list of statements", "and one or more catch clauses and/or", "a finally clause"].join(" "))), (function() {
      throw ErrorFactory(["syntax", "try"]).create(msg$23239, ({"node": form$22661}));
    })())))))), "/home/olivier/git/earl-grey/src/stdenv.eg", 22914, 23438);
  }
  if ((($22668$22719 = ($22664$22712 instanceof Array)) && (((t0$22717 = $22664$22712.length)), (($22670$22721 = (t0$22717 === 2)) && (($22671$22722 = ($22664$22712[0] === "expr")) && ($22664$22712[1] === "multi")))))) {
    return ["nostep", form$22661];
  } else {
    if (($22671$22722 && ($22664$22712[1] === "ignore"))) {
      clauses$22728.push(mkstdenv$18205().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
      return ["js_try", ["multi"].concat(stmts$22727), ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$18193(scope$22660, ["symbol", "excv"], clauses$22728, ({"wrap": (function(x$23259) {
          return x$23259;
        })}))]], (finally$22729 || ["void"])];
    } else {
      (other$23263 = $22664$22712);
      clauses$22728.push(mkstdenv$18205().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
      return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "rval"]], ["symbol", "false"]]], ["multi", ["js_try", ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], ["multi"].concat(stmts$22727)]], ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$18193(scope$22660, ["symbol", "excv"], clauses$22728, ({"wrap": (function(x$23268) {
          return ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], x$23268]];
        })}))]], (finally$22729 || ["void"])], ["symbol", "rval"]]]];
    }
  }
})), accum$22650)), __amp____colon__(((accum$23271 = ({})), ((accum$23271["!!"] = (function($23275$23280, scope$23281, form$23282, $23277$23283) {
  var t0$23300;
  var t1$23301;
  var t2$23302;
  var t3$23303;
  var t4$23304;
  var other$23366;
  var $23289$23342;
  var $23290$23343;
  var $23291$23344;
  var $23292$23345;
  var t0$23340;
  var $23285$23335;
  var ph$23293;
  var expr$23294;
  var clauses$23295;
  (ph$23293 = $23275$23280);
  (t0$23300 = $23277$23283);
  if (((t0$23300 instanceof Array) && (((t1$23301 = t0$23300.length)), ((t1$23301 === 3) && ((t0$23300[0] === "data") && ((expr$23294 = t0$23300[1]), (((t2$23302 = getProjector(Body$18188)(t0$23300[2]))), (t2$23302[0] && (((t3$23303 = t2$23302[1])), (((t4$23304 = t3$23303.length)), (t4$23304 >= 0))))))))))) {
    (clauses$23295 = Array.prototype.slice.call(t3$23303, 0));
  } else {
    ___match_error($23277$23283);
  }
  ($23285$23335 = ph$23293);
  if ((($23289$23342 = ($23285$23335 instanceof Array)) && (((t0$23340 = $23285$23335.length)), (($23291$23344 = (t0$23340 === 2)) && (($23292$23345 = ($23285$23335[0] === "expr")) && ($23285$23335[1] === "multi")))))) {
    return ["nostep", form$23282];
  } else {
    if (($23292$23345 && ($23285$23335[1] === "ignore"))) {
      clauses$23295.push(mkstdenv$18205().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
      return ["js_try", expr$23294, ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$18193(scope$23281, ["symbol", "excv"], clauses$23295, ({"wrap": (function(x$23362) {
          return x$23362;
        })}))]], ["void"]];
    } else {
      (other$23366 = $23285$23335);
      clauses$23295.push(mkstdenv$18205().mark(["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["symbol", "throw"], ["symbol", "e"]]]]));
      return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "rval"]], ["symbol", "false"]]], ["multi", ["js_try", ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], expr$23294]], ["send", ["symbol", "->"], ["data", ["data", ["symbol", "excv"]], parse_clauses$18193(scope$23281, ["symbol", "excv"], clauses$23295, ({"wrap": (function(x$23371) {
          return ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "rval"]], x$23371]];
        })}))]], ["void"]], ["symbol", "rval"]]]];
    }
  }
})), accum$23271)), __amp____colon__(({"@": var_operator$18222(expander$18206.gensym("it"))}), __amp____colon__(((accum$23374 = ({})), (((t0$23376 = getProjector(expr_mac$18213)((function(scope$23385, form$23386, $23382$23387) {
  var t0$23393;
  var t1$23394;
  var t2$23395;
  var t3$23396;
  var t4$23397;
  var t5$23398;
  var it$23436;
  var construct$23437;
  var defn$23389;
  var env$23390;
  var body$23391;
  (t0$23393 = $23382$23387);
  if (((t0$23393 instanceof Array) && (((t1$23394 = t0$23393.length)), ((t1$23394 === 3) && ((t0$23393[0] === "data") && (((t2$23395 = t0$23393[1])), ((defn$23389 = t2$23395), (___hasprop(t2$23395, "env") && ((env$23390 = t2$23395.env), (((t3$23396 = getProjector(Body$18188)(t0$23393[2]))), (t3$23396[0] && (((t4$23397 = t3$23396[1])), (((t5$23398 = t4$23397.length)), (t5$23398 >= 0)))))))))))))) {
    (body$23391 = Array.prototype.slice.call(t4$23397, 0));
  } else {
    ___match_error($23382$23387);
  }
  (it$23436 = __amp__(["symbol", "@"], ({"env": env$23390})));
  (construct$23437 = (function($23444$23447) {
    var x$23481;
    var rest$23482;
    var x$23471;
    var $23452$23467;
    var $23453$23468;
    var t0$23465;
    var $23449$23460;
    var ph$23454;
    (ph$23454 = $23444$23447);
    ($23449$23460 = ph$23454);
    if ((($23452$23467 = ($23449$23460 instanceof Array)) && (((t0$23465 = $23449$23460.length)), (t0$23465 === 1)))) {
      (x$23471 = $23449$23460[0]);
      return x$23471;
    } else {
      if (($23452$23467 && (t0$23465 >= 1))) {
        (x$23481 = $23449$23460[0]);
        (rest$23482 = Array.prototype.slice.call($23449$23460, 1));
        return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$23436, x$23481]], construct$23437(rest$23482)]];
      } else {
        ___match_error($23449$23460);
      }
    }
  }));
  return construct$23437([defn$23389].concat(body$23391));
})))), (t0$23376[0] ? ((accum$23374["chain"] = t0$23376[1]), accum$23374) : ___match_error((function(scope$23494, form$23495, $23491$23496) {
  var t0$23502;
  var t1$23503;
  var t2$23504;
  var t3$23505;
  var t4$23506;
  var t5$23507;
  var it$23545;
  var construct$23546;
  var defn$23498;
  var env$23499;
  var body$23500;
  (t0$23502 = $23491$23496);
  if (((t0$23502 instanceof Array) && (((t1$23503 = t0$23502.length)), ((t1$23503 === 3) && ((t0$23502[0] === "data") && (((t2$23504 = t0$23502[1])), ((defn$23498 = t2$23504), (___hasprop(t2$23504, "env") && ((env$23499 = t2$23504.env), (((t3$23505 = getProjector(Body$18188)(t0$23502[2]))), (t3$23505[0] && (((t4$23506 = t3$23505[1])), (((t5$23507 = t4$23506.length)), (t5$23507 >= 0)))))))))))))) {
    (body$23500 = Array.prototype.slice.call(t4$23506, 0));
  } else {
    ___match_error($23491$23496);
  }
  (it$23545 = __amp__(["symbol", "@"], ({"env": env$23499})));
  (construct$23546 = (function($23553$23556) {
    var x$23590;
    var rest$23591;
    var x$23580;
    var $23561$23576;
    var $23562$23577;
    var t0$23574;
    var $23558$23569;
    var ph$23563;
    (ph$23563 = $23553$23556);
    ($23558$23569 = ph$23563);
    if ((($23561$23576 = ($23558$23569 instanceof Array)) && (((t0$23574 = $23558$23569.length)), (t0$23574 === 1)))) {
      (x$23580 = $23558$23569[0]);
      return x$23580;
    } else {
      if (($23561$23576 && (t0$23574 >= 1))) {
        (x$23590 = $23558$23569[0]);
        (rest$23591 = Array.prototype.slice.call($23558$23569, 1));
        return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$23545, x$23590]], construct$23546(rest$23591)]];
      } else {
        ___match_error($23558$23569);
      }
    }
  }));
  return construct$23546([defn$23498].concat(body$23500));
}))))), __amp____colon__(((accum$23598 = ({})), (((t0$23600 = getProjector(expr_mac$18213)((function(scope$23609, form$23610, $23606$23611) {
  var t0$23617;
  var t1$23618;
  var t2$23619;
  var it$23640;
  var defn$23613;
  var env$23614;
  var body$23615;
  (t0$23617 = $23606$23611);
  if (((t0$23617 instanceof Array) && (((t1$23618 = t0$23617.length)), ((t1$23618 === 3) && ((t0$23617[0] === "data") && (((t2$23619 = t0$23617[1])), ((defn$23613 = t2$23619), ___hasprop(t2$23619, "env")))))))) {
    (env$23614 = t2$23619.env);
    (body$23615 = t0$23617[2]);
  } else {
    ___match_error($23606$23611);
  }
  (it$23640 = __amp__(["symbol", "@"], ({"env": env$23614})));
  return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$23640, defn$23613]], body$23615]];
})))), (t0$23600[0] ? ((accum$23598["using"] = t0$23600[1]), accum$23598) : ___match_error((function(scope$23650, form$23651, $23647$23652) {
  var t0$23658;
  var t1$23659;
  var t2$23660;
  var it$23681;
  var defn$23654;
  var env$23655;
  var body$23656;
  (t0$23658 = $23647$23652);
  if (((t0$23658 instanceof Array) && (((t1$23659 = t0$23658.length)), ((t1$23659 === 3) && ((t0$23658[0] === "data") && (((t2$23660 = t0$23658[1])), ((defn$23654 = t2$23660), ___hasprop(t2$23660, "env")))))))) {
    (env$23655 = t2$23660.env);
    (body$23656 = t0$23658[2]);
  } else {
    ___match_error($23647$23652);
  }
  (it$23681 = __amp__(["symbol", "@"], ({"env": env$23655})));
  return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", it$23681, defn$23654]], body$23656]];
}))))), __amp____colon__(((accum$23686 = ({})), (((t0$23688 = getProjector(overridable$18217)((function($23694$23699, scope$23700, form$23701, $23696$23702) {
  var t0$23714;
  var t1$23715;
  var x$23741;
  var x$23751;
  var t0$23760;
  var t1$23761;
  var t2$23762;
  var stmts$23758;
  var x$23785;
  var $23704$23730;
  var ph$23708;
  var body$23709;
  (ph$23708 = $23694$23699);
  (t0$23714 = $23696$23702);
  if (((t0$23714 instanceof Array) && (((t1$23715 = t0$23714.length)), ((t1$23715 === 2) && (t0$23714[0] === "data"))))) {
    (body$23709 = t0$23714[1]);
  } else {
    ___match_error($23696$23702);
  }
  ($23704$23730 = ph$23708);
  if ((((x$23741 = $23704$23730)), ((x$23741 instanceof Array) && (x$23741[0] === "clause")))) {
    return ["block", body$23709];
  } else {
    if ((((x$23751 = $23704$23730)), ((x$23751 instanceof Array) && (x$23751[0] === "test")))) {
      (t0$23760 = getProjector(Body$18188)(body$23709));
      if ((t0$23760[0] && (((t1$23761 = t0$23760[1])), (((t2$23762 = t1$23761.length)), (t2$23762 >= 0))))) {
        (stmts$23758 = Array.prototype.slice.call(t1$23761, 0));
      } else {
        ___match_error(body$23709, "/home/olivier/git/earl-grey/src/stdenv.eg", 25591, 25595);
      }
      return ["do", ["splice"].concat(stmts$23758)];
    } else {
      if ((((x$23785 = $23704$23730)), ((x$23785 instanceof Array) && (x$23785[0] === "expr")))) {
        return ["multi", body$23709];
      } else {
        ___match_error($23704$23730);
      }
    }
  }
})))), (t0$23688[0] ? ((accum$23686["do"] = t0$23688[1]), accum$23686) : ___match_error((function($23795$23800, scope$23801, form$23802, $23797$23803) {
  var t0$23815;
  var t1$23816;
  var x$23842;
  var x$23852;
  var t0$23861;
  var t1$23862;
  var t2$23863;
  var stmts$23859;
  var x$23886;
  var $23805$23831;
  var ph$23809;
  var body$23810;
  (ph$23809 = $23795$23800);
  (t0$23815 = $23797$23803);
  if (((t0$23815 instanceof Array) && (((t1$23816 = t0$23815.length)), ((t1$23816 === 2) && (t0$23815[0] === "data"))))) {
    (body$23810 = t0$23815[1]);
  } else {
    ___match_error($23797$23803);
  }
  ($23805$23831 = ph$23809);
  if ((((x$23842 = $23805$23831)), ((x$23842 instanceof Array) && (x$23842[0] === "clause")))) {
    return ["block", body$23810];
  } else {
    if ((((x$23852 = $23805$23831)), ((x$23852 instanceof Array) && (x$23852[0] === "test")))) {
      (t0$23861 = getProjector(Body$18188)(body$23810));
      if ((t0$23861[0] && (((t1$23862 = t0$23861[1])), (((t2$23863 = t1$23862.length)), (t2$23863 >= 0))))) {
        (stmts$23859 = Array.prototype.slice.call(t1$23862, 0));
      } else {
        ___match_error(body$23810, "/home/olivier/git/earl-grey/src/stdenv.eg", 25591, 25595);
      }
      return ["do", ["splice"].concat(stmts$23859)];
    } else {
      if ((((x$23886 = $23805$23831)), ((x$23886 instanceof Array) && (x$23886[0] === "expr")))) {
        return ["multi", body$23810];
      } else {
        ___match_error($23805$23831);
      }
    }
  }
}))))), __amp____colon__(((accum$23894 = ({})), ((accum$23894["if"] = (function(ctx$23901, scope$23902, form$23903, $23898$23904) {
  var t0$24246;
  var $24145$24241;
  var piece_together$24148;
  var conditions$24149;
  var body$24140;
  var s1$24103;
  var b$24104;
  var a$24036;
  var b$24037;
  var a$23992;
  var $23914$23987;
  var $23915$23988;
  var $23916$23989;
  var t0$23972;
  var t1$23973;
  var t2$23974;
  var t3$23975;
  var t4$23976;
  var t5$23977;
  var t6$23978;
  var t7$23979;
  var t8$23980;
  var t9$23981;
  var t10$23982;
  var t11$23983;
  var t12$23984;
  var t13$23985;
  var test$23951;
  var $23909$23952;
  var test$23939;
  var a$23940;
  var b$23941;
  var $23917$23935;
  var $23918$23936;
  var t0$23930;
  var t1$23931;
  var t2$23932;
  var t3$23933;
  var $23906$23925;
  var ph$23919;
  (ph$23919 = $23898$23904);
  ($23906$23925 = ph$23919);
  if ((($23917$23935 = ($23906$23925 instanceof Array)) && (((t0$23930 = $23906$23925.length)), ((t0$23930 === 4) && ($23906$23925[0] === "data"))))) {
    (test$23939 = $23906$23925[1]);
    (a$23940 = $23906$23925[2]);
    (b$23941 = $23906$23925[3]);
    return ["if", test$23939, a$23940, b$23941];
  } else {
    if (($23917$23935 && ((t0$23930 === 3) && (($23906$23925[0] === "data") && ((test$23951 = $23906$23925[1]), (((t1$23931 = getProjector(["multi"])($23906$23925[2]))), (t1$23931[0] && (((t2$23932 = t1$23931[1])), (((t3$23933 = t2$23932.length)), ((t3$23933 >= 1) && (t2$23932[0] === "multi"))))))))))) {
      ($23909$23952 = Array.prototype.slice.call(t2$23932, 1));
      (t0$23972 = $23909$23952);
      if ((($23915$23988 = (t0$23972 instanceof Array)) && (((t1$23973 = t0$23972.length)), ((t1$23973 === 1) && (((t2$23974 = t0$23972[0])), ((t2$23974 instanceof Array) && (((t3$23975 = t2$23974.length)), ((t3$23975 === 3) && ((t2$23974[0] === "send") && (((t4$23976 = t2$23974[1])), ((t4$23976 instanceof Array) && (((t5$23977 = t4$23976.length)), ((t5$23977 === 2) && ((t4$23976[0] === "symbol") && ((t4$23976[1] === "then") && (((t6$23978 = t2$23974[2])), ((t6$23978 instanceof Array) && (((t7$23979 = t6$23978.length)), ((t7$23979 === 2) && (t6$23978[0] === "data")))))))))))))))))))) {
        (a$23992 = t6$23978[1]);
        return ["if", test$23951, a$23992, ["value", undefined]];
      } else {
        if (($23915$23988 && ((t1$23973 === 2) && (((t2$23974 = t0$23972[0])), ((t2$23974 instanceof Array) && (((t3$23975 = t2$23974.length)), ((t3$23975 === 3) && ((t2$23974[0] === "send") && (((t4$23976 = t2$23974[1])), ((t4$23976 instanceof Array) && (((t5$23977 = t4$23976.length)), ((t5$23977 === 2) && ((t4$23976[0] === "symbol") && ((t4$23976[1] === "then") && (((t6$23978 = t2$23974[2])), ((t6$23978 instanceof Array) && (((t7$23979 = t6$23978.length)), ((t7$23979 === 2) && ((t6$23978[0] === "data") && ((a$24036 = t6$23978[1]), (((t8$23980 = t0$23972[1])), ((t8$23980 instanceof Array) && (((t9$23981 = t8$23980.length)), ((t9$23981 === 3) && ((t8$23980[0] === "send") && (((t10$23982 = t8$23980[1])), ((t10$23982 instanceof Array) && (((t11$23983 = t10$23982.length)), ((t11$23983 === 2) && ((t10$23982[0] === "symbol") && ((t10$23982[1] === "else") && (((t12$23984 = t8$23980[2])), ((t12$23984 instanceof Array) && (((t13$23985 = t12$23984.length)), ((t13$23985 === 2) && (t12$23984[0] === "data")))))))))))))))))))))))))))))))))))) {
          (b$24037 = t12$23984[1]);
          return ["if", test$23951, a$24036, b$24037];
        } else {
          if (($23915$23988 && ((t1$23973 >= 1) && ((s1$24103 = Array.prototype.slice.call(t0$23972, 0, -1)), (((t2$23974 = t0$23972[(t1$23973 - 1)])), ((t2$23974 instanceof Array) && (((t3$23975 = t2$23974.length)), ((t3$23975 === 3) && ((t2$23974[0] === "send") && (((t4$23976 = t2$23974[1])), ((t4$23976 instanceof Array) && (((t5$23977 = t4$23976.length)), ((t5$23977 === 2) && ((t4$23976[0] === "symbol") && ((t4$23976[1] === "else") && (((t6$23978 = t2$23974[2])), ((t6$23978 instanceof Array) && (((t7$23979 = t6$23978.length)), ((t7$23979 === 2) && (t6$23978[0] === "data")))))))))))))))))))) {
            (b$24104 = t6$23978[1]);
            return ["if", test$23951, ["multi"].concat(s1$24103), b$24104];
          } else {
            (body$24140 = $23909$23952);
            (piece_together$24148 = (function(conditions$24154) {
              var $index$24183;
              var $length$24177;
              var temp$24171;
              var rval$24158;
              (rval$24158 = ["value", undefined]);
              (temp$24171 = conditions$24154.reverse());
              ($length$24177 = temp$24171.length);
              ($index$24183 = 0);
              $24159: for (; ($index$24183 < $length$24177); ($index$24183++)) {
                var test$24227;
                var bod$24202;
                var $24162$24203;
                var t0$24197;
                var t1$24198;
                var m$24192;
                (m$24192 = temp$24171[$index$24183]);
                (t0$24197 = m$24192);
                if (((t0$24197 instanceof Array) && (((t1$24198 = t0$24197.length)), (t1$24198 === 2)))) {
                  ($24162$24203 = t0$24197[0]);
                  (bod$24202 = t0$24197[1]);
                  if (($24162$24203 === null)) {
                    (rval$24158 = bod$24202);
                  } else {
                    (test$24227 = $24162$24203);
                    (rval$24158 = ["if", test$24227, bod$24202, rval$24158]);
                  }
                } else {
                  ___match_error(m$24192, "/home/olivier/git/earl-grey/src/stdenv.eg", 26912, 27103);
                }
              }
              return rval$24158;
            }));
            (conditions$24149 = [[test$23951, ["multi"].concat(body$24140)]]);
            ($24145$24241 = ctx$23901);
            if ((($24145$24241 instanceof Array) && (((t0$24246 = $24145$24241.length)), ((t0$24246 === 2) && (($24145$24241[0] === "expr") && ($24145$24241[1] === "multi")))))) {
              return ["restmacro", (function(stmts$24259) {
                $24262: while (stmts$24259.length) {
                  var x$24348;
                  var body$24333;
                  var cond$24302;
                  var body$24303;
                  var $24269$24291;
                  var $24270$24292;
                  var $24271$24293;
                  var $24272$24294;
                  var $24273$24295;
                  var $24274$24296;
                  var $24275$24297;
                  var $24276$24298;
                  var $24277$24299;
                  var t0$24285;
                  var t1$24286;
                  var t2$24287;
                  var t3$24288;
                  var t4$24289;
                  var $24265$24280;
                  ($24265$24280 = stmts$24259.shift());
                  if ((($24269$24291 = ($24265$24280 instanceof Array)) && (((t0$24285 = $24265$24280.length)), (($24271$24293 = (t0$24285 === 3)) && (($24272$24294 = ($24265$24280[0] === "send")) && (((t1$24286 = $24265$24280[1])), (($24274$24296 = (t1$24286 instanceof Array)) && (((t2$24287 = t1$24286.length)), (($24276$24298 = (t2$24287 === 2)) && (($24277$24299 = (t1$24286[0] === "symbol")) && ((t1$24286[1] === "elif") && (((t3$24288 = $24265$24280[2])), ((t3$24288 instanceof Array) && (((t4$24289 = t3$24288.length)), ((t4$24289 === 3) && (t3$24288[0] === "data")))))))))))))))) {
                    (cond$24302 = t3$24288[1]);
                    (body$24303 = t3$24288[2]);
                    conditions$24149.push([cond$24302, body$24303]);
                  } else {
                    if (($24277$24299 && ((t1$24286[1] === "else") && (((t3$24288 = $24265$24280[2])), ((t3$24288 instanceof Array) && (((t4$24289 = t3$24288.length)), ((t4$24289 === 2) && (t3$24288[0] === "data")))))))) {
                      (body$24333 = t3$24288[1]);
                      conditions$24149.push([null, body$24333]);
                    } else {
                      (x$24348 = $24265$24280);
                      stmts$24259.unshift(x$24348);
                      break $24262;
                    }
                  }
                }
                return [piece_together$24148(conditions$24149)].concat(stmts$24259);
              })];
            } else {
              $24145$24241;
              return piece_together$24148(conditions$24149);
            }
          }
        }
      }
    } else {
      ___match_error($23906$23925);
    }
  }
})), accum$23894)), __amp____colon__(((accum$24357 = ({})), (((t0$24359 = getProjector(expr_mac$18213)((function(scope$24368, form$24369, $24365$24370) {
  var t0$24379;
  var t0$24406;
  var t1$24407;
  var t2$24408;
  var t3$24409;
  var t4$24410;
  var t5$24411;
  var t6$24412;
  var t7$24413;
  var t8$24414;
  var t0$24462;
  var test$24498;
  var body$24499;
  var label$24399;
  var bridge$24374$24394;
  var t0$24395;
  var $24372$24389;
  var ph$24376;
  var env$24377;
  (t0$24379 = $24365$24370);
  if (___hasprop(t0$24379, "env")) {
    (env$24377 = t0$24379.env);
    (ph$24376 = t0$24379);
  } else {
    ___match_error($24365$24370);
  }
  ($24372$24389 = ph$24376);
  (bridge$24374$24394 = $24372$24389);
  if ((((bridge$24374$24394 instanceof Array) && (((t0$24406 = bridge$24374$24394.length)), ((t0$24406 === 3) && ((bridge$24374$24394[0] === "send") && (((t1$24407 = bridge$24374$24394[1])), ((t1$24407 instanceof Array) && (((t2$24408 = t1$24407.length)), ((t2$24408 === 2) && ((t1$24407[0] === "symbol") && ((t1$24407[1] === ".") && (((t3$24409 = bridge$24374$24394[2])), ((t3$24409 instanceof Array) && (((t4$24410 = t3$24409.length)), ((t4$24410 === 3) && ((t3$24409[0] === "data") && (((t5$24411 = t3$24409[1])), ((t5$24411 instanceof Array) && (((t6$24412 = t5$24411.length)), ((t6$24412 === 1) && ((t5$24411[0] === "void") && (((t7$24413 = t3$24409[2])), ((t7$24413 instanceof Array) && (((t8$24414 = t7$24413.length)), ((t8$24414 === 2) && ((t7$24413[0] === "symbol") && ((label$24399 = t7$24413[1]), true)))))))))))))))))))))))))) || ((bridge$24374$24394 instanceof Array) && (((t0$24462 = bridge$24374$24394.length)), ((t0$24462 === 2) && ((bridge$24374$24394[0] === "value") && ((label$24399 = bridge$24374$24394[1]), true))))))) {
    return ["macro", (function(context$24474, scope$24475, form$24476, $24471$24477) {
      var t0$24482;
      var t1$24483;
      var test$24479;
      var body$24480;
      (t0$24482 = $24471$24477);
      if (((t0$24482 instanceof Array) && (((t1$24483 = t0$24482.length)), ((t1$24483 === 3) && (t0$24482[0] === "data"))))) {
        (test$24479 = t0$24482[1]);
        (body$24480 = t0$24482[2]);
      } else {
        ___match_error($24471$24477);
      }
      return setup_label$18219(label$24399, env$24377, ["js_while", test$24479, body$24480]);
    })];
  } else {
    if ((($24372$24389 instanceof Array) && (((t0$24395 = $24372$24389.length)), ((t0$24395 === 3) && ($24372$24389[0] === "data"))))) {
      (test$24498 = $24372$24389[1]);
      (body$24499 = $24372$24389[2]);
      return setup_label$18219(scope$24368.gensym(), env$24377, ["js_while", test$24498, body$24499]);
    } else {
      ___match_error($24372$24389);
    }
  }
})))), (t0$24359[0] ? ((accum$24357["while"] = t0$24359[1]), accum$24357) : ___match_error((function(scope$24515, form$24516, $24512$24517) {
  var t0$24526;
  var t0$24553;
  var t1$24554;
  var t2$24555;
  var t3$24556;
  var t4$24557;
  var t5$24558;
  var t6$24559;
  var t7$24560;
  var t8$24561;
  var t0$24609;
  var test$24645;
  var body$24646;
  var label$24546;
  var bridge$24521$24541;
  var t0$24542;
  var $24519$24536;
  var ph$24523;
  var env$24524;
  (t0$24526 = $24512$24517);
  if (___hasprop(t0$24526, "env")) {
    (env$24524 = t0$24526.env);
    (ph$24523 = t0$24526);
  } else {
    ___match_error($24512$24517);
  }
  ($24519$24536 = ph$24523);
  (bridge$24521$24541 = $24519$24536);
  if ((((bridge$24521$24541 instanceof Array) && (((t0$24553 = bridge$24521$24541.length)), ((t0$24553 === 3) && ((bridge$24521$24541[0] === "send") && (((t1$24554 = bridge$24521$24541[1])), ((t1$24554 instanceof Array) && (((t2$24555 = t1$24554.length)), ((t2$24555 === 2) && ((t1$24554[0] === "symbol") && ((t1$24554[1] === ".") && (((t3$24556 = bridge$24521$24541[2])), ((t3$24556 instanceof Array) && (((t4$24557 = t3$24556.length)), ((t4$24557 === 3) && ((t3$24556[0] === "data") && (((t5$24558 = t3$24556[1])), ((t5$24558 instanceof Array) && (((t6$24559 = t5$24558.length)), ((t6$24559 === 1) && ((t5$24558[0] === "void") && (((t7$24560 = t3$24556[2])), ((t7$24560 instanceof Array) && (((t8$24561 = t7$24560.length)), ((t8$24561 === 2) && ((t7$24560[0] === "symbol") && ((label$24546 = t7$24560[1]), true)))))))))))))))))))))))))) || ((bridge$24521$24541 instanceof Array) && (((t0$24609 = bridge$24521$24541.length)), ((t0$24609 === 2) && ((bridge$24521$24541[0] === "value") && ((label$24546 = bridge$24521$24541[1]), true))))))) {
    return ["macro", (function(context$24621, scope$24622, form$24623, $24618$24624) {
      var t0$24629;
      var t1$24630;
      var test$24626;
      var body$24627;
      (t0$24629 = $24618$24624);
      if (((t0$24629 instanceof Array) && (((t1$24630 = t0$24629.length)), ((t1$24630 === 3) && (t0$24629[0] === "data"))))) {
        (test$24626 = t0$24629[1]);
        (body$24627 = t0$24629[2]);
      } else {
        ___match_error($24618$24624);
      }
      return setup_label$18219(label$24546, env$24524, ["js_while", test$24626, body$24627]);
    })];
  } else {
    if ((($24519$24536 instanceof Array) && (((t0$24542 = $24519$24536.length)), ((t0$24542 === 3) && ($24519$24536[0] === "data"))))) {
      (test$24645 = $24519$24536[1]);
      (body$24646 = $24519$24536[2]);
      return setup_label$18219(scope$24515.gensym(), env$24524, ["js_while", test$24645, body$24646]);
    } else {
      ___match_error($24519$24536);
    }
  }
}))))), __amp____colon__(((accum$24657 = ({})), ((accum$24657["for"] = (function(context$24664, scope$24665, form$24666, $24661$24667) {
  var t0$24676;
  var t0$24812;
  var t1$24813;
  var t2$24814;
  var t3$24815;
  var t4$24816;
  var t5$24817;
  var t6$24818;
  var t7$24819;
  var t8$24820;
  var t0$24868;
  var spec$24904;
  var body$24905;
  var label$24805;
  var setup_for$24695;
  var bridge$24671$24690;
  var t0$24691;
  var $24669$24685;
  var ph$24673;
  var expr$24674;
  (t0$24676 = $24661$24667);
  (expr$24674 = t0$24676);
  (ph$24673 = t0$24676);
  ($24669$24685 = ph$24673);
  (setup_for$24695 = (function(label$24702, env$24703, $24699$24704, body$24705) {
    var a$24786;
    var b$24787;
    var a$24760;
    var b$24761;
    var a$24748;
    var b$24749;
    var c$24750;
    var $24711$24737;
    var $24712$24738;
    var $24713$24739;
    var $24714$24740;
    var $24715$24741;
    var $24716$24742;
    var $24717$24743;
    var $24718$24744;
    var $24719$24745;
    var t0$24731;
    var t1$24732;
    var t2$24733;
    var t3$24734;
    var t4$24735;
    var $24707$24726;
    var ph$24720;
    (ph$24720 = $24699$24704);
    ($24707$24726 = ph$24720);
    if ((($24711$24737 = ($24707$24726 instanceof Array)) && (((t0$24731 = $24707$24726.length)), ((t0$24731 === 4) && ($24707$24726[0] === "multi"))))) {
      (a$24748 = $24707$24726[1]);
      (b$24749 = $24707$24726[2]);
      (c$24750 = $24707$24726[3]);
      return ["multi", a$24748, setup_label$18219(label$24702, env$24703, ["js_for", ["multi"], b$24749, c$24750, body$24705])];
    } else {
      if (($24711$24737 && (($24713$24739 = (t0$24731 === 3)) && (($24714$24740 = ($24707$24726[0] === "send")) && (((t1$24732 = $24707$24726[1])), (($24716$24742 = (t1$24732 instanceof Array)) && (((t2$24733 = t1$24732.length)), (($24718$24744 = (t2$24733 === 2)) && (($24719$24745 = (t1$24732[0] === "symbol")) && ((t1$24732[1] === "in") && (((t3$24734 = $24707$24726[2])), ((t3$24734 instanceof Array) && (((t4$24735 = t3$24734.length)), ((t4$24735 === 3) && (t3$24734[0] === "data"))))))))))))))) {
        (a$24760 = t3$24734[1]);
        (b$24761 = t3$24734[2]);
        return ["multi", ["declare", a$24760, ["value", null]], setup_label$18219(label$24702, env$24703, ["js_for_in", a$24760, b$24761, body$24705])];
      } else {
        if (($24719$24745 && ((t1$24732[1] === "of") && (((t3$24734 = $24707$24726[2])), ((t3$24734 instanceof Array) && (((t4$24735 = t3$24734.length)), ((t4$24735 === 3) && (t3$24734[0] === "data")))))))) {
          (a$24786 = t3$24734[1]);
          (b$24787 = t3$24734[2]);
          return ["multi", ["declare", a$24786, ["value", null]], setup_label$18219(label$24702, env$24703, ["js_for_of", a$24786, b$24787, body$24705])];
        } else {
          ___match_error($24707$24726);
        }
      }
    }
  }));
  (bridge$24671$24690 = $24669$24685);
  if ((((bridge$24671$24690 instanceof Array) && (((t0$24812 = bridge$24671$24690.length)), ((t0$24812 === 3) && ((bridge$24671$24690[0] === "send") && (((t1$24813 = bridge$24671$24690[1])), ((t1$24813 instanceof Array) && (((t2$24814 = t1$24813.length)), ((t2$24814 === 2) && ((t1$24813[0] === "symbol") && ((t1$24813[1] === ".") && (((t3$24815 = bridge$24671$24690[2])), ((t3$24815 instanceof Array) && (((t4$24816 = t3$24815.length)), ((t4$24816 === 3) && ((t3$24815[0] === "data") && (((t5$24817 = t3$24815[1])), ((t5$24817 instanceof Array) && (((t6$24818 = t5$24817.length)), ((t6$24818 === 1) && ((t5$24817[0] === "void") && (((t7$24819 = t3$24815[2])), ((t7$24819 instanceof Array) && (((t8$24820 = t7$24819.length)), ((t8$24820 === 2) && ((t7$24819[0] === "symbol") && ((label$24805 = t7$24819[1]), true)))))))))))))))))))))))))) || ((bridge$24671$24690 instanceof Array) && (((t0$24868 = bridge$24671$24690.length)), ((t0$24868 === 2) && ((bridge$24671$24690[0] === "value") && ((label$24805 = bridge$24671$24690[1]), true))))))) {
    return ["macro", (function(context$24880, scope$24881, form$24882, $24877$24883) {
      var t0$24888;
      var t1$24889;
      var spec$24885;
      var body$24886;
      (t0$24888 = $24877$24883);
      if (((t0$24888 instanceof Array) && (((t1$24889 = t0$24888.length)), ((t1$24889 === 3) && (t0$24888[0] === "data"))))) {
        (spec$24885 = t0$24888[1]);
        (body$24886 = t0$24888[2]);
      } else {
        ___match_error($24877$24883);
      }
      return setup_for$24695(label$24805, expr$24674.env, spec$24885, body$24886);
    })];
  } else {
    if ((($24669$24685 instanceof Array) && (((t0$24691 = $24669$24685.length)), ((t0$24691 === 3) && ($24669$24685[0] === "data"))))) {
      (spec$24904 = $24669$24685[1]);
      (body$24905 = $24669$24685[2]);
      return setup_for$24695(scope$24665.gensym(), form$24666.env, spec$24904, body$24905);
    } else {
      ___match_error($24669$24685);
    }
  }
})), accum$24657)), __amp____colon__(((accum$24916 = ({})), ((accum$24916["var"] = (function($24920$24923, scope$24924, form$24925, argument$24926) {
  var x$24932;
  if ((((x$24932 = $24920$24923)), ((x$24932 instanceof Array) && (x$24932[0] === "pattern")))) {} else {
    ___match_error($24920$24923);
  }
  return ["mode", "var", argument$24926];
})), accum$24916)), __amp____colon__(((accum$24939 = ({})), ((accum$24939["set"] = (function($24943$24946, scope$24947, form$24948, argument$24949) {
  var x$24955;
  if ((((x$24955 = $24943$24946)), ((x$24955 instanceof Array) && (x$24955[0] === "pattern")))) {} else {
    ___match_error($24943$24946);
  }
  return ["mode", "set", argument$24949];
})), accum$24939)), __amp____colon__(((accum$24962 = ({})), ((accum$24962["let"] = (function($24966$24969, scope$24970, form$24971, argument$24972) {
  var x$24994;
  var construct$25045;
  var bindings$25019;
  var body$25020;
  var t0$25012;
  var t1$25013;
  var t2$25014;
  var t3$25015;
  var $25003$25007;
  var other$25001;
  var $24974$24983;
  var ph$24977;
  (ph$24977 = $24966$24969);
  ($24974$24983 = ph$24977);
  if ((((x$24994 = $24974$24983)), ((x$24994 instanceof Array) && (x$24994[0] === "pattern")))) {
    return ["mode", "let", argument$24972];
  } else {
    (other$25001 = $24974$24983);
    ($25003$25007 = argument$24972);
    if ((($25003$25007 instanceof Array) && (((t0$25012 = $25003$25007.length)), ((t0$25012 === 3) && (($25003$25007[0] === "data") && (((t1$25013 = getProjector(Body$18188)($25003$25007[1]))), (t1$25013[0] && (((t2$25014 = t1$25013[1])), (((t3$25015 = t2$25014.length)), (t3$25015 >= 0)))))))))) {
      (bindings$25019 = Array.prototype.slice.call(t2$25014, 0));
      (body$25020 = $25003$25007[2]);
      (construct$25045 = (function($25049$25052) {
        var bind$25091;
        var val$25092;
        var xs$25093;
        var $25057$25078;
        var $25058$25079;
        var t0$25070;
        var t1$25071;
        var t2$25072;
        var t3$25073;
        var t4$25074;
        var t5$25075;
        var t6$25076;
        var $25054$25065;
        var ph$25059;
        (ph$25059 = $25049$25052);
        ($25054$25065 = ph$25059);
        if ((($25057$25078 = ($25054$25065 instanceof Array)) && (((t0$25070 = $25054$25065.length)), (t0$25070 === 0)))) {
          return body$25020;
        } else {
          if (($25057$25078 && ((t0$25070 >= 1) && (((t1$25071 = $25054$25065[0])), ((t1$25071 instanceof Array) && (((t2$25072 = t1$25071.length)), ((t2$25072 === 3) && ((t1$25071[0] === "send") && (((t3$25073 = t1$25071[1])), ((t3$25073 instanceof Array) && (((t4$25074 = t3$25073.length)), ((t4$25074 === 2) && ((t3$25073[0] === "symbol") && ((t3$25073[1] === "=") && (((t5$25075 = t1$25071[2])), ((t5$25075 instanceof Array) && (((t6$25076 = t5$25075.length)), ((t6$25076 === 3) && (t5$25075[0] === "data"))))))))))))))))))) {
            (bind$25091 = t5$25075[1]);
            (val$25092 = t5$25075[2]);
            (xs$25093 = Array.prototype.slice.call($25054$25065, 1));
            return __amp__(["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], bind$25091], val$25092]], construct$25045(xs$25093)], ({"nonrecursive": true}));
          } else {
            ___match_error($25054$25065);
          }
        }
      }));
      return construct$25045(bindings$25019);
    } else {
      ___match_error($25003$25007);
    }
  }
})), accum$24962)), __amp____colon__(((accum$25132 = ({})), (((t0$25134 = getProjector(expr_mac$18213)((function(scope$25143, form$25144, $25140$25145) {
  var t0$25150;
  var t1$25151;
  var t2$25152;
  var t3$25153;
  var t4$25154;
  var $index$25210;
  var $length$25204;
  var temp$25198;
  var acc$25192;
  var let_bindings$25184;
  var bindings$25147;
  var body$25148;
  (t0$25150 = $25140$25145);
  if (((t0$25150 instanceof Array) && (((t1$25151 = t0$25150.length)), ((t1$25151 === 3) && ((t0$25150[0] === "data") && (((t2$25152 = getProjector(Body$18188)(t0$25150[1]))), (t2$25152[0] && (((t3$25153 = t2$25152[1])), (((t4$25154 = t3$25153.length)), (t4$25154 >= 0)))))))))) {
    (bindings$25147 = Array.prototype.slice.call(t3$25153, 0));
    (body$25148 = t0$25150[2]);
  } else {
    ___match_error($25140$25145);
  }
  (let_bindings$25184 = (((acc$25192 = [])), (((temp$25198 = bindings$25147)), ((($length$25204 = temp$25198.length)), ((($index$25210 = 0)), (function() {
    $25187: for (; ($index$25210 < $length$25204); ($index$25210++)) {
      var b$25233;
      var v$25234;
      var t0$25224;
      var t1$25225;
      var t2$25226;
      var t3$25227;
      var t4$25228;
      var t5$25229;
      var m$25219;
      (m$25219 = temp$25198[$index$25210]);
      (t0$25224 = m$25219);
      if (((t0$25224 instanceof Array) && (((t1$25225 = t0$25224.length)), ((t1$25225 === 3) && ((t0$25224[0] === "send") && (((t2$25226 = t0$25224[1])), ((t2$25226 instanceof Array) && (((t3$25227 = t2$25226.length)), ((t3$25227 === 2) && ((t2$25226[0] === "symbol") && ((t2$25226[1] === "=") && (((t4$25228 = t0$25224[2])), ((t4$25228 instanceof Array) && (((t5$25229 = t4$25228.length)), ((t5$25229 === 3) && (t4$25228[0] === "data")))))))))))))))) {
        (b$25233 = t4$25228[1]);
        (v$25234 = t4$25228[2]);
        acc$25192.push(["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], b$25233], v$25234]]);
      } else {
        ___match_error(m$25219, "/home/olivier/git/earl-grey/src/stdenv.eg", 29859, 29901);
      }
    }
  })()))), acc$25192));
  return ["multi"].concat(let_bindings$25184).concat([body$25148]);
})))), (t0$25134[0] ? ((accum$25132["letrec"] = t0$25134[1]), accum$25132) : ___match_error((function(scope$25276, form$25277, $25273$25278) {
  var t0$25283;
  var t1$25284;
  var t2$25285;
  var t3$25286;
  var t4$25287;
  var $index$25343;
  var $length$25337;
  var temp$25331;
  var acc$25325;
  var let_bindings$25317;
  var bindings$25280;
  var body$25281;
  (t0$25283 = $25273$25278);
  if (((t0$25283 instanceof Array) && (((t1$25284 = t0$25283.length)), ((t1$25284 === 3) && ((t0$25283[0] === "data") && (((t2$25285 = getProjector(Body$18188)(t0$25283[1]))), (t2$25285[0] && (((t3$25286 = t2$25285[1])), (((t4$25287 = t3$25286.length)), (t4$25287 >= 0)))))))))) {
    (bindings$25280 = Array.prototype.slice.call(t3$25286, 0));
    (body$25281 = t0$25283[2]);
  } else {
    ___match_error($25273$25278);
  }
  (let_bindings$25317 = (((acc$25325 = [])), (((temp$25331 = bindings$25280)), ((($length$25337 = temp$25331.length)), ((($index$25343 = 0)), (function() {
    $25320: for (; ($index$25343 < $length$25337); ($index$25343++)) {
      var b$25366;
      var v$25367;
      var t0$25357;
      var t1$25358;
      var t2$25359;
      var t3$25360;
      var t4$25361;
      var t5$25362;
      var m$25352;
      (m$25352 = temp$25331[$index$25343]);
      (t0$25357 = m$25352);
      if (((t0$25357 instanceof Array) && (((t1$25358 = t0$25357.length)), ((t1$25358 === 3) && ((t0$25357[0] === "send") && (((t2$25359 = t0$25357[1])), ((t2$25359 instanceof Array) && (((t3$25360 = t2$25359.length)), ((t3$25360 === 2) && ((t2$25359[0] === "symbol") && ((t2$25359[1] === "=") && (((t4$25361 = t0$25357[2])), ((t4$25361 instanceof Array) && (((t5$25362 = t4$25361.length)), ((t5$25362 === 3) && (t4$25361[0] === "data")))))))))))))))) {
        (b$25366 = t4$25361[1]);
        (v$25367 = t4$25361[2]);
        acc$25325.push(["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], b$25366], v$25367]]);
      } else {
        ___match_error(m$25352, "/home/olivier/git/earl-grey/src/stdenv.eg", 29859, 29901);
      }
    }
  })()))), acc$25325));
  return ["multi"].concat(let_bindings$25317).concat([body$25281]);
}))))), __amp____colon__(((accum$25404 = ({})), ((accum$25404["where"] = (function(context$25411, scope$25412, form$25413, $25408$25414) {
  var t0$25419;
  var t1$25420;
  var body$25416;
  var bindings$25417;
  (t0$25419 = $25408$25414);
  if (((t0$25419 instanceof Array) && (((t1$25420 = t0$25419.length)), ((t1$25420 === 3) && (t0$25419[0] === "data"))))) {
    (body$25416 = t0$25419[1]);
    (bindings$25417 = t0$25419[2]);
  } else {
    ___match_error($25408$25414);
  }
  return ["send", ["symbol", "letrec"], ["data", bindings$25417, body$25416]];
})), accum$25404)), __amp____colon__(({
  "break": break_mac$18220(null),
  "continue": continue_mac$18221(null)
}), __amp____colon__(((accum$25434 = ({})), (((t0$25436 = getProjector(expr_mac$18213)((function(scope$25445, form$25446, $25442$25447) {
  var arg$25489;
  var arg$25469;
  var t0$25463;
  var t1$25464;
  var t2$25465;
  var $25449$25458;
  var ph$25452;
  (ph$25452 = $25442$25447);
  ($25449$25458 = ph$25452);
  if ((($25449$25458 instanceof Array) && (((t0$25463 = $25449$25458.length)), ((t0$25463 === 3) && (($25449$25458[0] === "send") && (((t1$25464 = $25449$25458[1])), ((t1$25464 instanceof Array) && (((t2$25465 = t1$25464.length)), ((t2$25465 === 2) && ((t1$25464[0] === "symbol") && (t1$25464[1] === "all"))))))))))) {
    (arg$25469 = $25449$25458[2]);
    return ["js_yield", arg$25469, ["value", true]];
  } else {
    (arg$25489 = $25449$25458);
    return ["js_yield", arg$25489, ["value", false]];
  }
})))), (t0$25436[0] ? ((accum$25434["yield"] = t0$25436[1]), accum$25434) : ___match_error((function(scope$25497, form$25498, $25494$25499) {
  var arg$25541;
  var arg$25521;
  var t0$25515;
  var t1$25516;
  var t2$25517;
  var $25501$25510;
  var ph$25504;
  (ph$25504 = $25494$25499);
  ($25501$25510 = ph$25504);
  if ((($25501$25510 instanceof Array) && (((t0$25515 = $25501$25510.length)), ((t0$25515 === 3) && (($25501$25510[0] === "send") && (((t1$25516 = $25501$25510[1])), ((t1$25516 instanceof Array) && (((t2$25517 = t1$25516.length)), ((t2$25517 === 2) && ((t1$25516[0] === "symbol") && (t1$25516[1] === "all"))))))))))) {
    (arg$25521 = $25501$25510[2]);
    return ["js_yield", arg$25521, ["value", true]];
  } else {
    (arg$25541 = $25501$25510);
    return ["js_yield", arg$25541, ["value", false]];
  }
}))))), __amp____colon__(((accum$25544 = ({})), (((t0$25546 = getProjector(expr_mac$18213)((function(scope$25555, form$25556, $25552$25557) {
  var arg$25623;
  var arg$25618;
  var arg$25598;
  var $25563$25587;
  var $25564$25588;
  var $25565$25589;
  var $25566$25590;
  var $25567$25591;
  var $25568$25592;
  var $25569$25593;
  var $25570$25594;
  var $25571$25595;
  var t0$25583;
  var t1$25584;
  var t2$25585;
  var $25559$25578;
  var ph$25572;
  (ph$25572 = $25552$25557);
  ($25559$25578 = ph$25572);
  if ((($25563$25587 = ($25559$25578 instanceof Array)) && (((t0$25583 = $25559$25578.length)), (($25565$25589 = (t0$25583 === 3)) && (($25566$25590 = ($25559$25578[0] === "send")) && (((t1$25584 = $25559$25578[1])), (($25568$25592 = (t1$25584 instanceof Array)) && (((t2$25585 = t1$25584.length)), (($25570$25594 = (t2$25585 === 2)) && (($25571$25595 = (t1$25584[0] === "symbol")) && (t1$25584[1] === "all"))))))))))) {
    (arg$25598 = $25559$25578[2]);
    return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "all"]]]], ["data", arg$25598]], ["value", false]];
  } else {
    if (($25571$25595 && (t1$25584[1] === "any"))) {
      (arg$25618 = $25559$25578[2]);
      return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "race"]]]], ["data", arg$25618]], ["value", false]];
    } else {
      (arg$25623 = $25559$25578);
      return ["js_yield", arg$25623, ["value", false]];
    }
  }
})))), (t0$25546[0] ? ((accum$25544["await"] = t0$25546[1]), accum$25544) : ___match_error((function(scope$25631, form$25632, $25628$25633) {
  var arg$25699;
  var arg$25694;
  var arg$25674;
  var $25639$25663;
  var $25640$25664;
  var $25641$25665;
  var $25642$25666;
  var $25643$25667;
  var $25644$25668;
  var $25645$25669;
  var $25646$25670;
  var $25647$25671;
  var t0$25659;
  var t1$25660;
  var t2$25661;
  var $25635$25654;
  var ph$25648;
  (ph$25648 = $25628$25633);
  ($25635$25654 = ph$25648);
  if ((($25639$25663 = ($25635$25654 instanceof Array)) && (((t0$25659 = $25635$25654.length)), (($25641$25665 = (t0$25659 === 3)) && (($25642$25666 = ($25635$25654[0] === "send")) && (((t1$25660 = $25635$25654[1])), (($25644$25668 = (t1$25660 instanceof Array)) && (((t2$25661 = t1$25660.length)), (($25646$25670 = (t2$25661 === 2)) && (($25647$25671 = (t1$25660[0] === "symbol")) && (t1$25660[1] === "all"))))))))))) {
    (arg$25674 = $25635$25654[2]);
    return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "all"]]]], ["data", arg$25674]], ["value", false]];
  } else {
    if (($25647$25671 && (t1$25660[1] === "any"))) {
      (arg$25694 = $25635$25654[2]);
      return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "race"]]]], ["data", arg$25694]], ["value", false]];
    } else {
      (arg$25699 = $25635$25654);
      return ["js_yield", arg$25699, ["value", false]];
    }
  }
}))))), __amp____colon__(((accum$25702 = ({})), (((t0$25704 = getProjector(expr_mac2$18214)((function($25710$25713) {
  var arg$25808;
  var pre$25809;
  var body$25810;
  var post$25811;
  var arg$25767;
  var body$25768;
  var $25718$25751;
  var $25719$25752;
  var $25720$25753;
  var $25721$25754;
  var $25722$25755;
  var $25723$25756;
  var $25724$25757;
  var $25725$25758;
  var $25726$25759;
  var $25727$25760;
  var $25728$25761;
  var $25729$25762;
  var $25730$25763;
  var $25731$25764;
  var t0$25743;
  var t1$25744;
  var t2$25745;
  var t3$25746;
  var t4$25747;
  var t5$25748;
  var t6$25749;
  var $25715$25738;
  var ph$25732;
  (ph$25732 = $25710$25713);
  ($25715$25738 = ph$25732);
  if ((($25718$25751 = ($25715$25738 instanceof Array)) && (((t0$25743 = $25715$25738.length)), (($25720$25753 = (t0$25743 === 2)) && (($25721$25754 = ($25715$25738[0] === "data")) && (((t1$25744 = $25715$25738[1])), (($25723$25756 = (t1$25744 instanceof Array)) && (((t2$25745 = t1$25744.length)), (($25725$25758 = (t2$25745 === 3)) && (($25726$25759 = (t1$25744[0] === "send")) && (((t3$25746 = t1$25744[1])), (($25728$25761 = (t3$25746 instanceof Array)) && (((t4$25747 = t3$25746.length)), (($25730$25763 = (t4$25747 === 2)) && (($25731$25764 = (t3$25746[0] === "symbol")) && ((t3$25746[1] === "->") && (((t5$25748 = t1$25744[2])), ((t5$25748 instanceof Array) && (((t6$25749 = t5$25748.length)), ((t6$25749 === 3) && (t5$25748[0] === "data"))))))))))))))))))))) {
    (arg$25767 = t5$25748[1]);
    (body$25768 = t5$25748[2]);
    return ["send", ["symbol", "*->"], ["data", arg$25767, body$25768]];
  } else {
    if (($25731$25764 && ((t3$25746[1] === "_lambda") && (((t5$25748 = t1$25744[2])), ((t5$25748 instanceof Array) && (((t6$25749 = t5$25748.length)), ((t6$25749 === 6) && (t5$25748[0] === "data")))))))) {
      (arg$25808 = t5$25748[1]);
      (pre$25809 = t5$25748[2]);
      (body$25810 = t5$25748[3]);
      (post$25811 = t5$25748[4]);
      t5$25748[5];
      return ["send", ["symbol", "_lambda"], ["data", arg$25808, pre$25809, body$25810, post$25811, ["value", true]]];
    } else {
      ___match_error($25715$25738);
    }
  }
})))), (t0$25704[0] ? ((accum$25702["gen"] = t0$25704[1]), accum$25702) : ___match_error((function($25829$25832) {
  var arg$25927;
  var pre$25928;
  var body$25929;
  var post$25930;
  var arg$25886;
  var body$25887;
  var $25837$25870;
  var $25838$25871;
  var $25839$25872;
  var $25840$25873;
  var $25841$25874;
  var $25842$25875;
  var $25843$25876;
  var $25844$25877;
  var $25845$25878;
  var $25846$25879;
  var $25847$25880;
  var $25848$25881;
  var $25849$25882;
  var $25850$25883;
  var t0$25862;
  var t1$25863;
  var t2$25864;
  var t3$25865;
  var t4$25866;
  var t5$25867;
  var t6$25868;
  var $25834$25857;
  var ph$25851;
  (ph$25851 = $25829$25832);
  ($25834$25857 = ph$25851);
  if ((($25837$25870 = ($25834$25857 instanceof Array)) && (((t0$25862 = $25834$25857.length)), (($25839$25872 = (t0$25862 === 2)) && (($25840$25873 = ($25834$25857[0] === "data")) && (((t1$25863 = $25834$25857[1])), (($25842$25875 = (t1$25863 instanceof Array)) && (((t2$25864 = t1$25863.length)), (($25844$25877 = (t2$25864 === 3)) && (($25845$25878 = (t1$25863[0] === "send")) && (((t3$25865 = t1$25863[1])), (($25847$25880 = (t3$25865 instanceof Array)) && (((t4$25866 = t3$25865.length)), (($25849$25882 = (t4$25866 === 2)) && (($25850$25883 = (t3$25865[0] === "symbol")) && ((t3$25865[1] === "->") && (((t5$25867 = t1$25863[2])), ((t5$25867 instanceof Array) && (((t6$25868 = t5$25867.length)), ((t6$25868 === 3) && (t5$25867[0] === "data"))))))))))))))))))))) {
    (arg$25886 = t5$25867[1]);
    (body$25887 = t5$25867[2]);
    return ["send", ["symbol", "*->"], ["data", arg$25886, body$25887]];
  } else {
    if (($25850$25883 && ((t3$25865[1] === "_lambda") && (((t5$25867 = t1$25863[2])), ((t5$25867 instanceof Array) && (((t6$25868 = t5$25867.length)), ((t6$25868 === 6) && (t5$25867[0] === "data")))))))) {
      (arg$25927 = t5$25867[1]);
      (pre$25928 = t5$25867[2]);
      (body$25929 = t5$25867[3]);
      (post$25930 = t5$25867[4]);
      t5$25867[5];
      return ["send", ["symbol", "_lambda"], ["data", arg$25927, pre$25928, body$25929, post$25930, ["value", true]]];
    } else {
      ___match_error($25834$25857);
    }
  }
}))))), __amp____colon__(((accum$25946 = ({})), (((t0$25948 = getProjector(expr_mac2$18214)((function($25954$25957) {
  var arg$26052;
  var pre$26053;
  var body$26054;
  var post$26055;
  var arg$26011;
  var body$26012;
  var $25962$25995;
  var $25963$25996;
  var $25964$25997;
  var $25965$25998;
  var $25966$25999;
  var $25967$26000;
  var $25968$26001;
  var $25969$26002;
  var $25970$26003;
  var $25971$26004;
  var $25972$26005;
  var $25973$26006;
  var $25974$26007;
  var $25975$26008;
  var t0$25987;
  var t1$25988;
  var t2$25989;
  var t3$25990;
  var t4$25991;
  var t5$25992;
  var t6$25993;
  var $25959$25982;
  var ph$25976;
  (ph$25976 = $25954$25957);
  ($25959$25982 = ph$25976);
  if ((($25962$25995 = ($25959$25982 instanceof Array)) && (((t0$25987 = $25959$25982.length)), (($25964$25997 = (t0$25987 === 2)) && (($25965$25998 = ($25959$25982[0] === "data")) && (((t1$25988 = $25959$25982[1])), (($25967$26000 = (t1$25988 instanceof Array)) && (((t2$25989 = t1$25988.length)), (($25969$26002 = (t2$25989 === 3)) && (($25970$26003 = (t1$25988[0] === "send")) && (((t3$25990 = t1$25988[1])), (($25972$26005 = (t3$25990 instanceof Array)) && (((t4$25991 = t3$25990.length)), (($25974$26007 = (t4$25991 === 2)) && (($25975$26008 = (t3$25990[0] === "symbol")) && ((t3$25990[1] === "->") && (((t5$25992 = t1$25988[2])), ((t5$25992 instanceof Array) && (((t6$25993 = t5$25992.length)), ((t6$25993 === 3) && (t5$25992[0] === "data"))))))))))))))))))))) {
    (arg$26011 = t5$25992[1]);
    (body$26012 = t5$25992[2]);
    return ["send", ["symbol", "->"], ["data", arg$26011, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$26012]]]]]];
  } else {
    if (($25975$26008 && ((t3$25990[1] === "_lambda") && (((t5$25992 = t1$25988[2])), ((t5$25992 instanceof Array) && (((t6$25993 = t5$25992.length)), ((t6$25993 === 6) && (t5$25992[0] === "data")))))))) {
      (arg$26052 = t5$25992[1]);
      (pre$26053 = t5$25992[2]);
      (body$26054 = t5$25992[3]);
      (post$26055 = t5$25992[4]);
      t5$25992[5];
      return ["send", ["symbol", "_lambda"], ["data", arg$26052, pre$26053, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$26054]]]], post$26055, ["value", false]]];
    } else {
      ___match_error($25959$25982);
    }
  }
})))), (t0$25948[0] ? ((accum$25946["async"] = t0$25948[1]), accum$25946) : ___match_error((function($26073$26076) {
  var arg$26171;
  var pre$26172;
  var body$26173;
  var post$26174;
  var arg$26130;
  var body$26131;
  var $26081$26114;
  var $26082$26115;
  var $26083$26116;
  var $26084$26117;
  var $26085$26118;
  var $26086$26119;
  var $26087$26120;
  var $26088$26121;
  var $26089$26122;
  var $26090$26123;
  var $26091$26124;
  var $26092$26125;
  var $26093$26126;
  var $26094$26127;
  var t0$26106;
  var t1$26107;
  var t2$26108;
  var t3$26109;
  var t4$26110;
  var t5$26111;
  var t6$26112;
  var $26078$26101;
  var ph$26095;
  (ph$26095 = $26073$26076);
  ($26078$26101 = ph$26095);
  if ((($26081$26114 = ($26078$26101 instanceof Array)) && (((t0$26106 = $26078$26101.length)), (($26083$26116 = (t0$26106 === 2)) && (($26084$26117 = ($26078$26101[0] === "data")) && (((t1$26107 = $26078$26101[1])), (($26086$26119 = (t1$26107 instanceof Array)) && (((t2$26108 = t1$26107.length)), (($26088$26121 = (t2$26108 === 3)) && (($26089$26122 = (t1$26107[0] === "send")) && (((t3$26109 = t1$26107[1])), (($26091$26124 = (t3$26109 instanceof Array)) && (((t4$26110 = t3$26109.length)), (($26093$26126 = (t4$26110 === 2)) && (($26094$26127 = (t3$26109[0] === "symbol")) && ((t3$26109[1] === "->") && (((t5$26111 = t1$26107[2])), ((t5$26111 instanceof Array) && (((t6$26112 = t5$26111.length)), ((t6$26112 === 3) && (t5$26111[0] === "data"))))))))))))))))))))) {
    (arg$26130 = t5$26111[1]);
    (body$26131 = t5$26111[2]);
    return ["send", ["symbol", "->"], ["data", arg$26130, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$26131]]]]]];
  } else {
    if (($26094$26127 && ((t3$26109[1] === "_lambda") && (((t5$26111 = t1$26107[2])), ((t5$26111 instanceof Array) && (((t6$26112 = t5$26111.length)), ((t6$26112 === 6) && (t5$26111[0] === "data")))))))) {
      (arg$26171 = t5$26111[1]);
      (pre$26172 = t5$26111[2]);
      (body$26173 = t5$26111[3]);
      (post$26174 = t5$26111[4]);
      t5$26111[5];
      return ["send", ["symbol", "_lambda"], ["data", arg$26171, pre$26172, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$26173]]]], post$26174, ["value", false]]];
    } else {
      ___match_error($26078$26101);
    }
  }
}))))), __amp____colon__(((accum$26190 = ({})), (((t0$26192 = getProjector(expr_mac$18213)((function(scope$26199, form$26200, arg$26201) {
  return ["js_throw", arg$26201];
})))), (t0$26192[0] ? ((accum$26190["throw"] = t0$26192[1]), accum$26190) : ___match_error((function(scope$26207, form$26208, arg$26209) {
  return ["js_throw", arg$26209];
}))))), __amp____colon__(((accum$26212 = ({})), (((t0$26214 = getProjector(expr_mac$18213)((function(scope$26221, form$26222, arg$26223) {
  return ["js_return", arg$26223];
})))), (t0$26214[0] ? ((accum$26212["return"] = t0$26214[1]), accum$26212) : ___match_error((function(scope$26229, form$26230, arg$26231) {
  return ["js_return", arg$26231];
}))))), __amp____colon__(((accum$26234 = ({})), (((t0$26236 = getProjector(expr_mac$18213)((function(scope$26243, form$26244, arg$26245) {
  return ["js_new", arg$26245];
})))), (t0$26236[0] ? ((accum$26234["new"] = t0$26236[1]), accum$26234) : ___match_error((function(scope$26251, form$26252, arg$26253) {
  return ["js_new", arg$26253];
}))))), __amp____colon__(((accum$26256 = ({})), ((accum$26256["delete"] = (function(context$26263, scope$26264, form$26265, $26260$26266) {
  var t0$26274;
  var other$26302;
  var s$26292;
  var t0$26288;
  var $26268$26283;
  var ph$26271;
  var arg$26272;
  (t0$26274 = $26260$26266);
  (arg$26272 = t0$26274);
  (ph$26271 = t0$26274);
  ($26268$26283 = ph$26271);
  if ((($26268$26283 instanceof Array) && (((t0$26288 = $26268$26283.length)), ((t0$26288 === 2) && ($26268$26283[0] === "symbol"))))) {
    (s$26292 = $26268$26283[1]);
    return ["undeclare", arg$26272];
  } else {
    (other$26302 = $26268$26283);
    return ["js_delete", other$26302];
  }
})), accum$26256)), __amp____colon__(((accum$26305 = ({})), ((accum$26305["splice"] = (function(context$26312, scope$26313, form$26314, $26309$26315) {
  var t0$26319;
  var t1$26320;
  var t2$26321;
  var t3$26322;
  var t4$26323;
  var stmts$26317;
  (t0$26319 = $26309$26315);
  if (((t0$26319 instanceof Array) && (((t1$26320 = t0$26319.length)), ((t1$26320 === 2) && ((t0$26319[0] === "data") && (((t2$26321 = getProjector(Body$18188)(t0$26319[1]))), (t2$26321[0] && (((t3$26322 = t2$26321[1])), (((t4$26323 = t3$26322.length)), (t4$26323 >= 0)))))))))) {
    (stmts$26317 = Array.prototype.slice.call(t3$26322, 0));
  } else {
    ___match_error($26309$26315);
  }
  return ["splice"].concat(stmts$26317);
})), accum$26305)), __amp____colon__(((accum$26352 = ({})), ((accum$26352["null"] = (((chk$26357 = (function(x$26362) {
  return ["send", ["symbol", "==="], ["data", x$26362, ["value", null]]];
}))), value_mac$18216("null", chk$26357))), accum$26352)), __amp____colon__(((accum$26366 = ({})), ((accum$26366["undefined"] = (((chk$26371 = (function(x$26376) {
  return ["send", ["symbol", "==="], ["data", x$26376, ["value", undefined]]];
}))), value_mac$18216("undefined", chk$26371))), accum$26366)), __amp____colon__(((accum$26380 = ({})), ((accum$26380["true"] = (((chk$26385 = (function(x$26390) {
  return ["send", ["symbol", "if"], ["data", x$26390, ["symbol", "true"], ["symbol", "false"]]];
}))), value_mac$18216("true", chk$26385))), accum$26380)), __amp____colon__(((accum$26394 = ({})), ((accum$26394["false"] = (((chk$26399 = (function(x$26404) {
  return ["send", ["symbol", "not"], ["data", ["void"], x$26404]];
}))), value_mac$18216("false", chk$26399))), accum$26394)), __amp____colon__(((accum$26408 = ({})), ((accum$26408["String"] = (((chk$26414 = (function(x$26420) {
  return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$26420]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "string"]]]]];
}))), ((proj$26415 = (function(x$26427) {
  return ["data", ["symbol", "true"], ["send", ["symbol", "String"], ["data", x$26427]]];
}))), value_mac$18216("String", chk$26414, proj$26415))), accum$26408)), __amp____colon__(((accum$26431 = ({})), ((accum$26431["Number"] = (((chk$26437 = (function(x$26443) {
  return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$26443]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "number"]]]]];
}))), ((proj$26438 = (function(x$26450) {
  return ["data", ["symbol", "true"], ["send", ["symbol", "parseFloat"], ["data", x$26450]]];
}))), value_mac$18216("Number", chk$26437, proj$26438))), accum$26431)), __amp____colon__(((accum$26454 = ({})), ((accum$26454["Boolean"] = (((chk$26460 = (function(x$26466) {
  return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$26466]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "boolean"]]]]];
}))), ((proj$26461 = (function(x$26473) {
  return ["data", ["symbol", "true"], ["send", ["symbol", "Boolean"], ["data", x$26473]]];
}))), value_mac$18216("Boolean", chk$26460, proj$26461))), accum$26454)), __amp____colon__(((accum$26477 = ({})), ((accum$26477["?"] = (function($26481$26486, scope$26487, form$26488, $26483$26489) {
  var t0$26500;
  var t0$26508;
  var t1$26509;
  var checker$26552;
  var $26535$26540;
  var x$26560;
  var projector$26585;
  var t0$26581;
  var $26567$26576;
  var subp$26570;
  var other$26602;
  var checker$26532;
  var $26491$26524;
  var ph$26495;
  var context$26496;
  var chk$26497;
  var target$26498;
  (t0$26500 = $26481$26486);
  (context$26496 = t0$26500);
  (ph$26495 = t0$26500);
  (t0$26508 = $26483$26489);
  if (((t0$26508 instanceof Array) && (((t1$26509 = t0$26508.length)), ((t1$26509 === 3) && (t0$26508[0] === "data"))))) {
    (chk$26497 = t0$26508[1]);
    (target$26498 = t0$26508[2]);
  } else {
    ___match_error($26483$26489);
  }
  ($26491$26524 = ph$26495);
  (checker$26532 = ((($26535$26540 = scope$26487.step(["check", context$26496], chk$26497))), (($26535$26540 === chk$26497) ? ["send", ["symbol", "getChecker"], ["data", chk$26497]] : ((checker$26552 = $26535$26540), checker$26552))));
  if ((((x$26560 = $26491$26524)), ((x$26560 instanceof Array) && (x$26560[0] === "pattern")))) {
    (subp$26570 = (equal(target$26498, ["void"]) ? ["ignore"] : target$26498));
    ($26567$26576 = checker$26532);
    if ((($26567$26576 instanceof Array) && (((t0$26581 = $26567$26576.length)), ((t0$26581 === 2) && ($26567$26576[0] === "raw"))))) {
      (projector$26585 = $26567$26576[1]);
      return checker$26532;
    } else {
      $26567$26576;
      return ["check", checker$26532, subp$26570];
    }
  } else {
    $26491$26524;
    if (equal(target$26498, ["void"])) {
      return checker$26532;
    } else {
      (other$26602 = $26491$26524);
      return ["send", checker$26532, ["data", target$26498]];
    }
  }
})), accum$26477)), __amp____colon__(((accum$26605 = ({})), ((accum$26605["!"] = (function($26609$26614, scope$26615, form$26616, $26611$26617) {
  var t0$26628;
  var t0$26636;
  var t1$26637;
  var projector$26680;
  var $26663$26668;
  var x$26688;
  var projector$26730;
  var projector$26720;
  var $26699$26715;
  var $26700$26716;
  var $26701$26717;
  var t0$26713;
  var $26695$26708;
  var subp$26702;
  var other$26742;
  var projector$26660;
  var $26619$26652;
  var ph$26623;
  var context$26624;
  var proj$26625;
  var target$26626;
  (t0$26628 = $26609$26614);
  (context$26624 = t0$26628);
  (ph$26623 = t0$26628);
  (t0$26636 = $26611$26617);
  if (((t0$26636 instanceof Array) && (((t1$26637 = t0$26636.length)), ((t1$26637 === 3) && (t0$26636[0] === "data"))))) {
    (proj$26625 = t0$26636[1]);
    (target$26626 = t0$26636[2]);
  } else {
    ___match_error($26611$26617);
  }
  ($26619$26652 = ph$26623);
  (projector$26660 = ((($26663$26668 = scope$26615.step(["project", context$26624], proj$26625))), (($26663$26668 === proj$26625) ? ["send", ["symbol", "getProjector"], ["data", proj$26625]] : ((projector$26680 = $26663$26668), projector$26680))));
  if ((((x$26688 = $26619$26652)), ((x$26688 instanceof Array) && (x$26688[0] === "pattern")))) {
    (subp$26702 = (equal(target$26626, ["void"]) ? ["ignore"] : target$26626));
    ($26695$26708 = projector$26660);
    if ((($26699$26715 = ($26695$26708 instanceof Array)) && (((t0$26713 = $26695$26708.length)), (($26701$26717 = (t0$26713 === 2)) && ($26695$26708[0] === "raw"))))) {
      (projector$26720 = $26695$26708[1]);
      return projector$26720;
    } else {
      if (($26701$26717 && ($26695$26708[0] === "unconditional"))) {
        (projector$26730 = $26695$26708[1]);
        return ["project", projector$26730, subp$26702, true];
      } else {
        $26695$26708;
        return ["project", projector$26660, subp$26702];
      }
    }
  } else {
    $26619$26652;
    if (equal(target$26626, ["void"])) {
      return ["send", ["symbol", "->"], ["data", ["data", ["symbol", "x"]], ["send", ["send", projector$26660, ["data", ["symbol", "x"]]], ["value", 1]]]];
    } else {
      (other$26742 = $26619$26652);
      return ["send", ["send", projector$26660, ["data", target$26626]], ["value", 1]];
    }
  }
})), accum$26605)), __amp____colon__(((accum$26745 = ({})), ((accum$26745["#"] = (function(context$26752, scope$26753, form$26754, $26749$26755) {
  var t0$26759;
  var t1$26760;
  var t2$26761;
  var t3$26762;
  var t4$26763;
  var t5$26764;
  var f$26804;
  var tag$26757;
  (t0$26759 = $26749$26755);
  if (((t0$26759 instanceof Array) && (((t1$26760 = t0$26759.length)), ((t1$26760 === 3) && ((t0$26759[0] === "data") && (((t2$26761 = t0$26759[1])), ((t2$26761 instanceof Array) && (((t3$26762 = t2$26761.length)), ((t3$26762 === 1) && ((t2$26761[0] === "void") && (((t4$26763 = t0$26759[2])), ((t4$26763 instanceof Array) && (((t5$26764 = t4$26763.length)), ((t5$26764 === 2) && (t4$26763[0] === "symbol"))))))))))))))) {
    (tag$26757 = t4$26763[1]);
  } else {
    ___match_error($26749$26755);
  }
  (tag$26757 = ["value", tag$26757]);
  (f$26804 = (function($26808$26811, scope$26812, form$26813, expr$26814) {
    var x$26838;
    var other$26907;
    var subp$26893;
    var $26849$26889;
    var $26850$26890;
    var t0$26887;
    var $26845$26882;
    var checker_mac$26851;
    var x$26914;
    var x$26924;
    var other$26965;
    var args$26960;
    var $26936$26947;
    var $26937$26948;
    var t0$26945;
    var $26932$26940;
    var $26816$26827;
    var ph$26821;
    (ph$26821 = $26808$26811);
    ($26816$26827 = ph$26821);
    if ((((x$26838 = $26816$26827)), ((x$26838 instanceof Array) && (x$26838[0] === "pattern")))) {
      (checker_mac$26851 = ["macro", (function(context$26858, scope$26859, form$26860, $26855$26861) {
        var t0$26865;
        var t1$26866;
        var expr$26863;
        (t0$26865 = $26855$26861);
        if (((t0$26865 instanceof Array) && (((t1$26866 = t0$26865.length)), ((t1$26866 === 2) && (t0$26865[0] === "data"))))) {
          (expr$26863 = t0$26865[1]);
        } else {
          ___match_error($26855$26861);
        }
        return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "x"], expr$26863]], ["send", ["symbol", "and"], ["data", ["send", ["symbol", "instanceof"], ["data", ["symbol", "x"], ["symbol", "Array"]]], ["send", ["symbol", "==="], ["data", ["send", ["symbol", "x"], ["value", 0]], tag$26757]]]]]];
      })]);
      ($26845$26882 = expr$26814);
      if ((($26849$26889 = ($26845$26882 instanceof Array)) && (((t0$26887 = $26845$26882.length)), ((t0$26887 >= 1) && ($26845$26882[0] === "data"))))) {
        (subp$26893 = Array.prototype.slice.call($26845$26882, 1));
        return ["data", tag$26757].concat(subp$26893);
      } else {
        if (($26849$26889 && ((t0$26887 === 1) && ($26845$26882[0] === "void")))) {
          return ["check", checker_mac$26851, ["ignore"]];
        } else {
          (other$26907 = $26845$26882);
          return ["check", checker_mac$26851, expr$26814];
        }
      }
    } else {
      if ((((x$26914 = $26816$26827)), ((x$26914 instanceof Array) && (x$26914[0] === "check")))) {
        return ["send", ["symbol", "getChecker"], ["data", ["data", tag$26757]]];
      } else {
        if ((((x$26924 = $26816$26827)), ((x$26924 instanceof Array) && (x$26924[0] === "project")))) {
          return ["send", ["symbol", "getProjector"], ["data", ["data", tag$26757]]];
        } else {
          $26816$26827;
          ($26932$26940 = expr$26814);
          if ((($26936$26947 = ($26932$26940 instanceof Array)) && (((t0$26945 = $26932$26940.length)), ((t0$26945 === 1) && ($26932$26940[0] === "void"))))) {
            return ["data", tag$26757];
          } else {
            if (($26936$26947 && ((t0$26945 >= 1) && ($26932$26940[0] === "data")))) {
              (args$26960 = Array.prototype.slice.call($26932$26940, 1));
              return ["data", tag$26757].concat(args$26960);
            } else {
              (other$26965 = $26932$26940);
              return ["send", ["data", tag$26757], other$26965];
            }
          }
        }
      }
    }
  }));
  return ["macro", f$26804];
})), accum$26745)), __amp____colon__(((accum$26969 = ({})), ((accum$26969["require"] = (function(context$26976, scope$26977, form$26978, $26973$26979) {
  var req$27017;
  var stmts$27018;
  var topfetch$27019;
  var produce$27020;
  var arg$27283;
  var expr$27004;
  var $26985$27000;
  var $26986$27001;
  var t0$26998;
  var $26981$26993;
  var ph$26987;
  (ph$26987 = $26973$26979);
  ($26981$26993 = ph$26987);
  if ((($26985$27000 = ($26981$26993 instanceof Array)) && (((t0$26998 = $26981$26993.length)), ((t0$26998 === 2) && ($26981$26993[0] === "data"))))) {
    (expr$27004 = $26981$26993[1]);
    (req$27017 = ["variable", "require"]);
    (stmts$27018 = []);
    (topfetch$27019 = (function(pkg$27031, v$27032) {
      stmts$27018.push(["send", ["symbol", "="], ["data", v$27032, ["send", req$27017, ["data", pkg$27031]]]]);
      return v$27032;
    }));
    (produce$27020 = (function($27039$27042, fetch$27043) {
      var t0$27065;
      var t0$27126;
      var t0$27134;
      var $index$27161;
      var $length$27155;
      var temp$27149;
      var pkgv$27264;
      var pkg$27248;
      var subp$27249;
      var pkg$27222;
      var s$27223;
      var name$27182;
      var subp$27119;
      var s$27109;
      var s$27099;
      var $27053$27088;
      var $27054$27089;
      var $27055$27090;
      var $27056$27091;
      var $27057$27092;
      var $27058$27093;
      var $27059$27094;
      var $27060$27095;
      var $27061$27096;
      var t0$27079;
      var t1$27080;
      var bridge$27049$27081;
      var t2$27082;
      var t3$27083;
      var t4$27084;
      var t5$27085;
      var t6$27086;
      var $27045$27074;
      var ph$27062;
      var expr$27063;
      (t0$27065 = $27039$27042);
      (expr$27063 = t0$27065);
      (ph$27062 = t0$27065);
      ($27045$27074 = ph$27062);
      if ((($27053$27088 = ($27045$27074 instanceof Array)) && (((t0$27079 = $27045$27074.length)), (($27055$27090 = (t0$27079 === 2)) && ($27045$27074[0] === "symbol"))))) {
        (s$27099 = $27045$27074[1]);
        return fetch$27043(["value", s$27099], expr$27063);
      } else {
        if (($27055$27090 && (($27045$27074[0] === "value") && (((t1$27080 = $27045$27074[1])), (typeof(t1$27080) === "string"))))) {
          (s$27109 = t1$27080);
          return fetch$27043(expr$27063, ["symbol", scope$26977.gensym()]);
        } else {
          (bridge$27049$27081 = $27045$27074);
          if ((((bridge$27049$27081 instanceof Array) && (((t0$27126 = bridge$27049$27081.length)), ((t0$27126 >= 1) && ((bridge$27049$27081[0] === "multi") && ((subp$27119 = Array.prototype.slice.call(bridge$27049$27081, 1)), true))))) || ((bridge$27049$27081 instanceof Array) && (((t0$27134 = bridge$27049$27081.length)), ((t0$27134 >= 1) && ((bridge$27049$27081[0] === "data") && ((subp$27119 = Array.prototype.slice.call(bridge$27049$27081, 1)), true))))))) {
            (temp$27149 = subp$27119);
            ($length$27155 = temp$27149.length);
            ($index$27161 = 0);
            $27143: for (; ($index$27161 < $length$27155); ($index$27161++)) {
              var p$27178;
              var m$27170;
              (m$27170 = temp$27149[$index$27161]);
              (p$27178 = m$27170);
              produce$27020(p$27178, fetch$27043);
            }
            return null;
          } else {
            if ((($27053$27088 = ($27045$27074 instanceof Array)) && (((t0$27079 = $27045$27074.length)), (($27055$27090 = (t0$27079 === 3)) && (($27056$27091 = ($27045$27074[0] === "send")) && (((t1$27080 = $27045$27074[1])), (($27058$27093 = (t1$27080 instanceof Array)) && (((t2$27082 = t1$27080.length)), (($27060$27095 = (t2$27082 === 2)) && (($27061$27096 = (t1$27080[0] === "symbol")) && ((t1$27080[1] === "^") && (((t3$27083 = $27045$27074[2])), ((t3$27083 instanceof Array) && (((t4$27084 = t3$27083.length)), ((t4$27084 === 3) && ((t3$27083[0] === "data") && (((t5$27085 = t3$27083[1])), ((t5$27085 instanceof Array) && (((t6$27086 = t5$27085.length)), ((t6$27086 === 1) && (t5$27085[0] === "void"))))))))))))))))))))) {
              (name$27182 = t3$27083[2]);
              return fetch$27043(name$27182, ["symbol", scope$26977.gensym()]);
            } else {
              if (($27061$27096 && ((t1$27080[1] === "as") && (((t3$27083 = $27045$27074[2])), ((t3$27083 instanceof Array) && (((t4$27084 = t3$27083.length)), ((t4$27084 === 3) && (t3$27083[0] === "data")))))))) {
                (pkg$27222 = t3$27083[1]);
                (s$27223 = t3$27083[2]);
                return produce$27020(pkg$27222, (function(the_pkg$27240, $27237$27241) {
                  $27237$27241;
                  return fetch$27043(the_pkg$27240, s$27223);
                }));
              } else {
                if (($27061$27096 && ((t1$27080[1] === "->") && (((t3$27083 = $27045$27074[2])), ((t3$27083 instanceof Array) && (((t4$27084 = t3$27083.length)), ((t4$27084 === 3) && (t3$27083[0] === "data")))))))) {
                  (pkg$27248 = t3$27083[1]);
                  (subp$27249 = t3$27083[2]);
                  (pkgv$27264 = produce$27020(pkg$27248, fetch$27043));
                  return produce$27020(subp$27249, (function(pkg$27270, v$27271) {
                    stmts$27018.push(["send", ["symbol", "="], ["data", v$27271, ["send", pkgv$27264, pkg$27270]]]);
                    return v$27271;
                  }));
                } else {
                  ___match_error($27045$27074);
                }
              }
            }
          }
        }
      }
    }));
    produce$27020(expr$27004, topfetch$27019);
    return ["splice"].concat(stmts$27018);
  } else {
    if (($26985$27000 && ((t0$26998 === 1) && ($26981$26993[0] === "void")))) {
      return ["variable", "require"];
    } else {
      (arg$27283 = $26981$26993);
      return ["send", ["variable", "require"], arg$27283];
    }
  }
})), accum$26969)), __amp____colon__(((accum$27286 = ({})), ((accum$27286["provide"] = (function(context$27293, scope$27294, form$27295, $27290$27296) {
  var t0$27300;
  var t1$27301;
  var t2$27302;
  var t3$27303;
  var t4$27304;
  var $index$27365;
  var $length$27359;
  var temp$27353;
  var acc$27347;
  var exp$27334;
  var expr$27298;
  (t0$27300 = $27290$27296);
  if (((t0$27300 instanceof Array) && (((t1$27301 = t0$27300.length)), ((t1$27301 === 2) && ((t0$27300[0] === "data") && (((t2$27302 = getProjector(Body$18188)(t0$27300[1]))), (t2$27302[0] && (((t3$27303 = t2$27302[1])), (((t4$27304 = t3$27303.length)), (t4$27304 >= 0)))))))))) {
    (expr$27298 = Array.prototype.slice.call(t3$27303, 0));
  } else {
    ___match_error($27290$27296);
  }
  (exp$27334 = form$27295.env.mark(["symbol", "exports"]));
  return ["sink", ["multi"].concat((((acc$27347 = [])), (((temp$27353 = expr$27298)), ((($length$27359 = temp$27353.length)), ((($index$27365 = 0)), (function() {
    $27338: for (; ($index$27365 < $length$27359); ($index$27365++)) {
      var t0$27441;
      var t0$27449;
      var other$27460;
      var s$27406;
      var name$27407;
      var s$27390;
      var name$27391;
      var $27344$27387;
      var t0$27379;
      var t1$27380;
      var t2$27381;
      var t3$27382;
      var t4$27383;
      var t5$27384;
      var bridge$27342$27385;
      var m$27374;
      (m$27374 = temp$27353[$index$27365]);
      (t0$27379 = m$27374);
      (s$27390 = t0$27379);
      if (((t0$27379 instanceof Array) && (((t1$27380 = t0$27379.length)), ((t1$27380 === 2) && (t0$27379[0] === "symbol"))))) {
        (name$27391 = t0$27379[1]);
        acc$27347.push(["send", ["symbol", "="], ["data", ["send", exp$27334, ["value", name$27391]], s$27390]]);
      } else {
        if (((t0$27379 instanceof Array) && (((t1$27380 = t0$27379.length)), ((t1$27380 === 3) && ((t0$27379[0] === "send") && (((t2$27381 = t0$27379[1])), ((t2$27381 instanceof Array) && (((t3$27382 = t2$27381.length)), ((t3$27382 === 2) && ((t2$27381[0] === "symbol") && ((t2$27381[1] === "as") && (((t4$27383 = t0$27379[2])), ((t4$27383 instanceof Array) && (((t5$27384 = t4$27383.length)), ((t5$27384 === 3) && ((t4$27383[0] === "data") && ((s$27406 = t4$27383[1]), (((bridge$27342$27385 = t4$27383[2])), (((bridge$27342$27385 instanceof Array) && (((t0$27441 = bridge$27342$27385.length)), ((t0$27441 === 2) && ((bridge$27342$27385[0] === "symbol") && ((name$27407 = bridge$27342$27385[1]), true))))) || ((bridge$27342$27385 instanceof Array) && (((t0$27449 = bridge$27342$27385.length)), ((t0$27449 === 2) && ((bridge$27342$27385[0] === "value") && ((name$27407 = bridge$27342$27385[1]), true)))))))))))))))))))))))) {
          acc$27347.push(["send", ["symbol", "="], ["data", ["send", exp$27334, ["value", name$27407]], s$27406]]);
        } else {
          (other$27460 = m$27374);
          acc$27347.push((function() {
            throw ErrorFactory(["syntax", "provide"]).create("Each clause of provide must be 'sym' or 'sym as name'");
          })());
        }
      }
    }
  })()))), acc$27347))];
})), accum$27286)), __amp____colon__(((accum$27464 = ({})), ((accum$27464["inject"] = (function(context$27471, scope$27472, form$27473, $27468$27474) {
  var t0$27478;
  var t1$27479;
  var t2$27480;
  var t3$27481;
  var t4$27482;
  var expr$27476;
  (t0$27478 = $27468$27474);
  if (((t0$27478 instanceof Array) && (((t1$27479 = t0$27478.length)), ((t1$27479 === 2) && ((t0$27478[0] === "data") && (((t2$27480 = getProjector(Body$18188)(t0$27478[1]))), (t2$27480[0] && (((t3$27481 = t2$27480[1])), (((t4$27482 = t3$27481.length)), (t4$27482 >= 0)))))))))) {
    (expr$27476 = Array.prototype.slice.call(t3$27481, 0));
  } else {
    ___match_error($27468$27474);
  }
  return ["restmacro", (function(stmts$27512) {
    var exp$27516;
    (exp$27516 = form$27473.env.mark(["symbol", "exports"]));
    return [["multi", ["send", ["symbol", "globals"], ["data", ["symbol", "module"]]], ["send", ["symbol", "="], ["data", ["send", ["send", ["symbol", "module"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "exports"]]]], ["data"].concat(expr$27476)], ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], exp$27516], ["data", ["symbol", "="]]]], ["multi"].concat(stmts$27512), exp$27516]]]]];
  })];
})), accum$27464)), __amp____colon__(((accum$27521 = ({})), ((accum$27521["class"] = (function(context$27528, scope$27529, $27525$27530, expr$27531) {
  var t0$27535;
  var t0$28212;
  var t1$28213;
  var t2$28214;
  var t0$28232;
  var name$28205;
  var name$28179;
  var super$28180;
  var t0$28171;
  var t1$28172;
  var t2$28173;
  var t3$28174;
  var bridge$27550$28175;
  var stmts$28245;
  var stmts$28145;
  var $27547$28146;
  var $27552$28141;
  var $27553$28142;
  var t0$28136;
  var t1$28137;
  var t2$28138;
  var t3$28139;
  var $27545$28131;
  var helper$27554;
  var env$27533;
  (t0$27535 = $27525$27530);
  if (___hasprop(t0$27535, "env")) {
    (env$27533 = t0$27535.env);
  } else {
    ___match_error($27525$27530);
  }
  (helper$27554 = (function(name$27559, super$27560, stmts$27561) {
    var $index$27618;
    var $length$27612;
    var temp$27606;
    var acc$27600;
    var t0$28042;
    var t1$28043;
    var t0$28066;
    var env2$28062;
    var it$28063;
    var cls$28064;
    var name_str$28092;
    var t0$28088;
    var $27569$28083;
    var other$28126;
    var t0$28113;
    var $27573$28108;
    var statics$27576;
    var ctor$27577;
    var new_stmts$27578;
    var ctor_args$27579;
    var ctor_body$27580;
    var ctor_expr$27581;
    var node$27582;
    (statics$27576 = ["data", ["symbol", "="]]);
    (ctor$27577 = [["data"], __amp__(["multi"], ({"env": env$27533}))]);
    (new_stmts$27578 = (((acc$27600 = [])), (((temp$27606 = stmts$27561)), ((($length$27612 = temp$27606.length)), ((($index$27618 = 0)), (function() {
      $27591: for (; ($index$27618 < $length$27612); ($index$27618++)) {
        var t0$27703;
        var t1$27704;
        var t2$27705;
        var t3$27706;
        var t4$27707;
        var t5$27708;
        var t6$27709;
        var t7$27710;
        var t8$27711;
        var t0$27760;
        var t1$27761;
        var t2$27762;
        var t3$27763;
        var t4$27764;
        var t5$27765;
        var t6$27766;
        var t7$27767;
        var t8$27768;
        var t9$27769;
        var t10$27770;
        var t11$27771;
        var t12$27772;
        var accum$27888;
        var accum$27926;
        var accum$27934;
        var accum$28021;
        var lhs$27849;
        var rhs$27850;
        var args$27695;
        var body$27696;
        var methods$27645;
        var t0$27632;
        var t1$27633;
        var t2$27634;
        var t3$27635;
        var t4$27636;
        var t5$27637;
        var t6$27638;
        var t7$27639;
        var t8$27640;
        var bridge$27595$27641;
        var m$27627;
        (m$27627 = temp$27606[$index$27618]);
        (t0$27632 = m$27627);
        if (((t0$27632 instanceof Array) && (((t1$27633 = t0$27632.length)), ((t1$27633 === 3) && ((t0$27632[0] === "send") && (((t2$27634 = t0$27632[1])), ((t2$27634 instanceof Array) && (((t3$27635 = t2$27634.length)), ((t3$27635 === 2) && ((t2$27634[0] === "symbol") && ((t2$27634[1] === "static") && (((t4$27636 = t0$27632[2])), ((t4$27636 instanceof Array) && (((t5$27637 = t4$27636.length)), ((t5$27637 === 2) && ((t4$27636[0] === "data") && (((t6$27638 = getProjector(Body$18188)(t4$27636[1]))), (t6$27638[0] && (((t7$27639 = t6$27638[1])), (((t8$27640 = t7$27639.length)), (t8$27640 >= 0))))))))))))))))))))) {
          (methods$27645 = Array.prototype.slice.call(t7$27639, 0));
          acc$27600.push((statics$27576 = statics$27576.concat(methods$27645)));
        } else {
          (bridge$27595$27641 = m$27627);
          if ((((bridge$27595$27641 instanceof Array) && (((t0$27703 = bridge$27595$27641.length)), ((t0$27703 === 3) && ((bridge$27595$27641[0] === "send") && (((t1$27704 = bridge$27595$27641[1])), ((t1$27704 instanceof Array) && (((t2$27705 = t1$27704.length)), ((t2$27705 === 2) && ((t1$27704[0] === "symbol") && ((t1$27704[1] === "=") && (((t3$27706 = bridge$27595$27641[2])), ((t3$27706 instanceof Array) && (((t4$27707 = t3$27706.length)), ((t4$27707 === 3) && ((t3$27706[0] === "data") && (((t5$27708 = t3$27706[1])), ((t5$27708 instanceof Array) && (((t6$27709 = t5$27708.length)), ((t6$27709 === 3) && ((t5$27708[0] === "send") && (((t7$27710 = t5$27708[1])), ((t7$27710 instanceof Array) && (((t8$27711 = t7$27710.length)), ((t8$27711 === 2) && ((t7$27710[0] === "symbol") && ((t7$27710[1] === "constructor") && ((args$27695 = t5$27708[2]), ((body$27696 = t3$27706[2]), true)))))))))))))))))))))))))))) || ((bridge$27595$27641 instanceof Array) && (((t0$27760 = bridge$27595$27641.length)), ((t0$27760 === 3) && ((bridge$27595$27641[0] === "send") && (((t1$27761 = bridge$27595$27641[1])), ((t1$27761 instanceof Array) && (((t2$27762 = t1$27761.length)), ((t2$27762 === 2) && ((t1$27761[0] === "symbol") && ((t1$27761[1] === "=") && (((t3$27763 = bridge$27595$27641[2])), ((t3$27763 instanceof Array) && (((t4$27764 = t3$27763.length)), ((t4$27764 === 3) && ((t3$27763[0] === "data") && (((t5$27765 = t3$27763[1])), ((t5$27765 instanceof Array) && (((t6$27766 = t5$27765.length)), ((t6$27766 === 2) && ((t5$27765[0] === "symbol") && ((t5$27765[1] === "constructor") && (((t7$27767 = t3$27763[2])), ((t7$27767 instanceof Array) && (((t8$27768 = t7$27767.length)), ((t8$27768 === 3) && ((t7$27767[0] === "send") && (((t9$27769 = t7$27767[1])), ((t9$27769 instanceof Array) && (((t10$27770 = t9$27769.length)), ((t10$27770 === 2) && ((t9$27769[0] === "symbol") && ((t9$27769[1] === "->") && (((t11$27771 = t7$27767[2])), ((t11$27771 instanceof Array) && (((t12$27772 = t11$27771.length)), ((t12$27772 === 3) && ((t11$27771[0] === "data") && ((args$27695 = t11$27771[1]), ((body$27696 = t11$27771[2]), true))))))))))))))))))))))))))))))))))))))))) {
            acc$27600.push((((ctor$27577 = [args$27695, body$27696])), ["splice"]));
          } else {
            (t0$27632 = m$27627);
            if (((t0$27632 instanceof Array) && (((t1$27633 = t0$27632.length)), ((t1$27633 === 3) && ((t0$27632[0] === "send") && (((t2$27634 = t0$27632[1])), ((t2$27634 instanceof Array) && (((t3$27635 = t2$27634.length)), ((t3$27635 === 2) && ((t2$27634[0] === "symbol") && ((t2$27634[1] === "=") && (((t4$27636 = t0$27632[2])), ((t4$27636 instanceof Array) && (((t5$27637 = t4$27636.length)), ((t5$27637 === 3) && (t4$27636[0] === "data")))))))))))))))) {
              (lhs$27849 = t4$27636[1]);
              (rhs$27850 = t4$27636[2]);
              acc$27600.push(parse_pattern$18192(scope$27529, lhs$27849, rhs$27850, __amp__(pattern_handlers$18226.build_object, __amp____colon__(({"allow_nested": false}), __amp____colon__(((accum$27888 = ({})), ((accum$27888["assign"] = (function($27892$27896, value$27897) {
                var t0$27908;
                var t0$27916;
                var bridge$27894$27901;
                var v$27899;
                (bridge$27894$27901 = $27892$27896);
                if ((((bridge$27894$27901 instanceof Array) && (((t0$27908 = bridge$27894$27901.length)), ((t0$27908 === 2) && ((bridge$27894$27901[0] === "symbol") && ((v$27899 = bridge$27894$27901[1]), true))))) || ((bridge$27894$27901 instanceof Array) && (((t0$27916 = bridge$27894$27901.length)), ((t0$27916 === 2) && ((bridge$27894$27901[0] === "value") && ((v$27899 = bridge$27894$27901[1]), true))))))) {} else {
                  ___match_error($27892$27896);
                }
                return ["do", __lt____lt____colon__$18184(["assign", ["send", ["send", name$27559, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]], ["value", v$27899]], value$27897], v$27899)];
              })), accum$27888)), __amp____colon__(((accum$27926 = ({})), ((accum$27926["declare"] = (function(vars$27931) {
                return [];
              })), accum$27926)), __amp____colon__(((accum$27934 = ({})), ((accum$27934["wrap_target"] = (function($27938$27941) {
                var t0$28002;
                var other_env$27998;
                var it$27999;
                var it2$28000;
                var other$28018;
                var args$27965;
                var body$27966;
                var t0$27957;
                var t1$27958;
                var t2$27959;
                var t3$27960;
                var t4$27961;
                var $27943$27952;
                var ph$27946;
                (ph$27946 = $27938$27941);
                ($27943$27952 = ph$27946);
                if ((($27943$27952 instanceof Array) && (((t0$27957 = $27943$27952.length)), ((t0$27957 === 3) && (($27943$27952[0] === "send") && (((t1$27958 = $27943$27952[1])), ((t1$27958 instanceof Array) && (((t2$27959 = t1$27958.length)), ((t2$27959 === 2) && ((t1$27958[0] === "symbol") && ((t1$27958[1] === "->") && (((t3$27960 = $27943$27952[2])), ((t3$27960 instanceof Array) && (((t4$27961 = t3$27960.length)), ((t4$27961 === 3) && (t3$27960[0] === "data")))))))))))))))) {
                  (args$27965 = t3$27960[1]);
                  (body$27966 = t3$27960[2]);
                  (t0$28002 = body$27966);
                  if (___hasprop(t0$28002, "env")) {
                    (other_env$27998 = t0$28002.env);
                  } else {
                    ___match_error(body$27966, "/home/olivier/git/earl-grey/src/stdenv.eg", 39625, 39629);
                  }
                  (it$27999 = __amp__(["symbol", "@"], ({"env": other_env$27998})));
                  (it2$28000 = __amp__(["symbol", "self"], ({"env": other_env$27998})));
                  return ["send", ["symbol", "_lambda"], ["data", args$27965, ["send", ["symbol", "splice"], ["data", ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], it$27999], ["symbol", "this"]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], it2$28000], ["symbol", "this"]]]]]], body$27966, ["value", null], ["value", false]]];
                } else {
                  (other$28018 = $27943$27952);
                  return other$28018;
                }
              })), accum$27934)), ((accum$28021 = ({})), ((accum$28021["success"] = (function($28025$28028) {
                $28025$28028;
                return ["splice"];
              })), accum$28021)))))))));
            } else {
              m$27627;
              if (false) {
                acc$27600.push(undefined);
              } else {
                false;
              }
            }
          }
        }
      }
    })()))), acc$27600));
    (t0$28042 = ctor$27577);
    if (((t0$28042 instanceof Array) && (((t1$28043 = t0$28042.length)), (t1$28043 === 2)))) {
      (ctor_args$27579 = t0$28042[0]);
      (ctor_body$27580 = t0$28042[1]);
    } else {
      ___match_error(ctor$27577, "/home/olivier/git/earl-grey/src/stdenv.eg", 40233, 40237);
    }
    (ctor_expr$27581 = ((((t0$28066 = ctor_body$27580)), (___hasprop(t0$28066, "env") ? ((env2$28062 = t0$28066.env)) : ___match_error(ctor_body$27580, "/home/olivier/git/earl-grey/src/stdenv.eg", 40287, 40296))), ((it$28063 = __amp__(["symbol", "@"], ({"env": env2$28062})))), ((cls$28064 = ["send", ["symbol", "_lambda"], ["data", ctor_args$27579, ["send", ["symbol", "="], ["data", it$28063, ["send", ["symbol", "if"], ["data", ["send", ["symbol", "not"], ["data", ["void"], ["send", ["symbol", "?"], ["data", name$27559, ["symbol", "this"]]]]], ["send", ["send", ["symbol", "Object"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "create"]]]], ["data", ["send", name$27559, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "prototype"]]]]]], ["symbol", "this"]]]]], ctor_body$27580, it$28063, ["value", false]]])), (super$27560 ? ["send", ["symbol", "___extend"], ["data", cls$28064, super$27560]] : cls$28064)));
    ($27569$28083 = name$27559);
    if ((($27569$28083 instanceof Array) && (((t0$28088 = $27569$28083.length)), ((t0$28088 === 2) && ($27569$28083[0] === "symbol"))))) {
      (name_str$28092 = $27569$28083[1]);
      statics$27576.push(["send", ["symbol", "="], ["data", ["value", "::name"], ["value", name_str$28092]]]);
    } else {
      $27569$28083;
      undefined;
    }
    statics$27576.push(["send", ["symbol", "="], ["data", ["value", "::egclass"], ["symbol", "true"]]]);
    (node$27582 = ["splice", ["send", ["symbol", "="], ["data", ["send", ["symbol", "let"], name$27559], ctor_expr$27581]]].concat(new_stmts$27578).concat([["send", ["symbol", "&:"], ["data", name$27559, statics$27576]], name$27559]));
    ($27573$28108 = context$27528);
    if ((($27573$28108 instanceof Array) && (((t0$28113 = $27573$28108.length)), ((t0$28113 === 2) && (($27573$28108[0] === "expr") && ($27573$28108[1] === "multi")))))) {
      return node$27582;
    } else {
      (other$28126 = $27573$28108);
      return ["multi", node$27582];
    }
  }));
  ($27545$28131 = expr$27531);
  if ((($27552$28141 = ($27545$28131 instanceof Array)) && (((t0$28136 = $27545$28131.length)), ((t0$28136 === 3) && (($27545$28131[0] === "data") && (($27547$28146 = $27545$28131[1]), (((t1$28137 = getProjector(Body$18188)($27545$28131[2]))), (t1$28137[0] && (((t2$28138 = t1$28137[1])), (((t3$28139 = t2$28138.length)), (t3$28139 >= 0))))))))))) {
    (stmts$28145 = Array.prototype.slice.call(t2$28138, 0));
    (t0$28171 = $27547$28146);
    if (((t0$28171 instanceof Array) && (((t1$28172 = t0$28171.length)), ((t1$28172 === 3) && ((t0$28171[0] === "send") && ((name$28179 = t0$28171[1]), (((t2$28173 = t0$28171[2])), ((t2$28173 instanceof Array) && (((t3$28174 = t2$28173.length)), ((t3$28174 === 2) && (t2$28173[0] === "data"))))))))))) {
      (super$28180 = t2$28173[1]);
      return helper$27554(name$28179, super$28180, stmts$28145);
    } else {
      (bridge$27550$28175 = $27547$28146);
      if ((((bridge$27550$28175 instanceof Array) && (((t0$28212 = bridge$27550$28175.length)), ((t0$28212 === 3) && ((bridge$27550$28175[0] === "send") && ((name$28205 = bridge$27550$28175[1]), (((t1$28213 = bridge$27550$28175[2])), ((t1$28213 instanceof Array) && (((t2$28214 = t1$28213.length)), ((t2$28214 === 1) && (t1$28213[0] === "data")))))))))) || ((bridge$27550$28175 instanceof Array) && (((t0$28232 = bridge$27550$28175.length)), ((t0$28232 === 2) && ((bridge$27550$28175[0] === "symbol") && (bridge$27550$28175[1], ((name$28205 = bridge$27550$28175), true)))))))) {
        return helper$27554(name$28205, null, stmts$28145);
      } else {
        ___match_error($27547$28146, "/home/olivier/git/earl-grey/src/stdenv.eg", 41683, 41688);
      }
    }
  } else {
    if (($27552$28141 && ((t0$28136 === 2) && (($27545$28131[0] === "data") && (((t1$28137 = getProjector(Body$18188)($27545$28131[1]))), (t1$28137[0] && (((t2$28138 = t1$28137[1])), (((t3$28139 = t2$28138.length)), (t3$28139 >= 0))))))))) {
      (stmts$28245 = Array.prototype.slice.call(t2$28138, 0));
      return helper$27554(["symbol", scope$27529.gensym()], null, stmts$28245);
    } else {
      ___match_error($27545$28131);
    }
  }
})), accum$27521)), __amp____colon__(((accum$28266 = ({})), ((accum$28266["%"] = (function(context$28275, scope$28276, $28270$28277, $28272$28278) {
  var t0$28285;
  var t0$28294;
  var t1$28295;
  var x$28337;
  var x$28343;
  var bridge$28311$28326;
  var $28309$28321;
  var $index$28687;
  var $length$28681;
  var temp$28675;
  var xs$28662;
  var x$28826;
  var pair$28793;
  var k$28794;
  var v$28795;
  var args$28657;
  var $28629$28644;
  var $28630$28645;
  var t0$28638;
  var t1$28639;
  var t2$28640;
  var t3$28641;
  var t4$28642;
  var $28624$28633;
  var tags$28316;
  var kv$28317;
  var parse$28318;
  var form$28280;
  var env$28281;
  var descr$28282;
  var contents$28283;
  (t0$28285 = $28270$28277);
  (form$28280 = t0$28285);
  if (___hasprop(t0$28285, "env")) {
    (env$28281 = t0$28285.env);
  } else {
    ___match_error($28270$28277);
  }
  (t0$28294 = $28272$28278);
  if (((t0$28294 instanceof Array) && (((t1$28295 = t0$28294.length)), ((t1$28295 === 3) && (t0$28294[0] === "data"))))) {
    (descr$28282 = t0$28294[1]);
    (contents$28283 = t0$28294[2]);
  } else {
    ___match_error($28272$28278);
  }
  ($28309$28321 = context$28275);
  (bridge$28311$28326 = $28309$28321);
  if (((((x$28337 = bridge$28311$28326)), ((x$28337 instanceof Array) && (x$28337[0] === "check"))) || (((x$28343 = bridge$28311$28326)), ((x$28343 instanceof Array) && (x$28343[0] === "project"))))) {
    return ["nostep", form$28280];
  } else {
    $28309$28321;
    undefined;
  }
  (tags$28316 = ["data"]);
  (kv$28317 = ["data", ["symbol", "="]]);
  (parse$28318 = (function($28360$28363) {
    var t0$28388;
    var t0$28485;
    var t0$28493;
    var t1$28494;
    var t0$28562;
    var t0$28570;
    var $index$28601;
    var $length$28595;
    var temp$28589;
    var acc$28583;
    var args$28555;
    var expr$28548;
    var rest$28549;
    var expr$28509;
    var x$28447;
    var x$28437;
    var s$28432;
    var $28376$28412;
    var $28377$28413;
    var $28378$28414;
    var $28379$28415;
    var $28380$28416;
    var $28381$28417;
    var $28382$28418;
    var $28383$28419;
    var $28384$28420;
    var t0$28402;
    var t1$28403;
    var t2$28404;
    var t3$28405;
    var t4$28406;
    var t5$28407;
    var t6$28408;
    var bridge$28370$28409;
    var bridge$28375$28410;
    var $28365$28397;
    var ph$28385;
    var whole$28386;
    (t0$28388 = $28360$28363);
    (whole$28386 = t0$28388);
    (ph$28385 = t0$28388);
    ($28365$28397 = ph$28385);
    if ((($28376$28412 = ($28365$28397 instanceof Array)) && (((t0$28402 = $28365$28397.length)), ((t0$28402 === 1) && ($28365$28397[0] === "void"))))) {
      return null;
    } else {
      if (($28376$28412 && (($28378$28414 = (t0$28402 === 2)) && ($28365$28397[0] === "symbol")))) {
        (s$28432 = $28365$28397[1]);
        return tags$28316.push(["value", s$28432]);
      } else {
        if (($28378$28414 && (($28365$28397[0] === "value") && (((t1$28403 = [true, String($28365$28397[1])])), t1$28403[0])))) {
          (x$28437 = t1$28403[1]);
          return tags$28316.push(["value", x$28437]);
        } else {
          if (($28376$28412 && (($28378$28414 = (t0$28402 === 3)) && (($28379$28415 = ($28365$28397[0] === "send")) && (((t1$28403 = $28365$28397[1])), (($28381$28417 = (t1$28403 instanceof Array)) && (((t2$28404 = t1$28403.length)), (($28383$28419 = (t2$28404 === 2)) && (($28384$28420 = (t1$28403[0] === "symbol")) && ((t1$28403[1] === ".") && (((t3$28405 = $28365$28397[2])), ((t3$28405 instanceof Array) && (((t4$28406 = t3$28405.length)), ((t4$28406 === 3) && ((t3$28405[0] === "data") && (((t5$28407 = t3$28405[1])), ((t5$28407 instanceof Array) && (((t6$28408 = t5$28407.length)), ((t6$28408 === 1) && ((t5$28407[0] === "void") && (((bridge$28370$28409 = t3$28405[2])), (((bridge$28370$28409 instanceof Array) && (((t0$28485 = bridge$28370$28409.length)), ((t0$28485 === 2) && ((bridge$28370$28409[0] === "symbol") && ((x$28447 = bridge$28370$28409[1]), true))))) || ((bridge$28370$28409 instanceof Array) && (((t0$28493 = bridge$28370$28409.length)), ((t0$28493 === 2) && ((bridge$28370$28409[0] === "value") && (((t1$28494 = [true, String(bridge$28370$28409[1])])), (t1$28494[0] && ((x$28447 = t1$28494[1]), true))))))))))))))))))))))))))))) {
            return tags$28316.push(["value", ("." + x$28447)]);
          } else {
            if (($28384$28420 && ((t1$28403[1] === "^") && (((t3$28405 = $28365$28397[2])), ((t3$28405 instanceof Array) && (((t4$28406 = t3$28405.length)), ((t4$28406 === 3) && ((t3$28405[0] === "data") && (((t5$28407 = t3$28405[1])), ((t5$28407 instanceof Array) && (((t6$28408 = t5$28407.length)), ((t6$28408 === 1) && (t5$28407[0] === "void"))))))))))))) {
              (expr$28509 = t3$28405[2]);
              return tags$28316.push(expr$28509);
            } else {
              if (($28384$28420 && ((t1$28403[1] === "=") && (((t3$28405 = $28365$28397[2])), ((t3$28405 instanceof Array) && (((t4$28406 = t3$28405.length)), ((t4$28406 === 3) && (t3$28405[0] === "data")))))))) {
                t3$28405[1];
                t3$28405[2];
                return kv$28317.push(whole$28386);
              } else {
                if ($28379$28415) {
                  (expr$28548 = $28365$28397[1]);
                  (rest$28549 = $28365$28397[2]);
                  parse$28318(expr$28548);
                  return parse$28318(rest$28549);
                } else {
                  (bridge$28375$28410 = $28365$28397);
                  if ((((bridge$28375$28410 instanceof Array) && (((t0$28562 = bridge$28375$28410.length)), ((t0$28562 >= 1) && ((bridge$28375$28410[0] === "multi") && ((args$28555 = Array.prototype.slice.call(bridge$28375$28410, 1)), true))))) || ((bridge$28375$28410 instanceof Array) && (((t0$28570 = bridge$28375$28410.length)), ((t0$28570 >= 1) && ((bridge$28375$28410[0] === "data") && ((args$28555 = Array.prototype.slice.call(bridge$28375$28410, 1)), true))))))) {
                    (acc$28583 = []);
                    (temp$28589 = args$28555);
                    ($length$28595 = temp$28589.length);
                    ($index$28601 = 0);
                    $28578: for (; ($index$28601 < $length$28595); ($index$28601++)) {
                      var arg$28618;
                      var m$28610;
                      (m$28610 = temp$28589[$index$28601]);
                      (arg$28618 = m$28610);
                      acc$28583.push(parse$28318(arg$28618));
                    }
                    return acc$28583;
                  } else {
                    ___match_error($28365$28397);
                  }
                }
              }
            }
          }
        }
      }
    }
  }));
  parse$28318(descr$28282);
  (contents$28283 = ((($28624$28633 = contents$28283)), ((($28629$28644 = ($28624$28633 instanceof Array)) && (((t0$28638 = $28624$28633.length)), ((t0$28638 === 1) && ($28624$28633[0] === "void")))) ? ["array"] : (($28629$28644 && ((t0$28638 >= 1) && ($28624$28633[0] === "multi"))) ? ((args$28657 = Array.prototype.slice.call($28624$28633, 1)), (((xs$28662 = [])), (((temp$28675 = args$28657)), ((($length$28681 = temp$28675.length)), ((($index$28687 = 0)), (function() {
    $28663: for (; ($index$28687 < $length$28681); ($index$28687++)) {
      var other$28789;
      var spl$28749;
      var pair$28713;
      var k$28714;
      var v$28715;
      var $28668$28710;
      var t0$28701;
      var t1$28702;
      var t2$28703;
      var t3$28704;
      var t4$28705;
      var t5$28706;
      var t6$28707;
      var t7$28708;
      var m$28696;
      (m$28696 = temp$28675[$index$28687]);
      (t0$28701 = m$28696);
      (pair$28713 = t0$28701);
      if (((t0$28701 instanceof Array) && (((t1$28702 = t0$28701.length)), ((t1$28702 === 3) && ((t0$28701[0] === "send") && (((t2$28703 = t0$28701[1])), ((t2$28703 instanceof Array) && (((t3$28704 = t2$28703.length)), ((t3$28704 === 2) && ((t2$28703[0] === "symbol") && ((t2$28703[1] === "=") && (((t4$28705 = t0$28701[2])), ((t4$28705 instanceof Array) && (((t5$28706 = t4$28705.length)), ((t5$28706 === 3) && (t4$28705[0] === "data")))))))))))))))) {
        (k$28714 = t4$28705[1]);
        (v$28715 = t4$28705[2]);
        kv$28317.push(pair$28713);
      } else {
        (spl$28749 = t0$28701);
        if (((t0$28701 instanceof Array) && (((t1$28702 = t0$28701.length)), ((t1$28702 === 3) && ((t0$28701[0] === "send") && (((t2$28703 = t0$28701[1])), ((t2$28703 instanceof Array) && (((t3$28704 = t2$28703.length)), ((t3$28704 === 2) && ((t2$28703[0] === "symbol") && ((t2$28703[1] === "**") && (((t4$28705 = t0$28701[2])), ((t4$28705 instanceof Array) && (((t5$28706 = t4$28705.length)), ((t5$28706 === 3) && ((t4$28705[0] === "data") && (((t6$28707 = t4$28705[1])), ((t6$28707 instanceof Array) && (((t7$28708 = t6$28707.length)), ((t7$28708 === 1) && (t6$28707[0] === "void"))))))))))))))))))))) {
          t4$28705[2];
          kv$28317.push(spl$28749);
        } else {
          (other$28789 = m$28696);
          xs$28662.push(other$28789);
        }
      }
    }
  })()))), ["array"].concat(xs$28662))) : ((pair$28793 = $28624$28633), ((($28624$28633 instanceof Array) && (((t0$28638 = $28624$28633.length)), ((t0$28638 === 3) && (($28624$28633[0] === "send") && (((t1$28639 = $28624$28633[1])), ((t1$28639 instanceof Array) && (((t2$28640 = t1$28639.length)), ((t2$28640 === 2) && ((t1$28639[0] === "symbol") && ((t1$28639[1] === "=") && (((t3$28641 = $28624$28633[2])), ((t3$28641 instanceof Array) && (((t4$28642 = t3$28641.length)), ((t4$28642 === 3) && (t3$28641[0] === "data"))))))))))))))) ? ((k$28794 = t3$28641[1]), (v$28795 = t3$28641[2]), (kv$28317.push(pair$28793), ["array"])) : ((x$28826 = $28624$28633), x$28826)))))));
  return ["send", ["symbol", "Node"], ["data", tags$28316, kv$28317, contents$28283]];
})), accum$28266)), __amp____colon__(((accum$28829 = ({})), ((accum$28829["globals"] = (function(context$28836, scope$28837, form$28838, $28833$28839) {
  var t0$28843;
  var t1$28844;
  var t2$28845;
  var t3$28846;
  var t4$28847;
  var $index$28899;
  var $length$28893;
  var temp$28887;
  var acc$28881;
  var vars$28841;
  (t0$28843 = $28833$28839);
  if (((t0$28843 instanceof Array) && (((t1$28844 = t0$28843.length)), ((t1$28844 === 2) && ((t0$28843[0] === "data") && (((t2$28845 = getProjector(Body$18188)(t0$28843[1]))), (t2$28845[0] && (((t3$28846 = t2$28845[1])), (((t4$28847 = t3$28846.length)), (t4$28847 >= 0)))))))))) {
    (vars$28841 = Array.prototype.slice.call(t3$28846, 0));
  } else {
    ___match_error($28833$28839);
  }
  return ["splice"].concat((((acc$28881 = [])), (((temp$28887 = vars$28841)), ((($length$28893 = temp$28887.length)), ((($index$28899 = 0)), (function() {
    $28876: for (; ($index$28899 < $length$28893); ($index$28899++)) {
      var variable$28918;
      var s$28919;
      var t0$28913;
      var t1$28914;
      var m$28908;
      (m$28908 = temp$28887[$index$28899]);
      (t0$28913 = m$28908);
      (variable$28918 = t0$28913);
      if (((t0$28913 instanceof Array) && (((t1$28914 = t0$28913.length)), ((t1$28914 === 2) && (t0$28913[0] === "symbol"))))) {
        (s$28919 = t0$28913[1]);
        acc$28881.push(["declare_raw", variable$28918, ["variable", s$28919]]);
      } else {
        ___match_error(m$28908, "/home/olivier/git/earl-grey/src/stdenv.eg", 44395, 44474);
      }
    }
  })()))), acc$28881));
})), accum$28829)), ((accum$28935 = ({})), ((accum$28935["S"] = (function(context$28940, scope$28941, form$28942, arg$28943) {
  var text$28963;
  var text$28958;
  var $28945$28950;
  return ["value", ((($28945$28950 = arg$28943.location.text())), (getChecker(RegExp("^\\[(.|\\n)*\\]$", ""))($28945$28950) ? ((text$28958 = $28945$28950), text$28958.substring(1, (text$28958.length - 1))) : ((text$28963 = $28945$28950), text$28963)))];
})), accum$28935))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))))));
($length$28968 = temp$20117.length);
($index$28974 = 0);
$18240: for (; ($index$28974 < $length$28968); ($index$28974++)) {
  var k$28993;
  var v$28994;
  var t0$28988;
  var t1$28989;
  var m$28983;
  (m$28983 = temp$20117[$index$28974]);
  (t0$28988 = m$28983);
  if (((t0$28988 instanceof Array) && (((t1$28989 = t0$28988.length)), (t1$28989 === 2)))) {
    (k$28993 = t0$28988[0]);
    (v$28994 = t0$28988[1]);
    stdenv$18204.bind(topscope$18208, k$28993, ["macro", v$28994]);
  } else {
    ___match_error(m$28983, "/home/olivier/git/earl-grey/src/stdenv.eg", 9644, 9709);
  }
}
(blocktest_wrap$18230 = (function(expr$29012) {
  return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "value"], ["send", ["symbol", "!!"], ["data", ["multi", ["send", ["symbol", "match"], ["data", expr$29012, ["multi", ["send", ["symbol", "->"], ["data", ["send", ["symbol", "?"], ["data", ["symbol", "true"], ["symbol", "x"]]], ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "success"]]], ["data", ["symbol", "x"]]]]], ["send", ["symbol", "->"], ["data", ["send", ["symbol", "?"], ["data", ["symbol", "false"], ["symbol", "x"]]], ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "failure"]]], ["data", ["symbol", "x"]]]]]]]]], ["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "error"]]], ["data", ["symbol", "e"]]]]]]]]], ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "push"]]]], ["data", ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "test_result"]]], ["data", ["symbol", "label"], ["symbol", "value"]]]]]];
}));
(blocktest_mac$18231 = (function(scope$29019, tests$29020) {
  var $index$29067;
  var $length$29061;
  var temp$29055;
  var acc$29049;
  var exptests$29026;
  var n$29027;
  var stmts$29028;
  (exptests$29026 = enumerate(scope$29019.step_all(["test"], tests$29020)));
  (n$29027 = exptests$29026.length);
  (stmts$29028 = (((acc$29049 = [])), (((temp$29055 = exptests$29026)), ((($length$29061 = temp$29055.length)), ((($index$29067 = 0)), (function() {
    $29037: for (; ($index$29067 < $length$29061); ($index$29067++)) {
      var wrap$29161;
      var fall$29162;
      var lbl$29187;
      var i$29180;
      var expr$29181;
      var i$29138;
      var elements$29139;
      var clauses$29140;
      var env$29141;
      var i$29119;
      var more_labels$29120;
      var more_tests$29121;
      var i$29092;
      var stmt$29093;
      var $29043$29086;
      var $29044$29087;
      var $29045$29088;
      var $29046$29089;
      var t0$29081;
      var t1$29082;
      var t2$29083;
      var t3$29084;
      var m$29076;
      (m$29076 = temp$29055[$index$29067]);
      (t0$29081 = m$29076);
      if ((($29044$29087 = (t0$29081 instanceof Array)) && (((t1$29082 = t0$29081.length)), (($29046$29089 = (t1$29082 === 2)) && ((i$29092 = t0$29081[0]), (((t2$29083 = t0$29081[1])), ((t2$29083 instanceof Array) && (((t3$29084 = t2$29083.length)), ((t3$29084 === 2) && (t2$29083[0] === "do")))))))))) {
        (stmt$29093 = t2$29083[1]);
        acc$29049.push(stmt$29093);
      } else {
        if (($29046$29089 && ((i$29119 = t0$29081[0]), (((t2$29083 = t0$29081[1])), ((t2$29083 instanceof Array) && (((t3$29084 = t2$29083.length)), ((t3$29084 === 3) && (t2$29083[0] === "blocktest")))))))) {
          (more_labels$29120 = t2$29083[1]);
          (more_tests$29121 = t2$29083[2]);
          acc$29049.push(["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["send", ["send", ["symbol", "label"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["send", ["symbol", "!"], ["data", ["symbol", "Array"], more_labels$29120]]]]]], ["send", ["symbol", "="], ["data", ["send", ["symbol", "set"], ["symbol", "acc"]], ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", blocktest_mac$18231(scope$29019, more_tests$29121)]]]]]]);
        } else {
          if (($29046$29089 && ((i$29138 = t0$29081[0]), (((t2$29083 = t0$29081[1])), ((t2$29083 instanceof Array) && (((t3$29084 = t2$29083.length)), ((t3$29084 === 3) && ((t2$29083[0] === "test_factory") && ((elements$29139 = t2$29083[1]), ((clauses$29140 = t2$29083[2]), ___hasprop(t2$29083, "env"))))))))))) {
            (env$29141 = t2$29083.env);
            acc$29049.push((((wrap$29161 = (function(expr$29167, index$29168) {
              return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["send", ["send", ["symbol", "label"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["data", index$29168]]]]], blocktest_wrap$18230(expr$29167)]];
            }))), ((fall$29162 = (function(target$29175) {
              return match_error$18211(target$29175);
            }))), build_loop$18227(scope$29019, env$29141, ["void"], elements$29139, clauses$29140, wrap$29161, ["splice"], ["splice"], ({"fallback": fall$29162}))));
          } else {
            if ($29046$29089) {
              (i$29180 = t0$29081[0]);
              (expr$29181 = t0$29081[1]);
              acc$29049.push((((lbl$29187 = ((n$29027 === 1) ? ["data"] : ["data", ["value", i$29180]]))), ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["send", ["send", ["symbol", "label"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", lbl$29187]]]], blocktest_wrap$18230(expr$29181)]]));
            } else {
              ___match_error(m$29076, "/home/olivier/git/earl-grey/src/stdenv.eg", 44998, 45807);
            }
          }
        }
      }
    }
  })()))), acc$29049));
  return ["send", ["symbol", "let"], ["data", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], ["symbol", "acc"]], ["data"]]], ["send", ["symbol", "!!"], ["data", ["multi"].concat(stmts$29028).concat([["symbol", "acc"]]), ["send", ["symbol", "->"], ["data", ["symbol", "e"], ["send", ["send", ["symbol", "acc"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", ["data", ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "error"]]], ["data", ["symbol", "label"], ["symbol", "e"]]]]]]]]]]]];
}));
stdenv$18204.bind(topscope$18208, "blocktest", ["macro", (function(context$29199, scope$29200, form$29201, $29196$29202) {
  var t0$29211;
  var t1$29212;
  var labels$29266;
  var tests$29267;
  var tests$29241;
  var $29207$29237;
  var $29208$29238;
  var t0$29232;
  var t1$29233;
  var t2$29234;
  var t3$29235;
  var $29204$29227;
  var args$29209;
  (t0$29211 = $29196$29202);
  if (((t0$29211 instanceof Array) && (((t1$29212 = t0$29211.length)), ((t1$29212 >= 1) && (t0$29211[0] === "data"))))) {
    (args$29209 = Array.prototype.slice.call(t0$29211, 1));
  } else {
    ___match_error($29196$29202);
  }
  ($29204$29227 = args$29209);
  if ((($29207$29237 = ($29204$29227 instanceof Array)) && (((t0$29232 = $29204$29227.length)), ((t0$29232 === 1) && (((t1$29233 = getProjector(Body$18188)($29204$29227[0]))), (t1$29233[0] && (((t2$29234 = t1$29233[1])), (((t3$29235 = t2$29234.length)), (t3$29235 >= 0))))))))) {
    (tests$29241 = Array.prototype.slice.call(t2$29234, 0));
    return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["data"]]], blocktest_mac$18231(scope$29200, tests$29241)];
  } else {
    if (($29207$29237 && ((t0$29232 === 2) && ((labels$29266 = $29204$29227[0]), (((t1$29233 = getProjector(Body$18188)($29204$29227[1]))), (t1$29233[0] && (((t2$29234 = t1$29233[1])), (((t3$29235 = t2$29234.length)), (t3$29235 >= 0))))))))) {
      (tests$29267 = Array.prototype.slice.call(t2$29234, 0));
      return ["multi", ["send", ["symbol", "="], ["data", ["symbol", "label"], ["send", ["symbol", "!"], ["data", ["symbol", "Array"], labels$29266]]]], blocktest_mac$18231(scope$29200, tests$29267)];
    } else {
      ___match_error($29204$29227);
    }
  }
})]);
(qqstruct$18232 = (function(name$29292, args$29293) {
  return ["data", ["value", name$29292]].concat(args$29293);
}));
(qq$18233 = (function($29299$29302) {
  var t0$29326;
  var $index$29495;
  var $length$29489;
  var temp$29483;
  var acc$29477;
  var $index$29538;
  var $length$29532;
  var temp$29526;
  var acc$29520;
  var $index$29587;
  var $length$29581;
  var temp$29575;
  var acc$29569;
  var name$29560;
  var args$29561;
  var ops$29468;
  var args$29469;
  var insert$29443;
  var insert$29418;
  var insert$29383;
  var v$29378;
  var s$29369;
  var s$29359;
  var $29314$29348;
  var $29315$29349;
  var $29316$29350;
  var $29317$29351;
  var $29318$29352;
  var $29319$29353;
  var $29320$29354;
  var $29321$29355;
  var $29322$29356;
  var t0$29340;
  var t1$29341;
  var t2$29342;
  var t3$29343;
  var t4$29344;
  var t5$29345;
  var t6$29346;
  var $29304$29335;
  var ph$29323;
  var expr$29324;
  (t0$29326 = $29299$29302);
  (expr$29324 = t0$29326);
  (ph$29323 = t0$29326);
  ($29304$29335 = ph$29323);
  if ((($29314$29348 = ($29304$29335 instanceof Array)) && (((t0$29340 = $29304$29335.length)), (($29316$29350 = (t0$29340 === 2)) && ($29304$29335[0] === "symbol"))))) {
    (s$29359 = $29304$29335[1]);
    return qqstruct$18232("symbol", [["value", s$29359]]);
  } else {
    if (($29316$29350 && ($29304$29335[0] === "char"))) {
      (s$29369 = $29304$29335[1]);
      return qqstruct$18232("char", [["value", s$29369]]);
    } else {
      if (($29314$29348 && ((t0$29340 === 1) && ($29304$29335[0] === "void")))) {
        return qqstruct$18232("void", []);
      } else {
        if (($29314$29348 && ((t0$29340 === 2) && ($29304$29335[0] === "value")))) {
          (v$29378 = $29304$29335[1]);
          return qqstruct$18232("value", [expr$29324]);
        } else {
          if (($29314$29348 && (($29316$29350 = (t0$29340 === 3)) && (($29317$29351 = ($29304$29335[0] === "send")) && (((t1$29341 = $29304$29335[1])), (($29319$29353 = (t1$29341 instanceof Array)) && (((t2$29342 = t1$29341.length)), (($29321$29355 = (t2$29342 === 2)) && (($29322$29356 = (t1$29341[0] === "symbol")) && ((t1$29341[1] === "^") && (((t3$29343 = $29304$29335[2])), ((t3$29343 instanceof Array) && (((t4$29344 = t3$29343.length)), ((t4$29344 === 3) && ((t3$29343[0] === "data") && (((t5$29345 = t3$29343[1])), ((t5$29345 instanceof Array) && (((t6$29346 = t5$29345.length)), ((t6$29346 === 1) && (t5$29345[0] === "void")))))))))))))))))))) {
            (insert$29383 = t3$29343[2]);
            return insert$29383;
          } else {
            if (($29322$29356 && ((t1$29341[1] === "^=") && (((t3$29343 = $29304$29335[2])), ((t3$29343 instanceof Array) && (((t4$29344 = t3$29343.length)), ((t4$29344 === 3) && ((t3$29343[0] === "data") && (((t5$29345 = t3$29343[1])), ((t5$29345 instanceof Array) && (((t6$29346 = t5$29345.length)), ((t6$29346 === 1) && (t5$29345[0] === "void"))))))))))))) {
              (insert$29418 = t3$29343[2]);
              return qqstruct$18232("value", [insert$29418]);
            } else {
              if (($29322$29356 && ((t1$29341[1] === "^*") && (((t3$29343 = $29304$29335[2])), ((t3$29343 instanceof Array) && (((t4$29344 = t3$29343.length)), ((t4$29344 === 3) && ((t3$29343[0] === "data") && (((t5$29345 = t3$29343[1])), ((t5$29345 instanceof Array) && (((t6$29346 = t5$29345.length)), ((t6$29346 === 1) && (t5$29345[0] === "void"))))))))))))) {
                (insert$29443 = t3$29343[2]);
                return ["send", ["symbol", "*"], ["data", ["void"], insert$29443]];
              } else {
                if (($29314$29348 && ((t0$29340 >= 2) && ($29304$29335[0] === "mismix")))) {
                  (ops$29468 = $29304$29335[1]);
                  (args$29469 = Array.prototype.slice.call($29304$29335, 2));
                  return qqstruct$18232("mismix", [["data"].concat((((acc$29477 = [])), (((temp$29483 = ops$29468)), ((($length$29489 = temp$29483.length)), ((($index$29495 = 0)), (function() {
                    $29472: for (; ($index$29495 < $length$29489); ($index$29495++)) {
                      var op$29512;
                      var m$29504;
                      (m$29504 = temp$29483[$index$29495]);
                      (op$29512 = m$29504);
                      acc$29477.push(qq$18233(op$29512));
                    }
                  })()))), acc$29477))].concat((((acc$29520 = [])), (((temp$29526 = args$29469)), ((($length$29532 = temp$29526.length)), ((($index$29538 = 0)), (function() {
                    $29515: for (; ($index$29538 < $length$29532); ($index$29538++)) {
                      var arg$29555;
                      var m$29547;
                      (m$29547 = temp$29526[$index$29538]);
                      (arg$29555 = m$29547);
                      acc$29520.push(qq$18233(arg$29555));
                    }
                  })()))), acc$29520)));
                } else {
                  if (($29314$29348 && (t0$29340 >= 1))) {
                    (name$29560 = $29304$29335[0]);
                    (args$29561 = Array.prototype.slice.call($29304$29335, 1));
                    return qqstruct$18232(name$29560, (((acc$29569 = [])), (((temp$29575 = args$29561)), ((($length$29581 = temp$29575.length)), ((($index$29587 = 0)), (function() {
                      $29564: for (; ($index$29587 < $length$29581); ($index$29587++)) {
                        var arg$29604;
                        var m$29596;
                        (m$29596 = temp$29575[$index$29587]);
                        (arg$29604 = m$29596);
                        acc$29569.push(qq$18233(arg$29604));
                      }
                    })()))), acc$29569));
                  } else {
                    ___match_error($29304$29335);
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
stdenv$18204.bind(topscope$18208, "'", ["macro", (function(context$29614, scope$29615, form$29616, $29611$29617) {
  var t0$29621;
  var t1$29622;
  var t2$29623;
  var t3$29624;
  var expr$29619;
  (t0$29621 = $29611$29617);
  if (((t0$29621 instanceof Array) && (((t1$29622 = t0$29621.length)), ((t1$29622 === 3) && ((t0$29621[0] === "data") && (((t2$29623 = t0$29621[1])), ((t2$29623 instanceof Array) && (((t3$29624 = t2$29623.length)), ((t3$29624 === 1) && (t2$29623[0] === "void")))))))))) {
    (expr$29619 = t0$29621[2]);
  } else {
    ___match_error($29611$29617);
  }
  return qq$18233(expr$29619);
})]);
(RegexBuilder$18234 = (function() {
  var it$0$29653;
  (it$0$29653 = ((!getChecker(RegexBuilder$18234)(this)) ? Object.create(RegexBuilder$18234.prototype) : this));
  return it$0$29653;
}));
(RegexBuilder$18234.prototype["wrap"] = (function(x$29665) {
  var it$0$29669;
  var self$29670;
  (it$0$29669 = this);
  (self$29670 = this);
  return (("(?:" + x$29665) + ")");
}));
(RegexBuilder$18234.prototype["quote"] = (function(x$29682) {
  var it$0$29686;
  var self$29687;
  (it$0$29686 = this);
  (self$29687 = this);
  return x$29682.replace(RegExp("([.?*+\\^$\\[\\]\\(\\)\\{\\}|\\\\])", "g"), "\\$1");
}));
(RegexBuilder$18234.prototype["quote_charset"] = (function(x$29699) {
  var it$0$29703;
  var self$29704;
  (it$0$29703 = this);
  (self$29704 = this);
  return x$29699.replace(RegExp("([\\[\\]\\(\\)\\{\\}\\^])", "g"), "\\$1");
}));
(RegexBuilder$18234.prototype["build"] = (function(expr$29716) {
  var t0$29921;
  var t1$29922;
  var t0$29942;
  var t1$29943;
  var t0$29963;
  var t1$29964;
  var t0$29986;
  var t1$29987;
  var t0$30001;
  var t1$30002;
  var x$30017;
  var v$29984;
  var t0$30030;
  var t1$30031;
  var t0$30045;
  var t1$30046;
  var t2$30047;
  var t3$30048;
  var t4$30049;
  var t5$30050;
  var t6$30051;
  var t7$30052;
  var t8$30053;
  var t9$30054;
  var x$30109;
  var v$30028;
  var $index$30155;
  var $length$30149;
  var temp$30143;
  var acc$30137;
  var $index$30215;
  var $length$30209;
  var temp$30203;
  var acc$30197;
  var other$30237;
  var args$30177;
  var args$30117;
  var a$29888;
  var b$29889;
  var $29748$29890;
  var s$29863;
  var x$29858;
  var $29731$29792;
  var $29759$29781;
  var $29760$29782;
  var $29761$29783;
  var $29762$29784;
  var $29763$29785;
  var $29764$29786;
  var $29765$29787;
  var $29766$29788;
  var $29767$29789;
  var t0$29775;
  var t1$29776;
  var t2$29777;
  var t3$29778;
  var t4$29779;
  var $29729$29770;
  var it$0$29720;
  var self$29721;
  (it$0$29720 = this);
  (self$29721 = this);
  ($29729$29770 = expr$29716);
  if ((($29759$29781 = ($29729$29770 instanceof Array)) && (((t0$29775 = $29729$29770.length)), (($29761$29783 = (t0$29775 === 2)) && ($29729$29770[0] === "symbol"))))) {
    ($29731$29792 = $29729$29770[1]);
    if (($29731$29792 === "any")) {
      return ".";
    } else {
      if (($29731$29792 === "start")) {
        return "^";
      } else {
        if (($29731$29792 === "end")) {
          return "$";
        } else {
          if (($29731$29792 === "alpha")) {
            return "\\a";
          } else {
            if (($29731$29792 === "digit")) {
              return "\\d";
            } else {
              if (($29731$29792 === "word")) {
                return "\\w";
              } else {
                if (($29731$29792 === "space")) {
                  return "\\s";
                } else {
                  if (($29731$29792 === "boundary")) {
                    return "\\b";
                  } else {
                    if (($29731$29792 === "a")) {
                      return "\\a";
                    } else {
                      if (($29731$29792 === "d")) {
                        return "\\d";
                      } else {
                        if (($29731$29792 === "w")) {
                          return "\\w";
                        } else {
                          if (($29731$29792 === "s")) {
                            return "\\s";
                          } else {
                            if (($29731$29792 === "b")) {
                              return "\\b";
                            } else {
                              ___match_error($29731$29792, "/home/olivier/git/earl-grey/src/stdenv.eg", 47288, 47293);
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
    if (($29761$29783 && ($29729$29770[0] === "value"))) {
      (x$29858 = $29729$29770[1]);
      return it$0$29720.quote(x$29858);
    } else {
      if (($29759$29781 && (($29761$29783 = (t0$29775 === 3)) && (($29762$29784 = ($29729$29770[0] === "send")) && (((t1$29776 = $29729$29770[1])), (($29764$29786 = (t1$29776 instanceof Array)) && (((t2$29777 = t1$29776.length)), (($29766$29788 = (t2$29777 === 2)) && (($29767$29789 = (t1$29776[0] === "symbol")) && ((t1$29776[1] === "raw") && (((t3$29778 = $29729$29770[2])), ((t3$29778 instanceof Array) && (((t4$29779 = t3$29778.length)), ((t4$29779 === 2) && (t3$29778[0] === "value"))))))))))))))) {
        (s$29863 = t3$29778[1]);
        return s$29863;
      } else {
        if (($29767$29789 && (($29748$29890 = t1$29776[1]), (((t3$29778 = $29729$29770[2])), ((t3$29778 instanceof Array) && (((t4$29779 = t3$29778.length)), ((t4$29779 === 3) && (t3$29778[0] === "data")))))))) {
          (a$29888 = t3$29778[1]);
          (b$29889 = t3$29778[2]);
          if (($29748$29890 === "||")) {
            return it$0$29720.wrap(((it$0$29720.build(a$29888) + "|") + it$0$29720.build(b$29889)));
          } else {
            if (($29748$29890 === "or")) {
              return it$0$29720.wrap(((it$0$29720.build(a$29888) + "|") + it$0$29720.build(b$29889)));
            } else {
              if (($29748$29890 === "*")) {
                (t0$29921 = a$29888);
                if (((t0$29921 instanceof Array) && (((t1$29922 = t0$29921.length)), ((t1$29922 === 1) && (t0$29921[0] === "void"))))) {} else {
                  ___match_error(a$29888, "/home/olivier/git/earl-grey/src/stdenv.eg", 47960, 47961);
                }
                return it$0$29720.wrap((it$0$29720.build(b$29889) + "*"));
              } else {
                if (($29748$29890 === "+")) {
                  (t0$29942 = a$29888);
                  if (((t0$29942 instanceof Array) && (((t1$29943 = t0$29942.length)), ((t1$29943 === 1) && (t0$29942[0] === "void"))))) {} else {
                    ___match_error(a$29888, "/home/olivier/git/earl-grey/src/stdenv.eg", 48044, 48045);
                  }
                  return it$0$29720.wrap((it$0$29720.build(b$29889) + "+"));
                } else {
                  if (($29748$29890 === "?")) {
                    (t0$29963 = a$29888);
                    if (((t0$29963 instanceof Array) && (((t1$29964 = t0$29963.length)), ((t1$29964 === 1) && (t0$29963[0] === "void"))))) {} else {
                      ___match_error(a$29888, "/home/olivier/git/earl-grey/src/stdenv.eg", 48128, 48129);
                    }
                    return it$0$29720.wrap((it$0$29720.build(b$29889) + "?"));
                  } else {
                    if (($29748$29890 === "in")) {
                      (t0$29986 = a$29888);
                      if (((t0$29986 instanceof Array) && (((t1$29987 = t0$29986.length)), ((t1$29987 === 1) && (t0$29986[0] === "void"))))) {} else {
                        ___match_error(a$29888, "/home/olivier/git/earl-grey/src/stdenv.eg", 48213, 48214);
                      }
                      (t0$30001 = b$29889);
                      if (((t0$30001 instanceof Array) && (((t1$30002 = t0$30001.length)), ((t1$30002 === 2) && (t0$30001[0] === "value"))))) {
                        (v$29984 = t0$30001[1]);
                      } else {
                        ___match_error(b$29889, "/home/olivier/git/earl-grey/src/stdenv.eg", 48242, 48243);
                      }
                      (x$30017 = it$0$29720.quote_charset(v$29984));
                      return (("[" + x$30017) + "]");
                    } else {
                      if (($29748$29890 === "not")) {
                        (t0$30030 = a$29888);
                        if (((t0$30030 instanceof Array) && (((t1$30031 = t0$30030.length)), ((t1$30031 === 1) && (t0$30030[0] === "void"))))) {} else {
                          ___match_error(a$29888, "/home/olivier/git/earl-grey/src/stdenv.eg", 48367, 48368);
                        }
                        (t0$30045 = b$29889);
                        if (((t0$30045 instanceof Array) && (((t1$30046 = t0$30045.length)), ((t1$30046 === 3) && ((t0$30045[0] === "send") && (((t2$30047 = t0$30045[1])), ((t2$30047 instanceof Array) && (((t3$30048 = t2$30047.length)), ((t3$30048 === 2) && ((t2$30047[0] === "symbol") && ((t2$30047[1] === "in") && (((t4$30049 = t0$30045[2])), ((t4$30049 instanceof Array) && (((t5$30050 = t4$30049.length)), ((t5$30050 === 3) && ((t4$30049[0] === "data") && (((t6$30051 = t4$30049[1])), ((t6$30051 instanceof Array) && (((t7$30052 = t6$30051.length)), ((t7$30052 === 1) && ((t6$30051[0] === "void") && (((t8$30053 = t4$30049[2])), ((t8$30053 instanceof Array) && (((t9$30054 = t8$30053.length)), ((t9$30054 === 2) && (t8$30053[0] === "value")))))))))))))))))))))))))) {
                          (v$30028 = t8$30053[1]);
                        } else {
                          ___match_error(b$29889, "/home/olivier/git/earl-grey/src/stdenv.eg", 48434, 48435);
                        }
                        (x$30109 = it$0$29720.quote_charset(v$30028));
                        return (("[^" + x$30109) + "]");
                      } else {
                        ___match_error($29748$29890, "/home/olivier/git/earl-grey/src/stdenv.eg", 47752, 47757);
                      }
                    }
                  }
                }
              }
            }
          }
        } else {
          if (($29759$29781 && (($29761$29783 = (t0$29775 >= 1)) && ($29729$29770[0] === "data")))) {
            (args$30117 = Array.prototype.slice.call($29729$29770, 1));
            return (("(" + (((acc$30137 = [])), (((temp$30143 = args$30117)), ((($length$30149 = temp$30143.length)), ((($index$30155 = 0)), (function() {
              $30132: for (; ($index$30155 < $length$30149); ($index$30155++)) {
                var arg$30172;
                var m$30164;
                (m$30164 = temp$30143[$index$30155]);
                (arg$30172 = m$30164);
                acc$30137.push(it$0$29720.build(arg$30172));
              }
            })()))), acc$30137).join("")) + ")");
          } else {
            if (($29761$29783 && ($29729$29770[0] === "multi"))) {
              (args$30177 = Array.prototype.slice.call($29729$29770, 1));
              return (("(?:" + (((acc$30197 = [])), (((temp$30203 = args$30177)), ((($length$30209 = temp$30203.length)), ((($index$30215 = 0)), (function() {
                $30192: for (; ($index$30215 < $length$30209); ($index$30215++)) {
                  var arg$30232;
                  var m$30224;
                  (m$30224 = temp$30203[$index$30215]);
                  (arg$30232 = m$30224);
                  acc$30197.push(it$0$29720.build(arg$30232));
                }
              })()))), acc$30197).join("")) + ")");
            } else {
              (other$30237 = $29729$29770);
              return ErrorFactory(["syntax", "regexp"]).create("Illegal regular expression", ({"expr": expr$29716}));
            }
          }
        }
      }
    }
  }
}));
__amp____colon__(RegexBuilder$18234, __amp____colon__(((accum$30242 = ({})), ((accum$30242["::name"] = "RegexBuilder"), accum$30242)), ((accum$30246 = ({})), ((accum$30246["::egclass"] = true), accum$30246))));
RegexBuilder$18234;
(build_regexp$18235 = (function(x$30253) {
  return RegexBuilder$18234().build(x$30253);
}));
(mac$30258 = (function($30262$30265, scope$30266, form$30267, arg$30268, flags$30269) {
  var x$30297;
  var x$30303;
  var text$30371;
  var text$30366;
  var $30353$30358;
  var text$30350;
  var arg$30376;
  var v$30335;
  var $30314$30331;
  var $30315$30332;
  var t0$30323;
  var t1$30324;
  var t2$30325;
  var t3$30326;
  var t4$30327;
  var t5$30328;
  var t6$30329;
  var $30311$30318;
  var bridge$30273$30286;
  var $30271$30281;
  var ph$30275;
  (ph$30275 = $30262$30265);
  ($30271$30281 = ph$30275);
  (bridge$30273$30286 = $30271$30281);
  if (((((x$30297 = bridge$30273$30286)), ((x$30297 instanceof Array) && (x$30297[0] === "check"))) || (((x$30303 = bridge$30273$30286)), ((x$30303 instanceof Array) && (x$30303[0] === "project"))))) {
    return ["nostep", form$30267];
  } else {
    $30271$30281;
    ($30311$30318 = arg$30268);
    if ((($30314$30331 = ($30311$30318 instanceof Array)) && (((t0$30323 = $30311$30318.length)), ((t0$30323 === 2) && (($30311$30318[0] === "value") && (((t1$30324 = $30311$30318[1])), (typeof(t1$30324) === "string"))))))) {
      (v$30335 = t1$30324);
      (text$30350 = ((($30353$30358 = arg$30268.location.text())), (getChecker(RegExp("^\\\".*\\\"$", ""))($30353$30358) ? ((text$30366 = $30353$30358), text$30366.substring(1, (text$30366.length - 1))) : ((text$30371 = $30353$30358), text$30371))));
      return ["send", ["symbol", "RegExp"], ["data", ["value", text$30350], ["value", flags$30269.join("")]]];
    } else {
      if (($30314$30331 && ((t0$30323 === 3) && (($30311$30318[0] === "send") && (((t1$30324 = $30311$30318[1])), ((t1$30324 instanceof Array) && (((t2$30325 = t1$30324.length)), ((t2$30325 === 2) && ((t1$30324[0] === "symbol") && ((t1$30324[1] === "'") && (((t3$30326 = $30311$30318[2])), ((t3$30326 instanceof Array) && (((t4$30327 = t3$30326.length)), ((t4$30327 === 3) && ((t3$30326[0] === "data") && (((t5$30328 = t3$30326[1])), ((t5$30328 instanceof Array) && (((t6$30329 = t5$30328.length)), ((t6$30329 === 1) && (t5$30328[0] === "void")))))))))))))))))))) {
        (arg$30376 = t3$30326[2]);
        return ["send", ["symbol", "RegExp"], ["data", ["value", build_regexp$18235(arg$30376)], ["value", flags$30269.join("")]]];
      } else {
        ___match_error($30311$30318);
      }
    }
  }
}));
stdenv$18204.bind(topscope$18208, "R", ["macro", accum_flags$18223(mac$30258, false)]);
(errf_macro$18236 = (function(tags$30416) {
  return (function($30419$30422, scope$30423, form$30424, expr$30425) {
    var x$30453;
    var x$30459;
    var other$30501;
    var args$30496;
    var $30472$30483;
    var $30473$30484;
    var t0$30481;
    var $30468$30476;
    var ctx$30466;
    var bridge$30429$30442;
    var $30427$30437;
    var ph$30431;
    (ph$30431 = $30419$30422);
    ($30427$30437 = ph$30431);
    (bridge$30429$30442 = $30427$30437);
    if (((((x$30453 = bridge$30429$30442)), ((x$30453 instanceof Array) && (x$30453[0] === "check"))) || (((x$30459 = bridge$30429$30442)), ((x$30459 instanceof Array) && (x$30459[0] === "project"))))) {
      return ["nostep", form$30424];
    } else {
      (ctx$30466 = $30427$30437);
      ($30468$30476 = expr$30425);
      if ((($30472$30483 = ($30468$30476 instanceof Array)) && (((t0$30481 = $30468$30476.length)), ((t0$30481 === 1) && ($30468$30476[0] === "void"))))) {
        return ["send", ["symbol", "ErrorFactory"], ["data", ["data"].concat(tags$30416)]];
      } else {
        if (($30472$30483 && ((t0$30481 >= 1) && ($30468$30476[0] === "data")))) {
          (args$30496 = Array.prototype.slice.call($30468$30476, 1));
          return ["send", ["send", ["send", ["symbol", "ErrorFactory"], ["data", ["data"].concat(tags$30416)]], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "create"]]]], ["data"].concat(args$30496)];
        } else {
          (other$30501 = $30468$30476);
          return ["macro", errf_macro$18236(tags$30416.concat([other$30501]))];
        }
      }
    }
  });
}));
stdenv$18204.bind(topscope$18208, "E", ["macro", errf_macro$18236([])]);
(temp$30507 = items([]));
($length$30513 = temp$30507.length);
($index$30519 = 0);
$18243: for (; ($index$30519 < $length$30513); ($index$30519++)) {
  var k$30538;
  var v$30539;
  var t0$30533;
  var t1$30534;
  var m$30528;
  (m$30528 = temp$30507[$index$30519]);
  (t0$30533 = m$30528);
  if (((t0$30533 instanceof Array) && (((t1$30534 = t0$30533.length)), (t1$30534 === 2)))) {
    (k$30538 = t0$30533[0]);
    (v$30539 = t0$30533[1]);
    stdenv$18204.bind(topscope$18208, k$30538, ["value", v$30539]);
  } else {
    ___match_error(m$30528, "/home/olivier/git/earl-grey/src/stdenv.eg", 49812, 49877);
  }
}
(expander$18206["utils"] = ({"var_operator": var_operator$18222}));
(exports["topscope"] = topscope$18208);
(exports["stdenv"] = stdenv$18204);
(exports["expander"] = expander$18206);
(exports["expand"] = expand$18207);
//# sourceURL=<compile-source>
