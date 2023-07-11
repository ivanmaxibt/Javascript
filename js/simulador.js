let saludo = document.createElement("saludo");
let node = document.createTextNode("Hola, es un placer recibirlo aquí en Resina en la Web");
saludo.appendChild(node);
let body = document.getElementsByTagName("body")[0];
body.appendChild(saludo);
let nombreIngresado = document.createElement("nombreIngresado");
nombreIngresado.type = "Por favor: Ingrese su nombre";
var body0 = document.getElementsByTagName("body0")[0];
body0.appendChild(nombreIngresado);
let bienvenido = document.createElement("bienvenido");
let node2 = document.createTextNode(`Bienvenido: ${nombreIngresado}. Espero que se encuentre muy bien`);
bienvenido.appendChild(node2);
let body2 = document.getElementsByTagName("body2")[0];
body2.appendChild(bienvenido);
let catalogo = document.createElement("catalogo");
let node3 = document.createTextNode("Nuestro catálogo de productos es el siguiente:");
catalogo.appendChild(node3);
let body3 = document.getElementsByTagName("body3")[0];
body3.appendChild(catalogo);
const accesorio1 = "Lapiceras Personalizadas $2000";  
const accesorio2 = "Dijes $400";  
const accesorio3 = "Aros $600";  
const accesorio4 = "Pulseras $500";  
const accesorio5 = "Anillos $750";
const accesorio6 = "Posavasos $2500";
const accesorio7 = "Señaladores de libros $300";
const accesorio8 = "Llaveros $1500";

let accesorios0 = document.createElement("accesorios0");
let node4 = document.createTextNode(`  
1. ${accesorio1} 
2. ${accesorio2}
3. ${accesorio3}
4. ${accesorio4}
5. ${accesorio5}
6. ${accesorio6}
7. ${accesorio7}
8. ${accesorio8}`);
accesorios0.appendChild(node4);
let body4 = document.getElementsByTagName("body4")[0];
body4.appendChild(accesorios0);

const accesorios = [
    {name: "Lapiceras Personalizadas", price: 2000, order:1},
    {name: "Dijes", price: 400, order:2},
    {name: "Aros", price: 600, order:3},
    {name: "Pulseras", price: 500, order:4},
    {name: "Anillos", price: 750, order:5},
    {name: "Posavasos", price: 2500, order:6},
    {name: "Señaladores de libros", price: 300, order:7},
    {name: "Llaveros", price: 1500, order:8},
];

const number = parseInt(
  let numeroIngresado = document.createElement("numeroIngresado");
numeroIngresado.type = "Por favor ingrese un número: ";
let body6 = document.getElementsByTagName("body0")[0];);
const cantidad= parseInt(let cantidadIngresada= document.createElement("cantidadIngresada");
numeroIngresado.type = "Por favor ingrese una cantidad: ";
let body7 = document.getElementsByTagName("body0")[0];);
for (let i = 0; i < accesorios.length; i++) {
    if (accesorios[i].order === number) {
        const total = (accesorios[i].price)*cantidad;
        alert(`El total es: ${total}`);
    }
}
function aplicarDescuento(total, porcentajeDescuento) {
    let porcentajeDescuento = 0.15
    let precioConDescuento = total - (total * porcentajeDescuento);
    return precioConDescuento;
  }
const pago = parseInt(prompt("Paga en efectivo (S/N): "));
function siONo(pago) {
  if (pago === "S") {
    return alert(`El total es: ${precioConDescuento}`);
  } else {
    return alert(`El total es: ${total}`);
  }
}
let despedida = document.createElement("despedida");
let node5 = document.createTextNode("Muchas gracias por su compra. Vuelva Pronto.");
despedida.appendChild(node5);
let body5 = document.getElementsByTagName("body5")[0];
body5.appendChild(despedida);
