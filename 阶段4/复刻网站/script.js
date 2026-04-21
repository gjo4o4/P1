

const questions = document.querySelectorAll('.qa-question');
questions.forEach(q => {
    q.onclick = function() {
        const answer = this.nextElementSibling;
        answer.classList.toggle('show');
    }
});

const backToTop = document.getElementById('backtotop');
if (backToTop) {
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
}


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});
