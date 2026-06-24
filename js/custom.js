$(function(){
	'use strict';

	AOS.init({
	 	once: true,
	 	duration: 800,
		easing: 'ease-out-cubic',
		offset: 50,
	});

	// Handle SPA routing for links
	$('a').on('click', function(e) {
		var href = $(this).attr('href');
		if (href && href.startsWith('/') && !href.startsWith('http')) {
			var path = href === '/' ? '/hero' : href;
			var targetId = path.replace('/', '#');
			var $target = $(targetId);
			if ($target.length) {
				e.preventDefault();
				$('html, body').animate({
					scrollTop: $target.offset().top - 50
				}, 800, 'swing', function() {
					history.pushState(null, null, href);
				});
				// Update active nav state
				$('.navbar-nav .nav-item').removeClass('active');
				$(this).closest('.nav-item').addClass('active');
			} else if (href === '/') {
				e.preventDefault();
				$('html, body').animate({ scrollTop: 0 }, 800, 'swing', function() {
					history.pushState(null, null, href);
				});
			}
		}
	});

	// Handle initial load with path
	var path = window.location.pathname;
	if (path && path !== '/' && path !== '/index.html') {
		var targetId = path.replace('/', '#');
		var $target = $(targetId);
		if ($target.length) {
			setTimeout(function() {
				$('html, body').animate({
					scrollTop: $target.offset().top - 50
				}, 800, 'swing');
			}, 300);
		}
	}
});