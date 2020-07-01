export {theRequest} ;

let theRequest = (movieName) => {
    
    let prom = new Promise(function(resolve,reject){
      
    // RQUEST
    const req = new XMLHttpRequest();
  
    let url ;
    
  
    if (bySearch.checked){
  
      url = `https://www.omdbapi.com/?apikey=${apiKey}&s=${movieName}`;
      
      
    } else {
  
       url = `https://www.omdbapi.com/?apikey=${apiKey}&t=${movieName}`;
  
    }
    
    req.open('GET',`${url}`);
    req.send();
  
      req.onreadystatechange = function(){
  
        if (this.readyState === 4 && this.status === 200){
  
          resolve(this.responseText);
  
        }
      }
  
    });
  
      prom.then(function(resolve){
  
        let datas = JSON.parse(resolve);
          console.dir(datas);
  
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
        
    },function(reject){

        alert('powned Request');
        // console.warn('errors Request');
       
    });
     
  }