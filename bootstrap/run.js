
'use strict';require('earlgrey-runtime/6');let $targ$34;let $0$0;let Source$0;let format_error$0;let highlight_locations$0;let fs$0;let path$0;let $1$0;let usage$0;let display_error$0;let usage_error$0;let extract_options$0;let walk$0;let copy$0;let _gen$0;let interactive$0;let compile_path$0;let run$0;let _run$0;$0$0=require("./location");Source$0=getProperty($0$0,"Source","./location");format_error$0=getProperty($0$0,"format_error","./location");highlight_locations$0=getProperty($0$0,"highlight_locations","./location");fs$0=require("fs");path$0=require("path");$1$0=require("earlgrey-runtime/5");usage$0="Usage: earl [global options] command [options] [arguments...]\n\nearl run [options] [file] [arguments...]\n  Run the specified file as a script. The arguments are available in\n  process.argv.slice{2} of the script.\n  Options:\n    -e  --eval <code>   Run the provided code instead of reading from a file.\n    -p  --print         Print the result of the evaluation to standard out.\n    -i  --interactive   Start an interactive interpreter after execution\n                        in the global environment of the script.\n    -r  --recompile     Recompile scripts instead of using the cache\n    -v  --verbose       Print information about the operations performed\n    -5  --es5           Generate and run EcmaScript v5\n    -6  --es6           Generate and run EcmaScript v6 (default)\n\nearl compile [options] [file... | dir]\n  Compile the specified source files into .js files. The files will be\n  placed next to the originals.\n  If a directory is given, all .eg files in the directory hierarchy\n  will be compiled. The -o option can be used to compile the files\n  into a different directory (all non-eg files will be copied over).\n  Options:\n    -o  --output <dir>  Output in given directory.\n    -p  --print         Print the compiled JavaScript to standard out.\n                        No files are created.\n    -e  --eval <code>   Compile the provided code instead of reading from a file.\n    -n  --noboil        Don't output boilerplate code (useful with -p)\n    -s  --sourcemaps    Output source maps for the generated files\n    -r  --recompile     Recompile scripts instead of using the cache\n    -v  --verbose       Print information about the operations performed\n    -5  --es5           Generate EcmaScript v5\n    -6  --es6           Generate EcmaScript v6 (default)\n\nearl\n  Start an interactive session.\n\nGlobal options:\n  -h  --help      Print this message.\n  -v  --version   Print the version\n";display_error$0=(function display_error(){let m$1;let acc$0;let temp$0;let pr$0;let hls$0;let locs$0;let accum$0;let args$0;let $$24822$0;let t0$1;let t1$1;let t2$0;let e$0;let ph$1$0;let rethrow$0;let t0$0;let t1$0;let m$0$0;m$0$0=arguments;t0$0=m$0$0.length;if(((t0$0>=1)&&(t0$0<=2))){t1$0=m$0$0[0];e$0=t1$0;ph$1$0=t1$0;if((1>=t0$0)){rethrow$0=false;}else{rethrow$0=m$0$0[1];}t0$1=ph$1$0;if((getChecker(ErrorFactory(["syntax"]))(t0$1)&&(___hasprop(t0$1,"args")&&((t1$1=t0$1.args),(Array.isArray(t1$1)&&((t2$0=t1$1.length),(t2$0===1))))))){args$0=t1$1[0];console.error(String(e$0));hls$0=["hl1","hl2","hl3","hl4"];acc$0=[];temp$0=null;m$1=null;$2:for(m$1 of enumerate(items(args$0))){let i$0;let key$0;let arg$0;let t0$2;let t1$2;let t2$1;let t3$0;t0$2=m$1;if((Array.isArray(t0$2)&&((t1$2=t0$2.length),((t1$2===2)&&((i$0=t0$2[0]),(t2$1=t0$2[1]),(Array.isArray(t2$1)&&((t3$0=t2$1.length),((t3$0===2)&&((key$0=t2$1[0]),(arg$0=t2$1[1]),(arg$0&&arg$0.location)))))))))){temp$0=[arg$0.location,send(hls$0,(i$0%4))];acc$0.push(temp$0);}else{false;}}locs$0=acc$0;accum$0="\n";pr$0=(function pr(ph$2$0){let l$0;let m$2$0;let t0$4;let t1$3;let m$3;let $targ$0;let pre$0;let post$0;let m$4;let acc$1;let temp$1;let other$0;let a$0;let n$0;let s$0;let $$24931$0;let t0$3;t0$3=ph$2$0;if((typeof(t0$3)==="string")){s$0=t0$3;return (accum$0=(accum$0+s$0));}else{if(getChecker(ENode)(t0$3)){n$0=t0$3;m$2$0=n$0;if(getChecker(ENode([".hl1"],({}),[]))(m$2$0)){$targ$0=["[1;32m","[0m"];}else{if(getChecker(ENode([".hl2"],({}),[]))(m$2$0)){$targ$0=["[1;33m","[0m"];}else{if(getChecker(ENode([".hl3"],({}),[]))(m$2$0)){$targ$0=["[1;36m","[0m"];}else{if(getChecker(ENode([".hl4"],({}),[]))(m$2$0)){$targ$0=["[1;35m","[0m"];}else{if(getChecker(ENode([".lineno"],({}),[]))(m$2$0)){l$0=Math.floor((Math.log(n$0.children[0])/Math.log(10)));$targ$0=[("[1m"+Array((3-l$0)).join(" ")),":[0m "];}else{$targ$0=["",""];}}}}}t0$4=$targ$0;if((Array.isArray(t0$4)&&((t1$3=t0$4.length),(t1$3===2)))){pre$0=t0$4[0];post$0=t0$4[1];}else{___match_error($targ$0,"{var pre, var post}");}[pre$0,post$0];if(getChecker(ENode([".sourcepos"],({}),[]))(n$0)){pre$0=(pre$0+" ");}accum$0=(accum$0+pre$0);m$3=null;$3:for(m$3 of n$0.children){let child$0;child$0=m$3;pr$0(child$0);}accum$0=(accum$0+post$0);if((getChecker(ENode(["div"],({}),[]))(n$0)&&nequal(send(accum$0,(accum$0.length-1)),"\n"))){return (accum$0=(accum$0+"\n"));}}else{if(Array.isArray(t0$3)){a$0=t0$3;acc$1=[];temp$1=null;m$4=null;$4:for(m$4 of a$0){let child$1;child$1=m$4;temp$1=pr$0(child$1);acc$1.push(temp$1);}return acc$1;}else{other$0=ph$2$0;return (accum$0=(accum$0+String(other$0)));}}}});pr$0(highlight_locations$0(locs$0,0));return console.error(accum$0);}else{if(rethrow$0){throw e$0;}else{return console.error((e$0.stack||String(e$0)));}}}else{return ___match_error(m$0$0,"{match e, rethrow = false}");}});usage_error$0=(function usage_error(message$0){console.error(usage$0);console.error(message$0);return process.exit(1);});extract_options$0=(function extract_options(temp$2$0,opttable$0,optmessage$0){let t0$5;let results$0;let associate$0;let process_option$0;let argv$0;t0$5=getProjector(clone)(temp$2$0);if(t0$5[0]){argv$0=t0$5[1];}else{___match_error(temp$2$0);}results$0=({});associate$0=null;process_option$0=(function process_option(original$0,opt$0,last$0){let $targ$1;let $targ$2;let name$2;let name$1;let name$0;let $$25092$0;let $$25093$0;let $$25094$0;let $$25095$0;let t0$6;let m$5$0;m$5$0=send(opttable$0,opt$0);if((m$5$0===(void 0))){return usage_error$0(((("Unrecognized "+optmessage$0)+": ")+original$0));}else{if((($$25092$0=Array.isArray(m$5$0))&&((t0$6=m$5$0.length),(($$25094$0=(t0$6===2))&&(m$5$0[0]==="flag"))))){name$0=m$5$0[1];$targ$1=true;(results$0[name$0]=$targ$1);return (void 0);}else{if(($$25094$0&&(($$25095$0=(m$5$0[0]==="value"))&&((name$1=m$5$0[1]),last$0)))){associate$0=name$1;return associate$0;}else{if($$25095$0){name$2=m$5$0[1];$targ$2=true;(results$0[name$2]=$targ$2);return (void 0);}else{return ___match_error(m$5$0,"#value{name}");}}}}});$5:while(argv$0.length){let $targ$3;let m$7;let acc$2;let temp$3;let $targ$4;let other$2;let other$1;let opts$0;let opt$2;let opt$1;let value$0;let t0$7;let t1$4;let t2$2;let m$6$0;let arg$1;arg$1=argv$0.shift();m$6$0=arg$1;t0$7=getProjector(RegExp("^--([a-zA-Z_0-9\\-]+)=(.*)",""))(m$6$0);if((t0$7[0]&&((t1$4=t0$7[1]),(t2$2=t1$4.length),(t2$2===3)))){t1$4[0];opt$1=t1$4[1];value$0=t1$4[2];process_option$0(arg$1,opt$1,true);$targ$3=value$0;(results$0[associate$0]=$targ$3);associate$0=null;associate$0;}else{t0$7=getProjector(RegExp("^--([a-zA-Z_\\-0-9]+)",""))(m$6$0);if((t0$7[0]&&((t1$4=t0$7[1]),(t2$2=t1$4.length),(t2$2===2)))){t1$4[0];opt$2=t1$4[1];process_option$0(arg$1,opt$2,true);}else{t0$7=getProjector(RegExp("^-([a-zA-Z_0-9]+)",""))(m$6$0);if((t0$7[0]&&((t1$4=t0$7[1]),(t2$2=t1$4.length),(t2$2===2)))){t1$4[0];opts$0=t1$4[1];acc$2=[];temp$3=null;m$7=null;$6:for(m$7 of enumerate(opts$0)){let i$1;let ch$0;let t0$8;let t1$5;t0$8=m$7;if((Array.isArray(t0$8)&&((t1$5=t0$8.length),(t1$5===2)))){i$1=t0$8[0];ch$0=t0$8[1];temp$3=process_option$0(arg$1,ch$0,equal(i$1,(opts$0.length-1)));acc$2.push(temp$3);}else{___match_error(m$7);}}acc$2;}else{other$1=m$6$0;if(associate$0){$targ$4=other$1;(results$0[associate$0]=$targ$4);associate$0=null;associate$0;}else{other$2=m$6$0;argv$0.unshift(other$2);break $5;}}}}}return [results$0,argv$0];});walk$0=(function walk(dir$0,partial$0,f$0){let rval$0;let m$8;let acc$3;let temp$4;let stats$0;rval$0=false;try{rval$0=fs$0.statSync(dir$0);rval$0;}catch(excv$0){let t$0;let e$1;e$1=excv$0;t$0=("Could not stat: "+dir$0);console.log(t$0);return false;rval$0;}stats$0=rval$0;if(stats$0.isDirectory()){f$0("dir",partial$0);acc$3=[];temp$4=null;m$8=null;$7:for(m$8 of fs$0.readdirSync(dir$0)){let newdir$0;let newpartial$0;let file$0;file$0=m$8;newdir$0=path$0.join(dir$0,file$0);newpartial$0=path$0.join(partial$0,file$0);temp$4=walk$0(newdir$0,newpartial$0,f$0);acc$3.push(temp$4);}return acc$3;}else{return f$0("file",partial$0);}});copy$0=(function copy(src$0,dest$0){let data$0;let rval$1;rval$1=false;try{data$0=fs$0.readFileSync(src$0,"binary");rval$1=fs$0.writeFileSync(dest$0,data$0,"binary");rval$1;}catch(excv$1){let t$1;let e$2;e$2=excv$1;t$1=("Could not copy: "+src$0);console.log(t$1);rval$1=t$1;rval$1;}return rval$1;});_gen$0=(function _gen(text$0,file$1,opts$1){let eg$0;let g$0;eg$0=require("./earl-grey");g$0=eg$0.Generator(opts$1);return g$0.generate(Source$0(text$0,path$0.resolve(file$1)));});interactive$0=(function interactive(g$1,e$3,o$0){let accum$1;let repl$0;let $targ$5;let settings$0;let runner$0;repl$0=require("repl");$targ$5=true;(g$1["interactive"]=$targ$5);settings$0=__amp____colon__(({"prompt":"<> ","ignoreUndefined":true}),((accum$1=({})),(accum$1["eval"]=(function(input$0,context$0,filename$0,callback$0){return spawn.call(this,(function*(){let x$1;let x$0;let t0$9;let t1$6;let t2$3;let m$9$0;let text$1;let result$0;let inp$0;let rval$2;rval$2=false;try{m$9$0=input$0;t0$9=getProjector(RegExp("^\\((.*\\n)\\)$",""))(m$9$0);if((t0$9[0]&&((t1$6=t0$9[1]),(t2$3=t1$6.length),(t2$3===2)))){t1$6[0];x$0=t1$6[1];inp$0=x$0;}else{t0$9=getProjector(RegExp("^\\((.*)\\)\\n$",""))(m$9$0);if((t0$9[0]&&((t1$6=t0$9[1]),(t2$3=t1$6.length),(t2$3===2)))){t1$6[0];x$1=t1$6[1];inp$0=x$1;}else{inp$0=input$0;}}if(equal(inp$0.trim(),"")){rval$2=callback$0(null,undefined);}else{text$1=g$1.generateInteractive(Source$0(inp$0,"<interactive>"),o$0);result$0=(yield e$3(text$1));rval$2=callback$0(null,result$0);}rval$2;}catch(excv$2){let e$4;e$4=excv$2;display_error$0(e$4);rval$2=callback$0(null,undefined);rval$2;}return rval$2;}));})),accum$1));runner$0=repl$0.start(settings$0);return runner$0.on("exit",(function(){return runner$0.outputStream.write("\n");}));});compile_path$0=(function compile_path(p$0,opts$2){let out$0;let t0$15;let $9$0;let beaut$0;let name$5;let name$4;let t0$16;let t1$9;let t2$4;let m$13$0;let noext$0;let $$25808$0;let m$12$0;let data$2;let $targ$8;let code$1;let map$1;let $$25525$0;let m$10$0;let stats$1;stats$1=fs$0.statSync(p$0);m$10$0=null;if(stats$1.isDirectory()){if(opts$2.print){usage_error$0("Cannot use --print when compiling a directory");}out$0=(opts$2.output||p$0);return walk$0(p$0,"/",(function(){let rval$3;let to$0;let from$0;let t0$13;let t1$8;let rval$4;let rval$5;let t$2;let fstat$0;let tstat$0;let rval$6;let t0$14;let rval$7;let $targ$6;let x$2;let name$3;let from$1;let to$1;let data$1;let $targ$7;let code$0;let map$0;let from$2;let to$2;let f$1;let results$1;let t0$12;let ph$5$0;let d$0;let $$25553$0;let $$25554$0;let $$25555$0;let t0$11;let t1$7;let ph$4$0;let t0$10;let m$11$0;m$11$0=arguments;t0$10=m$11$0.length;if((t0$10>=0)){ph$4$0=Array.prototype.slice.call(m$11$0,0);t0$11=ph$4$0;t1$7=t0$11.length;if((($$25555$0=(t1$7===2))&&(t0$11[0]==="dir"))){d$0=t0$11[1];from$0=path$0.join(p$0,d$0);if(opts$2.output){to$0=path$0.join(out$0,d$0);rval$3=false;try{rval$3=fs$0.mkdirSync(to$0);rval$3;}catch(excv$3){let e$5;e$5=excv$3;rval$3="ignore error";rval$3;}return rval$3;}}else{if(($$25555$0&&(t0$11[0]==="file"))){ph$5$0=t0$11[1];t0$12=getProjector(RegExp("(?:^((?:.*))\\.eg$)",""))(ph$5$0);if((t0$12[0]&&((results$1=t0$12[1]),results$1))){$targ$6=results$1;t0$13=$targ$6;if((Array.isArray(t0$13)&&((t1$8=t0$13.length),(t1$8===2)))){x$2=t0$13[0];name$3=t0$13[1];}else{___match_error($targ$6,"{x, name}");}[x$2,name$3];from$1=path$0.join(p$0,x$2);to$1=path$0.join(out$0,(name$3+".js"));if((!opts$2.recompile)){rval$4=false;try{rval$4=fs$0.statSync(from$1);rval$4;}catch(excv$4){let e$6;e$6=excv$4;rval$4=null;rval$4;}fstat$0=rval$4;rval$5=false;try{rval$5=fs$0.statSync(to$1);rval$5;}catch(excv$5){let e$7;e$7=excv$5;rval$5=null;rval$5;}tstat$0=rval$5;if(((fstat$0&&tstat$0)&&(fstat$0.mtime.getTime()<tstat$0.mtime.getTime()))){if(opts$2.verbose){t$2=("No change: "+from$1);console.log(t$2);t$2;}return true;}}rval$6=false;try{rval$6=fs$0.readFileSync(from$1,"utf8");rval$6;}catch(excv$6){let t$3;let e$8;e$8=excv$6;t$3=("Could not read: "+from$1);console.log(t$3);return false;rval$6;}data$1=rval$6;if(opts$2.verbose){console.log("Compiling:",from$1);}$targ$7=_gen$0(data$1,from$1,opts$2);t0$14=$targ$7;if((___hasprop(t0$14,"code")&&((code$0=t0$14.code),___hasprop(t0$14,"map")))){map$0=t0$14.map;}else{___match_error($targ$7,"{=> code, => map}");}[code$0,map$0];rval$7=false;try{fs$0.writeFileSync(to$1,(code$0+"\n"));if(map$0){rval$7=fs$0.writeFileSync((to$1+".map"),map$0);}rval$7;}catch(excv$7){let e$9;e$9=excv$7;rval$7=("Could not write: "+to$1);rval$7;}return rval$7;}else{if((!opts$2.output)){return null;}else{f$1=ph$5$0;from$2=path$0.join(p$0,f$1);to$2=path$0.join(out$0,f$1);return copy$0(from$2,to$2);}}}else{return ___match_error(ph$4$0,"{.file, match}");}}}else{return ___match_error(m$11$0,"{*match}");}}));}else{data$2=fs$0.readFileSync(p$0,"utf8");$targ$8=_gen$0(data$2,p$0,opts$2);t0$15=$targ$8;if((___hasprop(t0$15,"code")&&((code$1=t0$15.code),___hasprop(t0$15,"map")))){map$1=t0$15.map;}else{___match_error($targ$8,"{=> code, => map}");}[code$1,map$1];m$12$0=null;if(opts$2.print){$9$0=require("js-beautify");beaut$0=getProperty($9$0,"js","js-beautify");return console.log(beaut$0(code$1));}else{if(opts$2.output){fs$0.writeFileSync(opts$2.output,(code$1+"\n"));if(map$1){return fs$0.writeFileSync((opts$2.output+".map"),map$1);}}else{m$13$0=p$0;t0$16=getProjector(RegExp("^(.*).eg$",""))(m$13$0);if((t0$16[0]&&((t1$9=t0$16[1]),(t2$4=t1$9.length),(t2$4===2)))){t1$9[0];name$4=t1$9[1];noext$0=name$4;}else{name$5=m$13$0;noext$0=name$5;}fs$0.writeFileSync((noext$0+".js"),(code$1+"\n"));if(map$1){return fs$0.writeFileSync((noext$0+".js.map"),map$1);}}}}});run$0=(function run(argv$1){let defns$0;let t0$17;let t1$10;let rval$8;let $targ$9;let opts$3;let cmd$0;defns$0=({"h":["flag","help"],"help":["flag","help"],"v":["flag","version"],"version":["flag","version"]});$targ$9=extract_options$0(argv$1,defns$0,"global option");t0$17=$targ$9;if((Array.isArray(t0$17)&&((t1$10=t0$17.length),(t1$10===2)))){opts$3=t0$17[0];cmd$0=t0$17[1];}else{___match_error($targ$9,"{opts, cmd}");}[opts$3,cmd$0];rval$8=false;try{rval$8=_run$0(cmd$0,opts$3);rval$8;}catch(excv$8){let e$10;e$10=excv$8;rval$8=display_error$0(e$10,true);rval$8;}return rval$8;});_run$0=(function _run(ph$6$0,opts$4){let t$4;let $10$0;let version$0;let t0$19;let t0$20;let t0$21;let $targ$13;let accum$2;let t0$22;let $targ$14;let accum$3;let t0$23;let $targ$15;let accum$4;let t0$24;let $targ$16;let accum$5;let t0$25;let $targ$17;let accum$6;let t0$26;let $targ$18;let accum$7;let t0$27;let $targ$19;let accum$8;let defns$1;let t0$28;let t1$12;let $targ$20;let file$3;let t0$29;let m$14$0;let t0$30;let t1$13;let eg$1;let t0$31;let t1$14;let $13$0;let ev$0;let $targ$21;let $targ$22;let compiled$0;let srcfile$0;let t$5;let $targ$10;let o$1;let rest$0;let $targ$11;let register$0;let $targ$12;let file$2;let wd$0;let args$1;let g$2;let e$11;let result$1;let t0$32;let $targ$24;let accum$9;let t0$33;let $targ$25;let accum$10;let t0$34;let $targ$26;let accum$11;let t0$35;let $targ$27;let accum$12;let t0$36;let $targ$28;let accum$13;let t0$37;let $targ$29;let accum$14;let t0$38;let $targ$30;let accum$15;let t0$39;let $targ$31;let accum$16;let t0$40;let $targ$32;let accum$17;let defns$2;let t0$41;let t1$15;let t0$43;let $15$0;let beaut$1;let $$26318$0;let m$16$0;let $targ$33;let code$2;let map$2;let m$17;let acc$4;let temp$5;let paths$0;let p$1;let $$26209$0;let $$26210$0;let t0$42;let m$15$0;let $targ$23;let o$2;let rest$1;let register$1;let stuff$0;let rawargs$1;let rawargs$0;let $$25941$0;let $$25942$0;let $$25943$0;let bridge$$25937$0;let t0$18;let t1$11;if(opts$4.help){return console.log(usage$0);}else{if(opts$4.version){$10$0=require("./version");version$0=getProperty($10$0,"version","./version");t$4=ENode([],({}),["Earl Grey version ",version$0]).toString();console.log(t$4);return t$4;}else{bridge$$25937$0=ph$6$0;if(((Array.isArray(bridge$$25937$0)&&((t0$19=bridge$$25937$0.length),(t0$19===0)))||(Array.isArray(bridge$$25937$0)&&((t0$20=bridge$$25937$0.length),((t0$20===1)&&(bridge$$25937$0[0]==="run")))))){return _run$0(["run","-i"],opts$4);}else{t0$18=ph$6$0;t1$11=t0$18.length;if((($$25943$0=(t1$11>=1))&&(t0$18[0]==="run"))){rawargs$0=Array.prototype.slice.call(t0$18,1);defns$1=__amp____colon__((($targ$13=["value","evaluate"]),(accum$2=({})),(t0$21=$targ$13),(accum$2["e"]=t0$21),(accum$2["eval"]=t0$21),accum$2),__amp____colon__((($targ$14=["flag","verbose"]),(accum$3=({})),(t0$22=$targ$14),(accum$3["v"]=t0$22),(accum$3["verbose"]=t0$22),accum$3),__amp____colon__((($targ$15=["flag","interactive"]),(accum$4=({})),(t0$23=$targ$15),(accum$4["i"]=t0$23),(accum$4["interactive"]=t0$23),accum$4),__amp____colon__((($targ$16=["flag","recompile"]),(accum$5=({})),(t0$24=$targ$16),(accum$5["r"]=t0$24),(accum$5["recompile"]=t0$24),accum$5),__amp____colon__((($targ$17=["flag","print"]),(accum$6=({})),(t0$25=$targ$17),(accum$6["p"]=t0$25),(accum$6["print"]=t0$25),accum$6),__amp____colon__((($targ$18=["flag","es6"]),(accum$7=({})),(t0$26=$targ$18),(accum$7["6"]=t0$26),(accum$7["es6"]=t0$26),accum$7),(($targ$19=["flag","es5"]),(accum$8=({})),(t0$27=$targ$19),(accum$8["5"]=t0$27),(accum$8["es5"]=t0$27),accum$8)))))));$targ$10=extract_options$0(rawargs$0,defns$1,"option for run");t0$28=$targ$10;if((Array.isArray(t0$28)&&((t1$12=t0$28.length),(t1$12===2)))){o$1=t0$28[0];rest$0=t0$28[1];}else{___match_error($targ$10,"{o, rest}");}[o$1,rest$0];$targ$11=true;(o$1["noboil"]=$targ$11);if(((!o$1["es6"])&&equal(process.title,"node"))){$targ$20=true;(o$1["es5"]=$targ$20);(void 0);}register$0=require("./register");register$0.install(o$1);if(o$1.evaluate){$targ$12=[null,process.cwd(),rest$0];}else{m$14$0=rest$0.shift();if(((m$14$0===(void 0))&&o$1.interactive)){$targ$12=[null,process.cwd(),rest$0];}else{if((m$14$0===(void 0))){$targ$12=usage_error$0("No filename specified.");}else{t0$29=getProjector(path$0.resolve)(m$14$0);if(t0$29[0]){file$3=t0$29[1];$targ$12=[file$3,file$3,rest$0];}else{$targ$12=___match_error(m$14$0,"path.resolve! file");}}}}t0$30=$targ$12;if((Array.isArray(t0$30)&&((t1$13=t0$30.length),(t1$13===3)))){file$2=t0$30[0];wd$0=t0$30[1];args$1=t0$30[2];}else{___match_error($targ$12,"{file, wd, args}");}[file$2,wd$0,args$1];g$2=null;e$11=null;result$1=null;if(equal(file$2,null)){eg$1=require("./earl-grey");e$11=eg$1.evaluator(({"filename":"<repl>","showname":"<repl>","cwd":"<repl>"}));g$2=eg$1.Generator(o$1);if(o$1.evaluate){result$1=e$11(g$2.generate(Source$0(o$1.evaluate,"<repl>")).code);result$1;}}else{$13$0=require("./evaluator");ev$0=getProperty($13$0,"evaluator","./evaluator");$targ$21=["earl-run",file$2].concat(rest$0);(process["argv"]=$targ$21);$targ$22=register$0.getCache(file$2,o$1);t0$31=$targ$22;if((Array.isArray(t0$31)&&((t1$14=t0$31.length),(t1$14===3)))){g$2=t0$31[0];compiled$0=t0$31[1];srcfile$0=t0$31[2];}else{___match_error($targ$22,"{g, compiled, srcfile}");}[g$2,compiled$0,srcfile$0];e$11=ev$0(({"filename":file$2,"showname":srcfile$0,"cwd":file$2}));result$1=e$11(compiled$0);result$1;}if(o$1.print){t$5=result$1;console.log(t$5);t$5;}if(o$1.interactive){return interactive$0(g$2,e$11,o$1);}}else{if(($$25943$0&&(t0$18[0]==="compile"))){rawargs$1=Array.prototype.slice.call(t0$18,1);defns$2=__amp____colon__((($targ$24=["value","output"]),(accum$9=({})),(t0$32=$targ$24),(accum$9["o"]=t0$32),(accum$9["output"]=t0$32),accum$9),__amp____colon__((($targ$25=["flag","print"]),(accum$10=({})),(t0$33=$targ$25),(accum$10["p"]=t0$33),(accum$10["print"]=t0$33),accum$10),__amp____colon__((($targ$26=["value","evaluate"]),(accum$11=({})),(t0$34=$targ$26),(accum$11["e"]=t0$34),(accum$11["eval"]=t0$34),accum$11),__amp____colon__((($targ$27=["flag","noboil"]),(accum$12=({})),(t0$35=$targ$27),(accum$12["n"]=t0$35),(accum$12["noboil"]=t0$35),accum$12),__amp____colon__((($targ$28=["flag","sourceMap"]),(accum$13=({})),(t0$36=$targ$28),(accum$13["s"]=t0$36),(accum$13["sourcemaps"]=t0$36),accum$13),__amp____colon__((($targ$29=["flag","recompile"]),(accum$14=({})),(t0$37=$targ$29),(accum$14["r"]=t0$37),(accum$14["recompile"]=t0$37),accum$14),__amp____colon__((($targ$30=["flag","es6"]),(accum$15=({})),(t0$38=$targ$30),(accum$15["6"]=t0$38),(accum$15["es6"]=t0$38),accum$15),__amp____colon__((($targ$31=["flag","es5"]),(accum$16=({})),(t0$39=$targ$31),(accum$16["5"]=t0$39),(accum$16["es5"]=t0$39),accum$16),(($targ$32=["flag","verbose"]),(accum$17=({})),(t0$40=$targ$32),(accum$17["v"]=t0$40),(accum$17["verbose"]=t0$40),accum$17)))))))));$targ$23=extract_options$0(rawargs$1,defns$2,"option for compile");t0$41=$targ$23;if((Array.isArray(t0$41)&&((t1$15=t0$41.length),(t1$15===2)))){o$2=t0$41[0];rest$1=t0$41[1];}else{___match_error($targ$23,"{o, rest}");}[o$2,rest$1];register$1=require("./register");register$1.install(o$2);m$15$0=rest$1;if(o$2.evaluate){$targ$33=_gen$0(o$2.evaluate,"<cli>",o$2);t0$43=$targ$33;if((___hasprop(t0$43,"code")&&((code$2=t0$43.code),___hasprop(t0$43,"map")))){map$2=t0$43.map;}else{___match_error($targ$33,"{=> code, => map}");}[code$2,map$2];m$16$0=null;if(o$2.output){return fs$0.writeFileSync(o$2.output,(code$2+"\n"));}else{$15$0=require("js-beautify");beaut$1=getProperty($15$0,"js","js-beautify");return console.log(beaut$1(code$2));}}else{if((($$26209$0=Array.isArray(m$15$0))&&((t0$42=m$15$0.length),(t0$42===0)))){return usage_error$0("Must provide at least one file or directory to compile.");}else{if(($$26209$0&&(t0$42===1))){p$1=m$15$0[0];return compile_path$0(p$1,o$2);}else{if(o$2.output){return usage_error$0("The -o option cannot be used if more than one file or directory is compiled.");}else{if((Array.isArray(m$15$0)&&((t0$42=m$15$0.length),(t0$42>=0)))){paths$0=Array.prototype.slice.call(m$15$0,0);acc$4=[];temp$5=null;m$17=null;$16:for(m$17 of paths$0){let p$2;p$2=m$17;temp$5=compile_path$0(p$2,o$2);acc$4.push(temp$5);}return acc$4;}else{return ___match_error(m$15$0,"{*paths}");}}}}}}else{stuff$0=ph$6$0;return usage_error$0(("Invalid use. Did you mean: earl run "+stuff$0.join(" ")));}}}}}});$targ$34=run$0;(exports["run"]=$targ$34);(void 0);
//# sourceMappingURL=run.js.map

