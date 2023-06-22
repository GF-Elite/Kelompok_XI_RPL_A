<?php

function encode_html($text) {
    $encoded_text = htmlspecialchars($text);
    return $encoded_text;
}

if (isset($_POST['html_text'])) {
    $html_text = $_POST['html_text'];
    $encoded_text = encode_html($html_text);
} else {
    $html_text = '';
    $encoded_text = '';
}

?>

<!DOCTYPE html>
<html>
<head>
    <title>HTML Encoder</title>
</head>
<body>
    <h1>HTML Encoder</h1>
    <form method="post" action="">
        <textarea name="html_text" rows="5" cols="40"><?php echo $html_text; ?></textarea><br>
        <input type="submit" value="Encode">
    </form>
    <br>
    <h2>Encoded HTML:</h2>
    <pre><?php echo $encoded_text; ?></pre>
</body>
</html>
