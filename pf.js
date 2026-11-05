/* PRÉFIXES ET SUFFIXES : ouvre la page prefixes-suffixes.html dans l'application.
   Pour ajouter une ligne : modifier les listes P (préfixes) et S (suffixes) du fichier prefixes-suffixes.html. */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('pf'),fr=document.getElementById('pfFrame');
document.getElementById('goPf').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(window.PF_HTML)fr.srcdoc=window.PF_HTML;else if(!fr.getAttribute('src'))fr.src='prefixes-suffixes.html';scrollTo(0,0)};
document.getElementById('pfBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
