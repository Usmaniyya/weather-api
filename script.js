var button = document.querySelector('.button');
var input = document.querySelector('.input');
var city = document.querySelector('#city');
var country = document.querySelector('#country')
var temp = document.querySelector('#temp');
var desc = document.querySelector('#desc');
var hum = document.querySelector('#humidity');
var wind = document.querySelector('#wind');

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=2dc328ad247993b990a3d9f492ad528a')
        .then(response => response.json())
        .then(data => {
            var cityValue = data['name'];
            var countryValue = data['sys']['country'];
            var tempValue = data['main']['temp'];
            var descValue = data['weather'][0]['description'];
            var humValue = data['main']['humidity'];
            var windValue = data['wind']['speed'];

            // descValue.capitalize();
            var celsius = Math.floor(tempValue - 273.15);
            var kilo = Math.floor(windValue * 3.6)

            city.innerHTML = cityValue;
            country.innerHTML = countryValue;
            temp.innerHTML = celsius + '&#8451';
            desc.innerHTML = descValue;
            hum.innerHTML = humValue + '%';
            wind.innerHTML = kilo + 'km/h';
        })
        .catch(err => alert("Wrong city name"));
});