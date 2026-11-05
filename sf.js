/* SAGE FEMME : ouvre la page sage-femme.html (examen blanc version B, santé de la reproduction / planification familiale).
   Pour modifier les questions : liste DATA du fichier sage-femme.html. */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('sf'),fr=document.getElementById('sfFrame');
document.getElementById('goSf').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(window.SF_HTML)fr.srcdoc=window.SF_HTML;else if(!fr.getAttribute('src'))fr.src='sage-femme.html';scrollTo(0,0)};
document.getElementById('sfBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
