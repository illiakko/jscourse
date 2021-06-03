//просим ввести число через промпт

let promptNumber = prompt("Введите пятизначное число");

//используя функцию сплит с пустым разделителем ("") - получаем массив где одно значение - один символ
promptNumberArray = promptNumber.split("");

//выводим первые 5 значений массива в алерт 
window.alert(`${promptNumberArray[0]}  ${promptNumberArray[1]}  ${promptNumberArray[2]}  ${promptNumberArray[3]}  ${promptNumberArray[4]} `);

//заняло 20 минут