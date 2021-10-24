let rdDevs = {
    getElem:  function(elemento) {
        return document.querySelector(elemento)
    },
    getAllElem: function(elemento) {
        return document.querySelectorAll(elemento)
    },
    logElem: function(elemento) {
        console.log(document.querySelector(elemento))
    },
    logAllElem: function(elemento) {
        console.log(document.querySelectorAll(elemento))
    }
}
// Questão 2
// Adicionar um botão ao html com a legenda “Cumprimentar” que, ao
// ser clicado (onclick) mostre um alerta que diga “olá”.

let botao = rdDevs.getElem("#btn-clique");
botao.onclick = function(){
    alert("Olá")
}

// Questão 3
// Adicionar outro botão ao html com a legenda “Alterar Fundo” que,
// quando clicado (onclick) troque a cor do fundo do body para verde.

let botao2 = rdDevs.getElem("#btn-fundo")
botao2.onclick = function(){
  document.body.style.backgroundColor = 'green'
}
//Questão 4
// Adicionar à página uma imagem que, ao passar do mouse em cima
// dela, imprima na linha de comando (“estou vendo a imagem”);

let image = rdDevs.getElem(".img-1")
image.addEventListener("mouseover", function (){
    console.log("estou vendo a imagem")
})
//Questão 5
// Adicionar outra imagem à página que, quando clicada, utilizando
// addEventListener, imprima na linha de comando (“estou clicando na
// imagem”).

let image2 = rdDevs.getElem(".img-2")
image2.addEventListener("click", function (){
    console.log("Estou clicando na imagem")
})
//Questão 6 e 7
// Definir um addEventListener de forma que, quando o usuário clicar
// em qualquer parte do body da página, a cor de fundo do body todo
// mude para vermelho. Para isso, usar o this da função do evento.

let clicou = rdDevs.getElem(".body")
function cor(){
this.style.backgroundColor = 'red'
}

clicou.addEventListener("click",cor)
//Questão 7
// O usuário é meio chato e, agora, pediu para remover o listener que
// criamos recentemente, já que ele não consegue interagir bem com
// a página. a função da questão 6 serve para a questão 7 tbm

clicou.removeEventListener("click",cor)

//Questão 8
// Criar um formulário básico com um action que redirecione para
// www.google.com.br. Usando JavaScript, fazer com que, quando o
// usuário clicar em Enviar, o formulário não seja enviado, mas sim
// que seja exibido um alert dizendo “Não é possível enviar”.

let form = rdDevs.getElem("#btn-google")
form.addEventListener("click", function(event){
    event.preventDefault()
    alert("Não é possivel enviar")
})

// Questão 9
// Fazer com que o addEventListener criado na imagem imprima em
// linha de comando a localização do mouse em x e y.

let image3 = rdDevs.getElem(".img-3")
image3.addEventListener("click", function (event){
   event.preventDefault()
   console.log(event.clientY)
   console.log(event.clientX)
})

//Questão Time 1 Em uma página HTML básica (podemos usar a mesma de Eventos),
// fazer com que, se o usuário passar 10 segundos nessa página, seja
// exibido um alert que diga “tempo esgotado!”

setTimeout(function(){
    alert("Tempo Esgotado")
},10000)

//Questão Time 2
//A cada 5 segundos que ele passe na página, fazer com que seja exibido 
// um alert que diga “hora do intervalo”.

setInterval(function(){
    alert("Hora do Intervalo")
},5000)
