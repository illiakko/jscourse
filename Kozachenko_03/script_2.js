//get a number from a user

let userNumber = prompt("Введите друхзначное число");

//type convertion to number

userNumber = parseInt(userNumber);

//check for a propper type and range

if (typeof userNumber == "number" &&
    isNaN(userNumber) !== true &&
    userNumber >= 10 &&
    userNumber <= 99) {

    // define first and second digit
    secondDigit = userNumber % 10;
    firstDigit = (userNumber - secondDigit) / 10;

    // compare first and second digit
    // but first - aren't they equal?
    if (secondDigit !== firstDigit) {
        (secondDigit > firstDigit) ? console.log("Вторая цифра больше") : console.log("Первая цифра больше");
    } else
        console.log("Обе цифры равны")

} else {
    console.log("Двухзначное число - это от 10 до 99");
}

//30 minutes