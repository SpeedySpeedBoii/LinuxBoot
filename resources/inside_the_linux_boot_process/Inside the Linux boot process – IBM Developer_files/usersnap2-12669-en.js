/**********************************************                                           
*  /\ /\  ___  ___ _ __ ___ _ __   __ _ _ __  *
* / / \ \/ __|/ _ \ '__/ __| '_ \ / _` | '_ \ *
* \ \_/ /\__ \  __/ |  \__ \ | | | (_| | |_) |*
*  \___/ |___/\___|_|  |___/_| |_|\__,_| .__/ *
*                                      |_|    *
*     Build 12669                              *
*     (c) 2011-2017 Usersnap                  *
*     All rights reserved.                    *
*     https://usersnap.com                    *
**********************************************/
(function() {
var Raphael,MINI,mdefine,mrequire;
// ┌────────────────────────────────────────────────────────────────────┐ \\
// │ Raphaël 2.1.2 - JavaScript Vector Library                          │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Copyright © 2008-2012 Dmitry Baranovskiy (http://raphaeljs.com)    │ \\
// │ Copyright © 2008-2012 Sencha Labs (http://sencha.com)              │ \\
// ├────────────────────────────────────────────────────────────────────┤ \\
// │ Licensed under the MIT (http://raphaeljs.com/license.html) license.│ \\
// └────────────────────────────────────────────────────────────────────┘ \\
var eve;!function(){var a,b,c="0.4.2",d="hasOwnProperty",e=/[\.\/]/,f="*",g=function(){},h=function(a,b){return a-b},i={n:{}};eve=function(c,d){c=String(c);var e,f=b,g=Array.prototype.slice.call(arguments,2),i=eve.listeners(c),j=0,k=[],l={},m=[],n=a;a=c,b=0;for(var o=0,p=i.length;p>o;o++)"zIndex"in i[o]&&(k.push(i[o].zIndex),i[o].zIndex<0&&(l[i[o].zIndex]=i[o]));for(k.sort(h);k[j]<0;)if(e=l[k[j++]],m.push(e.apply(d,g)),b)return b=f,m;for(o=0;p>o;o++)if(e=i[o],"zIndex"in e)if(e.zIndex==k[j]){if(m.push(e.apply(d,g)),b)break;do if(j++,e=l[k[j]],e&&m.push(e.apply(d,g)),b)break;while(e)}else l[e.zIndex]=e;else if(m.push(e.apply(d,g)),b)break;return b=f,a=n,m.length?m:null},eve._events=i,eve.listeners=function(a){var b,c,d,g,h,j,k,l,m=a.split(e),n=i,o=[n],p=[];for(g=0,h=m.length;h>g;g++){for(l=[],j=0,k=o.length;k>j;j++)for(n=o[j].n,c=[n[m[g]],n[f]],d=2;d--;)b=c[d],b&&(l.push(b),p=p.concat(b.f||[]));o=l}return p},eve.on=function(a,b){if(a=String(a),"function"!=typeof b)return function(){};for(var c=a.split(e),d=i,f=0,h=c.length;h>f;f++)d=d.n,d=d.hasOwnProperty(c[f])&&d[c[f]]||(d[c[f]]={n:{}});for(d.f=d.f||[],f=0,h=d.f.length;h>f;f++)if(d.f[f]==b)return g;return d.f.push(b),function(a){+a==+a&&(b.zIndex=+a)}},eve.f=function(a){var b=[].slice.call(arguments,1);return function(){eve.apply(null,[a,null].concat(b).concat([].slice.call(arguments,0)))}},eve.stop=function(){b=1},eve.nt=function(b){return b?new RegExp("(?:\\.|\\/|^)"+b+"(?:\\.|\\/|$)").test(a):a},eve.nts=function(){return a.split(e)},eve.off=eve.unbind=function(a,b){if(!a)return void(eve._events=i={n:{}});var c,g,h,j,k,l,m,n=a.split(e),o=[i];for(j=0,k=n.length;k>j;j++)for(l=0;l<o.length;l+=h.length-2){if(h=[l,1],c=o[l].n,n[j]!=f)c[n[j]]&&h.push(c[n[j]]);else for(g in c)c[d](g)&&h.push(c[g]);o.splice.apply(o,h)}for(j=0,k=o.length;k>j;j++)for(c=o[j];c.n;){if(b){if(c.f){for(l=0,m=c.f.length;m>l;l++)if(c.f[l]==b){c.f.splice(l,1);break}!c.f.length&&delete c.f}for(g in c.n)if(c.n[d](g)&&c.n[g].f){var p=c.n[g].f;for(l=0,m=p.length;m>l;l++)if(p[l]==b){p.splice(l,1);break}!p.length&&delete c.n[g].f}}else{delete c.f;for(g in c.n)c.n[d](g)&&c.n[g].f&&delete c.n[g].f}c=c.n}},eve.once=function(a,b){var c=function(){return eve.unbind(a,c),b.apply(this,arguments)};return eve.on(a,c)},eve.version=c,eve.toString=function(){return"You are running Eve "+c}}(this);var Raphael;!function(a,b){b(a,eve)}(this,function(a,b){function c(a){if(c.is(a,"function"))return B?a():b.on("raphael.DOMload",a);if(c.is(a,ab))return c._engine.create[K](c,a.splice(0,3+c.is(a[0],$))).add(a);var d=Array.prototype.slice.call(arguments,0);if(c.is(d[d.length-1],"function")){var e=d.pop();return B?e.call(c._engine.create[K](c,d)):b.on("raphael.DOMload",function(){e.call(c._engine.create[K](c,d))})}return c._engine.create[K](c,arguments)}function d(a){if("function"==typeof a||Object(a)!==a)return a;var b=new a.constructor;for(var c in a)a[G](c)&&(b[c]=d(a[c]));return b}function e(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return a.push(a.splice(c,1)[0])}function f(a,b,c){function d(){var f=Array.prototype.slice.call(arguments,0),g=f.join("␀"),h=d.cache=d.cache||{},i=d.count=d.count||[];return h[G](g)?(e(i,g),c?c(h[g]):h[g]):(i.length>=1e3&&delete h[i.shift()],i.push(g),h[g]=a[K](b,f),c?c(h[g]):h[g])}return d}function g(){return this.hex}function h(a,b){for(var c=[],d=0,e=a.length;e-2*!b>d;d+=2){var f=[{x:+a[d-2],y:+a[d-1]},{x:+a[d],y:+a[d+1]},{x:+a[d+2],y:+a[d+3]},{x:+a[d+4],y:+a[d+5]}];b?d?e-4==d?f[3]={x:+a[0],y:+a[1]}:e-2==d&&(f[2]={x:+a[0],y:+a[1]},f[3]={x:+a[2],y:+a[3]}):f[0]={x:+a[e-2],y:+a[e-1]}:e-4==d?f[3]=f[2]:d||(f[0]={x:+a[d],y:+a[d+1]}),c.push(["C",(-f[0].x+6*f[1].x+f[2].x)/6,(-f[0].y+6*f[1].y+f[2].y)/6,(f[1].x+6*f[2].x-f[3].x)/6,(f[1].y+6*f[2].y-f[3].y)/6,f[2].x,f[2].y])}return c}function i(a,b,c,d,e){var f=-3*b+9*c-9*d+3*e,g=a*f+6*b-12*c+6*d;return a*g-3*b+3*c}function j(a,b,c,d,e,f,g,h,j){null==j&&(j=1),j=j>1?1:0>j?0:j;for(var k=j/2,l=12,m=[-.1252,.1252,-.3678,.3678,-.5873,.5873,-.7699,.7699,-.9041,.9041,-.9816,.9816],n=[.2491,.2491,.2335,.2335,.2032,.2032,.1601,.1601,.1069,.1069,.0472,.0472],o=0,p=0;l>p;p++){var q=k*m[p]+k,r=i(q,a,c,e,g),s=i(q,b,d,f,h),t=r*r+s*s;o+=n[p]*U.sqrt(t)}return k*o}function k(a,b,c,d,e,f,g,h,i){if(!(0>i||j(a,b,c,d,e,f,g,h)<i)){var k,l=1,m=l/2,n=l-m,o=.01;for(k=j(a,b,c,d,e,f,g,h,n);X(k-i)>o;)m/=2,n+=(i>k?1:-1)*m,k=j(a,b,c,d,e,f,g,h,n);return n}}function l(a,b,c,d,e,f,g,h){if(!(V(a,c)<W(e,g)||W(a,c)>V(e,g)||V(b,d)<W(f,h)||W(b,d)>V(f,h))){var i=(a*d-b*c)*(e-g)-(a-c)*(e*h-f*g),j=(a*d-b*c)*(f-h)-(b-d)*(e*h-f*g),k=(a-c)*(f-h)-(b-d)*(e-g);if(k){var l=i/k,m=j/k,n=+l.toFixed(2),o=+m.toFixed(2);if(!(n<+W(a,c).toFixed(2)||n>+V(a,c).toFixed(2)||n<+W(e,g).toFixed(2)||n>+V(e,g).toFixed(2)||o<+W(b,d).toFixed(2)||o>+V(b,d).toFixed(2)||o<+W(f,h).toFixed(2)||o>+V(f,h).toFixed(2)))return{x:l,y:m}}}}function m(a,b,d){var e=c.bezierBBox(a),f=c.bezierBBox(b);if(!c.isBBoxIntersect(e,f))return d?0:[];for(var g=j.apply(0,a),h=j.apply(0,b),i=V(~~(g/5),1),k=V(~~(h/5),1),m=[],n=[],o={},p=d?0:[],q=0;i+1>q;q++){var r=c.findDotsAtSegment.apply(c,a.concat(q/i));m.push({x:r.x,y:r.y,t:q/i})}for(q=0;k+1>q;q++)r=c.findDotsAtSegment.apply(c,b.concat(q/k)),n.push({x:r.x,y:r.y,t:q/k});for(q=0;i>q;q++)for(var s=0;k>s;s++){var t=m[q],u=m[q+1],v=n[s],w=n[s+1],x=X(u.x-t.x)<.001?"y":"x",y=X(w.x-v.x)<.001?"y":"x",z=l(t.x,t.y,u.x,u.y,v.x,v.y,w.x,w.y);if(z){if(o[z.x.toFixed(4)]==z.y.toFixed(4))continue;o[z.x.toFixed(4)]=z.y.toFixed(4);var A=t.t+X((z[x]-t[x])/(u[x]-t[x]))*(u.t-t.t),B=v.t+X((z[y]-v[y])/(w[y]-v[y]))*(w.t-v.t);A>=0&&1.001>=A&&B>=0&&1.001>=B&&(d?p++:p.push({x:z.x,y:z.y,t1:W(A,1),t2:W(B,1)}))}}return p}function n(a,b,d){a=c._path2curve(a),b=c._path2curve(b);for(var e,f,g,h,i,j,k,l,n,o,p=d?0:[],q=0,r=a.length;r>q;q++){var s=a[q];if("M"==s[0])e=i=s[1],f=j=s[2];else{"C"==s[0]?(n=[e,f].concat(s.slice(1)),e=n[6],f=n[7]):(n=[e,f,e,f,i,j,i,j],e=i,f=j);for(var t=0,u=b.length;u>t;t++){var v=b[t];if("M"==v[0])g=k=v[1],h=l=v[2];else{"C"==v[0]?(o=[g,h].concat(v.slice(1)),g=o[6],h=o[7]):(o=[g,h,g,h,k,l,k,l],g=k,h=l);var w=m(n,o,d);if(d)p+=w;else{for(var x=0,y=w.length;y>x;x++)w[x].segment1=q,w[x].segment2=t,w[x].bez1=n,w[x].bez2=o;p=p.concat(w)}}}}}return p}function o(a,b,c,d,e,f){null!=a?(this.a=+a,this.b=+b,this.c=+c,this.d=+d,this.e=+e,this.f=+f):(this.a=1,this.b=0,this.c=0,this.d=1,this.e=0,this.f=0)}function p(){return this.x+O+this.y+O+this.width+" × "+this.height}function q(a,b,c,d,e,f){function g(a){return((l*a+k)*a+j)*a}function h(a,b){var c=i(a,b);return((o*c+n)*c+m)*c}function i(a,b){var c,d,e,f,h,i;for(e=a,i=0;8>i;i++){if(f=g(e)-a,X(f)<b)return e;if(h=(3*l*e+2*k)*e+j,X(h)<1e-6)break;e-=f/h}if(c=0,d=1,e=a,c>e)return c;if(e>d)return d;for(;d>c;){if(f=g(e),X(f-a)<b)return e;a>f?c=e:d=e,e=(d-c)/2+c}return e}var j=3*b,k=3*(d-b)-j,l=1-j-k,m=3*c,n=3*(e-c)-m,o=1-m-n;return h(a,1/(200*f))}function r(a,b){var c=[],d={};if(this.ms=b,this.times=1,a){for(var e in a)a[G](e)&&(d[gb(e)]=a[e],c.push(gb(e)));c.sort(sb)}this.anim=d,this.top=c[c.length-1],this.percents=c}function s(a,d,e,f,g,h){e=gb(e);var i,j,k,l,m,n,p=a.ms,r={},s={},t={};if(f)for(v=0,w=pc.length;w>v;v++){var u=pc[v];if(u.el.id==d.id&&u.anim==a){u.percent!=e?(pc.splice(v,1),k=1):j=u,d.attr(u.totalOrigin);break}}else f=+s;for(var v=0,w=a.percents.length;w>v;v++){if(a.percents[v]==e||a.percents[v]>f*a.top){e=a.percents[v],m=a.percents[v-1]||0,p=p/a.top*(e-m),l=a.percents[v+1],i=a.anim[e];break}f&&d.attr(a.anim[a.percents[v]])}if(i){if(j)j.initstatus=f,j.start=new Date-j.ms*f;else{for(var x in i)if(i[G](x)&&(kb[G](x)||d.paper.customAttributes[G](x)))switch(r[x]=d.attr(x),null==r[x]&&(r[x]=jb[x]),s[x]=i[x],kb[x]){case $:t[x]=(s[x]-r[x])/p;break;case"colour":r[x]=c.getRGB(r[x]);var y=c.getRGB(s[x]);t[x]={r:(y.r-r[x].r)/p,g:(y.g-r[x].g)/p,b:(y.b-r[x].b)/p};break;case"path":var z=Rb(r[x],s[x]),A=z[1];for(r[x]=z[0],t[x]=[],v=0,w=r[x].length;w>v;v++){t[x][v]=[0];for(var B=1,C=r[x][v].length;C>B;B++)t[x][v][B]=(A[v][B]-r[x][v][B])/p}break;case"transform":var E=d._,F=Wb(E[x],s[x]);if(F)for(r[x]=F.from,s[x]=F.to,t[x]=[],t[x].real=!0,v=0,w=r[x].length;w>v;v++)for(t[x][v]=[r[x][v][0]],B=1,C=r[x][v].length;C>B;B++)t[x][v][B]=(s[x][v][B]-r[x][v][B])/p;else{var H=d.matrix||new o,I={_:{transform:E.transform},getBBox:function(){return d.getBBox(1)}};r[x]=[H.a,H.b,H.c,H.d,H.e,H.f],Ub(I,s[x]),s[x]=I._.transform,t[x]=[(I.matrix.a-H.a)/p,(I.matrix.b-H.b)/p,(I.matrix.c-H.c)/p,(I.matrix.d-H.d)/p,(I.matrix.e-H.e)/p,(I.matrix.f-H.f)/p]}break;case"csv":var J=P(i[x])[Q](D),K=P(r[x])[Q](D);if("clip-rect"==x)for(r[x]=K,t[x]=[],v=K.length;v--;)t[x][v]=(J[v]-r[x][v])/p;s[x]=J;break;default:for(J=[][L](i[x]),K=[][L](r[x]),t[x]=[],v=d.paper.customAttributes[x].length;v--;)t[x][v]=((J[v]||0)-(K[v]||0))/p}var M=i.easing,N=c.easing_formulas[M];if(!N)if(N=P(M).match(eb),N&&5==N.length){var O=N;N=function(a){return q(a,+O[1],+O[2],+O[3],+O[4],p)}}else N=ub;if(n=i.start||a.start||+new Date,u={anim:a,percent:e,timestamp:n,start:n+(a.del||0),status:0,initstatus:f||0,stop:!1,ms:p,easing:N,from:r,diff:t,to:s,el:d,callback:i.callback,prev:m,next:l,repeat:h||a.times,origin:d.attr(),totalOrigin:g},pc.push(u),f&&!j&&!k&&(u.stop=!0,u.start=new Date-p*f,1==pc.length))return rc();k&&(u.start=new Date-u.ms*f),1==pc.length&&qc(rc)}b("raphael.anim.start."+d.id,d,a)}}function t(a){for(var b=0;b<pc.length;b++)pc[b].el.paper==a&&pc.splice(b--,1)}function u(a){if("number"==typeof a)return a.toString();var b={"<":"lt",">":"gt",'"':"quot","'":"apos"};for(var c in b)a=a.replace(new RegExp(c,"g"),"&"+b[c]+";");return a}function v(a,b){var c,d=[],e="undefined";if("undefined"!=typeof a.unshift){var f=a.length;for(c=0;f>c;c++)if(typeof a[c]!=e){var g=b.call(this,a[c],c);null!==g&&d.push(g)}}else for(c in a)if(a.hasOwnProperty(c)){var g=b.call(this,a[c],c);null!==g&&d.push(g)}return d}function w(a,b,c){for(var d in a)a.hasOwnProperty(d)&&(c=b.call(this,c,a[d],d));return c}function x(a,b,d,e){return("undefined"==typeof e||null===e)&&(e=""),"object"==typeof b&&(b=v(b,function(a,b){switch(b){case"transform":return;case"fill":if(a.match(/^hsb/)){var d=a.replace(/^hsb\(|\)$/g,"").split(",");3===d.length&&(a=c.hsb2rgb(d[0],d[1],d[2]).toString())}}return b+'="'+u(a)+'"'}).join(" ")),"<"+a+(d?' transform="matrix('+d.toString().replace(/^matrix\(|\)$/g,"")+')" ':" ")+b+">"+e+"</"+a+">"}function y(a){return{font:{family:a.attrs.font.replace(/^.*?"(\w+)".*$/,"$1"),size:"undefined"==typeof a.attrs["font-size"]?null:parseInt(a.attrs["font-size"]),style:"undefined"==typeof a.attrs["font-style"]?null:a.attrs["font-style"],weight:"undefined"==typeof a.attrs["font-weight"]?null:a.attrs["font-weight"]}}}function z(a){var b="normal",c=a.font;return["font:",c.style||b,b,c.weight||b,(c.size?c.size+"px":"10px")+"/normal",c.family].join(" ")}function A(a,b,c){return null===a&&(a=10),4.5*a/13*(b-.2-c/2)*3.5}c.version="2.1.2",c.eve=b;var B,C,D=/[, ]+/,E={circle:1,rect:1,path:1,ellipse:1,text:1,image:1},F=/\{(\d+)\}/g,G="hasOwnProperty",H={doc:document,win:a},I={was:Object.prototype[G].call(H.win,"Raphael"),is:H.win.Raphael},J=function(){this.ca=this.customAttributes={}},K="apply",L="concat",M="ontouchstart"in H.win||H.win.DocumentTouch&&H.doc instanceof DocumentTouch,N="",O=" ",P=String,Q="split",R="click dblclick mousedown mousemove mouseout mouseover mouseup touchstart touchmove touchend touchcancel"[Q](O),S={mousedown:"touchstart",mousemove:"touchmove",mouseup:"touchend"},T=P.prototype.toLowerCase,U=Math,V=U.max,W=U.min,X=U.abs,Y=U.pow,Z=U.PI,$="number",_="string",ab="array",bb=Object.prototype.toString,cb=(c._ISURL=/^url\(['"]?([^\)]+?)['"]?\)$/i,/^\s*((#[a-f\d]{6})|(#[a-f\d]{3})|rgba?\(\s*([\d\.]+%?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+%?(?:\s*,\s*[\d\.]+%?)?)\s*\)|hsba?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\)|hsla?\(\s*([\d\.]+(?:deg|\xb0|%)?\s*,\s*[\d\.]+%?\s*,\s*[\d\.]+(?:%?\s*,\s*[\d\.]+)?)%?\s*\))\s*$/i),db={NaN:1,Infinity:1,"-Infinity":1},eb=/^(?:cubic-)?bezier\(([^,]+),([^,]+),([^,]+),([^\)]+)\)/,fb=U.round,gb=parseFloat,hb=parseInt,ib=P.prototype.toUpperCase,jb=c._availableAttrs={"arrow-end":"none","arrow-start":"none",blur:0,"clip-rect":"0 0 1e9 1e9",cursor:"default",cx:0,cy:0,fill:"#fff","fill-opacity":1,font:'10px "Arial"',"font-family":'"Arial"',"font-size":"10","font-style":"normal","font-weight":400,gradient:0,height:0,href:"http://raphaeljs.com/","letter-spacing":0,opacity:1,path:"M0,0",r:0,rx:0,ry:0,src:"",stroke:"#000","stroke-dasharray":"","stroke-linecap":"butt","stroke-linejoin":"butt","stroke-miterlimit":0,"stroke-opacity":1,"stroke-width":1,target:"_blank","text-anchor":"middle",title:"Raphael",transform:"",width:0,x:0,y:0},kb=c._availableAnimAttrs={blur:$,"clip-rect":"csv",cx:$,cy:$,fill:"colour","fill-opacity":$,"font-size":$,height:$,opacity:$,path:"path",r:$,rx:$,ry:$,stroke:"colour","stroke-opacity":$,"stroke-width":$,transform:"transform",width:$,x:$,y:$},lb=/[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/,mb={hs:1,rg:1},nb=/,?([achlmqrstvxz]),?/gi,ob=/([achlmrqstvz])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,pb=/([rstm])[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029,]*((-?\d*\.?\d*(?:e[\-+]?\d+)?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*)+)/gi,qb=/(-?\d*\.?\d*(?:e[\-+]?\d+)?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,?[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*/gi,rb=(c._radial_gradient=/^r(?:\(([^,]+?)[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*,[\x09\x0a\x0b\x0c\x0d\x20\xa0\u1680\u180e\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u202f\u205f\u3000\u2028\u2029]*([^\)]+?)\))?/,{}),sb=function(a,b){return gb(a)-gb(b)},tb=function(){},ub=function(a){return a},vb=c._rectPath=function(a,b,c,d,e){return e?[["M",a+e,b],["l",c-2*e,0],["a",e,e,0,0,1,e,e],["l",0,d-2*e],["a",e,e,0,0,1,-e,e],["l",2*e-c,0],["a",e,e,0,0,1,-e,-e],["l",0,2*e-d],["a",e,e,0,0,1,e,-e],["z"]]:[["M",a,b],["l",c,0],["l",0,d],["l",-c,0],["z"]]},wb=function(a,b,c,d){return null==d&&(d=c),[["M",a,b],["m",0,-d],["a",c,d,0,1,1,0,2*d],["a",c,d,0,1,1,0,-2*d],["z"]]},xb=c._getPath={path:function(a){return a.attr("path")},circle:function(a){var b=a.attrs;return wb(b.cx,b.cy,b.r)},ellipse:function(a){var b=a.attrs;return wb(b.cx,b.cy,b.rx,b.ry)},rect:function(a){var b=a.attrs;return vb(b.x,b.y,b.width,b.height,b.r)},image:function(a){var b=a.attrs;return vb(b.x,b.y,b.width,b.height)},text:function(a){var b=a._getBBox();return vb(b.x,b.y,b.width,b.height)},set:function(a){var b=a._getBBox();return vb(b.x,b.y,b.width,b.height)}},yb=c.mapPath=function(a,b){if(!b)return a;var c,d,e,f,g,h,i;for(a=Rb(a),e=0,g=a.length;g>e;e++)for(i=a[e],f=1,h=i.length;h>f;f+=2)c=b.x(i[f],i[f+1]),d=b.y(i[f],i[f+1]),i[f]=c,i[f+1]=d;return a};if(c._g=H,c.type=H.win.SVGAngle||H.doc.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure","1.1")?"SVG":"VML","VML"==c.type){var zb,Ab=H.doc.createElement("div");if(Ab.innerHTML='<v:shape adj="1"/>',zb=Ab.firstChild,zb.style.behavior="url(#default#VML)",!zb||"object"!=typeof zb.adj)return c.type=N;Ab=null}c.svg=!(c.vml="VML"==c.type),c._Paper=J,c.fn=C=J.prototype=c.prototype,c._id=0,c._oid=0,c.is=function(a,b){return b=T.call(b),"finite"==b?!db[G](+a):"array"==b?a instanceof Array:"null"==b&&null===a||b==typeof a&&null!==a||"object"==b&&a===Object(a)||"array"==b&&Array.isArray&&Array.isArray(a)||bb.call(a).slice(8,-1).toLowerCase()==b},c.angle=function(a,b,d,e,f,g){if(null==f){var h=a-d,i=b-e;return h||i?(180+180*U.atan2(-i,-h)/Z+360)%360:0}return c.angle(a,b,f,g)-c.angle(d,e,f,g)},c.rad=function(a){return a%360*Z/180},c.deg=function(a){return 180*a/Z%360},c.snapTo=function(a,b,d){if(d=c.is(d,"finite")?d:10,c.is(a,ab)){for(var e=a.length;e--;)if(X(a[e]-b)<=d)return a[e]}else{a=+a;var f=b%a;if(d>f)return b-f;if(f>a-d)return b-f+a}return b};c.createUUID=function(a,b){return function(){return"xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(a,b).toUpperCase()}}(/[xy]/g,function(a){var b=16*U.random()|0,c="x"==a?b:3&b|8;return c.toString(16)});c.setWindow=function(a){b("raphael.setWindow",c,H.win,a),H.win=a,H.doc=H.win.document,c._engine.initWin&&c._engine.initWin(H.win)};var Bb=function(a){if(c.vml){var b,d=/^\s+|\s+$/g;try{var e=new ActiveXObject("htmlfile");e.write("<body>"),e.close(),b=e.body}catch(g){b=createPopup().document.body}var h=b.createTextRange();Bb=f(function(a){try{b.style.color=P(a).replace(d,N);var c=h.queryCommandValue("ForeColor");return c=(255&c)<<16|65280&c|(16711680&c)>>>16,"#"+("000000"+c.toString(16)).slice(-6)}catch(e){return"none"}})}else{var i=H.doc.createElement("i");i.title="Raphaël Colour Picker",i.style.display="none",H.doc.body.appendChild(i),Bb=f(function(a){return i.style.color=a,H.doc.defaultView.getComputedStyle(i,N).getPropertyValue("color")})}return Bb(a)},Cb=function(){return"hsb("+[this.h,this.s,this.b]+")"},Db=function(){return"hsl("+[this.h,this.s,this.l]+")"},Eb=function(){return this.hex},Fb=function(a,b,d){if(null==b&&c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a&&(d=a.b,b=a.g,a=a.r),null==b&&c.is(a,_)){var e=c.getRGB(a);a=e.r,b=e.g,d=e.b}return(a>1||b>1||d>1)&&(a/=255,b/=255,d/=255),[a,b,d]},Gb=function(a,b,d,e){a*=255,b*=255,d*=255;var f={r:a,g:b,b:d,hex:c.rgb(a,b,d),toString:Eb};return c.is(e,"finite")&&(f.opacity=e),f};c.color=function(a){var b;return c.is(a,"object")&&"h"in a&&"s"in a&&"b"in a?(b=c.hsb2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):c.is(a,"object")&&"h"in a&&"s"in a&&"l"in a?(b=c.hsl2rgb(a),a.r=b.r,a.g=b.g,a.b=b.b,a.hex=b.hex):(c.is(a,"string")&&(a=c.getRGB(a)),c.is(a,"object")&&"r"in a&&"g"in a&&"b"in a?(b=c.rgb2hsl(a),a.h=b.h,a.s=b.s,a.l=b.l,b=c.rgb2hsb(a),a.v=b.b):(a={hex:"none"},a.r=a.g=a.b=a.h=a.s=a.v=a.l=-1)),a.toString=Eb,a},c.hsb2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"b"in a&&(c=a.b,b=a.s,a=a.h,d=a.o),a*=360;var e,f,g,h,i;return a=a%360/60,i=c*b,h=i*(1-X(a%2-1)),e=f=g=c-i,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],Gb(e,f,g,d)},c.hsl2rgb=function(a,b,c,d){this.is(a,"object")&&"h"in a&&"s"in a&&"l"in a&&(c=a.l,b=a.s,a=a.h),(a>1||b>1||c>1)&&(a/=360,b/=100,c/=100),a*=360;var e,f,g,h,i;return a=a%360/60,i=2*b*(.5>c?c:1-c),h=i*(1-X(a%2-1)),e=f=g=c-i/2,a=~~a,e+=[i,h,0,0,h,i][a],f+=[h,i,i,h,0,0][a],g+=[0,0,h,i,i,h][a],Gb(e,f,g,d)},c.rgb2hsb=function(a,b,c){c=Fb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g;return f=V(a,b,c),g=f-W(a,b,c),d=0==g?null:f==a?(b-c)/g:f==b?(c-a)/g+2:(a-b)/g+4,d=(d+360)%6*60/360,e=0==g?0:g/f,{h:d,s:e,b:f,toString:Cb}},c.rgb2hsl=function(a,b,c){c=Fb(a,b,c),a=c[0],b=c[1],c=c[2];var d,e,f,g,h,i;return g=V(a,b,c),h=W(a,b,c),i=g-h,d=0==i?null:g==a?(b-c)/i:g==b?(c-a)/i+2:(a-b)/i+4,d=(d+360)%6*60/360,f=(g+h)/2,e=0==i?0:.5>f?i/(2*f):i/(2-2*f),{h:d,s:e,l:f,toString:Db}},c._path2string=function(){return this.join(",").replace(nb,"$1")};c._preload=function(a,b){var c=H.doc.createElement("img");c.style.cssText="position:absolute;left:-9999em;top:-9999em",c.onload=function(){b.call(this),this.onload=null,H.doc.body.removeChild(this)},c.onerror=function(){H.doc.body.removeChild(this)},H.doc.body.appendChild(c),c.src=a};c.getRGB=f(function(a){if(!a||(a=P(a)).indexOf("-")+1)return{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g};if("none"==a)return{r:-1,g:-1,b:-1,hex:"none",toString:g};!(mb[G](a.toLowerCase().substring(0,2))||"#"==a.charAt())&&(a=Bb(a));var b,d,e,f,h,i,j=a.match(cb);return j?(j[2]&&(e=hb(j[2].substring(5),16),d=hb(j[2].substring(3,5),16),b=hb(j[2].substring(1,3),16)),j[3]&&(e=hb((h=j[3].charAt(3))+h,16),d=hb((h=j[3].charAt(2))+h,16),b=hb((h=j[3].charAt(1))+h,16)),j[4]&&(i=j[4][Q](lb),b=gb(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=gb(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=gb(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),"rgba"==j[1].toLowerCase().slice(0,4)&&(f=gb(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100)),j[5]?(i=j[5][Q](lb),b=gb(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=gb(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=gb(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsba"==j[1].toLowerCase().slice(0,4)&&(f=gb(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsb2rgb(b,d,e,f)):j[6]?(i=j[6][Q](lb),b=gb(i[0]),"%"==i[0].slice(-1)&&(b*=2.55),d=gb(i[1]),"%"==i[1].slice(-1)&&(d*=2.55),e=gb(i[2]),"%"==i[2].slice(-1)&&(e*=2.55),("deg"==i[0].slice(-3)||"°"==i[0].slice(-1))&&(b/=360),"hsla"==j[1].toLowerCase().slice(0,4)&&(f=gb(i[3])),i[3]&&"%"==i[3].slice(-1)&&(f/=100),c.hsl2rgb(b,d,e,f)):(j={r:b,g:d,b:e,toString:g},j.hex="#"+(16777216|e|d<<8|b<<16).toString(16).slice(1),c.is(f,"finite")&&(j.opacity=f),j)):{r:-1,g:-1,b:-1,hex:"none",error:1,toString:g}},c),c.hsb=f(function(a,b,d){return c.hsb2rgb(a,b,d).hex}),c.hsl=f(function(a,b,d){return c.hsl2rgb(a,b,d).hex}),c.rgb=f(function(a,b,c){return"#"+(16777216|c|b<<8|a<<16).toString(16).slice(1)}),c.getColor=function(a){var b=this.getColor.start=this.getColor.start||{h:0,s:1,b:a||.75},c=this.hsb2rgb(b.h,b.s,b.b);return b.h+=.075,b.h>1&&(b.h=0,b.s-=.2,b.s<=0&&(this.getColor.start={h:0,s:1,b:b.b})),c.hex},c.getColor.reset=function(){delete this.start},c.parsePathString=function(a){if(!a)return null;var b=Hb(a);if(b.arr)return Jb(b.arr);var d={a:7,c:6,h:1,l:2,m:2,r:4,q:4,s:4,t:2,v:1,z:0},e=[];return c.is(a,ab)&&c.is(a[0],ab)&&(e=Jb(a)),e.length||P(a).replace(ob,function(a,b,c){var f=[],g=b.toLowerCase();if(c.replace(qb,function(a,b){b&&f.push(+b)}),"m"==g&&f.length>2&&(e.push([b][L](f.splice(0,2))),g="l",b="m"==b?"l":"L"),"r"==g)e.push([b][L](f));else for(;f.length>=d[g]&&(e.push([b][L](f.splice(0,d[g]))),d[g]););}),e.toString=c._path2string,b.arr=Jb(e),e},c.parseTransformString=f(function(a){if(!a)return null;var b=[];return c.is(a,ab)&&c.is(a[0],ab)&&(b=Jb(a)),b.length||P(a).replace(pb,function(a,c,d){{var e=[];T.call(c)}d.replace(qb,function(a,b){b&&e.push(+b)}),b.push([c][L](e))}),b.toString=c._path2string,b});var Hb=function(a){var b=Hb.ps=Hb.ps||{};return b[a]?b[a].sleep=100:b[a]={sleep:100},setTimeout(function(){for(var c in b)b[G](c)&&c!=a&&(b[c].sleep--,!b[c].sleep&&delete b[c])}),b[a]};c.findDotsAtSegment=function(a,b,c,d,e,f,g,h,i){var j=1-i,k=Y(j,3),l=Y(j,2),m=i*i,n=m*i,o=k*a+3*l*i*c+3*j*i*i*e+n*g,p=k*b+3*l*i*d+3*j*i*i*f+n*h,q=a+2*i*(c-a)+m*(e-2*c+a),r=b+2*i*(d-b)+m*(f-2*d+b),s=c+2*i*(e-c)+m*(g-2*e+c),t=d+2*i*(f-d)+m*(h-2*f+d),u=j*a+i*c,v=j*b+i*d,w=j*e+i*g,x=j*f+i*h,y=90-180*U.atan2(q-s,r-t)/Z;return(q>s||t>r)&&(y+=180),{x:o,y:p,m:{x:q,y:r},n:{x:s,y:t},start:{x:u,y:v},end:{x:w,y:x},alpha:y}},c.bezierBBox=function(a,b,d,e,f,g,h,i){c.is(a,"array")||(a=[a,b,d,e,f,g,h,i]);var j=Qb.apply(null,a);return{x:j.min.x,y:j.min.y,x2:j.max.x,y2:j.max.y,width:j.max.x-j.min.x,height:j.max.y-j.min.y}},c.isPointInsideBBox=function(a,b,c){return b>=a.x&&b<=a.x2&&c>=a.y&&c<=a.y2},c.isBBoxIntersect=function(a,b){var d=c.isPointInsideBBox;return d(b,a.x,a.y)||d(b,a.x2,a.y)||d(b,a.x,a.y2)||d(b,a.x2,a.y2)||d(a,b.x,b.y)||d(a,b.x2,b.y)||d(a,b.x,b.y2)||d(a,b.x2,b.y2)||(a.x<b.x2&&a.x>b.x||b.x<a.x2&&b.x>a.x)&&(a.y<b.y2&&a.y>b.y||b.y<a.y2&&b.y>a.y)},c.pathIntersection=function(a,b){return n(a,b)},c.pathIntersectionNumber=function(a,b){return n(a,b,1)},c.isPointInsidePath=function(a,b,d){var e=c.pathBBox(a);return c.isPointInsideBBox(e,b,d)&&n(a,[["M",b,d],["H",e.x2+10]],1)%2==1},c._removedFactory=function(a){return function(){b("raphael.log",null,"Raphaël: you are calling to method “"+a+"” of removed object",a)}};var Ib=c.pathBBox=function(a){var b=Hb(a);if(b.bbox)return d(b.bbox);if(!a)return{x:0,y:0,width:0,height:0,x2:0,y2:0};a=Rb(a);for(var c,e=0,f=0,g=[],h=[],i=0,j=a.length;j>i;i++)if(c=a[i],"M"==c[0])e=c[1],f=c[2],g.push(e),h.push(f);else{var k=Qb(e,f,c[1],c[2],c[3],c[4],c[5],c[6]);g=g[L](k.min.x,k.max.x),h=h[L](k.min.y,k.max.y),e=c[5],f=c[6]}var l=W[K](0,g),m=W[K](0,h),n=V[K](0,g),o=V[K](0,h),p=n-l,q=o-m,r={x:l,y:m,x2:n,y2:o,width:p,height:q,cx:l+p/2,cy:m+q/2};return b.bbox=d(r),r},Jb=function(a){var b=d(a);return b.toString=c._path2string,b},Kb=c._pathToRelative=function(a){var b=Hb(a);if(b.rel)return Jb(b.rel);c.is(a,ab)&&c.is(a&&a[0],ab)||(a=c.parsePathString(a));var d=[],e=0,f=0,g=0,h=0,i=0;"M"==a[0][0]&&(e=a[0][1],f=a[0][2],g=e,h=f,i++,d.push(["M",e,f]));for(var j=i,k=a.length;k>j;j++){var l=d[j]=[],m=a[j];if(m[0]!=T.call(m[0]))switch(l[0]=T.call(m[0]),l[0]){case"a":l[1]=m[1],l[2]=m[2],l[3]=m[3],l[4]=m[4],l[5]=m[5],l[6]=+(m[6]-e).toFixed(3),l[7]=+(m[7]-f).toFixed(3);break;case"v":l[1]=+(m[1]-f).toFixed(3);break;case"m":g=m[1],h=m[2];default:for(var n=1,o=m.length;o>n;n++)l[n]=+(m[n]-(n%2?e:f)).toFixed(3)}else{l=d[j]=[],"m"==m[0]&&(g=m[1]+e,h=m[2]+f);for(var p=0,q=m.length;q>p;p++)d[j][p]=m[p]}var r=d[j].length;switch(d[j][0]){case"z":e=g,f=h;break;case"h":e+=+d[j][r-1];break;case"v":f+=+d[j][r-1];break;default:e+=+d[j][r-2],f+=+d[j][r-1]}}return d.toString=c._path2string,b.rel=Jb(d),d},Lb=c._pathToAbsolute=function(a){var b=Hb(a);if(b.abs)return Jb(b.abs);if(c.is(a,ab)&&c.is(a&&a[0],ab)||(a=c.parsePathString(a)),!a||!a.length)return[["M",0,0]];var d=[],e=0,f=0,g=0,i=0,j=0;"M"==a[0][0]&&(e=+a[0][1],f=+a[0][2],g=e,i=f,j++,d[0]=["M",e,f]);for(var k,l,m=3==a.length&&"M"==a[0][0]&&"R"==a[1][0].toUpperCase()&&"Z"==a[2][0].toUpperCase(),n=j,o=a.length;o>n;n++){if(d.push(k=[]),l=a[n],l[0]!=ib.call(l[0]))switch(k[0]=ib.call(l[0]),k[0]){case"A":k[1]=l[1],k[2]=l[2],k[3]=l[3],k[4]=l[4],k[5]=l[5],k[6]=+(l[6]+e),k[7]=+(l[7]+f);break;case"V":k[1]=+l[1]+f;break;case"H":k[1]=+l[1]+e;break;case"R":for(var p=[e,f][L](l.slice(1)),q=2,r=p.length;r>q;q++)p[q]=+p[q]+e,p[++q]=+p[q]+f;d.pop(),d=d[L](h(p,m));break;case"M":g=+l[1]+e,i=+l[2]+f;default:for(q=1,r=l.length;r>q;q++)k[q]=+l[q]+(q%2?e:f)}else if("R"==l[0])p=[e,f][L](l.slice(1)),d.pop(),d=d[L](h(p,m)),k=["R"][L](l.slice(-2));else for(var s=0,t=l.length;t>s;s++)k[s]=l[s];switch(k[0]){case"Z":e=g,f=i;break;case"H":e=k[1];break;case"V":f=k[1];break;case"M":g=k[k.length-2],i=k[k.length-1];default:e=k[k.length-2],f=k[k.length-1]}}return d.toString=c._path2string,b.abs=Jb(d),d},Mb=function(a,b,c,d){return[a,b,c,d,c,d]},Nb=function(a,b,c,d,e,f){var g=1/3,h=2/3;return[g*a+h*c,g*b+h*d,g*e+h*c,g*f+h*d,e,f]},Ob=function(a,b,c,d,e,g,h,i,j,k){var l,m=120*Z/180,n=Z/180*(+e||0),o=[],p=f(function(a,b,c){var d=a*U.cos(c)-b*U.sin(c),e=a*U.sin(c)+b*U.cos(c);return{x:d,y:e}});if(k)y=k[0],z=k[1],w=k[2],x=k[3];else{l=p(a,b,-n),a=l.x,b=l.y,l=p(i,j,-n),i=l.x,j=l.y;var q=(U.cos(Z/180*e),U.sin(Z/180*e),(a-i)/2),r=(b-j)/2,s=q*q/(c*c)+r*r/(d*d);s>1&&(s=U.sqrt(s),c=s*c,d=s*d);var t=c*c,u=d*d,v=(g==h?-1:1)*U.sqrt(X((t*u-t*r*r-u*q*q)/(t*r*r+u*q*q))),w=v*c*r/d+(a+i)/2,x=v*-d*q/c+(b+j)/2,y=U.asin(((b-x)/d).toFixed(9)),z=U.asin(((j-x)/d).toFixed(9));y=w>a?Z-y:y,z=w>i?Z-z:z,0>y&&(y=2*Z+y),0>z&&(z=2*Z+z),h&&y>z&&(y-=2*Z),!h&&z>y&&(z-=2*Z)}var A=z-y;if(X(A)>m){var B=z,C=i,D=j;z=y+m*(h&&z>y?1:-1),i=w+c*U.cos(z),j=x+d*U.sin(z),o=Ob(i,j,c,d,e,0,h,C,D,[z,B,w,x])}A=z-y;var E=U.cos(y),F=U.sin(y),G=U.cos(z),H=U.sin(z),I=U.tan(A/4),J=4/3*c*I,K=4/3*d*I,M=[a,b],N=[a+J*F,b-K*E],O=[i+J*H,j-K*G],P=[i,j];if(N[0]=2*M[0]-N[0],N[1]=2*M[1]-N[1],k)return[N,O,P][L](o);o=[N,O,P][L](o).join()[Q](",");for(var R=[],S=0,T=o.length;T>S;S++)R[S]=S%2?p(o[S-1],o[S],n).y:p(o[S],o[S+1],n).x;return R},Pb=function(a,b,c,d,e,f,g,h,i){var j=1-i;return{x:Y(j,3)*a+3*Y(j,2)*i*c+3*j*i*i*e+Y(i,3)*g,y:Y(j,3)*b+3*Y(j,2)*i*d+3*j*i*i*f+Y(i,3)*h}},Qb=f(function(a,b,c,d,e,f,g,h){var i,j=e-2*c+a-(g-2*e+c),k=2*(c-a)-2*(e-c),l=a-c,m=(-k+U.sqrt(k*k-4*j*l))/2/j,n=(-k-U.sqrt(k*k-4*j*l))/2/j,o=[b,h],p=[a,g];return X(m)>"1e12"&&(m=.5),X(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Pb(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Pb(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),j=f-2*d+b-(h-2*f+d),k=2*(d-b)-2*(f-d),l=b-d,m=(-k+U.sqrt(k*k-4*j*l))/2/j,n=(-k-U.sqrt(k*k-4*j*l))/2/j,X(m)>"1e12"&&(m=.5),X(n)>"1e12"&&(n=.5),m>0&&1>m&&(i=Pb(a,b,c,d,e,f,g,h,m),p.push(i.x),o.push(i.y)),n>0&&1>n&&(i=Pb(a,b,c,d,e,f,g,h,n),p.push(i.x),o.push(i.y)),{min:{x:W[K](0,p),y:W[K](0,o)},max:{x:V[K](0,p),y:V[K](0,o)}}}),Rb=c._path2curve=f(function(a,b){var c=!b&&Hb(a);if(!b&&c.curve)return Jb(c.curve);for(var d=Lb(a),e=b&&Lb(b),f={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},g={x:0,y:0,bx:0,by:0,X:0,Y:0,qx:null,qy:null},h=(function(a,b,c){var d,e;if(!a)return["C",b.x,b.y,b.x,b.y,b.x,b.y];switch(!(a[0]in{T:1,Q:1})&&(b.qx=b.qy=null),a[0]){case"M":b.X=a[1],b.Y=a[2];break;case"A":a=["C"][L](Ob[K](0,[b.x,b.y][L](a.slice(1))));break;case"S":"C"==c||"S"==c?(d=2*b.x-b.bx,e=2*b.y-b.by):(d=b.x,e=b.y),a=["C",d,e][L](a.slice(1));break;case"T":"Q"==c||"T"==c?(b.qx=2*b.x-b.qx,b.qy=2*b.y-b.qy):(b.qx=b.x,b.qy=b.y),a=["C"][L](Nb(b.x,b.y,b.qx,b.qy,a[1],a[2]));break;case"Q":b.qx=a[1],b.qy=a[2],a=["C"][L](Nb(b.x,b.y,a[1],a[2],a[3],a[4]));break;case"L":a=["C"][L](Mb(b.x,b.y,a[1],a[2]));break;case"H":a=["C"][L](Mb(b.x,b.y,a[1],b.y));break;case"V":a=["C"][L](Mb(b.x,b.y,b.x,a[1]));break;case"Z":a=["C"][L](Mb(b.x,b.y,b.X,b.Y))}return a}),i=function(a,b){if(a[b].length>7){a[b].shift();for(var c=a[b];c.length;)a.splice(b++,0,["C"][L](c.splice(0,6)));a.splice(b,1),l=V(d.length,e&&e.length||0)}},j=function(a,b,c,f,g){a&&b&&"M"==a[g][0]&&"M"!=b[g][0]&&(b.splice(g,0,["M",f.x,f.y]),c.bx=0,c.by=0,c.x=a[g][1],c.y=a[g][2],l=V(d.length,e&&e.length||0))},k=0,l=V(d.length,e&&e.length||0);l>k;k++){d[k]=h(d[k],f),i(d,k),e&&(e[k]=h(e[k],g)),e&&i(e,k),j(d,e,f,g,k),j(e,d,g,f,k);var m=d[k],n=e&&e[k],o=m.length,p=e&&n.length;f.x=m[o-2],f.y=m[o-1],f.bx=gb(m[o-4])||f.x,f.by=gb(m[o-3])||f.y,g.bx=e&&(gb(n[p-4])||g.x),g.by=e&&(gb(n[p-3])||g.y),g.x=e&&n[p-2],g.y=e&&n[p-1]}return e||(c.curve=Jb(d)),e?[d,e]:d},null,Jb),Sb=(c._parseDots=f(function(a){for(var b=[],d=0,e=a.length;e>d;d++){var f={},g=a[d].match(/^([^:]*):?([\d\.]*)/);if(f.color=c.getRGB(g[1]),f.color.error)return null;f.color=f.color.hex,g[2]&&(f.offset=g[2]+"%"),b.push(f)}for(d=1,e=b.length-1;e>d;d++)if(!b[d].offset){for(var h=gb(b[d-1].offset||0),i=0,j=d+1;e>j;j++)if(b[j].offset){i=b[j].offset;break}i||(i=100,j=e),i=gb(i);for(var k=(i-h)/(j-d+1);j>d;d++)h+=k,b[d].offset=h+"%"}return b}),c._tear=function(a,b){a==b.top&&(b.top=a.prev),a==b.bottom&&(b.bottom=a.next),a.next&&(a.next.prev=a.prev),a.prev&&(a.prev.next=a.next)}),Tb=(c._tofront=function(a,b){b.top!==a&&(Sb(a,b),a.next=null,a.prev=b.top,b.top.next=a,b.top=a)},c._toback=function(a,b){b.bottom!==a&&(Sb(a,b),a.next=b.bottom,a.prev=null,b.bottom.prev=a,b.bottom=a)},c._insertafter=function(a,b,c){Sb(a,c),b==c.top&&(c.top=a),b.next&&(b.next.prev=a),a.next=b.next,a.prev=b,b.next=a},c._insertbefore=function(a,b,c){Sb(a,c),b==c.bottom&&(c.bottom=a),b.prev&&(b.prev.next=a),a.prev=b.prev,b.prev=a,a.next=b},c.toMatrix=function(a,b){var c=Ib(a),d={_:{transform:N},getBBox:function(){return c}};return Ub(d,b),d.matrix}),Ub=(c.transformPath=function(a,b){return yb(a,Tb(a,b))},c._extractTransform=function(a,b){if(null==b)return a._.transform;b=P(b).replace(/\.{3}|\u2026/g,a._.transform||N);var d=c.parseTransformString(b),e=0,f=0,g=0,h=1,i=1,j=a._,k=new o;if(j.transform=d||[],d)for(var l=0,m=d.length;m>l;l++){var n,p,q,r,s,t=d[l],u=t.length,v=P(t[0]).toLowerCase(),w=t[0]!=v,x=w?k.invert():0;
"t"==v&&3==u?w?(n=x.x(0,0),p=x.y(0,0),q=x.x(t[1],t[2]),r=x.y(t[1],t[2]),k.translate(q-n,r-p)):k.translate(t[1],t[2]):"r"==v?2==u?(s=s||a.getBBox(1),k.rotate(t[1],s.x+s.width/2,s.y+s.height/2),e+=t[1]):4==u&&(w?(q=x.x(t[2],t[3]),r=x.y(t[2],t[3]),k.rotate(t[1],q,r)):k.rotate(t[1],t[2],t[3]),e+=t[1]):"s"==v?2==u||3==u?(s=s||a.getBBox(1),k.scale(t[1],t[u-1],s.x+s.width/2,s.y+s.height/2),h*=t[1],i*=t[u-1]):5==u&&(w?(q=x.x(t[3],t[4]),r=x.y(t[3],t[4]),k.scale(t[1],t[2],q,r)):k.scale(t[1],t[2],t[3],t[4]),h*=t[1],i*=t[2]):"m"==v&&7==u&&k.add(t[1],t[2],t[3],t[4],t[5],t[6]),j.dirtyT=1,a.matrix=k}a.matrix=k,j.sx=h,j.sy=i,j.deg=e,j.dx=f=k.e,j.dy=g=k.f,1==h&&1==i&&!e&&j.bbox?(j.bbox.x+=+f,j.bbox.y+=+g):j.dirtyT=1}),Vb=function(a){var b=a[0];switch(b.toLowerCase()){case"t":return[b,0,0];case"m":return[b,1,0,0,1,0,0];case"r":return 4==a.length?[b,0,a[2],a[3]]:[b,0];case"s":return 5==a.length?[b,1,1,a[3],a[4]]:3==a.length?[b,1,1]:[b,1]}},Wb=c._equaliseTransform=function(a,b){b=P(b).replace(/\.{3}|\u2026/g,a),a=c.parseTransformString(a)||[],b=c.parseTransformString(b)||[];for(var d,e,f,g,h=V(a.length,b.length),i=[],j=[],k=0;h>k;k++){if(f=a[k]||Vb(b[k]),g=b[k]||Vb(f),f[0]!=g[0]||"r"==f[0].toLowerCase()&&(f[2]!=g[2]||f[3]!=g[3])||"s"==f[0].toLowerCase()&&(f[3]!=g[3]||f[4]!=g[4]))return;for(i[k]=[],j[k]=[],d=0,e=V(f.length,g.length);e>d;d++)d in f&&(i[k][d]=f[d]),d in g&&(j[k][d]=g[d])}return{from:i,to:j}};c._getContainer=function(a,b,d,e){var f;return f=null!=e||c.is(a,"object")?a:H.doc.getElementById(a),null!=f?f.tagName?null==b?{container:f,width:f.style.pixelWidth||f.offsetWidth,height:f.style.pixelHeight||f.offsetHeight}:{container:f,width:b,height:d}:{container:1,x:a,y:b,width:d,height:e}:void 0},c.pathToRelative=Kb,c._engine={},c.path2curve=Rb,c.matrix=function(a,b,c,d,e,f){return new o(a,b,c,d,e,f)},function(a){function b(a){return a[0]*a[0]+a[1]*a[1]}function d(a){var c=U.sqrt(b(a));a[0]&&(a[0]/=c),a[1]&&(a[1]/=c)}a.add=function(a,b,c,d,e,f){var g,h,i,j,k=[[],[],[]],l=[[this.a,this.c,this.e],[this.b,this.d,this.f],[0,0,1]],m=[[a,c,e],[b,d,f],[0,0,1]];for(a&&a instanceof o&&(m=[[a.a,a.c,a.e],[a.b,a.d,a.f],[0,0,1]]),g=0;3>g;g++)for(h=0;3>h;h++){for(j=0,i=0;3>i;i++)j+=l[g][i]*m[i][h];k[g][h]=j}this.a=k[0][0],this.b=k[1][0],this.c=k[0][1],this.d=k[1][1],this.e=k[0][2],this.f=k[1][2]},a.invert=function(){var a=this,b=a.a*a.d-a.b*a.c;return new o(a.d/b,-a.b/b,-a.c/b,a.a/b,(a.c*a.f-a.d*a.e)/b,(a.b*a.e-a.a*a.f)/b)},a.clone=function(){return new o(this.a,this.b,this.c,this.d,this.e,this.f)},a.translate=function(a,b){this.add(1,0,0,1,a,b)},a.scale=function(a,b,c,d){null==b&&(b=a),(c||d)&&this.add(1,0,0,1,c,d),this.add(a,0,0,b,0,0),(c||d)&&this.add(1,0,0,1,-c,-d)},a.rotate=function(a,b,d){a=c.rad(a),b=b||0,d=d||0;var e=+U.cos(a).toFixed(9),f=+U.sin(a).toFixed(9);this.add(e,f,-f,e,b,d),this.add(1,0,0,1,-b,-d)},a.x=function(a,b){return a*this.a+b*this.c+this.e},a.y=function(a,b){return a*this.b+b*this.d+this.f},a.get=function(a){return+this[P.fromCharCode(97+a)].toFixed(4)},a.toString=function(){return c.svg?"matrix("+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)].join()+")":[this.get(0),this.get(2),this.get(1),this.get(3),0,0].join()},a.toFilter=function(){return"progid:DXImageTransform.Microsoft.Matrix(M11="+this.get(0)+", M12="+this.get(2)+", M21="+this.get(1)+", M22="+this.get(3)+", Dx="+this.get(4)+", Dy="+this.get(5)+", sizingmethod='auto expand')"},a.offset=function(){return[this.e.toFixed(4),this.f.toFixed(4)]},a.split=function(){var a={};a.dx=this.e,a.dy=this.f;var e=[[this.a,this.c],[this.b,this.d]];a.scalex=U.sqrt(b(e[0])),d(e[0]),a.shear=e[0][0]*e[1][0]+e[0][1]*e[1][1],e[1]=[e[1][0]-e[0][0]*a.shear,e[1][1]-e[0][1]*a.shear],a.scaley=U.sqrt(b(e[1])),d(e[1]),a.shear/=a.scaley;var f=-e[0][1],g=e[1][1];return 0>g?(a.rotate=c.deg(U.acos(g)),0>f&&(a.rotate=360-a.rotate)):a.rotate=c.deg(U.asin(f)),a.isSimple=!(+a.shear.toFixed(9)||a.scalex.toFixed(9)!=a.scaley.toFixed(9)&&a.rotate),a.isSuperSimple=!+a.shear.toFixed(9)&&a.scalex.toFixed(9)==a.scaley.toFixed(9)&&!a.rotate,a.noRotation=!+a.shear.toFixed(9)&&!a.rotate,a},a.toTransformString=function(a){var b=a||this[Q]();return b.isSimple?(b.scalex=+b.scalex.toFixed(4),b.scaley=+b.scaley.toFixed(4),b.rotate=+b.rotate.toFixed(4),(b.dx||b.dy?"t"+[b.dx,b.dy]:N)+(1!=b.scalex||1!=b.scaley?"s"+[b.scalex,b.scaley,0,0]:N)+(b.rotate?"r"+[b.rotate,0,0]:N)):"m"+[this.get(0),this.get(1),this.get(2),this.get(3),this.get(4),this.get(5)]}}(o.prototype);var Xb=navigator.userAgent.match(/Version\/(.*?)\s/)||navigator.userAgent.match(/Chrome\/(\d+)/);C.safari="Apple Computer, Inc."==navigator.vendor&&(Xb&&Xb[1]<4||"iP"==navigator.platform.slice(0,2))||"Google Inc."==navigator.vendor&&Xb&&Xb[1]<8?function(){var a=this.rect(-99,-99,this.width+99,this.height+99).attr({stroke:"none"});setTimeout(function(){a.remove()})}:tb;for(var Yb=function(){this.returnValue=!1},Zb=function(){return this.originalEvent.preventDefault()},$b=function(){this.cancelBubble=!0},_b=function(){return this.originalEvent.stopPropagation()},ac=function(a){var b=H.doc.documentElement.scrollTop||H.doc.body.scrollTop,c=H.doc.documentElement.scrollLeft||H.doc.body.scrollLeft;return{x:a.clientX+c,y:a.clientY+b}},bc=function(){return H.doc.addEventListener?function(a,b,c,d){var e=function(a){var b=ac(a);return c.call(d,a,b.x,b.y)};if(a.addEventListener(b,e,!1),M&&S[b]){var f=function(b){for(var e=ac(b),f=b,g=0,h=b.targetTouches&&b.targetTouches.length;h>g;g++)if(b.targetTouches[g].target==a){b=b.targetTouches[g],b.originalEvent=f,b.preventDefault=Zb,b.stopPropagation=_b;break}return c.call(d,b,e.x,e.y)};a.addEventListener(S[b],f,!1)}return function(){return a.removeEventListener(b,e,!1),M&&S[b]&&a.removeEventListener(S[b],e,!1),!0}}:H.doc.attachEvent?function(a,b,c,d){var e=function(a){a=a||H.win.event;var b=H.doc.documentElement.scrollTop||H.doc.body.scrollTop,e=H.doc.documentElement.scrollLeft||H.doc.body.scrollLeft,f=a.clientX+e,g=a.clientY+b;return a.preventDefault=a.preventDefault||Yb,a.stopPropagation=a.stopPropagation||$b,c.call(d,a,f,g)};a.attachEvent("on"+b,e);var f=function(){return a.detachEvent("on"+b,e),!0};return f}:void 0}(),cc=[],dc=function(a){for(var c,d=a.clientX,e=a.clientY,f=H.doc.documentElement.scrollTop||H.doc.body.scrollTop,g=H.doc.documentElement.scrollLeft||H.doc.body.scrollLeft,h=cc.length;h--;){if(c=cc[h],M&&a.touches){for(var i,j=a.touches.length;j--;)if(i=a.touches[j],i.identifier==c.el._drag.id){d=i.clientX,e=i.clientY,(a.originalEvent?a.originalEvent:a).preventDefault();break}}else a.preventDefault();var k,l=c.el.node,m=l.nextSibling,n=l.parentNode,o=l.style.display;H.win.opera&&n.removeChild(l),l.style.display="none",k=c.el.paper.getElementByPoint(d,e),l.style.display=o,H.win.opera&&(m?n.insertBefore(l,m):n.appendChild(l)),k&&b("raphael.drag.over."+c.el.id,c.el,k),d+=g,e+=f;var p={cancelIt:!1};b("raphael.drag.move."+c.el.id,c.move_scope||c.el,d-c.el._drag.x,e-c.el._drag.y,d,e,a,p),p.cancelIt&&ec()}},ec=function(a){c.unmousemove(dc).unmouseup(ec);for(var d,e=cc.length;e--;)d=cc[e],d.el._drag={},b("raphael.drag.end."+d.el.id,d.end_scope||d.start_scope||d.move_scope||d.el,a);cc=[]},fc=c.el={},gc=R.length;gc--;)!function(a){c[a]=fc[a]=function(b,d){return c.is(b,"function")&&(this.events=this.events||[],this.events.push({name:a,f:b,unbind:bc(this.shape||this.node||H.doc,a,b,d||this)})),this},c["un"+a]=fc["un"+a]=function(b){for(var d=this.events||[],e=d.length;e--;)d[e].name!=a||!c.is(b,"undefined")&&d[e].f!=b||(d[e].unbind(),d.splice(e,1),!d.length&&delete this.events);return this}}(R[gc]);fc.data=function(a,d){var e=rb[this.id]=rb[this.id]||{};if(0==arguments.length)return e;if(1==arguments.length){if(c.is(a,"object")){for(var f in a)a[G](f)&&this.data(f,a[f]);return this}return b("raphael.data.get."+this.id,this,e[a],a),e[a]}return e[a]=d,b("raphael.data.set."+this.id,this,d,a),this},fc.removeData=function(a){return null==a?rb[this.id]={}:rb[this.id]&&delete rb[this.id][a],this},fc.getData=function(){return d(rb[this.id]||{})},fc.hover=function(a,b,c,d){return this.mouseover(a,c).mouseout(b,d||c)},fc.unhover=function(a,b){return this.unmouseover(a).unmouseout(b)};var hc=[];fc.drag=function(a,d,e,f,g,h){function i(i){var j=i.clientX,k=i.clientY,l=H.doc.documentElement.scrollTop||H.doc.body.scrollTop,m=H.doc.documentElement.scrollLeft||H.doc.body.scrollLeft;if(this._drag.id=i.identifier,M&&i.touches)for(var n,o=i.touches.length;o--;)if(n=i.touches[o],this._drag.id=n.identifier,n.identifier==this._drag.id){j=n.clientX,k=n.clientY;break}this._drag.x=j+m,this._drag.y=k+l,!cc.length&&c.mousemove(dc).mouseup(ec),cc.push({el:this,move_scope:f,start_scope:g,end_scope:h}),d&&b.on("raphael.drag.start."+this.id,d),a&&b.on("raphael.drag.move."+this.id,a),e&&b.on("raphael.drag.end."+this.id,e);var p={cancelIt:!1};return b("raphael.drag.start."+this.id,g||f||this,i.clientX+m,i.clientY+l,i,p),p.cancelIt?void ec():void(i.originalEvent||i).preventDefault()}return this._drag={},hc.push({el:this,start:i}),this.mousedown(i),this},fc.onDragOver=function(a){a?b.on("raphael.drag.over."+this.id,a):b.unbind("raphael.drag.over."+this.id)},fc.undrag=function(){for(var a=hc.length;a--;)hc[a].el==this&&(this.unmousedown(hc[a].start),hc.splice(a,1),b.unbind("raphael.drag.*."+this.id));!hc.length&&c.unmousemove(dc).unmouseup(ec),cc=[]},C.circle=function(a,b,d){var e=c._engine.circle(this,a||0,b||0,d||0);return this.__set__&&this.__set__.push(e),e},C.rect=function(a,b,d,e,f){var g=c._engine.rect(this,a||0,b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},C.ellipse=function(a,b,d,e){var f=c._engine.ellipse(this,a||0,b||0,d||0,e||0);return this.__set__&&this.__set__.push(f),f},C.path=function(a){a&&!c.is(a,_)&&!c.is(a[0],ab)&&(a+=N);var b=c._engine.path(c.format[K](c,arguments),this);return this.__set__&&this.__set__.push(b),b},C.image=function(a,b,d,e,f){var g=c._engine.image(this,a||"about:blank",b||0,d||0,e||0,f||0);return this.__set__&&this.__set__.push(g),g},C.text=function(a,b,d){var e=c._engine.text(this,a||0,b||0,P(d));return this.__set__&&this.__set__.push(e),e},C.set=function(a){!c.is(a,"array")&&(a=Array.prototype.splice.call(arguments,0,arguments.length));var b=new tc(a);return this.__set__&&this.__set__.push(b),b.paper=this,b.type="set",b},C.setStart=function(a){this.__set__=a||this.set()},C.setFinish=function(){var a=this.__set__;return delete this.__set__,a},C.setSize=function(a,b){return c._engine.setSize.call(this,a,b)},C.setViewBox=function(a,b,d,e,f){return c._engine.setViewBox.call(this,a,b,d,e,f)},C.top=C.bottom=null,C.raphael=c;var ic=function(a){var b=a.getBoundingClientRect(),c=a.ownerDocument,d=c.body,e=c.documentElement,f=e.clientTop||d.clientTop||0,g=e.clientLeft||d.clientLeft||0,h=b.top+(H.win.pageYOffset||e.scrollTop||d.scrollTop)-f,i=b.left+(H.win.pageXOffset||e.scrollLeft||d.scrollLeft)-g;return{y:h,x:i}};C.getElementByPoint=function(a,b){var c=this,d=c.canvas,e=H.doc.elementFromPoint(a,b);if(H.win.opera&&"svg"==e.tagName){var f=ic(d),g=d.createSVGRect();g.x=a-f.x,g.y=b-f.y,g.width=g.height=1;var h=d.getIntersectionList(g,null);h.length&&(e=h[h.length-1])}if(!e)return null;for(;e.parentNode&&e!=d.parentNode&&!e.raphael;)e=e.parentNode;return e==c.canvas.parentNode&&(e=d),e=e&&e.raphael?c.getById(e.raphaelid):null},C.getElementsByBBox=function(a){var b=this.set();return this.forEach(function(d){c.isBBoxIntersect(d.getBBox(),a)&&b.push(d)}),b},C.getById=function(a){for(var b=this.bottom;b;){if(b.id==a)return b;b=b.next}return null},C.forEach=function(a,b){for(var c=this.bottom;c;){if(a.call(b,c)===!1)return this;c=c.next}return this},C.getElementsByPoint=function(a,b){var c=this.set();return this.forEach(function(d){d.isPointInside(a,b)&&c.push(d)}),c},fc.isPointInside=function(a,b){var d=this.realPath=xb[this.type](this);return this.attr("transform")&&this.attr("transform").length&&(d=c.transformPath(d,this.attr("transform"))),c.isPointInsidePath(d,a,b)},fc.getBBox=function(a){if(this.removed)return{};var b=this._;return a?((b.dirty||!b.bboxwt)&&(this.realPath=xb[this.type](this),b.bboxwt=Ib(this.realPath),b.bboxwt.toString=p,b.dirty=0),b.bboxwt):((b.dirty||b.dirtyT||!b.bbox)&&((b.dirty||!this.realPath)&&(b.bboxwt=0,this.realPath=xb[this.type](this)),b.bbox=Ib(yb(this.realPath,this.matrix)),b.bbox.toString=p,b.dirty=b.dirtyT=0),b.bbox)},fc.clone=function(){if(this.removed)return null;var a=this.paper[this.type]().attr(this.attr());return this.__set__&&this.__set__.push(a),a},fc.glow=function(a){if("text"==this.type)return null;a=a||{};var b={width:(a.width||10)+(+this.attr("stroke-width")||1),fill:a.fill||!1,opacity:a.opacity||.5,offsetx:a.offsetx||0,offsety:a.offsety||0,color:a.color||"#000"},c=b.width/2,d=this.paper,e=d.set(),f=this.realPath||xb[this.type](this);f=this.matrix?yb(f,this.matrix):f;for(var g=1;c+1>g;g++)e.push(d.path(f).attr({stroke:b.color,fill:b.fill?b.color:"none","stroke-linejoin":"round","stroke-linecap":"round","stroke-width":+(b.width/c*g).toFixed(3),opacity:+(b.opacity/c).toFixed(3)}));return e.insertBefore(this).translate(b.offsetx,b.offsety)};var jc=function(a,b,d,e,f,g,h,i,l){return null==l?j(a,b,d,e,f,g,h,i):c.findDotsAtSegment(a,b,d,e,f,g,h,i,k(a,b,d,e,f,g,h,i,l))},kc=function(a,b){return function(d,e,f){d=Rb(d);for(var g,h,i,j,k,l="",m={},n=0,o=0,p=d.length;p>o;o++){if(i=d[o],"M"==i[0])g=+i[1],h=+i[2];else{if(j=jc(g,h,i[1],i[2],i[3],i[4],i[5],i[6]),n+j>e){if(b&&!m.start){if(k=jc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),l+=["C"+k.start.x,k.start.y,k.m.x,k.m.y,k.x,k.y],f)return l;m.start=l,l=["M"+k.x,k.y+"C"+k.n.x,k.n.y,k.end.x,k.end.y,i[5],i[6]].join(),n+=j,g=+i[5],h=+i[6];continue}if(!a&&!b)return k=jc(g,h,i[1],i[2],i[3],i[4],i[5],i[6],e-n),{x:k.x,y:k.y,alpha:k.alpha}}n+=j,g=+i[5],h=+i[6]}l+=i.shift()+i}return m.end=l,k=a?n:b?m:c.findDotsAtSegment(g,h,i[0],i[1],i[2],i[3],i[4],i[5],1),k.alpha&&(k={x:k.x,y:k.y,alpha:k.alpha}),k}},lc=kc(1),mc=kc(),nc=kc(0,1);c.getTotalLength=lc,c.getPointAtLength=mc,c.getSubpath=function(a,b,c){if(this.getTotalLength(a)-c<1e-6)return nc(a,b).end;var d=nc(a,c,1);return b?nc(d,b).end:d},fc.getTotalLength=function(){var a=this.getPath();if(a)return this.node.getTotalLength?this.node.getTotalLength():lc(a)},fc.getPointAtLength=function(a){var b=this.getPath();if(b)return mc(b,a)},fc.getPath=function(){var a,b=c._getPath[this.type];if("text"!=this.type&&"set"!=this.type)return b&&(a=b(this)),a},fc.getSubpath=function(a,b){var d=this.getPath();if(d)return c.getSubpath(d,a,b)};var oc=c.easing_formulas={linear:function(a){return a},"<":function(a){return Y(a,1.7)},">":function(a){return Y(a,.48)},"<>":function(a){var b=.48-a/1.04,c=U.sqrt(.1734+b*b),d=c-b,e=Y(X(d),1/3)*(0>d?-1:1),f=-c-b,g=Y(X(f),1/3)*(0>f?-1:1),h=e+g+.5;return 3*(1-h)*h*h+h*h*h},backIn:function(a){var b=1.70158;return a*a*((b+1)*a-b)},backOut:function(a){a-=1;var b=1.70158;return a*a*((b+1)*a+b)+1},elastic:function(a){return a==!!a?a:Y(2,-10*a)*U.sin(2*(a-.075)*Z/.3)+1},bounce:function(a){var b,c=7.5625,d=2.75;return 1/d>a?b=c*a*a:2/d>a?(a-=1.5/d,b=c*a*a+.75):2.5/d>a?(a-=2.25/d,b=c*a*a+.9375):(a-=2.625/d,b=c*a*a+.984375),b}};oc.easeIn=oc["ease-in"]=oc["<"],oc.easeOut=oc["ease-out"]=oc[">"],oc.easeInOut=oc["ease-in-out"]=oc["<>"],oc["back-in"]=oc.backIn,oc["back-out"]=oc.backOut;var pc=[],qc=a.requestAnimationFrame||a.webkitRequestAnimationFrame||a.mozRequestAnimationFrame||a.oRequestAnimationFrame||a.msRequestAnimationFrame||function(a){setTimeout(a,16)},rc=function(){for(var a=+new Date,d=0;d<pc.length;d++){var e=pc[d];if(!e.el.removed&&!e.paused){var f,g,h=a-e.start,i=e.ms,j=e.easing,k=e.from,l=e.diff,m=e.to,n=(e.t,e.el),o={},p={};if(e.initstatus?(h=(e.initstatus*e.anim.top-e.prev)/(e.percent-e.prev)*i,e.status=e.initstatus,delete e.initstatus,e.stop&&pc.splice(d--,1)):e.status=(e.prev+(e.percent-e.prev)*(h/i))/e.anim.top,!(0>h))if(i>h){var q=j(h/i);for(var r in k)if(k[G](r)){switch(kb[r]){case $:f=+k[r]+q*i*l[r];break;case"colour":f="rgb("+[sc(fb(k[r].r+q*i*l[r].r)),sc(fb(k[r].g+q*i*l[r].g)),sc(fb(k[r].b+q*i*l[r].b))].join(",")+")";break;case"path":f=[];for(var t=0,u=k[r].length;u>t;t++){f[t]=[k[r][t][0]];for(var v=1,w=k[r][t].length;w>v;v++)f[t][v]=+k[r][t][v]+q*i*l[r][t][v];f[t]=f[t].join(O)}f=f.join(O);break;case"transform":if(l[r].real)for(f=[],t=0,u=k[r].length;u>t;t++)for(f[t]=[k[r][t][0]],v=1,w=k[r][t].length;w>v;v++)f[t][v]=k[r][t][v]+q*i*l[r][t][v];else{var x=function(a){return+k[r][a]+q*i*l[r][a]};f=[["m",x(0),x(1),x(2),x(3),x(4),x(5)]]}break;case"csv":if("clip-rect"==r)for(f=[],t=4;t--;)f[t]=+k[r][t]+q*i*l[r][t];break;default:var y=[][L](k[r]);for(f=[],t=n.paper.customAttributes[r].length;t--;)f[t]=+y[t]+q*i*l[r][t]}o[r]=f}n.attr(o),function(a,c,d){setTimeout(function(){b("raphael.anim.frame."+a,c,d)})}(n.id,n,e.anim)}else{if(function(a,d,e){setTimeout(function(){b("raphael.anim.frame."+d.id,d,e),b("raphael.anim.finish."+d.id,d,e),c.is(a,"function")&&a.call(d)})}(e.callback,n,e.anim),n.attr(m),pc.splice(d--,1),e.repeat>1&&!e.next){for(g in m)m[G](g)&&(p[g]=e.totalOrigin[g]);e.el.attr(p),s(e.anim,e.el,e.anim.percents[0],null,e.totalOrigin,e.repeat-1)}e.next&&!e.stop&&s(e.anim,e.el,e.next,null,e.totalOrigin,e.repeat)}}}c.svg&&n&&n.paper&&n.paper.safari(),pc.length&&qc(rc)},sc=function(a){return a>255?255:0>a?0:a};fc.animateWith=function(a,b,d,e,f,g){var h=this;if(h.removed)return g&&g.call(h),h;var i=d instanceof r?d:c.animation(d,e,f,g);s(i,h,i.percents[0],null,h.attr());for(var j=0,k=pc.length;k>j;j++)if(pc[j].anim==b&&pc[j].el==a){pc[k-1].start=pc[j].start;break}return h},fc.onAnimation=function(a){return a?b.on("raphael.anim.frame."+this.id,a):b.unbind("raphael.anim.frame."+this.id),this},r.prototype.delay=function(a){var b=new r(this.anim,this.ms);return b.times=this.times,b.del=+a||0,b},r.prototype.repeat=function(a){var b=new r(this.anim,this.ms);return b.del=this.del,b.times=U.floor(V(a,0))||1,b},c.animation=function(a,b,d,e){if(a instanceof r)return a;(c.is(d,"function")||!d)&&(e=e||d||null,d=null),a=Object(a),b=+b||0;var f,g,h={};for(g in a)a[G](g)&&gb(g)!=g&&gb(g)+"%"!=g&&(f=!0,h[g]=a[g]);return f?(d&&(h.easing=d),e&&(h.callback=e),new r({100:h},b)):new r(a,b)},fc.animate=function(a,b,d,e){var f=this;if(f.removed)return e&&e.call(f),f;var g=a instanceof r?a:c.animation(a,b,d,e);return s(g,f,g.percents[0],null,f.attr()),f},fc.setTime=function(a,b){return a&&null!=b&&this.status(a,W(b,a.ms)/a.ms),this},fc.status=function(a,b){var c,d,e=[],f=0;if(null!=b)return s(a,this,-1,W(b,1)),this;for(c=pc.length;c>f;f++)if(d=pc[f],d.el.id==this.id&&(!a||d.anim==a)){if(a)return d.status;e.push({anim:d.anim,status:d.status})}return a?0:e},fc.pause=function(a){for(var c=0;c<pc.length;c++)pc[c].el.id!=this.id||a&&pc[c].anim!=a||b("raphael.anim.pause."+this.id,this,pc[c].anim)!==!1&&(pc[c].paused=!0);return this},fc.resume=function(a){for(var c=0;c<pc.length;c++)if(pc[c].el.id==this.id&&(!a||pc[c].anim==a)){var d=pc[c];b("raphael.anim.resume."+this.id,this,d.anim)!==!1&&(delete d.paused,this.status(d.anim,d.status))}return this},fc.stop=function(a){for(var c=0;c<pc.length;c++)pc[c].el.id!=this.id||a&&pc[c].anim!=a||b("raphael.anim.stop."+this.id,this,pc[c].anim)!==!1&&pc.splice(c--,1);return this},b.on("raphael.remove",t),b.on("raphael.clear",t),fc.toString=function(){return"Raphaël’s object"};var tc=function(a){if(this.items=[],this.length=0,this.type="set",a)for(var b=0,c=a.length;c>b;b++)!a[b]||a[b].constructor!=fc.constructor&&a[b].constructor!=tc||(this[this.items.length]=this.items[this.items.length]=a[b],this.length++)},uc=tc.prototype;uc.push=function(){for(var a,b,c=0,d=arguments.length;d>c;c++)a=arguments[c],!a||a.constructor!=fc.constructor&&a.constructor!=tc||(b=this.items.length,this[b]=this.items[b]=a,this.length++);return this},uc.pop=function(){return this.length&&delete this[this.length--],this.items.pop()},uc.forEach=function(a,b){for(var c=0,d=this.items.length;d>c;c++)if(a.call(b,this.items[c],c)===!1)return this;return this};for(var vc in fc)fc[G](vc)&&(uc[vc]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a][K](c,b)})}}(vc));uc.attr=function(a,b){if(a&&c.is(a,ab)&&c.is(a[0],"object"))for(var d=0,e=a.length;e>d;d++)this.items[d].attr(a[d]);else for(var f=0,g=this.items.length;g>f;f++)this.items[f].attr(a,b);return this},uc.clear=function(){for(;this.length;)this.pop()},uc.splice=function(a,b){a=0>a?V(this.length+a,0):a,b=V(0,W(this.length-a,b));var c,d=[],e=[],f=[];for(c=2;c<arguments.length;c++)f.push(arguments[c]);for(c=0;b>c;c++)e.push(this[a+c]);for(;c<this.length-a;c++)d.push(this[a+c]);var g=f.length;for(c=0;c<g+d.length;c++)this.items[a+c]=this[a+c]=g>c?f[c]:d[c-g];for(c=this.items.length=this.length-=b-g;this[c];)delete this[c++];return new tc(e)},uc.exclude=function(a){for(var b=0,c=this.length;c>b;b++)if(this[b]==a)return this.splice(b,1),!0},uc.animate=function(a,b,d,e){(c.is(d,"function")||!d)&&(e=d||null);var f,g,h=this.items.length,i=h,j=this;if(!h)return this;e&&(g=function(){!--h&&e.call(j)}),d=c.is(d,_)?d:g;var k=c.animation(a,b,d,g);for(f=this.items[--i].animate(k);i--;)this.items[i]&&!this.items[i].removed&&this.items[i].animateWith(f,k,k),this.items[i]&&!this.items[i].removed||h--;return this},uc.insertAfter=function(a){for(var b=this.items.length;b--;)this.items[b].insertAfter(a);return this},uc.getBBox=function(){for(var a=[],b=[],c=[],d=[],e=this.items.length;e--;)if(!this.items[e].removed){var f=this.items[e].getBBox();a.push(f.x),b.push(f.y),c.push(f.x+f.width),d.push(f.y+f.height)}return a=W[K](0,a),b=W[K](0,b),c=V[K](0,c),d=V[K](0,d),{x:a,y:b,x2:c,y2:d,width:c-a,height:d-b}},uc.clone=function(a){a=this.paper.set();for(var b=0,c=this.items.length;c>b;b++)a.push(this.items[b].clone());return a},uc.toString=function(){return"Raphaël‘s set"},uc.glow=function(a){var b=this.paper.set();return this.forEach(function(c){var d=c.glow(a);null!=d&&d.forEach(function(a){b.push(a)})}),b},uc.isPointInside=function(a,b){var c=!1;return this.forEach(function(d){return d.isPointInside(a,b)?(console.log("runned"),c=!0,!1):void 0}),c},c.registerFont=function(a){if(!a.face)return a;this.fonts=this.fonts||{};var b={w:a.w,face:{},glyphs:{}},c=a.face["font-family"];for(var d in a.face)a.face[G](d)&&(b.face[d]=a.face[d]);if(this.fonts[c]?this.fonts[c].push(b):this.fonts[c]=[b],!a.svg){b.face["units-per-em"]=hb(a.face["units-per-em"],10);for(var e in a.glyphs)if(a.glyphs[G](e)){var f=a.glyphs[e];if(b.glyphs[e]={w:f.w,k:{},d:f.d&&"M"+f.d.replace(/[mlcxtrv]/g,function(a){return{l:"L",c:"C",x:"z",t:"m",r:"l",v:"c"}[a]||"M"})+"z"},f.k)for(var g in f.k)f[G](g)&&(b.glyphs[e].k[g]=f.k[g])}}return a},C.getFont=function(a,b,d,e){if(e=e||"normal",d=d||"normal",b=+b||{normal:400,bold:700,lighter:300,bolder:800}[b]||400,c.fonts){var f=c.fonts[a];if(!f){var g=new RegExp("(^|\\s)"+a.replace(/[^\w\d\s+!~.:_-]/g,N)+"(\\s|$)","i");for(var h in c.fonts)if(c.fonts[G](h)&&g.test(h)){f=c.fonts[h];break}}var i;if(f)for(var j=0,k=f.length;k>j&&(i=f[j],i.face["font-weight"]!=b||i.face["font-style"]!=d&&i.face["font-style"]||i.face["font-stretch"]!=e);j++);return i}},C.print=function(a,b,d,e,f,g,h,i){g=g||"middle",h=V(W(h||0,1),-1),i=V(W(i||1,3),1);var j,k=P(d)[Q](N),l=0,m=0,n=N;if(c.is(e,"string")&&(e=this.getFont(e)),e){j=(f||16)/e.face["units-per-em"];for(var o=e.face.bbox[Q](D),p=+o[0],q=o[3]-o[1],r=0,s=+o[1]+("baseline"==g?q+ +e.face.descent:q/2),t=0,u=k.length;u>t;t++){if("\n"==k[t])l=0,w=0,m=0,r+=q*i;else{var v=m&&e.glyphs[k[t-1]]||{},w=e.glyphs[k[t]];l+=m?(v.w||e.w)+(v.k&&v.k[k[t]]||0)+e.w*h:0,m=1}w&&w.d&&(n+=c.transformPath(w.d,["t",l*j,r*j,"s",j,j,p,s,"t",(a-p)/j,(b-s)/j]))}}return this.path(n).attr({fill:"#000",stroke:"none"})},C.add=function(a){if(c.is(a,"array"))for(var b,d=this.set(),e=0,f=a.length;f>e;e++)b=a[e]||{},E[G](b.type)&&d.push(this[b.type]().attr(b));return d},c.format=function(a,b){var d=c.is(b,ab)?[0][L](b):arguments;return a&&c.is(a,_)&&d.length-1&&(a=a.replace(F,function(a,b){return null==d[++b]?N:d[b]})),a||N},c.fullfill=function(){var a=/\{([^\}]+)\}/g,b=/(?:(?:^|\.)(.+?)(?=\[|\.|$|\()|\[('|")(.+?)\2\])(\(\))?/g,c=function(a,c,d){var e=d;return c.replace(b,function(a,b,c,d,f){b=b||d,e&&(b in e&&(e=e[b]),"function"==typeof e&&f&&(e=e()))}),e=(null==e||e==d?a:e)+""};return function(b,d){return String(b).replace(a,function(a,b){return c(a,b,d)})}}(),c.ninja=function(){return I.was?H.win.Raphael=I.is:delete Raphael,c},c.st=uc,function(a,b,d){function e(){/in/.test(a.readyState)?setTimeout(e,9):c.eve("raphael.DOMload")}null==a.readyState&&a.addEventListener&&(a.addEventListener(b,d=function(){a.removeEventListener(b,d,!1),a.readyState="complete"},!1),a.readyState="loading"),e()}(document,"DOMContentLoaded"),b.on("raphael.DOMload",function(){B=!0}),function(){if(c.svg){var a="hasOwnProperty",b=String,d=parseFloat,e=parseInt,f=Math,g=f.max,h=f.abs,i=f.pow,j=/[, ]+/,k=c.eve,l="",m=" ",n="http://www.w3.org/1999/xlink",o={block:"M5,0 0,2.5 5,5z",classic:"M5,0 0,2.5 5,5 3.5,3 3.5,2z",diamond:"M2.5,0 5,2.5 2.5,5 0,2.5z",open:"M6,1 1,3.5 6,6",oval:"M2.5,0A2.5,2.5,0,0,1,2.5,5 2.5,2.5,0,0,1,2.5,0z"},p={};c.toString=function(){return"Your browser supports SVG.\nYou are running Raphaël "+this.version};var q=function(d,e){if(e){"string"==typeof d&&(d=q(d));for(var f in e)e[a](f)&&("xlink:"==f.substring(0,6)?d.setAttributeNS(n,f.substring(6),b(e[f])):d.setAttribute(f,b(e[f])))}else d=c._g.doc.createElementNS("http://www.w3.org/2000/svg",d),d.style&&(d.style.webkitTapHighlightColor="rgba(0,0,0,0)");return d},r=function(a,e){var j="linear",k=a.id+e,m=.5,n=.5,o=a.node,p=a.paper,r=o.style,s=c._g.doc.getElementById(k);if(!s){if(e=b(e).replace(c._radial_gradient,function(a,b,c){if(j="radial",b&&c){m=d(b),n=d(c);var e=2*(n>.5)-1;i(m-.5,2)+i(n-.5,2)>.25&&(n=f.sqrt(.25-i(m-.5,2))*e+.5)&&.5!=n&&(n=n.toFixed(5)-1e-5*e)}return l}),e=e.split(/\s*\-\s*/),"linear"==j){var t=e.shift();if(t=-d(t),isNaN(t))return null;var u=[0,0,f.cos(c.rad(t)),f.sin(c.rad(t))],v=1/(g(h(u[2]),h(u[3]))||1);u[2]*=v,u[3]*=v,u[2]<0&&(u[0]=-u[2],u[2]=0),u[3]<0&&(u[1]=-u[3],u[3]=0)}var w=c._parseDots(e);if(!w)return null;if(k=k.replace(/[\(\)\s,\xb0#]/g,"_"),a.gradient&&k!=a.gradient.id&&(p.defs.removeChild(a.gradient),delete a.gradient),!a.gradient){s=q(j+"Gradient",{id:k}),a.gradient=s,q(s,"radial"==j?{fx:m,fy:n}:{x1:u[0],y1:u[1],x2:u[2],y2:u[3],gradientTransform:a.matrix.invert()}),p.defs.appendChild(s);for(var x=0,y=w.length;y>x;x++)s.appendChild(q("stop",{offset:w[x].offset?w[x].offset:x?"100%":"0%","stop-color":w[x].color||"#fff"}))}}return q(o,{fill:"url(#"+k+")",opacity:1,"fill-opacity":1}),r.fill=l,r.opacity=1,r.fillOpacity=1,1},s=function(a){var b=a.getBBox(1);q(a.pattern,{patternTransform:a.matrix.invert()+" translate("+b.x+","+b.y+")"})},t=function(d,e,f){if("path"==d.type){for(var g,h,i,j,k,m=b(e).toLowerCase().split("-"),n=d.paper,r=f?"end":"start",s=d.node,t=d.attrs,u=t["stroke-width"],v=m.length,w="classic",x=3,y=3,z=5;v--;)switch(m[v]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":w=m[v];break;case"wide":y=5;break;case"narrow":y=2;break;case"long":x=5;break;case"short":x=2}if("open"==w?(x+=2,y+=2,z+=2,i=1,j=f?4:1,k={fill:"none",stroke:t.stroke}):(j=i=x/2,k={fill:t.stroke,stroke:"none"}),d._.arrows?f?(d._.arrows.endPath&&p[d._.arrows.endPath]--,d._.arrows.endMarker&&p[d._.arrows.endMarker]--):(d._.arrows.startPath&&p[d._.arrows.startPath]--,d._.arrows.startMarker&&p[d._.arrows.startMarker]--):d._.arrows={},"none"!=w){var A="raphael-marker-"+w,B="raphael-marker-"+r+w+x+y;c._g.doc.getElementById(A)?p[A]++:(n.defs.appendChild(q(q("path"),{"stroke-linecap":"round",d:o[w],id:A})),p[A]=1);var C,D=c._g.doc.getElementById(B);D?(p[B]++,C=D.getElementsByTagName("use")[0]):(D=q(q("marker"),{id:B,markerHeight:y,markerWidth:x,orient:"auto",refX:j,refY:y/2}),C=q(q("use"),{"xlink:href":"#"+A,transform:(f?"rotate(180 "+x/2+" "+y/2+") ":l)+"scale("+x/z+","+y/z+")","stroke-width":(1/((x/z+y/z)/2)).toFixed(4)}),D.appendChild(C),n.defs.appendChild(D),p[B]=1),q(C,k);var E=i*("diamond"!=w&&"oval"!=w);f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-E*u):(g=E*u,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),k={},k["marker-"+r]="url(#"+B+")",(h||g)&&(k.d=c.getSubpath(t.path,g,h)),q(s,k),d._.arrows[r+"Path"]=A,d._.arrows[r+"Marker"]=B,d._.arrows[r+"dx"]=E,d._.arrows[r+"Type"]=w,d._.arrows[r+"String"]=e}else f?(g=d._.arrows.startdx*u||0,h=c.getTotalLength(t.path)-g):(g=0,h=c.getTotalLength(t.path)-(d._.arrows.enddx*u||0)),d._.arrows[r+"Path"]&&q(s,{d:c.getSubpath(t.path,g,h)}),delete d._.arrows[r+"Path"],delete d._.arrows[r+"Marker"],delete d._.arrows[r+"dx"],delete d._.arrows[r+"Type"],delete d._.arrows[r+"String"];for(k in p)if(p[a](k)&&!p[k]){var F=c._g.doc.getElementById(k);F&&F.parentNode.removeChild(F)}}},u={"":[0],none:[0],"-":[3,1],".":[1,1],"-.":[3,1,1,1],"-..":[3,1,1,1,1,1],". ":[1,3],"- ":[4,3],"--":[8,3],"- .":[4,3,1,3],"--.":[8,3,1,3],"--..":[8,3,1,3,1,3]},v=function(a,c,d){if(c=u[b(c).toLowerCase()]){for(var e=a.attrs["stroke-width"]||"1",f={round:e,square:e,butt:0}[a.attrs["stroke-linecap"]||d["stroke-linecap"]]||0,g=[],h=c.length;h--;)g[h]=c[h]*e+(h%2?1:-1)*f;q(a.node,{"stroke-dasharray":g.join(",")})}},w=function(d,f){var i=d.node,k=d.attrs,m=i.style.visibility;i.style.visibility="hidden";for(var o in f)if(f[a](o)){if(!c._availableAttrs[a](o))continue;var p=f[o];switch(k[o]=p,o){case"blur":d.blur(p);break;case"href":case"title":var u=q("title"),w=c._g.doc.createTextNode(p);u.appendChild(w),i.appendChild(u);break;case"target":var x=i.parentNode;if("a"!=x.tagName.toLowerCase()){var u=q("a");x.insertBefore(u,i),u.appendChild(i),x=u}"target"==o?x.setAttributeNS(n,"show","blank"==p?"new":p):x.setAttributeNS(n,o,p);break;case"cursor":i.style.cursor=p;break;case"transform":d.transform(p);break;case"arrow-start":t(d,p);break;case"arrow-end":t(d,p,1);break;case"clip-rect":var z=b(p).split(j);if(4==z.length){d.clip&&d.clip.parentNode.parentNode.removeChild(d.clip.parentNode);var A=q("clipPath"),B=q("rect");A.id=c.createUUID(),q(B,{x:z[0],y:z[1],width:z[2],height:z[3]}),A.appendChild(B),d.paper.defs.appendChild(A),q(i,{"clip-path":"url(#"+A.id+")"}),d.clip=B}if(!p){var C=i.getAttribute("clip-path");if(C){var D=c._g.doc.getElementById(C.replace(/(^url\(#|\)$)/g,l));D&&D.parentNode.removeChild(D),q(i,{"clip-path":l}),delete d.clip}}break;case"path":"path"==d.type&&(q(i,{d:p?k.path=c._pathToAbsolute(p):"M0,0"}),d._.dirty=1,d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1)));break;case"width":if(i.setAttribute(o,p),d._.dirty=1,!k.fx)break;o="x",p=k.x;case"x":k.fx&&(p=-k.x-(k.width||0));case"rx":if("rx"==o&&"rect"==d.type)break;case"cx":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"height":if(i.setAttribute(o,p),d._.dirty=1,!k.fy)break;o="y",p=k.y;case"y":k.fy&&(p=-k.y-(k.height||0));case"ry":if("ry"==o&&"rect"==d.type)break;case"cy":i.setAttribute(o,p),d.pattern&&s(d),d._.dirty=1;break;case"r":"rect"==d.type?q(i,{rx:p,ry:p}):i.setAttribute(o,p),d._.dirty=1;break;case"src":"image"==d.type&&i.setAttributeNS(n,"href",p);break;case"stroke-width":(1!=d._.sx||1!=d._.sy)&&(p/=g(h(d._.sx),h(d._.sy))||1),d.paper._vbSize&&(p*=d.paper._vbSize),i.setAttribute(o,p),k["stroke-dasharray"]&&v(d,k["stroke-dasharray"],f),d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"stroke-dasharray":v(d,p,f);break;case"fill":var E=b(p).match(c._ISURL);if(E){A=q("pattern");var F=q("image");A.id=c.createUUID(),q(A,{x:0,y:0,patternUnits:"userSpaceOnUse",height:1,width:1}),q(F,{x:0,y:0,"xlink:href":E[1]}),A.appendChild(F),function(a){c._preload(E[1],function(){var b=this.offsetWidth,c=this.offsetHeight;q(a,{width:b,height:c}),q(F,{width:b,height:c}),d.paper.safari()})}(A),d.paper.defs.appendChild(A),q(i,{fill:"url(#"+A.id+")"}),d.pattern=A,d.pattern&&s(d);break}var G=c.getRGB(p);if(G.error){if(("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p)){if("opacity"in k||"fill-opacity"in k){var H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l));
if(H){var I=H.getElementsByTagName("stop");q(I[I.length-1],{"stop-opacity":("opacity"in k?k.opacity:1)*("fill-opacity"in k?k["fill-opacity"]:1)})}}k.gradient=p,k.fill="none";break}}else delete f.gradient,delete k.gradient,!c.is(k.opacity,"undefined")&&c.is(f.opacity,"undefined")&&q(i,{opacity:k.opacity}),!c.is(k["fill-opacity"],"undefined")&&c.is(f["fill-opacity"],"undefined")&&q(i,{"fill-opacity":k["fill-opacity"]});G[a]("opacity")&&q(i,{"fill-opacity":G.opacity>1?G.opacity/100:G.opacity});case"stroke":G=c.getRGB(p),i.setAttribute(o,G.hex),"stroke"==o&&G[a]("opacity")&&q(i,{"stroke-opacity":G.opacity>1?G.opacity/100:G.opacity}),"stroke"==o&&d._.arrows&&("startString"in d._.arrows&&t(d,d._.arrows.startString),"endString"in d._.arrows&&t(d,d._.arrows.endString,1));break;case"gradient":("circle"==d.type||"ellipse"==d.type||"r"!=b(p).charAt())&&r(d,p);break;case"opacity":k.gradient&&!k[a]("stroke-opacity")&&q(i,{"stroke-opacity":p>1?p/100:p});case"fill-opacity":if(k.gradient){H=c._g.doc.getElementById(i.getAttribute("fill").replace(/^url\(#|\)$/g,l)),H&&(I=H.getElementsByTagName("stop"),q(I[I.length-1],{"stop-opacity":p}));break}default:"font-size"==o&&(p=e(p,10)+"px");var J=o.replace(/(\-.)/g,function(a){return a.substring(1).toUpperCase()});i.style[J]=p,d._.dirty=1,i.setAttribute(o,p)}}y(d,f),i.style.visibility=m},x=1.2,y=function(d,f){if("text"==d.type&&(f[a]("text")||f[a]("font")||f[a]("font-size")||f[a]("x")||f[a]("y"))){var g=d.attrs,h=d.node,i=h.firstChild?e(c._g.doc.defaultView.getComputedStyle(h.firstChild,l).getPropertyValue("font-size"),10):10;if(f[a]("text")){for(g.text=f.text;h.firstChild;)h.removeChild(h.firstChild);for(var j,k=b(f.text).split("\n"),m=[],n=0,o=k.length;o>n;n++)j=q("tspan"),n&&q(j,{dy:i*x,x:g.x}),j.appendChild(c._g.doc.createTextNode(k[n])),h.appendChild(j),m[n]=j}else for(m=h.getElementsByTagName("tspan"),n=0,o=m.length;o>n;n++)n?q(m[n],{dy:i*x,x:g.x}):q(m[0],{dy:0});q(h,{x:g.x,y:g.y}),d._.dirty=1;var p=d._getBBox(),r=g.y-(p.y+p.height/2);r&&c.is(r,"finite")&&q(m[0],{dy:r})}},z=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.matrix=c.matrix(),this.realPath=null,this.paper=b,this.attrs=this.attrs||{},this._={transform:[],sx:1,sy:1,deg:0,dx:0,dy:0,dirty:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},A=c.el;z.prototype=A,A.constructor=z,c._engine.path=function(a,b){var c=q("path");b.canvas&&b.canvas.appendChild(c);var d=new z(c,b);return d.type="path",w(d,{fill:"none",stroke:"#000",path:a}),d},A.rotate=function(a,c,e){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this.transform(this._.transform.concat([["r",a,c,e]])),this},A.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(j),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3])),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this},A.translate=function(a,c){return this.removed?this:(a=b(a).split(j),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this.transform(this._.transform.concat([["t",a,c]])),this)},A.transform=function(b){var d=this._;if(null==b)return d.transform;if(c._extractTransform(this,b),this.clip&&q(this.clip,{transform:this.matrix.invert()}),this.pattern&&s(this),this.node&&q(this.node,{transform:this.matrix}),1!=d.sx||1!=d.sy){var e=this.attrs[a]("stroke-width")?this.attrs["stroke-width"]:1;this.attr({"stroke-width":e})}return this},A.hide=function(){return!this.removed&&this.paper.safari(this.node.style.display="none"),this},A.show=function(){return!this.removed&&this.paper.safari(this.node.style.display=""),this},A.remove=function(){if(!this.removed&&this.node.parentNode){var a=this.paper;a.__set__&&a.__set__.exclude(this),k.unbind("raphael.*.*."+this.id),this.gradient&&a.defs.removeChild(this.gradient),c._tear(this,a),"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.removeChild(this.node.parentNode):this.node.parentNode.removeChild(this.node);for(var b in this)this[b]="function"==typeof this[b]?c._removedFactory(b):null;this.removed=!0}},A._getBBox=function(){if("none"==this.node.style.display){this.show();var a=!0}var b={};try{b=this.node.getBBox()}catch(c){}finally{b=b||{}}return a&&this.hide(),b},A.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if("fill"==b&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;if("transform"==b)return this._.transform;for(var g=b.split(j),h={},i=0,l=g.length;l>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return l-1?h:h[g[0]]}if(null==d&&c.is(b,"array")){for(h={},i=0,l=b.length;l>i;i++)h[b[i]]=this.attr(b[i]);return h}if(null!=d){var m={};m[b]=d}else null!=b&&c.is(b,"object")&&(m=b);for(var n in m)k("raphael.attr."+n+"."+this.id,this,m[n]);for(n in this.paper.customAttributes)if(this.paper.customAttributes[a](n)&&m[a](n)&&c.is(this.paper.customAttributes[n],"function")){var o=this.paper.customAttributes[n].apply(this,[].concat(m[n]));this.attrs[n]=m[n];for(var p in o)o[a](p)&&(m[p]=o[p])}return w(this,m),this},A.toFront=function(){if(this.removed)return this;"a"==this.node.parentNode.tagName.toLowerCase()?this.node.parentNode.parentNode.appendChild(this.node.parentNode):this.node.parentNode.appendChild(this.node);var a=this.paper;return a.top!=this&&c._tofront(this,a),this},A.toBack=function(){if(this.removed)return this;var a=this.node.parentNode;"a"==a.tagName.toLowerCase()?a.parentNode.insertBefore(this.node.parentNode,this.node.parentNode.parentNode.firstChild):a.firstChild!=this.node&&a.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper);this.paper;return this},A.insertAfter=function(a){if(this.removed)return this;var b=a.node||a[a.length-1].node;return b.nextSibling?b.parentNode.insertBefore(this.node,b.nextSibling):b.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this},A.insertBefore=function(a){if(this.removed)return this;var b=a.node||a[0].node;return b.parentNode.insertBefore(this.node,b),c._insertbefore(this,a,this.paper),this},A.blur=function(a){var b=this;if(0!==+a){var d=q("filter"),e=q("feGaussianBlur");b.attrs.blur=a,d.id=c.createUUID(),q(e,{stdDeviation:+a||1.5}),d.appendChild(e),b.paper.defs.appendChild(d),b._blur=d,q(b.node,{filter:"url(#"+d.id+")"})}else b._blur&&(b._blur.parentNode.removeChild(b._blur),delete b._blur,delete b.attrs.blur),b.node.removeAttribute("filter");return b},c._engine.circle=function(a,b,c,d){var e=q("circle");a.canvas&&a.canvas.appendChild(e);var f=new z(e,a);return f.attrs={cx:b,cy:c,r:d,fill:"none",stroke:"#000"},f.type="circle",q(e,f.attrs),f},c._engine.rect=function(a,b,c,d,e,f){var g=q("rect");a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:b,y:c,width:d,height:e,r:f||0,rx:f||0,ry:f||0,fill:"none",stroke:"#000"},h.type="rect",q(g,h.attrs),h},c._engine.ellipse=function(a,b,c,d,e){var f=q("ellipse");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={cx:b,cy:c,rx:d,ry:e,fill:"none",stroke:"#000"},g.type="ellipse",q(f,g.attrs),g},c._engine.image=function(a,b,c,d,e,f){var g=q("image");q(g,{x:c,y:d,width:e,height:f,preserveAspectRatio:"none"}),g.setAttributeNS(n,"href",b),a.canvas&&a.canvas.appendChild(g);var h=new z(g,a);return h.attrs={x:c,y:d,width:e,height:f,src:b},h.type="image",h},c._engine.text=function(a,b,d,e){var f=q("text");a.canvas&&a.canvas.appendChild(f);var g=new z(f,a);return g.attrs={x:b,y:d,"text-anchor":"middle",text:e,font:c._availableAttrs.font,stroke:"none",fill:"#000"},g.type="text",w(g,g.attrs),g},c._engine.setSize=function(a,b){return this.width=a||this.width,this.height=b||this.height,this.canvas.setAttribute("width",this.width),this.canvas.setAttribute("height",this.height),this._viewBox&&this.setViewBox.apply(this,this._viewBox),this},c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a&&a.container,d=a.x,e=a.y,f=a.width,g=a.height;if(!b)throw new Error("SVG container not found.");var h,i=q("svg"),j="overflow:hidden;";return d=d||0,e=e||0,f=f||512,g=g||342,q(i,{height:g,version:1.1,width:f,xmlns:"http://www.w3.org/2000/svg"}),1==b?(i.style.cssText=j+"position:absolute;left:"+d+"px;top:"+e+"px",c._g.doc.body.appendChild(i),h=1):(i.style.cssText=j+"position:relative",b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i)),b=new c._Paper,b.width=f,b.height=g,b.canvas=i,b.clear(),b._left=b._top=0,h&&(b.renderfix=function(){}),b.renderfix(),b},c._engine.setViewBox=function(a,b,c,d,e){k("raphael.setViewBox",this,this._viewBox,[a,b,c,d,e]);var f,h,i=g(c/this.width,d/this.height),j=this.top,l=e?"meet":"xMinYMin";for(null==a?(this._vbSize&&(i=1),delete this._vbSize,f="0 0 "+this.width+m+this.height):(this._vbSize=i,f=a+m+b+m+c+m+d),q(this.canvas,{viewBox:f,preserveAspectRatio:l});i&&j;)h="stroke-width"in j.attrs?j.attrs["stroke-width"]:1,j.attr({"stroke-width":h}),j._.dirty=1,j._.dirtyT=1,j=j.prev;return this._viewBox=[a,b,c,d,!!e],this},c.prototype.renderfix=function(){var a,b=this.canvas,c=b.style;try{a=b.getScreenCTM()||b.createSVGMatrix()}catch(d){a=b.createSVGMatrix()}var e=-a.e%1,f=-a.f%1;(e||f)&&(e&&(this._left=(this._left+e)%1,c.left=this._left+"px"),f&&(this._top=(this._top+f)%1,c.top=this._top+"px"))},c.prototype.clear=function(){c.eve("raphael.clear",this);for(var a=this.canvas;a.firstChild;)a.removeChild(a.firstChild);this.bottom=this.top=null,(this.desc=q("desc")).appendChild(c._g.doc.createTextNode("Created with Raphaël "+c.version)),a.appendChild(this.desc),a.appendChild(this.defs=q("defs"))},c.prototype.remove=function(){k("raphael.remove",this),this.canvas.parentNode&&this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null};var B=c.st;for(var C in A)A[a](C)&&!B[a](C)&&(B[C]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(C))}}(),function(){if(c.vml){var a="hasOwnProperty",b=String,d=parseFloat,e=Math,f=e.round,g=e.max,h=e.min,i=e.abs,j="fill",k=/[, ]+/,l=c.eve,m=" progid:DXImageTransform.Microsoft",n=" ",o="",p={M:"m",L:"l",C:"c",Z:"x",m:"t",l:"r",c:"v",z:"x"},q=/([clmz]),?([^clmz]*)/gi,r=/ progid:\S+Blur\([^\)]+\)/g,s=/-?[^,\s-]+/g,t="position:absolute;left:0;top:0;width:1px;height:1px",u=21600,v={path:1,rect:1,image:1},w={circle:1,ellipse:1},x=function(a){var d=/[ahqstv]/gi,e=c._pathToAbsolute;if(b(a).match(d)&&(e=c._path2curve),d=/[clmz]/g,e==c._pathToAbsolute&&!b(a).match(d)){var g=b(a).replace(q,function(a,b,c){var d=[],e="m"==b.toLowerCase(),g=p[b];return c.replace(s,function(a){e&&2==d.length&&(g+=d+p["m"==b?"l":"L"],d=[]),d.push(f(a*u))}),g+d});return g}var h,i,j=e(a);g=[];for(var k=0,l=j.length;l>k;k++){h=j[k],i=j[k][0].toLowerCase(),"z"==i&&(i="x");for(var m=1,r=h.length;r>m;m++)i+=f(h[m]*u)+(m!=r-1?",":o);g.push(i)}return g.join(n)},y=function(a,b,d){var e=c.matrix();return e.rotate(-a,.5,.5),{dx:e.x(b,d),dy:e.y(b,d)}},z=function(a,b,c,d,e,f){var g=a._,h=a.matrix,k=g.fillpos,l=a.node,m=l.style,o=1,p="",q=u/b,r=u/c;if(m.visibility="hidden",b&&c){if(l.coordsize=i(q)+n+i(r),m.rotation=f*(0>b*c?-1:1),f){var s=y(f,d,e);d=s.dx,e=s.dy}if(0>b&&(p+="x"),0>c&&(p+=" y")&&(o=-1),m.flip=p,l.coordorigin=d*-q+n+e*-r,k||g.fillsize){var t=l.getElementsByTagName(j);t=t&&t[0],l.removeChild(t),k&&(s=y(f,h.x(k[0],k[1]),h.y(k[0],k[1])),t.position=s.dx*o+n+s.dy*o),g.fillsize&&(t.size=g.fillsize[0]*i(b)+n+g.fillsize[1]*i(c)),l.appendChild(t)}m.visibility="visible"}};c.toString=function(){return"Your browser doesn’t support SVG. Falling down to VML.\nYou are running Raphaël "+this.version};var A=function(a,c,d){for(var e=b(c).toLowerCase().split("-"),f=d?"end":"start",g=e.length,h="classic",i="medium",j="medium";g--;)switch(e[g]){case"block":case"classic":case"oval":case"diamond":case"open":case"none":h=e[g];break;case"wide":case"narrow":j=e[g];break;case"long":case"short":i=e[g]}var k=a.node.getElementsByTagName("stroke")[0];k[f+"arrow"]=h,k[f+"arrowlength"]=i,k[f+"arrowwidth"]=j},B=function(e,i){e.attrs=e.attrs||{};var l=e.node,m=e.attrs,p=l.style,q=v[e.type]&&(i.x!=m.x||i.y!=m.y||i.width!=m.width||i.height!=m.height||i.cx!=m.cx||i.cy!=m.cy||i.rx!=m.rx||i.ry!=m.ry||i.r!=m.r),r=w[e.type]&&(m.cx!=i.cx||m.cy!=i.cy||m.r!=i.r||m.rx!=i.rx||m.ry!=i.ry),s=e;for(var t in i)i[a](t)&&(m[t]=i[t]);if(q&&(m.path=c._getPath[e.type](e),e._.dirty=1),i.href&&(l.href=i.href),i.title&&(l.title=i.title),i.target&&(l.target=i.target),i.cursor&&(p.cursor=i.cursor),"blur"in i&&e.blur(i.blur),(i.path&&"path"==e.type||q)&&(l.path=x(~b(m.path).toLowerCase().indexOf("r")?c._pathToAbsolute(m.path):m.path),"image"==e.type&&(e._.fillpos=[m.x,m.y],e._.fillsize=[m.width,m.height],z(e,1,1,0,0,0))),"transform"in i&&e.transform(i.transform),r){var y=+m.cx,B=+m.cy,D=+m.rx||+m.r||0,E=+m.ry||+m.r||0;l.path=c.format("ar{0},{1},{2},{3},{4},{1},{4},{1}x",f((y-D)*u),f((B-E)*u),f((y+D)*u),f((B+E)*u),f(y*u)),e._.dirty=1}if("clip-rect"in i){var G=b(i["clip-rect"]).split(k);if(4==G.length){G[2]=+G[2]+ +G[0],G[3]=+G[3]+ +G[1];var H=l.clipRect||c._g.doc.createElement("div"),I=H.style;I.clip=c.format("rect({1}px {2}px {3}px {0}px)",G),l.clipRect||(I.position="absolute",I.top=0,I.left=0,I.width=e.paper.width+"px",I.height=e.paper.height+"px",l.parentNode.insertBefore(H,l),H.appendChild(l),l.clipRect=H)}i["clip-rect"]||l.clipRect&&(l.clipRect.style.clip="auto")}if(e.textpath){var J=e.textpath.style;i.font&&(J.font=i.font),i["font-family"]&&(J.fontFamily='"'+i["font-family"].split(",")[0].replace(/^['"]+|['"]+$/g,o)+'"'),i["font-size"]&&(J.fontSize=i["font-size"]),i["font-weight"]&&(J.fontWeight=i["font-weight"]),i["font-style"]&&(J.fontStyle=i["font-style"])}if("arrow-start"in i&&A(s,i["arrow-start"]),"arrow-end"in i&&A(s,i["arrow-end"],1),null!=i.opacity||null!=i["stroke-width"]||null!=i.fill||null!=i.src||null!=i.stroke||null!=i["stroke-width"]||null!=i["stroke-opacity"]||null!=i["fill-opacity"]||null!=i["stroke-dasharray"]||null!=i["stroke-miterlimit"]||null!=i["stroke-linejoin"]||null!=i["stroke-linecap"]){var K=l.getElementsByTagName(j),L=!1;if(K=K&&K[0],!K&&(L=K=F(j)),"image"==e.type&&i.src&&(K.src=i.src),i.fill&&(K.on=!0),(null==K.on||"none"==i.fill||null===i.fill)&&(K.on=!1),K.on&&i.fill){var M=b(i.fill).match(c._ISURL);if(M){K.parentNode==l&&l.removeChild(K),K.rotate=!0,K.src=M[1],K.type="tile";var N=e.getBBox(1);K.position=N.x+n+N.y,e._.fillpos=[N.x,N.y],c._preload(M[1],function(){e._.fillsize=[this.offsetWidth,this.offsetHeight]})}else K.color=c.getRGB(i.fill).hex,K.src=o,K.type="solid",c.getRGB(i.fill).error&&(s.type in{circle:1,ellipse:1}||"r"!=b(i.fill).charAt())&&C(s,i.fill,K)&&(m.fill="none",m.gradient=i.fill,K.rotate=!1)}if("fill-opacity"in i||"opacity"in i){var O=((+m["fill-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+c.getRGB(i.fill).o+1||2)-1);O=h(g(O,0),1),K.opacity=O,K.src&&(K.color="none")}l.appendChild(K);var P=l.getElementsByTagName("stroke")&&l.getElementsByTagName("stroke")[0],Q=!1;!P&&(Q=P=F("stroke")),(i.stroke&&"none"!=i.stroke||i["stroke-width"]||null!=i["stroke-opacity"]||i["stroke-dasharray"]||i["stroke-miterlimit"]||i["stroke-linejoin"]||i["stroke-linecap"])&&(P.on=!0),("none"==i.stroke||null===i.stroke||null==P.on||0==i.stroke||0==i["stroke-width"])&&(P.on=!1);var R=c.getRGB(i.stroke);P.on&&i.stroke&&(P.color=R.hex),O=((+m["stroke-opacity"]+1||2)-1)*((+m.opacity+1||2)-1)*((+R.o+1||2)-1);var S=.75*(d(i["stroke-width"])||1);if(O=h(g(O,0),1),null==i["stroke-width"]&&(S=m["stroke-width"]),i["stroke-width"]&&(P.weight=S),S&&1>S&&(O*=S)&&(P.weight=1),P.opacity=O,i["stroke-linejoin"]&&(P.joinstyle=i["stroke-linejoin"]||"miter"),P.miterlimit=i["stroke-miterlimit"]||8,i["stroke-linecap"]&&(P.endcap="butt"==i["stroke-linecap"]?"flat":"square"==i["stroke-linecap"]?"square":"round"),i["stroke-dasharray"]){var T={"-":"shortdash",".":"shortdot","-.":"shortdashdot","-..":"shortdashdotdot",". ":"dot","- ":"dash","--":"longdash","- .":"dashdot","--.":"longdashdot","--..":"longdashdotdot"};P.dashstyle=T[a](i["stroke-dasharray"])?T[i["stroke-dasharray"]]:o}Q&&l.appendChild(P)}if("text"==s.type){s.paper.canvas.style.display=o;var U=s.paper.span,V=100,W=m.font&&m.font.match(/\d+(?:\.\d*)?(?=px)/);p=U.style,m.font&&(p.font=m.font),m["font-family"]&&(p.fontFamily=m["font-family"]),m["font-weight"]&&(p.fontWeight=m["font-weight"]),m["font-style"]&&(p.fontStyle=m["font-style"]),W=d(m["font-size"]||W&&W[0])||10,p.fontSize=W*V+"px",s.textpath.string&&(U.innerHTML=b(s.textpath.string).replace(/</g,"&#60;").replace(/&/g,"&#38;").replace(/\n/g,"<br>"));var X=U.getBoundingClientRect();s.W=m.w=(X.right-X.left)/V,s.H=m.h=(X.bottom-X.top)/V,s.X=m.x,s.Y=m.y+s.H/2,("x"in i||"y"in i)&&(s.path.v=c.format("m{0},{1}l{2},{1}",f(m.x*u),f(m.y*u),f(m.x*u)+1));for(var Y=["x","y","text","font","font-family","font-weight","font-style","font-size"],Z=0,$=Y.length;$>Z;Z++)if(Y[Z]in i){s._.dirty=1;break}switch(m["text-anchor"]){case"start":s.textpath.style["v-text-align"]="left",s.bbx=s.W/2;break;case"end":s.textpath.style["v-text-align"]="right",s.bbx=-s.W/2;break;default:s.textpath.style["v-text-align"]="center",s.bbx=0}s.textpath.style["v-text-kern"]=!0}},C=function(a,f,g){a.attrs=a.attrs||{};var h=(a.attrs,Math.pow),i="linear",j=".5 .5";if(a.attrs.gradient=f,f=b(f).replace(c._radial_gradient,function(a,b,c){return i="radial",b&&c&&(b=d(b),c=d(c),h(b-.5,2)+h(c-.5,2)>.25&&(c=e.sqrt(.25-h(b-.5,2))*(2*(c>.5)-1)+.5),j=b+n+c),o}),f=f.split(/\s*\-\s*/),"linear"==i){var k=f.shift();if(k=-d(k),isNaN(k))return null}var l=c._parseDots(f);if(!l)return null;if(a=a.shape||a.node,l.length){a.removeChild(g),g.on=!0,g.method="none",g.color=l[0].color,g.color2=l[l.length-1].color;for(var m=[],p=0,q=l.length;q>p;p++)l[p].offset&&m.push(l[p].offset+n+l[p].color);g.colors=m.length?m.join():"0% "+g.color,"radial"==i?(g.type="gradientTitle",g.focus="100%",g.focussize="0 0",g.focusposition=j,g.angle=0):(g.type="gradient",g.angle=(270-k)%360),a.appendChild(g)}return 1},D=function(a,b){this[0]=this.node=a,a.raphael=!0,this.id=c._oid++,a.raphaelid=this.id,this.X=0,this.Y=0,this.attrs={},this.paper=b,this.matrix=c.matrix(),this._={transform:[],sx:1,sy:1,dx:0,dy:0,deg:0,dirty:1,dirtyT:1},!b.bottom&&(b.bottom=this),this.prev=b.top,b.top&&(b.top.next=this),b.top=this,this.next=null},E=c.el;D.prototype=E,E.constructor=D,E.transform=function(a){if(null==a)return this._.transform;var d,e=this.paper._viewBoxShift,f=e?"s"+[e.scale,e.scale]+"-1-1t"+[e.dx,e.dy]:o;e&&(d=a=b(a).replace(/\.{3}|\u2026/g,this._.transform||o)),c._extractTransform(this,f+a);var g,h=this.matrix.clone(),i=this.skew,j=this.node,k=~b(this.attrs.fill).indexOf("-"),l=!b(this.attrs.fill).indexOf("url(");if(h.translate(1,1),l||k||"image"==this.type)if(i.matrix="1 0 0 1",i.offset="0 0",g=h.split(),k&&g.noRotation||!g.isSimple){j.style.filter=h.toFilter();var m=this.getBBox(),p=this.getBBox(1),q=m.x-p.x,r=m.y-p.y;j.coordorigin=q*-u+n+r*-u,z(this,1,1,q,r,0)}else j.style.filter=o,z(this,g.scalex,g.scaley,g.dx,g.dy,g.rotate);else j.style.filter=o,i.matrix=b(h),i.offset=h.offset();return d&&(this._.transform=d),this},E.rotate=function(a,c,e){if(this.removed)return this;if(null!=a){if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2])),a=d(a[0]),null==e&&(c=e),null==c||null==e){var f=this.getBBox(1);c=f.x+f.width/2,e=f.y+f.height/2}return this._.dirtyT=1,this.transform(this._.transform.concat([["r",a,c,e]])),this}},E.translate=function(a,c){return this.removed?this:(a=b(a).split(k),a.length-1&&(c=d(a[1])),a=d(a[0])||0,c=+c||0,this._.bbox&&(this._.bbox.x+=a,this._.bbox.y+=c),this.transform(this._.transform.concat([["t",a,c]])),this)},E.scale=function(a,c,e,f){if(this.removed)return this;if(a=b(a).split(k),a.length-1&&(c=d(a[1]),e=d(a[2]),f=d(a[3]),isNaN(e)&&(e=null),isNaN(f)&&(f=null)),a=d(a[0]),null==c&&(c=a),null==f&&(e=f),null==e||null==f)var g=this.getBBox(1);return e=null==e?g.x+g.width/2:e,f=null==f?g.y+g.height/2:f,this.transform(this._.transform.concat([["s",a,c,e,f]])),this._.dirtyT=1,this},E.hide=function(){return!this.removed&&(this.node.style.display="none"),this},E.show=function(){return!this.removed&&(this.node.style.display=o),this},E._getBBox=function(){return this.removed?{}:{x:this.X+(this.bbx||0)-this.W/2,y:this.Y-this.H,width:this.W,height:this.H}},E.remove=function(){if(!this.removed&&this.node.parentNode){this.paper.__set__&&this.paper.__set__.exclude(this),c.eve.unbind("raphael.*.*."+this.id),c._tear(this,this.paper),this.node.parentNode.removeChild(this.node),this.shape&&this.shape.parentNode.removeChild(this.shape);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;this.removed=!0}},E.attr=function(b,d){if(this.removed)return this;if(null==b){var e={};for(var f in this.attrs)this.attrs[a](f)&&(e[f]=this.attrs[f]);return e.gradient&&"none"==e.fill&&(e.fill=e.gradient)&&delete e.gradient,e.transform=this._.transform,e}if(null==d&&c.is(b,"string")){if(b==j&&"none"==this.attrs.fill&&this.attrs.gradient)return this.attrs.gradient;for(var g=b.split(k),h={},i=0,m=g.length;m>i;i++)b=g[i],h[b]=b in this.attrs?this.attrs[b]:c.is(this.paper.customAttributes[b],"function")?this.paper.customAttributes[b].def:c._availableAttrs[b];return m-1?h:h[g[0]]}if(this.attrs&&null==d&&c.is(b,"array")){for(h={},i=0,m=b.length;m>i;i++)h[b[i]]=this.attr(b[i]);return h}var n;null!=d&&(n={},n[b]=d),null==d&&c.is(b,"object")&&(n=b);for(var o in n)l("raphael.attr."+o+"."+this.id,this,n[o]);if(n){for(o in this.paper.customAttributes)if(this.paper.customAttributes[a](o)&&n[a](o)&&c.is(this.paper.customAttributes[o],"function")){var p=this.paper.customAttributes[o].apply(this,[].concat(n[o]));this.attrs[o]=n[o];for(var q in p)p[a](q)&&(n[q]=p[q])}n.text&&"text"==this.type&&(this.textpath.string=n.text),B(this,n)}return this},E.toFront=function(){return!this.removed&&this.node.parentNode.appendChild(this.node),this.paper&&this.paper.top!=this&&c._tofront(this,this.paper),this},E.toBack=function(){return this.removed?this:(this.node.parentNode.firstChild!=this.node&&(this.node.parentNode.insertBefore(this.node,this.node.parentNode.firstChild),c._toback(this,this.paper)),this)},E.insertAfter=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[a.length-1]),a.node.nextSibling?a.node.parentNode.insertBefore(this.node,a.node.nextSibling):a.node.parentNode.appendChild(this.node),c._insertafter(this,a,this.paper),this)},E.insertBefore=function(a){return this.removed?this:(a.constructor==c.st.constructor&&(a=a[0]),a.node.parentNode.insertBefore(this.node,a.node),c._insertbefore(this,a,this.paper),this)},E.blur=function(a){var b=this.node.runtimeStyle,d=b.filter;return d=d.replace(r,o),0!==+a?(this.attrs.blur=a,b.filter=d+n+m+".Blur(pixelradius="+(+a||1.5)+")",b.margin=c.format("-{0}px 0 0 -{0}px",f(+a||1.5))):(b.filter=d,b.margin=0,delete this.attrs.blur),this},c._engine.path=function(a,b){var c=F("shape");c.style.cssText=t,c.coordsize=u+n+u,c.coordorigin=b.coordorigin;var d=new D(c,b),e={fill:"none",stroke:"#000"};a&&(e.path=a),d.type="path",d.path=[],d.Path=o,B(d,e),b.canvas.appendChild(c);var f=F("skew");return f.on=!0,c.appendChild(f),d.skew=f,d.transform(o),d},c._engine.rect=function(a,b,d,e,f,g){var h=c._rectPath(b,d,e,f,g),i=a.path(h),j=i.attrs;return i.X=j.x=b,i.Y=j.y=d,i.W=j.width=e,i.H=j.height=f,j.r=g,j.path=h,i.type="rect",i},c._engine.ellipse=function(a,b,c,d,e){{var f=a.path();f.attrs}return f.X=b-d,f.Y=c-e,f.W=2*d,f.H=2*e,f.type="ellipse",B(f,{cx:b,cy:c,rx:d,ry:e}),f},c._engine.circle=function(a,b,c,d){{var e=a.path();e.attrs}return e.X=b-d,e.Y=c-d,e.W=e.H=2*d,e.type="circle",B(e,{cx:b,cy:c,r:d}),e},c._engine.image=function(a,b,d,e,f,g){var h=c._rectPath(d,e,f,g),i=a.path(h).attr({stroke:"none"}),k=i.attrs,l=i.node,m=l.getElementsByTagName(j)[0];return k.src=b,i.X=k.x=d,i.Y=k.y=e,i.W=k.width=f,i.H=k.height=g,k.path=h,i.type="image",m.parentNode==l&&l.removeChild(m),m.rotate=!0,m.src=b,m.type="tile",i._.fillpos=[d,e],i._.fillsize=[f,g],l.appendChild(m),z(i,1,1,0,0,0),i},c._engine.text=function(a,d,e,g){var h=F("shape"),i=F("path"),j=F("textpath");d=d||0,e=e||0,g=g||"",i.v=c.format("m{0},{1}l{2},{1}",f(d*u),f(e*u),f(d*u)+1),i.textpathok=!0,j.string=b(g),j.on=!0,h.style.cssText=t,h.coordsize=u+n+u,h.coordorigin="0 0";var k=new D(h,a),l={fill:"#000",stroke:"none",font:c._availableAttrs.font,text:g};k.shape=h,k.path=i,k.textpath=j,k.type="text",k.attrs.text=b(g),k.attrs.x=d,k.attrs.y=e,k.attrs.w=1,k.attrs.h=1,B(k,l),h.appendChild(j),h.appendChild(i),a.canvas.appendChild(h);var m=F("skew");return m.on=!0,h.appendChild(m),k.skew=m,k.transform(o),k},c._engine.setSize=function(a,b){var d=this.canvas.style;return this.width=a,this.height=b,a==+a&&(a+="px"),b==+b&&(b+="px"),d.width=a,d.height=b,d.clip="rect(0 "+a+" "+b+" 0)",this._viewBox&&c._engine.setViewBox.apply(this,this._viewBox),this},c._engine.setViewBox=function(a,b,d,e,f){c.eve("raphael.setViewBox",this,this._viewBox,[a,b,d,e,f]);var h,i,j=this.width,k=this.height,l=1/g(d/j,e/k);return f&&(h=k/e,i=j/d,j>d*h&&(a-=(j-d*h)/2/h),k>e*i&&(b-=(k-e*i)/2/i)),this._viewBox=[a,b,d,e,!!f],this._viewBoxShift={dx:-a,dy:-b,scale:l},this.forEach(function(a){a.transform("...")}),this};var F;c._engine.initWin=function(a){var b=a.document;try{b.createStyleSheet().addRule(".rvml","behavior:url(#default#VML)")}catch(c){b.styleSheets[0].addRule(".rvml","behaviour:url(#default#VML)")}try{!b.namespaces.rvml&&b.namespaces.add("rvml","urn:schemas-microsoft-com:vml"),F=function(a){return b.createElement("<rvml:"+a+' class="rvml">')}}catch(d){F=function(a){return b.createElement("<"+a+' xmlns="urn:schemas-microsoft.com:vml" class="rvml">')}}},c._engine.initWin(c._g.win),c._engine.create=function(){var a=c._getContainer.apply(0,arguments),b=a.container,d=a.height,e=a.width,f=a.x,g=a.y;if(!b)throw new Error("VML container not found.");var h=new c._Paper,i=h.canvas=c._g.doc.createElement("div"),j=i.style;return f=f||0,g=g||0,e=e||512,d=d||342,h.width=e,h.height=d,e==+e&&(e+="px"),d==+d&&(d+="px"),h.coordsize=1e3*u+n+1e3*u,h.coordorigin="0 0",h.span=c._g.doc.createElement("span"),h.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;",i.appendChild(h.span),j.cssText=c.format("top:0;left:0;width:{0};height:{1};display:inline-block;position:relative;clip:rect(0 {0} {1} 0);overflow:hidden",e,d),1==b?(c._g.doc.body.appendChild(i),j.left=f+"px",j.top=g+"px",j.position="absolute"):b.firstChild?b.insertBefore(i,b.firstChild):b.appendChild(i),h.renderfix=function(){},h},c.prototype.clear=function(){c.eve("raphael.clear",this),this.canvas.innerHTML=o,this.span=c._g.doc.createElement("span"),this.span.style.cssText="position:absolute;left:-9999em;top:-9999em;padding:0;margin:0;line-height:1;display:inline;",this.canvas.appendChild(this.span),this.bottom=this.top=null},c.prototype.remove=function(){c.eve("raphael.remove",this),this.canvas.parentNode.removeChild(this.canvas);for(var a in this)this[a]="function"==typeof this[a]?c._removedFactory(a):null;return!0};var G=c.st;for(var H in E)E[a](H)&&!G[a](H)&&(G[H]=function(a){return function(){var b=arguments;return this.forEach(function(c){c[a].apply(c,b)})}}(H))}}();var wc={text:function(a){var b=y(a),c=new Array,d=a.attrs.text.split("\n"),e=d.length;return v(d,function(d,f){d=d.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"),d=d.replace(/\u200B/,"\n"),c.push(x("text",w(a.attrs,function(a,b,c){return"text"!==c&&"w"!==c&&"h"!==c&&("font-size"===c&&(b=parseInt(b)+"px"),a[c]=u(b.toString())),a},{style:"text-anchor: "+a.attrs["text-anchor"]+"; "+z(b)+";"}),a.matrix,x("tspan",{dy:A(b.font.size,f+1,e)},null,d)))}),c},path:function(a){1===a.matrix.a&&1===a.matrix.d?{}:{transform:a.matrix.toString()};return x("path",w(a.attrs,function(a,b,c){return"path"===c&&(c="d"),a[c]=b.toString(),a},{}),a.matrix)}};return c.fn.toSVG=function(a){("number"!=typeof a||0>a||a>20)&&(a=1);var b=this,d={svg:c.svg,vml:c.vml},e='<svg style="overflow: hidden; position: relative;" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="'+Math.round(b.width*a)+'" version="1.1" height="'+Math.round(b.height*a)+'">';e+='<g transform="scale('+a+')">',c.svg=!0,c.vml=!1;for(var f=b.bottom;null!=f;f=f.next)if("none"!==f.node.style.display){var g="";if("function"!=typeof wc[f.type]){switch(f.type){case"image":g+=' preserveAspectRatio="none"'}for(gc in f.attrs){var h=gc;switch(gc){case"src":h="xlink:href";break;case"transform":h=""}h&&(g+=" "+h+'="'+u(f.attrs[gc].toString())+'"')}e+="<"+f.type+' transform="matrix('+f.matrix.toString().replace(/^matrix\(|\)$/g,"")+')"'+g+"></"+f.type+">"}else e+=wc[f.type](f)}return e+="</g></svg>",c.svg=d.svg,c.vml=d.vml,e},Raphael=c,c});

var l=!0,t=null,u=!1,R={},S={};mdefine=function(v){R.minified=v();S.minified=v};mrequire=function(v,G){return"undefined"===typeof G?R[v]:S[v](G)};
mdefine(function(v){function G(){}function T(){}function H(a){return a!=t?""+a:""}function z(a){return"string"==typeof a}function r(a){return a&&a.nodeType}function q(a){return a&&a.length!=t&&!z(a)&&!r(a)&&!s(a)}function ba(a){return a}function A(a,c){for(var b in a)a.hasOwnProperty(b)&&c(b,a[b]);return a}function h(a,c){for(var b=0;a&&b<a.length;b++)c(a[b],b);return a}function I(a,c){var b=[],d=s(c)?c:function(a){return c!=a};h(a,function(a,c){d(a,c)&&b.push(a)});return b}function B(a,c){var b=
[];h(a,function(a,e){q(a=c(a,e))?h(a,function(a){b.push(a)}):a!=t&&b.push(a)});return b}function U(a,c){var b=[];A(a,function(a,e){q(a=c(a,e))?h(a,function(a){b.push(a)}):a!=t&&b.push(a)});return b}function m(a,c,b){return H(a).replace(c,b||"")}function O(a,c){var b=a!=t&&RegExp("\\b"+a+"\\b","i");return function(a){return!b||b.test(a[c])}}function s(a){return"function"==typeof a&&!a.item}function C(a){return parseFloat(m(a,/^[^\d-]+/))}function M(a){return a.minified=a.minified||++ca}function P(a,
c){function b(a){if(r(a)&&!e[g=M(a)])d.push(a),e[g]=l}var d=[],e={},g;h(a,function(a){a=c(a);q(a)?h(a,b):b(a)});return d}function V(a){var c={$position:"absolute",$visibility:"hidden",$display:"block",$height:t},b=a.get(c);a.set(c);c=a.get("$height",l);a.set(b);return c}function W(a){a()}function X(a,c){h(c,function(a){a.e.detachEvent("on"+a.n,a.h)})}function Y(){h(J,W);J=t}function Z(a){J?J.push(a):n.setTimeout(a,0)}function $(a,c,b,d){return function(){var e=p(x.createElement(a));q(c)||"object"!=
typeof c?e.add(c):e.set(c).add(b);d&&d(e);return e}}function aa(a){return da[a]||"\\u"+("0000"+a.charCodeAt(0).toString(16)).slice(-4)}function p(a,c,b){return s(a)?Z(a):new F(D(a,c,b))}function D(a,c,b){function d(a){a=function ea(a){return q(a)?B(a,ea):a}(a);return e?I(a,function(a){for(;a=a.parentNode;){if(a===e)return l;if(b)return u}}):a}var e,g,k,f;if(c&&1!=(c=D(c)).length)return P(c,function(c){return D(a,c,b)});e=c&&c[0];if(!z(a))return d(q(a)?a:[a]);if(1<(c=a.split(/\s*,\s*/)).length)return P(c,
function(a){return D(a,e,b)});if(c=/(\S+)\s+(.+)$/.exec(a))return D(c[2],D(c[1],e),b);if(a!=(c=m(a,/^#/)))return d([x.getElementById(c)]);e=e||x;g=(c=/([\w-]*)\.?([\w-]*)/.exec(a))[1];f=c[2];c=(k=e.getElementsByClassName&&f)?e.getElementsByClassName(f):e.getElementsByTagName(g||"*");if(g=k?g:f)c=I(c,O(g,k?"nodeName":"className"));return e?d(c):c}function N(a,c){var b;if(s(a))return a;if(!a||z(a)&&("*"==a||(b=/^([\w-]*)\.([\w-]+)$/.exec(a))||(b=/^([\w-]+)$/.exec(a)))){var d=O(b&&b[1],"nodeName"),e=
O(b&&b[2],"className");return function(a){return 1==r(a)&&d(a)&&e(a)}}var g={};p(a,c).each(function(a){g[M(a)]=l});return function(b){return c?p(a,c).find(b)!=t:g[M(b)]}}function Q(){function a(a,e){c==t&&(c=a,b=e,n.setTimeout(function(){h(d,W)},0))}var c,b=[],d=[],e=a.then=function(a,e){function f(){try{var d=c?a:e;if(s(d)){var f=d.apply(t,b);f&&s(f.then)?f.then(function(a){j(l,[a])},function(a){j(u,[a])}):j(l,[f])}else j(c,b)}catch(h){j(u,[h])}}var j=Q();c!=t?n.setTimeout(f,0):d.push(f);return j};
a.error=function(a){return e(0,a)};return a}function F(a){for(var c=this.length=a.length,b=0;b<c;b++)this[b]=a[b]}var K=this;"undefined"!==typeof v&&(K=v);var n=K,K=document;"undefined"!==typeof v&&(K=v.document);var x=K,ca=1,E={},J=[],L=[],ga=n.requestAnimationFrame||function(a){n.setTimeout(a,33)},y=!!x.all&&!J.map,da={"\t":"\\t","\r":"\\r","\n":"\\n",'"':'\\"',"\\":"\\\\"};A({each:function(a){return h(this,a)},filter:function(a){return new F(I(this,a))},collect:function(a){return new F(B(this,
a))},sub:function(a,c){var b=0>a?this.length+a:a,d=0<=c?c:this.length+(c||0);return this.filter(function(a,c){return c>=b&&c<d})},find:function(a){for(var c,b=s(a)?a:function(c,b){if(a===c)return b},d=0;d<this.length;d++)if((c=b(this[d],d))!=t)return c},remove:function(){h(this,function(a){if(y&&1==r(a)){var c=function(a){X(0,E[a.minified]);delete E[a.minified]};h(D("*",a),c);c(a)}a.parentNode.removeChild(a)})},text:function(){function a(c){var b=r(c);return 1==b?B(c.childNodes,a):5>b?c.data:t}return B(this,
a).join("")},trav:function(a,c,b){var d=N("number"==typeof c?t:c),e="number"==typeof c?c:b||1E9;return new F(P(this,function(c){for(var b=[];(c=c[a])&&b.length<e;)d(c)&&b.push(c);return b}))},select:function(a,c){return p(a,this,c)},is:function(a){var c=N(a);return!this.find(function(a){if(!c(a))return l})},only:function(a){return this.filter(N(a))},get:function(a,c){var b=this,d=b[0];if(d){if(z(a)){var e=m(m(a,/^%/,"data-"),/^[$@]/),g;g="$"==a?d.className:"$$"==a?y?d.style.cssText:d.getAttribute("style"):
/\$\$/.test(a)&&("hidden"==d.style.visibility||"none"==d.style.display)?0:"$$fade"==a?isNaN(g=y?C(d.style.filter)/100:C(d.style.opacity))?1:g:"$$slide"==a?b.get("$height"):/^\$/.test(a)?n.getComputedStyle?n.getComputedStyle(d,t).getPropertyValue(m(e,/[A-Z]/g,function(a){return"-"+a.toLowerCase()})):(d.currentStyle||d.style)[e]:/^[@%]/.test(a)?d.getAttribute(e):d[e];return c?C(g):g}var k={};(q(a)?h:A)(a,function(a){k[a]=b.get(a,c)});return k}},set:function(a,c){var b=this,d;void 0!==c?"$$fade"==a||
"$$slide"==a?b.set({$visibility:0<(d=C(c))?"visible":"hidden",$display:"block"}).set("$$fade"==a?y?{$filter:"alpha(opacity = "+100*d+")",$zoom:1}:{$opacity:d}:{$height:/px/.test(c)?c:function(a,c,b){return d*(d&&V(p(b)))+"px"},$overflow:"hidden"}):h(b,function(b,d){var k=m(m(a,/^%/,"data-"),/^[@$]/),f=b.className||"",j=/^\$/.test(a)?b.style:b,w=s(c)?c(p(b).get(a),d,b):c;"$"==a?w!=t&&(h(w.split(/\s+/),function(a){var c=m(a,/^[+-]/),b=f;f=m(f,RegExp("\\b"+c+"\\b","i"));if(/^\+/.test(a)||c==a&&b==f)f+=
" "+c}),b.className=m(f,/^\s+|\s+(?=\s|$)/g)):"$$"==a?y?j.cssText=w:w!=t?b.setAttribute("style",w):b.removeAttribute("style"):/^[@%]/.test(a)?w!=t?j.setAttribute(k,w):j.removeAttribute(k):j[k]=w}):z(a)||s(a)?b.set("$",a):A(a,function(a,c){b.set(a,c)});return b},add:function(a,c){return h(this,function(b,d){var e;(function k(a){q(a)?h(a,k):s(a)?k(a(b,d)):a!=t&&(a=r(a)?a:x.createTextNode(a),e?e.parentNode.insertBefore(a,e.nextSibling):c?c(a,b,b.parentNode):b.appendChild(a),e=a)})(r(a)&&d?t:a)})},fill:function(a){return h(this,
function(a){p(a.childNodes).remove()}).add(a)},addBefore:function(a){return this.add(a,function(a,b,d){d.insertBefore(a,b)})},addAfter:function(a){return this.add(a,function(a,b,d){d.insertBefore(a,b.nextSibling)})},addFront:function(a){return this.add(a,function(a,b){b.insertBefore(a,b.firstChild)})},replace:function(a){return this.add(a,function(a,b,d){d.replaceChild(a,b)})},clone:function(a){return new F(B(this,function(c){var b=r(c);if(1==b){var d={$:c.className||t,$$:y?c.style.cssText:c.getAttribute("style")};
h(c.attributes,function(a){var b=a.name;"id"!=b&&("style"!=b&&"class"!=b&&c.getAttribute(b))&&(d["@"+b]=a.value)});return $(c.tagName,d,p(c.childNodes).clone(),a)}return 5>b?c.data:t}))},animate:function(a,c,b,d){var e=this,g=[],k=/-?[\d.]+/,f,j=Q(),w=s(b)?b:function(a,c,d){return a+d*(c-a)*(b+(1-b)*d*(3-2*d))};d=d||{};d.time=0;d.stop=function(){f();j(u)};c=c||500;b=b||0;h(e,function(b){var c={a:p(b),c:{}};A(c.b=c.a.get(a),function(b,d){var e=a[b];"$$slide"==b&&(e=e*V(c.a)+"px");c.c[b]=/^[+-]=/.test(e)?
m(e.substr(2),k,C(d)+C(m(e,/\+?=/))):e});g.push(c)});f=p.loop(function(a){function b(a,c){return/^#/.test(a)?parseInt(6<a.length?a.substr(1+2*c,2):(a=a.charAt(1+c))+a,16):parseInt(m(a,/[^\d,]+/g).split(",")[c])}d.time=a;a>=c||0>a?(h(g,function(a){a.a.set(a.c)}),f(),d.time=t,j(l,[e])):h(g,function(d){A(d.b,function(e,g){var f="rgb(",j=d.c[e],h=a/c;if(/^#|rgb\(/.test(j))for(var n=0;3>n;n++)f+=Math.round(w(b(g,n),b(j,n),h))+(2>n?",":")");else f=m(j,k,H(w(C(g),C(j),h)));d.a.set(e,f)})})});return j},toggle:function(a,
c,b,d){var e=this,g={},k=u,f=/\b(?=\w)/g,j;return c?e.set(a)&&function(f){if(f!==k)return j=(k=f===l||f===u?f:!k)?c:a,s(j)?j(e,b,d):b?e.animate(j,g.stop?g.stop()||g.time:b,d,g):e.set(j)&&void 0}:e.toggle(m(a,f,"-"),m(a,f,"+"))},values:function(a){var c=a||{};this.each(function(a){var d=a.name,e=H(a.value),g=c[d];if(/form/i.test(a.tagName))p(B(a.elements,ba)).values(c);else if(d&&(!/kbox|dio/i.test(a.type)||a.checked))q(g)?g.push(e):c[d]=g==t?e:[g,e]});return c},on:function(a,c,b,d){return this.each(function(e,
g){h(a.split(/\s/),function(a){var f=m(a,/\|/),j=s(c)||t,h=j?c:b,p=j&&d&&b,q=j&&(d||b),v=f==a,r=j?t:N(c,e),j=function(a,c){var b=a||n.event,d,e=c||b.target;if(!r||r(e))if((d=(!h.apply(p||e,q||[b,g])||q)&&v)&&!c)b.stopPropagation&&(b.preventDefault(),b.stopPropagation()),b.returnValue=u,b.cancelBubble=l;return d};a={e:e,h:j,n:f};(h.M=h.M||[]).push(a);y?(e.attachEvent("on"+f,j),f=M(e),(E[f]=E[f]||[]).push(a)):(e.addEventListener(f,j,u),(e.minified2=e.minified2||[]).push(a))})})},onOver:function(a){var c=
this,b=[];return c.on("|mouseover |mouseout",function(d,e){var g="mouseout"!=d.type,k=d.relatedTarget||d.toElement;if(b[e]!==g&&(g||!k||k!=c[e]&&!p(k).trav("parentNode",c[e]).length))b[e]=g,a.call(this,g,e)})},trigger:function(a,c){return this.each(function(b){for(var d,e=b;e&&!d;)h(y?E[e.minified]:e.minified2,function(e){e.n==a&&(d=d||e.h(c,b))}),e=e.parentNode})}},function(a,c){F.prototype[a]=c});A({request:function(a,c,b,d,e,g){var k,f=b,j=0,h=Q();try{k=n.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Msxml2.XMLHTTP.3.0"),
b!=t&&(d=d||{},!z(b)&&!r(b)&&(f=U(b,function fa(a,b){return q(b)?B(b,function(b){return fa(a,b)}):encodeURIComponent(a)+(b!=t?"="+encodeURIComponent(b):"")}).join("&")),/post/i.test(a)?!r(b)&&(!z(b)&&!d["Content-Type"])&&(d["Content-Type"]="application/x-www-form-urlencoded"):(c+="?"+f,f=t)),k.open(a,c,l,e,g),A(d,function(a,b){k.setRequestHeader(a,b)}),k.onreadystatechange=function(){4==k.readyState&&!j++&&(200==k.status?h(l,[k.responseText,k.responseXML]):h(u,[k.status,k.statusText,k.responseText]))},
k.send(f)}catch(m){j||h(u,[0,t,H(m)])}return h},toJSON:function c(b){return b==t?""+b:z(b=b.valueOf())?'"'+m(b,/[\\\"\x00-\x1f\x22\x5c]/g,aa)+'"':q(b)?"["+B(b,c).join()+"]":"object"==typeof b?"{"+U(b,function(b,e){return c(b)+":"+c(e)}).join()+"}":H(b)},parseJSON:n.JSON?n.JSON.parse:function(c){c=m(c,/[\x00\xad\u0600-\uffff]/g,aa);if(/^[[\],:{}\s]*$/.test(m(m(c,/\\["\\\/bfnrtu]/g),/"[^"\\\n\r]*"|true|false|null|[\d.eE+-]+/g)))return eval("("+c+")")},ready:Z,setCookie:function(c,b,d,e,g,h){x.cookie=
c+"="+(h?b:escape(b))+(d?"; expires="+("object"==typeof d?d:new Date((new Date).getTime()+864E5*d)).toUTCString():"")+"; path="+(e?escapeURI(e):"/")+(g?"; domain="+escape(g):"")},getCookie:function(c,b){var d,e=(d=RegExp("(^|;)\\s*"+c+"=([^;]*)").exec(x.cookie))&&d[2];return b?e:e&&unescape(e)},loop:function(c){var b={f:c,g:(new Date).getTime(),b:function(){for(var c=0;c<L.length;c++)L[c]===b&&L.splice(c--,1)}};2>L.push(b)&&function e(){h(L,function(b){b.f(Math.max(0,(new Date).getTime()-b.g),b.b)}).length&&
ga(e)}();return b.b},off:function(c){h(c.M,function(b){y?(b.e.detachEvent("on"+b.n,b.h),E[b.e.minified]=I(E[b.e.minified],b)):(b.e.removeEventListener(b.n,b.h,u),b.e.minified2=I(b.e.minified2,b))});c.M=t}},function(c,b){p[c]=b});"function"===typeof n.onload&&(T=n.onload);n.onload=function(){Y.apply(window,arguments);T.apply(window,arguments)};x.addEventListener&&x.addEventListener("DOMContentLoaded",Y,u);"function"===typeof n.d&&(G=n.d);n.d=function(){h(E,X);G.apply(window,arguments)};return{$:p,
$$:function(c){return D(c)[0]},EE:$,M:F}});

/*!
Chosen, a Select Box Enhancer for jQuery and Prototype
by Patrick Filler for Harvest, http://getharvest.com

Version 1.1.0
Full source at https://github.com/harvesthq/chosen
Copyright (c) 2011 Harvest http://getharvest.com

MIT License, https://github.com/harvesthq/chosen/blob/master/LICENSE.md
This file is generated by `grunt build`, do not edit it by hand.
*/
var ChosenLib = null;
(function() {
  var $, AbstractChosen, Chosen, SelectParser, _ref,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  SelectParser = (function() {
    function SelectParser() {
      this.options_index = 0;
      this.parsed = [];
    }

    SelectParser.prototype.add_node = function(child) {
      if (child.nodeName.toUpperCase() === "OPTGROUP") {
        return this.add_group(child);
      } else {
        return this.add_option(child);
      }
    };

    SelectParser.prototype.add_group = function(group) {
      var group_position, option, _i, _len, _ref, _results;
      group_position = this.parsed.length;
      this.parsed.push({
        array_index: group_position,
        group: true,
        label: this.escapeExpression(group.label),
        children: 0,
        disabled: group.disabled
      });
      _ref = group.childNodes;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        _results.push(this.add_option(option, group_position, group.disabled));
      }
      return _results;
    };

    SelectParser.prototype.add_option = function(option, group_position, group_disabled) {
      if (option.nodeName.toUpperCase() === "OPTION") {
        if (option.text !== "") {
          if (group_position != null) {
            this.parsed[group_position].children += 1;
          }
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            value: option.value,
            text: option.text,
            html: option.innerHTML,
            selected: option.selected,
            disabled: group_disabled === true ? group_disabled : option.disabled,
            group_array_index: group_position,
            classes: option.className,
            style: option.style.cssText
          });
        } else {
          this.parsed.push({
            array_index: this.parsed.length,
            options_index: this.options_index,
            empty: true
          });
        }
        return this.options_index += 1;
      }
    };

    SelectParser.prototype.escapeExpression = function(text) {
      var map, unsafe_chars;
      if ((text == null) || text === false) {
        return "";
      }
      if (!/[\&\<\>\"\'\`]/.test(text)) {
        return text;
      }
      map = {
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#x27;",
        "`": "&#x60;"
      };
      unsafe_chars = /&(?!\w+;)|[\<\>\"\'\`]/g;
      return text.replace(unsafe_chars, function(chr) {
        return map[chr] || "&amp;";
      });
    };

    return SelectParser;

  })();

  SelectParser.select_to_array = function(select) {
    var child, parser, _i, _len, _ref;
    parser = new SelectParser();
    _ref = select.childNodes;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      child = _ref[_i];
      parser.add_node(child);
    }
    return parser.parsed;
  };

  AbstractChosen = (function() {
    function AbstractChosen(form_field, options) {
      this.form_field = form_field;
      this.options = options != null ? options : {};
      if (!AbstractChosen.browser_is_supported()) {
        return;
      }
      this.is_multiple = this.form_field.multiple;
      this.set_default_text();
      this.set_default_values();
      this.setup();
      this.set_up_html();
      this.register_observers();
    }

    AbstractChosen.prototype.set_default_values = function() {
      var _this = this;
      this.click_test_action = function(evt) {
        return _this.test_active_click(evt);
      };
      this.activate_action = function(evt) {
        return _this.activate_field(evt);
      };
      this.active_field = false;
      this.mouse_on_container = false;
      this.results_showing = false;
      this.result_highlighted = null;
      this.allow_single_deselect = (this.options.allow_single_deselect != null) && (this.form_field.options[0] != null) && this.form_field.options[0].text === "" ? this.options.allow_single_deselect : false;
      this.disable_search_threshold = this.options.disable_search_threshold || 0;
      this.disable_search = this.options.disable_search || false;
      this.enable_split_word_search = this.options.enable_split_word_search != null ? this.options.enable_split_word_search : true;
      this.group_search = this.options.group_search != null ? this.options.group_search : true;
      this.search_contains = this.options.search_contains || true;
      this.single_backstroke_delete = this.options.single_backstroke_delete != null ? this.options.single_backstroke_delete : true;
      this.max_selected_options = this.options.max_selected_options || Infinity;
      this.inherit_select_classes = this.options.inherit_select_classes || false;
      this.display_selected_options = this.options.display_selected_options != null ? this.options.display_selected_options : true;
      this.display_disabled_options = this.options.display_disabled_options != null ? this.options.display_disabled_options : true;
      this.create_option = this.options.create_option != null ? this.options.create_option : false;
      this.persistent_create_option = this.options.persistent_create_option != null ? this.options.persistent_create_option : false;
      this.skip_no_results = this.options.skip_no_results != null ? this.options.skip_no_results : false;
    };

    AbstractChosen.prototype.set_default_text = function() {
      if (this.form_field.getAttribute("data-placeholder")) {
        this.default_text = this.form_field.getAttribute("data-placeholder");
      } else if (this.is_multiple) {
        this.default_text = this.options.placeholder_text_multiple || this.options.placeholder_text || AbstractChosen.default_multiple_text;
      } else {
        this.default_text = this.options.placeholder_text_single || this.options.placeholder_text || AbstractChosen.default_single_text;
      }
      this.results_none_found = this.form_field.getAttribute("data-no_results_text") || this.options.no_results_text || AbstractChosen.default_no_result_text;
      return this.create_option_text = this.form_field.getAttribute("data-create_option_text") || this.options.create_option_text || AbstractChosen.default_create_option_text;
    };

    AbstractChosen.prototype.mouse_enter = function() {
      return this.mouse_on_container = true;
    };

    AbstractChosen.prototype.mouse_leave = function() {
      return this.mouse_on_container = false;
    };

    AbstractChosen.prototype.input_focus = function(evt) {
      var _this = this;
      if (this.is_multiple) {
        if (!this.active_field) {
          return setTimeout((function() {
            return _this.container_mousedown();
          }), 50);
        }
      } else {
        if (!this.active_field) {
          return this.activate_field();
        }
      }
    };

    AbstractChosen.prototype.input_blur = function(evt) {
      var _this = this;
      if (!this.mouse_on_container) {
        this.active_field = false;
        return setTimeout((function() {
          return _this.blur_test();
        }), 100);
      }
    };

    AbstractChosen.prototype.results_option_build = function(options) {
      var content, data, _i, _len, _ref;
      content = '';
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        data = _ref[_i];
        if (data.group) {
          content += this.result_add_group(data);
        } else {
          content += this.result_add_option(data);
        }
        if (options != null ? options.first : void 0) {
          if (data.selected && this.is_multiple) {
            this.choice_build(data);
          } else if (data.selected && !this.is_multiple) {
            this.single_set_selected_text(data.text);
          }
        }
      }
      return content;
    };

    AbstractChosen.prototype.result_add_option = function(option) {
      var classes, option_el;
      if (!option.search_match) {
        return '';
      }
      if (!this.include_option_in_results(option)) {
        return '';
      }
      classes = [];
      if (!option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("active-result");
      }
      if (option.disabled && !(option.selected && this.is_multiple)) {
        classes.push("disabled-result");
      }
      if (option.selected) {
        classes.push("result-selected");
      }
      if (option.group_array_index != null) {
        classes.push("group-option");
      }
      if (option.classes !== "") {
        classes.push(option.classes);
      }
      option_el = document.createElement("li");
      option_el.className = classes.join(" ");
      option_el.style.cssText = option.style;
      option_el.setAttribute("data-option-array-index", option.array_index);
      option_el.innerHTML = option.search_text;
      return this.outerHTML(option_el);
    };

    AbstractChosen.prototype.result_add_group = function(group) {
      var group_el;
      if (!(group.search_match || group.group_match)) {
        return '';
      }
      if (!(group.active_options > 0)) {
        return '';
      }
      group_el = document.createElement("li");
      group_el.className = "group-result";
      group_el.innerHTML = group.search_text;
      return this.outerHTML(group_el);
    };
    
    AbstractChosen.prototype.append_option = function(option) {
        this.select_append_option(option);
    };

    AbstractChosen.prototype.results_update_field = function() {
      this.set_default_text();
      if (!this.is_multiple) {
        this.results_reset_cleanup();
      }
      this.result_clear_highlight();
      this.results_build();
      if (this.results_showing) {
        return this.winnow_results();
      }
    };

    AbstractChosen.prototype.reset_single_select_options = function() {
      var result, _i, _len, _ref, _results;
      _ref = this.results_data;
      _results = [];
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        result = _ref[_i];
        if (result.selected) {
          _results.push(result.selected = false);
        } else {
          _results.push(void 0);
        }
      }
      return _results;
    };

    AbstractChosen.prototype.results_toggle = function() {
      if (this.results_showing) {
        return this.results_hide();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.results_search = function(evt) {
      if (this.results_showing) {
        return this.winnow_results();
      } else {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.winnow_results = function() {
      var escapedSearchText, option, regex, regexAnchor, results, results_group, searchText, startpos, text, zregex, _i, _len, _ref, exact_result;
      this.no_results_clear();
      results = 0;
      exact_result = false;
      searchText = this.get_search_text();
      escapedSearchText = searchText.replace(/[-[\]{}()*+?.,\\^$|#\s]/g, "\\$&");
      regexAnchor = this.search_contains ? "" : "^";
      regex = new RegExp(regexAnchor + escapedSearchText, 'i');
      eregex = new RegExp("^" + escapedSearchText + "$", "i");
      zregex = new RegExp(escapedSearchText, 'i');
      _ref = this.results_data;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        option.search_match = false;
        results_group = null;
        if (this.include_option_in_results(option)) {
          if (option.group) {
            option.group_match = false;
            option.active_options = 0;
          }
          if ((option.group_array_index != null) && this.results_data[option.group_array_index]) {
            results_group = this.results_data[option.group_array_index];
            if (results_group.active_options === 0 && results_group.search_match) {
              results += 1;
            }
            results_group.active_options += 1;
          }
          if (!(option.group && !this.group_search)) {
            option.search_text = option.group ? option.label : option.html;
            option.search_match = this.search_string_match(option.search_text, regex);
            if (option.search_match && !option.group) {
              results += 1;
            }
            exact_result = exact_result || this.search_string_match(option.search_text, eregex);
            if (option.search_match) {
              if (searchText.length) {
                startpos = option.search_text.search(zregex);
                text = option.search_text.substr(0, startpos + searchText.length) + '</em>' + option.search_text.substr(startpos + searchText.length);
                option.search_text = text.substr(0, startpos) + '<em>' + text.substr(startpos);
              }
              if (results_group != null) {
                results_group.group_match = true;
              }
            } else if ((option.group_array_index != null) && this.results_data[option.group_array_index].search_match) {
              option.search_match = true;
            }
          }
        }
      }
      this.result_clear_highlight();
      if (results < 1 && searchText.length) {
        this.update_results_content("");
        if (!(this.create_option && this.skip_no_results)) {
            return this.no_results(searchText);
        }
      } else {
        this.update_results_content(this.results_option_build());
        this.form_field_jq.trigger("chosen:showing_dropdown", {
            chosen: this
          });
        this.winnow_results_set_highlight();
      }
      
      if (this.create_option && (results < 1 || (!exact_result && this.persistent_create_option)) && searchText.length > 0) {
        this.show_create_option(searchText);
      }
    };

    AbstractChosen.prototype.search_string_match = function(search_string, regex) {
      var part, parts, _i, _len;
      if (regex.test(search_string)) {
        return true;
      } else if (this.enable_split_word_search && (search_string.indexOf(" ") >= 0 || search_string.indexOf("[") === 0)) {
        parts = search_string.replace(/\[|\]/g, "").split(" ");
        if (parts.length) {
          for (_i = 0, _len = parts.length; _i < _len; _i++) {
            part = parts[_i];
            if (regex.test(part)) {
              return true;
            }
          }
        }
      }
    };

    AbstractChosen.prototype.choices_count = function() {
      var option, _i, _len, _ref;
      if (this.selected_option_count != null) {
        return this.selected_option_count;
      }
      this.selected_option_count = 0;
      _ref = this.form_field.options;
      for (_i = 0, _len = _ref.length; _i < _len; _i++) {
        option = _ref[_i];
        if (option.selected) {
          this.selected_option_count += 1;
        }
      }
      return this.selected_option_count;
    };

    AbstractChosen.prototype.choices_click = function(evt) {
      evt.preventDefault();
      if (!(this.results_showing || this.is_disabled)) {
        return this.results_show();
      }
    };

    AbstractChosen.prototype.keyup_checker = function(evt) {
      var stroke, _ref;
      stroke = (_ref = evt.which) != null ? _ref : evt.keyCode;
      this.search_field_scale();
      switch (stroke) {
        case 8:
          if (this.is_multiple && this.backstroke_length < 1 && this.choices_count() > 0) {
            return this.keydown_backstroke();
          } else if (!this.pending_backstroke) {
            this.result_clear_highlight();
            return this.results_search();
          }
          break;
        case 13:
          evt.preventDefault();
          if (this.results_showing) {
            return this.result_select(evt);
          }
          break;
        case 27:
          if (this.results_showing) {
            this.results_hide();
          }
          return true;
        case 9:
        case 38:
        case 40:
        case 16:
        case 91:
        case 17:
          break;
        default:
          return this.results_search();
      }
    };

    AbstractChosen.prototype.clipboard_event_checker = function(evt) {
      var _this = this;
      return setTimeout((function() {
        return _this.results_search();
      }), 50);
    };

    AbstractChosen.prototype.container_width = function() {
      if (this.options.width != null) {
        return this.options.width;
      } else {
        return "" + this.form_field.offsetWidth + "px";
      }
    };

    AbstractChosen.prototype.include_option_in_results = function(option) {
      if (this.is_multiple && (!this.display_selected_options && option.selected)) {
        return false;
      }
      if (!this.display_disabled_options && option.disabled) {
        return false;
      }
      if (option.empty) {
        return false;
      }
      return true;
    };

    AbstractChosen.prototype.search_results_touchstart = function(evt) {
      this.touch_started = true;
      return this.search_results_mouseover(evt);
    };

    AbstractChosen.prototype.search_results_touchmove = function(evt) {
      this.touch_started = false;
      return this.search_results_mouseout(evt);
    };

    AbstractChosen.prototype.search_results_touchend = function(evt) {
      if (this.touch_started) {
        return this.search_results_mouseup(evt);
      }
    };

    AbstractChosen.prototype.outerHTML = function(element) {
      var tmp;
      if (element.outerHTML) {
        return element.outerHTML;
      }
      tmp = document.createElement("div");
      tmp.appendChild(element);
      return tmp.innerHTML;
    };

    AbstractChosen.browser_is_supported = function() {
      if (window.navigator.appName === "Microsoft Internet Explorer") {
        return document.documentMode >= 8;
      }
      if (/iP(od|hone)/i.test(window.navigator.userAgent)) {
        return false;
      }
      if (/Android/i.test(window.navigator.userAgent)) {
        if (/Mobile/i.test(window.navigator.userAgent)) {
          return false;
        }
      }
      return true;
    };

    AbstractChosen.default_multiple_text = "Select Some Options";

    AbstractChosen.default_single_text = "Select an Option";

    AbstractChosen.default_no_result_text = "No results match";
    
    AbstractChosen.default_create_option_text = "Add Option";

    return AbstractChosen;

  })();

  /*$ = jQuery;

  $.fn.extend({
    chosen: function(options) {
      if (!AbstractChosen.browser_is_supported()) {
        return this;
      }
      return this.each(function(input_field) {
        var $this, chosen;
        $this = $(this);
        chosen = $this.data('chosen');
        if (options === 'destroy' && chosen) {
          chosen.destroy();
        } else if (!chosen) {
          $this.data('chosen', new Chosen(this, options));
        }
      });
    }
  });*/

  var jquery_parents = function(elm, selector, closest) {
    var par = null;
    if (closest === true) {
        par = elm;
    } else {
        par = MINI.$(elm[0].parentNode);
    }
    if (par === null) {
        return null;
    }
    if (par.is(selector)) {
        return par;
    } else {
        return jquery_parents(par, selector);
    }
  };

  ChosenLib = {
    chosen: function(elm, options) {
        //check for images here.
        var imgMap = {};
        var imgKey = 0;
        var miniElm = MINI.$(elm);
        var colorMap = {};
        var _loadImgMap = function() {
            imgKey = 0;
            imgMap = {};
            miniElm.select('option').each(function(k) {
		        var imgK = MINI.$(k).get('%img-src');
		        if (imgK !== null) {
		            imgMap[imgKey]=imgK;
		            imgKey++;
		        }
		    });

        };
        var _loadColorMap = function() {
            colorMap = {};
            miniElm.select('option').each(function(k, oidx) {
	            var col = MINI.$(k).get('%color');
	            if (col !== null) {
	                colorMap[oidx] = col;
	            }
	        });
        };
        _loadImgMap();
        _loadColorMap();
        //do normal Chosen code
        var chElm = new Chosen(elm, options);

        var _updateMultiColorBG = function(sel) {
            if (sel !== undefined) {
                if (sel.selected !== undefined) {
                    chElm.container.select('.search-choice-close').each(function(sc) {
                        //check data tag
                        var aidx = MINI.$(sc).get('%option-array-index');
                        if (colorMap[aidx] !== undefined) {
                            MINI.$(sc.parentNode).set('$backgroundColor', colorMap[aidx]);
                        }
                    });
                }
            }
            return true;
        };

        //listen on select event
        if (miniElm.get('@multiple') === 'multiple') {
            miniElm.on('change', _updateMultiColorBG);
        }

        var _initImg = function() {
            chElm.container.set('+chosenImage-container');

            var cssMap = function(imgSrc) {
                if(imgSrc) {
                    return {
                        '$backgroundImage': 'url(' + imgSrc + ')',
                        '$backgroundRepeat': 'no-repeat'
                    };
                } else {
                    return {
                        '$backgroundImage': 'none'
                    };
                }
            };

            miniElm.on('chosen:showing_dropdown', function() {
                chElm.container.select('.chosen-results li').each(function(k) {
                    var el = MINI.$(k);
                    var itemIdx = parseInt(el.get("%option-array-index"), 10);
                    el.set(cssMap(imgMap[itemIdx - 1]));
                });

            });

            miniElm.on('change', function(changeObj) {
                var imgSrc = '';
                var valL = miniElm.select('option');
                if (changeObj) {
                    valL.each(function(itm, idx) {
                        if (itm.value === changeObj.selected) {
                            if (MINI.$(itm).get('%img-src')) {
                                imgSrc = MINI.$(itm).get('%img-src');
                            }
                        }
                    });
                } else {
                    miniElm.select('option').each(function(itm) {
	                    if (itm.selected) {
	                        imgSrc = MINI.$(itm).get('%img-src');
	                    }
	                });
                }
                chElm.container.select('.chosen-single span').set(cssMap(imgSrc));
                return true;
            });

            miniElm.trigger('change');
        };

        if (imgKey > 0) {
            _initImg();
        }

        miniElm.on('chosen:updated', function() {
            _loadColorMap();
            _loadImgMap();
            if (miniElm.get('@multiple') === 'multiple') {
                _updateMultiColorBG({selected: true});
            }
            if (imgKey > 0) {
	            _initImg();
	        }
	        return true;
        });


        return chElm;
    }
  };

  Chosen = (function(_super) {
    __extends(Chosen, _super);

    function Chosen() {
      _ref = Chosen.__super__.constructor.apply(this, arguments);
      return _ref;
    }

    Chosen.prototype.setup = function() {
      this.form_field_jq = MINI.$(this.form_field);
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.is_rtl = this.form_field_jq.is(".chosen-rtl");
    };

    Chosen.prototype.set_up_html = function() {
      var container_classes, container_props;
      var me = this;
      container_classes = ["chosen-container"];
      container_classes.push("chosen-container-" + (this.is_multiple ? "multi" : "single"));
      if (this.inherit_select_classes && this.form_field.className) {
        container_classes.push(this.form_field.className);
      }
      if (this.is_rtl) {
        container_classes.push("chosen-rtl");
      }
      container_props = {
        '@class': container_classes.join(' '),
        '@style': "width: " + (this.container_width()) + ";",
        '@title': this.form_field.title
      };
      if (this.form_field.id.length) {
        container_props.id = this.form_field.id.replace(/[^\w]/g, '_') + "_chosen";
      }
      this.container = MINI.EE("div", container_props, function(melm) {
        me.container = MINI.$(melm);
      });
      this.form_field_jq.set('$display','none').addAfter(this.container);
      if (this.is_multiple) {
        this.container.set('innerHTML','<ul class="chosen-choices"><li class="search-field"><input type="text" value="' + this.default_text + '" class="default" autocomplete="off" style="width:25px;" /></li></ul><div class="chosen-drop"><ul class="chosen-results"></ul></div>');
      } else {
        this.container.set('innerHTML','<a class="chosen-single chosen-default" tabindex="-1"><span>' + this.default_text + '</span><div><b></b></div></a><div class="chosen-drop"><div class="chosen-search"><input type="text" autocomplete="off" /></div><ul class="chosen-results"></ul></div>');
      }

      this.dropdown = MINI.$(this.container.select('div.chosen-drop')[0]);
      this.search_field = MINI.$(this.container.select('input')[0]);
      this.search_results = MINI.$(this.container.select('ul.chosen-results')[0]);
      this.search_field_scale();
      this.search_no_results = MINI.$(this.container.select('li.no-results')[0]);
      if (this.is_multiple) {
        this.search_choices = MINI.$(this.container.select('ul.chosen-choices')[0]);
        this.search_container = MINI.$(this.container.select('li.search-field')[0]);
      } else {
        this.search_container = MINI.$(this.container.select('div.chosen-search')[0]);
        this.selected_item = MINI.$(this.container.select('.chosen-single')[0]);
      }
      this.results_build();
      this.set_tab_index();
      this.set_label_behavior();
      return this.form_field_jq.trigger("chosen:ready", {
        chosen: this
      });
    };

    Chosen.prototype.register_observers = function() {
      var _this = this;
      this.container.on('mousedown', function(evt) {
        _this.container_mousedown(evt);
        return false;
      });
      this.container.on('mouseup', function(evt) {
        _this.container_mouseup(evt);
      });
      this.container.on('mouseenter', function(evt) {
        _this.mouse_enter(evt);
      });
      this.container.on('mouseleave', function(evt) {
        _this.mouse_leave(evt);
      });
      this.search_results.on('mouseup', function(evt) {
        _this.search_results_mouseup(evt);
      });
      this.search_results.on('mouseover', function(evt) {
        _this.search_results_mouseover(evt);
      });
      this.search_results.on('mouseout', function(evt) {
        _this.search_results_mouseout(evt);
      });
      this.search_results.on('mousewheel', function(evt) {
        _this.search_results_mousewheel(evt);
        return false;
      });
      this.search_results.on('DOMMouseScroll', function(evt) {
        _this.search_results_mousewheel(evt);
        return false;
      });
      /*
      this.search_results.bind('touchstart', function(evt) {
        _this.search_results_touchstart(evt);
      });
      this.search_results.bind('touchmove', function(evt) {
        _this.search_results_touchmove(evt);
      });
      this.search_results.bind('touchend', function(evt) {
        _this.search_results_touchend(evt);
      });*/
      this.form_field_jq.on("chosen:updated", function(evt) {
        _this.results_update_field(evt);
        return true;
      });
      this.form_field_jq.on("chosen:activate.chosen", function(evt) {
        _this.activate_field(evt);
        return true;
      });
      this.form_field_jq.on("chosen:open.chosen", function(evt) {
        _this.container_mousedown(evt);
        return true;
      });
      this.form_field_jq.on("chosen:close.chosen", function(evt) {
        _this.input_blur(evt);
        return true;
      });
      this.search_field.on('blur', function(evt) {
        _this.input_blur(evt);
        return true;
      });
      this.search_field.on('keyup', function(evt) {
        _this.keyup_checker(evt);
        return true;
      });
      this.search_field.on('keydown', function(evt) {
        _this.keydown_checker(evt);
        return true;
      });
      this.search_field.on('focus', function(evt) {
        _this.input_focus(evt);
        return true;
      });
      this.search_field.on('cut.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
        return true;
      });
      this.search_field.on('paste.chosen', function(evt) {
        _this.clipboard_event_checker(evt);
        return true;
      });
      if (this.is_multiple) {
        return this.search_choices.on('click', function(evt) {
          _this.choices_click(evt);
          return true;
        });
      } else {
        return this.container.on('click', function(evt) {
          evt.preventDefault();
          return false;
        });
      }
    };

    Chosen.prototype.destroy = function() {
      //MINI.$(this.container[0].ownerDocument)
      $.off(this.click_test_action);
      if (this.search_field[0].tabIndex) {
        this.form_field_jq[0].tabIndex = this.search_field[0].tabIndex;
      }
      this.container.remove();
      this.form_field_jq.removeData('chosen');
      return this.form_field_jq.show();
    };

    Chosen.prototype.search_field_disabled = function() {
      this.is_disabled = this.form_field_jq[0].disabled;
      if (this.is_disabled) {
        this.container.set('+chosen-disabled');
        this.search_field[0].disabled = true;
        if (!this.is_multiple) {
          this.selected_item.unbind("focus.chosen", this.activate_action);
        }
        return this.close_field();
      } else {
        this.container.set('-chosen-disabled');
        this.search_field[0].disabled = false;
        if (!this.is_multiple) {
            //focus.chosen = focus??
          return this.selected_item.on("focus", this.activate_action);
        }
      }
    };

    Chosen.prototype.container_mousedown = function(evt) {
      if (!this.is_disabled) {
        if (evt && evt.type === "mousedown" && !this.results_showing) {
          //evt.preventDefault();
        }
        if (!((evt != null) && (MINI.$(evt.target)).is(".search-choice-close"))) {
          if (!this.active_field) {
            if (this.is_multiple) {
              this.search_field[0].value = "";
            }
            MINI.$(this.container[0].ownerDocument).on('click', this.click_test_action);
            this.results_show();
          } else if (!this.is_multiple && evt && ((MINI.$(evt.target)[0] === this.selected_item[0]) || jquery_parents(MINI.$(evt.target),"a.chosen-single").length)) {
            //evt.preventDefault();
            this.results_toggle();
          }
          return this.activate_field();
        }
      }
    };

    Chosen.prototype.container_mouseup = function(evt) {
      if (evt.target.nodeName === "ABBR" && !this.is_disabled) {
        return this.results_reset(evt);
      }
    };

    Chosen.prototype.search_results_mousewheel = function(evt) {
      var delta;
      if (evt) {
        delta = -evt.wheelDelta || evt.detail;
      }
      if (delta != null) {
        //evt.preventDefault();
        if (evt.type === 'DOMMouseScroll') {
          delta = delta * 40;
        }
        //return this.search_results.scrollTop(delta + this.search_results.scrollTop());
        this.search_results[0].scrollTop = delta + this.search_results[0].scrollTop;
        return this.search_results;
      }
    };

    Chosen.prototype.blur_test = function(evt) {
      if (!this.active_field && this.container.is(".chosen-container-active")) {
        return this.close_field();
      }
    };

    Chosen.prototype.close_field = function() {
        //"click.chosen",
      //MINI.$(this.container[0].ownerDocument)
      MINI.$.off(this.click_test_action);
      this.active_field = false;
      this.results_hide();
      this.container.set("-chosen-container-active");
      this.clear_backstroke();
      this.show_search_field_default();
      return this.search_field_scale();
    };

    Chosen.prototype.activate_field = function() {
      this.container.set("+chosen-container-active");
      this.active_field = true;
      this.search_field[0].value = this.search_field[0].value;
      this.search_field[0].focus();
      return this.search_field;
    };

    Chosen.prototype.test_active_click = function(evt) {
      var active_container;
      active_container = jquery_parents(MINI.$(evt.target), '.chosen-container', true);
      if (active_container.length && this.container[0] === active_container[0]) {
        return this.active_field = true;
      } else {
        return this.close_field();
      }
    };

    Chosen.prototype.results_build = function() {
      this.parsing = true;
      this.selected_option_count = null;
      this.results_data = SelectParser.select_to_array(this.form_field);
      if (this.is_multiple) {
        this.search_choices.select("li.search-choice").remove();
      } else if (!this.is_multiple) {
        this.single_set_selected_text();
        if ((this.disable_search || this.form_field.options.length <= this.disable_search_threshold) && !this.create_option) {
          this.search_field[0].readOnly = true;
          this.container.set("+chosen-container-single-nosearch");
        } else {
          this.search_field[0].readOnly = false;
          this.container.set("-chosen-container-single-nosearch");
        }
      }
      this.update_results_content(this.results_option_build({
        first: true
      }));
      this.search_field_disabled();
      this.show_search_field_default();
      this.search_field_scale();
      return this.parsing = false;
    };

    Chosen.prototype.result_do_highlight = function(el) {
      var high_bottom, high_top, maxHeight, visible_bottom, visible_top;
      if (el.length) {
        this.result_clear_highlight();
        this.result_highlight = el;
        this.result_highlight.set("+highlighted");

        maxHeight = parseInt(this.search_results.get("$maxHeight"), 10);
        visible_top = this.search_results[0].scrollTop;
        visible_bottom = maxHeight + visible_top;
        high_top = this.result_highlight[0].offsetTop; // + this.search_results[0].scrollTop;
        high_bottom = high_top + this.result_highlight[0].offsetHeight; //+margintop + marginbottom

        if (high_bottom >= visible_bottom) {
          //return this.search_results[0].scrollTop((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
            this.search_results[0].scrollTop = ((high_bottom - maxHeight) > 0 ? high_bottom - maxHeight : 0);
        } else if (high_top < visible_top) {
          //return this.search_results.scrollTop(high_top);
            this.search_results[0].scrollTop = (high_top);
        }
        return this.search_results;
      }
    };

    Chosen.prototype.result_clear_highlight = function() {
      if (this.result_highlight) {
        this.result_highlight.set("-highlighted");
      }
      return this.result_highlight = null;
    };

    Chosen.prototype.results_show = function() {
      if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
        this.form_field_jq.trigger("chosen:maxselected", {
          chosen: this
        });
        return false;
      }
      this.container.set("+chosen-with-drop");
      this.results_showing = true;
      this.search_field[0].focus();
      this.search_field[0].value = this.search_field[0].value;
      this.winnow_results();
      return this.form_field_jq.trigger("chosen:showing_dropdown", {
        chosen: this
      });
    };

    Chosen.prototype.update_results_content = function(content) {
      return this.search_results.set('innerHTML', content);
    };

    Chosen.prototype.results_hide = function() {
      if (this.results_showing) {
        this.result_clear_highlight();
        this.container.set("-chosen-with-drop");
        this.form_field_jq.trigger("chosen:hiding_dropdown", {
          chosen: this
        });
      }
      return this.results_showing = false;
    };

    Chosen.prototype.set_tab_index = function(el) {
      var ti;
      if (this.form_field.tabIndex) {
        ti = this.form_field.tabIndex;
        this.form_field.tabIndex = -1;
        return this.search_field[0].tabIndex = ti;
      }
    };

    Chosen.prototype.set_label_behavior = function() {
      var _this = this;
      //JT hotfix
      this.form_field_label = []; //this.form_field_jq.parents("label");
      if (!this.form_field_label.length && this.form_field.id.length) {
        this.form_field_label = MINI.$("label[for='" + this.form_field.id + "']");
      }
      if (this.form_field_label.length > 0) {
        return this.form_field_label.on('click', function(evt) {
          if (_this.is_multiple) {
            return _this.container_mousedown(evt);
          } else {
            return _this.activate_field();
          }
        });
      }
    };

    Chosen.prototype.show_search_field_default = function() {
      if (this.is_multiple && this.choices_count() < 1 && !this.active_field) {
        this.search_field[0].value = this.default_text;
        return this.search_field.set("+default");
      } else {
        this.search_field[0].value = "";
        return this.search_field.set("-default");
      }
    };

    Chosen.prototype.search_results_mouseup = function(evt) {
      var target;
      target = MINI.$(evt.target).is(".active-result") ? MINI.$(evt.target) : MINI.$(jquery_parents(MINI.$(evt.target), ".active-result")[0]);
      if (target.length) {
        this.result_highlight = target;
        this.result_select(evt);
        return this.search_field[0].focus();
      }
    };

    Chosen.prototype.search_results_mouseover = function(evt) {
      var target;
      target = MINI.$(evt.target).is(".active-result") ? MINI.$(evt.target) : MINI.$(jquery_parents(MINI.$(evt.target), ".active-result")[0]);
      if (target) {
        return this.result_do_highlight(target);
      }
    };

    Chosen.prototype.search_results_mouseout = function(evt) {
      if (MINI.$(evt.target).is(".active-result" || MINI.$(jquery_parents(MINI.$(evt.target), '.active-result')[0]))) {
        return this.result_clear_highlight();
      }
    };

    Chosen.prototype.choice_build = function(item) {
      var choice, close_link,
        _this = this;
      choice = MINI.EE('li', {
        "@class": "search-choice"
      }, function(melm) {
        choice = MINI.$(melm);
      });
      this.search_container.addBefore(choice);
      choice.set('innerHTML',"<span>" + item.html + "</span>");

      /*choice = $('<li />', {
        "class": "search-choice"
      }).set('innerHTML',"<span>" + item.html + "</span>");*/
      if (item.disabled) {
        choice.set('+search-choice-disabled');
      } else {
        close_link = MINI.EE('a', {
	        "@class": 'search-choice-close',
            "%option-array-index": item.array_index
	    }, function(melm) {
	        close_link = MINI.$(melm);
            close_link.on('click',function(evt) {
	          return _this.choice_destroy_link_click(evt);
	        });
	    });
        /*close_link = $('<a />', {
          "class": 'search-choice-close',
          'data-option-array-index': item.array_index
        });
        close_link.on('click', function(evt) {
          return _this.choice_destroy_link_click(evt);
        });*/
        choice.add(close_link);
      }
      //return this.search_container.before(choice);
      return this.search_container;
    };

    Chosen.prototype.choice_destroy_link_click = function(evt) {
      evt.preventDefault();
      evt.stopPropagation();
      if (!this.is_disabled) {
        return this.choice_destroy(MINI.$(evt.target));
      }
    };

    Chosen.prototype.choice_destroy = function(link) {
      if (this.result_deselect(link[0].getAttribute("data-option-array-index"))) {
        this.show_search_field_default();
        if (this.is_multiple && this.choices_count() > 0 && this.search_field[0].value.length < 1) {
          this.results_hide();
        }
        MINI.$(link[0].parentNode).remove();
        //link.parents('li').first().remove();
        return this.search_field_scale();
      }
    };

    Chosen.prototype.results_reset = function() {
      this.reset_single_select_options();
      this.form_field.options[0].selected = true;
      this.single_set_selected_text();
      this.show_search_field_default();
      this.results_reset_cleanup();
      this.form_field_jq.trigger("change");
      if (this.active_field) {
        return this.results_hide();
      }
    };

    Chosen.prototype.results_reset_cleanup = function() {
      this.current_selectedIndex = this.form_field.selectedIndex;
      return this.selected_item.select("abbr").remove();
    };

    Chosen.prototype.result_select = function(evt) {
      var high, item;
      if (this.result_highlight) {
        high = this.result_highlight;
        
        if (high.get("@class").indexOf("create-option") >= 0) {
            this.select_create_option(this.search_field[0].value);
            return this.results_hide();
        }
        
        this.result_clear_highlight();
        if (this.is_multiple && this.max_selected_options <= this.choices_count()) {
          this.form_field_jq.trigger("chosen:maxselected", {
            chosen: this
          });
          return false;
        }
        if (this.is_multiple) {
          high.set("-active-result");
        } else {
          this.reset_single_select_options();
        }
        item = this.results_data[high[0].getAttribute("data-option-array-index")];
        item.selected = true;
        this.form_field.options[item.options_index].selected = true;
        this.selected_option_count = null;
        if (this.is_multiple) {
          this.choice_build(item);
        } else {
          this.single_set_selected_text(item.text);
        }
        if (!((evt.metaKey || evt.ctrlKey) && this.is_multiple)) {
          this.results_hide();
        }
        this.search_field[0].value = "";
        if (this.is_multiple || this.form_field.selectedIndex !== this.current_selectedIndex) {
          this.form_field_jq.trigger("change", {
            'selected': this.form_field.options[item.options_index].value
          });
        }
        this.current_selectedIndex = this.form_field.selectedIndex;
        return this.search_field_scale();
      }
    };

    Chosen.prototype.single_set_selected_text = function(text) {
      if (text == null) {
        text = this.default_text;
      }
      if (text === this.default_text) {
        this.selected_item.set("+chosen-default");
      } else {
        this.single_deselect_control_build();
        this.selected_item.set("-chosen-default");
      }
      return this.selected_item.select("span").set('innerHTML',text);
    };

    Chosen.prototype.result_deselect = function(pos) {
      var result_data;
      result_data = this.results_data[pos];
      if (!this.form_field.options[result_data.options_index].disabled) {
        result_data.selected = false;
        this.form_field.options[result_data.options_index].selected = false;
        this.selected_option_count = null;
        this.result_clear_highlight();
        if (this.results_showing) {
          this.winnow_results();
        }
        this.form_field_jq.trigger("change", {
          deselected: this.form_field.options[result_data.options_index].value
        });
        this.search_field_scale();
        return true;
      } else {
        return false;
      }
    };

    Chosen.prototype.single_deselect_control_build = function() {
      if (!this.allow_single_deselect) {
        return;
      }
      if (!this.selected_item.select("abbr").length) {
        var cancelElm = MINI.EE('abbr', {"@class": "search-choice-close"});
        this.selected_item.select("span").addAfter(cancelElm);
      }
      return this.selected_item.set("+chosen-single-with-deselect");
    };

    Chosen.prototype.get_search_text = function() {
      if (this.search_field[0].value === this.default_text) {
        return "";
      } else {
        var mtrim = function(x) {
            return x.replace(/^\s+|\s+$/gm,'');
        };
        s = document.createElement('div');
        s.textContent = mtrim(this.search_field[0].value);
        return s.innerHTML;
      }
    };

    Chosen.prototype.winnow_results_set_highlight = function() {
      var do_high, selected_results;
      selected_results = !this.is_multiple ? this.search_results.select(".result-selected.active-result") : [];
      do_high = selected_results.length ? MINI.$(selected_results[0]) : MINI.$(this.search_results.select(".active-result")[0]);
      if (do_high != null) {
        return this.result_do_highlight(do_high);
      }
    };

    Chosen.prototype.no_results = function(terms) {
      var no_results_html;
      no_results_html = MINI.EE('li', {
        "@class":"no-results"
      }, function(melm) {
        no_results_html = MINI.$(melm);
      });
      this.search_results.add(no_results_html);
      no_results_html.set('innerHTML', this.results_none_found + ' "<span></span>"');
      //no_results_html = $('<li class="no-results">' + this.results_none_found + ' "<span></span>"</li>');
      no_results_html.select("span").set('innerHTML',terms);
      //this.search_results.append(no_results_html);
      return this.form_field_jq.trigger("chosen:no_results", {
        chosen: this
      });
    };
    
    Chosen.prototype.show_create_option = function(terms) {
        var create_option_html, me = this;
        // <li class="create-option active-result"><a>#{text}</a>: "#{terms}"</li>
        create_option_html = MINI.EE("li", {"@class": "create-option active-result"}, 
                                     [MINI.EE("a", this.create_option_text), ": \"" + terms + "\""],
                                     function(el) {
							             var createOption = MINI.$(el);
//							             createOption.on('click',function(evt) {
//							                 me.select_create_option(terms);
//							             });
							         });
        this.search_results.add(create_option_html);
    };
    
    Chosen.prototype.create_option_clear = function() {
      return this.search_results.select(".create-option").remove();
    };
    
    Chosen.prototype.select_create_option = function(terms) {
      if (typeof this.create_option === "function") {
        return this.select_append_option(this.create_option.call(this, terms));
      } else {
        return this.select_append_option({value: terms, text: terms, color: color});
      }
    };
    
    Chosen.prototype.select_append_option = function(options) {
      var option, me = this;
      if(options == undefined){
      	return;
      }
      // <option value="#{value}">#{text}</option>
      option = MINI.EE("option", {"@value": options.value, "@selected": "selected", "%color": options.color}, options.text,
                       function(asdf) {option = asdf;});
      MINI.$(this.form_field).add(option);
      window.setTimeout(function() {
        me.form_field_jq.trigger("chosen:updated", {
          chosen: me
        });
        //me.form_field_jq.trigger("change");
        me.search_field.trigger("focus");
      }, 1);
    }

    Chosen.prototype.no_results_clear = function() {
      return this.search_results.select(".no-results").remove();
    };

    Chosen.prototype.keydown_arrow = function() {
      var next_sib;
      if (this.results_showing && this.result_highlight) {
        next_sib = MINI.$(this.result_highlight[0].nextSibling);//.nextAll("li.active-result").first();
        if (next_sib) {
          return this.result_do_highlight(next_sib);
        }
      } else if (this.results_showing && this.create_option) {
        this.result_do_highlight(this.search_results.select(".create-option"));
      }
      else {
        return this.results_show();
      }
    };

    Chosen.prototype.keyup_arrow = function() {
      var prev_sibs;
      if (!this.results_showing && !this.is_multiple) {
        return this.results_show();
      } else if (this.result_highlight) {
        prev_sibs = MINI.$(this.result_highlight[0].previousSibling); //.prevAll("li.active-result");
        if (prev_sibs.length) {
          return this.result_do_highlight(prev_sibs);
        } else {
          if (this.choices_count() > 0) {
            this.results_hide();
          }
          return this.result_clear_highlight();
        }
      }
    };

    Chosen.prototype.keydown_backstroke = function() {
      var next_available_destroy;
      if (this.pending_backstroke) {
        this.choice_destroy(MINI.$(this.pending_backstroke.select("a")[0]));
        return this.clear_backstroke();
      } else {
        var lastSibling = MINI.$(this.search_container[0].parentNode).select('li.search-choice');
        lastSibling = MINI.$(lastSibling[lastSibling.length-1]);
        next_available_destroy = lastSibling; //this.search_container.siblings("li.search-choice").last();
        if (next_available_destroy.length && !next_available_destroy.is(".search-choice-disabled")) {
          this.pending_backstroke = next_available_destroy;
          if (this.single_backstroke_delete) {
            return this.keydown_backstroke();
          } else {
            return this.pending_backstroke.set("+search-choice-focus");
          }
        }
      }
    };

    Chosen.prototype.clear_backstroke = function() {
      if (this.pending_backstroke) {
        this.pending_backstroke.set("-search-choice-focus");
      }
      return this.pending_backstroke = null;
    };

    Chosen.prototype.keydown_checker = function(evt) {
      var stroke, _ref1;
      stroke = (_ref1 = evt.which) != null ? _ref1 : evt.keyCode;
      this.search_field_scale();
      if (stroke !== 8 && this.pending_backstroke) {
        this.clear_backstroke();
      }
      switch (stroke) {
        case 8:
          this.backstroke_length = this.search_field[0].value.length;
          break;
        case 9:
          if (this.results_showing && !this.is_multiple) {
            this.result_select(evt);
          }
          this.mouse_on_container = false;
          break;
        case 13:
          evt.preventDefault();
          break;
        case 38:
          evt.preventDefault();
          this.keyup_arrow();
          break;
        case 40:
          evt.preventDefault();
          this.keydown_arrow();
          break;
      }
    };

    Chosen.prototype.search_field_scale = function() {
      var div, f_width, h, style, style_block, styles, w, _i, _len;
      if (this.is_multiple) {
        h = 0;
        w = 0;
        style_block = {
            "$position":"absolute",
            "$left":"-1000px",
            "$top":"-1000px",
            "$display":"none"
        };
        styles = ['$fontSize', '$fontStyle', '$fontWeight', '$fontFamily', '$lineHeight', '$textTransform', '$letterSpacing'];
        for (_i = 0, _len = styles.length; _i < _len; _i++) {
          style = styles[_i];
          style_block[style] = this.search_field.get(style);
          //style_block += style + ":" + this.search_field.css(style) + ";";
        }
        div = MINI.EE("div", style_block, function(melm) {
	        div = MINI.$(melm);
	    });
        MINI.$('body').addAfter(div);
        div.set('innerHTML', this.search_field[0].value);
        div.set('$display', 'block');
        w = div[0].getBoundingClientRect().width + 50;
        div.set('$display', 'none');
        div.remove();
        f_width = this.container[0].offsetWidth; //this.container.outerWidth();
        if (w > f_width - 10) {
          w = f_width - 10;
        }
        return this.search_field.set({
          '$width': w + 'px'
        });
      }
    };

    return Chosen;

  })(AbstractChosen);

}).call(this);

(function() {
  UserSnap = UserSnap || {};
  UserSnap.Config = {homeHost:"//d3mvnvhjmkxpjz.cloudfront.net/", UrlSessionkey:"//api.usersnap.com/report/sessionkey", UrlHtml2png:"//api.usersnap.com/report/html2png", UrlSendreport:"//api.usersnap.com/report/sendReport", UrlHtml2pngAndSend:"//api.usersnap.com/report/sendScreenshot", UrlCarbonCopy:"//api.usersnap.com/report/carbonCopy", devDebug:!1, apiErrorUrl:"https://usersnap.com/yuno", jsVersion:"12669", cssVersion:"12669", buildSuffix:""}
})();
var us = {i_createnewlabel:"Create new label", t_highlight:"Use the highlighter tool to emphasize proposals and issues on the page.", t_blackout:"We are serious about your privacy. Black out areas with personal information.", t_note:"Add sticky notes to the webpage if highlights and blackouts are not expressive enough.", t_pen:"Use this pen to draw something on your screen.", t_sendfb:"Send a screenshot of this site.", t_help:"Display the help screen.", t_min:"Minimize window.", t_max:"Maximize window.", 
b_pen:"Pen", b_highlight:"Highlight", b_blackout:"Blackout", b_note:"Note", b_next:"Next", b_cancel:"Cancel", b_send:"Send", b_needhelp:"Need help?", b_close:"Close", b_ok:"Ok", i_commentbox:"Please add comments here", i_emailbox:"Your email address", i_emailnotvalid:"The specified email address is not valid!", i_thanks:"Submitting your screenshot", i_apikey:"The specified API key for this website is invalid!", t_usbutton:"Send a screenshot with your annotations.", t_arrow:"Use this arrow to point out something!", 
b_arrow:"Arrow", i_commentnotvalid:"Please specify a comment!", i_emailmissing:"Please enter an email address!", i_feedback:"Usersnap", i_screenshot:"A screenshot is attached!", b_yes:"Yes", b_no:"No", i_closequestiontitle:"Close Usersnap", i_closequestion:"Do you really want to close Usersnap?", t_delete:"Delete", b_prev:"Prev", b_starttour:"Start Tour", b_endtour:"Close Tour", g_arrow0:"Use the arrow to point to elements.", g_arrow1:"Pick a nice color.", g_blackout0:"Use this tool to blackout areas.", 
g_highlight0:"Use this tool to highlight areas.", g_note0:"Place a sticky note on your web site.", g_note1:"Pick a nice color.", g_pen0:"Use this pen for free-style drawing.", g_pen1:"Set size and color", g_learnmore:"Learn more about Usersnap.", g_welcome:"Need help?", g_finish:"You are ready to rock!", i_feedbacknotvalid:"Your feedback is empty, please add some information!", i_error:"Error", i_warning:"Warning", g_email0:"Email", g_email1req:"Enter your Email here (required).", g_email1opt:"Enter your Email here (optional).", 
g_comment0:"Comment", g_comment1req:"Enter comment here (required).", g_comment1opt:"Enter comment here (optional).", t_pixelruler:"Use this pixel ruler to measure something!", b_pixelruler:"Pixel Ruler", g_pixelruler0:"Use the Pixel Ruler to measure distances.", g_pixelruler1:"Hold the Ctrl-key/Cmd-key to disable the horizontal or vertical snap.", g_welcomehead:"Welcome to Usersnap.", i_required:"(required)", i_optional:"(optional)", i_finished:"Finished!", i_assignee:"Assign to...", i_assigneenotvalid:"Please select an Assignee!", 
i_generalnotvalid:"is not valid!", i_title:"Title", i_titlenotvalid:"The title is required!", t_comment:"Communicate directly on the screen!", b_comment:"Comment", i_you:"You", i_now:"now", g_commenttool0:"Use this tool for interactive comments.", i_label:"Labels", i_labelnotvalid:"Please add at least one label.", t_close:"Close Usersnap.", i_addscreenshot:"Add a screenshot", i_thanksfeedback:"Submitting your feedback"}, util = {isEmail:function(a) {
  return a ? /^(([^<>()\[\]\\.,;:\s@\"]+(\.[^<>()\[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(a) : !1
}, getInstalledPlugins:function() {
  var a = [];
  if(util.isIE() && !util.isIE11()) {
    if(window.ActiveXObject) {
      for(var b = [{file:"AcroPDF.PDF", name:"Adobe Reader", version:function(a) {
        return parseFloat(a.GetVersions().split(",")[0].split("=")[1])
      }}, {file:"PDF.PdfCtrl", name:"Adobe Reader", version:function(a) {
        return parseFloat(a.GetVersions().split(",")[0].split("=")[1])
      }}, {file:"ShockwaveFlash.ShockwaveFlash", name:"Flash Player", version:function(a) {
        a = a.GetVariable("$version").substring(4).split(",");
        return parseFloat(a[0] + "." + a[1])
      }}, {file:"QuickTime.QuickTime", name:"QuickTime Player", version:function(a) {
        a = a.QuickTimeVersion.toString(16);
        return parseFloat(a.substring(0, 1) + "." + a.substring(1, 3))
      }}, {file:"SWCtl.SWCtl", name:"Shockwave Player", version:function(a) {
        return parseFloat(a.ShockwaveVersion("").split("r")[0])
      }}, {file:"WMPlayer.OCX", name:"Windows Media Player", version:function(a) {
        return parseFloat(a.versionInfo)
      }}, {file:"Skype.Detection", name:"Skype", version:null}, {file:"AgControl.AgControl", name:"Silverlight", version:function(a) {
        return a.IsVersionSupported("4.0") ? 4 : a.IsVersionSupported("3.0") ? 3 : a.IsVersionSupported("2.0") ? 2 : 0
      }}, {file:"rmocx.RealPlayer G2 Control", name:"RealPlayer", version:function(a) {
        return parseFloat(a.GetVersionInfo())
      }}, {file:"rmocx.RealPlayer G2 Control.1", name:"RealPlayer", version:function(a) {
        return parseFloat(a.GetVersionInfo())
      }}, {file:"RealPlayer.RealPlayer(tm) ActiveX Control (32-bit)", name:"RealPlayer", version:function(a) {
        return parseFloat(a.GetVersionInfo())
      }}, {file:"RealVideo.RealVideo(tm) ActiveX Control (32-bit)", name:"RealPlayer", version:function(a) {
        return parseFloat(a.GetVersionInfo())
      }}, {file:"RealPlayer", name:"RealPlayer", version:function(a) {
        return parseFloat(a.GetVersionInfo())
      }}], c = null, d = 0;d < b.length;d++) {
        try {
          c = new ActiveXObject(b[d].file), a.push({name:b[d].name + " " + (b[d].version ? b[d].version(c) : 0), filename:b[d].file, description:""})
        }catch(e) {
        }
      }
    }
  }else {
    b = navigator.plugins;
    for(c = 0;c < b.length;c++) {
      a.push({name:b[c].name, filename:b[c].filename, description:b[c].description})
    }
  }
  return a
}, generateColor:function(a) {
  var b = Math.random, c = function(a) {
    a = a.toString(16);
    2 > a.length && (a = "0" + a);
    return a
  };
  if(void 0 !== a) {
    if("string" === typeof a) {
      var b = a, d = 0, e, f, g;
      if(0 !== b.length) {
        e = 0;
        for(g = b.length;e < g;e++) {
          f = b.charCodeAt(e), d = (d << 5) - d + f, d |= 0
        }
      }
      a = d
    }
    b = function() {
      var b = 1E4 * Math.sin(a++);
      return b - Math.floor(b)
    }
  }
  for(f = e = d = 255;381 < d + e + f;) {
    d = parseInt(256 * b(), 10), e = parseInt(256 * b(), 10), f = parseInt(256 * b(), 10)
  }
  return"#" + c(d) + c(e) + c(f)
}, getScreenSize:function() {
  return{width:window.screen.width, height:window.screen.height}
}, isCtrlKey:function(a) {
  return a.ctrlKey || !0 === a.metaKey
}, decEscUTF8:function(a) {
  return a.replace(/&#x([\d\w]{4});/gi, function(a, c) {
    return String.fromCharCode(parseInt(c, 16))
  })
}, hex2Rgb:function(a, b) {
  a = a.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(a, b, c, d) {
    return b + b + c + c + d + d
  });
  var c = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(a);
  if(c) {
    var d = parseInt(c[1], 16), e = parseInt(c[2], 16), c = parseInt(c[3], 16);
    return!0 === b ? "rgb(" + d + ", " + e + ", " + c + ")" : {r:d, g:e, b:c}
  }
  return null
}, rgb2Hex:function(a) {
  if("#" === a.charAt(0)) {
    return a
  }
  var b = "0123456789abcdef".split(""), c = function(a) {
    return isNaN(a) ? "00" : b[(a - a % 16) / 16] + b[a % 16]
  };
  a = a.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
  return"#" + c(a[1]) + c(a[2]) + c(a[3])
}, parseURL:function(a) {
  var b = document.createElement("a");
  b.href = a;
  a = b.protocol + "//" + b.hostname;
  "" !== b.port && (a += ":" + b.port);
  return a
}, checkMobile:function() {
  return/Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera)
}, checkMobileAndroid:function() {
  var a = /Chrome/i, b = /Firefox/i, c = navigator.userAgent || navigator.vendor || window.opera;
  return/Android/i.test(c) && !a.test(c) && !b.test(c)
}, checkMobileChrome:function() {
  var a = /Chrome/i, b = navigator.userAgent || navigator.vendor || window.opera;
  return/Android/i.test(b) && a.test(b)
}, checkiOS:function() {
  return/iPhone|iPad|iPod/i.test(navigator.userAgent || navigator.vendor || window.opera)
}, isRetina:function() {
  return 1 < window.devicePixelRatio
}, formatDate:function(a, b, c) {
  var d = /\b(?:[PMCEA][SDP]T|(?:Pacific|Mountain|Central|Eastern|Atlantic) (?:Standard|Daylight|Prevailing) Time|(?:GMT|UTC)(?:[\-+]\d{4})?)\b/g, e = /[^\-+\dA-Z]/g, f = function(a, b) {
    a = String(a);
    for(b = b || 2;a.length < b;) {
      a = "0" + a
    }
    return a
  }, g = {"default":"ddd mmm dd yyyy HH:MM:ss", shortDate:"m/d/yy", mediumDate:"mmm d, yyyy", longDate:"mmmm d, yyyy", fullDate:"dddd, mmmm d, yyyy", shortTime:"h:MM TT", mediumTime:"h:MM:ss TT", longTime:"h:MM:ss TT Z", isoDate:"yyyy-mm-dd", isoTime:"HH:MM:ss", isoDateTime:"yyyy-mm-dd'T'HH:MM:ss", isoUtcDateTime:"UTC:yyyy-mm-dd'T'HH:MM:ss'Z'"}, h = "Sun Mon Tue Wed Thu Fri Sat Sunday Monday Tuesday Wednesday Thursday Friday Saturday".split(" "), j = "Jan Feb Mar Apr May Jun Jul Aug Sep Oct Nov Dec January February March April May June July August September October November December".split(" ");
  1 == arguments.length && ("[object String]" == Object.prototype.toString.call(a) && !/\d/.test(a)) && (b = a, a = void 0);
  a = a ? new Date(a) : new Date;
  if(isNaN(a)) {
    throw new SyntaxError("invalid date");
  }
  b = String(g[b] || b || g["default"]);
  "UTC:" == b.slice(0, 4) && (b = b.slice(4), c = !0);
  var l = c ? "getUTC" : "get", g = a[l + "Date"](), k = a[l + "Day"](), m = a[l + "Month"](), p = a[l + "FullYear"](), n = a[l + "Hours"](), s = a[l + "Minutes"](), r = a[l + "Seconds"](), l = a[l + "Milliseconds"](), u = c ? 0 : a.getTimezoneOffset(), t = {d:g, dd:f(g), ddd:h[k], dddd:h[k + 7], m:m + 1, mm:f(m + 1), mmm:j[m], mmmm:j[m + 12], yy:String(p).slice(2), yyyy:p, h:n % 12 || 12, hh:f(n % 12 || 12), H:n, HH:f(n), M:s, MM:f(s), s:r, ss:f(r), l:f(l, 3), L:f(99 < l ? Math.round(l / 10) : l), 
  t:12 > n ? "a" : "p", tt:12 > n ? "am" : "pm", T:12 > n ? "A" : "P", TT:12 > n ? "AM" : "PM", Z:c ? "UTC" : (String(a).match(d) || [""]).pop().replace(e, ""), o:(0 < u ? "-" : "+") + f(100 * Math.floor(Math.abs(u) / 60) + Math.abs(u) % 60, 4), S:["th", "st", "nd", "rd"][3 < g % 10 ? 0 : (10 != g % 100 - g % 10) * g % 10]};
  return b.replace(/d{1,4}|m{1,4}|yy(?:yy)?|([HhMsTt])\1?|[LloSZ]|"[^"]*"|'[^']*'/g, function(a) {
    return a in t ? t[a] : a.slice(1, a.length - 1)
  })
}, nl2br:function(a, b) {
  return(a + "").replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, "$1" + (b || "undefined" === typeof b ? "<br />" : "<br>") + "$2")
}, getViewportInfo:function() {
  var a = null, b = {zoomLevel:0, contentWidth:0, contentHeight:0, orientation:"L", deviceWidth:0, deviceHeight:0, retina:!1, devicePixelRatio:void 0 === window.devicePixelRatio ? 1 : window.devicePixelRatio, mult:0};
  b.zoomLevel = detectZoom.zoom();
  0 === b.zoomLevel && (b.zoomLevel = 1);
  if(util.checkMobile()) {
    b.contentWidth = document.documentElement.scrollWidth, b.contentHeight = document.documentElement.scrollHeight, b.orientation = 90 === window.orientation || -90 === window.orientation ? "L" : "P", util.checkMobileChrome(), b.deviceWidth = window.screen.width, b.deviceHeight = window.screen.height, b.retina = util.isRetina()
  }else {
    var a = util.getViewport(), c = b.zoomLevel = 1;
    0.001 < Math.abs(b.zoomLevel - 1) && (c = b.zoomLevel);
    b.contentWidth = a.width;
    b.contentHeight = a.height;
    b.deviceWidth = Math.round(a.width * c);
    b.deviceHeight = Math.round(a.height * c)
  }
  b.mult = 1;
  0.001 < Math.abs(b.zoomLevel - 1) && (b.mult = b.zoomLevel);
  return b
}, sprintf:function(a, b) {
  var c = arguments;
  return c[0].replace(/\{(\d+)\}/g, function(a, b) {
    b = parseInt(b, 10);
    return"undefined" != typeof c[b + 1] ? c[b + 1] : a
  })
}, isFF:function() {
  return 0 <= navigator.userAgent.search(/Firefox/)
}, isSafari:function() {
  return 0 <= navigator.userAgent.search(/Safari/) ? !util.isChrome() : !1
}, isChrome:function() {
  return 0 <= navigator.userAgent.search(/Chrome/)
}, isIE:function() {
  return 0 <= navigator.userAgent.search(/MSIE/) || 0 <= navigator.userAgent.search(/Trident/) || 0 <= navigator.userAgent.search(/Edge/)
}, isEdge:function() {
  return 0 <= navigator.userAgent.search(/Edge/)
}, isIE11:function() {
  return 0 <= navigator.userAgent.search(/Trident\/7.0/)
}, isIE10:function() {
  return 0 <= navigator.userAgent.search(/MSIE 10/)
}, isIE9:function() {
  return 0 <= navigator.userAgent.search(/MSIE 9/)
}, isIE8:function() {
  return 0 <= navigator.userAgent.search(/MSIE 8/)
}, isIE7:function() {
  return 0 <= navigator.userAgent.search(/MSIE 7/)
}, getWhich:function(a, b) {
  "undefined" === typeof b && (b = window);
  return!a.which && void 0 !== a.button ? a.button & 1 ? 1 : a.button & 2 ? 3 : a.button & 4 ? 2 : 0 : util.isIE9() ? b.event.button : void 0 !== a.buttons ? a.buttons : a.which
}, getSourceElement:function(a) {
  return util.isIE() ? a.srcElement : a.target
}, ltrim:function(a, b) {
  return a.replace(RegExp("^[" + (b || "\\s") + "]+", "g"), "")
}, rtrim:function(a, b) {
  return a.replace(RegExp("[" + (b || "\\s") + "]+$", "g"), "")
}, trim:function(a, b) {
  return util.ltrim(util.rtrim(a, b), b)
}, getDocHeight:function() {
  var a = document;
  return Math.max(Math.max(a.body.scrollHeight, a.documentElement.scrollHeight), Math.max(a.body.offsetHeight, a.documentElement.offsetHeight), Math.max(a.body.clientHeight, a.documentElement.clientHeight))
}, getDocWidth:function() {
  var a = document;
  return Math.max(Math.max(a.body.scrollWidth, a.documentElement.scrollWidth), Math.max(a.body.offsetWidth, a.documentElement.offsetWidth), Math.max(a.body.clientWidth, a.documentElement.clientWidth))
}, getIEScrollSize:function(a, b) {
  var c = {width:a, height:b};
  if(util.isIE8()) {
    var d = util.getViewport(), e = 0, e = util.getDocWidth();
    0 < e - d.width ? c.width -= 21 : (c.width -= 4, c.height = d.height)
  }else {
    if(util.isIE9() || util.isIE10()) {
      c.width = document.documentElement.scrollWidth
    }
  }
  return c
}, getViewport:function(a) {
  var b = 0, c = 0, b = document.documentElement.clientWidth;
  "undefined" !== typeof window.innerHeight ? c = window.innerHeight : "undefined" !== typeof document.documentElement && ("undefined" !== typeof document.documentElement.clientWidth && 0 !== document.documentElement.clientWidth) && (c = document.documentElement.clientHeight);
  !0 === a && document.body.scrollHeight > c && ("undefined" !== typeof window.innerWidth ? b = window.innerWidth : util.isIE7() ? b += 17 : util.isIE8() && (b += 17));
  return{width:b, height:c}
}, serialize:function(a) {
  var b = [], c;
  for(c in a) {
    "function" !== typeof a[c] && b.push(c + "=" + encodeURIComponent(a[c]))
  }
  return b.join("&")
}, getScrollOffset:function() {
  var a, b;
  util.isIE7() || util.isIE8() ? (b = document.documentElement.scrollTop, a = document.documentElement.scrollLeft) : (b = window.pageYOffset, a = window.pageXOffset);
  return[a, b]
}, _recursiveSearchUp:function(a, b, c) {
  "undefined" === typeof c && (c = document);
  return null === a || a === c ? !1 : "undefined" === typeof a.getAttribute ? util._recursiveSearchUp(a.parentNode, b, c) : a.getAttribute("id") === b ? !0 : a.getAttribute("class") === b ? !0 : a.getAttribute("className") === b ? !0 : util._recursiveSearchUp(a.parentNode, b, c)
}, stopPropagation:function(a) {
  a = a || window.event;
  a.cancelBubble = !0;
  a.stopPropagation && a.stopPropagation()
}, deepClone:function(a) {
  function b(a) {
    if(null === a || void 0 === a || window.ActiveXObject && a instanceof window.ActiveXObject) {
      return null
    }
    if(void 0 === a.__obj_id || null === a.__obj_id) {
      try {
        a.__obj_id = f++
      }catch(b) {
        return null
      }
      e[a.__obj_id] = a
    }
    return a.__obj_id
  }
  function c(a, e) {
    if(null === a || "string" === typeof a || "number" === typeof a || "boolean" == typeof a) {
      return a
    }
    if(void 0 === a) {
      return null
    }
    if("function" === typeof a) {
      return"__Function__"
    }
    if(3 < e) {
      return"__MaxRecursionReached__"
    }
    var f, g;
    if(a instanceof Date) {
      return f = new Date, f.setTime(a.getTime()), f
    }
    if(a instanceof Array) {
      f = [];
      for(g = 0;g < a.length;++g) {
        if(f[g] = c(a[g], e + 1), void 0 === f[g]) {
          throw Error("Unable to clone object.");
        }
      }
      return f
    }
    if("object" === typeof a) {
      if(0 <= util.indexOf(d, b(a))) {
        return"__AlreadyCloned__"
      }
      f = {};
      d.push(b(a));
      for(g in a) {
        if("__obj_id" != g && (a.hasOwnProperty && a.hasOwnProperty(g)) && (f[g] = c(a[g], e + 1), void 0 === f[g])) {
          throw Error("Unable to clone object.");
        }
      }
      return f
    }
    throw Error("Unable to clone obj! Its type isn't supported.");
  }
  var d = [], e = [], f = 0;
  a = c(a, 0);
  for(var g = 0;g < e.length;g++) {
    try {
      delete e[g].__obj_id
    }catch(h) {
      e[g].__obj_id = void 0
    }
  }
  return a
}, limitedClone:function(a, b) {
  function c(a) {
    if(null === a || void 0 === a || window.ActiveXObject && a instanceof window.ActiveXObject) {
      return null
    }
    if(void 0 === a.__obj_id || null === a.__obj_id) {
      try {
        a.__obj_id = f++
      }catch(b) {
        return null
      }
      e[a.__obj_id] = a
    }
    return a.__obj_id
  }
  for(var d = [], e = [], f = 0, g = {}, h = [[a, g, "value", ""]], j;0 < h.length;) {
    var l = h.shift(), k = l[0], m = l[1], p = l[2], l = l[3], n = typeof k;
    if(null === k || "string" === n || "number" === n || "boolean" == n) {
      n = k
    }else {
      if(void 0 === k) {
        n = "\x00\uffff3"
      }else {
        if("function" === n) {
          n = "\x00\uffff1";
          continue
        }else {
          if(k instanceof Date) {
            n = new Date, n.setTime(k.getTime())
          }else {
            if(k instanceof Array) {
              var n = [], s = 0;
              for(j = 0;j < k.length;++j) {
                n[j] = "\x00\uffff0";
                h.push([k[j], n, j, l + "/" + j]);
                if(s > b) {
                  for(j = 0;j < h.length;j++) {
                    h[j][1] === n && (h.splice(j, 1), j--)
                  }
                  n = "\x00\uffff0";
                  break
                }
                s++
              }
            }else {
              if("object" === n) {
                if(window.HTMLElement && k instanceof window.HTMLElement || window.Element && k instanceof window.Element) {
                  continue
                }
                if(0 <= util.indexOf(d, c(k))) {
                  n = "\x00\uffff2"
                }else {
                  d.push(c(k));
                  n = {};
                  j = 0;
                  for(var r in k) {
                    if("__obj_id" != r && k.hasOwnProperty && k.hasOwnProperty(r)) {
                      n[r] = "\x00\uffff0";
                      h.push([k[r], n, r, l + "/" + r]);
                      if(j > b) {
                        for(j = 0;j < h.length;j++) {
                          h[j][1] === n && (h.splice(j, 1), j--)
                        }
                        n = "\x00\uffff0";
                        break
                      }
                      j += r.length
                    }
                  }
                }
              }else {
                continue
              }
            }
          }
        }
      }
    }
    m[p] = n;
    k = util.toJSON(void 0 !== g.value ? g.value : "").length;
    if(k > b) {
      m[p] = "\x00\uffff0";
      for(j = 0;j < h.length;j++) {
        h[j][1] === n && (h.splice(j, 1), j--)
      }
    }else {
      if(k > b - 5) {
        break
      }
    }
  }
  for(j = 0;j < e.length;j++) {
    try {
      delete e[j].__obj_id
    }catch(u) {
      try {
        e[j].__obj_id = void 0
      }catch(t) {
      }
    }
  }
  return g.value
}};
util.Base64 = {_keyStr:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=", encode:function() {
  return window.btoa ? function(a) {
    return window.btoa(util.Base64._utf8_encode(a))
  } : function(a) {
    var b = "", c, d, e, f, g, h, j = 0;
    for(a = util.Base64._utf8_encode(a);j < a.length;) {
      c = a.charCodeAt(j++), d = a.charCodeAt(j++), e = a.charCodeAt(j++), f = c >> 2, c = (c & 3) << 4 | d >> 4, g = (d & 15) << 2 | e >> 6, h = e & 63, isNaN(d) ? g = h = 64 : isNaN(e) && (h = 64), b = b + util.Base64._keyStr.charAt(f) + util.Base64._keyStr.charAt(c) + util.Base64._keyStr.charAt(g) + util.Base64._keyStr.charAt(h)
    }
    return b
  }
}(), decode:function() {
  return window.atob ? function(a) {
    return util.Base64._utf8_decode(window.atob(a))
  } : function(a) {
    var b = "", c, d, e, f, g, h = 0;
    for(a = a.replace(/[^A-Za-z0-9\+\/\=]/g, "");h < a.length;) {
      c = util.Base64._keyStr.indexOf(a.charAt(h++)), d = util.Base64._keyStr.indexOf(a.charAt(h++)), f = util.Base64._keyStr.indexOf(a.charAt(h++)), g = util.Base64._keyStr.indexOf(a.charAt(h++)), c = c << 2 | d >> 4, d = (d & 15) << 4 | f >> 2, e = (f & 3) << 6 | g, b += String.fromCharCode(c), 64 != f && (b += String.fromCharCode(d)), 64 != g && (b += String.fromCharCode(e))
    }
    return b = util.Base64._utf8_decode(b)
  }
}(), _utf8_encode:function(a) {
  return unescape(encodeURIComponent(a))
}, _utf8_decode:function(a) {
  return decodeURIComponent(escape(a))
}};
util.printStackTrace = function() {
  function a(b) {
    b = b || {guess:!1};
    b = b.e || null;
    return(new a.implementation).run(b, void 0)
  }
  a.implementation = function() {
  };
  a.implementation.prototype = {run:function(a, c) {
    a = a || this.createException();
    c = c || this.mode(a);
    return"other" === c ? this.other(arguments.callee) : this[c](a)
  }, createException:function() {
    try {
      this.undef()
    }catch(a) {
      return a
    }
  }, mode:function(a) {
    return a.arguments && a.stack ? "chrome" : a.stack && a.sourceURL ? "safari" : a.stack && a.number ? "ie" : a.stack && a.fileName ? "firefox" : a.message && a["opera#sourceloc"] ? !a.stacktrace || -1 < a.message.indexOf("\n") && a.message.split("\n").length > a.stacktrace.split("\n").length ? "opera9" : "opera10a" : a.message && a.stack && a.stacktrace ? 0 > a.stacktrace.indexOf("called from line") ? "opera10b" : "opera11" : a.stack && !a.fileName ? "chrome" : "other"
  }, instrumentFunction:function(b, c, d) {
    b = b || window;
    var e = b[c];
    b[c] = function() {
      d.call(this, a({}));
      return b[c]._instrumented.apply(this, arguments)
    };
    b[c]._instrumented = e
  }, deinstrumentFunction:function(a, c) {
    a[c].constructor === Function && (a[c]._instrumented && a[c]._instrumented.constructor === Function) && (a[c] = a[c]._instrumented)
  }, chrome:function(a) {
    return(a.stack + "\n").replace(/^\s+(at eval )?at\s+/gm, "").replace(/^([^\(]+?)([\n$])/gm, "{anonymous}() ($1)$2").replace(/^Object.<anonymous>\s*\(([^\)]+)\)/gm, "{anonymous}() ($1)").replace(/^(.+) \((.+)\)$/gm, "$1@$2").split("\n").slice(1, -1)
  }, safari:function(a) {
    return a.stack.replace(/\[native code\]\n/m, "").replace(/^(?=\w+Error\:).*$\n/m, "").replace(/^@/gm, "{anonymous}()@").split("\n")
  }, ie:function(a) {
    return a.stack.replace(/^\s*at\s+(.*)$/gm, "$1").replace(/^Anonymous function\s+/gm, "{anonymous}() ").replace(/^(.+)\s+\((.+)\)$/gm, "$1@$2").split("\n").slice(1)
  }, firefox:function(a) {
    a = a.stack.replace(/(?:\n@:0)?\s+$/m, "").replace(/^(?:\((\S*)\))?@/gm, "{anonymous}($1)@").split("\n");
    for(var c = 0;c < a.length;c++) {
      a[c] += ":1"
    }
    return a
  }, opera11:function(a) {
    var c = /^.*line (\d+), column (\d+)(?: in (.+))? in (\S+):$/;
    a = a.stacktrace.split("\n");
    for(var d = [], e = 0, f = a.length;e < f;e += 2) {
      var g = c.exec(a[e]);
      if(g) {
        var h = g[4] + ":" + g[1] + ":" + g[2], g = g[3] || "global code", g = g.replace(/<anonymous function: (\S+)>/, "$1").replace(/<anonymous function>/, "{anonymous}");
        d.push(g + "@" + h + " -- " + a[e + 1].replace(/^\s+/, ""))
      }
    }
    return d
  }, opera10b:function(a) {
    var c = /^(.*)@(.+):(\d+)$/;
    a = a.stacktrace.split("\n");
    for(var d = [], e = 0, f = a.length;e < f;e++) {
      var g = c.exec(a[e]);
      g && d.push((g[1] ? g[1] + "()" : "global code") + "@" + g[2] + ":" + g[3])
    }
    return d
  }, opera10a:function(a) {
    var c = /Line (\d+).*script (?:in )?(\S+)(?:: In function (\S+))?$/i;
    a = a.stacktrace.split("\n");
    for(var d = [], e = 0, f = a.length;e < f;e += 2) {
      var g = c.exec(a[e]);
      g && d.push((g[3] || "{anonymous}") + "()@" + g[2] + ":" + g[1] + " -- " + a[e + 1].replace(/^\s+/, ""))
    }
    return d
  }, opera9:function(a) {
    var c = /Line (\d+).*script (?:in )?(\S+)/i;
    a = a.message.split("\n");
    for(var d = [], e = 2, f = a.length;e < f;e += 2) {
      var g = c.exec(a[e]);
      g && d.push("{anonymous}()@" + g[2] + ":" + g[1] + " -- " + a[e + 1].replace(/^\s+/, ""))
    }
    return d
  }, other:function(a) {
    for(var c = /function\s*([\w\-$]+)?\s*\(/i, d = [], e, f;a && 20 > d.length;) {
      e = c.test(a.toString()) ? RegExp.$1 || "{anonymous}" : "{anonymous}", f = Array.prototype.slice.call(a.arguments || []), d[d.length] = e + "(" + this.stringifyArguments(f) + ")@unknown:0:0", a = a.caller
    }
    return d
  }, stringifyArguments:function(a) {
    for(var c = [], d = Array.prototype.slice, e = 0;e < a.length;++e) {
      var f = a[e];
      void 0 === f ? c[e] = "undefined" : null === f ? c[e] = "null" : f.constructor && (f.constructor === Array ? c[e] = 3 > f.length ? "[" + this.stringifyArguments(f) + "]" : "[" + this.stringifyArguments(d.call(f, 0, 1)) + "..." + this.stringifyArguments(d.call(f, -1)) + "]" : f.constructor === Object ? c[e] = "#object" : f.constructor === Function ? c[e] = "#function" : f.constructor === String ? c[e] = '"' + f + '"' : f.constructor === Number && (c[e] = f))
    }
    return c.join(",")
  }};
  return a
}();
(function(a) {
  function b(a) {
    return 10 > a ? "0" + a : a
  }
  function c(a) {
    f.lastIndex = 0;
    return f.test(a) ? '"' + a.replace(f, function(a) {
      var b = j[a];
      return"string" === typeof b ? b : "\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }) + '"' : '"' + a + '"'
  }
  function d(a, f) {
    var e, j, s, r, u = g, t, q = f[a];
    if(q) {
      if(q instanceof Date) {
        q = isFinite(q.valueOf()) ? q.getUTCFullYear() + "-" + b(q.getUTCMonth() + 1) + "-" + b(q.getUTCDate()) + "T" + b(q.getUTCHours()) + ":" + b(q.getUTCMinutes()) + ":" + b(q.getUTCSeconds()) + "Z" : null
      }else {
        if("string" === typeof q || "number" === typeof q || "boolean" === typeof q) {
          q = q.valueOf()
        }
      }
    }
    "function" === typeof l && (q = l.call(f, a, q));
    switch(typeof q) {
      case "string":
        return c(q);
      case "number":
        return isFinite(q) ? String(q) : "null";
      case "boolean":
      ;
      case "null":
        return String(q);
      case "object":
        if(!q) {
          return"null"
        }
        g += h;
        t = [];
        if("[object Array]" === Object.prototype.toString.apply(q)) {
          r = q.length;
          for(e = 0;e < r;e += 1) {
            t[e] = d(e, q) || "null"
          }
          s = 0 === t.length ? "[]" : g ? "[\n" + g + t.join(",\n" + g) + "\n" + u + "]" : "[" + t.join(",") + "]";
          g = u;
          return s
        }
        if(l && "object" === typeof l) {
          r = l.length;
          for(e = 0;e < r;e += 1) {
            "string" === typeof l[e] && (j = l[e], (s = d(j, q)) && t.push(c(j) + (g ? ": " : ":") + s))
          }
        }else {
          for(j in q) {
            q.hasOwnProperty(j) && (s = d(j, q)) && t.push(c(j) + (g ? ": " : ":") + s)
          }
        }
        s = 0 === t.length ? "{}" : g ? "{\n" + g + t.join(",\n" + g) + "\n" + u + "}" : "{" + t.join(",") + "}";
        g = u;
        return s
    }
  }
  var e = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, f = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, g, h, j = {"\b":"\\b", "\t":"\\t", "\n":"\\n", "\f":"\\f", "\r":"\\r", '"':'\\"', "\\":"\\\\"}, l;
  a.toJSON = function(a, b, c) {
    var e;
    h = g = "";
    if("number" === typeof c) {
      for(e = 0;e < c;e += 1) {
        h += " "
      }
    }else {
      "string" === typeof c && (h = c)
    }
    if((l = b) && "function" !== typeof b && ("object" !== typeof b || "number" !== typeof b.length)) {
      throw Error("JSON.stringify");
    }
    return d("", {"":a})
  };
  a.parseJSON = function(a, b) {
    function c(a, d) {
      var e, f, g = a[d];
      if(g && "object" === typeof g) {
        for(e in g) {
          Object.prototype.hasOwnProperty.call(g, e) && (f = c(g, e), void 0 !== f ? g[e] = f : delete g[e])
        }
      }
      return b.call(a, d, g)
    }
    var d;
    a = String(a);
    e.lastIndex = 0;
    e.test(a) && (a = a.replace(e, function(a) {
      return"\\u" + ("0000" + a.charCodeAt(0).toString(16)).slice(-4)
    }));
    if(/^[\],:{}\s]*$/.test(a.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) {
      return d = eval("(" + a + ")"), "function" === typeof b ? c({"":d}, "") : d
    }
    throw new SyntaxError("JSON.parse");
  }
})(util);
util.indexOf = function(a, b, c) {
  if(void 0 === a || null === a) {
    throw new TypeError('"this" is null or not defined');
  }
  if("function" === typeof a.indexOf) {
    return a.indexOf(b, c)
  }
  var d = a.length >>> 0;
  c = +c || 0;
  Infinity === Math.abs(c) && (c = 0);
  0 > c && (c += d, 0 > c && (c = 0));
  for(;c < d;c++) {
    if(a[c] === b) {
      return c
    }
  }
  return-1
};
util.restrictPlainPaste = function(a, b) {
  b.on("paste", function(b) {
    b.preventDefault();
    var d = {}, d = b.clipboardData || a.clipboardData;
    b = d.getData("text");
    b = b.replace(/</gi, "&lt;").replace(/>/gi, "&gt;").replace(/(\n)+/gi, " ").replace(/(\r)+/gi, "");
    util.pasteHtmlAtCaret(a, b, !1)
  })
};
util.pasteHtmlAtCaret = function(a, b, c) {
  var d, e;
  if(a.getSelection) {
    if(d = a.getSelection(), d.getRangeAt && d.rangeCount) {
      e = d.getRangeAt(0);
      e.deleteContents();
      var f = a.document.createElement("div");
      f.innerHTML = b;
      b = a.document.createDocumentFragment();
      for(var g;a = f.firstChild;) {
        g = b.appendChild(a)
      }
      f = b.firstChild;
      e.insertNode(b);
      g && (e = e.cloneRange(), e.setStartAfter(g), c ? e.setStartBefore(f) : e.collapse(!0), d.removeAllRanges(), d.addRange(e))
    }
  }else {
    if((d = a.document.selection) && "Control" != d.type) {
      g = d.createRange(), g.collapse(!0), d.createRange().pasteHTML(b), c && (e = d.createRange(), e.setEndPoint("StartToStart", g), e.select())
    }
  }
};
util.textFromContenteditable = function(a) {
  return void 0 === "".trim ? (a = a.innerHTML.replace(/<br[^>]*>/gi, "\n").replace(/<(div|p)[^>]*>([\s\S]+?)<\/(div|p)>/gi, function(a, c, d) {
    return 0 < util.trim(d).length ? "\n" + d : a
  }).replace(/<\/?[^>]+>/gi, "").replace(/(&nbsp;)+/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&"), util.trim(a)) : a.innerHTML.replace(/<br[^>]*>/gi, "\n").replace(/<(div|p)[^>]*>([\s\S]+?)<\/(div|p)>/gi, function(a, c, d) {
    return 0 < d.trim().length ? "\n" + d : a
  }).replace(/<\/?[^>]+>/gi, "").replace(/(&nbsp;)+/gi, " ").replace(/&lt;/gi, "<").replace(/&gt;/gi, ">").replace(/&amp;/gi, "&").trim()
};
Date.prototype.toISOString || function() {
  function a(a) {
    a = String(a);
    1 === a.length && (a = "0" + a);
    return a
  }
  Date.prototype.toISOString = function() {
    return this.getUTCFullYear() + "-" + a(this.getUTCMonth() + 1) + "-" + a(this.getUTCDate()) + "T" + a(this.getUTCHours()) + ":" + a(this.getUTCMinutes()) + ":" + a(this.getUTCSeconds()) + "." + String((this.getUTCMilliseconds() / 1E3).toFixed(3)).slice(2, 5) + "Z"
  }
}();
util.md5 = function() {
  function a(a, b) {
    function d(a, b, e, f, g, j) {
      b = c(c(b, a), c(f, j));
      return c(b << g | b >>> 32 - g, e)
    }
    function h(a, b, c, e, f, j, h) {
      return d(b & c | ~b & e, a, b, f, j, h)
    }
    function j(a, b, c, e, f, j, h) {
      return d(b & e | c & ~e, a, b, f, j, h)
    }
    function l(a, b, c, e, f, j, h) {
      return d(c ^ (b | ~e), a, b, f, j, h)
    }
    var k = a[0], m = a[1], p = a[2], n = a[3], k = h(k, m, p, n, b[0], 7, -680876936), n = h(n, k, m, p, b[1], 12, -389564586), p = h(p, n, k, m, b[2], 17, 606105819), m = h(m, p, n, k, b[3], 22, -1044525330), k = h(k, m, p, n, b[4], 7, -176418897), n = h(n, k, m, p, b[5], 12, 1200080426), p = h(p, n, k, m, b[6], 17, -1473231341), m = h(m, p, n, k, b[7], 22, -45705983), k = h(k, m, p, n, b[8], 7, 1770035416), n = h(n, k, m, p, b[9], 12, -1958414417), p = h(p, n, k, m, b[10], 17, -42063), m = h(m, 
    p, n, k, b[11], 22, -1990404162), k = h(k, m, p, n, b[12], 7, 1804603682), n = h(n, k, m, p, b[13], 12, -40341101), p = h(p, n, k, m, b[14], 17, -1502002290), m = h(m, p, n, k, b[15], 22, 1236535329), k = j(k, m, p, n, b[1], 5, -165796510), n = j(n, k, m, p, b[6], 9, -1069501632), p = j(p, n, k, m, b[11], 14, 643717713), m = j(m, p, n, k, b[0], 20, -373897302), k = j(k, m, p, n, b[5], 5, -701558691), n = j(n, k, m, p, b[10], 9, 38016083), p = j(p, n, k, m, b[15], 14, -660478335), m = j(m, p, 
    n, k, b[4], 20, -405537848), k = j(k, m, p, n, b[9], 5, 568446438), n = j(n, k, m, p, b[14], 9, -1019803690), p = j(p, n, k, m, b[3], 14, -187363961), m = j(m, p, n, k, b[8], 20, 1163531501), k = j(k, m, p, n, b[13], 5, -1444681467), n = j(n, k, m, p, b[2], 9, -51403784), p = j(p, n, k, m, b[7], 14, 1735328473), m = j(m, p, n, k, b[12], 20, -1926607734), k = d(m ^ p ^ n, k, m, b[5], 4, -378558), n = d(k ^ m ^ p, n, k, b[8], 11, -2022574463), p = d(n ^ k ^ m, p, n, b[11], 16, 1839030562), m = 
    d(p ^ n ^ k, m, p, b[14], 23, -35309556), k = d(m ^ p ^ n, k, m, b[1], 4, -1530992060), n = d(k ^ m ^ p, n, k, b[4], 11, 1272893353), p = d(n ^ k ^ m, p, n, b[7], 16, -155497632), m = d(p ^ n ^ k, m, p, b[10], 23, -1094730640), k = d(m ^ p ^ n, k, m, b[13], 4, 681279174), n = d(k ^ m ^ p, n, k, b[0], 11, -358537222), p = d(n ^ k ^ m, p, n, b[3], 16, -722521979), m = d(p ^ n ^ k, m, p, b[6], 23, 76029189), k = d(m ^ p ^ n, k, m, b[9], 4, -640364487), n = d(k ^ m ^ p, n, k, b[12], 11, -421815835), 
    p = d(n ^ k ^ m, p, n, b[15], 16, 530742520), m = d(p ^ n ^ k, m, p, b[2], 23, -995338651), k = l(k, m, p, n, b[0], 6, -198630844), n = l(n, k, m, p, b[7], 10, 1126891415), p = l(p, n, k, m, b[14], 15, -1416354905), m = l(m, p, n, k, b[5], 21, -57434055), k = l(k, m, p, n, b[12], 6, 1700485571), n = l(n, k, m, p, b[3], 10, -1894986606), p = l(p, n, k, m, b[10], 15, -1051523), m = l(m, p, n, k, b[1], 21, -2054922799), k = l(k, m, p, n, b[8], 6, 1873313359), n = l(n, k, m, p, b[15], 10, -30611744), 
    p = l(p, n, k, m, b[6], 15, -1560198380), m = l(m, p, n, k, b[13], 21, 1309151649), k = l(k, m, p, n, b[4], 6, -145523070), n = l(n, k, m, p, b[11], 10, -1120210379), p = l(p, n, k, m, b[2], 15, 718787259), m = l(m, p, n, k, b[9], 21, -343485551);
    a[0] = c(k, a[0]);
    a[1] = c(m, a[1]);
    a[2] = c(p, a[2]);
    a[3] = c(n, a[3])
  }
  function b(b) {
    var c = b, g = c.length;
    b = [1732584193, -271733879, -1732584194, 271733878];
    var h;
    for(h = 64;h <= c.length;h += 64) {
      for(var j = b, l = c.substring(h - 64, h), k = [], m = void 0, m = 0;64 > m;m += 4) {
        k[m >> 2] = l.charCodeAt(m) + (l.charCodeAt(m + 1) << 8) + (l.charCodeAt(m + 2) << 16) + (l.charCodeAt(m + 3) << 24)
      }
      a(j, k)
    }
    c = c.substring(h - 64);
    j = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for(h = 0;h < c.length;h++) {
      j[h >> 2] |= c.charCodeAt(h) << (h % 4 << 3)
    }
    j[h >> 2] |= 128 << (h % 4 << 3);
    if(55 < h) {
      a(b, j);
      for(h = 0;16 > h;h++) {
        j[h] = 0
      }
    }
    j[14] = 8 * g;
    a(b, j);
    for(c = 0;c < b.length;c++) {
      g = b;
      h = c;
      j = b[c];
      l = "";
      for(k = 0;4 > k;k++) {
        l += d[j >> 8 * k + 4 & 15] + d[j >> 8 * k & 15]
      }
      g[h] = l
    }
    return b.join("")
  }
  var c = function(a, b) {
    return a + b & 4294967295
  }, d = "0123456789abcdef".split("");
  "5d41402abc4b2a76b9719d911017c592" != b("hello") && (c = function(a, b) {
    var c = (a & 65535) + (b & 65535);
    return(a >> 16) + (b >> 16) + (c >> 16) << 16 | c & 65535
  });
  return b
}();
util.gravatar = function(a, b) {
  void 0 === b && (b = 30);
  return"//www.gravatar.com/avatar/" + util.md5(a) + "?s=" + b + "&d=identicon"
};
var detectZoom = function() {
  var a = function() {
    return{zoom:1, devicePxPerCssPx:1}
  }, b = function() {
    var a = document.body.getBoundingClientRect(), a = (a.right - a.left) / document.body.offsetWidth, a = Math.round(100 * a) / 100;
    return{zoom:a, devicePxPerCssPx:a}
  }, c = function() {
    var a = Math.round(100 * (window.screen.deviceXDPI / window.screen.logicalXDPI)) / 100;
    return{zoom:a, devicePxPerCssPx:a * (window.devicePixelRatio || 1)}
  }, d = function() {
    var a = Math.round(100 * (document.documentElement.offsetHeight / window.innerHeight)) / 100;
    return{zoom:a, devicePxPerCssPx:a * (window.devicePixelRatio || 1)}
  }, e = function() {
    var a = (90 == Math.abs(window.orientation) ? window.screen.height : window.screen.width) / window.innerWidth;
    return{zoom:a, devicePxPerCssPx:a * (window.devicePixelRatio || 1)}
  }, f = function() {
    var a = function(a, b, c) {
      var d;
      for(d = 0;16 > d;d++) {
        if(a < b[d]) {
          return eval(c[d])
        }
      }
    }((window.outerWidth - 16) / window.innerWidth, [0.29, 0.42, 0.58, 0.71, 0.83, 0.95, 1.05, 1.18, 1.38, 1.63, 1.88, 2.25, 2.75, 3.5, 4.5, 100], [0.25, "1/3", 0.5, "2/3", 0.75, 0.9, 1, 1.1, 1.25, 1.5, 1.75, 2, 2.5, 3, 4, 5]);
    return{zoom:a, devicePxPerCssPx:a * (window.devicePixelRatio || 1)}
  }, g = function() {
    var a, b = function(a, d, e) {
      var f = (a + d) / 2;
      return 0 >= e || 1E-4 > d - a ? f : c("(min--moz-device-pixel-ratio:" + f + ")").matches ? b(f, d, e - 1) : b(a, f, e - 1)
    }, c, d, e;
    window.matchMedia ? c = window.matchMedia : (a = document.getElementsByTagName("head")[0], d = document.createElement("style"), a.appendChild(d), e = document.createElement("div"), e.className = "mediaQueryBinarySearch", e.style.display = "none", document.body.appendChild(e), c = function(a) {
      var b = !1;
      util.isIE7() || (d.sheet.insertRule("@media " + a + "{.mediaQueryBinarySearch {text-decoration: underline} }", 0), b = "underline" == window.getComputedStyle(e, null).textDecoration, d.sheet.deleteRule(0));
      return{matches:b}
    });
    var f = b(0, 10, 20);
    e && (a.removeChild(d), document.body.removeChild(e));
    a = Math.round(100 * f) / 100;
    return{zoom:a, devicePxPerCssPx:a}
  }, h = function() {
    var a = 1;
    /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent || navigator.vendor || window.opera) ? (a = window.screen.width, util.checkMobileAndroid() && (a = window.screen.width / window.devicePixelRatio), a /= window.innerWidth) : a = window.devicePixelRatio;
    return{zoom:a, devicePxPerCssPx:window.devicePixelRatio || 1}
  }, j = function() {
    var a = window.top.outerWidth / window.top.innerWidth, a = Math.round(100 * a) / 100;
    return{zoom:a, devicePxPerCssPx:a * (window.devicePixelRatio || 1)}
  }, l = null, k = 5, m = function() {
    if(null !== document.body) {
      var p = a;
      util.isIE7() ? p = b : !isNaN(window.screen.logicalXDPI) && !isNaN(window.screen.systemXDPI) ? p = c : window.navigator.msMaxTouchPoints ? p = d : "orientation" in window && "string" === typeof document.body.style.webkitMarquee ? p = e : "string" === typeof document.body.style.webkitMarquee ? p = f : 0 <= navigator.userAgent.indexOf("Opera") ? p = j : window.devicePixelRatio ? p = h : 0.001 < g().zoom && (p = g);
      l = p
    }else {
      k--, 0 <= k && window.setTimeout(m, 200)
    }
  };
  m();
  return{zoom:function() {
    return l().zoom
  }, device:function() {
    return l().devicePxPerCssPx
  }}
}();
MINI = mrequire("minified");
var UserSnap = UserSnap || {};
UserSnap.util = {};
UserSnap.tools = {};
UserSnap.Config.devDebug || (window.UserSnap = {});
(function() {
  UserSnap.util.Observable = {};
  UserSnap.util.Observable.mixin = function(a, b, c, d) {
    !1 !== b && (b = !0);
    !0 !== c && (c = !1);
    a._logException = c;
    a._observer = {};
    a._observerOTE = {};
    if(void 0 !== d) {
      for(c = 0;c < d.length;c++) {
        a._observerOTE[d[c]] = {exec:!1, args:null}
      }
    }
    a._throwEx = b;
    a.fireEvent = function(b, c) {
      if("undefined" !== typeof b) {
        var d = Array.prototype.slice.call(arguments), d = d.slice(1, arguments.length), h = null, j;
        if("undefined" !== typeof a._observerOTE[b]) {
          if(a._observerOTE[b].exec) {
            return
          }
          a._observerOTE[b].exec = !0;
          a._observerOTE[b].args = d
        }
        if("object" === typeof a._observer[b]) {
          for(var l = a._observer[b].slice(), k = 0;k < l.length;k++) {
            if(a._throwEx) {
              j = l[k].func.apply(l[k].scope, d)
            }else {
              try {
                j = l[k].func.apply(l[k].scope, d)
              }catch(m) {
                a._logException && void 0 !== window.console && window.console.error("Your code in your '" + b + "' handler looks ugly! Exception: \"" + m.message + '"')
              }
            }
            !0 === j ? h = !0 : !1 === j && (h = !1)
          }
        }
        return h
      }
    };
    a.resetOneTimeEvents = function() {
      for(var b in a._observerOTE) {
        a._observerOTE.hasOwnProperty(b) && (a._observerOTE[b].exec = !1, a._observerOTE[b].args = null)
      }
    };
    a.listenEvent = function(b, c, d) {
      "undefined" === typeof a._observer[b] && (a._observer[b] = []);
      a._observer[b].push({func:c, scope:d || window});
      if("undefined" !== typeof a._observerOTE[b] && a._observerOTE[b].exec) {
        if(a._throwEx) {
          c.apply(d, a._observerOTE[b].args)
        }else {
          try {
            c.apply(d, a._observerOTE[b].args)
          }catch(h) {
            a._logException && void 0 !== window.console && window.console.error("Your code in your '" + b + "' handler looks ugly! Exception: \"" + h.message + '"')
          }
        }
      }
    };
    a.unlistenEvent = function(b, c) {
      if("undefined" !== typeof a._observer[b]) {
        for(var d = 0;d < a._observer[b].length;d++) {
          if(a._observer[b][d].func === c) {
            a._observer[b].splice(d, 1);
            break
          }
        }
      }
    };
    a.listenEventOnce = function(b, c, d) {
      var h = function() {
        a.unlistenEvent(b, h);
        c.apply(this, arguments)
      };
      a.listenEvent(b, h, d)
    }
  }
})();
(function() {
  var a = null;
  UserSnap.util.JsonP = function(b) {
    null === a && (this.params = null, b.params && (this.params = b.params), this.params.callback = "UserSnap.util.JsonP.callback", this.script = document.createElement("script"), this.script.type = "text/javascript", a = {callback:b.callback, scope:b.scope, url:b.url, scriptTag:this.script, running:!1}, this.url = b.url, util.isIE7() || util.isIE8() ? this.script.onreadystatechange = function() {
      null !== a && a.scriptTag === this && "loaded" === this.readyState && window.setTimeout(function() {
        if(null !== a) {
          var b = a.callback, d = a.scope;
          a = null;
          b.call(d, null, !1)
        }
      }, 100)
    } : this.script.onerror = function() {
      if(null !== a && a.scriptTag === this) {
        var b = a.callback, d = a.scope;
        a = null;
        window.setTimeout(function() {
          b.call(d, null, !1)
        }, 100)
      }
    })
  };
  UserSnap.util.JsonP.prototype.request = function() {
    var b = util.serialize(this.params), c = this.url + "?" + b;
    1 < b.length && (c += "&dc=" + (new Date).getTime());
    this.script.src = c;
    document.getElementsByTagName("head")[0].appendChild(this.script);
    a.running = !0
  };
  UserSnap.util.JsonP.request = function(b) {
    null === a && (new UserSnap.util.JsonP(b)).request()
  };
  UserSnap.util.JsonP.cancelCall = function() {
    null !== a && (document.getElementsByTagName("head")[0].removeChild(a.scriptTag), a = null)
  };
  UserSnap.util.JsonP.callback = function(b) {
    if(null !== a && a.running) {
      var c = a.callback, d = a.scope;
      a = null;
      c.call(d, b, !0)
    }
  };
  UserSnap.Config.devDebug || (window.UserSnap.util = {}, window.UserSnap.util.JsonP = UserSnap.util.JsonP, window.UserSnap.util.JsonP.callback = UserSnap.util.JsonP.callback)
})();
var _usCallbackFrame = {frame:null, doc:null};
UserSnap.util.IframePost = function(a) {
  null === _usCallbackFrame.doc && (_usCallbackFrame.doc = _usCallbackFrame.frame.contentWindow.document);
  this._iframe = _usCallbackFrame.doc.createElement("iframe");
  this._uniqueId = "iframe_post" + (new Date).getTime();
  _usCallbackFrame.doc.body.appendChild(this._iframe);
  this._iframe.style.display = "none";
  this._iframe.contentWindow.name = this._uniqueId;
  this._loading = !1;
  this._timer = null;
  var b = this;
  UserSnap.util.Observable.mixin(this);
  var c = "", c = 0 === a.url.indexOf("http") ? a.url : document.location.protocol + a.url;
  if(util.isIE()) {
    MINI.$(this._iframe).on("load", function() {
      b._loading && (UserSnap.util.IframePost.checkResponse(b, c), b._loading = !1, a.callback.fn.call(a.callback.scope), UserSnap.util.IframePost._queueState = !1, UserSnap.util.IframePost._queueCurrent = null, UserSnap.util.IframePost.deQueue())
    })
  }else {
    this._iframe.onload = function() {
      b._loading && (UserSnap.util.IframePost.checkResponse(b, c), b._loading = !1, a.callback.fn.call(a.callback.scope), UserSnap.util.IframePost._queueState = !1, UserSnap.util.IframePost._queueCurrent = null, UserSnap.util.IframePost.deQueue())
    }
  }
  this._form = _usCallbackFrame.doc.createElement("form");
  this._form.style.display = "none";
  this._form.target = this._uniqueId;
  this._form.action = a.url;
  this._form.method = "POST";
  this._form.acceptCharset = "utf-8";
  _usCallbackFrame.doc.body.appendChild(this._form);
  (util.isIE8() || util.isIE7()) && this.addFormField("ieencoding", "\u9760")
};
UserSnap.util.IframePost._queueState = !1;
UserSnap.util.IframePost._queue = [];
UserSnap.util.IframePost._queueCurrent = null;
UserSnap.util.IframePost.enQueue = function(a) {
  UserSnap.util.IframePost._queue.push(a);
  UserSnap.util.IframePost.deQueue()
};
UserSnap.util.IframePost.deQueue = function() {
  0 < UserSnap.util.IframePost._queue.length && !UserSnap.util.IframePost._queueState && (UserSnap.util.IframePost._queueState = !0, UserSnap.util.IframePost._queueCurrent = UserSnap.util.IframePost._queue.shift(), UserSnap.util.IframePost._queueCurrent.request())
};
UserSnap.util.IframePost.cancelJob = function(a) {
  for(var b = UserSnap.util.IframePost._queue, c = 0;c < b.length;c++) {
    if("undefined" !== typeof b[c] && "id" === b[c]._uniqueId) {
      b.splice(c, 1);
      return
    }
  }
  b = UserSnap.util.IframePost._queueCurrent;
  null !== b && b._uniqueId === a && (b.destroyForm(), UserSnap.util.IframePost._queueState = !1, UserSnap.util.IframePost._queueCurrent = null)
};
UserSnap.util.IframePost._checkUnload = function(a) {
  if(null !== UserSnap.util.IframePost._queueCurrent || 0 < UserSnap.util.IframePost._queue.length) {
    return"undefined" === typeof a && (a = window.event), a && (a.returnValue = "Usersnap is currently uploading a report, please wait a few seconds otherwise your report will be LOST!"), "Usersnap is currently uploading a report, please wait a few seconds otherwise your report will be LOST!"
  }
};
UserSnap.util.IframePost._postCallbackCtn = 0;
UserSnap.util.IframePost._postCallbackObjQueue = [];
UserSnap.util.IframePost.startTimer = function(a) {
  UserSnap.util.IframePost._postCallbackCtn++;
  UserSnap.util.IframePost._postCallbackObjQueue.push(a);
  a._timer = window.setTimeout(function() {
    0 !== UserSnap.util.IframePost._postCallbackCtn && (UserSnap.util.IframePost._postCallbackCtn--, a.destroyForm(), a.fireEvent("error", "timeout"))
  }, 2E3)
};
UserSnap.util.IframePost.checkResponse = function(a, b) {
  util.isIE7() || (UserSnap.util.IframePost.startTimer(a), a._iframe.contentWindow.postMessage("d50c90d4-cda9-4b07-877c-66ca45f3c241", b))
};
UserSnap.util.IframePost._postCallback = function(a) {
  a = a.data;
  var b = UserSnap.util.IframePost._postCallbackObjQueue.splice(0, 1);
  if(0 < b.length) {
    var b = b[0], c = null;
    try {
      c = MINI.$.parseJSON(a)
    }catch(d) {
      return
    }
    "undefined" === typeof c || null === c || "d50c90d4-cda9-4b07-877c-66ca45f3c241" !== c.originator ? UserSnap.util.IframePost._postCallbackObjQueue.splice(0, 0, b) : (UserSnap.util.IframePost._postCallbackCtn--, window.clearTimeout(b._timer), b.destroyForm(), 1 !== c.RC ? b.fireEvent("error", "postCB", c) : b.fireEvent("success", c))
  }
};
UserSnap.util.IframePost._initPostMessageFrame = function() {
  var a = 10, b = function() {
    if(null === document.body) {
      a--, 0 <= a && window.setTimeout(b, 200)
    }else {
      _usCallbackFrame.frame = document.createElement("iframe");
      document.body.appendChild(_usCallbackFrame.frame);
      _usCallbackFrame.frame.style.display = "none";
      var c = _usCallbackFrame.frame.contentWindow.document;
      c.open();
      c.write("<!DOCTYPE html><html><body></body></html>");
      c.close();
      _usCallbackFrame.frame.contentWindow.name = "usersnap_postbody_" + Math.round(1E6 * Math.random());
      _usCallbackFrame.frame.contentWindow.addEventListener ? _usCallbackFrame.frame.contentWindow.addEventListener("message", UserSnap.util.IframePost._postCallback, !1) : _usCallbackFrame.frame.contentWindow.attachEvent("onmessage", UserSnap.util.IframePost._postCallback)
    }
  };
  b()
};
window.addEventListener ? window.addEventListener("beforeunload", UserSnap.util.IframePost._checkUnload, !1) : window.attachEvent("onbeforeunload", UserSnap.util.IframePost._checkUnload);
UserSnap.util.IframePost.prototype.destroyForm = function() {
  var a = this;
  this._loading && (util.isIE() || this._iframe.contentWindow.stop());
  window.setTimeout(function() {
    null !== a._iframe && (_usCallbackFrame.doc.body.removeChild(a._form), _usCallbackFrame.doc.body.removeChild(a._iframe), a._form = null, a._iframe = null)
  }, 500)
};
UserSnap.util.IframePost.prototype.addFormField = function(a, b) {
  var c = _usCallbackFrame.doc.createElement("input");
  c.type = "hidden";
  c.name = a;
  c.value = b;
  this._form.appendChild(c)
};
UserSnap.util.IframePost.prototype.request = function() {
  this._loading = !0;
  this._form.submit()
};
var _sandboxCss = "#us_sandbox {position: fixed;top: 0;left: 0;z-index: 2147483648;display: block;overflow: hidden;-webkit-user-select: none;-moz-user-select: -moz-none;-ms-user-select: none;-o-user-select: none;user-select: none;box-sizing: content-box !important;-webkit-box-sizing: content-box !important;-moz-box-sizing: content-box !important;-ms-box-sizing: content-box !important;-khtml-box-sizing: content-box !important;box-shadow: none !important;background-image: none;background-color: transparent;background-repeat: no-repeat;background: transparent;border: none !important;border-radius: 0 !important;-webkit-border-radius: 0;-moz-border-radius: 0;border-radius: 0;transition: none;-moz-transition: none;-o-transition: none;-webkit-transition: none;padding: 0;margin: 0;filter: none;}#us_sandbox iframe {border: none !important;background: none !important;background-color: transparent !important;-webkit-user-select: none;-moz-user-select: -moz-none;-ms-user-select: none;-o-user-select: none;user-select: none;overflow: hidden;margin: 0 !important;padding: 0 !important;}";
UserSnap.Sandbox = function() {
  this._instance = UserSnap.getInstance();
  UserSnap.util.Observable.mixin(this);
  this.MINI = this.frame = this.box = null;
  this._isInit = !1;
  this.destroyCnt = 0
};
UserSnap.Sandbox.prototype.isInit = function() {
  return this._isInit
};
UserSnap.Sandbox.prototype.getWindow = function() {
  return this._isInit ? this.frame.contentWindow : null
};
UserSnap.Sandbox.prototype.getDocument = function() {
  return this._isInit ? this.frame.contentWindow.document : null
};
UserSnap.Sandbox.prototype.getMINI = function() {
  return this._isInit ? this.MINI : null
};
UserSnap.Sandbox.prototype._addSandboxCss = function() {
  var a = document.createElement("style");
  a.setAttribute("type", "text/css");
  document.getElementsByTagName("head")[0].appendChild(a);
  if(a.styleSheet) {
    try {
      a.styleSheet.cssText = _sandboxCss
    }catch(b) {
      document.styleSheets[0].cssText += _sandboxCss
    }
  }else {
    a.appendChild(document.createTextNode(_sandboxCss))
  }
};
UserSnap.Sandbox.prototype._writeIframeDoc = function(a, b, c) {
  "undefined" === typeof b && (b = []);
  "undefined" === typeof c && (c = "");
  for(var d = "", e = 0;e < b.length;e++) {
    d += '<link rel="stylesheet" type="text/css" href="' + b[e] + '"/>'
  }
  "" !== c && (d += '<style type="text/css">' + c + "</style>");
  a.open();
  a.write("<!DOCTYPE html>");
  a.write('<html class="us_sandbox_html">');
  a.write("<head>" + d + "</head>");
  a.write('<body class="us_sandbox_body" scroll="no"><div class="us-colorvars"></div></body>');
  a.write("</html>");
  a.close()
};
UserSnap.Sandbox.prototype.init = function(a) {
  this._addSandboxCss();
  var b = this, c = util.getViewport();
  1 !== this._instance.screenData.viewportData.zoomLevel && util.isChrome() && c.width--;
  var d = {"@unselectable":"on", "@id":"us_sandbox", $width:c.width + "px", $height:c.height + "px"}, c = {"@frameBorder":"0", "@scrolling":"no", "@unselectable":"on", "@style":"width: " + c.width + "px !important; height: " + c.height + "px !important;"};
  util.isIE8() || (c["@sandbox"] = "allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-top-navigation");
  this.box = MINI.EE("div", d, [MINI.EE("iframe", c, function(c) {
    c.setAttribute("allowTransparency", "true");
    b.frame = c;
    var d = 0;
    if(util.isIE() || util.checkMobileAndroid()) {
      MINI.$(b.frame).on("load", function() {
        0 === d ? (d++, b._writeIframeDoc(b.frame.contentWindow.document, a.css, a.cssString)) : 1 === d && (b.MINI = mrequire("minified", b.frame.contentWindow), b._isInit = !0, b.fireEvent("initialized"))
      })
    }else {
      MINI.$(b.frame).on("load", function() {
        b._writeIframeDoc(b.frame.contentWindow.document, a.css, a.cssString);
        if(util.isFF()) {
          var c = new Image;
          c.onerror = function() {
            b.MINI = mrequire("minified", b.frame.contentWindow);
            b._isInit = !0;
            b.fireEvent("initialized")
          };
          c.src = a.css[0]
        }else {
          b.MINI = mrequire("minified", b.frame.contentWindow), b._isInit = !0, b.fireEvent("initialized")
        }
      })
    }
  })], function(a) {
    b.box = a
  });
  this.increaseDestroyCtn();
  MINI.$(document.body).add(this.box)
};
UserSnap.Sandbox.prototype.increaseDestroyCtn = function() {
  this.destroyCnt++
};
UserSnap.Sandbox.prototype.forceDestroy = function() {
  this.destroyCnt = 0;
  this.destroy()
};
UserSnap.Sandbox.prototype.destroy = function() {
  this.destroyCnt--;
  return 0 >= this.destroyCnt ? (this._isInit = !1, this.box.remove(), this.frame = this.box = null, this.fireEvent("destroy"), !0) : !1
};
var _cssTpl = ".ptiy.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #53c400;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #5ede00;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #48ab00;  border-top: 2px solid #53c400;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #53c400;  bottom: 37%;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #48ab00;  height: 30px;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #53c400;  bottom: 37%;  right: -75px !important;  width: 75px;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #48ab00;  height: 30px;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #5ede00;  border-top: none;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #53c400;  bottom: 37%;  left: 0px;  right: auto;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #48ab00;  height: 30px;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #53c400;  bottom: 37%;  left: -2px !important;  width: 75px;}.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.ptiy.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #48ab00;  height: 30px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70, .default2014.us-button-c50731562836a85c59cfa515f8f8ab70, .grass.us-button-c50731562836a85c59cfa515f8f8ab70, .paymill.us-button-c50731562836a85c59cfa515f8f8ab70, .darknight.us-button-c50731562836a85c59cfa515f8f8ab70, .brownie.us-button-c50731562836a85c59cfa515f8f8ab70, .zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70, .emerald.us-button-c50731562836a85c59cfa515f8f8ab70, .contrast.us-button-c50731562836a85c59cfa515f8f8ab70, .redmond.us-button-c50731562836a85c59cfa515f8f8ab70, .ptiy.us-button-c50731562836a85c59cfa515f8f8ab70 {  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAMAAAA7+k+nAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABm1BMVEX///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////861ouVAAAAiHRSTlMABDd1pMfX3NjKsYdXIkiu69aTNQ2G8M2yxfrkfg4RoOXM0NXZQBas96gaA4iDEhUZGxMmHit9nQlB9nhNs7SjM1H8loRC4GrCzyNWip4U3pCror9M/a0BZVIg3zxHZKqbgtNTOrpOBQZsSjRPYXHAKJqPxOFel+b+vum2bdG9LI682tJrHVWAybpnwgAAAAFiS0dEAIgFHUgAAAAJcEhZcwAACxIAAAsSAdLdfvwAAAExSURBVBjTVZDpO4JREMWPNRFKlC3LK4mEbCH1UpaSihTZsleEyr5lyXb/bHOz9JgP99z5nTvzzFyAR15+QWFRsaREWlomK0cuKirl7C8UVcofXF2j+oXq2rp6xhoaNZw3NTPW0iq0aSUSbTt0HXI9Y51dgKGbXhp7evtM/QNKAzA4NEzAPILRMVILLx232sQJ0kkCdhkcvPcU5dMz5lmnaw5wcyJCzWWeDI8V8AqW7wrmhI/LAhmLfjqWqDYQJLIMBTccK0DIt7pmXN8ANmliFsYWN7b59ju7gnOPLvs074EXEe57gGhMEzk8ih+fnPrtLJEEYikyBOOZaEucuy5UejvvcJnd/CrI/sX1Dbs1cScakubo3X04+ZBmj0/Zb9S5n1/SmcxrIvUWj1H+/vEZ+AK0yGurDDKqKwAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxMy0xMC0xMFQxNToyMzo1NyswMjowMLX1qkwAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTMtMTAtMTBUMTU6MjM6NTcrMDI6MDDEqBLwAAAAAElFTkSuQmCC);" + 
(util.isIE7() ? "*background-image: url(mhtml:https:" + UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/css/button-ie7.css!usbuttonimgminilogo);" : "") + "}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #dd3c22;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #e05038;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #c7361f;  border-top: 2px solid #dd3c22;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #dd3c22;  bottom: 37%;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #c7361f;  height: 30px;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #dd3c22;  bottom: 37%;  right: -75px !important;  width: 75px;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #c7361f;  height: 30px;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #e05038;  border-top: none;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #dd3c22;  bottom: 37%;  left: 0px;  right: auto;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #c7361f;  height: 30px;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #dd3c22;  bottom: 37%;  left: -2px !important;  width: 75px;}.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.redmond.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #c7361f;  height: 30px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #000000;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #0d0d0d;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #000000;  border-top: 2px solid #0d0d0d;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #000000;  bottom: 37%;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #000000;  height: 30px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #000000;  bottom: 37%;  right: -75px !important;  width: 75px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #000000;  height: 30px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #0d0d0d;  border-top: none;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #000000;  bottom: 37%;  left: 0px;  right: auto;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #000000;  height: 30px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #000000;  bottom: 37%;  left: -2px !important;  width: 75px;}.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.contrast.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #000000;  height: 30px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #34495e;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #3d566e;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #2b3c4e;  border-top: 2px solid #34495e;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #34495e;  bottom: 37%;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #2b3c4e;  height: 30px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #34495e;  bottom: 37%;  right: -75px !important;  width: 75px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #2b3c4e;  height: 30px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #3d566e;  border-top: none;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #34495e;  bottom: 37%;  left: 0px;  right: auto;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #2b3c4e;  height: 30px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #34495e;  bottom: 37%;  left: -2px !important;  width: 75px;}.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.emerald.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #2b3c4e;  height: 30px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #ff5751;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #ff706b;  color: black;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #ff3e37;  border-top: 2px solid #ff5751;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff5751;  bottom: 37%;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #ff3e37;  height: 30px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff5751;  bottom: 37%;  right: -75px !important;  width: 75px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #ff3e37;  height: 30px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #ff706b;  border-top: none;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff5751;  bottom: 37%;  left: 0px;  right: auto;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #ff3e37;  height: 30px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff5751;  bottom: 37%;  left: -2px !important;  width: 75px;}.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #ff3e37;  height: 30px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70, .medic.us-button-c50731562836a85c59cfa515f8f8ab70, .pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70, .lemon.us-button-c50731562836a85c59cfa515f8f8ab70, .redalert.us-button-c50731562836a85c59cfa515f8f8ab70, .snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70, .snapbugz.us-button-c50731562836a85c59cfa515f8f8ab70 {  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAQCAMAAAA7+k+nAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAABoVBMVEUAAAD///8AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD////B1Xl5AAAAiXRSTlMAAAQ3daTH19zYyrGHVyJIruvWkzUNhvDNssX65H4OEaDlzNDV2UAWrPeoGgOIgxIVGRsTJh4rfZ0JQfZ4TbO0ozNR/JaEQuBqws8jVoqeFN6Qq6K/TP2tAWVSIN88R2Sqm4LTUzq6TgUGbEo0T2FxwCiaj8ThXpfm/r7ptm3RvSyOvNrSax1VgHoWWaUAAAABYktHRAH/Ai3eAAAACXBIWXMAAAsSAAALEgHS3X78AAABN0lEQVQY01WQ+TuCQRCAZ52JUKJcOT5JJOQKqahQUpEiV+6KULmvHLn2vzbzuR7zw87zvO/uzOwAUOTlFxQWFUtKpKVlsnImhsgrKuX8NxRVym9RXaP6geraunrOGxo1JJqaOW9pFdq0Eom2HXQdcj3nnV0MDN1409jT22fqH1AaAAaHhhGYR2B0DLOFOo1bbfYJYGwSgUMGTqrtQj41bZ5xe2YZ8xKxg5rSHAqfFcAvWL5ecDcEKM2jWAjisehiLBRGsgQKEs5lgEhgZdW4ts7YBk7Mo7BJYot+v70juHex+R7Ou++HGHkfQDyhiR0cJo+OT4IOnkozSGRQCMZTuy115jlX6R1U4UL8+WWY/4ura35jol3FI9I/ensXTd9n+cOjuF2d9+k5m8u9pDKvyQRu9u39I/QJtcNs+mYcMqgAAAAldEVYdGRhdGU6Y3JlYXRlADIwMTMtMTAtMTBUMTU6Mjk6MjIrMDI6MDD6Khw7AAAAJXRFWHRkYXRlOm1vZGlmeQAyMDEzLTEwLTEwVDE1OjI5OjIyKzAyOjAwi3ekhwAAAABJRU5ErkJggg==);" + 
(util.isIE7() ? "*background-image: url(mhtml:https:" + UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/css/button-ie7.css!usbuttonimgminilogo-black);" : "") + "}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #ffffff;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #ffffff;  color: black;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #f2f2f2;  border-top: 2px solid #ffffff;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ffffff;  bottom: 37%;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #f2f2f2;  height: 30px;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ffffff;  bottom: 37%;  right: -75px !important;  width: 75px;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #f2f2f2;  height: 30px;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #ffffff;  border-top: none;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ffffff;  bottom: 37%;  left: 0px;  right: auto;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #f2f2f2;  height: 30px;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ffffff;  bottom: 37%;  left: -2px !important;  width: 75px;}.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.snow_notready.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #f2f2f2;  height: 30px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #ff5751;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #ff706b;  color: black;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #ff3e37;  border-top: 2px solid #ff5751;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff5751;  bottom: 37%;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #ff3e37;  height: 30px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff5751;  bottom: 37%;  right: -75px !important;  width: 75px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #ff3e37;  height: 30px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #ff706b;  border-top: none;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff5751;  bottom: 37%;  left: 0px;  right: auto;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #ff3e37;  height: 30px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff5751;  bottom: 37%;  left: -2px !important;  width: 75px;}.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.redalert.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #ff3e37;  height: 30px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #4760a5;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #516cb4;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #3f5693;  border-top: 2px solid #4760a5;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #4760a5;  bottom: 37%;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #3f5693;  height: 30px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #4760a5;  bottom: 37%;  right: -75px !important;  width: 75px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #3f5693;  height: 30px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #516cb4;  border-top: none;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #4760a5;  bottom: 37%;  left: 0px;  right: auto;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #3f5693;  height: 30px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #4760a5;  bottom: 37%;  left: -2px !important;  width: 75px;}.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.zuckerberg.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #3f5693;  height: 30px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #643b30;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #754538;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #533128;  border-top: 2px solid #643b30;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #643b30;  bottom: 37%;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #533128;  height: 30px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #643b30;  bottom: 37%;  right: -75px !important;  width: 75px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #533128;  height: 30px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #754538;  border-top: none;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #643b30;  bottom: 37%;  left: 0px;  right: auto;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #533128;  height: 30px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #643b30;  bottom: 37%;  left: -2px !important;  width: 75px;}.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.brownie.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #533128;  height: 30px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #ffe00a;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #ffe324;  color: black;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #f0d200;  border-top: 2px solid #ffe00a;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ffe00a;  bottom: 37%;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #f0d200;  height: 30px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ffe00a;  bottom: 37%;  right: -75px !important;  width: 75px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #f0d200;  height: 30px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #ffe324;  border-top: none;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ffe00a;  bottom: 37%;  left: 0px;  right: auto;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #f0d200;  height: 30px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ffe00a;  bottom: 37%;  left: -2px !important;  width: 75px;}.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.lemon.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #f0d200;  height: 30px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #ff3c79;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #ff568b;  color: black;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #ff2267;  border-top: 2px solid #ff3c79;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff3c79;  bottom: 37%;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #ff2267;  height: 30px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff3c79;  bottom: 37%;  right: -75px !important;  width: 75px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #ff2267;  height: 30px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #ff568b;  border-top: none;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff3c79;  bottom: 37%;  left: 0px;  right: auto;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #ff2267;  height: 30px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #ff3c79;  bottom: 37%;  left: -2px !important;  width: 75px;}.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.pinkabell.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #ff2267;  height: 30px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #444444;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #515151;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #373737;  border-top: 2px solid #444444;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #444444;  bottom: 37%;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #373737;  height: 30px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #444444;  bottom: 37%;  right: -75px !important;  width: 75px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #373737;  height: 30px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #515151;  border-top: none;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #444444;  bottom: 37%;  left: 0px;  right: auto;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #373737;  height: 30px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #444444;  bottom: 37%;  left: -2px !important;  width: 75px;}.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.darknight.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #373737;  height: 30px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #f05000;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #ff5c0b;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #d74800;  border-top: 2px solid #f05000;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #f05000;  bottom: 37%;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #d74800;  height: 30px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #f05000;  bottom: 37%;  right: -75px !important;  width: 75px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #d74800;  height: 30px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #ff5c0b;  border-top: none;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #f05000;  bottom: 37%;  left: 0px;  right: auto;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #d74800;  height: 30px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #f05000;  bottom: 37%;  left: -2px !important;  width: 75px;}.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.paymill.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #d74800;  height: 30px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #b4d3d9;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #c5dde2;  color: black;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.medic.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #a3c9d0;  border-top: 2px solid #b4d3d9;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #b4d3d9;  bottom: 37%;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #a3c9d0;  height: 30px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #b4d3d9;  bottom: 37%;  right: -75px !important;  width: 75px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #a3c9d0;  height: 30px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #c5dde2;  border-top: none;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #b4d3d9;  bottom: 37%;  left: 0px;  right: auto;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #a3c9d0;  height: 30px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #b4d3d9;  bottom: 37%;  left: -2px !important;  width: 75px;}.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.medic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #a3c9d0;  height: 30px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #00ad00;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #00c700;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.grass.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #009400;  border-top: 2px solid #00ad00;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #00ad00;  bottom: 37%;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #009400;  height: 30px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #00ad00;  bottom: 37%;  right: -75px !important;  width: 75px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #009400;  height: 30px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #00c700;  border-top: none;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #00ad00;  bottom: 37%;  left: 0px;  right: auto;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #009400;  height: 30px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #00ad00;  bottom: 37%;  left: -2px !important;  width: 75px;}.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.grass.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #009400;  height: 30px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #cccccc;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #d9d9d9;  color: black;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.classic.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #bfbfbf;  border-top: 2px solid #cccccc;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #cccccc;  bottom: 37%;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #bfbfbf;  height: 30px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #cccccc;  bottom: 37%;  right: -75px !important;  width: 75px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #bfbfbf;  height: 30px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #d9d9d9;  border-top: none;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #cccccc;  bottom: 37%;  left: 0px;  right: auto;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #bfbfbf;  height: 30px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #cccccc;  bottom: 37%;  left: -2px !important;  width: 75px;}.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.classic.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #bfbfbf;  height: 30px;}/* BACKWARDS COMPATIBILITY */.default2014.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #005e99;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #006eb3;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #004e80;  border-top: 2px solid #005e99;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #005e99;  bottom: 37%;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #004e80;  height: 30px;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #005e99;  bottom: 37%;  right: -75px !important;  width: 75px;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #004e80;  height: 30px;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #006eb3;  border-top: none;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #005e99;  bottom: 37%;  left: 0px;  right: auto;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #004e80;  height: 30px;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #005e99;  bottom: 37%;  left: -2px !important;  width: 75px;}.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.default2014.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #004e80;  height: 30px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70 {  font-family: 'Roboto', sans-serif;  font-size: 12px;  bottom: 0px;  right: 30px;  position: fixed;  background-color: #005e99;  background-repeat: no-repeat;  background-position: 10px 7px;  border-top: 2px solid #006eb3;  color: white;  border-radius: 3px 3px 0 0;  box-sizing: content-box;  -moz-box-sizing: content-box;  padding-top: 0;  padding-right: 10px;  padding-bottom: 0;  padding-left: 44px;  height: 30px;  text-align: left;  line-height: 30px;  -webkit-transition: background-color 0.2s ease-in-out;  -moz-transition: background-color 0.2s ease-in-out;  -o-transition: background-color 0.2s ease-in-out;  transition: background-color 0.2s ease-in-out;  cursor: pointer;  text-shadow: none;  z-index: 2147483636;  -webkit-user-select: none;  -moz-user-select: -moz-none;  -ms-user-select: none;  -o-user-select: none;  user-select: none;  width: auto;  margin: 0;}.default.us-button-c50731562836a85c59cfa515f8f8ab70:hover,.default.us-button-c50731562836a85c59cfa515f8f8ab70.hover {  height: 33px;  background-color: #004e80;  border-top: 2px solid #005e99;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.left {  right: auto;  left: 50px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  right: -100px;  bottom: 37%;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right:hover,.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right.hover {  height: 30px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #005e99;  bottom: 37%;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8:hover,.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie8.hover {  background-color: #004e80;  height: 30px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #005e99;  bottom: 37%;  right: -75px !important;  width: 75px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7:hover,.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-right-ie7.hover {  background-color: #004e80;  height: 30px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left {  transform: rotate(-90deg);  -ms-transform: rotate(-90deg);  -webkit-transform: rotate(-90deg);  -moz-transform: rotate(-90deg);  -o-transform: rotate(-90deg);  -webkit-transform-origin: 0 0;  -moz-transform-origin: 0 0;  -ms-transform-origin: 0 0;  -o-transform-origin: 0 0;  transform-origin: 0 0;  left: 0px;  bottom: 37%;  right: auto;  border-radius: 0 0 3px 3px;  border-bottom: 2px solid #006eb3;  border-top: none;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left:hover,.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left.hover {  height: 30px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #005e99;  bottom: 37%;  left: 0px;  right: auto;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8:hover,.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie8.hover {  background-color: #004e80;  height: 30px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7 {  filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);  zoom: 1;  background-color: #005e99;  bottom: 37%;  left: -2px !important;  width: 75px;}.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7:hover,.default.us-button-c50731562836a85c59cfa515f8f8ab70.rotate-left-ie7.hover {  background-color: #004e80;  height: 30px;}@media print {  .us-button-c50731562836a85c59cfa515f8f8ab70 {    display: none !important;  }}";
UserSnap.Button = function(a) {
  UserSnap.util.Observable.mixin(this);
  this.btn = null;
  var b = "Feedback";
  void 0 !== a.text && (b = a.text);
  var c = "default";
  void 0 !== a.theme && (c = a.theme);
  var d = this;
  this._clickHandler = function() {
    d.fireEvent("click");
    return!1
  };
  "bottom" !== a.valign && "middle" !== a.valign && (a.valign = "bottom");
  "left" !== a.halign && "right" !== a.halign && (a.halign = "right");
  this.btn = MINI.EE("div", {"@title":util.decEscUTF8(us.t_usbutton), "@id":"us_report_button", "@unselectable":"on", $:"us-button-c50731562836a85c59cfa515f8f8ab70"}, b, function(b) {
    d.btn = b;
    c && d.btn.set("+" + c);
    b = "";
    if("middle" === a.valign) {
      if(b = "+rotate-" + a.halign, util.isIE8()) {
        if(d.btn.set(b + "-ie8"), "right" === a.halign) {
          var f = 5, g = function() {
            0 === d.btn[0].offsetHeight && 0 < f ? (f--, window.setTimeout(g, 10)) : d.btn.set("$right", "-" + (d.btn[0].offsetHeight - 31) + "px")
          };
          window.setTimeout(g, 0)
        }
      }else {
        if(util.isIE7()) {
          b += "-ie7", d.btn.set(b)
        }else {
          if(d.btn.set(b), "right" === a.halign) {
            var h = 5, j = function() {
              var a = d.btn.get("$width", !0);
              isNaN(a) && 0 < h ? (h--, window.setTimeout(j, 10)) : d.btn.set("$right", "-" + (a + 22) + "px")
            };
            j();
            window.setTimeout(j, 0)
          }
        }
      }
    }else {
      "left" === a.halign && d.btn.set("+left")
    }
    d.btn.on("click", d._clickHandler)
  });
  this._createCss();
  MINI.$(document.body).add(this.btn);
  this._visible = !0;
  this._loading = {running:!1, intervalRef:null, updateRef:null, orignTxt:b}
};
UserSnap.Button.prototype._createCss = function() {
  var a = document.createElement("style");
  a.setAttribute("type", "text/css");
  a.setAttribute("data-us", "uspss");
  document.getElementsByTagName("head")[0].appendChild(a);
  var b = "/*uspssb*/" + _cssTpl + "/*uspsse*/";
  if(a.styleSheet) {
    try {
      a.styleSheet.cssText = b
    }catch(c) {
      document.styleSheets[0].cssText += b
    }
  }else {
    a.appendChild(document.createTextNode(b))
  }
};
UserSnap.Button.prototype.hide = function() {
  this._visible && (this.btn.set("$display", "none"), this._visible = !1)
};
UserSnap.Button.prototype.show = function() {
  this._visible || (this.btn.set("$display", "block"), this._visible = !0)
};
UserSnap.Button.prototype.isVisible = function() {
  return this._visible
};
UserSnap.Button.prototype.destroy = function() {
  null !== this.btn && (MINI.$.off(this._clickHandler), this.btn.remove(), this.btn = null)
};
var _usersnapGuide = null;
UserSnap.Guide = function() {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._storyIdx = -1;
  this._storyBoard = [];
  this._storyStorage = {};
  var a = this, b = this.MINI.EE;
  this.cont = this._startAnchor = this._navBtnBox = this._nextBtn = this._prevBtn = this._step = null;
  this.win = b("div", {"@id":"us_guide", $:"us-guide start"}, [b("a", {$:"cancel-button", "@href":"#"}, "X", function(b) {
    a.btn = b;
    a.MINI.$(b).set("innerHTML", "&times;");
    b.on("click", function() {
      a._cancelClick.apply(a)
    })
  }), b("div", function(b) {
    a.cont = a.MINI.$(b)
  }), [b("div", {$:"btns", $display:"none"}, [b("b", {}, "", function(b) {
    a._step = b
  }), b("a", {$:"us-guide-btn", "@href":"#"}, util.decEscUTF8(us.b_prev), function(b) {
    a._prevBtn = b;
    b.on("click", function() {
      a._prev.apply(a)
    })
  }), " ", b("a", {$:"us-guide-btn main", "@href":"#"}, util.decEscUTF8(us.b_next), function(b) {
    a._nextBtn = b;
    b.on("click", function() {
      a._next.apply(a)
    })
  })], function(b) {
    a._navBtnBox = b
  })]], function(b) {
    a.win = b
  });
  this._sb.increaseDestroyCtn();
  this.MINI.$(this._sb.getDocument().body).add(this.win);
  this._disabled = this._instance._clientStorage.readVar("usersnap_guide");
  this._disabled = "true" === this._disabled ? !0 : !1;
  if(!0 === this._userCfg.hideTour || !0 === this._userCfg.hideUI) {
    this._disabled = !0
  }
};
UserSnap.Guide.getInstance = function() {
  null === _usersnapGuide && (_usersnapGuide = new UserSnap.Guide);
  return _usersnapGuide
};
UserSnap.Guide.prototype._updateStep = function(a) {
  this._step.set("innerHTML", a + "/" + this.getStoryBoard().length);
  1 === a ? this._prevBtn.set("$display", "none") : this._prevBtn.set("$display", "inline-block")
};
UserSnap.Guide.prototype.addStory = function(a, b, c, d, e, f) {
  void 0 === this._storyStorage[a] && (void 0 === e && (e = "left"), void 0 === c.x && (c.x = 0), void 0 === c.y && (c.y = 0), this._storyStorage[a] = {e:b, align:e, off:c, txt:d}, void 0 !== f && (this._storyStorage[a].singleBtnTxt = f))
};
UserSnap.Guide.prototype.configureStoryBoard = function(a) {
  this._storyBoard = a
};
UserSnap.Guide.prototype.getStoryBoard = function() {
  for(var a = [], b = 0;b < this._storyBoard.length;b++) {
    (this._instance.addScreenshot || !this._storyBoard[b].tool) && a.push(this._storyBoard[b].name)
  }
  return a
};
UserSnap.Guide.prototype._cancelClick = function() {
  this._instance._clientStorage.writeVar("usersnap_guide", "true");
  this.hide()
};
UserSnap.Guide.prototype._setToElement = function(a, b, c) {
  var d = a[0].getBoundingClientRect(), e = this.win[0].getBoundingClientRect();
  "undefined" === typeof e.width ? (a = e.right - e.left, e = e.bottom - e.top) : (a = e.width, e = e.height);
  var f = d.left, d = d.top;
  "left" === b ? (this.win.set({$left:f + 10 + c.x + "px", $top:d + c.y + "px"}), this.win.set("+left -right -bottom")) : "right" === b ? (f -= a + 10, this.win.set({$left:f + c.x + "px", $top:d + c.y + "px"}), this.win.set("+right -left -bottom")) : "bottom" === b && (f -= a, this.win.set({$left:f + c.x + "px", $top:d - e + c.y + "px"}), this.win.set("+bottom -left -right"))
};
UserSnap.Guide.prototype.getCurrentStep = function(a) {
  return!0 === a ? this._storyBoard[this._storyIdx] && this._storyBoard[this._storyIdx].name : this._storyIdx
};
UserSnap.Guide.prototype._prev = function() {
  if(0 === this._storyIdx) {
    this.hide()
  }else {
    this._storyIdx--;
    var a = this._storyStorage[this.getStoryBoard()[this._storyIdx]];
    this.cont.set("innerHTML", a.txt);
    this._updateStep(this._storyIdx + 1, a);
    this._setToElement(a.e, a.align, a.off);
    this.fireEvent("prev", this.getStoryBoard()[this._storyIdx])
  }
};
UserSnap.Guide.prototype._next = function() {
  if(this._storyIdx + 1 >= this.getStoryBoard().length) {
    var a = this.MINI.EE, b = this, a = a("div", {$:"start-box"}, [a("div", {$:"us-fin"}, ""), a("p", {$:"head"}, "", function(a) {
      b.MINI.$(a).set("innerHTML", util.decEscUTF8(us.g_finish))
    }), a("div", {$:"btns center"}, a("a", {$:"us-guide-big-btn", "@href":"#", "@target":"_blank"}, util.decEscUTF8(us.b_endtour), function(a) {
      a.on("click", function() {
        b._cancelClick();
        b.fireEvent("finished")
      })
    })), a("div", {$:"footer-line"}, [a("a", {$:"text", "@href":"https://usersnap.com/?gat=widget", "@target":"_blank"}, util.decEscUTF8(us.g_learnmore)), a("a", {$:"fb-btn", "@href":"http://facebook.com/usersnap", "@target":"_blank"}, ""), a("a", {$:"tw-btn", "@href":"http://twitter.com/usersnap", "@target":"_blank"}, "")])]);
    this.cont.set("innerHTML", "");
    this.cont.add(a);
    this._navBtnBox.set("$display", "none");
    this.fireEvent("end");
    this._setToElement(this._startAnchor.elm, "bottom", {x:30, y:-15})
  }else {
    this._storyIdx++, a = this._storyStorage[this.getStoryBoard()[this._storyIdx]], this.cont.set("innerHTML", a.txt), this._updateStep(this._storyIdx + 1, a), this._setToElement(a.e, a.align, a.off), this.fireEvent("next", this.getStoryBoard()[this._storyIdx])
  }
};
UserSnap.Guide.prototype.setStartAnchor = function(a) {
  var b = a[0].getBoundingClientRect();
  this._startAnchor = {x:b.left, y:b.top, elm:a}
};
UserSnap.Guide.prototype.start = function(a) {
  if(!this._disabled || a) {
    a = [];
    for(var b = 0;b < this._storyBoard.length;b++) {
      void 0 !== this._storyStorage[this._storyBoard[b].name] && a.push(this._storyBoard[b])
    }
    this._storyBoard = a;
    this._storyIdx = -1;
    this.win.set("-start +show");
    a = this.MINI.EE;
    var c = this;
    a = a("div", {$:"start-box"}, [a("div", {$:"us-logo"}, ""), a("p", {$:"head"}, util.decEscUTF8(us.g_welcomehead)), a("p", {}, util.decEscUTF8(us.g_welcome)), a("div", {$:"btns center"}, a("a", {$:"us-guide-big-btn", "@href":"#", "@target":"_blank"}, util.decEscUTF8(us.b_starttour), function(a) {
      a.on("click", function() {
        c._storyIdx = -1;
        c._navBtnBox.set("$display", "block");
        c._next()
      })
    })), a("div", {$:"footer-line"}, [a("a", {$:"text", "@href":"https://usersnap.com/?gat=widget", "@target":"_blank"}, util.decEscUTF8(us.g_learnmore)), a("a", {$:"fb-btn", "@href":"http://facebook.com/usersnap", "@target":"_blank"}, ""), a("a", {$:"tw-btn", "@href":"http://twitter.com/usersnap", "@target":"_blank"}, "")])]);
    this.cont.set("innerHTML", "");
    this.cont.add(a);
    this._navBtnBox.set("$display", "none");
    this.fireEvent("start");
    this._setToElement(this._startAnchor.elm, "bottom", {x:30, y:-15})
  }
};
UserSnap.Guide.prototype.hide = function() {
  this.win.set("-show")
};
UserSnap.Guide.prototype.destroy = function() {
  this.win.remove();
  this._sb.destroy();
  _usersnapGuide = null
};
UserSnap.Dialog = function(a) {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  var b = util.getViewport(), b = {"@id":"us_dialog", "@unselectable":"on", $:"us-dialogbox-base", $width:b.width + "px", $height:b.height + "px"};
  this._type = "success";
  void 0 !== a.type && ("error" === a.type ? this._type = "error" : "warning" === a.type && (this._type = "warning"));
  this._message = "";
  void 0 !== a.message && (this._message = a.message);
  this._title = "";
  void 0 !== a.title && (this._title = a.title);
  this.__btnTxt = util.decEscUTF8(us.b_ok);
  void 0 !== a.btnTxt && (this.__btnTxt = a.btnTxt);
  this._autoClose = !1;
  void 0 !== a.autoClose && !0 === a.autoClose && (this._autoClose = !0);
  var c = this;
  a = this.MINI.EE;
  this._btn = null;
  this.win = a("div", b, a("div", {$:"us-dialogbox-content"}, [a("div", {$:"us-dialogbox-header " + this._type}, this._title), a("div", {$:"us-dialogbox-text"}, function(a) {
    c.MINI.$(a).set("innerHTML", c._message)
  }), a("div", {$:"us-dialogbox-footer"}, a("div", {$:"buttons"}, a("a", {$:"us-btn", "@href":"#"}, this.__btnTxt, function(a) {
    c._btn = a;
    a.on("click", function() {
      c.fireEvent("btnclicked");
      c._autoClose && c.destroy()
    })
  })))]), function(a) {
    c.win = a
  });
  this._sb.increaseDestroyCtn();
  this.MINI.$(this._sb.getDocument().body).add(this.win)
};
UserSnap.Dialog.prototype.show = function() {
  this.win.set("$display", "block");
  this._btn[0].focus()
};
UserSnap.Dialog.prototype.hide = function() {
  this.win.set("$display", "none")
};
UserSnap.Dialog.prototype.destroy = function() {
  this.win.remove();
  this._sb.destroy()
};
UserSnap.Confirm = function(a) {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  var b = util.getViewport(), b = {"@id":"us_dialog", $:"us-dialogbox-base", $width:b.width + "px", $height:b.height + "px"};
  this._message = "";
  void 0 !== a.message && (this._message = a.message);
  this._title = "";
  void 0 !== a.title && (this._title = a.title);
  var c = this;
  a = this.MINI.EE;
  this._yesBtn = this._noBtn = null;
  this.win = a("div", b, a("div", {$:"us-dialogbox-content"}, [a("div", {$:"us-dialogbox-header question"}, this._title), a("div", {$:"us-dialogbox-text"}, function(a) {
    c.MINI.$(a).set("innerHTML", c._message)
  }), a("div", {$:"us-dialogbox-footer"}, a("div", {$:"buttons"}, [a("a", {$:"us-btn us-btn-sec", "@href":"#"}, util.decEscUTF8(us.b_no), function(a) {
    c._noBtn = a;
    a.on("click", function() {
      c.fireEvent("btnclicked", "no");
      c.destroy()
    })
  }), a("span"), a("a", {$:"us-btn", "@href":"#"}, util.decEscUTF8(us.b_yes), function(a) {
    c._yesBtn = a;
    a.on("click", function() {
      c.fireEvent("btnclicked", "yes");
      c.destroy()
    })
  })]))]), function(a) {
    c.win = a
  });
  this._sb.increaseDestroyCtn();
  this.MINI.$(this._sb.getDocument().body).add(this.win)
};
UserSnap.Confirm.prototype.show = function() {
  this.win.set("$display", "block");
  this._yesBtn[0].focus()
};
UserSnap.Confirm.prototype.destroy = function() {
  this.win.remove();
  this._sb.destroy()
};
UserSnap.Progress = function(a) {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  var b = util.getViewport(), b = {"@id":"us_dialog", $:"us-dialogbox-base", $width:b.width + "px", $height:b.height + "px"};
  !0 === this._userCfg.hideUI && (b.$ += " hideui");
  this._message = "";
  void 0 !== a.message && (this._message = a.message);
  var c = this;
  a = this.MINI.EE;
  this.contentHolder = this.interv = this.bar = null;
  this.finishstate = 0;
  this.win = a("div", b, a("div", {$:"us-dialogbox-content"}, [a("div", {$:"us-dialogbox-progress"}, [a("b", this._message), a("div", {$:"progress-bkg"}, a("div", {$:"progress-percentage"}, function(a) {
    c.bar = c.MINI.$(a)
  }))])], function(a) {
    c.contentHolder = a
  }), function(a) {
    c.win = a
  });
  this._sb.increaseDestroyCtn();
  this.MINI.$(this._sb.getDocument().body).add(this.win)
};
UserSnap.Progress.prototype.finish = function() {
  null !== this.interv && (this.finishstate++, this._finish())
};
UserSnap.Progress.prototype._finish = function() {
  if(2 === this.finishstate) {
    this.finishstate = 0;
    this.contentHolder.set("+finished");
    this.contentHolder.set("innerHTML", '<div class="us-dialogbox-finished"><b>' + util.decEscUTF8(us.i_finished) + "</b></div>");
    var a = this;
    window.setTimeout(function() {
      a.interv = null;
      a.win.set("+finished +hide");
      window.setTimeout(function() {
        a.destroy.apply(a);
        a.fireEvent("complete")
      }, 500)
    }, 1200)
  }
};
UserSnap.Progress.prototype.start = function() {
  if(null === this.interv) {
    this.win.set("$display", "block");
    var a = Math.ceil(20), b = 0, c = this;
    this.interv = window.setInterval(function() {
      100 === b && (b++, 0 === c.finishstate ? b = 0 : (window.clearInterval(c.interv), !0 === c._userCfg.hideUI ? (c.destroy.apply(c), c.fireEvent("complete")) : (c.finishstate++, c._finish())));
      c.bar.set("$width", b + "%");
      b++
    }, a)
  }
};
UserSnap.Progress.prototype.hide = function() {
  null !== this.interv && (window.clearTimeout(this.interv), this.interv = null, this.finishstate = 0);
  this.win.set("$display", "none")
};
UserSnap.Progress.prototype.destroy = function() {
  null !== this.interv && (window.clearTimeout(this.interv), this.interv = null);
  this.win.remove();
  this._sb.destroy()
};
UserSnap.IssueWindow = function() {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._minimized = this._enabled = !1;
  var a = {"@unselectable":"on", "@id":"us_report_window", $:"us-feedbackform start hidden"}, b = this;
  !0 === this._userCfg.hideUI && (a.$ += " hideui");
  this._chosenList = {};
  this._customFieldList = {};
  this._addedLabels = [];
  this._emailPh = util.decEscUTF8(us.i_emailbox);
  void 0 !== this._userCfg.emailBoxPlaceholder && (this._emailPh = this._userCfg.emailBoxPlaceholder);
  this._emailValue = this._instance._clientStorage.readVar("usersnap_email", "");
  this._disabled = "true" === this._disabled ? !0 : !1;
  void 0 !== this._userCfg.emailBoxValue && (this._emailValue = this._userCfg.emailBoxValue);
  this._emailPh = (this._emailRequired = !0 === this._userCfg.emailRequired) ? this._emailPh + (" " + util.decEscUTF8(us.i_required)) : this._emailPh + (" " + util.decEscUTF8(us.i_optional));
  this._email = !1;
  void 0 !== this._userCfg.emailBox && !0 === this._userCfg.emailBox && (this._email = !0);
  this._commentValue = "";
  void 0 !== this._userCfg.commentBoxValue && (this._commentValue = this._userCfg.commentBoxValue);
  this._commentPh = util.decEscUTF8(us.i_commentbox);
  void 0 !== this._userCfg.commentBoxPlaceholder && (this._commentPh = this._userCfg.commentBoxPlaceholder);
  this._commentPh = (this._commentRequired = !0 === this._userCfg.commentRequired) ? this._commentPh + (" " + util.decEscUTF8(us.i_required)) : this._commentPh + (" " + util.decEscUTF8(us.i_optional));
  this._comment = !1;
  void 0 !== this._userCfg.commentBox && !0 === this._userCfg.commentBox && (this._comment = !0);
  this._assignee = !0 === this._userCfg.assignee;
  this._assigneeRequired = !0 === this._userCfg.assigneeRequired;
  this._assigneePh = util.decEscUTF8(us.i_assignee);
  void 0 !== this._userCfg.assigneePlaceholder && (this._assigneePh = this._userCfg.assigneePlaceholder);
  this._assigneePh = this._assigneeRequired ? this._assigneePh + (" " + util.decEscUTF8(us.i_required)) : this._assigneePh + (" " + util.decEscUTF8(us.i_optional));
  this._title = !0 === this._userCfg.title;
  this._titleRequired = !0 === this._userCfg.titleRequired;
  this._titlePh = util.decEscUTF8(us.i_title);
  void 0 !== this._userCfg.titleValue && (this._titleValue = this._userCfg.titleValue);
  void 0 !== this._userCfg.titlePlaceholder && (this._titlePh = this._userCfg.titlePlaceholder);
  this._titlePh = this._titleRequired ? this._titlePh + (" " + util.decEscUTF8(us.i_required)) : this._titlePh + (" " + util.decEscUTF8(us.i_optional));
  this._label = !0 === this._userCfg.label;
  this._labelRequired = !0 === this._userCfg.labelRequired;
  this._labelPh = util.decEscUTF8(us.i_label);
  this._labelMultiSelect = !1 !== this._userCfg.labelMultiSelect;
  this._labelAllowCreate = !1 !== this._userCfg.labelAllowCreate;
  void 0 !== this._userCfg.labelPlaceholder && (this._labelPh = this._userCfg.labelPlaceholder);
  this._labelPh = this._labelRequired ? this._labelPh + (" " + util.decEscUTF8(us.i_required)) : this._labelPh + (" " + util.decEscUTF8(us.i_optional));
  this._addScreenshot = void 0 === this._userCfg.addScreenshot || this._userCfg.addScreenshot;
  this._addScreenshotSelect = !0 === this._userCfg.addScreenshotSelect;
  var c = UserSnap.Guide.getInstance();
  this._form = {comment:null, email:null, assignee:null, label:null, title:null, addscreenshot:null};
  var d = [];
  this._title && (this._form.title = this._buildField("title", "text", b._titlePh, b._titleValue, function(a) {
    b._form.title = a[0]
  }), d.push(this._form.title));
  if(this._email) {
    var e = b.MINI.EE("div", {"@class":"reporter-container"})()[0];
    d.push(e);
    this._form.email = this._buildField("email", "email", b._emailPh, b._emailValue, function(a) {
      b._form.email = a[0];
      var d = b._emailValue;
      a.on("blur keyup", function() {
        var a = b._getValue(b._form.email);
        b.fireEvent("emailChange", a);
        if(util.isEmail(a) || "" === a) {
          if("" === a) {
            b._senderImage.style.display = "none", b._form.email.className = "no-gravatar"
          }else {
            if(d !== a) {
              var c = util.gravatar(a, 24);
              b._senderImage.setAttribute("src", c);
              b._senderImage.style.display = "block";
              b._form.email.className = ""
            }
          }
        }else {
          b._senderImage.style.display = "none", b._form.email.className = "no-gravatar"
        }
        d = a
      });
      b._emailRequired ? c.addStory("email", a, {x:-10, y:0}, "<h3>" + us.g_email0 + "</h3><p>" + us.g_email1req + "</p>", "right") : c.addStory("email", a, {x:-10, y:0}, "<h3>" + us.g_email0 + "</h3><p>" + us.g_email1opt + "</p>", "right");
      "" === b._getValue(b._form.email) && (b._form.email.className = "no-gravatar")
    });
    var f = util.gravatar(b._emailValue, 24);
    b._senderImage = b.MINI.EE("img", {"@src":f, "@class":"sender-gravatar"})()[0];
    e.appendChild(b._senderImage);
    e.appendChild(this._form.email()[0]);
    b._emailValue || (b._senderImage.style.display = "none")
  }else {
    this._form.email = this._buildField("email", "hidden", void 0, b._emailValue, function(a) {
      b._form.email = a[0]
    }), d.push(this._form.email)
  }
  this._assignee && (this._form.assignee = this._buildField("assignee", "select", b._assigneePh, void 0, function(a) {
    b._form.assignee = a[0]
  }, {options:[]}), d.push(this._form.assignee));
  this._label && (this._form.label = this._buildField("label", "select", b._labelPh, void 0, function(a) {
    b._form.label = a[0]
  }, {options:[], multiselect:b._labelMultiSelect, create_option:b._labelAllowCreate ? function(a) {
    a = a.replace(/[^a-z\u00e4\u00f6\u00fcA-Z\u00c4\u00d6\u00dc\u00df0-9_+\-.:*#]+/g, "");
    for(var c in b._addedLabels) {
      if(b._addedLabels[c] == a) {
        return
      }
    }
    b._addedLabels.push(a);
    return{value:a, text:a, color:util.generateColor(a)}
  } : void 0, create_option_text:us.i_createnewlabel, persistent_create_option:!0}), d.push(this._form.label));
  this._comment && (this._form.comment = this._buildField("comment", "textarea", b._commentPh, b._commentValue, function(a) {
    b._form.comment = a[0];
    b._commentRequired ? c.addStory("commentbox", a, {x:-10, y:0}, "<h3>" + us.g_comment0 + "</h3><p>" + us.g_comment1req + "</p>", "right") : c.addStory("commentbox", a, {x:-10, y:0}, "<h3>" + us.g_comment0 + "</h3><p>" + us.g_comment1opt + "</p>", "right");
    a.on("keyup", function(a) {
      !0 === a.ctrlKey && 13 === a.keyCode && b._enabled && b.fireEvent("send", b)
    })
  }), d.push(this._form.comment));
  this._addScreenshotSelect && (this._form.addscreenshot = this._buildField("addscreenshot", "checkbox", us.i_addscreenshot, this._addScreenshot, function(a) {
    b._form.addscreenshot = a[0];
    var c = b.MINI.$(b._form.addscreenshot).select("input");
    c.on("change", function() {
      b.updateAddScreenshot(c.get("checked"))
    })
  }), d.push(this._form.addscreenshot));
  this.updateAddScreenshot(this._addScreenshot);
  if(void 0 !== this._userCfg.customfields) {
    for(var g = null, h, e = function(a) {
      d.splice(void 0 !== g.pos ? g.pos : 100, 0, b._buildField(g.name, g.type ? g.type : "text", h, g.value, function(c) {
        b._customFieldList[a].fd = c
      }, {options:g.options, multiselect:!!g.multiselect}))
    }, f = 0;f < this._userCfg.customfields.length;f++) {
      g = this._userCfg.customfields[f], void 0 === this._customFieldList[g.name] && (this._customFieldList[g.name] = g, h = g.placeholder = g.placeholder ? g.placeholder : g.name, !0 === g.required && (h += " " + util.decEscUTF8(us.i_required)), e(g.name))
    }
  }
  this._cancelBtn = this._sendBtn = null;
  this.win = this.MINI.EE("div", a, [this.MINI.EE("div", {$:"us-feedbackform-header", "@unselectable":"on"}, [util.decEscUTF8(us.i_feedback), this.MINI.EE("a", {$:"size-button help", "@href":"#", "@title":util.decEscUTF8(us.t_help)}, "?", function(a) {
    a = b.MINI.$(a);
    c.setStartAnchor(a);
    a.on("click", function() {
      c.start(!0)
    })
  }), this.MINI.EE("a", {$:"size-button minimize", "@href":"#", "@title":util.decEscUTF8(us.t_min)}, "\u2013", function(a) {
    a = b.MINI.$(a);
    b._minimizeBtn = a;
    a.on("click", function() {
      util.isIE() && b._maximizeBtn.set("$display", "block");
      b.win.set("+hidden");
      b._minimized = !0;
      b.fireEvent("minimize")
    })
  }), this.MINI.EE("a", {$:"size-button close", "@href":"#", "@title":util.decEscUTF8(us.t_close)}, "X", function(a) {
    a = b.MINI.$(a);
    b._closeBtn = a;
    b._closeBtn.set("innerHTML", "&times;");
    a.on("click", function() {
      b._enabled && b.fireEvent("cancel", b)
    })
  }), this.MINI.EE("a", {$:"size-button maximize", "@href":"#", "@tabIndex":"-1", "@title":util.decEscUTF8(us.t_max)}, this.MINI.EE("span"), function(a) {
    a = b.MINI.$(a);
    b._maximizeBtn = a;
    util.isIE() && a.set("$display", "none");
    a.on("click", function() {
      util.isIE() && b._maximizeBtn.set("$display", "none");
      b.win.set("-hidden");
      b._minimized = !1;
      b.fireEvent("maximize")
    })
  })], function(a) {
    a.on("click", function() {
      b._minimized && (util.isIE() && b._maximizeBtn.set("$display", "none"), b.win.set("-hidden"), b._minimized = !1, b.fireEvent("maximize"))
    })
  }), this.MINI.EE("div", {$:"us-feedbackform-content", "@unselectable":"on"}, d), this.MINI.EE("div", {$:"us-feedbackform-footer", "@unselectable":"on"}, [this.MINI.EE("a", {$:"us-btn us-btn-sec us-btn-left us-btn-thin", "@href":"#"}, util.decEscUTF8(us.b_cancel), function(a) {
    b._cancelBtn = a;
    b._cancelBtn.on("click", function() {
      b._enabled && b.fireEvent("cancel", b)
    })
  }), this.MINI.EE("div", {$:"us-btn", "@title":util.decEscUTF8(us.t_sendfb)}, util.decEscUTF8(us.b_send), function(a) {
    b._sendBtn = a;
    b._sendBtn.on("click", function() {
      b._enabled && b.fireEvent("send", b)
    })
  })])], function(a) {
    b.win = a;
    UserSnap.Guide.getInstance()
  });
  this.MINI.$(this._sb.getDocument().body).add(this.win);
  this._toolState = {doing:!1, transp:!1, init:!1, moveFn:null};
  setTimeout(function() {
    b.fireEvent("emailChange", b._emailValue)
  }, 1)
};
UserSnap.IssueWindow.prototype.updateAddScreenshot = function(a) {
  this.MINI.$("body").set("$", a ? "-no_screenshot" : "+no_screenshot");
  this._instance.addScreenshot = a
};
UserSnap.IssueWindow.prototype.updateSelectField = function(a, b, c) {
  if(void 0 !== typeof this._chosenList[a]) {
    var d = "<option></option>", e = "";
    util.isIE9() && (e = this._sb.getDocument().createElement("option"), this._chosenList[a][0].appendChild(e));
    for(var f = 0;f < b.length;f++) {
      "gen" === b[f].color && (b[f].color = util.generateColor(b[f].value)), util.isIE9() ? (e = this._sb.getDocument().createElement("option"), e.text = b[f].value, e.value = b[f].key, "string" === typeof b[f].img && e.setAttribute("data-img-src", b[f].img), "string" === typeof b[f].color && e.setAttribute("data-color", b[f].color), this._chosenList[a][0].appendChild(e)) : (e = "string" === typeof b[f].img ? 'data-img-src="' + b[f].img + '" ' : "", "string" === typeof b[f].color && (e += 'data-color="' + 
      b[f].color + '" '), c === b[f].key && (e += "selected "), d += "<option " + e + "value=" + b[f].key + ">" + b[f].value + "</option>")
    }
    util.isIE9() || this._chosenList[a].set("innerHTML", d);
    this._chosenList[a].trigger("chosen:updated")
  }
};
UserSnap.IssueWindow.prototype._buildField = function(a, b, c, d, e, f) {
  var g = this;
  f = f || {};
  var h = {email:{input:"input", cfg:{"@type":"email"}, init:function() {
  }}, text:{input:"input", cfg:{"@type":"text"}, init:function() {
  }}, hidden:{input:"input", cfg:{"@type":"hidden"}, init:function() {
  }}, textarea:{input:"textarea", cfg:{}, init:function() {
  }}, checkbox:{input:"label", cfg:{"@class":"us-checkbox"}, init:function(a) {
    var b;
    b = '<input type="checkbox" /> ' + c;
    a.set("innerHTML", b);
    void 0 !== d && g.MINI.$(a.select("input")[0]).set({checked:d})
  }}, label:{input:"label", cfg:{"@class":"us-label"}, init:function(a) {
    a.set("innerHTML", c)
  }}, select:{input:"select", cfg:{"@class":"assigneeSelect"}, init:function(b) {
    if(f.options instanceof Array) {
      var c = "<option></option>", e = "";
      util.isIE9() && (e = g._sb.getDocument().createElement("option"), b[0].appendChild(e));
      for(var h = 0;h < f.options.length;h++) {
        util.isIE9() ? (e = g._sb.getDocument().createElement("option"), e.text = f.options[h].value, e.value = f.options[h].key, "string" === typeof f.options[h].img && e.setAttribute("data-img-src", f.options[h].img), d === f.options[h].key && e.setAttribute("selected", !0), "string" === typeof f.options[h].color && e.setAttribute("data-color", f.options[h].color), b[0].appendChild(e)) : (e = "string" === typeof f.options[h].img ? 'data-img-src="' + f.options[h].img + '" ' : "", "string" === typeof f.options[h].color && 
        (e += 'data-color="' + f.options[h].color + '" '), d === f.options[h].key && (e += "selected "), c += "<option " + e + "value=" + f.options[h].key + ">" + f.options[h].value + "</option>")
      }
      util.isIE9() || b.set("innerHTML", c)
    }
    b.create_option = f.create_option;
    b.create_option_text = f.create_option_text;
    b.persistent_create_option = f.persistent_create_option;
    g._chosenList[a] = b
  }}};
  if(void 0 === h[b]) {
    return null
  }
  var j = this.MINI.EE(h[b].input, h[b].cfg, function(a) {
    j = g.MINI.$(a);
    void 0 !== d && "checkbox" !== b && (a.value = d);
    h[b].init(j);
    void 0 !== c && ("select" !== b && "checkbox" !== b && "label" !== b && (util.isIE7() || util.isIE8() || util.isIE9()) ? (j.set("%placeholder", c), "" === a.value && (a.value = c), j.on("focus", function() {
      a.value === c && (a.value = "")
    }), j.on("blur", function() {
      "" === a.value && (a.value = c)
    })) : (j.set("@placeholder", c), j.set("%placeholder", c)));
    !0 === f.multiselect && j.set("@multiple", "multiple");
    void 0 !== e && e.apply(g, [j])
  });
  return j
};
UserSnap.IssueWindow.prototype._initTransparent = function() {
  if(!0 !== this._userCfg.hideUI && !this._toolState.init) {
    this._toolState.init = !0;
    var a = -1, b = -1, c = -1, d = -1;
    this._toolState = {doing:!1, transp:!1, init:!1, moveFn:null};
    var e, f, g = this;
    this._toolState.moveFn = function(h) {
      if(null === g.win) {
        return!0
      }
      e = h.clientX;
      f = h.clientY;
      if(-1 === a || isNaN(a)) {
        h = g.win[0].getBoundingClientRect(), a = h.left, b = h.top, c = h.width, d = h.height
      }
      e > a - 100 && e < a + c + 100 && f > b - 100 && f < b + d + 100 ? g._toolState.doing && !g._toolState.transp && (g.win.set("+us-transparent"), g._toolState.transp = !0) : g._toolState.transp && (g.win.set("-us-transparent"), g._toolState.transp = !1);
      return!0
    };
    this.MINI.$(this._sb.getDocument()).on("mousemove", this._toolState.moveFn);
    for(var h = function(e, f, g) {
      if("note" !== e && "comment" !== e || "edit" !== g) {
        this._toolState.doing = !0
      }
      if("note" === e || "comment" === e) {
        a > f.x + f.width || (a + c < f.x || b > f.y + f.height || b + d < f.y) || this.win.set("+us-transparent")
      }
    }, j = function() {
      this._toolState.doing = !1;
      this.win.set("-us-transparent");
      this._toolState.transp = !1
    }, l = 0;l < this._instance._tools.length;l++) {
      this._instance._tools[l].listenEvent("startWorking", h, this), this._instance._tools[l].listenEvent("stopWorking", j, this)
    }
  }
};
UserSnap.IssueWindow.prototype.setFormField = function(a, b) {
  var c = this._form[a];
  if(void 0 !== c && null !== c) {
    if(void 0 !== this._chosenList[a]) {
      b instanceof Array || (b = "string" === typeof b && 0 < b.indexOf(",") ? b.split(",") : [b]);
      var d = this;
      this.MINI.$(c.options).each(function(a) {
        d.MINI.$(a).set("@selected", null)
      });
      c.value = null;
      for(var c = c.options, e = 0;e < b.length;e++) {
        if(b[e] && b[e].trim()) {
          for(var f = b[e].replace(/[\s]+/g, ""), g = !1, h = 0;h < c.length;h++) {
            c[h].value === f && (d.MINI.$(c[h]).set("@selected", "selected"), g = !0)
          }
          !g && this._chosenList[a].create_option && this._chosenList[a].add(d.MINI.EE("option", {"%color":util.generateColor(f), "@value":f, "@selected":"selected"}, f))
        }
      }
      this._chosenList[a].trigger("chosen:updated")
    }else {
      c.value = b
    }
    return!0
  }
  return!1
};
UserSnap.IssueWindow.prototype.isDirty = function() {
  var a = this.getFormData();
  if(this._comment && "" !== a.sendercomment || this._email && "" !== a.senderemail && a.senderemail !== this._instance._clientStorage.readVar("usersnap_email", "") || this._title && "" !== a.title || this._assignee && "" !== a.assignee || this._label && 0 < a.label.length) {
    return!0
  }
  for(var b in this._customFieldList) {
    if(this._customFieldList.hasOwnProperty(b) && "checkbox" !== this._customFieldList[b].type && "label" !== this._customFieldList[b].type && "" !== this._getValue(this._customFieldList[b].fd[0])) {
      return!0
    }
  }
  return!1
};
UserSnap.IssueWindow.prototype.validateForm = function() {
  var a = this.getFormData();
  if(this._comment && this._commentRequired && "" === a.sendercomment) {
    return(new UserSnap.Dialog({autoClose:!0, title:util.decEscUTF8(us.i_warning), message:util.decEscUTF8(us.i_commentnotvalid), type:"warning"})).show(), !1
  }
  if(this._email && this._emailRequired) {
    if("" === a.senderemail) {
      return(new UserSnap.Dialog({autoClose:!0, title:util.decEscUTF8(us.i_warning), message:util.decEscUTF8(us.i_emailmissing), type:"warning"})).show(), !1
    }
    if(!util.isEmail(a.senderemail)) {
      return(new UserSnap.Dialog({autoClose:!0, title:util.decEscUTF8(us.i_warning), message:util.decEscUTF8(us.i_emailnotvalid), type:"warning"})).show(), !1
    }
  }
  if(this._assignee && this._assigneeRequired && "" === a.assignee) {
    return(new UserSnap.Dialog({autoClose:!0, title:util.decEscUTF8(us.i_warning), message:util.decEscUTF8(us.i_assigneenotvalid), type:"warning"})).show(), !1
  }
  if(this._title && this._titleRequired && "" === a.title) {
    return(new UserSnap.Dialog({autoClose:!0, title:util.decEscUTF8(us.i_warning), message:util.decEscUTF8(us.i_titlenotvalid), type:"warning"})).show(), !1
  }
  if(this._label && this._labelRequired && 0 === a.label.length) {
    return(new UserSnap.Dialog({autoClose:!0, title:util.decEscUTF8(us.i_warning), message:util.decEscUTF8(us.i_labelnotvalid), type:"warning"})).show(), !1
  }
  for(var b in this._customFieldList) {
    if(this._customFieldList.hasOwnProperty(b) && (void 0 === a.customfields && (a.customfields = []), !0 === this._customFieldList[b].required && "" === this._getValue(this._customFieldList[b].fd[0]))) {
      return(new UserSnap.Dialog({autoClose:!0, title:util.decEscUTF8(us.i_warning), message:'"' + this._customFieldList[b].placeholder + '" ' + util.decEscUTF8(us.i_generalnotvalid), type:"warning"})).show(), !1
    }
  }
  return!0
};
UserSnap.IssueWindow.prototype.enable = function() {
  this._enabled = !0;
  for(var a in this._form) {
    this._form.hasOwnProperty(a) && this.MINI.$(this._form[a]).set("disabled", !1)
  }
};
UserSnap.IssueWindow.prototype.disable = function() {
  this._enabled = !1;
  for(var a in this._form) {
    this._form.hasOwnProperty(a) && this.MINI.$(this._form[a]).set("disabled", !0)
  }
};
UserSnap.IssueWindow.prototype._getValue = function(a) {
  if("select" === a.nodeName.toLowerCase()) {
    if("multiple" === this.MINI.$(a).get("@multiple")) {
      for(var b = [], c = 0;c < a.options.length;c++) {
        a.options[c].selected && b.push(a.options[c].value)
      }
      return b
    }
    return a.value
  }
  if("label" === a.nodeName.toLowerCase() && (b = this.MINI.$(a).select("input"), 0 < b.length)) {
    return b.get("checked")
  }
  if(util.isIE7() || util.isIE8() || util.isIE9()) {
    if(b = this.MINI.$(a).get("%placeholder"), a.value === b) {
      return""
    }
  }
  return a.value
};
UserSnap.IssueWindow.prototype.clearFormFocus = function() {
  for(var a in this._form) {
    null !== this._form[a] && this._form.hasOwnProperty(a) && this._form[a].blur()
  }
};
UserSnap.IssueWindow.prototype.getFormData = function() {
  var a = {};
  null !== this._form.email && (a.senderemail = this._getValue(this._form.email));
  null !== this._form.comment && (a.sendercomment = this._getValue(this._form.comment));
  null !== this._form.assignee && (a.assignee = this._getValue(this._form.assignee));
  null !== this._form.title && (a.title = this._getValue(this._form.title));
  if(null !== this._form.label) {
    var b = this._getValue(this._form.label);
    "string" === typeof b && (b = [b]);
    a.label = b
  }
  null !== this._form.addscreenshot && (a.addscreenshot = this._getValue(this._form.addscreenshot));
  for(var c in this._customFieldList) {
    this._customFieldList.hasOwnProperty(c) && "label" !== this._customFieldList[c].type && (void 0 === a.customfields && (a.customfields = []), a.customfields.push({name:this._customFieldList[c].name, value:this._getValue(this._customFieldList[c].fd[0])}))
  }
  return a
};
UserSnap.IssueWindow.prototype.show = function() {
  var a = this;
  window.setTimeout(function() {
    if(null !== a.win) {
      a.win.set("-hidden -start");
      util.isSafari() || util.isFF() ? (a.win.set("$display", "none"), window.setTimeout(function() {
        a.win.set("$display", "block");
        a.fireEvent("ready")
      }, 0)) : a.fireEvent("ready");
      window.setTimeout(function() {
        a._initTransparent()
      }, 500);
      for(var b in a._chosenList) {
        a._chosenList.hasOwnProperty(b) && ChosenLib.chosen(a._chosenList[b][0], {width:"100%", placeholder_text_single:a._chosenList[b].get("@placeholder"), allow_single_deselect:!0, display_selected_options:!1, create_option:a._chosenList[b].create_option, skip_no_results:!!a._chosenList[b].create_option, create_option_text:a._chosenList[b].create_option_text, persistent_create_option:a._chosenList[b].persistent_create_option})
      }
    }
  }, 50)
};
UserSnap.IssueWindow.prototype.destroy = function() {
  this.win.remove();
  this._enabled = !1;
  this.win = null
};
UserSnap.Toolbox = function() {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._evtHandler = {};
  this._moveHandler = null;
  this._currentMPos = {x:0, y:0};
  this._currentBBox = {x:-1, y:-1, width:-1, height:-1};
  this._toolState = {doing:!1, transp:!1};
  this._tools = [];
  this._activeTool = this.win = null;
  this._positionInit = this._init = !1;
  this._pb = this._selMgr = null
};
UserSnap.Toolbox.prototype.registerSelectionMgr = function(a) {
  null !== a && null === this._selMgr && (this._selMgr = a, this._selMgr.listenEvent("select", function(a) {
    this._clickTool(this._getToolIndex(a.tool._toolkey))
  }, this))
};
UserSnap.Toolbox.prototype.start = function() {
  null !== this.win && this._clickTool(0)
};
UserSnap.Toolbox.prototype._getToolIndex = function(a) {
  for(var b = 0;b < this._tools.length;b++) {
    if(this._tools[b]._toolkey === a) {
      return b
    }
  }
  return-1
};
UserSnap.Toolbox.prototype._clickTool = function(a) {
  var b = this;
  if(this._activeTool === b._tools[a]) {
    this._activeTool.enable()
  }else {
    this._toolList.set("-active");
    for(var c = 0;c < this._tools.length;c++) {
      this._tools[c].disable()
    }
    this._tools[a].enable();
    this._activeTool = this._tools[a];
    window.setTimeout(function() {
      b.MINI.$(b._toolList[a]).set("+active")
    }, 200)
  }
};
UserSnap.Toolbox.prototype.addTool = function(a) {
  this._tools.push(a);
  a.initToolbox(this, this._tools.length - 1);
  a.listenEvent("autoselect", function(a) {
    for(var c = 0;c < this._tools.length;c++) {
      this._tools[c] === a ? (this._tools[c].enable(), this.MINI.$(this._toolList[c]).set("+active")) : (this._tools[c].disable(), this.MINI.$(this._toolList[c]).set("-active"))
    }
  }, this)
};
UserSnap.Toolbox.prototype._buildUI = function() {
  var a = {"@unselectable":"on", "@id":"us_toolbox", $:"us-widget invisible"};
  !0 === this._userCfg.hideUI && (a.$ += " hideui");
  var b = this;
  this._cancelBtn = this._headerbox = this._toolbox = null;
  0 !== this._tools.length && (this.win = this.MINI.EE("div", a, [this.MINI.EE("div", {$:"us-widget-panel"}, [this.MINI.EE("div", {$:"us-widget-panel-header", "@unselectable":"on"}, [this.MINI.EE("div", {$:"us-widget-panel-header-logo"}), this.MINI.EE("a", {$:"cancel-button", "@href":"#"}, "X", function(a) {
    b._cancelBtn = b.MINI.$(a);
    b.MINI.$(a).set("innerHTML", "&times;");
    b._cancelBtn.on("click", function() {
      b.fireEvent("cancel")
    })
  })], function(a) {
    b._headerbox = b.MINI.$(a)
  }), this.MINI.EE("div", {$:"us-widget-panel-toolbox"}, function(a) {
    b._toolbox = b.MINI.$(a)
  })]), this.MINI.EE("div", {$:"us-powered"}, this.MINI.EE("a", {"@href":"https://usersnap.com/?gat=tb", "@target":"_blank"}, "powered by Usersnap"), function(a) {
    b._pb = b.MINI.$(a)
  })], function(a) {
    b.win = a;
    b._initUI.apply(b)
  }), this.MINI.$(this._sb.getDocument().body).add(this.win), window.setTimeout(function() {
    b.restoreToolboxPosition()
  }, 200))
};
UserSnap.Toolbox.prototype.showPowered = function() {
  null !== this._pb && this._pb.set("$display", "block")
};
UserSnap.Toolbox.prototype.constrain2Viewport = function(a, b) {
  var c = util.getViewport(), d = 0;
  if("x" === a) {
    if(5 > b) {
      return 5
    }
    d = c.width - 5 - this.win.get("$width", !0)
  }else {
    if(5 > b) {
      return 5
    }
    d = c.height - 5 - this.win.get("$height", !0)
  }
  return b > d ? d : b
};
UserSnap.Toolbox.prototype._initDD = function() {
  var a = !1, b = -1, c = -1, d = -1, e = -1, f = this, g = UserSnap.Guide.getInstance();
  this._evtHandler = {md:function(h) {
    if(a) {
      return!0
    }
    a = !0;
    g.hide();
    b = h.clientX;
    c = h.clientY;
    d = parseInt(f.win.get("$left"), 10);
    e = parseInt(f.win.get("$top"), 10);
    return!0
  }, mu:function() {
    a = !1;
    f._calcCurrentBBox.apply(f);
    return!0
  }, mm:function(g) {
    f._currentMPos.x = g.clientX;
    f._currentMPos.y = g.clientY;
    if(!a) {
      return f._checkToolState.apply(f), !0
    }
    var j = f._currentMPos.x - b, l = f._currentMPos.y - c;
    if(0 === util.getWhich(g, f._sb.getWindow())) {
      return a = !1, f._calcCurrentBBox.apply(f), !0
    }
    f.win.set({$top:f.constrain2Viewport("y", e + l) + "px", $left:f.constrain2Viewport("x", d + j) + "px"});
    return!0
  }};
  this._headerbox.on("mousedown", this._evtHandler.md);
  this._headerbox.on("mouseup", this._evtHandler.mu);
  this.MINI.$(this._sb.getDocument()).on("mousemove", this._evtHandler.mm)
};
UserSnap.Toolbox.prototype._calcCurrentBBox = function() {
  null !== this.win && (this._currentBBox.x = this.win.get("$left", !0), this._currentBBox.y = this.win.get("$top", !0), this._currentBBox.width = this.win.get("$width", !0), this._currentBBox.height = this.win.get("$height", !0), this.persistToolboxPosition())
};
UserSnap.Toolbox.prototype.persistToolboxPosition = function() {
  var a = util.getViewport();
  this._instance._clientStorage.writeVar("usersnap_toolboxposition_x", "" + (this._currentBBox.x - 5) / (a.width - this._currentBBox.width - 10));
  this._instance._clientStorage.writeVar("usersnap_toolboxposition_y", "" + (this._currentBBox.y - 5) / (a.height - this._currentBBox.height - 10))
};
UserSnap.Toolbox.prototype.restoreToolboxPosition = function() {
  var a = util.getViewport();
  this.win.set({$:"-invisible"});
  if(this.win) {
    this._currentBBox.width = this.win.get("$width", !0);
    this._currentBBox.height = this.win.get("$height", !0);
    isNaN(this._currentBBox.width) && (this._currentBBox.width = 130);
    isNaN(this._currentBBox.height) && (this._currentBBox.height = 35 * (this._toolList.length + 1));
    var b = parseFloat(this._instance._clientStorage.readVar("usersnap_toolboxposition_x", -1)), c = parseFloat(this._instance._clientStorage.readVar("usersnap_toolboxposition_y", -1)), d = 50;
    0 <= b && (d = this.constrain2Viewport("x", (a.width - this._currentBBox.width - 10) * b + 5));
    b = 50;
    0 <= c && (b = this.constrain2Viewport("y", (a.height - this._currentBBox.height - 10) * c + 5));
    this.win.set({$top:b + "px", $left:d + "px"})
  }
  this._positionInit = !0
};
UserSnap.Toolbox.prototype._checkToolState = function() {
  this._positionInit && ((-1 === this._currentBBox.x || isNaN(this._currentBBox.x)) && this._calcCurrentBBox(), this._currentMPos.x > this._currentBBox.x - 100 && this._currentMPos.x < this._currentBBox.x + this._currentBBox.width + 100 && this._currentMPos.y > this._currentBBox.y - 100 && this._currentMPos.y < this._currentBBox.y + this._currentBBox.height + 100 ? this._toolState.doing && !this._toolState.transp && (this.win.set("+us-transparent"), this._toolState.transp = !0) : this._toolState.transp && 
  (this.win.set("-us-transparent"), this._toolState.transp = !1))
};
UserSnap.Toolbox.prototype._initTransparent = function() {
  var a = UserSnap.Guide.getInstance(), b = function(a) {
    a = this._getToolIndex(a);
    -1 < a && this._clickTool(a)
  };
  a.listenEvent("next", b, this);
  a.listenEvent("prev", b, this);
  a.listenEvent("finished", function() {
    this._clickTool(0)
  }, this);
  for(var b = function(b, c, d) {
    b !== a.getCurrentStep(!0) && a.hide();
    this.fireEvent("startWorking");
    if("note" !== b && "comment" !== b || "edit" !== d) {
      this._toolState.doing = !0
    }
    if("note" === b || "comment" === b) {
      this._currentBBox.x > c.x + c.width || (this._currentBBox.x + this._currentBBox.width < c.x || this._currentBBox.y > c.y + c.height || this._currentBBox.y + this._currentBBox.height < c.y) || this.win.set("+us-transparent")
    }
  }, c = function() {
    this.fireEvent("stopWorking");
    this._toolState.doing = !1;
    this.win.set("-us-transparent");
    this._toolState.transp = !1
  }, d = 0;d < this._tools.length;d++) {
    this._tools[d].listenEvent("startWorking", b, this), this._tools[d].listenEvent("stopWorking", c, this)
  }
};
UserSnap.Toolbox.prototype._initUI = function() {
  UserSnap.Guide.getInstance();
  this._initDD();
  this._initTransparent();
  for(var a = null, b = this.MINI.EE, c = 0, d = this, e = function(a) {
    var e = [b("div", {$:"us-widget-panel-tool-button", "@title":a.tooltip, "@unselectable":"on"}, [b("i"), " " + a.text])], f = null;
    "function" === typeof a.settings && (f = a.settings());
    null !== f && e.push(f);
    return b("div", {"%tool":a.icon, $:"us-widget-panel-tool-base"}, e, function() {
      c++;
      d._tools.length === c && d.fireEvent("initialized")
    })
  }, f = [], g = 0;g < this._tools.length;g++) {
    a = this._tools[g].getUIConfig(), f.push(e(a))
  }
  this._toolbox.add(f);
  this._toolList = this.win.select(".us-widget-panel-tool-base");
  this.win.select(".us-widget-panel-tool-button").on("click", function(a, b) {
    d._clickTool.apply(d, [b]);
    return!1
  })
};
UserSnap.Toolbox.prototype.show = function() {
  this._init ? (this.win.set("$display", "block"), this._calcCurrentBBox()) : (this._init = !0, this._buildUI())
};
UserSnap.Toolbox.prototype.destroy = function() {
  null !== this.win && (this.MINI.$.off(this._evtHandler.md), this.MINI.$.off(this._evtHandler.mu), this.MINI.$.off(this._evtHandler.mm), this.win.remove());
  this._positionInit = this._init = !1;
  this.win = this._pb = null
};
UserSnap.Selection = function(a) {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this._sb = this._instance.sandbox;
  this._paint = a.paint;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._selElm = null;
  this._drag = !1;
  this._defLayer = null;
  this._layerStack = []
};
UserSnap.Selection.prototype.isElementSelected = function() {
  return null !== this._selElm
};
UserSnap.Selection.prototype.getSelectedElement = function() {
  return null === this._selElm ? null : this._selElm.element
};
UserSnap.Selection.prototype.isDrawOpAllowed = function() {
  return!1 === this._drag
};
UserSnap.Selection.prototype.clearSelection = function() {
  if(null === this._selElm) {
    return!1
  }
  this._selElm = null;
  return!0
};
UserSnap.Selection.prototype.startDrag = function() {
  null !== this._selElm && this._selElm.tool.resetSelection();
  this._drag = !0
};
UserSnap.Selection.prototype._restoreLayerStack = function() {
  for(var a = this._layerStack.length - 1;0 <= a;a--) {
    if(null !== this._layerStack[a].node) {
      this._defLayer = this._layerStack[a];
      return
    }
  }
  this._defLayer = this._paint.getRaphael().top
};
UserSnap.Selection.prototype.syncLayers = function(a, b) {
  var c = 0;
  null === this._defLayer.node && this._restoreLayerStack();
  if("top" !== b) {
    for(c = 0;c < a.length;c++) {
      a[c].insertAfter(this._defLayer), this._defLayer = a[c], this._layerStack.push(a[c])
    }
  }
};
UserSnap.Selection.prototype.updateRootLayer = function(a) {
  this._layerStack.splice(0, 0, a);
  null === this._defLayer && (this._defLayer = a)
};
UserSnap.Selection.prototype.stopDrag = function() {
  this._drag = !1
};
UserSnap.Selection.prototype.selectElement = function(a, b) {
  if(null !== this._selElm) {
    return!1
  }
  this._selElm = {tool:a, element:b};
  this.fireEvent("select", this._selElm);
  return!0
};
UserSnap.Paint = function(a) {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._vp = util.getViewport(!0);
  this._cfg = a || {};
  this._cutList = [];
  this._grayLayer = null;
  this._grayLayerEnabled = !1;
  this._tools = [];
  this._grayConfig = {COLOR:"#666666", OPACITY:0.4};
  a = {"@unselectable":"on", "@id":"us_paint", $:"us-svg-paint", $width:this._vp.width + "px", $height:this._vp.height + "px", $top:"0px", $left:"0px"};
  this._selection = new UserSnap.Selection({paint:this});
  var b = this;
  this.paintArea = this.MINI.EE("div", a, [], function(a) {
    b.paintArea = a;
    b._initRaphael.apply(b)
  });
  this.noPaintArea = this.MINI.EE("div", {$:"us-svg-nopaint", $width:this._vp.width + "px", $height:this._vp.height + "px", $top:"0px", $left:"0px"}, [], function(a) {
    b.noPaintArea = a
  });
  this.MINI.$(this._sb.getDocument().body).add(this.paintArea);
  this.MINI.$(this._sb.getDocument().body).add(this.noPaintArea)
};
UserSnap.Paint.prototype.clearAllSelections = function() {
  for(var a = 0;a < this._tools.length;a++) {
    this._tools[a].resetSelection()
  }
};
UserSnap.Paint.prototype.getSVGData = function(a) {
  var b = null, c;
  for(c = 0;c < this._tools.length;c++) {
    if(this._tools[c].isEnabled()) {
      b = this._tools[c];
      break
    }
  }
  null !== b && b.disable();
  var d = !1;
  for(c = 0;c < this._cutList.length;c++) {
    if(void 0 !== this._cutList[c]) {
      d = !0;
      break
    }
  }
  !0 !== this._userCfg.hideUI && (d || this._grayLayer.remove());
  a = this.getRaphael().toSVG(a);
  null !== b && b.enable();
  return a
};
UserSnap.Paint.prototype.getSelectionManager = function() {
  return this._selection
};
UserSnap.Paint.prototype.getRaphael = function() {
  return this._raph
};
UserSnap.Paint.prototype.addTool = function(a) {
  this._tools.push(a);
  a.init(this)
};
UserSnap.Paint.prototype.delGrayCutArea = function(a) {
  "undefined" !== typeof this._cutList[a] && (this._cutList[a] = void 0, this._updateGrayLayer())
};
UserSnap.Paint.prototype.addGrayCutArea = function(a, b, c, d, e) {
  var f = -1;
  if(!this._grayLayerEnabled || 0 === d - b || 0 === c - a) {
    return-1
  }
  if(void 0 !== e) {
    if(void 0 === this._cutList[e]) {
      return-1
    }
    f = e;
    this._cutList[f] = [[a, b], [c, d]]
  }else {
    f = this._cutList.length, this._cutList.push([[a, b], [c, d]])
  }
  this._updateGrayLayer();
  return f
};
UserSnap.Paint.prototype._updateGrayLayer = function() {
  if(this._grayLayerEnabled) {
    for(var a = [], b = 0;b < this._cutList.length;b++) {
      void 0 !== this._cutList[b] && a.push([[this._cutList[b][0][0], this._cutList[b][0][1]], [this._cutList[b][1][0], this._cutList[b][1][1]]])
    }
    0 === a.length && a.push([[10, 10], [10, 10]]);
    var b = [], c = [], d, e, f;
    d = function(a, b) {
      0 > b ? a.push(0) : a.push(b)
    };
    for(e = 0;e < a.length;e++) {
      void 0 !== a[e] && (0 > a[e][0][0] && b.push(0), d(b, a[e][0][0]), d(b, a[e][1][0]), d(c, a[e][0][1]), d(c, a[e][1][1]))
    }
    for(e = 0;e < b.length;e++) {
      for(d = 0;d < b.length - 1;d++) {
        b[d] > b[d + 1] && (f = b[d + 1], b[d + 1] = b[d], b[d] = f)
      }
    }
    for(e = 0;e < c.length;e++) {
      for(d = 0;d < c.length - 1;d++) {
        c[d] > c[d + 1] && (f = c[d + 1], c[d + 1] = c[d], c[d] = f)
      }
    }
    b.splice(0, 0, 0);
    c.splice(0, 0, 0);
    b.push(this._vp.width);
    c.push(this._vp.height);
    if(1 < b.length) {
      for(e = 1;e < b.length;e++) {
        b[e] === b[e - 1] && (b.splice(e, 1), e--)
      }
    }
    if(1 < c.length) {
      for(e = 1;e < c.length;e++) {
        c[e] === c[e - 1] && (c.splice(e, 1), e--)
      }
    }
    var g = !1, h;
    null !== this._grayLayer && this._grayLayer.remove();
    this._grayLayer = this._raph.set();
    for(e = 1;e < c.length;e++) {
      for(d = 1;d < b.length;d++) {
        g = !1;
        for(f = 0;f < a.length;f++) {
          if(h = a[f], void 0 !== h && h[0][0] <= b[d - 1] && h[1][0] >= b[d] && h[0][1] <= c[e - 1] && h[1][1] >= c[e]) {
            g = !0;
            break
          }
        }
        g || (f = b[d] - b[d - 1], g = c[e] - c[e - 1], 0 > f || 0 > g ? f = null : (f = this._raph.rect(b[d - 1], c[e - 1], f, g), f.attr({stroke:this._grayConfig.COLOR, "stroke-width":0, fill:this._grayConfig.COLOR, "fill-opacity":this._grayConfig.OPACITY})), null !== f && this._grayLayer.push(f))
      }
    }
    this._grayLayer.toBack();
    this._selection.updateRootLayer(this._grayLayer[0])
  }
};
UserSnap.Paint.prototype._initRaphael = function() {
  Raphael.setWindow(this._sb.getWindow());
  this._raph = Raphael(this.paintArea[0], this._vp.width, this._vp.height);
  !0 === this._cfg.highlight && (this._grayLayerEnabled = !0, this._updateGrayLayer());
  var a = this;
  this._evtHandler = {md:function(b) {
    a.fireEvent("mousedown", b);
    return!0
  }, mu:function(b) {
    a.fireEvent("mouseup", b);
    return!0
  }, mm:function(b) {
    a.fireEvent("mousemove", b);
    return!0
  }, kd:function(b) {
    var c = null, c = a.fireEvent("keydown", b);
    if(null === c) {
      if(27 === b.keyCode) {
        a.fireEvent("cancel"), c = !1
      }else {
        if(8 === b.keyCode) {
          b = a._sb.getDocument().activeElement;
          var d = b.nodeName.toLowerCase();
          "textarea" === d || ("input" === d || b.isContentEditable) || (c = !1)
        }
      }
    }
    return null === c ? !0 : c
  }, ku:function(b) {
    a.fireEvent("keyup", b);
    return!0
  }};
  this.MINI.$(this.paintArea).on("mousedown", this._evtHandler.md);
  this.MINI.$(this._sb.getDocument()).on("mouseup", this._evtHandler.mu);
  this.MINI.$(this._sb.getDocument()).on("mousemove", this._evtHandler.mm);
  this.MINI.$(this._sb.getDocument()).on("keydown", this._evtHandler.kd);
  MINI.$(document).on("keydown", this._evtHandler.kd);
  this.MINI.$(this._sb.getDocument()).on("keyup", this._evtHandler.ku);
  MINI.$(document).on("keyup", this._evtHandler.ku)
};
UserSnap.Paint.prototype.destroy = function() {
  this.MINI.$.off(this._evtHandler.md);
  this.MINI.$.off(this._evtHandler.mu);
  this.MINI.$.off(this._evtHandler.mm);
  this.MINI.$.off(this._evtHandler.kd);
  this.MINI.$.off(this._evtHandler.ku);
  this.paintArea.remove();
  this.paintArea = null
};
var _usersnapConsoleRecorder = null;
UserSnap.ConsoleRecorder = function(a) {
  this._instance = UserSnap.getInstance();
  this._userCfg = this._instance._userCfg;
  this.MINI = a;
  this.MAX_REQBODY_SIZE = this.MAX_RESPONSE_SIZE = 1024;
  this.MAX_LOGOBJECT_SIZE = 2048;
  void 0 !== this._userCfg.consoleRecorderCfg.logObjectSize && (this.MAX_LOGOBJECT_SIZE = parseInt(this._userCfg.consoleRecorderCfg.logObjectSize, 10));
  UserSnap.util.Observable.mixin(this)
};
UserSnap.ConsoleRecorder.getInstance = function(a) {
  null === _usersnapConsoleRecorder && (_usersnapConsoleRecorder = new UserSnap.ConsoleRecorder(a), _usersnapConsoleRecorder.initialize());
  return _usersnapConsoleRecorder
};
UserSnap.ConsoleRecorder.prototype.initialize = function() {
  this._messages = [];
  this._maxMessages = 50;
  this._exceptions = [];
  this._maxExceptions = 50;
  void 0 !== this._userCfg.consoleRecorderCfg.maxMessages && (this._maxMessages = parseInt(this._userCfg.consoleRecorderCfg.maxMessages, 10));
  void 0 !== this._userCfg.consoleRecorderCfg.maxExceptions && (this._maxExceptions = parseInt(this._userCfg.consoleRecorderCfg.maxExceptions, 10));
  this._console_handlers = {log:{level:"log", type:"log"}, debug:{level:"debug", type:"log"}, info:{level:"log", type:"result"}, warn:{level:"warning", type:"log"}, error:{level:"error", type:"log"}, assert:{level:"error", type:"assert"}, dir:{level:"log", type:"dir"}, dirxml:{level:"log", type:"dirxml"}};
  this._setupInterceptors()
};
UserSnap.ConsoleRecorder.prototype.addMessage = function(a, b, c, d, e, f) {
  for(this._messages.push({timestamp:(new Date).getTime(), source:a, level:b, type:c, message:d, data:e, stack:f});this._messages.length > this._maxMessages;) {
    this._messages.shift()
  }
};
UserSnap.ConsoleRecorder.prototype.addInternalException = function(a) {
  for(this._exceptions.push(arguments);this._exceptions.length > this._maxExceptions;) {
    this._exceptions.shift()
  }
};
UserSnap.ConsoleRecorder.prototype.getMessages = function() {
  return this._messages
};
UserSnap.ConsoleRecorder.prototype.getMessagesJSON = function() {
  return util.toJSON({messages:this._messages, reftimestamp:(new Date).getTime()})
};
UserSnap.ConsoleRecorder.prototype.printMessages = function() {
  for(var a = this.getMessages(), b = 0;b < a.length;b++) {
    var c = a[b];
    this.console("log", ["%s - %s: %o (stack: %o)", c.time, c.type, c.data, c.stack]);
    this.console("log", c.data)
  }
};
UserSnap.ConsoleRecorder.prototype._setupInterceptors = function() {
  var a = this;
  this._addInterceptor(window, "onerror", function(b, d, e, f, g) {
    try {
      !g && window.event && (g = window.event.error);
      var h;
      h = g ? util.printStackTrace({e:g, guess:!1}) : ["@" + d + ":" + (e || 0) + ":" + (f || 0)];
      a.addMessage("javascript", "error", "log", b, null, h)
    }catch(j) {
      a.addInternalException(j)
    }
  });
  "object" !== typeof console && (console = {});
  for(var b in this._console_handlers) {
    this._console_handlers.hasOwnProperty(b) && (this._console_handlers[b] = this._createConsoleHandler(b, this._console_handlers[b].level, this._console_handlers[b].type))
  }
  this._injectXHRInterceptor()
};
UserSnap.ConsoleRecorder.prototype.console = function(a, b) {
  if(this._console_handlers[a]) {
    var c = this._console_handlers[a];
    c.fn.apply(c.scope, b)
  }
};
UserSnap.ConsoleRecorder.prototype._addInterceptor = function(a, b, c) {
  try {
    if(a[b]) {
      var d = a[b];
      a[b] = function() {
        try {
          Function.prototype.apply.call(d, a, Array.prototype.slice.call(arguments))
        }catch(b) {
          this.addInternalException(b)
        }
        c.apply(void 0, arguments)
      };
      a["__" + b + "__"] = d;
      return{fn:d, scope:a}
    }
    a[b] = function() {
      c.apply(void 0, arguments)
    };
    return{fn:c, scope:void 0}
  }catch(e) {
    this.addInternalException(e)
  }
};
UserSnap.ConsoleRecorder.prototype._createConsoleHandler = function(a, b, c) {
  var d = this;
  return this._addInterceptor(console, a, function() {
    try {
      for(var a = [], f = 0;f < arguments.length;f++) {
        a.push(util.limitedClone(arguments[f], d.MAX_LOGOBJECT_SIZE))
      }
      "assert" === c && a[0] || d.addMessage("console", b, c, "" + a[0], a, util.printStackTrace({guess:!1}).slice(5))
    }catch(g) {
      d.addInternalException(g)
    }
  })
};
UserSnap.ConsoleRecorder.prototype._injectXHRInterceptor = function() {
  var a = this;
  if(!/msie 6/i.test(navigator.appVersion)) {
    var b = !1;
    try {
      Object.defineProperty({}, "checker", {}), b = !0
    }catch(c) {
    }
    var d = window.XMLHttpRequest, e = function() {
      var c = this, e = {};
      this._data = {url:"", method:"", requestHeaders:{}, body:null, stack:[], response:""};
      var h = function() {
        var a = function(a) {
          try {
            e[a] = c._request[a]
          }catch(b) {
            e[a] = null
          }
        };
        a("readyState");
        a("responseBody");
        a("responseText");
        a("responseXML");
        a("status");
        a("statusText");
        a("timeout")
      };
      this._request = new d;
      this.overrides = {open:function(a, b) {
        c._data.url = b;
        c._data.method = a;
        c._data.requestHeaders = {};
        c._data.body = null;
        c._data.stack = []
      }, setRequestHeader:function(a, b) {
        for(var d in c._data.requestHeaders) {
          if(a.toLowerCase() === d.toLowerCase()) {
            delete c._data.requestHeaders[d];
            break
          }
        }
        c._data.requestHeaders[a] = b
      }, send:function(a) {
        c._data.body = a;
        c._data.stack = util.printStackTrace().slice(5)
      }};
      this.listeners = {onreadystatechange:null};
      var j = function(b) {
        return function() {
          var d = Function.prototype.apply.call(c._request[b], c._request, Array.prototype.slice.call(arguments));
          if(c.overrides[b]) {
            try {
              c.overrides[b].apply(c, arguments)
            }catch(e) {
              a.addInternalException(e)
            }
          }
          return d
        }
      }, l = function(a) {
        return{get:function() {
          return void 0 !== c.listeners[a] ? c.listeners[a] : c._request[a]
        }, set:function(b) {
          void 0 !== c.listeners[a] ? c.listeners[a] = b : c._request[a] = b
        }}
      }, k;
      for(k in this._request) {
        "function" === typeof this._request[k] ? e[k] = j(k) : b && Object.defineProperty(e, k, l(k))
      }
      b || h();
      this._request.onreadystatechange = function(d) {
        b || h();
        b && c.listeners.onreadystatechange ? c.listeners.onreadystatechange.apply(c, arguments) : !b && e.onreadystatechange && e.onreadystatechange.apply(c, arguments);
        try {
          if(3 < c._request.readyState) {
            var j = {};
            try {
              for(var k = c._request.getAllResponseHeaders().split(/[\n\r]/), l = 0;l < k.length;l++) {
                var r, u;
                r = k[l].split(":");
                u = r.slice(1).join(":").replace(/^\s+|\s+$/g, "");
                r = r[0].replace(/^\s+|\s+$/g, "");
                "" !== r && (j[r] = u)
              }
            }catch(t) {
              j = {}
            }
            var q = c._request.status, v = c._request.statusText, w = "string" === typeof c._data.body ? c._data.body.slice(0, a.MAX_REQBODY_SIZE) : "", x = "string" === typeof c._request.responseText ? c._request.responseText.slice(0, a.MAX_RESPONSE_SIZE) : "";
            a.addMessage("network", 200 === c._request.status ? "info" : "error", "log", 0 === q ? "" : q + " " + v, {url:c._data.url, initiator:{url:"", lineNumber:0, stackTrace:[]}, requestMethod:c._data.method, requestHeaders:c._data.requestHeaders, requestBody:w, statusCode:q, statusText:v, responseText:x, responseHeaders:j}, c._data.stack)
          }
        }catch(y) {
          a.addInternalException(y)
        }
      };
      l = "open send abort getResponseHeader getAllResponseHeaders setRequestHeader".split(" ");
      for(k = 0;k < l.length;k++) {
        void 0 === e[l[k]] && (e[l[k]] = j(l[k]))
      }
      return e
    };
    e.UNSENT = 0;
    e.OPENED = 1;
    e.HEADERS_RECEIVED = 2;
    e.LOADING = 3;
    e.DONE = 4;
    window.XMLHttpRequest = e
  }
};
UserSnap.tools.Pen = function() {
  this._enabled = !1;
  this._paint = null;
  this._instance = UserSnap.getInstance();
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._toolkey = "pen";
  this._colorSet = ["#f1C40f", "#e74C3c", "#8e44ad", "#2ecc71", "#3498db"];
  this._currentColor = this._colorSet[0];
  this._currentStrokeWidth = 10;
  this._currentStrokeOpacity = 0.8;
  this._settingsDlg = {cl:null, sl:null};
  this._selectColor = "#2472a4";
  this._selectGlow = {width:3, color:this._selectColor};
  this._painting = !1;
  this._pathList = [];
  this._selection = {idx:-1, deleteBtn:null, box:null, boxHover:!1, boxBaseX:-1, boxBaseY:-1, boxglow:null, glow:null};
  this._pathHover = !1;
  this._lastPoint = {X:-10, Y:-10}
};
UserSnap.tools.Pen.prototype.initToolbox = function(a, b) {
  this._toolbox = a;
  var c = UserSnap.Guide.getInstance();
  a.listenEvent("initialized", function() {
    c.addStory(this._toolkey, a.win, {x:130, y:36 * (b + 1)}, "<h3>" + util.decEscUTF8(us.b_pen) + "</h3><p>" + util.decEscUTF8(us.g_pen0) + '</p><div class="img-base pen0"></div><p class="first">' + util.decEscUTF8(us.g_pen1) + '</p><div class="img-base pen1"></div><div class="img-base pen2"></div>')
  }, this)
};
UserSnap.tools.Pen.prototype.init = function(a) {
  this._paint = a;
  this._paint.listenEvent("mousedown", this._mousedown, this);
  this._paint.listenEvent("mouseup", this._mouseup, this);
  this._paint.listenEvent("mousemove", this._mousemove, this);
  this._paint.listenEvent("keydown", this._keydown, this);
  this._selMgr = a.getSelectionManager();
  var b = this;
  a = UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/img/Xbutton.png";
  UserSnap.Config.devDebug && (a = "img/Xbutton.png");
  this._selection.deleteBtn = this._paint.getRaphael().image(a, 0, 0, 19, 19);
  this._selection.deleteBtn.attr({opacity:0.4, cursor:"pointer", title:util.decEscUTF8(us.t_delete)});
  this._selection.deleteBtn.hover(function() {
    b._selection.deleteBtn.animate({opacity:0.7}, 200, "<>")
  }, function() {
    b._selection.deleteBtn.animate({opacity:0.4}, 200, "<>")
  });
  this._selection.deleteBtn.mousedown(function(a) {
    2 !== a.button && (b._delSelection.apply(b), util.stopPropagation(a))
  });
  this._selection.deleteBtn.hide()
};
UserSnap.tools.Pen.prototype.getUIConfig = function() {
  var a = this.MINI.EE, b = this.MINI, c = this;
  return{tooltip:util.decEscUTF8(us.t_pen), text:util.decEscUTF8(us.b_pen), icon:"draw", settings:function() {
    for(var d = [], e = [], f = null, g = null, h = function(a) {
      a = a.target || a.srcElement;
      var d = b.$(a), e = d.get("$backgroundColor");
      b.$(a.parentNode).select("li").set("-active");
      d.set("+active");
      c._currentColor = util.rgb2Hex(e);
      f.select("span").set("$backgroundColor", e);
      c._updateSelection.apply(c)
    }, j = function(a) {
      var d = a.target || a.srcElement, e = b.$(d);
      a = b.$(d);
      var f = d.parentNode;
      "li" === d.nodeName.toLowerCase() ? e = e.select("span") : (a = b.$(f), f = f.parentNode);
      d = e.get("$width", !0);
      b.$(f).select("li").set("-active");
      a.set("+active");
      c._currentStrokeWidth = d;
      c._updateSelection.apply(c)
    }, l = function(a) {
      b.$(a).on("click", h)
    }, k = function(a) {
      b.$(a).on("click", j)
    }, m = 0;m < c._colorSet.length;m++) {
      0 === m ? d.push(a("li", {$:"active", $backgroundColor:c._colorSet[m]}, l)) : d.push(a("li", {$backgroundColor:c._colorSet[m]}, l))
    }
    for(l = 0;4 > l;l++) {
      1 === l ? e.push(a("li", {$:"active"}, a("span", {$:"n" + (l + 1), $backgroundColor:c._currentColor}, k), k)) : e.push(a("li", {}, a("span", {$:"n" + (l + 1), $backgroundColor:c._currentColor}, k), k))
    }
    return a("div", {$:"us-widget-panel-tool-settings"}, [a("div", {$:"us-widget-panel-tool-sizeswitch"}, a("ul", {}, e, function(a) {
      f = b.$(a)
    })), a("div", {$:"us-widget-panel-tool-colorswitch"}, a("ul", {}, d, function(a) {
      g = b.$(a)
    }))], function() {
      c._settingsDlg = {cl:g, sl:f}
    })
  }}
};
UserSnap.tools.Pen.prototype._updateSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._pathList[this._selection.idx];
    a.raPath.attr({stroke:this._currentColor, "stroke-width":this._currentStrokeWidth});
    this._selection.glow.remove();
    this._selection.glow = a.raPath.glow(this._selectGlow)
  }
};
UserSnap.tools.Pen.prototype._setSettings = function(a, b) {
  var c = this.MINI;
  a = a || "#000000";
  b = b || 10;
  for(var d = -1, e = 0;e < this._colorSet.length;e++) {
    if(this._colorSet[e] === a) {
      d = e;
      break
    }
  }
  this._currentColor = -1 !== d ? this._colorSet[d] : a;
  this._settingsDlg.sl.select("span").set("$backgroundColor", this._currentColor);
  this._settingsDlg.cl.select("li").each(function(b, e) {
    b = c.$(b);
    -1 === d ? util.rgb2Hex(b.get("$backgroundColor")) === a ? b.set("+active") : b.set("-active") : d === e ? b.set("+active") : b.set("-active")
  });
  this._currentStrokeWidth = b;
  this._settingsDlg.sl.select("li").each(function(a) {
    a = c.$(a);
    a.select("span").get("$width", !0) === b ? a.set("+active") : a.set("-active")
  });
  this._updateSelection()
};
UserSnap.tools.Pen.prototype.isDirty = function() {
  return 0 < this.getToolData().paths.length
};
UserSnap.tools.Pen.prototype.isEnabled = function() {
  return this._enabled
};
UserSnap.tools.Pen.prototype.enable = function() {
  this._enabled = !0
};
UserSnap.tools.Pen.prototype.disable = function() {
  this._enabled = !1;
  this.resetSelection()
};
UserSnap.tools.Pen.prototype.resetSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._pathList[this._selection.idx];
    null !== a && null !== a.raPath && a.raPath.attr({cursor:"pointer"});
    this._selection.glow.remove();
    this._selection.box.remove();
    this._selection.selBox.remove();
    this._selection.boxglow.remove();
    this._selection.idx = -1;
    this._selection.glow = null;
    this._selection.boxglow = null;
    this._selection.box = null;
    this._selection.boxHover = !1;
    this._selection.deleteBtn.hide();
    this._selMgr.clearSelection()
  }
};
UserSnap.tools.Pen.prototype._selectPen = function(a, b) {
  this._selMgr.selectElement(this, a);
  this._selection.glow = a.raPath.glow(this._selectGlow);
  var c = a.raPath.getBBox();
  this._selection.box = this._paint.getRaphael().rect(c.x - 10, c.y - 10, c.width + 20, c.height + 20);
  this._selection.selBox = this._paint.getRaphael().rect(c.x - 10, c.y - 10, c.width + 20, c.height + 20);
  this._selection.boxBaseX = 0;
  this._selection.boxBaseY = 0;
  this._selection.box.attr({stroke:this._selectColor, cursor:"move", "stroke-width":1});
  this._selection.selBox.attr({stroke:"#FFFFFF", cursor:"move", "stroke-width":10, "stroke-opacity":0});
  this._setSettings(a.raPath.attr("stroke"), a.raPath.attr("stroke-width"));
  var d = this;
  this._selection.selBox.hover(function() {
    d._selection.boxHover = !0
  }, function() {
    d._selection.boxHover = !1
  });
  var e = function(a, b, c, e, f) {
    10 > b && (b = 10);
    a > d._paint._vp.width - 20 && (a -= c + 55);
    f.x = a;
    f.y = b;
    return f
  }, f = -1, g = -1, h = -1, j = -1;
  this._selection.selBox.drag(function(b, c, e, p, n, s) {
    b = Math.round(b);
    c = Math.round(c);
    Math.round(e);
    Math.round(p);
    0 === util.getWhich(n, d._sb.getWindow()) ? s.cancelIt = !0 : (a.baseX = f + b, a.baseY = g + c, d._selection.boxBaseX = h + b, d._selection.boxBaseY = j + c, a.raPath.transform("t" + (f + b) + "," + (g + c)), d._selection.box.transform("t" + (h + b) + "," + (j + c)), this.transform("t" + (h + b) + "," + (j + c)))
  }, function() {
    f = a.baseX;
    g = a.baseY;
    h = d._selection.boxBaseX;
    j = d._selection.boxBaseY;
    d._selection.deleteBtn.hide();
    d._selection.boxglow.remove();
    d._selection.glow.remove();
    d.fireEvent("startWorking", d._toolkey, a)
  }, function() {
    d.fireEvent("stopWorking", d._toolkey, a);
    d._selection.boxglow = d._selection.box.glow(d._selectGlow);
    d._selection.glow = a.raPath.glow(d._selectGlow);
    var b = a.raPath.getBBox();
    d._selection.deleteBtn.attr(e(b.x + b.width + 20, b.y - 10, b.width, b.height, {cursor:"pointer"}));
    d._selection.deleteBtn.show();
    d._selection.deleteBtn.toFront()
  });
  this._selection.boxglow = this._selection.box.glow(this._selectGlow);
  this._selection.deleteBtn.attr(e(c.x + c.width + 20, c.y - 10, c.width, c.height, {cursor:"pointer"}));
  this._selection.deleteBtn.show();
  this._selection.deleteBtn.toFront();
  this._selection.idx = b;
  a.raPath.attr({cursor:"move"})
};
UserSnap.tools.Pen.prototype._delSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._pathList[this._selection.idx];
    a.raPath.remove();
    null !== a.glow && a.glow.remove();
    this._pathList[this._selection.idx] = null;
    this.resetSelection();
    return!0
  }
  return!1
};
UserSnap.tools.Pen.prototype._nearToLastPoint = function(a, b, c) {
  var d = this._lastPoint.Y;
  return Math.sqrt(Math.pow(this._lastPoint.X - a, 2) + Math.pow(d - b, 2)) < c
};
UserSnap.tools.Pen.prototype._mousedown = function(a) {
  if(2 !== a.button && (this._selMgr.isDrawOpAllowed() && !this._selection.boxHover) && (this.resetSelection(), this._enabled && !this._painting)) {
    this._painting = !0;
    var b = Math.round(a.clientX), c = Math.round(a.clientY);
    this._lastPoint = {X:Math.round(a.clientX), Y:Math.round(a.clientY)};
    a = ["M" + b + "," + c];
    var d = Raphael.createUUID(), e = {oid:d, path:a, rawPath:[b, c], glow:null, baseX:0, baseY:0, raPath:this._paint.getRaphael().path(a.join(""))};
    this.fireEvent("startWorking", this._toolkey, e);
    var f = this._pathList.length, g = this, h = !1, j = -1, l = -1;
    e.raPath.drag(function(a, b, c, d, f, r) {
      a = Math.round(a);
      b = Math.round(b);
      Math.round(c);
      Math.round(d);
      0 === util.getWhich(f, g._sb.getWindow()) ? r.cancelIt = !0 : (h = !0, e.baseX = j + a, e.baseY = l + b, this.transform("t" + (j + a) + "," + (l + b)))
    }, function(a, b, c, f) {
      !g._selMgr.isElementSelected() || g._selMgr.getSelectedElement().oid !== d ? f.cancelIt = !0 : (g._selMgr.startDrag(), h = !1, j = e.baseX, l = e.baseY, null !== e.glow && (e.glow.remove(), e.glow = null), g.fireEvent("startWorking", g._toolkey, e))
    }, function() {
      g._selMgr.stopDrag();
      g.fireEvent("stopWorking", g._toolkey, e);
      h = !1
    });
    e.raPath.click(function() {
      g._selMgr.isElementSelected() || (g.resetSelection.apply(g), g._selectPen.apply(g, [e, f]))
    });
    e.raPath.hover(function() {
      !h && !g._painting && (e.glow = e.raPath.glow(g._selectGlow), g._pathHover = !0)
    }, function() {
      g._pathHover = !1;
      !h && null !== e.glow && (e.glow.remove(), e.glow = null)
    });
    e.raPath.attr({stroke:this._currentColor, "stroke-opacity":this._currentStrokeOpacity, "stroke-width":this._currentStrokeWidth, "stroke-linecap":"round", "stroke-linejoin":"round", cursor:"pointer"});
    this._pathList.push(e)
  }
};
UserSnap.tools.Pen.prototype._mouseup = function(a) {
  2 !== a.button && (this._enabled && this._painting) && (this._lastPoint = {X:Math.round(a.clientX), Y:Math.round(a.clientY)}, a = this._pathList[this._pathList.length - 1], this._painting = !1, this.fireEvent("stopWorking", this._toolkey, a), 1 >= a.path.length ? this._pathHover ? (a.raPath.remove(), this._pathList.splice(this._pathList.length - 1, 1)) : (a.path.push("L" + a.rawPath[0] + "," + a.rawPath[1]), a.rawPath.push(a.rawPath[0], a.rawPath[1]), a.raPath.attr({path:a.path.join("")}), this._selMgr.syncLayers([a.raPath], 
  "else")) : this._selMgr.syncLayers([a.raPath], "else"))
};
UserSnap.tools.Pen.prototype._mousemove = function(a) {
  if(this._enabled && this._painting) {
    var b = this._pathList[this._pathList.length - 1];
    if(0 === util.getWhich(a, this._sb.getWindow())) {
      this._painting = !1, this.fireEvent("stopWorking", this._toolkey, b)
    }else {
      var c = {X:Math.round(a.clientX), Y:Math.round(a.clientY)};
      5 > Math.abs(c.X - this._lastPoint.X) && 5 > Math.abs(c.Y - this._lastPoint.Y) || (this._lastPoint = c, util.isCtrlKey(a) && 1 < b.path.length ? (b.path.splice(b.path.length - 1, 1, "L" + c.X + "," + c.Y), b.rawPath.splice(b.rawPath.length - 1, 2, c.X, c.Y)) : (b.path.push("L" + c.X + "," + c.Y), b.rawPath.push(c.X, c.Y)), b.raPath.attr({path:b.path.join("")}))
    }
  }
};
UserSnap.tools.Pen.prototype._keydown = function(a) {
  if(27 === a.keyCode) {
    if(this._painting) {
      return this._painting = !1, a = this._pathList[this._pathList.length - 1], a.raPath.remove(), this._pathList.splice(this._pathList.length - 1, 1), this.fireEvent("stopWorking", this._toolkey, a), !1
    }
    if(0 <= this._selection.idx) {
      return this.resetSelection(), !1
    }
  }else {
    if(46 === a.keyCode || 8 === a.keyCode) {
      if(a = this._sb.getDocument().activeElement.nodeName.toLowerCase(), "textarea" !== a && "input" !== a && this._delSelection()) {
        return!1
      }
    }
  }
};
UserSnap.tools.Pen.prototype.getToolData = function() {
  for(var a = [], b = 0;b < this._pathList.length;b++) {
    void 0 !== this._pathList[b] && null !== this._pathList[b] && a.push(this._pathList[b].rawPath)
  }
  return{paths:a}
};
UserSnap.tools.Pen.prototype.destroy = function() {
};
UserSnap.tools.Note = function() {
  this._enabled = !1;
  this._paint = null;
  this._instance = UserSnap.getInstance();
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._toolkey = "note";
  this._selectColor = "#2472a4";
  this._selectStrokeWidth = 2;
  this._selectGlow = {width:3, color:this._selectColor};
  this._settingsDlg = {cl:null};
  this._colorSet = ["#ffff95", "#ffa9a1", "#d8a4f4", "#9bffc1", "#9ee1ff"];
  this._currentColor = this._colorSet[0];
  this._selection = {obj:null, deleteBtn:null, glow:null};
  this._noteList = [];
  this._editMode = this._forcePostEdit = this._hover = !1;
  this._editorInput = this._editorObj = this._editor = null;
  this._lastTxt = "";
  this._creation = !1
};
UserSnap.tools.Note.prototype.initToolbox = function(a, b) {
  this._toolbox = a;
  var c = UserSnap.Guide.getInstance();
  a.listenEvent("initialized", function() {
    c.addStory(this._toolkey, a.win, {x:130, y:36 * (b + 1)}, "<h3>" + util.decEscUTF8(us.b_note) + "</h3><p>" + util.decEscUTF8(us.g_note0) + '</p><div class="img-base note0"></div><p class="first">' + util.decEscUTF8(us.g_note1) + '</p><div class="img-base note1"></div>')
  }, this)
};
UserSnap.tools.Note.prototype.init = function(a) {
  this._paint = a;
  this._paint.listenEvent("mousedown", this._mousedown, this);
  this._paint.listenEvent("mouseup", this._mouseup, this);
  this._paint.listenEvent("keydown", this._keydown, this);
  this._selMgr = a.getSelectionManager();
  var b = this;
  this._editor = this.MINI.EE("div", {$:"us-note-editor"}, [this.MINI.EE("textarea")], function(a) {
    b._editor = a;
    b._editorInput = b._editor.select("textarea");
    b._editorInput.on("blur", function() {
      b._drawNoteText.apply(b)
    });
    b._editorInput.on("keyup", function(a) {
      if(8 === a.keyCode && "" === b._editorInput[0].value && "" === b._lastTxt) {
        for(a = 0;a < b._noteList.length;a++) {
          if(b._noteList[a] === b._editorObj) {
            b._editorObj.raSet.remove();
            b._noteList[a] = null;
            break
          }
        }
        b._editorObj = null;
        b._editor.set({$display:"none"});
        b._editMode = !1;
        b.resetSelection()
      }
      b._lastTxt = b._editorInput[0].value;
      return!0
    })
  });
  this.MINI.$(this._sb.getDocument().body).add(this._editor);
  a = UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/img/Xbutton.png";
  UserSnap.Config.devDebug && (a = "img/Xbutton.png");
  this._selection.deleteBtn = this._paint.getRaphael().image(a, 0, 0, 19, 19);
  this._selection.deleteBtn.attr({opacity:0.4, cursor:"pointer", title:util.decEscUTF8(us.t_delete)});
  this._selection.deleteBtn.hover(function() {
    b._selection.deleteBtn.animate({opacity:0.7}, 200, "<>")
  }, function() {
    b._selection.deleteBtn.animate({opacity:0.4}, 200, "<>")
  });
  this._selection.deleteBtn.mousedown(function(a) {
    2 !== a.button && (window.setTimeout(function() {
      b._delSelection.apply(b)
    }, 1), util.stopPropagation(a))
  });
  this._selection.deleteBtn.hide()
};
UserSnap.tools.Note.prototype.getUIConfig = function() {
  var a = this.MINI.EE, b = this.MINI, c = this;
  return{tooltip:util.decEscUTF8(us.t_note), text:util.decEscUTF8(us.b_note), icon:"text", settings:function() {
    for(var d = [], e = function(a) {
      a = a.target || a.srcElement;
      var d = b.$(a), e = d.get("$backgroundColor");
      b.$(a.parentNode).select("li").set("-active");
      d.set("+active");
      c._currentColor = util.rgb2Hex(e);
      c._updateSelection.apply(c)
    }, f = function(a) {
      b.$(a).on("mousedown", e)
    }, g = 0;g < c._colorSet.length;g++) {
      0 === g ? d.push(a("li", {$:"active", $backgroundColor:c._colorSet[g]}, f)) : d.push(a("li", {$backgroundColor:c._colorSet[g]}, f))
    }
    return a("div", {$:"us-widget-panel-tool-settings"}, [a("div", {$:"us-widget-panel-tool-colorswitch"}, a("ul", {}, d, function(a) {
      c._settingsDlg = {cl:a}
    }))])
  }}
};
UserSnap.tools.Note.prototype._updateSelection = function() {
  null !== this._selection.obj && this._selection.obj.raRect.attr({fill:this._currentColor})
};
UserSnap.tools.Note.prototype._setSettings = function(a) {
  a = a || "#ffff95";
  var b = this.MINI;
  this._currentColor = a;
  this._settingsDlg.cl.select("li").each(function(c) {
    c = b.$(c);
    util.rgb2Hex(c.get("$backgroundColor")) === a ? c.set("+active") : c.set("-active")
  });
  this._updateSelection()
};
UserSnap.tools.Note.prototype.isDirty = function() {
  return 0 < this.getToolData()[this._toolkey].length
};
UserSnap.tools.Note.prototype.isEnabled = function() {
  return this._enabled
};
UserSnap.tools.Note.prototype.enable = function() {
  this._enabled = !0;
  this.resetSelection()
};
UserSnap.tools.Note.prototype.disable = function() {
  this._enabled = !1;
  this._editMode && this._drawNoteText();
  this.resetSelection()
};
UserSnap.tools.Note.prototype.resetSelection = function() {
  this._editMode && this._drawNoteText();
  null !== this._selection.obj && (this._selection.obj.raRect.attr({stroke:"#000000", "stroke-opacity":0.5, cursor:"pointer"}), this._selection.obj = null, this._selection.glow.remove(), this._selection.glow = null, this._selection.deleteBtn.hide(), this._selMgr.clearSelection())
};
UserSnap.tools.Note.prototype._selectNote = function(a) {
  null !== this._selection.obj && (this._editMode && this._drawNoteText(), this.resetSelection());
  this._selMgr.selectElement(this, a);
  var b = this;
  this._setSettings(a.raRect.attr("fill"));
  this._selection.obj = a;
  this._selection.glow = a.raRect.glow(this._selectGlow);
  this._selection.deleteBtn.show();
  this._selection.deleteBtn.attr(function(a, d, e, f, g) {
    10 > d && (d = 10);
    a > b._paint._vp.width - 20 && (a -= e + 35);
    g.x = a;
    g.y = d;
    return g
  }(a.raRect.attr("x") + a.raRect.attr("width") + 10, a.raRect.attr("y"), a.raRect.attr("width"), 0, {cursor:"pointer"}));
  this._selection.deleteBtn.toFront();
  a.raRect.attr({cursor:"move", stroke:this._selectColor, "stroke-width":this._selectStrokeWidth});
  this._forcePostEdit && (this._forcePostEdit = !1, this._openNoteText(a))
};
UserSnap.tools.Note.prototype._delSelection = function() {
  if(null !== this._selection.obj) {
    for(var a = this._selection.obj, b = 0;b < this._noteList.length;b++) {
      if(this._noteList[b] === a) {
        a.raSet.remove();
        this._noteList[b] = null;
        break
      }
    }
    this.resetSelection();
    return!0
  }
  return!1
};
UserSnap.tools.Note.prototype._drawNoteText = function() {
  if(null !== this._editorObj) {
    var a = this._editorInput[0].value, b = 0;
    this._editorObj.hover && (this._forcePostEdit = !0);
    if("" === a && !this._editorObj.hover) {
      for(b = 0;b < this._noteList.length;b++) {
        if(this._noteList[b] === this._editorObj) {
          this._editorObj.raSet.remove();
          this._noteList[b] = null;
          break
        }
      }
      this._editorObj = null;
      this._editor.set({$display:"none"});
      this._editMode = !1;
      this.resetSelection()
    }else {
      this._editorObj.text = a;
      for(var c = this._editorObj.raText, b = "";!(b = a.replace(/\n\n/, "\n\u200b\n"), a === b);) {
        a = b
      }
      for(var a = b.split(" "), d = a.length, e = "", f = "", g = this._editorObj.raRect.attr("width") - 20, h = function(a, b, c) {
        var d = a[b], e = d.length;
        d.length > Math.ceil(50) && (d = d.substr(0, Math.ceil(50)));
        var f = function() {
          c.attr("text", d);
          c.getBBox().width > g && (d = d.substr(0, d.length - 1), f())
        };
        f();
        e = a[b].substr(d.length, e);
        a[b] = a[b].substr(0, d.length);
        a.splice(b + 1, 0, e)
      }, b = 0;b < d;b++) {
        20 < a[b].length && (c.attr("text", a[b]), c.getBBox().width > g && (h(a, b, c), d++)), f = e, e = e + " " + a[b], c.attr("text", e), c.getBBox().width > g && (e = f + "\n" + a[b])
      }
      c.attr("text", util.trim(e));
      c.transform("t10," + (10 + c.getBBox().height / 2));
      this._editorObj.raText.show();
      this._editor.set({$display:"none"});
      this._editMode = !1;
      this.fireEvent("stopWorking", this._toolkey, this._editorObj, "edit")
    }
  }
};
UserSnap.tools.Note.prototype._openNoteText = function(a, b) {
  this._editMode && this._drawNoteText();
  this._editMode = !0;
  this._editorObj = a;
  var c = this._editorObj.raRect.attr("x"), d = this._editorObj.raRect.attr("y");
  this._editor.set({$display:"block", $left:c + "px", $top:d + "px"});
  this._editorObj.raText.hide();
  this._lastTxt = this._editorInput[0].value = a.text;
  if(!0 === b) {
    var e = this;
    window.setTimeout(function() {
      e._editorInput[0].focus();
      if(util.isIE7() || util.isIE8()) {
        var b = e._editorInput[0].createTextRange();
        b.collapse(!0);
        b.moveEnd("character", a.text.length);
        b.moveStart("character", a.text.length);
        b.select()
      }else {
        e._editorInput[0].selectionStart = a.text.length
      }
      e.fireEvent("startWorking", e._toolkey, a, "edit")
    }, 200)
  }else {
    this._editorInput[0].focus(), util.isIE7() || util.isIE8() ? (c = this._editorInput[0].createTextRange(), c.collapse(!0), c.moveEnd("character", a.text.length), c.moveStart("character", a.text.length), c.select()) : this._editorInput[0].selectionStart = a.text.length, this.fireEvent("startWorking", this._toolkey, a, "edit")
  }
};
UserSnap.tools.Note.prototype._mousedown = function(a) {
  if(2 !== a.button && this._selMgr.isDrawOpAllowed() && this._enabled && !this._hover) {
    if(null !== this._selection.obj) {
      this.resetSelection()
    }else {
      a = {X:Math.round(a.clientX), Y:Math.round(a.clientY)};
      var b = this, c = function(a) {
        var c = a.X;
        a = a.Y;
        10 > c && (c = 10);
        10 > a && (a = 10);
        c > b._paint._vp.width - 260 && (c = b._paint._vp.width - 260);
        a > b._paint._vp.height - 228 && (a = b._paint._vp.height - 228);
        return{X:c, Y:a}
      };
      a = c(a);
      this._creation = !0;
      var d = this._paint.getRaphael().set(), e = Raphael.createUUID(), f = {oid:e, x:a.X + 10, y:a.Y + 10, text:"", width:230, hover:!1, height:208, raSet:d, raRect:this._paint.getRaphael().rect(a.X + 10, a.Y + 10, 230, 208), raText:this._paint.getRaphael().text(a.X + 10, a.Y + 10, "")};
      this.fireEvent("startWorking", this._toolkey, f);
      this.fireEvent("stopWorking", this._toolkey, f);
      d.push(f.raRect, f.raText);
      f.raRect.hover(function() {
        f.hover = !0;
        b._hover = !0
      }, function() {
        f.hover = !1;
        b._hover = !1
      });
      f.raText.hover(function() {
        f.hover = !0;
        b._hover = !0
      }, function() {
        f.hover = !1;
        b._hover = !1
      });
      f.raRect.attr({fill:this._currentColor, stroke:"none", cursor:"pointer"});
      f.raText.attr({cursor:"text", "font-family":"Roboto, sans-serif", "font-size":"13px", "text-anchor":"start"});
      var g = -1, h = -1;
      f.raRect.drag(function(a, d, e, m, p, n) {
        a = Math.round(a);
        d = Math.round(d);
        Math.round(e);
        Math.round(m);
        0 === util.getWhich(p, b._sb.getWindow()) ? n.cancelIt = !0 : (a = c({X:g + a, Y:h + d}), f.x = a.X, f.y = a.Y, f.raSet.attr({x:a.X, y:a.Y}))
      }, function(a, c, d, m) {
        b._selMgr.isElementSelected() ? b._selMgr.getSelectedElement().oid !== e ? (m.cancelIt = !0, b._hover = !1) : (b._selMgr.startDrag(), null !== b._selection.obj && (b._selection.glow.hide(), b._selection.deleteBtn.hide()), b._editMode && b._drawNoteText.apply(b), g = this.attr("x"), h = this.attr("y"), b.fireEvent("startWorking", b._toolkey, f), f.raRect.attr({cursor:"move"})) : m.cancelIt = !0
      }, function() {
        null !== b._selection.obj && (b._selection.glow.show(), b._selection.deleteBtn.show(), b._selection.deleteBtn.toFront());
        b._selMgr.stopDrag();
        b.fireEvent("stopWorking", b._toolkey, f);
        h = g = -1
      });
      f.raRect.click(function() {
        b._selMgr.isElementSelected() || b._selectNote.apply(b, [f])
      });
      f.raRect.dblclick(function() {
        b._selectNote.apply(b, [f]);
        b._openNoteText.apply(b, [f])
      });
      f.raText.mousedown(function() {
      });
      f.raText.click(function() {
        b._selectNote.apply(b, [f]);
        b._openNoteText.apply(b, [f])
      });
      this._noteList.push(f);
      f.raRect.hide();
      f.raText.hide()
    }
  }
};
UserSnap.tools.Note.prototype._mouseup = function(a) {
  2 !== a.button && (this._enabled && !this._hover && this._creation) && (a = this._noteList[this._noteList.length - 1], null !== a && (a.raRect.show(), a.raText.show(), this._selectNote(a), this._openNoteText(a, !0), this._creation = !1, this._selMgr.syncLayers([a.raRect, a.raText], "else")))
};
UserSnap.tools.Note.prototype._keydown = function(a) {
  var b = null;
  if(27 === a.keyCode) {
    if(this._editMode) {
      return this._editorInput[0].blur(), !1
    }
    if(null !== this._selection.obj) {
      return this.resetSelection(), !1
    }
  }else {
    if(46 === a.keyCode || 8 === a.keyCode) {
      if(b = this._sb.getDocument().activeElement.nodeName.toLowerCase(), !("textarea" === b || "input" === b)) {
        if(this._editMode) {
          return!0
        }
        if(null !== this._selection.obj) {
          return this._delSelection(), !1
        }
      }
    }else {
      if(null !== this._selection.obj && !this._editMode && (b = this._sb.getDocument().activeElement.nodeName.toLowerCase(), "textarea" !== b && "input" !== b)) {
        return this._openNoteText(this._selection.obj), !1
      }
    }
  }
};
UserSnap.tools.Note.prototype.getToolData = function() {
  for(var a = [], b = null, c = 0;c < this._noteList.length;c++) {
    b = this._noteList[c], void 0 === b || null === b || a.push([b.x, b.y, b.text])
  }
  b = {};
  b[this._toolkey] = a;
  return b
};
UserSnap.tools.Note.prototype.destroy = function() {
};
UserSnap.tools.Highlight = function() {
  this._enabled = !1;
  this._paint = null;
  this._instance = UserSnap.getInstance();
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._toolkey = "highlight";
  this._selectColor = "#0096fd";
  this._selectGlow = {width:2, opacity:0.2, color:this._selectColor};
  this._painting = !1;
  this._highlightList = [];
  this._selection = {idx:-1, deleteBtn:null, glow:null};
  this._lastPoint = {X:-10, Y:-10};
  this._hover = !1
};
UserSnap.tools.Highlight.prototype.initToolbox = function(a, b) {
  this._toolbox = a;
  var c = UserSnap.Guide.getInstance();
  a.listenEvent("initialized", function() {
    c.addStory(this._toolkey, a.win, {x:130, y:36 * (b + 1)}, "<h3>" + util.decEscUTF8(us.b_highlight) + "</h3><p>" + util.decEscUTF8(us.g_highlight0) + '</p><div class="img-base highlight"></div>')
  }, this)
};
UserSnap.tools.Highlight.prototype.init = function(a) {
  this._paint = a;
  this._paint.listenEvent("mousedown", this._mousedown, this);
  this._paint.listenEvent("mouseup", this._mouseup, this);
  this._paint.listenEvent("mousemove", this._mousemove, this);
  this._paint.listenEvent("keydown", this._keydown, this);
  this._selMgr = a.getSelectionManager();
  var b = this;
  a = UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/img/Xbutton.png";
  UserSnap.Config.devDebug && (a = "img/Xbutton.png");
  this._selection.deleteBtn = this._paint.getRaphael().image(a, 0, 0, 19, 19);
  this._selection.deleteBtn.attr({opacity:0.4, cursor:"pointer", title:util.decEscUTF8(us.t_delete)});
  this._selection.deleteBtn.hover(function() {
    b._selection.deleteBtn.animate({opacity:0.7}, 200, "<>")
  }, function() {
    b._selection.deleteBtn.animate({opacity:0.4}, 200, "<>")
  });
  this._selection.deleteBtn.mousedown(function(a) {
    2 !== a.button && (b._delSelection.apply(b), util.stopPropagation(a))
  });
  this._selection.deleteBtn.hide()
};
UserSnap.tools.Highlight.prototype.isDirty = function() {
  return 0 < this.getToolData()[this._toolkey].length
};
UserSnap.tools.Highlight.prototype.getUIConfig = function() {
  return{tooltip:util.decEscUTF8(us.t_highlight), text:util.decEscUTF8(us.b_highlight), icon:this._toolkey}
};
UserSnap.tools.Highlight.prototype.isEnabled = function() {
  return this._enabled
};
UserSnap.tools.Highlight.prototype.enable = function() {
  this._enabled = !0
};
UserSnap.tools.Highlight.prototype.disable = function() {
  this._enabled = !1;
  this.resetSelection()
};
UserSnap.tools.Highlight.prototype.resetSelection = function() {
  0 <= this._selection.idx && (null !== this._highlightList[this._selection.idx] && this._highlightList[this._selection.idx].raRect.attr({stroke:"none"}), this._selection.glow.remove(), this._selection.glow = null, this._selection.idx = -1, this._selection.deleteBtn.hide(), this._selMgr.clearSelection())
};
UserSnap.tools.Highlight.prototype._selectHighlight = function(a, b) {
  this._selMgr.selectElement(this, a);
  this._selection.glow = a.raRect.glow(this._selectGlow);
  a.raRect.attr({stroke:this._selectColor});
  var c = this;
  this._selection.deleteBtn.attr(function(a, b, f, g, h) {
    10 > b && (b = 10);
    a > c._paint._vp.width - 20 && (a -= f + 35);
    h.x = a;
    h.y = b;
    return h
  }(a.raRect.attr("x") + a.raRect.attr("width") + 10, a.raRect.attr("y"), a.raRect.attr("width"), 0, {cursor:"pointer"}));
  this._selection.deleteBtn.show();
  this._selection.deleteBtn.toFront();
  this._selection.idx = b
};
UserSnap.tools.Highlight.prototype._delSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._highlightList[this._selection.idx];
    a.raRect.remove();
    a.boRect.remove();
    null !== a.glow && (a.glow.remove(), a.glow = null);
    this._paint.delGrayCutArea(a.highlighterIdx);
    this._highlightList[this._selection.idx] = null;
    this.resetSelection();
    return!0
  }
  return!1
};
UserSnap.tools.Highlight.prototype._prepreHighlight = function(a) {
  a.boRect = this._paint.getRaphael().rect(a.x, a.y, 0, 0);
  a.raRect = this._paint.getRaphael().rect(a.x, a.y, 0, 0);
  var b = !1, c = this._highlightList.length - 1, d = this, e = -1, f = -1;
  a.boRect.drag(function(c, h, j, l, k, m) {
    c = Math.round(c);
    h = Math.round(h);
    Math.round(j);
    Math.round(l);
    0 === util.getWhich(k, d._sb.getWindow()) ? m.cancelIt = !0 : (b = !0, null !== a.glow && (a.glow.remove(), a.glow = null), -1 !== a.highlighterIdx && (d._paint.delGrayCutArea(a.highlighterIdx), a.highlighterIdx = -1), a.raRect.attr({x:e + c, y:f + h, stroke:d._selectColor}), a.boRect.attr({x:e + c, y:f + h}), a.x = e + c, a.y = f + h)
  }, function() {
    d._selMgr.startDrag();
    b = !1;
    e = a.raRect.attr("x");
    f = a.raRect.attr("y");
    a.raRect.attr({stroke:d._selectColor});
    d.fireEvent("startWorking", d._toolkey, a)
  }, function() {
    b = !1;
    f = e = -1;
    d._selMgr.stopDrag();
    d.fireEvent("stopWorking", d._toolkey, a);
    -1 === a.highlighterIdx && (a.highlighterIdx = d._paint.addGrayCutArea(a.x, a.y, a.x + a.width, a.y + a.height))
  });
  a.boRect.click(function() {
    !b && !d._selMgr.isElementSelected() && (d.resetSelection.apply(d), d._selectHighlight.apply(d, [a, c]))
  });
  a.boRect.hover(function() {
    b || (d._hover = !0, d._painting || (a.glow = a.raRect.glow(d._selectGlow)))
  }, function() {
    b || (d._hover = !1, null !== a.glow && (a.glow.remove(), a.glow = null))
  });
  a.boRect.attr({stroke:"#FFFFFF", "stroke-opacity":0, "stroke-width":10, cursor:"move"});
  a.raRect.attr({stroke:this._selectColor, "stroke-width":1})
};
UserSnap.tools.Highlight.prototype._mousedown = function(a) {
  if(this._selMgr.isDrawOpAllowed() && (this.resetSelection(), this._enabled && !this._painting && !this._hover)) {
    this._painting = !0;
    var b = Math.round(a.clientX);
    a = Math.round(a.clientY);
    b = {glow:null, x:b, y:a, width:0, highlighterIdx:-1, height:0, boRect:null, raRect:null};
    this.fireEvent("startWorking", this._toolkey, b);
    this._highlightList.push(b)
  }
};
UserSnap.tools.Highlight.prototype._mouseup = function() {
  if(this._enabled && this._painting) {
    this._painting = !1;
    var a = this._highlightList[this._highlightList.length - 1];
    this.fireEvent("stopWorking", this._toolkey, a);
    5 > a.width ? (null !== a.boRect && (a.raRect.remove(), a.boRect.remove()), this._highlightList.splice(this._highlightList.length - 1, 1)) : (a.x = a.raRect.attr("x"), a.y = a.raRect.attr("y"), a.raRect.attr({stroke:"none"}), a.boRect.toBack(), a.raRect.toBack(), a.highlighterIdx = this._paint.addGrayCutArea(a.x, a.y, a.x + a.width, a.y + a.height), this._selMgr.syncLayers([a.raRect, a.boRect], "else"), this._selectHighlight(a, this._highlightList.length - 1))
  }
};
UserSnap.tools.Highlight.prototype._mousemove = function(a) {
  if(this._enabled) {
    if(0 === util.getWhich(a, this._sb.getWindow())) {
      this._mouseup(a)
    }else {
      if(this._painting) {
        var b = {X:Math.round(a.clientX), Y:Math.round(a.clientY)};
        if(!(5 > Math.abs(b.X - this._lastPoint.X) && 5 > Math.abs(b.Y - this._lastPoint.Y))) {
          this._lastPoint = b;
          a = this._highlightList[this._highlightList.length - 1];
          var c;
          null === a.boRect && this._prepreHighlight(a);
          0 > b.X - a.x ? (a.width = Math.abs(b.X - a.x), c = b.X) : (a.width = b.X - a.x, c = a.x);
          0 > b.Y - a.y ? (a.height = Math.abs(b.Y - a.y), b = b.Y) : (a.height = b.Y - a.y, b = a.y);
          a.raRect.attr({x:c, y:b, width:a.width, height:a.height});
          a.boRect.attr({x:c, y:b, width:a.width, height:a.height})
        }
      }
    }
  }
};
UserSnap.tools.Highlight.prototype._keydown = function(a) {
  if(27 === a.keyCode) {
    if(this._painting) {
      return this._painting = !1, this._highlightList[this._highlightList.length - 1].raRect.remove(), this._highlightList.splice(this._highlightList.length - 1, 1), this.fireEvent("stopWorking", this._toolkey), !1
    }
    if(0 <= this._selection.idx) {
      return this.resetSelection(), !1
    }
  }else {
    if(46 === a.keyCode || 8 === a.keyCode) {
      if(a = this._sb.getDocument().activeElement.nodeName.toLowerCase(), "textarea" !== a && "input" !== a && this._delSelection()) {
        return!1
      }
    }
  }
};
UserSnap.tools.Highlight.prototype.getToolData = function() {
  for(var a = [], b = null, c = 0;c < this._highlightList.length;c++) {
    void 0 !== this._highlightList[c] && null !== this._highlightList[c] && (b = this._highlightList[c], a.push([[b.x, b.y], [b.x + b.width, b.y + b.height]]))
  }
  b = {};
  b[this._toolkey] = a;
  return b
};
UserSnap.tools.Highlight.prototype.destroy = function() {
};
UserSnap.tools.Blackout = function() {
  this._enabled = !1;
  this._paint = null;
  this._instance = UserSnap.getInstance();
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._toolkey = "blackout";
  this._selectColor = "#0096fd";
  this._selectGlow = {width:2, opacity:0.2, color:this._selectColor};
  this._painting = !1;
  this._blackoutList = [];
  this._selection = {idx:-1, deleteBtn:null, glow:null};
  this._lastPoint = {X:-10, Y:-10};
  this._hover = !1
};
UserSnap.tools.Blackout.prototype.initToolbox = function(a, b) {
  this._toolbox = a;
  var c = UserSnap.Guide.getInstance();
  a.listenEvent("initialized", function() {
    c.addStory(this._toolkey, a.win, {x:130, y:36 * (b + 1)}, "<h3>" + util.decEscUTF8(us.b_blackout) + "</h3><p>" + util.decEscUTF8(us.g_blackout0) + '</p><div class="img-base blackout"></div>')
  }, this)
};
UserSnap.tools.Blackout.prototype.init = function(a) {
  this._paint = a;
  this._paint.listenEvent("mousedown", this._mousedown, this);
  this._paint.listenEvent("mouseup", this._mouseup, this);
  this._paint.listenEvent("mousemove", this._mousemove, this);
  this._paint.listenEvent("keydown", this._keydown, this);
  this._selMgr = a.getSelectionManager();
  var b = this;
  a = UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/img/Xbutton.png";
  UserSnap.Config.devDebug && (a = "img/Xbutton.png");
  this._selection.deleteBtn = this._paint.getRaphael().image(a, 0, 0, 19, 19);
  this._selection.deleteBtn.attr({opacity:0.4, cursor:"pointer", title:util.decEscUTF8(us.t_delete)});
  this._selection.deleteBtn.hover(function() {
    b._selection.deleteBtn.animate({opacity:0.7}, 200, "<>")
  }, function() {
    b._selection.deleteBtn.animate({opacity:0.4}, 200, "<>")
  });
  this._selection.deleteBtn.mousedown(function(a) {
    2 !== a.button && (b._delSelection.apply(b), util.stopPropagation(a))
  });
  this._selection.deleteBtn.hide()
};
UserSnap.tools.Blackout.prototype.isDirty = function() {
  return 0 < this.getToolData()[this._toolkey].length
};
UserSnap.tools.Blackout.prototype.getUIConfig = function() {
  return{tooltip:util.decEscUTF8(us.t_blackout), text:util.decEscUTF8(us.b_blackout), icon:this._toolkey}
};
UserSnap.tools.Blackout.prototype.isEnabled = function() {
  return this._enabled
};
UserSnap.tools.Blackout.prototype.enable = function() {
  this._enabled = !0
};
UserSnap.tools.Blackout.prototype.disable = function() {
  this._enabled = !1;
  this.resetSelection()
};
UserSnap.tools.Blackout.prototype.resetSelection = function() {
  0 <= this._selection.idx && (null !== this._blackoutList[this._selection.idx] && this._blackoutList[this._selection.idx].raRect.attr({stroke:"none", cursor:"pointer"}), this._selection.glow.remove(), this._selection.idx = -1, this._selection.glow = null, this._selection.deleteBtn.hide(), this._selMgr.clearSelection())
};
UserSnap.tools.Blackout.prototype._selectBlackout = function(a, b) {
  this._selMgr.selectElement(this, a);
  this._selection.glow = a.raRect.glow(this._selectGlow);
  a.raRect.attr({stroke:this._selectColor, cursor:"move"});
  var c = this;
  this._selection.deleteBtn.attr(function(a, b, f, g, h) {
    10 > b && (b = 10);
    a > c._paint._vp.width - 20 && (a -= f + 35);
    h.x = a;
    h.y = b;
    return h
  }(a.raRect.attr("x") + a.raRect.attr("width") + 10, a.raRect.attr("y"), a.raRect.attr("width"), 0, {cursor:"pointer"}));
  this._selection.deleteBtn.show();
  this._selection.deleteBtn.toFront();
  this._selection.idx = b
};
UserSnap.tools.Blackout.prototype._delSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._blackoutList[this._selection.idx];
    a.raRect.remove();
    null !== a.glow && a.glow.remove();
    this._paint.delGrayCutArea(a.highlighterIdx);
    this._blackoutList[this._selection.idx] = null;
    this.resetSelection();
    return!0
  }
  return!1
};
UserSnap.tools.Blackout.prototype._prepreBlackout = function(a) {
  a.raRect = this._paint.getRaphael().rect(a.x, a.y, 0, 0);
  var b = !1, c = this._blackoutList.length - 1, d = -1, e = -1, f = this, g = a.oid;
  a.raRect.drag(function(c, g, l, k, m, p) {
    c = Math.round(c);
    g = Math.round(g);
    Math.round(l);
    Math.round(k);
    0 === util.getWhich(m, f._sb.getWindow()) ? p.cancelIt = !0 : (b = !0, null !== a.glow && (a.glow.remove(), a.glow = null), this.attr({x:d + c, y:e + g, stroke:f._selectColor}), a.x = d + c, a.y = e + g)
  }, function(c, j, l, k) {
    !f._selMgr.isElementSelected() || f._selMgr.getSelectedElement().oid !== g ? k.cancelIt = !0 : (f._selMgr.startDrag(), b = !1, d = this.attr("x"), e = this.attr("y"), a.raRect.attr({stroke:f._selectColor, opacity:0.5}), f.fireEvent("startWorking", f._toolkey, a))
  }, function() {
    b = !1;
    e = d = -1;
    f._selMgr.stopDrag();
    f.fireEvent("stopWorking", f._toolkey, a);
    a.raRect.attr({opacity:1})
  });
  a.raRect.click(function() {
    !b && !f._selMgr.isElementSelected() && (f.resetSelection.apply(f), f._selectBlackout.apply(f, [a, c]))
  });
  a.raRect.hover(function() {
    b || (f._hover = !0, f._painting || (a.glow = a.raRect.glow(f._selectGlow)))
  }, function() {
    b || (f._hover = !1, null !== a.glow && (a.glow.remove(), a.glow = null))
  });
  a.raRect.attr({stroke:this._selectColor, fill:"#000000", "stroke-width":1, cursor:"pointer"})
};
UserSnap.tools.Blackout.prototype._mousedown = function(a) {
  if(this._selMgr.isDrawOpAllowed() && (this.resetSelection(), this._enabled && !this._painting && !this._hover)) {
    this._painting = !0;
    var b = Math.round(a.clientX);
    a = Math.round(a.clientY);
    b = {oid:Raphael.createUUID(), glow:null, x:b, y:a, width:0, height:0, raRect:null};
    this.fireEvent("startWorking", this._toolkey, b);
    this._blackoutList.push(b)
  }
};
UserSnap.tools.Blackout.prototype._mouseup = function() {
  if(this._enabled && this._painting) {
    this._painting = !1;
    var a = this._blackoutList[this._blackoutList.length - 1];
    this.fireEvent("stopWorking", this._toolkey, a);
    5 > a.width ? (null !== a.raRect && a.raRect.remove(), this._blackoutList.splice(this._blackoutList.length - 1, 1)) : (a.x = a.raRect.attr("x"), a.y = a.raRect.attr("y"), a.raRect.attr({stroke:"none"}), this._selMgr.syncLayers([a.raRect], "else"), this._selectBlackout(a, this._blackoutList.length - 1))
  }
};
UserSnap.tools.Blackout.prototype._mousemove = function(a) {
  if(this._enabled) {
    if(0 === util.getWhich(a, this._sb.getWindow())) {
      this._mouseup(a)
    }else {
      if(this._painting) {
        var b = {X:Math.round(a.clientX), Y:Math.round(a.clientY)};
        if(!(5 > Math.abs(b.X - this._lastPoint.X) && 5 > Math.abs(b.Y - this._lastPoint.Y))) {
          this._lastPoint = b;
          a = this._blackoutList[this._blackoutList.length - 1];
          var c;
          null === a.raRect && this._prepreBlackout(a);
          0 > b.X - a.x ? (a.width = Math.abs(b.X - a.x), c = b.X) : (a.width = b.X - a.x, c = a.x);
          0 > b.Y - a.y ? (a.height = Math.abs(b.Y - a.y), b = b.Y) : (a.height = b.Y - a.y, b = a.y);
          a.raRect.attr({x:c, y:b, width:a.width, height:a.height})
        }
      }
    }
  }
};
UserSnap.tools.Blackout.prototype._keydown = function(a) {
  if(27 === a.keyCode) {
    if(this._painting) {
      return this._painting = !1, a = this._blackoutList[this._blackoutList.length - 1], a.raRect.remove(), this._blackoutList.splice(this._blackoutList.length - 1, 1), this.fireEvent("stopWorking", this._toolkey, a), !1
    }
    if(0 <= this._selection.idx) {
      return this.resetSelection(), !1
    }
  }else {
    if(46 === a.keyCode || 8 === a.keyCode) {
      if(a = this._sb.getDocument().activeElement.nodeName.toLowerCase(), "textarea" !== a && "input" !== a && this._delSelection()) {
        return!1
      }
    }
  }
};
UserSnap.tools.Blackout.prototype.getToolData = function() {
  for(var a = [], b = null, c = 0;c < this._blackoutList.length;c++) {
    void 0 !== this._blackoutList[c] && null !== this._blackoutList[c] && (b = this._blackoutList[c], a.push([[b.x, b.y], [b.x + b.width, b.y + b.height]]))
  }
  b = {};
  b[this._toolkey] = a;
  return b
};
UserSnap.tools.Blackout.prototype.destroy = function() {
};
UserSnap.tools.Arrow = function() {
  this._enabled = !1;
  this._paint = null;
  this._instance = UserSnap.getInstance();
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._toolkey = "arrow";
  this._colorSet = ["#f1c40f", "#e74c3c", "#8e44ad", "#2ecc71", "#3498db"];
  this._currentColor = this._colorSet[0];
  this._currentStrokeWidth = 10;
  this._currentStrokeOpacity = 0.8;
  this._selectColor = "#2472a4";
  this._selectGlow = {width:3, color:this._selectColor};
  this._settingsDlg = {cl:null};
  this._painting = !1;
  this._arrowList = [];
  this._selection = {idx:-1, deleteBtn:null, box:null, boxHover:!1, boxBaseX:-1, boxBaseY:-1, boxglow:null, glow:null};
  this._lastPoint = {X:-10, Y:-10};
  this._hover = !1
};
UserSnap.tools.Arrow.prototype.initToolbox = function(a, b) {
  this._toolbox = a;
  var c = UserSnap.Guide.getInstance();
  a.listenEvent("initialized", function() {
    c.addStory(this._toolkey, a.win, {x:130, y:36 * (b + 1)}, "<h3>" + util.decEscUTF8(us.b_arrow) + "</h3><p>" + util.decEscUTF8(us.g_arrow0) + '</p><div class="img-base arrow0"></div><p class="first">' + util.decEscUTF8(us.g_arrow1) + '</p><div class="img-base arrow1"></div>')
  }, this)
};
UserSnap.tools.Arrow.prototype.init = function(a) {
  this._paint = a;
  this._paint.listenEvent("mousedown", this._mousedown, this);
  this._paint.listenEvent("mouseup", this._mouseup, this);
  this._paint.listenEvent("mousemove", this._mousemove, this);
  this._paint.listenEvent("keydown", this._keydown, this);
  this._selMgr = a.getSelectionManager();
  var b = this;
  a = UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/img/Xbutton.png";
  UserSnap.Config.devDebug && (a = "img/Xbutton.png");
  this._selection.deleteBtn = this._paint.getRaphael().image(a, 0, 0, 19, 19);
  this._selection.deleteBtn.attr({opacity:0.4, cursor:"pointer", title:util.decEscUTF8(us.t_delete)});
  this._selection.deleteBtn.hover(function() {
    b._selection.deleteBtn.animate({opacity:0.7}, 200, "<>")
  }, function() {
    b._selection.deleteBtn.animate({opacity:0.4}, 200, "<>")
  });
  this._selection.deleteBtn.mousedown(function(a) {
    2 !== a.button && (b._delSelection.apply(b), util.stopPropagation(a))
  });
  this._selection.deleteBtn.hide()
};
UserSnap.tools.Arrow.prototype.getUIConfig = function() {
  var a = this.MINI.EE, b = this.MINI, c = this;
  return{tooltip:util.decEscUTF8(us.t_arrow), text:util.decEscUTF8(us.b_arrow), icon:this._toolkey, settings:function() {
    for(var d = [], e = function(a) {
      a = a.target || a.srcElement;
      var d = b.$(a), e = d.get("$backgroundColor");
      b.$(a.parentNode).select("li").set("-active");
      d.set("+active");
      c._currentColor = util.rgb2Hex(e);
      c._updateSelection.apply(c)
    }, f = function(a) {
      b.$(a).on("click", e)
    }, g = 0;g < c._colorSet.length;g++) {
      0 === g ? d.push(a("li", {$:"active", $backgroundColor:c._colorSet[g]}, f)) : d.push(a("li", {$backgroundColor:c._colorSet[g]}, f))
    }
    return a("div", {$:"us-widget-panel-tool-settings"}, [a("div", {$:"us-widget-panel-tool-colorswitch"}, a("ul", {}, d, function(a) {
      c._settingsDlg = {cl:a}
    }))])
  }}
};
UserSnap.tools.Arrow.prototype._updateSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._arrowList[this._selection.idx];
    a.raPath.attr({stroke:this._currentColor});
    this._selection.glow.remove();
    this._selection.glow = a.raPath.glow(this._selectGlow)
  }
};
UserSnap.tools.Arrow.prototype._setSettings = function(a) {
  a = a || "#f1c40f";
  var b = this.MINI;
  this._currentColor = a;
  this._settingsDlg.cl.select("li").each(function(c) {
    c = b.$(c);
    util.rgb2Hex(c.get("$backgroundColor")) === a ? c.set("+active") : c.set("-active")
  });
  this._updateSelection()
};
UserSnap.tools.Arrow.prototype.isDirty = function() {
  return 0 < this.getToolData()[this._toolkey].length
};
UserSnap.tools.Arrow.prototype.isEnabled = function() {
  return this._enabled
};
UserSnap.tools.Arrow.prototype.enable = function() {
  this._enabled = !0
};
UserSnap.tools.Arrow.prototype.disable = function() {
  this._enabled = !1;
  this.resetSelection()
};
UserSnap.tools.Arrow.prototype.resetSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._arrowList[this._selection.idx];
    null !== a && null !== a.raPath && a.raPath.attr({cursor:"pointer"});
    this._selection.glow.remove();
    this._selection.box.remove();
    this._selection.selBox.remove();
    this._selection.boxglow.remove();
    this._selection.idx = -1;
    this._selection.glow = null;
    this._selection.boxglow = null;
    this._selection.box = null;
    this._selection.boxHover = !1;
    this._selection.deleteBtn.hide();
    this._selMgr.clearSelection()
  }
};
UserSnap.tools.Arrow.prototype._selectArrow = function(a, b) {
  this._selMgr.selectElement(this, a);
  this._selection.glow = a.raPath.glow(this._selectGlow);
  var c = a.raPath.getBBox();
  this._selection.box = this._paint.getRaphael().rect(c.x - 10, c.y - 10, c.width + 20, c.height + 20);
  this._selection.selBox = this._paint.getRaphael().rect(c.x - 10, c.y - 10, c.width + 20, c.height + 20);
  this._selection.boxBaseX = 0;
  this._selection.boxBaseY = 0;
  this._selection.box.attr({stroke:this._selectColor, "stroke-width":1});
  this._selection.selBox.attr({stroke:"#ffffff", cursor:"move", "stroke-width":10, "stroke-opacity":0});
  a.raPath.attr({cursor:"move"});
  this._setSettings(a.raPath.attr("stroke"));
  var d = this;
  this._selection.selBox.hover(function() {
    d._selection.boxHover = !0
  }, function() {
    d._selection.boxHover = !1
  });
  var e = function(a, b, c, e, f) {
    10 > b && (b = 10);
    a > d._paint._vp.width - 20 && (a -= c + 55);
    f.x = a;
    f.y = b;
    return f
  }, f = -1, g = -1, h = -1, j = -1;
  this._selection.selBox.drag(function(b, c, e, p, n, s) {
    b = Math.round(b);
    c = Math.round(c);
    Math.round(e);
    Math.round(p);
    0 === util.getWhich(n, d._sb.getWindow()) ? s.cancelIt = !0 : (a.baseX = f + b, a.baseY = g + c, d._selection.boxBaseX = h + b, d._selection.boxBaseY = j + c, a.raPath.transform("t" + (f + b) + "," + (g + c)), d._selection.box.transform("t" + (h + b) + "," + (j + c)), this.transform("t" + (h + b) + "," + (j + c)))
  }, function() {
    f = a.baseX;
    g = a.baseY;
    h = d._selection.boxBaseX;
    j = d._selection.boxBaseY;
    d._selection.deleteBtn.hide();
    d._selection.boxglow.remove();
    d._selection.glow.remove();
    d.fireEvent("startWorking", d._toolkey, a)
  }, function() {
    d.fireEvent("stopWorking", d._toolkey, a);
    d._selection.boxglow = d._selection.box.glow(d._selectGlow);
    d._selection.glow = a.raPath.glow(d._selectGlow);
    var b = a.raPath.getBBox();
    d._selection.deleteBtn.attr(e(b.x + b.width + 20, b.y - 10, b.width, b.height, {cursor:"pointer"}));
    d._selection.deleteBtn.show();
    d._selection.deleteBtn.toFront()
  });
  this._selection.boxglow = this._selection.box.glow(this._selectGlow);
  this._selection.deleteBtn.attr(e(c.x + c.width + 20, c.y - 10, c.width, c.height, {cursor:"pointer"}));
  this._selection.deleteBtn.show();
  this._selection.deleteBtn.toFront();
  this._selection.idx = b
};
UserSnap.tools.Arrow.prototype._delSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._arrowList[this._selection.idx];
    a.raPath.remove();
    null !== a.glow && a.glow.remove();
    this._arrowList[this._selection.idx] = null;
    this.resetSelection();
    return!0
  }
  return!1
};
UserSnap.tools.Arrow.prototype._createArrow = function(a, b, c, d, e) {
  var f = Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2));
  if(3 > f) {
    return[]
  }
  if(15 > f) {
    return["M" + a + " " + b + "L" + c + " " + d]
  }
  var g = Raphael.angle(a, b, c, d), h = Raphael.rad(g - 45), f = Raphael.rad(g + 45), j = Raphael.rad(g - 135), g = Raphael.rad(g + 135);
  Math.cos(j);
  Math.sin(j);
  Math.cos(g);
  Math.sin(g);
  j = c + Math.cos(h) * e;
  h = d + Math.sin(h) * e;
  g = c + Math.cos(f) * e;
  e = d + Math.sin(f) * e;
  return["M" + a + " " + b + "L" + c + " " + d, "M" + c + " " + d + "L" + j + " " + h, "M" + c + " " + d + "L" + g + " " + e]
};
UserSnap.tools.Arrow.prototype._mousedown = function(a) {
  if(2 !== a.button && (this._selMgr.isDrawOpAllowed() && !this._selection.boxHover) && (this.resetSelection(), this._enabled && !this._painting && !this._hover)) {
    this._painting = !0;
    var b = Math.round(a.clientX);
    a = Math.round(a.clientY);
    var c = this._createArrow(b, a, b, a, 20), d = Raphael.createUUID(), e = {oid:d, path:c, rawPath:[b, a, b, a], glow:null, baseX:0, baseY:0, raPath:this._paint.getRaphael().path(c.join(""))};
    this.fireEvent("startWorking", this._toolkey, e);
    var f = this._arrowList.length, g = this, h = !1, j = -1, l = -1;
    e.raPath.drag(function(a, b, c, d, f, r) {
      a = Math.round(a);
      b = Math.round(b);
      Math.round(c);
      Math.round(d);
      0 === util.getWhich(f, g._sb.getWindow()) ? r.cancelIt = !0 : (h = !0, e.baseX = j + a, e.baseY = l + b, this.transform("t" + (j + a) + "," + (l + b)))
    }, function(a, b, c, f) {
      !g._selMgr.isElementSelected() || g._selMgr.getSelectedElement().oid !== d ? f.cancelIt = !0 : (g._selMgr.startDrag(), h = !1, j = e.baseX, l = e.baseY, null !== e.glow && (e.glow.remove(), e.glow = null), g.fireEvent("startWorking", g._toolkey, e))
    }, function() {
      g._selMgr.stopDrag();
      g.fireEvent("stopWorking", g._toolkey, e);
      h = !1
    });
    e.raPath.click(function() {
      !h && !g._selMgr.isElementSelected() && (g.resetSelection.apply(g), g._selectArrow.apply(g, [e, f]))
    });
    e.raPath.hover(function() {
      h || (g._hover = !0, g._painting || (e.glow = e.raPath.glow(g._selectGlow)))
    }, function() {
      h || (g._hover = !1, null !== e.glow && (e.glow.remove(), e.glow = null))
    });
    e.raPath.attr({stroke:this._currentColor, "stroke-opacity":this._currentStrokeOpacity, "stroke-width":this._currentStrokeWidth, "stroke-linecap":"round", "stroke-linejoin":"round", cursor:"pointer"});
    this._arrowList.push(e)
  }
};
UserSnap.tools.Arrow.prototype._mouseup = function(a) {
  2 !== a.button && (this._enabled && this._painting) && (this._lastPoint = {X:Math.round(a.clientX), Y:Math.round(a.clientY)}, a = this._arrowList[this._arrowList.length - 1], a.raPath.attr({cursor:"move"}), this._painting = !1, this.fireEvent("stopWorking", this._toolkey, a), 10 > Math.sqrt(Math.pow(a.rawPath[0] - a.rawPath[2], 2) + Math.pow(a.rawPath[1] - a.rawPath[3], 2)) ? (a.raPath.remove(), this._arrowList.splice(this._arrowList.length - 1, 1)) : (this._selMgr.syncLayers([a.raPath], "else"), 
  this._selectArrow(a, this._arrowList.length - 1)))
};
UserSnap.tools.Arrow.prototype._mousemove = function(a) {
  if(this._enabled && this._painting) {
    var b = this._arrowList[this._arrowList.length - 1];
    0 === util.getWhich(a, this._sb.getWindow()) ? (this._painting = !1, this.fireEvent("stopWorking", this._toolkey, b)) : (a = {X:Math.round(a.clientX), Y:Math.round(a.clientY)}, 5 > Math.abs(a.X - this._lastPoint.X) && 5 > Math.abs(a.Y - this._lastPoint.Y) || (this._lastPoint = a, b.path = this._createArrow(b.rawPath[0], b.rawPath[1], a.X, a.Y, 20), b.rawPath[2] = a.X, b.rawPath[3] = a.Y, b.raPath.attr({path:b.path.join("")})))
  }
};
UserSnap.tools.Arrow.prototype._keydown = function(a) {
  if(27 === a.keyCode) {
    if(this._painting) {
      return this._painting = !1, a = this._arrowList[this._arrowList.length - 1], a.raPath.remove(), this._arrowList.splice(this._arrowList.length - 1, 1), this.fireEvent("stopWorking", this._toolkey, a), !1
    }
    if(0 <= this._selection.idx) {
      return this.resetSelection(), !1
    }
  }else {
    if(46 === a.keyCode || 8 === a.keyCode) {
      if(a = this._sb.getDocument().activeElement.nodeName.toLowerCase(), "textarea" !== a && "input" !== a && this._delSelection()) {
        return!1
      }
    }
  }
};
UserSnap.tools.Arrow.prototype.getToolData = function() {
  for(var a = [], b = 0;b < this._arrowList.length;b++) {
    void 0 !== this._arrowList[b] && null !== this._arrowList[b] && a.push(this._arrowList[b].rawPath)
  }
  b = {};
  b[this._toolkey] = a;
  return b
};
UserSnap.tools.Arrow.prototype.destroy = function() {
};
UserSnap.tools.PixelRuler = function() {
  this._enabled = !1;
  this._paint = null;
  this._instance = UserSnap.getInstance();
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._toolkey = "pixelruler";
  this._currentColor = "#f1c40f";
  this._selectColor = "#2472a4";
  this._selectGlow = {width:3, color:this._selectColor};
  this._painting = !1;
  this._lastPoint = {X:0, Y:0};
  this._rulerList = [];
  this._selection = {idx:-1, deleteBtn:null, box:null, boxHover:!1, boxBaseX:-1, boxBaseY:-1, boxglow:null, glow:null};
  this._hover = !1
};
UserSnap.tools.PixelRuler.prototype.initToolbox = function(a, b) {
  this._toolbox = a;
  var c = UserSnap.Guide.getInstance();
  a.listenEvent("initialized", function() {
    c.addStory(this._toolkey, a.win, {x:130, y:36 * (b + 1)}, "<h3>" + util.decEscUTF8(us.b_pixelruler) + "</h3><p>" + util.decEscUTF8(us.g_pixelruler0) + '</p><div class="img-base pixelruler0"></div><p>' + util.decEscUTF8(us.g_pixelruler1) + "</p>")
  }, this)
};
UserSnap.tools.PixelRuler.prototype.init = function(a) {
  this._paint = a;
  this._paint.listenEvent("mousedown", this._mousedown, this);
  this._paint.listenEvent("mouseup", this._mouseup, this);
  this._paint.listenEvent("mousemove", this._mousemove, this);
  this._paint.listenEvent("keydown", this._keydown, this);
  this._selMgr = a.getSelectionManager();
  var b = this;
  a = UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/img/Xbutton.png";
  UserSnap.Config.devDebug && (a = "img/Xbutton.png");
  this._selection.deleteBtn = this._paint.getRaphael().image(a, 0, 0, 19, 19);
  this._selection.deleteBtn.attr({opacity:0.4, cursor:"pointer", title:util.decEscUTF8(us.t_delete)});
  this._selection.deleteBtn.hover(function() {
    b._selection.deleteBtn.animate({opacity:0.7}, 200, "<>")
  }, function() {
    b._selection.deleteBtn.animate({opacity:0.4}, 200, "<>")
  });
  this._selection.deleteBtn.mousedown(function(a) {
    2 !== a.button && (b._delSelection.apply(b), util.stopPropagation(a))
  });
  this._selection.deleteBtn.hide();
  this._cursor = {hline:this._paint.getRaphael().path("M0 0L" + this._paint._vp.width + " 0"), vline:this._paint.getRaphael().path("M0 0L0 " + this._paint._vp.height), box:this._paint.getRaphael().rect(0, 0, 50, 20, 2), info:this._paint.getRaphael().text(7, 10, "0,0"), raset:this._paint.getRaphael().set(), boxset:this._paint.getRaphael().set()};
  this._cursor.hline.attr({stroke:this._currentColor, "stroke-dasharray":"-", "stroke-width":1});
  this._cursor.vline.attr({stroke:this._currentColor, "stroke-dasharray":"-", "stroke-width":1});
  this._cursor.box.attr({fill:"#131313"});
  this._cursor.info.attr({fill:"#fefefe", cursor:"text", "font-family":"Roboto, sans-serif", "font-size":"10px", "text-anchor":"start"});
  this._cursor.raset.push(this._cursor.hline);
  this._cursor.raset.push(this._cursor.vline);
  this._cursor.raset.push(this._cursor.box);
  this._cursor.raset.push(this._cursor.info);
  this._cursor.boxset.push(this._cursor.box);
  this._cursor.boxset.push(this._cursor.info);
  this._cursor.raset.hide()
};
UserSnap.tools.PixelRuler.prototype.getUIConfig = function() {
  return{tooltip:util.decEscUTF8(us.t_pixelruler), text:util.decEscUTF8(us.b_pixelruler), icon:this._toolkey}
};
UserSnap.tools.PixelRuler.prototype.isDirty = function() {
  return 0 < this.getToolData()[this._toolkey].length
};
UserSnap.tools.PixelRuler.prototype.isEnabled = function() {
  return this._enabled
};
UserSnap.tools.PixelRuler.prototype.enable = function() {
  this._enabled = !0;
  this._cursor.raset.show()
};
UserSnap.tools.PixelRuler.prototype.disable = function() {
  this._enabled = !1;
  this._cursor.raset.hide();
  this.resetSelection()
};
UserSnap.tools.PixelRuler.prototype.resetSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._rulerList[this._selection.idx];
    null !== a && null !== a.raPath && (a.raPath.attr({cursor:"pointer"}), a.box.attr({cursor:"pointer"}), a.info.attr({cursor:"pointer"}));
    this._selection.box.remove();
    this._selection.selBox.remove();
    this._selection.boxglow.remove();
    this._selection.idx = -1;
    this._selection.boxglow = null;
    this._selection.box = null;
    this._selection.boxHover = !1;
    this._selection.deleteBtn.hide();
    this._selMgr.clearSelection()
  }
};
UserSnap.tools.PixelRuler.prototype._selectRuler = function(a, b) {
  this._selMgr.selectElement(this, a);
  var c = a.raPath.getBBox();
  this._selection.box = this._paint.getRaphael().rect(c.x - 10, c.y - 10, c.width + 20, c.height + 20);
  this._selection.selBox = this._paint.getRaphael().rect(c.x - 10, c.y - 10, c.width + 20, c.height + 20);
  this._selection.box.insertBefore(a.boxset);
  this._selection.boxBaseX = 0;
  this._selection.boxBaseY = 0;
  this._selection.box.attr({stroke:this._selectColor, "stroke-width":1});
  this._selection.selBox.attr({stroke:"#ffffff", cursor:"move", "stroke-width":10, "stroke-opacity":0});
  a.box.attr({cursor:"move"});
  a.info.attr({cursor:"move"});
  var d = this;
  this._selection.selBox.hover(function() {
    d._selection.boxHover = !0
  }, function() {
    d._selection.boxHover = !1
  });
  var e = function(a, b, c, e, f) {
    10 > b && (b = 10);
    a > d._paint._vp.width - 20 && (a -= c + 55);
    f.x = a;
    f.y = b;
    return f
  }, f = -1, g = -1, h = -1, j = -1;
  this._selection.selBox.drag(function(b, c, e, p, n, s) {
    b = Math.round(b);
    c = Math.round(c);
    Math.round(e);
    Math.round(p);
    0 === util.getWhich(n, d._sb.getWindow()) ? s.cancelIt = !0 : (a.baseX = f + b, a.baseY = g + c, d._selection.boxBaseX = h + b, d._selection.boxBaseY = j + c, a.raPath.transform("t" + (f + b) + "," + (g + c)), a.boxset.transform("t" + (f + b) + "," + (g + c)), a.info.transform("t" + (f + b + 10) + "," + (g + c + 10)), d._selection.box.transform("t" + (h + b) + "," + (j + c)), this.transform("t" + (h + b) + "," + (j + c)))
  }, function() {
    f = a.baseX;
    g = a.baseY;
    h = d._selection.boxBaseX;
    j = d._selection.boxBaseY;
    d._selection.deleteBtn.hide();
    d._selection.boxglow.remove();
    d.fireEvent("startWorking", d._toolkey, a)
  }, function() {
    d.fireEvent("stopWorking", d._toolkey, a);
    d._selection.boxglow = d._selection.box.glow(d._selectGlow);
    var b = a.raPath.getBBox();
    d._selection.deleteBtn.attr(e(b.x + b.width + 20, b.y - 10, b.width, b.height, {cursor:"pointer"}));
    d._selection.deleteBtn.show();
    d._selection.deleteBtn.toFront()
  });
  this._selection.boxglow = this._selection.box.glow(this._selectGlow);
  this._selection.deleteBtn.attr(e(c.x + c.width + 20, c.y - 10, c.width, c.height, {cursor:"pointer"}));
  this._selection.deleteBtn.show();
  this._selection.deleteBtn.toFront();
  this._selection.idx = b
};
UserSnap.tools.PixelRuler.prototype._delSelection = function() {
  if(0 <= this._selection.idx) {
    var a = this._rulerList[this._selection.idx];
    a.raPath.remove();
    a.boxset.remove();
    this._rulerList[this._selection.idx] = null;
    this.resetSelection();
    return!0
  }
  return!1
};
UserSnap.tools.PixelRuler.prototype._createRulerPath = function(a, b, c, d) {
  if(3 > Math.sqrt(Math.pow(a - c, 2) + Math.pow(b - d, 2))) {
    return[]
  }
  var e = Raphael.angle(a, b, c, d), f = Raphael.rad(e - 90), g = Raphael.rad(e + 90), e = a + 10 * Math.cos(f), h = b + 10 * Math.sin(f), j = a + 10 * Math.cos(g), l = b + 10 * Math.sin(g), k = c + 10 * Math.cos(f), f = d + 10 * Math.sin(f), m = c + 10 * Math.cos(g), g = d + 10 * Math.sin(g);
  return["M" + a + " " + b + "L" + c + " " + d, "M" + e + " " + h + "L" + j + " " + l, "M" + k + " " + f + "L" + m + " " + g]
};
UserSnap.tools.PixelRuler.prototype._mousedown = function(a) {
  if(2 !== a.button && (this._selMgr.isDrawOpAllowed() && !this._selection.boxHover) && (this.resetSelection(), this._enabled && !this._painting && !this._hover)) {
    this._painting = !0;
    var b = Math.round(a.clientX), c = Math.round(a.clientY);
    this._lastPoint = {X:Math.round(a.clientX), Y:Math.round(a.clientY)};
    a = this._createRulerPath(b, c, b, c);
    var d = Raphael.createUUID(), e = {oid:d, rawPath:[b, c, b, c], glow:null, baseX:0, baseY:0, box:this._paint.getRaphael().rect(0, 0, 50, 20, 2), info:this._paint.getRaphael().text(7, 10, "0,0"), boxset:this._paint.getRaphael().set(), raPath:this._paint.getRaphael().path(a.join(""))};
    e.box.attr({fill:"#131313", cursor:"pointer"});
    e.info.attr({fill:"#fefefe", cursor:"pointer", "font-family":"Roboto, sans-serif", "font-size":"10px", "text-anchor":"start"});
    e.info.transform("t10,10");
    e.boxset.push(e.box);
    e.boxset.push(e.info);
    e.boxset.hide();
    this.fireEvent("startWorking", this._toolkey, e);
    var f = this._rulerList.length, g = this, h = !1, j = -1, l = -1, b = function(a, b, c, f) {
      !g._selMgr.isElementSelected() || g._selMgr.getSelectedElement().oid !== d ? (f.cancelIt = !0, g._hover = !1) : (g._selMgr.startDrag(), h = !1, j = e.baseX, l = e.baseY, g.fireEvent("startWorking", g._toolkey, e))
    }, c = function(a, b, c, d, f, r) {
      a = Math.round(a);
      b = Math.round(b);
      Math.round(c);
      Math.round(d);
      0 === util.getWhich(f, g._sb.getWindow()) ? r.cancelIt = !0 : (h = !0, e.baseX = j + a, e.baseY = l + b, e.boxset.transform("t" + (j + a) + "," + (l + b)), e.info.transform("t" + (j + a + 10) + "," + (l + b + 10)), e.raPath.transform("t" + (j + a) + "," + (l + b)))
    };
    a = function() {
      g._selMgr.stopDrag();
      g.fireEvent("stopWorking", g._toolkey, e);
      h = !1
    };
    e.raPath.drag(c, b, a);
    e.boxset.drag(c, b, a);
    b = function() {
      !h && !g._selMgr.isElementSelected() && (g.resetSelection.apply(g), g._selectRuler.apply(g, [e, f]))
    };
    e.raPath.click(b);
    e.boxset.click(b);
    b = function() {
      h || (g._hover = !0)
    };
    c = function() {
      h || (g._hover = !1)
    };
    e.raPath.hover(b, c);
    e.boxset.hover(b, c);
    e.raPath.attr({stroke:this._currentColor, "stroke-width":2});
    e.boxset.toFront();
    this._cursor.boxset.toFront();
    this._rulerList.push(e)
  }
};
UserSnap.tools.PixelRuler.prototype._mouseup = function(a) {
  2 !== a.button && (this._enabled && this._painting) && (this._lastPoint = {X:Math.round(a.clientX), Y:Math.round(a.clientY)}, a = this._rulerList[this._rulerList.length - 1], a.raPath.attr({cursor:"move"}), this._painting = !1, this.fireEvent("stopWorking", this._toolkey, a), 1 > Math.sqrt(Math.pow(a.rawPath[0] - a.rawPath[2], 2) + Math.pow(a.rawPath[1] - a.rawPath[3], 2)) ? (a.raPath.remove(), a.boxset.remove(), this._rulerList.splice(this._rulerList.length - 1, 1)) : (this._selMgr.syncLayers([a.boxset, 
  a.raPath], "top"), this._selectRuler(a, this._rulerList.length - 1)))
};
UserSnap.tools.PixelRuler.prototype._calcSnappingPoint = function(a, b, c, d) {
  var e = Raphael.angle(a, b, c, d);
  0 <= e && 45 >= e ? d = b : 45 < e && 90 >= e ? c = a : 90 < e && 135 >= e ? c = a : 135 < e && 180 >= e ? d = b : 180 < e && 225 >= e ? d = b : 225 < e && 270 >= e ? c = a : 270 < e && 315 >= e ? c = a : 315 < e && 360 >= e && (d = b);
  return{X:c, Y:d, dir:void 0}
};
UserSnap.tools.PixelRuler.prototype._mousemove = function(a) {
  if(this._enabled) {
    var b = {X:Math.round(a.clientX), Y:Math.round(a.clientY)};
    if(!(5 > Math.abs(b.X - this._lastPoint.X) && 5 > Math.abs(b.Y - this._lastPoint.Y)) && (this._cursor.raset.show(), this._cursor.hline.transform("t0," + b.Y), this._cursor.vline.transform("t" + b.X + ",0"), this._cursor.boxset.transform("t" + (b.X + 10) + "," + (b.Y + 10)), this._cursor.info.attr("text", b.X + "," + b.Y), 1E3 <= b.X || 1E3 <= b.Y ? this._cursor.box.attr("width", 60) : this._cursor.box.attr("width", 50), this._painting)) {
      var c = this._rulerList[this._rulerList.length - 1];
      if(0 === util.getWhich(a, this._sb.getWindow())) {
        this._painting = !1, this.fireEvent("stopWorking", this._toolkey, c)
      }else {
        util.isCtrlKey(a) || (b = this._calcSnappingPoint(c.rawPath[0], c.rawPath[1], b.X, b.Y));
        a = Raphael.angle(c.rawPath[0], c.rawPath[1], b.X, b.Y);
        c.path = this._createRulerPath(c.rawPath[0], c.rawPath[1], b.X, b.Y);
        c.rawPath[2] = b.X;
        c.rawPath[3] = b.Y;
        c.raPath.attr({path:c.path.join("")});
        var d = Math.sqrt(Math.pow(c.rawPath[0] - b.X, 2) + Math.pow(c.rawPath[1] - b.Y, 2));
        c.boxset.show();
        1E3 < d ? c.boxset.attr("width", 55) : c.boxset.attr("width", 50);
        45 < a && 135 > a || 225 < a && 315 > a ? c.boxset.attr({x:Math.ceil((c.rawPath[0] + b.X) / 2) - 55, y:Math.ceil((c.rawPath[1] + b.Y) / 2) + 5}) : c.boxset.attr({x:Math.ceil((c.rawPath[0] + b.X) / 2) - 25, y:Math.ceil((c.rawPath[1] + b.Y) / 2) - 25});
        c.info.attr("text", Math.ceil(d) + "px")
      }
    }
  }
};
UserSnap.tools.PixelRuler.prototype._keydown = function(a) {
  if(27 === a.keyCode) {
    if(this._painting) {
      return this._hover = this._painting = !1, a = this._rulerList[this._rulerList.length - 1], a.raPath.remove(), a.boxset.remove(), this._rulerList.splice(this._rulerList.length - 1, 1), this.fireEvent("stopWorking", this._toolkey, a), !1
    }
    if(0 <= this._selection.idx) {
      return this.resetSelection(), !1
    }
  }else {
    if(46 === a.keyCode || 8 === a.keyCode) {
      if(a = this._sb.getDocument().activeElement.nodeName.toLowerCase(), "textarea" !== a && "input" !== a && this._delSelection()) {
        return!1
      }
    }
  }
};
UserSnap.tools.PixelRuler.prototype.getToolData = function() {
  for(var a = [], b = 0;b < this._rulerList.length;b++) {
    void 0 !== this._rulerList[b] && null !== this._rulerList[b] && a.push(this._rulerList[b].rawPath)
  }
  b = {};
  b[this._toolkey] = a;
  return b
};
UserSnap.tools.PixelRuler.prototype.destroy = function() {
};
UserSnap.tools.Comment = function() {
  this._enabled = !1;
  this._paint = null;
  this._instance = UserSnap.getInstance();
  this._sb = this._instance.sandbox;
  this.MINI = this._sb.getMINI();
  UserSnap.util.Observable.mixin(this);
  this._toolkey = "comment";
  this._selectColor = "#0096fd";
  this._selectGlow = {width:10, opacity:0.2, color:this._selectColor};
  this._focused = this._moved = this._moving = this._painting = !1;
  this._movingObj = null;
  this._movingAlign = "right";
  this._movingPos = null;
  this._commentList = [];
  this._selection = {idx:-1, deleteBtn:null, glow:null};
  this._lastPoint = {X:-10, Y:-10};
  this._hover = !1;
  this._baseColor = null;
  this._focusComment = 2147483540;
  this._lastFocus = null
};
UserSnap.tools.Comment.prototype._searchBaseColor = function() {
  var a = "#555555", a = this.MINI.$(this._sb.getDocument()).select(".us-colorvars");
  a.add(this.MINI.EE("span", {$:"basecolor1"}));
  return a = a.select(".basecolor1").get("$color")
};
UserSnap.tools.Comment.prototype.initToolbox = function(a, b) {
  this._toolbox = a;
  var c = UserSnap.Guide.getInstance();
  a.listenEvent("initialized", function() {
    c.addStory(this._toolkey, a.win, {x:130, y:36 * (b + 1)}, "<h3>" + util.decEscUTF8(us.b_comment) + "</h3><p>" + util.decEscUTF8(us.g_commenttool0) + '</p><div class="img-base comment0"></div>')
  }, this)
};
UserSnap.tools.Comment.prototype.init = function(a) {
  this._paint = a;
  this._paint.listenEvent("mousedown", this._mousedown, this);
  this._paint.listenEvent("mouseup", this._mouseup, this);
  this._paint.listenEvent("mousemove", this._mousemove, this);
  this._paint.listenEvent("keydown", this._keydown, this);
  this._selMgr = a.getSelectionManager()
};
UserSnap.tools.Comment.prototype.isDirty = function() {
  for(var a, b = 0;b < this._commentList.length;b++) {
    if(void 0 !== this._commentList[b] && null !== this._commentList[b] && (a = this._commentList[b], "" !== this._getTextareaValue(a.badge))) {
      return!0
    }
  }
  return!1
};
UserSnap.tools.Comment.prototype.getUIConfig = function() {
  return{tooltip:util.decEscUTF8(us.t_comment), text:util.decEscUTF8(us.b_comment), icon:"annotate"}
};
UserSnap.tools.Comment.prototype.isEnabled = function() {
  return this._enabled
};
UserSnap.tools.Comment.prototype.enable = function() {
  this._enabled = !0
};
UserSnap.tools.Comment.prototype.disable = function() {
  this._enabled = !1;
  this.resetSelection()
};
UserSnap.tools.Comment.prototype.resetSelection = function() {
  0 <= this._selection.idx && (this._selection.glow = null, this._selection.idx = -1, this._selMgr.clearSelection())
};
UserSnap.tools.Comment.prototype._getTextarea = function(a) {
  return a.select("div.textarea")
};
UserSnap.tools.Comment.prototype._getTextareaValue = function(a) {
  return util.textFromContenteditable(a.select("div.textarea")[0])
};
UserSnap.tools.Comment.prototype._selectComment = function(a, b) {
  this._selMgr.selectElement(this, a);
  this._getTextarea(a.badge)[0].focus();
  this._selection.idx = b
};
UserSnap.tools.Comment.prototype._delSelection = function() {
  this._commentList[this._selection.idx] && this._commentList[this._selection.idx].destroy()
};
UserSnap.tools.Comment.prototype._addSVGBubbles = function() {
  for(var a = null, b = 0, c = 1, d = 0;d < this._commentList.length;d++) {
    null !== this._commentList[d] && (a = this._commentList[d], b = a.x + a.width, 0 < a.badge.select(".comments").get("$").indexOf("leftalign") && (b -= a.width), a.bubble = {txt:null, circ:this._paint.getRaphael().circle(b, a.y, 18)}, a.bubble.txt = this._paint.getRaphael().text(b, a.y, c), a.bubble.txt.attr({fill:"#FFFFFF", "font-family":"Roboto, sans-serif", "font-size":"20px", "text-anchor":"middle"}), a.bubble.circ.attr({fill:this._baseColor, stroke:this._baseColor}), c++)
  }
};
UserSnap.tools.Comment.prototype._generateEventObj = function(a) {
  var b = {x:a.x, y:a.y, width:a.width, height:a.height};
  "tr" === a.bubblePos ? "top" === a.bubbleAlign ? (b.width += 250, b.y -= 126, b.height += 126) : (b.width += 250, 126 > b.height && (b.height = 126)) : "tl" === a.bubblePos && ("top" === a.bubbleAlign ? (b.x -= 250, b.width += 250, b.y -= 126, b.height += 126) : (b.x -= 250, b.width += 250, 126 > b.height && (b.height = 126)));
  return b
};
UserSnap.tools.Comment.prototype._buildBadge = function(a) {
  var b = null, c = this, d = util.decEscUTF8(us.i_you), e = a.x + a.width;
  a.bubblePos = "tr";
  a.bubbleAlign = "bottom";
  var f = "right", g = "bottom";
  a.x + a.width > this._instance.screenData.viewportData.contentWidth - 250 && (250 < a.x && (f = "left"), e -= a.width + 5, a.bubblePos = "tl");
  a.y > this._instance.screenData.viewportData.contentHeight - 150 && (g = "top", a.bubbleAlign = "top");
  var h, j, l = function(a) {
    a && util.isEmail(a) ? (h.set("$display", "none"), j.set({$display:"block", src:util.gravatar(a, 30)})) : (h.set("$display", "block"), j.set("$display", "none"))
  }, k = a.destroy = function() {
    a.badge.remove();
    a.boRect.remove();
    -1 !== a.highlighterIdx && (c._paint.delGrayCutArea(a.highlighterIdx), a.highlighterIdx = -1);
    null !== a.glow && (a.glow.remove(), a.glow = null);
    c._commentList[a.idx] = null;
    c.resetSelection();
    c._instance.unlistenEvent("emailChange", l)
  }, d = this.MINI.EE("div", {$:"us-interactivehighlight open", $top:a.y + "px", $left:e + "px"}, [this.MINI.EE("div", {$:"comments" + (" " + g + f)}, [this.MINI.EE("ul", {}, this.MINI.EE("li", {}, this.MINI.EE("ul", {}, [this.MINI.EE("li", {$:"image"}, [this.MINI.EE("div", {$:"ano", $display:"none"}, "", function(a) {
    h = a
  }), this.MINI.EE("img", {$:"gravatar", $display:"none"}, void 0, function(a) {
    j = a
  })], function() {
    l(c._instance.currentEmail)
  }), this.MINI.EE("li", {$:"name"}, [d, this.MINI.EE("span", {$:"email"}, "")]), this.MINI.EE("li", {$:"time"}, util.decEscUTF8(us.i_now)), this.MINI.EE("li", {$:"text comment"}, [this.MINI.EE("div", {$:"textarea", "@contenteditable":""}, " ", function(b) {
    util.restrictPlainPaste(c._sb.getWindow(), b);
    b.on("focus", function() {
      c._focused = a;
      c.fireEvent("startWorking", c._toolkey, c._generateEventObj(a), "edit");
      return!0
    });
    b.on("blur", function() {
      c._focused = !1;
      c.fireEvent("stopWorking", c._toolkey, c._generateEventObj(a), "edit");
      return!0
    })
  })])]))), this.MINI.EE("div", {$:"options"}, this.MINI.EE("a", {"@href":"#", "@title":util.decEscUTF8(us.t_delete)}, "", function(a) {
    a.on("click", function(a) {
      a.stopPropagation();
      k();
      return!1
    })
  }))]), this.MINI.EE("div", {$:"badge"}, [this.MINI.EE("div", {$:"plusminus first"}), this.MINI.EE("div", {$:"plusminus second"}), this.MINI.EE("div", {$:"comment-count"}, "")], function(d) {
    d.on("mousedown", function(b) {
      c._moving = !0;
      c._moved = !1;
      c._movingObj = a;
      c._movingAlign = "right";
      "tl" === a.bubblePos && (c._movingAlign = "left");
      c._movingPos = {X:Math.round(b.clientX), Y:Math.round(b.clientY)};
      c.fireEvent("startWorking", c._toolkey, c._generateEventObj(a))
    });
    d.on("mouseup", function() {
      -1 === c._movingObj.highlighterIdx && (c._movingObj.highlighterIdx = c._paint.addGrayCutArea(c._movingObj.x, c._movingObj.y, c._movingObj.x + c._movingObj.width, c._movingObj.y + c._movingObj.height));
      c._moving = !1;
      c._movingObj = null;
      c.fireEvent("stopWorking", c._toolkey, c._generateEventObj(a))
    });
    d.on("click", function() {
      c._moved || b.set("$", "open")
    })
  })], function(d) {
    var e = function() {
      null !== c._lastFocus && c._lastFocus.set("$zIndex", "");
      d.set("$zIndex", c._focusComment);
      c._lastFocus = d;
      c._instance._toolbox._activeTool.resetSelection();
      c._selMgr.clearSelection();
      return!0
    };
    d.select(".badge").on("mousedown", e);
    d.select(".comments").on("mousedown", e);
    d.select(".textarea").on("keydown", e);
    b = a.badge = d
  });
  this._instance.listenEvent("emailChange", l);
  this.MINI.$(this._sb.getDocument().body).add(d)
};
UserSnap.tools.Comment.prototype._mousedown = function(a) {
  if(this._selMgr.isDrawOpAllowed() && (null === this._baseColor && (this._baseColor = this._searchBaseColor()), this.resetSelection(), this._enabled && !this._painting && !this._hover)) {
    this._painting = !0;
    this._lastPoint = a = {X:Math.round(a.clientX), Y:Math.round(a.clientY)};
    var b = this._commentList.length, c = {glow:null, x:a.X, y:a.Y, width:0, highlighterIdx:-1, height:0, badge:null, comments:[], idx:b, boRect:this._paint.getRaphael().rect(a.X, a.Y, 0, 0).hide()};
    this.fireEvent("startWorking", this._toolkey, this._generateEventObj(c));
    var d = this, e = !1, f = -1, g = -1;
    c.boRect.drag(function(a, b, l, k, m, p) {
      a = Math.round(a);
      b = Math.round(b);
      Math.round(l);
      Math.round(k);
      0 === util.getWhich(m, d._sb.getWindow()) ? p.cancelIt = !0 : (-1 !== c.highlighterIdx && (d._paint.delGrayCutArea(c.highlighterIdx), c.highlighterIdx = -1), e = !0, null !== c.glow && (c.glow.remove(), c.glow = null), c.boRect.attr({x:f + a, y:g + b}), l = f + a + c.width, 0 < c.badge.select(".comments").get("$").indexOf("leftalign") && (l -= c.width + 5), c.x = f + a, c.y = g + b, c.badge.set({$top:c.y + "px", $left:l + "px"}))
    }, function() {
      d._selMgr.startDrag();
      e = !1;
      f = c.boRect.attr("x");
      g = c.boRect.attr("y");
      d.fireEvent("startWorking", d._toolkey, d._generateEventObj(c))
    }, function() {
      e = !1;
      g = f = -1;
      d._selMgr.stopDrag();
      d.fireEvent("stopWorking", d._toolkey, d._generateEventObj(c));
      -1 === c.highlighterIdx && (c.highlighterIdx = d._paint.addGrayCutArea(c.x, c.y, c.x + c.width, c.y + c.height))
    });
    c.boRect.click(function() {
      !e && !d._selMgr.isElementSelected() && (d.resetSelection.apply(d), d._selectComment.apply(d, [c, b]))
    });
    c.boRect.hover(function() {
      e || (d._hover = !0, d._painting || (c.glow = c.boRect.glow(d._selectGlow)))
    }, function() {
      e || (d._hover = !1, null !== c.glow && (c.glow.remove(), c.glow = null))
    });
    c.boRect.attr({stroke:this._baseColor, "stroke-width":3, cursor:"move"});
    this._commentList.push(c)
  }
};
UserSnap.tools.Comment.prototype._mouseup = function() {
  if(this._enabled && this._painting) {
    this._painting = !1;
    var a = this._commentList[this._commentList.length - 1];
    this.fireEvent("stopWorking", this._toolkey, this._generateEventObj(a));
    this._selMgr.isElementSelected() ? (a.boRect.remove(), this._commentList.splice(this._commentList.length - 1, 1)) : (a.x = a.boRect.attr("x"), a.y = a.boRect.attr("y"), a.boRect.toBack(), a.highlighterIdx = this._paint.addGrayCutArea(a.x, a.y, a.x + a.width, a.y + a.height), this._selMgr.syncLayers([a.boRect], "else"), this._buildBadge(a), this._selectComment(a, this._commentList.length - 1))
  }
};
UserSnap.tools.Comment.prototype._mousemove = function(a) {
  if(this._moving) {
    this._moved = !0;
    var b = Math.round(a.clientX);
    a = Math.round(a.clientY);
    var c = b - this._movingPos.X, d = a - this._movingPos.Y;
    this._movingPos.X = b;
    this._movingPos.Y = a;
    -1 !== this._movingObj.highlighterIdx && (this._paint.delGrayCutArea(this._movingObj.highlighterIdx), this._movingObj.highlighterIdx = -1);
    null !== this._movingObj.glow && (this._movingObj.glow.remove(), this._movingObj.glow = null);
    this._movingObj.boRect.attr({x:this._movingObj.x + c, y:this._movingObj.y + d});
    this._movingObj.x += c;
    this._movingObj.y += d;
    this._movingObj.badge.set({$top:this._movingObj.y + "px", $left:this._movingObj.x + ("right" == this._movingAlign ? this._movingObj.width : -5) + "px"})
  }else {
    this._enabled && (0 === util.getWhich(a, this._sb.getWindow()) ? this._mouseup(a) : this._painting && (c = {X:Math.round(a.clientX), Y:Math.round(a.clientY)}, 5 > Math.abs(c.X - this._lastPoint.X) && 5 > Math.abs(c.Y - this._lastPoint.Y) || (this._lastPoint = c, b = this._commentList[this._commentList.length - 1], 0 > c.X - b.x ? (b.width = Math.abs(c.X - b.x), a = c.X) : (b.width = c.X - b.x, a = b.x), 0 > c.Y - b.y ? (b.height = Math.abs(c.Y - b.y), c = c.Y) : (b.height = c.Y - b.y, c = b.y), 
    b.boRect.attr({x:a, y:c, width:b.width, height:b.height}).show())))
  }
};
UserSnap.tools.Comment.prototype._keydown = function(a) {
  if(27 === a.keyCode) {
    if(this._painting) {
      return this._painting = !1, a = this._commentList[this._commentList.length - 1], this._hover = !1, a.boRect.remove(), this._commentList.splice(this._commentList.length - 1, 1), this.fireEvent("stopWorking", this._toolkey), !1
    }
    if(this._focused && "" === this._getTextareaValue(this._focused.badge)) {
      return-1 !== this._focused.highlighterIdx && (this._paint.delGrayCutArea(this._focused.highlighterIdx), this._focused.highlighterIdx = -1), null !== this._focused.glow && (this._focused.glow.remove(), this._focused.glow = null), this._commentList[this._focused.idx] = null, this._focused.boRect.remove(), this._focused.badge.remove(), this._focused = this._hover = !1
    }
    if(0 <= this._selection.idx) {
      return this.resetSelection(), !1
    }
  }
};
UserSnap.tools.Comment.prototype.getToolData = function() {
  var a = [], b = null, c = this._instance.currentEmail, d = this, e = function(a) {
    return Math.round(a * d._instance.screenData.viewportData.mult)
  };
  this._addSVGBubbles();
  for(var f = 0;f < this._commentList.length;f++) {
    void 0 !== this._commentList[f] && null !== this._commentList[f] && (b = this._commentList[f], "" !== this._getTextareaValue(b.badge) ? a.push({rect:[e(b.x), e(b.y), e(b.x + b.width), e(b.y + b.height)], bubblepos:b.bubblePos, comments:[{text:this._getTextareaValue(b.badge), email:c, name:null, time:(new Date).toISOString()}]}) : (b.badge.remove(), b.boRect.remove(), b.bubble.txt.remove(), b.bubble.circ.remove(), -1 !== b.highlighterIdx && (d._paint.delGrayCutArea(b.highlighterIdx), b.highlighterIdx = 
    -1), null !== b.glow && (b.glow.remove(), b.glow = null), this._commentList[f] = null))
  }
  b = {};
  b[this._toolkey] = a;
  return b
};
UserSnap.tools.Comment.prototype.destroy = function() {
  for(var a = this._commentList.slice(), b = 0;b < a.length;b++) {
    a[b] && a[b].destroy()
  }
  this._commentList = []
};
UserSnap.ScreenShot = function() {
  this._iframeCnt = 0;
  this._mult = 1
};
UserSnap.ScreenShot.prototype.getDocType = function(a) {
  var b = "";
  util.isIE7() || util.isIE8() ? (b = a.all[0].text, void 0 === b && (b = "")) : (a = a.doctype, null !== a && void 0 !== a && (b = null === a.systemId ? '<!DOCTYPE HTML PUBLIC "' + a.publicId + '">' : '<!DOCTYPE HTML PUBLIC "' + a.publicId + '" "' + a.systemId + '">'));
  return b
};
UserSnap.ScreenShot.prototype.preProcessing = function(a, b) {
  for(var c = a.getElementsByTagName("canvas"), d = "", e, f = 0;f < c.length;f++) {
    if(!util.isIE7() && !util.isIE8()) {
      try {
        e = c[f].toDataURL(), "data:image" === e.substr(0, 10) && (d += '<uscanvas data-id="' + f + '">' + e + "</uscanvas>")
      }catch(g) {
      }
    }
  }
  return b + d
};
UserSnap.ScreenShot.prototype.getDynamicStyleSheet = function(a) {
  a = a.styleSheets;
  for(var b = "", c = "", d = "", e = 0;e < a.length;e++) {
    if(null === a[e].href || "" === a[e].href) {
      try {
        d = util.isIE7() || util.isIE8() ? a[e].media : a[e].media.mediaText
      }catch(f) {
        continue
      }
      if("print" !== d && (c = "", c = util.isIE8() ? a[e].owningElement.getAttribute("data-us") : a[e].ownerNode.getAttribute("data-us"), "uspss" !== c)) {
        if(util.isIE()) {
          b += a[e].cssText
        }else {
          if(null !== a[e].cssRules) {
            for(var c = [], g = 0;g < a[e].cssRules.length;g++) {
              c.push(a[e].cssRules[g].cssText)
            }
            b += c.join("\n")
          }
        }
      }
    }
  }
  return b
};
UserSnap.ScreenShot.prototype.getFrameRefList = function(a, b) {
  if(void 0 === a) {
    return null
  }
  var c = a.match(/<iframe.+?>[\S\s]*?<\/iframe>/ig);
  if(null === c) {
    return null
  }
  for(var d = [], e = [], f = "", f = "", g = 0;g < c.length;g++) {
    f = c[g], f = f.match(/data-usid=["|'](.+?)["|']/i), null === f ? (d.push(c[g]), e.push("usblank")) : (f = parseInt(f[1], 10), d.push(c[g]), e.push(b.frames[f]))
  }
  return{strList:d, refList:e}
};
UserSnap.ScreenShot.prototype._cleanUpHeadTag = function(a) {
  a = a.getElementsByTagName("head");
  if(1 === a.length) {
    a = a[0];
    for(var b, c = 0;c < a.childNodes.length;c++) {
      if(b = a.childNodes[c].nodeName.toLowerCase(), "div" === b || "p" === b || "img" === b || "form" === b || "span" === b) {
        a.removeChild(a.childNodes[c]), c--
      }
    }
  }
};
UserSnap.ScreenShot.prototype.getDOMString = function(a) {
  if(null === a) {
    return""
  }
  var b = this.getDocType(a);
  this._cleanUpHeadTag(a);
  for(var c = a.getElementsByTagName("*"), d, e, f = 1, g = Math.round, f = this._mult, h = 0, j = c.length;h < j;h++) {
    "function" !== typeof c[h].removeAttribute || ("function" !== typeof c[h].setAttribute || "function" !== typeof c[h].getAttribute) || (c[h].removeAttribute("data-usscrolly"), c[h].removeAttribute("data-usscrollx"), 0 < c[h].scrollTop && c[h].setAttribute("data-usscrolly", g(c[h].scrollTop * f)), 0 < c[h].scrollLeft && c[h].setAttribute("data-usscrollx", g(c[h].scrollLeft * f)), d = c[h], e = d.nodeName.toLowerCase(), "true" !== d.getAttribute("data-usprivacy") && ("input" === e ? "text" === d.getAttribute("type") || 
    null === d.getAttribute("type") || "password" === d.getAttribute("type") || "date" === d.getAttribute("type") || "color" === d.getAttribute("type") || "email" === d.getAttribute("type") || "search" === d.getAttribute("type") || "tel" === d.getAttribute("type") || "url" === d.getAttribute("type") || "number" === d.getAttribute("type") || "range" === d.getAttribute("type") || "week" === d.getAttribute("type") || "month" === d.getAttribute("type") || "time" === d.getAttribute("type") || "datetime-local" === 
    d.getAttribute("type") || "datetime" === d.getAttribute("type") ? d.setAttribute("data-usval", escape(d.value)) : ("checkbox" === d.getAttribute("type") || "radio" === d.getAttribute("type")) && !0 === d.checked && d.setAttribute("data-uscheck", "true") : "select" === e ? d.setAttribute("data-usval", d.value) : "textarea" === e && d.setAttribute("data-usval", escape(d.value))))
  }
  d = null;
  d = "undefined" === typeof a.defaultView ? a.parentWindow : a.defaultView;
  for(c = 0;c < d.frames.length;c++) {
    try {
      d.frames[c].frameElement.setAttribute("data-usid", c)
    }catch(l) {
    }
  }
  c = a.documentElement.outerHTML || (new XMLSerializer).serializeToString(a.documentElement);
  c = c.replace(/\/\*uspssb\*\/.+?\/\*uspsse\*\//g, "");
  h = h = null;
  g = h = "";
  e = this.getFrameRefList(c, d);
  if(null !== e) {
    d = e.strList;
    e = e.refList;
    for(f = 0;f < e.length;f++) {
      "undefined" !== typeof d[f] && (g = d[f], "usblank" === e[f] ? (g = null !== g.match(/(\ssrc=").+?(")/) ? g.replace(/(.+?\ssrc=").+?(".+?)/i, "$1about:usblank$2") : null !== g.match(/(\ssrc=').+?(')/) ? g.replace(/(.+?\ssrc=').+?('.+?)/i, "$1about:usblank$2") : g.replace(/(.+?\ssrc=).+?(\s.+?)/i, "$1about:usblank$2"), c = c.replace(d[f], g)) : (h = e[f].document, h = encodeURIComponent(this.getDOMString(h)), h = '<usframe type="text/javascript" id="usiftag_' + this._iframeCnt + '">{"data":"' + 
      h + '", "id": "usiftag_' + this._iframeCnt + '", "url": "' + e[f].location.href + '"}</usframe>', g = null !== g.match(/(\ssrc=").+?(")/) ? g.replace(/(.+?\ssrc=").+?(".+?)/i, "$1about:blank$2") : null !== g.match(/(\ssrc=').+?(')/) ? g.replace(/(.+?\ssrc=').+?('.+?)/i, "$1about:blank$2") : g.replace(/(.+?\ssrc=).+?(\s.+?)/i, "$1about:blank$2"), c = c.replace(d[f], g + h), this._iframeCnt++))
    }
  }
  c = this.preProcessing(a, c);
  c += "<usstyle>" + this.getDynamicStyleSheet(a) + "</usstyle>";
  if(util.isIE7() || util.isIE8()) {
    c = this._getHtml5TagSupport(a) ? c + "<ushtml5>true</ushtml5>" : c + "<ushtml5>false</ushtml5>"
  }
  return b + c
};
UserSnap.ScreenShot.prototype._getHtml5TagSupport = function(a) {
  if(util.isIE7() || util.isIE8()) {
    a = a.styleSheets;
    for(var b = !1, c = 0;c < a.length;c++) {
      for(var d = 0;d < a[c].rules.length;d++) {
        if("article" === a[c].rules[d].selectorText && "block" === a[c].rules[d].style.display) {
          b = !0;
          break
        }
      }
      if(b) {
        break
      }
    }
    return b
  }
  return!0
};
UserSnap.ScreenShot.prototype.getScreenShot = function() {
  this._iframeCnt = 0;
  return this.getDOMString(document) + "<ustfc>" + this._iframeCnt + "</ustfc>"
};
UserSnap.ScreenShot.prototype.getScreenDataObject = function() {
  var a = util.getViewportInfo();
  this._mult = a.mult;
  return{data:this.getScreenShot(), width:util.getDocWidth(), height:util.getDocHeight(), viewportData:a}
};
UserSnap.Permissions = {};
var toolClasses = {highlight:{cls:UserSnap.tools.Highlight, cnt:0}, pen:{cls:UserSnap.tools.Pen, cnt:0}, note:{cls:UserSnap.tools.Note, cnt:0}, blackout:{cls:UserSnap.tools.Blackout, cnt:0}, arrow:{cls:UserSnap.tools.Arrow, cnt:0}, pixelruler:{cls:UserSnap.tools.PixelRuler, cnt:0}, comment:{cls:UserSnap.tools.Comment, cnt:0}}, instance = {sandbox:null, _mode:"none", _running:!1, _userCfg:null, _html2PngStarted:!1, _html2PngDone:!1, btn:null, _tools:[], _reportQueue:[], _issueWin:null, _toolbox:null, 
_paint:null, _progressDialog:null, _openReportQueue:!1, _gaqEnabled:!1, _gaV:0, sessionId:null, screenData:null, consoleData:null, labels:[], permissions:null, _clientStorage:null, addScreenshot:!0, currentEmail:""};
UserSnap.util.Observable.mixin(instance, !1, !0, ["uiReady"]);
var _pushGaq = function(a) {
  instance._gaqEnabled && (0 === instance._gaV ? window._gaq.push(["_trackEvent", "Usersnap", "click", a]) : window.ga("send", "event", "Usersnap", "click", a))
}, _error = function(a, b, c) {
  instance.fireEvent("error", a, b, c)
}, _preventDefault = function(a, b) {
  "undefined" === typeof b && (b = window);
  a = a || b.event;
  a.preventDefault && a.preventDefault();
  a.returnValue = !1
}, _catchScrollKeys = function(a) {
  for(var b = [37, 38, 39, 40, 33, 34, 35, 36, 32], c = b.length;c--;) {
    if(a.keyCode === b[c]) {
      if(util._recursiveSearchUp(util.getSourceElement(a), "us_report_note_text")) {
        break
      }
      if(util._recursiveSearchUp(util.getSourceElement(a), "us_email_text_box")) {
        break
      }
      if(util._recursiveSearchUp(util.getSourceElement(a), "us_email")) {
        break
      }
      return!1
    }
  }
  return!0
}, _curScrollPos = null, _fixScroll = function() {
  window.scrollTo(_curScrollPos[0], _curScrollPos[1])
}, _onSelectHandler = document.onselectstart, _prevDef = function(a) {
  a.preventDefault && a.preventDefault()
}, _stopScroll = function() {
  if(util.isIE()) {
    instance.sandbox.MINI.$(instance.sandbox.getDocument()).on("mousewheel", _prevDef)
  }
  MINI.$(document).on("keydown", _catchScrollKeys);
  _curScrollPos = util.getScrollOffset();
  MINI.$(document).on("scroll", _fixScroll);
  (util.isIE7() || util.isIE8()) && window.attachEvent("scroll", _fixScroll);
  _onSelectHandler = document.onselectstart;
  document.onselectstart = function() {
    if(util.isIE()) {
      if(!util._recursiveSearchUp(util.getSourceElement(window.event), "us_report_note_text") && !util._recursiveSearchUp(util.getSourceElement(window.event), "us_email_text_box") && !util._recursiveSearchUp(util.getSourceElement(window.event), "us_email") && !util._recursiveSearchUp(util.getSourceElement(window.event), "us_add_email") && !util._recursiveSearchUp(util.getSourceElement(window.event), "us_add_comment")) {
        return!1
      }
    }else {
      return!1
    }
  }
}, _resetScroll = function() {
  MINI.$.off(_prevDef);
  MINI.$.off(_catchScrollKeys);
  MINI.$.off(_fixScroll);
  document.onselectstart = _onSelectHandler
}, _preloadImages = function() {
}, _destroy = function(a) {
  if(!instance._process && null !== instance._issueWin) {
    instance._issueWin.destroy();
    instance._issueWin = null;
    instance._toolbox.destroy();
    instance._toolbox = null;
    instance._progressDialog = null;
    instance._paint.destroy();
    instance._paint = null;
    instance.labels = [];
    instance._html2PngStarted = !1;
    instance._html2PngDone = !1;
    UserSnap.Guide.getInstance().destroy();
    for(var b in toolClasses) {
      toolClasses.hasOwnProperty(b) && (toolClasses[b].cnt = 0)
    }
    for(b = 0;b < instance._tools.length;b++) {
      instance._tools[b].destroy && instance._tools[b].destroy()
    }
    instance._tools = [];
    instance.sessionId = null;
    instance.screenData = null;
    instance.consoleData = null;
    instance.addScreenshot = !0;
    instance.currentEmail = "";
    "finished" !== a && (b = instance._reportQueue[instance._reportQueue.length - 1], null !== b.html2PngRef && UserSnap.util.IframePost.cancelJob(b.html2PngRef), null !== b.sendRef && UserSnap.util.IframePost.cancelJob(b.sendRef));
    instance.sandbox.destroy();
    "resize" === a && null !== instance.sandbox && instance.sandbox.forceDestroy();
    _resetScroll();
    "button" === instance._mode && instance.btn.show();
    instance._process = !1;
    instance._running = !1;
    instance.resetOneTimeEvents();
    "resize" === a || "cancel" === a ? instance.fireEvent("cancel", {type:a}) : instance.fireEvent("finished")
  }
}, _checkLocalDev = function() {
  if(void 0 === instance._userCfg.apiKey || "" === instance._userCfg.apiKey || "YOUR-API-KEY-HERE" === instance._userCfg.apiKey.toUpperCase()) {
    return"button" === instance._mode && window.open(UserSnap.Config.apiErrorUrl + "?apikey=", "_blank"), _error("Invalid API Key", 100), !1
  }
  var a = window.location.href;
  if(0 <= a.indexOf("http://localhost") || 0 <= a.indexOf("https://localhost")) {
    "button" === instance._mode && window.open(UserSnap.Config.apiErrorUrl + "?error=localdevelopment", "_blank");
    _error("Local Development not supported", 101);
    var b = new UserSnap.Dialog({title:util.decEscUTF8(us.i_error), message:'Local development is not supported!<a target="_blank" href="' + UserSnap.Config.apiErrorUrl + '?error=localdevelopment">' + util.decEscUTF8(us.b_needhelp) + "</a>", type:"error"});
    b.listenEvent("btnclicked", function() {
      b.destroy()
    }, this);
    b.show();
    return!1
  }
  return!0
}, _currentlyCancel = !1, _isFeedbackDirty = function() {
  var a = !1;
  if(instance.addScreenshot) {
    for(var b = 0;b < instance._tools.length;b++) {
      if(instance._tools[b].isDirty()) {
        a = !0;
        break
      }
    }
  }
  instance._issueWin.isDirty() && (a = !0);
  return a
}, _cancelClick = function() {
  if(!_currentlyCancel) {
    if(_currentlyCancel = !0, _isFeedbackDirty() && !0 !== instance._userCfg.hideUI) {
      var a = new UserSnap.Confirm({title:util.decEscUTF8(us.i_closequestiontitle), message:util.decEscUTF8(us.i_closequestion)});
      a.listenEvent("btnclicked", function(a) {
        _currentlyCancel = !1;
        "yes" === a && (_pushGaq("cancel"), _destroy("cancel"))
      }, this);
      a.show()
    }else {
      _currentlyCancel = !1, _pushGaq("cancel"), _destroy("cancel")
    }
  }
}, _emailChange = function(a) {
  instance.currentEmail = a;
  instance.fireEvent("emailChange", a)
}, _doHtml2Png = function(a, b) {
  instance._html2PngStarted = !0;
  if(null === instance.sessionId) {
    instance.listenEventOnce("sessionready", function() {
      _doHtml2Png(a, b)
    })
  }else {
    if(void 0 === a) {
      if(b) {
        if(!0 === instance._userCfg.disableB64) {
          a = instance.screenData.data
        }else {
          if("undefined" !== typeof Worker && !util.isSafari()) {
            try {
              var c = new Blob(["self.onmessage = function(e) {\npostMessage(btoa(unescape(encodeURIComponent(e.data))));\n}"], {type:"text/javascript"}), d = window.URL.createObjectURL(c), e = new Worker(d);
              e.onmessage = function(a) {
                _doHtml2Png(a.data, b)
              };
              e.postMessage(instance.screenData.data)
            }catch(f) {
              _doHtml2Png(util.Base64.encode(instance.screenData.data), b)
            }
          }else {
            _doHtml2Png(util.Base64.encode(instance.screenData.data), b)
          }
          return
        }
      }else {
        a = ""
      }
    }
    c = new UserSnap.util.IframePost({callback:{fn:function() {
    }, scope:this}, url:UserSnap.Config.UrlHtml2png});
    c.listenEvent("error", function(a, b) {
      var c = "", c = "postCB" === a ? "EC: " + b.RC + ", " + b.message : a;
      (new UserSnap.Dialog({title:util.decEscUTF8(us.i_error), message:"A serious error has occured! (" + c + ")", type:"error", autoClose:!0})).show();
      _destroy("error")
    }, this);
    instance._reportQueue[instance._reportQueue.length - 1].html2PngRef = c._uniqueId;
    c.addFormField("api", instance._userCfg.apiKey);
    c.addFormField("sessionid", instance.sessionId);
    c.addFormField("hlen", instance.screenData.data.length);
    c.addFormField("html", a);
    c.addFormField("addScreenshot", b);
    c.addFormField("useragent", navigator.userAgent || navigator.vendor || window.opera);
    "undefined" !== typeof instance.screenData.viewportData && c.addFormField("viewportData", MINI.$.toJSON(instance.screenData.viewportData));
    d = util.getViewport(!0);
    e = util.getScrollOffset();
    c.addFormField("vpleft", Math.round(1 * e[0]));
    c.addFormField("vptop", Math.round(1 * e[1]));
    util.checkMobile() ? (c.addFormField("vpwidth", instance.screenData.viewportData.deviceWidth), c.addFormField("vpheight", instance.screenData.viewportData.deviceHeight)) : (c.addFormField("vpwidth", Math.round(1 * d.width)), c.addFormField("vpheight", Math.round(1 * d.height)));
    "string" === typeof instance._userCfg.staticResBaseUrl && c.addFormField("location-staticresbaseurl", instance._userCfg.staticResBaseUrl);
    "string" === typeof instance._userCfg.forceLocation ? c.addFormField("location", instance._userCfg.forceLocation) : c.addFormField("location", window.location.href);
    void 0 !== instance._userCfg.isUpload && c.addFormField("isUpload", instance._userCfg.isUpload);
    instance._userCfg.consoleRecorder && c.addFormField("consoledata", instance.consoleData);
    c.addFormField("browserreftime", (new Date).getTime());
    UserSnap.util.IframePost.enQueue(c);
    instance._html2PngDone = !0;
    instance.fireEvent("html2pngdone")
  }
}, _sendReport = function() {
  if(instance._process) {
    return!1
  }
  if(!_isFeedbackDirty() && !0 !== instance._userCfg.hideUI) {
    return(new UserSnap.Dialog({type:"warning", title:util.decEscUTF8(us.i_warning), message:util.decEscUTF8(us.i_feedbacknotvalid), autoClose:!0})).show(), !1
  }
  if(!instance._issueWin.validateForm()) {
    return!1
  }
  var a = instance._issueWin.getFormData(), b = void 0 === instance._userCfg.addScreenshot || instance._userCfg.addScreenshot;
  void 0 !== a.addscreenshot && (b = a.addscreenshot);
  if(!instance._progressDialog) {
    var c = us.i_thanks;
    b || (c = us.i_thanksfeedback);
    instance._progressDialog = new UserSnap.Progress({message:util.decEscUTF8(c), showFinished:!0});
    instance._progressDialog.listenEvent("complete", function() {
      instance.fireEvent("afterSend", instance.sessionId);
      instance._process = !1;
      _destroy("finished")
    });
    instance._progressDialog.start()
  }
  if(null === instance.sessionId) {
    return instance.listenEventOnce("sessionready", function() {
      _sendReport()
    }), !0
  }
  if(!instance._html2PngStarted || !instance._html2PngDone) {
    return instance.listenEventOnce("html2pngdone", function() {
      _sendReport()
    }), instance._html2PngStarted || _doHtml2Png(void 0, b), !0
  }
  instance._process = !0;
  _pushGaq("send");
  if(!instance._userCfg.label && void 0 !== instance._userCfg.labels) {
    c = instance._userCfg.labels;
    c instanceof Array || (c = instance._userCfg.labels.split(","));
    for(var d = [], e = 0;e < c.length;e++) {
      d.push(c[e])
    }
    0 < d.length && (a.label = d)
  }
  void 0 === a.title && void 0 !== instance._userCfg.titleValue && (a.title = instance._userCfg.titleValue);
  c = new UserSnap.util.IframePost({callback:{fn:function() {
  }, scope:this}, url:UserSnap.Config.UrlSendreport});
  c.listenEvent("error", function(a, b) {
    var c = "", c = "postCB" === a ? "EC: " + b.RC + ", " + b.message : a;
    (new UserSnap.Dialog({title:util.decEscUTF8(us.i_error), message:"A serious error has occured! (" + c + ")", type:"error", autoClose:!0})).show();
    instance._process = !1;
    _destroy("error")
  }, this);
  instance._reportQueue[instance._reportQueue.length - 1].sendRef = c._uniqueId;
  var d = {}, e = null, f;
  for(f in instance._tools) {
    if(instance._tools.hasOwnProperty(f)) {
      var e = instance._tools[f].getToolData(), g;
      for(g in e) {
        e.hasOwnProperty(g) && (d[g] = e[g])
      }
    }
  }
  f = {email:a.senderemail, comment:a.sendercomment, label:a.label, title:a.title, assignee:a.assignee, addInfo:null};
  void 0 !== instance._userCfg.addinfo && (f.addInfo = instance._userCfg.addinfo);
  void 0 !== a.customfields && (null === f.addInfo && (f.addInfo = {}), f.addInfo.customfields = a.customfields);
  instance.fireEvent("beforeSend", f);
  a.senderemail !== f.email && (a.senderemail = f.email);
  a.sendercomment !== f.comment && (a.sendercomment = f.comment);
  a.label !== f.label && (a.label = f.label);
  a.title !== f.title && (a.title = f.title);
  a.assignee !== f.assignee && (a.assignee = f.assignee);
  void 0 !== a.senderemail && instance._clientStorage.writeVar("usersnap_email", a.senderemail);
  void 0 !== a.assignee && c.addFormField("assignee", a.assignee);
  void 0 !== a.title && c.addFormField("title", a.title);
  void 0 !== a.label && c.addFormField("label", a.label);
  void 0 !== a.addscreenshot && c.addFormField("addscreenshot", a.addscreenshot);
  c.addFormField("api", instance._userCfg.apiKey);
  null !== f.addInfo && (a = MINI.$.toJSON(f.addInfo), 5E4 < a.length && (a = a.slice(0, 49995) + "[...]", window.console && window.console.warn("Your addInfo object exceeds 50000 characters and has been cropped automatically.")), c.addFormField("additionalinfo", a));
  void 0 !== f.email && c.addFormField("senderemail", f.email);
  void 0 !== f.comment && c.addFormField("sendercomment", f.comment);
  instance._paint.clearAllSelections();
  c.addFormField("maskid", 2);
  c.addFormField("sessionid", instance.sessionId);
  c.addFormField("useragent", navigator.userAgent || navigator.vendor || window.opera);
  b && (c.addFormField("imgdata", MINI.$.toJSON(d)), c.addFormField("svgdata", instance._paint.getSVGData()));
  c.addFormField("meta", MINI.$.toJSON({cookieEnabled:navigator.cookieEnabled}));
  b = util.getInstalledPlugins();
  c.addFormField("pluginlist", MINI.$.toJSON(b));
  b = util.getScreenSize();
  c.addFormField("screensize", MINI.$.toJSON(b));
  c.listenEvent("success", function() {
    instance._progressDialog.finish()
  }, this);
  c.listenEvent("error", function() {
    instance._progressDialog.destroy()
  }, this);
  UserSnap.util.IframePost.enQueue(c);
  instance.fireEvent("startSend");
  return!0
}, _openUI = function() {
  instance._reportQueue.push({html2PngRef:null, sendRef:null});
  instance._issueWin = new UserSnap.IssueWindow;
  instance._toolbox = new UserSnap.Toolbox;
  instance._paint = new UserSnap.Paint({highlight:!0});
  instance._toolbox.registerSelectionMgr(instance._paint.getSelectionManager());
  instance._paint.getSelectionManager().listenEvent("select", function(a) {
    instance.fireEvent("selectObject", a)
  }, this);
  instance._issueWin.listenEvent("send", _sendReport, this);
  instance._issueWin.listenEvent("cancel", _cancelClick, this);
  instance._issueWin.listenEvent("emailChange", _emailChange, this);
  instance._toolbox.listenEvent("cancel", _cancelClick, this);
  instance._toolbox.listenEvent("startWorking", function() {
    instance._issueWin.clearFormFocus();
    !0 === instance._userCfg.addScreenshotSelect || !1 === instance._userCfg.addScreenshot || window.setTimeout(function() {
      instance._html2PngStarted || _doHtml2Png(void 0, !0)
    }, 5E3)
  }, this);
  instance._tools = [];
  for(var a = [], b = null, b = null, c = 0;c < instance._userCfg.tools.length;c++) {
    b = instance._userCfg.tools[c], void 0 !== toolClasses[b] && 0 === toolClasses[b].cnt && (toolClasses[b].cnt++, a.push({name:b, tool:!0}), b = new toolClasses[b].cls, instance._toolbox.addTool(b), instance._paint.addTool(b), instance._tools.push(b))
  }
  a.push({name:"email", tool:!1});
  a.push({name:"commentbox", tool:!1});
  var d = UserSnap.Guide.getInstance();
  d.configureStoryBoard(a);
  d.listenEvent("end", function() {
    instance.fireEvent("guideEnd")
  }, this);
  d.listenEvent("start", function() {
    instance.fireEvent("guideStart")
  }, this);
  instance._paint.listenEvent("cancel", _cancelClick, this);
  instance._issueWin.listenEvent("ready", function() {
    instance.fireEvent("uiReady")
  }, this);
  instance._toolbox.show();
  instance._issueWin.show();
  instance._issueWin.enable();
  instance._toolbox.start();
  window.setTimeout(function() {
    d.start()
  }, 800);
  UserSnap.util.JsonP.request({url:UserSnap.Config.UrlSessionkey, params:{api:instance._userCfg.apiKey, url:util.parseURL(window.location.href), jsVersion:UserSnap.Config.jsVersion}, callback:function(a, b) {
    if(null !== instance._issueWin) {
      var c;
      if(b) {
        if(a && 1 !== a.RC) {
          var d = a.message, j = a.RC;
          if("" !== d) {
            var l = "", l = -1 === j ? d + '&nbsp;<a class="help" target="_blank" href="' + UserSnap.Config.apiErrorUrl + "?apikey=" + instance._userCfg.apiKey + '">' + util.decEscUTF8(us.b_needhelp) + "</a>" : -2 === j ? d + '&nbsp;<a class="help" target="_blank" href="' + UserSnap.Config.apiErrorUrl + '?error=localdevelopment">' + util.decEscUTF8(us.b_needhelp) + "</a>" : -5 === j ? d + '&nbsp;<a class="help" target="_blank" href="' + UserSnap.Config.apiErrorUrl + '?apikey=">' + util.decEscUTF8(us.b_needhelp) + 
            "</a>" : d + " (" + j + ")";
            _error(d, 102, j);
            c = new UserSnap.Dialog({title:util.decEscUTF8(us.i_error), message:l, type:"error"});
            c.listenEvent("btnclicked", function() {
              c.destroy()
            }, this);
            c.show();
            _destroy("error");
            return
          }
          _destroy("error")
        }
        instance.permissions = a.permissions;
        _pushGaq("open");
        void 0 !== a.user_info && !0 === a.user_info.showPowered && instance._toolbox.showPowered();
        !0 === instance._userCfg.assignee && void 0 !== a.assignee_list && instance._issueWin.updateSelectField("assignee", a.assignee_list, void 0);
        void 0 !== a.label_list && (instance.labels = a.label_list);
        !0 === instance._userCfg.label && void 0 !== a.label_list && (instance._issueWin.updateSelectField("label", a.label_list), instance._userCfg.labels && instance._issueWin.setFormField("label", instance._userCfg.labels));
        instance.sessionId = a.sessionkey;
        instance.fireEvent("sessionready", instance.sessionId)
      }else {
        util.decEscUTF8(us.i_apikey), _error("communication error", 105), c = new UserSnap.Dialog({title:util.decEscUTF8(us.i_error), message:"A serious error has occured!", type:"error"}), c.listenEvent("btnclicked", function() {
          c.destroy()
        }, this), c.show(), _destroy("error")
      }
    }
  }, scope:this})
}, _getScreenshot = function() {
  var a = new UserSnap.ScreenShot;
  instance.screenData = a.getScreenDataObject();
  instance._userCfg.consoleRecorder && (instance.consoleData = UserSnap.ConsoleRecorder.getInstance().getMessagesJSON())
}, _startUsersnap = function() {
  if(!instance._running) {
    instance._running = !0;
    "button" === instance._mode && instance.btn.hide();
    instance.sandbox = new UserSnap.Sandbox;
    instance.sandbox.listenEvent("destroy", function() {
      instance.sandbox = null
    });
    instance.fireEvent("beforeScreenshot");
    _getScreenshot();
    instance.sandbox.listenEvent("initialized", function() {
      _checkLocalDev() ? (_stopScroll(), instance.fireEvent("beforeOpen"), _openUI()) : ("button" === instance._mode && instance.btn.show(), instance.sandbox.destroy(), instance._running = !1)
    });
    var a = [], b = "", c = "usersnap-" + instance._userCfg.theme + ".css";
    UserSnap.Config.devDebug ? a.push(UserSnap.Config.homeHost + "css/" + c + "?dc=" + (new Date).getTime()) : a.push(UserSnap.Config.homeHost + "res/" + UserSnap.Config.cssVersion + "/css/" + c);
    void 0 !== instance._userCfg.customCssFile && a.push(instance._userCfg.customCssFile);
    void 0 !== instance._userCfg.customCssString && (b += instance._userCfg.customCssString);
    instance.sandbox.init({css:a, cssString:b});
    _preloadImages()
  }
}, _resizeWindowHandler = function() {
  instance._running && _destroy("resize");
  return!0
}, _keyDownHandler = function(a) {
  return!0 === instance._userCfg.shortcut && 85 === a.keyCode && !0 === a.ctrlKey ? (UserSnap.openReportWindow(), !1) : !0
}, _finalDestroy = function() {
  null !== instance._issueWin && _destroy("restart");
  null !== instance.btn && instance.btn.destroy();
  null !== _keyDownHandler && MINI.$.off(_keyDownHandler);
  null !== _resizeWindowHandler && (window.removeEventListener ? window.removeEventListener("resize", _resizeWindowHandler, !1) : window.detachEvent && window.detachEvent("onresize", _resizeWindowHandler))
}, _maxInitCtn = 10, _tmpCfg = null, _isInit = function(a) {
  "undefined" !== typeof a && (_tmpCfg = a);
  null === document || null === document.body ? (_maxInitCtn--, 0 <= _maxInitCtn && window.setTimeout(_isInit, 200)) : UserSnap.init(_tmpCfg)
}, _getClientStorage = function() {
  var a = ["usersnap_email", "usersnap_guide", "usersnap_name", "usersnap_toolboxposition_x", "usersnap_toolboxposition_y"];
  return{writeVar:function(b, c) {
    for(var d = !1, e = 0;e < a.length;e++) {
      if(a[e] === b) {
        d = !0;
        break
      }
    }
    if(!d) {
      return!1
    }
    try {
      window.localStorage.setItem(b, c)
    }catch(f) {
    }
    return!0
  }, readVar:function(a, c) {
    var d;
    try {
      d = window.localStorage.getItem(a)
    }catch(e) {
      d = null
    }
    return null === d && void 0 !== c ? c : d
  }}
}, _defaultConfiguration = function(a) {
  void 0 === a.emailBox && (a.emailBox = !0);
  void 0 === a.commentBox && (a.commentBox = !0);
  void 0 === a.valign && (a.valign = "bottom");
  void 0 === a.halign && (a.halign = "right");
  var b = {redalert:1, "default":1, zuckerberg:1, brownie:1, ptiy:1, redmond:1, emerald:1, lemon:1, darknight:1, contrast:1, grass:1, medic:1, pinkabell:1, classic:1, snapbugz:1, paymill:1, inapp:1, default2014:1};
  if(void 0 === a.theme || 1 !== b[a.theme]) {
    a.theme = "default"
  }
  void 0 === a.tools && (a.tools = "highlight pen note blackout arrow pixelruler".split(" "));
  !0 === a.hideUI && (a.tools = "highlight pen note blackout arrow pixelruler comment".split(" "), a.emailBox = !0, a.commentBox = !0, a.assignee = !0, a.label = !0, a.title = !0);
  if("object" === typeof a.langOverride && null !== a.langOverride) {
    for(var c in a.langOverride) {
      us.hasOwnProperty(c) && (us[c] = a.langOverride[c])
    }
  }
  void 0 === a.consoleRecorder && (a.consoleRecorder = !1);
  void 0 === a.consoleRecorderCfg && (a.consoleRecorderCfg = {})
}, _exportApi = function() {
  var a = this;
  return{sendReport:function() {
    return _sendReport.apply(a)
  }, startUsersnap:function() {
    _startUsersnap.apply(window)
  }, closeUsersnap:function() {
    _cancelClick.apply(a)
  }, selectTool:function(a) {
    if(null === instance._toolbox) {
      return!1
    }
    a = instance._toolbox._getToolIndex(a);
    if(-1 === a) {
      return!1
    }
    instance._toolbox._clickTool(a);
    return!0
  }, getActiveTool:function() {
    return null === instance._toolbox ? null : instance._toolbox._activeTool._toolkey
  }, setFormField:function(a, c) {
    return null === instance._issueWin ? (instance.listenEvent("uiReady", function() {
      window.setTimeout(function() {
        instance._issueWin.setFormField(a, c)
      }, 100)
    }), null) : instance._issueWin.setFormField(a, c)
  }, setUserInformation:function(a, c) {
    instance._clientStorage.writeVar("usersnap_email", a);
    instance._clientStorage.writeVar("usersnap_name", c)
  }, changeToolSetting:function() {
    try {
      return instance._toolbox._activeTool._setSettings.apply(instance._toolbox._activeTool, arguments), !0
    }catch(a) {
      return!1
    }
  }}
};
UserSnap.getInstance = function() {
  return instance
};
UserSnap.on = function(a, b, c) {
  "undefined" === typeof c && (c = window);
  "string" !== typeof a && (a = "");
  "function" === typeof b && instance.listenEvent(a, b, c)
};
UserSnap.openReportWindow = function() {
  "none" === instance._mode ? instance._openReportQueue || (instance.listenEvent("load", function() {
    _startUsersnap()
  }), instance._openReportQueue = !0) : _startUsersnap()
};
UserSnap.setLanguage = function(a, b) {
  var c = {en:"en", fr:"fr", es:"es", pl:"pl", fa:"fa", de:"de-formal", "de-formal":"de-formal", "de-informal":"de-informal", it:"it", jp:"jp", ko:"ko", hu:"hu", da:"da", sk:"sk", cz:"cz", no:"no", nl:"nl", fi:"fi", pt:"pt", sv:"sv", tr:"tr", ru:"ru", hr:"hr", bg:"bg", zh:"zh", "zh-tw":"zh-TW", is:"is", "fr-ca":"fr-CA", "pt-br":"pt-BR", "es-419":"es-419", ro:"ro"};
  if("undefined" === typeof a || "auto" === a) {
    for(var d = [].concat(navigator.languages || []).concat(navigator.language ? navigator.language.match(/^([a-z]{2,3})(?:-[a-zA-Z]{4})?(?:-[a-zA-Z]{2,3})?$/) : []).concat(navigator.userLanguage || []).concat(["en"]), e = 0;e < d.length;e++) {
      if("undefined" !== typeof c[d[e].toLowerCase()]) {
        a = c[d[e].toLowerCase()];
        break
      }
    }
  }
  if("undefined" !== typeof c[a.toLowerCase()]) {
    _finalDestroy();
    var f = document.createElement("script");
    f.type = "text/javascript";
    f.async = !0;
    f.src = UserSnap.Config.homeHost + "js/" + UserSnap.Config.jsVersion + "/usersnap2-" + UserSnap.Config.jsVersion + UserSnap.Config.buildSuffix + "-" + c[a.toLowerCase()] + ".js";
    c = document.getElementsByTagName("head")[0];
    if("function" === typeof b) {
      var g = function() {
        if(util.isIE7() || util.isIE8()) {
          if("loaded" !== f.readyState) {
            return
          }
          window.detachEvent("onreadystatechange", g)
        }else {
          window.removeEventListener("load", g, !1)
        }
        try {
          b()
        }catch(a) {
        }
      };
      if(util.isIE7() || util.isIE8()) {
        f.onreadystatechange = g
      }else {
        MINI.$(f).on("load", g)
      }
    }
    c.appendChild(f)
  }
};
UserSnap.setEmailBox = function(a) {
  null !== instance._issueWin ? instance._issueWin.setFormField("email", a) : instance._userCfg.emailBoxValue = a
};
UserSnap.toggleButton = function(a) {
  "button" === instance._mode && (!0 === a ? instance.btn.show() : !1 === a ? instance.btn.hide() : instance.btn.isVisible() ? instance.btn.hide() : instance.btn.show())
};
UserSnap.init = function(a) {
  "none" !== instance._mode ? window.console && window.console.warn("An instance was already initialized!") : ("function" === typeof a.errorHandler && instance.listenEvent("error", a.errorHandler), "function" === typeof a.cancelHandler && instance.listenEvent("cancel", a.cancelHandler), "function" === typeof a.beforeSend && instance.listenEvent("beforeSend", a.beforeSend), "function" === typeof a.beforeOpen && instance.listenEvent("beforeOpen", a.beforeOpen), "function" === typeof a.beforeScreenshot && 
  instance.listenEvent("beforeScreenshot", a.beforeScreenshot), "function" === typeof a.afterSend && instance.listenEvent("afterSend", a.afterSend), "function" === typeof a.loadHandler && instance.listenEvent("load", a.loadHandler), util.checkMobile() ? _error("Currently no mobile browser supported!", 103) : (_defaultConfiguration(a), instance._userCfg = a, instance._clientStorage = _getClientStorage(), MINI.$(document).on("keydown", _keyDownHandler), window.addEventListener ? window.addEventListener("resize", 
  _resizeWindowHandler, !1) : window.attachEvent && window.attachEvent("onresize", _resizeWindowHandler), !0 === a.api && (window.UserSnap.api = _exportApi()), !0 === a.ga && ("undefined" !== typeof window._gaq ? (instance._gaV = 0, instance._gaqEnabled = !0) : "undefined" !== typeof window.ga && (instance._gaV = 1, instance._gaqEnabled = !0)), "report" === a.mode ? instance._mode = "report" : (instance.btn = new UserSnap.Button({valign:a.valign, halign:a.halign, text:a.btnText, theme:a.theme}), 
  instance.btn.listenEvent("click", _startUsersnap, window), instance._mode = "button"), UserSnap.util.IframePost._initPostMessageFrame(), a.consoleRecorder && UserSnap.ConsoleRecorder.getInstance(MINI), instance.fireEvent("load")))
};
UserSnap.version = {};
UserSnap.version.jsVersion = UserSnap.Config.jsVersion;
UserSnap.version.cssVersion = UserSnap.Config.cssVersion;
UserSnap.Config.devDebug || (window.UserSnap.setLanguage = UserSnap.setLanguage, window.UserSnap.setEmailBox = UserSnap.setEmailBox, window.UserSnap.toggleButton = UserSnap.toggleButton, window.UserSnap.openReportWindow = UserSnap.openReportWindow, window.UserSnap.version = UserSnap.version, window.UserSnap.on = UserSnap.on);
if("undefined" !== typeof window._usersnapconfig) {
  var usc = window._usersnapconfig, cfg = {apiKey:usc.apiKey, valign:usc.valign, halign:usc.halign, lang:usc.lang, tools:usc.tools, btnText:usc.btnText, commentRequired:usc.commentRequired, commentBox:usc.commentBox, commentBoxPlaceholder:usc.commentBoxPlaceholder, commentBoxValue:usc.commentBoxValue, emailRequired:usc.emailRequired, emailBox:usc.emailBox, emailBoxPlaceholder:usc.emailBoxPlaceholder, emailBoxValue:usc.emailBoxValue, beforeSend:usc.beforeSend, beforeOpen:usc.beforeOpen, beforeScreenshot:usc.beforeScreenshot, 
  afterSend:usc.afterSend, cancelHandler:usc.cancelHandler, errorHandler:usc.errorHandler, loadHandler:usc.loadHandler, mode:usc.mode, shortcut:usc.shortcut, addinfo:usc.addinfo, staticResBaseUrl:usc.staticResBaseUrl, forceLocation:usc.forceLocation, disableB64:usc.disableB64, theme:usc.theme, langOverride:usc.langOverride, hideTour:usc.hideTour, consoleRecorder:usc.consoleRecorder, consoleRecorderCfg:usc.consoleRecorderCfg, assignee:usc.assignee, assigneeRequired:usc.assigneeRequired, assigneePlaceholder:usc.assigneePlaceholder, 
  label:usc.label, labelRequired:usc.labelRequired, labelPlaceholder:usc.labelPlaceholder, labelMultiSelect:usc.labelMultiSelect, labelAllowCreate:usc.labelAllowCreate, labels:usc.labels, customfields:usc.customfields, hideUI:usc.hideUI, api:usc.api, ga:usc.ga, title:usc.title, titleRequired:usc.titleRequired, titlePlaceholder:usc.titlePlaceholder, titleValue:usc.titleValue, customCssFile:usc.customCssFile, customCssString:usc.customCssString, addScreenshotSelect:usc.addScreenshotSelect, addScreenshot:usc.addScreenshot, 
  isUpload:usc.isUpload};
  "undefined" !== typeof usc.hostconfig && (UserSnap.Config.homeHost = usc.hostconfig.homeHost, UserSnap.Config.UrlSessionkey = usc.hostconfig.UrlSessionkey, UserSnap.Config.UrlHtml2pngAndSend = usc.hostconfig.UrlHtml2pngAndSend, UserSnap.Config.UrlHtml2png = usc.hostconfig.UrlHtml2png, UserSnap.Config.UrlSendreport = usc.hostconfig.UrlSendreport, UserSnap.Config.apiErrorUrl = usc.hostconfig.apiErrorUrl);
  _isInit(cfg)
}
;
})();
