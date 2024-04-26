const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
    Challenge: Display the numbers using the below format
    EVEN NUMBERS: 
    2
    4
    6
    8
    10
    ODD NUMBERS: 
    1
    3
    5
    7
    9
*/


console.log("EVEN NUMBERS:");
for (let i = 0; i < arr.length; i++) {
    const eNums = arr[i];
    if (eNums % 2 === 0) {
        console.log(eNums);
    }
}

console.log("ODD NUMBERS:");
for (let i = 0; i < arr.length; i++) {
    const oNums = arr[i];
    if (oNums % 2 !== 0) {
        console.log(oNums);
    }
}
