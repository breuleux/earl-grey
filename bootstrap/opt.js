"use strict";
require("earlgrey-runtime");
var $targ$82;
var $targ$83;
var s$0;
var varstats$0;
var replaceVars$0;
var eliminate_spurious_variables$0;
var hoist$0;
var hoistable$0;
var not_hoistable$0;
var hoist_helper$0;
s$0 = (function(stats$0, v$0) {
  var $targ$8;
  if ((!Object.hasOwnProperty.call(stats$0, v$0))) {
    $targ$8 = ({
      "assigns": 0,
      "uses": 0,
      "transfers": [],
      "replaceable": false
    });
    (stats$0[v$0] = $targ$8);
  }
  return send(stats$0, v$0);
});
varstats$0 = (function(temp$0$0, stats$1) {
  var t0$0;
  var t4$0;
  var t3$0;
  var t2$0;
  var t1$0;
  var $targ$11;
  var x$0;
  var $targ$17;
  var m$1;
  var m$2;
  var m$3;
  var acc$0;
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
  var $$14916$0;
  var $$14917$0;
  var $$14918$0;
  var $$14919$0;
  var $$14920$0;
  var $$14921$0;
  var $$14922$0;
  var $$14923$0;
  var $$14924$0;
  var t0$1;
  var m$0$0;
  var ph$0;
  var expr$0;
  t0$0 = temp$0$0;
  expr$0 = t0$0;
  ph$0 = t0$0;
  m$0$0 = ph$0;
  if ((($$14916$0 = (m$0$0 instanceof Array)) && (($targ$11 = m$0$0.length), (t0$1 = $targ$11), (($$14918$0 = (t0$1 === 3)) && (($$14919$0 = (m$0$0[0] === "assign")) && ((t1$0 = m$0$0[1]), (($$14921$0 = (t1$0 instanceof Array)) && ((t2$0 = t1$0.length), (($$14923$0 = (t2$0 === 2)) && (($$14924$0 = (t1$0[0] === "variable")) && ((v1$0 = t1$0[1]), (t3$0 = m$0$0[2]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), ((t4$0 === 2) && (t3$0[0] === "variable"))))))))))))))) {
    v2$0 = t3$0[1];
    (s$0(stats$1, v1$0)["assigns"] = (s$0(stats$1, v1$0).assigns + 1));
    (s$0(stats$1, v2$0)["uses"] = (s$0(stats$1, v2$0).uses + 1));
    return s$0(stats$1, v2$0).transfers.push(v1$0);
  } else {
    if ($$14924$0) {
      v1$1 = t1$0[1];
      expr$1 = m$0$0[2];
      (s$0(stats$1, v1$1)["assigns"] = (s$0(stats$1, v1$1).assigns + 1));
      return varstats$0(expr$1, stats$1);
    } else {
      if (($$14916$0 && ((t0$1 === 2) && (m$0$0[0] === "variable")))) {
        v$1 = m$0$0[1];
        return (s$0(stats$1, v$1)["uses"] = (s$0(stats$1, v$1).uses + 1));
      } else {
        if (((x$0 = m$0$0), ((x$0 instanceof Array) && (x$0[0] === "value")))) {
          return undefined;
        } else {
          if ((($$14916$0 = (m$0$0 instanceof Array)) && (($targ$17 = m$0$0.length), (t0$1 = $targ$17), ((t0$1 === 3) && (m$0$0[0] === "scope"))))) {
            vars$0 = m$0$0[1];
            body$0 = m$0$0[2];
            m$1 = null;
            $0: for (var $__0 = vars$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$1 = $__1.value;
              {
                var t1$1;
                var $targ$20;
                var t0$2;
                var v$2;
                t0$2 = m$1;
                if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), ((t1$1 === 2) && (t0$2[0] === "variable"))))) {
                  v$2 = t0$2[1];
                  $targ$20 = true;
                  (s$0(stats$1, v$2)["replaceable"] = $targ$20);
                } else {
                  ___match_error(m$1, "/home/olivier/git/earl-grey/src/opt.eg", 619, 691);
                }
              }
            }
            return varstats$0(body$0, stats$1);
          } else {
            if (($$14916$0 && (((t0$1 >= 3) && (t0$1 <= 4)) && (m$0$0[0] === "lambda")))) {
              vars$1 = m$0$0[1];
              body$1 = m$0$0[2];
              generator$0 = ((3 >= t0$1) ? null : m$0$0[3]);
              m$2 = null;
              $1: for (var $__2 = vars$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__3; !($__3 = $__2.next()).done; ) {
                m$2 = $__3.value;
                {
                  var t1$2;
                  var t0$3;
                  var v$3;
                  t0$3 = m$2;
                  if (((t0$3 instanceof Array) && ((t1$2 = t0$3.length), ((t1$2 === 2) && (t0$3[0] === "variable"))))) {
                    v$3 = t0$3[1];
                    (s$0(stats$1, v$3)["assigns"] = (s$0(stats$1, v$3).assigns + 1));
                  } else {
                    ___match_error(m$2, "/home/olivier/git/earl-grey/src/opt.eg", 763, 829);
                  }
                }
              }
              return varstats$0(body$1, stats$1);
            } else {
              other$0 = m$0$0;
              acc$0 = [];
              m$3 = null;
              $2: for (var $__4 = other$0.slice(1)[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__5; !($__5 = $__4.next()).done; ) {
                m$3 = $__5.value;
                {
                  var x$1;
                  x$1 = m$3;
                  acc$0.push(varstats$0(x$1, stats$1));
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
replaceVars$0 = (function(temp$1$0, repl$0) {
  var t0$4;
  var $targ$26;
  var t4$1;
  var t3$1;
  var t2$1;
  var t1$3;
  var x$2;
  var x$3;
  var $targ$34;
  var m$5;
  var newvars$0;
  var m$6;
  var acc$1;
  var newrest$0;
  var other$1;
  var x$4;
  var rest$0;
  var vars$3;
  var body$3;
  var generator$1;
  var vars$2;
  var body$2;
  var bridge$$15072$0;
  var v1$2;
  var v2$1;
  var v$4;
  var $$15077$0;
  var $$15078$0;
  var t0$5;
  var m$4$0;
  var ph$1;
  var expr$2;
  t0$4 = temp$1$0;
  expr$2 = t0$4;
  ph$1 = t0$4;
  m$4$0 = ph$1;
  if ((($$15077$0 = (m$4$0 instanceof Array)) && (($targ$26 = m$4$0.length), (t0$5 = $targ$26), ((t0$5 === 2) && ((m$4$0[0] === "variable") && ((v$4 = m$4$0[1]), (Object.hasOwnProperty.call(repl$0, v$4) && send(repl$0, v$4)))))))) {
    return ["variable", send(repl$0, v$4)];
  } else {
    if (($$15077$0 && ((t0$5 === 3) && ((m$4$0[0] === "assign") && ((t1$3 = m$4$0[1]), ((t1$3 instanceof Array) && ((t2$1 = t1$3.length), ((t2$1 === 2) && ((t1$3[0] === "variable") && ((v1$2 = t1$3[1]), (t3$1 = m$4$0[2]), ((t3$1 instanceof Array) && ((t4$1 = t3$1.length), ((t4$1 === 2) && ((t3$1[0] === "variable") && ((v2$1 = t3$1[1]), (equal(send(repl$0, v1$2), v2$1) || equal(send(repl$0, v2$1), v1$2))))))))))))))))) {
      return ["multi"];
    } else {
      bridge$$15072$0 = m$4$0;
      if ((((x$2 = bridge$$15072$0), ((x$2 instanceof Array) && (x$2[0] === "variable"))) || ((x$3 = bridge$$15072$0), ((x$3 instanceof Array) && (x$3[0] === "value"))))) {
        return expr$2;
      } else {
        if ((($$15077$0 = (m$4$0 instanceof Array)) && (($targ$34 = m$4$0.length), (t0$5 = $targ$34), ((t0$5 === 3) && (m$4$0[0] === "scope"))))) {
          vars$2 = m$4$0[1];
          body$2 = m$4$0[2];
          newvars$0 = [];
          m$5 = null;
          $3: for (var $__0 = vars$2[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$5 = $__1.value;
            {
              var t1$4;
              var t0$6;
              var _var$0;
              var v$5;
              t0$6 = m$5;
              _var$0 = t0$6;
              if (((t0$6 instanceof Array) && ((t1$4 = t0$6.length), ((t1$4 === 2) && (t0$6[0] === "variable"))))) {
                v$5 = t0$6[1];
                if (Object.hasOwnProperty.call(repl$0, v$5)) {
                  if ((send(repl$0, v$5) !== false)) {
                    newvars$0.push(["variable", send(repl$0, v$5)]);
                  }
                } else {
                  newvars$0.push(_var$0);
                }
              } else {
                ___match_error(m$5, "/home/olivier/git/earl-grey/src/opt.eg", 1236, 1458);
              }
            }
          }
          return ["scope", newvars$0, replaceVars$0(body$2, repl$0)];
        } else {
          if (($$15077$0 && (((t0$5 >= 3) && (t0$5 <= 4)) && (m$4$0[0] === "lambda")))) {
            vars$3 = m$4$0[1];
            body$3 = m$4$0[2];
            generator$1 = ((3 >= t0$5) ? null : m$4$0[3]);
            return ["lambda", vars$3, replaceVars$0(body$3, repl$0), generator$1];
          } else {
            if (($$15077$0 && (t0$5 >= 1))) {
              x$4 = m$4$0[0];
              rest$0 = Array.prototype.slice.call(m$4$0, 1);
              newrest$0 = ((acc$1 = []), (m$6 = null), (function() {
                $4: for (var $__2 = rest$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__3; !($__3 = $__2.next()).done; ) {
                  m$6 = $__3.value;
                  {
                    var elem$0;
                    elem$0 = m$6;
                    acc$1.push(replaceVars$0(elem$0, repl$0));
                  }
                }
              })(), acc$1);
              return [x$4].concat(newrest$0);
            } else {
              other$1 = m$4$0;
              console.error(other$1);
              throw ErrorFactory(["replaceVars"]).create(("Unknown: " + String(other$1)));
            }
          }
        }
      }
    }
  }
});
eliminate_spurious_variables$0 = (function(expr$3) {
  var m$7;
  var stats$2;
  var repl$1;
  stats$2 = ({});
  varstats$0(expr$3, stats$2);
  repl$1 = ({});
  m$7 = null;
  $5: for (var $__0 = items(stats$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$7 = $__1.value;
    {
      var t1$5;
      var t1$6;
      var t0$8;
      var $targ$48;
      var $targ$49;
      var $targ$50;
      var $targ$51;
      var $targ$44;
      var tr$0;
      var st2$0;
      var t0$7;
      var v$6;
      var st$0;
      t0$7 = m$7;
      if (((t0$7 instanceof Array) && ((t1$5 = t0$7.length), (t1$5 === 2)))) {
        v$6 = t0$7[0];
        st$0 = t0$7[1];
        if ((((equal(st$0.uses, 1) && equal(st$0.assigns, 1)) && equal(st$0.transfers.length, 1)) && st$0.replaceable)) {
          $targ$44 = st$0.transfers;
          t0$8 = $targ$44;
          if (((t0$8 instanceof Array) && ((t1$6 = t0$8.length), (t1$6 === 1)))) {
            tr$0 = t0$8[0];
          } else {
            ___match_error($targ$44);
          }
          st2$0 = s$0(stats$2, tr$0);
          if ((equal(st2$0.assigns, 1) && st2$0.replaceable)) {
            $targ$48 = tr$0;
            (repl$1[v$6] = $targ$48);
            $targ$49 = false;
            (repl$1[tr$0] = $targ$49);
            $targ$50 = false;
            (st$0["replaceable"] = $targ$50);
            $targ$51 = false;
            (st2$0["replaceable"] = $targ$51);
          }
        }
      } else {
        ___match_error(m$7, "/home/olivier/git/earl-grey/src/opt.eg", 2097, 2452);
      }
    }
  }
  return replaceVars$0(expr$3, repl$1);
});
hoist$0 = (function(expr$4) {
  var t1$7;
  var t0$9;
  var $targ$52;
  var b$0;
  var inner$0;
  $targ$52 = hoist_helper$0(expr$4);
  t0$9 = $targ$52;
  if (((t0$9 instanceof Array) && ((t1$7 = t0$9.length), (t1$7 === 2)))) {
    b$0 = t0$9[0];
    inner$0 = t0$9[1];
  } else {
    ___match_error($targ$52);
  }
  return ["scope", inner$0, b$0];
});
hoistable$0 = ["send", "array", "object", "multi", "if", "assign", "js_break", "js_continue", "js_return", "js_delete", "js_throw", "js_try", "js_new", "js_yield"];
not_hoistable$0 = ["void", "js_while", "js_for", "js_for_in", "js_for_of", "js_label"];
hoist_helper$0 = (function(temp$2$0) {
  var t0$10;
  var x$5;
  var x$6;
  var bridge$$15320$0;
  var x$7;
  var t0$11;
  var t1$8;
  var t0$12;
  var $targ$63;
  var newbody$0;
  var inner$1;
  var t1$9;
  var t0$13;
  var $targ$66;
  var newbody$1;
  var inner$2;
  var m$9;
  var acc$2;
  var $targ$69;
  var accum$0;
  var newargs$0;
  var m$10;
  var acc$3;
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
  var bridge$$15319$0;
  var $$15326$0;
  var $$15327$0;
  var $$15328$0;
  var m$8$0;
  var ph$2;
  var expr$5;
  t0$10 = temp$2$0;
  expr$5 = t0$10;
  ph$2 = t0$10;
  m$8$0 = ph$2;
  bridge$$15319$0 = m$8$0;
  if ((((bridge$$15320$0 = bridge$$15319$0), (((x$5 = bridge$$15320$0), ((x$5 instanceof Array) && (x$5[0] === "symbol"))) || ((x$6 = bridge$$15320$0), ((x$6 instanceof Array) && (x$6[0] === "value"))))) || ((x$7 = bridge$$15319$0), ((x$7 instanceof Array) && (x$7[0] === "variable"))))) {
    return [expr$5, []];
  } else {
    if ((($$15326$0 = (m$8$0 instanceof Array)) && ((t0$11 = m$8$0.length), ((t0$11 === 3) && (m$8$0[0] === "scope"))))) {
      vars$4 = m$8$0[1];
      body$4 = m$8$0[2];
      $targ$63 = hoist_helper$0(body$4);
      t0$12 = $targ$63;
      if (((t0$12 instanceof Array) && ((t1$8 = t0$12.length), (t1$8 === 2)))) {
        newbody$0 = t0$12[0];
        inner$1 = t0$12[1];
      } else {
        ___match_error($targ$63);
      }
      return [newbody$0, inner$1.concat(vars$4)];
    } else {
      if (($$15326$0 && ((t0$11 === 4) && (m$8$0[0] === "lambda")))) {
        vars$5 = m$8$0[1];
        body$5 = m$8$0[2];
        generator$2 = m$8$0[3];
        $targ$66 = hoist_helper$0(body$5);
        t0$13 = $targ$66;
        if (((t0$13 instanceof Array) && ((t1$9 = t0$13.length), (t1$9 === 2)))) {
          newbody$1 = t0$13[0];
          inner$2 = t0$13[1];
        } else {
          ___match_error($targ$66);
        }
        return [["lambda", vars$5, ["scope", inner$2, newbody$1], generator$2], []];
      } else {
        if (($$15326$0 && (($$15328$0 = (t0$11 >= 1)) && ((type$0 = m$8$0[0]), (args$0 = Array.prototype.slice.call(m$8$0, 1)), (hoistable$0.indexOf(type$0) !== -1))))) {
          $targ$69 = [];
          accum$0 = $targ$69;
          newargs$0 = ((acc$2 = []), (m$9 = null), (function() {
            $6: for (var $__0 = args$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__1; !($__1 = $__0.next()).done; ) {
              m$9 = $__1.value;
              {
                var t1$10;
                var t0$14;
                var $targ$72;
                var b$1;
                var inner$3;
                var arg$0;
                arg$0 = m$9;
                acc$2.push((($targ$72 = hoist_helper$0(arg$0)), (t0$14 = $targ$72), (((t0$14 instanceof Array) && ((t1$10 = t0$14.length), (t1$10 === 2))) ? ((b$1 = t0$14[0]), (inner$3 = t0$14[1])) : ___match_error($targ$72)), (accum$0 = accum$0.concat(inner$3)), b$1));
              }
            }
          })(), acc$2);
          return [[type$0].concat(newargs$0), accum$0];
        } else {
          if (($$15328$0 && ((type$1 = m$8$0[0]), (args$1 = Array.prototype.slice.call(m$8$0, 1)), (not_hoistable$0.indexOf(type$1) !== -1)))) {
            newargs$1 = ((acc$3 = []), (m$10 = null), (function() {
              $7: for (var $__0 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__1; !($__1 = $__0.next()).done; ) {
                m$10 = $__1.value;
                {
                  var t1$11;
                  var t0$15;
                  var t0$16;
                  var other$2;
                  var m$11$0;
                  var $targ$77;
                  var b$2;
                  var inner$4;
                  var arg$1;
                  arg$1 = m$10;
                  acc$3.push((($targ$77 = hoist_helper$0(arg$1)), (t0$15 = $targ$77), (((t0$15 instanceof Array) && ((t1$11 = t0$15.length), (t1$11 === 2))) ? ((b$2 = t0$15[0]), (inner$4 = t0$15[1])) : ___match_error($targ$77)), (m$11$0 = inner$4), (((m$11$0 instanceof Array) && ((t0$16 = m$11$0.length), (t0$16 === 0))) ? b$2 : ((other$2 = m$11$0), ["scope", inner$4, b$2]))));
                }
              }
            })(), acc$3);
            return [[type$1].concat(newargs$1), []];
          } else {
            other$3 = m$8$0;
            throw ErrorFactory(["syntax", "illegal"]).create("Illegal node -- this should not happen.", ({"node": other$3}));
          }
        }
      }
    }
  }
});
$targ$82 = hoist$0;
(exports["hoist"] = $targ$82);
$targ$83 = eliminate_spurious_variables$0;
(exports["eliminate_spurious_variables"] = $targ$83);
//# sourceURL=<compile-source>
