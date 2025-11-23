// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

function splitjoin(str) {
    return str
    .split('-') // splits 'my-long-word' into array ['my', 'long', 'word']
    .join(''); // joins ['my', 'Long', 'Word'] into 'myLongWord'
    }
    

console.log(splitjoin("my-short-string"));

function camelize() {
    const str = prompt("Please enter a string with dash between words: ")
    return str
    .split('-')
    .map((item, index) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)) 
    .join(' ');
}
