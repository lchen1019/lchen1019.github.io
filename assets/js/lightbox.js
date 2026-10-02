(function () {
  var overlay = document.createElement('div');
  overlay.className = 'lightbox';
  var big = document.createElement('img');
  overlay.appendChild(big);
  document.body.appendChild(overlay);

  function close() {
    overlay.classList.remove('is-open');
  }

  document.querySelectorAll('.page__content img[src^="papers/"]').forEach(function (img) {
    img.addEventListener('click', function () {
      big.src = img.src;
      big.alt = img.alt;
      overlay.classList.add('is-open');
    });
  });

  overlay.addEventListener('click', close);
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') close();
  });
})();
