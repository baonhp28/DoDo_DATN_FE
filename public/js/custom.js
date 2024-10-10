jQuery(document).ready(function ($) {
    'use strict';

    /**********************
     * Mobile Menu Activation
     ***********************/
    const mainMenuNav = $('.main-navigation');
    mainMenuNav.meanmenu({
        meanScreenWidth: '991',
        meanMenuContainer: '.mobile-menu',
        meanMenuClose: '<span class="menu-close"></span>',
        meanMenuOpen: '<span class="menu-bar"></span>',
        meanRevealPosition: 'right',
        meanMenuCloseSize: '0',
    });

    /**********************
     * Sticky Mobile Menu Activation
     ***********************/
    function stickyMobileMenu() {
        $('.sticky-mobile-menu').on('click', function () {
            $(this).toggleClass('sticky-close');
            $('.sticky-menu').toggleClass('sticky-open').slideToggle('slow');
        });

        $('.sticky-has-child > a').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('ul').slideToggle('slow').toggleClass('hidden-sub');
        });

        $('.megamenu__heading').on('click', function (e) {
            e.preventDefault();
            $(this).siblings('ul').slideToggle('slow').toggleClass('hidden-sub');
        });
    }

    stickyMobileMenu();

    /**********************
     * Expand Category Menu
     ***********************/
    function categoryMenuExpand() {
        $(".hidden-menu-item").hide();

        $(window).on('load resize', function () {
            const ww = $(window).width();
            if (ww <= 1200) {
                $(".hidden-lg-menu-item").hide();
            } else {
                $(".hidden-lg-menu-item").show();
            }
        });

        $("#js-cat-nav-title").on('click', function () {
            $("#js-cat-nav").slideToggle(500);
        });

        $(".js-expand-hidden-menu").on('click', function (e) {
            e.preventDefault();
            $(".hidden-menu-item").toggle(500);
            if ($(window).width() <= 1200) {
                $(".hidden-lg-menu-item").toggle(500);
            }
            const htmlAfter = "Close Categories";
            const htmlBefore = "More Categories";
            $(this).html($(this).text() === htmlAfter ? htmlBefore : htmlAfter).toggleClass("menu-close");
        });
    }

    /**********************
     * Expand Category Mobile Menu
     ***********************/
    function categoryMenuExpandInMobile() {
        $('.has-children').on('click', function (e) {
            e.preventDefault();
            $(this).find('.category-nav__submenu').slideToggle(500);
        });
    }

    categoryMenuExpand();
    categoryMenuExpandInMobile();

    /**********************
     * Carousel Initialization
     ***********************/
    const $html = $('html');
    const $body = $('body');
    const $uptimoSlickSlider = $('.petmark-slick-slider');

    if ($html.attr("dir") === "rtl" || $body.attr("dir") === "rtl") {
        $uptimoSlickSlider.attr("dir", "rtl");
    }

    $uptimoSlickSlider.each(function () {
        const $this = $(this);
        const settings = $this.data('slick-setting') || {};
        const responsiveSettings = $this.data('slick-responsive') || [];

        $this.slick({
            autoplay: settings.autoplay || false,
            autoplaySpeed: parseInt(settings.autoplaySpeed, 10) || 2000,
            asNavFor: settings.asNavFor || null,
            appendArrows: settings.appendArrows || $this,
            appendDots: settings.appendDots || $this,
            arrows: settings.arrows || false,
            dots: settings.dots || false,
            centerMode: settings.centerMode || false,
            centerPadding: settings.centerPadding || '50px',
            fade: settings.fade || false,
            focusOnSelect: settings.focusOnSelect || false,
            infinite: settings.infinite || false,
            pauseOnHover: settings.pauseOnHover || true,
            rows: parseInt(settings.rows, 10) || 1,
            slidesToShow: parseInt(settings.slidesToShow, 10) || 1,
            slidesToScroll: parseInt(settings.slidesToScroll, 10) || 1,
            swipe: settings.swipe || true,
            swipeToSlide: settings.swipeToSlide || false,
            variableWidth: settings.variableWidth || false,
            vertical: settings.vertical || false,
            verticalSwiping: settings.verticalSwiping || false,
            rtl: settings.rtl || $html.attr('dir') === 'rtl' || $body.attr('dir') === 'rtl',
            prevArrow: settings.prevArrow ? `<button class="${settings.prevArrow.buttonClass || 'slick-prev'}"><i class="${settings.prevArrow.iconClass}"></i></button>` : '<button class="slick-prev">previous</button>',
            nextArrow: settings.nextArrow ? `<button class="${settings.nextArrow.buttonClass || 'slick-next'}"><i class="${settings.nextArrow.iconClass}"></i></button>` : '<button class="slick-next">next</button>',
            responsive: responsiveSettings
        });
    });

    /**********************
     * Dropdown Slide Down Effect
     ***********************/
    $(".slide-down--btn").on('click', function (e) {
        e.stopPropagation();
        const $item = $(this).siblings('.slide-down--item');
        $item.slideToggle(400).toggleClass("show");
        $(this).parents('.slide-wrapper').siblings().find('.slide-down--item').slideUp(400);
    });

    /**********************
     * Slideup While Clicking On DOM
     ***********************/
    function clickDom() {
        $('body').on('click', function () {
            $('.slide-down--item').slideUp(500);
        });

        $('.slide-down--item').on('click', function (e) {
            e.stopPropagation();
        });
    }

    clickDom();

    /**********************
     * Sticky Header
     ***********************/
    function stickyHeader() {
        $(window).on('resize load', function () {
            const width = $(window).width();
            const $header = $('.sticky-init');
            if (width <= 991) {
                $header.removeClass('fixed-header sticky-header');
            } else {
                $header.addClass('fixed-header');
            }
        });

        $(window).on('scroll', function () {
            const headerHeight = $('.header').outerHeight();
            if ($(window).scrollTop() >= headerHeight) {
                $('.fixed-header').addClass('sticky-header');
            } else {
                $('.fixed-header').removeClass('sticky-header');
            }
        });
    }

    stickyHeader();

    /**********************
     * Range Slider
     ***********************/
    $(".pm-range-slider").slider({
        range: true,
        min: 0,
        max: 500,
        values: [80, 320],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });

    $("#amount").val("$" + $(".pm-range-slider").slider("values", 0) + " - $" + $(".pm-range-slider").slider("values", 1));

    /**********************
     * Product View Mode Toggle
     ***********************/
    $('.product-view-mode a').on('click', function (e) {
        e.preventDefault();
        const shopProductWrap = $('.shop-product-wrap');
        const viewMode = $(this).data('bs-target');

        $('.product-view-mode a').removeClass('active');
        $(this).addClass('active');
        shopProductWrap.removeClass('grid list').addClass(viewMode);
        $('.pm-product').toggleClass('product-type-list', shopProductWrap.hasClass('list'));
    });

    /**********************
     * Elevate Zoom
     ***********************/
    $("#zoom_03").elevateZoom({
        gallery: 'product-view-gallery',
        cursor: 'pointer',
        galleryActiveClass: 'active',
        imageCrossfade: true
    });

    $("#zoom_03").on("click", function (e) {
        const ez = $('#zoom_03').data('elevateZoom');
        // $.fancybox(ez.getGalleryList());
        return false;
    });

    /**********************
     * Quantity Adjustments
     ***********************/
    $('.count-btn').on('click', function () {
        const $button = $(this);
        const $input = $button.parent('.count-input-btns').parent().find('input');
        let oldValue = parseFloat($input.val());

        if ($button.hasClass('inc-ammount')) {
            $input.val(oldValue + 1);
        } else {
            $input.val(Math.max(oldValue - 1, 0));
        }
    });

    /**********************
     * Shipping Form Toggle
     ***********************/
    $('[data-shipping]').on('click', function () {
        $('#shipping-form').slideToggle($('[data-shipping]:checked').length > 0);
    });

    /**********************
     * Add To Cart Animation
     ***********************/
    $('.add-to-cart').on('click', function (e) {
        e.preventDefault();
        $(this).toggleClass('added')
            .find('i')
            .toggleClass('ti-check ti-shopping-cart')
            .siblings('span')
            .text(function (_, text) {
                return text === 'Added to cart' ? 'Add to cart' : 'Added to cart';
            });
    });
});
