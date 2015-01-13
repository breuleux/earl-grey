"use strict";
require("earlgrey-runtime");
var $5868 = (function(o, m) {
  if (typeof(m) === 'string' || typeof(m) === 'number') {
    return o[m];
  } else {
    return o['::send'](m);
  }
});
var id$4152;
var id_f$4153;
var numr$4154;
var numr_f$4155;
var num$4156;
var num_f$4157;
var str$4158;
var str_f$4159;
var op$4160;
var op2$4161;
var op3$4162;
var op4$4163;
var op_f$4164;
var indent$4165;
var indent_f$4166;
var indent2$4167;
var indent2_f$4168;
var cmnt$4169;
var cmnt_f$4170;
var unkn$4171;
var unkn_f$4172;
var $4087$4102;
var Location$4103;
var __lt____lt____colon__$4104;
var special_ops$4105;
var regexps$4106;
var ws_re$4107;
var eol_re$4108;
var produce$4109;
var indent_tracker$4110;
var process_indent$4111;
var disambiguate_fixity$4112;
var alternate_operators$4113;
var fill_locations$4114;
var tokenize$4115;
($4087$4102 = require("./location"));
(Location$4103 = $4087$4102.Location);
(__lt____lt____colon__$4104 = $4087$4102["<<:"]);
(special_ops$4105 = ({
  "(": "PFX",
  "[": "PFX",
  "{": "PFX",
  ")": "SFX",
  "]": "SFX",
  "}": "SFX",
  ",": "IFX",
  ".": "PFX",
  "'": "PFX",
  "not": "PFX"
}));
(regexps$4106 = (((id$4152 = RegExp("(?:^(?:\\.\\.\\.|(?:(?:[a-zA-Z$_]|(?:\\\\_.))(?:(?:[a-zA-Z$_0-9]|(?:\\\\_.))*))))", ""))), ((id_f$4153 = (function(m$4180) {
  return ["ID", m$4180[0].replace(RegExp("\\\\_(.)", "g"), (function($4183$4186, x$4187) {
    $4183$4186;
    return x$4187;
  }))];
}))), ((numr$4154 = RegExp("(?:^((?:\\d+))[rR]((?:[A-Za-z0-9_]+))(?:(?:\\.((?:[A-Za-z0-9_]+)))?))", ""))), ((numr_f$4155 = (function(m$4200) {
  var t0$4210;
  var t1$4211;
  var frac$4231;
  var radix$4205;
  var intp$4206;
  var frac$4207;
  var value$4208;
  (t0$4210 = m$4200);
  if (((t0$4210 instanceof Array) && (((t1$4211 = t0$4210.length)), (t1$4211 === 4)))) {
    t0$4210[0];
    (radix$4205 = t0$4210[1]);
    (intp$4206 = t0$4210[2]);
    (frac$4207 = t0$4210[3]);
  } else {
    ___match_error(m$4200, "/home/olivier/git/earl-grey/src/lex.eg", 1192, 1193);
  }
  (value$4208 = parseInt(intp$4206.replace(RegExp("_", "g"), ""), radix$4205));
  if (frac$4207) {
    (frac$4231 = frac$4207.replace(RegExp("_", "g"), ""));
    (value$4208 = (value$4208 + (parseInt(frac$4207, radix$4205) / Math.pow(radix$4205, frac$4207.length))));
  }
  return ["NUM", value$4208];
}))), ((num$4156 = RegExp("(?:^((?:[0-9_]+))(?:(?:\\.((?:\\d+)))?)(?:(?:[eE]((?:[+-]?)(?:[0-9_]+)))?))", ""))), ((num_f$4157 = (function(m$4246) {
  return ["NUM", parseFloat(m$4246[0].replace(RegExp("_", "g"), ""))];
}))), ((str$4158 = RegExp("(?:^\"((?:(?:(?:\\\\.)|[^\"])*))\")", ""))), ((str_f$4159 = (function(m$4256) {
  var rx$4271;
  var f$4272;
  var repl$4261;
  var r$4262;
  (repl$4261 = ({
    "b": String.fromCharCode(8),
    "f": String.fromCharCode(12),
    "n": "\n",
    "r": String.fromCharCode(13),
    "t": String.fromCharCode(9)
  }));
  (r$4262 = (((rx$4271 = RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\.", "g"))), ((f$4272 = (function($4279$4282) {
    var chr$4323;
    var digits$4304;
    var t0$4298;
    var t1$4299;
    var t2$4300;
    var $4284$4293;
    var ph$4287;
    (ph$4287 = $4279$4282);
    ($4284$4293 = ph$4287);
    (t0$4298 = getProjector(RegExp("^(?:\\\\u|\\\\x)(.*)", ""))($4284$4293));
    if ((t0$4298[0] && (((t1$4299 = t0$4298[1])), (((t2$4300 = t1$4299.length)), (t2$4300 === 2))))) {
      t1$4299[0];
      (digits$4304 = t1$4299[1]);
      return String.fromCharCode(parseInt(digits$4304, 16));
    } else {
      (t0$4298 = getProjector(RegExp("^.(.)", ""))($4284$4293));
      if ((t0$4298[0] && (((t1$4299 = t0$4298[1])), (((t2$4300 = t1$4299.length)), (t2$4300 === 2))))) {
        t1$4299[0];
        (chr$4323 = t1$4299[1]);
        return ($5868(repl$4261, chr$4323) || chr$4323);
      } else {
        ___match_error($4284$4293);
      }
    }
  }))), m$4256[1].replace(rx$4271, f$4272)));
  return ["STR", r$4262];
}))), ((op$4160 = RegExp("(?:^(?:[+\\-*/~\\^<>=%&|?!@#.:']+))", ""))), ((op2$4161 = RegExp("(?:^[\\[\\{\\}\\],])", ""))), ((op3$4162 = RegExp("(?:^(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:with|where)|when)|and)|not)|or)|in)|mod)|each)|as)|of)(?:(?:[+\\-*/~\\^<>=%&|?!@#.:']+)|\\b))", ""))), ((op4$4163 = RegExp("(?:^`((?:[A-Za-z0-9_$]+))`)", ""))), ((op_f$4164 = (function(m$4361, column$4362) {
  var fixity$4394;
  var otherwise$4400;
  var $4370$4383;
  var $4366$4377;
  var op$4371;
  (op$4371 = (m$4361[1] || m$4361[0]));
  ($4366$4377 = null);
  $4366$4377;
  if ((op$4371 === "|")) {
    return ["INDENT", (column$4362 - 1)];
  } else {
    if ((op$4371 in special_ops$4105)) {
      (fixity$4394 = $5868(special_ops$4105, op$4371));
      return ["OP", fixity$4394, op$4371];
    } else {
      (otherwise$4400 = $4366$4377);
      return ["OP", "?FX", op$4371];
    }
  }
}))), ((indent$4165 = RegExp("(?:^(?:(?:\n(?: *);(?:[^\n]*))*)(?:(?:\n((?: *)))+))", ""))), ((indent_f$4166 = (function(m$4410) {
  var ilen$4414;
  (ilen$4414 = m$4410[1].length);
  return ["INDENT", ilen$4414];
}))), ((indent2$4167 = RegExp("(?:^\\\\\\\\)", ""))), ((indent2_f$4168 = (function(m$4426, column$4427) {
  return ["INDENT", (column$4427 - 2)];
}))), ((cmnt$4169 = RegExp("(?:^;(?:[^\n]*))", ""))), ((cmnt_f$4170 = (function(m$4437) {
  return ["IGNORE"];
}))), ((unkn$4171 = RegExp("(?:^.)", ""))), ((unkn_f$4172 = (function(m$4447) {
  return ["ILLEGAL", m$4447[0]];
}))), [[op3$4162, op_f$4164], [id$4152, id_f$4153], [numr$4154, numr_f$4155], [num$4156, num_f$4157], [str$4158, str_f$4159], [op$4160, op_f$4164], [op2$4161, op_f$4164], [op4$4163, op_f$4164], [indent$4165, indent_f$4166], [indent2$4167, indent2_f$4168], [cmnt$4169, cmnt_f$4170], [unkn$4171, unkn_f$4172]]));
(ws_re$4107 = RegExp("(?:^(?: *)(?:(?:\n(?: *)\\\\ (?: *))*))", ""));
(eol_re$4108 = RegExp("(?:^(?: *)(?:\n|$))", ""));
(produce$4109 = (function(src$4461) {
  var text$4470;
  var results$4471;
  var wsb$4472;
  var pos$4473;
  var column$4474;
  (text$4470 = src$4461.text);
  (results$4471 = []);
  (wsb$4472 = text$4470.match(ws_re$4107)[0].length);
  (text$4470 = text$4470.slice(wsb$4472));
  (pos$4473 = wsb$4472);
  (column$4474 = 0);
  $4493: while (text$4470) {
    var i$4499;
    (i$4499 = 0);
    $4496: for (; (i$4499 < regexps$4106.length); (++i$4499)) {
      var t0$4513;
      var t1$4514;
      var splits$4563;
      var skip$4546;
      var endpos$4547;
      var wsa$4548;
      var eol$4549;
      var bwsb$4550;
      var bwsa$4551;
      var token$4552;
      var re$4509;
      var fn$4510;
      var m$4511;
      (t0$4513 = $5868(regexps$4106, i$4499));
      if (((t0$4513 instanceof Array) && (((t1$4514 = t0$4513.length)), (t1$4514 === 2)))) {
        (re$4509 = t0$4513[0]);
        (fn$4510 = t0$4513[1]);
      } else {
        ___match_error($5868(regexps$4106, i$4499), "/home/olivier/git/earl-grey/src/lex.eg", 4345, 4355);
      }
      (m$4511 = text$4470.match(re$4509));
      if (m$4511) {
        (skip$4546 = m$4511[0].length);
        (endpos$4547 = (pos$4473 + skip$4546));
        (column$4474 = (((splits$4563 = m$4511[0].split("\n"))), ((splits$4563.length > 1) ? $5868(splits$4563, (splits$4563.length - 1)).length : (column$4474 + skip$4546))));
        (text$4470 = text$4470.slice(skip$4546));
        (wsa$4548 = text$4470.match(ws_re$4107)[0].length);
        (eol$4549 = (text$4470.match(eol_re$4108) && true));
        (bwsb$4550 = (wsb$4472 > 0));
        (bwsa$4551 = (eol$4549 ? bwsb$4550 : (wsa$4548 > 0)));
        (token$4552 = fn$4510(m$4511, column$4474));
        (token$4552["wsb"] = bwsb$4550);
        (token$4552["wsa"] = bwsa$4551);
        (token$4552["location"] = Location$4103(src$4461, pos$4473, endpos$4547));
        results$4471.push(token$4552);
        (text$4470 = text$4470.slice(wsa$4548));
        (column$4474 = (column$4474 + wsa$4548));
        (wsb$4472 = wsa$4548);
        (pos$4473 = (endpos$4547 + wsa$4548));
        break $4496;
      }
    }
  }
  return results$4471;
}));
(indent_tracker$4110 = (function() {
  var curr$4617;
  var stack$4618;
  var stacks$4619;
  (curr$4617 = 0);
  (stack$4618 = []);
  (stacks$4619 = [stack$4618]);
  return (function($4615$4630) {
    var t0$4653;
    var rval$4721;
    var $index$4801;
    var $length$4795;
    var temp$4789;
    var acc$4783;
    var rval$4775;
    var x$4832;
    var $index$4860;
    var $length$4854;
    var temp$4848;
    var acc$4842;
    var other$4881;
    var fixity$4762;
    var fixity$4742;
    var stuff$4737;
    var new_indent$4678;
    var $4634$4679;
    var $4646$4672;
    var $4647$4673;
    var $4648$4674;
    var $4649$4675;
    var t0$4667;
    var t1$4668;
    var bridge$4641$4669;
    var bridge$4643$4670;
    var $4632$4662;
    var ph$4650;
    var token$4651;
    (t0$4653 = $4615$4630);
    (token$4651 = t0$4653);
    (ph$4650 = t0$4653);
    ($4632$4662 = ph$4650);
    if ((($4646$4672 = ($4632$4662 instanceof Array)) && (((t0$4667 = $4632$4662.length)), ((t0$4667 === 2) && ($4632$4662[0] === "INDENT"))))) {
      (t1$4668 = $4632$4662[1]);
      (new_indent$4678 = t1$4668);
      ($4634$4679 = t1$4668);
      $4634$4679;
      if ((curr$4617 === false)) {
        (curr$4617 = new_indent$4678);
        return [__amp__(["OP", "IFX", ","], ({
          "wsb": true,
          "wsa": true
        }))];
      } else {
        if (($4634$4679 > curr$4617)) {
          stack$4618.push(curr$4617);
          (curr$4617 = new_indent$4678);
          return [__amp__(["OP", "PFX", "["], ({
            "wsb": true,
            "wsa": true
          }))];
        } else {
          if (($4634$4679 === curr$4617)) {
            return [__amp__(["OP", "IFX", ","], ({
              "wsb": true,
              "wsa": true
            }))];
          } else {
            if (($4634$4679 < curr$4617)) {
              (rval$4721 = []);
              $4725: while (((stack$4618.length > 0) && (new_indent$4678 < curr$4617))) {
                (curr$4617 = stack$4618.pop());
                rval$4721.push(__amp__(["OP", "SFX", "]"], ({
                  "wsb": true,
                  "wsa": true
                })));
              }
              rval$4721.push(__amp__(["OP", "IFX", ","], ({
                "wsb": true,
                "wsa": true
              })));
              return rval$4721;
            } else {
              ___match_error($4634$4679, "/home/olivier/git/earl-grey/src/lex.eg", 5722, 5738);
            }
          }
        }
      }
    } else {
      if (($4646$4672 && ((t0$4667 >= 1) && ($4632$4662[0] === "ID")))) {
        (stuff$4737 = Array.prototype.slice.call($4632$4662, 1));
        return [token$4651];
      } else {
        if (($4646$4672 && (($4648$4674 = (t0$4667 === 3)) && (($4649$4675 = ($4632$4662[0] === "OP")) && ((fixity$4742 = $4632$4662[1]), (((bridge$4641$4669 = $4632$4662[2])), ((bridge$4641$4669 === "[") || (bridge$4641$4669 === "{")))))))) {
          stack$4618.push(curr$4617);
          stacks$4619.push(stack$4618);
          (stack$4618 = []);
          (curr$4617 = false);
          return [token$4651];
        } else {
          if (($4649$4675 && ((fixity$4762 = $4632$4662[1]), (((bridge$4643$4670 = $4632$4662[2])), ((bridge$4643$4670 === "]") || (bridge$4643$4670 === "}")))))) {
            (rval$4775 = (((acc$4783 = [])), (((temp$4789 = stack$4618)), ((($length$4795 = temp$4789.length)), ((($index$4801 = 0)), (function() {
              $4778: for (; ($index$4801 < $length$4795); ($index$4801++)) {
                var m$4810;
                (m$4810 = temp$4789[$index$4801]);
                m$4810;
                acc$4783.push(__amp__(["OP", "SFX", "]"], ({
                  "wsb": true,
                  "wsa": true
                })));
              }
            })()))), acc$4783));
            (stack$4618 = stacks$4619.pop());
            (curr$4617 = stack$4618.pop());
            rval$4775.push(token$4651);
            return rval$4775;
          } else {
            if ((((x$4832 = $4632$4662)), ((x$4832 instanceof Array) && (x$4832[0] === "EOF")))) {
              (acc$4842 = []);
              (temp$4848 = stack$4618);
              ($length$4854 = temp$4848.length);
              ($index$4860 = 0);
              $4837: for (; ($index$4860 < $length$4854); ($index$4860++)) {
                var m$4869;
                (m$4869 = temp$4848[$index$4860]);
                m$4869;
                acc$4842.push(__amp__(["OP", "SFX", "]"], ({
                  "wsb": true,
                  "wsa": true
                })));
              }
              return acc$4842;
            } else {
              (other$4881 = $4632$4662);
              return [token$4651];
            }
          }
        }
      }
    }
  });
}));
(process_indent$4111 = (function(stream$4888) {
  var $index$4919;
  var $length$4913;
  var temp$4907;
  var tracker$4893;
  var results$4894;
  (tracker$4893 = indent_tracker$4110());
  (results$4894 = []);
  (temp$4907 = stream$4888);
  ($length$4913 = temp$4907.length);
  ($index$4919 = 0);
  $4895: for (; ($index$4919 < $length$4913); ($index$4919++)) {
    var token$4936;
    var m$4928;
    (m$4928 = temp$4907[$index$4919]);
    (token$4936 = m$4928);
    (results$4894 = results$4894.concat(tracker$4893(token$4936)));
  }
  return results$4894.concat(tracker$4893(["EOF"]));
}));
(disambiguate_fixity$4112 = (function(stream$4943) {
  var $index$5425;
  var $length$5419;
  var temp$5413;
  var __lt____lt____lt____colon__$4952;
  var collapse_operators$4953;
  var buffer$4954;
  var pfx$4955;
  var collapse$4956;
  var results$4957;
  (__lt____lt____lt____colon__$4952 = (function(a$4973, b$4974) {
    (a$4973["wsb"] = b$4974.wsb);
    (a$4973["wsa"] = b$4974.wsa);
    return __lt____lt____colon__$4104(a$4973, b$4974);
  }));
  (collapse_operators$4953 = (function() {
    var msg$5092;
    var longer$5088;
    var token$5065;
    var fixity$5066;
    var name$5067;
    var t0$5059;
    var t1$5060;
    var t2$5061;
    var $5049$5054;
    var $index$5123;
    var $length$5117;
    var temp$5111;
    var acc$5105;
    var $index$5186;
    var $length$5180;
    var temp$5174;
    var acc$5168;
    var t0$5239;
    var t1$5240;
    var t2$5241;
    var t3$5242;
    var t0$5287;
    var t0$5294;
    var t0$5347;
    var t0$5354;
    var t1$5355;
    var t2$5356;
    var bridge$5328$5337;
    var $5326$5332;
    var t$5323;
    var results$5317;
    var $5231$5276;
    var $5232$5277;
    var $5233$5278;
    var bridge$5228$5273;
    var t0$5274;
    var $5226$5268;
    var first$5234;
    var fixity$5235;
    var name$5236;
    var rest$5237;
    var n$5029;
    var $4998$5024;
    var $4999$5025;
    var $5000$5026;
    var t0$5021;
    var t1$5022;
    var buffer$5012;
    var $4992$5013;
    var t0$5008;
    var $4990$5003;
    ($4990$5003 = arguments);
    (t0$5008 = $4990$5003.length);
    if ((t0$5008 >= 1)) {
      (buffer$5012 = $4990$5003[0]);
      ($4992$5013 = Array.prototype.slice.call($4990$5003, 1));
      (n$5029 = buffer$5012.length);
      $4992$5013;
      if ((!buffer$5012.length)) {
        return [];
      } else {
        (t0$5021 = $4992$5013);
        (t1$5022 = t0$5021.length);
        if ((($5000$5026 = (t1$5022 === 2)) && ((t0$5021[0] ? true : false) && (t0$5021[1] ? true : false)))) {
          ($5049$5054 = buffer$5012);
          if ((($5049$5054 instanceof Array) && (((t0$5059 = $5049$5054.length)), ((t0$5059 === 1) && (((t1$5060 = $5049$5054[0])), ((token$5065 = t1$5060), ((t1$5060 instanceof Array) && (((t2$5061 = t1$5060.length)), ((t2$5061 === 3) && (t1$5060[0] === "OP")))))))))) {
            (fixity$5066 = t1$5060[1]);
            (name$5067 = t1$5060[2]);
            return [__lt____lt____lt____colon__$4952(["ID", name$5067], token$5065)];
          } else {
            (longer$5088 = $5049$5054);
            (msg$5092 = "Too many consecutive operators were found here.");
            throw ErrorFactory(["syntax", "nullary"]).create(msg$5092, ({"operators": buffer$5012}));
          }
        } else {
          if (($5000$5026 && (t0$5021[0] ? true : false))) {
            t0$5021[1];
            (acc$5105 = []);
            (temp$5111 = buffer$5012);
            ($length$5117 = temp$5111.length);
            ($index$5123 = 0);
            $5100: for (; ($index$5123 < $length$5117); ($index$5123++)) {
              var token$5142;
              var name$5143;
              var t0$5137;
              var t1$5138;
              var m$5132;
              (m$5132 = temp$5111[$index$5123]);
              (t0$5137 = m$5132);
              (token$5142 = t0$5137);
              if (((t0$5137 instanceof Array) && (((t1$5138 = t0$5137.length)), ((t1$5138 === 3) && (t0$5137[0] === "OP"))))) {
                t0$5137[1];
                (name$5143 = t0$5137[2]);
                acc$5105.push(__lt____lt____lt____colon__$4952(["OP", "PFX", name$5143], token$5142));
              } else {
                ___match_error(m$5132, "/home/olivier/git/earl-grey/src/lex.eg", 8093, 8177);
              }
            }
            return acc$5105;
          } else {
            if (($5000$5026 && (t0$5021[0], (t0$5021[1] ? true : false)))) {
              (acc$5168 = []);
              (temp$5174 = buffer$5012);
              ($length$5180 = temp$5174.length);
              ($index$5186 = 0);
              $5163: for (; ($index$5186 < $length$5180); ($index$5186++)) {
                var token$5205;
                var name$5206;
                var t0$5200;
                var t1$5201;
                var m$5195;
                (m$5195 = temp$5174[$index$5186]);
                (t0$5200 = m$5195);
                (token$5205 = t0$5200);
                if (((t0$5200 instanceof Array) && (((t1$5201 = t0$5200.length)), ((t1$5201 === 3) && (t0$5200[0] === "OP"))))) {
                  t0$5200[1];
                  (name$5206 = t0$5200[2]);
                  acc$5168.push(__lt____lt____lt____colon__$4952(["OP", "SFX", name$5206], token$5205));
                } else {
                  ___match_error(m$5195, "/home/olivier/git/earl-grey/src/lex.eg", 8200, 8284);
                }
              }
              return acc$5168;
            } else {
              $4992$5013;
              (t0$5239 = buffer$5012);
              if (((t0$5239 instanceof Array) && (((t1$5240 = t0$5239.length)), ((t1$5240 >= 1) && (((t2$5241 = t0$5239[0])), ((first$5234 = t2$5241), ((t2$5241 instanceof Array) && (((t3$5242 = t2$5241.length)), ((t3$5242 === 3) && (t2$5241[0] === "OP")))))))))) {
                (fixity$5235 = t2$5241[1]);
                (name$5236 = t2$5241[2]);
                (rest$5237 = Array.prototype.slice.call(t0$5239, 1));
              } else {
                ___match_error(buffer$5012, "/home/olivier/git/earl-grey/src/lex.eg", 8337, 8343);
              }
              ($5226$5268 = [first$5234.wsb, first$5234.wsa]);
              (bridge$5228$5273 = $5226$5268);
              if ((((bridge$5228$5273 instanceof Array) && (((t0$5287 = bridge$5228$5273.length)), ((t0$5287 === 2) && ((!bridge$5228$5273[0]) && (!bridge$5228$5273[1]))))) || ((bridge$5228$5273 instanceof Array) && (((t0$5294 = bridge$5228$5273.length)), ((t0$5294 === 2) && ((bridge$5228$5273[0] ? true : false) && (bridge$5228$5273[1] ? true : false))))))) {
                return [__lt____lt____lt____colon__$4952(["OP", "IFX", name$5236], first$5234)].concat(collapse_operators$4953(rest$5237, true, false));
              } else {
                if ((($5231$5276 = ($5226$5268 instanceof Array)) && (((t0$5274 = $5226$5268.length)), (($5233$5278 = (t0$5274 === 2)) && ($5226$5268[0] ? true : false))))) {
                  $5226$5268[1];
                  return [__lt____lt____lt____colon__$4952(["OP", "PFX", name$5236], first$5234)].concat(collapse_operators$4953(rest$5237, true, false));
                } else {
                  if (($5233$5278 && ($5226$5268[0], ($5226$5268[1] ? true : false)))) {
                    (results$5317 = collapse_operators$4953(rest$5237, false, false));
                    (t$5323 = ((($5326$5332 = results$5317)), (((bridge$5328$5337 = $5326$5332)), ((((bridge$5328$5337 instanceof Array) && (((t0$5347 = bridge$5328$5337.length)), (t0$5347 === 0))) || ((bridge$5328$5337 instanceof Array) && (((t0$5354 = bridge$5328$5337.length)), ((t0$5354 >= 1) && (((t1$5355 = bridge$5328$5337[0])), ((t1$5355 instanceof Array) && (((t2$5356 = t1$5355.length)), ((t2$5356 >= 2) && ((t1$5355[0] === "OP") && ((t1$5355[1] === "PFX") && (Array.prototype.slice.call(t1$5355, 2), (Array.prototype.slice.call(bridge$5328$5337, 1), true)))))))))))) ? ["OP", "IFX", name$5236] : ($5326$5332, ["OP", "SFX", name$5236])))));
                    return [__lt____lt____lt____colon__$4952(t$5323, first$5234)].concat(results$5317);
                  } else {
                    ___match_error($5226$5268);
                  }
                }
              }
            }
          }
        }
      }
    } else {
      ___match_error($4990$5003);
    }
  }));
  (buffer$4954 = []);
  (pfx$4955 = true);
  (collapse$4956 = (function(sfx$5394) {
    var rval$5399;
    (rval$5399 = collapse_operators$4953(buffer$4954, pfx$4955, sfx$5394));
    (buffer$4954 = []);
    return rval$5399;
  }));
  (results$4957 = []);
  (temp$5413 = stream$4943);
  ($length$5419 = temp$5413.length);
  ($index$5425 = 0);
  $4958: for (; ($index$5425 < $length$5419); ($index$5425++)) {
    var other$5506;
    var name$5456;
    var $4963$5457;
    var t0$5451;
    var t1$5452;
    var token$5443;
    var $4961$5444;
    var t0$5439;
    var m$5434;
    (m$5434 = temp$5413[$index$5425]);
    (t0$5439 = m$5434);
    (token$5443 = t0$5439);
    ($4961$5444 = t0$5439);
    (t0$5451 = $4961$5444);
    if (((t0$5451 instanceof Array) && (((t1$5452 = t0$5451.length)), ((t1$5452 === 3) && (t0$5451[0] === "OP"))))) {
      ($4963$5457 = t0$5451[1]);
      (name$5456 = t0$5451[2]);
      if (($4963$5457 === "?FX")) {
        buffer$4954.push(token$5443);
      } else {
        if (($4963$5457 === "IFX")) {
          (results$4957 = results$4957.concat(collapse$4956(true)));
          results$4957.push(token$5443);
          (pfx$4955 = true);
        } else {
          if (($4963$5457 === "PFX")) {
            (results$4957 = results$4957.concat(collapse$4956(false)));
            results$4957.push(token$5443);
            (pfx$4955 = true);
          } else {
            if (($4963$5457 === "SFX")) {
              (results$4957 = results$4957.concat(collapse$4956(true)));
              results$4957.push(token$5443);
              (pfx$4955 = false);
            } else {
              ___match_error($4963$5457, "/home/olivier/git/earl-grey/src/lex.eg", 9153, 9158);
            }
          }
        }
      }
    } else {
      (other$5506 = $4961$5444);
      (results$4957 = results$4957.concat(collapse$4956(false)));
      results$4957.push(token$5443);
      (pfx$4955 = false);
    }
  }
  return results$4957.concat(collapse$4956(true));
}));
(alternate_operators$4113 = (function(stream$5518) {
  var $index$5562;
  var $length$5556;
  var temp$5550;
  var W$5524;
  var last_op$5525;
  var results$5526;
  (W$5524 = (function(x$5538) {
    if (x$5538) {
      return "wide";
    } else {
      return "short";
    }
  }));
  (last_op$5525 = true);
  (results$5526 = []);
  (temp$5550 = stream$5518);
  ($length$5556 = temp$5550.length);
  ($index$5562 = 0);
  $5527: for (; ($index$5562 < $length$5556); ($index$5562++)) {
    var x$5596;
    var $5617$5624;
    var token$5662;
    var fixity$5603;
    var name$5604;
    var t0$5588;
    var t1$5589;
    var token$5580;
    var $5530$5581;
    var t0$5576;
    var m$5571;
    (m$5571 = temp$5550[$index$5562]);
    (t0$5576 = m$5571);
    (token$5580 = t0$5576);
    ($5530$5581 = t0$5576);
    if ((((x$5596 = $5530$5581)), ((x$5596 instanceof Array) && (x$5596[0] === "IGNORE")))) {
      null;
    } else {
      (t0$5588 = $5530$5581);
      if (((t0$5588 instanceof Array) && (((t1$5589 = t0$5588.length)), ((t1$5589 === 3) && (t0$5588[0] === "OP"))))) {
        (fixity$5603 = t0$5588[1]);
        (name$5604 = t0$5588[2]);
        if (last_op$5525) {
          results$5526.push(["VOID"]);
        }
        ($5617$5624 = fixity$5603);
        if (($5617$5624 === "IFX")) {
          results$5526.push(__lt____lt____colon__$4104(["IFX", W$5524((token$5580.wsa || token$5580.wsb)), name$5604], token$5580));
          (last_op$5525 = true);
        } else {
          if (($5617$5624 === "PFX")) {
            if ((!last_op$5525)) {
              results$5526.push(["IFX", W$5524(token$5580.wsb), "WHITE"], ["VOID"]);
            }
            results$5526.push(__lt____lt____colon__$4104(["PFX", W$5524(token$5580.wsa), name$5604], token$5580));
            (last_op$5525 = true);
          } else {
            if (($5617$5624 === "SFX")) {
              results$5526.push(__lt____lt____colon__$4104(["SFX", W$5524(token$5580.wsb), name$5604], token$5580), ["VOID"]);
              (last_op$5525 = false);
            } else {
              ___match_error($5617$5624);
            }
          }
        }
      } else {
        (token$5662 = $5530$5581);
        if ((!last_op$5525)) {
          results$5526.push(["IFX", W$5524(token$5662.wsb), "WHITE"]);
        }
        results$5526.push(token$5662);
        (last_op$5525 = false);
      }
    }
  }
  if (last_op$5525) {
    results$5526.push(["VOID"]);
  }
  return results$5526;
}));
(fill_locations$4114 = (function(source$5676, stream$5677) {
  var $index$5774;
  var $length$5768;
  var temp$5762;
  var to_fill$5683;
  var start$5684;
  var fill$5685;
  (to_fill$5683 = []);
  (start$5684 = 0);
  (fill$5685 = (function(end$5700) {
    var $index$5723;
    var $length$5717;
    var temp$5711;
    (temp$5711 = to_fill$5683);
    ($length$5717 = temp$5711.length);
    ($index$5723 = 0);
    $5704: for (; ($index$5723 < $length$5717); ($index$5723++)) {
      var token$5749;
      var token$5740;
      var m$5732;
      (m$5732 = temp$5711[$index$5723]);
      (token$5740 = m$5732);
      if (($index$5723 === 0)) {
        (token$5740["location"] = Location$4103(source$5676, start$5684, end$5700));
      } else {
        (token$5749 = m$5732);
        (token$5749["location"] = Location$4103(source$5676, end$5700, end$5700));
      }
    }
    (to_fill$5683 = []);
  }));
  (temp$5762 = stream$5677);
  ($length$5768 = temp$5762.length);
  ($index$5774 = 0);
  $5686: for (; ($index$5774 < $length$5768); ($index$5774++)) {
    var other$5807;
    var location$5792;
    var t0$5788;
    var m$5783;
    (m$5783 = temp$5762[$index$5774]);
    (t0$5788 = m$5783);
    if ((___hasprop(t0$5788, "location") && ((location$5792 = t0$5788.location), location$5792))) {
      fill$5685(location$5792.start);
      (start$5684 = location$5792.end);
    } else {
      (other$5807 = m$5783);
      to_fill$5683.push(other$5807);
    }
  }
  fill$5685(source$5676.text.length);
  return stream$5677;
}));
(tokenize$4115 = (function(src$5814) {
  var it$0$5842;
  var it$0$5836;
  var it$0$5830;
  var it$0$5824;
  var it$0$5818;
  (it$0$5818 = src$5814);
  (it$0$5824 = produce$4109(it$0$5818));
  (it$0$5830 = process_indent$4111(it$0$5824));
  (it$0$5836 = disambiguate_fixity$4112(it$0$5830));
  (it$0$5842 = alternate_operators$4113(it$0$5836));
  return fill_locations$4114(src$5814, it$0$5842);
}));
(exports["tokenize"] = tokenize$4115);
(exports["process_indent"] = process_indent$4111);
(exports["disambiguate_fixity"] = disambiguate_fixity$4112);
(exports["alternate_operators"] = alternate_operators$4113);
(exports["fill_locations"] = fill_locations$4114);
//# sourceURL=<compile-source>
