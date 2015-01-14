"use strict";
require("earlgrey-runtime");
var $targ$231;
var accum$0;
var $targ$232;
var accum$1;
var $targ$235;
var $targ$236;
var $0$0;
var gensym$0;
var Body$0;
var $1$0;
var __lt____gt__$0;
var js_op_table2$0;
var js_op_table$0;
var Translator$0;
var $targ$7;
var $targ$8;
var $targ$9;
var $targ$10;
var $targ$11;
var $targ$12;
var $targ$13;
var $targ$14;
var translate$0;
$0$0 = require("./util");
gensym$0 = $0$0.gensym;
Body$0 = $0$0.Body;
$1$0 = require("./pp");
__lt____gt__$0 = $1$0["<>"];
js_op_table2$0 = ({
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
});
js_op_table$0 = ({
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
});
Translator$0 = (function() {
  var m$1$0;
  var $targ$20;
  var $targ$21;
  var t0$0;
  var prelude$0;
  var m$0$0;
  var $it$0;
  $it$0 = ((!getChecker(Translator$0)(this)) ? Object.create(Translator$0.prototype) : this);
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (((t0$0 >= 0) && (t0$0 <= 1))) {
    prelude$0 = ((0 >= t0$0) ? null : m$0$0[0]);
    $targ$20 = ({});
    ($it$0["cache"] = $targ$20);
    $targ$21 = [];
    ($it$0["prepend"] = $targ$21);
    m$1$0 = prelude$0;
    if ((m$1$0 === null)) {
      undefined;
    } else {
      if ((typeof(m$1$0) === "string")) {
        $it$0.prepend.push(prelude$0);
      } else {
        m$1$0;
        $it$0.prepend.push($it$0.translate(___serialize_ast(prelude$0), "stmt"));
      }
    }
  } else {
    ___match_error(m$0$0);
  }
  return $it$0;
});
$targ$7 = (function(v$0, id$0) {
  var temp$0;
  var $targ$27;
  var name$0;
  var m$2$0;
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  m$2$0 = send($it$1.cache, id$0);
  if ((m$2$0 === (void 0))) {
    temp$0 = ["symbol", gensym$0()];
    $targ$27 = temp$0;
    ($it$1.cache[id$0] = $targ$27);
    $it$1.prepend.push($it$1.translate(["declare", temp$0, ___serialize_ast(v$0)], "stmt"));
    return temp$0;
  } else {
    name$0 = m$2$0;
    return name$0;
  }
});
(Translator$0.prototype["register_value"] = $targ$7);
$targ$8 = (function(raw$0, id$1) {
  var temp$1;
  var $targ$32;
  var name$1;
  var m$3$0;
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  m$3$0 = send($it$2.cache, id$1);
  if ((m$3$0 === (void 0))) {
    temp$1 = ["symbol", gensym$0()];
    $targ$32 = temp$1;
    ($it$2.cache[id$1] = $targ$32);
    $it$2.prepend.push($it$2.translate(["declare", temp$1, ["raw", raw$0]], "stmt"));
    return temp$1;
  } else {
    name$1 = m$3$0;
    return name$1;
  }
});
(Translator$0.prototype["register_raw"] = $targ$8);
$targ$9 = (function() {
  var rval$0;
  var $targ$36;
  var $it$3;
  var self$2;
  $it$3 = this;
  self$2 = this;
  rval$0 = $it$3.prepend.join("\n");
  $targ$36 = [];
  ($it$3["prepend"] = $targ$36);
  return rval$0;
});
(Translator$0.prototype["dump_store"] = $targ$9);
$targ$10 = (function(name$2) {
  var i$0;
  var tr$0;
  var r$0;
  var $it$4;
  var self$3;
  $it$4 = this;
  self$3 = this;
  tr$0 = ({
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
  });
  r$0 = [];
  i$0 = 0;
  $2: for (null; (i$0 < name$2.length); (++i$0)) {
    var c$0;
    c$0 = send(name$2, i$0);
    r$0.push((send(tr$0, c$0) || c$0));
  }
  return r$0.join("");
});
(Translator$0.prototype["mangle"] = $targ$10);
$targ$11 = (function(orig$0, mode$0) {
  var t2$0;
  var t1$0;
  var t0$1;
  var x$0;
  var stmts$0;
  var ret$0;
  var other$0;
  var m$4$0;
  var $targ$45;
  var b$0;
  var trst$0;
  var $it$5;
  var self$4;
  $it$5 = this;
  self$4 = this;
  $targ$45 = orig$0;
  t0$1 = getProjector(Body$0)($targ$45);
  if ((t0$1[0] && ((t1$0 = t0$1[1]), (t2$0 = t1$0.length), (t2$0 >= 0)))) {
    b$0 = Array.prototype.slice.call(t1$0, 0);
  } else {
    ___match_error($targ$45);
  }
  trst$0 = (function(stmt$0) {
    return $it$5.translate(stmt$0, "stmt");
  });
  m$4$0 = mode$0;
  if ((m$4$0 === "expr")) {
    x$0 = ["send", ["lambda", [], orig$0], ["array"]];
    return $it$5.translate(x$0, mode$0);
  } else {
    if ((m$4$0 === "return")) {
      stmts$0 = b$0.slice(0, -1);
      ret$0 = send(b$0, (b$0.length - 1));
      return (stmts$0.map(trst$0).join("") + $it$5.translate(ret$0, "return"));
    } else {
      if ((m$4$0 === "stmt")) {
        return b$0.map(trst$0).join("");
      } else {
        other$0 = m$4$0;
        throw ErrorFactory(["syntax", "mode"]).create("Unknown mode", ({"mode": mode$0}));
      }
    }
  }
});
(Translator$0.prototype["body"] = $targ$11);
$targ$12 = (function(x$1, mode$1) {
  var other$1;
  var m$5$0;
  var $it$6;
  var self$5;
  $it$6 = this;
  self$5 = this;
  m$5$0 = mode$1;
  if ((m$5$0 === "expr")) {
    return x$1;
  } else {
    if ((m$5$0 === "stmt")) {
      return (x$1 + ";");
    } else {
      if ((m$5$0 === "return")) {
        return (("return " + x$1) + ";");
      } else {
        other$1 = m$5$0;
        throw "OopsI";
      }
    }
  }
});
(Translator$0.prototype["expr"] = $targ$12);
$targ$13 = (function(op$0, a$0, b$1) {
  var $targ$63;
  var $targ$62;
  var t0$2;
  var $targ$65;
  var $targ$64;
  var $$22164$0;
  var $$22165$0;
  var $$22166$0;
  var t1$1;
  var t2$1;
  var m$6$0;
  var e$0;
  var $it$7;
  var self$6;
  $it$7 = this;
  self$6 = this;
  e$0 = ((m$6$0 = [a$0, b$1]), ((($$22164$0 = (m$6$0 instanceof Array)) && ((t0$2 = m$6$0.length), (($$22166$0 = (t0$2 === 2)) && (($targ$62 = m$6$0[0]), (t1$1 = $targ$62), ((t1$1 instanceof Array) && (($targ$63 = t1$1.length), (t2$1 = $targ$63), ((t2$1 === 1) && (t1$1[0] === "void")))))))) ? (m$6$0[1], (op$0 + $it$7.translate(b$1, "expr"))) : (($$22166$0 && (m$6$0[0], ($targ$64 = m$6$0[1]), (t1$1 = $targ$64), ((t1$1 instanceof Array) && (($targ$65 = t1$1.length), (t2$1 = $targ$65), ((t2$1 === 1) && (t1$1[0] === "void")))))) ? ($it$7.translate(a$0, "expr") + op$0) : (m$6$0, (($it$7.translate(a$0, "expr") + op$0) + $it$7.translate(b$1, "expr"))))));
  return (("(" + e$0) + ")");
});
(Translator$0.prototype["op"] = $targ$13);
$targ$14 = (function(expr$0, mode$2) {
  var t0$3;
  var repl$0;
  var $targ$73;
  var $it$12;
  var $it$11;
  var $it$10;
  var $it$9;
  var bridge$$22298$0;
  var bridge$$22297$0;
  var other$2;
  var id$2;
  var bridge$$22296$0;
  var m$8$0;
  var r$1;
  var $targ$84;
  var $targ$83;
  var $targ$82;
  var $targ$81;
  var t0$4;
  var t0$5;
  var $targ$89;
  var $targ$88;
  var bridge$$22230$0;
  var trf$0;
  var trmsg$0;
  var $targ$93;
  var $targ$92;
  var x$3;
  var x$2;
  var m$11$0;
  var trf$1;
  var trmsg$1;
  var trf$2;
  var trmsg$2;
  var otherwise$0;
  var m$10$0;
  var $targ$101;
  var $targ$100;
  var t0$6;
  var x$5;
  var x$4;
  var $$22519$0;
  var $$22520$0;
  var $$22521$0;
  var m$12$0;
  var m$13;
  var acc$0;
  var trf$3;
  var trargs$0;
  var op$1;
  var trf$4;
  var trmsg$3;
  var codevar$0;
  var f$5;
  var r$2;
  var f$6;
  var f$7;
  var v$3;
  var all_strings$0;
  var r$3;
  var $targ$131;
  var $targ$130;
  var m$15;
  var acc$1;
  var a$3;
  var b$4;
  var name$3;
  var star$0;
  var $targ$138;
  var $targ$137;
  var a$4;
  var b$5;
  var a$5;
  var b$6;
  var other$4;
  var m$16$0;
  var a$6;
  var b$7;
  var c$1;
  var a$7;
  var b$8;
  var c$2;
  var other$5;
  var m$17$0;
  var $targ$152;
  var $targ$151;
  var a$8;
  var other$6;
  var bridge$$22874$0;
  var m$18$0;
  var a$9;
  var b$9;
  var other$7;
  var bridge$$22901$0;
  var m$19$0;
  var $targ$161;
  var $targ$160;
  var a$10;
  var b$10;
  var c$3;
  var a$11;
  var b$11;
  var m$20$0;
  var core$0;
  var flatten$0;
  var m$24;
  var acc$2;
  var m$25;
  var acc$3;
  var $targ$178;
  var xs$0;
  var $targ$179;
  var $$22997$0;
  var m$21$0;
  var args$3;
  var isdecl$0;
  var m$26;
  var acc$4;
  var decls$0;
  var f$8;
  var r$4;
  var $targ$191;
  var $targ$190;
  var $targ$193;
  var $targ$192;
  var $targ$195;
  var $targ$194;
  var star$1;
  var t0$14;
  var x$14;
  var y$4;
  var m$27$0;
  var $targ$200;
  var $targ$199;
  var other$10;
  var m$28$0;
  var a$13;
  var b$13;
  var other$11;
  var m$29$0;
  var a$14;
  var b$14;
  var c$4;
  var d$0;
  var other$12;
  var m$30$0;
  var a$15;
  var b$15;
  var c$5;
  var other$13;
  var m$31$0;
  var a$16;
  var b$16;
  var c$6;
  var other$14;
  var m$32$0;
  var t0$15;
  var t0$16;
  var bridge$$22262$0;
  var $targ$221;
  var $targ$220;
  var $targ$219;
  var $targ$218;
  var a$17;
  var b$17;
  var other$15;
  var m$34$0;
  var t0$17;
  var other$16;
  var m$33$0;
  var r$5;
  var other$17;
  var x$18;
  var attempt$0;
  var v$5;
  var body$7;
  var finally$1;
  var x$17;
  var y$7;
  var body$6;
  var x$16;
  var y$6;
  var body$5;
  var x$15;
  var y$5;
  var z$0;
  var body$4;
  var test$2;
  var body$3;
  var label$2;
  var body$2;
  var value$6;
  var value$5;
  var value$4;
  var all$0;
  var value$3;
  var label$1;
  var label$0;
  var value$2;
  var args$6;
  var vars$0;
  var body$1;
  var s$2;
  var args$5;
  var _args$0;
  var lhs$0;
  var rhs$1;
  var obj$0;
  var msg$3;
  var rhs$0;
  var binding$1;
  var value$0;
  var binding$0;
  var test$1;
  var pos$1;
  var neg$0;
  var test$0;
  var pos$0;
  var bindings$0;
  var body$0;
  var generator$0;
  var args$2;
  var args$1;
  var f$4;
  var msg$2;
  var f$3;
  var args$0;
  var f$2;
  var msg$1;
  var s$1;
  var f$1;
  var msg$0;
  var f$0;
  var v$1;
  var s$0;
  var $$22265$0;
  var $$22266$0;
  var $$22267$0;
  var $$22268$0;
  var t1$2;
  var t2$2;
  var t3$0;
  var t4$0;
  var m$7$0;
  var $it$8;
  var self$7;
  $it$8 = this;
  self$7 = this;
  m$7$0 = expr$0;
  if ((($$22265$0 = (m$7$0 instanceof Array)) && ((t0$3 = m$7$0.length), ((t0$3 === 2) && (m$7$0[0] === "symbol"))))) {
    s$0 = m$7$0[1];
    return $it$8.expr($it$8.mangle(s$0), mode$2);
  } else {
    if (($$22265$0 && ((t0$3 === 1) && (m$7$0[0] === "void")))) {
      return $it$8.expr("null", mode$2);
    } else {
      if (($$22265$0 && ((t0$3 === 2) && (m$7$0[0] === "value")))) {
        v$1 = m$7$0[1];
        r$1 = ((m$8$0 = v$1), ((typeof(m$8$0) === "string") ? ((repl$0 = ({
          "\"": "\\\"",
          "\n": "\\n",
          "\\": "\\\\"
        })), ($targ$73 = v$1.replace(RegExp("((?:(?:\"|\\\\)|\n))", "g"), (function(m$9) {
          return send(repl$0, m$9);
        }))), (v$1 = $targ$73), (("\"" + v$1) + "\"")) : ((m$8$0 === (void 0)) ? "(void 0)" : (getChecker(RegExp)(m$8$0) ? (($it$9 = String(v$1)), ($it$10 = $it$9.slice(1, -1)), ($it$11 = $it$10.replace(RegExp("/", "g"), "\\/")), ($it$12 = $it$11.replace(RegExp("\\n", "g"), "\\n")), "/".concat($it$12).concat("/")) : ((bridge$$22296$0 = m$8$0), ((((bridge$$22297$0 = bridge$$22296$0), (((bridge$$22298$0 = bridge$$22297$0), ((typeof(bridge$$22298$0) === "number") || (bridge$$22298$0 === true))) || (bridge$$22297$0 === false))) || (bridge$$22296$0 === null)) ? String(v$1) : ((___hasprop(m$8$0, "::id") && ((id$2 = m$8$0["::id"]), id$2)) ? $it$8.translate($it$8.register_value(v$1, id$2), mode$2) : ((other$2 = m$8$0), (function() {
          throw ErrorFactory(["cannot_serialize"]).create("Cannot serialize value", ({"value": v$1}));
        })()))))))));
        return $it$8.expr(r$1, mode$2);
      } else {
        if (($$22265$0 && (($$22267$0 = (t0$3 === 3)) && (($$22268$0 = (m$7$0[0] === "send")) && (($targ$81 = m$7$0[1]), (t1$2 = $targ$81), ((t1$2 instanceof Array) && (($targ$82 = t1$2.length), (t2$2 = $targ$82), ((t2$2 === 2) && ((t1$2[0] === "variable") && ((t1$2[1] === "___node") && (($targ$83 = m$7$0[2]), (t3$0 = $targ$83), ((t3$0 instanceof Array) && (($targ$84 = t3$0.length), (t4$0 = $targ$84), ((t4$0 === 2) && (t3$0[0] === "value"))))))))))))))) {
          f$0 = t3$0[1];
          return f$0;
        } else {
          if (($$22268$0 && ((bridge$$22230$0 = m$7$0[1]), ((((bridge$$22230$0 instanceof Array) && ((t0$4 = bridge$$22230$0.length), ((t0$4 === 2) && ((bridge$$22230$0[0] === "symbol") && (bridge$$22230$0[1] === "___js_fetch"))))) || ((bridge$$22230$0 instanceof Array) && ((t0$5 = bridge$$22230$0.length), ((t0$5 === 2) && ((bridge$$22230$0[0] === "variable") && (bridge$$22230$0[1] === "___js_fetch")))))) && (($targ$88 = m$7$0[2]), (t1$2 = $targ$88), ((t1$2 instanceof Array) && (($targ$89 = t1$2.length), (t2$2 = $targ$89), ((t2$2 === 3) && (t1$2[0] === "array"))))))))) {
            f$1 = t1$2[1];
            msg$0 = t1$2[2];
            trf$0 = $it$8.translate(f$1, "expr");
            trmsg$0 = $it$8.translate(msg$0, "expr");
            return $it$8.expr((((trf$0 + "[") + trmsg$0) + "]"), mode$2);
          } else {
            if (($$22268$0 && ((f$2 = m$7$0[1]), ($targ$92 = m$7$0[2]), (t1$2 = $targ$92), (msg$1 = t1$2), ((t1$2 instanceof Array) && (($targ$93 = t1$2.length), (t2$2 = $targ$93), ((t2$2 === 2) && (t1$2[0] === "value"))))))) {
              s$1 = t1$2[1];
              m$10$0 = null;
              m$10$0;
              if (((typeof(s$1) === "string") && s$1.match(RegExp("(?:^(?:[a-zA-Z_$]+)$)", "")))) {
                trf$1 = ((m$11$0 = $it$8.translate(f$2, "expr")), (getChecker(RegExp("^\\d+$", ""))(m$11$0) ? ((x$2 = m$11$0), (("(" + x$2) + ")")) : ((x$3 = m$11$0), x$3)));
                trmsg$1 = $it$8.translate(["symbol", s$1], "expr");
                return $it$8.expr(((trf$1 + ".") + trmsg$1), mode$2);
              } else {
                otherwise$0 = m$10$0;
                trf$2 = $it$8.translate(f$2, "expr");
                trmsg$2 = $it$8.translate(msg$1, "expr");
                return $it$8.expr((((trf$2 + "[") + trmsg$2) + "]"), mode$2);
              }
            } else {
              if (($$22268$0 && ((f$3 = m$7$0[1]), ($targ$100 = m$7$0[2]), (t1$2 = $targ$100), ((t1$2 instanceof Array) && (($targ$101 = t1$2.length), (t2$2 = $targ$101), ((t2$2 >= 1) && (t1$2[0] === "array"))))))) {
                args$0 = Array.prototype.slice.call(t1$2, 1);
                op$1 = ((m$12$0 = f$3), ((($$22519$0 = (m$12$0 instanceof Array)) && ((t0$6 = m$12$0.length), (($$22521$0 = (t0$6 === 2)) && (m$12$0[0] === "symbol")))) ? ((x$4 = m$12$0[1]), send(js_op_table$0, x$4)) : (($$22521$0 && (m$12$0[0] === "variable")) ? ((x$5 = m$12$0[1]), send(js_op_table2$0, x$5)) : (m$12$0, null))));
                if (op$1) {
                  return $it$8.expr($it$8.op(op$1, args$0[0], args$0[1]), mode$2);
                } else {
                  trf$3 = $it$8.translate(f$3, "expr");
                  trargs$0 = ((acc$0 = []), (m$13 = null), (function() {
                    $3: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                        $__1; !($__1 = $__0.next()).done; ) {
                      m$13 = $__1.value;
                      {
                        var x$6;
                        x$6 = m$13;
                        acc$0.push($it$8.translate(x$6, "expr"));
                      }
                    }
                  })(), acc$0);
                  return $it$8.expr((((trf$3 + "(") + trargs$0.join(",")) + ")"), mode$2);
                }
              } else {
                if ($$22268$0) {
                  f$4 = m$7$0[1];
                  msg$2 = m$7$0[2];
                  codevar$0 = "send";
                  trf$4 = $it$8.translate(f$4, "expr");
                  trmsg$3 = $it$8.translate(msg$2, "expr");
                  return $it$8.expr((((((codevar$0 + "(") + trf$4) + ",") + trmsg$3) + ")"), mode$2);
                } else {
                  if (($$22265$0 && (($$22267$0 = (t0$3 >= 1)) && (m$7$0[0] === "array")))) {
                    args$1 = Array.prototype.slice.call(m$7$0, 1);
                    r$2 = ((f$5 = (function(x$7) {
                      return $it$8.translate(x$7, "expr");
                    })), (("[" + args$1.map(f$5).join(",")) + "]"));
                    return $it$8.expr(r$2, mode$2);
                  } else {
                    if (($$22267$0 && (m$7$0[0] === "object"))) {
                      args$2 = Array.prototype.slice.call(m$7$0, 1);
                      all_strings$0 = args$2.every((function(temp$2$0) {
                        var t1$3;
                        var t0$7;
                        var t0$8;
                        var other$3;
                        var v$2;
                        var m$14$0;
                        var ph$0;
                        var y$0;
                        t0$7 = temp$2$0;
                        if (((t0$7 instanceof Array) && ((t1$3 = t0$7.length), ((t1$3 === 3) && (t0$7[0] === "array"))))) {
                          ph$0 = t0$7[1];
                          y$0 = t0$7[2];
                        } else {
                          ___match_error(temp$2$0);
                        }
                        m$14$0 = ph$0;
                        if (((m$14$0 instanceof Array) && ((t0$8 = m$14$0.length), ((t0$8 === 2) && (m$14$0[0] === "value"))))) {
                          v$2 = m$14$0[1];
                          return true;
                        } else {
                          other$3 = m$14$0;
                          return false;
                        }
                      }));
                      r$3 = (all_strings$0 ? ((f$6 = (function(temp$3$0) {
                        var t1$4;
                        var t0$9;
                        var a$1;
                        var b$2;
                        var x$8;
                        var y$1;
                        t0$9 = temp$3$0;
                        if (((t0$9 instanceof Array) && ((t1$4 = t0$9.length), ((t1$4 === 3) && (t0$9[0] === "array"))))) {
                          x$8 = t0$9[1];
                          y$1 = t0$9[2];
                        } else {
                          ___match_error(temp$3$0);
                        }
                        a$1 = $it$8.translate(x$8, "expr");
                        b$2 = $it$8.translate(y$1, "expr");
                        return ((a$1 + ":") + b$2);
                      })), (("({" + args$2.map(f$6).join(",")) + "})")) : ((v$3 = gensym$0()), (f$7 = (function(temp$4$0) {
                        var t1$5;
                        var t0$10;
                        var a$2;
                        var b$3;
                        var x$9;
                        var y$2;
                        t0$10 = temp$4$0;
                        if (((t0$10 instanceof Array) && ((t1$5 = t0$10.length), ((t1$5 === 3) && (t0$10[0] === "array"))))) {
                          x$9 = t0$10[1];
                          y$2 = t0$10[2];
                        } else {
                          ___match_error(temp$4$0);
                        }
                        a$2 = $it$8.translate(x$9, "expr");
                        b$3 = $it$8.translate(y$2, "expr");
                        return (((((v$3 + "[") + a$2) + "]=") + b$3) + ";");
                      })), ((((((("(function(){" + "let ") + v$3) + "={};") + args$2.map(f$7).join("")) + ";return ") + v$3) + ";}())")));
                      return $it$8.expr(r$3, mode$2);
                    } else {
                      if (($$22265$0 && (((t0$3 >= 3) && (t0$3 <= 4)) && ((m$7$0[0] === "lambda") && ((bindings$0 = m$7$0[1]), (body$0 = m$7$0[2]), ($targ$130 = ((3 >= t0$3) ? ["value", false] : m$7$0[3])), (t1$2 = $targ$130), ((t1$2 instanceof Array) && (($targ$131 = t1$2.length), (t2$2 = $targ$131), ((t2$2 === 2) && (t1$2[0] === "value"))))))))) {
                        generator$0 = t1$2[1];
                        name$3 = (getChecker(RegExp("^[$_a-zA-Z]*$", ""))(expr$0.name) ? (expr$0.name + " ") : "");
                        star$0 = (generator$0 ? "*" : "");
                        a$3 = ((acc$1 = []), (m$15 = null), (function() {
                          $6: for (var $__0 = bindings$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                              $__1; !($__1 = $__0.next()).done; ) {
                            m$15 = $__1.value;
                            {
                              var x$10;
                              x$10 = m$15;
                              acc$1.push($it$8.translate(x$10, "expr"));
                            }
                          }
                        })(), acc$1).join(",");
                        b$4 = $it$8.body(body$0, "return");
                        return $it$8.expr(((((((("(function" + name$3) + star$0) + "(") + a$3) + "){") + b$4) + "})"), mode$2);
                      } else {
                        if (($$22265$0 && (($$22267$0 = (t0$3 === 4)) && (($$22268$0 = (m$7$0[0] === "if")) && ((test$0 = m$7$0[1]), (pos$0 = m$7$0[2]), ($targ$137 = m$7$0[3]), (t1$2 = $targ$137), ((t1$2 instanceof Array) && (($targ$138 = t1$2.length), (t2$2 = $targ$138), ((t2$2 === 2) && ((t1$2[0] === "value") && (t1$2[1] === (void 0))))))))))) {
                          m$16$0 = mode$2;
                          if ((m$16$0 === "expr")) {
                            a$4 = $it$8.translate(test$0, "expr");
                            b$5 = $it$8.translate(pos$0, "expr");
                            return $it$8.expr((((("(" + a$4) + "?") + b$5) + ":undefined)"), "expr");
                          } else {
                            other$4 = m$16$0;
                            a$5 = $it$8.translate(test$0, "expr");
                            b$6 = $it$8.translate(pos$0, mode$2);
                            return (((("if(" + a$5) + "){") + b$6) + "}");
                          }
                        } else {
                          if ($$22268$0) {
                            test$1 = m$7$0[1];
                            pos$1 = m$7$0[2];
                            neg$0 = m$7$0[3];
                            m$17$0 = mode$2;
                            if ((m$17$0 === "expr")) {
                              a$6 = $it$8.translate(test$1, "expr");
                              b$7 = $it$8.translate(pos$1, "expr");
                              c$1 = $it$8.translate(neg$0, "expr");
                              return $it$8.expr((((((("(" + a$6) + "?") + b$7) + ":") + c$1) + ")"), "expr");
                            } else {
                              other$5 = m$17$0;
                              a$7 = $it$8.translate(test$1, "expr");
                              b$8 = $it$8.translate(pos$1, mode$2);
                              c$2 = $it$8.translate(neg$0, mode$2);
                              return (((((("if(" + a$7) + "){") + b$8) + "}else{") + c$2) + "}");
                            }
                          } else {
                            if (($$22265$0 && (($$22267$0 = (t0$3 === 3)) && (($$22268$0 = (m$7$0[0] === "declare")) && ((binding$0 = m$7$0[1]), ($targ$151 = m$7$0[2]), (t1$2 = $targ$151), ((t1$2 instanceof Array) && (($targ$152 = t1$2.length), (t2$2 = $targ$152), ((t2$2 === 2) && ((t1$2[0] === "value") && (t1$2[1] === (void 0))))))))))) {
                              m$18$0 = mode$2;
                              bridge$$22874$0 = m$18$0;
                              if (((bridge$$22874$0 === "expr") || (bridge$$22874$0 === "return"))) {
                                throw "Invalid in expr ctx";
                              } else {
                                other$6 = m$18$0;
                                a$8 = $it$8.translate(binding$0, "expr");
                                return (("let " + a$8) + ";");
                              }
                            } else {
                              if ($$22268$0) {
                                binding$1 = m$7$0[1];
                                value$0 = m$7$0[2];
                                m$19$0 = mode$2;
                                bridge$$22901$0 = m$19$0;
                                if (((bridge$$22901$0 === "expr") || (bridge$$22901$0 === "return"))) {
                                  throw "Invalid in expr ctx";
                                } else {
                                  other$7 = m$19$0;
                                  a$9 = $it$8.translate(binding$1, "expr");
                                  b$9 = $it$8.translate(value$0, "expr");
                                  return (((("let " + a$9) + "=") + b$9) + ";");
                                }
                              } else {
                                if (($$22267$0 && (($$22268$0 = (m$7$0[0] === "assign")) && (($targ$160 = m$7$0[1]), (t1$2 = $targ$160), ((t1$2 instanceof Array) && (($targ$161 = t1$2.length), (t2$2 = $targ$161), ((t2$2 === 3) && (t1$2[0] === "send")))))))) {
                                  obj$0 = t1$2[1];
                                  msg$3 = t1$2[2];
                                  rhs$0 = m$7$0[2];
                                  a$10 = $it$8.translate(obj$0, "expr");
                                  b$10 = $it$8.translate(msg$3, "expr");
                                  c$3 = $it$8.translate(rhs$0, "expr");
                                  return $it$8.expr((((((("(" + a$10) + "[") + b$10) + "]=") + c$3) + ")"), mode$2);
                                } else {
                                  if ($$22268$0) {
                                    lhs$0 = m$7$0[1];
                                    rhs$1 = m$7$0[2];
                                    core$0 = ((a$11 = $it$8.translate(lhs$0, "expr")), (b$11 = $it$8.translate(rhs$1, "expr")), ((a$11 + "=") + b$11));
                                    m$20$0 = mode$2;
                                    if ((m$20$0 === "stmt")) {
                                      return (core$0 + ";");
                                    } else {
                                      m$20$0;
                                      return $it$8.expr((("(" + core$0) + ")"), mode$2);
                                    }
                                  } else {
                                    if (($$22265$0 && ((t0$3 === 1) && (m$7$0[0] === "multi")))) {
                                      if ((mode$2 === "stmt")) {
                                        return "";
                                      } else {
                                        return "null";
                                      }
                                    } else {
                                      if (($$22265$0 && (($$22267$0 = (t0$3 >= 1)) && (m$7$0[0] === "multi")))) {
                                        _args$0 = Array.prototype.slice.call(m$7$0, 1);
                                        args$3 = ((flatten$0 = (function(args$4) {
                                          var m$22;
                                          var $targ$172;
                                          var res$0;
                                          $targ$172 = [];
                                          res$0 = $targ$172;
                                          m$22 = null;
                                          $7: for (var $__0 = args$4[$traceurRuntime.toProperty(Symbol.iterator)](),
                                              $__1; !($__1 = $__0.next()).done; ) {
                                            m$22 = $__1.value;
                                            {
                                              var t1$6;
                                              var other$8;
                                              var t0$11;
                                              var more$0;
                                              t0$11 = m$22;
                                              if (((t0$11 instanceof Array) && ((t1$6 = t0$11.length), ((t1$6 >= 1) && (t0$11[0] === "multi"))))) {
                                                more$0 = Array.prototype.slice.call(t0$11, 1);
                                                res$0 = res$0.concat(flatten$0(more$0));
                                              } else {
                                                other$8 = m$22;
                                                res$0.push(other$8);
                                              }
                                            }
                                          }
                                          return res$0;
                                        })), flatten$0(_args$0));
                                        isdecl$0 = (function(temp$5$0) {
                                          var t0$12;
                                          var other$9;
                                          var variable$0;
                                          var value$1;
                                          var m$23$0;
                                          var ph$1;
                                          ph$1 = temp$5$0;
                                          m$23$0 = ph$1;
                                          if (((m$23$0 instanceof Array) && ((t0$12 = m$23$0.length), ((t0$12 === 3) && (m$23$0[0] === "declare"))))) {
                                            variable$0 = m$23$0[1];
                                            value$1 = m$23$0[2];
                                            return true;
                                          } else {
                                            other$9 = m$23$0;
                                            return false;
                                          }
                                        });
                                        m$21$0 = null;
                                        m$21$0;
                                        if ((args$3.length === 1)) {
                                          return $it$8.translate(args$3[0], mode$2);
                                        } else {
                                          if (((mode$2 === "expr") && (!args$3.some(isdecl$0)))) {
                                            $targ$178 = ((acc$2 = []), (m$24 = null), (function() {
                                              $8: for (var $__0 = args$3[$traceurRuntime.toProperty(Symbol.iterator)](),
                                                  $__1; !($__1 = $__0.next()).done; ) {
                                                m$24 = $__1.value;
                                                {
                                                  var x$11;
                                                  x$11 = m$24;
                                                  acc$2.push($it$8.translate(x$11, "expr"));
                                                }
                                              }
                                            })(), acc$2);
                                            xs$0 = $targ$178;
                                            $targ$179 = ((acc$3 = []), (m$25 = null), (function() {
                                              $9: for (var $__0 = xs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                                  $__1; !($__1 = $__0.next()).done; ) {
                                                m$25 = $__1.value;
                                                {
                                                  var x$12;
                                                  x$12 = m$25;
                                                  if ((x$12 !== "")) {
                                                    acc$3.push(x$12);
                                                  } else {
                                                    false;
                                                  }
                                                }
                                              }
                                            })(), acc$3);
                                            xs$0 = $targ$179;
                                            return (("(" + xs$0.join(",")) + ")");
                                          } else {
                                            return $it$8.body(expr$0, mode$2);
                                          }
                                        }
                                      } else {
                                        if (($$22267$0 && (m$7$0[0] === "splice"))) {
                                          args$5 = Array.prototype.slice.call(m$7$0, 1);
                                          return $it$8.translate(["multi"].concat(args$5), mode$2);
                                        } else {
                                          if (($$22265$0 && ((t0$3 === 2) && (m$7$0[0] === "variable")))) {
                                            s$2 = m$7$0[1];
                                            return $it$8.expr($it$8.mangle(s$2), mode$2);
                                          } else {
                                            if (($$22265$0 && ((t0$3 === 3) && (m$7$0[0] === "scope")))) {
                                              vars$0 = m$7$0[1];
                                              body$1 = m$7$0[2];
                                              decls$0 = ((acc$4 = []), (m$26 = null), (function() {
                                                $10: for (var $__0 = vars$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                                    $__1; !($__1 = $__0.next()).done; ) {
                                                  m$26 = $__1.value;
                                                  {
                                                    var v$4;
                                                    v$4 = m$26;
                                                    acc$4.push(["declare", v$4, ["value", undefined]]);
                                                  }
                                                }
                                              })(), acc$4);
                                              return $it$8.translate(["multi"].concat(decls$0).concat([body$1]), mode$2);
                                            } else {
                                              if (($$22265$0 && ((t0$3 >= 1) && (m$7$0[0] === "object2")))) {
                                                args$6 = Array.prototype.slice.call(m$7$0, 1);
                                                r$4 = ((f$8 = (function(temp$6$0) {
                                                  var t1$7;
                                                  var t0$13;
                                                  var a$12;
                                                  var b$12;
                                                  var x$13;
                                                  var y$3;
                                                  t0$13 = temp$6$0;
                                                  if (((t0$13 instanceof Array) && ((t1$7 = t0$13.length), (t1$7 === 2)))) {
                                                    x$13 = t0$13[0];
                                                    y$3 = t0$13[1];
                                                  } else {
                                                    ___match_error(temp$6$0);
                                                  }
                                                  a$12 = $it$8.translate(x$13, "expr");
                                                  b$12 = $it$8.translate(y$3, "expr");
                                                  return ((a$12 + ":") + b$12);
                                                })), (("({" + args$6.map(f$8).join(",")) + "})"));
                                                return $it$8.expr(r$4, mode$2);
                                              } else {
                                                if (($$22265$0 && ((t0$3 === 2) && (m$7$0[0] === "js_new")))) {
                                                  value$2 = m$7$0[1];
                                                  return $it$8.expr((("(new " + $it$8.translate(value$2, "expr")) + ")"), mode$2);
                                                } else {
                                                  if (($$22265$0 && (($$22267$0 = ((t0$3 >= 1) && (t0$3 <= 2))) && ((m$7$0[0] === "js_break") && (($targ$190 = ((1 >= t0$3) ? ["value", null] : m$7$0[1])), (t1$2 = $targ$190), ((t1$2 instanceof Array) && (($targ$191 = t1$2.length), (t2$2 = $targ$191), ((t2$2 === 2) && (t1$2[0] === "value"))))))))) {
                                                    label$0 = t1$2[1];
                                                    if ((mode$2 === "expr")) {
                                                      throw "Invalid break in ctx";
                                                    } else {
                                                      return (("break" + (label$0 ? (" " + label$0) : "")) + ";");
                                                    }
                                                  } else {
                                                    if (($$22267$0 && ((m$7$0[0] === "js_continue") && (($targ$192 = ((1 >= t0$3) ? ["value", null] : m$7$0[1])), (t1$2 = $targ$192), ((t1$2 instanceof Array) && (($targ$193 = t1$2.length), (t2$2 = $targ$193), ((t2$2 === 2) && (t1$2[0] === "value")))))))) {
                                                      label$1 = t1$2[1];
                                                      if ((mode$2 === "expr")) {
                                                        throw "Invalid continue in ctx";
                                                      } else {
                                                        return (("continue" + (label$1 ? (" " + label$1) : "")) + ";");
                                                      }
                                                    } else {
                                                      if (($$22265$0 && ((t0$3 === 2) && (m$7$0[0] === "js_return")))) {
                                                        value$3 = m$7$0[1];
                                                        if ((mode$2 === "expr")) {
                                                          throw "Invalid return in ctx";
                                                        } else {
                                                          return (("return " + $it$8.translate(value$3, "expr")) + ";");
                                                        }
                                                      } else {
                                                        if (($$22265$0 && ((t0$3 === 3) && ((m$7$0[0] === "js_yield") && ((value$4 = m$7$0[1]), ($targ$194 = m$7$0[2]), (t1$2 = $targ$194), ((t1$2 instanceof Array) && (($targ$195 = t1$2.length), (t2$2 = $targ$195), ((t2$2 === 2) && (t1$2[0] === "value"))))))))) {
                                                          all$0 = t1$2[1];
                                                          star$1 = (all$0 ? "*" : "");
                                                          return $it$8.expr((((("(yield" + star$1) + " ") + $it$8.translate(value$4, "expr")) + ")"), mode$2);
                                                        } else {
                                                          if (($$22265$0 && (($$22267$0 = (t0$3 === 2)) && (m$7$0[0] === "js_delete")))) {
                                                            value$5 = m$7$0[1];
                                                            if ((mode$2 === "expr")) {
                                                              throw "Invalid delete in ctx";
                                                            } else {
                                                              m$27$0 = value$5;
                                                              if (((m$27$0 instanceof Array) && ((t0$14 = m$27$0.length), ((t0$14 === 3) && (m$27$0[0] === "send"))))) {
                                                                x$14 = m$27$0[1];
                                                                y$4 = m$27$0[2];
                                                                return (((("delete " + $it$8.translate(x$14, "expr")) + "[") + $it$8.translate(y$4, "expr")) + "];");
                                                              } else {
                                                                m$27$0;
                                                                throw ErrorFactory(["translate", "delete"]).create("Invalid argument for delete");
                                                              }
                                                            }
                                                          } else {
                                                            if (($$22267$0 && (m$7$0[0] === "js_throw"))) {
                                                              value$6 = m$7$0[1];
                                                              if ((mode$2 === "expr")) {
                                                                return (("(function(){throw " + $it$8.translate(value$6, "expr")) + ";})()");
                                                              } else {
                                                                return (("throw " + $it$8.translate(value$6, "expr")) + ";");
                                                              }
                                                            } else {
                                                              if (($$22265$0 && (($$22267$0 = (t0$3 === 3)) && ((m$7$0[0] === "js_label") && (($targ$199 = m$7$0[1]), (t1$2 = $targ$199), ((t1$2 instanceof Array) && (($targ$200 = t1$2.length), (t2$2 = $targ$200), ((t2$2 === 2) && (t1$2[0] === "value"))))))))) {
                                                                label$2 = t1$2[1];
                                                                body$2 = m$7$0[2];
                                                                m$28$0 = mode$2;
                                                                if ((m$28$0 === "expr")) {
                                                                  return $it$8.body(expr$0, "expr");
                                                                } else {
                                                                  other$10 = m$28$0;
                                                                  return ((label$2 + ":") + $it$8.translate(body$2, other$10));
                                                                }
                                                              } else {
                                                                if (($$22267$0 && (m$7$0[0] === "js_while"))) {
                                                                  test$2 = m$7$0[1];
                                                                  body$3 = m$7$0[2];
                                                                  m$29$0 = mode$2;
                                                                  if ((m$29$0 === "expr")) {
                                                                    return $it$8.body(expr$0, "expr");
                                                                  } else {
                                                                    other$11 = m$29$0;
                                                                    a$13 = $it$8.translate(test$2, "expr");
                                                                    b$13 = $it$8.translate(body$3, "stmt");
                                                                    return (((("while(" + a$13) + "){") + b$13) + "}");
                                                                  }
                                                                } else {
                                                                  if (($$22265$0 && ((t0$3 === 5) && (m$7$0[0] === "js_for")))) {
                                                                    x$15 = m$7$0[1];
                                                                    y$5 = m$7$0[2];
                                                                    z$0 = m$7$0[3];
                                                                    body$4 = m$7$0[4];
                                                                    m$30$0 = mode$2;
                                                                    if ((m$30$0 === "expr")) {
                                                                      return $it$8.body(expr$0, "expr");
                                                                    } else {
                                                                      other$12 = m$30$0;
                                                                      a$14 = $it$8.translate(x$15, "expr");
                                                                      b$14 = $it$8.translate(y$5, "expr");
                                                                      c$4 = $it$8.translate(z$0, "expr");
                                                                      d$0 = $it$8.translate(body$4, "stmt");
                                                                      return (((((((("for(" + a$14) + ";") + b$14) + ";") + c$4) + "){") + d$0) + "}");
                                                                    }
                                                                  } else {
                                                                    if (($$22265$0 && (($$22267$0 = (t0$3 === 4)) && (m$7$0[0] === "js_for_in")))) {
                                                                      x$16 = m$7$0[1];
                                                                      y$6 = m$7$0[2];
                                                                      body$5 = m$7$0[3];
                                                                      m$31$0 = mode$2;
                                                                      if ((m$31$0 === "expr")) {
                                                                        return $it$8.body(expr$0, "expr");
                                                                      } else {
                                                                        other$13 = m$31$0;
                                                                        a$15 = $it$8.translate(x$16, "expr");
                                                                        b$15 = $it$8.translate(y$6, "expr");
                                                                        c$5 = $it$8.translate(body$5, "stmt");
                                                                        return (((((("for(" + a$15) + " in ") + b$15) + "){") + c$5) + "}");
                                                                      }
                                                                    } else {
                                                                      if (($$22267$0 && (m$7$0[0] === "js_for_of"))) {
                                                                        x$17 = m$7$0[1];
                                                                        y$7 = m$7$0[2];
                                                                        body$6 = m$7$0[3];
                                                                        m$32$0 = mode$2;
                                                                        if ((m$32$0 === "expr")) {
                                                                          return $it$8.body(expr$0, "expr");
                                                                        } else {
                                                                          other$14 = m$32$0;
                                                                          a$16 = $it$8.translate(x$17, "expr");
                                                                          b$16 = $it$8.translate(y$7, "expr");
                                                                          c$6 = $it$8.translate(body$6, "stmt");
                                                                          return (((((("for(" + a$16) + " of ") + b$16) + "){") + c$6) + "}");
                                                                        }
                                                                      } else {
                                                                        if (($$22267$0 && ((m$7$0[0] === "js_try") && ((attempt$0 = m$7$0[1]), ($targ$218 = m$7$0[2]), (t1$2 = $targ$218), ((t1$2 instanceof Array) && (($targ$219 = t1$2.length), (t2$2 = $targ$219), ((t2$2 === 4) && ((t1$2[0] === "lambda") && (($targ$220 = t1$2[1]), (t3$0 = $targ$220), ((t3$0 instanceof Array) && (($targ$221 = t3$0.length), (t4$0 = $targ$221), ((t4$0 === 1) && ((bridge$$22262$0 = t3$0[0]), (((bridge$$22262$0 instanceof Array) && ((t0$15 = bridge$$22262$0.length), ((t0$15 === 2) && ((bridge$$22262$0[0] === "symbol") && ((v$5 = bridge$$22262$0[1]), true))))) || ((bridge$$22262$0 instanceof Array) && ((t0$16 = bridge$$22262$0.length), ((t0$16 === 2) && ((bridge$$22262$0[0] === "variable") && ((v$5 = bridge$$22262$0[1]), true))))))))))))))))))) {
                                                                          body$7 = t1$2[2];
                                                                          t1$2[3];
                                                                          finally$1 = m$7$0[3];
                                                                          r$5 = ((m$34$0 = mode$2), ((m$34$0 === "expr") ? $it$8.body(expr$0, "expr") : ((other$15 = m$34$0), (a$17 = $it$8.translate(attempt$0, "stmt")), (b$17 = $it$8.translate(body$7, "stmt")), (((((("try{" + a$17) + "}catch(") + v$5) + "){") + b$17) + "}"))));
                                                                          m$33$0 = finally$1;
                                                                          if (((m$33$0 instanceof Array) && ((t0$17 = m$33$0.length), ((t0$17 === 1) && (m$33$0[0] === "void"))))) {
                                                                            return r$5;
                                                                          } else {
                                                                            other$16 = m$33$0;
                                                                            return (((r$5 + "finally{") + $it$8.translate(other$16, "stmt")) + "}");
                                                                          }
                                                                        } else {
                                                                          if (($$22265$0 && ((t0$3 === 2) && (m$7$0[0] === "raw")))) {
                                                                            x$18 = m$7$0[1];
                                                                            return x$18;
                                                                          } else {
                                                                            other$17 = m$7$0;
                                                                            throw other$17;
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
});
(Translator$0.prototype["translate"] = $targ$14);
__amp____colon__(Translator$0, __amp____colon__((($targ$231 = "Translator"), (accum$0 = ({})), (accum$0["::name"] = $targ$231), accum$0), (($targ$232 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$232), accum$1)));
Translator$0;
translate$0 = (function(expr$1, mode$3) {
  var tr$1;
  var t$0;
  tr$1 = Translator$0();
  t$0 = tr$1.translate(expr$1, mode$3);
  return (tr$1.dump_store() + t$0);
});
$targ$235 = Translator$0;
(exports["Translator"] = $targ$235);
$targ$236 = translate$0;
(exports["translate"] = $targ$236);
//# sourceURL=<compile-source>