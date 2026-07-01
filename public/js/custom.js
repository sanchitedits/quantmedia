$(function(){
	'use strict';

	// Handle SPA routing for links
	$('a').on('click', function(e) {
		var href = $(this).attr('href');
		if (href && href.startsWith('/') && !href.startsWith('http')) {
			var path = href === '/' ? '/hero' : href;
			var targetId = path.replace('/', '#');
			var $target = $(targetId);
			if ($target.length) {
				e.preventDefault();
				if (window.location.pathname !== href) {
					history.pushState(null, null, href);
				}
				$('html, body').stop().animate({
					scrollTop: $target.offset().top - 50
				}, 800, 'swing');
				// Update active nav state
				$('.navbar-nav .nav-item').removeClass('active');
				$(this).closest('.nav-item').addClass('active');
			} else if (href === '/') {
				e.preventDefault();
				if (window.location.pathname !== href) {
					history.pushState(null, null, href);
				}
				$('html, body').stop().animate({ scrollTop: 0 }, 800, 'swing');
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