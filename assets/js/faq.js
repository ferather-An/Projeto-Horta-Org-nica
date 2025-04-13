document.addEventListener('DOMContentLoaded', function() {
    // Accordion para FAQ
    const accordionButtons = document.querySelectorAll('.accordion-button');
    if (accordionButtons.length > 0) {
        accordionButtons.forEach(button => {
            button.addEventListener('click', function() {
                const content = this.nextElementSibling;
                const isExpanded = this.getAttribute('aria-expanded') === 'true';

                // Fechar todos os outros itens
                accordionButtons.forEach(btn => {
                    if (btn !== this) {
                        btn.setAttribute('aria-expanded', 'false');
                        btn.nextElementSibling.setAttribute('hidden', '');
                    }
                });

                // Alternar o item atual
                if (isExpanded) {
                    this.setAttribute('aria-expanded', 'false');
                    content.setAttribute('hidden', '');
                } else {
                    this.setAttribute('aria-expanded', 'true');
                    content.removeAttribute('hidden');
                }
            });
        });
    }

    // Código relacionado à seção de FAQ
    // Validação de formulário com feedback visual
    const faqForm = document.getElementById('faq-form');
    if (faqForm) {
        faqForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // Validação básica
            let valid = true;
            const inputs = this.querySelectorAll('input[required], select[required]');

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
                successMessage.textContent = 'Pergunta enviada com sucesso!';
                this.appendChild(successMessage);

                // Limpar formulário
                this.reset();

                // Remover mensagem após alguns segundos
                setTimeout(() => {
                    successMessage.remove();
                }, 3000);
            }
        });

        // Remover classe de erro ao digitar
        faqForm.querySelectorAll('input, select').forEach(input => {
            input.addEventListener('input', function() {
                if (this.value) {
                    this.classList.remove('error');
                }
            });
        });
    }

    // Código relacionado ao FAQ
    // Alternar visibilidade das respostas no FAQ
    document.querySelectorAll('.faq-question').forEach(function (question) {
        question.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('visible');
        });
    });
});