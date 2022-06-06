alert('Bienvenido a la calculadora de divisas (valor Blue) de dolares, euros, libras, yuanes y yenes');
class calculadoraDivisas {
    constructor (monto, divisa) {
        this.monto = monto
        this.divisa = divisa
    }

    multiplicar(a, b) {
        return (Math.abs(a * b)).toFixed(2)
    }
}

function mostrarConsola(x){
    console.log(x)
}

const divisa1 = new calculadoraDivisas((Number(prompt('Ingrese el monto a calcular en Pesos Argentinos.'))),prompt('Ingrese la divisa a la que quiere convertir sus pesos.'))
mostrarConsola(divisa1)

switch(divisa1.divisa){
    case 'dolar':
    case 'dolares':
    case 'usd':
        alert('Valor en ' + divisa1.divisa + ': $' + divisa1.multiplicar(divisa1.monto, 0.0048))
    break
    case 'euro':
    case 'euros':
    case 'eur':
        alert('Valor en ' + divisa1.divisa + ': €' + divisa1.multiplicar(divisa1.monto, 0.0043))
    break
    case 'libra':
    case 'libras':
    case 'libra esterlina':
    case 'libras esterlinas':
    case 'gbp':
        alert('Valor en ' + divisa1.divisa + ': £' + divisa1.multiplicar(divisa1.monto, 0.0040))
    break
    case 'yuan':
    case 'yuanes':
    case 'cny':
        alert('Valor en ' + divisa1.divisa + ': ¥' + divisa1.multiplicar(divisa1.monto, 0.032))
    break
    case 'yen':
    case 'yenes':
    case 'jpy':
        alert('Valor en ' + divisa1.divisa + ': ¥' + divisa1.multiplicar(divisa1.monto, 0.0061))
    break
    default:
        alert('Divisa no aceptada.')
}