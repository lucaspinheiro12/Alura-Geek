import { clienteService } from "./service/service.js";

const criaNovoProduto = (nome, imagem,valor, id) =>{
    const linhaNovoProduto =  document.createElement('div')
    const adicionaClasse = linhaNovoProduto.classList.add("produtos__divs__div")
    
    const conteudo = `
        <img src="../${imagem}" class="produtos__divs__div__img">
        <div class="produtos__divs__div__descricao">
            <small>${nome}</small>
            <p>R$${valor}</p>
            <a href="./produto.html?id=${id}"><button class="produtos__divs__div__botao">Ver produto</button></a>
        </div>`

    linhaNovoProduto.innerHTML = conteudo;

    // cria um data atributos com o numero do id
    linhaNovoProduto.dataset.id = id

    return linhaNovoProduto
}


const produtosSimilares =async () => {

    const divPai = document.querySelector('.produtos__divs')
    
    let teste = 0
    let itens = 6


    let ids = [] 
    let idsServer = await clienteService.procuraProduto()
    let idsTotal = idsServer.length
   
    // sorteia os numeros dos produtos
    while(teste < itens){
        let idEscolhido = Math.floor(Math.random() * idsTotal);
            if( idEscolhido != 0 && idEscolhido != 1 && idEscolhido != 2 ){
                ids.forEach(procura => {
                    if( procura == idEscolhido ){
                       idEscolhido++ 
                    }
                })
            ids.push(idEscolhido)
                teste++
            }    
    } 

        // procura item do servidor e compara com o numero sortiado
        // cria elemento HTML

    idsServer.forEach(dado =>{
       let idProduto = dado.id
       let dadosProduto = dado
        console.log(dadosProduto)
        
        ids.forEach(numeroSortiado => {
            if(idProduto == numeroSortiado){

                divPai.appendChild(criaNovoProduto(dado.nome, dado.imagem,dado.valor, dado.id))
            }
        })
        
        


        
    })

}
produtosSimilares()
  