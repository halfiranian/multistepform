$(function () {  // ignore this line, you need it wherever you use jQuery, it closes on the last line

var secondForm = '\
	<input type="text" placeholder="First name" name="firstname">\
    <input type="text" placeholder="Last name" name="lastname">\
	<input type="text" placeholder="Postcode" name="zip">\
    <input type="tel" placeholder="Phone" name="phone">\
    '; // secondForm sets the form that replaces email on first submit

$("#multi .btn").click(function(){ // this is what happens when you hit submit
	var email = $("input#email").val();	// set the variable 'email' with the contents of input element with id email
	var firstname = $("input[name=firstname]").val();	// like above but targeting input with name firstname
	var lastname = $("input[name=lastname]").val();
	var phone = $("input[name=phone]").val();
	var zip = $("input[name=zip]").val();
	
	

	if($("input[name=firstname]").length){ // this is testing whether firstname exists, i.e. if length is more than zero, that will tell us if we're on form 1 or 2
	var stage = "final";
	var dataString = 'email=' + email + '&firstname=' + firstname + '&lastname=' + lastname + '&phone=' + phone + '&zip=' + zip;
	} else {
	var stage = "first";
	var dataString = 'email=' + email;		
	}
 	console.log(dataString); // this is just for testing, it writes to the console in the browser
	$.ajax({
      type: "POST",
      url: "http://action.greenpeace.org.uk/page/signup/multistep",
      data: dataString,
      success: function() {
		// irrelevant here because it looks like it fails because of cross-domain ajax rules. need to check if this works in IE etc
      }
     });
    replaceForm(email);
    return false;
});

	
function replaceForm(email){
	$('#email').replaceWith(secondForm);
	$('input').hide();	
	$('input').fadeIn(2000);
	$('#multi').append('<input type="hidden" name="email" value="' + email + '" id="email">');
	$('#result').text("whoopwhoop");
}	
	


}); //closing jQuery opener here










