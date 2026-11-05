/* DÉFINITIONS AU CLIC : tout mot ou expression du glossaire médical présent dans le site est souligné en pointillés ;
   un clic (ou un toucher) ouvre une petite bulle avec sa définition.
   Les définitions viennent de la liste DATA de glossaire-medical.html (pour ajouter un mot, l'ajouter là : rien d'autre à faire).
   Ce script est chargé dans l'accueil et dans chaque page du site (iframe). Le bouton « Définitions au clic » de l'accueil l'active ou le désactive. */
(function(){
if(window.__mtInit)return;window.__mtInit=1;
var W=window,doc=document,isTop=true;try{isTop=W.parent===W}catch(e){}
var css=doc.createElement('style');
css.textContent='.mt{border-bottom:1.5px dotted #0b9a8f;cursor:pointer;-webkit-tap-highlight-color:rgba(11,154,143,.25)}'
+'.nomt .mt{border-bottom:0;cursor:inherit}'
+'.mtip{position:fixed;z-index:99999;display:none;box-sizing:border-box;background:#fff;color:#1b2430;border:1px solid #0b9a8f;border-radius:12px;box-shadow:0 6px 24px rgba(0,0,0,.28);padding:10px 32px 11px 12px;font:14px/1.45 system-ui,-apple-system,Segoe UI,Roboto,sans-serif;text-align:left;font-weight:400}'
+'.mtip b{display:block;color:#0b7f76;font-size:15px}.mtip i{display:block;font-size:11px;color:#6b7785;font-style:normal;margin:1px 0 5px;text-transform:uppercase;letter-spacing:.04em}'
+'.mtip p{margin:0}.mtx{position:absolute;top:3px;right:5px;border:0;background:none;font-size:22px;line-height:1;color:#6b7785;cursor:pointer;padding:2px 7px}'
+'@media(prefers-color-scheme:dark){.mtip{background:#1f2937;color:#e8eef5;border-color:#4fd1c5}.mtip b{color:#4fd1c5}.mtip i,.mtx{color:#9aa7b6}}';
(doc.head||doc.documentElement).appendChild(css);
try{if(!isTop&&W.parent.__mtOn===false)doc.documentElement.classList.add('nomt')}catch(e){}

function nz(s){return s.toLowerCase().replace(/œ/g,'oe').replace(/æ/g,'ae').normalize('NFD').replace(/[\u0300-\u036f]/g,'')}
function esc(s){return String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;')}
function parse(h){try{var m=/const DATA=(\[[\s\S]*?\]);\s*\n/.exec(h);var g=m?JSON.parse(m[1]):null;if(g)W.__GL=g;return g}catch(e){return null}}
function getGL(cb,n){
  var g=null;try{g=W.__GL||W.parent.__GL}catch(e){}
  if(g)return cb(g);
  if(isTop){
    if(W.GL_HTML){g=parse(W.GL_HTML);if(g)cb(g);return}
    if(W.fetch)fetch('glossaire-medical.html').then(function(r){return r.text()}).then(function(t){var g=parse(t);if(g)cb(g)}).catch(function(){});
    return}
  if(n>0)setTimeout(function(){getGL(cb,n-1)},400);
}

function start(GL){
  var M=Object.create(null),E=[],MAXN=1;
  function add(term,cat,def){
    var toks=nz(term).match(/[a-z0-9]+/g);if(!toks)return;
    var key=toks.join(' ');if(key.replace(/ /g,'').length<3||M[key])return;
    var caps=term===term.toUpperCase()&&/[A-Z]/.test(term);
    M[key]={i:E.length,t:term,c:cat,d:def,caps:caps};E.push(M[key]);
    if(toks.length>MAXN)MAXN=toks.length;
  }
  GL.forEach(function(r){
    add(r[0],r[1],r[2]);
    var p=r[0].replace(/\s*\([^)]*\)/g,'');if(p!==r[0])add(p,r[1],r[2]);
    if(r[0].indexOf('/')>-1)r[0].split(/\s*\/\s*/).forEach(function(x){add(x,r[1],r[2])});
  });
  var TOK=/[A-Za-z0-9\u00C0-\u024F]+/g,GAP=/^[\s'’\-\u00a0]+$/;
  function scan(text){
    var toks=[],m;TOK.lastIndex=0;
    while((m=TOK.exec(text)))toks.push({s:m.index,e:m.index+m[0].length,k:nz(m[0])});
    var out=[],i=0;
    while(i<toks.length){
      var hit=null,hn=1;
      for(var n=Math.min(MAXN,toks.length-i);n>=1&&!hit;n--){
        var ok=true;for(var j=i+1;j<i+n;j++){if(!GAP.test(text.slice(toks[j-1].e,toks[j].s))){ok=false;break}}
        if(!ok)continue;
        var ks=[];for(j=i;j<i+n;j++)ks.push(toks[j].k);
        var en=M[ks.join(' ')];
        if(!en){var l=ks[n-1];if(l.length>3&&/[sx]$/.test(l)){ks[n-1]=l.slice(0,-1);en=M[ks.join(' ')]}}
        if(en){var src=text.slice(toks[i].s,toks[i+n-1].e);
          if(en.caps&&src!==en.t&&src!==en.t+'s')en=null}
        if(en){hit=en;hn=n}
      }
      if(hit){out.push([toks[i].s,toks[i+hn-1].e,hit.i]);i+=hn}else i++;
    }
    return out;
  }
  var SKIP={SCRIPT:1,STYLE:1,TEXTAREA:1,INPUT:1,SELECT:1,OPTION:1,BUTTON:1,NOSCRIPT:1,svg:1,SVG:1,IFRAME:1,H1:1,HEADER:1,NAV:1};
  var SKC=['mt','mtip','hbtn','back','banner','gate','gatebox'];
  function skipped(el){
    for(;el&&el!==doc.body&&el.nodeType===1;el=el.parentNode){
      if(SKIP[el.tagName]||el.id==='toast'||el.id==='logoutBtn'||el.hasAttribute('data-nomt'))return true;
      for(var k=0;k<SKC.length;k++)if(el.classList.contains(SKC[k]))return true;
    }
    return false;
  }
  function wrap(node){
    var t=node.nodeValue;if(t.length<3||!/[A-Za-zÀ-ÿ]/.test(t)||!node.parentNode||skipped(node.parentNode))return;
    var hits=scan(t);if(!hits.length)return;
    var f=doc.createDocumentFragment(),p=0;
    hits.forEach(function(h){
      if(h[0]>p)f.appendChild(doc.createTextNode(t.slice(p,h[0])));
      var s=doc.createElement('span');s.className='mt';s.onclick=function(){};s.setAttribute('data-i',h[2]);s.textContent=t.slice(h[0],h[1]);f.appendChild(s);p=h[1];
    });
    if(p<t.length)f.appendChild(doc.createTextNode(t.slice(p)));
    node.parentNode.replaceChild(f,node);
  }
  function texts(root,acc){
    if(root.nodeType===3){acc.push(root);return}
    if(root.nodeType!==1||skipped(root))return;
    var w=doc.createTreeWalker(root,4,null,false),n;while((n=w.nextNode()))acc.push(n);
  }
  var queue=[],timer=0,obs=null;
  function observe(){if(obs&&doc.body)obs.observe(doc.body,{childList:true,subtree:true})}
  function run(){
    timer=0;if(obs)obs.disconnect();
    var acc=[];queue.splice(0).forEach(function(n){if(n.isConnected!==false)texts(n,acc)});
    (function step(){
      if(obs)obs.disconnect();
      var c=acc.splice(0,400);c.forEach(function(n){if(n.parentNode)wrap(n)});
      if(acc.length)setTimeout(step,15);else observe();
    })();
  }
  function sched(){if(!timer)timer=setTimeout(run,120)}
  obs=new MutationObserver(function(ms){
    ms.forEach(function(m){for(var i=0;i<m.addedNodes.length;i++){var n=m.addedNodes[i];if(n.nodeType===3||n.nodeType===1)queue.push(n)}});
    if(queue.length)sched();
  });
  queue.push(doc.body);run();

  var tip=doc.createElement('div');tip.className='mtip';tip.setAttribute('role','tooltip');doc.body.appendChild(tip);
  var shownAt=0;function hide(){tip.style.display='none'}
  function soft(){if(Date.now()-shownAt>600)hide()}
  function show(sp){
    var en=E[+sp.getAttribute('data-i')];if(!en)return;
    tip.innerHTML='<button class="mtx" type="button" aria-label="Fermer">×</button><b>'+esc(en.t)+'</b><i>'+esc(en.c)+'</i><p>'+esc(en.d)+'</p>';
    var vw=doc.documentElement.clientWidth,vh=W.innerHeight,w=Math.min(320,vw-16),r=sp.getBoundingClientRect();
    tip.style.width=w+'px';tip.style.display='block';tip.style.left=Math.max(8,Math.min(r.left,vw-w-8))+'px';
    var h=tip.offsetHeight,top=r.bottom+8;
    if(top+h>vh-8)top=(r.top-h-8>8)?r.top-h-8:Math.max(8,vh-h-8);
    tip.style.top=top+'px';shownAt=Date.now();
  }
  doc.addEventListener('click',function(e){
    var el=e.target,t=el&&el.closest?el.closest('.mt'):null;
    if(el&&el.closest&&el.closest('.mtx')){hide();return}
    if(t&&!doc.documentElement.classList.contains('nomt')){e.preventDefault();e.stopPropagation();show(t);return}
    if(!(el&&el.closest&&el.closest('.mtip')))hide();
  },true);
  doc.addEventListener('keydown',function(e){if(e.key==='Escape')hide()});
  W.addEventListener('scroll',soft,true);W.addEventListener('resize',soft);
}
getGL(start,12);

if(isTop){
  var btn=doc.getElementById('mtBtn'),on=true;
  if(btn){try{on=localStorage.getItem('infas_def')!=='0'}catch(e){}}
  W.__mtOn=on;
  var apply=function(){
    W.__mtOn=on;doc.documentElement.classList.toggle('nomt',!on);
    var fs=doc.querySelectorAll('iframe');for(var i=0;i<fs.length;i++){try{fs[i].contentDocument.documentElement.classList.toggle('nomt',!on)}catch(e){}}
    if(btn)btn.textContent='💡 Définitions au clic : '+(on?'activées':'désactivées');
    try{localStorage.setItem('infas_def',on?'1':'0')}catch(e){}
  };
  if(btn)btn.onclick=function(){on=!on;apply()};
  apply();
}
})();
