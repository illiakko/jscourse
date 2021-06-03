//находим теги для отображения времени
firstDigitObj = document.getElementById("firstDigit");
secondDigitObj = document.getElementById("secondDigit");


let count = 0;

// таймер
function timer() {

    count = count + 1
    secondDigitObj.innerText = count; // выводим секунды

    if (count % 60 === 0) {
        secondDigitObj.innerText = 0; // минута закончилась, табло секунд обнулилось
        firstDigitObj.innerText = parseInt(firstDigitObj.innerText) + 1; // минутка добавилась 
        count = 0; // начинаем счетать секунды поновой

    }

}




