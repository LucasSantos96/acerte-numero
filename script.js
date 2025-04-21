
let aleatorio = Math.floor(Math.random() * 51);
let tentativas = 6;

const numEscolhido = document.getElementById('numEscolhido');
const btn = document.getElementById('btnEscolha');
const resultado = document.getElementById('resultado');

btn.addEventListener('click', (e) => {
  e.preventDefault();

  const valor = Number(numEscolhido.value);

  if (valor === aleatorio) {
    resultado.innerText = 'Você acertou!😍';
    resultado.style.color = 'green';
    btn.disabled = true;
    reiniciarJogo(); // chama a função para reiniciar
  } else {
    tentativas--;
    if (tentativas > 0) {
      resultado.innerText = `Você errou.😰\n Ainda tem ${tentativas} tentativas.`;
      resultado.style.color = 'red';
    } else {
      resultado.innerText = `Você perdeu!😭 \n O número era ${aleatorio}`;
      resultado.style.color = 'gray';
      btn.disabled = true;
      reiniciarJogo();
    }
  }

  numEscolhido.value = '';
});

function reiniciarJogo() {
  setTimeout(() => {
    aleatorio = Math.floor(Math.random() * 51);
    tentativas = 6;
    resultado.innerText = 'Novo jogo iniciado! Tente novamente.';
    resultado.style.color = 'black';
    btn.disabled = false;
  }, 3000); // espera 3 segundos antes de reiniciar
}