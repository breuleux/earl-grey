
"use strict";require("earlgrey-runtime/5");var $targ$0 = undefined;var $0$0 = undefined;var Body$0 = undefined;$0$0 = require("./helpers");Body$0 = $0$0.Body;$targ$0 = function (mac$0) {
  var t0$0 = undefined;var t0$6 = undefined;var t0$11 = undefined;var t0$13 = undefined;var t0$16 = undefined;var $targ$1 = undefined;var __require_mac$0 = undefined;var $targ$2 = undefined;var require_mac$0 = undefined;var $targ$3 = undefined;var provide_mac$0 = undefined;var $targ$4 = undefined;var inject_mac$0 = undefined;var $targ$5 = undefined;var globals_mac$0 = undefined;var exports$0 = undefined;exports$0 = {};$targ$1 = function (context$0, info$0, form$0, expr$0) {
    var req$0 = undefined;req$0 = __amp____colon__(["variable", "require"], { top: true });return ["send", req$0, expr$0];
  };t0$0 = getProjector(mac$0("__require"))($targ$1);if (t0$0[0]) {
    __require_mac$0 = t0$0[1];
  } else {
    ___match_error($targ$1);
  }$targ$2 = function (context$1, info$1, form$1, ph$0$0) {
    var req$1 = undefined;var stmts$0 = undefined;var topfetch$0 = undefined;var produce$0 = undefined;var arg$0 = undefined;var expr$1 = undefined;var $$13525$0 = undefined;var $$13526$0 = undefined;var t0$1 = undefined;var t1$0 = undefined;t0$1 = ph$0$0;t1$0 = t0$1.length;if (t1$0 === 2 && t0$1[0] === "data") {
      expr$1 = t0$1[1];req$1 = info$1.mark(["symbol", "__require"]);stmts$0 = [];topfetch$0 = function topfetch(pkg$0, v$0) {
        stmts$0.push(["send", ["symbol", "="], ["data", v$0, ["send", req$1, ["data", pkg$0]]]]);return v$0;
      };produce$0 = function produce(temp$0$0, fetch$0) {
        var t0$2 = undefined;var t0$4 = undefined;var t0$5 = undefined;var m$0 = undefined;var pkgv$0 = undefined;var pkg$2 = undefined;var subp$1 = undefined;var pkg$1 = undefined;var s$2 = undefined;var name$0 = undefined;var subp$0 = undefined;var s$1 = undefined;var s$0 = undefined;var $$13570$0 = undefined;var $$13571$0 = undefined;var $$13572$0 = undefined;var $$13573$0 = undefined;var $$13574$0 = undefined;var $$13575$0 = undefined;var $$13576$0 = undefined;var $$13577$0 = undefined;var $$13578$0 = undefined;var t0$3 = undefined;var t1$1 = undefined;var t2$0 = undefined;var bridge$$13566$0 = undefined;var t3$0 = undefined;var t4$0 = undefined;var t5$0 = undefined;var t6$0 = undefined;var t7$0 = undefined;var expr$2 = undefined;var ph$1$0 = undefined;t0$2 = temp$0$0;expr$2 = t0$2;ph$1$0 = t0$2;t0$3 = ph$1$0;t1$1 = t0$3.length;if (($$13572$0 = t1$1 === 2) && t0$3[0] === "symbol") {
          s$0 = t0$3[1];return fetch$0(["value", s$0], expr$2);
        } else {
          if ($$13572$0 && (t0$3[0] === "value" && (t2$0 = t0$3[1], typeof t2$0 === "string"))) {
            s$1 = t2$0;return fetch$0(expr$2, ["symbol", info$1.gensym()]);
          } else {
            bridge$$13566$0 = ph$1$0;if (Array.isArray(bridge$$13566$0) && (t0$4 = bridge$$13566$0.length, t0$4 >= 1 && (bridge$$13566$0[0] === "multi" && (subp$0 = Array.prototype.slice.call(bridge$$13566$0, 1), true))) || Array.isArray(bridge$$13566$0) && (t0$5 = bridge$$13566$0.length, t0$5 >= 1 && (bridge$$13566$0[0] === "data" && (subp$0 = Array.prototype.slice.call(bridge$$13566$0, 1), true)))) {
              m$0 = null;$1: for (var _iterator = subp$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
                m$0 = _step.value;
                var p$0 = undefined;p$0 = m$0;produce$0(p$0, fetch$0);
              }return null;
            } else {
              t0$3 = ph$1$0;t1$1 = t0$3.length;if (($$13572$0 = t1$1 === 3) && (($$13573$0 = t0$3[0] === "send") && (t2$0 = t0$3[1], ($$13575$0 = Array.isArray(t2$0)) && (t3$0 = t2$0.length, ($$13577$0 = t3$0 === 2) && (($$13578$0 = t2$0[0] === "symbol") && (t2$0[1] === "^" && (t4$0 = t0$3[2], Array.isArray(t4$0) && (t5$0 = t4$0.length, t5$0 === 3 && (t4$0[0] === "data" && (t6$0 = t4$0[1], Array.isArray(t6$0) && (t7$0 = t6$0.length, t7$0 === 1 && t6$0[0] === "void"))))))))))) {
                name$0 = t4$0[2];return fetch$0(name$0, ["symbol", info$1.gensym()]);
              } else {
                if ($$13578$0 && (t2$0[1] === "as" && (t4$0 = t0$3[2], Array.isArray(t4$0) && (t5$0 = t4$0.length, t5$0 === 3 && t4$0[0] === "data")))) {
                  pkg$1 = t4$0[1];s$2 = t4$0[2];return produce$0(pkg$1, function (the_pkg$0, temp$1$0) {
                    return fetch$0(the_pkg$0, s$2);
                  });
                } else {
                  if ($$13578$0 && (t2$0[1] === "->" && (t4$0 = t0$3[2], Array.isArray(t4$0) && (t5$0 = t4$0.length, t5$0 === 3 && t4$0[0] === "data")))) {
                    pkg$2 = t4$0[1];subp$1 = t4$0[2];pkgv$0 = produce$0(pkg$2, fetch$0);return produce$0(subp$1, function (pkg$3, v$1) {
                      stmts$0.push(["send", ["symbol", "="], ["data", v$1, ["send", pkgv$0, pkg$3]]]);return v$1;
                    });
                  } else {
                    return ___match_error(ph$1$0);
                  }
                }
              }
            }
          }
        }
      };produce$0(expr$1, topfetch$0);return ["splice"].concat(stmts$0);
    } else {
      if (t1$0 === 1 && t0$1[0] === "void") {
        return ["variable", "require"];
      } else {
        arg$0 = ph$0$0;return ["send", ["variable", "require"], arg$0];
      }
    }
  };t0$6 = getProjector(mac$0("require"))($targ$2);if (t0$6[0]) {
    require_mac$0 = t0$6[1];
  } else {
    ___match_error($targ$2);
  }$targ$3 = function (context$2, temp$2$0, form$2, temp$3$0) {
    var t0$7 = undefined;var t1$2 = undefined;var t2$1 = undefined;var t3$1 = undefined;var t4$1 = undefined;var m$1 = undefined;var acc$0 = undefined;var temp$4 = undefined;var exp$0 = undefined;var expr$3 = undefined;t0$7 = temp$3$0;if (Array.isArray(t0$7) && (t1$2 = t0$7.length, t1$2 === 2 && (t0$7[0] === "data" && (t2$1 = getProjector(Body$0)(t0$7[1]), t2$1[0] && (t3$1 = t2$1[1], t4$1 = t3$1.length, t4$1 >= 0))))) {
      expr$3 = Array.prototype.slice.call(t3$1, 0);
    } else {
      ___match_error(temp$3$0);
    }exp$0 = form$2.env.mark(["symbol", "exports"]);return ["sink", ["multi"].concat((acc$0 = [], temp$4 = null, m$1 = null, (function () {
      $2: for (var _iterator2 = expr$3[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
        m$1 = _step2.value;
        var t0$9 = undefined;var t0$10 = undefined;var other$0 = undefined;var s$4 = undefined;var name$2 = undefined;var s$3 = undefined;var name$1 = undefined;var $$13783$0 = undefined;var t0$8 = undefined;var t1$3 = undefined;var t2$2 = undefined;var t3$2 = undefined;var t4$2 = undefined;var t5$1 = undefined;var bridge$$13781$0 = undefined;t0$8 = m$1;s$3 = t0$8;if (Array.isArray(t0$8) && (t1$3 = t0$8.length, t1$3 === 2 && t0$8[0] === "symbol")) {
          name$1 = t0$8[1];temp$4 = ["send", ["symbol", "="], ["data", ["send", exp$0, ["value", name$1]], s$3]];acc$0.push(temp$4);
        } else {
          if (Array.isArray(t0$8) && (t1$3 = t0$8.length, t1$3 === 3 && (t0$8[0] === "send" && (t2$2 = t0$8[1], Array.isArray(t2$2) && (t3$2 = t2$2.length, t3$2 === 2 && (t2$2[0] === "symbol" && (t2$2[1] === "as" && (t4$2 = t0$8[2], Array.isArray(t4$2) && (t5$1 = t4$2.length, t5$1 === 3 && (t4$2[0] === "data" && (s$4 = t4$2[1], bridge$$13781$0 = t4$2[2], Array.isArray(bridge$$13781$0) && (t0$9 = bridge$$13781$0.length, t0$9 === 2 && (bridge$$13781$0[0] === "symbol" && (name$2 = bridge$$13781$0[1], true))) || Array.isArray(bridge$$13781$0) && (t0$10 = bridge$$13781$0.length, t0$10 === 2 && (bridge$$13781$0[0] === "value" && (name$2 = bridge$$13781$0[1], true)))))))))))))) {
            temp$4 = ["send", ["symbol", "="], ["data", ["send", exp$0, ["value", name$2]], s$4]];acc$0.push(temp$4);
          } else {
            other$0 = m$1;throw ErrorFactory(["syntax", "provide"]).create("Each clause of provide must be 'sym' or 'sym as name'");acc$0.push(temp$4);
          }
        }
      }
    })(), acc$0))];
  };t0$11 = getProjector(mac$0("provide"))($targ$3);if (t0$11[0]) {
    provide_mac$0 = t0$11[1];
  } else {
    ___match_error($targ$3);
  }$targ$4 = function (context$3, temp$5$0, form$3, temp$6$0) {
    var t0$12 = undefined;var t1$4 = undefined;var t2$3 = undefined;var t3$3 = undefined;var t4$3 = undefined;var expr$4 = undefined;t0$12 = temp$6$0;if (Array.isArray(t0$12) && (t1$4 = t0$12.length, t1$4 === 2 && (t0$12[0] === "data" && (t2$3 = getProjector(Body$0)(t0$12[1]), t2$3[0] && (t3$3 = t2$3[1], t4$3 = t3$3.length, t4$3 >= 0))))) {
      expr$4 = Array.prototype.slice.call(t3$3, 0);
    } else {
      ___match_error(temp$6$0);
    }return ["restmacro", function (stmts$1) {
      var exp$1 = undefined;exp$1 = form$3.env.mark(["symbol", "exports"]);return [["multi", ["send", ["symbol", "globals"], ["data", ["symbol", "module"]]], ["send", ["symbol", "="], ["data", ["send", ["send", ["symbol", "module"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "exports"]]]], ["data"].concat(expr$4)], ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], exp$1], ["data", ["symbol", "="]]]], ["multi"].concat(stmts$1), exp$1]]]]];
    }];
  };t0$13 = getProjector(mac$0("inject"))($targ$4);if (t0$13[0]) {
    inject_mac$0 = t0$13[1];
  } else {
    ___match_error($targ$4);
  }$targ$5 = function (context$4, temp$7$0, form$4, temp$8$0) {
    var t0$14 = undefined;var t1$5 = undefined;var t2$4 = undefined;var t3$4 = undefined;var t4$4 = undefined;var m$2 = undefined;var acc$1 = undefined;var temp$9 = undefined;var vars$0 = undefined;t0$14 = temp$8$0;if (Array.isArray(t0$14) && (t1$5 = t0$14.length, t1$5 === 2 && (t0$14[0] === "data" && (t2$4 = getProjector(Body$0)(t0$14[1]), t2$4[0] && (t3$4 = t2$4[1], t4$4 = t3$4.length, t4$4 >= 0))))) {
      vars$0 = Array.prototype.slice.call(t3$4, 0);
    } else {
      ___match_error(temp$8$0);
    }return ["splice"].concat((acc$1 = [], temp$9 = null, m$2 = null, (function () {
      $3: for (var _iterator3 = vars$0[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
        m$2 = _step3.value;
        var variable$0 = undefined;var s$5 = undefined;var t0$15 = undefined;var t1$6 = undefined;t0$15 = m$2;variable$0 = t0$15;if (Array.isArray(t0$15) && (t1$6 = t0$15.length, t1$6 === 2 && t0$15[0] === "symbol")) {
          s$5 = t0$15[1];temp$9 = ["declare_raw", variable$0, __amp____colon__(["variable", s$5], { top: true })];acc$1.push(temp$9);
        } else {
          ___match_error(m$2);
        }
      }
    })(), acc$1)).concat([["symbol", "undefined"]]);
  };t0$16 = getProjector(mac$0("globals"))($targ$5);if (t0$16[0]) {
    globals_mac$0 = t0$16[1];
  } else {
    ___match_error($targ$5);
  }return exports$0;
};module.exports = $targ$0;[];
//# sourceMappingURL=modularity.js.map

