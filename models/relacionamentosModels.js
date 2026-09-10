const Produto = require('./produto.model');
const Categoria = require('./categoria.model');
const Tamanho = require('./tamanho.model');

Categoria.hasMany(Produto, {
  foreignKey: 'categoriaId',
  as: 'produtos'
});

Produto.belongsTo(Categoria, {
  foreignKey: 'categoriaId',
  as: 'categoria'
});

Produto.belongsToMany(Tamanho, {
  through: 'ProdutoTamanho',
  foreignKey: 'produtoId',
  as: 'tamanhos'
});

Tamanho.belongsToMany(Produto, {
  through: 'ProdutoTamanho',
  foreignKey: 'tamanhoId',
  as: 'produtos'
});
