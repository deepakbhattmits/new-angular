<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "SELECT * FROM users WHERE username = '$data->username' AND password ='$data->password'";
$qry = $conn->query($sql);
if($data->username){
}
$conn->close();
?>
