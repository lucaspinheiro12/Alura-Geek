const listaDeProdutos = () => {
    return fetch(`http://localhost:3000/profile`)
    .then( resposta => {
        if(resposta.ok){
        return resposta.json()
        }
        // como colocar um erro no console
        throw new Error('Não foi possivel listar os produtos')
    })
} 

const criaProdutos = (imagem, nome,valor, descricao ) =>  {
    return fetch(`http://localhost:3000/profile`, {
        method: 'POST',
        headers: {
            'content-type' : 'application/json'
        },
        body: JSON.stringify({
            imagem: imagem,
            nome: nome,
            valor: valor,
            descricao: descricao
        })
    })
    .then( resposta => {
        if(resposta.ok){
            return resposta.body
            }
            // como colocar um erro no console
            throw new Error('Não foi possivel criar um cliente')
    })
}

const detalheProduto = (id) => {
    return fetch(`http://localhost:3000/profile/${id}`)
    .then( resposta => {
        if(resposta.ok){
        return resposta.json()
    }
    throw new Error('Não foi possivel detalhar o produto')     
    })
} 

const atualizaProduto = (id ,imagem, nome, valor, descricao) =>{
    return fetch(`http://localhost:3000/profile/${id}`, {
        method: 'PUT',
        headers:{
            'content-type' : 'application/json'
        },
        body:JSON.stringify({
            imagem: imagem,
            nome: nome,
            valor: valor,
            descricao: descricao
        })
    })
    .then(resposta => {
        if(resposta.ok){
            return resposta.body
        }
            // como colocar um erro no console
        throw new Error('Não foi possivel atualizar o cliente')
    })
}

const removeProduto = (id) => {
    return fetch(`http://localhost:3000/profile/${id}` , {
        method:'DELETE'
    }).then(resposta =>{
        if(!resposta.ok){
            throw new Error('Não foi possivel remover o Produto')    
        }
    })
}

const procuraProduto = () => {

        return fetch(`http://localhost:3000/profile/`)
        .then( resposta => {
            if(resposta.ok){
            return resposta.json()
        }
        throw new Error('Não foi possivel detalhar o produto')     
        })
    } 


export const clienteService = {
    listaDeProdutos,
    criaProdutos,
    detalheProduto,
    atualizaProduto,
    removeProduto,
    procuraProduto
}