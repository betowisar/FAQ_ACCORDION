console.log("JS connected");
const faqItems = document.querySelectorAll('.faq-item');
const faqButtons = document.querySelectorAll('.faq-question button');

faqButtons.forEach ((button, index) => {
    button.addEventListener ('click', () => {
        faqItems[index].classList.toggle('active');
    });
});

