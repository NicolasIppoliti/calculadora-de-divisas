alert('Bienvenido al programa de ciclos hasta el numero 100!');
let numero = Number(prompt('Ingrese un numero menor a 100.'));
while(numero >= 100) {
    alert('Numero incorrecto. Ingrese un numero menor a 100.');
    numero = Number(prompt('Ingrese un numero menor a 100.'));
}
if(numero < 100){
    alert('Tu numero es: ' + numero + '. A continuacion, sumaremos 1 a tu numero hasta llegar al 100. Revisa la consola.');
    for (numero; numero <= 100; numero++) {
        console.log('Numero: ' + numero);
        switch(numero) {
            case 100:
                alert('Numero maximo alcanzado.');
        }
    }
}