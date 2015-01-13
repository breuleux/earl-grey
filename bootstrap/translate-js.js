"use strict";
require("earlgrey-runtime");
var $32870 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var accum$32835;
var accum$32839;
var $30575$30594;
var gensym$30595;
var Body$30596;
var $30576$30597;
var __lt____gt__$30598;
var js_op_table2$30599;
var js_op_table$30600;
var Translator$30601;
var translate$30602;
($30575$30594 = require("./util"));
(gensym$30595 = $30575$30594.gensym);
(Body$30596 = $30575$30594.Body);
($30576$30597 = require("./pp"));
(__lt____gt__$30598 = $30576$30597["<>"]);
(js_op_table2$30599 = ({
  "+": "+",
  "-": "-",
  "*": "*",
  "/": "/",
  "mod": "%",
  "&.": "&",
  "|.": "|",
  "^.": "^",
  "~": "~",
  "and": "&&",
  "or": "||",
  "not": "!",
  "==": "===",
  "!=": "!==",
  "===": "===",
  "!==": "!==",
  "<": "<",
  ">": ">",
  "<=": "<=",
  ">=": ">=",
  "<<": "<<",
  ">>": ">>",
  ">>>": ">>>",
  "in": " in ",
  "instanceof": " instanceof ",
  "++": "++",
  "--": "--"
}));
(js_op_table$30600 = ({
  "___plus": "+",
  "___minus": "-",
  "___times": "*",
  "___div": "/",
  "___mod": "%",
  "___binxor": "^",
  "___binand": "&",
  "___binor": "|",
  "___binnot": "~",
  "___and": "&&",
  "___or": "||",
  "___not": "!",
  "___is": "===",
  "___isnt": "!==",
  "___eq": "===",
  "___neq": "!==",
  "___lt": "<",
  "___gt": ">",
  "___lte": "<=",
  "___gte": ">=",
  "___shl": "<<",
  "___shr": ">>",
  "___shr2": ">>>",
  "___in": " in ",
  "___instanceof": " instanceof ",
  "___plusplus": "++",
  "___minusminus": "--"
}));
(Translator$30601 = (function() {
  var $30658$30670;
  var prelude$30648;
  var t0$30644;
  var $30635$30639;
  var it$0$30630;
  (it$0$30630 = ((!getChecker(Translator$30601)(this)) ? Object.create(Translator$30601.prototype) : this));
  ($30635$30639 = arguments);
  (t0$30644 = $30635$30639.length);
  if (((t0$30644 >= 0) && (t0$30644 <= 1))) {
    (prelude$30648 = ((0 >= t0$30644) ? null : $30635$30639[0]));
    (it$0$30630["cache"] = ({}));
    (it$0$30630["prepend"] = []);
    ($30658$30670 = prelude$30648);
    if (($30658$30670 === null)) {
      undefined;
    } else {
      if ((typeof($30658$30670) === "string")) {
        it$0$30630.prepend.push(prelude$30648);
      } else {
        $30658$30670;
        it$0$30630.prepend.push(it$0$30630.translate(___serialize_ast(prelude$30648), "stmt"));
      }
    }
  } else {
    ___match_error($30635$30639);
  }
  return it$0$30630;
}));
(Translator$30601.prototype["register_value"] = (function(v$30694, id$30695) {
  var temp$30726;
  var name$30735;
  var $30708$30713;
  var it$0$30699;
  var self$30700;
  (it$0$30699 = this);
  (self$30700 = this);
  ($30708$30713 = $32870(it$0$30699.cache, id$30695));
  if (($30708$30713 === (void 0))) {
    (temp$30726 = ["symbol", gensym$30595()]);
    (it$0$30699.cache[id$30695] = temp$30726);
    it$0$30699.prepend.push(it$0$30699.translate(["declare", temp$30726, ___serialize_ast(v$30694)], "stmt"));
    return temp$30726;
  } else {
    (name$30735 = $30708$30713);
    return name$30735;
  }
}));
(Translator$30601.prototype["register_raw"] = (function(raw$30741, id$30742) {
  var temp$30773;
  var name$30782;
  var $30755$30760;
  var it$0$30746;
  var self$30747;
  (it$0$30746 = this);
  (self$30747 = this);
  ($30755$30760 = $32870(it$0$30746.cache, id$30742));
  if (($30755$30760 === (void 0))) {
    (temp$30773 = ["symbol", gensym$30595()]);
    (it$0$30746.cache[id$30742] = temp$30773);
    it$0$30746.prepend.push(it$0$30746.translate(["declare", temp$30773, ["raw", raw$30741]], "stmt"));
    return temp$30773;
  } else {
    (name$30782 = $30755$30760);
    return name$30782;
  }
}));
(Translator$30601.prototype["dump_store"] = (function() {
  var rval$30803;
  var it$0$30791;
  var self$30792;
  (it$0$30791 = this);
  (self$30792 = this);
  (rval$30803 = it$0$30791.prepend.join("\n"));
  (it$0$30791["prepend"] = []);
  return rval$30803;
}));
(Translator$30601.prototype["mangle"] = (function(name$30814) {
  var i$30841;
  var tr$30831;
  var r$30832;
  var it$0$30818;
  var self$30819;
  (it$0$30818 = this);
  (self$30819 = this);
  (tr$30831 = ({
    "+": "__plus__",
    "-": "__minus__",
    "*": "__asterisk__",
    "/": "__slash__",
    "%": "__percent__",
    "^": "__caret__",
    "#": "__hash__",
    "&": "__amp__",
    "|": "__pipe__",
    "@": "__at__",
    "!": "__bang__",
    "?": "__qmark__",
    "=": "__equal__",
    "<": "__lt__",
    ">": "__gt__",
    "~": "__tilde__",
    ".": "__dot__",
    ":": "__colon__"
  }));
  (r$30832 = []);
  (i$30841 = 0);
  $30830: for (; (i$30841 < name$30814.length); (++i$30841)) {
    var c$30850;
    (c$30850 = $32870(name$30814, i$30841));
    r$30832.push(($32870(tr$30831, c$30850) || c$30850));
  }
  return r$30832.join("");
}));
(Translator$30601.prototype["body"] = (function(orig$30858, mode$30859) {
  var t0$30883;
  var t1$30884;
  var t2$30885;
  var x$30924;
  var stmts$30935;
  var ret$30936;
  var other$30949;
  var $30875$30912;
  var b$30880;
  var trst$30881;
  var it$0$30863;
  var self$30864;
  (it$0$30863 = this);
  (self$30864 = this);
  (t0$30883 = getProjector(Body$30596)(orig$30858));
  if ((t0$30883[0] && (((t1$30884 = t0$30883[1])), (((t2$30885 = t1$30884.length)), (t2$30885 >= 0))))) {
    (b$30880 = Array.prototype.slice.call(t1$30884, 0));
  } else {
    ___match_error(orig$30858, "/home/olivier/git/earl-grey/src/translate-js.eg", 3167, 3171);
  }
  (trst$30881 = (function(stmt$30907) {
    return it$0$30863.translate(stmt$30907, "stmt");
  }));
  ($30875$30912 = mode$30859);
  if (($30875$30912 === "expr")) {
    (x$30924 = ["send", ["lambda", [], orig$30858], ["array"]]);
    return it$0$30863.translate(x$30924, mode$30859);
  } else {
    if (($30875$30912 === "return")) {
      (stmts$30935 = b$30880.slice(0, -1));
      (ret$30936 = $32870(b$30880, (b$30880.length - 1)));
      return (stmts$30935.map(trst$30881).join("") + it$0$30863.translate(ret$30936, "return"));
    } else {
      if (($30875$30912 === "stmt")) {
        return b$30880.map(trst$30881).join("");
      } else {
        (other$30949 = $30875$30912);
        throw ErrorFactory(["syntax", "mode"]).create("Unknown mode", ({"mode": mode$30859}));
      }
    }
  }
}));
(Translator$30601.prototype["expr"] = (function(x$30955, mode$30956) {
  var other$30996;
  var $30969$30976;
  var it$0$30960;
  var self$30961;
  (it$0$30960 = this);
  (self$30961 = this);
  ($30969$30976 = mode$30956);
  if (($30969$30976 === "expr")) {
    return x$30955;
  } else {
    if (($30969$30976 === "stmt")) {
      return (x$30955 + ";");
    } else {
      if (($30969$30976 === "return")) {
        return (("return " + x$30955) + ";");
      } else {
        (other$30996 = $30969$30976);
        throw "OopsI";
      }
    }
  }
}));
(Translator$30601.prototype["op"] = (function(op$31002, a$31003, b$31004) {
  var $31026$31040;
  var $31027$31041;
  var $31028$31042;
  var t0$31036;
  var t1$31037;
  var t2$31038;
  var $31022$31031;
  var e$31019;
  var it$0$31008;
  var self$31009;
  (it$0$31008 = this);
  (self$31009 = this);
  (e$31019 = ((($31022$31031 = [a$31003, b$31004])), ((($31026$31040 = ($31022$31031 instanceof Array)) && (((t0$31036 = $31022$31031.length)), (($31028$31042 = (t0$31036 === 2)) && (((t1$31037 = $31022$31031[0])), ((t1$31037 instanceof Array) && (((t2$31038 = t1$31037.length)), ((t2$31038 === 1) && (t1$31037[0] === "void")))))))) ? ($31022$31031[1], (op$31002 + it$0$31008.translate(b$31004, "expr"))) : (($31028$31042 && ($31022$31031[0], (((t1$31037 = $31022$31031[1])), ((t1$31037 instanceof Array) && (((t2$31038 = t1$31037.length)), ((t2$31038 === 1) && (t1$31037[0] === "void"))))))) ? (it$0$31008.translate(a$31003, "expr") + op$31002) : ($31022$31031, ((it$0$31008.translate(a$31003, "expr") + op$31002) + it$0$31008.translate(b$31004, "expr")))))));
  return (("(" + e$31019) + ")");
}));
(Translator$30601.prototype["translate"] = (function(expr$31085, mode$31086) {
  var repl$31213;
  var it$0$31252;
  var it$0$31246;
  var it$0$31240;
  var it$0$31234;
  var bridge$31194$31271;
  var bridge$31193$31264;
  var other$31286;
  var id$31280;
  var bridge$31192$31204;
  var $31187$31199;
  var r$31184;
  var t0$31325;
  var t0$31332;
  var trf$31352;
  var trmsg$31353;
  var x$31419;
  var x$31414;
  var $31401$31406;
  var trf$31397;
  var trmsg$31398;
  var trf$31432;
  var trmsg$31433;
  var otherwise$31427;
  var $31379$31384;
  var x$31493;
  var x$31483;
  var $31466$31478;
  var $31467$31479;
  var $31468$31480;
  var t0$31476;
  var $31462$31471;
  var $index$31533;
  var $length$31527;
  var temp$31521;
  var acc$31515;
  var trf$31503;
  var trargs$31504;
  var op$31459;
  var code$31572;
  var code$31586;
  var t0$31564;
  var t1$31565;
  var trf$31593;
  var trmsg$31594;
  var codevar$31562;
  var f$31613;
  var r$31608;
  var f$31688;
  var f$31734;
  var v$31728;
  var all_strings$31630;
  var r$31631;
  var $index$31839;
  var $length$31833;
  var temp$31827;
  var acc$31821;
  var a$31806;
  var b$31807;
  var name$31795;
  var star$31796;
  var a$31899;
  var b$31900;
  var a$31914;
  var b$31915;
  var other$31909;
  var $31881$31886;
  var a$31948;
  var b$31949;
  var c$31950;
  var a$31968;
  var b$31969;
  var c$31970;
  var other$31962;
  var $31929$31934;
  var a$32023;
  var other$32019;
  var bridge$31998$32007;
  var $31996$32002;
  var a$32061;
  var b$32062;
  var other$32056;
  var bridge$32035$32044;
  var $32033$32039;
  var a$32090;
  var b$32091;
  var c$32092;
  var a$32111;
  var b$32112;
  var $index$32222;
  var $length$32216;
  var temp$32210;
  var acc$32204;
  var $index$32268;
  var $length$32262;
  var temp$32256;
  var acc$32250;
  var xs$32196;
  var $32134$32184;
  var $32130$32178;
  var isdecl$32135;
  var $index$32338;
  var $length$32332;
  var temp$32326;
  var acc$32320;
  var decls$32312;
  var f$32371;
  var r$32366;
  var star$32469;
  var x$32492;
  var y$32493;
  var t0$32488;
  var $32478$32483;
  var other$32542;
  var $32525$32530;
  var a$32572;
  var b$32573;
  var other$32567;
  var $32550$32555;
  var a$32612;
  var b$32613;
  var c$32614;
  var d$32615;
  var other$32605;
  var $32588$32593;
  var a$32658;
  var b$32659;
  var c$32660;
  var other$32652;
  var $32635$32640;
  var a$32700;
  var b$32701;
  var c$32702;
  var other$32694;
  var $32677$32682;
  var t0$32746;
  var t0$32754;
  var a$32792;
  var b$32793;
  var other$32787;
  var $32770$32775;
  var other$32821;
  var t0$32808;
  var $32764$32803;
  var r$32767;
  var other$32830;
  var x$32825;
  var attempt$32714;
  var v$32715;
  var body$32716;
  var finally$32717;
  var x$32672;
  var y$32673;
  var body$32674;
  var x$32630;
  var y$32631;
  var body$32632;
  var x$32582;
  var y$32583;
  var z$32584;
  var body$32585;
  var test$32546;
  var body$32547;
  var label$32511;
  var body$32512;
  var value$32506;
  var value$32475;
  var value$32452;
  var all$32453;
  var value$32447;
  var label$32432;
  var label$32417;
  var value$32412;
  var args$32361;
  var vars$32306;
  var body$32307;
  var s$32301;
  var args$32296;
  var args$32125;
  var lhs$32104;
  var rhs$32105;
  var obj$32071;
  var msg$32072;
  var rhs$32073;
  var binding$32029;
  var value$32030;
  var binding$31982;
  var test$31924;
  var pos$31925;
  var neg$31926;
  var test$31865;
  var pos$31866;
  var bindings$31775;
  var body$31776;
  var generator$31777;
  var args$31624;
  var args$31603;
  var f$31556;
  var msg$31557;
  var f$31442;
  var args$31443;
  var f$31362;
  var msg$31363;
  var s$31364;
  var f$31316;
  var msg$31317;
  var f$31291;
  var v$31179;
  var s$31165;
  var $31140$31159;
  var $31141$31160;
  var $31142$31161;
  var $31143$31162;
  var t0$31151;
  var t1$31152;
  var t2$31153;
  var t3$31154;
  var t4$31155;
  var bridge$31105$31156;
  var bridge$31137$31157;
  var $31099$31146;
  var it$0$31090;
  var self$31091;
  (it$0$31090 = this);
  (self$31091 = this);
  ($31099$31146 = expr$31085);
  if ((($31140$31159 = ($31099$31146 instanceof Array)) && (((t0$31151 = $31099$31146.length)), ((t0$31151 === 2) && ($31099$31146[0] === "symbol"))))) {
    (s$31165 = $31099$31146[1]);
    return it$0$31090.expr(it$0$31090.mangle(s$31165), mode$31086);
  } else {
    if (($31140$31159 && ((t0$31151 === 1) && ($31099$31146[0] === "void")))) {
      return it$0$31090.expr("null", mode$31086);
    } else {
      if (($31140$31159 && ((t0$31151 === 2) && ($31099$31146[0] === "value")))) {
        (v$31179 = $31099$31146[1]);
        (r$31184 = ((($31187$31199 = v$31179)), ((typeof($31187$31199) === "string") ? (((repl$31213 = ({
          "\"": "\\\"",
          "\n": "\\n",
          "\\": "\\\\"
        }))), ((v$31179 = v$31179.replace(RegExp("((?:(?:\"|\\\\)|\n))", "g"), (function(m$31221) {
          return $32870(repl$31213, m$31221);
        })))), (("\"" + v$31179) + "\"")) : (($31187$31199 === (void 0)) ? "(void 0)" : (getChecker(RegExp)($31187$31199) ? (((it$0$31234 = String(v$31179))), (((it$0$31240 = it$0$31234.slice(1, -1))), (((it$0$31246 = it$0$31240.replace(RegExp("/", "g"), "\\/"))), (((it$0$31252 = it$0$31246.replace(RegExp("\\n", "g"), "\\n"))), "/".concat(it$0$31252).concat("/"))))) : (((bridge$31192$31204 = $31187$31199)), (((((bridge$31193$31264 = bridge$31192$31204)), ((((bridge$31194$31271 = bridge$31193$31264)), ((typeof(bridge$31194$31271) === "number") || (bridge$31194$31271 === true))) || (bridge$31193$31264 === false))) || (bridge$31192$31204 === null)) ? String(v$31179) : ((___hasprop($31187$31199, "::id") && ((id$31280 = $31187$31199["::id"]), id$31280)) ? it$0$31090.translate(it$0$31090.register_value(v$31179, id$31280), mode$31086) : ((other$31286 = $31187$31199), (function() {
          throw ErrorFactory(["cannot_serialize"]).create("Cannot serialize value", ({"value": v$31179}));
        })())))))))));
        return it$0$31090.expr(r$31184, mode$31086);
      } else {
        if (($31140$31159 && (($31142$31161 = (t0$31151 === 3)) && (($31143$31162 = ($31099$31146[0] === "send")) && (((t1$31152 = $31099$31146[1])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && ((t1$31152[0] === "variable") && ((t1$31152[1] === "___node") && (((t3$31154 = $31099$31146[2])), ((t3$31154 instanceof Array) && (((t4$31155 = t3$31154.length)), ((t4$31155 === 2) && (t3$31154[0] === "value"))))))))))))))) {
          (f$31291 = t3$31154[1]);
          return f$31291;
        } else {
          if (($31143$31162 && (((bridge$31105$31156 = $31099$31146[1])), ((((bridge$31105$31156 instanceof Array) && (((t0$31325 = bridge$31105$31156.length)), ((t0$31325 === 2) && ((bridge$31105$31156[0] === "symbol") && (bridge$31105$31156[1] === "___js_fetch"))))) || ((bridge$31105$31156 instanceof Array) && (((t0$31332 = bridge$31105$31156.length)), ((t0$31332 === 2) && ((bridge$31105$31156[0] === "variable") && (bridge$31105$31156[1] === "___js_fetch")))))) && (((t1$31152 = $31099$31146[2])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 3) && (t1$31152[0] === "array"))))))))) {
            (f$31316 = t1$31152[1]);
            (msg$31317 = t1$31152[2]);
            (trf$31352 = it$0$31090.translate(f$31316, "expr"));
            (trmsg$31353 = it$0$31090.translate(msg$31317, "expr"));
            return it$0$31090.expr((((trf$31352 + "[") + trmsg$31353) + "]"), mode$31086);
          } else {
            if (($31143$31162 && ((f$31362 = $31099$31146[1]), (((t1$31152 = $31099$31146[2])), ((msg$31363 = t1$31152), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && (t1$31152[0] === "value"))))))))) {
              (s$31364 = t1$31152[1]);
              ($31379$31384 = null);
              $31379$31384;
              if (((typeof(s$31364) === "string") && s$31364.match(RegExp("(?:^(?:[a-zA-Z_$]+)$)", "")))) {
                (trf$31397 = ((($31401$31406 = it$0$31090.translate(f$31362, "expr"))), (getChecker(RegExp("^\\d+$", ""))($31401$31406) ? ((x$31414 = $31401$31406), (("(" + x$31414) + ")")) : ((x$31419 = $31401$31406), x$31419))));
                (trmsg$31398 = it$0$31090.translate(["symbol", s$31364], "expr"));
                return it$0$31090.expr(((trf$31397 + ".") + trmsg$31398), mode$31086);
              } else {
                (otherwise$31427 = $31379$31384);
                (trf$31432 = it$0$31090.translate(f$31362, "expr"));
                (trmsg$31433 = it$0$31090.translate(msg$31363, "expr"));
                return it$0$31090.expr((((trf$31432 + "[") + trmsg$31433) + "]"), mode$31086);
              }
            } else {
              if (($31143$31162 && ((f$31442 = $31099$31146[1]), (((t1$31152 = $31099$31146[2])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 >= 1) && (t1$31152[0] === "array")))))))) {
                (args$31443 = Array.prototype.slice.call(t1$31152, 1));
                (op$31459 = ((($31462$31471 = f$31442)), ((($31466$31478 = ($31462$31471 instanceof Array)) && (((t0$31476 = $31462$31471.length)), (($31468$31480 = (t0$31476 === 2)) && ($31462$31471[0] === "symbol")))) ? ((x$31483 = $31462$31471[1]), $32870(js_op_table$30600, x$31483)) : (($31468$31480 && ($31462$31471[0] === "variable")) ? ((x$31493 = $31462$31471[1]), $32870(js_op_table2$30599, x$31493)) : ($31462$31471, null)))));
                if (op$31459) {
                  return it$0$31090.expr(it$0$31090.op(op$31459, args$31443[0], args$31443[1]), mode$31086);
                } else {
                  (trf$31503 = it$0$31090.translate(f$31442, "expr"));
                  (trargs$31504 = (((acc$31515 = [])), (((temp$31521 = args$31443)), ((($length$31527 = temp$31521.length)), ((($index$31533 = 0)), (function() {
                    $31510: for (; ($index$31533 < $length$31527); ($index$31533++)) {
                      var x$31550;
                      var m$31542;
                      (m$31542 = temp$31521[$index$31533]);
                      (x$31550 = m$31542);
                      acc$31515.push(it$0$31090.translate(x$31550, "expr"));
                    }
                  })()))), acc$31515));
                  return it$0$31090.expr((((trf$31503 + "(") + trargs$31504.join(",")) + ")"), mode$31086);
                }
              } else {
                if ($31143$31162) {
                  (f$31556 = $31099$31146[1]);
                  (msg$31557 = $31099$31146[2]);
                  (t0$31564 = (((code$31572 = "(function(o,m){if(typeof(m)==='string'||typeof(m)==='number'){return o[m];}else{return o['::send'](m);}})")), it$0$31090.register_raw(code$31572, "~send")));
                  if (((t0$31564 instanceof Array) && (((t1$31565 = t0$31564.length)), ((t1$31565 === 2) && (t0$31564[0] === "symbol"))))) {
                    (codevar$31562 = t0$31564[1]);
                  } else {
                    ___match_error((((code$31586 = "(function(o,m){if(typeof(m)==='string'||typeof(m)==='number'){return o[m];}else{return o['::send'](m);}})")), it$0$31090.register_raw(code$31586, "~send")), "/home/olivier/git/earl-grey/src/translate-js.eg", 6885, 7095);
                  }
                  (trf$31593 = it$0$31090.translate(f$31556, "expr"));
                  (trmsg$31594 = it$0$31090.translate(msg$31557, "expr"));
                  return it$0$31090.expr((((((codevar$31562 + "(") + trf$31593) + ",") + trmsg$31594) + ")"), mode$31086);
                } else {
                  if (($31140$31159 && (($31142$31161 = (t0$31151 >= 1)) && ($31099$31146[0] === "array")))) {
                    (args$31603 = Array.prototype.slice.call($31099$31146, 1));
                    (r$31608 = (((f$31613 = (function(x$31618) {
                      return it$0$31090.translate(x$31618, "expr");
                    }))), (("[" + args$31603.map(f$31613).join(",")) + "]")));
                    return it$0$31090.expr(r$31608, mode$31086);
                  } else {
                    if (($31142$31161 && ($31099$31146[0] === "object"))) {
                      (args$31624 = Array.prototype.slice.call($31099$31146, 1));
                      (all_strings$31630 = args$31624.every((function($31635$31638) {
                        var t0$31646;
                        var t1$31647;
                        var other$31681;
                        var v$31671;
                        var t0$31667;
                        var $31640$31662;
                        var ph$31643;
                        var y$31644;
                        (t0$31646 = $31635$31638);
                        if (((t0$31646 instanceof Array) && (((t1$31647 = t0$31646.length)), ((t1$31647 === 3) && (t0$31646[0] === "array"))))) {
                          (ph$31643 = t0$31646[1]);
                          (y$31644 = t0$31646[2]);
                        } else {
                          ___match_error($31635$31638);
                        }
                        ($31640$31662 = ph$31643);
                        if ((($31640$31662 instanceof Array) && (((t0$31667 = $31640$31662.length)), ((t0$31667 === 2) && ($31640$31662[0] === "value"))))) {
                          (v$31671 = $31640$31662[1]);
                          return true;
                        } else {
                          (other$31681 = $31640$31662);
                          return false;
                        }
                      })));
                      (r$31631 = (all_strings$31630 ? (((f$31688 = (function($31692$31695) {
                        var t0$31700;
                        var t1$31701;
                        var a$31717;
                        var b$31718;
                        var x$31697;
                        var y$31698;
                        (t0$31700 = $31692$31695);
                        if (((t0$31700 instanceof Array) && (((t1$31701 = t0$31700.length)), ((t1$31701 === 3) && (t0$31700[0] === "array"))))) {
                          (x$31697 = t0$31700[1]);
                          (y$31698 = t0$31700[2]);
                        } else {
                          ___match_error($31692$31695);
                        }
                        (a$31717 = it$0$31090.translate(x$31697, "expr"));
                        (b$31718 = it$0$31090.translate(y$31698, "expr"));
                        return ((a$31717 + ":") + b$31718);
                      }))), (("({" + args$31624.map(f$31688).join(",")) + "})")) : (((v$31728 = gensym$30595())), (((f$31734 = (function($31738$31741) {
                        var t0$31746;
                        var t1$31747;
                        var a$31763;
                        var b$31764;
                        var x$31743;
                        var y$31744;
                        (t0$31746 = $31738$31741);
                        if (((t0$31746 instanceof Array) && (((t1$31747 = t0$31746.length)), ((t1$31747 === 3) && (t0$31746[0] === "array"))))) {
                          (x$31743 = t0$31746[1]);
                          (y$31744 = t0$31746[2]);
                        } else {
                          ___match_error($31738$31741);
                        }
                        (a$31763 = it$0$31090.translate(x$31743, "expr"));
                        (b$31764 = it$0$31090.translate(y$31744, "expr"));
                        return (((((v$31728 + "[") + a$31763) + "]=") + b$31764) + ";");
                      }))), ((((((("(function(){" + "let ") + v$31728) + "={};") + args$31624.map(f$31734).join("")) + ";return ") + v$31728) + ";}())")))));
                      return it$0$31090.expr(r$31631, mode$31086);
                    } else {
                      if (($31140$31159 && (((t0$31151 >= 3) && (t0$31151 <= 4)) && (($31099$31146[0] === "lambda") && ((bindings$31775 = $31099$31146[1]), ((body$31776 = $31099$31146[2]), (((t1$31152 = ((3 >= t0$31151) ? ["value", false] : $31099$31146[3]))), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && (t1$31152[0] === "value"))))))))))) {
                        (generator$31777 = t1$31152[1]);
                        (name$31795 = (getChecker(RegExp("^[$_a-zA-Z]*$", ""))(expr$31085.name) ? (expr$31085.name + " ") : ""));
                        (star$31796 = (generator$31777 ? "*" : ""));
                        (a$31806 = (((acc$31821 = [])), (((temp$31827 = bindings$31775)), ((($length$31833 = temp$31827.length)), ((($index$31839 = 0)), (function() {
                          $31816: for (; ($index$31839 < $length$31833); ($index$31839++)) {
                            var x$31856;
                            var m$31848;
                            (m$31848 = temp$31827[$index$31839]);
                            (x$31856 = m$31848);
                            acc$31821.push(it$0$31090.translate(x$31856, "expr"));
                          }
                        })()))), acc$31821).join(","));
                        (b$31807 = it$0$31090.body(body$31776, "return"));
                        return it$0$31090.expr(((((((("(function" + name$31795) + star$31796) + "(") + a$31806) + "){") + b$31807) + "})"), mode$31086);
                      } else {
                        if (($31140$31159 && (($31142$31161 = (t0$31151 === 4)) && (($31143$31162 = ($31099$31146[0] === "if")) && ((test$31865 = $31099$31146[1]), ((pos$31866 = $31099$31146[2]), (((t1$31152 = $31099$31146[3])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && ((t1$31152[0] === "value") && (t1$31152[1] === (void 0))))))))))))) {
                          ($31881$31886 = mode$31086);
                          if (($31881$31886 === "expr")) {
                            (a$31899 = it$0$31090.translate(test$31865, "expr"));
                            (b$31900 = it$0$31090.translate(pos$31866, "expr"));
                            return it$0$31090.expr((((("(" + a$31899) + "?") + b$31900) + ":undefined)"), "expr");
                          } else {
                            (other$31909 = $31881$31886);
                            (a$31914 = it$0$31090.translate(test$31865, "expr"));
                            (b$31915 = it$0$31090.translate(pos$31866, mode$31086));
                            return (((("if(" + a$31914) + "){") + b$31915) + "}");
                          }
                        } else {
                          if ($31143$31162) {
                            (test$31924 = $31099$31146[1]);
                            (pos$31925 = $31099$31146[2]);
                            (neg$31926 = $31099$31146[3]);
                            ($31929$31934 = mode$31086);
                            if (($31929$31934 === "expr")) {
                              (a$31948 = it$0$31090.translate(test$31924, "expr"));
                              (b$31949 = it$0$31090.translate(pos$31925, "expr"));
                              (c$31950 = it$0$31090.translate(neg$31926, "expr"));
                              return it$0$31090.expr((((((("(" + a$31948) + "?") + b$31949) + ":") + c$31950) + ")"), "expr");
                            } else {
                              (other$31962 = $31929$31934);
                              (a$31968 = it$0$31090.translate(test$31924, "expr"));
                              (b$31969 = it$0$31090.translate(pos$31925, mode$31086));
                              (c$31970 = it$0$31090.translate(neg$31926, mode$31086));
                              return (((((("if(" + a$31968) + "){") + b$31969) + "}else{") + c$31970) + "}");
                            }
                          } else {
                            if (($31140$31159 && (($31142$31161 = (t0$31151 === 3)) && (($31143$31162 = ($31099$31146[0] === "declare")) && ((binding$31982 = $31099$31146[1]), (((t1$31152 = $31099$31146[2])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && ((t1$31152[0] === "value") && (t1$31152[1] === (void 0)))))))))))) {
                              ($31996$32002 = mode$31086);
                              (bridge$31998$32007 = $31996$32002);
                              if (((bridge$31998$32007 === "expr") || (bridge$31998$32007 === "return"))) {
                                throw "Invalid in expr ctx";
                              } else {
                                (other$32019 = $31996$32002);
                                (a$32023 = it$0$31090.translate(binding$31982, "expr"));
                                return (("let " + a$32023) + ";");
                              }
                            } else {
                              if ($31143$31162) {
                                (binding$32029 = $31099$31146[1]);
                                (value$32030 = $31099$31146[2]);
                                ($32033$32039 = mode$31086);
                                (bridge$32035$32044 = $32033$32039);
                                if (((bridge$32035$32044 === "expr") || (bridge$32035$32044 === "return"))) {
                                  throw "Invalid in expr ctx";
                                } else {
                                  (other$32056 = $32033$32039);
                                  (a$32061 = it$0$31090.translate(binding$32029, "expr"));
                                  (b$32062 = it$0$31090.translate(value$32030, "expr"));
                                  return (((("let " + a$32061) + "=") + b$32062) + ";");
                                }
                              } else {
                                if (($31142$31161 && (($31143$31162 = ($31099$31146[0] === "assign")) && (((t1$31152 = $31099$31146[1])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 3) && (t1$31152[0] === "send")))))))) {
                                  (obj$32071 = t1$31152[1]);
                                  (msg$32072 = t1$31152[2]);
                                  (rhs$32073 = $31099$31146[2]);
                                  (a$32090 = it$0$31090.translate(obj$32071, "expr"));
                                  (b$32091 = it$0$31090.translate(msg$32072, "expr"));
                                  (c$32092 = it$0$31090.translate(rhs$32073, "expr"));
                                  return it$0$31090.expr((((((("(" + a$32090) + "[") + b$32091) + "]=") + c$32092) + ")"), mode$31086);
                                } else {
                                  if ($31143$31162) {
                                    (lhs$32104 = $31099$31146[1]);
                                    (rhs$32105 = $31099$31146[2]);
                                    (a$32111 = it$0$31090.translate(lhs$32104, "expr"));
                                    (b$32112 = it$0$31090.translate(rhs$32105, "expr"));
                                    return it$0$31090.expr((((("(" + a$32111) + "=") + b$32112) + ")"), mode$31086);
                                  } else {
                                    if (($31140$31159 && ((t0$31151 === 1) && ($31099$31146[0] === "multi")))) {
                                      return "";
                                    } else {
                                      if (($31140$31159 && (($31142$31161 = (t0$31151 >= 1)) && ($31099$31146[0] === "multi")))) {
                                        (args$32125 = Array.prototype.slice.call($31099$31146, 1));
                                        (isdecl$32135 = (function($32139$32142) {
                                          var other$32173;
                                          var variable$32162;
                                          var value$32163;
                                          var t0$32158;
                                          var $32144$32153;
                                          var ph$32147;
                                          (ph$32147 = $32139$32142);
                                          ($32144$32153 = ph$32147);
                                          if ((($32144$32153 instanceof Array) && (((t0$32158 = $32144$32153.length)), ((t0$32158 === 3) && ($32144$32153[0] === "declare"))))) {
                                            (variable$32162 = $32144$32153[1]);
                                            (value$32163 = $32144$32153[2]);
                                            return true;
                                          } else {
                                            (other$32173 = $32144$32153);
                                            return false;
                                          }
                                        }));
                                        ($32130$32178 = null);
                                        $32130$32178;
                                        if ((args$32125.length === 1)) {
                                          return it$0$31090.translate(args$32125[0], mode$31086);
                                        } else {
                                          if (((mode$31086 === "expr") && (!args$32125.some(isdecl$32135)))) {
                                            (xs$32196 = (((acc$32204 = [])), (((temp$32210 = args$32125)), ((($length$32216 = temp$32210.length)), ((($index$32222 = 0)), (function() {
                                              $32199: for (; ($index$32222 < $length$32216); ($index$32222++)) {
                                                var x$32239;
                                                var m$32231;
                                                (m$32231 = temp$32210[$index$32222]);
                                                (x$32239 = m$32231);
                                                acc$32204.push(it$0$31090.translate(x$32239, "expr"));
                                              }
                                            })()))), acc$32204));
                                            (xs$32196 = (((acc$32250 = [])), (((temp$32256 = xs$32196)), ((($length$32262 = temp$32256.length)), ((($index$32268 = 0)), (function() {
                                              $32245: for (; ($index$32268 < $length$32262); ($index$32268++)) {
                                                var x$32285;
                                                var m$32277;
                                                (m$32277 = temp$32256[$index$32268]);
                                                (x$32285 = m$32277);
                                                if ((x$32285 !== "")) {
                                                  acc$32250.push(x$32285);
                                                } else {
                                                  false;
                                                }
                                              }
                                            })()))), acc$32250));
                                            return (("(" + xs$32196.join(",")) + ")");
                                          } else {
                                            return it$0$31090.body(expr$31085, mode$31086);
                                          }
                                        }
                                      } else {
                                        if (($31142$31161 && ($31099$31146[0] === "splice"))) {
                                          (args$32296 = Array.prototype.slice.call($31099$31146, 1));
                                          return it$0$31090.translate(["multi"].concat(args$32296), mode$31086);
                                        } else {
                                          if (($31140$31159 && ((t0$31151 === 2) && ($31099$31146[0] === "variable")))) {
                                            (s$32301 = $31099$31146[1]);
                                            return it$0$31090.expr(it$0$31090.mangle(s$32301), mode$31086);
                                          } else {
                                            if (($31140$31159 && ((t0$31151 === 3) && ($31099$31146[0] === "scope")))) {
                                              (vars$32306 = $31099$31146[1]);
                                              (body$32307 = $31099$31146[2]);
                                              (decls$32312 = (((acc$32320 = [])), (((temp$32326 = vars$32306)), ((($length$32332 = temp$32326.length)), ((($index$32338 = 0)), (function() {
                                                $32315: for (; ($index$32338 < $length$32332); ($index$32338++)) {
                                                  var v$32355;
                                                  var m$32347;
                                                  (m$32347 = temp$32326[$index$32338]);
                                                  (v$32355 = m$32347);
                                                  acc$32320.push(["declare", v$32355, ["value", undefined]]);
                                                }
                                              })()))), acc$32320));
                                              return it$0$31090.translate(["multi"].concat(decls$32312).concat([body$32307]), mode$31086);
                                            } else {
                                              if (($31140$31159 && ((t0$31151 >= 1) && ($31099$31146[0] === "object2")))) {
                                                (args$32361 = Array.prototype.slice.call($31099$31146, 1));
                                                (r$32366 = (((f$32371 = (function($32375$32378) {
                                                  var t0$32383;
                                                  var t1$32384;
                                                  var a$32400;
                                                  var b$32401;
                                                  var x$32380;
                                                  var y$32381;
                                                  (t0$32383 = $32375$32378);
                                                  if (((t0$32383 instanceof Array) && (((t1$32384 = t0$32383.length)), (t1$32384 === 2)))) {
                                                    (x$32380 = t0$32383[0]);
                                                    (y$32381 = t0$32383[1]);
                                                  } else {
                                                    ___match_error($32375$32378);
                                                  }
                                                  (a$32400 = it$0$31090.translate(x$32380, "expr"));
                                                  (b$32401 = it$0$31090.translate(y$32381, "expr"));
                                                  return ((a$32400 + ":") + b$32401);
                                                }))), (("({" + args$32361.map(f$32371).join(",")) + "})")));
                                                return it$0$31090.expr(r$32366, mode$31086);
                                              } else {
                                                if (($31140$31159 && ((t0$31151 === 2) && ($31099$31146[0] === "js_new")))) {
                                                  (value$32412 = $31099$31146[1]);
                                                  return it$0$31090.expr((("(new " + it$0$31090.translate(value$32412, "expr")) + ")"), mode$31086);
                                                } else {
                                                  if (($31140$31159 && (($31142$31161 = ((t0$31151 >= 1) && (t0$31151 <= 2))) && (($31099$31146[0] === "js_break") && (((t1$31152 = ((1 >= t0$31151) ? ["value", null] : $31099$31146[1]))), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && (t1$31152[0] === "value"))))))))) {
                                                    (label$32417 = t1$31152[1]);
                                                    if ((mode$31086 === "expr")) {
                                                      throw "Invalid break in ctx";
                                                    } else {
                                                      return (("break" + (label$32417 ? (" " + label$32417) : "")) + ";");
                                                    }
                                                  } else {
                                                    if (($31142$31161 && (($31099$31146[0] === "js_continue") && (((t1$31152 = ((1 >= t0$31151) ? ["value", null] : $31099$31146[1]))), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && (t1$31152[0] === "value")))))))) {
                                                      (label$32432 = t1$31152[1]);
                                                      if ((mode$31086 === "expr")) {
                                                        throw "Invalid continue in ctx";
                                                      } else {
                                                        return (("continue" + (label$32432 ? (" " + label$32432) : "")) + ";");
                                                      }
                                                    } else {
                                                      if (($31140$31159 && ((t0$31151 === 2) && ($31099$31146[0] === "js_return")))) {
                                                        (value$32447 = $31099$31146[1]);
                                                        if ((mode$31086 === "expr")) {
                                                          throw "Invalid return in ctx";
                                                        } else {
                                                          return (("return " + it$0$31090.translate(value$32447, "expr")) + ";");
                                                        }
                                                      } else {
                                                        if (($31140$31159 && ((t0$31151 === 3) && (($31099$31146[0] === "js_yield") && ((value$32452 = $31099$31146[1]), (((t1$31152 = $31099$31146[2])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && (t1$31152[0] === "value")))))))))) {
                                                          (all$32453 = t1$31152[1]);
                                                          (star$32469 = (all$32453 ? "*" : ""));
                                                          return it$0$31090.expr((((("(yield" + star$32469) + " ") + it$0$31090.translate(value$32452, "expr")) + ")"), mode$31086);
                                                        } else {
                                                          if (($31140$31159 && (($31142$31161 = (t0$31151 === 2)) && ($31099$31146[0] === "js_delete")))) {
                                                            (value$32475 = $31099$31146[1]);
                                                            if ((mode$31086 === "expr")) {
                                                              throw "Invalid delete in ctx";
                                                            } else {
                                                              ($32478$32483 = value$32475);
                                                              if ((($32478$32483 instanceof Array) && (((t0$32488 = $32478$32483.length)), ((t0$32488 === 3) && ($32478$32483[0] === "send"))))) {
                                                                (x$32492 = $32478$32483[1]);
                                                                (y$32493 = $32478$32483[2]);
                                                                return (((("delete " + it$0$31090.translate(x$32492, "expr")) + "[") + it$0$31090.translate(y$32493, "expr")) + "];");
                                                              } else {
                                                                $32478$32483;
                                                                throw ErrorFactory(["translate", "delete"]).create("Invalid argument for delete");
                                                              }
                                                            }
                                                          } else {
                                                            if (($31142$31161 && ($31099$31146[0] === "js_throw"))) {
                                                              (value$32506 = $31099$31146[1]);
                                                              if ((mode$31086 === "expr")) {
                                                                return (("(function(){throw " + it$0$31090.translate(value$32506, "expr")) + ";})()");
                                                              } else {
                                                                return (("throw " + it$0$31090.translate(value$32506, "expr")) + ";");
                                                              }
                                                            } else {
                                                              if (($31140$31159 && (($31142$31161 = (t0$31151 === 3)) && (($31099$31146[0] === "js_label") && (((t1$31152 = $31099$31146[1])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 2) && (t1$31152[0] === "value"))))))))) {
                                                                (label$32511 = t1$31152[1]);
                                                                (body$32512 = $31099$31146[2]);
                                                                ($32525$32530 = mode$31086);
                                                                if (($32525$32530 === "expr")) {
                                                                  return it$0$31090.body(expr$31085, "expr");
                                                                } else {
                                                                  (other$32542 = $32525$32530);
                                                                  return ((label$32511 + ":") + it$0$31090.translate(body$32512, other$32542));
                                                                }
                                                              } else {
                                                                if (($31142$31161 && ($31099$31146[0] === "js_while"))) {
                                                                  (test$32546 = $31099$31146[1]);
                                                                  (body$32547 = $31099$31146[2]);
                                                                  ($32550$32555 = mode$31086);
                                                                  if (($32550$32555 === "expr")) {
                                                                    return it$0$31090.body(expr$31085, "expr");
                                                                  } else {
                                                                    (other$32567 = $32550$32555);
                                                                    (a$32572 = it$0$31090.translate(test$32546, "expr"));
                                                                    (b$32573 = it$0$31090.translate(body$32547, "stmt"));
                                                                    return (((("while(" + a$32572) + "){") + b$32573) + "}");
                                                                  }
                                                                } else {
                                                                  if (($31140$31159 && ((t0$31151 === 5) && ($31099$31146[0] === "js_for")))) {
                                                                    (x$32582 = $31099$31146[1]);
                                                                    (y$32583 = $31099$31146[2]);
                                                                    (z$32584 = $31099$31146[3]);
                                                                    (body$32585 = $31099$31146[4]);
                                                                    ($32588$32593 = mode$31086);
                                                                    if (($32588$32593 === "expr")) {
                                                                      return it$0$31090.body(expr$31085, "expr");
                                                                    } else {
                                                                      (other$32605 = $32588$32593);
                                                                      (a$32612 = it$0$31090.translate(x$32582, "expr"));
                                                                      (b$32613 = it$0$31090.translate(y$32583, "expr"));
                                                                      (c$32614 = it$0$31090.translate(z$32584, "expr"));
                                                                      (d$32615 = it$0$31090.translate(body$32585, "stmt"));
                                                                      return (((((((("for(" + a$32612) + ";") + b$32613) + ";") + c$32614) + "){") + d$32615) + "}");
                                                                    }
                                                                  } else {
                                                                    if (($31140$31159 && (($31142$31161 = (t0$31151 === 4)) && ($31099$31146[0] === "js_for_in")))) {
                                                                      (x$32630 = $31099$31146[1]);
                                                                      (y$32631 = $31099$31146[2]);
                                                                      (body$32632 = $31099$31146[3]);
                                                                      ($32635$32640 = mode$31086);
                                                                      if (($32635$32640 === "expr")) {
                                                                        return it$0$31090.body(expr$31085, "expr");
                                                                      } else {
                                                                        (other$32652 = $32635$32640);
                                                                        (a$32658 = it$0$31090.translate(x$32630, "expr"));
                                                                        (b$32659 = it$0$31090.translate(y$32631, "expr"));
                                                                        (c$32660 = it$0$31090.translate(body$32632, "stmt"));
                                                                        return (((((("for(" + a$32658) + " in ") + b$32659) + "){") + c$32660) + "}");
                                                                      }
                                                                    } else {
                                                                      if (($31142$31161 && ($31099$31146[0] === "js_for_of"))) {
                                                                        (x$32672 = $31099$31146[1]);
                                                                        (y$32673 = $31099$31146[2]);
                                                                        (body$32674 = $31099$31146[3]);
                                                                        ($32677$32682 = mode$31086);
                                                                        if (($32677$32682 === "expr")) {
                                                                          return it$0$31090.body(expr$31085, "expr");
                                                                        } else {
                                                                          (other$32694 = $32677$32682);
                                                                          (a$32700 = it$0$31090.translate(x$32672, "expr"));
                                                                          (b$32701 = it$0$31090.translate(y$32673, "expr"));
                                                                          (c$32702 = it$0$31090.translate(body$32674, "stmt"));
                                                                          return (((((("for(" + a$32700) + " of ") + b$32701) + "){") + c$32702) + "}");
                                                                        }
                                                                      } else {
                                                                        if (($31142$31161 && (($31099$31146[0] === "js_try") && ((attempt$32714 = $31099$31146[1]), (((t1$31152 = $31099$31146[2])), ((t1$31152 instanceof Array) && (((t2$31153 = t1$31152.length)), ((t2$31153 === 4) && ((t1$31152[0] === "lambda") && (((t3$31154 = t1$31152[1])), ((t3$31154 instanceof Array) && (((t4$31155 = t3$31154.length)), ((t4$31155 === 1) && (((bridge$31137$31157 = t3$31154[0])), (((bridge$31137$31157 instanceof Array) && (((t0$32746 = bridge$31137$31157.length)), ((t0$32746 === 2) && ((bridge$31137$31157[0] === "symbol") && ((v$32715 = bridge$31137$31157[1]), true))))) || ((bridge$31137$31157 instanceof Array) && (((t0$32754 = bridge$31137$31157.length)), ((t0$32754 === 2) && ((bridge$31137$31157[0] === "variable") && ((v$32715 = bridge$31137$31157[1]), true)))))))))))))))))))) {
                                                                          (body$32716 = t1$31152[2]);
                                                                          t1$31152[3];
                                                                          (finally$32717 = $31099$31146[3]);
                                                                          (r$32767 = ((($32770$32775 = mode$31086)), (($32770$32775 === "expr") ? it$0$31090.body(expr$31085, "expr") : ((other$32787 = $32770$32775), (((a$32792 = it$0$31090.translate(attempt$32714, "stmt"))), ((b$32793 = it$0$31090.translate(body$32716, "stmt"))), (((((("try{" + a$32792) + "}catch(") + v$32715) + "){") + b$32793) + "}"))))));
                                                                          ($32764$32803 = finally$32717);
                                                                          if ((($32764$32803 instanceof Array) && (((t0$32808 = $32764$32803.length)), ((t0$32808 === 1) && ($32764$32803[0] === "void"))))) {
                                                                            return r$32767;
                                                                          } else {
                                                                            (other$32821 = $32764$32803);
                                                                            return (((r$32767 + "finally{") + it$0$31090.translate(other$32821, "stmt")) + "}");
                                                                          }
                                                                        } else {
                                                                          if (($31140$31159 && ((t0$31151 === 2) && ($31099$31146[0] === "raw")))) {
                                                                            (x$32825 = $31099$31146[1]);
                                                                            return x$32825;
                                                                          } else {
                                                                            (other$32830 = $31099$31146);
                                                                            throw other$32830;
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
}));
__amp____colon__(Translator$30601, __amp____colon__(((accum$32835 = ({})), ((accum$32835["::name"] = "Translator"), accum$32835)), ((accum$32839 = ({})), ((accum$32839["::egclass"] = true), accum$32839))));
Translator$30601;
(translate$30602 = (function(expr$32846, mode$32847) {
  var tr$32852;
  var t$32853;
  (tr$32852 = Translator$30601());
  (t$32853 = tr$32852.translate(expr$32846, mode$32847));
  return (tr$32852.dump_store() + t$32853);
}));
(exports["Translator"] = Translator$30601);
(exports["translate"] = translate$30602);
//# sourceURL=<compile-source>
