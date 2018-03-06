var method = '';

function priceCalculation() {
    var price = '';
    var MKEE = parseFloat(document.getElementById('quantityEE').value);
    var MKEN = parseFloat(document.getElementById('quantityEN').value);
    var quantity = MKEE + MKEN;
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

function deliver(option) {

    document.getElementById('delivery-options').style.display = 'none';
    document.getElementById('smartpost').style.display = 'none';
    document.getElementById('omniva').style.display = 'none';
    document.getElementById('EEkuller').style.display = 'none';
    document.getElementById('EUkuller').style.display = 'none';
    document.getElementById(option).style.display = 'block';
    method = option;
    console.log(option);
    priceCalculation();
}

function validate() {
    console.log('validate');
    var address = ''
    var firstname = document.getElementsByName('firstname')[0].value;
    var lastname = document.getElementsByName('lastname')[0].value;
    var company = document.getElementsByName('company')[0].value;
    var email = document.getElementsByName('email')[0].value;
    var phone = document.getElementsByName('phone')[0].value;
    var quantityEE = document.getElementById('quantityEE').value;
    var quantityEN = document.getElementById('quantityEN').value;
    document.getElementById('validation-error').style.display = 'block';
    if (firstname == '') {
        document.getElementById('firstname').style.display = 'block';
        return;
    } else {
        document.getElementById('firstname').style.display = 'none';
    }

    if (lastname == '') {
        document.getElementById('lastname').style.display = 'block';
        return;
    } else {
        document.getElementById('lastname').style.display = 'none';
    }

    if (email == '') {
        document.getElementById('email').style.display = 'block';
        return;
    } else {
        document.getElementById('email').style.display = 'none';
    }

    if (phone == '') {
        document.getElementById('phone').style.display = 'block';
        return;
    } else {
        document.getElementById('phone').style.display = 'none';
    }

    if (method == '' || method == 'delivery-options') {
        document.getElementById('delivery-error').style.display = 'block';
        return;
    } else {
        document.getElementById('delivery-error').style.display = 'none';
    }

    if (method == 'smartpost') {
        address = document.getElementById('smartpost_select0')[document.getElementById('smartpost_select0').selectedIndex].text;
    }
    if (method == 'omniva') {
        address = document.getElementById('omniva_select1')[document.getElementById('omniva_select1').selectedIndex].text;
    }
    if (method == 'EEkuller') {
        var addressEE = document.getElementsByName('addressEE')[0].value;
        var cityEE = document.getElementsByName('cityEE')[0].value;
        var postalCodeEE = document.getElementsByName('postalCodeEE')[0].value;
        if (addressEE == '') {
            document.getElementById('addressEE').style.display = 'block';
            return;
        } else {
            document.getElementById('addressEE').style.display = 'none';
        }
        if (cityEE == '') {
            document.getElementById('cityEE').style.display = 'block';
            return;
        } else {
            document.getElementById('cityEE').style.display = 'none';
        }
        if (postalCodeEE == '') {
            document.getElementById('postalCodeEE').style.display = 'block';
            return;
        } else {
            document.getElementById('postalCodeEE').style.display = 'none';
        }
        address = addressEE + ', ' + cityEE + ', ' + postalCodeEE;

    }
    if (method == 'EUkuller') {
        var addressEU = document.getElementsByName('addressEU')[0].value;
        var cityEU = document.getElementsByName('cityEU')[0].value;
        var postalCodeEU = document.getElementsByName('postalCodeEU')[0].value;
        var country = document.getElementsByName('country')[0].value;

        if (addressEU == '') {
            document.getElementById('addressEU').style.display = 'block';
            return;
        } else {
            document.getElementById('addressEU').style.display = 'none';
        }

        if (cityEU == '') {
            document.getElementById('cityEU').style.display = 'block';
            return;
        } else {
            document.getElementById('cityEU').style.display = 'none';
        }

        if (postalCodeEU == '') {
            document.getElementById('postalCodeEU').style.display = 'block';
            return;
        } else {
            document.getElementById('postalCodeEU').style.display = 'none';
        }

        if (country == '') {
            document.getElementById('country').style.display = 'block';
            return;
        } else {
            document.getElementById('country').style.display = 'none';
        }
        address = addressEU + ', ' + cityEU + ', ' + postalCodeEU + ', ' + country;
    }
    if (quantityEE == '0' && quantityEN == '0') {
        document.getElementById('quantity-error').style.display = 'block';
        return;
    } else {
        document.getElementById('quantity-error').style.display = 'none';
    }
    document.getElementById('validation-error').style.display = 'none';
    window.location.href = '/confirm.html?' + 'firstname=' +
        firstname + '&lastname=' +
        lastname + '&company=' +
        company + '&email=' +
        email + '&phone=' +
        phone + '&method=' +
        method + '&address=' +
        address + '&quantityEE=' +
        quantityEE + '&quantityEN=' +
        quantityEN;



}
