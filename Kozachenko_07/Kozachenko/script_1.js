let initialNumber = 0;

do {

    let userInput = prompt("Вводите числа пока их сумма не станет равной 100 ");

    userInput = parseFloat(userInput);


    if (typeof userInput == "number"
        && typeof userInput != "null"
        && !isNaN(userInput)) {



        function summ(NumberForSumm) {
            return initialNumber += NumberForSumm;
        }

        echoUserNumberPlusItself = summ(userInput);

        console.log(echoUserNumberPlusItself);
    }


} while (echoUserNumberPlusItself < 100);

//40 minutes