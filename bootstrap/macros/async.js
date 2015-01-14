"use strict";
require("earlgrey-runtime");
var $targ$3;
var $0$0;
var expr_mac$0;
var expr_mac2$0;
$0$0 = require("./helpers");
expr_mac$0 = $0$0.expr_mac;
expr_mac2$0 = $0$0["expr_mac2"];
$targ$3 = (function(mac$0) {
  var t1$1;
  var t0$1;
  var t1$3;
  var t0$3;
  var t1$5;
  var t0$5;
  var t1$7;
  var t0$7;
  var $targ$5;
  var yield_mac$0;
  var $targ$6;
  var await_mac$0;
  var $targ$7;
  var gen_mac$0;
  var $targ$8;
  var async_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$5 = (function(temp$0$0, form$0, temp$1$0) {
    var t2$0;
    var t1$0;
    var t0$0;
    var arg$1;
    var arg$0;
    var m$0$0;
    var ph$0;
    temp$0$0;
    ph$0 = temp$1$0;
    m$0$0 = ph$0;
    if (((m$0$0 instanceof Array) && ((t0$0 = m$0$0.length), ((t0$0 === 3) && ((m$0$0[0] === "send") && ((t1$0 = m$0$0[1]), ((t1$0 instanceof Array) && ((t2$0 = t1$0.length), ((t2$0 === 2) && ((t1$0[0] === "symbol") && (t1$0[1] === "all"))))))))))) {
      arg$0 = m$0$0[2];
      return ["js_yield", arg$0, ["value", true]];
    } else {
      arg$1 = m$0$0;
      return ["js_yield", arg$1, ["value", false]];
    }
  });
  t0$1 = getProjector(expr_mac$0)($targ$5);
  if ((t0$1[0] && ((t1$1 = getProjector(mac$0("yield"))(t0$1[1])), t1$1[0]))) {
    yield_mac$0 = t1$1[1];
  } else {
    ___match_error($targ$5);
  }
  $targ$6 = (function(temp$2$0, form$1, temp$3$0) {
    var t2$1;
    var t1$2;
    var t0$2;
    var arg$4;
    var arg$3;
    var arg$2;
    var $$5644$0;
    var $$5645$0;
    var $$5646$0;
    var $$5647$0;
    var $$5648$0;
    var $$5649$0;
    var $$5650$0;
    var $$5651$0;
    var $$5652$0;
    var m$1$0;
    var ph$1;
    temp$2$0;
    ph$1 = temp$3$0;
    m$1$0 = ph$1;
    if ((($$5644$0 = (m$1$0 instanceof Array)) && ((t0$2 = m$1$0.length), (($$5646$0 = (t0$2 === 3)) && (($$5647$0 = (m$1$0[0] === "send")) && ((t1$2 = m$1$0[1]), (($$5649$0 = (t1$2 instanceof Array)) && ((t2$1 = t1$2.length), (($$5651$0 = (t2$1 === 2)) && (($$5652$0 = (t1$2[0] === "symbol")) && (t1$2[1] === "all"))))))))))) {
      arg$2 = m$1$0[2];
      return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "all"]]]], ["data", arg$2]], ["value", false]];
    } else {
      if (($$5652$0 && (t1$2[1] === "any"))) {
        arg$3 = m$1$0[2];
        return ["js_yield", ["send", ["send", ["symbol", "Promise"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "race"]]]], ["data", arg$3]], ["value", false]];
      } else {
        arg$4 = m$1$0;
        return ["js_yield", arg$4, ["value", false]];
      }
    }
  });
  t0$3 = getProjector(expr_mac$0)($targ$6);
  if ((t0$3[0] && ((t1$3 = getProjector(mac$0("await"))(t0$3[1])), t1$3[0]))) {
    await_mac$0 = t1$3[1];
  } else {
    ___match_error($targ$6);
  }
  $targ$7 = (function(temp$4$0) {
    var $targ$28;
    var $targ$27;
    var t4$0;
    var t3$0;
    var t2$2;
    var t1$4;
    var t0$4;
    var $targ$30;
    var $targ$29;
    var arg$6;
    var pre$0;
    var body$1;
    var post$0;
    var arg$5;
    var body$0;
    var $$5708$0;
    var $$5709$0;
    var $$5710$0;
    var $$5711$0;
    var $$5712$0;
    var $$5713$0;
    var $$5714$0;
    var $$5715$0;
    var $$5716$0;
    var $$5717$0;
    var $$5718$0;
    var $$5719$0;
    var $$5720$0;
    var $$5721$0;
    var t5$0;
    var t6$0;
    var m$2$0;
    var ph$2;
    ph$2 = temp$4$0;
    m$2$0 = ph$2;
    if ((($$5708$0 = (m$2$0 instanceof Array)) && ((t0$4 = m$2$0.length), (($$5710$0 = (t0$4 === 2)) && (($$5711$0 = (m$2$0[0] === "data")) && ((t1$4 = m$2$0[1]), (($$5713$0 = (t1$4 instanceof Array)) && ((t2$2 = t1$4.length), (($$5715$0 = (t2$2 === 3)) && (($$5716$0 = (t1$4[0] === "send")) && ((t3$0 = t1$4[1]), (($$5718$0 = (t3$0 instanceof Array)) && ((t4$0 = t3$0.length), (($$5720$0 = (t4$0 === 2)) && (($$5721$0 = (t3$0[0] === "symbol")) && ((t3$0[1] === "->") && (($targ$27 = t1$4[2]), (t5$0 = $targ$27), ((t5$0 instanceof Array) && (($targ$28 = t5$0.length), (t6$0 = $targ$28), ((t6$0 === 3) && (t5$0[0] === "data"))))))))))))))))))))) {
      arg$5 = t5$0[1];
      body$0 = t5$0[2];
      return ["send", ["symbol", "*->"], ["data", arg$5, body$0]];
    } else {
      if (($$5721$0 && ((t3$0[1] === "_lambda") && (($targ$29 = t1$4[2]), (t5$0 = $targ$29), ((t5$0 instanceof Array) && (($targ$30 = t5$0.length), (t6$0 = $targ$30), ((t6$0 === 6) && (t5$0[0] === "data")))))))) {
        arg$6 = t5$0[1];
        pre$0 = t5$0[2];
        body$1 = t5$0[3];
        post$0 = t5$0[4];
        t5$0[5];
        return ["send", ["symbol", "_lambda"], ["data", arg$6, pre$0, body$1, post$0, ["value", true]]];
      } else {
        return ___match_error(m$2$0);
      }
    }
  });
  t0$5 = getProjector(expr_mac2$0)($targ$7);
  if ((t0$5[0] && ((t1$5 = getProjector(mac$0("gen"))(t0$5[1])), t1$5[0]))) {
    gen_mac$0 = t1$5[1];
  } else {
    ___match_error($targ$7);
  }
  $targ$8 = (function(temp$5$0) {
    var $targ$40;
    var $targ$39;
    var t4$1;
    var t3$1;
    var t2$3;
    var t1$6;
    var t0$6;
    var $targ$42;
    var $targ$41;
    var arg$8;
    var pre$1;
    var body$3;
    var post$1;
    var arg$7;
    var body$2;
    var $$5804$0;
    var $$5805$0;
    var $$5806$0;
    var $$5807$0;
    var $$5808$0;
    var $$5809$0;
    var $$5810$0;
    var $$5811$0;
    var $$5812$0;
    var $$5813$0;
    var $$5814$0;
    var $$5815$0;
    var $$5816$0;
    var $$5817$0;
    var t5$1;
    var t6$1;
    var m$3$0;
    var ph$3;
    ph$3 = temp$5$0;
    m$3$0 = ph$3;
    if ((($$5804$0 = (m$3$0 instanceof Array)) && ((t0$6 = m$3$0.length), (($$5806$0 = (t0$6 === 2)) && (($$5807$0 = (m$3$0[0] === "data")) && ((t1$6 = m$3$0[1]), (($$5809$0 = (t1$6 instanceof Array)) && ((t2$3 = t1$6.length), (($$5811$0 = (t2$3 === 3)) && (($$5812$0 = (t1$6[0] === "send")) && ((t3$1 = t1$6[1]), (($$5814$0 = (t3$1 instanceof Array)) && ((t4$1 = t3$1.length), (($$5816$0 = (t4$1 === 2)) && (($$5817$0 = (t3$1[0] === "symbol")) && ((t3$1[1] === "->") && (($targ$39 = t1$6[2]), (t5$1 = $targ$39), ((t5$1 instanceof Array) && (($targ$40 = t5$1.length), (t6$1 = $targ$40), ((t6$1 === 3) && (t5$1[0] === "data"))))))))))))))))))))) {
      arg$7 = t5$1[1];
      body$2 = t5$1[2];
      return ["send", ["symbol", "->"], ["data", arg$7, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$2]]]]]];
    } else {
      if (($$5817$0 && ((t3$1[1] === "_lambda") && (($targ$41 = t1$6[2]), (t5$1 = $targ$41), ((t5$1 instanceof Array) && (($targ$42 = t5$1.length), (t6$1 = $targ$42), ((t6$1 === 6) && (t5$1[0] === "data")))))))) {
        arg$8 = t5$1[1];
        pre$1 = t5$1[2];
        body$3 = t5$1[3];
        post$1 = t5$1[4];
        t5$1[5];
        return ["send", ["symbol", "_lambda"], ["data", arg$8, pre$1, ["send", ["symbol", "spawn"], ["data", ["send", ["symbol", "*->"], ["data", ["data"], body$3]]]], post$1, ["value", false]]];
      } else {
        return ___match_error(m$3$0);
      }
    }
  });
  t0$7 = getProjector(expr_mac2$0)($targ$8);
  if ((t0$7[0] && ((t1$7 = getProjector(mac$0("async"))(t0$7[1])), t1$7[0]))) {
    async_mac$0 = t1$7[1];
  } else {
    ___match_error($targ$8);
  }
  return exports$0;
});
(module["exports"] = $targ$3);
//# sourceURL=<compile-source>
