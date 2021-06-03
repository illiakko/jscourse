let arr = [15, 68, 123, 9, 0, 64, 178, 3, 26];

//taking an each cell of the array
for (let j = 0; j < arr.length; j++) {

    //compare it with each cell of array
    for (let i = 0; i < arr.length; i++) {

        if (arr[j] < arr[i]) {
            arr[j] = 0;
            break;
        }

    }

}
// 45 minutes