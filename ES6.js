console.log("\n")
console.log("ALUMNO: BRAGA, FACUNDO NICOLÁS");
console.log("\n############################ES6############################\n");

const separador = "\n#########################################################################\n";

console.log(separador);


//EJERCICIO N°1:
console.log("\nEjercicio N°1: Compara el alcance de las palabras clave 'var' y 'let'");
console.log("Corrige el código para que la variable i, declarada en la sentencia if sea una variable separada de la variable i, declarada en la primera línea de la función.");

function checkScope() {
    let i = 'function scope';
    if (true) {
     let i = 'block scope';
      console.log('Block scope i is: ', i);
    }
    console.log('Function scope i is: ', i);
    return i;
  }

console.log(separador);


//EJERCICIO N°2:

console.log("\nEjercicio N°2: Muta un arreglo declarado con const");
console.log("Un arreglo es declarado como const s = [5, 7, 2]. Cambia el arreglo a [2, 5, 7] utilizando varias asignaciones de elementos.\n");

const s = [5, 7, 2];
function editInPlace() {
  // Cambia solo el código debajo de esta línea

  // Usar s = [2, 5, 7] sería inválido
s[0]=2;
s[1]=5;
s[2]=7;
  // Cambia solo el código encima de esta línea
}
editInPlace();

console.log(separador);


//EJERCICIO N°3:

console.log("\nEjercicio N°3: Prevenir la mutación del objeto");
console.log("En este desafío vas a utilizar Object.freeze para prevenir el cambio de constantes matemáticas. Necesitas congelar el objeto MATH_CONSTANTS para que nadie pueda alterar el valor de PI, añadir o borrar propiedades.\n");

function freezeObj() {
    const MATH_CONSTANTS = {
      PI: 3.14
    };
    // Cambia solo el código debajo de esta línea
  Object.freeze(MATH_CONSTANTS)
  
    // Cambia solo el código encima de esta línea
    try {
      MATH_CONSTANTS.PI = 99;
    } catch(ex) {
      console.log(ex);
    }
    return MATH_CONSTANTS.PI;
  }
  const PI = freezeObj();


console.log(separador);


//EJERCICIO N°4:

console.log("\nEjercicio N°4: Usa funciones flecha para escribir funciones anónimas de manera breve");
console.log("Reescribe la función asignada a la variable magic, la cual devuelve una new Date(), utilizando la sintaxis de función flecha. \n");

const magic = () => new Date();


console.log(separador);


//EJERCICIO N°5:

console.log("\nEjercicio N°5: Escribe funciones flecha con parámetros");
console.log("Reescribe la función myConcat que añade el contenido de arr2 a arr1 para que la función use la sintaxis de función flecha.\n");

const myConcat = (arr1, arr2) => arr1.concat(arr2)

console.log(myConcat([1, 2], [3, 4, 5]));


console.log(separador);


//EJERCICIO N°6:

console.log("\nEjercicio N°6: Establece parámetros por defecto para tus funciones");
console.log("Modifica la función increment agregando parámetros por defecto para que sume 1 a number si value no se especifica.\n");

// Cambia solo el código debajo de esta línea
const increment = (number, value = 1) => number + value;
// Cambia solo el código encima de esta línea

console.log(separador);


//EJERCICIO N°7:

console.log("\nEjercicio N°7: Utiliza el parámetro rest con parámetros de función");
console.log("Modifica la función sum usando el parámetro rest de tal manera que la función sum sea capaz de recibir cualquier número de argumentos y devolver su suma.\n");

const sum = (...args) => {
    return args.reduce((a, b) => a + b, 0);
}

console.log(separador);

//EJERCICIO N°8:

console.log("\nEjercicio N°8: Utiliza el operador de propagación para evaluar los arreglos en el lugar");
console.log("Copia todo el contenido de arr1 en otro arreglo arr2 usando el operador de propagación.\n");

const arr1 = ['JAN', 'FEB', 'MAR', 'APR', 'MAY'];
let arr2;

arr2 = [...arr1];  // Cambia esta línea

console.log(arr2);

console.log(separador);


//EJERCICIO N°9:

console.log("\nEjercicio N°9: Usa sintaxis de desestructuración para extraer valores de objetos");
console.log("Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables today y tomorrow con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.\n");

const HIGH_TEMPERATURES = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  
  const {today} = HIGH_TEMPERATURES;
  const {tomorrow} = HIGH_TEMPERATURES;
  
  // Cambia solo el código encima de esta línea



console.log(separador);


//EJERCICIO N°10:

console.log("\nEjercicio N°10: Usa sintaxis de desestructuración para asignar variables desde objetos");
console.log("Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables highToday y highTomorrow con los valores de today y tomorrow del objeto HIGH_TEMPERATURES.\n");

const HIGH_TEMPERATURES2 = {
    yesterday: 75,
    today: 77,
    tomorrow: 80
  };
  
  // Cambia solo el código debajo de esta línea
  
  const {today: highToday} = HIGH_TEMPERATURES2
  const {tomorrow: highTomorrow} = HIGH_TEMPERATURES2
  
  // Cambia solo el código encima de esta línea

console.log(separador);


//EJERCICIO N°11:

console.log("\nEjercicio N°11: Usa sintaxis de desestructuración para asignar variables desde objetos anidados");
console.log("Reemplaza las dos asignaciones con una sintaxis de desestructuración equivalente. Todavía deben seguir asignando las variables lowToday y highToday con los valores de today.low y today.high del objeto LOCAL_FORECAST.\n");

const LOCAL_FORECAST = {
    yesterday: { low: 61, high: 75 },
    today: { low: 64, high: 77 },
    tomorrow: { low: 68, high: 80 }
  };
  
  // Cambia solo el código debajo de esta línea
  
  const {today: {low: lowToday2}} = LOCAL_FORECAST
  const {today: {high: highToday2}} = LOCAL_FORECAST
  
  // Cambia solo el código encima de esta línea

console.log(separador);


//EJERCICIO N°12:

console.log("\nEjercicio N°12: Usa sintaxis de desestructuración para asignar variables desde arreglos");
console.log("Utiliza la sintaxis de desestructuración para intercambiar los valores de a y b para que a reciba el valor almacenado en b, y b reciba el valor almacenado en a.\n");

let a = 8, b = 6;
// Cambia solo el código debajo de esta línea

[a,b]=[b,a]


console.log(separador);


//EJERCICIO N°13:

console.log("\nEjercicio N°13: Utiliza la sintaxis de desestructuración con el parámetro rest para reasignar elementos de un arreglo");
console.log("Utiliza una asignación de desestructuración con el parámetro rest para emular el comportamiento de Array.prototype.slice(). removeFirstTwo() debe devolver un sub-arreglo del arreglo original list sin los dos primeros elementos.\n");

function removeFirstTwo(list) {
    // Cambia solo el código debajo de esta línea
    const [,, ...shorterList] = list; // Cambia esta línea
    // Cambia solo el código encima de esta línea
    return shorterList;
  }
  
  const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sourceWithoutFirstTwo = removeFirstTwo(source);

console.log(separador);


//EJERCICIO N°14:

console.log("\nEjercicio N°14: Utiliza sintaxis de desestructuración para pasar un objeto como parámetro de función");
console.log("Utiliza la sintaxis de desestructuración dentro del argumento de la función half para enviar solo max y min dentro de la función.\n");


const stats = {
    max: 56.78,
    standard_deviation: 4.34,
    median: 34.54,
    mode: 23.87,
    min: -0.75,
    average: 35.85
  };
  
  // Cambia solo el código debajo de esta línea
  const half = ({max , min}) => (max + min) / 2.0; 
  // Cambia solo el código encima de esta línea

console.log(separador);


//EJERCICIO N°15:

console.log("\nEjercicio N°15: Crea cadenas usando plantillas literales");
console.log("Utiliza un método de iteración (cualquier tipo de bucle) para obtener el resultado deseado (mostrado a continuación).\n");

const result = {
    success: ["max-length", "no-amd", "prefer-arrow-functions"],
    failure: ["no-var", "var-on-top", "linebreak"],
    skipped: ["no-extra-semi", "no-dup-keys"]
  };
  function makeList(arr) {
    // Cambia solo el código debajo de esta línea
    const failureItems = [];
    for (let i = 0 ; i< arr.length ; i++)
    failureItems.push(`<li class="text-warning">${arr[i]}</li>`)
    // Cambia solo el código encima de esta línea
  
    return failureItems;
  }
  
  const failuresList = makeList(result.failure);



console.log(separador);


//EJERCICIO N°16:

console.log("\nEjercicio N°16: Escribe declaraciones concisas de objecto literales usando la abreviatura de propiedad de objeto");
console.log("Utiliza la abreviatura de propiedad de objeto con objetos literales para crear y devolver un objeto con las propiedades name, age y gender.\n");

const createPerson = (name, age, gender) => ({
    // Cambia solo el código debajo de esta línea
    
      name,
      age,
      gender
    });
    // Cambia solo el código encima de esta línea

console.log(separador);


//EJERCICIO N°17:

console.log("\nEjercicio N°17: Escribe funciones breves y declarativas con ES6");
console.log("Refactoriza la función setGear dentro del objeto bicycle para que utilice la sintaxis abreviada descrita arriba.\n");

// Cambia solo el código debajo de esta línea
const bicycle = {
    gear: 2,
    setGear(newGear) {
      this.gear = newGear;
    }
  };
  // Cambia solo el código encima de esta línea
  bicycle.setGear(3);
  console.log(bicycle.gear);

console.log(separador);


//EJERCICIO N°18:

console.log("\nEjercicio N°18: Usa sintaxis de clases para definir una función constructora");
console.log("Usa la palabra clave class y escribe un constructor para crear la clase Vegetable.La clase Vegetable te permite crear un objeto vegetal con una propiedad name que es pasada al constructor.\n");

// Cambia solo el código debajo de esta línea
class Vegetable {
    constructor(name){
      this.name = name
    }
  }
  // Cambia solo el código encima de esta línea
  
  const carrot = new Vegetable('carrot');
  console.log(carrot.name); // Debería mostrar 'carrot'

console.log(separador);


//EJERCICIO N°19:

console.log("\nEjercicio N°19: Utiliza getters (accesores) y setters (mutadores) para controlar el acceso a un objeto");
console.log("Utiliza la palabra clave class para crear una clase Thermostat. El constructor acepta una temperatura Fahrenheit.En la clase, crea un getter para obtener la temperatura en Celsius y un setter para ajustar la temperatura en Celsius.\n");

// Cambia solo el código debajo de esta línea
class Thermostat {
    constructor(temperature) {
      this._temperature = temperature;
    }
    get temperature() {
      return (this._temperature -32)*(5/9);
    }
    set temperature(temperature){
      this._temperature = temperature * 9.0/5 +32;
    }
  
  }
  // Cambia solo el código encima de esta línea
  
  const thermos = new Thermostat(76); // Ajuste en escala Farenheit
  let temp = thermos.temperature; // 24.44 en Celsius
  thermos.temperature = 26;
  temp = thermos.temperature; // 26 en Celsius

console.log(separador);


//EJERCICIO N°20:

console.log("\nEjercicio N°20: Crea un módulo para scripts");
console.log("Agrega un script de tipo module al documento HTML y asígnale el archivo fuente index.js\n");


/*
LO COMENTO PORQUE OSINO ME DA ERROR.

<html>
  <body>
     <!-- Cambia solo el código debajo de esta línea --> 
<script type="module" src="index.js"></script>
   <!-- Cambia solo el código encima de esta línea -->
  </body>
</html>
*/

console.log(separador);


//EJERCICIO N°21:

console.log("\nEjercicio N°21: Utiliza la exportación para compartir un bloque de código");
console.log("Hay dos funciones relacionadas con cadenas en el editor. Exporta ambos utilizando el método que elijas.\n");




const uppercaseString = (string) => {
    return string.toUpperCase();
  }
  
  const lowercaseString = (string) => {
    return string.toLowerCase()
  }
  
  export { uppercaseString, lowercaseString}

console.log(separador);


//EJERCICIO N°22:

console.log("\nEjercicio N°22: Reutiliza código de JavaScript utilizando import");
console.log("Agrega la declaración import apropiada que permita al archivo actual, usar las funciones uppercaseString y lowercaseString que exportaste de la lección previa. Estas funciones se encuentran en un archivo llamado string_functions.js, el cual está en el mismo directorio que el archivo actual.\n");



import {uppercaseString , lowercaseString} from './string_functions.js'
// Cambia solo el código encima de esta línea

uppercaseString("hello");
lowercaseString("WORLD!");


console.log(separador);


//EJERCICIO N°23:

console.log("\nEjercicio N°23: Use * para importar todo de un archivo");
console.log("myMathModule.subtract(5,3);El código actual, requiere los contenidos del archivo: string_functions.js, ubicado en el mismo directorio que el archivo actual. Usa la sintaxis import * as, para importar todo del archivo, en un objeto llamado stringFunctions.\n");

/*
COMENTO PORQUE OSINO ME DA ERROR EL IMPORT.

import * as stringFunctions from './string_functions.js'
// Cambia solo el código encima de esta línea

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
*/

console.log(separador);


//EJERCICIO N°24:

console.log("\nEjercicio N°24: Crear un fallback de exportación con export default");
console.log("La siguiente función debe ser el valor fallback para el módulo. Por favor, añade el código necesario para hacerlo.\n");


export default function subtract(x, y) {
    return x - y;
  }


console.log(separador);


//EJERCICIO N°25:

console.log("\nEjercicio N°25: Importa una exportación por defecto");
console.log("El siguiente código, importa como exportación por defecto, desde el archivo math_functions.js, encontrado en el mismo directorio que este archivo. Da a la importación el nombre de subtract.\n");


import subtract from "./math_functions.js"
// Cambia solo el código encima de esta línea

subtract(7,4);


console.log(separador);


//EJERCICIO N°26:

console.log("\nEjercicio N°26: Crea una promesa de JavaScript");
console.log("Crea una nueva promesa llamada makeServerRequest. Pásale una función con parámetros resolve y reject al constructor.\n");

const makeServerRequest = new Promise((resolve, reject) => {


});

console.log(separador);


//EJERCICIO N°27:

console.log("\nEjercicio N°27: Cumpleta una promesa con 'resolve' y 'reject'");
console.log("Haz una función promesa que maneje el éxito y el fallo. Si responseFromServer es true, llama al método resolve para completar satisfactoriamente la promesa. Pasa a resolve una cadena con el valor We got the data. Si responseFromServer es false, utiliza el método reject y devuelve la cadena: Data not received.\n");

const makeServerRequest2 = new Promise((resolve, reject) => {
    // responseFromServer representa una respuesta de un servidor
    let responseFromServer;
  
    if(responseFromServer) {
      resolve("We got the data")
    } else {  
      reject("Data not received")
    }
  });

console.log(separador);


//EJERCICIO N°28:

console.log("\nEjercicio N°28: Maneja una promesa cumplida usando then");
console.log("Añade el método then a tu promesa. Usa result como parámetro de tu función callback, asimismo imprime result en la consola.\n");

const makeServerRequest3 = new Promise((resolve, reject) => {
    // responseFromServer es establecido a true para representar una respuesta satisfactoria del servidor
    let responseFromServer = true;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  
  makeServerRequest3.then(result => {
    console.log(result)
  });

console.log(separador);


//EJERCICIO N°29:

console.log("\nEjercicio N°29: Maneja una promesa rechazada usando catch");
console.log("Añade el método catch a tu promesa. Usa error como el parámetro de tu función callback e imprime error en la consola.\n");




const makeServerRequest4 = new Promise((resolve, reject) => {
    // responseFromServer es establecido a false para representar una respuesta no satisfactoria del servidor
    let responseFromServer = false;
  
    if(responseFromServer) {
      resolve("We got the data");
    } else {  
      reject("Data not received");
    }
  });
  
  makeServerRequest4.catch(error => {
    console.log(error);
  });


console.log(separador);
