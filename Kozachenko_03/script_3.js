//get a number from a user

let userNumber = prompt("Введите трехзначное число");

//type convertion to number

userNumber = parseInt(userNumber);

//check for a propper type and range

if (typeof userNumber == "number" &&
    isNaN(userNumber) !== true &&
    userNumber >= 100 &&
    userNumber <= 999) {

    // get each digit
    base = userNumber % 100;
    thirdDigit = base % 10;
    base2 = (userNumber - thirdDigit) / 10;
    secondDigit = base2 % 10;
    firstDigit = (base2 - secondDigit) / 10;

    console.log(firstDigit);
    console.log(secondDigit);
    console.log(thirdDigit);

    // check if all digits are equal

    base_common = (firstDigit + secondDigit + thirdDigit) / 3;

    if (firstDigit === base_common &&
        secondDigit === base_common &&
        thirdDigit === base_common) {
        console.log("Все цифры равны");
    } else {
        console.log("Число состоит из разных цифр.")
    }

    // check if some digits are equal

    if (firstDigit === secondDigit ||
        firstDigit === thirdDigit ||
        secondDigit === thirdDigit) {
        console.log("В числе есть одинаковые цифры.");
    } else {
        console.log("Все цифры отличаются.")
    }

    // summ of digits
    summ = firstDigit + secondDigit + thirdDigit;
    console.log(summ);




} else {
    console.log("Двухзначное число - это от 100 до 999");
}

//52 minutes