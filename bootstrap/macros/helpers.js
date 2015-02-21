
"use strict";require("earlgrey-runtime/5");var accum$1 = undefined;var accum$2 = undefined;var accum$3 = undefined;var accum$4 = undefined;var accum$5 = undefined;var accum$6 = undefined;var accum$7 = undefined;var accum$8 = undefined;var accum$9 = undefined;var accum$10 = undefined;var $targ$10 = undefined;var $targ$11 = undefined;var $targ$12 = undefined;var $targ$13 = undefined;var $targ$14 = undefined;var $targ$15 = undefined;var $targ$16 = undefined;var $targ$17 = undefined;var $targ$18 = undefined;var $targ$19 = undefined;var $targ$20 = undefined;var $targ$21 = undefined;var $targ$22 = undefined;var $targ$23 = undefined;var $targ$24 = undefined;var $targ$25 = undefined;var $targ$26 = undefined;var $targ$27 = undefined;var $targ$28 = undefined;var $targ$29 = undefined;var $targ$30 = undefined;var $targ$31 = undefined;var $0$0 = undefined;var __lt____lt____colon__$0 = undefined;var $1$0 = undefined;var Scope$0 = undefined;var mac1$0 = undefined;var $2$0 = undefined;var parse_clauses$0 = undefined;var $3$0 = undefined;var Body$0 = undefined;var embed_location$0 = undefined;var error_embed_location$0 = undefined;var match_error$0 = undefined;var drop_ctx$0 = undefined;var expr_mac$0 = undefined;var expr_mac2$0 = undefined;var ctx_mac$0 = undefined;var _default_proj$0 = undefined;var value_mac$0 = undefined;var overridable$0 = undefined;var protected_value$0 = undefined;var var_operator$0 = undefined;var accum_flags$0 = undefined;var build_loop$0 = undefined;var partial_pattern$0 = undefined;var make_assigner$0 = undefined;var disregard_specials$0 = undefined;var pattern_handlers$0 = undefined;var named_statement_matcher$0 = undefined;var grab_statements$0 = undefined;var flatmacro$0 = undefined;var AssignmentHandler$0 = undefined;var qqstruct$0 = undefined;var qq$0 = undefined;$0$0 = require("../location");__lt____lt____colon__$0 = $0$0["<<:"];$1$0 = require("../expand");Scope$0 = $1$0.Scope;mac1$0 = $1$0.mac1;$2$0 = require("../pattern");parse_clauses$0 = $2$0.parse_clauses;$3$0 = require("../util");Body$0 = $3$0.Body;embed_location$0 = function embed_location(ph$0$0) {
  var other$0 = undefined;var url$0 = undefined;var start$0 = undefined;var end$0 = undefined;var t0$0 = undefined;var t1$0 = undefined;var t2$0 = undefined;t0$0 = ph$0$0;if (___hasprop(t0$0, "location") && (t1$0 = t0$0.location, ___hasprop(t1$0, "source") && (t2$0 = t1$0.source, ___hasprop(t2$0, "url") && (url$0 = t2$0.url, ___hasprop(t1$0, "start") && (start$0 = t1$0.start, ___hasprop(t1$0, "end")))))) {
    end$0 = t1$0.end;return ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "location"]]], ["data", ["value", url$0], ["value", start$0], ["value", end$0]]];
  } else {
    other$0 = ph$0$0;return ["send", ["send", ["symbol", "#"], ["data", ["void"], ["symbol", "location"]]], ["data", ["symbol", "null"], ["value", 0], ["value", 0]]];
  }
};error_embed_location$0 = function error_embed_location(error$0, target$0) {
  return ["send", ["symbol", "throw"], ["send", ["symbol", "&:"], ["data", error$0, ["data", ["send", ["symbol", "="], ["data", ["symbol", "location"], embed_location$0(target$0)]]]]]];
};match_error$0 = function match_error(target$1) {
  return __lt____lt____colon__$0(["send", ["symbol", "___match_error"], ["data", target$1]], target$1);
};drop_ctx$0 = function drop_ctx(f$0) {
  return function (context$0, info$0, form$0, arg$0) {
    var rval$0 = undefined;rval$0 = false;try {
      rval$0 = f$0(context$0, info$0, form$0, arg$0);rval$0;
    } catch (excv$0) {
      var t0$2 = undefined;var e$0 = undefined;var t0$1 = undefined;var t1$1 = undefined;var t2$1 = undefined;var t3$0 = undefined;var t4$0 = undefined;t0$1 = excv$0;if (getChecker(ErrorFactory(["match"]))(t0$1) && (___hasprop(t0$1, "args") && (t1$1 = t0$1.args, Array.isArray(t1$1) && (t2$1 = t1$1.length, t2$1 === 1 && (t3$0 = t1$1[0], ___hasprop(t3$0, "value") && (t4$0 = t3$0.value, t4$0 === context$0 && !(Array.isArray(t4$0) && (t0$2 = t4$0.length, t0$2 === 2 && (t4$0[0] === "expr" && t4$0[1] === "expr"))))))))) {
        rval$0 = ["nostep", form$0];rval$0;
      } else {
        e$0 = excv$0;throw e$0;rval$0;
      }
    }return rval$0;
  };
};expr_mac$0 = function expr_mac(f$1) {
  return function (ph$1$0, info$1, form$1, arg$1) {
    var t0$3 = undefined;var t0$4 = undefined;var otherwise$0 = undefined;var bridge$$7896$0 = undefined;bridge$$7896$0 = ph$1$0;if (Array.isArray(bridge$$7896$0) && (t0$3 = bridge$$7896$0.length, t0$3 === 2 && (bridge$$7896$0[0] === "expr" && bridge$$7896$0[1] === "expr")) || Array.isArray(bridge$$7896$0) && (t0$4 = bridge$$7896$0.length, t0$4 === 2 && (bridge$$7896$0[0] === "expr" && bridge$$7896$0[1] === "head"))) {
      return f$1(info$1, form$1, arg$1);
    } else {
      otherwise$0 = ph$1$0;return ["nostep", form$1];
    }
  };
};expr_mac2$0 = function expr_mac2(mac$0) {
  return function (ph$2$0, info$2, f$2, e$1) {
    var x$0 = undefined;var mac3$0 = undefined;var f$4 = undefined;var x$3 = undefined;var ph$3$0 = undefined;var t0$5 = undefined;var t1$2 = undefined;t0$5 = ph$2$0;t1$2 = t0$5.length;if (t1$2 === 2 && t0$5[0] === "project") {
      ph$3$0 = t0$5[1];if ((x$0 = ph$3$0, x$0 instanceof Array && x$0[0] === "pattern")) {
        mac3$0 = function mac3(c$0, info$3, f$3, temp$0$0) {
          var t0$6 = undefined;var t1$3 = undefined;var x$2 = undefined;var env$0 = undefined;var x$1 = undefined;var t0$7 = undefined;var t1$4 = undefined;var ph$4$0 = undefined;t0$6 = temp$0$0;if (Array.isArray(t0$6) && (t1$3 = t0$6.length, t1$3 === 2 && t0$6[0] === "data")) {
            ph$4$0 = t0$6[1];
          } else {
            ___match_error(temp$0$0);
          }t0$7 = ph$4$0;t1$4 = t0$7.length;if (t1$4 === 3 && t0$7[0] === "use") {
            env$0 = t0$7[1];x$1 = t0$7[2];return ["use", env$0, mac$0.call(info$3, __lt____lt____colon__$0(["data", x$1], e$1))];
          } else {
            x$2 = ph$4$0;return mac$0.call(info$3, __lt____lt____colon__$0(["data", x$2], x$2));
          }
        };return ["unconditional", ["macro", mac3$0]];
      } else {
        f$4 = function f(_ctx$0, _info$0, _form$0, _e$0) {
          return ["data", ["value", true], mac$0.call(_info$0, _e$0)];
        };return ["nostep", ["macro", f$4]];
      }
    } else {
      if ((x$3 = ph$2$0, x$3 instanceof Array && x$3[0] === "expr")) {
        return mac$0.call(info$2, e$1);
      } else {
        return ___match_error(ph$2$0);
      }
    }
  };
};ctx_mac$0 = function ctx_mac(mac$1) {
  return function (ctx$0, info$4, f$5, e$2) {
    return mac$1.call(info$4, ctx$0, e$2);
  };
};_default_proj$0 = function _default_proj(name$0) {
  return function (x$4) {
    return ["send", ["symbol", "throw"], ["send", ["send", ["symbol", "E"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "project"]]]], ["data", ["send", ["symbol", "+"], ["data", ["send", ["symbol", "+"], ["data", ["value", "Cannot project a value with '"], ["value", name$0]]], ["value", "!'"]]]]]];
  };
};value_mac$0 = function value_mac() {
  var name$1 = undefined;var chk$0 = undefined;var proj$0 = undefined;var t0$8 = undefined;var m$0$0 = undefined;m$0$0 = arguments;t0$8 = m$0$0.length;if (t0$8 >= 2 && t0$8 <= 3) {
    name$1 = m$0$0[0];chk$0 = m$0$0[1];if (2 >= t0$8) {
      proj$0 = _default_proj$0(name$1);
    } else {
      proj$0 = m$0$0[2];
    }return function (temp$1$0, temp$2$0, form$2, arg$2) {
      var t0$9 = undefined;var x$5 = undefined;var m$1 = undefined;var x$7 = undefined;var m$3 = undefined;var x$9 = undefined;var m$5$0 = undefined;var ctx$2 = undefined;var ctx$1 = undefined;var ph$5$0 = undefined;t0$9 = temp$1$0;ctx$1 = t0$9;ph$5$0 = t0$9;if ((x$5 = ph$5$0, x$5 instanceof Array && x$5[0] === "check")) {
        m$1 = function m() {
          var x$6 = undefined;var t0$10 = undefined;var t1$5 = undefined;var t2$2 = undefined;var m$2$0 = undefined;m$2$0 = arguments;t0$10 = m$2$0.length;if (t0$10 >= 1 && (Array.prototype.slice.call(m$2$0, 0, -1), t1$5 = m$2$0[t0$10 - 1], Array.isArray(t1$5) && (t2$2 = t1$5.length, t2$2 === 2 && t1$5[0] === "data"))) {
            x$6 = t1$5[1];return chk$0(x$6);
          } else {
            return ___match_error(m$2$0);
          }
        };return ["nostep", ["macro", m$1]];
      } else {
        if ((x$7 = ph$5$0, x$7 instanceof Array && x$7[0] === "project")) {
          m$3 = function m() {
            var x$8 = undefined;var t0$11 = undefined;var t1$6 = undefined;var t2$3 = undefined;var m$4$0 = undefined;m$4$0 = arguments;t0$11 = m$4$0.length;if (t0$11 >= 1 && (Array.prototype.slice.call(m$4$0, 0, -1), t1$6 = m$4$0[t0$11 - 1], Array.isArray(t1$6) && (t2$3 = t1$6.length, t2$3 === 2 && t1$6[0] === "data"))) {
              x$8 = t1$6[1];return proj$0(x$8);
            } else {
              return ___match_error(m$4$0);
            }
          };return ["nostep", ["macro", m$3]];
        } else {
          ctx$2 = ph$5$0;m$5$0 = arg$2;if ((x$9 = m$5$0, x$9 instanceof Array && x$9[0] === "void")) {
            return ["variable", name$1];
          } else {
            return ["send", ["variable", name$1], arg$2];
          }
        }
      }
    };
  } else {
    return ___match_error(m$0$0);
  }
};overridable$0 = function overridable(f$6) {
  return function (temp$3$0, info$5, form$3, arg$3) {
    var t0$12 = undefined;var x$10 = undefined;var other$1 = undefined;var t0$13 = undefined;var t1$7 = undefined;var context$1 = undefined;var ph$6$0 = undefined;t0$12 = temp$3$0;context$1 = t0$12;ph$6$0 = t0$12;if ((x$10 = ph$6$0, x$10 instanceof Array && x$10[0] === "pattern")) {
      return ["nostep", form$3];
    } else {
      t0$13 = ph$6$0;t1$7 = t0$13.length;if (t1$7 === 2 && (t0$13[0] === "expr" && t0$13[1] === "multi")) {
        return ["nostep", form$3];
      } else {
        other$1 = ph$6$0;return f$6(context$1, info$5, form$3, arg$3);
      }
    }
  };
};protected_value$0 = function protected_value(name$2, value$0) {
  return function (ph$7$0, temp$4$0, form$4, arg$4) {
    var x$11 = undefined;var other$3 = undefined;var t0$14 = undefined;var m$6$0 = undefined;var other$2 = undefined;if ((x$11 = ph$7$0, x$11 instanceof Array && x$11[0] === "pattern")) {
      throw ErrorFactory(["syntax", "pattern"]).create("'" + name$2 + "' is not a valid pattern and cannot be redeclared");
    } else {
      other$2 = ph$7$0;m$6$0 = arg$4;if (Array.isArray(m$6$0) && (t0$14 = m$6$0.length, t0$14 === 1 && m$6$0[0] === "void")) {
        return ["value", value$0];
      } else {
        other$3 = m$6$0;return ["send", ["value", value$0], arg$4];
      }
    }
  };
};var_operator$0 = function var_operator(name$3) {
  return function (ph$8$0, temp$5$0, form$5, expr$0) {
    var t0$15 = undefined;var x$12 = undefined;var x$13 = undefined;var x$14 = undefined;var other$4 = undefined;var s$0 = undefined;var t0$17 = undefined;var t1$8 = undefined;var ph$9$0 = undefined;var $$8316$0 = undefined;var $$8317$0 = undefined;var t0$16 = undefined;var m$7$0 = undefined;var sym$0 = undefined;var bridge$$8277$0 = undefined;var env$1 = undefined;t0$15 = temp$5$0;if (___hasprop(t0$15, "env")) {
      env$1 = t0$15.env;
    } else {
      ___match_error(temp$5$0);
    }bridge$$8277$0 = ph$8$0;if ((x$12 = bridge$$8277$0, x$12 instanceof Array && x$12[0] === "check") || (x$13 = bridge$$8277$0, x$13 instanceof Array && x$13[0] === "project")) {
      return ["nostep", form$5];
    } else {
      sym$0 = __amp__(["symbol", name$3], { env: env$1 });m$7$0 = expr$0;if (($$8316$0 = Array.isArray(m$7$0)) && (t0$16 = m$7$0.length, t0$16 === 1 && m$7$0[0] === "void")) {
        return sym$0;
      } else {
        if ($$8316$0 && (t0$16 === 3 && (m$7$0[0] === "data" && (x$14 = m$7$0[1], x$14 instanceof Array && x$14[0] === "void")))) {
          ph$9$0 = m$7$0[2];t0$17 = ph$9$0;if (Array.isArray(t0$17) && (t1$8 = t0$17.length, t1$8 === 2 && t0$17[0] === "symbol")) {
            s$0 = t0$17[1];return ["send", sym$0, ["value", s$0]];
          } else {
            other$4 = ph$9$0;return ["send", sym$0, other$4];
          }
        } else {
          return ___match_error(m$7$0);
        }
      }
    }
  };
};accum_flags$0 = function accum_flags() {
  var make$0 = undefined;var mac$2 = undefined;var also_values$0 = undefined;var t0$18 = undefined;var m$8$0 = undefined;m$8$0 = arguments;t0$18 = m$8$0.length;if (t0$18 >= 1 && t0$18 <= 2) {
    mac$2 = m$8$0[0];if (1 >= t0$18) {
      also_values$0 = true;
    } else {
      also_values$0 = m$8$0[1];
    }make$0 = function make(flags$0) {
      return function (context$2, info$6, form$6, ph$10$0) {
        var other$5 = undefined;var flag$1 = undefined;var flag$0 = undefined;var $$8393$0 = undefined;var t0$19 = undefined;var t1$9 = undefined;var t2$4 = undefined;var t3$1 = undefined;var t4$1 = undefined;var t5$0 = undefined;var t6$0 = undefined;var t7$0 = undefined;var t8$0 = undefined;var t9$0 = undefined;t0$19 = ph$10$0;if (Array.isArray(t0$19) && (t1$9 = t0$19.length, t1$9 === 2 && (t0$19[0] === "value" && (flag$0 = t0$19[1], also_values$0)))) {
          return ["macro", make$0(flags$0.concat([flag$0]))];
        } else {
          t1$9 = t0$19.length;if (t1$9 === 3 && (t0$19[0] === "send" && (t2$4 = t0$19[1], Array.isArray(t2$4) && (t3$1 = t2$4.length, t3$1 === 2 && (t2$4[0] === "symbol" && (t2$4[1] === "." && (t4$1 = t0$19[2], Array.isArray(t4$1) && (t5$0 = t4$1.length, t5$0 === 3 && (t4$1[0] === "data" && (t6$0 = t4$1[1], Array.isArray(t6$0) && (t7$0 = t6$0.length, t7$0 === 1 && (t6$0[0] === "void" && (t8$0 = t4$1[2], Array.isArray(t8$0) && (t9$0 = t8$0.length, t9$0 === 2 && t8$0[0] === "symbol")))))))))))))) {
            flag$1 = t8$0[1];return ["macro", make$0(flags$0.concat([flag$1]))];
          } else {
            other$5 = ph$10$0;return mac$2(context$2, info$6, form$6, other$5, flags$0);
          }
        }
      };
    };return make$0([]);
  } else {
    return ___match_error(m$8$0);
  }
};build_loop$0 = function build_loop(info$7, env$2, form$7, li$0, clauses$0, wrap$0, pre$0, post$0, opt$0) {
  var t0$20 = undefined;var t0$21 = undefined;var accum$0 = undefined;var lbl$0 = undefined;var freshenv$0 = undefined;var i$0 = undefined;var len$0 = undefined;var $targ$0 = undefined;var first_mac$0 = undefined;var $targ$1 = undefined;var last_mac$0 = undefined;var newscope$0 = undefined;var m$9 = undefined;if (env$2) {
    lbl$0 = __amp__(["value", info$7.gensym()], { env: env$2 });
  } else {
    lbl$0 = ["value", info$7.gensym()];
  }freshenv$0 = info$7.expander.mkenv();i$0 = __amp__(["symbol", "i"], { env: freshenv$0 });len$0 = __amp__(["symbol", "len"], { env: freshenv$0 });$targ$0 = function (temp$6$0, temp$7$0, form$8, subp$0) {
    var x$15 = undefined;if ((x$15 = temp$6$0, x$15 instanceof Array && x$15[0] === "pattern")) {} else {
      ___match_error(temp$6$0);
    }return ["test", ["send", ["symbol", "==="], ["data", i$0, ["value", 0]]], subp$0];
  };t0$20 = getProjector(drop_ctx$0)($targ$0);if (t0$20[0]) {
    first_mac$0 = t0$20[1];
  } else {
    ___match_error($targ$0);
  }$targ$1 = function (temp$8$0, temp$9$0, form$9, subp$1) {
    var x$16 = undefined;if ((x$16 = temp$8$0, x$16 instanceof Array && x$16[0] === "pattern")) {} else {
      ___match_error(temp$8$0);
    }return ["test", ["send", ["symbol", "==="], ["data", i$0, ["send", ["symbol", "-"], ["data", len$0, ["value", 1]]]]], subp$1];
  };t0$21 = getProjector(drop_ctx$0)($targ$1);if (t0$21[0]) {
    last_mac$0 = t0$21[1];
  } else {
    ___match_error($targ$1);
  }newscope$0 = Scope$0(info$7.scope);env$2.bind(newscope$0, "first", ["macro", first_mac$0]);env$2.bind(newscope$0, "last", ["macro", last_mac$0]);m$9 = __lt____lt____colon__$0(["symbol", "m"], form$7);if (opt$0.forof) {
    return ["multi", pre$0, ["send", ["send", ["symbol", "for"], lbl$0], ["data", ["send", ["symbol", "of"], ["data", m$9, li$0]], parse_clauses$0(info$7.with_scope(newscope$0), m$9, clauses$0, __amp__(opt$0, { wrap: wrap$0 }))]], post$0];
  } else {
    return ["multi", pre$0, ["send", ["symbol", "let"], ["data", ["multi", ["send", ["symbol", "="], ["data", ["symbol", "temp"], li$0]], ["send", ["symbol", "="], ["data", len$0, ["send", ["symbol", "temp"], ["send", ["symbol", "."], ["data", ["void"], ["symbol", "length"]]]]]]], ["send", ["send", ["symbol", "for"], lbl$0], ["data", ["multi", ["send", ["symbol", "="], ["data", ["send", ["symbol", "var"], i$0], ["value", 0]]], ["send", ["symbol", "<"], ["data", i$0, len$0]], ["send", ["symbol", "++"], ["data", i$0, ["void"]]]], ["multi", ["send", ["symbol", "="], ["data", m$9, ["send", ["symbol", "___js_fetch"], ["data", ["symbol", "temp"], i$0]]]], parse_clauses$0(info$7.with_scope(newscope$0), m$9, clauses$0, __amp__(opt$0, (accum$0 = {}, accum$0.wrap = function wrap(x$17) {
      return wrap$0(x$17, i$0);
    }, accum$0)))]]]]], post$0];
  }
};partial_pattern$0 = function partial_pattern(operator$0) {
  var x$18 = undefined;var m$10$0 = undefined;var op$0 = undefined;m$10$0 = operator$0;if ((x$18 = m$10$0, x$18 instanceof Array && x$18[0] === "symbol")) {
    op$0 = operator$0;
  } else {
    if (typeof m$10$0 === "string") {
      op$0 = ["variable", operator$0];
    } else {
      op$0 = ___match_error(m$10$0);
    }
  }return function (context$3, temp$10$0, form$10, expr$1) {
    var x$19 = undefined;var subp2$0 = undefined;var m$12 = undefined;var other$6 = undefined;var subp$2 = undefined;var val$0 = undefined;var $$8589$0 = undefined;var $$8590$0 = undefined;var $$8591$0 = undefined;var t0$22 = undefined;var t1$10 = undefined;var t2$5 = undefined;var m$11$0 = undefined;m$11$0 = [context$3, expr$1];if (($$8589$0 = Array.isArray(m$11$0)) && (t0$22 = m$11$0.length, ($$8591$0 = t0$22 === 2) && ((x$19 = m$11$0[0], x$19 instanceof Array && x$19[0] === "pattern") && (t1$10 = m$11$0[1], Array.isArray(t1$10) && (t2$5 = t1$10.length, t2$5 === 3 && t1$10[0] === "data"))))) {
      subp$2 = t1$10[1];val$0 = t1$10[2];if (equal(subp$2, ["void"])) {
        subp2$0 = ["ignore"];
      } else {
        subp2$0 = subp$2;
      }m$12 = mac1$0(function (x$20) {
        return ["send", op$0, ["data", x$20, val$0]];
      });return ["check", m$12, subp2$0];
    } else {
      if ($$8591$0 && (m$11$0[0], t1$10 = m$11$0[1], Array.isArray(t1$10) && (t2$5 = t1$10.length, t2$5 === 1 && t1$10[0] === "void"))) {
        return op$0;
      } else {
        other$6 = m$11$0;return ["send", op$0, expr$1];
      }
    }
  };
};make_assigner$0 = function make_assigner(op$1) {
  return function (context$4, temp$11$0, form$11, temp$12$0) {
    var t0$23 = undefined;var t1$11 = undefined;var a$0 = undefined;var b$0 = undefined;t0$23 = temp$12$0;if (Array.isArray(t0$23) && (t1$11 = t0$23.length, t1$11 === 3 && t0$23[0] === "data")) {
      a$0 = t0$23[1];b$0 = t0$23[2];
    } else {
      ___match_error(temp$12$0);
    }return ["assign", a$0, ["send", ["symbol", op$1], ["data", a$0, b$0]]];
  };
};disregard_specials$0 = function disregard_specials(temp$13$0, value$1) {
  var t0$24 = undefined;var t1$12 = undefined;var kind$0 = undefined;var expr$2 = undefined;t0$24 = temp$13$0;if (Array.isArray(t0$24) && (t1$12 = t0$24.length, t1$12 === 2 && t0$24[0] === "special")) {
    kind$0 = t0$24[1];expr$2 = t0$24;
  } else {
    ___match_error(temp$13$0);
  }throw ErrorFactory(["syntax", "pattern", "special"]).create("Special token cannot be used here", { special: expr$2 });
};pattern_handlers$0 = { declare_variables: __amp____colon__({ allow_nested: true, allow_arguments: true, special: disregard_specials$0 }, __amp____colon__((accum$1 = {}, accum$1.assign = function assign(temp$14$0, value$2) {
    var t0$25 = undefined;var v$1 = undefined;var name$4 = undefined;var t0$26 = undefined;var t1$13 = undefined;var v$0 = undefined;var ph$11$0 = undefined;t0$25 = temp$14$0;v$0 = t0$25;ph$11$0 = t0$25;t0$26 = ph$11$0;t1$13 = t0$26.length;if (t1$13 === 2 && t0$26[0] === "symbol") {
      name$4 = t0$26[1];return ["do", __lt____lt____colon__$0(["assign", v$0, __amp____colon__(value$2, { name: name$4 })], v$0)];
    } else {
      v$1 = ph$11$0;return ["do", __lt____lt____colon__$0(["assign", v$1, value$2], v$1)];
    }
  }, accum$1), __amp____colon__({ tags: { declare_mode: "unqualified" } }, __amp____colon__((accum$2 = {}, accum$2.declare = function declare(temp$15$0, vars$0) {
    var m$13 = undefined;var acc$0 = undefined;var temp$16 = undefined;acc$0 = [];temp$16 = null;m$13 = null;$4: for (var _iterator = vars$0[Symbol.iterator](), _step; !(_step = _iterator.next()).done;) {
      m$13 = _step.value;
      var m$14$0 = undefined;var v$2 = undefined;v$2 = m$13;m$14$0 = v$2.declare_mode;if (m$14$0 === "set") {
        temp$16 = ["splice"];
      } else {
        if (m$14$0 === "let") {
          temp$16 = ["declare", __amp__(v$2, { mutable: false })];
        } else {
          if (m$14$0 === "var") {
            temp$16 = ["declare", __amp__(v$2, { mutable: true })];
          } else {
            if (m$14$0 === "unqualified") {
              temp$16 = ["declare", __amp__(v$2, { mutable: false, use_previous: true })];
            } else {
              temp$16 = ___match_error(m$14$0);
            }
          }
        }
      }acc$0.push(temp$16);
    }return acc$0;
  }, accum$2), __amp____colon__((accum$3 = {}, accum$3.success = function success(temp$17$0) {
    return ["multi"];
  }, accum$3), __amp____colon__((accum$4 = {}, accum$4.failure = function failure(target$2) {
    return match_error$0(target$2);
  }, accum$4), { wrapOrder: 0 })))))), build_object: __amp____colon__({ strings_as_variables: true, allow_nested: true, allow_arguments: true, special: disregard_specials$0 }, __amp____colon__((accum$5 = {}, accum$5.assign = function assign(temp$18$0, value$3, temp$19$0) {
    var t0$27 = undefined;var t0$28 = undefined;var bridge$$8815$0 = undefined;var v$3 = undefined;bridge$$8815$0 = temp$18$0;if (Array.isArray(bridge$$8815$0) && (t0$27 = bridge$$8815$0.length, t0$27 === 2 && (bridge$$8815$0[0] === "symbol" && (v$3 = bridge$$8815$0[1], true))) || Array.isArray(bridge$$8815$0) && (t0$28 = bridge$$8815$0.length, t0$28 === 2 && (bridge$$8815$0[0] === "value" && (v$3 = bridge$$8815$0[1], true)))) {} else {
      ___match_error(temp$18$0);
    }return ["do", __lt____lt____colon__$0(["assign", ["send", ["symbol", "accum"], ["value", v$3]], value$3], v$3)];
  }, accum$5), __amp____colon__((accum$6 = {}, accum$6.declare = function declare(temp$20$0, vars$1) {
    return [["declare", ["symbol", "accum"], ["data", ["symbol", "="]]]];
  }, accum$6), __amp____colon__((accum$7 = {}, accum$7.success = function success(temp$21$0) {
    return ["symbol", "accum"];
  }, accum$7), __amp____colon__((accum$8 = {}, accum$8.failure = function failure(target$3) {
    return match_error$0(target$3);
  }, accum$8), { wrapOrder: 0 }))))) };named_statement_matcher$0 = function named_statement_matcher(name$5) {
  var t0$30 = undefined;var $targ$2 = undefined;var p$0 = undefined;var $targ$3 = undefined;$targ$2 = function (ph$12$0) {
    var t0$29 = undefined;var t1$14 = undefined;var t2$6 = undefined;var t3$2 = undefined;t0$29 = ph$12$0;t1$14 = t0$29.length;if (t1$14 === 3 && (t0$29[0] === "send" && (t2$6 = t0$29[1], Array.isArray(t2$6) && (t3$2 = t2$6.length, t3$2 === 2 && (t2$6[0] === "symbol" && t2$6[1] === name$5))))) {
      t0$29[2];return true;
    } else {
      return false;
    }
  };t0$30 = getProjector(predicate)($targ$2);if (t0$30[0]) {
    p$0 = t0$30[1];
  } else {
    ___match_error($targ$2);
  }$targ$3 = function () {
    return name$5;
  };p$0.toString = $targ$3;[];return p$0;
};grab_statements$0 = function grab_statements() {
  var stmt$0 = undefined;var rest$0 = undefined;var t0$33 = undefined;var t1$17 = undefined;var m$16$0 = undefined;var m$17 = undefined;var n$0 = undefined;var bridge$$9038$0 = undefined;var m$20$0 = undefined;var matches$0 = undefined;var rest$2 = undefined;var t0$36 = undefined;var t1$19 = undefined;var t0$37 = undefined;var t1$20 = undefined;var $targ$5 = undefined;var one$0 = undefined;var rest1$0 = undefined;var $targ$6 = undefined;var two$0 = undefined;var rest2$0 = undefined;var pattern$2 = undefined;var others$0 = undefined;var pattern$1 = undefined;var min$0 = undefined;var max$0 = undefined;var err$0 = undefined;var opts$0 = undefined;var pattern$0 = undefined;var $$8932$0 = undefined;var $$8933$0 = undefined;var t0$32 = undefined;var t1$16 = undefined;var descr$0 = undefined;var ph$14$0 = undefined;var all$0 = undefined;var transform$0 = undefined;var t0$31 = undefined;var t1$15 = undefined;var m$15$0 = undefined;m$15$0 = arguments;t0$31 = m$15$0.length;if (t0$31 >= 2 && t0$31 <= 3) {
    t1$15 = m$15$0[0];descr$0 = t1$15;ph$14$0 = t1$15;all$0 = m$15$0[1];if (2 >= t0$31) {
      transform$0 = function (x$21) {
        return x$21;
      };
    } else {
      transform$0 = m$15$0[2];
    }t0$32 = ph$14$0;if (typeof t0$32 === "function") {
      pattern$0 = t0$32;m$16$0 = all$0;if (Array.isArray(m$16$0) && (t0$33 = m$16$0.length, t0$33 >= 1 && (t1$17 = m$16$0[0], getChecker(pattern$0)(t1$17)))) {
        stmt$0 = t1$17;rest$0 = Array.prototype.slice.call(m$16$0, 1);return [transform$0(stmt$0), rest$0];
      } else {
        return [null, all$0];
      }
    } else {
      t1$16 = t0$32.length;if (t1$16 >= 1 && t0$32[0] === "any") {
        opts$0 = Array.prototype.slice.call(t0$32, 1);m$17 = null;$5: for (var _iterator2 = opts$0[Symbol.iterator](), _step2; !(_step2 = _iterator2.next()).done;) {
          m$17 = _step2.value;
          var m$19 = undefined;var rest$1 = undefined;var $$9008$0 = undefined;var $$9009$0 = undefined;var $$9010$0 = undefined;var t0$34 = undefined;var m$18$0 = undefined;var opt$1 = undefined;opt$1 = m$17;m$18$0 = grab_statements$0(opt$1, all$0, transform$0);if (($$9008$0 = Array.isArray(m$18$0)) && (t0$34 = m$18$0.length, ($$9010$0 = t0$34 === 2) && m$18$0[0] === null)) {
            m$18$0[1];undefined;
          } else {
            if ($$9010$0) {
              m$19 = m$18$0[0];rest$1 = m$18$0[1];return [m$19, rest$1];
            } else {
              ___match_error(m$18$0);
            }
          }
        }return [null, all$0];
      } else {
        if (t1$16 >= 2 && t1$16 <= 5 && t0$32[0] === "multiple") {
          pattern$1 = t0$32[1];if (2 >= t1$16) {
            min$0 = 0;
          } else {
            min$0 = t0$32[2];
          }if (3 >= t1$16) {
            max$0 = Infinity;
          } else {
            max$0 = t0$32[3];
          }if (4 >= t1$16) {
            err$0 = true;
          } else {
            err$0 = t0$32[4];
          }matches$0 = [];rest$2 = all$0;$6: while (true) {
            var t0$35 = undefined;var t1$18 = undefined;var $targ$4 = undefined;var _matches$0 = undefined;$targ$4 = grab_statements$0(pattern$1, rest$2, transform$0);t0$35 = $targ$4;if (Array.isArray(t0$35) && (t1$18 = t0$35.length, t1$18 === 2)) {
              _matches$0 = t0$35[0];rest$2 = t0$35[1];
            } else {
              ___match_error($targ$4);
            }[_matches$0, rest$2];if (equal(_matches$0, null)) {
              break $6;
            }matches$0.push(_matches$0);if (equal(rest$2, [])) {
              break $6;
            }
          }m$20$0 = matches$0.length;n$0 = m$20$0;bridge$$9038$0 = m$20$0;if (bridge$$9038$0 < min$0 || bridge$$9038$0 > max$0) {
            if (err$0) {
              throw ErrorFactory(["syntax", "wrong_multiplicity"]).create(n$0 + " instances of the pattern '" + pattern$1 + "' were found." + " between " + min$0 + " and " + max$0 + " were expected.", { pattern: pattern$1, matches: matches$0 });
            }return [["multiple"], all$0];
          } else {
            return [["multiple"].concat(matches$0), rest$2];
          }
        } else {
          if (t1$16 === 1 && t0$32[0] === "seq") {
            return [["seq"], all$0];
          } else {
            if (t1$16 >= 2 && t0$32[0] === "seq") {
              pattern$2 = t0$32[1];others$0 = Array.prototype.slice.call(t0$32, 2);$targ$5 = grab_statements$0(pattern$2, all$0, transform$0);t0$36 = $targ$5;if (Array.isArray(t0$36) && (t1$19 = t0$36.length, t1$19 === 2)) {
                one$0 = t0$36[0];rest1$0 = t0$36[1];
              } else {
                ___match_error($targ$5);
              }[one$0, rest1$0];if (one$0 === null) {
                return [null, all$0];
              }$targ$6 = grab_statements$0(["seq"].concat(others$0), rest1$0, transform$0);t0$37 = $targ$6;if (Array.isArray(t0$37) && (t1$20 = t0$37.length, t1$20 === 2)) {
                two$0 = t0$37[0];rest2$0 = t0$37[1];
              } else {
                ___match_error($targ$6);
              }[two$0, rest2$0];if (two$0 === null) {
                return [null, all$0];
              }return [["seq", one$0].concat(two$0.slice(1)), rest2$0];
            } else {
              throw ErrorFactory(["unknown_pattern"]).create(descr$0);
            }
          }
        }
      }
    }
  } else {
    return ___match_error(m$15$0);
  }
};flatmacro$0 = function flatmacro(pattern$3, assemble$0) {
  return ["restmacro", function (stmts$0) {
    var t0$38 = undefined;var t1$21 = undefined;var $targ$7 = undefined;var result$0 = undefined;var rest$3 = undefined;$targ$7 = grab_statements$0(pattern$3, stmts$0);t0$38 = $targ$7;if (Array.isArray(t0$38) && (t1$21 = t0$38.length, t1$21 === 2)) {
      result$0 = t0$38[0];rest$3 = t0$38[1];
    } else {
      ___match_error($targ$7);
    }[result$0, rest$3];return [assemble$0(result$0)].concat(rest$3);
  }];
};AssignmentHandler$0 = function AssignmentHandler(temp$22$0, temp$23$0) {
  var $targ$8 = undefined;var $it$0 = undefined;if (!getChecker(AssignmentHandler$0)(this)) {
    $it$0 = Object.create(AssignmentHandler$0.prototype);
  } else {
    $it$0 = this;
  }$it$0.subp = temp$22$0;$it$0.wrapPlaceholder = temp$23$0;$targ$8 = 1;$it$0.wrapAssignmentOrder = $targ$8;[];return $it$0;
};AssignmentHandler$0.prototype.expand = function expand(info$8) {
  var $targ$9 = undefined;var $it$1 = undefined;var self$0 = undefined;$it$1 = this;self$0 = this;$targ$9 = info$8.env.mark(["symbol", info$8.gensym("$get")]);$it$1.placeholder = $targ$9;[];if ($it$1.subp) {
    return ["all", $it$1.subp, $it$1.placeholder];
  } else {
    return $it$1.placeholder;
  }
};AssignmentHandler$0.prototype.wrapAssignment = function wrapAssignment(expr$3, info$9, opt$2) {
  var $it$2 = undefined;var self$1 = undefined;$it$2 = this;self$1 = this;return ["splice", expr$3, $it$2.wrapPlaceholder($it$2.placeholder)];
};__amp____colon__(AssignmentHandler$0, __amp____colon__((accum$9 = {}, accum$9["::name"] = "AssignmentHandler", accum$9), (accum$10 = {}, accum$10["::egclass"] = true, accum$10)));qqstruct$0 = function qqstruct(name$6, args$0) {
  return ["data", ["value", name$6]].concat(args$0);
};qq$0 = function qq(temp$24$0) {
  var t0$39 = undefined;var m$21 = undefined;var acc$1 = undefined;var temp$25 = undefined;var m$22 = undefined;var acc$2 = undefined;var temp$26 = undefined;var m$23 = undefined;var acc$3 = undefined;var temp$27 = undefined;var name$7 = undefined;var args$2 = undefined;var ops$0 = undefined;var args$1 = undefined;var insert$2 = undefined;var insert$1 = undefined;var insert$0 = undefined;var v$4 = undefined;var s$2 = undefined;var s$1 = undefined;var $$9231$0 = undefined;var $$9232$0 = undefined;var $$9233$0 = undefined;var $$9234$0 = undefined;var $$9235$0 = undefined;var $$9236$0 = undefined;var $$9237$0 = undefined;var $$9238$0 = undefined;var $$9239$0 = undefined;var t0$40 = undefined;var t1$22 = undefined;var t2$7 = undefined;var t3$3 = undefined;var t4$2 = undefined;var t5$1 = undefined;var t6$1 = undefined;var t7$1 = undefined;var expr$4 = undefined;var ph$15$0 = undefined;t0$39 = temp$24$0;expr$4 = t0$39;ph$15$0 = t0$39;t0$40 = ph$15$0;t1$22 = t0$40.length;if (($$9233$0 = t1$22 === 2) && t0$40[0] === "symbol") {
    s$1 = t0$40[1];return qqstruct$0("symbol", [["value", s$1]]);
  } else {
    if ($$9233$0 && t0$40[0] === "char") {
      s$2 = t0$40[1];return qqstruct$0("char", [["value", s$2]]);
    } else {
      if (t1$22 === 1 && t0$40[0] === "void") {
        return qqstruct$0("void", []);
      } else {
        if (t1$22 === 2 && t0$40[0] === "value") {
          v$4 = t0$40[1];return qqstruct$0("value", [expr$4]);
        } else {
          if (($$9233$0 = t1$22 === 3) && (($$9234$0 = t0$40[0] === "send") && (t2$7 = t0$40[1], ($$9236$0 = Array.isArray(t2$7)) && (t3$3 = t2$7.length, ($$9238$0 = t3$3 === 2) && (($$9239$0 = t2$7[0] === "symbol") && (t2$7[1] === "^" && (t4$2 = t0$40[2], Array.isArray(t4$2) && (t5$1 = t4$2.length, t5$1 === 3 && (t4$2[0] === "data" && (t6$1 = t4$2[1], Array.isArray(t6$1) && (t7$1 = t6$1.length, t7$1 === 1 && t6$1[0] === "void"))))))))))) {
            insert$0 = t4$2[2];return insert$0;
          } else {
            if ($$9239$0 && (t2$7[1] === "^=" && (t4$2 = t0$40[2], Array.isArray(t4$2) && (t5$1 = t4$2.length, t5$1 === 3 && (t4$2[0] === "data" && (t6$1 = t4$2[1], Array.isArray(t6$1) && (t7$1 = t6$1.length, t7$1 === 1 && t6$1[0] === "void"))))))) {
              insert$1 = t4$2[2];return qqstruct$0("value", [insert$1]);
            } else {
              if ($$9239$0 && (t2$7[1] === "^*" && (t4$2 = t0$40[2], Array.isArray(t4$2) && (t5$1 = t4$2.length, t5$1 === 3 && (t4$2[0] === "data" && (t6$1 = t4$2[1], Array.isArray(t6$1) && (t7$1 = t6$1.length, t7$1 === 1 && t6$1[0] === "void"))))))) {
                insert$2 = t4$2[2];return ["send", ["symbol", "*"], ["data", ["void"], insert$2]];
              } else {
                if (t1$22 >= 2 && t0$40[0] === "mismix") {
                  ops$0 = t0$40[1];args$1 = Array.prototype.slice.call(t0$40, 2);return qqstruct$0("mismix", [["data"].concat((acc$1 = [], temp$25 = null, m$21 = null, (function () {
                    $7: for (var _iterator3 = ops$0[Symbol.iterator](), _step3; !(_step3 = _iterator3.next()).done;) {
                      m$21 = _step3.value;
                      var op$2 = undefined;op$2 = m$21;temp$25 = qq$0(op$2);acc$1.push(temp$25);
                    }
                  })(), acc$1))].concat((acc$2 = [], temp$26 = null, m$22 = null, (function () {
                    $8: for (var _iterator4 = args$1[Symbol.iterator](), _step4; !(_step4 = _iterator4.next()).done;) {
                      m$22 = _step4.value;
                      var arg$5 = undefined;arg$5 = m$22;temp$26 = qq$0(arg$5);acc$2.push(temp$26);
                    }
                  })(), acc$2)));
                } else {
                  if (t1$22 >= 1) {
                    name$7 = t0$40[0];args$2 = Array.prototype.slice.call(t0$40, 1);return qqstruct$0(name$7, (acc$3 = [], temp$27 = null, m$23 = null, (function () {
                      $9: for (var _iterator5 = args$2[Symbol.iterator](), _step5; !(_step5 = _iterator5.next()).done;) {
                        m$23 = _step5.value;
                        var arg$6 = undefined;arg$6 = m$23;temp$27 = qq$0(arg$6);acc$3.push(temp$27);
                      }
                    })(), acc$3));
                  } else {
                    return ___match_error(ph$15$0);
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};$targ$10 = embed_location$0;exports.embed_location = $targ$10;[];$targ$11 = error_embed_location$0;exports.error_embed_location = $targ$11;[];$targ$12 = match_error$0;exports.match_error = $targ$12;[];$targ$13 = drop_ctx$0;exports.drop_ctx = $targ$13;[];$targ$14 = expr_mac$0;exports.expr_mac = $targ$14;[];$targ$15 = expr_mac2$0;exports.expr_mac2 = $targ$15;[];$targ$16 = ctx_mac$0;exports.ctx_mac = $targ$16;[];$targ$17 = value_mac$0;exports.value_mac = $targ$17;[];$targ$18 = overridable$0;exports.overridable = $targ$18;[];$targ$19 = protected_value$0;exports.protected_value = $targ$19;[];$targ$20 = var_operator$0;exports.var_operator = $targ$20;[];$targ$21 = accum_flags$0;exports.accum_flags = $targ$21;[];$targ$22 = build_loop$0;exports.build_loop = $targ$22;[];$targ$23 = partial_pattern$0;exports.partial_pattern = $targ$23;[];$targ$24 = make_assigner$0;exports.make_assigner = $targ$24;[];$targ$25 = pattern_handlers$0;exports.pattern_handlers = $targ$25;[];$targ$26 = Body$0;exports.Body = $targ$26;[];$targ$27 = named_statement_matcher$0;exports.named_statement_matcher = $targ$27;[];$targ$28 = grab_statements$0;exports.grab_statements = $targ$28;[];$targ$29 = flatmacro$0;exports.flatmacro = $targ$29;[];$targ$30 = AssignmentHandler$0;exports.AssignmentHandler = $targ$30;[];$targ$31 = qq$0;exports.qq = $targ$31;[];
//# sourceMappingURL=helpers.js.map

