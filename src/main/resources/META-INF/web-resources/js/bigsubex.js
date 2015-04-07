$(document).ready(function() {
	
	$('.userlogin').on('click', '#ember612', function(){
		var username = $('#email').val();
		var password = $('#password').val();
		if(!username){
			$('#emailError').text('Enter email');
			$('#emailError').css('display', 'block');
		}else if(validateEmail(username)){
			$('#emailError').text('');
			$('#emailError').css('display', 'none');
		}else{
			$('#emailError').text('Enter correct email');
			$('#emailError').css('display', 'block');
		}
		if(!password){
			$('#passwordError').text('Enter password');
			$('#passwordError').css('display', 'block');
		}else{
			$('#passwordError').text('');
			$('#passwordError').css('display', 'none');
		}
	});
});

function validateEmail(sEmail) {
	var filter = /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
	if (filter.test(sEmail)) {
		return true;
	}else {
		return false;
	}
}