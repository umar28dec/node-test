function findMissedNum(arrayOfNumbers, n = 100) {
    if(arrayOfNumbers.length === n) {
        console.log("no number is missed");
    }
    if(arrayOfNumbers.length < (n - 1) ) {
        console.log("more than one number is missed")
    }
    let totalSum = (n * (n+1)) / 2;
    let sumOfArray = 0;

    for(let i of arrayOfNumbers){
        sumOfArray += i;
    }

    return totalSum - sumOfArray;
}

console.log(findMissedNum([1,2,5]), 4)

// // create an array with values 0 to 100
// let arrayOfNumbers = Array.from( Array(101).keys())
//
// // remove the 0th element
// arrayOfNumbers.shift();
//
// // now the array will 1 to 100
//
// // remove the value at index 50.(means remove 51 from the array)
// arrayOfNumbers.splice(50, 1)
//
// // now the array is 1 to 100 but without the number 51
//
// let missedNum = findMissedNum(arrayOfNumbers, 100);
// console.log("The missing number is :", missedNum)
