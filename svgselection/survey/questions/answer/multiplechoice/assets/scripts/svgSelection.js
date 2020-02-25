
/***** 
    JavaScript for the svgSelection question theme
    Copyright (C) 2020 - Florian.Heller@uhasselt.be (http://heller-web.net)
    Licensed MIT, GPL
    Version - 1.0
    Create date - 21/02/2020
*****/

$(document).on('ready pjax:scriptcomplete',function(){
	svg = $("#svg-selection-image").getSVGDocument();

	svg.$(".clickTarget").bind("click", function(event) {   
		alert(event.target.id); 
	});
	
});
