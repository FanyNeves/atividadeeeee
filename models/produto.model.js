const { DataTypes } = require('sequelize');
const sequelize = require('../config/bd');

const produtos= sequelize.define(
  'produtos', 
  {
    nome: {
      type: DataTypes.STRING,
    },
    ano: {
      type: DataTypes.INTEGER,
    }
  },
  {
    tableName: 'produtos',
    timestamps: true
  }
);

module.exports = produtos;