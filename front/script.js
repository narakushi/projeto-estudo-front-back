const listaElement = document.getElementById("lista");

async function listarBolos() {
    const retorno = await fetch("http://localhost:3000/bolos");
    const bolos = await retorno.json();
    console.log(bolos);
    for(let i = 0; i < bolos.length; i++)
    {
        let bolo = bolos[i];
        listaElement.innerHTML += `<li>${bolo.titulo}<ul><li type="square">${bolo.descricao}</li></ul>`;

    }
}

listarBolos();