const mobile__menu = document.querySelector('.mobile__menu');
const mobileMenu__content = document.querySelector('.mobile-menu__content');

mobile__menu.addEventListener("click", despliegue);
const pi = Math.PI;

function despliegue(){
  console.log('menu de movil');
  mobileMenu__content.classList.toggle('inactive');
}

function perimetroCuadrado (lado) {
  return lado *4;
}

function areaCuadrado (lado){
  return lado*lado;
} 

function perimetroTriangulo(lado, base){

  return lado+lado+base
} 

function areaTriangulo(altura, base){
  return (base*altura)/2 
}

function perimetroCirculo(radio){
  return (radio*2)*pi
} 

function areaCirculo(radio){
  return (radio*radio)*pi
} 

function calcularPerimetroCu(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value; 
  const perimetro = perimetroCuadrado(value);
  alert(perimetro);
}

function calcularAreaCu(){
  const input = document.getElementById("inputCuadrado");
  const value = input.value; 
  const area = areaCuadrado(value);
  alert(area);
  
}

function calcularPerimetroTr(){
  const inputLado = document.getElementById("inputTrianguloLado");
  const inputBase = document.getElementById("inputTrianguloBase");
  const inputAltura = document.getElementById("inputTrianguloAltura");

  const valueLado = Number (inputLado.value); 
  const valueBase = Number(inputBase.value); 
   

  const perimetro = perimetroTriangulo(valueLado, valueBase);
  alert(perimetro);
}

function calcularAreaTr(){
  const inputLado = document.getElementById("inputTrianguloLado");
  const inputBase = document.getElementById("inputTrianguloBase");
  const inputAltura = document.getElementById("inputTrianguloAltura");

  
  const valueBase = inputBase.value; 
  const valueAltura = inputAltura.value; 

  const area = areaTriangulo(valueAltura, valueBase);
  alert(area);
}

function calcularPerimetroCi(){
  const input = document.getElementById("inputCirculo");
  const value = input.value; 
  const perimetro = perimetroCirculo(value);
  alert(perimetro);
}

function calcularAreaCi(){
  const input = document.getElementById("inputCirculo");
  const value = input.value; 
  const area = areaCirculo(value);
  alert(area);
}

function alturaIsoceles(base, lado1, lado2){
  if (lado1 != lado2){
    var x ='Los lados no son iguales, no es un triangulo isoceles';
  }
  else{
    var x =Math.sqrt((lado1*lado1)-((base*base)/4))
  }
  return x
}

function calcularIsoceles(){
  const inputL1 = document.getElementById("inputIsocelesLado1");
  const inputL2 = document.getElementById("inputIsocelesLado2");
  const inputB = document.getElementById("inputIsocelesBase");
  const valueL1 = Number(inputL1.value);
  const valueL2 = Number(inputL2.value);
  const valueB = Number (inputB.value);

  const altura = alturaIsoceles(valueB, valueL1, valueL2);
  alert(altura)
}