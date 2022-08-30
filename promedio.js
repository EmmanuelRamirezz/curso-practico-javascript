const mobile__menu = document.querySelector('.mobile__menu');
const mobileMenu__content = document.querySelector('.mobile-menu__content');

mobile__menu.addEventListener("click", despliegue);

function despliegue(){
  console.log('menu de movil');
  mobileMenu__content.classList.toggle('inactive');
}
const promResult = document.querySelector('.prom__result');

const promButton = document.querySelector('.prom__button');
const promButton2 = document.querySelector('.prom__button2');
const promButton3 = document.querySelector('.prom__button3');
const promText = document.querySelector('.prom__text');
const promInput = document.querySelector('.prom__input');
const promContainer = document.querySelector('.prom__container');

promButton.addEventListener("click", promCantidad);
promButton2.addEventListener("click", promCalcular)
promButton3.addEventListener("click", promRegresar);

function promCantidad(){
  promInput.classList.add('inactive1');
  promButton.classList.add('inactive');
  promButton2.classList.remove('inactive');
  promButton3.classList.remove('inactive');
  promText.innerText=('Ingrese sus numeros por favor');

  for(i=0; i<promInput.value; i++){
    promContainer.classList.remove('inactive1');

    const input1 = document.createElement('input');
    input1.classList.add('prom__input');
    input1.setAttribute('type', 'number');
    input1.id=(i);
    
    promContainer.appendChild(input1);
  }
}
function promCalcular(){
  var arreglo = [];
  for(j=0; j<promInput.value; j++){
    const valor = document.getElementById(j);
    valorChido=parseFloat(valor.value);
    arreglo.push(valorChido);
  }
  console.log(arreglo);
  var sumatoria=0;

  for(i=0; i<arreglo.length; i++){
  sumatoria= arreglo[i]+sumatoria
  }
  var promRes=sumatoria/arreglo.length;
  console.log(promRes);
  promResult.innerText=('El promedio de tus numeros es: '+promRes);
}
function promRegresar(){
  promButton.classList.remove('inactive');
  promButton2.classList.add('inactive');
  promButton3.classList.add('inactive');
  promInput.classList.remove('inactive1');
  promText.innerText=('¿Cuantos numeros va a ingresar?');
  promContainer.classList.add('inactive1');
  
  for(i=0; i<promInput.value; i++){
    promContainer.removeChild(promContainer.firstElementChild);
  }
  arreglo=[]
  promResult.innerText=("");
}




//Promedio usando el metodo reduce
function CalcularMedia(lista){
  const sumarLista=lista.reduce(
    function(valorAcumulado=0, nuevoElemento){
      return valorAcumulado+nuevoElemento;
    }
  );
  return sumarLista/lista.length;
}




  
