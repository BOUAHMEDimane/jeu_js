
// Crée l'objet du modèle
let game = new Game();

/***************** CALLBACK ***********************************/


// Quand on clique sur un nom de département dans les choix à droite
let onClickDept = function(ev) {
  // Ne fait rien si le jeu n'a pas démarré
  if (! game.isRunning() ) return;
  // Indique à la vue que cet élément est sélectionné
  view.selectDept(ev.target);
  // Indique au jeu le nom du département qui a été choisi
  game.selectDept(ev.target.textContent);
}


// Quand on clique sur un élément de la figure, place la ville
// dans le visuel "selected", c'est à dire selectionné
// Ne fait rien si le jeu n'a pas démarré
// Ne réagit que si l'on a cliqué sur une ville ("H2")
let onclickFigure = function(ev) {
  console.log(ev.target.textContent);
  console.log(ev.target.tagName);
  ///////////////////////////////////////////////
  // TO DO
  ///////////////////////////////////////////////

}


// Quand on clique sur le bouton start, on intitialise le jeu et la vue
let onClickStart = function() {
  // Initialise la vue
  view.init();
  // Lance le jeu
  game.start();
}

// Quant on clique sur le bouton de validation de la sélection
let onClickValid = function() {
  // Est-ce que le couple de choix est valide ?
  if (game.isValid()) {
    // On a trouvé un nouveau couple : enlève les choix
    view.removeChoice();
    // Est-ce que le jeu est fini ?
    if (game.hasEnded()) {
      // Oui ! on affiche les résultat
      let score = game.getScore();
      view.showScore(score);
    }
  } else {
    // C'est une mauvaise proposition : déselectionne
    view.unselectCurrent();
  }
}

// Quant on clique sur le bouton de fin du jeu
let onClickEnd = function() {
  // On affiche les résultats
  view.showScore(game.getScore());
}



/***************** EVENEMENT ***********************************/

// Associe les callback aux objets DOM de la vue
view.DOM_start.addEventListener('click',onClickStart);
view.DOM_valid.addEventListener('click',onClickValid);
view.DOM_end.addEventListener('click',onClickEnd);
view.DOM_dept_choice.addEventListener('click',onClickDept);
view.DOM_figure.addEventListener('click',onclickFigure);
