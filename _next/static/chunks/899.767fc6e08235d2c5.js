(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[899],{2899:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return w}});var n=i(5893),r=i(7294),o=i(1248),a=i(9477),s=i(5056),d=i(4976),h=i(7607),p=function(){var e=!0,t=!0,i=!1,n={axes:!0,grid:!0,camera:!0,topLight:!0,bottomLight:!0,spotLight:!0,pointLight:!0},r=!1,o={modelPath:"".concat("","/gltf/logoModel.gltf"),texturePath:["".concat("","/images/texture_gray.jpg"),"".concat("","/images/texture_black.jpg"),"".concat("","/images/bomb.png")]},p={width:window.innerWidth,height:window.innerHeight},c=function(){var e=new h.E,t=new d._;return t.setDecoderPath("three/examples/js/libs/draco/"),e.setDRACOLoader(t),{gltfLoader:e,textureLoader:new a.TextureLoader}}(),l=c.gltfLoader,w=c.textureLoader,u=o.texturePath.map((function(e,t){var i=w.load(e);return 2!==t&&(i.wrapS=a.RepeatWrapping,i.wrapT=a.RepeatWrapping,i.repeat.set(100,100)),i})),m=function(){var e=new a.WebGLRenderer({antialias:!0,alpha:!0}),t=new a.Scene,i=new a.PerspectiveCamera(45,p.width/p.height,1,1e3);return{renderer:e,scene:t,camera:i,model:new a.Group,meshGray:new a.Mesh(new a.PlaneGeometry(250,250),new a.MeshLambertMaterial({map:u[0],side:a.DoubleSide})),meshBlack:new a.Mesh(new a.PlaneGeometry(250,250),new a.MeshLambertMaterial({map:u[1],side:a.DoubleSide})),spriteMaterial:new a.SpriteMaterial({blending:a.AdditiveBlending,map:u[2]}),orbitControls:new s.z(i,e.domElement),sphere:new a.Mesh(new a.SphereGeometry(.5,50,50),new a.MeshLambertMaterial({color:9290751}))}}(),g=m.renderer,L=m.scene,f=m.camera,v=m.model,x=m.meshGray,M=m.meshBlack,S=m.spriteMaterial,y=m.orbitControls,T=m.sphere,P=function(){var e=new a.DirectionalLight(16777215,1),t=new a.DirectionalLight(16777215,1),i=new a.SpotLight(16777215,1),n=new a.PointLight(16777215,2,50,1),r=new a.AmbientLight(16777215,.5);return e.shadow.camera=new a.OrthographicCamera(1,1,1,1),{directionalLightTop:e,directionalLightBottom:t,spotLight:i,pointLight:n,ambientLight:r}}(),b=P.directionalLightTop,C=P.directionalLightBottom,H=P.spotLight,D=P.pointLight,F={axesHelper:new a.AxesHelper(1e3),gridHelper:new a.GridHelper(250,20,"#000000","#9a12b3"),cameraHelper:new a.CameraHelper(f),directionalLightTopHelper:new a.DirectionalLightHelper(b,10,"#FFF100"),directionalLightBottomHelper:new a.DirectionalLightHelper(C,10,"#FFF100"),spotLightHelper:new a.SpotLightHelper(H,"#f15a22"),pointLightHelper:new a.PointLightHelper(D,1,"#db0a5b")},I=F.axesHelper,k=F.gridHelper,R=F.cameraHelper,z=F.directionalLightTopHelper,_=F.directionalLightBottomHelper,E=F.spotLightHelper,G=F.pointLightHelper;g.setSize(p.width,p.height),g.setClearColor(0,0),g.setPixelRatio(window.devicePixelRatio),g.shadowMap.enabled=!0,g.shadowMap.type=a.PCFShadowMap,p.width<=767?f.position.set(10,3.5,0):f.position.set(2,4,2),e&&l.load(o.modelPath,(function(e){v.add(e.scene),v.traverse((function(e){"Mesh"===e.type&&(e.castShadow=!0,e.receiveShadow=!0)})),L.add(v)})),p.width<=767?(x.rotation.set(Math.PI/2,0,0),M.rotation.set(Math.PI/2,0,Math.PI/4)):(x.rotation.set(Math.PI/2,0,Math.PI/4),M.rotation.set(Math.PI/2,0,0)),x.position.set(0,-3.5,0),M.position.set(0,-3.6,0),x.receiveShadow=!0,M.receiveShadow=!1,L.add(x),L.add(M),b.position.set(0,10,0),b.castShadow=!0,L.add(b),C.position.set(0,-10,0),C.castShadow=!1,L.add(C),H.position.set(0,10,0),H.castShadow=!0,H.shadow.mapSize.width=4096,H.shadow.mapSize.height=4096,L.add(H),y.enabled=!1,y.enableDamping=!0,y.zoomSpeed=.5,y.maxDistance=800,y.autoRotate=!0,y.autoRotateSpeed=-1;var W=function(){f.lookAt(new a.Vector3(0,0,0));var e={setControls:!1,taskDone:!1},t={angle:0,rangeCurrent:-90,rangeLimit:-5,rangeDuration:.135,downLimit:-15,upLimit:4,height:4,heightDuration:.1},i=function(){var e=3;return Array.from({length:27},(function(t,i){var n={x:i%8,y:e};return i%8===7&&(e-=1),n}))}(),n={switchTextureFirst:0,switchTextureSecond:0,switchTextureThird:0,fn:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:9,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:6.5,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:9,s=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0,d=arguments.length>6&&void 0!==arguments[6]?arguments[6]:-1.75,h=arguments.length>7&&void 0!==arguments[7]?arguments[7]:0;S.map.offset=new a.Vector2(.125*i[e].x,.25*i[e].y),S.map.repeat=new a.Vector2(1/8,1/4),S.depthTest=t;var p=new a.Sprite(S);p.scale.set(n,r,o),p.position.set(s,d,h),L.add(p)}};return{introductionCore:function(){if(!e.taskDone){var i=t.angle*Math.PI/180,r=t.rangeCurrent<t.rangeLimit?t.rangeCurrent+=t.rangeDuration:t.rangeLimit;f.position.x=Math.sin(i)*r,f.position.z=Math.cos(i)*r,e.setControls||(t.angle+=1),-5===t.rangeLimit&&r===t.rangeLimit&&f.position.y>t.downLimit&&(f.position.y=t.height-=t.heightDuration,n.switchTextureFirst<26&&(n.switchTextureFirst+=1)&&n.fn(n.switchTextureFirst,!1),26===n.switchTextureFirst&&L.children.map((function(e){"Sprite"===e.type&&L.remove(e)}))),f.position.y<=t.downLimit&&(t.rangeLimit=5),5===t.rangeLimit&&r>=t.rangeLimit&&f.position.y<=t.upLimit&&(f.position.y=t.height+=t.heightDuration),window.innerWidth<=767&&5===t.rangeLimit&&f.position.y>=t.upLimit&&(t.rangeLimit=10,t.rangeDuration=.04),window.innerWidth<=767&&10===t.rangeLimit&&r<t.rangeLimit&&f.position.y>=t.upLimit&&(n.switchTextureSecond<26&&(n.switchTextureSecond+=1)&&n.fn(n.switchTextureSecond,!0),26===n.switchTextureSecond&&L.children.map((function(e){"Sprite"===e.type&&L.remove(e)}))),window.innerWidth<=767&&10===t.rangeLimit&&r>=t.rangeLimit&&f.position.y>=t.upLimit&&(t.angle+=.15,n.switchTextureThird<26&&(n.switchTextureThird+=1)&&n.fn(n.switchTextureThird,!0,7,7,7),26===n.switchTextureThird&&L.children.map((function(e){"Sprite"===e.type&&L.remove(e)})),e.setControls=!0),window.innerWidth>767&&5===t.rangeLimit&&r>=t.rangeLimit&&f.position.y>=t.upLimit&&(t.angle+=.3,n.switchTextureSecond<26&&(n.switchTextureSecond+=1)&&n.fn(n.switchTextureSecond,!0,8,7,8),26===n.switchTextureSecond&&L.children.map((function(e){"Sprite"===e.type&&L.remove(e)})),e.setControls=!0),e.setControls&&L.children.every((function(e){return"Sprite"!==e.type}))&&(y.enabled=!0,e.taskDone=!0)}}}}().introductionCore,A=function(){var i;return{setModel:function(n){!function r(){!function(){if(e&&t){var i=.01,n=v.rotation.x+i,r=v.rotation.y+i,o=v.rotation.z+i;v.rotation.set(n,r,o)}y.update()}(),n?y.enabled=!0:W(),g.render(L,f),i=requestAnimationFrame(r)}()},removeModel:function(){cancelAnimationFrame(i)}}}(),B=A.setModel,j=A.removeModel;return i&&(n.axes&&L.add(I),n.grid&&L.add(k),n.camera&&L.add(R),n.topLight&&L.add(z),n.bottomLight&&L.add(_),n.spotLight&&L.add(E),n.pointLight&&L.add(G)),r&&(T.position.set(0,0,0),T.castShadow=!0,L.add(T)),{renderer:g,setModel:B,removeModel:j,responsive:function(){var e=window.innerWidth,t=window.innerHeight;g.setSize(e,t),g.setPixelRatio(window.devicePixelRatio),f.aspect=e/t,f.updateProjectionMatrix(),e<=767?(f.position.set(10,3.5,0),x.rotation.set(Math.PI/2,0,0),M.rotation.set(Math.PI/2,0,Math.PI/4)):(f.position.set(2,4,2),x.rotation.set(Math.PI/2,0,Math.PI/4),M.rotation.set(Math.PI/2,0,0))}}},c=i(3808),l=i.n(c),w=function(){var e=function(){var e=(0,r.useRef)(null),t=(0,o.v9)((function(e){return e.firstVisitStore.isVisited}),o.wU);return(0,r.useEffect)((function(){var i=p(),n=i.renderer,r=i.setModel,o=i.removeModel,a=i.responsive;return e.current.appendChild(n.domElement),r(t),window.addEventListener("resize",a),function(){n.dispose(),n.domElement.remove(),o(),window.removeEventListener("resize",a)}})),{myComponent:e}}().myComponent;return(0,n.jsx)("div",{className:"".concat(l().wrapper," logo-model"),ref:e})}},3808:function(e){e.exports={wrapper:"style_wrapper__Gy4SN"}}}]);