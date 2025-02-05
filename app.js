// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Referencias a los elementos
const inputNombre = document.getElementById('nombre');
const botonAdicionar = document.getElementById('adicionar');
const lista = document.getElementById('lista');
const botonSortear = document.getElementById('sortear');
const resultado = document.getElementById('resultado');

// Lista de nombres
const nombres = [];

// Función para agregar nombres
botonAdicionar.addEventListener('click', () => {
  const nombre = inputNombre.value.trim();

  if (nombre === '') {
    alert('Por favor, ingresa un nombre válido.');
    return;
  }

  nombres.push(nombre);

  // Actualizar la lista en la página
  const li = document.createElement('li');
  li.textContent = nombre;
  lista.appendChild(li);

  // Limpiar el campo de texto
  inputNombre.value = '';
});

// Función para sortear un amigo
botonSortear.addEventListener('click', () => {
  if (nombres.length === 0) {
    alert('La lista está vacía. Agrega nombres antes de sortear.');
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * nombres.length);
  const amigoSecreto = nombres[indiceAleatorio];

  // Mostrar el resultado
  resultado.textContent = `El amigo secreto es: ${amigoSecreto}`;
});