"use strict";
require("earlgrey-runtime");
var $8104 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var accum$6083;
var accum$6087;
var accum$6447;
var accum$6451;
var $5871$5901;
var binsearch$5902;
var $5872$5903;
var __lt____gt__$5904;
var repr$5905;
var fs$5906;
var Source$5907;
var Location$5908;
var highlight$5909;
var highlight_lines$5910;
var clamp$5911;
var morsel$5912;
var highlight_locations$5913;
var highlight_locations_same_source$5914;
var merge_locations$5915;
var __lt____lt____colon__$5916;
var __plus____plus____colon__$5917;
var format_error$5918;
var display_error$5919;
($5871$5901 = require("./util"));
(binsearch$5902 = $5871$5901.binsearch);
($5872$5903 = require("./pp"));
(__lt____gt__$5904 = $5872$5903["<>"]);
(repr$5905 = $5872$5903.repr);
(fs$5906 = require("fs"));
(Source$5907 = (function() {
  var $index$6007;
  var $length$6001;
  var temp$5995;
  var curr$5976;
  var text$5962;
  var url$5963;
  var t0$5958;
  var $5949$5953;
  var it$0$5944;
  (it$0$5944 = ((!getChecker(Source$5907)(this)) ? Object.create(Source$5907.prototype) : this));
  ($5949$5953 = arguments);
  (t0$5958 = $5949$5953.length);
  if (((t0$5958 >= 1) && (t0$5958 <= 2))) {
    (text$5962 = $5949$5953[0]);
    (url$5963 = ((1 >= t0$5958) ? false : $5949$5953[1]));
    (it$0$5944["text"] = text$5962);
    (it$0$5944["url"] = url$5963);
    (it$0$5944["counts"] = []);
    (curr$5976 = 0);
    (temp$5995 = text$5962.split("\n"));
    ($length$6001 = temp$5995.length);
    ($index$6007 = 0);
    $5977: for (; ($index$6007 < $length$6001); ($index$6007++)) {
      var line$6024;
      var m$6016;
      (m$6016 = temp$5995[$index$6007]);
      (line$6024 = m$6016);
      it$0$5944.counts.push(curr$5976);
      (curr$5976 = (curr$5976 + (line$6024.length + 1)));
    }
    it$0$5944.counts.push(curr$5976);
    (it$0$5944["nlines"] = (it$0$5944.counts.length - 1));
  } else {
    ___match_error($5949$5953);
  }
  return it$0$5944;
}));
(Source$5907.prototype["linecol"] = (function(pos$6037) {
  var line$6053;
  var col$6054;
  var it$0$6041;
  var self$6042;
  (it$0$6041 = this);
  (self$6042 = this);
  (line$6053 = binsearch$5902(it$0$6041.counts, pos$6037));
  (col$6054 = (pos$6037 - $8104(it$0$6041.counts, (line$6053 - 1))));
  return [line$6053, col$6054];
}));
(Source$5907.prototype["highlight_lines"] = (function(l1$6065, l2$6066, spans$6067) {
  var it$0$6071;
  var self$6072;
  (it$0$6071 = this);
  (self$6072 = this);
  return highlight_lines$5910(it$0$6071.text, it$0$6071.counts, [(l1$6065 - 1), (l2$6066 - 1)], spans$6067);
}));
__amp____colon__(Source$5907, __amp____colon__(((accum$6083 = ({})), ((accum$6083["::name"] = "Source"), accum$6083)), ((accum$6087 = ({})), ((accum$6087["::egclass"] = true), accum$6087))));
Source$5907;
(Location$5908 = (function(source$6094, start$6095, end$6096) {
  var it$0$6099;
  (it$0$6099 = ((!getChecker(Location$5908)(this)) ? Object.create(Location$5908.prototype) : this));
  (it$0$6099["source"] = (source$6094 || Source$5907("", null)));
  (it$0$6099["start"] = start$6095);
  (it$0$6099["end"] = end$6096);
  return it$0$6099;
}));
(Location$5908.prototype["text"] = (function() {
  var it$0$6126;
  var self$6127;
  (it$0$6126 = this);
  (self$6127 = this);
  return it$0$6126.source.text.slice(it$0$6126.start, it$0$6126.end);
}));
(Location$5908.prototype["at_start"] = (function() {
  var it$0$6142;
  var self$6143;
  (it$0$6142 = this);
  (self$6143 = this);
  return Location$5908(it$0$6142.source, it$0$6142.start, it$0$6142.start);
}));
(Location$5908.prototype["at_end"] = (function() {
  var it$0$6158;
  var self$6159;
  (it$0$6158 = this);
  (self$6159 = this);
  return Location$5908(it$0$6158.source, it$0$6158.end, it$0$6158.end);
}));
(Location$5908.prototype["linerange"] = (function() {
  var l2$6230;
  var t0$6221;
  var t1$6222;
  var l1$6201;
  var $6185$6202;
  var t0$6195;
  var t1$6196;
  var t2$6197;
  var $6183$6190;
  var it$0$6174;
  var self$6175;
  (it$0$6174 = this);
  (self$6175 = this);
  ($6183$6190 = it$0$6174.linecol());
  if ((($6183$6190 instanceof Array) && (((t0$6195 = $6183$6190.length)), ((t0$6195 === 2) && (((t1$6196 = $6183$6190[0])), ((t1$6196 instanceof Array) && (((t2$6197 = t1$6196.length)), (t2$6197 === 2)))))))) {
    (l1$6201 = t1$6196[0]);
    t1$6196[1];
    ($6185$6202 = $6183$6190[1]);
    if (($6185$6202 === null)) {
      return [l1$6201, l1$6201];
    } else {
      (t0$6221 = $6185$6202);
      if (((t0$6221 instanceof Array) && (((t1$6222 = t0$6221.length)), (t1$6222 === 2)))) {
        (l2$6230 = t0$6221[0]);
        t0$6221[1];
        return [l1$6201, l2$6230];
      } else {
        ___match_error($6185$6202, "/home/olivier/git/earl-grey/src/location.eg", 1080, 1085);
      }
    }
  } else {
    ___match_error($6183$6190);
  }
}));
(Location$5908.prototype["linecol"] = (function() {
  var start$6265;
  var end$6266;
  var it$0$6253;
  var self$6254;
  (it$0$6253 = this);
  (self$6254 = this);
  (start$6265 = it$0$6253.source.linecol(it$0$6253.start));
  (end$6266 = ((it$0$6253.start === it$0$6253.end) ? null : it$0$6253.source.linecol((it$0$6253.end - 1))));
  return [start$6265, end$6266];
}));
(Location$5908.prototype["ref"] = (function() {
  var otherwise$6400;
  var $6380$6389;
  var $6376$6383;
  var l2$6352;
  var c2$6353;
  var t0$6341;
  var t1$6342;
  var t2$6343;
  var t3$6344;
  var l1$6309;
  var c1$6310;
  var $6291$6311;
  var t0$6301;
  var t1$6302;
  var t2$6303;
  var t3$6304;
  var t4$6305;
  var $6289$6296;
  var it$0$6280;
  var self$6281;
  (it$0$6280 = this);
  (self$6281 = this);
  ($6289$6296 = it$0$6280.linecol());
  if ((($6289$6296 instanceof Array) && (((t0$6301 = $6289$6296.length)), ((t0$6301 === 2) && (((t1$6302 = $6289$6296[0])), ((t1$6302 instanceof Array) && (((t2$6303 = t1$6302.length)), ((t2$6303 === 2) && (((t3$6304 = [true, String(t1$6302[0])])), (t3$6304[0] && ((l1$6309 = t3$6304[1]), (((t4$6305 = [true, String(t1$6302[1])])), t4$6305[0])))))))))))) {
    (c1$6310 = t4$6305[1]);
    ($6291$6311 = $6289$6296[1]);
    if (($6291$6311 === null)) {
      return ((l1$6309 + ":") + c1$6310);
    } else {
      (t0$6341 = $6291$6311);
      if (((t0$6341 instanceof Array) && (((t1$6342 = t0$6341.length)), ((t1$6342 === 2) && (((t2$6343 = [true, String(t0$6341[0])])), (t2$6343[0] && ((l2$6352 = t2$6343[1]), (((t3$6344 = [true, String(t0$6341[1])])), t3$6344[0])))))))) {
        (c2$6353 = t3$6344[1]);
        ($6376$6383 = null);
        $6376$6383;
        if (((l1$6309 === l2$6352) && (c1$6310 === c2$6353))) {
          return ((l1$6309 + ":") + c1$6310);
        } else {
          if ((l1$6309 === l2$6352)) {
            return ((((l1$6309 + ":") + c1$6310) + "-") + c2$6353);
          } else {
            (otherwise$6400 = $6376$6383);
            return ((((((l1$6309 + ":") + c1$6310) + "-") + l2$6352) + ":") + c2$6353);
          }
        }
      } else {
        ___match_error($6291$6311, "/home/olivier/git/earl-grey/src/location.eg", 1422, 1427);
      }
    }
  } else {
    ___match_error($6289$6296);
  }
}));
(Location$5908.prototype["highlight"] = (function() {
  var cls$6434;
  var context$6435;
  var t0$6430;
  var $6413$6425;
  var it$0$6415;
  var self$6416;
  (it$0$6415 = this);
  (self$6416 = this);
  ($6413$6425 = arguments);
  (t0$6430 = $6413$6425.length);
  if (((t0$6430 >= 0) && (t0$6430 <= 2))) {
    (cls$6434 = ((0 >= t0$6430) ? "hl1" : $6413$6425[0]));
    (context$6435 = ((1 >= t0$6430) ? 0 : $6413$6425[1]));
    return highlight_locations$5913([[it$0$6415, cls$6434]], context$6435);
  } else {
    ___match_error($6413$6425);
  }
}));
__amp____colon__(Location$5908, __amp____colon__(((accum$6447 = ({})), ((accum$6447["::name"] = "Location"), accum$6447)), ((accum$6451 = ({})), ((accum$6451["::egclass"] = true), accum$6451))));
Location$5908;
(highlight$5909 = (function() {
  var $index$6503;
  var $length$6497;
  var temp$6491;
  var acc$6485;
  var text$6471;
  var spans$6472;
  var offset$6473;
  var t0$6467;
  var $6458$6462;
  ($6458$6462 = arguments);
  (t0$6467 = $6458$6462.length);
  if (((t0$6467 >= 2) && (t0$6467 <= 3))) {
    (text$6471 = $6458$6462[0]);
    (spans$6472 = $6458$6462[1]);
    (offset$6473 = ((2 >= t0$6467) ? 0 : $6458$6462[2]));
    return Node([], ({}), (((acc$6485 = [])), (((temp$6491 = morsel$5912(spans$6472))), ((($length$6497 = temp$6491.length)), ((($index$6503 = 0)), (function() {
      $6480: for (; ($index$6503 < $length$6497); ($index$6503++)) {
        var xstart$6540;
        var xend$6541;
        var start$6522;
        var end$6523;
        var attributes$6524;
        var t0$6517;
        var t1$6518;
        var m$6512;
        (m$6512 = temp$6491[$index$6503]);
        (t0$6517 = m$6512);
        if (((t0$6517 instanceof Array) && (((t1$6518 = t0$6517.length)), (t1$6518 === 3)))) {
          (start$6522 = t0$6517[0]);
          (end$6523 = t0$6517[1]);
          (attributes$6524 = t0$6517[2]);
          acc$6485.push((((xstart$6540 = Math.max((start$6522 - offset$6473), 0))), ((xend$6541 = Math.min((end$6523 - offset$6473), text$6471.length))), Node([("." + attributes$6524.slice(0, 1))], ({}), text$6471.slice(xstart$6540, xend$6541))));
        } else {
          ___match_error(m$6512, "/home/olivier/git/earl-grey/src/location.eg", 1972, 2262);
        }
      }
    })()))), acc$6485));
  } else {
    ___match_error($6458$6462);
  }
}));
(highlight_lines$5910 = (function(text$6559, linelocs$6560, $6556$6561, spans$6562) {
  var t0$6567;
  var t1$6568;
  var $index$6604;
  var $length$6598;
  var temp$6592;
  var acc$6586;
  var l1$6564;
  var l2$6565;
  (t0$6567 = $6556$6561);
  if (((t0$6567 instanceof Array) && (((t1$6568 = t0$6567.length)), (t1$6568 === 2)))) {
    (l1$6564 = t0$6567[0]);
    (l2$6565 = t0$6567[1]);
  } else {
    ___match_error($6556$6561);
  }
  return Node(["span"], ({}), (((acc$6586 = [])), (((temp$6592 = range(l1$6564, l2$6565))), ((($length$6598 = temp$6592.length)), ((($index$6604 = 0)), (function() {
    $6581: for (; ($index$6604 < $length$6598); ($index$6604++)) {
      var start$6627;
      var end$6628;
      var lineno$6621;
      var m$6613;
      (m$6613 = temp$6592[$index$6604]);
      (lineno$6621 = m$6613);
      acc$6586.push((((start$6627 = $8104(linelocs$6560, lineno$6621))), ((end$6628 = $8104(linelocs$6560, (lineno$6621 + 1)))), Node(["span"], ({}), [Node([".lineno"], ({}), (lineno$6621 + 1)), Node([".source"], ({}), highlight$5909(text$6559, [[start$6627, end$6628, []]].concat(clamp$5911(spans$6562, start$6627, end$6628))))])));
    }
  })()))), acc$6586));
}));
(clamp$5911 = (function(spans$6640, bot$6641, top$6642) {
  var $index$6667;
  var $length$6661;
  var temp$6655;
  var acc$6649;
  (acc$6649 = []);
  (temp$6655 = spans$6640);
  ($length$6661 = temp$6655.length);
  ($index$6667 = 0);
  $6644: for (; ($index$6667 < $length$6661); ($index$6667++)) {
    var start$6686;
    var end$6687;
    var attr$6688;
    var t0$6681;
    var t1$6682;
    var m$6676;
    (m$6676 = temp$6655[$index$6667]);
    (t0$6681 = m$6676);
    if (((t0$6681 instanceof Array) && (((t1$6682 = t0$6681.length)), ((t1$6682 === 3) && ((start$6686 = t0$6681[0]), ((end$6687 = t0$6681[1]), ((attr$6688 = t0$6681[2]), ((end$6687 >= bot$6641) && (start$6686 <= top$6642))))))))) {
      acc$6649.push([Math.max(start$6686, bot$6641), Math.min(end$6687, top$6642), attr$6688]);
    } else {
      false;
    }
  }
  return acc$6649;
}));
(morsel$5912 = (function(spans$6710) {
  var jump$6717;
  var jumptill$6718;
  var process_elements$6719;
  var thespans$6720;
  (jump$6717 = (function(active$6725, bot$6726, top$6727) {
    var $index$6763;
    var $length$6757;
    var temp$6751;
    var acc$6745;
    var $index$6816;
    var $length$6810;
    var temp$6804;
    var e$6732;
    var attributes$6733;
    (e$6732 = $8104(Math.min, [top$6727].concat((((acc$6745 = [])), (((temp$6751 = active$6725)), ((($length$6757 = temp$6751.length)), ((($index$6763 = 0)), (function() {
      $6740: for (; ($index$6763 < $length$6757); ($index$6763++)) {
        var x$6782;
        var t0$6777;
        var t1$6778;
        var m$6772;
        (m$6772 = temp$6751[$index$6763]);
        (t0$6777 = m$6772);
        if (((t0$6777 instanceof Array) && (((t1$6778 = t0$6777.length)), (t1$6778 === 3)))) {
          t0$6777[0];
          (x$6782 = t0$6777[1]);
          t0$6777[2];
          acc$6745.push(x$6782);
        } else {
          ___match_error(m$6772, "/home/olivier/git/earl-grey/src/location.eg", 3595, 3628);
        }
      }
    })()))), acc$6745))));
    (attributes$6733 = []);
    (temp$6804 = active$6725);
    ($length$6810 = temp$6804.length);
    ($index$6816 = 0);
    $6734: for (; ($index$6816 < $length$6810); ($index$6816++)) {
      var X$6835;
      var t0$6830;
      var t1$6831;
      var m$6825;
      (m$6825 = temp$6804[$index$6816]);
      (t0$6830 = m$6825);
      if (((t0$6830 instanceof Array) && (((t1$6831 = t0$6830.length)), (t1$6831 === 3)))) {
        t0$6830[0];
        t0$6830[1];
        (X$6835 = t0$6830[2]);
        (attributes$6733 = attributes$6733.concat(X$6835));
      } else {
        ___match_error(m$6825, "/home/olivier/git/earl-grey/src/location.eg", 3654, 3695);
      }
    }
    return [e$6732, [bot$6726, e$6732, attributes$6733]];
  }));
  (jumptill$6718 = (function(active$6854, bot$6855, top$6856) {
    var t0$6868;
    var t1$6869;
    var $index$6907;
    var $length$6901;
    var temp$6895;
    var acc$6889;
    var t0$6947;
    var t1$6948;
    var newbot$6862;
    var span$6863;
    var newactive$6864;
    var spans$6865;
    var remainder$6866;
    if ((bot$6855 === top$6856)) {
      return [[], active$6854];
    } else {
      (t0$6868 = jump$6717(active$6854, bot$6855, top$6856));
      if (((t0$6868 instanceof Array) && (((t1$6869 = t0$6868.length)), (t1$6869 === 2)))) {
        (newbot$6862 = t0$6868[0]);
        (span$6863 = t0$6868[1]);
      } else {
        ___match_error(jump$6717(active$6854, bot$6855, top$6856), "/home/olivier/git/earl-grey/src/location.eg", 3931, 3953);
      }
      (newactive$6864 = (((acc$6889 = [])), (((temp$6895 = active$6854)), ((($length$6901 = temp$6895.length)), ((($index$6907 = 0)), (function() {
        $6884: for (; ($index$6907 < $length$6901); ($index$6907++)) {
          var x$6926;
          var e$6927;
          var attr$6928;
          var t0$6921;
          var t1$6922;
          var m$6916;
          (m$6916 = temp$6895[$index$6907]);
          (t0$6921 = m$6916);
          (x$6926 = t0$6921);
          if (((t0$6921 instanceof Array) && (((t1$6922 = t0$6921.length)), ((t1$6922 === 3) && (t0$6921[0], ((e$6927 = t0$6921[1]), ((attr$6928 = t0$6921[2]), (e$6927 > newbot$6862)))))))) {
            acc$6889.push(x$6926);
          } else {
            false;
          }
        }
      })()))), acc$6889));
      (t0$6947 = jumptill$6718(newactive$6864, newbot$6862, top$6856));
      if (((t0$6947 instanceof Array) && (((t1$6948 = t0$6947.length)), (t1$6948 === 2)))) {
        (spans$6865 = t0$6947[0]);
        (remainder$6866 = t0$6947[1]);
      } else {
        ___match_error(jumptill$6718(newactive$6864, newbot$6862, top$6856), "/home/olivier/git/earl-grey/src/location.eg", 4080, 4112);
      }
      return [[span$6863].concat(spans$6865), remainder$6866];
    }
  }));
  (process_elements$6719 = (function(start$6966, active$6967, rem$6968) {
    var $index$7073;
    var $length$7067;
    var temp$7061;
    var acc$7055;
    var t0$7112;
    var t1$7113;
    var top$7045;
    var bot$7046;
    var spans$7047;
    var t0$7165;
    var t1$7166;
    var spans$7162;
    var newactive$7163;
    var start$7128;
    var active$7129;
    var next$7130;
    var target$7131;
    var end$7132;
    var attr$7133;
    var rest$7134;
    var start$7025;
    var active$7026;
    var $6974$6990;
    var $6975$6991;
    var $6976$6992;
    var t0$6984;
    var t1$6985;
    var t2$6986;
    var t3$6987;
    var t4$6988;
    var $6970$6979;
    ($6970$6979 = [start$6966, active$6967, rem$6968]);
    if ((($6974$6990 = ($6970$6979 instanceof Array)) && (((t0$6984 = $6970$6979.length)), (($6976$6992 = (t0$6984 === 3)) && ($6970$6979[0], (((t1$6985 = $6970$6979[1])), ((t1$6985 instanceof Array) && (((t2$6986 = t1$6985.length)), ((t2$6986 === 0) && (((t3$6987 = $6970$6979[2])), ((t3$6987 instanceof Array) && (((t4$6988 = t3$6987.length)), (t4$6988 === 0))))))))))))) {
      return [];
    } else {
      if (($6976$6992 && ((start$7025 = $6970$6979[0]), ((active$7026 = $6970$6979[1]), (((t1$6985 = $6970$6979[2])), ((t1$6985 instanceof Array) && (((t2$6986 = t1$6985.length)), (t2$6986 === 0)))))))) {
        (top$7045 = $8104(Math.max, (((acc$7055 = [])), (((temp$7061 = active$7026)), ((($length$7067 = temp$7061.length)), ((($index$7073 = 0)), (function() {
          $7050: for (; ($index$7073 < $length$7067); ($index$7073++)) {
            var e$7092;
            var t0$7087;
            var t1$7088;
            var m$7082;
            (m$7082 = temp$7061[$index$7073]);
            (t0$7087 = m$7082);
            if (((t0$7087 instanceof Array) && (((t1$7088 = t0$7087.length)), (t1$7088 === 3)))) {
              t0$7087[0];
              (e$7092 = t0$7087[1]);
              t0$7087[2];
              acc$7055.push(e$7092);
            } else {
              ___match_error(m$7082, "/home/olivier/git/earl-grey/src/location.eg", 4309, 4337);
            }
          }
        })()))), acc$7055)));
        (bot$7046 = Math.min(start$7025, top$7045));
        (t0$7112 = jumptill$6718(active$7026, start$7025, top$7045));
        if (((t0$7112 instanceof Array) && (((t1$7113 = t0$7112.length)), (t1$7113 === 2)))) {
          (spans$7047 = t0$7112[0]);
          t0$7112[1];
        } else {
          ___match_error(jumptill$6718(active$7026, start$7025, top$7045), "/home/olivier/git/earl-grey/src/location.eg", 4400, 4428);
        }
        return spans$7047;
      } else {
        if (($6976$6992 && ((start$7128 = $6970$6979[0]), ((active$7129 = $6970$6979[1]), (((t1$6985 = $6970$6979[2])), ((t1$6985 instanceof Array) && (((t2$6986 = t1$6985.length)), ((t2$6986 >= 1) && (((t3$6987 = t1$6985[0])), ((next$7130 = t3$6987), ((t3$6987 instanceof Array) && (((t4$6988 = t3$6987.length)), (t4$6988 === 3))))))))))))) {
          (target$7131 = t3$6987[0]);
          (end$7132 = t3$6987[1]);
          (attr$7133 = t3$6987[2]);
          (rest$7134 = Array.prototype.slice.call(t1$6985, 1));
          (t0$7165 = jumptill$6718(active$7129, start$7128, target$7131));
          if (((t0$7165 instanceof Array) && (((t1$7166 = t0$7165.length)), (t1$7166 === 2)))) {
            (spans$7162 = t0$7165[0]);
            (newactive$7163 = t0$7165[1]);
          } else {
            ___match_error(jumptill$6718(active$7129, start$7128, target$7131), "/home/olivier/git/earl-grey/src/location.eg", 4542, 4573);
          }
          return spans$7162.concat(process_elements$6719(target$7131, [next$7130].concat(newactive$7163), rest$7134));
        } else {
          ___match_error($6970$6979);
        }
      }
    }
  }));
  (thespans$6720 = spans$6710.sort((function($7185$7190, $7187$7191) {
    var t0$7198;
    var t1$7199;
    var t0$7213;
    var t1$7214;
    var s1$7193;
    var e1$7194;
    var s2$7195;
    var e2$7196;
    (t0$7198 = $7185$7190);
    if (((t0$7198 instanceof Array) && (((t1$7199 = t0$7198.length)), (t1$7199 === 3)))) {
      (s1$7193 = t0$7198[0]);
      (e1$7194 = t0$7198[1]);
      t0$7198[2];
    } else {
      ___match_error($7185$7190);
    }
    (t0$7213 = $7187$7191);
    if (((t0$7213 instanceof Array) && (((t1$7214 = t0$7213.length)), (t1$7214 === 3)))) {
      (s2$7195 = t0$7213[0]);
      (e2$7196 = t0$7213[1]);
      t0$7213[2];
    } else {
      ___match_error($7187$7191);
    }
    if ((s1$7193 === s2$7195)) {
      return (e1$7194 - e2$7196);
    } else {
      return (s1$7193 - s2$7195);
    }
  })));
  return process_elements$6719(thespans$6720[0][0], [], thespans$6720);
}));
(highlight_locations$5913 = (function() {
  var $index$7278;
  var $length$7272;
  var temp$7266;
  var $index$7346;
  var $length$7340;
  var temp$7334;
  var acc$7328;
  var srcs$7256;
  var locations$7246;
  var context$7247;
  var t0$7242;
  var $7233$7237;
  ($7233$7237 = arguments);
  (t0$7242 = $7233$7237.length);
  if (((t0$7242 >= 1) && (t0$7242 <= 2))) {
    (locations$7246 = $7233$7237[0]);
    (context$7247 = ((1 >= t0$7242) ? 0 : $7233$7237[1]));
    (srcs$7256 = ({}));
    (temp$7266 = locations$7246);
    ($length$7272 = temp$7266.length);
    ($index$7278 = 0);
    $7257: for (; ($index$7278 < $length$7272); ($index$7278++)) {
      var key$7312;
      var loc$7297;
      var cls$7298;
      var t0$7292;
      var t1$7293;
      var m$7287;
      (m$7287 = temp$7266[$index$7278]);
      (t0$7292 = m$7287);
      if (((t0$7292 instanceof Array) && (((t1$7293 = t0$7292.length)), (t1$7293 === 2)))) {
        (loc$7297 = t0$7292[0]);
        (cls$7298 = t0$7292[1]);
        (key$7312 = String((loc$7297.source && loc$7297.source.url)));
        if ((!$8104(srcs$7256, key$7312))) {
          (srcs$7256[key$7312] = []);
        }
        $8104(srcs$7256, key$7312).push([loc$7297, cls$7298]);
      } else {
        ___match_error(m$7287, "/home/olivier/git/earl-grey/src/location.eg", 4929, 5098);
      }
    }
    return Node(["div"], ({}), (((acc$7328 = [])), (((temp$7334 = items(srcs$7256))), ((($length$7340 = temp$7334.length)), ((($index$7346 = 0)), (function() {
      $7323: for (; ($index$7346 < $length$7340); ($index$7346++)) {
        var locs$7365;
        var t0$7360;
        var t1$7361;
        var m$7355;
        (m$7355 = temp$7334[$index$7346]);
        (t0$7360 = m$7355);
        if (((t0$7360 instanceof Array) && (((t1$7361 = t0$7360.length)), (t1$7361 === 2)))) {
          t0$7360[0];
          (locs$7365 = t0$7360[1]);
          acc$7328.push(highlight_locations_same_source$5914(locs$7365, context$7247));
        } else {
          ___match_error(m$7355, "/home/olivier/git/earl-grey/src/location.eg", 5110, 5197);
        }
      }
    })()))), acc$7328));
  } else {
    ___match_error($7233$7237);
  }
}));
(highlight_locations_same_source$5914 = (function() {
  var $index$7445;
  var $length$7439;
  var temp$7433;
  var acc$7427;
  var t0$7485;
  var t1$7486;
  var $index$7528;
  var $length$7522;
  var temp$7516;
  var acc$7510;
  var $index$7586;
  var $length$7580;
  var temp$7574;
  var acc$7568;
  var loc$7414;
  var src$7415;
  var l1$7416;
  var l2$7417;
  var first$7418;
  var last$7419;
  var locations$7400;
  var context$7401;
  var t0$7396;
  var $7387$7391;
  ($7387$7391 = arguments);
  (t0$7396 = $7387$7391.length);
  if (((t0$7396 >= 1) && (t0$7396 <= 2))) {
    (locations$7400 = $7387$7391[0]);
    (context$7401 = ((1 >= t0$7396) ? 0 : $7387$7391[1]));
    (loc$7414 = merge_locations$5915((((acc$7427 = [])), (((temp$7433 = locations$7400)), ((($length$7439 = temp$7433.length)), ((($index$7445 = 0)), (function() {
      $7422: for (; ($index$7445 < $length$7439); ($index$7445++)) {
        var x$7464;
        var cls$7465;
        var t0$7459;
        var t1$7460;
        var m$7454;
        (m$7454 = temp$7433[$index$7445]);
        (t0$7459 = m$7454);
        if (((t0$7459 instanceof Array) && (((t1$7460 = t0$7459.length)), (t1$7460 === 2)))) {
          (x$7464 = t0$7459[0]);
          (cls$7465 = t0$7459[1]);
          acc$7427.push(x$7464);
        } else {
          ___match_error(m$7454, "/home/olivier/git/earl-grey/src/location.eg", 5280, 5308);
        }
      }
    })()))), acc$7427)));
    (src$7415 = loc$7414.source);
    (t0$7485 = loc$7414.linerange());
    if (((t0$7485 instanceof Array) && (((t1$7486 = t0$7485.length)), (t1$7486 === 2)))) {
      (l1$7416 = t0$7485[0]);
      (l2$7417 = t0$7485[1]);
    } else {
      ___match_error(loc$7414.linerange(), "/home/olivier/git/earl-grey/src/location.eg", 5344, 5359);
    }
    (first$7418 = Math.max(1, (l1$7416 - context$7401)));
    (last$7419 = Math.min(src$7415.nlines, (l2$7417 + context$7401)));
    return Node(["div", ".location"], ({}), [Node(["div", ".source"], ({}), [Node([".sourcefile"], ({}), (src$7415.url || "???")), (((acc$7510 = [])), (((temp$7516 = locations$7400)), ((($length$7522 = temp$7516.length)), ((($index$7528 = 0)), (function() {
      $7505: for (; ($index$7528 < $length$7522); ($index$7528++)) {
        var loc$7547;
        var cls$7548;
        var t0$7542;
        var t1$7543;
        var m$7537;
        (m$7537 = temp$7516[$index$7528]);
        (t0$7542 = m$7537);
        if (((t0$7542 instanceof Array) && (((t1$7543 = t0$7542.length)), (t1$7543 === 2)))) {
          (loc$7547 = t0$7542[0]);
          (cls$7548 = t0$7542[1]);
          acc$7510.push(Node([("." + cls$7548), ".sourcepos"], ({}), loc$7547.ref()));
        } else {
          ___match_error(m$7537, "/home/olivier/git/earl-grey/src/location.eg", 5528, 5674);
        }
      }
    })()))), acc$7510)]), src$7415.highlight_lines(first$7418, last$7419, (((acc$7568 = [])), (((temp$7574 = locations$7400)), ((($length$7580 = temp$7574.length)), ((($index$7586 = 0)), (function() {
      $7563: for (; ($index$7586 < $length$7580); ($index$7586++)) {
        var loc$7605;
        var cls$7606;
        var t0$7600;
        var t1$7601;
        var m$7595;
        (m$7595 = temp$7574[$index$7586]);
        (t0$7600 = m$7595);
        if (((t0$7600 instanceof Array) && (((t1$7601 = t0$7600.length)), (t1$7601 === 2)))) {
          (loc$7605 = t0$7600[0]);
          (cls$7606 = t0$7600[1]);
          acc$7568.push([loc$7605.start, loc$7605.end, [cls$7606]]);
        } else {
          ___match_error(m$7595, "/home/olivier/git/earl-grey/src/location.eg", 5729, 5785);
        }
      }
    })()))), acc$7568))]);
  } else {
    ___match_error($7387$7391);
  }
}));
(merge_locations$5915 = (function($7627$7630) {
  var $index$7702;
  var $length$7696;
  var temp$7690;
  var acc$7684;
  var $index$7748;
  var $length$7742;
  var temp$7736;
  var acc$7730;
  var start$7675;
  var end$7676;
  var locs$7669;
  var loc$7664;
  var $7636$7651;
  var $7637$7652;
  var t0$7649;
  var $7632$7644;
  var ph$7638;
  (ph$7638 = $7627$7630);
  ($7632$7644 = ph$7638);
  if ((($7636$7651 = ($7632$7644 instanceof Array)) && (((t0$7649 = $7632$7644.length)), (t0$7649 === 0)))) {
    return Location$5908(null, 0, 0);
  } else {
    if (($7636$7651 && (t0$7649 === 1))) {
      (loc$7664 = $7632$7644[0]);
      return loc$7664;
    } else {
      if (($7636$7651 && (t0$7649 >= 0))) {
        (locs$7669 = Array.prototype.slice.call($7632$7644, 0));
        (start$7675 = $8104(Math.min, (((acc$7684 = [])), (((temp$7690 = locs$7669)), ((($length$7696 = temp$7690.length)), ((($index$7702 = 0)), (function() {
          $7679: for (; ($index$7702 < $length$7696); ($index$7702++)) {
            var loc$7719;
            var m$7711;
            (m$7711 = temp$7690[$index$7702]);
            (loc$7719 = m$7711);
            acc$7684.push(loc$7719.start);
          }
        })()))), acc$7684)));
        (end$7676 = $8104(Math.max, (((acc$7730 = [])), (((temp$7736 = locs$7669)), ((($length$7742 = temp$7736.length)), ((($index$7748 = 0)), (function() {
          $7725: for (; ($index$7748 < $length$7742); ($index$7748++)) {
            var loc$7765;
            var m$7757;
            (m$7757 = temp$7736[$index$7748]);
            (loc$7765 = m$7757);
            acc$7730.push(loc$7765.end);
          }
        })()))), acc$7730)));
        return Location$5908(locs$7669[0].source, start$7675, end$7676);
      } else {
        ___match_error($7632$7644);
      }
    }
  }
}));
(__lt____lt____colon__$5916 = (function(x$7776, y$7777) {
  if ((!getChecker(Location$5908)(x$7776.location))) {
    (x$7776["location"] = (((!y$7777) || getChecker(Location$5908)(y$7777)) ? y$7777 : y$7777.location));
  }
  return x$7776;
}));
(__plus____plus____colon__$5917 = (function(x$7790, y$7791) {
  var rval$7808;
  var x2$7796;
  var y2$7797;
  (x2$7796 = (((!x$7790) || getChecker(Location$5908)(x$7790)) ? x$7790 : x$7790.location));
  (y2$7797 = (((!y$7791) || getChecker(Location$5908)(y$7791)) ? y$7791 : y$7791.location));
  (rval$7808 = false);
  try {
    (rval$7808 = merge_locations$5915([x2$7796, y2$7797]));
  } catch (excv$7819) {
    var e$7825;
    (e$7825 = excv$7819);
    (rval$7808 = undefined);
  }
  return rval$7808;
}));
(format_error$5918 = (function() {
  var $index$7941;
  var $length$7935;
  var temp$7929;
  var acc$7923;
  var hls$7911;
  var locs$7912;
  var rval$8023;
  var loc$8049;
  var data$8016;
  var other$8055;
  var url$8004;
  var start$8005;
  var end$8006;
  var loc$7994;
  var args$7891;
  var fmt_args$7881;
  var $7843$7876;
  var $7844$7877;
  var $7845$7878;
  var t0$7872;
  var t1$7873;
  var t2$7874;
  var e$7858;
  var context$7859;
  var $7838$7860;
  var t0$7853;
  var t1$7854;
  var $7836$7848;
  ($7836$7848 = arguments);
  (t0$7853 = $7836$7848.length);
  if (((t0$7853 >= 1) && (t0$7853 <= 2))) {
    (t1$7854 = $7836$7848[0]);
    (e$7858 = t1$7854);
    ($7838$7860 = t1$7854);
    (context$7859 = ((1 >= t0$7853) ? 0 : $7836$7848[1]));
    (fmt_args$7881 = (function(e$7886) {
      if ((e$7886.args && e$7886.args.length)) {
        return Node([".error_args"], ({}), repr$5905(e$7886.args));
      } else {
        return "";
      }
    }));
    (t0$7872 = $7838$7860);
    if ((getChecker(ErrorFactory(["syntax"]))(t0$7872) && (___hasprop(t0$7872, "args") && (((t1$7873 = t0$7872.args)), ((t1$7873 instanceof Array) && (((t2$7874 = t1$7873.length)), (t2$7874 === 1))))))) {
      (args$7891 = t1$7873[0]);
      (hls$7911 = ["hl1", "hl2", "hl3", "hl4"]);
      (locs$7912 = (((acc$7923 = [])), (((temp$7929 = enumerate(items(args$7891)))), ((($length$7935 = temp$7929.length)), ((($index$7941 = 0)), (function() {
        $7918: for (; ($index$7941 < $length$7935); ($index$7941++)) {
          var i$7962;
          var key$7963;
          var arg$7964;
          var t0$7955;
          var t1$7956;
          var t2$7957;
          var t3$7958;
          var m$7950;
          (m$7950 = temp$7929[$index$7941]);
          (t0$7955 = m$7950);
          if (((t0$7955 instanceof Array) && (((t1$7956 = t0$7955.length)), ((t1$7956 === 2) && ((i$7962 = t0$7955[0]), (((t2$7957 = t0$7955[1])), ((t2$7957 instanceof Array) && (((t3$7958 = t2$7957.length)), ((t3$7958 === 2) && ((key$7963 = t2$7957[0]), ((arg$7964 = t2$7957[1]), (arg$7964 && arg$7964.location)))))))))))) {
            acc$7923.push([arg$7964.location, $8104(hls$7911, (i$7962 % 4))]);
          } else {
            false;
          }
        }
      })()))), acc$7923));
      return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$7858.name), Node([".error_message"], ({}), e$7858.message)]), Node([".error_args", ".syntax"], ({}), repr$5905(args$7891)), highlight_locations$5913(locs$7912, context$7859)]);
    } else {
      if ((($7844$7877 = ___hasprop(t0$7872, "location")) && (((t1$7873 = t0$7872.location)), getChecker(Location$5908)(t1$7873)))) {
        (loc$7994 = t1$7873);
        return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$7858.name), Node([".error_message"], ({}), e$7858.message)]), fmt_args$7881(e$7858), highlight_locations$5913([[loc$7994, "hl1"]], context$7859), Node([".traceback"], ({}), (e$7858.stack || ""))]);
      } else {
        if (($7844$7877 && ((t1$7873 instanceof Array) && (((t2$7874 = t1$7873.length)), ((t2$7874 === 4) && (t1$7873[0] === "location")))))) {
          (url$8004 = t1$7873[1]);
          (start$8005 = t1$7873[2]);
          (end$8006 = t1$7873[3]);
          (data$8016 = (((rval$8023 = false)), ((function() {
            try {
              (rval$8023 = fs$5906.readFileSync(url$8004, "utf8"));
            } catch (excv$8034) {
              var e$8040;
              (e$8040 = excv$8034);
              (rval$8023 = null);
            }
          })(), rval$8023)));
          if (data$8016) {
            (loc$8049 = Location$5908(Source$5907(data$8016, url$8004), start$8005, end$8006));
            return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$7858.name), Node([".error_message"], ({}), e$7858.message)]), fmt_args$7881(e$7858), highlight_locations$5913([[loc$8049, "hl1"]], context$7859), Node([".traceback"], ({}), (Node([], ({}), e$7858.stack) || ""))]);
          } else {
            return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$7858.name), Node([".error_message"], ({}), e$7858.message)]), fmt_args$7881(e$7858), Node([".traceback"], ({}), (Node([], ({}), e$7858.stack) || e$7858))]);
          }
        } else {
          (other$8055 = $7838$7860);
          return Node(["div"], ({}), [Node([".error"], ({}), [Node([".error_type"], ({}), e$7858.name), Node([".error_message"], ({}), e$7858.message)]), fmt_args$7881(e$7858), Node([".traceback"], ({}), Node([], ({}), e$7858.stack))]);
        }
      }
    }
  } else {
    ___match_error($7836$7848);
  }
}));
(display_error$5919 = (function(e$8064) {
  return __lt____gt__$5904(null, format_error$5918(e$8064));
}));
(exports["Source"] = Source$5907);
(exports["Location"] = Location$5908);
(exports["highlight"] = highlight$5909);
(exports["highlight_locations"] = highlight_locations$5913);
(exports["merge_locations"] = merge_locations$5915);
(exports["<<:"] = __lt____lt____colon__$5916);
(exports["++:"] = __plus____plus____colon__$5917);
(exports["format_error"] = format_error$5918);
(exports["display_error"] = display_error$5919);
//# sourceURL=<compile-source>
