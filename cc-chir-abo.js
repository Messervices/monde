/* Corrections détaillées : ABOISSO · Chirurgie · D.E blanc 2026 (Version A), Q1 à Q60 (QCD, QCM, cas clinique M. KOLA).
   Chaque correction donne la réponse, la raison, puis des SOURCES CLIQUABLES :
   - « Cours · … » : ouvre le cours du site (« ← Accueil » ramène à la question) ;
   - « Mes cours · … » : ouvre la page Mes cours à la bonne section (nouvel onglet) ;
   - « Corrigé Aboisso 2025 … » : corrigé d’une question identique ou voisine, déjà dans l’application (EXAMEN SUJET D.E).
   Ordre de référence : cours du site, puis corrigés 2025 des antennes. Quand ni l’un ni l’autre ne tranche, la réponse est établie par raisonnement propre, et l’explication le dit (« Raisonnement propre »). Les points marqués ⚠ restent à confronter avec le corrigé officiel. */
(function(){
const C=(k,t)=>"<a href='#' class='lc' data-co='"+k+"'>Cours · "+t+"</a>";
const M=(id,t)=>"<a href='mes-cours.html#"+id+"' target='_blank' rel='noopener'>Mes cours · "+t+"</a>";
const ABO=(t)=>"Corrigé Aboisso 2025 ("+t+")";
const CORR={
"ABOISSO — Chirurgie · D.E blanc 2026 (Version A) · QCD":{
"0":{a:[1],e:"Faux. Le traumatisme crânien est grave quand le score de Glasgow est inférieur à 9 (≤ 8), après correction des fonctions vitales. "+M('c-contus','Contusions (traumatisme crânien)')+"."},
"1":{a:[0],e:"Vrai. Un déficit moteur est un critère d’appel au réanimateur, même dans un traumatisme crânien modéré. "+C('loc','Appareil locomoteur et traumatismes')+"."},
"2":{a:[1],e:"Faux. Dans l’ostéosynthèse à foyer fermé (enclouage, fixateur externe), le matériel est placé à distance du foyer. Les plaques relèvent de l’ostéosynthèse à foyer ouvert. "+M('c-fract','Généralités sur les fractures')+"."},
"3":{a:[0],e:"Vrai. La prostate est une glande génitale masculine, située sous la vessie et autour de l’origine de l’urètre."},
"4":{a:[1],e:"Faux. Le cours range le craquement parmi les signes fonctionnels de la fracture (avec la douleur et l’impotence), et non parmi les signes physiques. "+C('s1g','Fractures : signes fonctionnels et physiques')+"."},
"5":{a:[0],e:"Vrai. Le signe de la sonnette est la douleur déclenchée à la palpation des massifs articulaires postérieurs. "+ABO("Chirurgie 2025, blanc N°2 (Version A), QCM Q22 : signe de la sonnette")+"."},
"6":{a:[1],e:"Faux. La commotion cérébrale est un trouble fonctionnel passager, sans lésion visible. L’épanchement sanguin intracrânien est un hématome. "+M('c-contus','Contusions (hématome, commotion)')+"."},
"7":{a:[0],e:"Vrai. La hanche assure à la fois la statique (appui) et la dynamique (mouvement). "+C('loc','Articulation de la hanche')+"."},
"8":{a:[0],e:"Vrai. L’irrigation vésicale évite la formation de caillots et prévient les infections et les rétentions urinaires."},
"9":{a:[1],e:"Faux. La neurochirurgie traite l’ensemble du système nerveux (cerveau, moelle, nerfs), et pas seulement les fractures du crâne."},
"10":{a:[0],e:"Vrai. Le pancréas est une glande amphicrine : sécrétion exocrine (suc pancréatique) et endocrine (insuline, glucagon)."},
"11":{a:[0],e:"Vrai. Les gaz produits par les germes anaérobies donnent une crépitation sous-cutanée « neigeuse ». "+M('c-gangrene','Gangrène gazeuse')+"."},
"12":{a:[1],e:"Faux. Le syndrome de Volkmann est une ischémie du membre supérieur liée à la fracture, à l’œdème ou à un plâtre trop serré, et non uniquement à la surveillance infirmière. "+ABO("Chirurgie 2025, Version C, QCD Q18 : Volkmann siège sur le membre supérieur")+"."},
"13":{a:[0],e:"Vrai. L’intervalle libre est bref dans l’hématome extradural et long dans l’hématome sous-dural. "+M('c-contus','Hématomes intracrâniens')+"."},
"14":{a:[1],e:"Faux. La respiration paradoxale ne s’observe pas uniquement dans le volet costal. "+M('c-contus','Volet costal et traumatismes thoraciques')+"."},
"15":{a:[1],e:"Faux. Dans la subluxation, le contact entre les surfaces articulaires est partiellement conservé. La perte de contact complète est la luxation. "+M('c-lux','Luxations et subluxations')+"."},
"16":{a:[1],e:"Faux. La néphrectomie est l’ablation chirurgicale du rein, et non un examen radiologique."},
"17":{a:[1],e:"Faux. Le myosis (pupille serrée) et la mydriase (pupille dilatée) sont des effets opposés du système neurovégétatif sur l’œil."},
"18":{a:[1],e:"Faux. Chez le nourrisson, la hanche luxée se recherche avec le signe de Galeazzi : les genoux ne sont pas au même niveau. "+M('c-lux','Luxation de hanche chez le nourrisson')+"."},
"19":{a:[0],e:"Vrai. Température, pouls et tension artérielle font partie de la surveillance de la phlébothrombose."}
},
"ABOISSO — Chirurgie · D.E blanc 2026 (Version A) · QCM":{
"0":{a:[0,3],e:"Réponses : A (audition) et D (déglutition). Ces deux éléments relèvent de la surveillance neurologique. La chaleur et la cyanose sont des signes cutanés, la pression artérielle est hémodynamique."},
"1":{a:[2],e:"Réponse : C. La pression artérielle relève de la surveillance hémodynamique."},
"2":{a:[0,3],e:"Réponses : A (durée du plâtre) et D (ablation du plâtre). Ce ne sont pas des éléments de surveillance. On surveille la douleur, les extrémités (cyanose, froideur) et la sensibilité (dysesthésie). "+M('c-lux','Plâtre et surveillance')+"."},
"3":{a:[1],e:"Réponse : B. Le centre respiratoire principal est situé dans le bulbe rachidien."},
"4":{a:[2],e:"Réponse : C. La fracture de Pouteau-Colles est une fracture de l’épiphyse inférieure du radius. "+ABO("Chirurgie 2025, Version C, QCD Q28 : Pouteau-Colles, extrémité inférieure du radius")+"."},
"5":{a:[0],e:"Réponse : A. La forme comminutive est une fragmentation multiple de l’os. "+M('c-fract','Déplacements des fragments')+"."},
"6":{a:[0,2,5],e:"Réponses : A (coloration des téguments), C (pouls) et F (faciès). Ces trois signes recherchent un choc hémodynamique. La déglutition et la conscience sont neurologiques, la douleur n’est pas un signe de choc."},
"7":{a:[1,3,5],e:"Réponses : B (conscience), D (déglutition) et F (audition). Ce sont les trois éléments de la surveillance neurologique, comme à la question 21. Correction par rapport à la première saisie : « faciès » (C) relève de la surveillance hémodynamique (question 27)."},
"8":{a:[1],e:"Réponse : B. La perte totale de la sensibilité est l’anesthésie."},
"9":{a:[1],e:"Aucune proposition n’est correcte. Raisonnement propre : l’occlusion d’origine fonctionnelle est l’iléus paralytique (cours : étiologies de l’occlusion), absent des propositions. L’invagination et les tumeurs sont des causes mécaniques. B est conservée par défaut dans la correction ; l’item est à signaler au formateur. <a href='mes-cours.html' target='_blank' rel='noopener'>Mes cours · Occlusion intestinale</a>."},
"10":{a:[1],e:"Réponse : B. Chez l’opéré de péritonite, l’infirmier restaure les pertes hydriques et caloriques par voie veineuse. Les antiémétiques et la prémédication relèvent de la prescription médicale.. "},
"11":{a:[2],e:"Réponse : C. Une tuméfaction indolente du scrotum avec transillumination positive (lampe torche) évoque une hydrocèle vaginale. "+ABO("Chirurgie 2025, Version C, QCD Q39 : hydrocèle")+"."},
"12":{a:[1],e:"Réponse : B. Le gargouillement perçu à la réduction d’une hernie évoque un encastrement d’intestin.. "},
"13":{a:[0,2],e:"Réponses : A (grossesse extra-utérine) et C (torsion testiculaire). Ce sont deux diagnostics différentiels de la crise appendiculaire retenus dans la correction."},
"14":{a:[1,4],e:"Réponses : B (douleur) et E (conscience). Ces deux éléments ne recherchent pas un choc hémodynamique. La coloration, le faciès, la pression artérielle et le pouls le recherchent."},
"15":{a:[0,3,4],e:"Réponses : A (mouvement respiratoire), D (rythme cardiaque) et E (diurèse horaire). Ce sont les éléments de l’état végétatif. La réponse verbale, le mouvement orienté et la douleur relèvent de la vie de relation."}
},
"ABOISSO — Chirurgie · D.E blanc 2026 (Version A) · Cas clinique : M. KOLA polytraumatisé":{
"0":{a:[2,3],e:"Réponses : C (pubis) et D (crête iliaque). À la palpation douce du bassin, on recherche les points douloureux du pubis et des crêtes iliaques. "+C('loc','Bassin et fractures')+"."},
"1":{a:[1,3],e:"Réponses : B (ramassage en bloc rigide) et D (transport sur plan dur, en décubitus dorsal ou latéral). Ce sont les gestes à observer pour ne pas aggraver le pronostic vital. "+C('loc','Prise en charge d’un traumatisme')+"."},
"2":{a:[0,4],e:"Réponses : A (précipitation) et E (empoigne sous les aisselles). Ce sont les gestes à proscrire sur les lieux de l’accident."},
"3":{a:[1],e:"Réponse : B. Le choc hypovolémique (hémorragique) est une variété du choc traumatique."},
"4":{a:[0],e:"Réponse : A. L’état de choc est une incapacité de l’appareil circulatoire à assurer le flux sanguin et l’apport d’oxygène aux tissus."},
"5":{a:[2,4],e:"Réponses : C (fréquence cardiaque) et E (état de conscience). Ce sont les premiers signes d’une insuffisance circulatoire."},
"6":{a:[1,2,4],e:"Réponses : B (protéger ses téguments, être propre), C (respirer) et E (éviter les dangers). Selon Henderson, respirer est le premier besoin, l’hygiène et la protection des téguments et la sécurité figurent parmi les besoins fondamentaux à satisfaire en priorité chez un patient comateux. "+C('th','Théorie de Henderson : les 14 besoins')+"."},
"7":{a:[2],e:"Réponse : C. Le diagnostic infirmier associe un problème (impossibilité) et sa cause (altération du système locomoteur, reliée au polytraumatisme)."},
"8":{a:[0],e:"Réponse : A (750 ml). Quantité de culot globulaire = poids × (Hb désirée − Hb actuelle) × 3 = 50 × (10 − 5) × 3 = 750 ml. Le poids de 50 kg figure dans l’énoncé du sujet officiel (M. KOLA, 42 ans, 50 kg)."},
"9":{a:[2],e:"Réponse : C (41,66 gouttes/min). En transfusion, 15 gouttes = 1 ml. Débit = (750 × 15) / (4,5 × 60) = 41,66 gouttes/min. "+ABO("Chirurgie 2025, Version C, QCM Q14 : 15 gouttes = 1 ml")+"."},
"10":{a:[1,4],e:"Réponses : B (spontanée, 4) et E (à la douleur, 2). Ce sont les deux réponses d’ouverture des yeux du score de Glasgow."},
"11":{a:[2],e:"Réponse : C. Le traumatisme crânien est grave quand le Glasgow est inférieur à 9 (≤ 8). "+M('c-contus','Traumatisme crânien')+"."},
"12":{a:[1],e:"Réponse : B (ne pas faire d’examen ni de surveillance neurologique). Raisonnement propre, hors cours : un traumatisme crânien léger (Glasgow 15, sans perte de connaissance, sans amnésie, sans signe neurologique, sans facteur de risque) ne justifie ni scanner ni surveillance neurologique prolongée, selon les règles de décision usuelles (Canadian CT Head Rule, NICE). L’option C (scanner à la 6e heure) n’est pas recommandée, et l’option A ne l’est que s’il existe un signe d’alerte."},
"13":{a:[2],e:"Réponse : C (stade III). Ouverture des yeux à la douleur (2) + mots inappropriés (3) + flexion anormale (3) = Glasgow 8, coma stade III."},
"14":{a:[0,1,5],e:"Réponses : A (hémorragie intracrânienne, absence d’intervalle libre), B (hémorragie sous-durale, long intervalle libre) et F (hémorragie épidurale, bref intervalle libre). "+M('c-contus','Hématomes intracrâniens')+" ; "+ABO("Chirurgie 2025, Version C, QCD Q22 : intervalle libre")+"."},
"15":{a:[0,3,4],e:"Réponses : A (trait transversal, col fémoral), D (trait pertrochantérien, région trochantérienne) et E (trait transversal oblique à 3e fragment, diaphyse). "+M('c-fract','Traits de fracture du fémur')+"."},
"16":{a:[1],e:"Réponse : B. Ordre : s’assurer que le malade n’a pas de besoin urgent, envoyer l’aide-soignant chercher le sang, vérifier la concordance de la poche avec la prescription, faire le test de compatibilité au lit du malade. "+M('c-i-gs','Groupes sanguins ABO-Rhésus')+"."},
"17":{a:[2],e:"Réponse : C. Aiguille non souillée de sang : on nettoie la plaie avec un antiseptique et on continue le soin."},
"18":{a:[1,2,5],e:"Réponses : B (groupage sanguin + Rhésus), C (préparation psychologique) et F (vérification de la diète). Ce sont des soins préopératoires."},
"19":{a:[1,3],e:"Réponses : B (choc traumatique et hémorragique) et D (lésions vasculo-nerveuses). Ce sont les complications immédiates des fractures du fémur ; les autres sont secondaires."},
"20":{a:[0],e:"Réponse : A. Globe vésical avec urétrorragie après fracture du bassin : rupture de l’urètre membraneux."},
"21":{a:[1],e:"Réponse : B (hémorragie). Le cours range parmi les complications immédiates de la fracture ouverte l’ouverture du foyer de fracture et le choc traumatique et hémorragique. Seule l’hémorragie figure dans les propositions ; l’infection est une complication secondaire. La question est donc incomplète : à signaler au formateur."},
"22":{a:[3],e:"Réponse : D (4, 2, 3, 5, 1). Le prélèvement de pus se fait avant tout antiseptique, puis nettoyage, antiseptique, fermeture du pansement et information du chirurgien. Le sujet officiel demande « lequel convient » parmi les six gestes : la réponse D suit l’ordre prélèvement, nettoyage, antiseptique, fermeture, information du chirurgien. "+M('c-infchir','Infection de plaie et prélèvement')+"."},
"23":{a:[2],e:"Réponse : C. Le bandage en huit de chiffre immobilise la fracture de la clavicule. "+M('c-entorses','Bandages et immobilisation')+"."}
}
};
DE._t.CATS.forEach(c=>c.s.forEach(s=>{const m=CORR[s.t];if(!m)return;Object.keys(m).forEach(i=>{const q=s.qs[+i];if(!q)return;const v=m[i];if(typeof v==='string')q.e=v;else{q.a=v.a;q.e=v.e}})}));
})();
