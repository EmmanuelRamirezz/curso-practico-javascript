const lista =[
  1,2,3,1,2,3,4,2,2,2,1
];

const  listaContador = {};

//llenamos el objeto vacio
lista.map(function(elemento){
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