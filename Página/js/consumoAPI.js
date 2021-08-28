const url1 = 'https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay'      //artista x nombre
const aplicacion = document.getElementById('jojo')
/*var artistaFinal  = {
	imagenes: [artista.strArtistFanart,artista.strArtistFanart2,artista.strArtistFanart3,
    artista.strArtistFanart4],
    id : artista.idArtist,
    nombre : artista.strArtist,
    estilo : artista.strStyle,
    genero : artista.strGenre,
    bibliografia: artista.strBiographyES,
    imagenPerfil: artista.strArtistThumb,
    logo : artista.strArtistLogo,
};*/
function obtenerInformacionArtista(codigo){
	fetch(url1)
    .then(respuesta=> respuesta.json())
    .then(datos => {
    datos.artists.forEach(artista =>{
    	if (codigo==1) {
    		desplegarInformacionArtista1(artista.strArtist,artista.strStyle)
    	}
    	else{
    		desplegarInformacionArtista2(artista.strArtist,artista.strStyle,artista.strStyle,artista.strStyle
    			,artista.strStyle,artista.strStyle,artista.strStyle,artista.strStyle)

    	}
    });
    })
    .catch(err => console.log(err))
}

function desplegarInformacionArtista1(logo,nombre){
	//window.alert(logo + "---"+nombre);
	aplicacion.innerHTML = "holaaaaaaaaaaaaaaa";

}
function desplegarInformacionArtista2(id,nombre,estilo,genero,bibliografia,imagenPerfil,logo,imagenes){
	window.alert(nombre);

}
/*
class Album{
	Album(id,nombre,anio,artista,estilo,genero,imagen,descripcion){
		this.id = id;
		this.nombre = nombre;
		this.anio = anio;
		this.artista = artista;
		this.estilo = estilo;
		this.genero = genero;
		this.imagen = imagen;
		this.descripcion = descripcion;
	}
}

class Mvids{
	Mvids(nombre,imagen,link){
		this.nombre = nombre;
		this.imagen = imagen;
		this.link = link;
	}

}*/