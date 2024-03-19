let catalogoProdutos = [];

function exibirFormulario() {
    document.getElementById('modal').style.display = 'block';
}

function fecharModal() {
    document.getElementById('modal').style.display = 'none';
}

function adicionarProduto(event) {
    event.preventDefault();
    
    let nome = document.getElementById('nome').value;
    let preco = parseFloat(document.getElementById('preco').value);
    let descricao = document.getElementById('descricao').value;

    let novoProduto = {
        nome: nome,
        preco: preco,
        descricao: descricao
    };

    catalogoProdutos.push(novoProduto);
    atualizarCatalogo();
    fecharModal();
}

function buscarProduto() {
    let nomeBusca = prompt("Insira o nome do produto que deseja buscar:");
    let produtosEncontrados = catalogoProdutos.filter(produto => produto.nome.toLowerCase().includes(nomeBusca.toLowerCase()));

    if (produtosEncontrados.length > 0) {
        let resultado = "Produtos encontrados:\n";
        for (let produto of produtosEncontrados) {
            resultado += `Nome: ${produto.nome} - Preço: ${produto.preco.toFixed(2)} - Descrição: ${produto.descricao}\n`;
        }
        alert(resultado);
    } else {
        alert("Nenhum produto encontrado com esse nome.");
    }
}

function atualizarProduto() {
    let nomeBusca = prompt("Insira o nome do produto que deseja atualizar:");
    let produtoEncontrado = catalogoProdutos.find(produto => produto.nome.toLowerCase() === nomeBusca.toLowerCase());

    if (produtoEncontrado) {
        let novoPreco = parseFloat(prompt("Insira o novo preço do produto:"));
        let novaDescricao = prompt("Insira a nova descrição do produto:");

        produtoEncontrado.preco = novoPreco;
        produtoEncontrado.descricao = novaDescricao;

        alert("Informações do produto atualizadas com sucesso!");
    } else {
        alert("Produto não encontrado.");
    }
    atualizarCatalogo();
}

function removerProduto() {
    let nomeBusca = prompt("Insira o nome do produto que deseja remover:");
    let indice = catalogoProdutos.findIndex(produto => produto.nome.toLowerCase() === nomeBusca.toLowerCase());

    if (indice !== -1) {
        catalogoProdutos.splice(indice, 1);
        alert("Produto removido com sucesso!");
    } else {
        alert("Produto não encontrado.");
    }
    atualizarCatalogo();
}

function atualizarCatalogo() {
    let output = document.getElementById('output');
    output.innerHTML = '';

    for (let produto of catalogoProdutos) {
        let produtoHTML = `
            <div class="produto">
                <h3>${produto.nome}</h3>
                <p>Preço: R$ ${produto.preco.toFixed(2)}</p>
                <p>${produto.descricao}</p>
            </div>
        `;
        output.innerHTML += produtoHTML;
    }
}

document.getElementById('formulario').addEventListener('submit', adicionarProduto);
