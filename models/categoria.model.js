const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const categoria = sequelize.define(
  'categoria', 
  {
    nome: {
      type: DataTypes.STRING,
      allowNull: false
    },
    anoNascimento: {
      type: DataTypes.INTEGER,
    },
    nacionalidade: {
      type: DataTypes.STRING,
    } 
  },
  {
    tableName: 'categoria',
    timestamps: true
  }
);

module.exports = categoria;