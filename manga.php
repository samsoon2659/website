<?php
	$conn = mysqli_connect("fdb32.awardspace.net", "3990532_samsoon2659", "kk1012kj0126", "3990532_samsoon2659");
	$sql = "
		select * from manga
	";
	$result = mysqli_query($conn, $sql);
	if($result === false){
		echo mysqli_error($conn);
	}
	$num = $result->num_rows;
	
	echo '<h1>만화</h1>';
	while($row = mysqli_fetch_array($result)) {
		echo '<h2>'.$row['name'].'</h2>';
		echo $row['author'];
	}
?>