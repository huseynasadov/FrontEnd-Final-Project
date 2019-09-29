$(function () {

   // Loading 
	$(window).on( 'load', function() {
		$(".preloading").delay(3000).fadeOut(200);
		$(".book").on('click', function() {
		$(".preloading").fadeOut(200);
		})
    })
    
    // Nav scrool & Sticky
    let nav = $('nav');
    let win = $(window);
    let up = $(".sticky-ups");
    win.on('scroll', function () {
        var scroll = win.scrollTop();
        if (scroll < 300) {
            nav.removeClass("sticky");
            up.removeClass("sticky-up");
        } else {
            nav.addClass("sticky");

            up.addClass("sticky-up");

        }
    });

    // Sosial icons nav
    $(".fabs i").click(function () {
        $(".fabs i").removeClass("active");
        $(this).toggleClass("active");
    });;

    // Dropdown menu 
    let aHover = $(".li-home .home");
        aHover.each(function(ind,val){
            $(val).mouseover(function () {
                $(val).siblings().css("display", "block");
                setTimeout(function () {
                    $(val).siblings().css({ "opacity": "1", "transform": "translateY(18px)" });
                }, 50)
        
            });
            $(".li-home").mouseleave(function () {
                $(val).siblings().css({ "opacity": "0", "display": "none", "transform": "translateY(40px)" })
            });
        })
   

    // Searching click
    $(".searching .a-search").click(function () {
        $(".search-input").css("display", "flex");
        setTimeout(function () {
            $(".search-input").css("opacity", "1");
        }, 200)
    });

    $(".times").click(function () {
        $(".search-input").css("opacity", "0");
        setTimeout(function () {
            $(".search-input").css("display", "none");
        }, 200)
    });

    // Side Navigation
    $(".menu-bars").click(function () {
        $(".sidenav").css("width", "350px");
    });
    $(".times").click(function () {
        $(".sidenav").css("width", "0");
    });

    $(".sidenav ul li").each(function (ind, val) {
        $(val).click(function () {
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    });

    // Carpousel Section Home
    $('.section-home .owl-carousel').owlCarousel({
        loop: true,
        margin: 0,
        nav: true,
        items: 1,
        navSpeed: 800,
        autoplay: true,
        transitionStyle: "fade",
    })

    // Carousel Section Video
    $(".youtube-video").modalVideo();

    $(".accordion-about .accordions").each(function (ind, val) {
        $(val).click(function () {
            $(this).siblings('.active-red').removeClass('active-red');
            $(this).toggleClass('active-red');
            let panel = this.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                $(".accordion-about .accordions").each(function (ind, val) {
                    val.nextElementSibling.style.maxHeight = null;

                })
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        })
    });

    // Carousel Section Our Popular
    $('#carousel-popular').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 3,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
                
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    // Section acheivements Counter
    $(window).scroll(function () {
        if ($(this).scrollTop() >= 1900) {
            $('.acheivements-counter').each(function () {
                let $this = $(this),
                    countTo = $this.attr('data-counters');
                $({ countNum: $this.text() }).animate({
                    countNum: countTo
                },
                {
                    duration: 1200,
                    easing: 'linear',
                    step: function () {
                        $this.text(Math.ceil(this.countNum));
                    },
                    complete: function () {
                        $this.text(this.countNum);
                    }
                });
            });
        }
    });

    // Carousel Section Event
    $('#carousel-event').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 3,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    // Carousel Section Staff
    $('#carousel-staff').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 3,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            }
        }
    })

    //carousel Section Publications
    let owl = $('#carousel-publications');
    owl.owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 4,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 4
            }
        }
    })

    // Carousel Section People say
    $('#carousel-people-say').owlCarousel({
        loop: true,
        margin: 20,
        nav: true,
        items: 2,
        navSpeed: 500,
        smartSpeed: 1000,
        autoplay: true,
        autoplayTimeout: 4000,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            992: {
                items: 2
            }
        }
    })

    //Carousel Section Partners
    $('#carousel-partners').owlCarousel({
        loop: true,
        margin: 80,
        nav: true,
        navSpeed: 700,
        smartSpeed: 1500,
        autoplay: true,
        autoplayTimeout: 5000,
        transitionStyle: "fade",
        responsive: {
            0: {
                items: 1
            },

            576: {
                items: 2
            },
            768: {
                items: 4
            },
            992: {
                items: 5
            }
        }
    })

    // Scrool up
    var toUp = $('.sticky-ups');
    if (toUp.length) {
        win.on('scroll', function () {
            if (win.scrollTop() > 150) {
                toUp.fadeIn();
            } else {
                toUp.fadeOut();
            }
        });
        toUp.on('click', function () {
            $("html,body").animate({
                scrollTop: 0
            }, 500)
        });
    }
})