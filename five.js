//Sort in decreasing order

function compare(a, b) {
    if (a>b) return -1; //a comes after b
    if (a == b) return 0;
    if (a < b) return 1;

}

let arr = [2, 5, 4, 7, 9 ,10, 6, 13];
arr.sort(compare);
alert(arr)