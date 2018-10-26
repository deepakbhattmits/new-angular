<?php
$data = json_decode(file_get_contents("php://input"));

include "db.php";
$sql = "INSERT INTO users (FirstName, LastName, username, password)
VALUES ('$data->FirstName', '$data->LastName','$data->username', '$data->password')";
if($data->FirstName){
	$qry = $conn->query($sql);
}
$conn->close();
?>
