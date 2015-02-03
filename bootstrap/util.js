"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$2;
var $targ$3;
var $targ$4;
var $targ$5;
var $targ$6;
var $targ$7;
var $targ$8;
var $targ$9;
var $targ$10;
var $targ$11;
var GenSym$0;
var gensym$0;
var identity$0;
var binsearch$0;
var classify$0;
var classify_contiguous$0;
var partition$0;
var construct$0;
var mkset$0;
var Body$0;
GenSym$0 = (function GenSym(prefix$0) {
  var id$0;
  id$0 = 0;
  return (function() {
    var r$0;
    var pfx$0;
    var t0$0;
    var m$0$0;
    m$0$0 = arguments;
    t0$0 = m$0$0.length;
    if (((t0$0 >= 0) && (t0$0 <= 1))) {
      if ((0 >= t0$0)) {
        pfx$0 = "";
      } else {
        pfx$0 = m$0$0[0];
      }
      r$0 = ((pfx$0 + prefix$0) + [true, String(id$0)][1]);
      (id$0++);
      return r$0;
    } else {
      return ___match_error(m$0$0);
    }
  });
});
gensym$0 = GenSym$0("$$");
identity$0 = (function identity(x$0) {
  return x$0;
});
binsearch$0 = (function binsearch(xs$0, x$1) {
  var lo$0;
  var hi$0;
  lo$0 = 0;
  hi$0 = (xs$0.length - 1);
  $0: while ((lo$0 <= hi$0)) {
    var m$1$0;
    var mid$0;
    var v$0;
    mid$0 = (lo$0 + ((hi$0 - lo$0) >> 1));
    v$0 = send(xs$0, mid$0);
    m$1$0 = send(xs$0, mid$0);
    if ((m$1$0 < x$1)) {
      lo$0 = (mid$0 + 1);
      lo$0;
    } else {
      if ((m$1$0 > x$1)) {
        hi$0 = (mid$0 - 1);
        hi$0;
      } else {
        return (mid$0 + 1);
      }
    }
  }
  return lo$0;
});
classify$0 = (function classify() {
  var m$3;
  var results$0;
  var xs$1;
  var classes$0;
  var t0$1;
  var m$2$0;
  m$2$0 = arguments;
  t0$1 = m$2$0.length;
  if ((t0$1 >= 1)) {
    classes$0 = Array.prototype.slice.call(m$2$0, 0, -1);
    xs$1 = m$2$0[(t0$1 - 1)];
    results$0 = ({"rest": []});
    m$3 = null;
    $1: for (var $__0 = classes$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$3 = $__1.value;
      {
        var $targ$0;
        var cls$0;
        cls$0 = m$3;
        $targ$0 = [];
        (results$0[cls$0] = $targ$0);
        [];
      }
    }
    $2: while (xs$1.length) {
      var x$2;
      var other$0;
      var cls$1;
      var x$3;
      var newxs$0;
      var t0$2;
      var m$4$0;
      m$4$0 = xs$1.shift();
      if (((m$4$0 instanceof Array) && ((t0$2 = m$4$0.length), ((t0$2 >= 1) && (m$4$0[0] === "splice"))))) {
        newxs$0 = Array.prototype.slice.call(m$4$0, 1);
        xs$1 = newxs$0.concat(xs$1);
        xs$1;
      } else {
        if (((x$2 = m$4$0), ((x$2 instanceof Array) && (x$2[0] === "ignore")))) {
          null;
        } else {
          if (((m$4$0 instanceof Array) && ((t0$2 = m$4$0.length), ((t0$2 === 2) && ((cls$1 = m$4$0[0]), (x$3 = m$4$0[1]), send(results$0, cls$1)))))) {
            send(results$0, cls$1).push(x$3);
          } else {
            other$0 = m$4$0;
            results$0.rest.push(other$0);
          }
        }
      }
    }
    return results$0;
  } else {
    return ___match_error(m$2$0);
  }
});
classify_contiguous$0 = (function classify_contiguous(xs$2, classifier$0) {
  var m$5;
  var groups$0;
  var currcls$0;
  var curr$0;
  groups$0 = [];
  currcls$0 = null;
  curr$0 = null;
  m$5 = null;
  $3: for (var $__0 = xs$2[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$5 = $__1.value;
    {
      var cls$2;
      var x$4;
      x$4 = m$5;
      cls$2 = classifier$0(x$4);
      if ((cls$2 === currcls$0)) {
        curr$0.push(x$4);
      } else {
        if (curr$0) {
          groups$0.push(curr$0);
        }
        curr$0 = [cls$2, x$4];
        currcls$0 = cls$2;
        currcls$0;
      }
    }
  }
  if (curr$0) {
    groups$0.push(curr$0);
  }
  return groups$0;
});
partition$0 = (function partition(xs$3, predicate$0) {
  var m$6;
  var t$0;
  var f$0;
  t$0 = [];
  f$0 = [];
  m$6 = null;
  $4: for (var $__0 = xs$3[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$6 = $__1.value;
    {
      var x$6;
      var x$5;
      x$5 = m$6;
      if (predicate$0(x$5)) {
        t$0.push(x$5);
      } else {
        x$6 = m$6;
        f$0.push(x$6);
      }
    }
  }
  return [t$0, f$0];
});
construct$0 = (function construct(ph$0$0, fn$0, zero$0) {
  var x$8;
  var rest$0;
  var x$7;
  var $$25940$0;
  var $$25941$0;
  var t0$3;
  var t1$0;
  t0$3 = ph$0$0;
  t1$0 = t0$3.length;
  if ((t1$0 === 0)) {
    return zero$0;
  } else {
    if ((t1$0 === 1)) {
      x$7 = t0$3[0];
      return x$7;
    } else {
      if ((t1$0 >= 1)) {
        x$8 = t0$3[0];
        rest$0 = Array.prototype.slice.call(t0$3, 1);
        return fn$0(x$8, construct$0(rest$0, fn$0, zero$0));
      } else {
        return ___match_error(ph$0$0);
      }
    }
  }
});
mkset$0 = (function mkset(xs$4) {
  var m$7;
  var rval$0;
  rval$0 = ({});
  m$7 = null;
  $5: for (var $__0 = xs$4[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$7 = $__1.value;
    {
      var $targ$1;
      var x$9;
      x$9 = m$7;
      $targ$1 = true;
      (rval$0[x$9] = $targ$1);
      [];
    }
  }
  return rval$0;
});
Body$0 = (function Body(temp$0$0) {
  var t0$4;
  var xs$5;
  var t0$5;
  var t1$1;
  var x$10;
  var ph$1$0;
  t0$4 = temp$0$0;
  x$10 = t0$4;
  ph$1$0 = t0$4;
  t0$5 = ph$1$0;
  t1$1 = t0$5.length;
  if (((t1$1 >= 1) && (t0$5[0] === "multi"))) {
    xs$5 = Array.prototype.slice.call(t0$5, 1);
    return xs$5;
  } else {
    return [x$10];
  }
});
$targ$2 = GenSym$0;
(exports["GenSym"] = $targ$2);
[];
$targ$3 = gensym$0;
(exports["gensym"] = $targ$3);
[];
$targ$4 = identity$0;
(exports["identity"] = $targ$4);
[];
$targ$5 = binsearch$0;
(exports["binsearch"] = $targ$5);
[];
$targ$6 = classify$0;
(exports["classify"] = $targ$6);
[];
$targ$7 = classify_contiguous$0;
(exports["classify_contiguous"] = $targ$7);
[];
$targ$8 = partition$0;
(exports["partition"] = $targ$8);
[];
$targ$9 = construct$0;
(exports["construct"] = $targ$9);
[];
$targ$10 = mkset$0;
(exports["mkset"] = $targ$10);
[];
$targ$11 = Body$0;
(exports["Body"] = $targ$11);
[];
//# sourceURL=<compile-source>
