//get data from a user
let aNumber = prompt("Введите первое число (а)");
let bNumber = prompt("Введите второе число (b)");

//type convertion
aNumber = parseFloat(aNumber);
bNumber = parseFloat(bNumber);

// check data for a propper type
if(typeof aNumber == "number" &&
typeof bNumber == "number" &&
isNaN(aNumber) !== true &&
isNaN(bNumber) !== true){

// is an (a) number a divider for a (b) number and visa verse
    (aNumber % bNumber === 0) ? console.log("Число b - делитель числа а") : console.log("Число b - НЕ делитель числа а") ;
    (bNumber % aNumber === 0) ? console.log("Число a - делитель числа b") : console.log("Число a - НЕ делитель числа b") ;

}else{
    console.log("Одно или оба из введенных знвчений не являются числом")
}

//30 minutes