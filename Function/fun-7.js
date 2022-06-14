function a() {
    var i = 20;
    function b() {
        function c() {
            console.log(i); 
            // Scope of i is whichin function
            // a so inner function b and c
            // can access it
            var j = 30;
            console.log(j)
        }
        // console.log(j) 
        // Gives error because scope is
        // within c so outer env i.e,
        // b and a can't access it.
        c();
    }
    b();
}
a();