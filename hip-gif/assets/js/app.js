// variables
var celebrations = ["Christmas","Halloween"];
var celebrationName;

// render gifs
$(document).on("click",".holiday-btn", function() {

  var celebration = $(this).attr("data-celebration");

  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" +
    celebration + "&api_key=UbE45OaEiLjCyYNkPzfusZ5qgMoEAKOF&limit=10";

  $.ajax({
      url: queryURL,
      method: "GET"
    })
    .then(function(response) {
      var results = response.data;
      for (var i = 0; i < results.length; i++) {
        console.log(response.data[i])
          var animateURL = response.data[i].images.fixed_height.url;
          var stillURL = response.data[i].images.fixed_height_still.url;
          var gifDiv = $("<div class='item'>");
          var rating = results[i].rating;
          var p = $("<p class='rating'>").text("Rating: " + rating);
          var personImage = $("<img class='img-thumbnail' data-state='still'>");
          personImage.attr("data-still", stillURL);
          personImage.attr("data-animate", animateURL);
          personImage.attr("src", results[i].images.fixed_height_still.url);
          gifDiv.append(personImage);
          gifDiv.append(p);
          $("#gifs").prepend(gifDiv);
      }
    });
});

// render new buttons
function renderButtons() {

  $("#buttons-view").empty();
  for (var i = 0; i < celebrations.length; i++) {
    var a = $("<button>");
    a.attr("data-celebration", celebrations[i]);
    a.attr("class", "holiday-btn btn btn-primary")
    a.text(celebrations[i]);
    $("#buttons-view").append(a);
  }
}

//add new button value to array
$("#add-celebration").on("click", function(event) {
  event.preventDefault();
  celebrationName = $("#celebration-input").val().trim();
  if (!celebrationName) {
    alert("You didn't write anything!");
  } else {
  celebrations.push(celebrationName);
  renderButtons();
}
});

//
$(document).on("click",".img-thumbnail", function() {
  var state = $(this).attr("data-state");
  if (state === "animate") {
    $(this).attr("data-state","still");
    $(this).attr("src", $(this).attr("data-still"));
  } else {
    $(this).attr("data-state","animate");
    $(this).attr("src", $(this).attr("data-animate"));
  }
});
