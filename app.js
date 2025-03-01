let amigo = [];

//esta función agrega los nombres a la lista
function agregarAmigo() {
    let inputAmigo = document.getElementById("amigo");
    let nombreAmigo = inputAmigo.value.trim(); 
    
    if (!nombreAmigo) {
        alert ('Debes ingresar un nombre');
        return;
    }
    amigo.push(nombreAmigo);
    inputAmigo.value = "";
    inputAmigo.focus();
    mostrarListaAmigo();

    console.log(amigo);
}
//Esta función muestra la lista
function mostrarListaAmigo(){
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = '';
    
    for(let i = 0; i < amigo.length; i++){
        let item = document.createElement ("li");
        item.textContent = amigo [i];
        listaAmigos.appendChild(item);
    }
}
//Esta función sortea a los amigos
function sortearAmigo(){
    if(amigo.length === 0) {
    alert('No hay amigos para sortear');
    return;
    }
    if(amigo.length < 3) {
        alert('Coloca al menos 3 nombres de amigos');
        return;
        }

    let amigoSorteado = amigo[Math.floor(Math.random() * amigo.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
    

    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
}


function iniciarNuevoSorteo() {
    document.querySelector('#amigo').value = '';
    resultado.innerHTML = '';
    limpiarArray()
}
function limpiarArray(){
    amigo.length = 0;
    let limpiarLista = document.getElementById('listaAmigos');
    limpiarLista.innerHTML = '';
    return;
}


document.addEventListener('keyup', (e) => {
    if (e.keyCode === 13){
        agregarAmigo();
    }
}
);

document.addEventListener('keyup', (e) => {
    if (e.keyCode === 32){
        sortearAmigo();
    }
}
);
