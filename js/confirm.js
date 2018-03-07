//var datawhole= window.location.href.split('?')[1].toString();
//var data = decodeURI(datawhole.split('&'));
//var data[0];
function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) {
            return decodeURI(pair[1]);
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
var address =  getQueryVariable('address');
var quantityEE = getQueryVariable('quantityEE');
var quantityEN = getQueryVariable('quantityEN');

$( document ).ready(function() {
    console.log( "ready!" );
    document.getElementById('firstName').innerHTML = firstname;
    document.getElementById('lastName').innerHTML = lastname;
    document.getElementById('company').innerHTML = company;
    document.getElementById('email').innerHTML = email;
    document.getElementById('phone').innerHTML = phone;
    document.getElementById(method).style.display = 'block'
    document.getElementById('address').innerHTML= address;
    document.getElementById('quantityEE').innerHTML= quantityEE;
    document.getElementById('quantityEN').innerHTML= quantityEN;
    priceCalculation() ;
});

function priceCalculation() {
    var price = '';
    var MKEE = parseFloat(document.getElementById('quantityEE').innerHTML);
    var MKEN = parseFloat(document.getElementById('quantityEN').innerHTML);
    var quantity = MKEE + MKEN;
    var games = '';
    var transport = '';
    if (quantity > 1000) {
        price = quantity * 6.35;
    } else if (quantity > 500) {
        price = quantity * 8.63;
    } else if (quantity > 250) {
        price = quantity * 9.6;
    } else if (quantity > 100) {
        price = quantity * 12;
    } else if (quantity > 50) {
        price = quantity * 13.2;
    } else if (quantity < 1000) {
        price = quantity * 14.4;
    }
    games = price;
    document.getElementById('MKPrice').innerHTML = Math.round(price * 100) / 100 + '€';
    if (quantity == 1) {
        transport = 1.26;
        price += transport
    }
    if (quantity == 2 || quantity == 3 || quantity == 4) {
        transport = 1.46;
        price += transport
    }
    if (quantity >= 5 && quantity <= 10) {
        transport = 1.84;
        price += transport
    }
    if (quantity >= 11 && quantity <= 20) {
        transport = 1.90;
        price += transport
    }
    if (quantity >= 21 && quantity <= 30) {
        transport = 2.10;
        price += transport
    }
    if (quantity >= 31 && quantity <= 59) {
        transport = 3.54;
        price += transport
    }
    if (quantity >= 60 && quantity <= 72) {
        transport = 3.7;
        price += transport
    }
    if (method == "omniva") {
        if (quantity <= 4) {
            price = price + 2.25;
            transport = transport + 2.25;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
        if (quantity >= 5 && quantity <= 30) {
            price = price + 2.89;
            transport += 2.89;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
        if (quantity >= 31) {
            price = price + 3.99;
            transport += 3.99;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }

    }
    if (method == "smartpost") {
        if (quantity <= 4) {
            price = price + 2.35;
            transport = transport + 2.35;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
        if (quantity >= 5 && quantity <= 30) {
            price = price + 3.02;
            transport = transport + 3.02;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
        if (quantity >= 31) {
            price = price + 4.05;
            transport += 4.05;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
    }
    if (method == "EEkuller") {
        if (quantity <= 20) {
            price = price + 2.1;
            transport += 2.1;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
        if (quantity >= 21 && quantity <= 80) {
            price = price + 3;
            transport += 3;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
        if (quantity >= 81) {
            price = price + 3.5;
            transport += 3.5;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
    }
    if (method == "EUkuller") {
        if (quantity == 1) {
            price = price + 6.2;
            transport += 6.2;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
        if (quantity == 2 || quantity == 3) {
            price = price + 10;
            transport += 10;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
        if (quantity >= 4 && quantity <= 6) {
            price = price + 16.8;
            transport += 16.8;
            document.getElementById("transport").innerHTML = Math.round(transport * 100) / 100 + "€";
        }
    }
    document.getElementById('sum').innerHTML = Math.round(price * 100) / 100 + '€';

}

$("#orderButton").click(function () {
    event.preventDefault(); // prevent default submit behaviour

    $.ajax({
        url: "../mail/order_form.php",
        type: "POST",
        data: {
            firstname: firstname,
            lastname: lastname,
            company: company,
            email: email,
            phone: phone,
            method: method,
            address: address,
            quantityEE: quantityEE,
            quantityEN: quantityEN,
            price: price,
            transport: transport,
            games: games
        },
        success: function (data) {
            //document.location.href = data;
            console.log(data);
        }
    });




});
