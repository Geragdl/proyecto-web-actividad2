test('DOM test', () => {
  document.body.innerHTML = '<h1>Mi Proyecto</h1>';
  const h1 = document.querySelector('h1');
  expect(h1.textContent).toBe('Mi Proyecto');
});
