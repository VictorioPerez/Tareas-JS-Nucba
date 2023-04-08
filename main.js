/*
 1- Crear una función que reciba un número por parámetro e indique en consola si el número es par o impar.
*/
const numeroParImpar = (numero) => {
  if (numero % 2 !== 0) {
    return console.log("El numero es impar");
  } else if (numero % 2 == 0) {
    return console.log("El numero es par");
  }
};
  numeroParImpar(2)
  numeroParImpar(6)

  numeroParImpar(3)
  numeroParImpar(5)
/*
2- Crear una función que reciba dos números por parámetro e indique en consola que número es mayor,
 y si ninguno lo es, indicar por consola que son iguales.
*/
const dosNumeros = (numero1, numero2) =>{
  if (numero1 > numero2) {
    return console.log("El primer numero ingresado es mayor al segundo");
  } else if (numero2 > numero1) {
    return console.log("El segundo numero ingresado es mayor al primero");
  } else {
    return console.log("Ambos numeros son iguales");
  }
}
dosNumeros(10,5)
dosNumeros(5,10)
dosNumeros(5,5)

/*
3- Crear una función que reciba un número por parámetro e indique en consola si ese número es múltiplo de 5.
*/
const multiploCinco = (numero) =>{
  if (numero % 5 == 0) {
    return console.log("El numero ingresado por parametro es multiplo de 5")
  }
}
multiploCinco(5)
multiploCinco(10)
multiploCinco(15)

/*
4- Crear una función que reciba un número por parámetro e imprima por consola todos los números
 desde el 0 hasta llegar a ese número.
*/
const todosLosNumeros = (numero) =>{
  for (let i = 0; i <= numero; i++) {
      console.log("Numero: "+ i)
  }
}
todosLosNumeros(100)



/*
5 - Crear una función que reciba una palabra y un número por parámetro e imprima por consola
esa palabra la cantidad correspondiente al número indicado.
*/
const palabraNumero = (numero,palabra) =>{
  for (let i = 0; i <= numero; i++) {
    console.log("La palabra: "+ palabra); 
  }
}
palabraNumero(5,"HOLA!")

/*
6 - Crear una función que reciba un array por parámetro e imprima por consola todos los valores de ese array.
*/

const arreglo = (valores =[1,2,3,4,5,6,7,8,9,10,"Buenas noches"]) =>{
  for (let i = 0; i < valores.length; i++) {
    console.log(valores[i]);
  }
}
arreglo();

/*
7 - Crear una función que reciba un array con 10 números e imprima por consola todos los valores de ese array, 
menos el que se encuentre en la 5ta posición del mismo. Ayuda: Recuerden que el primer índice de un array es "0".
*/
let arreglo10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arreglo2 = (arreglo) =>{
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] == 6)   {
      continue
    }
    console.log(arreglo[i])
  }
}

arreglo2(arreglo10);


/*
8 - Crea una función que reciba un array de números y un número por parámetro e
 imprima por consola cada número del array multiplicado por el número pasado por parámetro.
 */
//UTILIZO EL MISMO ARREGLO CREADO COMO VARIABLE EN EL PUNTO 7

const multiplicacion = (numero,arregloMult) =>{
  for (let i = 0; i < arregloMult.length; i++) {  
      console.log(`El numero ${arregloMult[i]} multiplicado por ${numero} es: ${arregloMult[i] * numero}`)
  }
}
multiplicacion(5,arreglo10);


/* Victorio perez  NUCBA*/