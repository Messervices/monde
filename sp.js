/* FORMULE SANTÉ PUBLIQUE : ouvre la page sante-publique.html dans l'application.
   Pour modifier le contenu, remplacer le fichier sante-publique.html (même nom). */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('sp'),fr=document.getElementById('spFrame');
document.getElementById('goSp').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(window.SP_HTML)fr.srcdoc=window.SP_HTML;else if(!fr.getAttribute('src'))fr.src='sante-publique.html';scrollTo(0,0)};
document.getElementById('spBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
window.addEventListener('message',e=>{
  if(e.source===fr.contentWindow&&e.data&&e.data.type==='sp-correct')
    requireCorrection(()=>fr.contentWindow.postMessage({type:'sp-correct-ok'},'*'));
});
})();
