/* Corrections : INFAS Abengourou · Santé publique · D.E blanc septembre 2026 (Version D) : questions en attente. */
(function(){
const CORR={
 "INFAS Abengourou — Santé publique · D.E blanc septembre 2026 (Version D)": {
  "18": {
   "a": [
    2
   ],
   "e": "Utilisation des services (CSC) = pop cible ayant consulté au moins une fois / pop cible du monitorage × 100 (formule n°74). Pop cible du monitorage = 8 000 / 2 = 4 000 (semestre). 2 400 consultants distincts / 4 000 × 100 = 60 %. Réf : <a href='sante-publique.html#f74' target='_blank'>formule n°74 (US)</a>."
  },
  "19": {
   "a": [
    0
   ],
   "e": "Couverture adéquate (CSC) = consultants ayant reçu un traitement et payé le prix correct / pop cible × 100 (formule n°75). 1 800 / 4 000 × 100 = 45 %. Ne pas confondre avec la couverture effective (1 500 / 4 000 = 37,5 %, formule n°76) : les 1 500 ont en plus reçu un traitement conforme. Réf : <a href='sante-publique.html#f75' target='_blank'>formule n°75 (CA)</a> ; <a href='sante-publique.html#f76' target='_blank'>formule n°76 (CE)</a>."
  },
  "21": {
   "a": [
    2
   ],
   "e": "Fonds de réserve (FR) = SB − recettes des six mois couverts par le monitorage (formule n°49). SB = 1 000 000 F CFA ; recettes du semestre déjà déposées = 600 000 F CFA. 1 000 000 − 600 000 = 400 000 F CFA. Le texte précise que la SAB et le FR ne désignent pas la même masse d’argent. Réf : <a href='sante-publique.html#f49' target='_blank'>formule n°49 (FR)</a> ; <a href='sante-publique.html#f50' target='_blank'>formule n°50 (SAB)</a>."
  }
 }
};
DE._t.CATS.forEach(c=>c.s.forEach(s=>{const m=CORR[s.t];if(!m)return;Object.keys(m).forEach(i=>{const q=s.qs[+i];if(q){q.a=m[i].a;q.e=m[i].e}})}));
})();
