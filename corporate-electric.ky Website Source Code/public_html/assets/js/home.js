$('.related_services .owl-carousel').owlCarousel({      
    items:1,
    loop:true,      
    dots:true,
    margin:10,
    autoplay:true,
    nav:false,
    navText : ['<i class="icon-right-arrow"></i>','<i class="icon-left-arrow"></i>'],
    smartSpeed:1500,
    responsive:{
        0:{
            items:1,                        
        },                  
        568:{
            items:2,        
        },                  
        1000:{
            items:3,
            margin:30,
        }       
    }
});

/* Home page */

$('.services_section .owl-carousel').owlCarousel({    
  items:1,
  loop:false,   
  dots:false,
  nav:false,
  margin:20,
  autoplay:true,
  rewind:true,
  lazyLoad:true,
  navText : ['<i class="icon-right-arrow"></i>','<i class="icon-left-arrow"></i>'],
  smartSpeed:1500,
  responsive:{
    0:{
      items:1,            
    },          
    576:{
      items:2,    
    },
    768:{
      items:3,    
    },          
    1200:{
      items:4,
    }   
  }
});

$('.ourclient_section .owl-carousel').owlCarousel({
  loop: false,
  margin: 10,
  dots: true,
  nav: false,
    rewind:true,
    lazyLoad:true,
    smartSpeed: 1000,
  responsive:{
    0:{
      items:3,
            margin:30
    },
    768:{
      items:4
    },
    1000:{
      items:5
    }
  }
});

$('.ourwork-section .owl-carousel').owlCarousel({        
    items:1,
    loop:true,      
    dots:false,
    nav:true,
    margin:33,
    autoplay:false,
    autoWidth:true,
    rewind:true,
    lazyLoad:true,
    navText : ['<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14.667"><path d="M.134 7.009 7.009.134a.458.458 0 0 1 .648.648L1.565 6.875h19.977a.459.459 0 1 1 0 .917H1.565l6.093 6.093a.458.458 0 1 1-.648.648L.134 7.657a.458.458 0 0 1 0-.648Z"/></svg>','<svg xmlns="http://www.w3.org/2000/svg" width="22" height="14.667"><path d="M21.866 7.009 14.991.134a.458.458 0 0 0-.648.648l6.093 6.093H.458a.459.459 0 1 0 0 .917h19.977l-6.093 6.093a.458.458 0 1 0 .648.648l6.875-6.875a.458.458 0 0 0 .001-.649Z"/></svg>'],
    smartSpeed:1500,
    responsive:{
        0:{
            items:2,    
            autoWidth:true                  
        },                  
        576:{
            items:2,        
        },
        768:{
            items:3,        
        },                  
        1200:{
            items:4,
        }       
    }
});

$('.our_customers .owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  dots: true,
  nav: false,
    autoHeight:true,
  items: 1,
});


$('.service_slider .owl-carousel').owlCarousel({
    loop:false,
    margin:30,
    nav:false,
  dots:false,
  stagePadding: 130,
  smartSpeed: 1200,
    autoplay:true,
    autoplayTimeout:9000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1,
            stagePadding: 50,
            margin: 10
        },
        576:{
            items:2,
            margin: 10
        },
        1000:{
            items:3
        },
        1200:{
            items:4
        }
    }
});

$('.featured_blog_slider .owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    navText: ['<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 23a1 1 0 0 0 0-1.41L5.5 17h23.55a1 1 0 0 0 0-2H5.53l4.57-4.57A1 1 0 0 0 8.68 9l-6.36 6.37a.9.9 0 0 0 0 1.27L8.68 23a1 1 0 0 0 1.42 0Z" data-name="Layer 2"/></svg>', '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><path d="M22 9a1 1 0 0 0 0 1.42l4.6 4.6H3.06a1 1 0 1 0 0 2h23.52L22 21.59A1 1 0 0 0 22 23a1 1 0 0 0 1.41 0l6.36-6.36a.88.88 0 0 0 0-1.27L23.42 9A1 1 0 0 0 22 9Z" data-name="Layer 2"/></svg>'],
    items:1,
    autoHeight:true,
    smartSpeed:1000,
    dots:false
});