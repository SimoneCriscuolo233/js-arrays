const teachers = [
  'Nathan',
  'Ed',
  'Fabio',
  'Phil',
  'Carlo',
  'Lewis',
  'Luca'
]; // NON MODIFICARE QUESTA VARIABILE

// 1. Inverti l'ordine degli insegnanti nell'array teachers
// e salva il risultato nella variabile reversedTeachers

//-----Metodo con reverse-----

//const reversedTeachers = teachers.reverse();
//console.log(reversedTeachers);

//-----Con Ciclo For-----
const tempArray = [];
for (let i = teachers.length - 1; i >= 0; i--) {
  tempArray.push(teachers[i]);

}

const reversedTeachers = tempArray;
console.log(reversedTeachers)

// 2. Crea un nuovo array chiamato 'longNames' che contenga solo gli insegnanti
// con un nome di lunghezza maggiore o uguale a 5 caratteri
const longNames = [];
for (let i = 0; i < teachers.length; i++) {
  if (teachers[i].length >= 5) {
    longNames.push(teachers[i]);
  }
}
console.log(longNames);
// 3. Rimuovi 'Ed' dall'array teachers
teachers.splice(5, 1);
console.log(teachers);
// 4. Verifica se 'Fabio' è presente nell'array teachers
// e salva il risultato nella variabile isFabioPresent
const isFabioPresent = teachers.indexOf('Fabio');
if (isFabioPresent !== -1) {
  console.log(`Fabio è presente nell'array teachers.`);
} else {
  console.log(`Fabio non è presente nell'array teachers.`);
}


// 5. Unisci tutti gli insegnanti nell'array teachers in una stringa  separata da virgole e salvala nella variabile teachersString

//-----Metodo Join-----

//const teachersString = teachers.join(", ");
//console.log(teachersString);

//-----Metodo con ciclo For-----

let string = "";
for (let i = 0; i < teachers.lengt; i++) {
  if (i < teachers.length - 1) {
    string += teachers[i] + `, `;
  } else {
    string += teachers[i];
  }

}
const teachersString = string;
console.log(teachersString)
