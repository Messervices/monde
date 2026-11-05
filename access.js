/* Codes d'accès par licence + coordonnées de l'administrateur.
   Les codes de la liste « all » ouvrent toutes les licences (1, 2 et 3) et les cours.
   Seules les empreintes (SHA-256) des codes sont stockées ici, jamais les codes eux-mêmes.
   Pour ajouter / retirer un abonné : ajouter / supprimer une empreinte dans la liste du niveau.
   Les empreintes se génèrent avec generer-code.html. */
const ACCESS={
  admin:{tel:"0759718750",wa:"2250759718750"},
  prix:{mois:"1 000 FCFA",an:"5 000 FCFA"},
  codes:{
    1:["dccf982009e9f40de34762cd6db6294d6d5f7e5677d4a594b701e29cc0197b35"],
    2:["84d73001af818a530bd169f566e4e7313083f32f5f43ca11d7ccaf39df22ddf9"],
    3:["8528b92ed88e5f40c96f48b5d925d63c80c61d2edd766a215f9317c1e5eba910"],
    all:["e687e96da9ac87cfaa27ac76bb987cb3f6660d047983b9014e3c7c93d0427164","d526b986c14de5e600cff9615069c1e50fe82f1a6bba5e9fc98ff18f2dac6e5f","d167354f0f3fbf9230726aa970ce84823dccb0373c118a891d4a332fa32920f6","0c76a989e59e1005bbdb7e843852a55aa23e855ee961514b5f0ac822717ee0d6","a5405dbae4ae6a985eb75e1890e5dbfc18e8cc7d584300c92423ce51afebb3a3","cad1ca5de308269a9776c744863a2c4ebf6e30a1b9d781aafe81d1d6384343fb","da9a15a2bc36f0501992141f7823c66a66c29eb78b9d4e50c79ddbe297d9cca5","aea4f143e3f07afe6cd7fa6420914e1d99dc99bdb129c6aa3b8821101de74a37","108fdf5a4bd3e113b24a44bfc70e521a3e959b34d3e1868ac829134385244c80"]
  }
};
/* SHA-256 en JavaScript pur (fonctionne aussi hors HTTPS) */
function sha256(s){
  const K=[0x428a2f98,0x71374491,0xb5c0fbcf,0xe9b5dba5,0x3956c25b,0x59f111f1,0x923f82a4,0xab1c5ed5,0xd807aa98,0x12835b01,0x243185be,0x550c7dc3,0x72be5d74,0x80deb1fe,0x9bdc06a7,0xc19bf174,0xe49b69c1,0xefbe4786,0x0fc19dc6,0x240ca1cc,0x2de92c6f,0x4a7484aa,0x5cb0a9dc,0x76f988da,0x983e5152,0xa831c66d,0xb00327c8,0xbf597fc7,0xc6e00bf3,0xd5a79147,0x06ca6351,0x14292967,0x27b70a85,0x2e1b2138,0x4d2c6dfc,0x53380d13,0x650a7354,0x766a0abb,0x81c2c92e,0x92722c85,0xa2bfe8a1,0xa81a664b,0xc24b8b70,0xc76c51a3,0xd192e819,0xd6990624,0xf40e3585,0x106aa070,0x19a4c116,0x1e376c08,0x2748774c,0x34b0bcb5,0x391c0cb3,0x4ed8aa4a,0x5b9cca4f,0x682e6ff3,0x748f82ee,0x78a5636f,0x84c87814,0x8cc70208,0x90befffa,0xa4506ceb,0xbef9a3f7,0xc67178f2];
  const b=unescape(encodeURIComponent(s)),l=b.length,w=new Array((((l+8)>>6)+1)*16).fill(0);
  for(let i=0;i<l;i++)w[i>>2]|=b.charCodeAt(i)<<(24-(i%4)*8);
  w[l>>2]|=0x80<<(24-(l%4)*8);w[(((l+8)>>6)+1)*16-1]=l*8;
  let h=[0x6a09e667,0xbb67ae85,0x3c6ef372,0xa54ff53a,0x510e527f,0x9b05688c,0x1f83d9ab,0x5be0cd19];
  const R=(x,n)=>(x>>>n)|(x<<(32-n));
  for(let o=0;o<w.length;o+=16){
    const x=w.slice(o,o+16);
    for(let i=16;i<64;i++){const a=x[i-15],c=x[i-2];x[i]=(x[i-16]+(R(a,7)^R(a,18)^(a>>>3))+x[i-7]+(R(c,17)^R(c,19)^(c>>>10)))|0}
    let [a,c,d,e,f,g,j,k]=h;
    for(let i=0;i<64;i++){
      const t1=(k+(R(f,6)^R(f,11)^R(f,25))+((f&g)^(~f&j))+K[i]+x[i])|0;
      const t2=((R(a,2)^R(a,13)^R(a,22))+((a&c)^(a&d)^(c&d)))|0;
      k=j;j=g;g=f;f=(e+t1)|0;e=d;d=c;c=a;a=(t1+t2)|0;
    }
    h=[h[0]+a|0,h[1]+c|0,h[2]+d|0,h[3]+e|0,h[4]+f|0,h[5]+g|0,h[6]+j|0,h[7]+k|0];
  }
  return h.map(v=>(v>>>0).toString(16).padStart(8,"0")).join("");
}
/* Empreinte d'un code saisi pour un niveau donné (casse, espaces et tirets ignorés) */
function hashCode(level,code){return sha256("INFAS2026|"+level+"|"+String(code).toUpperCase().replace(/[^A-Z0-9]/g,""))}
