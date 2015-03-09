
'use strict';require('earlgrey-runtime/6');let $targ$0;let $0$0;let __lt____lt____colon__$0;let $1$0;let Env$0;let topscope$0;let $2$0;let ctx_mac$0;let expr_mac2$0;$0$0=require("../location");__lt____lt____colon__$0=getProperty($0$0,"<<:","../location");$1$0=require("../expand");Env$0=getProperty($1$0,"Env","../expand");topscope$0=getProperty($1$0,"topscope","../expand");$2$0=require("./helpers");ctx_mac$0=getProperty($2$0,"ctx_mac","./helpers");expr_mac2$0=getProperty($2$0,"expr_mac2","./helpers");$targ$0=(function(mac$0){let t0$3;let t0$7;let t0$11;let t0$13;let wrap_macro$0;let wrap_macro_func$0;let $targ$1;let macro_mac$0;let $targ$2;let cmacro_mac$0;let $targ$3;let macros_mac$0;let $targ$4;let oldmacro_mac$0;let exports$0;exports$0=({});wrap_macro$0=(function wrap_macro(info$0,mac$1){let mac2$0;mac2$0=(function mac2(c$0,s$0,f$0,e$0){let bindings$0;let env$0;let $targ$5;let r$0;bindings$0=info$0.env.list_bindings(info$0.scope);env$0=Env$0();$targ$5=bindings$0;(env$0.scopes[topscope$0.name]=$targ$5);[];r$0=mac$1.call(info$0,c$0,s$0,f$0,e$0);return env$0.mark(r$0);});return ["macro",mac2$0];});wrap_macro_func$0=(function wrap_macro_func(info$1,args$0,body$0){let it$0;it$0=info$1.env.mark(["symbol","@"]);return ["send",["symbol","_lambda"],["data",args$0,["send",["symbol","="],["data",it$0,["symbol","this"]]],body$0,["value",null]]];});$targ$1=(function(context$0,info$2,form$0,ph$0$0){let t0$1;let t0$2;let mac$2;let s$1;let name$0;let sym$0;let arguments$1;let ast$0;let t0$0;let t1$0;let t2$0;let t3$0;let t4$0;let bridge$$12372$0;t0$0=ph$0$0;t1$0=t0$0.length;if(((t1$0===3)&&((t0$0[0]==="data")&&((t2$0=t0$0[1]),(Array.isArray(t2$0)&&((t3$0=t2$0.length),((t3$0===3)&&((t2$0[0]==="send")&&((t4$0=t2$0[1]),(name$0=t4$0),(bridge$$12372$0=t4$0),((Array.isArray(bridge$$12372$0)&&((t0$1=bridge$$12372$0.length),((t0$1===2)&&((bridge$$12372$0[0]==="symbol")&&((sym$0=bridge$$12372$0[1]),true)))))||(Array.isArray(bridge$$12372$0)&&((t0$2=bridge$$12372$0.length),((t0$2===2)&&((bridge$$12372$0[0]==="value")&&((sym$0=bridge$$12372$0[1]),true))))))))))))))){arguments$1=t2$0[2];ast$0=t0$0[2];mac$2=info$2.go(wrap_macro_func$0(info$2,arguments$1,ast$0),"parse","eval");s$1=__lt____lt____colon__$0(info$2.mark(__amp____colon__(["symbol",sym$0],({"env":name$0.env}))),name$0);return ["declare_raw",s$1,wrap_macro$0(info$2,expr_mac2$0(mac$2))];}else{return ___match_error(ph$0$0);}});t0$3=getProjector(mac$0("macro"))($targ$1);if(t0$3[0]){macro_mac$0=t0$3[1];}else{___match_error($targ$1);}$targ$2=(function(context$1,info$3,form$1,ph$1$0){let t0$5;let t0$6;let mac$3;let s$2;let name$1;let sym$1;let arguments$2;let ast$1;let t0$4;let t1$1;let t2$1;let t3$1;let t4$1;let bridge$$12444$0;t0$4=ph$1$0;t1$1=t0$4.length;if(((t1$1===3)&&((t0$4[0]==="data")&&((t2$1=t0$4[1]),(Array.isArray(t2$1)&&((t3$1=t2$1.length),((t3$1===3)&&((t2$1[0]==="send")&&((t4$1=t2$1[1]),(name$1=t4$1),(bridge$$12444$0=t4$1),((Array.isArray(bridge$$12444$0)&&((t0$5=bridge$$12444$0.length),((t0$5===2)&&((bridge$$12444$0[0]==="symbol")&&((sym$1=bridge$$12444$0[1]),true)))))||(Array.isArray(bridge$$12444$0)&&((t0$6=bridge$$12444$0.length),((t0$6===2)&&((bridge$$12444$0[0]==="value")&&((sym$1=bridge$$12444$0[1]),true))))))))))))))){arguments$2=t2$1[2];ast$1=t0$4[2];mac$3=info$3.go(wrap_macro_func$0(info$3,arguments$2,ast$1),"parse","eval");s$2=__lt____lt____colon__$0(info$3.mark(__amp____colon__(["symbol",sym$1],({"env":name$1.env}))),name$1);return ["declare_raw",s$2,wrap_macro$0(info$3,ctx_mac$0(mac$3))];}else{return ___match_error(ph$1$0);}});t0$7=getProjector(mac$0("cmacro"))($targ$2);if(t0$7[0]){cmacro_mac$0=t0$7[1];}else{___match_error($targ$2);}$targ$3=(function(context$2,info$4,temp$0$0,temp$1$0){let t0$8;let t0$9;let t1$2;let m$0;let acc$0;let temp$2;let macs$0;let the_macros$0;let form$2;let env$1;let body$1;t0$8=temp$0$0;form$2=t0$8;if(___hasprop(t0$8,"env")){env$1=t0$8.env;}else{___match_error(temp$0$0);}t0$9=temp$1$0;if((Array.isArray(t0$9)&&((t1$2=t0$9.length),((t1$2===2)&&(t0$9[0]==="data"))))){body$1=t0$9[1];}else{___match_error(temp$1$0);}the_macros$0=info$4.go(body$1,"parse","eval");acc$0=[];temp$2=null;m$0=null;$3:for(m$0 of items(the_macros$0)){let f$1;let k$0;let v$0;let t0$10;let t1$3;t0$10=m$0;if((Array.isArray(t0$10)&&((t1$3=t0$10.length),(t1$3===2)))){k$0=t0$10[0];v$0=t0$10[1];f$1=(function f(ctx$0,info$5,form$3,expr$0){return v$0.call(info$5,expr$0);});temp$2=["declare_raw",__amp____colon__(["symbol",k$0],({"env":env$1})),["macro",f$1]];acc$0.push(temp$2);}else{___match_error(m$0);}}macs$0=acc$0;return ["splice"].concat(macs$0);});t0$11=getProjector(mac$0("macros"))($targ$3);if(t0$11[0]){macros_mac$0=t0$11[1];}else{___match_error($targ$3);}$targ$4=(function(context$3,info$6,form$4,ph$2$0){let mac$4;let name$2;let sym$2;let arguments$3;let ast$2;let t0$12;let t1$4;let t2$2;let t3$2;let t4$2;let t5$0;t0$12=ph$2$0;t1$4=t0$12.length;if(((t1$4===3)&&((t0$12[0]==="data")&&((t2$2=t0$12[1]),(Array.isArray(t2$2)&&((t3$2=t2$2.length),((t3$2===3)&&((t2$2[0]==="send")&&((t4$2=t2$2[1]),(name$2=t4$2),(Array.isArray(t4$2)&&((t5$0=t4$2.length),((t5$0===2)&&(t4$2[0]==="symbol"))))))))))))){sym$2=t4$2[1];arguments$3=t2$2[2];ast$2=t0$12[2];mac$4=info$6.go(["send",["symbol","->"],["data",arguments$3,ast$2]],"parse","eval");return ["declare_raw",name$2,wrap_macro$0(info$6,mac$4)];}else{return ___match_error(ph$2$0);}});t0$13=getProjector(mac$0("oldmacro"))($targ$4);if(t0$13[0]){oldmacro_mac$0=t0$13[1];}else{___match_error($targ$4);}return exports$0;});(module["exports"]=$targ$0);[];
//# sourceMappingURL=macrodef.js.map

