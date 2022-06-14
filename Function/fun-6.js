function c() {
    console.log("Inside c");
}

function b() {
    c();
    console.log("Inside b");
}

function a() {
    b();
    console.log("Inside a");
}

a();
console.log("global context");