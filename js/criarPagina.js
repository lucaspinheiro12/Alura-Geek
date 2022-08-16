import { clienteService } from "./service/service.js" 

 const criarPagina = (nome, imagem,valor, descricao) =>{
     const linhaNovaPagina =  document.createElement('div')
     const adicionaClasse = linhaNovaPagina.classList.add("produto-descricao")

     const conteudo = `
    
         <div class="produto-descricao__imagem">
             <img src="../${imagem}" class="tamanho__imagem">
         </div>
         <div class="produto-descricao__descricao">
             <h1>${nome}</h1>
             <small>R$ ${valor}</small>
            <p>
                 ${descricao}
            </p>
        </div>

    `
    linhaNovaPagina.innerHTML = conteudo;
   
    return linhaNovaPagina
}


(async () => {
    const pegaUrl = new URL(window.location);
    const id = pegaUrl.searchParams.get("id");
    const sectionPai = document.querySelector('[data-section]')

    try {
        const dados = await clienteService.detalheProduto(id);
        const imagem = dados.imagem;
        const nome = dados.nome;
        const valor = dados.valor;
        const descricao = dados.descricao;

        sectionPai.appendChild(criarPagina(nome, imagem,valor, descricao));
    } catch (erro) {
        console.log(erro);
    }
})();