const body = document.querySelector("body");

const IMG_NUMBER = 13;

function paintImage(imgNumber) {
       const image = new Image();
       image.src = `img/${imgNumber +1}.jpg`;
       
       image.classList.add('bgImage');
       body.prepend(image);
      


}

function genRandom() {
    const number = Math.floor(Math.random()*IMG_NUMBER);
    return number;
}

function init() {
    const randomNumber = genRandom();
    paintImage(randomNumber);
}
init();