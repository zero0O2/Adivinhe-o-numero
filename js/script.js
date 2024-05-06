let button = document.getElementById('button');
let resultado = document.getElementById('resultado');
let numeroAleatorio = Number.parseInt(Math.random() * 100)
let contagem = 0
resultado.innerHTML = ''

button.addEventListener('click',function(){
    let numeroJogador = Number(prompt('Digite seu palpite :'))
    contagem += 1
    if(Number.isNaN(numeroJogador) == true){
        alert('O jogo so aceita números')
        
    }else if (numeroJogador != numeroAleatorio){
        if(numeroJogador < numeroAleatorio){resultado.innerHTML += `<p>Meu número é <strong>maior</strong> que ${numeroJogador} <br></p>`}
        if(numeroJogador > numeroAleatorio){resultado.innerHTML += `<p>Meu número é <strong>menor</strong> que ${numeroJogador} <br></p>`}
    }else {resultado.innerHTML += `<p>PARABÉNS,meu numero era <strong>${numeroJogador}</strong> seu numero tentativas foram ${contagem}</p>`}
});
