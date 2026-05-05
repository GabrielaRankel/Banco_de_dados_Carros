let resposta = document.getElementById('resposta')
let btn_cadastrar = document.getElementById('btn_cadastrar')

btn_cadastrar.addEventListener('click', (e) => {
    e.preventDefault()
    const nome = document.getElementById('nome').value
    const marca = document.getElementById('marca').value
    const ano = Number(document.getElementById('ano').value)
    const preco = Number(document.getElementById('preco').value)
    const categoria = document.getElementById("categoria").value

     const valores = {
        nome: nome,
        marca: marca,
        categoria: categoria,
        ano: ano,
        preco: preco,
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