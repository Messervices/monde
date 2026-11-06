/* Corrections : INFAS Abengourou · Chirurgie · DE blanc 2025-2026 (Version D). */
(function(){
const CORR={
 "INFAS Abengourou — Chirurgie DE blanc 2025-2026 (Version D) · QCD": {
  "0": "Vrai. L’appendice se situe normalement en fosse iliaque droite. En cas de situs inversus (inversion congénitale des organes), il se retrouve à gauche. Réf : votre cours d’anatomie digestive.",
  "1": "Vrai. La brûlure augmente la perméabilité capillaire : le plasma fuit vers le milieu interstitiel et forme des œdèmes. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "2": "Vrai. L’anthrax peut se compliquer localement d’une adénite aiguë purulente ou d’un adéno-phlegmon. Réf : <a href='mes-cours.html#c-anthrax' target='_blank'>Mes cours · Anthrax</a>.",
  "3": "Vrai. Les gaz produits par les germes anaérobies donnent une crépitation sous-cutanée « neigeuse » à la palpation. Réf : <a href='mes-cours.html#c-gangrene' target='_blank'>Mes cours · Gangrène</a>.",
  "4": "Vrai. Le plâtre cuisso-pédieux immobilise le genou (sus-jacent) et la cheville (sous-jacente). Réf : <a href='mes-cours.html#c-fract' target='_blank'>Mes cours · Fractures</a>.",
  "5": "Vrai. L’embarrure est l’enfoncement d’un fragment osseux du crâne : le traitement chirurgical passe par une trépanation pour relever le fragment. Réf : <a href='mes-cours.html#c-fract' target='_blank'>Mes cours · Fractures</a>.",
  "6": "Faux. Le mécanisme classique (notamment du scaphoïde) est une chute sur la paume en hyperextension et inclinaison radiale (abduction), non en adduction. Réf : <a href='mes-cours.html#c-fract' target='_blank'>Mes cours · Fractures</a>.",
  "7": "Faux. Le premier geste est de découvrir la plaie, puis de la nettoyer (eau et savon, sérum physiologique) avant de la désinfecter. Réf : <a href='mes-cours.html#c-plaies' target='_blank'>Mes cours · Plaies</a>.",
  "8": "Vrai. C’est la définition de l’anthrax staphylococcique : réunion de plusieurs furoncles voisins à centre nécrotique. Réf : <a href='mes-cours.html#c-anthrax' target='_blank'>Mes cours · Anthrax</a>.",
  "9": "Faux. La gravité dépend aussi de la profondeur, de la localisation (visage, mains, périnée), de l’âge et des tares associées. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "10": "Faux. Chez un patient stable, le scanner abdominal injecté est l’examen de référence pour le bilan des lésions d’organes pleins. Réf : votre cours de traumatologie abdominale ; <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "11": "Faux. Un traumatisé du thorax peut être en état de choc sans douleur intense, ou avoir des lésions internes occultes. Réf : votre cours de traumatologie thoracique.",
  "12": "Vrai. L’hémothorax est la présence de sang dans la cavité pleurale. Réf : votre cours de traumatologie thoracique.",
  "13": "Faux. Le volet thoracique entraîne une respiration paradoxale qui aggrave la mécanique respiratoire. Réf : votre cours de traumatologie thoracique.",
  "14": "Vrai. La dyspnée signe une détresse respiratoire potentiellement vitale : évaluation médicale urgente. Réf : votre cours de traumatologie thoracique.",
  "15": "Faux. La matité se recherche à la percussion (épanchement, hémothorax). À l’auscultation, on note plutôt une diminution du murmure vésiculaire. Réf : votre cours de sémiologie thoracique.",
  "16": "Faux. Le pied bot varus équin est plus fréquent chez le garçon (environ 2 garçons pour 1 fille), mais il peut aussi atteindre les filles. Réf : <a href='mes-cours.html#c-pieds' target='_blank'>Mes cours · Pieds</a>.",
  "17": "Vrai. Le pied talus est fixé en hyperflexion dorsale et s’oriente en dehors (valgus). Réf : <a href='mes-cours.html#c-pieds' target='_blank'>Mes cours · Pieds</a>.",
  "18": "Faux. Beaucoup de fractures du crâne sont linéaires, sans enfoncement osseux (donc sans embarrure). Réf : <a href='mes-cours.html#c-fract' target='_blank'>Mes cours · Fractures</a>.",
  "19": "Faux. Ce sont les uretères (au nombre de 2) qui conduisent l’urine des reins à la vessie. L’urètre évacue l’urine de la vessie vers l’extérieur. Réf : votre cours d’anatomie urinaire."
 },
 "INFAS Abengourou — Chirurgie DE blanc 2025-2026 (Version D) · QCM": {
  "0": "Stades de la brûlure : 1er degré = épiderme ; 2e degré = épiderme et une partie du derme ; 3e degré = toute l’épaisseur jusqu’à l’hypoderme. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "1": "Les phlyctènes (cloques) sont la signature clinique de la brûlure du 2e degré. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "2": "L’étendue de la surface brûlée (règle de Wallace ou table de Lund et Browder) détermine la gravité et le risque de choc hypovolémique. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "3": "Le 2e degré superficiel cicatrise spontanément en 10 à 21 jours, sans séquelle majeure. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "4": "L’enfant est très exposé à la déshydratation et au choc hypovolémique : une prise en charge médicale rapide est indispensable. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "5": "La perte de la barrière cutanée expose aux infections bactériennes. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "6": "Le toit de la phlyctène est un pansement naturel stérile qui protège le derme : on ne le perce pas et on ne l’arrache pas. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>. (La proposition E va dans le même sens ; la réponse retenue est C.)",
  "7": "Le 2e degré profond cicatrise mal et peut imposer une greffe cutanée. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "8": "Règle des 15 : eau tempérée (15 à 20 °C) pendant 15 minutes, à 15 cm, pour stopper la diffusion de la chaleur. La glace et le beurre sont à proscrire. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>.",
  "9": "La douleur est vive, parfois très intense, car les terminaisons nerveuses sont irritées. Elle est absente seulement au 3e degré. Réf : <a href='mes-cours.html#c-brul' target='_blank'>Mes cours · Brûlures</a>."
 },
 "INFAS Abengourou — Chirurgie DE blanc 2025-2026 (Version D) · Cas cliniques": {
  "0": "Une contusion est un traumatisme fermé, sans solution de continuité (pas de plaie). Réf : <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "1": "Choc hémorragique (TA basse, soif, sueurs froides) + bombement du cul-de-sac de Douglas = hémopéritoine (sang libre dans le péritoine). Réf : <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "2": "Soif intense et sueurs froides profuses traduisent le choc hémorragique. La douleur et le bombement du Douglas sont des signes abdominaux. Réf : <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "3": "Foie et rate sont les viscères pleins les plus exposés. Duodénum, jéjunum, iléon et estomac sont des viscères creux. Réf : <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "4": "Le sang s’accumule par gravité dans le cul-de-sac de Douglas, perçu comme un bombement douloureux au toucher rectal. Réf : <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "5": "La défense localisée et les points douloureux exquis se recherchent à la palpation. La matité et le tympanisme relèvent de la percussion. Réf : <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "6": "Avant une intervention d’urgence sur choc hémorragique : bilan de l’hémostase (TP, TCA, fibrinogène) et ionogramme sanguin. Réf : <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "7": "Les deux buts sont de compenser la perte sanguine (réanimation) et de réaliser l’hémostase de la région atteinte (chirurgie). La voie veineuse et la sonde urinaire sont des moyens. Réf : <a href='mes-cours.html#c-contus' target='_blank'>Mes cours · Contusions</a>.",
  "8": "Une impossibilité brutale et totale d’uriner définit la rétention aiguë d’urine. Réf : votre cours d’urologie (rétention urinaire).",
  "9": "Le globe vésical est le signe physique : masse sus-pubienne convexe, mate à la percussion et douloureuse. Réf : votre cours d’urologie (rétention urinaire).",
  "10": "L’impossibilité d’uriner est le signe fonctionnel. La douleur à la palpation et le globe vésical sont des signes physiques. Réf : votre cours d’urologie.",
  "11": "Évacuer les urines par sondage urétral soulage immédiatement : c’est le geste d’urgence. Réf : votre cours d’urologie (sondage vésical).",
  "12": "L’infection urinaire aiguë est une contre-indication au sondage (risque de bactériémie ou de prostatite) et l’incontinence simple n’est pas une indication. Réf : votre cours d’urologie (sondage vésical).",
  "13": "Une hygiène rigoureuse du méat et du périnée prévient l’introduction de germes lors du sondage. Réf : votre cours d’urologie (sondage vésical)."
 }
};
DE._t.CATS.forEach(c=>c.s.forEach(s=>{const m=CORR[s.t];if(!m)return;Object.keys(m).forEach(i=>{const q=s.qs[+i];if(q)q.e=m[i]})}));
})();
