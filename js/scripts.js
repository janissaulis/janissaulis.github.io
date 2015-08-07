//Initialize fullpage.js ------------------------------------------------
$(document).ready(function() {
    $('#fullpage').fullpage({
        sectionsColor: ['#2A67B2', '#f7f7f7', '#2A67B2', '#ffffff', '#ffffff'],
        anchors: ['Home', 'About', 'Services', 'Partners', 'Contacts'],
        menu: '#menu',
        scrollingSpeed: 1000,
        responsive: 1700,
        keyboardScrolling: false,

        //Fade in content for sections ---------------------------------------------------------

        'onLeave': function (index, nextIndex, direction) {
            //going from section 1 to 2
            if (index == 1 && direction == 'down') {
                $(".svarigi p, .svarigi ul").each(function(i){

                    setTimeout(function() {
                        $(".svarigi p, .svarigi ul").eq(i).addClass("fade_in");
                    }, 300 * (i+1));
                });
                //going from section 2 to 3
            }  else if ((index == 2 && direction == 'down') || (index == 4 && direction == 'up')) {
                $(".pakalpojumi_cell").each(function(i){

                    setTimeout(function() {
                        $(".pakalpojumi_cell").eq(i).removeClass("opacity_0").addClass("opacity_1");
                    }, 240 * (i+1));
                });
                $(".content_middle").removeClass("opacity_0").addClass("opacity_1 add_bg");
                //going from section 3 to 4
            } else if ((index == 3 && direction == 'down') || (index == 5 && direction == 'up')) {
                $(".parner_img").each(function(i){

                    setTimeout(function() {
                        $(".parner_img").eq(i).removeClass("opacity_0").addClass("opacity_1");
                    }, 240 * (i+1));
                });
                $(".partner_block").removeClass("opacity_0").addClass("opacity_1 add_bg_w");
                //going from section 4 to 5
            }
        },

        afterRender: function(){

            for (var i = 0; i < $("video").length; i++) {
                $("video")[i].play();
            }

            $(".right p").addClass("fade_in");

            $(".cta").removeClass("opacity_0 scale");
        },

        'afterLoad': function (anchorLink, index) {
            //for section 3
            if (index == 3) {
                $(".pakalpojumi_cell").each(function(i){

                    setTimeout(function() {
                        $(".pakalpojumi_cell").eq(i).removeClass("opacity_0").addClass("opacity_1");
                    }, 200 * (i+1));
                });
                $(".content_middle").removeClass("opacity_0").addClass("opacity_1 add_bg");
                //for section 4
            } else if (index == 4) {
                $(".parner_img").each(function(i){

                    setTimeout(function() {
                        $(".parner_img").eq(i).removeClass("opacity_0").addClass("opacity_1");
                    }, 240 * (i+1));
                });
                $(".partner_block").removeClass("opacity_0").addClass("opacity_1 add_bg_w");
            }
        }
    });
});

//Menu action ------------------------------------------------
$(".hamburger").click(function(){
    $(".menu").fadeIn("fast");
});

$("#close").click(function(){
    $(".menu").fadeOut("fast");
});