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
        c();
    }
    b();
}
a();