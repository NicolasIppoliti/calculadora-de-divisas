//Declaracion de constantes DOM

//Divisas y montos
const divisaElem1 = document.getElementById('divisa-uno');
const montoElem1 = document.getElementById('monto-uno');
const divisaElem2 = document.getElementById('divisa-dos');
const montoElem2 = document.getElementById('monto-dos');

//Tasas de cambio y swap
const tasasElem = document.getElementById('tasas');
const swap = document.getElementById('swap');

//Toggle de tema claro a tema oscuro
const footer = document.getElementById('texto-footer');
const p = document.querySelector('p');
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');

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
function calculate(){
    //Obtengo los valores de cada divisa
    const divisa1Monto = divisaElem1.value;
    const divisa2Monto = divisaElem2.value;

    //Fetch de la divisa seleccionada
    fetch(`https://open.er-api.com/v6/latest/${divisa1Monto}`)
    .then((res) => res.json())
    .then((data) => {
        //console.log(data);
        const tasas = data.rates[divisa2Monto];
        tasasElem.innerText = `1 ${divisa1Monto} = ${tasas.toFixed(4)} ${divisa2Monto}`;
        montoElem2.value = (montoElem1.value * tasas).toFixed(2);
    })
}

//Event Listeners
divisaElem1.addEventListener('change', calculate);
divisaElem2.addEventListener('change', calculate);

montoElem1.addEventListener('input', calculate);
montoElem2.addEventListener('input', calculate);

//Funcion para cambiar las divisas de lugar
swap.addEventListener('click', () => {
    const temp = divisaElem1.value;
    divisaElem1.value = divisaElem2.value;
    divisaElem2.value = temp;

    calculate();
});

//Calcula al recargar la pagina
calculate();

//CODIGO COMENTADO DEL CONVERSOR ANTERIOR AL USO DE DOM

// alert('Bienvenido al conversor de divisas NMI. Elige el monto y la divisa para obtener el tipo de cambio que deseas');
// class conversorDivisas {
//     constructor (monto, divisa) {
//         this.monto = monto;
//         this.divisa = divisa;
//     }
//     //Multiplica el valor pasado por parametro, por el elegido por el usuario, dejandolo solo con 2 decimales
//     multiplicar(a, b) {
//         return (Math.abs(a * b)).toFixed(2);
//     }
// }

// //Cambia el simbolo mostrado dependiendo la divisa elegida
// function simboloDivisa(divisaAUsar)
// {
//     switch(divisaAUsar){
//         case 'dolar':
//             return '$'
//         break
//         case 'euro':
//             return '€'
//         break
//         case 'libra':
//             return '£'
//         break
//         case 'yuan':
//             return '¥'
//         break
//         case 'yen':
//             return '¥'
//         break
//     }
// }

// //Crea un arreglo vacio, agrega todos los objetos de las divisas aceptadas, junto a su nombre y valor (con respecto a 1 ARS), por ultimo agrega el objeto con los valores pasados por el cliente
// const divisas = []
// divisas.push(new conversorDivisas(0.0048, 'dolar'));
// divisas.push(new conversorDivisas(0.0043, 'euro'));
// divisas.push(new conversorDivisas(0.0040, 'libra'));
// divisas.push(new conversorDivisas(0.032, 'yuan'));
// divisas.push(new conversorDivisas(0.0061, 'yen'));
// divisas.push(new conversorDivisas((Number(prompt('Ingrese el monto a calcular en Pesos Argentinos.'))),prompt('Ingrese la divisa a la que quiere convertir sus pesos.')));

// if(divisas.find((div) => div.divisa === divisas[divisas.length-1].divisa)) {
//     alert('Divisa encontrada, a continuacion se realizara la conversion!');
//     console.log('Divisa encontrada, a continuacion se realizara la conversion!');
// }

// //Recorre todo el arreglo 'divisas', si es compatible la divisa ingresada por el usuario con una de las existentes, se ejecuta el alert() y console.log()
// for (let index = 0; index < 5; index++){
//     if(divisas[index].divisa == divisas[divisas.length-1].divisa){
//         alert('Valor en ' + divisas[divisas.length-1].divisa + ': ' + simboloDivisa(divisas[divisas.length-1].divisa) + divisas[divisas.length-1].multiplicar(divisas[divisas.length-1].monto, divisas[index].monto));
//         console.log('Valor en ' + divisas[divisas.length-1].divisa + ': ' + simboloDivisa(divisas[divisas.length-1].divisa) + divisas[divisas.length-1].multiplicar(divisas[divisas.length-1].monto, divisas[index].monto));
//     }
// }