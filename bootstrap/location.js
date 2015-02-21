
"use strict";require("earlgrey-runtime/5");var $targ$1 = undefined;var $targ$2 = undefined;var $targ$3 = undefined;var $targ$4 = undefined;var $targ$5 = undefined;var $targ$6 = undefined;var $targ$7 = undefined;var $targ$8 = undefined;var $targ$9 = undefined;var $0$0 = undefined;var binsearch$0 = undefined;var $1$0 = undefined;var __lt____gt__$0 = undefined;var _repr$0 = undefined;var fs$0 = undefined;var opg$0 = undefined;var Source$0 = undefined;var Location$0 = undefined;var $2$0 = undefined;var highlight$0 = undefined;var highlight_locations$0 = undefined;var merge_locations$0 = undefined;var repr$0 = undefined;var __lt____lt____colon__$0 = undefined;var __plus____plus____colon__$0 = undefined;var format_error$0 = undefined;var display_error$0 = undefined;$0$0 = require("./util");binsearch$0 = $0$0.binsearch;$1$0 = require("./pp");__lt____gt__$0 = $1$0["<>"];_repr$0 = $1$0.repr;fs$0 = require("fs");opg$0 = require("opg");Source$0 = opg$0.Source;Location$0 = opg$0.Location;$2$0 = require("opg/lib/highlight");highlight$0 = $2$0.highlight;highlight_locations$0 = $2$0.highlightLocations;merge_locations$0 = $2$0.mergeLocations;repr$0 = _repr$0;__lt____lt____colon__$0 = function (x$0, y$0) {
  var $targ$0 = undefined;if (!getChecker(Location$0)(x$0.location)) {
    if (!y$0 || getChecker(Location$0)(y$0)) {
      $targ$0 = y$0;
    } else {
      $targ$0 = y$0.location;
    }x$0.location = $targ$0;[];
  }return x$0;
};__plus____plus____colon__$0 = function (x$1, y$1) {
  var rval$0 = undefined;var x2$0 = undefined;var y2$0 = undefined;if (!x$1 || getChecker(Location$0)(x$1)) {
    x2$0 = x$1;
  } else {
    x2$0 = x$1.location;
  }if (!y$1 || getChecker(Location$0)(y$1)) {
    y2$0 = y$1;
  } else {
    y2$0 = y$1.location;
  }rval$0 = false;try {
    rval$0 = merge_locations$0([x2$0, y2$0]);rval$0;
  } catch (excv$0) {
    var e$0 = undefined;e$0 = excv$0;rval$0 = undefined;rval$0;
  }return rval$0;
};format_error$0 = function format_error() {
  var m$1 = undefined;var acc$0 = undefined;var temp$0 = undefined;var hls$0 = undefined;var locs$0 = undefined;var rval$1 = undefined;var loc$1 = undefined;var data$0 = undefined;var other$0 = undefined;var url$0 = undefined;var start$0 = undefined;var end$0 = undefined;var loc$0 = undefined;var args$0 = undefined;var fmt_args$0 = undefined;var $$5005$0 = undefined;var $$5006$0 = undefined;var $$5007$0 = undefined;var t0$1 = undefined;var t1$1 = undefined;var t2$0 = undefined;var e$1 = undefined;var ph$1$0 = undefined;var context$0 = undefined;var t0$0 = undefined;var t1$0 = undefined;var m$0$0 = undefined;m$0$0 = arguments;t0$0 = m$0$0.length;if (t0$0 >= 1 && t0$0 <= 2) {
    t1$0 = m$0$0[0];e$1 = t1$0;ph$1$0 = t1$0;if (1 >= t0$0) {
      context$0 = 0;
    } else {
      context$0 = m$0$0[1];
    }fmt_args$0 = function fmt_args(e$2) {
      if (e$2.args && e$2.args.length) {
        return ENode([".error_args"], {}, repr$0(e$2.args));
      } else {
        return "";
      }
    };t0$1 = ph$1$0;if (getChecker(ErrorFactory(["syntax"]))(t0$1) && (___hasprop(t0$1, "args") && (t1$1 = t0$1.args, Array.isArray(t1$1) && (t2$0 = t1$1.length, t2$0 === 1)))) {
      args$0 = t1$1[0];hls$0 = ["hl1", "hl2", "hl3", "hl4"];acc$0 = [];temp$0 = null;m$1 = null;$3: for (var _iterator = enumerate(items(args$0))[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        m$1 = _step.value;
        var i$0 = undefined;var key$0 = undefined;var arg$0 = undefined;var t0$2 = undefined;var t1$2 = undefined;var t2$1 = undefined;var t3$0 = undefined;t0$2 = m$1;if (Array.isArray(t0$2) && (t1$2 = t0$2.length, t1$2 === 2 && (i$0 = t0$2[0], t2$1 = t0$2[1], Array.isArray(t2$1) && (t3$0 = t2$1.length, t3$0 === 2 && (key$0 = t2$1[0], arg$0 = t2$1[1], arg$0 && arg$0.location))))) {
          temp$0 = [arg$0.location, send(hls$0, i$0 % 4)];acc$0.push(temp$0);
        } else {
          false;
        }
      }locs$0 = acc$0;return ENode(["div"], {}, [ENode([".error"], {}, [ENode([".error_type"], {}, e$1.name), ENode([".error_message"], {}, e$1.message)]), ENode([".error_args", ".syntax"], {}, repr$0(args$0)), highlight_locations$0(locs$0, context$0)]);
    } else {
      if (($$5006$0 = ___hasprop(t0$1, "location")) && (t1$1 = t0$1.location, getChecker(Location$0)(t1$1))) {
        loc$0 = t1$1;return ENode(["div"], {}, [ENode([".error"], {}, [ENode([".error_type"], {}, e$1.name), ENode([".error_message"], {}, e$1.message)]), fmt_args$0(e$1), highlight_locations$0([[loc$0, "hl1"]], context$0), ENode([".traceback"], {}, e$1.stack || "")]);
      } else {
        if ($$5006$0 && (Array.isArray(t1$1) && (t2$0 = t1$1.length, t2$0 === 4 && t1$1[0] === "location"))) {
          url$0 = t1$1[1];start$0 = t1$1[2];end$0 = t1$1[3];rval$1 = false;try {
            rval$1 = fs$0.readFileSync(url$0, "utf8");rval$1;
          } catch (excv$1) {
            var e$3 = undefined;e$3 = excv$1;rval$1 = null;rval$1;
          }data$0 = rval$1;if (data$0) {
            loc$1 = Location$0(Source$0(data$0, url$0), start$0, end$0);return ENode(["div"], {}, [ENode([".error"], {}, [ENode([".error_type"], {}, e$1.name), ENode([".error_message"], {}, e$1.message)]), fmt_args$0(e$1), highlight_locations$0([[loc$1, "hl1"]], context$0), ENode([".traceback"], {}, ENode([], {}, e$1.stack) || "")]);
          } else {
            return ENode(["div"], {}, [ENode([".error"], {}, [ENode([".error_type"], {}, e$1.name), ENode([".error_message"], {}, e$1.message)]), fmt_args$0(e$1), ENode([".traceback"], {}, ENode([], {}, e$1.stack) || e$1)]);
          }
        } else {
          other$0 = ph$1$0;return ENode(["div"], {}, [ENode([".error"], {}, [ENode([".error_type"], {}, e$1.name), ENode([".error_message"], {}, e$1.message)]), fmt_args$0(e$1), ENode([".traceback"], {}, ENode([], {}, e$1.stack))]);
        }
      }
    }
  } else {
    return ___match_error(m$0$0);
  }
};display_error$0 = function display_error(e$4) {
  return __lt____gt__$0(null, format_error$0(e$4));
};$targ$1 = Source$0;exports.Source = $targ$1;[];$targ$2 = Location$0;exports.Location = $targ$2;[];$targ$3 = highlight$0;exports.highlight = $targ$3;[];$targ$4 = highlight_locations$0;exports.highlight_locations = $targ$4;[];$targ$5 = merge_locations$0;exports.merge_locations = $targ$5;[];$targ$6 = __lt____lt____colon__$0;exports["<<:"] = $targ$6;[];$targ$7 = __plus____plus____colon__$0;exports["++:"] = $targ$7;[];$targ$8 = format_error$0;exports.format_error = $targ$8;[];$targ$9 = display_error$0;exports.display_error = $targ$9;[];
//# sourceMappingURL=location.js.map

