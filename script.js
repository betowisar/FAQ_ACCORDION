console.log("JS connected");
const faqItems = document.querySelectorAll('.faq-item');
const faqButtons = document.querySelectorAll('.faq-question button');

faqButtons.forEach ((button, index) => {
    button.addEventListener ('click', () => {
        faqItems.forEach ((item, i) => {
            item.classList.remove('active');
            faqButtons[i].textContent = "+";
    });

   faqItems[index].classList.add('active');
   button.textContent = "-";
 });
});

