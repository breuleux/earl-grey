"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var id$0;
var id_f$0;
var numr$0;
var numr_f$0;
var num$0;
var num_f$0;
var quasi$0;
var quasi2$0;
var quasi_f$0;
var quaint$0;
var quaint2$0;
var quaint_f$0;
var str$0;
var str2$0;
var str_f$0;
var op$0;
var op2$0;
var op3$0;
var op_f$0;
var indent$0;
var indent_f$0;
var indent2$0;
var indent2_f$0;
var cmnt$0;
var cmnt_f$0;
var unkn$0;
var unkn_f$0;
var $targ$9;
var $targ$10;
var $targ$11;
var $targ$12;
var $targ$13;
var $0$0;
var Location$0;
var __lt____lt____colon__$0;
var special_ops$0;
var regexps$0;
var ws_re$0;
var eol_re$0;
var produce$0;
var indent_tracker$0;
var process_indent$0;
var disambiguate_fixity$0;
var alternate_operators$0;
var fill_locations$0;
var tokenize$0;
$0$0 = require("./location");
Location$0 = $0$0.Location;
__lt____lt____colon__$0 = $0$0["<<:"];
special_ops$0 = ({
  "(": "PFX",
  "[": "PFX",
  "{": "PFX",
  ")": "SFX",
  "]": "SFX",
  "}": "SFX",
  ",": "IFX",
  ".": "PFX",
  "not": "PFX"
});
id$0 = RegExp("(?:^(?:\\.\\.\\.|(?:(?:[a-zA-Z$_]|(?:\\\\_.))(?:(?:[a-zA-Z$_0-9]|(?:\\\\_.))*))))", "");
id_f$0 = (function id_f(m$0) {
  return ["ID", m$0[0].replace(RegExp("\\\\_(.)", "g"), (function(temp$0$0, x$0) {
    return x$0;
  }))];
});
numr$0 = RegExp("(?:^((?:\\d+))[rR]((?:[A-Za-z0-9_]+))(?:(?:\\.((?:[A-Za-z0-9_]+)))?))", "");
numr_f$0 = (function numr_f(m$1) {
  var t0$0;
  var t1$0;
  var frac$1;
  var $targ$0;
  var radix$0;
  var intp$0;
  var frac$0;
  var value$0;
  $targ$0 = m$1;
  t0$0 = $targ$0;
  if (((t0$0 instanceof Array) && ((t1$0 = t0$0.length), (t1$0 === 4)))) {
    t0$0[0];
    radix$0 = t0$0[1];
    intp$0 = t0$0[2];
    frac$0 = t0$0[3];
  } else {
    ___match_error($targ$0);
  }
  [radix$0, intp$0, frac$0];
  value$0 = parseInt(intp$0.replace(RegExp("_", "g"), ""), radix$0);
  if (frac$0) {
    frac$1 = frac$0.replace(RegExp("_", "g"), "");
    value$0 = (value$0 + (parseInt(frac$0, radix$0) / Math.pow(radix$0, frac$0.length)));
    value$0;
  }
  return ["NUM", value$0];
});
num$0 = RegExp("(?:^((?:[0-9_]+))(?:(?:\\.((?:\\d+)))?)(?:(?:[eE]((?:[+-]?)(?:[0-9_]+)))?))", "");
num_f$0 = (function num_f(m$2) {
  return ["NUM", parseFloat(m$2[0].replace(RegExp("_", "g"), ""))];
});
quasi$0 = RegExp("(?:^`((?:(?:(?:\\\\.)|[^`])*))`)", "");
quasi2$0 = RegExp("^[`]{3,}((?:[\\\\.]|[^`]|``?[^`])*)[`]{3,}", "");
quasi_f$0 = (function quasi_f(m$3) {
  return ["QUASI", m$3[1]];
});
quaint$0 = RegExp("(?:^'((?:(?:(?:\\\\.)|[^'])*))')", "");
quaint2$0 = RegExp("^[']{3,}((?:[\\\\.]|[^']|''?[^'])*)[']{3,}", "");
quaint_f$0 = (function quaint_f(m$4) {
  return ["QUAINT", m$4[1]];
});
str$0 = RegExp("(?:^\"((?:(?:(?:\\\\.)|[^\"])*))\")", "");
str2$0 = RegExp("^[\\\"]{3,}((?:[\\\\.]|[^\\\"]|\\\"\\\"?[^\\\"])*)[\\\"]{3,}", "");
str_f$0 = (function str_f(m$5) {
  var rx$0;
  var f$0;
  var repl$0;
  var r$0;
  repl$0 = ({
    "b": String.fromCharCode(8),
    "f": String.fromCharCode(12),
    "n": "\n",
    "r": String.fromCharCode(13),
    "t": String.fromCharCode(9)
  });
  rx$0 = RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\.", "g");
  f$0 = (function f(ph$0$0) {
    var chr$0;
    var digits$0;
    var t0$1;
    var t1$1;
    var t2$0;
    t0$1 = getProjector(RegExp("^(?:\\\\u|\\\\x)(.*)", ""))(ph$0$0);
    if ((t0$1[0] && ((t1$1 = t0$1[1]), (t2$0 = t1$1.length), (t2$0 === 2)))) {
      t1$1[0];
      digits$0 = t1$1[1];
      return String.fromCharCode(parseInt(digits$0, 16));
    } else {
      t0$1 = getProjector(RegExp("^.(.)", ""))(ph$0$0);
      if ((t0$1[0] && ((t1$1 = t0$1[1]), (t2$0 = t1$1.length), (t2$0 === 2)))) {
        t1$1[0];
        chr$0 = t1$1[1];
        return (send(repl$0, chr$0) || chr$0);
      } else {
        return ___match_error(ph$0$0);
      }
    }
  });
  r$0 = m$5[1].replace(rx$0, f$0);
  return ["STR", r$0];
});
op$0 = RegExp("(?:^(?:[+\\-*/~\\^<>=%&|?!@#.:']+))", "");
op2$0 = RegExp("(?:^[\\[\\{\\}\\],])", "");
op3$0 = RegExp("(?:^(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:with|where)|when)|and)|not)|or)|in)|mod)|each)|as)|of)|is)(?:(?:[+\\-*/~\\^<>=%&|?!@#.:]+)|\\b))", "");
op_f$0 = (function op_f(m$6, column$0) {
  var fixity$0;
  var otherwise$0;
  var $$3343$0;
  var m$7$0;
  var op$1;
  op$1 = (m$6[1] || m$6[0]);
  m$7$0 = null;
  if ((op$1 === "|")) {
    return ["INDENT", (column$0 - 1)];
  } else {
    if (send(special_ops$0, op$1)) {
      fixity$0 = send(special_ops$0, op$1);
      return ["OP", fixity$0, op$1];
    } else {
      otherwise$0 = m$7$0;
      return ["OP", "?FX", op$1];
    }
  }
});
indent$0 = RegExp("(?:^(?:(?:\n(?: *);(?:[^\n]*))*)(?:(?:\n((?: *)))+))", "");
indent_f$0 = (function indent_f(m$8) {
  var ilen$0;
  ilen$0 = m$8[1].length;
  return ["INDENT", ilen$0];
});
indent2$0 = RegExp("(?:^\\\\\\\\)", "");
indent2_f$0 = (function indent2_f(m$9, column$1) {
  return ["INDENT", (column$1 - 2)];
});
cmnt$0 = RegExp("(?:^;(?:[^\n]*))", "");
cmnt_f$0 = (function cmnt_f(m$10) {
  return ["IGNORE"];
});
unkn$0 = RegExp("(?:^.)", "");
unkn_f$0 = (function unkn_f(m$11) {
  return ["ILLEGAL", m$11[0]];
});
regexps$0 = [[op3$0, op_f$0], [id$0, id_f$0], [numr$0, numr_f$0], [num$0, num_f$0], [str2$0, str_f$0], [str$0, str_f$0], [quasi2$0, quasi_f$0], [quasi$0, quasi_f$0], [quaint2$0, quaint_f$0], [quaint$0, quaint_f$0], [op$0, op_f$0], [op2$0, op_f$0], [indent$0, indent_f$0], [indent2$0, indent2_f$0], [cmnt$0, cmnt_f$0], [unkn$0, unkn_f$0]];
ws_re$0 = RegExp("(?:^(?: *)(?:(?:\n(?: *)\\\\ (?: *))*))", "");
eol_re$0 = RegExp("(?:^(?: *)(?:\n|$))", "");
produce$0 = (function produce(src$0) {
  var text$0;
  var results$0;
  var wsb$0;
  var pos$0;
  var column$2;
  text$0 = src$0.text;
  results$0 = [];
  wsb$0 = text$0.match(ws_re$0)[0].length;
  text$0 = text$0.slice(wsb$0);
  pos$0 = wsb$0;
  column$2 = 0;
  $1: while (text$0) {
    var i$0;
    i$0 = 0;
    $2: for (null; (i$0 < regexps$0.length); (++i$0)) {
      var t0$2;
      var t1$2;
      var splits$0;
      var skip$0;
      var endpos$0;
      var wsa$0;
      var eol$0;
      var bwsb$0;
      var bwsa$0;
      var token$0;
      var $targ$2;
      var $targ$3;
      var $targ$4;
      var $targ$1;
      var re$0;
      var fn$0;
      var m$12;
      $targ$1 = send(regexps$0, i$0);
      t0$2 = $targ$1;
      if (((t0$2 instanceof Array) && ((t1$2 = t0$2.length), (t1$2 === 2)))) {
        re$0 = t0$2[0];
        fn$0 = t0$2[1];
      } else {
        ___match_error($targ$1);
      }
      [re$0, fn$0];
      m$12 = text$0.match(re$0);
      if (m$12) {
        skip$0 = m$12[0].length;
        endpos$0 = (pos$0 + skip$0);
        splits$0 = m$12[0].split("\n");
        if ((splits$0.length > 1)) {
          column$2 = send(splits$0, (splits$0.length - 1)).length;
        } else {
          column$2 = (column$2 + skip$0);
        }
        text$0 = text$0.slice(skip$0);
        wsa$0 = text$0.match(ws_re$0)[0].length;
        eol$0 = (text$0.match(eol_re$0) && true);
        bwsb$0 = (wsb$0 > 0);
        if (eol$0) {
          bwsa$0 = bwsb$0;
        } else {
          bwsa$0 = (wsa$0 > 0);
        }
        token$0 = fn$0(m$12, column$2);
        $targ$2 = bwsb$0;
        (token$0["wsb"] = $targ$2);
        [];
        $targ$3 = bwsa$0;
        (token$0["wsa"] = $targ$3);
        [];
        $targ$4 = Location$0(src$0, pos$0, endpos$0);
        (token$0["location"] = $targ$4);
        [];
        results$0.push(token$0);
        text$0 = text$0.slice(wsa$0);
        column$2 = (column$2 + wsa$0);
        wsb$0 = wsa$0;
        pos$0 = (endpos$0 + wsa$0);
        break $2;
      }
    }
  }
  return results$0;
});
indent_tracker$0 = (function indent_tracker() {
  var curr$0;
  var stack$0;
  var stacks$0;
  curr$0 = 0;
  stack$0 = [];
  stacks$0 = [stack$0];
  return (function(temp$1$0) {
    var t0$3;
    var rval$0;
    var m$13;
    var acc$0;
    var temp$2;
    var rval$1;
    var x$1;
    var m$14;
    var acc$1;
    var temp$3;
    var other$0;
    var fixity$2;
    var fixity$1;
    var stuff$0;
    var new_indent$0;
    var ph$2$0;
    var $$3564$0;
    var $$3565$0;
    var $$3566$0;
    var $$3567$0;
    var t0$4;
    var t1$3;
    var t2$1;
    var bridge$$3559$0;
    var bridge$$3561$0;
    var token$1;
    var ph$1$0;
    t0$3 = temp$1$0;
    token$1 = t0$3;
    ph$1$0 = t0$3;
    t0$4 = ph$1$0;
    t1$3 = t0$4.length;
    if (((t1$3 === 2) && (t0$4[0] === "INDENT"))) {
      t2$1 = t0$4[1];
      new_indent$0 = t2$1;
      ph$2$0 = t2$1;
      if ((curr$0 === false)) {
        curr$0 = new_indent$0;
        return [__amp__(["OP", "IFX", ","], ({
          "wsb": true,
          "wsa": true
        }))];
      } else {
        if ((ph$2$0 > curr$0)) {
          stack$0.push(curr$0);
          curr$0 = new_indent$0;
          return [__amp__(["OP", "PFX", "["], ({
            "wsb": true,
            "wsa": true
          }))];
        } else {
          if ((ph$2$0 === curr$0)) {
            return [__amp__(["OP", "IFX", ","], ({
              "wsb": true,
              "wsa": true
            }))];
          } else {
            if ((ph$2$0 < curr$0)) {
              rval$0 = [];
              $3: while (((stack$0.length > 0) && (new_indent$0 < curr$0))) {
                curr$0 = stack$0.pop();
                rval$0.push(__amp__(["OP", "SFX", "]"], ({
                  "wsb": true,
                  "wsa": true
                })));
              }
              rval$0.push(__amp__(["OP", "IFX", ","], ({
                "wsb": true,
                "wsa": true
              })));
              return rval$0;
            } else {
              return ___match_error(ph$2$0);
            }
          }
        }
      }
    } else {
      if (((t1$3 >= 1) && (t0$4[0] === "ID"))) {
        stuff$0 = Array.prototype.slice.call(t0$4, 1);
        return [token$1];
      } else {
        if ((($$3566$0 = (t1$3 === 3)) && (($$3567$0 = (t0$4[0] === "OP")) && ((fixity$1 = t0$4[1]), (bridge$$3559$0 = t0$4[2]), ((bridge$$3559$0 === "[") || (bridge$$3559$0 === "{")))))) {
          stack$0.push(curr$0);
          stacks$0.push(stack$0);
          stack$0 = [];
          curr$0 = false;
          return [token$1];
        } else {
          if (($$3567$0 && ((fixity$2 = t0$4[1]), (bridge$$3561$0 = t0$4[2]), ((bridge$$3561$0 === "]") || (bridge$$3561$0 === "}"))))) {
            acc$0 = [];
            temp$2 = null;
            m$13 = null;
            $4: for (var $__0 = stack$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$13 = $__1.value;
              {
                temp$2 = __amp__(["OP", "SFX", "]"], ({
                  "wsb": true,
                  "wsa": true
                }));
                acc$0.push(temp$2);
              }
            }
            rval$1 = acc$0;
            stack$0 = stacks$0.pop();
            curr$0 = stack$0.pop();
            rval$1.push(token$1);
            return rval$1;
          } else {
            if (((x$1 = ph$1$0), ((x$1 instanceof Array) && (x$1[0] === "EOF")))) {
              acc$1 = [];
              temp$3 = null;
              m$14 = null;
              $5: for (var $__2 = stack$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__3; !($__3 = $__2.next()).done; ) {
                m$14 = $__3.value;
                {
                  temp$3 = __amp__(["OP", "SFX", "]"], ({
                    "wsb": true,
                    "wsa": true
                  }));
                  acc$1.push(temp$3);
                }
              }
              return acc$1;
            } else {
              other$0 = ph$1$0;
              return [token$1];
            }
          }
        }
      }
    }
  });
});
process_indent$0 = (function process_indent(stream$0) {
  var m$15;
  var tracker$0;
  var results$1;
  tracker$0 = indent_tracker$0();
  results$1 = [];
  m$15 = null;
  $6: for (var $__0 = stream$0[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$15 = $__1.value;
    {
      var token$2;
      token$2 = m$15;
      results$1 = results$1.concat(tracker$0(token$2));
    }
  }
  return results$1.concat(tracker$0(["EOF"]));
});
disambiguate_fixity$0 = (function disambiguate_fixity(stream$1) {
  var m$22;
  var __lt____lt____lt____colon__$0;
  var collapse_operators$0;
  var buffer$0;
  var pfx$0;
  var collapse$0;
  var results$2;
  __lt____lt____lt____colon__$0 = (function(a$0, b$0) {
    var $targ$5;
    var $targ$6;
    $targ$5 = b$0.wsb;
    (a$0["wsb"] = $targ$5);
    [];
    $targ$6 = b$0.wsa;
    (a$0["wsa"] = $targ$6);
    [];
    return __lt____lt____colon__$0(a$0, b$0);
  });
  collapse_operators$0 = (function collapse_operators() {
    var msg$0;
    var longer$0;
    var token$3;
    var fixity$3;
    var name$0;
    var t0$7;
    var t1$5;
    var t2$2;
    var m$17$0;
    var m$18;
    var acc$2;
    var temp$4;
    var m$19;
    var acc$3;
    var temp$5;
    var t0$10;
    var t1$8;
    var t2$3;
    var t3$0;
    var t0$12;
    var t0$13;
    var t0$14;
    var t0$15;
    var t1$9;
    var t2$4;
    var bridge$$4048$0;
    var m$21$0;
    var t$0;
    var results$3;
    var $$3973$0;
    var $$3974$0;
    var $$3975$0;
    var bridge$$3970$0;
    var t0$11;
    var m$20$0;
    var $targ$7;
    var first$0;
    var fixity$4;
    var name$3;
    var rest$0;
    var n$0;
    var $$3813$0;
    var $$3814$0;
    var $$3815$0;
    var t0$6;
    var t1$4;
    var buffer$1;
    var ph$6$0;
    var t0$5;
    var m$16$0;
    m$16$0 = arguments;
    t0$5 = m$16$0.length;
    if ((t0$5 >= 1)) {
      buffer$1 = m$16$0[0];
      ph$6$0 = Array.prototype.slice.call(m$16$0, 1);
      n$0 = buffer$1.length;
      if ((!buffer$1.length)) {
        return [];
      } else {
        t0$6 = ph$6$0;
        t1$4 = t0$6.length;
        if ((($$3815$0 = (t1$4 === 2)) && ((t0$6[0] ? true : false) && (t0$6[1] ? true : false)))) {
          m$17$0 = buffer$1;
          if (((m$17$0 instanceof Array) && ((t0$7 = m$17$0.length), ((t0$7 === 1) && ((t1$5 = m$17$0[0]), (token$3 = t1$5), ((t1$5 instanceof Array) && ((t2$2 = t1$5.length), ((t2$2 === 3) && (t1$5[0] === "OP"))))))))) {
            fixity$3 = t1$5[1];
            name$0 = t1$5[2];
            return [__lt____lt____lt____colon__$0(["ID", name$0], token$3)];
          } else {
            longer$0 = m$17$0;
            msg$0 = "Too many consecutive operators were found here.";
            throw ErrorFactory(["syntax", "nullary"]).create(msg$0, ({"operators": buffer$1}));
          }
        } else {
          if (($$3815$0 && (t0$6[0] ? true : false))) {
            t0$6[1];
            acc$2 = [];
            temp$4 = null;
            m$18 = null;
            $8: for (var $__0 = buffer$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$18 = $__1.value;
              {
                var token$4;
                var name$1;
                var t0$8;
                var t1$6;
                t0$8 = m$18;
                token$4 = t0$8;
                if (((t0$8 instanceof Array) && ((t1$6 = t0$8.length), ((t1$6 === 3) && (t0$8[0] === "OP"))))) {
                  t0$8[1];
                  name$1 = t0$8[2];
                  temp$4 = __lt____lt____lt____colon__$0(["OP", "PFX", name$1], token$4);
                  acc$2.push(temp$4);
                } else {
                  ___match_error(m$18, "/home/olivier/git/earl-grey/src/lex.eg", 8806, 8890);
                }
              }
            }
            return acc$2;
          } else {
            if (($$3815$0 && (t0$6[0], (t0$6[1] ? true : false)))) {
              acc$3 = [];
              temp$5 = null;
              m$19 = null;
              $9: for (var $__2 = buffer$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__3; !($__3 = $__2.next()).done; ) {
                m$19 = $__3.value;
                {
                  var token$5;
                  var name$2;
                  var t0$9;
                  var t1$7;
                  t0$9 = m$19;
                  token$5 = t0$9;
                  if (((t0$9 instanceof Array) && ((t1$7 = t0$9.length), ((t1$7 === 3) && (t0$9[0] === "OP"))))) {
                    t0$9[1];
                    name$2 = t0$9[2];
                    temp$5 = __lt____lt____lt____colon__$0(["OP", "SFX", name$2], token$5);
                    acc$3.push(temp$5);
                  } else {
                    ___match_error(m$19, "/home/olivier/git/earl-grey/src/lex.eg", 8913, 8997);
                  }
                }
              }
              return acc$3;
            } else {
              $targ$7 = buffer$1;
              t0$10 = $targ$7;
              if (((t0$10 instanceof Array) && ((t1$8 = t0$10.length), ((t1$8 >= 1) && ((t2$3 = t0$10[0]), (first$0 = t2$3), ((t2$3 instanceof Array) && ((t3$0 = t2$3.length), ((t3$0 === 3) && (t2$3[0] === "OP"))))))))) {
                fixity$4 = t2$3[1];
                name$3 = t2$3[2];
                rest$0 = Array.prototype.slice.call(t0$10, 1);
              } else {
                ___match_error($targ$7);
              }
              [first$0, fixity$4, name$3, rest$0];
              m$20$0 = [first$0.wsb, first$0.wsa];
              bridge$$3970$0 = m$20$0;
              if ((((bridge$$3970$0 instanceof Array) && ((t0$12 = bridge$$3970$0.length), ((t0$12 === 2) && ((!bridge$$3970$0[0]) && (!bridge$$3970$0[1]))))) || ((bridge$$3970$0 instanceof Array) && ((t0$13 = bridge$$3970$0.length), ((t0$13 === 2) && ((bridge$$3970$0[0] ? true : false) && (bridge$$3970$0[1] ? true : false))))))) {
                return [__lt____lt____lt____colon__$0(["OP", "IFX", name$3], first$0)].concat(collapse_operators$0(rest$0, true, false));
              } else {
                if ((($$3973$0 = (m$20$0 instanceof Array)) && ((t0$11 = m$20$0.length), (($$3975$0 = (t0$11 === 2)) && (m$20$0[0] ? true : false))))) {
                  m$20$0[1];
                  return [__lt____lt____lt____colon__$0(["OP", "PFX", name$3], first$0)].concat(collapse_operators$0(rest$0, true, false));
                } else {
                  if (($$3975$0 && (m$20$0[0], (m$20$0[1] ? true : false)))) {
                    results$3 = collapse_operators$0(rest$0, false, false);
                    m$21$0 = results$3;
                    bridge$$4048$0 = m$21$0;
                    if ((((bridge$$4048$0 instanceof Array) && ((t0$14 = bridge$$4048$0.length), (t0$14 === 0))) || ((bridge$$4048$0 instanceof Array) && ((t0$15 = bridge$$4048$0.length), ((t0$15 >= 1) && ((t1$9 = bridge$$4048$0[0]), ((t1$9 instanceof Array) && ((t2$4 = t1$9.length), ((t2$4 >= 2) && ((t1$9[0] === "OP") && ((t1$9[1] === "PFX") && (Array.prototype.slice.call(t1$9, 2), Array.prototype.slice.call(bridge$$4048$0, 1), true)))))))))))) {
                      t$0 = ["OP", "IFX", name$3];
                    } else {
                      t$0 = ["OP", "SFX", name$3];
                    }
                    return [__lt____lt____lt____colon__$0(t$0, first$0)].concat(results$3);
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
  });
  buffer$0 = [];
  pfx$0 = true;
  collapse$0 = (function collapse(sfx$0) {
    var rval$2;
    rval$2 = collapse_operators$0(buffer$0, pfx$0, sfx$0);
    buffer$0 = [];
    return rval$2;
  });
  results$2 = [];
  m$22 = null;
  $7: for (var $__0 = stream$1[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$22 = $__1.value;
    {
      var other$1;
      var ph$4$0;
      var name$4;
      var t0$17;
      var t1$10;
      var token$6;
      var ph$3$0;
      var t0$16;
      t0$16 = m$22;
      token$6 = t0$16;
      ph$3$0 = t0$16;
      t0$17 = ph$3$0;
      if (((t0$17 instanceof Array) && ((t1$10 = t0$17.length), ((t1$10 === 3) && (t0$17[0] === "OP"))))) {
        ph$4$0 = t0$17[1];
        name$4 = t0$17[2];
        if ((ph$4$0 === "?FX")) {
          buffer$0.push(token$6);
        } else {
          if ((ph$4$0 === "IFX")) {
            results$2 = results$2.concat(collapse$0(true));
            results$2.push(token$6);
            pfx$0 = true;
            pfx$0;
          } else {
            if ((ph$4$0 === "PFX")) {
              results$2 = results$2.concat(collapse$0(false));
              results$2.push(token$6);
              pfx$0 = true;
              pfx$0;
            } else {
              if ((ph$4$0 === "SFX")) {
                results$2 = results$2.concat(collapse$0(true));
                results$2.push(token$6);
                pfx$0 = false;
                pfx$0;
              } else {
                ___match_error(ph$4$0);
              }
            }
          }
        }
      } else {
        other$1 = ph$3$0;
        results$2 = results$2.concat(collapse$0(false));
        results$2.push(token$6);
        pfx$0 = false;
        pfx$0;
      }
    }
  }
  return results$2.concat(collapse$0(true));
});
alternate_operators$0 = (function alternate_operators(stream$2) {
  var m$23;
  var W$0;
  var last_op$0;
  var results$4;
  W$0 = (function W(x$2) {
    if (x$2) {
      return "wide";
    } else {
      return "short";
    }
  });
  last_op$0 = true;
  results$4 = [];
  m$23 = null;
  $10: for (var $__0 = stream$2[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$23 = $__1.value;
    {
      var x$3;
      var m$24$0;
      var token$8;
      var fixity$5;
      var name$5;
      var t0$19;
      var t1$11;
      var token$7;
      var ph$7$0;
      var t0$18;
      t0$18 = m$23;
      token$7 = t0$18;
      ph$7$0 = t0$18;
      if (((x$3 = ph$7$0), ((x$3 instanceof Array) && (x$3[0] === "IGNORE")))) {
        null;
      } else {
        t0$19 = ph$7$0;
        if (((t0$19 instanceof Array) && ((t1$11 = t0$19.length), ((t1$11 === 3) && (t0$19[0] === "OP"))))) {
          fixity$5 = t0$19[1];
          name$5 = t0$19[2];
          if (last_op$0) {
            results$4.push(["VOID"]);
          }
          m$24$0 = fixity$5;
          if ((m$24$0 === "IFX")) {
            results$4.push(__lt____lt____colon__$0(["IFX", W$0((token$7.wsa || token$7.wsb)), name$5], token$7));
            last_op$0 = true;
            last_op$0;
          } else {
            if ((m$24$0 === "PFX")) {
              if ((!last_op$0)) {
                results$4.push(["IFX", W$0(token$7.wsb), "WHITE"], ["VOID"]);
              }
              results$4.push(__lt____lt____colon__$0(["PFX", W$0(token$7.wsa), name$5], token$7));
              last_op$0 = true;
              last_op$0;
            } else {
              if ((m$24$0 === "SFX")) {
                results$4.push(__lt____lt____colon__$0(["SFX", W$0(token$7.wsb), name$5], token$7), ["VOID"]);
                last_op$0 = false;
                last_op$0;
              } else {
                ___match_error(m$24$0);
              }
            }
          }
        } else {
          token$8 = ph$7$0;
          if ((!last_op$0)) {
            results$4.push(["IFX", W$0(token$8.wsb), "WHITE"]);
          }
          results$4.push(token$8);
          last_op$0 = false;
          last_op$0;
        }
      }
    }
  }
  if (last_op$0) {
    results$4.push(["VOID"]);
  }
  return results$4;
});
fill_locations$0 = (function fill_locations(source$0, stream$3) {
  var m$26;
  var to_fill$0;
  var start$0;
  var fill$0;
  to_fill$0 = [];
  start$0 = 0;
  fill$0 = (function fill(end$0) {
    var m$25;
    var first$1;
    first$1 = true;
    m$25 = null;
    $12: for (var $__0 = to_fill$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$25 = $__1.value;
      {
        var s$0;
        var $targ$8;
        var token$9;
        token$9 = m$25;
        if (first$1) {
          first$1 = false;
          s$0 = start$0;
        } else {
          s$0 = end$0;
        }
        $targ$8 = Location$0(source$0, s$0, end$0);
        (token$9["location"] = $targ$8);
        [];
      }
    }
    to_fill$0 = [];
    return to_fill$0;
  });
  m$26 = null;
  $11: for (var $__0 = stream$3[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$26 = $__1.value;
    {
      var other$2;
      var location$0;
      var t0$20;
      t0$20 = m$26;
      if ((___hasprop(t0$20, "location") && ((location$0 = t0$20.location), location$0))) {
        fill$0(location$0.start);
        start$0 = location$0.end;
        start$0;
      } else {
        other$2 = m$26;
        to_fill$0.push(other$2);
      }
    }
  }
  fill$0(source$0.text.length);
  return stream$3;
});
tokenize$0 = (function tokenize(src$1) {
  var $it$4;
  var $it$3;
  var $it$2;
  var $it$1;
  var $it$0;
  $it$0 = src$1;
  $it$1 = produce$0($it$0);
  $it$2 = process_indent$0($it$1);
  $it$3 = disambiguate_fixity$0($it$2);
  $it$4 = alternate_operators$0($it$3);
  return fill_locations$0(src$1, $it$4);
});
$targ$9 = tokenize$0;
(exports["tokenize"] = $targ$9);
[];
$targ$10 = process_indent$0;
(exports["process_indent"] = $targ$10);
[];
$targ$11 = disambiguate_fixity$0;
(exports["disambiguate_fixity"] = $targ$11);
[];
$targ$12 = alternate_operators$0;
(exports["alternate_operators"] = $targ$12);
[];
$targ$13 = fill_locations$0;
(exports["fill_locations"] = $targ$13);
[];
//# sourceURL=<compile-source>
