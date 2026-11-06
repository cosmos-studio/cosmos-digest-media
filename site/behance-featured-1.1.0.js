/* cosmos behance-featured v1.1.0 (2026-11-06): on case pages, shows the project's real awards (Awwwards ribbons, CSS Design Awards mark) and Behance gallery feature ribbons under the About tags, in the same layout as v1.0.0 (Miyagi Labs). All graphics are the original files from behance.net, awwwards.com and cssdesignawards.com (Webflow assets or cosmos-digest-media/site/award-badges via jsDelivr). Add a case: one line in F (Behance: slug -> project URL, [gallery, ribbon, date]) and/or A (awards: slug -> [org, award, mark, date, award page URL, w, h]). Dates MM/DD/YYYY as Behance shows them. Not part of the awards counter. Roll back: set the Works template page script back to 1.0.0 or remove it. */
(function(){var C='https://cdn.prod.website-files.com/69f9c76884333229e651e7bc/',G='https://cdn.jsdelivr.net/gh/cosmos-studio/cosmos-digest-media@0a4688c/site/award-badges/',
UX=C+'6aeddd81db0058d0a444853e_behance-ribbon-ui-ux-3x.png',ST=C+'6aeddd874bc8c81d4edd462b_behance-ribbon-stock-3x.png',XD=G+'behance-ribbon-xd-3x.png',GD=G+'behance-ribbon-graphic-design-3x.png',
B='https://www.behance.net/gallery/',W='https://www.awwwards.com/sites/',S='https://www.cssdesignawards.com/sites/',
SO=G+'awwwards-ribbon-sotd.svg',HM=G+'awwwards-ribbon-honorable.svg',CS=G+'cssda-mark-194.png',
F={
'miyagi-labs-ai-learning-platform':{u:B+'245474861/Miyagi-Labs-UXUI-Design',r:[['UI/UX',UX,'03/30/2026'],['Stock',ST,'11/06/2026']]},
'umami-view-saas-website':{u:B+'148582827/Umami-View-Website',r:[['UI/UX',UX,'11/05/2025'],['XD',XD,'11/20/2025']]},
'edway-edtech-platform':{u:B+'199392625/EdWay-National-Platform-for-Educators',r:[['UI/UX',UX,'07/22/2025'],['Stock',ST,'01/08/2026']]},
'make-it-real-branding':{u:B+'229468205/Make-it-Real-Brand-Identity',r:[['Branding',GD,'09/20/2026'],['Stock',ST,'10/22/2026']]},
'yawn-crypto-website':{u:B+'229089533/Yawn-UXUI-Design',r:[['UI/UX',UX,'07/10/2025'],['XD',XD,'07/23/2025']]},
'povir-edtech-platform':{u:B+'232539181/Povir-UXUI-Design',r:[['UI/UX',UX,'06/10/2026']]},
'ply-procurement-saas-design':{u:B+'230579469/Ply-Inventory-Management',r:[['UI/UX',UX,'08/21/2025'],['XD',XD,'09/04/2025']]},
'loamly-ai-crm-design':{u:B+'237609977/Loamly-AI-native-CRM',r:[['UI/UX',UX,'12/03/2025'],['Stock',ST,'05/28/2026']]},
'sirius-animal-shelter-website':{u:B+'184769839/Sirius-Animal-Shelter',r:[['UI/UX',UX,'08/03/2025'],['Stock',ST,'12/19/2025']]}
},
w='Awwwards',c='CSS Design Awards',
A={
'30ua-interactive-website':[[w,'Site of the Day',SO,'09/10/2021',W+'30th-anniversary-of-ukraine'],[c,'Website of the Day',CS,'08/25/2021',S+'30th-anniversary-of-ukraine/39599/']],
'edcamp-education-website':[[w,'Honorable Mention',HM,'12/28/2021',W+'edcamp'],[c,'Special Kudos',CS,'12/20/2021',S+'edcamp/40396/']],
'umami-ware-ai-website':[[w,'Honorable Mention',HM,'03/30/2020',W+'umami-ware'],[c,'Website of the Day',CS,'04/10/2020',S+'umami-ware/36881/']],
'radioactive-crocs-nft-website':[[w,'Site of the Day',SO,'05/16/2022',W+'radioactive-crocs-club']],
'zeuss-skincare-ecommerce-website':[[w,'Honorable Mention',HM,'05/24/2022',W+'zeuss']],
'plarium-gamedev-career-website':[[w,'Honorable Mention',HM,'08/22/2024',W+'plarium-employer-brand-page'],[c,'Special Kudos',CS,'08/16/2024',S+'plarium/46121/']],
'sportfaction-web3-platform':[[w,'Honorable Mention',HM,'06/30/2025',W+'sport-faction'],[c,'Special Kudos',CS,'06/19/2025',S+'sport-faction/47637/']],
'neo-vision-ai-agency-website':[[w,'Honorable Mention',HM,'01/08/2025',W+'neo-vision']],
'maddogs-web3-website':[[w,'Honorable Mention',HM,'09/01/2026',W+'mad-dogs-design-concept']]
};
var s=location.pathname.replace(/\/$/,'').split('/').pop(),f=F[s],a=A[s];if(!f&&!a)return;
var box=document.querySelector('.case-container');if(!box||box.querySelector('[data-bh-feat]'))return;
function item(href,title,img,alt,iw,ih,top,text){return '<a href="'+href+'" target="_blank" rel="noopener" title="'+title+'" style="display:flex;align-items:center;gap:12px;text-decoration:none;color:inherit"><img src="'+img+'" alt="'+alt+'" width="'+iw+'" height="'+ih+'" loading="lazy" style="display:block;flex:none"><span class="text-size-xsmall" style="display:flex;flex-direction:column;gap:4px"><span class="text-color-grey-400">'+top+'</span><span>'+text+'</span></span></a>'}
function group(label,inner){var g=document.createElement('div');g.setAttribute('data-bh-feat','');g.style.cssText='display:flex;flex-wrap:wrap;align-items:center;gap:16px 32px;margin-top:32px';g.innerHTML='<div class="text-color-grey-300" style="flex-basis:100%"><div class="text-style-label-caption">'+label+'</div></div>'+inner;return g}
var out=[];
if(a){var h='';a.forEach(function(x){var aw=x[0]==w;h+=item(x[4],'Open the award page on '+x[0],x[2],x[0]+' '+x[1]+(aw?' ribbon':' logo'),31,aw?100:31,x[0],x[1]+' – '+x[3])});out.push(group('Awards',h))}
if(f){var h2='';f.r.forEach(function(x){h2+=item(f.u,'Open the project on Behance',x[1],'Behance '+x[0]+' gallery feature ribbon',31,57,'Featured In',x[0]+' – '+x[2])});out.push(group('Featured on Behance',h2))}
var tw=box.querySelector(':scope > .tag-wr'),ref=tw?tw.nextSibling:null;
out.forEach(function(g){if(ref)box.insertBefore(g,ref);else box.appendChild(g)});
})();
