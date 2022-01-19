//Código cuadrado
console.group("Cuadrado");

const ladoCuadrado = 5;
console.log(`Los lados del cuadrado miden ${ladoCuadrado}`);

const perimetroCuadrado = ladoCuadrado * 4;
console.log(`El perímetro del cuadrado es ${perimetroCuadrado}`);

const areaCuadrado = ladoCuadrado ** 2;
console.log(`El área del cuadrado es ${areaCuadrado}`);

console.groupEnd();

//Código triángulo

console.group("Triángulo");

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
console.log(`Los lados del triangulo miden ${ladoTriangulo1}cm, ${ladoTriangulo2}cm, ${baseTriangulo}cm`);

const alturaTriangulo = 5.5;
console.log(`La altura del triángulo es de ${alturaTriangulo}cm`);

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;
console.log(`El perímetro del triangulo es ${perimetroTriangulo}cm`);

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log(`El área del triángulo es de ${areaTriangulo}cm^2`);

console.groupEnd();

//Codigo circulo
console.group("Círculo");

const radioCirculo = 4;
console.log(`El radio del círculo es de ${radioCirculo}cm`);

const diametroCirculo = radioCirculo * 2;
console.log(`El diámetro del círculo es de ${diametroCirculo}cm`);

const PI = Math.PI;

const perimetroCirculo = diametroCirculo * PI;
console.log(`El perímetro del círculo es de ${Math.round(perimetroCirculo)}cm`);

const areaCirculo = (radioCirculo ^ 2) * PI;
console.log(`El área del círculo es de ${Math.round(areaCirculo)}cm`);

console.groupEnd();