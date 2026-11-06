/* cosmos behance-featured v1.0.0 (2026-11-06): on case pages whose project was featured in a Behance gallery, shows Behance's own feature ribbons (official PNGs from behance.net, Webflow assets) under the About tags, linked to the Behance project. Add a case: one line in F (slug -> project URL, [gallery, ribbon, date]). Not part of the awards counter. Roll back: remove this script from the Works template page code. */
(function(){var C='https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/',F={
'miyagi-labs-ai-learning-platform':{u:'https://www.behance.net/gallery/245474861/Miyagi-Labs-UXUI-Design',r:[['UI/UX',C+'6aeddd81db0058d0a444853e_behance-ribbon-ui-ux-3x.png','03/30/2026'],['Stock',C+'6aeddd874bc8c81d4edd462b_behance-ribbon-stock-3x.png','11/06/2026']]}
};
var s=location.pathname.replace(/\/$/,'').split('/').pop(),f=F[s];if(!f)return;
var box=document.querySelector('.case-container');if(!box||box.querySelector('[data-bh-feat]'))return;
var w=document.createElement('div');w.setAttribute('data-bh-feat','');w.style.cssText='display:flex;flex-wrap:wrap;align-items:center;gap:16px 32px;margin-top:32px';
var h='<div class="text-color-grey-300" style="flex-basis:100%"><div class="text-style-label-caption">Featured on Behance</div></div>';
f.r.forEach(function(x){h+='<a href="'+f.u+'" target="_blank" rel="noopener" title="Open the project on Behance" style="display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit"><img src="'+x[1]+'" alt="Behance '+x[0]+' gallery feature ribbon" width="31" height="57" loading="lazy" style="display:block;flex:none"><span class="text-size-xsmall" style="display:flex;flex-direction:column;gap:4px"><span class="text-color-grey-400">Featured In</span><span>'+x[0]+' – '+x[2]+'</span></span></a>'});
w.innerHTML=h;var tw=box.querySelector(':scope > .tag-wr');if(tw&&tw.nextSibling)box.insertBefore(w,tw.nextSibling);else box.appendChild(w);
})();
