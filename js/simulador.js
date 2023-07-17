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
let ul = document.createElement('ul');
accesorios.forEach(accesorio => {
  let li = document.createElement('li');
  li.textContent = `${accesorio.order}. ${accesorio.name} - $${accesorio.price}`;
  ul.appendChild(li);
});
  document.body.appendChild(ul);
