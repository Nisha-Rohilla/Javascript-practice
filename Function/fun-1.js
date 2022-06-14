function addAtLeastThree(a, b, ...numbers) {
       
    // Console.log(a+b+c); give  error c not defined 
    // because it is as rest parameter
    var sum=a+b;
    for(var i=0; i<numbers.length; ++i) {
        sum += numbers[i];
    }
    return sum;
   }
    // Call
    console.log( addAtLeastThree(10,  1,1,1,1,1,150) );