const toDoForm = document.querySelector(".js-toDoForm");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.querySelector(".js-toDoList");

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
  const btn = event.target;  // event가 일어나는 것의 태그를 가져온다. 여기서는 <button>X</button>을 가져옴.
  const li = btn.parentNode;  // 부모노드를 가져온다.
  toDoList.removeChild(li); // 해당 노드의 자식노드를 삭제함.
  const cleanToDos = toDos.filter(function(toDo){  // filter도 foreach처럼 list의 각 요소 마다 해당 function을 수행함. --> 여기서는 그 function을 바로 만듦.
    return toDo.id !== parseInt(li.id);   //li의 id 값이 string으로 나옴. --> parseInt로 정수로 바꿈.
  });
  toDos =cleanToDos;
  saveToDos();
  }

function saveToDos(){
  localStorage.setItem(TODOS_LS, JSON.stringify(toDos)); // JSON.stringify를 하는 이유: localStorage에서는 data들을 string으로만 저장하고자 한다. 떄문에 그냥 입력해버리면 object라고 표시한다. 즉 object로 표시되는 것을 string으로 바꾸어 주어야 한다. 
}

function paintToDo(text){
  const ul =document.createElement("ul");  // **** ul태그를 document에 생성하고 const ul에 저장하겠다는 뜻이다.
  const delBtn = document.createElement("button"); 
  const span = document.createElement("span");
  const newId = toDos.length +1;
  delBtn.innerHTML ="❌";   // 버튼의 이미지를 부여
  delBtn.addEventListener("click", deleteToDo);
  span.innerText = text;
  ul.appendChild(delBtn);  // li의 자식노드로 delBtn을 넣는다. 
  ul.appendChild(span);  // li의 자식노드로 span을 넣겠다. 
  ul.id = newId;
  toDoList.appendChild(ul);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj); // toDos라는 배열 안에 방금 생성한 toDoObj라는 딕션너리(object)를 넣는다.
  saveToDos();   
}

function handleSubmit(event){
  event.preventDefault();
  const currentValue = toDoInput.value;
  paintToDo(currentValue);
  toDoInput.value="";
}

function loadToDos(){
  const loadedToDos = localStorage.getItem(TODOS_LS);
  if (loadedToDos !== null){
    const parsedToDos = JSON.parse(loadedToDos);  // localStorage에 있던 값들을 다시 object로 변환시켜서 js가 읽을 수 있도록 해주고 그것들을 parsedToDos라는 array에 저장함.
    parsedToDos.forEach(function(toDo){                  // array에 forEach라는 메서드는 array의 각 항목에 대해 다음 함수를 실행시킨다는 것 --> 여기서는 함수를 바로 만들면서 사용함. 
      paintToDo(toDo.text);
    })
  }
}

function init(){
   loadToDos();
   toDoForm.addEventListener("submit", handleSubmit);
}

init();
