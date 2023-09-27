$('.our_customers .owl-carousel').owlCarousel({
	loop: true,
	margin: 10,
	dots: true,
	nav: false,
	items: 1,
});

$('.our_expertise .owl-carousel').owlCarousel({      
    items:1,
    loop:false,     
    dots:false,
    nav:false,
    margin:20,
    autoplay:true,
    rewind:true,
    lazyLoad:true,
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
            items:3,
        }       
    }
});