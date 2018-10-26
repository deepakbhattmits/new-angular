<?php
$data = json_decode(file_get_contents("php://input"));
include "db.php";

$sql = "SELECT * FROM users WHERE id = '$data->id'";
$result = $conn->query($sql);
if ($result->num_rows == 1 ) {
	 // output data of each row
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
}
echo json_encode($data);
$conn->close();
?>


