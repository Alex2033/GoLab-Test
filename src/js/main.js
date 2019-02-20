$(document).ready(function() {
    var count = 0;
    $('.button').click(function() {
        $(this).toggleClass('active');
        if ( $(this).hasClass('active') ) {
            $(this).text('В корзине');
            count++;
            $('.basket__number').text(count);
        } else {
            $(this).text('В корзину');
            count--;
            $('.basket__number').text(count);
        }
    });
});