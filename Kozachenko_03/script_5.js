//get data from a user
let sixDigitNumber = prompt("Введите шестизначное число");

// type convertion
sixDigitNumber = parseInt(sixDigitNumber);

if(typeof sixDigitNumber == "number" &&
 isNaN(sixDigitNumber) !== true &&
 sixDigitNumber >= 100000 && sixDigitNumber <= 999999){
    
    // split a number on two halfs
    lastThreeDigits = sixDigitNumber % 1000;
    firstThreeDigits = (sixDigitNumber - lastThreeDigits) / 1000;

    //decompile first three digits
    thirdDigit = firstThreeDigits % 10;
    secondDigit = ((firstThreeDigits - thirdDigit) /10) %10;
    firstDigit = (firstThreeDigits - (secondDigit * 10 + thirdDigit)) / 100;

    //decompile last three digits
    sixthDigit = lastThreeDigits % 10;
    fifthDigit = ((lastThreeDigits - sixthDigit) /10) %10;
    fourthDigit = (lastThreeDigits - (fifthDigit * 10 + sixthDigit)) / 100;

    // compare digits
    if(firstDigit === sixthDigit &&
        secondDigit === fifthDigit &&
        thirdDigit === fourthDigit ){

        console.log("Шестизначное число зеркальное");

    }else{

        console.log("Шестизначное число НЕ зеркальное")

    }


}else{
    console.log("Шестизначное число это от 100 000 до 999 999")
}

// 80 minutes