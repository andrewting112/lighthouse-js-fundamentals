const conditionalSum = function(values, condition) {
  var x = 0;
  if (condition === 'even') {
    for (var i = 0; i < values.length; i++) {
      if (values[i] % 2 === 0) {
        x += values[i];
      }
    } return x;
  } else if (condition === 'odd') {
    for (var j = 0; j < values.length; j++) {
      if (values[j] % 2 === 1) {
        x += values[j];
      }
    } return x;
  } else {
      return 0;
  }
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));