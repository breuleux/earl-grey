"use strict";
require("earlgrey-runtime");
var hoist$8111;
var hoistable$8112;
var not_hoistable$8113;
var hoist_helper$8114;
(hoist$8111 = (function(expr$8119) {
  var t0$8126;
  var t1$8127;
  var b$8123;
  var inner$8124;
  (t0$8126 = hoist_helper$8114(expr$8119));
  if (((t0$8126 instanceof Array) && (((t1$8127 = t0$8126.length)), (t1$8127 === 2)))) {
    (b$8123 = t0$8126[0]);
    (inner$8124 = t0$8126[1]);
  } else {
    ___match_error(hoist_helper$8114(expr$8119), "/home/olivier/git/earl-grey/src/opt.eg", 50, 68);
  }
  return ["scope", inner$8124, b$8123];
}));
(hoistable$8112 = ["send", "array", "object", "multi", "if", "assign", "js_break", "js_continue", "js_return", "js_delete", "js_throw", "js_try", "js_new", "js_yield"]);
(not_hoistable$8113 = ["void", "js_while", "js_for", "js_for_in", "js_for_of", "js_label"]);
(hoist_helper$8114 = (function($8150$8153) {
  var t0$8170;
  var x$8206;
  var x$8212;
  var bridge$8158$8198;
  var x$8218;
  var t0$8239;
  var t1$8240;
  var newbody$8236;
  var inner$8237;
  var t0$8265;
  var t1$8266;
  var newbody$8262;
  var inner$8263;
  var $index$8320;
  var $length$8314;
  var temp$8308;
  var acc$8302;
  var accum$8290;
  var newargs$8291;
  var $index$8396;
  var $length$8390;
  var temp$8384;
  var acc$8378;
  var newargs$8370;
  var other$8463;
  var type$8362;
  var args$8363;
  var type$8281;
  var args$8282;
  var vars$8255;
  var body$8256;
  var generator$8257;
  var vars$8225;
  var body$8226;
  var $8164$8187;
  var $8165$8188;
  var $8166$8189;
  var bridge$8157$8184;
  var t0$8185;
  var $8155$8179;
  var ph$8167;
  var expr$8168;
  (t0$8170 = $8150$8153);
  (expr$8168 = t0$8170);
  (ph$8167 = t0$8170);
  ($8155$8179 = ph$8167);
  (bridge$8157$8184 = $8155$8179);
  if (((((bridge$8158$8198 = bridge$8157$8184)), ((((x$8206 = bridge$8158$8198)), ((x$8206 instanceof Array) && (x$8206[0] === "symbol"))) || (((x$8212 = bridge$8158$8198)), ((x$8212 instanceof Array) && (x$8212[0] === "value"))))) || (((x$8218 = bridge$8157$8184)), ((x$8218 instanceof Array) && (x$8218[0] === "variable"))))) {
    return [expr$8168, []];
  } else {
    if ((($8164$8187 = ($8155$8179 instanceof Array)) && (((t0$8185 = $8155$8179.length)), ((t0$8185 === 3) && ($8155$8179[0] === "scope"))))) {
      (vars$8225 = $8155$8179[1]);
      (body$8226 = $8155$8179[2]);
      (t0$8239 = hoist_helper$8114(body$8226));
      if (((t0$8239 instanceof Array) && (((t1$8240 = t0$8239.length)), (t1$8240 === 2)))) {
        (newbody$8236 = t0$8239[0]);
        (inner$8237 = t0$8239[1]);
      } else {
        ___match_error(hoist_helper$8114(body$8226), "/home/olivier/git/earl-grey/src/opt.eg", 1488, 1506);
      }
      return [newbody$8236, inner$8237.concat(vars$8225)];
    } else {
      if (($8164$8187 && ((t0$8185 === 4) && ($8155$8179[0] === "lambda")))) {
        (vars$8255 = $8155$8179[1]);
        (body$8256 = $8155$8179[2]);
        (generator$8257 = $8155$8179[3]);
        (t0$8265 = hoist_helper$8114(body$8256));
        if (((t0$8265 instanceof Array) && (((t1$8266 = t0$8265.length)), (t1$8266 === 2)))) {
          (newbody$8262 = t0$8265[0]);
          (inner$8263 = t0$8265[1]);
        } else {
          ___match_error(hoist_helper$8114(body$8256), "/home/olivier/git/earl-grey/src/opt.eg", 1702, 1720);
        }
        return [["lambda", vars$8255, ["scope", inner$8263, newbody$8262], generator$8257], []];
      } else {
        if (($8164$8187 && (($8166$8189 = (t0$8185 >= 1)) && ((type$8281 = $8155$8179[0]), ((args$8282 = Array.prototype.slice.call($8155$8179, 1)), (hoistable$8112.indexOf(type$8281) !== -1)))))) {
          (accum$8290 = []);
          (newargs$8291 = (((acc$8302 = [])), (((temp$8308 = args$8282)), ((($length$8314 = temp$8308.length)), ((($index$8320 = 0)), (function() {
            $8297: for (; ($index$8320 < $length$8314); ($index$8320++)) {
              var t0$8345;
              var t1$8346;
              var b$8342;
              var inner$8343;
              var arg$8337;
              var m$8329;
              (m$8329 = temp$8308[$index$8320]);
              (arg$8337 = m$8329);
              acc$8302.push(((((t0$8345 = hoist_helper$8114(arg$8337))), (((t0$8345 instanceof Array) && (((t1$8346 = t0$8345.length)), (t1$8346 === 2))) ? ((b$8342 = t0$8345[0]), (inner$8343 = t0$8345[1])) : ___match_error(hoist_helper$8114(arg$8337), "/home/olivier/git/earl-grey/src/opt.eg", 2074, 2091))), (accum$8290 = accum$8290.concat(inner$8343)), b$8342));
            }
          })()))), acc$8302));
          return [[type$8281].concat(newargs$8291), accum$8290];
        } else {
          if (($8166$8189 && ((type$8362 = $8155$8179[0]), ((args$8363 = Array.prototype.slice.call($8155$8179, 1)), (not_hoistable$8113.indexOf(type$8362) !== -1))))) {
            (newargs$8370 = (((acc$8378 = [])), (((temp$8384 = args$8363)), ((($length$8390 = temp$8384.length)), ((($index$8396 = 0)), (function() {
              $8373: for (; ($index$8396 < $length$8390); ($index$8396++)) {
                var t0$8424;
                var t1$8425;
                var other$8458;
                var t0$8445;
                var $8418$8440;
                var b$8421;
                var inner$8422;
                var arg$8413;
                var m$8405;
                (m$8405 = temp$8384[$index$8396]);
                (arg$8413 = m$8405);
                acc$8378.push(((((t0$8424 = hoist_helper$8114(arg$8413))), (((t0$8424 instanceof Array) && (((t1$8425 = t0$8424.length)), (t1$8425 === 2))) ? ((b$8421 = t0$8424[0]), (inner$8422 = t0$8424[1])) : ___match_error(hoist_helper$8114(arg$8413), "/home/olivier/git/earl-grey/src/opt.eg", 2417, 2434))), ((($8418$8440 = inner$8422)), ((($8418$8440 instanceof Array) && (((t0$8445 = $8418$8440.length)), (t0$8445 === 0))) ? b$8421 : ((other$8458 = $8418$8440), ["scope", inner$8422, b$8421])))));
              }
            })()))), acc$8378));
            return [[type$8362].concat(newargs$8370), []];
          } else {
            (other$8463 = $8155$8179);
            throw ErrorFactory(["syntax", "illegal"]).create("Illegal node -- this should not happen.", ({"node": other$8463}));
          }
        }
      }
    }
  }
}));
(exports["hoist"] = hoist$8111);
//# sourceURL=<compile-source>
