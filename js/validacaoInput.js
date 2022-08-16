const inputs = document.querySelectorAll("input")
const textArea = document.querySelectorAll("textarea")

const valitaTextArea = (textarea) =>{

    const tipoDetext = textarea.dataset.tipo
    // validação do input

	if (textarea.validity.valid) {
       textarea.parentElement.classList.remove("input-container--invalido")
       textarea.parentElement.querySelector(".input-mensagem-erro").innerHTML=""
	}else{
        textarea.parentElement.classList.add("input-container--invalido")
		textarea.parentElement.querySelector(".input-mensagem-erro").innerHTML=mostraMensagemDeErro(tipoDetext , textarea)
	} 
}

const validaInput = (input) =>{
    const tipoDeInput = input.dataset.tipo
    // validação do input
	if (input.validity.valid) {
		 input.parentElement.classList.remove("input-container--invalido")
		 input.parentElement.querySelector(".input-mensagem-erro").innerHTML=""
	}else{
		 input.parentElement.classList.add("input-container--invalido")
		 input.parentElement.querySelector(".input-mensagem-erro").innerHTML=mostraMensagemDeErro(tipoDeInput , input)
	}  
}

const tiposDeErro = [
    'valueMissing',
    'patternMismatch',
    "typeMismatch",
]

const mensagensDeErro = {
    nome:{
        valueMissing:"O campo nome não pode estar vazio.",
        patternMismatch:'O campo de nome deve conter letras e no maximo 40 caracteres.'
    },
    mensagem:{
        valueMissing:"O campo mensagem não pode estar vazio.",
        patternMismatch:'O campo de mensagem deve contar no maximo 120 caracteres'
    },
    email:{
		valueMissing:"O campo de email não pode estar vazio.",
		typeMismatch:"O email digitado não e valido."
    },
    senha:{
		valueMissing:"O campo de senha não pode estar vazio.",
	},
    imagem:{
        valueMissing:"O campo de imagem não pode estar vazio.",
    },    
    nomeProdutos:{
        valueMissing:"O campo nome não pode estar vazio.",
    },
    preco:{
        valueMissing:"O campo preço não pode estar vazio.",
    },
    descricao:{
        valueMissing:"O campo descrição não pode estar vazio.",
        patternMismatch:'O campo de descrição deve contar no minimo 150 caracteres'
    }
}  



function mostraMensagemDeErro(tipoDeInput, input){
	let mensagem = "";
	tiposDeErro.forEach(erro =>{
		if (input.validity[erro]) {
			mensagem = mensagensDeErro[tipoDeInput][erro]
		}
	})
	return mensagem	;
}
// validaçao FALE CONOSCO
inputs.forEach(input => {
    
    input.addEventListener('blur', (evento) => {
        validaInput(evento.target)
    })
})

textArea.forEach(textarea => {
    
    textarea.addEventListener('blur', (evento) => {
        valitaTextArea(evento.target)
    })
})


