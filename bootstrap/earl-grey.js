"use strict";
require("earlgrey-runtime");
var accum$903;
var accum$907;
var $3$38;
var Source$39;
var Location$40;
var highlight_locations$41;
var __lt____lt____colon__$42;
var $4$43;
var tokenize$44;
var $5$45;
var parse$46;
var $6$47;
var Translator$48;
var std$49;
var exp$50;
var opt$51;
var $10$52;
var Body$53;
var vm$54;
var module$55;
var path$56;
var to5$57;
var version$58;
var evaluator$59;
var generate_from_ast$60;
var generate$61;
var Generator$62;
($3$38 = require("./location"));
(Source$39 = $3$38.Source);
(Location$40 = $3$38.Location);
(highlight_locations$41 = $3$38.highlight_locations);
(__lt____lt____colon__$42 = $3$38["<<:"]);
($4$43 = require("./lex"));
(tokenize$44 = $4$43.tokenize);
($5$45 = require("./parse"));
(parse$46 = $5$45.parse);
($6$47 = require("./translate-js"));
(Translator$48 = $6$47.Translator);
(std$49 = require("./stdenv"));
(exp$50 = require("./expand"));
(opt$51 = require("./opt"));
($10$52 = require("./util"));
(Body$53 = $10$52.Body);
(vm$54 = require("vm"));
(module$55 = require("module"));
(path$56 = require("path"));
(to5$57 = require("traceur"));
(version$58 = "zero");
(evaluator$59 = (function($129$132) {
  var t0$141;
  var accum$184;
  var paths$166;
  var e_module$167;
  var e_require$168;
  var __eval$206;
  var $137$156;
  var $134$150;
  var ph$138;
  var options$139;
  (t0$141 = $129$132);
  (options$139 = t0$141);
  (ph$138 = t0$141);
  ($134$150 = ph$138);
  $134$150;
  if (module$55._nodeModulePaths) {
    (paths$166 = module$55._nodeModulePaths(options$139.cwd));
    (e_module$167 = (new module$55(options$139.showname)));
    __amp____colon__(e_module$167, ({
      "filename": options$139.filename,
      "paths": paths$166
    }));
    (e_require$168 = (function(path$179) {
      return module$55._load(path$179, e_module$167, true);
    }));
    __amp____colon__(e_require$168, __amp____colon__(({"main": e_module$167}), __amp____colon__(((accum$184 = ({})), ((accum$184["resolve"] = (function(path$189) {
      return module$55._resolveFileName(path$189, e_module$167);
    })), accum$184)), ({
      "paths": paths$166,
      "cache": require.cache
    }))));
    __amp____colon__(global, ({
      "__filename": options$139.filename,
      "__dirname": path$56.dirname(options$139.filename),
      "module": e_module$167,
      "require": e_require$168
    }));
    return (function(code$192) {
      var script$196;
      (script$196 = vm$54.createScript(code$192, options$139.showname));
      return script$196.runInThisContext();
    });
  } else {
    (__eval$206 = eval);
    return (function(code$211) {
      return __eval$206(code$211);
    });
  }
}));
(generate_from_ast$60 = (function(ast$218) {
  var r$247;
  var ex$226;
  var tr$227;
  var rval$228;
  var prep$229;
  (ex$226 = std$49.expand(["top"], std$49.topscope, std$49.stdenv.fork().mark(["multi", ast$218])));
  (ex$226 = opt$51.hoist(ex$226));
  (tr$227 = Translator$48());
  (rval$228 = tr$227.translate(ex$226, "expr"));
  (prep$229 = tr$227.dump_store());
  (r$247 = (((prep$229 + ";(") + rval$228) + ")"));
  return to5$57.compile(r$247, []);
}));
std$49.stdenv.bind(std$49.topscope, "macro", ["macro", (function(context$256, scope$257, form$258, $253$259) {
  var code$320;
  var file$321;
  var ev$322;
  var mac$323;
  var mac2$324;
  var name$282;
  var sym$283;
  var arguments$284;
  var ast$285;
  var t0$274;
  var t1$275;
  var t2$276;
  var t3$277;
  var t4$278;
  var $261$269;
  var ph$263;
  (ph$263 = $253$259);
  ($261$269 = ph$263);
  if ((($261$269 instanceof Array) && (((t0$274 = $261$269.length)), ((t0$274 === 3) && (($261$269[0] === "data") && (((t1$275 = $261$269[1])), ((t1$275 instanceof Array) && (((t2$276 = t1$275.length)), ((t2$276 === 3) && ((t1$275[0] === "send") && (((t3$277 = t1$275[1])), ((name$282 = t3$277), ((t3$277 instanceof Array) && (((t4$278 = t3$277.length)), ((t4$278 === 2) && (t3$277[0] === "symbol")))))))))))))))) {
    (sym$283 = t3$277[1]);
    (arguments$284 = t1$275[2]);
    (ast$285 = $261$269[2]);
    (code$320 = generate_from_ast$60(["send", ["symbol", "->"], ["data", arguments$284, ast$285]]));
    (file$321 = form$258.location.source.url);
    (ev$322 = evaluator$59(({
      "filename": file$321,
      "showname": file$321,
      "cwd": file$321
    })));
    (mac$323 = ev$322(code$320));
    (mac2$324 = (function(c$341, s$342, f$343, e$344) {
      var bindings$351;
      var env$352;
      var r$353;
      (bindings$351 = form$258.env.list_bindings(scope$257));
      (env$352 = exp$50.Env());
      (env$352.scopes[std$49.topscope.name] = bindings$351);
      (r$353 = mac$323(c$341, s$342, f$343, e$344));
      return env$352.mark(r$353);
    }));
    return ["declare_raw", name$282, ["macro", mac2$324]];
  } else {
    ___match_error($261$269);
  }
})]);
std$49.stdenv.bind(std$49.topscope, "emacro", ["macro", (function(context$373, scope$374, form$375, $370$376) {
  var code$437;
  var file$438;
  var ev$439;
  var mac$440;
  var mac2$441;
  var name$399;
  var sym$400;
  var argument$401;
  var ast$402;
  var t0$391;
  var t1$392;
  var t2$393;
  var t3$394;
  var t4$395;
  var $378$386;
  var ph$380;
  (ph$380 = $370$376);
  ($378$386 = ph$380);
  if ((($378$386 instanceof Array) && (((t0$391 = $378$386.length)), ((t0$391 === 3) && (($378$386[0] === "data") && (((t1$392 = $378$386[1])), ((t1$392 instanceof Array) && (((t2$393 = t1$392.length)), ((t2$393 === 3) && ((t1$392[0] === "send") && (((t3$394 = t1$392[1])), ((name$399 = t3$394), ((t3$394 instanceof Array) && (((t4$395 = t3$394.length)), ((t4$395 === 2) && (t3$394[0] === "symbol")))))))))))))))) {
    (sym$400 = t3$394[1]);
    (argument$401 = t1$392[2]);
    (ast$402 = $378$386[2]);
    (code$437 = generate_from_ast$60(["send", ["symbol", "->"], ["data", ["data", argument$401], ast$402]]));
    (file$438 = form$375.location.source.url);
    (ev$439 = evaluator$59(({
      "filename": file$438,
      "showname": file$438,
      "cwd": file$438
    })));
    (mac$440 = ev$439(code$437));
    (mac2$441 = (function(c$458, s$459, f$460, e$461) {
      var x$514;
      var mac3$521;
      var x$585;
      var $484$499;
      var t0$495;
      var $482$490;
      var bindings$468;
      var env$469;
      var r$470;
      (bindings$468 = form$375.env.list_bindings(scope$374));
      (env$469 = exp$50.Env());
      (env$469.scopes[std$49.topscope.name] = bindings$468);
      (r$470 = ((($482$490 = c$458)), ((($482$490 instanceof Array) && (((t0$495 = $482$490.length)), ((t0$495 === 2) && ($482$490[0] === "project")))) ? (($484$499 = $482$490[1]), ((((x$514 = $484$499)), ((x$514 instanceof Array) && (x$514[0] === "pattern"))) ? (((mac3$521 = (function(c$528, s$529, f$530, $525$531) {
        var t0$538;
        var t1$539;
        var x$574;
        var env$563;
        var x$564;
        var t0$559;
        var $533$554;
        var ph$536;
        (t0$538 = $525$531);
        if (((t0$538 instanceof Array) && (((t1$539 = t0$538.length)), ((t1$539 === 2) && (t0$538[0] === "data"))))) {
          (ph$536 = t0$538[1]);
        } else {
          ___match_error($525$531);
        }
        ($533$554 = ph$536);
        if ((($533$554 instanceof Array) && (((t0$559 = $533$554.length)), ((t0$559 === 3) && ($533$554[0] === "use"))))) {
          (env$563 = $533$554[1]);
          (x$564 = $533$554[2]);
          return ["use", env$563, mac$440(__lt____lt____colon__$42(["data", x$564], e$461))];
        } else {
          (x$574 = $533$554);
          return mac$440(__lt____lt____colon__$42(["data", x$574], x$574));
        }
      }))), ["unconditional", ["macro", mac3$521]]) : ($484$499, mac$440(e$461)))) : ((((x$585 = $482$490)), ((x$585 instanceof Array) && (x$585[0] === "expr"))) ? mac$440(e$461) : (___match_error($482$490))))));
      return env$469.mark(r$470);
    }));
    return ["declare_raw", name$399, ["macro", mac2$441]];
  } else {
    ___match_error($378$386);
  }
})]);
std$49.stdenv.bind(std$49.topscope, "macros", ["macro", (function(context$602, scope$603, $597$604, $599$605) {
  var t0$611;
  var t0$620;
  var t1$621;
  var $index$679;
  var $length$673;
  var temp$667;
  var acc$661;
  var code$639;
  var file$640;
  var ev$641;
  var the_macros$642;
  var form$607;
  var env$608;
  var body$609;
  (t0$611 = $597$604);
  (form$607 = t0$611);
  if (___hasprop(t0$611, "env")) {
    (env$608 = t0$611.env);
  } else {
    ___match_error($597$604);
  }
  (t0$620 = $599$605);
  if (((t0$620 instanceof Array) && (((t1$621 = t0$620.length)), ((t1$621 === 2) && (t0$620[0] === "data"))))) {
    (body$609 = t0$620[1]);
  } else {
    ___match_error($599$605);
  }
  (code$639 = generate_from_ast$60(body$609));
  (file$640 = form$607.location.source.url);
  (ev$641 = evaluator$59(({
    "filename": file$640,
    "showname": file$640,
    "cwd": file$640
  })));
  (the_macros$642 = ev$641(code$639));
  return ["splice"].concat((((acc$661 = [])), (((temp$667 = items(the_macros$642))), ((($length$673 = temp$667.length)), ((($index$679 = 0)), (function() {
    $656: for (; ($index$679 < $length$673); ($index$679++)) {
      var k$698;
      var v$699;
      var t0$693;
      var t1$694;
      var m$688;
      (m$688 = temp$667[$index$679]);
      (t0$693 = m$688);
      if (((t0$693 instanceof Array) && (((t1$694 = t0$693.length)), (t1$694 === 2)))) {
        (k$698 = t0$693[0]);
        (v$699 = t0$693[1]);
        acc$661.push(["declare_raw", __amp____colon__(["symbol", k$698], ({"env": env$608})), ["macro", v$699]]);
      } else {
        ___match_error(m$688, "/home/olivier/git/earl-grey/src/earl-grey.eg", 4459, 4556);
      }
    }
  })()))), acc$661));
})]);
(generate$61 = (function(source$718) {
  return Generator$62().generate(source$718);
}));
(Generator$62 = (function() {
  var interactive$745;
  var t0$741;
  var $732$736;
  var it$0$727;
  (it$0$727 = ((!getChecker(Generator$62)(this)) ? Object.create(Generator$62.prototype) : this));
  ($732$736 = arguments);
  (t0$741 = $732$736.length);
  if (((t0$741 >= 0) && (t0$741 <= 1))) {
    (interactive$745 = ((0 >= t0$741) ? false : $732$736[0]));
    (it$0$727["tr"] = Translator$48("require(\"earlgrey-runtime\");"));
    (it$0$727["env"] = std$49.stdenv.fork());
    (it$0$727["interactive"] = interactive$745);
    (it$0$727["_eval"] = null);
  } else {
    ___match_error($732$736);
  }
  return it$0$727;
}));
(Generator$62.prototype["generate"] = (function() {
  var t0$836;
  var t1$837;
  var t2$838;
  var args$834;
  var stmt$829;
  var r$866;
  var t$815;
  var p$816;
  var ex$817;
  var rval$818;
  var source$800;
  var dump$801;
  var _to5$802;
  var t0$796;
  var $779$791;
  var it$0$781;
  var self$782;
  (it$0$781 = this);
  (self$782 = this);
  ($779$791 = arguments);
  (t0$796 = $779$791.length);
  if (((t0$796 >= 1) && (t0$796 <= 3))) {
    (source$800 = $779$791[0]);
    (dump$801 = ((1 >= t0$796) ? (!it$0$781.interactive) : $779$791[1]));
    (_to5$802 = ((2 >= t0$796) ? true : $779$791[2]));
    (t$815 = tokenize$44(source$800));
    (p$816 = parse$46(t$815));
    (ex$817 = (((stmt$829 = (it$0$781.interactive ? ((((t0$836 = getProjector(Body$53)(p$816))), ((t0$836[0] && (((t1$837 = t0$836[1])), (((t2$838 = t1$837.length)), (t2$838 >= 0)))) ? ((args$834 = Array.prototype.slice.call(t1$837, 0))) : ___match_error(p$816, "/home/olivier/git/earl-grey/src/earl-grey.eg", 5398, 5399))), ["interactive"].concat(args$834)) : ["multi", p$816]))), std$49.expand(["top"], std$49.topscope, it$0$781.env.mark(stmt$829))));
    (ex$817 = opt$51.hoist(ex$817));
    (rval$818 = it$0$781.tr.translate(ex$817, "stmt"));
    (r$866 = (dump$801 ? (it$0$781.tr.dump_store() + rval$818) : rval$818));
    if (_to5$802) {
      return to5$57.compile(r$866, []);
    } else {
      return r$866;
    }
  } else {
    ___match_error($779$791);
  }
}));
(Generator$62.prototype["evaluate"] = (function(source$876) {
  var file$893;
  var it$0$880;
  var self$881;
  (it$0$880 = this);
  (self$881 = this);
  if ((!it$0$880._eval)) {
    (file$893 = source$876.url);
    (it$0$880["_eval"] = evaluator$59(({
      "filename": file$893,
      "showname": file$893,
      "cwd": file$893
    })));
  }
  return it$0$880._eval(it$0$880.generate(source$876));
}));
__amp____colon__(Generator$62, __amp____colon__(((accum$903 = ({})), ((accum$903["::name"] = "Generator"), accum$903)), ((accum$907 = ({})), ((accum$907["::egclass"] = true), accum$907))));
Generator$62;
(exports["evaluator"] = evaluator$59);
(exports["Source"] = Source$39);
(exports["Location"] = Location$40);
(exports["highlight_locations"] = highlight_locations$41);
(exports["tokenize"] = tokenize$44);
(exports["parse"] = parse$46);
(exports["Generator"] = Generator$62);
(exports["generate"] = generate$61);
(exports["version"] = version$58);
//# sourceURL=<compile-source>
