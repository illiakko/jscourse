/// all functions

// Get category
let category = categoryChoice();

// get items from category
let carsData = itemsFromCategory(category);

// chose the car
let userChoice = choseCar(carsData);

// get count
let count = countInput();

// get price
priceCalc(count);