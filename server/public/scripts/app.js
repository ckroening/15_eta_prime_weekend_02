function random(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
};

function displayStudents(data, current) {
	var studentTemplateData = $('#student-template').html();
	var studentTemplate = Handlebars.compile(studentTemplateData);

	var prev = 0;
	var next = 0;

	if (current === 0) {
		prev = data.length - 1;
	} else {
		prev = current - 1;
	}

	if (current === data.length - 1) {
		next = 0;
	} else {
		next = current + 1;
	}
	
	var studentInfo = {
		prevFirstName: data[prev].firstName,
		prevLastName: data[prev].lastName,
		firstName: data[current].firstName,
		lastName: data[current].lastName,
		nextFirstName: data[next].firstName,
		nextLastName: data[next].lastName
	};

	var studentHtml = studentTemplate(studentInfo);
	$('#students').html(studentHtml);
};

function displayMovies(data, current) {
	var movieTemplateData = $('#movie-template').html();
	var movieTemplate = Handlebars.compile(movieTemplateData);

	var movieHtml = movieTemplate(data[current]);
	$('#movies').html(movieHtml);
};

function display(data, current) {
	displayStudents(data, current);
	displayMovies(data, current);
};

$(document).ready(function() {
	$.ajax({
		url:'/data/eta.json',
	}).done(function(json) {
		var data = json.eta;
		var current = random(0, data.length - 1);
		console.log(data);
		display(data, current);

		//every new curly brace indicates need for an additional indent on subsequent lines.//
		$('.prev').on('click', function() {
			if (current === 0) {
				current === data.length - 1; 
				//" the only constants that should be hardcoded are 0,1,-1" (j/k) //
			} else {
				current--;
			}
			display(data, current);
		});

		$('.next').on('click', function() {
			if (current === data.length - 1) {
				current = 0;
			} else {
				current++;
			}
			display(data, current);
		});
	});
});
