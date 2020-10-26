const body = document.querySelector("body");

const IMAGE_NUMBER = 3;

function paintImage(imgNumber){
  const image = new Image();
  image.src = `/${imgNumber+1}.jpg`;
  image.classList.add("bgImage");
  body.appendChild(image);
  
}

function genRandom(){

  const number = Math.floor(Math.random()*IMAGE_NUMBER); // Math라는 것에 floor 메서드는 소수점 이하를 없애 주는 것, random은 랜덤 숫자를 뽑아주는 것 
  return number;

}

function init(){
  const randomNumer = genRandom();
  paintImage(randomNumer);
}

init();