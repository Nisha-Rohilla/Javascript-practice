var double = x => 2 * x;
    console.log(double(3));
  
    function Person(name) {
        this.name = name;
        console.log(this);
        setTimeout(() =>
            console.log(this), 
            // Arrow function does not have
            // own binding so picked from
            // outer scope
            100)
    };
  
    var p = new Person("run")