const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'img/cyclist sprite.png';
const streetImage = new Image(); // 2048px by 256px
streetImage.src = 'img/houses_pavement_sky.png';
const spriteWidth = 64;
const spriteHeight = 64;
let frameX = 0;
let gameFrame = 0;
const staggerFrame = 9;
let streetOffset = 0;

function animate(){

  // Move streetImage
  streetOffset ++;
  ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  ctx.drawImage(streetImage, streetOffset, 0, 256, 256, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
  if (streetOffset > 2015) streetOffset = 0;

  // Animate cyclist
  //(image, sprite x, y, width, height, canvas x, y, w, h)
  ctx.drawImage(playerImage, frameX * spriteWidth, 0, spriteWidth, spriteHeight, 0, 280, CANVAS_WIDTH / 2, CANVAS_HEIGHT / 2);

  if (gameFrame % staggerFrame == 0){
    if (frameX < 3){
      frameX ++;
    }
    else frameX = 0;
  }
  gameFrame++;
  requestAnimationFrame(animate);
};
animate();
