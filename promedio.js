const lista1 =[
  100,
  200,
  300,
  500
];

var sumatoria=0;

for(i=0; i<lista1.length; i++){
  sumatoria= lista1[i]+sumatoria
}
console.log(sumatoria/lista1.length);


function CalcularMedia(lista){

  // var sumatoria1=0;
  // for(i=0; i<lista.length; i++){
  //   sumatoria1= lista[i]+sumatoria1
  // }

  const sumarLista=lista.reduce(
    function(valorAcumulado=0, nuevoElemento){
      return valorAcumulado+nuevoElemento;
    }
  );
    
  return sumarLista/lista.length;
}

//Media usando el metodo reduce


  
