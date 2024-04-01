//You are tasked with writing a function that takes an array of numbers as input
// and returns a new array containing only the prime numbers from the original array. 
//How would you implement this function efficiently, ensuring that it accurately identifies 
//prime numbers and returns them in the same order they appear in the input array? 
//For example if you provide an array [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] it should return an array [2, 3, 5, 7].


function primeNumbers(randomNumbers) {
    switch (true) {
        case randomNumbers <= 1:
            return false;
            break
        case randomNumbers <= 3:
            return true;
            break
        case randomNumbers % 2 === 0 && randomNumbers % 3 === 0:
            return false;
            break
        default:
            let i = 5;
            while (i * i <= randomNumbers) {
                if (randomNumbers % i !== 0 && randomNumbers % (i + 2) !== 0) {
                    return false;
                }
                i += 5;
            }
            return true;
    }
}

function getPrimeNumbers(numbersTobeEntered) {
    const primeArray = [];
    for (let i = 0; i < numbersTobeEntered.length; i++) {
        if (primeNumbers(numbersTobeEntered[i])) {
            primeArray.push(numbersTobeEntered[i]);
        }
    }
    return primeArray;
}


const numbersTobeEntered = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const excalt = getPrimeNumbers(numbersTobeEntered);
console.log(excalt); 
