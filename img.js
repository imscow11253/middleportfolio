const form = document.querySelector(".js-img");
const img = document.querySelector(".my_img");
const btn = form.querySelector(".my_button");

const SHOWING = "showing";

function chClass(event){
  event.preventDefault();
  img.classList.remove("img");
  img.classList.add("SHOWING_CN");
  btn.classList.remove(SHOWING);
  btn.classList.add("button");
}

function showImg(){
  form.addEventListener("click", chClass);
}

function init(){
  showImg();
}

init();