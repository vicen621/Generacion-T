let days = parseInt(prompt("Days in the trip:"))
let budget = parseInt(prompt("Budget for the trip:"))
let foods = parseInt(prompt("Foods per day:"))
let moneyPerFood = budget / (foods * days);

alert("Podés gastar " + moneyPerFood + " en cada comida para que te alcance la plata durante los " + days + " días de viaje")