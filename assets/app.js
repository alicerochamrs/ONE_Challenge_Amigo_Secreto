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
    // Verificar se o nome já existe na lista
    if (amigos.includes(nome)) {
        alert('Este nome já foi adicionado!');
        return false;
    }
    amigos.push(nome);
    return true;
}

function sortearAmigo() {
    // Reiniciar a lista temporária se todos já foram sorteados
    if (tempList.length === 0) {
        tempList = [...amigos];
        sorteados = [];
    }
    
    // Sorteiar um amigo
    const indiceAmigo = Math.floor(Math.random() * tempList.length);
    let nomeAmigo = tempList[indiceAmigo];
    
    // Verificar se este amigo já foi sorteado anteriormente
    if (sorteados.includes(nomeAmigo)) {
        // Se já foi sorteado, tentar novamente
        return sortearAmigo();
    }
    
    sorteados.push(nomeAmigo);
    tempList.splice(indiceAmigo, 1);
    
    return nomeAmigo;
}

function atualizarLista() {
    listaAmigos.innerHTML = '';
    for (let amigo of amigos) {
        listaAmigos.innerHTML += `<li>${amigo}</li>`;
    }
}

function atualizarSorteados() {
    resultado.innerHTML = '';
    for (let amigo of sorteados) {
        resultado.innerHTML += `<li>${amigo}</li>`;
    }
}

buttonAdicionar.addEventListener('click', function() {
    const nome = inputAmigo.value.trim();
    if (nome === '') {
        alert('Por favor, insira um nome válido.');
        return;
    }
    
    if (adicionarAmigo(nome)) {
        inputAmigo.value = '';
        atualizarLista();
    }
});

buttonSortear.addEventListener('click', function() {
    if (amigos.length < 2) {
        alert('Adicione pelo menos dois amigos para sortear.');
        return;
    }
    
    // Verificar se todos os amigos já foram sorteados
    if (sorteados.length >= amigos.length) {
        const reiniciar = confirm('Todos os amigos já foram sorteados! Deseja reiniciar o sorteio?');
        if (reiniciar) {
            tempList = [...amigos];
            sorteados = [];
        } else {
            return;
        }
    }
    
    sortearAmigo();
    atualizarSorteados();
});