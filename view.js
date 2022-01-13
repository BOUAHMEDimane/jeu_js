
// Definition de la vue, ses objets DOM et quelques méthodes

let view = {
  // Definition du DOM du bouton de début du jeux, et de selection
  DOM_start: document.body.querySelector("button[name=start]"),
  DOM_valid: document.body.querySelector("button[name=valid]"),
  DOM_end: document.body.querySelector("button[name=end]"),
  // Definition de la liste des objets DOM des noms de départements
  DOM_depts: document.getElementsByTagName("h1"),
  // DOM associé à la carte complète
  DOM_figure: document.getElementsByTagName("figure")[0],
  // DOM de la liste des choix des départements
  DOM_dept_choice: document.getElementsByTagName("ul")[0],
  // DOM qui affiche le résultat
  DOM_article: document.getElementsByTagName("article")[0],
  // Objet DOM selectionnés
  currentSelectedDept: undefined,
  currentSelectedVille: undefined
};

// Initialise la vue
view.init = function() {
  // Rend invisible les noms des départements

  ///////////////////////////////////////////////
  // TO DO
  ///////////////////////////////////////////////

  let villes = this.DOM_figure.getElementsByTagName("h2");
  // Rend visible et non sélectionnés toutes les villes
  for(let i=0; i<villes.length; i++) {
    villes[i].style.visibility = 'visible';
    villes[i].classList.remove('selected');
  }
  let depts = document.getElementsByTagName("li");
  // Rend visible et non sélectionnés tous les départements
  for(let i=0; i<depts.length; i++) {
    depts[i].style.visibility = 'visible';
    depts[i].classList.remove('selected');
  }
  // Rend invisible la zone des résultats
  this.DOM_article.style.visibility = "hidden";
  // Intialise les deux infos de sélection
  this.currentSelectedDept = undefined;
  this.currentSelectedVille = undefined;
}

// Sélectionne une ville e (élément DOM)
view.selectVille = function(e) {
  // Examine si une ville est déjà sélectionnée
  if (this.currentSelectedVille != undefined ) {
    // Désélectionne cet élément
    this.currentSelectedVille.classList.remove('selected');
  }
  // Sélectionne cet élément
  e.classList.add('selected');
  // Conserve l'élément sélectionné
  this.currentSelectedVille = e;
}

// Sélectionne un département e (élément DOM)
view.selectDept = function(e) {

  ///////////////////////////////////////////////
  // TO DO
  ///////////////////////////////////////////////

}

// Rend invisible les éléments actuellement sélectionnés
view.removeChoice = function() {
  this.currentSelectedDept.style.visibility = "hidden";
  this.currentSelectedVille.style.visibility = "hidden";
  this.currentSelectedDept = undefined;
  this.currentSelectedVille = undefined;
}

// Dé-sélectionne les éléments actuellement sélectionnés
view.unselectCurrent = function() {

  ///////////////////////////////////////////////
  // TO DO
  ///////////////////////////////////////////////


}

// Affiche le score dans la balise article de la vue
// Le paramètre score est un objet avec les 3 attributs suivants
// nbTry, nbSuccess et nbToFind à placer dans les balises output
// Voir la méthode getScore() du modèle
view.showScore = function(score) {

  ///////////////////////////////////////////////
  // TO DO
  ///////////////////////////////////////////////


}
