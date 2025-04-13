document.addEventListener('DOMContentLoaded', function() {
    // Calculadora de inseticida natural
    const calcForm = document.getElementById('calc-inseticida-form');
    if (calcForm) {
        calcForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const alho = parseInt(this.querySelector('#alho').value) || 0;
            const agua = parseInt(this.querySelector('#agua').value) || 0;

            const resultado = alho * agua;
            document.getElementById('resultado-inseticida').textContent = `Você precisa de ${resultado} ml de solução.`;
        });
    }
});