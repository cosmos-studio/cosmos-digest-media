/* Cosmos Studio – review ticker 1.0.0 (11 Nov 2026). Replaces the Clutch widget (Illia, Nov 2026).
   Mounts into every element with [data-rtk] (Intro Section embed on Home + Industries, herofx "About" block on scene pages, /contacts).
   Review texts are verbatim excerpts from the /reviews page (Clutch + Upwork originals); avatars from the site's own reviews section.
   Desktop/tablet: vertical scroll of message bubbles. Phones (<768): horizontal row. Reduced motion: static, scrollable by hand.
   Colors: site variables only (--_colors---*), so the auto dark theme works. Brand marks keep brand colors (Clutch red dot/stars, Upwork green).
   Roll back: remove the page script "reviewticker" and restore the backed-up embeds / herofx 0.6.8. */
(function(){
'use strict';
if(window.CosmosReviewTicker)return;
var CDN='https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/';
var CL='https://clutch.co/profile/cosmos-studio#review-';
var UP='https://www.upwork.com/freelancers/~015ca4d690aaad6f7b';
/* q = exact text (or exact leading sentence) of the review quote on /reviews */
var R=[
 {q:'Over my 27 year career, they are the best website agency I have ever worked with.',n:'Scott Hasbrouck',r:'CTO & Founder, SerenX',s:'c',d:'Oct 2026',h:CL+'494801',i:'6ae07a370a0468ea1e1a4a26_review-scott.webp'},
 {q:'I’ve worked with a lot of agencies in my time, and I found Cosmos’ project management some of the best.',n:'Libby Cutress',r:'Director of Marketing & Communications, Elevated Signals',s:'c',d:'Aug 2025',h:CL+'399476',i:'6ae07a58277a51946ab38eb6_review-libby.webp'},
 {q:'Working with Cosmos Studio has been an exceptional experience!',n:'Darion Miller',r:'Co-founder & COO, Ply',s:'u',d:'Jan 2025',h:UP,i:'6ae07a58bb5b0d4039b38c34_review-darion.webp'},
 {q:'The animation work stood out: it was visually strong and is a big part of what gives our site its character.',n:'Linden Felder',r:'Head of Communications & Marketing, Sentinel Earth AG',s:'c',d:'Aug 2026',h:CL+'477393',i:'6ae07a55f8a82a16e127a9e7_review-linden.webp'},
 {q:'Their attention to detail and ability to maintain consistency make the experience feel very professional and smooth.',n:'Liam Mörker',r:'Co-Founder, Fokus Nachhilfe',s:'c',d:'Jan 2026',h:CL+'431408',i:'6ae07a58dcce2a7ed9270a86_review-liam.webp'},
 {q:'Illia and Cosmos team have delivered everything I asked on time and within the budget.',n:'Marco Di Cesare',r:'Founder, Loamly',s:'u',d:'Oct 2025',h:UP,i:'6ae07a58362a955fd7bbc0ec_review-marco.webp'},
 {q:'We highly recommend Cosmos Studio.',n:'Vittorio Machet',r:'Growth Specialist, Casavo',s:'c',d:'May 2026',h:CL+'457088',i:'6ae07a55c559fd671e627aa1_review-vittorio.webp'},
 {q:'Cosmos Studio delivers a truly professional approach and working with them is a creative and enjoyable experience.',n:'Roman Gerashchenko',r:'CEO, Sasquatch Digital',s:'c',d:'Nov 2025',h:CL+'421684'},
 {q:'Amazing web design team!',n:'April L.',r:'Client on Upwork',s:'u',d:'Mar 2026',h:UP},
 {q:'Great studio!',n:'Lian Amber',r:'CEO, Freq',s:'c',d:'Dec 2025',h:CL+'423655',i:'6ae07a56d49dd25b9c779fca_review-lian.webp'},
 {q:'We’d gladly recommend Cosmos Studio.',n:'Volodymyr Kysylenko',r:'CTO, Education NGO',s:'c',d:'Jul 2025',h:CL+'392450',i:'6ae07a58f8d92c4c0ee10bde_review-volodymyr.webp'},
 {q:'I’m over the moon with the work delivered by Illia and Cosmos Studio.',n:'Pierre T.',r:'Client on Upwork',s:'u',d:'Feb 2024',h:UP},
 {q:'We’re happy to recommend Cosmos Studio.',n:'Yuri Tsverkun',r:'Founder, Profpereklad',s:'c',d:'Nov 2025',h:CL+'421678'},
 {q:'Quick turnaround and good communication.',n:'Al S.',r:'Client on Upwork',s:'u',d:'Mar 2025',h:UP},
 {q:'They have outstanding design work.',n:'Volodymyr Bochkor',r:'Director, Rubbish Taxi Ltd',s:'c',d:'Nov 2025',h:CL+'421030'}
];
var STAR='<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="#ee3028" d="M12 2l2.9 6.9 7.1.6-5.4 4.7 1.6 7L12 17.3 5.8 21.2l1.6-7L2 9.5l7.1-.6z"/></svg>';
/* Clutch wordmark: letters follow the text color (both themes), red dot keeps the brand color */
var CLUTCH='<svg class="rtk-cl" viewBox="250 469 499 140" aria-hidden="true"><g fill="currentColor"><rect x="378.24" y="475.2" width="24.3" height="126.9"/><path d="M480.84,564.3c0,19.76-18.71,21.33-23.95,21.33-13.12,0-16.55-11.56-16.55-18.52v-48.71h-18.9v48.6c0,12.26,3.86,22.38,11.04,29.11,7.07,6.24,16.25,9.55,25.68,9.23,8.04-.2,15.88-2.570,22.68-6.86v3.62h21.6v-83.7h-21.6v45.9Z"/><polygon points="548.34 488.7 524.04 488.7 524.04 518.4 510.54 518.4 510.54 534.6 524.04 534.6 524.04 602.1 548.34 602.1 548.34 534.6 564.54 534.6 564.54 518.4 548.34 518.4 548.34 488.7"/><path d="M634.5,578.83c-5.11,4.17-11.52,6.4-18.12,6.29-15.39,0-26.68-10.56-26.68-25.06s10.8-24.6,26.68-24.6c6.62-.12,13.07,2.07,18.25,6.18l3.35,2.7,14.9-13.930-3.73-3.13c-9.25-7.63-20.92-11.74-32.91-11.58-27.62,0-47.68,18.66-47.68,44.28s20.55,44.82,47.68,44.82c12.050,.19,23.77-3.96,33.02-11.69l3.59-3.16-15.12-13.93-3.24,2.81Z"/><path d="M732.32,526.28c-7.2-6.23-16.48-9.52-26-9.21-8.18-.1-16.19,2.29-22.98,6.86v-48.73h-21.6v126.9h21.6v-44.01c0-19.76,17.36-21.36,22.6-21.36,13.12,0,15.2,11.58,15.2,18.55v46.82h21.6v-46.71c0-12.26-3.13-22.36-10.42-29.11Z"/><path d="M351.59,572.64c-8.58,8.12-19.99,12.6-31.81,12.47-24.62,0-42.52-18.09-42.52-42.93s17.9-43.04,42.52-43.04c11.75-.06,23.09,4.37,31.7,12.37l3.35,3.16,14.77-13.82-3.24-3.16c-12.57-11.89-29.280-18.41-46.58-18.2-36.26,0-63.53,27-63.53,62.8s27.38,62.51,63.53,62.51c17.36,.2,34.12-6.38,46.71-18.33l3.24-3.13-14.66-14.04-3.48,3.35Z"/></g><ellipse fill="#ff3d2e" cx="615.52" cy="560.28" rx="15.96" ry="14.96"/></svg>';
/* Upwork wordmark: "up" keeps the brand green, "work" follows the text color */
var UPWORK='<svg class="rtk-uw" viewBox="5 13 110 34" aria-hidden="true"><path fill="currentColor" d="M76.082 21.118c-4.79.023-8.692 3.96-8.67 8.862s3.963 8.802 8.753 8.78 8.693-3.96 8.67-8.86-3.963-8.803-8.755-8.78zm.066 14.047c-1.358.008-2.663-.525-3.628-1.48s-1.5-2.256-1.515-3.614.525-2.663 1.48-3.628 2.256-1.5 3.614-1.515 2.663.525 3.628 1.48 1.5 2.256 1.515 3.614c.014 2.725-2.37 5.13-5.094 5.144zm19.34-9.892c-2.505.012-4.456 2.09-4.444 4.595l.04 8.385-3.812.018-.077-16.663 3.812-.018.013 2.613s1.62-2.62 4.888-2.635l1.09-.006.018 3.702zM57.462 21.75l2.886 11.422 2.996-11.45 3.812-.017L62.44 38.4l-3.702.017-2.994-11.638-2.886 11.665-3.703.017-4.978-16.64 3.702-.017 3.32 11.42 2.67-11.448zm50.675 7.386c2.605-1.536 4.445-4.377 4.43-7.644l-3.812.018c.014 2.832-2.264 5.13-4.986 5.14l-.545.002-.06-13.177-3.812.018.117 24.72 3.81-.017-.036-7.840.435-.002c.436-.002.873.214.984.54l5.37 7.27 4.465-.02z"/><path fill="#6fda44" d="M35.353 21.31c-4.137.02-7.283 2.757-8.46 7.118-1.975-3.04-3.516-6.517-4.4-9.453l-4.355.02.054 11.543a4.14 4.14 0 0 1-4.119 4.158 4.14 4.14 0 0 1-4.158-4.119L9.86 19.034l-4.357.02.054 11.543c.023 4.79 3.85 8.586 8.534 8.563s8.478-3.852 8.456-8.643l-.01-1.96c.878 1.737 1.976 3.583 3.183 5.212l-2.663 12.753 4.464-.02 1.92-9.266c1.747 1.082 3.7 1.725 5.996 1.714 4.792-.023 8.695-3.96 8.670-8.97a8.74 8.74 0 0 0-8.753-8.671zm.062 13.177c-1.742.008-3.487-.746-4.908-1.938l.427-1.743v-.1c.32-1.854 1.282-5.016 4.55-5.03A4.37 4.37 0 0 1 39.861 30c-.098 2.505-2.157 4.475-4.445 4.486z"/></svg>';

var C='--_colors---';
var CSS=
'[data-rtk]{display:block;width:100%;max-width:24.5rem;color:var('+C+'primary--black);text-align:left}'+
'.rtk{display:flex;flex-direction:column;gap:1rem}'+
'.rtk-top{display:flex;align-items:center;gap:1rem;padding-bottom:1rem;border-bottom:1px solid var('+C+'grey--100)}'+
'.rtk-n{font-size:2.5rem;font-weight:500;letter-spacing:-.02em;line-height:1}'+
'.rtk-st{display:flex;gap:2px}.rtk-st svg{width:.9375rem;height:.9375rem;display:block}'+
'.rtk-lg{margin-left:auto;display:flex;align-items:center;gap:1rem}'+
'.rtk-lg a{display:block;line-height:0;padding:.75rem 0;margin:-.75rem 0;color:inherit;border-radius:.25rem}'+
'.rtk-lg a:focus-visible{outline:2px solid currentColor;outline-offset:2px}'+
'.rtk-cl{display:block;height:1.25rem;width:auto}.rtk-uw{display:block;height:1.625rem;width:auto;margin-top:.375rem}'+
'.rtk-dv{width:1px;height:1.25rem;background:var('+C+'grey--100)}'+
'.rtk-vp{position:relative;height:var(--rtk-h,30rem);overflow:hidden;outline:0;-webkit-mask-image:linear-gradient(transparent,#000 10%,#000 90%,transparent);mask-image:linear-gradient(transparent,#000 10%,#000 90%,transparent)}'+
'.rtk-vp:focus-visible{outline:2px solid currentColor;outline-offset:4px}'+
'.rtk-tr{display:flex;flex-direction:column;will-change:transform}'+
'.rtk-g{display:flex;flex-direction:column;gap:1rem;padding:0 0 1rem .5rem;margin:0;list-style:none}'+
'.rtk-on .rtk-tr{animation:rtk-y var(--rtk-d,60s) linear infinite}'+
'.rtk-vp:hover .rtk-tr,.rtk-vp:focus-within .rtk-tr,.rtk-vp.is-paused .rtk-tr{animation-play-state:paused}'+
'@keyframes rtk-y{from{transform:translate3d(0,0,0)}to{transform:translate3d(0,-50%,0)}}'+
'@keyframes rtk-x{from{transform:translate3d(0,0,0)}to{transform:translate3d(-50%,0,0)}}'+
'.rtk-it{margin:0;display:flex;align-items:flex-end;gap:.75rem}'+
'.rtk-av{flex:none;width:2.25rem;height:2.25rem;border-radius:50%;object-fit:cover;display:flex;align-items:center;justify-content:center;background:var('+C+'grey--100);color:var('+C+'grey--500);font-size:.75rem;font-weight:600;letter-spacing:.02em}'+
'.rtk-bb{position:relative;flex:1 1 auto;min-width:0;background:var('+C+'primary--white);border-radius:1.125rem 1.125rem 1.125rem .25rem;padding:.75rem 1rem .625rem}'+
'.rtk-bb:before{content:"";position:absolute;left:-.5rem;bottom:0;width:.75rem;height:.875rem;background:inherit;-webkit-clip-path:path("M12 0 V14 H0 C6 12 10 8 12 0 Z");clip-path:path("M12 0 V14 H0 C6 12 10 8 12 0 Z")}'+
'.rtk-who{display:block;margin:0 0 .25rem;text-align:left;font-size:.8125rem;line-height:1.35}'+
'.rtk-who b{display:block;font-weight:600}.rtk-who span{display:block;color:var('+C+'grey--400)}'+
'.rtk-q{margin:0;padding:0;border:0;font-size:.9375rem;line-height:1.45;font-style:normal;quotes:none}'+
'.rtk-ts{display:flex;justify-content:flex-end;margin-top:.375rem;font-size:.6875rem;line-height:1.2;color:var('+C+'grey--400)}'+
'.rtk-ts a{color:inherit;text-decoration:none}.rtk-ts a:hover{text-decoration:underline}'+
'.rtk-more{display:flex}'+
'.rtk-sr{position:absolute;width:1px;height:1px;overflow:hidden;clip:rect(0 0 0 0);white-space:nowrap}'+
'@media (prefers-reduced-motion:reduce){.rtk-on .rtk-tr{animation:none}.rtk-vp{overflow-y:auto}.rtk-g[aria-hidden]{display:none}}'+
'@media screen and (max-width:991px){[data-rtk]{max-width:none}.rtk{--rtk-h:26rem}}'+
/* phones: horizontal row; the row runs edge to edge of its box, header and button keep the text gutter */
'@media screen and (max-width:767px){'+
 '.rtk-vp{height:auto;-webkit-mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent);mask-image:linear-gradient(90deg,transparent,#000 6%,#000 94%,transparent)}'+
 '.rtk-tr{flex-direction:row;width:max-content}'+
 '.rtk-g{flex-direction:row;align-items:flex-end;padding:0 1rem 0 .5rem}'+
 '.rtk-it{width:17.5rem}'+
 '.rtk-on .rtk-tr{animation-name:rtk-x}'+
 '.rtk-n{font-size:2.125rem}'+
'}'+
'@media screen and (max-width:767px) and (prefers-reduced-motion:reduce){.rtk-vp{overflow-x:auto;overflow-y:hidden;-webkit-mask-image:none;mask-image:none;scroll-snap-type:x mandatory}.rtk-it{scroll-snap-align:start}}'+
'@media screen and (max-width:479px){.rtk-top{gap:.75rem}.rtk-lg{gap:.75rem}.rtk-cl{height:1.0625rem}.rtk-uw{height:1.375rem;margin-top:.3125rem}.rtk-av{width:2rem;height:2rem}.rtk-it{width:16rem}.clients_auth .rtk-pad{margin-left:.75rem;margin-right:.75rem}}';

function esc(s){return String(s).replace(/[&<>"]/g,function(c){return{'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]})}
function ini(n){return n.replace(/\./g,'').split(/\s+/).map(function(w){return w.charAt(0)}).slice(0,2).join('').toUpperCase()}
function item(o){
 var av=o.i?'<img class="rtk-av" src="'+CDN+o.i+'" alt="" loading="lazy" decoding="async" width="36" height="36">':'<span class="rtk-av" aria-hidden="true">'+esc(ini(o.n))+'</span>';
 var site=o.s==='u'?'Upwork':'Clutch';
 return '<li class="rtk-it">'+av+'<figure class="rtk-bb" style="margin:0"><figcaption class="rtk-who"><b>'+esc(o.n)+'</b><span>'+esc(o.r)+'</span></figcaption>'+
  '<blockquote class="rtk-q">'+esc(o.q)+'</blockquote>'+
  '<div class="rtk-ts"><a href="'+o.h+'" target="_blank" rel="noopener" tabindex="-1">'+site+' · '+o.d+'<span class="rtk-sr"> (opens the review on '+site+')</span></a></div></figure></li>';
}
function group(hide){return '<ul class="rtk-g"'+(hide?' aria-hidden="true"':' role="list"')+'>'+R.map(item).join('')+'</ul>'}
function html(){
 return '<div class="rtk">'+
 '<div class="rtk-top rtk-pad"><span class="rtk-n" aria-hidden="true">5.0</span><span class="rtk-st" role="img" aria-label="Rated 5.0 out of 5 on Clutch and Upwork">'+STAR+STAR+STAR+STAR+STAR+'</span>'+
 '<span class="rtk-lg"><a href="https://clutch.co/profile/cosmos-studio#reviews" target="_blank" rel="noopener" aria-label="Cosmos Studio reviews on Clutch">'+CLUTCH+'</a><span class="rtk-dv" aria-hidden="true"></span><a href="'+UP+'" target="_blank" rel="noopener" aria-label="Cosmos Studio reviews on Upwork">'+UPWORK+'</a></span></div>'+
 '<div class="rtk-vp" role="region" aria-label="Client reviews of Cosmos Studio" tabindex="0"><div class="rtk-tr">'+group(false)+group(true)+'</div></div>'+
 '<div class="rtk-more rtk-pad"><a data-wf--button--variant="small-light" href="/reviews" class="button w-inline-block"><div class="button-in"><div class="button_texts"><div class="button_text _1">Show all reviews</div><div aria-hidden="true" class="button_text _2">Show all reviews</div></div></div></a></div>'+
 '</div>';
}
function css(){if(document.getElementById('rtk-css'))return;var s=document.createElement('style');s.id='rtk-css';s.textContent=CSS;document.head.appendChild(s)}
var reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)');
function speed(root){
 var tr=root.querySelector('.rtk-tr'),g=root.querySelector('.rtk-g');if(!tr||!g)return;
 var hor=innerWidth<768,len=hor?g.offsetWidth:g.offsetHeight;if(!len)return;
 tr.style.setProperty('--rtk-d',Math.round(len/(hor?32:24))+'s'); // px per second
}
function mount(el){
 if(!el||el.getAttribute('data-rtk-on'))return;
 css();el.setAttribute('data-rtk-on','1');
 if(el.getAttribute('data-rtk-h'))el.style.setProperty('--rtk-h',el.getAttribute('data-rtk-h'));
 el.innerHTML=html();el.style.minHeight='';
 var root=el.querySelector('.rtk'),vp=el.querySelector('.rtk-vp');
 speed(root);root.classList.add('rtk-on');
 // tap to pause on touch screens
 vp.addEventListener('click',function(e){if(e.target.closest('a'))return;vp.classList.toggle('is-paused')});
 // pause while off screen
 if('IntersectionObserver' in window){new IntersectionObserver(function(es){es.forEach(function(x){root.classList.toggle('rtk-on',x.isIntersecting)})},{rootMargin:'100px'}).observe(vp)}
 var t;addEventListener('resize',function(){clearTimeout(t);t=setTimeout(function(){speed(root)},200)});
}
function scan(){var a=document.querySelectorAll('[data-rtk]');for(var i=0;i<a.length;i++)mount(a[i])}
window.CosmosReviewTicker={mount:mount,scan:scan,version:'1.0.0'};
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',scan);else scan();
addEventListener('load',scan);
})();
