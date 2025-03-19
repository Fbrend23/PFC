// Sélection des éléments HTML
const choices = document.querySelectorAll("ul.flex li"); // Récupère les <li>
const winnerDisplay = document.getElementById("winner");
const scorePlayerDisplay = document.getElementById("scorePlayer");
const scoreCPUDisplay = document.getElementById("scoreCPU");
const cpuChoiceDisplay = document.getElementById("cpuChoice");

// Initialisation des scores
let scorePlayer = 0;
let scoreCPU = 0;

// Mapping des ID en choix
const choicesMap = {
    rock: "pierre",
    paper: "feuille",
    scissors: "ciseaux"
};

// Fonction qui gère le clic sur un choix
choices.forEach(choice => {
    choice.addEventListener("click", (event) => {
        const playerChoice = choicesMap[event.target.id]; // Récupère le choix du joueur
        const cpuChoice = getRandomChoice(); // Choix aléatoire de l'ordinateur

        // Détermine le gagnant
        const result = determineWinner(playerChoice, cpuChoice);

        // Mise à jour du score et affichage du gagnant
        updateGame(result, playerChoice, cpuChoice);
    });
});

// Fonction pour obtenir un choix aléatoire pour l'ordinateur
function getRandomChoice() {
    const values = Object.values(choicesMap);
    return values[Math.floor(Math.random() * values.length)];
}

// Fonction pour déterminer le gagnant
function determineWinner(player, cpu) {
    if (player === cpu) {
        return "Égalité";
    }

    if (
        (player === "pierre" && cpu === "ciseaux") ||
        (player === "feuille" && cpu === "pierre") ||
        (player === "ciseaux" && cpu === "feuille")
    ) {
        scorePlayer++;
        return "Joueur";
    } else {
        scoreCPU++;
        return "Ordinateur";
    }
}

// Fonction pour mettre à jour l'affichage
function updateGame(result, playerChoice, cpuChoice) {
    cpuChoiceDisplay.textContent = ` ${cpuChoice}`;
    winnerDisplay.textContent = `${result}`;
    scorePlayerDisplay.textContent = scorePlayer;
    scoreCPUDisplay.textContent = scoreCPU;
}
