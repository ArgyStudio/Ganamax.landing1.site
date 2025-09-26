// ejemplos.js

document.addEventListener('DOMContentLoaded', () => {
const ejemplos = [
  'EJEMPLO: Cargás $14.000, Jugás con $56.000',
  'EJEMPLO: Cargás $3.000, Jugás con $12.000',
  'EJEMPLO: Cargás $9.000, Jugás con $36.000',
  'EJEMPLO: Cargás $12.000, Jugás con $48.000',
  'EJEMPLO: Cargás $5.000, Jugás con $20.000',
  'EJEMPLO: Cargás $2.000, Jugás con $8.000',
  'EJEMPLO: Cargás $7.000, Jugás con $28.000',
  'EJEMPLO: Cargás $15.000, Jugás con $60.000',
  'EJEMPLO: Cargás $10.000, Jugás con $40.000',
  'EJEMPLO: Cargás $6.000, Jugás con $24.000',
  'EJEMPLO: Cargás $13.000, Jugás con $52.000',
  'EJEMPLO: Cargás $8.000, Jugás con $32.000',
  'EJEMPLO: Cargás $4.000, Jugás con $16.000',
  'EJEMPLO: Cargás $11.000, Jugás con $44.000'
];




  const textoEjemplo = document.getElementById('example-text');
  let idx = 0;
  const intervaloMs = 4500; 

  function nextEjemplo() {
    textoEjemplo.textContent = ejemplos[idx];
    idx = (idx + 1) % ejemplos.length;
  }

  nextEjemplo();
  setInterval(nextEjemplo, intervaloMs);
});
