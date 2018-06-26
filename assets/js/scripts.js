$(document).ready(function() {
	// $('#fullpage').fullpage({
	// 	scrollingSpeed: 500,
	// 	navigation: false,
	// 	anchors: ['AboutMe', 'Projects', 'Skills', 'ContactMe'],
 //    	loopBottom: true,
 //        loopTop: true,
	// });

	$('#fullpage').fullpage({
		//Navigation
		menu: '#menu',
		lockAnchors: false,
		anchors:['AboutMe', 'Portfolio', 'Skills', 'ContactMe'],
		navigation: false,
		navigationPosition: 'left',
		navigationTooltips: ['Introduction', 'Portfolio', 'Skills', 'Contact Me'],
		showActiveTooltip: false,
		slidesNavigation: false,
		slidesNavPosition: 'top',

		//Scrolling
		css3: true,
		scrollingSpeed: 1000,
		autoScrolling: true,
		fitToSection: true,
		fitToSectionDelay: 1000,
		scrollBar: false,
		easing: 'easeInOutCubic',
		easingcss3: 'ease',
		loopBottom: true,
		loopTop: false,
		loopHorizontal: true,
		continuousVertical: false,
		continuousHorizontal: false,
		scrollHorizontally: false,
		interlockedSlides: false,
		dragAndMove: false,
		offsetSections: false,
		resetSliders: false,
		fadingEffect: false,
		normalScrollElements: '#element1, .element2',
		scrollOverflow: false,
		scrollOverflowReset: false,
		scrollOverflowOptions: null,
		touchSensitivity: 15,
		normalScrollElementTouchThreshold: 5,
		bigSectionsDestination: null,

		//Accessibility
		keyboardScrolling: true,
		animateAnchor: true,
		recordHistory: true,

		//Design
		controlArrows: false,
		verticalCentered: false,
		sectionsColor : ['#ccc', '#a0a09a', '#fff', '#343638'],
		fixedElements: '#header, .footer',
		responsiveWidth: 0,
		responsiveHeight: 0,
		responsiveSlides: false,
		parallax: false,
		parallaxOptions: {type: 'reveal', percentage: 62, property: 'translate'},

		//Custom selectors
		sectionSelector: '.section',
		slideSelector: '.slide',

		lazyLoading: true,

		//events
		onLeave: function(index, nextIndex, direction){},
		afterLoad: function(anchorLink, index){},
		afterRender: function(){},
		afterResize: function(){},
		afterResponsive: function(isResponsive){},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex){},
		onSlideLeave: function(anchorLink, index, slideIndex, direction, nextSlideIndex){}
	});


	$("#works").changeWords({
		time: 2000,
        animate: "jackInTheBox",
        selector: "span",
        repeat: true
	});
});

var frontend = document.getElementById("frontEnd").getContext('2d');
var frontendChart = new Chart(frontend, {
    type: 'pie',
    maintainAspectRatio: true,
    data: {
        labels: ["CSS", "HTML", "CSS Framework", "Javascript", "Jquery"],
        datasets: [{
            data: [70, 80, 60, 65, 60],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)'
            ],
            borderWidth: 1
        }]
    }
});

var backend = document.getElementById("backEnd").getContext('2d');
var backendchart = new Chart(backend, {
    type: 'pie',
    data: {
        labels: ["SQL", "PHP", "LARAVEL"],
        datasets: [{
            data: [80, 75, 70],
            backgroundColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    }
});