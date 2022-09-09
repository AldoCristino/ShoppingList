let btnagregar = document.getElementById("agregar");
let nombre = document.getElementById("Name");
let cantidad = document.getElementById("Number");
let cont = 1;
let listaProductos = [];
const key = "Info"
let tbody = document.getElementsByTagName("tbody")[0];
let suma = 0;


 leerLocalStorage();
 //console.log(cont);

btnagregar.addEventListener("click", function (e) {
    e.preventDefault()
    let nom = nombre.value;
    let cant = cantidad.value;
    //console.log(typeof (cant));
    if (validar(nom, cant)) {
        //vALIDACION DE DATOS POSITIVO
        nombre.classList.add("is-valid");
        nombre.classList.remove("is-invalid");
        cantidad.classList.add("is-valid");
        cantidad.classList.remove("is-inavlid");
        //cREACION DE OBJETO
        let precio = aleatorio(0,100,2);
        let productos = { "id": cont, "Prodcuto": nom, "Cantidad": cant, "Precio": precio }
        listaProductos.push(productos);
        //GUARDADO DE LISTA DE OBJETOS A localStorage
        localStorage.setItem(key, JSON.stringify(listaProductos));
        //CREACION DE LISTA DE OBJETOS
        tbody.insertAdjacentHTML(
            "beforeend",
            ` <tr>
            <th scope="col">${cont}</th>
            <th scope="col">${nom}</th>
            <th scope="col">${cant}</th>
            <th scope="col">${precio}</th>
          </tr>`);
          suma += parseFloat(precio);
          document.getElementById("span").innerText = cont
          document.getElementById("spanTotal").innerText = suma.toFixed(2);
          cont++;
          
    }
});

function validar(nom, numero) {
    let flag = true;
    //console.log("Se esta validando");
    //console.log(typeof (numero));
    if (nom.length == 0) {
        //console.log("Fallo nombre");
        flag = false;
        nombre.classList.remove("is-valid");
        nombre.classList.add("is-invalid");
    }

    if (numero.length != 0 && (!isNaN(numero))) {
        //console.log("numero no vacio y no letra");
        numero = parseInt(numero);
        //console.log(numero);
        //console.log(typeof (numero));
        if (numero < 0) {
            flag = false
            //console.log("numero menor de 0");
            cantidad.classList.remove("is-valid")
            cantidad.classList.add("is-invalid")

        } 
    } else {
        //console.log("numero vacio");
        flag = false;
        cantidad.classList.remove("is-valid")
        cantidad.classList.add("is-invalid")
    }
    return flag;
}

function leerLocalStorage(){
    if(localStorage.getItem(key)){
        let arregloData = JSON.parse(localStorage.getItem(key));
        listaProductos = arregloData;
        //console.log(arregloData.length);
        let aux = arregloData.length -1
        //console.log(aux);
        let cotAux=0;
        arregloData.forEach(element => {
            //console.log(cotAux);
            tbody.insertAdjacentHTML(
                "beforeend",
                ` <tr>
                <th scope="col">${element.id}</th>
                <th scope="col">${element.Prodcuto}}</th>
                <th scope="col">${element.Cantidad}</th>
                <th scope="col">${element.Precio}</th>
              </tr>`);
              suma += parseFloat(element.Precio);
                if(cotAux == aux){
                    //console.log("Ultimo elemento");
                    cont = element.id + 1
                }else{
                    //console.log("Suma e contador auiliar");
                    cotAux ++;
                    //console.log(cotAux);
                }
        });
        //console.log(cotAux);
        //console.log(cont);
    }
    document.getElementById("span").innerText = cont-1;
    document.getElementById("spanTotal").innerText = suma;
}
function aleatorio(minimo, maximo, decimales) {
    var precision = Math.pow(10, decimales);
    minimo = minimo*precision;
    maximo = maximo*precision;
    return Math.floor(Math.random()*(maximo-minimo+1) + minimo) / precision;
}