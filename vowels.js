let numberOfVowels = function(phrase) {
  var count = 0;
  for (var i = 0; i < phrase.length; i++) {
    var x = phrase.charAt(i);
    if (x === 'a' || x === 'e' || x === 'i' || x === 'o' || x === 'u') {
      count += 1;
    }
  } return count;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));


