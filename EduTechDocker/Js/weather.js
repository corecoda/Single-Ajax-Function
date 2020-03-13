
//GET
function GetAllWeatherForcasted() {
    let url = apiBaseUrl + 'WeatherForecast/Get';
    ajaxAsync(url, null, 'GET', WeatherResult);
  
}
function WeatherResult(data) {

    if (data !== null) {
      //Do Something
    }
    else {
        //throw Error
    }
}

//POST
function PostWeatherForcasted() {
    let url = apiBaseUrl + 'WeatherForecast/Get';
    ajaxAsync(url, Model, 'POST', WeatherResult);
    function WeatherResult(data) {

        if (data !== null) {
            //Do Something
        }
        else {
            //throw Error
        }
    }
}
