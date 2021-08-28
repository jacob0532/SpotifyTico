//referencia
const aplicacion = document.querySelector('.container');


//peticion
const url = 'https://theaudiodb.com/api/v1/json/1/discography.php?s=coldplay'  //álbumes
const url2 = 'https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay'      //artista x nombre

fetch(url)
//a estos .then se les llama promesas
.then(respuesta => respuesta.json())//se captura todo el objeto json para poder recorrerlo
.then(datos => {
    //datos.album da acceso al array que contiene los elementos o el contenido del archivo json
    datos.album.forEach(tituloAlbum => { //tituloAlbum es la variable que recorrera cada uno de los elementos del array
        console.log(tituloAlbum.strAlbum)//se captura el strAlbum que es un dato del array(en este caso el titulo) del json
        //estas lineas muestran los datos al usuario en pantalla
        const p = document.createElement('p')
        p.innerHTML = tituloAlbum.strAlbum
        aplicacion.appendChild(p)
    });
    //console.log(data.album)
})
//si alguna de las promesas falla capturamos el error
.catch(err => console.log(err))
//obtenerInfoArtista();
function obtenerInfoArtista(){
    fetch(url2)
    .then(respuesta=> respuesta.json())
    .then(datos => {
    datos.artists.forEach(artista =>{
        window.alert(artista.idArtist);
        const p1 = document.createElement('p')
        const p2 = document.createElement('p')
        const p3 = document.createElement('p')
        const p4 = document.createElement('p')
        const p5 = document.createElement('p')
        /*const img1 = document.createElement('img')
        const img2 = document.createElement('img')
        const img3 = document.createElement('img')
        const img4 = document.createElement('img')
        const img5 = document.createElement('img')
        const img6 = document.createElement('img')*/
        p1.innerHTML = artista.idArtist
        p2.innerHTML = artista.strArtist
        p3.innerHTML = artista.strStyle
        p4.innerHTML = artista.strGenre
        p5.innerHTML = artista.strBiographyES
        /*img1.innerHTML = artista.strArtistThumb
        img2.innerHTML = artista.strArtistLogo
        img3.innerHTML = artista.strArtistFanart
        img4.innerHTML = artista.strArtistFanart2
        img5.innerHTML = artista.strArtistFanart3
        img6.innerHTML = artista.strArtistFanart4*/
        window.alert(artista.strArtistThumb);
        aplicacion.appendChild(p1)
        aplicacion.appendChild(p2)
        aplicacion.appendChild(p3)
        aplicacion.appendChild(p4)
        aplicacion.appendChild(p5)
        /*aplicacion.appendChild(img1)
        aplicacion.appendChild(img2)
        aplicacion.appendChild(img3)
        aplicacion.appendChild(img4)
        aplicacion.appendChild(img5)
        aplicacion.appendChild(img6)*/

    });
        
    })
    .catch(err => console.log(err))
}
