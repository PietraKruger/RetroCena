document.addEventListener("DOMContentLoaded", () => {
  const containers = document.querySelectorAll('.lista-container');

  containers.forEach(container => {
    const track = container.querySelector('.carrossel-track');
    const btnEsq = container.querySelector('.esquerdo');
    const btnDir = container.querySelector('.direito');

    // Função para mover para a DIREITA (infinito)
    const proximo = () => {
      track.style.transition = "transform 0.5s ease-in-out";
      const larguraItem = track.firstElementChild.offsetWidth + 24; // largura + gap (1.5rem = 24px aprox)

      track.style.transform = `translateX(-${larguraItem}px)`;

      track.addEventListener('transitionend', () => {
        track.style.transition = "none";
        track.appendChild(track.firstElementChild); // Move o primeiro pro final
        track.style.transform = `translateX(0)`;
      }, { once: true });
    };

    // Função para mover para a ESQUERDA (infinito)
    const anterior = () => {
      const larguraItem = track.firstElementChild.offsetWidth + 24;

      track.style.transition = "none";
      track.prepend(track.lastElementChild); // Move o último para o início antes de mostrar
      track.style.transform = `translateX(-${larguraItem}px)`;

      // Força um reflow para o navegador entender a posição inicial antes de animar
      setTimeout(() => {
        track.style.transition = "transform 0.5s ease-in-out";
        track.style.transform = `translateX(0)`;
      }, 1);
    };

    btnDir.addEventListener('click', proximo);
    btnEsq.addEventListener('click', anterior);

    // Auto-play (opcional) - pausado ao passar o mouse
    let intervalo = setInterval(proximo, 5000);
    container.addEventListener('mouseenter', () => clearInterval(intervalo));
    container.addEventListener('mouseleave', () => intervalo = setInterval(proximo, 5000));
  });
});