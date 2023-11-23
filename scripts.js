const buttonForm = document.querySelector(".button-enviar")
const buttonClick = document.querySelector(".entre-em-contato")
const form = document.querySelector(".fale-conosco")

let mascara = document.querySelector(".mascara-form")


function cliqueiNoBotao(){

    form.style.left = "600px"
    mascara.style.visibility = "visible"



}

function sumirFormulario(){

    form.style.left = "-320px"
    mascara.style.visibility = "hidden"


}