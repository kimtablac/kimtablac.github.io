// 'use strict';
// $(document).ready(function($) {


    
  
  
//   });

  $(document).ready(function( $ ) {

    'use strict';
    $(window).load( function () {
      $( "#loading" ).fadeOut( 500 );
  } );

    var typed = $(".typed");

    var wow = new WOW( {
      mobile: false // trigger animations on mobile devices (default is true)
  } );

  wow.init();
    $(function() {
      typed.typed({
        strings: ["Web Developer.", "WordPress Expert.", "Freelancer."],
        typeSpeed: 100,
        loop: true,
      });
    });
  
  
  });
  
  