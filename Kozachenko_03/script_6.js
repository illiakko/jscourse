//set variable 'lang' to "en" or "ua"
let convertionType = confirm("Для конвертации из °C в °F нажмите ОК, \r\n Для конвертации из °F в °C нажмите ОТМЕНА");

if (convertionType === true) {
    lang = "ua"
} else {
    lang = "en"
}


if (lang === "ua") {

    //get user data 
    temperatureUser = prompt("Введите температуру в градусах цельсия");
    //type convertion
    temperatureUser = parseFloat(temperatureUser);
    //check for a propper type of user data
    if (typeof temperatureUser == "number" &&
        typeof temperatureUser !== "null" &&
        isNaN(temperatureUser) !== true) {

        //converting Celsius to Fahrenheit
        temperatureCtoF = temperatureUser * 1.8 + 32;
        console.log(temperatureUser + " градусов цельсия это " + temperatureCtoF + " градусов фаренгейта");

    } else {
        console.log("Необходимо ввести число");
    }

} else if (lang === "en") {

    //get user data 
    temperatureUser = prompt("Введите температуру в градусах фаренгейта");
    //type convertion
    temperatureUser = parseFloat(temperatureUser);
    //check for a propper type of user data
    if (typeof temperatureUser == "number" &&
        typeof temperatureUser !== "null" &&
        isNaN(temperatureUser) !== true) {

        // converting Fahrenheit to Celsius
        temperatureFtoC = (temperatureUser - 32) / 1.8;
        console.log(temperatureUser + " градусов фаренгейта это " + temperatureFtoC + "градусов цельсия");

    } else {
        console.log("Необходимо ввести число");
    }

} else {
    console.log("Переменная lang может содержать только \"en\" либо \"ua\"");
}


//53 minutes