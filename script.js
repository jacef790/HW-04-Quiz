var startBtnEl = document.getElementById('start-btn');
var questionContainerEl = document.getElementById('question-container');
var nextButtonEl = document.getElementById('next');
var currentQues;
var shuffleQues;
start.addEventListener('click', startQuiz);
nextButtonEl.addEventListener('click', nextQues());


function startQuiz() {
    start.classList.add('hide');
    questionContainerEl.classList.remove('hide');
    currentQuesIndex = 0;
    nextQues();


}

function nextQues() {
    
    // nextButtonEl.classList.remove('hide');

}

function selectAnswer() {

}

var questions = [
    {
    question: 'What is the Best Sandwich?',
        answer: [
            {text: 'Ham and Cheese', correct: false},
            {text: 'BLT', correct: false},
            {text: 'PBJ', correct: true},
            {text: 'Chicken Salad', correct: false}
        ]

    },
    {
    question: 'How Many Super Bowls Have the Dallas Cowboys Won?',
        answer: [
            {text: '2', correct: false},
            {text: '3', correct: false},
            {text: '4', correct: false},
            {text: '5', correct: true}
        ]

    },
    {
    question: 'Which is the Best Call of Duty?',
        answer: [
            {text: 'Modern Warfare 2', correct: false},
            {text: 'Black Ops 2', correct: true},
            {text: 'Black Ops', correct: false},
            {text: 'Advanced Warfare ', correct: false}
        ]

    },
    {
    question: 'I am Keyser Soze?',
        answer: [
            {text: 'True', correct: false},
            {text: 'False', correct: false},
            {text: 'True, but again', correct: true},
            {text: 'False, but maybe not', correct: false}
        ]

    },
    {
    question: 'Which is the Scariest?',
        answer: [
            {text: 'Clowns', correct: true},
            {text: 'Zombies', correct: false},
            {text: 'Vampires', correct: false},
            {text: 'Zombie ClownPires', correct: false}
        ]

    }
]