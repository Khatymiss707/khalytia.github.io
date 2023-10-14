const chapters = {
  debut: {
    titre: "Introductions",
    description:
      "Tu te réveilles, souffrant d'un terrible mal de tête, sur un sol glacial. Tu te souviens avoir été enlevé en plein jour et assommé, et tu remarques quatre autres personnes dans la pièce. L'une d'entre elles tend une main pour t'aider à te lever, mais tu hésites. Voyant ton incertitude, il propose les présentations. Keith, un policier, se présente, manifestant une certaine hésitation dans sa voix. Roxie, au look punk, révèle avoir vécu la même situation que toi, et Anna, une jeune fille d'environ 12 à 14 ans, semble en détresse. Ne sachant pas quoi faire, tu la réconfortes, comprenant sa situation. En te retournant, tu remarques que le dernier membre du groupe a trouvé un bouton qui cache des portes. Il se moque de votre perte de temps au lieu de chercher une sortie et entre dans l'une des portes sans vous attendre. Roxie exprime son agacement et présente Steve comme quelqu'un de têtu et arrogant. Malgré tout, il a accompli quelque chose, et pour ne pas vous séparer davantage dans cet endroit inconnu, vous décidez de le suivre de près.",
    image: "./assets/images/images_jeu/debut.png",
    boutons: [{ titre: "▶ Continuer", destination: "bar" }],
  },
  bar: {
    titre: "Un bar",
    description:
      "Vous entrez dans une pièce qui évoque un bar, baignée dans une douce ambiance jazz, créant ainsi une atmosphère réconfortante. Le groupe, visiblement moins tendu, se disperse pour chercher un indice ou une sortie. Que décides-tu investiger?",
    image: "./assets/images/images_jeu/bar.png",
    boutons: [
      { titre: "▶ Les bouteilles d’alcool", destination: "bouteilles1" },
      { titre: "▶ le cabinet avec un creux profond", destination: "cabinet" },
    ],
  },
  cabinet: {
    titre: "Nouveau membre",
    description:
      "Ignorant les objections de Steve à ton idée jugée stupide, tu grimpes à l'intérieur du cabinet, attiré par l'obscurité qui semble dissimuler quelque chose. Tu tombes alors dans un trou, glissant dans un tuyau sombre pour atterrir dans une autre pièce tout aussi désagréable que la première. Après t'être relevé de ta chute, tu découvres un homme en proie à la panique dans un coin de la pièce. Tu le questionnes et il révèle qu'il a lui aussi été kidnappé avec un autre groupe de personnes. Ils ont été forcés de passer une épreuve et ils ont dû le laisser dans cette chambre comme sacrifice. Reconnaissant de ton aide, il accepte de t'aider au bar en passant par le trou, grâce à l'effort de vous deux. En ressortant du cabinet avec Antoine, les autres membres du groupe te bombardent de questions et accueillent le nouvel arrivant. Steve émet des doutes sur lui et invite Anna à discuter en privé à l'extérieur de la pièce.",
    image: "./assets/images/images_jeu/nouveau_membre.png",
    boutons: [{ titre: "▶ Continuer", destination: "bouteilles2" }],
  },
  bouteilles1: {
    titre: "Montre à personne",
    description:
      "Tu décides d'inspecter les bouteilles. Peut-être que la solution se cache juste sous nos yeux ? En soulevant et en secouant chaque bouteille, tu remarques une carte suspecte sous l'une d’elles. Elle est petite et illustrée avec un symbole de clé. Confus, tu retournes la carte pour y trouver un court paragraphe. La clé de la maîtrise assure l'immunité, mais à quel prix ? Garde-la secrète, sinon le danger guette. Pris de panique, tu scrutes rapidement la pièce avant de glisser la carte dans l'une de tes poches. Vous continuez à fouiller le bar avant de prendre une pause sur les chaises. Tu remarques qu’Anna semblent encore plus en détresse que tantôt. Keith remarque ton hausse de nervosité, mais tu lui dit que tout est correct.",
    image: "./assets/images/images_jeu/keymaster.png",
    boutons: [{ titre: "▶ Continuer", destination: "rouletterusse1" }],
  },
  bouteilles2: {
    titre: "Montre à personne",
    description:
      "▶ Tu décides d'inspecter les bouteilles. Peut-être que la solution se cache juste sous nos yeux ? En soulevant et en secouant chaque bouteille, tu remarques une carte suspecte sous l'une d’elles. Elle est petite et illustrée avec un symbole de clé. Confus, tu retournes la carte pour y trouver un court paragraphe. La clé de la maîtrise assure l'immunité, mais à quel prix ? Garde-la secrète, sinon le danger guette. Pris de panique, tu scrutes rapidement la pièce avant de glisser la carte dans l'une de tes poches. Anna et Steve reviennent dans le bar et vous prenez une pause sur les chaises. Tu remarques qu’Anna semblent encore plus en détresse que tantôt. ",
    image: "./assets/images/images_jeu/keymaster.png",
    boutons: [{ titre: "▶ Continuer", destination: "rouletterusse2" }],
  },
  rouletterusse1: {
    titre: "Roulette russe",
    description:
      "Déçus de ne pas trouver de sortie, vous décidez d’aller explorer d'autres pièces. Soudain, des barres métalliques bloquent la sortie, et une voix menaçante qui replace la musique jazz propose un jeu : la roulette russe. Steve doute de la présence d'une arme après son inspection de la pièce, mais la voix le corrige. Chacun doit boire un liquide inconnu dans les bouteilles à étiquettes jaunes, faute de quoi vous serez enfermés sans nourriture. Le tableau vert affiche les noms en ordre pour le jeu et Anna vomit après avoir bu du lait expiré, refusant de continuer tandis que tout le monde aille fini le leurs.",
    image: "./assets/images/images_jeu/roulette_russe.png",
    boutons: [
      { titre: "▶ Finir sa boisson", destination: "aidelait1" },
      { titre: "▶ La forcer à finir", destination: "forcelait1" },
    ],
  },
  rouletterusse2: {
    titre: "Roulette russe",
    description:
      "Déçus de ne pas trouver de sortie, vous décidez d’aller explorer d'autres pièces. Soudain, des barres métalliques bloquent la sortie, et une voix menaçante qui replace la musique jazz propose un jeu : la roulette russe. Steve doute de la présence d'une arme après son inspection de la pièce, mais la voix le corrige. Chacun doit boire un liquide inconnu dans les bouteilles à étiquettes jaunes, faute de quoi vous serez enfermés sans nourriture. Le tableau vert affiche les noms en ordre pour le jeu et Anna vomit après avoir bu du lait expiré, refusant de continuer tandis que tout le monde aille fini le leurs.",
    image: "./assets/images/images_jeu/roulette_russe.png",
    boutons: [
      { titre: "▶ Finir sa boisson", destination: "aidelait2" },
      { titre: "▶ La forcer à finir", destination: "forcelait2" },
    ],
  },
  forcelait1: {
    titre: "Aide pas appréciée",
    description:
      "Refusant de boire toi-même, tu forces Anna à finir la boisson pour sa survie, choquant les autres. Libérant la sortie, le groupe est plus préoccupé par ton comportement et t'isole dans le cabinet du bar. Tu te retrouves dans un tuyau menant à une pièce lugubre, condamné à la famine et à la mort.",
    image: "./assets/images/images_jeu/force_lait.png",
    boutons: [{ titre: "▶ Recommencer", destination: "debut" }],
  },
  forcelait2: {
    titre: "Aide pas appréciée",
    description:
      "Refusant de boire toi-même, tu obliges Anna à finir sa boisson pour sa survie, choquant les autres. Antoine, refusant de prendre ton côté pour tes actions, te traite avec mépris. Après avoir libéré la sortie, le groupe est profondément préoccupé par ton comportement et te confine dans le cabinet du bar. Tu te retrouves dans la même pièce où Antoine avait été trouvé, maintenant condamné à suivre son destin initial.",
    image: "./assets/images/images_jeu/force_lait.png",
    boutons: [{ titre: "▶ Recommencer", destination: "debut" }],
  },
  aidelait1: {
    titre: "Aide appréciée",
    description:
      "Tu décides de boire ta boisson, avalant gorgée après gorgée malgré le vomissement, tout ça pour aider Anna. Impressionnés, les autres se joignent à toi pour finir la boisson ensemble. Cette expérience vous rapproche, Roxie te félicite pour ton courage et te témoigne sa loyauté. Les barres de métal se rétractent, vous permettant de sortir et d'explorer d'autres pièces. Après avoir traversé plusieurs chambres et épreuves, Roxie t'emmène à l'écart pour exprimer ses inquiétudes concernant Anna, qui semble épuisée et stressée. Elle propose de la laisser se reposer et après discussion, vous réalisez que vous avez perdu le reste du groupe. La voix retentit dans les haut-parleurs et vous sépare dans des salles distinctes. Le jeu final va commencer !",
    image: "./assets/images/images_jeu/roxie_concerne.png",
    boutons: [{ titre: "▶ Continuer", destination: "regles1" }],
  },
  aidelait2: {
    titre: "Aide appréciée",
    description:
      "Tu décides de boire ta boisson, avalant gorgée après gorgée malgré le vomissement, tout ça pour aider Anna. Impressionnés, les autres se joignent à toi pour finir la boisson ensemble. Cette expérience vous rapproche, Roxie te félicite pour ton courage et te témoigne sa loyauté. Les barres de métal se rétractent, vous permettant de sortir et d'explorer d'autres pièces. Après avoir traversé plusieurs chambres et épreuves, Roxie t'emmène à l'écart pour exprimer ses inquiétudes concernant Anna, qui semble épuisée et stressée. Elle propose de la laisser se reposer et après discussion, vous réalisez que vous avez perdu le reste du groupe. La voix retentit dans les haut-parleurs et vous sépare dans des salles distinctes. Le jeu final va commencer !",
    image: "./assets/images/images_jeu/roxie_concerne.png",
    boutons: [{ titre: "▶ Continuer", destination: "regles2" }],
  },
  regles1: {
    titre: "Les règles",
    description:
      "Tu te trouves dans une pièce face à un écran diffusant une vidéo. La fille à l'écran explique les règles du jeu final. Il s'agit d'un vote à la majorité pour décider qui sera exécuté, mais ce n'est pas si simple. Chacun a trouvé des cartes avec des rôles différents : Keymaster, Sacrifice et Commoner. Le Commoner n'a pas de rôle spécial, tandis que les deux autres sont cruciaux. Le Keymaster n'a pas d'immunité réelle, mais si choisi, il condamne tout le monde à la mort. Le Sacrifice, en revanche, a besoin d'être choisi pour la mort s'il veut survivre, mais cela entraîne la mort de tous les autres. De plus, le Sacrifice a le pouvoir de sauver une autre personne avec lui.",
    image: "./assets/images/images_jeu/regles.png",
    boutons: [{ titre: "▶ Continuer", destination: "jeufinal1" }],
  },
  regles2: {
    titre: "Les règles",
    description:
      "Tu te trouves dans une pièce face à un écran diffusant une vidéo. La fille à l'écran explique les règles du jeu final. Il s'agit d'un vote à la majorité pour décider qui sera exécuté, mais ce n'est pas si simple. Chacun a trouvé des cartes avec des rôles différents : Keymaster, Sacrifice et Commoner. Le Commoner n'a pas de rôle spécial, tandis que les deux autres sont cruciaux. Le Keymaster n'a pas d'immunité réelle, mais si choisi, il condamne tout le monde à la mort. Le Sacrifice, en revanche, a besoin d'être choisi pour la mort s'il veut survivre, mais cela entraîne la mort de tous les autres. De plus, le Sacrifice a le pouvoir de sauver une autre personne avec lui.",
    image: "./assets/images/images_jeu/regles.png",
    boutons: [{ titre: "▶ Continuer", destination: "jeufinal2" }],
  },
  jeufinal1: {
    titre: "Jeu final",
    description:
      "Après avoir exposé les règles, la vidéo se termine et les portes s'ouvrent, révélant la salle de vote. Tous sont sous le choc, à l'exception de Steve, qui garde son calme apparent. Chacun prend place devant sa table et se regarde en silence, une atmosphère pesante pesant sur le groupe.",
    image: "./assets/images/images_jeu/jeufinal.png",
    boutons: [{ titre: "▶ Continuer", destination: "memoire" }],
  },
  jeufinal2: {
    titre: "Jeu final",
    description:
      "Après avoir exposé les règles, la vidéo se termine et les portes s'ouvrent, révélant la salle de vote. Tous sont sous le choc, à l'exception de Steve, qui garde son calme apparent. Chacun prend place devant sa table et se regarde en silence, une atmosphère pesante pesant sur le groupe. Steve semble sur le point de dire quelque chose, mais Antoine l'interrompt.",
    image: "./assets/images/images_jeu/jeufinal_antoine.png",
    boutons: [{ titre: "▶ Continuer", destination: "plan" }],
  },
  memoire: {
    titre: "le Keymaster",
    description:
      "Steve brise la glace avec assurance en déclarant : Je suis le Keymaster! La pièce s'embrase de murmures, tout le monde choqué par son affirmation. Tu te retrouves indécis quant à ta propre carte, hésitant à la révéler alors que tout le monde peut voir, même si ta mémoire est vague. Quelle carte avais-tu tirée ?",
    image: "./assets/images/images_jeu/steve_keymaster.png",
    boutons: [
      { titre: "▶ La carte Commoner", destination: "commoner" },
      { titre: "▶ La carte Keymaster", destination: "keymaster" },
    ],
  },
  plan: {
    titre: "Tombe à l'eau",
    description:
      "Antoine révèle avoir entendu la conversation entre Steve et Anna, dévoilant qu'Anna avait la carte Sacrifice, et Steve l'a prise pour la protéger. Il est suspecté de manipuler pour sortir avec Anna, qui était apparemment sa sœur. Cette révélation choque tout le monde, et Steve commence à paniquer, tentant de réfuter les allégations d'Antoine. Anna, incapable de mentir à ce stade, confirme ce que dit Antoine.Face à cette vérité, tu te retrouves contraint de voter Steve. Tu affirmes être le vrai Keymaster et le reste décide de jouer roche papier ciseaux afin de choisir.",
    image: "./assets/images/images_jeu/plan.png",
    boutons: [{ titre: "▶ Keith", destination: "keith" }],
  },
  commoner: {
    titre: "Vote final",
    description:
      "Tu assume que tu avais trouvé la carte du commoner et maintenant tout le monde est dans un impasse. Le temps coule et vous êtes maintenant forcé à voter sans discussion. Qui voter vous?",
    image: "./assets/images/images_jeu/jeufinal.png",
    boutons: [
      { titre: "▶ Keith", destination: "keith" },
      { titre: "▶ Steve", destination: "steve" },
      { titre: "▶ Anna", destination: "anna" },
      { titre: "▶ Roxie", destination: "roxie" },
    ],
  },
  keymaster: {
    titre: "Vote final",
    description:
      "Tu montres rapidement ta carte Keymaster pour prouver ton identité, soulignant que Steve a agi trop précipitamment, ce qui suscite des doutes sur ses intentions. Anna, culpabilisant, appuie tes dires en révélant que Steve lui a pris sa carte pour la sauver, étant frère et sœur. Steve panique et supplie d'être choisi. Le vote final repose sur toi.",
    image: "./assets/images/images_jeu/memoire.png",
    boutons: [
      { titre: "▶ Keith", destination: "keith" },
      { titre: "▶ Steve", destination: "pitie" },
      { titre: "▶ Anna", destination: "anna" },
      { titre: "▶ Roxie", destination: "roxie" },
    ],
  },
  keith: {
    titre: "Keith",
    description:
      "Vous avez voté pour Keith. Keith et Steve sont exécutés. Vous pouvez partir!",
    image: "./assets/images/images_jeu/keith_execution.png",
    boutons: [{ titre: "▶ Recommencer", destination: "debut" }],
  },
  anna: {
    titre: "Anna",
    description:
      "Vous avez voté pour Anna. Anna et Steve sont exécutés. Vous pouvez partir!",
    image: "./assets/images/images_jeu/anna_execution.png",
    boutons: [{ titre: "▶ Recommencer", destination: "debut" }],
  },
  roxie: {
    titre: "Roxie",
    description:
      "Vous avez voté pour Roxie. Roxie et Steve sont exécutés. Vous pouvez partir!",
    image: "./assets/images/images_jeu/roxie_execution.png",
    boutons: [{ titre: "▶ Recommencer", destination: "debut" }],
  },
  steve: {
    titre: "Gagnant",
    description:
      "Vous avez voté pour Steve. Steve était le sacrifice. Tout le monde est condamné à la mort sauf pour Steve et Anna.",
    image: "./assets/images/images_jeu/steve_gagnant.png",
    boutons: [{ titre: "▶ Recommencer", destination: "debut" }],
  },
  pitie: {
    titre: "Steve",
    description:
      "Vous avez voté pour Steve. Vous étiez le seul à voter pour Steve. Il est condamné à mort avec Keith, mais Steve te remercie pour ta pitié. Vous pouvez partir.",
    image: "./assets/images/images_jeu/steve_execution.png",
    boutons: [{ titre: "▶ Recommencer", destination: "debut" }],
  },
};

let titre = document.querySelector(".titre");
let description = document.querySelector(".description");
let image = document.querySelector(".imgmenu");
let bParent = document.querySelector(".choixmenu");

function goToChapter(chapter) {
  const chapitre = chapters[chapter];

  if (chapitre) {
    while (bParent.firstChild) {
      bParent.removeChild(bParent.firstChild);
    }
    
    titre.innerHTML = chapitre.titre;
    description.innerHTML = chapitre.description;
    image.src = chapitre.image;

    for (let i = 0; i < chapitre.boutons.length; i++) {
      const nouveauBtn = document.createElement("button");

      nouveauBtn.textContent = chapitre.boutons[i].titre;
      nouveauBtn.addEventListener("click", () => {
        goToChapter(chapitre.boutons[i].destination);
      });

      bParent.appendChild(nouveauBtn);
    }
  } else {
    console.log("Désolé,le chapitre n'existe pas.");
  }
}

goToChapter("debut");
