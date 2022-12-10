//click btn, addEventListener
$("form").click(getCityWeather);

function getCityWeather(event) {
  //call preventDefault
  event.preventDefault();

  // get data from API
  let $city = $("input[type='text']");
  $.ajax({
    url: `https://api.openweathermap.org/data/2.5/weather?q=${$city.val()}&&appid=dca7df263af27e37b23e023534f9d632`,
  }).then(
    function (data) {
      weatherData = data;
      render(weatherData);
    },
    function (error) {
      console.log("Bad Request", error);
    }
  );
}

function render(data) {
  $("#city").text(data.name);
  $("#temp").text(
    parseFloat(`${data.main.temp}` - 273.15).toFixed(2) + "\u2103"
  );
  $("#feelLike").text(
    parseFloat(`${data.main.feels_like}` - 273.15).toFixed(2) + "\u2103"
  );
  $("#weather").text(weatherData.weather[0].main);
}
