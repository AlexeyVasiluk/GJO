<?php
$recepient = "vasiluk.o@gmail.com";
$customerMail = trim($_GET["mail"]);
$admin = "admin@getjoboffer.com";
$customerName = trim($_GET["name"]);
$sitename = "GETJOBOFFER.COM";
$pagetitle = "Новый пользователь с сайта $sitename";
$answerpagetitle = "Результаты Вашего тестирования на сайте $sitename";
$messageToAdmin = "Имя: " . $customerName . "<br><br>E-mail: " . $customerMail;
$answerResults = trim($_GET["results"]);
$messageToUser = "Здравствуйте, " . $customerName . "!<br><br> Ниже приведены результаты Вашего тестирования:<br><br>" . $answerResults;

$headers = "Content-type: text/html; charset=utf-8 \r\n";
$headers .= "From: <admin@getjoboffer.com>\r\n";
$headers .= "Reply-To: admin@getjoboffer.com\r\n";
$headers .= "Content-type: text/html\r\n";

mail($recepient, $pagetitle, $messageToAdmin, $headers);
mail($customerMail, $answerpagetitle, $messageToUser, $headers);

header("refresh: 1; url=http://getjoboffer.com/");
echo '<script type="text/javascript">', 'alert("Результаты теста отправлены, не забудьте посмотреть в СПАМЕ :)");', '</script>';
