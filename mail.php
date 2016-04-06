<?php

  // Grab data from form
  $firstName = $_POST["first-name"];
  $lastName = $_POST["last-name"];
  $email = $_POST["email"];
  $phone = $_POST["phone"];
  $message = $_POST["message"];

  // More information for email
  $to = "newboomoon@gmail.com";
  $from = "From: Meg\'s Moments";
  $subject = "Meg's Moments: Form Submitted";

  $body = "From: $firstName $lastName\n E-Mail: $email\n Phone: $phone \n Message:\n $message";

  if ($_POST["submit"]) {
    if (mail ($to, $subject, $body, $from)) {
      echo "<p>Your message has been sent!</p>";
    } else {
      echo "<p>Something went wrong. Go back and try again.</p>";
    }
  }

?>
