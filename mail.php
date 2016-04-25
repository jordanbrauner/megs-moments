<?php

  if (isset($_POST["submit"])) {

    $firstName = $_POST["firstname"];
    $lastName = $_POST["lastname"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $pType = $_POST["pType"];
    $message = $_POST["message"];
    $from = "From: Meg's Moments";
    $to = "newboomoon@gmail.com";
    $subject = "$firstName $lastName has contacted you.";

    $body = "$firstName $lastName has filled out your form.\nDetails below:\n\nEmail: $email\nPhone: $phone\nProject Type: $pType\n\nMessage: $message";

    // Check fields
    if (!$_POST["firstname"] || !$_POST["lastname"]) {
      $errName = "Please enter your full name";
    }

    if (!$_POST["email"]) {
      $errEmail = "Please enter your email address";
    }

    if (!$_POST["message"]) {
      $errMessage = "Please enter your message";
    }

    // If no errors, send the email
    if (!$errName && !$errEmail && !$errMessage) {
      if (mail ($to, $subject, $body, $from)) {
        // $result = "<div>Thank you! I will be in touch soon.</div>";
      } else {
        // $result = "<div>Sorry, there was an error. Please try again later.</div>";
      }
    } else {
      // $result = "<div>Please enter your name.</div>"
    }

  }

?>
