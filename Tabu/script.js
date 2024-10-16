function tab() {
    let numero = Number(document.getElementById("Entrada").value)
    let saida = document.getElementById("saida")
    let res = 0
    for (let i = 0; i <=10; i++) {
        res = numero*i
        saida.innerText += "\n" + res
        
    }
}