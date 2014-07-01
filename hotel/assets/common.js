
//刷新验证码
function svnRefresh(id, src) {
	var sidx = src.indexOf('?');
	if(sidx == -1) {
		src = src + '?rdm=' + Math.random();
	} else {
		src = src + '&rdm=' + Math.random();
	}
	$('#' + id).attr('src', src);
}

function svnAjaxPOST(url, data, callback) {
	
}

//延时跳转
function svnGoto(surl, secs){
	var len = arguments.length;
	if(len == 1) {
		location.href = surl;
	}else {
		if(--secs>0){   
			setTimeout("svnGoto('"+surl+"',"+secs+")",1000);   
		}else{   
			location.href=surl;   
		}
	}
}

//延时跳转
function svnParentGoto(surl, secs){
	var len = arguments.length;
	if(len == 1) {
		parent.parent.location.href = surl;
	}else {
		if(--secs>0){  
			setTimeout("svnParentGoto('"+surl+"',"+secs+")",1000);   
		}else{
			parent.parent.location.href=surl; 
		}
	}
}

function showTipsBox(TipsBoxTitle,TipsBoxURL,TipsBoxWidth,TipsBoxHeight){
	tipsWindown(TipsBoxTitle,"url:get?"+TipsBoxURL,TipsBoxWidth,TipsBoxHeight,"true","","true","text");
}

//注意：调用该函数时避免使用A标签
function showFrameBox(TipsBoxTitle,TipsBoxURL,TipsBoxWidth,TipsBoxHeight) {
	tipsWindown(TipsBoxTitle,"text:<iframe src='"+TipsBoxURL+"' scrolling='no' frameBorder='no'  style='width:100%; height:100%;'></iframe>",TipsBoxWidth,TipsBoxHeight,"true","","true","text");
}

function showTipsWindown(title,id,width,height){
	tipsWindown(title,"id:"+id,width,height,"true","","true",id);
}

//关闭弹出窗口
function closeWindown(){
	$("#windownbg").remove();
	$("#windown-box").fadeOut("slow",function(){$(this).remove();});
}

function resizeTipsIframe(width, height) {
	if(self != parent) {
		
		if(height > 0) {
			$('#windown-content', window.parent.document).css('height', height);
		}
		if(width > 0 ) {
			$('#windown-content', window.parent.document).css('width', width);
			$('#windown-content-border', window.parent.document).css('width', width);
			$('#windown-title', window.parent.document).css('width', width);
		}
	}
}

function redirect(sid, action, id, roomid,dtStart, dtEnd) {
	window.location.href = "./index.php?sid="+sid+"&action="+action+"&id="+id+"&roomid="+roomid+"&dtStart="+dtStart+"&dtEnd="+dtEnd;
}

function redirectRewrite(sid, action, id, roomid,dtStart, dtEnd, params) {
	window.location.href = "./index.php?sid="+sid+"&action="+action+"&id="+id+"&roomid="+roomid+"&dtStart="+dtStart+"&dtEnd="+dtEnd+"&"+params;
}