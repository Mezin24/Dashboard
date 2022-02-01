fetch(
  'https://apis.scrimba.com/unsplash/photos/random?orientation=landscape&query=nature'
)
  .then((res) => res.json())
  .then((data) => {
    document.body.style.backgroundImage = `url(${data.urls.regular})`;
    document.getElementById('author').textContent = `By: ${data.user.name}`;
  })
  .catch((err) => {
    document.body.style.backgroundImage = `url(https://images.unsplash.com/photo-1560008511-11c63416e52d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwyMTEwMjl8MHwxfHJhbmRvbXx8fHx8fHx8fDE2MjI4NDIxMTc&ixlib=rb-1.2.1&q=80&w=1080
)`;
    document.getElementById('author').textContent = `By: Dodi Achmad`;
  });
fetch(
  'https://freecurrencyapi.net/api/v2/latest?apikey=f62e4030-833f-11ec-990a-b19907252bb9&base_currency=rub'
)
  .then((res) => res.json())
  .then((data) => {
    document.getElementById('usd').textContent = `💲 ${(
      1 / data.data.USD
    ).toFixed(2)}`;
    document.getElementById('eur').textContent = `💶 ${(
      1 / data.data.EUR
    ).toFixed(2)}`;
  });

new Promise((resolve) => {
  navigator.geolocation.getCurrentPosition(function (position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;

    resolve({ lat, lon });
  });
})
  .then((coords) => {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${coords.lat}&lon=${coords.lon}&appid=cb6b0dcf2866b8bcf6bc0b487dac1f9f&units=metric`
    );
  })
  .then((res) => res.json())
  .then((data) => {
    document.getElementById('weather').textContent = data.main.temp.toFixed(0);

    const weatherIcon = `<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" alt=${data.weather[0].descrition}>`;

    document
      .getElementById('weather-box')
      .insertAdjacentHTML('afterbegin', weatherIcon);
    document.getElementById('location').textContent = data.name;
  })
  .catch((err) => console.error(err));

function displayTime() {
  const time = new Date().toLocaleTimeString('en-US', {
    hour12: false,
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
  });

  document.querySelector('.time').textContent = time;
}
setInterval(displayTime, 1000);
