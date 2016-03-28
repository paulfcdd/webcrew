<?php

$formData = file_get_contents("php://input");
$formDataObj = json_decode($formData);

$clientName = $formDataObj->clientName;
$companyName  = $formDataObj->companyName;
$clientEmail  = $formDataObj->clientEmail;
$clientPhone = $formDataObj->clientPhone;
$projDescr = $formDataObj->projDescr;

//Send an email

$to      = 'paulfcdd@gmail.com';
$subject = 'Новый заказ';
$message = "
Имя клиента: $clientName
Компания: $companyName
Почта: $clientEmail
Телефон: $clientPhone
Описание: $projDescr
";

$headers = 'From: webmaster@webcrew.tk' . "\r\n" .
    'Reply-To: webcrew' . "\r\n" .
    'X-Mailer: PHP/' . phpversion();

$sendMail =  @mail($to, $subject, $message, $headers);

if ($sendMail == true) {
    echo 'success';
} else {
    echo 'not success';
}