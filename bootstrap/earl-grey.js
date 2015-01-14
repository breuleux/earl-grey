"use strict";
require("earlgrey-runtime");
var $targ$63;
var accum$1;
var $targ$64;
var accum$2;
var $targ$94;
var accum$3;
var $targ$95;
var accum$4;
var $targ$96;
var $targ$97;
var $targ$98;
var $targ$99;
var $targ$100;
var $targ$101;
var $targ$102;
var $targ$103;
var $targ$104;
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
var version$0;
var evaluator$0;
var Pipeline$0;
var $targ$22;
var $targ$23;
var $targ$24;
var $targ$25;
var $targ$26;
var generate$0;
var Generator$0;
var $targ$29;
var $targ$30;
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
version$0 = "zero";
evaluator$0 = (function(temp$0$0) {
  var t0$0;
  var $targ$37;
  var accum$0;
  var paths$0;
  var e_module$0;
  var e_require$0;
  var __eval$0;
  var $$103$0;
  var m$0$0;
  var ph$0;
  var options$0;
  t0$0 = temp$0$0;
  options$0 = t0$0;
  ph$0 = t0$0;
  m$0$0 = ph$0;
  m$0$0;
  if (module$0._nodeModulePaths) {
    paths$0 = module$0._nodeModulePaths(options$0.cwd);
    e_module$0 = (new module$0(options$0.showname));
    __amp____colon__(e_module$0, ({
      "filename": options$0.filename,
      "paths": paths$0
    }));
    e_require$0 = (function(path$1) {
      return module$0._load(path$1, e_module$0, true);
    });
    __amp____colon__(e_require$0, __amp____colon__(({"main": e_module$0}), __amp____colon__((($targ$37 = (function(path$2) {
      return module$0._resolveFileName(path$2, e_module$0);
    })), (accum$0 = ({})), (accum$0["resolve"] = $targ$37), accum$0), ({
      "paths": paths$0,
      "cache": require.cache
    }))));
    __amp____colon__(global, ({
      "__filename": options$0.filename,
      "__dirname": path$0.dirname(options$0.filename),
      "module": e_module$0,
      "require": e_require$0
    }));
    return (function(code$0) {
      var script$0;
      script$0 = vm$0.createScript(code$0, options$0.showname);
      return script$0.runInThisContext();
    });
  } else {
    __eval$0 = eval;
    return (function(code$1) {
      return __eval$0(code$1);
    });
  }
});
Pipeline$0 = (function() {
  var $targ$41;
  var $targ$42;
  var $it$0;
  $it$0 = ((!getChecker(Pipeline$0)(this)) ? Object.create(Pipeline$0.prototype) : this);
  $targ$41 = std$0.make_expander($it$0);
  ($it$0["_expander"] = $targ$41);
  $targ$42 = $it$0._expander.mkenv();
  ($it$0["env"] = $targ$42);
  return $it$0;
});
$targ$22 = (function(source$0) {
  var t$0;
  var $it$1;
  var self$0;
  $it$1 = this;
  self$0 = this;
  t$0 = tokenize$0(source$0);
  return parse$0(t$0);
});
(Pipeline$0.prototype["parse"] = $targ$22);
$targ$23 = (function(ast$0) {
  var $it$2;
  var self$1;
  $it$2 = this;
  self$1 = this;
  return $it$2._expander.expand(["top"], exp$0.topscope, $it$2.env.mark(ast$0));
});
(Pipeline$0.prototype["expand"] = $targ$23);
$targ$24 = (function(ast$1) {
  var r$0;
  var res$0;
  var tr$0;
  var rval$0;
  var prep$0;
  var $it$3;
  var self$2;
  $it$3 = this;
  self$2 = this;
  res$0 = opt$0.hoist(ast$1);
  tr$0 = Translator$0();
  rval$0 = tr$0.translate(res$0, "expr");
  prep$0 = tr$0.dump_store();
  r$0 = (((prep$0 + ";(") + rval$0) + ")");
  return ({
    "code": to5$0.compile(r$0, []),
    "location": ast$1.location
  });
});
(Pipeline$0.prototype["translate"] = $targ$24);
$targ$25 = (function(src$0) {
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
});
(Pipeline$0.prototype["evaluate"] = $targ$25);
$targ$26 = (function(x$0, temp$1$0, end$0) {
  var t0$1;
  var m$1$0;
  var ph$1;
  var start$0;
  var $it$5;
  var self$4;
  $it$5 = this;
  self$4 = this;
  t0$1 = temp$1$0;
  start$0 = t0$1;
  ph$1 = t0$1;
  m$1$0 = ph$1;
  m$1$0;
  if (((start$0 === end$0) || (start$0 === "eval"))) {
    return x$0;
  } else {
    if ((m$1$0 === "source")) {
      return $it$5.go($it$5.parse(x$0), "parse", end$0);
    } else {
      if ((m$1$0 === "parse")) {
        return $it$5.go($it$5.expand(x$0), "expand", end$0);
      } else {
        if ((m$1$0 === "expand")) {
          return $it$5.go($it$5.translate(x$0), "translate", end$0);
        } else {
          if ((m$1$0 === "translate")) {
            return $it$5.go($it$5.evaluate(x$0), "eval", end$0);
          } else {
            m$1$0;
            throw ErrorFactory(["pipeline"]).create(("Unknown pipeline stage: " + start$0));
          }
        }
      }
    }
  }
});
(Pipeline$0.prototype["go"] = $targ$26);
__amp____colon__(Pipeline$0, __amp____colon__((($targ$63 = "Pipeline"), (accum$1 = ({})), (accum$1["::name"] = $targ$63), accum$1), (($targ$64 = true), (accum$2 = ({})), (accum$2["::egclass"] = $targ$64), accum$2)));
Pipeline$0;
generate$0 = (function(source$1) {
  return Generator$0().generate(source$1);
});
Generator$0 = (function() {
  var $targ$68;
  var $targ$69;
  var $targ$71;
  var $targ$72;
  var $targ$73;
  var t0$2;
  var $targ$70;
  var m$2$0;
  var $it$6;
  $it$6 = ((!getChecker(Generator$0)(this)) ? Object.create(Generator$0.prototype) : this);
  m$2$0 = arguments;
  t0$2 = m$2$0.length;
  if (((t0$2 >= 0) && (t0$2 <= 1))) {
    $targ$70 = ((0 >= t0$2) ? false : m$2$0[0]);
    $targ$68 = Translator$0("require(\"earlgrey-runtime\");");
    ($it$6["tr"] = $targ$68);
    $targ$69 = std$0.stdenv.fork();
    ($it$6["env"] = $targ$69);
    ($it$6["interactive"] = $targ$70);
    $targ$71 = null;
    ($it$6["_eval"] = $targ$71);
    $targ$72 = Pipeline$0();
    ($it$6["pipeline"] = $targ$72);
    $targ$73 = std$0.make_expander($it$6.pipeline);
    ($it$6["expander"] = $targ$73);
  } else {
    ___match_error(m$2$0);
  }
  return $it$6;
});
$targ$29 = (function() {
  var t2$0;
  var t1$0;
  var t0$4;
  var $targ$85;
  var args$0;
  var stmt$0;
  var r$1;
  var t$1;
  var p$0;
  var $targ$80;
  var ex$0;
  var $targ$81;
  var $targ$82;
  var rval$1;
  var t0$3;
  var source$2;
  var dump$0;
  var _to5$0;
  var m$3$0;
  var $it$7;
  var self$5;
  $it$7 = this;
  self$5 = this;
  m$3$0 = arguments;
  t0$3 = m$3$0.length;
  if (((t0$3 >= 1) && (t0$3 <= 3))) {
    source$2 = m$3$0[0];
    dump$0 = ((1 >= t0$3) ? (!$it$7.interactive) : m$3$0[1]);
    _to5$0 = ((2 >= t0$3) ? true : m$3$0[2]);
    t$1 = tokenize$0(source$2);
    p$0 = parse$0(t$1);
    $targ$80 = ((stmt$0 = ($it$7.interactive ? (($targ$85 = p$0), (t0$4 = getProjector(Body$0)($targ$85)), ((t0$4[0] && ((t1$0 = t0$4[1]), (t2$0 = t1$0.length), (t2$0 >= 0))) ? (args$0 = Array.prototype.slice.call(t1$0, 0)) : ___match_error($targ$85)), ["interactive"].concat(args$0)) : ["multi", p$0])), $it$7.expander.expand(["top"], exp$0.topscope, $it$7.env.mark(stmt$0)));
    ex$0 = $targ$80;
    $targ$81 = opt$0.hoist(ex$0);
    ex$0 = $targ$81;
    $targ$82 = opt$0.eliminate_spurious_variables(ex$0);
    ex$0 = $targ$82;
    rval$1 = $it$7.tr.translate(ex$0, "stmt");
    r$1 = (dump$0 ? ($it$7.tr.dump_store() + rval$1) : rval$1);
    if (_to5$0) {
      return to5$0.compile(r$1, []);
    } else {
      return r$1;
    }
  } else {
    return ___match_error(m$3$0);
  }
});
(Generator$0.prototype["generate"] = $targ$29);
$targ$30 = (function(source$3) {
  var file$0;
  var $targ$93;
  var $it$8;
  var self$6;
  $it$8 = this;
  self$6 = this;
  if ((!$it$8._eval)) {
    file$0 = source$3.url;
    $targ$93 = evaluator$0(({
      "filename": file$0,
      "showname": file$0,
      "cwd": file$0
    }));
    ($it$8["_eval"] = $targ$93);
  }
  return $it$8._eval($it$8.generate(source$3));
});
(Generator$0.prototype["evaluate"] = $targ$30);
__amp____colon__(Generator$0, __amp____colon__((($targ$94 = "Generator"), (accum$3 = ({})), (accum$3["::name"] = $targ$94), accum$3), (($targ$95 = true), (accum$4 = ({})), (accum$4["::egclass"] = $targ$95), accum$4)));
Generator$0;
$targ$96 = evaluator$0;
(exports["evaluator"] = $targ$96);
$targ$97 = Source$0;
(exports["Source"] = $targ$97);
$targ$98 = Location$0;
(exports["Location"] = $targ$98);
$targ$99 = highlight_locations$0;
(exports["highlight_locations"] = $targ$99);
$targ$100 = tokenize$0;
(exports["tokenize"] = $targ$100);
$targ$101 = parse$0;
(exports["parse"] = $targ$101);
$targ$102 = Generator$0;
(exports["Generator"] = $targ$102);
$targ$103 = generate$0;
(exports["generate"] = $targ$103);
$targ$104 = version$0;
(exports["version"] = $targ$104);
//# sourceURL=<compile-source>
