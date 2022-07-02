//101
const myArray = [];
let i = 10;

// Only change code below this line
do {
  myArray.push(i);
  i++;
} while (i < 5);


//102
function sum(arr, n) {
  // Only change code below this line
  if (n <= 0) {
    return 0;
  } else {
    return sum (arr, n - 1) + arr[n - 1];
  }
  // Only change code above this line
}


//103
function randomFraction() {

	// Only change code below this line
  let randomNumb = Math.random();
	return randomNumb;
 
	// Only change code above this line
 }


//104
function randomWholeNum() {

	// Only change code below this line
	let randomNumb = Math.floor(Math.random() * 10)
	return randomNumb;
}


//105
function randomRange(myMin, myMax) {
	// Only change code below this line
	return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;
	// Only change code above this line
}
 

//106
function convertToInteger(str) {
	let intNumb = parseInt(str);
	return intNumb;
 }
 
convertToInteger("56");
 

//107
function convertToInteger(str) {
	let integNum = parseInt(str, 2);
	return integNum;
 }
 
convertToInteger("10011");
 

//108
function checkEqual(a, b) {
	return a == b ? "Equal" : "Not Equal"
  }
  
checkEqual(1, 2);


//109
function checkSign(num) {
	return (num > 0) ? "positive"
	  : (num < 0) ? "negative" : "zero";
 }
 
checkSign(10);
 

//110
function countdown(n){
	if (n < 1) {
	  return [];
	} else {
	  const countArray = countdown(n - 1);
	  countArray.unshift(n);
	  return countArray;
	}
 }