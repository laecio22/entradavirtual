


//objeto que representa a pessoa que convidou
let dono = {
    nome: 'ricardo',
    convidados: ['ana','maria','paulo', 'roberto','jorge']
}

//função para verificar se a pessoa está na lista de convidados
function verificar(){
    const nomeConvidado = document.getElementById('nome').value
    const anfitriao = document.querySelector('#anfitriao').value
    let mensagem = document.getElementById('text')
    let estaLista = false

    //compara se o nome da pessoa que foi digitado no formulario é igual  ao do objeto dono
    if(anfitriao == dono.nome){

        for (const convid of dono.convidados) {//percorre cada elemento da lista de convidados do dono
            if(nomeConvidado == convid){
                estaLista = true /* indica  que o nome da pessoa a entrar na festa  digitado no formulario está na lista
                    do dono*/
            }
        }

        if(estaLista == true){
            mensagem.innerHTML = `Pode entrar e aproveite a festa ${nomeConvidado}` //mostra mensagem no html o nome da pessoa a entrar na festa
        }else{
            mensagem.innerHTML = "Você não pode entrar "  // mostra mensagem no html que a pessoa não está na lista
        }
    }else{
        alert('Não há ninguém com esse nome')//mostra um prompt informando que não há um anfitrião com esse nome
    }

    
}







