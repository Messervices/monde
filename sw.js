/* Service worker : le site fonctionne hors connexion (exercices, cours, jeu). Les PDF restent chargés depuis Internet.
   Après une mise à jour du site, changer le numéro de version V pour forcer le rafraîchissement. */
const V='mon-de-infas-v104-v5';
const SHELL=['./','index.html','style.css','access.js','data.js','cours.js','de.js','jeu.js','docs.js','cours-pdf.js','sp.js','sante-publique.html','pd.js','pev.js','pev.html','mc.js','cc.js','cc-med-abg.js','cc-chir-abg.js','cc-sp-abg.js','cc-ped-abg.js','cc-abg2.js','cc-ped2-abg.js','cc-sp2-abg.js','cc-med-abo.js','cc-sp-abo.js','cc-chir-abo.js','cc-ped-abo.js','cc-liens.js','mes-cours.html','pe.js','dg.js','diagnostic-patient.html','diag-data.js','ec.js','etudes-de-cas.html','pediatrie-entrainement.html','ped-train.js','resume-pediatrie.html','cm.js','classification-medicaments.html','sch.js','schemas-illustrations.html','gl.js','glossaire-medical.html','pf.js','prefixes-suffixes.html','sf.js','sage-femme.html','script.js','logout.js','pwa.js','definitions.js','manifest.json','images/accueil.jpg','images/couverture-pediatrie.jpg','images/wave-qr.jpg','icon-192.png','icon-512.png'];
self.addEventListener('install',e=>{e.waitUntil(caches.open(V).then(c=>Promise.all(SHELL.map(f=>c.add(f).catch(()=>{})))).then(()=>self.skipWaiting()))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(k=>Promise.all(k.filter(x=>x!==V).map(x=>caches.delete(x)))).then(()=>self.clients.claim()))});
self.addEventListener('fetch',e=>{
  const r=e.request,u=new URL(r.url);
  if(r.method!=='GET'||u.origin!==location.origin||r.headers.has('range')||/\.pdf(\.pdf)?$/i.test(u.pathname))return;
  e.respondWith(caches.open(V).then(async c=>{
    const hit=await c.match(r);
    const net=fetch(r).then(res=>{if(res.ok)c.put(r,res.clone());return res}).catch(()=>hit||c.match('./'));
    return hit||net}))});
