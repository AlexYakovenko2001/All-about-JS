//95
const myArray = [];
// Only change code below this line
let i = 5;
while (i >= 0) {
  myArray.push(i);
  i--;
}


//96
const myArray = [];

// Only change code below this line
for (let i = 1; i < 6; i++) {
  myArray.push(i);
}


//97
const myArray = [];

// Only change code below this line
for (let i = 1; i < 10; i += 2) {
  myArray.push(i);
}


//98
const myArray = [];

// Only change code below this line
for (let i = 9; i > 0; i -= 2) {
  myArray.push(i);
}


//99
const myArr = [2, 3, 4, 5, 6];

// Only change code below this line
let total = 0;
for ( let i = 0; i < myArr.length; i++) {
  total += myArr[i];
}


//100
function multiplyAll(arr) {
	let product = 1;
	// Only change code below this line
 for (let i = 0; i < arr.length; i++) {
	for (let j = 0; j < arr[i].length; j++) {
	  product = product * arr[i][j];
	}
 }
	// Only change code above this line
	return product;
 }
 
multiplyAll([[1, 2], [3, 4], [5, 6, 7]]);
 

