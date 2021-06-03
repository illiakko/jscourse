
//obtain user data
let userName = prompt("Введите ваше имя");
let userAge = prompt("Сколько вам полных лет?");

//converting types
userAge = parseInt(userAge);

//check if userAge is a number
if (typeof userAge == "number" && isNaN(userAge) !== true) {

    //separate child from young&mature
    if (userAge >= 16) {

        //separate young&mature by healthy/hurmful LS
        let userLSAdult = confirm("Если вы считаете, что ведете ЗДОРОВЫЙ образ жизни, нажмите \"ОК\" , если нет - \"Отмена\"");
        if (userLSAdult === true) {

            //separate young&mature by gender
            let userGender = confirm("Если вы ЖЕНЩИНА, нажмите \"ОК\" , если МУЖЧИНА - \"Отмена\"");
            if (userGender === true) {
                userGroup = "HighPotential-Woman";
            } else {
                userGroup = "HighPotential-Men";
            }
            //separate mature from all with hurmful LS
        } else if (userAge >= 50) {
            userGroup = "OutOfScope";
        }

        //if younger than 16, so this is a child
    } else {

        //separate children by active/calm
        let userLSChild = confirm("Если в тебе полно энергии - жмякай \"ОК\" ,\r\n если ты от жизни от своей устал - \"Отмена\"");
        if (userLSChild === true) {
            userGroup = "Potential";
        }
    }
    console.log("Привет " + userName + ", тебя определили в группу: " + userGroup);
} else {
    console.log("В графе \"Возраст\" нужно вводить число. Перезагрузите страницу");
}
// 2 hours