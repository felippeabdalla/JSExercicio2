const loja = {
    produto: ['Livro', 'Caneta', 'Lapis'],

    inserirProduto: function() {
        this.produto.push('Papel', 'Folha');

    },

    removerProduto: function() {
        this.produto.pop();
    },

    listarProdutos: function(){
        return this.produto;
    },

}

loja.inserirProduto();
loja.removerProduto();
console.log(loja.listarProdutos());
