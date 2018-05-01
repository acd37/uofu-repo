require("dotenv").config();

const keys = require('./keys');
const Twitter = require('twitter');
const Spotify = require('node-spotify-api');
const request = require('request');
const fs = require('fs');

var spotify = new Spotify(keys.spotify);
var twitter = new Twitter(keys.twitter);
var omdb = keys.omdb;

var a = process.argv[2];
var b = process.argv[3];




function getMovieData(){
  var movieTitle = b.split(' ').join('+');
  console.log(movieTitle);
  request(`http://www.omdbapi.com/?t=${movieTitle}&y=2012&apikey=${omdb.id}`, function (error, response, body) {
    var x = JSON.parse(body); // Print the HTML for the Google homepage.
    console.log('-------------------------------------')
    console.log('Title: ' + x.Title);
    console.log('Year of Production: ' + x.Year);
    console.log('IMDb Rating: ' + x.imdbRating);
    if (x.Ratings[1]){
    console.log('Rotten Tomatoes Rating: ' + x.Ratings[1].Value);
  } else {
    console.log('Rotten Tomatoes Rating: N/A');
  }
    console.log('Country of Production: ' + x.Country);
    console.log('Plot: ' + x.Plot);
    console.log('Actors: ' + x.Actors);
    console.log('-------------------------------------')
  });
}


function getTweets(){
  var params = {screen_name: 'acdown87'};
  twitter.get('statuses/user_timeline', params, function(error, tweets, response){
    if(error) throw error;
    for (var i = 0; i < 20; i++) {
      console.log('-------------------------------------')
      console.log(`Date: ${tweets[i].created_at}`);
      console.log(`Tweet: ${tweets[i].text}`);
    }
  });
};


function getSpotifyData(){
  spotify.search({ type: 'track', query: b }, function(err, data) {
    if (err) {
     spotify.search({ type: 'track', query: 'The Sign Ace of Base' }, function(err, data) {
     console.log('There was an error. But here is a track for you anyway:')
     console.log(`Artist: ${data.tracks.items[0].album.artists[0].name}`);
     console.log(`Track Name: ${data.tracks.items[0].name}`);
     console.log(`Preview URL: ${data.tracks.items[0].album.href}`);
     console.log(`Album Name: ${data.tracks.items[0].album.name}`);
   });
 };
  console.log('-------------------------------------')
  console.log(`Artist: ${data.tracks.items[0].album.artists[0].name}`);
  console.log(`Track Name: ${data.tracks.items[0].name}`);
  console.log(`Preview URL: ${data.tracks.items[0].album.href}`);
  console.log(`Album Name: ${data.tracks.items[0].album.name}`);
  console.log('-------------------------------------')
  });
};




if (a === 'movie-this'){
  getMovieData();
};

if (a === 'my-tweets'){
  getTweets();
};

if (a === 'spotify-this-song'){
  getSpotifyData();
};

if (a === 'do-what-it-says'){

  fs.readFile('random.txt', 'utf8', (err, data) => {
  if (err) throw err;
    data = data.split(',');
    console.log(data);
    a = data[0];
    b = data[1];
    if (a === 'movie-this'){
      getMovieData();
    } else if (a ==='my-tweets\n'){
      getTweets();
    } else if (a === 'spotify-this-song'){
      getSpotifyData();
    }
  });
};
