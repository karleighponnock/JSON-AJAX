//new instance for this tool
var ourRequest = new XMLHttpRequest();
//define request
//get request from the url
ourRequest.open(`GET`, `https://learnwebcode.github.io/json-e...`);
//when it loads run function
ourRequest.onload = function(){
    //text response info
console.log(ourRequest.responseText)
};