var method = '';

function deliver(option) {
    console.log(option);
    document.getElementById('delivery-options').style.display = 'none';
    document.getElementById('smartpost').style.display = 'none';
    document.getElementById('omniva').style.display = 'none';
    document.getElementById('EEkuller').style.display = 'none';
    document.getElementById('EUkuller').style.display = 'none';
    document.getElementById(option).style.display = 'block';
    method = option;
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
    window.location.href = '/confirm.html?'+'firstname=' firstname + '&lastname='lastname+ '&company='company+ '&email='email+ '&phone='phone+ '&method='method+ '&address='address;


    
}
