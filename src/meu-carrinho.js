import { catalogo } from "./utilidades";

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

export function adicionarAoCarrinho(idProduto){
    const produto = catalogo.find(p => p.id === idProduto);
    const containerProdtudosCarrinho = document.getElementById('produtos-carrinho');
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
                <button>-</button>
                <p>3 </p>
                <button>+</button>
            </div>
        </div>
  </div>
    `;
    containerProdtudosCarrinho.innerHTML += cardProdutoCarrinho
}