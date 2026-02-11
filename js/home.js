const teste = localStorage.getItem("usuario");
console.log("teste", teste);

//CARROSSEL//
//seleção dos elementos
const slides = document.querySelector('.slides');
const imagens = document.querySelectorAll('.slides img');
const btnEsq = document.querySelector('.esquerda');
const btnDir = document.querySelector('.direita');

let index = 0;
//mostra a imagem correta
function mostrarSlide() {
  slides.style.transform = `translateX(${-index* 100}%)`;
}
//botão de navegação
btnDir.addEventListener('click', () => {
  index= (index + 1) % imagens.length;
  mostrarSlide();
});

btnEsq.addEventListener('click', () => {
  index = (index - 1 + imagens.length) % imagens.length;
  mostrarSlide();
});
//carrossel automatico(opcional)
setInterval(() => {
  index = (index + 1) % imagens.length;
  mostrarSlide();
}, 3000);
//CARROSSEL//