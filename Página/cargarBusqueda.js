const searchbtn = document.getElementById('button-search');
const posicionResultados = document.getElementById('resultados');

let data = null;

/*
    getData: Consigue informacion de la api
        posicion: Parametro para decidir que tipo de informacion consigue
            -1   : Busqueda por nombre
            otros: Busqueda por id (Posicion dentro del array de resultados)
*/
const getData = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.response;
};

const cargarPantallaArtista = (datosArtistaPosicion) => {
    let artistId = data.artists[datosArtistaPosicion].idArtist;
    let datosArtistaId = JSON.parse(getData('https://theaudiodb.com/api/v1/json/1/artist.php?i=' + artistId));
    let datosDiscografia = getData('https://theaudiodb.com/api/v1/json/1/discography.php?s=' + data.artists[datosArtistaPosicion].strArtist);
    let datosAlbumes = JSON.parse(getData('https://theaudiodb.com/api/v1/json/1/album.php?i=' + artistId));
    let datosVideos = getData('https://theaudiodb.com/api/v1/json/1/mvid.php?i=' + artistId);
    /*
    let datosInfoAlbumes = [];
    let albumId = '';
    for (let i = 0; i < datosAlbumes.album.length; i++) {
        datosInfoAlbumes.push([]);
        albumId = datosAlbumes.album[i].idAlbum;
        //datosInfoAlbumes[i].push(getData('https://theaudiodb.com/api/v1/json/1/album.php?m=' + albumId));
        datosInfoAlbumes[i].push(datosAlbumes.album[i]);
        datosInfoAlbumes[i].push(getData('https://theaudiodb.com/api/v1/json/1/track.php?m=' + albumId));
    }
    */
    localStorage.setItem('datos-artista', JSON.stringify(data.artists[datosArtistaPosicion]));
    localStorage.setItem('datos-artistaId', JSON.stringify(datosArtistaId.artists[0]));
    localStorage.setItem('datos-discografia', datosDiscografia);
    localStorage.setItem('datos-albumes', JSON.stringify(datosAlbumes));
    localStorage.setItem('datos-videos', datosVideos);
    //localStorage.setItem('datos-albumes', datosInfoAlbumes.toString());
    window.location.href = "grupoMusical.html";
}

const cargarResultados = () => {
    let htmlString = '';
    if(data.artists != null){
        for(let i = 0; data.artists[i] != null; i++){
            htmlString += '<li class="list-group-item">' + data.artists[i].strArtist + 
                                `<div class="buttons">
                                    <button id="button-` + i + `" onclick="cargarPantallaArtista(` + i + `)">Select</button>
                                </div><img src="` + data.artists[i].strArtistLogo + '" width="200" height="40"></img></li>';
        }
    }
    document.getElementById('posicion-Resultados').innerHTML = htmlString;
    //posicionResultados.innerHTML = htmlString;
};

searchbtn.addEventListener('click', function() { data = JSON.parse(getData('https://theaudiodb.com/api/v1/json/1/search.php?s=' + document.getElementById("search-bar").value));
                                                 cargarResultados(); });