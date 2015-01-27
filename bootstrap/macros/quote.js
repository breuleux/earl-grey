"use strict";
require("earlgrey-runtime");
var $targ$4;
var $0$0;
var Source$0;
var $1$0;
var qq$0;
$0$0 = require("../location");
Source$0 = $0$0.Source;
$1$0 = require("./helpers");
qq$0 = $1$0.qq;
$targ$4 = (function(mac$0) {
  var t0$1;
  var t0$3;
  var $targ$6;
  var quote_mac$0;
  var $targ$7;
  var quote2_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$6 = (function(context$0, temp$0$0, form$0, temp$1$0) {
    var t3$0;
    var t2$0;
    var t1$0;
    var t0$0;
    var expr$0;
    t0$0 = temp$1$0;
    if (((t0$0 instanceof Array) && ((t1$0 = t0$0.length), ((t1$0 === 3) && ((t0$0[0] === "data") && ((t2$0 = t0$0[1]), ((t2$0 instanceof Array) && ((t3$0 = t2$0.length), ((t3$0 === 1) && (t2$0[0] === "void")))))))))) {
      expr$0 = t0$0[2];
    } else {
      ___match_error(temp$1$0);
    }
    return qq$0(expr$0);
  });
  t0$1 = getProjector(mac$0("'"))($targ$6);
  if (t0$1[0]) {
    quote_mac$0 = t0$1[1];
  } else {
    ___match_error($targ$6);
  }
  $targ$7 = (function(context$1, info$0, form$1, temp$2$0) {
    var t1$1;
    var t0$2;
    var expr$2;
    var expr$1;
    var s$0;
    t0$2 = temp$2$0;
    expr$1 = t0$2;
    if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), ((t1$1 === 2) && (t0$2[0] === "value"))))) {
      s$0 = t0$2[1];
    } else {
      ___match_error(temp$2$0);
    }
    expr$2 = info$0.go(Source$0(s$0, "<quasiquote>"), "source", "parse");
    return info$0.mark(qq$0(expr$2));
  });
  t0$3 = getProjector(mac$0("`"))($targ$7);
  if (t0$3[0]) {
    quote2_mac$0 = t0$3[1];
  } else {
    ___match_error($targ$7);
  }
  return exports$0;
});
(module["exports"] = $targ$4);
[];
//# sourceURL=<compile-source>
