Let datos = fetch("producto.json");
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