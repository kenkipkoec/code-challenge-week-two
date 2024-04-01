//Write a function that accepts a string as input and swaps the case of each character.
// For example if you input 'The Quick Brown Fox' the output should be 'tHE qUICK bROWN fOX'.

function stringInput(inputString) {
    let stringsToBeSwapped = "";
    for (let i = 0; i < inputString.length; i++) {
        let characters = inputString.charAt(i);
        switch (characters) {
            case characters.toUpperCase():
                stringsToBeSwapped += characters.toLowerCase();
                break;
            case characters.toLowerCase():
                stringsToBeSwapped += characters.toUpperCase();
                break;
            default:
                stringsToBeSwapped += characters;
                break;
        }
    }
    return stringsToBeSwapped;
}

let swapCase = "i aM bEST tHE cODER eVER!";

let example = stringInput(swapCase);

console.log(example); 

