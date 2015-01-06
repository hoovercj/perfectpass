(function (root, $) {
    $('.menu .dropdown').dropdown();
    $('span.popup.exception').popup();
    $('a.popup.exception').popup();
}(window, jQuery));

var resetPasswordUrl = 'https://peaceful-refuge-8041.herokuapp.com/resetpassword/';

$(document).ready(function() {
    $("img").unveil(50);
    $('.misc-toggle').click(function() {
        $(this).find('i').toggleClass('down up')
        $(this).parent().next('.collapse').find('div').slideToggle(500);
        return false;        
    });

    $('#reset-password-button').click(function() {
    	var email = $('#reset-password-input').val();
    	$.get( resetPasswordUrl + email, function( data ) {			
			alert(data);
		});
    });

});
