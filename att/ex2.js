
const frm = document.querySelector("form")
const resposta = document.querySelector("h2")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const num1 = Number(frm.num1.value)
    const num2 = Number(frm.num2.value)
    const num3 = Number(frm.num3.value)
    const media = (num1+num2+num3)/3
    if (media >= 7) {
        resposta.innerText = `Aprovado`
        resposta.style.color = `blue`
    }else if(media <= 4 && media >=3.9){
        resposta.innerText = `Recuperacao`
        resposta.style.color = `yellow`
    }else{
        resposta.innerText = `Reprovado`
        resposta.style.color = `red`
    }
    
    
})
