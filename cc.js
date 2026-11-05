/* COURS : page de choix avec 2 boutons.
   1) COURS PÉDAGOGIQUE : ouvre cours-pedagogique.html (cours rédigés, schémas, exercices ; images dans images/cours/).
   2) COURS D'EXERCICES L1 : le sommaire des matières du site (COURS dans cours.js, relié aux exercices de data.js). */
(function(){
const home=document.getElementById('home'),cc=document.getElementById('cc'),cpd=document.getElementById('cpd'),fr=document.getElementById('cpdFrame');
document.getElementById('goCo').onclick=()=>{home.hidden=true;cc.hidden=false;scrollTo(0,0)};
document.getElementById('ccBack').onclick=()=>{cc.hidden=true;home.hidden=false;scrollTo(0,0)};
document.getElementById('goCcP').onclick=()=>{cc.hidden=true;cpd.hidden=false;if(!fr.getAttribute('src'))fr.src='cours-pedagogique.html';scrollTo(0,0)};
document.getElementById('cpdBack').onclick=()=>{cpd.hidden=true;cc.hidden=false;scrollTo(0,0)};
document.getElementById('goCcX').onclick=()=>requireAccess('1',()=>{cc.hidden=true;openApp('co')});
})();
