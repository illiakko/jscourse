
let categories = {
  1: "sport",
  2: "luxury",
  3: "offRoad"
}



// Get category
function categoryChoice() {
  let category;
  do {
    category = parseInt(prompt(`Please make your choice  \n 1 - sport 2 -luxury 3 - off`));
  } while (category < 0 || category > 3 || isNaN(category) || category === null)

  console.log(category);

  return category;
}


// get items from category
function itemsFromCategory(category) {
  let carsDataInFunction = carsStore[categories[category]].items;

  for (let i = 0; i < carsDataInFunction.length; i++) {
    let car = carsDataInFunction[i];
    console.log(`#${i + 1} ${car.name} | Price: ${car.price}`);
  }

  return carsDataInFunction;
}



// chose the car
function choseCar() {

  let userChoice;

  do {
    userChoice = parseInt(prompt(`Please make your choice ( 1 - ${carsData.length}`));
  } while (isNaN(userChoice) || userChoice > carsData.length || userChoice === null)

  console.log(userChoice);

  return userChoice;
}



// get count

function countInput() {
  let count;

  do {
    count = parseInt(prompt("Please enter the count"));
  } while (isNaN(count) || count < 1 || userChoice === null)

  console.log(count);

  return count;
}



// get price
function priceCalc(count) {

  let price = 0;
  let chosenCar = carsData[userChoice - 1];
  let carsPrice = chosenCar.price;
  let totalPrice = carsPrice * count;

  let discount = 0;
  if (totalPrice > 100000) {
    discount = totalPrice * 0.05;
  }

  if (discount > 0) {
    console.log(`Your discount: ${discount}`)
    console.log(`Your total price: ${totalPrice}`)
    console.log(`Your bill: ${totalPrice - discount}`)
  } else {
    console.log(`Your total price: ${totalPrice}`)

  }
}







