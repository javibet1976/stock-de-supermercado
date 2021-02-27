

//LOS DATOS DEL EMPLEADO:
document.getElementById("botonDatosEmpleado").addEventListener("click", datosEmpleado)

function datosEmpleado () {
  let nombreEmpleado = document.getElementById("nombreEmpleado").value
  let apellidoEmpleado = document.getElementById("apellidoEmpleado").value
  let nombreCompletoEmpleado = (nombreEmpleado + " " + apellidoEmpleado) 

  let nodoUsuario = document.createElement("h3")
  nodoUsuario.setAttribute ("id", "bienvenida")                           
  
  let nodoUsuarioTexto = document.createTextNode("Bienvenido ¡" + nombreCompletoEmpleado.toUpperCase() + "!")
  nodoUsuario.appendChild(nodoUsuarioTexto)
  document.getElementById("formularioEmpleados").appendChild(nodoUsuario)  
}





//LOS DATOS DEL SELECT
var array = ["Leche", "Arroz", "Café", "Fideos", "Mate"];
 array.sort();                                                 // Ordena el Array Alfabeticamente
 addOptions("producto", array);


function myOnLoad() { cargar_productos() }                    //Para el SELECT
function cargar_productos() { }                               //Carga los datos del array al select
function addOptions(domElement, array) {                      //Agrega opciones al select
  var select = document.getElementsByName(domElement)[0];
   for (value in array) {
   var option = document.createElement("option");
   option.text = array[value];
   select.add(option);
  }
 }

 
 $(function() {
//LOS DATOS DEL INVENTARIO:
document.getElementById("botonCargaProductos").addEventListener("click", datosProducto)

function datosProducto () {

//Introduce el nombre del producto (acá está el problema)
  var item = document.getElementById("selectorProductos").value
  var nodoItemNombre = document.createElement("p")                   
  var nodoItemTexto = document.createTextNode(item)     
  nodoItemNombre.appendChild(nodoItemTexto)                   
  document.getElementById("itemTexto").appendChild(nodoItemNombre)
 
//Introduce el stock inicial
  var itemDelStockInicial = document.getElementById("productoStock").value
  var nodoStockItem = document.createElement("p")                    
  var nodoStockTexto = document.createTextNode(itemDelStockInicial)    
  nodoStockItem.appendChild(nodoStockTexto)                        
  document.getElementById("itemStockInicial").appendChild(nodoStockItem)
  document.getElementById("productoStock").value = ""


//Introduce la cantidad comprada
  var itemCompras = document.getElementById("productoCompra").value
  var nodoCompras = document.createElement("p")                    
  var nodoComprasTexto = document.createTextNode(itemCompras)    
  nodoCompras.appendChild(nodoComprasTexto)                        
  document.getElementById("itemComprado").appendChild(nodoCompras)
  document.getElementById("productoCompra").value = ""


var itemQueEntra = itemDelStockInicial + itemCompras

//Introduce la cantidad vendida
  if (document.getElementById("productoVenta").value <= parseInt(itemQueEntra)) {
    var itemVentas = document.getElementById("productoVenta").value
    var nodoVentas = document.createElement("p") 
    var nodoVentasTexto = document.createTextNode(itemVentas) 
    nodoVentas.appendChild(nodoVentasTexto) 
    document.getElementById("itemVendido").appendChild(nodoVentas)
    document.getElementById("productoVenta").value = ""
  }


//Introduce la cantidad perdida
  if (document.getElementById("productoPerdida").value <= (parseInt(itemQueEntra) - parseInt(itemVentas))) {
    var itemPerdidas = document.getElementById("productoPerdida").value
    var nodoPerdidas = document.createElement("p") 
    var nodoPerdidasTexto = document.createTextNode(itemPerdidas) 
    nodoPerdidas.appendChild(nodoPerdidasTexto) 
    document.getElementById("itemPerdido").appendChild(nodoPerdidas)
    document.getElementById("productoPerdida").value = ""
  }


  var itemEnStockFinal = parseInt(itemDelStockInicial) + parseInt(itemCompras) - parseInt(itemVentas) - parseInt(itemPerdidas)

//Introduce el stock final
  var nodoStock = document.createElement("p") 
  var nodoStockTexto = document.createTextNode(parseInt(itemEnStockFinal)) 
  nodoStock.appendChild(nodoStockTexto) 
  document.getElementById("itemStockFinal").appendChild(nodoStock)
}

});

