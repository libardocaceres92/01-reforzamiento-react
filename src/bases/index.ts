// index.ts

// Seleccionamos el formulario tipado como HTMLFormElement
const formulario = document.querySelector<HTMLFormElement>('#miFormulario')!;

// Escuchamos el evento submit
formulario.addEventListener('submit', (event: Event) => {
  event.preventDefault(); // evita que se recargue la página

  // Seleccionamos el input tipado como HTMLInputElement
  const nombreInput = document.querySelector<HTMLInputElement>('#nombre')!;
  const nombre = nombreInput.value;

  console.log('Nombre ingresado:', nombre);
});
