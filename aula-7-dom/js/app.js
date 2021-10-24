// 1 - Use o método getElementById para encontrar o elemento <p> e altere o texto para "Olá".<p id ="demo"> </p>


// let p = document.getElementById("demo");
// p.textContent-'Olá' 


// 2 - Use o método getElementsByTagName para encontrar o primeiro elemento<p>  e altere o texto para "Olá". <p id = "demo"> </p><p id = "demo"> </p>

// RESPOSTA let lista = document.getElementsByTagName("p")
// lista[0].textContent = "alterei o primeiro elemento para Olá";
// let lista1 = document.getElementsByTagName("p")[1].innerText = "alterei o segundo elemento para Olá";
// console.log(lista)
// console.log(lista1)
// innerHtml ele retorna uma tag se vc escrever dentro uma tag ele vai adicionar a tag para texto tem q usar o innerText

// 3 - Altere o texto do primeiro elemento que possui o nome da classe "test". <p class="test"></p> <p class="test"></p> 
// RESPOSTA **let nome = document.querySelectorAll(".test");
//  **console.log(nome);
//  **nome[0].textContent = "Olá Mundo"

// 4 - Use HTML DOM para alterar o valor do atributo src da imagem. <img id="image" src="smiley.gif">
// let image = document.querySelector("#image");
// image.setAttribute('src',  'https://png.pngtree.com/png-vector/20201224/ourmid/pngtree-mbe-style-small-picture-png-image_2625623.jpg');




// 5 - Use HTML DOM para alterar o valor do campo de entrada(value).<input type="text" id="myText" value="Hello"> */

// RESPOSTA **let alterarValue = document.querySelector("#myText");
// **alterarValue.setAttribute("value", "naoHello");
//** */ console.log(alterarValue);




// 6 - Mude a cor do texto do elemento <p> para "vermelho".<p id="demo"></p>
// RESPOSTA let corElemento = document.querySelector("#demo");
// corElemento.style.color = "red"
// console.log(corElemento)


// 7 - Altere o tamanho da fonte do elemento para 40 pixels.<p id="demo"></p>
// RESPOSTA let tamanho = document.querySelector ("#demo")
// tamanho.style.fontSize = "40px" 
// console.log(tamanho)

// 8 - Use a propriedade CSS display para ocultar oelemento.<p id="demo"></p>


  let ocultar =  document.getElementById("demo")
  ocultar.style.display = "none";


  console.log(ocultar)




