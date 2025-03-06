export function capitalize(string) {
    const firstLetter = string.slice(0, 1);
    const restOfString = string.slice(1);
    return firstLetter.toUpperCase() + restOfString;
}

export function reverseString(string) {
    return string.split("").reverse().join("");
}

export function calculator() {
    const add = (a, b) => a + b;
    const sub = (a, b) => a - b;
    const mult = (a, b) => a * b;
    const div = (a, b) => a / b;

    return {add, sub, mult, div}
}


export function caesarCipher(string, shift) {
    let result = '';

    for (let i = 0; i < string.length; i++) {
        let char = string[i];
        let code = char.charCodeAt(0);

        if (code >= 65 && code <= 90) { 
            // Uppercase letters
            // 26 % 26 = 0
            result += String.fromCharCode(((code - 65 + shift) % 26) + 65);
        } else if (code >= 97 && code <= 122) { 
            // Lowercase letters
            result += String.fromCharCode(((code - 97 + shift) % 26) + 97);
        } else { 
            // Non-alphabetical characters remain the same
            result += char;
        }
    }

    return result;
}

console.log(caesarCipher('xyz', 3));
console.log(caesarCipher('Hello, World!', 3));
console.log(caesarCipher('HeLLo', 3));

export function analyzeArray(array) {
    const max = Math.max(...array);
    const min = Math.min(...array);
    const arrLength = array.length;

    let sum = 0;
    array.forEach(number => {
        sum += number;
    });

    const average = sum / arrLength;

    return `max: ${max}, min: ${min}, length: ${arrLength}, average: ${average}`;
}

console.log(analyzeArray([1,8,3,4,2,6]));