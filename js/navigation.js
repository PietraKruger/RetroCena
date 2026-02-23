const body = document.querySelector('body')
const header = document.querySelector('header')
const footer = document.querySelector('footer')
const nav = document.querySelector('nav')
const main = document.querySelector("main");
const links = document.querySelectorAll('a');
const transitionDiv = document.querySelector('.transition-div');

// Intercepta cliques em links <a>
links.forEach((link) => {
    link.addEventListener("click", async e => {
        // Verifica se o link é interno (não começa com http ou é do mesmo domínio)
        const url = e.currentTarget.href;
        if (url.includes(window.location.origin)) {
            e.preventDefault();
            await startTransition(url);
            history.pushState(null, '', url);
        }
    });
});

// Suporte ao botão "Voltar" do navegador
window.addEventListener('popstate', () => {
    startTransition(window.location.pathname);
});

const startTransition = async (url) => {
    // 1. Inicia o Fade In (Tela fica preta)
    transitionDiv.classList.remove('animate__out');
    transitionDiv.classList.add('animate__in');

    // 2. Enquanto a tela escurece, buscamos os dados da nova página
    try {
        const response = await fetch(url);
        const htmlString = await response.text();
        const parser = new DOMParser();
        const newDoc = parser.parseFromString(htmlString, 'text/html');
        const newBodyContent = newDoc.querySelector('body').innerHTML
        // const newMainContent = newDoc.querySelector('main').innerHTML;
        // const newHeaderContent = newDoc.querySelector('header').innerHTML;
        // const newFooterContent = newDoc.querySelector('footer').innerHTML;
        // const newNavContent = newDoc.querySelector('nav').innerHTML
        const newTitle = newDoc.querySelector('title').innerText;

        // 3. Espera a animação de escurecimento terminar para trocar o conteúdo
        transitionDiv.addEventListener('transitionend', () => {
            // Troca o conteúdo do main e o título da página
            // main.innerHTML = newMainContent;
            // nav.innerHTML = newNavContent
            // header.innerHTML = newHeaderContent
            // footer.innerHTML = newFooterContent
            body.innerHTML = newBodyContent
            document.title = newTitle;

            // Rola para o topo automaticamente
            window.scrollTo(0, 0);

            // 4. Inicia o Fade Out (Tela volta a ser visível)
            transitionDiv.classList.remove('animate__in');
            transitionDiv.classList.add('animate__out');

            // Limpa a classe de saída após o término
            setTimeout(() => {
                transitionDiv.classList.remove('animate__out');
            }, 500);
        }, { once: true });

    } catch (error) {
        console.error("Erro ao carregar página:", error);
        transitionDiv.classList.remove('animate__in');
    }
};