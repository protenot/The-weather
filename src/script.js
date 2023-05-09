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
      const inputEl = formElement.querySelector("input");
      const cityName = inputEl.value;
      inputEl.value = "";
  
      const weather = await getWeather(cityName);
      showWeather(weatherInfoEl, weather);
    });
  })();
  
  