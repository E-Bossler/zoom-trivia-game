// REQUIRE THE QUESTIONS
const currentEventQuestions = require('../../../quiz/currentevents');
const herstoryQuestions = require('../../../quiz/herstory');
const hollywoodyQuestions = require('../../../quiz/hollywoody');
const lostAndFoundQuestions = require('../../../quiz/lostandfound');
const scienceQuestions = require('../../../quiz/science');
const sportsBallQuestions = require('../../../quiz/sportsball');

// GLOBAL VARIABLES 



// DOM VARIABLES

// GLOBAL FLUNCTIONS 



function playRound(questions) {


    for (let i=0; i<questions.length; i++) {
        let thisQuestion = questions[i].question;
        
        setTimeout(
            () => console.log('next question'),
            60000
        )
        
    }
};

function reviewAnswers(questions) {
    let thisRoundsQuestions = [];
    let thisRoundsAnswers = [];
    let thisRoundsExplanations = [];

    for (let i=0; i<questions.length; i++) {
        let thisQuestion = questions[i].question;
        let thisAnswer = questions[i].answer;
        let thisExplanation = questions[i].explanation;
        thisRoundsQuestions.push(thisQuestion);
        thisRoundsAnswers.push(thisAnswer);
        thisRoundsExplanations.push(thisExplanation)
    };

    for (let i=0; i< thisRoundsQuestions.length; i++) {

    }
}

