import {clienteService} from './service/service.js'

const formulario = document.querySelector('[data-form]')

formulario.addEventListener('submit',async (evento) => {
    evento.preventDefault()
    const imagem = evento.target.querySelector('[data-tipo="imagem"]').value
    const nome = evento.target.querySelector('[data-tipo="nomeProdutos"]').value
    const valor = evento.target.querySelector('[data-tipo="preco"]').value
    const descricao = evento.target.querySelector('[data-tipo="descricao"]').value

    try{
        await clienteService.criaProdutos(imagem, nome, valor, descricao) 
        window.location.href = './todosProdutos-editar.html'
    }  
    catch(erro){
        console.log('nao deu')
        // window.location.href = '../telas/erro.html'
    }    
} )
