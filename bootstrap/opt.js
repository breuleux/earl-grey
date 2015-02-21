
"use strict";require("earlgrey-runtime/5");var $targ$12 = undefined;var $targ$13 = undefined;var $0$0 = undefined;var __lt____lt____colon__$0 = undefined;var s$0 = undefined;var varstats$0 = undefined;var replaceVars$0 = undefined;var eliminate_spurious_variables$0 = undefined;var hoist$0 = undefined;var hoistable$0 = undefined;var not_hoistable$0 = undefined;var hoist_helper$0 = undefined;$0$0 = require("./location");__lt____lt____colon__$0 = $0$0["<<:"];s$0 = function s(stats$0, v$0) {
  var $targ$0 = undefined;if (!Object.hasOwnProperty.call(stats$0, v$0)) {
    $targ$0 = { assigns: 0, uses: 0, transfers: [], replaceable: false };stats$0[v$0] = $targ$0;[];
  }return send(stats$0, v$0);
};varstats$0 = function varstats(temp$0$0, stats$1) {
  var t0$0 = undefined;var x$0 = undefined;var m$0 = undefined;var m$1 = undefined;var m$2 = undefined;var acc$0 = undefined;var temp$1 = undefined;var other$0 = undefined;var vars$1 = undefined;var body$1 = undefined;var generator$0 = undefined;var vars$0 = undefined;var body$0 = undefined;var v$1 = undefined;var v1$1 = undefined;var expr$1 = undefined;var v1$0 = undefined;var v2$0 = undefined;var $$15942$0 = undefined;var $$15943$0 = undefined;var $$15944$0 = undefined;var $$15945$0 = undefined;var $$15946$0 = undefined;var $$15947$0 = undefined;var $$15948$0 = undefined;var $$15949$0 = undefined;var $$15950$0 = undefined;var t0$1 = undefined;var t1$0 = undefined;var t2$0 = undefined;var t3$0 = undefined;var t4$0 = undefined;var t5$0 = undefined;var expr$0 = undefined;var ph$0$0 = undefined;t0$0 = temp$0$0;expr$0 = t0$0;ph$0$0 = t0$0;t0$1 = ph$0$0;t1$0 = t0$1.length;if (($$15944$0 = t1$0 === 3) && (($$15945$0 = t0$1[0] === "assign") && (t2$0 = t0$1[1], ($$15947$0 = Array.isArray(t2$0)) && (t3$0 = t2$0.length, ($$15949$0 = t3$0 === 2) && (($$15950$0 = t2$0[0] === "variable") && (v1$0 = t2$0[1], t4$0 = t0$1[2], Array.isArray(t4$0) && (t5$0 = t4$0.length, t5$0 === 2 && t4$0[0] === "variable"))))))) {
    v2$0 = t4$0[1];s$0(stats$1, v1$0).assigns = s$0(stats$1, v1$0).assigns + 1;s$0(stats$1, v2$0).uses = s$0(stats$1, v2$0).uses + 1;return s$0(stats$1, v2$0).transfers.push(v1$0);
  } else {
    if ($$15950$0) {
      v1$1 = t2$0[1];expr$1 = t0$1[2];s$0(stats$1, v1$1).assigns = s$0(stats$1, v1$1).assigns + 1;return varstats$0(expr$1, stats$1);
    } else {
      if (t1$0 === 2 && t0$1[0] === "variable") {
        v$1 = t0$1[1];return s$0(stats$1, v$1).uses = s$0(stats$1, v$1).uses + 1;
      } else {
        if ((x$0 = ph$0$0, x$0 instanceof Array && x$0[0] === "value")) {
          return undefined;
        } else {
          t0$1 = ph$0$0;t1$0 = t0$1.length;if (t1$0 === 3 && t0$1[0] === "scope") {
            vars$0 = t0$1[1];body$0 = t0$1[2];m$0 = null;$1: for (var _iterator = vars$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
              m$0 = _step.value;
              var $targ$1 = undefined;var v$2 = undefined;var t0$2 = undefined;var t1$1 = undefined;t0$2 = m$0;if (Array.isArray(t0$2) && (t1$1 = t0$2.length, t1$1 === 2 && t0$2[0] === "variable")) {
                v$2 = t0$2[1];$targ$1 = true;s$0(stats$1, v$2).replaceable = $targ$1;[];
              } else {
                ___match_error(m$0);
              }
            }return varstats$0(body$0, stats$1);
          } else {
            if (t1$0 >= 3 && t1$0 <= 4 && t0$1[0] === "lambda") {
              vars$1 = t0$1[1];body$1 = t0$1[2];if (3 >= t1$0) {
                generator$0 = null;
              } else {
                generator$0 = t0$1[3];
              }m$1 = null;$2: for (var _iterator2 = vars$1[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
                m$1 = _step2.value;
                var v$3 = undefined;var t0$3 = undefined;var t1$2 = undefined;t0$3 = m$1;if (Array.isArray(t0$3) && (t1$2 = t0$3.length, t1$2 === 2 && t0$3[0] === "variable")) {
                  v$3 = t0$3[1];s$0(stats$1, v$3).assigns = s$0(stats$1, v$3).assigns + 1;
                } else {
                  ___match_error(m$1);
                }
              }return varstats$0(body$1, stats$1);
            } else {
              other$0 = ph$0$0;acc$0 = [];temp$1 = null;m$2 = null;$3: for (var _iterator3 = other$0.slice(1)[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
                m$2 = _step3.value;
                var x$1 = undefined;x$1 = m$2;temp$1 = varstats$0(x$1, stats$1);acc$0.push(temp$1);
              }return acc$0;
            }
          }
        }
      }
    }
  }
};replaceVars$0 = function replaceVars(temp$2$0, repl$0) {
  var t0$4 = undefined;var x$2 = undefined;var x$3 = undefined;var m$3 = undefined;var newvars$0 = undefined;var m$4 = undefined;var acc$1 = undefined;var temp$3 = undefined;var newrest$0 = undefined;var other$1 = undefined;var x$4 = undefined;var rest$0 = undefined;var vars$3 = undefined;var body$3 = undefined;var generator$1 = undefined;var vars$2 = undefined;var body$2 = undefined;var v1$2 = undefined;var v2$1 = undefined;var v$4 = undefined;var $$16112$0 = undefined;var $$16113$0 = undefined;var $$16114$0 = undefined;var t0$5 = undefined;var t1$3 = undefined;var t2$1 = undefined;var t3$1 = undefined;var t4$1 = undefined;var t5$1 = undefined;var bridge$$16107$0 = undefined;var expr$2 = undefined;var ph$1$0 = undefined;t0$4 = temp$2$0;expr$2 = t0$4;ph$1$0 = t0$4;t0$5 = ph$1$0;if (($$16113$0 = Array.isArray(t0$5)) && (t1$3 = t0$5.length, t1$3 === 2 && (t0$5[0] === "variable" && (v$4 = t0$5[1], Object.hasOwnProperty.call(repl$0, v$4) && send(repl$0, v$4))))) {
    return __lt____lt____colon__$0(["variable", send(repl$0, v$4)], expr$2);
  } else {
    if ($$16113$0 && (t1$3 === 3 && (t0$5[0] === "assign" && (t2$1 = t0$5[1], Array.isArray(t2$1) && (t3$1 = t2$1.length, t3$1 === 2 && (t2$1[0] === "variable" && (v1$2 = t2$1[1], t4$1 = t0$5[2], Array.isArray(t4$1) && (t5$1 = t4$1.length, t5$1 === 2 && (t4$1[0] === "variable" && (v2$1 = t4$1[1], equal(send(repl$0, v1$2), v2$1) || equal(send(repl$0, v2$1), v1$2))))))))))) {
      return __lt____lt____colon__$0(["multi"], expr$2);
    } else {
      bridge$$16107$0 = ph$1$0;if ((x$2 = bridge$$16107$0, x$2 instanceof Array && x$2[0] === "variable") || (x$3 = bridge$$16107$0, x$3 instanceof Array && x$3[0] === "value")) {
        return expr$2;
      } else {
        t0$5 = ph$1$0;t1$3 = t0$5.length;if (t1$3 === 3 && t0$5[0] === "scope") {
          vars$2 = t0$5[1];body$2 = t0$5[2];newvars$0 = [];m$3 = null;$4: for (var _iterator4 = vars$2[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
            m$3 = _step4.value;
            var _var$0 = undefined;var v$5 = undefined;var t0$6 = undefined;var t1$4 = undefined;t0$6 = m$3;_var$0 = t0$6;if (Array.isArray(t0$6) && (t1$4 = t0$6.length, t1$4 === 2 && t0$6[0] === "variable")) {
              v$5 = t0$6[1];if (Object.hasOwnProperty.call(repl$0, v$5)) {
                if (send(repl$0, v$5) !== false) {
                  newvars$0.push(__lt____lt____colon__$0(["variable", send(repl$0, v$5)], _var$0));
                }
              } else {
                newvars$0.push(_var$0);
              }
            } else {
              ___match_error(m$3);
            }
          }return __lt____lt____colon__$0(["scope", newvars$0, replaceVars$0(body$2, repl$0)], expr$2);
        } else {
          if (t1$3 >= 3 && t1$3 <= 4 && t0$5[0] === "lambda") {
            vars$3 = t0$5[1];body$3 = t0$5[2];if (3 >= t1$3) {
              generator$1 = null;
            } else {
              generator$1 = t0$5[3];
            }return __lt____lt____colon__$0(["lambda", vars$3, replaceVars$0(body$3, repl$0), generator$1], expr$2);
          } else {
            if (t1$3 >= 1) {
              x$4 = t0$5[0];rest$0 = Array.prototype.slice.call(t0$5, 1);acc$1 = [];temp$3 = null;m$4 = null;$5: for (var _iterator5 = rest$0[Symbol.iterator](), _step5; !(_step5 = _iterator5.next()).done;) {
                m$4 = _step5.value;
                var elem$0 = undefined;elem$0 = m$4;temp$3 = replaceVars$0(elem$0, repl$0);acc$1.push(temp$3);
              }newrest$0 = acc$1;return __lt____lt____colon__$0([x$4].concat(newrest$0), expr$2);
            } else {
              other$1 = ph$1$0;console.error(other$1);throw ErrorFactory(["replaceVars"]).create("Unknown: " + String(other$1));
            }
          }
        }
      }
    }
  }
};eliminate_spurious_variables$0 = function eliminate_spurious_variables(expr$3) {
  var m$5 = undefined;var stats$2 = undefined;var repl$1 = undefined;stats$2 = {};varstats$0(expr$3, stats$2);repl$1 = {};m$5 = null;$6: for (var _iterator6 = items(stats$2)[Symbol.iterator](), _step6; !(_step6 = _iterator6.next()).done;) {
    m$5 = _step6.value;
    var t0$8 = undefined;var t1$6 = undefined;var $targ$3 = undefined;var $targ$4 = undefined;var $targ$5 = undefined;var $targ$6 = undefined;var $targ$2 = undefined;var tr$0 = undefined;var st2$0 = undefined;var v$6 = undefined;var st$0 = undefined;var t0$7 = undefined;var t1$5 = undefined;t0$7 = m$5;if (Array.isArray(t0$7) && (t1$5 = t0$7.length, t1$5 === 2)) {
      v$6 = t0$7[0];st$0 = t0$7[1];if (equal(st$0.uses, 1) && equal(st$0.assigns, 1) && equal(st$0.transfers.length, 1) && st$0.replaceable) {
        $targ$2 = st$0.transfers;t0$8 = $targ$2;if (Array.isArray(t0$8) && (t1$6 = t0$8.length, t1$6 === 1)) {
          tr$0 = t0$8[0];
        } else {
          ___match_error($targ$2);
        }st2$0 = s$0(stats$2, tr$0);if (equal(st2$0.assigns, 1) && st2$0.replaceable) {
          $targ$3 = tr$0;repl$1[v$6] = $targ$3;[];$targ$4 = false;repl$1[tr$0] = $targ$4;[];$targ$5 = false;st$0.replaceable = $targ$5;[];$targ$6 = false;st2$0.replaceable = $targ$6;[];
        }
      }
    } else {
      ___match_error(m$5);
    }
  }return replaceVars$0(expr$3, repl$1);
};hoist$0 = function hoist(expr$4) {
  var t0$9 = undefined;var t1$7 = undefined;var $targ$7 = undefined;var b$0 = undefined;var inner$0 = undefined;$targ$7 = hoist_helper$0(expr$4);t0$9 = $targ$7;if (Array.isArray(t0$9) && (t1$7 = t0$9.length, t1$7 === 2)) {
    b$0 = t0$9[0];inner$0 = t0$9[1];
  } else {
    ___match_error($targ$7);
  }[b$0, inner$0];return ["scope", inner$0, b$0];
};hoistable$0 = ["send", "array", "object", "multi", "if", "assign", "js_break", "js_continue", "js_return", "js_delete", "js_throw", "js_try", "js_new", "js_yield"];not_hoistable$0 = ["void", "js_while", "js_for", "js_for_in", "js_for_of", "js_label"];hoist_helper$0 = function hoist_helper(temp$4$0) {
  var t0$10 = undefined;var x$5 = undefined;var x$6 = undefined;var bridge$$16366$0 = undefined;var x$7 = undefined;var t0$12 = undefined;var t1$9 = undefined;var $targ$8 = undefined;var newbody$0 = undefined;var inner$1 = undefined;var t0$13 = undefined;var t1$10 = undefined;var $targ$9 = undefined;var newbody$1 = undefined;var inner$2 = undefined;var newlambda$0 = undefined;var m$6 = undefined;var acc$2 = undefined;var temp$5 = undefined;var accum$0 = undefined;var newargs$0 = undefined;var m$7 = undefined;var acc$3 = undefined;var temp$6 = undefined;var newargs$1 = undefined;var other$3 = undefined;var type$1 = undefined;var args$1 = undefined;var type$0 = undefined;var args$0 = undefined;var vars$5 = undefined;var body$5 = undefined;var generator$2 = undefined;var vars$4 = undefined;var body$4 = undefined;var $$16372$0 = undefined;var $$16373$0 = undefined;var $$16374$0 = undefined;var $$16375$0 = undefined;var bridge$$16365$0 = undefined;var t0$11 = undefined;var t1$8 = undefined;var expr$5 = undefined;var ph$2$0 = undefined;t0$10 = temp$4$0;expr$5 = t0$10;ph$2$0 = t0$10;bridge$$16365$0 = ph$2$0;if ((bridge$$16366$0 = bridge$$16365$0, (x$5 = bridge$$16366$0, x$5 instanceof Array && x$5[0] === "symbol") || (x$6 = bridge$$16366$0, x$6 instanceof Array && x$6[0] === "value")) || (x$7 = bridge$$16365$0, x$7 instanceof Array && x$7[0] === "variable")) {
    return [expr$5, []];
  } else {
    t0$11 = ph$2$0;t1$8 = t0$11.length;if (t1$8 === 3 && t0$11[0] === "scope") {
      vars$4 = t0$11[1];body$4 = t0$11[2];$targ$8 = hoist_helper$0(body$4);t0$12 = $targ$8;if (Array.isArray(t0$12) && (t1$9 = t0$12.length, t1$9 === 2)) {
        newbody$0 = t0$12[0];inner$1 = t0$12[1];
      } else {
        ___match_error($targ$8);
      }[newbody$0, inner$1];return [newbody$0, inner$1.concat(vars$4)];
    } else {
      if (t1$8 === 4 && t0$11[0] === "lambda") {
        vars$5 = t0$11[1];body$5 = t0$11[2];generator$2 = t0$11[3];$targ$9 = hoist_helper$0(body$5);t0$13 = $targ$9;if (Array.isArray(t0$13) && (t1$10 = t0$13.length, t1$10 === 2)) {
          newbody$1 = t0$13[0];inner$2 = t0$13[1];
        } else {
          ___match_error($targ$9);
        }[newbody$1, inner$2];newlambda$0 = __amp____colon__(["lambda", vars$5, __lt____lt____colon__$0(["scope", inner$2, newbody$1], body$5), generator$2], { name: expr$5.name });return [__lt____lt____colon__$0(newlambda$0, expr$5), []];
      } else {
        if (($$16373$0 = Array.isArray(t0$11)) && (t1$8 = t0$11.length, ($$16375$0 = t1$8 >= 1) && (type$0 = t0$11[0], args$0 = Array.prototype.slice.call(t0$11, 1), hoistable$0.indexOf(type$0) !== -1))) {
          accum$0 = [];acc$2 = [];temp$5 = null;m$6 = null;$7: for (var _iterator7 = args$0[Symbol.iterator](), _step7; !(_step7 = _iterator7.next()).done;) {
            m$6 = _step7.value;
            var t0$14 = undefined;var t1$11 = undefined;var $targ$10 = undefined;var b$1 = undefined;var inner$3 = undefined;var arg$0 = undefined;arg$0 = m$6;$targ$10 = hoist_helper$0(arg$0);t0$14 = $targ$10;if (Array.isArray(t0$14) && (t1$11 = t0$14.length, t1$11 === 2)) {
              b$1 = t0$14[0];inner$3 = t0$14[1];
            } else {
              ___match_error($targ$10);
            }[b$1, inner$3];accum$0 = accum$0.concat(inner$3);temp$5 = b$1;acc$2.push(temp$5);
          }newargs$0 = acc$2;return [__lt____lt____colon__$0([type$0].concat(newargs$0), expr$5), accum$0];
        } else {
          if ($$16375$0 && (type$1 = t0$11[0], args$1 = Array.prototype.slice.call(t0$11, 1), not_hoistable$0.indexOf(type$1) !== -1)) {
            acc$3 = [];temp$6 = null;m$7 = null;$8: for (var _iterator8 = args$1[Symbol.iterator](), _step8; !(_step8 = _iterator8.next()).done;) {
              m$7 = _step8.value;
              var t0$15 = undefined;var t1$12 = undefined;var other$2 = undefined;var t0$16 = undefined;var m$8$0 = undefined;var $targ$11 = undefined;var b$2 = undefined;var inner$4 = undefined;var arg$1 = undefined;arg$1 = m$7;$targ$11 = hoist_helper$0(arg$1);t0$15 = $targ$11;if (Array.isArray(t0$15) && (t1$12 = t0$15.length, t1$12 === 2)) {
                b$2 = t0$15[0];inner$4 = t0$15[1];
              } else {
                ___match_error($targ$11);
              }[b$2, inner$4];m$8$0 = inner$4;if (Array.isArray(m$8$0) && (t0$16 = m$8$0.length, t0$16 === 0)) {
                temp$6 = b$2;
              } else {
                other$2 = m$8$0;temp$6 = ["scope", inner$4, b$2];
              }acc$3.push(temp$6);
            }newargs$1 = acc$3;return [__lt____lt____colon__$0([type$1].concat(newargs$1), expr$5), []];
          } else {
            other$3 = ph$2$0;throw ErrorFactory(["syntax", "illegal"]).create("Illegal node -- this should not happen.", { node: other$3 });
          }
        }
      }
    }
  }
};$targ$12 = hoist$0;exports.hoist = $targ$12;[];$targ$13 = eliminate_spurious_variables$0;exports.eliminate_spurious_variables = $targ$13;[];
//# sourceMappingURL=opt.js.map

