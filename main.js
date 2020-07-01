// import {displayDataMovie,addCardMovie} from './functions.js';
// import {theRequest} from './data.js';
const apiKey = "e17150e9";

let movie = document.getElementById('getMovie');
let getMovie = document.getElementById('submit');
let bySearch = document.getElementById('by-search');
let byYear = document.getElementById('movieYear');
let movieName;


// GET DATA EVENT
getMovie.addEventListener('submit', function(e){

  e.preventDefault();

  movieName = movie.value;

  byYear = Number(byYear.value); 

  theRequest(movieName);

 
  
});


// DOM ELEMENTS First round
// let card = document.querySelector('.card');
// let cardChildren = card.children;

  // let theTitle = card.querySelector('.the-title');
  // let theContent = card.querySelector('.the-content');
  // let theMovie =  card.querySelector('.the-link');
  // let theThumbnail = card.querySelector('.the-thumbnail');
  // let theYear = card.querySelector('.the-year');


  let displayDataMovie = (value) => {

    card.setAttribute('id',`movie_name_${movieName}`);
    card.dataset.movie = `${movieName}`;
  
    theThumbnail.setAttribute('src', `${value.Poster ? value.Poster : "https://s1.best-wallpaper.net/wallpaper/m/1712/Movie-projector-retro-style_m.webp"}`);
  
        theTitle.innerText = `${value.Title ? value.Title : "Pas de Titre"}`;
        theContent.innerText = `
        Durée : ${value.Runtime ? value.Runtime  : "Pas de data_durée"}
        Release : ${value.Year ? value.Year  : "Pas de data_année'"}
        Director : ${value.Director ? value.Director : "Pas de data_réalisateur" }
        Box-Office : ${value.BoxOffice ? value.BoxOffice  : "Pas de data_boxoffice"}
        Notes : ${value.imdbRating ? value.imdbRating  : "Pas de data_votes"} / 10
        Id : ${value.imdbID ? value.imdbID  : "Pas d'id Imdb "}`;
        
  
        theYear.innerText = `${value.Year ? value.Year : "Pas de données"}`;
  
        
        theMovie.setAttribute('href',`http://www.google.fr/search?q=${movieName}`);
        theMovie.dataset.imdb = `${value.imdbID ? value.imdbID  : "0"}`;
  
  
  }
  
 let addCardMovie = (element,movieData) => {
  
  
    let cardMovie = document.createElement('div');
    cardMovie.classList.add('card');
  
    let imgMovie = document.createElement('img');
    imgMovie.classList.add('the-thumbnail');
    imgMovie.setAttribute('src',`${ movieData.Poster === "N/A" ? "https://www.ionos.fr/digitalguide/fileadmin/DigitalGuide/Teaser/movie-maker-alternative.jpg" : movieData.Poster }`);

    let tooltip = document.createElement('span');
   tooltip.classList.add('tooltip');
   tooltip.innerText = `
  ${ movieData.Genre ? movieData.Genre : "non défini" }

   By : ${ movieData.Realisator ? movieData.Realisator : "non défini" }

   Prod: ${ movieData.Production ? movieData.Production : "non défini" }
   
   `;
  
    let yearMovie = document.createElement('span');
    yearMovie.classList.add('the-year');
    yearMovie.innerText = `${movieData.Year}`;
  
    let titleMovie = document.createElement('h2');
    titleMovie.classList.add('the-title');
    titleMovie.innerText = `${movieData.Title}`;
  
    let contentMovie = document.createElement('p');
    contentMovie.classList.add('the-content');
    contentMovie.innerText = `
    ${movieData.Plot ? movieData.Plot : 'Type : ' + movieData.Type}

    Durée : ${movieData.Runtime ? movieData.Runtime : ' non indiqué'}
    Critique : ${movieData.Ratings ? movieData.Ratings[1].Source + ' = ' + movieData.Ratings[1].Value : 'pas de notes' }
    `;
  
    let linkMovie = document.createElement('a');
    linkMovie.classList.add('button','the-link');
    linkMovie.innerText = 'Découvrir';
    linkMovie.setAttribute('href',`https://www.imdb.com/title/${movieData.imdbID}`);
  
  
    cardMovie.append(imgMovie,tooltip,yearMovie,titleMovie,contentMovie,linkMovie);
  
    element.append(cardMovie);
  
  }
   
  let theRequest = (movieName) => {
    
    let prom = new Promise(function(resolve,reject){
      
    // RQUEST
    const req = new XMLHttpRequest();
  
    let url ;
    
    if (bySearch.checked){
  
      url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}&y=${byYear}`;
      
      
    } else {
  
       url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}&y=${byYear}`; 
  
    }
    
    req.open('GET',`${url}`);
    req.send();
    
    

      req.onreadystatechange = function(){
    
        if (this.readyState === 4 && this.status === 200){

          let responseRequest = JSON.parse(this.responseText);

            resolve(responseRequest);
   
        } 
       
      }
  
    });
  

    prom.then(function(resolve){
  
        let datas = resolve ;

          console.dir(datas);

          if (!datas.Error) {

              // console.log('good request');

              let wrapper = document.createElement('div');
              wrapper.classList.add('wrapper');
              document.body.append(wrapper);
        
                if (bySearch.checked) {
          
                  let objectSearch = datas.Search;
          
                  wrapper.classList.add('mozaik');
          
                      for (let movie of objectSearch) {
            
                        addCardMovie(wrapper,movie); 
                
                      } 
          
                } else {
                  // BY Single TITLE
                  addCardMovie(wrapper,datas);
                }

          } else {

            noDataMovie(datas);
            removeElement(modal);

          }
      
    }).catch(function(error){
    
        throw new Error (`${error}
        // Problème dans le chainage de Promesse` );
     
    });
     
  }

 function noDataMovie(dataRequest) {

      let modal = document.createElement('div');
      modal.setAttribute('id','modal');
      modal.dataset.founding = dataRequest.Response;
    
      let modalWrapper = document.createElement('div');
      modalWrapper.classList.add('modal-content');
    
      let modalDesc = document.createElement('p');
      let modalTitle = document.createElement('h2');
      modalTitle.innerText = dataRequest.Error;
      modalDesc.classList.add('modal-text-error');
      modalDesc.innerHTML = `Le film <span class="boldMovie">${movieName}</span>, de l'année ${byYear} est introuvable`;
    
      let modalBoutton = document.createElement('button');
      modalBoutton.classList.add('button','btn-close');
      modalBoutton.innerText = " X ";
    
    
      modalWrapper.append(modalTitle,modalDesc,modalBoutton);
      
      modal.append(modalWrapper);

    
    document.body.append(modal);
   }

function removeElement(element){


  document.querySelector(`#modal .btn-close`).addEventListener('click',function(e){

    document.body.removeChild(document.getElementById('modal'));

    // Petit reload car pbm de nvarchar si request supp
    window.location.reload();
  
  });

}


  