//User changable data.
var interfaceWidth = 1280, interfaceHeight = 720;
var dialogColor = "#ffffff";


//Variables.
var controllButtonWidthHeight = null;

/*** Rendering canvas  */
var cgCanvas = document.getElementById('interface_cg_canvas');
var cgContext = cgCanvas.getContext('2d');

var dialogCanvas = document.getElementById('interface_dialog_canvas');
var dialogContext = dialogCanvas.getContext('2d');


/*** Adjust the window.  */
//Set the user visible area.
$('#interface').css({
	"height" : $(window).height(),
});

//Keep the background fullfill all the browser window when resize.
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

//Set the CG rendering canvas.
$('#interface_cg').css({
	"width" : interfaceWidth,
	"height" : interfaceHeight,
});

$('#interface_cg_canvas').attr("width", interfaceWidth);
$('#interface_cg_canvas').attr("height", interfaceHeight);

//Set the dialog area.
$('#interface_dialog').css({
	"width" : $('#interface_window').innerWidth() * 0.9,
	"height" : $('#interface_window').innerHeight() * 0.19,
	
	"left" : $('#interface_window').innerWidth() * 0.05,
	"top" : $('#interface_window').innerHeight() * 0.8,
});

$('#interface_dialog_canvas').css({
	"width" : $('#interface_dialog').innerWidth() * 0.96,
	"height" : $('#interface_dialog').innerHeight() * 0.85,
	 
	"left" : $('#interface_dialog').innerWidth() * 0.019,
	"top" : $('#interface_dialog').innerHeight() * 0.07, 
});

$('#interface_dialog_canvas').attr("width", $('#interface_dialog').innerWidth() * 0.96);
$('#interface_dialog_canvas').attr("height", $('#interface_dialog').innerHeight() * 0.85);

//Set controllers area.
$('#interface_controll').css({
	"width" : $('#interface_window').innerWidth() * 0.99,
	"height" : $('#interface_window').innerHeight() * 0.18,
	
	"left" : $('#interface_window').innerWidth() * 0.006,
	"top" : $('#interface_window').innerHeight() * 0.803, 	
});

controllButtonWidthHeight = $('#interface_controll').innerHeight() * 0.3876;
$('#interface_controll div').css({
	"width" : controllButtonWidthHeight,
	"height" : controllButtonWidthHeight,
});

$('#interface_controll div').hover(function(){
		$(this).css({
			"opacity" : 1,
		});
	},
	function(){
		$(this).css({
			"opacity" : 0.3,
		});
});

$('#interface_controll .controll_save').css({
	/* "left" : $('#interface_controll').innerWidth() * 0.00165, */
	"top" : $('#interface_controll').innerHeight() * 0.074,
	"background" : "url(Assets/adjusted/buttons.png)",
});

$('#interface_controll .controll_load').css({
	/* "left" : $('#interface_controll').innerWidth() * 0.00165, */
	"top" : $('#interface_controll').innerHeight() * 0.536,
	"background" : "url(Assets/adjusted/buttons.png) -57px 0",
});

$('#interface_controll .controll_skip').css({
	"top" : $('#interface_controll').innerHeight() * 0.074,
	"right" : "0px",
	"background" : "url(Assets/adjusted/buttons.png) -166px 0",
});

$('#interface_controll .controll_history').css({
	"top" : $('#interface_controll').innerHeight() * 0.536,
	"right" : "0px",
	"background" : "url(Assets/adjusted/buttons.png) -333px 0",
});

//Test area
var testImage = new Image();
testImage.src = "Assets/reference/6.png";

function testFunctions(){
	cgContext.drawImage(testImage, 0, 0, interfaceWidth, interfaceHeight);
	
	dialogContext.fillStyle = dialogColor;
	dialogContext.font = "1.5em Arial";
	dialogContext.textAlign = "start";
	dialogContext.textBaseline = "top";
	dialogContext.fillText('我怎么觉得，我在这个店里的地位已经掉到第四位以下了呢...', 0, 0);
}












































