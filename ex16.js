//16 crie um programa que mostre qual tipo de triangulo de acordo com os seus lados 
let lado1 = 3;
let lado2 = 3;
let lado3 = 2;

if (lado1 + lado2 > lado3 &&
    lado1 + lado3 > lado2 &&
    lado2 + lado3 > lado1) {

   if (lado1 === lado2 && lado2 === lado3) {
    console.log("triângulo equilátero");
   } else if (lado1 === lado2 ||
              lado2 === lado3 ||
              lado3 === lado1 ) {
                console.log("triângulo isóceles");
              } else {
console.log("triângulo escaleno");

    }

    } else {
        console.log("os valores informados não formam um triângulo.");
    }