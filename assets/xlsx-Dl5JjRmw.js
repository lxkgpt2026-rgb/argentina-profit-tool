/*! xlsx.js (C) 2013-present SheetJS -- http://sheetjs.com */var On=1252,Fi=[874,932,936,949,950,1250,1251,1252,1253,1254,1255,1256,1257,1258,1e4],Yt={0:1252,1:65001,2:65001,77:1e4,128:932,129:949,130:1361,134:936,136:950,161:1253,162:1254,163:1258,177:1255,178:1256,186:1257,204:1251,222:874,238:1250,255:1252,69:6969},jt=function(e){Fi.indexOf(e)!=-1&&(On=Yt[0]=e)};function Si(){jt(1252)}var kr=function(e){jt(e)};function Rn(){kr(1200),Si()}function F0(e){for(var a=[],r=0,n=e.length;r<n;++r)a[r]=e.charCodeAt(r);return a}function Ci(e){for(var a=[],r=0;r<e.length>>1;++r)a[r]=String.fromCharCode(e.charCodeAt(2*r)+(e.charCodeAt(2*r+1)<<8));return a.join("")}function In(e){for(var a=[],r=0;r<e.length>>1;++r)a[r]=String.fromCharCode(e.charCodeAt(2*r+1)+(e.charCodeAt(2*r)<<8));return a.join("")}var Ca=function(e){var a=e.charCodeAt(0),r=e.charCodeAt(1);return a==255&&r==254?Ci(e.slice(2)):a==254&&r==255?In(e.slice(2)):a==65279?e.slice(1):e},at=function(a){return String.fromCharCode(a)},S0=function(a){return String.fromCharCode(a)},Ha,Xr="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";function C0(e){for(var a="",r=0,n=0,t=0,s=0,i=0,c=0,f=0,l=0;l<e.length;)r=e.charCodeAt(l++),s=r>>2,n=e.charCodeAt(l++),i=(r&3)<<4|n>>4,t=e.charCodeAt(l++),c=(n&15)<<2|t>>6,f=t&63,isNaN(n)?c=f=64:isNaN(t)&&(f=64),a+=Xr.charAt(s)+Xr.charAt(i)+Xr.charAt(c)+Xr.charAt(f);return a}function hr(e){var a="",r=0,n=0,t=0,s=0,i=0,c=0,f=0;e=e.replace(/[^\w\+\/\=]/g,"");for(var l=0;l<e.length;)s=Xr.indexOf(e.charAt(l++)),i=Xr.indexOf(e.charAt(l++)),r=s<<2|i>>4,a+=String.fromCharCode(r),c=Xr.indexOf(e.charAt(l++)),n=(i&15)<<4|c>>2,c!==64&&(a+=String.fromCharCode(n)),f=Xr.indexOf(e.charAt(l++)),t=(c&3)<<6|f,f!==64&&(a+=String.fromCharCode(t));return a}var ge=(function(){return typeof Buffer<"u"&&typeof process<"u"&&typeof process.versions<"u"&&!!process.versions.node})(),sa=(function(){if(typeof Buffer<"u"){var e=!Buffer.from;if(!e)try{Buffer.from("foo","utf8")}catch{e=!0}return e?function(a,r){return r?new Buffer(a,r):new Buffer(a)}:Buffer.from.bind(Buffer)}return function(){}})();function Kr(e){return ge?Buffer.alloc?Buffer.alloc(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}function y0(e){return ge?Buffer.allocUnsafe?Buffer.allocUnsafe(e):new Buffer(e):typeof Uint8Array<"u"?new Uint8Array(e):new Array(e)}var Tr=function(a){return ge?sa(a,"binary"):a.split("").map(function(r){return r.charCodeAt(0)&255})};function ia(e){if(Array.isArray(e))return e.map(function(n){return String.fromCharCode(n)}).join("");for(var a=[],r=0;r<e.length;++r)a[r]=String.fromCharCode(e[r]);return a.join("")}function Jt(e){if(typeof ArrayBuffer>"u")throw new Error("Unsupported");if(e instanceof ArrayBuffer)return Jt(new Uint8Array(e));for(var a=new Array(e.length),r=0;r<e.length;++r)a[r]=e[r];return a}var Gr=ge?function(e){return Buffer.concat(e.map(function(a){return Buffer.isBuffer(a)?a:sa(a)}))}:function(e){if(typeof Uint8Array<"u"){var a=0,r=0;for(a=0;a<e.length;++a)r+=e[a].length;var n=new Uint8Array(r),t=0;for(a=0,r=0;a<e.length;r+=t,++a)if(t=e[a].length,e[a]instanceof Uint8Array)n.set(e[a],r);else{if(typeof e[a]=="string")throw"wtf";n.set(new Uint8Array(e[a]),r)}return n}return[].concat.apply([],e.map(function(s){return Array.isArray(s)?s:[].slice.call(s)}))};function yi(e){for(var a=[],r=0,n=e.length+250,t=Kr(e.length+255),s=0;s<e.length;++s){var i=e.charCodeAt(s);if(i<128)t[r++]=i;else if(i<2048)t[r++]=192|i>>6&31,t[r++]=128|i&63;else if(i>=55296&&i<57344){i=(i&1023)+64;var c=e.charCodeAt(++s)&1023;t[r++]=240|i>>8&7,t[r++]=128|i>>2&63,t[r++]=128|c>>6&15|(i&3)<<4,t[r++]=128|c&63}else t[r++]=224|i>>12&15,t[r++]=128|i>>6&63,t[r++]=128|i&63;r>n&&(a.push(t.slice(0,r)),r=0,t=Kr(65535),n=65530)}return a.push(t.slice(0,r)),Gr(a)}var sr=/\u0000/g,ya=/[\u0001-\u0006]/g;function da(e){for(var a="",r=e.length-1;r>=0;)a+=e.charAt(r--);return a}function wr(e,a){var r=""+e;return r.length>=a?r:De("0",a-r.length)+r}function Zt(e,a){var r=""+e;return r.length>=a?r:De(" ",a-r.length)+r}function ht(e,a){var r=""+e;return r.length>=a?r:r+De(" ",a-r.length)}function Di(e,a){var r=""+Math.round(e);return r.length>=a?r:De("0",a-r.length)+r}function Oi(e,a){var r=""+e;return r.length>=a?r:De("0",a-r.length)+r}var D0=Math.pow(2,32);function ha(e,a){if(e>D0||e<-D0)return Di(e,a);var r=Math.round(e);return Oi(r,a)}function ut(e,a){return a=a||0,e.length>=7+a&&(e.charCodeAt(a)|32)===103&&(e.charCodeAt(a+1)|32)===101&&(e.charCodeAt(a+2)|32)===110&&(e.charCodeAt(a+3)|32)===101&&(e.charCodeAt(a+4)|32)===114&&(e.charCodeAt(a+5)|32)===97&&(e.charCodeAt(a+6)|32)===108}var O0=[["Sun","Sunday"],["Mon","Monday"],["Tue","Tuesday"],["Wed","Wednesday"],["Thu","Thursday"],["Fri","Friday"],["Sat","Saturday"]],yt=[["J","Jan","January"],["F","Feb","February"],["M","Mar","March"],["A","Apr","April"],["M","May","May"],["J","Jun","June"],["J","Jul","July"],["A","Aug","August"],["S","Sep","September"],["O","Oct","October"],["N","Nov","November"],["D","Dec","December"]];function Ri(e){return e||(e={}),e[0]="General",e[1]="0",e[2]="0.00",e[3]="#,##0",e[4]="#,##0.00",e[9]="0%",e[10]="0.00%",e[11]="0.00E+00",e[12]="# ?/?",e[13]="# ??/??",e[14]="m/d/yy",e[15]="d-mmm-yy",e[16]="d-mmm",e[17]="mmm-yy",e[18]="h:mm AM/PM",e[19]="h:mm:ss AM/PM",e[20]="h:mm",e[21]="h:mm:ss",e[22]="m/d/yy h:mm",e[37]="#,##0 ;(#,##0)",e[38]="#,##0 ;[Red](#,##0)",e[39]="#,##0.00;(#,##0.00)",e[40]="#,##0.00;[Red](#,##0.00)",e[45]="mm:ss",e[46]="[h]:mm:ss",e[47]="mmss.0",e[48]="##0.0E+0",e[49]="@",e[56]='"‰∏äÂçà/‰∏ãÂçà "hh"ÊôÇ"mm"ÂàÜ"ss"Áßí "',e}var de={0:"General",1:"0",2:"0.00",3:"#,##0",4:"#,##0.00",9:"0%",10:"0.00%",11:"0.00E+00",12:"# ?/?",13:"# ??/??",14:"m/d/yy",15:"d-mmm-yy",16:"d-mmm",17:"mmm-yy",18:"h:mm AM/PM",19:"h:mm:ss AM/PM",20:"h:mm",21:"h:mm:ss",22:"m/d/yy h:mm",37:"#,##0 ;(#,##0)",38:"#,##0 ;[Red](#,##0)",39:"#,##0.00;(#,##0.00)",40:"#,##0.00;[Red](#,##0.00)",45:"mm:ss",46:"[h]:mm:ss",47:"mmss.0",48:"##0.0E+0",49:"@",56:'"‰∏äÂçà/‰∏ãÂçà "hh"ÊôÇ"mm"ÂàÜ"ss"Áßí "'},R0={5:37,6:38,7:39,8:40,23:0,24:0,25:0,26:0,27:14,28:14,29:14,30:14,31:14,50:14,51:14,52:14,53:14,54:14,55:14,56:14,57:14,58:14,59:1,60:2,61:3,62:4,67:9,68:10,69:12,70:13,71:14,72:14,73:15,74:16,75:17,76:20,77:21,78:22,79:45,80:46,81:47,82:0},Ii={5:'"$"#,##0_);\\("$"#,##0\\)',63:'"$"#,##0_);\\("$"#,##0\\)',6:'"$"#,##0_);[Red]\\("$"#,##0\\)',64:'"$"#,##0_);[Red]\\("$"#,##0\\)',7:'"$"#,##0.00_);\\("$"#,##0.00\\)',65:'"$"#,##0.00_);\\("$"#,##0.00\\)',8:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',66:'"$"#,##0.00_);[Red]\\("$"#,##0.00\\)',41:'_(* #,##0_);_(* \\(#,##0\\);_(* "-"_);_(@_)',42:'_("$"* #,##0_);_("$"* \\(#,##0\\);_("$"* "-"_);_(@_)',43:'_(* #,##0.00_);_(* \\(#,##0.00\\);_(* "-"??_);_(@_)',44:'_("$"* #,##0.00_);_("$"* \\(#,##0.00\\);_("$"* "-"??_);_(@_)'};function xt(e,a,r){for(var n=e<0?-1:1,t=e*n,s=0,i=1,c=0,f=1,l=0,o=0,h=Math.floor(t);l<a&&(h=Math.floor(t),c=h*i+s,o=h*l+f,!(t-h<5e-8));)t=1/(t-h),s=i,i=c,f=l,l=o;if(o>a&&(l>a?(o=f,c=s):(o=l,c=i)),!r)return[0,n*c,o];var x=Math.floor(n*c/o);return[x,n*c-x*o,o]}function Qr(e,a,r){if(e>2958465||e<0)return null;var n=e|0,t=Math.floor(86400*(e-n)),s=0,i=[],c={D:n,T:t,u:86400*(e-n)-t,y:0,m:0,d:0,H:0,M:0,S:0,q:0};if(Math.abs(c.u)<1e-6&&(c.u=0),a&&a.date1904&&(n+=1462),c.u>.9999&&(c.u=0,++t==86400&&(c.T=t=0,++n,++c.D)),n===60)i=r?[1317,10,29]:[1900,2,29],s=3;else if(n===0)i=r?[1317,8,29]:[1900,1,0],s=6;else{n>60&&--n;var f=new Date(1900,0,1);f.setDate(f.getDate()+n-1),i=[f.getFullYear(),f.getMonth()+1,f.getDate()],s=f.getDay(),n<60&&(s=(s+6)%7),r&&(s=bi(f,i))}return c.y=i[0],c.m=i[1],c.d=i[2],c.S=t%60,t=Math.floor(t/60),c.M=t%60,t=Math.floor(t/60),c.H=t,c.q=s,c}var Nn=new Date(1899,11,31,0,0,0),Ni=Nn.getTime(),Pi=new Date(1900,2,1,0,0,0);function Pn(e,a){var r=e.getTime();return a?r-=1461*24*60*60*1e3:e>=Pi&&(r+=1440*60*1e3),(r-(Ni+(e.getTimezoneOffset()-Nn.getTimezoneOffset())*6e4))/(1440*60*1e3)}function qt(e){return e.indexOf(".")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)$/,"$1")}function Li(e){return e.indexOf("E")==-1?e:e.replace(/(?:\.0*|(\.\d*[1-9])0+)[Ee]/,"$1E").replace(/(E[+-])(\d)$/,"$10$2")}function Mi(e){var a=e<0?12:11,r=qt(e.toFixed(12));return r.length<=a||(r=e.toPrecision(10),r.length<=a)?r:e.toExponential(5)}function Bi(e){var a=qt(e.toFixed(11));return a.length>(e<0?12:11)||a==="0"||a==="-0"?e.toPrecision(6):a}function Va(e){var a=Math.floor(Math.log(Math.abs(e))*Math.LOG10E),r;return a>=-4&&a<=-1?r=e.toPrecision(10+a):Math.abs(a)<=9?r=Mi(e):a===10?r=e.toFixed(10).substr(0,12):r=Bi(e),qt(Li(r.toUpperCase()))}function aa(e,a){switch(typeof e){case"string":return e;case"boolean":return e?"TRUE":"FALSE";case"number":return(e|0)===e?e.toString(10):Va(e);case"undefined":return"";case"object":if(e==null)return"";if(e instanceof Date)return gr(14,Pn(e,a&&a.date1904),a)}throw new Error("unsupported value in General format: "+e)}function bi(e,a){a[0]-=581;var r=e.getDay();return e<60&&(r=(r+6)%7),r}function Ui(e,a,r,n){var t="",s=0,i=0,c=r.y,f,l=0;switch(e){case 98:c=r.y+543;case 121:switch(a.length){case 1:case 2:f=c%100,l=2;break;default:f=c%1e4,l=4;break}break;case 109:switch(a.length){case 1:case 2:f=r.m,l=a.length;break;case 3:return yt[r.m-1][1];case 5:return yt[r.m-1][0];default:return yt[r.m-1][2]}break;case 100:switch(a.length){case 1:case 2:f=r.d,l=a.length;break;case 3:return O0[r.q][0];default:return O0[r.q][1]}break;case 104:switch(a.length){case 1:case 2:f=1+(r.H+11)%12,l=a.length;break;default:throw"bad hour format: "+a}break;case 72:switch(a.length){case 1:case 2:f=r.H,l=a.length;break;default:throw"bad hour format: "+a}break;case 77:switch(a.length){case 1:case 2:f=r.M,l=a.length;break;default:throw"bad minute format: "+a}break;case 115:if(a!="s"&&a!="ss"&&a!=".0"&&a!=".00"&&a!=".000")throw"bad second format: "+a;return r.u===0&&(a=="s"||a=="ss")?wr(r.S,a.length):(n>=2?i=n===3?1e3:100:i=n===1?10:1,s=Math.round(i*(r.S+r.u)),s>=60*i&&(s=0),a==="s"?s===0?"0":""+s/i:(t=wr(s,2+n),a==="ss"?t.substr(0,2):"."+t.substr(2,a.length-1)));case 90:switch(a){case"[h]":case"[hh]":f=r.D*24+r.H;break;case"[m]":case"[mm]":f=(r.D*24+r.H)*60+r.M;break;case"[s]":case"[ss]":f=((r.D*24+r.H)*60+r.M)*60+Math.round(r.S+r.u);break;default:throw"bad abstime format: "+a}l=a.length===3?1:2;break;case 101:f=c,l=1;break}var o=l>0?wr(f,l):"";return o}function $r(e){var a=3;if(e.length<=a)return e;for(var r=e.length%a,n=e.substr(0,r);r!=e.length;r+=a)n+=(n.length>0?",":"")+e.substr(r,a);return n}var Ln=/%/g;function Hi(e,a,r){var n=a.replace(Ln,""),t=a.length-n.length;return Mr(e,n,r*Math.pow(10,2*t))+De("%",t)}function Vi(e,a,r){for(var n=a.length-1;a.charCodeAt(n-1)===44;)--n;return Mr(e,a.substr(0,n),r/Math.pow(10,3*(a.length-n)))}function Mn(e,a){var r,n=e.indexOf("E")-e.indexOf(".")-1;if(e.match(/^#+0.0E\+0$/)){if(a==0)return"0.0E+0";if(a<0)return"-"+Mn(e,-a);var t=e.indexOf(".");t===-1&&(t=e.indexOf("E"));var s=Math.floor(Math.log(a)*Math.LOG10E)%t;if(s<0&&(s+=t),r=(a/Math.pow(10,s)).toPrecision(n+1+(t+s)%t),r.indexOf("e")===-1){var i=Math.floor(Math.log(a)*Math.LOG10E);for(r.indexOf(".")===-1?r=r.charAt(0)+"."+r.substr(1)+"E+"+(i-r.length+s):r+="E+"+(i-s);r.substr(0,2)==="0.";)r=r.charAt(0)+r.substr(2,t)+"."+r.substr(2+t),r=r.replace(/^0+([1-9])/,"$1").replace(/^0+\./,"0.");r=r.replace(/\+-/,"-")}r=r.replace(/^([+-]?)(\d*)\.(\d*)[Ee]/,function(c,f,l,o){return f+l+o.substr(0,(t+s)%t)+"."+o.substr(s)+"E"})}else r=a.toExponential(n);return e.match(/E\+00$/)&&r.match(/e[+-]\d$/)&&(r=r.substr(0,r.length-1)+"0"+r.charAt(r.length-1)),e.match(/E\-/)&&r.match(/e\+/)&&(r=r.replace(/e\+/,"e")),r.replace("e","E")}var Bn=/# (\?+)( ?)\/( ?)(\d+)/;function Wi(e,a,r){var n=parseInt(e[4],10),t=Math.round(a*n),s=Math.floor(t/n),i=t-s*n,c=n;return r+(s===0?"":""+s)+" "+(i===0?De(" ",e[1].length+1+e[4].length):Zt(i,e[1].length)+e[2]+"/"+e[3]+wr(c,e[4].length))}function Gi(e,a,r){return r+(a===0?"":""+a)+De(" ",e[1].length+2+e[4].length)}var bn=/^#*0*\.([0#]+)/,Un=/\).*[0#]/,Hn=/\(###\) ###\\?-####/;function ar(e){for(var a="",r,n=0;n!=e.length;++n)switch(r=e.charCodeAt(n)){case 35:break;case 63:a+=" ";break;case 48:a+="0";break;default:a+=String.fromCharCode(r)}return a}function I0(e,a){var r=Math.pow(10,a);return""+Math.round(e*r)/r}function N0(e,a){var r=e-Math.floor(e),n=Math.pow(10,a);return a<(""+Math.round(r*n)).length?0:Math.round(r*n)}function Xi(e,a){return a<(""+Math.round((e-Math.floor(e))*Math.pow(10,a))).length?1:0}function $i(e){return e<2147483647&&e>-2147483648?""+(e>=0?e|0:e-1|0):""+Math.floor(e)}function vr(e,a,r){if(e.charCodeAt(0)===40&&!a.match(Un)){var n=a.replace(/\( */,"").replace(/ \)/,"").replace(/\)/,"");return r>=0?vr("n",n,r):"("+vr("n",n,-r)+")"}if(a.charCodeAt(a.length-1)===44)return Vi(e,a,r);if(a.indexOf("%")!==-1)return Hi(e,a,r);if(a.indexOf("E")!==-1)return Mn(a,r);if(a.charCodeAt(0)===36)return"$"+vr(e,a.substr(a.charAt(1)==" "?2:1),r);var t,s,i,c,f=Math.abs(r),l=r<0?"-":"";if(a.match(/^00+$/))return l+ha(f,a.length);if(a.match(/^[#?]+$/))return t=ha(r,0),t==="0"&&(t=""),t.length>a.length?t:ar(a.substr(0,a.length-t.length))+t;if(s=a.match(Bn))return Wi(s,f,l);if(a.match(/^#+0+$/))return l+ha(f,a.length-a.indexOf("0"));if(s=a.match(bn))return t=I0(r,s[1].length).replace(/^([^\.]+)$/,"$1."+ar(s[1])).replace(/\.$/,"."+ar(s[1])).replace(/\.(\d*)$/,function(v,u){return"."+u+De("0",ar(s[1]).length-u.length)}),a.indexOf("0.")!==-1?t:t.replace(/^0\./,".");if(a=a.replace(/^#+([0.])/,"$1"),s=a.match(/^(0*)\.(#*)$/))return l+I0(f,s[2].length).replace(/\.(\d*[1-9])0*$/,".$1").replace(/^(-?\d*)$/,"$1.").replace(/^0\./,s[1].length?"0.":".");if(s=a.match(/^#{1,3},##0(\.?)$/))return l+$r(ha(f,0));if(s=a.match(/^#,##0\.([#0]*0)$/))return r<0?"-"+vr(e,a,-r):$r(""+(Math.floor(r)+Xi(r,s[1].length)))+"."+wr(N0(r,s[1].length),s[1].length);if(s=a.match(/^#,#*,#0/))return vr(e,a.replace(/^#,#*,/,""),r);if(s=a.match(/^([0#]+)(\\?-([0#]+))+$/))return t=da(vr(e,a.replace(/[\\-]/g,""),r)),i=0,da(da(a.replace(/\\/g,"")).replace(/[0#]/g,function(v){return i<t.length?t.charAt(i++):v==="0"?"0":""}));if(a.match(Hn))return t=vr(e,"##########",r),"("+t.substr(0,3)+") "+t.substr(3,3)+"-"+t.substr(6);var o="";if(s=a.match(/^([#0?]+)( ?)\/( ?)([#0?]+)/))return i=Math.min(s[4].length,7),c=xt(f,Math.pow(10,i)-1,!1),t=""+l,o=Mr("n",s[1],c[1]),o.charAt(o.length-1)==" "&&(o=o.substr(0,o.length-1)+"0"),t+=o+s[2]+"/"+s[3],o=ht(c[2],i),o.length<s[4].length&&(o=ar(s[4].substr(s[4].length-o.length))+o),t+=o,t;if(s=a.match(/^# ([#0?]+)( ?)\/( ?)([#0?]+)/))return i=Math.min(Math.max(s[1].length,s[4].length),7),c=xt(f,Math.pow(10,i)-1,!0),l+(c[0]||(c[1]?"":"0"))+" "+(c[1]?Zt(c[1],i)+s[2]+"/"+s[3]+ht(c[2],i):De(" ",2*i+1+s[2].length+s[3].length));if(s=a.match(/^[#0?]+$/))return t=ha(r,0),a.length<=t.length?t:ar(a.substr(0,a.length-t.length))+t;if(s=a.match(/^([#0?]+)\.([#0]+)$/)){t=""+r.toFixed(Math.min(s[2].length,10)).replace(/([^0])0+$/,"$1"),i=t.indexOf(".");var h=a.indexOf(".")-i,x=a.length-t.length-h;return ar(a.substr(0,h)+t+a.substr(a.length-x))}if(s=a.match(/^00,000\.([#0]*0)$/))return i=N0(r,s[1].length),r<0?"-"+v◊Mt”€hëÈÏ∂ªßq´^tõ‹äï[ú›\‹ùYïSPëTî»Hö[HäNõô]»\úõ‹äï[ú›\‹ùYíTö[HäN›ò\àèXå
JK[ôääKñ–€€ù[ù’\\◊Kû[äJKœHLKKŒ⁄Yäù€‹öÿõ€⁄‹Àõ[ô›OOL	âäœHû›€‹öÿõ€⁄Àû[ãYJKÀL
Iâùù€‹öÿõ€⁄‹Àú\⁄
 JKù€‹öÿõ€⁄‹Àõ[ô›OOL
^⁄YäœHû›€‹öÿõ€⁄Àòö[àãSYJKÀL
J]õ›»ô]»\úõ‹äê€›[õ›ö[ô€‹öÿõ€⁄»äN›ù€‹öÿõ€⁄‹Àú\⁄
 KœHL]ù€‹öÿõ€⁄‹÷ÃKú€XŸJL OOHòö[àââäœHL
N›ò\àè^ﬂK^ﬂN⁄YäXKòõ€⁄‘⁄Y]…âàXKòõ€⁄‘õ‹ ^⁄YäòOV◊Kú‹›
]û^–òOU
YJKäú‹›
JKú‹›J_Xÿ]⁄
ôJ^⁄YäKï’ä]õ›»ô_XKòŸ[›[\…âùù[Y\Àõ[ô›	âäèQ^
äKù[Y\÷ÃKúô\XŸJ◊óÀÀàäKL
_àãù[Y\÷ÃKJJKú›[IâäWﬁ
YJKäú›[JJKú›[KãJJ_]õ[ö‹ÀõX\
ù[ò›[€äôJ^›û^›ò\àôOTJäK
äôJJJKôJN‹ô]\õà^
YJKäôJJKôKôKJ_Xÿ]⁄ﬂ_JN›ò\àœY
YJKäù€‹öÿõ€⁄‹÷ÃJJKù€‹öÿõ€⁄‹÷ÃKJK^ﬂKHàé›ò€‹ô\õ‹Àõ[ô›	âäSYJKäò€‹ô\õ‹÷ÃJKL
K	âä[\ 
JKô^õ‹Àõ[ô›OOL	âäSYJKäô^õ‹÷ÃJKL
K	âõäJJJN›ò\à^ﬂN XKòõ€⁄‘⁄Y]ﬂKòõ€⁄‘õ‹ Iâùò›\›õ‹Àõ[ô›OOL	âä[äKäò›\›õ‹÷ÃJKL
K	âä]YäJJJN›ò\àè^ﬂN⁄Yä
Kòõ€⁄‘⁄Y]ﬂKòõ€⁄‘õ‹ IâäÀî⁄Y]œ⁄O[Àî⁄Y]ÀõX\
ù[ò›[€äôJ^‹ô]\õàôKõò[Y_JNöï€‹ö‹⁄Y]…âöî⁄Y]ò[Y\Àõ[ô›å	âäOZî⁄Y]ò[Y\ KKòõ€⁄‘õ‹…âäãîõ‹œZãê›\›õ‹œY
KKòõ€⁄‘⁄Y]…âù\[ŸàOùHââäãî⁄Y]ò[Y\œZJKKòõ€⁄‘⁄Y]œ›ãî⁄Y]ò[Y\ŒòKòõ€⁄‘õ‹ J\ô]\õàé⁄O^ﬂN›ò\àO^ﬂNÿKòõ€⁄—\…âùòÿ[ÿ⁄Z[ââäO]ﬁ
YJKäòÿ[ÿ⁄Z[äJKòÿ[ÿ⁄Z[äJN›ò\àœLœ^ﬂKKŒﬁ›ò\àè[Àî⁄Y]Œ⁄ï€‹ö‹⁄Y]œSãõ[ô›î⁄Y]ò[Y\œV◊NŸõ‹äò\àèLÿàOSãõ[ô›  ÿäZî⁄Y]ò[Y\÷ÿóOSñÿóKõò[Y_]ò\àO\œ»òö[àéàû[ãO]ù€‹öÿõ€⁄‹÷ÃKõ\›[ô^Ÿäã»äKèJù€‹öÿõ€⁄‹÷ÃKú€XŸJJÃJJ»ó‹ô[À»ä›ù€‹öÿõ€⁄‹÷ÃKú€XŸJJÃJJ»ãúô[»äKúô\XŸJ◊óÀÀàäN‹äKä_
èHû◊‹ô[À›€‹öÿõ€⁄Ààä“J»ãúô[»äN›ò\àTJäKãL
Kãúô\XŸJ◊‹ô[ÀäãÀúÕ\»äJN õY]Y]_◊JKõ[ô›èLIâäKûY]OQû
YJKäõY]Y]VÃJJKõY]Y]VÃKJJK
ú[‹_◊JKõ[ô›èLIâäKú[‹OYÃJYJKäú[‹VÃJJKJJK	âäYô
Àî⁄Y] JN›ò\àèSYJKû›€‹ö‹⁄Y]À‹⁄Y]û[ãL
OÃNåŸNôõ‹äœLŸ»OZï€‹ö‹⁄Y]Œ  Ÿ ^›ò\àœHú⁄Y]é⁄Yä	âëŸ◊O OHû»ä—Ÿ◊VÃWKúô\XŸJ÷◊◊OﬁÀÀàäKäKJ_
OQŸ◊VÃWJKäKJ_
OUãúô\XŸJ◊‹ô[◊ÀäâÀàäJ—Ÿ◊VÃWJKœQŸ◊VÃóJNäOHû›€‹ö‹⁄Y]À‹⁄Y]ä  ÃK^äJ»ãàä“KO^Kúô\XŸJ‹⁄Y]ãÀú⁄Y]àäJKœ^Kúô\XŸJ◊äääJ J◊ó◊JäIÀâK◊‹ô[À…Àúô[»äKIâòKú⁄Y]»O[ù[
\›⁄]⁄
\[ŸàKú⁄Y] ^ÿÿ\ŸHõù[Xô\àéöYä»OXKú⁄Y] X€€ù[ùYHNÿúôXZŒÿÿ\ŸHú›ö[ô»éöYäî⁄Y]ò[Y\÷Ÿ◊Kù”›Ÿ\êÿ\ŸJ
HOXKú⁄Y]Àù”›Ÿ\êÿ\ŸJ
JX€€ù[ùYHNÿúôXZŒŸYò][öYä\úò^Kö\–\úò^Iâê\úò^Kö\–\úò^JKú⁄Y] J^Ÿõ‹äò\àHLKèL“àOXKú⁄Y]Àõ[ô›  “ä]\[ŸàKú⁄Y]÷“óOOHõù[Xô\àââòKú⁄Y]÷“óOOY…âäLJK\[ŸàKú⁄Y]÷“óOOHú›ö[ô»ââòKú⁄Y]÷“óKù”›Ÿ\êÿ\ŸJ
OOZî⁄Y]ò[Y\÷Ÿ◊Kù”›Ÿ\êÿ\ŸJ
IâäLJN⁄YäT
X€€ù[ùYH__[Ÿ
KKÀî⁄Y]ò[Y\÷Ÿ◊KÀÀKÀKÀã
_\ô]\õàè^—\ôX›‹ûNù€‹öÿõ€⁄ŒõÀõ‹Œö›\›õ‹Œô\ŒùK⁄Y]ŒöK⁄Y]ò[Y\Œöî⁄Y]ò[Y\À›ö[ô‹ŒêòK›[\Œõ[Y\Œôã‘—éâJJ_KIâòKòõ€⁄—ö[\…âäKôö[\œ ãöŸ^\œ[ããôö[\œYKôö[\ NäãöŸ^\œV◊Kãôö[\œ^ﬂKKëù[]Àôõ‹ëXX⁄
ù[ò›[€äôKôJ^ŸôOYôKúô\XŸJ◊îõ€›[ùûV◊◊KÀàäKãöŸ^\Àú\⁄
ôJKãôö[\÷ŸôWOYKëö[R[ô^‹ôW_JJJKIâòKòõ€⁄’êêIâäùòòKõ[ô›å›ãùòò\ò]œSYJKäùòòVÃJKL
NùôYò][…âùôYò][Àòö[èOOUIâäãùòò\ò]œSYJKû›òòTõ⁄ôX›òö[àãL
JJKüYù[ò›[€à
KJ^›ò\àèX_ﬂKèHï€‹öÿõ€⁄»ã[YKôö[ô
KäN›û^⁄YäèHã»Q]T‹XŸ\À’ô\ú⁄[€àã[YKôö[ô
KäK]]ò€€ù[ù
]õ›»ô]»\úõ‹äëP”PKLÕÕà[ò‹û\Yö[HZ\‹⁄[ô»ä€äN⁄Yä
ò€€ù[ù
KèHã»Q]T‹XŸ\À—]T‹XŸSX\ã[YKôö[ô
KäK]]ò€€ù[ù
]õ›»ô]»\úõ‹äëP”PKLÕÕà[ò‹û\Yö[HZ\‹⁄[ô»ä€äN›ò\àœ\€
ò€€ù[ù
N⁄YäÀõ[ô›OOL_÷ÃKò€€\Àõ[ô›OOL_÷ÃKò€€\÷ÃKùOOL÷ÃKõò[YHOOHî›õ€ô—[ò‹û\[€ë]T‹XŸHü÷ÃKò€€\÷ÃKùàOOHë[ò‹û\YX⁄ÿYŸHä]õ›»ô]»\úõ‹äëP”PKLÕÕà[ò‹û\Yö[HòYä€äN⁄YäèHã»Q]T‹XŸ\À—]T‹XŸR[ôõÀ‘›õ€ô—[ò‹û\[€ë]T‹XŸHã[YKôö[ô
KäK]]ò€€ù[ù
]õ›»ô]»\úõ‹äëP”PKLÕÕà[ò‹û\Yö[HZ\‹⁄[ô»ä€äN›ò\àOZ[
ò€€ù[ù
N⁄YäKõ[ô›OL_VÃHOHî›õ€ô—[ò‹û\[€ïò[úŸõ‹õHä]õ›»ô]»\úõ‹äëP”PKLÕÕà[ò‹û\Yö[HòYä€äN⁄YäèHã»Q]T‹XŸ\À’ò[úŸõ‹õR[ôõÀ‘›õ€ô—[ò‹û\[€ïò[úŸõ‹õK»Tö[X\ûHã[YKôö[ô
KäK]]ò€€ù[ù
]õ›»ô]»\úõ‹äëP”PKLÕÕà[ò‹û\Yö[HZ\‹⁄[ô»ä€äNŸõ
ò€€ù[ù
_Xÿ]⁄ﬂZYäèHã—[ò‹û\[€í[ôõ»ã[YKôö[ô
KäK]]ò€€ù[ù
]õ›»ô]»\úõ‹äëP”PKLÕÕà[ò‹û\Yö[HZ\‹⁄[ô»ä€äN›ò\àœ[€
ò€€ù[ù
N⁄YäèHã—[ò‹û\YX⁄ÿYŸHã[YKôö[ô
KäK]]ò€€ù[ù
]õ›»ô]»\úõ‹äëP”PKLÕÕà[ò‹û\Yö[HZ\‹⁄[ô»ä€äN⁄Yä÷ÃOOM	âù\[ŸàX‹û\ÿY⁄[OùHä\ô]\õàX‹û\ÿY⁄[J÷ÃWKò€€ù[ùãú\‹›€‹ôàãäN⁄Yä÷ÃOOLââù\[ŸàX‹û\‹›ÕèùHä\ô]\õàX‹û\‹›Õä÷ÃWKò€€ù[ùãú\‹›€‹ôàãäN›õ›»ô]»\úõ‹äëö[H\»\‹›€‹ô\õ›X›Yä_Yù[ò›[€àL
KJ^›ò\àèHàé‹›⁄]⁄

_ﬂJKù\_òò\ŸMçä^ÿÿ\ŸHòùYôô\àéúô]\õñŸVÃKVÃWKVÃóKVÃ◊KVÕKVÕWKVÕóKVÕ◊WNÿÿ\ŸHòò\ŸMçéúèZäKú€XŸJLäJNÿúôXZŒÿÿ\ŸHòö[ò\ûHéúèYNÿúôXZŒÿÿ\ŸHò\úò^Héúô]\õñŸVÃKVÃWKVÃóKVÃ◊KVÕKVÕWKVÕóKVÕ◊WNŸYò][ùõ›»ô]»\úõ‹äï[úôX€Ÿ€ö^ôY\Hä IâòKù\_ù[ôYö[ôYäJ_\ô]\õñ‹ãò⁄\ê€ŸP]

Kãò⁄\ê€ŸP]
JKãò⁄\ê€ŸP]
äKãò⁄\ê€ŸP]
 Kãò⁄\ê€ŸP]

Kãò⁄\ê€ŸP]
JKãò⁄\ê€ŸP]
äKãò⁄\ê€ŸP]
 W_Yù[ò›[€àY
KJ^‹ô]\õàYKôö[ô
Kë[ò‹û\YX⁄ÿYŸHäO⁄
KJNòZJKJ_Yù[ò›[€à
KJ^›ò\àãèYKX_ﬂN‹ô]\õàù\_
ù\OYŸIâêùYôô\ãö\–ùYôô\äJO»òùYôô\àéàòò\ŸMçäKèZõäã
K
ã
_Yù[ò›[€àZJKJ^›ò\àèLŸNôõ‹ä‹èKõ[ô› \›⁄]⁄
Kò⁄\ê€ŸP]
äJ^ÿÿ\ŸHLòÿ\ŸHLŒòÿ\ŸHÃéä ‹éÿúôXZŒÿÿ\ŸHåúô]\õà›
Kú€XŸJäKJNŸYò][òúôXZ»_\ô]\õàKù◊›€‹öÿõ€⁄ KJ_Yù[ò›[€à
KJ^›ò\àèHàãè[L
KJN‹›⁄]⁄
Kù\J^ÿÿ\ŸHòò\ŸMçéúèZäJNÿúôXZŒÿÿ\ŸHòö[ò\ûHéúèYNÿúôXZŒÿÿ\ŸHòùYôô\àéúèYKù‘›ö[ô òö[ò\ûHäNÿúôXZŒÿÿ\ŸHò\úò^Héúè]JJNÿúôXZŒŸYò][ùõ›»ô]»\úõ‹äï[úôX€Ÿ€ö^ôY\HäÿKù\J_\ô]\õàñÃOOLåŒIâõñÃWOOLN…âõñÃóOOLNLIâäèPYJäJKKù\OHòö[ò\ûHãZJãJ_Yù[ò›[€àô
KJ^›ò\àèYN‹ô]\õàKù\OOHòò\ŸMçââäèZääJKèRKù][ÀôX€ŸJLåãú€XŸJäKú›àäKKù\OHòö[ò\ûHãZJãJ_Yù[ò›[€à
J^‹ô]\õàKõX]⁄
÷◊óW—óK O”ÿJJNô_Yù[ò›[€àù
KKãä^‹ô]\õàè ãù\OHú›ö[ô»ãKù◊›€‹öÿõ€⁄ KäJNñKù◊›€‹öÿõ€⁄ Kä_Yù[ò›[€à[äKJ^‘õä
N›ò\àèX_ﬂN⁄Yä\[Ÿà\úò^PùYôô\èùHââôH[ú›[òŸ[Ÿà\úò^PùYôô\ä\ô]\õà[äô]»Z[ù\úò^JJK
èIJäKãù\OHò\úò^HãäJN›\[ŸàZ[ù\úò^OùHââôH[ú›[òŸ[ŸàZ[ù\úò^Iâà\ãù\Iâäãù\O]\[Ÿà[õœùHè»òùYôô\àéàò\úò^HäN›ò\àèYKVÃKœHLN⁄YäãòŸ[›[\…âäãòŸ[ëèHLãú⁄Y]›XúœHL
KO^ﬂKãô]SëââäKô]Sëè\ãô]SëäKãù\_
ãù\OYŸIâêùYôô\ãö\–ùYôô\äJO»òùYôô\àéàòò\ŸMçäKãù\OOHôö[Hââäãù\OYŸO»òùYôô\àéàòö[ò\ûHãè\ò JK\[ŸàZ[ù\úò^OùHââàYŸIâäãù\OHò\úò^HäJKãù\OOHú›ö[ô»ââäœHLãù\OHòö[ò\ûHããò€Ÿ\YŸOMçLKè\
JJKãù\OOHò\úò^Hââù\[ŸàZ[ù\úò^OùHââôH[ú›[òŸ[ŸàZ[ù\úò^Iâù\[Ÿà\úò^PùYôô\èùHä^›ò\àO[ô]»\úò^PùYôô\ä Kœ[ô]»Z[ù\úò^JJN⁄YäÀôõ€œHòò\àãXÀôõ€ \ô]\õàèIJäKãù\OHò\úò^Hã[äù
äKä_\›⁄]⁄

[L
ãäJVÃJ^ÿÿ\ŸHåöYäÃWOOOLå…âùÃóOOOLM…âùÃ◊OOOLåç	âùÕOOOLMåIâùÕWOOOLMÕ…âùÕóOOOLçââùÕ◊OOOLåçJ\ô]\õàY
YKúôXY
ãäKäNÿúôXZŒÿÿ\ŸHNöYäÃWON
\ô]\õàZJãäNÿúôXZŒÿÿ\ŸHåúô]\õà›
ãäNÿÿ\ŸHÃŒöYäÃWOOOMÃ…âùÃóOOOMââùÃ◊OOOL
]õ›»ô]»\úõ‹äïQëà[XYŸHö[H\»õ›H‹ôXY⁄Y]äN⁄YäÃWOOOMé
\ô]\õà ãäNÿúôXZŒÿÿ\ŸHöYäÃWOOOMçIâùÃóOOOMçââùÃ◊OOOMÕä\ô]\õà€Àù◊›€‹öÿõ€⁄ ãäNÿúôXZŒÿÿ\ŸHúô]\õàÃWOOOMÕIâùÃóOIâùÃ◊OOﬁ
ãäNêù
Kãã Nÿÿ\ŸHåŒNúô]\õàÃ◊OOOMå—›
ãäNêù
Kãã Nÿÿ\ŸHçMNöYäÃWOOOLçM
\ô]\õàô
ãäN⁄YäÃWOOOL	âùÃóOOOLââùÃ◊OOOL
\ô]\õàXKù◊›€‹öÿõ€⁄ ãäNÿúôXZŒÿÿ\ŸHöYäÃWOOOL	âäÃóOèLââùÃ◊OOOLÃóOOOL	âäÃ◊OOONÃ◊OOONJJJ\ô]\õàXKù◊›€‹öÿõ€⁄ ãäNÿúôXZŒÿÿ\ŸHŒòÿ\ŸHLÃNòÿ\ŸHLŒNòÿ\ŸHMúô]\õàãù◊›€‹öÿõ€⁄ ãäNÿÿ\ŸHLåŒöYäÃWOOONLââùÃóOOOLLM	âùÃ◊OOOLLMä\ô]\õàù◊›€‹öÿõ€⁄ ãäNÿúôXZŒÿÿ\ŸHLòÿ\ŸHLŒòÿ\ŸHÃéúô]\õà
ãäNÿÿ\ŸHLÕŒöYäÃWOOON	âùÃóOOOMŒ	âùÃ◊OOOMÃJ]õ›»ô]»\úõ‹äîë»[XYŸHö[H\»õ›H‹ôXY⁄Y]äNÿúôXZﬂ\ô]\õàÀö[ô^ŸäÃJOãLIâùÃóOLLââùÃ◊OLÃO⁄ãù◊›€‹öÿõ€⁄ ãäNêù
Kãã _Yù[ò›[€àŸ
KKããÀK ^›ò\àè^ôJäKXÀôYùò[œXÀúò]ﬂSÿöôX›úõ››\Kö\”›€îõ‹\ùKòÿ[
Àúò]»äKHL]OOLO÷◊NûﬂN⁄YäOOLJZYäÿöôX›ôYö[ôTõ‹\ùJ]û^”ÿöôX›ôYö[ôTõ‹\ùJó◊‹õ›”ù[W◊»ã›ò[YNúã[ù[Y\òXõNàL_J_Xÿ]⁄ﬁó◊‹õ›”ù[W◊œ\üY[ŸHó◊‹õ›”ù[W◊œ\é⁄YäZ_V‹óJYõ‹äò\àXKúÀòŒŸXKôKòŒ  Ÿ
^›ò\àèZOŸV‹óVŸNôV€ñŸJŸóN⁄YäèOO]õ⁄YãùOO]õ⁄Y
^⁄YäOO]õ⁄Y
X€€ù[ùYN‹÷ŸHO[ù[	âä‹÷ŸWO[
Nÿ€€ù[ùY_]ò\àO]ãùé‹›⁄]⁄
ãù
^ÿÿ\ŸHûàéöYäOO[ù[
XúôXZŒÿ€€ù[ùYNÿÿ\ŸHôHéùO]OOL€ù[ùõ⁄YÿúôXZŒÿÿ\ŸHú»éòÿ\ŸHôéòÿ\ŸHòàéòÿ\ŸHõàéòúôXZŒŸYò][ùõ›»ô]»\úõ‹äù[úôX€Ÿ€ö^ôY\Hä›ãù
_ZYä÷ŸHO[ù[
^⁄YäOO[ù[
ZYäãùOHôHââùOOO[ù[
^‹÷ŸWO[ù[Ÿ[ŸHYäOO]õ⁄Y
^‹÷ŸWO[Ÿ[ŸHYä…âùOOO[ù[
^‹÷ŸWO[ù[Ÿ[ŸH€€ù[ùYNŸ[ŸH‹÷ŸWO[…âäãùOOHõàüãùOOHõàââòÀúò]”ù[Xô\ú»OOHLJO›NòúäãK N›HO[ù[	âäHLJ__\ô]\õû‹õ›Œû\Ÿ[\Nö_Yù[ò›[€à›
KJ^⁄YäOO[ù[V»à\ôYàóOO[ù[
\ô]\õñ◊N›ò\àè^›àõàãéåKèLLKœV◊KOLœHàãè^‹Œû‹éåŒåKNû‹éåŒå_KX_ﬂKœ[úò[ôŸHO[ù[€úò[ôŸNôV»à\ôYàóN‹›⁄]⁄
öXY\èOOLO€èLNõöXY\èOOHêHè€èLéê\úò^Kö\–\úò^JöXY\äO€èLŒõöXY\èO[ù[	âäèL
K\[Ÿà ^ÿÿ\ŸHú›ö[ô»éôèSŸJ NÿúôXZŒÿÿ\ŸHõù[Xô\àéôèSŸJV»à\ôYàóJKãúÀúè[ŒÿúôXZŒŸYò][ôè[ﬂ[èå	âäL
N›ò\à^ôJãúÀúäKV◊KV◊KèLOLœP\úò^Kö\–\úò^JJKœYãúÀúãOLœ^ﬂNŸ…âàYV‘◊IâäV‘◊OV◊JN›ò\àè[ú⁄⁄\Y[ââôV»àX€€»ó_◊Kè[ú⁄⁄\Y[ââôV»à\õ›‹»ó_◊NŸõ‹äOYãúÀòŒﬁOYãôKòŒ  ﬁJZYäJñﬁW_ﬂJKöY[ä\›⁄]⁄
ﬁWORJJKèYœŸV‘◊VﬁWNôVﬁﬁWJ⁄Kä^ÿÿ\ŸHNú÷ﬁWO^KYãúÀòŒÿúôXZŒÿÿ\ŸHéú÷ﬁWO^ﬁWNÿúôXZŒÿÿ\ŸHŒú÷ﬁWO[öXY\ñﬁKYãúÀò◊NÿúôXZŒŸYò][öYäèO[ù[	âäè^›Œàó◊—STHãàú»üJKœZOXúäãù[
KOW÷⁄W_]JW÷⁄WOLNŸ[Ÿ^Ÿ»œZJ»ó»ä›J Œ›⁄[J÷ÿ◊JN◊÷⁄WO]K÷ÿ◊OL_\÷ﬁWOXﬂYõ‹äœYãúÀúä›‘œYãôKúé  ‘ ZYäJñ‘◊_ﬂJKöY[ä^›ò\àOYŸ
KãÀãÀÀ
N Kö\Ÿ[\OOOHL_
èOOLO€òõ[ö‹õ›‹»OOHLNõòõ[ö‹õ›‹ JIâä›ä ◊ORKúõ› _\ô]\õàõ[ô›]ã]ò\àèK»ãŸŒŸù[ò›[€àY
KKããÀK ^Ÿõ‹äò\àèHLV◊KœHàã^ôJäKXKúÀòŒﬁXKôKòŒ  ﬁ
ZYäñﬁJ^›ò\àXÀô[úŸO V‹ó_◊JVﬁNôV€ñﬁJ⁄N⁄YäO[ù[
[œHàéŸ[ŸHYäùàO[ù[
^ŸèHLKœHàä Àúò]”ù[Xô\ú…âôùOHõàèŸùéòúäù[ JNŸõ‹äò\àèLOL›àOO[Àõ[ô›  ›äZYä
O[Àò⁄\ê€ŸP]
äJOOO]OOO\ﬂOOOLÕÀôõ‹òŸT][›\ ^€œI»â €Àúô\XŸJã	»àâ J…»âŒÿúôXZﬂ[œOHíQââäœI»íQâ _Y[ŸHôàO[ù[	âàYëè èHLKœHèHäŸôãÀö[ô^ŸäãäOèL	âäœI»â €Àúô\XŸJã	»àâ J…»â JNõœHàé€ú\⁄
 _\ô]\õàÀòõ[ö‹õ›‹œOOHLIâôè€ù[õöõ⁄[äJ_Yù[ò›[€à⁄JKJ^›ò\àèV◊KèXOœﬁﬂN⁄YäOO[ù[V»à\ôYàóOO[ù[
\ô]\õààé›ò\àSŸJV»à\ôYàóJKœ[ãëî»OO]õ⁄Y€ãëîŒàããO\Àò⁄\ê€ŸP]

Kœ[ãîî»OO]õ⁄Y€ãîîŒòòèXÀò⁄\ê€ŸP]

K[ô]»ôY—^

œOHüè»óéú J»ä…äKœHàãV◊N€ãô[úŸOP\úò^Kö\–\úò^JJNŸõ‹äò\à[ãú⁄⁄\Y[ââôV»àX€€»ó_◊K[ãú⁄⁄\Y[ââôV»à\õ›‹»ó_◊Kè]úÀòŒ›è]ôKòŒ  ›äJ›ó_ﬂJKöY[ü
›óORJäJNŸõ‹äò\àOLœ]úÀúéŸœ]ôKúé  Ÿ JŸ◊_ﬂJKöY[ü
œ[Y
KÀKãÀäK»O[ù[	âäãú›ö\	âäœ[Àúô\XŸJàäJK
ﬂãòõ[ö‹õ›‹»OOHLJIâúãú\⁄

J œÿŒààäJ€ JJN‹ô]\õà[]Hãô[úŸKãöõ⁄[äàä_Yù[ò›[€àŸ
KJ^ÿ_
O^ﬂJKKëîœHÇHãKîîœXò›ò\àèX⁄JKJN‹ô]\õàüYù[ò›[€àY
J^›ò\àOHàããèHàé⁄YäOO[ù[V»à\ôYàóOO[ù[
\ô]\õñ◊N›ò\àSŸJV»à\ôYàóJKœHàãOV◊KÀèV◊KP\úò^Kö\–\úò^JJNŸõ‹äœ]úÀòŒÿœ]ôKòŒ  ÿ ZVÿ◊ORJ NŸõ‹äò\àœ]úÀúé€œ]ôKúé  € Yõ‹äœ^ôJ Kœ]úÀòŒÿœ]ôKòŒ  ÿ ZYäOZVÿ◊J‹Àè[ V€◊_◊JVÿ◊NôVÿWKèHàãàOO]õ⁄Y
^⁄YäãëàO[ù[
^⁄YäO\ãëã\ãôäX€€ù[ùYN€è\ãôãKö[ô^ŸäéàäOOKLIâäOXJ»éàäÿJ_ZYäãôàO[ù[
[è\ãôéŸ[Ÿ^⁄YäãùOHûàäX€€ù[ùYN⁄YäãùOHõàââúãùàO[ù[
[èHàä‹ãùéŸ[ŸHYäãùOHòàä[è\ãùè»ïïQHéàëêS—HéŸ[ŸHYäãù»OO]õ⁄Y
[èHâ»ä‹ãùŒŸ[Ÿ^⁄YäãùèOO]õ⁄Y
X€€ù[ùYN‹ãùOHú»è€èHâ»ä‹ãùéõèHàä‹ãùü_YñŸãõ[ô›OXJ»èHä€ü\ô]\õàüYù[ò›[€àöJKKä^›ò\àè\üﬂKJ»[ãú⁄⁄\XY\ãœY_ﬂKOLœL⁄Yä…âõãõ‹öY⁄[àO[ù[
ZYä\[Ÿàãõ‹öY⁄[èOHõù[Xô\àäZO[ãõ‹öY⁄[éŸ[Ÿ^›ò\àè]\[Ÿàãõ‹öY⁄[èOHú›ö[ô»è€úäãõ‹öY⁄[äNõãõ‹öY⁄[é⁄OYãúãœYãòﬂ]ò\àœ^‹ŒûÿŒåéåKNûÿÀéöJÿKõ[ô›LJ›_N⁄Yä÷»à\ôYàóJ^›ò\àSŸJ÷»à\ôYàóJN€ÀôKòœSX]õX^
ÀôKòÀôKò KÀôKúèSX]õX^
ÀôKúãôKúäKOOKLIâäOZôKúäÃKÀôKúèZJÿKõ[ô›LJ›
_Y[ŸHOOKLIâäOLÀôKúèXKõ[ô›LJ›
N›ò\à[ãöXY\ü◊KLÿKôõ‹ëXX⁄
ù[ò›[€äK ^—äJKôõ‹ëXX⁄
ù[ò›[€ä ^ ^ö[ô^Ÿä JOOKLIâäŸ^õ[ô›OT N›ò\àO]V‘◊KœHûàãèHàãè]YJÿŒò ŸéöJŸ ›JN€VXJÀäKIâù\[ŸàOOHõÿöôX›ââàJH[ú›[òŸ[Ÿà]JO‹÷ÿóO^Nä\[ŸàOOHõù[Xô\àè◊œHõàéù\[ŸàOOHòõ€€X[àè◊œHòàéù\[ŸàOOHú›ö[ô»è◊œHú»éûH[ú›[òŸ[Ÿà]O œHôããòŸ[]\ﬂ
œHõàãOZ\äJJKè[ãô]SëüVÃMJNûOOO[ù[	âõãõù[\úõ‹ââäœHôHãOL
K ùWÀùè^K[]HùÀ[]HîãââäûèSäJNú÷ÿóO[^›óÀéû_KââäûèSäJ_J_JKÀôKòœSX]õX^
ÀôKòÀ ﬁõ[ô›LJN›ò\àè^ôJJN⁄Yä
Yõ‹äLŸõ[ô›  Ÿ
\÷“J
ÿ J›óO^›àú»ãéûŸ_N‹ô]\õà÷»à\ôYàóOWŸJ KﬂYù[ò›[€à
KJ^‹ô]\õàöJù[KJ_Yù[ò›[€àXJKKä^⁄Yä\[ŸàOOHú›ö[ô»ä^⁄Yä\úò^Kö\–\úò^JJJ^›ò\àè[úäJN‹ô]\õàV€ãúó_
V€ãúóOV◊JKV€ãúóV€ãò◊_
V€ãúóV€ãò◊O^›àûàüJ_\ô]\õàVÿW_
VÿWO^›àûàüJ_\ô]\õà\[ŸàHOHõù[Xô\àè÷XJKYJJJNñXJKYJ‹éòKŒúüJJ_Yù[ò›[€àŸ
KJ^⁄Yä\[ŸàOOHõù[Xô\àä^⁄YäOèL	âôKî⁄Y]ò[Y\Àõ[ô›òJ\ô]\õàN›õ›»ô]»\úõ‹äêÿ[õõ›ö[ô⁄Y]»äÿJ_Y[ŸHYä\[ŸàOOHú›ö[ô»ä^›ò\àèYKî⁄Y]ò[Y\Àö[ô^ŸäJN⁄YäèãLJ\ô]\õàé›õ›»ô]»\úõ‹äêÿ[õõ›ö[ô⁄Y]ò[YHäÿJ»üä_Y[ŸHõ›»ô]»\úõ‹äêÿ[õõ›ö[ô⁄Y]äÿJ»üä_Yù[ò›[€àÃ

^‹ô]\õû‘⁄Y]ò[Y\Œñ◊K⁄Y]Œûﬂ__Yù[ò›[€àL
KKãä^›ò\àLN⁄Yä\äYõ‹ä›MçMLÕIâôKî⁄Y]ò[Y\Àö[ô^ŸäèHî⁄Y]ä›
HOKLN  ›è]õ⁄Y
N⁄Yä\üKî⁄Y]ò[Y\Àõ[ô›èMçMLÕJ]õ›»ô]»\úõ‹äï€»X[ûH€‹ö‹⁄Y]»äN⁄YäââôKî⁄Y]ò[Y\Àö[ô^ŸääOèL
^›ò\àœ\ãõX]⁄
 ãäè J
 I N›\…âä‹÷Ãó_›ò\àO\…âú÷ÃW_éŸõ‹ä
 ››MçMLÕIâôKî⁄Y]ò[Y\Àö[ô^ŸäèZJ›
HOKLN  ›
NﬂZYä^
äKKî⁄Y]ò[Y\Àö[ô^ŸääOèL
]õ›»ô]»\úõ‹äï€‹ö‹⁄Y]⁄]ò[YHä‹ä»ü[ôXYH^\›»HäN‹ô]\õàKî⁄Y]ò[Y\Àú\⁄
äKKî⁄Y]÷‹óOXKüYù[ò›[€àŸ
KKä^ŸKï€‹öÿõ€⁄ﬂ
Kï€‹öÿõ€⁄œ^ﬂJKKï€‹öÿõ€⁄Àî⁄Y]ﬂ
Kï€‹öÿõ€⁄Àî⁄Y]œV◊JN›ò\àèZŸ
KJN‹›⁄]⁄
Kï€‹öÿõ€⁄Àî⁄Y]÷€ó_
Kï€‹öÿõ€⁄Àî⁄Y]÷€óO^ﬂJKä^ÿÿ\ŸHòÿ\ŸHNòÿ\ŸHéòúôXZŒŸYò][ùõ›»ô]»\úõ‹äêòY⁄Y]ö\⁄Xö[]HŸ][ô»ä‹ä_YKï€‹öÿõ€⁄Àî⁄Y]÷€óKíY[è\üYù[ò›[€àY
KJ^‹ô]\õàKûèXK_Yù[ò›[€à⁄JKKä^‹ô]\õàO Kõ^’\ôŸ]ò_KââäKõï€€\\äJNô[]HKõ_Yù[ò›[€àô
KKä^‹ô]\õà⁄JKà»äÿKä_Yù[ò›[€àŸ
KKä^ŸKòﬂ
KòœV◊JKKòÀú\⁄
›òKNúüî⁄Y]î»üJ_Yù[ò›[€àŸ
KKãä^Ÿõ‹äò\à]\[ŸàHOHú›ö[ô»èÿNìŸJJKœ]\[ŸàOOHú›ö[ô»èÿNóŸJJKO]úÀúé⁄O]ôKúé  ⁄JYõ‹äò\àœ]úÀòŒÿœ]ôKòŒ  ÿ ^›ò\àèVXJKK NŸãùHõàããëè\À[]HãùãOO]úÀúââòœO]úÀò…âäãôè\ãââäãëHL
J_\ô]\õà_]ò\àY^Ÿ[ò€ŸWÿ€€íK[ò€ŸW‹õ›ŒûôK[ò€ŸWÿŸ[ùYK[ò€ŸW‹ò[ôŸNóŸKX€ŸWÿ€€úÃX€ŸW‹õ›Œõå‹]ÿŸ[êòÀX€ŸWÿŸ[õúãX€ŸW‹ò[ôŸNëXKõ‹õX]ÿŸ[òúã⁄Y]ÿYÿ[ÿNûÀ⁄Y]ÿY⁄ú€€éôöK⁄Y]ÿYŸ€NùK[ÿW›◊‹⁄Y]ïKú€€ó›◊‹⁄Y]ïXõW›◊‹⁄Y]õöKXõW›◊ÿõ€⁄Œñ⁄Y]›◊ÿ‹›éò⁄K⁄Y]›◊›óŸ⁄Y]›◊⁄ú€€éí›⁄Y]›◊⁄[ëﬁ⁄Y]›◊Ÿõ‹õ][YNëY⁄Y]›◊‹õ›◊€ÿöôX›ÿ\úò^Ní›⁄Y]ŸŸ]ÿŸ[ñXKõ€⁄◊€ô]ŒóÃõ€⁄◊ÿ\[ô‹⁄Y]ëLõ€⁄◊‹Ÿ]‹⁄Y]›ö\⁄Xö[]NùŸŸ[‹Ÿ]€ù[Xô\óŸõ‹õX]êYŸ[‹Ÿ]⁄\\õ[öŒõ⁄KŸ[‹Ÿ]⁄[ù\õò[€[öŒëôŸ[ÿYÿ€€[Y[ùîŸ⁄Y]‹Ÿ]ÿ\úò^WŸõ‹õ][NêŸ€€ú›Œû‘“QU’íT“PìNå“QU“QSéåK“QU’ëTñW“QSéåü_NŸ^‹ù€YH\»—êãZH\»\úŸWﬁÿŸòã\»\úŸWﬁö\[à\»ôXYY\»][ﬂN¬