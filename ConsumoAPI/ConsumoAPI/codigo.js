//referencia
const aplicacion = document.querySelector('.container')

//peticion
const url = 'https://theaudiodb.com/api/v1/json/1/discography.php?s=coldplay'

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