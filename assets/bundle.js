!function(e){var t={};function n(s){if(t[s])return t[s].exports;var i=t[s]={i:s,l:!1,exports:{}};return e[s].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(s,i,function(t){return e[t]}.bind(null,i));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);const s=Object.freeze({"canvas-background":"#e0dede","objects-cube":"#00ffed","objects-coin":"#cccc00","objects-wall-body":"#222222","objects-wall-border":"#eeeeee","objects-player":"#0087ff","objects-spikes":"#ad1818","objects-diamond":"#c300ff","ui-menu-background":"#6f738e","ui-menu-wrapper-background":"#222","ui-menu-wrapper-font":"#eee","ui-menu-hamburger-button":"#ff0000"});var i=s;!function(e={}){for(const s in e)"string"==typeof e[s]&&(t="--"+s+"-color",n=e[s],document.getElementsByTagName("html")[0].style.setProperty(t,n));var t,n}(s);var r=Object.freeze({wall:"x",player:"@",lava:"*",coin:"o",void:"-",spikes:"^",diamond:"<>"});const o=r.player,a=r.wall,c=r.coin,h=r.void,d=(r.lava,r.spikes);var l=[[h,h,h,h,h,h,h,h,h,h,h,c,c,h,h,h,h,h,h,h,h,h,h,h],[h,h,h,h,h,h,h,a,a,a,a,a,a,a,a,a,a,a,h,h,h,h,h,h],[h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h],[h,h,h,h,a,a,h,h,h,h,h,h,h,h,h,h,h,h,h,d,d,c,h,h],[h,h,h,h,h,h,h,h,c,c,h,h,h,h,h,h,h,h,h,a,a,a,h,h],[h,h,h,h,h,h,h,a,a,a,a,h,h,c,d,h,h,h,h,h,h,h,h,h],[h,h,h,h,h,h,h,h,h,h,h,h,h,a,a,h,h,h,h,h,h,h,h,h],[h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h],[h,h,h,h,h,h,h,h,h,h,a,a,h,h,h,h,h,h,h,h,h,h,h,h],[o,h,r.diamond,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h],[a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a,a],[h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h,h]];const m=r.wall,u=r.coin,b=r.void,_=r.spikes,p=r.player;var y=[[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,r.diamond,_,_,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,m,m,m,m,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[p,b,b,b,b,b,b,b,b,b,u,u,b,b,b,b,b,b,b,b,b,b,b,b],[m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m,m],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]];const w=r.wall,g=(r.coin,r.void),v=r.spikes;r.player,r.diamond;var f=[[g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g],[g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g],[g,g,g,g,g,g,g,g,g,g,g,g,g,w,w,w,w,w,g,g,g,g,g,g],[g,g,g,g,g,g,g,g,g,g,g,g,g,v,v,v,v,v,g,g,g,g,g,g],[g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g],[g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g],[g,g,g,g,g,g,g,w,g,g,w,w,w,g,g,g,g,g,g,g,g,g,g,g],[g,g,g,g,g,g,w,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g],[g,g,g,g,g,w,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g],[g,g,g,g,w,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g],[w,w,w,w,g,g,g,g,g,g,g,g,w,w,w,w,w,w,w,w,w,w,w,w],[g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g,g]];const E=r.wall,j=r.coin,x=r.void,k=r.spikes,B=r.lava,S=r.player,P=r.diamond;var C=[l,y,f,[[x,x,x,x,x,x,x,x,x,x,x,x,x,x,E,E,E,E,x,x,x,x,x,x],[x,x,x,x,x,x,x,x,x,E,x,x,x,x,j,x,x,E,x,x,x,x,x,x],[x,x,x,x,x,x,x,x,j,k,x,x,P,x,E,x,x,E,x,x,x,x,x,x],[x,x,x,x,j,k,x,x,E,E,B,B,E,B,B,E,x,E,x,x,x,x,x,x],[x,x,x,x,E,E,x,P,x,E,E,E,E,E,E,E,x,E,x,x,x,x,x,x],[x,x,x,x,x,x,x,E,x,x,x,x,x,x,x,E,x,E,x,x,x,x,x,x],[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,E,x,E,x,x,k,j,x,x],[x,x,x,x,x,x,x,E,x,x,x,x,x,x,x,E,x,E,x,x,E,E,x,x],[x,x,x,x,x,x,x,x,x,x,x,x,x,x,x,E,x,E,x,x,x,x,x,E],[S,x,x,x,E,E,E,E,x,x,x,x,x,x,x,E,x,E,x,x,x,x,x,x],[E,E,E,E,x,x,x,x,x,x,x,x,x,x,E,x,j,x,x,x,k,x,x,E],[x,x,x,x,x,x,x,x,x,x,x,x,x,x,E,E,E,E,E,E,E,E,E,E]]];class L{static getBlockTypeBySymbol(e=""){for(const t in r)if(r[t]===e)return t;return""}}const O=window.THREE;class M{constructor(e=16777215){this._geometry=new O.BoxGeometry(1,1,1),this._material=new O.MeshBasicMaterial({color:e}),this._object=new O.Mesh(this._geometry,this._material),this.getObject=this.getObject.bind(this),this.tweakPosition=this.tweakPosition.bind(this)}getObject(){return this._object}tweakPosition(){}}const T=window.THREE;class R extends M{constructor(){super(i["objects-wall-body"]),this._geometry=new T.BoxGeometry(.85,.85,.85),this._object=new T.Mesh(this._geometry,this._material);const e=new T.LineSegments(new T.EdgesGeometry(this._object.geometry),new T.LineBasicMaterial({color:i["objects-wall-border"],linewidth:1}));e.renderOrder=1,this._object.add(e)}}window.THREE;class H extends M{constructor(e=!0,t=!0,n=16777215){super(n),this._rotationSpeed=.01,e&&(this._rotationSpeed=.05*Math.random()+.025),this._rotationDir=!0,t&&(this._rotationDir=Math.random()>.5),this._rotate=this._rotate.bind(this),this._rotate()}_rotate(){this._rotationDir?this._object.rotation.y+=this._rotationSpeed:this._object.rotation.y-=this._rotationSpeed,requestAnimationFrame(this._rotate)}}const z=window.THREE;class A extends H{constructor(){super(!0,!0,i["objects-coin"]),this._geometry=new z.TorusGeometry(.2,.05,16,100),this._object=new z.Mesh(this._geometry,this._material)}tweakPosition(){this._object.position.y-=.2}}const I=window.THREE;class D extends M{constructor(){super(i["objects-player"]),this._geometry=new I.BoxGeometry(.85,.85,.85),this._object=new I.Mesh(this._geometry,this._material),this.getObject=this.getObject.bind(this)}tweakPosition(){this._object.position.y-=.15}}const F=window.THREE;class G extends M{constructor(){super(i["objects-spikes"]),this._geometry=new F.ConeGeometry(.3,.3,32),this._object=new F.Mesh(this._geometry,this._material)}tweakPosition(){this._object.position.y-=.425}}const W=window.THREE;class q extends H{constructor(){super(!0,!0,i["objects-diamond"]),this._geometry=new W.OctahedronGeometry(.3),this._object=new W.Mesh(this._geometry,this._material)}tweakPosition(){this._object.position.y-=.2}}const N=window.THREE;class J{constructor(){this._scene=new N.Scene,this._scene.background=new N.Color(i["canvas-background"]),this._camera=new N.PerspectiveCamera(75,window.innerWidth/window.innerHeight,.1,1e3),this._scene.add(this._camera),this._renderer=new N.WebGLRenderer({antialias:!0}),this._renderer.setSize(window.innerWidth,window.innerHeight),document.body.appendChild(this._renderer.domElement),this._incrementors={camera:{x:11.5,y:5,z:15}},this._player=null,this.getScene=this.getScene.bind(this),this.getRenderer=this.getRenderer.bind(this),this.buildLevel=this.buildLevel.bind(this),this.insertBlockIntoScene=this.insertBlockIntoScene.bind(this),this.listenForCameraMovements=this.listenForCameraMovements.bind(this),this.animateCameraPosition=this.animateCameraPosition.bind(this),this.clearScene=this.clearScene.bind(this),this._handleResize=this._handleResize.bind(this),this.getPlayer=this.getPlayer.bind(this),this._handleResize()}getScene(){return this._scene}getRenderer(){return this._renderer}getCamera(){return this._camera}getIncrementors(){return this._incrementors}buildLevel(e=[]){if(Array.isArray(e)){for(let t=0;t<e.length;t++){const n=e[t];if(!Array.isArray(n))return;for(let e=0;e<n.length;e++){const s=L.getBlockTypeBySymbol(n[e]),i=J.getBlockByType(s);"player"===s&&i&&(this._player=i),this.insertBlockIntoScene(i,{x:e,y:t})}}return this}}insertBlockIntoScene(e,t){let n=null;if(e&&e.getObject&&(n=e.getObject()),!n)return;const s=t.x,i=-1*t.y;this._scene.add(n),n.position.set(s,i,0),e.tweakPosition&&e.tweakPosition()}static getBlockByType(e=""){switch(e){case"wall":return new R;case"coin":return new A;case"player":return new D;case"spikes":return new G;case"diamond":return new q}return null}listenForCameraMovements(){let e=!1,t={};return this._renderer.domElement.addEventListener("wheel",t=>{e=!1,t.deltaY<0?this._incrementors.camera.z>=2&&(this._incrementors.camera.z-=.6):this._incrementors.camera.z<=45&&(this._incrementors.camera.z+=.6)}),this._renderer.domElement.addEventListener("mousedown",t=>{e=!0}),this._renderer.domElement.addEventListener("mouseup",t=>{e=!1}),this._renderer.domElement.addEventListener("mousemove",n=>{if(!e)return;t.x||(t={x:n.x,y:n.y});const s={x:n.x,y:n.y},i=t.x<s.x,r=t.x>s.x;i?this._incrementors.camera.x<35&&(this._incrementors.camera.x+=.25):r&&this._incrementors.camera.x>-35&&(this._incrementors.camera.x-=.25),t=s}),this}animateCameraPosition(){this._camera.position.x=this._incrementors.camera.x,this._camera.position.y=this._incrementors.camera.y,this._camera.position.z=this._incrementors.camera.z,this._camera.lookAt(new N.Vector3(11.5,0,0))}clearScene(){for(;this._scene.children.length>0;)this._scene.remove(this._scene.children[0]);return this}_handleResize(){window.addEventListener("resize",e=>{this._camera.aspect=window.innerWidth/window.innerHeight,this._camera.updateProjectionMatrix(),this._renderer.setSize(window.innerWidth,window.innerHeight)})}getPlayer(){return this._player}}var V=(e,t)=>{e.getIncrementors();const n=e.getScene(),s=e.getCamera(),i=e.getRenderer();let r=e.getPlayer();e.clearScene().buildLevel(t).listenForCameraMovements(),function t(){r||(r=e.getPlayer()),e.animateCameraPosition(),i.render(n,s),requestAnimationFrame(t)}()};class Y{constructor(e="void"){this._scale=50,this._className=e.toLowerCase(),this._size={width:1,height:1,depth:1},this._object=this._buildObject(),this._buildObject=this._buildObject.bind(this),this.getObject=this.getObject.bind(this),this.getDimensions=this.getDimensions.bind(this),this.setPosition=this.setPosition.bind(this)}_buildObject(){const e=document.createElement("span");return e.style.height=this._size.height*this._scale+"px",e.style.width=this._size.width*this._scale+"px",e.classList.add("block"),e.classList.add(this._className),e}getObject(){return this._object}getDimensions(){return this._size}setPosition(e){return this._object.style.left=e.x*this._scale+"px",this._object.style.top=e.y*this._scale+"px",this}}class K extends Y{constructor(){super("wall")}}class Q extends Y{constructor(){super("player")}}class U extends Y{constructor(){super("coin")}}class X extends Y{constructor(){super("spikes")}}class Z extends Y{constructor(){super("diamond")}}class ${constructor(e){e||(e=document.body),this._domParent=e,this._domElement=this._buildDomElement(),this._domParent.appendChild(this._domElement),this._incrementors={},this.getIncrementors=this.getIncrementors.bind(this),this.clearScene=this.clearScene.bind(this),this.buildLevel=this.buildLevel.bind(this),this.insertBlockIntoScene=this.insertBlockIntoScene.bind(this)}getIncrementors(){return this._incrementors}_buildDomElement(){const e=document.createElement("div");return e.setAttribute("class","dom-engine-wrapper"),e}clearScene(){return this._domElement.innerHTML="",this}buildLevel(e){if(Array.isArray(e)){for(let t=0;t<e.length;t++){const n=e[t];if(!Array.isArray(n))return;for(let e=0;e<n.length;e++){const s=L.getBlockTypeBySymbol(n[e]),i=$.getBlockByType(s);this.insertBlockIntoScene(i,{x:e,y:t})}}return this}}insertBlockIntoScene(e,t){let n=null;if(e&&e.getObject&&(n=e.getObject()),!n)return;const s=t.x,i=t.y;this._domElement.appendChild(n),e&&e.setPosition({x:s,y:i})}static getBlockByType(e=""){switch(e){case"wall":return new K;case"player":return new Q;case"coin":return new U;case"spikes":return new X;case"diamond":return new Z}return null}}var ee=(e,t)=>{e.getIncrementors();e.clearScene().buildLevel(t),function e(){requestAnimationFrame(e)}()};const te=function*(e){let t=0;for(;;)yield e[t++%e.length]};class ne{constructor(){this._domElement=document.createElement("div"),this._domElement.setAttribute("class","menu"),this._wrapper=document.createElement("div"),this._wrapper.setAttribute("class","wrapper"),this._content="",this._wrapper.innerHTML=this._content,this._domElement.appendChild(this._wrapper),document.body.appendChild(this._domElement),this._hasDoneInitialRender=!1,this.show=this.show.bind(this),this.hide=this.hide.bind(this),this.setContent=this.setContent.bind(this),this.getContent=this.getContent.bind(this),this.listenForEvents=this.listenForEvents.bind(this),this._addHamburgerButton=this._addHamburgerButton.bind(this),this._addHamburgerButton()}show(){return this._domElement.style.left="0",this}hide(){return Math.random()>.5?this._domElement.style.left="-100vw":this._domElement.style.left="200vw",this}setContent(e=""){return this._content=e,this._wrapper.innerHTML=this._content,this}getContent(){return this._content}static getContentByType(e="menu"){switch(e){case"menu":return'<div class="menu-wrapper">\n          <h1>Rainbow Runner</h1>\n          <span class="version">Version: 0.1.0</span>\n          <div class="buttons">\n              <button class="play-btn" data-mode="3d">Play in 3d!</button>\n              <button class="play-btn" data-mode="2d">Play in 2d!</button>\n              <a href="https://github.com/JasperLichte/Rainbow-Cube">Contribute</a>\n          </div>\n          <p>By Jasper Lichte and Harun Can</p>\n        </div>'}}listenForEvents(){const e=this._wrapper.querySelectorAll(".play-btn");return e.forEach(t=>{t.addEventListener("click",n=>{if(this.hide(),this._hasDoneInitialRender)return;const s=te(C);let i=null,r=null;"3d"===t.getAttribute("data-mode")?(i=new J,r=V):(i=new $(document.getElementById("main")),r=ee),r(i,s.next().value),this._hasDoneInitialRender=!0,e.forEach(e=>{e!==t&&(e.classList.add("disabled"),e.setAttribute("disabled",!0))}),document.getElementById("next-level-btn").addEventListener("click",e=>{r(i,s.next().value)})})}),window.addEventListener("keydown",e=>{"Escape"===e.key&&this.show()}),this}_addHamburgerButton(){return this._hamburger=document.createElement("button"),this._hamburger.setAttribute("class","menu-hamburger"),this._hamburger.innerHTML="<span></span><span></span><span></span>",document.body.appendChild(this._hamburger),this._hamburger.addEventListener("click",e=>{this.show()}),this}}var se={};se.menu=(new ne).setContent(ne.getContentByType("menu")).show().listenForEvents(),se.helpers={}}]);