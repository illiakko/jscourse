//get data from a user
let userInput = prompt("Введите число от 0 до 59");

//type convertion to number
userInput = parseInt(userInput);

//define a proper type and range before putting a number to the particular quarter

if (typeof userInput == "number" &&
    isNaN(userInput) !== true &&
    userInput <= 59 &&
    userInput >= 0) {

    // put userInput to the particular quarter

    if (userInput >= 0 && userInput <= 15) {
        console.log("1 четверть");
    } else if (userInput >= 16 && userInput <= 30) {
        console.log("2 четверть");
    } else if (userInput >= 31 && userInput <= 45) {
        console.log("3 четверть")
    } else {
        console.log("4 четверть")
    }

} else {
    console.log("Необходимо ввести число от 0 до 59");
}

//35 minutes