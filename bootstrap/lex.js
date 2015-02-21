
"use strict";require("earlgrey-runtime/5");var id$0 = undefined;var id_f$0 = undefined;var numr$0 = undefined;var numr_f$0 = undefined;var num$0 = undefined;var num_f$0 = undefined;var quasi$0 = undefined;var quasi2$0 = undefined;var quasi_f$0 = undefined;var quaint$0 = undefined;var quaint2$0 = undefined;var quaint_f$0 = undefined;var str$0 = undefined;var str2$0 = undefined;var str_f$0 = undefined;var op$0 = undefined;var op2$0 = undefined;var op3$0 = undefined;var op_f$0 = undefined;var indent$0 = undefined;var indent_f$0 = undefined;var indent2$0 = undefined;var indent2_f$0 = undefined;var cmnt$0 = undefined;var cmnt_f$0 = undefined;var unkn$0 = undefined;var unkn_f$0 = undefined;var $targ$9 = undefined;var $targ$10 = undefined;var $targ$11 = undefined;var $targ$12 = undefined;var $targ$13 = undefined;var $0$0 = undefined;var Location$0 = undefined;var __lt____lt____colon__$0 = undefined;var special_ops$0 = undefined;var regexps$0 = undefined;var ws_re$0 = undefined;var eol_re$0 = undefined;var produce$0 = undefined;var indent_tracker$0 = undefined;var process_indent$0 = undefined;var disambiguate_fixity$0 = undefined;var alternate_operators$0 = undefined;var fill_locations$0 = undefined;var tokenize$0 = undefined;$0$0 = require("./location");Location$0 = $0$0.Location;__lt____lt____colon__$0 = $0$0["<<:"];special_ops$0 = { "(": "PFX", "[": "PFX", "{": "PFX", ")": "SFX", "]": "SFX", "}": "SFX", ",": "IFX", ".": "PFX", not: "PFX" };id$0 = RegExp("(?:^(?:\\.\\.\\.|(?:(?:[a-zA-Z$_]|(?:\\\\_.))(?:(?:[a-zA-Z$_0-9]|(?:\\\\_.))*))))", "");id_f$0 = function id_f(m$0) {
  return ["ID", m$0[0].replace(RegExp("\\\\_(.)", "g"), function (temp$0$0, x$0) {
    return x$0;
  })];
};numr$0 = RegExp("(?:^((?:\\d+))[rR]((?:[A-Za-z0-9_]+))(?:(?:\\.((?:[A-Za-z0-9_]+)))?))", "");numr_f$0 = function numr_f(m$1) {
  var t0$0 = undefined;var t1$0 = undefined;var frac$1 = undefined;var $targ$0 = undefined;var radix$0 = undefined;var intp$0 = undefined;var frac$0 = undefined;var value$0 = undefined;$targ$0 = m$1;t0$0 = $targ$0;if (Array.isArray(t0$0) && (t1$0 = t0$0.length, t1$0 === 4)) {
    t0$0[0];radix$0 = t0$0[1];intp$0 = t0$0[2];frac$0 = t0$0[3];
  } else {
    ___match_error($targ$0);
  }[radix$0, intp$0, frac$0];value$0 = parseInt(intp$0.replace(RegExp("_", "g"), ""), radix$0);if (frac$0) {
    frac$1 = frac$0.replace(RegExp("_", "g"), "");value$0 = value$0 + parseInt(frac$0, radix$0) / Math.pow(radix$0, frac$0.length);value$0;
  }return ["NUM", value$0];
};num$0 = RegExp("(?:^((?:[0-9_]+))(?:(?:\\.((?:\\d+)))?)(?:(?:[eE]((?:[+-]?)(?:[0-9_]+)))?))", "");num_f$0 = function num_f(m$2) {
  return ["NUM", parseFloat(m$2[0].replace(RegExp("_", "g"), ""))];
};quasi$0 = RegExp("(?:^`((?:(?:(?:\\\\.)|[^`])*))`)", "");quasi2$0 = RegExp("^[`]{3,}((?:[\\\\.]|[^`]|``?[^`])*)[`]{3,}", "");quasi_f$0 = function quasi_f(m$3) {
  return ["QUASI", m$3[1]];
};quaint$0 = RegExp("(?:^'((?:(?:(?:\\\\.)|[^'])*))')", "");quaint2$0 = RegExp("^[']{3,}((?:[\\\\.]|[^']|''?[^'])*)[']{3,}", "");quaint_f$0 = function quaint_f(m$4) {
  return ["QUAINT", m$4[1]];
};str$0 = RegExp("(?:^\"((?:(?:(?:\\\\.)|[^\"])*))\")", "");str2$0 = RegExp("^[\\\"]{3,}((?:[\\\\.]|[^\\\"]|\\\"\\\"?[^\\\"])*)[\\\"]{3,}", "");str_f$0 = function str_f(m$5) {
  var rx$0 = undefined;var f$0 = undefined;var repl$0 = undefined;var r$0 = undefined;repl$0 = { b: String.fromCharCode(8), f: String.fromCharCode(12), n: "\n", r: String.fromCharCode(13), t: String.fromCharCode(9) };rx$0 = RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\.", "g");f$0 = function f(ph$0$0) {
    var chr$0 = undefined;var digits$0 = undefined;var t0$1 = undefined;var t1$1 = undefined;var t2$0 = undefined;t0$1 = getProjector(RegExp("^(?:\\\\u|\\\\x)(.*)", ""))(ph$0$0);if (t0$1[0] && (t1$1 = t0$1[1], t2$0 = t1$1.length, t2$0 === 2)) {
      t1$1[0];digits$0 = t1$1[1];return String.fromCharCode(parseInt(digits$0, 16));
    } else {
      t0$1 = getProjector(RegExp("^.(.)", ""))(ph$0$0);if (t0$1[0] && (t1$1 = t0$1[1], t2$0 = t1$1.length, t2$0 === 2)) {
        t1$1[0];chr$0 = t1$1[1];return send(repl$0, chr$0) || chr$0;
      } else {
        return ___match_error(ph$0$0);
      }
    }
  };r$0 = m$5[1].replace(rx$0, f$0);return ["STR", r$0];
};op$0 = RegExp("(?:^(?:[+\\-*/~\\^<>=%&|?!@#.:']+))", "");op2$0 = RegExp("(?:^[\\[\\{\\}\\],])", "");op3$0 = RegExp("(?:^(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:with|where)|when)|and)|not)|or)|in)|mod)|each)|as)|of)|is)(?:(?:[+\\-*/~\\^<>=%&|?!@#.:]+)|\\b))", "");op_f$0 = function op_f(m$6, column$0) {
  var fixity$0 = undefined;var otherwise$0 = undefined;var $$3802$0 = undefined;var m$7$0 = undefined;var op$1 = undefined;op$1 = m$6[1] || m$6[0];m$7$0 = null;if (op$1 === "|") {
    return ["INDENT", column$0 - 1];
  } else {
    if (send(special_ops$0, op$1)) {
      fixity$0 = send(special_ops$0, op$1);return ["OP", fixity$0, op$1];
    } else {
      otherwise$0 = m$7$0;return ["OP", "?FX", op$1];
    }
  }
};indent$0 = RegExp("(?:^(?:(?:\n(?: *);(?:[^\n]*))*)(?:(?:\n((?: *)))+))", "");indent_f$0 = function indent_f(m$8) {
  var ilen$0 = undefined;ilen$0 = m$8[1].length;return ["INDENT", ilen$0];
};indent2$0 = RegExp("(?:^\\\\\\\\)", "");indent2_f$0 = function indent2_f(m$9, column$1) {
  return ["INDENT", column$1 - 2];
};cmnt$0 = RegExp("(?:^;(?:[^\n]*))", "");cmnt_f$0 = function cmnt_f(m$10) {
  return ["IGNORE"];
};unkn$0 = RegExp("(?:^.)", "");unkn_f$0 = function unkn_f(m$11) {
  return ["ILLEGAL", m$11[0]];
};regexps$0 = [[op3$0, op_f$0], [id$0, id_f$0], [numr$0, numr_f$0], [num$0, num_f$0], [str2$0, str_f$0], [str$0, str_f$0], [quasi2$0, quasi_f$0], [quasi$0, quasi_f$0], [quaint2$0, quaint_f$0], [quaint$0, quaint_f$0], [op$0, op_f$0], [op2$0, op_f$0], [indent$0, indent_f$0], [indent2$0, indent2_f$0], [cmnt$0, cmnt_f$0], [unkn$0, unkn_f$0]];ws_re$0 = RegExp("(?:^(?: *)(?:(?:\n(?: *)\\\\ (?: *))*))", "");eol_re$0 = RegExp("(?:^(?: *)(?:\n|$))", "");produce$0 = function produce(src$0) {
  var text$0 = undefined;var results$0 = undefined;var wsb$0 = undefined;var pos$0 = undefined;var column$2 = undefined;text$0 = src$0.text;results$0 = [];wsb$0 = text$0.match(ws_re$0)[0].length;text$0 = text$0.slice(wsb$0);pos$0 = wsb$0;column$2 = 0;$1: while (text$0) {
    var i$0 = undefined;i$0 = 0;$2: for (null; i$0 < regexps$0.length; ++i$0) {
      var t0$2 = undefined;var t1$2 = undefined;var splits$0 = undefined;var skip$0 = undefined;var endpos$0 = undefined;var wsa$0 = undefined;var eol$0 = undefined;var bwsb$0 = undefined;var bwsa$0 = undefined;var token$0 = undefined;var $targ$2 = undefined;var $targ$3 = undefined;var $targ$4 = undefined;var $targ$1 = undefined;var re$0 = undefined;var fn$0 = undefined;var m$12 = undefined;$targ$1 = send(regexps$0, i$0);t0$2 = $targ$1;if (Array.isArray(t0$2) && (t1$2 = t0$2.length, t1$2 === 2)) {
        re$0 = t0$2[0];fn$0 = t0$2[1];
      } else {
        ___match_error($targ$1);
      }[re$0, fn$0];m$12 = text$0.match(re$0);if (m$12) {
        skip$0 = m$12[0].length;endpos$0 = pos$0 + skip$0;splits$0 = m$12[0].split("\n");if (splits$0.length > 1) {
          column$2 = send(splits$0, splits$0.length - 1).length;
        } else {
          column$2 = column$2 + skip$0;
        }text$0 = text$0.slice(skip$0);wsa$0 = text$0.match(ws_re$0)[0].length;eol$0 = text$0.match(eol_re$0) && true;bwsb$0 = wsb$0 > 0;if (eol$0) {
          bwsa$0 = bwsb$0;
        } else {
          bwsa$0 = wsa$0 > 0;
        }token$0 = fn$0(m$12, column$2);$targ$2 = bwsb$0;token$0.wsb = $targ$2;[];$targ$3 = bwsa$0;token$0.wsa = $targ$3;[];$targ$4 = Location$0(src$0, pos$0, endpos$0);token$0.location = $targ$4;[];results$0.push(token$0);text$0 = text$0.slice(wsa$0);column$2 = column$2 + wsa$0;wsb$0 = wsa$0;pos$0 = endpos$0 + wsa$0;break $2;
      }
    }
  }return results$0;
};indent_tracker$0 = function indent_tracker() {
  var curr$0 = undefined;var stack$0 = undefined;var stacks$0 = undefined;curr$0 = 0;stack$0 = [];stacks$0 = [stack$0];return function (temp$1$0) {
    var t0$3 = undefined;var rval$0 = undefined;var m$13 = undefined;var acc$0 = undefined;var temp$2 = undefined;var rval$1 = undefined;var x$1 = undefined;var m$14 = undefined;var acc$1 = undefined;var temp$3 = undefined;var other$0 = undefined;var fixity$2 = undefined;var fixity$1 = undefined;var stuff$0 = undefined;var new_indent$0 = undefined;var ph$2$0 = undefined;var $$4023$0 = undefined;var $$4024$0 = undefined;var $$4025$0 = undefined;var $$4026$0 = undefined;var t0$4 = undefined;var t1$3 = undefined;var t2$1 = undefined;var bridge$$4018$0 = undefined;var bridge$$4020$0 = undefined;var token$1 = undefined;var ph$1$0 = undefined;t0$3 = temp$1$0;token$1 = t0$3;ph$1$0 = t0$3;t0$4 = ph$1$0;t1$3 = t0$4.length;if (t1$3 === 2 && t0$4[0] === "INDENT") {
      t2$1 = t0$4[1];new_indent$0 = t2$1;ph$2$0 = t2$1;if (curr$0 === false) {
        curr$0 = new_indent$0;return [__amp__(["OP", "IFX", ","], { wsb: true, wsa: true })];
      } else {
        if (ph$2$0 > curr$0) {
          stack$0.push(curr$0);curr$0 = new_indent$0;return [__amp__(["OP", "PFX", "["], { wsb: true, wsa: true })];
        } else {
          if (ph$2$0 === curr$0) {
            return [__amp__(["OP", "IFX", ","], { wsb: true, wsa: true })];
          } else {
            if (ph$2$0 < curr$0) {
              rval$0 = [];$3: while (stack$0.length > 0 && new_indent$0 < curr$0) {
                curr$0 = stack$0.pop();rval$0.push(__amp__(["OP", "SFX", "]"], { wsb: true, wsa: true }));
              }rval$0.push(__amp__(["OP", "IFX", ","], { wsb: true, wsa: true }));return rval$0;
            } else {
              return ___match_error(ph$2$0);
            }
          }
        }
      }
    } else {
      if (t1$3 >= 1 && t0$4[0] === "ID") {
        stuff$0 = Array.prototype.slice.call(t0$4, 1);return [token$1];
      } else {
        if (($$4025$0 = t1$3 === 3) && (($$4026$0 = t0$4[0] === "OP") && (fixity$1 = t0$4[1], bridge$$4018$0 = t0$4[2], bridge$$4018$0 === "[" || bridge$$4018$0 === "{"))) {
          stack$0.push(curr$0);stacks$0.push(stack$0);stack$0 = [];curr$0 = false;return [token$1];
        } else {
          if ($$4026$0 && (fixity$2 = t0$4[1], bridge$$4020$0 = t0$4[2], bridge$$4020$0 === "]" || bridge$$4020$0 === "}")) {
            acc$0 = [];temp$2 = null;m$13 = null;$4: for (var _iterator = stack$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
              m$13 = _step.value;
              temp$2 = __amp__(["OP", "SFX", "]"], { wsb: true, wsa: true });acc$0.push(temp$2);
            }rval$1 = acc$0;stack$0 = stacks$0.pop();curr$0 = stack$0.pop();rval$1.push(token$1);return rval$1;
          } else {
            if ((x$1 = ph$1$0, x$1 instanceof Array && x$1[0] === "EOF")) {
              acc$1 = [];temp$3 = null;m$14 = null;$5: for (var _iterator2 = stack$0[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
                m$14 = _step2.value;
                temp$3 = __amp__(["OP", "SFX", "]"], { wsb: true, wsa: true });acc$1.push(temp$3);
              }return acc$1;
            } else {
              other$0 = ph$1$0;return [token$1];
            }
          }
        }
      }
    }
  };
};process_indent$0 = function process_indent(stream$0) {
  var m$15 = undefined;var tracker$0 = undefined;var results$1 = undefined;tracker$0 = indent_tracker$0();results$1 = [];m$15 = null;$6: for (var _iterator3 = stream$0[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
    m$15 = _step3.value;
    var token$2 = undefined;token$2 = m$15;results$1 = results$1.concat(tracker$0(token$2));
  }return results$1.concat(tracker$0(["EOF"]));
};disambiguate_fixity$0 = function disambiguate_fixity(stream$1) {
  var m$22 = undefined;var __lt____lt____lt____colon__$0 = undefined;var collapse_operators$0 = undefined;var buffer$0 = undefined;var pfx$0 = undefined;var collapse$0 = undefined;var results$2 = undefined;__lt____lt____lt____colon__$0 = function (a$0, b$0) {
    var $targ$5 = undefined;var $targ$6 = undefined;$targ$5 = b$0.wsb;a$0.wsb = $targ$5;[];$targ$6 = b$0.wsa;a$0.wsa = $targ$6;[];return __lt____lt____colon__$0(a$0, b$0);
  };collapse_operators$0 = function collapse_operators() {
    var msg$0 = undefined;var longer$0 = undefined;var token$3 = undefined;var fixity$3 = undefined;var name$0 = undefined;var t0$7 = undefined;var t1$5 = undefined;var t2$2 = undefined;var m$17$0 = undefined;var m$18 = undefined;var acc$2 = undefined;var temp$4 = undefined;var m$19 = undefined;var acc$3 = undefined;var temp$5 = undefined;var t0$10 = undefined;var t1$8 = undefined;var t2$3 = undefined;var t3$0 = undefined;var t0$12 = undefined;var t0$13 = undefined;var t0$14 = undefined;var t0$15 = undefined;var t1$9 = undefined;var t2$4 = undefined;var bridge$$4507$0 = undefined;var m$21$0 = undefined;var t$0 = undefined;var results$3 = undefined;var $$4432$0 = undefined;var $$4433$0 = undefined;var $$4434$0 = undefined;var bridge$$4429$0 = undefined;var t0$11 = undefined;var m$20$0 = undefined;var $targ$7 = undefined;var first$0 = undefined;var fixity$4 = undefined;var name$3 = undefined;var rest$0 = undefined;var n$0 = undefined;var $$4272$0 = undefined;var $$4273$0 = undefined;var $$4274$0 = undefined;var t0$6 = undefined;var t1$4 = undefined;var buffer$1 = undefined;var ph$6$0 = undefined;var t0$5 = undefined;var m$16$0 = undefined;m$16$0 = arguments;t0$5 = m$16$0.length;if (t0$5 >= 1) {
      buffer$1 = m$16$0[0];ph$6$0 = Array.prototype.slice.call(m$16$0, 1);n$0 = buffer$1.length;if (!buffer$1.length) {
        return [];
      } else {
        t0$6 = ph$6$0;t1$4 = t0$6.length;if (($$4274$0 = t1$4 === 2) && ((t0$6[0] ? true : false) && (t0$6[1] ? true : false))) {
          m$17$0 = buffer$1;if (Array.isArray(m$17$0) && (t0$7 = m$17$0.length, t0$7 === 1 && (t1$5 = m$17$0[0], token$3 = t1$5, Array.isArray(t1$5) && (t2$2 = t1$5.length, t2$2 === 3 && t1$5[0] === "OP")))) {
            fixity$3 = t1$5[1];name$0 = t1$5[2];return [__lt____lt____lt____colon__$0(["ID", name$0], token$3)];
          } else {
            longer$0 = m$17$0;msg$0 = "Too many consecutive operators were found here.";throw ErrorFactory(["syntax", "nullary"]).create(msg$0, { operators: buffer$1 });
          }
        } else {
          if ($$4274$0 && (t0$6[0] ? true : false)) {
            t0$6[1];acc$2 = [];temp$4 = null;m$18 = null;$8: for (var _iterator4 = buffer$1[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
              m$18 = _step4.value;
              var token$4 = undefined;var name$1 = undefined;var t0$8 = undefined;var t1$6 = undefined;t0$8 = m$18;token$4 = t0$8;if (Array.isArray(t0$8) && (t1$6 = t0$8.length, t1$6 === 3 && t0$8[0] === "OP")) {
                t0$8[1];name$1 = t0$8[2];temp$4 = __lt____lt____lt____colon__$0(["OP", "PFX", name$1], token$4);acc$2.push(temp$4);
              } else {
                ___match_error(m$18);
              }
            }return acc$2;
          } else {
            if ($$4274$0 && (t0$6[0], t0$6[1] ? true : false)) {
              acc$3 = [];temp$5 = null;m$19 = null;$9: for (var _iterator5 = buffer$1[Symbol.iterator](), _step5; !(_step5 = _iterator5.next()).done;) {
                m$19 = _step5.value;
                var token$5 = undefined;var name$2 = undefined;var t0$9 = undefined;var t1$7 = undefined;t0$9 = m$19;token$5 = t0$9;if (Array.isArray(t0$9) && (t1$7 = t0$9.length, t1$7 === 3 && t0$9[0] === "OP")) {
                  t0$9[1];name$2 = t0$9[2];temp$5 = __lt____lt____lt____colon__$0(["OP", "SFX", name$2], token$5);acc$3.push(temp$5);
                } else {
                  ___match_error(m$19);
                }
              }return acc$3;
            } else {
              $targ$7 = buffer$1;t0$10 = $targ$7;if (Array.isArray(t0$10) && (t1$8 = t0$10.length, t1$8 >= 1 && (t2$3 = t0$10[0], first$0 = t2$3, Array.isArray(t2$3) && (t3$0 = t2$3.length, t3$0 === 3 && t2$3[0] === "OP")))) {
                fixity$4 = t2$3[1];name$3 = t2$3[2];rest$0 = Array.prototype.slice.call(t0$10, 1);
              } else {
                ___match_error($targ$7);
              }[first$0, fixity$4, name$3, rest$0];m$20$0 = [first$0.wsb, first$0.wsa];bridge$$4429$0 = m$20$0;if (Array.isArray(bridge$$4429$0) && (t0$12 = bridge$$4429$0.length, t0$12 === 2 && (!bridge$$4429$0[0] && !bridge$$4429$0[1])) || Array.isArray(bridge$$4429$0) && (t0$13 = bridge$$4429$0.length, t0$13 === 2 && ((bridge$$4429$0[0] ? true : false) && (bridge$$4429$0[1] ? true : false)))) {
                return [__lt____lt____lt____colon__$0(["OP", "IFX", name$3], first$0)].concat(collapse_operators$0(rest$0, true, false));
              } else {
                if (($$4432$0 = Array.isArray(m$20$0)) && (t0$11 = m$20$0.length, ($$4434$0 = t0$11 === 2) && (m$20$0[0] ? true : false))) {
                  m$20$0[1];return [__lt____lt____lt____colon__$0(["OP", "PFX", name$3], first$0)].concat(collapse_operators$0(rest$0, true, false));
                } else {
                  if ($$4434$0 && (m$20$0[0], m$20$0[1] ? true : false)) {
                    results$3 = collapse_operators$0(rest$0, false, false);m$21$0 = results$3;bridge$$4507$0 = m$21$0;if (Array.isArray(bridge$$4507$0) && (t0$14 = bridge$$4507$0.length, t0$14 === 0) || Array.isArray(bridge$$4507$0) && (t0$15 = bridge$$4507$0.length, t0$15 >= 1 && (t1$9 = bridge$$4507$0[0], Array.isArray(t1$9) && (t2$4 = t1$9.length, t2$4 >= 2 && (t1$9[0] === "OP" && (t1$9[1] === "PFX" && (Array.prototype.slice.call(t1$9, 2), Array.prototype.slice.call(bridge$$4507$0, 1), true))))))) {
                      t$0 = ["OP", "IFX", name$3];
                    } else {
                      t$0 = ["OP", "SFX", name$3];
                    }return [__lt____lt____lt____colon__$0(t$0, first$0)].concat(results$3);
                  } else {
                    return ___match_error(m$20$0);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      return ___match_error(m$16$0);
    }
  };buffer$0 = [];pfx$0 = true;collapse$0 = function collapse(sfx$0) {
    var rval$2 = undefined;rval$2 = collapse_operators$0(buffer$0, pfx$0, sfx$0);buffer$0 = [];return rval$2;
  };results$2 = [];m$22 = null;$7: for (var _iterator6 = stream$1[Symbol.iterator](), _step6; !(_step6 = _iterator6.next()).done;) {
    m$22 = _step6.value;
    var other$1 = undefined;var ph$4$0 = undefined;var name$4 = undefined;var t0$17 = undefined;var t1$10 = undefined;var token$6 = undefined;var ph$3$0 = undefined;var t0$16 = undefined;t0$16 = m$22;token$6 = t0$16;ph$3$0 = t0$16;t0$17 = ph$3$0;if (Array.isArray(t0$17) && (t1$10 = t0$17.length, t1$10 === 3 && t0$17[0] === "OP")) {
      ph$4$0 = t0$17[1];name$4 = t0$17[2];if (ph$4$0 === "?FX") {
        buffer$0.push(token$6);
      } else {
        if (ph$4$0 === "IFX") {
          results$2 = results$2.concat(collapse$0(true));results$2.push(token$6);pfx$0 = true;pfx$0;
        } else {
          if (ph$4$0 === "PFX") {
            results$2 = results$2.concat(collapse$0(false));results$2.push(token$6);pfx$0 = true;pfx$0;
          } else {
            if (ph$4$0 === "SFX") {
              results$2 = results$2.concat(collapse$0(true));results$2.push(token$6);pfx$0 = false;pfx$0;
            } else {
              ___match_error(ph$4$0);
            }
          }
        }
      }
    } else {
      other$1 = ph$3$0;results$2 = results$2.concat(collapse$0(false));results$2.push(token$6);pfx$0 = false;pfx$0;
    }
  }return results$2.concat(collapse$0(true));
};alternate_operators$0 = function alternate_operators(stream$2) {
  var m$23 = undefined;var W$0 = undefined;var last_op$0 = undefined;var results$4 = undefined;W$0 = function W(x$2) {
    if (x$2) {
      return "wide";
    } else {
      return "short";
    }
  };last_op$0 = true;results$4 = [];m$23 = null;$10: for (var _iterator7 = stream$2[Symbol.iterator](), _step7; !(_step7 = _iterator7.next()).done;) {
    m$23 = _step7.value;
    var x$3 = undefined;var m$24$0 = undefined;var token$8 = undefined;var fixity$5 = undefined;var name$5 = undefined;var t0$19 = undefined;var t1$11 = undefined;var token$7 = undefined;var ph$7$0 = undefined;var t0$18 = undefined;t0$18 = m$23;token$7 = t0$18;ph$7$0 = t0$18;if ((x$3 = ph$7$0, x$3 instanceof Array && x$3[0] === "IGNORE")) {
      null;
    } else {
      t0$19 = ph$7$0;if (Array.isArray(t0$19) && (t1$11 = t0$19.length, t1$11 === 3 && t0$19[0] === "OP")) {
        fixity$5 = t0$19[1];name$5 = t0$19[2];if (last_op$0) {
          results$4.push(["VOID"]);
        }m$24$0 = fixity$5;if (m$24$0 === "IFX") {
          results$4.push(__lt____lt____colon__$0(["IFX", W$0(token$7.wsa || token$7.wsb), name$5], token$7));last_op$0 = true;last_op$0;
        } else {
          if (m$24$0 === "PFX") {
            if (!last_op$0) {
              results$4.push(["IFX", W$0(token$7.wsb), "WHITE"], ["VOID"]);
            }results$4.push(__lt____lt____colon__$0(["PFX", W$0(token$7.wsa), name$5], token$7));last_op$0 = true;last_op$0;
          } else {
            if (m$24$0 === "SFX") {
              results$4.push(__lt____lt____colon__$0(["SFX", W$0(token$7.wsb), name$5], token$7), ["VOID"]);last_op$0 = false;last_op$0;
            } else {
              ___match_error(m$24$0);
            }
          }
        }
      } else {
        token$8 = ph$7$0;if (!last_op$0) {
          results$4.push(["IFX", W$0(token$8.wsb), "WHITE"]);
        }results$4.push(token$8);last_op$0 = false;last_op$0;
      }
    }
  }if (last_op$0) {
    results$4.push(["VOID"]);
  }return results$4;
};fill_locations$0 = function fill_locations(source$0, stream$3) {
  var m$26 = undefined;var to_fill$0 = undefined;var start$0 = undefined;var fill$0 = undefined;to_fill$0 = [];start$0 = 0;fill$0 = function fill(end$0) {
    var m$25 = undefined;var first$1 = undefined;first$1 = true;m$25 = null;$12: for (var _iterator8 = to_fill$0[Symbol.iterator](), _step8; !(_step8 = _iterator8.next()).done;) {
      m$25 = _step8.value;
      var s$0 = undefined;var $targ$8 = undefined;var token$9 = undefined;token$9 = m$25;if (first$1) {
        first$1 = false;s$0 = start$0;
      } else {
        s$0 = end$0;
      }$targ$8 = Location$0(source$0, s$0, end$0);token$9.location = $targ$8;[];
    }to_fill$0 = [];return to_fill$0;
  };m$26 = null;$11: for (var _iterator9 = stream$3[Symbol.iterator](), _step9; !(_step9 = _iterator9.next()).done;) {
    m$26 = _step9.value;
    var other$2 = undefined;var location$0 = undefined;var t0$20 = undefined;t0$20 = m$26;if (___hasprop(t0$20, "location") && (location$0 = t0$20.location, location$0)) {
      fill$0(location$0.start);start$0 = location$0.end;start$0;
    } else {
      other$2 = m$26;to_fill$0.push(other$2);
    }
  }fill$0(source$0.text.length);return stream$3;
};tokenize$0 = function tokenize(src$1) {
  var $it$4 = undefined;var $it$3 = undefined;var $it$2 = undefined;var $it$1 = undefined;var $it$0 = undefined;$it$0 = src$1;$it$1 = produce$0($it$0);$it$2 = process_indent$0($it$1);$it$3 = disambiguate_fixity$0($it$2);$it$4 = alternate_operators$0($it$3);return fill_locations$0(src$1, $it$4);
};$targ$9 = tokenize$0;exports.tokenize = $targ$9;[];$targ$10 = process_indent$0;exports.process_indent = $targ$10;[];$targ$11 = disambiguate_fixity$0;exports.disambiguate_fixity = $targ$11;[];$targ$12 = alternate_operators$0;exports.alternate_operators = $targ$12;[];$targ$13 = fill_locations$0;exports.fill_locations = $targ$13;[];
//# sourceMappingURL=lex.js.map

