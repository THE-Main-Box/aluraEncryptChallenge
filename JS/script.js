let bool = false
let textarea = document.querySelector('#ta')

const change = () =>{ // criptografar
    let toEncrypt = document.querySelector('input[name="decText"]').value;
    bool = toEncrypt.trim() !== '';
    attClasse()

    document.querySelector('input[name="decText"]').focus()
    if(bool){
        textarea.value = Encrypt(toEncrypt)
    }else{
        return
    }

}

const substitutionMap = {
    'a': 'ai',
    'e': 'enter',
    'i': 'imes',
    'o': 'ober',
    'u': 'ufat'
};

const Encrypt = (texto) => {
    // Substituição usando o mapeamento
    texto = texto.replace(/[aeiou]/g, match => substitutionMap[match]);
    return texto;
}

const Desencrypt = (texto) => {
    // Inversão da substituição usando o mapeamento
    texto = texto.replace(/(ai|enter|imes|ober|ufat)/g, match => {
        for (const key in substitutionMap) {
            if (substitutionMap[key] === match) {
                return key;
            }
        }
        return match;
    });
    return texto;
}



const attClasse = () =>{
    let message= document.querySelectorAll('.message');
    message.forEach((messages)=>{
        messages.classList.toggle(`true`, bool)
    })
}


const traduzir = () => { // descriptografar
    let toDesEncrypt = document.querySelector('input[name="decText"]').value;
    bool = toDesEncrypt.trim() !== '';
    attClasse()

    document.querySelector('input[name="decText"]').focus()
    
    if(bool){
        textarea.value = Desencrypt(toDesEncrypt)
    }else{
        return
    }
}