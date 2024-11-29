irPara('inicio.html');

function irPara (pagina) {
    if (pagina === '#') {
        return;
    }
    fetch(pagina)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao carregar a página');   
            }
            return response.text();
        })
        .then(data => {
            document.querySelector('.conteudo').innerHTML = data;
        });
}