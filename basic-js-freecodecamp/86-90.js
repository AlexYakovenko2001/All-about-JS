//86
const testObj = {
	12: "Namath",
	16: "Montana",
	19: "Unitas"
 };
 
 // Only change code below this line
 const playerNumber = 16;  // Change this line
const player = testObj[playerNumber];   // Change this line
 

//87
const myDog = {
	"name": "Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
 };
 
 // Only change code below this line
myDog.name = "Happy Coder";
 

//88
const myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"]
 };
myDog.bark = "woof";
 

//89
const myDog = {
	"name": "Happy Coder",
	"legs": 4,
	"tails": 1,
	"friends": ["freeCodeCamp Campers"],
	"bark": "woof"
 };
 
 // Only change code below this line
delete myDog["tails"];
 

//90
function phoneticLookup(val) {
	let result = "";
 
	// Only change code below this line
	let lookup = {
	  "alpha": "Adams",
	  "bravo": "Boston",
	  "charlie": "Chicago",
	  "delta": "Denver",
	  "echo": "Easy",
	  "foxtrot": "Frank",
	};
 result = lookup[val];
	// Only change code above this line
	return result;
 }
 
 phoneticLookup("charlie");