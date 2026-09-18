<?php

require_once __DIR__ . '/env.php';

$mail->isSMTP();
$mail->Host = getenv('SMTP_HOST') ?: 'smtp.gmail.com';
$mail->SMTPAuth = true;
$mail->Port = getenv('SMTP_PORT') ?: 587;
$mail->Username = getenv('SMTP_USERNAME');
$mail->Password = getenv('SMTP_PASSWORD');
$mail->SMTPSecure = 'tls';
