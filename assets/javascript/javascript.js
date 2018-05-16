var topics = ["surf", "fly", "beach", "motorcycle", "ninjas"];

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