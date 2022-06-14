var i = 10;
    function outer() {
        var j = 20;
        console.log(i, j);
  
        var inner = function () {
            var k = 30;
            console.log(i, j, k);
            // Increment after second call of inner 
            i++;
            // j increment after second call of inner
            j++;
            // k not increment after second call of inner
            k++;
        }
  
        // Outer function return inner function
        return inner;
    }
  
    // Inner preserved the scope of outer
    // function and variables but each 
    // time new execution context is
    // created inner function
    var inner = outer();
  
    // Each time execution call complete
    // then no more exist execution 
    // context of inner function
    inner();
    inner();