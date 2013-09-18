//User changable data.
var interfaceWidth = 1280, interfaceHeight = 800;


/*** Adjust the window.  */
//Set the user visible area.
$('#interface').css({
	"height" : $(window).height(),
});

//Keep the background full all the browser window when resize.
$(window).resize(function() {
	$('#interface').css({
		"height" : $(window).height(),
	});
});

//Set the galgame main window size and align center.
$('#interface_window').css({
	"width" : interfaceWidth,
	"height" : interfaceHeight,
	
	"left" : ($(window).width() - interfaceWidth) / 2,
	"top" : ($(window).height() - interfaceHeight) / 2,
});

$('#interface_dialog').css({
	"width" : $('#interface_window').innerWidth() * 0.9,
	"height" : $('#interface_window').innerHeight() * 0.19,
	
	"left" : $('#interface_window').innerWidth() * 0.05,
	"top" : $('#interface_window').innerHeight() * 0.8,
});

