// Your code here
Array.prototype.myEach = function(callback){
  for (let i = 0; i < this.length; i++) {
    console.log(callback(this[i]));
  }
}

const doubler = function(value) {
  return value*2;
}

let array = [1,2,3,4,5];
// array.myEach(doubler);

Array.prototype.myMap = function(callback){
  const mappedArray = [];

  for (let i = 0; i < this.length; i++) {
    const mappedValue = callback(this[i]);
    mappedArray.push(mappedValue);
  }

  return mappedArray;
}

// console.log(array.myMap());

Array.prototype.myReduce = function(callback, initialValue){
  let acc;
  let arr;
  if (initialValue) {
    acc = initialValue;
    arr = this;
  } else {
    acc = this[0];
    arr = this.slice(1)
  }
  for (let i = 0; i < arr.length; i++) {
    acc = callback(acc, arr[i]);
  }
  return acc;
}
console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}));
console.log([1, 2, 3].myReduce(function(acc, el) {
  return acc + el;
}, 25));
