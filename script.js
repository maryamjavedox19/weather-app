const url = 'https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Karachi';
const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Key': 'f82c9a4deamsh982798bb77ee0f6p196c14jsncca4183de3ee',
    'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
  }
};

const cities = [
  { name: 'Karachi', id: 'Karachi' },
  { name: 'Quetta', id: 'Quetta' },
  { name: 'Islamabad', id: 'Islamabad' },
  { name: 'Hyderabad', id: 'Hyderabad' }
];

const getWeather = (city) => {
  cityname.innerHTML = city;

  fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then((response) => {
      console.log(response);


	//   /--- Weather By Search ----/
    cityname.innerHTML=city;
                console.log(response)    
                temp.innerHTML = response.temp
                temp2.innerHTML = response.temp
                cloud_pct.innerHTML = response.cloud_pct
                humidity.innerHTML = response.humidity
                humidity2.innerHTML = response.humidity
                min_temp.innerHTML = response.min_temp
                max_temp.innerHTML = response.max_temp 
                wind_speed.innerHTML=response.wind_speed
                wind_speed2.innerHTML=response.wind_speed
                wind_degree.innerHTML = response.wind_degrees
                sunrise.innerHTML = response.sunrise
                sunset.innerHTML = response.sunset
     

	// weather of other common cities
      document.getElementById('temp-' + city).innerHTML = response.temp;
      document.getElementById('cloud_pct-' + city).innerHTML = response.cloud_pct;
      document.getElementById('humidity-' + city).innerHTML = response.humidity;
      document.getElementById('min_temp-' + city).innerHTML = response.min_temp;
      document.getElementById('max_temp-' + city).innerHTML = response.max_temp;
      document.getElementById('wind_speed-' + city).innerHTML = response.wind_speed;
      document.getElementById('wind_degrees-' + city).innerHTML = response.wind_degrees;
      document.getElementById('sunrise-' + city).innerHTML = response.sunrise;
      document.getElementById('sunset-' + city).innerHTML = response.sunset;
    })
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e) => {
  e.preventDefault();
  const selectedCity = city.value;
  getWeather(selectedCity);
});


cities.forEach(cityObj => getWeather(cityObj.name));