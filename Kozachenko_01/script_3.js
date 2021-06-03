//вводим числа в промпт
let promptFirstNumber = prompt("Введите первое из трёх чисел");
let promptSecondNumber = prompt("Введите второе из трёх чисел");
let promptThirdNumber = prompt("Введите третье из трёх чисел");

//приводим входные данные к числу
promptFirstNumber = Number(promptFirstNumber);
promptSecondNumber = Number(promptSecondNumber);
promptThirdNumber = Number(promptThirdNumber);

// проверка на число как в задаче 1 и вывод среднего арифметического

if (typeof promptFirstNumber === "number" && typeof promptSecondNumber === "number" && typeof promptThirdNumber === "number"
    && !isNaN(promptFirstNumber) && !isNaN(promptSecondNumber) && !isNaN(promptThirdNumber)) {
    window.alert(
        `Среднее арифметическое ваших чисел: ${(promptFirstNumber + promptSecondNumber + promptThirdNumber) / 3}`);
} else {
    window.alert("Похоже, что вы ввели не числа. Обновите страницу и попробуйте ещё раз.");
}

// заняло 15 минут