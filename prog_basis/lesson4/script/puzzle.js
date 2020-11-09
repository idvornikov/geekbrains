function checkAnswer(inputId, answers) {
    let userAnswer = document.getElementById(inputId).value;
    userAnswer = userAnswer.toLowerCase();
    for (let i = 0; i < answers.length; i++) {
        if (userAnswer === answers[i]) {
            return true;
        }
    }
    return false;
}

function checkAnswers() {
    let score = 0;
    score += checkAnswer("userAnswer1", ["сон", "сноведение"]);
    score += checkAnswer("userAnswer2", ["морской", "укус акулы"]);
    score += checkAnswer("userAnswer3", ["шахматный", "мертвый"]);

    if (score === 1) {
        document.getElementById('notification').innerHTML = `Вы отгадали ${score} загадку`;
    } else {
        document.getElementById('notification').innerHTML = `Вы отгадали ${score} загадки`;
    }
    document.getElementById('notification-box').style.display = 'block';
    document.getElementById('box').style.display = 'none';
}

function showPuzzle() {
    document.getElementById('notification-box').style.display = 'none';
    document.getElementById('box').style.display = 'block';
}