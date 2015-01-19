"use strict";
require("earlgrey-runtime");
var $targ$63;
var $targ$64;
var $targ$65;
var $targ$66;
var pr_terminus$0;
var pr$0;
var __lt____gt__$0;
var repr$0;
var escape_html$0;
var quotify$0;
var HTML$0;
pr_terminus$0 = (function(node$0) {
  var r$0;
  var pre$0;
  var post$0;
  r$0 = HTML$0(node$0, "span");
  pre$0 = (String.fromCharCode(27) + "[?0;7y+h <div class=\"ug\">");
  post$0 = ("</div>" + String.fromCharCode(7));
  return console.log(((pre$0 + r$0) + post$0));
});
pr$0 = (function(ph$0$0, r$1) {
  var x$0;
  var t0$0;
  var n$0;
  t0$0 = ph$0$0;
  if (getChecker(Node)(t0$0)) {
    n$0 = t0$0;
    return pr_terminus$0(n$0);
  } else {
    x$0 = ph$0$0;
    return pr_terminus$0((r$1 || repr$0)(x$0));
  }
});
__lt____gt__$0 = (function(temp$0$0, x$1) {
  if ((temp$0$0 === null)) {} else {
    ___match_error(temp$0$0);
  }
  return pr$0(x$1);
});
repr$0 = (function() {
  var t2$0;
  var t1$0;
  var m$1;
  var acc$0;
  var $targ$17;
  var temp$1;
  var m$2;
  var acc$1;
  var $targ$20;
  var temp$2;
  var other$0;
  var t0$2;
  var entries$0;
  var $$21603$0;
  var t0$1;
  var x$2;
  var ph$2$0;
  var recur$0;
  var m$0$0;
  m$0$0 = arguments;
  t0$1 = m$0$0.length;
  if ((((t0$1 >= 1) && (t0$1 <= 2)) && ((t1$0 = m$0$0[0]), (x$2 = t1$0), (ph$2$0 = t1$0), (t2$0 = ((1 >= t0$1) ? repr$0 : m$0$0[1])), getChecker(Function)(t2$0)))) {
    recur$0 = t2$0;
    if ((ph$2$0 === true)) {
      return Node([".special", ".true"], ({}), "true");
    } else {
      if ((ph$2$0 === false)) {
        return Node([".special", ".false"], ({}), "false");
      } else {
        if ((ph$2$0 === null)) {
          return Node([".special", ".nil"], ({}), "null");
        } else {
          if ((ph$2$0 === (void 0))) {
            return Node([".special", ".nil"], ({}), "undefined");
          } else {
            if ((typeof(ph$2$0) === "number")) {
              return Node([".num"], ({}), String(x$2));
            } else {
              if ((typeof(ph$2$0) === "string")) {
                return Node([".str"], ({}), x$2);
              } else {
                t0$2 = ph$2$0;
                if (getChecker(Array)(t0$2)) {
                  entries$0 = t0$2;
                  return Node([".sequence"], ({}), ((acc$0 = []), ($targ$17 = null), (temp$1 = $targ$17), (m$1 = null), (function() {
                    $0: for (var $__0 = entries$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                        $__1; !($__1 = $__0.next()).done; ) {
                      m$1 = $__1.value;
                      {
                        var $targ$18;
                        var x$3;
                        x$3 = m$1;
                        $targ$18 = recur$0(x$3, repr$0);
                        temp$1 = $targ$18;
                        acc$0.push(temp$1);
                      }
                    }
                  })(), acc$0));
                } else {
                  if (x$2["::repr"]) {
                    return x$2["::repr"](recur$0);
                  } else {
                    if ((Object.getPrototypeOf(x$2) === Object.prototype)) {
                      return Node(["table", ".object"], ({}), ((acc$1 = []), ($targ$20 = null), (temp$2 = $targ$20), (m$2 = null), (function() {
                        $1: for (var $__0 = items(x$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
                            $__1; !($__1 = $__0.next()).done; ) {
                          m$2 = $__1.value;
                          {
                            var t1$1;
                            var $targ$23;
                            var t0$3;
                            var k$0;
                            var v$0;
                            t0$3 = m$2;
                            if (((t0$3 instanceof Array) && ((t1$1 = t0$3.length), (t1$1 === 2)))) {
                              k$0 = t0$3[0];
                              v$0 = t0$3[1];
                              $targ$23 = Node(["tr"], ({}), [Node(["th"], ({}), recur$0(k$0, repr$0)), Node(["td"], ({}), recur$0(v$0, repr$0))]);
                              temp$2 = $targ$23;
                              acc$1.push(temp$2);
                            } else {
                              ___match_error(m$2, "/home/olivier/git/earl-grey/src/pp.eg", 924, 1244);
                            }
                          }
                        }
                      })(), acc$1));
                    } else {
                      other$0 = ph$2$0;
                      return Node([".unknown"], ({}), other$0.toString());
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
    return ___match_error(m$0$0);
  }
});
escape_html$0 = (function(temp$3$0) {
  var t0$4;
  var repl$0;
  var s$0;
  t0$4 = [true, String(temp$3$0)];
  if (t0$4[0]) {
    s$0 = t0$4[1];
  } else {
    ___match_error(temp$3$0);
  }
  repl$0 = ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;"
  });
  return s$0.replace(RegExp("[&<>]", "g"), (function(x$4) {
    return send(repl$0, x$4);
  }));
});
quotify$0 = (function(temp$4$0) {
  var t0$5;
  var s$1;
  t0$5 = [true, String(temp$4$0)];
  if (t0$5[0]) {
    s$1 = t0$5[1];
  } else {
    ___match_error(temp$4$0);
  }
  return s$1.replace(RegExp("[\\\"\\\\]", "g"), (function(x$5) {
    return ("\\" + x$5);
  }));
});
HTML$0 = (function(ph$3$0, default_tag$0) {
  var m$3;
  var acc$2;
  var $targ$29;
  var temp$5;
  var m$5;
  var m$6;
  var $targ$44;
  var $targ$45;
  var m$7;
  var acc$3;
  var $targ$47;
  var temp$6;
  var m$9;
  var acc$4;
  var $targ$54;
  var temp$7;
  var m$10;
  var acc$5;
  var $targ$59;
  var temp$8;
  var other$2;
  var m$8$0;
  var x$6;
  var other$3;
  var m$4$0;
  var $targ$31;
  var tag$0;
  var classes$0;
  var id$0;
  var kv$0;
  var sub$0;
  var $targ$36;
  var accum$0;
  var children2$0;
  var other$4;
  var tags$0;
  var props$0;
  var children$1;
  var children$0;
  var t0$6;
  var s$2;
  var $$21774$0;
  t0$6 = ph$3$0;
  if ((typeof(t0$6) === "string")) {
    s$2 = t0$6;
    return escape_html$0(s$2);
  } else {
    if (getChecker(Array)(t0$6)) {
      children$0 = t0$6;
      return ((acc$2 = []), ($targ$29 = null), (temp$5 = $targ$29), (m$3 = null), (function() {
        $2: for (var $__0 = children$0[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$3 = $__1.value;
          {
            var $targ$30;
            var child$0;
            child$0 = m$3;
            $targ$30 = HTML$0(child$0, default_tag$0);
            temp$5 = $targ$30;
            acc$2.push(temp$5);
          }
        }
      })(), acc$2).join("");
    } else {
      if ((getChecker(Node)(t0$6) && (___hasprop(t0$6, "tags") && ((tags$0 = t0$6.tags), (___hasprop(t0$6, "props") && ((props$0 = t0$6.props), ___hasprop(t0$6, "children"))))))) {
        children$1 = t0$6.children;
        $targ$31 = (default_tag$0 || "span");
        tag$0 = $targ$31;
        classes$0 = [];
        id$0 = null;
        kv$0 = [];
        sub$0 = [];
        m$5 = null;
        $3: for (var $__0 = tags$0[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$5 = $__1.value;
          {
            var t2$1;
            var t1$2;
            var $targ$41;
            var t0$7;
            var cls$0;
            t0$7 = getProjector(RegExp("^\\.(.*)", ""))(m$5);
            if ((t0$7[0] && ((t1$2 = t0$7[1]), (t2$1 = t1$2.length), (t2$1 === 2)))) {
              t1$2[0];
              cls$0 = t1$2[1];
              classes$0.push(cls$0);
            } else {
              $targ$41 = m$5;
              tag$0 = $targ$41;
              tag$0;
            }
          }
        }
        m$6 = null;
        $4: for (var $__2 = items(props$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__3; !($__3 = $__2.next()).done; ) {
          m$6 = $__3.value;
          {
            var t1$3;
            var t0$8;
            var k$1;
            var v$1;
            t0$8 = m$6;
            if (((t0$8 instanceof Array) && ((t1$3 = t0$8.length), (t1$3 === 2)))) {
              k$1 = t0$8[0];
              v$1 = t0$8[1];
              kv$0.push([k$1, v$1]);
            } else {
              ___match_error(m$6, "/home/olivier/git/earl-grey/src/pp.eg", 1953, 2017);
            }
          }
        }
        if ((tag$0 === "raw")) {
          $targ$36 = [];
        } else {
          $targ$36 = ["<", tag$0];
        }
        accum$0 = $targ$36;
        if (id$0) {
          $targ$44 = accum$0.concat(" id=\"", id$0, "\"");
          accum$0 = $targ$44;
          accum$0;
        }
        if (classes$0.length) {
          $targ$45 = accum$0.concat(" class=\"", quotify$0(classes$0.join(" ")), "\"");
          accum$0 = $targ$45;
          accum$0;
        }
        if (kv$0) {
          acc$3 = [];
          $targ$47 = null;
          temp$6 = $targ$47;
          m$7 = null;
          $5: for (var $__4 = kv$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__5; !($__5 = $__4.next()).done; ) {
            m$7 = $__5.value;
            {
              var t1$4;
              var $targ$51;
              var $targ$50;
              var t0$9;
              var k$2;
              var v$2;
              t0$9 = m$7;
              if (((t0$9 instanceof Array) && ((t1$4 = t0$9.length), (t1$4 === 2)))) {
                k$2 = t0$9[0];
                v$2 = t0$9[1];
                $targ$51 = accum$0.concat(((v$2 !== null) ? [" ", k$2, "=\"", quotify$0(v$2), "\""] : [" ", k$2]));
                accum$0 = $targ$51;
                $targ$50 = accum$0;
                temp$6 = $targ$50;
                acc$3.push(temp$6);
              } else {
                ___match_error(m$7, "/home/olivier/git/earl-grey/src/pp.eg", 2289, 2479);
              }
            }
          }
          acc$3;
        }
        m$8$0 = tag$0;
        if ((m$8$0 === "raw")) {
          acc$4 = [];
          $targ$54 = null;
          temp$7 = $targ$54;
          m$9 = null;
          $6: for (var $__6 = children$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__7; !($__7 = $__6.next()).done; ) {
            m$9 = $__7.value;
            {
              var $targ$56;
              var $targ$57;
              var c$0;
              var t0$10;
              var s$3;
              t0$10 = m$9;
              if ((typeof(t0$10) === "string")) {
                s$3 = t0$10;
                $targ$56 = s$3;
                temp$7 = $targ$56;
                acc$4.push(temp$7);
              } else {
                c$0 = m$9;
                $targ$57 = HTML$0(c$0, default_tag$0);
                temp$7 = $targ$57;
                acc$4.push(temp$7);
              }
            }
          }
          children2$0 = acc$4;
        } else {
          other$2 = m$8$0;
          acc$5 = [];
          $targ$59 = null;
          temp$8 = $targ$59;
          m$10 = null;
          $7: for (var $__8 = children$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__9; !($__9 = $__8.next()).done; ) {
            m$10 = $__9.value;
            {
              var $targ$60;
              var c$1;
              c$1 = m$10;
              $targ$60 = HTML$0(c$1, default_tag$0);
              temp$8 = $targ$60;
              acc$5.push(temp$8);
            }
          }
          children2$0 = acc$5;
        }
        m$4$0 = tag$0;
        if ((m$4$0 === "raw")) {
          return accum$0.concat(children2$0).join("");
        } else {
          other$3 = m$4$0;
          x$6 = [">"].concat(children2$0).concat(["</", tag$0, ">"]);
          return accum$0.concat(x$6).join("");
        }
      } else {
        other$4 = ph$3$0;
        return HTML$0([true, String(other$4)][1], default_tag$0);
      }
    }
  }
});
$targ$63 = pr_terminus$0;
(exports["pr_terminus"] = $targ$63);
[];
$targ$64 = pr$0;
(exports["pr"] = $targ$64);
[];
$targ$65 = __lt____gt__$0;
(exports["<>"] = $targ$65);
[];
$targ$66 = repr$0;
(exports["repr"] = $targ$66);
[];
//# sourceURL=<compile-source>
