
"use strict";require("earlgrey-runtime/5");var $targ$0 = undefined;var $0$0 = undefined;var Source$0 = undefined;var $1$0 = undefined;var qq$0 = undefined;var opg$0 = undefined;$0$0 = require("../location");Source$0 = $0$0.Source;$1$0 = require("./helpers");qq$0 = $1$0.qq;opg$0 = require("opg");$targ$0 = function (mac$0) {
  var t0$1 = undefined;var t0$12 = undefined;var $targ$1 = undefined;var quote_mac$0 = undefined;var tok$0 = undefined;var gr$0 = undefined;var prio$0 = undefined;var finalize$0 = undefined;var parser$0 = undefined;var parse$0 = undefined;var $targ$2 = undefined;var interpolate_mac$0 = undefined;var exports$0 = undefined;exports$0 = {};$targ$1 = function (context$0, info$0, form$0, temp$0$0) {
    var t0$0 = undefined;var t1$0 = undefined;var expr$1 = undefined;var expr$0 = undefined;var s$0 = undefined;t0$0 = temp$0$0;expr$0 = t0$0;if (Array.isArray(t0$0) && (t1$0 = t0$0.length, t1$0 === 2 && t0$0[0] === "value")) {
      s$0 = t0$0[1];
    } else {
      ___match_error(temp$0$0);
    }expr$1 = info$0.go(Source$0(s$0, "<quasiquote>"), "source", "parse");return info$0.mark(qq$0(expr$1));
  };t0$1 = getProjector(mac$0("`"))($targ$1);if (t0$1[0]) {
    quote_mac$0 = t0$1[1];
  } else {
    ___match_error($targ$1);
  }tok$0 = opg$0.tokenize.Tokenizer({ regexps: { open: "\\$[.A-Za-z0-9_]*\\{|\\{", close: "\\}", other: "\\$|[^\\{\\}$]+" }, post: [function (temp$1$0) {
      var t0$2 = undefined;var t0$3 = undefined;var tok$1 = undefined;var ph$0$0 = undefined;t0$2 = temp$1$0;tok$1 = t0$2;ph$0$0 = t0$2;t0$3 = ph$0$0;if (___hasprop(t0$3, "type") && t0$3.type === "open") {
        return [{ token: "", type: "other", location: tok$1.location.at_start() }, tok$1];
      } else {
        return tok$1;
      }
    }] });gr$0 = new opg$0.parse.TokenGroups({ open: ["open"], close: ["close"], other: ["str", "other"] });prio$0 = new opg$0.parse.PriorityOrder(gr$0, { open: { left: 1002, right: 0 }, close: { left: 0, right: 1003 }, other: { left: 1000, right: 1000 } });finalize$0 = function finalize(temp$2$0) {
    var t0$4 = undefined;var t0$6 = undefined;var t1$2 = undefined;var t2$1 = undefined;var tag$0 = undefined;var arg$0 = undefined;var text$0 = undefined;var bridge$$14675$0 = undefined;var m$0 = undefined;var rval$0 = undefined;var text$1 = undefined;var args$0 = undefined;var token$0 = undefined;var open$0 = undefined;var ph$2$0 = undefined;var _arg$0 = undefined;var close$0 = undefined;var $$14678$0 = undefined;var $$14679$0 = undefined;var t0$5 = undefined;var t1$1 = undefined;var t2$0 = undefined;var t3$0 = undefined;var t4$0 = undefined;var zazz$0 = undefined;var ph$1$0 = undefined;t0$4 = temp$2$0;zazz$0 = t0$4;ph$1$0 = t0$4;t0$5 = ph$1$0;t1$1 = t0$5.length;if (t1$1 === 5 && (t0$5[0] === null && (t2$0 = t0$5[1], ___hasprop(t2$0, "type") && (t2$0.type === "open" && (___hasprop(t2$0, "token") && (t3$0 = t2$0.token, open$0 = t3$0, ph$2$0 = t3$0, _arg$0 = t0$5[2], t4$0 = t0$5[3], ___hasprop(t4$0, "type") && (t4$0.type === "close" && (___hasprop(t4$0, "token") && (close$0 = t4$0.token, t0$5[4] === null))))))))) {
      arg$0 = _arg$0 || __amp__(["join", ""], { text: "" });text$0 = open$0 + arg$0.text + close$0;bridge$$14675$0 = ph$2$0;if ((t0$6 = getProjector(RegExp("\\$([^\\{]*){", ""))(bridge$$14675$0), t0$6[0] && (t1$2 = t0$6[1], t2$1 = t1$2.length, t2$1 === 2 && (t1$2[0], tag$0 = t1$2[1], true))) || (tag$0 = "", true)) {
        return __amp____colon__(["bracket", tag$0, arg$0.text], { text: text$0 });
      } else {
        return ___match_error(ph$2$0);
      }
    } else {
      if (t1$1 === 3 && (t0$5[0] === null && (t2$0 = t0$5[1], ___hasprop(t2$0, "token") && (token$0 = t2$0.token, t0$5[2] === null)))) {
        return __amp____colon__(["join", token$0], { text: token$0 });
      } else {
        args$0 = ph$1$0;rval$0 = ["join"];text$1 = "";m$0 = null;$2: for (var _iterator = enumerate(args$0)[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
          m$0 = _step.value;
          var x$0 = undefined;var sub$0 = undefined;var token$1 = undefined;var $$14780$0 = undefined;var t0$8 = undefined;var t1$4 = undefined;var i$0 = undefined;var arg$1 = undefined;var ph$3$0 = undefined;var t0$7 = undefined;var t1$3 = undefined;var t2$2 = undefined;t0$7 = m$0;if (Array.isArray(t0$7) && (t1$3 = t0$7.length, t1$3 === 2)) {
            i$0 = t0$7[0];t2$2 = t0$7[1];arg$1 = t2$2;ph$3$0 = t2$2;t0$8 = ph$3$0;if (___hasprop(t0$8, "token") && (token$1 = t0$8.token, equal(i$0 % 2, 1))) {
              rval$0.push(token$1);text$1 = text$1 + token$1;
            } else {
              if (Array.isArray(t0$8) && (t1$4 = t0$8.length, t1$4 >= 1 && t0$8[0] === "join")) {
                sub$0 = Array.prototype.slice.call(t0$8, 1);text$1 = text$1 + arg$1.text;rval$0 = rval$0.concat(sub$0);
              } else {
                if ((x$0 = ph$3$0, x$0 instanceof Array && x$0[0] === "bracket")) {
                  text$1 = text$1 + arg$1.text;rval$0.push(arg$1);
                } else {
                  if (ph$3$0 === null) {
                    undefined;
                  } else {
                    ___match_error(ph$3$0);
                  }
                }
              }
            }
          } else {
            ___match_error(m$0);
          }
        }return __amp____colon__(rval$0, { text: text$1 });
      }
    }
  };parser$0 = new opg$0.parse.Parser(tok$0, prio$0.getOrder(), finalize$0);parse$0 = function parse(text$2) {
    return parser$0.parse(text$2);
  };$targ$2 = function (context$1, info$1, form$1, temp$3$0) {
    var t0$9 = undefined;var t1$5 = undefined;var t0$10 = undefined;var t1$6 = undefined;var m$1 = undefined;var $targ$3 = undefined;var contents$0 = undefined;var parts$0 = undefined;var current$0 = undefined;var push$0 = undefined;var expr$2 = undefined;var s$1 = undefined;t0$9 = temp$3$0;expr$2 = t0$9;if (Array.isArray(t0$9) && (t1$5 = t0$9.length, t1$5 === 2 && t0$9[0] === "value")) {
      s$1 = t0$9[1];
    } else {
      ___match_error(temp$3$0);
    }$targ$3 = parse$0(s$1);t0$10 = $targ$3;if (Array.isArray(t0$10) && (t1$6 = t0$10.length, t1$6 >= 1 && t0$10[0] === "join")) {
      contents$0 = Array.prototype.slice.call(t0$10, 1);
    } else {
      ___match_error($targ$3);
    }parts$0 = [];current$0 = "";push$0 = function push() {
      if (nequal(current$0, "")) {
        parts$0.push(["value", current$0]);current$0 = "";return current$0;
      }
    };m$1 = null;$3: for (var _iterator2 = contents$0[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
      m$1 = _step2.value;
      var tag$1 = undefined;var p$0 = undefined;var ph$4$0 = undefined;var expr$3 = undefined;var s$2 = undefined;var $$14881$0 = undefined;var t0$11 = undefined;var t1$7 = undefined;t0$11 = m$1;if (typeof t0$11 === "string") {
        s$2 = t0$11;current$0 = current$0 + s$2;
      } else {
        if (Array.isArray(t0$11) && (t1$7 = t0$11.length, t1$7 === 3 && t0$11[0] === "bracket")) {
          ph$4$0 = t0$11[1];expr$3 = t0$11[2];push$0();p$0 = form$1.env.mark(["parse", expr$3]);if (ph$4$0 === "") {
            parts$0.push(["send", ["symbol", "ENode"], ["data", ["data"], ["data", ["symbol", "="]], ["data", p$0]]]);
          } else {
            tag$1 = ph$4$0;parts$0.push(["send", ["symbol", "ENode"], ["data", ["data", ["value", tag$1]], ["data", ["symbol", "="]], ["data", p$0]]]);
          }
        } else {
          ___match_error(m$1);
        }
      }
    }push$0();return ["send", ["symbol", "ENode"], ["data", ["data", ["send", ["symbol", "."], ["data", ["void"], ["symbol", "join"]]]], ["data", ["symbol", "="]], ["data"].concat(parts$0)]];
  };t0$12 = getProjector(mac$0("'"))($targ$2);if (t0$12[0]) {
    interpolate_mac$0 = t0$12[1];
  } else {
    ___match_error($targ$2);
  }return exports$0;
};module.exports = $targ$0;[];
//# sourceMappingURL=quote.js.map

