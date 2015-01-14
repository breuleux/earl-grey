"use strict";
require("earlgrey-runtime");
var $targ$50;
var $targ$51;
var $targ$52;
var $targ$53;
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
pr$0 = (function(temp$0$0, r$1) {
  var x$0;
  var n$0;
  var m$0$0;
  var ph$0;
  ph$0 = temp$0$0;
  m$0$0 = ph$0;
  if (getChecker(Node)(m$0$0)) {
    n$0 = m$0$0;
    return pr_terminus$0(n$0);
  } else {
    x$0 = m$0$0;
    return pr_terminus$0((r$1 || repr$0)(x$0));
  }
});
__lt____gt__$0 = (function(temp$1$0, x$1) {
  if ((temp$1$0 === null)) {} else {
    ___match_error(temp$1$0);
  }
  return pr$0(x$1);
});
repr$0 = (function() {
  var t2$0;
  var t1$0;
  var m$2;
  var acc$0;
  var m$3;
  var acc$1;
  var other$0;
  var t0$1;
  var entries$0;
  var $$19844$0;
  var t0$0;
  var x$2;
  var recur$0;
  var ph$1$0;
  var m$1$0;
  m$1$0 = arguments;
  t0$0 = m$1$0.length;
  if ((((t0$0 >= 1) && (t0$0 <= 2)) && ((t1$0 = m$1$0[0]), (x$2 = t1$0), (ph$1$0 = t1$0), (t2$0 = ((1 >= t0$0) ? repr$0 : m$1$0[1])), getChecker(Function)(t2$0)))) {
    recur$0 = t2$0;
    if ((ph$1$0 === true)) {
      return Node([".special", ".true"], ({}), "true");
    } else {
      if ((ph$1$0 === false)) {
        return Node([".special", ".false"], ({}), "false");
      } else {
        if ((ph$1$0 === null)) {
          return Node([".special", ".nil"], ({}), "null");
        } else {
          if ((ph$1$0 === (void 0))) {
            return Node([".special", ".nil"], ({}), "undefined");
          } else {
            if ((typeof(ph$1$0) === "number")) {
              return Node([".num"], ({}), String(x$2));
            } else {
              if ((typeof(ph$1$0) === "string")) {
                return Node([".str"], ({}), x$2);
              } else {
                t0$1 = ph$1$0;
                if (getChecker(Array)(t0$1)) {
                  entries$0 = t0$1;
                  return Node([".sequence"], ({}), ((acc$0 = []), (m$2 = null), (function() {
                    $0: for (var $__0 = entries$0[$traceurRuntime.toProperty(Symbol.iterator)](),
                        $__1; !($__1 = $__0.next()).done; ) {
                      m$2 = $__1.value;
                      {
                        var x$3;
                        x$3 = m$2;
                        acc$0.push(recur$0(x$3, repr$0));
                      }
                    }
                  })(), acc$0));
                } else {
                  ph$1$0;
                  if (x$2["::repr"]) {
                    return x$2["::repr"](recur$0);
                  } else {
                    if ((Object.getPrototypeOf(x$2) === Object.prototype)) {
                      return Node(["table", ".object"], ({}), ((acc$1 = []), (m$3 = null), (function() {
                        $1: for (var $__0 = items(x$2)[$traceurRuntime.toProperty(Symbol.iterator)](),
                            $__1; !($__1 = $__0.next()).done; ) {
                          m$3 = $__1.value;
                          {
                            var t1$1;
                            var t0$2;
                            var k$0;
                            var v$0;
                            t0$2 = m$3;
                            if (((t0$2 instanceof Array) && ((t1$1 = t0$2.length), (t1$1 === 2)))) {
                              k$0 = t0$2[0];
                              v$0 = t0$2[1];
                              acc$1.push(Node(["tr"], ({}), [Node(["th"], ({}), recur$0(k$0, repr$0)), Node(["td"], ({}), recur$0(v$0, repr$0))]));
                            } else {
                              ___match_error(m$3, "/home/olivier/git/earl-grey/src/pp.eg", 924, 1244);
                            }
                          }
                        }
                      })(), acc$1));
                    } else {
                      other$0 = ph$1$0;
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
    return ___match_error(m$1$0);
  }
});
escape_html$0 = (function(temp$2$0) {
  var t0$3;
  var repl$0;
  var s$0;
  t0$3 = [true, String(temp$2$0)];
  if (t0$3[0]) {
    s$0 = t0$3[1];
  } else {
    ___match_error(temp$2$0);
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
quotify$0 = (function(temp$3$0) {
  var t0$4;
  var s$1;
  t0$4 = [true, String(temp$3$0)];
  if (t0$4[0]) {
    s$1 = t0$4[1];
  } else {
    ___match_error(temp$3$0);
  }
  return s$1.replace(RegExp("[\\\"\\\\]", "g"), (function(x$5) {
    return ("\\" + x$5);
  }));
});
HTML$0 = (function(temp$4$0, default_tag$0) {
  var m$5;
  var acc$2;
  var m$7;
  var m$8;
  var $targ$38;
  var $targ$39;
  var m$9;
  var acc$3;
  var m$11;
  var acc$4;
  var m$12;
  var acc$5;
  var other$2;
  var m$10$0;
  var x$6;
  var other$3;
  var m$6$0;
  var $targ$25;
  var tag$0;
  var classes$0;
  var id$0;
  var kv$0;
  var sub$0;
  var $targ$30;
  var accum$0;
  var children2$0;
  var other$4;
  var tags$0;
  var props$0;
  var children$1;
  var children$0;
  var s$2;
  var m$4$0;
  var ph$2;
  ph$2 = temp$4$0;
  m$4$0 = ph$2;
  if ((typeof(m$4$0) === "string")) {
    s$2 = m$4$0;
    return escape_html$0(s$2);
  } else {
    if (getChecker(Array)(m$4$0)) {
      children$0 = m$4$0;
      return ((acc$2 = []), (m$5 = null), (function() {
        $2: for (var $__0 = children$0[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$5 = $__1.value;
          {
            var child$0;
            child$0 = m$5;
            acc$2.push(HTML$0(child$0, default_tag$0));
          }
        }
      })(), acc$2).join("");
    } else {
      if ((getChecker(Node)(m$4$0) && (___hasprop(m$4$0, "tags") && ((tags$0 = m$4$0.tags), (___hasprop(m$4$0, "props") && ((props$0 = m$4$0.props), ___hasprop(m$4$0, "children"))))))) {
        children$1 = m$4$0.children;
        $targ$25 = (default_tag$0 || "span");
        tag$0 = $targ$25;
        classes$0 = [];
        id$0 = null;
        kv$0 = [];
        sub$0 = [];
        m$7 = null;
        $3: for (var $__0 = tags$0[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__1; !($__1 = $__0.next()).done; ) {
          m$7 = $__1.value;
          {
            var t2$1;
            var t1$2;
            var $targ$35;
            var t0$5;
            var cls$0;
            t0$5 = getProjector(RegExp("^\\.(.*)", ""))(m$7);
            if ((t0$5[0] && ((t1$2 = t0$5[1]), (t2$1 = t1$2.length), (t2$1 === 2)))) {
              t1$2[0];
              cls$0 = t1$2[1];
              classes$0.push(cls$0);
            } else {
              $targ$35 = m$7;
              tag$0 = $targ$35;
            }
          }
        }
        m$8 = null;
        $4: for (var $__2 = items(props$0)[$traceurRuntime.toProperty(Symbol.iterator)](),
            $__3; !($__3 = $__2.next()).done; ) {
          m$8 = $__3.value;
          {
            var t1$3;
            var t0$6;
            var k$1;
            var v$1;
            t0$6 = m$8;
            if (((t0$6 instanceof Array) && ((t1$3 = t0$6.length), (t1$3 === 2)))) {
              k$1 = t0$6[0];
              v$1 = t0$6[1];
              kv$0.push([k$1, v$1]);
            } else {
              ___match_error(m$8, "/home/olivier/git/earl-grey/src/pp.eg", 1953, 2017);
            }
          }
        }
        $targ$30 = ((tag$0 === "raw") ? [] : ["<", tag$0]);
        accum$0 = $targ$30;
        if (id$0) {
          $targ$38 = accum$0.concat(" id=\"", id$0, "\"");
          accum$0 = $targ$38;
        }
        if (classes$0.length) {
          $targ$39 = accum$0.concat(" class=\"", quotify$0(classes$0.join(" ")), "\"");
          accum$0 = $targ$39;
        }
        if (kv$0) {
          acc$3 = [];
          m$9 = null;
          $5: for (var $__4 = kv$0[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__5; !($__5 = $__4.next()).done; ) {
            m$9 = $__5.value;
            {
              var t1$4;
              var $targ$43;
              var t0$7;
              var k$2;
              var v$2;
              t0$7 = m$9;
              if (((t0$7 instanceof Array) && ((t1$4 = t0$7.length), (t1$4 === 2)))) {
                k$2 = t0$7[0];
                v$2 = t0$7[1];
                acc$3.push((($targ$43 = accum$0.concat(((v$2 !== null) ? [" ", k$2, "=\"", quotify$0(v$2), "\""] : [" ", k$2]))), (accum$0 = $targ$43)));
              } else {
                ___match_error(m$9, "/home/olivier/git/earl-grey/src/pp.eg", 2289, 2479);
              }
            }
          }
          acc$3;
        }
        children2$0 = ((m$10$0 = tag$0), ((m$10$0 === "raw") ? ((acc$4 = []), (m$11 = null), (function() {
          $6: for (var $__6 = children$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__7; !($__7 = $__6.next()).done; ) {
            m$11 = $__7.value;
            {
              var c$0;
              var t0$8;
              var s$3;
              t0$8 = m$11;
              if ((typeof(t0$8) === "string")) {
                s$3 = t0$8;
                acc$4.push(s$3);
              } else {
                c$0 = m$11;
                acc$4.push(HTML$0(c$0, default_tag$0));
              }
            }
          }
        })(), acc$4) : ((other$2 = m$10$0), (acc$5 = []), (m$12 = null), (function() {
          $7: for (var $__6 = children$1[$traceurRuntime.toProperty(Symbol.iterator)](),
              $__7; !($__7 = $__6.next()).done; ) {
            m$12 = $__7.value;
            {
              var c$1;
              c$1 = m$12;
              acc$5.push(HTML$0(c$1, default_tag$0));
            }
          }
        })(), acc$5)));
        m$6$0 = tag$0;
        if ((m$6$0 === "raw")) {
          return accum$0.concat(children2$0).join("");
        } else {
          other$3 = m$6$0;
          x$6 = [">"].concat(children2$0).concat(["</", tag$0, ">"]);
          return accum$0.concat(x$6).join("");
        }
      } else {
        other$4 = m$4$0;
        return HTML$0([true, String(other$4)][1], default_tag$0);
      }
    }
  }
});
$targ$50 = pr_terminus$0;
(exports["pr_terminus"] = $targ$50);
$targ$51 = pr$0;
(exports["pr"] = $targ$51);
$targ$52 = __lt____gt__$0;
(exports["<>"] = $targ$52);
$targ$53 = repr$0;
(exports["repr"] = $targ$53);
//# sourceURL=<compile-source>
