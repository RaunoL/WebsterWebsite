<?php
if(empty($_POST['name'])      ||
   empty($_POST['email'])     ||
   empty($_POST['phone'])     ||
   !filter_var($_POST['email'],FILTER_VALIDATE_EMAIL))
   {
   return false;
   }
$firstname = strip_tags(htmlspecialchars($_POST['firstname']));
$lastname = strip_tags(htmlspecialchars($_POST['lastname']));
$email_address = strip_tags(htmlspecialchars($_POST['email']));
$phone = strip_tags(htmlspecialchars($_POST['phone']));
$method = strip_tags(htmlspecialchars($_POST['method']));
$address = strip_tags(htmlspecialchars($_POST['address']));
$quantityEE = strip_tags(htmlspecialchars($_POST['quantityEE']));
$quantityEN = strip_tags(htmlspecialchars($_POST['quantityEN']));
$transport = strip_tags(htmlspecialchars($_POST['transport']));
$games = strip_tags(htmlspecialchars($_POST['games']));

// Create the email and send the message


$servername = "localhost";
$username = "vhost53952s2";
$password = "magusadkusimused";
$dbname = "vhost53952s2";
$conn = new mysqli($servername, $username, $password, $dbname);
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
} 



$sql = "INSERT INTO orders (firstname, lastname, email, phone, method, address, quantityEE, quantityEN, transport, games, invoice) 
VALUES ('$firstname', '$lastname', '$email_address', '$phone', '$method', '$address', '$quantityEE', '$quantityEN', '$transport', '$games', 'invoiceID')"; 
$conn->query($sql);

$conn->close();
$url = "https://payment.maksekeskus.ee/pay/1/link.html?shop=a357d355-ad05-472e-b29b-7329b3eb1bec&amount=$price&reference=$invoice&country=ee&locale=et";
//header( "Location: $url" );
echo $url;
?>
