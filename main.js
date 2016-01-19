var main = function() {
	// $('#header .main #title').css('top', $(window).innerHeight()*0.4 - $('#header .main #title').height()*0.5);
	// $('#header .main #title').css('left', $(window).innerWidth()*0.5 - $('#header .main #title').width()*0.5);
	// $('#header .main #desc').css('top', $(window).innerHeight()*0.4 + $('#header .main #title').height()*0.5 + 70);
	// $('#header .main #desc').css('left', $(window).innerWidth()*0.5 - $('#header .main #desc').width()*0.5);
}

$(document).ready(main);

$(window).resize(main);