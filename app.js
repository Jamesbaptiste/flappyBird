let block = document.getElementById('block');
let hole = document.getElementById('hole');
let character = document.getElementById('character');
let jumping = 0;
let counter = 0;

hole.addEventListener('animationiteration', () => {
  // // prettier-ignore
  // let random = -((Math.random() * 300) + 150);
  // hole.style.top = random + 'px';
  let random = Math.random() * 3;
  // prettier-ignore
  let top = (random * 100) + 150;
  hole.style.top = -top + 'px';
  counter++;
});

setInterval(() => {
  let characterTop = parseInt(
    window.getComputedStyle(character).getPropertyValue('top')
  );
  if (jumping == 0) {
    // prettier-ignore
    character.style.top = (characterTop + 3) + 'px';
  }

  let blockLeft = parseInt(
    window.getComputedStyle(block).getPropertyValue('left')
  );
  let holeTop = parseInt(window.getComputedStyle(hole).getPropertyValue('top'));

  let cTop = -(500 - characterTop);
  // if (
  //   characterTop > 480 ||
  //   (blockLeft < 20 &&
  //     blockLeft > -50 &&
  //     (cTop < holeTop || cTop > holeTop + 130))
  // ) {
  if (
    characterTop > 480 ||
    (blockLeft < 20 &&
      blockLeft > -50 &&
      (cTop < holeTop || cTop > holeTop + 130))
  ) {
    alert(`GAME OVER 
    SCORE: ${counter}`);
    character.style.top = 100 + 'px';
    counter = 0;
  }
}, 10);

function jump() {
  jumping = 1;
  let jumpCount = 0;
  let jumpInterval = setInterval(() => {
    let characterTop = parseInt(
      window.getComputedStyle(character).getPropertyValue('top')
    );
    if (characterTop > 6 && jumpCount < 15) {
      character.style.top = characterTop - 5 + 'px';
    }
    if (jumpCount > 20) {
      clearInterval(jumpInterval);
      jumping = 0;
      jumpCount = 0;
    }
    jumpCount++;
  }, 10);
}
