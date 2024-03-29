const instructorWithLongestName = function(instructors) {
  var instName = "";
  var instPosition = 0;
  for (var i = 0; i < instructors.length; i++) {
    if (instructors[i].name.length > instName.length) {
      instName = instructors[i].name;
      instPosition = i;
    }
  } return instructors[instPosition];
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
