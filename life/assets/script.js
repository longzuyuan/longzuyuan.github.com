$(function() {

	var exits = ['fadeOut', 'fadeOutDown', 'fadeOutUpBig', 'bounceOut', 'bounceOutDown', 'hinge',
				'bounceOutUp', 'bounceOutLeft', 'rotateOut', 'rotateOutUpLeft', 'lightSpeedOut', 'rollOut'];

	var entrances = ['fadeIn', 'fadeInDown', 'fadeInRight', 'bounceIn', 'bounceInRight', 'rotateIn',
					 'rotateInDownLeft', 'lightSpeedIn', 'rollIn', 'bounceInDown' ]; 
	
	var photos = $('#photos'),
		ignoreClicks = false;
		
	var currentPhoto = 19;
	var tmpelem = $('#photos li:last');
	tmpelem.css('background-image', 'url(photos/'+currentPhoto+'.jpg)');
	$('#photo_text').html(tmpelem.text());

	$('.arrow').click(function(e, simulated){
		if(ignoreClicks){
			
			// If clicks on the arrows should be ignored,
			// stop the event from triggering the rest 
			// of the handlers
			
			e.stopImmediatePropagation();
			return false;
		}
		
		// Otherwise allo this click to proceed,
		// but raise the ignoreClicks flag
		
		ignoreClicks = true;
		
		if(!simulated){
			// Once the user clicks on the arrows,
			// stop the automatic slideshow
//			clearInterval(slideshow);
		}
	});

	// Listen for clicks on the next arrow
	$('.arrow.next').click(function(e){
		
		e.preventDefault();
		
		// The topmost element
		var elem = $('#photos li:last');
		if(currentPhoto == 1) currentPhoto = 20;
		elem.prev().css('background-image', 'url(photos/'+(--currentPhoto)+'.jpg)');
		$('#photo_text').html(elem.prev().text());
		
		// Apply a random exit animation
		elem.addClass('animated')
			.addClass( exits[Math.floor(exits.length*Math.random())] );
		
		setTimeout(function(){
			
			// Reset the classes
			elem.attr('class','').prependTo(photos);
			
			// The animation is complate!
			// Allow clicks again:
			ignoreClicks = false;
			
		},1000);
	});

	// Listen for clicks on the previous arrow
	$('.arrow.previous').click(function(e){
		
		e.preventDefault();
		
		// The bottom-most element
		var elem = $('#photos li:first');
		if(currentPhoto == 19) currentPhoto = 0;
		elem.css('background-image', 'url(photos/'+(++currentPhoto)+'.jpg)');
		$('#photo_text').html(elem.text());
		
		// 随机动画移动到顶部
		elem.appendTo(photos)
			.addClass('animated')
			.addClass( entrances[Math.floor(entrances.length*Math.random())] );
		
		setTimeout(function(){
			elem.attr('class','');
			// 完成，恢复点击:
			ignoreClicks = false;
			
		},1000);
	});
/*//自动开始
	var slideshow = setInterval(function(){
		$('.arrow.next').trigger('click',[true]);
	}, 2000);
*/	
});
