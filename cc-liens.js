/* LIENS DE RÉFÉRENCE : dans les corrections des sujets D.E (blanc Abengourou), un clic sur « Cours · … » ouvre le cours L1 correspondant ; « ← Accueil » ramène à la page du sujet, là où l'on s'était arrêté. */
(function(){
const de=document.getElementById('de'),app=document.getElementById('app'),back=document.getElementById('goHome');
if(!de||!app||!back)return;
let from=false,y=0;
de.addEventListener('click',ev=>{
  const a=ev.target.closest('a[data-co]');if(!a)return;
  ev.preventDefault();
  const id=a.dataset.co;
  const go=()=>{y=scrollY;from=true;de.hidden=true;openApp('co');goCo(id)};
  if(typeof requireAccess==='function')requireAccess('1',go);else go();
});
const prev=back.onclick;
back.onclick=function(ev){
  if(from){from=false;app.hidden=true;de.hidden=false;scrollTo(0,y);return}
  return prev&&prev.call(this,ev);
};
})();
