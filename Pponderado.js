const mobile__menu = document.querySelector('.mobile__menu');
const mobileMenu__content = document.querySelector('.mobile-menu__content');
const ponderadoLogo = document.querySelector('.ponderado__logo');
mobile__menu.addEventListener("click", despliegue);



const ponderadoResult = document.querySelector('.ponderado__result');
const ponderadoButton = document.querySelector('.ponderado__button');
const ponderadoButton2 = document.querySelector('.ponderado__button2');
const ponderadoButton3 = document.querySelector('.ponderado__button3');
const ponderadoText = document.querySelector('.ponderado__text');
const ponderadoInput = document.querySelector('.ponderado__input');
const ponderadoContainer = document.querySelector('.ponderado__container');
var arreglo = [];
var arreglo2=[];
var arreglo3=[];
var n = 0;
var denominador = 0;
var m =0
var numerador =0;

ponderadoButton.addEventListener("click", ponderadoCantidad);
ponderadoButton2.addEventListener("click", ponderadoCalcular)
ponderadoButton3.addEventListener("click", ponderadoRegresar);

function despliegue(){
  console.log('menu de movil');
  mobileMenu__content.classList.toggle('inactive');
  ponderadoLogo.classList.toggle('inactive');

}
function ponderadoCantidad(){
  ponderadoInput.classList.add('inactive1');
  ponderadoButton.classList.add('inactive');
  ponderadoButton2.classList.remove('inactive');
  ponderadoButton3.classList.remove('inactive');
  ponderadoText.innerText=('Ingrese sus numeros por favor');
  ponderadoContainer.classList.remove('inactive1');

  var count=1;

  for(i=0; i<(ponderadoInput.value*2); i=parseInt(i+2)){
    const ponderadoDiv = document.createElement('div');
    const counter= document.createElement('p');
    const dataV1= document.createElement('p');
    const dataV2= document.createElement('p');
    const input1 = document.createElement('input');
    const input2 = document.createElement('input');
    
    counter.innerText=('valor: '+count);
    dataV1.innerText=('Ingrese el peso');
    dataV2.innerText=('Ingrese la cantidad');

    ponderadoDiv.classList.add('ponderadoDiv');
    ponderadoContainer.appendChild(ponderadoDiv);
    ponderadoDiv.appendChild(counter);
    
    input1.classList.add('ponderado__input');
    input1.setAttribute('type', 'number');
    input1.id=(i);

    input2.classList.add('ponderado__input');
    input2.setAttribute('type', 'number');
    input2.id=(parseFloat(i+1));

    ponderadoDiv.appendChild(dataV1);
    ponderadoDiv.appendChild(input1);
    ponderadoDiv.appendChild(dataV2);
    ponderadoDiv.appendChild(input2);
    
    count=count+1;
  }
 
  console.log('i: '+i);
  console.log(count);
  
}
function ponderadoCalcular(){
  
  for(j=0; j<(ponderadoInput.value*2); j++){
    
    const valor = document.getElementById(j);
    valorChido=parseFloat(valor.value);
    arreglo.push(valorChido);
  }
  for(j=0; j<(arreglo.length/parseInt(2)); j++){
    denominador=denominador+arreglo[n];
    n=n+parseInt(2);
    console.log(denominador);
  }
 
  for(k=0; k<arreglo.length; k=parseInt(k+2)){
    var v1=arreglo[k]*arreglo[parseInt(k+1)]
    arreglo2.push(v1);
    numerador = numerador+arreglo2[m]
    m++
    console.log(numerador);
  }
  var FinalFinalRes=numerador/denominador


  console.log(FinalFinalRes);
  ponderadoResult.innerText=('El promedio ponderado es: '+FinalFinalRes)
}
function ponderadoRegresar(){
  ponderadoButton.classList.remove('inactive');
  ponderadoButton2.classList.add('inactive');
  ponderadoButton3.classList.add('inactive');
  ponderadoInput.classList.remove('inactive1');
  ponderadoText.innerText=('¿Cuantos valores va a calcular?');
  ponderadoContainer.classList.add('inactive1');
  
  for(i=0; i<ponderadoInput.value; i++){
    ponderadoContainer.removeChild(ponderadoContainer.firstElementChild);
  }
  ponderadoResult.innerText=("");
  arreglo = [];
  arreglo2=[];
  arreglo3=[];
  n = 0;
  denominador = 0;
  m =0
  numerador =0;
}




//Solucion usando Prompt
// var Npromedios = prompt('¿Cuantos valores va a calcular?')
// var array = [];
// var contador=1
// var sumatoria=0;
// var Tponderacion=0;
// for(i=0; i<Npromedios; i++){
//   var ponderacion = prompt("ingrese la ponderacion del valor "+contador);
//   ponderacion=Number(ponderacion);
//   var valor = prompt("Ingrese la cantidad de su valor "+contador);
//   array[i] = ponderacion*valor;

//   Tponderacion = Tponderacion+ponderacion;
//   contador++
// }
// console.log(array);

// for(i=0; i<array.length; i++){
//   sumatoria = sumatoria + array[i];
// }
// console.log(sumatoria);

// console.log(Tponderacion);

// var PromedioPonderado = sumatoria/Tponderacion;

// console.log("El promedio ponderado es: "+PromedioPonderado);
  

