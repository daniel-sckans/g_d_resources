window.addEventListener('DOMContentLoaded', DOMContentLoaded => {
    for(let i = 0; i < 26; i++) {
        const letter = document.createElement('span'); 
        letter.innerText = String.fromCharCode(65 + i); 
        document.querySelector('.font-one').appendChild(letter); 
        if(i === 90) {
            i = 96; 
        }
    }
    const font_two = document.querySelector('.font-one').cloneNode(true); 
    font_two.className = 'font-two'; 
    document.body.appendChild(font_two); 

    const change_font = change => {
        console.log('ran'); 
        document.querySelector(`.${change.target.id}`).style.fontFamily = change.target.value; 
    }
    document.querySelector('#font-one').addEventListener('change', change_font); 
    document.querySelector('#font-two').addEventListener('change', change_font); 
}); 