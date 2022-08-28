




const medianaResult = document.querySelector('.mediana__result');
const medianaButton = document.querySelector('.mediana__button');
const medianaButton2 = document.querySelector('.mediana__button2');
const medianaButton3 = document.querySelector('.mediana__button3');
const medianaText = document.querySelector('.mediana__text');
const medianaInput = document.querySelector('.mediana__input');
const medianaContainer = document.querySelector('.mediana__container');


medianaButton.addEventListener("click", medianaCantidad);
medianaButton2.addEventListener("click", medianaCalcular)
medianaButton3.addEventListener("click", medianaRegresar);

function medianaCantidad(){
  medianaInput.classList.add('inactive');
  medianaButton.classList.add('inactive');
  medianaButton2.classList.remove('inactive');
  medianaButton3.classList.remove('inactive');
  medianaText.innerText=('Ingrese sus numeros por favor');

  for(i=0; i<medianaInput.value; i++){
    medianaContainer.classList.remove('inactive1');

    const input1 = document.createElement('input');
    input1.classList.add('mediana__input');
    input1.id=(i);
    
    medianaContainer.appendChild(input1);
  }
}
function medianaCalcular(){
  var arreglo = [];
  for(j=0; j<medianaInput.value; j++){
    const valor = document.getElementById(j);
    arreglo.push(valor.value);
  }
  arreglo.sort(function(a, b){return a - b}); 
  var medio= arreglo.length/2;

  if(arreglo.length%2==0) {
  console.log('par');
  var mediaPar=(arreglo[medio-1]+arreglo[medio])/2
  console.log("La mediana es "+ mediaPar);
  }else{
  console.log('impar');
  var medioRound= Math.round(medio)-1;
  console.log("La mediana es: "+ arreglo[medioRound]);
  }
  console.log(arreglo);
}
function medianaRegresar(){
  medianaButton.classList.remove('inactive');
  medianaButton2.classList.add('inactive');
  medianaButton3.classList.add('inactive');
  medianaInput.classList.remove('inactive');
  medianaText.innerText=('¿Cuantos numeros va a ingresar?');
  medianaContainer.classList.add('inactive1');
  
  for(i=0; i<medianaInput.value; i++){
    medianaContainer.removeChild(medianaContainer.firstElementChild);
  }
  arreglo=[]
}