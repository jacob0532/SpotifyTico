//const url1 = 'https://theaudiodb.com/api/v1/json/1/search.php?s=coldplay'      //artista x nombre
//const aplicacion = document.querySelector('.container');
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
obtenerInformacionArtista(1);


function obtenerInformacionArtista(codigo){
	const url = 'https://theaudiodb.com/api/v1/json/1/search.php?s=' + localStorage.getItem("nombreArtista");
	fetch(url)
    .then(respuesta=> respuesta.json())
    .then(datos => {
    datos.artists.forEach(artista =>{
    	localStorage.setItem("idArtista",artista.idArtist)
    	if (codigo==1) {
    		desplegarInformacionArtista1(artista.strArtist,artista.strStyle,artista.strGenre,artista.strArtistLogo)
    	}
    	if (codigo==2){
    		desplegarInformacionArtista2(artista.strArtist,artista.strBiographyES,artista.strArtistThumb)
    	}
    	if (codigo==3){
    		let imagenes = [artista.strArtistFanart,artista.strArtistFanart2,artista.strArtistFanart3,artista.strArtistFanart4]
    		ponerImagenes(imagenes)
    	}
    });
    })
    .catch(err => console.log(err))
}


function obtenerInformacionAlbum(){
	var stringHtml = "<h2 id='tituloAlbumes' onclick='cerrarVentanaAlbumes()'>Álbumes</h2>";
	const url2 = 'https://theaudiodb.com/api/v1/json/1/album.php?i=' + localStorage.getItem("idArtista");
	fetch(url2)
    .then(respuesta=> respuesta.json())
    .then(datos => {
    datos.album.forEach(musica =>{
    	stringHtml+="<button id='botonAlbumes' class='accordion'><img src="+musica.strAlbumThumb+" style='width:10%;'>"+musica.strAlbum+"</button><p id='botonAlbumes2'>"+
        "<ol id='lista'><li id='lista1'>Artista: "+musica.strArtist+"</li>"+
        "<li id='lista2'>Año de lanzamiento:"+musica.intYearReleased+"</li>"+
        "<li id='lista3'>Estilo: "+musica.strStyle+"</li>"+
        "<li id='lista4'>Descripcion: "+musica.strDescriptionEN+"</li></ol></p>" 	
    });
    document.getElementById('contenedorDiscos').innerHTML = stringHtml ;
    })
    .catch(err => console.log(err))
}

function obtenerVideos(){
	const url3 = 'https://theaudiodb.com/api/v1/json/1/mvid.php?i=' + localStorage.getItem("idArtista");
	var stringHtml = ''
	fetch(url3)
    .then(respuesta=> respuesta.json())
    .then(datos => {
    datos.mvids.forEach(videos =>{
    	stringHtml+="<button id='botonAlbumesx' class='accordion'><img src="+videos.strTrackThumb+" style='width:10%;'>"+videos.strTrack+"</button>"
    	stringHtml+="<iframe width='870' height='300' src='"+videos.strMusicVid+
        "'</iframe>"
        

    });
    document.getElementById('contenedorDiscos2').innerHTML = stringHtml ;
    })
    .catch(err => console.log(err))


}

function obtenerAlbum(id){
	const url2 = 'https://theaudiodb.com/api/v1/json/1/album.php?i=' + localStorage.getItem("idArtista");
	fetch(url2)
    .then(respuesta=> respuesta.json())
    .then(datos => {
    datos.album.forEach(musica =>{
    	if (musica.idAlbum  = id) {
    		return musica.strAlbum
    	}	
    });
    })
    .catch(err => console.log(err))
}

function desplegarInformacionArtista1(nombre,estilo,genero,logo){
	const tituloArtista = document.getElementById("titulo123")
	const parrafoInfoArtista = document.getElementById("infoBanda")
	document.getElementById('imagenLogo').src=logo;
	tituloArtista.innerHTML = nombre;
	parrafoInfoArtista.innerHTML = "Estilo: "+estilo+"<br> Genero: "+genero;
}
function desplegarInformacionArtista2(nombre,bibliografia,imagenPerfil){
	const aplicacion = document.querySelector('.tm-main-content');
	var d = document.createElement("div");
	var d2 = document.createElement("div");
	d.innerHTML = 
	"<div id='myDiv1' style='background-color: black;'  class='container'><div class='col-12'><h2 onclick='cerrarVentanaBibliografia()'class='tm-page-title'style='background-color: black;' align='center' id='descNombre-nombreArtista'>"
	+nombre+"</h2></div></div>"
	d2.innerHTML = 
	"<div id='myDiv2' class='row'style='background-color: black;'><div class='col-md-6'><img id='imagenNombre' width='650' height='1200' src="+
	imagenPerfil+"></div><div class='col-md-6'><p id='descripcionNombre-artista'>"+bibliografia+" </p></div></div>";
	
	aplicacion.insertBefore(d,aplicacion.childNodes[6]);
	aplicacion.insertBefore(d2,aplicacion.childNodes[7]);
}
function cerrarVentanaBibliografia(){
	document.getElementById("myDiv1").remove();
	document.getElementById("myDiv2").remove();
}
function cerrarVentanaImagenes(){
	document.getElementById("GFG1").remove();
	document.getElementById("GFG2").remove();
}
function cerrarVentanaAlbumes(){
	document.getElementById("tituloAlbumes").remove();
	while(document.getElementById("botonAlbumes")!=null){
		document.getElementById("botonAlbumes").remove();
		document.getElementById("botonAlbumes2").remove();
		document.getElementById("lista").remove();
		document.getElementById("lista1").remove();
		document.getElementById("lista2").remove();
		document.getElementById("lista3").remove();
		document.getElementById("lista4").remove();
	}
}


function ponerImagenes(imagenes){
    let htmlString1 = "";
    let htmlString2 = "";
    htmlString1 ="<h2 id='GFG1'onclick='cerrarVentanaImagenes()'class='tm-page-title'>Imágenes</h2>"+"<div id='GFG2' class='carousel slide' data-ride='carousel'>"+"<ul class='carousel-indicators'>";
    if(imagenes[0]!=null){
        htmlString1 +="<li data-target='#GFG2' data-slide-to='0' class='active'></li>";
        htmlString2 += "<div class='carousel-inner'><div class='carousel-item active'><img src='"+imagenes[0]+"'alt='GFG2'style='width: 200;height: 200;'/></div>";

    }
    if(imagenes[1]!=null){
        htmlString1 +="<li data-target='#GFG2' data-slide-to='1'></li>";
        htmlString2 += "<div class='carousel-item'><img src='"+imagenes[1]+"'alt='GFG2'style='width: 200;height: 200;'/></div>";
        
    }
    if(imagenes[2]!=null){
        htmlString1 +="<li data-target='#GFG2' data-slide-to='2'></li>";
        htmlString2 += "<div class='carousel-item'><img src='"+imagenes[2]+"'alt='GFG2'style='width: 200;height: 200;'/></div>";
        
    }
    if(imagenes[3]!=null){
        htmlString1 +="<li data-target='#GFG2' data-slide-to='3'></li>";
        htmlString2 += "<div class='carousel-item'><img src='"+imagenes[3]+"'alt='GFG2'style='width: 200;height: 200;'/></div>";
    }
    htmlString1+="</ul>";
    htmlString2+="<a class='carousel-control-prev' href='#GFG2' data-slide='prev'><span class='carousel-control-prev-icon'></span></a><a class='carousel-control-next'href='#GFG2'data-slide='next'><span class='carousel-control-next-icon'></span></a>"+"</div>";
    document.getElementById('GFG').innerHTML = htmlString1+htmlString2;
}



