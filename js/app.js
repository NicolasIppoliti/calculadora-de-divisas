//Declaracion de constantes DOM

//Divisas y montos
const divisaElem1 = document.getElementById('divisa-uno');
const nombreElem1 = document.getElementById('nombre-divisa-uno')
const montoElem1 = document.getElementById('monto-uno');
const divisaElem2 = document.getElementById('divisa-dos');
const nombreElem2 = document.getElementById('nombre-divisa-dos')
const montoElem2 = document.getElementById('monto-dos');

//Tasas de cambio y swap
const tasasElem = document.getElementById('tasas');
const swap = document.getElementById('swap');

//Toggle de tema claro a tema oscuro
const footer = document.getElementById('texto-footer');
const p = document.querySelector('p');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

document.addEventListener('DOMContentLoaded', () => {
    fetch('../currencies1.json').then(res => {
        return res.json();
    }).then(data => {
        let salidaDivisa = '';
        data.forEach(country => {
            console.log(country)
            salidaDivisa += `<option>${country.divisa}</option>`;
        })

        divisaElem1.innerHTML = salidaDivisa;
    })
})

document.addEventListener('DOMContentLoaded', () => {
    fetch('../currencies2.json').then(res => {
        return res.json();
    }).then(data => {
        let salidaDivisa = '';
        data.forEach(country => {
            console.log(country)
            salidaDivisa += `<option>${country.divisa}</option>`;
        })

        divisaElem2.innerHTML = salidaDivisa;
    })
})

//Funcion para cambiar de Tema Claro a Tema Oscuro la pagina
toggle.onclick = function(){
    toggle.classList.toggle('activo');
    body.classList.toggle('activo');
    p.classList.toggle('activo');
    divisaElem1.classList.toggle('activo');
    divisaElem2.classList.toggle('activo');
    footer.classList.toggle('activo');
}

//Funcion para convertir
function calcular(){
    //Obtengo los valores de cada divisa
    const divisa1Monto = divisaElem1.value;
    const divisa2Monto = divisaElem2.value;

    //Fetch de la divisa seleccionada
    fetch(`https://open.er-api.com/v6/latest/${divisa1Monto}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        const tasas = data.rates[divisa2Monto];
        tasasElem.innerText = `1 ${divisa1Monto} = ${tasas.toFixed(4)} ${divisa2Monto}`;
        montoElem2.value = (montoElem1.value * tasas).toFixed(2);
    })
}

//Event Listeners
divisaElem1.addEventListener('change', calcular);
divisaElem2.addEventListener('change', calcular);

montoElem1.addEventListener('input', calcular);
montoElem2.addEventListener('input', calcular);

//Funcion para cambiar las divisas de lugar
swap.addEventListener('click', () => {
    const temp = divisaElem1.value;
    divisaElem1.value = divisaElem2.value;
    divisaElem2.value = temp;

    calcular();
});

//Calcula al recargar la pagina
calcular();