
(function($) {

	function enabledAtag(element){
		
		$("#arricon").off('click'); 
		$("#arricon").css({
			'pointer-events': 'auto', 
			'color': 'white' 
		});
	};

	function disabledAtag(element){
		element.click(function(event) {
			event.preventDefault(); // Prevent the default link behavior
		});
		
		element.css({
			'pointer-events': 'none',
			'color': '#b9b9b9'
			});
	};


	function disabledropbutton(element){

		element.css({
			'display': 'none'
			});
	};
	function enabledropbutton(element){
		
		element.css({

			'display': 'block'
			});
	};
	



	$('#sidebarCollapse').on('click', function () {
      $('#sidebar').toggleClass('active');
  	});

	$("#sidebarCollapse-md").click(function(){
		$("#sidebar").toggleClass('hide');
	});

	$(".overlay_close").click(function(){
		$(".overlay-box").hide();		
		$(".inputs").removeAttr('disabled');
		enabledAtag($("#arricon"));
		enabledropbutton($("#dropdownMenuLink"));

	});

	$(".job").click(function(){
		$(".overlay-box").show();
		$(".inputs").attr('disabled', 'Disabled');

		disabledAtag($('#arricon'))	
		disabledropbutton($("#dropdownMenuLink"))

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






