<?php

$data = json_decode(file_get_contents("php://input"));
include "db.php";
// echo "test new : ";
// echo print_r($data->id);
$sql = "SELECT * FROM states WHERE country_id = $data->id";
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
