/* Lecteur de documents PDF : Dictionnaire médical, Atlas image anatomie et Cours PDF (dossiers docs/ et cours-pdf/) */
const DOCS=(function(){
const home=document.getElementById('home'),sec=document.getElementById('doc'),T=document.getElementById('docT'),S=document.getElementById('docS'),body=document.getElementById('docBody');
const D={
  dico:{t:'📖 DICTIONNAIRE MÉDICAL',s:'Dictionnaire médical avec atlas anatomique',f:'docs/dictionnaire-medical.pdf',n:'Pour retrouver un terme : touche Ctrl + F sur ordinateur, ou le menu « Rechercher » du lecteur PDF sur téléphone.'},
  atlas:{inclus:true,t:'🫀 ATLAS IMAGE ANATOMIE',s:'Polycopié d\'anatomie illustré · Laboratoire d\'Anatomie, Faculté de Médecine de Lille · édition 2017 · 483 pages',f:'docs/atlas-anatomie.pdf',n:'Fichier volumineux (environ 22 Mo) : l\'ouverture peut prendre quelques secondes selon votre connexion. Sommaire : rachis, thorax, abdomen, uro-génital, membres, tête et cou, neuroanatomie.'}
};
let cur=null,backTo=null;
/* Test léger (premier octet seulement) ; si le test échoue pour une autre raison (ouverture en local), on suppose le fichier présent */
const ok=f=>fetch(f,{headers:{Range:'bytes=0-0'}}).then(r=>r.ok||r.status===206).catch(()=>true);
/* nom normal, puis nom à extension doublée (.pdf.pdf) */
const names=d=>[d.f,d.f+'.pdf',...(d.alt||[])];
async function find(d){for(const f of names(d)){if(await ok(f))return f}return null}
function view(d){
  const tel=navigator.pdfViewerEnabled?'':'<p class="deMu">Sur téléphone, le document s\'ouvre dans le lecteur PDF de votre appareil (ou se télécharge si aucun lecteur n\'est installé).</p>';
  return `<div class="deCard"><p class="deMu">${d.n||'Pour retrouver un mot : touche Ctrl + F sur ordinateur, ou le menu « Rechercher » du lecteur PDF sur téléphone.'}</p>${tel}<a class="btn" href="${d.f}" target="_blank" rel="noopener">📖 Ouvrir le document</a><a class="btn alt" href="${d.f}" download>⬇ Télécharger</a></div>`+(navigator.pdfViewerEnabled?`<iframe class="docFrame" src="${d.f}" title="${d.s}"></iframe>`:'')}
function missing(d){
  const dir=d.f.split('/')[0],f=d.f.split('/')[1];
  const msg=d.inclus?`<p class="deMu">Le fichier <b>${d.f}</b> est introuvable sur le site. Administrateur : vérifiez que le dossier <b>${dir}</b> (avec <b>${f}</b>) a bien été téléversé à la racine du dépôt, à côté de index.html.</p>`:`<p class="deMu">Ce document n'est pas encore en ligne sur le site.</p><p class="deMu">Administrateur : déposez le fichier PDF dans le dossier <b>${dir}/</b> sous le nom <b>${f}</b>, il s'affichera ici automatiquement.</p>`;
  return `<div class="deCard"><h3>Document bientôt disponible</h3>${msg}<a class="btn alt" href="${d.f}" target="_blank" rel="noopener">Essayer d'ouvrir quand même</a></div>`}
/* ouvre un document ; « from » = section à réafficher au retour (accueil par défaut) */
function openDoc(d,from){
  cur=d;backTo=from||null;(from||home).hidden=true;sec.hidden=false;T.textContent=d.t;S.textContent=d.s;
  body.innerHTML='<div class="deCard"><p class="deMu">Chargement…</p></div>';scrollTo(0,0);
  find(d).then(f=>{if(cur===d)body.innerHTML=f?view({...d,f}):missing(d)})}
function exit(){cur=null;sec.hidden=true;(backTo||home).hidden=false;backTo=null;scrollTo(0,0)}
document.getElementById('docBack').onclick=exit;
document.getElementById('goDico').onclick=()=>openDoc(D.dico);
document.getElementById('goAtlas').onclick=()=>openDoc(D.atlas);
return{openDoc,ok,find};
})();
