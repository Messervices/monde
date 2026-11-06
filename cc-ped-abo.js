/* Corrections détaillées : ABOISSO · Pédiatrie · D.E blanc 2026 (Bloc A), Q1 à Q50 (QCM Q1–Q30, QCD Q31–Q50).
   Chaque correction donne la réponse, la raison, puis des SOURCES CLIQUABLES :
   - « Cours · … » : ouvre le cours du site (« ← Accueil » ramène à la question) ;
   - « Mes cours · … » : ouvre la page Mes cours à la bonne section (nouvel onglet) ;
   - « Résumé pédiatrie » : résumé du cours de pédiatrie (nouvel onglet) ;
   - « Corrigé Aboisso 2025 … » : corrigé d’une question voisine, déjà dans l’application (EXAMEN SUJET D.E).
   Ordre de référence : cours du site, puis corrigés 2025 des antennes. Quand ni l’un ni l’autre ne tranche, la réponse est établie par raisonnement propre, et l’explication le dit (« Raisonnement propre »). Les points marqués ⚠ restent à confronter avec le corrigé officiel. */
(function(){
const C=(k,t)=>"<a href='#' class='lc' data-co='"+k+"'>Cours · "+t+"</a>";
const M=(id,t)=>"<a href='mes-cours.html#"+id+"' target='_blank' rel='noopener'>Mes cours · "+t+"</a>";
const RES=(t)=>"<a href='resume-pediatrie.html' target='_blank' rel='noopener'>Résumé pédiatrie · "+t+"</a>";
const ABO=(t)=>"Corrigé Aboisso 2025 ("+t+")";
const CORR={
"ABOISSO — Pédiatrie · D.E blanc 2026 (Bloc A) · QCM":{
"0":{a:[0],e:"Réponse : A. L’échographie du 2e trimestre recherche surtout les malformations fœtales. "+RES('Échographie et suivi de la grossesse')+"."},
"1":{a:[1],e:"Réponse : B. Mère probablement diabétique (glycémie à jeun 1,4 g/L) et enfant macrosome (4 250 g) : risque d’hypoglycémie néonatale dans les 48 premières heures. "+C('ped','Néonatologie (hypoglycémie du nouveau-né)')+"."},
"2":{a:[0],e:"Réponse : A (0,5 à 1 litre/min). Le cours indique un débit d’oxygène de 0,5 à 1 L/min pour le nouveau-né en détresse respiratoire. "+C('ped','Détresse respiratoire du nouveau-né')+"."},
"3":{a:[2],e:"Réponse : C (8). Silverman : thorax immobile (1) + tirage sus-sternal intense (2) + entonnoir xiphoïdien modéré (1) + battement des ailes du nez intense (2) + geignement audible à distance (2) = 8. "+M('c-sa-mk','Détresse respiratoire du nouveau-né')+" ; "+ABO("Pédiatrie 1er sujet Bloc D, Silverman, même méthode de cotation")+"."},
"4":{a:[0],e:"Réponse : A. La supplémentation en acide folique au 1er trimestre prévient le spina bifida. "+C('ped','Grossesse et prévention')+"."},
"5":{a:[3],e:"Réponse : D. Devant une crevasse de la mère allaitante : conseils d’hygiène, antiseptique local et antalgique. "+RES('Allaitement et soins de la mère')+"."},
"6":{a:[2],e:"Réponse : C. Le paludisme est grave en cas de convulsions répétées (plus de deux en 24 heures). "+M('p-palu','Paludisme de l’enfant (formes et gravité)')+"."},
"7":{a:[1],e:"Réponse : B, retenue par raisonnement. Le cours cite le staphylocoque doré comme germe principal de l’infection tardive (post-natale) et E. coli comme autre germe fréquent. Aucune proposition ne donne exactement ces deux germes. B contient le staphylocoque doré (le germe principal) ; C associe E. coli à la shigelle, bactérie entérique rarement en cause en néonatologie. L’item est mal construit : à signaler au formateur."},
"8":{a:[0],e:"Réponse : A. Artésunate injectable IV à 2,4 mg/kg en première intention pour le paludisme grave. "+M('p-palu','Traitement du paludisme grave')+" ; "+C('ped','Paludisme grave')+"."},
"9":{a:[2],e:"Réponse : C. La clarté nucale (échographie) apprécie le risque de trisomie 21 ; elle ne pose pas le diagnostic, qui demande un caryotype. "+RES('Diagnostic prénatal')+"."},
"10":{a:[3],e:"Réponse : D (selles glairo-sanglantes). Ce signe relève de la dysenterie, non du paludisme grave, dont les signes sont l’ictère, l’anémie sévère et les urines rouge porto. "+M('p-palu','Signes du paludisme grave')+"."},
"11":{a:[1],e:"Réponse : B (J8 à J28). L’infection bactérienne précoce survient avant J7 ; l’infection tardive (post-natale) entre J8 et J28. "+C('ped','Infections néonatales')+"."},
"12":{a:[2],e:"Réponse : C (sérologie de l’hépatite B). Le bilan prénatal du cours comprend l’hémogramme, l’électrophorèse de l’hémoglobine, le groupe ABO/Rhésus, la glycémie, les sérologies VIH, toxoplasmose, rubéole et syphilis. La rubéole est donc un examen de routine ; l’hépatite B n’y figure pas. "+C('ped','Bilan prénatal')+"."},
"13":{a:[2],e:"Réponse : C. Les facteurs vitamine K-dépendants sont II, VII, IX et X. Le facteur IV (calcium) n’en fait pas partie. "+C('ped','Maladie hémorragique du nouveau-né')+"."},
"14":{a:[2],e:"Réponse : C. Plasmodium falciparum est l’espèce la plus fréquente et responsable des formes graves en Côte d’Ivoire. "+M('c-pa2','Les protozoaires et le Plasmodium')+"."},
"15":{a:[0],e:"Réponse : A. L’accès palustre simple n’est pas une cause de prématurité induite (décision médicale), contrairement à la souffrance fœtale, l’éclampsie sévère et le placenta praevia. "+C('ped','Prématurité')+"."},
"16":{a:[3],e:"Réponse : D (signes sévères de déshydratation, plan C). Enfant incapable de boire, yeux très enfoncés, bouche très sèche, pli cutané qui s’efface lentement. "+C('ped','Déshydratation : plans A, B et C')+" ; "+RES('Plan C (signes sévères)')+"."},
"17":{a:[1],e:"Réponse : B (10 mg par jour pendant 10 jours). Chez l’enfant de moins de 6 mois, le zinc est donné à raison d’un demi-comprimé (10 mg) par jour, pendant 10 jours. "+RES('Zinc comprimé selon l’âge')+"."},
"18":{a:[0],e:"Réponse : A (1 125 ml). Plan B : SRO à 75 ml/kg en 4 heures ; 15 kg × 75 = 1 125 ml. "+C('ped','Plan B (SRO)')+"."},
"19":{a:[0],e:"Réponse : A (03h25 à 03h55). Le cours range la vitamine K1 (1 mg IM si poids ≥ 1 500 g) parmi les soins propres du nouveau-né à la naissance : elle se donne donc dans les premiers instants, ce qui correspond à la tranche A. "+RES('Vitamine K1 : prévention selon le poids')+" donne les doses sans heure précise. Les tranches B, C et D sont plus tardives. La correction d’origine donnait C : elle ne tient pas compte de la règle « à la naissance »."},
"20":{a:[0],e:"Réponse : A (≥ 37,5 °C, par voie rectale, le matin). Le cours fixe la limite de la température normale à 37,5 °C. "+M('c-sa-fievre','Fièvre de l’enfant et moyens physiques antipyrétiques')+" ; "+RES('Fièvre de l’enfant')+"."},
"21":{a:[0],e:"Réponse : A. La détresse respiratoire immédiate après une césarienne est liée au retard de résorption du liquide pulmonaire. "+C('ped','Détresse respiratoire du nouveau-né')+"."},
"22":{a:[2],e:"Réponse : C (2 données d’indépendance). Données d’indépendance : l’âge de 3 jours et le lieu de vie (Krindjabo). "+C('ped','Démarche de soins : données d’indépendance')+"."},
"23":{a:[2],e:"Réponse : C. Le principal agent infectieux de la diarrhée aiguë du nourrisson est viral (rotavirus). "+C('ped','Diarrhée aiguë')+"."},
"24":{a:[1],e:"Réponse : B (3 données de dépendance). Données de dépendance : la mère très inquiète, le sexe ambigu et la respiration difficile. "+C('ped','Démarche de soins : données de dépendance')+"."},
"25":{a:[0],e:"Réponse : A (2 données d’indépendance + 3 données de dépendance). "+C('ped','Démarche de soins')+"."},
"26":{a:[2],e:"Réponse : C (8). Apgar à 5 minutes : coloration (acrocyanose, 1) + fréquence cardiaque 110 (2) + réactivité, cri vigoureux (2) + tonus, flexion des extrémités (1) + respiration régulière (2) = 8. "+RES('Score d’Apgar (8 à 10 à 5 minutes)')+"."},
"27":{a:[2],e:"Réponse : C (anorexie). Dans le marasme, l’appétit est conservé et le regard est vif ; l’anorexie et les œdèmes sont des signes du kwashiorkor. "+RES('Marasme : pic à 12 mois ; kwashiorkor : œdèmes, anorexie')+" ; "+ABO("Pédiatrie 1er sujet Bloc D : marasme, regard vif")+"."},
"28":{a:[2],e:"Réponse : C. Le mélange II de l’INSP d’Adjamé est composé de 5 volumes de lait entier en poudre, 2 de farine, 2 de sucre et 1 d’huile (cuisson nécessaire). Parmi les propositions, C est la plus proche (la farine n’y figure pas). "+C('nu','Mélanges de l’INSP d’Adjamé')+"."},
"29":{a:[3],e:"Réponse : D. La vaccination ne fait pas partie des composantes de la méthode Mère Kangourou (contact peau à peau, allaitement, suivi). "+M('c-sa-mk','Soins Mère Kangourou')+" ; "+ABO("Pédiatrie 1er sujet Bloc D, Mère-Kangourou : rôle propre")+"."}
},
"ABOISSO — Pédiatrie · D.E blanc 2026 (Bloc A) · QCD":{
"0":{a:[0],e:"Vrai. Somnolence, cri plaintif et faciès pâle sont des signes de mauvaise tolérance de la fièvre."},
"1":{a:[0],e:"Vrai. Chez la fille prématurée, les grandes lèvres ne recouvrent pas les petites lèvres, qui restent saillantes. "+C('ped','Nouveau-né prématuré')+"."},
"2":{a:[0],e:"Vrai. La maladie des membranes hyalines est due au déficit en surfactant lié à l’immaturité pulmonaire."},
"3":{a:[1],e:"Faux. Le cours prévoit la prophylaxie du fer et de l’acide folique chez la gestante, mais par cures de 30 jours (Hemafer fol : 1 comprimé par jour pendant 30 jours pendant la grossesse), et non pendant toute la grossesse. <a href='mes-cours.html' target='_blank' rel='noopener'>Mes cours · Médicaments (fer et acide folique)</a>."},
"4":{a:[0],e:"Vrai. Un carreau de sucre (5 g) dans 50 ml d’eau donne une solution sucrée à 10 %. "+C('nu','Malnutrition : solution sucrée')+"."},
"5":{a:[0],e:"Vrai. Pour un enfant de plus d’un an, le plan C prévoit 30 ml/kg de Ringer lactate en 30 minutes : 30 × 9 = 270 ml. "+RES('Plan C : après 1 an, 30 ml/kg en 30 min')+"."},
"6":{a:[0],e:"Vrai. Pour un nouveau-né à terme de 1 600 g (≥ 1 500 g), la prévention de la maladie hémorragique est 1 mg de vitamine K1 en IM. "+C('ped','Vitamine K1 à la naissance')+"."},
"7":{a:[1],e:"Faux. Chez le prématuré, les plis plantaires ne couvrent pas les 2/3 antérieurs de la plante ; c’est un signe de maturité chez le nouveau-né à terme. "+RES('Signes de maturité (strie plantaire > 2/3 antérieur)')+"."},
"8":{a:[1],e:"Faux. Le marasme survient surtout vers 12 mois, avant 18 mois. Le kwashiorkor a son pic entre 18 et 36 mois. "+RES('Marasme : pic 12 mois ; kwashiorkor : 18 à 36 mois')+"."},
"9":{a:[1],e:"Faux. Le résumé pédiatrie donne le traitement curatif de la maladie hémorragique : 10 mg de vitamine K1 en IV directe, quel que soit le poids, en une administration. Il n’y a pas d’injections pendant 4 jours. "+RES('Maladie hémorragique : curatif')+"."},
"10":{a:[1],e:"Faux. Le nouveau-né à terme est rose ; le prématuré a une peau rouge, fine et translucide. "+RES('Nouveau-né prématuré')+"."},
"11":{a:[1],e:"Faux. Chez CB (3 ans, rhinopharyngite), le problème infirmier est l’encombrement des voies aériennes supérieures ; la perturbation des échanges gazeux relève de la zone d’échange (bronches, poumons). "+C('ped','Infections respiratoires : zone de conduction et zone d’échange')+" ; "+RES('Les différents types d’IRA')+"."},
"12":{a:[1],e:"Faux. La radiographie du thorax n’est pas indiquée dans une rhinopharyngite simple ; elle est réservée aux atteintes des voies respiratoires basses. "+C('ped','Infections respiratoires')+"."},
"13":{a:[0],e:"Vrai. La vomique est une expectoration brutale de pus ou de sérosité provenant des voies respiratoires. "+C('ped','Vocabulaire respiratoire')+"."},
"14":{a:[0],e:"Vrai. Le syndrome extrapyramidal grave dû aux antiémétiques se traite par le diazépam. "+C('ped','Effets indésirables des antiémétiques')+"."},
"15":{a:[1],e:"Faux. Avant 6 mois, le zinc est donné à raison de 10 mg par jour pendant 10 jours (un demi-comprimé), et non 20 mg. "+RES('Zinc comprimé selon l’âge')+"."},
"16":{a:[0],e:"Vrai. Chez l’enfant avec signes évidents de déshydratation, le plan B (SRO à 75 ml/kg) est donné pendant 4 heures au centre de santé, puis réévalué et relayé à domicile. "+C('ped','Plan B (SRO)')+"."},
"17":{a:[0],e:"Vrai. Débit = (195 × 15) / (4 × 60) = 12,19, soit 12 gouttes/min (15 gouttes = 1 ml en transfusion). "+C('ped','Débit de transfusion')+" ; "+ABO("Chirurgie 2025, Version C, QCM Q14 : 15 gouttes = 1 ml")+"."},
"18":{a:[1],e:"Faux. L’apport de F75 est de 130 ml/kg/jour : 130 × 7 = 910 ml pour un enfant de 7 kg, et non 500 ml. "+C('nu','Lait F75 : apports')+"."},
"19":{a:[1],e:"Faux. La bronchiolite est une infection respiratoire basse d’origine virale (VRS, coronavirus), et non bactérienne. "+C('ped','Bronchiolite : origine virale')+" ; "+RES('Bas appareil respiratoire : bronchiolite')+"."}
}
};
DE._t.CATS.forEach(c=>c.s.forEach(s=>{const m=CORR[s.t];if(!m)return;Object.keys(m).forEach(i=>{const q=s.qs[+i];if(!q)return;const v=m[i];if(typeof v==='string')q.e=v;else{q.a=v.a;q.e=v.e}})}));
})();
