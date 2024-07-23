let form = document.getElementById('form');
            form.addEventListener('submit', (event) => {
              event.preventDefault();
              let nombre = document.getElementById('nombre').value;
              localStorage.setItem('nombre', nombre);
              let nombreGuardado = localStorage.getItem('nombre');
              let saludo = document.getElementById('saludo');
              const now = new Date();
              const dayOfWeek = now.getDay();
              if (dayOfWeek === 2) {
              document.getElementById('saludo').textContent = `¡Bienvenido: ${nombreGuardado}! Hoy es martes, ¡aprovecha nuestro 20% de descuento!`;
              } else {
              document.getElementById('saludo').textContent = `¡Bienvenido: ${nombreGuardado}! Espero que se encuentre muy bien. A continuación podrá consultar el catálogo:`;
              };
            });
