import fruitList from "./data.js";
import {executeGame, wordArray, validateAnswer, answerConditions} from "./functions.js"

import readAnswer from 'readline-sync'

executeGame(); 

let wordConvertedToArray = wordArray(fruitList);

var word = wordConvertedToArray.join("");
 
var hiddenWord = [];
 
for (let i = 0; i < word.length; i++) {
    if (i == 0) {
        hiddenWord[i] = wordConvertedToArray[i];
    } else
    hiddenWord[i] = "-";
};

console.log("\nFruit: " + hiddenWord.join(''));
 
let answerCount = 0;
let wrongAnswerCount = 0;
let answer = "";
let validatedAnswer = null;
 
while(answerCount < (word.length -1) && wrongAnswerCount < 4) {  
 
    answer = readAnswer.question("\nAnswer: ");
    
    answerConditions(answer);
    validatedAnswer = validateAnswer(answer, wordConvertedToArray);
    
    if (validatedAnswer == true) {  
        for (let j = 0; j < word.length; j++) {  
            if (answer == wordConvertedToArray[j]) {
                hiddenWord[j] = answer;
                answerCount += 1;     
            }; 
        };
        console.log("\nFruit: " + hiddenWord.join(""));
    } else {
        wrongAnswerCount += 1;
        console.log("\nWrong answer, try again!");
        console.log("\nFruit: " + hiddenWord.join(""));
    };
};
 
if (wrongAnswerCount == 4) {
    console.log("\nYou lost, try again!");
} else {
    console.log("\n----------------- CONGRATULATIONS! ----------------- ")
    console.log("You won!! The name of the fruit is: " + hiddenWord.join(""));
    console.log("---------------------------------------------")
};
