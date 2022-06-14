var factorial1 = function fact(n) {
    var ans = 1;
    for (var i = 1; i <= n; i++)
        ans = ans * i;
    return ans;
}

console.log(factorial1);
console.log(factorial1(6));