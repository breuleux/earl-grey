"use strict";
require("earlgrey-runtime");
var $targ$186;
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
  var t1$0;
  var t0$1;
  var m$1;
  var acc$0;
  var pr$0;
  var hls$0;
  var locs$0;
  var $targ$27;
  var accum$0;
  var args$0;
  var m$0$0;
  var ph$0;
  var e$0;
  t0$0 = temp$0$0;
  e$0 = t0$0;
  ph$0 = t0$0;
  m$0$0 = ph$0;
  if ((getChecker(ErrorFactory(["syntax"]))(m$0$0) && (___hasprop(m$0$0, "args") && ((t0$1 = m$0$0.args), ((t0$1 instanceof Array) && ((t1$0 = t0$1.length), (t1$0 === 1))))))) {
    args$0 = t0$1[0];
    console.error(String(e$0));
    hls$0 = ["hl1", "hl2", "hl3", "hl4"];
    locs$0 = ((acc$0 = []), (m$1 = null), (function() {
      $4: for (var $__0 = enumerate(items(args$0))[$traceurRuntime.toProperty(Symbol.iterator)](),
          $__1; !($__1 = $__0.next()).done; ) {
        m$1 = $__1.value;
        {
          var t3$0;
          var t2$0;
          var t1$1;
          var t0$2;
          var i$0;
          var key$0;
          var arg$0;
          t0$2 = m$1;
          if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), ((t1$1 === 2) && ((i$0 = t0$2[0]), (t2$0 = t0$2[1]), ((t2$0 instanceof Array) && ((t3$0 = t2$0.length), ((t3$0 === 2) && ((key$0 = t2$0[0]), (arg$0 = t2$0[1]), (arg$0 && arg$0.location)))))))))) {
            acc$0.push([arg$0.location, send(hls$0, (i$0 % 4))]);
          } else {
            false;
          }
        }
      }
    })(), acc$0);
    $targ$27 = "\n";
    accum$0 = $targ$27;
    pr$0 = (function(temp$1$0) {
      var l$0;
      var m$3$0;
      var t1$2;
      var t0$3;
      var m$4;
      var $targ$35;
      var pre$0;
      var post$0;
      var m$5;
      var acc$1;
      var other$0;
      var a$0;
      var n$0;
      var s$0;
      var m$2$0;
      var ph$1;
      ph$1 = temp$1$0;
      m$2$0 = ph$1;
      if ((typeof(m$2$0) === "string")) {
        s$0 = m$2$0;
        return (accum$0 = (accum$0 + s$0));
      } else {
        if (getChecker(Node)(m$2$0)) {
          n$0 = m$2$0;
          $targ$35 = ((m$3$0 = n$0), (getChecker(Node([".hl1"], ({}), []))(m$3$0) ? ["[1;32m", "[0m"] : (getChecker(Node([".hl2"], ({}), []))(m$3$0) ? ["[1;33m", "[0m"] : (getChecker(Node([".hl3"], ({}), []))(m$3$0) ? ["[1;36m", "[0m"] : (getChecker(Node([".hl4"], ({}), []))(m$3$0) ? ["[1;35m", "[0m"] : (getChecker(Node([".lineno"], ({}), []))(m$3$0) ? ((l$0 = Math.floor((Math.log(n$0.children[0]) / Math.log(10)))), [("[1m" + Array((3 - l$0)).join(" ")), ":[0m "]) : (m$3$0, ["", ""])))))));
          t0$3 = $targ$35;
          if (((t0$3 instanceof Array) && ((t1$2 = t0$3.length), (t1$2 === 2)))) {
            pre$0 = t0$3[0];
            post$0 = t0$3[1];
          } else {
            ___match_error($targ$35);
          }
          if (getChecker(Node([".sourcepos"], ({}), []))(n$0)) {
            pre$0 = (pre$0 + " ");
          }
          accum$0 = (accum$0 + pre$0);
          m$4 = null;
          $5: for (var $__0 = n$0.children[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$4 = $__1.value;
            {
              var child$0;
              child$0 = m$4;
              pr$0(child$0);
            }
          }
          accum$0 = (accum$0 + post$0);
          if ((getChecker(Node(["div"], ({}), []))(n$0) && nequal(send(accum$0, (accum$0.length - 1)), "\n"))) {
            return (accum$0 = (accum$0 + "\n"));
          }
        } else {
          if (getChecker(Array)(m$2$0)) {
            a$0 = m$2$0;
            acc$1 = [];
            m$5 = null;
            $6: for (var $__2 = a$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                $__3; !($__3 = $__2.next()).done; ) {
              m$5 = $__3.value;
              {
                var child$1;
                child$1 = m$5;
                acc$1.push(pr$0(child$1));
              }
            }
            return acc$1;
          } else {
            other$0 = m$2$0;
            return (accum$0 = (accum$0 + String(other$0)));
          }
        }
      }
    });
    pr$0(highlight_locations$0(locs$0, 0));
    return console.error(accum$0);
  } else {
    m$0$0;
    return console.error((e$0.stack || String(e$0)));
  }
});
usage_error$0 = (function(message$0) {
  console.error(usage$0);
  console.error(message$0);
  return process.exit(1);
});
extract_options$0 = (function(temp$2$0, opttable$0, optmessage$0) {
  var t0$4;
  var results$0;
  var $targ$43;
  var associate$0;
  var process_option$0;
  var argv$0;
  t0$4 = getProjector(clone)(temp$2$0);
  if (t0$4[0]) {
    argv$0 = t0$4[1];
  } else {
    ___match_error(temp$2$0);
  }
  results$0 = ({});
  $targ$43 = null;
  associate$0 = $targ$43;
  process_option$0 = (function(original$0, opt$0, last$0) {
    var t0$5;
    var $targ$47;
    var $targ$49;
    var name$2;
    var $targ$48;
    var name$0;
    var $$20613$0;
    var $$20614$0;
    var $$20615$0;
    var $$20616$0;
    var m$6$0;
    m$6$0 = send(opttable$0, opt$0);
    if ((m$6$0 === (void 0))) {
      return usage_error$0(((("Unrecognized " + optmessage$0) + ": ") + original$0));
    } else {
      if ((($$20613$0 = (m$6$0 instanceof Array)) && ((t0$5 = m$6$0.length), (($$20615$0 = (t0$5 === 2)) && (m$6$0[0] === "flag"))))) {
        name$0 = m$6$0[1];
        $targ$47 = true;
        return (results$0[name$0] = $targ$47);
      } else {
        if (($$20615$0 && (($$20616$0 = (m$6$0[0] === "value")) && (($targ$48 = m$6$0[1]), last$0)))) {
          return (associate$0 = $targ$48);
        } else {
          if ($$20616$0) {
            name$2 = m$6$0[1];
            $targ$49 = true;
            return (results$0[name$2] = $targ$49);
          } else {
            return ___match_error(m$6$0);
          }
        }
      }
    }
  });
  $7: while (argv$0.length) {
    var $targ$54;
    var $targ$53;
    var $targ$56;
    var $targ$59;
    var $targ$58;
    var $targ$62;
    var $targ$61;
    var m$8;
    var acc$2;
    var $targ$67;
    var other$2;
    var $targ$66;
    var $targ$60;
    var opts$0;
    var $targ$57;
    var opt$2;
    var $targ$52;
    var opt$1;
    var $targ$55;
    var t0$6;
    var t1$3;
    var t2$1;
    var m$7$0;
    var arg$1;
    arg$1 = argv$0.shift();
    m$7$0 = arg$1;
    $targ$52 = getProjector(RegExp("^--([a-zA-Z_0-9\\-]+)=(.*)", ""))(m$7$0);
    t0$6 = $targ$52;
    if ((t0$6[0] && (($targ$53 = t0$6[1]), (t1$3 = $targ$53), ($targ$54 = t1$3.length), (t2$1 = $targ$54), (t2$1 === 3)))) {
      t1$3[0];
      opt$1 = t1$3[1];
      $targ$55 = t1$3[2];
      process_option$0(arg$1, opt$1, true);
      (results$0[associate$0] = $targ$55);
      $targ$56 = null;
      associate$0 = $targ$56;
    } else {
      $targ$57 = getProjector(RegExp("^--([a-zA-Z_\\-0-9]+)", ""))(m$7$0);
      t0$6 = $targ$57;
      if ((t0$6[0] && (($targ$58 = t0$6[1]), (t1$3 = $targ$58), ($targ$59 = t1$3.length), (t2$1 = $targ$59), (t2$1 === 2)))) {
        t1$3[0];
        opt$2 = t1$3[1];
        process_option$0(arg$1, opt$2, true);
      } else {
        $targ$60 = getProjector(RegExp("^-([a-zA-Z_0-9]+)", ""))(m$7$0);
        t0$6 = $targ$60;
        if ((t0$6[0] && (($targ$61 = t0$6[1]), (t1$3 = $targ$61), ($targ$62 = t1$3.length), (t2$1 = $targ$62), (t2$1 === 2)))) {
          t1$3[0];
          opts$0 = t1$3[1];
          acc$2 = [];
          m$8 = null;
          $8: for (var $__0 = enumerate(opts$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$8 = $__1.value;
            {
              var t1$4;
              var t0$7;
              var i$1;
              var ch$0;
              t0$7 = m$8;
              if (((t0$7 instanceof Array) && ((t1$4 = t0$7.length), (t1$4 === 2)))) {
                i$1 = t0$7[0];
                ch$0 = t0$7[1];
                acc$2.push(process_option$0(arg$1, ch$0, equal(i$1, (opts$0.length - 1))));
              } else {
                ___match_error(m$8, "/home/olivier/git/earl-grey/src/run.eg", 3993, 4270);
              }
            }
          }
          acc$2;
        } else {
          $targ$66 = m$7$0;
          if (associate$0) {
            (results$0[associate$0] = $targ$66);
            $targ$67 = null;
            associate$0 = $targ$67;
          } else {
            other$2 = m$7$0;
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
  var m$9;
  var acc$3;
  var stats$0;
  stats$0 = fs$0.statSync(dir$0);
  if (stats$0.isDirectory()) {
    f$0("dir", partial$0);
    acc$3 = [];
    m$9 = null;
    $9: for (var $__0 = fs$0.readdirSync(dir$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$9 = $__1.value;
      {
        var newdir$0;
        var newpartial$0;
        var file$0;
        file$0 = m$9;
        acc$3.push(((newdir$0 = path$0.join(dir$0, file$0)), (newpartial$0 = path$0.join(partial$0, file$0)), walk$0(newdir$0, newpartial$0, f$0)));
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
  var t0$8;
  var text$0;
  var file$1;
  var noboil$0;
  var to5$0;
  var m$10$0;
  m$10$0 = arguments;
  t0$8 = m$10$0.length;
  if (((t0$8 >= 2) && (t0$8 <= 4))) {
    text$0 = m$10$0[0];
    file$1 = m$10$0[1];
    noboil$0 = ((2 >= t0$8) ? false : m$10$0[2]);
    to5$0 = ((3 >= t0$8) ? true : m$10$0[3]);
    g$0 = eg$0.Generator();
    return g$0.generate(Source$0(text$0, path$0.resolve(file$1)), (!noboil$0), to5$0);
  } else {
    return ___match_error(m$10$0);
  }
});
interactive$0 = (function(g$1, e$1) {
  var $targ$80;
  var accum$1;
  var repl$0;
  var $targ$77;
  var settings$0;
  var runner$0;
  repl$0 = require("repl");
  $targ$77 = true;
  (g$1["interactive"] = $targ$77);
  settings$0 = __amp____colon__(({
    "prompt": "<> ",
    "ignoreUndefined": true
  }), (($targ$80 = (function(input$0, context$0, filename$0, callback$0) {
    var $targ$87;
    var $targ$86;
    var rval$0;
    var execute$0;
    var handle$0;
    var result$0;
    result$0 = ((execute$0 = (function() {
      var $targ$85;
      var $targ$84;
      var text$1;
      $targ$84 = g$1.generate(Source$0(input$0.slice(1, -1), "<interactive>"));
      text$1 = $targ$84;
      if (equal(text$1, "\"use strict\";\n//# sourceURL=<compile-source>")) {
        $targ$85 = "";
        text$1 = $targ$85;
      }
      return e$1(text$1);
    })), (handle$0 = (function(e$2) {
      display_error$0(e$2);
      return undefined;
    })), ($targ$86 = false), (rval$0 = $targ$86), (function() {
      try {
        $targ$87 = execute$0();
        rval$0 = $targ$87;
      } catch (excv$0) {
        var $targ$88;
        var e$3;
        e$3 = excv$0;
        $targ$88 = handle$0(e$3);
        rval$0 = $targ$88;
      }
    })(), rval$0);
    return callback$0(null, result$0);
  })), (accum$1 = ({})), (accum$1["eval"] = $targ$80), accum$1));
  runner$0 = repl$0.start(settings$0);
  return runner$0.on("exit", (function() {
    return runner$0.outputStream.write("\n");
  }));
});
compile_path$0 = (function(p$0, opts$1) {
  var out$0;
  var $10$0;
  var beaut$0;
  var t2$2;
  var t1$7;
  var name$5;
  var t0$13;
  var name$4;
  var m$14$0;
  var noext$0;
  var $$21109$0;
  var m$13$0;
  var data$2;
  var code$0;
  var $$20951$0;
  var m$11$0;
  var stats$1;
  stats$1 = fs$0.statSync(p$0);
  m$11$0 = null;
  m$11$0;
  if (stats$1.isDirectory()) {
    if (opts$1.print) {
      usage_error$0("Cannot use --print when compiling a directory");
    }
    out$0 = (opts$1.output || p$0);
    return walk$0(p$0, "/", (function() {
      var $targ$99;
      var $targ$98;
      var rval$1;
      var to$0;
      var from$0;
      var t1$6;
      var t0$12;
      var $targ$102;
      var x$0;
      var name$3;
      var from$1;
      var to$1;
      var data$1;
      var from$2;
      var to$2;
      var f$1;
      var t0$11;
      var results$1;
      var ph$3$0;
      var t0$10;
      var t1$5;
      var d$0;
      var $$20979$0;
      var $$20980$0;
      var $$20981$0;
      var t0$9;
      var ph$2$0;
      var m$12$0;
      m$12$0 = arguments;
      t0$9 = m$12$0.length;
      if ((t0$9 >= 0)) {
        ph$2$0 = Array.prototype.slice.call(m$12$0, 0);
        t0$10 = ph$2$0;
        t1$5 = t0$10.length;
        if ((($$20981$0 = (t1$5 === 2)) && (t0$10[0] === "dir"))) {
          d$0 = t0$10[1];
          from$0 = path$0.join(p$0, d$0);
          if (opts$1.output) {
            to$0 = path$0.join(out$0, d$0);
            $targ$98 = false;
            rval$1 = $targ$98;
            try {
              $targ$99 = fs$0.mkdirSync(to$0);
              rval$1 = $targ$99;
            } catch (excv$1) {
              var $targ$100;
              var e$4;
              e$4 = excv$1;
              $targ$100 = "ignore error";
              rval$1 = $targ$100;
            }
            return rval$1;
          }
        } else {
          if (($$20981$0 && (t0$10[0] === "file"))) {
            ph$3$0 = t0$10[1];
            t0$11 = getProjector(RegExp("(?:^((?:.*))\\.eg$)", ""))(ph$3$0);
            if ((t0$11[0] && ((results$1 = t0$11[1]), results$1))) {
              $targ$102 = results$1;
              t0$12 = $targ$102;
              if (((t0$12 instanceof Array) && ((t1$6 = t0$12.length), (t1$6 === 2)))) {
                x$0 = t0$12[0];
                name$3 = t0$12[1];
              } else {
                ___match_error($targ$102);
              }
              from$1 = path$0.join(p$0, x$0);
              to$1 = path$0.join(out$0, (name$3 + ".js"));
              data$1 = fs$0.readFileSync(from$1, "utf8");
              if (opts$1.verbose) {
                console.log("Compiling:", from$1);
              }
              return fs$0.writeFileSync(to$1, (_gen$0(data$1, from$1, opts$1.noboil, (!opts$1["es6"])) + "\n"));
            } else {
              ph$3$0;
              if ((!opts$1.output)) {
                return null;
              } else {
                f$1 = ph$3$0;
                from$2 = path$0.join(p$0, f$1);
                to$2 = path$0.join(out$0, f$1);
                return copy$0(from$2, to$2);
              }
            }
          } else {
            return ___match_error(ph$2$0, "/home/olivier/git/earl-grey/src/run.eg", 5975, 5980);
          }
        }
      } else {
        return ___match_error(m$12$0);
      }
    }));
  } else {
    data$2 = fs$0.readFileSync(p$0, "utf8");
    code$0 = _gen$0(data$2, p$0, opts$1.noboil, (!opts$1["es6"]));
    m$13$0 = null;
    m$13$0;
    if (opts$1.print) {
      $10$0 = require("js-beautify");
      beaut$0 = $10$0.js;
      return console.log(beaut$0(code$0));
    } else {
      if (opts$1.output) {
        return fs$0.writeFileSync(opts$1.output, (code$0 + "\n"));
      } else {
        noext$0 = ((m$14$0 = p$0), (t0$13 = getProjector(RegExp("^(.*).eg$", ""))(m$14$0)), ((t0$13[0] && ((t1$7 = t0$13[1]), (t2$2 = t1$7.length), (t2$2 === 2))) ? (t1$7[0], (name$4 = t1$7[1]), name$4) : ((name$5 = m$14$0), name$5)));
        return fs$0.writeFileSync((noext$0 + ".js"), (code$0 + "\n"));
      }
    }
  }
});
run$0 = (function(argv$1) {
  var t1$8;
  var t0$14;
  var $targ$124;
  var $targ$123;
  var rval$2;
  var $targ$120;
  var opts$2;
  var cmd$0;
  $targ$120 = extract_options$0(argv$1, ({
    "h": ["flag", "help"],
    "help": ["flag", "help"],
    "v": ["flag", "version"],
    "version": ["flag", "version"]
  }), "global option");
  t0$14 = $targ$120;
  if (((t0$14 instanceof Array) && ((t1$8 = t0$14.length), (t1$8 === 2)))) {
    opts$2 = t0$14[0];
    cmd$0 = t0$14[1];
  } else {
    ___match_error($targ$120);
  }
  $targ$123 = false;
  rval$2 = $targ$123;
  try {
    $targ$124 = _run$0(cmd$0, opts$2);
    rval$2 = $targ$124;
  } catch (excv$2) {
    var $targ$125;
    var e$5;
    e$5 = excv$2;
    $targ$125 = (display_error$0(e$5), process.exit(1));
    rval$2 = $targ$125;
  }
  return rval$2;
});
_run$0 = (function(temp$3$0, opts$3) {
  var t0$16;
  var t0$17;
  var t0$15;
  var t1$9;
  var t0$18;
  var data$4;
  var t0$19;
  var file$3;
  var m$16$0;
  var t1$10;
  var t0$20;
  var $targ$131;
  var o$0;
  var rest$0;
  var $targ$132;
  var file$2;
  var wd$0;
  var data$3;
  var args$1;
  var $targ$133;
  var e$6;
  var g$2;
  var result$1;
  var t1$11;
  var t0$21;
  var $$21398$0;
  var m$18$0;
  var code$1;
  var $targ$150;
  var $targ$151;
  var m$19;
  var acc$4;
  var paths$0;
  var p$1;
  var $$21369$0;
  var $$21370$0;
  var t0$22;
  var m$17$0;
  var $targ$144;
  var o$1;
  var rest$1;
  var bridge$$21232$0;
  var data$6;
  var $12$0;
  var beaut$1;
  var data$7;
  var otherwise$0;
  var $$21467$0;
  var m$20$0;
  var out$1;
  var stats$2;
  var m$22;
  var acc$5;
  var tokens$0;
  var walkloc$0;
  var stuff$0;
  var s$2;
  var s$1;
  var file$4;
  var args$2;
  var rawargs$1;
  var rawargs$0;
  var bridge$$21228$0;
  var $$21236$0;
  var $$21237$0;
  var $$21238$0;
  var m$15$0;
  var ph$4;
  ph$4 = temp$3$0;
  m$15$0 = ph$4;
  m$15$0;
  if (opts$3.help) {
    return console.log(usage$0);
  } else {
    if (opts$3.version) {
      return console.log("Earl Grey version", eg$0.version);
    } else {
      bridge$$21228$0 = m$15$0;
      if ((((bridge$$21228$0 instanceof Array) && ((t0$16 = bridge$$21228$0.length), (t0$16 === 0))) || ((bridge$$21228$0 instanceof Array) && ((t0$17 = bridge$$21228$0.length), ((t0$17 === 1) && (bridge$$21228$0[0] === "run")))))) {
        return _run$0(["run", "-i"], opts$3);
      } else {
        if ((($$21236$0 = (m$15$0 instanceof Array)) && ((t0$15 = m$15$0.length), (($$21238$0 = (t0$15 >= 1)) && (m$15$0[0] === "run"))))) {
          rawargs$0 = Array.prototype.slice.call(m$15$0, 1);
          $targ$131 = extract_options$0(rawargs$0, ({
            "e": ["value", "evaluate"],
            "eval": ["value", "evaluate"],
            "p": ["flag", "print"],
            "print": ["flag", "print"],
            "i": ["flag", "interactive"],
            "interactive": ["flag", "interactive"]
          }), "option for run");
          t0$18 = $targ$131;
          if (((t0$18 instanceof Array) && ((t1$9 = t0$18.length), (t1$9 === 2)))) {
            o$0 = t0$18[0];
            rest$0 = t0$18[1];
          } else {
            ___match_error($targ$131);
          }
          $targ$132 = (o$0.evaluate ? ["<repl>", process.cwd(), o$0.evaluate, rest$0] : ((m$16$0 = rest$0.shift()), (((m$16$0 === (void 0)) && o$0.interactive) ? ["<repl>", process.cwd(), "", rest$0] : ((m$16$0 === (void 0)) ? usage_error$0("No filename specified.") : ((t0$19 = getProjector(path$0.resolve)(m$16$0)), (t0$19[0] ? ((file$3 = t0$19[1]), (data$4 = fs$0.readFileSync(file$3, "utf8")), [file$3, file$3, data$4, rest$0]) : ___match_error(m$16$0)))))));
          t0$20 = $targ$132;
          if (((t0$20 instanceof Array) && ((t1$10 = t0$20.length), (t1$10 === 4)))) {
            file$2 = t0$20[0];
            wd$0 = t0$20[1];
            data$3 = t0$20[2];
            args$1 = t0$20[3];
          } else {
            ___match_error($targ$132);
          }
          $targ$133 = ["earl-run", file$2].concat(rest$0);
          (process["argv"] = $targ$133);
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
          if (($$21238$0 && (m$15$0[0] === "compile"))) {
            rawargs$1 = Array.prototype.slice.call(m$15$0, 1);
            $targ$144 = extract_options$0(rawargs$1, ({
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
            t0$21 = $targ$144;
            if (((t0$21 instanceof Array) && ((t1$11 = t0$21.length), (t1$11 === 2)))) {
              o$1 = t0$21[0];
              rest$1 = t0$21[1];
            } else {
              ___match_error($targ$144);
            }
            m$17$0 = rest$1;
            m$17$0;
            if (o$1.evaluate) {
              code$1 = _gen$0(o$1.evaluate, "<cli>", o$1.noboil);
              m$18$0 = null;
              m$18$0;
              if (o$1.output) {
                return fs$0.writeFileSync(o$1.output, (code$1 + "\n"));
              } else {
                return console.log(code$1);
              }
            } else {
              if ((($$21369$0 = (m$17$0 instanceof Array)) && (($targ$150 = m$17$0.length), (t0$22 = $targ$150), (t0$22 === 0)))) {
                return usage_error$0("Must provide at least one file or directory to compile.");
              } else {
                if (($$21369$0 && (t0$22 === 1))) {
                  p$1 = m$17$0[0];
                  return compile_path$0(p$1, o$1);
                } else {
                  m$17$0;
                  if (o$1.output) {
                    return usage_error$0("The -o option cannot be used if more than one file or directory is compiled.");
                  } else {
                    if (((m$17$0 instanceof Array) && (($targ$151 = m$17$0.length), (t0$22 = $targ$151), (t0$22 >= 0)))) {
                      paths$0 = Array.prototype.slice.call(m$17$0, 0);
                      acc$4 = [];
                      m$19 = null;
                      $11: for (var $__0 = paths$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                          $__1; !($__1 = $__0.next()).done; ) {
                        m$19 = $__1.value;
                        {
                          var p$2;
                          p$2 = m$19;
                          acc$4.push(compile_path$0(p$2, o$1));
                        }
                      }
                      return acc$4;
                    } else {
                      return ___match_error(m$17$0);
                    }
                  }
                }
              }
            }
          } else {
            if (($$21236$0 && ((t0$15 >= 2) && ((bridge$$21232$0 = m$15$0[0]), ((bridge$$21232$0 === "tr") || (bridge$$21232$0 === "translate")))))) {
              file$4 = m$15$0[1];
              args$2 = Array.prototype.slice.call(m$15$0, 2);
              out$1 = args$2[0];
              stats$2 = fs$0.statSync(file$4);
              m$20$0 = null;
              m$20$0;
              if (stats$2.isDirectory()) {
                return walk$0(file$4, "/", (function() {
                  var $targ$164;
                  var $targ$163;
                  var rval$3;
                  var from$3;
                  var to$3;
                  var t1$13;
                  var t0$26;
                  var $targ$167;
                  var x$1;
                  var name$6;
                  var from$4;
                  var to$4;
                  var data$5;
                  var from$5;
                  var to$5;
                  var f$2;
                  var t0$25;
                  var results$2;
                  var ph$6$0;
                  var t0$24;
                  var t1$12;
                  var d$1;
                  var $$21491$0;
                  var $$21492$0;
                  var $$21493$0;
                  var t0$23;
                  var ph$5$0;
                  var m$21$0;
                  m$21$0 = arguments;
                  t0$23 = m$21$0.length;
                  if ((t0$23 >= 0)) {
                    ph$5$0 = Array.prototype.slice.call(m$21$0, 0);
                    t0$24 = ph$5$0;
                    t1$12 = t0$24.length;
                    if ((($$21493$0 = (t1$12 === 2)) && (t0$24[0] === "dir"))) {
                      d$1 = t0$24[1];
                      from$3 = path$0.join(file$4, d$1);
                      to$3 = path$0.join(out$1, d$1);
                      $targ$163 = false;
                      rval$3 = $targ$163;
                      try {
                        $targ$164 = fs$0.mkdirSync(to$3);
                        rval$3 = $targ$164;
                      } catch (excv$3) {
                        var $targ$165;
                        var e$7;
                        e$7 = excv$3;
                        $targ$165 = "ignore error";
                        rval$3 = $targ$165;
                      }
                      return rval$3;
                    } else {
                      if (($$21493$0 && (t0$24[0] === "file"))) {
                        ph$6$0 = t0$24[1];
                        t0$25 = getProjector(RegExp("(?:^((?:.*))\\.eg$)", ""))(ph$6$0);
                        if ((t0$25[0] && ((results$2 = t0$25[1]), results$2))) {
                          $targ$167 = results$2;
                          t0$26 = $targ$167;
                          if (((t0$26 instanceof Array) && ((t1$13 = t0$26.length), (t1$13 === 2)))) {
                            x$1 = t0$26[0];
                            name$6 = t0$26[1];
                          } else {
                            ___match_error($targ$167);
                          }
                          from$4 = path$0.join(file$4, x$1);
                          to$4 = path$0.join(out$1, (name$6 + ".js"));
                          data$5 = fs$0.readFileSync(from$4, "utf8");
                          return fs$0.writeFileSync(to$4, (_gen$0(data$5, from$4) + "\n"));
                        } else {
                          f$2 = ph$6$0;
                          from$5 = path$0.join(file$4, f$2);
                          to$5 = path$0.join(out$1, f$2);
                          return copy$0(from$5, to$5);
                        }
                      } else {
                        return ___match_error(ph$5$0, "/home/olivier/git/earl-grey/src/run.eg", 10573, 10578);
                      }
                    }
                  } else {
                    return ___match_error(m$21$0);
                  }
                }));
              } else {
                if (out$1) {
                  data$6 = fs$0.readFileSync(file$4, "utf8");
                  return fs$0.writeFileSync(out$1, (_gen$0(data$6, file$4) + "\n"));
                } else {
                  otherwise$0 = m$20$0;
                  $12$0 = require("js-beautify");
                  beaut$1 = $12$0.js;
                  data$7 = fs$0.readFileSync(file$4, "utf8");
                  return console.log(beaut$1(_gen$0(data$7, file$4)));
                }
              }
            } else {
              if (($$21236$0 && (($$21238$0 = (t0$15 === 2)) && (m$15$0[0] === "tok")))) {
                s$1 = m$15$0[1];
                acc$5 = [];
                m$22 = null;
                $13: for (var $__2 = eg$0.tokenize(Source$0(s$1, null))[$traceurRuntime.toProperty(Symbol.iterator)](),
                    $__3; !($__3 = $__2.next()).done; ) {
                  m$22 = $__3.value;
                  {
                    var token$0;
                    token$0 = m$22;
                    acc$5.push((__lt____gt__$0(null, token$0), __lt____gt__$0(null, token$0.location.ref()), __lt____gt__$0(null, token$0.location.highlight())));
                  }
                }
                return acc$5;
              } else {
                if (($$21238$0 && (m$15$0[0] === "pa"))) {
                  s$2 = m$15$0[1];
                  walkloc$0 = (function(temp$4$0) {
                    var t0$27;
                    var t0$28;
                    var m$24;
                    var acc$6;
                    var type$0;
                    var args$3;
                    var x$3;
                    var x$2;
                    var $$21662$0;
                    var $$21663$0;
                    var $$21664$0;
                    var m$23$0;
                    var ph$7;
                    var node$0;
                    t0$27 = temp$4$0;
                    node$0 = t0$27;
                    ph$7 = t0$27;
                    m$23$0 = ph$7;
                    if ((($$21662$0 = (m$23$0 instanceof Array)) && ((t0$28 = m$23$0.length), (($$21664$0 = (t0$28 === 2)) && (m$23$0[0] === "symbol"))))) {
                      x$2 = m$23$0[1];
                      __lt____gt__$0(null, node$0);
                      return __lt____gt__$0(null, (node$0.location && node$0.location.highlight()));
                    } else {
                      if (($$21664$0 && (m$23$0[0] === "value"))) {
                        x$3 = m$23$0[1];
                        __lt____gt__$0(null, node$0);
                        return __lt____gt__$0(null, (node$0.location && node$0.location.highlight()));
                      } else {
                        if (($$21662$0 && (t0$28 >= 1))) {
                          type$0 = m$23$0[0];
                          args$3 = Array.prototype.slice.call(m$23$0, 1);
                          __lt____gt__$0(null, node$0);
                          __lt____gt__$0(null, (node$0.location && node$0.location.highlight()));
                          acc$6 = [];
                          m$24 = null;
                          $14: for (var $__4 = args$3[$traceurRuntime.toProperty(Symbol.iterator)](),
                              $__5; !($__5 = $__4.next()).done; ) {
                            m$24 = $__5.value;
                            {
                              var arg$2;
                              arg$2 = m$24;
                              acc$6.push(walkloc$0(arg$2));
                            }
                          }
                          return acc$6;
                        } else {
                          return ___match_error(m$23$0);
                        }
                      }
                    }
                  });
                  return walkloc$0(((tokens$0 = eg$0.tokenize(Source$0(s$2, null))), eg$0.parse(tokens$0)));
                } else {
                  stuff$0 = m$15$0;
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
$targ$186 = run$0;
(exports["run"] = $targ$186);
//# sourceURL=<compile-source>
