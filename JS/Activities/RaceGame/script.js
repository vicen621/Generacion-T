let div = document.querySelector('div')
let redCar = document.getElementById('redcar')
let blueCar = document.getElementById('bluecar')

let divStyle = div.style;
let redStyle = redCar.style;
let blueStyle = blueCar.style;

let red = 0;
let blue = 0;

let won = false;

window.addEventListener('keyup', function(event)  {
    if (won)
        return
    
    if (event.key === 'a') {
        red += 10
        redStyle.marginLeft = red + "px";

        if (red + parseInt(getComputedStyle(redCar).getPropertyValue('width').replace('px', '')) == getComputedStyle(div).getPropertyValue('width').replace('px', '')) {
            alert("The red car has won the race!")
            won = true;
        }
    }
    else if (event.key === 'd') {
        blue += 10
        blueStyle.marginLeft = blue + "px";

        if (blue + parseInt(getComputedStyle(blueCar).getPropertyValue('width').replace('px', '')) == getComputedStyle(div).getPropertyValue('width').replace('px', '')) {
            alert("The blue car has won the race!")
            won = true;
        }
    }

})