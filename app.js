// base url: "http://api.weatherapi.com/v1"

let handleInputValue = document.querySelector(".weather-input")
function uploadData () {
    fetch(`http://api.weatherapi.com/v1/current.json?key=ea0266cd97544cb986c141534231704&q=${handleInputValue.value}&api=no`)
    .then(data => {
        if(data.ok) {
            console.log(data)
            return (data.json())
        }
        throw new Error('something went wrong')
    })
    .then(function(data) {
        console.log(data)
        let placeholder = document.querySelector('.weather-info')
        let result = `
            <div class="weather-info">
                <div class="weather-location">
                    <span class="weather-city">City: ${data.location.name}</span>
                    <span class="weather-time">Local time: ${data.location.localtime}</span>
                    <span class="weather-time">Region: ${data.location.region}</span>
                    <span class="weather-time">Time Zone: ${data.location.tz_id}</span>
                </div>
                <div class="weather-current">
                    <span class="weather-current-col">Feels like: ${data.current.feelslike_c} in C</span>
                    <span class="weather-current-col">Feels like: ${data.current.feelslike_f} in F</span>
                    <span class="weather-current-col">Cloud: ${data.current.cloud}</span>
                    <span class="weather-current-col">Gust km per hour: ${data.current.gust_kph}</span>
                    <span class="weather-current-col">Gust ml per hour: ${data.current.gust_mph}</span>
                    <span class="weather-current-col">Humidity: ${data.current.humidity}</span>
                    <span class="weather-current-col">Last updated: ${data.current.last_updated}</span>
                    <span class="weather-current-col">Temp C: ${data.current.temp_c}</span>
                    <span class="weather-current-col">Temp F: ${data.current.temp_f}</span>
                </div>
            </div>
        `
        placeholder.innerHTML = result;
    });
};

uploadData();