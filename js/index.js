function sendReq() {
    var payload = {
        "name": "stationTest"
        , "totalSpaces": 43
    };
    var req = {
        type: "POST"
        , url: "http://localhost:8080/api/v1/makeLot"
        , contentType: 'application/json; charset=UTF-8'
        , data: JSON.stringify(payload)
    };
    $.ajax(req).done(function (data) {
        console.log(data);
    }).fail(function (data) {
        console.log("you fail", data);
    });
}