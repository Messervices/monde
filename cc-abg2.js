/* Corrections : INFAS Abengourou · D.E blanc septembre 2026 — Chirurgie (Version A ; Q15 corrigée d'après le cours), Pédiatrie (Bloc B : Q12, 32, 34, 41), Santé publique (Version D : Q25). Références : Mes cours + cours du site. */
(function(){
const M=(id,t)=>"<a href='mes-cours.html#c-"+id+"' target='_blank'>Mes cours · "+t+"</a>";
const L=(co,t)=>"<a href='#' class='lc' data-co='"+co+"'>Cours · "+t+"</a>";
const BRU=M('brul','Brûlures'),ANT=M('anthrax','Anthrax'),GAN=M('gangrene','Gangrène gazeuse'),PLA=M('plaies','Plaies'),CON=M('contus','Contusions'),FRA=M('fract','Fractures'),PIE=M('pieds','Pieds bots congénitaux'),
DIG=L('dig','Anatomie de l’appareil digestif'),UR=L('ur','Urologie (rétention urinaire)'),SOND=L('ur','Urologie (sondage vésical)'),URA=L('s2d','Anatomie appareil urinaire'),RES=L('resp','Anatomie et physiologie respiratoire'),SEM=L('s1d','Sémiologie respiratoire'),
HORS=" (thème absent de la rubrique « Mes cours » du site : à vérifier dans ton cours de chirurgie)";
const MP=(id,t)=>"<a href='mes-cours.html#c-p-"+id+"' target='_blank'>Mes cours · Pédiatrie "+t+"</a>";
const CORR={
"INFAS Abengourou — Chirurgie · D.E blanc septembre 2026 (Version A)":{
"0":"Vrai. L’appendice siège normalement en fosse iliaque droite (base : cæcum). Chez un sujet avec situs inversus (inversion congénitale des organes), il se trouve à gauche. Réf : "+DIG+".",
"1":"Vrai. Dans une fracture des os de la jambe, la contention doit immobiliser l’articulation sus-jacente (genou) et sous-jacente (cheville) : plâtre cuisso-pédieux (de la cuisse aux orteils). Réf : "+FRA+" (contention plâtrée après réduction).",
"2":"Vrai. L’embarrure est l’enfoncement d’un fragment osseux de la voûte du crâne ; le traitement est chirurgical (relever le fragment après trépanation). Réf : traumatismes crâniens"+HORS+".",
"3":"Faux. Dans la fracture du carpe (surtout le scaphoïde), la chute se fait sur la paume en hyperextension et légère ABDUCTION (inclinaison radiale), non en adduction. Réf : "+FRA+" (mécanismes) ; traumatologie du poignet"+HORS+".",
"4":"Faux. La chronologie constante d’un soin de plaie est : découvrir la plaie, l’inspecter, la désinfecter (après nettoyage), l’assécher, appliquer le produit de pansement, la recouvrir. La désinfection n’est donc pas le 1er geste. Réf : "+PLA+" (conduite à tenir).",
"5":"Vrai. L’anthrax est une agglomération de furoncles reliés par une même suppuration (aspect en « nid de guêpe »). Réf : "+ANT+" (définition).",
"6":"Faux. La gravité d’une brûlure tient à l’étendue (SCB), à la profondeur, à la localisation (face, mains, périnée), à l’âge et au terrain (tares : HTA, diabète). L’étendue seule ne suffit pas. Réf : "+BRU+" (évaluation de la gravité).",
"7":"Vrai. La brûlure augmente la perméabilité capillaire : le plasma fuit vers l’interstitium, ce qui forme les œdèmes et entraîne une hypovolémie. Réf : "+BRU+" (physiopathologie).",
"8":"Faux. Le scanner abdominal injecté est l’examen de référence pour bilanter une contusion abdominale (lésions du foie, de la rate, hémopéritoine) chez un patient stable. Réf : "+CON+" ; traumatismes abdominaux"+HORS+".",
"9":"Faux. Un traumatisé du thorax peut être en état de choc ou en détresse respiratoire sans douleur importante (hémothorax, pneumothorax, contusion pulmonaire). Un traumatisme thoracique reste potentiellement grave. Réf : "+RES+" ; traumatismes du thorax"+HORS+".",
"10":"Vrai. L’hémothorax est une collection de sang dans la cavité pleurale (cavité thoracique). Réf : "+RES+" (plèvre) ; traumatismes du thorax"+HORS+".",
"11":"Faux. Le volet thoracique (fractures de plusieurs côtes en deux endroits) crée une respiration paradoxale : le segment mobile rentre à l’inspiration et sort à l’expiration. Cela aggrave la mécanique respiratoire. Réf : "+RES+" ; traumatismes du thorax"+HORS+".",
"12":"Vrai. Dyspnée après traumatisme thoracique = détresse respiratoire potentielle (pneumothorax, hémothorax) : évaluation médicale urgente, oxygène, surveillance. Réf : "+SEM+" (dyspnée).",
"13":"Faux. En cas d’épanchement liquidien (hémothorax), la matité est trouvée à la PERCUSSION ; l’auscultation montre plutôt une diminution ou une abolition du murmure vésiculaire. Réf : "+SEM+" (inspection, palpation, percussion, auscultation).",
"14":"Faux. Le pied bot varus équin est plus fréquent chez le garçon (environ 2 garçons pour 1 fille) mais touche aussi les filles ; il représente 9 cas sur 10 des pieds bots. Réf : "+PIE+".",
"15":{"a":[1],"e":"Faux (corrigée d’après le cours). Le cours définit le pied talus comme un pied en hyperflexion dorsale ; la déviation « en dehors » caractérise le valgus (quatre variétés : varus équin, valgus, talus, métatarsus varus). L’énoncé attribue au talus une déviation en dehors : faux selon le cours. L’ancienne réponse était Vrai. Réf : "+PIE+"."},
"16":"Faux. Beaucoup de fractures de la voûte du crâne sont linéaires, sans enfoncement. L’embarrure est une forme particulière (enfoncement d’un fragment). Réf : traumatismes crâniens"+HORS+".",
"17":"Faux. L’urètre est un conduit IMPAIR qui conduit l’urine de la vessie vers l’extérieur. Ce sont les deux uretères qui conduisent l’urine des reins vers la vessie. Réf : "+URA+".",
"18":"Vrai. L’anthrax peut se compliquer localement de suppuration péri ou sous-anthracoïde, de lymphangite réticulaire, d’adénite et d’adéno-phlegmon ; les complications générales sont la septicémie et la métastase suppurée. Réf : "+ANT+" (complications).",
"19":"Vrai. La crépitation neigeuse à la palpation (gaz sous la peau, emphysème sous-cutané) est un signe physique de la gangrène gazeuse, avec peau pâle, luisante, exsudat fétide et toxémie. Réf : "+GAN+" (signes).",
"20":"Réponse : A. Une impossibilité brutale et totale d’uriner, avec envie douloureuse, définit la rétention aiguë d’urine. L’adénome de la prostate est une cause, non le diagnostic ; la rétention chronique est progressive et indolore. Réf : "+UR+".",
"21":"Réponse : C. Le globe vésical (masse sus-pubienne convexe, mate à la percussion, douloureuse) est le signe PHYSIQUE qui confirme la rétention aiguë. Réf : "+UR+" ; "+L('s2d','Anatomie appareil urinaire')+".",
"22":"Réponse : A. L’impossibilité d’uriner est le signe FONCTIONNEL (ce que dit le patient) ; le globe vésical est un signe physique. Réf : "+UR+".",
"23":"Réponse : C. Le sondage vésical d’urgence évacue les urines et soulage immédiatement la douleur ; l’intervention chirurgicale vient après, selon la cause. Réf : "+SOND+".",
"24":"Réponses : C et E. L’infection urinaire aiguë est une contre-indication au sondage (risque de bactériémie ou de prostatite) et l’incontinence n’est pas une indication de sonde à demeure. La rétention, la douleur sus-pubienne due à un globe et l’HBP sont des indications. Réf : "+SOND+".",
"25":"Réponse : C. Avant la pose, on réalise une hygiène rigoureuse du méat et de la région périnéale pour éviter d’introduire des germes dans la vessie. Réf : "+SOND+" (asepsie).",
"26":"Réponse : A. L’objectif de soins est le retour d’un mode d’élimination urinaire normal (évacuer la vessie, soulager, prévenir l’infection). Réf : "+UR+" ; démarche de soins : <a href='mes-cours.html#c-s-demarche' target='_blank'>Mes cours · Démarche de soins</a>.",
"27":"Réponses : A et D. Appareil urinaire HAUT = reins + uretères ; appareil urinaire BAS = vessie + urètre (la prostate est un organe génital de l’homme). Réf : "+URA+".",
"28":"Réponses : B et C (corrigé). Bouche et œsophage appartiennent au tube digestif haut ; le côlon appartient au bas. L’estomac est aussi haut dans certaines classifications (jusqu’au duodénum) : le corrigé retient bouche et œsophage. Réf : "+DIG+".",
"29":"Réponse : C. L’urine normale est jaune pâle, claire et limpide ; trouble = infection ou cristaux ; foncée = déshydratation. Réf : "+URA+" ; "+L('sm','Sémiologie médicale')+".",
"30":"Réponse : B. L’urètre de l’homme est long (environ 14 à 20 cm) et traverse la prostate, la partie membraneuse et la verge ; l’urètre féminin mesure environ 4 cm. Réf : "+URA+".",
"31":"Réponse : C. Anurie = absence d’urine (moins de 100 ml par 24 h) ; oligurie = petite quantité ; polyurie = grande quantité. Réf : "+URA+" ; "+M('n-mal','Maladies rénales')+".",
"32":"Réponse : A. La diurèse normale est de 1 000 à 1 500 ml par 24 h (1 500 ml retenu). Réf : "+URA+" ; "+M('brul','Brûlures')+" (surveillance de la diurèse).",
"33":"Réponse : A. La rétention chronique est « avec distension » quand le résidu post-mictionnel dépasse 300 ml. Réf : "+UR+".",
"34":"Réponse : C. Dans la rétention chronique, le signe fonctionnel est l’impossibilité de vider totalement la vessie (vidange incomplète, mictions par regorgement). L’impossibilité d’uriner est le signe de la rétention aiguë. Réf : "+UR+".",
"35":"Réponses : B, D et E. Bilan d’un adénome de la prostate : urée (retentissement rénal), PSA (écarter un cancer), ECBU (infection). La GE (paludisme) et la NFS ne sont pas spécifiques. Réf : "+UR+" ; "+M('n-diag','Moyens de diagnostic des maladies rénales')+".",
"36":"Réponses : B et D. Les signes PHYSIQUES de la rétention aiguë sont la douleur à la palpation et la masse hypogastrique (globe vésical). La douleur spontanée et l’impossibilité d’uriner sont des signes fonctionnels. Réf : "+UR+".",
"37":"Réponse : B. La contusion est un traumatisme fermé de l’abdomen, sans solution de continuité (pas de plaie). La plaie pénétrante, avec solution de continuité, est un autre type de traumatisme. Réf : "+CON+" (définition).",
"38":"Réponse : A. Choc hémorragique (TA basse, soif, sueurs froides) avec bombement du cul-de-sac de Douglas = hémopéritoine (sang libre dans le péritoine). Réf : "+CON+".",
"39":"Réponses : C et D. Tachypnée et sueurs froides profuses traduisent l’état de choc hémorragique. La douleur abdominale et le bombement du Douglas sont des signes abdominaux. Réf : "+CON+".",
"40":"Réponses : B et E. Les viscères pleins (foie, rate) sont les plus exposés dans les contusions et saignent beaucoup. Duodénum, jéjunum, iléon et estomac sont des viscères creux. Réf : "+CON+".",
"41":"Réponse : C. Le sang s’accumule par gravité dans le cul-de-sac de Douglas, perçu comme un bombement douloureux au toucher rectal. Il confirme l’épanchement intrapéritonéal. Réf : "+CON+".",
"42":"Réponses : B et E. La défense localisée et les points douloureux exquis se recherchent à la PALPATION ; la matité déclive des flancs et le tympanisme se recherchent à la percussion. Réf : "+CON+" ; "+L('sm','Sémiologie médicale')+".",
"43":"Réponses : A et D. Avant une intervention d’urgence pour choc hémorragique : bilan de l’hémostase (TP, TCA, fibrinogène) et ionogramme sanguin. L’acide urique et le Doppler ne font pas partie du bilan. Réf : "+CON+".",
"44":"Réponses : B et D. Les deux buts sont de compenser la perte sanguine (réanimation) et de réaliser l’hémostase de la région atteinte (chirurgie). La voie veineuse et la sonde sont des moyens. Réf : "+CON+".",
"45":"Réponse : B. 1er degré : épiderme ; 2e degré : épiderme + une partie du derme ; 3e degré : toute l’épaisseur de la peau. Réf : "+BRU+" (classification par profondeur).",
"46":"Réponse : C. Les phlyctènes (cloques) caractérisent le 2e degré. Une escarre noire et indolore est le 3e degré ; une peau rouge sans cloque est le 1er degré. Réf : "+BRU+".",
"47":"Réponse : C. L’étendue de la surface corporelle brûlée (SCB, en %) est l’élément essentiel de la gravité ; elle sert au calcul de Baxter. La profondeur, la localisation, l’âge et le terrain complètent l’évaluation. Réf : "+BRU+".",
"48":"Réponse : B. Le 2e degré superficiel cicatrise spontanément en 10 à 21 jours ; le 2e degré profond demande 3 à 4 semaines. Réf : "+BRU+" (2e degré superficiel ≈ 10 jours, profond 3-4 semaines).",
"49":"Réponse : B. Chez l’enfant, une brûlure étendue expose à la déshydratation et au choc hypovolémique : évaluation médicale rapide et réhydratation (règle de Baxter). Réf : "+BRU+" (réanimation hydro-électrolytique).",
"50":"Réponse : B. La perte de la barrière cutanée expose à l’infection (germes de la peau) ; prévention : asepsie des pansements et prévention antitétanique. Réf : "+BRU+" (complications).",
"51":"Réponse : C. Le toit de la phlyctène est un pansement naturel stérile : il faut le protéger. Percer, arracher ou frotter à l’alcool expose à l’infection. Réf : "+BRU+" (conduite à tenir).",
"52":"Réponse : C. Le 2e degré profond cicatrise mal (3 à 4 semaines, cicatrice rétractile) et peut nécessiter une greffe de peau (autogreffe). Réf : "+BRU+" (traitement local : greffes).",
"53":"Réponse : C. Premier geste : refroidir à l’eau tempérée (environ 15 °C) pendant environ 15 minutes, enlever les vêtements imbibés, couvrir avec un champ ou un drap propre. Ni beurre, ni glace directe, ni percer les cloques. Réf : "+BRU+" (premiers secours).",
"54":"Réponse : C. Le 2e degré superficiel est très douloureux (terminaisons nerveuses à nu). Une douleur absente évoque le 3e degré. Réf : "+BRU+"."
},
"INFAS Abengourou — Pédiatrie · D.E blanc septembre 2026 (Bloc B)":{
"12":"Réponse : A. L’infection bactérienne néonatale précoce (materno-fœtale, streptocoque B) survient entre J0 et J7 de vie ; l’infection tardive survient après J7 (staphylocoque doré). Réf : "+MP('infnn','ch. 15 · Infection bactérienne du nouveau-né')+".",
"32":"Vrai. La déshydratation (souvent liée à la diarrhée et aux infections) est l’une des complications fréquentes de la malnutrition sévère, avec l’hypoglycémie et l’hypothermie. Réf : "+MP('malnu','ch. 20 · Malnutrition de l’enfant')+".",
"34":"Vrai. Les gestes septiques de l’agent de santé lors de l’accouchement (mains non lavées, matériel non stérile, touchers répétés) favorisent la contamination et l’infection néonatale précoce. Réf : "+MP('infnn','ch. 15 · Infection bactérienne du nouveau-né')+" (facteurs favorisants).",
"41":"Vrai. Le plan A est indiqué pour la diarrhée SANS signes de déshydratation : traitement à domicile (liquides en plus, SRO après chaque selle, zinc, alimentation, signes d’alarme). Plan B : signes évidents ; plan C : signes sévères. Réf : "+MP('diarr','ch. 8 · Diarrhée aiguë et déshydratation')+"."
},
"INFAS Abengourou — Santé publique · D.E blanc septembre 2026 (Version D)":{
"25":{"a":[0],"e":"Réponse : A. 15 000 F CFA. D’après le cours de budgétisation, les imprévus représentent 5 % des dépenses de fonctionnement local (DFL), l’immeuble 10 % et les autres dépenses 85 %. La question 24 retient 30 000 F pour l’immeuble (10 % × DFL), donc DFL = 300 000 F et imprévus = 5 % × 300 000 = 15 000 F. Réf : <a href='sante-publique.html' target='_blank'>Santé publique · Monitorage financier (plan d’affectation)</a> ; "+"<a href='mes-cours.html#c-s3-bud' target='_blank'>Mes cours · Budgétisation</a>."}
}
};
DE._t.CATS.forEach(c=>c.s.forEach(s=>{const m=CORR[s.t];if(m)Object.keys(m).forEach(i=>{const q=s.qs[+i];if(!q)return;const v=m[i];if(typeof v==='string')q.e=v;else{q.a=v.a;q.e=v.e}});
if(/^INFAS Abengourou/.test(s.t)&&/septembre 2026 \((Version A|Bloc B|Version D|Version C)\)/.test(s.t)){s.pend=0;s.d='Examen blanc septembre 2026 · QCD + QCM · toutes les questions sont corrigées'}}));
})();
