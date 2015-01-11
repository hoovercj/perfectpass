(function (root, $) {
    $('.menu .dropdown').dropdown();
    $('span.popup.exception').popup();
    $('a.popup.exception').popup();
}(window, jQuery));

var resetPasswordUrl = 'https://password-resetter.herokuapp.com/resetpassword/';
var resetPasswordTestUrl = 'https://password-resetter.herokuapp.com/resetpassword/test/';

$(document).ready(function() {
    $("img").unveil(50);
    $('.misc-toggle').click(function() {
        $(this).find('i').toggleClass('down up')
        $(this).parent().next('.collapse').find('div').slideToggle(500);
        return false;        
    });

    $('#reset-password-button').click(function() {
    	var email = $('#reset-password-input').val();
    	$.get( resetPasswordUrl + email, function(data) {});
    });

    $('#reset-password-test-button').click(function() {
        var email = $('#reset-password-email-input').val();
        var site = $('#reset-password-site-input').val();
        $.get( resetPasswordTestUrl + "?email=" + email + "&site=" + site, function(data) {
            alert(data);
        });
    });
});
