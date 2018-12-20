// Encryption Variables and Functions
let input = '';
let key = '';
let finalString = '';
const characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9',' '];
const oCharacters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z','A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z','0','1','2','3','4','5','6','7','8','9',' '];
let shuffledCharacters = [];

function shuffle(a) {
  let b = a;
  var j, x, i;
  for (i = b.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = b[i];
      b[i] = b[j];
      b[j] = x;
  }
  return b;
}

function encrypt(input) {

  key = '';
  finalString = '';

  shuffledCharacters = shuffle(oCharacters);
  input.split('');

  for (var i=0;i<input.length;i++) {
      for (var j=0;j<characters.length;j++) {
          if (input[i] == characters[j]) {
              finalString += shuffledCharacters[j];
          }
      }
  }

  key = shuffledCharacters.join('');

  document.querySelector('#fText').value = finalString;
  document.querySelector('#fKey').value = key;
}
function decrypt(input, key) {

  finalString = '';
  
  for (var i=0;i<input.length;i++) {
      for (var j=0;j<key.length;j++) {
          if (input[i] == key[j]) {
              finalString += characters[j];
          }
      }
  }

  document.querySelector('#ffText').value = finalString;

}
