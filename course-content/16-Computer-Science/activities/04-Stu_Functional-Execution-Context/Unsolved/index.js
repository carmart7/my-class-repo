// returns the average value of an array of numbers
function avg(array) {
  let total = 0;
  function sum() {
    for(let i = 0; i < array.length; i++) {
      total += array[i];
    }
  }
  sum();
  return total/array.length;//ReferenceError: total is not defined
}

//console.log(avg([10, 20, 30, 40, 50, 30]))
module.exports = avg;
