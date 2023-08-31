import { inicializarCarrinho } from "./src/meu-carrinho";
const catalogo =[
    {   
        id:1,
        nome: "Atlhon 3000G",
        marca: "AMD",
        valor: 500,
        srcImg: "assets/cpus/athlon3000g.png"
    },
    {
        id:2,
        nome: "I3 10100F",
        marca: "Intel",
        valor: 800,
        srcImg: "assets/cpus/i310100f.png"
    },
    {
        id:3,
        nome: "Ryzen 5 4600G",
        marca: "AMD",
        valor: 900,
        srcImg: "assets/cpus/ryzen5.jpg"
    },
    {
        id:4,
        nome: "Ryzen 5 5600G",
        marca: "AMD",
        valor: 1200,
        srcImg: "assets/cpus/ryzen5.jpg"
    },
    {
        id:5,
        nome: "GTX 1660 Super",
        marca: "MSI",
        valor: 1200,
        srcImg: "assets/gpus/1660s.jpg"
    },
    {
        id:6,
        nome: "RTX 2060",
        marca: "GIGABYTE",
        valor: 1500,
        srcImg: "assets/gpus/2060.jpg"
    },
    {
        id:7,
        nome: "RTX 4090",
        marca: "AORUS",
        valor: 5000,
        srcImg: "assets/gpus/4090.jpg"
    },
    {
        id:9,
        nome: "RX 580",
        marca: "GIGABYTE",
        valor: 600,
        srcImg: "assets/gpus/rx580.png"
    },
    
]
for (const produtoCatalogo of catalogo){
    const cartaoProduto = `
        <div class="card-produto">
            <div class="div-img-produto">
                <img src="${produtoCatalogo.srcImg}" alt="processador athlon3000g" class="img-produto">
            </div>
            <h4 class="nome-produto">${produtoCatalogo.nome}</h4>
            <span>${produtoCatalogo.marca}</span>
            <h4>R$ ${produtoCatalogo.valor}</h4>
            <button class="btn-carrinho">Carrinho</button>
        </div>`
    document.getElementById('container-produto').innerHTML += cartaoProduto;
}
inicializarCarrinho();