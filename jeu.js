/* JEU QUIZ : QCM tirés de tous les exercices (data.js + sujets D.E). Récompense : le Diplôme d'État D.E */
const GAME=(function(){
const home=document.getElementById('home'),sec=document.getElementById('game'),body=document.getElementById('gBody');
const LET='ABCDEF';let P=null,S=null,lastName='';
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const lab=(o,k)=>/^[A-F][\.\):—-]\s/.test(o)?o:LET[k]+'. '+o;
const BAD=/<img|associez/i,BADQ=/(\bfigure\b|sch[ée]ma|\bimage\b|illustration|\bphoto\b|ci-dessus|ci-contre|ce cas|du cas|dans le cas|\btexte\b|\btableau\b)/i;
function pool(){
  if(P)return P;P=[];const seen=new Set();
  const add=x=>{const key=x.q.toLowerCase().replace(/\W+/g,'')+'|'+x.o.length;if(seen.has(key)||BADQ.test(x.q))return;seen.add(key);P.push(x)};
  for(const d of Object.values(DATA)){let hdr='';
    for(const q of d.qcm){if(q[5])hdr=q[5];
      if(BAD.test(hdr)||!q[2]||!q[2].length||q[1].length<2)continue;
      add({q:q[0],o:q[1],a:q[2].map(Number),e:q[3]||'',src:d.title})}}
  DE.pool().forEach(add);return P}
function shuffle(a){a=a.slice();for(let i=a.length-1;i>0;i--){const j=Math.random()*(i+1)|0;[a[i],a[j]]=[a[j],a[i]]}return a}
function start(){
  const n=pool().length;
  body.innerHTML=`<div class="deCard gStart"><h3>🏆 Décrochez le Diplôme d'État D.E</h3><p class="deMu">Répondez à toutes les questions à choix multiple (tirées au hasard dans tous les exercices du site). Une fois la dernière question terminée, vous recevez <b>LE DIPLÔME D'ÉTAT D.E</b> 🎓</p><label class="deMu" for="gName">Votre nom (affiché sur le diplôme)</label><input id="gName" type="text" maxlength="40" autocomplete="name" placeholder="Ex. : Kouadio Aya" value="${esc(lastName)}"><p class="deMu"><b>Combien de questions ?</b> (${n} disponibles)</p><div class="gCnt"><button class="btn" data-a="go" data-n="10">10 questions</button><button class="btn" data-a="go" data-n="20">20 questions</button><button class="btn" data-a="go" data-n="30">30 questions</button><button class="btn" data-a="go" data-n="50">50 questions</button></div></div>`;
  scrollTo(0,0)}
function ask(){
  const q=S.list[S.i],multi=q.a.length>1;
  body.innerHTML=`<div class="gTop"><span><b>Question ${S.i+1}</b> / ${S.n}</span><span>Score : ${S.score}</span></div><div class="gProg"><i style="width:${S.i/S.n*100}%"></i></div><div class="q" id="gQ"><p>${q.q}${multi?`<span class="deTag">${q.a.length} réponses</span>`:''}</p><div class="opts">${q.o.map((o,k)=>`<label><input type="${multi?'checkbox':'radio'}" name="gq" data-k="${k}">${lab(o,k)}</label>`).join('')}</div><div class="fix"></div></div><div class="bar" id="gBar">${multi?'<button class="btn" data-a="val">Valider</button>':'<span class="deMu">Touchez votre réponse</span>'}</div>`;
  scrollTo(0,0)}
function val(){
  const q=S.list[S.i],qEl=document.getElementById('gQ'),inputs=[...qEl.querySelectorAll('input')];
  const sel=inputs.filter(i=>i.checked).map(i=>+i.dataset.k);if(!sel.length||qEl.classList.contains('done'))return;
  const ok=sel.length===q.a.length&&sel.every(k=>q.a.includes(k));if(ok)S.score++;
  inputs.forEach((inp,k)=>{inp.disabled=true;const l=inp.parentNode;if(q.a.includes(k))l.classList.add('good');else if(sel.includes(k))l.classList.add('bad')});
  qEl.classList.add('done',ok?'ok':'ko');
  qEl.querySelector('.fix').innerHTML=`<b>${ok?'✔ Bravo !':'✘ Raté.'}</b> Bonne réponse : ${q.a.map(k=>LET[k]).join(', ')}. ${q.e}<div class="deMu" style="margin-top:6px">Source : ${esc(q.src)}</div>`;
  document.getElementById('gBar').innerHTML=`<button class="btn" data-a="next">${S.i+1<S.n?'Question suivante →':'🎓 Recevoir mon diplôme'}</button>`}
function confetti(){
  if(window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches)return;
  const c=document.createElement('canvas');c.className='gConf';document.body.appendChild(c);
  const x=c.getContext('2d');c.width=innerWidth;c.height=innerHeight;
  const cols=['#ffd24d','#0b9a8f','#e07b1a','#7b4fc9','#e64a4a','#3aa0ff'];
  const p=Array.from({length:160},()=>({x:Math.random()*c.width,y:-20-Math.random()*c.height*.6,w:6+Math.random()*6,h:8+Math.random()*8,vy:2+Math.random()*3.5,vx:-1.5+Math.random()*3,r:Math.random()*6,vr:-.2+Math.random()*.4,c:cols[Math.random()*cols.length|0]}));
  const t0=performance.now();
  (function f(t){x.clearRect(0,0,c.width,c.height);p.forEach(o=>{o.x+=o.vx;o.y+=o.vy;o.r+=o.vr;x.save();x.translate(o.x,o.y);x.rotate(o.r);x.fillStyle=o.c;x.fillRect(-o.w/2,-o.h/2,o.w,o.h);x.restore()});
    if(t-t0<5500&&p.some(o=>o.y<c.height+20))requestAnimationFrame(f);else c.remove()})(t0)}
function diploma(){
  const pct=Math.round(S.score/S.n*100),m=pct>=90?'Mention Excellent':pct>=70?'Mention Très bien':pct>=50?'Mention Bien':'Mention Passable — continuez à vous entraîner !';
  const d=new Date().toLocaleDateString('fr-FR',{day:'numeric',month:'long',year:'numeric'});
  body.innerHTML=`<div class="gDip"><div class="gk">MON D.E INFAS</div><div class="gm2">🎓</div><h2>DIPLÔME D'ÉTAT D.E</h2><div class="gf">FÉLICITATIONS !</div><p>décerné à</p><div class="gn">${esc(S.name||'Candidat(e) PREPA INFAS')}</div><p>pour avoir répondu aux <b>${S.n}</b> questions du jeu</p><p class="gs">Score : ${S.score} / ${S.n} (${pct} %)</p><p><b>${m}</b></p><p>Fait le ${d}</p><small>Récompense du jeu « MON D.E INFAS » — diplôme symbolique, sans valeur officielle.</small></div><div class="bar"><button class="btn" data-a="again">🔁 Rejouer</button><button class="btn alt" data-a="exit">← Accueil</button></div>`;
  scrollTo(0,0);confetti()}
body.addEventListener('click',e=>{
  const b=e.target.closest('button[data-a]');if(!b)return;const a=b.dataset.a;
  if(a==='go'){const nm=document.getElementById('gName');lastName=nm?nm.value.trim():'';
    const list=shuffle(pool()).slice(0,+b.dataset.n);S={n:list.length,list,i:0,score:0,name:lastName};ask()}
  else if(a==='val')val();
  else if(a==='next'){if(S.i+1<S.n){S.i++;ask()}else diploma()}
  else if(a==='again')start();
  else if(a==='exit')exit()});
body.addEventListener('change',e=>{
  const t=e.target;if(t.name!=='gq'||t.type!=='radio')return;val()});
function exit(){sec.hidden=true;home.hidden=false;scrollTo(0,0)}
document.getElementById('gBack').onclick=exit;
document.getElementById('goGame').onclick=()=>{home.hidden=true;sec.hidden=false;start()};
return{_t:{pool,start,S:()=>S}};
})();
