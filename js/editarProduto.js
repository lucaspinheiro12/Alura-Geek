import { clienteService } from "./service/service.js";

(async () =>{
    const pegaUrl = new URL(window.location)
    const id = pegaUrl.searchParams.get('id')

    const inputNome = document.querySelector('[data-tipo="nomeProdutos"]')
    const inputImagem = document.querySelector('[data-tipo="imagem"]')
    const inputDescricao = document.querySelector('[data-tipo="descricao"]')
    const inputValor = document.querySelector('[data-tipo="preco"]')
    const formulario = document.querySelector('[data-form]')
try{
    const dados = await clienteService.detalheProduto(id)
    inputNome.value = dados.nome
    inputImagem.value = dados.imagem
    inputDescricao.value = dados.descricao
    inputValor.value  = dados.valor
}
 catch(erro){
     console.log(erro)
    alert("algo deu errado, tente novamente mais tarde")
}    
    formulario.addEventListener('submit', async (evento) => {
        evento.preventDefault()
        try{
            await clienteService.atualizaProduto(id, inputImagem.value, inputNome.value, inputValor.value, inputDescricao.value)  
            window.location.href = './todosProdutos-editar.html'
            alert("Cliente Editado com sucesso")        
        }
        catch(erro){
            alert("algo deu errado, tente novamente mais tarde")
        }
    }) 
})()