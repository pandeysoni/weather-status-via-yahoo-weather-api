// API Server Endpoints
module.exports = function(app){
  require("./weather/weather.server.routes")(app);
}
