/* Logique du site : accueil, sommaire, exercices, cours */
let cur=null;const nav=document.getElementById('nav'),main=document.getElementById('main');
const L=["A","B","C","D","E","F"];
function buildNav(){let h='<div class="big"><span id="bigT">EXERCICE</span><small>SOMMAIRE</small></div>';GROUPS.forEach(([t,l],gi)=>{h+=`<h2>${t}</h2>`;l.forEach((e,i)=>{const id=e[2]||`${gi}-${i}`;h+=`<button data-id="${id}" data-t="${e[0]}" data-p="${e[1]}" class="${e[2]?'':'todo'}"><span>${e[0]}</span><span class="pg">p. ${e[1]}</span></button>`})});nav.innerHTML=h;
nav.onclick=ev=>{const b=ev.target.closest('button');if(b){if(mode==='co')showCours(b.dataset.id,b.dataset.t);else show(b.dataset.id,b.dataset.t,b.dataset.p);nav.classList.remove('open','full')}}}
function show(id,t,p){cur=id;nav.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.id===id));scrollTo(0,0);
const d=DATA[id];if(!d){main.innerHTML=`<h2>${t}</h2><p class="sub">Sommaire · page ${p} du PDF</p><div class="soon">La correction de cette épreuve n'est pas encore rédigée. Les épreuves corrigées sont signalées dans le sommaire sans transparence.</div>`;return}
let n=0,h=`<h2>${d.title}</h2><p class="sub">${d.sub||d.pages+' · '+d.qcd.length+' questions vrai/faux + '+d.qcm.length+' QCM'}</p>${d.qcd.length?'<div class="part">Partie 1 · QCD : vrai (A) ou faux (B)</div>':''}`;
d.qcd.forEach((q,i)=>{n++;if(q[4])h+=`<div class="part">${q[4]}</div>`;h+=`<div class="q" data-k="qcd" data-i="${i}"><p><b>${q[3]||n}.</b> ${q[0]}</p><div class="opts"><label><input type="radio" name="q${n}" value="A">A · Vrai</label><label><input type="radio" name="q${n}" value="B">B · Faux</label></div><div class="fix"></div></div>`});
if(d.qcd.length)h+=`<div class="part">Partie 2 · QCM : cochez la ou les bonnes réponses</div>`;
d.qcm.forEach((q,i)=>{n++;if(q[5])h+=`<div class="part">${q[5]}</div>`;h+=`<div class="q" data-k="qcm" data-i="${i}"><p><b>${q[4]||n}.</b> ${q[0]}</p><div class="opts">${q[1].map((o,j)=>`<label><input type="checkbox" name="q${n}" value="${j}">${L[j]}. ${o}</label>`).join('')}</div><div class="fix"></div></div>`});
h+=`<div class="bar"><button class="btn" id="go">Corriger</button><button class="btn alt" id="rs">Recommencer</button><span class="score" id="sc"></span></div>`;
main.innerHTML=h;document.getElementById('go').onclick=()=>requireCorrection(()=>correct(d));document.getElementById('rs').onclick=()=>show(id,t,p)}
function correct(d){let ok=0,tot=0;main.querySelectorAll('.q').forEach(el=>{tot++;const k=el.dataset.k,q=d[k][el.dataset.i],labs=[...el.querySelectorAll('label')];
const sel=[...el.querySelectorAll('input:checked')].map(x=>x.value);let good,exp;
if(k==='qcd'){good=sel[0]===q[1];exp=`<b>Réponse : ${q[1]==='A'?'A · Vrai':'B · Faux'}.</b> ${q[2]}`;labs.forEach(l=>{const v=l.querySelector('input').value;if(v===q[1])l.classList.add('good');else if(sel.includes(v))l.classList.add('bad')})}
else{const c=q[2].map(String);good=sel.length===c.length&&sel.every(s=>c.includes(s));exp=`<b>Réponse : ${q[2].length?q[2].map(i=>L[i]).join(', '):'aucune proposition à cocher'}.</b> ${q[3]}`;labs.forEach(l=>{const v=l.querySelector('input').value;if(c.includes(v))l.classList.add('good');else if(sel.includes(v))l.classList.add('bad')})}
el.classList.remove('ok','ko');el.classList.add('done',good?'ok':'ko');el.querySelector('.fix').innerHTML=(good?'✔ Correct. ':'✘ Incorrect. ')+exp;if(good)ok++;el.querySelectorAll('input').forEach(i=>i.disabled=true)});
document.getElementById('sc').textContent=`Score : ${ok} / ${tot}`}
document.getElementById('menu').onclick=()=>nav.classList.toggle('open');
buildNav();
const homeEl=document.getElementById('home'),licEl=document.getElementById('lic'),appEl=document.getElementById('app'),toast=document.getElementById('toast'),toast2=document.getElementById('toast2'),backBtn=document.getElementById('goHome');
let mode='ex';
function hint(){main.innerHTML='<div class="hint"><b>Choisissez '+(mode==='co'?'une matière':'une épreuve')+' dans le sommaire</b><br>'+(mode==='co'?'Le cours s\'affichera ici.':'Les questions et leurs corrections s\'afficheront ici.')+'</div>'}
function showCours(id,t){nav.querySelectorAll('button').forEach(b=>b.classList.toggle('on',b.dataset.id===id));scrollTo(0,0);if(COURS[id]){main.innerHTML='<h2>'+t+'</h2><p class="sub">Cours</p><button class="btn alt gobtn" onclick="goEx(\''+id+'\')">✏️ Faire les exercices de cette matière</button>'+COURS[id]+'<div class="bar"><button class="btn" onclick="goEx(\''+id+'\')">✏️ Passer aux exercices</button></div>'}else{main.innerHTML='<h2>'+t+'</h2><p class="sub">Cours</p><div class="soon">Le cours de cette matière sera bientôt disponible.</div>'}}
function setMode(m){mode=m;backBtn.textContent=m==='co'?'← Accueil':'← Licences';nav.classList.toggle('cours',m==='co');document.getElementById('bigT').textContent=m==='co'?'COURS':'EXERCICE';document.getElementById('menuT').textContent=m==='co'?'COURS':'EXERCICE';document.getElementById('appT').textContent=m==='co'?'Succès L 1-2-3 /SF · Cours':'Succès L 1-2-3 /SF · Exercices corrigés';nav.querySelectorAll('button').forEach(b=>b.classList.toggle('todo',m==='co'&&!COURS[b.dataset.id]))}
function openApp(m){setMode(m);homeEl.hidden=true;appEl.hidden=false;nav.classList.add('open','full');nav.querySelectorAll('button').forEach(b=>b.classList.remove('on'));hint();scrollTo(0,0)}
function goEx(id){const b=nav.querySelector('button[data-id="'+id+'"]');setMode('ex');show(id,b.dataset.t,b.dataset.p)}
function goCo(id){const b=nav.querySelector('button[data-id="'+id+'"]');setMode('co');showCours(id,b.dataset.t)}
const _show=show;show=function(id,t,p){_show(id,t,p);if(typeof COURS!=='undefined'&&COURS[id]&&mode==='ex')main.insertAdjacentHTML('afterbegin','<button class="btn alt gobtn" onclick="goCo(\''+id+'\')">📖 Voir le cours</button>')};
document.getElementById('goEx').onclick=()=>{homeEl.hidden=true;licEl.hidden=false;toast2.textContent='';scrollTo(0,0)};
licEl.querySelectorAll('[data-l]').forEach(b=>{b.dataset.o=b.querySelector('small').textContent;b.onclick=()=>{const lv=b.dataset.l;toast2.textContent='';requireAccess(lv,()=>{if(lv==='1'){licEl.hidden=true;openApp('ex')}else{toast2.textContent='Licence '+lv+' : le sommaire sera bientôt disponible.'}})}});
document.querySelectorAll('[data-hl]').forEach(b=>{b.onclick=()=>{const lv=b.dataset.hl;toast.textContent='';requireAccess(lv,()=>{if(lv==='1')openApp('ex');else toast.textContent='Licence '+lv+' : le sommaire sera bientôt disponible.'})}});
(()=>{const b=document.getElementById('banner'),go=document.getElementById('goDe');if(b&&go){b.onclick=()=>go.click();b.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();go.click()}}}})();
document.getElementById('licBack').onclick=()=>{licEl.hidden=true;homeEl.hidden=false;scrollTo(0,0)};
document.getElementById('goCo').onclick=()=>requireAccess('1',()=>openApp('co'));
document.getElementById('goDe').onclick=()=>DE.open();
backBtn.onclick=()=>{appEl.hidden=true;if(mode==='ex')licEl.hidden=false;else homeEl.hidden=false;scrollTo(0,0)};

/* ===== Accès par code (Licence 1, 2, 3) ===== */
const KEY='infas_acces';
function store(){try{return JSON.parse(localStorage.getItem(KEY)||'{}')}catch(e){return {}}}
function saveStore(o){try{localStorage.setItem(KEY,JSON.stringify(o))}catch(e){}}
/* Un accès mémorisé reste valable tant que son empreinte figure encore dans access.js */
function okHash(lv,h){return !!h&&((ACCESS.codes[lv]||[]).includes(h)||(ACCESS.codes.all||[]).includes(h))}
function hasAccess(lv){const o=store();return okHash(lv,o[lv])||okHash(lv,o.all)}
function refreshLocks(){return;licEl.querySelectorAll('[data-l]').forEach(b=>{const lv=b.dataset.l,ok=hasAccess(lv);b.querySelector('small').textContent=ok?'Accès activé ✓':'🔒 Code d\'accès requis';b.classList.toggle('open',ok)})}
function fillPay(root){root.querySelectorAll('[data-pay]').forEach(el=>{el.innerHTML='';el.appendChild(document.getElementById('payTpl').content.cloneNode(true));const wa=el.querySelector('[data-wa]');wa.href='https://wa.me/'+ACCESS.admin.wa+'?text='+encodeURIComponent('Bonjour, je souhaite un code d\'accès à « MON D.E INFAS ».');el.querySelector('[data-tel]').textContent=ACCESS.admin.tel.replace(/(\d\d)(?=\d)/g,'$1 ').trim()})}
const gate=document.getElementById('gate'),gIn=document.getElementById('gateIn'),gErr=document.getElementById('gateErr');let gLv=null,gDone=null;
function closeGate(){gate.hidden=true;gLv=gDone=null;document.body.style.overflow=''}
function requireAccess(lv,done){done();return;
gLv=lv;gDone=done;document.getElementById('gateT').textContent='Code d\'accès · Licence '+lv;document.getElementById('gateP').textContent='Saisissez le code fourni par l\'administrateur pour accéder à la Licence '+lv+'.';gIn.value='';gErr.textContent='';gate.hidden=false;gate.scrollTop=0;document.body.style.overflow='hidden';setTimeout(()=>gIn.focus(),50)}
function hasAnyAccess(){return ['1','2','3'].some(hasAccess)}
function requireCorrection(done,msg){if(hasAnyAccess()){done();return}
gLv='corr';gDone=done;document.getElementById('gateT').textContent='🔒 Code d\'accès requis';document.getElementById('gateP').textContent=msg||'Les corrections sont réservées aux abonnés (1 000 FCFA / mois). Contactez l\'administrateur sur WhatsApp pour obtenir votre code, puis saisissez-le ci-dessous.';gIn.value='';gErr.textContent='';gate.hidden=false;gate.scrollTop=0;document.body.style.overflow='hidden';setTimeout(()=>gIn.focus(),50)}
function submitGate(){const code=gIn.value.trim();if(!code){gErr.textContent='Saisissez votre code.';return}
if(gLv==='corr'){const ha=hashCode('all',code);let hit=(ACCESS.codes.all||[]).includes(ha)?['all',ha]:null;if(!hit)for(const l of ['1','2','3']){const h=hashCode(l,code);if((ACCESS.codes[l]||[]).includes(h)){hit=[l,h];break}}
if(hit){const o=store();o[hit[0]]=hit[1];saveStore(o);const d=gDone;closeGate();d()}else{gErr.textContent='Code incorrect. Vérifiez-le ou contactez l\'administrateur.';gIn.select()}return}
const h=hashCode(gLv,code),ha=hashCode('all',code),isAll=(ACCESS.codes.all||[]).includes(ha);if(isAll||(ACCESS.codes[gLv]||[]).includes(h)){const o=store();if(isAll)o.all=ha;else o[gLv]=h;saveStore(o);const d=gDone;closeGate();refreshLocks();d()}else{gErr.textContent='Code incorrect pour la Licence '+gLv+'. Vérifiez-le ou contactez l\'administrateur.';gIn.select()}}
document.getElementById('gateOk').onclick=submitGate;
gIn.onkeydown=e=>{if(e.key==='Enter'){e.preventDefault();submitGate()}};
document.getElementById('gateX').onclick=closeGate;
gate.onclick=e=>{if(e.target===gate)closeGate()};
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!gate.hidden)closeGate()});
fillPay(document);refreshLocks();

/* Numéro de l'administrateur sur l'accueil */
(function(){const a=document.getElementById('homeWa');a.href='https://wa.me/'+ACCESS.admin.wa+'?text='+encodeURIComponent('Bonjour, je souhaite des informations sur « MON D.E INFAS ».');a.querySelector('[data-tel]').textContent=ACCESS.admin.tel.replace(/(\d\d)(?=\d)/g,'$1 ').trim()})();
