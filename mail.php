<?php

  // Grab data from form
  $firstName = $_POST["firstname"];
  $lastName = $_POST["lastname"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  // More information for email
  $from = "From: Meg's Moments";
  $to = "newboomoon@gmail.com";
  $subject = "Meg's Moments: Form Submitted";
  $body = "From: $firstName\n E-Mail: $email\n Phone: $phone \n Message:\n $message";

  if ($_POST["submit"]) {
    if (mail ($to, $subject, $body, $from)) {
      echo "<p>Your message has been sent!</p>";
    } else {
      echo "<p>Something went wrong. Go back and try again.</p>";
    }
  }

?>
