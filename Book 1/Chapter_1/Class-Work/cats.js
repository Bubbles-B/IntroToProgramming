// Define a function named drawCats that takes one argument: howManyTimes
var drawCats = function (howManyTimes) {
  
  // Loop from 0 up to (but not including) howManyTimes
  for (var i = 0; i < howManyTimes; i++) {
    
    // Print the current number and a cat face to the console
    console.log(i + " =^.^=");
  }
};

// Call the drawCats function with 10 as the argument
// This will draw (print) 10 cats numbered from 0 to 9
drawCats(10);

// Without A function:
// Loop starts at 7 and runs until i is less than 15
for (var i = 7; i < 15; i++) {
  
  // Print the current number and a cat face to the console
  console.log(i + " =^.^=");
};
