/* COURS : ouvre le choix COURS L1 / MES COURS au lieu d'aller directement aux cours L1 */
(function(){
const home=document.getElementById('home'),ch=document.getElementById('coChoice'),app=document.getElementById('app');
document.getElementById('goCo').onclick=()=>{home.hidden=true;ch.hidden=false;scrollTo(0,0)};
document.getElementById('coBack').onclick=()=>{ch.hidden=true;home.hidden=false;scrollTo(0,0)};
document.getElementById('chL1').onclick=()=>{ch.hidden=true;requireAccess('1',()=>openApp('co'))};
/* retour depuis les cours L1 : revenir au choix COURS */
backBtn.onclick=()=>{app.hidden=true;if(mode==='co'){ch.hidden=false}else{if(mode==='ex')document.getElementById('lic').hidden=false;else home.hidden=false}scrollTo(0,0)};
})();
