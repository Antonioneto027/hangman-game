import fruitList from "./data.js";
import readAnswer from 'readline-sync'

const wordIndex = () => {
    return Math.floor(Math.random() * fruitList.length); 
}

let wordPosition = wordIndex();
let wordLength = fruitList[wordPosition].length;

let wordArray = (list) => {
    let word = list[wordPosition];
    var arrayWord = [];
    for (let i = 0; i < word.length; i++) {
        arrayWord[i] = word[i];
    };
    return arrayWord;
};

let executeGame = () => { 
    console.log("\n----------- Hangman Game --------") 
    console.log("\nName of the fruit with " + wordLength + " letters.");
    let word = fruitList[wordPosition];
};

let validateAnswer = (answer, word) => {  
    let correctAnswer = undefined; 
    for (let i = 0; i < word.length; i++) {
        if (answer == word[i]) {
            correctAnswer = true;
        }
    }
    return correctAnswer;
};

let answerConditions = (answer) => {
    while (!/^[a-zA-Z]$/.test(answer)) {
        console.log("\nInvalid value, please enter only one letter!");
        answer = readAnswer.question("\nAnswer: ");
        answerConditions(answer);
        validatedAnswer = validateAnswer(answer, wordConvertedToArray);
    }
};

export {executeGame, wordIndex, wordArray, validateAnswer, answerConditions};
