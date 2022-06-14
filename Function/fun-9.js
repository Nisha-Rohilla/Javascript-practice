function abc(arr1, arr2) {
    arr1[1] = 50;
    console.log(arr1);
    console.log(arr2["2"]);
}
var arr1 = [10, 20, 30];
var arr2 = {
    "1": "a",
    "2": "b",
    "3": "c"
}
abc(arr1, arr2);
console.log(arr1);
console.log(arr2);