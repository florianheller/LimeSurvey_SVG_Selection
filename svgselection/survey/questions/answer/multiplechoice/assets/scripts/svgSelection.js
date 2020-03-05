
/***** 
    JavaScript for the svgSelection question theme
    Copyright (C) 2020 - Florian.Heller@uhasselt.be (http://heller-web.net)
    Licensed MIT, GPL
    Version - 1.0
    Create date - 21/02/2020
*****/


$(document).on('ready pjax:scriptcomplete',function(){
	// Go through all selection svgs (there can be multiple on the same page)
	$(".svg-selection-image").each(function(index,element) {
		questionID = element.id.slice(0,-3);
		//Just because the document DOM is loaded, doesn't mean the SVG DOM is available yet
		element.addEventListener('load', function() {
			$(".clickTarget", element.getSVGDocument()).each(function(i,e) {
				$(e).bind("click", function() {
	 				 $("#answer"+questionID+this.id).prop( "checked", !$("#answer"+questionID+this.id).prop('checked')); //Toggle the checkbox
	 				 this.classList.toggle('selected');	//Highlight the selection
				});
			});	
		}, true);
	});
});
