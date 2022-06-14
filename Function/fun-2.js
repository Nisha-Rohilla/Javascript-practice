var i = 0; // Global scope
// Function define
function run() {
    var j = 1; // Local scope
    console.log(i); // This will print 0
    console.log(j); // This will print 1
}

// Function call
run()
// This statement will throw an error
// as scope of j is only within 
  
// Function abc. The scope of j is not
// global means it cannot access in 
// current scope.
console.log(j);