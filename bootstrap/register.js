
"use strict";require("earlgrey-runtime/5");var $targ$4 = undefined;var $targ$5 = undefined;var eg$0 = undefined;var $1$0 = undefined;var Source$0 = undefined;var fs$0 = undefined;var path$0 = undefined;var getCache$0 = undefined;var load$0 = undefined;var extensions$0 = undefined;var install$0 = undefined;eg$0 = require("./earl-grey");$1$0 = require("./location");Source$0 = $1$0.Source;fs$0 = require("fs");path$0 = require("path");getCache$0 = function getCache() {
  var rval$0 = undefined;var t0$1 = undefined;var text$0 = undefined;var g$1 = undefined;var $targ$1 = undefined;var code$0 = undefined;var map$0 = undefined;var t0$2 = undefined;var t1$0 = undefined;var cachedir$0 = undefined;var cache$0 = undefined;var sstat$0 = undefined;var cstat$0 = undefined;var $targ$0 = undefined;var g$0 = undefined;var compiled$0 = undefined;var srcfile$0 = undefined;var file$0 = undefined;var opts$0 = undefined;var t0$0 = undefined;var m$0$0 = undefined;m$0$0 = arguments;t0$0 = m$0$0.length;if (t0$0 >= 1 && t0$0 <= 2) {
    file$0 = m$0$0[0];if (1 >= t0$0) {
      opts$0 = {};
    } else {
      opts$0 = m$0$0[1];
    }cachedir$0 = path$0.join(path$0.dirname(file$0), "egcache");cache$0 = path$0.join(cachedir$0, path$0.basename(file$0).replace(RegExp(".eg$", ""), ".js"));sstat$0 = fs$0.statSync(file$0);rval$0 = false;try {
      rval$0 = fs$0.statSync(cache$0);rval$0;
    } catch (excv$0) {
      var e$0 = undefined;e$0 = excv$0;rval$0 = null;rval$0;
    }cstat$0 = rval$0;if (opts$0.lazy && cstat$0 && sstat$0.mtime.getTime() < cstat$0.mtime.getTime()) {
      $targ$0 = [null, fs$0.readFileSync(cache$0, "utf8"), cache$0];
    } else {
      text$0 = fs$0.readFileSync(file$0, "utf8");g$1 = eg$0.Generator(opts$0.interactive);$targ$1 = g$1.generate(Source$0(text$0, file$0), __amp__({ sourceMap: true }, opts$0));t0$1 = $targ$1;if (___hasprop(t0$1, "code") && (code$0 = t0$1.code, ___hasprop(t0$1, "map"))) {
        map$0 = t0$1.map;
      } else {
        ___match_error($targ$1);
      }[code$0, map$0];try {
        try {
          fs$0.mkdirSync(cachedir$0);
        } catch (excv$1) {
          var e$1 = undefined;e$1 = excv$1;"ignore error";
        }fs$0.writeFileSync(cache$0, code$0);fs$0.writeFileSync(cache$0 + ".map", map$0);
      } catch (excv$2) {
        var e$2 = undefined;e$2 = excv$2;console.err("Failed to cache compiled version of: " + file$0);
      }$targ$0 = [g$1, code$0, cache$0];
    }t0$2 = $targ$0;if (Array.isArray(t0$2) && (t1$0 = t0$2.length, t1$0 === 3)) {
      g$0 = t0$2[0];compiled$0 = t0$2[1];srcfile$0 = t0$2[2];
    } else {
      ___match_error($targ$0);
    }[g$0, compiled$0, srcfile$0];return [g$0, compiled$0, srcfile$0];
  } else {
    return ___match_error(m$0$0);
  }
};load$0 = function load(lazy$0) {
  return function (module$0, file$1) {
    var t0$3 = undefined;var t1$1 = undefined;var $targ$2 = undefined;var compiled$1 = undefined;var srcfile$1 = undefined;$targ$2 = getCache$0(file$1, { lazy: lazy$0 });t0$3 = $targ$2;if (Array.isArray(t0$3) && (t1$1 = t0$3.length, t1$1 === 3)) {
      t0$3[0];compiled$1 = t0$3[1];srcfile$1 = t0$3[2];
    } else {
      ___match_error($targ$2);
    }[compiled$1, srcfile$1];return module$0._compile(compiled$1, srcfile$1);
  };
};extensions$0 = [".eg"];install$0 = function install() {
  var m$2 = undefined;var acc$0 = undefined;var temp$0 = undefined;var lazy$1 = undefined;var t0$4 = undefined;var m$1$0 = undefined;m$1$0 = arguments;t0$4 = m$1$0.length;if (t0$4 >= 0 && t0$4 <= 1) {
    if (0 >= t0$4) {
      lazy$1 = true;
    } else {
      lazy$1 = m$1$0[0];
    }acc$0 = [];temp$0 = null;m$2 = null;$2: for (var _iterator = extensions$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      m$2 = _step.value;
      var $targ$3 = undefined;var ext$0 = undefined;ext$0 = m$2;$targ$3 = load$0(lazy$1);require.extensions[ext$0] = $targ$3;temp$0 = [];acc$0.push(temp$0);
    }return acc$0;
  } else {
    return ___match_error(m$1$0);
  }
};$targ$4 = getCache$0;exports.getCache = $targ$4;[];$targ$5 = install$0;exports.install = $targ$5;[];
//# sourceMappingURL=register.js.map

