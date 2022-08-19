import { clienteService } from "./service/service.js"




const criaSecao = (categoria)=> {
    const conteudo =`
        <div class="produtos__categoria">
            <div class="produtos__categoria__texto">
                <h2>${categoria}</h2>
            </div>
            <div class="produtos__categoria__botao">
                <a href="produtos.html">
                <button class="produtos__categoria__botao-b"> Ver tudo  <img src="../imagens/Vector1.png" alt=""></button>
                </a>
            </div>
        </div>
            <div class="produtos__divs"></div>
    `
    return conteudo        
}

const criaCardProduto = (nome, imagem,valor, id) =>{
    const linhaNovoProduto =  document.createElement('div')
    const adicionaClasse = linhaNovoProduto.classList.add("produtos__divs__div")
    
    const conteudo = `
        <img src="../${imagem}"
        class="produtos__divs__div__img">
        <div class="produtos__divs__div__descricao">
            <small>${nome}</small>
            <p>${valor}</p>
            <a href="./produto.html?id=${id}"><button class="produtos__divs__div__botao">Ver produto</button></a>
        </div>`

    linhaNovoProduto.innerHTML = conteudo;

    // cria um data atributos com o numero do id
    linhaNovoProduto.dataset.id = id

    return linhaNovoProduto
}
const adicionaProdutosSesao = async() => {

    const section1 = document.querySelector('[data-produtos1]')
    const section2 = document.querySelector('[data-produtos2]')
    const section3 = document.querySelector('[data-produtos3]')

    section1.innerHTML = criaSecao('Star Wars')
    section2.innerHTML = criaSecao('consoles')
    section3.innerHTML = criaSecao('diversos')

    const listaDeProdutos1 = section1.querySelector('.produtos__divs')
    const listaDeProdutos2 = section2.querySelector('.produtos__divs')
    const listaDeProdutos3 = section3.querySelector('.produtos__divs')

    const ids1 = [4 , 5 , 6 , 7 , 8 , 10]
    const ids2 = [12, 13 , 14 , 15 , 16 , 17] 
    const ids3 = [3, 9 , 11 , 18 , 19 , 20 ]

    ids1.forEach(id=> {
        clienteService.detalheProduto(id).then(valor =>{
            listaDeProdutos1.appendChild(criaCardProduto(valor.nome, valor.imagem, valor.valor, valor.id)) 
        })    
    })

    ids2.forEach(id=> {
        clienteService.detalheProduto(id).then(valor =>{
            listaDeProdutos2.appendChild(criaCardProduto(valor.nome, valor.imagem, valor.valor, valor.id)) 
        })    
    })

    ids3.forEach(id=> {
        clienteService.detalheProduto(id).then(valor =>{
            listaDeProdutos3.appendChild(criaCardProduto(valor.nome, valor.imagem, valor.valor, valor.id)) 
        })    
    })

}
adicionaProdutosSesao()

