//Write a function filterRange(arr, a, b) that gets an array arr, 
// looks for elements with values higher or equal to a and lower or equal to b and return a result as an array.
// The function should not modify the array. It should return the new array.

function filterRange(arr, a, b) {
    return arr.filter(item => (item >= a && item <= b))
    
}

let arr = [1, 4, 5, 7, 12, 39, 6, 3, 2];
let filter = filterRange(arr, 2, 12);
alert(filter);
alert(arr);


