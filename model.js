


  /**
  * La classe du jeux
  */
  class Game {

    constructor() {
      this.running = false; // Pour savoir si le jeux fonctionne
      this.selectedDept = "";
      this.selectedVille = "";
      // Liste des préfectures par département
      this.data = {
        "Allier": "Moulins",
        "Puy-de-Dôme": "Clermont-Ferrand",
        "Cantal": "Aurillac",
        "Loire": "Saint-Etienne",
        "Haute-Loire": "Le Puy-en-Velay",
        "Rhône": "Lyon",
        "Ain": "Bourg-en-Bresse",
        "Isère": "Grenoble",
        "Ardèche": "Privas",
        "Drôme": "Valence",
        "Savoie":"Chambéry",
        "Haute-Savoie": "Annecy"
      }
      // Nombre d'essais
      this.nbTry = 0;
      // Nombre de succès
      this.nbSuccess = 0;
      // Nombre de couples à trouver
      this.nbToFind = Object.keys(this.data).length;
    }

    // Démarre le jeu
    start() {
      // Le jeu fonctionne
      this.running = true;
      // Nombre d'essais
      this.nbTry = 0;
      // Nombre de succès
      this.nbSuccess = 0;
    }

    // Informe le contrôleur que le jeu est en train de tourner
    // Retourne un booléen
    isRunning() {

      ///////////////////////////////////////////////
      // TO DO
      ///////////////////////////////////////////////

      return false;
    }

    // Note la selection d'un département par l'utilisateur
    selectDept(dept) {
      this.selectedDept = dept;
    }

    // Note la selection d'une ville par l'utilisateur
    selectVille(ville) {

      ///////////////////////////////////////////////
      // TO DO
      ///////////////////////////////////////////////

    }

    // Retourne vrai si le choix est valide
    isValid() {
      // Incrémente le nombre d'essais
      this.nbTry++;
      let result = this.data[this.selectedDept] === this.selectedVille;
      if (result) {
        // Incrémente le nombre de succès
        this.nbSuccess++;
      }
      return result;
    }

    // Retourne vrai si le jeux est fini
    hasEnded() {
      // Le jeux est fini si l'on a trouvé tous les couples

      ///////////////////////////////////////////////
      // TO DO
      ///////////////////////////////////////////////

      return false;
    }

    // Retourne le score obtenu
    // C'est aussi la fin du jeux
    getScore() {
      this.running = false;
      return {'nbTry': this.nbTry,'nbSuccess': this.nbSuccess,'nbToFind': this.nbToFind };
    }
  }
