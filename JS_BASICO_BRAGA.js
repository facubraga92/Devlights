console.log("\n")
console.log("ALUMNO: BRAGA, FACUNDO NICOLÁS");
console.log("\n############################Javascript Basico############################\n");

const separador = "\n#########################################################################\n";

console.log(separador);


//EJERCICIO N°1:
console.log("\nEjercicio N°1: Comenta tu código de JavaScript");
console.log("Intenta crear un comentario de cada tipo.");

//Éste es un comentario de una línea.

/*Éste es un comentario de lineas
multiples.*/

console.log(separador);


//EJERCICIO N°2:

console.log("\nEjercicio N°2: Declara variables de JavaScript");
console.log("Utiliza la palabra clave var para crear una variable llamada myName.\n");

var myName; //El enunciado me pide solamente declarar la variable, pero también puedo crear la variable y asignarle un valor al mismo tiempo.

// var myName = "Facundo"

myName = "Facundo"


console.log(myName);

console.log(separador);


//EJERCICIO N°3:

console.log("\nEjercicio N°3: Almacenar valores con el operador de asignación");
console.log("Asigna el valor 7 a la variable a.\n");

var a;

a = 7;

console.log(`El valor de a es ${a}`);

console.log(separador);


//EJERCICIO N°4:

console.log("\nEjercicio N°4: Asigna el valor de una variable a otra variable");
console.log("Asigna el contenido de a a la variable b.\n");

var a;
a = 7;
var b;
b = a;

console.log(`El valor de a es ${a} y el valor de b es ${b}`);

console.log(separador);


//EJERCICIO N°5:

console.log("\nEjercicio N°5: Inicializa variables con el operador de asignación");
console.log("Define una variable a con var e inicialízala con un valor de 9.\n");

var a = 9;

console.log(`El valor de a es ${9}`);

console.log(separador);


//EJERCICIO N°6:

console.log("\nEjercicio N°6: Declara variables de cadena");
console.log("Crea dos nuevas variables de cadena: myFirstName y myLastName y asígnales los valores de tu nombre y apellido, respectivamente.\n");

var myFirstName = "Facundo";
var myLastName = "Braga";

console.log(`My firstname is ${myFirstName} and my lastname is ${myLastName}.`);

console.log(separador);


//EJERCICIO N°7:

console.log("\nEjercicio N°7: Comprendiendo las variables no inicializadas");
console.log("Inicializa las tres variables a, b, y c con 5, 10 y 'I am a' respectivamente para que no sean undefined.\n");

// Cambia solo el código debajo de esta línea
var a = 5;
var b = 10;
var c = "I am a";
// Cambia solo el código encima de esta línea

a = a + 1;
b = b + 5;
c = c + " String!";

console.log(a);
console.log(b);
console.log(c);

console.log(separador);

//EJERCICIO N°8:

console.log("\nEjercicio N°8: Comprendiendo la sensibilidad de mayúsculas en las variables");
console.log("Modifica las declaraciones y asignaciones existentes para que sus nombres usen camelCase.\nNo crees ninguna variable nueva.\n");

// Declaración de variables
var studlyCapVar;
var properCamelCase;
var titleCaseOver;

// Asignación de variables
studlyCapVar = 10;
properCamelCase = "A String";
titleCaseOver = 9000;

console.log(`studlyCapVar = ${studlyCapVar} \nproperCamelCase = ${properCamelCase} \ntitleCaseOver = ${titleCaseOver}`);

console.log(separador);


//EJERCICIO N°9:

console.log("\nEjercicio N°9: Explora las diferencias entre las palabras claves var y let");
console.log("Actualiza el código para que solo utilice la palabra clave let.\n");

let catName = "Oliver";
let catSound = "Meow!";

console.log(`catName = ${catName} , catSound = ${catSound}.`);

console.log(separador);


//EJERCICIO N°10:

console.log("\nEjercicio N°10: Declara una variable de solo lectura con la palabra clave const");
console.log("Cambia el código para que todas las variables se declaren con let o const. Usa let cuando quieras que la variable cambie y const cuando quieras que la variable permanezca constante. Además, renombra variables declaradas con const para adaptarse a las prácticas comunes. No debes cambiar las palabras asignadas a las variables.\n");

const FCC = "freeCodeCamp"; // Cambia esta línea
let fact = "is cool!"; // Cambia esta línea
fact = "is awesome!";
console.log(FCC, fact); // Cambia esta línea

console.log(separador);


//EJERCICIO N°11:

console.log("\nEjercicio N°11: Suma dos números con JavaScript");
console.log("Cambia el 0 para que la suma sea igual a 20.\n");

const sum = 10 + 10;

console.log(`El valor de la variable sum es ${sum}.`);

console.log(separador);


//EJERCICIO N°12:

console.log("\nEjercicio N°12: Resta un número de otro con JavaScript");
console.log("Cambia el 0 para que la diferencia sea 12.\n");

const difference = 45 - 33;

console.log(`El valor de la diferencia es ${difference}`);

console.log(separador);


//EJERCICIO N°13:

console.log("\nEjercicio N°13: Multiplica dos números con JavaScript");
console.log("Cambia el 0 para que el producto sea igual a 80.\n");

const product = 8 * 10;

console.log(`El valor del producto es ${product}.`);

console.log(separador);


//EJERCICIO N°14:

console.log("\nEjercicio N°14: Divide un número entre otro con JavaScript");
console.log("Cambia el 0 para que el quotient (cociente) sea igual a 2.\n");

const quotient = 66 / 33;

console.log(`El valor del cociente es ${quotient}.`);

console.log(separador);


//EJERCICIO N°15:

console.log("\nEjercicio N°15: Incrementa un número con JavaScript");
console.log("Cambia el código para usar el operador ++ en myVar.\n");

let myVar = 87;

// Cambia solo el código debajo de esta línea
console.log(`El valor de la variable myVar es ${myVar}`);
myVar ++;
console.log(`El valor de la variable myVar es ${myVar}`);

console.log(separador);


//EJERCICIO N°16:

console.log("\nEjercicio N°16: Decrementa un número con JavaScript");
console.log("Cambia el código para usar el operador -- en myVar.\n");

let myVar2 = 11;

// Cambia solo el código debajo de esta línea
console.log(`El valor de la variable myVar es ${myVar2}`);
myVar2 --;
console.log(`El valor de la variable myVar es ${myVar2}`);

console.log(separador);


//EJERCICIO N°17:

console.log("\nEjercicio N°17: Crea números decimales con JavaScript");
console.log("Crea una variable myDecimal y dale un valor decimal con una parte fraccional (por ejemplo, 5.7).\n");

let myDecimal = 1.8;

console.log(`El valor de la variable myDecimal es ${myDecimal}.`);

console.log(separador);


//EJERCICIO N°18:

console.log("\nEjercicio N°18: Multiplica dos números decimales con JavaScript");
console.log("Cambia el 0.0 para que el producto sea igual a 5.0.\n");

const product2 = 2.0 * 2.5;

console.log(`El valor del producto es ${product2}.`);

console.log(separador);


//EJERCICIO N°19:

console.log("\nEjercicio N°19: Divide un decimal entre otro con JavaScript");
console.log("Cambia el 0.0 para que el cociente (quotient) sea igual a 2.2.\n");

const quotient2 = 4.4 / 2.0; // Cambia esta línea

console.log(`El valor del cociente es ${quotient2}.`);

console.log(separador);


//EJERCICIO N°20:

console.log("\nEjercicio N°20: Encuentra un resto en JavaScript");
console.log("Establece remainder igual al resto de 11 dividido entre 3 usando el operador de resto (%).\n");

const remainder = 11%3;

console.log(`El resto de 11/3 es igual a ${remainder}.`);

console.log(separador);


//EJERCICIO N°21:

console.log("\nEjercicio N°21: Asignación compuesta con adición aumentada");
console.log("Convierte las asignaciones de a, b y c para que utilicen el operador +=.\n");

let a1 = 3;
let b1 = 17;
let c1 = 12;

// Cambia solo el código debajo de esta línea
a1 += 12;
b1 += 9;
c1 += 7;

console.log(`El valor de las variables a , b y c respectivamente son: ${a1}, ${b1}, ${c1}.`);

console.log(separador);


//EJERCICIO N°22:

console.log("\nEjercicio N°22: Asignación compuesta con resta aumentada");
console.log("Convierte las tareas de a, b, y c para utilizar el operador -=.\n");

let a2 = 11;
let b2 = 9;
let c2= 3;

// Cambia solo el código debajo de esta línea
a2 -= 6;
b2 -= 15;
c2 -= 1;

console.log(`El valor de las variables a , b y c respectivamente son: ${a2}, ${b2}, ${c2}.`);

console.log(separador);


//EJERCICIO N°23:

console.log("\nEjercicio N°23: Asignación compuesta con multiplicación aumentada");
console.log("Convierte las tareas de a, b, y c para utilizar el operador *=.\n");

let a3 = 5;
let b3 = 12;
let c3 = 4.6;

// Cambia solo el código debajo de esta línea
a3 *= 5;
b3 *= 3;
c3 *= 10;

console.log(`El valor de las variables a , b y c respectivamente son: ${a3}, ${b3}, ${c3}.`);

console.log(separador);


//EJERCICIO N°24:

console.log("\nEjercicio N°24: Asignación compuesta con división aumentada");
console.log("Convierte las tareas de a, b, y c para utilizar el operador /=.\n");

let a4 = 48;
let b4 = 108;
let c4 = 33;

// Cambia solo el código debajo de esta línea
a4 /= 12;
b4 /= 4;
c4 /= 11;

console.log(`El valor de las variables a , b y c respectivamente son: ${a4}, ${b4}, ${c4}.`);

console.log(separador);


//EJERCICIO N°25:

console.log("\nEjercicio N°25: Escapa comillas literales en cadenas");
console.log("Usa barras invertidas para asignar una cadena a la variable myStr de modo que si lo imprimieras en la consola, verías: I am a \"double quoted\" string inside \"double quotes\".\n");


const myStr = "I am a \"double quoted\" string inside \"double quotes\"."; // Cambia esta línea

console.log(myStr);

console.log(separador);


//EJERCICIO N°26:

console.log("\nEjercicio N°26: Cita cadenas con comillas simples");
console.log("Cambia la cadena proporcionada a una cadena con comillas simples al principio y al final y sin caracteres de escape.\n");

const myStr1 = '<a href="http://www.example.com" target="_blank">Link</a>';

console.log(myStr1);

console.log(separador);


//EJERCICIO N°27:

console.log("\nEjercicio N°27: Escapa secuencias en cadenas");
console.log("Asigna las siguientes tres líneas de texto en la variable única myStr usando secuencias de escape.\n");

const myStr2 = "FirstLine\n\t\\SecondLine\nThirdLine"; // Cambia esta línea

console.log(myStr2);

console.log(separador);


//EJERCICIO N°28:

console.log("\nEjercicio N°28: Concatena cadenas con el operador 'más'");
console.log("Construye myStr a partir de las cadenas This is the start. y This is the end. utilizando el operador +. Asegúrate de incluir un espacio entre las dos cadenas.\n");

const myStr3 = "This is the start. " + "This is the end."; // Cambia esta línea

console.log(myStr3);

console.log(separador);


//EJERCICIO N°29:

console.log("\nEjercicio N°29: Concatena cadenas con el operador 'más igual'");
console.log("Construye myStr en varias líneas concatenando estas dos cadenas: This is the first sentence. y This is the second sentence. usando el operador +=.\n");

let myStr4;

myStr4 = "This is the first sentence. ";

myStr4 += "This is the second sentence.";

console.log(myStr4);

console.log(separador);


//EJERCICIO N°30:

console.log("\nEjercicio N°30: Construye cadenas con variables");
console.log("Establece myName en una cadena igual a tu nombre y construye myStr con myName entre las cadenas My name is y and I am well!\n");

const myName1 = "Facundo";
const myStr5 = "My name is " + myName1 + " and I am well!";

console.log(myStr5);

console.log(separador);


//EJERCICIO N°31:

console.log("\nEjercicio N°31: Agrega variables a cadenas");
console.log("Establece someAdjective a una cadena de al menos 3 caracteres y añádelo a myStr usando el operador +=.\n");

// Cambia el código debajo de esta línea
const someAdjective = "Awesome!";
let myStr6 = "Learning to code is ";

myStr6 += someAdjective;

console.log(myStr6);

console.log(separador);


//EJERCICIO N°32:

console.log("\nEjercicio N°32: Encuentra la longitud de una cadena");
console.log("Utilice la propiedad .length para establecer lastNameLength al número de caracteres en lastName.\n");

// Configuración
let lastNameLength = 0;
const lastName = "Lovelace";

// Cambia solo el código debajo de esta línea
lastNameLength = lastName.length;

console.log(`La longitud de caracteres del string almacenado en la variable lastName es: ${lastNameLength}.`)

console.log(separador);


//EJERCICIO N°33:

console.log("\nEjercicio N°33: Utiliza la notación de corchetes para encontrar el primer carácter en una cadena");
console.log("Utiliza notación de corchetes para encontrar el primer carácter en la variable lastName y asígnalo a firstLetterOfLastName.\n");

// Configuración
let firstLetterOfLastName = "";
const lastName1 = "Lovelace";

// Cambia solo el código debajo de esta línea
firstLetterOfLastName = lastName1[0]; // Cambia esta línea

console.log(`La primera letra del string almacenado en la variable lastName es: ${firstLetterOfLastName}`);

console.log(separador);


//EJERCICIO N°34:

console.log("\nEjercicio N°34: Comprende la inmutabilidad de las cadenas");
console.log("Corrige la asignación de myStr para que contenga el valor de cadena Hello World usando el método mostrado en el ejemplo anterior.\n");

// Configuración
let myStr7 = "Jello World";

// Cambia solo el código debajo de esta línea
myStr7 = "Hello World"; // Cambia esta línea
// Cambia solo el código encima de esta línea

console.log(myStr7);

console.log(separador);


//EJERCICIO N°35:

console.log("\nEjercicio N°35: Utiliza la notación de corchetes para encontrar el enésimo carácter en una cadena");
console.log("Intentemos establecer thirdLetterOfLastName (tercera letra del apellido) para que sea igual a la tercera letra de la variable lastName usando notación de corchetes.\n");

// Configuración
const lastName2 = "Lovelace";

// Cambia solo el código debajo de esta línea
const thirdLetterOfLastName = lastName2[2]; // Cambia esta línea

console.log(`El tercer caracter del string almacenado en la variable lastName es: ${thirdLetterOfLastName}.`);

console.log(separador);


//EJERCICIO N°36:

console.log("\nEjercicio N°36: Utiliza la notación de corchetes para encontrar el último carácter en una cadena");
console.log("Usa notación de corchetes para encontrar el último carácter en la variable lastName.\n");

// Configuración
const lastName3 = "Lovelace";

// Cambia solo el código debajo de esta línea
const lastLetterOfLastName = lastName3[lastName3.length -1]; // Cambia esta línea

console.log(`El último caracter del string en la variable lastName es: ${lastLetterOfLastName}`);

console.log(separador);


//EJERCICIO N°37:

console.log("\nEjercicio N°37: Utiliza la notación de corchetes para encontrar el carácter enésimo final en una cadena");
console.log("Usa notación de corchetes para encontrar el penúltimo carácter en la cadena lastName.\n");

// Configuración
const lastName4 = "Lovelace";

// Cambia solo el código debajo de esta línea
const secondToLastLetterOfLastName = lastName4[lastName4.length -2]; // Cambia esta línea

console.log(`El penúltimo caracter en la cadena lastName es: ${secondToLastLetterOfLastName}. `);

console.log(separador);


//EJERCICIO N°38:

console.log("\nEjercicio N°38: Palabra en blanco");
console.log("En este desafío, te proporcionamos un sustantivo, un verbo, un adjetivo y un adverbio. Necesitas formar una oración completa usando palabras de tu elección, junto con las palabras que te proporcionamos.\n");

const myNoun = "dog";
const myAdjective = "big";
const myVerb = "ran";
const myAdverb = "quickly";

// Cambia solo el código debajo de esta línea
const wordBlanks = myNoun +" "+ "is " + myAdjective + " and he " + myVerb + " very " + myAdverb ; // Cambia esta línea
// Cambia solo el código encima de esta línea

console.log(wordBlanks);

console.log(separador);


//EJERCICIO N°39:

console.log("\nEjercicio N°39: Almacena múltiples valores en una variable utilizando los arreglos de JavaScript");
console.log("Modifica el nuevo arreglo myArray para que contenga tanto una cadena como un número (en ese orden).\n");

// Cambia solo el código debajo de esta línea
const myArray = ["Facundo",30];

console.log(`La variable myArray contiene lo siguiente: ${myArray}`);

console.log(separador);


//EJERCICIO N°40:

console.log("\nEjercicio N°40: Anida un arreglo dentro de otro arreglo");
console.log("Crea un arreglo anidado llamado myArray.\n");

// Cambia solo el código debajo de esta línea
const myArray1 = [["Facundo",30], ["Jake",6], ["Francisca",14], ["Bonita",9]];

console.log(`La variable myArray contiene lo siguiente:`);
console.log(myArray1)

console.log(separador);
console.log("FIN DE LOS PRIMEROS 40 EJERCICIOS")
console.log(separador)


















































































