import { rendenizarCatalogo } from "./src/card-produto"
import { atualizarPrecoCarrinho, inicializarCarrinho, renderizarProdutosCarrinho } from "./src/meu-carrinho";
import { inicializarFiltros } from "./src/filtros-catalogo";

rendenizarCatalogo();
inicializarCarrinho();
renderizarProdutosCarrinho();
atualizarPrecoCarrinho();
inicializarFiltros();