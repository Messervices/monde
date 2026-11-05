/* PEV : ouvre la page pev.html (cours Programme Élargi de Vaccination, images dans images/pev/).
   Pour modifier le contenu, remplacer le fichier pev.html (même nom). */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('pv'),fr=document.getElementById('pvFrame');
document.getElementById('goPv').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(window.PEV_HTML)fr.srcdoc=window.PEV_HTML;else if(!fr.getAttribute('src'))fr.src='pev.html';scrollTo(0,0)};
document.getElementById('pvBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
