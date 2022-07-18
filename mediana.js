var arreglo = [
  500, 200, 100, 400000000
];

arreglo.sort(function(a, b){return a - b}); 

console.log(arreglo);

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