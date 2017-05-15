$(document).ready(function() {
    var interval = 1000;
    $('div').each(function(index){
        $(this).delay(interval).fadeIn(900);
        interval +=700;
    });
});