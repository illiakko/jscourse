'use strict'
//send users and products to localstorage

const userString = JSON.stringify(users);
const productString = JSON.stringify(products);

const userToStorage = localStorage.setItem('keyUser', userString);
const productToStorage = localStorage.setItem('keyProduct', productString);

//get users and products from localstorage
const userFromStorage = localStorage.getItem('keyUser')
const productFromStorage = localStorage.getItem('keyProduct')

const usersArr = JSON.parse(userFromStorage);
const productsArr = JSON.parse(productFromStorage);


//create function-constructor for a proto of a user
function Client() {
    this.isCar = false;
    this.getInfo = function () {
        console.log(this.name + " " + this.age + " " + this.depositAmount + " " + this.isCar);
    };
    this.update = function (obj) {

    };
}

// create new object based on client
let clientBase = new Client();
let clientPrototype = Object.create(clientBase);
let oneClient = Object.assign(clientPrototype, usersArr[0]);
console.log("test");
