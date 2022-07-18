

var Npromedios = prompt('¿Cuantos valores va a calcular?')

var array = [];
var contador=1
var sumatoria=0;
var Tponderacion=0;





for(i=0; i<Npromedios; i++){
  var ponderacion = prompt("ingrese la ponderacion del valor "+contador);
  ponderacion=Number(ponderacion);
  var valor = prompt("Ingrese la cantidad de su valor "+contador);
  array[i] = ponderacion*valor;
  Tponderacion = Tponderacion+ponderacion;
  contador++
}
console.log(array);

for(i=0; i<array.length; i++){
  sumatoria = sumatoria + array[i];
}
console.log(sumatoria);

console.log(Tponderacion);

var PromedioPonderado = sumatoria/Tponderacion;

console.log("El promedio ponderado es: "+PromedioPonderado);
  