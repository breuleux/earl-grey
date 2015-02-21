
"use strict";require("earlgrey-runtime/5");var $targ$2 = undefined;var $targ$3 = undefined;var $targ$4 = undefined;var $targ$5 = undefined;var $targ$6 = undefined;var $targ$7 = undefined;var $targ$8 = undefined;var $targ$9 = undefined;var $targ$10 = undefined;var $targ$11 = undefined;var GenSym$0 = undefined;var gensym$0 = undefined;var identity$0 = undefined;var binsearch$0 = undefined;var classify$0 = undefined;var classify_contiguous$0 = undefined;var partition$0 = undefined;var construct$0 = undefined;var mkset$0 = undefined;var Body$0 = undefined;GenSym$0 = function GenSym(prefix$0) {
  var id$0 = undefined;id$0 = 0;return function () {
    var r$0 = undefined;var pfx$0 = undefined;var t0$0 = undefined;var m$0$0 = undefined;m$0$0 = arguments;t0$0 = m$0$0.length;if (t0$0 >= 0 && t0$0 <= 1) {
      if (0 >= t0$0) {
        pfx$0 = "";
      } else {
        pfx$0 = m$0$0[0];
      }r$0 = pfx$0 + prefix$0 + [true, String(id$0)][1];id$0++;return r$0;
    } else {
      return ___match_error(m$0$0);
    }
  };
};gensym$0 = GenSym$0("$$");identity$0 = function identity(x$0) {
  return x$0;
};binsearch$0 = function binsearch(xs$0, x$1) {
  var lo$0 = undefined;var hi$0 = undefined;lo$0 = 0;hi$0 = xs$0.length - 1;$0: while (lo$0 <= hi$0) {
    var m$1$0 = undefined;var mid$0 = undefined;var v$0 = undefined;mid$0 = lo$0 + (hi$0 - lo$0 >> 1);v$0 = send(xs$0, mid$0);m$1$0 = send(xs$0, mid$0);if (m$1$0 < x$1) {
      lo$0 = mid$0 + 1;lo$0;
    } else {
      if (m$1$0 > x$1) {
        hi$0 = mid$0 - 1;hi$0;
      } else {
        return mid$0 + 1;
      }
    }
  }return lo$0;
};classify$0 = function classify() {
  var m$3 = undefined;var results$0 = undefined;var xs$1 = undefined;var classes$0 = undefined;var t0$1 = undefined;var m$2$0 = undefined;m$2$0 = arguments;t0$1 = m$2$0.length;if (t0$1 >= 1) {
    classes$0 = Array.prototype.slice.call(m$2$0, 0, -1);xs$1 = m$2$0[t0$1 - 1];results$0 = { rest: [] };m$3 = null;$1: for (var _iterator = classes$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      m$3 = _step.value;
      var $targ$0 = undefined;var cls$0 = undefined;cls$0 = m$3;$targ$0 = [];results$0[cls$0] = $targ$0;[];
    }$2: while (xs$1.length) {
      var x$2 = undefined;var other$0 = undefined;var cls$1 = undefined;var x$3 = undefined;var newxs$0 = undefined;var t0$2 = undefined;var m$4$0 = undefined;m$4$0 = xs$1.shift();if (Array.isArray(m$4$0) && (t0$2 = m$4$0.length, t0$2 >= 1 && m$4$0[0] === "splice")) {
        newxs$0 = Array.prototype.slice.call(m$4$0, 1);xs$1 = newxs$0.concat(xs$1);xs$1;
      } else {
        if ((x$2 = m$4$0, x$2 instanceof Array && x$2[0] === "ignore")) {
          null;
        } else {
          if (Array.isArray(m$4$0) && (t0$2 = m$4$0.length, t0$2 === 2 && (cls$1 = m$4$0[0], x$3 = m$4$0[1], send(results$0, cls$1)))) {
            send(results$0, cls$1).push(x$3);
          } else {
            other$0 = m$4$0;results$0.rest.push(other$0);
          }
        }
      }
    }return results$0;
  } else {
    return ___match_error(m$2$0);
  }
};classify_contiguous$0 = function classify_contiguous(xs$2, classifier$0) {
  var m$5 = undefined;var groups$0 = undefined;var currcls$0 = undefined;var curr$0 = undefined;groups$0 = [];currcls$0 = null;curr$0 = null;m$5 = null;$3: for (var _iterator2 = xs$2[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
    m$5 = _step2.value;
    var cls$2 = undefined;var x$4 = undefined;x$4 = m$5;cls$2 = classifier$0(x$4);if (cls$2 === currcls$0) {
      curr$0.push(x$4);
    } else {
      if (curr$0) {
        groups$0.push(curr$0);
      }curr$0 = [cls$2, x$4];currcls$0 = cls$2;currcls$0;
    }
  }if (curr$0) {
    groups$0.push(curr$0);
  }return groups$0;
};partition$0 = function partition(xs$3, predicate$0) {
  var m$6 = undefined;var t$0 = undefined;var f$0 = undefined;t$0 = [];f$0 = [];m$6 = null;$4: for (var _iterator3 = xs$3[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
    m$6 = _step3.value;
    var x$6 = undefined;var x$5 = undefined;x$5 = m$6;if (predicate$0(x$5)) {
      t$0.push(x$5);
    } else {
      x$6 = m$6;f$0.push(x$6);
    }
  }return [t$0, f$0];
};construct$0 = function construct(ph$0$0, fn$0, zero$0) {
  var x$8 = undefined;var rest$0 = undefined;var x$7 = undefined;var $$26124$0 = undefined;var $$26125$0 = undefined;var t0$3 = undefined;var t1$0 = undefined;t0$3 = ph$0$0;t1$0 = t0$3.length;if (t1$0 === 0) {
    return zero$0;
  } else {
    if (t1$0 === 1) {
      x$7 = t0$3[0];return x$7;
    } else {
      if (t1$0 >= 1) {
        x$8 = t0$3[0];rest$0 = Array.prototype.slice.call(t0$3, 1);return fn$0(x$8, construct$0(rest$0, fn$0, zero$0));
      } else {
        return ___match_error(ph$0$0);
      }
    }
  }
};mkset$0 = function mkset(xs$4) {
  var m$7 = undefined;var rval$0 = undefined;rval$0 = {};m$7 = null;$5: for (var _iterator4 = xs$4[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
    m$7 = _step4.value;
    var $targ$1 = undefined;var x$9 = undefined;x$9 = m$7;$targ$1 = true;rval$0[x$9] = $targ$1;[];
  }return rval$0;
};Body$0 = function Body(temp$0$0) {
  var t0$4 = undefined;var xs$5 = undefined;var t0$5 = undefined;var t1$1 = undefined;var x$10 = undefined;var ph$1$0 = undefined;t0$4 = temp$0$0;x$10 = t0$4;ph$1$0 = t0$4;t0$5 = ph$1$0;t1$1 = t0$5.length;if (t1$1 >= 1 && t0$5[0] === "multi") {
    xs$5 = Array.prototype.slice.call(t0$5, 1);return xs$5;
  } else {
    return [x$10];
  }
};$targ$2 = GenSym$0;exports.GenSym = $targ$2;[];$targ$3 = gensym$0;exports.gensym = $targ$3;[];$targ$4 = identity$0;exports.identity = $targ$4;[];$targ$5 = binsearch$0;exports.binsearch = $targ$5;[];$targ$6 = classify$0;exports.classify = $targ$6;[];$targ$7 = classify_contiguous$0;exports.classify_contiguous = $targ$7;[];$targ$8 = partition$0;exports.partition = $targ$8;[];$targ$9 = construct$0;exports.construct = $targ$9;[];$targ$10 = mkset$0;exports.mkset = $targ$10;[];$targ$11 = Body$0;exports.Body = $targ$11;[];
//# sourceMappingURL=util.js.map

