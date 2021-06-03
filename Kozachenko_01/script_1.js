
//просим ввести два числа через промпт

let promptNumberOne = prompt("Введите первое из двух чисел");
let promptNumberTwo = prompt("Введите второе из двух чисел");

//приводим входные данные к числу
promptNumberOne = Number(promptNumberOne);
promptNumberTwo = Number(promptNumberTwo);

//если ввели оба ввода числа и они не NaN - выдаём результат, нет - пишем ошибку
// еще нужно добавить проверку на пустую строку но её пока не придумал

if (typeof promptNumberOne === "number" && typeof promptNumberTwo === "number" && !isNaN(promptNumberOne) && !isNaN(promptNumberTwo) && promptNumberOne == !0 && promptNumberTwo == !0) {
    window.alert(
        `1) ${promptNumberOne} + ${promptNumberTwo} = ${promptNumberOne + promptNumberTwo} \r\n
         2) ${promptNumberOne} - ${promptNumberTwo} = ${promptNumberOne - promptNumberTwo} \r\n
         3) ${promptNumberOne} * ${promptNumberTwo} = ${promptNumberOne * promptNumberTwo} \r\n
         4) ${promptNumberOne} / ${promptNumberTwo} = ${promptNumberOne / promptNumberTwo} \r\n`);
    //что-то оно не хочет при выводе в алерте по центру выравниваться
} else {
    window.alert("Похоже, что вы ввели не числа. Обновите страницу и попробуйте ещё раз.");
}

//заняло 50 минут 