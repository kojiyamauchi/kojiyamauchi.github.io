"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[387],{3387:function(e,n,t){t.r(n),t.d(n,{LinkCube:function(){return c}});var r=t(5893),o=t(2212),i=t(7294),u=t(6447),s=function(e,n,t){var r=e,o=n,i=t;return window.innerWidth<=767?r:window.innerWidth>=768&&window.innerWidth<=1024?o:i},a=function(e){return e?window.innerWidth<=1024?1.4:1.5:window.innerWidth<=1024?.5:.6},c=function(e){var n=e.textureName,t=e.linkUrl,c=e.positionValue,d=e.rotate,f=e.storybook,m=function(e,n,t,r){var c=(0,i.useRef)(null),d=(0,i.useState)(s(n.x.mobile,n.x.tablet,n.x.deskTop)),f=d[0],m=d[1],l=(0,i.useState)(s(n.y.mobile,n.y.tablet,n.y.deskTop)),w=l[0],b=l[1],x=(0,i.useState)(a(r)),y=x[0],v=x[1],p=(0,u.U2)(o.TextureLoader,"".concat("","/images/texture_").concat(e,".png"));(0,u.xQ)((function(){c.current.rotation.x+=t.x,c.current.rotation.y+=t.y,c.current.rotation.z+=t.z})),(0,i.useEffect)((function(){var e=function(){return m(s(n.x.mobile,n.x.tablet,n.x.deskTop))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n.x.deskTop,n.x.mobile,n.x.tablet,f]),(0,i.useEffect)((function(){var e=function(){return b(s(n.y.mobile,n.y.tablet,n.y.deskTop))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[n.y.deskTop,n.y.mobile,n.y.tablet,w]),(0,i.useEffect)((function(){var e=function(){return v(a(r))};return window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[y,r]);var z=(0,i.useMemo)((function(){return f}),[f]),k=(0,i.useMemo)((function(){return w}),[w]),h=(0,i.useMemo)((function(){return y}),[y]);return{myComponent:c,memorizePositionX:z,memorizePositionY:k,memorizeCubeSize:h,texture:p}}(n,c,d,void 0!==f&&f),l=m.myComponent,w=m.memorizePositionX,b=m.memorizePositionY,x=m.memorizeCubeSize,y=m.texture;return(0,r.jsxs)("mesh",{ref:l,position:[w,b,0],onClick:function(){return open(t,"_blank")},onPointerOver:function(){return document.body.style.cursor="pointer"},onPointerOut:function(){return document.body.style.cursor="default"},children:[(0,r.jsx)("boxGeometry",{attach:"geometry",args:[x,x,x]}),(0,r.jsx)("meshPhongMaterial",{attach:"material",map:y,side:o.DoubleSide,color:"#ffffff"})]})}}}]);