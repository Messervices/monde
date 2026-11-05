# MON D.E INFAS

Site de préparation au diplôme d'État **IDE et SF** : exercices corrigés (QCD / QCM) et cours.

## Contenu du dépôt

| Fichier | Rôle |
|---|---|
| `index.html` | Page d'accueil et squelette du site |
| `style.css` | Mise en forme (accueil, sommaire, exercices, cours, schémas) |
| `script.js` | Logique : navigation, correction des exercices, affichage des cours |
| `access.js` | Codes d'accès (empreintes SHA-256) par licence, tarifs et contact de l'administrateur |
| `generer-code.html` | Page de l'administrateur pour créer un nouveau code et son empreinte |
| `data.js` | Sommaire (49 épreuves) et exercices corrigés (3 253 questions) |
| `cours.js` | Cours rédigés (HTML + schémas SVG originaux) |
| `de.js` | Page classée par **année → antenne → matière** (l'année vient du champ `y` du sujet, sinon de l'année écrite dans son titre ; les sujets de septembre 2026 des 5 antennes sont ajoutés en bas du bloc de données, les questions sans correction ont `a:[]` et sont signalées « correction en cours de rédaction »). Sujets du Diplôme d'État (D.E) d'Abidjan, Abengourou, Daloa, Aboisso, Man, Korhogo et Agboville (blocs B 2026, versions A, C et D) (bouton **SUJET D.E L3** de l'accueil) |
| `jeu.js` | Jeu quiz : QCM tirés au hasard de tous les exercices (`data.js` + `de.js`, environ 1 250 questions) ; à la fin, le « Diplôme d'État D.E — Félicitations » s'affiche (bouton **JEU QUIZ** de l'accueil) |
| `docs.js` | Boutons **DICTIONNAIRE MÉDICAL** (gauche) et **ATLAS IMAGE ANATOMIE** (droite) de l'accueil : lecteur des PDF du dossier `docs/` |
| `docs/` | `atlas-anatomie.pdf` (polycopié d'anatomie illustré, Lille 2017, 483 p.) ; `dictionnaire-medical.pdf` à déposer ici pour activer le dictionnaire |
| `sp.js` + `sante-publique.html` | Bouton **FORMULE SANTÉ PUBLIQUE** de l'accueil : ouvre la page des formules et exercices corrigés |
| `pev.js` + `pev.html` + `images/pev/` | Bouton **PEV** de l'accueil (sous RÉSUMÉ PÉDIATRIE) : cours Programme Élargi de Vaccination (diapositives du PDF rédigées en texte, par grandes parties, avec recherche ; les tableaux et schémas sont gardés en images). Le PDF complet reste dans `cours-pdf/pev.pdf` (bouton PEV de COURS PDF) |
| `pd.js` + `resume-pediatrie.html` | Bouton **RÉSUMÉ PÉDIATRIE** de l'accueil (juste après FORMULE SANTÉ PUBLIQUE) : résumé du cours de pédiatrie en 17 chapitres, avec recherche |
| `ec.js` + `etudes-de-cas.html` | Bouton **ÉTUDES DE CAS** de l'accueil (sous PÉDIATRIE) : études de cas des sujets D.E et du livre de pédiatrie, avec leurs questions corrigées (données dans `ped-train.js` : `PED_CTX` et questions à champ `g`) |
| `dg.js` + `diagnostic-patient.html` + `diag-data.js` | Bouton **DIAGNOSTIQUE MON PATIENT** (sous ÉTUDES DE CAS) : jeu où les signes d'un patient apparaissent un par un et où il faut trouver la pathologie (35 cas : pédiatrie, médecine, chirurgie, santé publique, santé de la reproduction). Chaque cas peut porter une source (6e élément de la ligne) ; 13 cas sont recoupés avec des sources officielles (OMS, PCIME, MSF, CDC), les autres sont signalés « à confronter à ton cours ». Pour ajouter un cas : une ligne dans la liste `DIAG` de `diag-data.js` |
| `cm.js` + `classification-medicaments.html` | Bouton **CLASSIFICATION DES MÉDICAMENTS** de l'accueil : page de recherche (posologies, calculs de doses, valeurs normales, termes médicaux) |
| `sch.js` + `schemas-illustrations.html` + `images/schemas/` | Bouton **SCHÉMA ET ILLUSTRATION** de l'accueil : 57 schémas (code d'accès au clic sur un schéma) |
| `gl.js` + `glossaire-medical.html` | Bouton **GLOSSAIRE MÉDICAL** de l'accueil : environ 1450 mots, expressions et sigles médicaux du site, avec barre de recherche (insensible aux accents), filtre par catégorie et index alphabétique. Pour ajouter un mot : ajouter une ligne `[mot, catégorie, définition]` dans la liste `DATA` du fichier |
| `pf.js` + `prefixes-suffixes.html` | Bouton **PRÉFIXES ET SUFFIXES** de l'accueil : environ 100 préfixes et 70 suffixes médicaux, avec leur sens, leur origine et des exemples, recherche intégrée. Pour modifier : listes `P` et `S` du fichier `prefixes-suffixes.html` |
| `sf.js` + `sage-femme.html` | Bouton **SAGE FEMME** de l'accueil (sous EXAMEN SUJET D.E L3) : sujets rangés par école (D.E ABIDJAN, ABENGOUROU, DALOA, ABOISSO, MAN, KORHOGO, AGBOVILLE, BOUAKÉ, puis « Autres sujets · toutes antennes »), 9 examens actuellement : examen blanc version B (santé de la reproduction / planification familiale, 60 questions, correction à confirmer) GYNECO IDE-SF-M J11 (77 questions, corrigé officiel) et examen blanc Abidjan version C 2025 (50 questions, correction à confirmer) et DE blanc Gynéco-obstétrique Man 2025 (29 questions, correction à confirmer). Pour ajouter un examen : liste `EX` (champ `v` = code de l'école : abj, abg, dal, abo, man, kor, agb, bke ou all) du fichier `sage-femme.html` |
| `definitions.js` | **Définitions au clic** : tout mot ou expression du glossaire présent dans le site (questions, corrections, cours, pages) est souligné en pointillés ; un clic ouvre une petite bulle avec sa définition. Les définitions sont lues dans la liste `DATA` de `glossaire-medical.html` (ajouter un mot là suffit). Chargé dans l'accueil et dans chaque page ; bouton **Définitions au clic** (accueil) pour l'activer ou le désactiver |
| `logout.js` | Bouton **Connecté · Se déconnecter** en haut à droite : visible seulement quand un code d'accès valide est enregistré ; il efface le code au clic |
| `cours-pdf.js` | Bouton **COURS PDF** de l'accueil : un bouton par matière (40 matières) qui ouvre le PDF du dossier `cours-pdf/` |
| `cours-pdf/` | Déposer ici les PDF des cours ; les noms attendus sont listés dans `LISEZ-MOI.txt` (ex. `pediatrie.pdf`, `sante-publique.pdf`) |
| `images/` | Couverture du livre de pédiatrie (page PÉDIATRIE), photo d'accueil et figures de l'exercice « appareil locomoteur » |
| `.nojekyll` | Demande à GitHub Pages de servir les fichiers tels quels |

## Mettre le site en ligne avec GitHub Pages

1. Créer un dépôt sur GitHub (par exemple `prepa-infas-2026`).
2. Déposer **tous** les fichiers et le dossier `images/` à la racine du dépôt (bouton *Add file → Upload files*).
3. Aller dans *Settings → Pages*, choisir *Deploy from a branch*, la branche `main` et le dossier `/ (root)`, puis enregistrer.
4. Après une à deux minutes, le site est disponible à l'adresse `https://<votre-pseudo>.github.io/prepa-infas-2026/`.

## Accès

Les boutons de l'accueil (L1, L2, L3, COURS) sont en accès libre. Le code d'accès n'est demandé qu'au moment de voir une correction : bouton « Corriger » des sujets D.E, corrections des exercices, première réponse validée dans l'entraînement PÉDIATRIE et dans ÉTUDES DE CAS (« Voir le corrigé » pour le cas de la démarche de soins). Les fichiers `access.js` et `generer-code.html` restent dans le dépôt (le numéro WhatsApp de l'accueil en dépend) ; pour rétablir les codes, remplacer le début de `requireAccess` dans `script.js` par `if(hasAccess(lv)){done();return}`.

## Ajouter un cours

Dans `cours.js`, ajouter une entrée à l'objet `COURS`, avec la même clé que l'épreuve dans `data.js` (par exemple `cel` pour « Anatomie cellule et tissus ») :

```js
const COURS = { dig: COURS_DIG, cel: '<div class="course"><h3>…</h3><p>…</p></div>' };
```

Les matières qui ont un cours sont reliées automatiquement à leurs exercices (boutons « Voir le cours » et « Passer aux exercices »).

## Remarques

- Le PDF d'origine ne contenait pas de corrigé : les corrections sont rédigées à la main. Les points marqués « à confirmer » doivent être comparés avec votre cours.
- Les schémas du cours sont des illustrations originales, libres d'utilisation.

## Application installable (PWA)

Le site peut s'installer comme une application sur téléphone : icône sur l'écran d'accueil, plein écran, et exercices/cours disponibles hors connexion après la première visite.
- Fichiers : `manifest.json`, `sw.js`, `pwa.js`, `icon-192.png`, `icon-512.png`, `apple-touch-icon.png`.
- Android (Chrome) : bouton « Installer l'application » sur l'accueil, ou menu ⋮ → Installer l'application.
- iPhone (Safari) : Partager → Sur l'écran d'accueil.
- Après une mise à jour du site, changer `V` dans `sw.js` (ex. `mon-de-infas-v2`) pour que les téléphones récupèrent la nouvelle version.
