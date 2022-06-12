var button = document.querySelector('.button');
var input = document.querySelector('.input');
var city = document.querySelector('#city');
var temp = document.querySelector('#temp');

button.addEventListener('click', (e) => {
    e.preventDefault();
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=2dc328ad247993b990a3d9f492ad528a')
        .then(response => response.json())
        .then(data => {
            var cityValue = data['name'];
            var tempValue = data['main']['temp'];


            var celsius = Math.floor(tempValue - 273.15);

            city.innerHTML = cityValue;
            temp.innerHTML = celsius + '&#8451';
        })
        .catch(err => alert("Wrong city name"));
});