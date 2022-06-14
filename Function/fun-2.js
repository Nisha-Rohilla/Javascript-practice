var i = 0; // Global scope
// Function define
function run() {
    var j = 1; // Local scope
    console.log(i); 
    console.log(j); 
}

// Function call
run()

console.log(j);