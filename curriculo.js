function downloadCV() {
    const button = document.querySelector('.btn button');
    const loaderText = document.querySelector('.loader-text');
    
    button.classList.add('loading');
    
    setTimeout(() => {
        const cvUrl = 'assets/Curriculo Jonathan Orsano.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'Jonathan-Orsano-CV.pdf';
        
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        clearInterval(messageInterval);
        button.classList.remove('loading');
        loaderText.style.opacity = '0';
        button.innerHTML = '<span>Baixar CV <i class="fa-solid fa-download"></i></span>';
        
    }, 3000);
}