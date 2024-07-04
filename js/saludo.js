let form = document.getElementById('form');
            form.addEventListener('submit', (event) => {
              event.preventDefault();
              let nombre = document.getElementById('nombre').value;
              localStorage.setItem('nombre', nombre);
              let nombreGuardado = localStorage.getItem('nombre');
              let saludo = document.getElementById('saludo');
              saludo.textContent = `Bienvenido: ${nombreGuardado}. Espero que se encuentre muy bien. A continuación podrá consultar el catálogo:`;
            });