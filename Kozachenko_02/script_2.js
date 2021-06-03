//obtain user data
userInput = prompt("Испытай свою удачу!");

//converting types
userInput = parseFloat(userInput);

// check for a number
if (typeof userInput == "number" && isNaN(userInput) !== true) {
    userInput = userInput + 100;
    console.log("Ваш выиграш составил: " + userInput);

} else {
    console.log("Сегодня не ваш день:(");
}

// 20 minutes