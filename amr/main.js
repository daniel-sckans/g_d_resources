window.addEventListener('DOMContentLoaded', dom_content_loaded => {
    
    const context = document.querySelector('canvas').getContext('2d'); 
    
    const set_canvas_size = () => {
        context.canvas.width = context.canvas.clientWidth * window.devicePixelRatio; 
        context.canvas.height = context.canvas.clientHeight * window.devicePixelRatio; 
        console.log(`WIDTH: ${context.canvas.width} | HEIGHT: ${context.canvas.height}.  That is all.`); 
    }; 
    set_canvas_size(); 

    const render = () => {
        const draw_point = (x, y) => {
            context.beginPath(); 
            context.moveTo(x, y); 
            context.lineTo(x, y); 
            context.stroke(); 
        }; 

        context.clearRect(0, 0, context.canvas.width, context.canvas.height); 
                
        context.save(); 
        
        context.strokeStyle = '#08F'; 
        context.lineWidth = 20; 
        context.lineCap = 'round'; 
        
        for(let i = 0; i < document.querySelector('#domain_a').value; i++) {
            draw_point(Math.random() * context.canvas.width / 2, Math.random() * context.canvas.height / 2); 
        }
        
        for(let i = 0; i < document.querySelector('#domain_a').value * document.querySelector('#range_a').value; i++) {
            draw_point(Math.random() * context.canvas.width / 2 + context.canvas.width / 2, Math.random() * context.canvas.height / 2); 
        }

        context.strokeStyle = '#084'; 

        for(let i = 0; i < document.querySelector('#domain_b').value; i++) {
            draw_point(Math.random() * context.canvas.width / 2, Math.random() * context.canvas.height / 2 + context.canvas.height / 2); 
        }
        
        for(let i = 0; i < document.querySelector('#domain_b').value * document.querySelector('#range_b').value; i++) {
            draw_point(Math.random() * context.canvas.width / 2 + context.canvas.width / 2, (1 + Math.random()) * context.canvas.height / 2); 
        }
        
        context.restore(); 

        context.save(); 
        context.lineWidth = 15; 
        context.beginPath(); 
        context.moveTo(0, context.canvas.height / 2); 
        context.lineTo(context.canvas.width, context.canvas.height / 2); 
        context.stroke(); 
        context.restore(); 
        
        context.beginPath(); 
        context.moveTo(context.canvas.width / 2, 0); 
        context.lineTo(context.canvas.width / 2, context.canvas.height); 
        context.stroke(); 

    }; 
    document.querySelector('#render').addEventListener('click', render); 
    document.addEventListener('mouseup', render); 

    window.addEventListener('resize', set_canvas_size); 
}); 