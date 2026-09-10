const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const tamanho = sequelize.define(
  'tamanho', 
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anoNascimento: {
      type: DataTypes.INTEGER,
    },
    emAtividade: {
      type: DataTypes.BOOLEAN,
    },
    foto: {
      type: DataTypes.STRING,
    },
    nomeArtistico: {
      type: DataTypes.STRING,
    }
  },
  {
    tableName: 'tamanho',
    timestamps: true
  }
);

module.exports = tamanho;