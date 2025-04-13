document.addEventListener('DOMContentLoaded', function() {
    // Calculadora de compostagem
    const compostForm = document.getElementById('compost-form');
    if (compostForm) {
        compostForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const organico = parseInt(this.querySelector('#organico').value) || 0;
            const seco = parseInt(this.querySelector('#seco').value) || 0;

            const proporcao = organico / seco;
            document.getElementById('resultado-compostagem').textContent = `A proporção é de ${proporcao.toFixed(2)}:1 (orgânico:seco).`;
        });
    }
});