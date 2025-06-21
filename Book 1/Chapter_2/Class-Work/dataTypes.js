// Declare a variable named 'greeting' and assign it the string "Hello"
var greeting = "Hello";

// Declare a variable named 'myName' and assign it the string "Nick"
var myName = "Nick";

// Concatenate the strings in 'greeting' and 'myName' ("HelloNick")
// (Note: This doesn't store or display the result)
greeting + myName;
// ------------------------------------------------------------------------------------------------------------------------------------

// Get the length of the string 'Hello Nick' (which is 10, including the space)
'Hello Nick'.length;

// ----------------------------------------------------------------------------------------------------------------
// Declare a variable named 'myName' again and assign it the string "Nick"
var myName = "Nick";

// Access the third character (index 2) of the string 'Nick', which is 'c'
myName[2];

// ------------------------------------------------------------------------------------------------------
// Perform an arithmetic operation: multiply 52 by 3, add 5, then subtract 0.5
52 * 3 + 5 - 1 / 2;

// ---------------------------------------------------------------------------------------------------------
// Declare a variable named 'height' with the value 65
var height = 65;

// Declare a variable named 'heightRestriction' with the value 60
var heightRestriction = 60;

// Compare whether 'height' is greater than 'heightRestriction'; returns true
height > heightRestriction;

// ------------------------------------------------------------

// Convert the entire string to uppercase: result is "HELLO THERE, HOW ARE YOU DOING?"
"Hello there, how are you doing?".toUpperCase(); 

// Convert the entire string to lowercase: result is "hello there, how are you doing?"
"hELlo THERE, hOW ARE yOu doINg?".toLowerCase(); 

// -----------------------------------------------------------

// Declare a variable 'mySecretNumber' and assign it the number 5
var mySecretNumber = 5;

// Declare a variable 'chicoGuess' and assign it the number 3
var chicoGuess = 3;

// Check if the values and types are exactly equal (strict equality); returns false
mySecretNumber === chicoGuess;
// ----------------------------------------

// Declare 'mySecretNumber' again with the value 5
var mySecretNumber = 5;

// Declare 'chicoGuess' again, this time as the string "5"
var chicoGuess = "5";

// Check if the values are equal (loose equality, ignores type); returns true
mySecretNumber == chicoGuess;

// ----------------------------------------------------

// Extract the substring from index 0 up to (but not including) index 4: result is "This"
"This is a long string".slice(0, 4);

// Extract the substring from index 7 up to (but not including) index 12: result is "World"
"Hello, World!".slice(7, 12);
