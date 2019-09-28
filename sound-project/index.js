const keys = Array.from(document.querySelectorAll('.key'));
const header = document.querySelector('.heading');
keys.forEach(key => {
  key.addEventListener('transitionend', function(event) {
    if (event.propertyName !== 'transform') return;
    event.target.classList.remove('playing');
    header.classList.remove('white');
  });
});
window.addEventListener('keypress', function(event) {
  let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`);
  let key = document.querySelector(`div[data-key="${event.keyCode}"]`);
  if (!audio) return;
  audio.currentTime = 0;
  key.classList.add('playing');
  header.classList.add('white');
  let randomColor = Math.floor(Math.random() * 16777215).toString(16);
  this.document.querySelector('body').style.backgroundColor = `#${randomColor}`;
  audio.play();
});
