// Lo primero es sumar todos los numeros de la lista.
// Con un ciclo FOR

let sumaLista1 = 0;
for (let i = 0; i < lista1.length; i++) { // Variable que va a iterar. El ciclo for se va a ejecutar
    // mientras i sea un numero menor a la cantidad de elementos de la lista1.

    sumaLista1 = sumaLista1 + lista1[i]; // Le suma el array a la sumalista1 entrando a la variable i que
    // va iterando en el array.
}

const promedioLista1 = sumaLista1 / lista1.length;

function calcularMediaAritmetica(lista) {
    /* let sumaLista = 0;
for (let i = 0; i < lista.length; i++) { 

    sumaLista = sumaLista + lista[i]; 
   } */

    const sumaLista = lista.reduce(
        function(valorAcumulado = 0, nuevoElemento) {  // Funcion anonima. valorAcumulado significa lo que vayamos sumando a cada una
                                        //de nuestras en cada una de nuestras iteraciones dentro del array
            return valorAcumulado + nuevoElemento;
        }
    ); // Enviar una funcion y nos permite ir sumando cada uno de nuestros
    // elementos, y lo vamos a ir sumando con cada uno de nuestra lista. Podemos hacer mas cosas.

    const promedioLista = sumaLista / lista.length;

    return promedioLista;

}
