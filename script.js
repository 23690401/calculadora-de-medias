function calcularMedia() {
    // Pegar os valores do usuário
    let n1 = Number(document.getElementById('nota1').value);
    let n2 = Number(document.getElementById('nota2').value);
    let n3 = Number(document.getElementById('nota3').value);
    let n4 = Number(document.getElementById('nota4').value);

    // Calcular a média
    let media = (n1 + n2 + n3 + n4) / 4;

    // Variáveis para resultado
    let mensagem = "";
    let classe = "";

    // Verificar situação
    if (media >= 7) {
        mensagem = `Média: ${media.toFixed(1)} → APROVADO 🎉`;
        classe = "aprovado";
    } else if (media >= 5) {
        mensagem = `Média: ${media.toFixed(1)} → RECUPERAÇÃO ⚠️`;
        classe = "recuperacao";
    } else {
        mensagem = `Média: ${media.toFixed(1)} → REPROVADO ❌`;
        classe = "reprovado";
    }

    // Mostrar na tela
    let elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = mensagem;
    elementoResultado.className = classe;
}