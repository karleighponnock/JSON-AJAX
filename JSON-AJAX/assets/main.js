
// Object

var myCat = {
    //property:value

    "name": "Meowsalot",
    "species": "cat",
    "favFood": "tuna"
}

//access properties values from object and console log it
console.log(myCat.favFood);


//Array- comma seperated list of values
var myFavColors = ["blue", "green", "purple", "red"];

//access properties values from array and console log it

console.log(myFavColors[2]);


//COMBINE
//array
var thePets = [
//Nested object
    { "name": "Meowsalot",
    "species": "cat",
    "favFood": "tuna"
},
//Nested object
    { "name": "Barky",
    "species": "dog",
    "favFood": "carrots"}
];
//access properties values and console log it
//access object using index then .whateverProperty of the value you want to access
//console log to check- should print carrots
console.log(thePets[1].favFood);