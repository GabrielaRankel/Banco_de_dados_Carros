let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const marca = document.getElementById('marca').value
    const ano = Number(document.getElementById('ano').value)
    const preco = Number(document.getElementById('preco').value)
    const categoria = document.getElementById("categoria").value;
    let preco_venda = 0;

    if (!nome || !marca || !ano || !preco) {
        resposta.innerHTML = 'Preencha todos os campos';
        return;
    }

    if (categoria === "popular") {
        preco_venda = preco * 1.15;
    } else if (categoria === "sedan") {
        preco_venda = preco * 1.20;
    } else if (categoria === "luxo") {
        preco_venda = preco * 1.25;
    }

    const valores = {
        nome: nome,
        marca: marca,
        categoria: categoria,
        ano: ano,
        preco: preco,
        preco_venda: preco_venda,
    }
    console.log(valores)

    fetch('http://localhost:3000/carro', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(valores)
    })
        .then(res => res.json())
        .then(dados => {
            resposta.innerHTML = ''
            resposta.innerHTML += `<p>${dados.message}</p>`
            document.querySelector('form').reset()
        })
        .catch((err) => {
            console.error('Erro ao cadastrar o carro', err)
        })
})