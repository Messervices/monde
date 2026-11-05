/* CLASSIFICATION DES MÉDICAMENTS : ouvre la page classification-medicaments.html dans l'application.
   Pour modifier le contenu, remplacer le fichier classification-medicaments.html (même nom). */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('cm'),fr=document.getElementById('cmFrame');
document.getElementById('goMed').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(window.CM_HTML)fr.srcdoc=window.CM_HTML;else if(!fr.getAttribute('src'))fr.src='classification-medicaments.html';scrollTo(0,0)};
document.getElementById('cmBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
const MSG='Les médicaments de la classification sont réservés aux abonnés (1 000 FCFA / mois). Contactez l\'administrateur sur WhatsApp pour obtenir votre code, puis saisissez-le ci-dessous.';
window.addEventListener('message',e=>{
  if(e.source!==fr.contentWindow||!e.data)return;
  const t=e.data.type,w=fr.contentWindow;
  if(t==='cm-hello')w.postMessage({type:'cm-state',ok:hasAnyAccess()},'*');
  else if(t==='cm-need')requireCorrection(()=>w.postMessage({type:'cm-ok',i:e.data.i},'*'),MSG);
});
})();
