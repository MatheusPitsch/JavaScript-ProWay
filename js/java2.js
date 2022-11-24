let v1 = 10
let v2 = 10

if (v1 == v2) {
    console.log("ok")
} else if (v1 > v2) {
    console.log(`${v1} maior que ${v2}`)
} else {
    console.log(`${v1} menor que ${v2}`)
}


let data = new Date()
let dia = 8

switch (dia) {
    case 0:
        console.log("Domingo")
        break;
    case 1:
        console.log("Segunda")
        break;
    case 2:
        console.log("Terça")
        break;
    case 3:
        console.log("Quarta")
        break;
    case 4:
        console.log("Quinta")
        break;
    case 5:
        console.log("Sexta")
        break;
    case 6:
        console.log("Sabado")
        break;
    default:
        break;
}

if (dia == 0) {
    console.log("Domingo")
} else if (dia == 1) {
    console.log("Segunda")
}
else if (dia == 2) {
    console.log("Terça")
}
else if (dia == 3) {
    console.log("Quarta")
}
else if (dia == 4) {
    console.log("Quinta")
}
else if (dia == 5) {
    console.log("Sexta")
}
else if (dia == 6) {
    console.log("Sabado")
}


// let nome = prompt(`Nome do aluno`)
// let nota1 = parseFloat(prompt(`Nota 1 do ${nome}`))
// let nota2 = parseFloat(prompt(`Nota 2 do ${nome}`))
// let nota3 = parseFloat(prompt(`Nota 3 do ${nome}`))


// let media = (nota1 + nota2 + nota3) / 3

// if (media >= 7) {
//     console.log(`Passou nota ${media}`)
// } else if (media) {
//     console.log(`Reprovou nota ${media}`)
// }
// else {
//     console.log(`Reprovou nota ${media}`)
// }


console.log(`
1- Cadastrar Aluno
2- Cadastrar Media
3- Sair
`)

let menu = parseInt(console.log())

switch (menu) {
    case 1:
        console.log("Cadastro do aluno")
        break;
    case 2:
        console.log("Opção invalida")
        break;
    case 3:
        console.log("Opção invalida")
        break;
    default:
        console.log("Opção invalida")
        break;
}