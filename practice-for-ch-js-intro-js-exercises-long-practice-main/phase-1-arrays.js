// // Your code here
// let array = [1,2,3,4,5,5,4,3,4];

// Array.prototype.uniq = function(){
//     let uniqueArray = [];
//     this.forEach((ele)=>{
//         if (!uniqueArray.includes(ele)){
//             uniqueArray.push(ele);
//         };
//     });
//     return uniqueArray;
// };

// console.log(array.uniq())

// Array.prototype.twoSum = function() {
//     let twoSumArray = [];
//     let seenNumbers = {};
//     for (let idx in this) {
//         let target = 0 - this[idx];
//         if(target in seenNumbers){
//             twoSumArray.push([parseInt(seenNumbers[target]),parseInt(idx)]);
//         } else {
//             seenNumbers[this[idx]] = idx
//         }
//     }
//     return twoSumArray
// }

// array = [-1,0,2,-2,1];

// console.log(array.twoSum());


Array.prototype.transpose = function() {
    let transposeArray = [];
    for (let col = 0; col < this[0].length; col++) {
      let colArray = [];
      for (let row = 0; row < this.length; row++) {
        colArray.push(this[row][col]);
      }
      transposeArray.push(colArray);
    }
    return transposeArray;
  };
array = [[0, 1, 2], [3, 4, 5], [6, 7, 8]]

console.log(array.transpose())