let btnagregar = document.getElementById("agregar");
let nombre = document.getElementById("Name");
let cantidad = document.getElementById("Number");
let arrayNombre = new Array;
let arrayCant = new Array;
let arryCant = new Array;

btnagregar.addEventListener("click", function (e) {
    e.preventDefault()
    let nom = nombre.value;
    let cant = cantidad.value;
    console.log(typeof (cant));
    if (validar(nom, cant)) {
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
        cantidad.classList.add("is-valid");
        cantidad.classList.remove("is-inavlid");

        

    } 
});

function validar(nom, numero) {
    let flag = true;
    console.log("Se esta validando");
    console.log(typeof (numero));
    if (nom.length == 0) {
        console.log("Fallo nombre");
        flag = false;
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }

    if (numero.length != 0 && (!isNaN(numero))) {
        console.log("numero no vacio y no letra");
        numero = parseInt(numero);
        console.log(numero);
        console.log(typeof (numero));
        if (numero < 0) {
            flag = false
            console.log("numero menor de 0");
            cantidad.classList.remove("is-valid")
            cantidad.classList.add("is-invalid")

        }else{
            console.log("numero valido");
        }
    } else {
        console.log("numero vacio");
        flag = false;
        cantidad.classList.remove("is-valid")
        cantidad.classList.add("is-invalid")
    }
    return flag;
}