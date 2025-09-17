//Alice Rocha: Desafio amigo secreto: O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

let amigos = [];
let sorteados = [];
let tempList = [];
const inputAmigo = document.querySelector('#amigo');
const buttonAdicionar = document.querySelector('button.button-add');
const listaAmigos = document.querySelector('#listaAmigos');
const resultado = document.querySelector('#resultado');
const buttonSortear = document.querySelector('button.button-draw');

function adicionarAmigo(nome) {
    amigos.push(nome)
}

function sortearAmigo() {
    if(tempList.length === 0){
        tempList = [...amigos];
        sorteados = [];
    }
        const indiceAmigo = Math.floor(Math.random() * tempList.length);
        let nomeAmigo = tempList[indiceAmigo];
        sorteados.push(nomeAmigo)
        tempList.splice(indiceAmigo, 1);
    
}

function atualizarLista() {
    listaAmigos.innerHTML = '';
    for(let amigo of amigos) {
    listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

function atualizarSorteados() {
    resultado.innerHTML = '';
    for(let amigo of sorteados) {
    resultado.innerHTML += `<li>${amigo}</li>`;
    }
}

buttonAdicionar.addEventListener('click', function(){
   const nome = inputAmigo.value;
   if(nome === '') {
    alert('Por favor, insira um nome válido.');
    return;  
   }
   adicionarAmigo(nome) 
   inputAmigo.value = ``;
    atualizarLista();
}) 

buttonSortear.addEventListener('click', function() {
    if(amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    sortearAmigo();
    atualizarSorteados();
})