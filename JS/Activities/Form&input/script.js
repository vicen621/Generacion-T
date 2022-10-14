let name;
let mail;
let sexo;
let medad = document.getElementById("medad");
let edad;
let argentino;
let submit = document.querySelector('#submit');

submit.addEventListener('click', () => {
    name = document.getElementById('fname').value;
    mail = document.getElementById('fmail').value;
    sexo = document.querySelector('input[name="sex"]:checked').value;
    edad = medad.options[medad.selectedIndex].text;
    argentino = document.getElementById('argentino').checked;

    alert("Lee la consola")
    console.log(name)
    console.log(mail)
    console.log(sexo)
    console.log(edad)
    console.log(argentino)
})