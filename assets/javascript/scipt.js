//when the "Begin" button is selected the quiz starts
// the <p> content is replaced by a question
// the single button is replaced by 4 buttons with answers
// the timer begins with 60 seconds
//when choosing incorrect answer the your score is reduced by 10 points
//when time runs out your score is displayed and logged to highscores list



// variables

// question array
var questions = [

    {
        content: 'What type of function can be pass as an argument in other functions?',
        answerChoices: ['callback', 'hollerback', 'arrow', 'anonymous'],
        answer: 'callback'
    },

    {
        content: 'What does .concat do to a string?',
        answerChoices: ['searches a string for a specified value', 'determines the length of a string', 'combines strings together', 'changes a string to all lowercase'],
        answer: 'combines strings together'
    },

    {
        content: 'What is the name of the special character(s) that performs a task within JavaScript?',
        answerChoices: ['operator', 'conditional', 'function', 'event'],
        answer: 'operator'
    },

    {
        content: 'What statement would you call to stop the execution of a function?',
        answerChoices: ['stop', 'return', 'end', 'halt'],
        answer: 'return'
    },
];


var quizStartButton = document.querySelector('#startButton');
var timerCount = document.querySelector('.timer');
var startContent = document.querySelector('#startArea')
var questionContent = document.querySelector('#questionArea');

//amount to subtract if incorrectly answered
var penalty = 10;
var timerClock;
var timeRemaining;
var highscore;

//to access the array of questions
var questionIndex = 0

//function begins, timer starts, button disabled, runs quizQuestions function
function beginQuiz() {
    timeRemaining = 60;
    startContent.classList.add('hide')

    startTimer();
    renderQuestions();

}



//starts the timer; clears space and relaces it with a timer ticking down from 60
function startTimer() {
    timerClock = setInterval(function () {
        timeRemaining--;
        timerCount.textContent = timeRemaining;
        //stopping the timer
        if (timeRemaining === 0) {
            window.clearInterval(timerClock);
            timerCount.textContent = "Out of Time!";
            return
        }
    }, 1000);


}

//as timer starts quiz questions appear.
//space is cleared, new empty element is created, then filled with random question from array
function renderQuestions() {
    // questionContent.textContent = "";
    // createUl.textContent = "";
    // for (var i = 0; i < questionIndex; i++) {
    //     var playersQuestion = questions[questionIndex].content;
    //     var playersOptions = questions[questionIndex].answerChoices;
    //     questionContent.textContent = playersQuestion;
    // }
    // create the elements that will populate the container
    var questionTitle = document.createElement('h2')
    questionTitle.textContent = questions[questionIndex].content

    questionContent.append(questionTitle)

    var answerContent = document.createElement('div')

    for (var i = 0; i < questions[questionIndex].answerChoices.length; i++) {
        //    create button
        var btn = document.createElement('button');
        // add content to the buton
        btn.textContent = questions[questionIndex].answerChoices[i]

        btn.addEventListener('click', click)

        // append the button
        answerContent.append(btn)
    }

    // append the div to the questionContent

    questionContent.append(answerContent)
}

function click(event) {
    console.log(event.target.textContent);
    if(event.target.textContent !== questions[questionIndex].answer){
        timeRemaining = timeRemaining - penalty;
        timerCount.textContent = timeRemaining;
    }


}

//event listener for button click to start
quizStartButton.addEventListener("click", beginQuiz);






//NOTES TO MYSELF THAT PROBABLY DON'T MAKE SENSE TO ME BUT HOPEFULLY WILL

//THIS FUNCTION I'VE MERGED NTO RENDERQUESTIONS
// function quizQuestions() {
//     questionContent.textContent = "";

// }


// TO MAYBE RANDOMIZE QUESTIONS BUT DO I REALLY WANT TO?
// questionToAnswer = questions[Math.floor(Math.random())]






















// GIVEN I am taking a code quiz
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score