  // Typed.js

  $(function(){
      $(".banner-animation").typed({
        strings: ["Supplies", "Devices", "Equipment"],
        typeSpeed: 100,
        backDelay: 3000,
        loop: true, 
        showCursor: false
      });
  });

  // Contact Slideout

  $('.contact-square').on('click', function(){
  event.preventDefault();
    $('.contact-slideout').toggleClass('open-slideout');
    // $('.close-slideout').removeClass('hidden');
    // $('.contact-square').addClass('hidden');


  });

  // $('.close-slideout').on('click', function(){
  // event.preventDefault();
  //   $('.contact-slideout').removeClass('open-slideout');
  //   $('.close-slideout').addClass('hidden');
  //   $('.contact-square').removeClass('hidden');
  // });




  // Edward Slideout

  $('.ed-thumbnail').on('click', function(){
  event.preventDefault();

    $('.davis-thumbnail').toggleClass('hidden');
    $('.ed-bio').toggleClass('hidden');
    $('.open-slideout').toggleClass('open-bio');
    $('.contact').toggleClass('contact-expand-bio');

    $('.contact-square').addClass('hidden');
    $('.ed-exit-bio').removeClass('hidden');

    $('.ed-thumbnail').addClass('hidden');
    $('.ed-thumbnail-bio').removeClass('hidden');


  });

  $('.ed-exit-bio').on('click', function(){
  event.preventDefault();

    $('.davis-thumbnail').toggleClass('hidden');
    $('.ed-bio').toggleClass('hidden');
    $('.open-slideout').toggleClass('open-bio');
    $('.contact').toggleClass('contact-expand-bio');

    $('.contact-square').removeClass('hidden');
    $('.ed-exit-bio').addClass('hidden');
    
    $('.ed-thumbnail').removeClass('hidden');
    $('.ed-thumbnail-bio').addClass('hidden');

  });


  // Davis SLideout

  $('.davis-thumbnail').on('click', function(){
  event.preventDefault();

    $('.ed-thumbnail').toggleClass('hidden');
    $('.davis-bio').toggleClass('hidden');
    $('.open-slideout').toggleClass('open-bio');
    $('.contact').toggleClass('contact-expand-bio');

    $('.contact-square').addClass('hidden');
    $('.davis-exit-bio').removeClass('hidden');

    $('.davis-thumbnail').addClass('hidden');
    $('.davis-thumbnail-bio').removeClass('hidden');


  });

  $('.davis-exit-bio').on('click', function(){
  event.preventDefault();

    $('.ed-thumbnail').toggleClass('hidden');
    $('.davis-bio').toggleClass('hidden');
    $('.open-slideout').toggleClass('open-bio');
    $('.contact').toggleClass('contact-expand-bio');

    $('.contact-square').removeClass('hidden');
    $('.davis-exit-bio').addClass('hidden');
    
    $('.davis-thumbnail').removeClass('hidden');
    $('.davis-thumbnail-bio').addClass('hidden');

  });



  // $('.contact-thumbnail').hover(function(){
  //   $('.ed-name').removeClass('hidden');
  // });

    $('.dropdown-trigger').on('click', function(){
  event.preventDefault();
    $('.nav-dropdown').toggleClass('open-product-nav');
    $('.banner-wrap').toggleClass('banner-shift');
    $('.services').toggleClass('services-shift');

  });

  //   $( ".dropdown-trigger" )
	 //  .mouseover(function() {
	 //    $( ".nav-dropdown" ).addClass( "open-product-nav" );

	 //  })
	 //  .mouseout(function() {
	 //    $( ".nav-dropdown" ).removeClass( "open-product-nav" );

  // });




  $( ".ed-thumbnail" )
  .mouseover(function() {
    // $( ".ed-name", this ).removeClass( "hidden" );
    $( ".ed-name", this ).addClass( "name-jump" );

  })
  .mouseout(function() {
    // $( ".ed-name", this ).addClass( "hidden" );
    $( ".ed-name", this ).removeClass( "name-jump" );

  });

    $( ".davis-thumbnail" )
  .mouseover(function() {
    // $( ".davis-name", this ).removeClass( "hidden" );
    $( ".davis-name", this ).addClass( "name-jump" );

  })
  .mouseout(function() {
    // $( ".davis-name", this ).addClass( "hidden" );
    $( ".davis-name", this ).removeClass( "name-jump" );

  });

  // Phone Number Hover

  // $('.phone-li').on('click', function(){
  // event.preventDefault();
  //   $('.davis-phone').toggleClass('hidden');
  //   // $('.close-slideout').removeClass('hidden');
  //   // $('.contact-square').addClass('hidden');
  // });

      $( ".phone-li" )
  .mouseover(function() {
    // $( ".davis-name", this ).removeClass( "hidden" );
    $( ".davis-phone", this ).removeClass( "hidden" );

  })
  .mouseout(function() {
    // $( ".davis-name", this ).addClass( "hidden" );
    $( ".davis-phone", this ).addClass( "hidden" );

  });

  $(document).ready(function() {
    $('#fullpage').fullpage({
        //Navigation
        menu: false,
        anchors:['home', 'footer'],
        navigation: true,
        navigationPosition: 'right',
        navigationTooltips: ['firstSlide', 'secondSlide'],
        showActiveTooltips: false,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',

        //Scrolling
        css3: true,
        scrollingSpeed: 1000,
        autoScrolling: true,
        fitToSection: true,
        scrollBar: false,
        easing: 'easeInOutCubic',
        easingcss3: 'ease',
        loopBottom: false,
        loopTop: false,
        loopHorizontal: true,
        continuousVertical: false,
        normalScrollElements: '#element1, .element2',
        scrollOverflow: false,
        touchSensitivity: 15,
        normalScrollElementTouchThreshold: 5,

        //Accessibility
        keyboardScrolling: true,
        animateAnchor: true,
        recordHistory: true,

        //Design
        controlArrows: true,
        verticalCentered: false,
        resize : false,
        sectionsColor : ['#fff', 'transparent'],
        paddingTop: '3em',
        paddingBottom: '10px',
        fixedElements: '#header, .footer',
        responsive: 0,

        //Custom selectors
        sectionSelector: '.section',
        slideSelector: '.slide',

        //events
        onLeave: function(index, nextIndex, direction){},
        afterLoad: function(anchorLink, index){},
        afterRender: function(){},
        afterResize: function(){},
        afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
        onSlideLeave: function(anchorLink, index, slideIndex, direction){}
    });
});