// let organization - from structure.js

// function for consoling each name
function eachName(param) {
    console.log(param.name);
}

//main function
function getListOfNames(obj, cb) {
    for (var prop in obj) {
        if (typeof obj[prop] == "object") {
            getListOfNames(obj[prop], eachName);
        } else {
            cb(obj);
        }
    }
}


//calling for a function
getListOfNames(organization, eachName);