<?

	$FIO = $_POST['FIO'];
	$score = $_POST['score'];
	$ball = $_POST['ball'];
	$dbh = new PDO('mysql:host=localhost;dbname=cs88659_tbdpzte', 'cs88659_tbdpzte', 'cs88659tbdP1');
	$stmt = $dbh->prepare("INSERT INTO `order`(`date`, FIO, score, ball)
		VALUES (NOW(), :FIO, :score, :ball)");
	$stmt->bindParam(':FIO', $FIO);
	$stmt->bindParam(':score', $score);
	$stmt->bindParam(':ball', $ball);
	$stmt->execute();	
	echo '1';