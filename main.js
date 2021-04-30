
var loja = {
    produtos: ["Skol", "Brahma", "Antarctica", "Heineken", "Becks"],
    inserirProduto(produto) {
        this.produtos.push(produto);
    },
    removerProduto(remover) {
        const indice = this.produtos.findIndex(produto => produto == remover);
        if (indice >=0) {
            this.produtos.splice(indice, 1);
        }
    },
    listarProdutos() {
        console.log(loja.produtos);
    }
}

loja.inserirProduto("Kaiser"); //Insere Kaiser
loja.listarProdutos(); //Lista produtos
loja.removerProduto("Kaiser"); //Remove Kaiser
loja.listarProdutos(); //Lista produtos
