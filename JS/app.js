 /*fetch('https://regres.in/api/users')
  .then( res => res.json())
  .then(data => console.log(data))*/
/* La forma que enseñó el profesor*/
/*Let = fetch('api.json')
.then( res => res.json())
.then(datos => console.log(datos))*/
/*Intento de las clases
$("button").click(funtion(){

})*/
/*intento 10.000*/
///tomar productos
class Products {
  async getProducts(){
    try {
    let result = await fetch("producto.json");
    let data = await result.json();
    let products = data.products;

    return products;
    }
  }
}