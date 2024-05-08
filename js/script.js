$(document).ready(function () {
  $(".about-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow: $(".about-slider-wrap .slider-navigation .slick-prev"),
    nextArrow: $(".about-slider-wrap .slider-navigation .slick-next"),
  });

  $(".advantages-slider").slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          variableWidth: true,
          autoplay: true,
          autoplaySpeed: 2000,
          dots: true,
        },
      },
    ],
  });

  $(".global-slider").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,
    prevArrow: $(
      ".global-slider-wrap .bottom-info .slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".global-slider-wrap .bottom-info .slider-navigation .slick-next"
    ),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          speed: 500,
          fade: true,
          cssEase: "linear",
        },
      },
    ],
  });

  $(".global-slider2").slick({
    dots: false,
    arrows: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    slidesToShow: 1,
    centerMode: true,

    prevArrow: $(
      ".global-slider-wrap2 .bottom-info .slider-navigation .slick-prev"
    ),
    nextArrow: $(
      ".global-slider-wrap2 .bottom-info .slider-navigation .slick-next"
    ),
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 1,
          centerMode: false,
          speed: 500,
          fade: true,
          cssEase: "linear",
        },
      },
    ],
  });

  $(window).scroll(function () {
    var sticky = $(".top-scroll"),
      scroll = $(window).scrollTop();
    if (scroll >= 200) sticky.addClass("show");
    else sticky.removeClass("show");
  });
  $(".top-scroll").smoothScroll({
    speed: 1000,
  });
  $(".phone-number-input").inputmask({
    mask: "+7 (999) 999 - 99 - 99",
  });
  $(".select-wrap select").select2({
    minimumResultsForSearch: 6,
  });
  $(".main-menu li button").on("click", function () {
    $(this).closest("li").find(".sub-menu").toggleClass("open");
  });
  $(".drop-menu").on("click", function () {
    $(".menu-wrap").toggleClass("open");
    $("body, html").toggleClass("overflow");
  });
  $(".tab-menu li button").on("click", function (e) {
    e.preventDefault();
    $(this).closest(".tab-menu").find("li").removeClass("active");
    $(this).closest("li").addClass("active");
    var index = $(this).closest("li").index();
    $(".tab-content-item").removeClass("active");
    $(".tab-content-item").eq(index).addClass("active");
  });
  $(".popup").magnificPopup({
    type: "inline",
    mainClass: "mfp-fade",
  });

  AOS.init();

  let widnowWidth = $(window).width();

  $(window)
    .on("resize", function () {
      widnowWidth = $(window).width();
    })
    .resize();

  ScrollTrigger.create({
    trigger: "#header-animation",
    start: `top top-=-0`,
    end: `top top-=${widnowWidth > 768 ? "41%" : "46%"}`,
    pin: true,
    onUpdate: function (e) {
      const percent = e.progress * 100;
      if (percent > 99) {
        $("#black-logo").css("opacity", 1);
      } else {
        $("#black-logo").css("opacity", 0);
      }
    },
  });
});
