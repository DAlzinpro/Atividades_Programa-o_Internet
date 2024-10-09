
const frm = document.querySelector("form")
const resposta = document.querySelector("h2")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const idade = Number(frm.num1.value)
   

    if (idade >= 18) {
        resposta.innerText = `Já pode ser preso`
    }else{
        resposta.innerText = `Ainda é trabalho infantil`
        resposta.style.color = `red`
    }
    
    
})
