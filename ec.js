/* ÉTUDES DE CAS : ouvre la page etudes-de-cas.html dans l'application.
   Les cas viennent de ped-train.js (PED_CTX = textes des cas, PED_TRAIN = questions rattachées). */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('ec'),fr=document.getElementById('ecFrame');
document.getElementById('goEc').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(!fr.getAttribute('src'))fr.src='etudes-de-cas.html';scrollTo(0,0)};
document.getElementById('ecBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
