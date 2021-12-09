
// Se crea un array que contendra los productos como objetos dentro del mismo, con su codigo de identificacion, su nombre y su precio

const productos = [{ id:02, producto:"Hondo", precio:400},
    { id:01, producto:"Playo", precio:450},
    { id:04, producto:"Aceiteroo", precio:200},
    { id:06, producto:"Posacuenco", precio:100},
    { id:03, producto:"Entrada", precio:300},
    // { id:05, producto:"Servilletero", precio:150},

]
//Agrego un producto mas con push

productos.push({ id:05, producto:"Servilletero", precio:150},)

console.log(productos)

//Muestro por consola el nombre de los productos con su precio

for (const producto of productos){
    console.log("El producto " + producto.producto + " tiene un precio de " + producto.precio)
 
}
//Filtro los productos con un precio mayor a 299 que seran los mas caros

const caros = productos.filter( p => p.precio > 299)

console.log("Los productos con mayor precio son")
console.log( caros)

