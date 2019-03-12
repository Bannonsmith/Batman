let submitButton = document.getElementById("submitButton")
let movieTitle = document.getElementById("movieTitle")
let group = document.getElementById("group")



submitButton.addEventListener("click", function(){
  let batmanUrl = "http://www.omdbapi.com/?s=batman&apikey=cf45e7b1"

  let submitRequest = new XMLHttpRequest()
  submitRequest.open("GET",batmanUrl)
  submitRequest.send()
  submitRequest.onload = function() {
    if(submitRequest.status != 200) {
      console.log("Server not found.")
    } else {
      console.log("Response Recieved")
      console.log(submitRequest.responseText)
      console.log(JSON.parse(submitRequest.responseText))
      let moviesFeedback = JSON.parse(submitRequest.responseText)
      displayMovieDetails(moviesFeedback)
    }
  }


})

function displayMovieDetails(movie) {

  let movies = movie.Search.map(function(movie) {
    return `<div>
            <li><image src="${movie.Poster}"></image></li>
            <li>${movie.Title}</li>
            </div>`
            // <li>${movie.Type}</li>
            // <li>${movie.Year}</li>
            // <li>${movie.imdbID}</li>
  })

  movieTitle.innerHTML = movies.join('')

}
//listItems to uppercase when your mouse moves over them
movieTitle.addEventListener("onclick", (event) => {
 if (event.target.tagName == "LI") {
   // event.target.textContent = event.target.textContent.toUpperCase();
   // function displayMovieDetails(movie) {
   function displayMovieDetails(movie) {

    let movies = movie.Search.map(function(movie) {
       return `<div>
               <li><image src="${movie.Poster}"></image></li>
               <li>${movie.Title}</li>
               <li>${movie.Type}</li>
               <li>${movie.Year}</li>
               <li>${movie.imdbID}</li>
               </div>`
    })
   };
 }
});
//  //list items back to lowercase when your mouse moves over them
movieTitle.addEventListener("mouseout", (event) => {
   if (event.target.tagName == "LI") {
     // event.target.textContent = event.target.textContent.toLowerCase();
     function displayMovieDetails(movie) {

      let movies = movie.Search.map(function(movie) {
         return `<div>
                 <li><image src="${movie.Poster}"></image></li>
                 <li>${movie.Title}</li>
                 </div>`
      })
     };
   }
});
