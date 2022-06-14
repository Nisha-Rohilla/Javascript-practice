// creating a nested function invocation
function totalCount() {
    var count = 0;

    // Nested function defination
    function increaseCount() {
        count++;
    }

    // Nested function invocation
    increaseCount();
    increaseCount();
    increaseCount();
    return count;
}
console.log(totalCount());