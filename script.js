const movieSearchUrl = "http://www.omdbapi.com/?t=";
const apiKeyPreFix = "&apikey="
const apiKey = "537b949d";


$(document).ready(function(){

    $("#movieSearchForm").submit(function(e){
        $("#movieCards").empty();   

        let movieSearchValue = document.getElementById("movieSearchValue").value;
        e.preventDefault();
        let movieSearchArray = movieSearchValue.split(" ");
        let movieSearchValueJoined = movieSearchArray.join("+");
    
        fetch(movieSearchUrl + movieSearchValueJoined + apiKeyPreFix + apiKey)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            $("#movieCards").append(
            `
                <div class="col-4 col-sm-4 col-md-4 col-lg-4 col-xl-4" align="center">
                    <div class="card" style="width: 18rem;">
                        <img src="${data.Poster}" class="card-img-top" alt="..." width="100%" height="350">
                            <div class="card-body">
                        <h5 class="card-title">${data.Title}</h5>
                        <p class="card-text">${data.Plot}</p>
                        <a href="#" class="btn btn-primary">More details</a>
                        </div>
                     </div>
                </div>
            
            `)
        })
    })


})