let answer = parseInt(Math.random() * 100);
let tryCount = 0;
let maxTryCount = 3;

function write(text) {
    document.getElementById("info").innerHTML = text;
}

function hide(id) {
    document.getElementById(id).style.display = "none";
}


function guess() {
    let userAnswer = document.getElementById("userAnswer").value;

    if (userAnswer === "") {
        write(`Вы не ввели число<br>Попробуйте еще раз. Введите число от 1 до 100.<br><i>Число оставшихся попыток: ${maxTryCount - tryCount}<i>`);
    } else {
        userAnswer = +userAnswer;
        tryCount++;
        if (userAnswer === answer) {
            write("<b>Поздравляю, вы угадали!</b>");
            hide("button");
            hide("userAnswer");
        } else if (tryCount >= maxTryCount) {
            write("Вы проиграли<br>Правильный ответ: " + answer);
            hide("button");
            hide("userAnswer");
        } else if (userAnswer > answer) {
            write(`Вы ввели слишком большое число<br>Попробуйте еще раз. Введите число от 1 до 100.<br><i>Число оставшихся попыток: ${maxTryCount - tryCount}<i>`);
        } else if (userAnswer < answer) {
            write(`Вы ввели слишком маленькое число<br>Попробуйте еще раз. Введите число от 1 до 100.<br><i>Число оставшихся попыток: ${maxTryCount - tryCount}<i>`);
        }
    }

}