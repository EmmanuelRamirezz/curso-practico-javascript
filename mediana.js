const mobile__menu = document.querySelector('.mobile__menu');
const mobileMenu__content = document.querySelector('.mobile-menu__content');

mobile__menu.addEventListener("click", despliegue);

function despliegue(){
  console.log('menu de movil');
  mobileMenu__content.classList.toggle('inactive');
}


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
  medianaInput.classList.add('inactive1');
  medianaButton.classList.add('inactive');
  medianaButton2.classList.remove('inactive');
  medianaButton3.classList.remove('inactive');
  medianaText.innerText=('Ingrese sus numeros por favor');

  for(i=0; i<medianaInput.value; i++){
    medianaContainer.classList.remove('inactive1');

    const input1 = document.createElement('input');
    input1.classList.add('mediana__input');
    input1.setAttribute('type', 'number');
    input1.id=(i);
    
    medianaContainer.appendChild(input1);
  }
}
function median(numbers) {
  const sorted = numbers.slice().sort((a, b) => a - b);
  const middle = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
      return (sorted[middle - 1] + sorted[middle]) / 2;
  }
  return sorted[middle];
}
function medianaCalcular(){
  var arreglo = [];
  for(j=0; j<medianaInput.value; j++){
    const valor = document.getElementById(j);
    valorChido=parseFloat(valor.value);
    arreglo.push(valorChido);
  }
  if(arreglo.length%2==0) {
  medianaResult.innerText=("La mediana es "+ median(arreglo)+" y el total de sus numeros es par");
  }else{
  medianaResult.innerText=("La mediana es "+ median(arreglo)+" y el total de sus numeros es impar")
  }
}
function medianaRegresar(){
  medianaButton.classList.remove('inactive');
  medianaButton2.classList.add('inactive');
  medianaButton3.classList.add('inactive');
  medianaInput.classList.remove('inactive1');
  medianaText.innerText=('¿Cuantos numeros va a ingresar?');
  medianaContainer.classList.add('inactive1');
  
  for(i=0; i<medianaInput.value; i++){
    medianaContainer.removeChild(medianaContainer.firstElementChild);
  }
  arreglo=[]
  medianaResult.innerText=("");
}