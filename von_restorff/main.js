window.addEventListener('DOMContentLoaded', dom_content_loaded => {
    
    document.addEventListener('mouseup', () => {
        let text = ''; 
        for(let i = 0; i < document.querySelector('#domain').value; i++) {
            text += '0'; 
            if(Math.floor(Math.random() * document.querySelector('#range').value) === 0) {
                text += '1'; 
            }
        }
        document.querySelector('#container').innerText = text; 
    }); 

}); 