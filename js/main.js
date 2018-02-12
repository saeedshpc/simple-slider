$(document).ready(function(){
    var itemLength = $(".card_container .item").length;
    var current = 1;
    $(".total_slides").text(itemLength);

    $(".cardSlider .btn_prev").on("click", function(){
        if (current > 1) {
            current = current - 1;
            showSlide(current);
        } else {
            current = itemLength;
            showSlide(current);
        }
    });

    $(".cardSlider .btn_next").on("click", function(){
        if (current !== itemLength) {
            current = current + 1;
            showSlide(current);
        } else {
            current = 1;
            showSlide(current);
        }
    });

    function showSlide(itemToshow) {
        $(".card_container .item").removeClass("active");
        $("div[data-id='" + itemToshow +"'").addClass("active");
        $(".current_slide").text(itemToshow);
    }
});