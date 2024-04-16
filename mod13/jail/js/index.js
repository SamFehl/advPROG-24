//Typewriter Variables
const texts = ["I am a programmer.", "I am an accountant.", "I am a student.", "I am Samuel Fehl.", "I am the president.", "I am a programmer.", "I am an accountant.", "I am a student.", "I am Samuel Fehl.","I am a programmer.", "I am an accountant.", "I am a student.", "I am Samuel Fehl.","I am a programmer.", "I am an accountant.", "I am a student.", "I am Samuel Fehl.", "I am the largest charitable donor in southwest Virgina", "but not the largest charitable donor in south West Virginia", "I am a programmer.", "I am an accountant.", "I am a student.", "I am Samuel Fehl.","I am a programmer.", "I am an accountant.", "I am a student.", "I am Samuel Fehl.","I am a programmer.", "I am an accountant.", "I am a student.", "I am Samuel Fehl."];
  let index = 0;
  let charIndex = 0;
  let isDeleting = false;
  let timeBeforeDeleting = 1000;

  //Typewriter Function
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
    const speed = isDeleting ? 50 : 50;
    const delay = isDeleting ? timeBeforeDeleting : speed;
    setTimeout(type, delay);
  }

document.addEventListener("DOMContentLoaded", function() {
  type();
});

