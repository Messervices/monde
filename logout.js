/* Bouton « Se déconnecter » (en haut à droite) : visible seulement quand un code d'accès valide est enregistré.
   Il se met à jour tout seul quand le code est saisi (y compris dans les pages d'exercices) et efface le code au clic. */
(function(){
const KEY='infas_acces',btn=document.createElement('button');
btn.id='logoutBtn';btn.type='button';btn.hidden=true;
btn.innerHTML='<i></i>Connecté · Se déconnecter';
document.body.appendChild(btn);
function connected(){try{const o=JSON.parse(localStorage.getItem(KEY)||'{}');
  return ['1','2','3','all'].some(l=>o[l]&&((ACCESS.codes[l]||[]).includes(o[l])||(ACCESS.codes.all||[]).includes(o[l])))}catch(e){return false}}
function refresh(){btn.hidden=!connected()}
btn.onclick=()=>{try{localStorage.removeItem(KEY)}catch(e){}
  refresh();const t=document.getElementById('toast');if(t){t.textContent='Vous êtes déconnecté. Le code sera redemandé pour voir les corrections.';setTimeout(()=>{t.textContent=''},4000)}};
addEventListener('storage',refresh);addEventListener('focus',refresh);document.addEventListener('visibilitychange',refresh);
setInterval(refresh,1000);refresh();
})();
