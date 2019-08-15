<?php
/**
 * This example shows making an SMTP connection with authentication.
 */

//SMTP needs accurate times, and the PHP time zone MUST be set
//This should be done in your php.ini, but this is how to do it if you don't have access to that
date_default_timezone_set('Asia/Shanghai');

require '../../simplewind/vendor/phpmailer/phpmailer/PHPMailerAutoload.php';


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
$mail->SMTPSecure = "ssl";
//Set the hostname of the mail server
//服务器,发送邮箱帐号公司的SMTP服务器
$mail->Host = "smtp.qq.com";
//Set the SMTP port number - likely to be 25, 465 or 587
// SMTP服务器的端口号
$mail->Port = 465;
//Whether to use SMTP authentication


$mail->SMTPAuth = true;
//Username to use for SMTP authentication
//这里填写发件邮箱账号
$mail->Username = "867329774@qq.com";
//Password to use for SMTP authentication
//这里填写发件邮箱的密码
$mail->Password = "aawtbkdcpmzpbecd";
$mail->Encoding = "base64";
$mail->CharSet = 'UTF-8';

//Set who the message is to be sent from
// $mail->setFrom('liujiaqi@6cloudtech.com', $from);
//发件人地址
$mail->From = "867329774@qq.com"; 
//Set an alternative reply-to address


 
// $mail->addAddress('liujiaqi@6cloudtech.com', '招聘收件人');
$mail->addAddress('daijiuhu@6cloudtech.com', '收件人');
$mail->Subject = "【合作发展】 来自 ".$_POST['companyName']."公司";
//Set the subject line
// $mail->Subject = 'PHPMailer SMTP test';
//Read an HTML message body from an external file, convert referenced images to embedded,
$mailcontent = '<h1 style="text-align:center;">
	来自【<span style="color:#E53333;">'.$_POST['companyName'].'</span>】的合作发展意向
</h1>
<h2>
	&nbsp; &nbsp; 收到来自客户：<span style="color:#E53333;">'.$_POST['name'].'&nbsp;</span>在官网提交的&nbsp;<span style="color:#E53333;">'.$_POST['intention'].'&nbsp;</span>(产品&amp;应用)合作发展意向请求，请及时处理。
</h2>
<h3>
	&nbsp; &nbsp; &nbsp;公司名称：<span style="color:#003399;">'.$_POST['companyName'].'</span>
</h3>
<p>
    <span style="color:#003399;"></span>
</p>
<h3>
	&nbsp; &nbsp; &nbsp;产品意向：<span style="color:#003399;">'.$_POST['intention'].'</span>
</h3>
<p>
    <span style="color:#003399;"></span>
</p>
<h3>
	&nbsp; &nbsp; <span style="color:#000000;">&nbsp;</span><span style="color:#000000;">联 系 人 </span><span style="color:#000000;">：</span><span style="color:#003399;">'.$_POST['name'].'</span>
</h3>
<p>
    <span style="color:#003399;"></span>
</p>
<h3 style="color:#003399;">
	<span style="color:#000000;">&nbsp; &nbsp; &nbsp;职&nbsp; &nbsp; &nbsp;务&nbsp;</span><span style="color:#000000;">：</span>'.$_POST['career'].'
</h3>
<p>
    <span style="color:#003399;"></span>
</p>
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
<h3 style="color:#003399;">
	<span style="color:#000000;">&nbsp; &nbsp; &nbsp;联系电话</span><span style="color:#000000;">：</span>'.$_POST['telPhone'].'
</h3>
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