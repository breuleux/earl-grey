"use strict";
require("earlgrey-runtime");
var $33576 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var GenSym$32884;
var gensym$32885;
var identity$32886;
var binsearch$32887;
var classify$32888;
var classify_contiguous$32889;
var partition$32890;
var product$32891;
var construct$32892;
var mkset$32893;
var Body$32894;
(GenSym$32884 = (function(prefix$32899) {
  var id$32904;
  (id$32904 = 0);
  return (function() {
    var r$32931;
    var pfx$32922;
    var t0$32918;
    var $32909$32913;
    ($32909$32913 = arguments);
    (t0$32918 = $32909$32913.length);
    if (((t0$32918 >= 0) && (t0$32918 <= 1))) {
      (pfx$32922 = ((0 >= t0$32918) ? "" : $32909$32913[0]));
      (r$32931 = ((pfx$32922 + prefix$32899) + [true, String(id$32904)][1]));
      (id$32904++);
      return r$32931;
    } else {
      ___match_error($32909$32913);
    }
  });
}));
(gensym$32885 = GenSym$32884("$"));
(identity$32886 = (function(x$32945) {
  return x$32945;
}));
(binsearch$32887 = (function(xs$32952, x$32953) {
  var lo$32958;
  var hi$32959;
  (lo$32958 = 0);
  (hi$32959 = (xs$32952.length - 1));
  $32966: while ((lo$32958 <= hi$32959)) {
    var $32972$32986;
    var mid$32976;
    var v$32977;
    (mid$32976 = (lo$32958 + ((hi$32959 - lo$32958) >> 1)));
    (v$32977 = $33576(xs$32952, mid$32976));
    ($32972$32986 = $33576(xs$32952, mid$32976));
    if (($32972$32986 < x$32953)) {
      (lo$32958 = (mid$32976 + 1));
    } else {
      if (($32972$32986 > x$32953)) {
        (hi$32959 = (mid$32976 - 1));
      } else {
        $32972$32986;
        return (mid$32976 + 1);
      }
    }
  }
  return lo$32958;
}));
(classify$32888 = (function() {
  var $index$33061;
  var $length$33055;
  var temp$33049;
  var results$33039;
  var classes$33029;
  var xs$33030;
  var t0$33025;
  var $33016$33020;
  ($33016$33020 = arguments);
  (t0$33025 = $33016$33020.length);
  if ((t0$33025 >= 1)) {
    (classes$33029 = Array.prototype.slice.call($33016$33020, 0, -1));
    (xs$33030 = $33016$33020[(t0$33025 - 1)]);
    (results$33039 = ({"rest": []}));
    (temp$33049 = classes$33029);
    ($length$33055 = temp$33049.length);
    ($index$33061 = 0);
    $33040: for (; ($index$33061 < $length$33055); ($index$33061++)) {
      var cls$33078;
      var m$33070;
      (m$33070 = temp$33049[$index$33061]);
      (cls$33078 = m$33070);
      (results$33039[cls$33078] = []);
    }
    $33084: while (xs$33030.length) {
      var x$33120;
      var other$33140;
      var cls$33127;
      var x$33128;
      var newxs$33103;
      var t0$33099;
      var $33087$33094;
      ($33087$33094 = xs$33030.shift());
      if ((($33087$33094 instanceof Array) && (((t0$33099 = $33087$33094.length)), ((t0$33099 >= 1) && ($33087$33094[0] === "splice"))))) {
        (newxs$33103 = Array.prototype.slice.call($33087$33094, 1));
        (xs$33030 = newxs$33103.concat(xs$33030));
      } else {
        if ((((x$33120 = $33087$33094)), ((x$33120 instanceof Array) && (x$33120[0] === "ignore")))) {
          null;
        } else {
          if ((($33087$33094 instanceof Array) && (((t0$33099 = $33087$33094.length)), ((t0$33099 === 2) && ((cls$33127 = $33087$33094[0]), ((x$33128 = $33087$33094[1]), $33576(results$33039, cls$33127))))))) {
            $33576(results$33039, cls$33127).push(x$33128);
          } else {
            (other$33140 = $33087$33094);
            results$33039.rest.push(other$33140);
          }
        }
      }
    }
    return results$33039;
  } else {
    ___match_error($33016$33020);
  }
}));
(classify_contiguous$32889 = (function(xs$33149, classifier$33150) {
  var $index$33186;
  var $length$33180;
  var temp$33174;
  var groups$33156;
  var currcls$33157;
  var curr$33158;
  (groups$33156 = []);
  (currcls$33157 = null);
  (curr$33158 = null);
  (temp$33174 = xs$33149);
  ($length$33180 = temp$33174.length);
  ($index$33186 = 0);
  $33159: for (; ($index$33186 < $length$33180); ($index$33186++)) {
    var cls$33207;
    var x$33203;
    var m$33195;
    (m$33195 = temp$33174[$index$33186]);
    (x$33203 = m$33195);
    (cls$33207 = classifier$33150(x$33203));
    if ((cls$33207 === currcls$33157)) {
      curr$33158.push(x$33203);
    } else {
      if (curr$33158) {
        groups$33156.push(curr$33158);
      }
      (curr$33158 = [cls$33207, x$33203]);
      (currcls$33157 = cls$33207);
    }
  }
  if (curr$33158) {
    groups$33156.push(curr$33158);
  }
  return groups$33156;
}));
(partition$32890 = (function(xs$33227, predicate$33228) {
  var $index$33260;
  var $length$33254;
  var temp$33248;
  var t$33233;
  var f$33234;
  (t$33233 = []);
  (f$33234 = []);
  (temp$33248 = xs$33227);
  ($length$33254 = temp$33248.length);
  ($index$33260 = 0);
  $33235: for (; ($index$33260 < $length$33254); ($index$33260++)) {
    var x$33282;
    var x$33277;
    var m$33269;
    (m$33269 = temp$33248[$index$33260]);
    (x$33277 = m$33269);
    if (predicate$33228(x$33277)) {
      t$33233.push(x$33277);
    } else {
      (x$33282 = m$33269);
      f$33234.push(x$33282);
    }
  }
  return [t$33233, f$33234];
}));
(product$32891 = (function(a$33289, b$33290) {
  var $index$33316;
  var $length$33310;
  var temp$33304;
  var results$33294;
  (results$33294 = []);
  (temp$33304 = a$33289);
  ($length$33310 = temp$33304.length);
  ($index$33316 = 0);
  var $__0 = function() {
    var $index$33358;
    var $length$33352;
    var temp$33346;
    var acc$33340;
    var x$33333;
    var m$33325;
    (m$33325 = temp$33304[$index$33316]);
    (x$33333 = m$33325);
    (results$33294 = results$33294.concat((((acc$33340 = [])), (((temp$33346 = b$33290)), ((($length$33352 = temp$33346.length)), ((($index$33358 = 0)), (function() {
      $33335: for (; ($index$33358 < $length$33352); ($index$33358++)) {
        var y$33375;
        var m$33367;
        (m$33367 = temp$33346[$index$33358]);
        (y$33375 = m$33367);
        acc$33340.push([x$33333, y$33375]);
      }
    })()))), acc$33340)));
  };
  $33295: for (; ($index$33316 < $length$33310); ($index$33316++)) {
    $__0();
  }
  return results$33294;
}));
(construct$32892 = (function($33382$33385, fn$33386, zero$33387) {
  var x$33426;
  var rest$33427;
  var x$33421;
  var $33393$33408;
  var $33394$33409;
  var t0$33406;
  var $33389$33401;
  var ph$33395;
  (ph$33395 = $33382$33385);
  ($33389$33401 = ph$33395);
  if ((($33393$33408 = ($33389$33401 instanceof Array)) && (((t0$33406 = $33389$33401.length)), (t0$33406 === 0)))) {
    return zero$33387;
  } else {
    if (($33393$33408 && (t0$33406 === 1))) {
      (x$33421 = $33389$33401[0]);
      return x$33421;
    } else {
      if (($33393$33408 && (t0$33406 >= 1))) {
        (x$33426 = $33389$33401[0]);
        (rest$33427 = Array.prototype.slice.call($33389$33401, 1));
        return fn$33386(x$33426, construct$32892(rest$33427, fn$33386, zero$33387));
      } else {
        ___match_error($33389$33401);
      }
    }
  }
}));
(mkset$32893 = (function(xs$33437) {
  var $index$33463;
  var $length$33457;
  var temp$33451;
  var rval$33441;
  (rval$33441 = ({}));
  (temp$33451 = xs$33437);
  ($length$33457 = temp$33451.length);
  ($index$33463 = 0);
  $33442: for (; ($index$33463 < $length$33457); ($index$33463++)) {
    var x$33480;
    var m$33472;
    (m$33472 = temp$33451[$index$33463]);
    (x$33480 = m$33472);
    (rval$33441[x$33480] = true);
  }
  return rval$33441;
}));
(Body$32894 = (function($33490$33493) {
  var t0$33501;
  var xs$33519;
  var t0$33515;
  var $33495$33510;
  var ph$33498;
  var x$33499;
  (t0$33501 = $33490$33493);
  (x$33499 = t0$33501);
  (ph$33498 = t0$33501);
  ($33495$33510 = ph$33498);
  if ((($33495$33510 instanceof Array) && (((t0$33515 = $33495$33510.length)), ((t0$33515 >= 1) && ($33495$33510[0] === "multi"))))) {
    (xs$33519 = Array.prototype.slice.call($33495$33510, 1));
    return xs$33519;
  } else {
    $33495$33510;
    return [x$33499];
  }
}));
(exports["GenSym"] = GenSym$32884);
(exports["gensym"] = gensym$32885);
(exports["identity"] = identity$32886);
(exports["binsearch"] = binsearch$32887);
(exports["classify"] = classify$32888);
(exports["classify_contiguous"] = classify_contiguous$32889);
(exports["partition"] = partition$32890);
(exports["construct"] = construct$32892);
(exports["mkset"] = mkset$32893);
(exports["product"] = product$32891);
(exports["Body"] = Body$32894);
//# sourceURL=<compile-source>
