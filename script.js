function calcularArea() {
    const largura = parseFloat(document.getElementById('largura').value);
    const comprimento = parseFloat(document.getElementById('comprimento').value);
    const area = largura * comprimento;
    document.getElementById('resultadoArea').innerText = `Área do terreno: ${area.toFixed(2)} m²`;
}

function calcularFerraduras() {
    const cavalos = parseInt(document.getElementById('cavalos').value);
    const ferraduras = cavalos * 4;
    document.getElementById('resultadoFerraduras').innerText = `Ferraduras necessárias: ${ferraduras}`;
}

function calcularVendaPadaria() {
    const paes = parseInt(document.getElementById('pães').value);
    const broas = parseInt(document.getElementById('broas').value);
    const total = (paes * 0.12) + (broas * 1.50);
    const poupanca = total * 0.10;
    document.getElementById('resultadoPadaria').innerText = `Total arrecadado: R$ ${total.toFixed(2)}, Poupança: R$ ${poupanca.toFixed(2)}`;
}

function calcularDiasVida() {
    const nome = document.getElementById('nome').value;
    const idade = parseInt(document.getElementById('idade').value);
    const dias = idade * 365;
    document.getElementById('resultadoVida').innerText = `${nome}, VOCÊ JÁ VIVEU ${dias} DIAS`;
}

function calcularGasolina() {
    const preco = parseFloat(document.getElementById('precoGas').value);
    const valorPago = parseFloat(document.getElementById('valorPago').value);
    const litros = valorPago / preco;
    document.getElementById('resultadoGasolina').innerText = `Litros de gasolina: ${litros.toFixed(2)} L`;
}

function calcularValorPrato() {
    const peso = parseFloat(document.getElementById('pesoPrato').value);
    const valor = peso * 12;
    document.getElementById('resultadoPrato').innerText = `Valor a pagar: R$ ${valor.toFixed(2)}`;
}

function calcularDiasAno() {
    const dia = parseInt(document.getElementById('dia').value);
    const mes = parseInt(document.getElementById('mes').value);
    const diasPassados = (mes - 1) * 30 + dia;
    document.getElementById('resultadoDiasAno').innerText = `Dias desde o início do ano: ${diasPassados}`;
}

function calcularMedia() {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    const media = (nota1 * 1 + nota2 * 2 + nota3 * 3) / 6;
    document.getElementById('resultadoMedia').innerText = `Média ponderada: ${media.toFixed(2)}`;
}

function calcularCamisetas() {
    const pequena = parseInt(document.getElementById('pequena').value);
    const media = parseInt(document.getElementById('media').value);
    const grande = parseInt(document.getElementById('grande').value);
    const total = (pequena * 10) + (media * 12) + (grande * 15);
    document.getElementById('resultadoCamisetas').innerText = `Valor arrecadado: R$ ${total.toFixed(2)}`;
}

function calcularDistancia() {
    const x1 = parseFloat(document.getElementById('x1').value);
    const y1 = parseFloat(document.getElementById('y1').value);
    const x2 = parseFloat(document.getElementById('x2').value);
    const y2 = parseFloat(document.getElementById('y2').value);
    const distancia = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    document.getElementById('resultadoDistancia').innerText = `Distância: ${distancia.toFixed(2)} unidades`;
    }