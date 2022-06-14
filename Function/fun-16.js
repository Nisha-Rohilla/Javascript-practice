function Person(name) {
    this.name = name;

    setTimeout(function () {
        console.log(this);
    }, 100);

}

//object is created and stored it in p
var p = new Person("gfg");
var q = new Person("gfg1");