const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

const sections = document.querySelectorAll('.about-item');
let currentIndex = 0;

function showContent(index) {
    // Hide all sections
    sections.forEach((section) => {
      section.style.display = 'none';
    });

    // Show the current section
    sections[index].style.display = 'block';
}

function showForm(formId, btn) {
    // Hide all forms
    const forms = document.querySelectorAll('.form-container');
    forms.forEach(form => form.style.display = 'none');

    // Show the selected form
    document.getElementById(formId).style.display = 'block';

    // Handle button active state
    const buttons = document.querySelectorAll('.tab-btn');
    buttons.forEach(button => button.classList.remove('active'));
    btn.classList.add('active');
}
