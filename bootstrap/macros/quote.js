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
    var $targ$13;
    var $targ$12;
    var $targ$11;
    var $targ$10;
    var t3$0;
    var t2$0;
    var $targ$17;
    var $targ$16;
    var $targ$15;
    var $targ$14;
    var $targ$21;
    var $targ$20;
    var $targ$19;
    var $targ$18;
    var m$0;
    var acc$0;
    var $targ$23;
    var temp$1;
    var m$1;
    var acc$1;
    var $targ$26;
    var temp$2;
    var m$2;
    var acc$2;
    var $targ$29;
    var temp$3;
    var name$1;
    var args$2;
    var ops$0;
    var args$1;
    var insert$2;
    var insert$1;
    var insert$0;
    var v$0;
    var s$1;
    var t0$1;
    var t1$0;
    var s$0;
    var $$14798$0;
    var $$14799$0;
    var $$14800$0;
    var $$14801$0;
    var $$14802$0;
    var $$14803$0;
    var $$14804$0;
    var $$14805$0;
    var $$14806$0;
    var t4$0;
    var t5$0;
    var t6$0;
    var t7$0;
    var expr$0;
    var ph$0$0;
    t0$0 = temp$0$0;
    expr$0 = t0$0;
    ph$0$0 = t0$0;
    t0$1 = ph$0$0;
    t1$0 = t0$1.length;
    if ((($$14800$0 = (t1$0 === 2)) && (t0$1[0] === "symbol"))) {
      s$0 = t0$1[1];
      return qqstruct$0("symbol", [["value", s$0]]);
    } else {
      if (($$14800$0 && (t0$1[0] === "char"))) {
        s$1 = t0$1[1];
        return qqstruct$0("char", [["value", s$1]]);
      } else {
        if (((t1$0 === 1) && (t0$1[0] === "void"))) {
          return qqstruct$0("void", []);
        } else {
          if (((t1$0 === 2) && (t0$1[0] === "value"))) {
            v$0 = t0$1[1];
            return qqstruct$0("value", [expr$0]);
          } else {
            if ((($$14800$0 = (t1$0 === 3)) && (($$14801$0 = (t0$1[0] === "send")) && ((t2$0 = t0$1[1]), (($$14803$0 = (t2$0 instanceof Array)) && ((t3$0 = t2$0.length), (($$14805$0 = (t3$0 === 2)) && (($$14806$0 = (t2$0[0] === "symbol")) && ((t2$0[1] === "^") && (($targ$10 = t0$1[2]), (t4$0 = $targ$10), ((t4$0 instanceof Array) && (($targ$11 = t4$0.length), (t5$0 = $targ$11), ((t5$0 === 3) && ((t4$0[0] === "data") && (($targ$12 = t4$0[1]), (t6$0 = $targ$12), ((t6$0 instanceof Array) && (($targ$13 = t6$0.length), (t7$0 = $targ$13), ((t7$0 === 1) && (t6$0[0] === "void"))))))))))))))))))) {
              insert$0 = t4$0[2];
              return insert$0;
            } else {
              if (($$14806$0 && ((t2$0[1] === "^=") && (($targ$14 = t0$1[2]), (t4$0 = $targ$14), ((t4$0 instanceof Array) && (($targ$15 = t4$0.length), (t5$0 = $targ$15), ((t5$0 === 3) && ((t4$0[0] === "data") && (($targ$16 = t4$0[1]), (t6$0 = $targ$16), ((t6$0 instanceof Array) && (($targ$17 = t6$0.length), (t7$0 = $targ$17), ((t7$0 === 1) && (t6$0[0] === "void"))))))))))))) {
                insert$1 = t4$0[2];
                return qqstruct$0("value", [insert$1]);
              } else {
                if (($$14806$0 && ((t2$0[1] === "^*") && (($targ$18 = t0$1[2]), (t4$0 = $targ$18), ((t4$0 instanceof Array) && (($targ$19 = t4$0.length), (t5$0 = $targ$19), ((t5$0 === 3) && ((t4$0[0] === "data") && (($targ$20 = t4$0[1]), (t6$0 = $targ$20), ((t6$0 instanceof Array) && (($targ$21 = t6$0.length), (t7$0 = $targ$21), ((t7$0 === 1) && (t6$0[0] === "void"))))))))))))) {
                  insert$2 = t4$0[2];
                  return ["send", ["symbol", "*"], ["data", ["void"], insert$2]];
                } else {
                  if (((t1$0 >= 2) && (t0$1[0] === "mismix"))) {
                    ops$0 = t0$1[1];
                    args$1 = Array.prototype.slice.call(t0$1, 2);
                    return qqstruct$0("mismix", [["data"].concat(((acc$0 = []), ($targ$23 = null), (temp$1 = $targ$23), (m$0 = null), (function() {
                      $0: for (var $__0 = ops$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__1; !($__1 = $__0.next()).done; ) {
                        m$0 = $__1.value;
                        {
                          var $targ$24;
                          var op$0;
                          op$0 = m$0;
                          $targ$24 = qq$0(op$0);
                          temp$1 = $targ$24;
                          acc$0.push(temp$1);
                        }
                      }
                    })(), acc$0))].concat(((acc$1 = []), ($targ$26 = null), (temp$2 = $targ$26), (m$1 = null), (function() {
                      $1: for (var $__0 = args$1[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__1; !($__1 = $__0.next()).done; ) {
                        m$1 = $__1.value;
                        {
                          var $targ$27;
                          var arg$0;
                          arg$0 = m$1;
                          $targ$27 = qq$0(arg$0);
                          temp$2 = $targ$27;
                          acc$1.push(temp$2);
                        }
                      }
                    })(), acc$1)));
                  } else {
                    if ((t1$0 >= 1)) {
                      name$1 = t0$1[0];
                      args$2 = Array.prototype.slice.call(t0$1, 1);
                      return qqstruct$0(name$1, ((acc$2 = []), ($targ$29 = null), (temp$3 = $targ$29), (m$2 = null), (function() {
                        $2: for (var $__0 = args$2[$traceurRuntime.toProperty(Symbol.iterator)](),
                            $__1; !($__1 = $__0.next()).done; ) {
                          m$2 = $__1.value;
                          {
                            var $targ$30;
                            var arg$1;
                            arg$1 = m$2;
                            $targ$30 = qq$0(arg$1);
                            temp$3 = $targ$30;
                            acc$2.push(temp$3);
                          }
                        }
                      })(), acc$2));
                    } else {
                      return ___match_error(ph$0$0);
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
  $targ$4 = (function(context$0, temp$4$0, form$0, temp$5$0) {
    var t3$1;
    var t2$1;
    var t1$1;
    var t0$2;
    var expr$1;
    t0$2 = temp$5$0;
    if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), ((t1$1 === 3) && ((t0$2[0] === "data") && ((t2$1 = t0$2[1]), ((t2$1 instanceof Array) && ((t3$1 = t2$1.length), ((t3$1 === 1) && (t2$1[0] === "void")))))))))) {
      expr$1 = t0$2[2];
    } else {
      ___match_error(temp$5$0);
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
[];
//# sourceURL=<compile-source>
