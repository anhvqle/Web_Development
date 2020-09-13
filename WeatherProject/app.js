const express = require("express");
const https = require("https");

const app = express();

app.get("/", function(req, res){
  const url = "https://api.openweathermap.org/data/2.5/weather?appid=111a8dd0dd4728f9268c8423bc474b00&q=hanoi&units=metric";

  https.get(url, function(response){
    console.log(response.statusCode);

    response.on("data", function(data){
      const weatherData = JSON.parse(data)
      const temp = weatherData.main.temp;
      const feel_like = weatherData.main.feels_like;
      const weather_description = weatherData.weather[0].description;
      const icon = weatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"

      res.write("<h1>The current temperature in Hanoi is " + temp + " degrees Celcius.</h1>");
      res.write("<h2>Feels like: " + feel_like + " degrees</h2>");
      res.write("<p>The weather is currently " + weather_description +"</p>")
      res.write("<img src = " + imageUrl + ">");
      res.send()
    })
  })
})

app.listen(3000, function() {
  console.log("Server is running on port 3000.");
})
