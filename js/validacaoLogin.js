( () =>{
    const botaoLogin = document.querySelector('[data-tipo="botao"]')
    const inputLoginE = document.querySelector('[data-tipo="email"]')
    const inputLoginS = document.querySelector('[data-tipo="senha"]')
    const email = 'lulu@email.com'.replace()
    const senha = 'lucas123'.replace()

    botaoLogin.addEventListener('click', (evento)=>{
        if(inputLoginE.value !== email ){
            botaoLogin.parentElement.classList.add("input-container--invalido")
            botaoLogin.parentElement.querySelector(".input-mensagem-erro").innerHTML='Email não cadastrado'
            evento.preventDefault()
        }if(inputLoginS.value !== senha){
            botaoLogin.parentElement.classList.add("input-container--invalido")
            botaoLogin.parentElement.querySelector(".input-mensagem-erro").innerHTML='Senha invalida'
            evento.preventDefault()
        }
        if(inputLoginE.value == email && inputLoginS.value == senha){
            console.log("deu")
        } 
})
})()
