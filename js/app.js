(function (root, $) {
    $('.menu .dropdown').dropdown();
    $('span.popup.exception').popup();
    $('a.popup.exception').popup();
}(window, jQuery));

$(document).ready(function() {
    $("img").unveil(50);
    $('.misc-toggle').click(function() {
        //$(this.hash).slideToggle(500);
        $(this).find('i').toggleClass('down up')
        $(this).parent().next('.collapse').find('div').slideToggle(500);
        //$('#row-'+this.id).slideToggle(500);
        return false;        
    });
});
