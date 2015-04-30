
'use strict';require('earlgrey-runtime/6');let $targ$3;let $targ$4;let $targ$5;let $targ$6;let $targ$7;let $targ$8;let $targ$9;let $targ$10;let $targ$11;let $0$0;let binsearch$0;let $1$0;let __lt____gt__$0;let _repr$0;let fs$0;let opg$0;let Source$0;let Location$0;let $2$0;let highlight$0;let highlight_locations$0;let merge_locations$0;let repr$0;let __lt____lt____colon__$0;let __plus____plus____colon__$0;let format_error$0;let display_error$0;$0$0=require("./util");binsearch$0=getProperty($0$0,"binsearch","./util");$1$0=require("./pp");__lt____gt__$0=getProperty($1$0,"<>","./pp");_repr$0=getProperty($1$0,"repr","./pp");fs$0=require("fs");opg$0=require("opg");Source$0=getProperty(opg$0,"Source","opg");Location$0=getProperty(opg$0,"Location","opg");$2$0=require("opg/lib/highlight");highlight$0=getProperty($2$0,"highlight","opg/lib/highlight");highlight_locations$0=getProperty($2$0,"highlightLocations","opg/lib/highlight");merge_locations$0=getProperty($2$0,"mergeLocations","opg/lib/highlight");repr$0=_repr$0;__lt____lt____colon__$0=(function(x$0,y$0){let $targ$1;let $targ$2;let $targ$0;if((!getChecker(Location$0)(x$0.location))){if(((!y$0)||getChecker(Location$0)(y$0))){$targ$0=y$0;}else{$targ$0=y$0.location;}(x$0["location"]=$targ$0);if(y$0.called){$targ$1=y$0.called;(x$0["called"]=$targ$1);(void 0);}if(y$0.name){$targ$2=y$0.name;(x$0["name"]=$targ$2);(void 0);}}return x$0;});__plus____plus____colon__$0=(function(x$1,y$1){let rval$0;let x2$0;let y2$0;if(((!x$1)||getChecker(Location$0)(x$1))){x2$0=x$1;}else{x2$0=x$1.location;}if(((!y$1)||getChecker(Location$0)(y$1))){y2$0=y$1;}else{y2$0=y$1.location;}rval$0=false;try{rval$0=merge_locations$0([x2$0,y2$0]);rval$0;}catch(excv$0){let e$0;e$0=excv$0;rval$0=undefined;rval$0;}return rval$0;});format_error$0=(function format_error(){let m$1;let acc$0;let temp$0;let hls$0;let locs$0;let rval$1;let loc$1;let data$0;let other$0;let url$0;let start$0;let end$0;let loc$0;let args$0;let fmt_args$0;let $$5179$0;let $$5180$0;let $$5181$0;let t0$1;let t1$1;let t2$0;let e$1;let ph$1$0;let context$0;let t0$0;let t1$0;let m$0$0;m$0$0=arguments;t0$0=m$0$0.length;if(((t0$0>=1)&&(t0$0<=2))){t1$0=m$0$0[0];e$1=t1$0;ph$1$0=t1$0;if((1>=t0$0)){context$0=0;}else{context$0=m$0$0[1];}fmt_args$0=(function fmt_args(e$2){if((e$2.args&&e$2.args.length)){return ENode([".error_args"],({}),repr$0(e$2.args));}else{return "";}});t0$1=ph$1$0;if((getChecker(ErrorFactory(["syntax"]))(t0$1)&&(___hasprop(t0$1,"args")&&((t1$1=t0$1.args),(Array.isArray(t1$1)&&((t2$0=t1$1.length),(t2$0===1))))))){args$0=t1$1[0];hls$0=["hl1","hl2","hl3","hl4"];acc$0=[];temp$0=null;m$1=null;$3:for(m$1 of enumerate(items(args$0))){let i$0;let key$0;let arg$0;let t0$2;let t1$2;let t2$1;let t3$0;t0$2=m$1;if((Array.isArray(t0$2)&&((t1$2=t0$2.length),((t1$2===2)&&((i$0=t0$2[0]),(t2$1=t0$2[1]),(Array.isArray(t2$1)&&((t3$0=t2$1.length),((t3$0===2)&&((key$0=t2$1[0]),(arg$0=t2$1[1]),(arg$0&&arg$0.location)))))))))){temp$0=[arg$0.location,send(hls$0,(i$0%4))];acc$0.push(temp$0);}else{false;}}locs$0=acc$0;return ENode(["div"],({}),[ENode([".error"],({}),[ENode([".error_type"],({}),e$1.name),ENode([".error_message"],({}),e$1.message)]),ENode([".error_args",".syntax"],({}),repr$0(args$0)),highlight_locations$0(locs$0,context$0)]);}else{if((($$5180$0=___hasprop(t0$1,"location"))&&((t1$1=t0$1.location),getChecker(Location$0)(t1$1)))){loc$0=t1$1;return ENode(["div"],({}),[ENode([".error"],({}),[ENode([".error_type"],({}),e$1.name),ENode([".error_message"],({}),e$1.message)]),fmt_args$0(e$1),highlight_locations$0([[loc$0,"hl1"]],context$0),ENode([".traceback"],({}),(e$1.stack||""))]);}else{if(($$5180$0&&(Array.isArray(t1$1)&&((t2$0=t1$1.length),((t2$0===4)&&(t1$1[0]==="location")))))){url$0=t1$1[1];start$0=t1$1[2];end$0=t1$1[3];rval$1=false;try{rval$1=fs$0.readFileSync(url$0,"utf8");rval$1;}catch(excv$1){let e$3;e$3=excv$1;rval$1=null;rval$1;}data$0=rval$1;if(data$0){loc$1=Location$0(Source$0(data$0,url$0),start$0,end$0);return ENode(["div"],({}),[ENode([".error"],({}),[ENode([".error_type"],({}),e$1.name),ENode([".error_message"],({}),e$1.message)]),fmt_args$0(e$1),highlight_locations$0([[loc$1,"hl1"]],context$0),ENode([".traceback"],({}),ENode([],({}),(e$1.stack||"")))]);}else{return ENode(["div"],({}),[ENode([".error"],({}),[ENode([".error_type"],({}),e$1.name),ENode([".error_message"],({}),e$1.message)]),fmt_args$0(e$1),ENode([".traceback"],({}),ENode([],({}),(e$1.stack||e$1)))]);}}else{other$0=ph$1$0;return ENode(["div"],({}),[ENode([".error"],({}),[ENode([".error_type"],({}),e$1.name),ENode([".error_message"],({}),e$1.message)]),fmt_args$0(e$1),ENode([".traceback"],({}),ENode([],({}),e$1.stack))]);}}}}else{return ___match_error(m$0$0,"{match e, context = 0}");}});display_error$0=(function display_error(e$4){return __lt____gt__$0(null,format_error$0(e$4));});$targ$3=Source$0;(exports["Source"]=$targ$3);$targ$4=Location$0;(exports["Location"]=$targ$4);$targ$5=highlight$0;(exports["highlight"]=$targ$5);$targ$6=highlight_locations$0;(exports["highlight_locations"]=$targ$6);$targ$7=merge_locations$0;(exports["merge_locations"]=$targ$7);$targ$8=__lt____lt____colon__$0;(exports["<<:"]=$targ$8);$targ$9=__plus____plus____colon__$0;(exports["++:"]=$targ$9);$targ$10=format_error$0;(exports["format_error"]=$targ$10);$targ$11=display_error$0;(exports["display_error"]=$targ$11);(void 0);
//# sourceMappingURL=location.js.map

