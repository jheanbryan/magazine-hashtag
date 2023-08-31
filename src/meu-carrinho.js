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