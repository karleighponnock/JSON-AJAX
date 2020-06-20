
var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn");


btn.addEventListener("click", function () {

    //new instance for this tool
    var ourRequest = new XMLHttpRequest();
    //define request
    //get request from the url
    ourRequest.open(`GET`, `https://learnwebcode.github.io/json-example/animals-1.json`);
    //when it loads run function
    ourRequest.onload = function () {
        //parse information so it doesnt interpret it as a string
        //access objects with index instead of individual characters
        var ourData = JSON.parse(ourRequest.responseText);
        renderHTML(ourData);
    };
    ourRequest.send();
})


function renderHTML(data) {
    var htmlString = "this is a test";
animalContainer.insertAdjacentHTML(`beforeend`, htmlString);
}




