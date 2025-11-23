//sumOfTripledEvens function. Rewrite the code with filter, map and reduce. It will:

// Take in an array.
// For every even number, it will triple it.
// Then it will sum all those even numbers. 

//function sumOfTripledEvens(array) {
//     let sum = 0;
//     for (let i = 0; i < array.length; i++) {
//       // Step 1: If the element is an even number
//       if (array[i] % 2 === 0) {
//         // Step 2: Multiply this number by three
//         const tripleEvenNumber = array[i] * 3;
  
//         // Step 3: Add the new number to the total
//         sum += tripleEvenNumber;
//       }
//     }
//     return sum;
//   }

// with map:

function x3map(num) {
    if (num % 2 === 0) {
        num = num *3;
    }
    return num;
}
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const x3maparr = array.map(x3map);
const sum = x3maparr.reduce((total, current) => total + current);
console.log(x3maparr);
console.log(sum);

x3map();