$(() => {
	$('#js-headerImage').sparkle({
		direction: 'down',
		speed: 0.4,
		fadeSpeed: 3000,
		overlap: 5,
	});

	$('#js-profileLangChartLabel-c').sparkle({
		color: ['#ff9', '#fff'],
		direction: 'up',
		speed: 4,
		count: 260,
		fadeSpeed: 3000,
		overlap: 30,
	});

	$('#js-profileLangChartLabel-js').sparkle({
		color: ['#ff9', '#fff'],
		speed: 0.7,
		count: 180,
		fadeSpeed: 3000,
		overlap: 10,
	});
});
