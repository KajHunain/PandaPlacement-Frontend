
(function($) {


	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  	});

	$("#sidebarCollapse-md").click(function(){
		$("#sidebar").toggleClass('hide');
	});

	$(".overlay_close").click(function(){
		$(".overlay-box").hide();
	});



	$(".job").click(function(){
		$(".overlay-box").show();

		var dbdata = [];

		$('#ajaxButton').click(function() {
			
			$.ajax({
				url: 'https://jsonplaceholder.typicode.com/posts', // Example API endpoint
				method: 'GET',
				dataType: 'json',
				success: function(data) {
										
					console.log(data)
					// dbdata.push(i);
					// $('#result').html('<p>' + JSON.stringify(data) + '</p>');
				},
				error: function() {
					// Handle errors
					$('#result').html('<p>An error occurred.</p>');
				}
			});
		});

		console.log(dbdata)
	});

	// var secondTds = [];


	// $('tbody tr td:nth-child(2)').each(function() {
	// 	secondTds.push($(this).text());
	// });

	// console.log(secondTds)
})(jQuery);


document.getElementById('search-button').addEventListener('click', function() {
	const selectedJob = document.getElementById('job-search-input').value; 
});






