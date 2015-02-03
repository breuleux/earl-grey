"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$0;
var $0$0;
var Body$0;
$0$0 = require("./helpers");
Body$0 = $0$0.Body;
$targ$0 = (function(mac$0) {
  var t0$5;
  var t0$10;
  var t0$12;
  var t0$15;
  var $targ$1;
  var require_mac$0;
  var $targ$2;
  var provide_mac$0;
  var $targ$3;
  var inject_mac$0;
  var $targ$4;
  var globals_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$1 = (function(context$0, info$0, form$0, ph$0$0) {
    var req$0;
    var stmts$0;
    var topfetch$0;
    var produce$0;
    var arg$0;
    var expr$0;
    var $$13833$0;
    var $$13834$0;
    var t0$0;
    var t1$0;
    t0$0 = ph$0$0;
    t1$0 = t0$0.length;
    if (((t1$0 === 2) && (t0$0[0] === "data"))) {
      expr$0 = t0$0[1];
      req$0 = ["variable", "require"];
      stmts$0 = [];
      topfetch$0 = (function topfetch(pkg$0, v$0) {
        stmts$0.push(["send", ["symbol", "="], ["data", v$0, ["send", req$0, ["data", pkg$0]]]]);
        return v$0;
      });
      produce$0 = (function produce(temp$0$0, fetch$0) {
        var t0$1;
        var t0$3;
        var t0$4;
        var m$0;
        var pkgv$0;
        var pkg$2;
        var subp$1;
        var pkg$1;
        var s$2;
        var name$0;
        var subp$0;
        var s$1;
        var s$0;
        var $$13878$0;
        var $$13879$0;
        var $$13880$0;
        var $$13881$0;
        var $$13882$0;
        var $$13883$0;
        var $$13884$0;
        var $$13885$0;
        var $$13886$0;
        var t0$2;
        var t1$1;
        var t2$0;
        var bridge$$13874$0;
        var t3$0;
        var t4$0;
        var t5$0;
        var t6$0;
        var t7$0;
        var expr$1;
        var ph$1$0;
        t0$1 = temp$0$0;
        expr$1 = t0$1;
        ph$1$0 = t0$1;
        t0$2 = ph$1$0;
        t1$1 = t0$2.length;
        if ((($$13880$0 = (t1$1 === 2)) && (t0$2[0] === "symbol"))) {
          s$0 = t0$2[1];
          return fetch$0(["value", s$0], expr$1);
        } else {
          if (($$13880$0 && ((t0$2[0] === "value") && ((t2$0 = t0$2[1]), (typeof(t2$0) === "string"))))) {
            s$1 = t2$0;
            return fetch$0(expr$1, ["symbol", info$0.gensym()]);
          } else {
            bridge$$13874$0 = ph$1$0;
            if ((((bridge$$13874$0 instanceof Array) && ((t0$3 = bridge$$13874$0.length), ((t0$3 >= 1) && ((bridge$$13874$0[0] === "multi") && ((subp$0 = Array.prototype.slice.call(bridge$$13874$0, 1)), true))))) || ((bridge$$13874$0 instanceof Array) && ((t0$4 = bridge$$13874$0.length), ((t0$4 >= 1) && ((bridge$$13874$0[0] === "data") && ((subp$0 = Array.prototype.slice.call(bridge$$13874$0, 1)), true))))))) {
              m$0 = null;
              $1: for (var $__0 = subp$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                  $__1; !($__1 = $__0.next()).done; ) {
                m$0 = $__1.value;
                {
                  var p$0;
                  p$0 = m$0;
                  produce$0(p$0, fetch$0);
                }
              }
              return null;
            } else {
              t0$2 = ph$1$0;
              t1$1 = t0$2.length;
              if ((($$13880$0 = (t1$1 === 3)) && (($$13881$0 = (t0$2[0] === "send")) && ((t2$0 = t0$2[1]), (($$13883$0 = (t2$0 instanceof Array)) && ((t3$0 = t2$0.length), (($$13885$0 = (t3$0 === 2)) && (($$13886$0 = (t2$0[0] === "symbol")) && ((t2$0[1] === "^") && ((t4$0 = t0$2[2]), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 3) && ((t4$0[0] === "data") && ((t6$0 = t4$0[1]), ((t6$0 instanceof Array) && ((t7$0 = t6$0.length), ((t7$0 === 1) && (t6$0[0] === "void"))))))))))))))))))) {
                name$0 = t4$0[2];
                return fetch$0(name$0, ["symbol", info$0.gensym()]);
              } else {
                if (($$13886$0 && ((t2$0[1] === "as") && ((t4$0 = t0$2[2]), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 3) && (t4$0[0] === "data")))))))) {
                  pkg$1 = t4$0[1];
                  s$2 = t4$0[2];
                  return produce$0(pkg$1, (function(the_pkg$0, temp$1$0) {
                    return fetch$0(the_pkg$0, s$2);
                  }));
                } else {
                  if (($$13886$0 && ((t2$0[1] === "->") && ((t4$0 = t0$2[2]), ((t4$0 instanceof Array) && ((t5$0 = t4$0.length), ((t5$0 === 3) && (t4$0[0] === "data")))))))) {
                    pkg$2 = t4$0[1];
                    subp$1 = t4$0[2];
                    pkgv$0 = produce$0(pkg$2, fetch$0);
                    return produce$0(subp$1, (function(pkg$3, v$1) {
                      stmts$0.push(["send", ["symbol", "="], ["data", v$1, ["send", pkgv$0, pkg$3]]]);
                      return v$1;
                    }));
                  } else {
                    return ___match_error(ph$1$0);
                  }
                }
              }
            }
          }
        }
      });
      produce$0(expr$0, topfetch$0);
      return ["splice"].concat(stmts$0);
    } else {
      if (((t1$0 === 1) && (t0$0[0] === "void"))) {
        return ["variable", "require"];
      } else {
        arg$0 = ph$0$0;
        return ["send", ["variable", "require"], arg$0];
      }
    }
  });
  t0$5 = getProjector(mac$0("require"))($targ$1);
  if (t0$5[0]) {
    require_mac$0 = t0$5[1];
  } else {
    ___match_error($targ$1);
  }
  $targ$2 = (function(context$1, temp$2$0, form$1, temp$3$0) {
    var t0$6;
    var t1$2;
    var t2$1;
    var t3$1;
    var t4$1;
    var m$1;
    var acc$0;
    var temp$4;
    var exp$0;
    var expr$2;
    t0$6 = temp$3$0;
    if (((t0$6 instanceof Array) && ((t1$2 = t0$6.length), ((t1$2 === 2) && ((t0$6[0] === "data") && ((t2$1 = getProjector(Body$0)(t0$6[1])), (t2$1[0] && ((t3$1 = t2$1[1]), (t4$1 = t3$1.length), (t4$1 >= 0))))))))) {
      expr$2 = Array.prototype.slice.call(t3$1, 0);
    } else {
      ___match_error(temp$3$0);
    }
    exp$0 = form$1.env.mark(["symbol", "exports"]);
    return ["sink", ["multi"].concat(((acc$0 = []), (temp$4 = null), (m$1 = null), (function() {
      $2: for (var $__0 = expr$2[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$1 = $__1.value;
        {
          var t0$8;
          var t0$9;
          var other$0;
          var s$4;
          var name$2;
          var s$3;
          var name$1;
          var $$14091$0;
          var t0$7;
          var t1$3;
          var t2$2;
          var t3$2;
          var t4$2;
          var t5$1;
          var bridge$$14089$0;
          t0$7 = m$1;
          s$3 = t0$7;
          if (((t0$7 instanceof Array) && ((t1$3 = t0$7.length), ((t1$3 === 2) && (t0$7[0] === "symbol"))))) {
            name$1 = t0$7[1];
            temp$4 = ["send", ["symbol", "="], ["data", ["send", exp$0, ["value", name$1]], s$3]];
            acc$0.push(temp$4);
          } else {
            if (((t0$7 instanceof Array) && ((t1$3 = t0$7.length), ((t1$3 === 3) && ((t0$7[0] === "send") && ((t2$2 = t0$7[1]), ((t2$2 instanceof Array) && ((t3$2 = t2$2.length), ((t3$2 === 2) && ((t2$2[0] === "symbol") && ((t2$2[1] === "as") && ((t4$2 = t0$7[2]), ((t4$2 instanceof Array) && ((t5$1 = t4$2.length), ((t5$1 === 3) && ((t4$2[0] === "data") && ((s$4 = t4$2[1]), (bridge$$14089$0 = t4$2[2]), (((bridge$$14089$0 instanceof Array) && ((t0$8 = bridge$$14089$0.length), ((t0$8 === 2) && ((bridge$$14089$0[0] === "symbol") && ((name$2 = bridge$$14089$0[1]), true))))) || ((bridge$$14089$0 instanceof Array) && ((t0$9 = bridge$$14089$0.length), ((t0$9 === 2) && ((bridge$$14089$0[0] === "value") && ((name$2 = bridge$$14089$0[1]), true))))))))))))))))))))))) {
              temp$4 = ["send", ["symbol", "="], ["data", ["send", exp$0, ["value", name$2]], s$4]];
              acc$0.push(temp$4);
            } else {
              other$0 = m$1;
              throw ErrorFactory(["syntax", "provide"]).create("Each clause of provide must be 'sym' or 'sym as name'");
              acc$0.push(temp$4);
            }
          }
        }
      }
    })(), acc$0))];
  });
  t0$10 = getProjector(mac$0("provide"))($targ$2);
  if (t0$10[0]) {
    provide_mac$0 = t0$10[1];
  } else {
    ___match_error($targ$2);
  }
  $targ$3 = (function(context$2, temp$5$0, form$2, temp$6$0) {
    var t0$11;
    var t1$4;
    var t2$3;
    var t3$3;
    var t4$3;
    var expr$3;
    t0$11 = temp$6$0;
    if (((t0$11 instanceof Array) && ((t1$4 = t0$11.length), ((t1$4 === 2) && ((t0$11[0] === "data") && ((t2$3 = getProjector(Body$0)(t0$11[1])), (t2$3[0] && ((t3$3 = t2$3[1]), (t4$3 = t3$3.length), (t4$3 >= 0))))))))) {
      expr$3 = Array.prototype.slice.call(t3$3, 0);
    } else {
      ___match_error(temp$6$0);
    }
    return ["restmacro", (function(stmts$1) {
      var exp$1;
      exp$1 = form$2.env.mark(["symbol", "exports"]);
      return [["multi", ["send", ["symbol", "globals"], ["data", ["symbol", "module"]]], ["send", ["symbol", "="], ["data", ["send", ["send", ["symbol", "module"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "exports"]]]], ["data"].concat(expr$3)], ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], exp$1], ["data", ["symbol", "="]]]], ["multi"].concat(stmts$1), exp$1]]]]];
    })];
  });
  t0$12 = getProjector(mac$0("inject"))($targ$3);
  if (t0$12[0]) {
    inject_mac$0 = t0$12[1];
  } else {
    ___match_error($targ$3);
  }
  $targ$4 = (function(context$3, temp$7$0, form$3, temp$8$0) {
    var t0$13;
    var t1$5;
    var t2$4;
    var t3$4;
    var t4$4;
    var m$2;
    var acc$1;
    var temp$9;
    var vars$0;
    t0$13 = temp$8$0;
    if (((t0$13 instanceof Array) && ((t1$5 = t0$13.length), ((t1$5 === 2) && ((t0$13[0] === "data") && ((t2$4 = getProjector(Body$0)(t0$13[1])), (t2$4[0] && ((t3$4 = t2$4[1]), (t4$4 = t3$4.length), (t4$4 >= 0))))))))) {
      vars$0 = Array.prototype.slice.call(t3$4, 0);
    } else {
      ___match_error(temp$8$0);
    }
    return ["splice"].concat(((acc$1 = []), (temp$9 = null), (m$2 = null), (function() {
      $3: for (var $__0 = vars$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$2 = $__1.value;
        {
          var variable$0;
          var s$5;
          var t0$14;
          var t1$6;
          t0$14 = m$2;
          variable$0 = t0$14;
          if (((t0$14 instanceof Array) && ((t1$6 = t0$14.length), ((t1$6 === 2) && (t0$14[0] === "symbol"))))) {
            s$5 = t0$14[1];
            temp$9 = ["declare_raw", variable$0, ["variable", s$5]];
            acc$1.push(temp$9);
          } else {
            ___match_error(m$2, "/home/olivier/git/earl-grey/src/macros/modularity.eg", 2067, 2141);
          }
        }
      }
    })(), acc$1));
  });
  t0$15 = getProjector(mac$0("globals"))($targ$4);
  if (t0$15[0]) {
    globals_mac$0 = t0$15[1];
  } else {
    ___match_error($targ$4);
  }
  return exports$0;
});
(module["exports"] = $targ$0);
[];
//# sourceURL=<compile-source>
