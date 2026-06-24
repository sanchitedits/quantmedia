try {
	$(function(){
		try {
			'use strict';

			// Preloader
			var $preloader = $('#preloader');
			if ($preloader.length) {
				$preloader.delay(200).fadeOut('slow', function() {
					$(this).remove();
				});
			}

			AOS.init({
				once: true,
				duration: 1500,
			});
		} catch (e) {
			console.error('Inner JS Error:', e);
		}
	});
} catch (e) {
	console.error('Custom JS Error:', e);
}