console.log('Aplicación iniciada');

function sum(a, b) {
  return a + b;
}

// Solo ejecuta DOM en navegador
if (typeof document !== 'undefined') {
  document.querySelector('h1')?.addEventListener('click', () => {
    alert('¡Funciona!');
  });
}

module.exports = { sum };
