//Copy and sort array
//We have an array of strings arr. We’d like to have a sorted copy of it, but keep arr unmodified.
// Create a function copySorted(arr) that returns such a copy.

function copySorted(arr) {
    return arr.sort( (a,b) => a.localeCompare(b));
}
let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);
alert(sorted);
alert(arr);