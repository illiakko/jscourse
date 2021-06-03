let coloredElement = document.getElementById('coloredElement');



coloredElement.addEventListener("click", function () {

    if (this.classList.contains("red")) {
        this.classList.toggle("red");
        this.classList.toggle("black")

    } else if (this.classList.contains("black")) {
        this.classList.toggle("black");
        this.classList.toggle("green")

    } else if (this.classList.contains("green")) {
        this.classList.toggle("green");
        this.classList.toggle("red")

    }
});


// не особо робочий вариант

// const colors = [
//     "red",
//     "black",
//     "green",
// ];
// let counter = 0;

// coloredElement.addEventListener("click", function () {
//     this.classList.toggle(colors[0 + counter]);
//     counter++;

//     if (counter > colors.length - 1) {
//         counter = 0;
//     }

// });