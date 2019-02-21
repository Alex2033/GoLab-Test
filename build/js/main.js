$(document).ready(function(){

	$(".asc").click(function() {
		var divList = $(".card");
        divList.sort(function(a, b){
            var result = parseFloat($(a).find('[data-price]').data('price')) - parseFloat($(b).find('[data-price]').data('price'));
            return result;
        });
        $(".cards__list").html(divList);
    });
    
    $(".desc").click(function() {
		var divList = $(".card");
        divList.sort(function(a, b){
            var result = parseFloat($(b).find('[data-price]').data('price')) - parseFloat($(a).find('[data-price]').data('price'));
            return result;
        });
        $(".cards__list").html(divList);
    });

});

$(document).ready(function() {
    var count = 0;
    $(document).on('click', '.button', function () {
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

$(document).ready(function() {
    $('.toggle__btn').click(function() {
        $('.toggle').toggleClass('active');
        $('.navigation').toggleClass('active');
    });

    $('.navigation__cancel').click(function() {
        $('.toggle').toggleClass('active');
        $('.navigation').toggleClass('active');
    });
});