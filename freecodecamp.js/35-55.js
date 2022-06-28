//35
const lastName = "Lovelace";
// Only change code below this line
const thirdLetterOfLastName = lastName[2]; // Change this line


//36
const lastName = "Lovelace";
// Only change code below this line
const lastLetterOfLastName = lastName[lastName.length - 1]; // Change this line


//37
const lastName = "Lovelace";
// Only change code below this line
const secondToLastLetterOfLastName = lastName[lastName.length - 2]; // Change this line


//38
const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";
// Only change code below this line
const wordBlanks = myAdjective + " " + myNoun + " " + myVerb + " " + myAdverb + "."; // Change this line
// Only change code above this line


//39
const myArray = ["I am number", 1];


//40
const myArray = [["what are ", "you doing?"]];


//41
const myArray = [50, 60, 70];
let myData = myArray[0];


//42
const myArray = [18, 64, 99];
// Only change code below this line
myArray[0] = 45;


//43
const myArray = [
	[1, 2, 3],
	[4, 5, 6],
	[7, 8, 9],
	[[10, 11, 12], 13, 14],
];
const myData = myArray[2][1];


//44
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
myArray.push(["dog", 3]);


//45
const myArray = [["John", 23], ["cat", 2]];
// Only change code below this line
let removedFromMyArray = myArray.pop();


//46
const myArray = [["John", 23], ["dog", 3]];
// Only change code below this line
let removedFromMyArray = myArray.shift();


//47
const myArray = [["John", 23], ["dog", 3]];
myArray.shift();
// Only change code below this line
myArray.unshift(["Paul", 35]);


//48
const myList = [["milk", 2], ["bread", 1], ["sugar", 2], ["sigarets", 1], ["bear", 2]];


//49
function reusableFunction() {
	console.log("Hi World");
 }
reusableFunction()


//50
function functionWithArgs (arg1, arg2) {
	console.log(arg1 + arg2);
 }
functionWithArgs(1, 2);


//51
function timesFive(num) {
	return num*5;
}


//52
// Declare the myGlobal variable below this line
let myGlobal = 10;
function fun1() {
  // Assign 5 to oopsGlobal Here
oopsGlobal = 5;
}
// Only change code above this line
function fun2() {
  var output = "";
  if (typeof myGlobal != "undefined") {
    output += "myGlobal: " + myGlobal;
  }
  if (typeof oopsGlobal != "undefined") {
    output += " oopsGlobal: " + oopsGlobal;
  }
  console.log(output);
}


//53
function myLocalScope() {
	// Only change code below this line
	let myVar;
	console.log('inside myLocalScope', myVar);
}
myLocalScope();

 // Run and check the console
 // myVar is not defined outside of myLocalScope
console.log('outside myLocalScope', myVar);


//54
const outerWear = "T-Shirt";
function myOutfit() {
  // Only change code below this line
  let outerWear = "sweater";
  // Only change code above this line
  return outerWear;
}
myOutfit();


//55
let sum = 0;
function addThree() {
  sum = sum + 3;
}
// Only change code below this line
function addFive() {
  sum = sum + 5;
}
// Only change code above this line
addThree();
addFive();