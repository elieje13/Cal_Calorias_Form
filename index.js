// Capturamos la informacion del input o del form
const formularioCalculadora = document.getElementById('formulario-calculadora');
const resultado = document.getElementById('resultado');

formularioCalculadora.addEventListener('submit', (e) => {
    e.preventDefault();
    calcularCalorias();
});

function calcularCalorias() {
    aparecerResultado();

    const edad = document.getElementById('edad');
    const peso = document.getElementById('peso');
    const altura = document.getElementById('altura');
    const actividad = document.getElementById('actividad');
    const genero = document.querySelector('input[name="genero"]:checked');

    const multiplicadorTMB = {
        peso: 10,
        altura: 6.25,
        edad: 5
    }

    let calculoCalorias;

    if (genero.id === 'masculino') {
        calculoCalorias = actividad.value * (multiplicadorTMB.peso * peso.value) +
            (multiplicadorTMB.altura * altura.value) -
            (multiplicadorTMB.edad * edad.value) + 5;
    } else {
        calculoCalorias = actividad.value * (multiplicadorTMB.peso * peso.value) +
            (multiplicadorTMB.altura * altura.value) -
            (multiplicadorTMB.edad * edad.value) - 161;
    }

    const name = document.getElementById('name');
    const typeDoc = document.getElementById('TypeDoc');
    const docnumber = document.getElementById('docnumber');
    let grupoPoblacion = null;

    if (edad.value >= 15 && edad.value <= 29) {
        grupoPoblacion = 'Joven'
    } else if (edad.value >= 30 && edad.value <= 59) {
        grupoPoblacion = 'Adulto'
    } else {
        grupoPoblacion = 'Adulto Mayor'
    }

    resultado.innerHTML = `
    <div class="card-body d-flex flex-column justify-content-center align-items-center" id="calculo">
            <h5 class="card-title h2 " style="text-align: center;">Calorias requeridas</h5>
            <div class="w-1000 mb-3">
              <p style="font-size: 20px;"><b> "El paciente ${name.value} identificado con ${typeDoc.value} No.${docnumber.value}, requiere un total
                  de <strong class="text-danger">${calculoCalorias}</strong> para el sostenimiento de su TBM."</b></p>
              <div style="text-align: center;">
                <h5 class="card-title h2 ">Grupo Poblacional</h5>
                <p class="text-danger" style="font-size: 30px;"><b>${grupoPoblacion}</b></p>
              </div>
            </div>
          </div>`;

    edad.value = null;
    peso.value = null;
    altura.value = null;
    actividad.value = null;
    name.value = null;
    typeDoc.value = null;
    docnumber.value = null;
};

// Animaciones
function aparecerResultado() {
    resultado.style.top = '100vh';
    resultado.style.display = 'block';

    let distancia = 100;
    let resta = 0.3;
    let id = setInterval(() => {
        resta *= 1.1;
        resultado.style.top = `${distancia - resta}vh`;
        if (resta > 100) {
            clearInterval(id);
        }
    }, 10)
}

function desvanecerResultado() {
    let distancia = 1;

    let id = setInterval(() => {
        distancia *= 2;
        resultado.style.top = `${distancia}vh`;
        if (distancia > 100) {
            clearInterval(id);
            resultado.style.display = 'none';
            resultado.style.top = 0;
        }
    }, 10)
};