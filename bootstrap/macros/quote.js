"use strict";
require("earlgrey-runtime");
var $targ$0;
$targ$0 = (function(mac$0) {
  var t0$3;
  var qqstruct$0;
  var qq$0;
  var $targ$4;
  var quote_mac$0;
  var exports$0;
  exports$0 = ({});
  qqstruct$0 = (function(name$0, args$0) {
    return ["data", ["value", name$0]].concat(args$0);
  });
  qq$0 = (function(temp$0$0) {
    var t0$0;
    var t0$1;
    var $targ$13;
    var $targ$12;
    var $targ$11;
    var $targ$10;
    var t2$0;
    var t1$0;
    var $targ$17;
    var $targ$16;
    var $targ$15;
    var $targ$14;
    var $targ$21;
    var $targ$20;
    var $targ$19;
    var $targ$18;
    var m$1;
    var acc$0;
    var m$2;
    var acc$1;
    var m$3;
    var acc$2;
    var name$1;
    var args$2;
    var ops$0;
    var args$1;
    var insert$2;
    var insert$1;
    var insert$0;
    var v$0;
    var s$1;
    var s$0;
    var $$13785$0;
    var $$13786$0;
    var $$13787$0;
    var $$13788$0;
    var $$13789$0;
    var $$13790$0;
    var $$13791$0;
    var $$13792$0;
    var $$13793$0;
    var t3$0;
    var t4$0;
    var t5$0;
    var t6$0;
    var m$0$0;
    var ph$0;
    var expr$0;
    t0$0 = temp$0$0;
    expr$0 = t0$0;
    ph$0 = t0$0;
    m$0$0 = ph$0;
    if ((($$13785$0 = (m$0$0 instanceof Array)) && ((t0$1 = m$0$0.length), (($$13787$0 = (t0$1 === 2)) && (m$0$0[0] === "symbol"))))) {
      s$0 = m$0$0[1];
      return qqstruct$0("symbol", [["value", s$0]]);
    } else {
      if (($$13787$0 && (m$0$0[0] === "char"))) {
        s$1 = m$0$0[1];
        return qqstruct$0("char", [["value", s$1]]);
      } else {
        if (($$13785$0 && ((t0$1 === 1) && (m$0$0[0] === "void")))) {
          return qqstruct$0("void", []);
        } else {
          if (($$13785$0 && ((t0$1 === 2) && (m$0$0[0] === "value")))) {
            v$0 = m$0$0[1];
            return qqstruct$0("value", [expr$0]);
          } else {
            if (($$13785$0 && (($$13787$0 = (t0$1 === 3)) && (($$13788$0 = (m$0$0[0] === "send")) && ((t1$0 = m$0$0[1]), (($$13790$0 = (t1$0 instanceof Array)) && ((t2$0 = t1$0.length), (($$13792$0 = (t2$0 === 2)) && (($$13793$0 = (t1$0[0] === "symbol")) && ((t1$0[1] === "^") && (($targ$10 = m$0$0[2]), (t3$0 = $targ$10), ((t3$0 instanceof Array) && (($targ$11 = t3$0.length), (t4$0 = $targ$11), ((t4$0 === 3) && ((t3$0[0] === "data") && (($targ$12 = t3$0[1]), (t5$0 = $targ$12), ((t5$0 instanceof Array) && (($targ$13 = t5$0.length), (t6$0 = $targ$13), ((t6$0 === 1) && (t5$0[0] === "void")))))))))))))))))))) {
              insert$0 = t3$0[2];
              return insert$0;
            } else {
              if (($$13793$0 && ((t1$0[1] === "^=") && (($targ$14 = m$0$0[2]), (t3$0 = $targ$14), ((t3$0 instanceof Array) && (($targ$15 = t3$0.length), (t4$0 = $targ$15), ((t4$0 === 3) && ((t3$0[0] === "data") && (($targ$16 = t3$0[1]), (t5$0 = $targ$16), ((t5$0 instanceof Array) && (($targ$17 = t5$0.length), (t6$0 = $targ$17), ((t6$0 === 1) && (t5$0[0] === "void"))))))))))))) {
                insert$1 = t3$0[2];
                return qqstruct$0("value", [insert$1]);
              } else {
                if (($$13793$0 && ((t1$0[1] === "^*") && (($targ$18 = m$0$0[2]), (t3$0 = $targ$18), ((t3$0 instanceof Array) && (($targ$19 = t3$0.length), (t4$0 = $targ$19), ((t4$0 === 3) && ((t3$0[0] === "data") && (($targ$20 = t3$0[1]), (t5$0 = $targ$20), ((t5$0 instanceof Array) && (($targ$21 = t5$0.length), (t6$0 = $targ$21), ((t6$0 === 1) && (t5$0[0] === "void"))))))))))))) {
                  insert$2 = t3$0[2];
                  return ["send", ["symbol", "*"], ["data", ["void"], insert$2]];
                } else {
                  if (($$13785$0 && ((t0$1 >= 2) && (m$0$0[0] === "mismix")))) {
                    ops$0 = m$0$0[1];
                    args$1 = Array.prototype.slice.call(m$0$0, 2);
                    return qqstruct$0("mismix", [["data"].concat(((acc$0 = []), (m$1 = null), (function() {
                      $0: for (var $__0 = ops$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__1; !($__1 = $__0.next()).done; ) {
                        m$1 = $__1.value;
                        {
                          var op$0;
                          op$0 = m$1;
                          acc$0.push(qq$0(op$0));
                        }
                      }
                    })(), acc$0))].concat(((acc$1 = []), (m$2 = null), (function() {
                      $1: for (var $__0 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__1; !($__1 = $__0.next()).done; ) {
                        m$2 = $__1.value;
                        {
                          var arg$0;
                          arg$0 = m$2;
                          acc$1.push(qq$0(arg$0));
                        }
                      }
                    })(), acc$1)));
                  } else {
                    if (($$13785$0 && (t0$1 >= 1))) {
                      name$1 = m$0$0[0];
                      args$2 = Array.prototype.slice.call(m$0$0, 1);
                      return qqstruct$0(name$1, ((acc$2 = []), (m$3 = null), (function() {
                        $2: for (var $__0 = args$2[$traceurRuntime.toProperty(Symbol.iterator)](),
                            $__1; !($__1 = $__0.next()).done; ) {
                          m$3 = $__1.value;
                          {
                            var arg$1;
                            arg$1 = m$3;
                            acc$2.push(qq$0(arg$1));
                          }
                        }
                      })(), acc$2));
                    } else {
                      return ___match_error(m$0$0);
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  });
  $targ$4 = (function(context$0, temp$1$0, form$0, temp$2$0) {
    var t3$1;
    var t2$1;
    var t1$1;
    var t0$2;
    var expr$1;
    temp$1$0;
    t0$2 = temp$2$0;
    if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), ((t1$1 === 3) && ((t0$2[0] === "data") && ((t2$1 = t0$2[1]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 1) && (t2$1[0] === "void")))))))))) {
      expr$1 = t0$2[2];
    } else {
      ___match_error(temp$2$0);
    }
    return qq$0(expr$1);
  });
  t0$3 = getProjector(mac$0("'"))($targ$4);
  if (t0$3[0]) {
    quote_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$4);
  }
  return exports$0;
});
(module["exports"] = $targ$0);
//# sourceURL=<compile-source>
