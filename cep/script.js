function meu_callback(conteudo) {
    if (!("erro" in conteudo)) {
        // Atualiza os campos com os valores recebidos
        document.getElementById('rua').innerText = conteudo.logradouro;
        document.getElementById('bairro').innerText = conteudo.bairro;
        document.getElementById('cidade').innerText = conteudo.localidade;
        document.getElementById('uf').innerText = conteudo.uf;
        document.getElementById('ibge').innerText = conteudo.ibge;
    } else {
        // Caso o CEP não seja encontrado
        limpa_formulário_cep();
        alert("CEP não encontrado.");
    }
}

function vaipesquisacep(event) {
    event.preventDefault();

    const cep = document.getElementById("textinput").value;
    alert("CEP inserido: " + cep);
    pesquisacep(cep);
}

function pesquisacep(valor) {
    // Remove qualquer caractere não numérico
    const cep = valor.replace(/\D/g, '');

    if (cep !== "") {
        // Expressão regular para validar o CEP
        const validacep = /^[0-9]{8}$/;

        if (validacep.test(cep)) {
            // Preenche os campos com "..." enquanto consulta a API
            document.getElementById('rua').value = "...";
            document.getElementById('bairro').value = "...";
            document.getElementById('cidade').value = "...";
            document.getElementById('uf').value = "...";
            document.getElementById('ibge').value = "...";

            // Cria um elemento de script para fazer a consulta via API
            const script = document.createElement('script');
            script.src = `https://viacep.com.br/ws/${cep}/json/?callback=meu_callback`;
            document.body.appendChild(script);
        } else {
            // Caso o CEP seja inválido
            limpa_formulário_cep();
            alert("Formato de CEP inválido.");
        }
    } else {
        limpa_formulário_cep();
    }
}

function limpa_formulário_cep() {
    document.getElementById('rua').value = "";
    document.getElementById('bairro').value = "";
    document.getElementById('cidade').value = "";
    document.getElementById('uf').value = "";
    document.getElementById('ibge').value = "";
}


document.getElementById("botao").addEventListener("click", vaipesquisacep);
