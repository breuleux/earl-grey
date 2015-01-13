"use strict";
require("earlgrey-runtime");
var $18111 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var eg$16053;
var $16029$16054;
var __lt____gt__$16055;
var $16030$16056;
var Source$16057;
var format_error$16058;
var highlight_locations$16059;
var fs$16060;
var path$16061;
var $16031$16062;
var usage$16063;
var display_error$16064;
var usage_error$16065;
var extract_options$16066;
var walk$16067;
var copy$16068;
var _gen$16069;
var interactive$16070;
var compile_path$16071;
var run$16072;
var _run$16073;
(eg$16053 = require("./earl-grey"));
($16029$16054 = require("./pp"));
(__lt____gt__$16055 = $16029$16054["<>"]);
($16030$16056 = require("./location"));
(Source$16057 = $16030$16056.Source);
(format_error$16058 = $16030$16056.format_error);
(highlight_locations$16059 = $16030$16056.highlight_locations);
(fs$16060 = require("fs"));
(path$16061 = require("path"));
($16031$16062 = require("earlgrey-runtime"));
(usage$16063 = "Usage: earl [global options] command [options] [arguments...]\n\nearl run [options] [file] [arguments...]\n  Run the specified file as a script. The arguments are available in\n  process.argv.slice{2} of the script.\n  Options:\n    -e  --eval <code>  Run the provided code instead of reading from a file.\n    -p  --print        Print the result of the evaluation to standard out.\n    -i  --interactive  Start an interactive interpreter after execution\n                       in the global environment of the script.\n\nearl compile [options] [file... | dir]\n  Compile the specified source files into .js files. The files will be\n  placed next to the originals.\n  If a directory is given, all .eg files in the directory hierarchy\n  will be compiled. The -o option can be used to compile the files\n  into a different directory (all non-eg files will be copied over).\n  Options:\n    -o  --output <dir>  Output in given directory.\n    -p  --print         Print the compiled JavaScript to standard out.\n                        No files are created.\n    -e  --eval <code>   Compile the provided code instead of reading from a file.\n    -n  --noboil        Don't produce boilerplate code (useful with -p)\n    -v  --verbose       Print information about the operations performed\n    -6  --es6           Generate EcmaScript v6\n\nearl\n  Start an interactive session.\n\nGlobal options:\n  -h  --help      Print this message.\n  -v  --version   Print the version\n");
(display_error$16064 = (function($16110$16113) {
  var t0$16121;
  var $index$16188;
  var $length$16182;
  var temp$16176;
  var acc$16170;
  var pr$16244;
  var hls$16157;
  var locs$16158;
  var accum$16159;
  var args$16140;
  var t0$16135;
  var t1$16136;
  var $16115$16130;
  var ph$16118;
  var e$16119;
  (t0$16121 = $16110$16113);
  (e$16119 = t0$16121);
  (ph$16118 = t0$16121);
  ($16115$16130 = ph$16118);
  if ((getChecker(ErrorFactory(["syntax"]))($16115$16130) && (___hasprop($16115$16130, "args") && (((t0$16135 = $16115$16130.args)), ((t0$16135 instanceof Array) && (((t1$16136 = t0$16135.length)), (t1$16136 === 1))))))) {
    (args$16140 = t0$16135[0]);
    console.error(String(e$16119));
    (hls$16157 = ["hl1", "hl2", "hl3", "hl4"]);
    (locs$16158 = (((acc$16170 = [])), (((temp$16176 = enumerate(items(args$16140)))), ((($length$16182 = temp$16176.length)), ((($index$16188 = 0)), (function() {
      $16165: for (; ($index$16188 < $length$16182); ($index$16188++)) {
        var i$16209;
        var key$16210;
        var arg$16211;
        var t0$16202;
        var t1$16203;
        var t2$16204;
        var t3$16205;
        var m$16197;
        (m$16197 = temp$16176[$index$16188]);
        (t0$16202 = m$16197);
        if (((t0$16202 instanceof Array) && (((t1$16203 = t0$16202.length)), ((t1$16203 === 2) && ((i$16209 = t0$16202[0]), (((t2$16204 = t0$16202[1])), ((t2$16204 instanceof Array) && (((t3$16205 = t2$16204.length)), ((t3$16205 === 2) && ((key$16210 = t2$16204[0]), ((arg$16211 = t2$16204[1]), (arg$16211 && arg$16211.location)))))))))))) {
          acc$16170.push([arg$16211.location, $18111(hls$16157, (i$16209 % 4))]);
        } else {
          false;
        }
      }
    })()))), acc$16170));
    (accum$16159 = "\n");
    (pr$16244 = (function($16248$16251) {
      var l$16331;
      var $16294$16303;
      var l$16383;
      var $16346$16355;
      var t0$16288;
      var t1$16289;
      var $index$16406;
      var $length$16400;
      var temp$16394;
      var pre$16282;
      var post$16283;
      var $index$16454;
      var $length$16448;
      var temp$16442;
      var acc$16436;
      var other$16476;
      var a$16428;
      var n$16277;
      var s$16272;
      var $16253$16264;
      var ph$16258;
      (ph$16258 = $16248$16251);
      ($16253$16264 = ph$16258);
      if ((typeof($16253$16264) === "string")) {
        (s$16272 = $16253$16264);
        return (accum$16159 = (accum$16159 + s$16272));
      } else {
        if (getChecker(Node)($16253$16264)) {
          (n$16277 = $16253$16264);
          (t0$16288 = ((($16294$16303 = n$16277)), (getChecker(Node([".hl1"], ({}), []))($16294$16303) ? ["[1;32m", "[0m"] : (getChecker(Node([".hl2"], ({}), []))($16294$16303) ? ["[1;33m", "[0m"] : (getChecker(Node([".hl3"], ({}), []))($16294$16303) ? ["[1;36m", "[0m"] : (getChecker(Node([".hl4"], ({}), []))($16294$16303) ? ["[1;35m", "[0m"] : (getChecker(Node([".lineno"], ({}), []))($16294$16303) ? (((l$16331 = Math.floor((Math.log(n$16277.children[0]) / Math.log(10))))), [("[1m" + Array((3 - l$16331)).join(" ")), ":[0m "]) : ($16294$16303, ["", ""]))))))));
          if (((t0$16288 instanceof Array) && (((t1$16289 = t0$16288.length)), (t1$16289 === 2)))) {
            (pre$16282 = t0$16288[0]);
            (post$16283 = t0$16288[1]);
          } else {
            ___match_error(((($16346$16355 = n$16277)), (getChecker(Node([".hl1"], ({}), []))($16346$16355) ? ["[1;32m", "[0m"] : (getChecker(Node([".hl2"], ({}), []))($16346$16355) ? ["[1;33m", "[0m"] : (getChecker(Node([".hl3"], ({}), []))($16346$16355) ? ["[1;36m", "[0m"] : (getChecker(Node([".hl4"], ({}), []))($16346$16355) ? ["[1;35m", "[0m"] : (getChecker(Node([".lineno"], ({}), []))($16346$16355) ? (((l$16383 = Math.floor((Math.log(n$16277.children[0]) / Math.log(10))))), [("[1m" + Array((3 - l$16383)).join(" ")), ":[0m "]) : ($16346$16355, ["", ""]))))))), "/home/olivier/git/earl-grey/src/run.eg", 2103, 2571);
          }
          if (getChecker(Node([".sourcepos"], ({}), []))(n$16277)) {
            (pre$16282 = (pre$16282 + " "));
          }
          (accum$16159 = (accum$16159 + pre$16282));
          (temp$16394 = n$16277.children);
          ($length$16400 = temp$16394.length);
          ($index$16406 = 0);
          $16284: for (; ($index$16406 < $length$16400); ($index$16406++)) {
            var child$16423;
            var m$16415;
            (m$16415 = temp$16394[$index$16406]);
            (child$16423 = m$16415);
            pr$16244(child$16423);
          }
          (accum$16159 = (accum$16159 + post$16283));
          if ((getChecker(Node(["div"], ({}), []))(n$16277) && nequal($18111(accum$16159, (accum$16159.length - 1)), "\n"))) {
            return (accum$16159 = (accum$16159 + "\n"));
          }
        } else {
          if (getChecker(Array)($16253$16264)) {
            (a$16428 = $16253$16264);
            (acc$16436 = []);
            (temp$16442 = a$16428);
            ($length$16448 = temp$16442.length);
            ($index$16454 = 0);
            $16431: for (; ($index$16454 < $length$16448); ($index$16454++)) {
              var child$16471;
              var m$16463;
              (m$16463 = temp$16442[$index$16454]);
              (child$16471 = m$16463);
              acc$16436.push(pr$16244(child$16471));
            }
            return acc$16436;
          } else {
            (other$16476 = $16253$16264);
            return (accum$16159 = (accum$16159 + String(other$16476)));
          }
        }
      }
    }));
    pr$16244(highlight_locations$16059(locs$16158, 0));
    return console.error(accum$16159);
  } else {
    $16115$16130;
    return console.error((e$16119.stack || String(e$16119)));
  }
}));
(usage_error$16065 = (function(message$16487) {
  console.error(usage$16063);
  console.error(message$16487);
  return process.exit(1);
}));
(extract_options$16066 = (function($16494$16497, opttable$16498, optmessage$16499) {
  var t0$16503;
  var results$16515;
  var associate$16516;
  var process_option$16517;
  var argv$16501;
  (t0$16503 = getProjector(clone)($16494$16497));
  if (t0$16503[0]) {
    (argv$16501 = t0$16503[1]);
  } else {
    ___match_error($16494$16497);
  }
  (results$16515 = ({}));
  (associate$16516 = null);
  (process_option$16517 = (function(original$16528, opt$16529, last$16530) {
    var name$16584;
    var name$16574;
    var name$16560;
    var $16537$16550;
    var $16538$16551;
    var $16539$16552;
    var $16540$16553;
    var t0$16548;
    var $16532$16543;
    ($16532$16543 = $18111(opttable$16498, opt$16529));
    if (($16532$16543 === (void 0))) {
      return usage_error$16065(((("Unrecognized " + optmessage$16499) + ": ") + original$16528));
    } else {
      if ((($16537$16550 = ($16532$16543 instanceof Array)) && (((t0$16548 = $16532$16543.length)), (($16539$16552 = (t0$16548 === 2)) && ($16532$16543[0] === "flag"))))) {
        (name$16560 = $16532$16543[1]);
        (results$16515[name$16560] = true);
      } else {
        if (($16539$16552 && (($16540$16553 = ($16532$16543[0] === "value")) && ((name$16574 = $16532$16543[1]), last$16530)))) {
          (associate$16516 = name$16574);
        } else {
          if ($16540$16553) {
            (name$16584 = $16532$16543[1]);
            (results$16515[name$16584] = true);
          } else {
            ___match_error($16532$16543);
          }
        }
      }
    }
  }));
  $16594: while (argv$16501.length) {
    var $index$16711;
    var $length$16705;
    var temp$16699;
    var acc$16693;
    var other$16753;
    var other$16739;
    var opts$16670;
    var opt$16651;
    var opt$16622;
    var value$16623;
    var t0$16616;
    var t1$16617;
    var t2$16618;
    var $16599$16611;
    var arg$16605;
    (arg$16605 = argv$16501.shift());
    ($16599$16611 = arg$16605);
    (t0$16616 = getProjector(RegExp("^--([a-zA-Z_0-9\\-]+)=(.*)", ""))($16599$16611));
    if ((t0$16616[0] && (((t1$16617 = t0$16616[1])), (((t2$16618 = t1$16617.length)), (t2$16618 === 3))))) {
      t1$16617[0];
      (opt$16622 = t1$16617[1]);
      (value$16623 = t1$16617[2]);
      process_option$16517(arg$16605, opt$16622, true);
      (results$16515[associate$16516] = value$16623);
      (associate$16516 = null);
    } else {
      (t0$16616 = getProjector(RegExp("^--([a-zA-Z_\\-0-9]+)", ""))($16599$16611));
      if ((t0$16616[0] && (((t1$16617 = t0$16616[1])), (((t2$16618 = t1$16617.length)), (t2$16618 === 2))))) {
        t1$16617[0];
        (opt$16651 = t1$16617[1]);
        process_option$16517(arg$16605, opt$16651, true);
      } else {
        (t0$16616 = getProjector(RegExp("^-([a-zA-Z_0-9]+)", ""))($16599$16611));
        if ((t0$16616[0] && (((t1$16617 = t0$16616[1])), (((t2$16618 = t1$16617.length)), (t2$16618 === 2))))) {
          t1$16617[0];
          (opts$16670 = t1$16617[1]);
          (acc$16693 = []);
          (temp$16699 = opts$16670);
          ($length$16705 = temp$16699.length);
          ($index$16711 = 0);
          $16687: for (; ($index$16711 < $length$16705); ($index$16711++)) {
            var ch$16734;
            var ch$16728;
            var m$16720;
            (m$16720 = temp$16699[$index$16711]);
            (ch$16728 = m$16720);
            if (($index$16711 === ($length$16705 - 1))) {
              acc$16693.push(process_option$16517(arg$16605, ch$16728, true));
            } else {
              (ch$16734 = m$16720);
              acc$16693.push(process_option$16517(arg$16605, ch$16734));
            }
          }
          acc$16693;
        } else {
          (other$16739 = $16599$16611);
          if (associate$16516) {
            (results$16515[associate$16516] = other$16739);
            (associate$16516 = null);
          } else {
            (other$16753 = $16599$16611);
            argv$16501.unshift(other$16753);
            break $16594;
          }
        }
      }
    }
  }
  return [results$16515, argv$16501];
}));
(walk$16067 = (function(dir$16761, partial$16762, f$16763) {
  var $index$16795;
  var $length$16789;
  var temp$16783;
  var acc$16777;
  var stats$16767;
  (stats$16767 = fs$16060.statSync(dir$16761));
  if (stats$16767.isDirectory()) {
    f$16763("dir", partial$16762);
    (acc$16777 = []);
    (temp$16783 = fs$16060.readdirSync(dir$16761));
    ($length$16789 = temp$16783.length);
    ($index$16795 = 0);
    $16772: for (; ($index$16795 < $length$16789); ($index$16795++)) {
      var newdir$16818;
      var newpartial$16819;
      var file$16812;
      var m$16804;
      (m$16804 = temp$16783[$index$16795]);
      (file$16812 = m$16804);
      acc$16777.push((((newdir$16818 = path$16061.join(dir$16761, file$16812))), ((newpartial$16819 = path$16061.join(partial$16762, file$16812))), walk$16067(newdir$16818, newpartial$16819, f$16763)));
    }
    return acc$16777;
  } else {
    return f$16763("file", partial$16762);
  }
}));
(copy$16068 = (function(src$16831, dest$16832) {
  var data$16836;
  (data$16836 = fs$16060.readFileSync(src$16831, "binary"));
  return fs$16060.writeFileSync(dest$16832, data$16836, "binary");
}));
(_gen$16069 = (function() {
  var g$16870;
  var text$16858;
  var file$16859;
  var noboil$16860;
  var to5$16861;
  var t0$16854;
  var $16845$16849;
  ($16845$16849 = arguments);
  (t0$16854 = $16845$16849.length);
  if (((t0$16854 >= 2) && (t0$16854 <= 4))) {
    (text$16858 = $16845$16849[0]);
    (file$16859 = $16845$16849[1]);
    (noboil$16860 = ((2 >= t0$16854) ? false : $16845$16849[2]));
    (to5$16861 = ((3 >= t0$16854) ? true : $16845$16849[3]));
    (g$16870 = eg$16053.Generator());
    return g$16870.generate(Source$16057(text$16858, path$16061.resolve(file$16859)), (!noboil$16860), to5$16861);
  } else {
    ___match_error($16845$16849);
  }
}));
(interactive$16070 = (function(g$16881, e$16882) {
  var accum$16902;
  var repl$16889;
  var settings$16890;
  var runner$16891;
  (repl$16889 = require("repl"));
  (g$16881["interactive"] = true);
  (settings$16890 = __amp____colon__(({
    "prompt": "<> ",
    "ignoreUndefined": true
  }), ((accum$16902 = ({})), ((accum$16902["eval"] = (function(input$16907, context$16908, filename$16909, callback$16910) {
    var rval$16951;
    var execute$16920;
    var handle$16921;
    var result$16914;
    (result$16914 = (((execute$16920 = (function() {
      var text$16931;
      (text$16931 = g$16881.generate(Source$16057(input$16907.slice(1, -1), "<interactive>")));
      if (equal(text$16931, "\"use strict\";\n//# sourceURL=<compile-source>")) {
        (text$16931 = "");
      }
      return e$16882(text$16931);
    }))), ((handle$16921 = (function(e$16945) {
      display_error$16064(e$16945);
      return undefined;
    }))), (((rval$16951 = false)), ((function() {
      try {
        (rval$16951 = execute$16920());
      } catch (excv$16962) {
        var e$16968;
        (e$16968 = excv$16962);
        (rval$16951 = handle$16921(e$16968));
      }
    })(), rval$16951))));
    return callback$16910(null, result$16914);
  })), accum$16902))));
  (runner$16891 = repl$16889.start(settings$16890));
  return runner$16891.on("exit", (function() {
    return runner$16891.outputStream.write("\n");
  }));
}));
(compile_path$16071 = (function(p$16987, opts$16988) {
  var out$17015;
  var $17220$17223;
  var beaut$17224;
  var name$17278;
  var name$17259;
  var t0$17253;
  var t1$17254;
  var t2$17255;
  var $17243$17248;
  var noext$17240;
  var $17197$17214;
  var $17193$17208;
  var data$17198;
  var code$17199;
  var $16995$17008;
  var $16992$17002;
  var stats$16996;
  (stats$16996 = fs$16060.statSync(p$16987));
  ($16992$17002 = null);
  $16992$17002;
  if (stats$16996.isDirectory()) {
    if (opts$16988.print) {
      usage_error$16065("Cannot use --print when compiling a directory");
    }
    (out$17015 = (opts$16988.output || p$16987));
    return walk$16067(p$16987, "/", (function() {
      var rval$17088;
      var to$17080;
      var from$17074;
      var t0$17140;
      var t1$17141;
      var x$17134;
      var name$17135;
      var from$17136;
      var to$17137;
      var data$17138;
      var from$17175;
      var to$17176;
      var f$17170;
      var results$17121;
      var t0$17117;
      var $17027$17113;
      var d$17061;
      var $17031$17056;
      var $17032$17057;
      var $17033$17058;
      var t0$17053;
      var t1$17054;
      var $17024$17045;
      var t0$17041;
      var $17022$17036;
      ($17022$17036 = arguments);
      (t0$17041 = $17022$17036.length);
      if ((t0$17041 >= 0)) {
        ($17024$17045 = Array.prototype.slice.call($17022$17036, 0));
        (t0$17053 = $17024$17045);
        (t1$17054 = t0$17053.length);
        if ((($17033$17058 = (t1$17054 === 2)) && (t0$17053[0] === "dir"))) {
          (d$17061 = t0$17053[1]);
          (from$17074 = path$16061.join(p$16987, d$17061));
          if (opts$16988.output) {
            (to$17080 = path$16061.join(out$17015, d$17061));
            (rval$17088 = false);
            try {
              (rval$17088 = fs$16060.mkdirSync(to$17080));
            } catch (excv$17099) {
              var e$17105;
              (e$17105 = excv$17099);
              (rval$17088 = "ignore error");
            }
            return rval$17088;
          }
        } else {
          if (($17033$17058 && (t0$17053[0] === "file"))) {
            ($17027$17113 = t0$17053[1]);
            (t0$17117 = getProjector(RegExp("(?:^((?:.*))\\.eg$)", ""))($17027$17113));
            if ((t0$17117[0] && ((results$17121 = t0$17117[1]), results$17121))) {
              (t0$17140 = results$17121);
              if (((t0$17140 instanceof Array) && (((t1$17141 = t0$17140.length)), (t1$17141 === 2)))) {
                (x$17134 = t0$17140[0]);
                (name$17135 = t0$17140[1]);
              } else {
                ___match_error(results$17121, "/home/olivier/git/earl-grey/src/run.eg", 6189, 6196);
              }
              (from$17136 = path$16061.join(p$16987, x$17134));
              (to$17137 = path$16061.join(out$17015, (name$17135 + ".js")));
              (data$17138 = fs$16060.readFileSync(from$17136, "utf8"));
              if (opts$16988.verbose) {
                console.log("Compiling:", from$17136);
              }
              return fs$16060.writeFileSync(to$17137, (_gen$16069(data$17138, from$17136, opts$16988.noboil, (!opts$16988["es6"])) + "\n"));
            } else {
              $17027$17113;
              if ((!opts$16988.output)) {
                return null;
              } else {
                (f$17170 = $17027$17113);
                (from$17175 = path$16061.join(p$16987, f$17170));
                (to$17176 = path$16061.join(out$17015, f$17170));
                return copy$16068(from$17175, to$17176);
              }
            }
          } else {
            ___match_error($17024$17045, "/home/olivier/git/earl-grey/src/run.eg", 5856, 5861);
          }
        }
      } else {
        ___match_error($17022$17036);
      }
    }));
  } else {
    (data$17198 = fs$16060.readFileSync(p$16987, "utf8"));
    (code$17199 = _gen$16069(data$17198, p$16987, opts$16988.noboil, (!opts$16988["es6"])));
    ($17193$17208 = null);
    $17193$17208;
    if (opts$16988.print) {
      ($17220$17223 = require("js-beautify"));
      (beaut$17224 = $17220$17223.js);
      return console.log(beaut$17224(code$17199));
    } else {
      if (opts$16988.output) {
        return fs$16060.writeFileSync(opts$16988.output, (code$17199 + "\n"));
      } else {
        (noext$17240 = ((($17243$17248 = p$16987)), (((t0$17253 = getProjector(RegExp("^(.*).eg$", ""))($17243$17248))), ((t0$17253[0] && (((t1$17254 = t0$17253[1])), (((t2$17255 = t1$17254.length)), (t2$17255 === 2)))) ? (t1$17254[0], (name$17259 = t1$17254[1]), name$17259) : ((name$17278 = $17243$17248), name$17278)))));
        return fs$16060.writeFileSync((noext$17240 + ".js"), (code$17199 + "\n"));
      }
    }
  }
}));
(run$16072 = (function(argv$17286) {
  var t0$17295;
  var t1$17296;
  var rval$17311;
  var opts$17290;
  var cmd$17291;
  (t0$17295 = extract_options$16066(argv$17286, ({
    "h": ["flag", "help"],
    "help": ["flag", "help"],
    "v": ["flag", "version"],
    "version": ["flag", "version"]
  }), "global option"));
  if (((t0$17295 instanceof Array) && (((t1$17296 = t0$17295.length)), (t1$17296 === 2)))) {
    (opts$17290 = t0$17295[0]);
    (cmd$17291 = t0$17295[1]);
  } else {
    ___match_error(extract_options$16066(argv$17286, ({
      "h": ["flag", "help"],
      "help": ["flag", "help"],
      "v": ["flag", "version"],
      "version": ["flag", "version"]
    }), "global option"), "/home/olivier/git/earl-grey/src/run.eg", 7428, 7614);
  }
  (rval$17311 = false);
  try {
    (rval$17311 = _run$16073(cmd$17291, opts$17290));
  } catch (excv$17322) {
    var e$17328;
    (e$17328 = excv$17322);
    (rval$17311 = (display_error$16064(e$17328), process.exit(1)));
  }
  return rval$17311;
}));
(_run$16073 = (function($17339$17342, opts$17343) {
  var t0$17394;
  var t0$17401;
  var t0$17435;
  var t1$17436;
  var data$17488;
  var file$17479;
  var t0$17467;
  var $17456$17462;
  var data$17534;
  var file$17525;
  var t0$17513;
  var $17502$17508;
  var t0$17450;
  var t1$17451;
  var o$17425;
  var rest$17426;
  var file$17427;
  var wd$17428;
  var data$17429;
  var args$17430;
  var e$17431;
  var g$17432;
  var result$17433;
  var t0$17572;
  var t1$17573;
  var $17606$17619;
  var $17603$17613;
  var code$17607;
  var $index$17678;
  var $length$17672;
  var temp$17666;
  var acc$17660;
  var paths$17647;
  var p$17638;
  var $17567$17595;
  var $17568$17596;
  var t0$17593;
  var $17561$17588;
  var o$17569;
  var rest$17570;
  var data$17906;
  var $17915$17919;
  var beaut$17920;
  var data$17921;
  var otherwise$17912;
  var $17718$17735;
  var $17714$17729;
  var out$17719;
  var stats$17720;
  var $index$17959;
  var $length$17953;
  var temp$17947;
  var acc$17941;
  var tokens$18097;
  var walkloc$17987;
  var stuff$18103;
  var s$17982;
  var s$17933;
  var file$17702;
  var args$17703;
  var rawargs$17556;
  var rawargs$17410;
  var $17357$17375;
  var $17358$17376;
  var $17359$17377;
  var bridge$17349$17371;
  var t0$17372;
  var bridge$17353$17373;
  var $17345$17366;
  var ph$17360;
  (ph$17360 = $17339$17342);
  ($17345$17366 = ph$17360);
  $17345$17366;
  if (opts$17343.help) {
    return console.log(usage$16063);
  } else {
    if (opts$17343.version) {
      return console.log("Earl Grey version", eg$16053.version);
    } else {
      (bridge$17349$17371 = $17345$17366);
      if ((((bridge$17349$17371 instanceof Array) && (((t0$17394 = bridge$17349$17371.length)), (t0$17394 === 0))) || ((bridge$17349$17371 instanceof Array) && (((t0$17401 = bridge$17349$17371.length)), ((t0$17401 === 1) && (bridge$17349$17371[0] === "run")))))) {
        return _run$16073(["run", "-i"], opts$17343);
      } else {
        if ((($17357$17375 = ($17345$17366 instanceof Array)) && (((t0$17372 = $17345$17366.length)), (($17359$17377 = (t0$17372 >= 1)) && ($17345$17366[0] === "run"))))) {
          (rawargs$17410 = Array.prototype.slice.call($17345$17366, 1));
          (t0$17435 = extract_options$16066(rawargs$17410, ({
            "e": ["value", "evaluate"],
            "eval": ["value", "evaluate"],
            "p": ["flag", "print"],
            "print": ["flag", "print"],
            "i": ["flag", "interactive"],
            "interactive": ["flag", "interactive"]
          }), "option for run"));
          if (((t0$17435 instanceof Array) && (((t1$17436 = t0$17435.length)), (t1$17436 === 2)))) {
            (o$17425 = t0$17435[0]);
            (rest$17426 = t0$17435[1]);
          } else {
            ___match_error(extract_options$16066(rawargs$17410, ({
              "e": ["value", "evaluate"],
              "eval": ["value", "evaluate"],
              "p": ["flag", "print"],
              "print": ["flag", "print"],
              "i": ["flag", "interactive"],
              "interactive": ["flag", "interactive"]
            }), "option for run"), "/home/olivier/git/earl-grey/src/run.eg", 7959, 8006);
          }
          (t0$17450 = (o$17425.evaluate ? ["<repl>", process.cwd(), o$17425.evaluate, rest$17426] : ((($17456$17462 = rest$17426.shift())), ((($17456$17462 === (void 0)) && o$17425.interactive) ? ["<repl>", process.cwd(), "", rest$17426] : (($17456$17462 === (void 0)) ? usage_error$16065("No filename specified.") : (((t0$17467 = getProjector(path$16061.resolve)($17456$17462))), (t0$17467[0] ? ((file$17479 = t0$17467[1]), (((data$17488 = fs$16060.readFileSync(file$17479, "utf8"))), [file$17479, file$17479, data$17488, rest$17426])) : (___match_error($17456$17462)))))))));
          if (((t0$17450 instanceof Array) && (((t1$17451 = t0$17450.length)), (t1$17451 === 4)))) {
            (file$17427 = t0$17450[0]);
            (wd$17428 = t0$17450[1]);
            (data$17429 = t0$17450[2]);
            (args$17430 = t0$17450[3]);
          } else {
            ___match_error((o$17425.evaluate ? ["<repl>", process.cwd(), o$17425.evaluate, rest$17426] : ((($17502$17508 = rest$17426.shift())), ((($17502$17508 === (void 0)) && o$17425.interactive) ? ["<repl>", process.cwd(), "", rest$17426] : (($17502$17508 === (void 0)) ? usage_error$16065("No filename specified.") : (((t0$17513 = getProjector(path$16061.resolve)($17502$17508))), (t0$17513[0] ? ((file$17525 = t0$17513[1]), (((data$17534 = fs$16060.readFileSync(file$17525, "utf8"))), [file$17525, file$17525, data$17534, rest$17426])) : (___match_error($17502$17508)))))))), "/home/olivier/git/earl-grey/src/run.eg", 8264, 8767);
          }
          (process["argv"] = ["earl-run", file$17427].concat(rest$17426));
          (e$17431 = eg$16053.evaluator(({
            "filename": file$17427,
            "showname": file$17427,
            "cwd": file$17427
          })));
          (g$17432 = eg$16053.Generator(o$17425.interactive));
          (result$17433 = e$17431(g$17432.generate(Source$16057(data$17429, file$17427))));
          if (o$17425.print) {
            console.log(result$17433);
          }
          if (o$17425.interactive) {
            return interactive$16070(g$17432, e$17431);
          }
        } else {
          if (($17359$17377 && ($17345$17366[0] === "compile"))) {
            (rawargs$17556 = Array.prototype.slice.call($17345$17366, 1));
            (t0$17572 = extract_options$16066(rawargs$17556, ({
              "o": ["value", "output"],
              "output": ["value", "output"],
              "p": ["flag", "print"],
              "print": ["flag", "print"],
              "e": ["value", "evaluate"],
              "eval": ["value", "evaluate"],
              "n": ["flag", "noboil"],
              "noboil": ["flag", "noboil"],
              "6": ["flag", "es6"],
              "es6": ["flag", "es6"],
              "v": ["flag", "verbose"],
              "verbose": ["flag", "verbose"]
            }), "option for compile"));
            if (((t0$17572 instanceof Array) && (((t1$17573 = t0$17572.length)), (t1$17573 === 2)))) {
              (o$17569 = t0$17572[0]);
              (rest$17570 = t0$17572[1]);
            } else {
              ___match_error(extract_options$16066(rawargs$17556, ({
                "o": ["value", "output"],
                "output": ["value", "output"],
                "p": ["flag", "print"],
                "print": ["flag", "print"],
                "e": ["value", "evaluate"],
                "eval": ["value", "evaluate"],
                "n": ["flag", "noboil"],
                "noboil": ["flag", "noboil"],
                "6": ["flag", "es6"],
                "es6": ["flag", "es6"],
                "v": ["flag", "verbose"],
                "verbose": ["flag", "verbose"]
              }), "option for compile"), "/home/olivier/git/earl-grey/src/run.eg", 9159, 9210);
            }
            ($17561$17588 = rest$17570);
            $17561$17588;
            if (o$17569.evaluate) {
              (code$17607 = _gen$16069(o$17569.evaluate, "<cli>", o$17569.noboil));
              ($17603$17613 = null);
              $17603$17613;
              if (o$17569.output) {
                return fs$16060.writeFileSync(o$17569.output, (code$17607 + "\n"));
              } else {
                return console.log(code$17607);
              }
            } else {
              if ((($17567$17595 = ($17561$17588 instanceof Array)) && (((t0$17593 = $17561$17588.length)), (t0$17593 === 0)))) {
                return usage_error$16065("Must provide at least one file or directory to compile.");
              } else {
                if (($17567$17595 && (t0$17593 === 1))) {
                  (p$17638 = $17561$17588[0]);
                  return compile_path$16071(p$17638, o$17569);
                } else {
                  $17561$17588;
                  if (o$17569.output) {
                    return usage_error$16065("The -o option cannot be used if more than one file or directory is compiled.");
                  } else {
                    if ((($17561$17588 instanceof Array) && (((t0$17593 = $17561$17588.length)), (t0$17593 >= 0)))) {
                      (paths$17647 = Array.prototype.slice.call($17561$17588, 0));
                      (acc$17660 = []);
                      (temp$17666 = paths$17647);
                      ($length$17672 = temp$17666.length);
                      ($index$17678 = 0);
                      $17655: for (; ($index$17678 < $length$17672); ($index$17678++)) {
                        var p$17695;
                        var m$17687;
                        (m$17687 = temp$17666[$index$17678]);
                        (p$17695 = m$17687);
                        acc$17660.push(compile_path$16071(p$17695, o$17569));
                      }
                      return acc$17660;
                    } else {
                      ___match_error($17561$17588);
                    }
                  }
                }
              }
            }
          } else {
            if (($17357$17375 && ((t0$17372 >= 2) && (((bridge$17353$17373 = $17345$17366[0])), ((bridge$17353$17373 === "tr") || (bridge$17353$17373 === "translate")))))) {
              (file$17702 = $17345$17366[1]);
              (args$17703 = Array.prototype.slice.call($17345$17366, 2));
              (out$17719 = args$17703[0]);
              (stats$17720 = fs$16060.statSync(file$17702));
              ($17714$17729 = null);
              $17714$17729;
              if (stats$17720.isDirectory()) {
                return walk$16067(file$17702, "/", (function() {
                  var rval$17806;
                  var from$17794;
                  var to$17795;
                  var t0$17858;
                  var t1$17859;
                  var x$17852;
                  var name$17853;
                  var from$17854;
                  var to$17855;
                  var data$17856;
                  var from$17888;
                  var to$17889;
                  var f$17883;
                  var results$17839;
                  var t0$17835;
                  var $17747$17831;
                  var d$17780;
                  var $17750$17775;
                  var $17751$17776;
                  var $17752$17777;
                  var t0$17772;
                  var t1$17773;
                  var $17744$17764;
                  var t0$17760;
                  var $17742$17755;
                  ($17742$17755 = arguments);
                  (t0$17760 = $17742$17755.length);
                  if ((t0$17760 >= 0)) {
                    ($17744$17764 = Array.prototype.slice.call($17742$17755, 0));
                    (t0$17772 = $17744$17764);
                    (t1$17773 = t0$17772.length);
                    if ((($17752$17777 = (t1$17773 === 2)) && (t0$17772[0] === "dir"))) {
                      (d$17780 = t0$17772[1]);
                      (from$17794 = path$16061.join(file$17702, d$17780));
                      (to$17795 = path$16061.join(out$17719, d$17780));
                      (rval$17806 = false);
                      try {
                        (rval$17806 = fs$16060.mkdirSync(to$17795));
                      } catch (excv$17817) {
                        var e$17823;
                        (e$17823 = excv$17817);
                        (rval$17806 = "ignore error");
                      }
                      return rval$17806;
                    } else {
                      if (($17752$17777 && (t0$17772[0] === "file"))) {
                        ($17747$17831 = t0$17772[1]);
                        (t0$17835 = getProjector(RegExp("(?:^((?:.*))\\.eg$)", ""))($17747$17831));
                        if ((t0$17835[0] && ((results$17839 = t0$17835[1]), results$17839))) {
                          (t0$17858 = results$17839);
                          if (((t0$17858 instanceof Array) && (((t1$17859 = t0$17858.length)), (t1$17859 === 2)))) {
                            (x$17852 = t0$17858[0]);
                            (name$17853 = t0$17858[1]);
                          } else {
                            ___match_error(results$17839, "/home/olivier/git/earl-grey/src/run.eg", 10774, 10781);
                          }
                          (from$17854 = path$16061.join(file$17702, x$17852));
                          (to$17855 = path$16061.join(out$17719, (name$17853 + ".js")));
                          (data$17856 = fs$16060.readFileSync(from$17854, "utf8"));
                          return fs$16060.writeFileSync(to$17855, (_gen$16069(data$17856, from$17854) + "\n"));
                        } else {
                          (f$17883 = $17747$17831);
                          (from$17888 = path$16061.join(file$17702, f$17883));
                          (to$17889 = path$16061.join(out$17719, f$17883));
                          return copy$16068(from$17888, to$17889);
                        }
                      } else {
                        ___match_error($17744$17764, "/home/olivier/git/earl-grey/src/run.eg", 10454, 10459);
                      }
                    }
                  } else {
                    ___match_error($17742$17755);
                  }
                }));
              } else {
                if (out$17719) {
                  (data$17906 = fs$16060.readFileSync(file$17702, "utf8"));
                  return fs$16060.writeFileSync(out$17719, (_gen$16069(data$17906, file$17702) + "\n"));
                } else {
                  (otherwise$17912 = $17714$17729);
                  ($17915$17919 = require("js-beautify"));
                  (beaut$17920 = $17915$17919.js);
                  (data$17921 = fs$16060.readFileSync(file$17702, "utf8"));
                  return console.log(beaut$17920(_gen$16069(data$17921, file$17702)));
                }
              }
            } else {
              if (($17357$17375 && (($17359$17377 = (t0$17372 === 2)) && ($17345$17366[0] === "tok")))) {
                (s$17933 = $17345$17366[1]);
                (acc$17941 = []);
                (temp$17947 = eg$16053.tokenize(Source$16057(s$17933, null)));
                ($length$17953 = temp$17947.length);
                ($index$17959 = 0);
                $17936: for (; ($index$17959 < $length$17953); ($index$17959++)) {
                  var token$17976;
                  var m$17968;
                  (m$17968 = temp$17947[$index$17959]);
                  (token$17976 = m$17968);
                  acc$17941.push((__lt____gt__$16055(null, token$17976), __lt____gt__$16055(null, token$17976.location.ref()), __lt____gt__$16055(null, token$17976.location.highlight())));
                }
                return acc$17941;
              } else {
                if (($17359$17377 && ($17345$17366[0] === "pa"))) {
                  (s$17982 = $17345$17366[1]);
                  (walkloc$17987 = (function($17991$17994) {
                    var t0$18006;
                    var $index$18072;
                    var $length$18066;
                    var temp$18060;
                    var acc$18054;
                    var type$18044;
                    var args$18045;
                    var x$18038;
                    var x$18027;
                    var $18000$18022;
                    var $18001$18023;
                    var $18002$18024;
                    var t0$18020;
                    var $17996$18015;
                    var ph$18003;
                    var node$18004;
                    (t0$18006 = $17991$17994);
                    (node$18004 = t0$18006);
                    (ph$18003 = t0$18006);
                    ($17996$18015 = ph$18003);
                    if ((($18000$18022 = ($17996$18015 instanceof Array)) && (((t0$18020 = $17996$18015.length)), (($18002$18024 = (t0$18020 === 2)) && ($17996$18015[0] === "symbol"))))) {
                      (x$18027 = $17996$18015[1]);
                      __lt____gt__$16055(null, node$18004);
                      return __lt____gt__$16055(null, (node$18004.location && node$18004.location.highlight()));
                    } else {
                      if (($18002$18024 && ($17996$18015[0] === "value"))) {
                        (x$18038 = $17996$18015[1]);
                        __lt____gt__$16055(null, node$18004);
                        return __lt____gt__$16055(null, (node$18004.location && node$18004.location.highlight()));
                      } else {
                        if (($18000$18022 && (t0$18020 >= 1))) {
                          (type$18044 = $17996$18015[0]);
                          (args$18045 = Array.prototype.slice.call($17996$18015, 1));
                          __lt____gt__$16055(null, node$18004);
                          __lt____gt__$16055(null, (node$18004.location && node$18004.location.highlight()));
                          (acc$18054 = []);
                          (temp$18060 = args$18045);
                          ($length$18066 = temp$18060.length);
                          ($index$18072 = 0);
                          $18049: for (; ($index$18072 < $length$18066); ($index$18072++)) {
                            var arg$18089;
                            var m$18081;
                            (m$18081 = temp$18060[$index$18072]);
                            (arg$18089 = m$18081);
                            acc$18054.push(walkloc$17987(arg$18089));
                          }
                          return acc$18054;
                        } else {
                          ___match_error($17996$18015);
                        }
                      }
                    }
                  }));
                  return walkloc$17987((((tokens$18097 = eg$16053.tokenize(Source$16057(s$17982, null)))), eg$16053.parse(tokens$18097)));
                } else {
                  (stuff$18103 = $17345$17366);
                  return usage_error$16065(("Invalid use. Did you mean: earl run " + stuff$18103.join(" ")));
                }
              }
            }
          }
        }
      }
    }
  }
}));
(exports["run"] = run$16072);
//# sourceURL=<compile-source>
