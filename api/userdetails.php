<?php
include "db.php";
$sql = "SELECT * FROM userdetails ORDER BY id DESC";
$result = $conn->query($sql);
if ($result->num_rows > 0) {
     $data = array() ;
    while($row = $result->fetch_assoc()) {
        $data[] = $row;
    }
    echo json_encode($data);
} else {
    echo "0";
}
$conn->close();
?>
