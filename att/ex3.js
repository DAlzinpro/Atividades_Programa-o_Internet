
const frm = document.querySelector("form")
const resposta = document.querySelector("h2")
frm.addEventListener("submit", (e) =>{
    e.preventDefault()
    const num1 = Number(frm.num1.value)
    const num2 = Number(frm.num2.value)
    const num3 = Number(frm.num3.value)

    if ((num1 + num2) > num3) {
        if (num1 == num2 && num1 == num3){
            resposta.innerText = `é equilatero`
        }else if (num1 == num2 && num3 !=num1 || num2 == num3 && num1 != num2 || num3 == num1 && num2 != num1 ){
            resposta.innerText = `é isoceles`
        }else if (num1 != num2 && num2 != num3 && num1 != num3){
            resposta.innerText = `é escaleno`
        }
    }else{
        resposta.innerText = `inválido`
        resposta.style.color = `red`
    }
    
    
})
