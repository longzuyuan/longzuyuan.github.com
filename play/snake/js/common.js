/*
 *
 * Filename:	common.js
 * Developer:	Richard Willis
 *
 */

$(function(){
	// FF2/Mac Opacity Bug
	($.browser.mozilla && parseFloat($.browser.version) < 1.9 && 
	navigator.appVersion.indexOf('Mac') !== -1) && 
	$('body').css('-moz-opacity',.999);
	
	// IE6 background css flickering bug
	(!$.browser.msie) && (function(){
		try{document.execCommand('BackgroundImageCache', false, true);}
		catch(e){};
	})();
	
	// setup the game
	Snake.setup();
			
	// start the game
	$("a#start-game").click(function(e){
		e.preventDefault();
		Snake.newGame(true);
	});

});

/* end of file */
