import { catalogo } from "./utilidades";

const idsProdutoCarrinhoComQuantidade = {};

function abrirCarrinho(){
    document.getElementById('carrinho').style.right = '0';
}

function fecharCarrinho(){
    document.getElementById('carrinho').style.right = '-300px';
}

export function inicializarCarrinho(){
    document.getElementById('btnAbrirCarrinho').addEventListener('click', abrirCarrinho);
    document.getElementById('btnFecharCarrinho').addEventListener('click', fecharCarrinho);

} 

function removerDoCarrinho(idProduto){
    delete idsProdutoCarrinhoComQuantidade[idProduto];
    renderizarProdutosCarrinho();
}

function atualizarInfoQuantidade(idProduto){
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

function incrementarQtdProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto] ++;
    atualizarInfoQuantidade(idProduto);

}
function decrementarQtdProduto(idProduto){
    if (idsProdutoCarrinhoComQuantidade[idProduto] ==   1){
        removerDoCarrinho(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] --;
    atualizarInfoQuantidade(idProduto);
}

function desenharProdutoNoCarrinho(idProduto){
    const produto = catalogo.find(p => p.id == idProduto);

    if (produto){
        const containerProdtudosCarrinho = document.getElementById('produtos-carrinho');
        const elementoDiv = document.createElement('div');
        elementoDiv.classList.add('card-produto-carrinho');
        const cardProdutoCarrinho = `
            <div class="container-produto-carrinho">
                <div class="div-img-produto-carrinho">
                    <img src=${produto.srcImg} alt="processador athlon3000g" class="img-produto-carrinho">
                </div>
            
                <div class="info-produto-carrinho">
                    <span>${produto.nome}</span>
                    <span>R$ ${produto.valor}</span>
                </div>
            </div>  

            <div class="container-remove-add">
                <img src="assets/icons/circle-xmark-regular.svg" alt="" class="icon" id="remover-item-${produto.id}">   

                <div class="menos-mais-btns">
                    <button id="decrementar-produto-${produto.id}">-</button>
                    <p  id="quantidade-${produto.id}">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
                    <button id="incrementar-produto-${produto.id}">+</button>
                </div>
            </div>
        `;
        
        elementoDiv.innerHTML = cardProdutoCarrinho;    
        containerProdtudosCarrinho.appendChild(elementoDiv); 
        
        document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQtdProduto(produto.id));

        document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQtdProduto(produto.id));

        document.getElementById(`remover-item-${produto.id}`).addEventListener('click', () => removerDoCarrinho(produto.id));

    } else{
        // Se o produto não for encontrado no catálogo
        console.error(`Produto com ID ${idProduto} não encontrado no catálogo.`);
    }
}

function renderizarProdutosCarrinho(){
    const containerProdtudosCarrinho = document.getElementById('produtos-carrinho');
    containerProdtudosCarrinho.innerHTML = "";

    for (const idProduto in idsProdutoCarrinhoComQuantidade){
        desenharProdutoNoCarrinho(idProduto);
    }
}



export function adicionarAoCarrinho(idProduto){
    if (idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQtdProduto(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    desenharProdutoNoCarrinho(idProduto);
}