/* Application installable : enregistre le service worker et affiche le bouton « Installer l'application » */
(function(){
  if('serviceWorker' in navigator&&/^https?:$/.test(location.protocol))addEventListener('load',()=>navigator.serviceWorker.register('sw.js').catch(()=>{}));
  const btn=document.getElementById('pwaBtn'),hint=document.getElementById('pwaHint');
  if(!btn||(matchMedia('(display-mode: standalone)').matches||navigator.standalone))return;
  const ua=navigator.userAgent;let ev=null;
  const tip=t=>{hint.textContent=t;hint.hidden=false};
  addEventListener('beforeinstallprompt',e=>{e.preventDefault();ev=e;btn.hidden=false});
  addEventListener('appinstalled',()=>{btn.hidden=true;hint.hidden=true});
  btn.onclick=async()=>{
    if(ev){ev.prompt();try{await ev.userChoice}catch(e){}ev=null;btn.hidden=true}
    else if(/iphone|ipad|ipod/i.test(ua))tip('Sur iPhone / iPad : touchez le bouton Partager (carré avec une flèche), puis « Sur l\'écran d\'accueil ».');
    else tip('Touchez le menu ⋮ de votre navigateur, puis « Installer l\'application » ou « Ajouter à l\'écran d\'accueil ».')};
  if(/iphone|ipad|ipod/i.test(ua))btn.hidden=false;
  else if(/android/i.test(ua))setTimeout(()=>{if(!ev)btn.hidden=false},2500);
})();
