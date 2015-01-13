"use strict";
require("earlgrey-runtime");
var $4084 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var accum$1248;
var accum$1252;
var accum$1676;
var accum$1680;
var accum$3894;
var accum$3898;
var $949$993;
var __lt____lt____colon__$994;
var Source$995;
var util$996;
var classify$997;
var GenSym$998;
var gensym$999;
var $951$1000;
var PatternParser$1001;
var PatternProcessor$1002;
var $952$1003;
var tokenize$1004;
var $953$1005;
var parse$1006;
var Scope$1007;
var Env$1008;
var track_location$1009;
var Expander$1010;
var mac1$1011;
var __chk_ncache$1012;
var __chk_scache$1013;
var checker_db$1014;
($949$993 = require("./location"));
(__lt____lt____colon__$994 = $949$993["<<:"]);
(Source$995 = $949$993.Source);
(util$996 = require("./util"));
(classify$997 = util$996.classify);
(GenSym$998 = util$996.GenSym);
(gensym$999 = util$996.gensym);
($951$1000 = require("./pattern"));
(PatternParser$1001 = $951$1000.PatternParser);
(PatternProcessor$1002 = $951$1000.PatternProcessor);
($952$1003 = require("./lex"));
(tokenize$1004 = $952$1003.tokenize);
($953$1005 = require("./parse"));
(parse$1006 = $953$1005.parse);
(Scope$1007 = (function() {
  var t0$1077;
  var $1068$1072;
  var it$0$1063;
  (it$0$1063 = ((!getChecker(Scope$1007)(this)) ? Object.create(Scope$1007.prototype) : this));
  ($1068$1072 = arguments);
  (t0$1077 = $1068$1072.length);
  if (((t0$1077 >= 0) && (t0$1077 <= 3))) {
    (it$0$1063["parent"] = ((0 >= t0$1077) ? null : $1068$1072[0]));
    (it$0$1063["name"] = ((1 >= t0$1077) ? gensym$999("scope") : $1068$1072[1]));
    (it$0$1063["expander"] = ((2 >= t0$1077) ? it$0$1063.parent.expander : $1068$1072[2]));
    (it$0$1063["options"] = ({}));
  } else {
    ___match_error($1068$1072);
  }
  return it$0$1063;
}));
(Scope$1007.prototype["getopt"] = (function(opt$1098) {
  var otherwise$1135;
  var $1115$1124;
  var $1111$1118;
  var it$0$1102;
  var self$1103;
  (it$0$1102 = this);
  (self$1103 = this);
  ($1111$1118 = null);
  $1111$1118;
  if (Object.prototype.hasOwnProperty.call(it$0$1102.options, opt$1098)) {
    return $4084(it$0$1102.options, opt$1098);
  } else {
    if ((it$0$1102.parent === null)) {
      return undefined;
    } else {
      (otherwise$1135 = $1111$1118);
      return it$0$1102.parent.getopt(opt$1098);
    }
  }
}));
(Scope$1007.prototype["setopt"] = (function(opt$1141, value$1142) {
  var it$0$1146;
  var self$1147;
  (it$0$1146 = this);
  (self$1147 = this);
  (it$0$1146.options[opt$1141] = value$1142);
}));
(Scope$1007.prototype["gensym"] = (function() {
  var it$0$1166;
  var self$1167;
  (it$0$1166 = this);
  (self$1167 = this);
  return it$0$1166.expander.gensym();
}));
(Scope$1007.prototype["step"] = (function(context$1179, expr$1180) {
  var it$0$1184;
  var self$1185;
  (it$0$1184 = this);
  (self$1185 = this);
  return it$0$1184.expander.step(context$1179, it$0$1184, expr$1180);
}));
(Scope$1007.prototype["step_all"] = (function(context$1197, exprs$1198) {
  var it$0$1202;
  var self$1203;
  (it$0$1202 = this);
  (self$1203 = this);
  return it$0$1202.expander.step_all(context$1197, it$0$1202, exprs$1198);
}));
(Scope$1007.prototype["expand"] = (function(context$1215, expr$1216) {
  var it$0$1220;
  var self$1221;
  (it$0$1220 = this);
  (self$1221 = this);
  return it$0$1220.expander.expand(context$1215, it$0$1220, expr$1216);
}));
(Scope$1007.prototype["toString"] = (function() {
  var it$0$1236;
  var self$1237;
  (it$0$1236 = this);
  (self$1237 = this);
  return (("Scope{" + it$0$1236.name) + "}");
}));
__amp____colon__(Scope$1007, __amp____colon__(((accum$1248 = ({})), ((accum$1248["::name"] = "Scope"), accum$1248)), ((accum$1252 = ({})), ((accum$1252["::egclass"] = true), accum$1252))));
Scope$1007;
(Env$1008 = (function() {
  var it$0$1261;
  (it$0$1261 = ((!getChecker(Env$1008)(this)) ? Object.create(Env$1008.prototype) : this));
  (it$0$1261["scopes"] = ({}));
  return it$0$1261;
}));
(Env$1008.prototype["list_bindings"] = (function(origin$1276) {
  var values$1292;
  var scope$1293;
  var it$0$1280;
  var self$1281;
  (it$0$1280 = this);
  (self$1281 = this);
  (values$1292 = ({}));
  (scope$1293 = origin$1276);
  $1300: while (scope$1293) {
    __amp____colon__(values$1292, $4084(it$0$1280.scopes, scope$1293.name));
    (scope$1293 = scope$1293.parent);
  }
  return values$1292;
}));
(Env$1008.prototype["resolve"] = (function(scope$1312, name$1313) {
  var scope_data$1328;
  var it$0$1317;
  var self$1318;
  (it$0$1317 = this);
  (self$1318 = this);
  if ((scope$1312 === null)) {
    return undefined;
  }
  (scope_data$1328 = $4084(it$0$1317.scopes, scope$1312.name));
  if ((scope_data$1328 && Object.prototype.hasOwnProperty.call(scope_data$1328, name$1313))) {
    return $4084(scope_data$1328, name$1313);
  } else {
    return it$0$1317.resolve(scope$1312.parent, name$1313);
  }
}));
(Env$1008.prototype["bind"] = (function(scope$1337, name$1338, value$1339) {
  var it$0$1343;
  var self$1344;
  (it$0$1343 = this);
  (self$1344 = this);
  if ((!$4084(it$0$1343.scopes, scope$1337.name))) {
    (it$0$1343.scopes[scope$1337.name] = ({}));
  }
  ($4084(it$0$1343.scopes, scope$1337.name)[name$1338] = value$1339);
}));
(Env$1008.prototype["mark"] = (function(expr$1366) {
  var x$1433;
  var x$1439;
  var bridge$1385$1425;
  var x$1445;
  var bridge$1384$1418;
  var x$1451;
  var bridge$1383$1411;
  var x$1457;
  var $index$1492;
  var $length$1486;
  var temp$1480;
  var other$1513;
  var type$1464;
  var args$1465;
  var e$1400;
  var bridge$1382$1395;
  var t0$1396;
  var $1379$1390;
  var it$0$1370;
  var self$1371;
  (it$0$1370 = this);
  (self$1371 = this);
  ($1379$1390 = expr$1366);
  if (___hasprop($1379$1390, "env")) {
    (e$1400 = $1379$1390.env);
    return expr$1366;
  } else {
    (bridge$1382$1395 = $1379$1390);
    if (((((bridge$1383$1411 = bridge$1382$1395)), ((((bridge$1384$1418 = bridge$1383$1411)), ((((bridge$1385$1425 = bridge$1384$1418)), ((((x$1433 = bridge$1385$1425)), ((x$1433 instanceof Array) && (x$1433[0] === "symbol"))) || (((x$1439 = bridge$1385$1425)), ((x$1439 instanceof Array) && (x$1439[0] === "value"))))) || (((x$1445 = bridge$1384$1418)), ((x$1445 instanceof Array) && (x$1445[0] === "variable"))))) || (((x$1451 = bridge$1383$1411)), ((x$1451 instanceof Array) && (x$1451[0] === "macro"))))) || (((x$1457 = bridge$1382$1395)), ((x$1457 instanceof Array) && (x$1457[0] === "void"))))) {
      return __amp____colon__(expr$1366, ({"env": it$0$1370}));
    } else {
      if ((($1379$1390 instanceof Array) && (((t0$1396 = $1379$1390.length)), (t0$1396 >= 1)))) {
        (type$1464 = $1379$1390[0]);
        (args$1465 = Array.prototype.slice.call($1379$1390, 1));
        (temp$1480 = args$1465);
        ($length$1486 = temp$1480.length);
        ($index$1492 = 0);
        $1474: for (; ($index$1492 < $length$1486); ($index$1492++)) {
          var arg$1509;
          var m$1501;
          (m$1501 = temp$1480[$index$1492]);
          (arg$1509 = m$1501);
          it$0$1370.mark(arg$1509);
        }
        return __amp____colon__(expr$1366, ({"env": it$0$1370}));
      } else {
        (other$1513 = $1379$1390);
        return __amp____colon__(expr$1366, ({"env": it$0$1370}));
      }
    }
  }
}));
(Env$1008.prototype["fork"] = (function() {
  var $index$1555;
  var $length$1549;
  var temp$1543;
  var e$1533;
  var it$0$1522;
  var self$1523;
  (it$0$1522 = this);
  (self$1523 = this);
  (e$1533 = Env$1008());
  (temp$1543 = items(it$0$1522.scopes));
  ($length$1549 = temp$1543.length);
  ($index$1555 = 0);
  $1534: for (; ($index$1555 < $length$1549); ($index$1555++)) {
    var $index$1610;
    var $length$1604;
    var temp$1598;
    var acc$1592;
    var scope$1574;
    var bindings$1575;
    var t0$1569;
    var t1$1570;
    var m$1564;
    (m$1564 = temp$1543[$index$1555]);
    (t0$1569 = m$1564);
    if (((t0$1569 instanceof Array) && (((t1$1570 = t0$1569.length)), (t1$1570 === 2)))) {
      (scope$1574 = t0$1569[0]);
      (bindings$1575 = t0$1569[1]);
      (acc$1592 = []);
      (temp$1598 = items(bindings$1575));
      ($length$1604 = temp$1598.length);
      ($index$1610 = 0);
      $1587: for (; ($index$1610 < $length$1604); ($index$1610++)) {
        var k$1629;
        var v$1630;
        var t0$1624;
        var t1$1625;
        var m$1619;
        (m$1619 = temp$1598[$index$1610]);
        (t0$1624 = m$1619);
        if (((t0$1624 instanceof Array) && (((t1$1625 = t0$1624.length)), (t1$1625 === 2)))) {
          (k$1629 = t0$1624[0]);
          (v$1630 = t0$1624[1]);
          acc$1592.push((((!$4084(e$1533.scopes, scope$1574)) ? ((e$1533.scopes[scope$1574] = ({}))) : undefined), (($4084(e$1533.scopes, scope$1574)[k$1629] = v$1630))));
        } else {
          ___match_error(m$1619, "/home/olivier/git/earl-grey/src/expand.eg", 2306, 2453);
        }
      }
      acc$1592;
    } else {
      ___match_error(m$1564, "/home/olivier/git/earl-grey/src/expand.eg", 2256, 2453);
    }
  }
  return e$1533;
}));
(Env$1008.prototype["toString"] = (function() {
  var it$0$1664;
  var self$1665;
  (it$0$1664 = this);
  (self$1665 = this);
  return "Env{...}";
}));
__amp____colon__(Env$1008, __amp____colon__(((accum$1676 = ({})), ((accum$1676["::name"] = "Env"), accum$1676)), ((accum$1680 = ({})), ((accum$1680["::egclass"] = true), accum$1680))));
Env$1008;
(track_location$1009 = (function(f$1687) {
  var f2$1691;
  (f2$1691 = (function(context$1696, scope$1697, expr$1698) {
    var rval$1712;
    var other$1758;
    var v$1748;
    var t0$1744;
    var $1702$1739;
    var rval$1705;
    (rval$1705 = (((rval$1712 = false)), ((function() {
      try {
        (rval$1712 = f$1687(context$1696, scope$1697, expr$1698));
      } catch (excv$1723) {
        var e$1729;
        (e$1729 = excv$1723);
        (rval$1712 = (__lt____lt____colon__$994(e$1729, expr$1698), (function() {
          throw e$1729;
        })()));
      }
    })(), rval$1712)));
    ($1702$1739 = rval$1705);
    if ((($1702$1739 instanceof Array) && (((t0$1744 = $1702$1739.length)), ((t0$1744 === 2) && ($1702$1739[0] === "bounce"))))) {
      (v$1748 = $1702$1739[1]);
      return f2$1691(context$1696, scope$1697, __lt____lt____colon__$994(v$1748, expr$1698));
    } else {
      (other$1758 = $1702$1739);
      return __lt____lt____colon__$994(other$1758, expr$1698);
    }
  }));
  return f2$1691;
}));
(Expander$1010 = (function(env_factory$1766, generic_nodes$1767) {
  var it$0$1770;
  (it$0$1770 = ((!getChecker(Expander$1010)(this)) ? Object.create(Expander$1010.prototype) : this));
  (it$0$1770["gensym"] = gensym$999);
  (it$0$1770["mkenv"] = env_factory$1766);
  (it$0$1770["generic_nodes"] = generic_nodes$1767);
  return it$0$1770;
}));
(Expander$1010.prototype["run_macro"] = (function(m$1794, context$1795, scope$1796, form$1797, arg$1798) {
  var rval$1821;
  var rval$1813;
  var it$0$1802;
  var self$1803;
  (it$0$1802 = this);
  (self$1803 = this);
  (rval$1813 = (((rval$1821 = false)), ((function() {
    try {
      (rval$1821 = m$1794(context$1795, scope$1796, form$1797, arg$1798));
    } catch (excv$1832) {
      var msg$1889;
      var msg$2011;
      var find$1900;
      var err$1901;
      var other$1895;
      var $1872$1877;
      var e$1869;
      var e$2019;
      var value$1842;
      var t0$1835;
      var t1$1836;
      var t2$1837;
      var t3$1838;
      (t0$1835 = excv$1832);
      if ((getChecker(ErrorFactory(["match"]))(t0$1835) && (___hasprop(t0$1835, "args") && (((t1$1836 = t0$1835.args)), ((t1$1836 instanceof Array) && (((t2$1837 = t1$1836.length)), ((t2$1837 === 1) && (((t3$1838 = t1$1836[0])), ___hasprop(t3$1838, "value"))))))))) {
        (value$1842 = t3$1838.value);
        (rval$1821 = (((e$1869 = ((($1872$1877 = value$1842)), (($1872$1877 === context$1795) ? (((msg$1889 = "The macro cannot be found in this context.")), ErrorFactory(["syntax", "context"]).create(msg$1889, ({
          "context": context$1795,
          "form": form$1797
        }))) : ((other$1895 = $1872$1877), (((find$1900 = (function($1905$1908) {
          var t0$1917;
          var msg$1939;
          var $index$1973;
          var $length$1967;
          var temp$1961;
          var other$2003;
          var type$1945;
          var xs$1946;
          var t0$1931;
          var $1910$1926;
          var ph$1914;
          var arg$1915;
          (t0$1917 = $1905$1908);
          (arg$1915 = t0$1917);
          (ph$1914 = t0$1917);
          ($1910$1926 = ph$1914);
          if (($1910$1926 === value$1842)) {
            (msg$1939 = "The macro expected something different.");
            return ErrorFactory(["syntax", "argument"]).create(msg$1939, ({
              "context": context$1795,
              "argument": arg$1915,
              "form": form$1797
            }));
          } else {
            if ((($1910$1926 instanceof Array) && (((t0$1931 = $1910$1926.length)), (t0$1931 >= 1)))) {
              (type$1945 = $1910$1926[0]);
              (xs$1946 = Array.prototype.slice.call($1910$1926, 1));
              (temp$1961 = xs$1946);
              ($length$1967 = temp$1961.length);
              ($index$1973 = 0);
              $1955: for (; ($index$1973 < $length$1967); ($index$1973++)) {
                var x$1991;
                var t0$1987;
                var m$1982;
                (m$1982 = temp$1961[$index$1973]);
                (t0$1987 = getProjector(find$1900)(m$1982));
                if (t0$1987[0]) {
                  (x$1991 = t0$1987[1]);
                  if (x$1991) {
                    return x$1991;
                  }
                } else {
                  ___match_error(m$1982, "/home/olivier/git/earl-grey/src/expand.eg", 3712, 3797);
                }
              }
              return false;
            } else {
              (other$2003 = $1910$1926);
              return false;
            }
          }
        }))), ((err$1901 = find$1900(arg$1798))), (err$1901 ? err$1901 : (((msg$2011 = "The macro expected something different (could not locate error in the source).")), ErrorFactory(["syntax", "failure"]).create(msg$2011, ({
          "form": form$1797,
          "value": value$1842
        })))))))))), (function() {
          throw e$1869;
        })()));
      } else {
        (e$2019 = excv$1832);
        (rval$1821 = (function() {
          throw e$2019;
        })());
      }
    }
  })(), rval$1821)));
  return it$0$1802.mkenv().mark(rval$1813);
}));
(Expander$1010.prototype["step"] = (function(context$2030, scope$2031, expr$2032) {
  var helper$2047;
  var it$0$2036;
  var self$2037;
  (it$0$2036 = this);
  (self$2037 = this);
  (helper$2047 = track_location$1009((function(context$2054, scope$2055, $2051$2056) {
    var t0$2071;
    var other$2126;
    var env$2121;
    var $2108$2113;
    var other$2171;
    var t0$2158;
    var $2148$2153;
    var other$2175;
    var m$2140;
    var t0$2136;
    var $2102$2131;
    var env$2105;
    var other$2205;
    var t0$2192;
    var $2182$2187;
    var other$2237;
    var m$2227;
    var t0$2223;
    var $2213$2218;
    var t$2248;
    var p$2249;
    var other$2263;
    var x$2258;
    var code$2241;
    var url$2242;
    var f$2209;
    var arg$2210;
    var m$2179;
    var s$2092;
    var $2065$2087;
    var $2066$2088;
    var $2067$2089;
    var t0$2085;
    var $2058$2080;
    var ph$2068;
    var expr$2069;
    (t0$2071 = $2051$2056);
    (expr$2069 = t0$2071);
    (ph$2068 = t0$2071);
    ($2058$2080 = ph$2068);
    if ((($2065$2087 = ($2058$2080 instanceof Array)) && (((t0$2085 = $2058$2080.length)), (($2067$2089 = (t0$2085 === 2)) && ($2058$2080[0] === "symbol"))))) {
      (s$2092 = $2058$2080[1]);
      (env$2105 = ((($2108$2113 = expr$2069)), (___hasprop($2108$2113, "env") ? ((env$2121 = $2108$2113.env), expr$2069.env) : ((other$2126 = $2108$2113), (function() {
        throw ErrorFactory(["syntax", "no_env"]).create("No environment was found to resolve", ({"symbol": expr$2069}));
      })()))));
      ($2102$2131 = env$2105.resolve(scope$2055, s$2092));
      if ((($2102$2131 instanceof Array) && (((t0$2136 = $2102$2131.length)), ((t0$2136 === 2) && ($2102$2131[0] === "macro"))))) {
        (m$2140 = $2102$2131[1]);
        ($2148$2153 = context$2054);
        if ((($2148$2153 instanceof Array) && (((t0$2158 = $2148$2153.length)), ((t0$2158 === 2) && (($2148$2153[0] === "expr") && ($2148$2153[1] === "head")))))) {
          return ["macro", m$2140];
        } else {
          (other$2171 = $2148$2153);
          return ["bounce", it$0$2036.run_macro(m$2140, context$2054, scope$2055, expr$2069, __lt____lt____colon__$994(["void"], expr$2069))];
        }
      } else {
        (other$2175 = $2102$2131);
        return expr$2069;
      }
    } else {
      if (($2067$2089 && ($2058$2080[0] === "macro"))) {
        (m$2179 = $2058$2080[1]);
        ($2182$2187 = context$2054);
        if ((($2182$2187 instanceof Array) && (((t0$2192 = $2182$2187.length)), ((t0$2192 === 2) && (($2182$2187[0] === "expr") && ($2182$2187[1] === "head")))))) {
          return expr$2069;
        } else {
          (other$2205 = $2182$2187);
          return ["bounce", it$0$2036.run_macro(m$2179, context$2054, scope$2055, expr$2069, __lt____lt____colon__$994(["void"], expr$2069))];
        }
      } else {
        if (($2065$2087 && ((t0$2085 === 3) && ($2058$2080[0] === "send")))) {
          (f$2209 = $2058$2080[1]);
          (arg$2210 = $2058$2080[2]);
          ($2213$2218 = helper$2047(["expr", "head"], scope$2055, f$2209));
          if ((($2213$2218 instanceof Array) && (((t0$2223 = $2213$2218.length)), ((t0$2223 === 2) && ($2213$2218[0] === "macro"))))) {
            (m$2227 = $2213$2218[1]);
            return ["bounce", it$0$2036.run_macro(m$2227, context$2054, scope$2055, expr$2069, arg$2210)];
          } else {
            (other$2237 = $2213$2218);
            return expr$2069;
          }
        } else {
          if (($2065$2087 && (((t0$2085 >= 2) && (t0$2085 <= 3)) && ($2058$2080[0] === "parse")))) {
            (code$2241 = $2058$2080[1]);
            (url$2242 = ((2 >= t0$2085) ? null : $2058$2080[2]));
            (t$2248 = tokenize$1004(Source$995(code$2241, url$2242)));
            (p$2249 = parse$1006(t$2248));
            return ["bounce", helper$2047(context$2054, scope$2055, expr$2069.env.mark(p$2249))];
          } else {
            if (($2065$2087 && ((t0$2085 === 2) && ($2058$2080[0] === "nostep")))) {
              (x$2258 = $2058$2080[1]);
              return x$2258;
            } else {
              (other$2263 = $2058$2080);
              return expr$2069;
            }
          }
        }
      }
    }
  })));
  return helper$2047(context$2030, scope$2031, expr$2032);
}));
(Expander$1010.prototype["step_all"] = (function(context$2272, scope$2273, $2269$2274) {
  var t0$2289;
  var t1$2290;
  var pre$2307;
  var bulk$2308;
  var post$2309;
  var stmts$2287;
  var it$0$2278;
  var self$2279;
  (it$0$2278 = this);
  (self$2279 = this);
  (t0$2289 = $2269$2274);
  if (((t0$2289 instanceof Array) && (((t1$2290 = t0$2289.length)), (t1$2290 >= 0)))) {
    (stmts$2287 = Array.prototype.slice.call(t0$2289, 0));
  } else {
    ___match_error($2269$2274);
  }
  (pre$2307 = []);
  (bulk$2308 = []);
  (post$2309 = []);
  var $__0 = function() {
    var $index$2410;
    var $length$2404;
    var temp$2398;
    var acc$2392;
    var e$2381;
    var x$2433;
    var m$2375;
    var stmt$2370;
    var stmt$2365;
    var prepend$2351;
    var $2330$2346;
    var $2331$2347;
    var $2332$2348;
    var t0$2344;
    var $2324$2339;
    var current$2333;
    (current$2333 = stmts$2287.shift());
    ($2324$2339 = it$0$2278.step(context$2272, scope$2273, current$2333));
    if ((($2330$2346 = ($2324$2339 instanceof Array)) && (((t0$2344 = $2324$2339.length)), ((t0$2344 >= 1) && ($2324$2339[0] === "splice"))))) {
      (prepend$2351 = Array.prototype.slice.call($2324$2339, 1));
      (stmts$2287 = prepend$2351.concat(stmts$2287));
    } else {
      if (($2330$2346 && (($2332$2348 = (t0$2344 === 2)) && ($2324$2339[0] === "float")))) {
        (stmt$2365 = $2324$2339[1]);
        (pre$2307 = pre$2307.concat(it$0$2278.step_all(context$2272, scope$2273, [stmt$2365])));
      } else {
        if (($2332$2348 && ($2324$2339[0] === "sink"))) {
          (stmt$2370 = $2324$2339[1]);
          (post$2309 = post$2309.concat(it$0$2278.step_all(context$2272, scope$2273, [stmt$2370])));
        } else {
          if (($2332$2348 && ($2324$2339[0] === "restmacro"))) {
            (m$2375 = $2324$2339[1]);
            (e$2381 = it$0$2278.mkenv());
            (stmts$2287 = (((acc$2392 = [])), (((temp$2398 = m$2375(stmts$2287))), ((($length$2404 = temp$2398.length)), ((($index$2410 = 0)), (function() {
              $2387: for (; ($index$2410 < $length$2404); ($index$2410++)) {
                var stmt$2427;
                var m$2419;
                (m$2419 = temp$2398[$index$2410]);
                (stmt$2427 = m$2419);
                acc$2392.push(e$2381.mark(stmt$2427));
              }
            })()))), acc$2392));
          } else {
            (x$2433 = $2324$2339);
            bulk$2308.push(x$2433);
          }
        }
      }
    }
  };
  $2319: while (stmts$2287.length) {
    $__0();
  }
  return pre$2307.concat(bulk$2308).concat(post$2309);
}));
(Expander$1010.prototype["expand"] = (function(context$2439, scope$2440, expr$2441) {
  var helper$2456;
  var it$0$2445;
  var self$2446;
  (it$0$2445 = this);
  (self$2446 = this);
  (helper$2456 = track_location$1009((function(context$2461, scope$2462, expr$2463) {
    var t0$2528;
    var other$2550;
    var $2523$2538;
    var env$2526;
    var $index$2603;
    var $length$2597;
    var temp$2591;
    var acc$2585;
    var newargs$2577;
    var $index$2657;
    var $length$2651;
    var temp$2645;
    var acc$2639;
    var newargs$2631;
    var t0$2721;
    var newscope$2715;
    var env$2716;
    var $index$2805;
    var $length$2799;
    var temp$2793;
    var acc$2787;
    var $index$3017;
    var $length$3011;
    var temp$3005;
    var acc$2999;
    var t0$2766;
    var newscope$2750;
    var stepscope$2751;
    var changes$2752;
    var newargs$2753;
    var vars$2754;
    var exp$2755;
    var $index$3440;
    var $length$3434;
    var temp$3428;
    var other$3544;
    var t0$3522;
    var $3511$3517;
    var is_obj$3319;
    var obj$3320;
    var arr$3321;
    var arr_parts$3322;
    var obj_parts$3323;
    var new_arr_part$3324;
    var new_obj_part$3325;
    var r$3326;
    var x$3582;
    var msg$3589;
    var otherwise$3605;
    var m$3595;
    var t0$3575;
    var $3560$3570;
    var t$3564;
    var $index$3650;
    var $length$3644;
    var temp$3638;
    var acc$3632;
    var newscope$3620;
    var s$3729;
    var newscope$3742;
    var name$3720;
    var t0$3716;
    var $index$3786;
    var $length$3780;
    var temp$3774;
    var acc$3768;
    var $index$3842;
    var $length$3836;
    var temp$3830;
    var acc$3824;
    var tokens$3815;
    var msg$3816;
    var other$3888;
    var c$3883;
    var ops$3808;
    var args$3809;
    var type$3757;
    var args$3758;
    var tag$3746;
    var body$3747;
    var x$3711;
    var $2483$3712;
    var bindings$3613;
    var body$3614;
    var generator$3615;
    var target$3554;
    var value$3555;
    var args$3307;
    var args$2741;
    var args$2736;
    var args$2731;
    var variable$2695;
    var s$2696;
    var value$2697;
    var body$2698;
    var args$2626;
    var args$2572;
    var f$2566;
    var arg$2567;
    var s$2513;
    var $2491$2508;
    var $2492$2509;
    var $2493$2510;
    var t0$2504;
    var t1$2505;
    var t2$2506;
    var $2467$2499;
    (expr$2463 = it$0$2445.step(context$2461, scope$2462, expr$2463));
    ($2467$2499 = expr$2463);
    if ((($2491$2508 = ($2467$2499 instanceof Array)) && (((t0$2504 = $2467$2499.length)), (($2493$2510 = (t0$2504 === 2)) && ($2467$2499[0] === "symbol"))))) {
      (s$2513 = $2467$2499[1]);
      (t0$2528 = expr$2463);
      if (___hasprop(t0$2528, "env")) {
        (env$2526 = t0$2528.env);
      } else {
        ___match_error(expr$2463, "/home/olivier/git/earl-grey/src/expand.eg", 8357, 8361);
      }
      ($2523$2538 = env$2526.resolve(scope$2462, s$2513));
      if (($2523$2538 === (void 0))) {
        throw ErrorFactory(["syntax", "undeclared"]).create(("Undeclared variable: " + s$2513), ({"node": expr$2463}));
      } else {
        (other$2550 = $2523$2538);
        return ["bounce", other$2550];
      }
    } else {
      if (($2493$2510 && ($2467$2499[0] === "value"))) {
        $2467$2499[1];
        return expr$2463;
      } else {
        if (($2493$2510 && ($2467$2499[0] === "variable"))) {
          $2467$2499[1];
          return expr$2463;
        } else {
          if (($2491$2508 && ((t0$2504 === 1) && ($2467$2499[0] === "void")))) {
            return expr$2463;
          } else {
            if (($2491$2508 && ((t0$2504 === 3) && ($2467$2499[0] === "send")))) {
              (f$2566 = $2467$2499[1]);
              (arg$2567 = $2467$2499[2]);
              return ["send", helper$2456(["expr", "head"], scope$2462, f$2566), helper$2456(["expr", "tail"], scope$2462, arg$2567)];
            } else {
              if (($2491$2508 && (($2493$2510 = (t0$2504 >= 1)) && ($2467$2499[0] === "array")))) {
                (args$2572 = Array.prototype.slice.call($2467$2499, 1));
                (newargs$2577 = (((acc$2585 = [])), (((temp$2591 = it$0$2445.step_all(["expr", "array"], scope$2462, args$2572))), ((($length$2597 = temp$2591.length)), ((($index$2603 = 0)), (function() {
                  $2580: for (; ($index$2603 < $length$2597); ($index$2603++)) {
                    var arg$2620;
                    var m$2612;
                    (m$2612 = temp$2591[$index$2603]);
                    (arg$2620 = m$2612);
                    acc$2585.push(helper$2456(["expr", "expr"], scope$2462, arg$2620));
                  }
                })()))), acc$2585));
                return ["array"].concat(newargs$2577);
              } else {
                if (($2493$2510 && ($2467$2499[0] === "object"))) {
                  (args$2626 = Array.prototype.slice.call($2467$2499, 1));
                  (newargs$2631 = (((acc$2639 = [])), (((temp$2645 = it$0$2445.step_all(["expr", "object"], scope$2462, args$2626))), ((($length$2651 = temp$2645.length)), ((($index$2657 = 0)), (function() {
                    $2634: for (; ($index$2657 < $length$2651); ($index$2657++)) {
                      var k$2676;
                      var v$2677;
                      var t0$2671;
                      var t1$2672;
                      var m$2666;
                      (m$2666 = temp$2645[$index$2657]);
                      (t0$2671 = m$2666);
                      if (((t0$2671 instanceof Array) && (((t1$2672 = t0$2671.length)), ((t1$2672 === 3) && (t0$2671[0] === "array"))))) {
                        (k$2676 = t0$2671[1]);
                        (v$2677 = t0$2671[2]);
                        acc$2639.push(["array", helper$2456(["expr", "expr"], scope$2462, k$2676), helper$2456(["expr", "expr"], scope$2462, v$2677)]);
                      } else {
                        ___match_error(m$2666, "/home/olivier/git/earl-grey/src/expand.eg", 9200, 9389);
                      }
                    }
                  })()))), acc$2639));
                  return ["object"].concat(newargs$2631);
                } else {
                  if (($2491$2508 && ((t0$2504 === 4) && (($2467$2499[0] === "bind") && (((t1$2505 = $2467$2499[1])), ((variable$2695 = t1$2505), ((t1$2505 instanceof Array) && (((t2$2506 = t1$2505.length)), ((t2$2506 === 2) && (t1$2505[0] === "symbol")))))))))) {
                    (s$2696 = t1$2505[1]);
                    (value$2697 = $2467$2499[2]);
                    (body$2698 = $2467$2499[3]);
                    (newscope$2715 = Scope$1007(scope$2462));
                    (t0$2721 = variable$2695);
                    if (___hasprop(t0$2721, "env")) {
                      (env$2716 = t0$2721.env);
                    } else {
                      ___match_error(variable$2695, "/home/olivier/git/earl-grey/src/expand.eg", 9532, 9540);
                    }
                    env$2716.bind(newscope$2715, s$2696, value$2697);
                    return helper$2456(context$2461, newscope$2715, body$2698);
                  } else {
                    if (($2491$2508 && (($2493$2510 = (t0$2504 >= 1)) && ($2467$2499[0] === "splice")))) {
                      (args$2731 = Array.prototype.slice.call($2467$2499, 1));
                      return ["bounce", __amp____colon__(["multi"].concat(args$2731), ({"override_scope": true}))];
                    } else {
                      if (($2493$2510 && ($2467$2499[0] === "interactive"))) {
                        (args$2736 = Array.prototype.slice.call($2467$2499, 1));
                        return ["bounce", __amp____colon__(["multi"].concat(args$2736), ({
                          "override_scope": true,
                          "all_mutable": true
                        }))];
                      } else {
                        if (($2493$2510 && ($2467$2499[0] === "multi"))) {
                          (args$2741 = Array.prototype.slice.call($2467$2499, 1));
                          (newscope$2750 = (expr$2463.override_scope ? scope$2462 : Scope$1007(scope$2462)));
                          (stepscope$2751 = (expr$2463.nonrecursive ? scope$2462 : newscope$2750));
                          (changes$2752 = false);
                          (t0$2766 = classify$997("newargs", "vars", (((acc$2787 = [])), (((temp$2793 = it$0$2445.step_all(["expr", "multi"], stepscope$2751, args$2741))), ((($length$2799 = temp$2793.length)), ((($index$2805 = 0)), (function() {
                            $2771: for (; ($index$2805 < $length$2799); ($index$2805++)) {
                              var t0$2871;
                              var env$2869;
                              var t0$2905;
                              var v$2916;
                              var env$2903;
                              var t0$2963;
                              var env$2961;
                              var other$2976;
                              var s$2943;
                              var variable$2944;
                              var v$2925;
                              var value$2926;
                              var variable$2884;
                              var s$2885;
                              var value$2886;
                              var variable$2849;
                              var s$2850;
                              var value$2851;
                              var opt$2832;
                              var value$2833;
                              var $2779$2824;
                              var $2780$2825;
                              var $2781$2826;
                              var $2782$2827;
                              var $2783$2828;
                              var $2784$2829;
                              var t0$2819;
                              var t1$2820;
                              var t2$2821;
                              var t3$2822;
                              var m$2814;
                              (m$2814 = temp$2793[$index$2805]);
                              (t0$2819 = m$2814);
                              if ((($2780$2825 = (t0$2819 instanceof Array)) && (((t1$2820 = t0$2819.length)), (($2782$2827 = (t1$2820 === 3)) && (t0$2819[0] === "option"))))) {
                                (opt$2832 = t0$2819[1]);
                                (value$2833 = t0$2819[2]);
                                acc$2787.push((newscope$2750.setopt(opt$2832, value$2833), ["ignore"]));
                              } else {
                                if (($2782$2827 && ((t0$2819[0] === "declare_raw") && (((t2$2821 = t0$2819[1])), ((variable$2849 = t2$2821), ((t2$2821 instanceof Array) && (((t3$2822 = t2$2821.length)), ((t3$2822 === 2) && (t2$2821[0] === "symbol"))))))))) {
                                  (s$2850 = t2$2821[1]);
                                  (value$2851 = t0$2819[2]);
                                  acc$2787.push(((((t0$2871 = variable$2849)), (___hasprop(t0$2871, "env") ? ((env$2869 = t0$2871.env)) : ___match_error(variable$2849, "/home/olivier/git/earl-grey/src/expand.eg", 10486, 10494))), env$2869.bind(newscope$2750, s$2850, value$2851), ((changes$2752 = true)), ["ignore"]));
                                } else {
                                  if (($2780$2825 && (($2782$2827 = ((t1$2820 >= 2) && (t1$2820 <= 3))) && (($2783$2828 = (t0$2819[0] === "declare")) && (((t2$2821 = t0$2819[1])), ((variable$2884 = t2$2821), ((t2$2821 instanceof Array) && (((t3$2822 = t2$2821.length)), ((t3$2822 === 2) && (t2$2821[0] === "symbol")))))))))) {
                                    (s$2885 = t2$2821[1]);
                                    (value$2886 = ((2 >= t1$2820) ? null : t0$2819[2]));
                                    acc$2787.push(((((t0$2905 = variable$2884)), (___hasprop(t0$2905, "env") ? ((env$2903 = t0$2905.env)) : ___match_error(variable$2884, "/home/olivier/git/earl-grey/src/expand.eg", 10734, 10742))), ((variable$2884.use_previous && env$2903.resolve(newscope$2750, s$2885)) ? ["splice"] : (((v$2916 = __lt____lt____colon__$994(["variable", it$0$2445.gensym(s$2885)], variable$2884))), __amp____colon__(v$2916, ({"mutable": (expr$2463.all_mutable || variable$2884.mutable)})), env$2903.bind(newscope$2750, s$2885, v$2916), ((changes$2752 = true)), (value$2886 ? ["splice", ["newargs", ["assign", v$2916, value$2886]], ["vars", v$2916]] : ["vars", v$2916])))));
                                  } else {
                                    if (($2783$2828 && ((v$2925 = t2$2821), ((t2$2821 instanceof Array) && (((t3$2822 = t2$2821.length)), ((t3$2822 === 2) && (t2$2821[0] === "variable"))))))) {
                                      t2$2821[1];
                                      (value$2926 = ((2 >= t1$2820) ? null : t0$2819[2]));
                                      acc$2787.push((((changes$2752 = true)), (value$2926 ? ["splice", ["newargs", ["assign", v$2925, value$2926]], ["vars", v$2925]] : ["vars", v$2925])));
                                    } else {
                                      if (($2780$2825 && ((t1$2820 === 2) && ((t0$2819[0] === "undeclare") && (((t2$2821 = t0$2819[1])), ((t2$2821 instanceof Array) && (((t3$2822 = t2$2821.length)), ((t3$2822 === 2) && (t2$2821[0] === "symbol"))))))))) {
                                        (s$2943 = t2$2821[1]);
                                        (variable$2944 = t2$2821);
                                        acc$2787.push(((((t0$2963 = variable$2944)), (___hasprop(t0$2963, "env") ? ((env$2961 = t0$2963.env)) : ___match_error(variable$2944, "/home/olivier/git/earl-grey/src/expand.eg", 12069, 12077))), env$2961.bind(newscope$2750, s$2943, undefined), ((changes$2752 = true)), ["ignore"]));
                                      } else {
                                        (other$2976 = m$2814);
                                        acc$2787.push(["newargs", other$2976]);
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          })()))), acc$2787)));
                          if ((___hasprop(t0$2766, "newargs") && ((newargs$2753 = t0$2766.newargs), ___hasprop(t0$2766, "vars")))) {
                            (vars$2754 = t0$2766.vars);
                          } else {
                            ___match_error(classify$997("newargs", "vars", (((acc$2999 = [])), (((temp$3005 = it$0$2445.step_all(["expr", "multi"], stepscope$2751, args$2741))), ((($length$3011 = temp$3005.length)), ((($index$3017 = 0)), (function() {
                              $2983: for (; ($index$3017 < $length$3011); ($index$3017++)) {
                                var t0$3083;
                                var env$3081;
                                var t0$3117;
                                var v$3128;
                                var env$3115;
                                var t0$3175;
                                var env$3173;
                                var other$3188;
                                var s$3155;
                                var variable$3156;
                                var v$3137;
                                var value$3138;
                                var variable$3096;
                                var s$3097;
                                var value$3098;
                                var variable$3061;
                                var s$3062;
                                var value$3063;
                                var opt$3044;
                                var value$3045;
                                var $2991$3036;
                                var $2992$3037;
                                var $2993$3038;
                                var $2994$3039;
                                var $2995$3040;
                                var $2996$3041;
                                var t0$3031;
                                var t1$3032;
                                var t2$3033;
                                var t3$3034;
                                var m$3026;
                                (m$3026 = temp$3005[$index$3017]);
                                (t0$3031 = m$3026);
                                if ((($2992$3037 = (t0$3031 instanceof Array)) && (((t1$3032 = t0$3031.length)), (($2994$3039 = (t1$3032 === 3)) && (t0$3031[0] === "option"))))) {
                                  (opt$3044 = t0$3031[1]);
                                  (value$3045 = t0$3031[2]);
                                  acc$2999.push((newscope$2750.setopt(opt$3044, value$3045), ["ignore"]));
                                } else {
                                  if (($2994$3039 && ((t0$3031[0] === "declare_raw") && (((t2$3033 = t0$3031[1])), ((variable$3061 = t2$3033), ((t2$3033 instanceof Array) && (((t3$3034 = t2$3033.length)), ((t3$3034 === 2) && (t2$3033[0] === "symbol"))))))))) {
                                    (s$3062 = t2$3033[1]);
                                    (value$3063 = t0$3031[2]);
                                    acc$2999.push(((((t0$3083 = variable$3061)), (___hasprop(t0$3083, "env") ? ((env$3081 = t0$3083.env)) : ___match_error(variable$3061, "/home/olivier/git/earl-grey/src/expand.eg", 10486, 10494))), env$3081.bind(newscope$2750, s$3062, value$3063), ((changes$2752 = true)), ["ignore"]));
                                  } else {
                                    if (($2992$3037 && (($2994$3039 = ((t1$3032 >= 2) && (t1$3032 <= 3))) && (($2995$3040 = (t0$3031[0] === "declare")) && (((t2$3033 = t0$3031[1])), ((variable$3096 = t2$3033), ((t2$3033 instanceof Array) && (((t3$3034 = t2$3033.length)), ((t3$3034 === 2) && (t2$3033[0] === "symbol")))))))))) {
                                      (s$3097 = t2$3033[1]);
                                      (value$3098 = ((2 >= t1$3032) ? null : t0$3031[2]));
                                      acc$2999.push(((((t0$3117 = variable$3096)), (___hasprop(t0$3117, "env") ? ((env$3115 = t0$3117.env)) : ___match_error(variable$3096, "/home/olivier/git/earl-grey/src/expand.eg", 10734, 10742))), ((variable$3096.use_previous && env$3115.resolve(newscope$2750, s$3097)) ? ["splice"] : (((v$3128 = __lt____lt____colon__$994(["variable", it$0$2445.gensym(s$3097)], variable$3096))), __amp____colon__(v$3128, ({"mutable": (expr$2463.all_mutable || variable$3096.mutable)})), env$3115.bind(newscope$2750, s$3097, v$3128), ((changes$2752 = true)), (value$3098 ? ["splice", ["newargs", ["assign", v$3128, value$3098]], ["vars", v$3128]] : ["vars", v$3128])))));
                                    } else {
                                      if (($2995$3040 && ((v$3137 = t2$3033), ((t2$3033 instanceof Array) && (((t3$3034 = t2$3033.length)), ((t3$3034 === 2) && (t2$3033[0] === "variable"))))))) {
                                        t2$3033[1];
                                        (value$3138 = ((2 >= t1$3032) ? null : t0$3031[2]));
                                        acc$2999.push((((changes$2752 = true)), (value$3138 ? ["splice", ["newargs", ["assign", v$3137, value$3138]], ["vars", v$3137]] : ["vars", v$3137])));
                                      } else {
                                        if (($2992$3037 && ((t1$3032 === 2) && ((t0$3031[0] === "undeclare") && (((t2$3033 = t0$3031[1])), ((t2$3033 instanceof Array) && (((t3$3034 = t2$3033.length)), ((t3$3034 === 2) && (t2$3033[0] === "symbol"))))))))) {
                                          (s$3155 = t2$3033[1]);
                                          (variable$3156 = t2$3033);
                                          acc$2999.push(((((t0$3175 = variable$3156)), (___hasprop(t0$3175, "env") ? ((env$3173 = t0$3175.env)) : ___match_error(variable$3156, "/home/olivier/git/earl-grey/src/expand.eg", 12069, 12077))), env$3173.bind(newscope$2750, s$3155, undefined), ((changes$2752 = true)), ["ignore"]));
                                        } else {
                                          (other$3188 = m$3026);
                                          acc$2999.push(["newargs", other$3188]);
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            })()))), acc$2999)), "/home/olivier/git/earl-grey/src/expand.eg", 10158, 12299);
                          }
                          (exp$2755 = (function(s$3195) {
                            var $index$3228;
                            var $length$3222;
                            var temp$3216;
                            var acc$3210;
                            var $index$3284;
                            var $length$3278;
                            var temp$3272;
                            var acc$3266;
                            var stepped$3199;
                            (stepped$3199 = (((acc$3210 = [])), (((temp$3216 = enumerate(newargs$2753))), ((($length$3222 = temp$3216.length)), ((($index$3228 = 0)), (function() {
                              $3205: for (; ($index$3228 < $length$3222); ($index$3228++)) {
                                var i$3247;
                                var arg$3248;
                                var t0$3242;
                                var t1$3243;
                                var m$3237;
                                (m$3237 = temp$3216[$index$3228]);
                                (t0$3242 = m$3237);
                                if (((t0$3242 instanceof Array) && (((t1$3243 = t0$3242.length)), (t1$3243 === 2)))) {
                                  (i$3247 = t0$3242[0]);
                                  (arg$3248 = t0$3242[1]);
                                  acc$3210.push(it$0$2445.step(["expr", ((i$3247 === (newargs$2753.length - 1)) ? "expr" : "ignore")], s$3195, arg$3248));
                                } else {
                                  ___match_error(m$3237, "/home/olivier/git/earl-grey/src/expand.eg", 12521, 12698);
                                }
                              }
                            })()))), acc$3210));
                            (acc$3266 = []);
                            (temp$3272 = stepped$3199);
                            ($length$3278 = temp$3272.length);
                            ($index$3284 = 0);
                            $3200: for (; ($index$3284 < $length$3278); ($index$3284++)) {
                              var arg$3301;
                              var m$3293;
                              (m$3293 = temp$3272[$index$3284]);
                              (arg$3301 = m$3293);
                              acc$3266.push(helper$2456(["expr", "expr"], s$3195, arg$3301));
                            }
                            return acc$3266;
                          }));
                          if (changes$2752) {
                            return ["scope", vars$2754, ["multi"].concat(exp$2755(newscope$2750))];
                          } else {
                            return ["multi"].concat(exp$2755(scope$2462));
                          }
                        } else {
                          if (($2493$2510 && ($2467$2499[0] === "data"))) {
                            (args$3307 = Array.prototype.slice.call($2467$2499, 1));
                            (is_obj$3319 = false);
                            (obj$3320 = ["object"]);
                            (arr$3321 = ["array"]);
                            (arr_parts$3322 = []);
                            (obj_parts$3323 = []);
                            (new_arr_part$3324 = (function() {
                              var other$3381;
                              var t0$3368;
                              var $3358$3363;
                              ($3358$3363 = arr$3321);
                              if ((($3358$3363 instanceof Array) && (((t0$3368 = $3358$3363.length)), ((t0$3368 === 1) && ($3358$3363[0] === "array"))))) {
                                return false;
                              } else {
                                (other$3381 = $3358$3363);
                                arr_parts$3322.push(arr$3321);
                                (arr$3321 = ["array"]);
                              }
                            }));
                            (new_obj_part$3325 = (function() {
                              var other$3417;
                              var t0$3404;
                              var $3394$3399;
                              ($3394$3399 = obj$3320);
                              if ((($3394$3399 instanceof Array) && (((t0$3404 = $3394$3399.length)), ((t0$3404 === 1) && ($3394$3399[0] === "object"))))) {
                                return false;
                              } else {
                                (other$3417 = $3394$3399);
                                obj_parts$3323.push(obj$3320);
                                (obj$3320 = ["object"]);
                              }
                            }));
                            (temp$3428 = it$0$2445.step_all(["expr", "data"], scope$2462, args$3307));
                            ($length$3434 = temp$3428.length);
                            ($index$3440 = 0);
                            $3327: for (; ($index$3440 < $length$3434); ($index$3440++)) {
                              var other$3507;
                              var expr$3497;
                              var expr$3491;
                              var k$3480;
                              var v$3481;
                              var $3334$3457;
                              var $3335$3458;
                              var $3336$3459;
                              var $3337$3460;
                              var t0$3454;
                              var t1$3455;
                              var m$3449;
                              (m$3449 = temp$3428[$index$3440]);
                              (t0$3454 = m$3449);
                              if ((($3335$3458 = (t0$3454 instanceof Array)) && (((t1$3455 = t0$3454.length)), ((t1$3455 === 1) && (t0$3454[0] === "assoc"))))) {
                                (is_obj$3319 = true);
                              } else {
                                if (($3335$3458 && ((t1$3455 === 3) && (t0$3454[0] === "assoc")))) {
                                  (k$3480 = t0$3454[1]);
                                  (v$3481 = t0$3454[2]);
                                  (is_obj$3319 = true);
                                  obj$3320.push(["array", k$3480, v$3481]);
                                } else {
                                  if (($3335$3458 && (($3337$3460 = (t1$3455 === 2)) && (t0$3454[0] === "dynsplice")))) {
                                    (expr$3491 = t0$3454[1]);
                                    new_arr_part$3324();
                                    arr_parts$3322.push(expr$3491);
                                  } else {
                                    if (($3337$3460 && (t0$3454[0] === "objsplice"))) {
                                      (expr$3497 = t0$3454[1]);
                                      (is_obj$3319 = true);
                                      new_obj_part$3325();
                                      obj_parts$3323.push(expr$3497);
                                    } else {
                                      (other$3507 = m$3449);
                                      arr$3321.push(other$3507);
                                    }
                                  }
                                }
                              }
                            }
                            new_arr_part$3324();
                            new_obj_part$3325();
                            (r$3326 = ((($3511$3517 = arr_parts$3322)), ((($3511$3517 instanceof Array) && (((t0$3522 = $3511$3517.length)), ((t0$3522 === 0) && is_obj$3319))) ? util$996.construct(obj_parts$3323, (function(x$3535, rest$3536) {
                              return ["send", ["symbol", "&:"], ["data", x$3535, rest$3536]];
                            }), ["object"]) : ($3511$3517, (is_obj$3319 ? (function() {
                              throw ErrorFactory(["syntax", "array", "object"]).create("Cannot mix array and object notations.");
                            })() : ((other$3544 = $3511$3517), util$996.construct(arr_parts$3322.reverse(), (function(x$3548, rest$3549) {
                              return ["send", ["send", rest$3549, ["send", ["symbol", "."], ["data", ["void"], ["symbol", "concat"]]]], ["data", x$3548]];
                            }), ["array"])))))));
                            return helper$2456(context$2461, scope$2462, it$0$2445.mkenv().mark(r$3326));
                          } else {
                            if (($2491$2508 && ((t0$2504 === 3) && ($2467$2499[0] === "assign")))) {
                              (target$3554 = $2467$2499[1]);
                              (value$3555 = $2467$2499[2]);
                              (t$3564 = helper$2456(["expr", "expr"], scope$2462, target$3554));
                              ($3560$3570 = t$3564);
                              if (((((x$3582 = $3560$3570)), ((x$3582 instanceof Array) && (x$3582[0] === "variable"))) && (((!t$3564.mutable) && t$3564.assigned) && (t$3564.assigned.group_id !== target$3554.group_id)))) {
                                (msg$3589 = ["Variable was declared as read-only. Declare it as", "mutable at the origin with `var` (if you have access", "to the declaration) or declare a new variable with", "`let` or `var` or remove the original binding with", "`delete`"].join(" "));
                                throw ErrorFactory(["syntax"]).create(msg$3589, ({
                                  "variable": target$3554,
                                  "loc": t$3564.assigned
                                }));
                              } else {
                                if ((($3560$3570 instanceof Array) && (((t0$3575 = $3560$3570.length)), ((t0$3575 === 2) && ($3560$3570[0] === "macro"))))) {
                                  (m$3595 = $3560$3570[1]);
                                  ["bounce", m$3595(["assign"], scope$2462, expr$2463, value$3555)];
                                } else {
                                  (otherwise$3605 = $3560$3570);
                                  (t$3564["assigned"] = target$3554);
                                }
                              }
                              return ["assign", t$3564, helper$2456(["expr", "expr"], scope$2462, value$3555)];
                            } else {
                              if (($2491$2508 && ((t0$2504 === 4) && ($2467$2499[0] === "lambda")))) {
                                (bindings$3613 = $2467$2499[1]);
                                (body$3614 = $2467$2499[2]);
                                (generator$3615 = $2467$2499[3]);
                                (newscope$3620 = Scope$1007(scope$2462));
                                return ["lambda", (((acc$3632 = [])), (((temp$3638 = bindings$3613)), ((($length$3644 = temp$3638.length)), ((($index$3650 = 0)), (function() {
                                  var $__1 = function() {
                                    var v$3687;
                                    var x$3698;
                                    var other$3706;
                                    var v$3694;
                                    var b$3670;
                                    var env$3671;
                                    var $3629$3667;
                                    var t0$3664;
                                    var t1$3665;
                                    var m$3659;
                                    (m$3659 = temp$3638[$index$3650]);
                                    (t0$3664 = m$3659);
                                    if (((t0$3664 instanceof Array) && (((t1$3665 = t0$3664.length)), ((t1$3665 === 2) && ((t0$3664[0] === "symbol") && ((b$3670 = t0$3664[1]), ___hasprop(t0$3664, "env"))))))) {
                                      (env$3671 = t0$3664.env);
                                      acc$3632.push((((v$3687 = ["variable", it$0$2445.gensym(b$3670)])), (env$3671.bind(newscope$3620, b$3670, v$3687), v$3687)));
                                    } else {
                                      if ((((x$3698 = t0$3664)), ((x$3698 instanceof Array) && (x$3698[0] === "variable")))) {
                                        (v$3694 = t0$3664);
                                        acc$3632.push(v$3694);
                                      } else {
                                        (other$3706 = m$3659);
                                        acc$3632.push((function() {
                                          throw ErrorFactory(["syntax", "lambda", "binding"]).create("Not a valid binding.", ({"node": other$3706}));
                                        })());
                                      }
                                    }
                                  };
                                  $3624: for (; ($index$3650 < $length$3644); ($index$3650++)) {
                                    $__1();
                                  }
                                })()))), acc$3632), helper$2456(["expr", "expr"], newscope$3620, body$3614), generator$3615];
                              } else {
                                if (($2491$2508 && (($2493$2510 = (t0$2504 === 3)) && ($2467$2499[0] === "use")))) {
                                  ($2483$3712 = $2467$2499[1]);
                                  (x$3711 = $2467$2499[2]);
                                  (t0$3716 = $2483$3712);
                                  if ((typeof(t0$3716) === "string")) {
                                    (name$3720 = t0$3716);
                                    (s$3729 = scope$2462);
                                    $3733: while (s$3729) {
                                      if ((s$3729.name.slice(0, (name$3720.length + 1)) === (name$3720 + "/"))) {
                                        break $3733;
                                      } else {
                                        (s$3729 = s$3729.parent);
                                      }
                                    }
                                    if (s$3729) {
                                      return helper$2456(context$2461, s$3729, x$3711);
                                    } else {
                                      throw ErrorFactory(["syntax", "noscope"]).create(("Could not find a scope tagged: " + name$3720));
                                    }
                                  } else {
                                    (newscope$3742 = $2483$3712);
                                    return helper$2456(context$2461, newscope$3742, x$3711);
                                  }
                                } else {
                                  if (($2493$2510 && (($2467$2499[0] === "tagscope") && (((t1$2505 = $2467$2499[1])), (typeof(t1$2505) === "string"))))) {
                                    (tag$3746 = t1$2505);
                                    (body$3747 = $2467$2499[2]);
                                    return helper$2456(context$2461, Scope$1007(scope$2462, it$0$2445.gensym((tag$3746 + "/"))), body$3747);
                                  } else {
                                    if (($2491$2508 && ((t0$2504 >= 1) && ((type$3757 = $2467$2499[0]), ((args$3758 = Array.prototype.slice.call($2467$2499, 1)), (it$0$2445.generic_nodes.indexOf(type$3757) !== -1)))))) {
                                      return [type$3757].concat((((acc$3768 = [])), (((temp$3774 = args$3758)), ((($length$3780 = temp$3774.length)), ((($index$3786 = 0)), (function() {
                                        $3763: for (; ($index$3786 < $length$3780); ($index$3786++)) {
                                          var arg$3803;
                                          var m$3795;
                                          (m$3795 = temp$3774[$index$3786]);
                                          (arg$3803 = m$3795);
                                          acc$3768.push(helper$2456(["expr", "expr"], scope$2462, arg$3803));
                                        }
                                      })()))), acc$3768));
                                    } else {
                                      if (($2491$2508 && ((t0$2504 >= 2) && ($2467$2499[0] === "mismix")))) {
                                        (ops$3808 = $2467$2499[1]);
                                        (args$3809 = Array.prototype.slice.call($2467$2499, 2));
                                        (tokens$3815 = object((((acc$3824 = [])), (((temp$3830 = enumerate(ops$3808))), ((($length$3836 = temp$3830.length)), ((($index$3842 = 0)), (function() {
                                          $3819: for (; ($index$3842 < $length$3836); ($index$3842++)) {
                                            var i$3861;
                                            var op$3862;
                                            var t0$3856;
                                            var t1$3857;
                                            var m$3851;
                                            (m$3851 = temp$3830[$index$3842]);
                                            (t0$3856 = m$3851);
                                            if (((t0$3856 instanceof Array) && (((t1$3857 = t0$3856.length)), (t1$3857 === 2)))) {
                                              (i$3861 = t0$3856[0]);
                                              (op$3862 = t0$3856[1]);
                                              acc$3824.push([("token" + String((i$3861 + 1))), op$3862]);
                                            } else {
                                              ___match_error(m$3851, "/home/olivier/git/earl-grey/src/expand.eg", 17743, 17843);
                                            }
                                          }
                                        })()))), acc$3824)));
                                        (msg$3816 = "These operators or brackets cannot be mixed together.");
                                        throw ErrorFactory(["syntax", "mismatch"]).create(msg$3816, tokens$3815);
                                      } else {
                                        if (($2491$2508 && ((t0$2504 === 2) && ($2467$2499[0] === "char")))) {
                                          (c$3883 = $2467$2499[1]);
                                          throw ErrorFactory(["syntax", "illegal_character"]).create(("An illegal character was found: " + c$3883), ({"node": expr$2463}));
                                        } else {
                                          (other$3888 = $2467$2499);
                                          throw ErrorFactory(["syntax", "illegal_node"]).create(("An illegal node was found: " + other$3888), ({
                                            "node": other$3888,
                                            "context": context$2461
                                          }));
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
    }
  })));
  return helper$2456(context$2439, scope$2440, expr$2441);
}));
__amp____colon__(Expander$1010, __amp____colon__(((accum$3894 = ({})), ((accum$3894["::name"] = "Expander"), accum$3894)), ((accum$3898 = ({})), ((accum$3898["::egclass"] = true), accum$3898))));
Expander$1010;
(mac1$1011 = (function(f$3905) {
  return ["macro", (function(context$3911, scope$3912, form$3913, $3908$3914) {
    var t0$3918;
    var t1$3919;
    var expr$3916;
    (t0$3918 = $3908$3914);
    if (((t0$3918 instanceof Array) && (((t1$3919 = t0$3918.length)), ((t1$3919 === 2) && (t0$3918[0] === "data"))))) {
      (expr$3916 = t0$3918[1]);
    } else {
      ___match_error($3908$3914);
    }
    return f$3905(expr$3916);
  })];
}));
(__chk_ncache$1012 = ({}));
(__chk_scache$1013 = ({}));
(checker_db$1014 = (function($3942$3945) {
  var v$3990;
  var v$4009;
  var s$4003;
  var n$3984;
  var $3947$3960;
  var ph$3954;
  (ph$3954 = $3942$3945);
  ($3947$3960 = ph$3954);
  if (($3947$3960 === null)) {
    return checker_db$1014.null;
  } else {
    if (($3947$3960 === (void 0))) {
      return checker_db$1014.undefined;
    } else {
      if (($3947$3960 === true)) {
        return checker_db$1014.true;
      } else {
        if (($3947$3960 === false)) {
          return checker_db$1014.false;
        } else {
          if ((typeof($3947$3960) === "number")) {
            (n$3984 = $3947$3960);
            if ($4084(__chk_ncache$1012, n$3984)) {
              return $4084(__chk_ncache$1012, n$3984);
            } else {
              (v$3990 = mac1$1011((function(x$3995) {
                return ["send", ["symbol", "==="], ["data", x$3995, ["value", n$3984]]];
              })));
              (__chk_ncache$1012[n$3984] = v$3990);
              return v$3990;
            }
          } else {
            if ((typeof($3947$3960) === "string")) {
              (s$4003 = $3947$3960);
              if (Object.prototype.hasOwnProperty.call(__chk_scache$1013, s$4003)) {
                return $4084(__chk_scache$1013, s$4003);
              } else {
                (v$4009 = mac1$1011((function(x$4014) {
                  return ["send", ["symbol", "==="], ["data", x$4014, ["value", s$4003]]];
                })));
                (__chk_scache$1013[s$4003] = v$4009);
                return v$4009;
              }
            } else {
              ___match_error($3947$3960);
            }
          }
        }
      }
    }
  }
}));
__amp____colon__(checker_db$1014, ({
  "String": mac1$1011((function(x$4025) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$4025]], ["value", "string"]]];
  })),
  "Number": mac1$1011((function(x$4029) {
    return ["send", ["symbol", "==="], ["data", ["send", ["symbol", "typeof"], ["data", x$4029]], ["value", "number"]]];
  })),
  "Array": mac1$1011((function(x$4033) {
    return ["send", ["symbol", "instanceof"], ["data", x$4033, ["symbol", "Array"]]];
  })),
  "true": mac1$1011((function(x$4037) {
    return x$4037;
  })),
  "false": mac1$1011((function(x$4041) {
    return ["send", ["symbol", "not"], ["data", ["void"], x$4041]];
  })),
  "null": mac1$1011((function(x$4045) {
    return ["send", ["symbol", "==="], ["data", x$4045, ["value", null]]];
  })),
  "undefined": mac1$1011((function(x$4049) {
    return ["send", ["symbol", "==="], ["data", x$4049, ["value", undefined]]];
  }))
}));
(exports["Env"] = Env$1008);
(exports["Scope"] = Scope$1007);
(exports["track_location"] = track_location$1009);
(exports["Expander"] = Expander$1010);
(exports["GenSym"] = GenSym$998);
(exports["gensym"] = gensym$999);
(exports["mac1"] = mac1$1011);
(exports["checker_db"] = checker_db$1014);
//# sourceURL=<compile-source>
