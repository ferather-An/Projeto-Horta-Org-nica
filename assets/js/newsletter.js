document.addEventListener('DOMContentLoaded', function() {
    // Validação do formulário de newsletter
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();

            const emailInput = this.querySelector('input[type="email"]');
            if (emailInput && emailInput.value.includes('@')) {
                alert('Obrigado por se inscrever na nossa newsletter!');
                this.reset();
            } else {
                alert('Por favor, insira um e-mail válido.');
            }
        });
    }
});