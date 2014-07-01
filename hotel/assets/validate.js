function svnCheckEmail(str) {
	var p = /^\w+(([-+.]*)\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
	return p.test(str);
}

function svnCheckMobile(str) {
	var p = /^(13|14|15|18)\d{9}$/;
	return p.test(str);
}

function svnCheckIdCardNo(str) {
	var p1 = /^[1-9]\d{7}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}$/;
	var p2 = /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])((\d{4})|\d{3}[A-Z])$/;
	return p1.test(str) || p2.test(str);
}

function svnCheckChineseCharacter(str) {
	var p = /^[\u4e00-\u9fa5]+$/;
	return p.test(str);
}

function svnCheckStringMinLength(str, l) {
	var length = str.length;
	for ( var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 127) {
			length++;
		}
	}
	return length >= l;
}

function svnCheckStringMaxLength(str, l) {
	var length = str.length;
	for ( var i = 0; i < str.length; i++) {
		if (str.charCodeAt(i) > 127) {
			length++;
		}
	}
	return length <= l;
}

function svnCheckAlnum(str) {
	var p = /^[a-zA-Z0-9]+$/;
	return p.test(str);
}

//登录用户名
function svnCheckUsername(str) {
	var p = /^[a-zA-Z0-9]{5,20}?$/;
	return p.test(str);
}