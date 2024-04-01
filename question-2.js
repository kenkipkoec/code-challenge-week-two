//Write a JavaScript function that accepts two numbers to generate an array between them. For example, 
//if the two numbers are 4 and 7, the output should be [4, 5, 6, 7] and -4 and 
//7 should return [-4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7].

function numbers(start, end) {

    if (start > end) {
        [start, end] = [end, start];
    }
    // Generate array using splice
    let theResultingArray = [];
    for (let i = start; i <= end; i++) {
        theResultingArray.splice(theResultingArray.length, 0, i);
    }
    return theResultingArray;
}


console.log(numbers(4, 7));  
console.log(numbers(-4, 7)); 
