let complexArr = [1, [2, 3], 4, [5, 6], 7, [8, 9]];

//taking an each cell of the array
for (let i = 0; i < complexArr.length; i++) {

    let complexArrCell = complexArr[i];

    if (typeof complexArrCell == "object") {

        for (j = 0; j < complexArr[i].length; j++) {
            let innerArr = complexArr[i];
            console.log(innerArr[j]);
        }

    } else {
        console.log(complexArr[i]);
    }

}

//15 minutes