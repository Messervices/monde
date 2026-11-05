/* RÉSUMÉ PÉDIATRIE : ouvre la page resume-pediatrie.html dans l'application.
   Pour modifier le contenu, remplacer le fichier resume-pediatrie.html (même nom). */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('pd'),fr=document.getElementById('pdFrame');
document.getElementById('goPd').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(window.PED_HTML)fr.srcdoc=window.PED_HTML;else if(!fr.getAttribute('src'))fr.src='resume-pediatrie.html';scrollTo(0,0)};
document.getElementById('pdBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
