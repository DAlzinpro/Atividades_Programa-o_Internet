// criar referencias ais elementos do mundo HTML

const frm = document.querySelector("form")
const resposta = document.querySelector("h2")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const num1 = Number(frm.num1.value)
    if (num1 % 2 == 0) {
        resposta.innerText = `Par`
    }else{
        resposta.innerText = `Impar`
        resposta.style.color = `red`
    }
    
    
})
