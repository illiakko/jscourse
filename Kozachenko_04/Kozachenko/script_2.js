// get data from a user

let userNumber = prompt("Введите число");

//type convertion

userNumber = parseInt(userNumber);

// check for a propper type
if (typeof userNumber == "number" &&
    typeof userNumber != "null" &&
    !isNaN(userNumber)) {

    let factorial = 1;

    // factorial calculation
    for (i = 1; i <= userNumber; i++) {
        factorial = factorial * i;
    }

    console.log(`${factorial} - факториал числа ${userNumber}`)

} else {

    console.log("Введите число")

}
//12 minutes