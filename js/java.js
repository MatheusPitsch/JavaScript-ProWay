// var text = "Sejam Bem-Vindos"
// var name = "Matheus"
// v1 = 10
// v2 = 20
// console.log(`${v1}+v2`)

let post = {
    title: "Titulo da minha pag",
    excerpt: "Introdução para o texto",
    body: "Conteudo do meu texto",
    tags: [
        "Tag1",
        "tag2",
        "tag3"
    ]
}

let = title,
    excerpt,
    body,
    tags,
    post

postHtml = `
<article>
<header>
    <h1>
        textin
    </h1>
</header>
<section>
    <div>texto</div>
    <div>texto</div>
</section>
<footer>
    <ul>
        <li>texto</li>
    </ul>
</footer>
</article>`

document.querySelector("body").innerHTML = postHtml;