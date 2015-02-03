"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$12;
var $targ$13;
var $0$0;
var __lt____lt____colon__$0;
var s$0;
var varstats$0;
var replaceVars$0;
var eliminate_spurious_variables$0;
var hoist$0;
var hoistable$0;
var not_hoistable$0;
var hoist_helper$0;
$0$0 = require("./location");
__lt____lt____colon__$0 = $0$0["<<:"];
s$0 = (function s(stats$0, v$0) {
  var $targ$0;
  if ((!Object.hasOwnProperty.call(stats$0, v$0))) {
    $targ$0 = ({
      "assigns": 0,
      "uses": 0,
      "transfers": [],
      "replaceable": false
    });
    (stats$0[v$0] = $targ$0);
    [];
  }
  return send(stats$0, v$0);
});
varstats$0 = (function varstats(temp$0$0, stats$1) {
  var t0$0;
  var x$0;
  var m$0;
  var m$1;
  var m$2;
  var acc$0;
  var temp$1;
  var other$0;
  var vars$1;
  var body$1;
  var generator$0;
  var vars$0;
  var body$0;
  var v$1;
  var v1$1;
  var expr$1;
  var v1$0;
  var v2$0;
  var $$16070$0;
  var $$16071$0;
  var $$16072$0;
  var $$16073$0;
  var $$16074$0;
  var $$16075$0;
  var $$16076$0;
  var $$16077$0;
  var $$16078$0;
  var t0$1;
  var t1$0;
  var t2$0;
  var t3$0;
  var t4$0;
  var t5$0;
  var expr$0;
  var ph$0$0;
  t0$0 = temp$0$0;
  expr$0 = t0$0;
  ph$0$0 = t0$0;
  t0$1 = ph$0$0;
  t1$0 = t0$1.length;
  if ((($$16072$0 = (t1$0 === 3)) && (($$16073$0 = (t0$1[0] === "assign")) && ((t2$0 = t0$1[1]), (($$16075$0 = (t2$0 instanceof Array)) && ((t3$0 = t2$0.length), (($$16077$0 = (t3$0 === 2)) && (($$16078$0 = (t2$0[0] === "variable")) && ((v1$0 = t2$0[1]), (t4$0 = t0$1[2]), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 2) && (t4$0[0] === "variable"))))))))))))) {
    v2$0 = t4$0[1];
    (s$0(stats$1, v1$0)["assigns"] = (s$0(stats$1, v1$0).assigns + 1));
    (s$0(stats$1, v2$0)["uses"] = (s$0(stats$1, v2$0).uses + 1));
    return s$0(stats$1, v2$0).transfers.push(v1$0);
  } else {
    if ($$16078$0) {
      v1$1 = t2$0[1];
      expr$1 = t0$1[2];
      (s$0(stats$1, v1$1)["assigns"] = (s$0(stats$1, v1$1).assigns + 1));
      return varstats$0(expr$1, stats$1);
    } else {
      if (((t1$0 === 2) && (t0$1[0] === "variable"))) {
        v$1 = t0$1[1];
        return (s$0(stats$1, v$1)["uses"] = (s$0(stats$1, v$1).uses + 1));
      } else {
        if (((x$0 = ph$0$0), ((x$0 instanceof Array) && (x$0[0] === "value")))) {
          return undefined;
        } else {
          t0$1 = ph$0$0;
          t1$0 = t0$1.length;
          if (((t1$0 === 3) && (t0$1[0] === "scope"))) {
            vars$0 = t0$1[1];
            body$0 = t0$1[2];
            m$0 = null;
            $1: for (var $__0 = vars$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$0 = $__1.value;
              {
                var $targ$1;
                var v$2;
                var t0$2;
                var t1$1;
                t0$2 = m$0;
                if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), ((t1$1 === 2) && (t0$2[0] === "variable"))))) {
                  v$2 = t0$2[1];
                  $targ$1 = true;
                  (s$0(stats$1, v$2)["replaceable"] = $targ$1);
                  [];
                } else {
                  ___match_error(m$0, "/home/olivier/git/earl-grey/src/opt.eg", 658, 730);
                }
              }
            }
            return varstats$0(body$0, stats$1);
          } else {
            if ((((t1$0 >= 3) && (t1$0 <= 4)) && (t0$1[0] === "lambda"))) {
              vars$1 = t0$1[1];
              body$1 = t0$1[2];
              if ((3 >= t1$0)) {
                generator$0 = null;
              } else {
                generator$0 = t0$1[3];
              }
              m$1 = null;
              $2: for (var $__2 = vars$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__3; !($__3 = $__2.next()).done; ) {
                m$1 = $__3.value;
                {
                  var v$3;
                  var t0$3;
                  var t1$2;
                  t0$3 = m$1;
                  if (((t0$3 instanceof Array) && ((t1$2 = t0$3.length), ((t1$2 === 2) && (t0$3[0] === "variable"))))) {
                    v$3 = t0$3[1];
                    (s$0(stats$1, v$3)["assigns"] = (s$0(stats$1, v$3).assigns + 1));
                  } else {
                    ___match_error(m$1, "/home/olivier/git/earl-grey/src/opt.eg", 802, 868);
                  }
                }
              }
              return varstats$0(body$1, stats$1);
            } else {
              other$0 = ph$0$0;
              acc$0 = [];
              temp$1 = null;
              m$2 = null;
              $3: for (var $__4 = other$0.slice(1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__5; !($__5 = $__4.next()).done; ) {
                m$2 = $__5.value;
                {
                  var x$1;
                  x$1 = m$2;
                  temp$1 = varstats$0(x$1, stats$1);
                  acc$0.push(temp$1);
                }
              }
              return acc$0;
            }
          }
        }
      }
    }
  }
});
replaceVars$0 = (function replaceVars(temp$2$0, repl$0) {
  var t0$4;
  var x$2;
  var x$3;
  var m$3;
  var newvars$0;
  var m$4;
  var acc$1;
  var temp$3;
  var newrest$0;
  var other$1;
  var x$4;
  var rest$0;
  var vars$3;
  var body$3;
  var generator$1;
  var vars$2;
  var body$2;
  var v1$2;
  var v2$1;
  var v$4;
  var $$16240$0;
  var $$16241$0;
  var $$16242$0;
  var t0$5;
  var t1$3;
  var t2$1;
  var t3$1;
  var t4$1;
  var t5$1;
  var bridge$$16235$0;
  var expr$2;
  var ph$1$0;
  t0$4 = temp$2$0;
  expr$2 = t0$4;
  ph$1$0 = t0$4;
  t0$5 = ph$1$0;
  if ((($$16241$0 = (t0$5 instanceof Array)) && ((t1$3 = t0$5.length), ((t1$3 === 2) && ((t0$5[0] === "variable") && ((v$4 = t0$5[1]), (Object.hasOwnProperty.call(repl$0, v$4) && send(repl$0, v$4)))))))) {
    return __lt____lt____colon__$0(["variable", send(repl$0, v$4)], expr$2);
  } else {
    if (($$16241$0 && ((t1$3 === 3) && ((t0$5[0] === "assign") && ((t2$1 = t0$5[1]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 2) && ((t2$1[0] === "variable") && ((v1$2 = t2$1[1]), (t4$1 = t0$5[2]), ((t4$1 instanceof Array) && ((t5$1 = t4$1.length), ((t5$1 === 2) && ((t4$1[0] === "variable") && ((v2$1 = t4$1[1]), (equal(send(repl$0, v1$2), v2$1) || equal(send(repl$0, v2$1), v1$2))))))))))))))))) {
      return __lt____lt____colon__$0(["multi"], expr$2);
    } else {
      bridge$$16235$0 = ph$1$0;
      if ((((x$2 = bridge$$16235$0), ((x$2 instanceof Array) && (x$2[0] === "variable"))) || ((x$3 = bridge$$16235$0), ((x$3 instanceof Array) && (x$3[0] === "value"))))) {
        return expr$2;
      } else {
        t0$5 = ph$1$0;
        t1$3 = t0$5.length;
        if (((t1$3 === 3) && (t0$5[0] === "scope"))) {
          vars$2 = t0$5[1];
          body$2 = t0$5[2];
          newvars$0 = [];
          m$3 = null;
          $4: for (var $__0 = vars$2[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$3 = $__1.value;
            {
              var _var$0;
              var v$5;
              var t0$6;
              var t1$4;
              t0$6 = m$3;
              _var$0 = t0$6;
              if (((t0$6 instanceof Array) && ((t1$4 = t0$6.length), ((t1$4 === 2) && (t0$6[0] === "variable"))))) {
                v$5 = t0$6[1];
                if (Object.hasOwnProperty.call(repl$0, v$5)) {
                  if ((send(repl$0, v$5) !== false)) {
                    newvars$0.push(__lt____lt____colon__$0(["variable", send(repl$0, v$5)], _var$0));
                  }
                } else {
                  newvars$0.push(_var$0);
                }
              } else {
                ___match_error(m$3, "/home/olivier/git/earl-grey/src/opt.eg", 1293, 1542);
              }
            }
          }
          return __lt____lt____colon__$0(["scope", newvars$0, replaceVars$0(body$2, repl$0)], expr$2);
        } else {
          if ((((t1$3 >= 3) && (t1$3 <= 4)) && (t0$5[0] === "lambda"))) {
            vars$3 = t0$5[1];
            body$3 = t0$5[2];
            if ((3 >= t1$3)) {
              generator$1 = null;
            } else {
              generator$1 = t0$5[3];
            }
            return __lt____lt____colon__$0(["lambda", vars$3, replaceVars$0(body$3, repl$0), generator$1], expr$2);
          } else {
            if ((t1$3 >= 1)) {
              x$4 = t0$5[0];
              rest$0 = Array.prototype.slice.call(t0$5, 1);
              acc$1 = [];
              temp$3 = null;
              m$4 = null;
              $5: for (var $__2 = rest$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__3; !($__3 = $__2.next()).done; ) {
                m$4 = $__3.value;
                {
                  var elem$0;
                  elem$0 = m$4;
                  temp$3 = replaceVars$0(elem$0, repl$0);
                  acc$1.push(temp$3);
                }
              }
              newrest$0 = acc$1;
              return __lt____lt____colon__$0([x$4].concat(newrest$0), expr$2);
            } else {
              other$1 = ph$1$0;
              console.error(other$1);
              throw ErrorFactory(["replaceVars"]).create(("Unknown: " + String(other$1)));
            }
          }
        }
      }
    }
  }
});
eliminate_spurious_variables$0 = (function eliminate_spurious_variables(expr$3) {
  var m$5;
  var stats$2;
  var repl$1;
  stats$2 = ({});
  varstats$0(expr$3, stats$2);
  repl$1 = ({});
  m$5 = null;
  $6: for (var $__0 = items(stats$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$5 = $__1.value;
    {
      var t0$8;
      var t1$6;
      var $targ$3;
      var $targ$4;
      var $targ$5;
      var $targ$6;
      var $targ$2;
      var tr$0;
      var st2$0;
      var v$6;
      var st$0;
      var t0$7;
      var t1$5;
      t0$7 = m$5;
      if (((t0$7 instanceof Array) && ((t1$5 = t0$7.length), (t1$5 === 2)))) {
        v$6 = t0$7[0];
        st$0 = t0$7[1];
        if ((((equal(st$0.uses, 1) && equal(st$0.assigns, 1)) && equal(st$0.transfers.length, 1)) && st$0.replaceable)) {
          $targ$2 = st$0.transfers;
          t0$8 = $targ$2;
          if (((t0$8 instanceof Array) && ((t1$6 = t0$8.length), (t1$6 === 1)))) {
            tr$0 = t0$8[0];
          } else {
            ___match_error($targ$2);
          }
          st2$0 = s$0(stats$2, tr$0);
          if ((equal(st2$0.assigns, 1) && st2$0.replaceable)) {
            $targ$3 = tr$0;
            (repl$1[v$6] = $targ$3);
            [];
            $targ$4 = false;
            (repl$1[tr$0] = $targ$4);
            [];
            $targ$5 = false;
            (st$0["replaceable"] = $targ$5);
            [];
            $targ$6 = false;
            (st2$0["replaceable"] = $targ$6);
            [];
          }
        }
      } else {
        ___match_error(m$5, "/home/olivier/git/earl-grey/src/opt.eg", 2210, 2565);
      }
    }
  }
  return replaceVars$0(expr$3, repl$1);
});
hoist$0 = (function hoist(expr$4) {
  var t0$9;
  var t1$7;
  var $targ$7;
  var b$0;
  var inner$0;
  $targ$7 = hoist_helper$0(expr$4);
  t0$9 = $targ$7;
  if (((t0$9 instanceof Array) && ((t1$7 = t0$9.length), (t1$7 === 2)))) {
    b$0 = t0$9[0];
    inner$0 = t0$9[1];
  } else {
    ___match_error($targ$7);
  }
  [b$0, inner$0];
  return ["scope", inner$0, b$0];
});
hoistable$0 = ["send", "array", "object", "multi", "if", "assign", "js_break", "js_continue", "js_return", "js_delete", "js_throw", "js_try", "js_new", "js_yield"];
not_hoistable$0 = ["void", "js_while", "js_for", "js_for_in", "js_for_of", "js_label"];
hoist_helper$0 = (function hoist_helper(temp$4$0) {
  var t0$10;
  var x$5;
  var x$6;
  var bridge$$16494$0;
  var x$7;
  var t0$12;
  var t1$9;
  var $targ$8;
  var newbody$0;
  var inner$1;
  var t0$13;
  var t1$10;
  var $targ$9;
  var newbody$1;
  var inner$2;
  var newlambda$0;
  var m$6;
  var acc$2;
  var temp$5;
  var accum$0;
  var newargs$0;
  var m$7;
  var acc$3;
  var temp$6;
  var newargs$1;
  var other$3;
  var type$1;
  var args$1;
  var type$0;
  var args$0;
  var vars$5;
  var body$5;
  var generator$2;
  var vars$4;
  var body$4;
  var $$16500$0;
  var $$16501$0;
  var $$16502$0;
  var $$16503$0;
  var bridge$$16493$0;
  var t0$11;
  var t1$8;
  var expr$5;
  var ph$2$0;
  t0$10 = temp$4$0;
  expr$5 = t0$10;
  ph$2$0 = t0$10;
  bridge$$16493$0 = ph$2$0;
  if ((((bridge$$16494$0 = bridge$$16493$0), (((x$5 = bridge$$16494$0), ((x$5 instanceof Array) && (x$5[0] === "symbol"))) || ((x$6 = bridge$$16494$0), ((x$6 instanceof Array) && (x$6[0] === "value"))))) || ((x$7 = bridge$$16493$0), ((x$7 instanceof Array) && (x$7[0] === "variable"))))) {
    return [expr$5, []];
  } else {
    t0$11 = ph$2$0;
    t1$8 = t0$11.length;
    if (((t1$8 === 3) && (t0$11[0] === "scope"))) {
      vars$4 = t0$11[1];
      body$4 = t0$11[2];
      $targ$8 = hoist_helper$0(body$4);
      t0$12 = $targ$8;
      if (((t0$12 instanceof Array) && ((t1$9 = t0$12.length), (t1$9 === 2)))) {
        newbody$0 = t0$12[0];
        inner$1 = t0$12[1];
      } else {
        ___match_error($targ$8);
      }
      [newbody$0, inner$1];
      return [newbody$0, inner$1.concat(vars$4)];
    } else {
      if (((t1$8 === 4) && (t0$11[0] === "lambda"))) {
        vars$5 = t0$11[1];
        body$5 = t0$11[2];
        generator$2 = t0$11[3];
        $targ$9 = hoist_helper$0(body$5);
        t0$13 = $targ$9;
        if (((t0$13 instanceof Array) && ((t1$10 = t0$13.length), (t1$10 === 2)))) {
          newbody$1 = t0$13[0];
          inner$2 = t0$13[1];
        } else {
          ___match_error($targ$9);
        }
        [newbody$1, inner$2];
        newlambda$0 = __amp____colon__(["lambda", vars$5, __lt____lt____colon__$0(["scope", inner$2, newbody$1], body$5), generator$2], ({"name": expr$5.name}));
        return [__lt____lt____colon__$0(newlambda$0, expr$5), []];
      } else {
        if ((($$16501$0 = (t0$11 instanceof Array)) && ((t1$8 = t0$11.length), (($$16503$0 = (t1$8 >= 1)) && ((type$0 = t0$11[0]), (args$0 = Array.prototype.slice.call(t0$11, 1)), (hoistable$0.indexOf(type$0) !== -1)))))) {
          accum$0 = [];
          acc$2 = [];
          temp$5 = null;
          m$6 = null;
          $7: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$6 = $__1.value;
            {
              var t0$14;
              var t1$11;
              var $targ$10;
              var b$1;
              var inner$3;
              var arg$0;
              arg$0 = m$6;
              $targ$10 = hoist_helper$0(arg$0);
              t0$14 = $targ$10;
              if (((t0$14 instanceof Array) && ((t1$11 = t0$14.length), (t1$11 === 2)))) {
                b$1 = t0$14[0];
                inner$3 = t0$14[1];
              } else {
                ___match_error($targ$10);
              }
              [b$1, inner$3];
              accum$0 = accum$0.concat(inner$3);
              temp$5 = b$1;
              acc$2.push(temp$5);
            }
          }
          newargs$0 = acc$2;
          return [__lt____lt____colon__$0([type$0].concat(newargs$0), expr$5), accum$0];
        } else {
          if (($$16503$0 && ((type$1 = t0$11[0]), (args$1 = Array.prototype.slice.call(t0$11, 1)), (not_hoistable$0.indexOf(type$1) !== -1)))) {
            acc$3 = [];
            temp$6 = null;
            m$7 = null;
            $8: for (var $__2 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__3; !($__3 = $__2.next()).done; ) {
              m$7 = $__3.value;
              {
                var t0$15;
                var t1$12;
                var other$2;
                var t0$16;
                var m$8$0;
                var $targ$11;
                var b$2;
                var inner$4;
                var arg$1;
                arg$1 = m$7;
                $targ$11 = hoist_helper$0(arg$1);
                t0$15 = $targ$11;
                if (((t0$15 instanceof Array) && ((t1$12 = t0$15.length), (t1$12 === 2)))) {
                  b$2 = t0$15[0];
                  inner$4 = t0$15[1];
                } else {
                  ___match_error($targ$11);
                }
                [b$2, inner$4];
                m$8$0 = inner$4;
                if (((m$8$0 instanceof Array) && ((t0$16 = m$8$0.length), (t0$16 === 0)))) {
                  temp$6 = b$2;
                } else {
                  other$2 = m$8$0;
                  temp$6 = ["scope", inner$4, b$2];
                }
                acc$3.push(temp$6);
              }
            }
            newargs$1 = acc$3;
            return [__lt____lt____colon__$0([type$1].concat(newargs$1), expr$5), []];
          } else {
            other$3 = ph$2$0;
            throw ErrorFactory(["syntax", "illegal"]).create("Illegal node -- this should not happen.", ({"node": other$3}));
          }
        }
      }
    }
  }
});
$targ$12 = hoist$0;
(exports["hoist"] = $targ$12);
[];
$targ$13 = eliminate_spurious_variables$0;
(exports["eliminate_spurious_variables"] = $targ$13);
[];
//# sourceURL=<compile-source>
