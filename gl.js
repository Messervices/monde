/* GLOSSAIRE MÉDICAL : ouvre la page glossaire-medical.html dans l'application.
   Pour ajouter un mot : ajouter une ligne [mot, catégorie, définition] dans la liste DATA du fichier glossaire-medical.html. */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('gl'),fr=document.getElementById('glFrame');
document.getElementById('goGl').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(window.GL_HTML)fr.srcdoc=window.GL_HTML;else if(!fr.getAttribute('src'))fr.src='glossaire-medical.html';scrollTo(0,0)};
document.getElementById('glBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
