# Single-Ajax-Function
A Single Ajax Function that allows you to implement HTTP Verbs (POST,GET, PUT, DELETE) with a single function in JavaScript

//GET
function ajaxAsync(Url, Data = {}, type = "", callback = function () { alert("Done"); }) {
    $.ajax({
        url: Url,
        contentType: 'application/json; charset=UTF-8',
        type: type,
        crossDmain: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, OPTIONS'
        },
        data: Data,
        beforeSend: function () {
            //document.getElementById('spinner').style.display = "block";
            $('#loader').removeClass("loader");
            $("body > *:not('#loader')").addClass("blur-out");
        },
        success: function (data) {
            submitted = true;
            callback(data);
            //$('.btn').removeClass('hidden');

        },
        failure: function (msg) {

            alert('failure');

        },
        complete: function () {
            //document.getElementById('spinner').style.display = "none";
            //$('#loader').addClass("loader");
            //$("body > *:not('#loader')").removeClass("blur-out");
        }

    });
}


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
    let url = apiBaseUrl + 'WeatherForecast/POST';
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

