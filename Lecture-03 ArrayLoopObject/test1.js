let values1 = ['Apple', 1, false];
let values2 = ['Fries', 2, true];
let values3 = ['Mars', 9, 'Apple'];

let arrayOfArrays = [values1, values2, values3];

for (let i = 0; i < arrayOfArrays.length; i++) {
    const currentItem = arrayOfArrays[i];

    for (let j = 0; j < currentItem.length; j++) {
        if (typeof currentItem[j] === 'string') {
            for (let k = 0; k < currentItem[j].length; k++) {
                const currentLetter = currentItem[j][k];
                console.log(currentLetter);
            }
        }
    }

        console.log("---");
}