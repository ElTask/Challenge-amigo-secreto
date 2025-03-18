let amigos = []

function agregarAmigo(){
    let nombre = document.getElementById("amigo").value;
    if (nombre == "") {
        alert("Por favor, inserte su nombre");
        return;
    }
    amigos.push(nombre);
    console.log(amigos);
    document.getElementById("amigo").value = "";
    mostrarAmigos();

}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        let elemento = document.createElement("li");
        elemento.textContent = amigos[i];
        lista.appendChild(elemento);
    }
}

function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Se necesitan al menos 2 amigoa para realizar el sorteo");
    } else {
            let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
            document.getElementById("resultado").innerHTML = amigoSorteado;
        }
    }