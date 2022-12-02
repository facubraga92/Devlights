console.log("\n")
console.log("ALUMNO: BRAGA, FACUNDO NICOLÁS");
console.log("\n############################ESTRUCTURAS DE DATOS BASICAS############################\n");

const separador = "\n#########################################################################\n";

console.log(separador);


//EJERCICIO N°1:
console.log("\nEjercicio N°1: Utiliza un arreglo para almacenar una colección de datos");
console.log("Hemos definido una variable llamada yourArray. Completa la sentencia asignando un arreglo de al menos 5 elementos de longitud a la variable yourArray. Tu arreglo debe contener al menos una cadena (string), un número (number) y un booleano (boolean).\n");


let yourArray = ["one",2,true,false,"five"]; // Cambia esta línea


console.log(separador);


//EJERCICIO N°2:

console.log("\nEjercicio N°2: Accede a los contenidos de un arreglo utilizando la notación de corchetes");
console.log("Para completar este desafío, establece la segunda posición (índice 1) de myArray a cualquier cosa que quieras, además de la letra b\n");

let myArray = ["a", "b", "c", "d"];
// Cambia solo el código debajo de esta línea
myArray[1] = "Esto no es una b"
// Cambia solo el código encima de esta línea
console.log(myArray);

console.log(separador);


//EJERCICIO N°3:

console.log("\nEjercicio N°3: Agrega elementos a un arreglo con push() y unshift()");
console.log("Hemos definido una función, mixedNumbers, a la cual le estamos pasando un arreglo como argumento. Modifica la función utilizando push() y unshift() para agregar 'I', 2, 'three' al principio del arreglo y 7, 'VIII', 9 al final, de tal modo que el arreglo devuelto contenga las representaciones de los números del 1 al 9 en orden.\n");

function mixedNumbers(arr) {
    // Cambia solo el código debajo de esta línea
  arr.unshift("I",2,"three")
  arr.push(7,"VIII",9)
    // Cambia solo el código encima de esta línea
    return arr;
  }
  
  console.log(mixedNumbers(['IV', 5, 'six']));

console.log(separador);


//EJERCICIO N°4:

console.log("\nEjercicio N°4: Elimina elementos de un arreglo con pop() y shift()");
console.log("Hemos definido una función, popShift, el cual toma un arreglo como argumento y devuelve un nuevo arreglo. Modifica la función, usando pop() y shift(), para eliminar el primer y el último elemento del arreglo, y asignar los elementos eliminados a sus correspondientes variables, de modo que el arreglo que se devuelva contenga sus valores.\n");

function popShift(arr) {
    let popped = arr.pop(); // Cambia esta línea
    let shifted = arr.shift(); // Cambia esta línea
    return [shifted, popped];
  }
  
  console.log(popShift(['challenge', 'is', 'not', 'complete']));

console.log(separador);


//EJERCICIO N°5:

console.log("\nEjercicio N°5: Elimina elementos usando splice()");
console.log("Hemos inicializado un arreglo arr. Usa splice() para eliminar elementos de arr, de forma que sólo contenga elementos que sumen el valor de 10.\n");

const arr = [2, 4, 5, 1, 7, 5, 2, 1];
// Cambia solo el código debajo de esta línea
arr.splice(1,4)
// Cambia solo el código encima de esta línea
console.log(arr);

console.log(separador);


//EJERCICIO N°6:

console.log("\nEjercicio N°6: Agrega elementos usando splice()");
console.log("Hemos definido una función, htmlColorNames, que toma un arreglo de colores HTML como argumento. Modifica la función usando splice() para eliminar los dos primeros elementos del arreglo y agrega 'DarkSalmon' y 'BlanchedAlmond' en sus respectivos lugares.\n");

function htmlColorNames(arr) {
    // Cambia solo el código debajo de esta línea
  arr.splice(0,2,"DarkSalmon","BlanchedAlmond")
    // Cambia solo el código encima de esta línea
    return arr;
  }
  
  console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));

console.log(separador);


//EJERCICIO N°7:

console.log("\nEjercicio N°7: Copia elementos de un arreglo usando slice()");
console.log("Hemos definido una función, forecast, que toma un arreglo como argumento. Modifica la función usando slice() para extraer información del arreglo de argumentos y devuelve un nuevo arreglo que contenga los elementos warm y sunny.\n");

function forecast(arr) {
    // Cambia solo el código debajo de esta línea
  arr=arr.slice(2,4)
    return arr;
  }
  
  // Cambia solo el código encima de esta línea
  console.log(forecast(['cold', 'rainy', 'warm', 'sunny', 'cool', 'thunderstorms']));


console.log(separador);

//EJERCICIO N°8:

console.log("\nEjercicio N°8: Copia un arreglo con el operador de propagación");
console.log("Hemos definido una función, copyMachine que toma arr (un arreglo) y num (un número) como argumentos. Se supone que la función devuelve un nuevo arreglo compuesto por num copias de arr.\n");

function copyMachine(arr, num) {
    let newArr = [];
    while (num >= 1) {
      // Cambia solo el código debajo de esta línea
  newArr.push([...arr])
      // Cambia solo el código encima de esta línea
      num--;
    }
    return newArr;
  }
  
  console.log(copyMachine([true, false, true], 2));

console.log(separador);


//EJERCICIO N°9:

console.log("\nEjercicio N°9: Combina arreglos con el operador de propagación");
console.log("Hemos definido una función spreadOut que devuelve la variable sentence. Modifica la función usando el operador de propagación para que devuelva el arreglo ['learning', 'to', 'code', 'is', 'fun'].\n");

function spreadOut() {
    let fragment = ['to', 'code'];
    let sentence = ["learning", ...fragment,"is","fun"]; // Cambia esta línea
    return sentence;
  }
  
  console.log(spreadOut());


console.log(separador);


//EJERCICIO N°10:

console.log("\nEjercicio N°10: Comprueba la presencia de un elemento con indexOf()");
console.log("indexOf() puede ser increíblemente útil para verificar rápidamente la presencia de un elemento en un arreglo. Hemos definido una función, quickCheck, que toma un arreglo y un elemento como argumentos. Modifica la función usando indexOf() para que devuelva true si el elemento pasado existe en el arreglo, y false si no existe.\n");


function quickCheck(arr, elem) {
    // Cambia solo el código debajo de esta línea
  if (arr.indexOf(elem) < 0)
  return false
  else
  return true
    // Cambia solo el código encima de esta línea
  }
  
  console.log(quickCheck(['squash', 'onions', 'shallots'], 'mushrooms'));


console.log(separador);


//EJERCICIO N°11:

console.log("\nEjercicio N°11: Itera a través de todos los elementos de un arreglo utilizando bucles 'for'");
console.log("Hemos definido una función, filteredArray, que toma arr, un arreglo anidado, y elem como argumentos, y devuelve un nuevo arreglo. elem representa un elemento que puede o no estar presente en uno o más de los arreglos anidados dentro de arr. Modifica la función, usando un bucle for, para que devuelva una versión filtrada del arreglo pasado de forma que cualquier arreglo anidado dentro de arr que contenga elem haya sido eliminado.\n");


function filteredArray(arr, elem) {
    let newArr = [];
    // Cambia solo el código debajo de esta línea
  for (let i = 0 ; i < arr.length ; i++) {
    if (arr[i].indexOf(elem) < 0) {
      newArr.push(arr[i])
    }
  }
    // Cambia solo el código encima de esta línea
    return newArr;
  }
  
  console.log(filteredArray([[3, 2, 3], [1, 6, 3], [3, 13, 26], [19, 3, 9]], 3));


console.log(separador);


//EJERCICIO N°12:

console.log("\nEjercicio N°12: Crea arreglos complejos multidimensionales");
console.log("Hemos definido una variable, myNestedArray, como un arreglo. Modifica myNestedArray, utilizando cualquier combinación de cadenas, números y booleanos para los elementos de datos, de modo que tenga exactamente cinco niveles de profundidad (recuerda que el arreglo más externo es el nivel 1). En algún lugar del tercer nivel, incluye la cadena deep, en el cuarto nivel, incluye la cadena deeper y en el quinto nivel, incluye la cadena deepest.\n");


let myNestedArray = [
    // Cambia solo el código debajo de esta línea
    'unshift', false, 1, 2, 3, 'complex', 'nested',
  
    ['loop', 'shift', 6, 7, 1000, 'method'],
  
    [['concat', false, true, 'spread', 'array',"deep"]],
  
    [[['mutate', 1327.98, 'splice', 'slice', 'push',"deeper"]]],
  
    [[[['iterate', 1.3849, 7, '8.4876', 'arbitrary', 'depth',"deepest"]]]]
  
    // Cambia solo el código encima de esta línea
  ];


console.log(separador);


//EJERCICIO N°13:

console.log("\nEjercicio N°13: Agrega pares clave-valor a objetos de JavaScript");
console.log("Se ha creado un objeto foods con tres entradas. Usando la sintaxis de tu elección, agrega tres entradas más: bananas con el valor de 13, grapes con el valor de 35, y strawberries con el valor de 27.\n");


let foods = {
    apples: 25,
    oranges: 32,
    plums: 28
  };
  
  // Cambia solo el código debajo de esta línea
  foods.bananas = 13,
  foods.grapes = 35,
  foods.strawberries = 27
  // Cambia solo el código encima de esta línea
  
  console.log(foods);


console.log(separador);


//EJERCICIO N°14:

console.log("\nEjercicio N°14: Modifica un objeto anidado dentro de un objeto");
console.log("Aquí hemos definido un objeto userActivity, que incluye otro objeto anidado dentro de él. Establece el valor de la clave online en 45.\n");

let userActivity = {
  id: 23894201352,
  date: 'January 1, 2017',
  data: {
    totalUsers: 51,
    online: 42
  }
};

// Cambia solo el código debajo de esta línea
userActivity.data.online = 45
// Cambia solo el código encima de esta línea

console.log(userActivity);

console.log(separador);


//EJERCICIO N°15:

console.log("\nEjercicio N°15: Accede a los nombres de propiedad con la notación de corchetes");
console.log("Hemos definido una función, checkInventory, que recibe como argumento un elemento escaneado. Devuelve el valor actual de la clave scannedItem en el objeto foods. Puedes asumir que sólo se proporcionarán claves válidas como argumento a checkInventory.\n");


let foods2 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

function checkInventory(scannedItem) {
  // Cambia solo el código debajo de esta línea
return foods2[scannedItem]
  // Cambia solo el código encima de esta línea
}

console.log(checkInventory("apples"));


console.log(separador);


//EJERCICIO N°16:

console.log("\nEjercicio N°16: Usa la palabra clave 'delete' para eliminar las propiedades de los objetos");
console.log("Usa la palabra clave delete para eliminar las claves oranges, plums y strawberries del objeto foods.\n");

let foods3 = {
  apples: 25,
  oranges: 32,
  plums: 28,
  bananas: 13,
  grapes: 35,
  strawberries: 27
};

// Cambia solo el código debajo de esta línea
delete foods3.oranges
delete foods3.plums
delete foods3.strawberries
// Cambia solo el código encima de esta línea

console.log(foods3);

console.log(separador);


//EJERCICIO N°17:

console.log("\nEjercicio N°17: Evalúa si un objeto tiene una propiedad");
console.log("Termina de escribir la función para que devuelva true si el objeto pasado contiene los cuatro nombres, Alan, Jeff, Sarah and Ryan y devuelva false en caso contrario.\n");

let users = {
  Alan: {
    age: 27,
    online: true
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: true
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function isEveryoneHere(userObj) {
  // Cambia solo el código debajo de esta línea
if ("Alan" in userObj &&
    "Jeff" in userObj &&
    "Sarah" in userObj &&
    "Ryan" in userObj) {
  return true
} else {
  return false
}
  // Cambia solo el código encima de esta línea
}

console.log(isEveryoneHere(users));

console.log(separador);


//EJERCICIO N°18:

console.log("\nEjercicio N°18: Itera a través de las claves de un objeto con una sentencia 'for...in'");
console.log("Hemos definido una función countOnline que acepta un argumento (un objeto usuario). Utiliza una sentencia for...in dentro de esta función para iterar sobre el objeto usuarios (users) pasado a la función y devuelve el número de usuarios cuya propiedad online esté establecida como true. A continuación se muestra un ejemplo de un objeto usuario que podría pasarse a countOnline. Cada usuario tendrá una propiedad online con un valor true o false.\n");


const users2 = {
  Alan: {
    online: false
  },
  Jeff: {
    online: true
  },
  Sarah: {
    online: false
  }
}

function countOnline(usersObj) {
  // Cambia solo el código debajo de esta línea
let count = 0;
for(let user in usersObj) {
    if (usersObj[user].online == true) {
      count++;
    }
}
return count
  // Cambia solo el código encima de esta línea
}

console.log(countOnline(users2));

console.log(separador);


//EJERCICIO N°19:

console.log("\nEjercicio N°19: Genera un arreglo de todas las claves de los objetos con Object.keys()");
console.log("Termina de escribir la función getArrayOfUsers para que devuelva un arreglo que contenga todas las propiedades del objeto que recibe como argumento.\n");

let users3 = {
  Alan: {
    age: 27,
    online: false
  },
  Jeff: {
    age: 32,
    online: true
  },
  Sarah: {
    age: 48,
    online: false
  },
  Ryan: {
    age: 19,
    online: true
  }
};

function getArrayOfUsers(obj) {
  // Cambia solo el código debajo de esta línea
let array = Object.keys(obj)
return array
  // Cambia solo el código encima de esta línea
}

console.log(getArrayOfUsers(users3));

console.log(separador);


//EJERCICIO N°20:

console.log("\nEjercicio N°20: Modifica un arreglo almacenado en un objeto");
console.log("Echa un vistazo al objeto que hemos proporcionado en el editor de código. El objeto user contiene tres claves. La clave data contiene cinco claves, una de las cuales contiene un arreglo de friends. A partir de esto, puedes ver lo flexibles que son los objetos como estructuras de datos. Hemos empezado a escribir una función addFriend. Termina de escribirla para que tome un objeto user y agregue el nombre del argumento friend al arreglo almacenado en user.data.friends y devuelva ese arreglo.\n");


let user = {
  name: 'Kenneth',
  age: 28,
  data: {
    username: 'kennethCodesAllDay',
    joinDate: 'March 26, 2016',
    organization: 'freeCodeCamp',
    friends: [
      'Sam',
      'Kira',
      'Tomo'
    ],
    location: {
      city: 'San Francisco',
      state: 'CA',
      country: 'USA'
    }
  }
};

function addFriend(userObj, friend) {
  // Cambia solo el código debajo de esta línea
userObj.data.friends.push(friend)
return userObj.data.friends
  // Cambia solo el código encima de esta línea
}

console.log(addFriend(user, 'Pete'));





console.log(separador);


