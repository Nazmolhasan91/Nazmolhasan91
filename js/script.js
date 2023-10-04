document.querySelector('.navbar-toggler').addEventListener('click', function() {
  var element1 = document.querySelector('#particles-js');
  element1.classList.toggle('toggleParticle');
  var element2 = document.querySelector('.aboutCard');
  element2.classList.toggle('aboutToggle');
});
