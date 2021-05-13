$(document).ready(function(){
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        } else {
            $('.navbar').removeClass("sticky");
        }
    });

    $('.mobile-menu-icon').click(function() {
        $('.navbar .menu').toggleClass("active");
    })
});
