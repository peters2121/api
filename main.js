fetch('https://api.openweathermap.org/data/2.5/forecast?id=524901&appid=aee42e804382eda552bfe9d42fc8bba5')
.then(res => res.json())
.then(res2 => {
    console.log(res2)
    country.innerHTML = res2.city.country
    city.innerHTML = res2.city.name
    time.innerHTML = res2.list[0].dt_txt
    temperature.innerHTML = res2.list[0].main.temp
    pressure.innerHTML = res2.list[0].main.pressure
    rainfall.innerHTML = res2.list[0].rain['3h']

});

let country = document.querySelector('.country-holder')
let city = document.querySelector('.city-holder')
let time = document.querySelector('.time-holder')
let temperature = document.querySelector('.temperature-holder')
let pressure = document.querySelector('.pressure-holder')
let rainfall = document.querySelector('.rainfall-holder')







