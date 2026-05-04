const Carro = require('../models/Carro')

const cadastrar = async (req,res) => {
    const valores = req.body
    
    try{
        await Carro.create(valores)
        res.status(201).json({message: "Dados do carro cadastrados com sucesso!"})
    }catch(err){
        console.error(err) // COLOCA AQUI para ver o erro
        res.status(500).json({message: 'Não foi possível cadastrar os dados do carro!'})
    }
}

const listar = async (req,res) => {
    try{
        const carros = await Carro.findAll()
        res.status(200).json(carros)
    }catch(err){
        res.status(500).json({message: 'Não foi possível listar os dados dos carro!'})
    }
}


const consultar = async (req,res) => {
    const id = req.params.id
    console.log(id)
    try{
        const dado = await Carro.findOne({ where: {codCarro: id}})
        if(!dado){
            res.status(404).json({message: 'Carro não encontrado!'})
        }else{
            res.status(200).json(dado)
        }
    }catch(err){
        res.status(500).json({message: 'Erro ao consultar o carro!'})
        console.error('Erro ao consultar o carro!',err)
    }
}

const apagar = async (req,res) =>{
    const id = req.params.id
    console.log(id)
    try{
        const dado = await Carro.findOne({ where: {codCarro: id}})
        if(!dado){
            res.status(404).json({message: 'Carro não encontrado!'})
        }else{
            await Carro.destroy({ where: {codCarro: id}})
            res.status(200).json({message: 'Carro excluído com sucesso!'})
        }
    }catch(err){
        res.status(500).json({message: 'Erro ao excluir o carro!'})
        console.error('Erro ao excluir o carro!',err)
    }
}

module.exports = { cadastrar, listar, consultar, apagar }