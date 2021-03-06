/**
 * Created by m on 30.12.15.
 */

// Api Calls
function send_comment(dumpster_id, voting, comment, name, on_success, on_error) {
    var url = backend_url + "/votings/";
    var data = {
        "resource": dumpster_id,
        "value": voting,
        "comment": comment,
        "user": {
            "name": name
        }
    };
    $.ajax({
        type: "POST",
        url: url,
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: on_success,
        error: on_error,
        failure: null
    });
}
function add_dumpster(title, lng, lat, voting, comment, name, on_success, on_error) {
    var url = backend_url + "/resources/";
    var data = {
        "type": "Feature",
        "geometry": {
            "type": "Point",
            "coordinates": [lng, lat]
        },
        "properties": {
            "name": title,
            "voting_set": [
                {
                    "value": voting,
                    "comment": comment,
                    "name": name
                }
            ]
        }
    };
    $.ajax({
        type: "POST",
        url: url,
        // The key needs to match your method's input parameter (case-sensitive).
        data: JSON.stringify(data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: on_success,
        error: on_error,
        failure: null
    });


}
function getDumpsterId() {
    return id = $("#dumpster_id").val();
}
