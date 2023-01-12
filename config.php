<?php
$servername = "localhost";
$username = "root";
$password = "root";

$conn = new mysqli($servername, $username, $password);

if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$txtName = $_POST['txtName']?? '';
$txtPhoneNumber = $_POST['txtPhoneNumber']?? '';
$txtEmailID = $_POST['txtEmailID']?? '';
$txtAddress = $_POST['txtAddress']?? '';
$txtRiceType = $_POST['txtRiceType']?? '';
$txtRoti = $_POST['txtRoti']?? '';
$txtVegetarian = $_POST['txtVegetarian']?? '';
$txtAdditionalInfo = $_POST['txtAdditionalInfo']?? '';
$sql = "INSERT INTO tiffinbusiness.customerdetails 

(name,phone_number,Email_ID,address,rice_type,roti,additional_info,non_veg) 
VALUES('$txtName','$txtPhoneNumber','$txtEmailID','$txtAddress','$txtRiceType','$txtRoti','$txtAdditionalInfo','$txtVegetarian')";

$insert_response = $conn->query($sql);

if($insert_response) {
    $success = 1;
} else {
    $success = 0;
}
$respone['success'] = $success;
exit(json_encode($respone));