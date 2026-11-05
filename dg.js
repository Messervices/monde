/* DIAGNOSTIQUE MON PATIENT : jeu (page diagnostic-patient.html, cas dans diag-data.js). */
(function(){
const home=document.getElementById('home'),sec=document.getElementById('dg'),fr=document.getElementById('dgFrame');
document.getElementById('goDg').onclick=()=>{home.hidden=true;sec.hidden=false;
  if(!fr.getAttribute('src'))fr.src='diagnostic-patient.html';scrollTo(0,0)};
document.getElementById('dgBack').onclick=()=>{sec.hidden=true;home.hidden=false;scrollTo(0,0)};
})();
