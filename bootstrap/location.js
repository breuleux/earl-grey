"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$9;
var $targ$10;
var $targ$11;
var $targ$12;
var $targ$13;
var $targ$14;
var $targ$15;
var $targ$16;
var $targ$17;
var $0$0;
var binsearch$0;
var $1$0;
var __lt____gt__$0;
var repr$0;
var fs$0;
var opg$0;
var Source$0;
var Location$0;
var $targ$0;
var $targ$1;
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
opg$0 = require("opg");
Source$0 = opg$0.Source;
Location$0 = opg$0.Location;
$targ$0 = (function(l1$0, l2$0, spans$0) {
  return highlight_lines$0(this.text, this.counts, [(l1$0 - 1), (l2$0 - 1)], spans$0);
});
(Source$0.prototype["highlight_lines"] = $targ$0);
[];
$targ$1 = (function() {
  var cls$0;
  var context$0;
  var t0$0;
  var m$0$0;
  m$0$0 = arguments;
  t0$0 = m$0$0.length;
  if (((t0$0 >= 0) && (t0$0 <= 2))) {
    if ((0 >= t0$0)) {
      cls$0 = "hl1";
    } else {
      cls$0 = m$0$0[0];
    }
    if ((1 >= t0$0)) {
      context$0 = 0;
    } else {
      context$0 = m$0$0[1];
    }
    return highlight_locations$0([[this, cls$0]], context$0);
  } else {
    return ___match_error(m$0$0);
  }
});
(Location$0.prototype["highlight"] = $targ$1);
[];
highlight$0 = (function highlight() {
  var m$2;
  var acc$0;
  var temp$0;
  var text$0;
  var spans$1;
  var offset$0;
  var t0$1;
  var m$1$0;
  m$1$0 = arguments;
  t0$1 = m$1$0.length;
  if (((t0$1 >= 2) && (t0$1 <= 3))) {
    text$0 = m$1$0[0];
    spans$1 = m$1$0[1];
    if ((2 >= t0$1)) {
      offset$0 = 0;
    } else {
      offset$0 = m$1$0[2];
    }
    return Node([], ({}), ((acc$0 = []), (temp$0 = null), (m$2 = null), (function() {
      $2: for (var $__0 = morsel$0(spans$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$2 = $__1.value;
        {
          var xstart$0;
          var xend$0;
          var start$0;
          var end$0;
          var attributes$0;
          var t0$2;
          var t1$0;
          t0$2 = m$2;
          if (((t0$2 instanceof Array) && ((t1$0 = t0$2.length), (t1$0 === 3)))) {
            start$0 = t0$2[0];
            end$0 = t0$2[1];
            attributes$0 = t0$2[2];
            xstart$0 = Math.max((start$0 - offset$0), 0);
            xend$0 = Math.min((end$0 - offset$0), text$0.length);
            temp$0 = Node([("." + attributes$0.slice(0, 1))], ({}), text$0.slice(xstart$0, xend$0));
            acc$0.push(temp$0);
          } else {
            ___match_error(m$2, "/home/olivier/git/earl-grey/src/location.eg", 565, 855);
          }
        }
      }
    })(), acc$0));
  } else {
    return ___match_error(m$1$0);
  }
});
highlight_lines$0 = (function highlight_lines(text$1, linelocs$0, temp$1$0, spans$2) {
  var t0$3;
  var t1$1;
  var m$3;
  var acc$1;
  var temp$2;
  var l1$1;
  var l2$1;
  t0$3 = temp$1$0;
  if (((t0$3 instanceof Array) && ((t1$1 = t0$3.length), (t1$1 === 2)))) {
    l1$1 = t0$3[0];
    l2$1 = t0$3[1];
  } else {
    ___match_error(temp$1$0);
  }
  return Node(["span"], ({}), ((acc$1 = []), (temp$2 = null), (m$3 = null), (function() {
    $3: for (var $__0 = range(l1$1, l2$1)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$3 = $__1.value;
      {
        var start$1;
        var end$1;
        var lineno$0;
        lineno$0 = m$3;
        start$1 = send(linelocs$0, lineno$0);
        end$1 = send(linelocs$0, (lineno$0 + 1));
        temp$2 = Node(["span"], ({}), [Node([".lineno"], ({}), (lineno$0 + 1)), Node([".source"], ({}), highlight$0(text$1, [[start$1, end$1, []]].concat(clamp$0(spans$2, start$1, end$1))))]);
        acc$1.push(temp$2);
      }
    }
  })(), acc$1));
});
clamp$0 = (function clamp(spans$3, bot$0, top$0) {
  var m$4;
  var acc$2;
  var temp$3;
  acc$2 = [];
  temp$3 = null;
  m$4 = null;
  $4: for (var $__0 = spans$3[$traceurRuntime.toProperty(Symbol.iterator)](),
      $__1; !($__1 = $__0.next()).done; ) {
    m$4 = $__1.value;
    {
      var start$2;
      var end$2;
      var attr$0;
      var t0$4;
      var t1$2;
      t0$4 = m$4;
      if (((t0$4 instanceof Array) && ((t1$2 = t0$4.length), ((t1$2 === 3) && ((start$2 = t0$4[0]), (end$2 = t0$4[1]), (attr$0 = t0$4[2]), ((end$2 >= bot$0) && (start$2 <= top$0))))))) {
        temp$3 = [Math.max(start$2, bot$0), Math.min(end$2, top$0), attr$0];
        acc$2.push(temp$3);
      } else {
        false;
      }
    }
  }
  return acc$2;
});
morsel$0 = (function morsel(spans$4) {
  var jump$0;
  var jumptill$0;
  var process_elements$0;
  var thespans$0;
  jump$0 = (function jump(active$0, bot$1, top$1) {
    var m$5;
    var acc$3;
    var temp$4;
    var m$6;
    var e$0;
    var attributes$1;
    e$0 = send(Math.min, [top$1].concat(((acc$3 = []), (temp$4 = null), (m$5 = null), (function() {
      $6: for (var $__0 = active$0[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$5 = $__1.value;
        {
          var x$0;
          var t0$5;
          var t1$3;
          t0$5 = m$5;
          if (((t0$5 instanceof Array) && ((t1$3 = t0$5.length), (t1$3 === 3)))) {
            t0$5[0];
            x$0 = t0$5[1];
            t0$5[2];
            temp$4 = x$0;
            acc$3.push(temp$4);
          } else {
            ___match_error(m$5, "/home/olivier/git/earl-grey/src/location.eg", 2187, 2220);
          }
        }
      }
    })(), acc$3)));
    attributes$1 = [];
    m$6 = null;
    $5: for (var $__0 = active$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$6 = $__1.value;
      {
        var X$0;
        var t0$6;
        var t1$4;
        t0$6 = m$6;
        if (((t0$6 instanceof Array) && ((t1$4 = t0$6.length), (t1$4 === 3)))) {
          t0$6[0];
          t0$6[1];
          X$0 = t0$6[2];
          attributes$1 = attributes$1.concat(X$0);
        } else {
          ___match_error(m$6, "/home/olivier/git/earl-grey/src/location.eg", 2246, 2287);
        }
      }
    }
    return [e$0, [bot$1, e$0, attributes$1]];
  });
  jumptill$0 = (function jumptill(active$1, bot$2, top$2) {
    var t0$7;
    var t1$5;
    var m$7;
    var acc$4;
    var temp$5;
    var t0$9;
    var t1$7;
    var $targ$2;
    var newbot$0;
    var span$0;
    var newactive$0;
    var $targ$3;
    var spans$5;
    var remainder$0;
    if ((bot$2 === top$2)) {
      return [[], active$1];
    } else {
      $targ$2 = jump$0(active$1, bot$2, top$2);
      t0$7 = $targ$2;
      if (((t0$7 instanceof Array) && ((t1$5 = t0$7.length), (t1$5 === 2)))) {
        newbot$0 = t0$7[0];
        span$0 = t0$7[1];
      } else {
        ___match_error($targ$2);
      }
      [newbot$0, span$0];
      acc$4 = [];
      temp$5 = null;
      m$7 = null;
      $7: for (var $__0 = active$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$7 = $__1.value;
        {
          var x$1;
          var e$1;
          var attr$1;
          var t0$8;
          var t1$6;
          t0$8 = m$7;
          x$1 = t0$8;
          if (((t0$8 instanceof Array) && ((t1$6 = t0$8.length), ((t1$6 === 3) && (t0$8[0], (e$1 = t0$8[1]), (attr$1 = t0$8[2]), (e$1 > newbot$0)))))) {
            temp$5 = x$1;
            acc$4.push(temp$5);
          } else {
            false;
          }
        }
      }
      newactive$0 = acc$4;
      $targ$3 = jumptill$0(newactive$0, newbot$0, top$2);
      t0$9 = $targ$3;
      if (((t0$9 instanceof Array) && ((t1$7 = t0$9.length), (t1$7 === 2)))) {
        spans$5 = t0$9[0];
        remainder$0 = t0$9[1];
      } else {
        ___match_error($targ$3);
      }
      [spans$5, remainder$0];
      return [[span$0].concat(spans$5), remainder$0];
    }
  });
  process_elements$0 = (function process_elements(start$3, active$2, rem$0) {
    var m$9;
    var acc$5;
    var temp$6;
    var t0$12;
    var t1$10;
    var top$3;
    var bot$3;
    var $targ$4;
    var spans$6;
    var t0$13;
    var t1$11;
    var $targ$5;
    var spans$7;
    var newactive$1;
    var start$5;
    var active$4;
    var next$0;
    var target$0;
    var end$3;
    var attr$2;
    var rest$0;
    var start$4;
    var active$3;
    var $$4838$0;
    var $$4839$0;
    var $$4840$0;
    var t0$10;
    var t1$8;
    var t2$0;
    var t3$0;
    var t4$0;
    var m$8$0;
    m$8$0 = [start$3, active$2, rem$0];
    if ((($$4838$0 = (m$8$0 instanceof Array)) && ((t0$10 = m$8$0.length), (($$4840$0 = (t0$10 === 3)) && (m$8$0[0], (t1$8 = m$8$0[1]), ((t1$8 instanceof Array) && ((t2$0 = t1$8.length), ((t2$0 === 0) && ((t3$0 = m$8$0[2]), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), (t4$0 === 0)))))))))))) {
      return [];
    } else {
      if (($$4840$0 && ((start$4 = m$8$0[0]), (active$3 = m$8$0[1]), (t1$8 = m$8$0[2]), ((t1$8 instanceof Array) && ((t2$0 = t1$8.length), (t2$0 === 0)))))) {
        top$3 = send(Math.max, ((acc$5 = []), (temp$6 = null), (m$9 = null), (function() {
          $8: for (var $__0 = active$3[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$9 = $__1.value;
            {
              var e$2;
              var t0$11;
              var t1$9;
              t0$11 = m$9;
              if (((t0$11 instanceof Array) && ((t1$9 = t0$11.length), (t1$9 === 3)))) {
                t0$11[0];
                e$2 = t0$11[1];
                t0$11[2];
                temp$6 = e$2;
                acc$5.push(temp$6);
              } else {
                ___match_error(m$9, "/home/olivier/git/earl-grey/src/location.eg", 2900, 2928);
              }
            }
          }
        })(), acc$5));
        bot$3 = Math.min(start$4, top$3);
        $targ$4 = jumptill$0(active$3, start$4, top$3);
        t0$12 = $targ$4;
        if (((t0$12 instanceof Array) && ((t1$10 = t0$12.length), (t1$10 === 2)))) {
          spans$6 = t0$12[0];
          t0$12[1];
        } else {
          ___match_error($targ$4);
        }
        return spans$6;
      } else {
        if (($$4840$0 && ((start$5 = m$8$0[0]), (active$4 = m$8$0[1]), (t1$8 = m$8$0[2]), ((t1$8 instanceof Array) && ((t2$0 = t1$8.length), ((t2$0 >= 1) && ((t3$0 = t1$8[0]), (next$0 = t3$0), ((t3$0 instanceof Array) && ((t4$0 = t3$0.length), (t4$0 === 3)))))))))) {
          target$0 = t3$0[0];
          end$3 = t3$0[1];
          attr$2 = t3$0[2];
          rest$0 = Array.prototype.slice.call(t1$8, 1);
          $targ$5 = jumptill$0(active$4, start$5, target$0);
          t0$13 = $targ$5;
          if (((t0$13 instanceof Array) && ((t1$11 = t0$13.length), (t1$11 === 2)))) {
            spans$7 = t0$13[0];
            newactive$1 = t0$13[1];
          } else {
            ___match_error($targ$5);
          }
          [spans$7, newactive$1];
          return spans$7.concat(process_elements$0(target$0, [next$0].concat(newactive$1), rest$0));
        } else {
          return ___match_error(m$8$0);
        }
      }
    }
  });
  thespans$0 = spans$4.sort((function(temp$7$0, temp$8$0) {
    var t0$14;
    var t1$12;
    var t0$15;
    var t1$13;
    var s1$0;
    var e1$0;
    var s2$0;
    var e2$0;
    t0$14 = temp$7$0;
    if (((t0$14 instanceof Array) && ((t1$12 = t0$14.length), (t1$12 === 3)))) {
      s1$0 = t0$14[0];
      e1$0 = t0$14[1];
      t0$14[2];
    } else {
      ___match_error(temp$7$0);
    }
    t0$15 = temp$8$0;
    if (((t0$15 instanceof Array) && ((t1$13 = t0$15.length), (t1$13 === 3)))) {
      s2$0 = t0$15[0];
      e2$0 = t0$15[1];
      t0$15[2];
    } else {
      ___match_error(temp$8$0);
    }
    if ((s1$0 === s2$0)) {
      return (e1$0 - e2$0);
    } else {
      return (s1$0 - s2$0);
    }
  }));
  return process_elements$0(thespans$0[0][0], [], thespans$0);
});
highlight_locations$0 = (function highlight_locations() {
  var m$11;
  var m$12;
  var acc$6;
  var temp$9;
  var srcs$0;
  var locations$0;
  var context$1;
  var t0$16;
  var m$10$0;
  m$10$0 = arguments;
  t0$16 = m$10$0.length;
  if (((t0$16 >= 1) && (t0$16 <= 2))) {
    locations$0 = m$10$0[0];
    if ((1 >= t0$16)) {
      context$1 = 0;
    } else {
      context$1 = m$10$0[1];
    }
    srcs$0 = ({});
    m$11 = null;
    $9: for (var $__0 = locations$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$11 = $__1.value;
      {
        var $targ$6;
        var key$0;
        var loc$0;
        var cls$1;
        var t0$17;
        var t1$14;
        t0$17 = m$11;
        if (((t0$17 instanceof Array) && ((t1$14 = t0$17.length), (t1$14 === 2)))) {
          loc$0 = t0$17[0];
          cls$1 = t0$17[1];
          key$0 = String((loc$0.source && loc$0.source.url));
          if ((!send(srcs$0, key$0))) {
            $targ$6 = [];
            (srcs$0[key$0] = $targ$6);
            [];
          }
          send(srcs$0, key$0).push([loc$0, cls$1]);
        } else {
          ___match_error(m$11, "/home/olivier/git/earl-grey/src/location.eg", 3520, 3689);
        }
      }
    }
    return Node(["div"], ({}), ((acc$6 = []), (temp$9 = null), (m$12 = null), (function() {
      $10: for (var $__2 = items(srcs$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__3; !($__3 = $__2.next()).done; ) {
        m$12 = $__3.value;
        {
          var locs$0;
          var t0$18;
          var t1$15;
          t0$18 = m$12;
          if (((t0$18 instanceof Array) && ((t1$15 = t0$18.length), (t1$15 === 2)))) {
            t0$18[0];
            locs$0 = t0$18[1];
            temp$9 = highlight_locations_same_source$0(locs$0, context$1);
            acc$6.push(temp$9);
          } else {
            ___match_error(m$12, "/home/olivier/git/earl-grey/src/location.eg", 3701, 3788);
          }
        }
      }
    })(), acc$6));
  } else {
    return ___match_error(m$10$0);
  }
});
highlight_locations_same_source$0 = (function highlight_locations_same_source() {
  var m$14;
  var acc$7;
  var temp$10;
  var t0$21;
  var t1$17;
  var m$15;
  var acc$8;
  var temp$11;
  var m$16;
  var acc$9;
  var temp$12;
  var loc$1;
  var src$0;
  var $targ$7;
  var l1$2;
  var l2$2;
  var first$0;
  var last$0;
  var locations$1;
  var context$2;
  var t0$19;
  var m$13$0;
  m$13$0 = arguments;
  t0$19 = m$13$0.length;
  if (((t0$19 >= 1) && (t0$19 <= 2))) {
    locations$1 = m$13$0[0];
    if ((1 >= t0$19)) {
      context$2 = 0;
    } else {
      context$2 = m$13$0[1];
    }
    loc$1 = merge_locations$0(((acc$7 = []), (temp$10 = null), (m$14 = null), (function() {
      $11: for (var $__0 = locations$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$14 = $__1.value;
        {
          var x$2;
          var cls$2;
          var t0$20;
          var t1$16;
          t0$20 = m$14;
          if (((t0$20 instanceof Array) && ((t1$16 = t0$20.length), (t1$16 === 2)))) {
            x$2 = t0$20[0];
            cls$2 = t0$20[1];
            temp$10 = x$2;
            acc$7.push(temp$10);
          } else {
            ___match_error(m$14, "/home/olivier/git/earl-grey/src/location.eg", 3871, 3899);
          }
        }
      }
    })(), acc$7));
    src$0 = loc$1.source;
    $targ$7 = loc$1.linerange();
    t0$21 = $targ$7;
    if (((t0$21 instanceof Array) && ((t1$17 = t0$21.length), (t1$17 === 2)))) {
      l1$2 = t0$21[0];
      l2$2 = t0$21[1];
    } else {
      ___match_error($targ$7);
    }
    [l1$2, l2$2];
    first$0 = Math.max(1, (l1$2 - context$2));
    last$0 = Math.min(src$0.nlines, (l2$2 + context$2));
    return Node(["div", ".location"], ({}), [Node(["div", ".source"], ({}), [Node([".sourcefile"], ({}), (src$0.url || "???")), ((acc$8 = []), (temp$11 = null), (m$15 = null), (function() {
      $12: for (var $__0 = locations$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$15 = $__1.value;
        {
          var loc$2;
          var cls$3;
          var t0$22;
          var t1$18;
          t0$22 = m$15;
          if (((t0$22 instanceof Array) && ((t1$18 = t0$22.length), (t1$18 === 2)))) {
            loc$2 = t0$22[0];
            cls$3 = t0$22[1];
            temp$11 = Node([("." + cls$3), ".sourcepos"], ({}), loc$2.ref());
            acc$8.push(temp$11);
          } else {
            ___match_error(m$15, "/home/olivier/git/earl-grey/src/location.eg", 4119, 4265);
          }
        }
      }
    })(), acc$8)]), src$0.highlight_lines(first$0, last$0, ((acc$9 = []), (temp$12 = null), (m$16 = null), (function() {
      $13: for (var $__0 = locations$1[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$16 = $__1.value;
        {
          var loc$3;
          var cls$4;
          var t0$23;
          var t1$19;
          t0$23 = m$16;
          if (((t0$23 instanceof Array) && ((t1$19 = t0$23.length), (t1$19 === 2)))) {
            loc$3 = t0$23[0];
            cls$4 = t0$23[1];
            temp$12 = [loc$3.start, loc$3.end, [cls$4]];
            acc$9.push(temp$12);
          } else {
            ___match_error(m$16, "/home/olivier/git/earl-grey/src/location.eg", 4320, 4376);
          }
        }
      }
    })(), acc$9))]);
  } else {
    return ___match_error(m$13$0);
  }
});
merge_locations$0 = (function merge_locations(ph$0$0) {
  var m$17;
  var acc$10;
  var temp$13;
  var m$18;
  var acc$11;
  var temp$14;
  var start$6;
  var end$4;
  var locs$1;
  var loc$4;
  var $$5290$0;
  var $$5291$0;
  var t0$24;
  var t1$20;
  t0$24 = ph$0$0;
  t1$20 = t0$24.length;
  if ((t1$20 === 0)) {
    return Location$0(null, 0, 0);
  } else {
    if ((t1$20 === 1)) {
      loc$4 = t0$24[0];
      return loc$4;
    } else {
      if ((t1$20 >= 0)) {
        locs$1 = Array.prototype.slice.call(t0$24, 0);
        start$6 = send(Math.min, ((acc$10 = []), (temp$13 = null), (m$17 = null), (function() {
          $14: for (var $__0 = locs$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$17 = $__1.value;
            {
              var loc$5;
              loc$5 = m$17;
              temp$13 = loc$5.start;
              acc$10.push(temp$13);
            }
          }
        })(), acc$10));
        end$4 = send(Math.max, ((acc$11 = []), (temp$14 = null), (m$18 = null), (function() {
          $15: for (var $__0 = locs$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$18 = $__1.value;
            {
              var loc$6;
              loc$6 = m$18;
              temp$14 = loc$6.end;
              acc$11.push(temp$14);
            }
          }
        })(), acc$11));
        return Location$0(locs$1[0].source, start$6, end$4);
      } else {
        return ___match_error(ph$0$0);
      }
    }
  }
});
__lt____lt____colon__$0 = (function(x$3, y$0) {
  var $targ$8;
  if ((!getChecker(Location$0)(x$3.location))) {
    if (((!y$0) || getChecker(Location$0)(y$0))) {
      $targ$8 = y$0;
    } else {
      $targ$8 = y$0.location;
    }
    (x$3["location"] = $targ$8);
    [];
  }
  return x$3;
});
__plus____plus____colon__$0 = (function(x$4, y$1) {
  var rval$0;
  var x2$0;
  var y2$0;
  if (((!x$4) || getChecker(Location$0)(x$4))) {
    x2$0 = x$4;
  } else {
    x2$0 = x$4.location;
  }
  if (((!y$1) || getChecker(Location$0)(y$1))) {
    y2$0 = y$1;
  } else {
    y2$0 = y$1.location;
  }
  rval$0 = false;
  try {
    rval$0 = merge_locations$0([x2$0, y2$0]);
    rval$0;
  } catch (excv$0) {
    var e$3;
    e$3 = excv$0;
    rval$0 = undefined;
    rval$0;
  }
  return rval$0;
});
format_error$0 = (function format_error() {
  var m$20;
  var acc$12;
  var temp$15;
  var hls$0;
  var locs$2;
  var rval$1;
  var loc$8;
  var data$0;
  var other$0;
  var url$0;
  var start$7;
  var end$5;
  var loc$7;
  var args$0;
  var fmt_args$0;
  var $$5432$0;
  var $$5433$0;
  var $$5434$0;
  var t0$26;
  var t1$22;
  var t2$1;
  var e$4;
  var ph$2$0;
  var context$3;
  var t0$25;
  var t1$21;
  var m$19$0;
  m$19$0 = arguments;
  t0$25 = m$19$0.length;
  if (((t0$25 >= 1) && (t0$25 <= 2))) {
    t1$21 = m$19$0[0];
    e$4 = t1$21;
    ph$2$0 = t1$21;
    if ((1 >= t0$25)) {
      context$3 = 0;
    } else {
      context$3 = m$19$0[1];
    }
    fmt_args$0 = (function fmt_args(e$5) {
      if ((e$5.args && e$5.args.length)) {
        return Node([".error_args"], ({}), repr$0(e$5.args));
      } else {
        return "";
      }
    });
    t0$26 = ph$2$0;
    if ((getChecker(ErrorFactory(["syntax"]))(t0$26) && (___hasprop(t0$26, "args") && ((t1$22 = t0$26.args), ((t1$22 instanceof Array) && ((t2$1 = t1$22.length), (t2$1 === 1))))))) {
      args$0 = t1$22[0];
      hls$0 = ["hl1", "hl2", "hl3", "hl4"];
      acc$12 = [];
      temp$15 = null;
      m$20 = null;
      $16: for (var $__0 = enumerate(items(args$0))[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$20 = $__1.value;
        {
          var i$0;
          var key$1;
          var arg$0;
          var t0$27;
          var t1$23;
          var t2$2;
          var t3$1;
          t0$27 = m$20;
          if (((t0$27 instanceof Array) && ((t1$23 = t0$27.length), ((t1$23 === 2) && ((i$0 = t0$27[0]), (t2$2 = t0$27[1]), ((t2$2 instanceof Array) && ((t3$1 = t2$2.length), ((t3$1 === 2) && ((key$1 = t2$2[0]), (arg$0 = t2$2[1]), (arg$0 && arg$0.location)))))))))) {
            temp$15 = [arg$0.location, send(hls$0, (i$0 % 4))];
            acc$12.push(temp$15);
          } else {
            false;
          }
        }
      }
      locs$2 = acc$12;
      return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), Node([".error_args", ".syntax"], ({}), repr$0(args$0)), highlight_locations$0(locs$2, context$3)]);
    } else {
      if ((($$5433$0 = ___hasprop(t0$26, "location")) && ((t1$22 = t0$26.location), getChecker(Location$0)(t1$22)))) {
        loc$7 = t1$22;
        return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), fmt_args$0(e$4), highlight_locations$0([[loc$7, "hl1"]], context$3), Node([".traceback"], ({}), (e$4.stack || ""))]);
      } else {
        if (($$5433$0 && ((t1$22 instanceof Array) && ((t2$1 = t1$22.length), ((t2$1 === 4) && (t1$22[0] === "location")))))) {
          url$0 = t1$22[1];
          start$7 = t1$22[2];
          end$5 = t1$22[3];
          rval$1 = false;
          try {
            rval$1 = fs$0.readFileSync(url$0, "utf8");
            rval$1;
          } catch (excv$1) {
            var e$6;
            e$6 = excv$1;
            rval$1 = null;
            rval$1;
          }
          data$0 = rval$1;
          if (data$0) {
            loc$8 = Location$0(Source$0(data$0, url$0), start$7, end$5);
            return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), fmt_args$0(e$4), highlight_locations$0([[loc$8, "hl1"]], context$3), Node([".traceback"], ({}), (Node([], ({}), e$4.stack) || ""))]);
          } else {
            return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), fmt_args$0(e$4), Node([".traceback"], ({}), (Node([], ({}), e$4.stack) || e$4))]);
          }
        } else {
          other$0 = ph$2$0;
          return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$4.name), Node([".error_message"], ({}), e$4.message)]), fmt_args$0(e$4), Node([".traceback"], ({}), Node([], ({}), e$4.stack))]);
        }
      }
    }
  } else {
    return ___match_error(m$19$0);
  }
});
display_error$0 = (function display_error(e$7) {
  return __lt____gt__$0(null, format_error$0(e$7));
});
$targ$9 = Source$0;
(exports["Source"] = $targ$9);
[];
$targ$10 = Location$0;
(exports["Location"] = $targ$10);
[];
$targ$11 = highlight$0;
(exports["highlight"] = $targ$11);
[];
$targ$12 = highlight_locations$0;
(exports["highlight_locations"] = $targ$12);
[];
$targ$13 = merge_locations$0;
(exports["merge_locations"] = $targ$13);
[];
$targ$14 = __lt____lt____colon__$0;
(exports["<<:"] = $targ$14);
[];
$targ$15 = __plus____plus____colon__$0;
(exports["++:"] = $targ$15);
[];
$targ$16 = format_error$0;
(exports["format_error"] = $targ$16);
[];
$targ$17 = display_error$0;
(exports["display_error"] = $targ$17);
[];
//# sourceURL=<compile-source>
