  // Typed.js

  $(function(){
      $(".banner-animation").typed({
        strings: ["Supplies", "Devices"],
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

  // $('.ed-thumbnail').on('click', function(){
  // event.preventDefault();
  //   $('.ed-thumbnail').addClass('ed-thumbnail-shift');
  //   $('.close-slideout').addClass('hidden');
  //   $('.close-bio').removeClass('hidden');
  //   $('.contact-slideout').addClass('contact-slideout-expand');

  // });



  // $('.contact-thumbnail').hover(function(){
  //   $('.ed-name').removeClass('hidden');
  // });

    $('.dropdown-trigger').on('click', function(){
  event.preventDefault();
    $('.nav-dropdown').toggleClass('open-product-nav');
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