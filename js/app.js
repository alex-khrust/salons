document.addEventListener("DOMContentLoaded", function () {

  // Custom JS

  // Toggle Password Visibility ==========================
  $('.toggle-password').on('click', function () {
    $(this).toggleClass('fa-eye fa-eye-slash');
    let input = $($(this).attr('toggle'));
    if (input.attr('type') == 'password') {
      input.attr('type', 'text');
    }
    else {
      input.attr('type', 'password');
    }
  });

  // Forms ===================================
  // $('form').find('input, textarea').on('keyup blur focus', function (e) {

  //   var $this = $(this),
  //     label = $this.prev('label');

  //   if (e.type === 'keyup') {
  //     if ($this.val() === '') {
  //       label.removeClass('active highlight');
  //     } else {
  //       label.addClass('active highlight');
  //     }
  //   } else if (e.type === 'blur') {
  //     if( $this.val() === '' ) {
  //       label.removeClass('active highlight');
  //     } else {
  //       label.removeClass('highlight');
  //     }
  //   } else if (e.type === 'focus') {

  //     if( $this.val() === '' ) {
  //       label.removeClass('highlight');
  //     }
  //     else if( $this.val() !== '' ) {
  //       label.addClass('highlight');
  //     }
  //   }

  // });

  //------------ menu hamburger -----------
  var wsize = 960;
  var windowWidth = $(window).width();

  $("header .navBurger, header .close-btn").click(function () {
    if ($(".header").hasClass("authorized")) {
      $(".user__nav--mobile").toggleClass("open");
    }
    else $(".header__nav").toggleClass("open");
    $(".overlay").toggleClass("active");
    if (windowWidth < wsize) $("body").toggleClass("locked");
    else $("body").removeClass("locked");
    // if (windowWidth < wsize) $(".overlay").removeClass("active");
  });

  $(".overlay").click(function () {
    $(".header__nav, .user__nav--mobile").removeClass("open");
    $(".overlay").removeClass("active");
  });

  // if (windowWidth > wsize) $(".overlay").removeClass("active");

  //---------------------------------------------------

  //login__popup =========================
  $(".enter-btn").click(function () {
    $("#login__popup").toggleClass("show");
  });
  $(".popup .overlay, .popup .close-btn").click(function () {
    $(".popup").removeClass("show");
  });

  // Toggle Break disabled ==========================
  $('.break>.chbx input').on('click', function () {
    $(this).closest('.break').toggleClass('disabled');
  });

  $('.services__header>.chbx input').on('click', function () {
    $(this).closest('.services-list__item').toggleClass('active');
  });

  $('.calendar>.chbx input').on('click', function () {
    $(this).closest('.chbx').toggleClass('active');
  });

  // ================================================
  $('.schedule__table td .flex-row>div').on('click', function () {
    $(this).toggleClass('edit');
    $('.edit-btns').toggleClass('active');
  });

  //=================================================

  // Swiper =======================================
  var swiper = new Swiper('.filial-slider', {
    spaceBetween: 10,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  });
  // Tabs ===================================================
  $('.tab__content').hide();
  $('.tabgroup .tab__content:first-child').show();
  $('.tabs__list a').click(function (e) {
    e.preventDefault();
    var $this = $(this),
      tabgroup = '#' + $this.parents('.tabs').find('.tabgroup'),
      others = $this.closest('li').siblings().children('a'),
      target = $this.attr('href');
    others.removeClass('active');
    $this.addClass('active');
    $('.tab__content').hide();
    $(target).fadeIn(300);
  })
  //===================================================
  $(".popup .overlay, .popup .close-btn").click(function () {
    $(".popup").removeClass("show").fadeOut(300);
  });
  //login__popup =========================
  $(".free").click(function () {
    $("#booked__popup").toggleClass("show");
  });
  //booking-date__popup =========================
  $(".salon__service>.btn").click(function () {
    $("#booking-date__popup").toggleClass("show");
  });
  //booking-time__popup =========================
  $("#booking-date__popup .btn").click(function () {
    $("#booking-time__popup").toggleClass("show");
    $("#booking-date__popup").toggleClass("show");
  });
  //city__popup ===================================================
  var popup = $('#city__popup');

  $('.place').click(function (e) {
    var coordinates = $(this).offset();
    coordinates.top += $(this).height() + 35;
    coordinates.left += $(this).width() - 40;
    popup.offset(coordinates);
    popup.fadeIn(300);
  });
  $(".popup .overlay, #city__popup .close-btn").click(function () {
    $(".popup").removeClass("show").fadeOut(300);
    $(".popup").offset();
  });
  //===================================================
  $('video').parent().click(function () {

    if ($(this).children("video").get(0).paused) {
      $(this).children("video").get(0).play();
      $(this).children(".play").fadeOut();
    } else {
      $(this).children("video").get(0).pause();
      $(this).children(".play").fadeIn();
    }

  });

  //===================================================

  /*
	By Osvaldas Valutis, www.osvaldas.info
	Available for use under the MIT License
*/

  'use strict';

  (function (document, window, index) {
    var inputs = document.querySelectorAll('input[type="file"]');
    Array.prototype.forEach.call(inputs, function (input) {
      var label = input.nextElementSibling,
        labelVal = label.innerHTML;

      input.addEventListener('change', function (e) {
        var fileName = '';
        if (this.files && this.files.length > 1)
          fileName = (this.getAttribute('data-multiple-caption') || '').replace('{count}', this.files.length);
        else
          fileName = e.target.value.split('\\').pop();

        if (fileName)
          label.querySelector('span').innerHTML = fileName;
        else
          label.innerHTML = labelVal;
      });

      // Firefox bug fix
      input.addEventListener('focus', function () { input.classList.add('has-focus'); });
      input.addEventListener('blur', function () { input.classList.remove('has-focus'); });
    });
  }(document, window, 0));
  //===================================================

  

});
