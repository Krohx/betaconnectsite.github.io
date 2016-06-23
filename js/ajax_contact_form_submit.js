/*
$(document).ready(
    $('#send_message').click(function(e){
        e.preventDefault();
        alert('Clicked');
        send_message();
    })
);


function contact_us_form_to_json(){
    var viewArr = $('#contact-form').serializeArray();
    var view = {};

    for (var i in viewArr) {
        view[viewArr[i].name] = viewArr[i].value;
    }
    return view;
    //Do stuff with view object here (e.g. JSON.stringify?)
}


function send_message(){
    var form_json = contact_us_form_to_json();
    console.log(form_json); //DEBUG

    $.ajax({
        type: 'POST',
        url: 'http://localhost:4096/',
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        // Flask expects this attribute `data`. If it
        // would be empty, give it the value '{}'.
        // This would prevent a bad HTTP request error (400) in Flask
        // For more valid minimal JSON strings, see:
        // http://stackoverflow.com/questions/30621802/why-does-json-parse-fail-with-the-empty-string/30621997#30621997
        data: JSON.stringify(form_json),
        success: function(response) {
            poll_success = true;
            
            alert('Success!');
        },
        error: function(error) {
            alert('Failed!'); // DEBUG
            poll_success = false;
        }
    });
    return poll_success;
}*/