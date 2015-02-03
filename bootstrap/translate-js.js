"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var accum$0;
var accum$1;
var $targ$7;
var $0$0;
var gensym$0;
var Body$0;
var $1$0;
var __lt____gt__$0;
var $2$0;
var jsKeywords$0;
var join$0;
var js_op_table2$0;
var js_op_table$0;
var Translator$0;
$0$0 = require("./util");
gensym$0 = $0$0.gensym;
Body$0 = $0$0.Body;
$1$0 = require("./pp");
__lt____gt__$0 = $1$0["<>"];
$2$0 = require("./expand");
jsKeywords$0 = $2$0.jsKeywords;
join$0 = (function join(things$0, sep$0) {
  var m$0;
  var acc$0;
  var temp$0;
  acc$0 = [];
  temp$0 = null;
  m$0 = null;
  $3: for (var $__0 = enumerate(things$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$0 = $__1.value;
    {
      var ph$0$0;
      var x$0;
      var t0$0;
      var t1$0;
      t0$0 = m$0;
      if (((t0$0 instanceof Array) && ((t1$0 = t0$0.length), (t1$0 === 2)))) {
        ph$0$0 = t0$0[0];
        x$0 = t0$0[1];
        if ((ph$0$0 === 0)) {
          temp$0 = x$0;
        } else {
          temp$0 = [",", x$0];
        }
        acc$0.push(temp$0);
      } else {
        ___match_error(m$0, "/home/olivier/git/earl-grey/src/translate-js.eg", 333, 405);
      }
    }
  }
  return acc$0;
});
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
Translator$0 = (function Translator() {
  var m$2$0;
  var $targ$0;
  var $targ$1;
  var prelude$0;
  var t0$1;
  var m$1$0;
  var $it$0;
  if ((!getChecker(Translator$0)(this))) {
    $it$0 = Object.create(Translator$0.prototype);
  } else {
    $it$0 = this;
  }
  m$1$0 = arguments;
  t0$1 = m$1$0.length;
  if (((t0$1 >= 0) && (t0$1 <= 1))) {
    if ((0 >= t0$1)) {
      prelude$0 = null;
    } else {
      prelude$0 = m$1$0[0];
    }
    $targ$0 = ({});
    ($it$0["cache"] = $targ$0);
    [];
    $targ$1 = [];
    ($it$0["prepend"] = $targ$1);
    [];
    m$2$0 = prelude$0;
    if ((m$2$0 === null)) {
      undefined;
    } else {
      if ((typeof(m$2$0) === "string")) {
        $it$0.prepend.push(prelude$0);
      } else {
        $it$0.prepend.push($it$0.translate(___serialize_ast(prelude$0), "stmt"));
      }
    }
  } else {
    ___match_error(m$1$0);
  }
  return $it$0;
});
(Translator$0.prototype["register_value"] = (function register_value(v$0, id$0) {
  var temp$1;
  var $targ$2;
  var name$0;
  var m$3$0;
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  m$3$0 = send($it$1.cache, id$0);
  if ((m$3$0 === (void 0))) {
    temp$1 = ["symbol", gensym$0()];
    $targ$2 = temp$1;
    ($it$1.cache[id$0] = $targ$2);
    [];
    $it$1.prepend.push($it$1.translate(["declare", temp$1, ___serialize_ast(v$0)], "stmt"));
    return temp$1;
  } else {
    name$0 = m$3$0;
    return name$0;
  }
}));
(Translator$0.prototype["register_raw"] = (function register_raw(raw$0, id$1) {
  var temp$2;
  var $targ$3;
  var name$1;
  var m$4$0;
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  m$4$0 = send($it$2.cache, id$1);
  if ((m$4$0 === (void 0))) {
    temp$2 = ["symbol", gensym$0()];
    $targ$3 = temp$2;
    ($it$2.cache[id$1] = $targ$3);
    [];
    $it$2.prepend.push($it$2.translate(["declare", temp$2, ["raw", raw$0]], "stmt"));
    return temp$2;
  } else {
    name$1 = m$4$0;
    return name$1;
  }
}));
(Translator$0.prototype["dump_store"] = (function dump_store() {
  var rval$0;
  var $targ$4;
  var $it$3;
  var self$2;
  $it$3 = this;
  self$2 = this;
  rval$0 = $it$3.prepend.join("\n");
  $targ$4 = [];
  ($it$3["prepend"] = $targ$4);
  [];
  return rval$0;
}));
(Translator$0.prototype["mangle"] = (function mangle(name$2) {
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
  $4: for (null; (i$0 < name$2.length); (++i$0)) {
    var c$0;
    c$0 = send(name$2, i$0);
    r$0.push((send(tr$0, c$0) || c$0));
  }
  return r$0.join("");
}));
(Translator$0.prototype["body"] = (function body(orig$0, mode$0) {
  var t0$2;
  var t1$1;
  var t2$0;
  var x$1;
  var stmts$0;
  var ret$0;
  var m$6;
  var acc$1;
  var temp$3;
  var stmts$1;
  var ret$1;
  var other$0;
  var variable$0;
  var t0$3;
  var m$5$0;
  var $targ$5;
  var b$0;
  var trst$0;
  var $it$5;
  var self$4;
  $it$5 = this;
  self$4 = this;
  $targ$5 = orig$0;
  t0$2 = getProjector(Body$0)($targ$5);
  if ((t0$2[0] && ((t1$1 = t0$2[1]), (t2$0 = t1$1.length), (t2$0 >= 0)))) {
    b$0 = Array.prototype.slice.call(t1$1, 0);
  } else {
    ___match_error($targ$5);
  }
  trst$0 = (function trst(stmt$0) {
    return $it$5.translate(stmt$0, "stmt");
  });
  m$5$0 = mode$0;
  if ((m$5$0 === "expr")) {
    x$1 = ["send", ["lambda", [], orig$0], ["array"]];
    return $it$5.translate(x$1, mode$0);
  } else {
    if ((m$5$0 === "return")) {
      stmts$0 = b$0.slice(0, -1);
      ret$0 = send(b$0, (b$0.length - 1));
      return Node(["splice"], ({}), [stmts$0.map(trst$0), $it$5.translate(ret$0, "return")]);
    } else {
      if ((m$5$0 === "stmt")) {
        return Node(["splice"], ({}), ((acc$1 = []), (temp$3 = null), (m$6 = null), (function() {
          $5: for (var $__0 = b$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$6 = $__1.value;
            {
              var x$2;
              x$2 = m$6;
              temp$3 = trst$0(x$2);
              acc$1.push(temp$3);
            }
          }
        })(), acc$1));
      } else {
        if (((m$5$0 instanceof Array) && ((t0$3 = m$5$0.length), ((t0$3 === 2) && (m$5$0[0] === "return"))))) {
          variable$0 = m$5$0[1];
          stmts$1 = b$0.slice(0, -1);
          ret$1 = send(b$0, (b$0.length - 1));
          return Node(["splice"], ({}), [stmts$1.map(trst$0), $it$5.translate(ret$1, mode$0)]);
        } else {
          other$0 = m$5$0;
          throw ErrorFactory(["syntax", "mode"]).create("Unknown translate mode", ({"mode": mode$0}));
        }
      }
    }
  }
}));
(Translator$0.prototype["expr"] = (function expr(x$3, temp$4$0) {
  var t0$4;
  var other$1;
  var variable$1;
  var t0$5;
  var t1$2;
  var mode$1;
  var ph$1$0;
  var $it$6;
  var self$5;
  $it$6 = this;
  self$5 = this;
  t0$4 = temp$4$0;
  mode$1 = t0$4;
  ph$1$0 = t0$4;
  if ((ph$1$0 === "expr")) {
    return x$3;
  } else {
    if ((ph$1$0 === "stmt")) {
      return Node(["splice"], ({}), [x$3, ";"]);
    } else {
      if ((ph$1$0 === "return")) {
        return Node(["splice"], ({}), ["return ", x$3, ";"]);
      } else {
        t0$5 = ph$1$0;
        t1$2 = t0$5.length;
        if (((t1$2 === 2) && (t0$5[0] === "return"))) {
          variable$1 = t0$5[1];
          return Node(["splice"], ({}), [variable$1, "=", x$3, ";"]);
        } else {
          other$1 = ph$1$0;
          throw ErrorFactory(["syntax", "mode"]).create("Unknown translate mode", ({"mode": mode$1}));
        }
      }
    }
  }
}));
(Translator$0.prototype["op"] = (function op(op$0, a$0, b$1) {
  var $$24317$0;
  var $$24318$0;
  var $$24319$0;
  var t0$6;
  var t1$3;
  var t2$1;
  var m$7$0;
  var e$0;
  var $it$7;
  var self$6;
  $it$7 = this;
  self$6 = this;
  m$7$0 = [a$0, b$1];
  if ((($$24317$0 = (m$7$0 instanceof Array)) && ((t0$6 = m$7$0.length), (($$24319$0 = (t0$6 === 2)) && ((t1$3 = m$7$0[0]), ((t1$3 instanceof Array) && ((t2$1 = t1$3.length), ((t2$1 === 1) && (t1$3[0] === "void"))))))))) {
    m$7$0[1];
    e$0 = Node(["splice"], ({}), [op$0, $it$7.translate(b$1, "expr")]);
  } else {
    if (($$24319$0 && (m$7$0[0], (t1$3 = m$7$0[1]), ((t1$3 instanceof Array) && ((t2$1 = t1$3.length), ((t2$1 === 1) && (t1$3[0] === "void"))))))) {
      e$0 = Node(["splice"], ({}), [$it$7.translate(a$0, "expr"), op$0]);
    } else {
      e$0 = Node(["splice"], ({}), [$it$7.translate(a$0, "expr"), op$0, $it$7.translate(b$1, "expr")]);
    }
  }
  return Node(["splice"], ({}), ["(", e$0, ")"]);
}));
(Translator$0.prototype["translate"] = (function translate(expr$0, mode$2) {
  var repl$0;
  var $it$12;
  var $it$11;
  var $it$10;
  var $it$9;
  var bridge$$24481$0;
  var bridge$$24480$0;
  var other$2;
  var id$2;
  var bridge$$24479$0;
  var m$10$0;
  var r$1;
  var t0$8;
  var t0$9;
  var x$4;
  var x$7;
  var x$6;
  var m$13$0;
  var x$5;
  var x$8;
  var otherwise$0;
  var m$12$0;
  var x$10;
  var x$9;
  var $$24690$0;
  var $$24691$0;
  var $$24692$0;
  var t0$10;
  var m$14$0;
  var m$15;
  var acc$2;
  var temp$5;
  var x$11;
  var op$1;
  var x$13;
  var codevar$0;
  var m$16;
  var acc$3;
  var temp$6;
  var r$2;
  var f$5;
  var m$17;
  var acc$4;
  var temp$9;
  var v$3;
  var all_strings$0;
  var r$3;
  var m$18$0;
  var m$19;
  var acc$5;
  var temp$10;
  var r$4;
  var name$3;
  var x$18;
  var other$4;
  var x$19;
  var other$5;
  var bridge$$24403$0;
  var x$20;
  var other$6;
  var bridge$$24402$0;
  var bridge$$24408$0;
  var x$21;
  var other$7;
  var bridge$$24407$0;
  var x$22;
  var x$23;
  var m$20$0;
  var core$0;
  var flatten$0;
  var m$23;
  var acc$6;
  var temp$11;
  var m$24;
  var acc$7;
  var temp$12;
  var m$25;
  var acc$8;
  var temp$13;
  var xs$0;
  var m$21$0;
  var all_args$0;
  var args$3;
  var isdecl$0;
  var m$26;
  var acc$9;
  var temp$14;
  var decls$0;
  var x$30;
  var x$31;
  var x$32;
  var y$3;
  var t0$19;
  var t1$10;
  var m$27$0;
  var other$10;
  var other$11;
  var other$12;
  var other$13;
  var other$14;
  var t0$20;
  var t0$21;
  var other$15;
  var m$29$0;
  var other$16;
  var t0$22;
  var m$28$0;
  var r$5;
  var other$17;
  var x$36;
  var attempt$0;
  var v$5;
  var body$7;
  var finally$1;
  var x$35;
  var y$6;
  var body$6;
  var ph$11$0;
  var x$34;
  var y$5;
  var body$5;
  var ph$10$0;
  var x$33;
  var y$4;
  var z$0;
  var body$4;
  var ph$9$0;
  var test$2;
  var body$3;
  var ph$8$0;
  var label$2;
  var body$2;
  var ph$7$0;
  var value$5;
  var ph$6$0;
  var value$4;
  var all$0;
  var value$3;
  var label$1;
  var label$0;
  var value$2;
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
  var ph$5$0;
  var binding$0;
  var ph$4$0;
  var test$1;
  var pos$1;
  var neg$0;
  var ph$3$0;
  var test$0;
  var pos$0;
  var ph$2$0;
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
  var $$24445$0;
  var $$24446$0;
  var $$24447$0;
  var $$24448$0;
  var $$24449$0;
  var t0$7;
  var t1$4;
  var t2$2;
  var t3$0;
  var t4$0;
  var bridge$$24387$0;
  var bridge$$24442$0;
  var m$9$0;
  var $targ$6;
  var n$0;
  var m$8$0;
  var rval$1;
  var $it$8;
  var self$7;
  $it$8 = this;
  self$7 = this;
  m$9$0 = expr$0;
  if ((($$24445$0 = (m$9$0 instanceof Array)) && ((t0$7 = m$9$0.length), ((t0$7 === 2) && (m$9$0[0] === "symbol"))))) {
    s$0 = m$9$0[1];
    rval$1 = $it$8.expr($it$8.mangle(s$0), mode$2);
  } else {
    if (($$24445$0 && ((t0$7 === 1) && (m$9$0[0] === "void")))) {
      rval$1 = $it$8.expr("null", mode$2);
    } else {
      if (($$24445$0 && ((t0$7 === 2) && (m$9$0[0] === "value")))) {
        v$1 = m$9$0[1];
        m$10$0 = v$1;
        if ((typeof(m$10$0) === "string")) {
          repl$0 = ({
            "\"": "\\\"",
            "\n": "\\n",
            "\\": "\\\\"
          });
          v$1 = v$1.replace(RegExp("((?:(?:\"|\\\\)|\n))", "g"), (function(m$11) {
            return send(repl$0, m$11);
          }));
          r$1 = (("\"" + v$1) + "\"");
        } else {
          if ((m$10$0 === (void 0))) {
            r$1 = "(void 0)";
          } else {
            if (getChecker(RegExp)(m$10$0)) {
              $it$9 = String(v$1);
              $it$10 = $it$9.slice(1, -1);
              $it$11 = $it$10.replace(RegExp("/", "g"), "\\/");
              $it$12 = $it$11.replace(RegExp("\\n", "g"), "\\n");
              r$1 = "/".concat($it$12).concat("/");
            } else {
              bridge$$24479$0 = m$10$0;
              if ((((bridge$$24480$0 = bridge$$24479$0), (((bridge$$24481$0 = bridge$$24480$0), ((typeof(bridge$$24481$0) === "number") || (bridge$$24481$0 === true))) || (bridge$$24480$0 === false))) || (bridge$$24479$0 === null))) {
                r$1 = String(v$1);
              } else {
                if ((___hasprop(m$10$0, "::id") && ((id$2 = m$10$0["::id"]), id$2))) {
                  r$1 = $it$8.translate($it$8.register_value(v$1, id$2), mode$2);
                } else {
                  other$2 = m$10$0;
                  throw ErrorFactory(["cannot_serialize"]).create("Cannot serialize value", ({"value": v$1}));
                }
              }
            }
          }
        }
        rval$1 = $it$8.expr(r$1, mode$2);
      } else {
        if (($$24445$0 && (($$24447$0 = (t0$7 === 3)) && (($$24448$0 = (m$9$0[0] === "send")) && ((t1$4 = m$9$0[1]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && ((t1$4[0] === "variable") && ((t1$4[1] === "___node") && ((t3$0 = m$9$0[2]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 2) && (t3$0[0] === "value"))))))))))))))) {
          f$0 = t3$0[1];
          rval$1 = f$0;
        } else {
          if (($$24448$0 && ((bridge$$24387$0 = m$9$0[1]), ((((bridge$$24387$0 instanceof Array) && ((t0$8 = bridge$$24387$0.length), ((t0$8 === 2) && ((bridge$$24387$0[0] === "symbol") && (bridge$$24387$0[1] === "___js_fetch"))))) || ((bridge$$24387$0 instanceof Array) && ((t0$9 = bridge$$24387$0.length), ((t0$9 === 2) && ((bridge$$24387$0[0] === "variable") && (bridge$$24387$0[1] === "___js_fetch")))))) && ((t1$4 = m$9$0[2]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 3) && (t1$4[0] === "array"))))))))) {
            f$1 = t1$4[1];
            msg$0 = t1$4[2];
            x$4 = Node(["splice"], ({}), [$it$8.translate(f$1, "expr"), "[", $it$8.translate(msg$0, "expr"), "]"]);
            rval$1 = $it$8.expr(x$4, mode$2);
          } else {
            if (($$24448$0 && ((f$2 = m$9$0[1]), (t1$4 = m$9$0[2]), (msg$1 = t1$4), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && (t1$4[0] === "value"))))))) {
              s$1 = t1$4[1];
              m$12$0 = null;
              if (((typeof(s$1) === "string") && s$1.match(RegExp("(?:^(?:[a-zA-Z_$]+)$)", "")))) {
                x$5 = Node(["splice"], ({}), [((m$13$0 = $it$8.translate(f$2, "expr")), (getChecker(RegExp("^\\d+$", ""))(m$13$0) ? ((x$6 = m$13$0), (("(" + x$6) + ")")) : ((x$7 = m$13$0), x$7))), ".", $it$8.translate(["symbol", s$1], "expr")]);
                rval$1 = $it$8.expr(x$5, mode$2);
              } else {
                otherwise$0 = m$12$0;
                x$8 = Node(["splice"], ({}), [$it$8.translate(f$2, "expr"), "[", $it$8.translate(msg$1, "expr"), "]"]);
                rval$1 = $it$8.expr(x$8, mode$2);
              }
            } else {
              if (($$24448$0 && ((f$3 = m$9$0[1]), (t1$4 = m$9$0[2]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 >= 1) && (t1$4[0] === "array"))))))) {
                args$0 = Array.prototype.slice.call(t1$4, 1);
                m$14$0 = f$3;
                if ((($$24690$0 = (m$14$0 instanceof Array)) && ((t0$10 = m$14$0.length), (($$24692$0 = (t0$10 === 2)) && (m$14$0[0] === "symbol"))))) {
                  x$9 = m$14$0[1];
                  op$1 = send(js_op_table$0, x$9);
                } else {
                  if (($$24692$0 && (m$14$0[0] === "variable"))) {
                    x$10 = m$14$0[1];
                    op$1 = send(js_op_table2$0, x$10);
                  } else {
                    op$1 = null;
                  }
                }
                if (op$1) {
                  rval$1 = $it$8.expr($it$8.op(op$1, args$0[0], args$0[1]), mode$2);
                } else {
                  x$11 = Node(["splice"], ({}), [$it$8.translate(f$3, "expr"), "(", join$0(((acc$2 = []), (temp$5 = null), (m$15 = null), (function() {
                    $6: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                        $__1; !($__1 = $__0.next()).done; ) {
                      m$15 = $__1.value;
                      {
                        var x$12;
                        x$12 = m$15;
                        temp$5 = $it$8.translate(x$12, "expr");
                        acc$2.push(temp$5);
                      }
                    }
                  })(), acc$2), ","), ")"]);
                  rval$1 = $it$8.expr(x$11, mode$2);
                }
              } else {
                if ($$24448$0) {
                  f$4 = m$9$0[1];
                  msg$2 = m$9$0[2];
                  codevar$0 = "send";
                  x$13 = Node(["splice"], ({}), [codevar$0, "(", $it$8.translate(f$4, "expr"), ",", $it$8.translate(msg$2, "expr"), ")"]);
                  rval$1 = $it$8.expr(x$13, mode$2);
                } else {
                  if (($$24445$0 && (($$24447$0 = (t0$7 >= 1)) && (m$9$0[0] === "array")))) {
                    args$1 = Array.prototype.slice.call(m$9$0, 1);
                    r$2 = Node(["splice"], ({}), ["[", join$0(((acc$3 = []), (temp$6 = null), (m$16 = null), (function() {
                      $7: for (var $__0 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__1; !($__1 = $__0.next()).done; ) {
                        m$16 = $__1.value;
                        {
                          var x$14;
                          x$14 = m$16;
                          temp$6 = $it$8.translate(x$14, "expr");
                          acc$3.push(temp$6);
                        }
                      }
                    })(), acc$3), ","), "]"]);
                    rval$1 = $it$8.expr(r$2, mode$2);
                  } else {
                    if (($$24447$0 && (m$9$0[0] === "object"))) {
                      args$2 = Array.prototype.slice.call(m$9$0, 1);
                      all_strings$0 = args$2.every((function(temp$7$0) {
                        var t0$11;
                        var t1$5;
                        var other$3;
                        var v$2;
                        var t0$12;
                        var t1$6;
                        var ph$12$0;
                        var y$0;
                        t0$11 = temp$7$0;
                        if (((t0$11 instanceof Array) && ((t1$5 = t0$11.length), ((t1$5 === 3) && (t0$11[0] === "array"))))) {
                          ph$12$0 = t0$11[1];
                          y$0 = t0$11[2];
                        } else {
                          ___match_error(temp$7$0);
                        }
                        t0$12 = ph$12$0;
                        t1$6 = t0$12.length;
                        if (((t1$6 === 2) && (t0$12[0] === "value"))) {
                          v$2 = t0$12[1];
                          return true;
                        } else {
                          other$3 = ph$12$0;
                          return false;
                        }
                      }));
                      if (all_strings$0) {
                        r$3 = Node(["splice"], ({}), ["({", ((f$5 = (function f(temp$8$0) {
                          var t0$13;
                          var t1$7;
                          var a$1;
                          var b$2;
                          var x$15;
                          var y$1;
                          t0$13 = temp$8$0;
                          if (((t0$13 instanceof Array) && ((t1$7 = t0$13.length), ((t1$7 === 3) && (t0$13[0] === "array"))))) {
                            x$15 = t0$13[1];
                            y$1 = t0$13[2];
                          } else {
                            ___match_error(temp$8$0);
                          }
                          a$1 = $it$8.translate(x$15, "expr");
                          b$2 = $it$8.translate(y$1, "expr");
                          return Node(["splice"], ({}), [a$1, ":", b$2]);
                        })), join$0(args$2.map(f$5), ",")), "})"]);
                      } else {
                        v$3 = gensym$0();
                        r$3 = Node(["splice"], ({}), ["(function(){let ", v$3, "={};", ((acc$4 = []), (temp$9 = null), (m$17 = null), (function() {
                          $8: for (var $__0 = args$2[$traceurRuntime.toProperty(Symbol.iterator)](),
                              $__1; !($__1 = $__0.next()).done; ) {
                            m$17 = $__1.value;
                            {
                              var x$16;
                              var y$2;
                              var t0$14;
                              var t1$8;
                              t0$14 = m$17;
                              if (((t0$14 instanceof Array) && ((t1$8 = t0$14.length), ((t1$8 === 3) && (t0$14[0] === "array"))))) {
                                x$16 = t0$14[1];
                                y$2 = t0$14[2];
                                temp$9 = Node(["splice"], ({}), ["[", $it$8.translate(x$16, "expr"), "]=", $it$8.translate(y$2, "expr"), ";"]);
                                acc$4.push(temp$9);
                              } else {
                                ___match_error(m$17, "/home/olivier/git/earl-grey/src/translate-js.eg", 8657, 8840);
                              }
                            }
                          }
                        })(), acc$4)]);
                      }
                      rval$1 = $it$8.expr(r$3, mode$2);
                    } else {
                      if (($$24445$0 && (((t0$7 >= 3) && (t0$7 <= 4)) && ((m$9$0[0] === "lambda") && ((bindings$0 = m$9$0[1]), (body$0 = m$9$0[2]), (t1$4 = ((3 >= t0$7) ? ["value", false] : m$9$0[3])), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && (t1$4[0] === "value"))))))))) {
                        generator$0 = t1$4[1];
                        m$18$0 = expr$0.name;
                        if (__in__(m$18$0, jsKeywords$0)) {
                          name$3 = "";
                        } else {
                          if (getChecker(RegExp("^[$_a-zA-Z0-9]*$", ""))(m$18$0)) {
                            name$3 = (" " + expr$0.name);
                          } else {
                            name$3 = "";
                          }
                        }
                        r$4 = Node(["splice"], ({}), ["(function", name$3, (generator$0 ? "*" : ""), "(", join$0(((acc$5 = []), (temp$10 = null), (m$19 = null), (function() {
                          $9: for (var $__0 = bindings$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                              $__1; !($__1 = $__0.next()).done; ) {
                            m$19 = $__1.value;
                            {
                              var x$17;
                              x$17 = m$19;
                              temp$10 = $it$8.translate(x$17, "expr");
                              acc$5.push(temp$10);
                            }
                          }
                        })(), acc$5), ","), "){", $it$8.body(body$0, "return"), "})"]);
                        rval$1 = $it$8.expr(r$4, mode$2);
                      } else {
                        if (($$24445$0 && (($$24447$0 = (t0$7 === 4)) && (($$24448$0 = (m$9$0[0] === "if")) && ((test$0 = m$9$0[1]), (pos$0 = m$9$0[2]), (t1$4 = m$9$0[3]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && ((t1$4[0] === "value") && (t1$4[1] === (void 0))))))))))) {
                          ph$2$0 = mode$2;
                          if ((ph$2$0 === "expr")) {
                            x$18 = Node(["splice"], ({}), ["(", $it$8.translate(test$0, "expr"), "?", $it$8.translate(pos$0, "expr"), ":undefined)"]);
                            rval$1 = $it$8.expr(x$18, "expr");
                          } else {
                            other$4 = ph$2$0;
                            rval$1 = Node(["splice"], ({}), ["if(", $it$8.translate(test$0, "expr"), "){", $it$8.translate(pos$0, mode$2), "}"]);
                          }
                        } else {
                          if ($$24448$0) {
                            test$1 = m$9$0[1];
                            pos$1 = m$9$0[2];
                            neg$0 = m$9$0[3];
                            ph$3$0 = mode$2;
                            if ((ph$3$0 === "expr")) {
                              x$19 = Node(["splice"], ({}), ["(", $it$8.translate(test$1, "expr"), "?", $it$8.translate(pos$1, "expr"), ":", $it$8.translate(neg$0, "expr"), ")"]);
                              rval$1 = $it$8.expr(x$19, "expr");
                            } else {
                              other$5 = ph$3$0;
                              rval$1 = Node(["splice"], ({}), ["if(", $it$8.translate(test$1, "expr"), "){", $it$8.translate(pos$1, mode$2), "}else{", $it$8.translate(neg$0, mode$2), "}"]);
                            }
                          } else {
                            if (($$24445$0 && (($$24447$0 = (t0$7 === 3)) && (($$24448$0 = (m$9$0[0] === "declare")) && ((binding$0 = m$9$0[1]), (t1$4 = m$9$0[2]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && ((t1$4[0] === "value") && (t1$4[1] === (void 0))))))))))) {
                              ph$4$0 = mode$2;
                              bridge$$24402$0 = ph$4$0;
                              if ((((bridge$$24403$0 = bridge$$24402$0), ((bridge$$24403$0 === "expr") || (bridge$$24403$0 === "return"))) || ((x$20 = bridge$$24402$0), ((x$20 instanceof Array) && (x$20[0] === "return"))))) {
                                throw "Invalid in expr ctx";
                              } else {
                                other$6 = ph$4$0;
                                rval$1 = Node(["splice"], ({}), ["let ", $it$8.translate(binding$0, "expr"), ";"]);
                              }
                            } else {
                              if ($$24448$0) {
                                binding$1 = m$9$0[1];
                                value$0 = m$9$0[2];
                                ph$5$0 = mode$2;
                                bridge$$24407$0 = ph$5$0;
                                if ((((bridge$$24408$0 = bridge$$24407$0), ((bridge$$24408$0 === "expr") || (bridge$$24408$0 === "return"))) || ((x$21 = bridge$$24407$0), ((x$21 instanceof Array) && (x$21[0] === "return"))))) {
                                  throw "Invalid in expr ctx";
                                } else {
                                  other$7 = ph$5$0;
                                  rval$1 = Node(["splice"], ({}), ["let ", $it$8.translate(binding$1, "expr"), "=", $it$8.translate(value$0, "expr"), ";"]);
                                }
                              } else {
                                if (($$24447$0 && (($$24448$0 = (m$9$0[0] === "assign")) && ((t1$4 = m$9$0[1]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 3) && (t1$4[0] === "send")))))))) {
                                  obj$0 = t1$4[1];
                                  msg$3 = t1$4[2];
                                  rhs$0 = m$9$0[2];
                                  x$22 = Node(["splice"], ({}), ["(", $it$8.translate(obj$0, "expr"), "[", $it$8.translate(msg$3, "expr"), "]=", $it$8.translate(rhs$0, "expr"), ")"]);
                                  rval$1 = $it$8.expr(x$22, mode$2);
                                } else {
                                  if (($$24448$0 && ((lhs$0 = t1$4), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && (t1$4[0] === "variable"))))))) {
                                    t1$4[1];
                                    rhs$1 = m$9$0[2];
                                    core$0 = Node(["splice"], ({}), [$it$8.translate(lhs$0, "expr"), "=", $it$8.translate(rhs$1, "expr")]);
                                    m$20$0 = mode$2;
                                    if ((m$20$0 === "stmt")) {
                                      rval$1 = $it$8.translate(rhs$1, ["return", $it$8.translate(lhs$0, "expr")]);
                                    } else {
                                      x$23 = Node(["splice"], ({}), ["(", core$0, ")"]);
                                      rval$1 = $it$8.expr(x$23, mode$2);
                                    }
                                  } else {
                                    if (($$24445$0 && ((t0$7 === 1) && (m$9$0[0] === "multi")))) {
                                      if ((mode$2 === "stmt")) {
                                        rval$1 = "";
                                      } else {
                                        rval$1 = "null";
                                      }
                                    } else {
                                      if (($$24445$0 && (($$24447$0 = (t0$7 >= 1)) && (m$9$0[0] === "multi")))) {
                                        _args$0 = Array.prototype.slice.call(m$9$0, 1);
                                        flatten$0 = (function flatten(args$4) {
                                          var m$22;
                                          var res$0;
                                          res$0 = [];
                                          m$22 = null;
                                          $10: for (var $__0 = args$4[$traceurRuntime.toProperty(Symbol.iterator)](),
                                              $__1; !($__1 = $__0.next()).done; ) {
                                            m$22 = $__1.value;
                                            {
                                              var t0$15;
                                              var t0$16;
                                              var other$8;
                                              var more$0;
                                              var bridge$$25154$0;
                                              bridge$$25154$0 = m$22;
                                              if ((((bridge$$25154$0 instanceof Array) && ((t0$15 = bridge$$25154$0.length), ((t0$15 >= 1) && ((bridge$$25154$0[0] === "multi") && ((more$0 = Array.prototype.slice.call(bridge$$25154$0, 1)), true))))) || ((bridge$$25154$0 instanceof Array) && ((t0$16 = bridge$$25154$0.length), ((t0$16 >= 1) && ((bridge$$25154$0[0] === "splice") && ((more$0 = Array.prototype.slice.call(bridge$$25154$0, 1)), true))))))) {
                                                res$0 = res$0.concat(flatten$0(more$0));
                                              } else {
                                                other$8 = m$22;
                                                res$0.push(other$8);
                                              }
                                            }
                                          }
                                          return res$0;
                                        });
                                        all_args$0 = flatten$0(_args$0);
                                        acc$6 = [];
                                        temp$11 = null;
                                        m$23 = null;
                                        $11: for (var $__0 = all_args$0.slice(0, -1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                            $__1; !($__1 = $__0.next()).done; ) {
                                          m$23 = $__1.value;
                                          {
                                            var x$24;
                                            var x$25;
                                            var bridge$$25196$0;
                                            var x$26;
                                            var x$27;
                                            var bridge$$25195$0;
                                            var elem$0;
                                            var ph$13$0;
                                            var t0$17;
                                            t0$17 = m$23;
                                            elem$0 = t0$17;
                                            ph$13$0 = t0$17;
                                            bridge$$25195$0 = ph$13$0;
                                            if ((((bridge$$25196$0 = bridge$$25195$0), (((x$24 = bridge$$25196$0), ((x$24 instanceof Array) && (x$24[0] === "value"))) || ((x$25 = bridge$$25196$0), ((x$25 instanceof Array) && (x$25[0] === "symbol"))))) || ((x$26 = bridge$$25195$0), ((x$26 instanceof Array) && (x$26[0] === "variable"))))) {
                                              continue $11;
                                            } else {
                                              x$27 = ph$13$0;
                                              temp$11 = x$27;
                                            }
                                            acc$6.push(temp$11);
                                          }
                                        }
                                        args$3 = acc$6;
                                        if ((all_args$0.length > 0)) {
                                          args$3.push(send(all_args$0, (all_args$0.length - 1)));
                                        }
                                        isdecl$0 = (function isdecl(ph$14$0) {
                                          var other$9;
                                          var variable$2;
                                          var value$1;
                                          var t0$18;
                                          var t1$9;
                                          t0$18 = ph$14$0;
                                          t1$9 = t0$18.length;
                                          if (((t1$9 === 3) && (t0$18[0] === "declare"))) {
                                            variable$2 = t0$18[1];
                                            value$1 = t0$18[2];
                                            return true;
                                          } else {
                                            other$9 = ph$14$0;
                                            return false;
                                          }
                                        });
                                        m$21$0 = mode$2;
                                        if ((args$3.length === 1)) {
                                          rval$1 = $it$8.translate(args$3[0], mode$2);
                                        } else {
                                          if (((m$21$0 === "expr") && (!args$3.some(isdecl$0)))) {
                                            acc$7 = [];
                                            temp$12 = null;
                                            m$24 = null;
                                            $12: for (var $__2 = args$3.slice(0, -1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                                                $__3; !($__3 = $__2.next()).done; ) {
                                              m$24 = $__3.value;
                                              {
                                                var x$28;
                                                x$28 = m$24;
                                                temp$12 = $it$8.translate(x$28, "expr");
                                                acc$7.push(temp$12);
                                              }
                                            }
                                            xs$0 = acc$7;
                                            xs$0.push($it$8.translate(send(args$3, (args$3.length - 1)), mode$2));
                                            acc$8 = [];
                                            temp$13 = null;
                                            m$25 = null;
                                            $13: for (var $__4 = xs$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                                $__5; !($__5 = $__4.next()).done; ) {
                                              m$25 = $__5.value;
                                              {
                                                var x$29;
                                                x$29 = m$25;
                                                if ((x$29 !== "")) {
                                                  temp$13 = x$29;
                                                  acc$8.push(temp$13);
                                                } else {
                                                  false;
                                                }
                                              }
                                            }
                                            xs$0 = acc$8;
                                            rval$1 = Node(["splice"], ({}), ["(", join$0(xs$0, ","), ")"]);
                                          } else {
                                            rval$1 = $it$8.body(["multi"].concat(args$3), mode$2);
                                          }
                                        }
                                      } else {
                                        if (($$24447$0 && (m$9$0[0] === "splice"))) {
                                          args$5 = Array.prototype.slice.call(m$9$0, 1);
                                          rval$1 = $it$8.translate(["multi"].concat(args$5), mode$2);
                                        } else {
                                          if (($$24445$0 && ((t0$7 === 2) && (m$9$0[0] === "variable")))) {
                                            s$2 = m$9$0[1];
                                            rval$1 = $it$8.expr($it$8.mangle(s$2), mode$2);
                                          } else {
                                            if (($$24445$0 && ((t0$7 === 3) && (m$9$0[0] === "scope")))) {
                                              vars$0 = m$9$0[1];
                                              body$1 = m$9$0[2];
                                              acc$9 = [];
                                              temp$14 = null;
                                              m$26 = null;
                                              $14: for (var $__6 = vars$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                                                  $__7; !($__7 = $__6.next()).done; ) {
                                                m$26 = $__7.value;
                                                {
                                                  var v$4;
                                                  v$4 = m$26;
                                                  temp$14 = ["declare", v$4, ["value", undefined]];
                                                  acc$9.push(temp$14);
                                                }
                                              }
                                              decls$0 = acc$9;
                                              rval$1 = $it$8.translate(["multi"].concat(decls$0).concat([body$1]), mode$2);
                                            } else {
                                              if (($$24445$0 && ((t0$7 === 2) && (m$9$0[0] === "js_new")))) {
                                                value$2 = m$9$0[1];
                                                x$30 = Node(["splice"], ({}), ["(new ", $it$8.translate(value$2, "expr"), ")"]);
                                                rval$1 = $it$8.expr(x$30, mode$2);
                                              } else {
                                                if (($$24445$0 && (($$24447$0 = ((t0$7 >= 1) && (t0$7 <= 2))) && ((m$9$0[0] === "js_break") && ((t1$4 = ((1 >= t0$7) ? ["value", null] : m$9$0[1])), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && (t1$4[0] === "value"))))))))) {
                                                  label$0 = t1$4[1];
                                                  rval$1 = Node(["splice"], ({}), ["break", (label$0 ? (" " + label$0) : ""), ";"]);
                                                } else {
                                                  if (($$24447$0 && ((m$9$0[0] === "js_continue") && ((t1$4 = ((1 >= t0$7) ? ["value", null] : m$9$0[1])), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && (t1$4[0] === "value")))))))) {
                                                    label$1 = t1$4[1];
                                                    rval$1 = Node(["splice"], ({}), ["continue", (label$1 ? (" " + label$1) : ""), ";"]);
                                                  } else {
                                                    if (($$24445$0 && ((t0$7 === 2) && (m$9$0[0] === "js_return")))) {
                                                      value$3 = m$9$0[1];
                                                      rval$1 = Node(["splice"], ({}), ["return ", $it$8.translate(value$3, "expr"), ";"]);
                                                    } else {
                                                      if (($$24445$0 && ((t0$7 === 3) && ((m$9$0[0] === "js_yield") && ((value$4 = m$9$0[1]), (t1$4 = m$9$0[2]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && (t1$4[0] === "value"))))))))) {
                                                        all$0 = t1$4[1];
                                                        x$31 = Node(["splice"], ({}), ["(yield", (all$0 ? "*" : ""), " ", $it$8.translate(value$4, "expr"), ")"]);
                                                        rval$1 = $it$8.expr(x$31, mode$2);
                                                      } else {
                                                        if (($$24445$0 && (($$24447$0 = (t0$7 === 2)) && (m$9$0[0] === "js_delete")))) {
                                                          ph$6$0 = m$9$0[1];
                                                          t0$19 = ph$6$0;
                                                          if (((t0$19 instanceof Array) && ((t1$10 = t0$19.length), ((t1$10 === 3) && (t0$19[0] === "send"))))) {
                                                            x$32 = t0$19[1];
                                                            y$3 = t0$19[2];
                                                            rval$1 = Node(["splice"], ({}), ["delete ", $it$8.translate(x$32, "expr"), "[", $it$8.translate(y$3, "expr"), "];"]);
                                                          } else {
                                                            throw ErrorFactory(["translate", "delete"]).create("Invalid argument for delete");
                                                          }
                                                        } else {
                                                          if (($$24447$0 && (m$9$0[0] === "js_throw"))) {
                                                            value$5 = m$9$0[1];
                                                            m$27$0 = mode$2;
                                                            if ((m$27$0 === "expr")) {
                                                              rval$1 = Node(["splice"], ({}), ["(function(){throw ", $it$8.translate(value$5, "expr"), ";})()"]);
                                                            } else {
                                                              rval$1 = Node(["splice"], ({}), ["throw ", $it$8.translate(value$5, "expr"), ";"]);
                                                            }
                                                          } else {
                                                            if (($$24445$0 && (($$24447$0 = (t0$7 === 3)) && ((m$9$0[0] === "js_label") && ((t1$4 = m$9$0[1]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 2) && (t1$4[0] === "value"))))))))) {
                                                              label$2 = t1$4[1];
                                                              body$2 = m$9$0[2];
                                                              ph$7$0 = mode$2;
                                                              if ((ph$7$0 === "expr")) {
                                                                rval$1 = $it$8.body(expr$0, "expr");
                                                              } else {
                                                                other$10 = ph$7$0;
                                                                rval$1 = Node(["splice"], ({}), [label$2, ":", $it$8.translate(body$2, other$10)]);
                                                              }
                                                            } else {
                                                              if (($$24447$0 && (m$9$0[0] === "js_while"))) {
                                                                test$2 = m$9$0[1];
                                                                body$3 = m$9$0[2];
                                                                ph$8$0 = mode$2;
                                                                if ((ph$8$0 === "expr")) {
                                                                  rval$1 = $it$8.body(expr$0, "expr");
                                                                } else {
                                                                  other$11 = ph$8$0;
                                                                  rval$1 = Node(["splice"], ({}), ["while(", $it$8.translate(test$2, "expr"), "){", $it$8.translate(body$3, "stmt"), "}"]);
                                                                }
                                                              } else {
                                                                if (($$24445$0 && ((t0$7 === 5) && (m$9$0[0] === "js_for")))) {
                                                                  x$33 = m$9$0[1];
                                                                  y$4 = m$9$0[2];
                                                                  z$0 = m$9$0[3];
                                                                  body$4 = m$9$0[4];
                                                                  ph$9$0 = mode$2;
                                                                  if ((ph$9$0 === "expr")) {
                                                                    rval$1 = $it$8.body(expr$0, "expr");
                                                                  } else {
                                                                    other$12 = ph$9$0;
                                                                    rval$1 = Node(["splice"], ({}), ["for(", $it$8.translate(x$33, "expr"), ";", $it$8.translate(y$4, "expr"), ";", $it$8.translate(z$0, "expr"), "){", $it$8.translate(body$4, "stmt"), "}"]);
                                                                  }
                                                                } else {
                                                                  if (($$24445$0 && (($$24447$0 = (t0$7 === 4)) && (m$9$0[0] === "js_for_in")))) {
                                                                    x$34 = m$9$0[1];
                                                                    y$5 = m$9$0[2];
                                                                    body$5 = m$9$0[3];
                                                                    ph$10$0 = mode$2;
                                                                    if ((ph$10$0 === "expr")) {
                                                                      rval$1 = $it$8.body(expr$0, "expr");
                                                                    } else {
                                                                      other$13 = ph$10$0;
                                                                      rval$1 = Node(["splice"], ({}), ["for(", $it$8.translate(x$34, "expr"), " in ", $it$8.translate(y$5, "expr"), "){", $it$8.translate(body$5, "stmt"), "}"]);
                                                                    }
                                                                  } else {
                                                                    if (($$24447$0 && (m$9$0[0] === "js_for_of"))) {
                                                                      x$35 = m$9$0[1];
                                                                      y$6 = m$9$0[2];
                                                                      body$6 = m$9$0[3];
                                                                      ph$11$0 = mode$2;
                                                                      if ((ph$11$0 === "expr")) {
                                                                        rval$1 = $it$8.body(expr$0, "expr");
                                                                      } else {
                                                                        other$14 = ph$11$0;
                                                                        rval$1 = Node(["splice"], ({}), ["for(", $it$8.translate(x$35, "expr"), " of ", $it$8.translate(y$6, "expr"), "){", $it$8.translate(body$6, "stmt"), "}"]);
                                                                      }
                                                                    } else {
                                                                      if (($$24447$0 && ((m$9$0[0] === "js_try") && ((attempt$0 = m$9$0[1]), (t1$4 = m$9$0[2]), ((t1$4 instanceof Array) && ((t2$2 = t1$4.length), ((t2$2 === 4) && ((t1$4[0] === "lambda") && ((t3$0 = t1$4[1]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 1) && ((bridge$$24442$0 = t3$0[0]), (((bridge$$24442$0 instanceof Array) && ((t0$20 = bridge$$24442$0.length), ((t0$20 === 2) && ((bridge$$24442$0[0] === "symbol") && ((v$5 = bridge$$24442$0[1]), true))))) || ((bridge$$24442$0 instanceof Array) && ((t0$21 = bridge$$24442$0.length), ((t0$21 === 2) && ((bridge$$24442$0[0] === "variable") && ((v$5 = bridge$$24442$0[1]), true))))))))))))))))))) {
                                                                        body$7 = t1$4[2];
                                                                        t1$4[3];
                                                                        finally$1 = m$9$0[3];
                                                                        m$29$0 = mode$2;
                                                                        if ((m$29$0 === "expr")) {
                                                                          r$5 = $it$8.body(expr$0, "expr");
                                                                        } else {
                                                                          other$15 = m$29$0;
                                                                          r$5 = Node(["splice"], ({}), ["try{", $it$8.translate(attempt$0, "stmt"), "}catch(", v$5, "){", $it$8.translate(body$7, "stmt"), "}"]);
                                                                        }
                                                                        m$28$0 = finally$1;
                                                                        if (((m$28$0 instanceof Array) && ((t0$22 = m$28$0.length), ((t0$22 === 1) && (m$28$0[0] === "void"))))) {
                                                                          rval$1 = r$5;
                                                                        } else {
                                                                          other$16 = m$28$0;
                                                                          rval$1 = Node(["splice"], ({}), [r$5, "finally{", $it$8.translate(other$16, "stmt"), "}"]);
                                                                        }
                                                                      } else {
                                                                        if (($$24445$0 && ((t0$7 === 2) && (m$9$0[0] === "raw")))) {
                                                                          x$36 = m$9$0[1];
                                                                          rval$1 = x$36;
                                                                        } else {
                                                                          other$17 = m$9$0;
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
  m$8$0 = rval$1;
  if (getChecker(Node)(m$8$0)) {
    n$0 = m$8$0;
    $targ$6 = expr$0;
    (n$0.props["origin"] = $targ$6);
    [];
    return n$0;
  } else {
    if ((typeof(m$8$0) === "string")) {
      return Node(["splice"], ({"origin": expr$0}), [rval$1]);
    } else {
      return ___match_error(m$8$0);
    }
  }
}));
__amp____colon__(Translator$0, __amp____colon__(((accum$0 = ({})), (accum$0["::name"] = "Translator"), accum$0), ((accum$1 = ({})), (accum$1["::egclass"] = true), accum$1)));
$targ$7 = Translator$0;
(exports["Translator"] = $targ$7);
[];
//# sourceURL=<compile-source>
