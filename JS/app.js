/*
Acceder a la data con fetch API, utilizando AJAX
*/
fetch('api.json')
  .then( res => res.json())
  .then(data => console.log(data))