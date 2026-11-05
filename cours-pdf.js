/* COURS PDF : un bouton par matière. Pour ajouter un cours, déposer le PDF dans le dossier cours-pdf/ sous le nom indiqué
   dans cours-pdf/LISEZ-MOI.txt (nom de la matière en minuscules, sans accents, tirets à la place des espaces).
   Pour ajouter un nouveau bouton : ajouter son nom dans la liste ci-dessous. */
const COURS_PDF=(function(){
const home=document.getElementById('home'),sec=document.getElementById('cp'),body=document.getElementById('cpBody');
const GROUPES=[
 ['Grandes matières',['Pédiatrie','Médecine','Chirurgie','Santé publique','Gynécologie et obstétrique']],
 ['Anatomie et physiologie',['Anatomie','Anatomie de l\'appareil digestif','Anatomie cellule et tissus','Anatomie appareil locomoteur','Anatomie cardiovasculaire','Anatomie et physiologie respiratoire','Anatomie obstétricale','Anatomie appareil urinaire et reproduction']],
 ['Autres matières des exercices',['Étude du milieu','Sémiologie médicale','Sémiologie et pathologie chirurgicales','Diététique','Nutrition','Maladies infectieuses et tropicales','Hygiène et assainissement','Infection à VIH et IST','SONU','Épidémiologie','Parasitologie','IECC / CCC','Urologie','Immunologie','Théorie et concept','Recherche','Système national de santé','Soins de santé primaires','Pathologie respiratoire','Démarche de soins scientifiques','Hématologie','Techniques de soins infirmiers','Techniques de soins de base','Soins aux enfants','Biochimie','Bactériologie-virologie','PEV']]
];
const slug=s=>s.normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/^-+|-+$/g,'');
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const doc=n=>({t:'📚 '+n.toUpperCase(),s:'Cours PDF · '+n,f:'cours-pdf/'+slug(n)+'.pdf'});
function render(){
  let h='<p class="deMu">Choisissez une matière pour ouvrir son cours en PDF. Les cours marqués <b>✓</b> sont disponibles ; les autres arriveront bientôt.</p>';
  GROUPES.forEach(([g,l])=>{h+=`<div class="cpH">${g}</div><div class="cpGrid">`+l.map(n=>`<button class="cpBtn" data-n="${esc(n)}"><span>${esc(n)}</span><small>…</small></button>`).join('')+'</div>'});
  body.innerHTML=h;scrollTo(0,0);
  /* indique quels cours existent (6 vérifications à la fois) */
  const btns=[...body.querySelectorAll('.cpBtn')];let i=0;
  const next=async()=>{while(i<btns.length){const b=btns[i++];const f=await DOCS.find(doc(b.dataset.n));if(!b.isConnected)return;b.classList.toggle('ok',!!f);b.querySelector('small').textContent=f?'✓ Disponible':'Bientôt'}};
  for(let k=0;k<6;k++)next()}
body.addEventListener('click',e=>{const b=e.target.closest('.cpBtn');if(b)DOCS.openDoc(doc(b.dataset.n),sec)});
function exit(){sec.hidden=true;home.hidden=false;scrollTo(0,0)}
document.getElementById('cpBack').onclick=exit;
document.getElementById('goCp').onclick=()=>{home.hidden=true;sec.hidden=false;render()};
return{doc,GROUPES,slug};
})();
