/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function(){(window.wpCoreControlsBundle=window.wpCoreControlsBundle||[]).push([[0],{555:function(xa,ta,n){n.r(ta);n.d(ta,"ByteRangeRequest",function(){return w});var qa=n(0),na=n(1);n.n(na);var oa=n(3),ia=n(186);xa=n(116);var la=n(311),ha=n(86),z=n(91),aa=n(310),r=n(205);n=n(476);var h=[],e=[],a=window,b=function(){return function(){this.np=1}}(),f;(function(y){y[y.UNSENT=0]="UNSENT";y[y.DONE=4]="DONE"})(f||(f={}));var w=function(){function y(ba,x,fa,ca){var ma=this;this.url=ba;this.range=x;this.zg=fa;this.withCredentials=
ca;this.Vea=f;this.request=new XMLHttpRequest;this.request.open("GET",this.url,!0);a.Uint8Array&&(this.request.responseType="arraybuffer");ca&&(this.request.withCredentials=ca);ea.DISABLE_RANGE_HEADER||(Object(na.isUndefined)(x.stop)?this.request.setRequestHeader("Range","bytes="+x.start):this.request.setRequestHeader("Range",["bytes=",x.start,"-",x.stop-1].join("")));fa&&Object.keys(fa).forEach(function(ka){ma.request.setRequestHeader(ka,fa[ka])});this.request.overrideMimeType?this.request.overrideMimeType("text/plain; charset=x-user-defined"):
this.request.setRequestHeader("Accept-Charset","x-user-defined");this.status=aa.a.NOT_STARTED}y.prototype.start=function(ba){var x=this,fa=this.request;fa.onreadystatechange=function(){if(x.aborted)return x.status=aa.a.ABORTED,ba({code:aa.a.ABORTED});if(this.readyState===x.Vea.DONE){x.tI();var ca=0===window.document.URL.indexOf("file:///");200===fa.status||206===fa.status||ca&&0===fa.status?(ca=a.I3(this),x.LV(ca,ba)):(x.status=aa.a.ERROR,ba({code:x.status,status:x.status}))}};this.request.send(null);
this.status=aa.a.STARTED};y.prototype.LV=function(ba,x){this.status=aa.a.SUCCESS;if(x)return x(!1,ba)};y.prototype.abort=function(){this.tI();this.aborted=!0;this.request.abort()};y.prototype.tI=function(){var ba=Object(r.c)(this.url,this.range,e);-1!==ba&&e.splice(ba,1);if(0<h.length){ba=h.shift();var x=new y(ba.url,ba.range,this.zg,this.withCredentials);ba.request=x;e.push(ba);x.start(Object(r.d)(ba))}};y.prototype.extend=function(ba){var x=Object.assign({},this,ba.prototype);x.constructor=ba;return x};
return y}(),ea=function(y){function ba(x,fa,ca,ma,ka){ca=y.call(this,x,ca,ma)||this;ca.ll={};ca.AG=fa;ca.url=x;ca.DISABLE_RANGE_HEADER=!1;ca.ZC=w;ca.$W=3;ca.zg=ka||{};return ca}Object(qa.c)(ba,y);ba.prototype.kA=function(x,fa,ca){var ma=-1===x.indexOf("?")?"?":"&";switch(ca){case !1:case z.a.NEVER_CACHE:x=x+ma+"_="+Object(na.uniqueId)();break;case !0:case z.a.CACHE:x=x+ma+"_="+fa.start+","+(Object(na.isUndefined)(fa.stop)?"":fa.stop)}return x};ba.prototype.S0=function(x,fa,ca,ma){void 0===ca&&(ca=
{});return new this.ZC(x,fa,ca,ma)};ba.prototype.Poa=function(x,fa,ca,ma,ka){for(var ja=0;ja<h.length;ja++)if(Object(na.isEqual)(h[ja].range,fa)&&Object(na.isEqual)(h[ja].url,x))return h[ja].ri.push(ma),h[ja].KJ++,null;for(ja=0;ja<e.length;ja++)if(Object(na.isEqual)(e[ja].range,fa)&&Object(na.isEqual)(e[ja].url,x))return e[ja].ri.push(ma),e[ja].KJ++,null;ca={url:x,range:fa,AG:ca,ri:[ma],KJ:1};if(0===h.length&&e.length<this.$W)return e.push(ca),ca.request=this.S0(x,fa,ka,this.withCredentials),ca;h.push(ca);
return null};ba.prototype.mr=function(x,fa,ca){var ma=this.kA(x,fa,this.AG);(x=this.Poa(ma,fa,this.AG,ca,this.zg))&&x.request.start(Object(r.d)(x));return function(){var ka=Object(r.c)(ma,fa,e);if(-1!==ka){var ja=--e[ka].KJ;0===ja&&e[ka].request&&e[ka].request.abort()}else ka=Object(r.c)(ma,fa,h),-1!==ka&&(ja=--h[ka].KJ,0===ja&&h.splice(ka,1))}};ba.prototype.a3=function(){return{start:-ia.a}};ba.prototype.ota=function(){var x=-(ia.a+ia.e);return{start:x-ia.d,end:x}};ba.prototype.hx=function(x){var fa=
this;this.JG=!0;var ca=ia.a;this.mr(this.url,this.a3(),function(ma,ka,ja){function ra(){var pa=fa.Be.X2();fa.mr(fa.url,pa,function(sa,ua){if(sa)return Object(oa.j)("Error loading central directory: "+sa),x(sa);ua=Object(ha.a)(ua);if(ua.length!==pa.stop-pa.start)return x("Invalid XOD file: Zip central directory data is wrong size! Should be "+(pa.stop-pa.start)+" but is "+ua.length);fa.Be.u8(ua);fa.CO=!0;fa.JG=!1;return x(!1)})}if(ma)return Object(oa.j)("Error loading end header: "+ma),x(ma,ka,ja);
ka=Object(ha.a)(ka);if(ka.length!==ca)return x("Invalid XOD file: Zip end header data is wrong size!");try{fa.Be=new la.a(ka)}catch(pa){return x(pa)}fa.Be.Eva?fa.mr(fa.url,fa.ota(),function(pa,sa){if(pa)return Object(oa.j)("Error loading zip64 header: "+pa),x(pa);sa=Object(ha.a)(sa);fa.Be.ewa(sa);ra()}):ra()})};ba.prototype.C3=function(x){x(Object.keys(this.Be.Kq))};ba.prototype.RT=function(x,fa){var ca=this;if(this.Be.E0(x)){var ma=this.Be.aB(x);if(ma in this.ll){var ka=this.Oi[x];ka.Lv=this.ll[ma];
ka.Lv.np++;ka.cancel=ka.Lv.cancel}else{var ja=this.Be.hra(x),ra=this.mr(this.url,ja,function(sa,ua){sa?(Object(oa.j)('Error loading part "'+x+'": '+sa),ca.mr(ca.url,ja,function(wa,Fa){if(wa)return fa(wa,x);ca.y8(Fa,ja,ma,x,fa)})):ca.y8(ua,ja,ma,x,fa)}),pa=this.Oi[x];pa&&(pa.qaa=!0,pa.cancel=function(){pa.Lv.np--;0===pa.Lv.np&&(ra(),delete ca.ll[ma])},this.ll[ma]=new b(ma),pa.Lv=this.ll[ma],pa.Lv.cancel=pa.cancel)}}else delete this.Oi[x],fa(Error('File not found: "'+x+'"'),x)};ba.prototype.y8=function(x,
fa,ca,ma,ka){if(x.length!==fa.stop-fa.start)ka(Error("Part data is wrong size!"),ma);else{do{if(!this.ll[ca])return;ma=this.ll[ca].np;for(var ja=fa.ku.length,ra=0;ra<ja;++ra){var pa=fa.ku[ra];ka(!1,pa.hu,x["string"===typeof x?"substring":"subarray"](pa.start,pa.stop),this.Be.Z4(pa.hu));pa.hu in this.Oi&&delete this.Oi[pa.hu]}}while(ma!==this.ll[ca].np);delete this.ll[ca]}};ba.DISABLE_RANGE_HEADER=!1;ba.$W=3;return ba}(xa.a);(function(y){function ba(x,fa,ca){var ma=y.call(this)||this,ka;for(ka in x)ma[ka]=
x[ka];ma.PJa=x;ma.startOffset=fa;ma.endOffset=ca;ma.S0=function(ja,ra,pa,sa){Object(na.isUndefined)(ra.stop)?(ra.start+=ma.endOffset,ra.stop=ma.endOffset):(ra.start+=ma.startOffset,ra.stop+=ma.startOffset);ja=ma.kA(ma.url,ra,ma.AG);return new x.ZC(ja,ra,pa,sa)};return ma}Object(qa.c)(ba,y);return ba})(ea);Object(n.a)(ea);Object(n.b)(ea);ta["default"]=ea}}]);}).call(this || window)