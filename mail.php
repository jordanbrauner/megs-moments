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
  $subject = "Meg's Moments: Form Submitted";
  $body = "<b>From</b>: $firstName $lastName \n <b>E-Mail</b>: $email\n <b>Phone</b>: $phone \n <b>Project Type</b>: $pType \n <b>Message</b>:\n $message";

  if ($_POST["submit"]) {
    if (mail ($to, $subject, $body, $from)) {
      echo "<p>Your message has been sent!</p>";
    } else {
      console.log()
      echo "<p>Something went wrong. Go back and try again.</p>";
    }
  }

?>
