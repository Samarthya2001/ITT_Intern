let weather = {
    "key": "33146ad7953bfe7698ab78dd800b1d45",
    fetchWeather: function(city){
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q="
             + city + 
             "&units=metric&appid="
             + this.key
        ).then((response) => response.json())
        .then((data) => this.displayWeather(data))
    },
    displayWeather: function(data){
        const {name} = data;
        const descript = data.weather[0].description;
        const descripticon = data.weather[0].icon;
        const humid = data.main.humidity;
        const windspeed = data.wind.speed;
        const temp = data.main.temp; 
        document.querySelector(".city").innerHTML ="Weather in " + name;
        document.querySelector(".description").innerHTML = descript;
        document.querySelector(".temp").innerHTML =temp + "°C";
        document.querySelector(".humidity").innerHTML ="Humidty: " + humid + "%";
        document.querySelector(".wind").innerHTML ="Wind Speed: " + windspeed + "Km/h";
        document.querySelector(".icon").setAttribute("src", "https://openweathermap.org/img/wn/" + descripticon + "@2x.png");
        document.querySelector(".weather").classList.remove("display");
    },
    search : function(){
        this.fetchWeather(document.querySelector(".search-bar").value);
    }
    
};

document.querySelector(".search button").addEventListener("click", function(){
    weather.search();
});

document.querySelector(".search-bar").addEventListener("keydown", function(event){
    if(event.key == "Enter"){
        weather.search();
    }
});

weather.fetchWeather("Ajmer");
