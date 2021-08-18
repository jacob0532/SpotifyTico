const posicionResultados = document.getElementById('bandasCompletas');

const getData = () => {
  
    const xhr = new XMLHttpRequest();
  
    xhr.open('GET', 'https://theaudiodb.com/api/v1/json/1/search.php?s=' + localStorage.getItem("nombreBanda"));
    xhr.send(null);
  
    xhr.responseType = 'json';
  
    xhr.onload = () => {
        const data = xhr.response
        cargarResultados(data);
    };
  
  
};
const cargarResultados = (data) => {
    let htmlString = '<li class="banda">';
    for (let i = 0; data.artists[i] != null; i++) {
        htmlString += ' <h2>' + data.artists[i].strArtist + '</h2> ';
    }
    htmlString += '</li>';
    posicionResultados.innerHTML = htmlString;
};

getData();