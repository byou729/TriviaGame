window.onload = function () {
    $("#start").on("click", countDownTimer.start);
};

var intervalId;

var clockRunning = false;

var countDownTimer = {
    time: 30,
    start: function () {
        $("#time-left").text("00:30");
        if (!clockRunning) {
            intervalId = setInterval(countDownTimer.count, 1000);
            clockRunning = true;
        }
    },

    count: function () {
        countDownTimer.time--;
        var converted = countDownTimer.timeConverter(countDownTimer.time);
        console.log(converted);
        $("#time-left").text(converted);
    },

    timeConverter: function () {
        var minutes = Math.floor(t / 60);
        var seconds = t - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }

        if (minutes === 0) {
            minutes = "00";
        }
        else if (minutes < 10) {
            minutes = "0" + minutes;
        }

        return minutes + ":" + seconds;
    },

    correctAnswers: function () {
        correct++;
        $("correct-answers").text(correct);
    },

    incorrectAnswers: function () {
        incorrect++;
        $("incorrect-answers").text(incorrect);
    },

    ananswered: function () {
        unanswered++;
        $("unanswered").text(unanswered);
    },

    timeup: function () {
        if (time = 0) {
            $("#correct-answers").text
        }
    }
}

var correct = 0;
var incorrect = 0;
var unanswered = 0;
var q1 = {
    question: 'What is the original name of the Astros?',
    possibleAnswers: ['A. Houston Colt .45s',
        'B. Houston Colts',
        'C. Houston Guns',
        'D. They have always been the Astros'],
    flags: [true, false, false, false],
    answer: 'A. Houston Colt .45s'
};

var q2 = {
    question: 'What is the name of the uniform that was used in some way from 1975 to 1993?',
    possibleAnswers: ['A. Rainbow Guts',
        'B. Rainbow',
        'C. Rainbow Stripes',
        'D. Colorful Rainbow'],
    flags: [false, true, false, false],
    answer: 'B. Rainbow'
}

var q3 = {
    question: 'Which seasons was Leo Durocher manager?',
    possibleAnswers: ['A. 1972-1973',
        'B. 1941-1946',
        'C. 1988-1990',
        'D. 1955-1960'],
    flags: [true, false, false, false],
    answer: 'A. 1972-1973'
}

var q3 = {
    question: 'Which seasons was Leo Durocher manager?',
    possibleAnswers: ['A. 1972-1973',
        'B. 1941-1946',
        'C. 1988-1990',
        'D. 1955-1960'],
    flags: [true, false, false, false],
    answer: 'A. 1972-1973'
}

var q4 = {
    question: 'Which jersey number was the first one retired?',
    possibleAnswers: ['A. 32',
        'B. 25',
        'C. 49',
        'D. 24'],
    flags: [true, false, false, false],
    answer: 'A. 32'
}

var questionArray = [q1, q2, q3, q4];
function loadQuestion(questionSelection) {
    countDownTimer.reset();
    $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
    $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
    $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
    $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
    $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
};

function startGame() {
    index = 0;
    $('.questions').append('<button id="start">Start</button>');
    $('#start').on('click', function () {
        $(this).hide();
        countDownTimer.start();
        loadQuestion(index);
    });
}

function correctAnswers() {
    correct++;
};

function incorrectAnswers() {
    incorrect++;
};

function unanswered() {
    unanswered++;
};

function results() {
    $('.questions').empty();
    $('.questions').appedn("<h2><p>" + "All Done!" + "</p></h2>")
    $('.questions').append("<h2><p>" + "Correct Answers:" + correct + "</p></h2>");
    $('.questions').append("<h2><p>" + "Incorrect Answers:" + incorrect + "</p></h2>");
    $('.questions').append("<h2><p>" + "Incorrect Answers:" + unanswered + "</p></h2>");
    countDownTimer.stop();
    $('.timer').empty();
}

startGame();

$('.choice').on('click', function () {
    if (id == 'buttonA') {
        var chosenAnswer = 'A';
    } else if (id == 'buttonB') {
        chosenAnswer = 'B';
    } else if (id == 'buttonC') {
        chosenAnswer = 'C';
    } else if (id == 'buttonD') {
        chosenAnswer = 'D';
    };

    if ((chosenAnswer == 'A') && (questionArray[index].flags[0] == true)) {
        correctAnswers();
    } else if (chosenAnswer == 'A') {
        incorrectAnswers();
    }
    if ((chosenAnswer == 'B') && (questionArray[index].flags[1] == true)) {
        correctAnswers();
    } else if (chosenAnswer == 'B') {
        incorrectAnswers();
    }
    if ((chosenAnswer == 'C') && (questionArray[index].flags[2] == true)) {
        correctAnswers();
    } else if (chosenAnswer == 'C') {
        incorrectAnswers();
    }
    if ((chosenAnswer == 'D') && (questionArray[index].flags[3] == true)) {
        correctAnswers();
    } else if (chosenAnswer == 'D') {
        incorrectAnswers();
    }

    if (!chosenAnswer) {
        unanswered();
    }

    $(".questions").text('');
    $("#buttonA").text('');
    $("#buttonB").text('');
    $("#buttonC").text('');
    $("#buttonD").text('');
});


