(function (root, $) {
    $('.menu .dropdown').dropdown();
    $('span.popup.exception').popup();
    $('a.popup.exception').popup();
}(window, jQuery));

var resetPasswordUrl = 'https://phantom-password-resetter.herokuapp.com/resetpassword/';
var resetPasswordTestUrl = 'https://phantom-password-resetter.herokuapp.com/resetpassword/test/';

$(document).ready(function() {
    $('img').unveil(50);
    $('.misc-toggle').click(function() {
        $(this).find('i').toggleClass('down up')
        $(this).parent().next('.collapse').find('div').slideToggle(500);
        return false;        
    });
    $('#reset-message-close-icon').click(function() {
    	$(this).parent().hide();
    })

    var showMessage = function (messageClass, messageHeader, messageBody) {
    	$('#reset-message').removeClass('positive negative');
    	$('#reset-message').addClass(messageClass);
    	$('#reset-message-header').text(messageHeader);
    	$('#reset-message-body').text(messageBody);
    	$('#reset-message').show();
    }

    $('#reset-form').on('submit', function(e) {
    	e.preventDefault();
    	var email = $('#reset-password-input').val();
    	$('#reset-password-button').prop('disabled', 'disabled');
        $('#reset-password-button').addClass('disabled');
    	$.get( resetPasswordUrl + email, function(data) {
    		console.dir(data);
        	if(data.error) {
        		showMessage('negative', 'Error', data.error);
        	} else {
        		showMessage('positive', 'Check your inbox', data.message);
        	}
    	}).fail(function(error) {
    		console.dir(error);
    	}).always(function() {
    		$('#reset-password-button').removeAttr('disabled');
    		$('#reset-password-button').removeClass('disabled');    		
    	});
    });

    $('#test-form').on('submit', function (e) {
    	e.preventDefault();    	
		var email = $('#reset-password-email-input').val();
        var site = $('#reset-password-site-input').val();
        $('#reset-password-test-button').prop('disabled', 'disabled');
        $('#reset-password-test-button').addClass('disabled');
        $.get( resetPasswordTestUrl + '?email=' + email + '&site=' + site,  function(data) {
        	console.dir(data);
        	if(data.error) {
        		showMessage('negative', 'Error', data.error);
        	} else {
        		showMessage('positive', 'Check your inbox', data.message);
        	}
    	}).fail(function(error) {
    		console.dir(error);
    		showMessage('negative', 'Error', error.status);    		
    	}).always(function() {    		
    		$('#reset-password-test-button').removeAttr('disabled');
    		$('#reset-password-test-button').removeClass('disabled');
    	});		
	});
});
