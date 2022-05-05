$(function () {
    $(".how-to__toggle-arrow").click(function () {
        $header = $(this);
        $content = $header.next();
        $content.slideToggle(500, function () {
            $header.text(function () {
                return $content.is(":visible") ? "Collapse" : "Expand";
            });
        });

    });

    $('.slider__box').slick({
        arrows: false,
        dots: true,
    });
});