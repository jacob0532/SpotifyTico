const datosArtistaNombre = JSON.parse(localStorage.getItem('datos-artista'));
const datosArtistaId = JSON.parse(localStorage.getItem('datos-artistaId'));
const datosDiscografia = JSON.parse(localStorage.getItem('datos-discografia'));
//const datosAlbumes = JSON.parse( '[' + localStorage.getItem('datos-albumes') + ']');
const datosAlbumes = JSON.parse(localStorage.getItem('datos-albumes'));
localStorage.removeItem('datos-artista');
localStorage.removeItem('datos-artistaId');
localStorage.removeItem('datos-discografia');
localStorage.removeItem('datos-albumes');

const getData = (url) => {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url, false);
    xhr.send(null);
    return xhr.response;
};

//Cargar informacion del acordion
const cargarPistas = (posicionAlbum) => {
    var elemento = document.getElementById('album' + posicionAlbum);
    if (elemento.innerHTML == '') {
        var htmlString = `
            <h2>Pistas</h2>
            <p>Click on the buttons to open the collapsible content.</p>`;
        var infoAlbum = datosAlbumes.album[posicionAlbum];
        var pistas = JSON.parse(getData('https://theaudiodb.com/api/v1/json/1/track.php?m=' + infoAlbum.idAlbum));
        for (var i = 0; i < pistas.track.length; i++) {
            var pistaActual = pistas.track[i];
            htmlString += `
            <button class="accordion2"><img src="./img/icon3.png" style="width:4%;">` + pistaActual.strTrack + `</button>
            <div class="panel2">
                <p>` + pistaActual.strDescriptionES + `</p>
                <iframe width="800" height="200" src="` + pistaActual.strMusicVid + `"
                    title="YouTube video player" frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
            </div>`;
        }
        elemento.innerHTML += htmlString;
    }
}