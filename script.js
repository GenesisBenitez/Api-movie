const movieSearchUrl = "http://www.omdbapi.com/?t=";
const apiKeyPreFix = "&apikey="
const apiKey = "537b949d";


$(document).ready(function(){


    $("#movieSearchForm").submit(function(e){
        $("#filmInfo").empty();
        $("#error").empty();   

        let movieSearchValue = document.getElementById("movieSearchValue").value;
        e.preventDefault();
        let movieSearchArray = movieSearchValue.split(" ");
        let movieSearchValueJoined = movieSearchArray.join("+");
    
        fetch(movieSearchUrl + movieSearchValueJoined + apiKeyPreFix + apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            let movieGenres = data.Genre.split(",");

            $("#filmInfo").append(
            `
            
            <div class="row bg-light">
            <div class="row mt-4">
            <h1 class="display-6">${data.Title}</h1>
            <div class="d-flex justify-content-start">
                    <div class="p-2 bd-highlight">${data.Year}</div>
                    <div class="p-2 bd-highlight">${data.Runtime}</div>
                    </div>
        
            </div>
            <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" style="max-width:14rem; max-height: 20rem;">
              <img src="${data.Poster}" width="100%" height="100%" alt="">
            </div>
            <div class="col-8 col-sm-8 col-md-8 col-lg-8 col-xl-8">
            <div class="row mt-3">
              <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"8>
              <button class="btn btn-dark genreButton">${movieGenres[0]}</button>
              <button class="btn btn-dark genreButton">${movieGenres[1]}</button>

              
            </div>
            </div>
            <div class="row mt-3">
              <p>${data.Plot}</p>
              <div class="row mb-4">
                <div class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12"8>
                <button class="btn btn-dark "><i class="fa fa-star text-warning"></i> ${data.Ratings[0].Value}</button>
                <button class="btn btn-dark "><i class="fa fa-star text-primary"></i> <b>Rate</b></button>
                
              </div>
              </div>
            </div>
            </div>
            </div>
            
            `)
        }).catch(function(error){
            $("#filmInfo").empty();
            $("#error").empty();
            $("#error").append(`
            <div class="container mt-4 bg-light text-center">
           <h5>Something went wrong trying to process your request, please try again...</h5> 
           <b>${error}</b>
           </div> 
           `
            );
        })

    
    })



})