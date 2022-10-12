//Doubles
/* let numbers = [3, 7, 13, 99];
let doubles = numbers.map(n => n*2);

console.log(numbers)
console.log(doubles) */


//Exclamation Phrases
/* let phrases = ["Tonto", "Pelo", "Cabeza", "Larreta", "Pelado Puto"]

let exclamationPhrases = phrases.map(p => {
    return "¡" + p + "!"
}) */

// Reduce - 1
/* let numbers = [6, 1, 34, 94, 3, 17]

const mul = numbers.reduce((before, next )=> before * next);

console.log(mul); */

// Characters Chain
/* function charactersChain(text) {
    text = text.replace("?", "");
    text = text.replace("!", "");
    let array = text.split(" ");
    
    console.log("El texto contiene " + array.length + " palabras")
    console.log("La primera palabra es " + array[0]);
    console.log("La ultima palabra es " + array[array.length - 1]);
} */

//Promedio de estudiantes
/*let students = [
    {
        name: "Jose",
        state: "approved",
        notes: [8, 7, 6, 4, 10]
    },
    {
        name: "Azul",
        state: "approved",
        notes: [8, 7, 6, 4, 10]
    },
    {
        name: "Pablo",
        state: "disapproved",
        notes: [3, 6, 1, 4, 10]
    },
    {
        name: "Vicente",
        state: "disapproved",
        notes: [3, 6, 1, 4, 10]
    },
    {
        name: "Violeta",
        state: "approved",
        notes: [8, 7, 6, 4, 10]
    },
    {
        name: "Clara",
        state: "disapproved",
        notes: [3, 6, 1, 4, 10]
    }
]

function average(students, state) {
    let returnArray = [];
    for (i = 0; i < students.length; i++) {
        student = students[i];
        let notesNum = student.notes;
        console.log(notesNum)
        student.average = Math.round(student.notes.reduce((prev, curr) => prev + curr) / notesNum.length);
        if (student.state === state) {
            returnArray.push(student);
        }
    }

    return returnArray;
}*/

