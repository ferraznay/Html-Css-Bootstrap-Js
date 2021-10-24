// inicio validação Nome
let inputNome = document.querySelector("#inputNome")
inputNome.addEventListener('blur', function(){
    let regexNome = /[A-Z][a-z]* [A-Z][a-z]*/

    if (regexNome.test(this.value.trim())){
        document.querySelector('.erro-nome').style.display = 'none'
        document.querySelector('.certo-nome').style.display = 'block'
    } else{
        document.querySelector('.certo-nome').style.display = 'none'
        document.querySelector('.erro-nome').style.display = 'block'
    }

})
// fim validação Nome


// inicio validação CNPJ/CPF

let inputCpf = document.querySelector("#inputCnpjCpf")
inputCpf.addEventListener('blur', function(){
    let regexText = /([0-9]{2}[\.]?[0-9]{3}[\.]?[0-9]{3}[\/]?[0-9]{4}[-]?[0-9]{2})|([0-9]{3}[\.]?[0-9]{3}[\.]?[0-9]{3}[-]?[0-9]{2})/

    if (regexText.test(this.value.trim())){
        document.querySelector('.erro-cnpj-cpf').style.display = 'none'
        document.querySelector('.certo-cnpj-cpf').style.display = 'block'
    } else{
        document.querySelector('.certo-cnpj-cpf').style.display = 'none'
        document.querySelector('.erro-cnpj-cpf').style.display = 'block'
    }

})
// fim validação CNPJ/CPF


// inicio validação data nascimento
let inputData = document.querySelector("#inputData")
inputData.addEventListener('blur', function(){
let regexData = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

    if (regexData.test(this.value.trim())){
    document.querySelector(".erro-data-nascimento").style.display = "none"
    document.querySelector(".certo-data-nascimento").style.display = "block"
    } else{
    document.querySelector(".certo-data-nascimento").style.display = "none"
    document.querySelector(".erro-data-nascimento").style.display = "block"
    }

})
// fim validação data nascimento

// inicio validação endereço
let inputEnd = document.querySelector("#inputEndereco")
inputEnd.addEventListener('blur', function(){
let regexEnd = /([\w\W]+)\s(\d+)/

    if (regexEnd.test(this.value.trim())){
    document.querySelector(".erro-endereco").style.display = "none"
    document.querySelector(".certo-endereco").style.display = "block"
    } else{
    document.querySelector(".certo-endereco").style.display = "none"
    document.querySelector(".erro-endereco").style.display = "block"
    }

})
// fim validação endereço

// inicio validação bairro
let inputBairro = document.querySelector("#inputBairro")
inputBairro.addEventListener('blur', function(){
let regexBairro =  /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/

    if (regexBairro.test(this.value.trim())){
    document.querySelector(".erro-bairro").style.display = "none"
    document.querySelector(".certo-bairro").style.display = "block"
    } else{
    document.querySelector(".certo-bairro").style.display = "none"
    document.querySelector(".erro-bairro").style.display = "block"
    }

})
// fim validação bairro

// inicio validação cep
let inputCep = document.querySelector("#inputCep")
inputCep.addEventListener('blur', function(){
let regexCep =  /^([\d]{2})\.?([\d]{3})\-?([\d]{3})/

    if (regexCep.test(this.value.trim())){
    document.querySelector(".erro-cep").style.display = "none"
    document.querySelector(".certo-cep").style.display = "block"
    } else{
    document.querySelector(".certo-cep").style.display = "none"
    document.querySelector(".erro-cep").style.display = "block"
    }

})
// fim validação cep

// inicio data do cadastro
let inputDataCadastro = document.querySelector('#inputDataCadastro')
inputDataCadastro.addEventListener('blur', function() {
    let regexDataCadastro = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[13-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/

    if (regexDataCadastro.test(this.value.trim())) {
        document.querySelector('.erro-data-cadastro').style.display = 'none'
        document.querySelector('.sucesso-data-cadastro').style.display = 'block'
    } else {
        document.querySelector('.sucesso-data-cadastro').style.display = 'none'
        document.querySelector('.erro-data-cadastro').style.display = 'block'
    }
})
// fim data do cadastro

// inicio municipio
let inputMunicipio = document.querySelector("#inputMunicipio")
inputMunicipio.addEventListener('blur', function(){
let regexMunicipio =  /^([a-zA-Zà-úÀ-Ú]|-|_|\s)+$/ 

    if (regexMunicipio.test(this.value.trim())){
    document.querySelector(".erro-municipio").style.display = "none"
    document.querySelector(".certo-municipio").style.display = "block"
    } else{
    document.querySelector(".certo-municipio").style.display = "none"
    document.querySelector(".erro-municipio").style.display = "block"
    }

})
// fim municipio

// inicio telefone
let inputTel = document.querySelector("#inputTelefone")
inputTel.addEventListener('blur', function(){
let regexTel =  /^(\([0-9]{2}\))\s([9]{1})?([0-9]{4})-([0-9]{4})$/

    if (regexTel.test(this.value.trim())){
    document.querySelector(".erro-telefone").style.display = "none"
    document.querySelector(".certo-telefone").style.display = "block"
    } else{
    document.querySelector(".certo-telefone").style.display = "none"
    document.querySelector(".erro-telefone").style.display = "block"
    }

})
// fim telefone

//inicio celular
let inputCel = document.querySelector("#inputCelular")
inputCel.addEventListener('blur', function(){
let regexCel =  /^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$/

    if (regexCel.test(this.value.trim())){
    document.querySelector(".erro-celular").style.display = "none"
    document.querySelector(".certo-celular").style.display = "block"
    } else{
    document.querySelector(".certo-celular").style.display = "none"
    document.querySelector(".erro-celular").style.display = "block"
    }

})
//fim celular

// inicio inscrição estadual
let inputIe = document.querySelector("#inputEstadual")
inputIe.addEventListener('blur', function(){
let regexIe =  /("\d{4}.\d{4}.\d{4}.\d{4}")/
console.log(regexIe)

    if (regexIe.test(this.value.trim())){
    document.querySelector(".erro-ie").style.display = "none"
    document.querySelector(".certo-ie").style.display = "block"
    } else{
    document.querySelector(".certo-ie").style.display = "none"
    document.querySelector(".erro-ie").style.display = "block"
    }

})
// fim inscrição estadual

//selected

let selectUf = document.querySelector('#inputUf')
selectUf.addEventListener('change', function() {
    let selectedIndex = selectUf.selectedIndex
    let itemSelected = selectUf.options[selectedIndex]

    if(itemSelected.value != ""){
        document.querySelector('.erro-uf').style.display = 'none'
        document.querySelector('.certo-uf').style.display = 'block'
    } else {
        document.querySelector('.certo-uf').style.display = 'none'
        document.querySelector('.erro-uf').style.display = 'block'
    }
})