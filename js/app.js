alert('Bienvenido al conversor de divisas (valor Blue) de dolares, euros, libras, yuanes y yenes');
class conversorDivisas {
    constructor (monto, divisa) {
        this.monto = monto
        this.divisa = divisa
    }

    multiplicar(a, b) {
        return (Math.abs(a * b)).toFixed(2)
    }
}

function simboloDivisa(divisaAUsar)
{
    switch(divisaAUsar){
        case 'dolar':
            return '$'
        break
        case 'euro':
            return '€'
        break
        case 'libra':
            return '£'
        break
        case 'yuan':
            return '¥'
        break
        case 'yen':
            return '¥'
        break
    }
}

const divisas = []
divisas.push(new conversorDivisas(0.0048, 'dolar'))
divisas.push(new conversorDivisas(0.0043, 'euro'))
divisas.push(new conversorDivisas(0.0040, 'libra'))
divisas.push(new conversorDivisas(0.032, 'yuan'))
divisas.push(new conversorDivisas(0.0061, 'yen'))
divisas.push(new conversorDivisas((Number(prompt('Ingrese el monto a calcular en Pesos Argentinos.'))),prompt('Ingrese la divisa a la que quiere convertir sus pesos.')))
console.log(divisas)

for (let index = 0; index < 5; index++){
    if(divisas[index].divisa == divisas[divisas.length-1].divisa){
        alert('Valor en ' + divisas[divisas.length-1].divisa + ': ' + simboloDivisa(divisas[divisas.length-1].divisa) + divisas[divisas.length-1].multiplicar(divisas[divisas.length-1].monto, divisas[index].monto))
    }
}

//CODIGO SIN UTILIZAR, QUEDA COMENTADO PARA UN USO FUTURO

// switch(divisas[5].divisa){
//     case 'dolar':
//     case 'dolares':
//     case 'usd':
//         alert('Valor en ' + divisas[5].divisa + ': $' + divisas[5].multiplicar(divisas[5].monto, divisas[0].monto))
//     break
//     case 'euro':
//     case 'euros':
//     case 'eur':
//         alert('Valor en ' + divisas[0].divisa + ': €' + divisas[0].multiplicar(divisas[0].monto, 0.0043))
//     break
//     case 'libra':
//     case 'libras':
//     case 'libra esterlina':
//     case 'libras esterlinas':
//     case 'gbp':
//         alert('Valor en ' + divisas[0].divisa + ': £' + divisas[0].multiplicar(divisas[0].monto, 0.0040))
//     break
//     case 'yuan':
//     case 'yuanes':
//     case 'cny':
//         alert('Valor en ' + divisas[0].divisa + ': ¥' + divisas[0].multiplicar(divisas[0].monto, 0.032))
//     break
//     case 'yen':
//     case 'yenes':
//     case 'jpy':
//         alert('Valor en ' + divisas[0].divisa + ': ¥' + divisas[0].multiplicar(divisas[0].monto, 0.0061))
//     break
//     default:
//         alert('Divisa no aceptada.')
// }