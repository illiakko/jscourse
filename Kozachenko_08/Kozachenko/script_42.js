// task 4.2

// searching for male
let males = people.filter(function (item, index, array) {
    return item.gender === "male"
});

for (let i = 0; i < males.length; i++) {
    console.log(`${males[i].firstName} - ${males[i].lastName}`)
}


// searching for female
let females = people.filter(function (item, index, array) {
    return item.gender === "female"
});

for (let i = 0; i < females.length; i++) {
    console.log(`${females[i].firstName} - ${females[i].lastName}`)
}