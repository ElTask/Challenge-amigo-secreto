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

}

function mostrarAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
}