$(function() {

	var exits = ['fadeOut', 'fadeOutDown', 'fadeOutUpBig', 'bounceOut', 'bounceOutDown', 'hinge',
				'bounceOutUp', 'bounceOutLeft', 'rotateOut', 'rotateOutUpLeft', 'lightSpeedOut', 'rollOut'];

	var entrances = ['fadeIn', 'fadeInDown', 'fadeInRight', 'bounceIn', 'bounceInRight', 'rotateIn',
					 'rotateInDownLeft', 'lightSpeedIn', 'rollIn', 'bounceInDown' ]; 
	
	var photos = $('#photos'),
		ignoreClicks = false;
	
	var currentIndex = 1;
	var tmpelem = $('#photos li:last');
	$('#photo_text').html(tmpelem.text());
	if(tmpelem.css('background-image')=='none') tmpelem.css('background-image', 'url('+$("a",tmpelem).attr('href')+')');
	tmpelem = tmpelem.prev();
	if(tmpelem.css('background-image')=='none') tmpelem.css('background-image', 'url('+$("a",tmpelem).attr('href')+')');
	$('.arrow.previous').css('display','none');
	
	$('#photos a').attr('title', '猛击加载下一张');
	$('.arrow.next').attr('title', '猛击加载下一张');
	$('.arrow.previous').attr('title', '猛击回到上一张');
	$('#photos a').click(function() {
		$('.arrow.next').trigger('click',[true]);
		return false;
	});

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
		
		if(currentIndex ++ >= 15) currentIndex = 1;
		if(currentIndex == 1) $('.arrow.previous').css('display','none');
		else $('.arrow.previous').css('display','');
		// The topmost element
		var elem = $('#photos li:last');
		$('#photo_text').html(elem.prev().text());
		var prevElem = elem.prev();
	  if(prevElem.css('background-image')=='none') prevElem.css('background-image', 'url('+$("a",prevElem).attr('href')+')');
		var prePrevElem = prevElem.prev();
	  if(prePrevElem.css('background-image')=='none') prePrevElem.css('background-image', 'url('+$("a",prePrevElem).attr('href')+')');
		
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
		
		if(currentIndex -- < 1) currentIndex = 15;
		if(currentIndex == 1) $('.arrow.previous').css('display','none');
		else $('.arrow.previous').css('display','');
		// The bottom-most element
		var elem = $('#photos li:first');
		$('#photo_text').html(elem.text());
	  if(elem.css('background-image')=='none') elem.css('background-image', 'url('+$("a",elem).attr('href')+')');
		
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
