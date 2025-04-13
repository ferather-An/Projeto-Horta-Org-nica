document.addEventListener('DOMContentLoaded', function() {
    // Galeria de fotos da agrofloresta
    const gallery = document.querySelector('.gallery');
    if (gallery) {
        const images = gallery.querySelectorAll('img');
        images.forEach(img => {
            img.addEventListener('click', function() {
                const modal = document.createElement('div');
                modal.className = 'modal';
                modal.innerHTML = `<img src="${this.src}" alt="${this.alt}"><span class="close">&times;</span>`;
                document.body.appendChild(modal);

                modal.querySelector('.close').addEventListener('click', function() {
                    modal.remove();
                });
            });
        });
    }
});