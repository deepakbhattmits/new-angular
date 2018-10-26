<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "INSERT INTO users (FirstName, LastName, username, password)
VALUES ('$data->FirstName', '$data->LastName','$data->username', '$data->password')";

$checkSql = "SELECT username FROM users WHERE username = '$data->username'";
$cres = $conn->query($checkSql);
// print_r($cres->num_rows);

if($data->username){
	if ( $cres->num_rows > 0 ) {	
		//  echo "UserName already Exist, please try another username";
		echo json_encode(['response'=>'UserName already Exist, please try another username']);
	} else {
		$qry = $conn->query($sql);
		echo json_encode(['response'=>'Registration successful']);
	}
}

$conn->close();
?>
