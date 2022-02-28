<?

function getIp(){
    $keys = [
        'HTTP_CLIENT_IP',
        'HTTP_X_FORWARDED_FOR',
        'REMOTE_ADDR'
    ];
    foreach ($keys as $key) {
        if (!empty($_SERVER[$key])) {
            $ip = trim(end(explode(',', $_SERVER[$key])));
            if (filter_var($ip, FILTER_VALIDATE_IP)) {
            return $ip;
            }
        }
    }
}

$ip = getIp();


	$FIO = $_POST['FIO'];
	$score = $_POST['score'];
	$ball = $_POST['ball'];
	$dbh = new PDO('mysql:host=localhost;dbname=cs88659_dc', 'cs88659_dc', 'cs886591dC1');
	$stmt = $dbh->prepare("INSERT INTO `order`(`date`, FIO, score, ball)
		VALUES (NOW(), :FIO, :score, :ball)");
	$stmt->bindParam(':FIO', $FIO);
	$stmt->bindParam(':score', $score);
	$stmt->bindParam(':ball', $ball);
	$stmt->bindParam(':ip', $ip);
	$stmt->execute();	
	echo '1';