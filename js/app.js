alert('Bienvenido al conversor de divisas NMI. Elige el monto y la divisa para obtener el tipo de cambio que deseas');
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

if(divisas.find((div) => div.divisa === divisas[divisas.length-1].divisa)) {
    alert('Divisa encontrada, a continuacion se realizara la conversion!')
    console.log('Divisa encontrada, a continuacion se realizara la conversion!')
}

for (let index = 0; index < 5; index++){
    if(divisas[index].divisa == divisas[divisas.length-1].divisa){
        alert('Valor en ' + divisas[divisas.length-1].divisa + ': ' + simboloDivisa(divisas[divisas.length-1].divisa) + divisas[divisas.length-1].multiplicar(divisas[divisas.length-1].monto, divisas[index].monto))
        console.log('Valor en ' + divisas[divisas.length-1].divisa + ': ' + simboloDivisa(divisas[divisas.length-1].divisa) + divisas[divisas.length-1].multiplicar(divisas[divisas.length-1].monto, divisas[index].monto))
    }
}