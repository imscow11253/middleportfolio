const weather = document.querySelector(".js-weather");

const API_KEY = "5ca28e80669c1f7b6d88f8be74dcae2c";
const COORDS = 'coords';

function getWeather(lat, lng){
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&unit=metric`).then(function (response){
    return response.json();
  }).then(function(json){
    const temperature = json.main.temp;
    const place = json.name;
    weather.innerText =`${temperature} @ ${place}`;
  });   //fetch는 데이터를 가져오는 것이고 then은 data를 다루는 것이다. 근데 따로 안빼놓고 fetch 바로 뒤에 쓰는 이유는 fetch가 다 실행 되지 않았는데 then이 먼저 실행되는 것을 막기 위함.
}

function saveCoords (coordsObj){
  localStorage.setItem(COORDS, JSON.stringify(coordsObj));
}

function handleGeoSucces(position){
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const coordsObj = {
    latitude: latitude,    // js 딕셔너리 저장할 때 key와 변수이름이 같으면 그냥 latitude처럼 하나만 써도 okay!!
    longitude: longitude
  };
  saveCoords(coordsObj);
  getWeather(latitude, longitude);
}

function handleGeoError(){
  console.log("cant access");
}

function askForCoords(){
  navigator.geolocation.getCurrentPosition(handleGeoSucces, handleGeoError);   // 좌표를 가져오는 메서드임. 성공하면 첫번째 함수 실행, 실패하면 두번 째 함수 실행
}

function loadCoords(){
  const loadedCords = localStorage.getItem(COORDS);
  if (loadedCords === null){
    askForCoords();
  }
  else {
    const parsedCoords = JSON.parse(loadedCords);
    getWeather(parsedCoords.latitude, parsedCoords.longitude);
  }
}

function init(){
  loadCoords();
}

init();