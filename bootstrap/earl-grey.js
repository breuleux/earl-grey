"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var accum$1;
var accum$2;
var accum$3;
var accum$4;
var $targ$10;
var $targ$11;
var $targ$12;
var $targ$13;
var $targ$14;
var $targ$15;
var $targ$16;
var $targ$17;
var $targ$18;
var $0$0;
var Source$0;
var Location$0;
var highlight_locations$0;
var __lt____lt____colon__$0;
var $1$0;
var tokenize$0;
var $2$0;
var parse$0;
var $3$0;
var Translator$0;
var std$0;
var exp$0;
var opt$0;
var $7$0;
var Body$0;
var vm$0;
var module$0;
var path$0;
var to5$0;
var $8$0;
var SourceNode$0;
var version$0;
var evaluator$0;
var Pipeline$0;
var generate$0;
var collapse$0;
var Generator$0;
$0$0 = require("./location");
Source$0 = $0$0.Source;
Location$0 = $0$0.Location;
highlight_locations$0 = $0$0.highlight_locations;
__lt____lt____colon__$0 = $0$0["<<:"];
$1$0 = require("./lex");
tokenize$0 = $1$0.tokenize;
$2$0 = require("./parse");
parse$0 = $2$0.parse;
$3$0 = require("./translate-js");
Translator$0 = $3$0.Translator;
std$0 = require("./stdenv");
exp$0 = require("./expand");
opt$0 = require("./opt");
$7$0 = require("./util");
Body$0 = $7$0.Body;
vm$0 = require("vm");
module$0 = require("module");
path$0 = require("path");
to5$0 = require("traceur");
$8$0 = require("source-map");
SourceNode$0 = $8$0.SourceNode;
version$0 = "zero";
evaluator$0 = (function evaluator(temp$0$0) {
  var t0$0;
  var accum$0;
  var paths$0;
  var e_module$0;
  var e_require$0;
  var save$0;
  var __eval$0;
  var $$111$0;
  var options$0;
  var ph$0$0;
  t0$0 = temp$0$0;
  options$0 = t0$0;
  ph$0$0 = t0$0;
  if (module$0._nodeModulePaths) {
    paths$0 = module$0._nodeModulePaths(options$0.cwd);
    e_module$0 = (new module$0(options$0.showname));
    __amp____colon__(e_module$0, ({
      "filename": options$0.filename,
      "paths": paths$0
    }));
    e_require$0 = (function e_require(path$1) {
      return module$0._load(path$1, e_module$0, true);
    });
    __amp____colon__(e_require$0, __amp____colon__(({"main": e_module$0}), __amp____colon__(((accum$0 = ({})), (accum$0["resolve"] = (function resolve(path$2) {
      return module$0._resolveFileName(path$2, e_module$0);
    })), accum$0), ({
      "paths": paths$0,
      "cache": require.cache
    }))));
    save$0 = ({
      "__filename": global.__filename,
      "__dirname": global.__dirname,
      "module": global.module,
      "require": global.require
    });
    __amp____colon__(global, ({
      "__filename": options$0.filename,
      "__dirname": path$0.dirname(options$0.filename),
      "module": e_module$0,
      "require": e_require$0
    }));
    return (function(code$0) {
      var script$0;
      var rval$0;
      script$0 = vm$0.createScript(code$0, options$0.showname);
      rval$0 = script$0.runInThisContext();
      __amp____colon__(global, save$0);
      return rval$0;
    });
  } else {
    __eval$0 = eval;
    return (function(code$1) {
      return __eval$0(code$1);
    });
  }
});
Pipeline$0 = (function Pipeline() {
  var $targ$0;
  var $targ$1;
  var $it$0;
  if ((!getChecker(Pipeline$0)(this))) {
    $it$0 = Object.create(Pipeline$0.prototype);
  } else {
    $it$0 = this;
  }
  $targ$0 = std$0.make_expander($it$0);
  ($it$0["_expander"] = $targ$0);
  [];
  $targ$1 = $it$0._expander.mkenv();
  ($it$0["env"] = $targ$1);
  [];
  return $it$0;
});
(Pipeline$0.prototype["parse"] = (function parse(source$0) {
  var t$0;
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  t$0 = tokenize$0(source$0);
  return parse$0(t$0);
}));
(Pipeline$0.prototype["expand"] = (function expand(ast$0) {
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  return $it$2._expander.expand(["top"], exp$0.topscope, $it$2.env.mark(ast$0));
}));
(Pipeline$0.prototype["translate"] = (function translate(ast$1) {
  var r$0;
  var res$0;
  var tr$0;
  var rval$1;
  var prep$0;
  var $it$3;
  var self$2;
  $it$3 = this;
  self$2 = this;
  res$0 = opt$0.hoist(ast$1);
  tr$0 = Translator$0();
  rval$1 = collapse$0(tr$0.translate(res$0, "expr"));
  prep$0 = tr$0.dump_store();
  r$0 = (((prep$0 + ";(") + rval$1) + ")");
  return ({
    "code": to5$0.compile(r$0, []),
    "location": ast$1.location
  });
}));
(Pipeline$0.prototype["evaluate"] = (function evaluate(src$0) {
  var ev$0;
  var loc$0;
  var $it$4;
  var self$3;
  $it$4 = this;
  self$3 = this;
  loc$0 = (src$0.location || ({"source": ({"url": "<eval>"})}));
  ev$0 = evaluator$0(({
    "filename": loc$0.source.url,
    "showname": loc$0.source.url,
    "cwd": loc$0.source.url
  }));
  return ev$0(src$0.code);
}));
(Pipeline$0.prototype["go"] = (function go(x$0, temp$1$0, end$0) {
  var t0$1;
  var start$0;
  var ph$1$0;
  var $it$5;
  var self$4;
  $it$5 = this;
  self$4 = this;
  t0$1 = temp$1$0;
  start$0 = t0$1;
  ph$1$0 = t0$1;
  if (((start$0 === end$0) || (start$0 === "eval"))) {
    return x$0;
  } else {
    if ((ph$1$0 === "source")) {
      return $it$5.go($it$5.parse(x$0), "parse", end$0);
    } else {
      if ((ph$1$0 === "parse")) {
        return $it$5.go($it$5.expand(x$0), "expand", end$0);
      } else {
        if ((ph$1$0 === "expand")) {
          return $it$5.go($it$5.translate(x$0), "translate", end$0);
        } else {
          if ((ph$1$0 === "translate")) {
            return $it$5.go($it$5.evaluate(x$0), "eval", end$0);
          } else {
            throw ErrorFactory(["pipeline"]).create(("Unknown pipeline stage: " + start$0));
          }
        }
      }
    }
  }
}));
__amp____colon__(Pipeline$0, __amp____colon__(((accum$1 = ({})), (accum$1["::name"] = "Pipeline"), accum$1), ((accum$2 = ({})), (accum$2["::egclass"] = true), accum$2)));
generate$0 = (function generate(source$1) {
  return Generator$0().generate(source$1);
});
collapse$0 = (function collapse(temp$2$0) {
  var t0$2;
  var acc$0;
  var rval$2;
  var t$1;
  var s$1;
  var tags$0;
  var props$0;
  var children$0;
  var $$356$0;
  var t0$3;
  var node$0;
  var ph$2$0;
  t0$2 = temp$2$0;
  node$0 = t0$2;
  ph$2$0 = t0$2;
  t0$3 = ph$2$0;
  if ((getChecker(Node)(t0$3) && (___hasprop(t0$3, "tags") && ((tags$0 = t0$3.tags), (___hasprop(t0$3, "props") && ((props$0 = t0$3.props), ___hasprop(t0$3, "children"))))))) {
    children$0 = t0$3.children;
    rval$2 = "";
    acc$0 = (function acc(ph$3$0) {
      var m$0;
      var acc$1;
      var temp$3;
      var n$0;
      var xs$0$0;
      var s$0;
      var $$390$0;
      var t0$4;
      t0$4 = ph$3$0;
      if ((typeof(t0$4) === "string")) {
        s$0 = t0$4;
        return (rval$2 = (rval$2 + s$0));
      } else {
        if (getChecker(Array)(t0$4)) {
          xs$0$0 = t0$4;
          acc$1 = [];
          temp$3 = null;
          m$0 = null;
          $9: for (var $__0 = xs$0$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$0 = $__1.value;
            {
              var x$1;
              x$1 = m$0;
              temp$3 = acc$0(x$1);
              acc$1.push(temp$3);
            }
          }
          return acc$1;
        } else {
          if (getChecker(Node)(t0$4)) {
            n$0 = t0$4;
            return (rval$2 = (rval$2 + collapse$0(n$0)));
          } else {
            return ___match_error(ph$3$0);
          }
        }
      }
    });
    acc$0(children$0);
    return rval$2;
  } else {
    if ((typeof(t0$3) === "string")) {
      s$1 = t0$3;
      return s$1;
    } else {
      t$1 = node$0;
      console.log(t$1);
      throw ErrorFactory(["invalid_translation_node"]).create(node$0);
    }
  }
});
Generator$0 = (function Generator() {
  var $targ$2;
  var $targ$3;
  var $targ$4;
  var $targ$5;
  var $targ$6;
  var $targ$7;
  var interactive$0;
  var t0$5;
  var m$1$0;
  var $it$6;
  if ((!getChecker(Generator$0)(this))) {
    $it$6 = Object.create(Generator$0.prototype);
  } else {
    $it$6 = this;
  }
  m$1$0 = arguments;
  t0$5 = m$1$0.length;
  if (((t0$5 >= 0) && (t0$5 <= 1))) {
    if ((0 >= t0$5)) {
      interactive$0 = false;
    } else {
      interactive$0 = m$1$0[0];
    }
    $targ$2 = Translator$0("\n         \"use strict\";\n         require(\"traceur-runtime\");\n         require(\"earlgrey-runtime\");\n      ".replace(RegExp(" |\\n", "g"), ""));
    ($it$6["tr"] = $targ$2);
    [];
    $targ$3 = std$0.stdenv.fork();
    ($it$6["env"] = $targ$3);
    [];
    $targ$4 = interactive$0;
    ($it$6["interactive"] = $targ$4);
    [];
    $targ$5 = null;
    ($it$6["_eval"] = $targ$5);
    [];
    $targ$6 = Pipeline$0();
    ($it$6["pipeline"] = $targ$6);
    [];
    $targ$7 = std$0.make_expander($it$6.pipeline);
    ($it$6["expander"] = $targ$7);
    [];
  } else {
    ___match_error(m$1$0);
  }
  return $it$6;
});
(Generator$0.prototype["generate"] = (function generate() {
  var t0$7;
  var t1$0;
  var t2$0;
  var $targ$8;
  var args$0;
  var stmt$0;
  var r$1;
  var t$2;
  var p$0;
  var ex$0;
  var rval$3;
  var source$2;
  var dump$0;
  var _to5$0;
  var t0$6;
  var m$2$0;
  var $it$7;
  var self$5;
  $it$7 = this;
  self$5 = this;
  m$2$0 = arguments;
  t0$6 = m$2$0.length;
  if (((t0$6 >= 1) && (t0$6 <= 3))) {
    source$2 = m$2$0[0];
    if ((1 >= t0$6)) {
      dump$0 = (!$it$7.interactive);
    } else {
      dump$0 = m$2$0[1];
    }
    if ((2 >= t0$6)) {
      _to5$0 = true;
    } else {
      _to5$0 = m$2$0[2];
    }
    t$2 = tokenize$0(source$2);
    p$0 = parse$0(t$2);
    if ($it$7.interactive) {
      $targ$8 = p$0;
      t0$7 = getProjector(Body$0)($targ$8);
      if ((t0$7[0] && ((t1$0 = t0$7[1]), (t2$0 = t1$0.length), (t2$0 >= 0)))) {
        args$0 = Array.prototype.slice.call(t1$0, 0);
      } else {
        ___match_error($targ$8);
      }
      stmt$0 = ["interactive"].concat(args$0);
    } else {
      stmt$0 = ["multi", p$0];
    }
    ex$0 = $it$7.expander.expand(["top"], exp$0.topscope, $it$7.env.mark(stmt$0));
    ex$0 = opt$0.hoist(ex$0);
    rval$3 = $it$7.tr.translate(ex$0, "stmt");
    if (dump$0) {
      r$1 = collapse$0(Node(["splice"], ({}), [$it$7.tr.dump_store(), rval$3]));
    } else {
      r$1 = collapse$0(rval$3);
    }
    if (_to5$0) {
      return to5$0.compile(r$1, []);
    } else {
      return r$1;
    }
  } else {
    return ___match_error(m$2$0);
  }
}));
(Generator$0.prototype["evaluate"] = (function evaluate(source$3) {
  var file$0;
  var $targ$9;
  var $it$8;
  var self$6;
  $it$8 = this;
  self$6 = this;
  if ((!$it$8._eval)) {
    file$0 = source$3.url;
    $targ$9 = evaluator$0(({
      "filename": file$0,
      "showname": file$0,
      "cwd": file$0
    }));
    ($it$8["_eval"] = $targ$9);
    [];
  }
  return $it$8._eval($it$8.generate(source$3));
}));
__amp____colon__(Generator$0, __amp____colon__(((accum$3 = ({})), (accum$3["::name"] = "Generator"), accum$3), ((accum$4 = ({})), (accum$4["::egclass"] = true), accum$4)));
$targ$10 = evaluator$0;
(exports["evaluator"] = $targ$10);
[];
$targ$11 = Source$0;
(exports["Source"] = $targ$11);
[];
$targ$12 = Location$0;
(exports["Location"] = $targ$12);
[];
$targ$13 = highlight_locations$0;
(exports["highlight_locations"] = $targ$13);
[];
$targ$14 = tokenize$0;
(exports["tokenize"] = $targ$14);
[];
$targ$15 = parse$0;
(exports["parse"] = $targ$15);
[];
$targ$16 = Generator$0;
(exports["Generator"] = $targ$16);
[];
$targ$17 = generate$0;
(exports["generate"] = $targ$17);
[];
$targ$18 = version$0;
(exports["version"] = $targ$18);
[];
//# sourceURL=<compile-source>
