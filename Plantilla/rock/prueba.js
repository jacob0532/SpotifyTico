const getBtn = document.getElementById('search3-btn');
const searchBar = document.getElementById("search-bar");

const getData = () => {
  localStorage.setItem("nombreBanda", searchBar.value);

};

getBtn.addEventListener('click', getData);