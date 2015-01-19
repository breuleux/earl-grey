"use strict";
require("earlgrey-runtime");
var $targ$200;
var eg$0;
var $1$0;
var __lt____gt__$0;
var $2$0;
var Source$0;
var format_error$0;
var highlight_locations$0;
var fs$0;
var path$0;
var $3$0;
var usage$0;
var display_error$0;
var usage_error$0;
var extract_options$0;
var walk$0;
var copy$0;
var _gen$0;
var interactive$0;
var compile_path$0;
var run$0;
var _run$0;
eg$0 = require("./earl-grey");
$1$0 = require("./pp");
__lt____gt__$0 = $1$0["<>"];
$2$0 = require("./location");
Source$0 = $2$0.Source;
format_error$0 = $2$0.format_error;
highlight_locations$0 = $2$0.highlight_locations;
fs$0 = require("fs");
path$0 = require("path");
$3$0 = require("earlgrey-runtime");
usage$0 = "Usage: earl [global options] command [options] [arguments...]\n\nearl run [options] [file] [arguments...]\n  Run the specified file as a script. The arguments are available in\n  process.argv.slice{2} of the script.\n  Options:\n    -e  --eval <code>  Run the provided code instead of reading from a file.\n    -p  --print        Print the result of the evaluation to standard out.\n    -i  --interactive  Start an interactive interpreter after execution\n                       in the global environment of the script.\n\nearl compile [options] [file... | dir]\n  Compile the specified source files into .js files. The files will be\n  placed next to the originals.\n  If a directory is given, all .eg files in the directory hierarchy\n  will be compiled. The -o option can be used to compile the files\n  into a different directory (all non-eg files will be copied over).\n  Options:\n    -o  --output <dir>  Output in given directory.\n    -p  --print         Print the compiled JavaScript to standard out.\n                        No files are created.\n    -e  --eval <code>   Compile the provided code instead of reading from a file.\n    -n  --noboil        Don't produce boilerplate code (useful with -p)\n    -v  --verbose       Print information about the operations performed\n    -6  --es6           Generate EcmaScript v6\n\nearl\n  Start an interactive session.\n\nGlobal options:\n  -h  --help      Print this message.\n  -v  --version   Print the version\n";
display_error$0 = (function(temp$0$0) {
  var t0$0;
  var t2$0;
  var t1$0;
  var m$0;
  var acc$0;
  var $targ$29;
  var temp$1;
  var pr$0;
  var hls$0;
  var locs$0;
  var $targ$27;
  var accum$0;
  var t0$1;
  var args$0;
  var e$0;
  var ph$0$0;
  t0$0 = temp$0$0;
  e$0 = t0$0;
  ph$0$0 = t0$0;
  t0$1 = ph$0$0;
  if ((getChecker(ErrorFactory(["syntax"]))(t0$1) && (___hasprop(t0$1, "args") && ((t1$0 = t0$1.args), ((t1$0 instanceof Array) && ((t2$0 = t1$0.length), (t2$0 === 1))))))) {
    args$0 = t1$0[0];
    console.error(String(e$0));
    hls$0 = ["hl1", "hl2", "hl3", "hl4"];
    acc$0 = [];
    $targ$29 = null;
    temp$1 = $targ$29;
    m$0 = null;
    $4: for (var $__0 = enumerate(items(args$0))[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$0 = $__1.value;
      {
        var t3$0;
        var t2$1;
        var t1$1;
        var $targ$34;
        var t0$2;
        var i$0;
        var key$0;
        var arg$0;
        t0$2 = m$0;
        if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), ((t1$1 === 2) && ((i$0 = t0$2[0]), (t2$1 = t0$2[1]), ((t2$1 instanceof Array) && ((t3$0 = t2$1.length), ((t3$0 === 2) && ((key$0 = t2$1[0]), (arg$0 = t2$1[1]), (arg$0 && arg$0.location)))))))))) {
          $targ$34 = [arg$0.location, send(hls$0, (i$0 % 4))];
          temp$1 = $targ$34;
          acc$0.push(temp$1);
        } else {
          false;
        }
      }
    }
    locs$0 = acc$0;
    $targ$27 = "\n";
    accum$0 = $targ$27;
    pr$0 = (function(ph$1$0) {
      var l$0;
      var m$1$0;
      var t1$2;
      var t0$4;
      var m$2;
      var $targ$37;
      var pre$0;
      var post$0;
      var m$3;
      var acc$1;
      var $targ$43;
      var temp$2;
      var other$0;
      var a$0;
      var n$0;
      var t0$3;
      var s$0;
      var $$22296$0;
      t0$3 = ph$1$0;
      if ((typeof(t0$3) === "string")) {
        s$0 = t0$3;
        return (accum$0 = (accum$0 + s$0));
      } else {
        if (getChecker(Node)(t0$3)) {
          n$0 = t0$3;
          m$1$0 = n$0;
          if (getChecker(Node([".hl1"], ({}), []))(m$1$0)) {
            $targ$37 = ["[1;32m", "[0m"];
          } else {
            if (getChecker(Node([".hl2"], ({}), []))(m$1$0)) {
              $targ$37 = ["[1;33m", "[0m"];
            } else {
              if (getChecker(Node([".hl3"], ({}), []))(m$1$0)) {
                $targ$37 = ["[1;36m", "[0m"];
              } else {
                if (getChecker(Node([".hl4"], ({}), []))(m$1$0)) {
                  $targ$37 = ["[1;35m", "[0m"];
                } else {
                  if (getChecker(Node([".lineno"], ({}), []))(m$1$0)) {
                    l$0 = Math.floor((Math.log(n$0.children[0]) / Math.log(10)));
                    $targ$37 = [("[1m" + Array((3 - l$0)).join(" ")), ":[0m "];
                  } else {
                    $targ$37 = ["", ""];
                  }
                }
              }
            }
          }
          t0$4 = $targ$37;
          if (((t0$4 instanceof Array) && ((t1$2 = t0$4.length), (t1$2 === 2)))) {
            pre$0 = t0$4[0];
            post$0 = t0$4[1];
          } else {
            ___match_error($targ$37);
          }
          [pre$0, post$0];
          if (getChecker(Node([".sourcepos"], ({}), []))(n$0)) {
            pre$0 = (pre$0 + " ");
          }
          accum$0 = (accum$0 + pre$0);
          m$2 = null;
          $5: for (var $__2 = n$0.children[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__3; !($__3 = $__2.next()).done; ) {
            m$2 = $__3.value;
            {
              var child$0;
              child$0 = m$2;
              pr$0(child$0);
            }
          }
          accum$0 = (accum$0 + post$0);
          if ((getChecker(Node(["div"], ({}), []))(n$0) && nequal(send(accum$0, (accum$0.length - 1)), "\n"))) {
            return (accum$0 = (accum$0 + "\n"));
          }
        } else {
          if (getChecker(Array)(t0$3)) {
            a$0 = t0$3;
            acc$1 = [];
            $targ$43 = null;
            temp$2 = $targ$43;
            m$3 = null;
            $6: for (var $__4 = a$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__5; !($__5 = $__4.next()).done; ) {
              m$3 = $__5.value;
              {
                var $targ$44;
                var child$1;
                child$1 = m$3;
                $targ$44 = pr$0(child$1);
                temp$2 = $targ$44;
                acc$1.push(temp$2);
              }
            }
            return acc$1;
          } else {
            other$0 = ph$1$0;
            return (accum$0 = (accum$0 + String(other$0)));
          }
        }
      }
    });
    pr$0(highlight_locations$0(locs$0, 0));
    return console.error(accum$0);
  } else {
    return console.error((e$0.stack || String(e$0)));
  }
});
usage_error$0 = (function(message$0) {
  console.error(usage$0);
  console.error(message$0);
  return process.exit(1);
});
extract_options$0 = (function(temp$3$0, opttable$0, optmessage$0) {
  var t0$5;
  var results$0;
  var $targ$47;
  var associate$0;
  var process_option$0;
  var argv$0;
  t0$5 = getProjector(clone)(temp$3$0);
  if (t0$5[0]) {
    argv$0 = t0$5[1];
  } else {
    ___match_error(temp$3$0);
  }
  results$0 = ({});
  $targ$47 = null;
  associate$0 = $targ$47;
  process_option$0 = (function(original$0, opt$0, last$0) {
    var t0$6;
    var $targ$51;
    var $targ$53;
    var name$2;
    var $targ$52;
    var name$0;
    var $$22445$0;
    var $$22446$0;
    var $$22447$0;
    var $$22448$0;
    var m$4$0;
    m$4$0 = send(opttable$0, opt$0);
    if ((m$4$0 === (void 0))) {
      return usage_error$0(((("Unrecognized " + optmessage$0) + ": ") + original$0));
    } else {
      if ((($$22445$0 = (m$4$0 instanceof Array)) && ((t0$6 = m$4$0.length), (($$22447$0 = (t0$6 === 2)) && (m$4$0[0] === "flag"))))) {
        name$0 = m$4$0[1];
        $targ$51 = true;
        (results$0[name$0] = $targ$51);
        return [];
      } else {
        if (($$22447$0 && (($$22448$0 = (m$4$0[0] === "value")) && (($targ$52 = m$4$0[1]), last$0)))) {
          associate$0 = $targ$52;
          return associate$0;
        } else {
          if ($$22448$0) {
            name$2 = m$4$0[1];
            $targ$53 = true;
            (results$0[name$2] = $targ$53);
            return [];
          } else {
            return ___match_error(m$4$0);
          }
        }
      }
    }
  });
  $7: while (argv$0.length) {
    var $targ$58;
    var $targ$57;
    var $targ$60;
    var $targ$63;
    var $targ$62;
    var $targ$66;
    var $targ$65;
    var m$6;
    var acc$2;
    var $targ$68;
    var temp$4;
    var $targ$73;
    var other$2;
    var $targ$72;
    var $targ$64;
    var opts$0;
    var $targ$61;
    var opt$2;
    var $targ$56;
    var opt$1;
    var $targ$59;
    var t0$7;
    var t1$3;
    var t2$2;
    var m$5$0;
    var arg$1;
    arg$1 = argv$0.shift();
    m$5$0 = arg$1;
    $targ$56 = getProjector(RegExp("^--([a-zA-Z_0-9\\-]+)=(.*)", ""))(m$5$0);
    t0$7 = $targ$56;
    if ((t0$7[0] && (($targ$57 = t0$7[1]), (t1$3 = $targ$57), ($targ$58 = t1$3.length), (t2$2 = $targ$58), (t2$2 === 3)))) {
      t1$3[0];
      opt$1 = t1$3[1];
      $targ$59 = t1$3[2];
      process_option$0(arg$1, opt$1, true);
      (results$0[associate$0] = $targ$59);
      [];
      $targ$60 = null;
      associate$0 = $targ$60;
      associate$0;
    } else {
      $targ$61 = getProjector(RegExp("^--([a-zA-Z_\\-0-9]+)", ""))(m$5$0);
      t0$7 = $targ$61;
      if ((t0$7[0] && (($targ$62 = t0$7[1]), (t1$3 = $targ$62), ($targ$63 = t1$3.length), (t2$2 = $targ$63), (t2$2 === 2)))) {
        t1$3[0];
        opt$2 = t1$3[1];
        process_option$0(arg$1, opt$2, true);
      } else {
        $targ$64 = getProjector(RegExp("^-([a-zA-Z_0-9]+)", ""))(m$5$0);
        t0$7 = $targ$64;
        if ((t0$7[0] && (($targ$65 = t0$7[1]), (t1$3 = $targ$65), ($targ$66 = t1$3.length), (t2$2 = $targ$66), (t2$2 === 2)))) {
          t1$3[0];
          opts$0 = t1$3[1];
          acc$2 = [];
          $targ$68 = null;
          temp$4 = $targ$68;
          m$6 = null;
          $8: for (var $__0 = enumerate(opts$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$6 = $__1.value;
            {
              var t1$4;
              var $targ$71;
              var t0$8;
              var i$1;
              var ch$0;
              t0$8 = m$6;
              if (((t0$8 instanceof Array) && ((t1$4 = t0$8.length), (t1$4 === 2)))) {
                i$1 = t0$8[0];
                ch$0 = t0$8[1];
                $targ$71 = process_option$0(arg$1, ch$0, equal(i$1, (opts$0.length - 1)));
                temp$4 = $targ$71;
                acc$2.push(temp$4);
              } else {
                ___match_error(m$6, "/home/olivier/git/earl-grey/src/run.eg", 3993, 4270);
              }
            }
          }
          acc$2;
        } else {
          $targ$72 = m$5$0;
          if (associate$0) {
            (results$0[associate$0] = $targ$72);
            [];
            $targ$73 = null;
            associate$0 = $targ$73;
            associate$0;
          } else {
            other$2 = m$5$0;
            argv$0.unshift(other$2);
            break $7;
          }
        }
      }
    }
  }
  return [results$0, argv$0];
});
walk$0 = (function(dir$0, partial$0, f$0) {
  var m$7;
  var acc$3;
  var $targ$76;
  var temp$5;
  var stats$0;
  stats$0 = fs$0.statSync(dir$0);
  if (stats$0.isDirectory()) {
    f$0("dir", partial$0);
    acc$3 = [];
    $targ$76 = null;
    temp$5 = $targ$76;
    m$7 = null;
    $9: for (var $__0 = fs$0.readdirSync(dir$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$7 = $__1.value;
      {
        var newdir$0;
        var newpartial$0;
        var $targ$77;
        var file$0;
        file$0 = m$7;
        newdir$0 = path$0.join(dir$0, file$0);
        newpartial$0 = path$0.join(partial$0, file$0);
        $targ$77 = walk$0(newdir$0, newpartial$0, f$0);
        temp$5 = $targ$77;
        acc$3.push(temp$5);
      }
    }
    return acc$3;
  } else {
    return f$0("file", partial$0);
  }
});
copy$0 = (function(src$0, dest$0) {
  var data$0;
  data$0 = fs$0.readFileSync(src$0, "binary");
  return fs$0.writeFileSync(dest$0, data$0, "binary");
});
_gen$0 = (function() {
  var g$0;
  var t0$9;
  var text$0;
  var file$1;
  var noboil$0;
  var to5$0;
  var m$8$0;
  m$8$0 = arguments;
  t0$9 = m$8$0.length;
  if (((t0$9 >= 2) && (t0$9 <= 4))) {
    text$0 = m$8$0[0];
    file$1 = m$8$0[1];
    if ((2 >= t0$9)) {
      noboil$0 = false;
    } else {
      noboil$0 = m$8$0[2];
    }
    if ((3 >= t0$9)) {
      to5$0 = true;
    } else {
      to5$0 = m$8$0[3];
    }
    g$0 = eg$0.Generator();
    return g$0.generate(Source$0(text$0, path$0.resolve(file$1)), (!noboil$0), to5$0);
  } else {
    return ___match_error(m$8$0);
  }
});
interactive$0 = (function(g$1, e$1) {
  var $targ$88;
  var accum$1;
  var repl$0;
  var $targ$85;
  var settings$0;
  var runner$0;
  repl$0 = require("repl");
  $targ$85 = true;
  (g$1["interactive"] = $targ$85);
  [];
  settings$0 = __amp____colon__(({
    "prompt": "<> ",
    "ignoreUndefined": true
  }), (($targ$88 = (function(input$0, context$0, filename$0, callback$0) {
    var $targ$95;
    var $targ$94;
    var rval$0;
    var execute$0;
    var handle$0;
    var result$0;
    execute$0 = (function() {
      var $targ$93;
      var $targ$92;
      var text$1;
      $targ$92 = g$1.generate(Source$0(input$0.slice(1, -1), "<interactive>"));
      text$1 = $targ$92;
      if (equal(text$1, "\"use strict\";\n//# sourceURL=<compile-source>")) {
        $targ$93 = "";
        text$1 = $targ$93;
        text$1;
      }
      return e$1(text$1);
    });
    handle$0 = (function(e$2) {
      display_error$0(e$2);
      return undefined;
    });
    $targ$94 = false;
    rval$0 = $targ$94;
    try {
      $targ$95 = execute$0();
      rval$0 = $targ$95;
      rval$0;
    } catch (excv$0) {
      var $targ$96;
      var e$3;
      e$3 = excv$0;
      $targ$96 = handle$0(e$3);
      rval$0 = $targ$96;
      rval$0;
    }
    result$0 = rval$0;
    return callback$0(null, result$0);
  })), (accum$1 = ({})), (accum$1["eval"] = $targ$88), accum$1));
  runner$0 = repl$0.start(settings$0);
  return runner$0.on("exit", (function() {
    return runner$0.outputStream.write("\n");
  }));
});
compile_path$0 = (function(p$0, opts$1) {
  var out$0;
  var $10$0;
  var beaut$0;
  var t2$3;
  var t1$7;
  var name$5;
  var t0$14;
  var name$4;
  var m$12$0;
  var noext$0;
  var $$22959$0;
  var m$11$0;
  var data$2;
  var code$0;
  var $$22801$0;
  var m$9$0;
  var stats$1;
  stats$1 = fs$0.statSync(p$0);
  m$9$0 = null;
  if (stats$1.isDirectory()) {
    if (opts$1.print) {
      usage_error$0("Cannot use --print when compiling a directory");
    }
    out$0 = (opts$1.output || p$0);
    return walk$0(p$0, "/", (function() {
      var $targ$107;
      var $targ$106;
      var rval$1;
      var to$0;
      var from$0;
      var t1$6;
      var t0$13;
      var $targ$110;
      var x$0;
      var name$3;
      var from$1;
      var to$1;
      var data$1;
      var from$2;
      var to$2;
      var f$1;
      var t0$12;
      var results$1;
      var ph$4$0;
      var t0$11;
      var t1$5;
      var d$0;
      var $$22829$0;
      var $$22830$0;
      var $$22831$0;
      var t0$10;
      var ph$3$0;
      var m$10$0;
      m$10$0 = arguments;
      t0$10 = m$10$0.length;
      if ((t0$10 >= 0)) {
        ph$3$0 = Array.prototype.slice.call(m$10$0, 0);
        t0$11 = ph$3$0;
        t1$5 = t0$11.length;
        if ((($$22831$0 = (t1$5 === 2)) && (t0$11[0] === "dir"))) {
          d$0 = t0$11[1];
          from$0 = path$0.join(p$0, d$0);
          if (opts$1.output) {
            to$0 = path$0.join(out$0, d$0);
            $targ$106 = false;
            rval$1 = $targ$106;
            try {
              $targ$107 = fs$0.mkdirSync(to$0);
              rval$1 = $targ$107;
              rval$1;
            } catch (excv$1) {
              var $targ$108;
              var e$4;
              e$4 = excv$1;
              $targ$108 = "ignore error";
              rval$1 = $targ$108;
              rval$1;
            }
            return rval$1;
          }
        } else {
          if (($$22831$0 && (t0$11[0] === "file"))) {
            ph$4$0 = t0$11[1];
            t0$12 = getProjector(RegExp("(?:^((?:.*))\\.eg$)", ""))(ph$4$0);
            if ((t0$12[0] && ((results$1 = t0$12[1]), results$1))) {
              $targ$110 = results$1;
              t0$13 = $targ$110;
              if (((t0$13 instanceof Array) && ((t1$6 = t0$13.length), (t1$6 === 2)))) {
                x$0 = t0$13[0];
                name$3 = t0$13[1];
              } else {
                ___match_error($targ$110);
              }
              [x$0, name$3];
              from$1 = path$0.join(p$0, x$0);
              to$1 = path$0.join(out$0, (name$3 + ".js"));
              data$1 = fs$0.readFileSync(from$1, "utf8");
              if (opts$1.verbose) {
                console.log("Compiling:", from$1);
              }
              return fs$0.writeFileSync(to$1, (_gen$0(data$1, from$1, opts$1.noboil, (!opts$1["es6"])) + "\n"));
            } else {
              if ((!opts$1.output)) {
                return null;
              } else {
                f$1 = ph$4$0;
                from$2 = path$0.join(p$0, f$1);
                to$2 = path$0.join(out$0, f$1);
                return copy$0(from$2, to$2);
              }
            }
          } else {
            return ___match_error(ph$3$0);
          }
        }
      } else {
        return ___match_error(m$10$0);
      }
    }));
  } else {
    data$2 = fs$0.readFileSync(p$0, "utf8");
    code$0 = _gen$0(data$2, p$0, opts$1.noboil, (!opts$1["es6"]));
    m$11$0 = null;
    if (opts$1.print) {
      $10$0 = require("js-beautify");
      beaut$0 = $10$0.js;
      return console.log(beaut$0(code$0));
    } else {
      if (opts$1.output) {
        return fs$0.writeFileSync(opts$1.output, (code$0 + "\n"));
      } else {
        m$12$0 = p$0;
        t0$14 = getProjector(RegExp("^(.*).eg$", ""))(m$12$0);
        if ((t0$14[0] && ((t1$7 = t0$14[1]), (t2$3 = t1$7.length), (t2$3 === 2)))) {
          t1$7[0];
          name$4 = t1$7[1];
          noext$0 = name$4;
        } else {
          name$5 = m$12$0;
          noext$0 = name$5;
        }
        return fs$0.writeFileSync((noext$0 + ".js"), (code$0 + "\n"));
      }
    }
  }
});
run$0 = (function(argv$1) {
  var t1$8;
  var t0$15;
  var $targ$132;
  var $targ$131;
  var rval$2;
  var $targ$128;
  var opts$2;
  var cmd$0;
  $targ$128 = extract_options$0(argv$1, ({
    "h": ["flag", "help"],
    "help": ["flag", "help"],
    "v": ["flag", "version"],
    "version": ["flag", "version"]
  }), "global option");
  t0$15 = $targ$128;
  if (((t0$15 instanceof Array) && ((t1$8 = t0$15.length), (t1$8 === 2)))) {
    opts$2 = t0$15[0];
    cmd$0 = t0$15[1];
  } else {
    ___match_error($targ$128);
  }
  [opts$2, cmd$0];
  $targ$131 = false;
  rval$2 = $targ$131;
  try {
    $targ$132 = _run$0(cmd$0, opts$2);
    rval$2 = $targ$132;
    rval$2;
  } catch (excv$2) {
    var $targ$133;
    var e$5;
    e$5 = excv$2;
    display_error$0(e$5);
    $targ$133 = process.exit(1);
    rval$2 = $targ$133;
    rval$2;
  }
  return rval$2;
});
_run$0 = (function(ph$5$0, opts$3) {
  var t0$17;
  var t0$18;
  var t1$10;
  var t0$19;
  var data$4;
  var t0$20;
  var file$3;
  var m$13$0;
  var t1$11;
  var t0$21;
  var $targ$139;
  var o$0;
  var rest$0;
  var $targ$140;
  var file$2;
  var wd$0;
  var data$3;
  var args$1;
  var $targ$141;
  var e$6;
  var g$2;
  var result$1;
  var t1$12;
  var t0$22;
  var $$23242$0;
  var m$15$0;
  var code$1;
  var $targ$158;
  var $targ$159;
  var m$16;
  var acc$4;
  var $targ$161;
  var temp$6;
  var paths$0;
  var p$1;
  var $$23213$0;
  var $$23214$0;
  var t0$23;
  var m$14$0;
  var $targ$152;
  var o$1;
  var rest$1;
  var bridge$$23079$0;
  var data$6;
  var $12$0;
  var beaut$1;
  var data$7;
  var otherwise$0;
  var $$23320$0;
  var m$17$0;
  var out$1;
  var stats$2;
  var m$19;
  var acc$5;
  var $targ$190;
  var temp$7;
  var tokens$0;
  var walkloc$0;
  var stuff$0;
  var s$2;
  var s$1;
  var file$4;
  var args$2;
  var rawargs$1;
  var t0$16;
  var t1$9;
  var rawargs$0;
  var bridge$$23075$0;
  var $$23083$0;
  var $$23084$0;
  var $$23085$0;
  if (opts$3.help) {
    return console.log(usage$0);
  } else {
    if (opts$3.version) {
      return console.log("Earl Grey version", eg$0.version);
    } else {
      bridge$$23075$0 = ph$5$0;
      if ((((bridge$$23075$0 instanceof Array) && ((t0$17 = bridge$$23075$0.length), (t0$17 === 0))) || ((bridge$$23075$0 instanceof Array) && ((t0$18 = bridge$$23075$0.length), ((t0$18 === 1) && (bridge$$23075$0[0] === "run")))))) {
        return _run$0(["run", "-i"], opts$3);
      } else {
        t0$16 = ph$5$0;
        t1$9 = t0$16.length;
        if ((($$23085$0 = (t1$9 >= 1)) && (t0$16[0] === "run"))) {
          rawargs$0 = Array.prototype.slice.call(t0$16, 1);
          $targ$139 = extract_options$0(rawargs$0, ({
            "e": ["value", "evaluate"],
            "eval": ["value", "evaluate"],
            "p": ["flag", "print"],
            "print": ["flag", "print"],
            "i": ["flag", "interactive"],
            "interactive": ["flag", "interactive"]
          }), "option for run");
          t0$19 = $targ$139;
          if (((t0$19 instanceof Array) && ((t1$10 = t0$19.length), (t1$10 === 2)))) {
            o$0 = t0$19[0];
            rest$0 = t0$19[1];
          } else {
            ___match_error($targ$139);
          }
          [o$0, rest$0];
          if (o$0.evaluate) {
            $targ$140 = ["<repl>", process.cwd(), o$0.evaluate, rest$0];
          } else {
            m$13$0 = rest$0.shift();
            if (((m$13$0 === (void 0)) && o$0.interactive)) {
              $targ$140 = ["<repl>", process.cwd(), "", rest$0];
            } else {
              if ((m$13$0 === (void 0))) {
                $targ$140 = usage_error$0("No filename specified.");
              } else {
                t0$20 = getProjector(path$0.resolve)(m$13$0);
                if (t0$20[0]) {
                  file$3 = t0$20[1];
                  data$4 = fs$0.readFileSync(file$3, "utf8");
                  $targ$140 = [file$3, file$3, data$4, rest$0];
                } else {
                  $targ$140 = ___match_error(m$13$0);
                }
              }
            }
          }
          t0$21 = $targ$140;
          if (((t0$21 instanceof Array) && ((t1$11 = t0$21.length), (t1$11 === 4)))) {
            file$2 = t0$21[0];
            wd$0 = t0$21[1];
            data$3 = t0$21[2];
            args$1 = t0$21[3];
          } else {
            ___match_error($targ$140);
          }
          [file$2, wd$0, data$3, args$1];
          $targ$141 = ["earl-run", file$2].concat(rest$0);
          (process["argv"] = $targ$141);
          [];
          e$6 = eg$0.evaluator(({
            "filename": file$2,
            "showname": file$2,
            "cwd": file$2
          }));
          g$2 = eg$0.Generator(o$0.interactive);
          result$1 = e$6(g$2.generate(Source$0(data$3, file$2)));
          if (o$0.print) {
            console.log(result$1);
          }
          if (o$0.interactive) {
            return interactive$0(g$2, e$6);
          }
        } else {
          if (($$23085$0 && (t0$16[0] === "compile"))) {
            rawargs$1 = Array.prototype.slice.call(t0$16, 1);
            $targ$152 = extract_options$0(rawargs$1, ({
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
            }), "option for compile");
            t0$22 = $targ$152;
            if (((t0$22 instanceof Array) && ((t1$12 = t0$22.length), (t1$12 === 2)))) {
              o$1 = t0$22[0];
              rest$1 = t0$22[1];
            } else {
              ___match_error($targ$152);
            }
            [o$1, rest$1];
            m$14$0 = rest$1;
            if (o$1.evaluate) {
              code$1 = _gen$0(o$1.evaluate, "<cli>", o$1.noboil, (!o$1["es6"]));
              m$15$0 = null;
              if (o$1.output) {
                return fs$0.writeFileSync(o$1.output, (code$1 + "\n"));
              } else {
                return console.log(code$1);
              }
            } else {
              if ((($$23213$0 = (m$14$0 instanceof Array)) && (($targ$158 = m$14$0.length), (t0$23 = $targ$158), (t0$23 === 0)))) {
                return usage_error$0("Must provide at least one file or directory to compile.");
              } else {
                if (($$23213$0 && (t0$23 === 1))) {
                  p$1 = m$14$0[0];
                  return compile_path$0(p$1, o$1);
                } else {
                  if (o$1.output) {
                    return usage_error$0("The -o option cannot be used if more than one file or directory is compiled.");
                  } else {
                    if (((m$14$0 instanceof Array) && (($targ$159 = m$14$0.length), (t0$23 = $targ$159), (t0$23 >= 0)))) {
                      paths$0 = Array.prototype.slice.call(m$14$0, 0);
                      acc$4 = [];
                      $targ$161 = null;
                      temp$6 = $targ$161;
                      m$16 = null;
                      $11: for (var $__0 = paths$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__1; !($__1 = $__0.next()).done; ) {
                        m$16 = $__1.value;
                        {
                          var $targ$162;
                          var p$2;
                          p$2 = m$16;
                          $targ$162 = compile_path$0(p$2, o$1);
                          temp$6 = $targ$162;
                          acc$4.push(temp$6);
                        }
                      }
                      return acc$4;
                    } else {
                      return ___match_error(m$14$0);
                    }
                  }
                }
              }
            }
          } else {
            if (((t1$9 >= 2) && ((bridge$$23079$0 = t0$16[0]), ((bridge$$23079$0 === "tr") || (bridge$$23079$0 === "translate"))))) {
              file$4 = t0$16[1];
              args$2 = Array.prototype.slice.call(t0$16, 2);
              out$1 = args$2[0];
              stats$2 = fs$0.statSync(file$4);
              m$17$0 = null;
              if (stats$2.isDirectory()) {
                return walk$0(file$4, "/", (function() {
                  var $targ$174;
                  var $targ$173;
                  var rval$3;
                  var from$3;
                  var to$3;
                  var t1$14;
                  var t0$27;
                  var $targ$177;
                  var x$1;
                  var name$6;
                  var from$4;
                  var to$4;
                  var data$5;
                  var from$5;
                  var to$5;
                  var f$2;
                  var t0$26;
                  var results$2;
                  var ph$8$0;
                  var t0$25;
                  var t1$13;
                  var d$1;
                  var $$23344$0;
                  var $$23345$0;
                  var $$23346$0;
                  var t0$24;
                  var ph$7$0;
                  var m$18$0;
                  m$18$0 = arguments;
                  t0$24 = m$18$0.length;
                  if ((t0$24 >= 0)) {
                    ph$7$0 = Array.prototype.slice.call(m$18$0, 0);
                    t0$25 = ph$7$0;
                    t1$13 = t0$25.length;
                    if ((($$23346$0 = (t1$13 === 2)) && (t0$25[0] === "dir"))) {
                      d$1 = t0$25[1];
                      from$3 = path$0.join(file$4, d$1);
                      to$3 = path$0.join(out$1, d$1);
                      $targ$173 = false;
                      rval$3 = $targ$173;
                      try {
                        $targ$174 = fs$0.mkdirSync(to$3);
                        rval$3 = $targ$174;
                        rval$3;
                      } catch (excv$3) {
                        var $targ$175;
                        var e$7;
                        e$7 = excv$3;
                        $targ$175 = "ignore error";
                        rval$3 = $targ$175;
                        rval$3;
                      }
                      return rval$3;
                    } else {
                      if (($$23346$0 && (t0$25[0] === "file"))) {
                        ph$8$0 = t0$25[1];
                        t0$26 = getProjector(RegExp("(?:^((?:.*))\\.eg$)", ""))(ph$8$0);
                        if ((t0$26[0] && ((results$2 = t0$26[1]), results$2))) {
                          $targ$177 = results$2;
                          t0$27 = $targ$177;
                          if (((t0$27 instanceof Array) && ((t1$14 = t0$27.length), (t1$14 === 2)))) {
                            x$1 = t0$27[0];
                            name$6 = t0$27[1];
                          } else {
                            ___match_error($targ$177);
                          }
                          [x$1, name$6];
                          from$4 = path$0.join(file$4, x$1);
                          to$4 = path$0.join(out$1, (name$6 + ".js"));
                          data$5 = fs$0.readFileSync(from$4, "utf8");
                          return fs$0.writeFileSync(to$4, (_gen$0(data$5, from$4) + "\n"));
                        } else {
                          f$2 = ph$8$0;
                          from$5 = path$0.join(file$4, f$2);
                          to$5 = path$0.join(out$1, f$2);
                          return copy$0(from$5, to$5);
                        }
                      } else {
                        return ___match_error(ph$7$0);
                      }
                    }
                  } else {
                    return ___match_error(m$18$0);
                  }
                }));
              } else {
                if (out$1) {
                  data$6 = fs$0.readFileSync(file$4, "utf8");
                  return fs$0.writeFileSync(out$1, (_gen$0(data$6, file$4) + "\n"));
                } else {
                  otherwise$0 = m$17$0;
                  $12$0 = require("js-beautify");
                  beaut$1 = $12$0.js;
                  data$7 = fs$0.readFileSync(file$4, "utf8");
                  return console.log(beaut$1(_gen$0(data$7, file$4)));
                }
              }
            } else {
              if ((($$23085$0 = (t1$9 === 2)) && (t0$16[0] === "tok"))) {
                s$1 = t0$16[1];
                acc$5 = [];
                $targ$190 = null;
                temp$7 = $targ$190;
                m$19 = null;
                $13: for (var $__2 = eg$0.tokenize(Source$0(s$1, null))[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__3; !($__3 = $__2.next()).done; ) {
                  m$19 = $__3.value;
                  {
                    var $targ$191;
                    var token$0;
                    token$0 = m$19;
                    __lt____gt__$0(null, token$0);
                    __lt____gt__$0(null, token$0.location.ref());
                    $targ$191 = __lt____gt__$0(null, token$0.location.highlight());
                    temp$7 = $targ$191;
                    acc$5.push(temp$7);
                  }
                }
                return acc$5;
              } else {
                if (($$23085$0 && (t0$16[0] === "pa"))) {
                  s$2 = t0$16[1];
                  walkloc$0 = (function(temp$8$0) {
                    var t0$28;
                    var m$20;
                    var acc$6;
                    var $targ$197;
                    var temp$9;
                    var type$0;
                    var args$3;
                    var x$3;
                    var t0$29;
                    var t1$15;
                    var x$2;
                    var $$23521$0;
                    var $$23522$0;
                    var $$23523$0;
                    var node$0;
                    var ph$9$0;
                    t0$28 = temp$8$0;
                    node$0 = t0$28;
                    ph$9$0 = t0$28;
                    t0$29 = ph$9$0;
                    t1$15 = t0$29.length;
                    if ((($$23523$0 = (t1$15 === 2)) && (t0$29[0] === "symbol"))) {
                      x$2 = t0$29[1];
                      __lt____gt__$0(null, node$0);
                      return __lt____gt__$0(null, (node$0.location && node$0.location.highlight()));
                    } else {
                      if (($$23523$0 && (t0$29[0] === "value"))) {
                        x$3 = t0$29[1];
                        __lt____gt__$0(null, node$0);
                        return __lt____gt__$0(null, (node$0.location && node$0.location.highlight()));
                      } else {
                        if ((t1$15 >= 1)) {
                          type$0 = t0$29[0];
                          args$3 = Array.prototype.slice.call(t0$29, 1);
                          __lt____gt__$0(null, node$0);
                          __lt____gt__$0(null, (node$0.location && node$0.location.highlight()));
                          acc$6 = [];
                          $targ$197 = null;
                          temp$9 = $targ$197;
                          m$20 = null;
                          $14: for (var $__4 = args$3[$traceurRuntime.toProperty(Symbol.iterator)](),
                              $__5; !($__5 = $__4.next()).done; ) {
                            m$20 = $__5.value;
                            {
                              var $targ$198;
                              var arg$2;
                              arg$2 = m$20;
                              $targ$198 = walkloc$0(arg$2);
                              temp$9 = $targ$198;
                              acc$6.push(temp$9);
                            }
                          }
                          return acc$6;
                        } else {
                          return ___match_error(ph$9$0);
                        }
                      }
                    }
                  });
                  return walkloc$0(((tokens$0 = eg$0.tokenize(Source$0(s$2, null))), eg$0.parse(tokens$0)));
                } else {
                  stuff$0 = ph$5$0;
                  return usage_error$0(("Invalid use. Did you mean: earl run " + stuff$0.join(" ")));
                }
              }
            }
          }
        }
      }
    }
  }
});
$targ$200 = run$0;
(exports["run"] = $targ$200);
[];
//# sourceURL=<compile-source>
