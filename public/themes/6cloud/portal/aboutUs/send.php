<?php
/**
 * This example shows making an SMTP connection with authentication.
 */

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Asia/Shanghai');

require 'PHPMailerAutoload.php';

//Create a new PHPMailer instance
$mail = new PHPMailer;
//Tell PHPMailer to use SMTP
$mail->isSMTP();
//Enable SMTP debugging
// 0 = off (for production use)
// 1 = client messages
// 2 = client and server messages
$mail->SMTPDebug = 0;
//Ask for HTML-friendly debug output
$mail->Debugoutput = 'html';
//Set the hostname of the mail server
$mail->Host = "ssl://smtp.6cloudtech.com";
//Set the SMTP port number - likely to be 25, 465 or 587
$mail->Port = 465;
//Whether to use SMTP authentication
$mail->SMTPAuth = true;
//Username to use for SMTP authentication
$mail->Username = "liujiaqi@6cloudtech.com";
//Password to use for SMTP authentication
$mail->Password = "LJQ.com123";
$mail->Encoding = "base64";
$mail->CharSet = 'UTF-8';
//设置发件人姓名
$name = $_POST['name'];
$jobtype = $_POST['jobtype'];
$xzjob = $_POST['xzjob'];
$szjob = $_POST['szjob'];
$sex = $_POST['sex'];
$phone = $_POST['phone'];
$school = $_POST['school'];
$email = $_POST['email'];
$uploadname = $_POST['uploadname'];
//如果是校招
if ($jobtype == "1") {
	//邮件主题
	$mail->Subject = '【校招】-' .$name. '('.$sex.')-'.$xzjob;
	$from = $name.'-'.$school;
	$title = '【校招】-' .$name. '('.$sex.')-'.$xzjob;
}else{
	$mail->Subject = '【社招】-'.$name. '('.$sex.')-'.$szjob;
	$from = $name;
	$title = '【社招】-'.$name. '('.$sex.')-'.$szjob;
}
$mail->addAttachment('../upload/resume/'.$uploadname);
//Set who the message is to be sent from
$mail->setFrom('liujiaqi@6cloudtech.com', $from);
//Set an alternative reply-to address
$mail->addReplyTo($email, $name);
//Set who the message is to be sent to
$mail->addAddress('wumengyue@6cloudtech.com', '招聘收件人');
$mail->addAddress('liujiaqi@6cloudtech.com', '招聘收件人');
//Set the subject line
// $mail->Subject = 'PHPMailer SMTP test';
//Read an HTML message body from an external file, convert referenced images to embedded,
$mailcontent = '<h1 style="text-align:center;">
	'.$title.'
</h1>
<h2>
	&nbsp; &nbsp; 收到来自：<span style="color:#E53333;">'.$_POST['name'].'&nbsp;</span>在官网提交的&nbsp;<span style="color:#E53333;">'.($jobtype == '1'?'校园招聘':'社会招聘').'&nbsp;</span>请求，请及时处理。
</h2>
<h3>
	&nbsp; &nbsp; &nbsp;姓&nbsp; &nbsp; &nbsp;名：<span style="color:#003399;">'.$_POST['name'].'</span>
</h3>
<p>
    <span style="color:#003399;"></span>
</p>
<h3>
	&nbsp; &nbsp; &nbsp;性&nbsp; &nbsp; &nbsp;别：<span style="color:#003399;">'.$_POST['sex'].'</span>
</h3>
<h3>
	&nbsp; &nbsp; &nbsp;岗&nbsp; &nbsp; &nbsp;位：<span style="color:#003399;">'.($jobtype == '1'?$xzjob:$szjob).'</span>
</h3>
<p>
    <span style="color:#003399;"></span>
</p>
'.($jobtype == '1'?'<h3>
	&nbsp; &nbsp; &nbsp;学&nbsp; &nbsp; &nbsp;校：<span style="color:#003399;">'.$school.'</span>
</h3>
<p>
    <span style="color:#003399;"></span>
</p>':'').'
<h3>
	<span style="color:#003399;">&nbsp; &nbsp; <span style="color:#000000;">&nbsp;手&nbsp; &nbsp; &nbsp;机 </span>：'.$_POST['phone'].'</span>
</h3>
<h3>
</h3>
<p>
    <span style="color:#003399;"></span>
</p>
<h3>
	<span style="color:#003399;">&nbsp; &nbsp; &nbsp;<span style="color:#000000;">邮箱地址：</span>'.$_POST['email'].'</span>
</h3>
<p>
    <span style="color:#003399;"></span>
</p>
<p style="text-align:right;">
    &nbsp; &nbsp;<a href="http://www.6cloudtech.com" target="_blank"><span style="color:#003399;">www.</span><span style="color:#003399;">6cloudtech.com</span><span style="color:#003399;"></span></a>
</p>
<br />
';
//convert HTML into a basic plain-text alternative body
// $mail->msgHTML(file_get_contents('jobmail.html'), dirname(__FILE__));
$mail->msgHTML($mailcontent, dirname(__FILE__));
// $mail->Body = $mailcontent; 
//Replace the plain text body with one created manually
// $mail->AltBody = 'This is a plain-text message body';
//Attach an image file
// $mail->addAttachment('img/bg1.png');

//send the message, check for errors
if (!$mail->send()) {
    echo "投递失败: " . $mail->ErrorInfo;
} else {
    echo "投递成功!";
}