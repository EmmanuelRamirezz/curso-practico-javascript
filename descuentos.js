// const precioOriginal = 120

// const descuento = 18;

// const porcentajePrecioConDescuento = 100-descuento;
// const precioConDescuento = (precioOriginal * porcentajePrecioConDescuento)/100;

// console.log({
//   precioOriginal,
//   descuento,
//   porcentajePrecioConDescuento,
//   precioConDescuento,
// });
const mobile__menu = document.querySelector('.mobile__menu');
const mobileMenu__content = document.querySelector('.mobile-menu__content');

mobile__menu.addEventListener("click", despliegue);

function despliegue(){
  console.log('menu de movil');
  mobileMenu__content.classList.toggle('inactive');
}

function calcularPrecioConDescuento (precio, descuento){
  
  const porcentajePrecioConDescuento = 100-descuento;
  const precioConDescuento = (precio * porcentajePrecioConDescuento)/100;
  return precioConDescuento
}

function calcularCupon(precio2, cupon){
  var res= "Cupon no valido";
  if (cupon == "cupon50"){
    res = precio2*0.5;
  }if(cupon=="cupon25"){
    res = precio2 *0.75;
  }
  if(cupon=="cupon10"){
    res = precio2*0.90;
    console.log('es el cupon 10');
  }
  return res;
}

function onClickButton(){
  const inputPrice = document.getElementById("InputPrice");
  const priceValue = inputPrice.value;

  const inputDiscount = document.getElementById("InputDiscount");
  const discountValue = inputDiscount.value;

  const precioConDescuento = calcularPrecioConDescuento(priceValue, discountValue)
  const ResultP = document.getElementById("ResultP");

  ResultP.innerText = "Total: $"+ precioConDescuento;
}

function onClickButton2(){
  const inputPrice2 = document.getElementById("InputPrice2");
  const priceValue2 = inputPrice2.value;

  const InputCupon = document.getElementById("InputCupon");
  const cuponValue = InputCupon.value;

  const cuponTotal = calcularCupon(priceValue2, cuponValue)
  const ResultP2 = document.getElementById("ResultP2");

  ResultP2.innerText = "Total: $"+ cuponTotal;

  console.log(priceValue2, cuponValue);
}

