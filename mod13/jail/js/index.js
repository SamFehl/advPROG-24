//var text = ['a programmer','an accountant','a student', 'Samuel Fehl', 'a cheesemaker'];
/*var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;
let delay = 25;
var backspace = false;

var outputElem = document.getElementById("type-writer-text");
function typeWriter() {
  outputElem.textContent = txt.substring(0, i);

  if (i > txt.length + delay) backspace = true;
  if (i == -1) backspace = false;
  i = i + (backspace ? -1 : 1);
  if(i != -1) setTimeout(typeWriter, speed);
}*/

const texts = ["I am a programmer.", "I am an accountant.", "I am a student.", "I am Samuel Fehl."];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeBeforeDeleting = 1000;

  function type() {
    const currentText = texts[index];
    if (!isDeleting && charIndex < currentText.length) {
      document.getElementById('type-writer-text').textContent += currentText.charAt(charIndex);
      charIndex++;
      timeBeforeDeleting = 1000;
    } else if (isDeleting && charIndex >= 0) {
      document.getElementById('type-writer-text').textContent = currentText.substring(0, charIndex);
      charIndex--;
      timeBeforeDeleting = 50;
    } else {
      isDeleting = !isDeleting;
      if (!isDeleting) {
        index = (index + 1) % texts.length;
      }
    }
    const speed = isDeleting ? 50 : 50; // Adjust speed here
    const delay = isDeleting ? timeBeforeDeleting : speed;
    setTimeout(type, delay);
  }

document.addEventListener("DOMContentLoaded", function() {
  type();
});