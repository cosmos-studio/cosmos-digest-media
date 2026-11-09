/* Cosmos Studio – hero-fx 0.6.3 (STAGING TEST). Animated hero backgrounds by page slug.
   Runs only on *.webflow.io or with ?herofx=1. Shaders: Componentry (MIT) grain-gradient; defense scenes written for Cosmos.
   Roll back: remove the page script "herofx" from the Services and Industries templates. */
(function(){
if(!/\.webflow\.io$/.test(location.hostname)&&!/[?&]herofx=1/.test(location.search))return;
const PATH=location.pathname.replace(/\/$/,'');
const MAP={
 '/services/ux-audit':{grain:1},
 '/industries/defense-military-tech':{old:'terrain'},
 '/services/drone-ground-control-station-ui-design':{old:'gcs',light:1,left:1},
 '/services/c2-interface-design-command-and-control-ui':{gl:'field',ov:'cop',left:1},
 '/services/counter-uas-ui-design-c-uas-software':{gl:'radar',ov:'radar',left:1},
 '/services/defense-software-ux-design-c2-isr':{gl:'scope',ov:'scope',left:1},
 '/services/defense-tech-website-design':{gl:'horizon',ov:'horizon',left:1},
 '/services/defense-startup-branding':{gl:'camo',ov:'camo',left:1},
 '/services/space-geoint-ui-ux-design':{ov:'geoint',left:1}
};
const pg=MAP[PATH];if(!pg)return;
const reduce=matchMedia('(prefers-reduced-motion: reduce)').matches,mq=matchMedia('(prefers-color-scheme: dark)');
/* site tokens (same values as the site's own light / dark theme) */
const DARK='color-scheme:dark;--_colors---primary--paper:#1c1d20;--_colors---grey--50:#1c1d20;--_colors---primary--white:#27282c;--_colors---grey--75:#303135;--_colors---grey--100:#3a3c40;--_colors---primary--black:#e5e3dc;--_colors---grey--250:#9b9b9b;--_colors---grey--300:#a3a3a3;--_colors---grey--400:#a3a3a3;--_colors---bg:#1c1d20;--_colors---txt:#e5e3dc;--_colors---tag:#303135;--_colors---btn-inactive-bg:#27282c;--_colors---btn-active-bg:#e5e3dc;--_colors---brn-active-text:#0f1011;--_colors---btn-inactive-text:#a3a3a3;color:#e5e3dc';
const LIGHT='color-scheme:light;--_colors---primary--paper:whitesmoke;--_colors---grey--50:whitesmoke;--_colors---primary--white:#fff;--_colors---grey--75:#e8e8e8;--_colors---grey--100:#ddd;--_colors---primary--black:#0f1011;--_colors---grey--250:grey;--_colors---grey--300:#707070;--_colors---grey--400:#666;--_colors---bg:whitesmoke;--_colors---txt:#0f1011;--_colors---tag:#fff;--_colors---btn-inactive-bg:#fff;--_colors---btn-active-bg:#1c1d1f;--_colors---brn-active-text:#fff;--_colors---btn-inactive-text:#666;color:#0f1011';
const st=document.createElement('style');st.id='herofx-css';
st.textContent=`.hfx-stage{position:absolute;left:0;top:0;width:100%;z-index:-1;pointer-events:none;overflow:hidden;-webkit-mask-image:linear-gradient(#000 calc(100% - 90px),transparent);mask-image:linear-gradient(#000 calc(100% - 90px),transparent)}
.hfx-sec .works_head .testimonials_numbers,.hfx-sec .works_head .padding-section-xsmall{display:none}
.hfx-d .link-w-icon svg [fill="#0F1011"],.hfx-d .link-w-icon svg [fill="#0f1011"]{fill:#e5e3dc}.hfx-k .link-w-icon svg [fill="#0F1011"],.hfx-k .link-w-icon svg [fill="#0f1011"]{fill:#0f1011}
.hfx-sec{min-height:100vh;min-height:100svh;display:flex;flex-direction:column;justify-content:center}
.hfx-stage.hfx-edge{-webkit-mask-image:none;mask-image:none}
@media (min-width:768px){.hfx-left .works_head{align-items:flex-start}.hfx-left .works_head .text-align-center{text-align:left;margin-left:0}.hfx-left .works_head .text-align-center.is-narrow{margin-left:0;margin-right:auto}.hfx-left .works_head h1{max-width:13.5em;margin-left:0;margin-right:auto}.hfx-left .works_head .buttons{justify-content:flex-start}.hfx-left .works_head .testimonials_numbers{align-self:stretch}}
@media (min-width:992px){.hfx-left .works_head h1{max-width:12em}}
.hfx-stage canvas{position:absolute;inset:0;width:100%;height:100%;display:block}
.hfx-scrim{position:absolute;inset:0}
.hfx-d{${DARK}}.hfx-d a,.hfx-d .link-w-icon{color:#e5e3dc}.hfx-d .about_paragraph,.hfx-d .text-size-small{color:#c9c9c9}
.hfx-l{${LIGHT}}.hfx-l a,.hfx-l .link-w-icon{color:#0f1011}.hfx-l .about_paragraph,.hfx-l .text-size-small{color:#2f3226}.hfx-k .about_paragraph,.hfx-k .text-size-small{color:#2f3226}`;
document.head.appendChild(st);
function rgba(h,a){h=h.replace('#','');const n=parseInt(h,16);return `rgba(${n>>16&255},${n>>8&255},${n&255},${a})`}
function rnd(seed){let e=2166136261;for(let i=0;i<seed.length;i++)e=Math.imul(e^seed.charCodeAt(i),16777619);let a=e>>>0;
  return()=>{a=a+1831565813|0;let t=Math.imul(a^a>>>15,1|a);t=t+Math.imul(t^t>>>7,61|t)^t;return((t^t>>>14)>>>0)/4294967296}}
function bgKhaki(c,W,H,t,grid){
  c.fillStyle='#c7bf9c';c.fillRect(0,0,W,H);
  let g=c.createRadialGradient(W*.85,H*.1,0,W*.85,H*.1,W*.6);g.addColorStop(0,'rgba(215,207,174,.9)');g.addColorStop(1,'rgba(215,207,174,0)');c.fillStyle=g;c.fillRect(0,0,W,H);
  g=c.createRadialGradient(W*.3,H*1.1,0,W*.3,H*1.1,W*.6);g.addColorStop(0,'rgba(150,140,105,.55)');g.addColorStop(1,'rgba(150,140,105,0)');c.fillStyle=g;c.fillRect(0,0,W,H);
  if(grid){const st=50*devicePixelRatioCap();c.strokeStyle='rgba(40,44,30,.07)';c.lineWidth=1;c.beginPath();for(let x=0;x<W;x+=st){c.moveTo(x,0);c.lineTo(x,H)}for(let y=0;y<H;y+=st){c.moveTo(0,y);c.lineTo(W,y)}c.stroke()}
}
function veilKhaki(c,W,H){const v=c.createLinearGradient(0,0,W*.6,0);v.addColorStop(0,'rgba(199,191,156,.9)');v.addColorStop(.6,'rgba(199,191,156,.5)');v.addColorStop(1,'rgba(199,191,156,0)');c.fillStyle=v;c.fillRect(0,0,W,H)}
function devicePixelRatioCap(){return Math.min(devicePixelRatio||1,1.5)}
const M={
 terrain(c,W,H,t,s,d,p){
  const g=c.createLinearGradient(0,0,0,H);g.addColorStop(0,'#1d2219');g.addColorStop(1,'#10130e');c.fillStyle=g;c.fillRect(0,0,W,H);
  const gl=c.createRadialGradient(W*s.gx,H*.25,0,W*s.gx,H*.25,W*.45);gl.addColorStop(0,'rgba(142,240,122,.16)');gl.addColorStop(1,'rgba(142,240,122,0)');c.fillStyle=gl;c.fillRect(0,0,W,H);
  const rows=26,cols=40,hor=H*.2;const hgt=(x,z)=>Math.sin(x*.9*s.k+t*.3)*.5+Math.sin(z*.7-t*.4+x*.3)*.6+Math.sin((x+z)*1.7+t*.2)*.18;
  for(let i=rows;i>=1;i--){const z=i*.45+(t*.5)%.45,sc=1/(z*.35+.6),y0=hor+H*.9*sc*.55;c.beginPath();
    for(let j=0;j<=cols;j++){const xw=(j/cols-.5)*16,x=W*.6+xw*sc*W*.1,y=y0-hgt(xw,z)*sc*H*.12;j?c.lineTo(x,y):c.moveTo(x,y)}
    const a=Math.min(1,sc*1.3);c.strokeStyle=i<5?rgba('#8ef07a',.5*a):rgba('#c7bf9c',.34*a);c.lineWidth=Math.max(1,sc*1.6*d);c.stroke()}
  const cx=W*(p.on?p.x:s.gx),cy=H*(p.on?p.y:.27),R=Math.min(W,H)*.15,an=t*1.1;
  c.strokeStyle='rgba(142,240,122,.32)';c.lineWidth=d;[1,.6,.25].forEach(k=>{c.beginPath();c.arc(cx,cy,R*k,0,7);c.stroke()});
  if(c.createConicGradient){const sw=c.createConicGradient(an-.7,cx,cy);sw.addColorStop(0,'rgba(142,240,122,0)');sw.addColorStop(.11,'rgba(142,240,122,.3)');sw.addColorStop(.1101,'rgba(142,240,122,0)');c.fillStyle=sw;c.beginPath();c.arc(cx,cy,R,0,7);c.fill()}
  c.fillStyle='#8ef07a';const bx=cx+Math.cos(s.bl)*R*.7,by=cy+Math.sin(s.bl)*R*.7;c.beginPath();c.arc(bx,by,2.5*d,0,7);c.fill();
  c.font=`500 ${9*d}px JetBrains Mono,monospace`;c.fillStyle='rgba(238,240,230,.5)';c.fillText('NIGHT · LOW LIGHT',cx-R,cy+R+16*d);
  const v=c.createLinearGradient(0,0,W*.55,0);v.addColorStop(0,'rgba(16,19,14,.85)');v.addColorStop(1,'rgba(16,19,14,0)');c.fillStyle=v;c.fillRect(0,0,W,H);
 },
 gcs(c,W,H,t,s,d,p){
  bgKhaki(c,W,H,t,false);
  // contours
  c.lineWidth=d;for(let k=0;k<14;k++){c.beginPath();const lv=k/14;
    for(let a=0;a<=64;a++){const an=a/64*6.283,rr=(.08+lv*.5)*Math.min(W,H)*(1+.18*Math.sin(an*3+s.k+t*.05)+.1*Math.sin(an*5-lv*4));
      const x=W*s.cx+Math.cos(an)*rr*1.5,y=H*s.cy+Math.sin(an)*rr;a?c.lineTo(x,y):c.moveTo(x,y)}
    c.closePath();c.strokeStyle=k%4===0?'rgba(40,44,30,.32)':'rgba(40,44,30,.14)';c.stroke()}
  veilKhaki(c,W,H);
  // route
  const wp=s.wp.map(q=>[q[0]*W,q[1]*H]);c.setLineDash([7*d,6*d]);c.lineDashOffset=-t*18*d;c.strokeStyle='rgba(28,33,26,.75)';c.lineWidth=1.6*d;
  c.beginPath();wp.forEach((q,i)=>i?c.lineTo(q[0],q[1]):c.moveTo(q[0],q[1]));c.stroke();c.setLineDash([]);
  c.font=`500 ${9*d}px JetBrains Mono,monospace`;
  wp.forEach((q,i)=>{c.fillStyle='#1c211a';c.fillRect(q[0]-4*d,q[1]-4*d,8*d,8*d);c.fillStyle='rgba(28,33,26,.7)';c.fillText('WP-0'+(i+1),q[0]+8*d,q[1]-7*d)});
  // drone along path
  const segs=[];let L=0;for(let i=1;i<wp.length;i++){const l=Math.hypot(wp[i][0]-wp[i-1][0],wp[i][1]-wp[i-1][1]);segs.push(l);L+=l}
  let u=((t*.05)%1)*L,i=0;while(i<segs.length-1&&u>segs[i]){u-=segs[i];i++}const f=u/segs[i],x=wp[i][0]+(wp[i+1][0]-wp[i][0])*f,y=wp[i][1]+(wp[i+1][1]-wp[i][1])*f;
  c.fillStyle='rgba(142,240,122,.35)';c.beginPath();c.arc(x,y,12*d,0,7);c.fill();c.fillStyle='#1c211a';c.beginPath();c.arc(x,y,4.5*d,0,7);c.fill();
  c.fillStyle='#8ef07a';c.beginPath();c.arc(x,y,2*d,0,7);c.fill();
  // telemetry card
  const cw=150*d,ch=58*d,px=Math.min(W-cw-20*d,x+18*d),py=Math.max(16*d,y-ch-14*d);c.fillStyle='#1c211a';
  c.beginPath();c.roundRect?c.roundRect(px,py,cw,ch,10*d):c.rect(px,py,cw,ch);c.fill();
  c.fillStyle='rgba(238,240,230,.5)';c.fillText('T-01 · SAMPLE',px+12*d,py+18*d);c.fillStyle='#eef0e6';c.font=`500 ${11*d}px JetBrains Mono,monospace`;
  c.fillText('ALT 120 M  '+(42+Math.round(6*Math.sin(t)))+' KM/H',px+12*d,py+38*d);c.fillStyle='#8ef07a';c.beginPath();c.arc(px+cw-14*d,py+16*d,3*d,0,7);c.fill();
 },
};
const NG='#8ef07a',KH='#c7bf9c';const cap=()=>devicePixelRatioCap();
const COMMON=`precision highp float;uniform vec2 r;uniform float t;uniform vec2 m;
float h(vec2 p){return fract(sin(dot(p,vec2(127.1,311.7)))*43758.5453);}
float n(vec2 p){vec2 i=floor(p),f=fract(p);f=f*f*(3.-2.*f);return mix(mix(h(i),h(i+vec2(1,0)),f.x),mix(h(i+vec2(0,1)),h(i+vec2(1,1)),f.x),f.y);}
float fbm(vec2 p){float v=0.,a=.5;mat2 R=mat2(.8,.6,-.6,.8);for(int i=0;i<5;i++){v+=a*n(p);p=R*p*2.02;a*=.5;}return v;}
const vec3 NIGHT=vec3(.078,.094,.071);const vec3 OLIVE=vec3(.29,.32,.21);const vec3 KHAKI=vec3(.78,.75,.61);const vec3 NG=vec3(.557,.941,.478);`;
const SHADERS={
 /* sonar / radar bloom */
 radar:COMMON+`void main(){vec2 uv=gl_FragCoord.xy/r;float as=r.x/r.y;vec2 c=vec2(.72+(m.x-.5)*.04,.46+(m.y-.5)*.04);vec2 p=(uv-c)*vec2(as,1.);
  float d=length(p),a=atan(p.y,p.x);float R=.62;
  float sw=mod(t*.8,6.2832);float da=mod(sw-a+6.2832,6.2832);
  float trail=exp(-da*2.2)*smoothstep(R,.0,d);
  float rings=smoothstep(.0025,.0,abs(fract(d*7.)-.5)/7.)*smoothstep(R,.0,d)*.35;
  float pulse=0.;for(int i=0;i<3;i++){float pr=fract(t*.18+float(i)/3.)*R;pulse+=exp(-abs(d-pr)*60.)*(1.-pr/R)*.6;}
  float cross=(smoothstep(.0018,.0,abs(p.x))+smoothstep(.0018,.0,abs(p.y)))*smoothstep(R,.0,d)*.25;
  float glow=exp(-d*3.2)*.18;
  vec3 col=NIGHT+OLIVE*.35*fbm(uv*3.+t*.02);
  col+=NG*(trail*.55+rings+pulse*.5+cross+glow);
  col+=NG*smoothstep(.003,.0,abs(d-R))*.5;
  col+=(h(gl_FragCoord.xy+fract(t))-.5)*.04;col*=1.-.35*length(uv-.6);gl_FragColor=vec4(col,1.);}`,
 /* night-vision ISR scope over terrain */
 scope:COMMON+`void main(){vec2 uv=gl_FragCoord.xy/r;float as=r.x/r.y;vec2 c=vec2(.7,.5);vec2 p=(uv-c)*vec2(as,1.);float d=length(p);float R=.4;
  vec2 q=uv*vec2(as,1.)*2.6+vec2(t*.03,t*.012)+(m-.5)*.25;float e=fbm(q);float e2=fbm(q*2.+3.);
  float contour=smoothstep(.04,.0,abs(fract(e*9.)-.5))*.35;
  float shade=e*.9+e2*.25;vec3 nv=mix(vec3(.02,.06,.02),NG*.85,shade);nv+=NG*contour*.5;
  nv*=.85+.15*sin(gl_FragCoord.y*1.6);nv+=(h(gl_FragCoord.xy*.7+fract(t*3.))-.5)*.12;
  float scope=smoothstep(R,R-.006,d);float edge=smoothstep(.006,.0,abs(d-R));
  vec3 bg=NIGHT+OLIVE*.25*fbm(uv*4.);
  vec3 col=mix(bg,nv*(1.-d/R*.55),scope)+NG*edge*.6;
  col+=NG*.05*exp(-d*2.);col*=1.-.3*length(uv-.6);gl_FragColor=vec4(col,1.);}`,
 /* glowing planet horizon (OriginKit "beyond horizon" idea) */
 horizon:COMMON+`void main(){vec2 uv=gl_FragCoord.xy/r;float as=r.x/r.y;vec2 p=uv*vec2(as,1.);
  vec2 c=vec2(as*1.02+.35,as<1.?-.85:-.55);float R=1.05;float d=length(p-c)-R;float ang=atan(p.y-c.y,p.x-c.x);
  float hot=1.5708+.38*sin(t*.12)+(m.x-.5)*.35;float hd=ang-hot;float spot=exp(-hd*hd*28.);
  float atm=exp(-max(d,0.)*7.)*(.35+spot*1.2)+exp(-max(d,0.)*28.)*(.4+spot);
  float rim=smoothstep(.006,.0,abs(d))*(.5+spot*1.5);
  vec3 col=NIGHT*.9;
  col+=mix(KHAKI*.55,NG,.55+spot*.45)*atm*.55;col+=mix(KHAKI,vec3(1.),spot*.6)*rim;
  float inside=smoothstep(.0,-.01,d);float lat=smoothstep(.012,.0,abs(fract((p.y-c.y)*9.)-.5)/9.)*inside*.06*exp(d*4.);
  float lon=smoothstep(.01,.0,abs(fract(ang*14.+t*.01)-.5)/14.)*inside*.05*exp(d*4.);
  col=mix(col,NIGHT*.6+OLIVE*.12*fbm(p*3.),inside*.85)+NG*(lat+lon)+NG*spot*exp(d*9.)*inside*.25;
  float st=step(.9975,h(floor(gl_FragCoord.xy/2.)))*(1.-inside)*smoothstep(.0,.5,d);col+=KHAKI*st*(.4+.6*sin(t*2.+h(floor(gl_FragCoord.xy))*20.));
  col+=(h(gl_FragCoord.xy+fract(t))-.5)*.035;gl_FragColor=vec4(col,1.);}`,
 /* dark field with soft green light for the C2 picture */
 field:COMMON+`void main(){vec2 uv=gl_FragCoord.xy/r;float as=r.x/r.y;vec2 p=uv*vec2(as,1.);
  float g=exp(-length(p-vec2(as*.7,.38))*1.8);vec3 col=NIGHT+OLIVE*.25*fbm(p*2.5+t*.02)+NG*g*.12+KHAKI*exp(-length(p-vec2(as*.95,.9))*3.)*.06;
  col+=(h(gl_FragCoord.xy+fract(t))-.5)*.035;col*=1.-.3*length(uv-.6);gl_FragColor=vec4(col,1.);}`,
 /* muted pixel camouflage dissolving into a dark field */
 camo:COMMON+`void main(){vec2 uv=gl_FragCoord.xy/r;float as=r.x/r.y;float cell=14.*${'${'}DPR${'}'};vec2 g=floor(gl_FragCoord.xy/cell);vec2 cu=g*cell/r;
  float v=fbm(cu*vec2(as,1.)*2.4+vec2(t*.02,-t*.015));
  vec3 c1=vec3(.29,.32,.21),c2=vec3(.42,.43,.29),c3=vec3(.56,.54,.38),c4=vec3(.70,.66,.52);
  vec3 camo=v<.42?c1:v<.52?c2:v<.6?c3:c4;
  float wave=cu.x*.9+cu.y*.35-fract(t*.06)*2.2+.4;float mx=(m.x-.5)*.2;
  float rev=smoothstep(.0,.35,wave+mx+ (h(g)-.5)*.12);
  float edge=smoothstep(.06,.0,abs(wave+mx+(h(g)-.5)*.12-.0));
  vec3 col=mix(NIGHT,camo*.85,rev*.6*smoothstep(.35,.85,uv.x));
  col+=NG*edge*.55*smoothstep(.3,.75,uv.x);
  float gridl=step(cell-1.,mod(gl_FragCoord.x,cell))+step(cell-1.,mod(gl_FragCoord.y,cell));col*=1.-gridl*.12;
  col+=(h(gl_FragCoord.xy+fract(t))-.5)*.035;gl_FragColor=vec4(col,1.);}`
};
function glScene(cv,key){
  const gl=cv.getContext('webgl',{antialias:false});if(!gl)return null;const D=cap();
  const src=SHADERS[key].replace(/\$\{DPR\}/g,D.toFixed(2));
  const mk=(ty,s)=>{const o=gl.createShader(ty);gl.shaderSource(o,s);gl.compileShader(o);if(!gl.getShaderParameter(o,gl.COMPILE_STATUS))console.error(key,gl.getShaderInfoLog(o));return o};
  const p=gl.createProgram();gl.attachShader(p,mk(gl.VERTEX_SHADER,'attribute vec2 a;void main(){gl_Position=vec4(a,0.,1.);}'));gl.attachShader(p,mk(gl.FRAGMENT_SHADER,src));gl.bindAttribLocation(p,0,'a');gl.linkProgram(p);gl.useProgram(p);
  const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),gl.STATIC_DRAW);gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);
  const ur=gl.getUniformLocation(p,'r'),ut=gl.getUniformLocation(p,'t'),um=gl.getUniformLocation(p,'m');
  return(t,P)=>{const rc=cv.getBoundingClientRect(),W=Math.round(rc.width*D),H=Math.round(rc.height*D);if(!W)return;if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H}
    gl.viewport(0,0,W,H);gl.uniform2f(ur,W,H);gl.uniform1f(ut,t);gl.uniform2f(um,P.x,1-P.y);gl.drawArrays(gl.TRIANGLES,0,3)};
}
const OV={
 radar(c,W,H,t,s,d,P){ // targets that light up when the sweep passes; one gets a track box
  const cx=W*.72,cy=H*.54,R=H*.62,sw=(t*.8)%(Math.PI*2);c.font=`500 ${10*d}px JetBrains Mono,monospace`;
  s.tg.forEach((g,i)=>{const a=g.a+t*g.v,rr=g.r*R,x=cx+Math.cos(a)*rr,y=cy-Math.sin(a)*rr;
    let da=(sw-a)%(Math.PI*2);if(da<0)da+=Math.PI*2;const lit=Math.exp(-da*1.6);
    c.fillStyle=`rgba(142,240,122,${.25+lit*.75})`;c.beginPath();c.arc(x,y,(2.5+lit*2)*d,0,7);c.fill();
    if(i===0&&W/d>=600){const sz=16*d;c.strokeStyle=`rgba(240,196,106,${.6+lit*.4})`;c.lineWidth=1.2*d;c.strokeRect(x-sz,y-sz,sz*2,sz*2);
      c.fillStyle='rgba(240,196,106,.9)';c.fillText('TRACK T-01 · SAMPLE',x+sz+6*d,y-sz+8*d);c.fillStyle='rgba(238,240,230,.55)';c.fillText('ALT 120 M · 18 M/S',x+sz+6*d,y-sz+22*d)}});
  c.fillStyle='rgba(238,240,230,.45)';c.fillText('DETECT · DECIDE · ACT',cx-R*.55,cy+R*.98-6*d);
 },
 scope(c,W,H,t,s,d,P){ // reticle + detection boxes
  const cx=W*.7,cy=H*.5,R=H*.4;c.strokeStyle='rgba(142,240,122,.55)';c.lineWidth=d;
  c.beginPath();c.moveTo(cx-R,cy);c.lineTo(cx-R*.12,cy);c.moveTo(cx+R*.12,cy);c.lineTo(cx+R,cy);c.moveTo(cx,cy-R);c.lineTo(cx,cy-R*.12);c.moveTo(cx,cy+R*.12);c.lineTo(cx,cy+R);c.stroke();
  for(let i=-8;i<=8;i++){if(!i)continue;const L=i%4?4:8;c.beginPath();c.moveTo(cx+i*R/9,cy-L*d);c.lineTo(cx+i*R/9,cy+L*d);c.stroke()}
  c.font=`500 ${10*d}px JetBrains Mono,monospace`;
  s.det.forEach((b,i)=>{const x=cx+(b.x+Math.sin(t*.3+i)*.02)*R,y=cy+(b.y+Math.cos(t*.25+i)*.02)*R,w=b.w*R,h=b.h*R,on=(Math.sin(t*.9+i*2)+1)/2;
    c.strokeStyle=`rgba(142,240,122,${.5+on*.5})`;c.lineWidth=1.3*d;const k=8*d;
    [[x,y,1,1],[x+w,y,-1,1],[x,y+h,1,-1],[x+w,y+h,-1,-1]].forEach(([px,py,sx,sy])=>{c.beginPath();c.moveTo(px,py+k*sy);c.lineTo(px,py);c.lineTo(px+k*sx,py);c.stroke()});
    c.fillStyle='rgba(142,240,122,.85)';c.fillText(b.lab,x,y-6*d)});
  c.fillStyle='rgba(238,240,230,.55)';c.fillText('ISR · NIGHT · LOW LIGHT',cx-R,cy+R+18*d);c.fillText('ZOOM 4.0× · SAMPLE FEED',cx+R*.35,cy+R+18*d);
 },
 horizon(c,W,H,t,s,d,P){ // small orbiting flare + mono caption only
  c.font=`500 ${10*d}px JetBrains Mono,monospace`;c.fillStyle='rgba(238,240,230,.5)';c.fillText('LAUNCH · PROCUREMENT · PRIMES · INVESTORS',W*.56,H*.9);
 },
 cop(c,W,H,t,s,d,P){ // common operating picture on a tilted plane: dot terrain, tracks with trails, links to command
  const ry=-.35+(P.x-.5)*.3,rx=1.0+(P.y-.5)*.15,ca=Math.cos(ry),sa=Math.sin(ry),cb=Math.cos(rx),sb=Math.sin(rx),cx=W*.72,cy=H*.5,S=Math.min(W*.34,H*.7);
  const pr=(x,y,z)=>{let X=x*ca+z*sa,Z=-x*sa+z*ca,Y=y*cb-Z*sb;Z=y*sb+Z*cb;const f=2.6/(Z+3.2);return[cx+X*f*S,cy+Y*f*S,f]};
  const ht=(x,z)=>.08*Math.sin(x*3.1+1)*Math.cos(z*2.7)+.05*Math.sin((x+z)*5.3+t*.2);
  c.globalCompositeOperation='lighter';
  for(let i=0;i<=34;i++)for(let j=0;j<=22;j++){const x=(i/34-.5)*2.4,z=(j/22-.5)*1.6,y=-ht(x,z),q=pr(x,y,z),hh=ht(x,z);
    c.fillStyle=`rgba(${hh>.06?'142,240,122':'199,191,156'},${.22+Math.max(0,hh)*4+q[2]*.12})`;const sz=(1.4+q[2]*.8)*d;c.fillRect(q[0]-sz/2,q[1]-sz/2,sz,sz)}
  const cmd=pr(.1,-.02,.05);
  const cols={f:'140,196,220',h:'224,154,146',n:'154,216,140',u:'226,197,110'};
  s.trk.forEach((k,i)=>{const pos=u=>{const a=k.a+u*k.v;return[Math.cos(a)*k.rx+k.ox,Math.sin(a*1.3)*k.rz+k.oz]};
    c.beginPath();for(let q=0;q<=24;q++){const[x,z]=pos(t-q*.25),P2=pr(x,-ht(x,z)-.02,z);q?c.lineTo(P2[0],P2[1]):c.moveTo(P2[0],P2[1])}
    c.strokeStyle=`rgba(${cols[k.k]},.35)`;c.lineWidth=1.4*d;c.stroke();
    const[x,z]=pos(t),P0=pr(x,-ht(x,z)-.02,z);
    if(k.k!=='h'){c.strokeStyle='rgba(142,240,122,.16)';c.lineWidth=d;c.beginPath();c.moveTo(P0[0],P0[1]);c.lineTo(cmd[0],cmd[1]);c.stroke();
      const f=(t*.4+i*.21)%1;c.fillStyle='rgba(142,240,122,.9)';c.beginPath();c.arc(P0[0]+(cmd[0]-P0[0])*f,P0[1]+(cmd[1]-P0[1])*f,1.8*d,0,7);c.fill()}
    c.shadowColor=`rgb(${cols[k.k]})`;c.shadowBlur=12*d;c.fillStyle=`rgba(${cols[k.k]},.95)`;const z2=7*d*P0[2];c.beginPath();
    if(k.k==='h'){c.moveTo(P0[0],P0[1]-z2);c.lineTo(P0[0]+z2,P0[1]);c.lineTo(P0[0],P0[1]+z2);c.lineTo(P0[0]-z2,P0[1])}else c.rect(P0[0]-z2,P0[1]-z2*.7,z2*2,z2*1.4);c.fill();c.shadowBlur=0});
  c.globalCompositeOperation='source-over';
  for(let k=0;k<3;k++){const rr=((t*.35+k/3)%1);c.strokeStyle=`rgba(142,240,122,${.6*(1-rr)})`;c.lineWidth=1.2*d;c.beginPath();c.ellipse(cmd[0],cmd[1],rr*90*d,rr*90*d*Math.cos(rx),0,0,7);c.stroke()}
  c.fillStyle='#eef0e6';c.beginPath();c.arc(cmd[0],cmd[1],4*d,0,7);c.fill();
  c.font=`500 ${10*d}px JetBrains Mono,monospace`;c.fillStyle='rgba(238,240,230,.6)';c.fillText('COMMON PICTURE · SAMPLE',W*.56,H*.88);c.fillStyle='rgba(142,240,122,.85)';c.fillText('9 TRACKS · 2 TASKS · SHARED',W*.56,H*.88+14*d);
 },
 camo(c,W,H,t,s,d,P){ // mark forming in the dissolve edge (generic geometric mark, not a real logo)
  if(W/d<1100)return;const cx=W*.89,cy=H*.6,R=Math.min(W,H)*.07,ph=(t%10)/10,a=Math.min(1,ph*3)*(ph<.9?1:(1-ph)*10);
  c.globalAlpha=a;c.fillStyle='rgba(20,24,18,.88)';c.beginPath();c.roundRect?c.roundRect(cx-R*1.3,cy-R*1.3,R*2.6,R*2.6,18*d):c.rect(cx-R*1.3,cy-R*1.3,R*2.6,R*2.6);c.fill();
  c.strokeStyle='#eef0e6';c.lineWidth=R*.2;c.beginPath();c.moveTo(cx-R*.75,cy+R*.6);c.lineTo(cx,cy-R*.75);c.lineTo(cx+R*.75,cy+R*.6);c.stroke();
  c.fillStyle=NG;c.shadowColor=NG;c.shadowBlur=10*d;c.beginPath();c.arc(cx,cy+R*.25,R*.12,0,7);c.fill();c.shadowBlur=0;
  c.font=`500 ${10*d}px JetBrains Mono,monospace`;c.fillStyle='rgba(238,240,230,.6)';c.fillText('LOGO · DECK · SITE · 3D',cx-R*1.3,cy+R*1.3+18*d);c.globalAlpha=1;
 },
 geoint(c,W,H,t,s,d,P){ // dotted globe + orbits + imaging footprint (2D only)
  c.fillStyle='#10130e';c.fillRect(0,0,W,H);
  const cx=W*.74,cy=H*.56,R=Math.min(W*.19,H*.36),rot=t*.12+(P.x-.5)*.6,tilt=.35+(P.y-.5)*.2;
  const hz=c.createRadialGradient(cx,cy,R*.95,cx,cy,R*1.5);hz.addColorStop(0,'rgba(142,240,122,.22)');hz.addColorStop(1,'rgba(142,240,122,0)');c.fillStyle=hz;c.beginPath();c.arc(cx,cy,R*1.5,0,7);c.fill();
  c.fillStyle='#141812';c.beginPath();c.arc(cx,cy,R,0,7);c.fill();
  s.dots.forEach(p=>{let x=p[0]*Math.cos(rot)+p[2]*Math.sin(rot),z=-p[0]*Math.sin(rot)+p[2]*Math.cos(rot),y=p[1]*Math.cos(tilt)-z*Math.sin(tilt);z=p[1]*Math.sin(tilt)+z*Math.cos(tilt);
    if(z<0)return;const land=p[3];c.fillStyle=land?`rgba(199,191,156,${.45+z*.55})`:`rgba(142,240,122,${.1+z*.3})`;const sz=(land?2:1.2)*d;c.fillRect(cx+x*R-sz/2,cy+y*R-sz/2,sz,sz)});
  // orbits
  [[1.35,.32,.18],[1.6,.22,-.12]].forEach((o,i)=>{c.strokeStyle='rgba(199,191,156,.28)';c.lineWidth=d;c.beginPath();c.ellipse(cx,cy,R*o[0],R*o[0]*o[1],o[2],0,7);c.stroke();
    const a=t*(.35-i*.12)+i*2,x=cx+Math.cos(a)*R*o[0]*Math.cos(o[2])-Math.sin(a)*R*o[0]*o[1]*Math.sin(o[2]),y=cy+Math.cos(a)*R*o[0]*Math.sin(o[2])+Math.sin(a)*R*o[0]*o[1]*Math.cos(o[2]);
    c.fillStyle='#eef0e6';c.beginPath();c.arc(x,y,3*d,0,7);c.fill();
    if(i===0&&Math.sin(a)>-.2){const fx=cx+(x-cx)*.55,fy=cy+(y-cy)*.4+R*.15;const g=c.createLinearGradient(x,y,fx,fy);g.addColorStop(0,'rgba(142,240,122,.45)');g.addColorStop(1,'rgba(142,240,122,.05)');
      c.fillStyle=g;c.beginPath();c.moveTo(x,y);c.lineTo(fx-18*d,fy);c.lineTo(fx+18*d,fy);c.closePath();c.fill();c.strokeStyle='rgba(142,240,122,.8)';c.strokeRect(fx-18*d,fy-6*d,36*d,12*d);
      c.font=`500 ${10*d}px JetBrains Mono,monospace`;c.fillStyle='rgba(142,240,122,.9)';c.fillText('TASKED · SAMPLE',fx+24*d,fy+4*d)}});
  c.font=`500 ${10*d}px JetBrains Mono,monospace`;c.fillStyle='rgba(238,240,230,.5)';c.fillText('LEO · 520 KM · REVISIT 90 MIN',cx-R*.7,cy-R*1.12);
 }
};
/* grain gradient (Componentry, MIT) */
const GRAIN={"v": "attribute vec2 a_position;\nvoid main() { gl_Position = vec4(a_position, 0., 1.); }", "f": "precision highp float;\nuniform vec2 u_resolution;\nuniform float u_ratio, u_angle, u_position, u_curve, u_softness, u_scale;\nuniform float u_grain, u_grainSize, u_seed, u_time;\nuniform vec3 u_light, u_mid, u_dark;\nfloat hash(vec2 p) {\n  vec3 p3 = fract(vec3(p.xyx) * .1031);\n  p3 += dot(p3, p3.yzx + 33.33);\n  return fract((p3.x + p3.y) * p3.z);\n}\nvoid main() {\n  vec2 uv = gl_FragCoord.xy / u_resolution;\n  uv.y = 1. - uv.y;\n  vec2 p = uv - .5;\n  float aspect = u_resolution.x / u_resolution.y;\n  p.x *= aspect;\n  float c = cos(u_angle), s = sin(u_angle);\n  p = mat2(c, -s, s, c) * p;\n  p.x /= aspect;\n  p = p / u_scale + .5;\n  // A continuous breathing cycle: the silhouette, diffusion and light move\n  // together. The slower secondary wave prevents a mechanical back-and-forth.\n  float breath = sin(u_time * .52);\n  float undertow = sin(u_time * .31);\n  float bend = u_curve + sin(u_time * .52 - .7) * .12;\n  float edge = .32 + bend * pow(1. - p.y, 2.) + u_position\n    + breath * .115 + undertow * .035;\n  float distanceToEdge = p.x - edge\n    + sin(p.y * 4. + u_time * .38) * .035;\n  float diffusion = u_softness * (1. + breath * .28);\n  float shadow = smoothstep(-diffusion, diffusion * .45, distanceToEdge);\n  vec2 lightCenter = vec2(.04 + breath * .13, .04 + undertow * .16);\n  vec2 lightUV = (p - lightCenter) * vec2(1.9, 1.7);\n  float mint = exp(-dot(lightUV, lightUV));\n  vec3 light = mix(u_light, u_mid, mint * (.66 + breath * .1));\n  vec3 color = mix(light, u_mid * (.68 + breath * .035),\n    smoothstep(-diffusion * 1.8, .02, distanceToEdge));\n  color = mix(color, u_dark, shadow);\n  vec2 grainUV = floor(gl_FragCoord.xy / (u_ratio * u_grainSize));\n  float noise = hash(grainUV + mod(u_seed, 1000.) * 13.7) - .5;\n  // Slightly stronger texture in the shadows, without a flickering noise layer.\n  color += noise * u_grain * mix(.48, .32, shadow);\n  gl_FragColor = vec4(clamp(color, 0., 1.), 1.);\n}"};
const hex=h=>{h=h.replace('#','');return[0,2,4].map(i=>parseInt(h.slice(i,i+2),16)/255)};
const GCFG={dark:{angle:Math.PI,position:.12,curve:.48,softness:.2,scale:1,grain:.3,grainSize:1,seed:1,light:'#7a3f86',mid:'#2e2570',dark:'#0b0b0e'},
 light:{light:'#ffffff',mid:'#d9d1ff',dark:'#f2f0ec',grain:.12}};
function grainScene(cv){
  const gl=cv.getContext('webgl2',{premultipliedAlpha:false,antialias:false});if(!gl)return null;
  const mk=(ty,s)=>{const o=gl.createShader(ty);gl.shaderSource(o,s.trim());gl.compileShader(o);return o};
  const p=gl.createProgram();gl.attachShader(p,mk(gl.VERTEX_SHADER,GRAIN.v));gl.attachShader(p,mk(gl.FRAGMENT_SHADER,GRAIN.f));
  const attr=(GRAIN.v.match(/(?:attribute|in)\s+vec[24]\s+(\w+)/)||[])[1]||'position';gl.bindAttribLocation(p,0,attr);gl.linkProgram(p);gl.useProgram(p);
  const n=gl.getProgramParameter(p,gl.ACTIVE_UNIFORMS),U={};for(let i=0;i<n;i++){const u=gl.getActiveUniform(p,i);U[u.name]={loc:gl.getUniformLocation(p,u.name),type:u.type}}
  const b=gl.createBuffer();gl.bindBuffer(gl.ARRAY_BUFFER,b);gl.bufferData(gl.ARRAY_BUFFER,new Float32Array([-1,-1,1,-1,-1,1,1,1]),gl.STATIC_DRAW);gl.enableVertexAttribArray(0);gl.vertexAttribPointer(0,2,gl.FLOAT,false,0,0);
  const set=(u,v)=>{if(v==null)return;let a=typeof v==='string'?hex(v):v;if(typeof a==='number')a=[a];const T=u.type;
    if(T===gl.FLOAT)gl.uniform1f(u.loc,a[0]);else if(T===gl.FLOAT_VEC2)gl.uniform2f(u.loc,a[0],a[1]||0);else if(T===gl.FLOAT_VEC3)gl.uniform3f(u.loc,a[0],a[1],a[2]);else if(T===gl.FLOAT_VEC4)gl.uniform4f(u.loc,a[0],a[1],a[2],a[3]==null?1:a[3]);else if(T===gl.INT||T===gl.BOOL)gl.uniform1i(u.loc,a[0])};
  return(t,P)=>{const D=Math.min(devicePixelRatio||1,1.25),rc=cv.getBoundingClientRect(),W=Math.round(rc.width*D),H=Math.round(rc.height*D);if(!W||!H)return;
    if(cv.width!==W||cv.height!==H){cv.width=W;cv.height=H}gl.viewport(0,0,W,H);
    const cfg=Object.assign({},GCFG.dark,mq.matches?{}:GCFG.light);
    for(const nm in U){const k=nm.replace(/^u_/,'');if(k==='time')set(U[nm],t);else if(k==='res'||k==='resolution')set(U[nm],[W,H]);else if(k==='mouse'||k==='pointer')set(U[nm],[P.x,1-P.y]);else if(k==='pixelRatio'||k==='ratio')set(U[nm],D);else set(U[nm],cfg[k])}
    gl.drawArrays(gl.TRIANGLE_STRIP,0,4)}}

/* ---------- mount ---------- */

/* ---------- one layout for all scene pages (Illia, 9 Nov: A–E) ---------- */
function unify(){
 document.body.classList.add('hfx-page');
 const st3=document.createElement('style');st3.id='hfx-unify';st3.textContent=`
 body.hfx-page main section.dx.dx-sec{padding-top:120px!important;padding-bottom:120px!important}
 @media (max-width:991px){body.hfx-page main section.dx.dx-sec{padding-top:80px!important;padding-bottom:80px!important}}
 @media (max-width:767px){body.hfx-page main section.dx.dx-sec{padding-top:64px!important;padding-bottom:64px!important}}
 body.hfx-page .hfx-hl{text-align:left!important;margin-left:0!important;margin-right:0!important;max-width:none!important}
 body.hfx-page .hfx-hl .dx-lead{margin-left:0!important;margin-right:0!important;max-width:640px!important;text-align:left!important}
 /* same geometry as the Defense & Military Tech "We are" block (padding-global + container-large + Clutch on the right) */
 body.hfx-page main .dx.dx-sec.is-tight{padding-top:56px!important;padding-bottom:56px!important;margin-top:0!important}
 body.hfx-page main section.dx.dx-sec.hfx-about{padding-top:120px!important}
 body.hfx-page .hfx-about .dx-wrap{display:flex;justify-content:space-between;align-items:flex-start;gap:80px;max-width:1520px;margin-left:auto;margin-right:auto;padding-left:32px;padding-right:32px}
 body.hfx-page .hfx-about .dx-head{flex:1 1 auto;max-width:974px!important}
 body.hfx-page .hfx-about .dx-lead{max-width:none!important;font-size:16px!important;line-height:1.55!important}
 body.hfx-page .hfx-about .clutch-w11{flex:0 0 300px;width:300px;margin-top:24px}
 @media (max-width:991px){body.hfx-page main section.dx.dx-sec.hfx-about{padding-top:112px!important}body.hfx-page .hfx-about .dx-wrap{display:grid;grid-template-columns:1fr 1fr;gap:32px;padding-left:36px;padding-right:36px}body.hfx-page .hfx-about .clutch-w11{width:auto;max-width:300px}body.hfx-page .hfx-about .dx-lead{font-size:15px!important;line-height:1.4!important}}
 @media (max-width:767px){body.hfx-page main .dx.dx-sec.is-tight{padding-top:16px!important;padding-bottom:24px!important}body.hfx-page main section.dx.dx-sec.hfx-about{padding-top:80px!important}body.hfx-page .hfx-about .dx-wrap{display:block;padding-left:18px;padding-right:18px}body.hfx-page .hfx-about .clutch-w11{display:none}}
 body.hfx-page .hfx-h2a{font-size:64px!important;line-height:1.05!important}
 body.hfx-page .hfx-h2b{font-size:48px!important;line-height:1.1!important}
 @media (max-width:991px){body.hfx-page .hfx-h2a{font-size:48px!important}body.hfx-page .hfx-h2b{font-size:40px!important}}
 @media (max-width:767px){body.hfx-page .hfx-h2a{font-size:34px!important}body.hfx-page .hfx-h2b{font-size:32px!important}}
 body.hfx-page .hfx-hide{display:none!important}
 body.hfx-page .hfx-awards .works_head{align-items:flex-start;text-align:left;max-width:1520px;margin-left:auto;margin-right:auto;padding-left:32px;padding-right:32px}
 body.hfx-page .hfx-awards .works_head .padding-global{padding-left:0;padding-right:0}
 body.hfx-page .hfx-awards .works_head .text-align-center{text-align:left;margin-left:0;max-width:974px}
 body.hfx-page .hfx-awards .works_head h2{font-size:64px!important;line-height:1.05!important}
 @media (max-width:991px){body.hfx-page .hfx-awards .works_head{padding-left:36px;padding-right:36px}body.hfx-page .hfx-awards .works_head h2{font-size:48px!important}}
 @media (max-width:767px){body.hfx-page .hfx-awards .works_head{padding-left:18px;padding-right:18px}body.hfx-page .hfx-awards .works_head h2{font-size:34px!important}}`;
 document.head.appendChild(st3);
 const main=document.querySelector('main')||document.body;
 // A. intro block: left text + Clutch widget on the right
 const about=[...main.querySelectorAll('section.dx.dx-sec')].find(e=>/^about cosmos studio$/i.test((e.querySelector('.dx-label')||{textContent:''}).textContent.trim()));
 if(about){about.classList.add('hfx-about');const hd=about.querySelector('.dx-head');if(hd)hd.classList.add('hfx-hl');
   if(!document.querySelector('.clutch-widget')){const w=document.createElement('div');w.className='clutch-w11';w.style.minHeight='360px';
     w.innerHTML='<div class="clutch-widget" data-url="https://widget.clutch.co" data-widget-type="11" data-height="360" data-nofollow="true" data-expandifr="true" data-scale="100" data-clutchcompany-id="2330172"></div>';
     about.querySelector('.dx-wrap').appendChild(w);
     const lab=()=>{const f=w.querySelector('iframe');if(f&&f.getAttribute('aria-label')!=='Client reviews for Cosmos Studio on Clutch')f.setAttribute('aria-label','Client reviews for Cosmos Studio on Clutch')};new MutationObserver(lab).observe(w,{childList:true,subtree:true});const sc=document.createElement('script');sc.src='https://widget.clutch.co/static/js/widget.js';sc.async=true;sc.onload=()=>{if(window.CLUTCHCO&&typeof CLUTCHCO.Init==='function')CLUTCHCO.Init()};document.body.appendChild(sc);}}
 // B. centred text only for short heads; long ones go left
 main.querySelectorAll('.dx-head').forEach(hd=>{const n=[...hd.querySelectorAll('.dx-lead,p')].reduce((a,p)=>a+p.textContent.trim().length,0);if(n>140)hd.classList.add('hfx-hl')});
 // D. heading scale: section 64, side/card 48
 main.querySelectorAll('h2').forEach(h=>{if(h.closest('.hfx-sec'))return;const c=h.className||'';
   if(/dx-cta2-title|lt-h/.test(c)||h.closest('section.section_about'))h.classList.add('hfx-h2b');
   else if(/heading-style-h1/.test(c)&&h.closest('.section_clients'))h.classList.add('hfx-h2a');
   else if(/heading-style-h3/.test(c)&&h.closest('.section_clients'))h.classList.add('hfx-h2a');});
 // long section headings: cap the line length (Illia, 9 Nov), keep the block on the same side as its text
 main.querySelectorAll('h2').forEach(h=>{if(h.closest('.hfx-sec,.dx-case,.lt,.dx-cta2'))return;const cs=getComputedStyle(h);if(h.getBoundingClientRect().width<=1000)return;
   h.style.maxWidth='15em';if(cs.textAlign==='center'){h.style.marginLeft='auto';h.style.marginRight='auto'}else{h.style.marginLeft='0'}});
 // hero H1 optical alignment: pull the first glyph's side bearing back so its ink sits on the same line as the lead text and the Clutch row (Illia, 9 Nov)
 setTimeout(()=>{const oh=document.querySelector('.hfx-left .works_head h1');
 if(oh){const bear=el=>{const cs=getComputedStyle(el),t=(el.textContent||'').trim()[0];if(!t)return 0;const c=document.createElement('canvas').getContext('2d');c.font=cs.fontStyle+' '+cs.fontWeight+' '+cs.fontSize+' '+cs.fontFamily;return -c.measureText(t).actualBoundingBoxLeft};
  const fix=()=>{if(innerWidth<768){oh.style.marginLeft='';return}const p=[...oh.closest('.works_head').querySelectorAll('.about_paragraph,p')].find(e=>e.offsetWidth&&e.textContent.trim().length>40);const d=bear(oh)-(p?bear(p):0);oh.style.marginLeft=(d>0&&d<24)?(-d).toFixed(1)+'px':''};
  fix();if(document.fonts)document.fonts.ready.then(fix);addEventListener('resize',fix)}},0);
 // E. no two marquees in a row: the awards marquee moves up under the About block (as on the Defense industry page); client logos stay where they are
 const hdrs=[...main.querySelectorAll('section.section_about-header')];
 const aw=hdrs.find(h=>/award/i.test((h.querySelector('h2')||{textContent:''}).textContent));
 if(aw&&about){aw.classList.add('hfx-awards');const lb=aw.querySelector('.text-style-label-caption');if(lb)lb.textContent='Awards';about.after(aw);}
 main.querySelectorAll('section.section_about').forEach(s=>{if(!s.classList.contains('hfx-sec')&&/boutique design team/i.test(s.textContent))s.classList.add('hfx-hide')});
}
function start(){ill();unify();
  const h1=document.querySelector('h1');if(!h1)return;const sec=h1.closest('section');const head=h1.closest('.works_head')||h1.parentElement.parentElement;if(!sec||!head)return;
  sec.style.position=sec.style.position||'relative';sec.style.isolation='isolate';
  const stage=document.createElement('div');stage.className='hfx-stage'+(pg.grain?'':' hfx-edge');sec.classList.add('hfx-sec');if(pg.left)sec.classList.add('hfx-left');stage.setAttribute('aria-hidden','true');
  const glc=(pg.gl||pg.grain)?document.createElement('canvas'):null,ovc=pg.grain?null:document.createElement('canvas'),scrim=document.createElement('div');scrim.className='hfx-scrim';
  if(glc)stage.appendChild(glc);if(ovc)stage.appendChild(ovc);stage.appendChild(scrim);sec.prepend(stage);
  const darkScene=!pg.grain&&!pg.light;
  function layout(){
    const sr=sec.getBoundingClientRect(),hr=head.getBoundingClientRect();
    stage.style.height=Math.round(sr.height)+'px';
    const dark=pg.grain?mq.matches:darkScene;
    // hero text gets the token set that matches the scene (dark scene -> site dark tokens; khaki scene -> light tokens)
    [...head.children].forEach(el=>{el.classList.toggle('hfx-d',dark);el.classList.toggle('hfx-l',!dark&&mq.matches);el.classList.toggle('hfx-k',!!pg.light)});
    const tb=(head.querySelector('h1').parentElement).getBoundingClientRect();
    const bg=pg.grain?'var(--_colors---bg)':(dark?'rgba(16,19,14,':'rgba(199,191,156,');
    const left=pg.left&&innerWidth>=992,cx=left?'28%':'50%',cy=(hr.top-sr.top)+(hr.height*.46),rx=Math.max(hr.width*(left?.5:.66),320),ry=Math.max(hr.height*.7,300);
    scrim.style.background=pg.grain?`radial-gradient(${rx}px ${ry}px at ${cx} ${cy}px,color-mix(in srgb,var(--_colors---bg) ${mq.matches?82:92}%,transparent),transparent)`
      :`radial-gradient(${rx}px ${ry}px at ${cx} ${cy}px,${bg}.86),${bg}.55) 55%,${bg}0))`;
    if(!glc&&!ovc)return;
  }
  // move the hero image/video below the first "About" block (Illia, 9 Nov) – only on pages with the new hero
  (function(){const pgl=h1.closest('.padding-global')||sec;const media=[...pgl.children].find(e=>!e.contains(h1)&&e.querySelector('img,video'));if(!media)return;
    const lab=[...document.querySelectorAll('div,span,p')].find(e=>!sec.contains(e)&&e.children.length===0&&/^(about cosmos studio|we are)$/i.test(e.textContent.trim()));if(!lab)return;
    let anchor=lab.closest('section');if(anchor&&anchor.nextElementSibling&&anchor.nextElementSibling.classList.contains('hfx-awards'))anchor=anchor.nextElementSibling;if(!anchor||!anchor.parentElement)return;
    const prev=media.previousElementSibling;if(prev&&/padding-section/.test(prev.className))prev.style.display='none';
    const wrap=document.createElement('div');wrap.className='padding-global';wrap.setAttribute('data-hfx-media','');wrap.appendChild(media);
    const gap=document.createElement('div');gap.className='padding-section-medium';
    anchor.after(wrap);wrap.after(gap);media.querySelectorAll('video').forEach(v=>{try{v.play()}catch(e){}});})();
  layout();const ro=new ResizeObserver(layout);ro.observe(head);ro.observe(sec);mq.addEventListener('change',layout);
  const glDraw=glc?(pg.grain?grainScene(glc):glScene(glc,pg.gl)):null;
  if(glc&&!glDraw&&!pg.grain){stage.style.background='#141812'}
  const ctx=ovc?ovc.getContext('2d'):null;
  const R=rnd(PATH);
  const s={k:R()*6,gx:.62+R()*.25,bl:R()*6,cx:.65+R()*.15,cy:.4+R()*.2,
    wp:[[.52+R()*.06,.78],[.62+R()*.06,.42+R()*.1],[.78+R()*.05,.62+R()*.1],[.9,.25+R()*.1]],
    tg:[...Array(6)].map(()=>({a:R()*6.28,r:.25+R()*.6,v:(R()-.5)*.06})),
    det:[{x:-.45,y:-.2,w:.22,h:.16,lab:'VEH · 0.92'},{x:.15,y:.1,w:.18,h:.14,lab:'STRUCT · 0.81'},{x:-.1,y:-.55,w:.14,h:.12,lab:'VEH · 0.77'}],
    dots:[],trk:[...Array(9)].map((_,j)=>({a:R()*6,v:.12+R()*.15,rx:.2+R()*.35,rz:.12+R()*.25,ox:(R()-.5)*1.3,oz:(R()-.5)*.7,k:['f','f','f','h','h','n','u','f','h'][j]}))};
  if(pg.ov==='geoint')for(let k=0;k<2600;k++){const y=1-2*(k+.5)/2600,rr=Math.sqrt(1-y*y),an=k*2.39996;const x=Math.cos(an)*rr,z=Math.sin(an)*rr;
    const land=Math.sin(x*3.1+1)*Math.cos(y*2.7)+Math.sin(z*4.3+y*2)*.6>.35;s.dots.push([x,y,z,land])}
  const P={x:.65,y:.45,on:false};
  addEventListener('pointermove',e=>{const r=stage.getBoundingClientRect();if(e.clientY>r.bottom)return P.on=false;P.x=(e.clientX-r.left)/r.width;P.y=(e.clientY-r.top)/r.height;P.on=true},{passive:true});
  let on=true;
  function draw(now){const t=now/1000;
    if(glDraw)glDraw(t,P);
    if(ctx){const d=cap(),rc=ovc.getBoundingClientRect(),W=Math.round(rc.width*d),H=Math.round(rc.height*d);if(!W||!H)return;
      if(ovc.width!==W||ovc.height!==H){ovc.width=W;ovc.height=H}
      if(pg.old){M[pg.old](ctx,W,H,t,s,d,P)}else{ctx.clearRect(0,0,W,H);OV[pg.ov](ctx,W,H,t,s,d,P)}}}
  new IntersectionObserver(es=>{on=es[0].isIntersecting}).observe(stage);
  draw(5000);if(reduce)return;
  (function tick(now){if(on&&!document.hidden)draw(now);requestAnimationFrame(tick)})(performance.now());
}
function ill(){
/* ---------- defense illustrations in the new palette (Illia, 9 Nov) ---------- */
(function(){if(pg.grain)return;const ILL={"dark": {"Layered permission levels": "<svg viewBox=\"0 0 300 230\" role=\"img\" aria-label=\"Layered permission levels\"><g class=\"dx-float3\"><path class=\"nx-pl\" d=\"M50 165L150 115L250 165L150 215Z\"/><path class=\"nx-l\" d=\"M50 165v6L150 221L250 171v-6M150 215v6\"/><g clip-path=\"url(#nxc0)\"><ellipse class=\"nx-topo\" cx=\"140\" cy=\"168\" rx=\"70\" ry=\"28\"/><ellipse class=\"nx-topo\" cx=\"140\" cy=\"168\" rx=\"48\" ry=\"19\"/><ellipse class=\"nx-topo\" cx=\"140\" cy=\"168\" rx=\"26\" ry=\"10\"/></g><text class=\"nx-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"18\" y=\"194\">L1 \u00b7 OPERATOR</text></g><defs><clipPath id=\"nxc0\"><path d=\"M50 165L150 115L250 165L150 215Z\"/></clipPath></defs><g class=\"dx-float2\"><path class=\"nx-pl\" d=\"M50 125L150 75L250 125L150 175Z\"/><path class=\"nx-lb\" d=\"M50 125v6L150 181L250 131v-6M150 175v6\"/><path class=\"nx-lb\" d=\"M109 125L120 119.5L131 125L120 130.5Z\"/><path class=\"nx-lb\" d=\"M139 125L150 119.5L161 125L150 130.5Z\"/><path class=\"nx-lb\" d=\"M169 125L180 119.5L191 125L180 130.5Z\"/><text class=\"nx-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"18\" y=\"146\">L2 \u00b7 ANALYST</text></g><g class=\"dx-float1\"><path class=\"nx-pl2\" d=\"M50 85L150 35L250 85L150 135Z\"/><path class=\"nx-lw\" d=\"M50 85v6L150 141L250 91v-6M150 135v6\"/><path class=\"nx-lw\" d=\"M139 85L150 79.5L161 85L150 90.5Z\"/><path class=\"nx-acc-s\" d=\"M134 78V72h6M160 72h6v6M166 92v6h-6M140 98h-6v-6\"/><circle class=\"nx-acc\" cx=\"150\" cy=\"85\" r=\"3\"/><circle class=\"nx-pulse dx-pulse\" cx=\"150\" cy=\"85\" r=\"3\"/><text class=\"nx-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"18\" y=\"98\">L3 \u00b7 COMMAND</text><text class=\"nx-labacc\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"172\" y=\"70\">ROLE \u00b7 SAMPLE</text></g></svg>", "Focused screen with one highlighted signal": "<svg viewBox=\"0 0 300 230\" role=\"img\" aria-label=\"Focused screen with one highlighted signal\"><path class=\"nx-pl\" d=\"M30 150L150 90L270 150L150 210Z\"/><path class=\"nx-grid\" d=\"M50 140L170 200\"/><path class=\"nx-grid\" d=\"M50 160L170 100\"/><path class=\"nx-grid\" d=\"M70 130L190 190\"/><path class=\"nx-grid\" d=\"M70 170L190 110\"/><path class=\"nx-grid\" d=\"M90 120L210 180\"/><path class=\"nx-grid\" d=\"M90 180L210 120\"/><path class=\"nx-grid\" d=\"M110 110L230 170\"/><path class=\"nx-grid\" d=\"M110 190L230 130\"/><path class=\"nx-grid\" d=\"M130 100L250 160\"/><path class=\"nx-grid\" d=\"M130 200L250 140\"/><path class=\"nx-fill\" d=\"M100 124L110 119L120 124v26L110 155L100 150Z\"/><path class=\"nx-l\" d=\"M100 124L110 119L120 124L110 129Z M100 124v26L110 155L120 150v-26 M110 129v26\"/><path class=\"nx-fill\" d=\"M180 120L190 115L200 120v30L190 155L180 150Z\"/><path class=\"nx-l\" d=\"M180 120L190 115L200 120L190 125Z M180 120v30L190 155L200 150v-30 M190 125v30\"/><path class=\"nx-fill\" d=\"M140 108L150 103L160 108v22L150 135L140 130Z\"/><path class=\"nx-l\" d=\"M140 108L150 103L160 108L150 113Z M140 108v22L150 135L160 130v-22 M150 113v22\"/><path class=\"nx-fill\" d=\"M140 152L150 147L160 152v18L150 175L140 170Z\"/><path class=\"nx-l\" d=\"M140 152L150 147L160 152L150 157Z M140 152v18L150 175L160 170v-18 M150 157v18\"/><path class=\"nx-fill\" d=\"M120 126L130 121L140 126v34L130 165L120 160Z\"/><path class=\"nx-l\" d=\"M120 126L130 121L140 126L130 131Z M120 126v34L130 165L140 160v-34 M130 131v34\"/><path class=\"nx-fill\" d=\"M160 70L170 65L180 70v70L170 145L160 140Z\"/><path class=\"nx-acc-s\" d=\"M160 70L170 65L180 70L170 75Z M160 70v70L170 145L180 140v-70 M170 75v70\"/><path class=\"nx-acc-s\" d=\"M150 59V52h7M183 52h7v7M190 145v7h-7M157 152h-7v-7\"/><circle class=\"nx-acc\" cx=\"170\" cy=\"70\" r=\"3\"/><circle class=\"nx-pulse dx-pulse\" cx=\"170\" cy=\"70\" r=\"3\"/><text class=\"nx-labacc\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"196\" y=\"58\">PRIORITY 1</text><text class=\"nx-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"196\" y=\"68\">2 MUTED</text><g class=\"dx-scan\"><path class=\"nx-scan\" d=\"M150 92L150 208\" stroke-dasharray=\"2 4\"/></g></svg>", "Dark interface with a single accent signal": "<svg viewBox=\"0 0 300 230\" role=\"img\" aria-label=\"Dark interface with a single accent signal\"><path class=\"nx-night\" d=\"M30 130L150 70L270 130L150 190Z\"/><path class=\"nx-lb\" d=\"M30 130v8L150 198L270 138v-8M150 190v8\"/><g clip-path=\"url(#nxc2)\"><ellipse class=\"nx-topo\" cx=\"120\" cy=\"128\" rx=\"80\" ry=\"34\"/><ellipse class=\"nx-topo\" cx=\"120\" cy=\"128\" rx=\"54\" ry=\"22\"/><ellipse class=\"nx-topo\" cx=\"190\" cy=\"140\" rx=\"34\" ry=\"13\"/></g><defs><clipPath id=\"nxc2\"><path d=\"M30 130L150 70L270 130L150 190Z\"/></clipPath></defs><path class=\"nx-trk\" d=\"M104 120L110 117L116 120L110 123Z\"/><path class=\"nx-trk\" d=\"M124 150L130 147L136 150L130 153Z\"/><path class=\"nx-trk\" d=\"M89 138L95 135L101 138L95 141Z\"/><path class=\"nx-trk\" d=\"M169 110L175 107L181 110L175 113Z\"/><circle class=\"nx-acc\" cx=\"190\" cy=\"140\" r=\"4\"/><circle class=\"nx-pulse dx-pulse\" cx=\"190\" cy=\"140\" r=\"4\"/><path class=\"nx-acc-s\" d=\"M181 135V131h4M195 131h4v4M199 145v4h-4M185 149h-4v-4\"/><path class=\"nx-acc-s\" d=\"M199 136L230 120h30\"/><rect class=\"nx-callout\" x=\"226\" y=\"106\" width=\"58\" height=\"14\" rx=\"2\"/><text class=\"nx-labacc\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"231\" y=\"116\">T-01 \u00b7 SAMPLE</text></svg>", "Local servers connected without cloud access": "<svg viewBox=\"0 0 300 230\" role=\"img\" aria-label=\"Local servers connected without cloud access\"><path class=\"nx-fill\" d=\"M61 120L95 103L129 120v46L95 183L61 166Z\"/><path class=\"nx-lb\" d=\"M61 120L95 103L129 120L95 137Z M61 120v46L95 183L129 166v-46 M95 137v46\"/><path class=\"nx-l\" d=\"M75 130l20 10\"/><path class=\"nx-l\" d=\"M75 142l20 10\"/><path class=\"nx-l\" d=\"M75 154l20 10\"/><path class=\"nx-fill\" d=\"M171 140L205 123L239 140v46L205 203L171 186Z\"/><path class=\"nx-lw\" d=\"M171 140L205 123L239 140L205 157Z M171 140v46L205 203L239 186v-46 M205 157v46\"/><path class=\"nx-l\" d=\"M185 150l20 10\"/><path class=\"nx-l\" d=\"M185 162l20 10\"/><path class=\"nx-l\" d=\"M185 174l20 10\"/><path class=\"nx-link dx-dash\" d=\"M129 150L171 170\"/><circle class=\"nx-acc dx-blink\" cx=\"225\" cy=\"160\" r=\"2.6\"/><circle class=\"nx-acc dx-blink\" cx=\"115\" cy=\"140\" r=\"2\" style=\"animation-delay:-1.2s\"/><g opacity=\".7\"><path class=\"nx-lb\" stroke-dasharray=\"3 4\" d=\"M128 52a14 14 0 0 1 26-8a12 12 0 0 1 22 8a10 10 0 0 1-2 20h-44a10 10 0 0 1-2-20z\"/><path class=\"nx-amb-s\" d=\"M134 40l42 40M176 40l-42 40\"/></g><text class=\"nx-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"186\" y=\"58\">NO CLOUD</text><text class=\"nx-labacc\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"64\" y=\"206\">LOCAL \u00b7 AIR-GAPPED</text></svg>"}, "light": {"Defense brand identity": "<svg viewBox=\"0 0 200 160\" aria-hidden=\"true\"><path class=\"nx2-ink2\" d=\"M20 80h160M100 0v160M40 20l120 120M160 20 40 140\"/><circle class=\"nx2-ink2\" cx=\"100\" cy=\"80\" r=\"62\"/><circle class=\"nx2-topo\" cx=\"100\" cy=\"80\" r=\"70\"/><circle class=\"nx2-topo\" cx=\"100\" cy=\"80\" r=\"54\"/><circle class=\"nx2-ink dx-draw\" style=\"--len:280\" cx=\"100\" cy=\"80\" r=\"44\"/><path class=\"nx2-ink dx-draw\" style=\"--len:360\" d=\"M68 112 100 32l32 80M80 84h40\"/><rect class=\"nx2-ink dx-draw\" style=\"--len:360\" x=\"56\" y=\"36\" width=\"88\" height=\"88\"/><circle class=\"nx2-acc\" cx=\"100\" cy=\"32\" r=\"3\"/><circle class=\"nx2-inkf\" cx=\"68\" cy=\"112\" r=\"3\"/><circle class=\"nx2-inkf\" cx=\"132\" cy=\"112\" r=\"3\"/><text class=\"nx2-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"4\" y=\"156\">FIG \u00b7 MARK</text></svg>", "Defense web design and development": "<svg viewBox=\"0 0 200 160\" aria-hidden=\"true\"><defs><clipPath id=\"nxclip5\"><rect x=\"21\" y=\"35\" width=\"158\" height=\"104\"/></clipPath></defs><rect class=\"nx2-ink\" x=\"20\" y=\"18\" width=\"160\" height=\"122\" rx=\"8\"/><path class=\"nx2-ink\" d=\"M20 35h160\"/><circle class=\"nx2-inkf\" cx=\"32\" cy=\"27\" r=\"2.5\"/><circle class=\"nx2-inkf\" cx=\"41\" cy=\"27\" r=\"2.5\" opacity=\".4\"/><circle class=\"nx2-inkf\" cx=\"50\" cy=\"27\" r=\"2.5\" opacity=\".2\"/><g clip-path=\"url(#nxclip5)\"><g class=\"dx-scroll\"><rect class=\"nx2-hero\" x=\"21\" y=\"36\" width=\"158\" height=\"58\"/><path class=\"nx2-rim\" d=\"M96 94a110 110 0 0 1 84-40\"/><rect class=\"nx2-herot\" x=\"32\" y=\"48\" width=\"58\" height=\"7\" rx=\"2\"/><rect class=\"nx2-herot2\" x=\"32\" y=\"61\" width=\"40\" height=\"4\" rx=\"2\"/><rect class=\"nx2-accf\" x=\"32\" y=\"73\" width=\"30\" height=\"10\" rx=\"3\"/><rect class=\"nx2-ink2\" x=\"34\" y=\"104\" width=\"62\" height=\"40\" rx=\"4\"/><rect class=\"nx2-ink2\" x=\"104\" y=\"104\" width=\"62\" height=\"40\" rx=\"4\"/><rect class=\"nx2-ink2\" x=\"34\" y=\"150\" width=\"132\" height=\"30\" rx=\"4\"/></g></g></svg>", "Pitch decks and government presentations": "<svg viewBox=\"0 0 200 160\" aria-hidden=\"true\"><g style=\"transform-origin:100px 120px\" class=\"dx-slide1\"><rect x=\"34\" y=\"34\" width=\"132\" height=\"84\" rx=\"6\" class=\"nx2-card nx2-ink2\"/></g><g style=\"transform-origin:100px 120px\" class=\"dx-slide2\"><rect x=\"34\" y=\"34\" width=\"132\" height=\"84\" rx=\"6\" class=\"nx2-card nx2-ink2\"/></g><rect x=\"34\" y=\"34\" width=\"132\" height=\"84\" rx=\"6\" class=\"nx2-card nx2-ink\"/><path class=\"nx2-ink\" d=\"M48 100V80M62 100V70M76 100V86\"/><path class=\"nx2-acc-s\" d=\"M90 100V60\" stroke-width=\"2\"/><path class=\"nx2-ink2\" d=\"M110 52h40M110 62h28\"/><path class=\"nx2-acc-s dx-draw\" style=\"--len:90\" d=\"M108 96l12-10 10 6 18-18\"/><circle class=\"nx2-acc\" cx=\"148\" cy=\"74\" r=\"2.5\"/><text class=\"nx2-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"40\" y=\"112\" font-size=\"5.5\">Q1 Q2 Q3 Q4</text></svg>", "Confidential pre-launch delivery": "<svg viewBox=\"0 0 200 160\" aria-hidden=\"true\"><rect class=\"nx2-ink\" x=\"10\" y=\"44\" width=\"70\" height=\"72\" rx=\"6\"/><rect class=\"nx2-ink2\" x=\"120\" y=\"44\" width=\"70\" height=\"72\" rx=\"6\"/><text class=\"nx2-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"45\" y=\"134\" text-anchor=\"middle\">PREVIEW</text><text class=\"nx2-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"155\" y=\"134\" text-anchor=\"middle\">PRODUCTION</text><path class=\"nx2-ink2\" d=\"M22 60h46M22 70h30M22 82h46M22 92h20\"/><path class=\"nx2-ink2\" d=\"M80 80h40\" stroke-dasharray=\"3 4\"/><g class=\"dx-move\"><rect x=\"78\" y=\"74\" width=\"12\" height=\"12\" rx=\"2\" class=\"nx2-accf\"/></g><rect class=\"nx2-card nx2-amb-s\" x=\"91\" y=\"66\" width=\"18\" height=\"16\" rx=\"3\"/><path class=\"nx2-amb-s\" d=\"M94 66v-5a6 6 0 0 1 12 0v5\"/><circle class=\"nx2-ambf\" cx=\"100\" cy=\"74\" r=\"2\"/><text class=\"nx2-lab\" font-family=\"JetBrains Mono,ui-monospace,monospace\" font-size=\"7\" letter-spacing=\".6\" x=\"62\" y=\"30\">NDA \u00b7 SAMPLE</text></svg>"}, "c2": {"Common operational picture": "<svg class=\"dx-tab-icon\" viewBox=\"0 0 88 88\" fill=\"none\" stroke-width=\"1.2\" aria-hidden=\"true\"><g clip-path=\"url(#nxct)\"><ellipse class=\"nx-topo\" cx=\"44\" cy=\"50\" rx=\"36\" ry=\"16\"/><ellipse class=\"nx-topo\" cx=\"44\" cy=\"50\" rx=\"22\" ry=\"9\"/></g><defs><clipPath id=\"nxct\"><rect x=\"8\" y=\"10\" width=\"72\" height=\"66\"/></clipPath></defs><path class=\"nx-t\" d=\"M12 64c14-30 30-44 64-46\" opacity=\".4\" stroke-dasharray=\"3 4\"/><g class=\"dx-float1\"><rect class=\"nx-fr\" x=\"22\" y=\"38\" width=\"16\" height=\"11\"/></g><g class=\"dx-float2\"><path class=\"nx-ho\" d=\"M54 21l7 7-7 7-7-7z\" opacity=\".8\"/></g><circle class=\"dx-popc nx-a\" cx=\"72\" cy=\"20\" r=\"4\"/><path class=\"nx-t\" d=\"M12 72h64\" opacity=\".5\"/></svg>", "Unit and asset status": "<svg class=\"dx-tab-icon\" viewBox=\"0 0 88 88\" fill=\"none\" stroke-width=\"1.2\" aria-hidden=\"true\"><rect class=\"nx-t\" x=\"10\" y=\"16\" width=\"68\" height=\"52\" rx=\"5\"/><path class=\"nx-t\" d=\"M10 27h68\" opacity=\".5\"/><g class=\"dx-float1\"><path class=\"nx-a\" d=\"M20 38h30\"/><path class=\"nx-t\" d=\"M20 46h44M20 53h26\" opacity=\".5\"/></g><g class=\"dx-float2\"><rect class=\"nx-t\" x=\"54\" y=\"48\" width=\"14\" height=\"10\" rx=\"2\" opacity=\".7\"/><circle class=\"nx-af\" cx=\"61\" cy=\"53\" r=\"1.6\"/></g><circle class=\"nx-af\" cx=\"70\" cy=\"21.5\" r=\"1.6\"/></svg>", "Tasking and orders": "<svg class=\"dx-tab-icon\" viewBox=\"0 0 88 88\" fill=\"none\" stroke-width=\"1.2\" aria-hidden=\"true\"><rect class=\"nx-t\" x=\"20\" y=\"10\" width=\"48\" height=\"68\" rx=\"5\"/><g class=\"dx-float1\"><rect class=\"nx-t\" x=\"28\" y=\"20\" width=\"32\" height=\"16\" rx=\"2\" opacity=\".6\"/><path class=\"nx-t\" d=\"M33 32l5-5 4 3 6-6\" opacity=\".8\"/></g><path class=\"nx-t\" d=\"M28 44h32M28 50h22\" opacity=\".5\"/><rect class=\"dx-popc nx-a\" x=\"28\" y=\"60\" width=\"18\" height=\"8\" rx=\"4\"/></svg>", "Messaging and handover": "<svg class=\"dx-tab-icon\" viewBox=\"0 0 88 88\" fill=\"none\" stroke-width=\"1.2\" aria-hidden=\"true\"><g class=\"dx-float1\"><rect class=\"nx-t\" x=\"10\" y=\"20\" width=\"34\" height=\"44\" rx=\"3\" opacity=\".4\"/><path class=\"nx-t\" d=\"M16 30h20M16 38h14\" opacity=\".4\"/></g><path class=\"dx-dash nx-a\" d=\"M46 42h8\"/><g class=\"dx-float2\"><rect class=\"nx-t\" x=\"56\" y=\"16\" width=\"24\" height=\"52\" rx=\"3\"/><path class=\"nx-t\" d=\"M61 26h14M61 34h10\" opacity=\".6\"/><circle class=\"nx-af\" cx=\"68\" cy=\"60\" r=\"1.6\"/></g></svg>", "Decision logs and after-action": "<svg class=\"dx-tab-icon\" viewBox=\"0 0 88 88\" fill=\"none\" stroke-width=\"1.2\" aria-hidden=\"true\"><rect class=\"nx-t\" x=\"12\" y=\"14\" width=\"40\" height=\"56\" rx=\"4\"/><path class=\"nx-t\" d=\"M20 26h24M20 34h18M20 42h22\" opacity=\".5\"/><g class=\"dx-float1\"><rect class=\"nx-t nx-bg\" x=\"40\" y=\"38\" width=\"36\" height=\"34\" rx=\"4\"/><path class=\"nx-t\" d=\"M48 50h20M48 58h14\" opacity=\".6\"/><path class=\"dx-dash nx-a\" d=\"M48 66h10\"/></g></svg>"}};
 const st2=document.createElement('style');st2.textContent="\n.hfx-nx{--ink:#c7bf9c;--dim:#4f5644;--mid:#7f8466;--acc:#8ef07a;--amb:#f0c46a;--fill:#10130e;--plane:#141812}\n.hfx-nx .nx-pl{fill:var(--fill);stroke:var(--dim);stroke-width:1}.hfx-nx .nx-pl2{fill:var(--plane);stroke:var(--ink);stroke-width:1.2}\n.hfx-nx .nx-l{fill:none;stroke:var(--dim);stroke-width:1}.hfx-nx .nx-lb{fill:none;stroke:var(--mid);stroke-width:1}.hfx-nx .nx-lw{fill:none;stroke:var(--ink);stroke-width:1.2}\n.hfx-nx .nx-grid{fill:none;stroke:#2b3125;stroke-width:1}.hfx-nx .nx-fill{fill:var(--fill)}.hfx-nx .nx-night{fill:#0c0f0a;stroke:var(--mid);stroke-width:1}\n.hfx-nx .nx-topo{fill:none;stroke:#3d5234;stroke-width:.9}.hfx-nx .nx-dot{fill:var(--mid)}\n.hfx-nx .nx-acc{fill:var(--acc)}.hfx-nx .nx-acc-s{fill:none;stroke:var(--acc);stroke-width:1.2}.hfx-nx .nx-pulse{fill:none;stroke:var(--acc);stroke-width:1.2}\n.hfx-nx .nx-amb-s{fill:none;stroke:var(--amb);stroke-width:1.2}.hfx-nx .nx-trk{fill:none;stroke:var(--mid);stroke-width:1}\n.hfx-nx .nx-callout{fill:#0c0f0a;stroke:var(--acc);stroke-width:1}.hfx-nx .nx-link{fill:none;stroke:var(--acc);stroke-width:1.2}.hfx-nx .nx-scan{fill:none;stroke:var(--acc);stroke-width:1;opacity:.6}\n.hfx-nx .nx-lab{fill:#8d8f78}.hfx-nx .nx-labacc{fill:var(--acc)}\n.hfx-nx .nx-t{stroke:var(--ink)}.hfx-nx .nx-a{stroke:var(--acc)}.hfx-nx .nx-af{fill:var(--acc);stroke:none}.hfx-nx .nx-fr{stroke:#8cc4dc}.hfx-nx .nx-ho{stroke:var(--amb)}.hfx-nx .nx-bg{fill:#0f1011}\n\n.hfx-nx .nx2-ink{fill:none;stroke:var(--i);stroke-width:1.2}.hfx-nx .nx2-ink2{fill:none;stroke:var(--i2);stroke-width:1}.hfx-nx .nx2-inkf{fill:var(--i)}\n.hfx-nx .nx2-topo{fill:none;stroke:var(--topo);stroke-width:1}.hfx-nx .nx2-acc{fill:var(--a)}.hfx-nx .nx2-accf{fill:var(--a)}.hfx-nx .nx2-acc-s{fill:none;stroke:var(--a);stroke-width:1.4}\n.hfx-nx .nx2-amb-s{fill:none;stroke:var(--am);stroke-width:1.2}.hfx-nx .nx2-ambf{fill:var(--am)}.hfx-nx .nx2-card{fill:var(--card)}\n.hfx-nx .nx2-hero{fill:var(--hero)}.hfx-nx .nx2-rim{fill:none;stroke:var(--rim);stroke-width:1.4}.hfx-nx .nx2-herot{fill:var(--heroT)}.hfx-nx .nx2-herot2{fill:var(--heroT2)}\n.hfx-nx .nx2-lab{fill:var(--lab)}\n.hfx-nx2{--i:#262a1f;--i2:#c9c6b2;--a:#2f7d2a;--am:#a8741d;--card:#fff;--hero:#1c211a;--heroT:#c7bf9c;--heroT2:#5f6650;--rim:#8ef07a;--topo:#e3e0d0;--lab:#7a7c69}@media (prefers-color-scheme:dark){.hfx-nx2{--i:#e5e3dc;--i2:#4d5143;--a:#8ef07a;--am:#f0c46a;--card:#27282c;--hero:#141812;--heroT:#c7bf9c;--heroT2:#4f5644;--rim:#8ef07a;--topo:#34382d;--lab:#8d8f78}}"+`.hfx-tabs .dx-tab-icon{stroke:#c7bf9c}.hfx-tabs .dx-tab-icon [stroke="#ff6b2c"]{stroke:#8ef07a}.hfx-tabs .dx-tab-icon [stroke="#fff"]{stroke:#c7bf9c}`;document.head.appendChild(st2);
 const swap=(el,html,cls)=>{const t=document.createElement('div');t.innerHTML=html;const n=t.firstElementChild;n.classList.add('hfx-nx');if(cls)n.classList.add(cls);el.replaceWith(n)};
 document.querySelectorAll('svg[aria-label]').forEach(e=>{const h=ILL.dark[e.getAttribute('aria-label')];if(h)swap(e,h)});
 const near=(e,dict)=>{let c=e;for(let i=0;i<5&&c.parentElement;i++){c=c.parentElement;const tx=c.textContent;for(const t in dict){if(tx.includes(t)&&c.querySelectorAll('svg').length===1)return t}}return null};
 const pick=(c,d)=>{if(!c)return null;const tx=c.textContent.trim();for(const t in d)if(tx.indexOf(t)===0)return t;return null};
 document.querySelectorAll('svg[viewBox="0 0 200 160"]').forEach(e=>{const t=pick(e.closest('.dx-card'),ILL.light);if(t)swap(e,ILL.light[t],'hfx-nx2')});
 if(PATH.indexOf('c2-interface')>0)document.querySelectorAll('svg.dx-tab-icon').forEach(e=>{const t=pick(e.closest('.dx-tab'),ILL.c2);if(t)swap(e,ILL.c2[t])});
 document.body.classList.add('hfx-tabs');})();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();
