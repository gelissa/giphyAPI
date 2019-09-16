// create an onclick that calls the buttons and everything else
$("#submit").on("click", function(){

// an array of movies that the submit button pushes into
// the variable is called topics

var topics = ["Inception", "IT", "Annihilation", "Titanic", "The Dark Knight", "Spiderman", "Mission Impossible", "Black Panther", "Endgame"];

var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
topics + "&api_key=Oek1NkJPgKEtBktiKcsXU9MBfSUNjAG1&limit=10";

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


    }
})
});


// the page will grab 10 gifs from giphy