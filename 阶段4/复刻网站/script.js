<script>
const questions = document.querySelectorAll('.qa-question');
questions.forEach(q => {
  q.onclick = function () {
    const answer = this.nextElementSibling;
    answer.classList.toggle('show');
  }
});
</script>

  // 回到顶部
  <script>
  const backToTop = document.getElementById('backtotop');
  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }
</script>
  // 锚点平滑滚动
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
