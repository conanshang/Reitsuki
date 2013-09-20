//User changable data.
var interfaceWidth = 1280, interfaceHeight = 720;


//Variables


/*** Rendering canvas  */
var cgCanvas = document.getElementById('interface_cg');
var cgContext = cgCanvas.getContext('2d');


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

//Set the dialog area.
$('#interface_dialog').css({
	"width" : $('#interface_window').innerWidth() * 0.9,
	"height" : $('#interface_window').innerHeight() * 0.19,
	
	"left" : $('#interface_window').innerWidth() * 0.05,
	"top" : $('#interface_window').innerHeight() * 0.8,
});

//Set the CG rendering canvas.
$('#interface_render').css({
	"width" : interfaceWidth,
	"height" : interfaceHeight,
});

$('#interface_cg').attr("width", interfaceWidth);
$('#interface_cg').attr("height", interfaceHeight);


//Test area
var testImage = new Image();
testImage.src = "Assets/reference/6.png";

function testFunctions(){
	cgContext.drawImage(testImage, 0, 0, interfaceWidth, interfaceHeight);
}