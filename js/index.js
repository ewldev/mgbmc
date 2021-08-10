//Slick carousel plugin - https://kenwheeler.github.io/slick/

//   $(document).ready(function(){
//   $('.services-carousel').slick({
//     // slidesToShow: 3,
//     // slidesToScroll: 1,
//     autoplay: true,
//     // autoplaySpeed: 2000
    
//   });
// });

// $(document).ready(function(){
//     $('.services-carousel').slick({
//     //   adaptiveHeight: true,
//       autoplay: true,
//       //autoplaySpeed: 5000,
//     //   dots: true,
//     //   arrows: false,
//       fade: true,
//       speed: 1500,
//     //   mobileFirst: true
//       //pauseOnHover: false
//       // setting-name: setting-value
//     });
//   });

$(document).ready(function(){
    $('.services-carousel').slick({
      
        autoplay: true,
        autoplaySpeed: 2000,
        centerMode: true,
        centerPadding: '375px',
        // slidesToShow: 6,  
        
        // responsive: [
        //   {
        //     breakpoint: 568,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '140px',
        //       slidesToShow: 3
        //     }
        //   },
        //   {
        //     breakpoint: 580,
        //     settings: {
        //       arrows: false,
        //       centerMode: true,
        //       centerPadding: '40px',
        //       slidesToShow: 1
        //     }
        //   }
        // ]
      });
    });
 
