﻿/*
 *
 * jquery.snake.js - a nibbles clone
 * Copyright (c) 2008 Richard Willis
 * MIT license	: http://www.opensource.org/licenses/mit-license.php
 * Project	: http://jquery-snakey.googlecode.com/
 * Contact 	: willis.rh@gmail.com
 *
 */

var Snake = {
		
	$map : {}, $cherry : {}, $overlay : {}, seg : {}, wallseg : {}, cache : {},	
	cacheimages : ['./img/snake/cherry.jpg'], 
	animateTimer : 0, score : 0, grid : 0, level : 1, lives : 3, speed : 0, cherriesEaten : 0,
	wall : 0, // are the outer map walls an obsticle?

	setup : function() {

		// pre-cache images
		for(var i in Snake.cacheimages) {
			var img = new Image();
			img.src = Snake.cacheimages[i];
		}

		// build map
		Snake.$map = $("#map1");
		Snake.$map.width = Snake.$map.innerWidth();
		Snake.$map.height = Snake.$map.innerHeight();
		
		// build and prepend overlay to map
		Snake.$overlay = $('<div id="overlay"></div>').hide().prependTo(Snake.$map);

		// build and append cherry to map
		Snake.$cherry = $('<div id="cherry"></div>').appendTo(Snake.$map);
	
		// listen for key press, store keycode
		Snake.cache.keyCode = [0,0];
		document.onkeydown = function(e){
			// preventing default event behaviour causes issues with IE; 
			// need to research further!
			keycode = (e == null) ? event.keyCode : e.which;
			switch(keycode) {					
				case 71 : (!$.browser.msie && e.preventDefault()); Snake.toggleGrid(); break;
				case 80 : (!$.browser.msie && e.preventDefault()); Snake.pause(); break;
				case 78 : (!$.browser.msie && e.preventDefault()); Snake.newGame(true); break;
				case 37 : 					
				case 38 : 
				case 39 : 
				case 40 :
					(!$.browser.msie && e.preventDefault()); 
					Snake.cache.keyCode[0] = Snake.cache.keyCode[1]; 
					Snake.cache.keyCode[1] = keycode;					
					break;
				default : break;
			}
		};	
	},
		
	start : function() {
		// set initial speed
		Snake.speed = Level[Snake.level][0].speed;
		// show the cherry, and start the animation
		Snake.$cherry.fadeIn(function(){
			Snake.animateTimer = setInterval(Snake.animate, Snake.speed);			
		});
	},
	
	newGame : function(reset) {

		Snake.cherriesEaten = 0;
	
		// reset animation timer
		clearInterval(Snake.animateTimer);
		Snake.animateTimer = 0;

		// reset score
		Snake.score = reset ? 0 : Snake.score;
		$("#stats-score").html(Snake.score+"");

		// reset level
		Snake.level = reset ? 1 : Snake.level;
		$("#stats-level").html(Snake.level);

		// reset lives
		Snake.lives = reset ? 3 : Snake.lives;
		$("#stats-lives").html(Snake.lives);

		// reset level cherries eaten and total
		$("#stats-eaten").html(Snake.cherriesEaten+"");
		$("#stats-totcherries").html(Level[Snake.level][0].cherries);
		
		// remove any wall & snake segments
		$(".wall, .snake").remove();

		// hide the cherry
		Snake.$cherry.hide();

		// update map message	
		$("#map-msg").hide().html('第'+Snake.level+'关<br/>吃<strong>'+Level[Snake.level][0].cherries+'</strong>个<small><br/>'+
			'<small style="font-size:80%">(还剩<strong>'+Snake.lives+'</strong>'+(Snake.lives>1?'':'')+'次机会)</small></small>'
			).fadeIn(500, function(){

			setTimeout(function(){
	
				// hide map message
				$("#map-msg").fadeOut(500, function(){

					// hide overlay
					Snake.$overlay.hide();

					// reset and generate wall
					Snake.wallseg = {};
					Snake.Wall.generate();
					
					// generate cherry
					Snake.Cherry.generate(false);

					// reset, remove and re-append snake segments to map
					Snake.seg = {length:Level[Snake.level][0].length};
					for(var i=0;i<Snake.seg.length;i++) {
						Snake.seg[i] = $('<span class="snake '+i+'"></span>').appendTo(Snake.$map);
						Snake.seg[i].top = Snake.seg[i].left = 0;
					}
				
					// start animation
					setTimeout(function(){
						// reset direction
						Snake.cache.keyCode[0] = 0;
						Snake.cache.keyCode[1] = 39;
						Snake.start();
					}, 1000);
				});
			}, 2500);
		});
	},
			
	animate : function() {			
		// adjust segment position list	 					
		for(var i=1;i<Snake.seg.length;i++) {
			Snake.seg[i].top = Snake.seg[(i==Snake.seg.length-1?0:i+1)].top;
			Snake.seg[i].left = Snake.seg[(i==Snake.seg.length-1?0:i+1)].left;
		}

		var keycode = Snake.cache.keyCode;
		if (
			// if key pressed is opposite of current direction
			keycode[0] == 37 && keycode[1] == 39 || 
			keycode[0] == 39 && keycode[1] == 37 || 
			keycode[0] == 38 && keycode[1] == 40 || 
			keycode[0] == 40 && keycode[1] == 38
		) {
			// reset the keyCode 
			Snake.cache.keyCode[1] = Snake.cache.keyCode[0];
		}

		keycode = Snake.cache.keyCode[1];
		// adjust leading segment properties
		if (keycode == 39) {
			//right
			Snake.seg[0].left += 10;
			if (Snake.seg[0].left > Snake.$map.width-10) {
				Snake.wall && Snake.gameOver();
				Snake.seg[0].left = 0;
			}			
		}else if (keycode == 40) {
			//down
			Snake.seg[0].top += 10;
			if (Snake.seg[0].top > Snake.$map.height-10) {
				Snake.wall && Snake.gameOver();
				Snake.seg[0].top = 0;
			}
		} else if (keycode == 38) {
			//up
			Snake.seg[0].top -= 10;
			if (Snake.seg[0].top < 0) {
				Snake.wall && Snake.gameOver();
				Snake.seg[0].top = Snake.$map.height-10;
			}
		} else if (keycode == 37) {
			//left
			Snake.seg[0].left -= 10;
			if (Snake.seg[0].left < 0) {
				Snake.wall && Snake.gameOver();
				Snake.seg[0].left = Snake.$map.width-10;
			}			
		}
		// check if snake has eaten a cherry
		(Snake.seg[0].left == Snake.Cherry.left && Snake.seg[0].top == Snake.Cherry.top) && 
			Snake.advance();
		
		// unset Snake.seg[0], gotta be an easier way!
		var seg = {};
		for(var i=1;i< Snake.seg.length;i++) {seg[i-1]=Snake.seg[i];}	
		
		// check if snake has slithered into itself
		(Snake.in_obj(Snake.seg[0], seg)) && 
			Snake.gameOver();

		// check if snake has slithered into a wall obstacle
		(Snake.in_obj(Snake.seg[0], Snake.wallseg)) && 
			Snake.gameOver();

		// check if cherries eaten match total: finished level.. advance to next level
		(Snake.cherriesEaten == Level[Snake.level][0].cherries) &&
			Snake.advanceLevel();

		// reposition snake segments on map
		for(var i=0;i<Snake.seg.length;i++) {
			Snake.seg[i].css({top:Snake.seg[i].top+"px",left:Snake.seg[i].left+"px",display:"block"});
		}						
	},
			
	advance : function(val) {
		
		// increase snake segments
		Snake.seg.length++;

		var x = Snake.seg.length-1;
		Snake.seg[x] = 
		$('<span class="snake '+x+'"></span>')
		.css({left:Snake.seg[1].left+"px",top:Snake.seg[1].top+"px",display:"block"})
		.appendTo(Snake.$map);
		
		// position new snake segment
		Snake.seg[x].top = Snake.seg[x-1].top;
		Snake.seg[x].left = Snake.seg[x-1].left;
		
		// reposition cherry
		Snake.Cherry.generate();

		// adjust score
		Snake.score += 10;
		$("#stats-score").html(Snake.score);

		// update cherries eaten
		Snake.cherriesEaten++;
		$("#stats-eaten").html(Snake.cherriesEaten);
		
		// adjust speed
		Snake.speed -= 1;
		$("#stats-speed").html(Snake.speed);

		clearInterval(Snake.animateTimer);
		Snake.animateTimer = setInterval(Snake.animate, Snake.speed);			
		return false;
	},

	advanceLevel : function() {
		if (Snake.level == Level.length-1) {
			Snake.finishedGame();	
		} else {
			Snake.level++;
			Snake.speed = Level[Snake.level][0].speed;
			Snake.newGame();
		}
	},
			
	toggleGrid : function(){
		var background;
		if (!Snake.grid) {
			background = "transparent url(img/snake/grid_bg.gif)";
			Snake.grid = 1;
		} else {
			background = "transparent";
			Snake.grid = 0;
		}
		Snake.$map.css({background:background});
	},
	
	pause : function(){
		if (Snake.animateTimer == 0) {
			Snake.start();
			Snake.$overlay.hide();
			$("#map-msg").fadeOut();
		} else {
			clearInterval(Snake.animateTimer);
			Snake.animateTimer = 0;
			Snake.$overlay.show();
			$("#map-msg").html("<br/>暂停").fadeIn();
		}
	},

	gameOver : function(){
		if (Snake.lives-1) {
			Snake.lives--;
			Snake.newGame();
		} else {
			Snake.pause();
			$("#map-msg").html('<br/>木有了:(<small><br/><a href="javascript:;" onclick="Snake.newGame(true)">再试一次?</a></small>');
		}
	},

	finishedGame : function(){
		Snake.pause();
		$("#map-msg").html('<br/>哦耶！通关啦！<small><br/><a href="http://longzuyuan.cn" target="_blank">Longzuyuan.cn</a></small>');
	},

	Cherry : {	
		left : 0,
		top : 0,
		generate : function(show){
			do {	 
				Snake.Cherry.left = Math.round((Math.random()*(Snake.$map.width-10))/10)*10;
				Snake.Cherry.top = Math.round((Math.random()*(Snake.$map.height-10))/10)*10;
			} while (Snake.in_obj(Snake.Cherry, Snake.wallseg) || Snake.in_obj(Snake.Cherry, Snake.seg));
			
			Snake.$cherry.css({
				left:Snake.Cherry.left+"px",
				top:Snake.Cherry.top+"px"
			});
			show == undefined && Snake.$cherry.hide().fadeIn();
		}
	},

	// wall obstacles
	Wall : {
		generate : function(){

			var 
				walls = Level[Snake.level],
				c = 0, t, l, i, n;
	
			// append multiple walls
			for(i=1;i<walls.length;i++) {
				t = walls[i].top;
				l = walls[i].left;
				// append wall segments to map
				for(n=0;n<walls[i].seg;n++) {
					Snake.wallseg[c] = $('<span class="wall '+c+'"></span>').css({top:t+"px",left:l+"px"}).appendTo(Snake.$map);
					Snake.wallseg[c].left = l;
					Snake.wallseg[c].top = t;
					c ++;
					t += 10;
				}
			}
		}
	},

	// check for an object in an object collection
	in_obj : function(obj_needle, obj_haystack) {
		for(var i in obj_haystack) {
			if (obj_haystack[i].left === obj_needle.left && obj_haystack[i].top === obj_needle.top){
				return true;
			}
		}
		return false;
	}

},

Level = [
	,
	[
		{cherries : 5, length : 10, speed : 100},
		{seg : 30, top : 50, left : 200}
	],
	[
		{cherries : 5, length : 15, speed : 95},
		{seg : 30, top : 50, left : 100},
		{seg : 30, top : 50, left : 300}
	],
	[
				
		{cherries : 5, length : 20, speed : 90},
		{seg : 12, top : 10, left : 50},
		{seg : 12, top : 0, left : 350},
		{seg : 12, top : 270, left : 350},
		{seg : 12, top : 280, left : 50},
		{seg : 24, top : 80, left : 200}
	],
	[
		{cherries : 5, length : 25, speed : 85},
		{seg : 19, top : 0, left : 200},
		{seg : 20, top : 200, left : 200},
		{seg : 40, top : 0, left : 0},
		{seg : 40, top : 0, left : 390}
	],
	[
		{cherries : 5, length : 30, speed : 80},
		{seg : 20, top : 10, left : 50},
		{seg : 20, top : 0, left : 150},
		{seg : 20, top : 10, left : 250},
		{seg : 20, top : 0, left : 350},
		{seg : 20, top : 200, left : 20},
		{seg : 20, top : 200, left : 120},
		{seg : 20, top : 200, left : 220},
		{seg : 20, top : 200, left : 320}
	],
	[
		{cherries : 5, length : 35, speed : 75},
		{seg : 2, top : 10, left : 200},
		{seg : 2, top : 40, left : 200},
		{seg : 2, top : 70, left : 200},
		{seg : 2, top : 100, left : 200},
		{seg : 2, top : 130, left : 200},
		{seg : 2, top : 160, left : 200},
		{seg : 2, top : 190, left : 200},
		{seg : 2, top : 220, left : 200},
		{seg : 2, top : 250, left : 200},
		{seg : 2, top : 280, left : 200},
		{seg : 2, top : 310, left : 200},
		{seg : 2, top : 340, left : 200},
		{seg : 2, top : 370, left : 200},
		{seg : 20, top : 100, left : 280},
		{seg : 20, top : 100, left : 120},
		{seg : 30, top : 50, left : 60},
		{seg : 30, top : 50, left : 340},
		{seg : 40, top : 0, left : 0},
		{seg : 40, top : 0, left : 390}
	]
];
