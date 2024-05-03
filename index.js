document.addEventListener('DOMContentLoaded', function () {
    const readMoreButtons = document.querySelectorAll('.read-more');

    readMoreButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();
            const content = this.parentNode.querySelector('.more-content');

            // Toggle visibility
            content.style.display = (content.style.display === 'none') ? 'block' : 'none';
        });
    });
});

