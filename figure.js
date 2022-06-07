// Codigo del cuadrado.
console.group("Cuadrados");

function perimetroCuadrado(lado) { // Estos son parametros que se utilizan para luego
    // inicializarlas con un numero o string.
    return lado * 4;
} 
perimetroCuadrado(54); // Enviamos argumentos


function areaCuadrado(lado) {
    return lado * lado;
} 
console.groupEnd();


// Codigo del triangulo.
console.group("Triangulos");


function perimetroTriangulo(lado1, lado2, base) {
    return lado1 + lado2 + base;
} 


function areaTriangulo(base, altura) {
    return (base * altura) / 2;
} 
console.groupEnd(); 


// Codigo del circulo.
console.group("Circulos");

// Diametro
function diametroCirculo(radio) {
    return radio * 2;
}

// PI
const PI = Math.PI; 
console.log("PI es: " + PI);

// Circunferencia
function perimetroCirculo(radio) { // Llamamos una funcion dentro de otra funcion
    // Agregamos la funcion como una variable diametro y despues la multiplicamos.
  const diametro = diametroCirculo(radio);
  return diametro * PI;
}

// Area
function areaCirculo(radio) {
    return (radio * radio) * PI;
}
console.groupEnd(); 

