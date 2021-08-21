const texts = ['proud Indian','web designer','programming enthusiast!','crazy artist!'];
let count = 0; //for words
let index = 0; //for letters
let currentText = '';
let letter = '';

// immediately invoke the function is called IIFE - immediately invoked function expression
(function typeEffect(){
  if(count === texts.length){
    count = 0; //reset count to loop over
  }
  currentText = texts[count];
  letter = currentText.slice(0,++index);
  document.querySelector('.typing').textContent = letter;
  if(letter.length === currentText.length){
    count++;
    index = 0;
  }
  setTimeout(typeEffect, 400);
})();
