import { clienteService } from "./service/service.js";

const criaProdutoProcurado = (nome, imagem, valor, id) => {

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
   
     return linhaNovoProduto
}

let valor ='';

const formulario =async ()=>{
    const formulario = document.querySelector ('[data-pesquisa]')
    
    formulario.addEventListener('submit', async (evento) => {
         evento.preventDefault()
        const inputPesquisa = document.querySelector('[data-tipo="pesquisa"]').value
        valor = inputPesquisa.toUpperCase()
        procuraProdutosSemelhantes(valor)
        return
    })
    
} 

 const procuraProdutosSemelhantes = async  (valorInput) => {  
    const main = document.querySelector('[data-main]')      

            // produto encontrado
    const divPaiProcurados = document.createElement('div')
    const adicionaClasse =divPaiProcurados.classList.add("produtos__divs-data")
    
    let teste = false
    
        let resultado =[]
        
        const procura = await clienteService.listaDeProdutos()  

             // pega os produtos no servidor e separa o nome do produtos em palavrar 
        procura.forEach(dados  => {
            let nomes = dados.nome
            let dadosProduto = dados

             //   pega palavra por palavra em cada item e compara
            nomes.split(' ').forEach( nomeProduto => {  
                if(nomeProduto.toUpperCase()  == valorInput.split(' ')){                    
                    resultado.push(dadosProduto)
                  return  teste = true 
                }  
            })   
        }) 
    if(teste){    
        const MainClass = main.classList.add('main-pesquisa') 
        main.innerHTML='';
        main.appendChild(divPaiProcurados)
        resultado.forEach(dados => {
            divPaiProcurados.appendChild(criaProdutoProcurado(dados.nome,dados.imagem,dados.valor,dados.id));
        })
    } else{
        window.location.href = '../principal/produtosNaoEncontrado.html'
    }     
       
}
formulario()

  