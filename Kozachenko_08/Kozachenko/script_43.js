// task 4.3

let totalBirthEars = people.reduce(function (previousValue, item, index, array) {
    return item.age + previousValue;
}, 0);

console.log(totalBirthEars);