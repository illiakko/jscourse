// get data from a user

let numberN = prompt("Введите целое число");

//type convertion

numberN = parseInt(numberN);

// check for a propper type
if (typeof numberN == "number" &&
    typeof numberN != "null" &&
    !isNaN(numberN)) {

    //incrementing number from 2 to N
    for (i = 2; i <= numberN; i++) {

        //proving that number is simple
        for (j = 2; j <= i; j++) {
            if (j % i !== 0) {
                continue;
            }
            console.log(`${i} - натуральное число`)
        }
    }

} else {

    console.log("Введите число")

}
//32 minutes