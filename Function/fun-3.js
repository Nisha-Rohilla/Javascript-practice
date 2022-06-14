var name = "global";
function scope() {
    var name = "lexical";
    console.log(name);
}
scope();
console.log(name);