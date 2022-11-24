var formulario = document.forms[0]

formulario.addEventListener("submit", function () {

    let insert = `<p>${formulario.a.value}</p>`
    document.querySelector('#valor').innerHTML = insert

})

formulario.addEventListener("keyup", function () {
    formularioa.a.value = formularioa.a.value.toUpperCase()
})

let div = document.querySelector("#valor")

div.addEventListener("click", function () {
    div.innerHTML = div.getInnerHtml() + div.getInnerHtml()
})