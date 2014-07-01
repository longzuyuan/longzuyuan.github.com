var vtips = '请点击输入';
var ltips="接收验证和预订成功短信";
var etips="接收预订成功邮件";
function getQueryString(name)
{
	var reg	=	new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
	var r	=	window.location.search.substr(1).match(reg);
	if (r != null) return unescape(r[2]); return null;
}
function cleanLeaveMsg(th, w){
	switch(w) {
		case 1: var mmsg = ltips;break;
		case 2: var mmsg = vtips;break;
		case 3: var mmsg = etips;break;
	}
	if(th.value == mmsg){
		$("#"+th.id).attr("value", "");
		$("#"+th.id).css('color','#000');
	} else {
		$("#"+th.id).css('color','#000');
	}
}
function setLeaveMsg(th, w){
	switch(w) {
		case 1: var mmsg = ltips;break;
		case 2: var mmsg = vtips;break;
		case 3: var mmsg = etips;break;
	}
	value=$.trim(th.value);
	if(value=="" || value==mmsg){
		$("#"+th.id).attr("value", mmsg);
		$("#"+th.id).css('color','#999');
	} else {
		$("#"+th.id).css('color','#000');
	}
}
function refreshCaptcha(imgid) {
	document.getElementById(imgid).src = 'http://e.7daysinn.cn/market/captcha.php?r='+Math.random();
}

function confirmBtn() {
	$('#readbox').attr("checked", true);
	closeWindown();
}
function fadeOutIn(elementId) {
	$('#'+elementId).fadeOut(function() {
     	$('#'+elementId).fadeIn();
    });
}
function checkreg() 
{
	var msgVal	=	'';
	var idVal	=	'';
	if(!svnCheckStringMinLength($('#username').val(), 4) || !svnCheckChineseCharacter($('#username').val()) && msgVal == '') {
		msgVal	=	'姓名只能为汉字，且不得少于两个汉字';
		idVal	=	'username';
	}
	
	if(!svnCheckMobile($('#mobile').val()) && msgVal == '') {
		msgVal	=	'手机号码填写错误';
		idVal	=	'mobile';
	}
	
	if(!svnCheckEmail($('#email').val()) && msgVal == '') {
		msgVal	=	'电子邮箱填写错误';
		idVal	=	'email';
	}
	
	if(!svnCheckIdCardNo($('#cardno').val()) && msgVal == '') {
		msgVal	=	'身份证号填写错误';
		idVal	=	'cardno';
	}

	if(!svnCheckStringMinLength($("#verify").val(), 4) && msgVal == '') {
		msgVal	=	'验证码填写错误';
		idVal	=	'verify';
	}
	
	if(msgVal == '')
	{
		var verifyFlag = false;
		
		$.ajax({
			type: "POST",
			async: false,
			url: "./index.php?sid="+getQueryString('sid')+"&action=verify",
			data: "verify=" + $("#verify").val(),
			success: function(msg) {
				if(msg == 'true') {
					verifyFlag = true;
				}
			}
		});
		
		if(verifyFlag == false) {
			msgVal	=	'验证码填写错误';
			idVal	=	'verify';
		}
	}
	
	if($("#readbox").attr("checked") != 'checked' && msgVal == '') {
		msgVal	=	'阅读并同意6+1连锁酒店隐私条款后您才可以进行下面操作';
		idVal	=	'readbox';
	}
	
	if(msgVal != '')
	{
		fadeOutIn(idVal);
		$('#msgVal').html(msgVal);
		var d_top	=	$('#'+idVal).offset().top;
		var d_left	=	$('#'+idVal).offset().left;
		
		if(idVal == 'verify')
		{
			document.getElementById('imgverify').src='./captcha.php';
			
			$("#errorMsg").removeClass('right');
			$("#errorMsg").removeClass('left');
			$("#errorMsg").addClass('bottom');
			
			d_top	=	d_top+4+$('#'+idVal).height()+'px';
			d_left	=	d_left+'px';
		}
		else if(idVal == 'readbox')
		{
			$("#errorMsg").removeClass('right');
			$("#errorMsg").removeClass('bottom');
			$("#errorMsg").addClass('left');
			
			d_top	=	d_top-9+'px';
			d_left	=	d_left-$("#errorMsg").width()-10+'px';
		}
		else
		{
			d_top	=	d_top-3.5+'px';
			d_left	=	d_left+$('#'+idVal).width()+3+'px';
		}
		
		$("#errorMsg").css('left',d_left);
		$("#errorMsg").css('top',d_top);
		$('#errorMsg').fadeIn(500);
		return false;
	}
	
	$("#lbl_error").show();
	$("#lbl_error").html("提交中，请稍候");

	$("#subform").attr("disabled", "disabled");
	return true;
}
$().ready(function(){
	if(!$("#mobile").val()) {$("#mobile").val(ltips);$("#mobile").css('color','#999');}
	if(!$("#verify").val()) {$("#verify").val(vtips); $("#verify").css('color','#999');}
	if(!$("#email").val()) {$("#email").val(etips);$("#email").css('color','#999');}
	$('#verify').focus(function(){
		if($('#lbl_verify').html() == '') {
			$('#lbl_verify').html('<img src="http://e.7daysinn.cn/market/captcha.php" id="imgverify" class="verify" style="float:right" onclick="refreshCaptcha(\'imgverify\');">');
		}
	});
	$("#isread").click(function(){
		showTipsWindown('7天连锁酒店服务条款', 'agreement', '500', '370');
		
	});
	$('body').append('<div id="errorMsg" class="tooltip fade right in" style="display: none;position:absolute;"><div class="tooltip-arrow"></div><div id="msgVal" class="tooltip-inner"></div></div>');
	$(document).on
	(
		'click',
		function(ClickObj)
		{
			var thisObj  = $(ClickObj.target);
			
			if(thisObj.closest('#errorMsg').length == 0 && thisObj.closest('.regconbtn').length == 0)
			{
				$('#errorMsg').fadeOut(100);
			}
		}
	);
});
