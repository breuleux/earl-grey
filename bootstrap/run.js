
"use strict";require("earlgrey-runtime/5");var $targ$30 = undefined;var eg$0 = undefined;var $1$0 = undefined;var __lt____gt__$0 = undefined;var $2$0 = undefined;var Source$0 = undefined;var format_error$0 = undefined;var highlight_locations$0 = undefined;var fs$0 = undefined;var path$0 = undefined;var $3$0 = undefined;var usage$0 = undefined;var display_error$0 = undefined;var usage_error$0 = undefined;var extract_options$0 = undefined;var walk$0 = undefined;var copy$0 = undefined;var _gen$0 = undefined;var interactive$0 = undefined;var compile_path$0 = undefined;var run$0 = undefined;var _run$0 = undefined;eg$0 = require("./earl-grey");$1$0 = require("./pp");__lt____gt__$0 = $1$0["<>"];$2$0 = require("./location");Source$0 = $2$0.Source;format_error$0 = $2$0.format_error;highlight_locations$0 = $2$0.highlight_locations;fs$0 = require("fs");path$0 = require("path");$3$0 = require("earlgrey-runtime/5");usage$0 = "Usage: earl [global options] command [options] [arguments...]\n\nearl run [options] [file] [arguments...]\n  Run the specified file as a script. The arguments are available in\n  process.argv.slice{2} of the script.\n  Options:\n    -e  --eval <code>  Run the provided code instead of reading from a file.\n    -p  --print        Print the result of the evaluation to standard out.\n    -i  --interactive  Start an interactive interpreter after execution\n                       in the global environment of the script.\n    -l  --lazy         Cache previously run scripts\n\nearl compile [options] [file... | dir]\n  Compile the specified source files into .js files. The files will be\n  placed next to the originals.\n  If a directory is given, all .eg files in the directory hierarchy\n  will be compiled. The -o option can be used to compile the files\n  into a different directory (all non-eg files will be copied over).\n  Options:\n    -o  --output <dir>  Output in given directory.\n    -p  --print         Print the compiled JavaScript to standard out.\n                        No files are created.\n    -e  --eval <code>   Compile the provided code instead of reading from a file.\n    -n  --noboil        Don't output boilerplate code (useful with -p)\n    -s  --sourcemaps    Output source maps for the generated files\n    -l  --lazy          Only recompile sources that have changed\n    -5  --es5           Generate EcmaScript v5\n    -6  --es6           Generate EcmaScript v6 (default)\n    -v  --verbose       Print information about the operations performed\n\nearl\n  Start an interactive session.\n\nGlobal options:\n  -h  --help      Print this message.\n  -v  --version   Print the version\n";display_error$0 = function display_error() {
  var m$1 = undefined;var acc$0 = undefined;var temp$0 = undefined;var pr$0 = undefined;var hls$0 = undefined;var locs$0 = undefined;var accum$0 = undefined;var args$0 = undefined;var $$22403$0 = undefined;var t0$1 = undefined;var t1$1 = undefined;var t2$0 = undefined;var e$0 = undefined;var ph$1$0 = undefined;var rethrow$0 = undefined;var t0$0 = undefined;var t1$0 = undefined;var m$0$0 = undefined;m$0$0 = arguments;t0$0 = m$0$0.length;if (t0$0 >= 1 && t0$0 <= 2) {
    t1$0 = m$0$0[0];e$0 = t1$0;ph$1$0 = t1$0;if (1 >= t0$0) {
      rethrow$0 = false;
    } else {
      rethrow$0 = m$0$0[1];
    }t0$1 = ph$1$0;if (getChecker(ErrorFactory(["syntax"]))(t0$1) && (___hasprop(t0$1, "args") && (t1$1 = t0$1.args, Array.isArray(t1$1) && (t2$0 = t1$1.length, t2$0 === 1)))) {
      args$0 = t1$1[0];console.error(String(e$0));hls$0 = ["hl1", "hl2", "hl3", "hl4"];acc$0 = [];temp$0 = null;m$1 = null;$4: for (var _iterator = enumerate(items(args$0))[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
        m$1 = _step.value;
        var i$0 = undefined;var key$0 = undefined;var arg$0 = undefined;var t0$2 = undefined;var t1$2 = undefined;var t2$1 = undefined;var t3$0 = undefined;t0$2 = m$1;if (Array.isArray(t0$2) && (t1$2 = t0$2.length, t1$2 === 2 && (i$0 = t0$2[0], t2$1 = t0$2[1], Array.isArray(t2$1) && (t3$0 = t2$1.length, t3$0 === 2 && (key$0 = t2$1[0], arg$0 = t2$1[1], arg$0 && arg$0.location))))) {
          temp$0 = [arg$0.location, send(hls$0, i$0 % 4)];acc$0.push(temp$0);
        } else {
          false;
        }
      }locs$0 = acc$0;accum$0 = "\n";pr$0 = function pr(ph$2$0) {
        var l$0 = undefined;var m$2$0 = undefined;var t0$4 = undefined;var t1$3 = undefined;var m$3 = undefined;var $targ$0 = undefined;var pre$0 = undefined;var post$0 = undefined;var m$4 = undefined;var acc$1 = undefined;var temp$1 = undefined;var other$0 = undefined;var a$0 = undefined;var n$0 = undefined;var s$0 = undefined;var $$22512$0 = undefined;var t0$3 = undefined;t0$3 = ph$2$0;if (typeof t0$3 === "string") {
          s$0 = t0$3;return accum$0 = accum$0 + s$0;
        } else {
          if (getChecker(ENode)(t0$3)) {
            n$0 = t0$3;m$2$0 = n$0;if (getChecker(ENode([".hl1"], {}, []))(m$2$0)) {
              $targ$0 = ["\u001b[1;32m", "\u001b[0m"];
            } else {
              if (getChecker(ENode([".hl2"], {}, []))(m$2$0)) {
                $targ$0 = ["\u001b[1;33m", "\u001b[0m"];
              } else {
                if (getChecker(ENode([".hl3"], {}, []))(m$2$0)) {
                  $targ$0 = ["\u001b[1;36m", "\u001b[0m"];
                } else {
                  if (getChecker(ENode([".hl4"], {}, []))(m$2$0)) {
                    $targ$0 = ["\u001b[1;35m", "\u001b[0m"];
                  } else {
                    if (getChecker(ENode([".lineno"], {}, []))(m$2$0)) {
                      l$0 = Math.floor(Math.log(n$0.children[0]) / Math.log(10));$targ$0 = ["\u001b[1m" + Array(3 - l$0).join(" "), ":\u001b[0m "];
                    } else {
                      $targ$0 = ["", ""];
                    }
                  }
                }
              }
            }t0$4 = $targ$0;if (Array.isArray(t0$4) && (t1$3 = t0$4.length, t1$3 === 2)) {
              pre$0 = t0$4[0];post$0 = t0$4[1];
            } else {
              ___match_error($targ$0);
            }[pre$0, post$0];if (getChecker(ENode([".sourcepos"], {}, []))(n$0)) {
              pre$0 = pre$0 + " ";
            }accum$0 = accum$0 + pre$0;m$3 = null;$5: for (var _iterator2 = n$0.children[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
              m$3 = _step2.value;
              var child$0 = undefined;child$0 = m$3;pr$0(child$0);
            }accum$0 = accum$0 + post$0;if (getChecker(ENode(["div"], {}, []))(n$0) && nequal(send(accum$0, accum$0.length - 1), "\n")) {
              return accum$0 = accum$0 + "\n";
            }
          } else {
            if (Array.isArray(t0$3)) {
              a$0 = t0$3;acc$1 = [];temp$1 = null;m$4 = null;$6: for (var _iterator3 = a$0[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
                m$4 = _step3.value;
                var child$1 = undefined;child$1 = m$4;temp$1 = pr$0(child$1);acc$1.push(temp$1);
              }return acc$1;
            } else {
              other$0 = ph$2$0;return accum$0 = accum$0 + String(other$0);
            }
          }
        }
      };pr$0(highlight_locations$0(locs$0, 0));return console.error(accum$0);
    } else {
      if (rethrow$0) {
        throw e$0;
      } else {
        return console.error(e$0.stack || String(e$0));
      }
    }
  } else {
    return ___match_error(m$0$0);
  }
};usage_error$0 = function usage_error(message$0) {
  console.error(usage$0);console.error(message$0);return process.exit(1);
};extract_options$0 = function extract_options(temp$2$0, opttable$0, optmessage$0) {
  var t0$5 = undefined;var results$0 = undefined;var associate$0 = undefined;var process_option$0 = undefined;var argv$0 = undefined;t0$5 = getProjector(clone)(temp$2$0);if (t0$5[0]) {
    argv$0 = t0$5[1];
  } else {
    ___match_error(temp$2$0);
  }results$0 = {};associate$0 = null;process_option$0 = function process_option(original$0, opt$0, last$0) {
    var $targ$1 = undefined;var $targ$2 = undefined;var name$2 = undefined;var name$1 = undefined;var name$0 = undefined;var $$22666$0 = undefined;var $$22667$0 = undefined;var $$22668$0 = undefined;var $$22669$0 = undefined;var t0$6 = undefined;var m$5$0 = undefined;m$5$0 = send(opttable$0, opt$0);if (m$5$0 === void 0) {
      return usage_error$0("Unrecognized " + optmessage$0 + ": " + original$0);
    } else {
      if (($$22666$0 = Array.isArray(m$5$0)) && (t0$6 = m$5$0.length, ($$22668$0 = t0$6 === 2) && m$5$0[0] === "flag")) {
        name$0 = m$5$0[1];$targ$1 = true;results$0[name$0] = $targ$1;return [];
      } else {
        if ($$22668$0 && (($$22669$0 = m$5$0[0] === "value") && (name$1 = m$5$0[1], last$0))) {
          associate$0 = name$1;return associate$0;
        } else {
          if ($$22669$0) {
            name$2 = m$5$0[1];$targ$2 = true;results$0[name$2] = $targ$2;return [];
          } else {
            return ___match_error(m$5$0);
          }
        }
      }
    }
  };$7: while (argv$0.length) {
    var $targ$3 = undefined;var m$7 = undefined;var acc$2 = undefined;var temp$3 = undefined;var $targ$4 = undefined;var other$2 = undefined;var other$1 = undefined;var opts$0 = undefined;var opt$2 = undefined;var opt$1 = undefined;var value$0 = undefined;var t0$7 = undefined;var t1$4 = undefined;var t2$2 = undefined;var m$6$0 = undefined;var arg$1 = undefined;arg$1 = argv$0.shift();m$6$0 = arg$1;t0$7 = getProjector(RegExp("^--([a-zA-Z_0-9\\-]+)=(.*)", ""))(m$6$0);if (t0$7[0] && (t1$4 = t0$7[1], t2$2 = t1$4.length, t2$2 === 3)) {
      t1$4[0];opt$1 = t1$4[1];value$0 = t1$4[2];process_option$0(arg$1, opt$1, true);$targ$3 = value$0;results$0[associate$0] = $targ$3;[];associate$0 = null;associate$0;
    } else {
      t0$7 = getProjector(RegExp("^--([a-zA-Z_\\-0-9]+)", ""))(m$6$0);if (t0$7[0] && (t1$4 = t0$7[1], t2$2 = t1$4.length, t2$2 === 2)) {
        t1$4[0];opt$2 = t1$4[1];process_option$0(arg$1, opt$2, true);
      } else {
        t0$7 = getProjector(RegExp("^-([a-zA-Z_0-9]+)", ""))(m$6$0);if (t0$7[0] && (t1$4 = t0$7[1], t2$2 = t1$4.length, t2$2 === 2)) {
          t1$4[0];opts$0 = t1$4[1];acc$2 = [];temp$3 = null;m$7 = null;$8: for (var _iterator4 = enumerate(opts$0)[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
            m$7 = _step4.value;
            var i$1 = undefined;var ch$0 = undefined;var t0$8 = undefined;var t1$5 = undefined;t0$8 = m$7;if (Array.isArray(t0$8) && (t1$5 = t0$8.length, t1$5 === 2)) {
              i$1 = t0$8[0];ch$0 = t0$8[1];temp$3 = process_option$0(arg$1, ch$0, equal(i$1, opts$0.length - 1));acc$2.push(temp$3);
            } else {
              ___match_error(m$7);
            }
          }acc$2;
        } else {
          other$1 = m$6$0;if (associate$0) {
            $targ$4 = other$1;results$0[associate$0] = $targ$4;[];associate$0 = null;associate$0;
          } else {
            other$2 = m$6$0;argv$0.unshift(other$2);break $7;
          }
        }
      }
    }
  }return [results$0, argv$0];
};walk$0 = function walk(dir$0, partial$0, f$0) {
  var rval$0 = undefined;var m$8 = undefined;var acc$3 = undefined;var temp$4 = undefined;var stats$0 = undefined;rval$0 = false;try {
    rval$0 = fs$0.statSync(dir$0);rval$0;
  } catch (excv$0) {
    var t$0 = undefined;var e$1 = undefined;e$1 = excv$0;t$0 = "Could not stat: " + dir$0;console.log(t$0);return false;rval$0;
  }stats$0 = rval$0;if (stats$0.isDirectory()) {
    f$0("dir", partial$0);acc$3 = [];temp$4 = null;m$8 = null;$9: for (var _iterator5 = fs$0.readdirSync(dir$0)[Symbol.iterator](), _step5; !(_step5 = _iterator5.next()).done;) {
      m$8 = _step5.value;
      var newdir$0 = undefined;var newpartial$0 = undefined;var file$0 = undefined;file$0 = m$8;newdir$0 = path$0.join(dir$0, file$0);newpartial$0 = path$0.join(partial$0, file$0);temp$4 = walk$0(newdir$0, newpartial$0, f$0);acc$3.push(temp$4);
    }return acc$3;
  } else {
    return f$0("file", partial$0);
  }
};copy$0 = function copy(src$0, dest$0) {
  var data$0 = undefined;var rval$1 = undefined;rval$1 = false;try {
    data$0 = fs$0.readFileSync(src$0, "binary");rval$1 = fs$0.writeFileSync(dest$0, data$0, "binary");rval$1;
  } catch (excv$1) {
    var t$1 = undefined;var e$2 = undefined;e$2 = excv$1;t$1 = "Could not copy: " + src$0;console.log(t$1);rval$1 = t$1;rval$1;
  }return rval$1;
};_gen$0 = function _gen(text$0, file$1, opts$1) {
  var g$0 = undefined;g$0 = eg$0.Generator();return g$0.generate(Source$0(text$0, path$0.resolve(file$1)), { noboil: opts$1.noboil, to5: opts$1.es5, sourceMap: opts$1.sourcemaps });
};interactive$0 = function interactive(g$1, e$3) {
  var accum$1 = undefined;var repl$0 = undefined;var $targ$5 = undefined;var settings$0 = undefined;var runner$0 = undefined;repl$0 = require("repl");$targ$5 = true;g$1.interactive = $targ$5;[];settings$0 = __amp____colon__({ prompt: "<> ", ignoreUndefined: true }, (accum$1 = {}, accum$1.eval = function (input$0, context$0, filename$0, callback$0) {
    return spawn.call(this, regeneratorRuntime.mark(function callee$2$0() {
      var x$1, x$0, t0$9, t1$6, t2$3, m$9$0, text$1, result$0, inp$0, rval$2, e$4;
      return regeneratorRuntime.wrap(function callee$2$0$(context$3$0) {
        while (1) switch (context$3$0.prev = context$3$0.next) {
          case 0:
            x$1 = undefined;
            x$0 = undefined;
            t0$9 = undefined;
            t1$6 = undefined;
            t2$3 = undefined;
            m$9$0 = undefined;
            text$1 = undefined;
            result$0 = undefined;
            inp$0 = undefined;
            rval$2 = undefined;
            rval$2 = false;context$3$0.prev = 11;
            m$9$0 = input$0;t0$9 = getProjector(RegExp("^\\((.*\\n)\\)$", ""))(m$9$0);if (t0$9[0] && (t1$6 = t0$9[1], t2$3 = t1$6.length, t2$3 === 2)) {
              t1$6[0];x$0 = t1$6[1];inp$0 = x$0;
            } else {
              t0$9 = getProjector(RegExp("^\\((.*)\\)\\n$", ""))(m$9$0);if (t0$9[0] && (t1$6 = t0$9[1], t2$3 = t1$6.length, t2$3 === 2)) {
                t1$6[0];x$1 = t1$6[1];inp$0 = x$1;
              } else {
                inp$0 = input$0;
              }
            }
            if (!equal(inp$0.trim(), "")) {
              context$3$0.next = 19;
              break;
            }
            rval$2 = callback$0(null, undefined);context$3$0.next = 24;
            break;
          case 19:
            text$1 = g$1.generateInteractive(Source$0(inp$0, "<interactive>"));context$3$0.next = 22;
            return e$3(text$1);
          case 22:
            result$0 = context$3$0.sent;
            rval$2 = callback$0(null, result$0);
          case 24:
            rval$2;context$3$0.next = 34;
            break;
          case 27:
            context$3$0.prev = 27;
            context$3$0.t2 = context$3$0["catch"](11);
            e$4 = undefined;
            e$4 = context$3$0.t2;display_error$0(e$4);rval$2 = callback$0(null, undefined);rval$2;
          case 34:
            return context$3$0.abrupt("return", rval$2);
          case 35:
          case "end":
            return context$3$0.stop();
        }
      }, callee$2$0, this, [[11, 27]]);
    }));
  }, accum$1));runner$0 = repl$0.start(settings$0);return runner$0.on("exit", function () {
    return runner$0.outputStream.write("\n");
  });
};compile_path$0 = function compile_path(p$0, opts$2) {
  var out$0 = undefined;var t0$15 = undefined;var $10$0 = undefined;var beaut$0 = undefined;var name$5 = undefined;var name$4 = undefined;var t0$16 = undefined;var t1$9 = undefined;var t2$4 = undefined;var m$13$0 = undefined;var noext$0 = undefined;var $$23378$0 = undefined;var m$12$0 = undefined;var data$2 = undefined;var $targ$8 = undefined;var code$1 = undefined;var map$1 = undefined;var $$23095$0 = undefined;var m$10$0 = undefined;var stats$1 = undefined;stats$1 = fs$0.statSync(p$0);m$10$0 = null;if (stats$1.isDirectory()) {
    if (opts$2.print) {
      usage_error$0("Cannot use --print when compiling a directory");
    }out$0 = opts$2.output || p$0;return walk$0(p$0, "/", function () {
      var rval$3 = undefined;var to$0 = undefined;var from$0 = undefined;var t0$13 = undefined;var t1$8 = undefined;var rval$4 = undefined;var rval$5 = undefined;var t$2 = undefined;var fstat$0 = undefined;var tstat$0 = undefined;var rval$6 = undefined;var t0$14 = undefined;var rval$7 = undefined;var $targ$6 = undefined;var x$2 = undefined;var name$3 = undefined;var from$1 = undefined;var to$1 = undefined;var data$1 = undefined;var $targ$7 = undefined;var code$0 = undefined;var map$0 = undefined;var from$2 = undefined;var to$2 = undefined;var f$1 = undefined;var results$1 = undefined;var t0$12 = undefined;var ph$5$0 = undefined;var d$0 = undefined;var $$23123$0 = undefined;var $$23124$0 = undefined;var $$23125$0 = undefined;var t0$11 = undefined;var t1$7 = undefined;var ph$4$0 = undefined;var t0$10 = undefined;var m$11$0 = undefined;m$11$0 = arguments;t0$10 = m$11$0.length;if (t0$10 >= 0) {
        ph$4$0 = Array.prototype.slice.call(m$11$0, 0);t0$11 = ph$4$0;t1$7 = t0$11.length;if (($$23125$0 = t1$7 === 2) && t0$11[0] === "dir") {
          d$0 = t0$11[1];from$0 = path$0.join(p$0, d$0);if (opts$2.output) {
            to$0 = path$0.join(out$0, d$0);rval$3 = false;try {
              rval$3 = fs$0.mkdirSync(to$0);rval$3;
            } catch (excv$3) {
              var e$5 = undefined;e$5 = excv$3;rval$3 = "ignore error";rval$3;
            }return rval$3;
          }
        } else {
          if ($$23125$0 && t0$11[0] === "file") {
            ph$5$0 = t0$11[1];t0$12 = getProjector(RegExp("(?:^((?:.*))\\.eg$)", ""))(ph$5$0);if (t0$12[0] && (results$1 = t0$12[1], results$1)) {
              $targ$6 = results$1;t0$13 = $targ$6;if (Array.isArray(t0$13) && (t1$8 = t0$13.length, t1$8 === 2)) {
                x$2 = t0$13[0];name$3 = t0$13[1];
              } else {
                ___match_error($targ$6);
              }[x$2, name$3];from$1 = path$0.join(p$0, x$2);to$1 = path$0.join(out$0, name$3 + ".js");if (opts$2.lazy) {
                rval$4 = false;try {
                  rval$4 = fs$0.statSync(from$1);rval$4;
                } catch (excv$4) {
                  var e$6 = undefined;e$6 = excv$4;rval$4 = null;rval$4;
                }fstat$0 = rval$4;rval$5 = false;try {
                  rval$5 = fs$0.statSync(to$1);rval$5;
                } catch (excv$5) {
                  var e$7 = undefined;e$7 = excv$5;rval$5 = null;rval$5;
                }tstat$0 = rval$5;if (fstat$0 && tstat$0 && fstat$0.mtime.getTime() < tstat$0.mtime.getTime()) {
                  if (opts$2.verbose) {
                    t$2 = "No change: " + from$1;console.log(t$2);t$2;
                  }return true;
                }
              }rval$6 = false;try {
                rval$6 = fs$0.readFileSync(from$1, "utf8");rval$6;
              } catch (excv$6) {
                var t$3 = undefined;var e$8 = undefined;e$8 = excv$6;t$3 = "Could not read: " + from$1;console.log(t$3);return false;rval$6;
              }data$1 = rval$6;if (opts$2.verbose) {
                console.log("Compiling:", from$1);
              }$targ$7 = _gen$0(data$1, from$1, opts$2);t0$14 = $targ$7;if (___hasprop(t0$14, "code") && (code$0 = t0$14.code, ___hasprop(t0$14, "map"))) {
                map$0 = t0$14.map;
              } else {
                ___match_error($targ$7);
              }[code$0, map$0];rval$7 = false;try {
                fs$0.writeFileSync(to$1, code$0 + "\n");if (map$0) {
                  rval$7 = fs$0.writeFileSync(to$1 + ".map", map$0);
                }rval$7;
              } catch (excv$7) {
                var e$9 = undefined;e$9 = excv$7;rval$7 = "Could not write: " + to$1;rval$7;
              }return rval$7;
            } else {
              if (!opts$2.output) {
                return null;
              } else {
                f$1 = ph$5$0;from$2 = path$0.join(p$0, f$1);to$2 = path$0.join(out$0, f$1);return copy$0(from$2, to$2);
              }
            }
          } else {
            return ___match_error(ph$4$0);
          }
        }
      } else {
        return ___match_error(m$11$0);
      }
    });
  } else {
    data$2 = fs$0.readFileSync(p$0, "utf8");$targ$8 = _gen$0(data$2, p$0, opts$2);t0$15 = $targ$8;if (___hasprop(t0$15, "code") && (code$1 = t0$15.code, ___hasprop(t0$15, "map"))) {
      map$1 = t0$15.map;
    } else {
      ___match_error($targ$8);
    }[code$1, map$1];m$12$0 = null;if (opts$2.print) {
      $10$0 = require("js-beautify");beaut$0 = $10$0.js;return console.log(beaut$0(code$1));
    } else {
      if (opts$2.output) {
        fs$0.writeFileSync(opts$2.output, code$1 + "\n");if (map$1) {
          return fs$0.writeFileSync(opts$2.output + ".map", map$1);
        }
      } else {
        m$13$0 = p$0;t0$16 = getProjector(RegExp("^(.*).eg$", ""))(m$13$0);if (t0$16[0] && (t1$9 = t0$16[1], t2$4 = t1$9.length, t2$4 === 2)) {
          t1$9[0];name$4 = t1$9[1];noext$0 = name$4;
        } else {
          name$5 = m$13$0;noext$0 = name$5;
        }fs$0.writeFileSync(noext$0 + ".js", code$1 + "\n");if (map$1) {
          return fs$0.writeFileSync(noext$0 + ".js.map", map$1);
        }
      }
    }
  }
};run$0 = function run(argv$1) {
  var t0$17 = undefined;var t1$10 = undefined;var rval$8 = undefined;var $targ$9 = undefined;var opts$3 = undefined;var cmd$0 = undefined;$targ$9 = extract_options$0(argv$1, { h: ["flag", "help"], help: ["flag", "help"], v: ["flag", "version"], version: ["flag", "version"] }, "global option");t0$17 = $targ$9;if (Array.isArray(t0$17) && (t1$10 = t0$17.length, t1$10 === 2)) {
    opts$3 = t0$17[0];cmd$0 = t0$17[1];
  } else {
    ___match_error($targ$9);
  }[opts$3, cmd$0];rval$8 = false;try {
    rval$8 = _run$0(cmd$0, opts$3);rval$8;
  } catch (excv$8) {
    var e$10 = undefined;e$10 = excv$8;rval$8 = display_error$0(e$10, true);rval$8;
  }return rval$8;
};_run$0 = function _run(ph$6$0, opts$4) {
  var t0$19 = undefined;var t0$20 = undefined;var t0$21 = undefined;var $targ$13 = undefined;var accum$2 = undefined;var t0$22 = undefined;var $targ$14 = undefined;var accum$3 = undefined;var t0$23 = undefined;var $targ$15 = undefined;var accum$4 = undefined;var t0$24 = undefined;var $targ$16 = undefined;var accum$5 = undefined;var t0$25 = undefined;var t1$12 = undefined;var file$3 = undefined;var t0$26 = undefined;var m$14$0 = undefined;var t0$27 = undefined;var t1$13 = undefined;var t0$28 = undefined;var t1$14 = undefined;var $targ$17 = undefined;var $targ$18 = undefined;var compiled$0 = undefined;var srcfile$0 = undefined;var t$4 = undefined;var $targ$10 = undefined;var o$0 = undefined;var rest$0 = undefined;var $targ$11 = undefined;var register$0 = undefined;var $targ$12 = undefined;var file$2 = undefined;var wd$0 = undefined;var args$1 = undefined;var g$2 = undefined;var e$11 = undefined;var result$1 = undefined;var t0$29 = undefined;var $targ$20 = undefined;var accum$6 = undefined;var t0$30 = undefined;var $targ$21 = undefined;var accum$7 = undefined;var t0$31 = undefined;var $targ$22 = undefined;var accum$8 = undefined;var t0$32 = undefined;var $targ$23 = undefined;var accum$9 = undefined;var t0$33 = undefined;var $targ$24 = undefined;var accum$10 = undefined;var t0$34 = undefined;var $targ$25 = undefined;var accum$11 = undefined;var t0$35 = undefined;var $targ$26 = undefined;var accum$12 = undefined;var t0$36 = undefined;var $targ$27 = undefined;var accum$13 = undefined;var t0$37 = undefined;var $targ$28 = undefined;var accum$14 = undefined;var t0$38 = undefined;var t1$15 = undefined;var t0$40 = undefined;var $13$0 = undefined;var beaut$1 = undefined;var $$23818$0 = undefined;var m$16$0 = undefined;var $targ$29 = undefined;var code$2 = undefined;var map$2 = undefined;var m$17 = undefined;var acc$4 = undefined;var temp$5 = undefined;var paths$0 = undefined;var p$1 = undefined;var $$23714$0 = undefined;var $$23715$0 = undefined;var t0$39 = undefined;var m$15$0 = undefined;var $targ$19 = undefined;var o$1 = undefined;var rest$1 = undefined;var register$1 = undefined;var stuff$0 = undefined;var rawargs$1 = undefined;var rawargs$0 = undefined;var $$23506$0 = undefined;var $$23507$0 = undefined;var $$23508$0 = undefined;var bridge$$23502$0 = undefined;var t0$18 = undefined;var t1$11 = undefined;if (opts$4.help) {
    return console.log(usage$0);
  } else {
    if (opts$4.version) {
      return console.log("Earl Grey version", eg$0.version);
    } else {
      bridge$$23502$0 = ph$6$0;if (Array.isArray(bridge$$23502$0) && (t0$19 = bridge$$23502$0.length, t0$19 === 0) || Array.isArray(bridge$$23502$0) && (t0$20 = bridge$$23502$0.length, t0$20 === 1 && bridge$$23502$0[0] === "run")) {
        return _run$0(["run", "-i"], opts$4);
      } else {
        t0$18 = ph$6$0;t1$11 = t0$18.length;if (($$23508$0 = t1$11 >= 1) && t0$18[0] === "run") {
          rawargs$0 = Array.prototype.slice.call(t0$18, 1);$targ$10 = extract_options$0(rawargs$0, __amp____colon__(($targ$13 = ["value", "evaluate"], accum$2 = {}, t0$21 = $targ$13, accum$2.e = t0$21, accum$2.eval = t0$21, accum$2), __amp____colon__(($targ$14 = ["flag", "print"], accum$3 = {}, t0$22 = $targ$14, accum$3.p = t0$22, accum$3.print = t0$22, accum$3), __amp____colon__(($targ$15 = ["flag", "interactive"], accum$4 = {}, t0$23 = $targ$15, accum$4.i = t0$23, accum$4.interactive = t0$23, accum$4), ($targ$16 = ["flag", "lazy"], accum$5 = {}, t0$24 = $targ$16, accum$5.l = t0$24, accum$5.lazy = t0$24, accum$5)))), "option for run");t0$25 = $targ$10;if (Array.isArray(t0$25) && (t1$12 = t0$25.length, t1$12 === 2)) {
            o$0 = t0$25[0];rest$0 = t0$25[1];
          } else {
            ___match_error($targ$10);
          }[o$0, rest$0];$targ$11 = true;o$0.noboil = $targ$11;[];register$0 = require("./register");register$0.install(o$0.lazy);if (o$0.evaluate) {
            $targ$12 = [null, process.cwd(), rest$0];
          } else {
            m$14$0 = rest$0.shift();if (m$14$0 === void 0 && o$0.interactive) {
              $targ$12 = [null, process.cwd(), rest$0];
            } else {
              if (m$14$0 === void 0) {
                $targ$12 = usage_error$0("No filename specified.");
              } else {
                t0$26 = getProjector(path$0.resolve)(m$14$0);if (t0$26[0]) {
                  file$3 = t0$26[1];$targ$12 = [file$3, file$3, rest$0];
                } else {
                  $targ$12 = ___match_error(m$14$0);
                }
              }
            }
          }t0$27 = $targ$12;if (Array.isArray(t0$27) && (t1$13 = t0$27.length, t1$13 === 3)) {
            file$2 = t0$27[0];wd$0 = t0$27[1];args$1 = t0$27[2];
          } else {
            ___match_error($targ$12);
          }[file$2, wd$0, args$1];g$2 = null;e$11 = null;result$1 = null;if (equal(file$2, null)) {
            e$11 = eg$0.evaluator({ filename: "<repl>", showname: "<repl>", cwd: "<repl>" });g$2 = eg$0.Generator(o$0.interactive);if (o$0.evaluate) {
              result$1 = e$11(g$2.generate(Source$0(o$0.evaluate, "<repl>"), o$0).code);result$1;
            }
          } else {
            $targ$17 = ["earl-run", file$2].concat(rest$0);process.argv = $targ$17;[];$targ$18 = register$0.getCache(file$2, { interactive: o$0.interactive, noboil: o$0.noboil, lazy: false });t0$28 = $targ$18;if (Array.isArray(t0$28) && (t1$14 = t0$28.length, t1$14 === 3)) {
              g$2 = t0$28[0];compiled$0 = t0$28[1];srcfile$0 = t0$28[2];
            } else {
              ___match_error($targ$18);
            }[g$2, compiled$0, srcfile$0];e$11 = eg$0.evaluator({ filename: file$2, showname: srcfile$0, cwd: file$2 });result$1 = e$11(compiled$0);result$1;
          }if (o$0.print) {
            t$4 = result$1;console.log(t$4);t$4;
          }if (o$0.interactive) {
            return interactive$0(g$2, e$11);
          }
        } else {
          if ($$23508$0 && t0$18[0] === "compile") {
            rawargs$1 = Array.prototype.slice.call(t0$18, 1);$targ$19 = extract_options$0(rawargs$1, __amp____colon__(($targ$20 = ["value", "output"], accum$6 = {}, t0$29 = $targ$20, accum$6.o = t0$29, accum$6.output = t0$29, accum$6), __amp____colon__(($targ$21 = ["flag", "print"], accum$7 = {}, t0$30 = $targ$21, accum$7.p = t0$30, accum$7.print = t0$30, accum$7), __amp____colon__(($targ$22 = ["value", "evaluate"], accum$8 = {}, t0$31 = $targ$22, accum$8.e = t0$31, accum$8.eval = t0$31, accum$8), __amp____colon__(($targ$23 = ["flag", "noboil"], accum$9 = {}, t0$32 = $targ$23, accum$9.n = t0$32, accum$9.noboil = t0$32, accum$9), __amp____colon__(($targ$24 = ["flag", "sourcemaps"], accum$10 = {}, t0$33 = $targ$24, accum$10.s = t0$33, accum$10.sourcemaps = t0$33, accum$10), __amp____colon__(($targ$25 = ["flag", "lazy"], accum$11 = {}, t0$34 = $targ$25, accum$11.l = t0$34, accum$11.lazy = t0$34, accum$11), __amp____colon__(($targ$26 = ["flag", "es6"], accum$12 = {}, t0$35 = $targ$26, accum$12["6"] = t0$35, accum$12.es6 = t0$35, accum$12), __amp____colon__(($targ$27 = ["flag", "es5"], accum$13 = {}, t0$36 = $targ$27, accum$13["5"] = t0$36, accum$13.es5 = t0$36, accum$13), ($targ$28 = ["flag", "verbose"], accum$14 = {}, t0$37 = $targ$28, accum$14.v = t0$37, accum$14.verbose = t0$37, accum$14))))))))), "option for compile");t0$38 = $targ$19;if (Array.isArray(t0$38) && (t1$15 = t0$38.length, t1$15 === 2)) {
              o$1 = t0$38[0];rest$1 = t0$38[1];
            } else {
              ___match_error($targ$19);
            }[o$1, rest$1];register$1 = require("./register");register$1.install(o$1.lazy);m$15$0 = rest$1;if (o$1.evaluate) {
              $targ$29 = _gen$0(o$1.evaluate, "<cli>", o$1);t0$40 = $targ$29;if (___hasprop(t0$40, "code") && (code$2 = t0$40.code, ___hasprop(t0$40, "map"))) {
                map$2 = t0$40.map;
              } else {
                ___match_error($targ$29);
              }[code$2, map$2];m$16$0 = null;if (o$1.output) {
                return fs$0.writeFileSync(o$1.output, code$2 + "\n");
              } else {
                $13$0 = require("js-beautify");beaut$1 = $13$0.js;return console.log(beaut$1(code$2));
              }
            } else {
              if (($$23714$0 = Array.isArray(m$15$0)) && (t0$39 = m$15$0.length, t0$39 === 0)) {
                return usage_error$0("Must provide at least one file or directory to compile.");
              } else {
                if ($$23714$0 && t0$39 === 1) {
                  p$1 = m$15$0[0];return compile_path$0(p$1, o$1);
                } else {
                  if (o$1.output) {
                    return usage_error$0("The -o option cannot be used if more than one file or directory is compiled.");
                  } else {
                    if (Array.isArray(m$15$0) && (t0$39 = m$15$0.length, t0$39 >= 0)) {
                      paths$0 = Array.prototype.slice.call(m$15$0, 0);acc$4 = [];temp$5 = null;m$17 = null;$14: for (var _iterator6 = paths$0[Symbol.iterator](), _step6; !(_step6 = _iterator6.next()).done;) {
                        m$17 = _step6.value;
                        var p$2 = undefined;p$2 = m$17;temp$5 = compile_path$0(p$2, o$1);acc$4.push(temp$5);
                      }return acc$4;
                    } else {
                      return ___match_error(m$15$0);
                    }
                  }
                }
              }
            }
          } else {
            stuff$0 = ph$6$0;return usage_error$0("Invalid use. Did you mean: earl run " + stuff$0.join(" "));
          }
        }
      }
    }
  }
};$targ$30 = run$0;exports.run = $targ$30;[];
//# sourceMappingURL=run.js.map

