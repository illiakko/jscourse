// task 3

function showFullName() {
    console.log(`${this.firstName} - ${this.lastName}`)
}

for (let i = 0; i < people.length; i++) {
    let newFunc = showFullName.bind(people[i]);
    newFunc();
}