/* const ladoCuadrado = 5; */

/* console.log(`Los lados de los cuadrados miden: ${ladoCuadrado}cm`);
 */

function perimetroCuadrado(lado){
    return lado * 4;  
}


function areaCuadrado(lado){
    return lado * lado;  
} 
console.log(`El area del cuadrado es: ${areaCuadrado}`);



//Triangulo

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; */

function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
} 
function areaTriangulo(base, altura){
    return (base * altura) / 2;
}  

/* console.log(`Los lados del triangulo miden: ${ladoTriangulo1}cm ${ladoTriangulo2}cm y ${baseTriangulo}cm`)

console.log(`La altura del triangulo es: ${alturaTriangulo}cm`);

console.log(`El perimetro del triangulo es ${perimetroTriangulo}cm`);

console.log(`El area del triangulo es: ${areaTriangulo}cm`); */



//Círculo
const radioCirculo = 4;
console.log(`El radio del circulo es: ${radioCirculo}`);


function diametroCirculo(radio){
    return radio * 2
}


const PI = Math.PI;
console.log(`Pi es: ${PI}`);

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    return diametro * PI;
} ;
console.log(`El perimetro del circulo es: ${perimetroCirculo}`);

function areaCirculo(radioCirculo, radioCirculo){
    return (radio * radio) * PI;
};
console.log(`El area del circulo es: ${areaCirculo}`);



//HTML

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;

    const area = areaCuadrado(value);
    alert(area);
}


//Triangulo isoceles

function trianguloIsoceles(lado1, lado2, lado3){
    if(lado1 === lado2){
        const altura = Math.sqrt((lado1**2) - (lado3**2)/4);
        return altura

    }else if(lado1 === lado3){
        const altura = Math.sqrt((lado1**2) - (lado2**2)/4);
        return altura

    }else if(lado2 === lado3){
        const altura = Math.sqrt((lado2**2) - (lado1**2)/4);
        return altura

    }else{
        alert("No es un triangulo isoceles")
    }
}
