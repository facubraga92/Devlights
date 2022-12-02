console.log("\n")
console.log("ALUMNO: BRAGA, FACUNDO NICOLÁS");
console.log("\n############################PROGRAMACIÓN FUNCIONAL############################\n");

const separador = "\n#########################################################################\n";

console.log(separador);


//EJERCICIO N°1:
console.log("\nEjercicio N°1: Aprende sobre programación funcional");
console.log("En el editor de código, las funciones prepareTea y getTea ya están definidas. Llama a la función getTea para obtener 40 tazas de té para el equipo y guárdalas en la variable tea4TeamFCC.\n");

// Función que retorna una cadena de texto representando una taza de té verde
const prepareTea = () => 'greenTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea = (numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4TeamFCC = getTea(40);
// Cambia solo el código encima de esta línea

console.log(separador);


//EJERCICIO N°2:

console.log("\nEjercicio N°2: Comprende la terminología de la programación funcional");
console.log("Prepara 27 tazas de té verde (green tea) y 13 tazas de té negro (black tea) y almacénalas en las variables tea4GreenTeamFCC y tea4BlackTeamFCC, respectivamente. Ten en cuenta que la función getTea ha sido modificada por lo que ahora recibe una función como primer argumento.\n");

// Función que retorna una cadena de texto representando una taza de té verde
const prepareGreenTea = () => 'greenTea';

// Función que retorna una cadena de texto representando una taza de té negro
const prepareBlackTea = () => 'blackTea';

/*
Dada una función (representando el tipo de té) y el número de tazas necesarias, la 
    siguiente función retorna un arreglo de cadenas de texto (cada una representando un tipo específico de té).
*/
const getTea2 = (prepareTea, numOfCups) => {
  const teaCups = [];

  for(let cups = 1; cups <= numOfCups; cups += 1) {
    const teaCup = prepareTea();
    teaCups.push(teaCup);
  }
  return teaCups;
};

// Cambia solo el código debajo de esta línea
const tea4GreenTeamFCC = getTea2(prepareGreenTea,27);
const tea4BlackTeamFCC = getTea2(prepareBlackTea,13);
// Cambia solo el código encima de esta línea

console.log(
  tea4GreenTeamFCC,
  tea4BlackTeamFCC
);

console.log(separador);


//EJERCICIO N°3:

console.log("\nEjercicio N°3: Comprende los peligros de usar el código imperativo");
console.log("Examine el código en el editor. Está utilizando un método que tiene efectos secundarios en el programa, causando un comportamiento incorrecto. La lista final de pestañas abiertas, almacenadas en finalTabs.tabs deberia ser ['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium', 'new tab', 'Netflix', 'YouTube', 'Vine', 'GMail', 'Work mail', 'Docs', 'freeCodeCamp', 'new tab'] pero la lista producida por el código es un poco diferente.Cambia Window.prototype.tabClose para que elimine la pestaña correcta.\n");

// tabs es un arreglo de títulos de cada sitio abierto dentro de la ventana
const Window = function(tabs) {
    this.tabs = tabs; // Mantenemos un registro del arreglo dentro del objeto
  };
  
  // Cuando unes dos ventanas en una
  Window.prototype.join = function(otherWindow) {
    this.tabs = this.tabs.concat(otherWindow.tabs);
    return this;
  };
  
  // Cuando abres una nueva pestaña al final
  Window.prototype.tabOpen = function(tab) {
    this.tabs.push('new tab'); // Abramos una nueva pestaña por ahora
    return this;
  };
  
  // Cuando cierras una pestaña
  Window.prototype.tabClose = function(index) {
  
    // Cambia solo el código debajo de esta línea
  
    const tabsBeforeIndex = this.tabs.slice(0, index); // Obtiene las pestañas antes de la pestaña
    const tabsAfterIndex = this.tabs.slice(index + 1); // Obtiene las pestañas después de la pestaña
  
    this.tabs = tabsBeforeIndex.concat(tabsAfterIndex); // Únelos juntos
  
    // Cambia solo el código encima de esta línea
  
    return this;
   };
  
  // Vamos a crear tres ventanas del navegador
  const workWindow = new Window(['GMail', 'Inbox', 'Work mail', 'Docs', 'freeCodeCamp']); // Tu casilla de correo, drive y otros sitios de trabajo
  const socialWindow = new Window(['FB', 'Gitter', 'Reddit', 'Twitter', 'Medium']); // Sitios sociales
  const videoWindow = new Window(['Netflix', 'YouTube', 'Vimeo', 'Vine']); // Sitios de entretenimiento
  
  // Ahora completa la apertura de la pestaña, cierre, y otras operaciones
  const finalTabs = socialWindow
    .tabOpen() // Abre una nueva pestaña para memes de gatos
    .join(videoWindow.tabClose(2)) // Cierra la tercera pestaña en videoWindow y une
    .join(workWindow.tabClose(1).tabOpen());
  console.log(finalTabs.tabs);

console.log(separador);


//EJERCICIO N°4:

console.log("\nEjercicio N°4: Evita mutaciones y efectos secundarios utilizando programación funcional");
console.log("Completa el código de la función incrementer para que devuelva el valor de la variable global fixedValue incrementada en uno.\n");

// La variable global
let fixedValue = 4;

function incrementer() {
  // Cambia solo el código debajo de esta línea
let newValue = fixedValue + 1
return newValue

  // Cambia solo el código encima de esta línea
}

console.log(separador);


//EJERCICIO N°5:

console.log("\nEjercicio N°5: Pasa argumentos para evitar la dependencia externa en una función");
console.log("Actualicemos la función incrementer para declarar claramente sus dependencias.Escribe la función incrementer para que reciba un argumento, y luego devuelva un resultado después de aumentar el valor en uno.\n");

// La variable global
let fixedValue2 = 4;

// Cambia solo el código debajo de esta línea
function incrementer(val) {
let newVal = val + 1
return newVal

  // Cambia solo el código encima de esta línea
}

console.log(separador);


//EJERCICIO N°6:

console.log("\nEjercicio N°6: Refactoriza variables globales por fuera de funciones");
console.log("Reescribe el código para que el arreglo global bookList no sea cambiado dentro de ninguna de las funciones. La función add debe agregar el bookName dado al final del arreglo pasado a esta y devolver un nuevo arreglo (lista). La función remove debe eliminar el bookName dado del arreglo pasado a esta.\n");

// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(bookList,bookName) {
  let bookListCopy = [...bookList]

  bookListCopy.push(bookName);
  return bookListCopy;

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(bookList,bookName) {
  let bookListCopy = [...bookList]
  const book_index = bookListCopy.indexOf(bookName);
  if (book_index >= 0) {

    bookListCopy.splice(book_index, 1);
    return bookListCopy;

    // Cambia el código encima de esta línea
    }
}

console.log(separador);


//EJERCICIO N°7:

console.log("\nEjercicio N°7: Usa el método 'map' para extraer datos de un arreglo");
console.log("El arreglo watchList contiene objetos con información sobre varias películas. Usa map en watchList para asignar un nuevo arreglo de objetos a la variable ratings. Cada película en el nuevo arreglo debe tener solo una tecla title con el nombre de la película, y una tecla rating con la calificación IMDB. El código en el editor utiliza actualmente un bucle for para hacer esto, por lo que debes reemplazar la funcionalidad del bucle con tu expresión map.\n");

// La variable global
const watchList = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Cambia solo el código debajo de esta línea
  
  const ratings = watchList.map(item => ({
    title : item.Title,
    rating: item.imdbRating
  }))
  // Cambia solo el código encima de esta línea
  
  console.log(JSON.stringify(ratings));


console.log(separador);

//EJERCICIO N°8:

console.log("\nEjercicio N°8: Implementa map en un prototipo");
console.log("Escribe tu propio Array.prototype.myMap(), el cual debe comportarse exactamente como Array.prototype.map(). No debes utilizar el método incorporado map. Se puede acceder a la instancia de Array en el método myMap usando this.\n");


Array.prototype.myMap = function(callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
  for (let i= 0 ; i < this.length ; i++) {
    newArray.push(callback(this[i]))
  }
    // Cambia solo el código encima de esta línea
    return newArray;
  };


console.log(separador);


//EJERCICIO N°9:

console.log("\nEjercicio N°9: Usa el método de 'filter' para extraer datos de un arreglo");
console.log("La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza una combinación de filter y map en watchList para asignar un nuevo arreglo de objetos con solo title y rating claves. El nuevo arreglo solo debe incluir objetos donde imdbRating es mayor o igual a 8.0. Ten en cuenta que los valores rating se guardan como cadenas en el objeto y puedes necesitar convertirlos en números para realizar operaciones matemáticas en ellos.\n");

// La variable global
const watchList2 = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  // Cambia solo el código debajo de esta línea
  const firstFilter = watchList2.map(item => ({
    title: item.Title,
    rating: item.imdbRating
  }))
  const filteredList = firstFilter.filter(item => item.rating > 8.0);
  
  // Cambia solo el código encima de esta línea
  
  console.log(filteredList);



console.log(separador);


//EJERCICIO N°10:

console.log("\nEjercicio N°10: Implementa el método filter en un prototipo");
console.log("Escribe tu propio Array.prototype.myFilter(), que debe comportarse exactamente como Array.prototype.filter(). No debes utilizar el método incorporado filter. Se puede acceder a la instancia Array en el método myFilter usando this.\n");


Array.prototype.myFilter = function(callback) {
    const newArray = [];
    // Cambia solo el código debajo de esta línea
  for (let i=0 ; i < this.length ; i++) {
    if (callback(this[i])== true) {
      newArray.push(this[i])
    }
    
  }
    // Cambia solo el código encima de esta línea
    return newArray;
  };


console.log(separador);


//EJERCICIO N°11:

console.log("\nEjercicio N°11: Devolver parte de un arreglo mediante el método slice");
console.log("Utiliza el método slice en la función sliceArray para retornar parte del arreglo anim dados los índices beginSlice y endSlice. La función debe devolver un arreglo.\n");

function sliceArray(anim, beginSlice, endSlice) {
    // Cambia solo el código debajo de esta línea
  let newArr = anim.slice(beginSlice,endSlice)
  return newArr
  
    // Cambia solo el código encima de esta línea
  }
  
  const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
  sliceArray(inputAnim, 1, 3);



console.log(separador);


//EJERCICIO N°12:

console.log("\nEjercicio N°12: Remueve elementos de un arreglo usando slice en lugar de splice");
console.log("Reescribe la función nonMutatingSplice usando slice en lugar de splice. Debe limitar el arreglo proporcionado cities a una longitud de 3 y devolver un nuevo arreglo con solo los primeros tres elementos.No modifiques el arreglo original proporcionado en la función.\n");

function nonMutatingSplice(cities) {
    // Cambia solo el código debajo de esta línea
    return cities.slice(0,3);
  
    // Cambia solo el código encima de esta línea
  }
  
  const inputCities = ["Chicago", "Delhi", "Islamabad", "London", "Berlin"];
  nonMutatingSplice(inputCities);


console.log(separador);


//EJERCICIO N°13:

console.log("\nEjercicio N°13: Combina dos arreglos utilizando el método 'concat'");
console.log("Usa el método concat en la función nonMutatingConcat para concatenar attach al final de original. La función deber devolver el arreglo concatenado.\n");

function nonMutatingConcat(original, attach) {
    // Cambia solo el código debajo de esta línea
  
  return original.concat(attach)
  
    // Cambia solo el código encima de esta línea
  }
  
  const first = [1, 2, 3];
  const second = [4, 5];
  nonMutatingConcat(first, second);

console.log(separador);


//EJERCICIO N°14:

console.log("\nEjercicio N°14: Agrega elementos al final de un arreglo utilizando concat en lugar de push");
console.log("Cambia la función nonMutatingPush de manera que utilice concat para unir newItem al final de original sin alterar los arreglos original o newItem. La función debe devolver un arreglo.\n");

function nonMutatingPush(original, newItem) {
    // Cambia solo el código debajo de esta línea
    return original.concat(newItem);
  
    // Cambia solo el código encima de esta línea
  }
  
  const first1 = [1, 2, 3];
  const second1 = [4, 5];
  nonMutatingPush(first1, second1);


console.log(separador);


//EJERCICIO N°15:

console.log("\nEjercicio N°15: Utiliza el método 'reduce' para analizar datos");
console.log("La variable watchList contiene un arreglo de objetos con información sobre varias películas. Utiliza reduce para encontrar la calificación media en IMDB de las películas dirigidas por Christopher Nolan. Recuerda de desafíos anteriores filtrar (filter) los datos y mapear (map) sobre ellos para extraer lo que necesitas. Puede que necesites crear otras variables y devolver la calificación media con la función getRating. Ten en cuenta que los valores de calificación se guardan como cadenas en el objeto y necesitan ser convertidos en números antes de ser utilizados en cualquier operación matemática.\n");


// La variable global
const watchList3 = [
    {
      "Title": "Inception",
      "Year": "2010",
      "Rated": "PG-13",
      "Released": "16 Jul 2010",
      "Runtime": "148 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Christopher Nolan",
      "Actors": "Leonardo DiCaprio, Joseph Gordon-Levitt, Elliot Page, Tom Hardy",
      "Plot": "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
      "Language": "English, Japanese, French",
      "Country": "USA, UK",
      "Awards": "Won 4 Oscars. Another 143 wins & 198 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.8",
      "imdbVotes": "1,446,708",
      "imdbID": "tt1375666",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Interstellar",
      "Year": "2014",
      "Rated": "PG-13",
      "Released": "07 Nov 2014",
      "Runtime": "169 min",
      "Genre": "Adventure, Drama, Sci-Fi",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan, Christopher Nolan",
      "Actors": "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
      "Plot": "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      "Language": "English",
      "Country": "USA, UK",
      "Awards": "Won 1 Oscar. Another 39 wins & 132 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
      "Metascore": "74",
      "imdbRating": "8.6",
      "imdbVotes": "910,366",
      "imdbID": "tt0816692",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "The Dark Knight",
      "Year": "2008",
      "Rated": "PG-13",
      "Released": "18 Jul 2008",
      "Runtime": "152 min",
      "Genre": "Action, Adventure, Crime",
      "Director": "Christopher Nolan",
      "Writer": "Jonathan Nolan (screenplay), Christopher Nolan (screenplay), Christopher Nolan (story), David S. Goyer (story), Bob Kane (characters)",
      "Actors": "Christian Bale, Heath Ledger, Aaron Eckhart, Michael Caine",
      "Plot": "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, the caped crusader must come to terms with one of the greatest psychological tests of his ability to fight injustice.",
      "Language": "English, Mandarin",
      "Country": "USA, UK",
      "Awards": "Won 2 Oscars. Another 146 wins & 142 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
      "Metascore": "82",
      "imdbRating": "9.0",
      "imdbVotes": "1,652,832",
      "imdbID": "tt0468569",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Batman Begins",
      "Year": "2005",
      "Rated": "PG-13",
      "Released": "15 Jun 2005",
      "Runtime": "140 min",
      "Genre": "Action, Adventure",
      "Director": "Christopher Nolan",
      "Writer": "Bob Kane (characters), David S. Goyer (story), Christopher Nolan (screenplay), David S. Goyer (screenplay)",
      "Actors": "Christian Bale, Michael Caine, Liam Neeson, Katie Holmes",
      "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from the corruption that Scarecrow and the League of Shadows have cast upon it.",
      "Language": "English, Urdu, Mandarin",
      "Country": "USA, UK",
      "Awards": "Nominated for 1 Oscar. Another 15 wins & 66 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BNTM3OTc0MzM2OV5BMl5BanBnXkFtZTYwNzUwMTI3._V1_SX300.jpg",
      "Metascore": "70",
      "imdbRating": "8.3",
      "imdbVotes": "972,584",
      "imdbID": "tt0372784",
      "Type": "movie",
      "Response": "True"
    },
    {
      "Title": "Avatar",
      "Year": "2009",
      "Rated": "PG-13",
      "Released": "18 Dec 2009",
      "Runtime": "162 min",
      "Genre": "Action, Adventure, Fantasy",
      "Director": "James Cameron",
      "Writer": "James Cameron",
      "Actors": "Sam Worthington, Zoe Saldana, Sigourney Weaver, Stephen Lang",
      "Plot": "A paraplegic marine dispatched to the moon Pandora on a unique mission becomes torn between following his orders and protecting the world he feels is his home.",
      "Language": "English, Spanish",
      "Country": "USA, UK",
      "Awards": "Won 3 Oscars. Another 80 wins & 121 nominations.",
      "Poster": "http://ia.media-imdb.com/images/M/MV5BMTYwOTEwNjAzMl5BMl5BanBnXkFtZTcwODc5MTUwMw@@._V1_SX300.jpg",
      "Metascore": "83",
      "imdbRating": "7.9",
      "imdbVotes": "876,575",
      "imdbID": "tt0499549",
      "Type": "movie",
      "Response": "True"
    }
  ];
  
  function getRating(watchList3) {
    // Cambia solo el código debajo de esta línea
    let averageRating;
    let pelisNolan;
      pelisNolan = watchList3.filter((item) => item.Director == "Christopher Nolan");
  
    let calificacion;
      calificacion = pelisNolan.map((rating) => Number(rating.imdbRating))
  
      averageRating = (calificacion.reduce((sum,val)=> sum + val , 0)/calificacion.length)
  
  
    // Cambia solo el código encima de esta línea
    return averageRating;
  }
  
  console.log(getRating(watchList));


console.log(separador);


//EJERCICIO N°16:

console.log("\nEjercicio N°16: Utiliza las funciones de orden superior 'map, filter o reduce' para resolver un problema complejo");
console.log("Completa el código para la función squareList usando cualquier combinación de map(), filter(), y reduce(). La función debe devolver un nuevo arreglo que contenga los cuadrados de solamente los enteros positivos (números decimales no son enteros) cuando se le pasa un arreglo de números reales. Un ejemplo de un arreglo que contiene números reales es [-3, 4.8, 5, 3, -3.2].Nota: Tu función no debe usar ningún tipo de bucle for o while o la función forEach().\n");


const squareList = arr => {
    // Cambia solo el código debajo de esta línea
    let positivo;
    let enteroPositivo;
  
    positivo = arr.filter(numer => numer > 0)
    enteroPositivo = positivo.filter(numb => Number.isInteger(numb))
  
    arr = enteroPositivo.map(num => num**2)
    
    
    return arr;
    // Cambia solo el código encima de esta línea
  };
  
  const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
  console.log(squaredIntegers);
  
  



console.log(separador);


//EJERCICIO N°17:

console.log("\nEjercicio N°17:Ordena un arreglo alfabéticamente con el método sort ");
console.log("Utiliza el método sort en la función alphabeticalOrder para ordenar los elementos de arr en orden alfabético. La función debe devolver el arreglo ordenado.\n");


function alphabeticalOrder(arr) {
    // Cambia solo el código debajo de esta línea
  
    return arr.sort(function(a,b){
      return a === b ? 0 : a < b ? -1 : 1;
    })
    // Cambia solo el código encima de esta línea
  }
  
  alphabeticalOrder(["a", "d", "c", "a", "z", "g"]);


console.log(separador);


//EJERCICIO N°18:

console.log("\nEjercicio N°18: Devuelve un arreglo ordenado sin cambiar el arreglo original");
console.log("Utiliza el método sort en la función nonMutatingSort para ordenar los elementos de un arreglo en orden ascendente. La función debe devolver un nuevo arreglo y no mutar la variable globalArray.\n");

const globalArray = [5, 6, 3, 2, 9];

function nonMutatingSort(arr) {
  // Cambia solo el código debajo de esta línea
let newArr = [];
newArr = newArr.concat(arr)

return newArr.sort(function(a,b){
  return a -b ;
})


  // Cambia solo el código encima de esta línea
}

nonMutatingSort(globalArray);

console.log(separador);


//EJERCICIO N°19:

console.log("\nEjercicio N°19: Divide una cadena en un arreglo utilizando el método split");
console.log("Utiliza el método split dentro de la función splitify para dividir str en un arreglo de palabras. La función debe devolver un arreglo. Ten en cuenta que las palabras no siempre están separadas por espacios y que el arreglo no debe contener signos de puntuación.\n");


function splitify(str) {
    // Cambia solo el código debajo de esta línea
  let separado;
  return separado = str.split(/\W/)
  
    // Cambia solo el código encima de esta línea
  }
  
  splitify("Hello World,I-am code");


console.log(separador);


//EJERCICIO N°20:

console.log("\nEjercicio N°20: Combina un arreglo en una cadena utilizando el método join");
console.log("Utiliza el método join (entre otros) dentro de la función sentensify para hacer una oración a partir de las palabras en la cadena str. La función debe devolver una cadena. Por ejemplo, I-like-Star-Wars se convertiría en I like Star Wars. Para este desafío, no utilices el método replace.\n");



function sentensify(str) {
    // Cambia solo el código debajo de esta línea
  
  let separado;
  let oracion;
  
  separado = str.split(/\W/)
  
  oracion = separado.join(" ")
  
  return oracion;
  
    // Cambia solo el código encima de esta línea
  }
  
  sentensify("May-the-force-be-with-you");
  
  console.log(separado)



console.log(separador);


//EJERCICIO N°21:

console.log("\nEjercicio N°21: Aplicar programación funcional para convertir cadenas a slugs de URL");
console.log("Rellena la función urlSlug para convertir una cadena title y devolver la versión con guiones para la URL. Puedes utilizar cualquiera de los métodos vistos en esta sección y no utilices replace. Aquí están los requisitos:La entrada es una cadena con espacios y palabras, en mayúsculas y minúsculas.El resultado es una cadena con los espacios entre palabras reemplazadas por un guion (-).El resultado debe contener todas las letras minúsculas.El resultado no debe tener espacios\n");


// Cambia solo el código debajo de esta línea
function urlSlug(title) {
    let titulo;
    titulo = title.toLowerCase()
    titulo = titulo.trim()
    titulo = titulo.split(/\s+/)
    titulo = titulo.join("-")
    
    
    return titulo
    
    }
    // Cambia solo el código encima de esta línea
    urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone");
    
    
    console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"))


console.log(separador);


//EJERCICIO N°22:

console.log("\nEjercicio N°22: Usa el método every para comprobar que cada elemento de un arreglo atienda un criterio");
console.log("Utiliza el método every dentro de la función checkPositive para comprobar si cada elemento en arr es positivo. La función debe devolver un valor booleano.\n");

function checkPositive(arr) {
    // Cambia solo el código debajo de esta línea
  let positivo = arr.every(function(value) {
    return value > 0;
  });
  return positivo
    // Cambia solo el código encima de esta línea
  }
  
  checkPositive([1, 2, 3, -4, 5]);

console.log(separador);


//EJERCICIO N°23:

console.log("\nEjercicio N°23: Usa el método some para comprobar si algún elemento en un arreglo cumple un criterio");
console.log("Utiliza el método some dentro de la función checkPositive para comprobar si algún elemento en arr es positivo. La función debe devolver un valor booleano.\n");

function checkPositive(arr) {
    // Cambia solo el código debajo de esta línea
  let positivo;
  positivo = arr.some(function(value) {
    return value > 0;
  })
  return positivo;
    // Cambia solo el código encima de esta línea
  }
  
  checkPositive([1, 2, 3, -4, 5]);

console.log(separador);


//EJERCICIO N°24:

console.log("\nEjercicio N°24: Introducción a la currificación y a la aplicación de funciones parciales");
console.log("Completa el cuerpo de la función add para que use currificación para añadir parámetros x, y, y z.\n");


function add(x) {
    // Cambia solo el código debajo de esta línea
  return function(y) {
      return function(z) {
        return x + y + z;
      };
    };
  
    // Cambia solo el código encima de esta línea
  }
  
  add(10)(20)(30);


console.log(separador);


