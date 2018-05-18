var topics = ["surf", "fly", "beach", "motorcycle", "ninjas"];

/** SUGGESTIONS **/
// 1. declare the queryURL variable globally
var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=";

// 2. Wrap your repetitive code into a function named generateGif 
function generateGif(keyword) {
    var gifURL = queryURL + keyword;
    $.ajax({
        url: gifURL,
        method: "GET"
    })
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");
        image.attr("src", imageURL);
        image.attr("alt", keyword);
        $("#images").prepend(image);
    });
    
// 3. and now you can reuse your function generateGif for each button like this...
    $("#surf").on("click", generateGif("surf"));
    $("#fly").on("click", generateGif("fly"));
    
// 4. For the next step, you can try to refactor your code and see how to use a for loop to generate buttons dynamically :)
    

$("#surf").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=surf"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");

        image.attr("src", imageURL);
        image.attr("alt", "surf image");

        $("#images").prepend(image);
    });
});

$("#fly").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=fly"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");

        image.attr("src", imageURL);
        image.attr("alt", "fly image");

        $("#images").prepend(image);
    });
});

$("#beach").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=beach"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");

        image.attr("src", imageURL);
        image.attr("alt", "beach image");

        $("#images").prepend(image);
    });
});

$("#motorcycle").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=motorcycle"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");

        image.attr("src", imageURL);
        image.attr("alt", "motorcycle image");

        $("#images").prepend(image);
    });
});

$("#fire").on("click", function(){
    var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=Y32hi09aY0Vg8T1gZEp3rjSzkS0OhHKd&tag=fire"
        
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    
    .then(function(response) {
        var imageURL = response.data.image_original_url;
        var image = $("<img>");

        image.attr("src", imageURL);
        image.attr("alt", "fire image");

        $("#images").prepend(image);
    });
});
