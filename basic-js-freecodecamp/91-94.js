//91
function checkObj(obj, checkProp) {
	// Only change code below this line
	if (obj.hasOwnProperty(checkProp)) {
	  return obj[checkProp];
	} return "Not Found";
	// Only change code above this line
}
 

//92
const myMusic = [
	{
	  "artist": "Billy Joel",
	  "title": "Piano Man",
	  "release_year": 1973,
	  "formats": [
		 "CD",
		 "8T",
		 "LP"
	  ],
	  "gold": true
	},
	{
	  "artist": "Billy Joel",
	  "title": "Piano Man",
	  "release_year": 1973,
	  "formats": [
		 "CD",
		 "8T",
		 "LP"
	  ]
	}
];
 

//93
const myStorage = {
	"car": {
	  "inside": {
		 "glove box": "maps",
		 "passenger seat": "crumbs"
		},
	  "outside": {
		 "trunk": "jack"
	  }
	}
 };
 
const gloveBoxContents = myStorage.car.inside["glove box"];
 

//94
const myPlants = [
	{
	  type: "flowers",
	  list: [
		 "rose",
		 "tulip",
		 "dandelion"
	  ]
	},
	{
	  type: "trees",
	  list: [
		 "fir",
		 "pine",
		 "birch"
	  ]
	}
 ];
 
const secondTree = myPlants[1].list[1];
 

