<?php

	/**
	 * 已兼容php7
	 * 注：本邮件类都是经过我测试成功了的，如果大家发送邮件的时候遇到了失败的问题，请从以下几点排查：
	 * 1. 用户名和密码是否正确；
	 * 2. 检查邮箱设置是否启用了smtp服务；
	 * 3. 是否是php环境的问题导致；
	 * 4. 将26行的$smtp->debug = false改为true，可以显示错误信息，然后可以复制报错信息到网上搜一下错误的原因；
	 * 5. 如果还是不能解决，可以访问：http://www.daixiaorui.com/read/16.html#viewpl 
	 *    下面的评论中，可能有你要找的答案。
	 *
	 *
	 * Last update time:2017/06
	 * UPDATE:
	 * 1、替换了高版本不支持的写法，如ereg、ereg_replace.
	 * 2、将 var 改为 public/private等.
	 * 3、使其兼容php7.
	 * 
	 */

	//合作发展邮件发送后台

	require_once "Smtp.class.php";
	//******************** 配置信息 ********************************
	$smtpserver = "ssl://smtp.6cloudtech.com";//SMTP服务器
	$smtpserverport =465;//SMTP服务器端口
	$smtpusermail = "liujiaqi@6cloudtech.com";//SMTP服务器的用户邮箱
	//$smtpemailto = $_POST['toemail'];//发送给谁
	$smtpemailto = "mkt@6cloudtech.com";//发送给谁
	$smtpmailcc = $_POST['cc'];//抄送给谁
	$smtpuser = "liujiaqi@6cloudtech.com";//SMTP服务器的用户帐号，注：部分邮箱只需@前面的用户名
	$smtppass = "LJQ.com123";//SMTP服务器的用户密码
	// $mailtitle = $_POST['title'];//邮件主题
	$mailtitle = "【合作发展】 来自 ".$_POST['companyName'];//来自公司的合作发展
	// $mailtitle = "【合作发展】 来自";//来自公司的合作发展
	// $mailcontent = "<h1>".$_POST['content']."</h1>";//邮件内容
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
	$mailtype = "HTML";//邮件格式（HTML/TXT）,TXT为文本邮件
	//************************ 配置信息 ****************************
	$smtp = new Smtp($smtpserver,$smtpserverport,true,$smtpuser,$smtppass);//这里面的一个true是表示使用身份验证,否则不使用身份验证.
	$smtp->debug = false;//是否显示发送的调试信息
	$state = $smtp->sendmail($smtpemailto, $smtpusermail, $mailtitle, $mailcontent, $mailtype,$smtpmailcc);

	if($state==""){
		echo "对不起，邮件发送失败！请检查邮箱填写是否有误。";
		exit();
	}
	echo "恭喜！邮件发送成功！！";

?>