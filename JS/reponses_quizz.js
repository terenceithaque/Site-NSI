// Script pour récupérer les réponses du quizz


// Bonnes réponses
let bonnesReponses = ["rock_and_roll", "1956", "new_york", "version", "cars"];

// Fonction pour récupérer les réponses
function getAnswers(){
    answers = sessionStorage.getItem("answers");
    return answers;
}