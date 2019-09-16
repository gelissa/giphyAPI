// an array of movies that the submit button pushes into
// the variable is called topics

var topics = ["Inception", "IT", "Annihilation", "Titanic", "The+Dark+Knight", "Spiderman", "Mission Impossible", "Black Panther", "Endgame"];

function buttons(){
    for(var i = 0; i < topics.length; i++){
        var btn  = $("<button>");
        // give the  button a class 
        btn.addClass("movie-button");
        //then target the button with the class
        btn.attr("data-movie", topics[i]);
        // var movieName = 
        // console.log(topics[i]);
        btn.text(topics[i]);
        $(".button-items").append(btn); 
    }
};

buttons();

// button for the submit input
$("#submit").on("click", function(event){
    // stop submit button from doing whatever it does
    event.preventDefault();
    // get a movie from the user
    var userMovie = $("#add-item").val().trim();
    // push that movie to the topics array
    console.log(userMovie);
    // console.log($("topics").push(userMovie))
    // run the button function to add the item. 
    // buttons();
});


// create an onclick that calls the buttons and everything else
$(".movie-button").on("click", function(){

console.log("Clicked on one")
// allows me to grab the info form the data-movie which should align with it's own value (it's name)
var movieTopics = $(this).attr("data-movie");

// starts the GIPHY call
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
movieTopics + "&api_key=Oek1NkJPgKEtBktiKcsXU9MBfSUNjAG1&limit=10";

console.log(movieTopics);
console.log(queryURL);

// getting the api content from giphy
$.ajax({
    url: queryURL,
    method: "GET",
}).then(function(response) {
    console.log(response);

    // make a results variable to hold the response information
    var results = response.data
    
    // there is loop that creates a button for each array item
    for (var i = 0; i < results.length; i++){
        // dynamically make the div for the gifs
        var movieDiv = $("<div>");

        // rating variable
        var rating = results[i].rating;
        var p = $("<p>").text("Ratings: " + rating);

        // the img tag for the gifs
        var movieImage = $("<img>");

        movieImage.attr("src", results[i].images.fixed_height.url);
        movieImage.prepend(p);
        movieDiv.prepend(movieImage);

        $(".main-content").prepend(movieDiv);
    }
})
});


// the page will grab 10 gifs from giphy