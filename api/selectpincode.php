<?php

$data = json_decode(file_get_contents("php://input"));
include "db.php";
// echo "test new : ";
// echo print_r($data->id);die();
$sql = "SELECT * FROM pincode WHERE cityname = '$data->cityname'";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0 results";
}
$conn->close();
?>
