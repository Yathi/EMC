

// Document ready
$(function() {
       
/*-----------------------------------------------------------------------------------*/
/*	01. PARALLAX SETTING
/*-----------------------------------------------------------------------------------*/
	

  $(document).ready(function(){	
	//.parallax(xPosition, speedFactor, outerHeight) options:
	//xPosition - Horizontal position of the element
	//inertia - speed to move relative to vertical scroll. Example: 0.1 is one tenth the speed of scrolling, 2 is twice the speed of scrolling
	//outerHeight (true/false) - Whether or not jQuery should use it's outerHeight option to determine when a section is in the viewport
	$('#header').parallax("10%", 1.5);	
})

/*-----------------------------------------------------------------------------------*/
/*	02. NAVBAR STICKY + SELECTED
/*-----------------------------------------------------------------------------------*/
	


var cbpAnimatedHeader = (function() {

	var docElem = document.documentElement,
		header = document.querySelector( '.cbp-af-header' ),
		didScroll = false,
		changeHeaderOn = 10;

	function init() {
		window.addEventListener( 'scroll', function( event ) {
			if( !didScroll ) {
				didScroll = true;
				setTimeout( scrollPage, 100 );
			}
		}, false );
	}

	function scrollPage() {
		var sy = scrollY();
		if ( sy >= changeHeaderOn ) {
			//classie.add( header, 'cbp-af-header-shrink' );
		}
		else {
			//classie.remove( header, 'cbp-af-header-shrink' );
		}
		didScroll = false;
	}

	function scrollY() {
		return window.pageYOffset || docElem.scrollTop;
	}

	init();

})();
	var sections = $("section");
	var navigation_links = $("nav a");
	
	sections.waypoint({
		handler: function(event, direction) {
		
			var active_section;
			active_section = $(this);
			if (direction === "up") active_section = active_section.prev();

			var active_link = $('nav a[href="#' + active_section.attr("id") + '"]');
			navigation_links.removeClass("selected");
			active_link.addClass("selected");

		},
		offset: '30'
	})

});

$("#Nav4sub1, #Nav4sub2, Nav4").click(function(){
	$("#Nav1 a, #Nav2 a, #Nav3 a").removeClass("selected");
	$("#Nav4 a").addClass("selected");
});

/*-----------------------------------------------------------------------------------*/
/*	03. SMOOTH SCROLLING
/*-----------------------------------------------------------------------------------*/
	

$('nav a, .buttongo a').click(function(e){
    $('html,body').scrollTo(this.hash,this.hash);
    e.preventDefault();
});



/*-----------------------------------------------------------------------------------*/
/*	04. ISOTOPE PROJECTS & FILTERS
/*-----------------------------------------------------------------------------------*/


$(document).ready(function () {
    var $container = $('#projects_grid .items');
	var $container2 = $('#projects_grid2 .items');
	var $container3 = $('#projects_grid3 .items');
    
    $container.imagesLoaded(function () {
        $container.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            filter: '*'
        });
    });
	$container2.imagesLoaded(function () {
        $container2.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            filter: '*'
        });
    });
	$container3.imagesLoaded(function () {
        $container3.isotope({
            itemSelector: '.item',
            layoutMode: 'fitRows',
            filter: '*'
        });
    });

    $('.filter li a').click(function () {

        $('.filter li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container.isotope({
            filter: selector
        });

        return false;
    });
	
	$('.filter2 li a').click(function () {

        $('.filter2 li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container2.isotope({
            filter: selector
        });

        return false;
    });

	$('.filter3 li a').click(function () {

        $('.filter3 li a').removeClass('active');
        $(this).addClass('active');

        var selector = $(this).attr('data-filter');
        $container3.isotope({
            filter: selector
        });

        return false;
    });

});


/*-----------------------------------------------------------------------------------*/
/*	05. PROJECTS PORTFOLIO HOVER
/*-----------------------------------------------------------------------------------*/
$(function () {
    $(' .items > li, .frame > a ').each(function () {
        $(this).hoverdir();
    });
});

