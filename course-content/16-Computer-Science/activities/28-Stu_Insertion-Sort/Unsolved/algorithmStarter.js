// ===============================================
// RUN THIS USING NODE
// ===============================================

// ================================================
// TEST CASES
// ================================================

// Case 1 - Small Set of Numbers
var arraySize = 40;

// // Case 2 - Large set of Numbers
// var arraySize = 400000;

var array = [];
for (var index = 0; index < arraySize; index++) {
  var randomNumber = Math.round(Math.random() * arraySize);

  array.push(randomNumber);
}

function swap(items, firstIndex, secondIndex) {
  var temp = items[firstIndex];
   
  // [4,2,6,1] 
  // What is the below code doing? 
  //
  items[firstIndex] = items[secondIndex];
  items[secondIndex] = temp ;
  // items[secondIndex] = items[firstIndex]
}

// ================================================
// SOLUTION - Insertion Sort
// ================================================

function insertionSort(arr) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i; j > 0; j--) {
      if(arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
      } else {
        break; //break out if no more swapping needed
      }
    }
  }
  return arr;
}

// ================================================
// FUNCTION CALL
// ================================================
console.log("PRE-SORT");
console.log(array.join(" "));
console.log("---------------------------");
console.log("POST-SORT");
console.log(insertionSort(array).join(" "));
