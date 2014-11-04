// CLIENT-SIDE - This is where jQuery goes!

console.log('hello!!!');

$(document).ready(function() {

	console.log('hello!');

	$.get('/volunteerDashboard/:id', {}, function(responseData) {

		console.log('responseData: ', responseData);

	});

}); // end jQuery ready