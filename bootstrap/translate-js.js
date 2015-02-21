
"use strict";require("earlgrey-runtime/5");var accum$0 = undefined;var accum$1 = undefined;var $targ$7 = undefined;var $0$0 = undefined;var gensym$0 = undefined;var Body$0 = undefined;var $1$0 = undefined;var __lt____gt__$0 = undefined;var $2$0 = undefined;var jsKeywords$0 = undefined;var join$0 = undefined;var js_op_table2$0 = undefined;var js_op_table$0 = undefined;var Translator$0 = undefined;$0$0 = require("./util");gensym$0 = $0$0.gensym;Body$0 = $0$0.Body;$1$0 = require("./pp");__lt____gt__$0 = $1$0["<>"];$2$0 = require("./expand");jsKeywords$0 = $2$0.jsKeywords;join$0 = function join(things$0, sep$0) {
  var m$0 = undefined;var acc$0 = undefined;var temp$0 = undefined;acc$0 = [];temp$0 = null;m$0 = null;$3: for (var _iterator = enumerate(things$0)[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$0 = _step.value;
    var ph$0$0 = undefined;var x$0 = undefined;var t0$0 = undefined;var t1$0 = undefined;t0$0 = m$0;if (Array.isArray(t0$0) && (t1$0 = t0$0.length, t1$0 === 2)) {
      ph$0$0 = t0$0[0];x$0 = t0$0[1];if (ph$0$0 === 0) {
        temp$0 = x$0;
      } else {
        temp$0 = [",", x$0];
      }acc$0.push(temp$0);
    } else {
      ___match_error(m$0);
    }
  }return acc$0;
};js_op_table2$0 = { "+": "+", "-": "-", "*": "*", "/": "/", mod: "%", "&.": "&", "|.": "|", "^.": "^", "~": "~", and: "&&", or: "||", not: "!", "==": "===", "!=": "!==", "===": "===", "!==": "!==", "<": "<", ">": ">", "<=": "<=", ">=": ">=", "<<": "<<", ">>": ">>", ">>>": ">>>", "instanceof": " instanceof ", "++": "++", "--": "--" };js_op_table$0 = { ___plus: "+", ___minus: "-", ___times: "*", ___div: "/", ___mod: "%", ___binxor: "^", ___binand: "&", ___binor: "|", ___binnot: "~", ___and: "&&", ___or: "||", ___not: "!", ___is: "===", ___isnt: "!==", ___eq: "===", ___neq: "!==", ___lt: "<", ___gt: ">", ___lte: "<=", ___gte: ">=", ___shl: "<<", ___shr: ">>", ___shr2: ">>>", ___in: " in ", ___instanceof: " instanceof ", ___plusplus: "++", ___minusminus: "--" };Translator$0 = function Translator() {
  var m$2$0 = undefined;var $targ$0 = undefined;var $targ$1 = undefined;var prelude$0 = undefined;var t0$1 = undefined;var m$1$0 = undefined;var $it$0 = undefined;if (!getChecker(Translator$0)(this)) {
    $it$0 = Object.create(Translator$0.prototype);
  } else {
    $it$0 = this;
  }m$1$0 = arguments;t0$1 = m$1$0.length;if (t0$1 >= 0 && t0$1 <= 2) {
    if (0 >= t0$1) {
      prelude$0 = null;
    } else {
      prelude$0 = m$1$0[0];
    }$it$0.globvar = 1 >= t0$1 ? null : m$1$0[1];$targ$0 = {};$it$0.cache = $targ$0;[];$targ$1 = [];$it$0.prepend = $targ$1;[];m$2$0 = prelude$0;if (m$2$0 === null) {
      undefined;
    } else {
      if (typeof m$2$0 === "string") {
        $it$0.prepend.push(prelude$0);
      } else {
        $it$0.prepend.push($it$0.translate(___serialize_ast(prelude$0), "stmt"));
      }
    }
  } else {
    ___match_error(m$1$0);
  }return $it$0;
};Translator$0.prototype.register_value = function register_value(v$0, id$0) {
  var temp$1 = undefined;var $targ$2 = undefined;var name$0 = undefined;var m$3$0 = undefined;var $it$1 = undefined;var self$0 = undefined;$it$1 = this;self$0 = this;m$3$0 = send($it$1.cache, id$0);if (m$3$0 === void 0) {
    temp$1 = ["symbol", gensym$0()];$targ$2 = temp$1;$it$1.cache[id$0] = $targ$2;[];$it$1.prepend.push($it$1.translate(["declare", temp$1, ___serialize_ast(v$0)], "stmt"));return temp$1;
  } else {
    name$0 = m$3$0;return name$0;
  }
};Translator$0.prototype.register_raw = function register_raw(raw$0, id$1) {
  var temp$2 = undefined;var $targ$3 = undefined;var name$1 = undefined;var m$4$0 = undefined;var $it$2 = undefined;var self$1 = undefined;$it$2 = this;self$1 = this;m$4$0 = send($it$2.cache, id$1);if (m$4$0 === void 0) {
    temp$2 = ["symbol", gensym$0()];$targ$3 = temp$2;$it$2.cache[id$1] = $targ$3;[];$it$2.prepend.push($it$2.translate(["declare", temp$2, ["raw", raw$0]], "stmt"));return temp$2;
  } else {
    name$1 = m$4$0;return name$1;
  }
};Translator$0.prototype.dump_store = function dump_store() {
  var rval$0 = undefined;var $targ$4 = undefined;var $it$3 = undefined;var self$2 = undefined;$it$3 = this;self$2 = this;rval$0 = $it$3.prepend.join("\n");$targ$4 = [];$it$3.prepend = $targ$4;[];return rval$0;
};Translator$0.prototype.mangle = function mangle(name$2) {
  var i$0 = undefined;var tr$0 = undefined;var r$0 = undefined;var $it$4 = undefined;var self$3 = undefined;$it$4 = this;self$3 = this;tr$0 = { "+": "__plus__", "-": "__minus__", "*": "__asterisk__", "/": "__slash__", "%": "__percent__", "^": "__caret__", "#": "__hash__", "&": "__amp__", "|": "__pipe__", "@": "__at__", "!": "__bang__", "?": "__qmark__", "=": "__equal__", "<": "__lt__", ">": "__gt__", "~": "__tilde__", ".": "__dot__", ":": "__colon__" };r$0 = [];i$0 = 0;$4: for (null; i$0 < name$2.length; ++i$0) {
    var c$0 = undefined;c$0 = send(name$2, i$0);r$0.push(send(tr$0, c$0) || c$0);
  }return r$0.join("");
};Translator$0.prototype.body = function body(orig$0, mode$0) {
  var t0$2 = undefined;var t1$1 = undefined;var t2$0 = undefined;var x$1 = undefined;var stmts$0 = undefined;var ret$0 = undefined;var m$6 = undefined;var acc$1 = undefined;var temp$3 = undefined;var stmts$1 = undefined;var ret$1 = undefined;var other$0 = undefined;var variable$0 = undefined;var t0$3 = undefined;var m$5$0 = undefined;var $targ$5 = undefined;var b$0 = undefined;var trst$0 = undefined;var $it$5 = undefined;var self$4 = undefined;$it$5 = this;self$4 = this;$targ$5 = orig$0;t0$2 = getProjector(Body$0)($targ$5);if (t0$2[0] && (t1$1 = t0$2[1], t2$0 = t1$1.length, t2$0 >= 0)) {
    b$0 = Array.prototype.slice.call(t1$1, 0);
  } else {
    ___match_error($targ$5);
  }trst$0 = function trst(stmt$0) {
    return $it$5.translate(stmt$0, "stmt");
  };m$5$0 = mode$0;if (m$5$0 === "expr") {
    x$1 = ["send", ["lambda", [], orig$0], ["array"]];return $it$5.translate(x$1, mode$0);
  } else {
    if (m$5$0 === "return") {
      stmts$0 = b$0.slice(0, -1);ret$0 = send(b$0, b$0.length - 1);return ENode(["splice"], {}, [stmts$0.map(trst$0), $it$5.translate(ret$0, "return")]);
    } else {
      if (m$5$0 === "stmt") {
        return ENode(["splice"], {}, (acc$1 = [], temp$3 = null, m$6 = null, (function () {
          $5: for (var _iterator2 = b$0[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
            m$6 = _step2.value;
            var x$2 = undefined;x$2 = m$6;temp$3 = trst$0(x$2);acc$1.push(temp$3);
          }
        })(), acc$1));
      } else {
        if (Array.isArray(m$5$0) && (t0$3 = m$5$0.length, t0$3 === 2 && m$5$0[0] === "return")) {
          variable$0 = m$5$0[1];stmts$1 = b$0.slice(0, -1);ret$1 = send(b$0, b$0.length - 1);return ENode(["splice"], {}, [stmts$1.map(trst$0), $it$5.translate(ret$1, mode$0)]);
        } else {
          other$0 = m$5$0;throw ErrorFactory(["syntax", "mode"]).create("Unknown translate mode", { mode: mode$0 });
        }
      }
    }
  }
};Translator$0.prototype.expr = function expr(x$3, temp$4$0) {
  var t0$4 = undefined;var other$1 = undefined;var variable$1 = undefined;var t0$5 = undefined;var t1$2 = undefined;var mode$1 = undefined;var ph$1$0 = undefined;var $it$6 = undefined;var self$5 = undefined;$it$6 = this;self$5 = this;t0$4 = temp$4$0;mode$1 = t0$4;ph$1$0 = t0$4;if (ph$1$0 === "expr") {
    return x$3;
  } else {
    if (ph$1$0 === "stmt") {
      return ENode(["splice"], {}, [x$3, ";"]);
    } else {
      if (ph$1$0 === "return") {
        return ENode(["splice"], {}, ["return ", x$3, ";"]);
      } else {
        t0$5 = ph$1$0;t1$2 = t0$5.length;if (t1$2 === 2 && t0$5[0] === "return") {
          variable$1 = t0$5[1];return ENode(["splice"], {}, [variable$1, "=", x$3, ";"]);
        } else {
          other$1 = ph$1$0;throw ErrorFactory(["syntax", "mode"]).create("Unknown translate mode", { mode: mode$1 });
        }
      }
    }
  }
};Translator$0.prototype.op = function op(op$0, a$0, b$1) {
  var $$24491$0 = undefined;var $$24492$0 = undefined;var $$24493$0 = undefined;var t0$6 = undefined;var t1$3 = undefined;var t2$1 = undefined;var m$7$0 = undefined;var e$0 = undefined;var $it$7 = undefined;var self$6 = undefined;$it$7 = this;self$6 = this;m$7$0 = [a$0, b$1];if (($$24491$0 = Array.isArray(m$7$0)) && (t0$6 = m$7$0.length, ($$24493$0 = t0$6 === 2) && (t1$3 = m$7$0[0], Array.isArray(t1$3) && (t2$1 = t1$3.length, t2$1 === 1 && t1$3[0] === "void")))) {
    m$7$0[1];e$0 = ENode(["splice"], {}, [op$0, $it$7.translate(b$1, "expr")]);
  } else {
    if ($$24493$0 && (m$7$0[0], t1$3 = m$7$0[1], Array.isArray(t1$3) && (t2$1 = t1$3.length, t2$1 === 1 && t1$3[0] === "void"))) {
      e$0 = ENode(["splice"], {}, [$it$7.translate(a$0, "expr"), op$0]);
    } else {
      e$0 = ENode(["splice"], {}, [$it$7.translate(a$0, "expr"), op$0, $it$7.translate(b$1, "expr")]);
    }
  }return ENode(["splice"], {}, ["(", e$0, ")"]);
};Translator$0.prototype.translate = function translate(expr$0, mode$2) {
  var repl$0 = undefined;var $it$12 = undefined;var $it$11 = undefined;var $it$10 = undefined;var $it$9 = undefined;var bridge$$24655$0 = undefined;var bridge$$24654$0 = undefined;var other$2 = undefined;var id$2 = undefined;var bridge$$24653$0 = undefined;var m$10$0 = undefined;var r$1 = undefined;var t0$8 = undefined;var t0$9 = undefined;var x$4 = undefined;var x$7 = undefined;var x$6 = undefined;var m$13$0 = undefined;var x$5 = undefined;var x$8 = undefined;var otherwise$0 = undefined;var m$12$0 = undefined;var x$10 = undefined;var x$9 = undefined;var $$24864$0 = undefined;var $$24865$0 = undefined;var $$24866$0 = undefined;var t0$10 = undefined;var m$14$0 = undefined;var m$15 = undefined;var acc$2 = undefined;var temp$5 = undefined;var x$11 = undefined;var op$1 = undefined;var x$13 = undefined;var codevar$0 = undefined;var m$16 = undefined;var acc$3 = undefined;var temp$6 = undefined;var r$2 = undefined;var f$5 = undefined;var m$17 = undefined;var acc$4 = undefined;var temp$9 = undefined;var v$3 = undefined;var all_strings$0 = undefined;var r$3 = undefined;var m$18$0 = undefined;var m$19 = undefined;var acc$5 = undefined;var temp$10 = undefined;var r$4 = undefined;var name$3 = undefined;var x$18 = undefined;var other$4 = undefined;var x$19 = undefined;var other$5 = undefined;var bridge$$24577$0 = undefined;var x$20 = undefined;var other$6 = undefined;var bridge$$24576$0 = undefined;var bridge$$24582$0 = undefined;var x$21 = undefined;var other$7 = undefined;var bridge$$24581$0 = undefined;var x$22 = undefined;var x$23 = undefined;var core$0 = undefined;var m$20$0 = undefined;var flatten$0 = undefined;var m$23 = undefined;var acc$6 = undefined;var temp$11 = undefined;var m$24 = undefined;var acc$7 = undefined;var temp$12 = undefined;var m$25 = undefined;var acc$8 = undefined;var temp$13 = undefined;var xs$0 = undefined;var m$21$0 = undefined;var all_args$0 = undefined;var args$3 = undefined;var isdecl$0 = undefined;var x$30 = undefined;var m$26 = undefined;var acc$9 = undefined;var temp$14 = undefined;var decls$0 = undefined;var x$31 = undefined;var x$32 = undefined;var x$33 = undefined;var y$3 = undefined;var t0$19 = undefined;var t1$10 = undefined;var m$27$0 = undefined;var other$10 = undefined;var other$11 = undefined;var other$12 = undefined;var other$13 = undefined;var other$14 = undefined;var t0$20 = undefined;var t0$21 = undefined;var other$15 = undefined;var m$29$0 = undefined;var other$16 = undefined;var t0$22 = undefined;var m$28$0 = undefined;var r$5 = undefined;var other$17 = undefined;var x$37 = undefined;var attempt$0 = undefined;var v$5 = undefined;var body$7 = undefined;var finally$1 = undefined;var x$36 = undefined;var y$6 = undefined;var body$6 = undefined;var ph$11$0 = undefined;var x$35 = undefined;var y$5 = undefined;var body$5 = undefined;var ph$10$0 = undefined;var x$34 = undefined;var y$4 = undefined;var z$0 = undefined;var body$4 = undefined;var ph$9$0 = undefined;var test$2 = undefined;var body$3 = undefined;var ph$8$0 = undefined;var label$2 = undefined;var body$2 = undefined;var ph$7$0 = undefined;var value$5 = undefined;var ph$6$0 = undefined;var value$4 = undefined;var all$0 = undefined;var value$3 = undefined;var label$1 = undefined;var label$0 = undefined;var value$2 = undefined;var vars$0 = undefined;var body$1 = undefined;var s$2 = undefined;var args$5 = undefined;var _args$0 = undefined;var lhs$0 = undefined;var rhs$1 = undefined;var obj$0 = undefined;var msg$3 = undefined;var rhs$0 = undefined;var binding$1 = undefined;var value$0 = undefined;var ph$5$0 = undefined;var binding$0 = undefined;var ph$4$0 = undefined;var test$1 = undefined;var pos$1 = undefined;var neg$0 = undefined;var ph$3$0 = undefined;var test$0 = undefined;var pos$0 = undefined;var ph$2$0 = undefined;var bindings$0 = undefined;var body$0 = undefined;var generator$0 = undefined;var args$2 = undefined;var args$1 = undefined;var f$4 = undefined;var msg$2 = undefined;var f$3 = undefined;var args$0 = undefined;var f$2 = undefined;var msg$1 = undefined;var s$1 = undefined;var f$1 = undefined;var msg$0 = undefined;var f$0 = undefined;var v$1 = undefined;var s$0 = undefined;var $$24619$0 = undefined;var $$24620$0 = undefined;var $$24621$0 = undefined;var $$24622$0 = undefined;var $$24623$0 = undefined;var t0$7 = undefined;var t1$4 = undefined;var t2$2 = undefined;var t3$0 = undefined;var t4$0 = undefined;var bridge$$24561$0 = undefined;var bridge$$24616$0 = undefined;var m$9$0 = undefined;var $targ$6 = undefined;var n$0 = undefined;var m$8$0 = undefined;var rval$1 = undefined;var $it$8 = undefined;var self$7 = undefined;$it$8 = this;self$7 = this;m$9$0 = expr$0;if (($$24619$0 = Array.isArray(m$9$0)) && (t0$7 = m$9$0.length, t0$7 === 2 && m$9$0[0] === "symbol")) {
    s$0 = m$9$0[1];rval$1 = $it$8.expr($it$8.mangle(s$0), mode$2);
  } else {
    if ($$24619$0 && (t0$7 === 1 && m$9$0[0] === "void")) {
      rval$1 = $it$8.expr("null", mode$2);
    } else {
      if ($$24619$0 && (t0$7 === 2 && m$9$0[0] === "value")) {
        v$1 = m$9$0[1];m$10$0 = v$1;if (typeof m$10$0 === "string") {
          repl$0 = { "\"": "\\\"", "\n": "\\n", "\\": "\\\\" };v$1 = v$1.replace(RegExp("((?:(?:\"|\\\\)|\n))", "g"), function (m$11) {
            return send(repl$0, m$11);
          });r$1 = "\"" + v$1 + "\"";
        } else {
          if (m$10$0 === void 0) {
            r$1 = "(void 0)";
          } else {
            if (getChecker(RegExp)(m$10$0)) {
              $it$9 = String(v$1);$it$10 = $it$9.slice(1, -1);$it$11 = $it$10.replace(RegExp("/", "g"), "\\/");$it$12 = $it$11.replace(RegExp("\\n", "g"), "\\n");r$1 = "/".concat($it$12).concat("/");
            } else {
              bridge$$24653$0 = m$10$0;if ((bridge$$24654$0 = bridge$$24653$0, (bridge$$24655$0 = bridge$$24654$0, typeof bridge$$24655$0 === "number" || bridge$$24655$0 === true) || bridge$$24654$0 === false) || bridge$$24653$0 === null) {
                r$1 = String(v$1);
              } else {
                if (___hasprop(m$10$0, "::id") && (id$2 = m$10$0["::id"], id$2)) {
                  r$1 = $it$8.translate($it$8.register_value(v$1, id$2), mode$2);
                } else {
                  other$2 = m$10$0;throw ErrorFactory(["cannot_serialize"]).create("Cannot serialize value", { value: v$1 });
                }
              }
            }
          }
        }rval$1 = $it$8.expr(r$1, mode$2);
      } else {
        if ($$24619$0 && (($$24621$0 = t0$7 === 3) && (($$24622$0 = m$9$0[0] === "send") && (t1$4 = m$9$0[1], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && (t1$4[0] === "variable" && (t1$4[1] === "___node" && (t3$0 = m$9$0[2], Array.isArray(t3$0) && (t4$0 = t3$0.length, t4$0 === 2 && t3$0[0] === "value"))))))))) {
          f$0 = t3$0[1];rval$1 = f$0;
        } else {
          if ($$24622$0 && (bridge$$24561$0 = m$9$0[1], (Array.isArray(bridge$$24561$0) && (t0$8 = bridge$$24561$0.length, t0$8 === 2 && (bridge$$24561$0[0] === "symbol" && bridge$$24561$0[1] === "___js_fetch")) || Array.isArray(bridge$$24561$0) && (t0$9 = bridge$$24561$0.length, t0$9 === 2 && (bridge$$24561$0[0] === "variable" && bridge$$24561$0[1] === "___js_fetch"))) && (t1$4 = m$9$0[2], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 3 && t1$4[0] === "array")))) {
            f$1 = t1$4[1];msg$0 = t1$4[2];x$4 = ENode(["splice"], {}, [$it$8.translate(f$1, "expr"), "[", $it$8.translate(msg$0, "expr"), "]"]);rval$1 = $it$8.expr(x$4, mode$2);
          } else {
            if ($$24622$0 && (f$2 = m$9$0[1], t1$4 = m$9$0[2], msg$1 = t1$4, Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && t1$4[0] === "value"))) {
              s$1 = t1$4[1];m$12$0 = null;if (typeof s$1 === "string" && s$1.match(RegExp("(?:^(?:[a-zA-Z_$]+)$)", ""))) {
                x$5 = ENode(["splice"], {}, [(m$13$0 = $it$8.translate(f$2, "expr"), getChecker(RegExp("^\\d+$", ""))(m$13$0) ? (x$6 = m$13$0, "(" + x$6 + ")") : (x$7 = m$13$0, x$7)), ".", $it$8.translate(["symbol", s$1], "expr")]);rval$1 = $it$8.expr(x$5, mode$2);
              } else {
                otherwise$0 = m$12$0;x$8 = ENode(["splice"], {}, [$it$8.translate(f$2, "expr"), "[", $it$8.translate(msg$1, "expr"), "]"]);rval$1 = $it$8.expr(x$8, mode$2);
              }
            } else {
              if ($$24622$0 && (f$3 = m$9$0[1], t1$4 = m$9$0[2], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 >= 1 && t1$4[0] === "array"))) {
                args$0 = Array.prototype.slice.call(t1$4, 1);m$14$0 = f$3;if (($$24864$0 = Array.isArray(m$14$0)) && (t0$10 = m$14$0.length, ($$24866$0 = t0$10 === 2) && m$14$0[0] === "symbol")) {
                  x$9 = m$14$0[1];op$1 = send(js_op_table$0, x$9);
                } else {
                  if ($$24866$0 && m$14$0[0] === "variable") {
                    x$10 = m$14$0[1];op$1 = send(js_op_table2$0, x$10);
                  } else {
                    op$1 = null;
                  }
                }if (op$1) {
                  rval$1 = $it$8.expr($it$8.op(op$1, args$0[0], args$0[1]), mode$2);
                } else {
                  x$11 = ENode(["splice"], {}, [$it$8.translate(f$3, "expr"), "(", join$0((acc$2 = [], temp$5 = null, m$15 = null, (function () {
                    $6: for (var _iterator3 = args$0[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
                      m$15 = _step3.value;
                      var x$12 = undefined;x$12 = m$15;temp$5 = $it$8.translate(x$12, "expr");acc$2.push(temp$5);
                    }
                  })(), acc$2), ","), ")"]);rval$1 = $it$8.expr(x$11, mode$2);
                }
              } else {
                if ($$24622$0) {
                  f$4 = m$9$0[1];msg$2 = m$9$0[2];codevar$0 = "send";x$13 = ENode(["splice"], {}, [codevar$0, "(", $it$8.translate(f$4, "expr"), ",", $it$8.translate(msg$2, "expr"), ")"]);rval$1 = $it$8.expr(x$13, mode$2);
                } else {
                  if ($$24619$0 && (($$24621$0 = t0$7 >= 1) && m$9$0[0] === "array")) {
                    args$1 = Array.prototype.slice.call(m$9$0, 1);r$2 = ENode(["splice"], {}, ["[", join$0((acc$3 = [], temp$6 = null, m$16 = null, (function () {
                      $7: for (var _iterator4 = args$1[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
                        m$16 = _step4.value;
                        var x$14 = undefined;x$14 = m$16;temp$6 = $it$8.translate(x$14, "expr");acc$3.push(temp$6);
                      }
                    })(), acc$3), ","), "]"]);rval$1 = $it$8.expr(r$2, mode$2);
                  } else {
                    if ($$24621$0 && m$9$0[0] === "object") {
                      args$2 = Array.prototype.slice.call(m$9$0, 1);all_strings$0 = args$2.every(function (temp$7$0) {
                        var t0$11 = undefined;var t1$5 = undefined;var other$3 = undefined;var v$2 = undefined;var t0$12 = undefined;var t1$6 = undefined;var ph$12$0 = undefined;var y$0 = undefined;t0$11 = temp$7$0;if (Array.isArray(t0$11) && (t1$5 = t0$11.length, t1$5 === 3 && t0$11[0] === "array")) {
                          ph$12$0 = t0$11[1];y$0 = t0$11[2];
                        } else {
                          ___match_error(temp$7$0);
                        }t0$12 = ph$12$0;t1$6 = t0$12.length;if (t1$6 === 2 && t0$12[0] === "value") {
                          v$2 = t0$12[1];return true;
                        } else {
                          other$3 = ph$12$0;return false;
                        }
                      });if (all_strings$0) {
                        r$3 = ENode(["splice"], {}, ["({", (f$5 = function f(temp$8$0) {
                          var t0$13 = undefined;var t1$7 = undefined;var a$1 = undefined;var b$2 = undefined;var x$15 = undefined;var y$1 = undefined;t0$13 = temp$8$0;if (Array.isArray(t0$13) && (t1$7 = t0$13.length, t1$7 === 3 && t0$13[0] === "array")) {
                            x$15 = t0$13[1];y$1 = t0$13[2];
                          } else {
                            ___match_error(temp$8$0);
                          }a$1 = $it$8.translate(x$15, "expr");b$2 = $it$8.translate(y$1, "expr");return ENode(["splice"], {}, [a$1, ":", b$2]);
                        }, join$0(args$2.map(f$5), ",")), "})"]);
                      } else {
                        v$3 = gensym$0();r$3 = ENode(["splice"], {}, ["(function(){let ", v$3, "={};", (acc$4 = [], temp$9 = null, m$17 = null, (function () {
                          $8: for (var _iterator5 = args$2[Symbol.iterator](), _step5; !(_step5 = _iterator5.next()).done;) {
                            m$17 = _step5.value;
                            var x$16 = undefined;var y$2 = undefined;var t0$14 = undefined;var t1$8 = undefined;t0$14 = m$17;if (Array.isArray(t0$14) && (t1$8 = t0$14.length, t1$8 === 3 && t0$14[0] === "array")) {
                              x$16 = t0$14[1];y$2 = t0$14[2];temp$9 = ENode(["splice"], {}, [v$3, "[", $it$8.translate(x$16, "expr"), "]=", $it$8.translate(y$2, "expr"), ";"]);acc$4.push(temp$9);
                            } else {
                              ___match_error(m$17);
                            }
                          }
                        })(), acc$4), "return ", v$3, "})()"]);
                      }rval$1 = $it$8.expr(r$3, mode$2);
                    } else {
                      if ($$24619$0 && (t0$7 >= 3 && t0$7 <= 4 && (m$9$0[0] === "lambda" && (bindings$0 = m$9$0[1], body$0 = m$9$0[2], t1$4 = 3 >= t0$7 ? ["value", false] : m$9$0[3], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && t1$4[0] === "value"))))) {
                        generator$0 = t1$4[1];m$18$0 = expr$0.name;if (__in__(m$18$0, jsKeywords$0)) {
                          name$3 = "";
                        } else {
                          if (getChecker(RegExp("^[$_a-zA-Z0-9]*$", ""))(m$18$0)) {
                            name$3 = " " + expr$0.name;
                          } else {
                            name$3 = "";
                          }
                        }r$4 = ENode(["splice"], {}, ["(function", generator$0 ? "*" : "", name$3, "(", join$0((acc$5 = [], temp$10 = null, m$19 = null, (function () {
                          $9: for (var _iterator6 = bindings$0[Symbol.iterator](), _step6; !(_step6 = _iterator6.next()).done;) {
                            m$19 = _step6.value;
                            var x$17 = undefined;x$17 = m$19;temp$10 = $it$8.translate(x$17, "expr");acc$5.push(temp$10);
                          }
                        })(), acc$5), ","), "){", $it$8.body(body$0, "return"), "})"]);rval$1 = $it$8.expr(r$4, mode$2);
                      } else {
                        if ($$24619$0 && (($$24621$0 = t0$7 === 4) && (($$24622$0 = m$9$0[0] === "if") && (test$0 = m$9$0[1], pos$0 = m$9$0[2], t1$4 = m$9$0[3], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && (t1$4[0] === "value" && t1$4[1] === void 0)))))) {
                          ph$2$0 = mode$2;if (ph$2$0 === "expr") {
                            x$18 = ENode(["splice"], {}, ["(", $it$8.translate(test$0, "expr"), "?", $it$8.translate(pos$0, "expr"), ":undefined)"]);rval$1 = $it$8.expr(x$18, "expr");
                          } else {
                            other$4 = ph$2$0;rval$1 = ENode(["splice"], {}, ["if(", $it$8.translate(test$0, "expr"), "){", $it$8.translate(pos$0, mode$2), "}"]);
                          }
                        } else {
                          if ($$24622$0) {
                            test$1 = m$9$0[1];pos$1 = m$9$0[2];neg$0 = m$9$0[3];ph$3$0 = mode$2;if (ph$3$0 === "expr") {
                              x$19 = ENode(["splice"], {}, ["(", $it$8.translate(test$1, "expr"), "?", $it$8.translate(pos$1, "expr"), ":", $it$8.translate(neg$0, "expr"), ")"]);rval$1 = $it$8.expr(x$19, "expr");
                            } else {
                              other$5 = ph$3$0;rval$1 = ENode(["splice"], {}, ["if(", $it$8.translate(test$1, "expr"), "){", $it$8.translate(pos$1, mode$2), "}else{", $it$8.translate(neg$0, mode$2), "}"]);
                            }
                          } else {
                            if ($$24619$0 && (($$24621$0 = t0$7 === 3) && (($$24622$0 = m$9$0[0] === "declare") && (binding$0 = m$9$0[1], t1$4 = m$9$0[2], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && (t1$4[0] === "value" && t1$4[1] === void 0)))))) {
                              ph$4$0 = mode$2;bridge$$24576$0 = ph$4$0;if ((bridge$$24577$0 = bridge$$24576$0, bridge$$24577$0 === "expr" || bridge$$24577$0 === "return") || (x$20 = bridge$$24576$0, x$20 instanceof Array && x$20[0] === "return")) {
                                throw "Invalid in expr ctx";
                              } else {
                                other$6 = ph$4$0;if ($it$8.globvar && binding$0.top) {
                                  rval$1 = "";
                                } else {
                                  rval$1 = ENode(["splice"], {}, ["let ", $it$8.translate(binding$0, "expr"), ";"]);
                                }
                              }
                            } else {
                              if ($$24622$0) {
                                binding$1 = m$9$0[1];value$0 = m$9$0[2];ph$5$0 = mode$2;bridge$$24581$0 = ph$5$0;if ((bridge$$24582$0 = bridge$$24581$0, bridge$$24582$0 === "expr" || bridge$$24582$0 === "return") || (x$21 = bridge$$24581$0, x$21 instanceof Array && x$21[0] === "return")) {
                                  throw "Invalid in expr ctx";
                                } else {
                                  other$7 = ph$5$0;rval$1 = ENode(["splice"], {}, ["let ", $it$8.translate(binding$1, "expr"), "=", $it$8.translate(value$0, "expr"), ";"]);
                                }
                              } else {
                                if ($$24621$0 && (($$24622$0 = m$9$0[0] === "assign") && (t1$4 = m$9$0[1], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 3 && t1$4[0] === "send")))) {
                                  obj$0 = t1$4[1];msg$3 = t1$4[2];rhs$0 = m$9$0[2];x$22 = ENode(["splice"], {}, ["(", $it$8.translate(obj$0, "expr"), "[", $it$8.translate(msg$3, "expr"), "]=", $it$8.translate(rhs$0, "expr"), ")"]);rval$1 = $it$8.expr(x$22, mode$2);
                                } else {
                                  if ($$24622$0 && (lhs$0 = t1$4, Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && t1$4[0] === "variable"))) {
                                    t1$4[1];rhs$1 = m$9$0[2];m$20$0 = mode$2;if (m$20$0 === "stmt") {
                                      rval$1 = $it$8.translate(rhs$1, ["return", $it$8.translate(lhs$0, "expr")]);
                                    } else {
                                      core$0 = ENode(["splice"], {}, [$it$8.translate(lhs$0, "expr"), "=", $it$8.translate(rhs$1, "expr")]);x$23 = ENode(["splice"], {}, ["(", core$0, ")"]);rval$1 = $it$8.expr(x$23, mode$2);
                                    }
                                  } else {
                                    if ($$24619$0 && (t0$7 === 1 && m$9$0[0] === "multi")) {
                                      if (mode$2 === "stmt") {
                                        rval$1 = "";
                                      } else {
                                        rval$1 = "null";
                                      }
                                    } else {
                                      if ($$24619$0 && (($$24621$0 = t0$7 >= 1) && m$9$0[0] === "multi")) {
                                        _args$0 = Array.prototype.slice.call(m$9$0, 1);flatten$0 = function flatten(args$4) {
                                          var m$22 = undefined;var res$0 = undefined;res$0 = [];m$22 = null;$10: for (var _iterator7 = args$4[Symbol.iterator](), _step7; !(_step7 = _iterator7.next()).done;) {
                                            m$22 = _step7.value;
                                            var t0$15 = undefined;var t0$16 = undefined;var other$8 = undefined;var more$0 = undefined;var bridge$$25330$0 = undefined;bridge$$25330$0 = m$22;if (Array.isArray(bridge$$25330$0) && (t0$15 = bridge$$25330$0.length, t0$15 >= 1 && (bridge$$25330$0[0] === "multi" && (more$0 = Array.prototype.slice.call(bridge$$25330$0, 1), true))) || Array.isArray(bridge$$25330$0) && (t0$16 = bridge$$25330$0.length, t0$16 >= 1 && (bridge$$25330$0[0] === "splice" && (more$0 = Array.prototype.slice.call(bridge$$25330$0, 1), true)))) {
                                              res$0 = res$0.concat(flatten$0(more$0));
                                            } else {
                                              other$8 = m$22;res$0.push(other$8);
                                            }
                                          }return res$0;
                                        };all_args$0 = flatten$0(_args$0);acc$6 = [];temp$11 = null;m$23 = null;$11: for (var _iterator8 = all_args$0.slice(0, -1)[Symbol.iterator](), _step8; !(_step8 = _iterator8.next()).done;) {
                                          m$23 = _step8.value;
                                          var x$24 = undefined;var x$25 = undefined;var bridge$$25372$0 = undefined;var x$26 = undefined;var x$27 = undefined;var bridge$$25371$0 = undefined;var elem$0 = undefined;var ph$13$0 = undefined;var t0$17 = undefined;t0$17 = m$23;elem$0 = t0$17;ph$13$0 = t0$17;bridge$$25371$0 = ph$13$0;if ((bridge$$25372$0 = bridge$$25371$0, (x$24 = bridge$$25372$0, x$24 instanceof Array && x$24[0] === "value") || (x$25 = bridge$$25372$0, x$25 instanceof Array && x$25[0] === "symbol")) || (x$26 = bridge$$25371$0, x$26 instanceof Array && x$26[0] === "variable")) {
                                            continue $11;
                                          } else {
                                            x$27 = ph$13$0;temp$11 = x$27;
                                          }acc$6.push(temp$11);
                                        }args$3 = acc$6;if (all_args$0.length > 0) {
                                          args$3.push(send(all_args$0, all_args$0.length - 1));
                                        }isdecl$0 = function isdecl(ph$14$0) {
                                          var other$9 = undefined;var variable$2 = undefined;var value$1 = undefined;var t0$18 = undefined;var t1$9 = undefined;t0$18 = ph$14$0;t1$9 = t0$18.length;if (t1$9 === 3 && t0$18[0] === "declare") {
                                            variable$2 = t0$18[1];value$1 = t0$18[2];return true;
                                          } else {
                                            other$9 = ph$14$0;return false;
                                          }
                                        };m$21$0 = mode$2;if (args$3.length === 1) {
                                          rval$1 = $it$8.translate(args$3[0], mode$2);
                                        } else {
                                          if (m$21$0 === "expr" && !args$3.some(isdecl$0)) {
                                            acc$7 = [];temp$12 = null;m$24 = null;$12: for (var _iterator9 = args$3.slice(0, -1)[Symbol.iterator](), _step9; !(_step9 = _iterator9.next()).done;) {
                                              m$24 = _step9.value;
                                              var x$28 = undefined;x$28 = m$24;temp$12 = $it$8.translate(x$28, "expr");acc$7.push(temp$12);
                                            }xs$0 = acc$7;xs$0.push($it$8.translate(send(args$3, args$3.length - 1), mode$2));acc$8 = [];temp$13 = null;m$25 = null;$13: for (var _iterator10 = xs$0[Symbol.iterator](), _step10; !(_step10 = _iterator10.next()).done;) {
                                              m$25 = _step10.value;
                                              var x$29 = undefined;x$29 = m$25;if (x$29 !== "") {
                                                temp$13 = x$29;acc$8.push(temp$13);
                                              } else {
                                                false;
                                              }
                                            }xs$0 = acc$8;rval$1 = ENode(["splice"], {}, ["(", join$0(xs$0, ","), ")"]);
                                          } else {
                                            rval$1 = $it$8.body(["multi"].concat(args$3), mode$2);
                                          }
                                        }
                                      } else {
                                        if ($$24621$0 && m$9$0[0] === "splice") {
                                          args$5 = Array.prototype.slice.call(m$9$0, 1);rval$1 = $it$8.translate(["multi"].concat(args$5), mode$2);
                                        } else {
                                          if ($$24619$0 && (t0$7 === 2 && m$9$0[0] === "variable")) {
                                            s$2 = m$9$0[1];if ($it$8.globvar && expr$0.top && !__in__(s$2, ["this", "typeof"])) {
                                              x$30 = $it$8.globvar + "." + $it$8.mangle(s$2);
                                            } else {
                                              x$30 = $it$8.mangle(s$2);
                                            }rval$1 = $it$8.expr(x$30, mode$2);
                                          } else {
                                            if ($$24619$0 && (t0$7 === 3 && m$9$0[0] === "scope")) {
                                              vars$0 = m$9$0[1];body$1 = m$9$0[2];acc$9 = [];temp$14 = null;m$26 = null;$14: for (var _iterator11 = vars$0[Symbol.iterator](), _step11; !(_step11 = _iterator11.next()).done;) {
                                                m$26 = _step11.value;
                                                var v$4 = undefined;v$4 = m$26;temp$14 = ["declare", v$4, ["value", undefined]];acc$9.push(temp$14);
                                              }decls$0 = acc$9;rval$1 = $it$8.translate(["multi"].concat(decls$0).concat([body$1]), mode$2);
                                            } else {
                                              if ($$24619$0 && (t0$7 === 2 && m$9$0[0] === "js_new")) {
                                                value$2 = m$9$0[1];x$31 = ENode(["splice"], {}, ["(new ", $it$8.translate(value$2, "expr"), ")"]);rval$1 = $it$8.expr(x$31, mode$2);
                                              } else {
                                                if ($$24619$0 && (($$24621$0 = t0$7 >= 1 && t0$7 <= 2) && (m$9$0[0] === "js_break" && (t1$4 = 1 >= t0$7 ? ["value", null] : m$9$0[1], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && t1$4[0] === "value"))))) {
                                                  label$0 = t1$4[1];rval$1 = ENode(["splice"], {}, ["break", label$0 ? " " + label$0 : "", ";"]);
                                                } else {
                                                  if ($$24621$0 && (m$9$0[0] === "js_continue" && (t1$4 = 1 >= t0$7 ? ["value", null] : m$9$0[1], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && t1$4[0] === "value")))) {
                                                    label$1 = t1$4[1];rval$1 = ENode(["splice"], {}, ["continue", label$1 ? " " + label$1 : "", ";"]);
                                                  } else {
                                                    if ($$24619$0 && (t0$7 === 2 && m$9$0[0] === "js_return")) {
                                                      value$3 = m$9$0[1];rval$1 = ENode(["splice"], {}, ["return ", $it$8.translate(value$3, "expr"), ";"]);
                                                    } else {
                                                      if ($$24619$0 && (t0$7 === 3 && (m$9$0[0] === "js_yield" && (value$4 = m$9$0[1], t1$4 = m$9$0[2], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && t1$4[0] === "value"))))) {
                                                        all$0 = t1$4[1];x$32 = ENode(["splice"], {}, ["(yield", all$0 ? "*" : "", " ", $it$8.translate(value$4, "expr"), ")"]);rval$1 = $it$8.expr(x$32, mode$2);
                                                      } else {
                                                        if ($$24619$0 && (($$24621$0 = t0$7 === 2) && m$9$0[0] === "js_delete")) {
                                                          ph$6$0 = m$9$0[1];t0$19 = ph$6$0;if (Array.isArray(t0$19) && (t1$10 = t0$19.length, t1$10 === 3 && t0$19[0] === "send")) {
                                                            x$33 = t0$19[1];y$3 = t0$19[2];rval$1 = ENode(["splice"], {}, ["delete ", $it$8.translate(x$33, "expr"), "[", $it$8.translate(y$3, "expr"), "];"]);
                                                          } else {
                                                            throw ErrorFactory(["translate", "delete"]).create("Invalid argument for delete");
                                                          }
                                                        } else {
                                                          if ($$24621$0 && m$9$0[0] === "js_throw") {
                                                            value$5 = m$9$0[1];m$27$0 = mode$2;if (m$27$0 === "expr") {
                                                              rval$1 = ENode(["splice"], {}, ["(function(){throw ", $it$8.translate(value$5, "expr"), ";})()"]);
                                                            } else {
                                                              rval$1 = ENode(["splice"], {}, ["throw ", $it$8.translate(value$5, "expr"), ";"]);
                                                            }
                                                          } else {
                                                            if ($$24619$0 && (($$24621$0 = t0$7 === 3) && (m$9$0[0] === "js_label" && (t1$4 = m$9$0[1], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 2 && t1$4[0] === "value"))))) {
                                                              label$2 = t1$4[1];body$2 = m$9$0[2];ph$7$0 = mode$2;if (ph$7$0 === "expr") {
                                                                rval$1 = $it$8.body(expr$0, "expr");
                                                              } else {
                                                                other$10 = ph$7$0;rval$1 = ENode(["splice"], {}, [label$2, ":", $it$8.translate(body$2, other$10)]);
                                                              }
                                                            } else {
                                                              if ($$24621$0 && m$9$0[0] === "js_while") {
                                                                test$2 = m$9$0[1];body$3 = m$9$0[2];ph$8$0 = mode$2;if (ph$8$0 === "expr") {
                                                                  rval$1 = $it$8.body(expr$0, "expr");
                                                                } else {
                                                                  other$11 = ph$8$0;rval$1 = ENode(["splice"], {}, ["while(", $it$8.translate(test$2, "expr"), "){", $it$8.translate(body$3, "stmt"), "}"]);
                                                                }
                                                              } else {
                                                                if ($$24619$0 && (t0$7 === 5 && m$9$0[0] === "js_for")) {
                                                                  x$34 = m$9$0[1];y$4 = m$9$0[2];z$0 = m$9$0[3];body$4 = m$9$0[4];ph$9$0 = mode$2;if (ph$9$0 === "expr") {
                                                                    rval$1 = $it$8.body(expr$0, "expr");
                                                                  } else {
                                                                    other$12 = ph$9$0;rval$1 = ENode(["splice"], {}, ["for(", $it$8.translate(x$34, "expr"), ";", $it$8.translate(y$4, "expr"), ";", $it$8.translate(z$0, "expr"), "){", $it$8.translate(body$4, "stmt"), "}"]);
                                                                  }
                                                                } else {
                                                                  if ($$24619$0 && (($$24621$0 = t0$7 === 4) && m$9$0[0] === "js_for_in")) {
                                                                    x$35 = m$9$0[1];y$5 = m$9$0[2];body$5 = m$9$0[3];ph$10$0 = mode$2;if (ph$10$0 === "expr") {
                                                                      rval$1 = $it$8.body(expr$0, "expr");
                                                                    } else {
                                                                      other$13 = ph$10$0;rval$1 = ENode(["splice"], {}, ["for(", $it$8.translate(x$35, "expr"), " in ", $it$8.translate(y$5, "expr"), "){", $it$8.translate(body$5, "stmt"), "}"]);
                                                                    }
                                                                  } else {
                                                                    if ($$24621$0 && m$9$0[0] === "js_for_of") {
                                                                      x$36 = m$9$0[1];y$6 = m$9$0[2];body$6 = m$9$0[3];ph$11$0 = mode$2;if (ph$11$0 === "expr") {
                                                                        rval$1 = $it$8.body(expr$0, "expr");
                                                                      } else {
                                                                        other$14 = ph$11$0;rval$1 = ENode(["splice"], {}, ["for(", $it$8.translate(x$36, "expr"), " of ", $it$8.translate(y$6, "expr"), "){", $it$8.translate(body$6, "stmt"), "}"]);
                                                                      }
                                                                    } else {
                                                                      if ($$24621$0 && (m$9$0[0] === "js_try" && (attempt$0 = m$9$0[1], t1$4 = m$9$0[2], Array.isArray(t1$4) && (t2$2 = t1$4.length, t2$2 === 4 && (t1$4[0] === "lambda" && (t3$0 = t1$4[1], Array.isArray(t3$0) && (t4$0 = t3$0.length, t4$0 === 1 && (bridge$$24616$0 = t3$0[0], Array.isArray(bridge$$24616$0) && (t0$20 = bridge$$24616$0.length, t0$20 === 2 && (bridge$$24616$0[0] === "symbol" && (v$5 = bridge$$24616$0[1], true))) || Array.isArray(bridge$$24616$0) && (t0$21 = bridge$$24616$0.length, t0$21 === 2 && (bridge$$24616$0[0] === "variable" && (v$5 = bridge$$24616$0[1], true))))))))))) {
                                                                        body$7 = t1$4[2];t1$4[3];finally$1 = m$9$0[3];m$29$0 = mode$2;if (m$29$0 === "expr") {
                                                                          r$5 = $it$8.body(expr$0, "expr");
                                                                        } else {
                                                                          other$15 = m$29$0;r$5 = ENode(["splice"], {}, ["try{", $it$8.translate(attempt$0, "stmt"), "}catch(", v$5, "){", $it$8.translate(body$7, "stmt"), "}"]);
                                                                        }m$28$0 = finally$1;if (Array.isArray(m$28$0) && (t0$22 = m$28$0.length, t0$22 === 1 && m$28$0[0] === "void")) {
                                                                          rval$1 = r$5;
                                                                        } else {
                                                                          other$16 = m$28$0;rval$1 = ENode(["splice"], {}, [r$5, "finally{", $it$8.translate(other$16, "stmt"), "}"]);
                                                                        }
                                                                      } else {
                                                                        if ($$24619$0 && (t0$7 === 2 && m$9$0[0] === "raw")) {
                                                                          x$37 = m$9$0[1];rval$1 = x$37;
                                                                        } else {
                                                                          other$17 = m$9$0;throw other$17;
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
  }m$8$0 = rval$1;if (getChecker(ENode)(m$8$0)) {
    n$0 = m$8$0;if (!n$0.props.origin) {
      $targ$6 = expr$0;n$0.props.origin = $targ$6;[];
    }return n$0;
  } else {
    if (typeof m$8$0 === "string") {
      return ENode(["splice"], { origin: expr$0 }, [rval$1]);
    } else {
      return ___match_error(m$8$0);
    }
  }
};__amp____colon__(Translator$0, __amp____colon__((accum$0 = {}, accum$0["::name"] = "Translator", accum$0), (accum$1 = {}, accum$1["::egclass"] = true, accum$1)));$targ$7 = Translator$0;exports.Translator = $targ$7;[];
//# sourceMappingURL=translate-js.js.map

