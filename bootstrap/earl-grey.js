
"use strict";require("earlgrey-runtime/5");var accum$2 = undefined;var accum$3 = undefined;var accum$4 = undefined;var accum$5 = undefined;var $targ$17 = undefined;var $targ$18 = undefined;var $targ$19 = undefined;var $targ$20 = undefined;var $targ$21 = undefined;var $targ$22 = undefined;var $targ$23 = undefined;var $targ$24 = undefined;var $targ$25 = undefined;var $0$0 = undefined;var Source$0 = undefined;var Location$0 = undefined;var highlight_locations$0 = undefined;var __lt____lt____colon__$0 = undefined;var $1$0 = undefined;var tokenize$0 = undefined;var $2$0 = undefined;var parse$0 = undefined;var $3$0 = undefined;var Translator$0 = undefined;var std$0 = undefined;var exp$0 = undefined;var opt$0 = undefined;var $7$0 = undefined;var Body$0 = undefined;var GenSym$0 = undefined;var vm$0 = undefined;var module$0 = undefined;var path$0 = undefined;var to5$0 = undefined;var smap$0 = undefined;var SourceNode$0 = undefined;var $10$0 = undefined;var transfer$0 = undefined;var version$0 = undefined;var evaluator$0 = undefined;var Pipeline$0 = undefined;var generate$0 = undefined;var collapse$0 = undefined;var makeAnnotatedAST$0 = undefined;var toCodeAndSourceMap$0 = undefined;var Generator$0 = undefined;$0$0 = require("./location");Source$0 = $0$0.Source;Location$0 = $0$0.Location;highlight_locations$0 = $0$0.highlight_locations;__lt____lt____colon__$0 = $0$0["<<:"];$1$0 = require("./lex");tokenize$0 = $1$0.tokenize;$2$0 = require("./parse");parse$0 = $2$0.parse;$3$0 = require("./translate-js");Translator$0 = $3$0.Translator;std$0 = require("./stdenv");exp$0 = require("./expand");opt$0 = require("./opt");$7$0 = require("./util");Body$0 = $7$0.Body;GenSym$0 = $7$0.GenSym;vm$0 = require("vm");module$0 = require("module");path$0 = require("path");to5$0 = require("6to5");smap$0 = require("source-map");SourceNode$0 = smap$0.SourceNode;$10$0 = require("multi-stage-sourcemap");transfer$0 = $10$0.transfer;version$0 = "zero";evaluator$0 = function evaluator(options$0) {
  var g$0 = undefined;var m$1$0 = undefined;var t0$0 = undefined;var $targ$0 = undefined;var $get$0$0 = undefined;var g$1 = undefined;var m$0$0 = undefined;var accum$0 = undefined;var paths$0 = undefined;var e_module$0 = undefined;var e_require$0 = undefined;var setup$0 = undefined;var __eval$0 = undefined;var glob$0 = undefined;if (options$0.globvar) {
    m$0$0 = send(global, options$0.globvar);if (m$0$0 === void 0) {
      m$1$0 = options$0.global;if (m$1$0 === true) {
        $targ$0 = global;
      } else {
        if (getChecker(Object)(m$1$0)) {
          g$0 = m$1$0;$targ$0 = g$0;
        } else {
          $targ$0 = Object.create(global);
        }
      }t0$0 = $targ$0;global[options$0.globvar] = t0$0;$get$0$0 = t0$0;glob$0 = $get$0$0;
    } else {
      g$1 = m$0$0;glob$0 = g$1;
    }
  } else {
    glob$0 = global;
  }if (module$0._nodeModulePaths) {
    paths$0 = module$0._nodeModulePaths(options$0.cwd);e_module$0 = new module$0(options$0.showname);__amp____colon__(e_module$0, { filename: options$0.filename, paths: paths$0 });e_require$0 = function e_require(path$1) {
      return module$0._load(path$1, e_module$0, true);
    };__amp____colon__(e_require$0, __amp____colon__({ main: e_module$0 }, __amp____colon__((accum$0 = {}, accum$0.resolve = function resolve(path$2) {
      return module$0._resolveFileName(path$2, e_module$0);
    }, accum$0), { paths: paths$0, cache: require.cache })));setup$0 = { __filename: options$0.filename, __dirname: path$0.dirname(options$0.filename), module: e_module$0, require: e_require$0, exports: {} };return function (code$0) {
      var script$0 = undefined;var rval$0 = undefined;__amp____colon__(glob$0, setup$0);script$0 = vm$0.createScript(code$0, options$0.showname);rval$0 = script$0.runInThisContext();return rval$0;
    };
  } else {
    __eval$0 = eval;return function (code$1) {
      return __eval$0(code$1);
    };
  }
};Pipeline$0 = function Pipeline() {
  var $targ$1 = undefined;var $targ$2 = undefined;var $targ$3 = undefined;var $it$0 = undefined;if (!getChecker(Pipeline$0)(this)) {
    $it$0 = Object.create(Pipeline$0.prototype);
  } else {
    $it$0 = this;
  }$targ$1 = GenSym$0("_$$_");$it$0.gensym = $targ$1;[];$targ$2 = std$0.make_expander($it$0);$it$0._expander = $targ$2;[];$targ$3 = $it$0._expander.mkenv();$it$0.env = $targ$3;[];return $it$0;
};Pipeline$0.prototype.parse = function parse(source$0) {
  var t$0 = undefined;var $it$1 = undefined;var self$0 = undefined;$it$1 = this;self$0 = this;t$0 = tokenize$0(source$0);return parse$0(t$0);
};Pipeline$0.prototype.expand = function expand(ast$0) {
  var $it$2 = undefined;var self$1 = undefined;$it$2 = this;self$1 = this;return $it$2._expander.expand(["top"], exp$0.topscope, $it$2.env.mark(ast$0));
};Pipeline$0.prototype.translate = function translate(ast$1) {
  var t0$1 = undefined;var $targ$4 = undefined;var accum$1 = undefined;var r$0 = undefined;var res$0 = undefined;var globvar$0 = undefined;var tr$0 = undefined;var rval$1 = undefined;var prep$0 = undefined;var $it$3 = undefined;var self$2 = undefined;$it$3 = this;self$2 = this;res$0 = opt$0.hoist(ast$1);globvar$0 = $it$3.gensym("global");tr$0 = Translator$0(null, globvar$0);rval$1 = collapse$0(tr$0.translate(res$0, "expr"));prep$0 = tr$0.dump_store();r$0 = prep$0 + ";(" + rval$1 + ")";return __amp____colon__(($targ$4 = to5$0.transform(r$0), accum$1 = {}, t0$1 = $targ$4, ___hasprop(t0$1, "code") ? (accum$1.code = t0$1.code, accum$1) : ___match_error($targ$4)), { globvar: globvar$0, global: null, location: ast$1.location });
};Pipeline$0.prototype.evaluate = function evaluate(src$0) {
  var ev$0 = undefined;var loc$0 = undefined;var $it$4 = undefined;var self$3 = undefined;$it$4 = this;self$3 = this;loc$0 = src$0.location || { source: { url: "<eval>" } };ev$0 = evaluator$0({ globvar: src$0.globvar, global: src$0.global, filename: loc$0.source.url, showname: loc$0.source.url, cwd: loc$0.source.url });return ev$0(src$0.code);
};Pipeline$0.prototype.go = function go(x$0, temp$0$0, end$0) {
  var t0$2 = undefined;var start$0 = undefined;var ph$0$0 = undefined;var $it$5 = undefined;var self$4 = undefined;$it$5 = this;self$4 = this;t0$2 = temp$0$0;start$0 = t0$2;ph$0$0 = t0$2;if (start$0 === end$0 || start$0 === "eval") {
    return x$0;
  } else {
    if (ph$0$0 === "source") {
      return $it$5.go($it$5.parse(x$0), "parse", end$0);
    } else {
      if (ph$0$0 === "parse") {
        return $it$5.go($it$5.expand(x$0), "expand", end$0);
      } else {
        if (ph$0$0 === "expand") {
          return $it$5.go($it$5.translate(x$0), "translate", end$0);
        } else {
          if (ph$0$0 === "translate") {
            return $it$5.go($it$5.evaluate(x$0), "eval", end$0);
          } else {
            throw ErrorFactory(["pipeline"]).create("Unknown pipeline stage: " + start$0);
          }
        }
      }
    }
  }
};__amp____colon__(Pipeline$0, __amp____colon__((accum$2 = {}, accum$2["::name"] = "Pipeline", accum$2), (accum$3 = {}, accum$3["::egclass"] = true, accum$3)));generate$0 = function generate(source$1) {
  return Generator$0().generate(source$1);
};collapse$0 = function collapse(temp$1$0) {
  var t0$3 = undefined;var acc$0 = undefined;var parts$0 = undefined;var t$1 = undefined;var s$1 = undefined;var tags$0 = undefined;var props$0 = undefined;var children$0 = undefined;var $$419$0 = undefined;var t0$4 = undefined;var node$0 = undefined;var ph$1$0 = undefined;t0$3 = temp$1$0;node$0 = t0$3;ph$1$0 = t0$3;t0$4 = ph$1$0;if (getChecker(ENode)(t0$4) && (___hasprop(t0$4, "tags") && (tags$0 = t0$4.tags, ___hasprop(t0$4, "props") && (props$0 = t0$4.props, ___hasprop(t0$4, "children"))))) {
    children$0 = t0$4.children;parts$0 = [];acc$0 = function acc(ph$2$0) {
      var m$2 = undefined;var acc$1 = undefined;var temp$2 = undefined;var n$0 = undefined;var xs$0$0 = undefined;var s$0 = undefined;var $$453$0 = undefined;var t0$5 = undefined;t0$5 = ph$2$0;if (typeof t0$5 === "string") {
        s$0 = t0$5;return parts$0.push(s$0);
      } else {
        if (Array.isArray(t0$5)) {
          xs$0$0 = t0$5;acc$1 = [];temp$2 = null;m$2 = null;$11: for (var _iterator = xs$0$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
            m$2 = _step.value;
            var x$1 = undefined;x$1 = m$2;temp$2 = acc$0(x$1);acc$1.push(temp$2);
          }return acc$1;
        } else {
          if (getChecker(ENode)(t0$5)) {
            n$0 = t0$5;return parts$0.push(collapse$0(n$0));
          } else {
            return ___match_error(ph$2$0);
          }
        }
      }
    };acc$0(children$0);return parts$0.join("");
  } else {
    if (typeof t0$4 === "string") {
      s$1 = t0$4;return s$1;
    } else {
      t$1 = node$0;console.log(t$1);throw ErrorFactory(["invalid_translation_node"]).create(node$0);
    }
  }
};makeAnnotatedAST$0 = function makeAnnotatedAST(temp$3$0) {
  var t0$6 = undefined;var acc$2 = undefined;var t0$9 = undefined;var t1$0 = undefined;var t2$0 = undefined;var t3$0 = undefined;var loc$1 = undefined;var $targ$5 = undefined;var l$0 = undefined;var c$0 = undefined;var src$1 = undefined;var rval$2 = undefined;var parts$1 = undefined;var t$2 = undefined;var s$3 = undefined;var tags$1 = undefined;var props$1 = undefined;var children$1 = undefined;var $$516$0 = undefined;var t0$7 = undefined;var node$1 = undefined;var ph$3$0 = undefined;t0$6 = temp$3$0;node$1 = t0$6;ph$3$0 = t0$6;t0$7 = ph$3$0;if (getChecker(ENode)(t0$7) && (___hasprop(t0$7, "tags") && (tags$1 = t0$7.tags, ___hasprop(t0$7, "props") && (props$1 = t0$7.props, ___hasprop(t0$7, "children"))))) {
    children$1 = t0$7.children;parts$1 = [];acc$2 = function acc(ph$4$0) {
      var m$3 = undefined;var acc$3 = undefined;var temp$4 = undefined;var n$1 = undefined;var xs$1$0 = undefined;var s$2 = undefined;var $$550$0 = undefined;var t0$8 = undefined;t0$8 = ph$4$0;if (typeof t0$8 === "string") {
        s$2 = t0$8;return parts$1.push(s$2);
      } else {
        if (Array.isArray(t0$8)) {
          xs$1$0 = t0$8;acc$3 = [];temp$4 = null;m$3 = null;$12: for (var _iterator2 = xs$1$0[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
            m$3 = _step2.value;
            var x$2 = undefined;x$2 = m$3;temp$4 = acc$2(x$2);acc$3.push(temp$4);
          }return acc$3;
        } else {
          if (getChecker(ENode)(t0$8)) {
            n$1 = t0$8;return parts$1.push(makeAnnotatedAST$0(n$1));
          } else {
            return ___match_error(ph$4$0);
          }
        }
      }
    };acc$2(children$1);if (props$1.origin && props$1.origin.location) {
      loc$1 = props$1.origin.location;$targ$5 = loc$1.linecol();t0$9 = $targ$5;if (Array.isArray(t0$9) && (t1$0 = t0$9.length, t1$0 === 2 && (t2$0 = t0$9[0], Array.isArray(t2$0) && (t3$0 = t2$0.length, t3$0 === 2)))) {
        l$0 = t2$0[0];c$0 = t2$0[1];t0$9[1];
      } else {
        ___match_error($targ$5);
      }[l$0, c$0];src$1 = loc$1.source.url;rval$2 = new SourceNode$0(l$0, c$0, src$1 || "<unknown>", parts$1);return rval$2;
    } else {
      return parts$1;
    }
  } else {
    if (typeof t0$7 === "string") {
      s$3 = t0$7;return s$3;
    } else {
      t$2 = node$1;console.log(t$2);throw ErrorFactory(["invalid_translation_node"]).create(node$1);
    }
  }
};toCodeAndSourceMap$0 = function toCodeAndSourceMap(node$2, url$0) {
  var ast$2 = undefined;var obj$0 = undefined;ast$2 = makeAnnotatedAST$0(node$2);if (!getChecker(SourceNode$0)(ast$2)) {
    ast$2 = new SourceNode$0(1, 0, null, ast$2);ast$2;
  }obj$0 = ast$2.toStringWithSourceMap({ file: url$0 });return obj$0;
};Generator$0 = function Generator() {
  var $targ$6 = undefined;var $targ$7 = undefined;var $targ$8 = undefined;var $targ$9 = undefined;var $targ$10 = undefined;var $targ$11 = undefined;var interactive$0 = undefined;var globvar$1 = undefined;var t0$10 = undefined;var m$4$0 = undefined;var $it$6 = undefined;if (!getChecker(Generator$0)(this)) {
    $it$6 = Object.create(Generator$0.prototype);
  } else {
    $it$6 = this;
  }m$4$0 = arguments;t0$10 = m$4$0.length;if (t0$10 >= 0 && t0$10 <= 2) {
    if (0 >= t0$10) {
      interactive$0 = false;
    } else {
      interactive$0 = m$4$0[0];
    }if (1 >= t0$10) {
      globvar$1 = null;
    } else {
      globvar$1 = m$4$0[1];
    }$targ$6 = Translator$0(null, globvar$1);$it$6.tr = $targ$6;[];$targ$7 = std$0.stdenv.fork();$it$6.env = $targ$7;[];$targ$8 = interactive$0;$it$6.interactive = $targ$8;[];$targ$9 = null;$it$6._eval = $targ$9;[];$targ$10 = Pipeline$0();$it$6.pipeline = $targ$10;[];$targ$11 = std$0.make_expander($it$6.pipeline);$it$6.expander = $targ$11;[];
  } else {
    ___match_error(m$4$0);
  }return $it$6;
};Generator$0.prototype.generateInteractive = function generateInteractive(source$2, opts$0) {
  var t0$11 = undefined;var t1$1 = undefined;var t2$1 = undefined;var $targ$12 = undefined;var args$0 = undefined;var stmt$0 = undefined;var body$2 = undefined;var vars$0 = undefined;var body$1 = undefined;var t0$12 = undefined;var m$5$0 = undefined;var $$818$0 = undefined;var m$6$0 = undefined;var t$3 = undefined;var p$0 = undefined;var ex$0 = undefined;var wrap$0 = undefined;var result$0 = undefined;var $it$7 = undefined;var self$5 = undefined;$it$7 = this;self$5 = this;opts$0 = __amp__({ noboil: $it$7.interactive, to5: false }, opts$0);t$3 = tokenize$0(source$2);p$0 = parse$0(t$3);if ($it$7.interactive) {
    $targ$12 = p$0;t0$11 = getProjector(Body$0)($targ$12);if (t0$11[0] && (t1$1 = t0$11[1], t2$1 = t1$1.length, t2$1 >= 0)) {
      args$0 = Array.prototype.slice.call(t1$1, 0);
    } else {
      ___match_error($targ$12);
    }stmt$0 = ["interactive"].concat(args$0);
  } else {
    stmt$0 = ["multi", p$0];
  }ex$0 = $it$7.expander.expand(["top"], exp$0.topscope, $it$7.env.mark(stmt$0));wrap$0 = function wrap(body$0) {
    return ["send", ["variable", "spawn"], ["array", ["lambda", [], body$0, ["value", true]]]];
  };m$5$0 = ex$0;if (Array.isArray(m$5$0) && (t0$12 = m$5$0.length, t0$12 === 3 && m$5$0[0] === "scope")) {
    vars$0 = m$5$0[1];body$1 = m$5$0[2];ex$0 = ["scope", vars$0, wrap$0(body$1)];
  } else {
    body$2 = m$5$0;ex$0 = wrap$0(body$2);
  }ex$0 = opt$0.hoist(ex$0);result$0 = $it$7.tr.translate(ex$0, "stmt");result$0 = ENode(["splice"], {}, ["\n'use strict';", (m$6$0 = opts$0.noboil, (m$6$0 ? true : false) ? "" : opts$0.to5 ? "require('earlgrey-runtime/5');" : "require('earlgrey-runtime/6');"), result$0]);result$0 = collapse$0(result$0);if (opts$0.to5) {
    result$0 = to5$0.transform(result$0, {}).code;result$0;
  }return result$0;
};Generator$0.prototype.generate = function generate(source$3, opts$1) {
  var t0$13 = undefined;var t1$2 = undefined;var t2$2 = undefined;var $targ$13 = undefined;var args$1 = undefined;var stmt$1 = undefined;var $$914$0 = undefined;var m$7$0 = undefined;var t0$14 = undefined;var $targ$14 = undefined;var code$2 = undefined;var map$0 = undefined;var newmap$0 = undefined;var parts$2 = undefined;var smname$0 = undefined;var m$8$0 = undefined;var t$4 = undefined;var p$1 = undefined;var ex$1 = undefined;var result$1 = undefined;var $it$8 = undefined;var self$6 = undefined;$it$8 = this;self$6 = this;opts$1 = __amp__({ noboil: $it$8.interactive, to5: true }, opts$1);t$4 = tokenize$0(source$3);p$1 = parse$0(t$4);if ($it$8.interactive) {
    $targ$13 = p$1;t0$13 = getProjector(Body$0)($targ$13);if (t0$13[0] && (t1$2 = t0$13[1], t2$2 = t1$2.length, t2$2 >= 0)) {
      args$1 = Array.prototype.slice.call(t1$2, 0);
    } else {
      ___match_error($targ$13);
    }stmt$1 = ["interactive"].concat(args$1);
  } else {
    stmt$1 = ["multi", p$1];
  }ex$1 = $it$8.expander.expand(["top"], exp$0.topscope, $it$8.env.mark(stmt$1));ex$1 = opt$0.hoist(ex$1);result$1 = $it$8.tr.translate(ex$1, "stmt");if (!opts$1.noboil) {
    result$1 = ENode(["splice"], {}, ["\n'use strict';", (m$7$0 = opts$1.noboil, (m$7$0 ? true : false) ? "" : opts$1.to5 ? "require('earlgrey-runtime/5');" : "require('earlgrey-runtime/6');"), $it$8.tr.dump_store(), result$1]);result$1;
  }if (!opts$1.sourceMap) {
    result$1 = collapse$0(result$1);if (opts$1.to5) {
      result$1 = to5$0.transform(result$1, {}).code;result$1;
    }return { code: result$1, map: null };
  } else {
    result$1 = toCodeAndSourceMap$0(result$1, source$3.url);if (opts$1.to5) {
      $targ$14 = to5$0.transform(result$1.code, { sourceMap: true });t0$14 = $targ$14;if (___hasprop(t0$14, "code") && (code$2 = t0$14.code, ___hasprop(t0$14, "map"))) {
        map$0 = t0$14.map;
      } else {
        ___match_error($targ$14);
      }[code$2, map$0];newmap$0 = transfer$0({ fromSourceMap: map$0, toSourceMap: result$1.map.toString() });result$1 = { code: code$2, map: newmap$0 };result$1;
    }m$8$0 = opts$1.sourceMap;if (m$8$0 === "inline") {
      return result$1.code + "\n/" + "/# sourceMappingURL=data:application/json;base64," + new Buffer(result$1.map.toString()).toString("base64") + ".map\n";
    } else {
      parts$2 = source$3.url.split("/");smname$0 = send(parts$2, parts$2.length - 1).replace(RegExp(".eg$", ""), ".js");result$1.code = result$1.code + ("\n/" + "/# sourceMappingURL=" + smname$0 + ".map\n");return result$1;
    }
  }
};Generator$0.prototype.evaluate = function evaluate(source$4) {
  var file$0 = undefined;var $targ$15 = undefined;var $it$9 = undefined;var self$7 = undefined;$it$9 = this;self$7 = this;if (!$it$9._eval) {
    file$0 = source$4.url;$targ$15 = evaluator$0({ globvar: $it$9.tr.globvar, global: null, filename: file$0, showname: file$0, cwd: file$0 });$it$9._eval = $targ$15;[];
  }return $it$9._eval($it$9.generate(source$4, { noboil: true }).code);
};Generator$0.prototype.evaluateInteractive = function evaluateInteractive() {
  var file$1 = undefined;var $targ$16 = undefined;var source$5 = undefined;var opts$2 = undefined;var t0$15 = undefined;var m$9$0 = undefined;var $it$10 = undefined;var self$8 = undefined;$it$10 = this;self$8 = this;m$9$0 = arguments;t0$15 = m$9$0.length;if (t0$15 >= 1 && t0$15 <= 2) {
    source$5 = m$9$0[0];if (1 >= t0$15) {
      opts$2 = {};
    } else {
      opts$2 = m$9$0[1];
    }if (!$it$10._eval) {
      file$1 = source$5.url;$targ$16 = evaluator$0({ globvar: $it$10.tr.globvar, global: null, filename: file$1, showname: file$1, cwd: file$1 });$it$10._eval = $targ$16;[];
    }return $it$10._eval($it$10.generateInteractive(source$5, __amp__(opts$2, { noboil: true })));
  } else {
    return ___match_error(m$9$0);
  }
};__amp____colon__(Generator$0, __amp____colon__((accum$4 = {}, accum$4["::name"] = "Generator", accum$4), (accum$5 = {}, accum$5["::egclass"] = true, accum$5)));$targ$17 = evaluator$0;exports.evaluator = $targ$17;[];$targ$18 = Source$0;exports.Source = $targ$18;[];$targ$19 = Location$0;exports.Location = $targ$19;[];$targ$20 = highlight_locations$0;exports.highlight_locations = $targ$20;[];$targ$21 = tokenize$0;exports.tokenize = $targ$21;[];$targ$22 = parse$0;exports.parse = $targ$22;[];$targ$23 = Generator$0;exports.Generator = $targ$23;[];$targ$24 = generate$0;exports.generate = $targ$24;[];$targ$25 = version$0;exports.version = $targ$25;[];
//# sourceMappingURL=earl-grey.js.map

