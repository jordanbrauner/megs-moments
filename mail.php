<?php

  // Grab data from form
  $firstName = $_POST["firstname"];
  $lastName = $_POST["lastname"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $pType = $_POST["pType"];
  $message = $_POST["message"];

  // More information for email
  $from = "From: Meg's Moments";
  $to = "newboomoon@gmail.com";
  $subject = "$firstName $lastName has contacted you.";
  $body = "$firstName $lastName has filled out your form.\nDetails below:\n\nEmail: $email\nPhone: $phone\nProject Type: $pType\n\nMessage: $message";

  if ($_POST["submit"]) {
    if (mail ($to, $subject, $body, $from)) {
      echo "<p>Your message has been sent!</p>";
    } else {
      echo "<p>Something went wrong. Go back and try again.</p>";
    }
  }

?>
