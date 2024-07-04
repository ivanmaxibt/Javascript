const accesorios = [
  { name: "Lapiceras Personalizadas", price: 2000 },
  { name: "Dijes", price: 400 },
  { name: "Aros", price: 600 },
  { name: "Pulseras", price: 500 },
  { name: "Anillos", price: 750 },
  { name: "Posavasos", price: 2500 },
  { name: "Señaladores de libros", price: 300 },
  { name: "Llaveros", price: 1500 },
];

const container = document.createElement('div');
accesorios.forEach((accesorio, index) => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.value = index;
    container.appendChild(checkbox);

    const label = document.createElement('label');
    label.textContent = `${accesorio.name} - $${accesorio.price}`;
    container.appendChild(label);

    const cantidadInput = document.createElement('input');
    cantidadInput.type = 'number';
    cantidadInput.min = 0;
    cantidadInput.value = 0;
    cantidadInput.dataset.index = index; 
    container.appendChild(cantidadInput);

    container.appendChild(document.createElement('br'));
});


const button = document.createElement('button');
button.textContent = "Calcular Costo Total";
button.addEventListener('click', () => {
    const selectedIndexes = Array.from(container.querySelectorAll('input[type="checkbox"]:checked')).map(checkbox => parseInt(checkbox.value));
    let costoTotal = 0;

    selectedIndexes.forEach(index => {
        const cantidadInput = container.querySelector(`input[type="number"][data-index="${index}"]`);
        const cantidad = parseInt(cantidadInput.value);
        costoTotal += accesorios[index].price * cantidad;
    });

    alert(`Costo total: $${costoTotal}`);
});


document.body.appendChild(container);
document.body.appendChild(button);