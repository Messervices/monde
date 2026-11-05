/* SCHÉMA ET ILLUSTRATION : ouvre la page schemas-illustrations.html (images dans images/schemas/).
   Pour ajouter un schéma : déposer l'image dans images/schemas/ (et sa miniature dans images/schemas/t/)
   puis ajouter une ligne dans la liste DATA du fichier schemas-illustrations.html. */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('schSec'),fr=document.getElementById('scFrame');
document.getElementById('goSc').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(window.SC_HTML)fr.srcdoc=window.SC_HTML;else if(!fr.getAttribute('src'))fr.src='schemas-illustrations.html';scrollTo(0,0)};
document.getElementById('scBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
