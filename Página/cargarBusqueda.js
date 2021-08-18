const searchbtn = document.getElementById('button-search');
const posicionResultados = document.getElementById('resultados');

let data = null;
let htmlString = '';

const getData = () => {
    
    htmlString = '';

    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'https://theaudiodb.com/api/v1/json/1/search.php?s=' + document.getElementById("search-bar").value);
    xhr.send(null);
  
    xhr.responseType = 'json';
  
    xhr.onload = () => {
        data = xhr.response
        cargarResultados(data);
    };
  
  
};
const cargarResultados = (data) => {
    let htmlString = '';
    if(data.artists != null){
        for(let i = 0; data.artists[i] != null; i++){
            htmlString += '<li class="list-group-item">' + data.artists[i].strArtist + '</li> <img src="' + data.artists[i].strArtistBanner + '"></img>';
        }
    }
    document.getElementById('posicion-Resultados').innerHTML = htmlString;
    //posicionResultados.innerHTML = htmlString;
};

searchbtn.addEventListener('click', getData);