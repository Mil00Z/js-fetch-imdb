export {displayDataMovie,addCardMovie,noDatas};

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
    imgMovie.setAttribute('src',`${movieData.Poster}`);
  
    let yearMovie = document.createElement('span');
    yearMovie.classList.add('the-year');
    yearMovie.innerText = `${movieData.Year}`;
  
    let titleMovie = document.createElement('h2');
    titleMovie.classList.add('the-title');
    titleMovie.innerText = `${movieData.Title}`;
  
    let contentMovie = document.createElement('p');
    contentMovie.classList.add('the-content');
    contentMovie.innerText = `ID : ${movieData.imdbID}`;
  
    let linkMovie = document.createElement('a');
    linkMovie.classList.add('button','the-link');
    linkMovie.innerText = 'Découvrir';
    linkMovie.setAttribute('href',`http://www.google.fr/search?q=${movieData.Title}`);
  
  
    cardMovie.append(imgMovie,yearMovie,titleMovie,contentMovie,linkMovie);
  
    element.append(cardMovie);
  
  }

 function noDatas() {

   let modal = document.createElement('div');
   modal.classList.add('#modal');
 
   let modalWrapper = document.createElement('div');
   modalWrapper.classList.add('modal-content');
 
   let modalDesc = document.createElement('p');
   p.classList.add('modal-text-error');
 
   let modalBoutton = document.createElement('button');
   modalBoutton.classList.add('btn btn-close');
   modalBoutton.append.innerText = " X ";
 
 
   modal.append(modalWrapper,modalDesc,modalBoutton);
   
   document.body.append(modal);
 
  }
  
 