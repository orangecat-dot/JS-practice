// Filter unique array members
// Let arr be an array.
// Create a function unique(arr) that should return an array with unique items of arr.

// a function to find an item, if it returns true, the search stopped, the item is returned
// break the array down to string

function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) === index);
}

let arr = ["a", "b", "a", "c", "b"];
console.log(unique(arr));

