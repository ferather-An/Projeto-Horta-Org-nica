document.addEventListener('DOMContentLoaded', function() {
    // Código relacionado à seção de depoimentos
    // Exemplo de funcionalidade para depoimentos
    console.log('Depoimentos carregados');
    
    // Formulário de depoimento
    const testimonyForm = document.getElementById('testimony-form');
    if (testimonyForm) {
        testimonyForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validação básica
            let valid = true;
            const inputs = this.querySelectorAll('input[required], select[required], textarea[required]');

            inputs.forEach(input => {
                if (!input.value) {
                    valid = false;
                    input.classList.add('error');
                } else {
                    input.classList.remove('error');
                }
            });

            if (valid) {
                // Mostrar mensagem de sucesso
                const successMessage = document.createElement('div');
                successMessage.className = 'success-message';
                successMessage.textContent = 'Depoimento enviado com sucesso! Após revisão, ele será publicado no site.';
                this.appendChild(successMessage);

                // Limpar formulário
                this.reset();

                // Remover mensagem após alguns segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 5000);
            }
        });
    }
});