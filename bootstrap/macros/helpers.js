"use strict";
require("earlgrey-runtime");
var $targ$136;
var accum$2;
var $targ$137;
var accum$3;
var $targ$138;
var accum$4;
var $targ$139;
var accum$5;
var $targ$145;
var accum$6;
var $targ$146;
var accum$7;
var $targ$147;
var accum$8;
var $targ$148;
var accum$9;
var $targ$152;
var $targ$153;
var $targ$154;
var $targ$155;
var $targ$156;
var $targ$157;
var $targ$158;
var $targ$159;
var $targ$160;
var $targ$161;
var $targ$162;
var $targ$163;
var $targ$164;
var $targ$165;
var $targ$166;
var $targ$167;
var $targ$168;
var $0$0;
var __lt____lt____colon__$0;
var $1$0;
var Scope$0;
var mac1$0;
var $2$0;
var PatternParser$0;
var parse_pattern$0;
var parse_clauses$0;
var $3$0;
var Body$0;
var embed_location$0;
var error_embed_location$0;
var match_error$0;
var drop_ctx$0;
var expr_mac$0;
var expr_mac2$0;
var ctx_mac$0;
var _default_proj$0;
var value_mac$0;
var overridable$0;
var protected_value$0;
var var_operator$0;
var accum_flags$0;
var build_loop$0;
var partial_pattern$0;
var make_assigner$0;
var disregard_specials$0;
var pattern_handlers$0;
$0$0 = require("../location");
__lt____lt____colon__$0 = $0$0["<<:"];
$1$0 = require("../expand");
Scope$0 = $1$0.Scope;
mac1$0 = $1$0["mac1"];
$2$0 = require("../pattern");
PatternParser$0 = $2$0.PatternParser;
parse_pattern$0 = $2$0.parse_pattern;
parse_clauses$0 = $2$0.parse_clauses;
$3$0 = require("../util");
Body$0 = $3$0.Body;
embed_location$0 = (function(temp$0$0) {
  var t1$0;
  var t0$0;
  var other$0;
  var url$0;
  var start$0;
  var end$0;
  var m$0$0;
  var ph$0;
  ph$0 = temp$0$0;
  m$0$0 = ph$0;
  if ((___hasprop(m$0$0, "location") && ((t0$0 = m$0$0.location), (___hasprop(t0$0, "source") && ((t1$0 = t0$0.source), (___hasprop(t1$0, "url") && ((url$0 = t1$0.url), (___hasprop(t0$0, "start") && ((start$0 = t0$0.start), ___hasprop(t0$0, "end")))))))))) {
    end$0 = t0$0.end;
    return ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "location"]]], ["data", ["value", url$0], ["value", start$0], ["value", end$0]]];
  } else {
    other$0 = m$0$0;
    return ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "location"]]], ["data", ["symbol", "null"], ["value", 0], ["value", 0]]];
  }
});
error_embed_location$0 = (function(error$0, target$0) {
  return ["send", ["symbol", "throw"], ["send", ["symbol", "&:"], ["data", error$0, ["data", ["send", ["symbol", "="], ["data", ["symbol", "location"], embed_location$0(target$0)]]]]]];
});
match_error$0 = (function(temp$1$0) {
  var t0$1;
  var t1$1;
  var t0$2;
  var other$1;
  var url$1;
  var start$1;
  var end$1;
  var m$1$0;
  var ph$1;
  var target$1;
  t0$1 = temp$1$0;
  target$1 = t0$1;
  ph$1 = t0$1;
  m$1$0 = ph$1;
  if ((___hasprop(m$1$0, "location") && ((t0$2 = m$1$0.location), (___hasprop(t0$2, "source") && ((t1$1 = t0$2.source), (___hasprop(t1$1, "url") && ((url$1 = t1$1.url), (___hasprop(t0$2, "start") && ((start$1 = t0$2.start), ___hasprop(t0$2, "end")))))))))) {
    end$1 = t0$2.end;
    return ["send", ["symbol", "___match_error"], ["data", target$1, ["value", url$1], ["value", start$1], ["value", end$1]]];
  } else {
    other$1 = m$1$0;
    return ["send", ["symbol", "___match_error"], ["data", other$1]];
  }
});
drop_ctx$0 = (function(f$0) {
  return (function(context$0, info$0, form$0, arg$0) {
    var $targ$37;
    var $targ$36;
    var rval$0;
    $targ$36 = false;
    rval$0 = $targ$36;
    try {
      $targ$37 = f$0(context$0, info$0, form$0, arg$0);
      rval$0 = $targ$37;
    } catch (excv$0) {
      var t0$4;
      var t4$0;
      var t3$0;
      var t2$0;
      var t1$2;
      var $targ$44;
      var $targ$45;
      var e$0;
      var t0$3;
      t0$3 = excv$0;
      if ((getChecker(ErrorFactory(["match"]))(t0$3) && (___hasprop(t0$3, "args") && ((t1$2 = t0$3.args), ((t1$2 instanceof Array) && ((t2$0 = t1$2.length), ((t2$0 === 1) && ((t3$0 = t1$2[0]), (___hasprop(t3$0, "value") && ((t4$0 = t3$0.value), ((t4$0 === context$0) && (!((t4$0 instanceof Array) && ((t0$4 = t4$0.length), ((t0$4 === 2) && ((t4$0[0] === "expr") && (t4$0[1] === "expr"))))))))))))))))) {
        $targ$44 = ["nostep", form$0];
        rval$0 = $targ$44;
      } else {
        e$0 = excv$0;
        $targ$45 = (function() {
          throw e$0;
        })();
        rval$0 = $targ$45;
      }
    }
    return rval$0;
  });
});
expr_mac$0 = (function(f$1) {
  return (function(temp$2$0, info$1, form$1, arg$1) {
    var t0$5;
    var t0$6;
    var otherwise$0;
    var bridge$$8193$0;
    var m$2$0;
    var ph$2;
    ph$2 = temp$2$0;
    m$2$0 = ph$2;
    bridge$$8193$0 = m$2$0;
    if ((((bridge$$8193$0 instanceof Array) && ((t0$5 = bridge$$8193$0.length), ((t0$5 === 2) && ((bridge$$8193$0[0] === "expr") && (bridge$$8193$0[1] === "expr"))))) || ((bridge$$8193$0 instanceof Array) && ((t0$6 = bridge$$8193$0.length), ((t0$6 === 2) && ((bridge$$8193$0[0] === "expr") && (bridge$$8193$0[1] === "head"))))))) {
      return f$1(info$1, form$1, arg$1);
    } else {
      otherwise$0 = m$2$0;
      return ["nostep", form$1];
    }
  });
});
expr_mac2$0 = (function(mac$0) {
  return (function(temp$3$0, info$2, f$2, e$1) {
    var t0$7;
    var x$0;
    var mac3$0;
    var x$3;
    var ph$3$0;
    var m$3$0;
    var ph$4;
    ph$4 = temp$3$0;
    m$3$0 = ph$4;
    if (((m$3$0 instanceof Array) && ((t0$7 = m$3$0.length), ((t0$7 === 2) && (m$3$0[0] === "project"))))) {
      ph$3$0 = m$3$0[1];
      if (((x$0 = ph$3$0), ((x$0 instanceof Array) && (x$0[0] === "pattern")))) {
        mac3$0 = (function(c$0, info$3, f$3, temp$4$0) {
          var t1$3;
          var t0$8;
          var t0$9;
          var x$2;
          var env$0;
          var x$1;
          var m$4$0;
          var ph$5;
          t0$8 = temp$4$0;
          if (((t0$8 instanceof Array) && ((t1$3 = t0$8.length), ((t1$3 === 2) && (t0$8[0] === "data"))))) {
            ph$5 = t0$8[1];
          } else {
            ___match_error(temp$4$0);
          }
          m$4$0 = ph$5;
          if (((m$4$0 instanceof Array) && ((t0$9 = m$4$0.length), ((t0$9 === 3) && (m$4$0[0] === "use"))))) {
            env$0 = m$4$0[1];
            x$1 = m$4$0[2];
            return ["use", env$0, mac$0.call(info$3, __lt____lt____colon__$0(["data", x$1], e$1))];
          } else {
            x$2 = m$4$0;
            return mac$0.call(info$3, __lt____lt____colon__$0(["data", x$2], x$2));
          }
        });
        return ["unconditional", ["macro", mac3$0]];
      } else {
        ph$3$0;
        return mac$0.call(info$2, e$1);
      }
    } else {
      if (((x$3 = m$3$0), ((x$3 instanceof Array) && (x$3[0] === "expr")))) {
        return mac$0.call(info$2, e$1);
      } else {
        return ___match_error(m$3$0);
      }
    }
  });
});
ctx_mac$0 = (function(mac$1) {
  return (function(ctx$0, info$4, f$4, e$2) {
    return mac$1.call(info$4, ctx$0, e$2);
  });
});
_default_proj$0 = (function(name$0) {
  return (function(x$4) {
    return ["send", ["symbol", "throw"], ["send", ["send", ["symbol", "E"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "project"]]]], ["data", ["send", ["symbol", "+"], ["data", ["send", ["symbol", "+"], ["data", ["value", "Cannot project a value with '"], ["value", name$0]]], ["value", "!'"]]]]]];
  });
});
value_mac$0 = (function() {
  var t0$10;
  var name$1;
  var chk$0;
  var proj$0;
  var m$5$0;
  m$5$0 = arguments;
  t0$10 = m$5$0.length;
  if (((t0$10 >= 2) && (t0$10 <= 3))) {
    name$1 = m$5$0[0];
    chk$0 = m$5$0[1];
    proj$0 = ((2 >= t0$10) ? _default_proj$0(name$1) : m$5$0[2]);
    return (function(temp$5$0, temp$6$0, form$2, arg$2) {
      var t0$11;
      var x$5;
      var m$7;
      var x$7;
      var m$9;
      var x$9;
      var m$11$0;
      var ctx$2;
      var m$6$0;
      var ph$6;
      var ctx$1;
      t0$11 = temp$5$0;
      ctx$1 = t0$11;
      ph$6 = t0$11;
      temp$6$0;
      m$6$0 = ph$6;
      if (((x$5 = m$6$0), ((x$5 instanceof Array) && (x$5[0] === "check")))) {
        m$7 = (function() {
          var t2$1;
          var t1$4;
          var t0$12;
          var x$6;
          var m$8$0;
          m$8$0 = arguments;
          t0$12 = m$8$0.length;
          if (((t0$12 >= 1) && (Array.prototype.slice.call(m$8$0, 0, -1), (t1$4 = m$8$0[(t0$12 - 1)]), ((t1$4 instanceof Array) && ((t2$1 = t1$4.length), ((t2$1 === 2) && (t1$4[0] === "data"))))))) {
            x$6 = t1$4[1];
            return chk$0(x$6);
          } else {
            return ___match_error(m$8$0);
          }
        });
        return ["nostep", ["macro", m$7]];
      } else {
        if (((x$7 = m$6$0), ((x$7 instanceof Array) && (x$7[0] === "project")))) {
          m$9 = (function() {
            var t2$2;
            var t1$5;
            var t0$13;
            var x$8;
            var m$10$0;
            m$10$0 = arguments;
            t0$13 = m$10$0.length;
            if (((t0$13 >= 1) && (Array.prototype.slice.call(m$10$0, 0, -1), (t1$5 = m$10$0[(t0$13 - 1)]), ((t1$5 instanceof Array) && ((t2$2 = t1$5.length), ((t2$2 === 2) && (t1$5[0] === "data"))))))) {
              x$8 = t1$5[1];
              return proj$0(x$8);
            } else {
              return ___match_error(m$10$0);
            }
          });
          return ["nostep", ["macro", m$9]];
        } else {
          ctx$2 = m$6$0;
          m$11$0 = arg$2;
          if (((x$9 = m$11$0), ((x$9 instanceof Array) && (x$9[0] === "void")))) {
            return ["variable", name$1];
          } else {
            m$11$0;
            return ["send", ["variable", name$1], arg$2];
          }
        }
      }
    });
  } else {
    return ___match_error(m$5$0);
  }
});
overridable$0 = (function(f$5) {
  return (function(temp$7$0, info$5, form$3, arg$3) {
    var t0$14;
    var x$10;
    var t0$15;
    var other$2;
    var m$12$0;
    var ph$7;
    var context$1;
    t0$14 = temp$7$0;
    context$1 = t0$14;
    ph$7 = t0$14;
    m$12$0 = ph$7;
    if (((x$10 = m$12$0), ((x$10 instanceof Array) && (x$10[0] === "pattern")))) {
      return ["nostep", form$3];
    } else {
      if (((m$12$0 instanceof Array) && ((t0$15 = m$12$0.length), ((t0$15 === 2) && ((m$12$0[0] === "expr") && (m$12$0[1] === "multi")))))) {
        return ["nostep", form$3];
      } else {
        other$2 = m$12$0;
        return f$5(context$1, info$5, form$3, arg$3);
      }
    }
  });
});
protected_value$0 = (function(name$2, value$0) {
  return (function(temp$8$0, temp$9$0, form$4, arg$4) {
    var x$11;
    var t0$16;
    var other$4;
    var m$14$0;
    var other$3;
    var m$13$0;
    var ph$8;
    ph$8 = temp$8$0;
    temp$9$0;
    m$13$0 = ph$8;
    if (((x$11 = m$13$0), ((x$11 instanceof Array) && (x$11[0] === "pattern")))) {
      throw ErrorFactory(["syntax", "pattern"]).create((("'" + name$2) + "' is not a valid pattern and cannot be redeclared"));
    } else {
      other$3 = m$13$0;
      m$14$0 = arg$4;
      if (((m$14$0 instanceof Array) && ((t0$16 = m$14$0.length), ((t0$16 === 1) && (m$14$0[0] === "void"))))) {
        return ["value", value$0];
      } else {
        other$4 = m$14$0;
        return ["send", ["value", value$0], arg$4];
      }
    }
  });
});
var_operator$0 = (function(name$3) {
  return (function(context$2, temp$10$0, form$5, expr$0) {
    var t0$17;
    var t0$18;
    var x$12;
    var t1$6;
    var other$5;
    var t0$19;
    var s$0;
    var ph$9$0;
    var $$8617$0;
    var $$8618$0;
    var m$15$0;
    var sym$0;
    var env$1;
    t0$17 = temp$10$0;
    if (___hasprop(t0$17, "env")) {
      env$1 = t0$17.env;
    } else {
      ___match_error(temp$10$0);
    }
    sym$0 = __amp__(["symbol", name$3], ({"env": env$1}));
    m$15$0 = expr$0;
    if ((($$8617$0 = (m$15$0 instanceof Array)) && ((t0$18 = m$15$0.length), ((t0$18 === 1) && (m$15$0[0] === "void"))))) {
      return sym$0;
    } else {
      if (($$8617$0 && ((t0$18 === 3) && ((m$15$0[0] === "data") && ((x$12 = m$15$0[1]), ((x$12 instanceof Array) && (x$12[0] === "void"))))))) {
        ph$9$0 = m$15$0[2];
        t0$19 = ph$9$0;
        if (((t0$19 instanceof Array) && ((t1$6 = t0$19.length), ((t1$6 === 2) && (t0$19[0] === "symbol"))))) {
          s$0 = t0$19[1];
          return ["send", sym$0, ["value", s$0]];
        } else {
          other$5 = ph$9$0;
          return ["send", sym$0, other$5];
        }
      } else {
        return ___match_error(m$15$0);
      }
    }
  });
});
accum_flags$0 = (function() {
  var make$0;
  var t0$20;
  var mac$2;
  var also_values$0;
  var m$16$0;
  m$16$0 = arguments;
  t0$20 = m$16$0.length;
  if (((t0$20 >= 1) && (t0$20 <= 2))) {
    mac$2 = m$16$0[0];
    also_values$0 = ((1 >= t0$20) ? true : m$16$0[1]);
    make$0 = (function(flags$0) {
      return (function(context$3, info$6, form$6, temp$11$0) {
        var t0$21;
        var t8$0;
        var t7$0;
        var t6$0;
        var t5$0;
        var t4$1;
        var t3$1;
        var t2$3;
        var t1$7;
        var other$6;
        var flag$1;
        var flag$0;
        var $$8695$0;
        var $$8696$0;
        var m$17$0;
        var ph$10;
        ph$10 = temp$11$0;
        m$17$0 = ph$10;
        if ((($$8695$0 = (m$17$0 instanceof Array)) && ((t0$21 = m$17$0.length), ((t0$21 === 2) && ((m$17$0[0] === "value") && ((flag$0 = m$17$0[1]), also_values$0)))))) {
          return ["macro", make$0(flags$0.concat([flag$0]))];
        } else {
          if (($$8695$0 && ((t0$21 === 3) && ((m$17$0[0] === "send") && ((t1$7 = m$17$0[1]), ((t1$7 instanceof Array) && ((t2$3 = t1$7.length), ((t2$3 === 2) && ((t1$7[0] === "symbol") && ((t1$7[1] === ".") && ((t3$1 = m$17$0[2]), ((t3$1 instanceof Array) && ((t4$1 = t3$1.length), ((t4$1 === 3) && ((t3$1[0] === "data") && ((t5$0 = t3$1[1]), ((t5$0 instanceof Array) && ((t6$0 = t5$0.length), ((t6$0 === 1) && ((t5$0[0] === "void") && ((t7$0 = t3$1[2]), ((t7$0 instanceof Array) && ((t8$0 = t7$0.length), ((t8$0 === 2) && (t7$0[0] === "symbol"))))))))))))))))))))))))) {
            flag$1 = t7$0[1];
            return ["macro", make$0(flags$0.concat([flag$1]))];
          } else {
            other$6 = m$17$0;
            return mac$2(context$3, info$6, form$6, other$6, flags$0);
          }
        }
      });
    });
    return make$0([]);
  } else {
    return ___match_error(m$16$0);
  }
});
build_loop$0 = (function(info$7, env$2, form$7, li$0, clauses$0, wrap$0, pre$0, post$0, opt$0) {
  var t0$22;
  var t0$23;
  var $targ$117;
  var accum$0;
  var $targ$118;
  var accum$1;
  var lbl$0;
  var freshenv$0;
  var i$0;
  var len$0;
  var $targ$109;
  var first_mac$0;
  var $targ$110;
  var last_mac$0;
  var newscope$0;
  var m$18;
  lbl$0 = (env$2 ? __amp__(["value", info$7.gensym()], ({"env": env$2})) : ["value", info$7.gensym()]);
  freshenv$0 = info$7.expander.mkenv();
  i$0 = __amp__(["symbol", "i"], ({"env": freshenv$0}));
  len$0 = __amp__(["symbol", "len"], ({"env": freshenv$0}));
  $targ$109 = (function(temp$12$0, temp$13$0, form$8, subp$0) {
    var x$13;
    if (((x$13 = temp$12$0), ((x$13 instanceof Array) && (x$13[0] === "pattern")))) {} else {
      ___match_error(temp$12$0);
    }
    temp$13$0;
    return ["test", ["send", ["symbol", "==="], ["data", i$0, ["value", 0]]], subp$0];
  });
  t0$22 = getProjector(drop_ctx$0)($targ$109);
  if (t0$22[0]) {
    first_mac$0 = t0$22[1];
  } else {
    ___match_error($targ$109);
  }
  $targ$110 = (function(temp$14$0, temp$15$0, form$9, subp$1) {
    var x$14;
    if (((x$14 = temp$14$0), ((x$14 instanceof Array) && (x$14[0] === "pattern")))) {} else {
      ___match_error(temp$14$0);
    }
    temp$15$0;
    return ["test", ["send", ["symbol", "==="], ["data", i$0, ["send", ["symbol", "-"], ["data", len$0, ["value", 1]]]]], subp$1];
  });
  t0$23 = getProjector(drop_ctx$0)($targ$110);
  if (t0$23[0]) {
    last_mac$0 = t0$23[1];
  } else {
    ___match_error($targ$110);
  }
  newscope$0 = Scope$0(info$7.scope);
  env$2.bind(newscope$0, "first", ["macro", first_mac$0]);
  env$2.bind(newscope$0, "last", ["macro", last_mac$0]);
  m$18 = __lt____lt____colon__$0(["symbol", "m"], form$7);
  if (opt$0.forof) {
    return ["multi", pre$0, ["send", ["send", ["symbol", "for"], lbl$0], ["data", ["send", ["symbol", "of"], ["data", m$18, li$0]], parse_clauses$0(info$7.with_scope(newscope$0), m$18, clauses$0, __amp__(opt$0, (($targ$117 = (function(x$15) {
      return wrap$0(x$15, ["value", 0]);
    })), (accum$0 = ({})), (accum$0["wrap"] = $targ$117), accum$0)))]], post$0];
  } else {
    return ["multi", pre$0, ["send", ["symbol", "let"], ["data", ["multi", ["send", ["symbol", "="], ["data", ["symbol", "temp"], li$0]], ["send", ["symbol", "="], ["data", len$0, ["send", ["symbol", "temp"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "length"]]]]]]], ["send", ["send", ["symbol", "for"], lbl$0], ["data", ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], i$0], ["value", 0]]], ["send", ["symbol", "<"], ["data", i$0, len$0]], ["send", ["symbol", "++"], ["data", i$0, ["void"]]]], ["multi", ["send", ["symbol", "="], ["data", m$18, ["send", ["symbol", "___js_fetch"], ["data", ["symbol", "temp"], i$0]]]], parse_clauses$0(info$7.with_scope(newscope$0), m$18, clauses$0, __amp__(opt$0, (($targ$118 = (function(x$16) {
      return wrap$0(x$16, i$0);
    })), (accum$1 = ({})), (accum$1["wrap"] = $targ$118), accum$1)))]]]]], post$0];
  }
});
partial_pattern$0 = (function(operator$0) {
  var x$17;
  var m$19$0;
  var op$0;
  op$0 = ((m$19$0 = operator$0), (((x$17 = m$19$0), ((x$17 instanceof Array) && (x$17[0] === "symbol"))) ? operator$0 : ((typeof(m$19$0) === "string") ? ["variable", operator$0] : ___match_error(m$19$0))));
  return (function(context$4, temp$16$0, form$10, expr$1) {
    var x$18;
    var t4$2;
    var t3$2;
    var $targ$126;
    var $targ$125;
    var t0$24;
    var m$21;
    var $targ$131;
    var $targ$130;
    var other$7;
    var val$0;
    var $$8904$0;
    var $$8905$0;
    var $$8906$0;
    var t1$8;
    var t2$4;
    var m$20$0;
    temp$16$0;
    m$20$0 = [context$4, expr$1];
    if ((($$8904$0 = (m$20$0 instanceof Array)) && ((t0$24 = m$20$0.length), (($$8906$0 = (t0$24 === 2)) && (((x$18 = m$20$0[0]), ((x$18 instanceof Array) && (x$18[0] === "pattern"))) && (($targ$125 = m$20$0[1]), (t1$8 = $targ$125), ((t1$8 instanceof Array) && (($targ$126 = t1$8.length), (t2$4 = $targ$126), ((t2$4 === 3) && ((t1$8[0] === "data") && ((t3$2 = t1$8[1]), ((t3$2 instanceof Array) && ((t4$2 = t3$2.length), ((t4$2 === 1) && (t3$2[0] === "void"))))))))))))))) {
      val$0 = t1$8[2];
      m$21 = mac1$0((function(x$19) {
        return ["send", op$0, ["data", x$19, val$0]];
      }));
      return ["check", m$21, ["ignore"]];
    } else {
      if (($$8906$0 && (m$20$0[0], ($targ$130 = m$20$0[1]), (t1$8 = $targ$130), ((t1$8 instanceof Array) && (($targ$131 = t1$8.length), (t2$4 = $targ$131), ((t2$4 === 1) && (t1$8[0] === "void"))))))) {
        return op$0;
      } else {
        other$7 = m$20$0;
        return ["send", op$0, expr$1];
      }
    }
  });
});
make_assigner$0 = (function(op$1) {
  return (function(context$5, temp$17$0, form$11, temp$18$0) {
    var t1$9;
    var t0$25;
    var a$0;
    var b$0;
    temp$17$0;
    t0$25 = temp$18$0;
    if (((t0$25 instanceof Array) && ((t1$9 = t0$25.length), ((t1$9 === 3) && (t0$25[0] === "data"))))) {
      a$0 = t0$25[1];
      b$0 = t0$25[2];
    } else {
      ___match_error(temp$18$0);
    }
    return ["assign", a$0, ["send", ["symbol", op$1], ["data", a$0, b$0]]];
  });
});
disregard_specials$0 = (function(temp$19$0, value$1) {
  var t1$10;
  var t0$26;
  var kind$0;
  var expr$2;
  t0$26 = temp$19$0;
  if (((t0$26 instanceof Array) && ((t1$10 = t0$26.length), ((t1$10 === 2) && (t0$26[0] === "special"))))) {
    kind$0 = t0$26[1];
    expr$2 = t0$26;
  } else {
    ___match_error(temp$19$0);
  }
  throw ErrorFactory(["syntax", "pattern", "special"]).create("Special token cannot be used here", ({"special": expr$2}));
});
pattern_handlers$0 = ({
  "declare_variables": __amp____colon__(({
    "allow_nested": true,
    "allow_arguments": true,
    "special": disregard_specials$0
  }), __amp____colon__((($targ$136 = (function(temp$20$0, value$2) {
    var t0$27;
    var t0$28;
    var v$1;
    var name$4;
    var m$22$0;
    var ph$11;
    var v$0;
    t0$27 = temp$20$0;
    v$0 = t0$27;
    ph$11 = t0$27;
    m$22$0 = ph$11;
    if (((m$22$0 instanceof Array) && ((t0$28 = m$22$0.length), ((t0$28 === 2) && (m$22$0[0] === "symbol"))))) {
      name$4 = m$22$0[1];
      return ["do", __lt____lt____colon__$0(["assign", v$0, __amp____colon__(value$2, ({"name": name$4}))], v$0)];
    } else {
      v$1 = m$22$0;
      return ["do", __lt____lt____colon__$0(["assign", v$1, value$2], v$1)];
    }
  })), (accum$2 = ({})), (accum$2["assign"] = $targ$136), accum$2), __amp____colon__(({
    "finalize": true,
    "tags": ({"declare_mode": "unqualified"})
  }), __amp____colon__((($targ$137 = (function(temp$21$0, vars$0) {
    var m$23;
    var acc$0;
    temp$21$0;
    acc$0 = [];
    m$23 = null;
    $4: for (var $__0 = vars$0[$traceurRuntime.toProperty(Symbol.iterator)](),
        $__1; !($__1 = $__0.next()).done; ) {
      m$23 = $__1.value;
      {
        var m$24$0;
        var v$2;
        v$2 = m$23;
        acc$0.push(((m$24$0 = v$2.declare_mode), ((m$24$0 === "set") ? ["splice"] : ((m$24$0 === "let") ? ["declare", __amp__(v$2, ({"mutable": false}))] : ((m$24$0 === "var") ? ["declare", __amp__(v$2, ({"mutable": true}))] : ((m$24$0 === "unqualified") ? ["declare", __amp__(v$2, ({
          "mutable": false,
          "use_previous": true
        }))] : ___match_error(m$24$0)))))));
      }
    }
    return acc$0;
  })), (accum$3 = ({})), (accum$3["declare"] = $targ$137), accum$3), __amp____colon__((($targ$138 = (function(temp$22$0) {
    temp$22$0;
    return ["multi"];
  })), (accum$4 = ({})), (accum$4["success"] = $targ$138), accum$4), (($targ$139 = (function(target$2) {
    return match_error$0(target$2);
  })), (accum$5 = ({})), (accum$5["failure"] = $targ$139), accum$5)))))),
  "build_object": __amp____colon__(({
    "strings_as_variables": true,
    "allow_nested": true,
    "allow_arguments": true,
    "special": disregard_specials$0
  }), __amp____colon__((($targ$145 = (function(temp$23$0, value$3, temp$24$0) {
    var t0$29;
    var t0$30;
    var bridge$$9134$0;
    var v$3;
    bridge$$9134$0 = temp$23$0;
    if ((((bridge$$9134$0 instanceof Array) && ((t0$29 = bridge$$9134$0.length), ((t0$29 === 2) && ((bridge$$9134$0[0] === "symbol") && ((v$3 = bridge$$9134$0[1]), true))))) || ((bridge$$9134$0 instanceof Array) && ((t0$30 = bridge$$9134$0.length), ((t0$30 === 2) && ((bridge$$9134$0[0] === "value") && ((v$3 = bridge$$9134$0[1]), true))))))) {} else {
      ___match_error(temp$23$0);
    }
    temp$24$0;
    return ["do", __lt____lt____colon__$0(["assign", ["send", ["symbol", "accum"], ["value", v$3]], value$3], v$3)];
  })), (accum$6 = ({})), (accum$6["assign"] = $targ$145), accum$6), __amp____colon__(({"finalize": true}), __amp____colon__((($targ$146 = (function(temp$25$0, vars$1) {
    temp$25$0;
    return [["declare", ["symbol", "accum"], ["data", ["symbol", "="]]]];
  })), (accum$7 = ({})), (accum$7["declare"] = $targ$146), accum$7), __amp____colon__((($targ$147 = (function(temp$26$0) {
    temp$26$0;
    return ["symbol", "accum"];
  })), (accum$8 = ({})), (accum$8["success"] = $targ$147), accum$8), (($targ$148 = (function(target$3) {
    return match_error$0(target$3);
  })), (accum$9 = ({})), (accum$9["failure"] = $targ$148), accum$9))))))
});
$targ$152 = embed_location$0;
(exports["embed_location"] = $targ$152);
$targ$153 = error_embed_location$0;
(exports["error_embed_location"] = $targ$153);
$targ$154 = match_error$0;
(exports["match_error"] = $targ$154);
$targ$155 = drop_ctx$0;
(exports["drop_ctx"] = $targ$155);
$targ$156 = expr_mac$0;
(exports["expr_mac"] = $targ$156);
$targ$157 = expr_mac2$0;
(exports["expr_mac2"] = $targ$157);
$targ$158 = ctx_mac$0;
(exports["ctx_mac"] = $targ$158);
$targ$159 = value_mac$0;
(exports["value_mac"] = $targ$159);
$targ$160 = overridable$0;
(exports["overridable"] = $targ$160);
$targ$161 = protected_value$0;
(exports["protected_value"] = $targ$161);
$targ$162 = var_operator$0;
(exports["var_operator"] = $targ$162);
$targ$163 = accum_flags$0;
(exports["accum_flags"] = $targ$163);
$targ$164 = build_loop$0;
(exports["build_loop"] = $targ$164);
$targ$165 = partial_pattern$0;
(exports["partial_pattern"] = $targ$165);
$targ$166 = make_assigner$0;
(exports["make_assigner"] = $targ$166);
$targ$167 = pattern_handlers$0;
(exports["pattern_handlers"] = $targ$167);
$targ$168 = Body$0;
(exports["Body"] = $targ$168);
//# sourceURL=<compile-source>
