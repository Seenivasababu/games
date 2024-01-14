const block = document.getElementById('block');
const hole = document.getElementById('hole');
const character = document.getElementById('character');
let jumping = 0;
let counter = 0;
hole.addEventListener('animationiteration', () => {
  let random = -(Math.random() * 300 + 150);
  hole.style.top = random + 'px';
  counter++;
});

setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );
  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );
  let holeTop = parseInt(
    window.getComputedStyle(hole).getPropertyValue('top')
  );
  let cTop = -(500 - characterTop)
  console.log("Hole Top", holeTop)
  console.log("characterTop", )
  if ( jumping === 0) {
    character.style.top = characterTop + 3 + 'px';
  }
  if(characterTop > 480 || ((blockLeft<20)&&(blockLeft>-50)&&((cTop<holeTop)||(cTop>holeTop+130)))){
    alert("Game over" + "Your score is: "+ counter)
    character.style.top = 100 + 'px';
    counter = 0
  }
}, 20);

function jump() {
  jumping = 1;
  let jumpCount = 0;
 
  let jumpInterval = setInterval(() => {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue('top')
    );
    if(characterTop>6 && jumpCount<15){
      character.style.top = characterTop - 5 + 'px';
    }

    console.log(characterTop,"top");
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
