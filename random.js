// <⚠️ DONT DELETE THIS ⚠️>
//import "./styles.css";
// <⚠️ /DONT DELETE THIS ⚠️>

const rangeBar = document.getElementById("jsRange");
const rangeEx = document.querySelector(".jsEx");
const userAns = document.querySelector(".jsInput");
const play = document.querySelector(".jsPlay");
const win = document.querySelector(".jsWin");
const lose = document.querySelector(".jsLose");
const result = document.querySelector(".jsResult");

let KEY=0;
let USERANS =0;

function handleRangeChange(event){
	const max = event.target.value;
	rangeEx.innerText = `Generate a number between 0 and ${max}`;
}

function defineKey(max){
  KEY = Math.floor(Math.random()*max);
}

function handleSubmit(event){
	event.preventDefault();
	USERANS = event.target.value;
}

function handleClick(){
  defineKey(rangeBar.value);
  result.innerText = `You chose: ${USERANS}, the machine chose: ${KEY}.`
	if (KEY == USERANS){
    lose.classList.add("lost");
		win.classList.remove("won");
	}
	else {
    win.classList.add("won");
		lose.classList.remove("lost");
	}
}

function init(){
	rangeBar.addEventListener("input", handleRangeChange);
	userAns.addEventListener("input", handleSubmit);
	play.addEventListener("click", handleClick);
}

init();