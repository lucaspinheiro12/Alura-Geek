import { clienteService } from "./service/service.js";

            // PAGINA CLIENTE
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

const divPai = document.querySelector('[data-divP]')

const renderisaProduto = async () => {
    try{
        const produto = await clienteService.listaDeProdutos()  

        produto.forEach(dado => {
            divPai.appendChild(criaNovoProduto(dado.nome , dado.imagem, dado.valor, dado.id))
        })
    }
    catch(erro){
        console.log(erro)
    }
}
renderisaProduto()


            // PAGINA ADMINISTRADOR
const criaNovoProdutoA = (nome, imagem,valor, id) =>{
    const linhaNovoProduto =  document.createElement('div')
    const adicionaClasse = linhaNovoProduto.classList.add("produtos__divs__div")
    
    const conteudo = `
        <a href="./produto.html?id=${id}"">
        <img src="../${imagem}" class="produtos__divs__div__img">
        </a>
        <div class="produtos__divs__div__descricao">
            <small>${nome}</small>
            <p>R$${valor}</p>
            <div class="botoes">
            <a href="./editar-Produto.html?id=${id}"><button class="produtos__divs__div__botao">Editar produto</button></a>
            <button class="excluir-produtos"></button>
            </div>
        </div>`

    linhaNovoProduto.innerHTML = conteudo;

    // cria um data atributos
    linhaNovoProduto.dataset.id = id

    return linhaNovoProduto
}

const divPaiA = document.querySelector('[data-divP-A]')

const renderisaProdutoA = async () => {
    try{
        const produto = await clienteService.listaDeProdutos()  

        produto.forEach(dado => {
            divPaiA.appendChild(criaNovoProdutoA(dado.nome , dado.imagem, dado.valor, dado.id))
        })
    }
    catch(erro){
       console.log(erro)
    }
}
renderisaProdutoA()

        // EXCLUIR CLIENTE
divPaiA.addEventListener('click', async (evento) =>{
    let botaoExcuir = evento.target.className == 'excluir-produtos'
    if(botaoExcuir){
        try{
            const linhaPai = evento.target.closest('[data-id]')
            let id = linhaPai.dataset.id
            await   clienteService.removeProduto(id).then( () =>{linha.remove()})
        }
        catch(erro){
            console.log(erro)
        }
    }
})





