alert("Hola, es un placer recibirlo aquí en Resina en la Web");
let nombreIngresado = prompt("Por favor: Ingrese su nombre");
alert(`Bienvenido: ${nombreIngresado}. Espero que se encuentre muy bien`);
alert("Nuestro catálogo de productos es el siguiente:");
const accesorio1 = "Lapiceras Personalizadas $2000";  
const accesorio2 = "Dijes $400";  
const accesorio3 = "Aros $600";  
const accesorio4 = "Pulseras $500";  
const accesorio5 = "Anillos $750";
const accesorio6 = "Posavasos $2500";
const accesorio7 = "Señaladores de libros $300";
const accesorio8 = "Llaveros $1500";

alert(`  
         1. ${accesorio1} 
         2. ${accesorio2}
         3. ${accesorio3}
         4. ${accesorio4}
         5. ${accesorio5}
         6. ${accesorio6}
         7. ${accesorio7}
         8. ${accesorio8}`);

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

const number = parseInt(prompt("Por favor ingrese un número: "));
const  cantidad= parseInt(prompt("Por favor ingrese una cantidad: "));
for (let i = 0; i < accesorios.length; i++) {
    if (accesorios[i].order === number) {
        const total = (accesorios[i].price)*cantidad;
        alert(`El total es: ${total}`);
    }
}

alert("Muchas gracias por su compra. Vuelva Pronto.");