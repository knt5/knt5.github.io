$(() => {
	$('#js-header-image').sparkle({
		direction: 'down',
		speed: 0.4,
		fadeSpeed: 3000,
		overlap: 5,
	});

	$('#js-profile-lang-chart-label-c').sparkle({
		color: ['#ff9', '#fff'],
		direction: 'up',
		speed: 1,
		count: 150,
		fadeSpeed: 3000,
		overlap: 30,
	});

	$('#js-profile-lang-chart-label-js').sparkle({
		color: ['#ff9', '#fff'],
		speed: 1,
		count: 180,
		fadeSpeed: 3000,
		overlap: 10,
	});
});