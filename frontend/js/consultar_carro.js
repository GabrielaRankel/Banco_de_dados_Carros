let resposta = document.getElementById('resposta')
let btn_consultar = document.getElementById('btn_consultar')

btn_consultar.addEventListener('click', (e) => {
    e.preventDefault()
    const id = document.getElementById('id').value

    fetch(`http://localhost:3000/carro/${id}`)
        .then(res => res.json())
        .then(dados => {
            resposta.innerHTML = ''


            if (dados.message) {
                resposta.innerHTML = `<p>${dados.message}</p>`
                return
            }

            resposta.innerHTML += `<p>Nome: ${dados.nome}</p>`
            resposta.innerHTML += `<p>Marca: ${dados.marca}</p>`
            resposta.innerHTML += `<p>Categoria: ${dados.categoria}</p>`
            resposta.innerHTML += `<p>Ano: ${dados.ano}</p>`
            resposta.innerHTML += `<p>Preço: ${dados.preco}</p>`
            resposta.innerHTML += `<p>Preço da Venda: ${dados.preco_venda}</p>`
            document.querySelector('form').reset()
        })
        .catch((err) => {
            console.error('Erro ao consultar o carro', err)
        })
})