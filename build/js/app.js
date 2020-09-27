!function(){"use strict";var basedir,module,webfontloader=(function(module){!function(){function aa(a,b,c){return a.call.apply(a.bind,arguments)}function ba(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var c=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(c,d),a.apply(b,c)}}return function(){return a.apply(b,arguments)}}function p(a,b,c){return(p=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?aa:ba).apply(null,arguments)}var q=Date.now||function(){return+new Date};var da=!!window.FontFace;function t(a,b,c,d){if(b=a.c.createElement(b),c)for(var e in c)c.hasOwnProperty(e)&&("style"==e?b.style.cssText=c[e]:b.setAttribute(e,c[e]));return d&&b.appendChild(a.c.createTextNode(d)),b}function u(a,b,c){(a=a.c.getElementsByTagName(b)[0])||(a=document.documentElement),a.insertBefore(c,a.lastChild)}function v(a){a.parentNode&&a.parentNode.removeChild(a)}function w(a,b,c){b=b||[],c=c||[];for(var d=a.className.split(/\s+/),e=0;e<b.length;e+=1){for(var f=!1,g=0;g<d.length;g+=1)if(b[e]===d[g]){f=!0;break}f||d.push(b[e])}for(b=[],e=0;e<d.length;e+=1){for(f=!1,g=0;g<c.length;g+=1)if(d[e]===c[g]){f=!0;break}f||b.push(d[e])}a.className=b.join(" ").replace(/\s+/g," ").replace(/^\s+|\s+$/,"")}function y(a,b){for(var c=a.className.split(/\s+/),d=0,e=c.length;d<e;d++)if(c[d]==b)return!0;return!1}function z(a,b,c){function d(){m&&e&&f&&(m(g),m=null)}b=t(a,"link",{rel:"stylesheet",href:b,media:"all"});var e=!1,f=!0,g=null,m=c||null;da?(b.onload=function(){e=!0,d()},b.onerror=function(){e=!0,g=Error("Stylesheet failed to load"),d()}):setTimeout(function(){e=!0,d()},0),u(a,"head",b)}function A(a,b,c,d){var e=a.c.getElementsByTagName("head")[0];if(e){var f=t(a,"script",{src:b}),g=!1;return f.onload=f.onreadystatechange=function(){g||this.readyState&&"loaded"!=this.readyState&&"complete"!=this.readyState||(g=!0,c&&c(null),f.onload=f.onreadystatechange=null,"HEAD"==f.parentNode.tagName&&e.removeChild(f))},e.appendChild(f),setTimeout(function(){g||(g=!0,c&&c(Error("Script load timeout")))},d||5e3),f}return null}function B(){this.a=0,this.c=null}function C(a){return a.a++,function(){a.a--,D(a)}}function E(a,b){a.c=b,D(a)}function D(a){0==a.a&&a.c&&(a.c(),a.c=null)}function F(a){this.a=a||"-"}function G(a,b){this.c=a,this.f=4,this.a="n";var c=(b||"n4").match(/^([nio])([1-9])$/i);c&&(this.a=c[1],this.f=parseInt(c[2],10))}function I(a){var b=[];a=a.split(/,\s*/);for(var c=0;c<a.length;c++){var d=a[c].replace(/['"]/g,"");-1!=d.indexOf(" ")||/^\d/.test(d)?b.push("'"+d+"'"):b.push(d)}return b.join(",")}function J(a){return a.a+a.f}function H(a){var b="normal";return"o"===a.a?b="oblique":"i"===a.a&&(b="italic"),b}function ga(a){var b=4,c="n",d=null;return a&&((d=a.match(/(normal|oblique|italic)/i))&&d[1]&&(c=d[1].substr(0,1).toLowerCase()),(d=a.match(/([1-9]00|normal|bold)/i))&&d[1]&&(/bold/i.test(d[1])?b=7:/[1-9]00/.test(d[1])&&(b=parseInt(d[1].substr(0,1),10)))),c+b}function L(a){if(a.g){var b=y(a.f,a.a.c("wf","active")),c=[],d=[a.a.c("wf","loading")];b||c.push(a.a.c("wf","inactive")),w(a.f,c,d)}K(a,"inactive")}function K(a,b,c){a.j&&a.h[b]&&(c?a.h[b](c.c,J(c)):a.h[b]())}function M(a,b){this.c=a,this.f=b,this.a=t(this.c,"span",{"aria-hidden":"true"},this.f)}function N(a){u(a.c,"body",a.a)}function O(a){return"display:block;position:absolute;top:-9999px;left:-9999px;font-size:300px;width:auto;height:auto;line-height:normal;margin:0;padding:0;font-variant:normal;white-space:nowrap;font-family:"+I(a.c)+";font-style:"+H(a)+";font-weight:"+a.f+"00;"}function P(a,b,c,d,e,f){this.g=a,this.j=b,this.a=d,this.c=c,this.f=e||3e3,this.h=f||void 0}function Q(a,b,c,d,e,f,g){this.v=a,this.B=b,this.c=c,this.a=d,this.s=g||"BESbswy",this.f={},this.w=e||3e3,this.u=f||null,this.m=this.j=this.h=this.g=null,this.g=new M(this.c,this.s),this.h=new M(this.c,this.s),this.j=new M(this.c,this.s),this.m=new M(this.c,this.s),a=O(a=new G(this.a.c+",serif",J(this.a))),this.g.a.style.cssText=a,a=O(a=new G(this.a.c+",sans-serif",J(this.a))),this.h.a.style.cssText=a,a=O(a=new G("serif",J(this.a))),this.j.a.style.cssText=a,a=O(a=new G("sans-serif",J(this.a))),this.m.a.style.cssText=a,N(this.g),N(this.h),N(this.j),N(this.m)}F.prototype.c=function(a){for(var b=[],c=0;c<arguments.length;c++)b.push(arguments[c].replace(/[\W_]+/g,"").toLowerCase());return b.join(this.a)},P.prototype.start=function(){var a=this.c.o.document,b=this,c=q(),d=new Promise(function(d,e){!function f(){q()-c>=b.f?e():a.fonts.load(function(a){return H(a)+" "+a.f+"00 300px "+I(a.c)}(b.a),b.h).then(function(a){1<=a.length?d():setTimeout(f,25)},function(){e()})}()}),e=null,f=new Promise(function(a,d){e=setTimeout(d,b.f)});Promise.race([f,d]).then(function(){e&&(clearTimeout(e),e=null),b.g(b.a)},function(){b.j(b.a)})};var R={D:"serif",C:"sans-serif"},S=null;function T(){if(null===S){var a=/AppleWebKit\/([0-9]+)(?:\.([0-9]+))/.exec(window.navigator.userAgent);S=!!a&&(536>parseInt(a[1],10)||536===parseInt(a[1],10)&&11>=parseInt(a[2],10))}return S}function la(a,b,c){for(var d in R)if(R.hasOwnProperty(d)&&b===a.f[R[d]]&&c===a.f[R[d]])return!0;return!1}function U(a){var d,b=a.g.a.offsetWidth,c=a.h.a.offsetWidth;(d=b===a.f.serif&&c===a.f["sans-serif"])||(d=T()&&la(a,b,c)),d?q()-a.A>=a.w?T()&&la(a,b,c)&&(null===a.u||a.u.hasOwnProperty(a.a.c))?V(a,a.v):V(a,a.B):function(a){setTimeout(p(function(){U(this)},a),50)}(a):V(a,a.v)}function V(a,b){setTimeout(p(function(){v(this.g.a),v(this.h.a),v(this.j.a),v(this.m.a),b(this.a)},a),0)}function W(a,b,c){this.c=a,this.a=b,this.f=0,this.m=this.j=!1,this.s=c}Q.prototype.start=function(){this.f.serif=this.j.a.offsetWidth,this.f["sans-serif"]=this.m.a.offsetWidth,this.A=q(),U(this)};var X=null;function na(a){0==--a.f&&a.j&&(a.m?((a=a.a).g&&w(a.f,[a.a.c("wf","active")],[a.a.c("wf","loading"),a.a.c("wf","inactive")]),K(a,"active")):L(a.a))}function oa(a){this.j=a,this.a=new function(){this.c={}},this.h=0,this.f=this.g=!0}function qa(a,b,c,d,e){var f=0==--a.h;(a.f||a.g)&&setTimeout(function(){var a=e||null,m=d||{};if(0===c.length&&f)L(b.a);else{b.f+=c.length,f&&(b.j=f);var h,l=[];for(h=0;h<c.length;h++){var k=c[h],n=m[k.c],r=b.a,x=k;if(r.g&&w(r.f,[r.a.c("wf",x.c,J(x).toString(),"loading")]),K(r,"fontloading",x),r=null,null===X)if(window.FontFace){x=/Gecko.*Firefox\/(\d+)/.exec(window.navigator.userAgent);var xa=/OS X.*Version\/10\..*Safari/.exec(window.navigator.userAgent)&&/Apple/.exec(window.navigator.vendor);X=x?42<parseInt(x[1],10):!xa}else X=!1;r=X?new P(p(b.g,b),p(b.h,b),b.c,k,b.s,n):new Q(p(b.g,b),p(b.h,b),b.c,k,b.s,a,n),l.push(r)}for(h=0;h<l.length;h++)l[h].start()}},0)}function ra(a,b){this.c=a,this.a=b}function sa(a,b){this.c=a,this.a=b}W.prototype.g=function(a){var b=this.a;b.g&&w(b.f,[b.a.c("wf",a.c,J(a).toString(),"active")],[b.a.c("wf",a.c,J(a).toString(),"loading"),b.a.c("wf",a.c,J(a).toString(),"inactive")]),K(b,"fontactive",a),this.m=!0,na(this)},W.prototype.h=function(a){var b=this.a;if(b.g){var c=y(b.f,b.a.c("wf",a.c,J(a).toString(),"active")),d=[],e=[b.a.c("wf",a.c,J(a).toString(),"loading")];c||d.push(b.a.c("wf",a.c,J(a).toString(),"inactive")),w(b.f,d,e)}K(b,"fontinactive",a),na(this)},oa.prototype.load=function(a){this.c=new function(a,b){this.a=a,this.o=b||a,this.c=this.o.document}(this.j,a.context||this.j),this.g=!1!==a.events,this.f=!1!==a.classes,function(a,b,c){var d=[],e=c.timeout;!function(a){a.g&&w(a.f,[a.a.c("wf","loading")]),K(a,"loading")}(b);var d=function(a,b,c){var e,d=[];for(e in b)if(b.hasOwnProperty(e)){var f=a.c[e];f&&d.push(f(b[e],c))}return d}(a.a,c,a.c),f=new W(a.c,b,e);for(a.h=d.length,b=0,c=d.length;b<c;b++)d[b].load(function(b,d,c){qa(a,f,b,d,c)})}(this,new function(a,b){this.c=a,this.f=a.o.document.documentElement,this.h=b,this.a=new F("-"),this.j=!1!==b.events,this.g=!1!==b.classes}(this.c,a),a)},ra.prototype.load=function(a){var c=this,d=c.a.projectId,e=c.a.version;if(d){var f=c.c.o;A(this.c,(c.a.api||"https://fast.fonts.net/jsapi")+"/"+d+".js"+(e?"?v="+e:""),function(e){e?a([]):(f["__MonotypeConfiguration__"+d]=function(){return c.a},function b(){if(f["__mti_fntLst"+d]){var h,c=f["__mti_fntLst"+d](),e=[];if(c)for(var l=0;l<c.length;l++){var k=c[l].fontfamily;void 0!=c[l].fontStyle&&void 0!=c[l].fontWeight?(h=c[l].fontStyle+c[l].fontWeight,e.push(new G(k,h))):e.push(new G(k))}a(e)}else setTimeout(function(){b()},50)}())}).id="__MonotypeAPIScript__"+d}else a([])},sa.prototype.load=function(a){var b,c,d=this.a.urls||[],e=this.a.families||[],f=this.a.testStrings||{},g=new B;for(b=0,c=d.length;b<c;b++)z(this.c,d[b],C(g));var m=[];for(b=0,c=e.length;b<c;b++)if((d=e[b].split(":"))[1])for(var h=d[1].split(","),l=0;l<h.length;l+=1)m.push(new G(d[0],h[l]));else m.push(new G(d[0]));E(g,function(){a(m,f)})};var ua="https://fonts.googleapis.com/css";var za={latin:"BESbswy","latin-ext":"çöüğş",cyrillic:"йяЖ",greek:"αβΣ",khmer:"កខគ",Hanuman:"កខគ"},Aa={thin:"1",extralight:"2","extra-light":"2",ultralight:"2","ultra-light":"2",light:"3",regular:"4",book:"4",medium:"5","semi-bold":"6",semibold:"6","demi-bold":"6",demibold:"6",bold:"7","extra-bold":"8",extrabold:"8","ultra-bold":"8",ultrabold:"8",black:"9",heavy:"9",l:"3",r:"4",b:"7"},Ba={i:"i",italic:"i",n:"n",normal:"n"},Ca=/^(thin|(?:(?:extra|ultra)-?)?light|regular|book|medium|(?:(?:semi|demi|extra|ultra)-?)?bold|black|heavy|l|r|b|[1-9]00)?(n|i|normal|italic)?$/;function Ea(a,b){this.c=a,this.a=b}var Fa={Arimo:!0,Cousine:!0,Tinos:!0};function Ga(a,b){this.c=a,this.a=b}function Ha(a,b){this.c=a,this.f=b,this.a=[]}Ea.prototype.load=function(a){var b=new B,c=this.c,d=new function(a,b){this.c=a||ua,this.a=[],this.f=[],this.g=b||""}(this.a.api,this.a.text),e=this.a.families;!function(a,b){for(var c=b.length,d=0;d<c;d++){var e=b[d].split(":");3==e.length&&a.f.push(e.pop());var f="";2==e.length&&""!=e[1]&&(f=":"),a.a.push(e.join(f))}}(d,e);var f=new function(a){this.f=a,this.a=[],this.c={}}(e);!function(a){for(var b=a.f.length,c=0;c<b;c++){var d=a.f[c].split(":"),e=d[0].replace(/\+/g," "),f=["n4"];if(2<=d.length){var g;if(g=[],m=d[1])for(var m,h=(m=m.split(",")).length,l=0;l<h;l++){var k;if((k=m[l]).match(/^[\w-]+$/))if(null==(n=Ca.exec(k.toLowerCase())))k="";else{if(k=null==(k=n[2])||""==k?"n":Ba[k],null==(n=n[1])||""==n)n="4";else var r=Aa[n],n=r||(isNaN(n)?"4":n.substr(0,1));k=[k,n].join("")}else k="";k&&g.push(k)}0<g.length&&(f=g),3==d.length&&(g=[],0<(d=(d=d[2])?d.split(","):g).length&&(d=za[d[0]])&&(a.c[e]=d))}for(a.c[e]||(d=za[e])&&(a.c[e]=d),d=0;d<f.length;d+=1)a.a.push(new G(e,f[d]))}}(f),z(c,function(a){if(0==a.a.length)throw Error("No fonts to load!");if(-1!=a.c.indexOf("kit="))return a.c;for(var b=a.a.length,c=[],d=0;d<b;d++)c.push(a.a[d].replace(/ /g,"+"));return b=a.c+"?family="+c.join("%7C"),0<a.f.length&&(b+="&subset="+a.f.join(",")),0<a.g.length&&(b+="&text="+encodeURIComponent(a.g)),b}(d),C(b)),E(b,function(){a(f.a,f.c,Fa)})},Ga.prototype.load=function(a){var b=this.a.id,c=this.c.o;b?A(this.c,(this.a.api||"https://use.typekit.net")+"/"+b+".js",function(b){if(b)a([]);else if(c.Typekit&&c.Typekit.config&&c.Typekit.config.fn){b=c.Typekit.config.fn;for(var e=[],f=0;f<b.length;f+=2)for(var g=b[f],m=b[f+1],h=0;h<m.length;h++)e.push(new G(g,m[h]));try{c.Typekit.load({events:!1,classes:!1,async:!0})}catch(l){}a(e)}},2e3):a([])},Ha.prototype.load=function(a){var b=this.f.id,c=this.c.o,d=this;b?(c.__webfontfontdeckmodule__||(c.__webfontfontdeckmodule__={}),c.__webfontfontdeckmodule__[b]=function(b,c){for(var g=0,m=c.fonts.length;g<m;++g){var h=c.fonts[g];d.a.push(new G(h.name,ga("font-weight:"+h.weight+";font-style:"+h.style)))}a(d.a)},A(this.c,(this.f.api||"https://f.fontdeck.com/s/css/js/")+function(a){return a.o.location.hostname||a.a.location.hostname}(this.c)+"/"+b+".js",function(b){b&&a([])})):a([])};var Y=new oa(window);Y.a.c.custom=function(a,b){return new sa(b,a)},Y.a.c.fontdeck=function(a,b){return new Ha(b,a)},Y.a.c.monotype=function(a,b){return new ra(b,a)},Y.a.c.typekit=function(a,b){return new Ga(b,a)},Y.a.c.google=function(a,b){return new Ea(b,a)};var Z={load:p(Y.load,Y)};module.exports?module.exports=Z:(window.WebFont=Z,window.WebFontConfig&&Y.load(window.WebFontConfig))}()}(module={path:basedir,exports:{},require:function(path,base){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}((void 0===base||null===base)&&module.path)}},module.exports),module.exports);function readAs(file,as){if(!(file instanceof Blob))throw new TypeError("Must be a File or Blob");return new Promise(function(resolve,reject){var reader=new FileReader;reader.onload=function(e){resolve(e.target.result)},reader.onerror=function(e){reject(new Error("Error reading"+file.name+": "+e.target.result))},reader["readAs"+as](file)})}var PromiseFileReader={readAsDataURL:function(file){return readAs(file,"DataURL")},readAsText:function(file){return readAs(file,"Text")},readAsArrayBuffer:function(file){return readAs(file,"ArrayBuffer")}},reg=/[\'\"]/,unquote=function(str){return str?(reg.test(str.charAt(0))&&(str=str.substr(1)),reg.test(str.charAt(str.length-1))&&(str=str.substr(0,str.length-1)),str):""},require$$1=["inherit","initial","unset"],require$$2=["caption","icon","menu","message-box","small-caption","status-bar"],require$$3=["normal","bold","bolder","lighter","100","200","300","400","500","600","700","800","900"],require$$4=["normal","italic","oblique"],require$$5=["normal","condensed","semi-condensed","extra-condensed","ultra-condensed","expanded","semi-expanded","extra-expanded","ultra-expanded"];function parse(str,opts){if("string"!=typeof str)return[str];var res=[str];"string"==typeof opts||Array.isArray(opts)?opts={brackets:opts}:opts||(opts={});var brackets=opts.brackets?Array.isArray(opts.brackets)?opts.brackets:[opts.brackets]:["{}","[]","()"],escape=opts.escape||"___",flat=!!opts.flat;brackets.forEach(function(bracket){var pRE=new RegExp(["\\",bracket[0],"[^\\",bracket[0],"\\",bracket[1],"]*\\",bracket[1]].join("")),ids=[];function replaceToken(token,idx,str){var refId=res.push(token.slice(bracket[0].length,-bracket[1].length))-1;return ids.push(refId),escape+refId+escape}res.forEach(function(str,i){for(var prevStr,a=0;str!=prevStr;)if(prevStr=str,str=str.replace(pRE,replaceToken),a++>1e4)throw Error("References have circular dependency. Please, check them.");res[i]=str}),ids=ids.reverse(),res=res.map(function(str){return ids.forEach(function(id){str=str.replace(new RegExp("(\\"+escape+id+"\\"+escape+")","g"),bracket[0]+"$1"+bracket[1])}),str})});var re=new RegExp("\\"+escape+"([0-9]+)\\"+escape);return flat?res:function nest(str,refs,escape){for(var match,res=[],a=0;match=re.exec(str);){if(a++>1e4)throw Error("Circular references in parenthesis");res.push(str.slice(0,match.index)),res.push(nest(refs[match[1]],refs)),str=str.slice(match.index+match[0].length)}return res.push(str),res}(res[0],res)}function stringify(arg,opts){if(opts&&opts.flat){var prevStr,escape=opts&&opts.escape||"___",str=arg[0];if(!str)return"";for(var re=new RegExp("\\"+escape+"([0-9]+)\\"+escape),a=0;str!=prevStr;){if(a++>1e4)throw Error("Circular references in "+arg);prevStr=str,str=str.replace(re,replaceRef)}return str}return arg.reduce(function f(prev,curr){return Array.isArray(curr)&&(curr=curr.reduce(f,"")),prev+curr},"");function replaceRef(match,idx){if(null==arg[idx])throw Error("Reference "+idx+"is undefined");return arg[idx]}}function parenthesis(arg,opts){return Array.isArray(arg)?stringify(arg,opts):parse(arg,opts)}parenthesis.parse=parse,parenthesis.stringify=stringify;var parenthesis_1=parenthesis,stringSplitBy=function(string,separator,o){if(null==string)throw Error("First argument should be a string");if(null==separator)throw Error("Separator should be a string or a RegExp");o?("string"==typeof o||Array.isArray(o))&&(o={ignore:o}):o={},null==o.escape&&(o.escape=!0),null==o.ignore?o.ignore=["[]","()","{}","<>",'""',"''","``","“”","«»"]:("string"==typeof o.ignore&&(o.ignore=[o.ignore]),o.ignore=o.ignore.map(function(pair){return 1===pair.length&&(pair+=pair),pair}));var tokens=parenthesis_1.parse(string,{flat:!0,brackets:o.ignore}),parts=tokens[0].split(separator);if(o.escape){for(var cleanParts=[],i=0;i<parts.length;i++){var prev=parts[i],part=parts[i+1];"\\"===prev[prev.length-1]&&"\\"!==prev[prev.length-2]?(cleanParts.push(prev+separator+part),i++):cleanParts.push(prev)}parts=cleanParts}for(i=0;i<parts.length;i++)tokens[0]=parts[i],parts[i]=parenthesis_1.stringify(tokens,{flat:!0});return parts},sizes=["xx-small","x-small","small","medium","large","x-large","xx-large","larger","smaller"],util_isSize=function(value){return/^[\d\.]/.test(value)||-1!==value.indexOf("/")||-1!==sizes.indexOf(value)},isSize=util_isSize,parse$1=parseFont,cache=parseFont.cache={};function parseFont(value){if("string"!=typeof value)throw new Error("Font argument must be a string.");if(cache[value])return cache[value];if(""===value)throw new Error("Cannot parse an empty string.");if(-1!==require$$2.indexOf(value))return cache[value]={system:value};for(var token,font={style:"normal",variant:"normal",weight:"normal",stretch:"normal",lineHeight:"normal",size:"1rem",family:["serif"]},tokens=stringSplitBy(value,/\s+/);token=tokens.shift();){if(-1!==require$$1.indexOf(token))return["style","variant","weight","stretch"].forEach(function(prop){font[prop]=token}),cache[value]=font;if(-1===require$$4.indexOf(token))if("normal"!==token&&"small-caps"!==token)if(-1===require$$5.indexOf(token)){if(-1===require$$3.indexOf(token)){if(isSize(token)){var parts=stringSplitBy(token,"/");if(font.size=parts[0],null!=parts[1]?font.lineHeight=parseLineHeight(parts[1]):"/"===tokens[0]&&(tokens.shift(),font.lineHeight=parseLineHeight(tokens.shift())),!tokens.length)throw new Error("Missing required font-family.");return font.family=stringSplitBy(tokens.join(" "),/\s*,\s*/).map(unquote),cache[value]=font}throw new Error("Unknown or unsupported font token: "+token)}font.weight=token}else font.stretch=token;else font.variant=token;else font.style=token}throw new Error("Missing required font-size.")}function parseLineHeight(value){var parsed=parseFloat(value);return parsed.toString()===value?parsed:value}var CACHE={};function toList(arg){return CACHE[arg]?CACHE[arg]:("string"==typeof arg&&(arg=CACHE[arg]=arg.split(/\s*,\s*|\s+/)),arg)}var isSize$1=util_isSize,globals=a2o(require$$1),systems=a2o(require$$2),weights=a2o(require$$3),styles=a2o(require$$4),stretches=a2o(require$$5),variants={normal:1,"small-caps":1},fams={serif:1,"sans-serif":1,monospace:1,cursive:1,fantasy:1,"system-ui":1},defaults_size="1rem",defaults_family="serif";function verify(value,values){if(value&&!values[value]&&!globals[value])throw Error("Unknown keyword `"+value+"`");return value}function a2o(a){for(var o={},i=0;i<a.length;i++)o[a[i]]=1;return o}var cssFont={parse:parse$1,stringify:function(o){if((o=function(src,props,keepRest){var prop,i,result={};if("string"==typeof props&&(props=toList(props)),Array.isArray(props)){var res={};for(i=0;i<props.length;i++)res[props[i]]=!0;props=res}for(prop in props)props[prop]=toList(props[prop]);var occupied={};for(prop in props){var aliases=props[prop];if(Array.isArray(aliases))for(i=0;i<aliases.length;i++){var alias=aliases[i];if(keepRest&&(occupied[alias]=!0),alias in src){if(result[prop]=src[alias],keepRest)for(var j=i;j<aliases.length;j++)occupied[aliases[j]]=!0;break}}else prop in src&&(props[prop]&&(result[prop]=src[prop]),keepRest&&(occupied[prop]=!0))}if(keepRest)for(prop in src)occupied[prop]||(result[prop]=src[prop]);return result}(o,{style:"style fontstyle fontStyle font-style slope distinction",variant:"variant font-variant fontVariant fontvariant var capitalization",weight:"weight w font-weight fontWeight fontweight",stretch:"stretch font-stretch fontStretch fontstretch width",size:"size s font-size fontSize fontsize height em emSize",lineHeight:"lh line-height lineHeight lineheight leading",family:"font family fontFamily font-family fontfamily type typeface face",system:"system reserved default global"})).system)return o.system&&verify(o.system,systems),o.system;if(verify(o.style,styles),verify(o.variant,variants),verify(o.weight,weights),verify(o.stretch,stretches),null==o.size&&(o.size=defaults_size),"number"==typeof o.size&&(o.size+="px"),!isSize$1)throw Error("Bad size value `"+o.size+"`");o.family||(o.family=defaults_family),Array.isArray(o.family)&&(o.family.length||(o.family=[defaults_family]),o.family=o.family.map(function(f){return fams[f]?f:'"'+f+'"'}).join(", "));var result=[];return result.push(o.style),o.variant!==o.style&&result.push(o.variant),o.weight!==o.variant&&o.weight!==o.style&&result.push(o.weight),o.stretch!==o.weight&&o.stretch!==o.variant&&o.stretch!==o.style&&result.push(o.stretch),result.push(o.size+(null==o.lineHeight||"normal"===o.lineHeight||o.lineHeight+""=="1"?"":"/"+o.lineHeight)),result.push(o.family),result.filter(Boolean).join(" ")}};try{self["workbox:window:5.1.3"]&&_()}catch(n){}try{self["workbox:core:5.1.3"]&&_()}catch(n){}var r=function(){var n=this;this.promise=new Promise(function(t,r){n.resolve=t,n.reject=r})};function i(n,t){var r=location.href;return new URL(n,r).href===new URL(t,r).href}var e=function(n,t){this.type=n,Object.assign(this,t)};function o(n,t,r){return r?t?t(n):n:(n&&n.then||(n=Promise.resolve(n)),t?n.then(t):n)}function u(){}var a=function(u){var a,f;function s(n,t){var a,c;return void 0===t&&(t={}),(a=u.call(this)||this).t={},a.i=0,a.o=new r,a.u=new r,a.s=new r,a.v=0,a.h=new Set,a.l=function(){var n=a.g,t=n.installing;a.i>0||!i(t.scriptURL,a.m)||performance.now()>a.v+6e4?(a.P=t,n.removeEventListener("updatefound",a.l)):(a.p=t,a.h.add(t),a.o.resolve(t)),++a.i,t.addEventListener("statechange",a.k)},a.k=function(n){var t=a.g,r=n.target,i=r.state,o=r===a.P,u=o?"external":"",c={sw:r,originalEvent:n};!o&&a.j&&(c.isUpdate=!0),a.dispatchEvent(new e(u+i,c)),"installed"===i?a.O=self.setTimeout(function(){"installed"===i&&t.waiting===r&&a.dispatchEvent(new e(u+"waiting",c))},200):"activating"===i&&(clearTimeout(a.O),o||a.u.resolve(r))},a.R=function(n){var t=a.p;t===navigator.serviceWorker.controller&&(a.dispatchEvent(new e("controlling",{sw:t,originalEvent:n,isUpdate:a.j})),a.s.resolve(t))},a.S=(c=function(n){var t=n.data,r=n.source;return o(a.getSW(),function(){a.h.has(r)&&a.dispatchEvent(new e("message",{data:t,sw:r,originalEvent:n}))})},function(){for(var n=[],t=0;t<arguments.length;t++)n[t]=arguments[t];try{return Promise.resolve(c.apply(this,n))}catch(n){return Promise.reject(n)}}),a.m=n,a.t=t,navigator.serviceWorker.addEventListener("message",a.S),a}f=u,(a=s).prototype=Object.create(f.prototype),a.prototype.constructor=a,a.__proto__=f;var h,l=s.prototype;return l.register=function(n){var t=(void 0===n?{}:n).immediate,r=void 0!==t&&t;try{var u=this;return function(n,t){var r=n();return r&&r.then?r.then(t):t()}(function(){if(!r&&"complete"!==document.readyState)return c(new Promise(function(n){return window.addEventListener("load",n)}))},function(){return u.j=Boolean(navigator.serviceWorker.controller),u.U=u.B(),o(u.L(),function(n){u.g=n,u.U&&(u.p=u.U,u.u.resolve(u.U),u.s.resolve(u.U),u.U.addEventListener("statechange",u.k,{once:!0}));var t=u.g.waiting;return t&&i(t.scriptURL,u.m)&&(u.p=t,Promise.resolve().then(function(){u.dispatchEvent(new e("waiting",{sw:t,wasWaitingBeforeRegister:!0}))}).then(function(){})),u.p&&(u.o.resolve(u.p),u.h.add(u.p)),u.g.addEventListener("updatefound",u.l),navigator.serviceWorker.addEventListener("controllerchange",u.R,{once:!0}),u.g})})}catch(n){return Promise.reject(n)}},l.update=function(){try{return this.g?c(this.g.update()):void 0}catch(n){return Promise.reject(n)}},l.getSW=function(){try{return void 0!==this.p?this.p:this.o.promise}catch(n){return Promise.reject(n)}},l.messageSW=function(t){try{return o(this.getSW(),function(r){return function(n,t){return new Promise(function(r){var i=new MessageChannel;i.port1.onmessage=function(n){r(n.data)},n.postMessage(t,[i.port2])})}(r,t)})}catch(n){return Promise.reject(n)}},l.B=function(){var n=navigator.serviceWorker.controller;return n&&i(n.scriptURL,this.m)?n:void 0},l.L=function(){try{var n=this;return function(n,t){try{var r=n()}catch(n){return t(n)}return r&&r.then?r.then(void 0,t):r}(function(){return o(navigator.serviceWorker.register(n.m,n.t),function(t){return n.v=performance.now(),t})},function(n){throw n})}catch(n){return Promise.reject(n)}},(h=[{key:"active",get:function(){return this.u.promise}},{key:"controlling",get:function(){return this.s.promise}}])&&function(n,t){for(var r=0;r<t.length;r++){var i=t[r];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}(s.prototype,h),s}(function(){function n(){this.M=new Map}var t=n.prototype;return t.addEventListener=function(n,t){this._(n).add(t)},t.removeEventListener=function(n,t){this._(n).delete(t)},t.dispatchEvent=function(n){n.target=this;var t=this._(n.type),r=Array.isArray(t),i=0;for(t=r?t:t[Symbol.iterator]();;){var e;if(r){if(i>=t.length)break;e=t[i++]}else{if((i=t.next()).done)break;e=i.value}e(n)}},t._=function(n){return this.M.has(n)||this.M.set(n,new Set),this.M.get(n)},n}());function c(n,t){if(!t)return n&&n.then?n.then(u):Promise.resolve()}function textStyle(s){return s.replace(/./gu,"$&︎")}let options,outputCtx,renderCtx;function refresh(){!function(o){outputCtx.save(),[outputCtx.canvas.width,outputCtx.canvas.height]=[o.size[0],o.size[1]],ctx=outputCtx,ctx.fillStyle="black",ctx.fillRect(0,0,ctx.canvas.width,ctx.canvas.height),outputCtx.imageSmoothingEnabled=o.smooth,[renderCtx.canvas.width,renderCtx.canvas.height]=o.clip?[o.cell[0]*o.scale,o.cell[1]*o.scale]:[o.size[0]*o.scale,o.size[1]*o.scale],renderCtx.scale(o.scale,o.scale),function(ctx){ctx.textAlign="center",ctx.textBaseline="middle",ctx.fillStyle="white"}(renderCtx),renderCtx.font=cssFont.stringify(o.font),o.clip?function(o){let i=0;for(let y=0;y+o.cell[1]<=o.size[1]&&i<o.charset.length;y+=o.cell[1])for(let x=0;x+o.cell[0]<=o.size[0]&&i<o.charset.length;x+=o.cell[0])renderCtx.clearRect(0,0,o.cell[0],o.cell[1]),renderCtx.fillText(textStyle(o.charset.charAt(i)),o.offset[0]+o.cell[0]/2,o.offset[1]+o.cell[1]/2),outputCtx.drawImage(renderCtx.canvas,x,y,o.cell[0],o.cell[1]),i++}(o):function(o){let i=0;for(let y=0;y+o.cell[1]<=o.size[1]&&i<o.charset.length;y+=o.cell[1])for(let x=0;x+o.cell[0]<=o.size[0]&&i<o.charset.length;x+=o.cell[0])renderCtx.fillText(textStyle(o.charset.charAt(i)),x+o.offset[0]+o.cell[0]/2,y+o.offset[1]+o.cell[1]/2),i++;outputCtx.drawImage(renderCtx.canvas,0,0,o.size[0],o.size[1])}(o);var ctx;outputCtx.restore()}(options),function(o){if(outputCtx.save(),o.grid){let pixelOffset=.5;outputCtx.strokeStyle="#7FFF00",outputCtx.lineWidth=1;for(let y=o.cell[1];y<o.size[1];y+=o.cell[1])outputCtx.beginPath(),outputCtx.moveTo(pixelOffset,y+pixelOffset),outputCtx.lineTo(o.size[0]+pixelOffset,y+pixelOffset),outputCtx.stroke();for(let x=o.cell[0];x<o.size[0];x+=o.cell[0])outputCtx.beginPath(),outputCtx.moveTo(x+pixelOffset,pixelOffset),outputCtx.lineTo(x+pixelOffset,o.size[1]+pixelOffset),outputCtx.stroke()}outputCtx.restore()}(options)}const fallbackFontTemplate=document.querySelector(".fallbackFontTemplate"),controlsFiller=document.querySelector(".controls .filler"),charsetFiller=document.querySelector(".charset .filler"),body=document.querySelector("body"),header=document.querySelector(".header"),controls=(document.querySelector(".preview"),document.querySelector(".controls")),fontsInputs=document.querySelector(".fontsInputs"),charsets=(document.querySelector(".gridInputs"),document.querySelector(".charset")),footer=document.querySelector(".footer"),canvas=document.querySelector("canvas"),complexInputs=document.querySelectorAll(".input-number, .input-textarea"),fallbackFontsCount=document.querySelector("#fallbackFontsCount"),bitmapWidth=document.querySelector("#bitmapWidth"),bitmapHeight=document.querySelector("#bitmapHeight"),cellsRow=document.querySelector("#cellsRow"),cellsColumn=document.querySelector("#cellsColumn"),cellWidth=document.querySelector("#cellWidth"),cellHeight=document.querySelector("#cellHeight"),fontSize=document.querySelector("#fontSize"),scale=document.querySelector("#scale"),smooth=document.querySelector("#smooth"),clipCells=document.querySelector("#clipCells"),offsetX=document.querySelector("#offsetX"),offsetY=document.querySelector("#offsetY"),showGrid=document.querySelector("#showGrid"),charset=document.querySelector("#charset"),fontInputs=[{container:document.querySelector(".mandatoryFont"),tabFontName:document.querySelector("#tabFontName"),tabFontFile:document.querySelector("#tabFontFile"),fontName:document.querySelector("#fontName"),fontFile:document.querySelector("#fontFile")}];var Values;function numberContainer(complexInput){return complexInput.parentElement}function addFallbackFontField(){var _a,_b;const count=fontInputs.length,fontInputElement=fallbackFontTemplate.cloneNode(!0);let fontInput={container:fontInputElement,tabFontName:fontInputElement.querySelector("#tabFFontName"),tabFontFile:fontInputElement.querySelector("#tabFFontFile"),fontName:fontInputElement.querySelector("#ffontName"),fontFile:fontInputElement.querySelector("#ffontFile")};fontInput.tabFontName.setAttribute("id","#tabFont"+count+"Name"),fontInput.tabFontName.setAttribute("name","tab-group-font"+count),fontInput.tabFontFile.setAttribute("id","#tabFont"+count+"File"),fontInput.tabFontFile.setAttribute("name","tab-group-font"+count),fontInput.fontName.setAttribute("id","#font"+count+"Name"),fontInput.fontFile.setAttribute("id","#font"+count+"File"),null===(_a=fontInputElement.querySelector('label[for="tabFFontName"]'))||void 0===_a||_a.setAttribute("for",fontInput.tabFontName.id),null===(_b=fontInputElement.querySelector('label[for="tabFFontFile"]'))||void 0===_b||_b.setAttribute("for",fontInput.tabFontFile.id),fontInputElement.classList.remove("fallbackFontTemplate"),fontInputs.push(fontInput),fontsInputs.appendChild(fontInputElement)}function impreciseHighlight(complexInput,remainder){remainder?numberContainer(complexInput).classList.add("input-imprecise"):numberContainer(complexInput).classList.remove("input-imprecise")}function controlsMinHeight(){return controls.scrollHeight-controlsFiller.offsetHeight}!function(Values){Values.controlsMinWidth=parseInt(getComputedStyle(body).getPropertyValue("--controls-min-width").replace("px","")),Values.previewPadding=parseInt(getComputedStyle(canvas.parentElement).padding.replace("px","")),Values.controlsMinContent=controls.scrollHeight}(Values||(Values={}));const resize={action:()=>{}},fontInput={tabFontName:emptyAction,tabFontFile:emptyAction,fontName:emptyAction,fontFile:emptyAction},fallbackFontsCount$1=emptyBinding(fallbackFontsCount),bitmapWidth$1=emptyBinding(bitmapWidth),bitmapHeight$1=emptyBinding(bitmapHeight),cellsRow$1=emptyBinding(cellsRow),cellsColumn$1=emptyBinding(cellsColumn),cellWidth$1=emptyBinding(cellWidth),cellHeight$1=emptyBinding(cellHeight),fontSize$1=emptyBinding(fontSize),scale$1=emptyBinding(scale),smooth$1=emptyBinding(smooth),clipCells$1=emptyBinding(clipCells),offsetX$1=emptyBinding(offsetX),offsetY$1=emptyBinding(offsetY),showGrid$1=emptyBinding(showGrid),charset$1=emptyBinding(charset),sizes$1=[bitmapWidth$1,bitmapHeight$1,cellsRow$1,cellsColumn$1,cellWidth$1,cellHeight$1],standard=[fallbackFontsCount$1,fontSize$1,clipCells$1,scale$1,smooth$1,offsetX$1,offsetY$1,showGrid$1,charset$1];function emptyAction(){return{action:()=>{}}}function emptyBinding(element){return{element:element,action:emptyAction}}function registerFontInput(index){fontInputs[index].tabFontName.addEventListener("change",()=>{fontInput.tabFontName(index,!0)}),fontInputs[index].tabFontFile.addEventListener("change",()=>{fontInput.tabFontFile(index,!0)}),fontInputs[index].fontName.addEventListener("change",()=>{fontInput.fontName(index,!0),refresh()}),fontInputs[index].fontFile.addEventListener("change",()=>{fontInput.fontFile(index,!0),refresh()})}function fire(bindings,update,skip){bindings.forEach(binding=>{skip&&skip.action==binding.action||binding.action(update)})}const options$1=new class{constructor(){this.context2D=canvas.getContext("2d"),this.font=cssFont.parse("10pt Adobe Blank,Adobe Blank"),this.size=[1,1],this.scale=1,this.smooth=!0,this.offset=[1,1],this.cell=[1,1],this.charset="a",this.clip=!1,this.grid=!1}};if("serviceWorker"in navigator){const wb=new a("sw.js");wb.addEventListener("activated",event=>{event.isUpdate||(console.log("new service worker activated, reloading to cache everything"),location.reload())}),navigator.serviceWorker.addEventListener("message",event=>{"OFFLINE"==event.data.type&&header.classList.add("offline")},{once:!0}),wb.register()}var s,element;resize.action=(()=>{body.style.setProperty("--preview-content-width",options$1.size[0]+35+"px"),body.style.setProperty("--preview-height",(footer.getBoundingClientRect().bottom+window.scrollY<=window.innerHeight?Math.max(controlsMinHeight()-charsets.offsetHeight,Math.min(options$1.size[1]+35,window.innerHeight-header.offsetHeight-(charsets.scrollHeight-charsetFiller.offsetHeight)-footer.offsetHeight)):Math.min(options$1.size[1]+35,controlsMinHeight()))+"px")}),fontInput.tabFontName=(index=>{fontInputs[index].tabFontName.checked&&(fontInput.fontName(index),refresh())}),fontInput.tabFontFile=(index=>{fontInputs[index].tabFontFile.checked&&(fontInput.fontFile(index),refresh())}),fontInput.fontName=(index=>{const fontName=fontInputs[index].fontName;let value=fontName.value.trim();0==value.length&&(value=options$1.font.family[0]),fontName.value=value,options$1.font.family[index]=value}),fontInput.fontFile=((index,update)=>{const fontFile=fontInputs[index].fontFile;if(fontFile.files.length>0){const file=fontFile.files[0];update&&PromiseFileReader.readAsArrayBuffer(file).then(async arrayBuffer=>{const font=new FontFace(file.name,arrayBuffer);await font.load(),document.fonts.add(font),refresh()}).catch(()=>{fontFile.value=""}),options$1.font.family[index]=file.name}}),fallbackFontsCount$1.action=(()=>{let index,diff=parseInt(fallbackFontsCount.value)+1-fontInputs.length;if(diff>0)for(;diff>0;diff--)index=fontInputs.length,options$1.font.family.push("Adobe Blank"),addFallbackFontField(),registerFontInput(index);else for(;diff<0;diff++)fontInputs.length>1&&(fontsInputs.removeChild(fontsInputs.lastChild),fontInputs.pop()),index=fontInputs.length,options$1.font.family.pop(),options$1.font.family[index]="Adobe Blank"}),bitmapWidth$1.action=(update=>{update&&(options$1.size[0]=parseInt(bitmapWidth.value),resize.action()),impreciseHighlight(bitmapWidth,options$1.size[0]%options$1.cell[0])}),bitmapHeight$1.action=(update=>{update&&(options$1.size[1]=parseInt(bitmapHeight.value),resize.action()),impreciseHighlight(bitmapHeight,options$1.size[1]%options$1.cell[1])}),cellsRow$1.action=(update=>{update?options$1.cell[0]=Math.floor(options$1.size[0]/parseInt(cellsRow.value)):cellsRow.value=Math.floor(options$1.size[0]/options$1.cell[0])+"",impreciseHighlight(cellsRow,options$1.size[0]%options$1.cell[0])}),cellsColumn$1.action=(update=>{update?options$1.cell[1]=Math.floor(options$1.size[1]/parseInt(cellsColumn.value)):cellsColumn.value=Math.floor(options$1.size[1]/options$1.cell[1])+"",impreciseHighlight(cellsColumn,options$1.size[1]%options$1.cell[1])}),cellWidth$1.action=(update=>{update?options$1.cell[0]=parseInt(cellWidth.value):cellWidth.value=options$1.cell[0]+"",impreciseHighlight(cellWidth,options$1.size[0]%options$1.cell[0])}),cellHeight$1.action=(update=>{update?options$1.cell[1]=parseInt(cellHeight.value):cellHeight.value=options$1.cell[1]+"",impreciseHighlight(cellHeight,options$1.size[1]%options$1.cell[1])}),fontSize$1.action=(()=>{options$1.font.size=fontSize.value+"pt"}),clipCells$1.action=(()=>{options$1.clip=clipCells.checked}),scale$1.action=(()=>{const scale$1=1<<scale.selectedIndex;options$1.scale=scale$1,smooth.disabled=1==scale$1}),smooth$1.action=(()=>{options$1.smooth=smooth.checked}),offsetX$1.action=(()=>{options$1.offset[0]=parseInt(offsetX.value)}),offsetY$1.action=(()=>{options$1.offset[1]=parseInt(offsetY.value)}),showGrid$1.action=(()=>{options$1.grid=showGrid.checked}),charset$1.action=(()=>{const value=[...new Set((s=charset.value,s.replace(/([\u180B-\u180D\uFE00-\uFE0F]|\uDB40[\uDD00-\uDDEF])/g,"")))].join("");charset.value=textStyle(value),options$1.charset=value}),fontInput.fontName(0,!0),fire([...sizes$1,...standard],!0),webfontloader.load({classes:!1,custom:{families:["DejaVu Sans Mono","Adobe Blank"],testStrings:{"DejaVu Sans Mono":options$1.charset,FALLBACK_FONT:options$1.charset}},active:()=>{refresh()}}),function(o){outputCtx=(options=o).context2D,renderCtx=document.createElement("canvas").getContext("2d")}(options$1),window.addEventListener("resize",()=>{resize.action()}),registerFontInput(0),sizes$1.forEach(binding=>{binding.element.addEventListener("change",()=>{binding.action(!0),fire(sizes$1,!1,binding),refresh()})}),standard.forEach(binding=>{binding.element.addEventListener("change",()=>{binding.action(!0),refresh()})}),complexInputs.forEach(element=>{element.addEventListener("focusin",event=>{event.currentTarget.classList.add("input-highlighted")}),element.addEventListener("focusout",event=>{event.currentTarget.classList.remove("input-highlighted")})}),(element=charset).addEventListener("keydown",event=>{event.isComposing||"Enter"!=event.key||element.blur()})}();