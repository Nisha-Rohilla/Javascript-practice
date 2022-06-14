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
    var inner = outer();

    inner();
    inner();