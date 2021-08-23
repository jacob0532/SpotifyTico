const datosArtistaNombre = JSON.parse(localStorage.getItem('datos-artista'));
const datosArtistaId = JSON.parse(localStorage.getItem('datos-artistaId'));
const datosDiscografia = JSON.parse(localStorage.getItem('datos-discografia'));
const datosAlbumes = JSON.parse( '[' + localStorage.getItem('datos-albumes') + ']');
localStorage.removeItem('datos-artista');
localStorage.removeItem('datos-artistaId');
localStorage.removeItem('datos-discografia');
localStorage.removeItem('datos-albumes');