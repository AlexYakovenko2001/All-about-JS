//81
function abTest(a, b) {
	// Only change code below this line
 if (a < 0 || b < 0) {
	return undefined;
 }
	// Only change code above this line
	return Math.round(Math.pow(Math.sqrt(a) + Math.sqrt(b), 2));
 } 
abTest(2, 2);


//82
let count = 0;

function cc(card) {
  // Only change code below this line
 switch (card) {
   case 2:
   case 3:
   case 4:
   case 5:
   case 6:
    count += 1;
    break;
   case 7:
   case 8:
   case 9:
    count += 0;
    break;
   case 10:
   case 'J':
   case 'Q':
   case 'K':
   case 'A':
    count -= 1;
    break;
 }

  return count + (count > 0 ? " Bet" : " Hold");
  // Only change code above this line
}

cc(2); cc(3); cc(7); cc('K'); cc('A');


//83
const myDog = {
	// Only change code below this line
	"name": "Bocman",
	legs: 4,
	tails: 1,
	"friends": ["Elvira", "Papa"],
 
	// Only change code above this line
};


//84
const testObj = {
	"hat": "ballcap",
	"shirt": "jersey",
	"shoes": "cleats"
 };
 
 // Only change code below this line
 const hatValue = testObj.hat;      // Change this line
const shirtValue = testObj.shirt;    // Change this line


//85
const testObj = {
	"an entree": "hamburger",
	"my side": "veggies",
	"the drink": "water"
 };
 
 // Only change code below this line
 const entreeValue = testObj["an entree"];   // Change this line
 const drinkValue = testObj["the drink"]; 