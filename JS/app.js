fetch('https://productosglam-2daa7-default-rtdb.firebaseio.com/')
  .then( res => res.json())
  .then(data => console.log(data))
/* La forma que enseñó el profesor*/
/*Let = fetch('api.json')
.then( res => res.json())
.then(datos => console.log(datos))*/
/*Intento de las clases
$("button").click(funtion(){

})*/
/*Intento de las clases 2
$.ajax({
  "data/producto.json"
})*/
/*intento 10.000*/
Let = fetch("producto.json");
///tomar productos
class Products {
  async getProducts(){
    try {
    let result = await fetch("producto.json");
    let data = await result.json();
    let products = data.products;

    return products;
    }
    catch (error) {
      console.log('error');
    }
  }
}