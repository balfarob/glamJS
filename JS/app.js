/*solucion de bluuweb
Document.addEventListener('DOMContentLoaded', () => {
  fetchData()
})

const fetchData = async () => {
  try{
    const res = await fetch('api.json')    
    const data = await res.json()
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}
*/
document.addEventListener('DOMContentLoaded', () => {
	articulosCarrito = JSON.parse(localStorage.getItem('carrito')) || [];

	insertarCarritoHTML();
})