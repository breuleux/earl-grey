"use strict";
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
var $targ$194;
var $targ$195;
var $targ$196;
var $targ$197;
var $targ$198;
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
  "'": "PFX",
  "not": "PFX"
});
id$0 = RegExp("(?:^(?:\\.\\.\\.|(?:(?:[a-zA-Z$_]|(?:\\\\_.))(?:(?:[a-zA-Z$_0-9]|(?:\\\\_.))*))))", "");
id_f$0 = (function(m$0) {
  return ["ID", m$0[0].replace(RegExp("\\\\_(.)", "g"), (function(temp$0$0, x$0) {
    return x$0;
  }))];
});
numr$0 = RegExp("(?:^((?:\\d+))[rR]((?:[A-Za-z0-9_]+))(?:(?:\\.((?:[A-Za-z0-9_]+)))?))", "");
numr_f$0 = (function(m$1) {
  var t1$0;
  var t0$0;
  var frac$1;
  var $targ$43;
  var $targ$38;
  var radix$0;
  var intp$0;
  var frac$0;
  var $targ$39;
  var value$0;
  $targ$38 = m$1;
  t0$0 = $targ$38;
  if (((t0$0 instanceof Array) && ((t1$0 = t0$0.length), (t1$0 === 4)))) {
    t0$0[0];
    radix$0 = t0$0[1];
    intp$0 = t0$0[2];
    frac$0 = t0$0[3];
  } else {
    ___match_error($targ$38);
  }
  [radix$0, intp$0, frac$0];
  $targ$39 = parseInt(intp$0.replace(RegExp("_", "g"), ""), radix$0);
  value$0 = $targ$39;
  if (frac$0) {
    frac$1 = frac$0.replace(RegExp("_", "g"), "");
    $targ$43 = (value$0 + (parseInt(frac$0, radix$0) / Math.pow(radix$0, frac$0.length)));
    value$0 = $targ$43;
    value$0;
  }
  return ["NUM", value$0];
});
num$0 = RegExp("(?:^((?:[0-9_]+))(?:(?:\\.((?:\\d+)))?)(?:(?:[eE]((?:[+-]?)(?:[0-9_]+)))?))", "");
num_f$0 = (function(m$2) {
  return ["NUM", parseFloat(m$2[0].replace(RegExp("_", "g"), ""))];
});
quasi$0 = RegExp("(?:^`((?:(?:(?:\\\\.)|[^`])*))`)", "");
quasi2$0 = RegExp("^[`]{3,}((?:[\\\\.]|[^`]|``?[^`])*)[`]{3,}", "");
quasi_f$0 = (function(m$3) {
  return ["QUASI", m$3[1]];
});
str$0 = RegExp("(?:^\"((?:(?:(?:\\\\.)|[^\"])*))\")", "");
str2$0 = RegExp("^[\\\"]{3,}((?:[\\\\.]|[^\\\"]|\\\"\\\"?[^\\\"])*)[\\\"]{3,}", "");
str_f$0 = (function(m$4) {
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
  f$0 = (function(ph$0$0) {
    var $targ$50;
    var $targ$49;
    var $targ$53;
    var $targ$52;
    var $targ$51;
    var chr$0;
    var $targ$48;
    var digits$0;
    var t0$1;
    var t1$1;
    var t2$0;
    $targ$48 = getProjector(RegExp("^(?:\\\\u|\\\\x)(.*)", ""))(ph$0$0);
    t0$1 = $targ$48;
    if ((t0$1[0] && (($targ$49 = t0$1[1]), (t1$1 = $targ$49), ($targ$50 = t1$1.length), (t2$0 = $targ$50), (t2$0 === 2)))) {
      t1$1[0];
      digits$0 = t1$1[1];
      return String.fromCharCode(parseInt(digits$0, 16));
    } else {
      $targ$51 = getProjector(RegExp("^.(.)", ""))(ph$0$0);
      t0$1 = $targ$51;
      if ((t0$1[0] && (($targ$52 = t0$1[1]), (t1$1 = $targ$52), ($targ$53 = t1$1.length), (t2$0 = $targ$53), (t2$0 === 2)))) {
        t1$1[0];
        chr$0 = t1$1[1];
        return (send(repl$0, chr$0) || chr$0);
      } else {
        return ___match_error(ph$0$0);
      }
    }
  });
  r$0 = m$4[1].replace(rx$0, f$0);
  return ["STR", r$0];
});
op$0 = RegExp("(?:^(?:[+\\-*/~\\^<>=%&|?!@#.:']+))", "");
op2$0 = RegExp("(?:^[\\[\\{\\}\\],])", "");
op3$0 = RegExp("(?:^(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:with|where)|when)|and)|not)|or)|in)|mod)|each)|as)|of)|is)(?:(?:[+\\-*/~\\^<>=%&|?!@#.:']+)|\\b))", "");
op_f$0 = (function(m$5, column$0) {
  var fixity$0;
  var otherwise$0;
  var $$3206$0;
  var m$6$0;
  var op$1;
  op$1 = (m$5[1] || m$5[0]);
  m$6$0 = null;
  if ((op$1 === "|")) {
    return ["INDENT", (column$0 - 1)];
  } else {
    if (send(special_ops$0, op$1)) {
      fixity$0 = send(special_ops$0, op$1);
      return ["OP", fixity$0, op$1];
    } else {
      otherwise$0 = m$6$0;
      return ["OP", "?FX", op$1];
    }
  }
});
indent$0 = RegExp("(?:^(?:(?:\n(?: *);(?:[^\n]*))*)(?:(?:\n((?: *)))+))", "");
indent_f$0 = (function(m$7) {
  var ilen$0;
  ilen$0 = m$7[1].length;
  return ["INDENT", ilen$0];
});
indent2$0 = RegExp("(?:^\\\\\\\\)", "");
indent2_f$0 = (function(m$8, column$1) {
  return ["INDENT", (column$1 - 2)];
});
cmnt$0 = RegExp("(?:^;(?:[^\n]*))", "");
cmnt_f$0 = (function(m$9) {
  return ["IGNORE"];
});
unkn$0 = RegExp("(?:^.)", "");
unkn_f$0 = (function(m$10) {
  return ["ILLEGAL", m$10[0]];
});
regexps$0 = [[op3$0, op_f$0], [id$0, id_f$0], [numr$0, numr_f$0], [num$0, num_f$0], [str2$0, str_f$0], [str$0, str_f$0], [quasi2$0, quasi_f$0], [quasi$0, quasi_f$0], [op$0, op_f$0], [op2$0, op_f$0], [indent$0, indent_f$0], [indent2$0, indent2_f$0], [cmnt$0, cmnt_f$0], [unkn$0, unkn_f$0]];
ws_re$0 = RegExp("(?:^(?: *)(?:(?:\n(?: *)\\\\ (?: *))*))", "");
eol_re$0 = RegExp("(?:^(?: *)(?:\n|$))", "");
produce$0 = (function(src$0) {
  var $targ$58;
  var text$0;
  var results$0;
  var $targ$60;
  var wsb$0;
  var $targ$61;
  var $targ$62;
  var pos$0;
  var $targ$63;
  var column$2;
  $targ$58 = src$0.text;
  text$0 = $targ$58;
  results$0 = [];
  $targ$60 = text$0.match(ws_re$0)[0].length;
  wsb$0 = $targ$60;
  $targ$61 = text$0.slice(wsb$0);
  text$0 = $targ$61;
  $targ$62 = wsb$0;
  pos$0 = $targ$62;
  $targ$63 = 0;
  column$2 = $targ$63;
  $1: while (text$0) {
    var i$0;
    i$0 = 0;
    $2: for (null; (i$0 < regexps$0.length); (++i$0)) {
      var t1$2;
      var t0$2;
      var splits$0;
      var skip$0;
      var endpos$0;
      var $targ$71;
      var $targ$72;
      var wsa$0;
      var eol$0;
      var bwsb$0;
      var bwsa$0;
      var token$0;
      var $targ$78;
      var $targ$79;
      var $targ$80;
      var $targ$81;
      var $targ$82;
      var $targ$83;
      var $targ$65;
      var re$0;
      var fn$0;
      var m$11;
      $targ$65 = send(regexps$0, i$0);
      t0$2 = $targ$65;
      if (((t0$2 instanceof Array) && ((t1$2 = t0$2.length), (t1$2 === 2)))) {
        re$0 = t0$2[0];
        fn$0 = t0$2[1];
      } else {
        ___match_error($targ$65);
      }
      [re$0, fn$0];
      m$11 = text$0.match(re$0);
      if (m$11) {
        skip$0 = m$11[0].length;
        endpos$0 = (pos$0 + skip$0);
        splits$0 = m$11[0].split("\n");
        if ((splits$0.length > 1)) {
          $targ$71 = send(splits$0, (splits$0.length - 1)).length;
        } else {
          $targ$71 = (column$2 + skip$0);
        }
        column$2 = $targ$71;
        $targ$72 = text$0.slice(skip$0);
        text$0 = $targ$72;
        wsa$0 = text$0.match(ws_re$0)[0].length;
        eol$0 = (text$0.match(eol_re$0) && true);
        bwsb$0 = (wsb$0 > 0);
        if (eol$0) {
          bwsa$0 = bwsb$0;
        } else {
          bwsa$0 = (wsa$0 > 0);
        }
        token$0 = fn$0(m$11, column$2);
        $targ$78 = bwsb$0;
        (token$0["wsb"] = $targ$78);
        [];
        $targ$79 = bwsa$0;
        (token$0["wsa"] = $targ$79);
        [];
        $targ$80 = Location$0(src$0, pos$0, endpos$0);
        (token$0["location"] = $targ$80);
        [];
        results$0.push(token$0);
        $targ$81 = text$0.slice(wsa$0);
        text$0 = $targ$81;
        column$2 = (column$2 + wsa$0);
        $targ$82 = wsa$0;
        wsb$0 = $targ$82;
        $targ$83 = (endpos$0 + wsa$0);
        pos$0 = $targ$83;
        break $2;
      }
    }
  }
  return results$0;
});
indent_tracker$0 = (function() {
  var $targ$85;
  var curr$0;
  var $targ$86;
  var stack$0;
  var stacks$0;
  $targ$85 = 0;
  curr$0 = $targ$85;
  $targ$86 = [];
  stack$0 = $targ$86;
  stacks$0 = [stack$0];
  return (function(temp$1$0) {
    var t0$3;
    var $targ$92;
    var $targ$93;
    var rval$0;
    var t2$1;
    var bridge$$3424$0;
    var $targ$97;
    var $targ$98;
    var bridge$$3426$0;
    var m$12;
    var acc$0;
    var $targ$104;
    var temp$2;
    var rval$1;
    var $targ$101;
    var $targ$102;
    var x$1;
    var m$13;
    var acc$1;
    var $targ$108;
    var temp$3;
    var other$0;
    var fixity$2;
    var fixity$1;
    var stuff$0;
    var t0$4;
    var t1$3;
    var new_indent$0;
    var ph$2$0;
    var $$3429$0;
    var $$3430$0;
    var $$3431$0;
    var $$3432$0;
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
        $targ$92 = new_indent$0;
        curr$0 = $targ$92;
        return [__amp__(["OP", "IFX", ","], ({
          "wsb": true,
          "wsa": true
        }))];
      } else {
        if ((ph$2$0 > curr$0)) {
          stack$0.push(curr$0);
          $targ$93 = new_indent$0;
          curr$0 = $targ$93;
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
                var $targ$95;
                $targ$95 = stack$0.pop();
                curr$0 = $targ$95;
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
        if ((($$3431$0 = (t1$3 === 3)) && (($$3432$0 = (t0$4[0] === "OP")) && ((fixity$1 = t0$4[1]), (bridge$$3424$0 = t0$4[2]), ((bridge$$3424$0 === "[") || (bridge$$3424$0 === "{")))))) {
          stack$0.push(curr$0);
          stacks$0.push(stack$0);
          $targ$97 = [];
          stack$0 = $targ$97;
          $targ$98 = false;
          curr$0 = $targ$98;
          return [token$1];
        } else {
          if (($$3432$0 && ((fixity$2 = t0$4[1]), (bridge$$3426$0 = t0$4[2]), ((bridge$$3426$0 === "]") || (bridge$$3426$0 === "}"))))) {
            acc$0 = [];
            $targ$104 = null;
            temp$2 = $targ$104;
            m$12 = null;
            $4: for (var $__0 = stack$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$12 = $__1.value;
              {
                var $targ$105;
                $targ$105 = __amp__(["OP", "SFX", "]"], ({
                  "wsb": true,
                  "wsa": true
                }));
                temp$2 = $targ$105;
                acc$0.push(temp$2);
              }
            }
            rval$1 = acc$0;
            $targ$101 = stacks$0.pop();
            stack$0 = $targ$101;
            $targ$102 = stack$0.pop();
            curr$0 = $targ$102;
            rval$1.push(token$1);
            return rval$1;
          } else {
            if (((x$1 = ph$1$0), ((x$1 instanceof Array) && (x$1[0] === "EOF")))) {
              acc$1 = [];
              $targ$108 = null;
              temp$3 = $targ$108;
              m$13 = null;
              $5: for (var $__2 = stack$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__3; !($__3 = $__2.next()).done; ) {
                m$13 = $__3.value;
                {
                  var $targ$109;
                  $targ$109 = __amp__(["OP", "SFX", "]"], ({
                    "wsb": true,
                    "wsa": true
                  }));
                  temp$3 = $targ$109;
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
process_indent$0 = (function(stream$0) {
  var m$14;
  var tracker$0;
  var $targ$111;
  var results$1;
  tracker$0 = indent_tracker$0();
  $targ$111 = [];
  results$1 = $targ$111;
  m$14 = null;
  $6: for (var $__0 = stream$0[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$14 = $__1.value;
    {
      var token$2;
      token$2 = m$14;
      results$1 = results$1.concat(tracker$0(token$2));
    }
  }
  return results$1.concat(tracker$0(["EOF"]));
});
disambiguate_fixity$0 = (function(stream$1) {
  var m$21;
  var __lt____lt____lt____colon__$0;
  var collapse_operators$0;
  var $targ$114;
  var buffer$0;
  var $targ$115;
  var pfx$0;
  var collapse$0;
  var $targ$117;
  var results$2;
  __lt____lt____lt____colon__$0 = (function(a$0, b$0) {
    var $targ$118;
    var $targ$119;
    $targ$118 = b$0.wsb;
    (a$0["wsb"] = $targ$118);
    [];
    $targ$119 = b$0.wsa;
    (a$0["wsa"] = $targ$119);
    [];
    return __lt____lt____colon__$0(a$0, b$0);
  });
  collapse_operators$0 = (function() {
    var t2$2;
    var t1$5;
    var t0$7;
    var msg$0;
    var longer$0;
    var token$3;
    var fixity$3;
    var name$0;
    var m$16$0;
    var m$17;
    var acc$2;
    var $targ$131;
    var temp$4;
    var m$18;
    var acc$3;
    var $targ$136;
    var temp$5;
    var t3$0;
    var t2$3;
    var t1$8;
    var t0$10;
    var t0$12;
    var t0$13;
    var t0$11;
    var t0$14;
    var t2$4;
    var t1$9;
    var t0$15;
    var bridge$$3909$0;
    var m$20$0;
    var t$0;
    var results$3;
    var bridge$$3833$0;
    var $$3836$0;
    var $$3837$0;
    var $$3838$0;
    var m$19$0;
    var $targ$140;
    var first$0;
    var fixity$4;
    var name$3;
    var rest$0;
    var t0$6;
    var t1$4;
    var n$0;
    var $$3676$0;
    var $$3677$0;
    var $$3678$0;
    var t0$5;
    var buffer$1;
    var ph$6$0;
    var m$15$0;
    m$15$0 = arguments;
    t0$5 = m$15$0.length;
    if ((t0$5 >= 1)) {
      buffer$1 = m$15$0[0];
      ph$6$0 = Array.prototype.slice.call(m$15$0, 1);
      n$0 = buffer$1.length;
      if ((!buffer$1.length)) {
        return [];
      } else {
        t0$6 = ph$6$0;
        t1$4 = t0$6.length;
        if ((($$3678$0 = (t1$4 === 2)) && ((t0$6[0] ? true : false) && (t0$6[1] ? true : false)))) {
          m$16$0 = buffer$1;
          if (((m$16$0 instanceof Array) && ((t0$7 = m$16$0.length), ((t0$7 === 1) && ((t1$5 = m$16$0[0]), (token$3 = t1$5), ((t1$5 instanceof Array) && ((t2$2 = t1$5.length), ((t2$2 === 3) && (t1$5[0] === "OP"))))))))) {
            fixity$3 = t1$5[1];
            name$0 = t1$5[2];
            return [__lt____lt____lt____colon__$0(["ID", name$0], token$3)];
          } else {
            longer$0 = m$16$0;
            msg$0 = "Too many consecutive operators were found here.";
            throw ErrorFactory(["syntax", "nullary"]).create(msg$0, ({"operators": buffer$1}));
          }
        } else {
          if (($$3678$0 && (t0$6[0] ? true : false))) {
            t0$6[1];
            acc$2 = [];
            $targ$131 = null;
            temp$4 = $targ$131;
            m$17 = null;
            $8: for (var $__0 = buffer$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$17 = $__1.value;
              {
                var t1$6;
                var $targ$134;
                var t0$8;
                var token$4;
                var name$1;
                t0$8 = m$17;
                token$4 = t0$8;
                if (((t0$8 instanceof Array) && ((t1$6 = t0$8.length), ((t1$6 === 3) && (t0$8[0] === "OP"))))) {
                  t0$8[1];
                  name$1 = t0$8[2];
                  $targ$134 = __lt____lt____lt____colon__$0(["OP", "PFX", name$1], token$4);
                  temp$4 = $targ$134;
                  acc$2.push(temp$4);
                } else {
                  ___match_error(m$17, "/home/olivier/git/earl-grey/src/lex.eg", 8460, 8544);
                }
              }
            }
            return acc$2;
          } else {
            if (($$3678$0 && (t0$6[0], (t0$6[1] ? true : false)))) {
              acc$3 = [];
              $targ$136 = null;
              temp$5 = $targ$136;
              m$18 = null;
              $9: for (var $__2 = buffer$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__3; !($__3 = $__2.next()).done; ) {
                m$18 = $__3.value;
                {
                  var t1$7;
                  var $targ$139;
                  var t0$9;
                  var token$5;
                  var name$2;
                  t0$9 = m$18;
                  token$5 = t0$9;
                  if (((t0$9 instanceof Array) && ((t1$7 = t0$9.length), ((t1$7 === 3) && (t0$9[0] === "OP"))))) {
                    t0$9[1];
                    name$2 = t0$9[2];
                    $targ$139 = __lt____lt____lt____colon__$0(["OP", "SFX", name$2], token$5);
                    temp$5 = $targ$139;
                    acc$3.push(temp$5);
                  } else {
                    ___match_error(m$18, "/home/olivier/git/earl-grey/src/lex.eg", 8567, 8651);
                  }
                }
              }
              return acc$3;
            } else {
              $targ$140 = buffer$1;
              t0$10 = $targ$140;
              if (((t0$10 instanceof Array) && ((t1$8 = t0$10.length), ((t1$8 >= 1) && ((t2$3 = t0$10[0]), (first$0 = t2$3), ((t2$3 instanceof Array) && ((t3$0 = t2$3.length), ((t3$0 === 3) && (t2$3[0] === "OP"))))))))) {
                fixity$4 = t2$3[1];
                name$3 = t2$3[2];
                rest$0 = Array.prototype.slice.call(t0$10, 1);
              } else {
                ___match_error($targ$140);
              }
              [first$0, fixity$4, name$3, rest$0];
              m$19$0 = [first$0.wsb, first$0.wsa];
              bridge$$3833$0 = m$19$0;
              if ((((bridge$$3833$0 instanceof Array) && ((t0$12 = bridge$$3833$0.length), ((t0$12 === 2) && ((!bridge$$3833$0[0]) && (!bridge$$3833$0[1]))))) || ((bridge$$3833$0 instanceof Array) && ((t0$13 = bridge$$3833$0.length), ((t0$13 === 2) && ((bridge$$3833$0[0] ? true : false) && (bridge$$3833$0[1] ? true : false))))))) {
                return [__lt____lt____lt____colon__$0(["OP", "IFX", name$3], first$0)].concat(collapse_operators$0(rest$0, true, false));
              } else {
                if ((($$3836$0 = (m$19$0 instanceof Array)) && ((t0$11 = m$19$0.length), (($$3838$0 = (t0$11 === 2)) && (m$19$0[0] ? true : false))))) {
                  m$19$0[1];
                  return [__lt____lt____lt____colon__$0(["OP", "PFX", name$3], first$0)].concat(collapse_operators$0(rest$0, true, false));
                } else {
                  if (($$3838$0 && (m$19$0[0], (m$19$0[1] ? true : false)))) {
                    results$3 = collapse_operators$0(rest$0, false, false);
                    m$20$0 = results$3;
                    bridge$$3909$0 = m$20$0;
                    if ((((bridge$$3909$0 instanceof Array) && ((t0$14 = bridge$$3909$0.length), (t0$14 === 0))) || ((bridge$$3909$0 instanceof Array) && ((t0$15 = bridge$$3909$0.length), ((t0$15 >= 1) && ((t1$9 = bridge$$3909$0[0]), ((t1$9 instanceof Array) && ((t2$4 = t1$9.length), ((t2$4 >= 2) && ((t1$9[0] === "OP") && ((t1$9[1] === "PFX") && (Array.prototype.slice.call(t1$9, 2), Array.prototype.slice.call(bridge$$3909$0, 1), true)))))))))))) {
                      t$0 = ["OP", "IFX", name$3];
                    } else {
                      t$0 = ["OP", "SFX", name$3];
                    }
                    return [__lt____lt____lt____colon__$0(t$0, first$0)].concat(results$3);
                  } else {
                    return ___match_error(m$19$0);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      return ___match_error(m$15$0);
    }
  });
  $targ$114 = [];
  buffer$0 = $targ$114;
  $targ$115 = true;
  pfx$0 = $targ$115;
  collapse$0 = (function(sfx$0) {
    var rval$2;
    var $targ$159;
    rval$2 = collapse_operators$0(buffer$0, pfx$0, sfx$0);
    $targ$159 = [];
    buffer$0 = $targ$159;
    return rval$2;
  });
  $targ$117 = [];
  results$2 = $targ$117;
  m$21 = null;
  $7: for (var $__0 = stream$1[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$21 = $__1.value;
    {
      var t1$10;
      var $targ$163;
      var $targ$164;
      var $targ$165;
      var $targ$166;
      var other$1;
      var t0$17;
      var ph$4$0;
      var name$4;
      var t0$16;
      var token$6;
      var ph$3$0;
      t0$16 = m$21;
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
            $targ$163 = true;
            pfx$0 = $targ$163;
            pfx$0;
          } else {
            if ((ph$4$0 === "PFX")) {
              results$2 = results$2.concat(collapse$0(false));
              results$2.push(token$6);
              $targ$164 = true;
              pfx$0 = $targ$164;
              pfx$0;
            } else {
              if ((ph$4$0 === "SFX")) {
                results$2 = results$2.concat(collapse$0(true));
                results$2.push(token$6);
                $targ$165 = false;
                pfx$0 = $targ$165;
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
        $targ$166 = false;
        pfx$0 = $targ$166;
        pfx$0;
      }
    }
  }
  return results$2.concat(collapse$0(true));
});
alternate_operators$0 = (function(stream$2) {
  var m$22;
  var W$0;
  var $targ$168;
  var last_op$0;
  var results$4;
  W$0 = (function(x$2) {
    if (x$2) {
      return "wide";
    } else {
      return "short";
    }
  });
  $targ$168 = true;
  last_op$0 = $targ$168;
  results$4 = [];
  m$22 = null;
  $10: for (var $__0 = stream$2[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$22 = $__1.value;
    {
      var x$3;
      var t1$11;
      var $targ$175;
      var $targ$176;
      var $targ$177;
      var m$23$0;
      var $targ$178;
      var token$8;
      var t0$19;
      var fixity$5;
      var name$5;
      var t0$18;
      var token$7;
      var ph$7$0;
      t0$18 = m$22;
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
          m$23$0 = fixity$5;
          if ((m$23$0 === "IFX")) {
            results$4.push(__lt____lt____colon__$0(["IFX", W$0((token$7.wsa || token$7.wsb)), name$5], token$7));
            $targ$175 = true;
            last_op$0 = $targ$175;
            last_op$0;
          } else {
            if ((m$23$0 === "PFX")) {
              if ((!last_op$0)) {
                results$4.push(["IFX", W$0(token$7.wsb), "WHITE"], ["VOID"]);
              }
              results$4.push(__lt____lt____colon__$0(["PFX", W$0(token$7.wsa), name$5], token$7));
              $targ$176 = true;
              last_op$0 = $targ$176;
              last_op$0;
            } else {
              if ((m$23$0 === "SFX")) {
                results$4.push(__lt____lt____colon__$0(["SFX", W$0(token$7.wsb), name$5], token$7), ["VOID"]);
                $targ$177 = false;
                last_op$0 = $targ$177;
                last_op$0;
              } else {
                ___match_error(m$23$0);
              }
            }
          }
        } else {
          token$8 = ph$7$0;
          if ((!last_op$0)) {
            results$4.push(["IFX", W$0(token$8.wsb), "WHITE"]);
          }
          results$4.push(token$8);
          $targ$178 = false;
          last_op$0 = $targ$178;
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
fill_locations$0 = (function(source$0, stream$3) {
  var m$25;
  var $targ$179;
  var to_fill$0;
  var $targ$180;
  var start$0;
  var fill$0;
  $targ$179 = [];
  to_fill$0 = $targ$179;
  $targ$180 = 0;
  start$0 = $targ$180;
  fill$0 = (function(end$0) {
    var m$24;
    var $targ$182;
    var first$1;
    var $targ$183;
    $targ$182 = true;
    first$1 = $targ$182;
    m$24 = null;
    $12: for (var $__0 = to_fill$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$24 = $__1.value;
      {
        var $targ$186;
        var s$0;
        var $targ$185;
        var token$9;
        token$9 = m$24;
        if (first$1) {
          $targ$186 = false;
          first$1 = $targ$186;
          s$0 = start$0;
        } else {
          s$0 = end$0;
        }
        $targ$185 = Location$0(source$0, s$0, end$0);
        (token$9["location"] = $targ$185);
        [];
      }
    }
    $targ$183 = [];
    to_fill$0 = $targ$183;
    return to_fill$0;
  });
  m$25 = null;
  $11: for (var $__0 = stream$3[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$25 = $__1.value;
    {
      var $targ$188;
      var other$2;
      var t0$20;
      var location$0;
      t0$20 = m$25;
      if ((___hasprop(t0$20, "location") && ((location$0 = t0$20.location), location$0))) {
        fill$0(location$0.start);
        $targ$188 = location$0.end;
        start$0 = $targ$188;
        start$0;
      } else {
        other$2 = m$25;
        to_fill$0.push(other$2);
      }
    }
  }
  fill$0(source$0.text.length);
  return stream$3;
});
tokenize$0 = (function(src$1) {
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
$targ$194 = tokenize$0;
(exports["tokenize"] = $targ$194);
[];
$targ$195 = process_indent$0;
(exports["process_indent"] = $targ$195);
[];
$targ$196 = disambiguate_fixity$0;
(exports["disambiguate_fixity"] = $targ$196);
[];
$targ$197 = alternate_operators$0;
(exports["alternate_operators"] = $targ$197);
[];
$targ$198 = fill_locations$0;
(exports["fill_locations"] = $targ$198);
[];
//# sourceURL=<compile-source>
