<html>
<!-- paulirish.com/2008/conditional-stylesheets-vs-css-hacks-answer-neither/ -->
<!--[if lt IE 7]> <html class="no-js ie6 oldie" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js ie7 oldie" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js ie8 oldie" lang="en"> <![endif]-->
<!--[if IE 9]>    <html class="no-js ie9" lang="en"> <![endif]-->
<!-- Consider adding an manifest.appcache: h5bp.com/d/Offline -->
<!--[if gt IE 9]><!-->
<html class="no-js" lang="en" itemscope itemtype="http://schema.org/Product">
<!--<![endif]-->
<head>

<!-- Meta tags & title /-->
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
<title>Edmonton Movie Club</title>
<meta name="description" content="" />
<meta name="keywords" content="" />
<link rel="shortcut icon" href="../favicon1.png" type="image/x-icon" />
<!-- Favicon /-->

<!-- Facebook Metadata /-->
<meta property="fb:page_id" content="" />
<meta property="og:image" content="" />
<meta property="og:description" content=""/>
<meta property="og:title" content=""/>

<!-- Google+ Metadata /-->
<meta itemprop="name" content="">
<meta itemprop="description" content="">
<meta itemprop="image" content="">
<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1">

<!-- Stylesheets /-->
<link rel="stylesheet" href="../css/gumby.css">
<!-- Gumby Frameworks /-->
<link rel="stylesheet" href="../css/style.css">
<!-- Main stylesheet /-->
<link rel="stylesheet" href="../css/metrize.css">
<!-- Metrize Icon /-->
<link rel="stylesheet" href="../css/hoverex-all.css" >
<!-- Hover Info on Member /-->

</head>
<center>
		<body>
		<div class="container">
				<div class="row">
						<div class="twelve columns centered"> <br>
								<br>
								<h2>We'll be soon in touch !</h2>
						</div>
				</div>
				<div class="row" style="margin-top:35px;">
						<div class="twelve columns centered"> <a class="buttom" href="../index.html">Back to the website</a> </div>
				</div>
		</div>
		</body>
</center>
</html>















<?php
if(isset($_POST['email'])) {
	
	// CHANGE THE TWO LINES BELOW
	$email_to = "info@edmontonmovieclub.ca";
	
	$email_subject = "Message from EMC Website";
	
	
	function died($error) {
		// your error code can go here
		echo "We're sorry, but there's errors found with the form you submitted.<br /><br />";
		echo $error."<br /><br />";
		echo "Please go back and fix these errors.<br /><br />";
		die();
	}
	
	// validation expected data exists
	if(!isset($_POST['name']) ||
		!isset($_POST['email']) ||
		!isset($_POST['phone']) ||
		!isset($_POST['message'])) {
		died('We are sorry, but there appears to be a problem with the form you submitted.');		
	}
	
	$first_name = $_POST['name']; // required
	$email_from = $_POST['email']; // required
	$telephone = $_POST['phone']; // not required
	$comments = $_POST['message']; // required
	
	$error_message = "";
  if(strlen($error_message) > 0) {
  	died($error_message);
  }
	$email_message = "Form details below.\n\n";
	
	function clean_string($string) {
	  $bad = array("content-type","bcc:","to:","cc:","href");
	  return str_replace($bad,"",$string);
	}
	
	$email_message .= "Name: ".clean_string($first_name)."\n";
	$email_message .= "Email: ".clean_string($email_from)."\n";
	$email_message .= "Telephone: ".clean_string($telephone)."\n";
	$email_message .= "Comments: ".clean_string($comments)."\n";
	
	
// create email headers
$headers = 'From: '.$email_from."\r\n".
'Reply-To: '.$email_from."\r\n" .
'X-Mailer: PHP/' . phpversion();
@mail($email_to, $email_subject, $email_message, $headers);  
?>

<!-- place your own success html below -->

<!--Thank you for contacting us. We will be in touch with you very soon.-->

<?php
}
die();
?>