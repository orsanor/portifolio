function downloadCV() {
    const button = document.querySelector('.btn button');
    const loaderText = document.querySelector('.loader-text');
    
    // Inicia animação de carregamento
    button.classList.add('loading');
    
    // Simula processo de download
    setTimeout(() => {
        const cvUrl = 'assets/Curriculo Jonathan Orsano.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Jonathan-Orsano-CV.pdf';
        
        // Inicia o download
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Volta ao estado normal
        clearInterval(messageInterval);
        button.classList.remove('loading');
        loaderText.style.opacity = '0';
        button.innerHTML = '<span>Baixar CV <i class="fa-solid fa-download"></i></span>';
        
    }, 3000);
}