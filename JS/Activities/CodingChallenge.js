//Total time: 19:50,96

// Test Evaluator (01:16,58)
console.log("\n\n Test evaluator")

function testEvaluator(note) {
  note = parseInt(note);

  if (note <= 2) {
    console.log("Muy mal");
  } else if (note <= 5) {
    console.log("Mal");
  } else if (note <= 6) {
    console.log("Tan cerca pero tan lejos");
  } else if (note <= 8) {
    console.log("Bien!");
  } else if (note <= 10) {
    console.log("Muy bien!");
  }
}

testEvaluator(0);
testEvaluator(1);
testEvaluator(2);
testEvaluator(3);
testEvaluator(4);
testEvaluator(5);
testEvaluator(6);
testEvaluator(7);
testEvaluator(8);
testEvaluator(9);
testEvaluator(10);

// The biggest one (04:28,65)
console.log("\n\n The biggest one")

function theBiggestOne(num, num2, string) {
  const min = Math.min(num, num2);
  const max = Math.max(num, num2);

  if (max > min) {
    console.log(max);
  } else if (max === min) {
    console.log(string.charAt(0) + string.charAt(string.length - 1));
  }
}

theBiggestOne(18, 2, "Hello");
theBiggestOne(4, 4, "Hola");

// Frootloop (07:01,53)
console.log("\n\n Frootloop")

let frutasYVerduras = [
  { fruta: "banana" },
  { verdura: "apio" },
  { fruta: "manzana" },
  { fruta: "frutilla" },
  { verdura: "zanahoria" },
  { fruta: "kiwi" },
  { fruta: "sandia" },
  { fruta: "melon" },
  { verdura: "repollo" },
  { fruta: "mango" },
];

function fruits(array) {
  let fruits = [];

  for (i = 0; i < array.length; i++) {
    let obj = array[i];

    if (Object.keys(obj) == "fruta") fruits.push(obj);
  }
  console.log(fruits);
}

fruits(frutasYVerduras);

// Soda Dispenser (03:39,48)
console.log("\n\n Soda dispenser")

let unidades = [1, 2, 3, 4];
let gaseosas = ["cocacola", "sprite", "fanta", "seven up"];

function sodaDispenser(unities, sodas) {
  let stockSodas = [];

  for (i = 0; i < unities.length; i++) {
    let unit = unities[i];
    let soda = sodas[i];

    let sodaStock = {
      unit: unit,
      soda: soda,
    };
    stockSodas.push(sodaStock);
  }

  console.log(stockSodas);
}

sodaDispenser(unidades, gaseosas);

// Birth year (03:24,60)
console.log("\n\n Birth Year")

let testObjects = [
  { nombre: "Juan", edad: 19 },
  { nombre: "Mario", edad: 22 },
];

function birthYear(objects) {
    const currentYear = new Date().getFullYear();

    for (i = 0; i < objects.length; i++) {
        let person = objects[i];

        person.birthYear = currentYear - person.edad
    }

    console.log(objects)
}

birthYear(testObjects);