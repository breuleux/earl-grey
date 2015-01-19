"use strict";
require("earlgrey-runtime");
var m$0;
var acc$0;
var $targ$10;
var temp$0;
var eg$0;
var $1$0;
var Source$0;
var fs$0;
var extensions$0;
var load$0;
eg$0 = require("./earl-grey");
$1$0 = require("./location");
Source$0 = $1$0.Source;
fs$0 = require("fs");
extensions$0 = [".eg"];
load$0 = (function(module$0, file$0) {
  var text$0;
  var g$0;
  var compiled$0;
  text$0 = fs$0.readFileSync(file$0, "utf8");
  g$0 = eg$0.Generator();
  compiled$0 = g$0.generate(Source$0(text$0, file$0));
  return module$0._compile(compiled$0, file$0);
});
acc$0 = [];
$targ$10 = null;
temp$0 = $targ$10;
m$0 = null;
$2: for (var $__0 = extensions$0[$traceurRuntime.toProperty(Symbol.iterator)](),
    $__1; !($__1 = $__0.next()).done; ) {
  m$0 = $__1.value;
  {
    var $targ$12;
    var $targ$11;
    var ext$0;
    ext$0 = m$0;
    $targ$12 = load$0;
    (require.extensions[ext$0] = $targ$12);
    $targ$11 = [];
    temp$0 = $targ$11;
    acc$0.push(temp$0);
  }
}
acc$0;
//# sourceURL=<compile-source>
