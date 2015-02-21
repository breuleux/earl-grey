
"use strict";require("earlgrey-runtime/5");var $targ$0 = undefined;var $targ$1 = undefined;var $targ$2 = undefined;var $targ$3 = undefined;var pr_terminus$0 = undefined;var pr$0 = undefined;var __lt____gt__$0 = undefined;var repr$0 = undefined;var escape_html$0 = undefined;var quotify$0 = undefined;var HTML$0 = undefined;pr_terminus$0 = function pr_terminus(node$0) {
  var r$0 = undefined;var pre$0 = undefined;var post$0 = undefined;r$0 = HTML$0(node$0, "span");pre$0 = String.fromCharCode(27) + "[?0;7y+h <div class=\"ug\">";post$0 = "</div>" + String.fromCharCode(7);return console.log(pre$0 + r$0 + post$0);
};pr$0 = function pr(ph$0$0, r$1) {
  var x$0 = undefined;var n$0 = undefined;var t0$0 = undefined;t0$0 = ph$0$0;if (getChecker(ENode)(t0$0)) {
    n$0 = t0$0;return pr_terminus$0(n$0);
  } else {
    x$0 = ph$0$0;return pr_terminus$0((r$1 || repr$0)(x$0));
  }
};__lt____gt__$0 = function (temp$0$0, x$1) {
  if (temp$0$0 === null) {} else {
    ___match_error(temp$0$0);
  }return pr$0(x$1);
};repr$0 = function repr() {
  var m$1 = undefined;var acc$0 = undefined;var temp$1 = undefined;var m$2 = undefined;var acc$1 = undefined;var temp$2 = undefined;var other$0 = undefined;var entries$0 = undefined;var $$21646$0 = undefined;var t0$2 = undefined;var x$2 = undefined;var ph$2$0 = undefined;var recur$0 = undefined;var t0$1 = undefined;var t1$0 = undefined;var t2$0 = undefined;var m$0$0 = undefined;m$0$0 = arguments;t0$1 = m$0$0.length;if (t0$1 >= 1 && t0$1 <= 2 && (t1$0 = m$0$0[0], x$2 = t1$0, ph$2$0 = t1$0, t2$0 = 1 >= t0$1 ? repr$0 : m$0$0[1], typeof t2$0 === "function")) {
    recur$0 = t2$0;if (ph$2$0 === true) {
      return ENode([".special", ".true"], {}, "true");
    } else {
      if (ph$2$0 === false) {
        return ENode([".special", ".false"], {}, "false");
      } else {
        if (ph$2$0 === null) {
          return ENode([".special", ".nil"], {}, "null");
        } else {
          if (ph$2$0 === void 0) {
            return ENode([".special", ".nil"], {}, "undefined");
          } else {
            if (typeof ph$2$0 === "number") {
              return ENode([".num"], {}, String(x$2));
            } else {
              if (typeof ph$2$0 === "string") {
                return ENode([".str"], {}, x$2);
              } else {
                t0$2 = ph$2$0;if (Array.isArray(t0$2)) {
                  entries$0 = t0$2;return ENode([".sequence"], {}, (acc$0 = [], temp$1 = null, m$1 = null, (function () {
                    $0: for (var _iterator = entries$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
                      m$1 = _step.value;
                      var x$3 = undefined;x$3 = m$1;temp$1 = recur$0(x$3, repr$0);acc$0.push(temp$1);
                    }
                  })(), acc$0));
                } else {
                  if (x$2["::repr"]) {
                    return x$2["::repr"](recur$0);
                  } else {
                    if (Object.getPrototypeOf(x$2) === Object.prototype) {
                      return ENode(["table", ".object"], {}, (acc$1 = [], temp$2 = null, m$2 = null, (function () {
                        $1: for (var _iterator2 = items(x$2)[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
                          m$2 = _step2.value;
                          var k$0 = undefined;var v$0 = undefined;var t0$3 = undefined;var t1$1 = undefined;t0$3 = m$2;if (Array.isArray(t0$3) && (t1$1 = t0$3.length, t1$1 === 2)) {
                            k$0 = t0$3[0];v$0 = t0$3[1];temp$2 = ENode(["tr"], {}, [ENode(["th"], {}, recur$0(k$0, repr$0)), ENode(["td"], {}, recur$0(v$0, repr$0))]);acc$1.push(temp$2);
                          } else {
                            ___match_error(m$2);
                          }
                        }
                      })(), acc$1));
                    } else {
                      other$0 = ph$2$0;return ENode([".unknown"], {}, other$0.toString());
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
};escape_html$0 = function escape_html(temp$3$0) {
  var t0$4 = undefined;var repl$0 = undefined;var s$0 = undefined;t0$4 = [true, String(temp$3$0)];if (t0$4[0]) {
    s$0 = t0$4[1];
  } else {
    ___match_error(temp$3$0);
  }repl$0 = { "&": "&amp;", "<": "&lt;", ">": "&gt;" };return s$0.replace(RegExp("[&<>]", "g"), function (x$4) {
    return send(repl$0, x$4);
  });
};quotify$0 = function quotify(temp$4$0) {
  var t0$5 = undefined;var s$1 = undefined;t0$5 = [true, String(temp$4$0)];if (t0$5[0]) {
    s$1 = t0$5[1];
  } else {
    ___match_error(temp$4$0);
  }return s$1.replace(RegExp("[\\\"\\\\]", "g"), function (x$5) {
    return "\\" + x$5;
  });
};HTML$0 = function HTML(ph$3$0, default_tag$0) {
  var m$3 = undefined;var acc$2 = undefined;var temp$5 = undefined;var m$5 = undefined;var m$6 = undefined;var m$7 = undefined;var acc$3 = undefined;var temp$6 = undefined;var m$9 = undefined;var acc$4 = undefined;var temp$7 = undefined;var m$10 = undefined;var acc$5 = undefined;var temp$8 = undefined;var other$2 = undefined;var m$8$0 = undefined;var x$6 = undefined;var other$3 = undefined;var m$4$0 = undefined;var tag$0 = undefined;var classes$0 = undefined;var id$0 = undefined;var kv$0 = undefined;var sub$0 = undefined;var accum$0 = undefined;var children2$0 = undefined;var other$4 = undefined;var tags$0 = undefined;var props$0 = undefined;var children$1 = undefined;var children$0 = undefined;var s$2 = undefined;var $$21817$0 = undefined;var t0$6 = undefined;t0$6 = ph$3$0;if (typeof t0$6 === "string") {
    s$2 = t0$6;return escape_html$0(s$2);
  } else {
    if (Array.isArray(t0$6)) {
      children$0 = t0$6;return (acc$2 = [], temp$5 = null, m$3 = null, (function () {
        $2: for (var _iterator3 = children$0[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
          m$3 = _step3.value;
          var child$0 = undefined;child$0 = m$3;temp$5 = HTML$0(child$0, default_tag$0);acc$2.push(temp$5);
        }
      })(), acc$2).join("");
    } else {
      if (getChecker(ENode)(t0$6) && (___hasprop(t0$6, "tags") && (tags$0 = t0$6.tags, ___hasprop(t0$6, "props") && (props$0 = t0$6.props, ___hasprop(t0$6, "children"))))) {
        children$1 = t0$6.children;tag$0 = default_tag$0 || "span";classes$0 = [];id$0 = null;kv$0 = [];sub$0 = [];m$5 = null;$3: for (var _iterator4 = tags$0[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
          m$5 = _step4.value;
          var other$1 = undefined;var cls$0 = undefined;var t0$7 = undefined;var t1$2 = undefined;var t2$1 = undefined;t0$7 = getProjector(RegExp("^\\.(.*)", ""))(m$5);if (t0$7[0] && (t1$2 = t0$7[1], t2$1 = t1$2.length, t2$1 === 2)) {
            t1$2[0];cls$0 = t1$2[1];classes$0.push(cls$0);
          } else {
            other$1 = m$5;tag$0 = other$1;tag$0;
          }
        }m$6 = null;$4: for (var _iterator5 = items(props$0)[Symbol.iterator](), _step5; !(_step5 = _iterator5.next()).done;) {
          m$6 = _step5.value;
          var k$1 = undefined;var v$1 = undefined;var t0$8 = undefined;var t1$3 = undefined;t0$8 = m$6;if (Array.isArray(t0$8) && (t1$3 = t0$8.length, t1$3 === 2)) {
            k$1 = t0$8[0];v$1 = t0$8[1];kv$0.push([k$1, v$1]);
          } else {
            ___match_error(m$6);
          }
        }if (tag$0 === "raw") {
          accum$0 = [];
        } else {
          accum$0 = ["<", tag$0];
        }if (id$0) {
          accum$0 = accum$0.concat(" id=\"", id$0, "\"");accum$0;
        }if (classes$0.length) {
          accum$0 = accum$0.concat(" class=\"", quotify$0(classes$0.join(" ")), "\"");accum$0;
        }if (kv$0) {
          acc$3 = [];temp$6 = null;m$7 = null;$5: for (var _iterator6 = kv$0[Symbol.iterator](), _step6; !(_step6 = _iterator6.next()).done;) {
            m$7 = _step6.value;
            var k$2 = undefined;var v$2 = undefined;var t0$9 = undefined;var t1$4 = undefined;t0$9 = m$7;if (Array.isArray(t0$9) && (t1$4 = t0$9.length, t1$4 === 2)) {
              k$2 = t0$9[0];v$2 = t0$9[1];accum$0 = accum$0.concat(v$2 !== null ? [" ", k$2, "=\"", quotify$0(v$2), "\""] : [" ", k$2]);temp$6 = accum$0;acc$3.push(temp$6);
            } else {
              ___match_error(m$7);
            }
          }acc$3;
        }m$8$0 = tag$0;if (m$8$0 === "raw") {
          acc$4 = [];temp$7 = null;m$9 = null;$6: for (var _iterator7 = children$1[Symbol.iterator](), _step7; !(_step7 = _iterator7.next()).done;) {
            m$9 = _step7.value;
            var c$0 = undefined;var s$3 = undefined;var t0$10 = undefined;t0$10 = m$9;if (typeof t0$10 === "string") {
              s$3 = t0$10;temp$7 = s$3;acc$4.push(temp$7);
            } else {
              c$0 = m$9;temp$7 = HTML$0(c$0, default_tag$0);acc$4.push(temp$7);
            }
          }children2$0 = acc$4;
        } else {
          other$2 = m$8$0;acc$5 = [];temp$8 = null;m$10 = null;$7: for (var _iterator8 = children$1[Symbol.iterator](), _step8; !(_step8 = _iterator8.next()).done;) {
            m$10 = _step8.value;
            var c$1 = undefined;c$1 = m$10;temp$8 = HTML$0(c$1, default_tag$0);acc$5.push(temp$8);
          }children2$0 = acc$5;
        }m$4$0 = tag$0;if (m$4$0 === "raw") {
          return accum$0.concat(children2$0).join("");
        } else {
          other$3 = m$4$0;x$6 = [">"].concat(children2$0).concat(["</", tag$0, ">"]);return accum$0.concat(x$6).join("");
        }
      } else {
        other$4 = ph$3$0;return HTML$0([true, String(other$4)][1], default_tag$0);
      }
    }
  }
};$targ$0 = pr_terminus$0;exports.pr_terminus = $targ$0;[];$targ$1 = pr$0;exports.pr = $targ$1;[];$targ$2 = __lt____gt__$0;exports["<>"] = $targ$2;[];$targ$3 = repr$0;exports.repr = $targ$3;[];
//# sourceMappingURL=pp.js.map

