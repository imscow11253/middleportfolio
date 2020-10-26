const formContainer = document.querySelector(".js-form");
const input = formContainer.querySelector("input");
const greeting = document.querySelector(".js-greetings");
const button = document.querySelector(".my_button");

const USER_NAME= "currentUser";
const SHOWING_CN = "showing";

function saveName(text){
  localStorage.setItem(USER_NAME, text);
}

function handleSubmit(event){
  event.preventDefault();  //이벤트(데이터 입력)가 form태그를 거쳐서 bubble처럼 점점 올라가 document까지 올라가는 것이 기본 룰인데 그것을 막는 코드
  const currentValue = input.value;
  paintGreeting(currentValue);
  saveName(currentValue);
}

function askForName(){
  formContainer.classList.add(SHOWING_CN);
  formContainer.addEventListener("submit", handleSubmit);
}

function paintGreeting(text){
  formContainer.classList.remove(SHOWING_CN);
  greeting.classList.add(SHOWING_CN);
  greeting.innerText = `Hello ${text}`;
  button.classList.remove("button");
  button.classList.add(SHOWING_CN);
}

function loadName(){
  const currentUser = localStorage.getItem(USER_NAME);
  if (currentUser === null){
    askForName();
  }
  else {
    paintGreeting(currentUser);
  }
}

function init(){
 loadName(); 
}

init();  