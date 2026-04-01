async function buscarFilme() {
    console.log("cliquei");
    document.getElementById("resultado").innerHTML = "Carregando...";
    document.getElementById("resultado")
    const nome = document.getElementById("Buscar").value;

    const url = `https://www.omdbapi.com/?t=${nome}&apikey=9427b4b5`;

    const resposta = await fetch(url);
    const dados = await resposta.json();

    console.log(dados);

if(dados.Response === "False"){
    document.getElementById("resultado").innerHTML = "Filme não encontrado";
    return;
}

document.getElementById("resultado").innerHTML = `
    <h2>${dados.Title}</h2>
    <img src="${dados.Poster}">
    <p>${dados.Plot}</p>
    `;
}