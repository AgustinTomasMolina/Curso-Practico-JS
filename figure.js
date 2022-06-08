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


// Interaccion con el HTML 

// Cuadrado

function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value; // Aqui obtenemos el valor que escriben en el input de
    //                            HTML

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}

// Triangulo

function calcularPerimetroTriangulo() {
    const input1 = document.getElementById("InputTriangulo");
    const value1 = Number(input1.value);

    const input2 = document.getElementById("InputTriangulo2");
    const value2 = Number(input2.value);

    const base = document.getElementById("InputBase");
    const value3 = Number(base.value);
    

    const perimetro = perimetroTriangulo(value1,value2,value3);
    alert("El perimetro del triangulo es: " + perimetro);
}

function calcularAreaTriangulo() {
    const input1 = document.getElementById("InputAltura");
    const altura = Number(input1.value);

    const input2 = document.getElementById("InputBase");
    const base = Number(input2.value);

    const area = areaTriangulo(altura,base);
    alert("El area del triangulo es: " + area);
}

// Circulo

function calcularDiametroCirculo() {
    const input1 = document.getElementById("InputDiametro");
    const diam = Number(input1.value);
    
    const diametro = diametroCirculo(diam);
    alert("El diametro del circulo es: " + diametro);
}

function calcularDiametroCirculo() {
    const input1 = document.getElementById("InputDiametro");
    const diam = Number(input1.value);
    
    const diametro = diametroCirculo(diam);
    alert("El diametro del circulo es: " + diametro);
}

function calculoDePI(){
    const PI = Math.PI
    alert("PI vale exactamente: " + PI);
}

function calcularCircunferenciaCirculo() {
    const input1 = document.getElementById("InputCircunferencia");
    const circun = Number(input1.value);
    
    const circunferencia = perimetroCirculo(circun);
    alert("La circunferencia del circulo es: " + circunferencia);
}

function calcularAreaCirculo() {
    const input1 = document.getElementById("InputAreaCirculo");
    const ar = Number(input1.value);

    const area = areaCirculo(ar); 
    alert("El area del circulo es: "+ area);
}

// ejercicio 

function alturaTrianguloIsosceles(trianguloGrandeLadoA, trianguloGrandeLadoB, trianguloGrandeLadoBase) {
    if (trianguloGrandeLadoA != trianguloGrandeLadoB) {
        console.error("Los lados a y b no son iguales");
    } else {
        const trianguloPequenoLadoB = trianguloGrandeLadoBase / 2;
        const trianguloPequenoLadoBase = trianguloGrandeLadoA;

        const trianguloPequenoLadoBCuadrado = trianguloPequenoLadoB * trianguloPequenoLadoB;
        const trianguloPequenoLadoBaseCuadrado = trianguloPequenoLadoBase * trianguloPequenoLadoBase;

        const trianguloPequenoLadoA = Math.sqrt(trianguloPequenoLadoBaseCuadrado - trianguloPequenoLadoBCuadrado);

        const trianguloGrandeAltura = trianguloPequenoLadoA;
        return trianguloGrandeAltura;
    }
}