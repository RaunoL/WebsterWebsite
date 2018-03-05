//var datawhole= window.location.href.split('?')[1].toString();
//var data = decodeURI(datawhole.split('&'));
//var data[0];
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return pair[1];
        }
    }
    return (false);
}

var firstname = getQueryVariable('firstname');
var lastname = getQueryVariable('lastname');
var company = getQueryVariable('company');
var email = getQueryVariable('email');
var phone = getQueryVariable('phone');
var method = getQueryVariable('method');
var address = getQueryVariable('address');
