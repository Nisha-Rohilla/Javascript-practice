// Scope of variables in the nested function.
var i = 0;
function gfg() {
    var j = 1;
    console.log(i); // This will print 0
    console.log(j); // This will print 1
    var article = "Not publish";
    const result = publish(article);
    console.log(result);
}
function publish(article) {
    console.log("gfg article");
    return "published";
}
gfg();
console.log(j);