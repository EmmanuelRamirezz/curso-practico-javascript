const  modaInput =  document.querySelector('.moda__input');
const  modaButton =  document.querySelector('.moda__button');
const modaResult = document.querySelector('.moda__result');

modaButton.addEventListener('click', modaCalculo);

function modaCalculo(){
  var modaValue=modaInput.value;
  var modaArray =modaValue.split(',');
  var modaArray2= modaArray.map(string =>{
    return Number(string);
  });

  
  
  const  listaContador = {};

  //llenamos el objeto vacio
  modaArray2.map(function(elemento){
  if(listaContador[elemento]){
    listaContador[elemento]= listaContador[elemento]+1;
  }else{
    listaContador[elemento]=1;
  }
  });

  //convertimos el objeto en un array y lo ordenamos de menor a mayor
const listaArray = Object.entries(listaContador).sort(
  function(ElementoA, ElementoB){
    return  ElementoA[1]-ElementoB[1];
  }
);
console.log(listaArray[listaArray.length-1]);

function moda(lista1){
  const listaObj={};
  lista1.map(function(elemento){
    if(listaObj[elemento]){
      listaObj[elemento]= listaObj[elemento]+1;
    }else{
      listaObj[elemento]=1;
    }
    });

    const listaArray1 = Object.entries(listaObj).sort(
    function(ElementoA, ElementoB){
      return  ElementoA[1]-ElementoB[1];
    }
  );
  return listaArray1[listaArray1.length-1]
}

console.log(modaArray2);
var arraychido =(listaArray[listaArray.length-1]);

console.log(arraychido[0]);
console.log(arraychido[1]);

modaResult.innerText=('La moda de tus números es: '+arraychido[0]+' la cual se repite '+arraychido[1]+' veces')

}




