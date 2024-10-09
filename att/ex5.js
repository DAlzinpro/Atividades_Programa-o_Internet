
const frm = document.querySelector("form")
const resposta = document.querySelector("h2")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const peso = Number(frm.num1.value)
    const altura = Number(frm.num2.value)
    const IMC = peso/altura**2
    if (IMC < 18.5) {
        resposta.innerText = `Baixo peso`
    }else if(IMC >= 18,6 && IMC  <= 24.9){
        resposta.innerText = `Peso Normal`
    }else if(IMC >= 25 && IMC <= 29.9){
        resposta.innerText = `Sobrepeso`
    }else if(IMC >= 30 && IMC <=34.9){
        resposta.innerText = `Obesidade grau 1`
    }
    else if(IMC >= 35 && IMC <=39.9){
        resposta.innerText = `Obesidade grau 2`
    }else if(IMC >= 40){
        resposta.innerText = `Obesidade grau 3`
    }
    
    
})
