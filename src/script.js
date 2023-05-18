(async function () {
    // Получаем указатели на нужные элементы
    const formEl = document.querySelector("form");
    const weatherInfoEl = document.querySelector("#weatherInfo");
  
    function showWeather(el, weatherInfo) {
      el.innerHTML = JSON.stringify(weatherInfo, null, 2);
    }
  
    /**
     * Функция должна делать запрос на
     * https://api.openweathermap.org/data/2.5/weather?units=metric&q={{CITY_NAME}}&appid={{APP_ID}}
     * где
     *  {{CITY_NAME}} должен быть заменен на имя города
     *  {{APP_ID}} должен быть заменен на ключ приложения
     * Запрос возвращает данные в формате JSON
     *
     * функция должна возвращать (Promise) данные с информацией о погоде
     * @param {string} cityName
     */
    const API_KEY = 'c768bc4e962d2a69c28ba404045dc96c';
    async function getWeather(cityName) {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${cityName}&appid=${API_KEY}`);
      
      return await response.json();
      // put your code here
      
    }
    
    formEl.addEventListener("submit", async (ev) => {
      // чтобы не перезагружать страницу
      ev.preventDefault();
  
      // читаем значение из формы
      const formElement = ev.target;
     // console.log(formElement);
      const inputEl = formElement.querySelector("input");
      
      const cityName = inputEl.value;
      console.log(cityName);
      inputEl.value = "";
  
      const weather = await getWeather(cityName);
      console.log(weather.name);
      console.log(weather.main.temp);
    // showWeather(weatherInfoEl, weather);
  
 
   
    console.log(weather.main.temp)
  
  let cityN = document.querySelector('.city-name');
  cityN.textContent = weather.name;
  let temperatureData = document.querySelector('.temperature-data');
  temperatureData.textContent = Math.round(weather.main.temp);
 let iconId =  weather.weather[0].icon;
 let avatar = document.querySelector(".avatar");
 avatar.src = "http://openweathermap.org/img/wn/"
 +iconId+"@2x.png";
 let container = document.querySelector('.container'); 
 container.append(avatar);
 console.log (iconId);
 const button = document.querySelector('button');
 button.addEventListener("click", addParagraph);
 function addParagraph() {
  const citySaved =  cityN.textContent;
  //const input = document.querySelector(".text-field");
  
    const text = citySaved;
    getElementToList(text);
    clearField();
    return text;
  
}
function getElementToList(text) {
  const paragraph = document.createElement("p");
  paragraph.innerText = text;
  const blockParagraphs = document.querySelector(".container");
  if (blockParagraphs) {
    blockParagraphs.append(paragraph);
  }
}
 /* let temperature =document.createElement("div");
  temperature.innerText = "Погода:" + weather.main.temp;.
  document.append(temperature);
  let avatar = document.createElement("img");

  avatar.src = "http://openweathermap.org/img/wn/04d@2x.png";
  document.append(avatar);*/
});

})();
