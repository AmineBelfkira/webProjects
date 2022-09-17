/*
const question = document.querySelector('#question');
const choices = document.querySelector('.choice-text');
const progressText = document.querySelector('#progressText');
const scoreText = document.querySelector('#score');
const progressBarFull = document.querySelector('#progressBarFull');


let currentQuestion = {};
let acceptiongAnswer = true;
let score = 0;
let questionCounter = 0;
let availabelQuestion = [];


let questions = [
    {
        question: "What is 52+15",
        choice1: '2',
        choice2: '4',
        choice3: '84',
        choice4: '56',
        answer: '56'
    },
    {
        question: "What is 52+15",
        choice1: '2',
        choice2: '4',
        choice3: '84',
        choice4: '56',
        answer: '56'
    },
    {
        question: "What is 52+15",
        choice1: '2',
        choice2: '4',
        choice3: '84',
        choice4: '56',
        answer: '56'
    },
]

const SCORE_POINTS = 100;
const MAX_QUESTION = 4;

startGame = () => {
    questionCounter = 0
    score = 0
    availabelQuestion = [...questions]
    getNewQuetion()
}

getNewQuetion = () => {
    if (availabelQuestion.length === 0 || questionCounter > MAX_QUESTION) {
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign(end.html)
    }

    questionCounter++
    progressText = "Question ${questionCounter} of ${MAX_QUESTIONS}"
    progressBarFull.style.width = '${questionCounter/MAX_QUESTIONS)*100}%'

    const questionsIndex = Math.floor(Math.random() * availabelQuestion.length)
    currentQuestion = availabelQuestion[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })
}
*/

var quiz = {
    "JS": [
        {
            "id": 1,
            "question": "It is easier to roll a stone up a sloping road than to lift it vertical upwards because?",
            "options": [
                {
                    "a": "work done in rolling is more than in lifting",
                    "b": "work done in lifting the stone is equal to rolling it",
                    "c": "work done in both is same but the rate of doing work is less in rolling",
                    "d": "work done in rolling a stone is less than in lifting it"


                }
            ],
            "answer": "work done in rolling a stone is less than in lifting it",
            "score": 0,
            "status": ""
        },
        {
            "id": 2,
            "question": "Which of the following measurements is not a unit of distance?",
            "options": [
                {
                    "a": "Ammeter",
                    "b": "Cubit",
                    "c": "Parsec",
                    "d": "angstrom"
                }
            ],
            "answer": "Ammeter",
            "score": 0,
            "status": ""



        },
        {
            "id": 3,
            "question": "Energy travels from Sun to Earch through",
            "options": [
                {
                    "a": "conduction",
                    "b": "convection",
                    "c": "radiation",
                    "d": "modulation"
                }
            ],
            "answer": "radiation",
            "score": 0,
            "status": ""
        },
        {
            "id": 4,
            "question": "Scalars are quantities that are described by _____________",
            "options": [
                {
                    "a": "Magnitude",
                    "b": "Direction",
                    "c": "Magnitude & Direction",
                    "d": "Motion"
                }
            ],
            "answer": "Magnitude",
            "score": 0,
            "status": ""
        },
        {
            "id": 5,
            "question": "Albert Einstein was awarded Nobel Prize for his path-breaking research and formulation of the:",
            "options": [
                {
                    "a": "Theory of Relavitity",
                    "b": "Laws of Photo-Electric Effect",
                    "c": "Principle of Wave-Particle Duality",
                    "d": "Theory of Critical Opalescence"
                }
            ],
            "answer": "Laws of Photo-Electric Effect",
            "score": 0,
            "status": ""
        },
        {
            "id": 6,
            "question": "Which of the following are components of Central Processing Unit (CPU)?",
            "options": [
                {
                    "a": "Arithmetic logic unit, Mouse",
                    "b": "Arithmetic logic unit, Control unit",
                    "c": "Arithmetic logic unit, Integrated Circuits",
                    "d": "Control Unit, Monitor"

                }
            ],
            "answer": "Arithmetic logic unit, Control unit",
            "score": 0,
            "status": ""
        },
        {
            "id": 7,
            "question": "One kilobyte (KB) is equal to",
            "options": [
                {
                    "a": "1,000 bits",
                    "b": "1,024 bytes",
                    "c": "1,024 megabytes",
                    "d": "1,024 gigabytes"
                }
            ],
            "answer": "1,000 bits",
            "score": 0,
            "status": ""
        },
        {
            "id": 8,
            "question": "The rules of a language is known as ____",
            "options": [
                {
                    "a": "Code",
                    "b": "Structure",
                    "c": "Procedure",
                    "d": "Syntax",

                }
            ],
            "answer": "Syntax",
            "score": 0,
            "status": ""
        },
        {
            "id": 9,
            "question": "Which of the following is a disadvantage of using JavaScript?",
            "options": [
                {
                    "a": "Client-side JavaScript does not allow the reading or writing of files.",
                    "b": "JavaScript can not be used for Networking applications because there is no such support available.",
                    "c": "JavaScript doesn't have any multithreading or multiprocess capabilities.",
                    "d": "All of the above."
                }
            ],
            "answer": "All of the above.",
            "score": 0,
            "status": ""
        },
        {
            "id": 10,
            "question": "The common name for the crime of stealing passwords is _______",
            "options": [
                {
                    "a": "spooling",
                    "b": "identity theft",
                    "c": "spoofing",
                    "d": "hacking ",

                }

            ],
            "answer": "spoofing",
            "score": 0,
            "status": ""
        },

    ]
}

let percentage = 25;
var quizApp = function () {
    this.score = 0;
    this.qno = 1;
    this.currentque = 0;
    var totalque = quiz.JS.length;
    this.displayQuiz = function (cque) {
        this.currentque = cque;
        if (this.currentque < totalque) {
            $("#tque").html(totalque);
            $("#previous").attr("disabled", false);
            $("#next").attr("disabled", false);
            $("#qid").html(quiz.JS[this.currentque].id + '.');
            $("#question").html(quiz.JS[this.currentque].question);
            $("#question-options").html("");
            for (var key in quiz.JS[this.currentque].options[0]) {
                if (quiz.JS[this.currentque].options[0].hasOwnProperty(key)) {
                    $("#question-options").append(
                        "<div class='form-check option-block'>" +
                        "<label class='form-check-label'>" +
                        "<input type='radio' class='form-check-input' name='option' id='q" + key + "' value='" + quiz.JS[this.currentque].options[0][key] + "'><span id='optionval'>" +
                        quiz.JS[this.currentque].options[0][key] +
                        "</span></label>"
                    );
                }
            }
        }
        if (this.currentque <= 0) {
            $("#previous").attr("disabled", true);
        }
        if (this.currentque >= totalque) {
            $('#next').attr('disabled', true);
            for (var i = 0; i < totalque; i++) {
                this.score = this.score + quiz.JS[i].score;
            }
            return this.showResult(this.score);
        }
    }
    this.showResult = function (scr) {
        $("#result").addClass('result');
        $("#result").html("<h1 class='res-header'>Total Score: &nbsp;" + scr + '/' + totalque + "</h1>");
        for (var j = 0; j < totalque; j++) {
            var res;
            if (quiz.JS[j].score == 0) {
                res = '<span class="wrong">' + quiz.JS[j].score + '</span><i class="fa fa-remove c-wrong"></i>';
            } else {
                res = '<span class="correct">' + quiz.JS[j].score + '</span><i class="fa fa-check c-correct"></i>';
            }
            $("#result").append(
                '<div class="result-question"><span>Q ' + quiz.JS[j].id + '</span> &nbsp;' + quiz.JS[j].question + '</div>' +
                '<div><b>Correct answer:</b> &nbsp;' + quiz.JS[j].answer + '</div>' +
                '<div class="last-row"><b>Score:</b> &nbsp;' + res +
                '</div>'
            );
        }
        percentage = 25;
    }
    this.checkAnswer = function (option) {
        var answer = quiz.JS[this.currentque].answer;
        option = option.replace(/</g, "&lt;") //for <
        option = option.replace(/>/g, "&gt;") //for >
        option = option.replace(/"/g, "&quot;")
        if (option == quiz.JS[this.currentque].answer) {
            if (quiz.JS[this.currentque].score == "") {
                quiz.JS[this.currentque].score = 1;
                quiz.JS[this.currentque].status = "correct";
            }
        } else {
            quiz.JS[this.currentque].status = "wrong";
        }
    }
    this.changeQuestion = function (cque) {
        this.currentque = this.currentque + cque;
        this.displayQuiz(this.currentque);
    }
}
var jsq = new quizApp();
var selectedopt;
$(document).ready(function () {
    jsq.displayQuiz(0);
    $('#question-options').on('change', 'input[type=radio][name=option]', function (e) {
        //var radio = $(this).find('input:radio');
        $(this).prop("checked", true);
        selectedopt = $(this).val();
    });
});
$('#next').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
        jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(1);
    $("#tag").fadeIn({
        duration: 700,
        easing: "linear",
        step: function (now, fx) {
            $(this).css("top", -55 * now + "px");
        }
    }).fadeOut({
        duration: 300,
        step: function (now, fx) {
            $(this).css("top", -55 * (2 - now) + "px");
        }
    });
});
$('#previous').click(function (e) {
    e.preventDefault();
    if (selectedopt) {
        jsq.checkAnswer(selectedopt);
    }
    jsq.changeQuestion(-1);
    $(".lol").fadeIn({
        duration: 700,
        easing: "linear",
        step: function (now, fx) {
            $(this).css("top", -55 * now + "px");
        }
    }).fadeOut({
        duration: 300,
        step: function (now, fx) {
            $(this).css("top", -55 * (2 - now) + "px");
        }
    });
});