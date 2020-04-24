const form = document.querySelector('#formulario');  // Capturar evento de submit do formulário

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const inputPeso = e.target.querySelector('#peso');
    const inputAltura = e.target.querySelector('#altura');

    const peso = Number(inputPeso.value);
    const altura = Number(inputAltura.value);
    
    if (!peso ) {
        setResultado('Peso inválido', false);
        return;
    }

    if (!altura) {
        setResultado('Altura inválida', false);
        return;
    }

    const imc = getImc(peso, altura); // Calculando o IMC com a função que eu criei para fazer o cálculo (getImc)
    const nivelImc = getNivelImc(imc);

    const msg = `Seu IMC é ${imc} (${nivelImc}).`; // Criando a mensagem com os valores imc e nivel Imc

    setResultado(msg, true);
    
    
});

function getNivelImc (imc) { 
    const nivel = ['Abaixo do peso', 'Peso normal', 'Sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3'];

    if (imc >= 39.9) { // Eu fiz a validação de trás pra frente por conta do return.
        return nivel[5];
    }

    if (imc >= 34.9) {
        return nivel[4];
    }

    if (imc >= 29.9) {
        return nivel[3];
    } 
    
    if (imc >= 24.9) {
        return nivel[2];
    } 
    
    if (imc >= 18.5) {
        return nivel[1];
    } 
    
    if (imc < 18.5) {
        return nivel[0];
    }
}

function getImc (peso, altura) { // Função que faz apenas o cálculo do IMC.
    const imc = peso / altura ** 2;
    return imc.toFixed(2); // toFixed: informar o número de casas decimais.     
}

function criaP () { // Função que cria apenas um Parágrafo.
    const p = document.createElement('p');
    return p;
}

function setResultado (msg, isValid) { // Função que seta um resultado.
    const resultado = document.querySelector('#resultado');
    resultado.innerHTML = '';

    const p = criaP();

    if (isValid) { // Se for verdadeira, fundo verde
        p.classList.add('paragrafo-resultado');
    } else {    // Se for falso, fundo vermelho
        p.classList.add('bad');
    }
        

    p.innerHTML = msg;
    resultado.appendChild(p) // Estou adicionando o parágrafo na tela.
    
}