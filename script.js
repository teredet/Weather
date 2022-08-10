const link = 'https://api.openweathermap.org/data/2.5/weather'
const appid = 'af655b4d6ea7e6619cf1f23c711647c8'

var data = {
    lat: undefined,
    lon: undefined,
}

function success(pos) {
    var crd = pos.coords;
    data.lat = pos.coords.latitude
    data.lon = pos.coords.longitude

    console.log('Ваше текущее местоположение:');
    console.log(`Широта: ${pos.coords.latitude}`);
    console.log(`Долгота: ${pos.coords.longitude}`);
    console.log(`Плюс-минус ${crd.accuracy} метров.`);
  };

const fetchData = async () => {
    navigator.geolocation.getCurrentPosition(success)

    console.log(`Широта: ${data.lat}`);
    console.log(`Долгота: ${data.lon}`);

    let response = await fetch(`${link}?lat=${data.lat}&lon=${data.lon}&appid=${appid}&units=metric`)
    let json = await response.json()
    console.log(json)
}

fetchData()