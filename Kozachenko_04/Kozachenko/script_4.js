
for (multiplier = 1; multiplier <= 9; multiplier++) {

    for (j = 1; j <= 9; j++) {
        multResult = j * multiplier;
        console.log(`${multiplier} * ${j} = ${multResult}`);
        if (j === 9) {
            console.log(" ")
        }
    }

}

//7 minutes