// domain = 'https://summitlearning.org'

var bodyFunction = document.getElementById("BODY")[0].getAttribute("onload");

// CHECK PAGE NAME AND SET VARIABLES
if (window.location.pathname == '/my/announcements') {
    var domain = 'https://summitlearning.org';
    var page = 'announcements';
    
    // create data-url() within <body> tag
    document.getElementById("BODY")[0].setAttribute("data-url", page);
}