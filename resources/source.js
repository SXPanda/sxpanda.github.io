$(document).ready(function() {
	$('.color').on('click', function(e) {
		e.preventDefault();
		var range = document.createRange();
		range.selectNode(document.querySelector('#' + $(this).attr('id')));
		window.getSelection().addRange(range);
		document.execCommand('copy');
		
		window.getSelection().removeAllRanges();
		copyAcknowledge($(this));
	}).each(function(i) {
		$(this).attr('id', 'color_' + i).text(rgbstring2hex($(this).css('background-color')));
	})
});

function rgbstring2hex(rgbString) {
	var rgb = rgbString.match(/[0-9]{1,}/g),
		hexPart,
		hex = '#';
	
	for (var i = 0, l = rgb.length; i < l; ++i) {
		console.log(rgb[i]);
		hexPart = (parseInt(rgb[i])).toString(16);
		console.log(hexPart);
		if (hexPart.length == 1)
			hexPart = '0' + hexPart;
		hex += hexPart;
	}
	
	return hex;
}

function copyAcknowledge(target) {
	target.append('<span class="copied"><i class="fa fa-check"></i> Copied to clipboard</span>');

	target.find('.copied').fadeOut(600, function() {$(this).remove()});

}