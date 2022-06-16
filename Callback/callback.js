// Challenge 1
function addTwo(num) {
    return num+2
  
  }
  
  // To check if you've completed it, uncomment these console.logs!
  // console.log(addTwo(3));
  // console.log(addTwo(10));
  
  
  // Challenge 2
  function addS(word) {
    return word +'s'
  
  }
  
  // uncomment these to check your work
  // console.log(addS('pizza'));
  // console.log(addS('bagel'));
  
  
  // Challenge 3
  function map(array, callback) {
    const arr = [];
    for(let i=0; i<array.length; i++){
      arr.push(callback(array[i]))
    }
    return arr;
  
  }
  
  function multiplyBy2(input){
    return input*2
  }
  
  console.log(map([1, 2, 3], multiplyBy2));
  
  
  // Challenge 4
  function forEach(array, callback) {
    for(let i=0;i<array.length;i++){
        callback(array[i])
      }
  
  }
  
  // see for yourself if your forEach works!
  
  
  // Challenge 5
  function mapWith(array, callback) {
  
  
  }
  