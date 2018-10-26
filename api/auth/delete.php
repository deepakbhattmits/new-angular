<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";
$sql = "DELETE FROM users WHERE id = '$data->id'";
$result = $conn->query($sql);
if ($result) {
 echo json_encode(['response'=>'User Deleted']);
}
$conn->close();
?>
