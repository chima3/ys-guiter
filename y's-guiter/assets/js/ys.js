$(function() {
    $('.section-works_contents-tab').on('click', function() {
        $('.section-works_contents-tab, .section-works_contents-body').removeClass('_active');

        $(this).addClass('_active');

        var index = $('.section-works_contents-tab').index(this);
        $('.section-works_contents-body').fadeOut().eq(index).fadeIn().addClass('_active');
    });

    $('.section-works_contents-tab').on('click', function() {
        $('.section-works_contents-tab, .section-works_img').removeClass('_active');

        $(this).addClass('_active');

        var index = $('.section-works_contents-tab').index(this);
        $('.section-works_img').fadeOut().eq(index).fadeIn().addClass('_active');
    });
});

jQuery(window).on('scroll', function() {
    if (100 * jQuery(window).height() / 100 > jQuery(this).scrollTop()) {
        jQuery('.menu').addClass('change-color').css('color', '#f6f8f9');
    } else {
        jQuery('.menu').removeClass('change-color').css('color', '#1e1e1e');
    }
});