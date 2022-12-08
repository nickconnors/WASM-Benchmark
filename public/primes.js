var Module=typeof Module!="undefined"?Module:{};var moduleOverrides=Object.assign({},Module);var arguments_=[];var thisProgram="./this.program";var quit_=(status,toThrow)=>{throw toThrow};var ENVIRONMENT_IS_WEB=typeof window=="object";var ENVIRONMENT_IS_WORKER=typeof importScripts=="function";var ENVIRONMENT_IS_NODE=typeof process=="object"&&typeof process.versions=="object"&&typeof process.versions.node=="string";var ENVIRONMENT_IS_SHELL=!ENVIRONMENT_IS_WEB&&!ENVIRONMENT_IS_NODE&&!ENVIRONMENT_IS_WORKER;var scriptDirectory="";function locateFile(path){if(Module["locateFile"]){return Module["locateFile"](path,scriptDirectory)}return scriptDirectory+path}var read_,readAsync,readBinary,setWindowTitle;function logExceptionOnExit(e){if(e instanceof ExitStatus)return;let toLog=e;err("exiting due to exception: "+toLog)}if(ENVIRONMENT_IS_NODE){if(ENVIRONMENT_IS_WORKER){scriptDirectory=require("path").dirname(scriptDirectory)+"/"}else{scriptDirectory=__dirname+"/"}var fs,nodePath;if(typeof require==="function"){fs=require("fs");nodePath=require("path")}read_=(filename,binary)=>{filename=nodePath["normalize"](filename);return fs.readFileSync(filename,binary?undefined:"utf8")};readBinary=filename=>{var ret=read_(filename,true);if(!ret.buffer){ret=new Uint8Array(ret)}return ret};readAsync=(filename,onload,onerror)=>{filename=nodePath["normalize"](filename);fs.readFile(filename,function(err,data){if(err)onerror(err);else onload(data.buffer)})};if(process["argv"].length>1){thisProgram=process["argv"][1].replace(/\\/g,"/")}arguments_=process["argv"].slice(2);if(typeof module!="undefined"){module["exports"]=Module}process["on"]("uncaughtException",function(ex){if(!(ex instanceof ExitStatus)){throw ex}});process["on"]("unhandledRejection",function(reason){throw reason});quit_=(status,toThrow)=>{if(keepRuntimeAlive()){process["exitCode"]=status;throw toThrow}logExceptionOnExit(toThrow);process["exit"](status)};Module["inspect"]=function(){return"[Emscripten Module object]"}}else if(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER){if(ENVIRONMENT_IS_WORKER){scriptDirectory=self.location.href}else if(typeof document!="undefined"&&document.currentScript){scriptDirectory=document.currentScript.src}if(scriptDirectory.indexOf("blob:")!==0){scriptDirectory=scriptDirectory.substr(0,scriptDirectory.replace(/[?#].*/,"").lastIndexOf("/")+1)}else{scriptDirectory=""}{read_=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.send(null);return xhr.responseText};if(ENVIRONMENT_IS_WORKER){readBinary=url=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,false);xhr.responseType="arraybuffer";xhr.send(null);return new Uint8Array(xhr.response)}}readAsync=(url,onload,onerror)=>{var xhr=new XMLHttpRequest;xhr.open("GET",url,true);xhr.responseType="arraybuffer";xhr.onload=()=>{if(xhr.status==200||xhr.status==0&&xhr.response){onload(xhr.response);return}onerror()};xhr.onerror=onerror;xhr.send(null)}}setWindowTitle=title=>document.title=title}else{}var out=Module["print"]||console.log.bind(console);var err=Module["printErr"]||console.warn.bind(console);Object.assign(Module,moduleOverrides);moduleOverrides=null;if(Module["arguments"])arguments_=Module["arguments"];if(Module["thisProgram"])thisProgram=Module["thisProgram"];if(Module["quit"])quit_=Module["quit"];var wasmBinary;if(Module["wasmBinary"])wasmBinary=Module["wasmBinary"];var noExitRuntime=Module["noExitRuntime"]||true;var WebAssembly={Memory:function(opts){this.buffer=new ArrayBuffer(opts["initial"]*65536)},Module:function(binary){},Instance:function(module,info){this.exports=(
// EMSCRIPTEN_START_ASM
function instantiate(W){function c(d){d.set=function(a,b){this[a]=b};d.get=function(a){return this[a]};return d}var e;var f=new ArrayBuffer(16);var g=new Int32Array(f);var h=new Float32Array(f);var i=new Float64Array(f);function j(k){return g[k]}function l(k,m){g[k]=m}function n(){return i[0]}function o(m){i[0]=m}function p(){throw new Error("abort")}function U(V){var q=V.a;var r=q.a;var s=r.buffer;var t=new Int8Array(s);var u=new Int16Array(s);var v=new Int32Array(s);var w=new Uint8Array(s);var x=new Uint16Array(s);var y=new Uint32Array(s);var z=new Float32Array(s);var A=new Float64Array(s);var B=Math.imul;var C=Math.fround;var D=Math.abs;var E=Math.clz32;var F=Math.min;var G=Math.max;var H=Math.floor;var I=Math.ceil;var J=Math.trunc;var K=Math.sqrt;var L=NaN;var M=Infinity;var N=q.b;var O=q.c;var P=q.d;var Q=5245840;var R=0;
// EMSCRIPTEN_START_FUNCS
function oa(a,b,c,d,e,f){a=a|0;b=+b;c=c|0;d=d|0;e=e|0;f=f|0;var g=0,h=0,i=0,k=0,l=0,m=0,n=0,p=0,q=0,r=0,s=0,u=0,x=0,y=0,z=0,A=0,C=0,E=0;n=Q-560|0;Q=n;v[n+44>>2]=0;o(+b);g=j(1)|0;j(0)|0;a:{if((g|0)<0){x=1;E=1034;b=-b;o(+b);g=j(1)|0;j(0)|0;break a}if(e&2048){x=1;E=1037;break a}x=e&1;E=x?1040:1035;C=!x}b:{if((g&2146435072)==2146435072){g=x+3|0;Y(a,32,c,g,e&-65537);X(a,E,x);d=f&32;X(a,b!=b?d?1053:1061:d?1057:1065,3);Y(a,32,c,g,e^8192);u=(c|0)<(g|0)?g:c;break b}A=n+16|0;c:{d:{e:{b=_(b,n+44|0);b=b+b;if(b!=0){g=v[n+44>>2];v[n+44>>2]=g-1;u=f|32;if((u|0)!=97){break e}break c}u=f|32;if((u|0)==97){break c}k=v[n+44>>2];m=(d|0)<0?6:d;break d}k=g-29|0;v[n+44>>2]=k;b=b*268435456;m=(d|0)<0?6:d}r=(n+48|0)+((k|0)>=0?288:0)|0;h=r;while(1){if(b<4294967296&b>=0){d=~~b>>>0}else{d=0}v[h>>2]=d;h=h+4|0;b=(b-+(d>>>0))*1e9;if(b!=0){continue}break}f:{if((k|0)<=0){g=h;i=r;break f}i=r;while(1){p=(k|0)>=29?29:k;g=h-4|0;g:{if(i>>>0>g>>>0){break g}d=0;while(1){l=v[g>>2];k=d;d=p&31;if((p&63)>>>0>=32){q=l<<d;d=0}else{q=(1<<d)-1&l>>>32-d;d=l<<d}k=k+d|0;l=q+s|0;d=ra(k,d>>>0>k>>>0?l+1|0:l,1e9);v[g>>2]=k-qa(d,R,1e9,0);g=g-4|0;if(i>>>0<=g>>>0){continue}break}if(!d){break g}i=i-4|0;v[i>>2]=d}while(1){g=h;if(i>>>0<g>>>0){h=g-4|0;if(!v[h>>2]){continue}}break}k=v[n+44>>2]-p|0;v[n+44>>2]=k;h=g;if((k|0)>0){continue}break}}if((k|0)<0){y=((m+25>>>0)/9|0)+1|0;s=(u|0)==102;while(1){d=0-k|0;q=(d|0)>=9?9:d;h:{if(g>>>0<=i>>>0){h=v[i>>2];break h}p=1e9>>>q|0;l=-1<<q^-1;k=0;h=i;while(1){d=v[h>>2];v[h>>2]=(d>>>q|0)+k;k=B(p,d&l);h=h+4|0;if(h>>>0<g>>>0){continue}break}h=v[i>>2];if(!k){break h}v[g>>2]=k;g=g+4|0}k=q+v[n+44>>2]|0;v[n+44>>2]=k;i=(!h<<2)+i|0;d=s?r:i;g=g-d>>2>(y|0)?d+(y<<2)|0:g;if((k|0)<0){continue}break}}k=0;i:{if(g>>>0<=i>>>0){break i}k=B(r-i>>2,9);h=10;d=v[i>>2];if(d>>>0<10){break i}while(1){k=k+1|0;h=B(h,10);if(d>>>0>=h>>>0){continue}break}}d=(m-((u|0)!=102?k:0)|0)-((u|0)==103&(m|0)!=0)|0;if((d|0)<(B(g-r>>2,9)-9|0)){p=d+9216|0;d=(p|0)/9|0;l=r+(d<<2)|0;q=l-4096|0;h=10;d=p-B(d,9)|0;if((d|0)<=7){while(1){h=B(h,10);d=d+1|0;if((d|0)!=8){continue}break}}d=l-4092|0;p=v[q+4>>2];l=(p>>>0)/(h>>>0)|0;s=p-B(h,l)|0;y=q+8|0;j:{if(!s&(y|0)==(g|0)){break j}k:{if(!(l&1)){b=9007199254740992;if(!(t[q|0]&1)|((h|0)!=1e9|d>>>0<=i>>>0)){break k}}b=9007199254740994}l=h>>>1|0;z=l>>>0>s>>>0?.5:(l|0)==(s|0)?(g|0)==(y|0)?1:1.5:1.5;if(!(w[E|0]!=45|C)){z=-z;b=-b}l=p-s|0;v[d>>2]=l;if(b+z==b){break j}h=h+l|0;v[d>>2]=h;if(h>>>0>=1e9){while(1){v[d>>2]=0;d=d-4|0;if(i>>>0>d>>>0){i=i-4|0;v[i>>2]=0}h=v[d>>2]+1|0;v[d>>2]=h;if(h>>>0>999999999){continue}break}}k=B(r-i>>2,9);h=10;l=v[i>>2];if(l>>>0<10){break j}while(1){k=k+1|0;h=B(h,10);if(l>>>0>=h>>>0){continue}break}}d=d+4|0;g=d>>>0<g>>>0?d:g}while(1){l=g;h=g>>>0<=i>>>0;if(!h){g=l-4|0;if(!v[g>>2]){continue}}break}l:{if((u|0)!=103){q=e&8;break l}g=m?m:1;d=(g|0)>(k|0)&(k|0)>-5;m=(d?k^-1:-1)+g|0;f=(d?-1:-2)+f|0;q=e&8;if(q){break l}g=-9;m:{if(h){break m}p=v[l-4>>2];if(!p){break m}d=10;g=0;if((p>>>0)%10|0){break m}while(1){h=g;g=g+1|0;d=B(d,10);if(!((p>>>0)%(d>>>0)|0)){continue}break}g=h^-1}d=B(l-r>>2,9);if((f&-33)==70){q=0;d=(d+g|0)-9|0;d=(d|0)>0?d:0;m=(d|0)>(m|0)?m:d;break l}q=0;d=((d+k|0)+g|0)-9|0;d=(d|0)>0?d:0;m=(d|0)>(m|0)?m:d}u=-1;p=m|q;if(((p?2147483645:2147483646)|0)<(m|0)){break b}s=(((p|0)!=0)+m|0)+1|0;h=f&-33;n:{if((h|0)==70){if((s^2147483647)<(k|0)){break b}g=(k|0)>0?k:0;break n}d=k>>31;g=Z((d^k)-d|0,0,A);if((A-g|0)<=1){while(1){g=g-1|0;t[g|0]=48;if((A-g|0)<2){continue}break}}y=g-2|0;t[y|0]=f;t[g-1|0]=(k|0)<0?45:43;g=A-y|0;if((g|0)>(s^2147483647)){break b}}d=g+s|0;if((d|0)>(x^2147483647)){break b}C=d+x|0;Y(a,32,c,C,e);X(a,E,x);Y(a,48,c,C,e^65536);o:{p:{q:{if((h|0)==70){f=n+16|0;d=f|8;s=f|9;h=i>>>0>r>>>0?r:i;i=h;while(1){g=Z(v[i>>2],0,s);r:{if((h|0)!=(i|0)){if(n+16>>>0>=g>>>0){break r}while(1){g=g-1|0;t[g|0]=48;if(n+16>>>0<g>>>0){continue}break}break r}if((g|0)!=(s|0)){break r}t[n+24|0]=48;g=d}X(a,g,s-g|0);i=i+4|0;if(r>>>0>=i>>>0){continue}break}if(p){X(a,1069,1)}if((m|0)<=0|i>>>0>=l>>>0){break q}while(1){g=Z(v[i>>2],0,s);if(g>>>0>n+16>>>0){while(1){g=g-1|0;t[g|0]=48;if(n+16>>>0<g>>>0){continue}break}}X(a,g,(m|0)>=9?9:m);g=m-9|0;i=i+4|0;if(l>>>0<=i>>>0){break p}d=(m|0)>9;m=g;if(d){continue}break}break p}s:{if((m|0)<0){break s}r=i>>>0<l>>>0?l:i+4|0;f=n+16|0;d=f|8;l=f|9;h=i;while(1){g=Z(v[h>>2],0,l);if((l|0)==(g|0)){t[n+24|0]=48;g=d}t:{if((h|0)!=(i|0)){if(n+16>>>0>=g>>>0){break t}while(1){g=g-1|0;t[g|0]=48;if(n+16>>>0<g>>>0){continue}break}break t}X(a,g,1);g=g+1|0;if(!(m|q)){break t}X(a,1069,1)}f=l-g|0;X(a,g,(f|0)>(m|0)?m:f);m=m-f|0;h=h+4|0;if(r>>>0<=h>>>0){break s}if((m|0)>=0){continue}break}}Y(a,48,m+18|0,18,0);X(a,y,A-y|0);break o}g=m}Y(a,48,g+9|0,9,0)}Y(a,32,c,C,e^8192);u=(c|0)<(C|0)?C:c;break b}l=(f<<26>>31&9)+E|0;u:{if(d>>>0>11){break u}g=12-d|0;z=16;while(1){z=z*16;g=g-1|0;if(g){continue}break}if(w[l|0]==45){b=-(z+(-b-z));break u}b=b+z-z}g=v[n+44>>2];h=g>>31;g=Z((g^h)-h|0,0,A);if((A|0)==(g|0)){t[n+15|0]=48;g=n+15|0}r=x|2;i=f&32;h=v[n+44>>2];m=g-2|0;t[m|0]=f+15;t[g-1|0]=(h|0)<0?45:43;g=e&8;h=n+16|0;while(1){f=h;if(D(b)<2147483648){p=~~b}else{p=-2147483648}t[h|0]=i|w[p+1568|0];b=(b-+(p|0))*16;h=f+1|0;if(!(!((d|0)>0|g)&b==0|(h-(n+16|0)|0)!=1)){t[f+1|0]=46;h=f+2|0}if(b!=0){continue}break}u=-1;g=A-m|0;f=g+r|0;if((2147483645-f|0)<(d|0)){break b}v:{w:{if(!d){break w}i=h-(n+16|0)|0;if((i-2|0)>=(d|0)){break w}d=d+2|0;break v}i=h-(n+16|0)|0;d=i}f=d+f|0;Y(a,32,c,f,e);X(a,l,r);Y(a,48,c,f,e^65536);X(a,n+16|0,i);Y(a,48,d-i|0,0,0);X(a,m,g);Y(a,32,c,f,e^8192);u=(c|0)<(f|0)?f:c}Q=n+560|0;return u|0}function fa(a,b,c,d,e,f){var g=0,h=0,i=0,j=0,k=0,l=0,m=0,n=0,o=0,p=0,q=0,r=0,s=0,x=0,y=0,z=0,C=0,D=0,E=0,F=0;i=Q-80|0;Q=i;v[i+76>>2]=b;D=i+55|0;s=i+56|0;a:{b:{c:{d:{e:while(1){j=b;if((p^2147483647)<(g|0)){break d}p=g+p|0;f:{g:{h:{g=j;h=w[g|0];if(h){while(1){i:{b=h&255;j:{if(!b){b=g;break j}if((b|0)!=37){break i}h=g;while(1){if(w[h+1|0]!=37){b=h;break j}g=g+1|0;l=w[h+2|0];b=h+2|0;h=b;if((l|0)==37){continue}break}}g=g-j|0;C=p^2147483647;if((g|0)>(C|0)){break d}if(a){X(a,j,g)}if(g){continue e}v[i+76>>2]=b;g=b+1|0;q=-1;if(!(w[b+2|0]!=36|t[b+1|0]-48>>>0>=10)){q=t[b+1|0]-48|0;x=1;g=b+3|0}v[i+76>>2]=g;n=0;h=t[g|0];b=h-32|0;k:{if(b>>>0>31){m=g;break k}m=g;b=1<<b;if(!(b&75913)){break k}while(1){m=g+1|0;v[i+76>>2]=m;n=b|n;h=t[g+1|0];b=h-32|0;if(b>>>0>=32){break k}g=m;b=1<<b;if(b&75913){continue}break}}l:{if((h|0)==42){m:{if(!(w[m+2|0]!=36|t[m+1|0]-48>>>0>=10)){v[((t[m+1|0]<<2)+e|0)-192>>2]=10;h=m+3|0;x=1;b=v[((t[m+1|0]<<3)+d|0)-384>>2];break m}if(x){break h}h=m+1|0;if(!a){v[i+76>>2]=h;x=0;r=0;break l}b=v[c>>2];v[c>>2]=b+4;x=0;b=v[b>>2]}v[i+76>>2]=h;r=b;if((b|0)>=0){break l}r=0-r|0;n=n|8192;break l}r=ea(i+76|0);if((r|0)<0){break d}h=v[i+76>>2]}g=0;k=-1;n:{if(w[h|0]!=46){b=h;z=0;break n}if(w[h+1|0]==42){o:{if(!(w[h+3|0]!=36|t[h+2|0]-48>>>0>=10)){v[((t[h+2|0]<<2)+e|0)-192>>2]=10;b=h+4|0;k=v[((t[h+2|0]<<3)+d|0)-384>>2];break o}if(x){break h}b=h+2|0;k=0;if(!a){break o}h=v[c>>2];v[c>>2]=h+4;k=v[h>>2]}v[i+76>>2]=b;z=(k^-1)>>>31|0;break n}v[i+76>>2]=h+1;k=ea(i+76|0);b=v[i+76>>2];z=1}while(1){o=g;m=28;l=b;g=t[b|0];if(g-123>>>0<4294967238){break c}b=l+1|0;g=w[(g+B(o,58)|0)+1039|0];if(g-1>>>0<8){continue}break}v[i+76>>2]=b;p:{q:{if((g|0)!=27){if(!g){break c}if((q|0)>=0){v[(q<<2)+e>>2]=g;h=(q<<3)+d|0;g=v[h+4>>2];v[i+64>>2]=v[h>>2];v[i+68>>2]=g;break q}if(!a){break f}da(i- -64|0,g,c);break p}if((q|0)>=0){break c}}g=0;if(!a){continue e}}h=n&-65537;n=n&8192?h:n;q=0;y=1024;m=s;r:{s:{t:{u:{v:{w:{x:{y:{z:{A:{B:{C:{D:{E:{F:{G:{g=t[l|0];g=o?(g&15)==3?g&-33:g:g;switch(g-88|0){case 11:break r;case 9:case 13:case 14:case 15:break s;case 27:break x;case 12:case 17:break A;case 23:break B;case 0:case 32:break C;case 24:break D;case 22:break E;case 29:break F;case 1:case 2:case 3:case 4:case 5:case 6:case 7:case 8:case 10:case 16:case 18:case 19:case 20:case 21:case 25:case 26:case 28:case 30:case 31:break g;default:break G}}H:{switch(g-65|0){case 0:case 4:case 5:case 6:break s;case 2:break v;case 1:case 3:break g;default:break H}}if((g|0)==83){break w}break g}h=v[i+64>>2];l=v[i+68>>2];y=1024;break z}g=0;I:{switch(o&255){case 0:v[v[i+64>>2]>>2]=p;continue e;case 1:v[v[i+64>>2]>>2]=p;continue e;case 2:j=v[i+64>>2];v[j>>2]=p;v[j+4>>2]=p>>31;continue e;case 3:u[v[i+64>>2]>>1]=p;continue e;case 4:t[v[i+64>>2]]=p;continue e;case 6:v[v[i+64>>2]>>2]=p;continue e;case 7:break I;default:continue e}}j=v[i+64>>2];v[j>>2]=p;v[j+4>>2]=p>>31;continue e}k=k>>>0<=8?8:k;n=n|8;g=120}j=s;E=g&32;h=v[i+64>>2];l=v[i+68>>2];if(h|l){while(1){j=j-1|0;t[j|0]=E|w[(h&15)+1568|0];F=!l&h>>>0>15|(l|0)!=0;o=l;l=l>>>4|0;h=(o&15)<<28|h>>>4;if(F){continue}break}}if(!(v[i+64>>2]|v[i+68>>2])|!(n&8)){break y}y=(g>>>4|0)+1024|0;q=2;break y}g=s;j=v[i+68>>2];l=j;h=v[i+64>>2];if(j|h){while(1){g=g-1|0;t[g|0]=h&7|48;o=!l&h>>>0>7|(l|0)!=0;j=l;l=j>>>3|0;h=(j&7)<<29|h>>>3;if(o){continue}break}}j=g;if(!(n&8)){break y}g=s-j|0;k=(g|0)<(k|0)?k:g+1|0;break y}h=v[i+64>>2];g=v[i+68>>2];l=g;if((g|0)<0){j=0-(l+((h|0)!=0)|0)|0;l=j;h=0-h|0;v[i+64>>2]=h;v[i+68>>2]=j;q=1;y=1024;break z}if(n&2048){q=1;y=1025;break z}q=n&1;y=q?1026:1024}j=Z(h,l,s)}if((k|0)<0?z:0){break d}n=z?n&-65537:n;g=v[i+64>>2];h=v[i+68>>2];if(!(k|(g|h)!=0)){j=s;k=0;break g}g=!(g|h)+(s-j|0)|0;k=(g|0)<(k|0)?k:g;break g}m=k>>>0>=2147483647?2147483647:k;o=m;n=(m|0)!=0;g=v[i+64>>2];j=g?g:1071;g=j;J:{K:{L:{M:{if(!(g&3)|!m){break M}while(1){if(!w[g|0]){break L}o=o-1|0;n=(o|0)!=0;g=g+1|0;if(!(g&3)){break M}if(o){continue}break}}if(!n){break K}if(!(!w[g|0]|o>>>0<4)){while(1){l=v[g>>2];if((l^-1)&l-16843009&-2139062144){break L}g=g+4|0;o=o-4|0;if(o>>>0>3){continue}break}}if(!o){break K}}while(1){if(!w[g|0]){break J}g=g+1|0;o=o-1|0;if(o){continue}break}}g=0}g=g?g-j|0:m;m=g+j|0;if((k|0)>=0){n=h;k=g;break g}n=h;k=g;if(w[m|0]){break d}break g}if(k){h=v[i+64>>2];break u}g=0;Y(a,32,r,0,n);break t}v[i+12>>2]=0;v[i+8>>2]=v[i+64>>2];h=i+8|0;v[i+64>>2]=h;k=-1}g=0;N:{while(1){j=v[h>>2];if(!j){break N}l=ca(i+4|0,j);j=(l|0)<0;if(!(j|l>>>0>k-g>>>0)){h=h+4|0;g=g+l|0;if(k>>>0>g>>>0){continue}break N}break}if(j){break b}}m=61;if((g|0)<0){break c}Y(a,32,r,g,n);if(!g){g=0;break t}m=0;h=v[i+64>>2];while(1){j=v[h>>2];if(!j){break t}j=ca(i+4|0,j);m=j+m|0;if(m>>>0>g>>>0){break t}X(a,i+4|0,j);h=h+4|0;if(g>>>0>m>>>0){continue}break}}Y(a,32,r,g,n^8192);g=(g|0)<(r|0)?r:g;continue e}if((k|0)<0?z:0){break d}m=61;g=S[f|0](a,A[i+64>>3],r,k,n,g)|0;if((g|0)>=0){continue e}break c}t[i+55|0]=v[i+64>>2];k=1;j=D;n=h;break g}h=w[g+1|0];g=g+1|0;continue}}if(a){break a}if(!x){break f}g=1;while(1){a=v[(g<<2)+e>>2];if(a){da((g<<3)+d|0,a,c);p=1;g=g+1|0;if((g|0)!=10){continue}break a}break}p=1;if(g>>>0>=10){break a}while(1){if(v[(g<<2)+e>>2]){break h}g=g+1|0;if((g|0)!=10){continue}break}break a}m=28;break c}l=m-j|0;h=(k|0)>(l|0)?k:l;if((h|0)>(q^2147483647)){break d}m=61;k=h+q|0;g=(k|0)<(r|0)?r:k;if((C|0)<(g|0)){break c}Y(a,32,g,k,n);X(a,y,q);Y(a,48,g,k,n^65536);Y(a,48,h,l,0);X(a,j,l);Y(a,32,g,k,n^8192);continue}break}p=0;break a}m=61}v[432]=m}p=-1}Q=i+80|0;return p}function X(a,b,c){var d=0,e=0,f=0,g=0;if(!(w[a|0]&32)){a:{e=a;a=v[a+16>>2];if(!a){if($(e)){break a}a=v[e+16>>2]}f=v[e+20>>2];if(a-f>>>0<c>>>0){S[v[e+36>>2]](e,b,c)|0;break a}b:{if(v[e+80>>2]<0){break b}a=c;while(1){d=a;if(!a){break b}a=d-1|0;if(w[b+a|0]!=10){continue}break}if(S[v[e+36>>2]](e,b,d)>>>0<d>>>0){break a}b=b+d|0;c=c-d|0;f=v[e+20>>2]}a=f;c:{if(c>>>0>=512){P(a|0,b|0,c|0);break c}d=a+c|0;d:{if(!((a^b)&3)){e:{if(!(a&3)|!c){break e}while(1){t[a|0]=w[b|0];b=b+1|0;a=a+1|0;if(!(a&3)){break e}if(a>>>0<d>>>0){continue}break}}f=d&-4;f:{if(f>>>0<64){break f}g=f+-64|0;if(g>>>0<a>>>0){break f}while(1){v[a>>2]=v[b>>2];v[a+4>>2]=v[b+4>>2];v[a+8>>2]=v[b+8>>2];v[a+12>>2]=v[b+12>>2];v[a+16>>2]=v[b+16>>2];v[a+20>>2]=v[b+20>>2];v[a+24>>2]=v[b+24>>2];v[a+28>>2]=v[b+28>>2];v[a+32>>2]=v[b+32>>2];v[a+36>>2]=v[b+36>>2];v[a+40>>2]=v[b+40>>2];v[a+44>>2]=v[b+44>>2];v[a+48>>2]=v[b+48>>2];v[a+52>>2]=v[b+52>>2];v[a+56>>2]=v[b+56>>2];v[a+60>>2]=v[b+60>>2];b=b- -64|0;a=a- -64|0;if(g>>>0>=a>>>0){continue}break}}if(a>>>0>=f>>>0){break d}while(1){v[a>>2]=v[b>>2];b=b+4|0;a=a+4|0;if(f>>>0>a>>>0){continue}break}break d}if(d>>>0<4){break d}f=d-4|0;if(f>>>0<a>>>0){break d}while(1){t[a|0]=w[b|0];t[a+1|0]=w[b+1|0];t[a+2|0]=w[b+2|0];t[a+3|0]=w[b+3|0];b=b+4|0;a=a+4|0;if(f>>>0>=a>>>0){continue}break}}if(a>>>0<d>>>0){while(1){t[a|0]=w[b|0];b=b+1|0;a=a+1|0;if((d|0)!=(a|0)){continue}break}}}v[e+20>>2]=v[e+20>>2]+c}}}function ra(a,b,c){var d=0,e=0,f=0,g=0,h=0,i=0,j=0,k=0,l=0;a:{b:{c:{d:{e:{f:{g:{h:{i:{j:{if(b){if(!c){break j}break i}a=(a>>>0)/(c>>>0)|0;R=0;break a}if(!a){break h}break g}if(!(c-1&c)){break f}f=(E(c)+33|0)-E(b)|0;g=0-f|0;break d}a=(b>>>0)/0|0;R=0;break a}d=32-E(b)|0;if(d>>>0<31){break e}break c}if((c|0)==1){break b}f=c?31-E(c-1^c)|0:32;c=f&31;if((f&63)>>>0>=32){a=b>>>c|0}else{d=b>>>c|0;a=((1<<c)-1&b)<<32-c|a>>>c}R=d;break a}f=d+1|0;g=63-d|0}d=f&63;e=d&31;if(d>>>0>=32){d=0;h=b>>>e|0}else{d=b>>>e|0;h=((1<<e)-1&b)<<32-e|a>>>e}g=g&63;e=g&31;if(g>>>0>=32){b=a<<e;a=0}else{b=(1<<e)-1&a>>>32-e|b<<e;a=a<<e}if(f){g=c-1|0;l=(g|0)==-1?-1:0;while(1){i=d<<1|h>>>31;d=h<<1|b>>>31;e=l-(i+(d>>>0>g>>>0)|0)>>31;j=c&e;h=d-j|0;d=i-(d>>>0<j>>>0)|0;b=b<<1|a>>>31;a=k|a<<1;k=e&1;f=f-1|0;if(f){continue}break}}R=b<<1|a>>>31;a=k|a<<1;break a}a=0;b=0}R=b}return a}
function ka(a,b,c){a=a|0;b=b|0;c=c|0;var d=0,e=0,f=0,g=0,h=0,i=0,j=0;f=Q-32|0;Q=f;d=v[a+28>>2];v[f+16>>2]=d;g=v[a+20>>2];v[f+28>>2]=c;v[f+24>>2]=b;b=g-d|0;v[f+20>>2]=b;g=b+c|0;i=2;a:{b:{b=f+16|0;d=N(v[a+60>>2],b|0,2,f+12|0)|0;if(d){v[432]=d;d=-1}else{d=0}c:{d:{if(d){d=b;break d}while(1){e=v[f+12>>2];if((e|0)==(g|0)){break c}if((e|0)<0){d=b;break b}h=v[b+4>>2];j=h>>>0<e>>>0;d=(j<<3)+b|0;h=e-(j?h:0)|0;v[d>>2]=h+v[d>>2];b=(j?12:4)+b|0;v[b>>2]=v[b>>2]-h;g=g-e|0;b=d;i=i-j|0;e=N(v[a+60>>2],b|0,i|0,f+12|0)|0;if(e){v[432]=e;e=-1}else{e=0}if(!e){continue}break}}if((g|0)!=-1){break b}}b=v[a+44>>2];v[a+28>>2]=b;v[a+20>>2]=b;v[a+16>>2]=b+v[a+48>>2];a=c;break a}v[a+28>>2]=0;v[a+16>>2]=0;v[a+20>>2]=0;v[a>>2]=v[a>>2]|32;a=0;if((i|0)==2){break a}a=c-v[d+4>>2]|0}Q=f+32|0;return a|0}function da(a,b,c){a:{switch(b-9|0){case 0:b=v[c>>2];v[c>>2]=b+4;v[a>>2]=v[b>>2];return;case 6:b=v[c>>2];v[c>>2]=b+4;b=u[b>>1];v[a>>2]=b;v[a+4>>2]=b>>31;return;case 7:b=v[c>>2];v[c>>2]=b+4;v[a>>2]=x[b>>1];v[a+4>>2]=0;return;case 8:b=v[c>>2];v[c>>2]=b+4;b=t[b|0];v[a>>2]=b;v[a+4>>2]=b>>31;return;case 9:b=v[c>>2];v[c>>2]=b+4;v[a>>2]=w[b|0];v[a+4>>2]=0;return;case 16:b=v[c>>2]+7&-8;v[c>>2]=b+8;A[a>>3]=A[b>>3];return;case 17:p();default:return;case 1:case 4:case 14:b=v[c>>2];v[c>>2]=b+4;b=v[b>>2];v[a>>2]=b;v[a+4>>2]=b>>31;return;case 2:case 5:case 11:case 15:b=v[c>>2];v[c>>2]=b+4;v[a>>2]=v[b>>2];v[a+4>>2]=0;return;case 3:case 10:case 12:case 13:break a}}b=v[c>>2]+7&-8;v[c>>2]=b+8;c=v[b+4>>2];v[a>>2]=v[b>>2];v[a+4>>2]=c}function aa(a,b,c){var d=0,e=0;a:{if(!c){break a}t[a|0]=b;d=a+c|0;t[d-1|0]=b;if(c>>>0<3){break a}t[a+2|0]=b;t[a+1|0]=b;t[d-3|0]=b;t[d-2|0]=b;if(c>>>0<7){break a}t[a+3|0]=b;t[d-4|0]=b;if(c>>>0<9){break a}d=0-a&3;e=d+a|0;a=B(b&255,16843009);v[e>>2]=a;c=c-d&-4;b=c+e|0;v[b-4>>2]=a;if(c>>>0<9){break a}v[e+8>>2]=a;v[e+4>>2]=a;v[b-8>>2]=a;v[b-12>>2]=a;if(c>>>0<25){break a}v[e+24>>2]=a;v[e+20>>2]=a;v[e+16>>2]=a;v[e+12>>2]=a;v[b-16>>2]=a;v[b-20>>2]=a;v[b-24>>2]=a;v[b-28>>2]=a;b=e&4|24;c=c-b|0;if(c>>>0<32){break a}a=qa(a,0,1,1);d=R;b=b+e|0;while(1){v[b+24>>2]=a;v[b+28>>2]=d;v[b+16>>2]=a;v[b+20>>2]=d;v[b+8>>2]=a;v[b+12>>2]=d;v[b>>2]=a;v[b+4>>2]=d;b=b+32|0;c=c-32|0;if(c>>>0>31){continue}break}}}function ga(a,b,c){var d=0,e=0,f=0;d=Q-208|0;Q=d;v[d+204>>2]=b;b=d+160|0;aa(b,0,40);v[d+200>>2]=v[d+204>>2];a:{if((fa(0,a,d+200|0,d+80|0,b,c)|0)<0){break a}f=v[415]>=0;b=v[396];if(v[414]<=0){v[396]=b&-33}b:{c:{d:{if(!v[408]){v[408]=80;v[403]=0;v[400]=0;v[401]=0;e=v[407];v[407]=d;break d}if(v[400]){break c}}if($(1584)){break b}}fa(1584,a,d+200|0,d+80|0,d+160|0,c)}if(e){S[v[405]](1584,0,0)|0;v[408]=0;v[407]=e;v[403]=0;v[400]=0;v[401]=0}v[396]=v[396]|b&32;if(!f){break a}}Q=d+208|0}function ca(a,b){if(!a){return 0}a:{b:{if(a){if(b>>>0<=127){break b}c:{if(!v[v[732]>>2]){if((b&-128)==57216){break b}break c}if(b>>>0<=2047){t[a+1|0]=b&63|128;t[a|0]=b>>>6|192;a=2;break a}if(!((b&-8192)!=57344&b>>>0>=55296)){t[a+2|0]=b&63|128;t[a|0]=b>>>12|224;t[a+1|0]=b>>>6&63|128;a=3;break a}if(b-65536>>>0<=1048575){t[a+3|0]=b&63|128;t[a|0]=b>>>18|240;t[a+2|0]=b>>>6&63|128;t[a+1|0]=b>>>12&63|128;a=4;break a}}v[432]=25;a=-1}else{a=1}break a}t[a|0]=b;a=1}return a}function pa(){var a=0,b=0,c=0,d=0,e=0,f=0,g=0,h=0;c=Q-32|0;Q=c;b=2;f=ba();while(1){g=a;a=1;a:{if(b>>>0<4){break a}a=0;if(!(b&1)){break a}a=2;e=b>>>1|0;h=e>>>0<=2?2:e;while(1){d=a;if((h|0)!=(a|0)){a=d+1|0;if((b>>>0)%(a>>>0)|0){continue}}break}a=d>>>0>=e>>>0}a=g+a|0;b=b+1|0;if((b|0)!=1000001){continue}break}d=ba();v[c+16>>2]=a;a=Q-16|0;Q=a;b=c+16|0;v[a+12>>2]=b;ga(1094,b,0);Q=a+16|0;A[c>>3]=+(d-f|0)/1e6;a=Q-16|0;Q=a;v[a+12>>2]=c;ga(1078,c,4);Q=a+16|0;Q=c+32|0}function _(a,b){var c=0,d=0,e=0;o(+a);d=j(1)|0;e=j(0)|0;c=d>>>20&2047;if((c|0)!=2047){if(!c){if(a==0){c=0}else{a=_(a*0x10000000000000000,b);c=v[b>>2]+-64|0}v[b>>2]=c;return a}v[b>>2]=c-1022;l(0,e|0);l(1,d&-2146435073|1071644672);a=+n()}return a}function Z(a,b,c){var d=0,e=0;if(b){while(1){c=c-1|0;e=a;a=ra(a,b,10);d=R;t[c|0]=e-qa(a,d,10,0)|48;e=b>>>0>9;b=d;if(e){continue}break}}if(a){while(1){c=c-1|0;b=(a>>>0)/10|0;t[c|0]=a-B(b,10)|48;d=a>>>0>9;a=b;if(d){continue}break}}return c}function ea(a){var b=0,c=0,d=0;if(t[v[a>>2]]-48>>>0>=10){return 0}while(1){d=v[a>>2];c=-1;if(b>>>0<=214748364){c=t[d|0]-48|0;b=B(b,10);c=(c|0)>(b^2147483647)?-1:c+b|0}v[a>>2]=d+1;b=c;if(t[d+1|0]-48>>>0<10){continue}break}return b}function qa(a,b,c,d){var e=0,f=0,g=0,h=0,i=0,j=0;e=c>>>16|0;f=a>>>16|0;j=B(e,f);g=c&65535;h=a&65535;i=B(g,h);f=(i>>>16|0)+B(f,g)|0;e=(f&65535)+B(e,h)|0;R=(B(b,c)+j|0)+B(a,d)+(f>>>16)+(e>>>16)|0;return i&65535|e<<16}function Y(a,b,c,d,e){var f=0;f=Q-256|0;Q=f;if(!(e&73728|(c|0)<=(d|0))){d=c-d|0;c=d>>>0<256;aa(f,b&255,c?d:256);if(!c){while(1){X(a,f,256);d=d-256|0;if(d>>>0>255){continue}break}}X(a,f,d)}Q=f+256|0}function $(a){var b=0;b=v[a+72>>2];v[a+72>>2]=b-1|b;b=v[a>>2];if(b&8){v[a>>2]=b|32;return-1}v[a+4>>2]=0;v[a+8>>2]=0;b=v[a+44>>2];v[a+28>>2]=b;v[a+20>>2]=b;v[a+16>>2]=b+v[a+48>>2];return 0}function ba(){var a=0;if(A[217]==0){A[217]=O()}a=(+O()-A[217])*1e3;if(D(a)<2147483648){return~~a}return-2147483648}function ia(a,b,c,d){a=a|0;b=b|0;c=c|0;d=d|0;R=0;return 0}function la(a){a=a|0;a=Q-a&-16;Q=a;return a|0}function ha(){v[732]=2808;v[714]=42}function ja(a){a=a|0;return 0}function na(){return Q|0}function ma(a){a=a|0;Q=a}
// EMSCRIPTEN_END_FUNCS
e=w;var S=c([null,ja,ka,ia,oa]);function T(){return s.byteLength/65536|0}return{"e":ha,"f":pa,"g":S,"h":na,"i":ma,"j":la}}return U(W)}
// EMSCRIPTEN_END_ASM




)(info)},instantiate:function(binary,info){return{then:function(ok){var module=new WebAssembly.Module(binary);ok({"instance":new WebAssembly.Instance(module,info)})}}},RuntimeError:Error};wasmBinary=[];if(typeof WebAssembly!="object"){abort("no native wasm support detected")}var wasmMemory;var ABORT=false;var EXITSTATUS;var UTF8Decoder=typeof TextDecoder!="undefined"?new TextDecoder("utf8"):undefined;function UTF8ArrayToString(heapOrArray,idx,maxBytesToRead){var endIdx=idx+maxBytesToRead;var endPtr=idx;while(heapOrArray[endPtr]&&!(endPtr>=endIdx))++endPtr;if(endPtr-idx>16&&heapOrArray.buffer&&UTF8Decoder){return UTF8Decoder.decode(heapOrArray.subarray(idx,endPtr))}var str="";while(idx<endPtr){var u0=heapOrArray[idx++];if(!(u0&128)){str+=String.fromCharCode(u0);continue}var u1=heapOrArray[idx++]&63;if((u0&224)==192){str+=String.fromCharCode((u0&31)<<6|u1);continue}var u2=heapOrArray[idx++]&63;if((u0&240)==224){u0=(u0&15)<<12|u1<<6|u2}else{u0=(u0&7)<<18|u1<<12|u2<<6|heapOrArray[idx++]&63}if(u0<65536){str+=String.fromCharCode(u0)}else{var ch=u0-65536;str+=String.fromCharCode(55296|ch>>10,56320|ch&1023)}}return str}function UTF8ToString(ptr,maxBytesToRead){return ptr?UTF8ArrayToString(HEAPU8,ptr,maxBytesToRead):""}function stringToUTF8Array(str,heap,outIdx,maxBytesToWrite){if(!(maxBytesToWrite>0))return 0;var startIdx=outIdx;var endIdx=outIdx+maxBytesToWrite-1;for(var i=0;i<str.length;++i){var u=str.charCodeAt(i);if(u>=55296&&u<=57343){var u1=str.charCodeAt(++i);u=65536+((u&1023)<<10)|u1&1023}if(u<=127){if(outIdx>=endIdx)break;heap[outIdx++]=u}else if(u<=2047){if(outIdx+1>=endIdx)break;heap[outIdx++]=192|u>>6;heap[outIdx++]=128|u&63}else if(u<=65535){if(outIdx+2>=endIdx)break;heap[outIdx++]=224|u>>12;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}else{if(outIdx+3>=endIdx)break;heap[outIdx++]=240|u>>18;heap[outIdx++]=128|u>>12&63;heap[outIdx++]=128|u>>6&63;heap[outIdx++]=128|u&63}}heap[outIdx]=0;return outIdx-startIdx}function stringToUTF8(str,outPtr,maxBytesToWrite){return stringToUTF8Array(str,HEAPU8,outPtr,maxBytesToWrite)}var buffer,HEAP8,HEAPU8,HEAP16,HEAPU16,HEAP32,HEAPU32,HEAPF32,HEAPF64;function updateGlobalBufferAndViews(buf){buffer=buf;Module["HEAP8"]=HEAP8=new Int8Array(buf);Module["HEAP16"]=HEAP16=new Int16Array(buf);Module["HEAP32"]=HEAP32=new Int32Array(buf);Module["HEAPU8"]=HEAPU8=new Uint8Array(buf);Module["HEAPU16"]=HEAPU16=new Uint16Array(buf);Module["HEAPU32"]=HEAPU32=new Uint32Array(buf);Module["HEAPF32"]=HEAPF32=new Float32Array(buf);Module["HEAPF64"]=HEAPF64=new Float64Array(buf)}var INITIAL_MEMORY=Module["INITIAL_MEMORY"]||16777216;if(Module["wasmMemory"]){wasmMemory=Module["wasmMemory"]}else{wasmMemory=new WebAssembly.Memory({"initial":INITIAL_MEMORY/65536,"maximum":INITIAL_MEMORY/65536})}if(wasmMemory){buffer=wasmMemory.buffer}INITIAL_MEMORY=buffer.byteLength;updateGlobalBufferAndViews(buffer);var wasmTable;var __ATPRERUN__=[];var __ATINIT__=[];var __ATPOSTRUN__=[];var runtimeInitialized=false;function keepRuntimeAlive(){return noExitRuntime}function preRun(){if(Module["preRun"]){if(typeof Module["preRun"]=="function")Module["preRun"]=[Module["preRun"]];while(Module["preRun"].length){addOnPreRun(Module["preRun"].shift())}}callRuntimeCallbacks(__ATPRERUN__)}function initRuntime(){runtimeInitialized=true;callRuntimeCallbacks(__ATINIT__)}function postRun(){if(Module["postRun"]){if(typeof Module["postRun"]=="function")Module["postRun"]=[Module["postRun"]];while(Module["postRun"].length){addOnPostRun(Module["postRun"].shift())}}callRuntimeCallbacks(__ATPOSTRUN__)}function addOnPreRun(cb){__ATPRERUN__.unshift(cb)}function addOnInit(cb){__ATINIT__.unshift(cb)}function addOnPostRun(cb){__ATPOSTRUN__.unshift(cb)}var runDependencies=0;var runDependencyWatcher=null;var dependenciesFulfilled=null;function addRunDependency(id){runDependencies++;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}}function removeRunDependency(id){runDependencies--;if(Module["monitorRunDependencies"]){Module["monitorRunDependencies"](runDependencies)}if(runDependencies==0){if(runDependencyWatcher!==null){clearInterval(runDependencyWatcher);runDependencyWatcher=null}if(dependenciesFulfilled){var callback=dependenciesFulfilled;dependenciesFulfilled=null;callback()}}}function abort(what){if(Module["onAbort"]){Module["onAbort"](what)}what="Aborted("+what+")";err(what);ABORT=true;EXITSTATUS=1;what+=". Build with -sASSERTIONS for more info.";var e=new WebAssembly.RuntimeError(what);throw e}var memoryInitializer="primes.js.mem";var dataURIPrefix="data:application/octet-stream;base64,";function isDataURI(filename){return filename.startsWith(dataURIPrefix)}function isFileURI(filename){return filename.startsWith("file://")}var wasmBinaryFile;wasmBinaryFile="primes.wasm";if(!isDataURI(wasmBinaryFile)){wasmBinaryFile=locateFile(wasmBinaryFile)}function getBinary(file){try{if(file==wasmBinaryFile&&wasmBinary){return new Uint8Array(wasmBinary)}if(readBinary){return readBinary(file)}throw"both async and sync fetching of the wasm failed"}catch(err){abort(err)}}function getBinaryPromise(){if(!wasmBinary&&(ENVIRONMENT_IS_WEB||ENVIRONMENT_IS_WORKER)){if(typeof fetch=="function"&&!isFileURI(wasmBinaryFile)){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){if(!response["ok"]){throw"failed to load wasm binary file at '"+wasmBinaryFile+"'"}return response["arrayBuffer"]()}).catch(function(){return getBinary(wasmBinaryFile)})}else{if(readAsync){return new Promise(function(resolve,reject){readAsync(wasmBinaryFile,function(response){resolve(new Uint8Array(response))},reject)})}}}return Promise.resolve().then(function(){return getBinary(wasmBinaryFile)})}function createWasm(){var info={"a":asmLibraryArg};function receiveInstance(instance,module){var exports=instance.exports;Module["asm"]=exports;runMemoryInitializer();wasmTable=Module["asm"]["g"];addOnInit(Module["asm"]["e"]);removeRunDependency("wasm-instantiate")}addRunDependency("wasm-instantiate");function receiveInstantiationResult(result){receiveInstance(result["instance"])}function instantiateArrayBuffer(receiver){return getBinaryPromise().then(function(binary){return WebAssembly.instantiate(binary,info)}).then(function(instance){return instance}).then(receiver,function(reason){err("failed to asynchronously prepare wasm: "+reason);abort(reason)})}function instantiateAsync(){if(!wasmBinary&&typeof WebAssembly.instantiateStreaming=="function"&&!isDataURI(wasmBinaryFile)&&!isFileURI(wasmBinaryFile)&&!ENVIRONMENT_IS_NODE&&typeof fetch=="function"){return fetch(wasmBinaryFile,{credentials:"same-origin"}).then(function(response){var result=WebAssembly.instantiateStreaming(response,info);return result.then(receiveInstantiationResult,function(reason){err("wasm streaming compile failed: "+reason);err("falling back to ArrayBuffer instantiation");return instantiateArrayBuffer(receiveInstantiationResult)})})}else{return instantiateArrayBuffer(receiveInstantiationResult)}}if(Module["instantiateWasm"]){try{var exports=Module["instantiateWasm"](info,receiveInstance);return exports}catch(e){err("Module.instantiateWasm callback failed with error: "+e);return false}}instantiateAsync();return{}}function ExitStatus(status){this.name="ExitStatus";this.message="Program terminated with exit("+status+")";this.status=status}function callRuntimeCallbacks(callbacks){while(callbacks.length>0){callbacks.shift()(Module)}}function _emscripten_date_now(){return Date.now()}function _emscripten_memcpy_big(dest,src,num){HEAPU8.copyWithin(dest,src,src+num)}var printCharBuffers=[null,[],[]];function printChar(stream,curr){var buffer=printCharBuffers[stream];if(curr===0||curr===10){(stream===1?out:err)(UTF8ArrayToString(buffer,0));buffer.length=0}else{buffer.push(curr)}}var SYSCALLS={varargs:undefined,get:function(){SYSCALLS.varargs+=4;var ret=HEAP32[SYSCALLS.varargs-4>>2];return ret},getStr:function(ptr){var ret=UTF8ToString(ptr);return ret}};function _fd_write(fd,iov,iovcnt,pnum){var num=0;for(var i=0;i<iovcnt;i++){var ptr=HEAPU32[iov>>2];var len=HEAPU32[iov+4>>2];iov+=8;for(var j=0;j<len;j++){printChar(fd,HEAPU8[ptr+j])}num+=len}HEAPU32[pnum>>2]=num;return 0}function getCFunc(ident){var func=Module["_"+ident];return func}function writeArrayToMemory(array,buffer){HEAP8.set(array,buffer)}function ccall(ident,returnType,argTypes,args,opts){var toC={"string":str=>{var ret=0;if(str!==null&&str!==undefined&&str!==0){var len=(str.length<<2)+1;ret=stackAlloc(len);stringToUTF8(str,ret,len)}return ret},"array":arr=>{var ret=stackAlloc(arr.length);writeArrayToMemory(arr,ret);return ret}};function convertReturnValue(ret){if(returnType==="string"){return UTF8ToString(ret)}if(returnType==="boolean")return Boolean(ret);return ret}var func=getCFunc(ident);var cArgs=[];var stack=0;if(args){for(var i=0;i<args.length;i++){var converter=toC[argTypes[i]];if(converter){if(stack===0)stack=stackSave();cArgs[i]=converter(args[i])}else{cArgs[i]=args[i]}}}var ret=func.apply(null,cArgs);function onDone(ret){if(stack!==0)stackRestore(stack);return convertReturnValue(ret)}ret=onDone(ret);return ret}function cwrap(ident,returnType,argTypes,opts){argTypes=argTypes||[];var numericArgs=argTypes.every(type=>type==="number"||type==="boolean");var numericRet=returnType!=="string";if(numericRet&&numericArgs&&!opts){return getCFunc(ident)}return function(){return ccall(ident,returnType,argTypes,arguments,opts)}}var asmLibraryArg={"c":_emscripten_date_now,"d":_emscripten_memcpy_big,"b":_fd_write,"a":wasmMemory};var asm=createWasm();var ___wasm_call_ctors=Module["___wasm_call_ctors"]=function(){return(___wasm_call_ctors=Module["___wasm_call_ctors"]=Module["asm"]["e"]).apply(null,arguments)};var _calcPrimes=Module["_calcPrimes"]=function(){return(_calcPrimes=Module["_calcPrimes"]=Module["asm"]["f"]).apply(null,arguments)};var stackSave=Module["stackSave"]=function(){return(stackSave=Module["stackSave"]=Module["asm"]["h"]).apply(null,arguments)};var stackRestore=Module["stackRestore"]=function(){return(stackRestore=Module["stackRestore"]=Module["asm"]["i"]).apply(null,arguments)};var stackAlloc=Module["stackAlloc"]=function(){return(stackAlloc=Module["stackAlloc"]=Module["asm"]["j"]).apply(null,arguments)};Module["cwrap"]=cwrap;function runMemoryInitializer(){if(!memoryInitializer)return;if(!isDataURI(memoryInitializer)){memoryInitializer=locateFile(memoryInitializer)}if(ENVIRONMENT_IS_NODE||ENVIRONMENT_IS_SHELL){var data=readBinary(memoryInitializer);HEAPU8.set(data,1024)}else{addRunDependency("memory initializer");var applyMemoryInitializer=data=>{if(data.byteLength)data=new Uint8Array(data);HEAPU8.set(data,1024);if(Module["memoryInitializerRequest"])delete Module["memoryInitializerRequest"].response;removeRunDependency("memory initializer")};var doBrowserLoad=()=>{readAsync(memoryInitializer,applyMemoryInitializer,function(){var e=new Error("could not load memory initializer "+memoryInitializer);throw e})};if(Module["memoryInitializerRequest"]){var useRequest=()=>{var request=Module["memoryInitializerRequest"];var response=request.response;if(request.status!==200&&request.status!==0){console.warn("a problem seems to have happened with Module.memoryInitializerRequest, status: "+request.status+", retrying "+memoryInitializer);doBrowserLoad();return}applyMemoryInitializer(response)};if(Module["memoryInitializerRequest"].response){setTimeout(useRequest,0)}else{Module["memoryInitializerRequest"].addEventListener("load",useRequest)}}else{doBrowserLoad()}}}var calledRun;dependenciesFulfilled=function runCaller(){if(!calledRun)run();if(!calledRun)dependenciesFulfilled=runCaller};function run(args){args=args||arguments_;if(runDependencies>0){return}preRun();if(runDependencies>0){return}function doRun(){if(calledRun)return;calledRun=true;Module["calledRun"]=true;if(ABORT)return;initRuntime();if(Module["onRuntimeInitialized"])Module["onRuntimeInitialized"]();postRun()}if(Module["setStatus"]){Module["setStatus"]("Running...");setTimeout(function(){setTimeout(function(){Module["setStatus"]("")},1);doRun()},1)}else{doRun()}}if(Module["preInit"]){if(typeof Module["preInit"]=="function")Module["preInit"]=[Module["preInit"]];while(Module["preInit"].length>0){Module["preInit"].pop()()}}run();
