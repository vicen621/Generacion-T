let age = parseInt(prompt("Age: "));
let maxAge = parseInt(prompt("Max age: "));
let snack = parseInt(prompt("Favorite snack: "));
let snackPerDay = parseInt(prompt("How many snacks would you eat per day?"));

let snacksInLife = (maxAge - age) * 365 * snackPerDay;

alert("Necesitaras " + snacksInLife + " snacks para que te alcancen hasta los " + maxAge + " años");

let snackPrice = parseInt(prompt("Snack price"));

console.log("Snack price for life: " + (snacksInLife * snackPrice));
