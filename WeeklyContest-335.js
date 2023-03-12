/**
 * @param {number} n
 * @param {number} time
 * @return {number}
 */
var passThePillow = function(n, time) {
  let numberOfLoops = time/(n-1)

  if (Number.isInteger(numberOfLoops)) {
      //even or odd
      if (numberOfLoops%2 === 0) {
          return 1
      } else {
          return n
      }
      
      
  } else {
      //even or odd
      let loopedAlready = numberOfLoops.toString().split(".")[0]
      if (loopedAlready%2 === 0) {
          return time%(n-1) + 1
      } else {
          return n - (time%(n-1))
      }
  }
};


// console.log(passThePillow(4,5))
// console.log(passThePillow(3,2))
// console.log(passThePillow(9,4))
console.log(passThePillow(37,1000))