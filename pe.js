/* PÉDIATRIE · EXERCICE SPÉCIAL D'ENTRAÎNEMENT : ouvre la page pediatrie-entrainement.html dans l'application.
   Les questions viennent du fichier ped-train.js (extraites des sujets de pédiatrie). */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('pe'),fr=document.getElementById('peFrame');
document.getElementById('goPe').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(!fr.getAttribute('src'))fr.src='pediatrie-entrainement.html';scrollTo(0,0)};
document.getElementById('peBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
