document.addEventListener('DOMContentLoaded', function() {
    // Código relacionado à seção de eventos
    // Exemplo de funcionalidade para eventos
    console.log('Eventos carregados');
    // Filtro de eventos
    const eventCategory = document.getElementById('event-category');
    if (eventCategory) {
        eventCategory.addEventListener('change', function() {
            const category = this.value;
            const eventCards = document.querySelectorAll('.event-card');

            eventCards.forEach(card => {
                if (category === 'all' || card.dataset.category === category) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    }
});