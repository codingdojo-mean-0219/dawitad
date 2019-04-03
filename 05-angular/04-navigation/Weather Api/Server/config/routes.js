var path = require("path");

module.exports = function (app) {

    app.all("*", (request, response, next) => {
        console.log("my router is working");
        response.sendFile(path.resolve("./../client/WeatherApi/dist/WeatherApi/index.html"));
        
    });

};