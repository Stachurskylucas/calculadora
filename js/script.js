const pantalla = document.querySelector('#display');
const botones = document.querySelectorAll('.boton-calc');

botones.forEach(btn => {
    btn.addEventListener('click', () => {
        const botonApretado = btn.textContent

        if (btn.textContent === 0) {
            pantalla.textContent += botonApretado;
            return;

        } 
        
        if (btn.textContent === 'C') {
            pantalla.textContent = '0';  
            return;

        } 

        if (btn.textContent === '%') {
            pantalla.textContent = (pantalla.textContent / 100);
            return;
        }
        
        if (btn.textContent === 'DE') {

            if (pantalla.textContent.length === 1 || pantalla.textContent === 'Error' || pantalla.textContent === 'Infinity' || pantalla.textContent === 'NaN') {
                pantalla.textContent = '0';
            } 
            
            else {
                pantalla.textContent = pantalla.textContent.slice(0, -1);

            }
            return;

        }
        
        if (btn.id === 'cambiar-signo') {
            pantalla.textContent = (pantalla.textContent * -1);
            return;
        }

        if (btn.textContent === '=') {
            try {
                pantalla.textContent = eval(pantalla.textContent);
            }

            catch (err) {
                pantalla.textContent = 'Error';
            }
            return;

        }

        if (pantalla.textContent === '0' || pantalla.textContent === 'Error' || pantalla.textContent === 'Infinity' || pantalla.textContent === 'NaN') {
            pantalla.textContent = botonApretado;
        }
        else {
            pantalla.textContent += botonApretado;
        }

    })
})
