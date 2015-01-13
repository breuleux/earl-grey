"use strict";
require("earlgrey-runtime");
var $index$16002;
var $length$15996;
var temp$15990;
var acc$15984;
var eg$15934;
var $15927$15935;
var Source$15936;
var fs$15937;
var extensions$15938;
var load$15939;
(eg$15934 = require("./earl-grey"));
($15927$15935 = require("./location"));
(Source$15936 = $15927$15935.Source);
(fs$15937 = require("fs"));
(extensions$15938 = [".eg"]);
(load$15939 = (function(module$15962, file$15963) {
  var text$15969;
  var g$15970;
  var compiled$15971;
  (text$15969 = fs$15937.readFileSync(file$15963, "utf8"));
  (g$15970 = eg$15934.Generator());
  (compiled$15971 = g$15970.generate(Source$15936(text$15969, file$15963)));
  return module$15962._compile(compiled$15971, file$15963);
}));
(acc$15984 = []);
(temp$15990 = extensions$15938);
($length$15996 = temp$15990.length);
($index$16002 = 0);
$15940: for (; ($index$16002 < $length$15996); ($index$16002++)) {
  var ext$16019;
  var m$16011;
  (m$16011 = temp$15990[$index$16002]);
  (ext$16019 = m$16011);
  acc$15984.push(((require.extensions[ext$16019] = load$15939)));
}
acc$15984;
//# sourceURL=<compile-source>
