// Script pour récupérer les réponses du quizz


// Bonnes réponses
let goodAnswers = ["rock_and_roll", "1956", "New York", "une nouvelle version d'une chanson existante", '"Cars"'];

console.log("Bonnes réponses :", goodAnswers);
// Fonction pour récupérer les réponses
function getAnswers(){
    answers = sessionStorage.getItem("answers");
    return answers ? JSON.parse(answers) : [];
}

// Fonction pour vérifier si deux listes sont exactement les mêmes
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) return false;
    }
    return true;
}


// Fonction pour vérifier les bonnes réponses
function checkAnswers() {
    userAnswers = getAnswers();
    return arraysEqual(userAnswers, goodAnswers);
}