// domain = 'https://summitlearning.org'

var body = document.getElementsByTagName("body")[0];

// CHECK PAGE NAME AND SET VARIABLES
if (window.location.pathname == '/my/announcements') {
    var domain = 'https://summitlearning.org';
    var page = 'announcements';
    
    // create data-url() for page and write into body
    var data_url = domain + '/api/v1/users/self/activity_stream?per_page=100';
    body.setAttribute('data-url', data_url);
}