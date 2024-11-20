let intervalCountdown;

function calculateCountdown(targetDate) {
  if (intervalCountdown) {
    clearInterval(intervalCountdown);
  }

  intervalCountdown = setInterval(function () {
    const hour = new Date().getTime();
    const distance = new Date(targetDate).getTime() - hour;

    // Cálculos para días, horas, minutos y segundos
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    countdown.textContent = `COUNTDOWN: ${days} Days, ${hours} Hours, ${minutes} Minutes and ${seconds} Seconds`;

    // Si el tiempo se ha cumplido
    if (distance < 0) {
      clearInterval(intervalCountdown);
      countdown.textContent = "¡La cuenta atrás ha terminado!";
    }
  }, 1000);
}

// Crear el campo de entrada de tipo 'date' para que el usuario seleccione una fecha
const inputDate = document.createElement('input');
inputDate.type = 'date';
inputDate.id = 'fechaSeleccionada';

// Crear un párrafo para mostrar la cuenta atrás
const countdown = document.createElement('p');

// Agregar los elementos al body
document.body.appendChild(inputDate);
document.body.appendChild(countdown);

// Final de la champions
let initialDate = '2025-05-31';

// Iniciar la cuenta atrás con la fecha predeterminada
calculateCountdown(initialDate);

// Evento para cambiar la fecha de la cuenta atrás cuando el usuario seleccione una nueva fecha
inputDate.addEventListener('change', function () {
  const newDate = inputDate.value;
  if (newDate) {
    calculateCountdown(newDate); // Iniciar una nueva cuenta atrás con la fecha seleccionada
  }
});
