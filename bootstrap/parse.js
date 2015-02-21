
"use strict";require("earlgrey-runtime/5");var accum$0 = undefined;var accum$1 = undefined;var accum$2 = undefined;var accum$3 = undefined;var accum$4 = undefined;var accum$5 = undefined;var accum$6 = undefined;var accum$7 = undefined;var accum$8 = undefined;var accum$9 = undefined;var accum$10 = undefined;var accum$11 = undefined;var accum$12 = undefined;var accum$13 = undefined;var accum$14 = undefined;var accum$15 = undefined;var accum$16 = undefined;var accum$17 = undefined;var eg_groups$0 = undefined;var eg_prio$0 = undefined;var $targ$16 = undefined;var $targ$17 = undefined;var $targ$18 = undefined;var $targ$19 = undefined;var $targ$20 = undefined;var $targ$21 = undefined;var $targ$22 = undefined;var $targ$23 = undefined;var $targ$24 = undefined;var $targ$25 = undefined;var $0$0 = undefined;var __lt____lt____colon__$0 = undefined;var __plus____plus____colon__$0 = undefined;var $1$0 = undefined;var Body$0 = undefined;var transform$0 = undefined;var OperatorGroups$0 = undefined;var parse_op_description$0 = undefined;var SimplePriority$0 = undefined;var MAX$0 = undefined;var eg_order$0 = undefined;var DONE$0 = undefined;var NONE$0 = undefined;var LEFT$0 = undefined;var RIGHT$0 = undefined;var BOTH$0 = undefined;var oparse$0 = undefined;var finalize$0 = undefined;var parse$0 = undefined;$0$0 = require("./location");__lt____lt____colon__$0 = $0$0["<<:"];__plus____plus____colon__$0 = $0$0["++:"];$1$0 = require("./util");Body$0 = $1$0.Body;transform$0 = function transform(expr$0, cb$0) {
  var rval$0 = undefined;var tr$0 = undefined;var result$0 = undefined;tr$0 = function tr(x$0) {
    return transform$0(x$0, cb$0);
  };rval$0 = false;try {
    rval$0 = cb$0.call(tr$0, expr$0);rval$0;
  } catch (excv$0) {
    var name$0 = undefined;var args$0 = undefined;var v$0 = undefined;var s$0 = undefined;var $$16682$0 = undefined;var $$16683$0 = undefined;var $$16684$0 = undefined;var t0$0 = undefined;var m$0$0 = undefined;var e$0 = undefined;e$0 = excv$0;m$0$0 = expr$0;if (($$16682$0 = Array.isArray(m$0$0)) && (t0$0 = m$0$0.length, t0$0 === 1 && m$0$0[0] === "void")) {
      rval$0 = ["void"];
    } else {
      if ($$16682$0 && (($$16684$0 = t0$0 === 2) && m$0$0[0] === "symbol")) {
        s$0 = m$0$0[1];rval$0 = expr$0;
      } else {
        if ($$16684$0 && m$0$0[0] === "value") {
          v$0 = m$0$0[1];rval$0 = expr$0;
        } else {
          if ($$16682$0 && t0$0 >= 1) {
            name$0 = m$0$0[0];args$0 = Array.prototype.slice.call(m$0$0, 1);rval$0 = [name$0].concat(args$0.map(tr$0));
          } else {
            rval$0 = ___match_error(m$0$0);
          }
        }
      }
    }rval$0;
  }result$0 = rval$0;return __lt____lt____colon__$0(result$0, expr$0);
};OperatorGroups$0 = function OperatorGroups(groups$0) {
  var m$1 = undefined;var acc$0 = undefined;var temp$0 = undefined;var m$2 = undefined;var acc$1 = undefined;var temp$1 = undefined;var m$4 = undefined;var acc$3 = undefined;var temp$3 = undefined;var itg$0 = undefined;var $targ$0 = undefined;var $targ$1 = undefined;var $targ$2 = undefined;var $targ$3 = undefined;var $it$0 = undefined;if (!getChecker(OperatorGroups$0)(this)) {
    $it$0 = Object.create(OperatorGroups$0.prototype);
  } else {
    $it$0 = this;
  }itg$0 = items(groups$0);acc$0 = [];temp$0 = null;m$1 = null;$3: for (var _iterator = itg$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
    m$1 = _step.value;
    var name$1 = undefined;var t0$1 = undefined;var t1$0 = undefined;t0$1 = m$1;if (Array.isArray(t0$1) && (t1$0 = t0$1.length, t1$0 === 2)) {
      name$1 = t0$1[0];t0$1[1];temp$0 = name$1;acc$0.push(temp$0);
    } else {
      ___match_error(m$1);
    }
  }$targ$0 = acc$0;$it$0.gnames = $targ$0;[];acc$1 = [];temp$1 = null;m$2 = null;$4: for (var _iterator2 = itg$0[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
    (function () {
      m$2 = _step2.value;
      var m$3 = undefined;var acc$2 = undefined;var temp$2 = undefined;var name$2 = undefined;var descrs$0 = undefined;var t0$2 = undefined;var t1$1 = undefined;t0$2 = m$2;if (Array.isArray(t0$2) && (t1$1 = t0$2.length, t1$1 === 2)) {
        name$2 = t0$2[0];descrs$0 = t0$2[1];temp$1 = ___build_array((acc$2 = [], temp$2 = null, m$3 = null, (function () {
          $5: for (var _iterator3 = descrs$0[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
            m$3 = _step3.value;
            var descr$0 = undefined;descr$0 = m$3;temp$2 = parse_op_description$0(descr$0);acc$2.push(temp$2);
          }
        })(), acc$2));acc$1.push(temp$1);
      } else {
        ___match_error(m$2);
      }
    })();
  }$targ$1 = acc$1;$it$0.groups = $targ$1;[];$targ$2 = [];$it$0.fns = $targ$2;[];$targ$3 = { IFX: { wide: {}, short: {} }, PFX: { wide: {}, short: {} }, SFX: { wide: {}, short: {} } };$it$0.to_gid = $targ$3;[];acc$3 = [];temp$3 = null;m$4 = null;$2: for (var _iterator4 = enumerate($it$0.groups)[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
    m$4 = _step4.value;
    var m$5 = undefined;var acc$4 = undefined;var temp$4 = undefined;var i$0 = undefined;var group$0 = undefined;var t0$3 = undefined;var t1$2 = undefined;t0$3 = m$4;if (Array.isArray(t0$3) && (t1$2 = t0$3.length, t1$2 === 2)) {
      i$0 = t0$3[0];group$0 = t0$3[1];acc$4 = [];temp$4 = null;m$5 = null;$6: for (var _iterator5 = group$0[Symbol.iterator](), _step5; !(_step5 = _iterator5.next()).done;) {
        m$5 = _step5.value;
        var $targ$4 = undefined;var f$0 = undefined;var fixity$0 = undefined;var width$0 = undefined;var name$3 = undefined;var t0$4 = undefined;var t1$3 = undefined;t0$4 = m$5;if (Array.isArray(t0$4) && (t1$3 = t0$4.length, t1$3 === 3)) {
          fixity$0 = t0$4[0];width$0 = t0$4[1];name$3 = t0$4[2];$targ$4 = i$0;send(send($it$0.to_gid, fixity$0), width$0)[name$3] = $targ$4;temp$4 = [];acc$4.push(temp$4);
        } else {
          f$0 = m$5;temp$4 = $it$0.fns.push([f$0, i$0]);acc$4.push(temp$4);
        }
      }temp$3 = acc$4;acc$3.push(temp$3);
    } else {
      ___match_error(m$4);
    }
  }return $it$0;
};OperatorGroups$0.prototype.get_name = function get_name(o$0) {
  var $it$1 = undefined;var self$0 = undefined;$it$1 = this;self$0 = this;return send($it$1.gnames, $it$1.get(o$0));
};OperatorGroups$0.prototype.get = function get(temp$5$0) {
  var t0$5 = undefined;var t1$4 = undefined;var m$6 = undefined;var attempt$0 = undefined;var o$1 = undefined;var fixity$1 = undefined;var width$1 = undefined;var name$4 = undefined;var $it$2 = undefined;var self$1 = undefined;$it$2 = this;self$1 = this;t0$5 = temp$5$0;o$1 = t0$5;if (Array.isArray(t0$5) && (t1$4 = t0$5.length, t1$4 === 3)) {
    fixity$1 = t0$5[0];width$1 = t0$5[1];name$4 = t0$5[2];
  } else {
    ___match_error(temp$5$0);
  }attempt$0 = send(send(send($it$2.to_gid, fixity$1), width$1), name$4);if (attempt$0 === void 0) {
    m$6 = null;$7: for (var _iterator6 = $it$2.fns[Symbol.iterator](), _step6; !(_step6 = _iterator6.next()).done;) {
      m$6 = _step6.value;
      var f$1 = undefined;var i$1 = undefined;var t0$6 = undefined;var t1$5 = undefined;t0$6 = m$6;if (Array.isArray(t0$6) && (t1$5 = t0$6.length, t1$5 === 2)) {
        f$1 = t0$6[0];i$1 = t0$6[1];if (f$1(o$1)) {
          return i$1;
        }
      } else {
        ___match_error(m$6);
      }
    }throw ErrorFactory(["syntax", "unknown_operator"]).create("Unknown operator: " + [true, String(o$1)][1], { operator: o$1 });
  } else {
    return attempt$0;
  }
};__amp____colon__(OperatorGroups$0, __amp____colon__((accum$0 = {}, accum$0["::name"] = "OperatorGroups", accum$0), (accum$1 = {}, accum$1["::egclass"] = true, accum$1)));parse_op_description$0 = function parse_op_description(ph$0$0) {
  var otherwise$0 = undefined;var $$17048$0 = undefined;var m$7$0 = undefined;var t0$8 = undefined;var t1$7 = undefined;var $targ$5 = undefined;var fixity$2 = undefined;var short$1 = undefined;var other$0 = undefined;var x$1 = undefined;var w1$0 = undefined;var op$0 = undefined;var w2$0 = undefined;var y$0 = undefined;var f$2 = undefined;var rx$0 = undefined;var t0$7 = undefined;var t1$6 = undefined;var t2$0 = undefined;rx$0 = RegExp("(?:^((?:X?))((?:[ _]?))((?:[^ _Y]*))((?:[ _]?))((?:Y?))$)", "");t0$7 = ph$0$0;if (typeof t0$7 === "function") {
    f$2 = t0$7;return f$2;
  } else {
    t0$7 = getProjector(rx$0)(ph$0$0);if (t0$7[0] && (t1$6 = t0$7[1], t2$0 = t1$6.length, t2$0 === 6)) {
      t1$6[0];x$1 = t1$6[1];w1$0 = t1$6[2];op$0 = t1$6[3];w2$0 = t1$6[4];y$0 = t1$6[5];m$7$0 = null;if (x$1 === "") {
        $targ$5 = ["PFX", w2$0 === ""];
      } else {
        if (y$0 === "") {
          $targ$5 = ["SFX", w1$0 === ""];
        } else {
          otherwise$0 = m$7$0;$targ$5 = ["IFX", w1$0 === "" || w2$0 === ""];
        }
      }t0$8 = $targ$5;if (Array.isArray(t0$8) && (t1$7 = t0$8.length, t1$7 === 2)) {
        fixity$2 = t0$8[0];short$1 = t0$8[1];
      } else {
        ___match_error($targ$5);
      }[fixity$2, short$1];if (w1$0 === "_" || w2$0 === "_") {
        return [[fixity$2, "short", op$0], [fixity$2, "wide", op$0]];
      } else {
        return [[fixity$2, short$1 ? "short" : "wide", op$0]];
      }
    } else {
      other$0 = ph$0$0;throw ErrorFactory(["invalid_op_description"]).create("Invalid operator description: " + other$0);
    }
  }
};SimplePriority$0 = function SimplePriority(groups$1, priorities$0) {
  var m$8 = undefined;var acc$5 = undefined;var temp$6 = undefined;var $targ$6 = undefined;var _i$0 = undefined;var tracks$0 = undefined;var $targ$7 = undefined;var $it$3 = undefined;if (!getChecker(SimplePriority$0)(this)) {
    $it$3 = Object.create(SimplePriority$0.prototype);
  } else {
    $it$3 = this;
  }$targ$6 = groups$1;$it$3.groups = $targ$6;[];_i$0 = 0;tracks$0 = {};acc$5 = [];temp$6 = null;m$8 = null;$8: for (var _iterator7 = groups$1.gnames[Symbol.iterator](), _step7; !(_step7 = _iterator7.next()).done;) {
    m$8 = _step7.value;
    var t$0 = undefined;var t$1 = undefined;var t0$9 = undefined;var t1$8 = undefined;var t2$1 = undefined;var t3$0 = undefined;var t4$0 = undefined;var t5$0 = undefined;var t6$0 = undefined;var t7$0 = undefined;var m$9 = undefined;var acc$6 = undefined;var temp$7 = undefined;var t0$10 = undefined;var t1$9 = undefined;var $targ$8 = undefined;var ltracks$0 = undefined;var lp$0 = undefined;var rtracks$0 = undefined;var rp$0 = undefined;var $targ$9 = undefined;var lt$0 = undefined;var rt$0 = undefined;var name$5 = undefined;name$5 = m$8;$targ$8 = send(priorities$0, name$5);t0$9 = $targ$8;if (Array.isArray(t0$9) && (t1$8 = t0$9.length, t1$8 === 2 && (t2$1 = t0$9[0], Array.isArray(t2$1) && (t3$0 = t2$1.length, t3$0 === 2 && (t4$0 = [true, (t$0 = t2$1[0], Array.isArray(t$0) ? t$0 : [t$0])], t4$0[0] && (ltracks$0 = t4$0[1], lp$0 = t2$1[1], t5$0 = t0$9[1], Array.isArray(t5$0) && (t6$0 = t5$0.length, t6$0 === 2 && (t7$0 = [true, (t$1 = t5$0[0], Array.isArray(t$1) ? t$1 : [t$1])], t7$0[0])))))))) {
      rtracks$0 = t7$0[1];rp$0 = t5$0[1];
    } else {
      ___match_error($targ$8);
    }[ltracks$0, lp$0, rtracks$0, rp$0];acc$6 = [];temp$7 = null;m$9 = null;$9: for (var _iterator8 = [ltracks$0, rtracks$0][Symbol.iterator](), _step8; !(_step8 = _iterator8.next()).done;) {
      m$9 = _step8.value;
      var m$10 = undefined;var rval$1 = undefined;var tr$1 = undefined;tr$1 = m$9;rval$1 = 0;m$10 = null;$10: for (var _iterator9 = tr$1[Symbol.iterator](), _step9; !(_step9 = _iterator9.next()).done;) {
        m$10 = _step9.value;
        var $targ$10 = undefined;var t$3 = undefined;var t$2 = undefined;if (m$10 === "all") {
          rval$1 = Math.pow(2, 31) - 1;rval$1;
        } else {
          t$2 = m$10;if (!send(tracks$0, t$2)) {
            rval$1 = rval$1 | Math.pow(2, _i$0);$targ$10 = _i$0++;tracks$0[t$2] = $targ$10;[];
          } else {
            t$3 = m$10;rval$1 = rval$1 | Math.pow(2, send(tracks$0, t$3));rval$1;
          }
        }
      }temp$7 = rval$1;acc$6.push(temp$7);
    }$targ$9 = acc$6;t0$10 = $targ$9;if (Array.isArray(t0$10) && (t1$9 = t0$10.length, t1$9 === 2)) {
      lt$0 = t0$10[0];rt$0 = t0$10[1];
    } else {
      ___match_error($targ$9);
    }[lt$0, rt$0];temp$6 = [[lt$0, lp$0], [rt$0, rp$0]];acc$5.push(temp$6);
  }$targ$7 = acc$5;$it$3.prio = $targ$7;[];return $it$3;
};SimplePriority$0.prototype.compare = function compare(op1$0, op2$0) {
  var t0$11 = undefined;var t1$10 = undefined;var t2$2 = undefined;var t3$1 = undefined;var t0$12 = undefined;var t1$11 = undefined;var t2$3 = undefined;var t3$2 = undefined;var $$17291$0 = undefined;var m$11$0 = undefined;var i1$0 = undefined;var i2$0 = undefined;var $targ$11 = undefined;var code1$0 = undefined;var ord1$0 = undefined;var $targ$12 = undefined;var code2$0 = undefined;var ord2$0 = undefined;var $it$4 = undefined;var self$2 = undefined;$it$4 = this;self$2 = this;i1$0 = $it$4.groups.get(op1$0);i2$0 = $it$4.groups.get(op2$0);$targ$11 = send($it$4.prio, i1$0);t0$11 = $targ$11;if (Array.isArray(t0$11) && (t1$10 = t0$11.length, t1$10 === 2 && (t0$11[0], t2$2 = t0$11[1], Array.isArray(t2$2) && (t3$1 = t2$2.length, t3$1 === 2)))) {
    code1$0 = t2$2[0];ord1$0 = t2$2[1];
  } else {
    ___match_error($targ$11);
  }[code1$0, ord1$0];$targ$12 = send($it$4.prio, i2$0);t0$12 = $targ$12;if (Array.isArray(t0$12) && (t1$11 = t0$12.length, t1$11 === 2 && (t2$3 = t0$12[0], Array.isArray(t2$3) && (t3$2 = t2$3.length, t3$2 === 2)))) {
    code2$0 = t2$3[0];ord2$0 = t2$3[1];t0$12[1];
  } else {
    ___match_error($targ$12);
  }[code2$0, ord2$0];m$11$0 = null;if ((code1$0 & code2$0) === 0) {
    return NONE$0;
  } else {
    if (ord1$0 > ord2$0) {
      return LEFT$0;
    } else {
      if (ord1$0 < ord2$0) {
        return RIGHT$0;
      } else {
        if (ord1$0 === ord2$0) {
          return BOTH$0;
        } else {
          return ___match_error(m$11$0);
        }
      }
    }
  }
};__amp____colon__(SimplePriority$0, __amp____colon__((accum$2 = {}, accum$2["::name"] = "SimplePriority", accum$2), (accum$3 = {}, accum$3["::egclass"] = true, accum$3)));MAX$0 = 1 / 0;eg_groups$0 = OperatorGroups$0(__amp____colon__({ sh_ifx: [function (ph$1$0) {
    var t0$13 = undefined;var t1$12 = undefined;t0$13 = ph$1$0;t1$12 = t0$13.length;if (t1$12 === 3 && (t0$13[0] === "IFX" && t0$13[1] === "short")) {
      t0$13[2];return true;
    } else {
      return false;
    }
  }], sh_pfx: [function (ph$2$0) {
    var t0$14 = undefined;var t1$13 = undefined;t0$14 = ph$2$0;t1$13 = t0$14.length;if (t1$13 === 3 && (t0$14[0] === "PFX" && t0$14[1] === "short")) {
      t0$14[2];return true;
    } else {
      return false;
    }
  }], sh_sfx: [function (ph$3$0) {
    var t0$15 = undefined;var t1$14 = undefined;t0$15 = ph$3$0;t1$14 = t0$15.length;if (t1$14 === 3 && (t0$15[0] === "SFX" && t0$15[1] === "short")) {
      t0$15[2];return true;
    } else {
      return false;
    }
  }], wi_ifx: [function (ph$4$0) {
    var t0$16 = undefined;var t1$15 = undefined;t0$16 = ph$4$0;t1$15 = t0$16.length;if (t1$15 === 3 && (t0$16[0] === "IFX" && t0$16[1] === "wide")) {
      t0$16[2];return true;
    } else {
      return false;
    }
  }], wi_pfx: [function (ph$5$0) {
    var t0$17 = undefined;var t1$16 = undefined;t0$17 = ph$5$0;t1$16 = t0$17.length;if (t1$16 === 3 && (t0$17[0] === "PFX" && t0$17[1] === "wide")) {
      t0$17[2];return true;
    } else {
      return false;
    }
  }], wi_sfx: [function (ph$6$0) {
    var t0$18 = undefined;var t1$17 = undefined;t0$18 = ph$6$0;t1$17 = t0$18.length;if (t1$17 === 3 && (t0$18[0] === "SFX" && t0$18[1] === "wide")) {
      t0$18[2];return true;
    } else {
      return false;
    }
  }], comma: ["X_,_Y"], obrack: ["(_Y", "[_Y", "{_Y"], cbrack: ["X_)", "X_]", "X_}"] }, __amp____colon__((accum$4 = {}, accum$4.withp = ["with Y"], accum$4), __amp____colon__((accum$5 = {}, accum$5["with"] = ["X with Y"], accum$5), __amp____colon__((accum$6 = {}, accum$6.eachp = ["each Y", "each* Y"], accum$6), __amp____colon__((accum$7 = {}, accum$7.each = ["X each Y", "X each* Y"], accum$7), __amp____colon__({ lowprio: ["X where Y", "X_!!_Y", "X_->_Y", "X_=>_Y", "X_=_Y", "X_:=_Y", "X_+=_Y", "X_-=_Y", "X_*=_Y", "X_/=_Y", "X_<<=_Y", "X_>>=_Y", "X_>>>=_Y", "X_++=_Y", "X_?=_Y", "X_or=_Y", "X_and=_Y", "X_each=_Y", "X_%_Y"], lowpriop: ["->_Y", "=>_Y", "=_Y", ":_Y"] }, __amp____colon__((accum$8 = {}, accum$8.when = ["X_when_Y"], accum$8), __amp____colon__((accum$9 = {}, accum$9.or = ["X_or_Y"], accum$9), __amp____colon__((accum$10 = {}, accum$10.and = ["X_and_Y"], accum$10), __amp____colon__((accum$11 = {}, accum$11.not = ["not_Y"], accum$11), { type: ["X_!_Y", "X_?_Y"], cmp: ["X_==_Y", "X_!=_Y", "X_is_Y", "X_>=_Y", "X_<=_Y", "X_>_Y", "X_<_Y"], binxor: ["X_^._Y"], binor: ["X_|._Y"], binand: ["X_&._Y"], shift: ["X_<<_Y", "X_>>_Y", "X_>>>_Y"], add: ["X_+_Y", "X_-_Y"], mul: ["X_*_Y", "X_/_Y", "X_//_Y", "X_mod_Y"], exp: ["X_**_Y"], sjuxt: ["XWHITEY"], wjuxt: ["X WHITE Y"], colon: ["X_:_Y"], pfx: ["._Y", "#_Y", "@_Y"], when2: ["when Y"], pp: ["<>_Y"], pipe: ["X_|>_Y"] })))))))))));eg_prio$0 = __amp____colon__({ comma: [["all", 1], ["all", 1]], obrack: [["all", MAX$0], ["all", 1]], cbrack: [["all", 1], ["all", MAX$0]] }, __amp____colon__((accum$12 = {}, accum$12["with"] = [["all", 1999], ["all", 10]], accum$12), __amp____colon__({ lowprio: [["all", 11], ["all", 10]] }, __amp____colon__((accum$13 = {}, accum$13.each = [["all", 135], ["all", 10]], accum$13), __amp____colon__((accum$14 = {}, accum$14.when = [["all", 100], ["all", 101]], accum$14), __amp____colon__((accum$15 = {}, accum$15.or = [["all", 110], ["all", 111]], accum$15), __amp____colon__((accum$16 = {}, accum$16.and = [["all", 120], ["all", 121]], accum$16), __amp____colon__((accum$17 = {}, accum$17.not = [["all", MAX$0], ["all", 131]], accum$17), { type: [["all", 141], ["all", 140]], cmp: [["all", 200], ["all", 201]], binxor: [["all", 400], ["all", 401]], binor: [["all", 410], ["all", 411]], binand: [["all", 420], ["all", 421]], shift: [["arith", 500], ["arith", 501]], add: [["arith", 550], ["arith", 551]], mul: [["arith", 560], ["arith", 561]], exp: [["arith", 571], ["arith", 570]], wjuxt: [["wjuxt", 13], ["all", 12]], colon: [["all", 12], ["all", 10]], sjuxt: [["all", 2000], ["all", 2001]], pfx: [["all", MAX$0], ["all", 3000]], pp: [["all", MAX$0], ["all", 5]], when2: [["all", MAX$0], ["all", 101]], withp: [["all", MAX$0], ["all", 10]], eachp: [["all", MAX$0], ["all", 10]], lowpriop: [["all", MAX$0], ["all", 10]], pipe: [["pipe", 550], ["pipe", 551]], sh_ifx: [["all", 1800], ["all", 1801]], sh_pfx: [["all", MAX$0], ["all", 1901]], sh_sfx: [["all", 1900], ["all", MAX$0]], wi_ifx: [["customl", 900], ["customr", 901]], wi_pfx: [["all", MAX$0], ["all", 901]], wi_sfx: [["all", 900], ["all", MAX$0]] }))))))));eg_order$0 = SimplePriority$0(eg_groups$0, eg_prio$0);DONE$0 = -1;NONE$0 = 0;LEFT$0 = 1;RIGHT$0 = 2;BOTH$0 = 3;oparse$0 = function oparse(next$0, order$0, finalize$1) {
  var between$0 = undefined;var right_op$0 = undefined;var stack$0 = undefined;var left_op$0 = undefined;var current$0 = undefined;between$0 = finalize$1(next$0());right_op$0 = next$0();stack$0 = [];left_op$0 = null;current$0 = null;$11: while (true) {
    var v$1 = undefined;var $targ$13 = undefined;var other$1 = undefined;var bridge$$17614$0 = undefined;var m$12$0 = undefined;var o$2 = undefined;if (!left_op$0 && !right_op$0) {
      o$2 = DONE$0;
    } else {
      o$2 = !left_op$0 && RIGHT$0 || !right_op$0 && LEFT$0 || order$0(left_op$0, right_op$0);
    }m$12$0 = o$2;if (m$12$0 === DONE$0) {
      return between$0;
    } else {
      if (m$12$0 === LEFT$0) {
        current$0.push(between$0);between$0 = finalize$1(current$0);v$1 = stack$0.pop();left_op$0 = v$1[0];current$0 = v$1[1];current$0;
      } else {
        if (m$12$0 === RIGHT$0) {
          stack$0.push([left_op$0, current$0]);left_op$0 = right_op$0;current$0 = [[right_op$0], between$0];between$0 = finalize$1(next$0());right_op$0 = next$0();right_op$0;
        } else {
          bridge$$17614$0 = m$12$0;if (bridge$$17614$0 === BOTH$0 || bridge$$17614$0 === NONE$0) {
            current$0[0].push(right_op$0);current$0.push(between$0);left_op$0 = right_op$0;between$0 = finalize$1(next$0());right_op$0 = next$0();if (o$2 === NONE$0) {
              $targ$13 = true;current$0.tainted = $targ$13;[];
            }
          } else {
            other$1 = m$12$0;throw ErrorFactory(["should_never_happen"]).create("undefined priority", { left: left_op$0, right: right_op$0 });
          }
        }
      }
    }
  }
};finalize$0 = function finalize(temp$8$0) {
  var t0$19 = undefined;var m$14 = undefined;var m$15 = undefined;var m$16 = undefined;var acc$7 = undefined;var temp$9 = undefined;var other$3 = undefined;var args$4 = undefined;var f$6 = undefined;var orig_args$0 = undefined;var args$3 = undefined;var $$18053$0 = undefined;var $$18054$0 = undefined;var t0$26 = undefined;var t1$23 = undefined;var t2$6 = undefined;var m$18$0 = undefined;var inserted$0 = undefined;var result$1 = undefined;var t0$27 = undefined;var f$7 = undefined;var $targ$14 = undefined;var other$5 = undefined;var x$4 = undefined;var $$18159$0 = undefined;var $$18160$0 = undefined;var t0$29 = undefined;var m$19$0 = undefined;var result$2 = undefined;var f$8 = undefined;var oloc$0 = undefined;var abloc$0 = undefined;var oabloc$0 = undefined;var rval$2 = undefined;var $targ$15 = undefined;var a$1 = undefined;var b$1 = undefined;var $$17770$0 = undefined;var $$17771$0 = undefined;var $$17772$0 = undefined;var $$17773$0 = undefined;var t0$31 = undefined;var t1$26 = undefined;var t2$7 = undefined;var t3$5 = undefined;var t4$2 = undefined;var t5$2 = undefined;var m$20 = undefined;var acc$8 = undefined;var temp$11 = undefined;var op_strings$0 = undefined;var args$5 = undefined;var ph$8$0 = undefined;var commas$1 = undefined;var commas$0 = undefined;var target$0 = undefined;var _b$0 = undefined;var body$2 = undefined;var f$4 = undefined;var body$1 = undefined;var f$3 = undefined;var arg$1 = undefined;var body$0 = undefined;var $$17775$0 = undefined;var $$17776$0 = undefined;var $$17777$0 = undefined;var $$17778$0 = undefined;var $$17779$0 = undefined;var $$17780$0 = undefined;var $$17781$0 = undefined;var t0$22 = undefined;var t1$20 = undefined;var t2$4 = undefined;var t3$3 = undefined;var t4$1 = undefined;var t5$1 = undefined;var t6$1 = undefined;var t7$1 = undefined;var t8$0 = undefined;var bridge$$17764$0 = undefined;var m$13$0 = undefined;var sumloc$0 = undefined;var orig_ops$0 = undefined;var op$1 = undefined;var other$7 = undefined;var ops$0 = undefined;var args$1 = undefined;var value$5 = undefined;var value$4 = undefined;var value$3 = undefined;var value$2 = undefined;var value$1 = undefined;var value$0 = undefined;var $$17709$0 = undefined;var $$17710$0 = undefined;var $$17711$0 = undefined;var t0$20 = undefined;var t1$18 = undefined;var token$0 = undefined;var ph$7$0 = undefined;t0$19 = temp$8$0;token$0 = t0$19;ph$7$0 = t0$19;t0$20 = ph$7$0;t1$18 = t0$20.length;if (($$17711$0 = t1$18 === 2) && t0$20[0] === "ID") {
    value$0 = t0$20[1];return __lt____lt____colon__$0(["symbol", value$0], token$0);
  } else {
    if ($$17711$0 && t0$20[0] === "ILLEGAL") {
      value$1 = t0$20[1];return __lt____lt____colon__$0(["char", value$1], token$0);
    } else {
      if ($$17711$0 && t0$20[0] === "NUM") {
        value$2 = t0$20[1];return __lt____lt____colon__$0(["value", value$2], token$0);
      } else {
        if ($$17711$0 && t0$20[0] === "STR") {
          value$3 = t0$20[1];return __lt____lt____colon__$0(["value", value$3], token$0);
        } else {
          if ($$17711$0 && t0$20[0] === "QUASI") {
            value$4 = t0$20[1];return __lt____lt____colon__$0(["send", ["symbol", "`"], __lt____lt____colon__$0(["value", value$4], token$0)], token$0);
          } else {
            if ($$17711$0 && t0$20[0] === "QUAINT") {
              value$5 = t0$20[1];return __lt____lt____colon__$0(["send", ["symbol", "'"], __lt____lt____colon__$0(["value", value$5], token$0)], token$0);
            } else {
              if (t1$18 === 1 && t0$20[0] === "VOID") {
                return __lt____lt____colon__$0(["void"], token$0);
              } else {
                if (t1$18 >= 1) {
                  ops$0 = t0$20[0];args$1 = Array.prototype.slice.call(t0$20, 1);sumloc$0 = ops$0[0].location;m$14 = null;$12: for (var _iterator10 = ops$0.slice(1)[Symbol.iterator](), _step10; !(_step10 = _iterator10.next()).done;) {
                    m$14 = _step10.value;
                    var op$2 = undefined;op$2 = m$14;sumloc$0 = __plus____plus____colon__$0(sumloc$0, op$2);sumloc$0;
                  }m$15 = null;$13: for (var _iterator11 = args$1[Symbol.iterator](), _step11; !(_step11 = _iterator11.next()).done;) {
                    m$15 = _step11.value;
                    var arg$0 = undefined;var t0$21 = undefined;var t1$19 = undefined;t0$21 = m$15;if (Array.isArray(t0$21) && (t1$19 = t0$21.length, t1$19 === 1 && t0$21[0] === "void")) {
                      undefined;
                    } else {
                      arg$0 = m$15;sumloc$0 = __plus____plus____colon__$0(sumloc$0, arg$0);sumloc$0;
                    }
                  }orig_ops$0 = ops$0;acc$7 = [];temp$9 = null;m$16 = null;$14: for (var _iterator12 = ops$0[Symbol.iterator](), _step12; !(_step12 = _iterator12.next()).done;) {
                    m$16 = _step12.value;
                    var o$3 = undefined;o$3 = m$16;temp$9 = o$3[2];acc$7.push(temp$9);
                  }ops$0 = acc$7;op$1 = ops$0[0];m$13$0 = [ops$0, args$1];if (($$17775$0 = Array.isArray(m$13$0)) && (t0$22 = m$13$0.length, ($$17777$0 = t0$22 === 2) && (t1$20 = m$13$0[0], ($$17779$0 = Array.isArray(t1$20)) && (t2$4 = t1$20.length, t2$4 === 2 && (t1$20[0] === "WHITE" && (t1$20[1] === ":" && (t3$3 = m$13$0[1], Array.isArray(t3$3) && (t4$1 = t3$3.length, t4$1 === 3)))))))) {
                    f$3 = t3$3[0];arg$1 = t3$3[1];body$0 = t3$3[2];return __lt____lt____colon__$0(["send", f$3, __lt____lt____colon__$0(["data", arg$1, body$0], __plus____plus____colon__$0(arg$1, body$0))], sumloc$0);
                  } else {
                    if ($$17779$0 && (($$17781$0 = t2$4 === 1) && (t1$20[0] === ":" && (t3$3 = m$13$0[1], Array.isArray(t3$3) && (t4$1 = t3$3.length, t4$1 === 2))))) {
                      f$4 = t3$3[0];body$1 = t3$3[1];return __lt____lt____colon__$0(["send", f$4, __lt____lt____colon__$0(["data", body$1], body$1)], sumloc$0);
                    } else {
                      if ($$17781$0 && (t1$20[0] === "with" && (t3$3 = m$13$0[1], Array.isArray(t3$3) && (t4$1 = t3$3.length, t4$1 === 2 && (target$0 = t3$3[0], t5$1 = t3$3[1], _b$0 = t5$1, t6$1 = getProjector(Body$0)(t5$1), t6$1[0] && (t7$1 = t6$1[1], t8$0 = t7$1.length, t8$0 >= 0)))))) {
                        body$2 = Array.prototype.slice.call(t7$1, 0);inserted$0 = false;result$1 = transform$0(target$0, function (temp$10$0) {
                          var t0$23 = undefined;var m$17 = undefined;var tr$2 = undefined;var res$0 = undefined;var args$2 = undefined;var x$2 = undefined;var f$5 = undefined;var a$0 = undefined;var b$0 = undefined;var $$17954$0 = undefined;var t0$24 = undefined;var t1$21 = undefined;var t2$5 = undefined;var t3$4 = undefined;var expr$1 = undefined;var ph$9$0 = undefined;t0$23 = temp$10$0;expr$1 = t0$23;ph$9$0 = t0$23;t0$24 = ph$9$0;t1$21 = t0$24.length;if (t1$21 === 2 && (t0$24[0] === "symbol" && t0$24[1] === "...")) {
                            inserted$0 = true;return __lt____lt____colon__$0(["multi"].concat(body$2), _b$0);
                          } else {
                            x$2 = t0$24;if (x$2.fromop && (Array.isArray(t0$24) && (t1$21 = t0$24.length, t1$21 === 3 && (t0$24[0] === "send" && (f$5 = t0$24[1], t2$5 = t0$24[2], Array.isArray(t2$5) && (t3$4 = t2$5.length, t3$4 === 3 && t2$5[0] === "data")))))) {
                              a$0 = t2$5[1];b$0 = t2$5[2];return ["send", this(f$5), __lt____lt____colon__$0(["data", this(a$0), this(b$0)], __plus____plus____colon__$0(a$0, b$0))];
                            } else {
                              t1$21 = t0$24.length;if (t1$21 >= 1 && t0$24[0] === "data") {
                                args$2 = Array.prototype.slice.call(t0$24, 1);tr$2 = this;res$0 = ["data"];m$17 = null;$15: for (var _iterator13 = args$2[Symbol.iterator](), _step13; !(_step13 = _iterator13.next()).done;) {
                                  m$17 = _step13.value;
                                  var other$2 = undefined;var t0$25 = undefined;var t1$22 = undefined;t0$25 = m$17;if (Array.isArray(t0$25) && (t1$22 = t0$25.length, t1$22 === 2 && (t0$25[0] === "symbol" && t0$25[1] === "..."))) {
                                    inserted$0 = true;res$0 = res$0.concat(body$2);
                                  } else {
                                    other$2 = m$17;res$0.push(__lt____lt____colon__$0(tr$2(other$2), other$2));
                                  }
                                }return __lt____lt____colon__$0(res$0, expr$1);
                              } else {
                                return ___match_error(ph$9$0);
                              }
                            }
                          }
                        });if (!inserted$0) {
                          m$18$0 = target$0;if (Array.isArray(m$18$0) && (t0$26 = m$18$0.length, t0$26 === 1 && m$18$0[0] === "void")) {
                            return __lt____lt____colon__$0(["data"].concat(body$2), sumloc$0);
                          } else {
                            if (target$0.fromop) {
                              return __lt____lt____colon__$0(["send", target$0, __lt____lt____colon__$0(["data"].concat(body$2), _b$0)], sumloc$0);
                            } else {
                              if (($$18053$0 = Array.isArray(m$18$0)) && (t0$26 = m$18$0.length, t0$26 === 3 && (m$18$0[0] === "send" && (f$6 = m$18$0[1], t1$23 = m$18$0[2], orig_args$0 = t1$23, Array.isArray(t1$23) && (t2$6 = t1$23.length, t2$6 >= 1 && t1$23[0] === "data"))))) {
                                args$3 = Array.prototype.slice.call(t1$23, 1);return __lt____lt____colon__$0(["send", f$6, __lt____lt____colon__$0(["data"].concat(args$3).concat(body$2), __plus____plus____colon__$0(orig_args$0, _b$0))], sumloc$0);
                              } else {
                                if ($$18053$0 && (t0$26 >= 1 && m$18$0[0] === "data")) {
                                  args$4 = Array.prototype.slice.call(m$18$0, 1);return __lt____lt____colon__$0(target$0.concat(body$2), sumloc$0);
                                } else {
                                  other$3 = m$18$0;return __lt____lt____colon__$0(["send", target$0, __lt____lt____colon__$0(["data"].concat(body$2), _b$0)], sumloc$0);
                                }
                              }
                            }
                          }
                        } else {
                          return __lt____lt____colon__$0(result$1, sumloc$0);
                        }
                      } else {
                        if ($$17777$0 && (bridge$$17764$0 = m$13$0[0], (Array.isArray(bridge$$17764$0) && (t0$27 = bridge$$17764$0.length, t0$27 >= 2 && (bridge$$17764$0[0] === "[" && (commas$0 = Array.prototype.slice.call(bridge$$17764$0, 1, -1), bridge$$17764$0[t0$27 - 1] === "]"))) || (commas$0 = bridge$$17764$0, true)) && (m$13$0[1], commas$0.every(function (x$3) {
                          return equal(x$3, ",");
                        })))) {
                          if (op$1 === "[") {
                            args$1 = args$1.slice(1, -1);args$1;
                          }f$7 = function f(ph$10$0) {
                            var other$4 = undefined;var t0$28 = undefined;var t1$24 = undefined;t0$28 = ph$10$0;t1$24 = t0$28.length;if (t1$24 === 1 && t0$28[0] === "void") {
                              return false;
                            } else {
                              other$4 = ph$10$0;return true;
                            }
                          };args$1 = args$1.filter(f$7);m$19$0 = args$1;if (($$18159$0 = Array.isArray(m$19$0)) && (t0$29 = m$19$0.length, t0$29 === 0)) {
                            result$2 = ["multi"];
                          } else {
                            if ($$18159$0 && t0$29 === 1) {
                              x$4 = m$19$0[0];if (!isNaN(sumloc$0.start) && !isNaN(sumloc$0.end)) {
                                $targ$14 = sumloc$0;x$4.location = $targ$14;[];
                              }result$2 = x$4;
                            } else {
                              other$5 = m$19$0;result$2 = ["multi"].concat(args$1);
                            }
                          }return __lt____lt____colon__$0(result$2, sumloc$0);
                        } else {
                          if ($$17777$0 && (t1$20 = m$13$0[0], ($$17779$0 = Array.isArray(t1$20)) && (t2$4 = t1$20.length, t2$4 >= 2 && (t1$20[0] === "{" && (commas$1 = Array.prototype.slice.call(t1$20, 1, -1), t1$20[t2$4 - 1] === "}" && (m$13$0[1], commas$1.every(function (x$5) {
                            return equal(x$5, ",");
                          }))))))) {
                            f$8 = function f(ph$11$0) {
                              var other$6 = undefined;var t0$30 = undefined;var t1$25 = undefined;t0$30 = ph$11$0;t1$25 = t0$30.length;if (t1$25 === 1 && t0$30[0] === "void") {
                                return false;
                              } else {
                                other$6 = ph$11$0;return true;
                              }
                            };return __lt____lt____colon__$0(["data"].concat(args$1.slice(1, -1).filter(f$8)), sumloc$0);
                          } else {
                            if ($$17779$0 && (($$17781$0 = t2$4 === 1) && t1$20[0] === "WHITE")) {
                              m$13$0[1];return __lt____lt____colon__$0(["send"].concat(args$1), sumloc$0);
                            } else {
                              if ($$17781$0) {
                                t1$20[0];ph$8$0 = m$13$0[1];t0$31 = ph$8$0;if (($$17771$0 = Array.isArray(t0$31)) && (t1$26 = t0$31.length, ($$17773$0 = t1$26 === 2) && (t2$7 = t0$31[0], Array.isArray(t2$7) && (t3$5 = t2$7.length, t3$5 === 1 && (t2$7[0] === "void" && (t4$2 = t0$31[1], Array.isArray(t4$2) && (t5$2 = t4$2.length, t5$2 === 1 && t4$2[0] === "void"))))))) {
                                  return __lt____lt____colon__$0(["symbol", op$1], orig_ops$0[0]);
                                } else {
                                  if ($$17773$0) {
                                    a$1 = t0$31[0];b$1 = t0$31[1];oloc$0 = orig_ops$0[0].location;abloc$0 = __plus____plus____colon__$0(a$1, b$1);oabloc$0 = __plus____plus____colon__$0(orig_ops$0[0], abloc$0);rval$2 = __lt____lt____colon__$0(["send", __lt____lt____colon__$0(["symbol", op$1], oloc$0), __lt____lt____colon__$0(["data", a$1, b$1], abloc$0)], __plus____plus____colon__$0(oloc$0, abloc$0));$targ$15 = true;rval$2.fromop = $targ$15;[];return rval$2;
                                  } else {
                                    return ___match_error(ph$8$0);
                                  }
                                }
                              } else {
                                if ($$17777$0) {
                                  op_strings$0 = m$13$0[0];args$5 = m$13$0[1];return __lt____lt____colon__$0(["mismix", (acc$8 = [], temp$11 = null, m$20 = null, (function () {
                                    $16: for (var _iterator14 = orig_ops$0[Symbol.iterator](), _step14; !(_step14 = _iterator14.next()).done;) {
                                      m$20 = _step14.value;
                                      var op$3 = undefined;op$3 = m$20;temp$11 = __lt____lt____colon__$0(["symbol", op$3[2]], op$3);acc$8.push(temp$11);
                                    }
                                  })(), acc$8)].concat(args$5), sumloc$0);
                                } else {
                                  return ___match_error(m$13$0);
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                } else {
                  other$7 = ph$7$0;throw ErrorFactory(["should_never_happen"]).create("unknown node (B)", { node: token$0 });
                }
              }
            }
          }
        }
      }
    }
  }
};parse$0 = function parse(tokens$0) {
  var next$1 = undefined;next$1 = function next() {
    return tokens$0.shift();
  };return oparse$0(next$1, eg_order$0.compare.bind(eg_order$0), finalize$0);
};$targ$16 = OperatorGroups$0;exports.OperatorGroups = $targ$16;[];$targ$17 = SimplePriority$0;exports.SimplePriority = $targ$17;[];$targ$18 = parse$0;exports.parse = $targ$18;[];$targ$19 = oparse$0;exports.oparse = $targ$19;[];$targ$20 = finalize$0;exports.finalize = $targ$20;[];$targ$21 = DONE$0;exports.DONE = $targ$21;[];$targ$22 = NONE$0;exports.NONE = $targ$22;[];$targ$23 = LEFT$0;exports.LEFT = $targ$23;[];$targ$24 = RIGHT$0;exports.RIGHT = $targ$24;[];$targ$25 = BOTH$0;exports.BOTH = $targ$25;[];
//# sourceMappingURL=parse.js.map

