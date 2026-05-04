const { DataTypes } = require('sequelize')

const db = require('../db/conn')

const Carro = db.define('carro', {
    codCarro: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    marca: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    categoria: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    ano: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    preco: {
        type: DataTypes.FLOAT,
        allowNull: false
    },
    preco_venda: {
        type: DataTypes.FLOAT,
        allowNull: false
    }
}, {
    timestamps: false
})

module.exports = Carro