let numeroPositivo = 5;
let numeroNegativo = -2;
let numeroDecimal = 10;
let hello = "olá mundo";
let verdadeiro = true;

console.log(numeroPositivo, numeroNegativo, numeroDecimal,hello, verdadeiro);


let nome1 = "Nayara";
let sobrenome1 = "Ferraz";

console.log (nome1 + " " + sobrenome1) ;

// var nome = "Clara";
// console.log (Nome);

// var nome = "Clara";
// console.log (nome, sobrenome);

let texto = " Nam pharetra velit quis erat mollis, at viverra magna aliquet. Suspendisse tellus nulla, fermentum vel euismod eget, sollicitudin vel ex. Duis ac blandit magna. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In euismod, diam at consequat auctor, tortor mi porta nisl, eu pretium urna neque eu magna. Proin vulputate quam sit amet urna pharetra, id tempus turpis sagittis. Nulla laoreet mi tempor, aliquam elit ac, vulputate ligula. Etiam pulvinar et dui sit amet imperdiet. Suspendisse potenti. Fusce scelerisque dui erat, non tincidunt dui placerat nec.";

console.log(texto);

let valorNulo = null;
let naoDefinido = undefined;

console.log(valorNulo);
console.log(naoDefinido);

let frutas = ["banana", "laranja", "maçã", "abacaxi", "melão"];

console.log(frutas);

let rd = "RD Está aqui agora!";
console.log(rd);

let nomedeCasado = false;
console.log(!nomedeCasado);

let nomeDecasado = true;
console.log(!nomeDecasado);




var nota = 10;
switch (nota){
    case 10: case 9:
        console.log("melhores alunos!");
        break
    case 8: case 7:
        console.log("Muito bom");
        break
    case 6: case 5:
            console.log("Ufa! você passou!");
            break
    case 4:
        console.log("Recuperação");
        break
    case 3: case 2: case 1: case 0:
         console.log("Reprovado!");
         break
    default:
        console.log("Nota inválida!");

}