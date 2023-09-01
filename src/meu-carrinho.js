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

function atualizarInfoQuantidade(idProduto){
    document.getElementById(`quantidade-${idProduto}`).innerText = idsProdutoCarrinhoComQuantidade[idProduto];
}

function incrementarQtdProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto] ++;
    atualizarInfoQuantidade(idProduto);

}
function decrementarQtdProduto(idProduto){
    idsProdutoCarrinhoComQuantidade[idProduto] --;
    atualizarInfoQuantidade(idProduto);

}

export function adicionarAoCarrinho(idProduto){
    if (idProduto in idsProdutoCarrinhoComQuantidade){
        incrementarQtdProduto(idProduto);
        return;
    }
    idsProdutoCarrinhoComQuantidade[idProduto] = 1;
    console.log(idsProdutoCarrinhoComQuantidade);
    const produto = catalogo.find(p => p.id === idProduto);
    const containerProdtudosCarrinho = document.getElementById('produtos-carrinho');
    const elementoArticle = document.createElement('article');
    elementoArticle.classList.add('card-produto-carrinho') 
    const cardProdutoCarrinho = `
    <div class="card-produto-carrinho">

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
            <img src="assets/icons/circle-xmark-regular.svg" alt="" class="icon">   

            <div class="menos-mais-btns">
                <button id="decrementar-produto-${produto.id}">-</button>
                <p  id="quantidade-${produto.id}">${idsProdutoCarrinhoComQuantidade[produto.id]}</p>
                <button id="incrementar-produto-${produto.id}">+</button>
            </div>
        </div>
  </div>
    `;
    elementoArticle.innerHTML = cardProdutoCarrinho;    
    document.getElementById(`decrementar-produto-${produto.id}`).addEventListener('click', () => decrementarQtdProduto(produto.id));
    document.getElementById(`incrementar-produto-${produto.id}`).addEventListener('click', () => incrementarQtdProduto(produto.id));
}