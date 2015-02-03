"use strict";
"usestrict";
require("traceur-runtime");
require("earlgrey-runtime");
var $targ$0;
var $0$0;
var Source$0;
var $1$0;
var qq$0;
var quaint$0;
$0$0 = require("../location");
Source$0 = $0$0.Source;
$1$0 = require("./helpers");
qq$0 = $1$0.qq;
quaint$0 = require("quaint");
$targ$0 = (function(mac$0) {
  var t0$1;
  var t0$5;
  var $targ$1;
  var quote_mac$0;
  var $targ$2;
  var quaint_mac$0;
  var exports$0;
  exports$0 = ({});
  $targ$1 = (function(context$0, info$0, form$0, temp$0$0) {
    var t0$0;
    var t1$0;
    var expr$1;
    var expr$0;
    var s$0;
    t0$0 = temp$0$0;
    expr$0 = t0$0;
    if (((t0$0 instanceof Array) && ((t1$0 = t0$0.length), ((t1$0 === 2) && (t0$0[0] === "value"))))) {
      s$0 = t0$0[1];
    } else {
      ___match_error(temp$0$0);
    }
    expr$1 = info$0.go(Source$0(s$0, "<quasiquote>"), "source", "parse");
    return info$0.mark(qq$0(expr$1));
  });
  t0$1 = getProjector(mac$0("`"))($targ$1);
  if (t0$1[0]) {
    quote_mac$0 = t0$1[1];
  } else {
    ___match_error($targ$1);
  }
  $targ$2 = (function(context$1, info$1, form$1, temp$1$0) {
    var t0$2;
    var t1$1;
    var accum$0;
    var accum$1;
    var evaluator$0;
    var q$0;
    var transform$0;
    var expr$2;
    var s$1;
    t0$2 = temp$1$0;
    expr$2 = t0$2;
    if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), ((t1$1 === 2) && (t0$2[0] === "value"))))) {
      s$1 = t0$2[1];
    } else {
      ___match_error(temp$1$0);
    }
    evaluator$0 = __amp____colon__(((accum$0 = ({})), (accum$0["eval"] = (function(src$0) {
      return this.mark(this.go(src$0.makeSource(), "source", "parse"));
    })), accum$0), ((accum$1 = ({})), (accum$1["setenv"] = (function setenv(name$0, value$0) {
      return undefined;
    })), accum$1));
    q$0 = quaint$0.create(evaluator$0);
    transform$0 = (function transform(temp$2$0) {
      var t0$3;
      var m$0;
      var acc$0;
      var temp$3;
      var m$1;
      var acc$1;
      var temp$4;
      var wtags$0;
      var wchildren$0;
      var tags$0;
      var props$0;
      var children$0;
      var bridge$$14985$0;
      var t0$4;
      var node$0;
      var ph$0$0;
      t0$3 = temp$2$0;
      node$0 = t0$3;
      ph$0$0 = t0$3;
      bridge$$14985$0 = ph$0$0;
      if (((typeof(bridge$$14985$0) === "string") || (typeof(bridge$$14985$0) === "number"))) {
        return ["value", node$0];
      } else {
        t0$4 = ph$0$0;
        if ((getChecker(Node)(t0$4) && (___hasprop(t0$4, "tags") && ((tags$0 = t0$4.tags), (___hasprop(t0$4, "props") && ((props$0 = t0$4.props), ___hasprop(t0$4, "children"))))))) {
          children$0 = t0$4.children;
          acc$0 = [];
          temp$3 = null;
          m$0 = null;
          $2: for (var $__0 = tags$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__1; !($__1 = $__0.next()).done; ) {
            m$0 = $__1.value;
            {
              var tag$0;
              tag$0 = m$0;
              temp$3 = ["value", tag$0];
              acc$0.push(temp$3);
            }
          }
          wtags$0 = acc$0;
          acc$1 = [];
          temp$4 = null;
          m$1 = null;
          $3: for (var $__2 = children$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__3; !($__3 = $__2.next()).done; ) {
            m$1 = $__3.value;
            {
              var child$0;
              child$0 = m$1;
              temp$4 = transform$0(child$0);
              acc$1.push(temp$4);
            }
          }
          wchildren$0 = acc$1;
          return ["send", ["symbol", "Node"], ["data", ["data"].concat(wtags$0), ["data", ["symbol", "="]], ["data"].concat(wchildren$0)]];
        } else {
          return node$0;
        }
      }
    });
    return transform$0(q$0.run(s$1));
  });
  t0$5 = getProjector(mac$0("'"))($targ$2);
  if (t0$5[0]) {
    quaint_mac$0 = t0$5[1];
  } else {
    ___match_error($targ$2);
  }
  return exports$0;
});
(module["exports"] = $targ$0);
[];
//# sourceURL=<compile-source>
