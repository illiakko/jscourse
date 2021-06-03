
// task 4.1

function compareNumeric(a, b) {
    if (a.age > b.age) return 1;
    if (a.age == b.age) return 0;
    if (a.age < b.age) return -1;
}

let sortedPeople = people.sort(compareNumeric);

for (let i = 0; i < sortedPeople.length; i++) {
    console.log(`${sortedPeople[i].firstName} - ${sortedPeople[i].age}`)
}
