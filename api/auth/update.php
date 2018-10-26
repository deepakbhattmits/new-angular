<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "UPDATE users SET FirstName ='$data->FirstName',  LastName ='$data->LastName', username ='$data->username',password ='$data->password' WHERE id = $data->id ";
$qry = $conn->query($sql);
if($data->username){
	echo json_encode(['response'=>'User Updated']);
}
$conn->close();
?>
