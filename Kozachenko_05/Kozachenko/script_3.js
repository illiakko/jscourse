let cars = [
    { model: "Honda", speed: 200 },
    { model: "Toyota", speed: 190 },
    { model: "BMW", speed: 210 },
    { model: "Ford", speed: 180 },
];

//implement additional variables
let carsNew = [];
let fastestIndex = 0;


//deassemble initial array and create a new one
while (cars.length !== 0) {

    let fastestCar = [
        { model: "Dead Horse", speed: -Infinity },
    ];

    for (i = 0; i < cars.length; i++) {

        if (cars[i].speed >= fastestCar[0].speed) {
            fastestCar[0].model = cars[i].model;
            fastestCar[0].speed = cars[i].speed;
            fastestIndex = i;
        }

    }
    cars.splice(fastestIndex, 1);
    carsNew.push(fastestCar[0]);
}

//print new array to the console
for (i = 0; i < carsNew.length; i++) {
    console.log(carsNew[i].model + " - " + carsNew[i].speed);
}




