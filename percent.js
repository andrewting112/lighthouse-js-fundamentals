const urlEncode = function(text) {
  var replaced = text.replace(/ /g, '%20');
  return replaced
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));