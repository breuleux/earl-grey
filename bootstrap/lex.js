
'use strict';require('earlgrey-runtime/6');let id$0;let id_f$0;let numr$0;let numr_f$0;let num$0;let num_f$0;let quasi$0;let quasi2$0;let quasi_f$0;let quaint$0;let quaint2$0;let quaint_f$0;let str$0;let str2$0;let str_f$0;let op$0;let op2$0;let op3$0;let op_f$0;let indent$0;let indent_f$0;let indent2$0;let indent2_f$0;let cmnt$0;let cmnt_f$0;let op4$0;let unkn$0;let unkn_f$0;let $targ$9;let $targ$10;let $targ$11;let $targ$12;let $targ$13;let $targ$14;let $0$0;let Location$0;let __lt____lt____colon__$0;let unescape$0;let special_ops$0;let regexps$0;let ws_re$0;let eol_re$0;let produce$0;let indent_tracker$0;let process_indent$0;let disambiguate_fixity$0;let alternate_operators$0;let fill_locations$0;let tokenize$0;$0$0=require("./location");Location$0=getProperty($0$0,"Location","./location");__lt____lt____colon__$0=getProperty($0$0,"<<:","./location");unescape$0=(function unescape(s$0){let rx$0;let f$0;let repl$0;repl$0=({"b":String.fromCharCode(8),"f":String.fromCharCode(12),"n":"\n","r":String.fromCharCode(13),"t":String.fromCharCode(9)});rx$0=RegExp("\\\\u[0-9A-Fa-f]{4}|\\\\x[0-9A-Fa-f]{2}|\\\\.","g");f$0=(function f(ph$0$0){let chr$0;let digits$0;let t0$0;let t1$0;let t2$0;t0$0=getProjector(RegExp("^(?:\\\\u|\\\\x)(.*)",""))(ph$0$0);if((t0$0[0]&&((t1$0=t0$0[1]),(t2$0=t1$0.length),(t2$0===2)))){t1$0[0];digits$0=t1$0[1];return String.fromCharCode(parseInt(digits$0,16));}else{t0$0=getProjector(RegExp("^.(.)",""))(ph$0$0);if((t0$0[0]&&((t1$0=t0$0[1]),(t2$0=t1$0.length),(t2$0===2)))){t1$0[0];chr$0=t1$0[1];return (send(repl$0,chr$0)||chr$0);}else{return ___match_error(ph$0$0,"R\"^.(.)\"! {_, chr}");}}});return s$0.replace(rx$0,f$0);});special_ops$0=({"(":"PFX","[":"PFX","{":"PFX",")":"SFX","]":"SFX","}":"SFX",",":"IFX",";":"IFX",".":"PFX","not":"PFX","??":"SFX"});id$0=RegExp("(?:^(?:[a-zA-Z$_]|(?:\\\\_.))(?:(?:(?:[a-zA-Z$_0-9]|(?:\\\\_.))|(?:-[a-zA-Z$_0-9]))*))","");id_f$0=(function id_f(m$0){return ["ID",m$0[0].replace(RegExp("\\\\_(.)","g"),(function(temp$0$0,x$0){return x$0;}))];});numr$0=RegExp("(?:^((?:\\d+))[rR]((?:[A-Za-z0-9_]+))(?:(?:\\.((?:[A-Za-z0-9_]+)))?))","");numr_f$0=(function numr_f(m$1){let t0$1;let t1$1;let frac$1;let $targ$0;let radix$0;let intp$0;let frac$0;let value$0;$targ$0=m$1;t0$1=$targ$0;if((Array.isArray(t0$1)&&((t1$1=t0$1.length),(t1$1===4)))){t0$1[0];radix$0=t0$1[1];intp$0=t0$1[2];frac$0=t0$1[3];}else{___match_error($targ$0,"{_, radix, intp, frac}");}[radix$0,intp$0,frac$0];value$0=parseInt(intp$0.replace(RegExp("_","g"),""),radix$0);if(frac$0){frac$1=frac$0.replace(RegExp("_","g"),"");value$0=(value$0+(parseInt(frac$0,radix$0)/Math.pow(radix$0,frac$0.length)));value$0;}return ["NUM",value$0];});num$0=RegExp("(?:^((?:[0-9_]+))(?:(?:\\.((?:\\d+)))?)(?:(?:[eE]((?:[+-]?)(?:[0-9_]+)))?))","");num_f$0=(function num_f(m$2){return ["NUM",parseFloat(m$2[0].replace(RegExp("_","g"),""))];});quasi$0=RegExp("(?:^`((?:(?:(?:\\\\.)|[^`])*))`)","");quasi2$0=RegExp("^[`]{3,}((?:[\\\\.]|[^`]|``?[^`])*)[`]{3,}","");quasi_f$0=(function quasi_f(m$3){return ["QUASI",m$3[1]];});quaint$0=RegExp("(?:^'((?:(?:(?:\\\\.)|[^'])*))')","");quaint2$0=RegExp("^[']{3,}((?:[\\\\.]|[^']|''?[^'])*)[']{3,}","");quaint_f$0=(function quaint_f(m$4){return ["QUAINT",m$4[1]];});str$0=RegExp("(?:^\"((?:(?:(?:\\\\.)|[^\"])*))\")","");str2$0=RegExp("^[\\\"]{3,}((?:[\\\\.]|[^\\\"]|\\\"\\\"?[^\\\"])*)[\\\"]{3,}","");str_f$0=(function str_f(m$5){return ["STR",unescape$0(m$5[1])];});op$0=RegExp("(?:^(?:[+\\-*/~\\^<>=%&|?!@#:]+))","");op2$0=RegExp("(?:^(?:[\\(\\[\\{\\}\\]\\),]|(?:\\.+)))","");op3$0=RegExp("(?:^(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:(?:with|where)|when)|and)|not)|or)|in)|mod)|each)|as)|of)|is)(?:(?:[+*/~\\^<>=%&|?!@#.:]+)|\\b)(?!-))","");op_f$0=(function op_f(m$6,column$0){let fixity$0;let otherwise$0;let $$3959$0;let m$7$0;let op$1;op$1=(m$6[1]||m$6[0]);m$7$0=null;if((op$1==="|")){return ["INDENT",(column$0-1)];}else{if(send(special_ops$0,op$1)){fixity$0=send(special_ops$0,op$1);return ["OP",fixity$0,op$1];}else{otherwise$0=m$7$0;return ["OP","?FX",op$1];}}});indent$0=RegExp("(?:^(?:(?:\n(?: *);(?:[^\n]*))*)(?:(?:\n((?: *)))+))","");indent_f$0=(function indent_f(m$8){let ilen$0;ilen$0=m$8[1].length;return ["INDENT",ilen$0];});indent2$0=RegExp("(?:^\\\\\\\\)","");indent2_f$0=(function indent2_f(m$9,column$1){return ["INDENT",(column$1-2)];});cmnt$0=RegExp("(?:^;;(?:[^\n]*))","");cmnt_f$0=(function cmnt_f(m$10){return ["IGNORE"];});op4$0=RegExp("(?:^;)","");unkn$0=RegExp("(?:^.)","");unkn_f$0=(function unkn_f(m$11){return ["ILLEGAL",m$11[0]];});regexps$0=[[op3$0,op_f$0],[id$0,id_f$0],[numr$0,numr_f$0],[num$0,num_f$0],[str2$0,str_f$0],[str$0,str_f$0],[quasi2$0,quasi_f$0],[quasi$0,quasi_f$0],[quaint2$0,quaint_f$0],[quaint$0,quaint_f$0],[op$0,op_f$0],[op2$0,op_f$0],[indent$0,indent_f$0],[indent2$0,indent2_f$0],[cmnt$0,cmnt_f$0],[op4$0,op_f$0],[unkn$0,unkn_f$0]];ws_re$0=RegExp("(?:^(?: *)(?:(?:\n(?: *)\\\\ (?: *))*))","");eol_re$0=RegExp("(?:^(?: *)(?:\n|$))","");produce$0=(function produce(src$0){let text$0;let results$0;let wsb$0;let pos$0;let column$2;text$0=src$0.text;results$0=[];wsb$0=text$0.match(ws_re$0)[0].length;text$0=text$0.slice(wsb$0);pos$0=wsb$0;column$2=0;$1:while(text$0){let i$0;i$0=0;$2:for(null;(i$0<regexps$0.length);(++i$0)){let t0$2;let t1$2;let splits$0;let skip$0;let endpos$0;let wsa$0;let eol$0;let bwsb$0;let bwsa$0;let token$0;let $targ$2;let $targ$3;let $targ$4;let $targ$1;let re$0;let fn$0;let m$12;$targ$1=send(regexps$0,i$0);t0$2=$targ$1;if((Array.isArray(t0$2)&&((t1$2=t0$2.length),(t1$2===2)))){re$0=t0$2[0];fn$0=t0$2[1];}else{___match_error($targ$1,"{re, fn}");}[re$0,fn$0];m$12=text$0.match(re$0);if(m$12){skip$0=m$12[0].length;endpos$0=(pos$0+skip$0);splits$0=m$12[0].split("\n");if((splits$0.length>1)){column$2=send(splits$0,(splits$0.length-1)).length;}else{column$2=(column$2+skip$0);}text$0=text$0.slice(skip$0);wsa$0=text$0.match(ws_re$0)[0].length;eol$0=(text$0.match(eol_re$0)&&true);bwsb$0=(wsb$0>0);if(eol$0){bwsa$0=bwsb$0;}else{bwsa$0=(wsa$0>0);}token$0=fn$0(m$12,column$2);$targ$2=bwsb$0;(token$0["wsb"]=$targ$2);$targ$3=bwsa$0;(token$0["wsa"]=$targ$3);$targ$4=Location$0(src$0,pos$0,endpos$0);(token$0["location"]=$targ$4);results$0.push(token$0);text$0=text$0.slice(wsa$0);column$2=(column$2+wsa$0);wsb$0=wsa$0;pos$0=(endpos$0+wsa$0);break $2;}}}return results$0;});indent_tracker$0=(function indent_tracker(){let curr$0;let stack$0;let stacks$0;curr$0=0;stack$0=[];stacks$0=[stack$0];return (function(temp$1$0){let t0$3;let rval$0;let m$13;let acc$0;let temp$2;let rval$1;let x$1;let m$14;let acc$1;let temp$3;let other$0;let fixity$2;let fixity$1;let stuff$0;let new_indent$0;let ph$2$0;let $$4183$0;let $$4184$0;let $$4185$0;let $$4186$0;let t0$4;let t1$3;let t2$1;let bridge$$4178$0;let bridge$$4180$0;let token$1;let ph$1$0;t0$3=temp$1$0;token$1=t0$3;ph$1$0=t0$3;t0$4=ph$1$0;t1$3=t0$4.length;if(((t1$3===2)&&(t0$4[0]==="INDENT"))){t2$1=t0$4[1];new_indent$0=t2$1;ph$2$0=t2$1;if((curr$0===false)){curr$0=new_indent$0;return [__amp__(["OP","IFX",";"],({"wsb":true,"wsa":true}))];}else{if((ph$2$0>curr$0)){stack$0.push(curr$0);curr$0=new_indent$0;return [__amp__(["OP","PFX","["],({"wsb":true,"wsa":true}))];}else{if((ph$2$0===curr$0)){return [__amp__(["OP","IFX",";"],({"wsb":true,"wsa":true}))];}else{if((ph$2$0<curr$0)){rval$0=[];$3:while(((stack$0.length>0)&&(new_indent$0<curr$0))){curr$0=stack$0.pop();rval$0.push(__amp__(["OP","SFX","]"],({"wsb":true,"wsa":true})));}rval$0.push(__amp__(["OP","IFX",";"],({"wsb":true,"wsa":true})));return rval$0;}else{return ___match_error(ph$2$0,"[< curr]");}}}}}else{if(((t1$3>=1)&&(t0$4[0]==="ID"))){stuff$0=Array.prototype.slice.call(t0$4,1);return [token$1];}else{if((($$4185$0=(t1$3===3))&&(($$4186$0=(t0$4[0]==="OP"))&&((fixity$1=t0$4[1]),(bridge$$4178$0=t0$4[2]),((bridge$$4178$0==="[")||(bridge$$4178$0==="{")))))){stack$0.push(curr$0);stacks$0.push(stack$0);stack$0=[];curr$0=false;return [token$1];}else{if(($$4186$0&&((fixity$2=t0$4[1]),(bridge$$4180$0=t0$4[2]),((bridge$$4180$0==="]")||(bridge$$4180$0==="}"))))){acc$0=[];temp$2=null;m$13=null;$4:for(m$13 of stack$0){temp$2=__amp__(["OP","SFX","]"],({"wsb":true,"wsa":true}));acc$0.push(temp$2);}rval$1=acc$0;stack$0=stacks$0.pop();curr$0=stack$0.pop();rval$1.push(token$1);return rval$1;}else{if(((x$1=ph$1$0),((x$1 instanceof Array)&&(x$1[0]==="EOF")))){acc$1=[];temp$3=null;m$14=null;$5:for(m$14 of stack$0){temp$3=__amp__(["OP","SFX","]"],({"wsb":true,"wsa":true}));acc$1.push(temp$3);}return acc$1;}else{other$0=ph$1$0;return [token$1];}}}}}});});process_indent$0=(function process_indent(stream$0){let m$15;let tracker$0;let results$1;tracker$0=indent_tracker$0();results$1=[];m$15=null;$6:for(m$15 of stream$0){let token$2;token$2=m$15;results$1=results$1.concat(tracker$0(token$2));}return results$1.concat(tracker$0(["EOF"]));});disambiguate_fixity$0=(function disambiguate_fixity(stream$1){let m$22;let __lt____lt____lt____colon__$0;let collapse_operators$0;let buffer$0;let pfx$0;let collapse$0;let results$2;__lt____lt____lt____colon__$0=(function(a$0,b$0){let $targ$5;let $targ$6;$targ$5=b$0.wsb;(a$0["wsb"]=$targ$5);$targ$6=b$0.wsa;(a$0["wsa"]=$targ$6);return __lt____lt____colon__$0(a$0,b$0);});collapse_operators$0=(function collapse_operators(){let msg$0;let longer$0;let token$3;let fixity$3;let name$0;let t0$7;let t1$5;let t2$2;let m$17$0;let m$18;let acc$2;let temp$4;let m$19;let acc$3;let temp$5;let t0$10;let t1$8;let t2$3;let t3$0;let t0$12;let t0$13;let t0$14;let t0$15;let t1$9;let t2$4;let bridge$$4667$0;let m$21$0;let t$0;let results$3;let $$4592$0;let $$4593$0;let $$4594$0;let bridge$$4589$0;let t0$11;let m$20$0;let $targ$7;let first$0;let fixity$4;let name$3;let rest$0;let n$0;let $$4432$0;let $$4433$0;let $$4434$0;let t0$6;let t1$4;let buffer$1;let ph$6$0;let t0$5;let m$16$0;m$16$0=arguments;t0$5=m$16$0.length;if((t0$5>=1)){buffer$1=m$16$0[0];ph$6$0=Array.prototype.slice.call(m$16$0,1);n$0=buffer$1.length;if((!buffer$1.length)){return [];}else{t0$6=ph$6$0;t1$4=t0$6.length;if((($$4434$0=(t1$4===2))&&((t0$6[0]?true:false)&&(t0$6[1]?true:false)))){m$17$0=buffer$1;if((Array.isArray(m$17$0)&&((t0$7=m$17$0.length),((t0$7===1)&&((t1$5=m$17$0[0]),(token$3=t1$5),(Array.isArray(t1$5)&&((t2$2=t1$5.length),((t2$2===3)&&(t1$5[0]==="OP"))))))))){fixity$3=t1$5[1];name$0=t1$5[2];return [__lt____lt____lt____colon__$0(["ID",name$0],token$3)];}else{longer$0=m$17$0;msg$0="Too many consecutive operators were found here.";throw ErrorFactory(["syntax","nullary"]).create(msg$0,({"operators":buffer$1}));}}else{if(($$4434$0&&(t0$6[0]?true:false))){t0$6[1];acc$2=[];temp$4=null;m$18=null;$8:for(m$18 of buffer$1){let token$4;let name$1;let t0$8;let t1$6;t0$8=m$18;token$4=t0$8;if((Array.isArray(t0$8)&&((t1$6=t0$8.length),((t1$6===3)&&(t0$8[0]==="OP"))))){t0$8[1];name$1=t0$8[2];temp$4=__lt____lt____lt____colon__$0(["OP","PFX",name$1],token$4);acc$2.push(temp$4);}else{___match_error(m$18);}}return acc$2;}else{if(($$4434$0&&(t0$6[0],(t0$6[1]?true:false)))){acc$3=[];temp$5=null;m$19=null;$9:for(m$19 of buffer$1){let token$5;let name$2;let t0$9;let t1$7;t0$9=m$19;token$5=t0$9;if((Array.isArray(t0$9)&&((t1$7=t0$9.length),((t1$7===3)&&(t0$9[0]==="OP"))))){t0$9[1];name$2=t0$9[2];temp$5=__lt____lt____lt____colon__$0(["OP","SFX",name$2],token$5);acc$3.push(temp$5);}else{___match_error(m$19);}}return acc$3;}else{$targ$7=buffer$1;t0$10=$targ$7;if((Array.isArray(t0$10)&&((t1$8=t0$10.length),((t1$8>=1)&&((t2$3=t0$10[0]),(first$0=t2$3),(Array.isArray(t2$3)&&((t3$0=t2$3.length),((t3$0===3)&&(t2$3[0]==="OP"))))))))){fixity$4=t2$3[1];name$3=t2$3[2];rest$0=Array.prototype.slice.call(t0$10,1);}else{___match_error($targ$7,"{first and #OP{fixity, name}, *rest}");}[first$0,fixity$4,name$3,rest$0];m$20$0=[first$0.wsb,first$0.wsa];bridge$$4589$0=m$20$0;if(((Array.isArray(bridge$$4589$0)&&((t0$12=bridge$$4589$0.length),((t0$12===2)&&((!bridge$$4589$0[0])&&(!bridge$$4589$0[1])))))||(Array.isArray(bridge$$4589$0)&&((t0$13=bridge$$4589$0.length),((t0$13===2)&&((bridge$$4589$0[0]?true:false)&&(bridge$$4589$0[1]?true:false))))))){return [__lt____lt____lt____colon__$0(["OP","IFX",name$3],first$0)].concat(collapse_operators$0(rest$0,true,false));}else{if((($$4592$0=Array.isArray(m$20$0))&&((t0$11=m$20$0.length),(($$4594$0=(t0$11===2))&&(m$20$0[0]?true:false))))){m$20$0[1];return [__lt____lt____lt____colon__$0(["OP","PFX",name$3],first$0)].concat(collapse_operators$0(rest$0,true,false));}else{if(($$4594$0&&(m$20$0[0],(m$20$0[1]?true:false)))){results$3=collapse_operators$0(rest$0,false,false);m$21$0=results$3;bridge$$4667$0=m$21$0;if(((Array.isArray(bridge$$4667$0)&&((t0$14=bridge$$4667$0.length),(t0$14===0)))||(Array.isArray(bridge$$4667$0)&&((t0$15=bridge$$4667$0.length),((t0$15>=1)&&((t1$9=bridge$$4667$0[0]),(Array.isArray(t1$9)&&((t2$4=t1$9.length),((t2$4>=2)&&((t1$9[0]==="OP")&&((t1$9[1]==="PFX")&&(Array.prototype.slice.call(t1$9,2),Array.prototype.slice.call(bridge$$4667$0,1),true)))))))))))){t$0=["OP","IFX",name$3];}else{t$0=["OP","SFX",name$3];}return [__lt____lt____lt____colon__$0(t$0,first$0)].concat(results$3);}else{return ___match_error(m$20$0,"{_, true?}");}}}}}}}}else{return ___match_error(m$16$0,"{buffer, *match}");}});buffer$0=[];pfx$0=true;collapse$0=(function collapse(sfx$0){let rval$2;rval$2=collapse_operators$0(buffer$0,pfx$0,sfx$0);buffer$0=[];return rval$2;});results$2=[];m$22=null;$7:for(m$22 of stream$1){let other$1;let ph$4$0;let name$4;let t0$17;let t1$10;let token$6;let ph$3$0;let t0$16;t0$16=m$22;token$6=t0$16;ph$3$0=t0$16;t0$17=ph$3$0;if((Array.isArray(t0$17)&&((t1$10=t0$17.length),((t1$10===3)&&(t0$17[0]==="OP"))))){ph$4$0=t0$17[1];name$4=t0$17[2];if((ph$4$0==="?FX")){buffer$0.push(token$6);}else{if((ph$4$0==="IFX")){results$2=results$2.concat(collapse$0(true));results$2.push(token$6);pfx$0=true;pfx$0;}else{if((ph$4$0==="PFX")){results$2=results$2.concat(collapse$0(false));results$2.push(token$6);pfx$0=true;pfx$0;}else{if((ph$4$0==="SFX")){results$2=results$2.concat(collapse$0(true));results$2.push(token$6);pfx$0=false;pfx$0;}else{___match_error(ph$4$0);}}}}}else{other$1=ph$3$0;results$2=results$2.concat(collapse$0(false));results$2.push(token$6);pfx$0=false;pfx$0;}}return results$2.concat(collapse$0(true));});alternate_operators$0=(function alternate_operators(stream$2){let m$23;let W$0;let last_op$0;let results$4;W$0=(function W(x$2){if(x$2){return "wide";}else{return "short";}});last_op$0=true;results$4=[];m$23=null;$10:for(m$23 of stream$2){let x$3;let m$24$0;let token$8;let fixity$5;let name$5;let t0$19;let t1$11;let token$7;let ph$7$0;let t0$18;t0$18=m$23;token$7=t0$18;ph$7$0=t0$18;if(((x$3=ph$7$0),((x$3 instanceof Array)&&(x$3[0]==="IGNORE")))){null;}else{t0$19=ph$7$0;if((Array.isArray(t0$19)&&((t1$11=t0$19.length),((t1$11===3)&&(t0$19[0]==="OP"))))){fixity$5=t0$19[1];name$5=t0$19[2];if(last_op$0){results$4.push(["VOID"]);}m$24$0=fixity$5;if((m$24$0==="IFX")){results$4.push(__lt____lt____colon__$0(["IFX",W$0((token$7.wsa||token$7.wsb)),name$5],token$7));last_op$0=true;last_op$0;}else{if((m$24$0==="PFX")){if((!last_op$0)){results$4.push(["IFX",W$0(token$7.wsb),"WHITE"],["VOID"]);}results$4.push(__lt____lt____colon__$0(["PFX",W$0(token$7.wsa),name$5],token$7));last_op$0=true;last_op$0;}else{if((m$24$0==="SFX")){results$4.push(__lt____lt____colon__$0(["SFX",W$0(token$7.wsb),name$5],token$7),["VOID"]);last_op$0=false;last_op$0;}else{___match_error(m$24$0,".SFX");}}}}else{token$8=ph$7$0;if((!last_op$0)){results$4.push(["IFX",W$0(token$8.wsb),"WHITE"]);}results$4.push(token$8);last_op$0=false;last_op$0;}}}if(last_op$0){results$4.push(["VOID"]);}return results$4;});fill_locations$0=(function fill_locations(source$0,stream$3){let m$26;let to_fill$0;let start$0;let fill$0;to_fill$0=[];start$0=0;fill$0=(function fill(end$0){let m$25;let first$1;first$1=true;m$25=null;$12:for(m$25 of to_fill$0){let s$1;let $targ$8;let token$9;token$9=m$25;if(first$1){first$1=false;s$1=start$0;}else{s$1=end$0;}$targ$8=Location$0(source$0,s$1,end$0);(token$9["location"]=$targ$8);(void 0);}to_fill$0=[];return to_fill$0;});m$26=null;$11:for(m$26 of stream$3){let other$2;let location$0;let t0$20;t0$20=m$26;if((___hasprop(t0$20,"location")&&((location$0=t0$20.location),location$0))){fill$0(location$0.start);start$0=location$0.end;start$0;}else{other$2=m$26;to_fill$0.push(other$2);}}fill$0(source$0.text.length);return stream$3;});tokenize$0=(function tokenize(src$1){let $it$4;let $it$3;let $it$2;let $it$1;let $it$0;$it$0=src$1;$it$1=produce$0($it$0);$it$2=process_indent$0($it$1);$it$3=disambiguate_fixity$0($it$2);$it$4=alternate_operators$0($it$3);return fill_locations$0(src$1,$it$4);});$targ$9=tokenize$0;(exports["tokenize"]=$targ$9);$targ$10=process_indent$0;(exports["process_indent"]=$targ$10);$targ$11=disambiguate_fixity$0;(exports["disambiguate_fixity"]=$targ$11);$targ$12=alternate_operators$0;(exports["alternate_operators"]=$targ$12);$targ$13=fill_locations$0;(exports["fill_locations"]=$targ$13);$targ$14=unescape$0;(exports["unescape"]=$targ$14);(void 0);
//# sourceMappingURL=lex.js.map

