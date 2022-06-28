//56
let processed = 0;
function processArg(num) {
  return (num + 3) / 5;
}
// Only change code below this line
processed = processArg(7);


//57
function nextInLine(arr, item) {
	// Only change code below this line
	arr.push(item);
	return arr.shift();
	// Only change code above this line
 }
 // Setup
 const testArr = [1, 2, 3, 4, 5];
 // Display code
 console.log("Before: " + JSON.stringify(testArr));
 console.log(nextInLine(testArr, 6));
console.log("After: " + JSON.stringify(testArr));


//58
function welcomeToBooleans() {
	// Only change code below this line
	return true; // Change this line
	// Only change code above this line
}


//59
function trueOrFalse(wasThatTrue) {
	// Only change code below this line
	if (wasThatTrue) {
	  return "Yes, that was true";
	} 
	return "No, that was false";
	// Only change code above this line
}


//60
function testEqual(val) {
	if (val == 12) { // Change this line
	  return "Equal";
	}
	return "Not Equal";
 }
 testEqual(10);