(function () {
    const stars = document.querySelectorAll('.footer-star');
    let selected = 0;
 
    stars.forEach(function (s) {
      s.addEventListener('mouseover', function () {
        const v = +s.dataset.val;
        stars.forEach(function (x) {
          x.classList.toggle('active', +x.dataset.val <= v);
        });
      });
 
      s.addEventListener('mouseout', function () {
        stars.forEach(function (x) {
          x.classList.toggle('active', +x.dataset.val <= selected);
        });
      });
 
      s.addEventListener('click', function () {
        selected = +s.dataset.val;
        stars.forEach(function (x) {
          x.classList.toggle('active', +x.dataset.val <= selected);
        });
      });
    });
  })();