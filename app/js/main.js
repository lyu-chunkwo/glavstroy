$(function () {

  // $('.actions-page__link').click(function (e) {
  //   $($('.actions-page__modal')[($(this).index())]).toggleClass('active');
  //   e.preventDefault();
  // });



  // ! Main slider
  $('.header__slider-inner').slick({
    arrows: true,
    dots: false,
    fade: false,
    autoplay: true,

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/arrow-right.svg" alt="next"></button>',
  });



  // ! Action slider
  $('.action-slider__inner').slick({
    arrows: true,
    dots: false,
    fade: false,
    autoplay: true,

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/arrow-left.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/arrow-right.svg" alt="next"></button>',
  });



  //  ! Добавление классов при скролле
  $(document).scroll(function () {

    var scrollTop = $(window).scrollTop();
    console.log(scrollTop);
    if (scrollTop >= 50) {
      $('.menu-scroll').addClass("scroll");
    }
    else {
      $('.menu-scroll').removeClass("scroll");
    }
  });



  // !Slider Hits Syncing
  $('.reviews__top').slick({
    asNavFor: '.reviews__bottom',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: true,

    prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/arrow-prev.svg" alt="prev"></button>',
    nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/arrow-next.svg" alt="next"></button>',

    responsive: [
      {
        breakpoint: 451,
        settings: {
          arrows: false,
          dots: true
        }
      }
    ]
  });

  $('.reviews__bottom').slick({
    asNavFor: '.reviews__top',
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: false,
    arrows: false,
    dots: false,
  });


  // ! Button for adaptive menu
  $('.menu-top__btn').on('click', function () {
    $('.menu-top__list,.menu-top__btn').toggleClass('active');
    $('body').toggleClass('lock');
  });


  // !Form styler script
  $('.combined-top__select').styler();



  // ! Filter price
  $('.combined-calc__square-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.combined-calc__from--square').text(data.from);
      $('.combined-calc__to--square').text(data.to);
    },
    onChange: function (data) {
      $('.combined-calc__from--square').text(data.from);
      $('.combined-calc__to--square').text(data.to);
    },
  });

  $('.combined-calc__cost-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.combined-calc__from--cost').text(data.from);
      $('.combined-calc__to--cost').text(data.to);
    },
    onChange: function (data) {
      $('.combined-calc__from--cost').text(data.from);
      $('.combined-calc__to--cost').text(data.to);
    },
  });

  $('.combined-calc__percent-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.combined-calc__from--percent').text(data.from);
      $('.combined-calc__to--percent').text(data.to);
    },
    onChange: function (data) {
      $('.combined-calc__from--percent').text(data.from);
      $('.combined-calc__to--percent').text(data.to);
    },
  });

  $('.combined-calc__month-input').ionRangeSlider({
    prettify_enabled: true,
    onStart: function (data) {
      $('.combined-calc__from--month').text(data.from);
      $('.combined-calc__to--month').text(data.to);
    },
    onChange: function (data) {
      $('.combined-calc__from--month').text(data.from);
      $('.combined-calc__to--month').text(data.to);
    },
  });



  // ! Stages Tabs script
  $('.stages__link').on('click', function (e) {
    e.preventDefault();
    $('.stages__link').removeClass('stages__link--active');
    $(this).addClass('stages__link--active');

    $('.stages__item-box').removeClass('stages__item-box--active');
    $($(this).attr('href')).addClass('stages__item-box--active');
  })

  $('.stages__item').on('click', function (e) {
    e.preventDefault();
    $('.stages__item').removeClass('stages__item--active');
    $(this).addClass('stages__item--active');
  })



  // ! Video Tabs script
  $('.video__link').on('click', function (e) {
    e.preventDefault();
    $('.video__link').removeClass('video__link--active');
    $(this).addClass('video__link--active');

    $('.video__content-item').removeClass('video__content-item--active');
    $($(this).attr('href')).addClass('video__content-item--active');
  })



  // ! MODAL WINDOW
  $('.actions-page__link').on('click', function (e) {
    e.preventDefault();
    $('.actions-page__link').removeClass('active');
    $(this).addClass('active');

    $('.actions-page__modal').removeClass('active');
    $($(this).attr('href')).addClass('active');
  })
  
  $('.actions-page__close').on('click', function (e) {
    e.preventDefault();
    $('.actions-page__modal').removeClass('active');
    $('.actions-page__link').removeClass('active');
    $('.actions-page__text').removeClass('active');
  })

  $('.actions-page__link--one').on("click", function () {
    $('.actions-page__text').removeClass("active");
    $('.actions-page__text--one').addClass("active");
  });

  $('.actions-page__link--two').on("click", function () {
    $('.actions-page__text').removeClass("active");
    $('.actions-page__text--two').addClass("active");
  });

  $('.actions-page__link--three').on("click", function () {
    $('.actions-page__text').removeClass("active");
    $('.actions-page__text--three').addClass("active");
  });



  // ! interactive__slider
  // $('.interactive__slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   infinite: false,
  //   dots: false,
  //   asNavFor: '.interactive__top-slider',

  //   prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/angle-left.svg" alt="prev"></button>',
  //   nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/angle-right.svg" alt="next"></button>',
  // });

  // $('.interactive__top-slider').slick({
  //   slidesToShow: 1,
  //   slidesToScroll: 1,
  //   asNavFor: '.interactive__slider',
  //   fade: true,
  //   arrows: false,
  //   infinite: false,
  // });


  // ! Hits slider
  // $('.some-class').slick({
  // 	slidesToShow: 4,
  // 	slidesToScroll: 1,
  // 	infinite: false,
  //   dots: true,

  // 	prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/angle-left.svg" alt="prev"></button>',
  //   nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/angle-right.svg" alt="next"></button>',

  // 	responsive: [
  // 		{
  // 			breakpoint: 1201,
  // 			settings: {
  // 				slidesToShow: 3,
  // 				slidesToScroll: 1,
  // 			}
  // 		},
  // 		{
  // 			breakpoint: 901,
  // 			settings: {
  // 				slidesToShow: 2,
  // 				slidesToScroll: 1
  // 			}
  // 		},
  // 		{
  // 			breakpoint: 651,
  // 			settings: {
  // 				slidesToShow: 1,
  // 				slidesToScroll: 1
  // 			}
  // 		}
  // 	]
  // });



  // ! Brands slider
  // $('.slider').slick({
  //   arrows: true,
  //   dots: true,
  //   fade: false,
  //   slidesToShow: 7,
  //   slidesToScroll: 2,
  //   infinite: true,
  //   autoplay: true,

  //   prevArrow: '<button class="slick-btn slick-prev"><img src="images/ico/left.svg" alt="prev"></button>',
  //   nextArrow: '<button class="slick-btn slick-next"><img src="images/ico/right.svg" alt="next"></button>',

  //     responsive: [
  //     {
  //       breakpoint: 1171,
  //       settings: {
  //         slidesToShow: 5,
  //         slidesToScroll: 2,
  //       }
  //     },
  //     {
  //       breakpoint: 1021,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //       }
  //     },
  //     {
  //       breakpoint: 761,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         arrows: false,
  //       }
  //     },
  //     {
  //       breakpoint: 481,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1,
  //         arrows: false,
  //       }
  //     },
  //   ]
  // });


  // ! Switch product grid to list
  // $('.shop-content__view-btn').on('click', function () {
  // 	$('.shop-content__view-btn').removeClass('shop-content__view-btn--active');
  // 	$(this).addClass('shop-content__view-btn--active');
  // });

  // $('.button-list').on('click', function () {
  // 	$('.products-item').addClass('products-item--list');
  // 	$('.pagination').addClass('pagination--list');
  // 	// $('.shop-content__inner').addClass('shop-content__nogrid');
  // })
  // $('.button-grid').on('click', function () {
  // 	$('.products-item').removeClass('products-item--list');
  // 	$('.pagination').removeClass('pagination--list');
  // 	// $('.shop-content__inner').removeClass('shop-content__nogrid');
  // })



  // ! Filter price
  // $('.filter-price__input').ionRangeSlider({
  //   prettify_enabled: true,
  //   onStart: function (data){
  //     $('.filter-price__from').text(data.from);
  // 		$('.filter-price__to').text(data.to);
  // 	},
  // 	onChange: function (data) {
  //     $('.filter-price__from').text(data.from);
  // 		$('.filter-price__to').text(data.to);
  // 	},
  // });



  // ! Stars rating
  // $(".stars").rateYo({
  // 	starWidth: "12px",
  // 	normalFill: "#d6d6d6",
  // 	ratedFill: "#ffcc00",
  // 	starSvg: '<svg  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>'
  // });



  // ! For brands menu
  // $('.menu__link--brands').on('click', function () {
  //   $('.menu-brands').toggleClass('menu-brands--active');
  // });




  // !Script for mixitup filter
  // var mixer = mixitup('.brands__list');


  // const mix1 = document.querySelector('.brands__list');
  // const mix2 = document.querySelector('.design__list');

  // if(mix1){
  //   mixitup('.brands__list', {
  // 		selectors: {
  // 			control: '.filter1'
  // 		}
  // 	})
  // }

  // if(mix2){
  // 	mixitup('.design__list', {
  // 		selectors: {
  // 			control: '.filter2'
  // 		}
  // 	})
  // }


  // ! Partners slider
  // $('.partners-slider__list').slick({
  // 	arrows: false,
  // 	slidesToShow: 5,
  // 	slidesToScroll: 1,
  // 	autoplay: true,
  // 	responsive: [
  // 		{
  // 			breakpoint: 951,
  // 			settings: {
  // 				slidesToShow: 4,
  // 				slidesToScroll: 1,
  // 				infinite: false,
  // 				dots: false
  // 			}
  // 		},

  // 		{
  // 			breakpoint: 851,
  // 			settings: {
  // 				slidesToShow: 3,
  // 				slidesToScroll: 1,
  // 				infinite: false,
  // 				dots: false
  // 			}
  // 		},
  // 	]
  // });


  // ! FAQ

  // jQuery(function ($) {

  //   $(".accordion-content").css("display", "none");


  //   $(".accordion-title").click(function () {

  //     $(".accordion-title").not(this).removeClass("open");

  //     $(".accordion-title").not(this).next().slideUp(300);

  //     $(this).toggleClass("open");

  //     $(this).next().slideToggle(300);
  //   });
  // });




  // jQuery(document).ready(function ($) {
  //   $('.menu__link--brands').hover(
  //     function () {
  //       $('.brands-drop', this).stop().slideDown(400);
  //     },
  //     function () {
  //       $('.brands-drop', this).stop().slideUp(400);
  //     }
  //   );
  // });




  // ! WOWJS
  //   wow = new WOW(
  //     {
  //       boxClass: 'wow',      // default
  //       animateClass: 'animate__animated', // default
  //       offset: 0,          // default
  //       mobile: true,       // default
  //       live: true        // default
  //     }
  //   )
  //   wow.init();



  // $(window).scroll(function () {

  //   var scroll = $('body').scrollTop();

  //   if (scroll >= 100) {
  //     $('.header__top').css('background-color', 'rgb(27, 17, 3)');
  //     anchor.css('color', '#000');
  //   }
  //   else {
  //     // $('.navbar').css('background','rgba(246, 222, 166, 0.29)');
  //     $('.navbar').css('background', 'transparent');
  //     anchor.css('color', '#721001');

  //   }

  // });



});