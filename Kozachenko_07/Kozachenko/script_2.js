// it works with this original array
// let arrOriginal = [1, 2, [3, 4], 5, [6, 7, [8, 9, 10]]];

//it DOESN'T work with this array
let arrOriginal = [[0, 1], 2, [3, 4], 5, [6, 7, [8, 9, 10]]];

// function for consoling each element of an array
function printSingleElementFromArr(param) {
    console.log(param);
}


function each(arr, cb) {

    for (i = 0; i < arr.length; i++) {

        if (typeof arr[i] == "object") {
            each(arr[i], cb)
        } else {
            cb(arr[i]);
        }

    }

}

//calling for a function
each(arrOriginal, printSingleElementFromArr);

