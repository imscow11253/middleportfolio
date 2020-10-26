const a1 = document.querySelector(".js1");
const a2 = document.querySelector(".js2");
const a3 = document.querySelector(".js3");
const a4 = document.querySelector(".js4");
const a5 = document.querySelector(".js5");
const a6 = document.querySelector(".js6");
const a7 = document.querySelector(".js7");
const a8 = document.querySelector(".js8");
const a9 = document.querySelector(".js9");
const a0 = document.querySelector(".js0");
const aPlus = document.querySelector(".jsPlus");
const aMinus = document.querySelector(".jsMinus");
const aMul = document.querySelector(".jsMul");
const aDev = document.querySelector(".jsDev");
const aReset = document.querySelector(".jsC");
const aEqual = document.querySelector(".jsEqual");
const result = document.querySelector(".result");

let CURRENTEX="";
let PRESENTVALUE="";
let CURRENTCAL = "";

function handleNum(event){
  const currentValue = event.target.value;
  CURRENTEX = CURRENTEX + currentValue;
  result.innerText = CURRENTEX;
}

function handldC(){
  CURRENTEX="";
  result.innerText = CURRENTEX;
  CURRENTCAL="";
}

function handlePlus(){
  PRESENTVALUE = CURRENTEX;
  CURRENTEX = "";
  result.innerText = CURRENTEX;
  CURRENTCAL = "+";
}

function handleMinus(){
  PRESENTVALUE = CURRENTEX;
  CURRENTEX = "";
  result.innerText = CURRENTEX;
  CURRENTCAL = "-";
}

function handleMul(){
  if (CURRENTCAL =="*"){
    PRESENTVALUE = CURRENTEX*PRESENTVALUE;
    result.innerText = PRESENTVALUE;
    CURRENTEX="";
  }
  else{
    PRESENTVALUE = CURRENTEX;
    CURRENTEX = "";
    result.innerText = CURRENTEX;
    CURRENTCAL = "*";
  }
}

function handleDev(){
  PRESENTVALUE = CURRENTEX;
  CURRENTEX = "";
  result.innerText = CURRENTEX;
  CURRENTCAL = "/";
}

function handleEqual(){
  let resultOfCal=0;
  if(CURRENTCAL == "+"){
    resultOfCal = Number(CURRENTEX)+Number(PRESENTVALUE);
  } 
  else if (CURRENTCAL == "-"){
    resultOfCal = -Number(CURRENTEX)+Number(PRESENTVALUE);
  }
  else if(CURRENTCAL == "*"){
    resultOfCal = Number(CURRENTEX)*Number(PRESENTVALUE);
  }
  else if(CURRENTCAL == "/"){
    resultOfCal = Number(PRESENTVALUE)/Number(CURRENTEX);
  }
  result.innerText = String(resultOfCal);
  CURRENTEX = String(resultOfCal);
  CURRENTCAL="";
}

function init(){
  a1.addEventListener("click", handleNum);
  a2.addEventListener("click", handleNum);
  a3.addEventListener("click", handleNum);
  a4.addEventListener("click", handleNum);
  a5.addEventListener("click", handleNum);
  a6.addEventListener("click", handleNum);
  a7.addEventListener("click", handleNum);
  a8.addEventListener("click", handleNum);
  a9.addEventListener("click", handleNum);
  a0.addEventListener("click", handleNum);
  aReset.addEventListener("click", handldC);
  aPlus.addEventListener("click", handlePlus);
  aMinus.addEventListener("click", handleMinus);
  aMul.addEventListener("click", handleMul);
  aDev.addEventListener("click", handleDev);
  aEqual.addEventListener("click", handleEqual);
}

init();

