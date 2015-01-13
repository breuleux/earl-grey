"use strict";
require("earlgrey-runtime");
var $15923 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var pr_terminus$15110;
var pr$15111;
var __lt____gt__$15112;
var repr$15113;
var escape_html$15114;
var quotify$15115;
var HTML$15116;
(pr_terminus$15110 = (function(node$15121) {
  var r$15127;
  var pre$15128;
  var post$15129;
  (r$15127 = HTML$15116(node$15121, "span"));
  (pre$15128 = (String.fromCharCode(27) + "[?0;7y+h <div class=\"ug\">"));
  (post$15129 = ("</div>" + String.fromCharCode(7)));
  return console.log(((pre$15128 + r$15127) + post$15129));
}));
(pr$15111 = (function($15143$15146, r$15147) {
  var x$15171;
  var n$15166;
  var $15149$15158;
  var ph$15152;
  (ph$15152 = $15143$15146);
  ($15149$15158 = ph$15152);
  if (getChecker(Node)($15149$15158)) {
    (n$15166 = $15149$15158);
    return pr_terminus$15110(n$15166);
  } else {
    (x$15171 = $15149$15158);
    return pr_terminus$15110((r$15147 || repr$15113)(x$15171));
  }
}));
(__lt____gt__$15112 = (function($15177$15180, x$15181) {
  if (($15177$15180 === null)) {} else {
    ___match_error($15177$15180);
  }
  return pr$15111(x$15181);
}));
(repr$15113 = (function() {
  var $index$15300;
  var $length$15294;
  var temp$15288;
  var acc$15282;
  var $index$15351;
  var $length$15345;
  var temp$15339;
  var acc$15333;
  var other$15388;
  var entries$15270;
  var $15205$15243;
  var t0$15241;
  var x$15219;
  var recur$15220;
  var $15194$15221;
  var t0$15213;
  var t1$15214;
  var t2$15215;
  var $15192$15208;
  ($15192$15208 = arguments);
  (t0$15213 = $15192$15208.length);
  if ((((t0$15213 >= 1) && (t0$15213 <= 2)) && (((t1$15214 = $15192$15208[0])), ((x$15219 = t1$15214), (($15194$15221 = t1$15214), (((t2$15215 = ((1 >= t0$15213) ? repr$15113 : $15192$15208[1]))), getChecker(Function)(t2$15215))))))) {
    (recur$15220 = t2$15215);
    if (($15194$15221 === true)) {
      return Node([".special", ".true"], ({}), "true");
    } else {
      if (($15194$15221 === false)) {
        return Node([".special", ".false"], ({}), "false");
      } else {
        if (($15194$15221 === null)) {
          return Node([".special", ".nil"], ({}), "null");
        } else {
          if (($15194$15221 === (void 0))) {
            return Node([".special", ".nil"], ({}), "undefined");
          } else {
            if ((typeof($15194$15221) === "number")) {
              return Node([".num"], ({}), String(x$15219));
            } else {
              if ((typeof($15194$15221) === "string")) {
                return Node([".str"], ({}), x$15219);
              } else {
                (t0$15241 = $15194$15221);
                if (getChecker(Array)(t0$15241)) {
                  (entries$15270 = t0$15241);
                  return Node([".sequence"], ({}), (((acc$15282 = [])), (((temp$15288 = entries$15270)), ((($length$15294 = temp$15288.length)), ((($index$15300 = 0)), (function() {
                    $15277: for (; ($index$15300 < $length$15294); ($index$15300++)) {
                      var x$15317;
                      var m$15309;
                      (m$15309 = temp$15288[$index$15300]);
                      (x$15317 = m$15309);
                      acc$15282.push(recur$15220(x$15317, repr$15113));
                    }
                  })()))), acc$15282));
                } else {
                  $15194$15221;
                  if (x$15219["::repr"]) {
                    return x$15219["::repr"](recur$15220);
                  } else {
                    if ((Object.getPrototypeOf(x$15219) === Object.prototype)) {
                      return Node(["table", ".object"], ({}), (((acc$15333 = [])), (((temp$15339 = items(x$15219))), ((($length$15345 = temp$15339.length)), ((($index$15351 = 0)), (function() {
                        $15328: for (; ($index$15351 < $length$15345); ($index$15351++)) {
                          var k$15370;
                          var v$15371;
                          var t0$15365;
                          var t1$15366;
                          var m$15360;
                          (m$15360 = temp$15339[$index$15351]);
                          (t0$15365 = m$15360);
                          if (((t0$15365 instanceof Array) && (((t1$15366 = t0$15365.length)), (t1$15366 === 2)))) {
                            (k$15370 = t0$15365[0]);
                            (v$15371 = t0$15365[1]);
                            acc$15333.push(Node(["tr"], ({}), [Node(["th"], ({}), recur$15220(k$15370, repr$15113)), Node(["td"], ({}), recur$15220(v$15371, repr$15113))]));
                          } else {
                            ___match_error(m$15360, "/home/olivier/git/earl-grey/src/pp.eg", 924, 1244);
                          }
                        }
                      })()))), acc$15333));
                    } else {
                      (other$15388 = $15194$15221);
                      return Node([".unknown"], ({}), other$15388.toString());
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  } else {
    ___match_error($15192$15208);
  }
}));
(escape_html$15114 = (function($15396$15399) {
  var t0$15403;
  var repl$15413;
  var s$15401;
  (t0$15403 = [true, String($15396$15399)]);
  if (t0$15403[0]) {
    (s$15401 = t0$15403[1]);
  } else {
    ___match_error($15396$15399);
  }
  (repl$15413 = ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  }));
  return s$15401.replace(RegExp("[&<>]", "g"), (function(x$15419) {
    return $15923(repl$15413, x$15419);
  }));
}));
(quotify$15115 = (function($15425$15428) {
  var t0$15432;
  var s$15430;
  (t0$15432 = [true, String($15425$15428)]);
  if (t0$15432[0]) {
    (s$15430 = t0$15432[1]);
  } else {
    ___match_error($15425$15428);
  }
  return s$15430.replace(RegExp("[\\\"\\\\]", "g"), (function(x$15442) {
    return ("\\" + x$15442);
  }));
}));
(HTML$15116 = (function($15448$15451, default_tag$15452) {
  var $index$15505;
  var $length$15499;
  var temp$15493;
  var acc$15487;
  var $index$15589;
  var $length$15583;
  var temp$15577;
  var $index$15649;
  var $length$15643;
  var temp$15637;
  var $index$15720;
  var $length$15714;
  var temp$15708;
  var acc$15702;
  var $index$15800;
  var $length$15794;
  var temp$15788;
  var acc$15782;
  var $index$15858;
  var $length$15852;
  var temp$15846;
  var acc$15840;
  var other$15833;
  var $15761$15766;
  var x$15897;
  var other$15893;
  var $15542$15881;
  var tag$15545;
  var classes$15546;
  var id$15547;
  var kv$15548;
  var sub$15549;
  var accum$15550;
  var children2$15551;
  var other$15903;
  var tags$15527;
  var props$15528;
  var children$15529;
  var children$15478;
  var s$15473;
  var $15454$15465;
  var ph$15459;
  (ph$15459 = $15448$15451);
  ($15454$15465 = ph$15459);
  if ((typeof($15454$15465) === "string")) {
    (s$15473 = $15454$15465);
    return escape_html$15114(s$15473);
  } else {
    if (getChecker(Array)($15454$15465)) {
      (children$15478 = $15454$15465);
      return (((acc$15487 = [])), (((temp$15493 = children$15478)), ((($length$15499 = temp$15493.length)), ((($index$15505 = 0)), (function() {
        $15482: for (; ($index$15505 < $length$15499); ($index$15505++)) {
          var child$15522;
          var m$15514;
          (m$15514 = temp$15493[$index$15505]);
          (child$15522 = m$15514);
          acc$15487.push(HTML$15116(child$15522, default_tag$15452));
        }
      })()))), acc$15487).join("");
    } else {
      if ((getChecker(Node)($15454$15465) && (___hasprop($15454$15465, "tags") && ((tags$15527 = $15454$15465.tags), (___hasprop($15454$15465, "props") && ((props$15528 = $15454$15465.props), ___hasprop($15454$15465, "children"))))))) {
        (children$15529 = $15454$15465.children);
        (tag$15545 = (default_tag$15452 || "span"));
        (classes$15546 = []);
        (id$15547 = null);
        (kv$15548 = []);
        (sub$15549 = []);
        (temp$15577 = tags$15527);
        ($length$15583 = temp$15577.length);
        ($index$15589 = 0);
        $15552: for (; ($index$15589 < $length$15583); ($index$15589++)) {
          var other$15628;
          var cls$15609;
          var t0$15603;
          var t1$15604;
          var t2$15605;
          var m$15598;
          (m$15598 = temp$15577[$index$15589]);
          (t0$15603 = getProjector(RegExp("^\\.(.*)", ""))(m$15598));
          if ((t0$15603[0] && (((t1$15604 = t0$15603[1])), (((t2$15605 = t1$15604.length)), (t2$15605 === 2))))) {
            t1$15604[0];
            (cls$15609 = t1$15604[1]);
            classes$15546.push(cls$15609);
          } else {
            (other$15628 = m$15598);
            (tag$15545 = other$15628);
          }
        }
        (temp$15637 = items(props$15528));
        ($length$15643 = temp$15637.length);
        ($index$15649 = 0);
        $15556: for (; ($index$15649 < $length$15643); ($index$15649++)) {
          var k$15668;
          var v$15669;
          var t0$15663;
          var t1$15664;
          var m$15658;
          (m$15658 = temp$15637[$index$15649]);
          (t0$15663 = m$15658);
          if (((t0$15663 instanceof Array) && (((t1$15664 = t0$15663.length)), (t1$15664 === 2)))) {
            (k$15668 = t0$15663[0]);
            (v$15669 = t0$15663[1]);
            kv$15548.push([k$15668, v$15669]);
          } else {
            ___match_error(m$15658, "/home/olivier/git/earl-grey/src/pp.eg", 1953, 2017);
          }
        }
        (accum$15550 = ((tag$15545 === "raw") ? [] : ["<", tag$15545]));
        if (id$15547) {
          (accum$15550 = accum$15550.concat(" id=\"", id$15547, "\""));
        }
        if (classes$15546.length) {
          (accum$15550 = accum$15550.concat(" class=\"", quotify$15115(classes$15546.join(" ")), "\""));
        }
        if (kv$15548) {
          (acc$15702 = []);
          (temp$15708 = kv$15548);
          ($length$15714 = temp$15708.length);
          ($index$15720 = 0);
          $15697: for (; ($index$15720 < $length$15714); ($index$15720++)) {
            var k$15739;
            var v$15740;
            var t0$15734;
            var t1$15735;
            var m$15729;
            (m$15729 = temp$15708[$index$15720]);
            (t0$15734 = m$15729);
            if (((t0$15734 instanceof Array) && (((t1$15735 = t0$15734.length)), (t1$15735 === 2)))) {
              (k$15739 = t0$15734[0]);
              (v$15740 = t0$15734[1]);
              acc$15702.push(((accum$15550 = accum$15550.concat(((v$15740 !== null) ? [" ", k$15739, "=\"", quotify$15115(v$15740), "\""] : [" ", k$15739])))));
            } else {
              ___match_error(m$15729, "/home/olivier/git/earl-grey/src/pp.eg", 2289, 2479);
            }
          }
          acc$15702;
        }
        (children2$15551 = ((($15761$15766 = tag$15545)), (($15761$15766 === "raw") ? (((acc$15782 = [])), (((temp$15788 = children$15529)), ((($length$15794 = temp$15788.length)), ((($index$15800 = 0)), (function() {
          $15776: for (; ($index$15800 < $length$15794); ($index$15800++)) {
            var c$15828;
            var s$15818;
            var t0$15814;
            var m$15809;
            (m$15809 = temp$15788[$index$15800]);
            (t0$15814 = m$15809);
            if ((typeof(t0$15814) === "string")) {
              (s$15818 = t0$15814);
              acc$15782.push(s$15818);
            } else {
              (c$15828 = m$15809);
              acc$15782.push(HTML$15116(c$15828, default_tag$15452));
            }
          }
        })()))), acc$15782) : ((other$15833 = $15761$15766), (((acc$15840 = [])), (((temp$15846 = children$15529)), ((($length$15852 = temp$15846.length)), ((($index$15858 = 0)), (function() {
          $15835: for (; ($index$15858 < $length$15852); ($index$15858++)) {
            var c$15875;
            var m$15867;
            (m$15867 = temp$15846[$index$15858]);
            (c$15875 = m$15867);
            acc$15840.push(HTML$15116(c$15875, default_tag$15452));
          }
        })()))), acc$15840)))));
        ($15542$15881 = tag$15545);
        if (($15542$15881 === "raw")) {
          return accum$15550.concat(children2$15551).join("");
        } else {
          (other$15893 = $15542$15881);
          (x$15897 = [">"].concat(children2$15551).concat(["</", tag$15545, ">"]));
          return accum$15550.concat(x$15897).join("");
        }
      } else {
        (other$15903 = $15454$15465);
        return HTML$15116([true, String(other$15903)][1], default_tag$15452);
      }
    }
  }
}));
(exports["pr_terminus"] = pr_terminus$15110);
(exports["pr"] = pr$15111);
(exports["<>"] = __lt____gt__$15112);
(exports["repr"] = repr$15113);
//# sourceURL=<compile-source>
