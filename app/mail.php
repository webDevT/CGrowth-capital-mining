<?php

$recepient = "info@parktreeinvestments.com";
$sitename = "ParkThree";

$name = trim($_POST["name"]);
$email = trim($_POST["email"]);
$phone = trim($_POST["phone"]);
$msg = trim($_POST["msg"]);
$message = "Name: $name \nEmail: $email \nPhone: $phone \nText: $msg";

$pagetitle = "New message from \"$sitename\"";
mail($recepient, $pagetitle, $message, "Content-type: text/plain; charset=\"utf-8\"\n From: $recepient");