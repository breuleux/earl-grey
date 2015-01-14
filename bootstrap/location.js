"use strict";
require("earlgrey-runtime");
var $targ$42;
var accum$0;
var $targ$43;
var accum$1;
var $targ$83;
var accum$2;
var $targ$84;
var accum$3;
var $targ$209;
var $targ$210;
var $targ$211;
var $targ$212;
var $targ$213;
var $targ$214;
var $targ$215;
var $targ$216;
var $targ$217;
var $0$0;
var binsearch$0;
var $1$0;
var __lt____gt__$0;
var repr$0;
var fs$0;
var Source$0;
var $targ$6;
var $targ$7;
var Location$0;
var $targ$9;
var $targ$10;
var $targ$11;
var $targ$12;
var $targ$13;
var $targ$14;
var $targ$15;
var highlight$0;
var highlight_lines$0;
var clamp$0;
var morsel$0;
var highlight_locations$0;
var highlight_locations_same_source$0;
var merge_locations$0;
var __lt____lt____colon__$0;
var __plus____plus____colon__$0;
var format_error$0;
var display_error$0;
$0$0 = require("./util");
binsearch$0 = $0$0.binsearch;
$1$0 = require("./pp");
__lt____gt__$0 = $1$0["<>"];
repr$0 = $1$0.repr;
fs$0 = require("fs");
Source$0 = (function() {
  var m$1;
  var $targ$31;
  var $targ$33;
  var $targ$34;
  var curr$0;
  var $targ$35;
  var t0$0;
  var text$0;
  var $targ$32;
  var m$0$0;
  var $it$0;
  $it$0 = ((!getChecker(Source$0)(this)) ? Object.create(Source$0.prototype) : this);
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (((t0$0 >= 1) && (t0$0 <= 2))) {
    text$0 = m$0$0[0];
    $targ$32 = ((1 >= t0$0) ? false : m$0$0[1]);
    $targ$31 = text$0;
    ($it$0["text"] = $targ$31);
    ($it$0["url"] = $targ$32);
    $targ$33 = [];
    ($it$0["counts"] = $targ$33);
    $targ$34 = 0;
    curr$0 = $targ$34;
    m$1 = null;
    $2: for (var $__0 = text$0.split("\n")[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$1 = $__1.value;
      {
        var line$0;
        line$0 = m$1;
        $it$0.counts.push(curr$0);
        curr$0 = (curr$0 + (line$0.length + 1));
      }
    }
    $it$0.counts.push(curr$0);
    $targ$35 = ($it$0.counts.length - 1);
    ($it$0["nlines"] = $targ$35);
  } else {
    ___match_error(m$0$0);
  }
  return $it$0;
});
$targ$6 = (function(pos$0) {
  var line$1;
  var col$0;
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  line$1 = binsearch$0($it$1.counts, pos$0);
  col$0 = (pos$0 - send($it$1.counts, (line$1 - 1)));
  return [line$1, col$0];
});
(Source$0.prototype["linecol"] = $targ$6);
$targ$7 = (function(l1$0, l2$0, spans$0) {
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  return highlight_lines$0($it$2.text, $it$2.counts, [(l1$0 - 1), (l2$0 - 1)], spans$0);
});
(Source$0.prototype["highlight_lines"] = $targ$7);
__amp____colon__(Source$0, __amp____colon__((($targ$42 = "Source"), (accum$0 = ({})), (accum$0["::name"] = $targ$42), accum$0), (($targ$43 = true), (accum$1 = ({})), (accum$1["::egclass"] = $targ$43), accum$1)));
Source$0;
Location$0 = (function(source$0, start$0, end$0) {
  var $targ$45;
  var $targ$46;
  var $targ$47;
  var $it$3;
  $it$3 = ((!getChecker(Location$0)(this)) ? Object.create(Location$0.prototype) : this);
  $targ$45 = (source$0 || Source$0("", null));
  ($it$3["source"] = $targ$45);
  $targ$46 = start$0;
  ($it$3["start"] = $targ$46);
  $targ$47 = end$0;
  ($it$3["end"] = $targ$47);
  return $it$3;
});
$targ$9 = (function() {
  var $it$4;
  var self$2;
  $it$4 = this;
  self$2 = this;
  return $it$4.source.text.slice($it$4.start, $it$4.end);
});
(Location$0.prototype["text"] = $targ$9);
$targ$10 = (function() {
  var $it$5;
  var self$3;
  $it$5 = this;
  self$3 = this;
  return Location$0($it$5.source, $it$5.start, $it$5.start);
});
(Location$0.prototype["at_start"] = $targ$10);
$targ$11 = (function() {
  var $it$6;
  var self$4;
  $it$6 = this;
  self$4 = this;
  return Location$0($it$6.source, $it$6.end, $it$6.end);
});
(Location$0.prototype["at_end"] = $targ$11);
$targ$12 = (function() {
  var t2$0;
  var t1$0;
  var t0$1;
  var t1$1;
  var t0$2;
  var l2$1;
  var l1$1;
  var ph$0$0;
  var m$2$0;
  var $it$7;
  var self$5;
  $it$7 = this;
  self$5 = this;
  m$2$0 = $it$7.linecol();
  if (((m$2$0 instanceof Array) && ((t0$1 = m$2$0.length), ((t0$1 === 2) && ((t1$0 = m$2$0[0]), ((t1$0 instanceof Array) && ((t2$0 = t1$0.length), (t2$0 === 2)))))))) {
    l1$1 = t1$0[0];
    t1$0[1];
    ph$0$0 = m$2$0[1];
    if ((ph$0$0 === null)) {
      return [l1$1, l1$1];
    } else {
      t0$2 = ph$0$0;
      if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), (t1$1 === 2)))) {
        l2$1 = t0$2[0];
        t0$2[1];
        return [l1$1, l2$1];
      } else {
        return ___match_error(ph$0$0, "/home/olivier/git/earl-grey/src/location.eg", 1080, 1085);
      }
    }
  } else {
    return ___match_error(m$2$0);
  }
});
(Location$0.prototype["linerange"] = $targ$12);
$targ$13 = (function() {
  var start$1;
  var end$1;
  var $it$8;
  var self$6;
  $it$8 = this;
  self$6 = this;
  start$1 = $it$8.source.linecol($it$8.start);
  end$1 = (($it$8.start === $it$8.end) ? null : $it$8.source.linecol(($it$8.end - 1)));
  return [start$1, end$1];
});
(Location$0.prototype["linecol"] = $targ$13);
$targ$14 = (function() {
  var t4$0;
  var t3$0;
  var t2$1;
  var t1$2;
  var t0$3;
  var t3$1;
  var t2$2;
  var t1$3;
  var otherwise$0;
  var $$4471$0;
  var m$4$0;
  var t0$4;
  var l2$2;
  var c2$0;
  var l1$2;
  var c1$0;
  var ph$1$0;
  var m$3$0;
  var $it$9;
  var self$7;
  $it$9 = this;
  self$7 = this;
  m$3$0 = $it$9.linecol();
  if (((m$3$0 instanceof Array) && ((t0$3 = m$3$0.length), ((t0$3 === 2) && ((t1$2 = m$3$0[0]), ((t1$2 instanceof Array) && ((t2$1 = t1$2.length), ((t2$1 === 2) && ((t3$0 = [true, String(t1$2[0])]), (t3$0[0] && ((l1$2 = t3$0[1]), (t4$0 = [true, String(t1$2[1])]), t4$0[0]))))))))))) {
    c1$0 = t4$0[1];
    ph$1$0 = m$3$0[1];
    if ((ph$1$0 === null)) {
      return ((l1$2 + ":") + c1$0);
    } else {
      t0$4 = ph$1$0;
      if (((t0$4 instanceof Array) && ((t1$3 = t0$4.length), ((t1$3 === 2) && ((t2$2 = [true, String(t0$4[0])]), (t2$2[0] && ((l2$2 = t2$2[1]), (t3$1 = [true, String(t0$4[1])]), t3$1[0]))))))) {
        c2$0 = t3$1[1];
        m$4$0 = null;
        m$4$0;
        if (((l1$2 === l2$2) && (c1$0 === c2$0))) {
          return ((l1$2 + ":") + c1$0);
        } else {
          if ((l1$2 === l2$2)) {
            return ((((l1$2 + ":") + c1$0) + "-") + c2$0);
          } else {
            otherwise$0 = m$4$0;
            return ((((((l1$2 + ":") + c1$0) + "-") + l2$2) + ":") + c2$0);
          }
        }
      } else {
        return ___match_error(ph$1$0, "/home/olivier/git/earl-grey/src/location.eg", 1422, 1427);
      }
    }
  } else {
    return ___match_error(m$3$0);
  }
});
(Location$0.prototype["ref"] = $targ$14);
$targ$15 = (function() {
  var t0$5;
  var cls$0;
  var context$0;
  var m$5$0;
  var $it$10;
  var self$8;
  $it$10 = this;
  self$8 = this;
  m$5$0 = arguments;
  t0$5 = m$5$0.length;
  if (((t0$5 >= 0) && (t0$5 <= 2))) {
    cls$0 = ((0 >= t0$5) ? "hl1" : m$5$0[0]);
    context$0 = ((1 >= t0$5) ? 0 : m$5$0[1]);
    return highlight_locations$0([[$it$10, cls$0]], context$0);
  } else {
    return ___match_error(m$5$0);
  }
});
(Location$0.prototype["highlight"] = $targ$15);
__amp____colon__(Location$0, __amp____colon__((($targ$83 = "Location"), (accum$2 = ({})), (accum$2["::name"] = $targ$83), accum$2), (($targ$84 = true), (accum$3 = ({})), (accum$3["::egclass"] = $targ$84), accum$3)));
Location$0;
highlight$0 = (function() {
  var m$7;
  var acc$0;
  var t0$6;
  var text$1;
  var spans$1;
  var offset$0;
  var m$6$0;
  m$6$0 = arguments;
  t0$6 = m$6$0.length;
  if (((t0$6 >= 2) && (t0$6 <= 3))) {
    text$1 = m$6$0[0];
    spans$1 = m$6$0[1];
    offset$0 = ((2 >= t0$6) ? 0 : m$6$0[2]);
    return Node([], ({}), ((acc$0 = []), (m$7 = null), (function() {
      $3: for (var $__0 = morsel$0(spans$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$7 = $__1.value;
        {
          var t1$4;
          var xstart$0;
          var xend$0;
          var t0$7;
          var start$2;
          var end$2;
          var attributes$0;
          t0$7 = m$7;
          if (((t0$7 instanceof Array) && ((t1$4 = t0$7.length), (t1$4 === 3)))) {
            start$2 = t0$7[0];
            end$2 = t0$7[1];
            attributes$0 = t0$7[2];
            acc$0.push(((xstart$0 = Math.max((start$2 - offset$0), 0)), (xend$0 = Math.min((end$2 - offset$0), text$1.length)), Node([("." + attributes$0.slice(0, 1))], ({}), text$1.slice(xstart$0, xend$0))));
          } else {
            ___match_error(m$7, "/home/olivier/git/earl-grey/src/location.eg", 1972, 2262);
          }
        }
      }
    })(), acc$0));
  } else {
    return ___match_error(m$6$0);
  }
});
highlight_lines$0 = (function(text$2, linelocs$0, temp$0$0, spans$2) {
  var t1$5;
  var t0$8;
  var m$8;
  var acc$1;
  var l1$3;
  var l2$3;
  t0$8 = temp$0$0;
  if (((t0$8 instanceof Array) && ((t1$5 = t0$8.length), (t1$5 === 2)))) {
    l1$3 = t0$8[0];
    l2$3 = t0$8[1];
  } else {
    ___match_error(temp$0$0);
  }
  return Node(["span"], ({}), ((acc$1 = []), (m$8 = null), (function() {
    $4: for (var $__0 = range(l1$3, l2$3)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$8 = $__1.value;
      {
        var start$3;
        var end$3;
        var lineno$0;
        lineno$0 = m$8;
        acc$1.push(((start$3 = send(linelocs$0, lineno$0)), (end$3 = send(linelocs$0, (lineno$0 + 1))), Node(["span"], ({}), [Node([".lineno"], ({}), (lineno$0 + 1)), Node([".source"], ({}), highlight$0(text$2, [[start$3, end$3, []]].concat(clamp$0(spans$2, start$3, end$3))))])));
      }
    }
  })(), acc$1));
});
clamp$0 = (function(spans$3, bot$0, top$0) {
  var m$9;
  var acc$2;
  acc$2 = [];
  m$9 = null;
  $5: for (var $__0 = spans$3[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$9 = $__1.value;
    {
      var t1$6;
      var t0$9;
      var start$4;
      var end$4;
      var attr$0;
      t0$9 = m$9;
      if (((t0$9 instanceof Array) && ((t1$6 = t0$9.length), ((t1$6 === 3) && ((start$4 = t0$9[0]), (end$4 = t0$9[1]), (attr$0 = t0$9[2]), ((end$4 >= bot$0) && (start$4 <= top$0))))))) {
        acc$2.push([Math.max(start$4, bot$0), Math.min(end$4, top$0), attr$0]);
      } else {
        false;
      }
    }
  }
  return acc$2;
});
morsel$0 = (function(spans$4) {
  var jump$0;
  var jumptill$0;
  var process_elements$0;
  var thespans$0;
  jump$0 = (function(active$0, bot$1, top$1) {
    var m$10;
    var acc$3;
    var m$11;
    var e$0;
    var $targ$105;
    var attributes$1;
    e$0 = send(Math.min, [top$1].concat(((acc$3 = []), (m$10 = null), (function() {
      $7: for (var $__0 = active$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$10 = $__1.value;
        {
          var t1$7;
          var t0$10;
          var x$0;
          t0$10 = m$10;
          if (((t0$10 instanceof Array) && ((t1$7 = t0$10.length), (t1$7 === 3)))) {
            t0$10[0];
            x$0 = t0$10[1];
            t0$10[2];
            acc$3.push(x$0);
          } else {
            ___match_error(m$10, "/home/olivier/git/earl-grey/src/location.eg", 3594, 3627);
          }
        }
      }
    })(), acc$3)));
    $targ$105 = [];
    attributes$1 = $targ$105;
    m$11 = null;
    $6: for (var $__0 = active$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$11 = $__1.value;
      {
        var t1$8;
        var t0$11;
        var X$0;
        t0$11 = m$11;
        if (((t0$11 instanceof Array) && ((t1$8 = t0$11.length), (t1$8 === 3)))) {
          t0$11[0];
          t0$11[1];
          X$0 = t0$11[2];
          attributes$1 = attributes$1.concat(X$0);
        } else {
          ___match_error(m$11, "/home/olivier/git/earl-grey/src/location.eg", 3653, 3694);
        }
      }
    }
    return [e$0, [bot$1, e$0, attributes$1]];
  });
  jumptill$0 = (function(active$1, bot$2, top$2) {
    var t1$9;
    var t0$12;
    var m$12;
    var acc$4;
    var t1$11;
    var t0$14;
    var $targ$111;
    var newbot$0;
    var span$0;
    var newactive$0;
    var $targ$113;
    var spans$5;
    var remainder$0;
    if ((bot$2 === top$2)) {
      return [[], active$1];
    } else {
      $targ$111 = jump$0(active$1, bot$2, top$2);
      t0$12 = $targ$111;
      if (((t0$12 instanceof Array) && ((t1$9 = t0$12.length), (t1$9 === 2)))) {
        newbot$0 = t0$12[0];
        span$0 = t0$12[1];
      } else {
        ___match_error($targ$111);
      }
      newactive$0 = ((acc$4 = []), (m$12 = null), (function() {
        $8: for (var $__0 = active$1[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$12 = $__1.value;
          {
            var t1$10;
            var t0$13;
            var x$1;
            var e$1;
            var attr$1;
            t0$13 = m$12;
            x$1 = t0$13;
            if (((t0$13 instanceof Array) && ((t1$10 = t0$13.length), ((t1$10 === 3) && (t0$13[0], (e$1 = t0$13[1]), (attr$1 = t0$13[2]), (e$1 > newbot$0)))))) {
              acc$4.push(x$1);
            } else {
              false;
            }
          }
        }
      })(), acc$4);
      $targ$113 = jumptill$0(newactive$0, newbot$0, top$2);
      t0$14 = $targ$113;
      if (((t0$14 instanceof Array) && ((t1$11 = t0$14.length), (t1$11 === 2)))) {
        spans$5 = t0$14[0];
        remainder$0 = t0$14[1];
      } else {
        ___match_error($targ$113);
      }
      return [[span$0].concat(spans$5), remainder$0];
    }
  });
  process_elements$0 = (function(start$5, active$2, rem$0) {
    var $targ$126;
    var $targ$125;
    var $targ$124;
    var $targ$123;
    var t0$15;
    var $targ$128;
    var $targ$127;
    var m$14;
    var acc$5;
    var t1$14;
    var t0$17;
    var top$3;
    var bot$3;
    var $targ$131;
    var spans$6;
    var $targ$140;
    var $targ$139;
    var $targ$138;
    var $targ$137;
    var t1$15;
    var t0$18;
    var $targ$141;
    var spans$7;
    var newactive$1;
    var start$7;
    var active$4;
    var next$0;
    var target$0;
    var end$5;
    var attr$2;
    var rest$0;
    var start$6;
    var active$3;
    var $$4817$0;
    var $$4818$0;
    var $$4819$0;
    var t1$12;
    var t2$3;
    var t3$2;
    var t4$1;
    var m$13$0;
    m$13$0 = [start$5, active$2, rem$0];
    if ((($$4817$0 = (m$13$0 instanceof Array)) && ((t0$15 = m$13$0.length), (($$4819$0 = (t0$15 === 3)) && (m$13$0[0], ($targ$123 = m$13$0[1]), (t1$12 = $targ$123), ((t1$12 instanceof Array) && (($targ$124 = t1$12.length), (t2$3 = $targ$124), ((t2$3 === 0) && (($targ$125 = m$13$0[2]), (t3$2 = $targ$125), ((t3$2 instanceof Array) && (($targ$126 = t3$2.length), (t4$1 = $targ$126), (t4$1 === 0)))))))))))) {
      return [];
    } else {
      if (($$4819$0 && ((start$6 = m$13$0[0]), (active$3 = m$13$0[1]), ($targ$127 = m$13$0[2]), (t1$12 = $targ$127), ((t1$12 instanceof Array) && (($targ$128 = t1$12.length), (t2$3 = $targ$128), (t2$3 === 0)))))) {
        top$3 = send(Math.max, ((acc$5 = []), (m$14 = null), (function() {
          $9: for (var $__0 = active$3[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$14 = $__1.value;
            {
              var t1$13;
              var t0$16;
              var e$2;
              t0$16 = m$14;
              if (((t0$16 instanceof Array) && ((t1$13 = t0$16.length), (t1$13 === 3)))) {
                t0$16[0];
                e$2 = t0$16[1];
                t0$16[2];
                acc$5.push(e$2);
              } else {
                ___match_error(m$14, "/home/olivier/git/earl-grey/src/location.eg", 4307, 4335);
              }
            }
          }
        })(), acc$5));
        bot$3 = Math.min(start$6, top$3);
        $targ$131 = jumptill$0(active$3, start$6, top$3);
        t0$17 = $targ$131;
        if (((t0$17 instanceof Array) && ((t1$14 = t0$17.length), (t1$14 === 2)))) {
          spans$6 = t0$17[0];
          t0$17[1];
        } else {
          ___match_error($targ$131);
        }
        return spans$6;
      } else {
        if (($$4819$0 && ((start$7 = m$13$0[0]), (active$4 = m$13$0[1]), ($targ$137 = m$13$0[2]), (t1$12 = $targ$137), ((t1$12 instanceof Array) && (($targ$138 = t1$12.length), (t2$3 = $targ$138), ((t2$3 >= 1) && (($targ$139 = t1$12[0]), (t3$2 = $targ$139), (next$0 = t3$2), ((t3$2 instanceof Array) && (($targ$140 = t3$2.length), (t4$1 = $targ$140), (t4$1 === 3)))))))))) {
          target$0 = t3$2[0];
          end$5 = t3$2[1];
          attr$2 = t3$2[2];
          rest$0 = Array.prototype.slice.call(t1$12, 1);
          $targ$141 = jumptill$0(active$4, start$7, target$0);
          t0$18 = $targ$141;
          if (((t0$18 instanceof Array) && ((t1$15 = t0$18.length), (t1$15 === 2)))) {
            spans$7 = t0$18[0];
            newactive$1 = t0$18[1];
          } else {
            ___match_error($targ$141);
          }
          return spans$7.concat(process_elements$0(target$0, [next$0].concat(newactive$1), rest$0));
        } else {
          return ___match_error(m$13$0);
        }
      }
    }
  });
  thespans$0 = spans$4.sort((function(temp$1$0, temp$2$0) {
    var t1$16;
    var t0$19;
    var t1$17;
    var t0$20;
    var s1$0;
    var e1$0;
    var s2$0;
    var e2$0;
    t0$19 = temp$1$0;
    if (((t0$19 instanceof Array) && ((t1$16 = t0$19.length), (t1$16 === 3)))) {
      s1$0 = t0$19[0];
      e1$0 = t0$19[1];
      t0$19[2];
    } else {
      ___match_error(temp$1$0);
    }
    t0$20 = temp$2$0;
    if (((t0$20 instanceof Array) && ((t1$17 = t0$20.length), (t1$17 === 3)))) {
      s2$0 = t0$20[0];
      e2$0 = t0$20[1];
      t0$20[2];
    } else {
      ___match_error(temp$2$0);
    }
    if ((s1$0 === s2$0)) {
      return (e1$0 - e2$0);
    } else {
      return (s1$0 - s2$0);
    }
  }));
  return process_elements$0(thespans$0[0][0], [], thespans$0);
});
highlight_locations$0 = (function() {
  var m$16;
  var m$17;
  var acc$6;
  var srcs$0;
  var t0$21;
  var locations$0;
  var context$1;
  var m$15$0;
  m$15$0 = arguments;
  t0$21 = m$15$0.length;
  if (((t0$21 >= 1) && (t0$21 <= 2))) {
    locations$0 = m$15$0[0];
    context$1 = ((1 >= t0$21) ? 0 : m$15$0[1]);
    srcs$0 = ({});
    m$16 = null;
    $10: for (var $__0 = locations$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$16 = $__1.value;
      {
        var t1$18;
        var $targ$154;
        var key$0;
        var t0$22;
        var loc$0;
        var cls$1;
        t0$22 = m$16;
        if (((t0$22 instanceof Array) && ((t1$18 = t0$22.length), (t1$18 === 2)))) {
          loc$0 = t0$22[0];
          cls$1 = t0$22[1];
          key$0 = String((loc$0.source && loc$0.source.url));
          if ((!send(srcs$0, key$0))) {
            $targ$154 = [];
            (srcs$0[key$0] = $targ$154);
          }
          send(srcs$0, key$0).push([loc$0, cls$1]);
        } else {
          ___match_error(m$16, "/home/olivier/git/earl-grey/src/location.eg", 4927, 5096);
        }
      }
    }
    return Node(["div"], ({}), ((acc$6 = []), (m$17 = null), (function() {
      $11: for (var $__2 = items(srcs$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        m$17 = $__3.value;
        {
          var t1$19;
          var t0$23;
          var locs$0;
          t0$23 = m$17;
          if (((t0$23 instanceof Array) && ((t1$19 = t0$23.length), (t1$19 === 2)))) {
            t0$23[0];
            locs$0 = t0$23[1];
            acc$6.push(highlight_locations_same_source$0(locs$0, context$1));
          } else {
            ___match_error(m$17, "/home/olivier/git/earl-grey/src/location.eg", 5108, 5195);
          }
        }
      }
    })(), acc$6));
  } else {
    return ___match_error(m$15$0);
  }
});
highlight_locations_same_source$0 = (function() {
  var m$19;
  var acc$7;
  var t1$21;
  var t0$26;
  var m$20;
  var acc$8;
  var m$21;
  var acc$9;
  var loc$1;
  var src$0;
  var $targ$162;
  var l1$4;
  var l2$4;
  var first$0;
  var last$0;
  var t0$24;
  var locations$1;
  var context$2;
  var m$18$0;
  m$18$0 = arguments;
  t0$24 = m$18$0.length;
  if (((t0$24 >= 1) && (t0$24 <= 2))) {
    locations$1 = m$18$0[0];
    context$2 = ((1 >= t0$24) ? 0 : m$18$0[1]);
    loc$1 = merge_locations$0(((acc$7 = []), (m$19 = null), (function() {
      $12: for (var $__0 = locations$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$19 = $__1.value;
        {
          var t1$20;
          var t0$25;
          var x$2;
          var cls$2;
          t0$25 = m$19;
          if (((t0$25 instanceof Array) && ((t1$20 = t0$25.length), (t1$20 === 2)))) {
            x$2 = t0$25[0];
            cls$2 = t0$25[1];
            acc$7.push(x$2);
          } else {
            ___match_error(m$19, "/home/olivier/git/earl-grey/src/location.eg", 5278, 5306);
          }
        }
      }
    })(), acc$7));
    src$0 = loc$1.source;
    $targ$162 = loc$1.linerange();
    t0$26 = $targ$162;
    if (((t0$26 instanceof Array) && ((t1$21 = t0$26.length), (t1$21 === 2)))) {
      l1$4 = t0$26[0];
      l2$4 = t0$26[1];
    } else {
      ___match_error($targ$162);
    }
    first$0 = Math.max(1, (l1$4 - context$2));
    last$0 = Math.min(src$0.nlines, (l2$4 + context$2));
    return Node(["div", ".location"], ({}), [Node(["div", ".source"], ({}), [Node([".sourcefile"], ({}), (src$0.url || "???")), ((acc$8 = []), (m$20 = null), (function() {
      $13: for (var $__0 = locations$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$20 = $__1.value;
        {
          var t1$22;
          var t0$27;
          var loc$2;
          var cls$3;
          t0$27 = m$20;
          if (((t0$27 instanceof Array) && ((t1$22 = t0$27.length), (t1$22 === 2)))) {
            loc$2 = t0$27[0];
            cls$3 = t0$27[1];
            acc$8.push(Node([("." + cls$3), ".sourcepos"], ({}), loc$2.ref()));
          } else {
            ___match_error(m$20, "/home/olivier/git/earl-grey/src/location.eg", 5526, 5672);
          }
        }
      }
    })(), acc$8)]), src$0.highlight_lines(first$0, last$0, ((acc$9 = []), (m$21 = null), (function() {
      $14: for (var $__0 = locations$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$21 = $__1.value;
        {
          var t1$23;
          var t0$28;
          var loc$3;
          var cls$4;
          t0$28 = m$21;
          if (((t0$28 instanceof Array) && ((t1$23 = t0$28.length), (t1$23 === 2)))) {
            loc$3 = t0$28[0];
            cls$4 = t0$28[1];
            acc$9.push([loc$3.start, loc$3.end, [cls$4]]);
          } else {
            ___match_error(m$21, "/home/olivier/git/earl-grey/src/location.eg", 5727, 5783);
          }
        }
      }
    })(), acc$9))]);
  } else {
    return ___match_error(m$18$0);
  }
});
merge_locations$0 = (function(temp$3$0) {
  var t0$29;
  var m$23;
  var acc$10;
  var m$24;
  var acc$11;
  var start$8;
  var end$6;
  var locs$1;
  var loc$4;
  var $$5231$0;
  var $$5232$0;
  var m$22$0;
  var ph$2;
  ph$2 = temp$3$0;
  m$22$0 = ph$2;
  if ((($$5231$0 = (m$22$0 instanceof Array)) && ((t0$29 = m$22$0.length), (t0$29 === 0)))) {
    return Location$0(null, 0, 0);
  } else {
    if (($$5231$0 && (t0$29 === 1))) {
      loc$4 = m$22$0[0];
      return loc$4;
    } else {
      if (($$5231$0 && (t0$29 >= 0))) {
        locs$1 = Array.prototype.slice.call(m$22$0, 0);
        start$8 = send(Math.min, ((acc$10 = []), (m$23 = null), (function() {
          $15: for (var $__0 = locs$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$23 = $__1.value;
            {
              var loc$5;
              loc$5 = m$23;
              acc$10.push(loc$5.start);
            }
          }
        })(), acc$10));
        end$6 = send(Math.max, ((acc$11 = []), (m$24 = null), (function() {
          $16: for (var $__0 = locs$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$24 = $__1.value;
            {
              var loc$6;
              loc$6 = m$24;
              acc$11.push(loc$6.end);
            }
          }
        })(), acc$11));
        return Location$0(locs$1[0].source, start$8, end$6);
      } else {
        return ___match_error(m$22$0);
      }
    }
  }
});
__lt____lt____colon__$0 = (function(x$3, y$0) {
  var $targ$182;
  if ((!getChecker(Location$0)(x$3.location))) {
    $targ$182 = (((!y$0) || getChecker(Location$0)(y$0)) ? y$0 : y$0.location);
    (x$3["location"] = $targ$182);
  }
  return x$3;
});
__plus____plus____colon__$0 = (function(x$4, y$1) {
  var $targ$186;
  var $targ$185;
  var rval$0;
  var x2$0;
  var y2$0;
  x2$0 = (((!x$4) || getChecker(Location$0)(x$4)) ? x$4 : x$4.location);
  y2$0 = (((!y$1) || getChecker(Location$0)(y$1)) ? y$1 : y$1.location);
  $targ$185 = false;
  rval$0 = $targ$185;
  try {
    $targ$186 = merge_locations$0([x2$0, y2$0]);
    rval$0 = $targ$186;
  } catch (excv$0) {
    var $targ$187;
    var e$3;
    e$3 = excv$0;
    $targ$187 = undefined;
    rval$0 = $targ$187;
  }
  return rval$0;
});
format_error$0 = (function() {
  var $targ$194;
  var $targ$193;
  var m$26;
  var acc$12;
  var hls$0;
  var locs$2;
  var $targ$202;
  var $targ$203;
  var $targ$206;
  var $targ$205;
  var rval$1;
  var loc$8;
  var data$0;
  var other$0;
  var url$1;
  var start$9;
  var end$7;
  var loc$7;
  var t0$31;
  var args$0;
  var fmt_args$0;
  var $$5358$0;
  var $$5359$0;
  var $$5360$0;
  var t1$25;
  var t2$4;
  var t1$24;
  var t0$30;
  var e$4;
  var context$3;
  var ph$3$0;
  var m$25$0;
  m$25$0 = arguments;
  t0$30 = m$25$0.length;
  if (((t0$30 >= 1) && (t0$30 <= 2))) {
    t1$24 = m$25$0[0];
    e$4 = t1$24;
    ph$3$0 = t1$24;
    context$3 = ((1 >= t0$30) ? 0 : m$25$0[1]);
    fmt_args$0 = (function(e$5) {
      if ((e$5.args && e$5.args.length)) {
        return Node([".error_args"], ({}), repr$0(e$5.args));
      } else {
        return "";
      }
    });
    t0$31 = ph$3$0;
    if ((getChecker(ErrorFactory(["syntax"]))(t0$31) && (___hasprop(t0$31, "args") && (($targ$193 = t0$31.args), (t1$25 = $targ$193), ((t1$25 instanceof Array) && (($targ$194 = t1$25.length), (t2$4 = $targ$194), (t2$4 === 1))))))) {
      args$0 = t1$25[0];
      hls$0 = ["hl1", "hl2", "hl3", "hl4"];
      locs$2 = ((acc$12 = []), (m$26 = null), (function() {
        $17: for (var $__0 = enumerate(items(args$0))[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$26 = $__1.value;
          {
            var t3$3;
            var t2$5;
            var t1$26;
            var t0$32;
            var i$0;
            var key$1;
            var arg$0;
            t0$32 = m$26;
            if (((t0$32 instanceof Array) && ((t1$26 = t0$32.length), ((t1$26 === 2) && ((i$0 = t0$32[0]), (t2$5 = t0$32[1]), ((t2$5 instanceof Array) && ((t3$3 = t2$5.length), ((t3$3 === 2) && ((key$1 = t2$5[0]), (arg$0 = t2$5[1]), (arg$0 && arg$0.location)))))))))) {
              acc$12.push([arg$0.location, send(hls$0, (i$0 % 4))]);
            } else {
              false;
            }
          }
        }
      })(), acc$12);
      return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), Node([".error_args", ".syntax"], ({}), repr$0(args$0)), highlight_locations$0(locs$2, context$3)]);
    } else {
      if ((($$5359$0 = ___hasprop(t0$31, "location")) && (($targ$202 = t0$31.location), (t1$25 = $targ$202), getChecker(Location$0)(t1$25)))) {
        loc$7 = t1$25;
        return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), fmt_args$0(e$4), highlight_locations$0([[loc$7, "hl1"]], context$3), Node([".traceback"], ({}), (e$4.stack || ""))]);
      } else {
        if (($$5359$0 && ((t1$25 instanceof Array) && (($targ$203 = t1$25.length), (t2$4 = $targ$203), ((t2$4 === 4) && (t1$25[0] === "location")))))) {
          url$1 = t1$25[1];
          start$9 = t1$25[2];
          end$7 = t1$25[3];
          data$0 = (($targ$205 = false), (rval$1 = $targ$205), (function() {
            try {
              $targ$206 = fs$0.readFileSync(url$1, "utf8");
              rval$1 = $targ$206;
            } catch (excv$1) {
              var $targ$207;
              var e$6;
              e$6 = excv$1;
              $targ$207 = null;
              rval$1 = $targ$207;
            }
          })(), rval$1);
          if (data$0) {
            loc$8 = Location$0(Source$0(data$0, url$1), start$9, end$7);
            return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), fmt_args$0(e$4), highlight_locations$0([[loc$8, "hl1"]], context$3), Node([".traceback"], ({}), (Node([], ({}), e$4.stack) || ""))]);
          } else {
            return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), fmt_args$0(e$4), Node([".traceback"], ({}), (Node([], ({}), e$4.stack) || e$4))]);
          }
        } else {
          other$0 = ph$3$0;
          return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), fmt_args$0(e$4), Node([".traceback"], ({}), Node([], ({}), e$4.stack))]);
        }
      }
    }
  } else {
    return ___match_error(m$25$0);
  }
});
display_error$0 = (function(e$7) {
  return __lt____gt__$0(null, format_error$0(e$7));
});
$targ$209 = Source$0;
(exports["Source"] = $targ$209);
$targ$210 = Location$0;
(exports["Location"] = $targ$210);
$targ$211 = highlight$0;
(exports["highlight"] = $targ$211);
$targ$212 = highlight_locations$0;
(exports["highlight_locations"] = $targ$212);
$targ$213 = merge_locations$0;
(exports["merge_locations"] = $targ$213);
$targ$214 = __lt____lt____colon__$0;
(exports["<<:"] = $targ$214);
$targ$215 = __plus____plus____colon__$0;
(exports["++:"] = $targ$215);
$targ$216 = format_error$0;
(exports["format_error"] = $targ$216);
$targ$217 = display_error$0;
(exports["display_error"] = $targ$217);
//# sourceURL=<compile-source>
