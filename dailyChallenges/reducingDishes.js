/**
 * @param {number[]} satisfaction
 * @return {number}
 */
var maxSatisfaction = function(satisfaction) {
  var possibleResults = []

  satisfaction.sort(function(a,b) { return a - b  }) 

  for (j = 0; j < satisfaction.length; j++) {
    var maxResult = 0
    for (i = 1; i <= satisfaction.length; i++) {
      maxResult = maxResult + (satisfaction[i-1] * i)
    }
    possibleResults.push(maxResult)
    console.log(possibleResults)
    satisfaction = satisfaction.slice(1)
  }
  possibleResults.sort(function(a,b) { return b - a  }) 

  if (possibleResults[0] < 0) {
    return 0
  } else {
    return possibleResults[0]
  }
  
};


var satisfaction = [4,3,2]
console.log(maxSatisfaction(satisfaction))
